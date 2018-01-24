var express = require('express');
var bodyParser = require('body-parser')
var mongoose = require("mongoose");
var cookieParser = require("cookie-parser");

mongoose.connect("mongodb://localhost:27017/user");
var db = mongoose.connection;

var app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

db.on("connected", function() {
	console.log("链接成功")
})

db.on("disconnected", function() {
	console.log("断开连接")
})

var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: String,
	psw: String
}, {
	collection: "h5-user"
});

var User = mongoose.model("User", userSchema);
//注册
app.get("/reg", function(req, res) {
	//需要学生的姓名和年龄
	console.log('注册');
    console.log(req.query);
	var username = req.query.username;
	var psw = req.query.psw;
	var user = new User({
		username,
		psw
	});
	user.save(function(err, data, status) {
		if(!err) {
			res.send("注册成功")
		} else {
			res.send("注册失败")
		}
	});
})
//登录
app.post("/login", function(req, res) {
	var username = req.body.username;
	var psw = req.body.psw;
	if(username) {
		//条件查询
		User.find({
			username
		}, function(err, data, status) {
			if(!err && psw == data[0].psw) {
				console.log(req.cookies)
				res.status(200).json({
					code:1,
					msg:'登陆成功'
				})
			} else {
				res.send("帐号或者密码错误");
			}
		});
	}
})

app.listen(3000,()=>{
	console.log('go go go')
})
