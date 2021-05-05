/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 05/05/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
module.exports = {
    create: function (con, querySQL, callback) {
        con.query(`INSERT INTO study_program SET ` + querySQL, callback);
    },
    update: function (con, id, querySQL, callback) {
        const query = `UPDATE study_program SET ${querySQL} WHERE id = ${id}`;
        con.query(query, callback);
    },
    getList: function (con, querySQL, callback) {
        const query = querySQL.length > 0 ? `SELECT * FROM study_program WHERE ` + querySQL : `SELECT * FROM study_program`;
        console.log('query', query); // MongLV log fix bug
        con.query(query, callback);
    },
    getByName: function (con, name, callback) {
        con.query(`SELECT * FROM product WHERE name = '${name}'`, callback);
    },
};
