class Search {
	constructor() {
		this.btn = document.querySelector(".sub");
		this.txt = document.querySelector(".text");
		this.ul = document.querySelector(".ul")
		this.url = "/api";
		
		//初始请求数据,并渲染
		this.load();
		this.addEvent();
	}
	
	addEvent(){
		var that = this;
		this.btn.onclick = function(){
			console.log(that.txt.value)
			// console.log(1);
			//点击搜索再次请求后台数据
			that.load();
		}
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
			file:"search.json"
		})
	}
	
	display() {
		//输入框字符串和返回的数据中的xx作匹配查询,包含输入框字符串,说明这条数据要渲染,将索引存入数组
		var arr = [];
		for(var i =0;i<this.res.length;i++){
			if(this.res[i].xx.indexOf(this.txt.value) >= 0){
				console.log(i);
				arr.push(i);
			}
		}
		console.log(arr.length);

		
		var str = "";
		if(arr.length == 0){
			this.ul.innerHTML = "没找到你要的商品,重新搜索";
		}else{
			for (var i = 0; i < arr.length; i++) {
					str +=	`<li>
								<a href="#">
									<img src="${this.res[arr[i]].img}" />
								</a>
								<span>
									<a href="#" class="prn">${this.res[arr[i]].name}</a>
								</span>
								<span>
									<a href="#" class="pro">${this.res[arr[i]].xx}</a>
								</span>
								<span>
									<b>￥${this.res[arr[i]].price}</b>
								</span>
							</li>`;
			}
			this.ul.innerHTML = str;
		}

	}

}

new Search();
