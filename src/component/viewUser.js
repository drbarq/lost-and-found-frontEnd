import React, { Component} from 'react'
import { Redirect } from 'react-router-dom'
import '../css/viewUser.css'

export default class ViewUser extends Component {
    constructor() {
        super()
        this.state = {
            inEditUser: false
        }
    }

    handleEditUserClick = () => {
        this.setState({inEditUser: true})
    }

    render(props) {
        if (this.state.inEditUser === true) {
            return <Redirect to='/editUser/' />
        }
        return(
            <React.Fragment>
                <div className="viewUser-viewUserContainer">
                    <div className="viewUser-viewUserTitleContainer">
                        <p>view account information</p>
                    </div>
                    <form className="viewUser-viewUserInfoContainer" action="" method="post">
                        <div className="viewUser-viewUserContainerRowOne">
                            <div className="viewUser-viewNameContainer">
                                <div className="viewUser-firstName">
                                    <label htmlFor="viewUser-viewFirstName">first name</label>
                                    <input className="iewUser-viewFirstName" type="text" defaultValue={this.props.userInfo.firstName} onClick={this.handleEditUserClick}></input>
                                </div>
                                <div className="viewUser-lastName">
                                    <label htmlFor="viewUser-viewLastName">last name</label>
                                    <input className="viewUser-viewLastName" type="text" defaultValue={this.props.userInfo.lastName} onClick={this.handleEditUserClick}></input>
                                </div>
                            </div>
                        </div>
                        <div className="viewUser-viewUserContainerRowTwo">
                            <div className="viewUser-viewUserCommOptionContainer">
                                <div className="viewUser-viewTitleContainer">
                                    <label htmlFor="viewUser-viewUserPhone">phone</label>
                                    <input className="viewUser-viewUserPhone" type="text" defaultValue={this.props.userInfo.contactNumber} onClick={this.handleEditUserClick}></input>
                                </div>
                                <div className="viewUser-viewTitleContainer">
                                    <label htmlFor="viewUser-viewUserEmail">email</label>
                                    <input className="viewUser-viewUserEmail" type="text" defaultValue={this.props.userInfo.emailAddress} onClick={this.handleEditUserClick}></input>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}