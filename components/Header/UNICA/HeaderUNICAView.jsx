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
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SearchOutlined, ShoppingCartOutlined, UnlockOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

// context
import ContextApp from 'util/ContextApp';

// util
import { url_base_img } from 'util/TypeUI';
// styles
import styles from './styles/index.module.css';

function HeaderUNICAView(props) {
    const router = useRouter();

    const { user } = React.useContext(ContextApp);
    const handleClickLogin = (e) => {
        e.preventDefault();
        router.push('/login');
    };
    const handleClickSingUp = (e) => {
        e.preventDefault();
        router.push('/singup');
    };
    const handleClickGoAdmin = (e) => {
        e.preventDefault();
        router.push('/admin');
    };

    return (
        <div className={styles.header}>
            <div className={styles.grid}>
                <div className={styles.header_grid}>
                    <div className={styles.header_logo}>
                        <Image width={140} height={33} src={'/logo2.png'} alt={'logo'} styles={{ backgroundColor: 'red' }} />
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
                            <UnlockOutlined />
                        </a>
                        <a className={styles['header_giohang-icon']} href=''>
                            <ShoppingCartOutlined style={{ color: 'red', margin: '10px', fontSize: '25px' }} />
                        </a>
                        <ul className={styles['header_giohang-list']}>
                            {user && typeof user === 'object' ? (
                                <React.Fragment>
                                    <div className={'info_user'}>
                                        <img src={`${url_base_img}765-default-avatar.png`} alt='ssss' style={{ borderRadius: '100%', width: 30, height: 30 }} />
                                        <p style={{ color: 'red', fontSize: 20, marginLeft: 5, marginRight: 5 }}>{user.email}</p>
                                        <p style={{ marginRight: 5 }}>({user.role})</p>
                                    </div>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <li className={styles['header_giohang-list-item']}>
                                        <a className={styles['list-link-dn']} onClick={handleClickLogin}>
                                            ĐĂNG NHẬP
                                        </a>
                                    </li>
                                    <li className={classNames(styles['header_giohang-list-item'], styles['dk'])}>
                                        <a className={styles['list-link-dk']} onClick={handleClickSingUp}>
                                            ĐĂNG KÝ
                                        </a>
                                    </li>
                                </React.Fragment>
                            )}
                            {user && user.role !== 'user' && (
                                <li className={classNames(styles['header_giohang-list-item'], styles['dk'])}>
                                    <a className={styles['list-link-dk']} onClick={handleClickGoAdmin}>
                                        Quản lý khóa học
                                    </a>
                                </li>
                            )}
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
