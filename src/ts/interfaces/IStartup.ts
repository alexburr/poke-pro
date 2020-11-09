interface IStartup {
    showStartupText(): void;
    close(): void;
    waitForClick(callback: () => any): void;
}