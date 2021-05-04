/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 01/05/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { message, Table } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// hooks
import useColumns from '../../../hooks/useColumns';

// Util
import { typeStore } from 'util/TypeUI';

// style
import styles from './styles/index.module.scss';
import useCategoryBase from '../../../hooks/LogicData/useCategoryBase';

const funcDefault = () => {};
function TableProduct({ columnsTable, type, actionProduct, isFullWidth }) {
    // hooks
    const { category } = useCategoryBase();

    // handle func

    // hooks
    const { columns, data } = useColumns({
        nameStore: typeStore.PRODUCT,
        columnsTable,
        handleActionTable: actionProduct,
    });

    let arrCategoryAll = [];
    let dataSource = [...data];
    if (type) {
        category.map((item) => {
            item.rootId === 1 && type === item.id && arrCategoryAll.push(item.id);
            item.rootId === type && arrCategoryAll.push(item.id);
            item.id === type && arrCategoryAll.push(item.id);
        });
        dataSource = data.filter((item) => arrCategoryAll.includes(Number(item.catalog_id)));
    }
    return (
        <div className={classNames(isFullWidth ? styles.controllerFull : styles.controller)}>
            <Table columns={columns} dataSource={dataSource} />
        </div>
    );
}

TableProduct.propTypes = {
    handleDidMount: PropTypes.func,
    actionDelete: PropTypes.func,
};

TableProduct.defaultProps = {
    handleDidMount: funcDefault,
    actionDelete: funcDefault,
};

export default React.memo(TableProduct);
