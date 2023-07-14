import Box2DLib from "box2d-wasm";

Box2DLib({
  /**
   * This is the default implementation of locateFile.
   * Modify this logic if your Box2D.wasm lives in a different directory.
   */
  locateFile: (url, scriptDirectory) => "file:///opt/render/project/src/node_modules/box2d-wasm/dist/umd/Box2D.simd.was"
});

export let box2d = null;

export function initBox2D() {
    return new Promise(resolve => {
        Box2DLib().then((re) => {
            box2d = re;
            resolve();
        });
    });
}
