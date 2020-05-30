/// <reference path="models/coords.ts" />

class Constants {
    coordsLeftEye: coords;
    coordsRightEye: coords;
    coordsOuterCircle: coords;
    coordsMouth: coords;
    coordsScore: coords;
    messageHit: string;
    messageMiss: string;
    radiusEye: number;
    radiusOuterCircle: number;
    radiusMouth: number;
    styleBackground: string;
    styleStroke: string;
    styleFill: string;
    styleText: string;
    pointsPoke: number;
    pointsWeaponPoke: number;
    textScore: string;
    timeoutWeaponAppear: number;
    timeoutWeaponDisappear: number;
}

const CONSTANTS: Constants = {
    coordsLeftEye: { x: 305, y: 230 },
    coordsRightEye: { x: 335, y: 230 },
    coordsOuterCircle: { x: 320, y: 240 },
    coordsMouth: { x: 320, y: 240 },
    coordsScore: { x: 10, y: 30 },
    messageHit: "OUCH!",
    messageMiss: "miss",
    radiusEye: 5,
    radiusOuterCircle: 50,
    radiusMouth: 35,
    styleBackground: 'rgb(0,0,0)',
    styleStroke: 'rgb(200, 200, 200)',
    styleFill: 'rgb(200, 0, 0)',
    styleText: 'rgb(200, 200, 0)',
    pointsPoke: 3,
    pointsWeaponPoke: 10,
    textScore: 'SCORE:',
    timeoutWeaponAppear: 3000,
    timeoutWeaponDisappear: 3000
};