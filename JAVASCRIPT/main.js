import { World } from './world.js';

function main () {
    const container = document.querySelector('#scene-conatiner');

    const world = new World(container);

    world.render();
}

main();