import React, { Component } from 'react'
import ItemCommRender from './ItemCommRender';
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class TrackedItem extends Component {

    handleClickViewItem = (event) => {
        // debugger
        let buttonData = event.target.parentElement.id
        // let buttonData = event.target.id
        this.props.history.push('/viewItem/', { viewItemButton: buttonData })
    }

    render () {
        return (
            this.props.items.map(item => {
                return(
                    <div className="home-trackedItem" key={item.id}>
                        <div className="home-itemNameContainer">
                            <label htmlFor="home-itemName">item name</label>
                            <h5 className="home-itemName">{item.name}</h5>
                        </div>
                        <ItemCommRender comms={item.contact_methods} />
                        <div className="home-viewItemButtonContainer" id={item.id} >
                            {/* <FontAwesomeIcon color="#939393" icon={['fas', 'sliders-h']} size="lg" onClick={(event) => this.handleClickViewItem(event)}/> */}
                            <button className="home-viewItemButton" id={item.id} onClick={(event) => this.handleClickViewItem(event)}><FontAwesomeIcon color="#2C4246" icon={['fas', 'sliders-h']} size="2x"/></button>
                        </div>
                    </div>
                )}
            )
        )
    }
}
export default withRouter(TrackedItem);