class Register {
	constructor() {
		this.user = document.querySelector(".line_u");
		this.pass = document.querySelector(".line_p");
		this.btn = document.querySelector(".line_send_s");
		this.user_f = document.querySelector(".user_f");
		this.pass_f = document.querySelector(".pass_f");
		this.changeyzm = document.querySelector(".changeyzm");
		this.yzm = document.querySelector(".line_y");
		this.suiji = document.querySelector(".suiji");
		this.yzmk = document.querySelector(".yzmk");
		this.load();
		this.addEvent();
	}
	
	//刷新页面就显示验证码
	load(){
		this.randomNum();
		console.log(this.nstr)
		this.suiji.innerHTML = this.nstr;
	}
	
	
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
				that.setAccount();
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
	
	setAccount(){
		this.msg = localStorage.getItem("userMsg") ? JSON.parse(localStorage.getItem("userMsg")) : [];
		var state = this.msg.some((val)=>{
			return val.user == this.u;
		})
		if(state){
			this.user_f.innerHTML = "用户名已存在";
		}else{
			this.msg.push({
				user:this.u,
				pass:this.p,
				onoff:0
			})
			localStorage.setItem("userMsg",JSON.stringify(this.msg));
			this.pass_f.innerHTML = "恭喜注册成功,3秒后跳转登录页面";
			setInterval(()=>{
				location.href = "login.html";
			},(3000));
		}	
	}
	
	random(max, min) {
		return Math.round(Math.random() * (max - min) + min);
	}
	
	// 3.编写生成4个数字验证码的函数，并生成10次，同时将结果存入数组
	randomNum(){
		var str ="";
		for(var i=0;i<4;i++){
			str += this.random(0,9);
		}
		this.nstr = str.toString();
	}
}

new Register();