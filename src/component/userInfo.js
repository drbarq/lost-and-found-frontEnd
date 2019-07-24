import React from 'react'

export default function UserInfo(props) {

    console.log(props.userInfo)

    return(
         <div className="home-userInfo">
            <div className="home-nameInfo">
                <label htmlFor="name">name</label>
                <h5 className="home-name"> {props.userInfo.firstName + ' ' + props.userInfo.lastName}</h5>
            </div>
            <div className="home-contact">
                <div className="home-email">
                    <label htmlFor="email">email</label>
                    <h5 className="home-email">{props.userInfo.emailAddress}</h5>
                </div>
                <div className="home-phone">
                    <label htmlFor="phone">phone</label>
                    <h5 className="home-phone">{props.userInfo.contactNumber}</h5>
                </div>
            </div>
        </div> 
    )
}