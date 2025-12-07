/// <reference path="models/coords.ts" />
/// <reference path="models/canvasCollection.ts" />
/// <reference path="Implementations/AudioManager.ts" />
/// <reference path="Implementations/ClickWatcher.ts" />
/// <reference path="Implementations/ClickHandler.ts" />
/// <reference path="Implementations/Finger.ts" />
/// <reference path="Implementations/GameCanvas.ts" />
/// <reference path="Implementations/GameCanvasBuilder.ts" />
/// <reference path="Implementations/PowerMeter.ts" />
/// <reference path="Implementations/ScoreKeeper.ts" />
/// <reference path="Implementations/Startup.ts" />
/// <reference path="Implementations/Status.ts" />
/// <reference path="../types/typekit-webfontloader.d.ts" />

const _gameContainerId: string = "container";
const _canvasCollection: canvasCollection = new GameCanvasBuilder(_gameContainerId).buildCanvasCollection();
const _audioManager: IAudioManager = new AudioManager();
const _clickWatcher: ClickWatcher = new ClickWatcher(_canvasCollection.canvasClick.canvas);
const _startUp: IStartup = new Startup(_canvasCollection.canvasStartup, _gameContainerId);
const _status: IStatus = new Status(_canvasCollection.canvasStatus, _gameContainerId);
const _scoreKeeper: IScoreKeeper = new ScoreKeeper();
const _face: IFace = new Face(_canvasCollection.canvasFace.context, _audioManager);
const _finger: IFinger = new Finger(_canvasCollection.canvasFinger.context);
const _clickHandler: IClickHandler = new ClickHandler(_face, _finger, _scoreKeeper); 
const _powerMeter: IPowerMeter = new PowerMeter(_gameContainerId);
const _pokeAnimationTimeout: number = _finger.getAnimationTimeout();

window.onload = () => {
    // TODO: This could be refactored a bit, similar to Images.ts?
    WebFont.load({
        google: { families: [Constants.font] },
        active: () => { 
            _startUp.showStartupText();
            _startUp.waitForClick(this.handleStartupClick);
        }
    });
};

function handleStartupClick(): void {
    _startUp.close();
    _status.showStatus(this.gameInit);
}

function gameInit(): void {
    _status.close();
    this.playMusic();
    _scoreKeeper.init(_canvasCollection.canvasScore.context);
    _powerMeter.init();

    if (Constants.debug) {
        this.showClickable();
    }

    _finger.draw();
    _clickWatcher.watchClicks(this.handleGameClick);
}

function handleGameClick(clickCoords: coords): void {
    _clickHandler.handleClick(clickCoords);
}

function showClickable() {
    let context = _canvasCollection.canvasClick.context;
    context.lineWidth = Constants.styleDebugStrokeWidth;
    context.strokeStyle = Constants.styleDebugStroke1;
    context.rect(Constants.coordsClickable.x, Constants.coordsClickable.y, Constants.dimensionsClickable.width, Constants.dimensionsClickable.height);
    context.stroke();
}

function playMusic(): void {
    this.music = Sounds.music;
    const htmlAudio: HTMLAudioElement = new Audio(this.music.src);
    htmlAudio.volume = 0.75;
    htmlAudio.loop = true;
    setTimeout(() => {        
        htmlAudio.play();
    }, 1800);
}