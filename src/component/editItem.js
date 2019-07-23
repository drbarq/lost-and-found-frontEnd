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

            <header>
                <img className="logo" src="https://i.imgur.com/i6sybqa.png"></img>
            </header>
            
            <body>
                <div className="app">
                    <div className="editItem">
                        <div className="editItemTitleContainer">
                            <p>edit item</p>
                            <div className="buttonsContainer">
                                <button>save changes</button>
                                <button>delete item</button>
                            </div>

                        </div>
                        <form className="editItemInfoContainer" action="" method="post">
                            <div className="editItemContainerRowOne">
                                <div className="editItemNameContainer">
                                    <label htmlFor="editItemName">name</label>
                                    <input className="editItemName" type="text"></input>
                                </div>
                                <div className="qrCodeContainer">
                                    <img className="qrcode" src="https://lh3.googleusercontent.com/JhlUkFmf_qYUMEV_H-WPvG_TMB7oiSY8jqqRIkzJ_cZRe0eWYIx_x59NPMX-gMpUSRZN=s128"/>
                                </div>

                            </div>
                            <div className="editCommsContainer">
                                <div className="editCommsOptionContainer">
                                    <div className="editTitleContainer">
                                        <label htmlFor="editPhoneComms">phone</label>
                                        <input className="editPhoneCheck" type="checkbox"></input>
                                    </div>
                                    <input className="editPhoneComms" type="text"></input>
                                </div>
                                <div className="editCommsOptionContainer">
                                    <div className="editTitleContainer">
                                        <label htmlFor="editTextComms">text</label>
                                        <input className="editTextCheck" type="checkbox"></input>
                                    </div>
                                    <input className="editTextComms" type="text"></input>
                                </div>
                                <div className="editCommsOptionContainer">
                                    <div className="editTitleContainer">
                                        <label htmlFor="editEmailComms">email</label>
                                        <input className="editTextCheck" type="checkbox"></input>
                                    </div>
                                    <input className="editEmailComms" type="text"></input>
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