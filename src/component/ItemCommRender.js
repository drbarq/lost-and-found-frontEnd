import React from 'react'

export default function ItemCommRender(props) {


    return(
        <div className="home-commPrefContainer">
            <div className="home-phoneCheckBox">
                <label htmlFor="home-phoneCheck">phone</label>
                <input className="home-phoneCheck" type="checkbox" checked={props.comms.phone ? true : false} ></input>
            </div>
            <div className="home-textCheckBox">
                <label htmlFor="home-textCheck">text</label>
                <input className="home-textCheck" type="checkbox"checked={props.comms.text ? true : false}></input>
            </div>
            <div className="home-emailCheckBox">
                <label htmlFor="home-emailCheck">email</label>
                <input className="home-emailCheck" type="checkbox" checked={props.comms.email ? true : false}></input>
            </div>
        </div>
    )
}