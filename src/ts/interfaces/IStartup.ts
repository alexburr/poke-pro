interface IStartup {
    showStartupText(): void;
    playMusic(): void;
    close(): void;
    waitForClick(callback: () => any): void;
}