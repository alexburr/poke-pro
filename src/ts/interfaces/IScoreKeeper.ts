interface IScoreKeeper {
    addToScore(hit: boolean, specialPoints: number): number;
    clearScore(): void;
    displayScore(): void;    
    getCurrentScore(): number;
    getPreviousScore(): number;
    getPointValue(specialPoints: number): number;
    init(canvasContext: CanvasRenderingContext2D): void;
}