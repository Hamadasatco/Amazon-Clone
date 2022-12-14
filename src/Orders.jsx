import React, { useState, useEffect } from 'react';
import Header from './Header';
import { db } from "./firebase";
import { useStateValue } from './StateProvider';
import Order from "./Order";
import "./css/Orders.css";


function Orders() {
    const [{ user }] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user) {
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        } else {
            setOrders([])
        }
    
      }, [user]);

  return (
    <>
        <Header />
        <div className="orders">
            <h1> Your Orders </h1>
            <div className="orders-product">
            {orders?.map(order => (
                    <Order key={order.id} order={order} />
                ))}
            </div>
        </div>
    </>
  );
}

export default Orders;