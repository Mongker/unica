/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 16/04/2021
 * @email: levanmong.dola.99@gmail.com
 * @phone: +84373668113
 * @slogan: "Mọi thứ đều bắt đầu từ việc nhỏ, những khát vọng phải lớn"
 */

import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
// styles
import styles from './styles/index.module.css';
function HeaderUNICAView(props) {
    return (
        <div className={styles.header}>
            <div className={styles.grid}>
                <div className={styles.header_grid}>
                    <div className={styles.header_logo}>
                        <Image width={140} height={33} src={'/logo2.png'} alt={'logo'} styles={{backgroundColor: 'red'}} />
                    </div>
                    <div className={styles.header_input}>
                        <form className={styles['header_input-form']} action=''>
                            <input className={styles['header_input-input']} type='text' placeholder='Tìm khóa học, giảng viên' />
                            <button className={styles['header_input-button']} type='submit'>
                                <SearchOutlined />
                            </button>
                        </form>
                    </div>
                    <div className={styles.header_giohang}>
                        <a className={styles['header_giohang-link-kichhoat']} href=''>
                            <p>Kích hoạt khóa học</p>
                            <i className='fa fa-unlock-alt' />
                        </a>
                        <a className={styles['header_giohang-icon']} href=''>
                            <ShoppingCartOutlined styles={{color: 'red'}} />
                        </a>
                        <ul className={styles['header_giohang-list']}>
                            <li className={styles['header_giohang-list-item']}>
                                <a className={styles['list-link-dn']} href=''>
                                    ĐĂNG NHẬP
                                </a>
                            </li>
                            <li className={classNames(styles['header_giohang-list-item'], styles['dk'])}>
                                <a className={styles['list-link-dk']} href=''>
                                    ĐĂNG KÝ
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

HeaderUNICAView.propTypes = {};

HeaderUNICAView.defaultProps = {};

export default HeaderUNICAView;
