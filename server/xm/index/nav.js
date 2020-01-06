$(".nav-l").children("li").hover(function(){
	//进入显示
	$(this).children(".hover_a").css({
		visibility:"visible"
	})
},function(){
	// 滑出隐藏
	$(this).children(".hover_a").css({
		visibility:"hidden"
	})
})
