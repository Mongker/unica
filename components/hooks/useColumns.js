/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 02/05/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Popconfirm, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

// styles
import style from './styles/index.module.scss';
const text = 'Are you sure to delete this task?';

// import PropTypes from 'prop-types';

function useColumns(props) {
    const { nameStore, handleDidMount, columnsTable, actionDelete } = props;
    const dispatch = useDispatch();

    // state
    const [visibleEdit, setVisibleEdit] = React.useState(false);
    const [item, setItem] = React.useState(null);

    // selector
    const data = useSelector((state) => state[nameStore]);

    // handle
    const handleDelete = (id) => {
        actionDelete && actionDelete(id);
    };

    const handleEdit = (item) => {
        setVisibleEdit(!visibleEdit);
        setItem(item);
    };

    // vòng đời
    React.useEffect(() => {
        handleDidMount && handleDidMount();
    }, []);
    return {
        data,
        visibleEdit,
        setVisibleEdit,
        item,
        columns: [
            ...columnsTable,
            {
                title: 'Action',
                dataIndex: 'action',
                render: (_, record) => {
                    return (
                        <div className={style.action}>
                            <EditOutlined onClick={() => handleEdit(record)} className={style.item_action} />
                            <Popconfirm
                                placement='top'
                                title={text}
                                onConfirm={() => {
                                    handleDelete(record._id);
                                }}
                                okText='Yes'
                                cancelText='No'
                            >
                                <DeleteOutlined className={style.item_action} />
                            </Popconfirm>
                        </div>
                    );
                },
            },
        ],
    };
}

useColumns.propTypes = {};

useColumns.defaultProps = {};

export default useColumns;
