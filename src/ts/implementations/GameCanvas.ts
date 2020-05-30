/// <reference path="../interfaces/ICanvas.ts" />

class GameCanvas implements ICanvas {

    canvas: HTMLCanvasElement;
    canvasContext: CanvasRenderingContext2D;

    constructor(elementId: string) {
        this.canvas = <HTMLCanvasElement>document.getElementById(elementId);
        this.canvasContext = this.canvas.getContext('2d');
    }

    public getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    public getContext(): CanvasRenderingContext2D {
        return this.canvasContext;
    }
}