import React from 'react';
import HeaderUNICAView from '../../components/Header/UNICA/HeaderUNICAView';
import ContentDetail from '../../components/Content/DetailProduct/ContentDetailProduct';
import Footer from '../../components/Footer/Footer';
import MetaView from '../../components/MetaView';
import baseAPI from 'redux/api/baseAPI';
import { url_api } from '../../util/TypeUI';
import useUserBase from '../../components/hooks/LogicData/useUserBase';
// import PropTypes from 'prop-types';

export async function getStaticPaths() {
    return { paths: [], fallback: true };
}

export async function getStaticProps(params) {
    const { message, data } = await baseAPI.getAll(url_api.PRODUCT, {
        id: params['params'].id,
    });
    return {
        props: { ...data[0] },
    };
}
function DetailProduct(props) {
    const { name, author_id } = props;
    const { getListUser } = useUserBase();
    React.useEffect(() => {
        getListUser({ id: author_id });
    }, []);
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <MetaView title={`${name} - Unica`} />
            <HeaderUNICAView />
            <ContentDetail {...props} />
            <Footer />
        </div>
    );
}

DetailProduct.propTypes = {};

DetailProduct.defaultProps = {};

export default DetailProduct;
