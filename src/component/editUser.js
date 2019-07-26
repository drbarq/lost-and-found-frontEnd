import React, { Component} from 'react'
import '../css/editUser.css'


export default class EditUser extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render(props) {
        return(
            <React.Fragment>
                <div className="editUser-editUserContainer">
                    <div className="editUser-editUserTitleContainer">
                        <p>edit account information</p>
                        <div className="editUser-buttonsContainer">
                            <button>save account changes</button>
                            <button>delete user</button>
                        </div>

                    </div>
                    <form className="editUser-editUserInfoContainer" action="" method="post">
                        <div className="editUser-editUserContainerRowOne">
                            <div className="editUser-editNameContainer">
                                <label htmlFor="editUser-editName">name</label>
                                <input className="editUser-editName" type="text"></input>
                            </div>
                        </div>
                        <div className="editUser-editUserContainerRowTwo">
                            <div className="editUser-editUserCommOptionContainer">
                                <div className="editUser-editTitleContainer">
                                    <label htmlFor="editUser-editUserPhone">phone</label>
                                </div>
                                <input className="editUser-editUserPhone" type="text"></input>
                            </div>
                            <div className="editUser-editUserCommOptionContainer">
                                <div className="editUser-editTitleContainer">
                                    <label htmlFor="editUser-editUserEmail">email</label>
                                </div>
                                <input className="editUser-editUserEmail" type="text"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}