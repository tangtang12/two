const express = require("express"),
  route = express.Router(),
  { writeFile } = require("../utils/promiseFS"),
  STORE_PATH = "./json/store.json",
  utils = require("../utils/utils");

//增加购物车信息
route.post("/add", (req, res) => {
  let personID = req.session.personID, //登录用户得ID
    { id, num, size, color } = req.body;
  let shopId = parseFloat(id);
  num = parseFloat(num);

  //=>已经登录状态下，把信息直接存储到JSON中即可(用户在其他平台上登录，也可以从JSON中获取数据，实现信息跨平台)
  if (personID) {
    utils
      .ADD_STORE(req, res, {
        shopId,
        num,
        size,
        color
      })
      .then(() => {
        res.send({
          code: 0,
          msg: "OK!"
        });
      })
      .catch(() => {
        res.send({
          code: 1,
          msg: "NO!"
        });
      });
    return;
  }

  //=>未登录状态下，临时存储到SESSION中，等到下一次登录成功，直接把信息存储到文件中（并且清空SESSION中的信息）
  !req.session.storeList ? (req.session.storeList = []) : null;
  req.session.storeList.push(id);
  res.send({
    code: 0,
    msg: "OK!"
  });
});
//修改添加到购物车的数量，state为0
route.post("/modify", (req, res) => {
  let personID = req.session.personID, //登录用户得ID
    { id, num } = req.body;
  let shopId = parseFloat(id);
  if (personID) {
    //登录下是从JSON文件中获取:在STORE.json中找到所有personID和登录用户相同的ID(服务器从session中获取的ID)
    req.storeDATA.forEach(item => {
      if (
        parseFloat(item.personID) === personID &&
        parseFloat(item.shopId) === shopId
      ) {
        item.num = parseFloat(num);
      }
    });
    writeFile(STORE_PATH, req.storeDATA).then(() => {
      res.send({
        code: 0,
        msg: "OK!"
      });
    });
  } else {
    res.send({
      code: 1,
      msg: "用户未登录"
    });
  }
});
//移除购物车的商品
route.post("/remove", (req, res) => {
  let personID = req.session.personID,
    isUpdate = false; //标识代表未完成
  if (personID) {
    req.storeDATA = req.storeDATA.filter(item => {
      return !item.isCheck;
    });
  } else {
    res.send({
      code: 1,
      msg: "用户未登录!"
    });
  }
  isUpdate = true;
  if (isUpdate) {
    writeFile(STORE_PATH, req.storeDATA)
      .then(() => {
        res.send({
          code: 0,
          msg: "OK!"
        });
      })
      .catch(() => {
        res.send({
          code: 1,
          msg: "NO!"
        });
      });
  }
});
//获取加入购物车的商品或者支付成功的或者支付失败的 为3获取所有的购物信息
route.get("/info", (req, res) => {
  let state = req.query.state,
    personID = req.session.personID,
    storeList = [];

  state = typeof state === "undefined" ? -1 : state;
  state = parseFloat(state);

  if (personID) {
    //登录下是从JSON文件中获取:在STORE.json中找到所有personID和登录用户相同的ID(服务器从session中获取的ID)
    if (state === 0) {
      let data = [];
      req.storeDATA.forEach(item => {
        let { shopId } = item;
        shopId = parseFloat(shopId);
        req.courseDATA.forEach(cur => {
          let { id, pic, name, price, oldPrice } = cur;
          if (shopId === parseFloat(id)) {
            data.push({
              ...item,
              pic: pic[0],
              name,
              price,
              oldPrice
            });
          }
        });
      });
      res.send({
        code: 0,
        msg: "OK!",
        data
      });
      return;
    }
    req.storeDATA.forEach(item => {
      if (
        parseFloat(item.personID) === personID &&
        parseFloat(item.state) === state
      ) {
        storeList.push({
          id: parseFloat(item.id),
          storeID: parseFloat(item.shopId),
          num: parseFloat(item.num),
          color: item.color,
          size: item.size,
          isCheck: item.isCheck,
          time: item.time,
          state: item.state
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
        };
      });
    }
  }
  //根据上面查找的课程ID(storeList)，
  let data = [];
  storeList.forEach(({ id, storeID, num, size, color, isCheck, time ,state} = {}) => {
    let item = req.courseDATA.find(
      item => parseFloat(item.id) === parseFloat(storeID)
    );
    /*item.id = storeID;*/
    data.push({
      ...item,
      num,
      size,
      color,
      isCheck,
      time,
      state
    });
  });
  res.send({
    code: 0,
    msg: "OK!",
    data
  });
});
//支付
route.post("/pay", (req, res) => {
  //支付把某个商品的state修改为2(改完后也是需要把原始JSON文件替换的)
  let personID = req.session.personID,
    isUpdate = false;
  if (personID) {
    req.storeDATA = req.storeDATA.map(item => {
      if (item.isCheck) {
        return {
          ...item,
          state: 2,
          isCheck: false
        };
      }
      return item;
    });
    isUpdate = true;
  } else {
    res.send({
      code: 1,
      msg: "NO LOGIN!"
    });
  }
  if (isUpdate) {
    writeFile(STORE_PATH, req.storeDATA)
      .then(() => {
        res.send({
          code: 0,
          msg: "OK!"
        });
      })
      .catch(() => {
        res.send({
          code: 1,
          msg: "NO!"
        });
      });
  }
});
//未支付成功 state为2 进入待支付列表
route.post("/unpay", (req, res) => {
  //支付把某个商品的state修改为1(改完后也是需要把原始JSON文件替换的)
  let personID = req.session.personID,
    isUpdate = false;
  if (personID) {
    req.storeDATA = req.storeDATA.map(item => {
      if (item.isCheck) {
        return {
          ...item,
          state: 1,
          isCheck: false
        };
      }
      return item;
    });
  } else {
    res.send({
      code: 1,
      msg: "NO LOGIN!"
    });
  }
  isUpdate = true;
  if (isUpdate) {
    writeFile(STORE_PATH, req.storeDATA)
      .then(() => {
        res.send({
          code: 0,
          msg: "OK!"
        });
      })
      .catch(() => {
        res.send({
          code: 1,
          msg: "NO!"
        });
      });
  }
});
//购物车商品的点击状态
route.post("/check", (req, res) => {
  let personID = req.session.personID, //登录用户得ID
    { id, num, color, size } = req.body;
  let shopId = parseFloat(id);
  if (personID) {
    //登录下是从JSON文件中获取:在STORE.json中找到所有personID和登录用户相同的ID(服务器从session中获取的ID)
    let result = req.storeDATA.find(item => {
      return (
        parseFloat(item.shopId) === shopId &&
        parseFloat(item.num) === parseFloat(num) &&
        personID === parseFloat(item.personID) &&
        item.color === color &&
        item.size === size
      );
    });
    if (result) {
      result.isCheck = !result.isCheck;
      let allCheck = req.storeDATA.every(item => item.isCheck),
        allPrice = 0,
        nums = 0;
      req.storeDATA.forEach(item => {
        if (item.isCheck) {
          nums += parseFloat(item.num);
          allPrice += parseFloat(item.num) * parseFloat(item.price);
        }
      });
      writeFile(STORE_PATH, req.storeDATA).then(() => {
        res.send({
          code: 0,
          msg: "OK!",
          isCheck: result.isCheck,
          allCheck,
          allPrice,
          nums
        });
      });
    } else {
      res.send({
        code: 1,
        msg: "未找到"
      });
    }
  } else {
    res.send({
      code: 1,
      msg: "未登录"
    });
  }
});
//取消订单(state=1)、退货(state=2)(走一个流程，移除)
route.post("/cancel", (req, res) => {
  let personID = req.session.personID;
  if (personID) {
    let { time } = req.body;
    req.storeDATA = req.storeDATA.filter(item => {
      return parseFloat(item.time) !== parseFloat(time);
    });
    writeFile(STORE_PATH, req.storeDATA).then(() => {
      res.send({
        code: 0,
        msg: "OK!"
      });
    });
  } else {
    res.send({
      code: 1,
      msg: "用户未登录!"
    });
  }
});
//购买单个(将state改为2)
route.post("/singlepay", (req, res) => {
  let personID = req.session.personID;
  if (personID) {
    let { time } = req.body;
    let result = req.storeDATA.find(item => {
      return parseFloat(item.time) === parseFloat(time);
    });
    if (result) {
      result.state = 2;
      writeFile(STORE_PATH, req.storeDATA).then(() => {
        res.send({
          code: 0,
          msg: "OK!"
        });
      });
    } else {
      res.send({
        code: 1,
        msg: "未找到!"
      });
    }
  } else {
    res.send({
      code: 1,
      msg: "用户未登录!"
    });
  }
});
module.exports = route;
