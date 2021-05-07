import React, { createElement, useState } from 'react';
// import PropTypes from 'prop-types';
import style from './style.module.scss';
import { CaretRightOutlined, DoubleRightOutlined, FieldTimeOutlined, GiftOutlined, ShoppingCartOutlined, UserOutlined, VideoCameraAddOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Affix, Avatar, Button, Collapse, Input, List, Rate } from 'antd';
import CommentDetail from './Comment/CommentDetail';
import NoiDung from './NoiDungKH/NoiDung';
import GioiThieu from './GioiThieu/GioiThieu';
import KhoaHoc from './KhoaHocLQ/KhoaHocLQ';
function ContentDetail() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={style.u_course_highlight}>
                <div className={style.container}>
                    <div className={style.breadcumb_detail_course}>
                        <a href={'/'} className={style.a}>
                            Unica
                        </a>
                        <DoubleRightOutlined className={style.icon} />
                        <a href='' className={style.a}>
                            Ngoại ngữ
                        </a>
                        <DoubleRightOutlined className={style.icon} />
                        <a href='' className={style.a}>
                            Anh văn giao tiếp cho người hoàn toàn mất gốc
                        </a>
                    </div>
                    <div className={style.u_detail_block_title}>
                        <h1 className={style.itemReviewed}>
                            <span>Anh văn giao tiếp cho người hoàn toàn mất gốc</span>
                        </h1>
                        <div className={style.u_detail_desc}>
                            Khóa học tiếng Anh giao tiếp cho người mất gốc khơi dậy niềm đam mê tiếng Anh, tự tin giao tiếp tiếng Anh như người bản xứ, mở ra cơ hội học tập, làm việc tại các công ty đa quốc gia và tự tin hơn trong giao tiếp với người
                            bản địa dù ở bất kỳ hoàn cảnh nào
                        </div>
                        <div className={style.u_detail_tea}>
                            <img className={style.picture_teacher_circle} src={'https://unica.vn/uploads/nguyenthiDieuLinh/October72016904am_th-s-ruby-thao-tran_thumb.jpg'} />
                        </div>
                        <div className={style.u_detail_rate}>
                            <Rate allowHalf defaultValue={2.5} className={style.icon} />
                            <span>263 đánh giá</span>
                        </div>
                        <div className={style.u_detail_students}>
                            <GiftOutlined className={style.icon} />
                            <span>7021 học viên</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.u_detail_course}>
                <div className={style.container_video}>
                    <div className={style.row}>
                        <div className={style.video}>
                            <video playsInline autoPlay muted loop style={{ width: 750, height: 422 }}>
                                <source src='polina.webm' type='video/webm' />
                                <source src='https://res.cloudinary.com/dn4nxz7f0/video/upload/v1594348575/Pexels_Videos_1093655_pr26ax.mp4' type='video/mp4' />
                            </video>
                        </div>
                        <div className={style.tab_detail}>
                            <ul>
                                <li>
                                    <a href=''>Giới thiệu</a>
                                </li>
                                <li>
                                    <a href=''>Nội dung khóa học</a>
                                </li>
                                <li>
                                    <a href=''>Thông tin giảng viên</a>
                                </li>
                                <li>
                                    <a href=''>Đánh giá</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.form_menu_noi}>
                        {/*menu*/}
                        <Affix offsetTop={300} onChange={(affixed) => console.log(affixed)} style={{ zIndex: 1 }}>
                            <div className={style.block_buy}>
                                <div className={style.u_sm_left}>
                                    <div className={style.block_price}>
                                        <span className={style.big_price}>
                                            479,000 <sup>đ</sup>
                                        </span>
                                        <span className={style.small_price}>
                                            600,000<sup>đ</sup>
                                        </span>
                                        <span className={style.discount_price}>-20%</span>
                                    </div>
                                    <div className={style.time_uudai}>
                                        <FieldTimeOutlined style={{ color: 'red' }} /> Thời gian ưu đãi còn 1 ngày
                                    </div>
                                    <div className={style.block_btn}>
                                        <Button className={style.btn_dang_ky}>ĐĂNG KÝ HỌC</Button>
                                        <Button className={style.btn_them_gio_hang} icon={<ShoppingCartOutlined />}>
                                            THÊM VÀO GIỎ HÀNG
                                        </Button>
                                        <p>Hoàn tiền trong 7 ngày nếu không hài lòng</p>
                                    </div>
                                </div>
                                <div className={style.u_sm_right}>
                                    <div className={style.block_ulti}>
                                        <ul style={{ marginLeft: 0 }}>
                                            <li>
                                                <div style={{ display: 'flex' }}>
                                                    <FieldTimeOutlined />
                                                    <p style={{ marginLeft: 10 }}>Thời lượng : 04 giờ 43 phút</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div style={{ display: 'flex' }}>
                                                    <FieldTimeOutlined />
                                                    <p style={{ marginLeft: 10 }}>Giáo trình : 30 bài giảng</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div style={{ display: 'flex' }}>
                                                    <FieldTimeOutlined />
                                                    <p style={{ marginLeft: 10 }}> Sở hữu khóa học trọn đời</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div style={{ display: 'flex' }}>
                                                    <FieldTimeOutlined />
                                                    <p style={{ marginLeft: 10 }}>Cấp chứng nhận hoàn thành</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div style={{ display: 'flex' }}>
                                                    <FieldTimeOutlined />
                                                    <p style={{ marginLeft: 10 }}>Giảm thêm 10% khi thanh toán online</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <a>Bạn có mã giảm giá?</a>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <Input placeholder='Nhập mã giảm giá ...' style={{ width: 200, margin: ' 10px 20px' }} />
                                            <Button type='primary' style={{ margin: '10px 0px' }}>
                                                Áp dụng
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Affix>
                    </div>
                </div>
            </div>
            <div className={style.u_des_course}>
                <div className={style.container_destination}>
                    <h2>Giới thiệu khóa học</h2>
                    <hr style={{ height: 0.5, backgroundColor: '#99eae1' }} />
                    <GioiThieu />
                </div>
            </div>
            <div className={style.u_des_course}>
                <div className={style.container_destination}>
                    <h2>Nội dung khóa học</h2>
                    <hr style={{ height: 0.5, backgroundColor: '#99eae1' }} />
                    <NoiDung />
                </div>
            </div>
            <div className={style.u_des_course}>
                <div className={style.container_destination}>
                    <h2>Khóa học liên quan</h2>
                    <hr style={{ height: 0.5, backgroundColor: '#99eae1' }} />
                    <KhoaHoc />
                </div>
            </div>
            <div className={style.u_des_course}>
                <div className={style.container_destination}>
                    <h2>Thông tin giảng viên</h2>
                    <hr style={{ height: 0.5, backgroundColor: '#99eae1' }} />
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 200 }}>
                            <Avatar size={180} icon={<UserOutlined />} />
                            <div className={style.u_detail_students}>
                                <GiftOutlined className={style.icon} />
                                <span>
                                    <b>7021</b> học viên
                                </span>
                            </div>
                            <div className={style.u_detail_students}>
                                <VideoCameraAddOutlined className={style.icon} />
                                <span>
                                    <b>2</b> khóa học
                                </span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: 10 }}>Th.s Ruby Thảo Trần</div>
                            <br></br>
                            <div style={{ marginLeft: 10, fontStyle: 'italic' }}>
                                <i>Thạc sỹ Tiếng anh</i>
                            </div>
                            <div>
                                <p>
                                    Ruby Thảo Trần nhận bằng thạc sỹ Lý Luận và phương pháp giảng dạy tiếng Anh của Southern Queensland Australia University
                                    <br />
                                    Cô có trên 7 năm kinh nghiệm giảng dạy tại các ngôi trường danh tiếng như New York center, Úc châu, Âu Mỹ, Úc Anh.
                                    <br />
                                    Đồng thời Ruby Thảo Trần cũng là người thành lập ra cơ sở học ngoại ngữ tại nhà KungFu English - Ruby's House với hơn 31 khóa học và hơn 3000 học viên đã tham gia học tính đến thời điểm hiện tại.
                                    <br />
                                    Giúp cho rất nhiều các bạn học viên sở hữu điểm cao trong các kỳ thi Anh văn TOEIC, TOEFL, IELTS… cũng như khả năng giao tiếp của những bạn đã được cô đào tạo cải thiện tốt hơn trước rất nhiều.{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.u_des_course}>
                <div className={style.container_destination}>
                    <h2>Nhận xét của học viên</h2>
                    <hr style={{ height: 0.5, backgroundColor: '#99eae1' }} />
                    <CommentDetail />
                </div>
            </div>
        </div>
    );
}

ContentDetail.propTypes = {};

ContentDetail.defaultProps = {};

export default ContentDetail;
