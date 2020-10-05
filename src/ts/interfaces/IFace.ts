interface IFace {
    draw(): void;
    getState(): FaceState;
    getClickResult(coords: coords): FaceClickResult;
    handleClick(faceClickResult: FaceClickResult, animationTimeout: number): void;
    setRandomState(): void;
    setState(faceStateType: FaceStateType): void;
    resetState(): void;
}