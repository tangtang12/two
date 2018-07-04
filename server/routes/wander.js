const express = require('express'),
    route = express.Router();
const {
    readFile
} = require('../utils/promiseFS');
const CLASSIFY_PATH = '../server/json/Wander';
route.get('/query', async (req, res) => {
    //根据传递不同类型的参数，获取不同类型的值
    let {
        lx: type
    } = req.query;
    type = type.toUpperCase();
    let data = JSON.parse(await readFile(`${CLASSIFY_PATH}/${type}.json`));
    res.send({
        code: 0,
        msg: 'OK!',
        data
    });
});

module.exports = route;