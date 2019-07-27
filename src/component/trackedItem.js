import React, { Component } from 'react'
import ItemCommRender from './ItemCommRender';
import { Redirect } from 'react-router-dom'



export default class TrackedItem extends Component {
    constructor() {
        super()
        this.state = {
            inViewItem: false
        }
    }

    handleClickViewItem = () => {
        this.setState({inViewItem: true})
    }


    render () {
        if(this.state.inViewItem === true) {
            return <Redirect to='/viewItem/' />
        }
        return (
            this.props.items.map(item => {
                return(
                    <div className="home-trackedItem" key={item.id}>
                        <div className="home-itemNameContainer">
                            <label htmlFor="home-itemName">item name</label>
                            <h5 className="home-itemName">{item.name}</h5>
                        </div>
                        <ItemCommRender comms={item.contact_methods} />
                        <div className="home-viewItemButtonContainer">
                            <button className="home-viewItemButton" onClick={this.handleClickViewItem}>view</button>
                        </div>
                    </div>
                )}
            )
        )}
}