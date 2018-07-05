const express = require('express'),
    route = express.Router();



route.get('/info', (req, res) => {
    //客户端会传一个课程id进来，我们在所有的课程当中找到ID相同的信息，返回
    let {
        id
    } = req.query; //get请求问号传参都在req.query上
    id = parseFloat(id);
    let item = req.courseDATA.find(item => {
        return parseFloat(item.id) === id;
    });
    if (item) {
        res.send({
            code: 0,
            msg: 'OK!',
            data: item
        });
        return;
    }
    res.send({
        code: 1,
        msg: 'NO!',
        data: null
    });
});

route.get('/list', (req, res) => {
    //接受客户端传递的3个值，不传的给默认值:limit每页展示条数page是第几页，type是筛选的类型
    let {
        limit = 10, page = 1, type = 'all'
    } = req.query;
    limit = parseFloat(limit);
    page = parseFloat(page);

    //=>筛选：先按照传递的类型把数据筛选一轮(ALL是所有不用筛选)
    if (type !== 'all') {
        req.courseDATA = req.courseDATA.filter(item => {
            return item.type === type;
        });
    }

    //=>分页处理:就是在所有的筛选的数据中找到某一页的那几条数据，把这几条返回客户端即可
    let total = Math.ceil(req.courseDATA.length / limit), //总页数，向上取整
        result = [];
    /*
    page=1 返回索引0~9
    page=2 返回索引10~19
    page=n 返回索引(n-1)*limit~n*limit-1
     */

    if (page <= total) {
        for (let i = (page - 1) * limit; i <= (page * limit - 1); i++) {
            let item = req.courseDATA[i];
            if (!item) break;
            result.push(item);
        }
    }
    res.send({
        code: 0,
        msg: 'OK!',
        total,
        limit,
        page,
        data: result
    });
});

module.exports = route;