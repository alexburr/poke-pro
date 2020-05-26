/// <reference path="interfaces/IClickWatcher.ts" />
/// <reference path="implementations/ClickWatcher.ts" />
/// <reference path="constants.ts" />
/// <reference path="models/coords.ts" />
/// <reference path="interfaces/ICanvas.ts" />
/// <reference path="implementations/GameCanvas.ts" />
/// <reference path="interfaces/IScoreKeeper.ts" />
/// <reference path="implementations/ScoreKeeper.ts" />
/// <reference path="interfaces/IShapeDrawer.ts" />
/// <reference path="implementations/ShapeDrawer.ts" />
/// <reference path="interfaces/ISmileyFace.ts" />
/// <reference path="implementations/SmileyFace.ts" />

const _gameCanvas: ICanvas = new GameCanvas();
const _canvas: HTMLCanvasElement = _gameCanvas.getCanvas();
const _context: CanvasRenderingContext2D = _gameCanvas.getContext();

const _clickWatcher: IClickWatcher = new ClickWatcher(_canvas);
const _scoreKeeper: IScoreKeeper = new ScoreKeeper(_context);
const _shapeDrawer: IShapeDrawer = new ShapeDrawer(_context);
const _smileyFace: ISmileyFace = new SmileyFace(_context);

let isWeaponAttached: boolean = false;

window.onload = () => {
    this.drawObjects();
    _clickWatcher.watchClicks(this.handleClick);
};

function handleClick(clickCoords: coords): void {
    let isClickInEye: boolean = _smileyFace.isCoordsInEye(clickCoords);
    let isClickOnWeapon: boolean = _shapeDrawer.isCoordsInRectangle(clickCoords);
    
    if (isClickInEye) {
        this.updateScore(getSpecialPoints());
        this.attachWeapon(false);            
    }
    else if (isClickOnWeapon) {
        this.attachWeapon(true);
    }
    else {
        this.attachWeapon(false);
    }
}

function updateScore(specialPoints: number = 0): void {
    _scoreKeeper.addToScore(true, specialPoints);
    _scoreKeeper.displayScore();
} 

function attachWeapon(attach: boolean): void {
    this.isWeaponAttached = attach;
}

function drawObjects(): void {
    _smileyFace.draw();
    _shapeDrawer.drawRectangle();
}

function getSpecialPoints(): number {
    return (this.isWeaponAttached) ? CONSTANTS.pointsWeaponPoke : CONSTANTS.pointsPoke;
}