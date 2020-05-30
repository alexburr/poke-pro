/// <reference path="../constants.ts" />
/// <reference path="../models/coords.ts" />
/// <reference path="../interfaces/IEye.ts" />
/// <reference path="Eye.ts" />
/// <reference path="../interfaces/ISmileyFace.ts" />

class SmileyFace implements ISmileyFace {

    canvasContext: CanvasRenderingContext2D;
    leftEye: IEye;
    rightEye: IEye;
    coordsLefteye: coords = CONSTANTS.coordsLeftEye;
    coordsRighteye: coords = CONSTANTS.coordsRightEye;
    
    constructor(canvasContext: CanvasRenderingContext2D) {
        this.canvasContext = canvasContext;
        this.leftEye = new Eye(this.canvasContext);
        this.rightEye = new Eye(this.canvasContext);
    }

    public draw(): void {
        this.canvasContext.strokeStyle = CONSTANTS.styleStroke;
        this.canvasContext.fillStyle = CONSTANTS.styleFill;
        this.canvasContext.beginPath();
        this.drawOuterCircle();
        this.drawMouth();
        this.leftEye.draw(this.coordsLefteye);
        this.rightEye.draw(this.coordsRighteye);
        this.canvasContext.stroke();
    }

    public isCoordsInEye(coords: coords): boolean {        
        return (this.leftEye.isCoordsIn(coords) || this.rightEye.isCoordsIn(coords));
    }

    private drawOuterCircle(): void {        
        this.canvasContext.arc(CONSTANTS.coordsOuterCircle.x, CONSTANTS.coordsOuterCircle.y, CONSTANTS.radiusOuterCircle, 0, Math.PI * 2, true); // Outer circle
    }

    private drawMouth(): void {
        this.canvasContext.moveTo(CONSTANTS.coordsMouth.x + CONSTANTS.radiusMouth, CONSTANTS.coordsMouth.y);
        this.canvasContext.arc(CONSTANTS.coordsMouth.x, CONSTANTS.coordsMouth.y, CONSTANTS.radiusMouth, 0, Math.PI, false);  // Mouth (clockwise)
    }
}