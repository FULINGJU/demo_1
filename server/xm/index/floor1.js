class floor1 {
	constructor() {
		this.floor1 = document.querySelector(".f1_b");
		this.url = "floor1.json";

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
			str +=`<a href="#"><img src="https://img.banggo.com/sources/cms/banggo2017/PC/jx12133s2_${i+2}.jpg"></a>`;
		}
		this.floor1.innerHTML = str;
	}

}

new floor1();
