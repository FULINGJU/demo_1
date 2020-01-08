class List {
	constructor() {
		this.floor3 = document.querySelector(".f3_b");
		this.url = "/api";

		this.load();
	}

	load() {
		var that = this;
		// ajaxGet(参数1,参数2,参数3)
		// 参数1:url地址
		// 参数2:回调函数
		// 参数3:data数据
		ajaxGet(this.url, function(res) {
			that.res = JSON.parse(res)
			// console.log(that.res);
			that.display();	
		},{
			file:"floor3.json"
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

}

new List();
