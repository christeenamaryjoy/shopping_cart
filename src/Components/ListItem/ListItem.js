import React from "react";
import './ListItem.css'

import Button from '../Button/Button.js'

function Item(props) {

    const { data, addtoCart, decrement } = props;
    return (
        <div className='sub_container'>
            <div className='left_coloumn'>
                <img className="item_logo" src={data.image_url} alt="item_logo" />
                <p className='offer_price'>{data.offer_text} OFF</p>
            </div>
            <div className='right_coloumn'>
                <p className='brand_name'>{data.brand_name}</p>
                <p >{data.product_name}</p>
                <p >{data.quantity}</p>
                <p >MRP {data.mrp}</p>
                <p className='price'>Rs {data.price}</p>
                <div className='button_container'>
                    <Button text="ADD TO CART" onClick={() => addtoCart()} />
                    <div className='qty_inc_container'>
                        <Button text="+" type='count' onClick={() => addtoCart()} />
                        <p className='count'>{data.number ? data.number : 0}</p>
                        <Button text="-" type='count' onClick={() => decrement()} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Item;