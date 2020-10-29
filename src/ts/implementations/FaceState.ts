class SoundImagePair {
    src: string;
    sound: string;
}

class FaceState implements IFaceState {
    stateType: FaceStateType;
    duration: number;
    soundImages: SoundImagePair[];
    // src: string[];
    // sounds: string[];

    public static getStateByType(faceStates: FaceState[], typeToFind: FaceStateType): FaceState {
        return faceStates.find( ({ stateType }) => stateType === typeToFind );
    }

    public static getSoundImageForState(state: FaceState): SoundImagePair {
        const numberOfPairsForState: number = state.soundImages.length;
        const pairIndex = Utilities.randomInteger(0, numberOfPairsForState - 1);
        return state.soundImages[pairIndex];
    }
}