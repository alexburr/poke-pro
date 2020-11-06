/// <reference path="Implementations/Face.ts" />
/// <reference path="Implementations/Images.ts" />

class Constants {
    canvasHeight: number;
    canvasWidth: number;
    coordsClickable: coords;
    coordsLeftEye: coords;
    coordsRightEye: coords;
    coordsFace: coords;
    coordsFinger1: coords;
    coordsFinger2: coords;
    coordsScore: coords;
    debug: boolean;
    dimensionsClickable: dimensions;
    dimensionsEye: dimensions;
    durationDodge: number;
    durationPoke: number;
    // dimensionsWeapon: dimensions;
    font: string;
    fontSizeScore: string;
    // fontScore: string;
    // fontScoreFloat: string;
    messageHit: string;
    messageMiss: string;
    ms60fps: number;
    ms30fps: number;
    styleDebugStroke: string;
    styleText: string;
    pointsPoke: number;
    //pointsWeaponPoke: number;
    textScore: string;
    timeoutWeaponAppear: number;
    timeoutWeaponDisappear: number;
    timeoutWeaponHighlight: number;
}

const _CONSTANTS: Constants = {
    canvasHeight: 273, //480, (diff 207)
    canvasWidth: 640,
    coordsClickable: { x: 170, y: 50 }, //y: 240 },
    coordsFace: { x: 135, y: 0 }, //200
    coordsFinger1: { x: 170, y: 233 }, // 440 },
    coordsFinger2: { x: 170, y: 233 }, // 440 },
    coordsLeftEye: { x: 290, y: 85 }, //285 },
    coordsRightEye: { x: 333, y: 85 }, //285 },
    coordsScore: { x: 610, y: 30 }, // { x: 10, y: 30 },
    debug: false,
    // dimensionsWeapon: { width: 50, height: 50 },
    dimensionsClickable: { width: 300, height: 200 },
    dimensionsEye: { width: 23, height: 10 },
    durationDodge: 250,
    durationPoke: 250,
    font: 'Press Start 2P',
    fontSizeScore: '18px',
    // fontScore: '48px Press Start 2P',
    // fontScoreFloat: '24px Press Start 2P',
    messageHit: "OUCH!",
    messageMiss: "miss",
    ms60fps: 16,
    ms30fps: 33,
    styleDebugStroke: 'rgb(255, 255, 0)',
    styleText: 'rgb(255, 255, 255)',
    pointsPoke: 3,
    //pointsWeaponPoke: 10,
    textScore: '', //'SCORE:',
    timeoutWeaponAppear: 3000,
    timeoutWeaponDisappear: 3000,
    timeoutWeaponHighlight: 50
}

const _IMAGES: Images = new Images([
    { name: "srcFaceStandard", src: './images/face-standard.png' },
    { name: "srcFacePokeRight1", src: './images/face-poke-right1.png' },
    { name: "srcFacePokeRight2", src: './images/face-poke-right2.png' },
    { name: "srcFacePokeLeft1", src: './images/face-poke-left1.png' },
    { name: "srcFacePokeLeft2", src: './images/face-poke-left2.png' },
    { name: "srcFaceDodgeLeft1", src: './images/face-dodge-left1.png' },
    { name: "srcFaceDodgeRight1", src: './images/face-dodge-right1.png' },
    { name: "srcFingerPoke1", src: "./images/fingerpoke1.png" },
    { name: "srcFingerPoke2", src: "./images/fingerpoke2.png" },
    { name: "srcFingerPoke3", src: "./images/fingerpoke3.png" }
]);

const _FACESTATES: FaceState[] = [
    { 
        stateType: FaceStateType.Standard, 
        duration: 0, 
        soundImages: [
            { src:_IMAGES.getImgSrcByName("srcFaceStandard"), sound: null }
        ]
    },
    { 
        stateType: FaceStateType.PokeRight, 
        duration: _CONSTANTS.durationPoke, 
        soundImages: [
            { src: _IMAGES.getImgSrcByName("srcFacePokeRight1"), sound: "ow8" },
            { src: _IMAGES.getImgSrcByName("srcFacePokeRight2"), sound: "ow1" }
        ]
    },
    { 
        stateType: FaceStateType.PokeLeft, 
        duration: _CONSTANTS.durationPoke, 
        soundImages: [
            { src: _IMAGES.getImgSrcByName("srcFacePokeLeft1"), sound: "ow5" },
            { src: _IMAGES.getImgSrcByName("srcFacePokeLeft2"), sound: "ow3" }
        ]
    },
    { 
        stateType: FaceStateType.DodgeRight, 
        duration: _CONSTANTS.durationDodge, 
        soundImages: [
            { src: _IMAGES.getImgSrcByName("srcFaceDodgeRight1"), sound: "eh" }
        ]
    },    
    { 
        stateType: FaceStateType.DodgeLeft, 
        duration: _CONSTANTS.durationDodge, 
        soundImages: [
            { src: _IMAGES.getImgSrcByName("srcFaceDodgeLeft1"), sound: "eh" }
        ]
    }
];

const _SOUNDS: sound[] = [
    { name: "ow1", src: "././sounds/ow1.mp3" },
    { name: "ow3", src: "././sounds/ow3.mp3" },
    { name: "ow5", src: "././sounds/ow5.mp3" },
    { name: "ow8", src: "././sounds/ow8.mp3" },
    { name: "eh", src: "././sounds/eh.mp3" },
    { name: "fill", src: "././sounds/fill.mp3 "}
];