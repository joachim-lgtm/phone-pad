import Button from "./Button.js";


export default class NextLine extends Button {
    constructor() {
        super("NextLine");
    }
    click(): void {
        this.notify("\n");
    }
}