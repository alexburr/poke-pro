/// <reference path="../interfaces/IPowerMeter.ts" />
/// <reference path="../Constants.ts" />

class PowerMeter implements IPowerMeter {

    audio: HTMLAudioElement;
    container: HTMLElement;
    powerMeterBox: HTMLDivElement;
    powerMeterBar: HTMLDivElement;

    constructor(containerId: string) {
        this.container = document.getElementById(containerId);
        this.powerMeterBox = document.createElement("div");
        this.powerMeterBar = document.createElement("div");    
        this.powerMeterBox.id = "powerBox";
        this.powerMeterBox.classList.add("hidden");
        this.powerMeterBar.id = "powerBar";
        this.powerMeterBox.appendChild(this.powerMeterBar);
        this.container.appendChild(this.powerMeterBox);
        this.audio = new Audio(Sounds.fill.src);
    }

    public init(): void {
        this.powerMeterBox.classList.remove("hidden");
        this.audio.play(); 
        this.powerMeterBar.classList.add("full");
    }
}