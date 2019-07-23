import React, { Component} from 'react'
import '../css/login.css'


export default class Login extends Component {
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
                    <div className="loginForm">
                        <form action="" method="post">
                            <div className="email">
                                <label htmlFor="email">email</label>
                                <input type="text" id="email" name="userEmail"/>
                            </div>
                            <div>
                                <label htmlFor="password">password</label>
                                <input type="password" id="pass" name="password" minLength="8" required/>
                            </div>
                            <button type="login">login</button>
                        </form>
                    </div>
                </div>

            </React.Fragment>
            
        )
    }
}