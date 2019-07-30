import React from 'react'
// import '../css/newItem.css'
import '../css/homePage.css'
// import 'font-awesome/css/font-awesome.min.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ItemCommRender(props) {

    return(
        <div className="home-commPrefContainer">
            <div className="home-phoneCheckBox">
                <FontAwesomeIcon color="#939393" icon={['fas', 'phone']} size="lg" />
            </div>
            <div className="home-textCheckBox">
                <FontAwesomeIcon color="#3cc53c" icon={['fas', 'sms']} size="lg" />
            </div>
            <div className="home-emailCheckBox">
                <FontAwesomeIcon color="#939393" icon={['fas', 'at']} size="lg" />
            </div>
        </div>
    )
}