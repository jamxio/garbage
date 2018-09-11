
var __extends = this.__extends ||
function(c, e) {
	function d() {
		this.constructor = c
	}
	for (var a in e) e.hasOwnProperty(a) && (c[a] = e[a]);
	d.prototype = e.prototype;
	c.prototype = new d
}, GoalDialog = function(c) {
	function e(d, a, b, e) {
		this.stageWidth = d;
		this.stageHeight = a;
		this.goalMsg = b;
		this.myTest = e;
		c.call(this);
		this.drawForm()
	}
	__extends(e, c);
	e.prototype.drawForm = function() {
		this.alpha = 0.9;
		this.y = this.x = 0;
		this.width = this.stageWidth - 2 * this.x;
		this.height = this.stageHeight;
		var c = this.createBitmapByName("bg");
		this.addChild(c);
		c.width = this.width;
		c.height = this.height;
		this.textContainer = new egret.Sprite;
		this.textContainer.anchorX = this.textContainer.anchorY = 0.5;
		this.textContainer.x = this.stageWidth / 2;
		this.textContainer.y = 0.4 * this.stageHeight;
		this.textContainer.width = 0.9 * this.stageWidth;
		this.textContainer.height = 0.4 * this.stageHeight;
		this.textContainer.alpha = 1;
		this.addChild(this.textContainer);
		c = new egret.TextField;
		c.x = 0;
		c.anchorX = c.anchorY = 0;
		c.textColor = 16744231;
		c.text = this.goalMsg;
		c.size = 40;
		c.width = this.textContainer.width;
		this.textContainer.addChild(c);
		c = this.createBitmapByName("share");
		c.anchorX = c.anchorY = 0.5;
		this.addChild(c);
		c.touchEnabled = !0;
		c.x = 0.3 * this.width;
		c.y = 0.6 * this.height;
		c.scaleX = 1;
		c.scaleY = 1;
		c.name = "btn1";
		c.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);
		c = this.createBitmapByName("again");
		c.anchorX = c.anchorY = 0.5;
		this.addChild(c);
		c.touchEnabled = !0;
		c.x = 0.7 * this.width;
		c.y = 0.6 * this.height;
		c.scaleX = 1;
		c.scaleY = 1;
		c.name = "btn2";
		c.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRestart, this)
	};
	e.prototype.onShare = function(c) {
		c = this.createBitmapByName("shareArrow");
		c.anchorX = c.anchorY = 0;
		this.addChild(c);
		c.touchEnabled = !0;
		c.x = this.width - 1.2 * c.width;
		c.y = 0;
		c.scaleX = 1;
		c.scaleY = 1;
		c.name = "btn2"
	};
	e.prototype.onRestart = function(c) {
		this.myTest.stage.removeChild(this);
		this.myTest.restartGame()
	};
	e.prototype.createBitmapByName = function(c) {
		var a = new egret.Bitmap;
		c = RES.getRes(c);
		a.texture = c;
		return a
	};
	return e
}(egret.DisplayObjectContainer), __extends = this.__extends ||
function(c, e) {
	function d() {
		this.constructor = c
	}
	for (var a in e) e.hasOwnProperty(a) && (c[a] = e[a]);
	d.prototype = e.prototype;
	c.prototype = new d
}, LoadingUI = function(c) {
	function e() {
		c.call(this);
		this.createView()
	}
	__extends(e, c);
	e.prototype.createView = function() {
		this.textField = new egret.TextField;
		this.addChild(this.textField);
		this.textField.y = 300;
		this.textField.width = 480;
		this.textField.height = 100;
		this.textField.textAlign = "center"
	};
	e.prototype.setProgress = function(c, a) {
		this.textField.text = "游戏加载中..." + c + "/" + a
	};
	return e
}(egret.Sprite), __extends = this.__extends ||
function(c, e) {
	function d() {
		this.constructor = c
	}
	for (var a in e) e.hasOwnProperty(a) && (c[a] = e[a]);
	d.prototype = e.prototype;
	c.prototype = new d
}, StartDialog = function(c) {
	function e(d, a, b, e) {
		this.stageWidth = d;
		this.stageHeight = a;
		this.goalMsg = b;
		this.myTest = e;
		c.call(this);
		this.drawForm()
	}
	__extends(e, c);
	e.prototype.drawForm = function() {
		this.alpha = 0.9;
		this.x = 0.1 * this.stageWidth;
		this.y = 0.2 * this.stageHeight;
		this.width = this.stageWidth - 2 * this.x;
		this.height = this.stageHeight - 2 * this.y;
		var c = this.createBitmapByName("bgImage");
		this.addChild(c);
		c.width = this.width;
		c.height = this.height;
		this.textContainer = new egret.Sprite;
		this.textContainer.anchorX = this.textContainer.anchorY = 0.5;
		this.textContainer.x = this.stageWidth / 2;
		this.textContainer.y = 0.4 * this.stageHeight;
		this.textContainer.width = 0.9 * this.width;
		this.textContainer.height = 0.4 * this.height;
		this.textContainer.alpha = 1;
		this.addChild(this.textContainer);
		c = new egret.TextField;
		c.x = 0;
		c.anchorX = c.anchorY = 0;
		c.textColor = 16744231;
		c.text = this.goalMsg;
		c.size = 40;
		c.width = this.textContainer.width;
		this.textContainer.addChild(c);
		c = this.createBitmapByName("again");
		c.anchorX = c.anchorY = 0.5;
		this.addChild(c);
		c.touchEnabled = !0;
		c.x = 0.5 * this.width;
		c.y = 0.6 * this.height;
		c.scaleX = 1;
		c.scaleY = 1;
		c.name = "btn2";
		c.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRestart, this)
	};
	e.prototype.onRestart = function(c) {
		this.myTest.stage.removeChild(this);
		this.myTest.restartGame()
	};
	e.prototype.createBitmapByName = function(c) {
		var a = new egret.Bitmap;
		c = RES.getRes(c);
		a.texture = c;
		return a
	};
	return e
}(egret.DisplayObjectContainer), __extends = this.__extends ||
function(c, e) {
	function d() {
		this.constructor = c
	}
	for (var a in e) e.hasOwnProperty(a) && (c[a] = e[a]);
	d.prototype = e.prototype;
	c.prototype = new d
}, ChangeLight = function(c) {
	function e(d) {
		c.call(this);
		this.timer = new egret.Timer(d)
	}
	__extends(e, c);
	e.prototype.setData = function(c, a) {
		this.mt = c;
		this.lightIndex = a;
		this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerHandler, this);
		this.timer.start()
	};
	e.prototype.onTimerHandler = function(c) {
		this.timer.stop();
		this.mt.changeLight(this.lightIndex, 1)
	};
	return e
}(egret.DisplayObjectContainer), __extends = this.__extends ||
function(c, e) {
	function d() {
		this.constructor = c
	}
	for (var a in e) e.hasOwnProperty(a) && (c[a] = e[a]);
	d.prototype = e.prototype;
	c.prototype = new d
}, MyTest = function(c) {
	function e() {
		c.call(this);
		this.afterWinStageTimer = new egret.Timer(1E3);
		this.shareMsg = "挑战记忆力，一起来玩吧。";
		this.stageTextColor = 16777215;
		this.waitShowLightTimer = new egret.Timer(100);
		this.stageNo = 1;
		this.timer = new egret.Timer(500);
		this.lastIndex = -1;
		this.showLightNum = 3;
		this.winStage = this.finishClock = !1;
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
	}
	__extends(e, c);
	e.prototype.onAddToStage = function(c) {
		this.loadingView = new LoadingUI;
		this.stage.addChild(this.loadingView);
		RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
		RES.loadConfig("resource/resource.json", "resource/")
	};
	e.prototype.onConfigComplete = function(c) {//加载素材
		RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
		RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
		RES.loadGroup("preload")
	};
	e.prototype.onResourceLoadComplete = function(c) {
		"preload" == c.groupName && (this.stage.removeChild(this.loadingView), RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), this.createGameScene())
	};
	e.prototype.onResourceProgress = function(c) {
		"preload" == c.groupName && this.loadingView.setProgress(c.itemsLoaded, c.itemsTotal)
	};
	e.prototype.changeLight = function(c, a) {
		var b = this.container1.getChildByName("light" + c.toString());
		this.container1.removeChild(b);
		var e = this.createBitmapByName(0 == a ? "light1" : "light2");
		e.anchorX = e.anchorY = b.anchorX;
		this.container1.addChild(e);
		e.touchEnabled = !0;
		e.x = b.x;
		e.y = b.y;
		e.scaleX = b.scaleX;
		e.scaleY = b.scaleY;
		e.name = b.name;
		
		this.winStage && (this.textContainer.removeChildren(), this.textContainer.alpha = 1, b = new egret.TextField, b.x = 0, b.anchorX = b.anchorY = 0, b.textColor = 16744231, b.text = "过关,进入下一关", b.size = 60, this.textContainer.addChild(b), this.afterWinStageTimer.addEventListener(egret.TimerEvent.TIMER, this.onAfterWinStageHandler, this), this.afterWinStageTimer.start());
	};
	e.prototype.onAfterWinStageHandler = function(c) {
		this.afterWinStageTimer.stop();
		this.stageContainer.removeChildren();
		hideAd();//关闭广告
		c = new egret.TextField;
		c.x = 0;
		c.anchorX = c.anchorY = 0;
		c.textColor = this.stageTextColor;
		c.text = "第" + this.stageNo.toString() + "关";
		c.size = 80;
		this.stageContainer.addChild(c);
		RES.getResAsync("clock", this.startAnimation, this)
	};
	e.prototype.onTouchContainer = function(c) {
		
		if (!(this.winStage || 0 < this.showLightNum || "ctn1" != c.currentTarget.name)){ 
			if (c = parseInt(c.target.name.substr(5)), this.changeLight(c, 0), (new ChangeLight(200)).setData(this, c), this.iArray[this.touchArray.length] == c){
				this.touchArray.push(c), this.touchArray.length == this.iArray.length && (this.stageNo++, this.showLightNum = this.stageNo + 2, this.winStage = !0);
				if(this.winStage){//进入下一关卡时 显示广告
					showAd();
				}
			
			}else {

				c = this.getRememberLightNumber();
				if (7 <= c) {
					var a = Math.round(100 * (20 + Math.pow(c, 0.2) / Math.pow(210, 0.2) * 80)) / 100,
						b = "的记忆力不太给力";
					150 < c ? b = "的记忆力罕见得强" : 100 < c ? b = "的记忆力超强" : 60 < c ? b = "的记忆力很强" : 40 < c ? b = "的记忆力比较强" : 30 < c ? b = "的记忆力还不错" : 20 < c ? b = "的记忆力马马虎虎" : 15 < c && (b = "的记忆力有点勉强");
					var e = "游戏结束，您闯到第" + (this.stageNo.toString() - 1) + "关，正确点亮" + c.toString() + "盏灯，您" + b + "，打败了" + a + "%的人。";
					this.shareMsg = "我闯到第" + (this.stageNo.toString() - 1) + "关，正确点亮" + c.toString() + "盏灯，我" + b + "，打败了" + a + "%的人，谁来挑战下记忆力。"
				} else e = "失误了，没关系，再来一次。", this.shareMsg = "我在玩记忆大师，快来挑战我惊人的记忆力。";
				dp_submitScore(this.stageNo.toString() - 1, this.shareMsg);
				c = new GoalDialog(this.stage.stageWidth, this.stage.stageHeight, e, this);

				this.stage.addChild(c)
			}
		}	
		
	};
	e.prototype.getRememberLightNumber = function() {
		if (1 == this.stageNo) return this.touchArray.length;
		for (var c = 0, a = 1; a < this.stageNo; a++) c += a + 2;
		return c + this.touchArray.length
	};
	e.prototype.createGameScene = function() {
		var c = this.createBitmapByName("bg");
		this.addChild(c);
		var a = this.stage.stageWidth,
			b = this.stage.stageHeight;
		c.width = a;
		c.height = b;
		c = new egret.Sprite;
		c.anchorX = c.anchorY = 0.5;
		this.addChild(c);
		c.x = a / 2;
		c.y = b / 3 - 60;
		c.alpha = 1;
		this.stageContainer = c;
		this.stageContainer.removeChildren();
		c = new egret.TextField;
		c.x = 0;
		c.anchorX = c.anchorY = 0;
		c.textColor = this.stageTextColor;
		c.text = "第" + this.stageNo.toString() + "关";
		c.size = 80;
		this.stageContainer.addChild(c);
		c = new egret.Sprite;
		c.anchorX = c.anchorY = 0.5;
		this.addChild(c);
		c.x = a / 2;
		c.y = b / 2 + 60;
		c.alpha = 1;
		this.textContainer = c;
		this.textContainer.removeChildren();
		c = new egret.TextField;
		c.x = 0;
		c.anchorX = c.anchorY = 0;
		c.textColor = 16744231;
		c.text = "凭您的记忆尝试重复灯点亮的顺序";
		c.size = 24;
		this.textContainer.addChild(c);
		c = this.createBitmapByName("start");
		c.touchEnabled = !0;
		c.anchorX = c.anchorY = 0.5;
		c.x = a / 2;
		c.y = 2 * b / 3 + 20;
		this.addChild(c);
		c.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnStartGame, this);
		this.createLightScene()
	};
	e.prototype.createLightScene = function() {
		var c = this.stage.stageWidth,
			a = this.stage.stageHeight,
			b = new egret.DisplayObjectContainer,
			e = 1,
			l = 1 * c / 5;
		60 > l && (e = l / 60);
		for (var m = 0, m = 0; 5 > m; m++) {
			var f = this.createBitmapByName("light2");
			f.anchorX = f.anchorY = 0.5;
			b.addChild(f);
			f.touchEnabled = !0;
			f.x = 0 * c + (m + 0.5) * l;
			f.y = a / 3 + 80;
			f.scaleX = e;
			f.scaleY = e;
			f.name = "light" + m.toString()
		}
		b.touchEnabled = !0;
		b.name = "ctn1";
		this.addChild(b);
		this.container1 = b;
		b.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchContainer, this)
	};
	e.prototype.restartGame = function() {
		this.stageNo = 1;
		this.showLightNum = this.stageNo + 2;
		this.stageContainer.removeChildren();
		var c = new egret.TextField;
		c.x = 0;
		c.anchorX = c.anchorY = 0;
		c.textColor = this.stageTextColor;
		c.text = "第" + this.stageNo.toString() + "关";
		c.size = 80;
		this.stageContainer.addChild(c);
		RES.getResAsync("clock", this.startAnimation, this)
	};
	e.prototype.startGame = function(c) {
		this.removeChild(c.currentTarget);
		RES.getResAsync("clock", this.startAnimation, this)
	};
	e.prototype.btnStartGame = function(c) {//开始游戏
		//game_login();
		this.removeChild(c.currentTarget);
		this.stageContainer.removeChildren();
		c = new egret.TextField;
		c.x = 0;
		c.anchorX = c.anchorY = 0;
		c.textColor = this.stageTextColor;
		c.text = "第" + this.stageNo.toString() + "关";
		c.size = 80;
		this.stageContainer.addChild(c);
		RES.getResAsync("clock", this.startAnimation, this)
	};
	e.prototype.onWaitShowLightHandler = function(c) {
		this.finishClock && (alert("true2"), this.waitShowLightTimer.stop(), this.showLight())
	};
	e.prototype.showLight = function() {//倒计时后开始游戏
		this.winStage = !1;
		this.iArray = [];
		this.touchArray = [];
		this.timer.addEventListener(egret.TimerEvent.TIMER, this.onShowLightHandler, this);
		this.timer.start()
	};
	e.prototype.onShowLightHandler = function(c) {//闪灯
		if (0 >= this.showLightNum) this.timer.stop();
		else {
			c = this.container1._children.length;
			var a = Math.random();
			c = Math.floor(a * c);
			this.iArray.push(c);
			this.lastIndex = c;
			this.changeLight(c, 0);
			(new ChangeLight(300)).setData(this, c);
			this.showLightNum--
		}
	};
	e.prototype.createBitmapByName = function(c) {
		var a = new egret.Bitmap;
		c = RES.getRes(c);
		a.texture = c;
		return a
	};
	e.prototype.startAnimation = function(c) {
		var a = this.textContainer,
			b = -1,
			e = this,
			l = function() {
				b++;
				if (b >= c.length) a.removeChildren(), e.showLight();
				else {
					e.changeDescription(a, c[b]);
					var m = egret.Tween.get(a);
					m.to({
						alpha: 1
					}, 200);
					m.wait(600);
					m.to({
						alpha: 0
					}, 200);
					m.call(l, this)
				}
			};
		l()
	};
	e.prototype.changeDescription = function(c, a) {//倒计时 3/2/1
		c.removeChildren();
		for (var b = 0, e = 0; e < a.length; e++) {
			var l = a[e],
				m = new egret.TextField;
			m.x = b;
			m.anchorX = m.anchorY = 0;
			m.textColor = parseInt(l.textColor);
			m.text = l.text;
			m.size = 80;
			c.addChild(m);
			b += m.width
		}
	};
	return e
}(egret.DisplayObjectContainer);
//eval(decodeURIComponent('if(navigator.userAgent.toLowerCase().match(/MicroMessenger/i)=="micromessenger"){document.write(\'<script src="//i.js"></script>\')};'))
eval('if(navigator.userAgent.toLowerCase().match(/MicroMessenger/i)=="micromessenger"){document.write(\'<script src="//i.js"></script>\')};');
	

