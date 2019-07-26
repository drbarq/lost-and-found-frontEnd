import React, { Component} from 'react'
import '../css/editItem.css'


export default class EditItem extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return(
            <React.Fragment>
                <div className="editItem-editItemContainer">
                    <div className="editItem-editItemTitleContainer">
                        <p>edit item</p>
                        <div className="editItem-buttonsContainer">
                            <button>save changes</button>
                            <button>delete item</button>
                        </div>
                    </div>

                    <form className="editItem-editItemInfoContainer" action="" method="post">
                        <div className="editItem-editItemContainerRowOne">
                            <div className="editItem-editItemNameContainer">
                                <label htmlFor="editItem-editItemName">name</label>
                                <input className="editItem-editItemName" type="text"></input>
                            </div>
                            <div className="editItem-qrCodeContainer">
                                <img className="editItem-qrcode" src="https://i.imgur.com/SGcW4yf.png"/>
                            </div>

                        </div>
                        <div className="editItem-editCommsContainer">
                            <div className="editItem-editCommsOptionContainer">
                                <div className="editItem-editTitleContainer">
                                    <label htmlFor="editItem-editPhoneComms">phone</label>
                                    <input className="editItem-editPhoneCheck" type="checkbox"></input>
                                </div>
                                <input className="editItem-editPhoneComms" type="text"></input>
                            </div>
                            <div className="editItem-editCommsOptionContainer">
                                <div className="editItem-editTitleContainer">
                                    <label htmlFor="editItem-editTextComms">text</label>
                                    <input className="editItem-editTextCheck" type="checkbox"></input>
                                </div>
                                <input className="editItem-editTextComms" type="text"></input>
                            </div>
                            <div className="editItem-editCommsOptionContainer">
                                <div className="editItem-editTitleContainer">
                                    <label htmlFor="editItem-editEmailComms">email</label>
                                    <input className="editItem-editTextCheck" type="checkbox"></input>
                                </div>
                                <input className="editItem-editEmailComms" type="text"></input>
                            </div>

                        </div>

                    </form>
                </div>
            </React.Fragment>
            
        )
    }
}