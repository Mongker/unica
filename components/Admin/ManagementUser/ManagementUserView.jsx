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
import { Tabs } from 'antd';
import { useDispatch } from 'react-redux';

// action
import { getList } from 'redux/actions/userAction';

// component
import TableView from './Table/TableView';
import { columnsTableUser } from 'util/columTableUser';

// const
const { TabPane } = Tabs;
const TypeTabs = {
    USER: 'user',
    TEACHER: 'teacher',
    ADMIN: 'admin',
};

function ManagementUserView() {
    // state
    const [keyActive, setKeyActive] = React.useState();

    // redux
    const dispatch = useDispatch();

    // ref
    const typeRef = React.useRef('user');

    // handle func
    const callback = (key) => {
        setKeyActive(key);
    };

    const handleGetList = () => {
        dispatch(getList());
    };

    const table = <TableView columnsTable={columnsTableUser} handleDidMount={handleGetList} type={keyActive} />;
    return (
        <Tabs onChange={callback} type='card'>
            <TabPane tab={'Người dùng'} key={TypeTabs.USER}>
                {table}
            </TabPane>
            <TabPane tab={'Giảng viên'} key={TypeTabs.TEACHER}>
                {table}
            </TabPane>
            <TabPane tab={'Quản trị viên'} key={TypeTabs.ADMIN}>
                {table}
            </TabPane>
        </Tabs>
    );
}

ManagementUserView.propTypes = {};

ManagementUserView.defaultProps = {};

export default ManagementUserView;
