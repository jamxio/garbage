/*!
 * @license SoundJS
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 * Copyright (c) 2011-2013 gskinner.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */

/**!
 * SoundJS FlashPlugin also includes swfobject (http://code.google.com/p/swfobject/)
 */

this.createjs = this.createjs || {}, function() {
	var a = createjs.SoundJS = createjs.SoundJS || {};
	a.version = "0.5.2", a.buildDate = "Thu, 12 Dec 2013 23:33:37 GMT"
}(), this.createjs = this.createjs || {}, function() {
	"use strict";
	var a = function() {},
		b = a.prototype;
	a.initialize = function(a) {
		a.addEventListener = b.addEventListener, a.on = b.on, a.removeEventListener = a.off = b.removeEventListener, a.removeAllEventListeners = b.removeAllEventListeners, a.hasEventListener = b.hasEventListener, a.dispatchEvent = b.dispatchEvent, a._dispatchEvent = b._dispatchEvent, a.willTrigger = b.willTrigger
	}, b._listeners = null, b._captureListeners = null, b.initialize = function() {}, b.addEventListener = function(a, b, c) {
		var d;
		d = c ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
		var e = d[a];
		return e && this.removeEventListener(a, b, c), e = d[a], e ? e.push(b) : d[a] = [b], b
	}, b.on = function(a, b, c, d, e, f) {
		return b.handleEvent && (c = c || b, b = b.handleEvent), c = c || this, this.addEventListener(a, function(a) {
			b.call(c, a, e), d && a.remove()
		}, f)
	}, b.removeEventListener = function(a, b, c) {
		var d = c ? this._captureListeners : this._listeners;
		if (d) {
			var e = d[a];
			if (e) for (var f = 0, g = e.length; g > f; f++) if (e[f] == b) {
				1 == g ? delete d[a] : e.splice(f, 1);
				break
			}
		}
	}, b.off = b.removeEventListener, b.removeAllEventListeners = function(a) {
		a ? (this._listeners && delete this._listeners[a], this._captureListeners && delete this._captureListeners[a]) : this._listeners = this._captureListeners = null
	}, b.dispatchEvent = function(a, b) {
		if ("string" == typeof a) {
			var c = this._listeners;
			if (!c || !c[a]) return !1;
			a = new createjs.Event(a)
		}
		if (a.target = b || this, a.bubbles && this.parent) {
			for (var d = this, e = [d]; d.parent;) e.push(d = d.parent);
			var f, g = e.length;
			for (f = g - 1; f >= 0 && !a.propagationStopped; f--) e[f]._dispatchEvent(a, 1 + (0 == f));
			for (f = 1; g > f && !a.propagationStopped; f++) e[f]._dispatchEvent(a, 3)
		} else this._dispatchEvent(a, 2);
		return a.defaultPrevented
	}, b.hasEventListener = function(a) {
		var b = this._listeners,
			c = this._captureListeners;
		return !!(b && b[a] || c && c[a])
	}, b.willTrigger = function(a) {
		for (var b = this; b;) {
			if (b.hasEventListener(a)) return !0;
			b = b.parent
		}
		return !1
	}, b.toString = function() {
		return "[EventDispatcher]"
	}, b._dispatchEvent = function(a, b) {
		var c, d = 1 == b ? this._captureListeners : this._listeners;
		if (a && d) {
			var e = d[a.type];
			if (!e || !(c = e.length)) return;
			a.currentTarget = this, a.eventPhase = b, a.removed = !1, e = e.slice();
			for (var f = 0; c > f && !a.immediatePropagationStopped; f++) {
				var g = e[f];
				g.handleEvent ? g.handleEvent(a) : g(a), a.removed && (this.off(a.type, g, 1 == b), a.removed = !1)
			}
		}
	}, createjs.EventDispatcher = a
}(), this.createjs = this.createjs || {}, function() {
	"use strict";
	var a = function(a, b, c) {
			this.initialize(a, b, c)
		},
		b = a.prototype;
	b.type = null, b.target = null, b.currentTarget = null, b.eventPhase = 0, b.bubbles = !1, b.cancelable = !1, b.timeStamp = 0, b.defaultPrevented = !1, b.propagationStopped = !1, b.immediatePropagationStopped = !1, b.removed = !1, b.initialize = function(a, b, c) {
		this.type = a, this.bubbles = b, this.cancelable = c, this.timeStamp = (new Date).getTime()
	}, b.preventDefault = function() {
		this.defaultPrevented = !0
	}, b.stopPropagation = function() {
		this.propagationStopped = !0
	}, b.stopImmediatePropagation = function() {
		this.immediatePropagationStopped = this.propagationStopped = !0
	}, b.remove = function() {
		this.removed = !0
	}, b.clone = function() {
		return new a(this.type, this.bubbles, this.cancelable)
	}, b.toString = function() {
		return "[Event (type=" + this.type + ")]"
	}, createjs.Event = a
}(), this.createjs = this.createjs || {}, function() {
	"use strict";
	createjs.indexOf = function(a, b) {
		for (var c = 0, d = a.length; d > c; c++) if (b === a[c]) return c;
		return -1
	}
}(), this.createjs = this.createjs || {}, function() {
	"use strict";
	createjs.proxy = function(a, b) {
		var c = Array.prototype.slice.call(arguments, 2);
		return function() {
			return a.apply(b, Array.prototype.slice.call(arguments, 0).concat(c))
		}
	}
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function a() {
		throw "Sound cannot be instantiated"
	}
	function b(a, b) {
		this.init(a, b)
	}
	function c() {
		this.isDefault = !0, this.addEventListener = this.removeEventListener = this.removeAllEventListeners = this.dispatchEvent = this.hasEventListener = this._listeners = this._interrupt = this._playFailed = this.pause = this.resume = this.play = this._beginPlaying = this._cleanUp = this.stop = this.setMasterVolume = this.setVolume = this.mute = this.setMute = this.getMute = this.setPan = this.getPosition = this.setPosition = this.playFailed = function() {
			return !1
		}, this.getVolume = this.getPan = this.getDuration = function() {
			return 0
		}, this.playState = a.PLAY_FAILED, this.toString = function() {
			return "[Sound Default Sound Instance]"
		}
	}
	function d() {}
	var e = a;
	e.DELIMITER = "|", e.INTERRUPT_ANY = "any", e.INTERRUPT_EARLY = "early", e.INTERRUPT_LATE = "late", e.INTERRUPT_NONE = "none", e.PLAY_INITED = "playInited", e.PLAY_SUCCEEDED = "playSucceeded", e.PLAY_INTERRUPTED = "playInterrupted", e.PLAY_FINISHED = "playFinished", e.PLAY_FAILED = "playFailed", e.SUPPORTED_EXTENSIONS = ["mp3", "ogg", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"], e.EXTENSION_MAP = {
		m4a: "mp4"
	}, e.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/, e.defaultInterruptBehavior = e.INTERRUPT_NONE, e.alternateExtensions = [], e._lastID = 0, e.activePlugin = null, e._pluginsRegistered = !1, e._masterVolume = 1, e._masterMute = !1, e._instances = [], e._idHash = {}, e._preloadHash = {}, e._defaultSoundInstance = null, e.addEventListener = null, e.removeEventListener = null, e.removeAllEventListeners = null, e.dispatchEvent = null, e.hasEventListener = null, e._listeners = null, createjs.EventDispatcher.initialize(e), e._sendFileLoadEvent = function(a) {
		if (e._preloadHash[a]) for (var b = 0, c = e._preloadHash[a].length; c > b; b++) {
			var d = e._preloadHash[a][b];
			if (e._preloadHash[a][b] = !0, e.hasEventListener("fileload")) {
				var f = new createjs.Event("fileload");
				f.src = d.src, f.id = d.id, f.data = d.data, e.dispatchEvent(f)
			}
		}
	}, e.getPreloadHandlers = function() {
		return {
			callback: createjs.proxy(e.initLoad, e),
			types: ["sound"],
			extensions: e.SUPPORTED_EXTENSIONS
		}
	}, e.registerPlugin = function(a) {
		try {
			console.log("createjs.Sound.registerPlugin has been deprecated. Please use registerPlugins.")
		} catch (b) {}
		return e._registerPlugin(a)
	}, e._registerPlugin = function(a) {
		return e._pluginsRegistered = !0, null == a ? !1 : a.isSupported() ? (e.activePlugin = new a, !0) : !1
	}, e.registerPlugins = function(a) {
		for (var b = 0, c = a.length; c > b; b++) {
			var d = a[b];
			if (e._registerPlugin(d)) return !0
		}
		return !1
	}, e.initializeDefaultPlugins = function() {
		return null != e.activePlugin ? !0 : e._pluginsRegistered ? !1 : e.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]) ? !0 : !1
	}, e.isReady = function() {
		return null != e.activePlugin
	}, e.getCapabilities = function() {
		return null == e.activePlugin ? null : e.activePlugin._capabilities
	}, e.getCapability = function(a) {
		return null == e.activePlugin ? null : e.activePlugin._capabilities[a]
	}, e.initLoad = function(a, b, c, d, f) {
		a = a.replace(f, "");
		var g = e.registerSound(a, c, d, !1, f);
		return null == g ? !1 : g
	}, e.registerSound = function(a, c, d, f, g) {
		if (!e.initializeDefaultPlugins()) return !1;
		if (a instanceof Object && (g = c, c = a.id, d = a.data, a = a.src), e.alternateExtensions.length) var h = e._parsePath2(a, "sound", c, d);
		else var h = e._parsePath(a, "sound", c, d);
		if (null == h) return !1;
		null != g && (a = g + a, h.src = g + h.src), null != c && (e._idHash[c] = h.src);
		var i = null;
		null != d && (isNaN(d.channels) ? isNaN(d) || (i = parseInt(d)) : i = parseInt(d.channels));
		var j = e.activePlugin.register(h.src, i);
		if (null != j && (null != j.numChannels && (i = j.numChannels), b.create(h.src, i), null != d && isNaN(d) ? d.channels = h.data.channels = i || b.maxPerChannel() : d = h.data = i || b.maxPerChannel(), null != j.tag ? h.tag = j.tag : j.src && (h.src = j.src), null != j.completeHandler && (h.completeHandler = j.completeHandler), j.type && (h.type = j.type)), 0 != f) if (e._preloadHash[h.src] || (e._preloadHash[h.src] = []), e._preloadHash[h.src].push({
			src: a,
			id: c,
			data: d
		}), 1 == e._preloadHash[h.src].length) e.activePlugin.preload(h.src, j);
		else if (1 == e._preloadHash[h.src][0]) return !0;
		return h
	}, e.registerManifest = function(a, b) {
		for (var c = [], d = 0, e = a.length; e > d; d++) c[d] = createjs.Sound.registerSound(a[d].src, a[d].id, a[d].data, a[d].preload, b);
		return c
	}, e.removeSound = function(a, c) {
		if (null == e.activePlugin) return !1;
		if (a instanceof Object && (a = a.src), a = e._getSrcById(a), e.alternateExtensions.length) var d = e._parsePath2(a);
		else var d = e._parsePath(a);
		if (null == d) return !1;
		null != c && (d.src = c + d.src), a = d.src;
		for (var f in e._idHash) e._idHash[f] == a && delete e._idHash[f];
		return b.removeSrc(a), delete e._preloadHash[a], e.activePlugin.removeSound(a), !0
	}, e.removeManifest = function(a, b) {
		for (var c = [], d = 0, e = a.length; e > d; d++) c[d] = createjs.Sound.removeSound(a[d].src, b);
		return c
	}, e.removeAllSounds = function() {
		e._idHash = {}, e._preloadHash = {}, b.removeAll(), e.activePlugin.removeAllSounds()
	}, e.loadComplete = function(a) {
		if (e.alternateExtensions.length) var b = e._parsePath2(a, "sound");
		else var b = e._parsePath(a, "sound");
		return a = b ? e._getSrcById(b.src) : e._getSrcById(a), 1 == e._preloadHash[a][0]
	}, e._parsePath = function(a, b, c, d) {
		"string" != typeof a && (a = a.toString());
		var f = a.split(e.DELIMITER);
		if (f.length > 1) try {
			console.log('createjs.Sound.DELIMITER "|" loading approach has been deprecated. Please use the new alternateExtensions property.')
		} catch (g) {}
		for (var h = {
			type: b || "sound",
			id: c,
			data: d
		}, i = e.getCapabilities(), j = 0, k = f.length; k > j; j++) {
			var l = f[j],
				m = l.match(e.FILE_PATTERN);
			if (null == m) return !1;
			var n = m[4],
				o = m[5];
			if (i[o] && createjs.indexOf(e.SUPPORTED_EXTENSIONS, o) > -1) return h.name = n, h.src = l, h.extension = o, h
		}
		return null
	}, e._parsePath2 = function(a, b, c, d) {
		"string" != typeof a && (a = a.toString());
		var f = a.match(e.FILE_PATTERN);
		if (null == f) return !1;
		for (var g = f[4], h = f[5], i = e.getCapabilities(), j = 0; !i[h];) if (h = e.alternateExtensions[j++], j > e.alternateExtensions.length) return null;
		a = a.replace("." + f[5], "." + h);
		var k = {
			type: b || "sound",
			id: c,
			data: d
		};
		return k.name = g, k.src = a, k.extension = h, k
	}, e.play = function(a, b, c, d, f, g, h) {
		var i = e.createInstance(a),
			j = e._playInstance(i, b, c, d, f, g, h);
		return j || i.playFailed(), i
	}, e.createInstance = function(c) {
		if (!e.initializeDefaultPlugins()) return e._defaultSoundInstance;
		if (c = e._getSrcById(c), e.alternateExtensions.length) var d = e._parsePath2(c, "sound");
		else var d = e._parsePath(c, "sound");
		var f = null;
		return null != d && null != d.src ? (b.create(d.src), f = e.activePlugin.create(d.src)) : f = a._defaultSoundInstance, f.uniqueId = e._lastID++, f
	}, e.setVolume = function(a) {
		if (null == Number(a)) return !1;
		if (a = Math.max(0, Math.min(1, a)), e._masterVolume = a, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(a)) for (var b = this._instances, c = 0, d = b.length; d > c; c++) b[c].setMasterVolume(a)
	}, e.getVolume = function() {
		return e._masterVolume
	}, e.setMute = function(a) {
		if (null == a || void 0 == a) return !1;
		if (this._masterMute = a, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(a)) for (var b = this._instances, c = 0, d = b.length; d > c; c++) b[c].setMasterMute(a);
		return !0
	}, e.getMute = function() {
		return this._masterMute
	}, e.stop = function() {
		for (var a = this._instances, b = a.length; b--;) a[b].stop()
	}, e._playInstance = function(a, b, c, d, f, g, h) {
		if (b instanceof Object && (c = b.delay, d = b.offset, f = b.loop, g = b.volume, h = b.pan, b = b.interrupt), b = b || e.defaultInterruptBehavior, null == c && (c = 0), null == d && (d = a.getPosition()), null == f && (f = 0), null == g && (g = a.volume), null == h && (h = a.pan), 0 == c) {
			var i = e._beginPlaying(a, b, d, f, g, h);
			if (!i) return !1
		} else {
			var j = setTimeout(function() {
				e._beginPlaying(a, b, d, f, g, h)
			}, c);
			a._delayTimeoutId = j
		}
		return this._instances.push(a), !0
	}, e._beginPlaying = function(a, c, d, e, f, g) {
		if (!b.add(a, c)) return !1;
		var h = a._beginPlaying(d, e, f, g);
		if (!h) {
			var i = createjs.indexOf(this._instances, a);
			return i > -1 && this._instances.splice(i, 1), !1
		}
		return !0
	}, e._getSrcById = function(a) {
		return null == e._idHash || null == e._idHash[a] ? a : e._idHash[a]
	}, e._playFinished = function(a) {
		b.remove(a);
		var c = createjs.indexOf(this._instances, a);
		c > -1 && this._instances.splice(c, 1)
	}, createjs.Sound = a, b.channels = {}, b.create = function(a, c) {
		var d = b.get(a);
		return null == d ? (b.channels[a] = new b(a, c), !0) : !1
	}, b.removeSrc = function(a) {
		var c = b.get(a);
		return null == c ? !1 : (c.removeAll(), delete b.channels[a], !0)
	}, b.removeAll = function() {
		for (var a in b.channels) b.channels[a].removeAll();
		b.channels = {}
	}, b.add = function(a, c) {
		var d = b.get(a.src);
		return null == d ? !1 : d.add(a, c)
	}, b.remove = function(a) {
		var c = b.get(a.src);
		return null == c ? !1 : (c.remove(a), !0)
	}, b.maxPerChannel = function() {
		return f.maxDefault
	}, b.get = function(a) {
		return b.channels[a]
	};
	var f = b.prototype;
	f.src = null, f.max = null, f.maxDefault = 100, f.length = 0, f.init = function(a, b) {
		this.src = a, this.max = b || this.maxDefault, -1 == this.max && (this.max = this.maxDefault), this._instances = []
	}, f.get = function(a) {
		return this._instances[a]
	}, f.add = function(a, b) {
		return this.getSlot(b, a) ? (this._instances.push(a), this.length++, !0) : !1
	}, f.remove = function(a) {
		var b = createjs.indexOf(this._instances, a);
		return -1 == b ? !1 : (this._instances.splice(b, 1), this.length--, !0)
	}, f.removeAll = function() {
		for (var a = this.length - 1; a >= 0; a--) this._instances[a].stop()
	}, f.getSlot = function(b) {
		for (var c, d, e = 0, f = this.max; f > e; e++) {
			if (c = this.get(e), null == c) return !0;
			(b != a.INTERRUPT_NONE || c.playState == a.PLAY_FINISHED) && (0 != e ? c.playState == a.PLAY_FINISHED || c.playState == a.PLAY_INTERRUPTED || c.playState == a.PLAY_FAILED ? d = c : (b == a.INTERRUPT_EARLY && c.getPosition() < d.getPosition() || b == a.INTERRUPT_LATE && c.getPosition() > d.getPosition()) && (d = c) : d = c)
		}
		return null != d ? (d._interrupt(), this.remove(d), !0) : !1
	}, f.toString = function() {
		return "[Sound SoundChannel]"
	}, a._defaultSoundInstance = new c, d.init = function() {
		var a = window.navigator.userAgent;
		d.isFirefox = a.indexOf("Firefox") > -1, d.isOpera = null != window.opera, d.isChrome = a.indexOf("Chrome") > -1, d.isIOS = a.indexOf("iPod") > -1 || a.indexOf("iPhone") > -1 || a.indexOf("iPad") > -1, d.isAndroid = a.indexOf("Android") > -1, d.isBlackberry = a.indexOf("Blackberry") > -1
	}, d.init(), createjs.Sound.BrowserDetect = d
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function a() {
		this._init()
	}
	var b = a;
	b._capabilities = null, b.isSupported = function() {
		var a = createjs.Sound.BrowserDetect.isIOS || createjs.Sound.BrowserDetect.isAndroid || createjs.Sound.BrowserDetect.isBlackberry;
		return "file:" != location.protocol || a || this._isFileXHRSupported() ? (b._generateCapabilities(), null == b.context ? !1 : !0) : !1
	}, b._isFileXHRSupported = function() {
		var a = !0,
			b = new XMLHttpRequest;
		try {
			b.open("GET", "fail.fail", !1)
		} catch (c) {
			return a = !1
		}
		b.onerror = function() {
			a = !1
		}, b.onload = function() {
			a = 404 == this.status || 200 == this.status || 0 == this.status && "" != this.response
		};
		try {
			b.send()
		} catch (c) {
			a = !1
		}
		return a
	}, b._generateCapabilities = function() {
		if (null == b._capabilities) {
			var a = document.createElement("audio");
			if (null == a.canPlayType) return null;
			if (window.webkitAudioContext) b.context = new webkitAudioContext;
			else {
				if (!window.AudioContext) return null;
				b.context = new AudioContext
			}
			b._compatibilitySetUp(), b.playEmptySound(), b._capabilities = {
				panning: !0,
				volume: !0,
				tracks: -1
			};
			for (var c = createjs.Sound.SUPPORTED_EXTENSIONS, d = createjs.Sound.EXTENSION_MAP, e = 0, f = c.length; f > e; e++) {
				var g = c[e],
					h = d[g] || g;
				b._capabilities[g] = "no" != a.canPlayType("audio/" + g) && "" != a.canPlayType("audio/" + g) || "no" != a.canPlayType("audio/" + h) && "" != a.canPlayType("audio/" + h)
			}
			b.context.destination.numberOfChannels < 2 && (b._capabilities.panning = !1), b.dynamicsCompressorNode = b.context.createDynamicsCompressor(), b.dynamicsCompressorNode.connect(b.context.destination), b.gainNode = b.context.createGain(), b.gainNode.connect(b.dynamicsCompressorNode)
		}
	}, b._compatibilitySetUp = function() {
		if (!b.context.createGain) {
			b.context.createGain = b.context.createGainNode;
			var a = b.context.createBufferSource();
			a.__proto__.start = a.__proto__.noteGrainOn, a.__proto__.stop = a.__proto__.noteOff, this._panningModel = 0
		}
	}, b.playEmptySound = function() {
		var a = this.context.createBuffer(1, 1, 22050),
			b = this.context.createBufferSource();
		b.buffer = a, b.connect(this.context.destination), b.start(0, 0, 0)
	};
	var c = a.prototype;
	c._capabilities = null, c._volume = 1, c.context = null, c._panningModel = "equalpower", c.dynamicsCompressorNode = null, c.gainNode = null, c._arrayBuffers = null, c._init = function() {
		this._capabilities = b._capabilities, this._arrayBuffers = {}, this.context = b.context, this.gainNode = b.gainNode, this.dynamicsCompressorNode = b.dynamicsCompressorNode
	}, c.register = function(a) {
		this._arrayBuffers[a] = !0;
		var b = new createjs.WebAudioPlugin.Loader(a, this);
		return {
			tag: b
		}
	}, c.isPreloadStarted = function(a) {
		return null != this._arrayBuffers[a]
	}, c.isPreloadComplete = function(a) {
		return !(null == this._arrayBuffers[a] || 1 == this._arrayBuffers[a])
	}, c.removeSound = function(a) {
		delete this._arrayBuffers[a]
	}, c.removeAllSounds = function() {
		this._arrayBuffers = {}
	}, c.addPreloadResults = function(a, b) {
		this._arrayBuffers[a] = b
	}, c._handlePreloadComplete = function() {
		createjs.Sound._sendFileLoadEvent(this.src)
	}, c.preload = function(a) {
		this._arrayBuffers[a] = !0;
		var b = new createjs.WebAudioPlugin.Loader(a, this);
		b.onload = this._handlePreloadComplete, b.load()
	}, c.create = function(a) {
		return this.isPreloadStarted(a) || this.preload(a), new createjs.WebAudioPlugin.SoundInstance(a, this)
	}, c.setVolume = function(a) {
		return this._volume = a, this._updateVolume(), !0
	}, c._updateVolume = function() {
		var a = createjs.Sound._masterMute ? 0 : this._volume;
		a != this.gainNode.gain.value && (this.gainNode.gain.value = a)
	}, c.getVolume = function() {
		return this._volume
	}, c.setMute = function() {
		return this._updateVolume(), !0
	}, c.toString = function() {
		return "[WebAudioPlugin]"
	}, createjs.WebAudioPlugin = a
}(), function() {
	"use strict";

	function a(a, b) {
		this._init(a, b)
	}
	var b = a.prototype = new createjs.EventDispatcher;
	b.src = null, b.uniqueId = -1, b.playState = null, b._owner = null, b._offset = 0, b._delay = 0, b._volume = 1;
	try {
		Object.defineProperty(b, "volume", {
			get: function() {
				return this._volume
			},
			set: function(a) {
				return null == Number(a) ? !1 : (a = Math.max(0, Math.min(1, a)), this._volume = a, this._updateVolume(), void 0)
			}
		})
	} catch (c) {}
	b._pan = 0;
	try {
		Object.defineProperty(b, "pan", {
			get: function() {
				return this._pan
			},
			set: function(a) {
				return this._owner._capabilities.panning && null != Number(a) ? (a = Math.max(-1, Math.min(1, a)), this._pan = a, this.panNode.setPosition(a, 0, -.5), void 0) : !1
			}
		})
	} catch (c) {}
	b._duration = 0, b._remainingLoops = 0, b._delayTimeoutId = null, b._soundCompleteTimeout = null, b.gainNode = null, b.panNode = null, b.sourceNode = null, b._sourceNodeNext = null, b._muted = !1, b._paused = !1, b._startTime = 0, b._endedHandler = null, b._sendEvent = function(a) {
		var b = new createjs.Event(a);
		this.dispatchEvent(b)
	}, b._init = function(a, b) {
		this._owner = b, this.src = a, this.gainNode = this._owner.context.createGain(), this.panNode = this._owner.context.createPanner(), this.panNode.panningModel = this._owner._panningModel, this.panNode.connect(this.gainNode), this._owner.isPreloadComplete(this.src) && (this._duration = 1e3 * this._owner._arrayBuffers[this.src].duration), this._endedHandler = createjs.proxy(this._handleSoundComplete, this)
	}, b._cleanUp = function() {
		this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED && (this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._delayTimeoutId), clearTimeout(this._soundCompleteTimeout), this._startTime = 0, null != window.createjs && createjs.Sound._playFinished(this)
	}, b._cleanUpAudioNode = function(a) {
		return a && (a.stop(0), a.disconnect(this.panNode), a = null), a
	}, b._interrupt = function() {
		this._cleanUp(), this.playState = createjs.Sound.PLAY_INTERRUPTED, this._paused = !1, this._sendEvent("interrupted")
	}, b._handleSoundReady = function() {
		if (null != window.createjs) {
			if (1e3 * this._offset > this.getDuration()) return this.playFailed(), void 0;
			this._offset < 0 && (this._offset = 0), this.playState = createjs.Sound.PLAY_SUCCEEDED, this._paused = !1, this.gainNode.connect(this._owner.gainNode);
			var a = this._owner._arrayBuffers[this.src].duration;
			this.sourceNode = this._createAndPlayAudioNode(this._owner.context.currentTime - a, this._offset), this._duration = 1e3 * a, this._startTime = this.sourceNode.startTime - this._offset, this._soundCompleteTimeout = setTimeout(this._endedHandler, 1e3 * (a - this._offset)), 0 != this._remainingLoops && (this._sourceNodeNext = this._createAndPlayAudioNode(this._startTime, 0))
		}
	}, b._createAndPlayAudioNode = function(a, b) {
		var c = this._owner.context.createBufferSource();
		return c.buffer = this._owner._arrayBuffers[this.src], c.connect(this.panNode), this._owner.context.currentTime, c.startTime = a + c.buffer.duration, c.start(c.startTime, b, c.buffer.duration - b), c
	}, b.play = function(a, b, c, d, e, f) {
		this._cleanUp(), createjs.Sound._playInstance(this, a, b, c, d, e, f)
	}, b._beginPlaying = function(a, b, c, d) {
		return null != window.createjs && this.src ? (this._offset = a / 1e3, this._remainingLoops = b, this.volume = c, this.pan = d, this._owner.isPreloadComplete(this.src) ? (this._handleSoundReady(null), this._sendEvent("succeeded"), 1) : (this.playFailed(), void 0)) : void 0
	}, b.pause = function() {
		return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED ? !1 : (this._paused = !0, this._offset = this._owner.context.currentTime - this._startTime, this._cleanUpAudioNode(this.sourceNode), this._cleanUpAudioNode(this._sourceNodeNext), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(), clearTimeout(this._delayTimeoutId), clearTimeout(this._soundCompleteTimeout), !0)
	}, b.resume = function() {
		return this._paused ? (this._handleSoundReady(null), !0) : !1
	}, b.stop = function() {
		return this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this._offset = 0, !0
	}, b.setVolume = function(a) {
		return this.volume = a, !0
	}, b._updateVolume = function() {
		var a = this._muted ? 0 : this._volume;
		return a != this.gainNode.gain.value ? (this.gainNode.gain.value = a, !0) : !1
	}, b.getVolume = function() {
		return this.volume
	}, b.setMute = function(a) {
		return null == a || void 0 == a ? !1 : (this._muted = a, this._updateVolume(), !0)
	}, b.getMute = function() {
		return this._muted
	}, b.setPan = function(a) {
		return this.pan = a, this.pan != a ? !1 : void 0
	}, b.getPan = function() {
		return this.pan
	}, b.getPosition = function() {
		if (this._paused || null == this.sourceNode) var a = this._offset;
		else var a = this._owner.context.currentTime - this._startTime;
		return 1e3 * a
	}, b.setPosition = function(a) {
		return this._offset = a / 1e3, this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._cleanUpAudioNode(this.sourceNode), this._cleanUpAudioNode(this._sourceNodeNext), clearTimeout(this._soundCompleteTimeout)), this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED || this._handleSoundReady(null), !0
	}, b.getDuration = function() {
		return this._duration
	}, b._handleSoundComplete = function() {
		return this._offset = 0, 0 != this._remainingLoops ? (this._remainingLoops--, this._sourceNodeNext ? (this._cleanUpAudioNode(this.sourceNode), this.sourceNode = this._sourceNodeNext, this._startTime = this.sourceNode.startTime, this._sourceNodeNext = this._createAndPlayAudioNode(this._startTime, 0), this._soundCompleteTimeout = setTimeout(this._endedHandler, this._duration)) : this._handleSoundReady(null), this._sendEvent("loop"), void 0) : (null != window.createjs && (this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this._sendEvent("complete")), void 0)
	}, b.playFailed = function() {
		null != window.createjs && (this._cleanUp(), this.playState = createjs.Sound.PLAY_FAILED, this._sendEvent("failed"))
	}, b.toString = function() {
		return "[WebAudioPlugin SoundInstance]"
	}, createjs.WebAudioPlugin.SoundInstance = a
}(), function() {
	"use strict";

	function a(a, b) {
		this._init(a, b)
	}
	var b = a.prototype;
	b.request = null, b.owner = null, b.progress = -1, b.src = null, b.originalSrc = null, b.result = null, b.onload = null, b.onprogress = null, b.onError = null, b._init = function(a, b) {
		this.src = a, this.originalSrc = a, this.owner = b
	}, b.load = function(a) {
		null != a && (this.src = a), this.request = new XMLHttpRequest, this.request.open("GET", this.src, !0), this.request.responseType = "arraybuffer", this.request.onload = createjs.proxy(this.handleLoad, this), this.request.onError = createjs.proxy(this.handleError, this), this.request.onprogress = createjs.proxy(this.handleProgress, this), this.request.send()
	}, b.handleProgress = function(a, b) {
		this.progress = a / b, null != this.onprogress && this.onprogress({
			loaded: a,
			total: b,
			progress: this.progress
		})
	}, b.handleLoad = function() {
		this.owner.context.decodeAudioData(this.request.response, createjs.proxy(this.handleAudioDecoded, this), createjs.proxy(this.handleError, this))
	}, b.handleAudioDecoded = function(a) {
		this.progress = 1, this.result = a, this.src = this.originalSrc, this.owner.addPreloadResults(this.src, this.result), this.onload && this.onload()
	}, b.handleError = function(a) {
		this.owner.removeSound(this.src), this.onerror && this.onerror(a)
	}, b.toString = function() {
		return "[WebAudioPlugin Loader]"
	}, createjs.WebAudioPlugin.Loader = a
}(), this.createjs = this.createjs || {}, function() {
	"use strict";

	function a() {
		this._init()
	}
	var b = a;
	b.MAX_INSTANCES = 30, b._AUDIO_READY = "canplaythrough", b._AUDIO_ENDED = "ended", b._AUDIO_SEEKED = "seeked", b._AUDIO_STALLED = "stalled", b._capabilities = null, b.enableIOS = !1, b.isSupported = function() {
		if (createjs.Sound.BrowserDetect.isIOS && !b.enableIOS) return !1;
		b._generateCapabilities();
		var a = b.tag;
		return null == a || null == b._capabilities ? !1 : !0
	}, b._generateCapabilities = function() {
		if (null == b._capabilities) {
			var a = b.tag = document.createElement("audio");
			if (null == a.canPlayType) return null;
			b._capabilities = {
				panning: !0,
				volume: !0,
				tracks: -1
			};
			for (var c = createjs.Sound.SUPPORTED_EXTENSIONS, d = createjs.Sound.EXTENSION_MAP, e = 0, f = c.length; f > e; e++) {
				var g = c[e],
					h = d[g] || g;
				b._capabilities[g] = "no" != a.canPlayType("audio/" + g) && "" != a.canPlayType("audio/" + g) || "no" != a.canPlayType("audio/" + h) && "" != a.canPlayType("audio/" + h)
			}
		}
	};
	var c = a.prototype;
	c._capabilities = null, c._audioSources = null, c.defaultNumChannels = 2, c.loadedHandler = null, c._init = function() {
		this._capabilities = b._capabilities, this._audioSources = {}
	}, c.register = function(a, b) {
		this._audioSources[a] = !0;
		for (var c = createjs.HTMLAudioPlugin.TagPool.get(a), d = null, e = b || this.defaultNumChannels, f = 0; e > f; f++) d = this._createTag(a), c.add(d);
		if (d.id = a, this.loadedHandler = createjs.proxy(this._handleTagLoad, this), d.addEventListener && d.addEventListener("canplaythrough", this.loadedHandler), null == d.onreadystatechange) d.onreadystatechange = this.loadedHandler;
		else {
			var g = d.onreadystatechange;
			d.onreadystatechange = function() {
				g(), this.loadedHandler()
			}
		}
		return {
			tag: d,
			numChannels: e
		}
	}, c._handleTagLoad = function(a) {
		a.target.removeEventListener && a.target.removeEventListener("canplaythrough", this.loadedHandler), a.target.onreadystatechange = null, a.target.src != a.target.id && createjs.HTMLAudioPlugin.TagPool.checkSrc(a.target.id)
	}, c._createTag = function(a) {
		var b = document.createElement("audio");
		return b.autoplay = !1, b.preload = "none", b.src = a, b
	}, c.removeSound = function(a) {
		delete this._audioSources[a], createjs.HTMLAudioPlugin.TagPool.remove(a)
	}, c.removeAllSounds = function() {
		this._audioSources = {}, createjs.HTMLAudioPlugin.TagPool.removeAll()
	}, c.create = function(a) {
		if (!this.isPreloadStarted(a)) {
			var b = createjs.HTMLAudioPlugin.TagPool.get(a),
				c = this._createTag(a);
			c.id = a, b.add(c), this.preload(a, {
				tag: c
			})
		}
		return new createjs.HTMLAudioPlugin.SoundInstance(a, this)
	}, c.isPreloadStarted = function(a) {
		return null != this._audioSources[a]
	}, c.preload = function(a, b) {
		this._audioSources[a] = !0, new createjs.HTMLAudioPlugin.Loader(a, b.tag)
	}, c.toString = function() {
		return "[HTMLAudioPlugin]"
	}, createjs.HTMLAudioPlugin = a
}(), function() {
	"use strict";

	function a(a, b) {
		this._init(a, b)
	}
	var b = a.prototype = new createjs.EventDispatcher;
	b.src = null, b.uniqueId = -1, b.playState = null, b._owner = null, b.loaded = !1, b._offset = 0, b._delay = 0, b._volume = 1;
	try {
		Object.defineProperty(b, "volume", {
			get: function() {
				return this._volume
			},
			set: function(a) {
				null != Number(a) && (a = Math.max(0, Math.min(1, a)), this._volume = a, this._updateVolume())
			}
		})
	} catch (c) {}
	b.pan = 0, b._duration = 0, b._remainingLoops = 0, b._delayTimeoutId = null, b.tag = null, b._muted = !1, b._paused = !1, b._endedHandler = null, b._readyHandler = null, b._stalledHandler = null, b.loopHandler = null, b._init = function(a, b) {
		this.src = a, this._owner = b, this._endedHandler = createjs.proxy(this._handleSoundComplete, this), this._readyHandler = createjs.proxy(this._handleSoundReady, this), this._stalledHandler = createjs.proxy(this._handleSoundStalled, this), this.loopHandler = createjs.proxy(this.handleSoundLoop, this)
	}, b._sendEvent = function(a) {
		var b = new createjs.Event(a);
		this.dispatchEvent(b)
	}, b._cleanUp = function() {
		var a = this.tag;
		if (null != a) {
			a.pause(), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this.loopHandler, !1);
			try {
				a.currentTime = 0
			} catch (b) {}
			createjs.HTMLAudioPlugin.TagPool.setInstance(this.src, a), this.tag = null
		}
		clearTimeout(this._delayTimeoutId), null != window.createjs && createjs.Sound._playFinished(this)
	}, b._interrupt = function() {
		null != this.tag && (this.playState = createjs.Sound.PLAY_INTERRUPTED, this._cleanUp(), this._paused = !1, this._sendEvent("interrupted"))
	}, b.play = function(a, b, c, d, e, f) {
		this._cleanUp(), createjs.Sound._playInstance(this, a, b, c, d, e, f)
	}, b._beginPlaying = function(a, b, c, d) {
		if (null == window.createjs) return -1;
		var e = this.tag = createjs.HTMLAudioPlugin.TagPool.getInstance(this.src);
		return null == e ? (this.playFailed(), -1) : (e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._offset = a, this.volume = c, this.pan = d, this._updateVolume(), this._remainingLoops = b, 4 !== e.readyState ? (e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), e.preload = "auto", e.load()) : this._handleSoundReady(null), this._sendEvent("succeeded"), 1)
	}, b._handleSoundStalled = function() {
		this._cleanUp(), this._sendEvent("failed")
	}, b._handleSoundReady = function() {
		if (null != window.createjs) {
			if (this._duration = 1e3 * this.tag.duration, this.playState = createjs.Sound.PLAY_SUCCEEDED, this._paused = !1, this.tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), this._offset >= this.getDuration()) return this.playFailed(), void 0;
			this._offset > 0 && (this.tag.currentTime = .001 * this._offset), -1 == this._remainingLoops && (this.tag.loop = !0), 0 != this._remainingLoops && (this.tag.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this.loopHandler, !1), this.tag.loop = !0), this.tag.play()
		}
	}, b.pause = function() {
		return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED || null == this.tag ? !1 : (this._paused = !0, this.tag.pause(), clearTimeout(this._delayTimeoutId), !0)
	}, b.resume = function() {
		return this._paused && null != this.tag ? (this._paused = !1, this.tag.play(), !0) : !1
	}, b.stop = function() {
		return this._offset = 0, this.pause(), this.playState = createjs.Sound.PLAY_FINISHED, this._cleanUp(), !0
	}, b.setMasterVolume = function() {
		return this._updateVolume(), !0
	}, b.setVolume = function(a) {
		return this.volume = a, !0
	}, b._updateVolume = function() {
		if (null != this.tag) {
			var a = this._muted || createjs.Sound._masterMute ? 0 : this._volume * createjs.Sound._masterVolume;
			return a != this.tag.volume && (this.tag.volume = a), !0
		}
		return !1
	}, b.getVolume = function() {
		return this.volume
	}, b.setMasterMute = function() {
		return this._updateVolume(), !0
	}, b.setMute = function(a) {
		return null == a || void 0 == a ? !1 : (this._muted = a, this._updateVolume(), !0)
	}, b.getMute = function() {
		return this._muted
	}, b.setPan = function() {
		return !1
	}, b.getPan = function() {
		return 0
	}, b.getPosition = function() {
		return null == this.tag ? this._offset : 1e3 * this.tag.currentTime
	}, b.setPosition = function(a) {
		if (null == this.tag) this._offset = a;
		else {
			this.tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this.loopHandler, !1);
			try {
				this.tag.currentTime = .001 * a
			} catch (b) {
				return !1
			}
			this.tag.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this.loopHandler, !1)
		}
		return !0
	}, b.getDuration = function() {
		return this._duration
	}, b._handleSoundComplete = function() {
		this._offset = 0, null != window.createjs && (this.playState = createjs.Sound.PLAY_FINISHED, this._cleanUp(), this._sendEvent("complete"))
	}, b.handleSoundLoop = function() {
		this._offset = 0, this._remainingLoops--, 0 == this._remainingLoops && (this.tag.loop = !1, this.tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this.loopHandler, !1)), this._sendEvent("loop")
	}, b.playFailed = function() {
		null != window.createjs && (this.playState = createjs.Sound.PLAY_FAILED, this._cleanUp(), this._sendEvent("failed"))
	}, b.toString = function() {
		return "[HTMLAudioPlugin SoundInstance]"
	}, createjs.HTMLAudioPlugin.SoundInstance = a
}(), function() {
	"use strict";

	function a(a, b) {
		this._init(a, b)
	}
	var b = a.prototype;
	b.src = null, b.tag = null, b.preloadTimer = null, b.loadedHandler = null, b._init = function(a, b) {
		if (this.src = a, this.tag = b, this.preloadTimer = setInterval(createjs.proxy(this.preloadTick, this), 200), this.loadedHandler = createjs.proxy(this.sendLoadedEvent, this), this.tag.addEventListener && this.tag.addEventListener("canplaythrough", this.loadedHandler), null == this.tag.onreadystatechange) this.tag.onreadystatechange = createjs.proxy(this.sendLoadedEvent, this);
		else {
			var c = this.tag.onreadystatechange;
			this.tag.onreadystatechange = function() {
				c(), this.tag.onreadystatechange = createjs.proxy(this.sendLoadedEvent, this)
			}
		}
		this.tag.preload = "auto", this.tag.load()
	}, b.preloadTick = function() {
		var a = this.tag.buffered,
			b = this.tag.duration;
		a.length > 0 && a.end(0) >= b - 1 && this.handleTagLoaded()
	}, b.handleTagLoaded = function() {
		clearInterval(this.preloadTimer)
	}, b.sendLoadedEvent = function() {
		this.tag.removeEventListener && this.tag.removeEventListener("canplaythrough", this.loadedHandler), this.tag.onreadystatechange = null, createjs.Sound._sendFileLoadEvent(this.src)
	}, b.toString = function() {
		return "[HTMLAudioPlugin Loader]"
	}, createjs.HTMLAudioPlugin.Loader = a
}(), function() {
	"use strict";

	function a(a) {
		this._init(a)
	}
	var b = a;
	b.tags = {}, b.get = function(c) {
		var d = b.tags[c];
		return null == d && (d = b.tags[c] = new a(c)), d
	}, b.remove = function(a) {
		var c = b.tags[a];
		return null == c ? !1 : (c.removeAll(), delete b.tags[a], !0)
	}, b.removeAll = function() {
		for (var a in b.tags) b.tags[a].removeAll();
		b.tags = {}
	}, b.getInstance = function(a) {
		var c = b.tags[a];
		return null == c ? null : c.get()
	}, b.setInstance = function(a, c) {
		var d = b.tags[a];
		return null == d ? null : d.set(c)
	}, b.checkSrc = function(a) {
		var c = b.tags[a];
		return null == c ? null : (c.checkSrcChange(), void 0)
	};
	var c = a.prototype;
	c.src = null, c.length = 0, c.available = 0, c.tags = null, c._init = function(a) {
		this.src = a, this.tags = []
	}, c.add = function(a) {
		this.tags.push(a), this.length++, this.available++
	}, c.removeAll = function() {
		for (; this.length--;) delete this.tags[this.length];
		this.src = null, this.tags.length = 0
	}, c.get = function() {
		if (0 == this.tags.length) return null;
		this.available = this.tags.length;
		var a = this.tags.pop();
		return null == a.parentNode && document.body.appendChild(a), a
	}, c.set = function(a) {
		var b = createjs.indexOf(this.tags, a); - 1 == b && this.tags.push(a), this.available = this.tags.length
	}, c.checkSrcChange = function() {
		for (var a = this.tags.length - 1, b = this.tags[a].src; a--;) this.tags[a].src = b
	}, c.toString = function() {
		return "[HTMLAudioPlugin TagPool]"
	}, createjs.HTMLAudioPlugin.TagPool = a
}();