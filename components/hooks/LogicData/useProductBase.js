/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 04/05/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { message as messageAnt } from 'antd';
import baseAPI from 'redux/api/baseAPI';
import typeAction from 'redux/actions/typeAction';
import { typeStore, url_api } from 'util/TypeUI';

// import PropTypes from 'prop-types';

function useProductBase() {
    // hooks
    const product = useSelector((store) => store[typeStore.PRODUCT]);
    const dispatch = useDispatch();
    console.log('product', product); // MongLV log fix bug

    // handle func
    const updateUser = async (data = {}) => {
        const { message } = await baseAPI.update(url_api.USER, data);
        const id = data.id;
        if (message === 'OK') {
            const newData = users.map((item) => {
                if (item.id === id) return { ...item, ...data };
                return item;
            });
            dispatch({ type: typeAction.USER.GET_LIST, payload: { users: [...newData] } });
        } else messageAnt.warn(message);
    };
    const postProduct = async (obj = {}) => {
        const { message, data } = await baseAPI.add(url_api.PRODUCT, obj);
        if (message === 'OK') {
            product.push(data);
            dispatch({ type: typeAction.PRODUCT.POST, payload: { data: [...product] } });
        } else messageAnt.warn(message);
    };
    return {
        product,
        postProduct,
    };
}

useProductBase.propTypes = {};

useProductBase.defaultProps = {};

export default useProductBase;
