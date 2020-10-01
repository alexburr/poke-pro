/// <reference path="Constants.ts" />
/// <reference path="models/coords.ts" />
/// <reference path="models/canvasCollection.ts" />
/// <reference path="Interfaces/IClickWatcher.ts" />
/// <reference path="Interfaces/IGameCanvas.ts" />
/// <reference path="Implementations/ClickWatcher.ts" />
/// <reference path="Implementations/GameCanvas.ts" />
/// <reference path="Implementations/GameCanvasBuilder.ts" />
/// <reference path="Interfaces/IScoreKeeper.ts" />
/// <reference path="Implementations/ScoreKeeper.ts" />
/// <reference path="Interfaces/IFace.ts" />
/// <reference path="Implementations/Face.ts" />

const _canvasCollection: canvasCollection = new GameCanvasBuilder("container").buildCanvasCollection();
const _clickWatcher: IClickWatcher = new ClickWatcher(_canvasCollection.canvasClick.canvas);
const _scoreKeeper: IScoreKeeper = new ScoreKeeper(_canvasCollection.canvasScore.context);
const _face: IFace = new Face(_canvasCollection.canvasFace.context);

// let isWeaponAttached: boolean = false;

window.onload = () => {
    // this.drawObjects();
    _clickWatcher.watchClicks(this.handleClick);
    //this.drawObjects();
};

function handleClick(clickCoords: coords): void {
    if (_CONSTANTS.debug) { console.log(clickCoords); }
    
    let faceClickResult: FaceClickResult = _face.handleClick(clickCoords);

    if (faceClickResult == FaceClickResult.Poke) {
        _scoreKeeper.addToScore(true, _CONSTANTS.pointsPoke);
        _scoreKeeper.displayScore();
    }

    // let isClickOnWeapon: boolean = _weaponManager.isCoordsInWeapon(clickCoords);
    
    // if (isClickInEye) {
    //     // TEMP: Randomly pick an eye to gouge
    //     _face.setRandomState();
    //     //this.updateScore(getSpecialPoints());
    //     //_weaponManager.attachWeapon(false);
    // }
    // else if (isClickOnWeapon) {
    //     _weaponManager.attachWeapon(true);
    // }
    // else {
    //     _weaponManager.attachWeapon(false);
    // }
}

// function updateScore(specialPoints: number = 0): void {
//     _scoreKeeper.addToScore(true, specialPoints);
//     _scoreKeeper.displayScore();
// } 

function drawObjects(): void {
    //_face.draw();
    // _weaponManager.activate();
}

// function getSpecialPoints(): number {
//     return (_weaponManager.getIsWeaponAttached()) ? CONSTANTS.pointsWeaponPoke : CONSTANTS.pointsPoke;
// }