/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 04/05/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { typeStore } from '../../../util/TypeUI';
// import PropTypes from 'prop-types';

function useCategoryBase() {
    const category = useSelector((state) => state[typeStore.CATEGORY]);
    let categoryObj = {};
    category.map((item) => (categoryObj[item.id] = item));
    return {
        category,
        categoryObj,
    };
}

useCategoryBase.propTypes = {};

useCategoryBase.defaultProps = {};

export default useCategoryBase;
