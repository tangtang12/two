const {
        writeFile
    } = require('../utils/promiseFS'),
    STORE_PATH = './json/store.json';

function ADD_STORE(req, res, {shopId, num, size, color}) {
    //把某一个商品存储到JSON中，实现加入到购物车的功能
    let personID = req.session.personID;
    let result = req.storeDATA.find(item => item.personID === personID && item.shopId === shopId && item.size === size && item.color === color&&item.state===0);
    if (result) {
        result.num = parseFloat(result.num) + parseFloat(num);
        return writeFile(STORE_PATH, req.storeDATA);
    }
    let storeInfo = {
        id: req.storeDATA.length === 0 ? 1 : (parseFloat(req.storeDATA[req.storeDATA.length - 1].id) + 1),
        shopId,
        num,
        size,
        color,
        personID,
        state: -1, //默认是不支付的
        time: new Date().getTime(),
        isCheck:false
    };
    //把数据存放到原始数组中，最后把原始数组存放到JSON中    
    req.storeDATA.push(storeInfo);
    return writeFile(STORE_PATH, req.storeDATA);
}

module.exports = {
    ADD_STORE
};