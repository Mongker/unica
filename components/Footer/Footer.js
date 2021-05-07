import React from 'react';
import style from './style.module.scss';
// import PropTypes from 'prop-types';

function Footer() {
    return (
        <div>
            <div className={style.footer1}>
                <div className={style.container}>
                    <div className={style.row}>
                        <div className={style.cot_1}>
                            <span>
                                <a>
                                    <img src={'/media/images_v2018/logo-unica.png'} />
                                </a>
                            </span>
                            <ul>
                                <li>
                                    <div>
                                        <span style={{ color: 'white' }}> 247 Cầu Giấy, Hà Nội</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span style={{ color: 'white' }}> P503, 20 Phan Đình Giót, P.2, Q. Tân Bình</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span style={{ fontSize: '20px', color: 'white' }}> 19001568</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span style={{ color: 'white' }}> 090 488 6095</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span style={{ color: 'white' }}> cskh@unica.vn </span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span style={{ color: 'white' }}> 8:00 - 22:00 </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={style.cot_2}>
                            <h4 className={style.title_footer}>Về Unica</h4>
                            <ul>
                                <li>
                                    <a>Giới thiệu về Unica</a>
                                </li>
                                <li>
                                    <a>Câu hỏi thường gặp</a>
                                </li>
                                <li>
                                    <a>Điều khoản dịch vụ</a>
                                </li>
                                <li>
                                    <a>Hướng dẫn thanh toán</a>
                                </li>
                                <li>
                                    <a>Kích hoạt khóa học</a>
                                </li>
                                <li>
                                    <a>Góc chia sẻ</a>
                                </li>
                                <li>
                                    <a>Chính sách bảo mật</a>
                                </li>
                                <li>
                                    <a>Chính sách thẻ học</a>
                                </li>
                            </ul>
                        </div>
                        <div className={style.cot_2}>
                            <h4 className={style.title_footer}>Hợp tác liên kết</h4>
                            <ul>
                                <li>
                                    <a>Đăng ký giảng viên</a>
                                </li>
                                <li>
                                    <a>Giải pháp e-learning</a>
                                </li>
                                <li>
                                    <a>Đào tạo doanh nghiệp</a>
                                </li>
                                <li>
                                    <a>Thẻ học online</a>
                                </li>
                                <li>
                                    <a>Affiliate</a>
                                </li>
                                <li>
                                    <a>Agency</a>
                                </li>
                                <li>
                                    <a>Chúng tôi đang tuyển dụng</a>
                                </li>
                            </ul>
                        </div>
                        <div className={style.cot_2}>
                            <h4 className={style.title_footer}>Tải app Unica</h4>
                            <ul>
                                <li>
                                    <a>
                                        <img src={'https://unica.vn/media/images_v2018/appstore.png'} />
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img src={'https://unica.vn/media/images_v2018/playstore.png'} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.footer2}>
                <div className={style.container}>
                    <div className={style.row}>
                        <div style={{ width: 800, color: 'white', marginLeft: 100 }}>© Công ty cổ phần đào tạo trực tuyến Unica - ĐKKD: 0107695756 - Khóa học trực tuyến dành cho người đi làm</div>
                        <div>
                            <img src={'https://unica.vn/media/images_v2017/bct.png'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
