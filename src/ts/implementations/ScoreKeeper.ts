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

    constructor() {
        this.currentScore = { value: 0, text: Utilities.pad(0,9) };
        this.previousScore = { value: 0, text: Utilities.pad(0,9) };
    }

    public addToScore(hit: boolean, specialPoints: number = 0): number {
        this.previousScore = this.currentScore;

        let points: number = hit ? this.getPointValue(specialPoints) : 0;

        if (this.currentScore.value < 999999999) {
            this.currentScore.value += points;
        } else {
            this.currentScore.value = 0;
        }

        this.currentScore.text = `${Utilities.pad(this.currentScore.value,9)}`;

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
        this.setFont();
        this.canvasContext.fillStyle = _CONSTANTS.styleText;
        this.canvasContext.fillText(this.currentScore.text, this.coords.x, this.coords.y);
    }

    public clearScore(): void {
        this.setFont();
        const metrics: TextMetrics = this.canvasContext.measureText(this.previousScore.text);
        console.log(this.coords.x, this.coords.y - metrics.actualBoundingBoxAscent, metrics.width, metrics.actualBoundingBoxAscent);
        //this.canvasContext.clearRect(this.coords.x, this.coords.y - metrics.actualBoundingBoxAscent, metrics.width, metrics.actualBoundingBoxAscent);
        this.canvasContext.clearRect(this.coords.x - metrics.width, this.coords.y - metrics.actualBoundingBoxAscent, metrics.width, metrics.actualBoundingBoxAscent);
    }

    public getPointValue(specialPoints: number = 0): number {
        return (specialPoints > 0) ? specialPoints : this.pointsDefault;
    }

    public init(canvasContext: CanvasRenderingContext2D): void {
        this.canvasContext = canvasContext;
        this.displayScore();
    }

    private setFont(): void {
        this.canvasContext.font = `${_CONSTANTS.fontSizeScore} "${_CONSTANTS.font}"`;
        this.canvasContext.textAlign = "right";
    }
}