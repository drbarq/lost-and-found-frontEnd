import React, { Component} from 'react'
import '../css/viewItem.css'


export default class ViewItem extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return(
            <React.Fragment>
                <div className="viewItem-viewItemContainer">
                    <div className="viewItem-viewItemTitleContainer">
                        <p>view item</p>
                    </div>
                    <form className="viewItem-viewItemInfoContainer" action="" method="post">
                        <div className="viewItem-viewItemContainerRowOne">
                            <div className="viewItem-viewItemNameContainer">
                                <label htmlFor="viewItem-viewItemName">item name</label>
                                <input className="viewItem-viewItemName" type="text"></input>
                            </div>
                            <div className="viewItem-qrCodeContainer">
                                <img className="viewItem-qrcode" src="https://i.imgur.com/SGcW4yf.png"/>
                            </div>
                        </div>
                        <div className="viewItem-viewCommsContainer">
                            <div className="viewItem-viewCommsOptionContainer">
                                <div className="viewItem-viewTitleContainer">
                                    <label htmlFor="viewItem-viewPhoneComms">phone</label>
                                    <input className="viewItem-viewPhoneComms" type="text"></input>
                                </div>
                            </div>
                            <div className="viewItem-viewCommsOptionContainer">
                                <div className="viewItem-viewTitleContainer">
                                    <label htmlFor="viewItem-viewTextComms">text</label>
                                    <input className="viewItem-viewTextComms" type="text"></input>
                                </div>
                            </div>
                            <div className="viewItem-viewCommsOptionContainer">
                                <div className="viewItem-viewTitleContainer">
                                    <label htmlFor="viewItem-viewEmailComms">email</label>
                                    <input className="viewItem-viewEmailComms" type="text"></input>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
            
        )
    }
}