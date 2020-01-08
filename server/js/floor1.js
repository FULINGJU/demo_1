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
			console.log(that.res);
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
