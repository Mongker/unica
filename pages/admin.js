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
import { Layout, Menu, Breadcrumb } from 'antd';
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Admin(props) {
    const [collapsed, setCollapsed] = React.useState(false);

    const onCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className='logo' />
                <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
                    <Menu.Item key='1' icon={<PieChartOutlined />}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key='2' icon={<DesktopOutlined />}>
                        Option 2
                    </Menu.Item>
                    <SubMenu key='sub1' icon={<UserOutlined />} title='User'>
                        <Menu.Item key='3'>Tom</Menu.Item>
                        <Menu.Item key='4'>Bill</Menu.Item>
                        <Menu.Item key='5'>Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key='sub2' icon={<TeamOutlined />} title='Team'>
                        <Menu.Item key='6'>Team 1</Menu.Item>
                        <Menu.Item key='8'>Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key='9' icon={<FileOutlined />}>
                        Files
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className='site-layout'>
                <Header className='site-layout-background' style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className='site-layout-background' style={{ padding: 24, minHeight: 360 }}>
                        Bill is a cat.
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Quản trị hệ thống của</Footer>
            </Layout>
        </Layout>
    );
}

Admin.propTypes = {};

Admin.defaultProps = {};

export default Admin;
