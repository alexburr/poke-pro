/// <reference path="../constants.ts" />
/// <reference path="../models/coords.ts" />
/// <reference path="../models/eyeBounds.ts" />
/// <reference path="../interfaces/IEye.ts" />

class Eye implements IEye {

    canvasContext: CanvasRenderingContext2D;
    coords: coords;
    xBounds: eyeBounds;
    yBounds: eyeBounds;

    constructor(canvasContext: CanvasRenderingContext2D, ) {
        this.canvasContext = canvasContext;
    }

    public draw(coords: coords): void {
        this.coords = coords;        
        this.canvasContext.moveTo(this.coords.x + CONSTANTS.radiusEye, this.coords.y);
        this.xBounds = this.getBounds(this.coords.x);
        this.yBounds = this.getBounds(this.coords.y);
        this.canvasContext.arc(this.coords.x, this.coords.y, CONSTANTS.radiusEye, 0, Math.PI * 2, true);
    }

    public isCoordsInEye(coords: coords): boolean {
        return (coords.x > this.xBounds.lower &&
            coords.x < this.xBounds.upper &&
            coords.y > this.yBounds.lower &&
            coords.y < this.yBounds.upper);
    }

    private getBounds(coordinate: number): eyeBounds {
        return {
             lower: coordinate - CONSTANTS.radiusEye, 
             upper: coordinate + CONSTANTS.radiusEye
        };
    }
}