/// <reference path="../interfaces/IFinger.ts" />

class Finger implements IFinger {
    
    animationTimeout: number = Constants.ms30fps * 2;
    canvasContext: CanvasRenderingContext2D;
    coords: coords = Constants.coordsFinger1;
    image: HTMLImageElement;

    constructor(canvasContext: CanvasRenderingContext2D) {
        this.canvasContext = canvasContext;
        this.image = Images.fingerPoke1.image;
    }

    public animate(coords: coords): void {
        if (Constants.debug) { console.log("animate", coords); }

        // TODO: This needs to be more sophisticated. The finger should start centered on the bottom,
        // and animate to the selected coordinates, but should travel smoothly instead of jumping to
        // a fixed point first.

        this.clear();
        this.setFinger2(coords);
        this.draw();

        setTimeout(() => {

            this.clear();
            this.setFinger3(coords);
            this.draw();

            setTimeout(() => {

                this.clear();
                this.setFinger2(coords);
                this.draw();

                setTimeout(() => {

                    this.reset();

                }, this.animationTimeout);

            }, this.animationTimeout * 2);

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
        this.coords = Constants.coordsFinger1;
        this.image = Images.fingerPoke1.image;
    }

    private setFinger2(coords: coords): void {
        this.coords = Utilities.midWayPoint(Constants.coordsFinger2, coords);
        this.image = Images.fingerPoke2.image;
    }

    private setFinger3(coords: coords): void {
        this.image = Images.fingerPoke3.image;
        this.coords = { x: coords.x - this.image.width + 15, y: coords.y }; // This must be offset for the finger
    }
}