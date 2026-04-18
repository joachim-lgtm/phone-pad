import type Suscriber from "./Suscriber.js";

export default class Screen implements Suscriber {
    private message: string = "";

    update(message: string): void {
        this.message += message;
        alert(this.message)
    }

    display(): string {
        return this.message;
    }

    clear(): void {
        this.message = "";
    }
}