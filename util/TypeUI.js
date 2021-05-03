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
};
const url_api = {
    USER: '/user',
    CATEGORY: '/category',
};
export { arrTypeUser, typeStore, url_api };
