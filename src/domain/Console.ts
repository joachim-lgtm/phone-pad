import type Suscriber from "./Suscriber.js";

export default class CustomConsole implements Suscriber {
    private message: string = "";

    update(message: string): void {
        this.message += message;
        console.log(this.message)
    }
}