interface IAudioManager {
    getAudioLoaded(): boolean;
    //playAudio(): void;
    playFaceSoundEffect(faceStateType: FaceStateType): void;
}