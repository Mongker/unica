/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 23/04/2021
 * @email: levanmong.dola.99@gmail.com
 * @phone: +84373668113
 * @slogan: "Mọi thứ đều bắt đầu từ việc nhỏ, những khát vọng phải lớn"
 */

import React, { useState } from 'react';
import { Button, message, Tree } from 'antd';
import { CarryOutOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

// action
import * as categoryAction from 'redux/actions/categoryAction';

// component
import ModalUI from './ModalUI';

// styles
import styles from './styles/index.module.scss';
import TitleTreeView from './TitleTree/TitleTreeView';

const CategoryView = () => {
    // redux
    const dispatch = useDispatch();
    const category = useSelector((store) => store.category);

    // state
    const [treeData, setTreeData] = useState([]);

    // ref
    const refModalAdd = React.useRef(null);

    // const
    const urlImg = 'http://localhost:2020/api/file/';

    // handle func
    const onSelect = (selectedKeys, info) => {};
    const showModalAdd = (item) => {
        refModalAdd.current && refModalAdd.current.showModal();
        refModalAdd.current && refModalAdd.current.setRootId(item.id);
        // refModalAdd.current && refModalAdd.current.setItemEdit(item);
    };
    const showModalEdit = (item) => {
        console.log('item', item); // MongLV log fix bug
        refModalAdd.current && refModalAdd.current.showModal();
        refModalAdd.current && refModalAdd.current.setItemEdit(item);
    };
    const setChildren = (id, key) => {
        const children = [];
        let dem = 0;
        category.map((itemChildren) => {
            if (`${itemChildren.rootId}` === `${id}`) {
                const _key = `${key}-${dem}`;
                const img = itemChildren.icon ? `${urlImg}${itemChildren.icon}` : urlImg + 'operation.png';
                children.push({
                    title: <TitleTreeView item={itemChildren} showModalAdd={showModalAdd} showModalEdit={showModalEdit} />,
                    // title: itemChildren.name,
                    key: _key,
                    icon: <img src={img} alt={'icon'} style={{ width: 20, height: 17, objectFit: 'cover' }} />,
                    children: setChildren(itemChildren.id, _key.toString()),
                });
                dem = dem + 1;
            }
        });
        return children;
    };
    const updateTreeData = () => {
        let newTreeData = [];
        let dem = 0;
        category.map((item) => {
            const img = item.icon ? `${urlImg}${item.icon}` : urlImg + 'operation.png';
            if (`${item.rootId}` === '1') {
                newTreeData.push({
                    title: <TitleTreeView item={item} showModalAdd={showModalAdd} showModalEdit={showModalEdit} />,
                    key: `${dem}`,
                    icon: <img src={img} alt={'icon'} style={{ width: 20, height: 17, objectFit: 'cover' }} />,
                    children: setChildren(item.id, `${dem}`),
                });
                dem = dem + 1;
            }
        });
        setTreeData(newTreeData);
    };

    // Xử lý vòng đời
    React.useEffect(() => {
        dispatch(categoryAction.getList());
    }, []);

    React.useEffect(() => {
        updateTreeData();
    }, [category]);

    return (
        <React.Fragment>
            <div className={styles.btn_add_category}>
                <Button type='primary' onClick={() => refModalAdd.current && refModalAdd.current.showModal()}>
                    Thêm danh mục
                </Button>
            </div>
            <div className={'flex_row'}>
                <ModalUI refFunc={refModalAdd} />
                <div className={styles.custom_tree_antd}>
                    <Tree onSelect={onSelect} treeData={treeData} showIcon draggable />
                </div>
                <div className={styles.content_category} />
            </div>
        </React.Fragment>
    );
};

CategoryView.propTypes = {};

CategoryView.defaultProps = {};

export default React.memo(CategoryView);
