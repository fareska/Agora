import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'


class Item extends Component {

    buyItem = () => this.props.Inventory.buyItem(this.props.item.name)
    
    
    changePrice = () =>{ //onDoubleClick??
        let newPrice = prompt('Please enter a new price')
        this.props.Inventory.changePrice(this.props.item.name, newPrice)
    } 
        

    render() {
        let item = this.props.item

        return (
            <div className=''>
                    <li>{item.quantity} {item.name} available at ${item.price} 
                    <button onClick={this.buyItem}>Buy</button>
                    <button onClick={this.changePrice}>onDoubleClick</button>
                    </li>                    
            </div>
        )
    }
}

export default inject("Inventory")(observer(Item))