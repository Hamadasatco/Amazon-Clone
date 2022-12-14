import React from 'react';
import Header from './Header';
import "./css/Home.css";
import Product from './Product';
import { useStateValue } from './StateProvider';


export default function Home() {
  const [ {products} ] = useStateValue();

  return (
    <React.Fragment>
      <Header />
      <div className='home'>
          <div className="home_container">
          <img className="home_image"
                src="https://i.ibb.co/JsrpRRv/amazon-logo-hero.jpg" alt="hero" />
                  <div className="home_row">
                    {
                      products.slice(0, 2).map(item =>
                      <Product key={item.id}
                        title={item.title}
                        id={item.id}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        quntity={item.quntity}
                      />
                      )
                    }
                  </div>
                  <div className="home_row">
                    {
                      products.slice(2, 5).map(item =>
                      <Product key={item.id}
                        title={item.title}
                        id={item.id}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        quntity={item.quntity}
                      />
                      )
                    }
                  </div>
                  <div className="home_row">
                    {
                      products.slice(5).map(item =>
                      <Product key={item.id}
                        title={item.title}
                        id={item.id}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        quntity={item.quntity}
                      />
                      )
                    }
                  </div>
          </div>
      </div>
    </React.Fragment>
  );
}
