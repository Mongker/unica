/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 04/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

const typeAction = {
    CATEGORY: {
        GET: 'GET_CATEGORY',
        GET_LOGIC: 'GET_CATEGORY_LOGIC',
        DEL: 'DEL_CATEGORY',
        DEL_LOGIC: 'DEL_CATEGORY_LOGIC',
        POST: 'POT_CATEGORY',
        POST_LOGIC: 'POT_CATEGORY_LOGIC',
        PUT: 'PUT_CATEGORY',
        PUT_LOGIC: 'PUT_CATEGORY_LOGIC',
    },
    USER: {
        GET: 'GET_USER',
        GET_LOGIC: 'GET_USER',
        GET_LIST: 'GET_LIST_USER',
        GET_LIST_LOGIC: 'GET_LIST_USER_LOGIC',
        DEL: 'DEL_USER',
        DEL_LOGIC: 'DEL_USER_LOGIC',
        POST: 'POT_USER',
        POST_LOGIC: 'POT_USER_LOGIC',
        PUT: 'PUT_USER',
        PUT_LOGIC: 'PUT_USER_LOGIC',
    },
};

export default typeAction;
