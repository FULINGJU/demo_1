class GetcarLogin {
	constructor() {
		this.login = document.querySelector(".login")
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
new GetcarLogin();
