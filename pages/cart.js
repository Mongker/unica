import React from 'react';
import HeaderUNICAView from '../components/Header/UNICA/HeaderUNICAView';
import Footer from '../components/Footer/Footer';
import CartProduct from '../components/Content/CartProduct';
// import PropTypes from 'prop-types';

function cart() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <HeaderUNICAView />
            <CartProduct />
            <Footer />
        </div>
    );
}

cart.propTypes = {};

cart.defaultProps = {};

export default cart;
