interface IAudioManager {
    getAudioLoaded(): boolean;
    getCanPlay(): boolean;
    playSoundEffect(soundEffect: sound): void;
}