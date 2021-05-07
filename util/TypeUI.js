/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 01/05/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

const arrTypeUser = ['id', 'name', 'phone', 'email', 'address', 'info', 'position', 'role', 'coin', 'password', 'status_user', 'create'];
const typeStore = {
    USER: 'users',
    CATEGORY: 'category',
    PRODUCT: 'product',
    STUDY_PROGRAM: 'studyprogram',
    VIDEO: 'video',
};
const url_api = {
    USER: '/user',
    CATEGORY: '/category',
    PRODUCT: '/product',
    STUDY_PROGRAM: '/studyprogram',
    VIDEO: '/video',
};
const url_base = 'http://localhost:2020/api';
const url_base_img = `${url_base}/file/`;
export { arrTypeUser, typeStore, url_api, url_base_img, url_base };
