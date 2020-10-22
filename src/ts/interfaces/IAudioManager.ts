interface IAudioManager {
    getAudioLoaded(): boolean;
    getCanPlay(): boolean;
    playFaceSoundEffect(faceStateType: FaceStateType): void;
}