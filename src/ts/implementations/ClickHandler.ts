/// <reference path="../Constants.ts" />
/// <reference path="../interfaces/IClickHandler.ts" />

class ClickHandler implements IClickHandler {

    face: IFace;
    finger: IFinger;
    scoreKeeper: IScoreKeeper;
    pokeAnimationTimeout: number;

    constructor(face: IFace, finger: IFinger, scoreKeeper: IScoreKeeper) {
        this.face = face;
        this.finger = finger;
        this.scoreKeeper = scoreKeeper;
        this.pokeAnimationTimeout = this.finger.getAnimationTimeout() * 2;
    }

    public handleClick(clickCoords: coords): void {
        if (_CONSTANTS.debug) { console.log("handleClick", clickCoords); }

        if (this.isCoordsInClickable(clickCoords)) {
            this.finger.animate(clickCoords);
            let faceClickResult: FaceClickResult = this.face.getClickResult(clickCoords);

            if (faceClickResult !== FaceClickResult.None) {
                setTimeout(() => {
                    this.face.handleClick(faceClickResult, this.finger.getAnimationTimeout());
                }, this.pokeAnimationTimeout);

                if (faceClickResult == FaceClickResult.PokeLeft || faceClickResult == FaceClickResult.PokeRight) {
                    this.scoreKeeper.addToScore(true, _CONSTANTS.pointsPoke);
                    this.scoreKeeper.displayScore();
                }
            }
        }
    }

    private isCoordsInClickable(coords: coords): boolean {
        return Utilities.isCoordsInShape(coords, _CONSTANTS.coordsClickable, _CONSTANTS.dimensionsClickable);
    }
}