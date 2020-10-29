interface IAudioManager {
    getAudioLoaded(): boolean;
    getCanPlay(): boolean;
    playSoundEffect(name: string): void;
}