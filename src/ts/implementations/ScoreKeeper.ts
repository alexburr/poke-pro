/// <reference path="../Constants.ts" />
/// <reference path="../models/score.ts" />
/// <reference path="../models/coords.ts" />
/// <reference path="../interfaces/IScoreKeeper.ts" />

class ScoreKeeper implements IScoreKeeper {

    canvasContext: CanvasRenderingContext2D;
    currentScore: score;
    previousScore: score;
    coords: coords = _CONSTANTS.coordsScore;
    pointsDefault: number = _CONSTANTS.pointsPoke;

    constructor(canvasContext: CanvasRenderingContext2D) {
        this.canvasContext = canvasContext;
        this.currentScore = { value: 0, text: `${_CONSTANTS.textScore} 0` };
        this.previousScore = { value: 0, text: `${_CONSTANTS.textScore} 0` };
        this.displayScore();
    }

    public addToScore(hit: boolean, specialPoints: number = 0): number {
        this.previousScore = this.currentScore;

        let points: number = hit ? this.getPointValue(specialPoints) : 0;

        this.currentScore.value += points;
        this.currentScore.text = `${_CONSTANTS.textScore} ${this.currentScore.value}`;

        if (_CONSTANTS.debug) { console.log(this.currentScore); }

        return points;
    }

    public getCurrentScore(): number {
        return this.currentScore.value;
    }

    public getPreviousScore(): number {
        return this.previousScore.value;
    }

    public displayScore(): void {
        this.clearScore();
        this.canvasContext.font = _CONSTANTS.fontScore;
        this.canvasContext.fillStyle = _CONSTANTS.styleText;
        this.canvasContext.fillText(this.currentScore.text, this.coords.x, this.coords.y);
    }

    public clearScore(): void {
        this.canvasContext.font = _CONSTANTS.fontScore;
        const metrics: TextMetrics = this.canvasContext.measureText(this.previousScore.text);
        //this.canvasContext.fillStyle = _CONSTANTS.styleBackground;
        this.canvasContext.clearRect(this.coords.x, this.coords.y - metrics.actualBoundingBoxAscent, metrics.width, metrics.actualBoundingBoxAscent);
    }

    public getPointValue(specialPoints: number = 0): number {
        return (specialPoints > 0) ? specialPoints : this.pointsDefault;
    }
}