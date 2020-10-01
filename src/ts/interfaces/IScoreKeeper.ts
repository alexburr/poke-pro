interface IScoreKeeper {
    addToScore(hit: boolean, specialPoints: number): number;
    clearScore(): void;
    displayScore(): void;
    getCurrentScore(): number;
    getPreviousScore(): number;
}