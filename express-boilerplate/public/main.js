const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var lastFrame = Date.now();
var fps = 1000/60;

function main() {
    loop();
}

function loop() {
    let now = Date.now();
    let delta = now - lastFrame;

    if (delta >= fps) {
        update(delta);
        draw(ctx);
    }

    requestAnimationFrame(loop);
}

function update(delta) {
    // update code here
}

function draw(ctx) {
    // draw code here
}

main();