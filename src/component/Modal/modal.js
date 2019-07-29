import React from 'react';

import './modal.css';

const modal = (props) => {
    return (
        <React.Fragment>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(-40vh)' : 'translateY(50vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Message Success!</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
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


