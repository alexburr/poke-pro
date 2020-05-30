interface IWeaponManager {
    activate(): void;
    attachWeapon(attach: boolean): void;
    getIsWeaponAttached(): boolean;
    isCoordsInWeapon(coords: coords): boolean;
}