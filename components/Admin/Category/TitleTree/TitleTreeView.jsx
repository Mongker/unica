/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 01/05/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Input, Button } from 'antd';
import { EditOutlined, AppstoreAddOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

// action
import { remove } from 'redux/actions/categoryAction';

// styles
import styles from './styles/index.module.scss';

function TitleTreeView({ item, showModalAdd, showModalEdit }) {
    // redux
    const dispatch = useDispatch();

    // handle func
    const onDelete = (id) => {
        dispatch(remove(id));
    };

    return (
        <div style={{ width: 'auto' }} className={styles.controller}>
            <div style={{ fontSize: 15 }}>{item.name}</div>
            <div style={{ fontSize: '25px' }} className={styles.event}>
                <div className={styles.event_item} onClick={() => showModalAdd(item)}>
                    <AppstoreAddOutlined />
                </div>
                <div className={styles.event_item} onClick={() => showModalEdit(item)}>
                    <EditOutlined />
                </div>
                <div className={styles.event_item} onClick={() => onDelete(item.id)}>
                    <DeleteOutlined />
                </div>
            </div>
        </div>
    );
}

TitleTreeView.propTypes = {};

TitleTreeView.defaultProps = {};

export default TitleTreeView;
