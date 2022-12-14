import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import axios from './axios';
import { db } from "./firebase";
import "./css/Payment.css";

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
                Origin: "http://localhost:3000",
                // "Access-Control-Allow-Origin": "*"
                // Access-Control-Allow-Origin: "*",
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
        // navigate("/orders", { replace: true });
    }, [basket]);
    // console.log("the secretis >>> ", clientSecret);


const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    // eslint-disable-next-line
    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method:{
            card: elements.getElement(CardElement)
        }
    }).then(({ paymentIntent }) => {
        db
        .collection("users")
        .doc(user?.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created
        })

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({ type: "EMPTY_BASKET" });
        navigate("/orders", { replace: true });
    })
}

const handleChange = event => {
    setDisabled(event.empty);
    setError(event.error? event.error.message: "");
}

  return (
    <div className="payment">
        <div className="payment-container">
            <h1>Checkout <Link to="/checkout">({basket?.length} items)</Link></h1>
            <div className="payment-section">
                <div className="payment-title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment-address">
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Khartoum, Sudan</p>
                </div>
            </div>
            <div className="payment-section">
                <div className="payment-title">
                    <h3>Review Items & Delivery</h3>
                </div>
                <div className="payment-items">
                    {basket.map(item=> 
                        <CheckoutProduct
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        quntity={item.quntity} />)}
                </div>
            </div>
            <div className="payment-section">
                <div className="payment-title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment-details">
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className="payment-priceContainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                        <h3>Order Total {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>
                                    {processing? <p>Processing</p>: "Buy Now"}
                                </span>
                            </button>
                        </div>
                        { error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Payment;