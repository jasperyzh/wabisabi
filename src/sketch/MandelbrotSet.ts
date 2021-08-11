import p5 from 'p5';

// https://www.youtube.com/watch?v=6z7GQewK-Ks

export const mandelbrot_set = function (p: p5): void {

    const minval = -0.5;
    const maxval = 0.5;

    let minSlider: p5.Element;
    let maxSlider: p5.Element;

    const maxiterations = 100;

    let frDiv: p5.Element;
    p.setup = (): void => {

        const cnv = p.createCanvas(200, 200)
        cnv.parent('mandelbrot_set');

        p.pixelDensity(1);


        minSlider = p.createSlider(-2.5, 0, -2.5, 0.01);
        maxSlider = p.createSlider(0, 2.5, 2.5, 0.01);

        frDiv = p.createDiv('');

    };

    p.draw = (): void => {
        // p.background(13, 13, 13, 80);

        p.loadPixels();

        for (let x = 0; x < p.width; x++) {
            for (let y = 0; y < p.height; y++) {

                let a = p.map(x, 0, p.width, Number(minSlider.value()), Number(maxSlider.value()));
                let b = p.map(y, 0, p.height, Number(minSlider.value()), Number(maxSlider.value()));

                const ca = a;
                const cb = b;

                let n = 0;

                while (n < maxiterations) {
                    const aa = a * a - b * b;
                    const bb = 2 * a * b;
                    a = aa + ca;
                    b = bb + cb;
                    if (a * a + b * b > 16) {
                        break;
                    }
                    n++;
                }

                let bright = p.map(n, 0, maxiterations, 0, 1);
                bright = p.map(p.sqrt(bright), 0, 1, 0, 255);

                if (n === maxiterations) {
                    bright = 0;
                }

                const pix = (x + y * p.width) * 4;
                p.pixels[pix + 0] = bright;
                p.pixels[pix + 1] = bright;
                p.pixels[pix + 2] = bright;
                p.pixels[pix + 3] = 255;
            }
        }
        p.updatePixels();

        frDiv.html(String(p.floor(p.frameRate())));
    }
};
