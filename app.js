var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var history = require('connect-history-api-fallback')
// 导入配置文件和路由
var config = require('./config.js')
var routes = require('./routes/index');
var app = express();


// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(history({
    index: '/index.html'
}))

// 设置dist文件夹为存放静态文件的目录。
app.use('/', express.static(__dirname + '/dist'));

// 加载解析json的中间件。
app.use(bodyParser.json());

// 路由控制器
app.use('/api', routes)

app.listen(config.port, () => {
		console.log(`listening ${config.port}`)
	})

/*
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})
*/
// // 生产环境下的错误处理器，将错误信息渲染error模版并显示到浏览器中
// app.use(function(err, req, res, next) {
// 	// set locals, only providing error in development
// 	res.locals.message = err.message;
// 	res.locals.error = req.app.get('env') === 'development' ? err : {};

// 	// render the error page
// 	res.status(err.status || 500);
// 	res.render('error');
// });

module.exports = app;