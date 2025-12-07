/// <reference path="Implementations/Face.ts" />
/// <reference path="Implementations/ImageObject.ts" />

class Constants {
    static canvasHeight: number = 243;
    static canvasWidth: number = 640;
    static coordsClickable: coords = { x: 170, y: 50 };
    static coordsLeftEye: coords = { x: 290, y: 85 };
    static coordsRightEye: coords = { x: 333, y: 85 };
    static coordsFace: coords = { x: 135, y: 0 };
    static coordsFinger1: coords = { x: 170, y: 233 };
    static coordsFinger2: coords = { x: 170, y: 233 };
    static coordsScore: coords = { x: 610, y: 30 };
    static debug: boolean = false;
    static dimensionsClickable: dimensions = { width: 300, height: 200 };
    static dimensionsEye: dimensions = { width: 23, height: 10 };
    static durationDodge: number = 250;
    static durationPoke: number = 250;
    static font: string = 'Press Start 2P';
    static fontSizeScore: string = '18px';
    static messageHit: string = "OUCH!";
    static messageMiss: string = "miss";
    static ms60fps: number = 16;
    static ms30fps: number = 33;
    static styleDebugStrokeWidth: number = 1;
    static styleDebugStroke1: string = 'rgb(255, 255, 0)';
    static styleDebugStroke2: string = 'rgb(255, 0, 0)';
    static styleDebugStroke3: string = 'rgb(0, 0, 255)';
    static styleDebugStroke4: string = 'rgb(0, 255, 0)';
    static styleText: string = 'rgb(255, 255, 255)';
    static pointsPoke: number = 3;
    static textScore: string = '';
    static textStartup: string = 'CLICK TO BEGIN';
    static timeoutWeaponAppear: number = 3000;
    static timeoutWeaponDisappear: number = 3000;
    static timeoutWeaponHighlight: number = 50;
}

class Images {
    static faceStandard: ImageObject = new ImageObject({ name: "srcFaceStandard", src: './images/face-standard.png' });
    static facePokeRight1: ImageObject = new ImageObject({ name: "srcFacePokeRight1", src: './images/face-poke-right1.png' });
    static facePokeRight2: ImageObject = new ImageObject({ name: "srcFacePokeRight2", src: './images/face-poke-right2.png' });
    static facePokeLeft1: ImageObject = new ImageObject({ name: "srcFacePokeLeft1", src: './images/face-poke-left1.png' });
    static facePokeLeft2: ImageObject = new ImageObject({ name: "srcFacePokeLeft2", src: './images/face-poke-left2.png' });
    static faceDodgeLeft1: ImageObject = new ImageObject({ name: "srcFaceDodgeLeft1", src: './images/face-dodge-left1.png' });
    static faceDodgeRight1: ImageObject = new ImageObject({ name: "srcFaceDodgeRight1", src: './images/face-dodge-right1.png' });
    static fingerPoke1: ImageObject = new ImageObject({ name: "srcFingerPoke1", src: './images/fingerpoke1.png' });
    static fingerPoke2: ImageObject = new ImageObject({ name: "srcFingerPoke2", src: './images/fingerpoke2.png' });
    static fingerPoke3: ImageObject = new ImageObject({ name: "srcFingerPoke3", src: './images/fingerpoke3.png' });
}

class Sounds {
    static ow1: sound = { name: "ow1", src: "././sounds/ow1.mp3" };
    static ow3: sound = { name: "ow3", src: "././sounds/ow3.mp3" };
    static ow5: sound = { name: "ow5", src: "././sounds/ow5.mp3" };
    static ow8: sound = { name: "ow8", src: "././sounds/ow8.mp3" };
    static eh: sound = { name: "eh", src: "././sounds/eh.mp3" };
    static fill: sound = { name: "fill", src: "././sounds/fill.mp3 "};
    static music: sound = { name: "music", src: "././sounds/music.mp3" }
}

const _FACESTATES: FaceState[] = [
    { 
        stateType: FaceStateType.Standard, 
        duration: 0, 
        soundImages: [
            { image: Images.faceStandard, sound: null }
        ]
    },
    { 
        stateType: FaceStateType.PokeRight, 
        duration: Constants.durationPoke, 
        soundImages: [
            { image: Images.facePokeRight1, sound: Sounds.ow8 },
            { image: Images.facePokeRight2, sound: Sounds.ow1 }
        ]
    },
    { 
        stateType: FaceStateType.PokeLeft, 
        duration: Constants.durationPoke, 
        soundImages: [
            { image: Images.facePokeLeft1, sound: Sounds.ow5 },
            { image: Images.facePokeLeft2, sound: Sounds.ow3 }
        ]
    },
    { 
        stateType: FaceStateType.DodgeRight, 
        duration: Constants.durationDodge, 
        soundImages: [
            { image: Images.faceDodgeRight1, sound: Sounds.eh }
        ]
    },    
    { 
        stateType: FaceStateType.DodgeLeft, 
        duration: Constants.durationDodge, 
        soundImages: [
            { image: Images.faceDodgeLeft1, sound: Sounds.eh }
        ]
    }
];