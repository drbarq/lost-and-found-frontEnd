import React, { Component} from 'react'
import '../css/homePage.css'


export default class HomePage extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return(
            <React.Fragment>
                <div className="logoOne">
                    <img src="https://i.imgur.com/i6sybqa.png"></img>
                </div>

                <div className="home-userHomeContainer">
                    <div className="home-accountInfo">
                        <div className="home-accountTitleContainer">
                            <p>account information</p>
                            <button>edit user</button>
                        </div>
                        <div className="home-userInfo">
                            <div className="home-nameInfo">
                                <label htmlFor="name">name</label>
                                <h5 className="home-name"> Joe Tustin </h5>
                            </div>
                            <div className="home-contact">
                                <div className="home-email">
                                    <label htmlFor="email">email</label>
                                    <h5 className="home-email">J.Tustin@gmail.com</h5>
                                </div>
                                <div className="home-phone">
                                    <label htmlFor="phone">phone</label>
                                    <h5 className="home-phone">(720) 487-3045</h5>
                                </div>
                            </div>
                        </div> 

                        <div className="home-trackedItemsContainer">
                            <div className="home-trackedItemsTitleContainer">
                                <p>tracked items</p>
                                <button>add new item</button>
                            </div>

                            <div className="home-trackedItem">
                                <div className="home-itemNameContainer">
                                    <label htmlFor="home-itemName">item name</label>
                                    <h5 className="home-itemName">Water Bottle</h5>
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

                            <div className="home-trackedItem">
                                <div className="home-itemNameContainer">
                                    <label htmlFor="home-itemName">item name</label>
                                    <h5 className="home-itemName">Drivers License</h5>
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

                            <div className="home-trackedItem">
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
                            </div>

                            <div className="home-trackedItem">
                                <div className="home-itemNameContainer">
                                    <label htmlFor="home-itemName">item name</label>
                                    <h5 className="home-itemName">Cat</h5>
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
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}