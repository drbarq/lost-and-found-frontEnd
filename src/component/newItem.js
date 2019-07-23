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

            <header>
                <img className="logo" src="https://i.imgur.com/i6sybqa.png"></img>
            </header>
            
            <body>
                <div className="app">
                    <div className="newItem">
                        <div className="newItemTitleContainer">
                            <p>new item</p>
                            <button>create new item</button>
                        </div>
                        <form className="newItemInfoContainer" action="" method="post">
                            <div className="newItemContainerRowOne">
                                <div className="newItemNameContainer">
                                    <label htmlFor="newItemName">name</label>
                                    <input className="newItemName" type="text"></input>
                                </div>
                                <div className="qrCodeContainer">
                                    <img className="qrcode" src="https://lh3.googleusercontent.com/JhlUkFmf_qYUMEV_H-WPvG_TMB7oiSY8jqqRIkzJ_cZRe0eWYIx_x59NPMX-gMpUSRZN=s128"/>
                                </div>

                            </div>
                            <div className="newCommsContainer">
                                <div className="newCommsOptionContainer">
                                    <div className="newTitleContainer">
                                        <label htmlFor="newPhoneComms">phone</label>
                                        <input className="newPhoneCheck" type="checkbox"></input>
                                    </div>
                                    <input className="newPhoneComms" type="text"></input>
                                </div>
                                <div className="newCommsOptionContainer">
                                    <div className="newTitleContainer">
                                        <label htmlFor="newTextComms">text</label>
                                        <input className="newTextCheck" type="checkbox"></input>
                                    </div>
                                    <input className="newTextComms" type="text"></input>
                                </div>
                                <div className="newCommsOptionContainer">
                                    <div className="newTitleContainer">
                                        <label htmlFor="newEmailComms">email</label>
                                        <input className="newTextCheck" type="checkbox"></input>
                                    </div>
                                    <input className="newEmailComms" type="text"></input>
                                </div>

                            </div>

                        </form>
                    </div>
                </div>
            </body>

            </React.Fragment>
            
        )
    }
}