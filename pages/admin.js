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
import { Layout, Menu, Breadcrumb, message } from 'antd';
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined, PicRightOutlined, HomeOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

// context
import ContextApp from '../util/ContextApp';

// component
import CategoryContainer from '../components/Admin/Category/CategoryContainer';

// const
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Admin(props) {
    // context
    const { user } = React.useContext(ContextApp);

    // state
    const [collapsed, setCollapsed] = React.useState(false);
    // const router = useRouter();

    React.useEffect(() => {
        if (user && typeof user === 'object') {
            message.success(`Xin chào: ${user.email}`);
        }
    }, []);

    const onCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className='logo' style={{ background: 'url(http://localhost:2020/api/file/logo-unica.svg) no-repeat' }} />
                <Menu theme='dark' defaultSelectedKeys={['CATEGORY']} mode='inline'>
                    <Menu.Item key='CATEGORY' icon={<PicRightOutlined />}>
                        Quản lý danh mục
                    </Menu.Item>
                    {/*<Menu.Item key='2' icon={<DesktopOutlined />}>*/}
                    {/*    Option 2*/}
                    {/*</Menu.Item>*/}
                    {/*<SubMenu key='sub1' icon={<UserOutlined />} title='User'>*/}
                    {/*    <Menu.Item key='3'>Tom</Menu.Item>*/}
                    {/*    <Menu.Item key='4'>Bill</Menu.Item>*/}
                    {/*    <Menu.Item key='5'>Alex</Menu.Item>*/}
                    {/*</SubMenu>*/}
                    {/*<SubMenu key='sub2' icon={<TeamOutlined />} title='Team'>*/}
                    {/*    <Menu.Item key='6'>Team 1</Menu.Item>*/}
                    {/*    <Menu.Item key='8'>Team 2</Menu.Item>*/}
                    {/*</SubMenu>*/}
                    {/*<Menu.Item key='9' icon={<FileOutlined />}>*/}
                    {/*    Files*/}
                    {/*</Menu.Item>*/}
                </Menu>
            </Sider>
            <Layout className='site-layout'>
                <Header className='site-layout-background-header' style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>
                            <HomeOutlined />
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className='site-layout-background' style={{ padding: 24, minHeight: 360 }}>
                        <CategoryContainer />
                    </div>
                </Content>
                {/*<Footer style={{ textAlign: 'center' }}>Quản trị hệ thống của</Footer>*/}
            </Layout>
        </Layout>
    );
}

Admin.propTypes = {};

Admin.defaultProps = {};

export default Admin;
