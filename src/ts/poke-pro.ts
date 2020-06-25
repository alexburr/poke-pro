/// <reference path="constants.ts" />
/// <reference path="models/coords.ts" />
/// <reference path="models/canvasCollection.ts" />
/// <reference path="Interfaces/IClickWatcher.ts" />
/// <reference path="Interfaces/IGameCanvas.ts" />
/// <reference path="Implementations/ClickWatcher.ts" />
/// <reference path="Implementations/GameCanvas.ts" />
/// <reference path="Implementations/GameCanvasBuilder.ts" />
/// <reference path="Interfaces/IScoreKeeper.ts" />
/// <reference path="Implementations/ScoreKeeper.ts" />

/*
/// <reference path="Interfaces/IRectangle.ts" />
/// <reference path="Implementations/Rectangle.ts" />
/// <reference path="Interfaces/ISmileyFace.ts" />
/// <reference path="Implementations/SmileyFace.ts" />
/// <reference path="Interfaces/IWeaponManager.ts" />
/// <reference path="Implementations/WeaponManager.ts" />
*/

const _canvasCollection: canvasCollection = new GameCanvasBuilder("container").buildCanvasCollection();
const _clickWatcher: IClickWatcher = new ClickWatcher(_canvasCollection.canvasClick.canvas);
const _scoreKeeper: IScoreKeeper = new ScoreKeeper(_canvasCollection.canvasScore.context);

// let isWeaponAttached: boolean = false;

window.onload = () => {
    // this.drawObjects();
    _clickWatcher.watchClicks(this.handleClick);
};

function handleClick(clickCoords: coords): void {
    console.log(clickCoords);
    // let isClickInEye: boolean = _smileyFace.isCoordsInEye(clickCoords);
    // let isClickOnWeapon: boolean = _weaponManager.isCoordsInWeapon(clickCoords);
    
    // if (isClickInEye) {
    //     this.updateScore(getSpecialPoints());
    //     _weaponManager.attachWeapon(false);
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

// function drawObjects(): void {
//     _smileyFace.draw();
//     _weaponManager.activate();
// }

// function getSpecialPoints(): number {
//     return (_weaponManager.getIsWeaponAttached()) ? CONSTANTS.pointsWeaponPoke : CONSTANTS.pointsPoke;
// }