interface IScoreKeeper {
    addToScore(hit: boolean, specialPoints: number): number;
    getCurrentScore(): number;
    getPreviousScore(): number;
    displayScore(): void;
    clearScore(): void;
}