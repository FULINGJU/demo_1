function Loupe() {
			this.loup = document.querySelector(".loup");
			this.g_fdj = document.querySelector(".g_fdj");
			this.span = document.querySelector(".loup span");
			this.img = document.querySelector(".g_fdj img");
			this.addEvent();
		}

		Loupe.prototype.addEvent = function() {
			var that = this;
			this.loup.onmouseover = function() {
				that.show();
			}
			this.loup.onmouseout = function() {
				that.hidden();
			}
			this.loup.onmousemove = function(eve) {
				var e = eve || window.event;
				// move的过程中需要获取坐标，所以要传参到方法中
				that.move(e);
			}
		}
		Loupe.prototype.show = function() {
			this.span.style.display = "block";
			this.g_fdj.style.display = "block";

			// 根据比例计算span的宽高
			this.span.style.width = this.g_fdj.offsetWidth / this.img.offsetWidth * this.loup.offsetWidth + "px";
			this.span.style.height = this.g_fdj.offsetHeight / this.img.offsetHeight * this.loup.offsetHeight + "px";
		}
		Loupe.prototype.hidden = function() {
			this.span.style.display = "none";
			this.g_fdj.style.display = "none";
		}
		Loupe.prototype.move = function(e) {
			//span移动的距离
			var l = e.clientX - this.loup.offsetLeft - this.span.offsetWidth / 2;
			var t = e.clientY - this.loup.offsetTop - this.span.offsetHeight / 2;

			// 限制边界
			if (l < 0) l = 0;
			if (t < 0) t = 0;
			if (l > this.loup.offsetWidth - this.span.offsetWidth) {
				l = this.loup.offsetWidth - this.span.offsetWidth;
			}
			if (t > this.loup.offsetHeight - this.span.offsetHeight) {
				t = this.loup.offsetHeight - this.span.offsetHeight;
			}
			//span移动的距离
			this.span.style.left = l + "px";
			this.span.style.top = t + "px";
			// 计算移动的比例
			var x = l / (this.loup.offsetWidth - this.span.offsetWidth);
			var y = t / (this.loup.offsetHeight - this.span.offsetHeight);
			// console.log(x, y);
			// 根据比例计算出大图移动的距离
			this.img.style.left = -x * (this.img.offsetWidth - this.g_fdj.offsetWidth) + "px";
			this.img.style.top = -y * (this.img.offsetHeight - this.g_fdj.offsetHeight) + "px";
		}

		new Loupe();