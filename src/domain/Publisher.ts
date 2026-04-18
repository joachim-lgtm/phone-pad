import type Suscriber from "./Suscriber.ts";

export default abstract class Publisher {
    protected subscribers: Suscriber[] = [];

    addSubscriber(subscriber: Suscriber): Publisher {
        this.subscribers.push(subscriber);
        return this;
    }

    removeSubscriber(subscriber: Suscriber): Publisher {
        this.subscribers = this.subscribers.filter(s => s !== subscriber);
        return this;
    }

    notify(message: string): void {
        this.subscribers.forEach(s => s.update(message));
    }
}