class sCookie{
	constructor() {
	    this.text = document.querySelector(".text");
		this.sub = document.querySelector(".sub");
		this.addEvent();
	}
	
	addEvent(){
		var that = this;
		this.sub.onclick = function(){
			that.setcookie();
			console.log(that.text.value);
		}
	}
	
	setcookie(){
		var key = "key";
		var that = this;
		setCookie(key,that.text.value);
		
	}
}
new sCookie();