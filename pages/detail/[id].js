import React from 'react';
import dynamic from 'next/dynamic';
import HeaderUNICAView from '../../components/Header/UNICA/HeaderUNICAView';
import Footer from '../../components/Footer/Footer';
import MetaView from '../../components/MetaView';
import baseAPI from 'redux/api/baseAPI';
import { url_api } from '../../util/TypeUI';
import useUserBase from '../../components/hooks/LogicData/useUserBase';

// const component
const ContentDetail = dynamic(() => import('../../components/Content/DetailProduct/ContentDetailProduct'));

// import PropTypes from 'prop-types';

/* Note bye MongLV: static  */
export async function getStaticPaths() {
    return { paths: [], fallback: true };
}

export async function getStaticProps(params) {
    const { data } = await baseAPI.getAll(url_api.PRODUCT, {
        id: params['params'].id,
    });
    return {
        props: { ...data[0] },
        revalidate: 10,
    };
}

/* Note by MongLV: Server side render */
// export async function getServerSideProps(context) {
//     const { params } = context;
//     const { data } = await baseAPI.getAll(url_api.PRODUCT, {
//         id: params.id,
//     });
//     return { props: { ...data[0] } };
// }

function DetailProduct(props) {
    const { name, author_id } = props;
    const { getListUser } = useUserBase();
    React.useEffect(() => {
        getListUser({ id: author_id });
    }, []);
    console.log('props', props); // MongLV log fix bug
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <MetaView title={`${name} - UTT Learning`} />
            <HeaderUNICAView />
            <ContentDetail {...props} />
            <Footer />
        </div>
    );
}

DetailProduct.propTypes = {};

DetailProduct.defaultProps = {};

export default DetailProduct;
