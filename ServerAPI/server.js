const express = require('express');
const app = express();
const methodOverride = require('method-override');
const path = require('path');
const con = require('./config/db.js');
const bodyParser = require('body-parser');
const cors = require('cors');

// include router
const biodataRouter = require('./routes/biodataRouter');
const uploadRouter = require('./routes/uploadRouter');
const UserRouter = require('./routes/userRouter');
const CategoryRouter = require('./routes/categoryRouter');
const ProductRouter = require('./routes/productRouter');

// Using pug template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// connecting route to database
app.use(function (req, res, next) {
    req.con = con;
    next();
});

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
};
// app.use(cors(corsOptions));
// parsing body request
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// routing
app.use('/biodata', biodataRouter);
app.use('/api/file', uploadRouter); // Thao tác với dữ liệu người dùng
app.use(UserRouter);
app.use(CategoryRouter);
app.use(ProductRouter);

const PORT = 2020;
// starting server
app.listen(2020, function () {
    console.log(`server listening on port ${2020}`);
});
