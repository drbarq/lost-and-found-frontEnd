import React, { Component} from 'react'
import '../css/newItem.css'

export default class NewItems extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return(
            <React.Fragment>
                <div className="newItem-newItemContainer">
                    <div className="newItem-newItemTitleContainer">
                        <p>new item</p>
                        <div className="newItem-buttonsContainer">
                            <button>create new item</button>
                        </div>
                    </div>
                    <form className="newItem-newItemInfoContainer" action="" method="post">
                        <div className="newItem-newItemContainerRowOne">
                            <div className="newItem-newItemNameContainer">
                                <label htmlFor="newItem-newItemName">name</label>
                                <input className="newItem-newItemName" type="text"></input>
                            </div>
                            <div className="newItem-qrCodeContainer">
                                <img className="newItem-qrcode" src="https://i.imgur.com/XbBO7UG.png"/>
                            </div>
                        </div>
                        <div className="newItem-newCommsContainer">
                            <div className="newItem-newCommsOptionContainer">
                                <div className="newItem-newTitleContainer">
                                    <label htmlFor="newItem-newPhoneComms">phone</label>
                                    <input className="newItem-newPhoneComms" type="text"></input>
                                </div>
                            </div>
                            <div className="newItem-newCommsOptionContainer">
                                <div className="newItem-newTitleContainer">
                                    <label htmlFor="newItem-newTextComms">text</label>
                                    <input className="newItem-newTextComms" type="text"></input>
                                </div>
                            </div>
                            <div className="newItem-newCommsOptionContainer">
                                <div className="newItem-newTitleContainer">
                                    <label htmlFor="newItem-newEmailComms">email</label>
                                    <input className="newItem-newEmailComms" type="text"></input>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}