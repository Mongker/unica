import React from 'react';
// import PropTypes from 'prop-types';
import style from './style.module.scss';
import { DoubleRightOutlined, KeyOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

function Password() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className={style.form_account}>
            <div className={style.content_main_user}>
                <div className={style.content_main_user_content}>
                    <div className={style.breadcrumb}>
                        <ul className={style.ul_pass}>
                            <li>Dashboard</li>
                            <li>
                                <DoubleRightOutlined
                                    style={{ fontSize: 12, margin: '0px 10px' }}
                                />
                                Học viên
                            </li>
                            <li>
                                <DoubleRightOutlined
                                    style={{ fontSize: 12, margin: '0px 10px' }}
                                />
                                Thay đổi mật khẩu
                            </li>
                        </ul>
                        <div className={style.panel_default}>
                            <div
                                className={style.panel_heading}
                                style={{ fontWeight: 'bold' }}
                            >
                                <KeyOutlined style={{ marginRight: 10 }} />
                                Thay đổi mật khẩu
                            </div>
                            <div className={style.panel_body}>
                                <Form
                                    {...layout}
                                    name='basic'
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                >
                                    <div style={{ display: 'flex' }}>
                                        <div
                                            style={{
                                                marginRight: 20,
                                                width: '15%',
                                                marginLeft: 100,
                                            }}
                                        >
                                            {' '}
                                            * Mật khẩu của bạn :
                                        </div>
                                        <div style={{ width: '50%' }}>
                                            <Form.Item
                                                name='password'
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            'Please input your password!',
                                                    },
                                                ]}
                                            >
                                                <Input.Password />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <div
                                            style={{
                                                marginRight: 20,
                                                width: '15%',
                                                marginLeft: 100,
                                            }}
                                        >
                                            {' '}
                                            * Nhập password mới :
                                        </div>
                                        <div style={{ width: '50%' }}>
                                            <Form.Item
                                                name='new_password'
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            'Please input your new password!',
                                                    },
                                                ]}
                                            >
                                                <Input.Password />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <div
                                            style={{
                                                marginRight: 20,
                                                width: '15%',
                                                marginLeft: 100,
                                            }}
                                        >
                                            Nhập lại password mới :
                                        </div>
                                        <div style={{ width: '50%' }}>
                                            <Form.Item
                                                name='new_password'
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            'Please input your new password!',
                                                    },
                                                ]}
                                            >
                                                <Input.Password />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <Form.Item {...tailLayout}>
                                        <Button type='primary' htmlType='submit'>
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Password.propTypes = {};

Password.defaultProps = {};

export default Password;
