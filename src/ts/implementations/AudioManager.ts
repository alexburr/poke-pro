/// <reference path="../Enums/FaceStateType.ts" />
/// <reference path="../Constants.ts" />
/// <reference path="../interfaces/IAudioManager.ts" />

class AudioManager implements IAudioManager {

    loadedEffects: number = 0;
    htmlAudioElements: HTMLAudioElement[] = [];
    faceSoundEffects: FaceSoundEffect[] = [
        { faceStateType: FaceStateType.PokeRight, src: "././sounds/ow8.wav" }
    ];

    constructor() {

        this.faceSoundEffects.forEach(faceSoundEffect => {
            const htmlAudio = new Audio(faceSoundEffect.src);
            htmlAudio.onloadeddata = () => {
                this.loadedEffects++;
            }
            this.htmlAudioElements.push(htmlAudio);
        });
    }

    public getAudioLoaded(): boolean {
        return (this.loadedEffects == this.htmlAudioElements.length);
    }

    // public playAudio(): void {
    //     if (this.isAudioLoaded) {
    //         this.htmlaudio.play();
    //     }
    // }

    public playFaceSoundEffect(faceStateType: FaceStateType): void {
        if (this.getAudioLoaded() && faceStateType == this.faceSoundEffects[0].faceStateType) {
            this.htmlAudioElements[0].play();
        }
    }
}

class SoundEffect {
    src: string;
}

class FaceSoundEffect extends SoundEffect {
    faceStateType: FaceStateType;
}

// const FaceSoundEffects: FaceSoundEffect[] = [
//     { faceStateType: FaceStateType.PokeRight, src: "././sounds/ow8.wav"}
// ]