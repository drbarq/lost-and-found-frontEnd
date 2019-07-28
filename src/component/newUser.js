import React, { Component} from 'react'
import '../css/newUser.css'


export default class NewUser extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return(
            <React.Fragment>
                <form className="newUser-newUserForm" action="" method="post">
                    <div className="newUser-nameContainer">
                        <div className="newUser-firstNameContainer">
                            <label htmlFor="newUser-firstName">first name</label>
                            <input type="text" id="newUser-firstName" name="firstName"/>
                        </div>
                        <div className="newUser-lastNameContainer">
                            <label htmlFor="newUser-lastName">last name</label>
                            <input type="text" id="newUser-lastName" name="lastName"/>
                        </div>
                    </div>
                    <div className="newUser-phoneContainer">
                        <label htmlFor="newUser-hone">phone number</label>
                        <input type="text" id="newUser-phone" name="phone"/>
                    </div>
                    <div className="newUser-emailContainer">
                        <label htmlFor="newUser-email">email</label>
                        <input type="text" id="newUser-email" name="userEmail"/>
                    </div>
                    <div className="newUser-passwordContainer">
                        <label htmlFor="newUser-password">password</label>
                        <input type="password" id="newUser-password" name="password" minLength="8" required/>
                    </div>
                    <button type="login">create new user</button>
                </form>
            </React.Fragment> 
        )
    }
}