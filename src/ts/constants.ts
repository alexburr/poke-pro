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
    debug: true,
    // dimensionsWeapon: { width: 50, height: 50 },
    dimensionsEye: { width: 23, height: 10 },
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
    textScore: 'SCORE:',
    timeoutWeaponAppear: 3000,
    timeoutWeaponDisappear: 3000,
    timeoutWeaponHighlight: 50
}