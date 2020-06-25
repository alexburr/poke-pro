interface IRectangle {
    draw(coords: coords, dimensions: dimensions, fillStyle: string): void;
    clear(): void;
    isCoordsIn(coords: coords): boolean;
}