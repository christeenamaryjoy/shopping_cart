import React from "react";
import './ListItem.css'

import Button from '../Button/Button.js'
import QuantChangeButton from '../Button/QuantChangeButton.js'
class Item extends React.Component {

    render() {

        const { data, index, addtoCart, decrement } = this.props;
        return (
            <div className='sub_container'>
                <div className='left_coloumn'>
                    <img className="item_logo" src={data.image_url} alt="item_logo" />
                    <div className='offer_price'>{data.offer_text} OFF</div>
                </div>
                <div className='right_coloumn'>
                    <p className='brand_name'>{data.brand_name}</p>
                    <p className='offer_price'>{data.product_name}</p>
                    <p className='offer_price'>{data.quantity}</p>
                    <p className='offer_price'>MRP {data.mrp}</p>
                    <p className='price'>Rs {data.price}</p>
                    <div className='button_container'>
                        <Button text="ADD TO CART" onClick={() => addtoCart(index)} />
                        <div className='qty_inc_container'>
                            <QuantChangeButton text="+" onClick={() => addtoCart(index)} />
                            <p className='count'>{data.number ? data.number : 0}</p>
                            <QuantChangeButton text="-" onClick={() => decrement(index)} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default Item;