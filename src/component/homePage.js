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

                <div className="homePageContainer">
                    <div className="accountInfo">
                        <div className="accountInfoTitle">
                            <p>account information</p>
                            <button>edit user</button>
                        </div>
                        {/* <div className="userInfo">
                            <div className="nameInfo">
                                <label htmlFor="name">name</label>
                                <h5 className="name"> Joe Tustin </h5>
                            </div>
                            <div className="contact">
                                <div className="email">
                                    <label htmlFor="email">email</label>
                                    <h5 className="email">J.Tustin@gmail.com</h5>
                                </div>
                                <div className="phone">
                                    <label htmlFor="phone">phone</label>
                                    <h5 className="phone">(720) 487-3045</h5>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* <div className="trackedItems">
                        <div className="homePageTitle">
                            <p>tracked items</p>
                            <button>add new item</button>
                        </div>
                        <div className="trackedItem">
                            <div className="itemNameContainer">
                                <label htmlFor="itemName">item name</label>
                                <h5 className="itemName">Water Bottle</h5>
                            </div>
                            <div className="commPrefContainer">
                                <div className="phoneCheckBox">
                                    <label htmlFor="phoneCheck">phone</label>
                                    <input className="phoneCheck" type="checkbox"></input>
                                </div>
                                <div className="textCheckBox">
                                    <label htmlFor="textCheck">text</label>
                                    <input className="textCheck" type="checkbox"></input>
                                </div>
                                <div className="emailCheckBox">
                                    <label htmlFor="emailCheck">email</label>
                                    <input className="emailCheck" type="checkbox"></input>
                                </div>
                            </div>
                            <div className="editItemButtonContainer">
                                <button className="editItemButton">edit</button>
                            </div>
                        </div>

                        <div className="trackedItem">
                            <div className="itemNameContainer">
                                <label htmlFor="itemName">item name</label>
                                <h5 className="itemName">Drivers License</h5>
                            </div>
                            <div className="commPrefContainer">
                                <div className="phoneCheckBox">
                                    <label htmlFor="phoneCheck">phone</label>
                                    <input className="phoneCheck" type="checkbox"></input>
                                </div>
                                <div className="textCheckBox">
                                    <label htmlFor="textCheck">text</label>
                                    <input className="textCheck" type="checkbox"></input>
                                </div>
                                <div className="emailCheckBox">
                                    <label htmlFor="emailCheck">email</label>
                                    <input className="emailCheck" type="checkbox"></input>
                                </div>
                            </div>
                            <div className="editItemButtonContainer">
                                <button className="editItemButton">edit</button>
                            </div>
                        </div>

                        <div className="trackedItem">
                            <div className="itemNameContainer">
                                <label htmlFor="itemName">item name</label>
                                <h5 className="itemName">Cell Phone</h5>
                            </div>
                            <div className="commPrefContainer">
                                <div className="phoneCheckBox">
                                    <label htmlFor="phoneCheck">phone</label>
                                    <input className="phoneCheck" type="checkbox"></input>
                                </div>
                                <div className="textCheckBox">
                                    <label htmlFor="textCheck">text</label>
                                    <input className="textCheck" type="checkbox"></input>
                                </div>
                                <div className="emailCheckBox">
                                    <label htmlFor="emailCheck">email</label>
                                    <input className="emailCheck" type="checkbox"></input>
                                </div>
                            </div>
                            <div className="editItemButtonContainer">
                                <button className="editItemButton">edit</button>
                            </div>
                        </div>

                        <div className="trackedItem">
                            <div className="itemNameContainer">
                                <label htmlFor="itemName">item name</label>
                                <h5 className="itemName">Cat</h5>
                            </div>
                            <div className="commPrefContainer">
                                <div className="phoneCheckBox">
                                    <label htmlFor="phoneCheck">phone</label>
                                    <input className="phoneCheck" type="checkbox"></input>
                                </div>
                                <div className="textCheckBox">
                                    <label htmlFor="textCheck">text</label>
                                    <input className="textCheck" type="checkbox"></input>
                                </div>
                                <div className="emailCheckBox">
                                    <label htmlFor="emailCheck">email</label>
                                    <input className="emailCheck" type="checkbox"></input>
                                </div>
                            </div>
                            <div className="editItemButtonContainer">
                                <button className="editItemButton">edit</button>
                            </div>
                        </div>
                    </div> */}


                </div>
            </React.Fragment>
            
        )
    }
}