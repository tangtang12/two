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
- MAYBE_LIKE 可能喜欢
> 得到数据({code: 0, msg: "OK!", data: []代表成功)
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

## CLASSIFY
- /classify/query
- get
- 问号传参lx=xxx 
> xxx的值
- manList
- womenList
- kidsList
> 得到数据({code: 0, msg: "OK!", data: []代表成功)
- data 的具体说明(需要就获取)
```
"id": x,
"pic": 图片地址,
"desc": 图片描述
```
