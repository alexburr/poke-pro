abstract class Utilities {
    public static getRandomInt(max): number {
        return Math.floor(Math.random() * Math.floor(max));
    }

    public static randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public static isCoordsInShape(coords: coords, shapeCoords: coords, shapeDimensions: dimensions): boolean {
        return (coords.x > shapeCoords.x &&
            coords.x < shapeCoords.x + shapeDimensions.width &&
            coords.y > shapeCoords.y &&
            coords.y < shapeCoords.y + shapeDimensions.height);
    }
}