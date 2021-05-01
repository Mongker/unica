/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 22/04/2021
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Layout, Menu, message, notification, Spin } from 'antd';

// context
import ContextApp from '../util/ContextApp';

// component
import MetaView from '../components/MetaView';

// style
import styles from '../components/Admin/styles/index.module.scss';
import MenuView from '../components/Admin/Menu/MenuView';
import ContentView from '../components/Admin/Content/ContentView';

// util
import { TYPE_MENU } from 'util/TypeMenu';
import HeaderView from '../components/Admin/Header/HeaderView';

// const
const { Header, Content, Sider } = Layout;
notification.config({
    duration: 2,
});
function Admin(props) {
    // context
    const { user } = React.useContext(ContextApp);

    // state
    const [isLoading, setIsLoading] = React.useState(true);
    const [activeMenu, setActiveMenu] = React.useState(TYPE_MENU.CATEGORY);

    // ref
    const numberRender = React.useRef(0);

    // state
    const [collapsed, setCollapsed] = React.useState(false);
    const router = useRouter();

    // handle func
    const onCollapse = () => {
        setCollapsed(!collapsed);
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
        return () => clearTimeout(handleLoading);
    }, []);
    // JSX
    const ComponentContent = (
        <Layout style={{ minHeight: '100vh' }}>
            <MetaView title={'Quản trị - Unica'} />
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className='logo' onClick={() => router.push('/')} style={{ background: 'url(http://localhost:2020/api/file/logo-unica.svg) no-repeat' }} />
                <MenuView setActiveMenu={setActiveMenu} TYPE_MENU={TYPE_MENU} />
            </Sider>
            <Layout className='site-layout'>
                <Header className='site-layout-background-header' style={{ padding: 0 }}>
                    <HeaderView activeMenu={activeMenu} />
                </Header>
                <Content style={{ margin: '0 10px' }}>
                    <ContentView activeMenu={activeMenu} />
                </Content>
                {/*<Footer style={{ textAlign: 'center' }}>Quản trị hệ thống của</Footer>*/}
            </Layout>
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
