interface IStatus {
    showStatus(callback: () => any): void;
    close(): void;
}