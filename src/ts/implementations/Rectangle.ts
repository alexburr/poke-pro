/// <reference path="../constants.ts" />
/// <reference path="../models/coords.ts" />
/// <reference path="../interfaces/IRectangle.ts" />

class Rectangle implements IRectangle {

    gameCanvasContext: CanvasRenderingContext2D;

    constructor(gameCanvasContext: CanvasRenderingContext2D) {
        this.gameCanvasContext = gameCanvasContext;
    }

    public drawRectangle(coords: coords = null, width: number = 0, height: number = 0, fillStyle: string = null): void {
        this.gameCanvasContext.fillStyle = (fillStyle != null) ? fillStyle : CONSTANTS.styleFill;
        if (coords == null) {
            return;
        } else {
            this.gameCanvasContext.fillRect(coords.x, coords.y, width, height);
        }
    }

    public clearRectangle(coords: coords = null, width: number = 0, height: number = 0): void {
        if (coords == null) {
            return;
        } else {
            this.gameCanvasContext.clearRect(coords.x, coords.y, width, height);
        }
    }

    public isCoordsInRectangle(coords: coords): boolean {  
        return (coords.x > 10 &&
            coords.x < 60 &&
            coords.y > 420 &&
            coords.y < 470);
    }
}