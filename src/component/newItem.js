import React, { Component} from 'react'
import '../css/newItem.css'


export default class NewItems extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return(
            <React.Fragment>

            <header>
                <img className="logo" src="https://i.imgur.com/i6sybqa.png"></img>
            </header>
            
            <body>
                <div className="app">
                    <div className="newItem">
                        <div className="newItemTitleContainer">
                            <p>new item</p>
                            <button>create new item</button>
                        </div>
                        <div className="newItemInfoContainer">
                            <div className="newItemNameContainer">
                                <label htmlFor="newItemName">name</label>
                                <input className="newItemName" type="text"></input>
                            </div>

                        </div>
                    </div>
                </div>
            </body>

            </React.Fragment>
            
        )
    }
}