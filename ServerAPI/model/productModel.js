/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 22/04/2021
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

module.exports = {
    create: function (con, querySQL, callback) {
        con.query(`INSERT INTO product SET ` + querySQL, callback);
    },
    update: function (con, data, callback) {
        con.query(`UPDATE product SET rootId = '${data.rootId}',status = '${data.status}',name = '${data.name}', description = '${data.description}', sort_order = '${data.sort_order}' WHERE id = '${data.id}'`, callback);
    },
    getList: function (con, callback) {
        con.query('SELECT * FROM product', callback);
    },
    getByName: function (con, name, callback) {
        con.query(`SELECT * FROM product WHERE name = '${name}'`, callback);
    },
};
