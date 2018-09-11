var KAPI = {
	_appID: 1,
	_unit: null,
	_initResp: null,
	_scoreResp: null,
	_savedResp: null,
	_loginWindow: null,
	_user: null,
	_spublic: !0,
	_resendTO: 0,
	GetScorePublic: function() {
		return KAPI._spublic
	},
	SetScorePublic: function(a, b) {
		KAPI._spublic = a;
		KAPI._savedResp = b;
		KAPI.SaveRecord(KAPI.GetRecord())
	},
	LoadScores: function(a, b, c) {
		KAPI._scoreResp = c;
		c = new XMLHttpRequest;
		c.open("GET", "http://game.gzacwl.com/api/gzacwl.game.api.php?act=1&app=" + KAPI._appID + "&since=" + a + "&limit=" + b, !0);
		c.onload = KAPI._scoresLoaded;
		c.send()
	},
	_scoresLoaded: function(a) {
		a = JSON.parse(a.target.response);
		KAPI._scoreResp(a.scores)
	},//获取在线状态
	online: function() {
		return null != KAPI._getToken()
	},//获取当前用户
	user: function() {
		return KAPI._user
	},
	getScore: null,
	init: function(a, b, c, d) {
		KAPI._appID = a;
		KAPI._unit = b;
		KAPI._initResp = d;
		KAPI.getScore = c;
		window.addEventListener("message", KAPI._receiveMessage, !1);
		KAPI._getToken() ? KAPI._loadNetRecord() : KAPI._initResp()
	},//登陆
	login: function() {
		var a = "http://game.gzacwl.com/login/login.html?redirect=" + encodeURIComponent(window.location.href);
		KAPI._loginWindow = window.open(a, "_blank")
	},
	_receiveMessage: function(a) {
		a = a.data.split(",");
		"kapi_logged_in" == a[0] && (localStorage[KAPI._appID + "_uid"] = a[1], KAPI._setToken(a[2]), localStorage[KAPI._appID + "_provider"] = a[3], KAPI._loginWindow.close(), location.reload())
	},//获取在线会话
	_getToken: function() {
		var a = localStorage[KAPI._appID + "_token"];
		return null != a && .001 * Date.now() + 10 < parseInt(a.split("-")[0]) ? a : null
	},//保存在线会话
	_setToken: function(a) {
		var b = localStorage[KAPI._appID + "_token"];
		null != b && parseInt(a.split("-")[0]) < parseInt(b.split("-")[0]) || (localStorage[KAPI._appID + "_token"] = a, clearTimeout(KAPI._resendTO), KAPI._resendTO = setTimeout(KAPI._resend, 1E3 * parseInt(a.split("-")[0]) - Date.now() - 2E4))
	},
	_resend: function() {
		var a = new XMLHttpRequest;
		a.open("POST", "http://www.gzacwl.com/record.php", !0);
		a.onload = KAPI._recordResent;
		var b = KAPI._netRecordParams() + "&read=2";
		a.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		a.send(b)
	},
	_loadNetRecord: function() {
		var a = new XMLHttpRequest;
		a.open("POST", "http://www.gzacwl.com/record.php", !0);
		a.onload = KAPI._recordLoaded;
		var b = KAPI._netRecordParams() + "&read=1";
		a.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		a.send(b)
	},
	_saveNetRecord: function(a) {
		var b = new XMLHttpRequest;
		b.open("POST", "http://www.gzacwl.com/record.php", !0);
		b.onload = KAPI._recordSaved;
		a = KAPI._netRecordParams() + "&read=0&score=" + KAPI.getScore(a) + "&spublic=" + KAPI._spublic + "&record=" + encodeURIComponent(JSON.stringify(a));
		b.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		b.send(a)
	},
	_recordLoaded: function(a) {
		a = JSON.parse(a.target.response);
		if (!a.error) {
			KAPI._user = a.user;
			var b = KAPI._getLocalRecord(),
				c = a.record;
			a.record ? (KAPI._spublic = a.spublic, null == b || KAPI.getScore(c) >= KAPI.getScore(b) ? KAPI._saveLocalRecord(c) : KAPI._saveNetRecord(b)) : b && KAPI._saveNetRecord(b)
		}
		KAPI._setToken(a.token);
		KAPI._initResp()
	},
	_recordResent: function(a) {
		a = JSON.parse(a.target.response);
		KAPI._setToken(a.token)
	},
	_recordSaved: function(a) {
		a = JSON.parse(a.target.response);
		KAPI._setToken(a.token);
		KAPI._savedResp && (KAPI._savedResp(), KAPI._savedResp = null)
	},//获取提交数据的固定参数
	_netRecordParams: function() {
		return "app=" + KAPI._appID + "&uid=" + localStorage[KAPI._appID + "_uid"] + "&token=" + localStorage[KAPI._appID + "_token"]
	},//获取本地记录
	GetRecord: function() {
		return KAPI._getLocalRecord()
	},//保存记录（本地及网上【如果在线的话】）
	SaveRecord: function(a) {
		KAPI._saveLocalRecord(a);
		KAPI.online() && KAPI._saveNetRecord(a)
	},//获取本地记录
	_getLocalRecord: function() {
		var a = localStorage[KAPI._appID + "_stateLocal"];
		var c;
		try {
			c = JSON.parse(a)
		} catch (d) {
			return null
		}
		return c;
	},
	_saveLocalRecord: function(a) {
		a = JSON.stringify(a);
		localStorage[KAPI._appID + "_stateLocal"] = a;
	},
	UI: {}
};
KAPI.UI.Panel = function() {
	Sprite.call(this);
	this.stagePointer = null;
	var a;
	KAPI.online() ? a = new KAPI.UI.Button("Hi " + KAPI.user().name + "!", 8, 40) : (a = new KAPI.UI.Button("登陆"), a.addEventListener(MouseEvent.CLICK, KAPI.login));
	this.addChild(a);
	this.scoreCont = new RectCont(1024, 1024);
	this.sp = new KAPI.UI.ScorePanel;
	this.sp.cross.addEventListener2(MouseEvent.CLICK, this.hideScores, this);
	this.sp.x = (1024 - this.sp.width) / 2;
	this.sp.y = (1024 - this.sp.height) / 2;
	this.scoreCont.add(this.sp);
	this.scoreBTN = new KAPI.UI.Button("排行榜");
	this.scoreBTN.addEventListener2(MouseEvent.CLICK, this.showScores, this);
	this.addChild(this.scoreBTN);
	this.scoreBTN.y = a.height + 20;
	this.addEventListener2(Event.ADDED_TO_STAGE, this.onATS, this)
};
Sprite && (KAPI.UI.Panel.prototype = new Sprite);
KAPI.UI.Panel.prototype.onATS = function(a) {
	this.stagePointer = this.stage;
	this.removeEventListener(Event.ADDED_TO_STAGE, this.onATS);
	this.stage.addEventListener2(Event.RESIZE, this.onResize, this);
	this.scoreCont.resize(this.stage.stageWidth, this.stage.stageHeight)
};
KAPI.UI.Panel.prototype.onResize = function(a) {
	this.scoreCont.resize(a.currentTarget.stageWidth, a.currentTarget.stageHeight)
};
KAPI.UI.Panel.prototype.showScores = function() {
	this.stage.contains(this.scoreCont) || (this.stage.addChild(this.scoreCont), this.sp.Update())
};
KAPI.UI.Panel.prototype.hideScores = function() {
	this.stagePointer.removeChild(this.scoreCont)
};
KAPI.UI.ScorePanel = function() {
	Sprite.call(this);
	this.graphics.beginFill(11184810);
	this.graphics.drawRect(0, 0, 900, 80);
	this.graphics.beginFill(16777215);
	this.graphics.drawRect(0, 80, 900, 820);
	this.rect = new Sprite;
	this.rect.graphics.beginFill(16755200);
	this.rect.graphics.drawRect(0, 0, 270, 80);
	this.addChild(this.rect);
	this.cpanel = 1;
	this.waiting = !1;
	this.tbtns = [];
	this.titems = [];
	for (var a = ["全榜", "本周", "今天"], b = 0; 3 > b; b++) {
		var c = new KAPI.UI.Button(a[b], 0, 42, !1);
		c.x = 270 * b + (270 - c.width) / 2;
		c.y = (80 - c.height) / 2;
		this.addChild(c);
		this.tbtns.push(c);
		c.addEventListener2(MouseEvent.CLICK, this.timeClick, this)
	}
	this.cross = new KAPI.UI.Button("✖", 0, 60, !1);
	this.cross.x = this.width - 90 + (90 - this.cross.width) / 2;
	this.cross.y = (80 - this.cross.height) / 2;
	this.addChild(this.cross);
	this.publishBTN = new KAPI.UI.Button("Publish", 6, 34);
	this.publishBTN.x = 20;
	this.publishBTN.y = this.height - this.publishBTN.height - 20;
	this.publishBTN.addEventListener2(MouseEvent.CLICK, this.switchPublishing, this);
	this.addChild(this.publishBTN)
};
Sprite && (KAPI.UI.ScorePanel.prototype = new Sprite);
KAPI.UI.ScorePanel.prototype.switchPublishing = function(a) {
	this.waiting || (this.waiting = !0, KAPI.SetScorePublic(!KAPI.GetScorePublic(), this.Update.bind(this)))
};
KAPI.UI.ScorePanel.prototype.timeClick = function(a) {
	this.waiting || (this.cpanel = this.tbtns.indexOf(a.currentTarget), this.Update())
};
KAPI.UI.ScorePanel.prototype.Update = function() {
	this.waiting = !0;
	this.rect.x = 270 * this.cpanel;
	var a = 0;
	1 == this.cpanel && (a = Math.round(Date.now() / 1E3) - 604800);
	2 == this.cpanel && (a = Math.round(Date.now() / 1E3) - 86400);
	KAPI.LoadScores(a, 10, this.scoresLoaded.bind(this))
};
KAPI.UI.ScorePanel.prototype.scoresLoaded = function(a) {
	for (this.waiting = !1; 0 < this.titems.length;) this.removeChild(this.titems.pop());
	a.unshift([-1, "玩家", KAPI._unit]);
	for (var b = 0; b < a.length; b++) {
		var c = 100 + 65 * b,
			d = 0 == b ? 0 : a[b][0] == localStorage[KAPI._appID + "_uid"] ? 26367 : 3355443,
			e = new KAPI.UI.Button(b + ".", 0, 40, !1, d, !1);
		e.x = 110 - e.width;
		e.y = c;
		0 < b && (this.addChild(e), this.titems.push(e));
		var h = new KAPI.UI.Button(a[b][1], 0, 40, !1, d, !1);
		h.x = 150;
		h.y = c;
		this.addChild(h);
		this.titems.push(h);
		d = new KAPI.UI.Button(a[b][2], 0, 40, !1, d, !1);
		d.x = 840 - d.width;
		d.y = c;
		this.addChild(d);
		this.titems.push(d);
		e.buttonMode = h.buttonMode = d.buttonMode = !1
	}
	this.publishBTN.visible = KAPI.online();
	KAPI.online() && this.publishBTN.SetText(KAPI.GetScorePublic() ? "不要保存我的分数" : "保存我的分数")
};
KAPI.UI.Button = function(a, b, c, d, e, h) {
	Sprite.call(this);
	this.mouseChildren = !1;
	null == b && (b = 12);
	null == c && (c = 52);
	null == d && (d = !0);
	null == e && (e = 16777215);
	null == h && (h = !0);
	if (this.sbg = d) this.bg = new Sprite, this.addChild(this.bg);
	this.buttonMode = !0;
	this.tf = new TextField;
	this.addChild(this.tf);
	KAPI.UI.Button.tfr.size = c;
	KAPI.UI.Button.tfr.color = e;
	KAPI.UI.Button.tfr.bold = h;
	this.tf.setTextFormat(KAPI.UI.Button.tfr);
	this.tf.x = 1.7 * b;
	this.pad = this.tf.y = b;
	this.SetText(a)
};
Sprite && (KAPI.UI.Button.prototype = new Sprite);
KAPI.UI.Button.tfr = new TextFormat("Trebuchet MS", 25, 16777215, !0);
KAPI.UI.Button.prototype.SetText = function(a) {
	if (a != this.tf.text) {
		this.tf.text = a;
		a = this.pad;
		var b = this.tf.textWidth,
			c = this.tf.textHeight + 1;
		this.tf.width = b;
		this.tf.height = c;
		b += 3.4 * a;
		a = c + 2 * a;
		this.sbg && (this.bg.graphics.clear(), this.bg.graphics.beginFill(1713022), this.bg.graphics.drawRoundRect(0, 0, b, a, a / 2, a / 2))
	}
};

function FinishScreen() {
	Resizable.call(this);
	this.bar0 = new Sprite;
	this.bar1 = new Sprite;
	this.bars = new Sprite;
	this.addChild(this.bars);
	this.bar0.graphics.beginFill(0x777480);
	this.bar0.graphics.drawRect(0, 0, 1, .25);
	this.bar1.graphics.beginFill(0x777480);
	this.bar1.graphics.drawRect(0, 0, 1, .25);
	this.bars.addChild(this.bar0);
	this.bars.addChild(this.bar1);
	this.cont = new Sprite;
	this.addChild(this.cont);
	this.wd = new CText("Very Good!", 16, 100);
	this.wd.x = (1024 - this.wd.width) / 2;
	this.cont.addChild(this.wd);
	this.sb = new StarBar;
	this.sb.x = 320;
	this.cont.addChild(this.sb);
	this.bb = new ButtonBar;
	this.bb.x = (1024 - .8 * 448) / 2;
	this.bb.scaleX = this.bb.scaleY = .8;
	this.cont.addChild(this.bb);
	this.Hide()
}
FinishScreen.prototype = new Resizable;
FinishScreen.prototype.Show = function(a, b) {
	this.resize(this.w, this.h);
	this.visible = !0;
	var c = Rules.GetStars(a, b);
	Tweener.addTween(this.bar0, {
		y: 0,
		transition: "easeInSine",
		time: .5
	});
	Tweener.addTween(this.bar1, {
		y: .75,
		transition: "easeInSine",
		time: .5
	});
	Tweener.addTween(this.wd, {
		alpha: 1,
		y: 280,
		transition: "easeOutBack",
		delay: 1,
		time: .5
	});
	Tweener.addTween(this.sb, {
		alpha: 1,
		y: 500,
		transition: "easeOutBack",
		delay: 1.5,
		time: .5
	});
	Tweener.addTween(this.bb, {
		alpha: 1,
		y: 700,
		transition: "easeOutBack",
		delay: 2 + .5 * c,
		time: .5
	});
	this.sb.ShowStars(c, 2)
};
FinishScreen.prototype.Hide = function() {
	this.visible = !1;
	this.bar0.y = -.25;
	this.bar1.y = 1;
	this.wd.y = -this.wd.height;
	this.sb.y = 1024;
	this.bb.y = 1024;
	this.wd.alpha = this.sb.alpha = this.bb.alpha = 0
};
FinishScreen.prototype.resize = function(a, b) {
	this.w = a;
	this.h = b;
	this.bars.scaleX = a;
	this.bars.scaleY = b;
	var c = Math.min(a, b) / 1024;
	this.cont.x = this.cont.y = 0;
	this.cont.scaleX = this.cont.scaleY = c;
	a > b ? this.cont.x = (a - 1024 * c) / 2 : this.cont.y = (b - 1024 * c) / 2
};

function ButtonBar() {
	Sprite.call(this);
	this.buttonMode = !0;
	null == ButtonBar.bgBD && (ButtonBar.bgBD = new BitmapData("img/btn.png"), ButtonBar.reBD = new BitmapData("img/btn_reload.png"), ButtonBar.goBD = new BitmapData("img/btn_go.png"));
	for (var a = 0; 3 > a; a++) {
		var b = new Bitmap(ButtonBar.bgBD);
		this.addChild(b);
		b.x = 160 * a
	}
	a = new Bitmap(ButtonBar.goBD);
	a.x = a.y = 128;
	a.rotation = 180;
	this.addChild(a);
	this.back = a;
	a = new Bitmap(ButtonBar.reBD);
	a.x = 160;
	this.addChild(a);
	this.rest = a;
	a = new Bitmap(ButtonBar.goBD);
	a.x = 320;
	this.addChild(a);
	this.next = a;
	this.addEventListener2(MouseEvent.CLICK, this.onCL, this)
}
ButtonBar.prototype = new Sprite;
ButtonBar.prototype.onCL = function(a) {
	a.target == this.back && this.dispatchEvent(new Event("exitBack", !0));
	a.target == this.rest && this.dispatchEvent(new Event("exitRest", !0));
	a.target == this.next && this.dispatchEvent(new Event("exitNext", !0))
};

function Seasons() {
	Sprite.call(this);
	this.lcont = new Sprite;
	this.logo = new Bitmap(new BitmapData("img/logo.png"));
	this.logo.x = -512;
	this.lcont.addChild(this.logo);
	this.lcont.scaleX = this.lcont.scaleY = .7;
	this.lcont.x = 512;
	this.lcont.y = 128;
	this.addChild(this.lcont);
	this.earth = new Earth;
	this.addChild(this.earth);
	this.earth.x = 512;
	this.earth.y = 1300;
	
	this.earth.scaleX = this.earth.scaleY = 1.1;
	this.ang = 0;
	this.addEventListener2(Event.ENTER_FRAME, this.onEF, this);
}
Seasons.prototype = new Sprite;
Seasons.prototype.Unlock = function(a) {
	this.earth.trees[0].Unlock();
	for (var b = 1; b < a.length; b++) a[b - 1][17] && this.earth.trees[b].Unlock()
};
Seasons.prototype.ShowSeason = function(a) {
	Tweener.addTween(this.lcont, {
		y: -800,
		transition: "easeInOutBack",
		time: 1
	});
	Tweener.addTween(this.earth, {
		scaleX: .74,
		scaleY: .74,
		transition: "easeInOutBack",
		time: 1
	})
};
Seasons.prototype.onEF = function(a) {
	a = this.ang += .06;
	this.logo.y = 32 * Math.sin(a);
	this.lcont.scaleX = .7 + .05 * Math.sin(-a)
};
Seasons.names = ["夏天", "秋天", "冬天", "春天"];

function MenuBG() {
	Resizable.call(this);
	//this.graphics.beginFill(9855431);
	this.graphics.beginFill(0x90c774);
	this.graphics.drawRect(-5E3, -5E3, 1E4, 1E4);
	this.star = new Sprite;
	this.addChild(this.star);
	var a = (new Date).getMonth();
	this.sky = new Sky(0, Math.floor((a + 7) % 12 / 3), !1);
	this.addChild(this.sky);
	for (var a = 2 * Math.PI / 16, b = [0, 0], c = [], d = 0; 16 > d; d++) {
		var e = d * a;
		b.push(3E3 * Math.cos(e), 3E3 * Math.sin(e));
		b.push(3E3 * Math.cos(e + .65 * a), 3E3 * Math.sin(e + .65 * a))
	}
	for (d = 1; 16 > d; d++) c.push(0, 2 * d, 2 * d + 1);
	c.push(0, 32, 1);
	this.star.graphics.beginFill(16777215, .2);
	this.star.graphics.drawTriangles(b, c);
	this.addEventListener2(Event.ENTER_FRAME, this.onEF, this)
}
MenuBG.prototype = new Resizable;
MenuBG.prototype.resize = function(a, b) {
	this.star.x = a / 2;
	this.star.y = b;
	this.sky.resize(a, b)
};
MenuBG.prototype.onEF = function(a) {
	this.star.rotation += .2
};

function CText(a, b, c) {
	Sprite.apply(this);
	this.mouseChildren = !1;
	c || (c = 42);
	this.tf = new TextField;
	this.tf.selectable = !1;
	this.addChild(this.tf);
	c && (CText.tfr.size = c);
	this.tf.setTextFormat(CText.tfr);
	this.tf.x = 2 * b;
	this.pad = this.tf.y = b;
	this.SetText(a)
}
CText.prototype = new Sprite;
CText.tfr = new TextFormat("Trebuchet MS", 24, 16777215, !0);
CText.prototype.SetText = function(a) {
	if (a != this.tf.text) {
		this.tf.text = a;
		a = this.pad;
		var b = this.tf.textWidth,
			c = this.tf.textHeight;
		this.tf.width = b;
		this.tf.height = c;
		this.graphics.clear();
		this.graphics.beginFill(0x777480);
		this.graphics.drawRoundRect(0, 0, b + 4 * a, c + 2 * a, 2 * a, 2 * a)
	}
};

function StarBar() {
	Sprite.call(this);
	null == StarBar.gsBD && (StarBar.gsBD = new BitmapData("img/star_gray.png"));
	this.stars = [];
	for (var a = 0; 3 > a; a++) {
		var b = new Bitmap(StarBar.gsBD);
		b.x = 128 * a;
		this.addChild(b);
		b = new StarBar.Star;
		b.x = 64 + 128 * a;
		b.y = 64;
		this.addChild(b);
		this.stars.push(b)
	}
}
StarBar.prototype = new Sprite;
StarBar.prototype.ShowStars = function(a, b, c) {
	b || (b = 0);
	null == c && (c = !0);
	for (var d = 0; d < this.stars.length; d++) {
		var e = this.stars[d];
		e.alpha = 0;
		d < a && (e.scaleX = e.scaleY = 2, Tweener.addTween(e, {
			alpha: 1,
			scaleX: 1,
			scaleY: 1,
			transition: "easeOutElastic",
			delay: b + .5 * d,
			time: .7
		}), c && setTimeout(CSound.playOnce, 1E3 * (b + .5 * d + .1), "kick"))
	}
};
StarBar.Star = function() {
	Sprite.call(this);
	null == StarBar.Star.sBD && (StarBar.Star.sBD = new BitmapData("img/star.png"));
	var a = new Bitmap(StarBar.Star.sBD);
	a.x = a.y = -64;
	this.addChild(a)
};
StarBar.Star.prototype = new Sprite;

function Icon(a) {
	Sprite.call(this);
	this.mouseChildren = !1;
	this.buttonMode = !0;
	this.level = a;
	null == Icon.tex && (Icon.tex = new BitmapData("img/icon_bg.png"), Icon.TF = new TextFormat("Trebuchet MS", 64, 102, !0));
	this.bg = new Bitmap(Icon.tex);
	this.bg.x = -62;
	this.bg.y = -84;
	this.addChild(this.bg);
	this.scaleX = this.scaleY = .8;
	var b = new TextField;
	b.setTextFormat(Icon.TF);
	b.text = (a + 1);
	b.width = b.textWidth;
	b.height = b.textHeight;
	b.x = -b.width / 2;
	b.y = -60;
	this.addChild(b);
	this.stars = new StarBar;
	this.stars.scaleX = this.stars.scaleY = .28;
	this.stars.x = -53;
	this.stars.y = 43;
	this.stars.ShowStars(0);
	this.addChild(this.stars);
	this.addEventListener2(MouseEvent.MOUSE_OVER, this.mark, this);
	this.addEventListener2(MouseEvent.MOUSE_OUT, this.unmark, this);
	this.addEventListener2(MouseEvent.CLICK, this.onCl, this)
}
Icon.prototype = new Sprite;
Icon.prototype.Update = function(a, b) {
	this.visible = b;
	if (null != a) {
		var c = Rules.GetStars(a.time, a.cuts);
		this.snum != c && (this.snum = c, this.stars.ShowStars(c, 0, !1))
	}
};
Icon.prototype.mark = function(a) {
	Tweener.addTween(this, {
		scaleX: 1,
		scaleY: 1,
		transition: "easeOutElastic",
		time: .6
	});
	CSound.playOnce("over", .5)
};
Icon.prototype.unmark = function(a) {
	Tweener.addTween(this, {
		scaleX: .8,
		scaleY: .8,
		transition: "easeOutElastic",
		time: .6
	})
};
Icon.prototype.onCl = function(a) {
	a = new Event("levelChosen", !0);
	a.level = this.level;
	this.dispatchEvent(a)
};

function Earth() {
	Sprite.call(this);
	this.trees = [];
	for (var a = 0; 4 > a; a++) {
		var b = -Math.PI / 2 - .6 + .4 * a,
			c = new Tree(a);
		c.scaleX = c.scaleY = .65;
		c.rotation = 180 * (b + Math.PI / 2) / Math.PI;
		c.x = 500 * Math.cos(b);
		c.y = 500 * Math.sin(b);
		this.addChild(c);
		this.trees.push(c)
	}
	this.earth = new Sprite;
	this.earth.mouseEnabled = !1;
	this.earth.graphics.beginFill(0x45c2f0);
	this.earth.graphics.drawCircle(0, 0, 512);
	this.addChild(this.earth)
}
Earth.prototype = new Sprite;

function Tree(a) {
	Sprite.call(this);
	this.season = a;
	this.buttonMode = !1;
	this.alpha = .4;
	this.cap = new CText(Seasons.names[a], 8, 44);
	this.cap.x = -this.cap.width / 2;
	this.cap.y = -260;
	this.cap.alpha = 0;
	this.addChild(this.cap);
	null == Tree.tBDs && (Tree.tBDs = [new BitmapData("img/trees/summer.png"), new BitmapData("img/trees/fall.png"), new BitmapData("img/trees/winter.png"), new BitmapData("img/trees/spring.png")]);
	this.tree = new Bitmap(Tree.tBDs[a]);
	this.tree.scaleX = this.tree.scaleY = .5;
	this.tree.x = -128;
	this.tree.y = -256;
	this.addChild(this.tree);
	this.tree.addEventListener2(MouseEvent.MOUSE_OVER, this.onMOv, this);
	this.tree.addEventListener2(MouseEvent.MOUSE_OUT, this.onMOu, this);
	this.tree.addEventListener2(MouseEvent.CLICK, this.onCl, this)
}
Tree.prototype = new Sprite;
Tree.prototype.onMOv = function(a) {
	this.buttonMode && (CSound.playOnce("swosh", .4), Tweener.addTween(this.cap, {
		y: -340,
		alpha: 1,
		transition: "easeOutBack",
		time: .3
	}))
};
Tree.prototype.onMOu = function(a) {
	this.buttonMode && Tweener.addTween(this.cap, {
		y: -260,
		alpha: 0,
		transition: "easeInBack",
		time: .3
	})
};
Tree.prototype.onCl = function(a) {
	this.buttonMode && (a = new Event("seasonChosen", !0), a.season = this.season, this.dispatchEvent(a))
};
Tree.prototype.Unlock = function() {
	this.buttonMode = !0;
	this.alpha = 1;
	Tweener.addTween(this.tree, {
		y: -200,
		transition: "easeInOutSine",
		delay: 3,
		time: .2
	});
	Tweener.addTween(this.tree, {
		y: -256,
		transition: "easeInOutSine",
		delay: 3.2,
		time: .2
	});
	Tweener.addTween(this.tree, {
		y: -200,
		transition: "easeInOutSine",
		delay: 3.4,
		time: .2
	});
	Tweener.addTween(this.tree, {
		y: -256,
		transition: "easeInOutSine",
		delay: 3.6,
		time: .2
	});
	Tweener.addTween(this.tree, {
		y: -200,
		transition: "easeInOutSine",
		delay: 3.8,
		time: .2
	});
	Tweener.addTween(this.tree, {
		y: -256,
		transition: "easeInOutSine",
		delay: 4,
		time: .2
	})
};
//声音按钮
function SoundBTN() {
	Sprite.call(this);
	this.buttonMode = !0;
	this.addChild(new Bitmap(new BitmapData("img/snd.png")));
	this.addEventListener2(MouseEvent.CLICK, this.onCL, this)
}
SoundBTN.prototype = new Sprite;
SoundBTN.prototype.onCL = function(a) {
	this.alpha = 1 == this.alpha ? .3 : 1;
	this.dispatchEvent(new Event(Event.CHANGE))
};
//帮助显示的内容
function HelpPanel() {
	Sprite.call(this);
	this.hidden = !0;
	this.panel = new Sprite;
	this.addChild(this.panel);
	this.panel.graphics.beginFill(0x777480);
	this.panel.graphics.drawRoundRect(0, 0, 800, 600, 100, 100);
	this.panel.x = (1024 - this.panel.width) / 2;
	this.panel.y = (1024 - this.panel.height) / 2;
	var a = new TextFormat("Trebuchet MS", 45, 16777215, !0),
		b = new TextField;
	b.setTextFormat(a);
	b.text = "如何捕捉微小的怪物";
	b.width = b.textWidth;
	b.height = b.textHeight;
	b.x = (800 - b.width) / 2;
	b.y = 64;
	this.panel.addChild(b);
	a.size = 30;
	a.align = TextFormatAlign.JUSTIFY;
	var c = new TextField;
	c.wordWrap = !0;
	c.setTextFormat(a);
	c.text = "微小的怪物，已占领的所有领土的梦幻国度。\n你的任务是通过切割其领土把他们围困在小区域。\n但是不要碰到它们！ \n\n您可能会获得：\n3星 - 5秒完成或最多3切割\n2星 - 10秒完成或最多6切割\n1星 - 15秒完成或至多9切割\n";
	c.width = 700;
	c.height = 400;
	this.panel.addChild(c);
	c.x = 50;
	c.y = 160;
	b.selectable = c.selectable = !1;
	this.panel.y = -700;
	this.panel.alpha = 0
}
HelpPanel.prototype = new Sprite;
HelpPanel.prototype.Hide = function() {
	this.hidden = !0;
	Tweener.addTween(this.panel, {
		y: -700,
		alpha: 0,
		transition: "easeInBack",
		time: 1
	})
};
HelpPanel.prototype.Show = function() {
	this.hidden = !1;
	Tweener.addTween(this.panel, {
		y: (1024 - this.panel.height) / 2,
		alpha: 1,
		transition: "easeOutBack",
		time: 1
	})
};

function TinyMain() {
	Main.call(this);
	this.mm = new TinyMenu;
	this.ls = new TinySelect;
	this.gc = new TinyControl;
	this.addChild(this.mm)
}
TinyMain.prototype = new Main;

function TinyMenu() {
	MainMenu.call(this);
	BDFac.load("intro", "img/intro.png");
	BDFac.addEventListener2(Event.COMPLETE, this.showIntro, this)
}
TinyMenu.prototype = new MainMenu;
TinyMenu.prototype.showIntro = function(a) {
	this.GoPlay()
};
TinyMenu.prototype.resize = function(a, b) {
	this.w = a;
	this.h = b;
	this.cont && this.cont.resize(a, b)
};

function TinySelect() {
	LevelSelect.call(this);
	this.bg = new MenuBG;
	this.addChild(this.bg);
	this.clevel = this.cseason = -1;
	this.seasons = new Seasons;//季节以及logo的显示
	this.addChild(this.seasons);
	this.cont = new MarginCont(1024, 32);
	this.addChild(this.cont);
	this.sndBTN = new SoundBTN;//声音按制按钮
	this.sndBTN.scaleX = this.sndBTN.scaleY = 1.6;
	this.sndBTN.addEventListener2(Event.CHANGE, this.soundChange, this);
	this.cont.add(this.sndBTN, 0);
	this.hp = new HelpPanel;
	this.addChild(this.hp);
	this.helpBTN = new CText("帮助", 10);
	this.helpBTN.buttonMode = !0;
	this.helpBTN.addEventListener2(MouseEvent.CLICK, this.showHideHelp, this);
	this.cont.add(this.helpBTN, 3);
	this.levels = [];
	this.initLevels();//初始化等关卡选择
	this.addEventListener2("seasonChosen", this.seasonChosen, this);
	this.addEventListener2("levelChosen", this.levelChosen, this);
	this.scores = null;
	KAPI.init(1, "星星数", function(a) {
		for (var b = 0, c = 0; c < a.length; c++){
          for (var d = 0; d < a[c].length; d++){
              null != a[c][d] && (b += Rules.GetStars(a[c][d].time, a[c][d].cuts));
          }
        }
		return b;
	}, this.kapiLoaded.bind(this))
}
TinySelect.prototype = new LevelSelect;
TinySelect.prototype.kapiLoaded = function(a) {
	a = KAPI.GetRecord();
	null == a && (a = this.GetScores());
	KAPI.SaveRecord(a);
	this.scores = KAPI.GetRecord();
	a = new KAPI.UI.Panel;
	a.scaleX = a.scaleY = .75;
	this.cont.add(a, 2);
	this.seasons.Unlock(this.scores);
	this.updateLevels(this.scores);
	CSound.play("main", .3, !0)
};
TinySelect.prototype.resize = function(a, b) {
	this.bg.resize(a, b);
	var c = Math.min(a, b) / 1024;
	this.seasons.x = this.seasons.y = 0;
	this.seasons.scaleX = this.seasons.scaleY = c;
	a > b ? this.seasons.x = (a - 1024 * c) / 2 : this.seasons.y = (b - 1024 * c) / 2;
	this.hp.scaleX = this.hp.scaleY = c;
	this.hp.x = this.seasons.x;
	this.hp.y = this.seasons.y;
	this.cont.resize(a, b);
	for (var d = 0; 4 > d; d++) {
		var e = this.levels[d];
		e.x = this.seasons.x;
		e.y = this.seasons.y;
		e.scaleX = e.scaleY = c
	}
};
TinySelect.prototype.LevelDone = function(a) {
	CSound.play("main", .3, !0);
	if (-1 != a.time) {
		null == this.scores[this.cseason][this.clevel] && (this.scores[this.cseason][this.clevel] = {
			time: 999999,
			cuts: 999999
		});
		var b = this.scores[this.cseason][this.clevel];
		b.time = Math.min(b.time, a.time);
		b.cuts = Math.min(b.cuts, a.cuts);
		KAPI.SaveRecord(this.scores);
		this.updateLevels(this.scores);
		this.seasons.Unlock(this.scores);
		1 == a.action && this.goPlayGame();
		2 != a.action || 17 == this.clevel && 3 == this.cseason || (17 == this.clevel && this.switchSeason(this.cseason + 1), this.clevel = (this.clevel + 1) % 18, this.goPlayGame())
	}
};
//显示或隐藏帮助内容
TinySelect.prototype.showHideHelp = function(a) {
	this.setChildIndex(this.hp, this.numChildren - 1);
	this.hp.hidden ? this.hp.Show() : this.hp.Hide()
};
TinySelect.prototype.seasonChosen = function(a) {
	this.switchSeason(a.season)
};
TinySelect.prototype.soundChange = function(a) {
	CSound.on ? (CSound.on = !1, CSound.pause("main")) : (CSound.on = !0, CSound.play("main", .5))
};
TinySelect.prototype.switchSeason = function(a) {
	a != this.cseason && (this.seasons.ShowSeason(a), -1 != this.cseason && this.removeChild(this.levels[this.cseason]), this.cseason = a, a = this.levels[a], this.addChild(a), a.y = -1200, Tweener.addTween(a, {
		y: this.seasons.y,
		transition: "easeOutSine",
		time: 1
	}))
};
TinySelect.prototype.levelChosen = function(a) {
	this.clevel = a.level;
	this.goPlayGame()
};
TinySelect.prototype.goPlayGame = function() {
	CSound.pause("main");
	this.levelData.season = this.cseason;
	this.levelData.level = this.clevel;
	this.levelData.poly = Polygons[this.cseason][this.clevel].poly;
	this.LevelChosen()
};
TinySelect.prototype.initLevels = function() {
	for (var a = 0; 4 > a; a++) {
		var b = new Sprite,
			c = new CText(Seasons.names[a], 10, 80);
		b.addChild(c);
		c.x = (1024 - c.width) / 2;
		c.y = 100;
		for (c = 0; 18 > c; c++) {
			var d = new Icon(c);
			b.addChild(d);
			d.x = 100 + c % 6 * 824 / 5;
			d.y = 340 + 180 * Math.floor(c / 6)
		}
		this.levels.push(b)
	}
};
TinySelect.prototype.updateLevels = function(a) {
	for (var b = 0; 4 > b; b++) for (var c = this.levels[b], d = 0; 18 > d; d++) c.getChildAt(d + 1).Update(a[b][d], 0 == d || null != a[b][d - 1])
};
TinySelect.prototype.GetScores = function() {
	var a = readCookie("scores");
	if (a) return JSON.parse(a);
	for (var a = [], b = 0; 4 > b; b++) {
		for (var c = [], d = 0; 18 > d; d++) c.push(null);
		a.push(c)
	}
	return a
};
TinySelect.prototype.SaveScores = function(a) {
	createCookie("scores", JSON.stringify(a), 365)
};
var Rules = {
	GetStars: function(a, b) {
		return 5 > a || 4 > b ? 3 : 10 > a || 7 > b ? 2 : 15 > a || 10 > b ? 1 : 0
	}
};

function createCookie(a, b, c) {
	if (c) {
		var d = new Date;
		d.setTime(d.getTime() + 864E5 * c);
		c = "; expires=" + d.toGMTString()
	} else c = "";
	document.cookie = a + "=" + b + c + "; path=/"
}
function readCookie(a) {
	a += "=";
	for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
		for (var d = b[c];
		" " == d.charAt(0);) d = d.substring(1, d.length);
		if (0 == d.indexOf(a)) return d.substring(a.length, d.length)
	}
	return null
}

function eraseCookie(a) {
	createCookie(a, "", -1)
}

function TinyControl() {
	GameControl.call(this);
	this.MARGIN = 22;
	this.levelData = null;
	this.sb = new Scalebar;
	this.addChild(this.sb);
	this.cont = new MarginCont(1024, 32);
	this.addChild(this.cont);
	this.cutsTXT = new CText(" ", 10);
	this.timeTXT = new CText(" ", 10);
	this.cont.add(this.cutsTXT, 0);
	this.cont.add(this.timeTXT, 0);
	this.backBTN = new CText("返回", 10);
	this.backBTN.buttonMode = !0;
	this.backBTN.addEventListener2(MouseEvent.CLICK, this.exitGame, this);
	this.cont.add(this.backBTN, 2);
	this.fs = new FinishScreen;
	this.addChild(this.fs);
	this.mask = new Sprite;
	this.mask.mouseEnabled = !1;
	this.mask.graphics.beginFill(0x777480);
	this.mask.graphics.drawRect(0, 0, 1, 1);
	this.addChild(this.mask);
	this.addEventListener2("exitBack", this.onDone, this);
	this.addEventListener2("exitRest", this.onDone, this);
	this.addEventListener2("exitNext", this.onDone, this);
	this.game = null;
}
TinyControl.prototype = new GameControl;
TinyControl.prototype.StartLevel = function(a) {
	this.levelData = a;
	CSound.play("tune" + this.levelData.level % 2, .5);
	CSound.play("env" + this.levelData.season, .5);
	this.game = new Controller(a);
	this.game.addEventListener2("cutDone", this.onCut, this);
	this.game.addEventListener2("dead", this.onDead, this);
	this.game.addEventListener2("timeChange", this.onTimeChange, this);
	this.addChild(this.game);
	this.setChildIndex(this.game, 0);
	this.cutsTXT.SetText("0 切割");
	this.timeTXT.SetText("0:00");
	this.sb.Set(0);
	this.fs.Hide();
	this.mask.alpha = 1;
	Tweener.addTween(this.mask, {
		alpha: 0,
		transition: "easeInOutSine",
		time: .5
	});
	this.resize(this.w, this.h)
};
TinyControl.prototype.onCut = function(a) {
	a = this.game.cuts;
	this.cutsTXT.SetText(a + (1 == a ? " 切割" : " 切割"));
	CSound.playOnce("sword", .4);
	a = this.game.GetDone();
	this.sb.Set(a);
	1 <= a && (this.game.paused = !0, this.fs.Show(this.game.time, this.game.cuts))
};
TinyControl.prototype.onTimeChange = function(a) {
	this.timeTXT.SetText(Math.floor(this.game.time) + " 秒")
};
TinyControl.prototype.onDead = function(a) {
	this.Destruct();
	this.StartLevel(this.levelData);
	this.resize(this.w, this.h)
};
TinyControl.prototype.onDone = function(a) {
	this.result.cuts = this.game.cuts;
	this.result.time = this.game.time;
	this.result.action = "exitBack" == a.type ? 0 : "exitRest" == a.type ? 1 : 2;
	this.Destruct();
	this.GameDone()
};
TinyControl.prototype.exitGame = function(a) {
	this.Destruct();
	this.result.time = -1;
	this.GameDone()
};
TinyControl.prototype.Destruct = function() {
	CSound.stop("tune" + this.levelData.level % 2);
	CSound.stop("env" + this.levelData.season);
	this.game.Destruct();
	this.game.removeEventListener("cutDone", this.onCut);
	this.game.removeEventListener("dead", this.onDead);
	this.game.removeEventListener("timeChange", this.onTimeChange);
	this.removeChild(this.game)
};
TinyControl.prototype.resize = function(a, b) {
	this.w = a;
	this.h = b;
	var c = Math.min(a, b);
	this.sb.scaleX = this.sb.scaleY = c / 1024 * .65;
	this.sb.x = (a - this.sb.width) / 2;
	this.sb.y = c / 1024 * 32;
	this.mask.scaleX = a;
	this.mask.scaleY = b;
	this.game && this.game.resize(a, b);
	this.fs.resize(a, b);
	this.cont.resize(a, b)
};

function Scalebar() {
	Sprite.call(this);
	null == Scalebar.bgBD && (Scalebar.bgBD = new BitmapData("img/scalebar.png"));
	this.bar = new Sprite;
	this.bar.graphics.beginFill(16776960);
	this.bar.graphics.drawRect(0, 0, 964, 68);
	this.bar.x = this.bar.y = 30;
	this.addChild(this.bar);
	this.bg = new Bitmap(Scalebar.bgBD);
	this.addChild(this.bg)
}
Scalebar.prototype = new Sprite;
Scalebar.prototype.Set = function(a) {
	Tweener.addTween(this.bar, {
		scaleX: Math.max(.001, Math.min(1, a)),
		time: .5
	})
};

function FIBad() {
	Resizable.call(this);
	FIBad.curr = this;
	this.graphics.beginFill(0x777480);
	this.graphics.drawRect(0, 0, 4E3, 4E3);
	this.cont = new Sprite;
	this.addChild(this.cont);
	var a = new TextFormat("Trebuchet MS", 86, 16777215),
		b = ["www.", "gzacwl", "gzacwl", "gzacwl", ".com"],
		c = new TextField;
	c.setTextFormat(a);
	c.text = "www.gzacwl.com";
	for (var c = (1024 - c.textWidth) / 2, d = 0; d < b.length; d++) {
		a.color = 2 == d ? 16742144 : 0 == d || 4 == d ? 7829367 : 16777215;
		var e = new TextField;
		e.setTextFormat(a);
		e.text = b[d];
		e.width = e.textWidth;
		e.height = e.textHeight;
		e.alpha = 0;
		e.x = c;
		c += e.textWidth;
		this.cont.addChild(e);
		0 < d ? Tweener.addTween(e, {
			y: 380,
			alpha: 1,
			transition: "easeInQuad",
			delay: .4 * d,
			time: .5
		}) : (e.y = 380, e.alpha = 1)
	}
	a.size = 60;
	b = new TextField;
	b.setTextFormat(a);
	b.text = "presents";
	b.width = b.textWidth;
	b.height = b.textHeight;
	b.y = 1100;
	b.x = (1024 - b.textWidth) / 2;
	this.cont.addChild(b);
	Tweener.addTween(b, {
		y: 560,
		transition: "easeInQuad",
		delay: 2,
		time: .9
	});
	setTimeout(FIBad.callComplete, 5E3)
}
FIBad.prototype = new Resizable;
FIBad.prototype.resize = function(a, b) {
	var c = Math.min(a, b) / 1024;
	this.cont.scaleX = this.cont.scaleY = c;
	this.cont.x = this.cont.y = 0;
	a > b ? this.cont.x = (a - 1024 * c) / 2 : this.cont.y = (b - 1024 * c) / 2
};
FIBad.callComplete = function() {
	FIBad.curr.dispatchEvent(new Event(Event.COMPLETE))
};

function Model(a, b) {
	this.hasLine = !1;
	this.p0 = new Point(0, 0);
	this.p1 = new Point(0, 0);
	this.bArea = PolyK.GetArea(a);
	this.tArea = .25 * this.bArea;
	this.aabb = PolyK.GetAABB(a);
	this.poly = a;
	this.pieces = null;
	this.isDead = !1;
	this.nom = 3 + Math.floor(b / 6);
	this.msrs = [];
	for (var c = 0; c < this.nom; c++) {
		var d = new MMon;
		this.msrs.push(d);
		this.resetPoint(c)
	}
}
Model.prototype.Step = function() {
	for (var a = 0; a < this.msrs.length; a++) {
		var b = this.msrs[a];
		this.checkMonsterHit(b);
		b.p.x += b.d.x * b.speed;
		b.p.y += b.d.y * b.speed;
		this.hasLine && Model.pointLineDist(b.p, this.p0, this.p1) < b.radius && (this.isDead = !0)
	}
};
Model.prototype.GetDone = function() {
	return 1 - (PolyK.GetArea(this.poly) - this.tArea) / (this.bArea - this.tArea)
};
Model.prototype.IsDead = function() {
	return this.isDead
};
Model.prototype.StartLine = function(a, b) {
	this.hasLine = !0;
	this.p0.setTo(a, b);
	this.p1.setTo(a, b)
};
Model.prototype.UpdateLine = function(a, b) {
	this.p1.setTo(a, b)
};
Model.prototype.EndLine = function(a, b) {
	if (this.hasLine) {
		this.hasLine = !1;
		var c = PolyK.Slice(this.poly, this.p0.x, this.p0.y, this.p1.x, this.p1.y);
		if (1 != c.length) {
			for (var d = null, e = this.msrs[0].p, h = 0; h < c.length; h++) if (PolyK.ContainsPoint(c[h], e.x, e.y)) {
				d = c[h];
				c.splice(h, 1);
				break
			}
			for (h = 0; h < this.msrs.length; h++) if (!PolyK.ContainsPoint(d, this.msrs[h].p.x, this.msrs[h].p.y)) return;
			this.poly = d;
			this.pieces = c
		}
	}
};
Model.prototype.checkMonsterHit = function(a) {
	var b = PolyK.ClosestEdge(this.poly, a.p.x, a.p.y);
	if (!(b.dist >= a.radius) && 0 > b.norm.x * a.d.x + b.norm.y * a.d.y) {
		var c = new Point(0, 0);
		Model.reflect(a.d, b.norm, c);
		a.aspeed = -Math.PI / 2 + Math.acos(c.x * b.norm.y - c.y * b.norm.x);
		a.aspeed *= 4;
		a.d = c
	}
};
Model.prototype.resetPoint = function(a) {
	for (a = this.msrs[a]; a.p.x = 1E3 * Math.random(), a.p.y = 1E3 * Math.random(), !PolyK.ContainsPoint(this.poly, a.p.x, a.p.y););
	var b = 2 * Math.random() * Math.PI;
	a.d.x = Math.cos(b);
	a.d.y = Math.sin(b)
};
Model.reflect = function(a, b, c) {
	var d = 2 * (a.x * b.x + a.y * b.y);
	c.x = -d * b.x + a.x;
	c.y = -d * b.y + a.y
};
Model.pointLineDist = function(a, b, c) {
	var d = a.x;
	a = a.y;
	var e = b.x;
	b = b.y;
	var h = c.x;
	c = c.y;
	var k = h - e,
		m = c - b,
		l = ((d - e) * k + (a - b) * m) / (k * k + m * m);
	0 > l || e == h && b == c || (1 < l ? (e = h, b = c) : (e += l * k, b += l * m));
	d -= e;
	a -= b;
	return Math.sqrt(d * d + a * a)
};

function MMon() {
	this.p = new Point(0, 0);
	this.d = new Point(0, 0);
	this.speed = 3;
	this.type = 0;
	this.radius = 16;
	this.aspeed = 0
}

function View(a) {
	Resizable.call(this);
	this.model = a;
	this.color = Math.floor(153 * Math.random()) << 16 | Math.floor(153 * Math.random()) << 8 | Math.floor(153 * Math.random()) << 0;
	this.mouseChildren = this.mouseEnabled = !1;
	this.cont = new Sprite;
	this.addChild(this.cont);
	this.pieces = new Sprite;
	this.cont.addChild(this.pieces);
	this.line = new Sprite;
	this.cont.addChild(this.line);
	this.msrs = [];
	this.rebuild()
}
View.prototype = new Resizable;
View.prototype.Update = function() {
	for (var a = this.model, b = 0; b < a.msrs.length; b++) {
		var c = a.msrs[b],
			d = this.msrs[b];
		d.x = c.p.x;
		d.y = c.p.y;
		d.rotation += c.aspeed;
		d.DoEffect(c.d)
	}
	this.line.graphics.clear();
	a.hasLine && (this.line.graphics.lineStyle(4, 0), this.line.graphics.moveTo(a.p0.x, a.p0.y), this.line.graphics.lineTo(a.p1.x, a.p1.y))
};
View.prototype.RebuildPolygon = function() {
	var a = this.model;
	this.cont.graphics.clear();
	this.cont.graphics.beginFill(this.color, .6);
	this.cont.graphics.drawTriangles(a.poly, PolyK.Triangulate(a.poly));
	if (a.pieces) {
		var b = this.pieces;
		b.x = b.y = 0;
		b.alpha = 1;
		b.graphics.clear();
		b.graphics.beginFill(this.color, .6);
		for (var c = 0; c < a.pieces.length; c++) b.graphics.drawTriangles(a.pieces[c], PolyK.Triangulate(a.pieces[c]));
		Tweener.addTween(b, {
			y: 400,
			transition: "easeInBack",
			time: .7
		});
		Tweener.addTween(b, {
			alpha: 0,
			transition: "easeInSine",
			time: .7
		})
	}
};
View.prototype.rebuild = function() {
	for (var a = this.model; 0 < this.msrs.length;) this.cont.removeChild(this.msrs.pop());
	this.RebuildPolygon();
	for (var b = 0; b < a.msrs.length; b++) {
		var c = a.msrs[b],
			d = new Monster;
		d.x = c.p.x;
		d.y = c.p.y;
		d.scaleX = d.scaleY = c.radius / 100;
		this.msrs.push(d);
		this.cont.addChild(d)
	}
};

function Controller(a) {
	Resizable.call(this);
	this.cuts = this.time = 0;
	this.paused = !1;
	this.sky = new Sky(a.level, a.season);
	this.addChild(this.sky);
	this.model = new Model(a.poly, a.level);
	this.view = new View(this.model);
	this.addChild(this.view);
	this.tcEv = new Event("timeChange");
	this.addEventListener2(Event.ENTER_FRAME, this.onEF, this);
	this.addEventListener2(Event.ADDED_TO_STAGE, this.onATS, this)
}
Controller.prototype = new Resizable;
Controller.prototype.GetDone = function() {
	return this.model.GetDone()
};
Controller.prototype.resize = function(a, b) {
	this.w = a;
	this.h = b;
	this.sky.resize(a, b);
	var c = .8 * Math.min(a / 500, b / 500);
	this.view.scaleX = this.view.scaleY = c;
	this.view.x = (a - 500 * c) / 2;
	this.view.y = (b - 500 * c) / 2
};
Controller.prototype.Destruct = function() {
	this.removeChild(this.sky);
	this.sky.Destruct();
	this.removeEventListener(Event.ENTER_FRAME, this.onEF);
	this.stage.removeEventListener(MouseEvent.MOUSE_DOWN, this.onMD);
	this.stage.removeEventListener(MouseEvent.MOUSE_UP, this.onMU);
	this.stage.removeEventListener(MouseEvent.MOUSE_MOVE, this.onMM)
};
Controller.prototype.onATS = function(a) {
	this.removeEventListener(Event.ADDED_TO_STAGE, this.onATS);
	this.stage.addEventListener2(MouseEvent.MOUSE_DOWN, this.onMD, this);
	this.stage.addEventListener2(MouseEvent.MOUSE_UP, this.onMU, this);
	this.stage.addEventListener2(MouseEvent.MOUSE_MOVE, this.onMM, this)
};
Controller.prototype.onEF = function(a) {
	this.model.pieces && (this.cuts++, this.view.RebuildPolygon(), this.model.pieces = null, this.dispatchEvent(new Event("cutDone")));
	this.paused || (this.model.Step(), this.time += 1 / 60, this.dispatchEvent(this.tcEv));
	this.view.Update();
	this.model.IsDead() && (this.paused = !0, this.dispatchEvent(new Event("dead")))
};
Controller.prototype.onMD = function(a) {
	this.paused || this.model.StartLine(this.view.cont.mouseX, this.view.cont.mouseY)
};
Controller.prototype.onMM = function(a) {
	this.model.UpdateLine(this.view.cont.mouseX, this.view.cont.mouseY)
};
Controller.prototype.onMU = function(a) {
	this.model.EndLine()
};

function Sky(a, b, c) {
	Resizable.call(this);
	this.w = this.h = 400;
	this.time = 0;
	null == c && (c = !0);
	this.mouseChildre = this.mouseEnabled = !1;
	var d = Math.random() * Math.PI;
	this.wind = new Point(Math.cos(d), Math.sin(d));
	this.level = a;
	this.season = b;
	this.lw = 800;
	this.lh = 600;
	null == Sky.bgTex && (Sky.bgTex = new BitmapData("img/bg.jpg"), Sky.bgTex.loader.addEventListener2(Event.COMPLETE, this.updateSize, this));
	null == Sky.stuffBD && (Sky.stuffBD = [new BitmapData("img/fly_stuff/summer.png"), new BitmapData("img/fly_stuff/fall.png"), new BitmapData("img/fly_stuff/winter.png"), new BitmapData("img/fly_stuff/spring.png")]);
	null == Sky.treesBD && (Sky.treesBD = [new BitmapData("img/trees/summer.png"), new BitmapData("img/trees/fall.png"), new BitmapData("img/trees/winter.png"), new BitmapData("img/trees/spring.png")]);
	Sky.colors = [0x4E8F00, 0x4c3d30, 0xA6C2DF, 0xD0A8E8];
	this.trees = [];
	this.tcont = new Sprite;
	a = this.tcont.graphics;
	a.beginFill(Sky.colors[b]);
	a.drawRect(0, 400, 3E3, 1E3);
	for (a = 0; 10 > a; a++) d = new Bitmap(Sky.treesBD[b]), d.x = a % 5 * 100, d.y = 5 > a ? 0 : 140, this.trees.push(d), this.tcont.addChild(d);
	this.trees.sort(function(a, b) {
		return b.x - a.x
	});
	this.bits = [];
	this.bg = new Bitmap(Sky.bgTex);
	c && this.addChild(this.bg);
	c && this.addChild(this.tcont);
	this.bcont = new Sprite;
	this.addChild(this.bcont);
	c = Sky.stuffBD[b];
	d = 16;
	1 < b && (d *= 2);
	for (a = 0; a < d; a++) {
		var e = new Bitmap(c);
		this.bits.push(e);
		e.scale = .09 + .07 * Math.random();
		1 < b && (e.scale *= .5);
		e.scaleX = e.scaleY = e.scale;
		e.ang = 2 * Math.random() * Math.PI;
		e.dang = .03 + .03 * Math.random();
		e.vel = .5 + .5 * Math.random();
		this.bcont.addChild(e);
		e.x = Math.random() * this.lw;
		e.y = Math.random() * this.lh
	}
	this.addEventListener2(Event.ADDED_TO_STAGE, this.onATS, this);
	this.addEventListener2(Event.REMOVED_FROM_STAGE, this.onRFS, this)
}
Sky.prototype = new Resizable;
Sky.prototype.Destruct = function() {
	this.removeEventListener(Event.ADDED_TO_STAGE, this.onATS);
	this.removeEventListener(Event.REMOVED_FROM_STAGE, this.onRFS)
};
Sky.prototype.onATS = function() {
	this.addEventListener2(Event.ENTER_FRAME, this.onEF, this)
};
Sky.prototype.onRFS = function() {
	this.removeEventListener(Event.ENTER_FRAME, this.onEF)
};
Sky.prototype.hash = function(a) {
	a = a ^ 61 ^ a >> 16;
	a += a << 3;
	a = 668265261 * (a ^ a >> 4);
	return a ^= a >> 15
};
Sky.prototype.updateSize = function() {
	this.resize(this.w, this.h)
};
Sky.prototype.resize = function(a, b) {
	this.w = a;
	this.h = b;
	this.bg.width = a;
	this.bg.height = b;
	var c = a / b;
	this.lh = Math.sqrt(this.lw * this.lh / c);
	this.lw = c * this.lh;
	this.bcont.scaleX = this.bcont.scaleY = a / this.lw;
	this.tcont.y = .7 * b;
	this.tcont.scaleX = this.tcont.scaleY = a / 2048
};
Sky.prototype.onEF = function(a) {
	this.time++;
	var b = this.bits.length,
		c = this.season,
		d = this.wind;
	for (a = 0; a < b; a++) {
		var e = this.bits[a];
		e.ang += e.dang;
		e.x += e.vel * Math.cos(e.ang);
		e.y += e.vel * Math.sin(e.ang);
		e.x += d.x * (.3 + .16 / e.scale);
		e.y += d.y * (.3 + .16 / e.scale);
		0 < c ? (e.scaleX = e.scale * Math.cos(.03 * e.y), e.rotation = -20 * e.ang) : e.rotation = 30 * Math.sin(e.ang); - 50 > e.y ? (e.y = this.lh + 50, e.x = Math.random() * this.w) : e.y > this.lh + 50 && (e.y = -50, e.x = Math.random() * this.lw); - 50 > e.x ? e.x = this.lw + 50 : e.x > this.lw + 50 && (e.x = -50)
	}
	for (a = 0; 10 > a; a++) b = this.trees[a], b.x = -256 + 256 * a, b.x += 16 * Math.sin(.05 * this.time + .14 * b.x)
};

function Monster() {
	Sprite.call(this);
	this.effTime = 0;
	null == Monster.eyeBD && (Monster.eyeBD = new BitmapData("img/flyEyes.png"));
	null == Monster.bodyBD && (Monster.bodyBD = new BitmapData("img/mbody.png"));
	this.body = new Bitmap(Monster.bodyBD);
	this.body.scaleX = this.body.scaleY = .78125;
	this.body.x = this.body.y = -100;
	this.addChild(this.body);
	this.eyeL = new MEye;
	this.eyeR = new MEye;
	this.addChild(this.eyeL);
	this.addChild(this.eyeR);
	this.eyeL.scaleX = this.eyeL.scaleY = .5 + .2 * Math.random();
	this.eyeR.scaleX = this.eyeR.scaleY = .5 + .2 * Math.random();
	this.eyeL.y = this.eyeR.y = -20;
	this.eyeL.x = -40;
	this.eyeR.x = 40
}
Monster.prototype = new Sprite;
Monster.prototype.DoEffect = function(a) {
	this.effTime -= 1 / 60;
	0 < this.effTime || .05 < Math.random || (this.effTime = 3, .6 > Math.random() ? (Tweener.addTween(this.eyeL.dot, {
		x: -16 + 30 * a.x,
		y: -16 + 30 * a.y,
		transition: "easeInOutSine",
		time: .5
	}), Tweener.addTween(this.eyeR.dot, {
		x: -16 + 30 * a.x,
		y: -16 + 30 * a.y,
		transition: "easeInOutSine",
		time: .5
	}), Tweener.addTween(this.eyeL.dot, {
		x: -16,
		y: -16,
		transition: "easeInOutSine",
		delay: 1,
		time: .5
	}), Tweener.addTween(this.eyeR.dot, {
		x: -16,
		y: -16,
		transition: "easeInOutSine",
		delay: 1,
		time: .5
	})) : (a = this.eyeL.scaleX, Tweener.addTween(this.eyeL, {
		scaleX: .1 * a,
		scaleY: .1 * a,
		transition: "easeInOutSine",
		time: .2
	}), Tweener.addTween(this.eyeL, {
		scaleX: a,
		scaleY: a,
		transition: "easeInOutSine",
		delay: .3,
		time: .2
	}), a = this.eyeR.scaleX, Tweener.addTween(this.eyeR, {
		scaleX: .1 * a,
		scaleY: .1 * a,
		transition: "easeInOutSine",
		time: .2
	}), Tweener.addTween(this.eyeR, {
		scaleX: a,
		scaleY: a,
		transition: "easeInOutSine",
		delay: .3,
		time: .2
	})))
};

function MEye() {
	Sprite.call(this);
	null == MEye.bgBD && (MEye.bgBD = new BitmapData("img/meye.png"));
	null == MEye.dotBD && (MEye.dotBD = new BitmapData("img/meyeDot.png"));
	this.bg = new Bitmap(MEye.bgBD);
	this.addChild(this.bg);
	this.bg.x = this.bg.y = -64;
	this.dot = new Bitmap(MEye.dotBD);
	this.addChild(this.dot);
	this.dot.x = this.dot.y = -16
}
MEye.prototype = new Sprite;
var CSound = {
	ids: "over kick sword swosh main tune0 tune1 env0 env1 env2 env3".split(" "),
	snds: [new Audio("snd/rollOver.ogg"), new Audio("snd/kick.ogg"), new Audio("snd/sword.ogg"), new Audio("snd/swosh.ogg"), new Audio("snd/main_theme.ogg"), new Audio("snd/tune0.ogg"), new Audio("snd/tune1.ogg"), new Audio("snd/env0.ogg"), new Audio("snd/env1.ogg"), new Audio("snd/env1.ogg"), new Audio("snd/env0.ogg")],
	_active: {},
	on: !0,
	play: function(a, b, c) {
		null == b && (b = 1);
		CSound.on && (c = CSound.ind(a), c = CSound.snds[c], null != CSound._active[a] && CSound._active[a].stop(), CSound._active[a] = (new Howl({
			urls: [c.currentSrc],
			loop: !0,
			volume: b
		})).play())
	},
	playOnce: function(a, b) {
		null == b && (b = 1);
		if (CSound.on) {
			var c = CSound.ind(a),
				c = CSound.snds[c];
			null != CSound._active[a] && CSound._active[a].stop();
			CSound._active[a] = (new Howl({
				urls: [c.currentSrc],
				volume: b
			})).play()
		}
	},
	pause: function(a) {
		CSound._active[a] && CSound._active[a].pause()
	},
	stop: function(a) {
		CSound._active[a] && CSound._active[a].stop()
	},
	ind: function(a) {
		return CSound.ids.indexOf(a)
	}
};
!
function() {
	var a = {},
		b = null,
		c = !0,
		d = !1;
	try {
		"undefined" != typeof AudioContext ? b = new AudioContext : "undefined" != typeof webkitAudioContext ? b = new webkitAudioContext : c = !1
	} catch (u) {
		c = !1
	}
	if (!c) if ("undefined" != typeof Audio) try {
		new Audio
	} catch (u) {
		d = !0
	} else d = !0;
	if (c) {
		var e = "undefined" == typeof b.createGain ? b.createGainNode() : b.createGain();
		e.gain.value = 1;
		e.connect(b.destination)
	}
	var h = function(a) {
			this._volume = 1;
			this._muted = !1;
			this.usingWebAudio = c;
			this.ctx = b;
			this.noAudio = d;
			this._howls = [];
			this._codecs = a;
			this.iOSAutoEnable = !0
		};
	h.prototype = {
		volume: function(a) {
			if (a = parseFloat(a), 0 <= a && 1 >= a) {
				this._volume = a;
				c && (e.gain.value = a);
				for (var b in this._howls) if (this._howls.hasOwnProperty(b) && !1 === this._howls[b]._webAudio) for (a = 0; a < this._howls[b]._audioNode.length; a++) this._howls[b]._audioNode[a].volume = this._howls[b]._volume * this._volume;
				return this
			}
			return c ? e.gain.value : this._volume
		},
		mute: function() {
			return this._setMuted(!0), this
		},
		unmute: function() {
			return this._setMuted(!1), this
		},
		_setMuted: function(a) {
			this._muted = a;
			c && (e.gain.value = a ? 0 : this._volume);
			for (var b in this._howls) if (this._howls.hasOwnProperty(b) && !1 === this._howls[b]._webAudio) for (var g = 0; g < this._howls[b]._audioNode.length; g++) this._howls[b]._audioNode[g].muted = a
		},
		codecs: function(a) {
			return this._codecs[a]
		},
		_enableiOSAudio: function() {
			var a = this;
			if (!b || !a._iOSEnabled && /iPhone|iPad|iPod/i.test(navigator.userAgent)) {
				a._iOSEnabled = !1;
				var c = function() {
						var g = b.createBuffer(1, 1, 22050),
							d = b.createBufferSource();
						d.buffer = g;
						d.connect(b.destination);
						"undefined" == typeof d.start ? d.noteOn(0) : d.start(0);
						setTimeout(function() {
							d.playbackState !== d.PLAYING_STATE && d.playbackState !== d.FINISHED_STATE || (a._iOSEnabled = !0, a.iOSAutoEnable = !1, window.removeEventListener("touchstart", c, !1))
						}, 0)
					};
				return window.addEventListener("touchstart", c, !1), a
			}
		}
	};
	var k = null,
		m = {};
	d || (k = new Audio, m = {
		mp3: !! k.canPlayType("audio/mpeg;").replace(/^no$/, ""),
		opus: !! k.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
		ogg: !! k.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
		wav: !! k.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
		aac: !! k.canPlayType("audio/aac;").replace(/^no$/, ""),
		m4a: !! (k.canPlayType("audio/x-m4a;") || k.canPlayType("audio/m4a;") || k.canPlayType("audio/aac;")).replace(/^no$/, ""),
		mp4: !! (k.canPlayType("audio/x-mp4;") || k.canPlayType("audio/mp4;") || k.canPlayType("audio/aac;")).replace(/^no$/, ""),
		weba: !! k.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
	});
	var l = new h(m),
		p = function(a) {
			this._autoplay = a.autoplay || !1;
			this._buffer = a.buffer || !1;
			this._duration = a.duration || 0;
			this._format = a.format || null;
			this._loop = a.loop || !1;
			this._loaded = !1;
			this._sprite = a.sprite || {};
			this._src = a.src || "";
			this._pos3d = a.pos3d || [0, 0, -.5];
			this._volume = void 0 !== a.volume ? a.volume : 1;
			this._urls = a.urls || [];
			this._rate = a.rate || 1;
			this._model = a.model || null;
			this._onload = [a.onload ||
			function() {}];
			this._onloaderror = [a.onloaderror ||
			function() {}];
			this._onend = [a.onend ||
			function() {}];
			this._onpause = [a.onpause ||
			function() {}];
			this._onplay = [a.onplay ||
			function() {}];
			this._onendTimer = [];
			this._webAudio = c && !this._buffer;
			this._audioNode = [];
			this._webAudio && this._setupAudioNode();
			"undefined" != typeof b && b && l.iOSAutoEnable && l._enableiOSAudio();
			l._howls.push(this);
			this.load()
		};
	if (p.prototype = {
		load: function() {
			var a = this,
				b = null;
			if (d) return void a.on("loaderror");
			for (var c = 0; c < a._urls.length; c++) {
				var e, q;
				if (a._format) e = a._format;
				else {
					if (q = a._urls[c], e = /^data:audio\/([^;,]+);/i.exec(q), e || (e = /\.([^.]+)$/.exec(q.split("?", 1)[0])), !e) return void a.on("loaderror");
					e = e[1].toLowerCase()
				}
				if (m[e]) {
					b = a._urls[c];
					break
				}
			}
			if (!b) return void a.on("loaderror");
			if (a._src = b, a._webAudio) v(a, b);
			else {
				var f = new Audio;
				f.addEventListener("error", function() {
					f.error && 4 === f.error.code && (h.noAudio = !0);
					a.on("loaderror", {
						type: f.error ? f.error.code : 0
					})
				}, !1);
				a._audioNode.push(f);
				f.src = b;
				f._pos = 0;
				f.preload = "auto";
				f.volume = l._muted ? 0 : a._volume * l.volume();
				var k = function() {
						a._duration = Math.ceil(10 * f.duration) / 10;
						0 === Object.getOwnPropertyNames(a._sprite).length && (a._sprite = {
							_default: [0, 1E3 * a._duration]
						});
						a._loaded || (a._loaded = !0, a.on("load"));
						a._autoplay && a.play();
						f.removeEventListener("canplaythrough", k, !1)
					};
				f.addEventListener("canplaythrough", k, !1);
				f.load()
			}
			return a
		},
		urls: function(a) {
			return a ? (this.stop(), this._urls = "string" == typeof a ? [a] : a, this._loaded = !1, this.load(), this) : this._urls
		},
		play: function(a, c) {
			var g = this;
			return "function" == typeof a && (c = a), a && "function" != typeof a || (a = "_default"), g._loaded ? g._sprite[a] ? (g._inactiveNode(function(d) {
				d._sprite = a;
				var e = 0 < d._pos ? d._pos : g._sprite[a][0] / 1E3,
					f = 0;
				g._webAudio ? (f = g._sprite[a][1] / 1E3 - d._pos, 0 < d._pos && (e = g._sprite[a][0] / 1E3 + e)) : f = g._sprite[a][1] / 1E3 - (e - g._sprite[a][0] / 1E3);
				var h, k = !(!g._loop && !g._sprite[a][2]),
					n = "string" == typeof c ? c : Math.round(Date.now() * Math.random()) + "";
				if (function() {
					h = setTimeout(function() {
						!g._webAudio && k && g.stop(n).play(a, n);
						g._webAudio && !k && (g._nodeById(n).paused = !0, g._nodeById(n)._pos = 0, g._clearEndTimer(n));
						g._webAudio || k || g.stop(n);
						g.on("end", n)
					}, 1E3 * f);
					g._onendTimer.push({
						timer: h,
						id: n
					})
				}(), g._webAudio) {
					var m = g._sprite[a][0] / 1E3,
						p = g._sprite[a][1] / 1E3;
					d.id = n;
					d.paused = !1;
					w(g, [k, m, p], n);
					g._playStart = b.currentTime;
					d.gain.value = g._volume;
					"undefined" == typeof d.bufferSource.start ? k ? d.bufferSource.noteGrainOn(0, e, 86400) : d.bufferSource.noteGrainOn(0, e, f) : k ? d.bufferSource.start(0, e, 86400) : d.bufferSource.start(0, e, f)
				} else {
					if (4 !== d.readyState && (d.readyState || !navigator.isCocoonJS)) return g._clearEndTimer(n), function() {
						var b = a,
							e = c,
							f = function() {
								g.play(b, e);
								d.removeEventListener("canplaythrough", f, !1)
							};
						d.addEventListener("canplaythrough", f, !1)
					}(), g;
					d.readyState = 4;
					d.id = n;
					d.currentTime = e;
					d.muted = l._muted || d.muted;
					d.volume = g._volume * l.volume();
					setTimeout(function() {
						d.play()
					}, 0)
				}
				return g.on("play"), "function" == typeof c && c(n), g
			}), g) : ("function" == typeof c && c(), g) : (g.on("load", function() {
				g.play(a, c)
			}), g)
		},
		pause: function(a) {
			var b = this;
			if (!b._loaded) return b.on("play", function() {
				b.pause(a)
			}), b;
			b._clearEndTimer(a);
			var c = a ? b._nodeById(a) : b._activeNode();
			if (c) if (c._pos = b.pos(null, a), b._webAudio) {
				if (!c.bufferSource || c.paused) return b;
				c.paused = !0;
				"undefined" == typeof c.bufferSource.stop ? c.bufferSource.noteOff(0) : c.bufferSource.stop(0)
			} else c.pause();
			return b.on("pause"), b
		},
		stop: function(a) {
			var b = this;
			if (!b._loaded) return b.on("play", function() {
				b.stop(a)
			}), b;
			b._clearEndTimer(a);
			var c = a ? b._nodeById(a) : b._activeNode();
			if (c) if (c._pos = 0, b._webAudio) {
				if (!c.bufferSource || c.paused) return b;
				c.paused = !0;
				"undefined" == typeof c.bufferSource.stop ? c.bufferSource.noteOff(0) : c.bufferSource.stop(0)
			} else isNaN(c.duration) || (c.pause(), c.currentTime = 0);
			return b
		},
		mute: function(a) {
			var b = this;
			if (!b._loaded) return b.on("play", function() {
				b.mute(a)
			}), b;
			var c = a ? b._nodeById(a) : b._activeNode();
			return c && (b._webAudio ? c.gain.value = 0 : c.muted = !0), b
		},
		unmute: function(a) {
			var b = this;
			if (!b._loaded) return b.on("play", function() {
				b.unmute(a)
			}), b;
			var c = a ? b._nodeById(a) : b._activeNode();
			return c && (b._webAudio ? c.gain.value = b._volume : c.muted = !1), b
		},
		volume: function(a, b) {
			var c = this;
			if (a = parseFloat(a), 0 <= a && 1 >= a) {
				if (c._volume = a, !c._loaded) return c.on("play", function() {
					c.volume(a, b)
				}), c;
				var d = b ? c._nodeById(b) : c._activeNode();
				return d && (c._webAudio ? d.gain.value = a : d.volume = a * l.volume()), c
			}
			return c._volume
		},
		loop: function(a) {
			return "boolean" == typeof a ? (this._loop = a, this) : this._loop
		},
		sprite: function(a) {
			return "object" == typeof a ? (this._sprite = a, this) : this._sprite
		},
		pos: function(a, c) {
			var d = this;
			if (!d._loaded) return d.on("load", function() {
				d.pos(a)
			}), "number" == typeof a ? d : d._pos || 0;
			a = parseFloat(a);
			var e = c ? d._nodeById(c) : d._activeNode();
			if (e) return 0 <= a ? (d.pause(c), e._pos = a, d.play(e._sprite, c), d) : d._webAudio ? e._pos + (b.currentTime - d._playStart) : e.currentTime;
			if (0 <= a) return d;
			for (e = 0; e < d._audioNode.length; e++) if (d._audioNode[e].paused && 4 === d._audioNode[e].readyState) return d._webAudio ? d._audioNode[e]._pos : d._audioNode[e].currentTime
		},
		pos3d: function(a, b, c, d) {
			var e = this;
			if (b = "undefined" != typeof b && b ? b : 0, c = "undefined" != typeof c && c ? c : -.5, !e._loaded) return e.on("play", function() {
				e.pos3d(a, b, c, d)
			}), e;
			if (!(0 <= a || 0 > a)) return e._pos3d;
			if (e._webAudio) {
				var f = d ? e._nodeById(d) : e._activeNode();
				f && (e._pos3d = [a, b, c], f.panner.setPosition(a, b, c), f.panner.panningModel = e._model || "HRTF")
			}
			return e
		},
		fade: function(a, b, c, d, e) {
			var f = this,
				h = a > b ? "down" : "up",
				k = Math.abs(a - b) / .01,
				l = c / k;
			if (!f._loaded) return f.on("load", function() {
				f.fade(a, b, c, d, e)
			}), f;
			f.volume(a, e);
			for (var m = 1; k >= m; m++)!
			function() {
				var a = Math.round(1E3 * (f._volume + ("up" === h ? .01 : -.01) * m)) / 1E3;
				setTimeout(function() {
					f.volume(a, e);
					a === b && d && d()
				}, l * m)
			}()
		},
		fadeIn: function(a, b, c) {
			return this.volume(0).play().fade(0, a, b, c)
		},
		fadeOut: function(a, b, c, d) {
			var e = this;
			return e.fade(e._volume, a, b, function() {
				c && c();
				e.pause(d);
				e.on("end")
			}, d)
		},
		_nodeById: function(a) {
			for (var b = this._audioNode[0], c = 0; c < this._audioNode.length; c++) if (this._audioNode[c].id === a) {
				b = this._audioNode[c];
				break
			}
			return b
		},
		_activeNode: function() {
			for (var a = null, b = 0; b < this._audioNode.length; b++) if (!this._audioNode[b].paused) {
				a = this._audioNode[b];
				break
			}
			return this._drainPool(), a
		},
		_inactiveNode: function(a) {
			for (var b = null, c = 0; c < this._audioNode.length; c++) if (this._audioNode[c].paused && 4 === this._audioNode[c].readyState) {
				a(this._audioNode[c]);
				b = !0;
				break
			}
			if (this._drainPool(), !b) {
				var d;
				if (this._webAudio) d = this._setupAudioNode(), a(d);
				else {
					this.load();
					d = this._audioNode[this._audioNode.length - 1];
					var e = navigator.isCocoonJS ? "canplaythrough" : "loadedmetadata",
						f = function() {
							d.removeEventListener(e, f, !1);
							a(d)
						};
					d.addEventListener(e, f, !1)
				}
			}
		},
		_drainPool: function() {
			var a, b = 0;
			for (a = 0; a < this._audioNode.length; a++) this._audioNode[a].paused && b++;
			for (a = this._audioNode.length - 1; 0 <= a && !(5 >= b); a--) this._audioNode[a].paused && (this._webAudio && this._audioNode[a].disconnect(0), b--, this._audioNode.splice(a, 1))
		},
		_clearEndTimer: function(a) {
			for (var b = 0, c = 0; c < this._onendTimer.length; c++) if (this._onendTimer[c].id === a) {
				b = c;
				break
			}(a = this._onendTimer[b]) && (clearTimeout(a.timer), this._onendTimer.splice(b, 1))
		},
		_setupAudioNode: function() {
			var a = this._audioNode,
				c = this._audioNode.length;
			return a[c] = "undefined" == typeof b.createGain ? b.createGainNode() : b.createGain(), a[c].gain.value = this._volume, a[c].paused = !0, a[c]._pos = 0, a[c].readyState = 4, a[c].connect(e), a[c].panner = b.createPanner(), a[c].panner.panningModel = this._model || "equalpower", a[c].panner.setPosition(this._pos3d[0], this._pos3d[1], this._pos3d[2]), a[c].panner.connect(a[c]), a[c]
		},
		on: function(a, b) {
			var c = this["_on" + a];
			if ("function" == typeof b) c.push(b);
			else for (var d = 0; d < c.length; d++) b ? c[d].call(this, b) : c[d].call(this);
			return this
		},
		off: function(a, b) {
			var c = this["_on" + a],
				d = b ? b.toString() : null;
			if (d) for (var e = 0; e < c.length; e++) {
				if (d === c[e].toString()) {
					c.splice(e, 1);
					break
				}
			} else this["_on" + a] = [];
			return this
		},
		unload: function() {
			for (var b = this._audioNode, c = 0; c < this._audioNode.length; c++) b[c].paused || (this.stop(b[c].id), this.on("end", b[c].id)), this._webAudio ? b[c].disconnect(0) : b[c].src = "";
			for (c = 0; c < this._onendTimer.length; c++) clearTimeout(this._onendTimer[c].timer);
			b = l._howls.indexOf(this);
			null !== b && 0 <= b && l._howls.splice(b, 1);
			delete a[this._src]
		}
	}, c) var v = function(b, c) {
			if (c in a) return b._duration = a[c].duration, void r(b);
			if (/^data:[^;]+;base64,/.test(c)) {
				for (var d = atob(c.split(",")[1]), e = new Uint8Array(d.length), h = 0; h < d.length; ++h) e[h] = d.charCodeAt(h);
				t(e.buffer, b, c)
			} else {
				var f = new XMLHttpRequest;
				f.open("GET", c, !0);
				f.responseType = "arraybuffer";
				f.onload = function() {
					t(f.response, b, c)
				};
				f.onerror = function() {
					b._webAudio && (b._buffer = !0, b._webAudio = !1, b._audioNode = [], delete b._gainNode, delete a[c], b.load())
				};
				try {
					f.send()
				} catch (k) {
					f.onerror()
				}
			}
		},
		t = function(c, d, e) {
			b.decodeAudioData(c, function(b) {
				b && (a[e] = b, r(d, b))
			}, function(a) {
				d.on("loaderror")
			})
		},
		r = function(a, b) {
			a._duration = b ? b.duration : a._duration;
			0 === Object.getOwnPropertyNames(a._sprite).length && (a._sprite = {
				_default: [0, 1E3 * a._duration]
			});
			a._loaded || (a._loaded = !0, a.on("load"));
			a._autoplay && a.play()
		},
		w = function(c, d, e) {
			e = c._nodeById(e);
			e.bufferSource = b.createBufferSource();
			e.bufferSource.buffer = a[c._src];
			e.bufferSource.connect(e.panner);
			e.bufferSource.loop = d[0];
			d[0] && (e.bufferSource.loopStart = d[1], e.bufferSource.loopEnd = d[1] + d[2]);
			e.bufferSource.playbackRate.value = c._rate
		};
	"function" == typeof define && define.amd && define(function() {
		return {
			Howler: l,
			Howl: p
		}
	});
	"undefined" != typeof exports && (exports.Howler = l, exports.Howl = p);
	"undefined" != typeof window && (window.Howler = l, window.Howl = p)
}();
var Polygons = [
	[{
		poly: [33, 35, 374, 130, 459, 459, 129, 380]
	}, {
		poly: [260, 7, 494, 260, 417, 259, 420, 498, 104, 496, 102, 259, 9, 259, 122, 139, 120, 34, 175, 32, 177, 89]
	}, {
		poly: [79, 178, 51, 137, 55, 78, 121, 57, 163, 87, 202, 78, 250, 68, 294, 75, 331, 88, 377, 67, 429, 77, 446, 133, 416, 179, 432, 232, 430, 312, 399, 374, 333, 426, 250, 436, 157, 414, 100, 363, 72, 309, 62, 255, 67, 210]
	}, {
		poly: [16, 185, 108, 178, 157, 134, 276, 129, 327, 150, 376, 189, 462, 208, 495, 232, 497, 274, 404, 276, 394, 306, 361, 318, 334, 306, 325, 275, 183, 275, 169, 306, 143, 315, 111, 309, 100, 275, 19, 275]
	}, {
		poly: [255, 14, 333, 155, 492, 175, 383, 294, 425, 471, 261, 383, 99, 463, 133, 290, 13, 172, 174, 156]
	}, {
		poly: [303, 41, 341, 69, 361, 107, 368, 156, 369, 207, 375, 255, 383, 291, 397, 319, 438, 331, 449, 348, 428, 372, 400, 386, 364, 398, 321, 404, 287, 409, 271, 427, 249, 431, 230, 424, 216, 408, 183, 400, 147, 396, 110, 389, 79, 380, 52, 357, 53, 333, 94, 324, 116, 286, 124, 241, 127, 192, 131, 154, 136, 91, 168, 55, 207, 33, 256, 29]
	}, {
		poly: [151, 103, 225, 29, 309, 193, 348, 155, 357, 64, 439, 44, 468, 230, 448, 343, 335, 284, 362, 377, 295, 402, 330, 468, 186, 456, 205, 300, 116, 420, 43, 363, 135, 249, 49, 195, 57, 113]
	}, {
		poly: [123, 57, 217, 55, 229, 226, 280, 233, 296, 67, 410, 71, 446, 267, 397, 457, 279, 451, 123, 447, 88, 396, 318, 340, 79, 296]
	}, {
		poly: [89, 265, 110, 53, 190, 253, 281, 58, 325, 273, 404, 55, 437, 269, 428, 460, 322, 371, 264, 453, 190, 350, 129, 452, 84, 353]
	}, {
		poly: [99, 33, 385, 43, 429, 301, 421, 447, 293, 453, 304, 317, 207, 319, 194, 450, 52, 454, 52, 258, 229, 220, 231, 177, 73, 179, 175, 97]
	}, {
		poly: [44, 47, 450, 45, 445, 303, 148, 295, 144, 343, 440, 365, 443, 458, 38, 447, 48, 196, 341, 202, 349, 139, 49, 143]
	}, {
		poly: [57, 418, 183, 36, 235, 251, 321, 57, 404, 243, 454, 170, 473, 387, 320, 331, 330, 426, 444, 440, 395, 482, 176, 475, 173, 350]
	}, {
		poly: [279, 121, 234, 123, 234, 212, 296, 213, 300, 182, 327, 180, 329, 211, 352, 212, 355, 126, 334, 120, 329, 92, 396, 90, 394, 124, 378, 128, 379, 211, 434, 210, 471, 241, 475, 327, 453, 357, 491, 430, 414, 428, 408, 356, 350, 357, 377, 380, 378, 410, 350, 430, 301, 432, 247, 430, 218, 408, 218, 374, 245, 356, 131, 352, 173, 365, 185, 383, 182, 404, 169, 427, 140, 437, 105, 433, 66, 435, 36, 426, 24, 401, 32, 364, 69, 353, 29, 353, 28, 123, 4, 120, 6, 89, 279, 84]
	}, {
		poly: [9, 43, 168, 42, 245, 188, 334, 41, 481, 35, 345, 234, 483, 445, 347, 444, 248, 281, 156, 441, 20, 443, 141, 233]
	}, {
		poly: [117, 191, 152, 148, 215, 116, 197, 69, 239, 32, 287, 41, 326, 88, 409, 121, 459, 161, 489, 240, 451, 307, 386, 347, 378, 393, 346, 394, 331, 361, 247, 354, 171, 322, 120, 279, 94, 330, 38, 341, 13, 293, 31, 233, 9, 187, 31, 133, 87, 140]
	}, {
		poly: [134, 228, 123, 113, 134, 39, 166, 15, 202, 39, 207, 109, 216, 195, 233, 216, 271, 208, 283, 176, 289, 101, 300, 33, 337, 9, 361, 34, 367, 100, 368, 182, 365, 234, 406, 286, 418, 352, 386, 429, 340, 465, 254, 472, 255, 425, 291, 400, 293, 366, 268, 355, 234, 353, 208, 371, 212, 398, 249, 426, 247, 470, 198, 471, 130, 445, 96, 399, 75, 336, 91, 273]
	}, {
		poly: [20, 121, 143, 49, 298, 34, 420, 86, 461, 142, 487, 228, 480, 342, 415, 418, 327, 463, 205, 480, 103, 458, 35, 382, 38, 269, 134, 207, 270, 169, 340, 204, 344, 295, 233, 346, 186, 299, 283, 258, 221, 254, 151, 298, 166, 365, 232, 374, 313, 346, 379, 293, 378, 218, 327, 150, 216, 144, 74, 206, 17, 186]
	}, {
		poly: [116, 52, 184, 24, 292, 19, 364, 37, 414, 86, 439, 139, 439, 211, 380, 212, 360, 180, 327, 171, 300, 191, 292, 222, 219, 221, 213, 188, 184, 170, 156, 178, 132, 203, 131, 237, 158, 268, 200, 266, 216, 236, 246, 234, 228, 281, 228, 337, 255, 337, 285, 332, 279, 283, 260, 232, 298, 232, 310, 260, 341, 269, 369, 258, 374, 224, 439, 225, 432, 259, 412, 303, 376, 342, 327, 373, 323, 415, 314, 445, 294, 415, 270, 439, 256, 425, 233, 439, 209, 423, 189, 443, 172, 416, 168, 371, 125, 342, 79, 289, 62, 224, 59, 164, 71, 116, 93, 72]
	}],
	[{
		poly: [8, 334, 158, 111, 244, 222, 333, 135, 400, 211, 428, 203, 494, 294, 307, 310, 335, 350, 191, 372, 73, 359]
	}, {
		poly: [87, 290, 115, 230, 127, 128, 132, 78, 171, 87, 177, 121, 172, 193, 174, 215, 239, 123, 299, 28, 330, 23, 345, 54, 262, 184, 265, 203, 395, 20, 423, 26, 429, 57, 326, 209, 321, 230, 430, 82, 454, 80, 467, 117, 359, 273, 354, 299, 450, 174, 479, 175, 485, 217, 341, 402, 252, 460, 143, 463, 78, 377]
	}, {
		poly: [215, 178, 213, 121, 226, 71, 273, 38, 350, 62, 373, 119, 351, 163, 309, 204, 361, 185, 409, 184, 457, 218, 463, 273, 438, 319, 387, 334, 344, 325, 309, 308, 332, 346, 351, 388, 350, 435, 308, 471, 241, 466, 209, 423, 208, 365, 217, 317, 193, 356, 152, 399, 101, 417, 40, 388, 26, 320, 62, 277, 108, 260, 163, 247, 109, 238, 68, 223, 30, 179, 50, 115, 93, 83, 157, 94, 190, 136]
	}, {
		poly: [48, 71, 80, 46, 142, 30, 241, 28, 310, 44, 340, 71, 339, 127, 374, 129, 424, 140, 454, 184, 470, 266, 438, 326, 396, 347, 349, 351, 348, 289, 393, 280, 412, 245, 397, 199, 342, 187, 343, 413, 293, 445, 220, 462, 154, 461, 90, 449, 50, 426]
	}, {
		poly: [19, 252, 79, 258, 79, 228, 119, 235, 164, 234, 198, 218, 246, 211, 276, 216, 316, 227, 340, 243, 391, 291, 377, 241, 348, 199, 331, 152, 360, 111, 416, 110, 422, 133, 484, 157, 473, 177, 403, 172, 422, 210, 442, 244, 453, 286, 450, 347, 395, 401, 318, 430, 225, 428, 171, 423, 118, 408, 45, 326, 96, 334, 24, 293, 90, 300]
	}, {
		poly: [27, 297, 34, 227, 51, 178, 105, 155, 174, 153, 241, 152, 292, 155, 280, 129, 298, 93, 342, 92, 373, 103, 389, 131, 422, 136, 444, 153, 464, 181, 471, 220, 473, 249, 460, 340, 460, 388, 462, 423, 425, 421, 412, 384, 411, 337, 423, 267, 397, 279, 368, 275, 366, 318, 369, 367, 360, 430, 273, 427, 275, 310, 232, 325, 194, 323, 152, 313, 142, 372, 142, 430, 49, 428, 54, 349, 62, 278, 58, 214]
	}, {
		poly: [49, 288, 48, 131, 68, 69, 117, 62, 160, 111, 162, 160, 165, 249, 174, 293, 204, 294, 208, 248, 211, 117, 213, 46, 262, 17, 312, 43, 319, 96, 317, 151, 319, 254, 312, 300, 342, 304, 361, 262, 365, 213, 370, 153, 387, 80, 438, 73, 469, 126, 467, 200, 461, 295, 441, 359, 390, 399, 316, 401, 317, 459, 285, 491, 226, 489, 193, 456, 190, 399, 130, 396, 80, 379, 57, 331]
	}, {
		poly: [116, 387, 143, 38, 264, 302, 386, 27, 407, 380, 457, 460, 265, 481, 54, 458]
	}, {
		poly: [180, 333, 52, 336, 31, 222, 182, 195, 53, 132, 160, 35, 282, 127, 369, 48, 476, 144, 367, 232, 466, 327, 419, 420, 301, 307, 293, 477, 172, 469]
	}, {
		poly: [120, 71, 278, 66, 295, 202, 337, 291, 352, 156, 403, 43, 475, 223, 469, 325, 412, 415, 193, 441, 213, 274, 146, 281, 75, 432, 5, 403, 39, 161]
	}, {
		poly: [143, 79, 247, 59, 343, 82, 248, 115, 279, 215, 374, 154, 379, 75, 449, 148, 480, 256, 414, 218, 356, 252, 386, 301, 442, 321, 464, 298, 459, 380, 384, 424, 374, 366, 313, 339, 290, 380, 295, 435, 336, 480, 171, 483, 223, 431, 227, 359, 158, 344, 145, 386, 147, 448, 70, 413, 41, 319, 56, 250, 103, 316, 163, 274, 191, 219, 126, 186, 76, 180, 110, 119]
	}, {
		poly: [103, 151, 176, 21, 245, 123, 322, 15, 458, 123, 452, 230, 346, 150, 352, 250, 455, 321, 451, 382, 322, 359, 425, 438, 366, 463, 213, 452, 249, 247, 115, 408, 15, 332, 33, 217, 123, 292, 176, 202]
	}, {
		poly: [49, 410, 29, 354, 31, 292, 70, 251, 113, 242, 149, 254, 173, 240, 170, 195, 186, 166, 228, 170, 249, 208, 356, 86, 362, 41, 394, 13, 446, 9, 456, 57, 433, 96, 392, 112, 261, 276, 284, 282, 309, 274, 339, 289, 337, 323, 317, 342, 285, 347, 253, 347, 253, 371, 264, 419, 229, 458, 184, 477, 135, 476, 91, 454]
	}, {
		poly: [103, 395, 22, 214, 112, 213, 110, 161, 183, 160, 185, 213, 247, 212, 243, 141, 281, 139, 283, 65, 330, 61, 331, 139, 379, 138, 383, 211, 487, 210, 409, 395]
	}, {
		poly: [29, 248, 20, 210, 43, 180, 57, 197, 39, 201, 44, 226, 71, 207, 100, 185, 155, 167, 212, 165, 283, 183, 346, 205, 401, 228, 438, 220, 422, 242, 434, 259, 436, 280, 473, 288, 455, 311, 415, 317, 358, 316, 317, 318, 304, 353, 301, 407, 274, 402, 267, 350, 262, 324, 181, 323, 126, 316, 109, 346, 117, 408, 96, 407, 79, 360, 72, 308, 45, 279]
	}, {
		poly: [8, 121, 98, 121, 148, 290, 205, 121, 277, 123, 347, 293, 405, 126, 494, 128, 401, 396, 301, 395, 243, 245, 197, 399, 100, 398, 53, 271]
	}, {
		poly: [33, 463, 34, 261, 5, 258, 6, 207, 36, 205, 37, 229, 60, 228, 58, 203, 83, 203, 85, 229, 99, 229, 101, 200, 125, 200, 130, 229, 165, 231, 164, 153, 139, 151, 137, 114, 166, 110, 166, 125, 187, 126, 185, 109, 212, 109, 211, 128, 231, 130, 232, 107, 261, 109, 260, 130, 288, 132, 288, 108, 305, 108, 310, 130, 328, 130, 329, 104, 356, 106, 354, 155, 326, 158, 327, 229, 342, 225, 338, 195, 365, 196, 364, 223, 381, 225, 381, 196, 411, 195, 409, 224, 434, 225, 436, 195, 472, 196, 471, 248, 439, 251, 442, 462, 283, 462, 283, 354, 237, 298, 193, 356, 194, 463]
	}, {
		poly: [23, 155, 47, 123, 87, 82, 146, 80, 197, 126, 327, 337, 352, 349, 352, 316, 324, 248, 288, 242, 276, 209, 320, 176, 379, 163, 430, 164, 446, 201, 413, 220, 432, 269, 448, 320, 448, 383, 411, 435, 340, 447, 273, 423, 197, 304, 145, 208, 117, 127, 86, 126, 46, 152]
	}],
	[{
		poly: [50, 184, 77, 129, 120, 103, 187, 98, 214, 112, 228, 131, 232, 68, 299, 64, 272, 135, 294, 122, 327, 105, 374, 96, 405, 105, 450, 139, 476, 196, 480, 244, 479, 289, 466, 343, 445, 394, 402, 426, 353, 437, 277, 429, 254, 396, 234, 428, 174, 439, 120, 430, 76, 398, 47, 358, 35, 302, 35, 230]
	}, {
		poly: [17, 423, 31, 396, 66, 411, 114, 360, 59, 299, 111, 220, 110, 281, 141, 304, 344, 60, 435, 7, 402, 103, 213, 364, 241, 387, 301, 369, 236, 438, 154, 395, 108, 447, 121, 472, 100, 491]
	}, {
		poly: [13, 236, 15, 198, 29, 159, 67, 133, 110, 121, 181, 115, 253, 112, 339, 117, 384, 118, 429, 137, 456, 164, 467, 202, 468, 234, 419, 234, 449, 245, 448, 270, 428, 280, 469, 282, 466, 320, 428, 319, 447, 337, 452, 353, 417, 369, 468, 370, 468, 403, 455, 418, 48, 419, 30, 413, 16, 394, 9, 372, 62, 370, 21, 358, 23, 335, 52, 326, 12, 326, 9, 290, 54, 286, 28, 274, 24, 245, 65, 238]
	}, {
		poly: [237, 49, 254, 15, 276, 51, 327, 33, 324, 73, 371, 61, 372, 104, 418, 101, 406, 149, 448, 150, 437, 196, 475, 224, 436, 259, 474, 276, 435, 306, 456, 347, 413, 350, 430, 392, 382, 387, 387, 434, 339, 420, 334, 464, 287, 437, 269, 481, 231, 452, 200, 481, 182, 438, 143, 458, 138, 399, 84, 411, 92, 358, 39, 352, 68, 310, 13, 301, 51, 265, 13, 232, 54, 206, 36, 152, 91, 137, 75, 92, 131, 98, 130, 52, 186, 73, 188, 27]
	}, {
		poly: [266, 17, 371, 165, 302, 164, 421, 277, 311, 262, 471, 390, 305, 396, 305, 471, 220, 470, 220, 400, 58, 393, 202, 275, 100, 275, 204, 165, 138, 164]
	}, {
		poly: [22, 418, 101, 388, 64, 332, 40, 278, 54, 219, 114, 148, 216, 125, 296, 137, 342, 178, 366, 225, 363, 323, 324, 358, 352, 357, 382, 341, 403, 308, 403, 257, 405, 212, 435, 151, 435, 213, 460, 164, 460, 219, 482, 245, 475, 284, 461, 302, 454, 371, 411, 413, 354, 425, 107, 422]
	}, {
		poly: [41, 367, 35, 351, 84, 367, 57, 326, 53, 270, 91, 210, 130, 180, 171, 155, 234, 134, 281, 114, 303, 79, 323, 28, 368, 36, 415, 69, 447, 129, 436, 177, 387, 168, 351, 199, 324, 248, 297, 289, 326, 310, 342, 353, 319, 388, 287, 397, 249, 384, 242, 354, 226, 373, 203, 396, 170, 402, 110, 383]
	}, {
		poly: [133, 164, 89, 127, 140, 91, 152, 42, 369, 42, 377, 100, 424, 121, 383, 157, 366, 373, 332, 428, 447, 480, 67, 481, 183, 429, 143, 356]
	}, {
		poly: [88, 80, 199, 180, 245, 74, 310, 193, 397, 69, 451, 242, 382, 326, 443, 470, 334, 456, 254, 350, 198, 465, 73, 467, 151, 333, 66, 258]
	}, {
		poly: [35, 59, 458, 50, 461, 451, 368, 433, 367, 175, 297, 171, 294, 433, 206, 433, 200, 167, 128, 173, 125, 431, 43, 434]
	}, {
		poly: [153, 184, 106, 53, 211, 184, 196, 48, 256, 181, 305, 49, 308, 183, 404, 55, 355, 183, 444, 188, 442, 452, 268, 449, 268, 359, 312, 292, 204, 293, 245, 360, 246, 452, 80, 453, 76, 183]
	}, {
		poly: [152, 208, 76, 99, 194, 25, 341, 124, 212, 140, 260, 225, 374, 213, 378, 72, 468, 221, 433, 332, 371, 312, 385, 391, 464, 414, 436, 461, 353, 482, 299, 348, 240, 434, 123, 456, 41, 334, 191, 318, 62, 256]
	}, {
		poly: [53, 327, 25, 282, 33, 219, 61, 256, 56, 183, 78, 237, 84, 193, 105, 217, 105, 157, 140, 205, 138, 135, 175, 192, 183, 121, 218, 189, 249, 118, 256, 188, 297, 135, 306, 201, 379, 161, 353, 229, 408, 213, 387, 259, 394, 295, 455, 302, 427, 333, 387, 337, 331, 344, 361, 371, 344, 394, 301, 382, 274, 353, 192, 363, 149, 348, 166, 383, 144, 394, 106, 372, 92, 348]
	}, {
		poly: [150, 223, 71, 190, 42, 137, 67, 66, 155, 31, 227, 46, 255, 118, 236, 188, 282, 189, 276, 116, 305, 53, 387, 32, 454, 66, 485, 143, 445, 220, 368, 232, 391, 295, 370, 363, 310, 391, 293, 450, 264, 490, 236, 491, 217, 439, 200, 394, 148, 371, 125, 309, 127, 261]
	}, {
		poly: [37, 55, 177, 56, 181, 326, 221, 359, 263, 360, 296, 328, 303, 51, 460, 51, 457, 329, 420, 424, 350, 470, 271, 484, 164, 484, 118, 463, 62, 405, 36, 324, 35, 256, 33, 199]
	}, {
		poly: [210, 479, 127, 438, 78, 371, 62, 254, 166, 335, 212, 387, 208, 270, 138, 250, 99, 198, 101, 98, 130, 30, 206, 105, 251, 30, 286, 107, 382, 28, 397, 96, 401, 180, 366, 254, 291, 266, 291, 392, 331, 335, 437, 272, 430, 361, 382, 434, 293, 480]
	}, {
		poly: [255, 491, 189, 244, 125, 244, 74, 215, 49, 166, 72, 113, 135, 92, 185, 121, 166, 86, 181, 27, 243, 7, 299, 15, 327, 46, 333, 95, 311, 126, 349, 96, 399, 99, 435, 129, 438, 190, 401, 234, 358, 249, 310, 245]
	}, {
		poly: [201, 159, 200, 139, 173, 128, 162, 71, 198, 20, 274, 19, 320, 62, 309, 124, 277, 140, 267, 168, 313, 171, 368, 191, 394, 228, 421, 310, 408, 387, 359, 385, 356, 312, 327, 247, 314, 310, 314, 349, 330, 416, 344, 490, 268, 486, 239, 352, 218, 491, 147, 489, 169, 336, 170, 295, 154, 241, 126, 295, 129, 376, 81, 381, 62, 285, 92, 210, 138, 174]
	}],
	[{
		poly: [48, 481, 114, 424, 156, 363, 178, 303, 192, 215, 204, 133, 211, 89, 181, 75, 180, 47, 214, 37, 241, 6, 274, 36, 302, 46, 302, 74, 277, 88, 286, 133, 301, 208, 325, 304, 348, 366, 382, 420, 458, 481, 324, 480, 281, 396, 220, 397, 179, 481]
	}, {
		poly: [266, 23, 343, 39, 411, 84, 457, 135, 483, 211, 482, 288, 455, 361, 417, 419, 342, 466, 246, 484, 152, 463, 86, 418, 40, 366, 25, 298, 18, 216, 40, 140, 85, 82, 154, 37, 248, 21, 250, 155, 186, 182, 163, 230, 173, 295, 226, 332, 292, 331, 332, 298, 344, 239, 318, 181, 262, 155]
	}, {
		poly: [301, 21, 480, 19, 474, 194, 338, 196, 338, 292, 473, 293, 474, 474, 292, 473, 290, 334, 205, 335, 203, 475, 26, 475, 29, 292, 168, 290, 167, 198, 27, 199, 27, 22, 211, 22, 212, 153, 299, 155]
	}, {
		poly: [14, 138, 73, 159, 125, 218, 171, 211, 160, 185, 192, 206, 233, 195, 219, 113, 303, 182, 343, 181, 396, 193, 443, 214, 482, 250, 448, 264, 410, 262, 429, 274, 379, 282, 349, 324, 295, 362, 326, 288, 292, 287, 237, 282, 199, 308, 211, 281, 196, 278, 164, 301, 172, 272, 142, 263, 121, 262, 89, 295, 64, 305, 81, 257, 82, 227, 63, 194]
	}, {
		poly: [250, 154, 283, 112, 315, 80, 358, 71, 410, 71, 440, 103, 472, 137, 480, 191, 471, 250, 436, 296, 387, 334, 339, 373, 290, 421, 255, 476, 217, 422, 168, 373, 104, 332, 40, 260, 18, 185, 38, 119, 112, 69, 172, 74, 216, 103]
	}, {
		poly: [245, 10, 290, 16, 313, 40, 324, 71, 326, 101, 331, 149, 351, 183, 384, 215, 423, 256, 445, 318, 441, 376, 411, 426, 362, 451, 306, 452, 257, 438, 225, 451, 168, 450, 122, 430, 100, 400, 81, 339, 85, 276, 111, 234, 151, 203, 183, 170, 191, 111, 193, 71, 206, 29, 223, 18]
	}, {
		poly: [116, 117, 154, 33, 348, 37, 410, 127, 430, 225, 455, 383, 467, 443, 41, 442, 70, 296, 321, 295, 280, 117, 233, 123, 203, 257, 84, 244]
	}, {
		poly: [72, 47, 242, 48, 246, 379, 330, 380, 331, 250, 285, 199, 330, 141, 278, 96, 329, 40, 462, 40, 467, 473, 74, 475, 74, 259, 118, 210, 69, 154, 117, 102]
	}, {
		poly: [68, 391, 37, 349, 27, 232, 81, 106, 191, 36, 324, 27, 273, 209, 410, 69, 458, 150, 482, 246, 447, 358, 401, 428, 318, 466, 196, 475, 234, 290, 110, 432, 95, 418]
	}, {
		poly: [41, 447, 127, 29, 199, 309, 268, 30, 340, 318, 408, 23, 473, 457]
	}, {
		poly: [214, 478, 209, 315, 127, 342, 61, 328, 43, 237, 99, 200, 152, 202, 71, 132, 98, 47, 167, 31, 204, 96, 234, 19, 327, 18, 372, 70, 388, 116, 334, 190, 398, 174, 444, 218, 449, 290, 399, 336, 357, 347, 278, 318, 279, 489]
	}, {
		poly: [52, 48, 453, 46, 450, 161, 259, 352, 447, 350, 449, 465, 63, 470, 59, 350, 263, 160, 53, 166]
	}, {
		poly: [118, 50, 144, 30, 207, 15, 276, 17, 329, 22, 369, 34, 381, 61, 368, 98, 343, 130, 318, 149, 297, 180, 314, 200, 328, 211, 377, 226, 401, 262, 418, 313, 411, 365, 393, 401, 374, 434, 336, 462, 293, 479, 246, 486, 192, 480, 153, 457, 110, 415, 83, 343, 89, 266, 118, 227, 164, 210, 196, 184, 186, 156, 155, 127, 127, 97]
	}, {
		poly: [39, 399, 13, 376, 19, 342, 40, 316, 70, 303, 90, 309, 378, 33, 486, 108, 455, 112, 466, 149, 430, 142, 438, 177, 402, 176, 414, 209, 376, 205, 390, 240, 354, 236, 375, 266, 338, 262, 354, 292, 316, 290, 329, 324, 294, 318, 311, 350, 272, 349, 287, 379, 245, 380, 255, 405, 245, 436, 200, 481, 143, 496, 50, 410, 85, 381, 150, 437, 180, 434, 181, 411, 102, 342, 75, 345, 74, 368]
	}, {
		poly: [61, 41, 108, 40, 153, 133, 177, 217, 399, 213, 403, 456, 328, 456, 323, 320, 190, 321, 194, 456, 105, 456, 98, 257, 89, 157]
	}, {
		poly: [31, 301, 37, 231, 59, 195, 93, 172, 117, 154, 130, 116, 153, 84, 182, 93, 196, 122, 211, 157, 224, 169, 244, 163, 254, 149, 262, 112, 282, 87, 314, 99, 327, 136, 336, 175, 354, 221, 374, 225, 388, 196, 400, 147, 407, 104, 444, 104, 475, 116, 491, 138, 471, 157, 446, 171, 436, 197, 434, 234, 418, 271, 393, 300, 343, 292, 311, 302, 305, 358, 310, 462, 239, 464, 227, 358, 223, 303, 149, 286, 146, 378, 155, 458, 83, 460, 74, 372, 71, 287, 61, 233]
	}, {
		poly: [10, 273, 38, 243, 86, 226, 142, 213, 170, 131, 215, 101, 282, 98, 335, 131, 360, 217, 413, 227, 454, 237, 490, 271, 487, 309, 453, 334, 406, 354, 328, 371, 235, 373, 151, 361, 76, 343, 26, 315]
	}, {
		poly: [30, 407, 64, 347, 10, 354, 101, 283, 148, 213, 217, 151, 266, 127, 299, 82, 322, 47, 366, 34, 410, 46, 435, 89, 426, 126, 463, 156, 414, 156, 382, 171, 389, 208, 392, 234, 377, 290, 359, 331, 316, 360, 261, 395, 263, 478, 196, 478, 193, 400, 138, 374, 105, 363]
	}]
];