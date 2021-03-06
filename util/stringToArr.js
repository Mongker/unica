/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 13/05/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

const stringToArr = (arr, type) => {
    if (type) {
        const new_arr = arr.map((item) => {
            item[type] = JSON.parse(item[type]);
            return item;
        });

        return new_arr;
    } else return arr;
};
export default stringToArr;
