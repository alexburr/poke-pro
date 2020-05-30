/// <reference path="../constants.ts" />
/// <reference path="../interfaces/IRectangle.ts" />
/// <reference path="Rectangle.ts" />
/// <reference path="../interfaces/IWeaponManager.ts" />
/// <reference path="../models/coords.ts" />
/// <reference path="../models/dimensions.ts" />
/// <reference path="../Utilities.ts" />

class WeaponManager implements IWeaponManager {

    rectangle: IRectangle;
    isWeaponAttached: boolean = false;
    isWeaponVisible: boolean = false;
    weaponCoords: coords;

    constructor(shapeDrawer: IRectangle) {
        this.rectangle = shapeDrawer;
    }

    public activate(): void {
        window.setTimeout(() => this.drawWeapon(), CONSTANTS.timeoutWeaponAppear);
    }

    public attachWeapon(attach: boolean): void {
        this.isWeaponAttached = attach;
        if (attach) {
            this.highlightWeapon();
            window.setTimeout(() => this.eraseWeapon(), CONSTANTS.timeoutWeaponHighlight);
        }
    }

    public getIsWeaponAttached(): boolean {
        return this.isWeaponAttached;
    }

    public isCoordsInWeapon(coords: coords): boolean {  
        if (!this.isWeaponVisible) {
            return false;
        }
        return this.rectangle.isCoordsIn(coords);
    }

    private drawWeapon(): void {
        this.generateCoords();
        this.drawWeaponRectangle(CONSTANTS.styleFill);
        this.isWeaponVisible = true;
        window.setTimeout(() => this.eraseWeapon(), CONSTANTS.timeoutWeaponDisappear);
    }

    private generateCoords(): void {
        let randomX = Utilities.getRandomInt(640 - CONSTANTS.dimensionsWeapon.width);        
        let randomY = Utilities.getRandomInt(480 - CONSTANTS.dimensionsWeapon.height);
        this.weaponCoords = { x: randomX, y: randomY };
    }

    private eraseWeapon(): void {
        this.rectangle.clear();
        this.isWeaponVisible = false;
    }

    private highlightWeapon(): void {
        this.drawWeaponRectangle(CONSTANTS.styleHighlight);
    }

    private drawWeaponRectangle(style: string) {
        this.rectangle.draw(this.weaponCoords, CONSTANTS.dimensionsWeapon, style);
    }
}