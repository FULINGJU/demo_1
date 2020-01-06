class List {
	constructor() {
		this.floor3 = document.querySelector(".f3_b");
		this.url = "floor3.json";

		this.load();
	}

	load() {
		var that = this;
		ajaxGet(this.url, function(res) {
			that.res = JSON.parse(res)
			// console.log(that.res);
			that.display();
		})
	}
	display() {
		var str = "";
		for (var i = 0; i < this.res.length; i++) {
			str +=
				`<div class="goods_box" style="width: 230px;height: 325px; background:#EFEFEF;">
					<a href="#"><img src="${this.res[i].img}" style="width:230px;height:230px"></a>
					<b class="goodsId" style="margin-left: 15px;">${this.res[i].goodsId}</b>
					<a href="#" class="brand" style="display: block;font-size: 16px; margin: 10px 0 0 15px;">${this.res[i].brand}</a>				
					<a href="#" class="describe" style="display: block;font-size: 16px;margin:10px 0 0 15px;">${this.res[i].describe}</a>
					<span class="price" style=" display: block;color: red;font-size: 16px;font-weight: 700;  margin: 8px 16px 0;">￥${this.res[i].price}</span>
				</div>`
		}
		this.floor3.innerHTML = str;
	}
	//     setCookie(){
	//         // console.log(this.id)
	//         // [{id:13213,num:2},{},{}]
	//         // 存cookie
	//         // 怎么存？区分存之前的状态
	//         // console.log(getCookie("goodsMsg"))

	//         this.goods = getCookie("goodsMsg") ? JSON.parse(getCookie("goodsMsg")) : [];

	//         // 怎么判断是不是第一次
	//         if(this.goods.length < 1){
	//             // 第一次点击商品
	//             this.goods.push({
	//                 id:this.id,
	//                 num:1
	//             })
	//         }else{
	//             var i = 0;
	//             var onoff = this.goods.some((val,idx)=>{
	//                 i = idx;
	//                 return val.id == this.id;
	//             })

	//             if(!onoff){
	//                 this.goods.push({
	//                     id:this.id,
	//                     num:1
	//                 })
	//             }else{
	//                 this.goods[i].num++;
	//             }

	//         }
	//         setCookie("goodsMsg",JSON.stringify(this.goods));
	//     }
}

new List();
