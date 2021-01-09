import  { Component } from "react";
import { observer, inject } from 'mobx-react'
import Item from "./Item";



class Market extends Component {
    constructor() {
        super()
        this.state = {
            itemName : ''
        }
    }

    handleItemName = (e) =>{
        this.setState({
            itemName: e.target.value 
        })
    } 

    addItem = () => {
        this.state.itemName !== ''
        &&this.props.Inventory.addItem(this.state.itemName)
        this.setState({
            itemName: ''
        })
    }

    render() {
        return (
            <div className="" >
                <div>The number of the total items in the store is {this.props.Inventory.numItems} items.</div>
                <input type="text" value={this.state.itemName} onChange={this.handleItemName} /> {/* onKeyPress={this.addItem}*/}
                <button onClick={this.addItem} >tempButton</button>
                {this.props.Inventory.items.map((i, ind) =>  <Item key={ind} item={i} store={this.props.Inventory} /> )}
            </div>
        )
    }

}

export default inject("Inventory")(observer(Market)) 