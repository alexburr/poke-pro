/// <reference path="../constants.ts" />
/// <reference path="../interfaces/IShapeDrawer.ts" />
/// <reference path="../interfaces/IWeaponManager.ts" />
/// <reference path="ShapeDrawer.ts" />
/// <reference path="../models/coords.ts" />
/// <reference path="../Utilities.ts" />

class WeaponManager implements IWeaponManager {

    shapeDrawer: IShapeDrawer;
    isWeaponAttached: boolean = false;
    weaponCoords: coords;
    weaponWidth: number = 50;
    weaponHeight: number = 50;

    constructor(shapeDrawer: IShapeDrawer) {
        this.shapeDrawer = shapeDrawer;
    }

    public activate(): void {
        window.setTimeout(() => this.drawWeapon(), CONSTANTS.timeoutWeaponAppear);
    }

    public attachWeapon(attach: boolean): void {
        this.isWeaponAttached = attach;
        if (attach) {
            this.eraseWeapon();
        }
    }

    public getIsWeaponAttached(): boolean {
        return this.isWeaponAttached;
    }

    public isCoordsInWeapon(coords: coords): boolean {  
        return (coords.x > this.weaponCoords.x &&
            coords.x < this.weaponCoords.x + this.weaponWidth &&
            coords.y > this.weaponCoords.y &&
            coords.y < this.weaponCoords.y + this.weaponHeight);
    }

    private drawWeapon(): void {
        this.generateCoords();
        this.shapeDrawer.drawRectangle(this.weaponCoords, this.weaponWidth, this.weaponHeight);
        window.setTimeout(() => this.eraseWeapon(), CONSTANTS.timeoutWeaponDisappear);
    }

    private generateCoords(): void {
        let randomX = Utilities.getRandomInt(640 - this.weaponWidth);        
        let randomY = Utilities.getRandomInt(480 - this.weaponHeight);
        this.weaponCoords = { x: randomX, y: randomY };
    }

    private eraseWeapon(): void {
        this.shapeDrawer.clearRectangle(this.weaponCoords, this.weaponWidth, this.weaponHeight);
    }
}