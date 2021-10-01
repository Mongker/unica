/**
 * Copyright 2016-present, Bkav, Corp.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author monglv@bkav.com on 01/10/2021
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React from 'react';
// import PropTypes from 'prop-types';
import ContextModalProduct from 'context/ContextModalProduct';

function WrapperAdmin({ children }) {
    const [typeModal, setTypeModal] = React.useState('ADD'); // Note: type này để xác "EDIT" sửa hay "ADD"
    const [visible, setVisible] = React.useState(false);
    const [imgFile, setImgFile] = React.useState('');
    const [videoFile, setVideoFile] = React.useState('');
    const [IdCategory, setIdCategory] = React.useState(null);
    const [dataEdit, setDataEdit] = React.useState({}); // Note: dành cho trạng thái typeModal === "EDIT"
    const [content, setContent] = React.useState();
    const data = React.useMemo(
        () => ({
            typeModal,
            setTypeModal,
            visible,
            setVisible,
            imgFile,
            setImgFile,
            videoFile,
            setVideoFile,
            IdCategory,
            setIdCategory,
            dataEdit,
            setDataEdit,
            content,
            setContent,
        }),
        [content, dataEdit, IdCategory, videoFile, imgFile, visible, typeModal],
    );
    return <ContextModalProduct.Provider value={data}>{children}</ContextModalProduct.Provider>;
}

WrapperAdmin.propTypes = {};

WrapperAdmin.defaultProps = {};

export default WrapperAdmin;
