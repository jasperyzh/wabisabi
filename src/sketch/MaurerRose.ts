import p5, { p5InstanceExtensions } from 'p5';

// https://www.youtube.com/watch?v=4uU9lZ-HSqA

export const maurer_rose = function (p: p5): void {

    let n = 0;
    let d = 0;
    // let dSlider: p5.Element;
    // let nSlider: p5.Element;

    p.setup = (): void => {

        const cnv = p.createCanvas(800, 600)
        cnv.parent('maurer_rose');
        p.angleMode(p.DEGREES);

        // numberOfShapesControl = p.createSlider(1, 30, 15, 1).position(10, 10).style("width", "100px").parent("p5-typescript");

        // dSlider = p.createSlider(1, 360, 15, 1).position(10, 10).style("width", "600px").parent("maurer_rose");
        // nSlider = p.createSlider(1, 360, 15, 1).position(10, 30).style("width", "600px").parent("maurer_rose");


    };

    p.draw = (): void => {
        p.background(13, 13, 13, 80);
        p.translate(p.width / 2, p.height / 2);
        p.stroke(255);
        /* 
                d = Number(dSlider.value());
                n = Number(nSlider.value()); */

        p.noFill();
        p.strokeWeight(1);
        p.beginShape();
        for (let i = 0; i < 361; i++) {
            const k = i * d;
            const r = 220 * p.sin(n * k);
            const x = r * p.cos(k);
            const y = r * p.sin(k);
            p.vertex(x, y);
        }
        p.endShape();

        /*   p.noFill();
          p.stroke(255, 0, 255, 255);
          p.strokeWeight(2);
          p.beginShape();
          for (let i = 0; i < 361; i++) {
              const k = i;
              const r = 220 * p.sin(n * k);
              const x = r * p.cos(k);
              const y = r * p.sin(k);
              p.vertex(x, y);
          }
          p.endShape(); */

        n += 0.0001;
        d += 0.01;
    }
};
