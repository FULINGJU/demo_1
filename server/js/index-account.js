class Account {
	constructor() {
		this.login = document.querySelector(".login");
		this.login_1 = document.querySelector(".login_l");
		this.login_box = document.querySelector(".login_box");
		this.getInfo();
	}
	getInfo() {
		this.msg = localStorage.getItem("userMsg") ? JSON.parse(localStorage.getItem("userMsg")) : [{
			user: "",
			pass: "",
			onoff: 0
		}];
		this.i = 0;
		this.on = this.msg.some((val, index) => {
			this.i = index;
			return val.onoff != 0;
		});
		if (this.on) {
			this.login.innerHTML = 	`<a class="login_l" style="color:red;">${this.msg[this.i].user}</a>
									<span class="out" style="cursor: pointer;">[退出]</span>`;	
			this.addEvent();
		}
	}
	
	//注销功能 事件
	addEvent(){
		var that = this;
		this.out = document.querySelector(".out");
		this.out.onclick = function(){
			that.msg[that.i].onoff = 0;
			localStorage.setItem("userMsg",JSON.stringify(that.msg));
			location.reload();
		}
	}
}

new Account();
