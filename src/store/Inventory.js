import { observable, action, makeObservable, computed } from 'mobx'

import { Item } from './Item'

export class Inventory {
    constructor() {
        this.items = []

        makeObservable(this, {
            items: observable,
            addItem: action,
            buyItem: action,
            changePrice: action,
            numItems: computed
        })
    }

    get numItems (){
        let counter = 0 
        this.items.forEach(i => {
            counter += i.quantity
        })
        return counter
    }

    addItem = (name, price = 0, quantity = 1) => {
        let item = this.items.find(i => i.name === name)
        item ? item.quantity++ : this.items.push(new Item(name, price, quantity));
    }

    buyItem = name => {
        
        for (let i in this.items){
            if(this.items[i].name === name){
                this.items[i].quantity > 1 ? this.items[i].quantity-- : this.items.splice(i, 1) 
            }
        }
        //////////// cam i replace the for loop with find method ? instead of the above:
        // this.items.find(i=> i.name ===name).quantity && itemQuantity === 0 ? this.items.splice(i, 1) : this.items[i].quantity-- ??
    }

    changePrice = (name, price) => {
        for (let i in this.items) {
            if (this.items[i].name === name) {
                this.items[i].price = price
            }
        }
    }
}

// addItem = name =>{
//     this.list.push(new Item(name))
// }

// editItem = (location, name) => {
//     let item = this.list.find(i=> i.name === name)
//     item.location = location
// }

// deleteItem = name => {
//     let index = this.list.indexOf(name)
//     this.list.splice(index, 1)

// }