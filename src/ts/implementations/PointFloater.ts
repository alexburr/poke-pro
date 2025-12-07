/// <reference path="../Constants.ts" />
/// <reference path="../interfaces/IPointFloater.ts" />

class PointFloater implements IPointFloater {

    canvasContext: CanvasRenderingContext2D;

    /*step: number = 0;
    steps: number = 0;
    delay: number = 20;*/

    constructor(gameCanvasContext: CanvasRenderingContext2D) {
        this.canvasContext = gameCanvasContext;

        this.canvasContext.font = `12px "${Constants.font}"`;
        this.canvasContext.fillStyle = Constants.styleText;
    }

    public floatPoints(coords: coords, points: number): void {

        // temporarily turning this off until I can get it working right
        if (false) {
            let pointsText: string = points.toString();
            this.canvasContext.fillText(pointsText, coords.x, coords.y);

            setTimeout(() => {
                const metrics: TextMetrics = this.canvasContext.measureText(pointsText);
                this.canvasContext.clearRect(coords.x, coords.y - metrics.actualBoundingBoxAscent, metrics.width, metrics.actualBoundingBoxAscent);
            }, 1000);
        }
        /*
        this.RunTextTopToBottom(pointsText);
        */
    }

    /*private RunTextTopToBottom(pointsText: string) {
        // TODO the text should actually float up
        // See http://www.authorcode.com/text-animation-in-html5/ for ideas
        this.step++;
        this.canvasContext.clearRect(0, 0, 640, 480);
        this.canvasContext.save();
        this.canvasContext.translate(640 / 2, this.step);
        this.canvasContext.fillText(pointsText, 0, 0);
        this.canvasContext.restore();
        if (this.step == this.steps)
            this.step = 0;
        if (this.step < this.steps)
            var t = setTimeout('this.RunTextTopToBottom()', this.delay);
    }*/
}