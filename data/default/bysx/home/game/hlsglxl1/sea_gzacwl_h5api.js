!
function(a, b) {
	function c(a) {
		return function(b) {
			return {}.toString.call(b) == "[object " + a + "]"
		}
	}
	function d() {
		return A++
	}
	function e(a) {
		return a.match(D)[0]
	}
	function f(a) {
		for (a = a.replace(E, "/"), a = a.replace(G, "$1/"); a.match(F);) a = a.replace(F, "/");
		return a
	}
	function g(a) {
		var b = a.length - 1,
			c = a.charCodeAt(b);
		return 35 === c ? a.substring(0, b) : ".js" === a.substring(b - 2) || a.indexOf("?") > 0 || 47 === c ? a : a + ".js"
	}
	function h(a) {
		var b = v.alias;
		return b && x(b[a]) ? b[a] : a
	}
	function i(a) {
		var b, c = v.paths;
		return c && (b = a.match(H)) && x(c[b[1]]) && (a = c[b[1]] + b[2]), a
	}
	function j(a) {
		var b = v.vars;
		return b && a.indexOf("{") > -1 && (a = a.replace(I, function(a, c) {
			return x(b[c]) ? b[c] : a
		})), a
	}
	function k(a) {
		var b = v.map,
			c = a;
		if (b) for (var d = 0, e = b.length; e > d; d++) {
			var f = b[d];
			if (c = z(f) ? f(a) || a : a.replace(f[0], f[1]), c !== a) break
		}
		return c
	}
	function l(a, b) {
		var c, d = a.charCodeAt(0);
		if (J.test(a)) c = a;
		else if (46 === d) c = (b ? e(b) : v.cwd) + a;
		else if (47 === d) {
			var g = v.cwd.match(K);
			c = g ? g[0] + a.substring(1) : a
		} else c = v.base + a;
		return 0 === c.indexOf("//") && (c = location.protocol + c), f(c)
	}
	function m(a, b) {
		if (!a) return "";
		a = h(a), a = i(a), a = h(a), a = j(a), a = h(a), a = g(a), a = h(a);
		var c = l(a, b);
		return c = h(c), c = k(c)
	}
	function n(a) {
		return a.hasAttribute ? a.src : a.getAttribute("src", 4)
	}
	function o(a, b) {
		var c;
		try {
			importScripts(a)
		} catch (d) {
			c = d
		}
		b(c)
	}
	function p(a, b, c) {
		var d = Y.createElement("script");
		if (c) {
			var e = z(c) ? c(a) : c;
			e && (d.charset = e)
		}
		q(d, b, a), d.async = !0, d.src = a, _ = d, bb ? ab.insertBefore(d, bb) : ab.appendChild(d), _ = null
	}
	function q(a, b, c) {
		function d(c) {
			a.onload = a.onerror = a.onreadystatechange = null, v.debug || ab.removeChild(a), a = null, b(c)
		}
		var e = "onload" in a;
		e ? (a.onload = d, a.onerror = function() {
			C("error", {
				uri: c,
				node: a
			}), d(!0)
		}) : a.onreadystatechange = function() {
			/loaded|complete/.test(a.readyState) && d()
		}
	}
	function r() {
		if (_) return _;
		if (cb && "interactive" === cb.readyState) return cb;
		for (var a = ab.getElementsByTagName("script"), b = a.length - 1; b >= 0; b--) {
			var c = a[b];
			if ("interactive" === c.readyState) return cb = c
		}
	}
	function s(a) {
		function b() {
			k = a.charAt(l++)
		}
		function c() {
			return /\s/.test(k)
		}
		function d() {
			return '"' == k || "'" == k
		}
		function e() {
			var c = l,
				d = k,
				e = a.indexOf(d, c);
			if (-1 == e) l = m;
			else if ("\\" != a.charAt(e - 1)) l = e + 1;
			else for (; m > l;) if (b(), "\\" == k) l++;
			else if (k == d) break;
			o && (r.push(a.slice(c, l - 1)), o = 0)
		}
		function f() {
			for (l--; m > l;) if (b(), "\\" == k) l++;
			else {
				if ("/" == k) break;
				if ("[" == k) for (; m > l;) if (b(), "\\" == k) l++;
				else if ("]" == k) break
			}
		}
		function g() {
			return /[a-z_$]/i.test(k)
		}
		function h() {
			var b = a.slice(l - 1),
				c = /^[\w$]+/.exec(b)[0];
			p = {
				"if": 1,
				"for": 1,
				"while": 1,
				"with": 1
			}[c], n = {
				"break": 1,
				"case": 1,
				"continue": 1,
				"debugger": 1,
				"delete": 1,
				"do": 1,
				"else": 1,
				"false": 1,
				"if": 1,
				"in": 1,
				"instanceof": 1,
				"return": 1,
				"typeof": 1,
				"void": 1
			}[c], o = /^require\s*\(\s*(['"]).+?\1\s*\)/.test(b), o ? (c = /^require\s*\(\s*['"]/.exec(b)[0], l += c.length - 2) : l += /^[\w$]+(?:\s*\.\s*[\w$]+)*/.exec(b)[0].length - 1
		}
		function i() {
			return /\d/.test(k) || "." == k && /\d/.test(a.charAt(l))
		}
		function j() {
			var b, c = a.slice(l - 1);
			b = "." == k ? /^\.\d+(?:E[+-]?\d*)?\s*/i.exec(c)[0] : /^0x[\da-f]*/i.test(c) ? /^0x[\da-f]*\s*/i.exec(c)[0] : /^\d+\.?\d*(?:E[+-]?\d*)?\s*/i.exec(c)[0], l += b.length - 1, n = 0
		}
		if (-1 == a.indexOf("require")) return [];
		for (var k, l = 0, m = a.length, n = 1, o = 0, p = 0, q = [], r = []; m > l;) b(), c() || (d() ? (e(), n = 1) : "/" == k ? (b(), "/" == k ? (l = a.indexOf("\n", l), -1 == l && (l = a.length)) : "*" == k ? (l = a.indexOf("*/", l), -1 == l ? l = m : l += 2) : n ? (f(), n = 0) : (l--, n = 1)) : g() ? h() : i() ? j() : "(" == k ? (q.push(p), n = 1) : ")" == k ? n = q.pop() : (n = "]" != k, o = 0));
		return r
	}
	function t(a, b) {
		this.uri = a, this.dependencies = b || [], this.deps = {}, this.status = 0, this._entry = []
	}
	if (!a.seajs_gzacwl_h5api) {
		var u = a.seajs_gzacwl_h5api = {
			version: "3.0.0"
		},
			v = u.data = {},
			w = c("Object"),
			x = c("String"),
			y = Array.isArray || c("Array"),
			z = c("Function"),
			A = 0,
			B = v.events = {};
		u.on = function(a, b) {
			var c = B[a] || (B[a] = []);
			return c.push(b), u
		}, u.off = function(a, b) {
			if (!a && !b) return B = v.events = {}, u;
			var c = B[a];
			if (c) if (b) for (var d = c.length - 1; d >= 0; d--) c[d] === b && c.splice(d, 1);
			else delete B[a];
			return u
		};
		var C = u.emit = function(a, b) {
				var c = B[a];
				if (c) {
					c = c.slice();
					for (var d = 0, e = c.length; e > d; d++) c[d](b)
				}
				return u
			},
			D = /[^?#]*\//,
			E = /\/\.\//g,
			F = /\/[^/]+\/\.\.\//,
			G = /([^:/])\/+\//g,
			H = /^([^/:]+)(\/.+)$/,
			I = /{([^{]+)}/g,
			J = /^\/\/.|:\//,
			K = /^.*?\/\/.*?\//;
		u.resolve = m;
		var L, M, N = "undefined" == typeof window && "undefined" != typeof importScripts && z(importScripts),
			O = /^(about|blob):/,
			P = !location.href || O.test(location.href) ? "" : e(location.href);
		if (N) {
			var Q;
			try {
				var R = new Error;
				throw R
			} catch (S) {
				Q = S.stack.split("\n")
			}
			Q.shift();
			for (var T, U = /.*?((?:http|https|file)(?::\/{2}[\w]+)(?:[\/|\.]?)(?:[^\s"]*)).*?/i, V = /(.*?):\d+:\d+\)?$/; Q.length > 0;) {
				var W = Q.shift();
				if (T = U.exec(W), null != T) break
			}
			var X;
			if (null != T) var X = V.exec(T[1])[1];
			M = X, L = e(X || P), "" === P && (P = L)
		} else {
			var Y = document,
				Z = Y.scripts,
				$ = Y.getElementById("seajsnode") || Z[Z.length - 1];
			M = n($), L = e(M || P)
		}
		if (N) u.request = o;
		else {
			var _, Y = document,
				ab = Y.head || Y.getElementsByTagName("head")[0] || Y.documentElement,
				bb = ab.getElementsByTagName("base")[0];
			u.request = p
		}
		var cb, db, eb = u.cache = {},
			fb = {},
			gb = {},
			hb = {},
			ib = t.STATUS = {
				FETCHING: 1,
				SAVED: 2,
				LOADING: 3,
				LOADED: 4,
				EXECUTING: 5,
				EXECUTED: 6,
				ERROR: 7
			};
		t.prototype.resolve = function() {
			for (var a = this, b = a.dependencies, c = [], d = 0, e = b.length; e > d; d++) c[d] = t.resolve(b[d], a.uri);
			return c
		}, t.prototype.pass = function() {
			for (var a = this, b = a.dependencies.length, c = 0; c < a._entry.length; c++) {
				for (var d = a._entry[c], e = 0, f = 0; b > f; f++) {
					var g = a.deps[a.dependencies[f]];
					g.status < ib.LOADED && !d.history.hasOwnProperty(g.uri) && (d.history[g.uri] = !0, e++, g._entry.push(d), g.status === ib.LOADING && g.pass())
				}
				e > 0 && (d.remain += e - 1, a._entry.shift(), c--)
			}
		}, t.prototype.load = function() {
			var a = this;
			if (!(a.status >= ib.LOADING)) {
				a.status = ib.LOADING;
				var b = a.resolve();
				C("load", b);
				for (var c = 0, d = b.length; d > c; c++) a.deps[a.dependencies[c]] = t.get(b[c]);
				if (a.pass(), a._entry.length) return void a.onload();
				var e, f = {};
				for (c = 0; d > c; c++) e = eb[b[c]], e.status < ib.FETCHING ? e.fetch(f) : e.status === ib.SAVED && e.load();
				for (var g in f) f.hasOwnProperty(g) && f[g]()
			}
		}, t.prototype.onload = function() {
			var a = this;
			a.status = ib.LOADED;
			for (var b = 0, c = (a._entry || []).length; c > b; b++) {
				var d = a._entry[b];
				0 === --d.remain && d.callback()
			}
			delete a._entry
		}, t.prototype.error = function() {
			var a = this;
			a.onload(), a.status = ib.ERROR
		}, t.prototype.exec = function() {
			function a(b) {
				var d = c.deps[b] || t.get(a.resolve(b));
				if (d.status == ib.ERROR) throw new Error("module was broken: " + d.uri);
				return d.exec()
			}
			var c = this;
			if (c.status >= ib.EXECUTING) return c.exports;
			if (c.status = ib.EXECUTING, c._entry && !c._entry.length && delete c._entry, !c.hasOwnProperty("factory")) return void(c.non = !0);
			var e = c.uri;
			a.resolve = function(a) {
				return t.resolve(a, e)
			}, a.async = function(b, c) {
				return t.use(b, c, e + "_async_" + d()), a
			};
			var f = c.factory,
				g = z(f) ? f(a, c.exports = {}, c) : f;
			return g === b && (g = c.exports), delete c.factory, c.exports = g, c.status = ib.EXECUTED, C("exec", c), c.exports
		}, t.prototype.fetch = function(a) {
			function b() {
				u.request(f.requestUri, f.onRequest, f.charset)
			}
			function c(a) {
				delete fb[g], gb[g] = !0, db && (t.save(e, db), db = null);
				var b, c = hb[g];
				for (delete hb[g]; b = c.shift();) a === !0 ? b.error() : b.load()
			}
			var d = this,
				e = d.uri;
			d.status = ib.FETCHING;
			var f = {
				uri: e
			};
			C("fetch", f);
			var g = f.requestUri || e;
			return !g || gb.hasOwnProperty(g) ? void d.load() : fb.hasOwnProperty(g) ? void hb[g].push(d) : (fb[g] = !0, hb[g] = [d], C("request", f = {
				uri: e,
				requestUri: g,
				onRequest: c,
				charset: z(v.charset) ? v.charset(g) || "utf-8" : v.charset
			}), void(f.requested || (a ? a[f.requestUri] = b : b())))
		}, t.resolve = function(a, b) {
			var c = {
				id: a,
				refUri: b
			};
			return C("resolve", c), c.uri || u.resolve(c.id, b)
		}, t.define = function(a, c, d) {
			var e = arguments.length;
			1 === e ? (d = a, a = b) : 2 === e && (d = c, y(a) ? (c = a, a = b) : c = b), !y(c) && z(d) && (c = "undefined" == typeof s ? [] : s(d.toString()));
			var f = {
				id: a,
				uri: t.resolve(a),
				deps: c,
				factory: d
			};
			if (!N && !f.uri && Y.attachEvent && "undefined" != typeof r) {
				var g = r();
				g && (f.uri = g.src)
			}
			C("define", f), f.uri ? t.save(f.uri, f) : db = f
		}, t.save = function(a, b) {
			var c = t.get(a);
			c.status < ib.SAVED && (c.id = b.id || a, c.dependencies = b.deps || [], c.factory = b.factory, c.status = ib.SAVED, C("save", c))
		}, t.get = function(a, b) {
			return eb[a] || (eb[a] = new t(a, b))
		}, t.use = function(b, c, d) {
			var e = t.get(d, y(b) ? b : [b]);
			e._entry.push(e), e.history = {}, e.remain = 1, e.callback = function() {
				for (var b = [], d = e.resolve(), f = 0, g = d.length; g > f; f++) b[f] = eb[d[f]].exec();
				c && c.apply(a, b), delete e.callback, delete e.history, delete e.remain, delete e._entry
			}, e.load()
		}, u.use = function(a, b) {
			return t.use(a, b, v.cwd + "_use_" + d()), u
		}, t.define.cmd = {}, a.define_4399_h5api = t.define, u.Module = t, v.fetchedList = gb, v.cid = d, u.require = function(a) {
			var b = t.get(t.resolve(a));
			return b.status < ib.EXECUTING && (b.onload(), b.exec()), b.exports
		}, v.base = L, v.dir = L, v.loader = M, v.cwd = P, v.charset = "utf-8", u.config = function(a) {
			for (var b in a) {
				var c = a[b],
					d = v[b];
				if (d && w(d)) for (var e in c) d[e] = c[e];
				else y(d) ? c = d.concat(c) : "base" === b && ("/" !== c.slice(-1) && (c += "/"), c = l(c)), v[b] = c
			}
			return C("config", a), u
		}
	}
}(this);