class Status implements IStatus {
    canvas: HTMLCanvasElement;
    canvasContext: CanvasRenderingContext2D;
    containerId: string;
    text: string = Constants.textStartup;
    textCoords: coords;
    textMetrics: TextMetrics;

    constructor(canvasPair: canvasContextPair, containerId: string) {
        this.canvasContext = canvasPair.context;
        this.canvas = canvasPair.canvas;
        this.containerId = containerId;
    }

    public showStatus(): void {
        /*
        this.canvasContext.font = `${Constants.fontSizeScore} "${Constants.font}"`;
        this.canvasContext.textAlign = "left";
        this.canvasContext.fillStyle = Constants.styleText;
        this.textMetrics = this.canvasContext.measureText("Inititalizing Finger Matrix... done");
        this.textCoords = { x: 0, y: 0 };
        this.displayText();
        */
    }

    private displayText(): void {
        this.canvasContext.fillText(this.text, this.textCoords.x, this.textCoords.y);
    }

    public close(): void {
        const container = document.getElementById("container");
        container.removeChild(this.canvas);
    }
}