import React from "react";
import Button from '../Button/Button.js'
import './footer.css'

function Footer(props) {
    const { quantity, total, checkOut } = props

    return (
        <div className="footer">
            <div className='footer_content'>
                <div>
                    <p>Quantity: {quantity}</p>
                    <p>Total: Rs {total}</p>
                </div>

                <Button text="CHECK OUT" onClick={checkOut} />
            </div>
        </div>
    )
}

export default Footer;