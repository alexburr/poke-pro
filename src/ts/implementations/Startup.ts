class Startup implements IStartup {

    canvas: HTMLCanvasElement;
    canvasContext: CanvasRenderingContext2D;
    containerId: string;
    text: string = Constants.textStartup;
    music: sound;
    textMetrics: TextMetrics;
    textCoords: coords;

    constructor(canvasPair: canvasContextPair, containerId: string) {
        this.canvasContext = canvasPair.context;
        this.canvas = canvasPair.canvas;
        this.containerId = containerId;
    }

    public waitForClick(callback: () => any): void {
        this.canvas.addEventListener('mousedown', () => {
            //this.isClick = true;            
            //this.playMusic();
            //this.close();
            callback();
        });
    }

    public showStartupText(): void {
        this.canvasContext.font = `${Constants.fontSizeScore} "${Constants.font}"`;
        this.canvasContext.textAlign = "left";
        this.canvasContext.fillStyle = Constants.styleText;
        this.textMetrics = this.canvasContext.measureText(this.text);
        this.textCoords = { x: (this.canvas.width / 2) - (this.textMetrics.width / 2), y: (this.canvas.height / 2) - (this.textMetrics.actualBoundingBoxAscent / 2) + 25 };
        this.displayText();
    }

    public close(): void {
        const container = document.getElementById("container");
        container.removeChild(this.canvas);
    }

    private displayText(): void {
        this.canvasContext.fillText(this.text, this.textCoords.x, this.textCoords.y);
    }

    private hideText(): void {
        this.canvasContext.clearRect(this.textCoords.x, this.textCoords.y - this.textMetrics.actualBoundingBoxAscent, this.textMetrics.width, this.textMetrics.actualBoundingBoxAscent);
    }
}