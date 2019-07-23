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

            {/* <header>
                <img className="logo" src="https://i.imgur.com/i6sybqa.png"></img>
            </header> */}
            

                <div className="app">
                    <div className="newUserForm ">
                        <form action="" method="post">

                            <div className="name">
                                <div className="firstName">
                                    <label htmlFor="firstName">first name</label>
                                    <input type="text" id="firstName" name="firstName"/>
                                </div>
                                <div className="lastName">
                                    <label htmlFor="lastName">last name</label>
                                    <input type="text" id="lastName" name="lastName"/>
                                </div>
                            </div>

                            <div className="phone">
                                <label htmlFor="phone">phone number</label>
                                <input type="text" id="phone" name="phone"/>
                            </div>

                            <div className="email">
                                <label htmlFor="email">email</label>
                                <input type="text" id="email" name="userEmail"/>
                            </div>
                            <div>
                                <label htmlFor="password">password</label>
                                <input type="password" id="pass" name="password" minLength="8" required/>
                            </div>
                            <button type="login">create new user</button>
                        </form>
                    </div>
                </div>

            </React.Fragment>
            
        )
    }
}