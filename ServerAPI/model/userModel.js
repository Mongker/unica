/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 22/04/2021
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
// const moment = require('moment'); // require
// const mysqlTimestamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss').toString();
// var currentTimeInSeconds=Math.floor(Date.now()/1000); //unix timestamp in seconds
// var currentTimeInMilliseconds=Date.now(); // unix timestamp in milliseconds
module.exports = {
    getList: function (con, role, callback) {
        const query = role ? `SELECT * FROM user WHERE role='${role.toString()}'` : `SELECT * FROM user`;
        con.query(query, callback);
    },

    checkEmail: function (con, data, callback) {
        con.query(`SELECT * FROM user WHERE email = '${data.email}'`, callback);
    },

    // checkPassWord: function (con, data, callback) {
    //     con.query(`SELECT * FROM user WHERE email = '${data.email}'`, callback);
    // },

    create: function (con, data, callback) {
        con.query(
            `INSERT INTO user SET name = '${data.name}', 
                phone = '${data.phone}', 
                email = '${data.email}', 
                address = '${data.address}',
                info = '${data.info}', 
                position = '${data.position}', 
                role = '${data.role}', 
                coin = '${data.coin}', 
                password = '${data.password}', 
                status_user = '${data.status_user}'
                `,
            callback,
        );
    },

    // update: function (con, data, id, callback) {
    //     con.query(
    //         `UPDATE biodata SET
    //   nama = '${data.nama}',
    //   alamat = '${data.alamat}'
    //   WHERE id_biodata = ${id}`,
    //         callback,
    //     );
    // },
    //
    // destroy: function (con, id, callback) {
    //     con.query(`DELETE FROM biodata WHERE id_biodata = ${id}`, callback);
    // },
};
