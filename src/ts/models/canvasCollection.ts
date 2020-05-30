/// <reference path="../interfaces/ICanvas.ts" />

class canvasContextPair {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
}

class canvasCollection {
    canvasFace: canvasContextPair;
    canvasWeapons: canvasContextPair;
    canvasScore: canvasContextPair;
    canvasClick: canvasContextPair;
}

// class contextCollection {
//     contextFace: CanvasRenderingContext2D;
//     contextWeapons: CanvasRenderingContext2D;
//     contextScore: CanvasRenderingContext2D;
//     contextClick: CanvasRenderingContext2D;
// }