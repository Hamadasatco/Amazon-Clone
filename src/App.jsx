import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Checkout from './Checkout';
import { auth } from './firebase';
import Home from './Home';
import Register from  "./Register";
import Login from './Login';
import { useStateValue } from './StateProvider';
import ProductDetails from './ProductDetails';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from "./Orders";

const promise = loadStripe(`pk_test_51M44JjFi5uQhTMozyD3kiwxwyKWr3W1zioGnGjCAyiO9wsL
fpe2QgKAAx4i6440iP3dc5hmVrDVRn4kgReLhr9AO00jKRZxxLX`);

function App() {
  // eslint-disable-next-line
  const [{},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // console.log("THE USER IS >>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    // eslint-disable-next-line
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path="/product" element={ <ProductDetails /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path='/checkout' element={ <Checkout /> } />
        <Route path='/payment' element={ <Elements stripe={promise}><Payment /></Elements> } />
        <Route path="/orders" element={ <Orders/> } />
      </Routes>
    </div>
  );
}
export default App;