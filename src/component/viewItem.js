import React, { Component} from 'react'
import { withRouter } from "react-router-dom";
import '../css/viewItem.css'

class ViewItem extends Component {
    constructor() {
        super()
        this.state = {
            itemNumber: '',
            id: '',
            name: '',
            message: '',
            qrCode: '',
            contact_forms: [],
            contact_methods: {}
        }
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        if (prevState.itemNumber !== nextProps.value) {
            return (
            nextProps.itemInfo.find(item => {
                if (item.id == nextProps.value) {
                    return {
                            itemNumber: nextProps.value,
                            id: item.id,
                            name: item.name,
                            message: item.message,
                            qrCode: item.qrCode,
                            contact_forms: item.contact_forms,
                            contact_methods: item.contact_methods
                    }
                }
            })
        )}
        return null;
    }

    handleClickEditItem = () => {
        let itemData = this.state
        this.props.history.push('/editItem/', { itemData: itemData })
    }

    render() {
        return(
            <React.Fragment>
                <div className="viewItem-viewItemContainer">
                    <div className="viewItem-viewItemTitleContainer">
                        <p>view item</p>
                    </div>
                    <form className="viewItem-viewItemInfoContainer" action="" method="post">
                        <div className="viewItem-viewItemContainerRowOne">
                            <div className="viewItem-viewItemNameContainer">
                                <label htmlFor="viewItem-viewItemName">item name</label>
                                <input className="viewItem-viewItemName" type="text" value={this.state.name} onClick={this.handleClickEditItem}></input>
                            </div>
                            <div className="viewItem-viewItemMessageContainer">
                                <label htmlFor="viewItem-viewItemMessage">findee message</label>
                                <textarea className="viewItem-viewItemMessage" rows = "3" cols = "30" value={this.state.message}></textarea>
                            </div>
                            <div className="viewItem-qrCodeContainer">
                                {/* <img className="viewItem-qrcode" src={this.state.qrCode}/> */}
                                <img className="viewItem-qrcode" src="https://i.imgur.com/XbBO7UG.png"/>
                            </div>
                        </div>
                        <div className="viewItem-viewCommsContainer">
                            <div className="viewItem-viewCommsOptionContainer">
                                <div className="viewItem-viewTitleContainer">
                                    <label htmlFor="viewItem-viewPhoneComms">phone</label>
                                    <input className="viewItem-viewPhoneComms" type="text" value="disabled" onClick={this.handleClickEditItem}></input>
                                </div>
                            </div>
                            <div className="viewItem-viewCommsOptionContainer">
                                <div className="viewItem-viewTitleContainer">
                                    <label htmlFor="viewItem-viewTextComms">text</label>
                                    <input className="viewItem-viewTextComms" type="text"value={this.state.contact_methods.text} onClick={this.handleClickEditItem}></input>
                                </div>
                            </div>
                            <div className="viewItem-viewCommsOptionContainer">
                                <div className="viewItem-viewTitleContainer">
                                    <label htmlFor="viewItem-viewEmailComms">email</label>
                                    <input className="viewItem-viewEmailComms" type="text"value="disabled" onClick={this.handleClickEditItem}></input>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
export default withRouter(ViewItem);