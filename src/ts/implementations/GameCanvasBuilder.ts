/// <reference path="../models/canvasCollection.ts" />
/// <reference path="../Interfaces/IGameCanvas.ts" />
/// <reference path="GameCanvas.ts" />
/// <reference path="../Constants.ts" />

class GameCanvasBuilder implements IGameCanvasBuilder {

    canvasContainer: HTMLElement;
    canvasFace: HTMLCanvasElement;
    canvasWeapons: HTMLCanvasElement;
    canvasScore: HTMLCanvasElement;
    canvasClick: HTMLCanvasElement;

    constructor(containerId: string) {
        this.canvasContainer = document.getElementById(containerId);
        this.canvasFace = document.createElement("canvas");
        this.canvasWeapons = document.createElement("canvas");
        this.canvasScore = document.createElement("canvas");
        this.canvasClick = document.createElement("canvas");
        
        this.canvasFace.id = "canvasFace";
        this.canvasFace.width = _CONSTANTS.canvasWidth;
        this.canvasFace.height = _CONSTANTS.canvasHeight;
        this.canvasWeapons.id = "canvasWeapons";
        this.canvasWeapons.width = _CONSTANTS.canvasWidth;
        this.canvasWeapons.height = _CONSTANTS.canvasHeight;
        this.canvasScore.id = "canvasScore";
        this.canvasScore.width = _CONSTANTS.canvasWidth;
        this.canvasScore.height = _CONSTANTS.canvasHeight;
        this.canvasClick.id = "canvasClick";
        this.canvasClick.width = _CONSTANTS.canvasWidth;
        this.canvasClick.height = _CONSTANTS.canvasHeight;

        this.canvasContainer.appendChild(this.canvasFace);
        this.canvasContainer.appendChild(this.canvasWeapons);
        this.canvasContainer.appendChild(this.canvasScore);
        this.canvasContainer.appendChild(this.canvasClick);
    }

    public buildCanvasCollection(): canvasCollection {
        const _gameGanvasCollection = {
            canvasFace: new GameCanvas(this.canvasFace.id),
            canvasWeapons: new GameCanvas(this.canvasWeapons.id),
            canvasScore: new GameCanvas(this.canvasScore.id),
            canvasClick: new GameCanvas(this.canvasClick.id)
        };
        return {
            canvasFace: { canvas: _gameGanvasCollection.canvasFace.getCanvas(), context: _gameGanvasCollection.canvasFace.getContext() },
            canvasWeapons: { canvas: _gameGanvasCollection.canvasWeapons.getCanvas(), context: _gameGanvasCollection.canvasWeapons.getContext() },
            canvasScore: { canvas: _gameGanvasCollection.canvasScore.getCanvas(), context: _gameGanvasCollection.canvasScore.getContext() },
            canvasClick: { canvas: _gameGanvasCollection.canvasClick.getCanvas(), context: _gameGanvasCollection.canvasClick.getContext() }
        };
    }
}