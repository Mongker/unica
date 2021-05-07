import React from 'react';
import style from './styles.module.scss';
import { Avatar, Button, List } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
const data = [
    {
        title: <div style={{ fontWeight: 'bold' }}>Tập Yoga cơ bản ngay tại nhà với Nguyễn Hiếu</div>,
    },
    {
        title: <div style={{ fontWeight: 'bold' }}>Bí mật Thiền ứng dụng thay đổi cuộc đời</div>,
    },
];
function CartProduct() {
    const router = useRouter();
    return (
        <div className={style.form_cart}>
            <div className={style.u_bread_cart}>
                <div className={style.container}>
                    <span>Giỏ hàng (1 khóa học)</span>
                </div>
            </div>
            <div className={style.unica_order_cart}>
                <div className={style.container}>
                    <div className={style.controller_left}>
                        <div className={style.u_box_cart2}>
                            <List
                                itemLayout='horizontal'
                                dataSource={data}
                                renderItem={(item) => (
                                    <List.Item
                                        actions={[
                                            <div>
                                                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                                                    549.000<sup style={{ fontSize: '14px' }}>đ</sup>
                                                </p>
                                                <span style={{ textDecoration: 'line-through' }}>
                                                    700,000 <sup style={{ fontSize: '10px' }}>đ</sup>
                                                </span>
                                            </div>,
                                            <div>
                                                <CloseOutlined style={{ color: '#f00', fontSize: '16px', cursor: 'pointer' }} />
                                            </div>,
                                        ]}
                                    >
                                        <List.Item.Meta
                                            avatar={<img src='https://static.unica.vn/upload/images/2019/04/bi-mat-thien-ung-dung-nguyen-hieu-yoga_m_1555571947.jpg' style={{ width: 129, height: 64 }} />}
                                            title={<a href='https://ant.design'>{item.title}</a>}
                                            description='Giảng viên: Nguyễn Hiếu'
                                        />
                                    </List.Item>
                                )}
                            />
                        </div>
                    </div>
                    <div className={style.controller_rigth}>
                        <div className={style.price}>
                            <div className={style.price_cart1}>
                                1,028,000<sup style={{ fontSize: '14px' }}>đ</sup>
                            </div>
                            <span style={{ textDecoration: 'line-through' }}>
                                700,000 <sup style={{ fontSize: '10px' }}>đ</sup>
                            </span>
                        </div>
                        <div>
                            <Button style={{ width: 262, height: 43, color: '#fff', backgroundColor: '#ec5252', borderRadius: 5, fontSize: 16 }} onClick={() => router.push('/thanhtoan')}>
                                Thanh toán
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

CartProduct.propTypes = {};

CartProduct.defaultProps = {};

export default CartProduct;
