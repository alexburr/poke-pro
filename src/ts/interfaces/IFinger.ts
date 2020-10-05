interface IFinger {
    animate(coords: coords): void;
    clear(): void;
    draw(): void;
    getAnimationTimeout(): number;
    reset(): void;
}