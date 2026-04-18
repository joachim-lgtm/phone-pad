import type Button from "./Button.js";
import type Suscriber from "./Suscriber.js";

export default class Pad {
    private _buttons: Button[] = [];
    private screen: Suscriber;

    constructor(screen: Suscriber) {
        this.screen = screen;
    }
    public get buttons(): Button[] {
        return this._buttons;
    }

    addButton(button: Button): void {
        button.addSubscriber(this.screen);
        this._buttons.push(button);
    }

    removeButton(button: Button): void {
        button.removeSubscriber(this.screen);
        this._buttons = this._buttons.filter(b => b !== button);
    }
}