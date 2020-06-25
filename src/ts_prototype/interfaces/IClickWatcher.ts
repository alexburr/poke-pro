interface IClickWatcher {
    watchClicks(callback: (clickCoords: coords) => any): void;
}