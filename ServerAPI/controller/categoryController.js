/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 22/04/2021
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

const CategoryModel = require('../model/categoryModel');

module.exports = {
    CREATE: function(req, res) {
        CategoryModel.create(req.con, req.body, function(err) {
            if(err) return res.status(404).json({ message: err })
            return res.status(200).json({ message: 'OK' });
        })
    },
    UPDATE: function(req, res) {
        CategoryModel.update(req.con, req.body, function(err) {
            if(err) return res.status(404).json({ message: err })
            return res.status(200).json({ message: 'OK' });
        })
    },
    GET_LIST: function(req, res) {
        CategoryModel.getList(req.con, function(err, row) {
            if(err) return res.status(404).json({ message: err })
            return res.status(200).json({ message: 'OK', categories: row });
        });
    }
};
