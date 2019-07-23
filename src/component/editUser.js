import React, { Component} from 'react'
import '../css/editUser.css'


export default class EditUser extends Component {
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
                    <div className="editUser">
                        <div className="editUserTitleContainer">
                            <p>edit account information</p>
                            <div className="buttonsContainer">
                                <button>save account changes</button>
                                <button>delete user</button>
                            </div>

                        </div>
                        <form className="editUserInfoContainer" action="" method="post">
                            <div className="editUserContainerRowOne">
                                <div className="editNameContainer">
                                    <label htmlFor="editName">name</label>
                                    <input className="editName" type="text"></input>
                                </div>
                            </div>
                            <div className="editUserContainerRowTwo">
                                <div className="editUserCommOptionContainer">
                                    <div className="editTitleContainer">
                                        <label htmlFor="editUserPhone">phone</label>
                                    </div>
                                    <input className="editUserPhone" type="text"></input>
                                </div>
                                <div className="editUserCommOptionContainer">
                                    <div className="editTitleContainer">
                                        <label htmlFor="editUserEmail">email</label>
                                    </div>
                                    <input className="editUserEmail" type="text"></input>
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