import React from 'react';
import Header from './Header';
import Subtotal from './Subtotal';
import "./css/Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

// https://trafic.likgp-sd.com/eservices/home/license

function Checkout() {
  const [{basket, user}] = useStateValue();
  // console.log(user.email);

  return (
    <>
      <Header />
      <div className='checkout'>
        <div className='checkout_left'>
            <img src="https://i.ibb.co/3zYb0rc/banner.jpg"
                alt="banner" className="checkout_ad fixed" />
            <div>
              <h3 className="fixed">hello {user?.email}</h3>
              <h2 className="checkout_title fixed">Your Shopping Basket</h2>
              { basket?.map(item => 
                <CheckoutProduct key={item.id} title={item.title}
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  quntity={item.quntity}
                />
              )}
           </div>
        </div>
        <div className="checkout_right">
          <Subtotal />
        </div>
    </div>
    </>
  );
}

export default Checkout;