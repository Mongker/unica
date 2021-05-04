/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 04/05/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
import React from 'react';
import { Button, Drawer, Form, Input, Checkbox, InputNumber, message } from 'antd';
import PropTypes from 'prop-types';
import useUserBase from '../../../hooks/LogicData/useUserBase';
import useProductBase from '../../../hooks/LogicData/useProductBase';
import { useSelector } from 'react-redux';
import { typeStore, url_base_img } from 'util/TypeUI';
import UploadFileView from '../../Category/UploadFileView';
import styles from '../Modal/styles/index.module.scss';

// const
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
const layout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 17 },
};
function ModalProductView({ refFunc, idCategory }) {
    // hooks
    const [form] = Form.useForm();
    const { myUser } = useUserBase();
    const { postProduct } = useProductBase();
    const category = useSelector((state) => state[typeStore.CATEGORY]);

    // state
    const [visible, setVisible] = React.useState(false);
    const [imgFile, setImgFile] = React.useState('');
    const [videoFile, setVideoFile] = React.useState('');
    console.log('videoFile', videoFile); // MongLV log fix bug

    // ref
    const refImgFile = React.useRef(null);
    const refVideoFile = React.useRef(null);

    // const
    const arr = category.filter((item) => item.id === idCategory);
    const nameCategory = arr.length > 0 && arr[0].name;

    // handle func
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
        onReset();
    };

    const onReset = () => {
        form.resetFields();
        setImgFile('');
        setVideoFile('');

        refVideoFile.current && refVideoFile.current.setLinkFile('');
        refVideoFile.current && refVideoFile.current.setFileList([]);

        refImgFile.current && refImgFile.current.setLinkFile('');
        refImgFile.current && refImgFile.current.setFileList([]);
    };
    const onFill = () => {
        form.setFieldsValue({});
    };

    const onFinish = (values) => {
        console.log('imgFile', imgFile); // MongLV log fix bug
        console.log('imgFile', imgFile); // MongLV log fix bug
        if (imgFile && videoFile) {
            values['author_id'] = myUser.id;
            values['catalog_id'] = idCategory;
            delete values['name_category'];
            postProduct(values);
            message.success('Thêm thành công');
            onReset();
            onClose();
        } else message.warn('Thiếu file đính kèm');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // Vòng đời
    React.useEffect(() => {
        refFunc.current = {
            visible,
            showDrawer,
            onClose,
        };
    });
    React.useEffect(() => {
        form.setFieldsValue({ name_category: nameCategory });
    }, [idCategory]);

    return (
        <React.Fragment>
            <Drawer
                style={{
                    position: 'absolute',
                }}
                title='Thêm khóa học'
                placement='right'
                onClose={onClose}
                visible={visible}
                width={'40%'}
            >
                <Form {...layout} form={form} name='basic' initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                    <Form.Item label='Tên khóa học' name='name' rules={[{ required: true, message: 'Không được bỏ trống!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label='Nội dung khóa học' name='content' rules={[{ required: true, message: 'Không được bỏ trống!' }]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item label='Giá khóa học' name='price' rules={[{ required: true, message: 'Không được bỏ trống!' }]}>
                        <InputNumber style={{ width: 200 }} formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} parser={(value) => value.replace(/\$\s?|(,*)/g, '')} />
                    </Form.Item>
                    <Form.Item label='Ảnh nền' rules={[{ required: true, message: 'Không được bỏ trống!' }]}>
                        <UploadFileView refFunc={refImgFile} styles={styles} Image={{ width: 260, height: 130 }} callback={setImgFile} />
                    </Form.Item>
                    <Form.Item label='Video Trailer' rules={[{ required: true, message: 'Không được bỏ trống!' }]} callback={setImgFile}>
                        <UploadFileView type={'mp4'} refFunc={refVideoFile} styles={styles} Image={{ width: 260, height: 130 }} imgDefault={`${url_base_img}video.png`} callback={setVideoFile} />
                    </Form.Item>
                    <Form.Item label='Danh mục' name='name_category' rules={[{ required: true, message: 'Không được bỏ trống!' }]}>
                        <Input disabled />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type='primary' htmlType='submit'>
                            Thêm
                        </Button>
                    </Form.Item>
                    {videoFile && (
                        <div className={'flex_row'} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <video style={{ width: 260, height: 130, marginLeft: 20 }} controls>
                                <source src={`${url_base_img}${videoFile}`} type='video/mp4' />
                            </video>
                        </div>
                    )}
                </Form>
            </Drawer>
        </React.Fragment>
    );
}

ModalProductView.propTypes = {
    refFunc: PropTypes.object,
};

ModalProductView.defaultProps = {
    refFunc: { current: {} },
};

export default ModalProductView;
