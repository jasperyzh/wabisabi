/**
 * Coding Challenge #27: Fireworks
 * https://thecodingtrain.com/CodingChallenges/027-fireworks.html
 * 
 * - issue with implementing typescript classes, constructor with default value does not play well with other class, TS does not recognize the variable and deem it possibly undefined
 */

import p5, { Vector } from 'p5';

export const fireworks = function (p: p5): void {
    /* 
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
    
        let pg: Graphics; */

    class Firework {
        constructor(
            public hu: number = p.random(255),
            public firework: Particle,
            public exploded: boolean = false,
            public particles: Particle[] = [],

        ) {
            this.firework = new Particle(p.random(p.width), p.height, this.hu, true);
            // this.exploded = false;
            // this.particles = [];
        }

        done() {
            if (this.exploded && this.particles.length === 0) {
                return true;
            } else {
                return false;
            }
        }

        update() {
            if (!this.exploded) {
                this.firework.applyForce(gravity);
                this.firework.update();



                if (this.firework.vel.y >= 0) {
                    this.exploded = true;
                    this.explode();
                }
            }

            for (let i = this.particles.length - 1; i >= 0; i--) {
                this.particles[i].applyForce(gravity);
                this.particles[i].update();

                if (this.particles[i].done()) {
                    this.particles.splice(i, 1);
                }
            }
        }

        explode() {
            for (let i = 0; i < 100; i++) {
                const p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
                this.particles.push(p);
            }
        }

        show() {
            if (!this.exploded) {
                this.firework.show();
            }

            for (let i = 0; i < this.particles.length; i++) {
                this.particles[i].show();
            }
        }
    }


    class Particle {
        constructor(
            public x: number,
            public y: number,
            public hu: number,
            public firework: boolean,
            public pos?: Vector,
            public lifespan: number = 255,
            public acc: Vector = p.createVector(0, 0),
            public vel?: Vector) {

            this.pos = p.createVector(x, y);
            this.firework = firework;
            this.lifespan = 255;
            this.hu = hu;

            if (this.firework) {
                this.vel = p.createVector(0, p.random(-12, -8));
            } else {
                this.vel = p5.Vector.random2D();
                this.vel.mult(p.random(2, 10));
            }

        }

        applyForce(force: Vector) {
            this.acc.add(force);
        }

        update() {
            if (!this.firework) {
                this.vel.mult(0.9);
                this.lifespan -= 4;
            }
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
        }

        done() {
            if (this.lifespan < 0) {
                return true;
            } else {
                return false;
            }
        }

        show() {
            p.colorMode(p.HSB);

            if (!this.firework) {
                p.strokeWeight(2);
                p.stroke(this.hu, 255, 255, this.lifespan);
            } else {
                p.strokeWeight(4);
                p.stroke(this.hu, 255, 255);
            }

            p.point(this.pos.x, this.pos.y);
        }
    }

    const fireworks = [];
    let gravity: Vector;

    p.setup = (): void => {
        const cnv = p.createCanvas(800, 600)
        cnv.parent('fireworks');


        p.colorMode(p.HSB);
        gravity = p.createVector(0, 0.2);
        p.stroke(255);
        p.strokeWeight(4);

        p.background(13);

        /* 
                cx = p.width / 2;
                cy = p.height / 3;
        
                pg = p.createGraphics(p.width, p.height);
                pg.background(130);
                pg.translate(cx, cy); */
    };
    p.draw = (): void => {

        p.colorMode(p.RGB);
        p.background(0, 0, 0, 25);

        if (p.random(1) < 0.04) {
            fireworks.push(new Firework());
        }

        for (let i = fireworks.length - 1; i >= 0; i--) {
            fireworks[i].update();
            fireworks[i].show();

            if (fireworks[i].done()) {
                fireworks.splice(i, 1);
            }
        }

        /*   let num1 = -g * (2 * m1 + m2) * p.sin(a1);
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
          py2 = y2; */

    };
};
