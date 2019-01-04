let express = require('express');
let fs = require('fs');
let app = express();
app.get('/', (req, res) => {
    res.end('OK');
});

app.post('/userList', (req, res) => {
    fs.readFile('./commodityData.json', (err, data) => {
        if (err) {
            return console.error(err);
        }
        console.log(data);
        res.end(data);
        /*let person = data.toString();//将二进制的数据转换为字符串
        person = JSON.parse(person);//将字符串转换为json对象
        person.data.push(params);//将传来的对象push进数组对象中
        person.total = person.data.length;//定义一下总条数，为以后的分页打基础
        console.log(person.data);
        let str = JSON.stringify(person);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
        fs.writeFile('./mock/person.json',str,function(err){
            if(err){
                console.error(err);
            }
            console.log('----------新增成功-------------');
        })*/
    })
});

app.post('/add', (req, res) => {
    res.end('post about')
});
app.put('/about', (req, res) => {
    res.end('post about')
});
app.delete('/about', (req, res) => {
    res.end('post about')
});

app.all('*', (req, res) => {
    res.setHeader('content-type', 'text/html;charset=utf-8');
    res.end([
        {"message": "请求的路径不存在"}
    ]);
});

app.listen(3003);










