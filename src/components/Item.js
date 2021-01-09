import React, { Component } from 'react'
import { observer } from 'mobx-react'


class Item extends Component {

    buyItem = () => this.props.store.buyItem(this.props.item.name)
    
    ////////onDoubleClick??????????????????????????????????????/
    changePrice = () =>{
        let newPrice = prompt('Please enter a new price')
        this.props.store.changePrice(this.props.item.name, newPrice)
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

export default observer(Item)