/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 01/05/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';

// hooks
import useColumns from '../../../hooks/useColumns';

const funcDefault = () => {};
function TableView({ handleDidMount, actionDelete, columnsTable, type }) {
    const { columns, data } = useColumns({
        nameStore: 'users',
        handleDidMount,
        columnsTable,
        actionDelete,
    });
    const newData = data.filter((item) => item.role === type);
    return (
        <React.Fragment>
            <Table columns={columns} dataSource={newData} />
        </React.Fragment>
    );
}

TableView.propTypes = {
    handleDidMount: PropTypes.func,
    actionDelete: PropTypes.func,
};

TableView.defaultProps = {
    handleDidMount: funcDefault,
    actionDelete: funcDefault,
};

export default TableView;
