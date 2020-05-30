interface IRectangle {
    drawRectangle(coords: coords, width: number, height: number, fillStyle: string): void;
    clearRectangle(coords: coords, width: number, height: number): void;
    isCoordsInRectangle(coords: coords): boolean;
}