/// <reference path="../Enums/FaceStateType.ts" />
/// <reference path="../Constants.ts" />
/// <reference path="../interfaces/IAudioManager.ts" />

class AudioManager implements IAudioManager {

    audioSoundEffects: audioSoundEffect[] = [];
    currentSound: HTMLAudioElement = null;
    faceSounds: faceSound[] = _FACESOUNDS;
    loadedSounds: number = 0;

    constructor() {

        this.faceSounds.forEach(faceSound => {
            const htmlAudio: HTMLAudioElement = new Audio(faceSound.src);
            htmlAudio.onloadeddata = () => {
                this.loadedSounds++;
            }
            htmlAudio.onplaying = () => {
                this.currentSound = htmlAudio;
            }
            htmlAudio.onended = () => {
                this.clearSound();
            }
            const audioSoundEffect: audioSoundEffect = { htmlAudioElement: htmlAudio, faceStateType: faceSound.faceStateType };
            this.audioSoundEffects.push(audioSoundEffect);
        });
    }

    public getAudioLoaded(): boolean {
        return (this.loadedSounds == this.audioSoundEffects.length);
    }

    public getCanPlay(): boolean {
        return (this.currentSound.currentTime == 0 || this.currentSound == null);
    }

    public playFaceSoundEffect(faceStateType: FaceStateType): void {
        if (!this.getAudioLoaded) { return; }

        let audioSoundEffect: audioSoundEffect = this.audioSoundEffects.find(aSE => aSE.faceStateType === faceStateType);

        if (audioSoundEffect != null) {
            this.stopSound();
            this.playSound(audioSoundEffect.htmlAudioElement);
        }
    }

    private clearSound(): void {
        this.currentSound = null;
    }

    private stopSound(): void {
        if (this.currentSound != null) { 
            this.currentSound.pause(); 
            this.currentSound.currentTime = 0;
        }
    }

    private playSound(htmlAudioElement: HTMLAudioElement): void {
        this.currentSound = htmlAudioElement;
        this.currentSound.play();
    }
}