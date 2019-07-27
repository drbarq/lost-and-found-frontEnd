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
                                <div className="editUser-firstName">
                                    <label htmlFor="editUser-editFirstName">first name</label>
                                    <input className="iewUser-editFirstName" type="text" defaultValue={this.props.userInfo.firstName}></input>
                                </div>
                                <div className="editUser-lastName">
                                    <label htmlFor="editUser-editLastName">last name</label>
                                    <input className="editUser-editLastName" type="text" defaultValue={this.props.userInfo.lastName}></input>
                                </div>
                            </div>
                        </div>
                        <div className="editUser-editUserContainerRowTwo">
                            <div className="editUser-editUserCommOptionContainer">
                                <div className="editUser-editTitleContainer">
                                    <label htmlFor="editUser-editUserPhone">phone</label>
                                    <input className="editUser-editUserPhone" type="text" defaultValue={this.props.userInfo.contactNumber}></input>
                                </div>
                                <div className="editUser-editTitleContainer">
                                    <label htmlFor="editUser-editUserEmail">email</label>
                                    <input className="editUser-editUserEmail" type="text" defaultValue={this.props.userInfo.emailAddress}></input>
                                </div>
                                
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}