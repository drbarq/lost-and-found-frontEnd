import React from 'react'
import ItemCommRender from './ItemCommRender';

export default function TrackedItem(props) {

    return (
        props.items.map(item => {
            return(
                <div className="home-trackedItem" key={item.id}>
                    <div className="home-itemNameContainer">
                        <label htmlFor="home-itemName">item name</label>
                        <h5 className="home-itemName">{item.name}</h5>
                    </div>
                    <ItemCommRender comms={item.contact} />
                    <div className="home-editItemButtonContainer">
                        <button className="home-editItemButton">edit</button>
                    </div>
                </div>
            )}
        )
    )
}