/// <reference path="../constants.ts" />
/// <reference path="../interfaces/IRectangle.ts" />
/// <reference path="Rectangle.ts" />
/// <reference path="../interfaces/IWeaponManager.ts" />
/// <reference path="../models/coords.ts" />
/// <reference path="../models/dimensions.ts" />
/// <reference path="../Utilities.ts" />

class WeaponManager implements IWeaponManager {

    shapeDrawer: IRectangle;
    isWeaponAttached: boolean = false;
    weaponCoords: coords;

    constructor(shapeDrawer: IRectangle) {
        this.shapeDrawer = shapeDrawer;
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
        return (coords.x > this.weaponCoords.x &&
            coords.x < this.weaponCoords.x + CONSTANTS.dimensionsWeapon.width &&
            coords.y > this.weaponCoords.y &&
            coords.y < this.weaponCoords.y + CONSTANTS.dimensionsWeapon.height);
    }

    private drawWeapon(): void {
        this.generateCoords();
        this.drawWeaponRectangle(CONSTANTS.styleFill);
        window.setTimeout(() => this.eraseWeapon(), CONSTANTS.timeoutWeaponDisappear);
    }

    private generateCoords(): void {
        let randomX = Utilities.getRandomInt(640 - CONSTANTS.dimensionsWeapon.width);        
        let randomY = Utilities.getRandomInt(480 - CONSTANTS.dimensionsWeapon.height);
        this.weaponCoords = { x: randomX, y: randomY };
    }

    private eraseWeapon(): void {
        this.shapeDrawer.clearRectangle(this.weaponCoords, CONSTANTS.dimensionsWeapon.width, CONSTANTS.dimensionsWeapon.height);
    }

    private highlightWeapon(): void {
        this.drawWeaponRectangle(CONSTANTS.styleHighlight);
    }

    private drawWeaponRectangle(style: string) {
        this.shapeDrawer.drawRectangle(this.weaponCoords, CONSTANTS.dimensionsWeapon.width, CONSTANTS.dimensionsWeapon.height, style);
    }
}