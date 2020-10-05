/// <reference path="../interfaces/IFinger.ts" />

class Finger implements IFinger {
    
    animationTimeout: number = _CONSTANTS.ms30fps * 4;
    canvasContext: CanvasRenderingContext2D;
    coords: coords = _CONSTANTS.coordsFinger1;
    image: HTMLImageElement;

    constructor(canvasContext: CanvasRenderingContext2D) {
        this.canvasContext = canvasContext;
        this.image = _IMAGES.getImageByName('srcFingerPoke1');
    }

    public animate(coords: coords): void {
        if (_CONSTANTS.debug) { console.log("animate", coords); }

        // TODO: This needs to be more sophisticated. The finger should start centered on the bottom,
        // and animate to the selected coordinates, but should travel smoothly instead of jumping to
        // a fixed point first.

        this.clear();
        this.setFinger2();
        this.draw();

        setTimeout(() => {

            this.clear();
            this.setFinger3(coords);
            this.draw();

            setTimeout(() => {

                this.clear();
                this.setFinger2();
                this.draw();

                setTimeout(() => {

                    this.reset();

                }, this.animationTimeout);

            }, this.animationTimeout);

        }, this.animationTimeout);        
    }

    public clear(): void {
        this.canvasContext.clearRect(this.coords.x, this.coords.y, this.image.width, this.image.height);
    }

    public draw(): void {
        this.canvasContext.drawImage(this.image, this.coords.x, this.coords.y);
    }

    public getAnimationTimeout(): number {
        return this.animationTimeout;
    }

    public reset(): void {
        this.clear();
        this.setFinger1();
        this.draw();
    }

    private setFinger1(): void {
        this.coords = _CONSTANTS.coordsFinger1;
        this.image = _IMAGES.getImageByName('srcFingerPoke1');
    }

    private setFinger2(): void {
        this.coords = _CONSTANTS.coordsFinger2;
        this.image = _IMAGES.getImageByName('srcFingerPoke2');
    }

    private setFinger3(coords: coords): void {
        this.image = _IMAGES.getImageByName('srcFingerPoke3');
        this.coords = { x: coords.x - this.image.width + 15, y: coords.y }; // This must be offset for the finger
    }
}