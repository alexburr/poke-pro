/// <reference path="../constants.ts" />
/// <reference path="../models/coords.ts" />
/// <reference path="../models/dimensions.ts" />
/// <reference path="../interfaces/IRectangle.ts" />

class Rectangle implements IRectangle {

    gameCanvasContext: CanvasRenderingContext2D;
    _coords: coords;
    _dimensions: dimensions;

    constructor(gameCanvasContext: CanvasRenderingContext2D) {
        this.gameCanvasContext = gameCanvasContext;
    }

    public draw(coords: coords = null, dimensions: dimensions = null, fillStyle: string = null): void {
        this.gameCanvasContext.fillStyle = (fillStyle != null) ? fillStyle : CONSTANTS.styleFill;
        if (coords != null && dimensions != null) {
            this._coords = coords;
            this._dimensions = dimensions;
            this.gameCanvasContext.fillRect(this._coords.x, this._coords.y, this._dimensions.width, this._dimensions.height);
        }
    }

    public clear(): void {
        this.gameCanvasContext.clearRect(this._coords.x, this._coords.y, this._dimensions.width, this._dimensions.height);
    }

    public isCoordsIn(coords: coords): boolean {  
        return (coords.x > this._coords.x &&
            coords.x < this._coords.x + this._dimensions.width &&
            coords.y > this._coords.y &&
            coords.y < this._coords.y + this._dimensions.height);
            
    }
}