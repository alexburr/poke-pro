/// <reference path="../Constants.ts" />
/// <reference path="../models/score.ts" />
/// <reference path="../models/coords.ts" />
/// <reference path="../interfaces/IScoreKeeper.ts" />

class ScoreKeeper implements IScoreKeeper {

    gameCanvasContext: CanvasRenderingContext2D;
    currentScore: score;
    previousScore: score;
    coords: coords = _CONSTANTS.coordsScore;
    pointsDefault: number = _CONSTANTS.pointsPoke;

    constructor(gameCanvasContext: CanvasRenderingContext2D) {
        this.gameCanvasContext = gameCanvasContext;
        this.currentScore = { value: 0, text: `${_CONSTANTS.textScore} 0` };
        this.previousScore = { value: 0, text: `${_CONSTANTS.textScore} 0` };
        this.displayScore();
    }

    public addToScore(hit: boolean, specialPoints: number = 0): number {
        this.previousScore = this.currentScore;

        let points: number = 0;
        
        if (hit) {
            points = (specialPoints > 0) ? specialPoints : this.pointsDefault;
        }

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
        this.gameCanvasContext.font = _CONSTANTS.fontScore;
        this.gameCanvasContext.fillStyle = _CONSTANTS.styleText;
        this.gameCanvasContext.fillText(this.currentScore.text, this.coords.x, this.coords.y);
    }

    public clearScore(): void {
        const metrics: TextMetrics = this.gameCanvasContext.measureText(this.previousScore.text);
        this.gameCanvasContext.fillStyle = _CONSTANTS.styleBackground;
        this.gameCanvasContext.fillRect(this.coords.x, this.coords.y - metrics.actualBoundingBoxAscent, metrics.width, metrics.actualBoundingBoxAscent);
    }
}