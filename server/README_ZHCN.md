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
- 参数：id=xxx
- 返回：{
   code:0,
   msg:'xxx',
   data:{
      ...
   }
}
"id": 1,
	"pic": [
		"//img12.static.yhbimg.com/goodsimg/2018/06/07/10/02594fab195fda2d9539c3be23024585ac.jpg?imageMogr2/thumbnail/450x600/background/d2hpdGU=/position/center/quality/60",
		"//img13.static.yhbimg.com/goodsimg/2017/05/31/16/02ed02e5d304b5b0b3612c3b85be8b05c6.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60/format/webp",
		"//img13.static.yhbimg.com/goodsimg/2018/06/07/10/02373364d40fdaebc58ee825a0a5e4ec19.jpg?imageMogr2/thumbnail/450x600/background/d2hpdGU=/position/center/quality/60"
	],
	"desc": "Herschel Supply|男|女|双肩包|Herschel Supply x INDEPENDENT 收纳双肩包",
	"price": 209,
	"oldPrice": 298,
	"name": "MADNESS CORDURA DAY PACK",
	"hot": "全场任意消费加5元换购YOHO!当期热销新刊",
	"shop": "//img11.static.yhbimg.com/yhb-img01/2015/12/07/10/01e12663e56ae7c559ac72de209b6bf787.jpg?imageMogr2/thumbnail/47x47/extent/47x47/background/d2hpdGU=/position/center/quality/80",
	"shopDesc": "MADNESS",
	"data": "2018/07/05",
	"moods": 1000