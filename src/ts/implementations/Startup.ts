class Startup implements IStartup {

    canvas: HTMLCanvasElement;
    canvasContext: CanvasRenderingContext2D;
    containerId: string;
    text: string = _CONSTANTS.textStartup;

    constructor(canvasPair: canvasContextPair, containerId: string) {
        this.canvasContext = canvasPair.context;
        this.canvas = canvasPair.canvas;
        this.containerId = containerId;
    }

    public waitForClick(callback: () => any): void {
        this.canvas.addEventListener('mousedown', () => {
            this.close();
            callback();
        });
    }

    public showStartupText(): void {
        this.canvasContext.font = `${_CONSTANTS.fontSizeScore} "${_CONSTANTS.font}"`;
        this.canvasContext.textAlign = "left";
        this.canvasContext.fillStyle = _CONSTANTS.styleText;
        const metrics: TextMetrics = this.canvasContext.measureText(this.text);
        this.canvasContext.fillText(this.text, (this.canvas.width / 2) - (metrics.width / 2), (this.canvas.height / 2) - (metrics.actualBoundingBoxAscent / 2));
    }

    public close(): void {
        const container = document.getElementById("container");
        container.removeChild(this.canvas);
    }
}