let express = require('express');
let fs = require('fs');
let app = express();
app.get('/', (req, res) => {
    res.send('OK');
});

app.post('/userList', (req, res) => {
    fs.readFile('./commodityData.json', (err, data) => {
        if (err) {
            return console.error(err);
        }
        data = JSON.parse(data.toString());
        res.send(data.data);
    })
});

app.post('/add', (req, res) => {
    fs.readFile('./commodityData.json', (err, data) => {
        if (err) {
            return console.error(err);
        }
        req.on('data', function (parms) {
            let request = JSON.parse(parms.toString());
            data = JSON.parse(data.toString());
            let dataList = data.data;
            let count = data.count + 1;
            request.id=count;
            dataList.push(request);
            data.count = count;
            data.data = dataList;
            let str = JSON.stringify(data);
            add(str,res);
        });
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

add = (str,res) => {
    fs.writeFile('./commodityData.json', str, function (err) {
        if (err) {
            console.error(err);
        }
        res.send({
            "flag": 1,
            "message": "新增成功"
        });
    })
};


app.all('*', (req, res) => {
    res.setHeader('content-type', 'text/html;charset=utf-8');
    res.send({"message": "请求的路径不存在"});
});

app.listen(3003);










