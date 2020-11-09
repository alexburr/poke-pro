/// <reference path="Constants.ts" />
/// <reference path="models/coords.ts" />
/// <reference path="models/canvasCollection.ts" />
/// <reference path="Interfaces/IClickWatcher.ts" />
/// <reference path="Implementations/ClickWatcher.ts" />
/// <reference path="Interfaces/IStartup.ts" />
/// <reference path="Implementations/Startup.ts" />
/// <reference path="Interfaces/IGameCanvas.ts" />
/// <reference path="Implementations/GameCanvas.ts" />
/// <reference path="Implementations/GameCanvasBuilder.ts" />
/// <reference path="Interfaces/IScoreKeeper.ts" />
/// <reference path="Implementations/ScoreKeeper.ts" />
/// <reference path="Interfaces/IFace.ts" />
/// <reference path="Implementations/Face.ts" />
/// <reference path="Interfaces/IFinger.ts" />
/// <reference path="Implementations/Finger.ts" />
/// <reference path="Interfaces/IClickHandler.ts" />
/// <reference path="Implementations/ClickHandler.ts" />
/// <reference path="Interfaces/IAudioManager.ts" />
/// <reference path="Implementations/AudioManager.ts" />
/// <reference path="Interfaces/IPointFloater.ts" />
/// <reference path="Implementations/PointFloater.ts" />
/// <reference path="Interfaces/IPowerMeter.ts" />
/// <reference path="Implementations/PowerMeter.ts" />
/// <reference path="../types/typekit-webfontloader.d.ts" />

const _gameContainerId: string = "container";
const _canvasCollection: canvasCollection = new GameCanvasBuilder(_gameContainerId).buildCanvasCollection();
const _audioManager: IAudioManager = new AudioManager();
const _clickWatcher: IClickWatcher = new ClickWatcher(_canvasCollection.canvasClick.canvas);
const _startUp: IStartup = new Startup(_canvasCollection.canvasStartup, _gameContainerId);
//const _pointFloater: IPointFloater = new PointFloater(_canvasCollection.canvasPointFloater.context);
const _scoreKeeper: IScoreKeeper = new ScoreKeeper();
const _face: IFace = new Face(_canvasCollection.canvasFace.context, _audioManager);
const _finger: IFinger = new Finger(_canvasCollection.canvasFinger.context);
const _clickHandler: IClickHandler = new ClickHandler(_face, _finger, _scoreKeeper); //_pointFloater);
const _powerMeter: IPowerMeter = new PowerMeter(_gameContainerId);
const _pokeAnimationTimeout: number = _finger.getAnimationTimeout();

// let isWeaponAttached: boolean = false;
window.onload = () => {
    // TODO: This could be refactored a bit, similar to Images.ts?
    WebFont.load({
        google: { families: [_CONSTANTS.font] },
        active: () => { 
            _startUp.showStartupText();
            _startUp.waitForClick(this.handleStartupClick);
        }
    });
};

function handleStartupClick(): void {
    //_startUp.close();
    _scoreKeeper.init(_canvasCollection.canvasScore.context);
    _powerMeter.init();

    if (_CONSTANTS.debug) {
        this.showClickable();
    }

    _finger.draw();
    _clickWatcher.watchClicks(this.handleClick);
}

function handleClick(clickCoords: coords): void {
    _clickHandler.handleClick(clickCoords);
}

function showClickable() {
    let context = _canvasCollection.canvasClick.context;
    context.lineWidth = 1;
    context.strokeStyle = _CONSTANTS.styleDebugStroke;
    context.rect(_CONSTANTS.coordsClickable.x, _CONSTANTS.coordsClickable.y, _CONSTANTS.dimensionsClickable.width, _CONSTANTS.dimensionsClickable.height);
    context.stroke();
}