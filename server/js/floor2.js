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
