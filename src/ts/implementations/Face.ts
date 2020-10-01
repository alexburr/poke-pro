/// <reference path="../models/coords.ts" />
/// <reference path="../Constants.ts" />
/// <reference path="../Utilities.ts" />
/// <reference path="../interfaces/IFace.ts" />

enum FaceClickResult {
    Poke,
    Dodge,
    None
}

enum FaceStateType {
    Standard,
    PokeRight,
    PokeLeft,
    DodgeRight,
    DodgeLeft
}

class FaceState {
    stateType: FaceStateType;
    duration: number;
    src: string[];

    public static getStateByType(typeToFind: FaceStateType): FaceState {
        return  _FACESTATES.find( ({ stateType }) => stateType === typeToFind );
    }

    public static getSrcForState(state: FaceState) {
        const numberOfSrcForState: number = state.src.length;
        const srcIndex = Utilities.randomInteger(0, numberOfSrcForState - 1);
        return state.src[srcIndex];
    }
}

const _FACESTATES: FaceState[] = [
    { stateType: FaceStateType.Standard, duration: 0, src: [ _CONSTANTS.srcFaceStandard ]},
    { stateType: FaceStateType.PokeRight, duration: _CONSTANTS.durationPoke, src: [ _CONSTANTS.srcFacePokeRight1, _CONSTANTS.srcFacePokeRight2 ]},
    { stateType: FaceStateType.PokeLeft, duration: _CONSTANTS.durationPoke, src: [ _CONSTANTS.srcFacePokeLeft1, _CONSTANTS.srcFacePokeLeft2 ]}
];

class Face implements IFace {

    canClick: boolean = true;
    canvasContext: CanvasRenderingContext2D;
    coords: coords = _CONSTANTS.coordsFace;
    coordsLefteye: coords = _CONSTANTS.coordsLeftEye;
    coordsRighteye: coords = _CONSTANTS.coordsRightEye;
    defaultFaceStateType: FaceStateType = FaceStateType.Standard;
    state: FaceState;
    image: HTMLImageElement = new Image();
    
    constructor(canvasContext: CanvasRenderingContext2D) {
        this.canvasContext = canvasContext;
        this.state = FaceState.getStateByType(this.defaultFaceStateType);
        this.image.src = FaceState.getSrcForState(this.state);
        this.image.addEventListener('load', event => {
            this.draw();
        });
    }

    public clear(): void {
        this.canvasContext.fillStyle = _CONSTANTS.styleBackground;
        this.canvasContext.fillRect(this.coords.x, this.coords.y, this.image.width, this.image.height);
    }

    public draw(): void {
        this.canvasContext.drawImage(this.image, this.coords.x, this.coords.y);
        if (_CONSTANTS.debug) { this.showDebug() };
    }

    public getState(): FaceState {
        return this.state;
    }

    public handleClick(coords: coords): FaceClickResult {
        if (this.isCoordsInLeftEye(coords)) {
            this.setState(FaceStateType.PokeLeft);
            return FaceClickResult.Poke;
        }
        if (this.isCoordsInRightEye(coords)) {
            this.setState(FaceStateType.PokeRight);
            return FaceClickResult.Poke;
        }
        return FaceClickResult.None;
    }

    public setState(faceStateType: FaceStateType): void {
        // We might already be in a "poked" state so we want to not allow the click until after we reset to standard
        if (!this.canClick) return;

        this.state = FaceState.getStateByType(faceStateType);
        this.clear();
        this.image.src = FaceState.getSrcForState(this.state);
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

    private isCoordsInLeftEye(coords: coords): boolean {
        return Utilities.isCoordsInShape(coords, _CONSTANTS.coordsLeftEye, _CONSTANTS.dimensionsEye);
    }

    private isCoordsInRightEye(coords: coords): boolean {
        return Utilities.isCoordsInShape(coords, _CONSTANTS.coordsRightEye, _CONSTANTS.dimensionsEye);
    }

    private showDebug(): void {
        this.canvasContext.lineWidth = 1;
        this.canvasContext.strokeStyle = _CONSTANTS.styleDebugStroke;
        this.canvasContext.rect(this.coordsLefteye.x, this.coordsLefteye.y, _CONSTANTS.dimensionsEye.width, _CONSTANTS.dimensionsEye.height);
        this.canvasContext.stroke();
        this.canvasContext.rect(this.coordsRighteye.x, this.coordsRighteye.y, _CONSTANTS.dimensionsEye.width, _CONSTANTS.dimensionsEye.height);
        this.canvasContext.stroke();
        console.log(this.state);
    }
}