/// <reference path="../Interfaces/IGameCanvas.ts" />
/// <reference path="../Constants.ts" />

class GameCanvas implements IGameCanvas {

    canvas: HTMLCanvasElement;
    canvasContext: CanvasRenderingContext2D;
    dimensions: dimensions;

    constructor(elementId: string) {
        this.canvas = <HTMLCanvasElement>document.getElementById(elementId);
        this.canvasContext = this.canvas.getContext('2d');
        this.dimensions = { height: _CONSTANTS.canvasHeight, width: _CONSTANTS.canvasWidth };
    }

    public getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    public getContext(): CanvasRenderingContext2D {
        return this.canvasContext;
    }

    public getDimensions(): dimensions {
        return this.dimensions;
    }
}