import p5 from 'p5';

//https://www.youtube.com/watch?v=biN3v3ef-Y0

export const sketch_alien_invader = function (p: p5): void {

    class Bullet {
        constructor(
            public x: number,
            public y: number,
            public r: number = 4,
            public is_dead: boolean = false
        ) { }

        show() {
            p.noStroke()
            p.fill(255, 255, 100);
            p.ellipse(this.x, this.y, this.r * 2, this.r * 2);
        }

        move() {
            this.y -= 2
        }
        hits(entity: Alien) {
            const d = p.dist(this.x, this.y, entity.x, entity.y);
            if (d < this.r + entity.r) {
                return true;
            } else {
                return false;
            }
        }
        destroy() {
            this.is_dead = true;
        }
    }
    class Alien {
        constructor(
            public x: number = (p.width / 2) - 8,
            public y: number = 50,
            public r: number = 20,
            public xdir: number = 1,
            public is_dead: boolean = false

        ) { }

        show() {
            p.fill(255, 0, 200);
            p.ellipse(this.x, this.y, this.r * 2, this.r * 2);
        }
        destroy() {
            console.log('hel')
            this.is_dead = true;
        }
        move() {
            this.x = this.x + this.xdir;
        }
        shiftDown() {
            this.xdir *= -1.08; // increase speed as each shift
            this.y += this.r;
        }
    }

    class Ship {
        constructor(
            public x: number = (p.width / 2) - 8,
            public y: number = p.height - 32,
            readonly width: number = 16,
            readonly height: number = 30,
            public xdir: number = 0
        ) { }
        show() {
            // render ship
            p.fill(255);
            p.rect(this.x, this.y, this.width, this.height);
        }
        setDir(dir: number) {
            this.xdir = dir;
        }
        move() {
            this.x += this.xdir * 13;
        }

    }

    let ship: Ship;
    const aliens = Array<Alien>();
    const bullets = Array<Bullet>();

    p.setup = (): void => {

        const cnv = p.createCanvas(400, 300)
        cnv.parent('sketch_alien_invader');

        ship = new Ship();

        for (let i = 0; i < 6; i++) {
            aliens[i] = new Alien(60 * (i + 1), p.random(20) + 50);
        }
    };

    p.keyReleased = (): void => {
        ship.setDir(0);
    }

    p.keyPressed = (): void => {
        if (p.keyCode === 32) {
            const bullet = new Bullet(ship.x + ship.width / 2, ship.y);
            bullets.push(bullet);
        }
        if (p.keyCode === p.RIGHT_ARROW) {
            ship.setDir(1);
        } else if (p.keyCode === p.LEFT_ARROW) {
            ship.setDir(-1);
        }
    }

    p.draw = (): void => {

        let aliens_hit_edge = false;

        p.background(0);
        ship.show();
        ship.move();

        for (let i = 0; i < aliens.length; i++) {
            aliens[i].show();
            aliens[i].move();

            if (aliens[i].x > p.width || aliens[i].x < 0) {
                aliens_hit_edge = true
            }

            if (aliens[i].is_dead) {
                aliens.splice(i, 1);
            }
        }

        if (aliens_hit_edge) {
            for (let i = 0; i < aliens.length; i++) {
                aliens[i].shiftDown();
            }
            aliens_hit_edge = false;
        }

        for (let i = bullets.length - 1; i >= 0; i--) {
            bullets[i].show();
            bullets[i].move();
            for (let j = 0; j < aliens.length; j++) {
                if (bullets[i].hits(aliens[j])) {
                    bullets[i].destroy();
                    aliens[j].destroy();
                }
            }
            if (bullets[i].is_dead) {
                bullets.splice(i, 1);
            }
        }
    };
};
