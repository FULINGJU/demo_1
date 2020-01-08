class Login {
	constructor() {
		this.user = document.querySelector(".user");
		this.pass = document.querySelector(".pass");
		this.btn = document.querySelector(".btn");
		this.user_f = document.querySelector(".user_f");
		this.pass_f = document.querySelector(".pass_f");
		this.changeyzm = document.querySelector(".changeyzm");
		this.yzm = document.querySelector(".yzm_1");
		this.suiji = document.querySelector(".suiji");
		this.yzmk = document.querySelector(".yzmk");
		this.load();
		this.addEvent();
	}
	
	//刷新页面就出现验证码
	load(){
		this.randomNum();
		console.log(this.nstr)
		this.suiji.innerHTML = this.nstr;
	}
	
	//b绑定事件
	addEvent() {
		var that = this;
		
		//点击切换验证码
		this.changeyzm.onclick = function(){
			that.randomNum();
			that.suiji.innerHTML = that.nstr;
		}

		//点击登录
		this.btn.onclick = function(){
			that.u = that.user.value;
			that.p = that.pass.value;
			if(that.yzm.value === that.nstr ){
				that.getAccount();
			}else{
				that.yzmk.innerHTML = "验证码错误";
			}
		}
		
		//用户名框提示
		this.user.onblur = function(){
			
			if(that.user.value == ""){
				that.user_f.innerHTML = "用户名不能为空";
			}else{
				that.user_f.innerHTML = "";
			}	
		}
		
		
		//密码框提示
		this.pass.onblur = function(){
			if(that.pass.value == ""){
				that.pass_f.innerHTML = "密码不能为空";
			}else{
				that.pass_f.innerHTML = "";
			}
		}
		
		//验证码框提示
		this.yzm.onblur = function(){
			if(that.yzm.value == ""){
				that.yzmk.innerHTML = "验证码不能为空";
			}else{
				that.yzmk.innerHTML = "";
			}
		}
		
	}
	
	//登录操作,验证账户密码和localStorage,匹配成功,并更改更改账号密码的登录状态,再存入localStorage中
	getAccount(){
		this.msg = localStorage.getItem("userMsg") ? JSON.parse(localStorage.getItem("userMsg")) : [];
		var status = true;
		for(var i = 0;i<this.msg.length;i++){
			if(this.msg[i].user === this.u){
				status = false;
				if(this.msg[i].pass == this.p){
					this.pass_f.innerHTML = "登录成功，3秒后跳转到<a href='index.html'>首页</a>";
					setInterval(()=>{
						location.href = "index.html";
					},3000);
					
					//账号登录状态
					this.msg[i].onoff = 1;
					console.log(this.msg[i].onoff);
					localStorage.setItem("userMsg",JSON.stringify(this.msg));
				}
				else{
					this.pass_f.innerHTML = "密码不对，重新输入密码";
					this.pass.value = "";
				}
			break;
			}
		}
		if(status){
			this.user_f.innerHTML = "你的用户名还没有注册";
		}
	}
	
	//随机生成数字
	random(max, min) {
		return Math.round(Math.random() * (max - min) + min);
	}
	
	//编写生成4个数字验证码的函数，
	randomNum(){
		var str ="";
		for(var i=0;i<4;i++){
			str += this.random(0,9);
		}
		this.nstr = str.toString();
	
		
	}
}

new Login();