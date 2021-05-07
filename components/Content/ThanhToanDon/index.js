import React, { useState } from 'react';
import style from './styles.module.scss';
import { Button, Form, Input, Select, Steps } from 'antd';
import { EditOutlined } from '@ant-design/icons';
// import PropTypes from 'prop-types';
const { Step } = Steps;
const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 24 },
};
const { Option } = Select;
function ContentThanhToan() {
    const [form] = Form.useForm();
    const [current, setCurrent] = useState(0);
    const onChange = (current) => {
        console.log('onChange:', current);
        setCurrent(current);
    };
    const onFinish = (values) => {
        console.log(values);
    };
    return (
        <div className={style.form_than_toan}>
            <div className={style.u_bread_cart}>
                <div className={style.container}>
                    <Steps current={current} onChange={onChange}>
                        <Step title='Thông tin' />
                        <Step title='Thanh toán' />
                        <Step title='Vào học' />
                    </Steps>
                </div>
            </div>
            <div className={style.unica_order_cart}>
                <div className={style.container}>
                    <div className={style.controller_left}>
                        <p className={style.title_left}>Thông tin người đặt hàng</p>
                        <div className={style.u_box_cart2}>
                            <Form {...layout} form={form} name='control-hooks' onFinish={onFinish}>
                                <div>
                                    <div style={{ display: 'flex', fontWeight: 'bold' }}>
                                        Họ tên <p style={{ color: 'red', marginLeft: 5 }}>*</p>
                                    </div>
                                    <Form.Item name='name' rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                </div>
                                <div>
                                    <div style={{ display: 'flex', fontWeight: 'bold' }}>
                                        Email <p style={{ color: 'red', marginLeft: 5 }}>*</p>
                                    </div>
                                    <Form.Item
                                        name='email'
                                        rules={[
                                            {
                                                type: 'email',
                                                message: 'The input is not valid E-mail!',
                                            },
                                            {
                                                required: true,
                                                message: 'Please input your E-mail!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </div>
                                <div>
                                    <div style={{ display: 'flex', fontWeight: 'bold' }}>
                                        Điện thoại <p style={{ color: 'red', marginLeft: 5 }}>*</p>
                                    </div>
                                    <Form.Item name='phone' rules={[{ required: true, message: 'Please input your phone number!' }]}>
                                        <Input style={{ width: '100%' }} />
                                    </Form.Item>
                                </div>
                                <div>
                                    <div style={{ display: 'flex', fontWeight: 'bold' }}>
                                        Tỉnh/Thành phố <p style={{ color: 'red', marginLeft: 5 }}>*</p>
                                    </div>
                                    <Form.Item name='address' rules={[{ required: true }]}>
                                        <Select placeholder='Chọn tỉnh thành' allowClear>
                                            <Option value='HN'>Hà Nội</Option>
                                            <Option value='HY'>Hưng Yên</Option>
                                            <Option value='TH'>Thanh Hóa</Option>
                                        </Select>
                                    </Form.Item>
                                </div>
                                <div className={style.btn}>
                                    <Button className={style.btn_next}>TIẾP THEO >></Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className={style.controller_rigth}>
                        <div className={style.u_box_cart2}>
                            <div className={style.u_c_title}>
                                <p>Đơn hàng (2 khóa học)</p>
                                <a>
                                    <EditOutlined style={{ marginRight: 5 }} />
                                    Sửa
                                </a>
                            </div>
                            <div className={style.u_cart_course}>
                                <div className={style.title_cart_course}>Tập Yoga cơ bản ngay tại nhà với Nguyễn Hiếu </div>
                                <div className={style.price_cart}>
                                    <p style={{ float: 'right' }}>
                                        549,000 <sup style={{ fontSize: 14 }}>đ</sup>
                                    </p>
                                    <span>700,000</span>
                                    <sup>đ</sup>
                                </div>
                            </div>
                            <div className={style.u_cart_course}>
                                <div className={style.title_cart_course}>Bí mật Thiền ứng dụng thay đổi cuộc đời </div>
                                <div className={style.price_cart}>
                                    <p style={{ float: 'right' }}>
                                        479,000 <sup style={{ fontSize: 14 }}>đ</sup>
                                    </p>
                                    <span>700,000</span>
                                    <sup>đ</sup>
                                </div>
                            </div>
                            <div className={style.total_cart}>
                                <p>Thành tiền</p>
                                <span className='thanh_tien'>
                                    1,028,000<sup>đ</sup>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ContentThanhToan.propTypes = {};

ContentThanhToan.defaultProps = {};

export default ContentThanhToan;
