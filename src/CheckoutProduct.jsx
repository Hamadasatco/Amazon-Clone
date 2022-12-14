import React from 'react';
import Rating from '@mui/material/Rating';
import "./css/CheckoutProduct.css";
import { useStateValue } from './StateProvider';
import DeleteIcon from '@mui/icons-material/Delete';


function CheckoutProduct({ id, title, price, image, rating, quntity, hideButton }) {
    // eslint-disable-next-line
    const [ {products}, dispatch ] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }

    const incrementQuntity = () => {
        dispatch({
            type: "INCREMENT_QUNTITY",
            id: id,
            quntity: quntity,
        });
    }

    const decrementQuntity = () => {
        dispatch({
            type: "DECREMENT_QUNTITY",
            id: id,
            quntity: quntity,
        });
    }

  return (
    <div className= "checkoutProduct" id={ id }>
        <img className="checkoutProduct_image" src={ image } alt={ title } />
        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">{ title }</p>
            <p className="checkoutProduct_price">
                <small>$</small>
                <strong>{ price }</strong>
            </p>
            <div className="checkoutProduct_rating">
                <Rating value={ rating }/>
            </div>
            <div className="quntity">
                {!hideButton && <button onClick={()=> decrementQuntity()}>-</button>}
                {!hideButton && <p>{quntity}</p>}
                {!hideButton && <button onClick={()=> incrementQuntity()}>+</button>}
                {!hideButton && <DeleteIcon className="delete-icon" onClick={ ()=> removeFromBasket() } />}
            </div>

        </div>
    </div>
  );
}

export default CheckoutProduct;