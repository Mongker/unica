/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 01/05/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Avatar, Tabs } from 'antd';
import { useDispatch } from 'react-redux';

// action
import { getList } from 'redux/actions/userAction';

// component
import TableView from './Table/TableView';
import { UserOutlined } from '@ant-design/icons';

// util
import ContextApp from 'util/ContextApp';

// const
const { TabPane } = Tabs;
const TypeTabs = {
    USER: 'user',
    TEACHER: 'teacher',
    ADMIN: 'admin',
    ALL: 'ALL',
};

function ManagementUserView() {
    // hooks
    const { user } = React.useContext(ContextApp);

    // state
    const [keyActive, setKeyActive] = React.useState(null);

    // ref
    // const typeRef = React.useRef('user');

    // handle func
    const callback = (key) => {
        localStorage.setItem('ManagementUserView', key);
        setKeyActive(key);
    };

    React.useEffect(() => {
        setKeyActive(localStorage.getItem('ManagementUserView') ? localStorage.getItem('ManagementUserView') : TypeTabs.ALL);
    }, []);

    // JSX
    const columnsTableUser = [
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avatar',
            width: 50,
            render: (text) => <Avatar icon={<UserOutlined />} src={text} />,
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
            width: 200,
            render: (text) => (
                <a>
                    {text} {user.name === text ? '(Chính bạn)' : ''}
                </a>
            ),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: 200,
        },
        {
            title: 'Cấp bậc',
            dataIndex: 'rank',
            key: 'rank',
            width: 150,
        },
        {
            title: 'Quyền hạn',
            dataIndex: 'role',
            key: 'role',
            width: 150,
        },
        {
            title: 'Giảng viên môn',
            dataIndex: 'teacher_category',
            key: 'teacher_category',
            width: 200,
        },
    ];
    return (
        <Tabs onChange={callback} type='card' activeKey={keyActive}>
            <TabPane tab={'Tất cả thành viên'} key={TypeTabs.ALL}>
                <TableView columnsTable={columnsTableUser} type={keyActive} />
            </TabPane>
            <TabPane tab={'Người dùng'} key={TypeTabs.USER}>
                <TableView columnsTable={columnsTableUser} type={keyActive} />
            </TabPane>
            <TabPane tab={'Giảng viên'} key={TypeTabs.TEACHER}>
                <TableView columnsTable={columnsTableUser} type={keyActive} />
            </TabPane>
            <TabPane tab={'Quản trị viên'} key={TypeTabs.ADMIN}>
                <TableView columnsTable={columnsTableUser} type={keyActive} />
            </TabPane>
        </Tabs>
    );
}

ManagementUserView.propTypes = {};

ManagementUserView.defaultProps = {};

export default ManagementUserView;
