class FaceState implements IFaceState {
    stateType: FaceStateType;
    duration: number;
    src: string[];

    public static getStateByType(faceStates: FaceState[], typeToFind: FaceStateType): FaceState {
        return faceStates.find( ({ stateType }) => stateType === typeToFind );
    }

    public static getSrcForState(state: FaceState): string {
        const numberOfSrcForState: number = state.src.length;
        const srcIndex = Utilities.randomInteger(0, numberOfSrcForState - 1);
        return state.src[srcIndex];
    }
    
    public static getImageForState(state: FaceState): HTMLImageElement {
        const numberOfSrcForState: number = state.src.length;
        const srcIndex = Utilities.randomInteger(0, numberOfSrcForState - 1);
        return _IMAGES.getImgBySrc(state.src[srcIndex]);
    }
}