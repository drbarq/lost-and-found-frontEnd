import React from 'react'

export default function TrackedItem(props) {
    // debugger;
    return (
        props.items.map(item => {
            return(
                <div className="home-trackedItem" key={item.id}>
                    <div className="home-itemNameContainer">
                        <label htmlFor="home-itemName">item name</label>
                        <h5 className="home-itemName">{item.item_name}</h5>
                    </div>
                    <div className="home-commPrefContainer">
                        <div className="home-phoneCheckBox">
                            <label htmlFor="home-phoneCheck">phone</label>
                            <input className="home-phoneCheck" type="checkbox"></input>
                        </div>
                        <div className="home-textCheckBox">
                            <label htmlFor="home-textCheck">text</label>
                            <input className="home-textCheck" type="checkbox"></input>
                        </div>
                        <div className="home-emailCheckBox">
                            <label htmlFor="home-emailCheck">email</label>
                            <input className="home-emailCheck" type="checkbox"></input>
                        </div>
                    </div>
                    <div className="home-editItemButtonContainer">
                        <button className="home-editItemButton">edit</button>
                    </div>
                </div>
            )}
        )
    )
}



{/* <div className="home-trackedItem">
<div className="home-itemNameContainer">
    <label htmlFor="home-itemName">item name</label>
    <h5 className="home-itemName">Cell Phone</h5>
</div>
<div className="home-commPrefContainer">
    <div className="home-phoneCheckBox">
        <label htmlFor="home-phoneCheck">phone</label>
        <input className="home-phoneCheck" type="checkbox"></input>
    </div>
    <div className="home-textCheckBox">
        <label htmlFor="home-textCheck">text</label>
        <input className="home-textCheck" type="checkbox"></input>
    </div>
    <div className="home-emailCheckBox">
        <label htmlFor="home-emailCheck">email</label>
        <input className="home-emailCheck" type="checkbox"></input>
    </div>
</div>
<div className="home-editItemButtonContainer">
    <button className="home-editItemButton">edit</button>
</div>
</div> */}