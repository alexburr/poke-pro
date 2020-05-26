interface IEye {
    draw(coords: coords): void;
    isCoordsInEye(coords: coords): boolean;
}