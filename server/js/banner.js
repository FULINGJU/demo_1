    $(".banner").banner({
        //必传,数组,图片路径
        img:["img/b_1.jpg","img/b_2.jpg","img/b_3.jpg","img/b_4.jpg","img/b_5.jpg"],
        btn:false,              //可选，默认为true
        list:true,             //可选，默认为true
        autoPlay:true,         //可选，默认为true
        delayTime:3000,         //可选，默认为2000
        moveTime:500,           //可选，默认为200
        index:0                 //可选，默认为0
    });
	
	$(".list_f").children("li").click(function() {
		//获取当前点击的li的索引
		// var i = $(this).index();
		//将li的索引给到对应的楼层。
		// var div = $(".box1").eq(i);
		//获取每个楼层距离顶部的距离
		// var t = div.offset().top;
		//将每个楼层距离顶部的距离给到滚动条。滚动条滚动的距离=每个楼层距离顶部的距离
		// $("html").scrollTop(t);
		// $("html").scrollTop($(".box1").eq($(this).index()).offset().top);
		$(this).stop().animate({
			width: "75px"
		}, 300, function() {
			$(this).css({
				background: "white",
				color: "black",
			})
		}).siblings().stop().animate({
			width: "75px"
		}, 100, function() {
			$(this).css({
				background: "none",
				color: "white",
			})
		});
		$("html").stop().animate({
			scrollTop: $(".box1").eq($(this).index()).offset().top
		}, 1000)
	})
	
	
	//二级菜单
	$(".nav-l").children("li").hover(function(){
		//进入显示
		$(this).children(".hover_a").css({
			visibility:"visible"
		})
	},function(){
		// 滑出隐藏
		$(this).children(".hover_a").css({
			visibility:"hidden"
		})
	})
	
	//楼层1
	class floor1 {
		constructor() {
			this.floor1 = document.querySelector(".f1_b");
			this.url = "/api";
			this.load();
		}
	
		load() {
			var that = this;
			ajaxGet(this.url, function(res) {
				that.res = JSON.parse(res)
				// console.log(that.res);
				that.display();
			},{
				file:"floor1.json"
			})
		}
		display() {
			var str = "";
			for (var i = 0; i < this.res.length; i++) {
				str +=`<a href="#"><img src="${this.res[i].img}"></a>`;
			}
			this.floor1.innerHTML = str;
		}
	
	}
	
	new floor1();
	
	//楼层2
	class floor2 {
		constructor() {
			this.floor2 = document.querySelector(".f2_b");
			this.url = "/api";
	
			this.load();
		}
	
		load() {
			var that = this;
			ajaxGet(this.url, function(res) {
				that.res = JSON.parse(res)
				// console.log(that.res);
				that.display();
			},{
				file:"floor2.json"
			})
		}
		display() {
			var str = "";
			for (var i = 0; i < this.res.length; i++) {
				str +=`<a href="#"><img src="${this.res[i].img}"></a>`;
			}
			this.floor2.innerHTML = str;
		}
	}
	
	new floor2();
	
	//楼层3
	class floor3{
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
					`<div class="goods_box" goodsid="${this.res[i].goodsId}" style="width: 230px;height: 325px; background:#EFEFEF;">
						<a ><img src="${this.res[i].img}" style="width:230px;height:230px"></a>
						
						<a  class="brand" style="display: block;font-size: 16px; margin: 10px 0 0 15px;">${this.res[i].brand}</a>				
						<a  class="describe" style="display: block;font-size: 16px;margin:10px 0 0 15px;">${this.res[i].describe}</a>
						<span class="price" style=" display: block;color: red;font-size: 16px;font-weight: 700;  margin: 8px 16px 0;">￥${this.res[i].price}</span>
					</div>`
			}
			this.floor3.innerHTML = str;
		}
	
	}
	
	new floor3();
	
