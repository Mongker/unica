import React from 'react';
import HeaderUNICAView from '../components/Header/UNICA/HeaderUNICAView';
import Footer from '../components/Footer/Footer';
import AccountHome from '../components/Content/AccountHome/AccountHome';
// import PropTypes from 'prop-types';

function Account() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <HeaderUNICAView />
            <AccountHome />
            <Footer />
        </div>
    );
}

Account.propTypes = {};

Account.defaultProps = {};

export default Account;
