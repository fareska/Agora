import react, { Component } from "react";
import { observer } from 'mobx-react'
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
        this.props.store.addItem(this.state.itemName)
        this.setState({
            itemName: ''
        })
    }

    render() {
        return (
            <div className="" >
                <input type="text" value={this.state.itemName} onChange={this.handleItemName} /> {/* onKeyPress={this.addItem}*/}
                <button onClick={this.addItem} >tempButton</button>
                {this.props.store.items.map((i, ind) =>  <Item key={ind} item={i} store={this.props.store} /> )}
            </div>
        )
    }

}

export default observer(Market) 