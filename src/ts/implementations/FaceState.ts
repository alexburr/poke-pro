class FaceState implements IFaceState {
    stateType: FaceStateType;
    duration: number;
    src: string[];
    sounds: string[];

    public static getStateByType(faceStates: FaceState[], typeToFind: FaceStateType): FaceState {
        return faceStates.find( ({ stateType }) => stateType === typeToFind );
    }
    
    public static getImageForState(state: FaceState): HTMLImageElement {
        const numberOfSrcForState: number = state.src.length;
        const srcIndex = Utilities.randomInteger(0, numberOfSrcForState - 1);
        return _IMAGES.getImgBySrc(state.src[srcIndex]);
    }

    public static getSoundForState(state: FaceState): faceSound {
        const numberOfSoundsForState: number = state.sounds.length;
        if (numberOfSoundsForState == 0) {
            return null;
        }
        const soundIndex = Utilities.randomInteger(0, numberOfSoundsForState - 1);
        const soundName = state.sounds[soundIndex];
        return _FACESOUNDS.find( ({ name }) => name === soundName );
    }
}