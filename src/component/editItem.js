import React, { Component} from 'react'
import '../css/editItem.css'


export default class EditItem extends Component {
    constructor() {
        super()
        this.state = {
            itemNumber: '',
        }
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        // debugger
        // if (prevState.itemNumber !== nextProps.value) {
        //     return (
        //     nextProps.itemInfo.find(item => {
        //         if (item.id == nextProps.value) {
        //             return {
        //                     itemNumber: nextProps.value,
        //                     id: item.id,
        //                     name: item.name,
        //                     message: item.message,
        //                     qrCode: item.qrCode,
        //                     contact_forms: item.contact_forms,
        //                     contact_methods: item.contact_methods
        //             }
        //         }
        //     })
        // )}
        return null;
    }

    render() {
        return(
            <React.Fragment>
                <div className="editItem-editItemContainer">
                    <div className="editItem-editItemTitleContainer">
                        <p>edit item</p>
                        <div className="editItem-buttonsContainer">
                            <button>save changes</button>
                            <button>delete item</button>
                        </div>
                    </div>

                    <form className="editItem-editItemInfoContainer" action="" method="post">
                        <div className="editItem-editItemContainerRowOne">
                            <div className="editItem-editItemNameContainer">
                                <label htmlFor="editItem-editItemName">name</label>
                                <input className="editItem-editItemName" type="text"></input>
                            </div>
                            <div className="editItem-qrCodeContainer">
                                <img className="editItem-qrcode" src="https://i.imgur.com/SGcW4yf.png"/>
                            </div>
                        </div>
                        <div className="editItem-editCommsContainer">
                            <div className="editItem-editCommsOptionContainer">
                                <div className="editItem-editTitleContainer">
                                    <label htmlFor="editItem-editPhoneComms">phone</label>
                                    <input className="editItem-editPhoneComms" type="text"></input>
                                </div>
                            </div>
                            <div className="editItem-editCommsOptionContainer">
                                <div className="editItem-editTitleContainer">
                                    <label htmlFor="editItem-editTextComms">text</label>
                                    <input className="editItem-editTextComms" type="text"></input>
                                </div>
                            </div>
                            <div className="editItem-editCommsOptionContainer">
                                <div className="editItem-editTitleContainer">
                                    <label htmlFor="editItem-editEmailComms">email</label>
                                    <input className="editItem-editEmailComms" type="text"></input>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>   
        )
    }
}