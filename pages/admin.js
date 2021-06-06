/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 22/04/2021
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Layout, Menu, message, notification, Spin } from 'antd';
import dynamic from 'next/dynamic';
// context
import ContextApp from '../util/ContextApp';

// component
import MetaView from '../components/MetaView';

// style
import styles from '../components/Admin/styles/index.module.scss';
import MenuView from '../components/Admin/Menu/MenuView';

// util
import { TYPE_MENU } from 'util/TypeMenu';
import { url_base_img } from '../util/TypeUI';
import { getList } from 'redux/actions/userAction';
import { useDispatch } from 'react-redux';
import ModalProductView from '../components/Admin/Product/Modal/ModalProductView';

// const
const { Header, Content, Sider } = Layout;
const ContentView = dynamic(import('../components/Admin/Content/ContentView'), { ssr: false });
const HeaderView = dynamic(import('../components/Admin/Header/HeaderView'), { ssr: false });

notification.config({
    duration: 2,
});

function Admin(props) {
    // context
    const { user, keyTreeActive, setKeyTreeActive } = React.useContext(ContextApp);
    const dispatch = useDispatch();
    const router = useRouter();

    // state
    const [isLoading, setIsLoading] = React.useState(true);
    const [activeMenu, setActiveMenu] = React.useState('');
    const [collapsed, setCollapsed] = React.useState(false);

    // ref
    const numberRender = React.useRef(0);
    const refModalProduct = React.useRef(null);

    // handle func
    const onCollapse = () => {
        setCollapsed(!collapsed);
    };
    const handleSetActiveMenu = (value) => {
        localStorage.setItem('activeMenuAdmin', value);
        setActiveMenu(value);
    };

    // Vòng đời
    React.useEffect(() => {
        if (user && typeof user === 'object') {
            notification.open({
                message: `Xin chào: ${user.email} !`,
                description: 'Chúc bạn một phiên làm việc hiệu quả',
            });
        } else if ((user && numberRender.current > 0) || !localStorage.getItem('role')) router.push('/login');
        numberRender.current = numberRender.current + 1;
        // Note 4: nếu không có quyền admin / teacher thì không thể vào đây
    }, [user]);

    React.useEffect(() => {
        const handleLoading = setTimeout(() => setIsLoading(false), 1000);
        const defaultActiveMenu = localStorage.getItem('activeMenuAdmin')
            ? localStorage.getItem('activeMenuAdmin')
            : TYPE_MENU.CATEGORY;
        handleSetActiveMenu(defaultActiveMenu);
        dispatch(getList());
        return () => clearTimeout(handleLoading);
    }, []);
    // JSX
    const ComponentContent = (
        <Layout style={{ minHeight: '100vh' }}>
            <MetaView title={'Quản trị  UTT Learning'} />
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                {!collapsed && (
                    <div
                        className='logo'
                        onClick={() => router.push('/')}
                        // style={{ background: `url(${url_base_img}utt-big.png) no-repeat` }}
                    >
                        <img
                            src={`${url_base_img}utt-big.png`}
                            style={{
                                width: 150,
                                height: 50,
                            }}
                        />
                    </div>
                )}
                <MenuView setActiveMenu={handleSetActiveMenu} activeMenu={activeMenu} TYPE_MENU={TYPE_MENU} />
            </Sider>
            <Layout className='site-layout'>
                <Header className='site-layout-background-header' style={{ padding: 0 }}>
                    <HeaderView activeMenu={activeMenu} />
                </Header>
                <Content style={{ margin: '0 10px' }}>
                    <ContentView activeMenu={activeMenu} refModalProduct={refModalProduct} />
                </Content>
                {/*<Footer style={{ textAlign: 'center' }}>Quản trị hệ thống của</Footer>*/}
            </Layout>
            <ModalProductView refFunc={refModalProduct} idCategory={keyTreeActive} />
        </Layout>
    );
    return (
        <React.Fragment>
            {isLoading ? (
                <div className={styles.spin_loading}>
                    <Spin size='large' />
                </div>
            ) : (
                ComponentContent
            )}
        </React.Fragment>
    );
}

Admin.propTypes = {};

Admin.defaultProps = {};

export default React.memo(Admin);
