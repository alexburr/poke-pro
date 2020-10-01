interface IFace {    
    draw(): void;
    getState(): FaceState;
    handleClick(coords: coords): FaceClickResult;
    setRandomState(): void;
    setState(faceStateType: FaceStateType): void;
    resetState(): void;
}