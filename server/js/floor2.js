class floor2 {
	constructor() {
		this.floor2 = document.querySelector(".f2_b");
		this.url = "../json/floor2.json";

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
			str +=`<a href="#"><img src="https://img.banggo.com/sources/cms/banggo2017/PC/jx12133s2_${i+6}.jpg"></a>`;
		}
		this.floor2.innerHTML = str;
	}

}

new floor2();
