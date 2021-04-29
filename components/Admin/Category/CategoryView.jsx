/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 23/04/2021
 * @email: levanmong.dola.99@gmail.com
 * @phone: +84373668113
 * @slogan: "Mọi thứ đều bắt đầu từ việc nhỏ, những khát vọng phải lớn"
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Modal, Button, Input, Select, InputNumber, message, Tree } from 'antd';
import classNames from 'classnames';
import { CarryOutOutlined } from '@ant-design/icons';

// component
import UploadFileView from './UploadFileView';

// styles
import styles from './styles/index.module.scss';
import axios from 'axios';

// const
const URL = 'http://localhost:2020/api/category';
const getListCategory = (callback) => {
    return axios
        .get(URL)
        .then((res) => callback(res.data.categories))
        .catch((error) => console.log(error));
};

const postCatalog = (data) => {
    try {
        return axios
            .post(URL, data)
            .then((res) => res.data)
            .then((result) => {
                if (result.message === 'OK') {
                    message.success('Thêm thành công');
                } else {
                    message.error('Lỗi truyền');
                }
            })
            .catch((error) => message.error('Lỗi: ' + error));
    } catch (e) {
        message.error(e);
    }
};

const treeDataFake = [
    {
        title: 'parent 0',
        key: '0-0',
        icon: <CarryOutOutlined />,
        children: [
            { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
            { title: 'leaf 0-1', key: '0-0-1', isLeaf: true },
        ],
    },
    {
        title: 'parent 1',
        key: '0-1',
        icon: <CarryOutOutlined />,
        children: [
            { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
            { title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
        ],
    },
];
const CategoryView = () => {
    // state
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [category, setCategory] = useState([]);
    const [treeData, setTreeData] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [sortOrder, setSortOrder] = useState(0);

    // ref
    const refUpdateFile = React.useRef(null);

    console.log('category', category);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        if (name.length > 0) {
            postCatalog({
                rootId: '1',
                status: '1',
                name,
                description: description,
                sort_order: sortOrder.toString(),
            });
            getListCategory(setCategory);
            setIsModalVisible(false);
        } else message.warn('Tên không được null');
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleChangeInputName = (e) => {
        setName(e.target.value);
    };
    const handleChangeInputDescription = (e) => {
        setDescription(e.target.value);
    };
    const handleChangeInputSortOrder = (value) => {
        setSortOrder(value);
    };

    const onSelect = (selectedKeys, info) => {};

    // Xử lý vòng đời
    React.useEffect(() => {
        getListCategory(setCategory);
    }, []);
    React.useEffect(() => {
        if (category && category.length > 0) {
            let arr = [];
            category.map((item) =>
                arr.push({
                    title: item.name,
                    key: item.id,
                    icon: <CarryOutOutlined />,
                    children: [],
                }),
            );
            // console.log('arr', arr);
            setTreeData(arr);
        }
    }, [category]);

    console.log('refUpdateFile', refUpdateFile); // MongLV log fix bug
    // JSX
    const modalAddComponent = (
        <Modal title='Thêm danh mục' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <div className={classNames('flex_col', styles.category_add)}>
                {/* name */}
                <div className={classNames('flex_row', styles.item_category)}>
                    <div className={styles.item_name_category}>Tên:</div>
                    <Input value={name} onChange={handleChangeInputName} className={styles.item_input_category} />
                </div>

                {/* description */}
                <div className={classNames('flex_row', styles.item_category)}>
                    <div className={styles.item_name_category}>Nội dung:</div>
                    <Input.TextArea onChange={handleChangeInputDescription} value={description} className={styles.item_input_category} />
                </div>

                {/* icon */}
                <div className={classNames('flex_row', styles.item_category)}>
                    <div className={styles.item_name_category}>Icon:</div>
                    <div className={styles.item_input_category}>
                        <UploadFileView ref={refUpdateFile} />
                    </div>
                </div>

                {/* sort_order */}
                {/*<div className={classNames('flex_row', styles.item_category)}>*/}
                {/*    <div className={styles.item_name_category}>Vị trí hiễn thị:</div>*/}
                {/*    <InputNumber value={sortOrder} className={styles.item_input_category} onChange={handleChangeInputSortOrder} />*/}
                {/*</div>*/}
            </div>
        </Modal>
    );
    return (
        <React.Fragment>
            <div className={styles.btn_add_category}>
                <Button type='primary' onClick={showModal}>
                    Thêm danh mục
                </Button>
            </div>
            <div className={'flex_col'}>
                {modalAddComponent}
                <div className={styles.custom_tree_antd}>
                    <Tree onSelect={onSelect} treeData={treeDataFake} showIcon draggable />
                </div>
            </div>
        </React.Fragment>
    );
};

CategoryView.propTypes = {};

CategoryView.defaultProps = {};

export default CategoryView;
