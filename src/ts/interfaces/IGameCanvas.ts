interface IGameCanvas {
    getCanvas(): HTMLCanvasElement;
    getContext(): CanvasRenderingContext2D;
    getDimensions(): dimensions;
}