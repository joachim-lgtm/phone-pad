import Publisher from "./Publisher.js";

export default class Button extends Publisher {
    private value: string;

    constructor(value: string) {
        super();
        this.value = value;
    }

    public getValue(): string {
        return this.value;
    }

    click(): void {
        this.notify(this.value);
    }
}