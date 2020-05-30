interface IShapeDrawer {
    drawRectangle(coords: coords, width: number, height: number): void;
    clearRectangle(coords: coords, width: number, height: number): void;
    isCoordsInRectangle(coords: coords): boolean;
}