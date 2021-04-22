/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 22/04/2021
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

const ProductModel = require('../model/productModel');

module.exports = {
    CREATE: function(req, res) {
        ProductModel.create(req.con, req.body, function(err) {
            if(err) return res.status(404).json({ message: err })
            return res.status(200).json({ message: 'OK' });
        })
    },
};
