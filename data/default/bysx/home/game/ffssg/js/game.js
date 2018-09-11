"use strict";
(function(e) {
	function t(e, t) {
		console.log("[CloudAPI " + r + "] " + e, t)
	}
	function n() {
		return s["ad-rotation"] ? c["ad-count"] == s["ad-rotation"] - 1 ? (t("The ad-count is equal to (ad-rotation - 1)"), c["ad-count"] = 0, !0) : (c["ad-count"] = c["ad-count"] + 1, !1) : (t("No ad-rotation config!"), !1)
	}
	function a() {
		for (var e = [], t = document.getElementsByTagName("link"), n = 0; t.length > n; n++) t[n].rel.indexOf("icon") > -1 && e.push({
			sizes: t[n].sizes.value,
			href: t[n].href,
			rel: t[n].rel
		});
		return e.length ? e : !1
	}
	function i(t, n) {
		switch (t) {
		case "GAME_CONFIG":
			var n = JSON.parse(n);
			s["ad-rotation"] = n["ad-rotation"], s["ad-play"] = n["ad-play"], s.distribution = n.distribution, s["links-active"] = n["links-active"], e.mpConfig = {
				game: s.distribution.substring(0, s.distribution.indexOf("-en-s")),
				partner: "cloudgames"
			};
			var a = document.createElement("script");
			a.src = "http://ext.minijuegosgratis.com/external-host/main.js", document.body.appendChild(a);
			break;
		case "GAME_UNMUTE":
			f.unmute()
		}
	}
	function o(t, n) {
		e.parent && e.parent.postMessage("cloud://" + t + "/--/" + n, "*")
	}
	var r = "1.3.3",
		s = {},
		d = {},
		c = {
			"ad-count": 0
		},
		u = "//cloudgames.com/api",
		l = e.addEventListener ? "addEventListener" : "attachEvent",
		m = e[l],
		g = "attachEvent" == l ? "onmessage" : "message";
	m(g, function(e) {
		var t = e.message ? "message" : "data",
			n = e[t];
		if (n.indexOf("cloud://") > -1) {
			var n = n.replace("cloud://", "").split("/--/");
			i(n[0], n[1])
		}
	}, !1);
	var p = {
		http: function(e, t, n, a) {
			var i = new XMLHttpRequest;
			i.onreadystatechange = function() {
				4 == i.readyState && (200 == i.status ? a(i.responseText) : a())
			}, i.open(e, t, !0), i.setRequestHeader("Content-Type", "application/json"), i.send(n)
		}
	},
		f = {
			mute: function() {
				return "function" == typeof cr_setSuspended ? (cr_setSuspended(!0), !0) : !1
			},
			unmute: function() {
				return "function" == typeof cr_setSuspended ? (cr_setSuspended(!1), !0) : !1
			},
			init: function(e) {
				t("Initializing :)", e), d = e, o("GAME_INIT", JSON.stringify({
					icons: a(),
					game: d
				}))
			},
			showAd: function() {
				t("Function showAd called.")
			},
			hideAd: function() {
				t("Function hideAd called.")
			},
			gameOver: function() {
				t("Function gameOver called."), o("GAME_OVER"), n() && f.mute() && o("AD_SHOW")
			},
			scores: {
				submit: function(e, t) {
					p.http("POST", u + "/games/" + d.id + "/scores", JSON.stringify({
						name: e,
						score: t
					}), function(e) {
						console.log("POST result", e)
					})
				},
				fetch: function(e) {
					p.http("GET", u + "/games/" + d.id + "/scores", null, function(t) {
						c.scores = t, e && e(JSON.parse(t))
					})
				},
				list: function() {
					return c.scores ? c.scores : !1
				}
			},
			play: function() {
				t("Function play called.", s), o("GAME_PLAY"), s["ad-play"] && f.mute() && o("AD_SHOW")
			},
			links: {
				active: function() {
					return o("GAME_LINKS"), s && s["links-active"] ? s["links-active"] : !0
				}
			}
		};
	e.CloudAPI = f
})(window);