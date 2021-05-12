/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 12/05/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import style from '../style.module.scss';
import { Button } from 'antd';
// import PropTypes from 'prop-types';

function MyVideo() {
    return (
        <div className={style.content_main_user}>
            <div className={style.container}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 20,
                    }}
                >
                    <span>
                        Chào mừng Lê Văn MONG đến với học viện Online Unica. Nơi bạn có thể học tập, rèn luyện các kỹ
                        năng thông qua hơn 2.000 khóa học online được biên tập cẩn thận, chu đáo.
                        <br /> Bạn muốn tìm kiếm khóa học phù hợp? hãy cho chúng tôi biết nhu cầu và mong muốn của bạn
                        nhé
                    </span>
                    <div className={style.div_goi_y}>
                        <Button className={style.btn_goi_y}>Gợi ý khóa học cho tôi</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

MyVideo.propTypes = {};

MyVideo.defaultProps = {};

export default MyVideo;
