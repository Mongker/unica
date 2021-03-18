/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 19/03/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
// import PropTypes from 'prop-types';
import style from 'styles/login.module.css'
function Login() {
    return(
        <div className={style.limiter}>
            <div className={style.container_login}>
                <div className={`${style.text_center} ${style.form_group}`}>
                    <img src={'https://id.unica.vn/images/logo.png'} alt={'logo'} />
                </div>
                <div className={style.login}>
                    <div className={style.form_login}>
                        <div className={style.title}>
                            <h3>ĐĂNG NHẬP</h3>
                        </div>
                        <div className={style.wrap_input}>
                            <input className={style.input0} />
                        </div>
                        <div className={style.wrap_input}>
                            <input className={style.input0} />
                        </div>
                        <div className={style.title_login}>
                            Đăng nhập
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
