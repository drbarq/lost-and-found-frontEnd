import React, { Component} from 'react'
import '../css/viewItem.css'


export default class ViewItem extends Component {
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

    handleEditUser =() => {
        // debugger;
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
                                <input className="viewItem-viewItemName" type="text" value={this.state.name} onChange={this.handleEditUser}></input>
                            </div>
                            <div className="viewItem-qrCodeContainer">
                                <img className="viewItem-qrcode" src={this.state.qrCode}/>
                            </div>
                        </div>
                        <div className="viewItem-viewCommsContainer">
                            <div className="viewItem-viewCommsOptionContainer">
                                <div className="viewItem-viewTitleContainer">
                                    <label htmlFor="viewItem-viewPhoneComms">phone</label>
                                    <input className="viewItem-viewPhoneComms" type="text" value={this.state.contact_methods.phone} onChange={this.handleEditUser}></input>
                                </div>
                            </div>
                            <div className="viewItem-viewCommsOptionContainer">
                                <div className="viewItem-viewTitleContainer">
                                    <label htmlFor="viewItem-viewTextComms">text</label>
                                    <input className="viewItem-viewTextComms" type="text"value={this.state.contact_methods.text} onChange={this.handleEditUser}></input>
                                </div>
                            </div>
                            <div className="viewItem-viewCommsOptionContainer">
                                <div className="viewItem-viewTitleContainer">
                                    <label htmlFor="viewItem-viewEmailComms">email</label>
                                    <input className="viewItem-viewEmailComms" type="text"value={this.state.contact_methods.email} onChange={this.handleEditUser}></input>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
            
        )
    }
}