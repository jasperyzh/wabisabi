/**
 * Coding Challenge #93: Double Pendulum
 * https://www.youtube.com/watch?v=uWzPe_S-RVE
 * 
 * reference
 * https://www.myphysicslab.com/pendulum/double-pendulum-en.html
 */

import p5, { Graphics } from 'p5';

export const double_pendulum = function (p: p5): void {

    const r1 = 133;
    const r2 = 130;
    const m1 = 10;
    const m2 = 10;
    let a1 = p.PI / 2;
    let a2 = p.PI / 8;

    let a1_v = 0;
    let a2_v = 0;

    const g = 1;

    let px2 = -1;
    let py2 = -1;

    let cx = 0;
    let cy = 0;

    let pg: Graphics;

    p.setup = (): void => {
        const cnv = p.createCanvas(800, 600)
        cnv.parent('double_pendulum');

        cx = p.width / 2;
        cy = p.height / 3;

        pg = p.createGraphics(p.width, p.height);
        pg.background(130);
        pg.translate(cx, cy);
    };
    p.draw = (): void => {

        let num1 = -g * (2 * m1 + m2) * p.sin(a1);
        let num2 = -m2 * g * p.sin(a1 - 2 * a2);
        let num3 = -2 * p.sin(a1 - a2) * m2;
        let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * p.cos(a1 - a2);
        let den = r1 * (2 * m1 + m2 - m2 * p.cos(2 * a1 - 2 * a2));
        const a1_a = (num1 + num2 + num3 * num4) / den;

        num1 = 2 * p.sin(a1 - a2);
        num2 = a1_v * a1_v * r1 * (m1 + m2);
        num3 = g * (m1 + m2) * p.cos(a1);
        num4 = a2_v * a2_v * r2 * m2 * p.cos(a1 - a2);
        den = r2 * (2 * m1 + m2 - m2 * p.cos(2 * a1 - 2 * a2));
        const a2_a = (num1 * (num2 + num3 + num4)) / den;


        p.image(pg, 0, 0);
        // p.background(200);

        p.push();
        p.stroke(0);
        p.strokeWeight(2);
        p.translate(cx, cy);


        // draw first pendulum
        const x1 = r1 * p.sin(a1);
        const y1 = r1 * p.cos(a1);

        const x2 = x1 + r2 * p.sin(a2);
        const y2 = y1 + r2 * p.cos(a2);

        p.line(0, 0, x1, y1)
        p.fill(0);
        p.ellipse(x1, y1, m1, m1)

        // draw second pendulum
        p.line(x1, y1, x2, y2)
        p.fill(0);
        p.ellipse(x2, y2, m2, m2)

        // a1 += 0.03;
        // a2 -= 0.0433;

        a1_v += a1_a;
        a2_v += a2_a;
        a1 += a1_v;
        a2 += a2_v;

        //friction
        a1_v *= 0.999;
        a2_v *= 0.999;

        p.pop();

        p.push();
        pg.strokeWeight(1);
        pg.stroke(255);
        if (p.frameCount > 1) {
            pg.line(px2, py2, x2, y2);

        }
        // pg.point(x2, y2);
        p.pop();

        px2 = x2;
        py2 = y2;

    };
};
