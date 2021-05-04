/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 04/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import { combineReducers } from 'redux';
import Category from 'redux/reducers/categoryReducers';
import Users from 'redux/reducers/usersReducers';
import Product from 'redux/reducers/productReducer';

// util
import { typeStore } from 'util/TypeUI';

const store = {};
const listState = [
    {
        name: typeStore.PRODUCT,
        value: Product,
    },
    {
        name: typeStore.CATEGORY,
        value: Category,
    },
    {
        name: typeStore.USER,
        value: Users,
    },
];

listState.map((item) => (store[item.name] = item.value));
const rootReducer = combineReducers(store);
export { rootReducer };
