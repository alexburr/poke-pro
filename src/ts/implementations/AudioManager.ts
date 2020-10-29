/// <reference path="../Enums/FaceStateType.ts" />
/// <reference path="../Constants.ts" />
/// <reference path="../interfaces/IAudioManager.ts" />

class AudioManager implements IAudioManager {

    audioSoundEffects: audioSoundEffect[] = [];
    currentSound: HTMLAudioElement = null;
    sounds: sound[] = _SOUNDS;
    loadedSounds: number = 0;

    constructor() {

        this.sounds.forEach(sound => {
            const htmlAudio: HTMLAudioElement = new Audio(sound.src);
            htmlAudio.onloadeddata = () => {
                this.loadedSounds++;
            }
            htmlAudio.onplaying = () => {
                this.currentSound = htmlAudio;
            }
            htmlAudio.onended = () => {
                this.clearSound();
            }
            const audioSoundEffect: audioSoundEffect = { htmlAudioElement: htmlAudio, name: sound.name };
            this.audioSoundEffects.push(audioSoundEffect);
        });
    }

    public getAudioLoaded(): boolean {
        return (this.loadedSounds == this.audioSoundEffects.length);
    }

    public getCanPlay(): boolean {
        return (this.currentSound.currentTime == 0 || this.currentSound == null);
    }

    public playSoundEffect(name: string): void {
        if (!this.getAudioLoaded) { return; }

        let audioSoundEffect: audioSoundEffect = this.audioSoundEffects.find(aSE => aSE.name ===  name);

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