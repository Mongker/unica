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

// component
import CategoryView from '../Category/CategoryView';
import ManagementUserView from '../ManagementUser/ManagementUserView';
import ProductView from '../Product/ProductView';

// util
import { TYPE_MENU } from 'util/TypeMenu';
function ContentController({ activeMenu, refModalProduct }) {
    console.log('ContentController', refModalProduct); // MongLV log fix bug
    let Component;
    switch (activeMenu) {
        case TYPE_MENU.CATEGORY:
            Component = <CategoryView refModalProduct={refModalProduct} />;
            break;
        case TYPE_MENU.USER:
            Component = <ManagementUserView />;
            break;
        case TYPE_MENU.PRODUCT:
            Component = <ProductView refCallback={refModalProduct} isMenu={activeMenu === TYPE_MENU.PRODUCT} />;
            break;
        default:
            Component = <React.Fragment />;
            break;
    }
    return Component;
}

ContentController.propTypes = {
    activeMenu: PropTypes.string.isRequired,
};

ContentController.defaultProps = {};

export default ContentController;
