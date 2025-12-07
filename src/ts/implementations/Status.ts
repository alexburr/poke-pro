class Status implements IStatus {
    canvas: HTMLCanvasElement;
    canvasContext: CanvasRenderingContext2D;
    containerId: string;
    text1: string = "INITIALIZING FINGER MATRIX...DONE";
    text2: string = "LEFT EYEBALL CHECK...NOMINAL";
    text3: string = "RIGHT EYEBALL CHECK...NOMINAL";
    text4: string = "DODGE DIAGNOSTICS";
    text5: string = "    LEFT DODGE OK";
    text6: string = "    RIGHT DODGE OK";
    text7: string = "    DUCK DISABLED";
    text8: string = "SILLY SOUNDS";
    text9: string = "    OOF OK";
    text10: string = "    OUCH OK";
    text11: string = "    YELP OK";
    text12: string = "    HOLLER OK";
    text13: string = "    GIGGLE DISABLED";
    textCoords: coords = { x: 8, y: 0 };
    textMetrics: TextMetrics;

    constructor(canvasPair: canvasContextPair, containerId: string) {
        this.canvasContext = canvasPair.context;
        this.canvas = canvasPair.canvas;
        this.containerId = containerId;
    }

    public showStatus(callback: () => any): void {
        
        this.canvasContext.font = `${Constants.fontSizeStatus} "${Constants.font}"`;
        this.canvasContext.textAlign = "left";
        this.canvasContext.fillStyle = Constants.styleText;
        this.displayTextRow(this.text1);

        // THIS SUCKS, DO NOT DO THIS
        setTimeout(() => this.displayTextRow(this.text2), 250);
        setTimeout(() => this.displayTextRow(this.text3), 500);
        setTimeout(() => this.displayTextRow(this.text4), 750);
        setTimeout(() => this.displayTextRow(this.text5), 1000);
        setTimeout(() => this.displayTextRow(this.text6), 1250);
        setTimeout(() => this.displayTextRow(this.text7), 1500);
        setTimeout(() => this.displayTextRow(this.text8), 1700);
        setTimeout(() => this.displayTextRow(this.text9), 2000);
        setTimeout(() => this.displayTextRow(this.text10), 2250);
        setTimeout(() => this.displayTextRow(this.text11), 2500);
        setTimeout(() => this.displayTextRow(this.text12), 2750);
        setTimeout(() => this.displayTextRow(this.text13), 3000);
        setTimeout(() => callback(), 3250);
    }

    private displayTextRow(text: string): void {
        this.textMetrics = this.canvasContext.measureText(text);
        this.textCoords.y = this.textCoords.y + (this.textMetrics.actualBoundingBoxAscent + 3);
        this.displayText(text);
    }

    private displayText(text: string): void {
        this.canvasContext.fillText(text, this.textCoords.x, this.textCoords.y);
    }

    public close(): void {
        const container = document.getElementById("container");
        container.removeChild(this.canvas);
    }
}