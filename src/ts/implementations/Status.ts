class Status implements IStatus {
    audio: HTMLAudioElement;
    canvas: HTMLCanvasElement;
    canvasContext: CanvasRenderingContext2D;
    containerId: string;
    text: string[] = Constants.textStatus;
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
    textCoords: coords = { x: 5, y: 0 };
    textMetrics: TextMetrics;

    constructor(canvasPair: canvasContextPair, containerId: string) {
        this.canvasContext = canvasPair.context;
        this.canvas = canvasPair.canvas;
        this.containerId = containerId;
        this.audio = new Audio(Sounds.beep.src);
        this.audio.volume = 0.25;
    }

    public showStatus(callback: () => any): void {        
        this.canvasContext.font = `${Constants.fontSizeStatus} "${Constants.font}"`;
        this.canvasContext.textAlign = "left";
        this.canvasContext.fillStyle = Constants.styleText;
        var baseTimeout: number = 50;
        var timeout: number = 0;

        for (let i = 0; i < this.text.length; i++) {

            setTimeout(() => {
                var text: string = this.text[i]
                timeout = baseTimeout * (i + 1);
                this.displayTextRow(text);
                this.audio.play(); 
                if (i == this.text.length - 1) {
                    setTimeout(() => callback(), baseTimeout * 4);
                }

            }, 250 * (i + 1));
        }
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