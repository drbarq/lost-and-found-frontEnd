import React from 'react';
import 'font-awesome/css/font-awesome.min.css'
import './modal.css';

const modal = (props) => {
    return (
        <React.Fragment>
            <div className="modal-wrapper"
                style={{
                    // transform: props.show ? 'translateY(-80vh)' : 'translateY(50vh)',
                    transform: props.show ? 'translateY(-80vh)' : 'translateY(-20px)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h4>Message Success!</h4>
                    <div className="close-modal-btn" onClick={props.close}><i className="fa fa-window-close fa-1.5x"></i></div>
                </div>
                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}
export default modal;


