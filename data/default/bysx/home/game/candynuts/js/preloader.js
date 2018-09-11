function start() {
	window.devicePixelRatio && Math.max(window.innerWidth, window.innerHeight) * window.devicePixelRatio > 700
        ? (__disSuffiks = "@2x", __koefDisplay = 1)
        : (__disSuffiks = "", __koefDisplay = 2), queuePre = new createjs.LoadQueue(!0),
        queuePre.addEventListener("complete", completePreloader),
        queuePre.loadManifest([{
		id: "minpreload",
		src: "pregame.min.js",
		type: createjs.LoadQueue.JAVASCRIPT
	}, {
		id: "fntgoal",
		src: "lib/fonts/goal" + __disSuffiks + ".png",
		type: createjs.LoadQueue.IMAGE
	}, {
		id: "fngoal",
		src: "lib/fonts/SpriteSheets/goal" + __disSuffiks + ".js",
		type: createjs.LoadQueue.JAVASCRIPT
	}, {
		id: "progress",
		src: "lib/graphics/progress" + __disSuffiks + ".png",
		type: createjs.LoadQueue.IMAGE
	}])
}
var queueJS, queuePre, manif = new Array,
	images = new Array,
	jsons = new Array,
	__disSuffiks, __koefDisplay, __audio_supported;
addToHomeConfig = {
	autostart: !1
};
var completePreloader = function(a) {
		writeData(a, queuePre), startTicker(), ResizeGame(), window.addEventListener("resize", ResizeGame, !1);
		var b = startPreloader();
		queueJS = new createjs.LoadQueue(!0), queueJS.removeAllEventListeners(), manif = [{
			id: "minjs",
			src: "game.min.js",
			type: createjs.LoadQueue.JAVASCRIPT
		}, {
			id: "img_game_bg",
			src: "lib/graphics/Fon1" + __disSuffiks + ".png",
			type: createjs.LoadQueue.IMAGE
		}, {
			id: "img_windows_bg",
			src: "lib/graphics/Fon2" + __disSuffiks + ".png",
			type: createjs.LoadQueue.IMAGE
		}, {
			id: "img_lvlctrl_bg",
			src: "lib/graphics/Fon3" + __disSuffiks + ".png",
			type: createjs.LoadQueue.IMAGE
		}, {
			id: "menu",
			src: "lib/graphics/menu" + __disSuffiks + ".png",
			type: createjs.LoadQueue.IMAGE
		}, {
			id: "mg_btn",
			src: "lib/graphics/mg_btn" + __disSuffiks + ".png",
			type: createjs.LoadQueue.IMAGE
		}, {
			id: "fntscore",
			src: "lib/fonts/score" + __disSuffiks + ".png",
			type: createjs.LoadQueue.IMAGE
		}, {
			id: "fnttext",
			src: "lib/fonts/text" + __disSuffiks + ".png",
			type: createjs.LoadQueue.IMAGE
		}, {
			id: "fntui",
			src: "lib/fonts/ui" + __disSuffiks + ".png",
			type: createjs.LoadQueue.IMAGE
		}, {
			id: "fnscore",
			src: "lib/fonts/SpriteSheets/score" + __disSuffiks + ".js",
			type: createjs.LoadQueue.JAVASCRIPT
		}, {
			id: "fntext",
			src: "lib/fonts/SpriteSheets/text" + __disSuffiks + ".js",
			type: createjs.LoadQueue.JAVASCRIPT
		}, {
			id: "fnui",
			src: "lib/fonts/SpriteSheets/ui" + __disSuffiks + ".js",
			type: createjs.LoadQueue.JAVASCRIPT
		}, {
			id: "JSON1" + __disSuffiks + "img",
			src: "lib/graphics/spriteSheet/items" + __disSuffiks + ".png",
			type: createjs.LoadQueue.IMAGE
		}, {
			id: "JSON2" + __disSuffiks + "img",
			src: "lib/graphics/animations/explode" + __disSuffiks + ".png",
			type: createjs.LoadQueue.IMAGE
		}, {
			id: "JSON1" + __disSuffiks,
			src: "lib/graphics/spriteSheet/items" + __disSuffiks + ".json",
			type: createjs.LoadQueue.JSON
		}, {
			id: "JSON2" + __disSuffiks,
			src: "lib/graphics/animations/explode" + __disSuffiks + ".json",
			type: createjs.LoadQueue.JSON
		}], createjs.Sound.registerPlugins([createjs.WebAudioPlugin]), __audio_supported = createjs.WebAudioPlugin.isSupported(), __audio_supported && (createjs.Sound.alternateExtensions = ["mp3"], queueJS.installPlugin(createjs.Sound), manif.push({
			id: "sound1",
			src: "lib/music/splice.ogg",
			type: createjs.LoadQueue.SOUND
		}, {
			id: "sound2",
			src: "lib/music/ingamestar.ogg",
			type: createjs.LoadQueue.SOUND
		}, {
			id: "sound3",
			src: "lib/music/star.ogg",
			type: createjs.LoadQueue.SOUND
		}, {
			id: "sound4",
			src: "lib/music/levelcomplete.ogg",
			type: createjs.LoadQueue.SOUND
		}, {
			id: "sound5",
			src: "lib/music/gameover.ogg",
			type: createjs.LoadQueue.SOUND
		}, {
			id: "music",
			src: "lib/music/music.ogg",
			type: createjs.LoadQueue.SOUND
		})), queueJS.addEventListener("progress", function(a) {
			b.setLvl(a.progress)
		}), queueJS.addEventListener("complete", function(a) {
			writeData(a, queueJS), MusicCTRL.start(a), __bg.splashScreen(init)
		}), manif = manif.concat(__load), queueJS.loadManifest(manif)
	},
	writeData = function(a, b) {
		for (var c = a.target._loadQueueBackup, d = 0; d < c.length; d++) {
			if (c[d]._item.type == createjs.LoadQueue.JAVASCRIPT) {
				var e = b.getResult(c[d]._item.id);
				document.body.appendChild(e)
			}
			if (c[d]._item.type == createjs.LoadQueue.IMAGE && (images[c[d]._item.id] = b.getResult(c[d]._item.id)), c[d]._item.type == createjs.LoadQueue.JSON) {
				var f = b.getResult(c[d]._item.id);
				f.images = [images[c[d]._item.id + "img"]], jsons[c[d]._item.id] = new createjs.SpriteSheet(f)
			}
		}
	},
	FB_GO = function() {},
	ADD_TO_HOME = function() {},
	__mus;
window.onfocus = function() {
	__mus && (MusicCTRL.on("music"), MusicCTRL.on("sound", 1), MusicCTRL.play("music"))
}, window.onblur = function() {
	__mus = __curMusic, MusicCTRL.off("music"), MusicCTRL.off("sound")
}, window.onpageshow = function() {
	__mus && (MusicCTRL.on("music"), MusicCTRL.on("sound", 1), MusicCTRL.play("music"))
}, window.onpagehide = function() {
	__mus = __curMusic, MusicCTRL.off("music"), MusicCTRL.off("sound")
};