## HOME
> 一个接口获取不同的数据
- /home/query
- 问号传参 lx=xxx 根据lx的值传递不同类型的数据
> lx可以参考的值(页面从上往下)
(如果值不对的，可以参考根路径下server/json/HOME/)
- SLIDE 主要轮播图
- ICONS_LIST 4个主要的icon图片
- BANNER_LIST 需要展示的图片
- HOT_CATEGORY 热门品类
- BANNER_SLIDE 小轮播图
- HOT_BRANDS 热门品牌
- HOT_SINGLE_GOODS 人气推荐
- MAYBE_LINK 可能喜欢
> 得到数据({code: 0, msg: "OK!", data: []代表成功)
![image](https://note.youdao.com/yws/api/personal/file/6485DD8557454B8D8418454A88DB7CF7?method=download&shareKey=1987b4db48078095843274336d0387ca)
- data 的具体说明(需要就获取)
```
"id": x,
"pic": 图片地址,
"desc": 图片描述
"price":价格,
"oldPrice":原先的价格
"view":多少人在浏览,
"state":"正在浏览",
```

## 获取商品详情
- 地址：/course/info
- 方式：GET
- 参数：id=xxx 如果id不传获取的是所有的商品
- 返回：{
   code:0,
   msg:'xxx',
   data:{
      ...
   }
}
"id": 1,
	"pic":数组(可以轮播展示或者只展示第一项),
	"desc": "商品详情",
	"price": 209,
	"oldPrice": 298,
	"name": "商品名称",
	"hot": "促销",
	"shop": "店铺图片",
	"shopDesc": "店铺描述",
	"data": "上架时间",
	"moods": 人气