import React from "react";
import './PopUp.css'
import Button from '../Button/Button'

export default (props) => (

    <div className='popup'>
        <div className='popup_inner'>
            <div className='popup_container'>
                {props.total > 0 && <p>Rs {props.total}</p>}
                <p>{props.message}</p>
                <Button text="OK" onClick={props.closePopUp} />

            </div>
        </div>
    </div>


);