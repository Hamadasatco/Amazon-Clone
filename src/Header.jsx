import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";


function Header() {
    const [{basket, user}] = useStateValue();
    const handleAuthentication = () => {
        if (auth) {
            auth.signOut();
        }
    }

  return (
    <div className='header'>
        <Link to="/" className='link'>
            <img className="header_logo" src="https://i.ibb.co/HPTKS0L/amazon-logo.png" alt="amazon-logo"/>
        </Link>
        <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon" />
        </div>
        <div className="header_nav">
            <Link className='login_link' to={!user && "/Login"}>
                <div onClick={handleAuthentication} className="header_option">
                    <span className="header_optionLineOne">
                        { !user? "Hello, Sign in": `Hello ${user.email}`}
                    </span>
                    <span className="header_optionLineTwo">
                        { user?"Sign Out": "Sign In" }
                    </span>
                </div>
            </Link>
            <Link to="/orders">
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Returns
                    </span>
                    <span className="header_optionLineTwo">
                        & Orders
                    </span>
                </div>
            </Link>
            <div className="header_option">
                <span className="header_optionLineOne">
                    Your
                </span>
                <span className="header_optionLineTwo">
                    Prime
                </span>
            </div>
            <div className="header_optionBasket">
                <Link to="/checkout" className='link_cart'>
                    <ShoppingCartIcon className="basket_icon" />
                    <span className="header_optionLineOne header_basketCount">
                        {basket?.length}
                    </span>
                </Link>
            </div>
        </div>
    </div>
  );
}
export default Header;

