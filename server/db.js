const mongoose = require('mongoose');

//please enter your username(yourDBUsername) and password(yourDBPassword) below
//also replace the path after the '@' with your url to your DB

//connect to mongodb
mongoose.connect('mongodb://yourDBUsername:yourDBPassword@ds237748.mlab.com:37748/todos_db', { useNewUrlParser: true }, () => console.log("connected"))
mongoose.Promise = global.Promise;
