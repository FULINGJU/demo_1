//点击单个商品,获取商品的goodsid,存入到cookie.链接跳转到商品详情页,
//商品详情页向后台发送json数据,得到json数据,获取里面的goodsid循环遍历和cookie中的goodid作比较,匹配成功,记录这个json数据的索引i
//拿这个索引.到后台返回的数据中获取对应数据,渲染详情页关键信息.


class goodxr {
	constructor() {
		this.good_box = document.querySelector(".good_box");
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
		}, {
			file: "floor3.json"
		})
	}

	gCookie() {
		var key = "ggg";
		return getCookie(key);
	}


	display() {
		this.gCookie();
		var gn = this.gCookie();
		var str = "";
		for (var i = 0; i < this.res.length; i++) {
			if (this.res[i].goodsId == gn) {
				//获取当前匹配的商品在json中的索引
				// console.log(i);
				str +=
					`
						<div class="good_box">
									<div class="margin">
										<div class="g_l">
											<div class="loup">
												<img src="${this.res[i].img}">
												 <span class="small" style="display: none; width: 160.667px; height: 160.667px; left: 319px; top: 134px;"></span>
											</div>
											<ul>
												<li><img src="//pic.banggo.com/sources/images/goods/MB/229429/229429_00.jpg?x-oss-process=image/resize,m_pad,w_90,h_90"></li>
												<li><img src="//pic.banggo.com/sources/images/goods/MB/229429/229429_30.jpg?x-oss-process=image/resize,m_pad,w_90,h_90"></li>
												<li><img src="//pic.banggo.com/sources/images/goods/MB/229429/229429_31.jpg?x-oss-process=image/resize,m_pad,w_90,h_90"></li>
												<li><img src="//pic.banggo.com/sources/images/goods/MB/229429/229429_32.jpg?x-oss-process=image/resize,m_pad,w_90,h_90"></li>
												<li><img src="//pic.banggo.com/sources/images/goods/MB/229429/229429_33.jpg?x-oss-process=image/resize,m_pad,w_90,h_90"></li>
											</ul>
											<div class="detail">
												<div class="d1">商品编号：${this.res[i].goodsId}</div>
												<div class="d2">分享</div>
												<div class="d3">点赞</div>
											</div>
										</div>
										
										<!-- 放大镜 -->
										<div class="g_fdj" style="display: none;">
											<img src="${this.res[i].img}" style="width: 1440px; height: 1440px; left: -958px; top: -402.42px;">
										</div>
										
										<div class="g_r">
											<div class="g_r_1">
												<a href="#">${this.res[i].brand}</a>&nbsp;${this.res[i].describe}
											</div>
											<div class="g_r_2">
												<ul>
													<li class="mbshop_detail_price">
														<b>售价:</b>
														<strong>￥${this.res[i].price}</strong>
														<i>吊牌价:</i>
														<em>￥ 799</em>
														<span>6.3折</span>
													</li>
													<li class="mbshop_detail_rebate">
														<div class="zk"> 本品不参加会员折扣 </div>
														<div class="hyuan">会员规则</div>
													</li>
													<li class="mbshop_detail_promotion">
														<span class="cx">促销</span>
														<a href="#">· MB立减100元</a>
														<a href="#">· 满499赠男飞织袜靴</a>
													</li>
												</ul>
											</div>
											<div class="g_r_3">
												<div class="g_r_3_1">
													销量
													<span>3</span>
												</div>
												<div class="g_r_3_2">
													累计评价
													<span>4</span>
												</div>
												<div class="g_r_3_3">
													送邦购积分
													<span>499</span>
												</div>
											</div>
						
											<!-- 颜色选择 -->
											<div class="g_r_4">
												<div class="g_r_4_t">
													颜 色：
													<b>请选择颜色</b>
												</div>
												<ul>
													<li><a><img src="https://pic.banggo.com/sources/images/goods/MB/229429/229429_20_00.jpg?x-oss-process=image/resize,m_lfit,w_90,h_90"></a></li>
													<li><a><img src="https://pic.banggo.com/sources/images/goods/MB/229429/229429_40_00.jpg?x-oss-process=image/resize,m_lfit,w_90,h_90"></a></li>
													<li><a><img src="https://pic.banggo.com/sources/images/goods/MB/229429/229429_80_00.jpg?x-oss-process=image/resize,m_lfit,w_90,h_90"></a></li>
													<li><a><img src="https://pic.banggo.com/sources/images/goods/MB/229429/229429_90_00.jpg?x-oss-process=image/resize,m_lfit,w_90,h_90"></a></li>
													<li><a><img src="https://pic.banggo.com/sources/images/goods/MB/229429/229429_30_00.jpg?x-oss-process=image/resize,m_lfit,w_90,h_90"></a></li>
													<li><a><img src="https://pic.banggo.com/sources/images/goods/MB/229429/229429_70_00.jpg?x-oss-process=image/resize,m_lfit,w_90,h_90"></a></li>
												</ul>	
											</div>
											
											<!-- 尺码选择 -->
											<div class="g_r_5">
												<div class="g_r_5_t">
													尺码：
													<b>请选择尺码</b>
												</div>
												<ul>
													<li>XXS:155/80A</li>
													<li>XS:160/84A</li>
													<li>S:165/88A</li>
													<li>M:170/92A</li>
													<li>L:175/96A</li>
													<li>XL:180/100A</li>
													<li>XXL:185/104B</li>
												</ul>	
											</div>
											
											<!-- 购买数量 -->
											<div class="g_r_6">
												<div>
													<div class="g_r_6_l">购买数量:</div>
													<div class="g_r_6_r">
														<a>-</a>
														<input type="text" class="num_v" value="1">
														<a>+</a>
													</div>
												</div>
											</div>
											
											<!-- 加入购物车 -->
											<div class="joinBtn">
												<a href="#">加入购物袋</a>
											</div>
											
											<!-- 浏览更多 -->
											<div class="more">
												<span>浏览更多:</span>
												<span><a href="https://search.banggo.com/search/a_140.shtml" target="_blank">羽绒服</a></span>
											</div>
											
											<!-- 温馨提示 -->
											<div class="care">
												<span>温馨提示：</span>
												<ul>
													<li><em></em>此商品不可使用邦购红包</li>
													<li><em></em>此商品不可使用积分</li>
													<li><em></em>14天退换</li>
												</ul>
											</div>
										</div>
									</div>
								</div>`;
			}
			this.good_box.innerHTML = str;
		}
		// console.log(gn);
	}
}


new goodxr();


//放大镜
function Loupe() {
	this.loup = document.querySelector(".loup");
	this.g_fdj = document.querySelector(".g_fdj");
	this.span = document.querySelector(".loup span");
	this.img = document.querySelector(".g_fdj img");
	this.addEvent();
}

Loupe.prototype.addEvent = function() {
	var that = this;
	this.loup.onmouseover = function() {
		that.show();
	}
	this.loup.onmouseout = function() {
		that.hidden();
	}
	this.loup.onmousemove = function(eve) {
		var e = eve || window.event;
		// move的过程中需要获取坐标，所以要传参到方法中
		that.move(e);
	}



}
Loupe.prototype.show = function() {
	this.span.style.display = "block";
	this.g_fdj.style.display = "block";

	// 根据比例计算span的宽高
	this.span.style.width = this.g_fdj.offsetWidth / this.img.offsetWidth * this.loup.offsetWidth + "px";
	this.span.style.height = this.g_fdj.offsetHeight / this.img.offsetHeight * this.loup.offsetHeight + "px";
}
Loupe.prototype.hidden = function() {
	this.span.style.display = "none";
	this.g_fdj.style.display = "none";
}
Loupe.prototype.move = function(e) {
	//span移动的距离


	var l = e.clientX - this.loup.offsetLeft - this.span.offsetWidth / 2;
	var t = e.pageY - this.loup.offsetHeight + this.span.offsetHeight;
	// console.log(this.loup.offsetTop,this.span.offsetHeight);

	// 限制边界
	if (l < 0) l = 0;
	if (t < 0) t = 0;
	if (l > this.loup.offsetWidth - this.span.offsetWidth) {
		l = this.loup.offsetWidth - this.span.offsetWidth;
	}
	if (t > this.loup.offsetHeight - this.span.offsetHeight) {
		t = this.loup.offsetHeight - this.span.offsetHeight;
	}
	//span移动的距离
	this.span.style.left = l + "px";
	this.span.style.top = t + "px";
	// 计算移动的比例
	var x = l / (this.loup.offsetWidth - this.span.offsetWidth);
	var y = t / (this.loup.offsetHeight - this.span.offsetHeight);
	// console.log(x, y);
	// 根据比例计算出大图移动的距离
	this.img.style.left = -x * (this.img.offsetWidth - this.g_fdj.offsetWidth) + "px";
	this.img.style.top = -y * (this.img.offsetHeight - this.g_fdj.offsetHeight) + "px";
}
//异步,设置延时器
setTimeout(() => {
	new Loupe();
}, 1000);

//导航栏
$(".nav-l").children("li").hover(function() {
	//进入显示
	$(this).children(".hover_a").css({
		visibility: "visible"
	})
}, function() {
	// 滑出隐藏
	$(this).children(".hover_a").css({
		visibility: "hidden"
	})
})

//刷新当前登录用户在TOP

class Getloacl {
	constructor() {
		this.login = document.querySelector(".login");
		this.bagg = document.querySelector(".bag");
		this.Getloacl();
	}

	Getloacl() {
		this.msg = localStorage.getItem("userMsg") ? JSON.parse(localStorage.getItem("userMsg")) : [{
			user: "",
			pass: "",
			onoff: 0
		}];
		console.log(this.msg);
		for (var i = 0; i < this.msg.length; i++) {
			if (this.msg[i].onoff == 1) {
				console.log(this.msg[i].user);
				this.idx = i;
				this.login.innerHTML =
					`<a class="login_l" style="color:red;">${this.msg[i].user}</a>
					<span class="out" style="cursor: pointer;">[退出]</span>`;
				this.bagg.innerHTML = `<a href="car.html">购物袋<b>0</b>件</a>`;	
				this.addEvent();
			}
		}
	}

	//注销功能 事件
	addEvent(){
		var that = this;
		this.out = document.querySelector(".out");
		this.out.onclick = function() {
			that.msg[that.idx].onoff = 0;
			localStorage.setItem("userMsg", JSON.stringify(that.msg));
			location.href = "login.html";
		}
	}
}
new Getloacl();
