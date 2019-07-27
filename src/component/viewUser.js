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
                            <button>save account changes</button>
                            <button>delete user</button>
                        </div>

                    </div>
                    <form className="viewUser-viewUserInfoContainer" action="" method="post">
                        <div className="viewUser-viewUserContainerRowOne">
                            <div className="viewUser-viewNameContainer">
                                <label htmlFor="viewUser-viewName">name</label>
                                <input className="viewUser-viewName" type="text"></input>
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