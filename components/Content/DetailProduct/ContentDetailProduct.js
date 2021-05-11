import React, { createElement, useState } from 'react';
// import PropTypes from 'prop-types';
import style from './style.module.scss';
import {
    CaretRightOutlined,
    DoubleRightOutlined,
    FieldTimeOutlined,
    GiftOutlined,
    ShoppingCartOutlined,
    UserOutlined,
    VideoCameraAddOutlined,
    VideoCameraOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import { Affix, Avatar, Button, Collapse, Input, List, Rate } from 'antd';
import CommentDetail from './Comment/CommentDetail';
import NoiDung from './NoiDungKH/NoiDung';
import KhoaHoc from './KhoaHocLQ/KhoaHocLQ';
import { url_base_img } from '../../../util/TypeUI';
import { Player } from 'video-react';
import useUserBase from '../../hooks/LogicData/useUserBase';

function ContentDetail(props) {
    const {
        name,
        content,
        number_user,
        trailer_link,
        image_link,
        author_id,
        content_full,
        id,
    } = props;
    const { usersObj } = useUserBase();
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={style.u_course_highlight}>
                <div className={style.container}>
                    <div className={style.breadcumb_detail_course}>
                        <a href={'/'} className={style.a}>
                            UTT Learning
                        </a>
                        {/*<DoubleRightOutlined className={style.icon} />*/}
                        {/*<a href='' className={style.a}>*/}
                        {/*    Ngoại ngữ*/}
                        {/*</a>*/}
                        <DoubleRightOutlined className={style.icon} />
                        <a href='#' className={style.a}>
                            {name}
                        </a>
                    </div>
                    <div className={style.u_detail_block_title}>
                        <h1 className={style.itemReviewed}>
                            <span>{name}</span>
                        </h1>
                        <div className={style.u_detail_desc}>{content}</div>
                        <div
                            className={'flex_row'}
                            style={{ justifyContent: 'flex-start', alignItems: 'center' }}
                        >
                            <div className={style.u_detail_tea}>
                                <Avatar
                                    icon={<UserOutlined />}
                                    src={url_base_img + usersObj.avatar}
                                />
                                <p style={{ marginLeft: 5 }}>
                                    {usersObj[`${author_id}`] &&
                                    usersObj[`${author_id}`].name
                                        ? usersObj[`${author_id}`].name
                                        : '[Loading]'}
                                </p>
                            </div>
                            <div className={style.u_detail_tea}>
                                <Rate
                                    allowHalf
                                    defaultValue={2.5}
                                    className={style.icon}
                                />
                                <span style={{ marginLeft: 5 }}>263 đánh giá</span>
                            </div>
                            <div className={style.u_detail_tea}>
                                <TeamOutlined />
                                <span style={{ marginLeft: 5 }}>
                                    {number_user} học viên
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.u_detail_course}>
                <div className={style.container_video}>
                    <div className={style.row}>
                        <div className={style.video}>
                            <Player
                                style={{ width: 750 }}
                                playsInline
                                poster={`${url_base_img}${
                                    image_link ? image_link : 'startVideo.jpg'
                                }`}
                                src={url_base_img + trailer_link}
                            />
                        </div>
                        {/*<div className={style.tab_detail}>*/}
                        {/*    <ul>*/}
                        {/*        <li>*/}
                        {/*            <a href=''>Giới thiệu</a>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <a href=''>Nội dung khóa học</a>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <a href=''>Thông tin giảng viên</a>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <a href=''>Đánh giá</a>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                    </div>
                    <div className={style.form_menu_noi}>
                        {/*menu*/}
                        <Affix
                            offsetTop={300}
                            onChange={(affixed) => console.log(affixed)}
                            style={{ zIndex: 1 }}
                        >
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
                                        <FieldTimeOutlined style={{ color: 'red' }} />{' '}
                                        Thời gian ưu đãi còn 1 ngày
                                    </div>
                                    <div className={style.block_btn}>
                                        <Button className={style.btn_dang_ky}>
                                            ĐĂNG KÝ HỌC
                                        </Button>
                                        <Button
                                            className={style.btn_them_gio_hang}
                                            icon={<ShoppingCartOutlined />}
                                        >
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
                                                    <p style={{ marginLeft: 10 }}>
                                                        Thời lượng : 04 giờ 43 phút
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div style={{ display: 'flex' }}>
                                                    <FieldTimeOutlined />
                                                    <p style={{ marginLeft: 10 }}>
                                                        Giáo trình : 30 bài giảng
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div style={{ display: 'flex' }}>
                                                    <FieldTimeOutlined />
                                                    <p style={{ marginLeft: 10 }}>
                                                        {' '}
                                                        Sở hữu khóa học trọn đời
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div style={{ display: 'flex' }}>
                                                    <FieldTimeOutlined />
                                                    <p style={{ marginLeft: 10 }}>
                                                        Cấp chứng nhận hoàn thành
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div style={{ display: 'flex' }}>
                                                    <FieldTimeOutlined />
                                                    <p style={{ marginLeft: 10 }}>
                                                        Giảm thêm 10% khi thanh toán
                                                        online
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <a>Bạn có mã giảm giá?</a>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <Input
                                                placeholder='Nhập mã giảm giá ...'
                                                style={{
                                                    width: 200,
                                                    margin: ' 10px 20px',
                                                }}
                                            />
                                            <Button
                                                type='primary'
                                                style={{ margin: '10px 0px' }}
                                            >
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
            <div className={style.u_des_course} style={{ marginTop: '-70px' }}>
                <div className={style.container_destination}>
                    <h2>Giới thiệu khóa học</h2>
                    <hr style={{ height: 0.5, backgroundColor: '#99eae1' }} />
                    <div dangerouslySetInnerHTML={{ __html: content_full }} />
                </div>
            </div>
            <div className={style.u_des_course}>
                <div className={style.container_destination}>
                    <h2>Nội dung khóa học</h2>
                    <hr style={{ height: 0.5, backgroundColor: '#99eae1' }} />
                    <NoiDung product_id={id} />
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
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: 200,
                            }}
                        >
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
                            <div
                                style={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginLeft: 10,
                                }}
                            >
                                Th.s Ruby Thảo Trần
                            </div>
                            <br></br>
                            <div style={{ marginLeft: 10, fontStyle: 'italic' }}>
                                <i>Thạc sỹ Tiếng anh</i>
                            </div>
                            <div>
                                <p>
                                    Ruby Thảo Trần nhận bằng thạc sỹ Lý Luận và phương
                                    pháp giảng dạy tiếng Anh của Southern Queensland
                                    Australia University
                                    <br />
                                    Cô có trên 7 năm kinh nghiệm giảng dạy tại các ngôi
                                    trường danh tiếng như New York center, Úc châu, Âu Mỹ,
                                    Úc Anh.
                                    <br />
                                    Đồng thời Ruby Thảo Trần cũng là người thành lập ra cơ
                                    sở học ngoại ngữ tại nhà KungFu English - Ruby's House
                                    với hơn 31 khóa học và hơn 3000 học viên đã tham gia
                                    học tính đến thời điểm hiện tại.
                                    <br />
                                    Giúp cho rất nhiều các bạn học viên sở hữu điểm cao
                                    trong các kỳ thi Anh văn TOEIC, TOEFL, IELTS… cũng như
                                    khả năng giao tiếp của những bạn đã được cô đào tạo
                                    cải thiện tốt hơn trước rất nhiều.{' '}
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
