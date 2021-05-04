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
import ContextApp from 'util/ContextApp';
import { typeStore, url_api } from 'util/TypeUI';

// import PropTypes from 'prop-types';

function useUserBase() {
    // hooks
    const users = useSelector((store) => store[typeStore.USER]);
    const { user: myUser } = React.useContext(ContextApp);
    const dispatch = useDispatch();
    let usersObj = {};
    users.map((item) => (usersObj[item.id] = item));

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
    return {
        myUser,
        usersObj,
        users,
        updateUser,
    };
}

useUserBase.propTypes = {};

useUserBase.defaultProps = {};

export default useUserBase;
