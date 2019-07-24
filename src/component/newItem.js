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
                        <button>create new item</button>
                    </div>
                    <form className="newItem-newItemInfoContainer" action="" method="post">
                        <div className="newItem-newItemContainerRowOne">
                            <div className="newItem-newItemNameContainer">
                                <label htmlFor="newItem-newItemName">name</label>
                                <input className="newItem-newItemName" type="text"></input>
                            </div>
                            <div className="newItem-qrCodeContainer">
                                <img className="newItem-qrcode" src="https://lh3.googleusercontent.com/JhlUkFmf_qYUMEV_H-WPvG_TMB7oiSY8jqqRIkzJ_cZRe0eWYIx_x59NPMX-gMpUSRZN=s128"/>
                            </div>

                        </div>
                        <div className="newItem-newCommsContainer">
                            <div className="newItem-newCommsOptionContainer">
                                <div className="newItem-newTitleContainer">
                                    <label htmlFor="newItem-newPhoneComms">phone</label>
                                    <input className="newItem-newPhoneCheck" type="checkbox"></input>
                                </div>
                                <input className="newItem-newPhoneComms" type="text"></input>
                            </div>
                            <div className="newItem-newCommsOptionContainer">
                                <div className="newItem-newTitleContainer">
                                    <label htmlFor="newItem-newTextComms">text</label>
                                    <input className="newItem-newTextCheck" type="checkbox"></input>
                                </div>
                                <input className="newItem-newTextComms" type="text"></input>
                            </div>
                            <div className="newItem-newCommsOptionContainer">
                                <div className="newItem-newTitleContainer">
                                    <label htmlFor="newItem-newEmailComms">email</label>
                                    <input className="newItem-newTextCheck" type="checkbox"></input>
                                </div>
                                <input className="newItem-newEmailComms" type="text"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}