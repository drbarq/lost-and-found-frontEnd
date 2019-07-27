import React, { Component} from 'react'
import '../css/viewUser.css'


export default class ViewUser extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render(props) {
        return(
            <React.Fragment>
                <div className="viewUser-viewUserContainer">
                    <div className="viewUser-viewUserTitleContainer">
                        <p>view account information</p>
                        <div className="viewUser-buttonsContainer">
                            {/* <button>edit user</button> */}
                            {/* <button>save account changes</button> */}
                            {/* <button>delete user</button> */}
                        </div>

                    </div>
                    <form className="viewUser-viewUserInfoContainer" action="" method="post">
                        <div className="viewUser-viewUserContainerRowOne">
                            <div className="viewUser-viewNameContainer">
                                <div className="viewUser-firstName">
                                    <label htmlFor="viewUser-viewFirstName">first name</label>
                                    <input className="iewUser-viewFirstName" type="text" defaultValue={this.props.userInfo.firstName}></input>
                                </div>
                                <div className="viewUser-lastName">
                                    <label htmlFor="viewUser-viewLastName">last name</label>
                                    <input className="viewUser-viewLastName" type="text" defaultValue={this.props.userInfo.lastName}></input>
                                </div>
                            </div>
                        </div>
                        <div className="viewUser-viewUserContainerRowTwo">
                            <div className="viewUser-viewUserCommOptionContainer">
                                <div className="viewUser-viewTitleContainer">
                                    <label htmlFor="viewUser-viewUserPhone">phone</label>
                                </div>
                                <input className="viewUser-viewUserPhone" type="text"></input>
                            </div>
                            <div className="viewUser-viewUserCommOptionContainer">
                                <div className="viewUser-viewTitleContainer">
                                    <label htmlFor="viewUser-viewUserEmail">email</label>
                                </div>
                                <input className="viewUser-viewUserEmail" type="text"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}