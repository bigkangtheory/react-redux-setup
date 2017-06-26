const express = require('express');
const path = require('path');

//Creating an instance of our server
const app = express();

//Store compiled version of our website
//A folder that express is always serving up
app.use(express.static(path.join(__dirname, '../client/public')));

app.use('/*', (req, res)=> {
	res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(2020, () => {
	console.log('listening on 2020');
});
