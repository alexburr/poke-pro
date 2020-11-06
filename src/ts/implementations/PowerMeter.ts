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
        this.powerMeterBar.id = "powerBar";
        this.powerMeterBox.appendChild(this.powerMeterBar);
        this.container.appendChild(this.powerMeterBox);
        this.audio = new Audio(_SOUNDS[5].src);
        this.audio.autoplay = true;
    }

    public init(): void {
        // this.audio.play(); // disabled since Chrome does not allow autoplay without click
        this.powerMeterBar.classList.add("full");
    }
}