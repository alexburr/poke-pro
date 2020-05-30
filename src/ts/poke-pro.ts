/// <reference path="interfaces/IClickWatcher.ts" />
/// <reference path="implementations/ClickWatcher.ts" />
/// <reference path="constants.ts" />
/// <reference path="models/coords.ts" />
/// <reference path="models/canvasCollection.ts" />
/// <reference path="interfaces/ICanvas.ts" />
/// <reference path="implementations/GameCanvas.ts" />
/// <reference path="interfaces/IScoreKeeper.ts" />
/// <reference path="implementations/ScoreKeeper.ts" />
/// <reference path="interfaces/IRectangle.ts" />
/// <reference path="implementations/Rectangle.ts" />
/// <reference path="interfaces/ISmileyFace.ts" />
/// <reference path="implementations/SmileyFace.ts" />
/// <reference path="interfaces/IWeaponManager.ts" />
/// <reference path="implementations/WeaponManager.ts" />

const _canvasCollection: canvasCollection = setupCanvasCollection();
const _clickWatcher: IClickWatcher = new ClickWatcher(_canvasCollection.canvasClick.canvas);
const _scoreKeeper: IScoreKeeper = new ScoreKeeper(_canvasCollection.canvasScore.context);
const _rectangle: IRectangle = new Rectangle(_canvasCollection.canvasWeapons.context);
const _smileyFace: ISmileyFace = new SmileyFace(_canvasCollection.canvasFace.context);
const _weaponManager: IWeaponManager = new WeaponManager(_rectangle);

let isWeaponAttached: boolean = false;

window.onload = () => {
    this.drawObjects();
    _clickWatcher.watchClicks(this.handleClick);
};

function setupCanvasCollection(): canvasCollection {
    const _gameGanvasCollection = {
        canvasFace: new GameCanvas("canvasFace"),
        canvasWeapons: new GameCanvas("canvasWeapons"),
        canvasScore: new GameCanvas("canvasScore"),
        canvasClick: new GameCanvas("canvasClick")
    };
    return {
        canvasFace: { canvas:_gameGanvasCollection.canvasFace.getCanvas(), context: _gameGanvasCollection.canvasFace.getContext() },
        canvasWeapons: { canvas:_gameGanvasCollection.canvasWeapons.getCanvas(), context: _gameGanvasCollection.canvasWeapons.getContext() },
        canvasScore: { canvas:_gameGanvasCollection.canvasScore.getCanvas(), context: _gameGanvasCollection.canvasScore.getContext() },
        canvasClick: { canvas:_gameGanvasCollection.canvasClick.getCanvas(), context: _gameGanvasCollection.canvasClick.getContext() }
    };
}

function handleClick(clickCoords: coords): void {
    let isClickInEye: boolean = _smileyFace.isCoordsInEye(clickCoords);
    let isClickOnWeapon: boolean = _weaponManager.isCoordsInWeapon(clickCoords);
    
    if (isClickInEye) {
        this.updateScore(getSpecialPoints());
        _weaponManager.attachWeapon(false);
    }
    else if (isClickOnWeapon) {
        _weaponManager.attachWeapon(true);
    }
    else {
        _weaponManager.attachWeapon(false);
    }
}

function updateScore(specialPoints: number = 0): void {
    _scoreKeeper.addToScore(true, specialPoints);
    _scoreKeeper.displayScore();
} 

function drawObjects(): void {
    _smileyFace.draw();
    _weaponManager.activate();
}

function getSpecialPoints(): number {
    return (_weaponManager.getIsWeaponAttached()) ? CONSTANTS.pointsWeaponPoke : CONSTANTS.pointsPoke;
}