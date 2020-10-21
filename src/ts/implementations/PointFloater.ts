/// <reference path="../Constants.ts" />
/// <reference path="../interfaces/IPointFloater.ts" />

class PointFloater implements IPointFloater {

    canvasContext: CanvasRenderingContext2D;
    coords: coords = null;
    pointsText: string = "";

    // step: number = 0;
    // steps: number = 0;
    // delay: number = 20;

    constructor(gameCanvasContext: CanvasRenderingContext2D) {
        this.canvasContext = gameCanvasContext;
        this.canvasContext.font = _CONSTANTS.fontScoreFloat;
        this.canvasContext.fillStyle = _CONSTANTS.styleText;
    }

    public floatPoints(coords: coords, points: number): void {
        this.clearPoints();
        this.setCoordsAndPoints(coords, points);

        // temporarily turning this off until I can get it working right
        if (false) {
            this.canvasContext.fillText(this.pointsText, this.coords.x, this.coords.y);

            setTimeout(() => {
                this.clearPoints();
            }, 1000);
        }
        //this.RunTextTopToBottom(this.pointsText);
    }

    private clearPoints(): void {
        if (this.coords != null) {
            const metrics: TextMetrics = this.canvasContext.measureText(this.pointsText);
            this.canvasContext.clearRect(this.coords.x, this.coords.y - metrics.actualBoundingBoxAscent, metrics.width, metrics.actualBoundingBoxAscent);
        }        
    }

    private setCoordsAndPoints(coords: coords, points: number): void {
        this.coords = coords;
        this.pointsText = points.toString();
    }

    // private RunTextTopToBottom(pointsText: string) {
    //     // TODO the text should actually float up
    //     // See http://www.authorcode.com/text-animation-in-html5/ for ideas
    //     this.step++;
    //     this.canvasContext.clearRect(0, 0, 640, 480);
    //     this.canvasContext.save();
    //     this.canvasContext.translate(640 / 2, this.step);
    //     this.canvasContext.fillText(pointsText, 0, 0);
    //     this.canvasContext.restore();
    //     if (this.step == this.steps)
    //         this.step = 0;
    //     if (this.step < this.steps)
    //         var t = setTimeout('this.RunTextTopToBottom()', this.delay);
    // }
}