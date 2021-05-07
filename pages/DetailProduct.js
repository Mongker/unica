import React from 'react';
import HeaderUNICAView from '../components/Header/UNICA/HeaderUNICAView';
import ContentDetail from '../components/Content/DetailProduct/ContentDetailProduct';
import Footer from '../components/Footer/Footer';
// import PropTypes from 'prop-types';

function DetailProduct() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <HeaderUNICAView />
            <ContentDetail />
            <Footer />
        </div>
    );
}

DetailProduct.propTypes = {};

DetailProduct.defaultProps = {};

export default DetailProduct;
