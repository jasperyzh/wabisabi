import p5 from 'p5';

export const sketch = function (p: p5) {

    class ColorHelper {
        private static getColorVector(c: p5.Color) {
            return p.createVector(
                p.red(c),
                p.green(c),
                p.blue(c)
            );
        }

        public static rainbowColorBase() {
            return [
                p.color('red'),
                p.color('orange'),
                p.color('yellow'),
                p.color('green'),
                p.color(38, 58, 150), // blue
                p.color('indigo'),
                p.color('violet')
            ];
        }

        public static getColorsArray(total: number, baseColorArray: p5.Color[] | null = null): p5.Color[] {

            if (baseColorArray == null) {
                baseColorArray = ColorHelper.rainbowColorBase();
            }
            const rainbowColors = baseColorArray.map(x => this.getColorVector(x));

            const colours = new Array<p5.Color>();
            for (let i = 0; i < total; i++) {
                const colorPosition = i / total;
                const scaledColorPosition = colorPosition * (rainbowColors.length - 1);

                const colorIndex = Math.floor(scaledColorPosition);
                const colorPercentage = scaledColorPosition - colorIndex;

                const nameColor = this.getColorByPercentage(rainbowColors[colorIndex],
                    rainbowColors[colorIndex + 1],
                    colorPercentage);

                colours.push(p.color(nameColor.x, nameColor.y, nameColor.z))
            }

            return colours;
        }

        private static getColorByPercentage(firstColor: p5.Vector, secondColor: p5.Vector, percentage: number) {
            // assumes colors are p5js vectors
            const firstColorCopy = firstColor.copy();
            const secondColorCopy = secondColor.copy();

            const deltaColor = secondColorCopy.sub(firstColorCopy);
            const scaledDeltaColor = deltaColor.mult(percentage);
            return firstColorCopy.add(scaledDeltaColor);
        }
    }

    class PolygonHelper {
        public static draw(numberOfSides: number, width: number) {
            p.push();
            const angle = p.TWO_PI / numberOfSides;
            const radius = width / 2;
            p.beginShape();
            for (let a = 0; a < p.TWO_PI; a += angle) {
                const sx = p.cos(a) * radius;
                const sy = p.sin(a) * radius;
                p.vertex(sx, sy);
            }
            p.endShape(p.CLOSE);
            p.pop();
        }
    }

    let numberOfShapesControl: p5.Element;

    p.setup = function () {

        console.log("🚀 - Setup initialized - P5 is running");

        // https://p5js.org/reference/#/p5.Element/id
        const cnv = p.createCanvas(800, 600)
        cnv.parent('p5-typescript');


        p.rectMode(p.CENTER).noFill().frameRate(30);
        // NUMBER OF SHAPES SLIDER
        numberOfShapesControl = p.createSlider(1, 30, 15, 1).position(10, 10).style("width", "100px").parent("p5-typescript");

    };
    /* p.windowResized = () => {
        p.resizeCanvas(800, 600);
    } */
    p.draw = function () {

        p.background(0);

        // CENTER OF SCREEN
        p.translate(p.width / 2, p.height / 2);

        const numberOfShapes = <number>numberOfShapesControl.value();
        const colours = ColorHelper.getColorsArray(numberOfShapes);

        // CONSISTENT SPEED REGARDLESS OF FRAMERATE
        const speed = (p.frameCount / (numberOfShapes * 30)) * 2;

        // DRAW ALL SHAPES
        for (let i = 0; i < numberOfShapes; i++) {
            p.push();
            const lineWidth = 8;
            const spin = speed * (numberOfShapes - i);
            const numberOfSides = 3 + i;
            const width = 40 * i;
            p.strokeWeight(lineWidth);
            p.stroke(colours[i]);
            p.rotate(spin);
            PolygonHelper.draw(numberOfSides, width)
            p.pop();
        }
    };
};
// new p5(sketch);
