import React from 'react';
import {useNavigate} from 'react-router-dom'; 
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import "./css/Subtotal.css";


function Subtotal() {
    const navigate = useNavigate();
    const [{basket}] = useStateValue();
  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal({basket.length} items):
                        <strong>{value}</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" className="" />
                        This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
        <button onClick={()=> navigate("/payment")} className='btn' >Proced to checkout</button>
    </div>
  );
}

export default Subtotal;