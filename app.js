const 	bodyParser 	= require('body-parser');
		express 	= require('express');
		ejs			= require('ejs');

const port 	= process.env.PORT || 3000;
var	app 	= express();

app.set('view engine', 'ejs');

app.listen(port, () => {
	console.log(`The server is on port: ` +  port);
});