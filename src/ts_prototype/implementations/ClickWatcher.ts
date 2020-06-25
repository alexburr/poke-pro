/// <reference path="../models/coords.ts" />
/// <reference path="../interfaces/IClickWatcher.ts" />

class ClickWatcher implements IClickWatcher {

    watchedCanvas: HTMLCanvasElement;

    constructor(watchedCanvas: HTMLCanvasElement) {
        this.watchedCanvas = watchedCanvas;
    }

    public watchClicks(callback: (clickCoords: coords) => any): void {
        this.watchedCanvas.addEventListener('mousedown', (mouseEvent: MouseEvent) => {
            let clickCoords: coords = this.getClickLocation(mouseEvent);
            callback(clickCoords);
        });
    }

    private getClickLocation(mouseEvent: MouseEvent): coords {
        const rect = this.watchedCanvas.getBoundingClientRect();
        const coords: coords = { x: null, y: null };
        coords.x = mouseEvent.clientX - rect.left;
        coords.y = mouseEvent.clientY - rect.top;
        return coords;
    }
}