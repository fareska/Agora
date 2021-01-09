import { observable, makeObservable } from 'mobx'

export class Item {
    constructor(name, price, quantity) {
        this.name = name
        this.quantity = quantity
        this.price  = price

        makeObservable(this, {
            name: observable,
            quantity: observable,
            price: observable
        })
    }
}
