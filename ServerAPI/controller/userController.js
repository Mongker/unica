/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 22/04/2021
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

const UserModel = require('../model/userModel');

module.exports = {
    // Đăng nhập
    LOGIN: function (req, res) {
        UserModel.checkEmail(req.con, req.body, function (err, rows) {
            if(err) return res.status(404).json({ message: err })
            if(rows.length > 0) {
                const dataUser = rows[0];
                console.log('dataUser', dataUser);
                console.log('dataUser.password', dataUser.password);
                console.log('req.body.password', req.body.password);
                if(dataUser.password === req.body.password) {
                    return res.status(200).json({ message: 'OK', user: dataUser });
                } else {
                    return res.status(202).json({message: 'FALSE PASSWORD'})
                }
            } else return res.status(202).json({message: 'FALSE EMAIL'})
        });
    },

    // Tạo tài khoản
    CREATE: function (req, res) {
        const {name, phone, email, address, info, position, role, coin, password, status_user} = req.body;
        const data = {
            "name": name || "",
            "phone": phone || "",
            "email": email,
            "address": address || "",
            "info": info || '{}',
            "position": 'Học viên',
            "role": 'user', // Khởi tạo mặc định là user => quản trị viên sẽ xét thêm cho
            "coin": "0",
            "password": password,
            "status_user": "1"
        }
        UserModel.checkEmail(req.con, data, function (err, rows) {
            if(err) return res.status(404).json({ message: err })
            if(rows.length > 0) {
                return res.status(200).json({ message: 'LIMIT'});
            } else {
                UserModel.create(req.con, data, function(err) {
                    if(err) return res.status(404).json({ message: err });
                    UserModel.checkEmail(req.con, data, function (err, rows) {
                        if(err) return res.status(404).json({ message: err })
                        if(rows.length > 0) {
                            const dataUser = rows[0];
                            if(dataUser.password === req.body.password) {
                                return res.status(200).json({ message: 'OK', user: dataUser });
                            } else {
                                return res.status(202).json({message: 'FALSE PASSWORD'})
                            }
                        } else return res.status(202).json({message: 'FALSE EMAIL'})
                    })
                })
            }
        });
    },

    // Lấy danh sách người dùng theo role
    GET_LIST_ROLE: function (req, res) {
        const role = req.body.role;
        console.log('role', role);
        if(role) {
            UserModel.getList_Role(req.con, role, function (err, rows) {
                let rowNew = [];
                rows.map((item) => {
                    delete item.password;
                    rowNew.push({...item});
                })
                return res.status(200).json({ message: 'OK', users: rowNew });
            })
        } else {
            return res.status(200).json({ message: 'FALSE ROLE'});
        }
    }
};
