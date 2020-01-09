class getGoodsid {
	constructor() {
		this.addEvent();
	}
	addEvent() {
		setTimeout(() => {
			$(".goods_box").on("click", function() {
				this.g = $(this).attr("goodsid");
				// 将被点击的商品的id存入到cookie
				var key = "ggg";
				setCookie(key,this.g);
				location.href = "goods.html"
				// console.log(this.g);
			})
		}, 3000);
	}
}

new getGoodsid();
