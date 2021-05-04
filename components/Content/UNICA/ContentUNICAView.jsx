/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 16/04/2021
 * @email: levanmong.dola.99@gmail.com
 * @phone: +84373668113
 * @slogan: "Mọi thứ đều bắt đầu từ việc nhỏ, những khát vọng phải lớn"
 */

import React from 'react';
import PropTypes from 'prop-types';
import { url_base_img } from '../../../util/TypeUI';

function ContentUNICAView(prop) {
    return (
        <div className='contentc'>
            <div className='grid'>
                <div className='grid__row'>
                    <div className='content_category'>
                        <ul className='content_category-list'>
                            <li className='content_category-list-item'>
                                <a className='content_category-list-item-link' href=''>
                                    <i className='fa fa-language'></i>
                                    <p>Ngoại Ngữ</p>
                                </a>
                                <div className='menuhover'>
                                    <div className='menuhover_row'>
                                        <ul>
                                            <li className='menuhover_row-item'>
                                                <a href='' className='menuhover-link'>
                                                    Tất cả ngoại ngữ
                                                </a>
                                            </li>
                                            <li className='menuhover_row-item'>
                                                <a href='' className='menuhover-link'>
                                                    Tiếng hàn
                                                </a>
                                            </li>
                                            <li className='menuhover_row-item'>
                                                <a href='' className='menuhover-link'>
                                                    Tiếng anh
                                                </a>
                                            </li>
                                            <li className='menuhover_row-item'>
                                                <a href='' className='menuhover-link'>
                                                    Tiếng đức
                                                </a>
                                            </li>
                                            <li className='menuhover_row-item'>
                                                <a href='' className='menuhover-link'>
                                                    Tiếng trung
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className='content_category-list-item'>
                                <a className='content_category-list-item-link' href=''>
                                    <i className='fas fa-chart-line'></i>
                                    <p>Marketing</p>
                                </a>
                                <div className='menuhover'>
                                    <div className='menuhover_row'>
                                        <ul>
                                            <li className='menuhover_row-item'>
                                                <a href='' className='menuhover-link'>
                                                    Tất cả Marketing
                                                </a>
                                            </li>
                                            <li className='menuhover_row-item'>
                                                <a href='' className='menuhover-link'>
                                                    Facebook Marketing
                                                </a>
                                            </li>
                                            <li className='menuhover_row-item'>
                                                <a href='' className='menuhover-link'>
                                                    Zalo Marketing
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className='content_category-list-item'>
                                <a className='content_category-list-item-link' href=''>
                                    <i className='fas fa-desktop'></i>
                                    <p>Tin học văn phòng</p>
                                </a>
                                <div className='menuhover'>
                                    <div className='menuhover_row'>
                                        <ul>
                                            <li className='menuhover_row-item'>
                                                <a href='' className='menuhover-link'>
                                                    Tất cả tin học văn phòng
                                                </a>
                                            </li>
                                            <li className='menuhover_row-item'>
                                                <a href='' className='menuhover-link'>
                                                    Word
                                                </a>
                                            </li>
                                            <li className='menuhover_row-item'>
                                                <a href='' className='menuhover-link'>
                                                    Excel
                                                </a>
                                            </li>
                                            <li className='menuhover_row-item'>
                                                <a href='' className='menuhover-link'>
                                                    Kế toán
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className='content_category-list-item'>
                                <a className='content_category-list-item-link' href=''>
                                    <i className='fas fa-paint-brush'></i>
                                    <p>Thiết kế</p>
                                </a>
                                <div className='menuhover'>
                                    <div className='menuhover_row'>
                                        <ul>
                                            <li className='menuhover_row-item'>
                                                <a href='' className='menuhover-link'>
                                                    Tất cả ngoại ngữ
                                                </a>
                                            </li>
                                            <li className='menuhover_row-item'>
                                                <a href='' className='menuhover-link'>
                                                    Tiếng hàn
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className='content_category-list-item'>
                                <a className='content_category-list-item-link' href=''>
                                    <i className='fas fa-rocket'></i>
                                    <p>Kinh doanh</p>
                                </a>
                                <div className='menuhover'>
                                    <div className='menuhover_row'>
                                        <ul>
                                            <li className='menuhover_row-item'>
                                                <a href='' className='menuhover-link'>
                                                    Tất cả ngoại ngữ
                                                </a>
                                            </li>
                                            <li className='menuhover_row-item'>
                                                <a href='' className='menuhover-link'>
                                                    Tiếng hàn
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className='content_category-list-item'>
                                <a className='content_category-list-item-link' href=''>
                                    <i className='far fa-lightbulb'></i>
                                    <p>Phát triển cá nhân</p>
                                </a>
                                <div className='menuhover'>
                                    <div className='menuhover_row'>
                                        <ul>
                                            <li className='menuhover_row-item'>
                                                <a href='' className='menuhover-link'>
                                                    Tất cả ngoại ngữ
                                                </a>
                                            </li>
                                            <li className='menuhover_row-item'>
                                                <a href='' className='menuhover-link'>
                                                    Tiếng hàn
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className='content_category-list-item'>
                                <a className='content_category-list-item-link' href=''>
                                    <i className='fa fa-shopping-cart'></i>
                                    <p>Sales - Bán hàng</p>
                                </a>
                                <div className='menuhover'>
                                    <div className='menuhover_row'>
                                        <ul>
                                            <li className='menuhover_row-item'>
                                                <a href='' className='menuhover-link'>
                                                    Tất cả ngoại ngữ
                                                </a>
                                            </li>
                                            <li className='menuhover_row-item'>
                                                <a href='' className='menuhover-link'>
                                                    Tiếng hàn
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className='content_category-list-item'>
                                <a className='content_category-list-item-link' href=''>
                                    <i className='fa fa-code'></i>
                                    <p>Công nghệ thông tin</p>
                                </a>
                            </li>
                            <li className='content_category-list-item'>
                                <a className='content_category-list-item-link' href=''>
                                    <i className='fa fa-heartbeat'></i>
                                    <p>Sức khỏe - Giới tính</p>
                                </a>
                            </li>
                            <li className='content_category-list-item'>
                                <a className='content_category-list-item-link' href=''>
                                    <i className='fas fa-utensils'></i>
                                    <p> Phong cách sống</p>
                                </a>
                            </li>
                            <li className='content_category-list-item'>
                                <a className='content_category-list-item-link' href=''>
                                    <i className='fa fa-child'></i>
                                    <p>Nuôi dạy con</p>
                                </a>
                            </li>
                            <li className='content_category-list-item'>
                                <a className='content_category-list-item-link' href=''>
                                    <i className='fas fa-users'></i>
                                    <p>Hôn nhân và gia đình </p>
                                </a>
                            </li>
                            <li className='content_category-list-item'>
                                <a className='content_category-list-item-link' href=''>
                                    <i className='fas fa-camera'></i>
                                    <p>Nhíp ảnh, dựng phim</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='content_slider'>
                        <a href=''>
                            <img src={`${url_base_img}IA0qQah.jpg`} alt='' />
                        </a>
                    </div>
                    <div className='content_card'>
                        <div className='content_card-title'>
                            <h4>TOP BÁN CHẠY</h4>
                            <a className='content_card-title-link' href=''>
                                Xem thêm
                                <i className='fa fa-angle-double-right'></i>
                            </a>
                        </div>
                        <div className='content_card-chung'>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/imgtitle.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/topbanchay1.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/topbanchay3.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/topbanchay4.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/topbanchay5.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/topbanchay6.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or' />
                                                    <i className='fa fa-star co-or' />
                                                    <i className='fa fa-star co-or' />
                                                    <i className='fa fa-star co-or' />
                                                    <i className='fa fa-star co-or' />
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/topbanchay7.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/topbanchay8.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='content_card'>
                        <div className='content_card-title'>
                            <h4>SIÊU ƯU ĐÃI HÔM NAY</h4>
                            <a className='content_card-title-link' href=''>
                                Xem thêm
                                <i className='fa fa-angle-double-right'></i>
                            </a>
                        </div>
                        <div className='content_card-chung'>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/uudai1.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/uudai2.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/uudai3.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/uudai4.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/uudai5.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/uudai6.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/uudai7.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/uudai8.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='xem-them-khoa-hoc'>
                        <div className='cackhoahocchinh'>
                            <div className='title-news'>
                                <h4>Mới ra mắt</h4>
                                <a href=''>Xem Thêm</a>
                            </div>

                            <div className='cackhoahocchinh-chitiet'>
                                <a className='chitiet-link' href=''>
                                    <div className='chitiet-link-anh'>
                                        <img className='chitiet-link-anh-img' src='./img/ramat1.jpg' alt='' />
                                    </div>

                                    <div className='title-choanh'>
                                        <h3> Kỹ năng an toàn bảo mật thông tin cho nhân viên văn phòng </h3>
                                        <p>Nguyễn Khánh Tùng</p>
                                        <span className='giamgiakhoahoc'>
                                            <div className='p1'>
                                                299.000<sup>đ</sup>
                                            </div>
                                            <div className='p2'>
                                                399.000<sup>đ</sup>
                                            </div>
                                        </span>
                                    </div>
                                </a>
                                <a className='chitiet-link' href=''>
                                    <div className='chitiet-link-anh'>
                                        <img className='chitiet-link-anh-img' src='./img/ramat1.jpg' alt='' />
                                    </div>

                                    <div className='title-choanh'>
                                        <h3> Kỹ năng an toàn bảo mật thông tin cho nhân viên văn phòng </h3>
                                        <p>Nguyễn Khánh Tùng</p>
                                        <span className='giamgiakhoahoc'>
                                            <div className='p1'>
                                                299.000<sup>đ</sup>
                                            </div>
                                            <div className='p2'>
                                                399.000<sup>đ</sup>
                                            </div>
                                        </span>
                                    </div>
                                </a>
                                <a className='chitiet-link' href=''>
                                    <div className='chitiet-link-anh'>
                                        <img className='chitiet-link-anh-img' src='./img/ramat1.jpg' alt='' />
                                    </div>

                                    <div className='title-choanh'>
                                        <h3> Kỹ năng an toàn bảo mật thông tin cho nhân viên văn phòng </h3>
                                        <p>Nguyễn Khánh Tùng</p>
                                        <span className='giamgiakhoahoc'>
                                            <div className='p1'>
                                                299.000<sup>đ</sup>
                                            </div>
                                            <div className='p2'>
                                                399.000<sup>đ</sup>
                                            </div>
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className='cackhoahocchinh'>
                            <div className='title-news'>
                                <h4>Xem nhiều</h4>
                                <a href=''>Xem Thêm</a>
                            </div>

                            <div className='cackhoahocchinh-chitiet'>
                                <a className='chitiet-link' href=''>
                                    <div className='chitiet-link-anh'>
                                        <img className='chitiet-link-anh-img' src='./img/ramat1.jpg' alt='' />
                                    </div>

                                    <div className='title-choanh'>
                                        <h3> Kỹ năng an toàn bảo mật thông tin cho nhân viên văn phòng </h3>
                                        <p>Nguyễn Khánh Tùng</p>
                                        <span className='giamgiakhoahoc'>
                                            <div className='p1'>
                                                299.000<sup>đ</sup>
                                            </div>
                                            <div className='p2'>
                                                399.000<sup>đ</sup>
                                            </div>
                                        </span>
                                    </div>
                                </a>
                                <a className='chitiet-link' href=''>
                                    <div className='chitiet-link-anh'>
                                        <img className='chitiet-link-anh-img' src='./img/ramat1.jpg' alt='' />
                                    </div>

                                    <div className='title-choanh'>
                                        <h3> Kỹ năng an toàn bảo mật thông tin cho nhân viên văn phòng </h3>
                                        <p>Nguyễn Khánh Tùng</p>
                                        <span className='giamgiakhoahoc'>
                                            <div className='p1'>
                                                299.000<sup>đ</sup>
                                            </div>
                                            <div className='p2'>
                                                399.000<sup>đ</sup>
                                            </div>
                                        </span>
                                    </div>
                                </a>
                                <a className='chitiet-link' href=''>
                                    <div className='chitiet-link-anh'>
                                        <img className='chitiet-link-anh-img' src='./img/ramat1.jpg' alt='' />
                                    </div>

                                    <div className='title-choanh'>
                                        <h3> Kỹ năng an toàn bảo mật thông tin cho nhân viên văn phòng </h3>
                                        <p>Nguyễn Khánh Tùng</p>
                                        <span className='giamgiakhoahoc'>
                                            <div className='p1'>
                                                299.000<sup>đ</sup>
                                            </div>
                                            <div className='p2'>
                                                399.000<sup>đ</sup>
                                            </div>
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className='cackhoahocchinh'>
                            <div className='title-news'>
                                <h4>khóa học vip</h4>
                                <a href=''>Xem Thêm</a>
                            </div>

                            <div className='cackhoahocchinh-chitiet'>
                                <a className='chitiet-link' href=''>
                                    <div className='chitiet-link-anh'>
                                        <img className='chitiet-link-anh-img' src='./img/ramat1.jpg' alt='' />
                                    </div>

                                    <div className='title-choanh'>
                                        <h3> Kỹ năng an toàn bảo mật thông tin cho nhân viên văn phòng </h3>
                                        <p>Nguyễn Khánh Tùng</p>
                                        <span className='giamgiakhoahoc'>
                                            <div className='p1'>
                                                299.000<sup>đ</sup>
                                            </div>
                                            <div className='p2'>
                                                399.000<sup>đ</sup>
                                            </div>
                                        </span>
                                    </div>
                                </a>
                                <a className='chitiet-link' href=''>
                                    <div className='chitiet-link-anh'>
                                        <img className='chitiet-link-anh-img' src='./img/ramat1.jpg' alt='' />
                                    </div>

                                    <div className='title-choanh'>
                                        <h3> Kỹ năng an toàn bảo mật thông tin cho nhân viên văn phòng </h3>
                                        <p>Nguyễn Khánh Tùng</p>
                                        <span className='giamgiakhoahoc'>
                                            <div className='p1'>
                                                299.000<sup>đ</sup>
                                            </div>
                                            <div className='p2'>
                                                399.000<sup>đ</sup>
                                            </div>
                                        </span>
                                    </div>
                                </a>
                                <a className='chitiet-link' href=''>
                                    <div className='chitiet-link-anh'>
                                        <img className='chitiet-link-anh-img' src='./img/ramat1.jpg' alt='' />
                                    </div>

                                    <div className='title-choanh'>
                                        <h3> Kỹ năng an toàn bảo mật thông tin cho nhân viên văn phòng </h3>
                                        <p>Nguyễn Khánh Tùng</p>
                                        <span className='giamgiakhoahoc'>
                                            <div className='p1'>
                                                299.000<sup>đ</sup>
                                            </div>
                                            <div className='p2'>
                                                399.000<sup>đ</sup>
                                            </div>
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='content_card'>
                        <div className='content_card-title'>
                            <h4>Kinh doanh khởi nghiệp</h4>
                            <a className='content_card-title-link' href=''>
                                Xem thêm
                                <i className='fa fa-angle-double-right'></i>
                            </a>
                        </div>
                        <div className='content_card-chung'>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/uudai1.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/uudai2.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/uudai3.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/uudai4.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/uudai5.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/uudai6.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/uudai7.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='content_card-chung-item'>
                                <a className='content_card-chung-item-link' href=''>
                                    <span className='sale-off'>-22%</span>
                                    <div className='img-course'>
                                        <img className='img-course-tieubieu' src='./img/uudai8.jpg' alt='' />
                                    </div>
                                    <div className='content-title'>
                                        <h3 className='content-tltle-sourse'>Tập yoga cơ bản tại nhà với Nguyễn Hiếu</h3>
                                        <div className='name-gv'>
                                            <b>Nguyễn Hiếu</b>
                                            <span className='giamgia'>
                                                700.000 <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='saovagiatien'>
                                        <div className='chuasao'>
                                            <p>
                                                <span className='chuanamsao'>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    <i className='fa fa-star co-or'></i>
                                                    (5)
                                                </span>
                                            </p>
                                            <div className='chuagiatien'>
                                                <span className='chuagiatien-price'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ContentUNICAView.propTypes = {};

ContentUNICAView.defaultProps = {};

export default ContentUNICAView;
