import { createCamera } from './camera.js';
import { createCube } from './cube.js';
import { createScene } from './scene.js';

import { createRenderer } from './renderer.js';
import { Resizer } from './resizer.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;

class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        container.append(renderer.domElement);

        const cube = createCube();

        scene.add(cube);

        const resizer = new Resizer(container, camera, renderer);
    }

    render() {
        // draw a single frame
        renderer.render(scene, camera);
    }
}

export { World };