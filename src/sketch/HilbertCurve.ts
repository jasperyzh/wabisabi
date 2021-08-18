import p5 from 'p5';


/**
 * Hilbert's Curve: Is infinite math useful?
 * https://www.youtube.com/watch?v=3s7h2MHQtxc
 * 
 * Iterative algorithm for drawing Hilbert curve
 * http://blog.marcinchwedczuk.pl/iterative-algorithm-for-drawing-hilbert-curve
 * 
 * Coding in the Cabana 3: Hilbert Curve
 * https://www.youtube.com/watch?v=dSK-MW-zuAc
 */

export const hilbert_curve = function (p: p5): void {

    const order = 6;
    const N = Number(p.pow(2, order));
    const total = N * N;

    const path: p5.Vector[] = [];

    let counter = 0;

    const hilbert = (i: number) => {

        const points: p5.Vector[] = [
            p.createVector(0, 0),
            p.createVector(0, 1),
            p.createVector(1, 1),
            p.createVector(1, 0),
        ]

        let index = i & 3;
        const v = points[index];

        for (let j = 1; j < order; j++) {

            i = i >>> 2;
            index = i & 3;

            const len = p.pow(2, j);
            if (index == 0) {
                const temp = v.x;
                v.x = v.y;
                v.y = temp;
            } else if (index == 1) {
                v.y += len;
            } else if (index == 2) {
                v.x += len;
                v.y += len;
            } else if (index == 3) {
                const temp = len - 1 - v.x;
                v.x = len - 1 - v.y;
                v.y = temp;
                v.x += len;
            }
        }
        return v;
    }


    p.setup = (): void => {

        const cnv = p.createCanvas(1024, 1024)
        cnv.parent('hilbert_curve');

        p.colorMode(p.HSB, 360, 255, 255);
        p.background(13);

        for (let i = 0; i < total; i++) {
            path[i] = hilbert(i);
            const len = p.width / N;
            path[i].mult(len);
            path[i].add(len / 2, len / 2);
        }
        // dSlider = p.createSlider(1, 360, 15, 1).position(10, 10).style("width", "600px").parent("hilbert_curve");
        // nSlider = p.createSlider(1, 360, 15, 1).position(10, 30).style("width", "600px").parent("hilbert_curve");
    };

    p.draw = (): void => {
        p.background(13, 13, 13, 13);

        p.stroke(255);
        p.strokeWeight(13);
        p.noFill();
        p.beginShape();
        for (let i = 1; i < counter; i++) {
            // p.vertex(path[i].x, path[i].y);
            const h = p.map(i, 0, path.length, 0, 360);
            p.stroke(h, 255, 255);
            p.line(path[i].x, path[i].y, path[i -1].x, path[i -1].y);

        }
        p.endShape();

        counter += 23;
        if (counter >= path.length) {
            counter = path.length;
        }

        // number each point with text
        /* p.strokeWeight(1);
        for (let i = 0; i < path.length; i++) {
            p.point(path[i].x, path[i].y);
            p.text(i, path[i].x + 5, path[i].y - 5)
        } */
    }
};
