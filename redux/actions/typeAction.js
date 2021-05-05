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
    PRODUCT: {
        GET_LIST: 'GET_LIST_PRODUCT',
        GET_LOGIC: 'GET_PRODUCT_LOGIC',
        DEL: 'DEL_CATEGORY',
        DEL_LOGIC: 'DEL_PRODUCT_LOGIC',
        POST: 'POT_PRODUCT',
        POST_LOGIC: 'POT_PRODUCT_LOGIC',
        PUT: 'PUT_PRODUCT',
        PUT_LOGIC: 'PUT_PRODUCT_LOGIC',
    },
    STUDY_PROGRAM: {
        GET_LIST: 'GET_LIST_STUDY_PROGRAM',
        GET_LOGIC: 'GET_STUDY_PROGRAM_LOGIC',
        DEL: 'DEL_CATEGORY',
        DEL_LOGIC: 'DEL_STUDY_PROGRAM_LOGIC',
        POST: 'POT_STUDY_PROGRAM',
        POST_LOGIC: 'POT_STUDY_PROGRAM_LOGIC',
        PUT: 'PUT_STUDY_PROGRAM',
        PUT_LOGIC: 'PUT_STUDY_PROGRAM_LOGIC',
    },
};

export default typeAction;
