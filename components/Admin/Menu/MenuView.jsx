/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 01/05/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
import React from 'react';
import { Menu } from 'antd';
import { PicRightOutlined, TeamOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

function MenuView(props) {
    const { TYPE_MENU, setActiveMenu } = props;
    function handleClick(event) {
        setActiveMenu(event.key);
    }
    return (
        <Menu theme='dark' defaultSelectedKeys={[TYPE_MENU.CATEGORY]} mode='inline' onClick={handleClick}>
            <Menu.Item key={TYPE_MENU.CATEGORY} icon={<PicRightOutlined />}>
                Quản lý danh mục
            </Menu.Item>
            <Menu.Item key={TYPE_MENU.USER} icon={<TeamOutlined />}>
                Quản lý người dùng
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
    );
}

MenuView.propTypes = {
    TYPE_MENU: PropTypes.object.isRequired,
    setActiveMenu: PropTypes.func.isRequired,
};

MenuView.defaultProps = {};

export default React.memo(MenuView);
