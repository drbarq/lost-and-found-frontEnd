import React, { Component } from 'react'
import ItemCommRender from './ItemCommRender';
import { Redirect } from 'react-router-dom'



export default class TrackedItem extends Component {
    constructor() {
        super()
        this.state = {
            inItemEdit: false
        }
    }

    handleClickEditItem = () => {
        this.setState({inItemEdit: true})
    }


    render () {
        if(this.state.inItemEdit === true) {
            return <Redirect to='/editItem' />
        }
        return (
            this.props.items.map(item => {
                return(
                    <div className="home-trackedItem" key={item.id}>
                        <div className="home-itemNameContainer">
                            <label htmlFor="home-itemName">item name</label>
                            <h5 className="home-itemName">{item.name}</h5>
                        </div>
                        <ItemCommRender comms={item.contact} />
                        <div className="home-editItemButtonContainer">
                            <button className="home-editItemButton" onClick={this.handleClickEditItem}>edit</button>
                        </div>
                    </div>
                )}
            )
        )}
}