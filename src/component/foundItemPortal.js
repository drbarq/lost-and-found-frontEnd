import React, { Component } from 'react'
import '../css/foundItem.css'


export default class FoundItemPortal extends Component {

    constructor () {
        super()
        this.state = {
            foundItemNum: ''
        }
    }

    componentDidMount = () => {
        const urlItem = `https://stark-plateau-81274.herokuapp.com/items/${this.props.foundItemNum}`
        fetch(urlItem)
            .then(response => response.json())
            .then(result => this.setState({
                id: result.id,
                item_name: result.item_name,
                message: result.message,
                qr_code: result.qr_code,
                user_id: result.user_id
                })
            )
            .catch(error => console.error(error))
    }

    handleSubmit = () => {

    }

    render() {
        return (
            <div className="foundItem-foundItemInfoContainer">
                <div className="foundItem-thanksContainer">
                    <h3>I found an Item Portal</h3>
                </div>
                <div className="foundItem-foundItemContainerRowOne">
                    <div className="foundItem-viewNameandMessage">
                        <div className="foundItem-itemName">
                            <label htmlFor="foundItem-itemNameState">item name</label>
                            <h3 className="foundItem-itemNameState">{this.state.item_name}</h3>
                        </div>
                        <div className="foundItem-itemMessage">
                            <label htmlFor="foundItem-itemMessageState">message from owner</label>
                            <h3 className="foundItem-itemMessageState">{this.state.message}</h3>
                        </div>
                    </div>
                </div>
                <div className="foundItem-foundItemContainerRowTwo">
                    <div className="foundItem-foundItemFindeeMessageContainer">
                        <form clasName="foundItemFindeeMessage" onSubmit={this.handleSubmit}>
                            <label htmlFor="findeeMessageBox">enter message to owner here</label>
                            <textarea className="findeeMessageBox"
                                        autofocus = "true"
                                        rows = "3"
                                        maxlength = "160"
                                        cols = "35">Your text here
                            </textarea>
                        </form>
                    </div>
                </div>
            </div>
     
        )
    }
}


{/* <div className="foundItem-viewFindeeMessage"> */}
{/* <label htmlFor="foundItem-foundItemPhone">phone</label> */}
{/* <input className="foundItem-foundItemPhone" type="text" defaultValue={this.props.userInfo.contactNumber} onClick={this.handleEditUserClick}></input>  */}
// </div>
{/* <div className="foundItem-viewTitleContainer"> */}
{/* <label htmlFor="foundItem-foundItemEmail">email</label> */}
{/* <input className="foundItem-foundItemEmail" type="text" defaultValue={this.props.userInfo.emailAddress} onClick={this.handleEditUserClick}></input> */}
// </div> 
