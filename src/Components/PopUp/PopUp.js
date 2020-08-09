import React from "react";
import Popup from "reactjs-popup";
import './PopUp.css'
import Button from '../Button/Button'

export default (props) => (

    <Popup modal open={props.show} onClose={props.closePopUp} position="right center">
        {close => <div className='popup_container'>
            {props.total > 0 && <p>Rs {props.total}</p>}
            <p>{props.message}</p>
            <Button text="OK" onClick={close} />

        </div>}
    </Popup>
);