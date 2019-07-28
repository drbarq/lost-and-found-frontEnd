import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css'
import '../css/homePage.css'
import { Redirect } from 'react-router-dom'

export default class HeaderLogo extends Component {

    constructor() {
        super()
        this.state = {
            inUserInfo: false,
        }
    }

    handleClickUserInfo = () => {
        this.setState({inUserInfo: true})
    }


    render() {
        if (this.state.inUserInfo === true) {
            return <Redirect to='/accountInformation' />
        }


        return(
            <div className="navBarContainer">
                <div className="logoOne">
                    <img src="https://i.imgur.com/yU93abh.png"></img>
                </div>
                <div className="navBar">
                    <div className="navBarButtons">
                        <button className="navBar-home-button"><i className="fa fa-home fa-2x"></i></button>
                        <button className="navbar-user-button" onClick={this.handleClickUserInfo}><i className="fa fa-user fa-2x"></i></button>
                        <button className="navBar-newItem-button"><i className="fa fa-plus-square  fa-2x"></i></button>
                    </div>
                </div>
            </div>
        )
    }



}