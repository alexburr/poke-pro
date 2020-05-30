/// <reference path="../constants.ts" />
/// <reference path="../models/coords.ts" />
/// <reference path="../interfaces/IShapeDrawer.ts" />

class ShapeDrawer implements IShapeDrawer {

    gameCanvasContext: CanvasRenderingContext2D;

    constructor(gameCanvasContext: CanvasRenderingContext2D) {
        this.gameCanvasContext = gameCanvasContext;
    }

    public drawRectangle(coords: coords = null, width: number = 0, height: number = 0): void {
        this.gameCanvasContext.fillStyle = CONSTANTS.styleFill;
        if (coords == null) {
            return;
        } else {
            this.gameCanvasContext.fillRect(coords.x, coords.y, width, height);
        }
    }

    public clearRectangle(coords: coords = null, width: number = 0, height: number = 0): void {
        if (coords == null) {
            return;
        } else {
            this.gameCanvasContext.clearRect(coords.x, coords.y, width, height);
        }
    }

    public isCoordsInRectangle(coords: coords): boolean {  
        return (coords.x > 10 &&
            coords.x < 60 &&
            coords.y > 420 &&
            coords.y < 470);
    }

    public drawRectangles(): void {
        this.gameCanvasContext.fillStyle = 'rgb(200, 0, 0)';
        this.gameCanvasContext.fillRect(10, 10, 50, 50);
        this.gameCanvasContext.fillStyle = 'rgb(0, 0, 200, 0.5)';
        this.gameCanvasContext.fillRect(30, 30, 50, 50);

        this.gameCanvasContext.fillRect(25, 25, 100, 100);
        this.gameCanvasContext.clearRect(45, 45, 60, 60);
        this.gameCanvasContext.strokeRect(50, 50, 50, 50);
    }

    public drawTriangle(): void {
        this.gameCanvasContext.beginPath();
        this.gameCanvasContext.moveTo(75, 50);
        this.gameCanvasContext.lineTo(100, 75);
        this.gameCanvasContext.lineTo(100, 25);
        this.gameCanvasContext.fill();
    }

    public drawSmiley(): void {
        this.gameCanvasContext.beginPath();
        this.gameCanvasContext.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        this.gameCanvasContext.moveTo(110, 75);
        this.gameCanvasContext.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
        this.gameCanvasContext.moveTo(65, 65);
        this.gameCanvasContext.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
        this.gameCanvasContext.moveTo(95, 65);
        this.gameCanvasContext.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
        this.gameCanvasContext.stroke();
    }

    public drawLines(): void {
        // Filled triangle
        this.gameCanvasContext.beginPath();
        this.gameCanvasContext.moveTo(25, 25);
        this.gameCanvasContext.lineTo(105, 25);
        this.gameCanvasContext.lineTo(25, 105);
        this.gameCanvasContext.fill();

        // Stroked triangle
        this.gameCanvasContext.beginPath();
        this.gameCanvasContext.moveTo(125, 125);
        this.gameCanvasContext.lineTo(125, 45);
        this.gameCanvasContext.lineTo(45, 125);
        this.gameCanvasContext.closePath();
        this.gameCanvasContext.stroke();
    }

    public drawArcs(): void {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 3; j++) {
                this.gameCanvasContext.beginPath();
                var x = 25 + j * 50; // x coordinate
                var y = 25 + i * 50; // y coordinate
                var radius = 20; // Arc radius
                var startAngle = 0; // Starting point on circle
                var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
                var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise

                this.gameCanvasContext.arc(x, y, radius, startAngle, endAngle, anticlockwise);

                if (i > 1) {
                    this.gameCanvasContext.fill();
                } else {
                    this.gameCanvasContext.stroke();
                }
            }
        }
    }

    public drawQuadraticBezierCurves(): void {
        // Quadratric curves example
        this.gameCanvasContext.beginPath();
        this.gameCanvasContext.moveTo(75, 25);
        this.gameCanvasContext.quadraticCurveTo(25, 25, 25, 62.5);
        this.gameCanvasContext.quadraticCurveTo(25, 100, 50, 100);
        this.gameCanvasContext.quadraticCurveTo(50, 120, 30, 125);
        this.gameCanvasContext.quadraticCurveTo(60, 120, 65, 100);
        this.gameCanvasContext.quadraticCurveTo(125, 100, 125, 62.5);
        this.gameCanvasContext.quadraticCurveTo(125, 25, 75, 25);
        this.gameCanvasContext.stroke();
    }

    public drawCubicBezierCurves(): void {
        this.gameCanvasContext.beginPath();
        this.gameCanvasContext.moveTo(75, 40);
        this.gameCanvasContext.bezierCurveTo(75, 37, 70, 25, 50, 25);
        this.gameCanvasContext.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        this.gameCanvasContext.bezierCurveTo(20, 80, 40, 102, 75, 120);
        this.gameCanvasContext.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        this.gameCanvasContext.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        this.gameCanvasContext.bezierCurveTo(85, 25, 75, 37, 75, 40);
        this.gameCanvasContext.fill();
    }
}