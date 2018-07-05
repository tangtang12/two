const express = require('express'),
    route = express.Router(),
    {
        writeFile
    } = require('../utils/promiseFS'),
    STORE_PATH = './json/store.json',
    utils = require('../utils/utils');

//增加购物车信息
route.post('/add', (req, res) => {
    let personID = req.session.personID, //登录用户得ID
        {id,num
        } = req.body;
   let shopId = parseFloat(id)
       num=parseFloat(num);

    //=>已经登录状态下，把信息直接存储到JSON中即可(用户在其他平台上登录，也可以从JSON中获取数据，实现信息跨平台)
    if (personID) {
        utils.ADD_STORE(req, res, {shopId,num}).then(() => {
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
        return;
    }

    //=>未登录状态下，临时存储到SESSION中，等到下一次登录成功，直接把信息存储到文件中（并且清空SESSION中的信息）
    !req.session.storeList ? req.session.storeList = [] : null;
    req.session.storeList.push(id);
    res.send({
        code: 0,
        msg: 'OK!'
    });
});

route.post('/remove', (req, res) => {
    let personID = req.session.personID,
        {
            id = 0
        } = req.body;
    id = parseFloat(id);

    if (personID) {
        req.storeDATA = req.storeDATA.filter(item => {
            return !(parseFloat(item.id) === id && parseFloat(item.personID) === personID);
        });
        writeFile(STORE_PATH, req.storeDATA).then(() => {
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
        return;
    }

    !req.session.storeList ? req.session.storeList = [] : null;
    req.session.storeList = req.session.storeList.filter(item => {
        return parseFloat(item) !== id;
    });
    res.send({
        code: 0,
        msg: 'OK!'
    });
});

route.get('/info', (req, res) => {
    let state = parseFloat(req.query.state) || 0,
        personID = req.session.personID,
        storeList = [];
    if (personID) {
        //登录下是从JSON文件中获取:在STORE.json中找到所有personID和登录用户相同的ID(服务器从session中获取的ID)
        req.storeDATA.forEach(item => {
            if (parseFloat(item.personID) === personID && parseFloat(item.state) === state) {
                console.log(item);
                storeList.push({
                    id: parseFloat(item.id),
                    storeID: parseFloat(item.shopId),
                    num:parseFloat(item.num)
                });
            }
        });
    } else {
        if (state === 0) {
            storeList = req.session.storeList || [];
            storeList = storeList.map(item => {
                return {
                    id: item,
                    storeID: 0
                }
            })
        }
    }

    // if (storeList.length === 0) {
    //     res.send({
    //         code: 1,
    //         msg: 'NO!',
    //         data: []
    //     });
    //     return;
    // }

    //根据上面查找的课程ID(storeList)，
    let data = [];
    storeList.forEach(({
        id,
        storeID,
        num
    } = {}) => {
        let item = req.courseDATA.find(item => parseFloat(item.id) === parseFloat(storeID));
        /*item.id = storeID;*/
        data.push({...item,num});
    });
    res.send({
        code: 0,
        msg: 'OK!',
        data
    });
});

route.post('/pay', (req, res) => {
    //支付把某个课程的state修改为1(改完后也是需要把原始JSON文件替换的)
    let {
        storeID
    } = req.body,
        personID = req.session.personID,
        isUpdate = false;
    if (personID) {
        req.storeDATA = req.storeDATA.map(item => {
            if (parseFloat(item.id) === parseFloat(storeID) && parseFloat(item.personID) === parseFloat(personID)) {
                isUpdate = true;
                return { ...item,
                    state: 1
                };
            }
            return item;
        });
        if (isUpdate) {
            writeFile(STORE_PATH, req.storeDATA).then(() => {
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
        } else {
            res.send({
                code: 1,
                msg: 'NO!'
            });
        }
        return;
    }
    res.send({
        code: 1,
        msg: 'NO LOGIN!'
    });
});

module.exports = route;