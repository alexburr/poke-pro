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
    styleBackground: string;
    styleDebugStroke: string;
    styleFill: string;
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
    coordsScore: { x: 10, y: 30 },
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
    styleBackground: 'rgb(0,0,0)',
    styleDebugStroke: 'rgb(255, 255, 0)',
    styleFill: 'rgb(200, 0, 0)',
    styleText: 'rgb(255, 255, 255)',
    pointsPoke: 3,
    //pointsWeaponPoke: 10,
    textScore: 'SCORE:',
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
    { stateType: FaceStateType.Standard, duration: 0, src: [ _IMAGES.getImgSrcByName("srcFaceStandard") ]},
    { stateType: FaceStateType.PokeRight, duration: _CONSTANTS.durationPoke, src: [ _IMAGES.getImgSrcByName("srcFacePokeRight1"), _IMAGES.getImgSrcByName("srcFacePokeRight2") ]},
    { stateType: FaceStateType.PokeLeft, duration: _CONSTANTS.durationPoke, src: [ _IMAGES.getImgSrcByName("srcFacePokeLeft1"), _IMAGES.getImgSrcByName("srcFacePokeLeft2") ]},
    { stateType: FaceStateType.DodgeRight, duration: _CONSTANTS.durationDodge, src: [ _IMAGES.getImgSrcByName("srcFaceDodgeRight1") ]},    
    { stateType: FaceStateType.DodgeLeft, duration: _CONSTANTS.durationDodge, src: [ _IMAGES.getImgSrcByName("srcFaceDodgeLeft1") ]}
];

const _FACESOUNDS: faceSound[] = [
    { faceStateType: FaceStateType.PokeRight, src: "././sounds/ow8.wav" },
    { faceStateType: FaceStateType.PokeLeft, src: "././sounds/ow5.wav" },
    { faceStateType: FaceStateType.DodgeRight, src: "././sounds/eh.wav" },
    { faceStateType: FaceStateType.DodgeLeft, src: "././sounds/eh.wav" }
];