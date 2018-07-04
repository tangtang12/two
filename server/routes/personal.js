const express = require('express'),
    route = express.Router(), //express中的路由
    {
        writeFile
    } = require('../utils/promiseFS'), //文件的读取操作
    PERSONAL_PATH = './json/personal.json',
    utils = require('../utils/utils');

//=>把临时存储在SESSION中的STORE信息，增加到JSON文件中（登录后）
function add_temp_store(req, res) {
    let storeList = req.session.storeList || [];
    if (storeList.length === 0) return;
    storeList.map(item => {
        return utils.ADD_STORE(req, res, parseFloat(item));
    });
    Promise.all(storeList).then(() => {
        //...
    });
    req.session.storeList = [];
}

route.post('/login', (req, res) => {
    let {
        name,
        password
    } = req.body || {};
    //把密码二次加密：因为注册的时候存储到JSON的密码是经过二次加密的，所有我们登录校验的时候也需要把密码二次加密，只有这样才会和JSON中的匹配
    password = password.substr(4, 24).split('').reverse().join('');
    //之前读取的personal的信息：登录校验就是把用户传递的信息到总数据查找，找到就代表登录成功...
    const item = req.personalDATA.find(item => {
        //支持用户名传递姓名、邮箱、电话
        return (item.name === name || item.email === name || item.phone === name) && item.password === password;
    });
    //登录成功
    if (item) {
        //把当前登录的ID存储到session上(如果session上有用户信息就代表登录成功，反之登录失败)
        req.session.personID = parseFloat(item.id);
        add_temp_store(req, res); //登录之后把session中的购物车信息写入文件中
        res.send({
            code: 0,
            msg: 'OK!'
        });
        return;
    }
    res.send({
        code: 1,
        msg: 'NO!'
    });
});

route.get('/login', (req, res) => {
    //是否登录就看session中是否存在personID(后台服务重启：session消失)
    const personID = req.session.personID;
    if (personID) {
        res.send({
            code: 0,
            msg: 'OK!'
        });
        return;
    }
    res.send({
        code: 1,
        msg: 'NO!'
    });
});

route.post('/register', (req, res) => {
    //先准备一套完成的新用户信息模型
    let personInfo = {
        id: req.personalDATA.length === 0 ? 1 : (parseFloat(req.personalDATA[req.personalDATA.length - 1].id) + 1), //用户的ID是在当前用户的最大ID基础上累加1
        name: (new Date()).getTime(),
        email: '',
        phone: '',
        password: '8376ac810bb9f231d28fcf1f'
    };
    //把用户传递的密码二次加密
    req.body.password = req.body.password.substr(4, 24).split('').reverse().join('');
    //把用户传递的信息替换用户模型中的信息，此时personInfo就是新用户的所有信息
    personInfo = { ...personInfo,
        ...req.body
    };
    req.personalDATA.push(personInfo);
    //一定要把最新的原始数据，重新写入到JSON文件中，这样才能存储
    writeFile(PERSONAL_PATH, req.personalDATA).then(() => {
        //注册成功也代表登录成功
        req.session.personID = parseFloat(personInfo.id);
        add_temp_store(req, res);
        res.send({
            code: 0,
            msg: 'OK!'
        });
    }).catch(() => {
        res.send({
            code: 1,
            msg: 'NO!'
        });
    });
});

route.get('/info', (req, res) => {
    //获取当前登者信息，从session中获取到登录者的编号
    const personID = req.session.personID;
    if (personID) {
        //在所有的数据中筛选出和登录者编号相同的哪一项
        let personInfo = req.personalDATA.find(item => {
            return parseFloat(item.id) === personID;
        });
        personInfo.password = null; //返回的信息中不要带密码
        res.send({
            code: 0,
            msg: 'OK!',
            data: personInfo
        });
        return;
    }
    res.send({
        code: 1,
        msg: 'NO!',
        data: null
    });
});

route.get('/out', (req, res) => {
    //退出登录就是干掉session
    req.session.personID = null;
    res.send({
        code: 0,
        msg: 'OK!'
    });
});

module.exports = route;