import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import '../css/homePage.css'

export default function HeaderLogo() {
    return(
        <div className="navBarContainer">
            <div className="logoOne">
                <img src="https://i.imgur.com/yU93abh.png"></img>
            </div>
            <div className="navBar">
                <div className="navBarButtons">
                    <i class="fa fa-home fa-2x"></i>
                    <i class="fa fa-user fa-2x"></i>
                    <i class="fa fa-plus-square fa-2x"></i>
                </div>
            </div>
        </div>




    )
}