abstract class Utilities {
    public static randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public static isCoordsInShape(coords: coords, shapeCoords: coords, shapeDimensions: dimensions): boolean {
        return (coords.x > shapeCoords.x &&
            coords.x < shapeCoords.x + shapeDimensions.width &&
            coords.y > shapeCoords.y &&
            coords.y < shapeCoords.y + shapeDimensions.height);
    }

    public static midWayPoint(coords1: coords, coords2: coords): coords {
        let result: coords = new coords();

        result.x = (coords1.x + coords2.x) / 2;
        result.y = (coords1.y + coords2.y) / 2;

        return result;
    }

    public static pad(num: number, size: number): string {
        var s = "000000000" + num;
        return s.substr(s.length - size);
    }
}