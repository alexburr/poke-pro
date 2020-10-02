/// <reference path="Implementations/Face.ts" />
/// <reference path="Implementations/Images.ts" />

class Constants {
    canvasHeight: number;
    canvasWidth: number;
    coordsLeftEye: coords;
    coordsRightEye: coords;
    coordsFace: coords;
    // coordsOuterCircle: coords;
    // coordsMouth: coords;
    coordsScore: coords;
    debug: boolean;
    dimensionsEye: dimensions;
    durationDodge: number;
    durationPoke: number;
    // dimensionsWeapon: dimensions;
    fontScore: string;
    messageHit: string;
    messageMiss: string;
    //radiusEye: number;
    //radiusOuterCircle: number;
    //radiusMouth: number;
    styleBackground: string;
    styleDebugStroke: string;
    //styleStroke: string;
    styleFill: string;
    styleText: string;
    // styleHighlight: string;
    pointsPoke: number;
    //pointsWeaponPoke: number;
    textScore: string;
    timeoutWeaponAppear: number;
    timeoutWeaponDisappear: number;
    timeoutWeaponHighlight: number;
}

const _CONSTANTS: Constants = {
    canvasHeight: 480,
    canvasWidth: 640,
    coordsFace: { x: 135, y: 200 },
    coordsLeftEye: { x: 290, y: 285 },
    coordsRightEye: { x: 333, y: 285 },
    // coordsOuterCircle: { x: 320, y: 240 },
    // coordsMouth: { x: 320, y: 240 },
    coordsScore: { x: 10, y: 30 },
    debug: false,
    // dimensionsWeapon: { width: 50, height: 50 },
    dimensionsEye: { width: 23, height: 10 },
    durationDodge: 250,
    durationPoke: 250,
    fontScore: '24px sans-serif',
    messageHit: "OUCH!",
    messageMiss: "miss",
    // radiusEye: 5,
    // radiusOuterCircle: 50,
    // radiusMouth: 35,
    styleBackground: 'rgb(0,0,0)',
    styleDebugStroke: 'rgb(255, 255, 0)',
    // styleStroke: 'rgb(200, 200, 200)',
    styleFill: 'rgb(200, 0, 0)',
    styleText: 'rgb(200, 200, 0)',
    // styleHighlight: 'rgb(200, 200, 200)',
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
    { name: "srcFaceDodgeRight1", src: './images/face-dodge-right1.png' }
]);

const _FACESTATES: FaceState[] = [
    { stateType: FaceStateType.Standard, duration: 0, src: [ _IMAGES.getImgSrcByName("srcFaceStandard") ]},
    { stateType: FaceStateType.PokeRight, duration: _CONSTANTS.durationPoke, src: [ _IMAGES.getImgSrcByName("srcFacePokeRight1"), _IMAGES.getImgSrcByName("srcFacePokeRight2") ]},
    { stateType: FaceStateType.PokeLeft, duration: _CONSTANTS.durationPoke, src: [ _IMAGES.getImgSrcByName("srcFacePokeLeft1"), _IMAGES.getImgSrcByName("srcFacePokeLeft2") ]},
    { stateType: FaceStateType.DodgeRight, duration: _CONSTANTS.durationDodge, src: [ _IMAGES.getImgSrcByName("srcFaceDodgeRight1") ]},    
    { stateType: FaceStateType.DodgeLeft, duration: _CONSTANTS.durationDodge, src: [ _IMAGES.getImgSrcByName("srcFaceDodgeLeft1") ]}
];