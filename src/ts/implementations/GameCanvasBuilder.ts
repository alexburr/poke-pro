/// <reference path="../models/canvasCollection.ts" />
/// <reference path="../Interfaces/IGameCanvas.ts" />
/// <reference path="GameCanvas.ts" />
/// <reference path="../Constants.ts" />

class GameCanvasBuilder implements IGameCanvasBuilder {

    canvasContainer: HTMLElement;
    canvasFace: HTMLCanvasElement;
    canvasFinger: HTMLCanvasElement;
    canvasWeapons: HTMLCanvasElement;
    canvasScore: HTMLCanvasElement;
    canvasClick: HTMLCanvasElement;
    //canvasPointFloater: HTMLCanvasElement;
    canvasStartup: HTMLCanvasElement;

    constructor(containerId: string) {
        this.canvasContainer = document.getElementById(containerId);
        this.canvasFace = this.buildCanvas("canvasFace");
        this.canvasFinger = this.buildCanvas("canvasFinger");
        this.canvasWeapons = this.buildCanvas("canvasWeapons"); 
        this.canvasScore = this.buildCanvas("canvasScore");
        this.canvasClick = this.buildCanvas("canvasClick"); 
        //this.canvasPointFloater = this.buildCanvas("canvasPointFloater"); 
        this.canvasStartup = this.buildCanvas("canvasStartup"); 
    }

    private buildCanvas(canvasId: string): HTMLCanvasElement {
        const canvas: HTMLCanvasElement = document.createElement("canvas");
        canvas.id = canvasId;
        canvas.width = Constants.canvasWidth;
        canvas.height = Constants.canvasHeight;
        this.canvasContainer.appendChild(canvas);
        return canvas;
    }

    public buildCanvasCollection(): canvasCollection {
        const _gameGanvasCollection = {
            canvasFace: new GameCanvas(this.canvasFace.id),
            canvasFinger: new GameCanvas(this.canvasFinger.id),
            canvasWeapons: new GameCanvas(this.canvasWeapons.id),
            canvasScore: new GameCanvas(this.canvasScore.id),
            canvasClick: new GameCanvas(this.canvasClick.id),
            //canvasPointFloater: new GameCanvas(this.canvasPointFloater.id),
            canvasStartup: new GameCanvas(this.canvasStartup.id)
        };
        return {
            canvasFace: { canvas: _gameGanvasCollection.canvasFace.getCanvas(), context: _gameGanvasCollection.canvasFace.getContext() },
            canvasFinger: { canvas: _gameGanvasCollection.canvasFinger.getCanvas(), context: _gameGanvasCollection.canvasFinger.getContext() },
            canvasWeapons: { canvas: _gameGanvasCollection.canvasWeapons.getCanvas(), context: _gameGanvasCollection.canvasWeapons.getContext() },
            canvasScore: { canvas: _gameGanvasCollection.canvasScore.getCanvas(), context: _gameGanvasCollection.canvasScore.getContext() },
            canvasClick: { canvas: _gameGanvasCollection.canvasClick.getCanvas(), context: _gameGanvasCollection.canvasClick.getContext() },
            //canvasPointFloater: { canvas: _gameGanvasCollection.canvasPointFloater.getCanvas(), context: _gameGanvasCollection.canvasPointFloater.getContext() },
            canvasStartup: { canvas: _gameGanvasCollection.canvasStartup.getCanvas(), context: _gameGanvasCollection.canvasStartup.getContext() }
        };
    }
}