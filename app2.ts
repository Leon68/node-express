import express from 'express';
const app = express();

app.get('/', function (req, res) {
    res.send('你好??????');
});

let port = '4000'
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
