import React from 'react';
import { Link } from 'react-router-dom';
import "./css/ProductDetails.css";



function ProductDetails() {
  return (
      <div className="product_page_container">
          <span className='link_route'>
              <Link to="#">Home</Link> {">"} <Link to="#">Sofa</Link>
          </span>
          <section id='product_page'>
            <h1>header</h1>  
          </section>
      </div>
  );
}

export default ProductDetails;