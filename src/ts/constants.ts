/// <reference path="Implementations/Face.ts" />

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
    srcFaceStandard: string;
    srcFacePokeRight1: string;
    srcFacePokeRight2: string;
    srcFacePokeLeft1: string;
    srcFacePokeLeft2: string;
    srcFaceDodgeLeft1: string;
    srcFaceDodgeRight1: string;
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
    srcFaceStandard: './images/face-standard.png',
    srcFacePokeRight1: './images/face-poke-right1.png',
    srcFacePokeRight2: './images/face-poke-right2.png',    
    srcFacePokeLeft1: './images/face-poke-left1.png',
    srcFacePokeLeft2: './images/face-poke-left2.png',  
    srcFaceDodgeLeft1: './images/face-dodge-left1.png',
    srcFaceDodgeRight1: './images/face-dodge-right1.png',
    textScore: 'SCORE:',
    timeoutWeaponAppear: 3000,
    timeoutWeaponDisappear: 3000,
    timeoutWeaponHighlight: 50
}

const _FACESTATES: FaceState[] = [
    { stateType: FaceStateType.Standard, duration: 0, src: [ _CONSTANTS.srcFaceStandard ]},
    { stateType: FaceStateType.PokeRight, duration: _CONSTANTS.durationPoke, src: [ _CONSTANTS.srcFacePokeRight1, _CONSTANTS.srcFacePokeRight2 ]},
    { stateType: FaceStateType.PokeLeft, duration: _CONSTANTS.durationPoke, src: [ _CONSTANTS.srcFacePokeLeft1, _CONSTANTS.srcFacePokeLeft2 ]},
    { stateType: FaceStateType.DodgeRight, duration: _CONSTANTS.durationDodge, src: [ _CONSTANTS.srcFaceDodgeRight1 ]},    
    { stateType: FaceStateType.DodgeLeft, duration: _CONSTANTS.durationDodge, src: [ _CONSTANTS.srcFaceDodgeLeft1 ]}
];