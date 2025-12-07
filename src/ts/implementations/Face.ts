/// <reference path="../Enums/FaceStateType.ts" />
/// <reference path="../Enums/FaceClickResult.ts" />
/// <reference path="../models/coords.ts" />
/// <reference path="../models/coords.ts" />
/// <reference path="../Constants.ts" />
/// <reference path="../Utilities.ts" />
/// <reference path="../interfaces/IFace.ts" />
/// <reference path="../implementations/FaceState.ts" />

class Face implements IFace {

    canClick: boolean = true;
    canvasContext: CanvasRenderingContext2D;
    coords: coords = Constants.coordsFace;
    coordsLeftDodge: coords;
    coordsRightDodge: coords;
    coordsLeftEye: coords = Constants.coordsLeftEye;
    coordsRightEye: coords = Constants.coordsRightEye;
    defaultFaceStateType: FaceStateType = FaceStateType.Standard;
    dimensionsDodge: dimensions;
    dimensionsEye: dimensions = Constants.dimensionsEye;
    state: FaceState;
    image: HTMLImageElement = new Image();
    sound: sound;
    audioManager: IAudioManager;
    
    constructor(canvasContext: CanvasRenderingContext2D, audioManager: IAudioManager) {
        this.canvasContext = canvasContext;
        this.audioManager = audioManager;
        this.initDodgeArea();
        this.resetState();
        this.initImage();
    }

    public clear(): void {
        this.canvasContext.clearRect(this.coords.x, this.coords.y, this.image.width, this.image.height);
    }

    public draw(): void {
        this.canvasContext.drawImage(this.image, this.coords.x, this.coords.y);
        if (Constants.debug) { this.showDebug() };
    }

    public getState(): FaceState {
        return this.state;
    }

    public getClickResult(coords: coords): FaceClickResult {

        let result: FaceClickResult = FaceClickResult.None;

        if (this.isCoordsInLeftEye(coords)) {
            result = FaceClickResult.PokeLeft;
        }
        else if (this.isCoordsInRightEye(coords)) {
            result = FaceClickResult.PokeRight;
        }
        else if (this.isCoordsInLeftDodge(coords)) {
            result = FaceClickResult.DodgeRight;
        }
        else if (this.isCoordsInRightDodge(coords)) {
            result = FaceClickResult.DodgeLeft;
        }

        return result;
    }

    public handleClick(faceClickResult: FaceClickResult, animationTimeout: number): void {

        switch(faceClickResult) {
            case FaceClickResult.PokeLeft:
                this.setState(FaceStateType.PokeLeft);
                break;
            case FaceClickResult.PokeRight:
                this.setState(FaceStateType.PokeRight);
                break;
            case FaceClickResult.DodgeLeft:
                this.setState(FaceStateType.DodgeLeft);
                break;
            case FaceClickResult.DodgeRight:
                this.setState(FaceStateType.DodgeRight);
                break;
            default:
                this.resetState();
                break;
        }
    }

    public setState(faceStateType: FaceStateType): void {
        // We might already be in a "poked" state so we want to not allow the click until after we reset to standard
        if (!this.canClick) return;

        this.state = FaceState.getStateByType(_FACESTATES, faceStateType);
        this.clear();
        const soundImagePair: SoundImagePair = FaceState.getSoundImageForState(this.state);
        this.image = soundImagePair.image.image;
        if (soundImagePair.sound != null) { 
            this.audioManager.playSoundEffect(soundImagePair.sound);
        }
        this.draw();

        // The "poked" state should be held for a brief moment and then reset
        if (this.state.duration > 0) {
            this.canClick = false;
            setTimeout(() => {
                this.resetState();
            }, this.state.duration);
        }
    }

    public setRandomState(): void {
        let random = Utilities.randomInteger(0,1);
        let faceStateType: FaceStateType = (random == 0) ? FaceStateType.PokeRight : FaceStateType.PokeLeft;
        this.setState(faceStateType);
    }

    public resetState(): void {
        this.canClick = true;
        this.setState(this.defaultFaceStateType);
    }

    private initDodgeArea(): void {
        this.coordsLeftDodge = { x: this.coordsLeftEye.x - 70, y: this.coordsLeftEye.y - 30 };
        this.coordsRightDodge = { x: this.coordsRightEye.x - 10, y: this.coordsRightEye.y - 30 };
        this.dimensionsDodge = { width: this.dimensionsEye.width + 80, height: this.dimensionsEye.height + 130 };

        if (Constants.debug) { console.log('this.coordsLeftDodge', this.coordsLeftDodge); }
        if (Constants.debug) { console.log('this.coordsRightDodge', this.coordsRightDodge); }
        if (Constants.debug) { console.log('this.dimensionsDodge', this.dimensionsDodge); }
    }

    private initImage(): void {
        this.image.addEventListener('load', event => {
            this.draw();
        });
    }

    private isCoordsInLeftDodge(coords: coords): boolean {
        return Utilities.isCoordsInShape(coords, this.coordsLeftDodge, this.dimensionsDodge);
    }

    private isCoordsInLeftEye(coords: coords): boolean {
        return Utilities.isCoordsInShape(coords, this.coordsLeftEye, this.dimensionsEye);
    }

    private isCoordsInRightDodge(coords: coords): boolean {
        return Utilities.isCoordsInShape(coords, this.coordsRightDodge, this.dimensionsDodge);
    }

    private isCoordsInRightEye(coords: coords): boolean {
        return Utilities.isCoordsInShape(coords, this.coordsRightEye, this.dimensionsEye);
    }

    private showDebug(): void {
        this.canvasContext.lineWidth = Constants.styleDebugStrokeWidth;
        this.canvasContext.strokeStyle = Constants.styleDebugStroke1;
        this.canvasContext.strokeRect(this.coordsLeftEye.x, this.coordsLeftEye.y, this.dimensionsEye.width, this.dimensionsEye.height);
        this.canvasContext.strokeRect(this.coordsRightEye.x, this.coordsRightEye.y, this.dimensionsEye.width, this.dimensionsEye.height);
        this.canvasContext.strokeStyle = Constants.styleDebugStroke2;
        this.canvasContext.strokeRect(this.coordsLeftDodge.x, this.coordsLeftDodge.y, this.dimensionsDodge.width, this.dimensionsDodge.height);
        this.canvasContext.strokeStyle =  Constants.styleDebugStroke3;
        this.canvasContext.strokeRect(this.coordsRightDodge.x, this.coordsRightDodge.y, this.dimensionsDodge.width, this.dimensionsDodge.height);
        console.log(this.state);
    }
}