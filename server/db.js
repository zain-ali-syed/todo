const mongoose = require('mongoose');

//connect to mongodb
mongoose.connect('mongodb://root:zain123@ds237748.mlab.com:37748/todos_db', { useNewUrlParser: true }, () => console.log("connected"))
mongoose.Promise = global.Promise;
