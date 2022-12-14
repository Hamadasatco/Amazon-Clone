import React from 'react';
import "./css/Product.css";
import Rating from '@mui/material/Rating';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';
import { Button } from '@mui/material';



function Product({title, image, price, rating, id, quntity}) {
  // eslint-disable-next-line
  const [ state, dispatch ] = useStateValue();

const addToBasket = () => {
  dispatch({
    type: "ADD_TO_BASKET",
    item: {
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,
      quntity: quntity,
      total: price,
    }
  })
}

  return (
    <div className="product">
        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
              <Rating value={rating}/>
            </div>
        </div>
        <Link to="/product">
          <img className='img' src={image}
          alt="Smart Watch" />
        </Link>
        <div>
          <Button variant="outlined" startIcon={<ShoppingCartRounded />}
            className="btn" onClick={addToBasket}>
            Add to Cart
          </Button>
        </div>
    </div>
  )
}

export default Product;