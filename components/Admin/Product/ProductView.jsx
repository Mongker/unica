/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 04/05/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import TableProduct from './Table/TableProduct';
import { Avatar, Image, Popconfirm, Tag } from 'antd';
import { EditOutlined, EyeInvisibleOutlined, EyeOutlined, LockOutlined, UnlockOutlined, UserOutlined } from '@ant-design/icons';
import { url_base_img } from '../../../util/TypeUI';
import useUserBase from '../../hooks/LogicData/useUserBase';
import PropTypes from 'prop-types';
import style from '../../hooks/styles/index.module.scss';
import useProductBase from '../../hooks/LogicData/useProductBase';

function ProductView({ keyTreeActive, refCallback }) {
    const { usersObj } = useUserBase();
    const { hideProduct } = useProductBase();
    console.log('refCallback', refCallback); // MongLV log fix bug

    // handle func
    const handleShow = (data) => {
        if (refCallback.current) {
            refCallback.current.showDrawer();
            refCallback.current.setTypeModal('EDIT');
            refCallback.current.setDataEdit(data);
            refCallback.current.form.setFieldsValue(data);
            refCallback.current.setIdCategory(data.catalog_id);
            refCallback.current.refVideoFile.current && refCallback.current.refVideoFile.current.setLinkFile(data.trailer_link);
            refCallback.current.refVideoFile.current &&
                refCallback.current.refVideoFile.current.setFileList([
                    {
                        uid: '-1',
                        name: data.trailer_link,
                        status: 'done',
                        url: url_base_img + data.trailer_link,
                    },
                ]);

            refCallback.current.refImgFile.current && refCallback.current.refImgFile.current.setLinkFile(data.image_link);
            refCallback.current.refImgFile.current &&
                refCallback.current.refImgFile.current.setFileList([
                    {
                        uid: '-1',
                        name: data.image_link,
                        status: 'done',
                        url: url_base_img + data.image_link,
                    },
                ]);
        }
    };

    // JSX
    const columnsTable = [
        {
            title: 'Ảnh Khóa Học',
            dataIndex: 'image_link',
            width: 100,
            render: (image_link) => {
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} src={''} />;
                return <Avatar icon={<UserOutlined />} src={url_base_img + (image_link ? image_link : 'default.png')} style={{ width: 100, height: 100 }} />;
            },
        },
        {
            title: 'Tên khóa học',
            dataIndex: 'name',
            width: 200,
            render: (name) => <div style={{ color: 'red', fontSize: 15, fontWeight: 'bold' }}>{name}</div>,
        },
        {
            title: 'Giá sản phẩm',
            dataIndex: 'price',
            width: 100,
            render: (price) => <a>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} $</a>,
        },
        {
            title: 'Giảm giá',
            dataIndex: 'sale',
            width: 100,
            render: (sale) => <Tag color='success'>{sale} %</Tag>,
        },
        {
            title: 'Tác giả',
            dataIndex: 'author_id',
            width: 100,
            // render: (author_id) => <div>{usersObj[author_id].name}</div>,
            render: (author_id) => (
                <div className={'flex_col'} style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar icon={<UserOutlined />} src={url_base_img + usersObj[author_id].avatar} />
                    <p>{usersObj[author_id].name}</p>
                    <p>({usersObj[author_id].email})</p>
                </div>
            ),
        },
    ];
    const actionProduct = (_, data) => {
        return (
            <div className={style.action}>
                <EditOutlined onClick={() => handleShow(data)} className={style.item_action} />
                {data.status ? (
                    <Popconfirm placement='top' title={'Ẩn khóa học đi'} onConfirm={() => hideProduct(data)} okText='Phải' cancelText='Không'>
                        <EyeOutlined style={{ color: '#0b8f01' }} />
                    </Popconfirm>
                ) : (
                    <Popconfirm placement='top' title={'Hiễn thị khóa học'} onConfirm={() => hideProduct(data)} okText='Phải' cancelText='Không'>
                        <EyeInvisibleOutlined style={{ color: '#fc0000' }} />
                    </Popconfirm>
                )}
            </div>
        );
    };
    return <TableProduct columnsTable={columnsTable} actionProduct={actionProduct} type={keyTreeActive} />;
}

ProductView.propTypes = {
    keyTreeActive: PropTypes.number,
};

ProductView.defaultProps = {};

export default React.memo(ProductView);
