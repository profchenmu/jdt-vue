var express = require('express');
var expressproxy = require('express-http-proxy');
var path = require('path');
var app = express();
var fs = require('fs');
var api = require('./configs/Api');
var _tempArray = Object.values(api), tempArray = [];
_tempArray.map((e,i)=>{
	for(let key in e){
		let tempObj = {};
		tempObj[key] = e[key];
		tempArray.push(tempObj);
	}
});


app.set('views', path.join(__dirname + '/views'));
app.engine('.html', require('ejs').__express)
app.set('view engine', 'html')

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};
app.use(allowCrossDomain);

app.use('/jdt-web/', expressproxy('jdt-uat.e-hqins.com', {
    proxyReqPathResolver: function(req,res) {
        return '/jdt-web' + require('url').parse(req.url).path;
    },
    userResDecorator: function(proxyRes, proxyResData, userReq, userRes) {
        let pathToFile, infos;
        tempArray.forEach((e, i)=>{
        	if(Object.values(e)[0] == userReq.url){
        		pathToFile = `./server/apiDatas/${Object.keys(e)[0]}.json`;
        		infos = proxyResData.toString('utf8');
        		fs.writeFile(pathToFile, infos, (err)=>{
        			// console.log(pathToFile+infos)
        		});
        	}
        });
        
        return JSON.parse(proxyResData.toString('utf8'));
    }
}));

app.use("/miAssets/",express.static("views/miAssets"));
app.use("/common/",express.static("views/common"));
app.use("/sign/",express.static("views/sign"));
app.get('/sign.html', function (req, res, next) {
    res.render('sign');
});
app.get('*', function (req, res, next) {
    res.render('index');
});
app.listen(9000, function(){
    console.log('Demo server on http://localhost:9000');
})