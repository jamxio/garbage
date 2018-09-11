'use strict';
var aa, ba, ca, C, da, ea, fa, R, ga, ha, ia, ja, la, T, ma, na, ra, ta, ua, wa, xa, W, ya, za, Aa, Ba, Ca, X, Da, Ea, Fa, Ia, Ja, Ka, La, Na, Oa, Pa, Qa, Va, Wa, Xa, Ya, Za, $a, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc = {},
	cc = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ?
function(k) {
	return k.__proto__
} : function(k) {
	return k.constructor.prototype
});
(function() {
	function k(a, d, c, b) {
		this.set(a, d, c, b)
	}
	function p() {
		this.Ib = this.Hb = this.Lb = this.Kb = this.Wb = this.Vb = this.ob = this.nb = 0
	}
	function h(a, d, c, b) {
		a < d ? c < b ? (z = a < c ? a : c, l = d > b ? d : b) : (z = a < b ? a : b, l = d > c ? d : c) : c < b ? (z = d < c ? d : c, l = a > b ? a : b) : (z = d < b ? d : b, l = a > c ? a : c)
	}
	function q() {
		this.items = this.Dd = null;
		this.Mh = 0;
		E && (this.Dd = new Set);
		this.Ng = [];
		this.te = !0
	}
	function r(a) {
		D[L++] = a
	}
	function t() {
		this.W = this.Dk = this.y = this.$g = 0
	}
	function f(a) {
		this.Za = [];
		this.Qi = this.Si = this.Ti = this.Ri = 0;
		this.ri(a)
	}
	function a(a, d) {
		this.gl = a;
		this.fl = d;
		this.cells = {}
	}
	function b(a, d) {
		this.gl = a;
		this.fl = d;
		this.cells = {}
	}
	function e(a, d, c) {
		var b;
		return O.length ? (b = O.pop(), b.Ul = a, b.x = d, b.y = c, b) : new aa(a, d, c)
	}
	function d(a, d, c) {
		this.Ul = a;
		this.x = d;
		this.y = c;
		this.eb = new ba
	}
	function c(a, d, c) {
		var b;
		return N.length ? (b = N.pop(), b.Ul = a, b.x = d, b.y = c, b) : new ca(a, d, c)
	}
	function n(a, d, c) {
		this.Ul = a;
		this.x = d;
		this.y = c;
		this.eb = [];
		this.kg = !0;
		this.Bd = new ba;
		this.Wg = !1
	}
	function g(a, d) {
		return a.ld - d.ld
	}
	C = function(a) {
		window.console && window.console.log && window.console.log(a)
	};
	da = function(a) {
		window.console && window.console.error && window.console.error(a)
	};
	ea = function(a) {
		return "undefined" === typeof a
	};
	fa = function(a) {
		return "number" === typeof a
	};
	R = function(a) {
		return "string" === typeof a
	};
	ga = function(a) {
		return 0 < a && 0 === (a - 1 & a)
	};
	ha = function(a) {
		--a;
		for (var d = 1; 32 > d; d <<= 1) a = a | a >> d;
		return a + 1
	};
	ia = function(a) {
		return 0 > a ? -a : a
	};
	ja = function(a, d) {
		return a < d ? a : d
	};
	la = Math.PI;
	T = function(a) {
		return 0 <= a ? a | 0 : (a | 0) - 1
	};
	ma = function(a) {
		var d = a | 0;
		return d === a ? d : d + 1
	};
	na = function(a, d, c, b, m, g, e, A) {
		var B, l, n, u;
		a < c ? (l = a, B = c) : (l = c, B = a);
		m < e ? (u = m, n = e) : (u = e, n = m);
		if (B < u || l > n) return !1;
		d < b ? (l = d, B = b) : (l = b, B = d);
		g < A ? (u = g, n = A) : (u = A, n = g);
		if (B < u || l > n) return !1;
		B = m - a + e - c;
		l = g - d + A - b;
		a = c - a;
		d = b - d;
		m = e - m;
		g = A - g;
		A = ia(d * m - g * a);
		return ia(m * l - g * B) > A ? !1 : ia(a * l - d * B) <= A
	};
	k.prototype.set = function(a, d, c, b) {
		this.left = a;
		this.top = d;
		this.right = c;
		this.bottom = b
	};
	k.prototype.Sf = function(a) {
		this.left = a.left;
		this.top = a.top;
		this.right = a.right;
		this.bottom = a.bottom
	};
	k.prototype.width = function() {
		return this.right - this.left
	};
	k.prototype.height = function() {
		return this.bottom - this.top
	};
	k.prototype.offset = function(a, d) {
		this.left += a;
		this.top += d;
		this.right += a;
		this.bottom += d;
		return this
	};
	k.prototype.normalize = function() {
		var a = 0;
		this.left > this.right && (a = this.left, this.left = this.right, this.right = a);
		this.top > this.bottom && (a = this.top, this.top = this.bottom, this.bottom = a)
	};
	k.prototype.gv = function(a) {
		return !(a.right < this.left || a.bottom < this.top || a.left > this.right || a.top > this.bottom)
	};
	k.prototype.hv = function(a, d, c) {
		return !(a.right + d < this.left || a.bottom + c < this.top || a.left + d > this.right || a.top + c > this.bottom)
	};
	k.prototype.zb = function(a, d) {
		return a >= this.left && a <= this.right && d >= this.top && d <= this.bottom
	};
	k.prototype.jh = function(a) {
		return this.left === a.left && this.top === a.top && this.right === a.right && this.bottom === a.bottom
	};
	ra = k;
	p.prototype.qi = function(a) {
		this.nb = a.left;
		this.ob = a.top;
		this.Vb = a.right;
		this.Wb = a.top;
		this.Kb = a.right;
		this.Lb = a.bottom;
		this.Hb = a.left;
		this.Ib = a.bottom
	};
	p.prototype.Fq = function(a, d) {
		if (0 === d) this.qi(a);
		else {
			var c = Math.sin(d),
				b = Math.cos(d),
				m = a.left * c,
				g = a.top * c,
				e = a.right * c,
				c = a.bottom * c,
				A = a.left * b,
				B = a.top * b,
				l = a.right * b,
				b = a.bottom * b;
			this.nb = A - g;
			this.ob = B + m;
			this.Vb = l - g;
			this.Wb = B + e;
			this.Kb = l - c;
			this.Lb = b + e;
			this.Hb = A - c;
			this.Ib = b + m
		}
	};
	p.prototype.offset = function(a, d) {
		this.nb += a;
		this.ob += d;
		this.Vb += a;
		this.Wb += d;
		this.Kb += a;
		this.Lb += d;
		this.Hb += a;
		this.Ib += d;
		return this
	};
	var z = 0,
		l = 0;
	p.prototype.no = function(a) {
		h(this.nb, this.Vb, this.Kb, this.Hb);
		a.left = z;
		a.right = l;
		h(this.ob, this.Wb, this.Lb, this.Ib);
		a.top = z;
		a.bottom = l
	};
	p.prototype.zb = function(a, d) {
		var c = this.nb,
			b = this.ob,
			m = this.Vb - c,
			g = this.Wb - b,
			e = this.Kb - c,
			A = this.Lb - b,
			B = a - c,
			l = d - b,
			n = m * m + g * g,
			u = m * e + g * A,
			g = m * B + g * l,
			v = e * e + A * A,
			f = e * B + A * l,
			z = 1 / (n * v - u * u),
			m = (v * g - u * f) * z,
			n = (n * f - u * g) * z;
		if (0 <= m && 0 < n && 1 > m + n) return !0;
		m = this.Hb - c;
		g = this.Ib - b;
		n = m * m + g * g;
		u = m * e + g * A;
		g = m * B + g * l;
		z = 1 / (n * v - u * u);
		m = (v * g - u * f) * z;
		n = (n * f - u * g) * z;
		return 0 <= m && 0 < n && 1 > m + n
	};
	p.prototype.re = function(a, d) {
		if (d) switch (a) {
		case 0:
			return this.nb;
		case 1:
			return this.Vb;
		case 2:
			return this.Kb;
		case 3:
			return this.Hb;
		case 4:
			return this.nb;
		default:
			return this.nb
		} else switch (a) {
		case 0:
			return this.ob;
		case 1:
			return this.Wb;
		case 2:
			return this.Lb;
		case 3:
			return this.Ib;
		case 4:
			return this.ob;
		default:
			return this.ob
		}
	};
	p.prototype.Jp = function() {
		return (this.nb + this.Vb + this.Kb + this.Hb) / 4
	};
	p.prototype.Kp = function() {
		return (this.ob + this.Wb + this.Lb + this.Ib) / 4
	};
	p.prototype.Xo = function(a) {
		var d = a.Jp(),
			c = a.Kp();
		if (this.zb(d, c)) return !0;
		d = this.Jp();
		c = this.Kp();
		if (a.zb(d, c)) return !0;
		var b, m, g, e, A, B, l, n;
		for (l = 0; 4 > l; l++) for (n = 0; 4 > n; n++) if (d = this.re(l, !0), c = this.re(l, !1), b = this.re(l + 1, !0), m = this.re(l + 1, !1), g = a.re(n, !0), e = a.re(n, !1), A = a.re(n + 1, !0), B = a.re(n + 1, !1), na(d, c, b, m, g, e, A, B)) return !0;
		return !1
	};
	ta = p;
	ua = function(a, d) {
		for (var c in d) d.hasOwnProperty(c) && (a[c] = d[c]);
		return a
	};
	wa = function(a, d) {
		var c, b;
		d = T(d);
		if (!(0 > d || d >= a.length)) {
			c = d;
			for (b = a.length - 1; c < b; c++) a[c] = a[c + 1];
			xa(a, b)
		}
	};
	xa = function(a, d) {
		a.length = d
	};
	W = function(a) {
		xa(a, 0)
	};
	ya = function(a, d) {
		W(a);
		var c, b;
		c = 0;
		for (b = d.length; c < b; ++c) a[c] = d[c]
	};
	za = function(a, d) {
		a.push.apply(a, d)
	};
	Aa = function(a, d) {
		var c, b;
		c = 0;
		for (b = a.length; c < b; ++c) if (a[c] === d) return c;
		return -1
	};
	Ba = function(a, d) {
		var c = Aa(a, d); - 1 !== c && wa(a, c)
	};
	Ca = function(a, d, c) {
		return a < d ? d : a > c ? c : a
	};
	X = function(a) {
		return a / (180 / la)
	};
	Da = function(a) {
		return 180 / la * a
	};
	Ea = function(a) {
		a %= 360;
		0 > a && (a += 360);
		return a
	};
	Fa = function(a) {
		a %= 2 * la;
		0 > a && (a += 2 * la);
		return a
	};
	Ia = function(a) {
		return Ea(Da(a))
	};
	Ja = function(a) {
		return Fa(X(a))
	};
	Ka = function(a, d, c, b) {
		return Math.atan2(b - d, c - a)
	};
	La = function(a, d) {
		if (a === d) return 0;
		var c = Math.sin(a),
			b = Math.cos(a),
			m = Math.sin(d),
			g = Math.cos(d),
			c = c * m + b * g;
		return 1 <= c ? 0 : -1 >= c ? la : Math.acos(c)
	};
	Na = function(a, d, c) {
		var b = Math.sin(a),
			m = Math.cos(a),
			g = Math.sin(d),
			e = Math.cos(d);
		return Math.acos(b * g + m * e) > c ? 0 < m * g - b * e ? Fa(a + c) : Fa(a - c) : Fa(d)
	};
	Oa = function(a, d) {
		var c = Math.sin(a),
			b = Math.cos(a),
			m = Math.sin(d),
			g = Math.cos(d);
		return 0 >= b * m - c * g
	};
	Pa = function(a, d, c, b, m, g) {
		if (0 === c) return g ? a : d;
		var e = Math.sin(c);
		c = Math.cos(c);
		a -= b;
		d -= m;
		var A = a * e;
		a = a * c - d * e;
		d = d * c + A;
		return g ? a + b : d + m
	};
	Qa = function(a, d, c, b) {
		a = c - a;
		d = b - d;
		return Math.sqrt(a * a + d * d)
	};
	Va = function(a, d) {
		return !a !== !d
	};
	Wa = function(a) {
		for (var d in a) if (a.hasOwnProperty(d)) return !0;
		return !1
	};
	Xa = function(a) {
		for (var d in a) a.hasOwnProperty(d) && delete a[d]
	};
	var w = +new Date;
	Ya = function() {
		if ("undefined" !== typeof window.performance) {
			var a = window.performance;
			if ("undefined" !== typeof a.now) return a.now();
			if ("undefined" !== typeof a.webkitNow) return a.webkitNow();
			if ("undefined" !== typeof a.mozNow) return a.mozNow();
			if ("undefined" !== typeof a.msNow) return a.msNow()
		}
		return Date.now() - w
	};
	var m = !1,
		v = m = !1,
		u = !1;
	"undefined" !== typeof window && (m = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), m = !m && /safari/i.test(navigator.userAgent), v = /(iphone|ipod|ipad)/i.test(navigator.userAgent), u = window.c2ejecta);
	var E = !m && !u && !v && "undefined" !== typeof Set && "undefined" !== typeof Set.prototype.forEach;
	q.prototype.contains = function(a) {
		return this.Vd() ? !1 : E ? this.Dd.has(a) : this.items && this.items.hasOwnProperty(a)
	};
	q.prototype.add = function(a) {
		if (E) this.Dd.has(a) || (this.Dd.add(a), this.te = !1);
		else {
			var d = a.toString(),
				c = this.items;
			c ? c.hasOwnProperty(d) || (c[d] = a, this.Mh++, this.te = !1) : (this.items = {}, this.items[d] = a, this.Mh = 1, this.te = !1)
		}
	};
	q.prototype.remove = function(a) {
		if (!this.Vd()) if (E) this.Dd.has(a) && (this.Dd["delete"](a), this.te = !1);
		else if (this.items) {
			a = a.toString();
			var d = this.items;
			d.hasOwnProperty(a) && (delete d[a], this.Mh--, this.te = !1)
		}
	};
	q.prototype.clear = function() {
		this.Vd() || (E ? this.Dd.clear() : (this.items = null, this.Mh = 0), W(this.Ng), this.te = !0)
	};
	q.prototype.Vd = function() {
		return 0 === this.count()
	};
	q.prototype.count = function() {
		return E ? this.Dd.size : this.Mh
	};
	var D = null,
		L = 0;
	q.prototype.Dw = function() {
		if (!this.te) {
			if (E) W(this.Ng), D = this.Ng, L = 0, this.Dd.forEach(r), D = null, L = 0;
			else {
				var a = this.Ng;
				W(a);
				var d, c = 0,
					b = this.items;
				if (b) for (d in b) b.hasOwnProperty(d) && (a[c++] = b[d])
			}
			this.te = !0
		}
	};
	q.prototype.Se = function() {
		this.Dw();
		return this.Ng
	};
	ba = q;
	new ba;
	Za = function(a, d) {
		E ? $a(a, d.Dd) : ab(a, d.Se())
	};
	$a = function(a, d) {
		var c, b, m, g;
		b = c = 0;
		for (m = a.length; c < m; ++c) g = a[c], d.has(g) || (a[b++] = g);
		xa(a, b)
	};
	ab = function(a, d) {
		var c, b, m, g;
		b = c = 0;
		for (m = a.length; c < m; ++c) g = a[c], -1 === Aa(d, g) && (a[b++] = g);
		xa(a, b)
	};
	t.prototype.add = function(a) {
		this.y = a - this.$g;
		this.Dk = this.W + this.y;
		this.$g = this.Dk - this.W - this.y;
		this.W = this.Dk
	};
	t.prototype.reset = function() {
		this.W = this.Dk = this.y = this.$g = 0
	};
	bb = t;
	cb = function(a) {
		return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
	};
	f.prototype.ri = function(a) {
		this.rq = a;
		this.fd = a.length / 2;
		this.Za.length = a.length;
		this.Vi = this.Wi = -1;
		this.qo = 0
	};
	f.prototype.hg = function() {
		return !this.rq.length
	};
	f.prototype.la = function() {
		for (var a = this.Za, d = a[0], c = d, b = a[1], m = b, g, e, A = 1, B = this.fd; A < B; ++A) e = 2 * A, g = a[e], e = a[e + 1], g < d && (d = g), g > c && (c = g), e < b && (b = e), e > m && (m = e);
		this.Ri = d;
		this.Si = c;
		this.Ti = b;
		this.Qi = m
	};
	f.prototype.qi = function(a, d, c) {
		this.Za.length = 8;
		this.fd = 4;
		var b = this.Za;
		b[0] = a.left - d;
		b[1] = a.top - c;
		b[2] = a.right - d;
		b[3] = a.top - c;
		b[4] = a.right - d;
		b[5] = a.bottom - c;
		b[6] = a.left - d;
		b[7] = a.bottom - c;
		this.Wi = a.right - a.left;
		this.Vi = a.bottom - a.top;
		this.la()
	};
	f.prototype.Gg = function(a, d, c, b, m) {
		this.Za.length = 8;
		this.fd = 4;
		var g = this.Za;
		g[0] = a.nb - d;
		g[1] = a.ob - c;
		g[2] = a.Vb - d;
		g[3] = a.Wb - c;
		g[4] = a.Kb - d;
		g[5] = a.Lb - c;
		g[6] = a.Hb - d;
		g[7] = a.Ib - c;
		this.Wi = b;
		this.Vi = m;
		this.la()
	};
	f.prototype.Eq = function(a) {
		this.fd = a.fd;
		ya(this.Za, a.Za);
		this.Ri = a.Ri;
		this.Ti - a.Ti;
		this.Si = a.Si;
		this.Qi = a.Qi
	};
	f.prototype.Rf = function(a, d, c) {
		if (this.Wi !== a || this.Vi !== d || this.qo !== c) {
			this.Wi = a;
			this.Vi = d;
			this.qo = c;
			var b, m, g, e, A, B = 0,
				l = 1,
				n = this.rq,
				u = this.Za;
			0 !== c && (B = Math.sin(c), l = Math.cos(c));
			c = 0;
			for (g = this.fd; c < g; c++) b = 2 * c, m = b + 1, e = n[b] * a, A = n[m] * d, u[b] = e * l - A * B, u[m] = A * l + e * B;
			this.la()
		}
	};
	f.prototype.zb = function(a, d) {
		var c = this.Za;
		if (a === c[0] && d === c[1]) return !0;
		var b, m, g, e = this.fd,
			A = this.Ri - 110,
			B = this.Ti - 101,
			l = this.Si + 131,
			n = this.Qi + 120,
			u, v, f = 0,
			z = 0;
		for (b = 0; b < e; b++) m = 2 * b, g = (b + 1) % e * 2, u = c[m], m = c[m + 1], v = c[g], g = c[g + 1], na(A, B, a, d, u, m, v, g) && f++, na(l, n, a, d, u, m, v, g) && z++;
		return 1 === f % 2 || 1 === z % 2
	};
	f.prototype.yh = function(a, d, c) {
		var b = a.Za,
			m = this.Za;
		if (this.zb(b[0] + d, b[1] + c) || a.zb(m[0] - d, m[1] - c)) return !0;
		var g, e, A, B, l, n, u, v, f, z, w, h;
		g = 0;
		for (B = this.fd; g < B; g++) for (e = 2 * g, A = (g + 1) % B * 2, v = m[e], e = m[e + 1], f = m[A], z = m[A + 1], A = 0, u = a.fd; A < u; A++) if (l = 2 * A, n = (A + 1) % u * 2, w = b[l] + d, l = b[l + 1] + c, h = b[n] + d, n = b[n + 1] + c, na(v, e, f, z, w, l, h, n)) return !0;
		return !1
	};
	db = f;
	a.prototype.Be = function(a, d, c) {
		var b;
		b = this.cells[a];
		return b ? (b = b[d]) ? b : c ? (b = e(this, a, d), this.cells[a][d] = b) : null : c ? (b = e(this, a, d), this.cells[a] = {}, this.cells[a][d] = b) : null
	};
	a.prototype.Eb = function(a) {
		return T(a / this.gl)
	};
	a.prototype.Fb = function(a) {
		return T(a / this.fl)
	};
	a.prototype.update = function(a, d, c) {
		var b, m, g, e, A;
		if (d) for (b = d.left, m = d.right; b <= m; ++b) for (g = d.top, e = d.bottom; g <= e; ++g) if (!c || !c.zb(b, g)) if (A = this.Be(b, g, !1)) A.remove(a), A.Vd() && (A.eb.clear(), 1E3 > O.length && O.push(A), this.cells[b][g] = null);
		if (c) for (b = c.left, m = c.right; b <= m; ++b) for (g = c.top, e = c.bottom; g <= e; ++g) d && d.zb(b, g) || this.Be(b, g, !0).dm(a)
	};
	a.prototype.pk = function(a, d) {
		var c, b, m, g, e, A;
		c = this.Eb(a.left);
		m = this.Fb(a.top);
		b = this.Eb(a.right);
		for (e = this.Fb(a.bottom); c <= b; ++c) for (g = m; g <= e; ++g)(A = this.Be(c, g, !1)) && A.dump(d)
	};
	eb = a;
	b.prototype.Be = function(a, d, b) {
		var m;
		m = this.cells[a];
		return m ? (m = m[d]) ? m : b ? (m = c(this, a, d), this.cells[a][d] = m) : null : b ? (m = c(this, a, d), this.cells[a] = {}, this.cells[a][d] = m) : null
	};
	b.prototype.Eb = function(a) {
		return T(a / this.gl)
	};
	b.prototype.Fb = function(a) {
		return T(a / this.fl)
	};
	b.prototype.update = function(a, d, c) {
		var b, m, g, e, A;
		if (d) for (b = d.left, m = d.right; b <= m; ++b) for (g = d.top, e = d.bottom; g <= e; ++g) if (!c || !c.zb(b, g)) if (A = this.Be(b, g, !1)) A.remove(a), A.Vd() && (A.reset(), 1E3 > N.length && N.push(A), this.cells[b][g] = null);
		if (c) for (b = c.left, m = c.right; b <= m; ++b) for (g = c.top, e = c.bottom; g <= e; ++g) d && d.zb(b, g) || this.Be(b, g, !0).dm(a)
	};
	b.prototype.pk = function(a, d, c, b, m) {
		var g, e;
		a = this.Eb(a);
		d = this.Fb(d);
		c = this.Eb(c);
		for (g = this.Fb(b); a <= c; ++a) for (b = d; b <= g; ++b)(e = this.Be(a, b, !1)) && e.dump(m)
	};
	b.prototype.wv = function(a) {
		var d, c, b, m, g;
		d = a.left;
		b = a.top;
		c = a.right;
		for (m = a.bottom; d <= c; ++d) for (a = b; a <= m; ++a) if (g = this.Be(d, a, !1)) g.kg = !1
	};
	fb = b;
	var O = [];
	d.prototype.Vd = function() {
		return this.eb.Vd()
	};
	d.prototype.dm = function(a) {
		this.eb.add(a)
	};
	d.prototype.remove = function(a) {
		this.eb.remove(a)
	};
	d.prototype.dump = function(a) {
		za(a, this.eb.Se())
	};
	aa = d;
	var N = [];
	n.prototype.Vd = function() {
		if (!this.eb.length) return !0;
		if (this.eb.length > this.Bd.count()) return !1;
		this.Bl();
		return !0
	};
	n.prototype.dm = function(a) {
		this.Bd.contains(a) ? (this.Bd.remove(a), this.Bd.Vd() && (this.Wg = !1)) : this.eb.length ? (this.eb[this.eb.length - 1].ud() > a.ud() && (this.kg = !1), this.eb.push(a)) : (this.eb.push(a), this.kg = !0)
	};
	n.prototype.remove = function(a) {
		this.Bd.add(a);
		this.Wg = !0;
		30 <= this.Bd.count() && this.Bl()
	};
	n.prototype.Bl = function() {
		this.Wg && (this.Bd.count() === this.eb.length ? this.reset() : (Za(this.eb, this.Bd), this.Bd.clear(), this.Wg = !1))
	};
	n.prototype.Pt = function() {
		this.kg || (this.eb.sort(g), this.kg = !0)
	};
	n.prototype.reset = function() {
		W(this.eb);
		this.kg = !0;
		this.Bd.clear();
		this.Wg = !1
	};
	n.prototype.dump = function(a) {
		this.Bl();
		this.Pt();
		this.eb.length && a.push(this.eb)
	};
	ca = n;
	var F = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
	gb = function(a) {
		return 0 >= a || 11 <= a ? "source-over" : F[a - 1]
	};
	hb = function(a, d, c) {
		if (c) switch (a.xb = c.ONE, a.sb = c.ONE_MINUS_SRC_ALPHA, d) {
		case 1:
			a.xb = c.ONE;
			a.sb = c.ONE;
			break;
		case 3:
			a.xb = c.ONE;
			a.sb = c.ZERO;
			break;
		case 4:
			a.xb = c.ONE_MINUS_DST_ALPHA;
			a.sb = c.ONE;
			break;
		case 5:
			a.xb = c.DST_ALPHA;
			a.sb = c.ZERO;
			break;
		case 6:
			a.xb = c.ZERO;
			a.sb = c.SRC_ALPHA;
			break;
		case 7:
			a.xb = c.ONE_MINUS_DST_ALPHA;
			a.sb = c.ZERO;
			break;
		case 8:
			a.xb = c.ZERO;
			a.sb = c.ONE_MINUS_SRC_ALPHA;
			break;
		case 9:
			a.xb = c.DST_ALPHA;
			a.sb = c.ONE_MINUS_SRC_ALPHA;
			break;
		case 10:
			a.xb = c.ONE_MINUS_DST_ALPHA, a.sb = c.SRC_ALPHA
		}
	};
	ib = function(a) {
		return Math.round(1E6 * a) / 1E6
	};
	jb = function(a, d) {
		return "string" !== typeof a || "string" !== typeof d || a.length !== d.length ? !1 : a === d ? !0 : a.toLowerCase() === d.toLowerCase()
	};
	kb = function(a) {
		a = a.target;
		return !a || a === document || a === window || document && document.body && a === document.body || jb(a.tagName, "canvas") ? !0 : !1
	}
})();
var dc = "undefined" !== typeof Float32Array ? Float32Array : Array;

function ec(k) {
	var p = new dc(3);
	k && (p[0] = k[0], p[1] = k[1], p[2] = k[2]);
	return p
}

function fc(k) {
	var p = new dc(16);
	k && (p[0] = k[0], p[1] = k[1], p[2] = k[2], p[3] = k[3], p[4] = k[4], p[5] = k[5], p[6] = k[6], p[7] = k[7], p[8] = k[8], p[9] = k[9], p[10] = k[10], p[11] = k[11], p[12] = k[12], p[13] = k[13], p[14] = k[14], p[15] = k[15]);
	return p
}
function gc(k, p) {
	p[0] = k[0];
	p[1] = k[1];
	p[2] = k[2];
	p[3] = k[3];
	p[4] = k[4];
	p[5] = k[5];
	p[6] = k[6];
	p[7] = k[7];
	p[8] = k[8];
	p[9] = k[9];
	p[10] = k[10];
	p[11] = k[11];
	p[12] = k[12];
	p[13] = k[13];
	p[14] = k[14];
	p[15] = k[15]
}

function hc(k, p) {
	var h = p[0],
		q = p[1];
	p = p[2];
	k[0] *= h;
	k[1] *= h;
	k[2] *= h;
	k[3] *= h;
	k[4] *= q;
	k[5] *= q;
	k[6] *= q;
	k[7] *= q;
	k[8] *= p;
	k[9] *= p;
	k[10] *= p;
	k[11] *= p
}

function ic(k, p, h, q) {
	q || (q = fc());
	var r, t, f, a, b, e, d, c, n = k[0],
		g = k[1];
	k = k[2];
	t = h[0];
	f = h[1];
	r = h[2];
	h = p[1];
	e = p[2];
	n === p[0] && g === h && k === e ? (k = q, k[0] = 1, k[1] = 0, k[2] = 0, k[3] = 0, k[4] = 0, k[5] = 1, k[6] = 0, k[7] = 0, k[8] = 0, k[9] = 0, k[10] = 1, k[11] = 0, k[12] = 0, k[13] = 0, k[14] = 0, k[15] = 1) : (h = n - p[0], e = g - p[1], d = k - p[2], c = 1 / Math.sqrt(h * h + e * e + d * d), h *= c, e *= c, d *= c, p = f * d - r * e, r = r * h - t * d, t = t * e - f * h, (c = Math.sqrt(p * p + r * r + t * t)) ? (c = 1 / c, p *= c, r *= c, t *= c) : t = r = p = 0, f = e * t - d * r, a = d * p - h * t, b = h * r - e * p, (c = Math.sqrt(f * f + a * a + b * b)) ? (c = 1 / c, f *= c, a *= c, b *= c) : b = a = f = 0, q[0] = p, q[1] = f, q[2] = h, q[3] = 0, q[4] = r, q[5] = a, q[6] = e, q[7] = 0, q[8] = t, q[9] = b, q[10] = d, q[11] = 0, q[12] = -(p * n + r * g + t * k), q[13] = -(f * n + a * g + b * k), q[14] = -(h * n + e * g + d * k), q[15] = 1)
}(function() {
	function k(a, b, e) {
		this.Wd = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
		this.height = this.width = 0;
		this.qa = !! e;
		this.Fj = this.Ch = !1;
		this.nl = 0;
		this.Rk = 1;
		this.Mn = 1E3;
		this.Lw = (this.Mn - this.Rk) / 32768;
		this.dl = ec([0, 0, 100]);
		this.sp = ec([0, 0, 0]);
		this.fr = ec([0, 1, 0]);
		this.Fi = ec([1, 1, 1]);
		this.yo = !0;
		this.Yj = fc();
		this.uc = fc();
		this.pm = fc();
		this.ml = fc();
		this.p = a;
		this.To()
	}
	function p(a, b, e) {
		this.p = a;
		this.si = b;
		this.name = e;
		this.Ic = a.getAttribLocation(b, "aPos");
		this.Le = a.getAttribLocation(b, "aTex");
		this.qp = a.getUniformLocation(b, "matP");
		this.Uj = a.getUniformLocation(b, "matMV");
		this.rg = a.getUniformLocation(b, "opacity");
		this.xm = a.getUniformLocation(b, "colorFill");
		this.rp = a.getUniformLocation(b, "samplerFront");
		this.Wh = a.getUniformLocation(b, "samplerBack");
		this.wf = a.getUniformLocation(b, "destStart");
		this.vf = a.getUniformLocation(b, "destEnd");
		this.Yh = a.getUniformLocation(b, "seconds");
		this.zm = a.getUniformLocation(b, "pixelWidth");
		this.ym = a.getUniformLocation(b, "pixelHeight");
		this.Vh = a.getUniformLocation(b, "layerScale");
		this.Uh = a.getUniformLocation(b, "layerAngle");
		this.Zh = a.getUniformLocation(b, "viewOrigin");
		this.Xh = a.getUniformLocation(b, "scrollPos");
		this.$u = !! (this.zm || this.ym || this.Yh || this.Wh || this.wf || this.vf || this.Vh || this.Uh || this.Zh || this.Xh);
		this.Ap = this.Bp = -999;
		this.Xj = 1;
		this.wp = this.vp = 0;
		this.yp = this.up = this.tp = 1;
		this.Ep = this.Dp = this.Cp = this.Gp = this.Fp = this.xp = 0;
		this.om = [];
		this.zp = fc();
		this.rg && a.uniform1f(this.rg, 1);
		this.xm && a.uniform4f(this.xm, 1, 1, 1, 1);
		this.rp && a.uniform1i(this.rp, 0);
		this.Wh && a.uniform1i(this.Wh, 1);
		this.wf && a.uniform2f(this.wf, 0, 0);
		this.vf && a.uniform2f(this.vf, 1, 1);
		this.Vh && a.uniform1f(this.Vh, 1);
		this.Uh && a.uniform1f(this.Uh, 0);
		this.Zh && a.uniform2f(this.Zh, 0, 0);
		this.Xh && a.uniform2f(this.Xh, 0, 0);
		this.Yh && a.uniform1f(this.Yh, 0);
		this.lf = !1
	}
	function h(a, b) {
		return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15]
	}
	function q(a, b) {
		this.type = a;
		this.q = b;
		this.p = b.p;
		this.vd = this.Cb = this.aq = 0;
		this.M = this.Rc = null;
		this.Gq = []
	}
	var r = fc();
	k.prototype.To = function() {
		var a = this.p,
			b;
		this.kp = 1;
		this.sf = this.He = null;
		this.bj = 1;
		a.clearColor(0, 0, 0, 0);
		a.clear(a.COLOR_BUFFER_BIT);
		a.enable(a.BLEND);
		a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA);
		a.disable(a.CULL_FACE);
		a.disable(a.STENCIL_TEST);
		a.disable(a.DITHER);
		this.qa ? (a.enable(a.DEPTH_TEST), a.depthFunc(a.LEQUAL)) : a.disable(a.DEPTH_TEST);
		this.lp = a.ONE;
		this.jp = a.ONE_MINUS_SRC_ALPHA;
		this.Pk = new Float32Array(8E3 * (this.qa ? 3 : 2));
		this.Fk = new Float32Array(16E3);
		this.mq = new Float32Array(32E3);
		this.Tm = a.createBuffer();
		a.bindBuffer(a.ARRAY_BUFFER, this.Tm);
		a.bufferData(a.ARRAY_BUFFER, this.mq.byteLength, a.DYNAMIC_DRAW);
		this.Ei = Array(4);
		this.yi = Array(4);
		for (b = 0; 4 > b; b++) this.Ei[b] = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.Ei[b]), a.bufferData(a.ARRAY_BUFFER, this.Pk.byteLength, a.DYNAMIC_DRAW), this.yi[b] = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.yi[b]), a.bufferData(a.ARRAY_BUFFER, this.Fk.byteLength, a.DYNAMIC_DRAW);
		this.Md = 0;
		this.cv = a.createBuffer();
		a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.cv);
		for (var e = new Uint16Array(12E3), d = b = 0; 12E3 > b;) e[b++] = d, e[b++] = d + 1, e[b++] = d + 2, e[b++] = d, e[b++] = d + 2, e[b++] = d + 3, d += 4;
		a.bufferData(a.ELEMENT_ARRAY_BUFFER, e, a.STATIC_DRAW);
		this.Um = this.Jg = this.je = 0;
		this.Ha = [];
		b = this.qa ? "attribute highp vec3 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, aPos.z, 1.0);\n\tvTex = aTex;\n}" : "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}";
		e = this.eh({
			src: "varying mediump vec2 vTex;\nuniform lowp float opacity;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, vTex);\n\tgl_FragColor *= opacity;\n}"
		}, b, "<default>");
		this.Ha.push(e);
		e = this.eh({
			src: "uniform mediump sampler2D samplerFront;\nvarying lowp float opacity;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);\n\tgl_FragColor *= opacity;\n}"
		}, "attribute vec4 aPos;\nvarying float opacity;\nuniform mat4 matP;\nuniform mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tgl_PointSize = aPos.z;\n\topacity = aPos.w;\n}", "<point>");
		this.Ha.push(e);
		e = this.eh({
			src: "varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tif (texture2D(samplerFront, vTex).a < 1.0)\n\t\tdiscard;\n}"
		}, b, "<earlyz>");
		this.Ha.push(e);
		e = this.eh({
			src: "uniform lowp vec4 colorFill;\nvoid main(void) {\n\tgl_FragColor = colorFill;\n}"
		}, b, "<fill>");
		this.Ha.push(e);
		for (var c in jc) jc.hasOwnProperty(c) && this.Ha.push(this.eh(jc[c], b, c));
		a.activeTexture(a.TEXTURE0);
		a.bindTexture(a.TEXTURE_2D, null);
		this.se = [];
		this.Kd = 0;
		this.tb = !1;
		this.wo = this.Oh = -1;
		this.Tf = null;
		this.zl = a.createFramebuffer();
		this.gj = this.qk = null;
		this.lo = !1;
		this.qa && (this.gj = a.createRenderbuffer());
		this.Re = ec([0, 0, 0]);
		this.Hp = a.getParameter(a.ALIASED_POINT_SIZE_RANGE)[1];
		2048 < this.Hp && (this.Hp = 2048);
		this.Sb(0)
	};
	p.prototype.Gn = function(a) {
		h(this.zp, a) || (gc(a, this.zp), this.p.uniformMatrix4fv(this.Uj, !1, a))
	};
	k.prototype.eh = function(a, b, e) {
		var d = this.p,
			c = d.createShader(d.FRAGMENT_SHADER);
		d.shaderSource(c, a.src);
		d.compileShader(c);
		if (!d.getShaderParameter(c, d.COMPILE_STATUS)) return d.deleteShader(c), null;
		var n = d.createShader(d.VERTEX_SHADER);
		d.shaderSource(n, b);
		d.compileShader(n);
		if (!d.getShaderParameter(n, d.COMPILE_STATUS)) return d.deleteShader(c), d.deleteShader(n), null;
		b = d.createProgram();
		d.attachShader(b, c);
		d.attachShader(b, n);
		d.linkProgram(b);
		if (!d.getProgramParameter(b, d.LINK_STATUS)) return d.deleteShader(c), d.deleteShader(n), d.deleteProgram(b), null;
		d.useProgram(b);
		d.deleteShader(c);
		d.deleteShader(n);
		e = new p(d, b, e);
		e.wl = a.wl || 0;
		e.xl = a.xl || 0;
		e.vo = !! a.vo;
		e.dd = !! a.dd;
		e.jo = !! a.jo;
		e.N = a.N || [];
		a = 0;
		for (c = e.N.length; a < c; a++) e.N[a][1] = d.getUniformLocation(b, e.N[a][0]), e.om.push(0), d.uniform1f(e.N[a][1], 0);
		return e
	};
	k.prototype.Ql = function(a) {
		var b, e;
		b = 0;
		for (e = this.Ha.length; b < e; b++) if (this.Ha[b].name === a) return b;
		return -1
	};
	k.prototype.qq = function(a, b, e) {
		var d = this.uc,
			c = this.Yj,
			n = [0, 0, 0, 0, 0, 0, 0, 0];
		n[0] = d[0] * a + d[4] * b + d[12];
		n[1] = d[1] * a + d[5] * b + d[13];
		n[2] = d[2] * a + d[6] * b + d[14];
		n[3] = d[3] * a + d[7] * b + d[15];
		n[4] = c[0] * n[0] + c[4] * n[1] + c[8] * n[2] + c[12] * n[3];
		n[5] = c[1] * n[0] + c[5] * n[1] + c[9] * n[2] + c[13] * n[3];
		n[6] = c[2] * n[0] + c[6] * n[1] + c[10] * n[2] + c[14] * n[3];
		n[7] = -n[2];
		0 !== n[7] && (n[7] = 1 / n[7], n[4] *= n[7], n[5] *= n[7], n[6] *= n[7], e[0] = (.5 * n[4] + .5) * this.width, e[1] = (.5 * n[5] + .5) * this.height)
	};
	k.prototype.Ef = function(a, b, e) {
		if (this.width !== a || this.height !== b || e) {
			this.ze();
			e = this.p;
			this.width = a;
			this.height = b;
			e.viewport(0, 0, a, b);
			ic(this.dl, this.sp, this.fr, this.uc);
			if (this.qa) {
				var d = -a / 2;
				a = a / 2;
				var c = b / 2;
				b = -b / 2;
				var n = this.Rk,
					g = this.Mn,
					f = this.Yj;
				f || (f = fc());
				var l = a - d,
					w = b - c,
					m = g - n;
				f[0] = 2 / l;
				f[1] = 0;
				f[2] = 0;
				f[3] = 0;
				f[4] = 0;
				f[5] = 2 / w;
				f[6] = 0;
				f[7] = 0;
				f[8] = 0;
				f[9] = 0;
				f[10] = -2 / m;
				f[11] = 0;
				f[12] = -(d + a) / l;
				f[13] = -(b + c) / w;
				f[14] = -(g + n) / m;
				f[15] = 1;
				this.Fi[0] = 1;
				this.Fi[1] = 1
			} else b = a / b, d = this.Rk, a = this.Mn, f = this.Yj, g = d * Math.tan(45 * Math.PI / 360), b *= g, c = -b, n = -g, f || (f = fc()), l = b - c, w = g - n, m = a - d, f[0] = 2 * d / l, f[1] = 0, f[2] = 0, f[3] = 0, f[4] = 0, f[5] = 2 * d / w, f[6] = 0, f[7] = 0, f[8] = (b + c) / l, f[9] = (g + n) / w, f[10] = -(a + d) / m, f[11] = -1, f[12] = 0, f[13] = 0, f[14] = -(a * d * 2) / m, f[15] = 0, d = [0, 0], a = [0, 0], this.qq(0, 0, d), this.qq(1, 1, a), this.Fi[0] = 1 / (a[0] - d[0]), this.Fi[1] = -1 / (a[1] - d[1]);
			d = 0;
			for (a = this.Ha.length; d < a; d++) c = this.Ha[d], c.lf = !1, c.qp && (e.useProgram(c.si), e.uniformMatrix4fv(c.qp, !1, this.Yj));
			e.useProgram(this.Ha[this.Oh].si);
			e.bindTexture(e.TEXTURE_2D, null);
			e.activeTexture(e.TEXTURE1);
			e.bindTexture(e.TEXTURE_2D, null);
			e.activeTexture(e.TEXTURE0);
			this.sf = this.He = null;
			this.gj && (e.bindFramebuffer(e.FRAMEBUFFER, this.zl), e.bindRenderbuffer(e.RENDERBUFFER, this.gj), e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, this.width, this.height), this.lo || (e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, this.gj), this.lo = !0), e.bindRenderbuffer(e.RENDERBUFFER, null), e.bindFramebuffer(e.FRAMEBUFFER, null), this.qk = null)
		}
	};
	k.prototype.Oc = function() {
		ic(this.dl, this.sp, this.fr, this.uc);
		hc(this.uc, this.Fi)
	};
	k.prototype.translate = function(a, b) {
		if (0 !== a || 0 !== b) {
			this.Re[0] = a;
			this.Re[1] = b;
			this.Re[2] = 0;
			var e = this.uc,
				d = this.Re,
				c = d[0],
				n = d[1],
				d = d[2];
			e[12] = e[0] * c + e[4] * n + e[8] * d + e[12];
			e[13] = e[1] * c + e[5] * n + e[9] * d + e[13];
			e[14] = e[2] * c + e[6] * n + e[10] * d + e[14];
			e[15] = e[3] * c + e[7] * n + e[11] * d + e[15]
		}
	};
	k.prototype.scale = function(a, b) {
		if (1 !== a || 1 !== b) this.Re[0] = a, this.Re[1] = b, this.Re[2] = 1, hc(this.uc, this.Re)
	};
	k.prototype.sk = function(a) {
		if (0 !== a) {
			var b = this.uc,
				e, d = Math.sin(a);
			a = Math.cos(a);
			var c = b[0],
				n = b[1],
				g = b[2],
				f = b[3],
				l = b[4],
				w = b[5],
				m = b[6],
				v = b[7];
			e ? b !== e && (e[8] = b[8], e[9] = b[9], e[10] = b[10], e[11] = b[11], e[12] = b[12], e[13] = b[13], e[14] = b[14], e[15] = b[15]) : e = b;
			e[0] = c * a + l * d;
			e[1] = n * a + w * d;
			e[2] = g * a + m * d;
			e[3] = f * a + v * d;
			e[4] = c * -d + l * a;
			e[5] = n * -d + w * a;
			e[6] = g * -d + m * a;
			e[7] = f * -d + v * a
		}
	};
	k.prototype.yc = function() {
		if (!h(this.pm, this.uc)) {
			var a = this.jc();
			a.type = 5;
			a.M ? gc(this.uc, a.M) : a.M = fc(this.uc);
			gc(this.uc, this.pm);
			this.tb = !1
		}
	};
	k.prototype.wk = function(a) {
		this.qa && (32760 < a && (a = 32760), this.nl = this.dl[2] - this.Rk - a * this.Lw)
	};
	q.prototype.zt = function() {
		var a = this.p,
			b = this.q;
		0 !== this.Cb ? (a.depthMask(!0), a.colorMask(!1, !1, !1, !1), a.disable(a.BLEND), a.bindFramebuffer(a.FRAMEBUFFER, b.zl), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, null, 0), a.clear(a.DEPTH_BUFFER_BIT), a.bindFramebuffer(a.FRAMEBUFFER, null), b.Fj = !0) : (a.depthMask(!1), a.colorMask(!0, !0, !0, !0), a.enable(a.BLEND), b.Fj = !1)
	};
	q.prototype.Dt = function() {
		this.p.bindTexture(this.p.TEXTURE_2D, this.Rc)
	};
	q.prototype.Et = function() {
		var a = this.p;
		a.activeTexture(a.TEXTURE1);
		a.bindTexture(a.TEXTURE_2D, this.Rc);
		a.activeTexture(a.TEXTURE0)
	};
	q.prototype.At = function() {
		var a = this.aq,
			b = this.q;
		b.bj = a;
		b = b.Tf;
		b.rg && b.Xj !== a && (b.Xj = a, this.p.uniform1f(b.rg, a))
	};
	q.prototype.tt = function() {
		this.p.drawElements(this.p.TRIANGLES, this.vd, this.p.UNSIGNED_SHORT, this.Cb)
	};
	q.prototype.wt = function() {
		this.p.blendFunc(this.Cb, this.vd)
	};
	q.prototype.Ft = function() {
		var a, b, e, d = this.q.Ha,
			c = this.q.wo;
		a = 0;
		for (b = d.length; a < b; a++) e = d[a], a === c && e.Uj ? (e.Gn(this.M), e.lf = !0) : e.lf = !1;
		gc(this.M, this.q.ml)
	};
	q.prototype.ut = function() {
		var a = this.p,
			b = this.q;
		this.Rc ? (b.sf === this.Rc && (a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, null), b.sf = null, a.activeTexture(a.TEXTURE0)), a.bindFramebuffer(a.FRAMEBUFFER, b.zl), b.Fj || a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this.Rc, 0)) : (b.qa || a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, null, 0), a.bindFramebuffer(a.FRAMEBUFFER, null))
	};
	q.prototype.pt = function() {
		var a = this.p,
			b = this.Cb;
		0 === b ? (a.clearColor(this.M[0], this.M[1], this.M[2], this.M[3]), a.clear(a.COLOR_BUFFER_BIT)) : 1 === b ? (a.enable(a.SCISSOR_TEST), a.scissor(this.M[0], this.M[1], this.M[2], this.M[3]), a.clearColor(0, 0, 0, 0), a.clear(a.COLOR_BUFFER_BIT), a.disable(a.SCISSOR_TEST)) : a.clear(a.DEPTH_BUFFER_BIT)
	};
	q.prototype.yt = function() {
		var a = this.p;
		0 !== this.Cb ? a.enable(a.DEPTH_TEST) : a.disable(a.DEPTH_TEST)
	};
	q.prototype.qt = function() {
		var a = this.p,
			b = this.q;
		b.qa && a.disable(a.DEPTH_TEST);
		var e = b.Ha[1];
		a.useProgram(e.si);
		!e.lf && e.Uj && (e.Gn(b.ml), e.lf = !0);
		a.enableVertexAttribArray(e.Ic);
		a.bindBuffer(a.ARRAY_BUFFER, b.Tm);
		a.vertexAttribPointer(e.Ic, 4, a.FLOAT, !1, 0, 0);
		a.drawArrays(a.POINTS, this.Cb / 4, this.vd);
		e = b.Tf;
		a.useProgram(e.si);
		0 <= e.Ic && (a.enableVertexAttribArray(e.Ic), a.bindBuffer(a.ARRAY_BUFFER, b.Ei[b.Md]), a.vertexAttribPointer(e.Ic, b.qa ? 3 : 2, a.FLOAT, !1, 0, 0));
		0 <= e.Le && (a.enableVertexAttribArray(e.Le), a.bindBuffer(a.ARRAY_BUFFER, b.yi[b.Md]), a.vertexAttribPointer(e.Le, 2, a.FLOAT, !1, 0, 0));
		b.qa && a.enable(a.DEPTH_TEST)
	};
	q.prototype.Bt = function() {
		var a = this.p,
			b = this.q,
			e = b.Ha[this.Cb];
		b.wo = this.Cb;
		b.Tf = e;
		a.useProgram(e.si);
		!e.lf && e.Uj && (e.Gn(b.ml), e.lf = !0);
		e.rg && e.Xj !== b.bj && (e.Xj = b.bj, a.uniform1f(e.rg, b.bj));
		0 <= e.Ic && (a.enableVertexAttribArray(e.Ic), a.bindBuffer(a.ARRAY_BUFFER, b.Ei[b.Md]), a.vertexAttribPointer(e.Ic, b.qa ? 3 : 2, a.FLOAT, !1, 0, 0));
		0 <= e.Le && (a.enableVertexAttribArray(e.Le), a.bindBuffer(a.ARRAY_BUFFER, b.yi[b.Md]), a.vertexAttribPointer(e.Le, 2, a.FLOAT, !1, 0, 0))
	};
	q.prototype.xt = function() {
		var a = this.M;
		this.p.uniform4f(this.q.Tf.xm, a[0], a[1], a[2], a[3])
	};
	q.prototype.Ct = function() {
		var a, b, e = this.q.Tf,
			d = this.p;
		a = this.M;
		e.Wh && this.q.sf !== this.Rc && (d.activeTexture(d.TEXTURE1), d.bindTexture(d.TEXTURE_2D, this.Rc), this.q.sf = this.Rc, d.activeTexture(d.TEXTURE0));
		var c = a[0];
		e.zm && c !== e.Bp && (e.Bp = c, d.uniform1f(e.zm, c));
		c = a[1];
		e.ym && c !== e.Ap && (e.Ap = c, d.uniform1f(e.ym, c));
		c = a[2];
		b = a[3];
		!e.wf || c === e.vp && b === e.wp || (e.vp = c, e.wp = b, d.uniform2f(e.wf, c, b));
		c = a[4];
		b = a[5];
		!e.vf || c === e.tp && b === e.up || (e.tp = c, e.up = b, d.uniform2f(e.vf, c, b));
		c = a[6];
		e.Vh && c !== e.yp && (e.yp = c, d.uniform1f(e.Vh, c));
		c = a[7];
		e.Uh && c !== e.xp && (e.xp = c, d.uniform1f(e.Uh, c));
		c = a[8];
		b = a[9];
		!e.Zh || c === e.Fp && b === e.Gp || (e.Fp = c, e.Gp = b, d.uniform2f(e.Zh, c, b));
		c = a[10];
		b = a[11];
		!e.Xh || c === e.Cp && b === e.Dp || (e.Cp = c, e.Dp = b, d.uniform2f(e.Xh, c, b));
		c = a[12];
		e.Yh && c !== e.Ep && (e.Ep = c, d.uniform1f(e.Yh, c));
		if (e.N.length) for (a = 0, b = e.N.length; a < b; a++) c = this.Gq[a], c !== e.om[a] && (e.om[a] = c, d.uniform1f(e.N[a][1], c))
	};
	k.prototype.jc = function() {
		this.Kd === this.se.length && this.se.push(new q(0, this));
		return this.se[this.Kd++]
	};
	k.prototype.ze = function() {
		if (0 !== this.Kd && !this.p.isContextLost()) {
			var a = this.p;
			0 < this.Um && (a.bindBuffer(a.ARRAY_BUFFER, this.Tm), a.bufferSubData(a.ARRAY_BUFFER, 0, this.mq.subarray(0, this.Um)), b && 0 <= b.Ic && "<point>" === b.name && a.vertexAttribPointer(b.Ic, 4, a.FLOAT, !1, 0, 0));
			if (0 < this.je) {
				var b = this.Tf;
				a.bindBuffer(a.ARRAY_BUFFER, this.Ei[this.Md]);
				a.bufferSubData(a.ARRAY_BUFFER, 0, this.Pk.subarray(0, this.je));
				b && 0 <= b.Ic && "<point>" !== b.name && a.vertexAttribPointer(b.Ic, this.qa ? 3 : 2, a.FLOAT, !1, 0, 0);
				a.bindBuffer(a.ARRAY_BUFFER, this.yi[this.Md]);
				a.bufferSubData(a.ARRAY_BUFFER, 0, this.Fk.subarray(0, this.Jg));
				b && 0 <= b.Le && "<point>" !== b.name && a.vertexAttribPointer(b.Le, 2, a.FLOAT, !1, 0, 0)
			}
			for (var e, a = 0, b = this.Kd; a < b; a++) switch (e = this.se[a], e.type) {
			case 1:
				e.tt();
				break;
			case 2:
				e.Dt();
				break;
			case 3:
				e.At();
				break;
			case 4:
				e.wt();
				break;
			case 5:
				e.Ft();
				break;
			case 6:
				e.ut();
				break;
			case 7:
				e.pt();
				break;
			case 8:
				e.qt();
				break;
			case 9:
				e.Bt();
				break;
			case 10:
				e.Ct();
				break;
			case 11:
				e.Et();
				break;
			case 12:
				e.xt();
				break;
			case 13:
				e.yt();
				break;
			case 14:
				e.zt()
			}
			this.Um = this.Jg = this.je = this.Kd = 0;
			this.Fj = this.tb = !1;
			this.Md++;
			4 <= this.Md && (this.Md = 0)
		}
	};
	k.prototype.Eg = function(a) {
		if (a !== this.kp && !this.Ch) {
			var b = this.jc();
			b.type = 3;
			this.kp = b.aq = a;
			this.tb = !1
		}
	};
	k.prototype.xc = function(a) {
		if (a !== this.He) {
			var b = this.jc();
			b.type = 2;
			this.He = b.Rc = a;
			this.tb = !1
		}
	};
	k.prototype.Oe = function(a, b) {
		if ((a !== this.lp || b !== this.jp) && !this.Ch) {
			var e = this.jc();
			e.type = 4;
			e.Cb = a;
			e.vd = b;
			this.lp = a;
			this.jp = b;
			this.tb = !1
		}
	};
	k.prototype.xq = function() {
		this.Oe(this.p.ONE, this.p.ONE_MINUS_SRC_ALPHA)
	};
	k.prototype.ji = function(a, b, e, d, c, n, g, f) {
		15992 <= this.je && this.ze();
		var l = this.je,
			w = this.Jg,
			m = this.Pk,
			v = this.Fk,
			u = this.nl;
		if (this.tb) this.se[this.Kd - 1].vd += 6;
		else {
			var h = this.jc();
			h.type = 1;
			h.Cb = this.qa ? l : l / 2 * 3;
			h.vd = 6;
			this.tb = !0
		}
		this.qa ? (m[l++] = a, m[l++] = b, m[l++] = u, m[l++] = e, m[l++] = d, m[l++] = u, m[l++] = c, m[l++] = n, m[l++] = u, m[l++] = g, m[l++] = f, m[l++] = u) : (m[l++] = a, m[l++] = b, m[l++] = e, m[l++] = d, m[l++] = c, m[l++] = n, m[l++] = g, m[l++] = f);
		v[w++] = 0;
		v[w++] = 0;
		v[w++] = 1;
		v[w++] = 0;
		v[w++] = 1;
		v[w++] = 1;
		v[w++] = 0;
		v[w++] = 1;
		this.je = l;
		this.Jg = w
	};
	k.prototype.Ne = function(a, b, e, d, c, n, g, f, l) {
		15992 <= this.je && this.ze();
		var w = this.je,
			m = this.Jg,
			v = this.Pk,
			u = this.Fk,
			h = this.nl;
		if (this.tb) this.se[this.Kd - 1].vd += 6;
		else {
			var D = this.jc();
			D.type = 1;
			D.Cb = this.qa ? w : w / 2 * 3;
			D.vd = 6;
			this.tb = !0
		}
		var D = l.left,
			k = l.top,
			q = l.right;
		l = l.bottom;
		this.qa ? (v[w++] = a, v[w++] = b, v[w++] = h, v[w++] = e, v[w++] = d, v[w++] = h, v[w++] = c, v[w++] = n, v[w++] = h, v[w++] = g, v[w++] = f, v[w++] = h) : (v[w++] = a, v[w++] = b, v[w++] = e, v[w++] = d, v[w++] = c, v[w++] = n, v[w++] = g, v[w++] = f);
		u[m++] = D;
		u[m++] = k;
		u[m++] = q;
		u[m++] = k;
		u[m++] = q;
		u[m++] = l;
		u[m++] = D;
		u[m++] = l;
		this.je = w;
		this.Jg = m
	};
	k.prototype.Sb = function(a) {
		if (this.Oh !== a) {
			if (!this.Ha[a]) {
				if (0 === this.Oh) return;
				a = 0
			}
			var b = this.jc();
			b.type = 9;
			this.Oh = b.Cb = a;
			this.tb = !1
		}
	};
	k.prototype.fi = function(a) {
		a = this.Ha[a];
		return !(!a.wf && !a.vf)
	};
	k.prototype.Xm = function(a) {
		a = this.Ha[a];
		return !!(a.wf || a.vf || a.vo)
	};
	k.prototype.Wm = function(a) {
		return this.Ha[a].dd
	};
	k.prototype.Vv = function(a) {
		a = this.Ha[a];
		return 0 !== a.wl || 0 !== a.xl
	};
	k.prototype.Hu = function(a) {
		return this.Ha[a].wl
	};
	k.prototype.Iu = function(a) {
		return this.Ha[a].xl
	};
	k.prototype.Ju = function(a, b) {
		return this.Ha[a].N[b][2]
	};
	k.prototype.mk = function(a) {
		return this.Ha[a].jo
	};
	k.prototype.Fg = function(a, b, e, d, c, n, g, f, l, h, m, v, u, k, D) {
		var q = this.Ha[this.Oh],
			p, r;
		if (q.$u || D.length) {
			p = this.jc();
			p.type = 10;
			p.M ? gc(this.uc, p.M) : p.M = fc();
			r = p.M;
			r[0] = b;
			r[1] = e;
			r[2] = d;
			r[3] = c;
			r[4] = n;
			r[5] = g;
			r[6] = f;
			r[7] = l;
			r[8] = h;
			r[9] = m;
			r[10] = v;
			r[11] = u;
			r[12] = k;
			q.Wh ? p.Rc = a : p.Rc = null;
			if (D.length) for (e = p.Gq, e.length = D.length, a = 0, b = D.length; a < b; a++) e[a] = D[a];
			this.tb = !1
		}
	};
	k.prototype.clear = function(a, b, e, d) {
		var c = this.jc();
		c.type = 7;
		c.Cb = 0;
		c.M || (c.M = fc());
		c.M[0] = a;
		c.M[1] = b;
		c.M[2] = e;
		c.M[3] = d;
		this.tb = !1
	};
	k.prototype.clearRect = function(a, b, e, d) {
		if (!(0 > e || 0 > d)) {
			var c = this.jc();
			c.type = 7;
			c.Cb = 1;
			c.M || (c.M = fc());
			c.M[0] = a;
			c.M[1] = b;
			c.M[2] = e;
			c.M[3] = d;
			this.tb = !1
		}
	};
	k.prototype.Aq = function(a) {
		if (this.qa && (a = !! a, this.Ch !== a)) {
			var b = this.jc();
			b.type = 14;
			b.Cb = a ? 1 : 0;
			this.tb = !1;
			this.Ch = a;
			this.qk = null;
			this.Ch ? this.Sb(2) : this.Sb(0)
		}
	};
	k.prototype.zq = function(a) {
		if (this.qa) {
			var b = this.jc();
			b.type = 13;
			b.Cb = a ? 1 : 0;
			this.tb = !1
		}
	};
	k.prototype.Eo = function() {
		gc(this.pm, r);
		this.Oc();
		this.yc();
		var a = this.width / 2,
			b = this.height / 2;
		this.ji(-a, b, a, b, a, -b, -a, -b);
		gc(r, this.uc);
		this.yc()
	};
	k.prototype.yq = function(a, b, e) {
		this.Sb(3);
		var d = this.jc();
		d.type = 12;
		d.M || (d.M = fc());
		d.M[0] = a;
		d.M[1] = b;
		d.M[2] = e;
		d.M[3] = 1;
		this.tb = !1
	};
	k.prototype.rw = function() {
		this.Sb(0)
	};
	k.prototype.aw = function() {
		this.Sb(2)
	};
	k.prototype.Uv = function() {
		this.ze();
		this.p.flush()
	};
	var t = [],
		f = {};
	k.prototype.bt = function() {
		W(t);
		f = {}
	};
	k.prototype.pp = function(a, b, e) {
		var d;
		d = !1;
		b = !! b;
		var c = a.src + "," + d + "," + b + (d ? ",undefined" : ""),
			n = null;
		if ("undefined" !== typeof a.src && f.hasOwnProperty(c)) return n = f[c], n.Ui++, n;
		this.ze();
		var g = this.p,
			z = ga(a.width) && ga(a.height),
			n = g.createTexture();
		g.bindTexture(g.TEXTURE_2D, n);
		g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
		var l = g.RGBA,
			h = g.RGBA,
			m = g.UNSIGNED_BYTE;
		if (e && !this.Wd) switch (e) {
		case 1:
			h = l = g.RGB;
			break;
		case 2:
			m = g.UNSIGNED_SHORT_4_4_4_4;
			break;
		case 3:
			m = g.UNSIGNED_SHORT_5_5_5_1;
			break;
		case 4:
			h = l = g.RGB, m = g.UNSIGNED_SHORT_5_6_5
		}
		if (!z && d) {
			e = document.createElement("canvas");
			e.width = ha(a.width);
			e.height = ha(a.height);
			var v = e.getContext("2d");
			v.webkitImageSmoothingEnabled = b;
			v.mozImageSmoothingEnabled = b;
			v.msImageSmoothingEnabled = b;
			v.imageSmoothingEnabled = b;
			v.drawImage(a, 0, 0, a.width, a.height, 0, 0, e.width, e.height);
			g.texImage2D(g.TEXTURE_2D, 0, l, h, m, e)
		} else g.texImage2D(g.TEXTURE_2D, 0, l, h, m, a);
		d ? (g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.REPEAT), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.REPEAT)) : (g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE));
		b ? (g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.LINEAR), z && this.yo ? (g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR_MIPMAP_LINEAR), g.generateMipmap(g.TEXTURE_2D)) : g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR)) : (g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.NEAREST), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.NEAREST));
		g.bindTexture(g.TEXTURE_2D, null);
		this.He = null;
		n.$e = a.width;
		n.Ze = a.height;
		n.Ui = 1;
		n.po = c;
		t.push(n);
		return f[c] = n
	};
	k.prototype.oc = function(a, b, e, d) {
		this.ze();
		var c = this.p;
		this.Wd && (d = !1);
		var n = c.createTexture();
		c.bindTexture(c.TEXTURE_2D, n);
		c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, a, b, 0, c.RGBA, d ? c.UNSIGNED_SHORT_4_4_4_4 : c.UNSIGNED_BYTE, null);
		c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE);
		c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE);
		c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, e ? c.LINEAR : c.NEAREST);
		c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, e ? c.LINEAR : c.NEAREST);
		c.bindTexture(c.TEXTURE_2D, null);
		this.He = null;
		n.$e = a;
		n.Ze = b;
		t.push(n);
		return n
	};
	k.prototype.Iw = function(a, b, e) {
		this.ze();
		var d = this.p;
		this.Wd && (e = !1);
		d.bindTexture(d.TEXTURE_2D, b);
		d.pixelStorei(d.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
		try {
			d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, d.RGBA, e ? d.UNSIGNED_SHORT_4_4_4_4 : d.UNSIGNED_BYTE, a)
		} catch (c) {
			console && console.error && console.error("Error updating WebGL texture: ", c)
		}
		d.bindTexture(d.TEXTURE_2D, null);
		this.He = null
	};
	k.prototype.deleteTexture = function(a) {
		a && ("undefined" !== typeof a.Ui && 1 < a.Ui ? a.Ui-- : (this.ze(), a === this.He && (this.p.bindTexture(this.p.TEXTURE_2D, null), this.He = null), a === this.sf && (this.p.activeTexture(this.p.TEXTURE1), this.p.bindTexture(this.p.TEXTURE_2D, null), this.p.activeTexture(this.p.TEXTURE0), this.sf = null), Ba(t, a), "undefined" !== typeof a.po && delete f[a.po], this.p.deleteTexture(a)))
	};
	k.prototype.Pc = function(a) {
		if (a !== this.qk) {
			var b = this.jc();
			b.type = 6;
			this.qk = b.Rc = a;
			this.tb = !1
		}
	};
	lb = k
})();
(function() {
	function k() {
		return "undefined" !== typeof jQuery ? jQuery(window).width() : window.innerWidth
	}
	function p() {
		return "undefined" !== typeof jQuery ? jQuery(window).height() : window.innerHeight
	}
	function h(a) {
		if (a && (a.getContext || a.dc) && !a.c2runtime) {
			a.c2runtime = this;
			var d = this;
			this.fc = (this.Bh = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk)) || "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap) || "undefined" !== typeof window.c2iscordova && window.c2iscordova;
			this.ub = !! a.dc;
			this.Yo = "undefined" !== typeof window.AppMobi || this.ub;
			this.tc = !! window.c2cocoonjs;
			this.Fc = !! window.c2ejecta;
			this.tc && (CocoonJS.App.onSuspended.addEventListener(function() {
				d.setSuspended(!0)
			}), CocoonJS.App.onActivated.addEventListener(function() {
				d.setSuspended(!1)
			}));
			this.Fc && (document.addEventListener("pagehide", function() {
				d.setSuspended(!0)
			}), document.addEventListener("pageshow", function() {
				d.setSuspended(!1)
			}), document.addEventListener("resize", function() {
				d.setSize(window.innerWidth, window.innerHeight)
			}));
			this.Aa = this.ub || this.tc || this.Fc;
			this.Eh = /edge\//i.test(navigator.userAgent);
			this.Wd = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.Eh;
			this.cp = /tizen/i.test(navigator.userAgent);
			this.zh = /android/i.test(navigator.userAgent) && !this.cp && !this.Wd && !this.Eh;
			this.mm = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.Wd && !this.Eh;
			this.gp = /ipad/i.test(navigator.userAgent);
			this.Kh = this.mm || this.gp || this.Fc;
			this.qv = this.mm && /os\s6/i.test(navigator.userAgent);
			this.Ah = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.Wd && !this.Eh;
			this.fm = /amazonwebappplatform/i.test(navigator.userAgent);
			this.jv = /firefox/i.test(navigator.userAgent);
			this.bp = /safari/i.test(navigator.userAgent) && !this.Ah && !this.Wd && !this.Eh;
			this.mv = /windows/i.test(navigator.userAgent);
			this.Ee = "undefined" !== typeof window.c2nodewebkit || "undefined" !== typeof window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent);
			this.ep = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
			this.ov = !("undefined" === typeof window.c2isWindows8Capable || !window.c2isWindows8Capable);
			this.gg = !("undefined" === typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
			this.km = !("undefined" === typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81);
			this.dp = !! window.cr_windows10;
			this.Gj = this.ep || this.ov || this.km || this.dp;
			this.iv = !("undefined" === typeof window.c2isBlackberry10 || !window.c2isBlackberry10);
			this.Ej = this.zh && !this.Ah && !this.Bh && !this.jv && !this.fm && !this.Aa;
			this.devicePixelRatio = 1;
			this.De = this.fc || this.Bh || this.Yo || this.tc || this.zh || this.Kh || this.gg || this.km || this.iv || this.cp || this.Fc;
			this.De || (this.De = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent));
			"undefined" === typeof cr_is_preview || this.Ee || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.Ee = !0);
			this.canvas = a;
			this.ro = document.getElementById("c2canvasdiv");
			this.q = this.p = null;
			this.Tl = "(unavailable)";
			this.qa = !1;
			this.ef = 0;
			this.fa = null;
			this.Dl = "";
			this.oj = !1;
			this.Up = this.Vp = 0;
			this.canvas.oncontextmenu = function(a) {
				a.preventDefault && a.preventDefault();
				return !1
			};
			this.canvas.onselectstart = function(a) {
				a.preventDefault && a.preventDefault();
				return !1
			};
			this.ub && (window.c2runtime = this);
			this.Ee && (window.ondragover = function(a) {
				a.preventDefault();
				return !1
			}, window.ondrop = function(a) {
				a.preventDefault();
				return !1
			}, window.nwgui && window.nwgui.App.clearCache && window.nwgui.App.clearCache());
			this.Ej && "undefined" !== typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible");
			this.width = a.width;
			this.height = a.height;
			this.B = this.width;
			this.A = this.height;
			this.$i = this.width;
			this.gh = this.height;
			this.Qh = window.innerWidth;
			this.Ph = window.innerHeight;
			this.tu = !1;
			this.ja = !0;
			this.Hh = !1;
			Date.now || (Date.now = function() {
				return +new Date
			});
			this.plugins = [];
			this.types = {};
			this.n = [];
			this.Oa = [];
			this.tm = {};
			this.bd = [];
			this.ul = {};
			this.Rd = [];
			this.Pg = [];
			this.Jk = [];
			this.Ns = [];
			this.Os = [];
			this.ip = this.Nq = null;
			this.cf = {};
			this.hm = this.Ce = !1;
			this.Xd = 0;
			this.gm = this.jm = !1;
			this.Zc = [];
			this.Dh = !1;
			this.Yd = this.wb = this.Qj = this.kn = "";
			this.wi = this.Jq = !1;
			this.nj = [];
			this.ye = this.df = 0;
			this.Lp = 30;
			this.ll = this.$h = 0;
			this.Kg = 1;
			this.jb = new bb;
			this.ke = new bb;
			this.bk = this.uj = this.lh = this.Fd = this.uf = this.Cl = this.Lj = 0;
			this.bh = null;
			this.ij = [];
			this.tl = [];
			this.kj = -1;
			this.Am = [
				[]
			];
			this.Bn = this.Vj = 0;
			this.ok(null);
			this.mh = this.Pp = this.ci = 0;
			this.xi = [];
			this.yn = this.$m = -1;
			this.Lh = !0;
			this.qg = 0;
			this.Fh = !1;
			this.uw = 0;
			this.Qf = null;
			this.wd = this.Po = !1;
			this.Tp = new ba;
			this.Hm = new ba;
			this.Im = new ba;
			this.li = [];
			this.hd = new db([]);
			this.vn = new db([]);
			this.Pf = [];
			this.Aj = {};
			this.ue = {};
			this.qe = {};
			this.Og = {};
			this.mo = {};
			this.op = this.Pj = this.Qa = this.Wa = this.np = this.Oj = this.ma = null;
			this.Mg = this.lm = !1;
			this.El = [null, null];
			this.jf = 0;
			this.Al = "";
			this.ae = {};
			this.ti = this.Je = null;
			this.Lq = "";
			this.ak = [];
			this.$v()
		}
	}
	function q(a, d) {
		return 128 >= d ? a[3] : 256 >= d ? a[2] : 512 >= d ? a[1] : a[0]
	}
	function r() {
		try {
			return !!window.indexedDB
		} catch (a) {
			return !1
		}
	}
	function t(a) {
		a.target.result.createObjectStore("saves", {
			keyPath: "slot"
		})
	}
	function f(a, d, c, b) {
		try {
			var m = indexedDB.open("_C2SaveStates");
			m.onupgradeneeded = t;
			m.onerror = b;
			m.onsuccess = function(m) {
				m = m.target.result;
				m.onerror = b;
				m.transaction(["saves"], "readwrite").objectStore("saves").put({
					slot: a,
					data: d
				}).onsuccess = c
			}
		} catch (g) {
			b(g)
		}
	}
	function a(a, d, c) {
		try {
			var b = indexedDB.open("_C2SaveStates");
			b.onupgradeneeded = t;
			b.onerror = c;
			b.onsuccess = function(b) {
				b = b.target.result;
				b.onerror = c;
				var m = b.transaction(["saves"]).objectStore("saves").get(a);
				m.onsuccess = function() {
					m.result ? d(m.result.data) : d(null)
				}
			}
		} catch (m) {
			c(m)
		}
	}
	function b() {
		C("Reloading for continuous preview");
		window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location = window.location + "?continuous"
	}
	function e(a) {
		var d, c = {};
		for (d in a)!a.hasOwnProperty(d) || a[d] instanceof ba || a[d] && "undefined" !== typeof a[d].Wx || "spriteCreatedDestroyCallback" !== d && (c[d] = a[d]);
		return c
	}
	var d = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
	h.prototype.$v = function() {
		var a = this,
			d;
		this.gg ? d = new ActiveXObject("Microsoft.XMLHTTP") : d = new XMLHttpRequest;
		var c = "data.js";
		if (this.ep || this.gg || this.km || this.dp) c = "data.json";
		d.open("GET", c, !0);
		var b = !1;
		if (!this.Aa && "response" in d && "responseType" in d) try {
			d.responseType = "json", b = "json" === d.responseType
		} catch (m) {
			b = !1
		}
		if (!b && "responseType" in d) try {
			d.responseType = "text"
		} catch (g) {}
		if ("overrideMimeType" in d) try {
			d.overrideMimeType("application/json; charset=utf-8")
		} catch (e) {}
		this.gg ? d.onreadystatechange = function() {
			4 === d.readyState && a.Sj(JSON.parse(d.responseText))
		} : (d.onload = function() {
			if (b) a.Sj(d.response);
			else if (a.Fc) {
				var c = d.responseText,
					c = c.substr(c.indexOf("{"));
				a.Sj(JSON.parse(c))
			} else a.Sj(JSON.parse(d.responseText))
		}, d.onerror = function(a) {
			da("Error requesting " + c + ":");
			da(a)
		});
		d.send()
	};
	h.prototype.dv = function() {
		var a = this,
			d, c, b, m, g, e, l, n, f;
		this.Fe = (!this.Aa || this.Fc || this.fc) && this.Fw && !this.Ej;
		0 === this.Nb && this.Kh && (this.Fe = !1);
		this.devicePixelRatio = this.Fe ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
		this.pb();
		c = !(!this.tu && (!this.Zk || this.Ee || this.Gj || this.gg || this.Bh || this.fc || this.fm));
		0 < this.Nb && this.setSize(k(), p(), !0);
		try {
			this.Nt && (this.tc || this.Fc || !this.Aa) && (d = {
				alpha: c,
				depth: !1,
				antialias: !1,
				failIfMajorPerformanceCaveat: !0
			}, this.p = this.canvas.getContext("webgl", d) || this.canvas.getContext("experimental-webgl", d))
		} catch (u) {}
		if (this.p) {
			if (d = this.p.getExtension("WEBGL_debug_renderer_info")) this.Tl = this.p.getParameter(d.UNMASKED_RENDERER_WEBGL) + " [" + this.p.getParameter(d.UNMASKED_VENDOR_WEBGL) + "]";
			this.qa && (this.Tl += " [front-to-back enabled]");
			this.Aa || (this.kb = document.createElement("canvas"), jQuery(this.kb).appendTo(this.canvas.parentNode), this.kb.oncontextmenu = function() {
				return !1
			}, this.kb.onselectstart = function() {
				return !1
			}, this.kb.width = Math.round(this.$i * this.devicePixelRatio), this.kb.height = Math.round(this.gh * this.devicePixelRatio), jQuery(this.kb).css({
				width: this.$i + "px",
				height: this.gh + "px"
			}), this.nq(), this.Rm = this.kb.getContext("2d"));
			this.q = new lb(this.p, this.De, this.qa);
			this.q.Ef(this.canvas.width, this.canvas.height);
			this.q.yo = 0 !== this.Gt;
			this.fa = null;
			this.canvas.addEventListener("webglcontextlost", function(d) {
				d.preventDefault();
				a.Cv();
				C("[Construct 2] WebGL context lost");
				window.cr_setSuspended(!0)
			}, !1);
			this.canvas.addEventListener("webglcontextrestored", function() {
				a.q.To();
				a.q.Ef(a.q.width, a.q.height, !0);
				a.Wa = null;
				a.Qa = null;
				a.El[0] = null;
				a.El[1] = null;
				a.Dv();
				a.ja = !0;
				C("[Construct 2] WebGL context restored");
				window.cr_setSuspended(!1)
			}, !1);
			d = 0;
			for (c = this.n.length; d < c; d++) for (g = this.n[d], b = 0, m = g.I.length; b < m; b++) l = g.I[b], l.Sa = this.q.Ql(l.id), l.dd = this.q.Wm(l.Sa), this.Mg = this.Mg || this.q.fi(l.Sa);
			d = 0;
			for (c = this.bd.length; d < c; d++) {
				n = this.bd[d];
				b = 0;
				for (m = n.I.length; b < m; b++) l = n.I[b], l.Sa = this.q.Ql(l.id), l.dd = this.q.Wm(l.Sa);
				n.kd();
				b = 0;
				for (m = n.J.length; b < m; b++) {
					f = n.J[b];
					g = 0;
					for (e = f.I.length; g < e; g++) l = f.I[g], l.Sa = this.q.Ql(l.id), l.dd = this.q.Wm(l.Sa), this.Mg = this.Mg || this.q.fi(l.Sa);
					f.kd()
				}
			}
		} else {
			if (0 < this.Nb && this.ub) {
				this.canvas = null;
				document.oncontextmenu = function() {
					return !1
				};
				document.onselectstart = function() {
					return !1
				};
				this.fa = AppMobi.canvas.getContext("2d");
				try {
					this.fa.samplingMode = this.V ? "smooth" : "sharp", this.fa.globalScale = 1, this.fa.HTML5CompatibilityMode = !0, this.fa.imageSmoothingEnabled = this.V
				} catch (v) {}
				0 !== this.width && 0 !== this.height && (this.fa.width = this.width, this.fa.height = this.height)
			}
			this.fa || (this.tc ? (d = {
				antialias: !! this.V,
				alpha: c
			}, this.fa = this.canvas.getContext("2d", d)) : (d = {
				alpha: c
			}, this.fa = this.canvas.getContext("2d", d)), this.fa.webkitImageSmoothingEnabled = this.V, this.fa.mozImageSmoothingEnabled = this.V, this.fa.msImageSmoothingEnabled = this.V, this.fa.imageSmoothingEnabled = this.V);
			this.Rm = this.kb = null
		}
		this.Xq = function(d) {
			a.mb(!1, d)
		};
		window == window.top || this.Aa || this.Gj || this.gg || (document.addEventListener("mousedown", function() {
			window.focus()
		}, !0), document.addEventListener("touchstart", function() {
			window.focus()
		}, !0));
		"undefined" !== typeof cr_is_preview && (this.tc && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (C("Reloading for continuous preview"), this.Qj = "__c2_continuouspreview", this.wi = !0), this.Mv && !this.De && (jQuery(window).focus(function() {
			a.setSuspended(!1)
		}), jQuery(window).blur(function() {
			a.setSuspended(!0)
		})));
		window.addEventListener("blur", function() {
			a.zg()
		});
		this.Aa || (d = function(a) {
			if (kb(a) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur) try {
				document.activeElement.blur()
			} catch (d) {}
		}, window.navigator.pointerEnabled ? document.addEventListener("pointerdown", d) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", d) : document.addEventListener("touchstart", d), document.addEventListener("mousedown", d));
		0 === this.Nb && this.Fe && 1 < this.devicePixelRatio && this.setSize(this.Ya, this.Xa, !0);
		this.br();
		this.Xu();
		this.go();
		this.S = {}
	};
	h.prototype.setSize = function(a, d, c) {
		var b = 0,
			m = 0,
			g = 0,
			e = 0,
			e = 0,
			l = this.qv && this.bp && !navigator.standalone && !this.Aa && !this.fc;
		l && (d += 60);
		if (this.Qh !== a || this.Ph !== d || c) {
			this.Qh = a;
			this.Ph = d;
			var n = this.Nb,
				f = (document.mozFullScreen || document.webkitIsFullScreen || !! document.msFullscreenElement || document.fullScreen || this.Fh) && !this.fc;
			if (f || 0 !== this.Nb || c) f && 0 < this.jf && (n = this.jf), c = this.devicePixelRatio, 4 <= n ? (g = this.Ya / this.Xa, a / d > g ? (g *= d, 5 === n ? (e = g * c / this.Ya, 1 < e ? e = Math.floor(e) : 1 > e && (e = 1 / Math.ceil(1 / e)), g = this.Ya * e / c, e = this.Xa * e / c, b = (a - g) / 2, m = (d - e) / 2, a = g, d = e) : (b = (a - g) / 2, a = g)) : (e = a / g, 5 === n ? (e = e * c / this.Xa, 1 < e ? e = Math.floor(e) : 1 > e && (e = 1 / Math.ceil(1 / e)), g = this.Ya * e / c, e = this.Xa * e / c, b = (a - g) / 2, m = (d - e) / 2, a = g) : m = (d - e) / 2, d = e), f && !this.Ee && (m = b = 0)) : this.Ee && this.Fh && 0 === this.Fo && (b = Math.floor((a - this.Ya) / 2), m = Math.floor((d - this.Xa) / 2), a = this.Ya, d = this.Xa), 2 > n && (this.Yg = c), this.Fe && this.gp && 1 < c && (1024 <= a && (a = 1023), 1024 <= d && (d = 1023)), this.$i = Math.round(a), this.gh = Math.round(d), this.width = Math.round(a * c), this.height = Math.round(d * c), this.ja = !0, this.mr ? (this.B = this.width, this.A = this.height, this.pc = !0) : this.width < this.Ya && this.height < this.Xa || 1 === n ? (this.B = this.width, this.A = this.height, this.pc = !0) : (this.B = this.Ya, this.A = this.Xa, this.pc = !1, 2 === n ? (g = this.Ya / this.Xa, n = this.Qh / this.Ph, n < g ? this.B = this.A * n : n > g && (this.A = this.B / n)) : 3 === n && (g = this.Ya / this.Xa, n = this.Qh / this.Ph, n > g ? this.B = this.A * n : n < g && (this.A = this.B / n))), this.ro && !this.Aa && (jQuery(this.ro).css({
				width: Math.round(a) + "px",
				height: Math.round(d) + "px",
				"margin-left": Math.floor(b) + "px",
				"margin-top": Math.floor(m) + "px"
			}), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({
				width: Math.round(a) + "px",
				height: Math.round(d) + "px"
			})), this.canvas && (this.canvas.width = Math.round(a * c), this.canvas.height = Math.round(d * c), this.Fc ? (this.canvas.style.left = Math.floor(b) + "px", this.canvas.style.top = Math.floor(m) + "px", this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(d) + "px") : this.Fe && !this.Aa && (this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(d) + "px")), this.kb && (this.kb.width = Math.round(a * c), this.kb.height = Math.round(d * c), this.kb.style.width = this.$i + "px", this.kb.style.height = this.gh + "px"), this.q && this.q.Ef(Math.round(a * c), Math.round(d * c)), this.ub && this.fa && (this.fa.width = Math.round(a), this.fa.height = Math.round(d)), this.fa && (this.fa.webkitImageSmoothingEnabled = this.V, this.fa.mozImageSmoothingEnabled = this.V, this.fa.msImageSmoothingEnabled = this.V, this.fa.imageSmoothingEnabled = this.V), this.br(), this.Aa || !l && !this.mm || window.setTimeout(function() {
				window.scrollTo(0, 1)
			}, 100)
		}
	};
	h.prototype.br = function() {
		if (this.Rs && 0 !== this.Pm) {
			var a = "portrait";
			2 === this.Pm && (a = "landscape");
			try {
				screen.orientation && screen.orientation.lock ? screen.orientation.lock(a) : screen.lockOrientation ? screen.lockOrientation(a) : screen.webkitLockOrientation ? screen.webkitLockOrientation(a) : screen.mozLockOrientation ? screen.mozLockOrientation(a) : screen.msLockOrientation && screen.msLockOrientation(a)
			} catch (d) {
				console && console.warn && console.warn("Failed to lock orientation: ", d)
			}
		}
	};
	h.prototype.Cv = function() {
		this.q.bt();
		this.lm = !0;
		var a, d, c;
		a = 0;
		for (d = this.n.length; a < d; a++) c = this.n[a], c.Mm && c.Mm()
	};
	h.prototype.Dv = function() {
		this.lm = !1;
		var a, d, c;
		a = 0;
		for (d = this.n.length; a < d; a++) c = this.n[a], c.Yp && c.Yp()
	};
	h.prototype.nq = function() {
		if (!this.Aa) {
			var a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.Fh) && !this.fc ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
			a.position = "absolute";
			jQuery(this.kb).css(a)
		}
	};
	var c = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
	h.prototype.setSuspended = function(a) {
		var d;
		if (a && !this.Hh) for (C("[Construct 2] Suspending"), this.Hh = !0, -1 !== this.$m && c && c(this.$m), -1 !== this.yn && clearTimeout(this.yn), a = 0, d = this.xi.length; a < d; a++) this.xi[a](!0);
		else if (!a && this.Hh) {
			C("[Construct 2] Resuming");
			this.Hh = !1;
			this.Lj = Ya();
			this.uf = Ya();
			a = this.$h = this.uj = 0;
			for (d = this.xi.length; a < d; a++) this.xi[a](!1);
			this.mb(!1)
		}
	};
	h.prototype.ho = function(a) {
		this.xi.push(a)
	};
	h.prototype.ne = function(a) {
		return this.ak[a]
	};
	h.prototype.Sj = function(a) {
		a && a.project || da("Project model unavailable");
		a = a.project;
		this.name = a[0];
		this.Do = a[1];
		this.Nb = a[12];
		this.Fo = a[12];
		this.Ya = a[10];
		this.Xa = a[11];
		this.iq = this.Ya / 2;
		this.jq = this.Xa / 2;
		this.Aa && !this.Fc && (4 <= a[12] || 0 === a[12]) && (C("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.Fo = this.Nb = 3);
		this.In = a[18];
		this.Ke = a[19];
		if (0 === this.Ke) {
			var d = new Image;
			d.crossOrigin = "anonymous";
			d.src = "loading-logo.png";
			this.Je = {
				Wj: d
			}
		} else if (4 === this.Ke) {
			d = new Image;
			d.src = "";
			var c = new Image;
			c.src = "";
			var b = new Image;
			b.src = "";
			var m = new Image;
			m.src = "";
			var g = new Image;
			g.src = "";
			var e = new Image;
			e.src = "";
			var l = new Image;
			l.src = "";
			var n = new Image;
			n.src = "";
			var f = new Image;
			f.src = "";
			var u = new Image;
			u.src = "";
			var v = new Image;
			v.src = "";
			var z = new Image;
			z.src = "";
			this.Je = {
				Wj: [d, c, b, m],
				Rv: [g, e, l, n],
				Kw: [f, u, v, z]
			}
		}
		this.ci = a[21];
		this.ak = kc();
		this.Ed = new Y(this);
		d = 0;
		for (c = a[2].length; d < c; d++) l = a[2][d], b = this.ne(l[0]), mb(l, b.prototype), n = new b(this), n.zk = l[1], n.Ge = l[2], n.Mp = l[9], n.na && n.na(), this.plugins.push(n);
		this.ak = kc();
		d = 0;
		for (c = a[3].length; d < c; d++) {
			l = a[3][d];
			g = this.ne(l[1]);
			n = null;
			b = 0;
			for (m = this.plugins.length; b < m; b++) if (this.plugins[b] instanceof g) {
				n = this.plugins[b];
				break
			}
			f = new n.qb(n);
			f.name = l[0];
			f.L = l[2];
			f.em = l[3].slice(0);
			f.Hw = l[3].length;
			f.Ss = l[4];
			f.vu = l[5];
			f.T = l[11];
			f.L ? (f.ug = [], f.Sd = this.mh++, f.za = null) : (f.ug = null, f.Sd = -1, f.za = []);
			f.lj = null;
			f.Zf = null;
			f.zo = null;
			f.Gc = !1;
			f.Zb = null;
			l[6] ? (f.Uq = l[6][0], f.Vq = l[6][1], f.xw = l[6][2]) : (f.Uq = null, f.Vq = 0, f.xw = 0);
			l[7] ? f.Gb = l[7] : f.Gb = null;
			f.index = d;
			f.e = [];
			f.ej = [];
			f.ge = [new nb(f)];
			f.pd = 0;
			f.Cc = null;
			f.kt = 0;
			f.Ig = !0;
			f.Kk = ob;
			f.zu = pb;
			f.Fu = qb;
			f.Z = rb;
			f.hi = sb;
			f.nk = tb;
			f.Af = ub;
			f.xj = vb;
			f.Fl = wb;
			f.Kl = yb;
			f.Wc = zb;
			f.Ml = Ab;
			f.Xi = new eb(this.Ya, this.Xa);
			f.Oi = !0;
			f.Pi = !1;
			f.S = {};
			f.toString = Bb;
			f.Oa = [];
			b = 0;
			for (m = l[8].length; b < m; b++) {
				u = l[8][b];
				v = this.ne(u[1]);
				z = null;
				g = 0;
				for (e = this.Oa.length; g < e; g++) if (this.Oa[g] instanceof v) {
					z = this.Oa[g];
					break
				}
				z || (z = new v(this), z.$j = [], z.Fm = new ba, z.na && z.na(), this.Oa.push(z), lc && z instanceof lc && (this.Nq = z), cc.sv && z instanceof cc.sv && (this.ip = z)); - 1 === z.$j.indexOf(f) && z.$j.push(f);
				g = new z.qb(z, f);
				g.name = u[0];
				g.T = u[2];
				g.na();
				f.Oa.push(g)
			}
			f.global = l[9];
			f.im = l[10];
			f.I = [];
			b = 0;
			for (m = l[12].length; b < m; b++) f.I.push({
				id: l[12][b][0],
				name: l[12][b][1],
				Sa: -1,
				dd: !1,
				mc: !0,
				index: b
			});
			f.uy = l[13];
			this.In && !f.L && !f.im && n.Ge || f.na();
			f.name && (this.types[f.name] = f);
			this.n.push(f);
			n.zk && (b = new n.Ta(f), b.uid = this.ci++, b.sq = this.Pp++, b.of = 0, b.rh = Cb, b.toString = Db, b.O = l[14], b.na(), f.e.push(b), this.ae[b.uid.toString()] = b)
		}
		d = 0;
		for (c = a[4].length; d < c; d++) for (g = a[4][d], e = this.n[g[0]], b = 1, m = g.length; b < m; b++) l = this.n[g[b]], l.za.push(e), e.ug.push(l);
		d = 0;
		for (c = a[28].length; d < c; d++) {
			g = a[28][d];
			e = [];
			b = 0;
			for (m = g.length; b < m; b++) e.push(this.n[g[b]]);
			b = 0;
			for (m = e.length; b < m; b++) e[b].Gc = !0, e[b].Zb = e
		}
		if (0 < this.mh) for (d = 0, c = this.n.length; d < c; d++) if (l = this.n[d], !l.L && l.za.length) {
			l.lj = Array(this.mh);
			l.Zf = Array(this.mh);
			l.zo = Array(this.mh);
			f = [];
			b = z = v = u = 0;
			for (m = l.za.length; b < m; b++) for (n = l.za[b], l.lj[n.Sd] = u, u += n.Hw, l.Zf[n.Sd] = v, v += n.Ss, l.zo[n.Sd] = z, z += n.vu, g = 0, e = n.I.length; g < e; g++) f.push(ua({}, n.I[g]));
			l.I = f.concat(l.I);
			b = 0;
			for (m = l.I.length; b < m; b++) l.I[b].index = b
		}
		d = 0;
		for (c = a[5].length; d < c; d++) l = a[5][d], b = new Eb(this, l), this.tm[b.name] = b, this.bd.push(b);
		d = 0;
		for (c = a[6].length; d < c; d++) l = a[6][d], b = new Fb(this, l), this.ul[b.name] = b, this.Rd.push(b);
		d = 0;
		for (c = this.Rd.length; d < c; d++) this.Rd[d].Na();
		d = 0;
		for (c = this.Rd.length; d < c; d++) this.Rd[d].En();
		d = 0;
		for (c = this.Jk.length; d < c; d++) this.Jk[d].Na();
		W(this.Jk);
		this.Qs = a[7];
		this.Al = a[8];
		this.be = a[9];
		this.Yg = 1;
		this.Nt = a[13];
		this.V = a[14];
		this.Zk = a[15];
		this.Fw = a[17];
		this.Pm = a[20];
		this.Rs = 0 < this.Pm;
		this.Mv = a[22];
		this.pc = this.mr = a[23];
		this.Gt = a[24];
		this.Sv = a[25];
		this.qa = a[27] && !this.Wd;
		this.Ak = Date.now();
		W(this.ak);
		this.dv()
	};
	var n = !1;
	h.prototype.Jw = function(a, d) {
		a.cocoonLazyLoad = !0;
		a.onerror = function(d) {
			n = a.oo = !0;
			console && console.error && console.error("Error loading image '" + a.src + "': ", d)
		};
		this.Fc ? a.src = d : a.src || ("undefined" !== typeof XAPKReader ? XAPKReader.get(d, function(d) {
			a.src = d
		}, function(c) {
			n = a.oo = !0;
			console && console.error && console.error("Error extracting image '" + d + "' from expansion file: ", c)
		}) : (a.crossOrigin = "anonymous", a.src = d));
		this.Pg.push(a)
	};
	h.prototype.su = function(a) {
		var d, c;
		d = 0;
		for (c = this.Pg.length; d < c; d++) if (this.Pg[d].dt === a) return this.Pg[d];
		return null
	};
	var g = 0,
		z = !1;
	h.prototype.Xu = function() {
		this.Qf && (g = this.Qf.pw(this.Qs))
	};
	h.prototype.ko = function() {
		var a = g,
			d = 0,
			c = 0,
			b = !0,
			m, e, c = 0;
		for (m = this.Pg.length; c < m; c++) {
			e = this.Pg[c];
			var l = e.ct;
			if (!l || 0 >= l) l = 5E4;
			a += l;
			e.src && (e.complete || e.loaded) && !e.oo ? d += l : b = !1
		}
		b && this.Sv && this.Qf && (z || (this.Qf.vw(), z = !0), c = this.Qf.Gu(), d += c, c < g && (b = !1));
		this.ed = 0 == a ? 1 : d / a;
		return b
	};
	var l = !1;
	h.prototype.go = function() {
		if (this.fa || this.q) {
			var a = this.fa || this.Rm;
			this.kb && this.nq();
			this.ed = 0;
			this.mp = -1;
			var c = this;
			if (this.ko() && (4 !== this.Ke || l)) this.Yu();
			else {
				var b = Date.now() - this.Ak;
				if (a) {
					var g = this.width,
						m = this.height,
						e = this.devicePixelRatio;
					if (3 > this.Ke && (this.tc || 500 <= b && this.mp != this.ed)) {
						a.clearRect(0, 0, g, m);
						var b = g / 2,
							m = m / 2,
							g = 0 === this.Ke && this.Je.Wj.complete,
							f = 40 * e,
							u = 0,
							v = 80 * e,
							z;
						if (g) {
							var h = this.Je.Wj,
								v = h.width * e;
							z = h.height * e;
							f = v / 2;
							u = z / 2;
							a.drawImage(h, T(b - f), T(m - u), v, z)
						}
						1 >= this.Ke ? (b = T(b - f) + .5, m = T(m + (u + (g ? 12 * e : 0))) + .5, a.fillStyle = n ? "red" : "DodgerBlue", a.fillRect(b, m, Math.floor(v * this.ed), 6 * e), a.strokeStyle = "black", a.strokeRect(b, m, v, 6 * e), a.strokeStyle = "white", a.strokeRect(b - 1 * e, m - 1 * e, v + 2 * e, 8 * e)) : 2 === this.Ke && (a.font = this.Fc ? "12pt ArialMT" : "12pt Arial", a.fillStyle = n ? "#f00" : "#999", a.ty = "middle", e = Math.round(100 * this.ed) + "%", g = a.measureText ? a.measureText(e) : null, a.fillText(e, b - (g ? g.width : 0) / 2, m));
						this.mp = this.ed
					} else if (4 === this.Ke) {
						this.Lt(a);

						d ? d(function() {
							c.go()
						}) : setTimeout(function() {
							c.go()
						}, 16);
						return
					}
				}
				setTimeout(function() {
					c.go()
				}, this.tc ? 10 : 100)
			}
		}
	};
	var w = -1,
		m = "undefined" === typeof cr_is_preview ? 200 : 0,
		v = !0,
		u = !1,
		E = 0,
		D = 0,
		L = "undefined" === typeof cr_is_preview ? 3E3 : 0,
		O = null,
		N = null,
		F = 0;
	h.prototype.Lt = function(a) {
		if (!l) {
			for (var d = Math.ceil(this.width), c = Math.ceil(this.height), b = this.Je.Wj, g = this.Je.Rv, e = this.Je.Kw, f = 0; 4 > f; ++f) if (!b[f].complete || !g[f].complete || !e[f].complete) return;
			0 === F && (w = Date.now());
			var f = Date.now(),
				z = !1,
				h = a,
				k, p;
			v || u ? (a.clearRect(0, 0, d, c), O && O.width === d && O.height === c || (O = document.createElement("canvas"), O.width = d, O.height = c, N = O.getContext("2d")), h = N, z = !0, v && 1 === F && (w = Date.now())) : a.globalAlpha = 1;
			h.fillStyle = "#333333";
			h.fillRect(0, 0, d, c);
			256 < this.gh ? (k = Ca(.22 * c, 105, .6 * d), p = .25 * k, h.drawImage(q(g, k), .5 * d - k / 2, .2 * c - p / 2, k, p), p = k = Math.min(.395 * c, .95 * d), h.drawImage(q(b, k), .5 * d - k / 2, .485 * c - p / 2, k, p), k = Ca(.22 * c, 105, .6 * d), p = .25 * k, h.drawImage(q(e, k), .5 * d - k / 2, .868 * c - p / 2, k, p), h.fillStyle = "#3C3C3C", k = d, p = Math.max(.005 * c, 2), h.fillRect(0, .8 * c - p / 2, k, p), h.fillStyle = n ? "red" : "#E0FF65", k = d * this.ed, h.fillRect(.5 * d - k / 2, .8 * c - p / 2, k, p)) : (p = k = .55 * c, h.drawImage(q(b, k), .5 * d - k / 2, .45 * c - p / 2, k, p), h.fillStyle = "#3C3C3C", k = d, p = Math.max(.005 * c, 2), h.fillRect(0, .85 * c - p / 2, k, p), h.fillStyle = n ? "red" : "#E0FF65", k = d * this.ed, h.fillRect(.5 * d - k / 2, .85 * c - p / 2, k, p));
			z && (v ? a.globalAlpha = 0 === F ? 0 : Math.min((f - w) / 300, 1) : u && (a.globalAlpha = Math.max(1 - (f - D) / 300, 0)), a.drawImage(O, 0, 0, d, c));
			v && 300 <= f - w && 2 <= F && (v = !1, E = f);
			!v && f - E >= L && !u && 1 <= this.ed && (u = !0, D = f);
			if (u && f - D >= 300 + m || "undefined" !== typeof cr_is_preview && 1 <= this.ed && 500 > Date.now() - w) l = !0, u = v = !1, this.Je = N = O = null;
			++F
		}
	};
	h.prototype.Yu = function() {
		this.kb && (this.canvas.parentNode.removeChild(this.kb), this.kb = this.Rm = null);
		this.Ak = Date.now();
		this.uf = Ya();
		var a, d, c;
		if (this.In) for (a = 0, d = this.n.length; a < d; a++) c = this.n[a], c.L || c.im || !c.Fa.Ge || c.na();
		else this.Lh = !1;
		a = 0;
		for (d = this.bd.length; a < d; a++) this.bd[a].et();
		2 <= this.Nb && (a = this.Ya / this.Xa, d = this.width / this.height, this.Yg = 2 !== this.Nb && d > a || 2 === this.Nb && d < a ? this.height / this.Xa : this.width / this.Ya);
		this.Do ? this.tm[this.Do].tn() : this.bd[0].tn();
		this.In || (this.qg = 1, this.trigger(Y.prototype.i.Sn, null));
		navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide();
		a = 0;
		for (d = this.n.length; a < d; a++) c = this.n[a], c.Bv && c.Bv();
		document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.mb(!1);
		this.ub && AppMobi.webview.execute("onGameReady();")
	};
	h.prototype.mb = function(a, c, b) {
		if (this.ma) {
			var g = Ya();
			if (b || !this.Hh || a) {
				a || (d ? this.$m = d(this.Xq) : this.yn = setTimeout(this.Xq, this.De ? 1 : 16));
				c = c || g;
				var m = this.Nb;
				((b = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !! document.msFullscreenElement) && !this.fc) || this.Fh) && 0 < this.jf && (m = this.jf);
				0 < m && (!this.Kh || window.self !== window.top) && (m = window.innerHeight, this.Qh === window.innerWidth && this.Ph === m || this.setSize(k(), p()));
				this.Aa || (b ? (this.oj || (this.Dl = jQuery(this.canvas).css("margin") || "0", this.oj = !0), this.Ah || this.Ee || jQuery(this.canvas).css({
					"margin-left": "" + Math.floor((screen.width - this.width / this.devicePixelRatio) / 2) + "px",
					"margin-top": "" + Math.floor((screen.height - this.height / this.devicePixelRatio) / 2) + "px"
				})) : this.oj ? (this.Ah || this.Ee || jQuery(this.canvas).css("margin", this.Dl), this.Dl = "", this.oj = !1, 0 === this.Nb && this.setSize(Math.round(this.Vp / this.devicePixelRatio), Math.round(this.Up / this.devicePixelRatio), !0)) : (this.Vp = this.width, this.Up = this.height));
				this.Lh && (b = this.ko(), this.qg = this.ed, b && (this.Lh = !1, this.ed = 1, this.trigger(Y.prototype.i.Sn, null)));
				this.vv(c);
				!this.ja && !this.tc || this.lm || this.wi || a || (this.ja = !1, this.q ? this.Ec() : this.Qd(), this.ti && (this.canvas && this.canvas.toDataURL && (this.Lq = this.canvas.toDataURL(this.ti[0], this.ti[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.Lq), this.trigger(Y.prototype.i.Rr, null)), this.ti = null));
				this.ay || (this.Fd++, this.lh++, this.uj++);
				this.$h += Ya() - g
			}
		}
	};
	h.prototype.vv = function(a) {
		var d, c, b, g, m, e, l, f;
		1E3 <= a - this.uf && (this.uf += 1E3, 1E3 <= a - this.uf && (this.uf = a), this.Cl = this.uj, this.uj = 0, this.ll = this.$h, this.$h = 0);
		0 !== this.Lj && (d = a - this.Lj, 0 > d && (d = 0), this.ye = d / 1E3, .5 < this.ye ? this.ye = 0 : this.ye > 1 / this.Lp && (this.ye = 1 / this.Lp));
		this.Lj = a;
		this.df = this.ye * this.Kg;
		this.jb.add(this.df);
		this.ke.add(this.ye);
		a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !! document.msFullscreenElement || this.Fh) && !this.fc;
		2 <= this.Nb || a && 0 < this.jf ? (d = this.Ya / this.Xa, c = this.width / this.height, b = this.Nb, a && 0 < this.jf && (b = this.jf), this.Yg = 2 !== b && c > d || 2 === b && c < d ? this.height / this.Xa : this.width / this.Ya, this.ma && (this.ma.vq(this.ma.scrollX), this.ma.wq(this.ma.scrollY))) : this.Yg = this.Fe ? this.devicePixelRatio : 1;
		this.pb();
		this.Xd++;
		this.Ed.ew();
		this.Xd--;
		this.pb();
		this.Xd++;
		c = this.Tp.Se();
		a = 0;
		for (d = c.length; a < d; a++) c[a].ly();
		a = 0;
		for (d = this.n.length; a < d; a++) if (e = this.n[a], !e.L && (e.Oa.length || e.za.length)) for (c = 0, b = e.e.length; c < b; c++) for (l = e.e[c], g = 0, m = l.H.length; g < m; g++) l.H[g].mb();
		a = 0;
		for (d = this.n.length; a < d; a++) if (e = this.n[a], !e.L && (e.Oa.length || e.za.length)) for (c = 0, b = e.e.length; c < b; c++) for (l = e.e[c], g = 0, m = l.H.length; g < m; g++) f = l.H[g], f.oq && f.oq();
		c = this.Hm.Se();
		a = 0;
		for (d = c.length; a < d; a++) c[a].mb();
		this.Xd--;
		this.Zu();
		for (a = 0; this.bh && 10 > a++;) this.xo(this.bh);
		a = 0;
		for (d = this.Rd.length; a < d; a++) this.Rd[a].Wl = !1;
		this.ma.ff && this.ma.ff.Ra();
		W(this.li);
		this.Xd++;
		a = 0;
		for (d = this.n.length; a < d; a++) if (e = this.n[a], !e.L && (e.Oa.length || e.za.length)) for (c = 0, b = e.e.length; c < b; c++) for (l = e.e[c], g = 0, m = l.H.length; g < m; g++) f = l.H[g], f.wn && f.wn();
		c = this.Im.Se();
		a = 0;
		for (d = c.length; a < d; a++) c[a].wn();
		this.Xd--
	};
	h.prototype.zg = function() {
		var a, d, c, b, g, m, e, l, f;
		a = 0;
		for (d = this.n.length; a < d; a++) if (e = this.n[a], !e.L) for (c = 0, b = e.e.length; c < b; c++) if (l = e.e[c], l.zg && l.zg(), l.H) for (g = 0, m = l.H.length; g < m; g++) f = l.H[g], f.zg && f.zg()
	};
	h.prototype.xo = function(a) {
		var d = this.ma;
		this.ma.ww();
		var c, b, g, m, e, l, f;
		if (this.q) for (c = 0, b = this.n.length; c < b; c++) e = this.n[c], e.L || !e.er || e.global && 0 !== e.e.length || -1 !== a.xh.indexOf(e) || e.er();
		d == a && W(this.Ed.Xb);
		W(this.li);
		a.tn();
		c = 0;
		for (b = this.n.length; c < b; c++) if (e = this.n[c], e.global || e.Fa.zk) for (a = 0, d = e.e.length; a < d; a++) if (l = e.e[a], l.Lm && l.Lm(), l.H) for (g = 0, m = l.H.length; g < m; g++) f = l.H[g], f.Lm && f.Lm();
		this.ja = !0;
		this.pb()
	};
	h.prototype.xn = function(a) {
		this.Hm.add(a)
	};
	h.prototype.yw = function(a) {
		this.Im.add(a)
	};
	h.prototype.Il = function(a) {
		return a && -1 !== a.bi ? this.ye * a.bi : this.df
	};
	h.prototype.Qd = function() {
		this.ma.Qd(this.fa);
		this.ub && this.fa.present()
	};
	h.prototype.Ec = function() {
		this.qa && (this.ef = 1, this.ma.Vf(this.q));
		this.ma.Ec(this.q);
		this.q.Uv()
	};
	h.prototype.Yk = function(a) {
		a && this.ij.push(a)
	};
	h.prototype.Zv = function(a) {
		Ba(this.ij, a)
	};
	h.prototype.bg = function(a) {
		a = a.toString();
		return this.ae.hasOwnProperty(a) ? this.ae[a] : null
	};
	var J = [];
	h.prototype.Te = function(a) {
		var d, c;
		d = a.type.name;
		var b = null;
		if (this.cf.hasOwnProperty(d)) {
			if (b = this.cf[d], b.contains(a)) return
		} else b = J.length ? J.pop() : new ba, this.cf[d] = b;
		b.add(a);
		this.Ce = !0;
		if (a.Gc) for (d = 0, c = a.siblings.length; d < c; d++) this.Te(a.siblings[d]);
		this.hm && b.Ng.push(a);
		this.gm || (this.Xd++, this.trigger(Object.getPrototypeOf(a.type.Fa).i.Pn, a), this.Xd--)
	};
	h.prototype.pb = function() {
		if (this.Ce) {
			var a, d, c, b, g, m;
			this.hm = !0;
			c = 0;
			for (g = this.Zc.length; c < g; ++c) for (a = this.Zc[c], d = a.type, d.e.push(a), b = 0, m = d.za.length; b < m; ++b) d.za[b].e.push(a), d.za[b].Ig = !0;
			W(this.Zc);
			this.Ir();
			Xa(this.cf);
			this.Ce = this.hm = !1
		}
	};
	h.prototype.Ir = function() {
		for (var a in this.cf) this.cf.hasOwnProperty(a) && this.sr(this.cf[a])
	};
	h.prototype.sr = function(a) {
		var d = a.Se(),
			c = d[0].type,
			b, g, m, e, l, f;
		Za(c.e, a);
		c.Ig = !0;
		0 === c.e.length && (c.Pi = !1);
		b = 0;
		for (g = c.za.length; b < g; ++b) f = c.za[b], Za(f.e, a), f.Ig = !0;
		b = 0;
		for (g = this.Ed.Xb.length; b < g; ++b) if (l = this.Ed.Xb[b], l.Bb.hasOwnProperty(c.index) && Za(l.Bb[c.index].Ud, a), !c.L) for (m = 0, e = c.za.length; m < e; ++m) f = c.za[m], l.Bb.hasOwnProperty(f.index) && Za(l.Bb[f.index].Ud, a);
		if (l = d[0].j) {
			if (l.zc) for (m = l.e, b = 0, g = m.length; b < g; ++b) e = m[b], a.contains(e) && (e.la(), l.lb.update(e, e.Pb, null), e.Pb.set(0, 0, -1, -1));
			Za(l.e, a);
			l.pi(0)
		}
		for (b = 0; b < d.length; ++b) this.rr(d[b], c);
		a.clear();
		J.push(a);
		this.ja = !0
	};
	h.prototype.rr = function(a, d) {
		var c, b, g;
		c = 0;
		for (b = this.ij.length; c < b; ++c) this.ij[c](a);
		a.ve && d.Xi.update(a, a.ve, null);
		(c = a.j) && c.Cg(a, !0);
		if (a.H) for (c = 0, b = a.H.length; c < b; ++c) g = a.H[c], g.yg && g.yg(), g.behavior.Fm.remove(a);
		this.Tp.remove(a);
		this.Hm.remove(a);
		this.Im.remove(a);
		a.yg && a.yg();
		this.ae.hasOwnProperty(a.uid.toString()) && delete this.ae[a.uid.toString()];
		this.bk--;
		100 > d.ej.length && d.ej.push(a)
	};
	h.prototype.uo = function(a, d, c, b) {
		if (a.L) {
			var g = T(Math.random() * a.ug.length);
			return this.uo(a.ug[g], d, c, b)
		}
		return a.Cc ? this.we(a.Cc, d, !1, c, b, !1) : null
	};
	var U = [];
	h.prototype.we = function(a, d, c, b, g, m) {
		var e, l, f, n;
		if (!a) return null;
		var u = this.n[a[1]],
			v = u.Fa.Ge;
		if (this.Lh && v && !u.im || v && !this.q && 11 === a[0][11]) return null;
		var z = d;
		v || (d = null);
		var h;
		u.ej.length ? (h = u.ej.pop(), h.vc = !0, u.Fa.Ta.call(h, u)) : (h = new u.Fa.Ta(u), h.vc = !1);
		!c || m || this.ae.hasOwnProperty(a[2].toString()) ? h.uid = this.ci++ : h.uid = a[2];
		this.ae[h.uid.toString()] = h;
		h.sq = this.Pp++;
		h.of = u.e.length;
		e = 0;
		for (l = this.Zc.length; e < l; ++e) this.Zc[e].type === u && h.of++;
		h.rh = Cb;
		h.toString = Db;
		f = a[3];
		if (h.vc) Xa(h.S);
		else {
			h.S = {};
			if ("undefined" !== typeof cr_is_preview) for (h.Wo = [], h.Wo.length = f.length, e = 0, l = f.length; e < l; e++) h.Wo[e] = f[e][1];
			h.Va = [];
			h.Va.length = f.length
		}
		e = 0;
		for (l = f.length; e < l; e++) h.Va[e] = f[e][0];
		if (v) {
			var w = a[0];
			h.x = ea(b) ? w[0] : b;
			h.y = ea(g) ? w[1] : g;
			h.z = w[2];
			h.width = w[3];
			h.height = w[4];
			h.depth = w[5];
			h.m = w[6];
			h.opacity = w[7];
			h.cc = w[8];
			h.ec = w[9];
			h.rb = w[10];
			e = w[11];
			!this.q && u.I.length && (h.rb = e);
			h.dh = gb(h.rb);
			this.p && hb(h, h.rb, this.p);
			if (h.vc) {
				e = 0;
				for (l = w[12].length; e < l; e++) for (f = 0, n = w[12][e].length; f < n; f++) h.Ea[e][f] = w[12][e][f];
				h.xa.set(0, 0, 0, 0);
				h.ve.set(0, 0, -1, -1);
				h.Pb.set(0, 0, -1, -1);
				h.Jb.qi(h.xa);
				W(h.cl)
			} else {
				h.Ea = w[12].slice(0);
				e = 0;
				for (l = h.Ea.length; e < l; e++) h.Ea[e] = w[12][e].slice(0);
				h.Y = [];
				h.pe = [];
				h.pe.length = u.I.length;
				h.xa = new ra(0, 0, 0, 0);
				h.ve = new ra(0, 0, -1, -1);
				h.Pb = new ra(0, 0, -1, -1);
				h.Jb = new ta;
				h.cl = [];
				h.r = Gb;
				h.Tx = Hb;
				h.zb = Ib;
				h.la = Jb;
				h.Ew = Kb;
				h.jr = Lb;
				h.ud = Mb
			}
			h.Ai = !1;
			h.Bw = 0;
			h.Aw = 0;
			h.zw = null;
			14 === w.length && (h.Ai = !0, h.Bw = w[13][0], h.Aw = w[13][1], h.zw = w[13][2]);
			e = 0;
			for (l = u.I.length; e < l; e++) h.pe[e] = !0;
			h.ee = !0;
			h.kd = Nb;
			h.kd();
			h.kr = !! h.Y.length;
			h.bl = !0;
			h.el = !0;
			u.Oi = !0;
			h.visible = !0;
			h.bi = -1;
			h.j = d;
			h.ld = d.e.length;
			h.ef = 0;
			"undefined" === typeof h.ba && (h.ba = null);
			this.ja = h.Ld = !0
		}
		var k;
		W(U);
		e = 0;
		for (l = u.za.length; e < l; e++) U.push.apply(U, u.za[e].Oa);
		U.push.apply(U, u.Oa);
		if (h.vc) for (e = 0, l = U.length; e < l; e++) {
			var D = U[e];
			k = h.H[e];
			k.vc = !0;
			D.behavior.Ta.call(k, D, h);
			w = a[4][e];
			f = 0;
			for (n = w.length; f < n; f++) k.O[f] = w[f];
			k.na();
			D.behavior.Fm.add(h)
		} else for (h.H = [], e = 0, l = U.length; e < l; e++) D = U[e], k = new D.behavior.Ta(D, h), k.vc = !1, k.O = a[4][e].slice(0), k.na(), h.H.push(k), D.behavior.Fm.add(h);
		w = a[5];
		if (h.vc) for (e = 0, l = w.length; e < l; e++) h.O[e] = w[e];
		else h.O = w.slice(0);
		this.Zc.push(h);
		this.Ce = !0;
		d && (d.Xg(h, !0), 1 !== d.Lc || 1 !== d.Mc) && (u.Pi = !0);
		this.bk++;
		if (u.Gc) {
			if (h.Gc = !0, h.vc ? W(h.siblings) : h.siblings = [], !c && !m) {
				e = 0;
				for (l = u.Zb.length; e < l; e++) if (u.Zb[e] !== u) {
					if (!u.Zb[e].Cc) return null;
					h.siblings.push(this.we(u.Zb[e].Cc, z, !1, v ? h.x : b, v ? h.y : g, !0))
				}
				e = 0;
				for (l = h.siblings.length; e < l; e++) for (h.siblings[e].siblings.push(h), f = 0; f < l; f++) e !== f && h.siblings[e].siblings.push(h.siblings[f])
			}
		} else h.Gc = !1, h.siblings = null;
		h.na();
		e = 0;
		for (l = h.H.length; e < l; e++) h.H[e].Qv && h.H[e].Qv();
		return h
	};
	h.prototype.Nl = function(a) {
		var d, c;
		d = 0;
		for (c = this.ma.J.length; d < c; d++) {
			var b = this.ma.J[d];
			if (jb(b.name, a)) return b
		}
		return null
	};
	h.prototype.oh = function(a) {
		a = T(a);
		0 > a && (a = 0);
		a >= this.ma.J.length && (a = this.ma.J.length - 1);
		return this.ma.J[a]
	};
	h.prototype.jl = function(a) {
		var d, c;
		d = 0;
		for (c = a.length; d < c; d++) a[d].Z().ka = !0
	};
	h.prototype.hi = function(a) {
		var d, c;
		d = 0;
		for (c = a.length; d < c; d++) a[d].hi()
	};
	h.prototype.nk = function(a) {
		var d, c;
		d = 0;
		for (c = a.length; d < c; d++) a[d].nk()
	};
	h.prototype.Af = function(a) {
		var d, c;
		d = 0;
		for (c = a.length; d < c; d++) a[d].Af()
	};
	h.prototype.hr = function(a) {
		if (a.Oi) {
			var d, c, b = a.e;
			d = 0;
			for (c = b.length; d < c; ++d) b[d].jr();
			b = this.Zc;
			d = 0;
			for (c = b.length; d < c; ++d) b[d].type === a && b[d].jr();
			a.Oi = !1
		}
	};
	h.prototype.Gl = function(a, d, c, b) {
		var g, e, m = a ? 1 !== a.Lc || 1 !== a.Mc : !1;
		if (d.L) for (a = 0, g = d.ug.length; a < g; ++a) e = d.ug[a], m || e.Pi ? za(b, e.e) : (this.hr(e), e.Xi.pk(c, b));
		else m || d.Pi ? za(b, d.e) : (this.hr(d), d.Xi.pk(c, b))
	};
	h.prototype.Oo = function(a, d, c, b) {
		var g, e;
		g = 0;
		for (e = d.length; g < e; ++g) this.Gl(a, d[g], c, b)
	};
	h.prototype.Ku = function(a, d, c) {
		var b = this.Nq;
		b && this.Oo(a, b.$j, d, c)
	};
	h.prototype.Du = function(a, d, c) {
		var b = this.ip;
		b && this.Oo(a, b.$j, d, c)
	};
	h.prototype.Ek = function(a, d, c) {
		var b = a.Z(),
			g, e, m, l, f, n;
		if (b.ka) for (b.ka = !1, W(b.e), g = 0, l = a.e.length; g < l; g++) m = a.e[g], m.la(), f = m.j.yb(d, c, !0), n = m.j.yb(d, c, !1), m.zb(f, n) && b.e.push(m);
		else {
			g = e = 0;
			for (l = b.e.length; g < l; g++) m = b.e[g], m.la(), f = m.j.yb(d, c, !0), n = m.j.yb(d, c, !1), m.zb(f, n) && (b.e[e] = b.e[g], e++);
			b.e.length = e
		}
		a.Wc();
		return b.Vl()
	};
	h.prototype.Tb = function(a, d) {
		if (!(a && d && a !== d && a.Ld && d.Ld)) return !1;
		a.la();
		d.la();
		var c = a.j,
			b = d.j,
			g, e, m, l, f, n, u, v;
		if (c === b || c.Lc === b.Lc && b.Mc === b.Mc && c.scale === b.scale && c.m === b.m && c.md === b.md) {
			if (!a.xa.gv(d.xa) || !a.Jb.Xo(d.Jb) || a.Ai && d.Ai) return !1;
			if (a.Ai) return this.Rq(a, d);
			if (d.Ai) return this.Rq(d, a);
			u = a.ba && !a.ba.hg();
			g = d.ba && !d.ba.hg();
			if (!u && !g) return !0;
			u ? (a.ba.Rf(a.width, a.height, a.m), u = a.ba) : (this.hd.Gg(a.Jb, a.x, a.y, a.width, a.height), u = this.hd);
			g ? (d.ba.Rf(d.width, d.height, d.m), v = d.ba) : (this.hd.Gg(d.Jb, d.x, d.y, d.width, d.height), v = this.hd);
			return u.yh(v, d.x - a.x, d.y - a.y)
		}
		u = a.ba && !a.ba.hg();
		g = d.ba && !d.ba.hg();
		u ? (a.ba.Rf(a.width, a.height, a.m), this.hd.Eq(a.ba)) : this.hd.Gg(a.Jb, a.x, a.y, a.width, a.height);
		u = this.hd;
		g ? (d.ba.Rf(d.width, d.height, d.m), this.vn.Eq(d.ba)) : this.vn.Gg(d.Jb, d.x, d.y, d.width, d.height);
		v = this.vn;
		g = 0;
		for (e = u.fd; g < e; g++) m = 2 * g, l = m + 1, f = u.Za[m], n = u.Za[l], u.Za[m] = c.Ba(f + a.x, n + a.y, !0), u.Za[l] = c.Ba(f + a.x, n + a.y, !1);
		u.la();
		g = 0;
		for (e = v.fd; g < e; g++) m = 2 * g, l = m + 1, f = v.Za[m], n = v.Za[l], v.Za[m] = b.Ba(f + d.x, n + d.y, !0), v.Za[l] = b.Ba(f + d.x, n + d.y, !1);
		v.la();
		return u.yh(v, 0, 0)
	};
	var S = new ta;
	new ra(0, 0, 0, 0);
	var y = [];
	h.prototype.Rq = function(a, d) {
		var c, b, g, m, e = d.xa,
			l = a.x,
			f = a.y;
		a.Zx(e, y);
		var n = d.ba && !d.ba.hg();
		c = 0;
		for (b = y.length; c < b; ++c) if (g = y[c], m = g.oy, e.hv(m, l, f) && (S.qi(m), S.offset(l, f), S.Xo(d.Jb))) if (n) if (d.ba.Rf(d.width, d.height, d.m), g.Vm) {
			if (g.Vm.yh(d.ba, d.x - (l + m.left), d.y - (f + m.top))) return W(y), !0
		} else {
			if (this.hd.Gg(S, 0, 0, m.right - m.left, m.bottom - m.top), this.hd.yh(d.ba, d.x, d.y)) return W(y), !0
		} else if (g.Vm) {
			if (this.hd.Gg(d.Jb, 0, 0, d.width, d.height), g.Vm.yh(this.hd, -(l + m.left), -(f + m.top))) return W(y), !0
		} else return W(y), !0;
		W(y);
		return !1
	};
	h.prototype.cr = function(a, d) {
		if (!d) return !1;
		var c, b, g, m, e;
		c = 0;
		for (b = a.Oa.length; c < b; c++) if (a.Oa[c].behavior instanceof d) return !0;
		if (!a.L) for (c = 0, b = a.za.length; c < b; c++) for (e = a.za[c], g = 0, m = e.Oa.length; g < m; g++) if (e.Oa[g].behavior instanceof d) return !0;
		return !1
	};
	h.prototype.Cn = function(a) {
		return this.cr(a, cc.ox)
	};
	h.prototype.Dn = function(a) {
		return this.cr(a, cc.qx)
	};
	var x = [];
	h.prototype.Db = function(a) {
		var d, c, b;
		a.la();
		this.Ku(a.j, a.xa, x);
		d = 0;
		for (c = x.length; d < c; ++d) if (b = x[d], b.S.solidEnabled && this.Tb(a, b)) return W(x), b;
		W(x);
		return null
	};
	var sa = [];
	h.prototype.he = function(a, d) {
		var c = null;
		d && (c = sa, W(c));
		a.la();
		this.Du(a.j, a.xa, x);
		var b, g, m;
		b = 0;
		for (g = x.length; b < g; ++b) if (m = x[b], m.S.jumpthruEnabled && this.Tb(a, m)) if (d) c.push(m);
		else return W(x), m;
		W(x);
		return c
	};
	h.prototype.Nc = function(a, d, c, b, g, m) {
		b = b || 50;
		var e = a.x,
			l = a.y,
			f, n = null,
			u = null;
		for (f = 0; f < b; f++) if (a.x = e + d * f, a.y = l + c * f, a.r(), !this.Tb(a, n) && ((n = this.Db(a)) && (u = n), !n && (g && (m ? n = this.Tb(a, m) ? m : null : n = this.he(a), n && (u = n)), !n))) return u && this.Ym(a, d, c, u), !0;
		a.x = e;
		a.y = l;
		a.r();
		return !1
	};
	h.prototype.Ym = function(a, d, c, b) {
		var g = 2,
			m, e = !1;
		m = !1;
		for (var l = a.x, f = a.y; 16 >= g;) m = 1 / g, g *= 2, a.x += d * m * (e ? 1 : -1), a.y += c * m * (e ? 1 : -1), a.r(), this.Tb(a, b) ? m = e = !0 : (m = e = !1, l = a.x, f = a.y);
		m && (a.x = l, a.y = f, a.r())
	};
	h.prototype.Xv = function(a, d) {
		var c = ea(d) ? 100 : d,
			b = 0,
			g = a.x,
			m = a.y,
			e = 0,
			l = 0,
			f = 0,
			n = this.Db(a);
		if (!n) return !0;
		for (; b <= c;) {
			switch (e) {
			case 0:
				l = 0;
				f = -1;
				b++;
				break;
			case 1:
				l = 1;
				f = -1;
				break;
			case 2:
				l = 1;
				f = 0;
				break;
			case 3:
				f = l = 1;
				break;
			case 4:
				l = 0;
				f = 1;
				break;
			case 5:
				l = -1;
				f = 1;
				break;
			case 6:
				l = -1;
				f = 0;
				break;
			case 7:
				f = l = -1
			}
			e = (e + 1) % 8;
			a.x = T(g + l * b);
			a.y = T(m + f * b);
			a.r();
			if (!this.Tb(a, n) && (n = this.Db(a), !n)) return !0
		}
		a.x = g;
		a.y = m;
		a.r();
		return !1
	};
	h.prototype.ki = function(a, d) {
		a.Ld && d.Ld && this.li.push([a, d])
	};
	h.prototype.Ys = function(a, d) {
		var c, b, g;
		c = 0;
		for (b = this.li.length; c < b; c++) if (g = this.li[c], g[0] == a && g[1] == d || g[0] == d && g[1] == a) return !0;
		return !1
	};
	var K = -1;
	h.prototype.trigger = function(a, d, c) {
		if (!this.ma) return !1;
		var b = this.ma.ff;
		if (!b) return !1;
		var g = !1,
			m, e, l;
		K++;
		var f = b.pl;
		e = 0;
		for (l = f.length; e < l; ++e) m = this.Zq(a, d, f[e], c), g = g || m;
		m = this.Zq(a, d, b, c);
		K--;
		return g || m
	};
	h.prototype.Zq = function(a, d, c, b) {
		var g = !1,
			m, e, l, f;
		if (d) for (l = this.An(a, d, d.type.name, c, b), g = g || l, f = d.type.za, m = 0, e = f.length; m < e; ++m) l = this.An(a, d, f[m].name, c, b), g = g || l;
		else l = this.An(a, d, "system", c, b), g = g || l;
		return g
	};
	h.prototype.An = function(a, d, c, b, g) {
		var m, e = !1,
			l = !1,
			l = "undefined" !== typeof g,
			f = (l ? b.Bo : b.$q)[c];
		if (!f) return e;
		var n = null;
		b = 0;
		for (m = f.length; b < m; ++b) if (f[b].method == a) {
			n = f[b].kh;
			break
		}
		if (!n) return e;
		var u;
		l ? u = n[g] : u = n;
		if (!u) return null;
		b = 0;
		for (m = u.length; b < m; b++) a = u[b][0], g = u[b][1], l = this.ru(d, c, a, g), e = e || l;
		return e
	};
	h.prototype.ru = function(a, d, c, b) {
		var g, m, e = !1;
		this.Bn++;
		var l = this.ib().Mb;
		l && this.hi(l.Pe);
		var f = 1 < this.Bn;
		this.hi(c.Pe);
		f && this.Wv();
		var n = this.ok(c);
		n.Mb = c;
		a && (g = this.types[d].Z(), g.ka = !1, W(g.e), g.e[0] = a, this.types[d].Wc());
		a = !0;
		if (c.parent) {
			d = n.Qq;
			for (g = c.parent; g;) d.push(g), g = g.parent;
			d.reverse();
			g = 0;
			for (m = d.length; g < m; g++) if (!d[g].gw()) {
				a = !1;
				break
			}
		}
		a && (this.lh++, c.Jc ? c.fw(b) : c.Ra(), e = e || n.tf);
		this.jk();
		f && this.Pv();
		this.Af(c.Pe);
		l && this.Af(l.Pe);
		this.Ce && 0 === this.Xd && 0 === K && !this.jm && this.pb();
		this.Bn--;
		return e
	};
	h.prototype.Hl = function() {
		var a = this.ib();
		return a.Mb.ab[a.$a]
	};
	h.prototype.Wv = function() {
		this.Vj++;
		this.Vj >= this.Am.length && this.Am.push([])
	};
	h.prototype.Pv = function() {
		this.Vj--
	};
	h.prototype.Io = function() {
		return this.Am[this.Vj]
	};
	h.prototype.ok = function(a) {
		this.kj++;
		this.kj >= this.tl.length && this.tl.push(new Ob);
		var d = this.ib();
		d.reset(a);
		return d
	};
	h.prototype.jk = function() {
		this.kj--
	};
	h.prototype.ib = function() {
		return this.tl[this.kj]
	};
	h.prototype.Ko = function(a, d) {
		for (var c, b, g, m, e, l; d;) {
			c = 0;
			for (b = d.Qc.length; c < b; c++) if (l = d.Qc[c], l instanceof Pb && jb(a, l.name)) return l;
			d = d.parent
		}
		c = 0;
		for (b = this.Rd.length; c < b; c++) for (e = this.Rd[c], g = 0, m = e.Ae.length; g < m; g++) if (l = e.Ae[g], l instanceof Pb && jb(a, l.name)) return l;
		return null
	};
	h.prototype.Lo = function(a) {
		var d, c;
		d = 0;
		for (c = this.bd.length; d < c; d++) if (this.bd[d].T === a) return this.bd[d];
		return null
	};
	h.prototype.zj = function(a) {
		var d, c;
		d = 0;
		for (c = this.n.length; d < c; d++) if (this.n[d].T === a) return this.n[d];
		return null
	};
	h.prototype.Au = function(a) {
		var d, c;
		d = 0;
		for (c = this.Pf.length; d < c; d++) if (this.Pf[d].T === a) return this.Pf[d];
		return null
	};
	h.prototype.mt = function(a, d) {
		this.ti = [a, d];
		this.ja = !0
	};
	h.prototype.Zu = function() {
		var d = this,
			c = this.kn,
			g = this.Yd,
			m = this.Qj,
			e = !1;
		this.Jq && (e = !0, c = "__c2_continuouspreview", this.Jq = !1);
		if (c.length) {
			this.pb();
			g = this.kw();
			if (r() && !this.tc) f(c, g, function() {
				C("Saved state to IndexedDB storage (" + g.length + " bytes)");
				d.Yd = g;
				d.trigger(Y.prototype.i.Uk, null);
				d.Yd = "";
				e && b()
			}, function(a) {
				try {
					localStorage.setItem("__c2save_" + c, g), C("Saved state to WebStorage (" + g.length + " bytes)"), d.Yd = g, d.trigger(Y.prototype.i.Uk, null), d.Yd = "", e && b()
				} catch (m) {
					C("Failed to save game state: " + a + "; " + m)
				}
			});
			else try {
				localStorage.setItem("__c2save_" + c, g), C("Saved state to WebStorage (" + g.length + " bytes)"), d.Yd = g, this.trigger(Y.prototype.i.Uk, null), d.Yd = "", e && b()
			} catch (l) {
				C("Error saving to WebStorage: " + l)
			}
			this.wb = this.Qj = this.kn = ""
		}
		if (m.length) {
			if (r() && !this.tc) a(m, function(a) {
				a ? (d.wb = a, C("Loaded state from IndexedDB storage (" + d.wb.length + " bytes)")) : (d.wb = localStorage.getItem("__c2save_" + m) || "", C("Loaded state from WebStorage (" + d.wb.length + " bytes)"));
				d.wi = !1;
				d.wb.length || d.trigger(Y.prototype.i.Tk, null)
			}, function() {
				d.wb = localStorage.getItem("__c2save_" + m) || "";
				C("Loaded state from WebStorage (" + d.wb.length + " bytes)");
				d.wi = !1;
				d.wb.length || d.trigger(Y.prototype.i.Tk, null)
			});
			else {
				try {
					this.wb = localStorage.getItem("__c2save_" + m) || "", C("Loaded state from WebStorage (" + this.wb.length + " bytes)")
				} catch (n) {
					this.wb = ""
				}
				this.wi = !1;
				d.wb.length || d.trigger(Y.prototype.i.Tk, null)
			}
			this.kn = this.Qj = ""
		}
		this.wb.length && (this.pb(), this.tv(this.wb), this.Yd = this.wb, this.trigger(Y.prototype.i.cs, null), this.wb = this.Yd = "")
	};
	h.prototype.kw = function() {
		var a, d, c, b, g, m, l, f = {
			c2save: !0,
			version: 1,
			rt: {
				time: this.jb.W,
				walltime: this.ke.W,
				timescale: this.Kg,
				tickcount: this.Fd,
				execcount: this.lh,
				next_uid: this.ci,
				running_layout: this.ma.T,
				start_time_offset: Date.now() - this.Ak
			},
			types: {},
			layouts: {},
			events: {
				groups: {},
				cnds: {},
				acts: {},
				vars: {}
			}
		};
		a = 0;
		for (d = this.n.length; a < d; a++) if (g = this.n[a], !g.L && !this.Cn(g)) {
			m = {
				instances: []
			};
			Wa(g.S) && (m.ex = e(g.S));
			c = 0;
			for (b = g.e.length; c < b; c++) m.instances.push(this.jn(g.e[c]));
			f.types[g.T.toString()] = m
		}
		a = 0;
		for (d = this.bd.length; a < d; a++) c = this.bd[a], f.layouts[c.T.toString()] = c.kc();
		b = f.events.groups;
		a = 0;
		for (d = this.Pf.length; a < d; a++) c = this.Pf[a], b[c.T.toString()] = this.Aj[c.uh].sh;
		d = f.events.cnds;
		for (l in this.ue) this.ue.hasOwnProperty(l) && (a = this.ue[l], Wa(a.S) && (d[l] = {
			ex: e(a.S)
		}));
		d = f.events.acts;
		for (l in this.qe) this.qe.hasOwnProperty(l) && (a = this.qe[l], Wa(a.S) && (d[l] = {
			ex: e(a.S)
		}));
		d = f.events.vars;
		for (l in this.Og) this.Og.hasOwnProperty(l) && (a = this.Og[l], a.Hj || a.parent && !a.Jh || (d[l] = a.data));
		f.system = this.Ed.kc();
		return JSON.stringify(f)
	};
	h.prototype.tq = function() {
		var a, d, c, b, g, m;
		this.ae = {};
		a = 0;
		for (d = this.n.length; a < d; a++) if (c = this.n[a], !c.L) for (b = 0, g = c.e.length; b < g; b++) m = c.e[b], this.ae[m.uid.toString()] = m
	};
	h.prototype.tv = function(a) {
		a = JSON.parse(a);
		if (a.c2save && !(1 < a.version)) {
			this.Dh = !0;
			var d = a.rt;
			this.jb.reset();
			this.jb.W = d.time;
			this.ke.reset();
			this.ke.W = d.walltime || 0;
			this.Kg = d.timescale;
			this.Fd = d.tickcount;
			this.lh = d.execcount;
			this.Ak = Date.now() - d.start_time_offset;
			var c = d.running_layout;
			if (c !== this.ma.T) if (c = this.Lo(c)) this.xo(c);
			else return;
			var b, g, m, e, l, f, n;
			f = a.types;
			for (g in f) if (f.hasOwnProperty(g) && (e = this.zj(parseInt(g, 10))) && !e.L && !this.Cn(e)) {
				f[g].ex ? e.S = f[g].ex : Xa(e.S);
				l = e.e;
				m = f[g].instances;
				c = 0;
				for (b = ja(l.length, m.length); c < b; c++) this.Rj(l[c], m[c]);
				c = m.length;
				for (b = l.length; c < b; c++) this.Te(l[c]);
				c = l.length;
				for (b = m.length; c < b; c++) {
					l = null;
					if (e.Fa.Ge && (l = this.ma.yj(m[c].w.l), !l)) continue;
					l = this.we(e.Cc, l, !1, 0, 0, !0);
					this.Rj(l, m[c])
				}
				e.Ig = !0
			}
			this.pb();
			this.tq();
			b = a.layouts;
			for (g in b) b.hasOwnProperty(g) && (c = this.Lo(parseInt(g, 10))) && c.Hc(b[g]);
			b = a.events.groups;
			for (g in b) b.hasOwnProperty(g) && (c = this.Au(parseInt(g, 10))) && this.Aj[c.uh] && this.Aj[c.uh].mw(b[g]);
			c = a.events.cnds;
			for (g in this.ue) this.ue.hasOwnProperty(g) && (c.hasOwnProperty(g) ? this.ue[g].S = c[g].ex : this.ue[g].S = {});
			c = a.events.acts;
			for (g in this.qe) this.qe.hasOwnProperty(g) && (c.hasOwnProperty(g) ? this.qe[g].S = c[g].ex : this.qe[g].S = {});
			c = a.events.vars;
			for (g in c) c.hasOwnProperty(g) && this.Og.hasOwnProperty(g) && (this.Og[g].data = c[g]);
			this.ci = d.next_uid;
			this.Dh = !1;
			c = 0;
			for (b = this.nj.length; c < b; ++c) l = this.nj[c], this.trigger(Object.getPrototypeOf(l.type.Fa).i.On, l);
			W(this.nj);
			this.Ed.Hc(a.system);
			c = 0;
			for (b = this.n.length; c < b; c++) if (e = this.n[c], !e.L && !this.Cn(e)) for (g = 0, a = e.e.length; g < a; g++) {
				l = e.e[g];
				if (e.Gc) for (f = l.rh(), W(l.siblings), d = 0, m = e.Zb.length; d < m; d++) n = e.Zb[d], e !== n && l.siblings.push(n.e[f]);
				l.Id && l.Id();
				if (l.H) for (d = 0, m = l.H.length; d < m; d++) f = l.H[d], f.Id && f.Id()
			}
			this.ja = !0
		}
	};
	h.prototype.jn = function(a, d) {
		var c, b, g, m, l;
		m = a.type;
		g = m.Fa;
		var f = {};
		d ? f.c2 = !0 : f.uid = a.uid;
		Wa(a.S) && (f.ex = e(a.S));
		if (a.Va && a.Va.length) for (f.ivs = {}, c = 0, b = a.Va.length; c < b; c++) f.ivs[a.type.em[c].toString()] = a.Va[c];
		if (g.Ge) {
			g = {
				x: a.x,
				y: a.y,
				w: a.width,
				h: a.height,
				l: a.j.T,
				zi: a.ud()
			};
			0 !== a.m && (g.a = a.m);
			1 !== a.opacity && (g.o = a.opacity);.5 !== a.cc && (g.hX = a.cc);.5 !== a.ec && (g.hY = a.ec);
			0 !== a.rb && (g.bm = a.rb);
			a.visible || (g.v = a.visible);
			a.Ld || (g.ce = a.Ld); - 1 !== a.bi && (g.mts = a.bi);
			if (m.I.length) for (g.fx = [], c = 0, b = m.I.length; c < b; c++) l = m.I[c], g.fx.push({
				name: l.name,
				active: a.pe[l.index],
				params: a.Ea[l.index]
			});
			f.w = g
		}
		if (a.H && a.H.length) for (f.behs = {}, c = 0, b = a.H.length; c < b; c++) m = a.H[c], m.kc && (f.behs[m.type.T.toString()] = m.kc());
		a.kc && (f.data = a.kc());
		return f
	};
	h.prototype.Cu = function(a, d) {
		var c, b;
		c = 0;
		for (b = a.em.length; c < b; c++) if (a.em[c] === d) return c;
		return -1
	};
	h.prototype.yu = function(a, d) {
		var c, b;
		c = 0;
		for (b = a.H.length; c < b; c++) if (a.H[c].type.T === d) return c;
		return -1
	};
	h.prototype.Rj = function(a, d, c) {
		var b, g, m, e, l;
		l = a.type;
		e = l.Fa;
		if (c) {
			if (!d.c2) return
		} else a.uid = d.uid;
		d.ex ? a.S = d.ex : Xa(a.S);
		if (g = d.ivs) for (b in g) g.hasOwnProperty(b) && (m = this.Cu(l, parseInt(b, 10)), 0 > m || m >= a.Va.length || (a.Va[m] = g[b]));
		if (e.Ge) {
			m = d.w;
			a.j.T !== m.l && (g = a.j, a.j = this.ma.yj(m.l), a.j ? (g.Cg(a, !0), a.j.Xg(a, !0), a.r(), a.j.pi(0)) : (a.j = g, c || this.Te(a)));
			a.x = m.x;
			a.y = m.y;
			a.width = m.w;
			a.height = m.h;
			a.ld = m.zi;
			a.m = m.hasOwnProperty("a") ? m.a : 0;
			a.opacity = m.hasOwnProperty("o") ? m.o : 1;
			a.cc = m.hasOwnProperty("hX") ? m.hX : .5;
			a.ec = m.hasOwnProperty("hY") ? m.hY : .5;
			a.visible = m.hasOwnProperty("v") ? m.v : !0;
			a.Ld = m.hasOwnProperty("ce") ? m.ce : !0;
			a.bi = m.hasOwnProperty("mts") ? m.mts : -1;
			a.rb = m.hasOwnProperty("bm") ? m.bm : 0;
			a.dh = gb(a.rb);
			this.p && hb(a, a.rb, this.p);
			a.r();
			if (m.hasOwnProperty("fx")) for (c = 0, g = m.fx.length; c < g; c++) e = l.Kl(m.fx[c].name), 0 > e || (a.pe[e] = m.fx[c].active, a.Ea[e] = m.fx[c].params);
			a.kd()
		}
		if (l = d.behs) for (b in l) l.hasOwnProperty(b) && (c = this.yu(a, parseInt(b, 10)), 0 > c || a.H[c].Hc(l[b]));
		d.data && a.Hc(d.data)
	};
	Qb = function(a) {
		return new h(document.getElementById(a))
	};
	Rb = function(a, d) {
		return new h({
			dc: !0,
			width: a,
			height: d
		})
	};
	window.cr_createRuntime = Qb;
	window.cr_createDCRuntime = Rb;
	window.createCocoonJSRuntime = function() {
		window.c2cocoonjs = !0;
		var a = document.createElement("screencanvas") || document.createElement("canvas");
		a.Zg = !0;
		document.body.appendChild(a);
		a = new h(a);
		window.c2runtime = a;
		window.addEventListener("orientationchange", function() {
			window.c2runtime.setSize(window.innerWidth, window.innerHeight)
		});
		window.c2runtime.setSize(window.innerWidth, window.innerHeight);
		return a
	};
	window.createEjectaRuntime = function() {
		var a = new h(document.getElementById("canvas"));
		window.c2runtime = a;
		window.c2runtime.setSize(window.innerWidth, window.innerHeight);
		return a
	}
})();
window.cr_getC2Runtime = function() {
	var k = document.getElementById("c2canvas");
	return k ? k.c2runtime : window.c2runtime ? window.c2runtime : null
};
window.cr_getSnapshot = function(k, p) {
	var h = window.cr_getC2Runtime();
	h && h.mt(k, p)
};
window.cr_sizeCanvas = function(k, p) {
	if (0 !== k && 0 !== p) {
		var h = window.cr_getC2Runtime();
		h && h.setSize(k, p)
	}
};
window.cr_setSuspended = function(k) {
	var p = window.cr_getC2Runtime();
	p && p.setSuspended(k)
};
(function() {
	function k(a, c) {
		this.b = a;
		this.ff = null;
		this.scrollX = this.b.Ya / 2;
		this.scrollY = this.b.Xa / 2;
		this.scale = 1;
		this.m = 0;
		this.$f = !0;
		this.name = c[0];
		this.width = c[1];
		this.height = c[2];
		this.dr = c[3];
		this.Hq = c[4];
		this.T = c[5];
		var b = c[6],
			g, e;
		this.J = [];
		this.xh = [];
		g = 0;
		for (e = b.length; g < e; g++) {
			var l = new Sb(this, b[g]);
			l.Rp = g;
			this.J.push(l)
		}
		b = c[7];
		this.pf = [];
		g = 0;
		for (e = b.length; g < e; g++) {
			var l = b[g],
				f = this.b.n[l[1]];
			f.Cc || (f.Cc = l);
			this.pf.push(l); - 1 === this.xh.indexOf(f) && this.xh.push(f)
		}
		this.I = [];
		this.Y = [];
		this.ee = !0;
		this.Ea = [];
		g = 0;
		for (e = c[8].length; g < e; g++) this.I.push({
			id: c[8][g][0],
			name: c[8][g][1],
			Sa: -1,
			dd: !1,
			mc: !0,
			index: g
		}), this.Ea.push(c[8][g][2].slice(0));
		this.kd();
		this.Bg = new ra(0, 0, 1, 1);
		this.an = new ra(0, 0, 1, 1);
		this.Me = {}
	}
	function p(a, c) {
		return a.ld - c.ld
	}
	function h(a, c) {
		this.cb = a;
		this.b = a.b;
		this.e = [];
		this.scale = 1;
		this.m = 0;
		this.Pd = !1;
		this.ie = new ra(0, 0, 0, 0);
		this.Yq = new ta;
		this.Ca = this.ua = this.Da = this.ta = 0;
		this.Jf = !1;
		this.me = -1;
		this.kl = 0;
		this.name = c[0];
		this.index = c[1];
		this.T = c[2];
		this.visible = c[3];
		this.Xc = c[4];
		this.jd = c[5];
		this.Lc = c[6];
		this.Mc = c[7];
		this.opacity = c[8];
		this.tj = c[9];
		this.zc = c[10];
		this.md = c[11];
		this.rb = c[12];
		this.Mt = c[13];
		this.dh = "source-over";
		this.sb = this.xb = 0;
		this.lb = null;
		this.Zd = q();
		this.gd = !0;
		this.pg = new ra(0, 0, -1, -1);
		this.gb = new ra(0, 0, -1, -1);
		this.zc && (this.lb = new fb(this.b.Ya, this.b.Xa));
		this.Cd = !1;
		var b = c[14],
			g, e;
		this.Oq = [];
		this.sc = [];
		this.fh = [];
		g = 0;
		for (e = b.length; g < e; g++) {
			var l = b[g],
				f = this.b.n[l[1]];
			f.Cc || (f.Cc = l, f.kt = this.index);
			this.sc.push(l); - 1 === this.cb.xh.indexOf(f) && this.cb.xh.push(f)
		}
		ya(this.Oq, this.sc);
		this.I = [];
		this.Y = [];
		this.ee = !0;
		this.Ea = [];
		g = 0;
		for (e = c[15].length; g < e; g++) this.I.push({
			id: c[15][g][0],
			name: c[15][g][1],
			Sa: -1,
			dd: !1,
			mc: !0,
			index: g
		}), this.Ea.push(c[15][g][2].slice(0));
		this.kd();
		this.Bg = new ra(0, 0, 1, 1);
		this.an = new ra(0, 0, 1, 1)
	}
	function q() {
		return a.length ? a.pop() : []
	}
	function r(d) {
		W(d);
		a.push(d)
	}
	k.prototype.jw = function(a) {
		var c = a.type.T.toString();
		this.Me.hasOwnProperty(c) || (this.Me[c] = []);
		this.Me[c].push(this.b.jn(a))
	};
	k.prototype.Qo = function() {
		var a = this.J[0];
		return !a.jd && 1 === a.opacity && !a.tj && a.visible
	};
	k.prototype.kd = function() {
		W(this.Y);
		this.ee = !0;
		var a, c, b;
		a = 0;
		for (c = this.I.length; a < c; a++) b = this.I[a], b.mc && (this.Y.push(b), b.dd || (this.ee = !1))
	};
	k.prototype.Jl = function(a) {
		var c, b, g;
		c = 0;
		for (b = this.I.length; c < b; c++) if (g = this.I[c], g.name === a) return g;
		return null
	};
	var t = [],
		f = !0;
	k.prototype.tn = function() {
		this.Hq && (this.ff = this.b.ul[this.Hq], this.ff.En());
		this.b.ma = this;
		this.scrollX = this.b.Ya / 2;
		this.scrollY = this.b.Xa / 2;
		var a, c, b, g, e, l, h;
		a = 0;
		for (b = this.b.n.length; a < b; a++) if (c = this.b.n[a], !c.L) for (e = c.e, c = 0, g = e.length; c < g; c++) if (l = e[c], l.j) {
			var m = l.j.Rp;
			m >= this.J.length && (m = this.J.length - 1);
			l.j = this.J[m]; - 1 === l.j.e.indexOf(l) && l.j.e.push(l);
			l.j.Jf = !0
		}
		if (!f) for (a = 0, b = this.J.length; a < b; ++a) this.J[a].e.sort(p);
		W(t);
		this.Ts();
		a = 0;
		for (b = this.J.length; a < b; a++) l = this.J[a], l.gt(), l.Mk();
		e = !1;
		if (!this.$f) {
			for (h in this.Me) if (this.Me.hasOwnProperty(h) && (c = this.b.zj(parseInt(h, 10))) && !c.L && this.b.Dn(c)) {
				g = this.Me[h];
				a = 0;
				for (b = g.length; a < b; a++) {
					l = null;
					if (c.Fa.Ge && (l = this.yj(g[a].w.l), !l)) continue;
					l = this.b.we(c.Cc, l, !1, 0, 0, !0);
					this.b.Rj(l, g[a]);
					e = !0;
					t.push(l)
				}
				W(g)
			}
			a = 0;
			for (b = this.J.length; a < b; a++) this.J[a].e.sort(p), this.J[a].Jf = !0
		}
		e && (this.b.pb(), this.b.tq());
		for (a = 0; a < t.length; a++) if (l = t[a], l.type.Gc) for (b = l.rh(), c = 0, g = l.type.Zb.length; c < g; c++) h = l.type.Zb[c], l.type !== h && (h.e.length > b ? l.siblings.push(h.e[b]) : h.Cc && (e = this.b.we(h.Cc, l.j, !0, l.x, l.y, !0), this.b.pb(), h.Kk(), l.siblings.push(e), t.push(e)));
		a = 0;
		for (b = this.pf.length; a < b; a++) this.b.we(this.pf[a], null, !0);
		this.b.bh = null;
		this.b.pb();
		if (this.b.fa && !this.b.Aa) for (a = 0, b = this.b.n.length; a < b; a++) h = this.b.n[a], !h.L && h.e.length && h.pq && h.pq(this.b.fa);
		if (this.b.Dh) ya(this.b.nj, t);
		else for (a = 0, b = t.length; a < b; a++) l = t[a], this.b.trigger(Object.getPrototypeOf(l.type.Fa).i.On, l);
		W(t);
		this.b.Dh || this.b.trigger(Y.prototype.i.Rn, null);
		this.$f = !1
	};
	k.prototype.et = function() {
		var a, c, b, g, e;
		c = a = 0;
		for (b = this.pf.length; a < b; a++) g = this.pf[a], e = this.b.n[g[1]], e.global ? e.Gc || this.b.we(g, null, !0) : (this.pf[c] = g, c++);
		xa(this.pf, c)
	};
	k.prototype.ww = function() {
		this.b.Dh || this.b.trigger(Y.prototype.i.bs, null);
		this.b.gm = !0;
		W(this.b.Ed.Xb);
		var a, c, b, g, e, l;
		if (!this.$f) for (a = 0, c = this.J.length; a < c; a++) for (this.J[a].Hn(), e = this.J[a].e, b = 0, g = e.length; b < g; b++) l = e[b], l.type.global || this.b.Dn(l.type) && this.jw(l);
		a = 0;
		for (c = this.J.length; a < c; a++) {
			e = this.J[a].e;
			b = 0;
			for (g = e.length; b < g; b++) l = e[b], l.type.global || this.b.Te(l);
			this.b.pb();
			W(e);
			this.J[a].Jf = !0
		}
		a = 0;
		for (c = this.b.n.length; a < c; a++) if (e = this.b.n[a], !(e.global || e.Fa.Ge || e.Fa.zk || e.L)) {
			b = 0;
			for (g = e.e.length; b < g; b++) this.b.Te(e.e[b]);
			this.b.pb()
		}
		f = !1;
		this.b.gm = !1
	};
	new ra(0, 0, 0, 0);
	k.prototype.Qd = function(a) {
		var c, b = a,
			g = !1,
			e = !this.b.pc;
		e && (this.b.Pj || (this.b.Pj = document.createElement("canvas"), c = this.b.Pj, c.width = this.b.B, c.height = this.b.A, this.b.op = c.getContext("2d"), g = !0), c = this.b.Pj, b = this.b.op, c.width !== this.b.B && (c.width = this.b.B, g = !0), c.height !== this.b.A && (c.height = this.b.A, g = !0), g && (b.webkitImageSmoothingEnabled = this.b.V, b.mozImageSmoothingEnabled = this.b.V, b.msImageSmoothingEnabled = this.b.V, b.imageSmoothingEnabled = this.b.V));
		b.globalAlpha = 1;
		b.globalCompositeOperation = "source-over";
		this.b.Zk && !this.Qo() && b.clearRect(0, 0, this.b.B, this.b.A);
		var l, f, g = 0;
		for (l = this.J.length; g < l; g++) f = this.J[g], f.visible && 0 < f.opacity && 11 !== f.rb && (f.e.length || !f.jd) ? f.Qd(b) : f.Mk();
		e && a.drawImage(c, 0, 0, this.b.width, this.b.height)
	};
	k.prototype.Vf = function(a) {
		a.Aq(!0);
		this.b.Qa || (this.b.Qa = a.oc(this.b.B, this.b.A, this.b.V));
		if (this.b.Qa.$e !== this.b.B || this.b.Qa.Ze !== this.b.A) a.deleteTexture(this.b.Qa), this.b.Qa = a.oc(this.b.B, this.b.A, this.b.V);
		a.Pc(this.b.Qa);
		this.b.pc || a.Ef(this.b.B, this.b.A);
		var c, b;
		for (c = this.J.length - 1; 0 <= c; --c) b = this.J[c], b.visible && 1 === b.opacity && b.ee && 0 === b.rb && (b.e.length || !b.jd) ? b.Vf(a) : b.Mk();
		a.Aq(!1)
	};
	k.prototype.Ec = function(a) {
		var c = 0 < this.Y.length || this.b.Mg || !this.b.pc || this.b.qa;
		if (c) {
			this.b.Qa || (this.b.Qa = a.oc(this.b.B, this.b.A, this.b.V));
			if (this.b.Qa.$e !== this.b.B || this.b.Qa.Ze !== this.b.A) a.deleteTexture(this.b.Qa), this.b.Qa = a.oc(this.b.B, this.b.A, this.b.V);
			a.Pc(this.b.Qa);
			this.b.pc || a.Ef(this.b.B, this.b.A)
		} else this.b.Qa && (a.Pc(null), a.deleteTexture(this.b.Qa), this.b.Qa = null);
		this.b.Zk && !this.Qo() && a.clear(0, 0, 0, 0);
		var b, g, e;
		b = 0;
		for (g = this.J.length; b < g; b++) e = this.J[b], e.visible && 0 < e.opacity && (e.e.length || !e.jd) ? e.Ec(a) : e.Mk();
		c && (0 === this.Y.length || 1 === this.Y.length && this.b.pc ? (1 === this.Y.length ? (c = this.Y[0].index, a.Sb(this.Y[0].Sa), a.Fg(null, 1 / this.b.B, 1 / this.b.A, 0, 0, 1, 1, this.scale, this.m, 0, 0, this.b.B / 2, this.b.A / 2, this.b.jb.W, this.Ea[c]), a.mk(this.Y[0].Sa) && (this.b.ja = !0)) : a.Sb(0), this.b.pc || a.Ef(this.b.width, this.b.height), a.Pc(null), a.zq(!1), a.Eg(1), a.xc(this.b.Qa), a.xq(), a.Oc(), a.yc(), c = this.b.width / 2, b = this.b.height / 2, a.ji(-c, b, c, b, c, -b, -c, -b), a.xc(null), a.zq(!0)) : this.bn(a, null, null, null))
	};
	k.prototype.ph = function() {
		return 0 < this.Y.length || this.b.Mg || !this.b.pc || this.b.qa ? this.b.Qa : null
	};
	k.prototype.Mo = function() {
		var a = this.J[0].ac(),
			c, b, g;
		c = 1;
		for (b = this.J.length; c < b; c++) g = this.J[c], (0 !== g.Lc || 0 !== g.Mc) && g.ac() < a && (a = g.ac());
		return a
	};
	k.prototype.vq = function(a) {
		if (!this.dr) {
			var c = 1 / this.Mo() * this.b.B / 2;
			a > this.width - c && (a = this.width - c);
			a < c && (a = c)
		}
		this.scrollX !== a && (this.scrollX = a, this.b.ja = !0)
	};
	k.prototype.wq = function(a) {
		if (!this.dr) {
			var c = 1 / this.Mo() * this.b.A / 2;
			a > this.height - c && (a = this.height - c);
			a < c && (a = c)
		}
		this.scrollY !== a && (this.scrollY = a, this.b.ja = !0)
	};
	k.prototype.Ts = function() {
		this.vq(this.scrollX);
		this.wq(this.scrollY)
	};
	k.prototype.bn = function(a, c, b, g) {
		var e = b ? b.Y : c ? c.Y : this.Y,
			l = 1,
			f = 0,
			m = 0,
			h = 0,
			u = this.b.B,
			k = this.b.A;
		b ? (l = b.j.ac(), f = b.j.Ka(), m = b.j.ta, h = b.j.ua, u = b.j.Da, k = b.j.Ca) : c && (l = c.ac(), f = c.Ka(), m = c.ta, h = c.ua, u = c.Da, k = c.Ca);
		var D = this.b.El,
			p, q, r, t, J = 0,
			U = 1,
			S, y = this.b.B,
			x = this.b.A,
			sa = y / 2,
			K = x / 2,
			A = c ? c.Bg : this.Bg,
			B = c ? c.an : this.an,
			H = 0,
			Q = 0,
			I = 0,
			G = 0,
			M = y,
			oa = y,
			P = x,
			pa = x,
			ka = r = 0;
		t = b ? b.j.Ka() : 0;
		if (b) {
			p = 0;
			for (q = e.length; p < q; p++) r += a.Hu(e[p].Sa), ka += a.Iu(e[p].Sa);
			G = b.xa;
			H = c.Ba(G.left, G.top, !0, !0);
			I = c.Ba(G.left, G.top, !1, !0);
			M = c.Ba(G.right, G.bottom, !0, !0);
			P = c.Ba(G.right, G.bottom, !1, !0);
			0 !== t && (p = c.Ba(G.right, G.top, !0, !0), q = c.Ba(G.right, G.top, !1, !0), Q = c.Ba(G.left, G.bottom, !0, !0), G = c.Ba(G.left, G.bottom, !1, !0), t = Math.min(H, M, p, Q), M = Math.max(H, M, p, Q), H = t, t = Math.min(I, P, q, G), P = Math.max(I, P, q, G), I = t);
			H -= r;
			I -= ka;
			M += r;
			P += ka;
			B.left = H / y;
			B.top = 1 - I / x;
			B.right = M / y;
			B.bottom = 1 - P / x;
			Q = H = T(H);
			G = I = T(I);
			oa = M = ma(M);
			pa = P = ma(P);
			Q -= r;
			G -= ka;
			oa += r;
			pa += ka;
			0 > H && (H = 0);
			0 > I && (I = 0);
			M > y && (M = y);
			P > x && (P = x);
			0 > Q && (Q = 0);
			0 > G && (G = 0);
			oa > y && (oa = y);
			pa > x && (pa = x);
			A.left = H / y;
			A.top = 1 - I / x;
			A.right = M / y;
			A.bottom = 1 - P / x
		} else A.left = B.left = 0, A.top = B.top = 0, A.right = B.right = 1, A.bottom = B.bottom = 1;
		ka = b && (a.fi(e[0].Sa) || 0 !== r || 0 !== ka || 1 !== b.opacity || b.type.Fa.Mp) || c && !b && 1 !== c.opacity;
		a.xq();
		if (ka) {
			D[J] || (D[J] = a.oc(y, x, this.b.V));
			if (D[J].$e !== y || D[J].Ze !== x) a.deleteTexture(D[J]), D[J] = a.oc(y, x, this.b.V);
			a.Sb(0);
			a.Pc(D[J]);
			S = pa - G;
			a.clearRect(Q, x - G - S, oa - Q, S);
			b ? b.Ec(a) : (a.xc(this.b.Wa), a.Eg(c.opacity), a.Oc(), a.translate(-sa, -K), a.yc(), a.Ne(H, P, M, P, M, I, H, I, A));
			B.left = B.top = 0;
			B.right = B.bottom = 1;
			b && (t = A.top, A.top = A.bottom, A.bottom = t);
			J = 1;
			U = 0
		}
		a.Eg(1);
		r = e.length - 1;
		var Ga = a.Xm(e[r].Sa) || !c && !b && !this.b.pc,
			va = 0;
		p = 0;
		for (q = e.length; p < q; p++) {
			D[J] || (D[J] = a.oc(y, x, this.b.V));
			if (D[J].$e !== y || D[J].Ze !== x) a.deleteTexture(D[J]), D[J] = a.oc(y, x, this.b.V);
			a.Sb(e[p].Sa);
			va = e[p].index;
			a.mk(e[p].Sa) && (this.b.ja = !0);
			0 != p || ka ? (a.Fg(g, 1 / y, 1 / x, B.left, B.top, B.right, B.bottom, l, f, m, h, (m + u) / 2, (h + k) / 2, this.b.jb.W, b ? b.Ea[va] : c ? c.Ea[va] : this.Ea[va]), a.xc(null), p !== r || Ga ? (a.Pc(D[J]), S = pa - G, t = x - G - S, a.clearRect(Q, t, oa - Q, S)) : (b ? a.Oe(b.xb, b.sb) : c && a.Oe(c.xb, c.sb), a.Pc(g)), a.xc(D[U]), a.Oc(), a.translate(-sa, -K), a.yc(), a.Ne(H, P, M, P, M, I, H, I, A), p !== r || Ga || a.xc(null)) : (a.Pc(D[J]), S = pa - G, t = x - G - S, a.clearRect(Q, t, oa - Q, S), b ? (a.Fg(g, 1 / b.width, 1 / b.height, B.left, B.top, B.right, B.bottom, l, f, m, h, (m + u) / 2, (h + k) / 2, this.b.jb.W, b.Ea[va]), b.Ec(a)) : (a.Fg(g, 1 / y, 1 / x, 0, 0, 1, 1, l, f, m, h, (m + u) / 2, (h + k) / 2, this.b.jb.W, c ? c.Ea[va] : this.Ea[va]), a.xc(c ? this.b.Wa : this.b.Qa), a.Oc(), a.translate(-sa, -K), a.yc(), a.Ne(H, P, M, P, M, I, H, I, A)), B.left = B.top = 0, B.right = B.bottom = 1, b && !Ga && (t = P, P = I, I = t));
			J = 0 === J ? 1 : 0;
			U = 0 === J ? 1 : 0
		}
		Ga && (a.Sb(0), b ? a.Oe(b.xb, b.sb) : c ? a.Oe(c.xb, c.sb) : this.b.pc || (a.Ef(this.b.width, this.b.height), sa = this.b.width / 2, K = this.b.height / 2, I = H = 0, M = this.b.width, P = this.b.height), a.Pc(g), a.xc(D[U]), a.Oc(), a.translate(-sa, -K), a.yc(), b && 1 === e.length && !ka ? a.Ne(H, I, M, I, M, P, H, P, A) : a.Ne(H, P, M, P, M, I, H, I, A), a.xc(null))
	};
	k.prototype.yj = function(a) {
		var c, b;
		c = 0;
		for (b = this.J.length; c < b; c++) if (this.J[c].T === a) return this.J[c];
		return null
	};
	k.prototype.kc = function() {
		var a, c, b, g = {
			sx: this.scrollX,
			sy: this.scrollY,
			s: this.scale,
			a: this.m,
			w: this.width,
			h: this.height,
			fv: this.$f,
			persist: this.Me,
			fx: [],
			layers: {}
		};
		a = 0;
		for (c = this.I.length; a < c; a++) b = this.I[a], g.fx.push({
			name: b.name,
			active: b.mc,
			params: this.Ea[b.index]
		});
		a = 0;
		for (c = this.J.length; a < c; a++) b = this.J[a], g.layers[b.T.toString()] = b.kc();
		return g
	};
	k.prototype.Hc = function(a) {
		var c, b, g, e;
		this.scrollX = a.sx;
		this.scrollY = a.sy;
		this.scale = a.s;
		this.m = a.a;
		this.width = a.w;
		this.height = a.h;
		this.Me = a.persist;
		"undefined" !== typeof a.fv && (this.$f = a.fv);
		var l = a.fx;
		c = 0;
		for (b = l.length; c < b; c++) if (g = this.Jl(l[c].name)) g.mc = l[c].active, this.Ea[g.index] = l[c].params;
		this.kd();
		c = a.layers;
		for (e in c) c.hasOwnProperty(e) && (a = this.yj(parseInt(e, 10))) && a.Hc(c[e])
	};
	Eb = k;
	h.prototype.kd = function() {
		W(this.Y);
		this.ee = !0;
		var a, c, b;
		a = 0;
		for (c = this.I.length; a < c; a++) b = this.I[a], b.mc && (this.Y.push(b), b.dd || (this.ee = !1))
	};
	h.prototype.Jl = function(a) {
		var c, b, g;
		c = 0;
		for (b = this.I.length; c < b; c++) if (g = this.I[c], g.name === a) return g;
		return null
	};
	h.prototype.gt = function() {
		var a, c, b, g, e, l;
		c = a = 0;
		for (b = this.sc.length; a < b; a++) {
			g = this.sc[a];
			e = this.b.n[g[1]];
			l = this.b.Dn(e);
			e = !0;
			if (!l || this.cb.$f) g = this.b.we(g, this, !0), t.push(g), g.type.global && (e = !1, this.fh.push(g.uid));
			e && (this.sc[c] = this.sc[a], c++)
		}
		this.sc.length = c;
		this.b.pb();
		!this.b.q && this.I.length && (this.rb = this.Mt);
		this.dh = gb(this.rb);
		this.b.p && hb(this, this.rb, this.b.p);
		this.gd = !0
	};
	h.prototype.Cg = function(a, c) {
		var b = Aa(this.e, a);
		0 > b || (c && this.zc && a.Pb && a.Pb.right >= a.Pb.left && (a.la(), this.lb.update(a, a.Pb, null), a.Pb.set(0, 0, -1, -1)), b === this.e.length - 1 ? this.e.pop() : (wa(this.e, b), this.pi(b)), this.gd = !0)
	};
	h.prototype.Xg = function(a, c) {
		a.ld = this.e.length;
		this.e.push(a);
		c && this.zc && a.Pb && a.r();
		this.gd = !0
	};
	h.prototype.Tv = function(a) {
		this.e.unshift(a);
		this.pi(0)
	};
	h.prototype.zv = function(a, c, b) {
		var g = a.ud();
		c = c.ud();
		wa(this.e, g);
		g < c && c--;
		b && c++;
		c === this.e.length ? this.e.push(a) : this.e.splice(c, 0, a);
		this.pi(g < c ? g : c)
	};
	h.prototype.pi = function(a) {
		-1 === this.me ? this.me = a : a < this.me && (this.me = a);
		this.gd = this.Jf = !0
	};
	h.prototype.Hn = function() {
		if (this.Jf) {
			-1 === this.me && (this.me = 0);
			var a, c, b;
			if (this.zc) for (a = this.me, c = this.e.length; a < c; ++a) b = this.e[a], b.ld = a, this.lb.wv(b.Pb);
			else for (a = this.me, c = this.e.length; a < c; ++a) this.e[a].ld = a;
			this.Jf = !1;
			this.me = -1
		}
	};
	h.prototype.ac = function(a) {
		return this.Eu() * (this.b.pc || a ? this.b.Yg : 1)
	};
	h.prototype.Eu = function() {
		return (this.scale * this.cb.scale - 1) * this.md + 1
	};
	h.prototype.Ka = function() {
		return this.Pd ? 0 : Fa(this.cb.m + this.m)
	};
	var a = [],
		b = [],
		e = [];
	h.prototype.Pl = function() {
		this.Hn();
		this.lb.pk(this.ta, this.ua, this.Da, this.Ca, e);
		if (!e.length) return q();
		if (1 === e.length) {
			var a = q();
			ya(a, e[0]);
			W(e);
			return a
		}
		for (var c = !0; 1 < e.length;) {
			for (var a = e, f = void 0, g = void 0, h = void 0, l = void 0, k = void 0, f = 0, g = a.length; f < g - 1; f += 2) {
				var h = a[f],
					l = a[f + 1],
					k = q(),
					m = h,
					v = l,
					u = k,
					p = 0,
					D = 0,
					L = 0,
					t = m.length,
					N = v.length,
					F = void 0,
					J = void 0;
				for (u.length = t + N; p < t && D < N; ++L) F = m[p], J = v[D], F.ld < J.ld ? (u[L] = F, ++p) : (u[L] = J, ++D);
				for (; p < t; ++p, ++L) u[L] = m[p];
				for (; D < N; ++D, ++L) u[L] = v[D];
				c || (r(h), r(l));
				b.push(k)
			}
			1 === g % 2 && (c ? (h = q(), ya(h, a[g - 1]), b.push(h)) : b.push(a[g - 1]));
			ya(a, b);
			W(b);
			c = !1
		}
		a = e[0];
		W(e);
		return a
	};
	h.prototype.Qd = function(a) {
		this.Cd = this.tj || 1 !== this.opacity || 0 !== this.rb;
		var c = this.b.canvas,
			b = a,
			g = !1;
		this.Cd && (this.b.Oj || (this.b.Oj = document.createElement("canvas"), c = this.b.Oj, c.width = this.b.B, c.height = this.b.A, this.b.np = c.getContext("2d"), g = !0), c = this.b.Oj, b = this.b.np, c.width !== this.b.B && (c.width = this.b.B, g = !0), c.height !== this.b.A && (c.height = this.b.A, g = !0), g && (b.webkitImageSmoothingEnabled = this.b.V, b.mozImageSmoothingEnabled = this.b.V, b.msImageSmoothingEnabled = this.b.V, b.imageSmoothingEnabled = this.b.V), this.jd && b.clearRect(0, 0, this.b.B, this.b.A));
		b.globalAlpha = 1;
		b.globalCompositeOperation = "source-over";
		this.jd || (b.fillStyle = "rgb(" + this.Xc[0] + "," + this.Xc[1] + "," + this.Xc[2] + ")", b.fillRect(0, 0, this.b.B, this.b.A));
		b.save();
		this.Pd = !0;
		var g = this.yb(0, 0, !0, !0),
			e = this.yb(0, 0, !1, !0);
		this.Pd = !1;
		this.b.be && (g = Math.round(g), e = Math.round(e));
		this.rk(g, e, b);
		var l = this.ac();
		b.scale(l, l);
		b.translate(-g, -e);
		this.zc ? (this.gb.left = this.lb.Eb(this.ta), this.gb.top = this.lb.Fb(this.ua), this.gb.right = this.lb.Eb(this.Da), this.gb.bottom = this.lb.Fb(this.Ca), this.gd || !this.gb.jh(this.pg) ? (r(this.Zd), g = this.Pl(), this.gd = !1, this.pg.Sf(this.gb)) : g = this.Zd) : g = this.e;
		for (var f, m = null, e = 0, l = g.length; e < l; ++e) f = g[e], f !== m && (this.Ht(f, b), m = f);
		this.zc && (this.Zd = g);
		b.restore();
		this.Cd && (a.globalCompositeOperation = this.dh, a.globalAlpha = this.opacity, a.drawImage(c, 0, 0))
	};
	h.prototype.Ht = function(a, b) {
		if (a.visible && 0 !== a.width && 0 !== a.height) {
			a.la();
			var e = a.xa;
			e.right < this.ta || e.bottom < this.ua || e.left > this.Da || e.top > this.Ca || (b.globalCompositeOperation = a.dh, a.Qd(b))
		}
	};
	h.prototype.Mk = function() {
		this.Pd = !0;
		var a = this.yb(0, 0, !0, !0),
			b = this.yb(0, 0, !1, !0);
		this.Pd = !1;
		this.b.be && (a = Math.round(a), b = Math.round(b));
		this.rk(a, b, null)
	};
	h.prototype.rk = function(a, b, e) {
		var g = this.ac();
		this.ta = a;
		this.ua = b;
		this.Da = a + 1 / g * this.b.B;
		this.Ca = b + 1 / g * this.b.A;
		a = this.Ka();
		0 !== a && (e && (e.translate(this.b.B / 2, this.b.A / 2), e.rotate(-a), e.translate(this.b.B / -2, this.b.A / -2)), this.ie.set(this.ta, this.ua, this.Da, this.Ca), this.ie.offset((this.ta + this.Da) / -2, (this.ua + this.Ca) / -2), this.Yq.Fq(this.ie, a), this.Yq.no(this.ie), this.ie.offset((this.ta + this.Da) / 2, (this.ua + this.Ca) / 2), this.ta = this.ie.left, this.ua = this.ie.top, this.Da = this.ie.right, this.Ca = this.ie.bottom)
	};
	h.prototype.Vf = function(a) {
		if (this.Cd = this.tj) {
			this.b.Wa || (this.b.Wa = a.oc(this.b.B, this.b.A, this.b.V));
			if (this.b.Wa.$e !== this.b.B || this.b.Wa.Ze !== this.b.A) a.deleteTexture(this.b.Wa), this.b.Wa = a.oc(this.b.B, this.b.A, this.b.V);
			a.Pc(this.b.Wa)
		}
		this.Pd = !0;
		var b = this.yb(0, 0, !0, !0),
			e = this.yb(0, 0, !1, !0);
		this.Pd = !1;
		this.b.be && (b = Math.round(b), e = Math.round(e));
		this.rk(b, e, null);
		b = this.ac();
		a.Oc();
		a.scale(b, b);
		a.sk(-this.Ka());
		a.translate((this.ta + this.Da) / -2, (this.ua + this.Ca) / -2);
		a.yc();
		this.zc ? (this.gb.left = this.lb.Eb(this.ta), this.gb.top = this.lb.Fb(this.ua), this.gb.right = this.lb.Eb(this.Da), this.gb.bottom = this.lb.Fb(this.Ca), this.gd || !this.gb.jh(this.pg) ? (r(this.Zd), b = this.Pl(), this.gd = !1, this.pg.Sf(this.gb)) : b = this.Zd) : b = this.e;
		for (var g, f = null, e = b.length - 1; 0 <= e; --e) g = b[e], g !== f && (this.Jt(b[e], a), f = g);
		this.zc && (this.Zd = b);
		this.jd || (this.kl = this.b.ef++, a.wk(this.kl), a.yq(1, 1, 1), a.Eo(), a.aw())
	};
	h.prototype.Ec = function(a) {
		var b = 0,
			e = 0;
		if (this.Cd = this.tj || 1 !== this.opacity || 0 < this.Y.length || 0 !== this.rb) {
			this.b.Wa || (this.b.Wa = a.oc(this.b.B, this.b.A, this.b.V));
			if (this.b.Wa.$e !== this.b.B || this.b.Wa.Ze !== this.b.A) a.deleteTexture(this.b.Wa), this.b.Wa = a.oc(this.b.B, this.b.A, this.b.V);
			a.Pc(this.b.Wa);
			this.jd && a.clear(0, 0, 0, 0)
		}
		this.jd || (this.b.qa ? (a.wk(this.kl), a.yq(this.Xc[0] / 255, this.Xc[1] / 255, this.Xc[2] / 255), a.Eo(), a.rw()) : a.clear(this.Xc[0] / 255, this.Xc[1] / 255, this.Xc[2] / 255, 1));
		this.Pd = !0;
		var g = this.yb(0, 0, !0, !0),
			b = this.yb(0, 0, !1, !0);
		this.Pd = !1;
		this.b.be && (g = Math.round(g), b = Math.round(b));
		this.rk(g, b, null);
		g = this.ac();
		a.Oc();
		a.scale(g, g);
		a.sk(-this.Ka());
		a.translate((this.ta + this.Da) / -2, (this.ua + this.Ca) / -2);
		a.yc();
		this.zc ? (this.gb.left = this.lb.Eb(this.ta), this.gb.top = this.lb.Fb(this.ua), this.gb.right = this.lb.Eb(this.Da), this.gb.bottom = this.lb.Fb(this.Ca), this.gd || !this.gb.jh(this.pg) ? (r(this.Zd), b = this.Pl(), this.gd = !1, this.pg.Sf(this.gb)) : b = this.Zd) : b = this.e;
		var f, l, h = null,
			e = 0;
		for (f = b.length; e < f; ++e) l = b[e], l !== h && (this.It(b[e], a), h = l);
		this.zc && (this.Zd = b);
		this.Cd && (b = this.Y.length ? this.Y[0].Sa : 0, e = this.Y.length ? this.Y[0].index : 0, 0 === this.Y.length || 1 === this.Y.length && !a.Xm(b) && 1 === this.opacity ? (1 === this.Y.length ? (a.Sb(b), a.Fg(this.cb.ph(), 1 / this.b.B, 1 / this.b.A, 0, 0, 1, 1, g, this.Ka(), this.ta, this.ua, (this.ta + this.Da) / 2, (this.ua + this.Ca) / 2, this.b.jb.W, this.Ea[e]), a.mk(b) && (this.b.ja = !0)) : a.Sb(0), a.Pc(this.cb.ph()), a.Eg(this.opacity), a.xc(this.b.Wa), a.Oe(this.xb, this.sb), a.Oc(), a.yc(), g = this.b.B / 2, b = this.b.A / 2, a.ji(-g, b, g, b, g, -b, -g, -b), a.xc(null)) : this.cb.bn(a, this, null, this.cb.ph()))
	};
	h.prototype.It = function(a, b) {
		if (a.visible && 0 !== a.width && 0 !== a.height) {
			a.la();
			var e = a.xa;
			e.right < this.ta || e.bottom < this.ua || e.left > this.Da || e.top > this.Ca || (b.wk(a.ef), a.kr ? this.Kt(a, b) : (b.Sb(0), b.Oe(a.xb, a.sb), a.Ec(b)))
		}
	};
	h.prototype.Jt = function(a, b) {
		if (a.visible && 0 !== a.width && 0 !== a.height) {
			a.la();
			var e = a.xa;
			e.right < this.ta || e.bottom < this.ua || e.left > this.Da || e.top > this.Ca || (a.ef = this.b.ef++, 0 === a.rb && 1 === a.opacity && a.ee && a.Vf && (b.wk(a.ef), a.Vf(b)))
		}
	};
	h.prototype.Kt = function(a, b) {
		var e = a.Y[0].Sa,
			g = a.Y[0].index,
			f = this.ac();
		if (1 !== a.Y.length || b.Xm(e) || b.Vv(e) || (a.m || a.j.Ka()) && b.fi(e) || 1 !== a.opacity || a.type.Fa.Mp) this.cb.bn(b, this, a, this.Cd ? this.b.Wa : this.cb.ph()), b.Oc(), b.scale(f, f), b.sk(-this.Ka()), b.translate((this.ta + this.Da) / -2, (this.ua + this.Ca) / -2), b.yc();
		else {
			b.Sb(e);
			b.Oe(a.xb, a.sb);
			b.mk(e) && (this.b.ja = !0);
			var l = 0,
				h = 0,
				m = 0,
				v = 0;
			b.fi(e) && (e = a.xa, l = this.Ba(e.left, e.top, !0, !0), h = this.Ba(e.left, e.top, !1, !0), m = this.Ba(e.right, e.bottom, !0, !0), e = this.Ba(e.right, e.bottom, !1, !0), l = l / windowWidth, h = 1 - h / windowHeight, m = m / windowWidth, v = 1 - e / windowHeight);
			b.Fg(this.Cd ? this.b.Wa : this.cb.ph(), 1 / a.width, 1 / a.height, l, h, m, v, f, this.Ka(), this.ta, this.ua, (this.ta + this.Da) / 2, (this.ua + this.Ca) / 2, this.b.jb.W, a.Ea[g]);
			a.Ec(b)
		}
	};
	h.prototype.yb = function(a, b, e, g) {
		var f = this.b.devicePixelRatio;
		this.b.Fe && (a *= f, b *= f);
		var f = this.b.iq,
			l = this.b.jq,
			f = (this.cb.scrollX - f) * this.Lc + f,
			l = (this.cb.scrollY - l) * this.Mc + l,
			h = f,
			m = l,
			v = 1 / this.ac(!g);
		g ? (h -= this.b.B * v / 2, m -= this.b.A * v / 2) : (h -= this.b.width * v / 2, m -= this.b.height * v / 2);
		h += a * v;
		m += b * v;
		b = this.Ka();
		0 !== b && (h -= f, m -= l, a = Math.cos(b), b = Math.sin(b), g = h * a - m * b, m = m * a + h * b, h = g + f, m += l);
		return e ? h : m
	};
	h.prototype.Ba = function(a, b, e, g) {
		var f = this.b.iq,
			l = this.b.jq,
			h = (this.cb.scrollX - f) * this.Lc + f,
			m = (this.cb.scrollY - l) * this.Mc + l,
			l = h,
			f = m,
			v = this.Ka();
		if (0 !== v) {
			a -= h;
			b -= m;
			var u = Math.cos(-v),
				v = Math.sin(-v),
				k = a * u - b * v;
			b = b * u + a * v;
			a = k + h;
			b += m
		}
		h = 1 / this.ac(!g);
		g ? (l -= this.b.B * h / 2, f -= this.b.A * h / 2) : (l -= this.b.width * h / 2, f -= this.b.height * h / 2);
		l = (a - l) / h;
		f = (b - f) / h;
		a = this.b.devicePixelRatio;
		this.b.Fe && !g && (l /= a, f /= a);
		return e ? l : f
	};
	h.prototype.kc = function() {
		var a, b, e, g = {
			s: this.scale,
			a: this.m,
			vl: this.ta,
			vt: this.ua,
			vr: this.Da,
			vb: this.Ca,
			v: this.visible,
			bc: this.Xc,
			t: this.jd,
			px: this.Lc,
			py: this.Mc,
			o: this.opacity,
			zr: this.md,
			fx: [],
			cg: this.fh,
			instances: []
		};
		a = 0;
		for (b = this.I.length; a < b; a++) e = this.I[a], g.fx.push({
			name: e.name,
			active: e.mc,
			params: this.Ea[e.index]
		});
		return g
	};
	h.prototype.Hc = function(a) {
		var b, e, g;
		this.scale = a.s;
		this.m = a.a;
		this.ta = a.vl;
		this.ua = a.vt;
		this.Da = a.vr;
		this.Ca = a.vb;
		this.visible = a.v;
		this.Xc = a.bc;
		this.jd = a.t;
		this.Lc = a.px;
		this.Mc = a.py;
		this.opacity = a.o;
		this.md = a.zr;
		this.fh = a.cg || [];
		ya(this.sc, this.Oq);
		var f = new ba;
		b = 0;
		for (g = this.fh.length; b < g; ++b) f.add(this.fh[b]);
		e = b = 0;
		for (g = this.sc.length; b < g; ++b) f.contains(this.sc[b][2]) || (this.sc[e] = this.sc[b], ++e);
		xa(this.sc, e);
		e = a.fx;
		b = 0;
		for (g = e.length; b < g; b++) if (a = this.Jl(e[b].name)) a.mc = e[b].active, this.Ea[a.index] = e[b].params;
		this.kd();
		this.e.sort(p);
		this.Jf = !0
	};
	Sb = h
})();
(function() {
	function k(a, b) {
		var c, d = a.length;
		switch (d) {
		case 0:
			return !0;
		case 1:
			return a[0] === b[0];
		case 2:
			return a[0] === b[0] && a[1] === b[1];
		default:
			for (c = 0; c < d; c++) if (a[c] !== b[c]) return !1;
			return !0
		}
	}
	function p(a, b) {
		return a.index - b.index
	}
	function h(a) {
		var b, c, d, e;
		2 === a.length ? a[0].index > a[1].index && (b = a[0], a[0] = a[1], a[1] = b) : 2 < a.length && a.sort(p);
		a.length >= z.length && (z.length = a.length + 1);
		z[a.length] || (z[a.length] = []);
		e = z[a.length];
		b = 0;
		for (c = e.length; b < c; b++) if (d = e[b], k(a, d)) return d;
		e.push(a);
		return a
	}

	function q(a, b) {
		this.b = a;
		this.$q = {};
		this.Bo = {};
		this.Wl = !1;
		this.So = new ba;
		this.pl = [];
		this.$k = [];
		this.name = b[0];
		var c = b[1];
		this.Ae = [];
		var d, e;
		d = 0;
		for (e = c.length; d < e; d++) this.Uo(c[d], null, this.Ae)
	}
	function r(a) {
		this.type = a;
		this.e = [];
		this.R = [];
		this.ka = !0
	}
	function t(a, b, c) {
		this.sheet = a;
		this.parent = b;
		this.b = a.b;
		this.pa = [];
		this.Pe = [];
		this.Ro = this.Hk = this.zn = this.cm = this.group = this.Mq = !1;
		this.ab = [];
		this.Tc = [];
		this.Qc = [];
		this.uh = "";
		this.sh = this.cm = this.group = !1;
		this.Yi = null;
		c[1] && (this.uh = c[1][1].toLowerCase(), this.group = !0, this.cm = !! c[1][0], this.Yi = [], this.sh = this.cm, this.b.Pf.push(this), this.b.Aj[this.uh] = this);
		this.Jc = c[2];
		this.T = c[4];
		this.group || (this.b.mo[this.T.toString()] = this);
		var d = c[5];
		a = 0;
		for (b = d.length; a < b; a++) {
			var e = new Tb(this, d[a]);
			e.index = a;
			this.ab.push(e);
			this.fo(e.type)
		}
		d = c[6];
		a = 0;
		for (b = d.length; a < b; a++) e = new Ub(this, d[a]), e.index = a, this.Tc.push(e);
		if (8 === c.length) for (c = c[7], a = 0, b = c.length; a < b; a++) this.sheet.Uo(c[a], this, this.Qc);
		this.Ij = !1;
		this.ab.length && (this.Ij = null == this.ab[0].type && this.ab[0].hb == Y.prototype.i.Nn)
	}
	function f(a, b) {
		var c, d, e;
		if (a && (-1 === b.indexOf(a) && b.push(a), a.Gc)) for (c = 0, d = a.Zb.length; c < d; c++) e = a.Zb[c], a !== e && -1 === b.indexOf(e) && b.push(e)
	}
	function a(a, b) {
		this.nc = a;
		this.sheet = a.sheet;
		this.b = a.b;
		this.N = [];
		this.Ga = [];
		this.S = {};
		this.index = -1;
		this.Vg = !1;
		this.hb = this.b.ne(b[1]);
		this.trigger = 0 < b[3];
		this.Ao = 2 === b[3];
		this.yd = b[4];
		this.Dj = b[5];
		this.rv = b[6];
		this.T = b[7];
		this.b.ue[this.T.toString()] = this; - 1 === b[0] ? (this.type = null, this.Ra = this.hn, this.Ye = null, this.Yc = -1) : (this.type = this.b.n[b[0]], this.Ra = this.rv ? this.hw : this.gn, b[2] ? (this.Ye = this.type.xj(b[2]), this.Yc = this.type.Fl(b[2])) : (this.Ye = null, this.Yc = -1), this.nc.parent && this.nc.parent.xk());
		this.Ao && (this.Ra = this.iw);
		if (10 === b.length) {
			var c, d, e = b[9];
			c = 0;
			for (d = e.length; c < d; c++) {
				var g = new Vb(this, e[c]);
				this.N.push(g)
			}
			this.Ga.length = e.length
		}
	}
	function b(a, b) {
		this.nc = a;
		this.sheet = a.sheet;
		this.b = a.b;
		this.N = [];
		this.Ga = [];
		this.S = {};
		this.index = -1;
		this.Vg = !1;
		this.hb = this.b.ne(b[1]); - 1 === b[0] ? (this.type = null, this.Ra = this.hn, this.Ye = null, this.Yc = -1) : (this.type = this.b.n[b[0]], this.Ra = this.gn, b[2] ? (this.Ye = this.type.xj(b[2]), this.Yc = this.type.Fl(b[2])) : (this.Ye = null, this.Yc = -1));
		this.T = b[3];
		this.b.qe[this.T.toString()] = this;
		if (6 === b.length) {
			var c, d, e = b[5];
			c = 0;
			for (d = e.length; c < d; c++) {
				var g = new Vb(this, e[c]);
				this.N.push(g)
			}
			this.Ga.length = e.length
		}
	}
	function e() {
		w++;
		l.length === w && l.push(new Wb);
		return l[w]
	}
	function d(a, b) {
		this.Kc = a;
		this.nc = a.nc;
		this.sheet = a.sheet;
		this.b = a.b;
		this.type = b[0];
		this.rd = null;
		this.fe = 0;
		this.get = null;
		this.so = 0;
		this.cb = null;
		this.key = 0;
		this.object = null;
		this.index = 0;
		this.Ci = this.Gf = this.Ci = this.Gf = this.Co = this.gf = this.Di = null;
		this.Sc = !1;
		var c, d, e;
		switch (b[0]) {
		case 0:
		case 7:
			this.rd = new Xb(this, b[1]);
			this.fe = 0;
			this.get = this.Ou;
			break;
		case 1:
			this.rd = new Xb(this, b[1]);
			this.fe = 0;
			this.get = this.Pu;
			break;
		case 5:
			this.rd = new Xb(this, b[1]);
			this.fe = 0;
			this.get = this.Tu;
			break;
		case 3:
		case 8:
			this.so = b[1];
			this.get = this.Mu;
			break;
		case 6:
			this.cb = this.b.tm[b[1]];
			this.get = this.Uu;
			break;
		case 9:
			this.key = b[1];
			this.get = this.Su;
			break;
		case 4:
			this.object = this.b.n[b[1]];
			this.get = this.Vu;
			this.nc.fo(this.object);
			this.Kc instanceof Ub ? this.nc.xk() : this.nc.parent && this.nc.parent.xk();
			break;
		case 10:
			this.index = b[1];
			a.type.L ? (this.get = this.Qu, this.Sc = !0) : this.get = this.Ru;
			break;
		case 11:
			this.Di = b[1];
			this.gf = null;
			this.get = this.Nu;
			break;
		case 2:
		case 12:
			this.Co = b[1];
			this.get = this.Lu;
			break;
		case 13:
			for (this.get = this.Wu, this.Gf = [], this.Ci = [], c = 1, d = b.length; c < d; c++) e = new Vb(this.Kc, b[c]), this.Gf.push(e), this.Ci.push(0)
		}
	}
	function c(a, b, c) {
		this.sheet = a;
		this.parent = b;
		this.b = a.b;
		this.pa = [];
		this.name = c[1];
		this.Ok = c[2];
		this.$l = c[3];
		this.Jh = !! c[4];
		this.Hj = !! c[5];
		this.T = c[6];
		this.b.Og[this.T.toString()] = this;
		this.data = this.$l;
		this.parent ? (this.xf = this.Jh || this.Hj ? -1 : this.b.uw++, this.b.Os.push(this)) : (this.xf = -1, this.b.Ns.push(this))
	}
	function n(a, b, c) {
		this.sheet = a;
		this.parent = b;
		this.b = a.b;
		this.pa = [];
		this.wh = null;
		this.bv = c[1];
		this.mc = !0
	}
	function g() {
		this.Qq = [];
		this.reset(null)
	}
	var z = [];
	q.prototype.toString = function() {
		return this.name
	};
	q.prototype.Uo = function(a, b, c) {
		switch (a[0]) {
		case 0:
			a = new Yb(this, b, a);
			if (a.Jc) for (c.push(a), c = 0, b = a.ab.length; c < b; c++) a.ab[c].trigger && this.Vo(a, c);
			else a.fp() ? this.Vo(a, 0) : c.push(a);
			break;
		case 1:
			a = new Pb(this, b, a);
			c.push(a);
			break;
		case 2:
			a = new Zb(this, b, a), c.push(a)
		}
	};
	q.prototype.Na = function() {
		var a, b;
		a = 0;
		for (b = this.Ae.length; a < b; a++) this.Ae[a].Na(a < b - 1 && this.Ae[a + 1].Ij)
	};
	q.prototype.En = function() {
		W(this.pl);
		W(this.$k);
		this.eo(this);
		W(this.$k)
	};
	q.prototype.eo = function(a) {
		var b, c, d, e, g = a.pl,
			f = a.$k,
			l = this.So.Se();
		b = 0;
		for (c = l.length; b < c; ++b) d = l[b], e = d.wh, !d.mc || a === e || -1 < f.indexOf(e) || (f.push(e), e.eo(a), g.push(e))
	};
	q.prototype.Ra = function(a) {
		this.b.qy || (this.Wl = !0, a || (this.b.jm = !0));
		var b, c;
		b = 0;
		for (c = this.Ae.length; b < c; b++) {
			var d = this.Ae[b];
			d.Ra();
			this.b.jl(d.pa);
			this.b.Ce && this.b.pb()
		}
		a || (this.b.jm = !1)
	};
	q.prototype.Vo = function(a, b) {
		a.Jc || this.b.Jk.push(a);
		var c, d, e = a.ab[b],
			g;
		e.type ? g = e.type.name : g = "system";
		var f = (c = e.Ao) ? this.Bo : this.$q;
		f[g] || (f[g] = []);
		g = f[g];
		f = e.hb;
		if (c) {
			if (e.N.length && (e = e.N[0], 1 === e.type && 2 === e.rd.type)) {
				e = e.rd.value.toLowerCase();
				c = 0;
				for (d = g.length; c < d; c++) if (g[c].method == f) {
					c = g[c].kh;
					c[e] ? c[e].push([a, b]) : c[e] = [
						[a, b]
					];
					return
				}
				c = {};
				c[e] = [
					[a, b]
				];
				g.push({
					method: f,
					kh: c
				})
			}
		} else {
			c = 0;
			for (d = g.length; c < d; c++) if (g[c].method == f) {
				g[c].kh.push([a, b]);
				return
			}
			mc && f === mc.prototype.i.Nf ? g.unshift({
				method: f,
				kh: [
					[a, b]
				]
			}) : g.push({
				method: f,
				kh: [
					[a, b]
				]
			})
		}
	};
	Fb = q;
	r.prototype.Vl = function() {
		return this.ka ? this.type.e.length : this.e.length
	};
	r.prototype.rc = function() {
		return this.ka ? this.type.e : this.e
	};
	r.prototype.ei = function(a) {
		a && (a.b.ib().Mb.Jc ? (this.ka && (W(this.e), ya(this.R, a.type.e), this.ka = !1), a = this.R.indexOf(a), -1 !== a && (this.e.push(this.R[a]), this.R.splice(a, 1))) : (this.ka = !1, W(this.e), this.e[0] = a))
	};
	nb = r;
	window._c2hh_ = "87A0C342784B4463A5CBFF948C5F56E2ACD1E0B6";
	t.prototype.Na = function(a) {
		var b, c = this.parent;
		if (this.group) for (this.Hk = !0; c;) {
			if (!c.group) {
				this.Hk = !1;
				break
			}
			c = c.parent
		}
		this.zn = !this.fp() && (!this.parent || this.parent.group && this.parent.Hk);
		this.Ro = !! a;
		this.Pe = this.pa.slice(0);
		for (c = this.parent; c;) {
			a = 0;
			for (b = c.pa.length; a < b; a++) this.Ms(c.pa[a]);
			c = c.parent
		}
		this.pa = h(this.pa);
		this.Pe = h(this.Pe);
		a = 0;
		for (b = this.ab.length; a < b; a++) this.ab[a].Na();
		a = 0;
		for (b = this.Tc.length; a < b; a++) this.Tc[a].Na();
		a = 0;
		for (b = this.Qc.length; a < b; a++) this.Qc[a].Na(a < b - 1 && this.Qc[a + 1].Ij)
	};
	t.prototype.mw = function(a) {
		if (this.sh !== !! a) {
			this.sh = !! a;
			var b;
			a = 0;
			for (b = this.Yi.length; a < b; ++a) this.Yi[a].gr();
			0 < b && this.b.ma.ff && this.b.ma.ff.En()
		}
	};
	t.prototype.fo = function(a) {
		f(a, this.pa)
	};
	t.prototype.Ms = function(a) {
		f(a, this.Pe)
	};
	t.prototype.xk = function() {
		this.Mq = !0;
		this.parent && this.parent.xk()
	};
	t.prototype.fp = function() {
		return this.ab.length ? this.ab[0].trigger : !1
	};
	t.prototype.Ra = function() {
		var a, b, c = !1,
			d = this.b,
			e = this.b.ib();
		e.Mb = this;
		var g = this.ab;
		this.Ij || (e.rl = !1);
		if (this.Jc) {
			0 === g.length && (c = !0);
			e.$a = 0;
			for (a = g.length; e.$a < a; e.$a++) b = g[e.$a], b.trigger || (b = b.Ra()) && (c = !0);
			(e.tf = c) && this.tk()
		} else {
			e.$a = 0;
			for (a = g.length; e.$a < a; e.$a++) if (b = g[e.$a].Ra(), !b) {
				e.tf = !1;
				this.zn && d.Ce && d.pb();
				return
			}
			e.tf = !0;
			this.tk()
		}
		this.Ot(e)
	};
	t.prototype.Ot = function(a) {
		a.tf && this.Ro && (a.rl = !0);
		this.zn && this.b.Ce && this.b.pb()
	};
	t.prototype.fw = function(a) {
		this.b.ib().Mb = this;
		this.ab[a].Ra() && (this.tk(), this.b.ib().tf = !0)
	};
	t.prototype.tk = function() {
		var a = this.b.ib(),
			b;
		a.Yb = 0;
		for (b = this.Tc.length; a.Yb < b; a.Yb++) if (this.Tc[a.Yb].Ra()) return;
		this.uq()
	};
	t.prototype.cw = function() {
		var a = this.b.ib(),
			b;
		for (b = this.Tc.length; a.Yb < b; a.Yb++) if (this.Tc[a.Yb].Ra()) return;
		this.uq()
	};
	t.prototype.uq = function() {
		if (this.Qc.length) {
			var a, b, c, d, e = this.Qc.length - 1;
			this.b.ok(this);
			if (this.Mq) for (a = 0, b = this.Qc.length; a < b; a++) c = this.Qc[a], (d = !this.Hk || !this.group && a < e) && this.b.nk(c.pa), c.Ra(), d ? this.b.Af(c.pa) : this.b.jl(c.pa);
			else for (a = 0, b = this.Qc.length; a < b; a++) this.Qc[a].Ra();
			this.b.jk()
		}
	};
	t.prototype.gw = function() {
		var a = this.b.ib();
		a.Mb = this;
		var b = !1,
			c;
		a.$a = 0;
		for (c = this.ab.length; a.$a < c; a.$a++) if (this.ab[a.$a].Ra()) b = !0;
		else if (!this.Jc) return !1;
		return this.Jc ? b : !0
	};
	t.prototype.dw = function() {
		this.b.lh++;
		var a = this.b.ib().$a,
			b = this.b.ok(this);
		if (!this.Jc) for (b.$a = a + 1, a = this.ab.length; b.$a < a; b.$a++) if (!this.ab[b.$a].Ra()) {
			this.b.jk();
			return
		}
		this.tk();
		this.b.jk()
	};
	t.prototype.kv = function(a) {
		var b = a.index;
		if (0 === b) return !0;
		for (--b; 0 <= b; --b) if (this.ab[b].type === a.type) return !1;
		return !0
	};
	Yb = t;
	a.prototype.Na = function() {
		var a, b, c;
		a = 0;
		for (b = this.N.length; a < b; a++) c = this.N[a], c.Na(), c.Sc && (this.Vg = !0)
	};
	a.prototype.iw = function() {
		return !0
	};
	a.prototype.hn = function() {
		var a, b;
		a = 0;
		for (b = this.N.length; a < b; a++) this.Ga[a] = this.N[a].get();
		return Va(this.hb.apply(this.b.Ed, this.Ga), this.Dj)
	};
	a.prototype.hw = function() {
		var a, b;
		a = 0;
		for (b = this.N.length; a < b; a++) this.Ga[a] = this.N[a].get();
		a = this.hb.apply(this.Ye ? this.Ye : this.type, this.Ga);
		this.type.Wc();
		return a
	};
	a.prototype.gn = function() {
		var a, b, c, d, e, g, f, l, h = this.type,
			n = h.Z(),
			k = this.nc.Jc && !this.trigger;
		b = 0;
		var p = h.Gc,
			w = h.L,
			z = h.Sd,
			q = this.Yc,
			r = -1 < q,
			t = this.Vg,
			B = this.N,
			H = this.Ga,
			Q = this.Dj,
			I = this.hb,
			G;
		if (t) for (b = 0, e = B.length; b < e; ++b) g = B[b], g.Sc || (H[b] = g.get(0));
		else for (b = 0, e = B.length; b < e; ++b) H[b] = B[b].get(0);
		if (n.ka) {
			W(n.e);
			W(n.R);
			G = h.e;
			a = 0;
			for (d = G.length; a < d; ++a) {
				l = G[a];
				if (t) for (b = 0, e = B.length; b < e; ++b) g = B[b], g.Sc && (H[b] = g.get(a));
				r ? (b = 0, w && (b = l.type.Zf[z]), b = I.apply(l.H[q + b], H)) : b = I.apply(l, H);
				(f = Va(b, Q)) ? n.e.push(l) : k && n.R.push(l)
			}
			h.finish && h.finish(!0);
			n.ka = !1;
			h.Wc();
			return n.Vl()
		}
		c = 0;
		G = (f = k && !this.nc.kv(this)) ? n.R : n.e;
		var M = !1;
		a = 0;
		for (d = G.length; a < d; ++a) {
			l = G[a];
			if (t) for (b = 0, e = B.length; b < e; ++b) g = B[b], g.Sc && (H[b] = g.get(a));
			r ? (b = 0, w && (b = l.type.Zf[z]), b = I.apply(l.H[q + b], H)) : b = I.apply(l, H);
			if (Va(b, Q)) if (M = !0, f) {
				if (n.e.push(l), p) for (b = 0, e = l.siblings.length; b < e; b++) g = l.siblings[b], g.type.Z().e.push(g)
			} else {
				G[c] = l;
				if (p) for (b = 0, e = l.siblings.length; b < e; b++) g = l.siblings[b], g.type.Z().e[c] = g;
				c++
			} else if (f) {
				G[c] = l;
				if (p) for (b = 0, e = l.siblings.length; b < e; b++) g = l.siblings[b], g.type.Z().R[c] = g;
				c++
			} else if (k && (n.R.push(l), p)) for (b = 0, e = l.siblings.length; b < e; b++) g = l.siblings[b], g.type.Z().R.push(g)
		}
		xa(G, c);
		if (p) for (w = h.Zb, a = 0, d = w.length; a < d; a++) l = w[a].Z(), f ? xa(l.R, c) : xa(l.e, c);
		c = M;
		if (f && !M) for (a = 0, d = n.e.length; a < d; a++) {
			l = n.e[a];
			if (t) for (b = 0, e = B.length; b < e; b++) g = B[b], g.Sc && (H[b] = g.get(a));
			b = r ? I.apply(l.H[q], H) : I.apply(l, H);
			if (Va(b, Q)) {
				M = !0;
				break
			}
		}
		h.finish && h.finish(c || k);
		return k ? M : n.Vl()
	};
	Tb = a;
	b.prototype.Na = function() {
		var a, b, c;
		a = 0;
		for (b = this.N.length; a < b; a++) c = this.N[a], c.Na(), c.Sc && (this.Vg = !0)
	};
	b.prototype.hn = function() {
		var a = this.b,
			b, c, d = this.N,
			e = this.Ga;
		b = 0;
		for (c = d.length; b < c; ++b) e[b] = d[b].get();
		return this.hb.apply(a.Ed, e)
	};
	b.prototype.gn = function() {
		var a = this.type,
			b = this.Yc,
			c = a.Sd,
			d = this.Vg,
			e = this.N,
			g = this.Ga,
			l = this.hb,
			f = a.Z().rc(),
			a = a.L,
			h = -1 < b,
			n, k, p, w, q, z;
		if (d) for (k = 0, w = e.length; k < w; ++k) q = e[k], q.Sc || (g[k] = q.get(0));
		else for (k = 0, w = e.length; k < w; ++k) g[k] = e[k].get(0);
		n = 0;
		for (p = f.length; n < p; ++n) {
			z = f[n];
			if (d) for (k = 0, w = e.length; k < w; ++k) q = e[k], q.Sc && (g[k] = q.get(n));
			h ? (k = 0, a && (k = z.type.Zf[c]), l.apply(z.H[b + k], g)) : l.apply(z, g)
		}
		return !1
	};
	Ub = b;
	var l = [],
		w = -1;
	d.prototype.Na = function() {
		var a, b;
		if (11 === this.type) this.gf = this.b.Ko(this.Di, this.nc.parent);
		else if (13 === this.type) for (a = 0, b = this.Gf.length; a < b; a++) this.Gf[a].Na();
		this.rd && this.rd.Na()
	};
	d.prototype.yv = function(a) {
		this.Sc || !a || a.Fa.zk || (this.Sc = !0)
	};
	d.prototype.Cq = function() {
		this.Sc = !0
	};
	d.prototype.Ou = function(a) {
		this.fe = a || 0;
		a = e();
		this.rd.get(a);
		w--;
		return a.data
	};
	d.prototype.Pu = function(a) {
		this.fe = a || 0;
		a = e();
		this.rd.get(a);
		w--;
		return R(a.data) ? a.data : ""
	};
	d.prototype.Vu = function() {
		return this.object
	};
	d.prototype.Mu = function() {
		return this.so
	};
	d.prototype.Tu = function(a) {
		this.fe = a || 0;
		a = e();
		this.rd.get(a);
		w--;
		return a.bb() ? this.b.oh(a.data) : this.b.Nl(a.data)
	};
	d.prototype.Uu = function() {
		return this.cb
	};
	d.prototype.Su = function() {
		return this.key
	};
	d.prototype.Ru = function() {
		return this.index
	};
	d.prototype.Qu = function(a) {
		a = a || 0;
		var b = this.Kc.type,
			c = null,
			c = b.Z(),
			d = c.rc();
		if (d.length) c = d[a % d.length].type;
		else if (c.R.length) c = c.R[a % c.R.length].type;
		else if (b.e.length) c = b.e[a % b.e.length].type;
		else return 0;
		return this.index + c.lj[b.Sd]
	};
	d.prototype.Nu = function() {
		return this.gf
	};
	d.prototype.Lu = function() {
		return this.Co
	};
	d.prototype.Wu = function() {
		var a, b;
		a = 0;
		for (b = this.Gf.length; a < b; a++) this.Ci[a] = this.Gf[a].get();
		return this.Ci
	};
	Vb = d;
	c.prototype.Na = function() {
		this.pa = h(this.pa)
	};
	c.prototype.Ff = function(a) {
		var b = this.b.Io();
		this.parent && !this.Jh && b ? (this.xf >= b.length && (b.length = this.xf + 1), b[this.xf] = a) : this.data = a
	};
	c.prototype.qh = function() {
		var a = this.b.Io();
		return !this.parent || this.Jh || !a || this.Hj ? this.data : this.xf >= a.length || "undefined" === typeof a[this.xf] ? this.$l : a[this.xf]
	};
	c.prototype.Ra = function() {
		!this.parent || this.Jh || this.Hj || this.Ff(this.$l)
	};
	Pb = c;
	n.prototype.toString = function() {
		return "include:" + this.wh.toString()
	};
	n.prototype.Na = function() {
		this.wh = this.b.ul[this.bv];
		this.sheet.So.add(this);
		this.pa = h(this.pa);
		for (var a = this.parent; a;) a.group && a.Yi.push(this), a = a.parent;
		this.gr()
	};
	n.prototype.Ra = function() {
		this.parent && this.b.hi(this.b.n);
		this.wh.Wl || this.wh.Ra(!0);
		this.parent && this.b.Af(this.b.n)
	};
	n.prototype.gr = function() {
		for (var a = this.parent; a;) {
			if (a.group && !a.sh) {
				this.mc = !1;
				return
			}
			a = a.parent
		}
		this.mc = !0
	};
	Zb = n;
	g.prototype.reset = function(a) {
		this.Mb = a;
		this.Yb = this.$a = 0;
		W(this.Qq);
		this.rl = this.tf = !1
	};
	Ob = g
})();
(function() {
	function k(f, a) {
		this.Kc = f;
		this.b = f.b;
		this.type = a[0];
		this.get = [this.eu, this.au, this.nu, this.qu, this.Qt, this.ou, this.iu, this.Yt, this.hu, this.mu, this.Rt, this.lu, this.Zt, this.ju, this.fu, this.gu, this.bu, this.cu, this.Xt, this.pu, this.ku, this.du, this.Wt, this.$t][this.type];
		var b = null;
		this.$d = this.N = this.Ga = this.hb = this.Gk = this.second = this.first = this.value = null;
		this.Yc = -1;
		this.$c = null;
		this.lr = -1;
		this.gf = this.Di = null;
		this.Dg = !1;
		switch (this.type) {
		case 0:
		case 1:
		case 2:
			this.value = a[1];
			break;
		case 3:
			this.first = new Xb(f, a[1]);
			break;
		case 18:
			this.first = new Xb(f, a[1]);
			this.second = new Xb(f, a[2]);
			this.Gk = new Xb(f, a[3]);
			break;
		case 19:
			this.hb = this.b.ne(a[1]);
			this.hb !== Y.prototype.$b.random && this.hb !== Y.prototype.$b.Zs || this.Kc.Cq();
			this.Ga = [];
			this.N = [];
			3 === a.length ? (b = a[2], this.Ga.length = b.length + 1) : this.Ga.length = 1;
			break;
		case 20:
			this.$d = this.b.n[a[1]];
			this.Yc = -1;
			this.hb = this.b.ne(a[2]);
			this.Dg = a[3];
			bc.Function && this.hb === bc.Function.prototype.$b.Sw && this.Kc.Cq();
			a[4] ? this.$c = new Xb(f, a[4]) : this.$c = null;
			this.Ga = [];
			this.N = [];
			6 === a.length ? (b = a[5], this.Ga.length = b.length + 1) : this.Ga.length = 1;
			break;
		case 21:
			this.$d = this.b.n[a[1]];
			this.Dg = a[2];
			a[3] ? this.$c = new Xb(f, a[3]) : this.$c = null;
			this.lr = a[4];
			break;
		case 22:
			this.$d = this.b.n[a[1]];
			this.$d.xj(a[2]);
			this.Yc = this.$d.Fl(a[2]);
			this.hb = this.b.ne(a[3]);
			this.Dg = a[4];
			a[5] ? this.$c = new Xb(f, a[5]) : this.$c = null;
			this.Ga = [];
			this.N = [];
			7 === a.length ? (b = a[6], this.Ga.length = b.length + 1) : this.Ga.length = 1;
			break;
		case 23:
			this.Di = a[1], this.gf = null
		}
		this.Kc.yv(this.$d);
		4 <= this.type && 17 >= this.type && (this.first = new Xb(f, a[1]), this.second = new Xb(f, a[2]));
		if (b) {
			var e, d;
			e = 0;
			for (d = b.length; e < d; e++) this.N.push(new Xb(f, b[e]))
		}
	}
	function p() {
		++t;
		r.length === t && r.push(new Wb);
		return r[t]
	}
	function h(f, a, b) {
		var e, d;
		e = 0;
		for (d = f.length; e < d; ++e) f[e].get(b), a[e + 1] = b.data
	}
	function q(f, a) {
		this.type = f || $b.Lf;
		this.data = a || 0;
		this.zf = null;
		this.type == $b.Lf && (this.data = Math.floor(this.data))
	}
	k.prototype.Na = function() {
		23 === this.type && (this.gf = this.Kc.b.Ko(this.Di, this.Kc.nc.parent));
		this.first && this.first.Na();
		this.second && this.second.Na();
		this.Gk && this.Gk.Na();
		this.$c && this.$c.Na();
		if (this.N) {
			var f, a;
			f = 0;
			for (a = this.N.length; f < a; f++) this.N[f].Na()
		}
	};
	var r = [],
		t = -1;
	k.prototype.pu = function(f) {
		var a = this.N,
			b = this.Ga;
		b[0] = f;
		f = p();
		h(a, b, f);
		--t;
		this.hb.apply(this.b.Ed, b)
	};
	k.prototype.ku = function(f) {
		var a = this.$d,
			b = this.Ga,
			e = this.N,
			d = this.$c,
			c = this.hb,
			n = this.Kc.fe,
			g = a.Z(),
			k = g.rc();
		if (!k.length) if (g.R.length) k = g.R;
		else {
			this.Dg ? f.lc("") : f.ra(0);
			return
		}
		b[0] = f;
		f.zf = a;
		f = p();
		h(e, b, f);
		d && (d.get(f), f.bb() && (n = f.data, k = a.e));
		--t;
		a = k.length;
		if (n >= a || n <= -a) n %= a;
		0 > n && (n += a);
		c.apply(k[n], b)
	};
	k.prototype.Wt = function(f) {
		var a = this.$d,
			b = this.Ga,
			e = this.N,
			d = this.$c,
			c = this.Yc,
			k = this.hb,
			g = this.Kc.fe,
			q = a.Z(),
			l = q.rc();
		if (!l.length) if (q.R.length) l = q.R;
		else {
			this.Dg ? f.lc("") : f.ra(0);
			return
		}
		b[0] = f;
		f.zf = a;
		f = p();
		h(e, b, f);
		d && (d.get(f), f.bb() && (g = f.data, l = a.e));
		--t;
		e = l.length;
		if (g >= e || g <= -e) g %= e;
		0 > g && (g += e);
		g = l[g];
		l = 0;
		a.L && (l = g.type.Zf[a.Sd]);
		k.apply(g.H[c + l], b)
	};
	k.prototype.du = function(f) {
		var a = this.$c,
			b = this.$d,
			e = this.lr,
			d = this.Kc.fe,
			c = b.Z(),
			h = c.rc();
		if (!h.length) if (c.R.length) h = c.R;
		else {
			this.Dg ? f.lc("") : f.ra(0);
			return
		}
		if (a) {
			c = p();
			a.get(c);
			if (c.bb()) {
				d = c.data;
				h = b.e;
				0 !== h.length && (d %= h.length, 0 > d && (d += h.length));
				d = b.Ml(d);
				b = d.Va[e];
				R(b) ? f.lc(b) : f.C(b);
				--t;
				return
			}--t
		}
		a = h.length;
		if (d >= a || d <= -a) d %= a;
		0 > d && (d += a);
		d = h[d];
		h = 0;
		b.L && (h = d.type.lj[b.Sd]);
		b = d.Va[e + h];
		R(b) ? f.lc(b) : f.C(b)
	};
	k.prototype.eu = function(f) {
		f.type = $b.Lf;
		f.data = this.value
	};
	k.prototype.au = function(f) {
		f.type = $b.Kf;
		f.data = this.value
	};
	k.prototype.nu = function(f) {
		f.type = $b.String;
		f.data = this.value
	};
	k.prototype.qu = function(f) {
		this.first.get(f);
		f.bb() && (f.data = -f.data)
	};
	k.prototype.Qt = function(f) {
		this.first.get(f);
		var a = p();
		this.second.get(a);
		f.bb() && a.bb() && (f.data += a.data, a.ig() && f.sg());
		--t
	};
	k.prototype.ou = function(f) {
		this.first.get(f);
		var a = p();
		this.second.get(a);
		f.bb() && a.bb() && (f.data -= a.data, a.ig() && f.sg());
		--t
	};
	k.prototype.iu = function(f) {
		this.first.get(f);
		var a = p();
		this.second.get(a);
		f.bb() && a.bb() && (f.data *= a.data, a.ig() && f.sg());
		--t
	};
	k.prototype.Yt = function(f) {
		this.first.get(f);
		var a = p();
		this.second.get(a);
		f.bb() && a.bb() && (f.data /= a.data, f.sg());
		--t
	};
	k.prototype.hu = function(f) {
		this.first.get(f);
		var a = p();
		this.second.get(a);
		f.bb() && a.bb() && (f.data %= a.data, a.ig() && f.sg());
		--t
	};
	k.prototype.mu = function(f) {
		this.first.get(f);
		var a = p();
		this.second.get(a);
		f.bb() && a.bb() && (f.data = Math.pow(f.data, a.data), a.ig() && f.sg());
		--t
	};
	k.prototype.Rt = function(f) {
		this.first.get(f);
		var a = p();
		this.second.get(a);
		a.lg() || f.lg() ? this.Tt(f, a) : this.St(f, a);
		--t
	};
	k.prototype.Tt = function(f, a) {
		f.lg() && a.lg() ? this.Vt(f, a) : this.Ut(f, a)
	};
	k.prototype.Vt = function(f, a) {
		f.data += a.data
	};
	k.prototype.Ut = function(f, a) {
		f.lg() ? f.data += (Math.round(1E10 * a.data) / 1E10).toString() : f.lc(f.data.toString() + a.data)
	};
	k.prototype.St = function(f, a) {
		f.ra(f.data && a.data ? 1 : 0)
	};
	k.prototype.lu = function(f) {
		this.first.get(f);
		var a = p();
		this.second.get(a);
		f.bb() && a.bb() && (f.data || a.data ? f.ra(1) : f.ra(0));
		--t
	};
	k.prototype.Xt = function(f) {
		this.first.get(f);
		f.data ? this.second.get(f) : this.Gk.get(f)
	};
	k.prototype.Zt = function(f) {
		this.first.get(f);
		var a = p();
		this.second.get(a);
		f.ra(f.data === a.data ? 1 : 0);
		--t
	};
	k.prototype.ju = function(f) {
		this.first.get(f);
		var a = p();
		this.second.get(a);
		f.ra(f.data !== a.data ? 1 : 0);
		--t
	};
	k.prototype.fu = function(f) {
		this.first.get(f);
		var a = p();
		this.second.get(a);
		f.ra(f.data < a.data ? 1 : 0);
		--t
	};
	k.prototype.gu = function(f) {
		this.first.get(f);
		var a = p();
		this.second.get(a);
		f.ra(f.data <= a.data ? 1 : 0);
		--t
	};
	k.prototype.bu = function(f) {
		this.first.get(f);
		var a = p();
		this.second.get(a);
		f.ra(f.data > a.data ? 1 : 0);
		--t
	};
	k.prototype.cu = function(f) {
		this.first.get(f);
		var a = p();
		this.second.get(a);
		f.ra(f.data >= a.data ? 1 : 0);
		--t
	};
	k.prototype.$t = function(f) {
		var a = this.gf.qh();
		fa(a) ? f.C(a) : f.lc(a)
	};
	Xb = k;
	q.prototype.ig = function() {
		return this.type === $b.Kf
	};
	q.prototype.bb = function() {
		return this.type === $b.Lf || this.type === $b.Kf
	};
	q.prototype.lg = function() {
		return this.type === $b.String
	};
	q.prototype.sg = function() {
		this.ig() || (this.lg() && (this.data = parseFloat(this.data)), this.type = $b.Kf)
	};
	q.prototype.ra = function(f) {
		this.type = $b.Lf;
		this.data = Math.floor(f)
	};
	q.prototype.C = function(f) {
		this.type = $b.Kf;
		this.data = f
	};
	q.prototype.lc = function(f) {
		this.type = $b.String;
		this.data = f
	};
	q.prototype.Dq = function(f) {
		fa(f) ? (this.type = $b.Kf, this.data = f) : R(f) ? (this.type = $b.String, this.data = f.toString()) : (this.type = $b.Lf, this.data = 0)
	};
	Wb = q;
	$b = {
		Lf: 0,
		Kf: 1,
		String: 2
	}
})();

function Y(k) {
	this.b = k;
	this.Xb = []
}
Y.prototype.kc = function() {
	var k = {},
		p, h, q, r, t, f, a, b;
	k.waits = [];
	var e = k.waits,
		d;
	p = 0;
	for (h = this.Xb.length; p < h; p++) {
		f = this.Xb[p];
		d = {
			t: f.time,
			st: f.Kq,
			s: f.qn,
			ev: f.Xf.T,
			sm: [],
			sols: {}
		};
		f.Xf.Tc[f.Yb] && (d.act = f.Xf.Tc[f.Yb].T);
		q = 0;
		for (r = f.pa.length; q < r; q++) d.sm.push(f.pa[q].T);
		for (t in f.Bb) if (f.Bb.hasOwnProperty(t)) {
			a = this.b.n[parseInt(t, 10)];
			b = {
				sa: f.Bb[t].uk,
				insts: []
			};
			q = 0;
			for (r = f.Bb[t].Ud.length; q < r; q++) b.insts.push(f.Bb[t].Ud[q].uid);
			d.sols[a.T.toString()] = b
		}
		e.push(d)
	}
	return k
};
Y.prototype.Hc = function(k) {
	k = k.waits;
	var p, h, q, r, t, f, a, b, e, d, c;
	W(this.Xb);
	p = 0;
	for (h = k.length; p < h; p++) if (f = k[p], b = this.b.mo[f.ev.toString()]) {
		e = -1;
		q = 0;
		for (r = b.Tc.length; q < r; q++) if (b.Tc[q].T === f.act) {
			e = q;
			break
		}
		if (-1 !== e) {
			a = {
				Bb: {},
				pa: [],
				ql: !1
			};
			a.time = f.t;
			a.Kq = f.st || "";
			a.qn = !! f.s;
			a.Xf = b;
			a.Yb = e;
			q = 0;
			for (r = f.sm.length; q < r; q++)(b = this.b.zj(f.sm[q])) && a.pa.push(b);
			for (t in f.sols) if (f.sols.hasOwnProperty(t) && (b = this.b.zj(parseInt(t, 10)))) {
				e = f.sols[t];
				d = {
					uk: e.sa,
					Ud: []
				};
				q = 0;
				for (r = e.insts.length; q < r; q++)(c = this.b.bg(e.insts[q])) && d.Ud.push(c);
				a.Bb[b.index.toString()] = d
			}
			this.Xb.push(a)
		}
	}
};
(function() {
	function k() {}
	function p() {}
	function h() {}
	var q = Y.prototype;
	k.prototype.yr = function() {
		return !0
	};
	k.prototype.Rn = function() {
		return !0
	};
	k.prototype.bs = function() {
		return !0
	};
	k.prototype.tr = function(f, a, b) {
		return ac(f.qh(), a, b)
	};
	k.prototype.Nn = function() {
		var f = this.b.ib();
		return f.rl ? !1 : !f.tf
	};
	k.prototype.Sn = function() {
		return !0
	};
	k.prototype.Rr = function() {
		return !0
	};
	k.prototype.Uk = function() {
		return !0
	};
	k.prototype.cs = function() {
		return !0
	};
	k.prototype.Tk = function() {
		return !0
	};
	k.prototype.or = function(f, a, b) {
		return La(X(f), X(b)) <= X(a)
	};
	k.prototype.Dr = function(f, a) {
		return Oa(X(f), X(a))
	};
	k.prototype.Cr = function(f, a, b) {
		f = Ja(f);
		a = Ja(a);
		b = Ja(b);
		return Oa(b, a) ? Oa(f, a) && !Oa(f, b) : !(!Oa(f, a) && Oa(f, b))
	};
	q.i = new k;
	p.prototype.Ar = function(f) {
		this.b.Lh || this.b.bh || (this.b.bh = f)
	};
	p.prototype.xs = function(f, a) {
		0 === f.Ok ? fa(a) ? f.Ff(a) : f.Ff(parseFloat(a)) : 1 === f.Ok && f.Ff(a.toString())
	};
	p.prototype.nr = function(f, a) {
		0 === f.Ok ? fa(a) ? f.Ff(f.qh() + a) : f.Ff(f.qh() + parseFloat(a)) : 1 === f.Ok && f.Ff(f.qh() + a.toString())
	};
	var r = [],
		t = [];
	p.prototype.Bs = function(f) {
		if (!(0 > f)) {
			var a, b, e, d = this.b.ib(),
				c;
			r.length ? c = r.pop() : c = {
				Bb: {},
				pa: []
			};
			c.ql = !1;
			c.time = this.b.jb.W + f;
			c.Kq = "";
			c.qn = !1;
			c.Xf = d.Mb;
			c.Yb = d.Yb + 1;
			f = 0;
			for (a = this.b.n.length; f < a; f++) e = this.b.n[f], b = e.Z(), b.ka && -1 === d.Mb.pa.indexOf(e) || (c.pa.push(e), e = void 0, t.length ? e = t.pop() : e = {
				Ud: []
			}, e.uk = !1, e.uk = b.ka, ya(e.Ud, b.e), c.Bb[f.toString()] = e);
			this.Xb.push(c);
			return !0
		}
	};
	q.wa = new p;
	h.prototype["int"] = function(f, a) {
		R(a) ? (f.ra(parseInt(a, 10)), isNaN(f.data) && (f.data = 0)) : f.ra(a)
	};
	h.prototype["float"] = function(f, a) {
		R(a) ? (f.C(parseFloat(a)), isNaN(f.data) && (f.data = 0)) : f.C(a)
	};
	h.prototype.random = function(f, a, b) {
		void 0 === b ? f.C(Math.random() * a) : f.C(Math.random() * (b - a) + a)
	};
	h.prototype.sqrt = function(f, a) {
		f.C(Math.sqrt(a))
	};
	h.prototype.abs = function(f, a) {
		f.C(Math.abs(a))
	};
	h.prototype.round = function(f, a) {
		f.ra(Math.round(a))
	};
	h.prototype.floor = function(f, a) {
		f.ra(Math.floor(a))
	};
	h.prototype.ceil = function(f, a) {
		f.ra(Math.ceil(a))
	};
	h.prototype.sin = function(f, a) {
		f.C(Math.sin(X(a)))
	};
	h.prototype.cos = function(f, a) {
		f.C(Math.cos(X(a)))
	};
	h.prototype.tan = function(f, a) {
		f.C(Math.tan(X(a)))
	};
	h.prototype.asin = function(f, a) {
		f.C(Da(Math.asin(a)))
	};
	h.prototype.acos = function(f, a) {
		f.C(Da(Math.acos(a)))
	};
	h.prototype.atan = function(f, a) {
		f.C(Da(Math.atan(a)))
	};
	h.prototype.exp = function(f, a) {
		f.C(Math.exp(a))
	};
	h.prototype.log10 = function(f, a) {
		f.C(Math.log(a) / Math.LN10)
	};
	h.prototype.max = function(f) {
		var a = arguments[1];
		"number" !== typeof a && (a = 0);
		var b, e, d;
		b = 2;
		for (e = arguments.length; b < e; b++) d = arguments[b], "number" === typeof d && a < d && (a = d);
		f.C(a)
	};
	h.prototype.min = function(f) {
		var a = arguments[1];
		"number" !== typeof a && (a = 0);
		var b, e, d;
		b = 2;
		for (e = arguments.length; b < e; b++) d = arguments[b], "number" === typeof d && a > d && (a = d);
		f.C(a)
	};
	h.prototype.df = function(f) {
		f.C(this.b.df)
	};
	h.prototype.Kg = function(f) {
		f.C(this.b.Kg)
	};
	h.prototype.time = function(f) {
		f.C(this.b.jb.W)
	};
	h.prototype.Fd = function(f) {
		f.ra(this.b.Fd)
	};
	h.prototype.bk = function(f) {
		f.ra(this.b.bk)
	};
	h.prototype.Cl = function(f) {
		f.ra(this.b.Cl)
	};
	h.prototype.m = function(f, a, b, e, d) {
		f.C(Da(Ka(a, b, e, d)))
	};
	h.prototype.left = function(f, a, b) {
		f.lc(R(a) ? a.substr(0, b) : "")
	};
	h.prototype.right = function(f, a, b) {
		f.lc(R(a) ? a.substr(a.length - b) : "")
	};
	h.prototype.replace = function(f, a, b, e) {
		R(a) && R(b) && R(e) ? f.lc(a.replace(new RegExp(cb(b), "gi"), e)) : f.lc(R(a) ? a : "")
	};
	h.prototype.trim = function(f, a) {
		f.lc(R(a) ? a.trim() : "")
	};
	h.prototype.Zs = function(f) {
		var a = T(Math.random() * (arguments.length - 1));
		f.Dq(arguments[a + 1])
	};
	h.prototype.ll = function(f) {
		f.C(this.b.ll / 1E3)
	};
	h.prototype.qg = function(f) {
		f.C(this.b.qg)
	};
	q.$b = new h;
	q.ew = function() {
		var f, a, b, e, d, c, h = this.b.ib();
		f = 0;
		for (b = this.Xb.length; f < b; f++) {
			e = this.Xb[f];
			if (-1 === e.time) {
				if (!e.qn) continue
			} else if (e.time > this.b.jb.W) continue;
			h.Mb = e.Xf;
			h.Yb = e.Yb;
			h.$a = 0;
			for (a in e.Bb) e.Bb.hasOwnProperty(a) && (d = this.b.n[parseInt(a, 10)].Z(), c = e.Bb[a], d.ka = c.uk, ya(d.e, c.Ud), d = c, W(d.Ud), t.push(d));
			e.Xf.cw();
			this.b.jl(e.pa);
			e.ql = !0
		}
		a = f = 0;
		for (b = this.Xb.length; f < b; f++) e = this.Xb[f], this.Xb[a] = e, e.ql ? (Xa(e.Bb), W(e.pa), r.push(e)) : a++;
		xa(this.Xb, a)
	}
})();
(function() {
	mb = function(k, h) {
		var q = k[1],
			r = k[3],
			t = k[4],
			f = k[5],
			a = k[6],
			b = k[7],
			e = k[8];
		h.i || (h.i = {});
		h.wa || (h.wa = {});
		h.$b || (h.$b = {});
		var d = h.i,
			c = h.wa,
			n = h.$b;
		r && (d.Xw = function(a, b) {
			return ac(this.x, a, b)
		}, d.ur = function(a, b) {
			return ac(this.y, a, b)
		}, d.cx = function() {
			var a = this.j;
			this.la();
			var b = this.xa;
			return !(b.right < a.ta || b.bottom < a.ua || b.left > a.Da || b.top > a.Ca)
		}, d.gx = function() {
			this.la();
			var a = this.xa,
				b = this.b.ma;
			return 0 > a.right || 0 > a.bottom || a.left > b.width || a.top > b.height
		}, d.tx = function(a, b, c) {
			var d = this.Z(),
				e = d.rc();
			if (!e.length) return !1;
			var f = e[0],
				h = f,
				k = Qa(f.x, f.y, b, c),
				n, p, q;
			n = 1;
			for (p = e.length; n < p; n++) if (f = e[n], q = Qa(f.x, f.y, b, c), 0 === a && q < k || 1 === a && q > k) k = q, h = f;
			d.ei(h);
			return !0
		}, c.Kx = function(a) {
			this.x !== a && (this.x = a, this.r())
		}, c.Lx = function(a) {
			this.y !== a && (this.y = a, this.r())
		}, c.Gx = function(a, b) {
			if (this.x !== a || this.y !== b) this.x = a, this.y = b, this.r()
		}, c.Hx = function(a, b) {
			var c = a.Fu(this);
			if (c) {
				var d;
				c.Ll ? (d = c.Ll(b, !0), c = c.Ll(b, !1)) : (d = c.x, c = c.y);
				if (this.x !== d || this.y !== c) this.x = d, this.y = c, this.r()
			}
		}, c.kx = function(a) {
			0 !== a && (this.x += Math.cos(this.m) * a, this.y += Math.sin(this.m) * a, this.r())
		}, c.jx = function(a, b) {
			0 !== b && (this.x += Math.cos(X(a)) * b, this.y += Math.sin(X(a)) * b, this.r())
		}, n.Es = function(a) {
			a.C(this.x)
		}, n.Fs = function(a) {
			a.C(this.y)
		}, n.df = function(a) {
			a.C(this.b.Il(this))
		});
		t && (d.Ww = function(a, b) {
			return ac(this.width, a, b)
		}, d.Tw = function(a, b) {
			return ac(this.height, a, b)
		}, c.zs = function(a) {
			this.width !== a && (this.width = a, this.r())
		}, c.Dx = function(a) {
			this.height !== a && (this.height = a, this.r())
		}, c.Ix = function(a, b) {
			if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.r()
		}, n.Px = function(a) {
			a.C(this.width)
		}, n.Zw = function(a) {
			a.C(this.height)
		}, n.Pw = function(a) {
			this.la();
			a.C(this.xa.left)
		}, n.Rw = function(a) {
			this.la();
			a.C(this.xa.top)
		}, n.Qw = function(a) {
			this.la();
			a.C(this.xa.right)
		}, n.Ow = function(a) {
			this.la();
			a.C(this.xa.bottom)
		});
		f && (d.or = function(a, b) {
			return La(this.m, X(b)) <= X(a)
		}, d.Dr = function(a) {
			return Oa(this.m, X(a))
		}, d.Cr = function(a, b) {
			var c = Ja(a),
				d = Ja(b),
				e = Fa(this.m);
			return Oa(d, c) ? Oa(e, c) && !Oa(e, d) : !(!Oa(e, c) && Oa(e, d))
		}, c.zx = function(a) {
			a = X(Ea(a));
			isNaN(a) || this.m === a || (this.m = a, this.r())
		}, c.ss = function(a) {
			0 === a || isNaN(a) || (this.m += X(a), this.m = Fa(this.m), this.r())
		}, c.ts = function(a) {
			0 === a || isNaN(a) || (this.m -= X(a), this.m = Fa(this.m), this.r())
		}, c.xx = function(a, b) {
			var c = Na(this.m, X(b), X(a));
			isNaN(c) || this.m === c || (this.m = c, this.r())
		}, c.yx = function(a, b, c) {
			a = Na(this.m, Math.atan2(c - this.y, b - this.x), X(a));
			isNaN(a) || this.m === a || (this.m = a, this.r())
		}, c.Jx = function(a, b) {
			var c = Math.atan2(b - this.y, a - this.x);
			isNaN(c) || this.m === c || (this.m = c, this.r())
		}, n.Nw = function(a) {
			a.C(Ia(this.m))
		});
		q || (d.Uw = function(a, b, c) {
			return ac(this.Va[a], b, c)
		}, d.ax = function(a) {
			return this.Va[a]
		}, d.ux = function(a, b) {
			var c = this.Z(),
				d = c.rc();
			if (!d.length) return !1;
			var e = d[0],
				f = e,
				h = e.Va[b],
				k, n, p;
			k = 1;
			for (n = d.length; k < n; k++) if (e = d[k], p = e.Va[b], 0 === a && p < h || 1 === a && p > h) h = p, f = e;
			c.ei(f);
			return !0
		}, d.rx = function(a) {
			var b, c, d, e, f;
			if (this.b.Hl().Dj) {
				f = this.Z();
				if (f.ka) for (f.ka = !1, W(f.e), W(f.R), d = this.e, b = 0, c = d.length; b < c; b++) e = d[b], e.uid === a ? f.R.push(e) : f.e.push(e);
				else {
					d = b = 0;
					for (c = f.e.length; b < c; b++) e = f.e[b], f.e[d] = e, e.uid === a ? f.R.push(e) : d++;
					xa(f.e, d)
				}
				this.Wc();
				return !!f.e.length
			}
			e = this.b.bg(a);
			if (!e) return !1;
			f = this.Z();
			if (!f.ka && -1 === f.e.indexOf(e)) return !1;
			if (this.L) for (a = e.type.za, b = 0, c = a.length; b < c; b++) {
				if (a[b] === this) return f.ei(e), this.Wc(), !0
			} else if (e.type === this) return f.ei(e), this.Wc(), !0;
			return !1
		}, d.On = function() {
			return !0
		}, d.Pn = function() {
			return !0
		}, c.Ex = function(a, b) {
			var c = this.Va;
			fa(c[a]) ? c[a] = fa(b) ? b : parseFloat(b) : R(c[a]) && (c[a] = R(b) ? b : b.toString())
		}, c.Mw = function(a, b) {
			var c = this.Va;
			fa(c[a]) ? c[a] = fa(b) ? c[a] + b : c[a] + parseFloat(b) : R(c[a]) && (c[a] = R(b) ? c[a] + b : c[a] + b.toString())
		}, c.Mx = function(a, b) {
			var c = this.Va;
			fa(c[a]) && (c[a] = fa(b) ? c[a] - b : c[a] - parseFloat(b))
		}, c.Ax = function(a, b) {
			this.Va[a] = b ? 1 : 0
		}, c.Nx = function(a) {
			this.Va[a] = 1 - this.Va[a]
		}, c.xr = function() {
			this.b.Te(this)
		}, c.Jr || (c.Jr = function(a) {
			var b, c;
			try {
				b = JSON.parse(a)
			} catch (d) {
				return
			}
			this.b.Rj(this, b, !0);
			this.Id && this.Id();
			if (this.H) for (a = 0, b = this.H.length; a < b; ++a) c = this.H[a], c.Id && c.Id()
		}), n.Yw = function(a) {
			var b = a.zf.e.length,
				c, d, e;
			c = 0;
			for (d = this.b.Zc.length; c < d; c++) e = this.b.Zc[c], a.zf.L ? 0 <= e.type.za.indexOf(a.zf) && b++ : e.type === a.zf && b++;
			a.ra(b)
		}, n.wx = function(a) {
			a.ra(a.zf.Z().rc().length)
		}, n.Ox = function(a) {
			a.ra(this.uid)
		}, n.$w = function(a) {
			a.ra(this.rh())
		}, n.pr || (n.pr = function(a) {
			a.lc(JSON.stringify(this.b.jn(this, !0)))
		}));
		a && (d.Gr = function() {
			return this.visible
		}, c.ys = function(a) {
			!a !== !this.visible && (this.visible = !! a, this.b.ja = !0)
		}, d.Vw = function(a, b) {
			return ac(ib(100 * this.opacity), a, b)
		}, c.Fx = function(a) {
			a = a / 100;
			0 > a ? a = 0 : 1 < a && (a = 1);
			a !== this.opacity && (this.opacity = a, this.b.ja = !0)
		}, n.Opacity = function(a) {
			a.C(ib(100 * this.opacity))
		});
		b && (d.bx = function(a) {
			return a ? this.j === a : !1
		}, d.vx = function(a) {
			var b = this.Z(),
				c = b.rc();
			if (!c.length) return !1;
			var d = c[0],
				e = d,
				f, h;
			f = 1;
			for (h = c.length; f < h; f++) if (d = c[f], 0 === a) {
				if (d.j.index > e.j.index || d.j.index === e.j.index && d.ud() > e.ud()) e = d
			} else if (d.j.index < e.j.index || d.j.index === e.j.index && d.ud() < e.ud()) e = d;
			b.ei(e);
			return !0
		}, c.nx = function() {
			var a = this.j,
				b = a.e;
			b.length && b[b.length - 1] === this || (a.Cg(this, !1), a.Xg(this, !1), this.b.ja = !0)
		}, c.lx = function() {
			var a = this.j,
				b = a.e;
			b.length && b[0] === this || (a.Cg(this, !1), a.Tv(this), this.b.ja = !0)
		}, c.mx = function(a) {
			a && a != this.j && (this.j.Cg(this, !0), this.j = a, a.Xg(this, !0), this.b.ja = !0)
		}, c.Rx = function(a, b) {
			var c = 0 === a;
			if (b) {
				var d = b.zu(this);
				d && d.uid !== this.uid && (this.j.index !== d.j.index && (this.j.Cg(this, !0), this.j = d.j, d.j.Xg(this, !0)), this.j.zv(this, d, c), this.b.ja = !0)
			}
		}, n.ix = function(a) {
			a.ra(this.j.Rp)
		}, n.hx = function(a) {
			a.lc(this.j.name)
		}, n.Qx = function(a) {
			a.ra(this.ud())
		});
		e && (c.Bx = function(a, b) {
			if (this.b.q) {
				var c = this.type.Kl(b);
				if (!(0 > c)) {
					var d = 1 === a;
					this.pe[c] !== d && (this.pe[c] = d, this.kd(), this.b.ja = !0)
				}
			}
		}, c.Cx = function(a, b, c) {
			if (this.b.q) {
				var d = this.type.Kl(a);
				0 > d || (a = this.type.I[d], d = this.Ea[d], b = Math.floor(b), 0 > b || b >= d.length || (1 === this.b.q.Ju(a.Sa, b) && (c /= 100), d[b] !== c && (d[b] = c, a.mc && (this.b.ja = !0))))
			}
		})
	};
	Gb = function() {
		this.el = this.bl = !0;
		this.type.Oi = !0;
		this.b.ja = !0;
		var k, h, q = this.cl;
		k = 0;
		for (h = q.length; k < h; ++k) q[k](this);
		this.j.zc && this.la()
	};
	Hb = function(k) {
		k && this.cl.push(k)
	};
	Jb = function() {
		if (this.bl) {
			var k = this.xa,
				h = this.Jb;
			k.set(this.x, this.y, this.x + this.width, this.y + this.height);
			k.offset(-this.cc * this.width, -this.ec * this.height);
			this.m ? (k.offset(-this.x, -this.y), h.Fq(k, this.m), h.offset(this.x, this.y), h.no(k)) : h.qi(k);
			k.normalize();
			this.bl = !1;
			this.Ew()
		}
	};
	var k = new ra(0, 0, 0, 0);
	Kb = function() {
		if (this.j.zc) {
			var p = this.j.lb,
				h = this.xa;
			k.set(p.Eb(h.left), p.Fb(h.top), p.Eb(h.right), p.Fb(h.bottom));
			this.Pb.jh(k) || (this.Pb.right < this.Pb.left ? p.update(this, null, k) : p.update(this, this.Pb, k), this.Pb.Sf(k), this.j.gd = !0)
		}
	};
	Lb = function() {
		if (this.el && this.Ld) {
			this.la();
			var p = this.type.Xi,
				h = this.xa;
			k.set(p.Eb(h.left), p.Fb(h.top), p.Eb(h.right), p.Fb(h.bottom));
			this.ve.jh(k) || (this.ve.right < this.ve.left ? p.update(this, null, k) : p.update(this, this.ve, k), this.ve.Sf(k), this.el = !1)
		}
	};
	Ib = function(k, h) {
		return this.xa.zb(k, h) && this.Jb.zb(k, h) ? this.ba && !this.ba.hg() ? (this.ba.Rf(this.width, this.height, this.m), this.ba.zb(k - this.x, h - this.y)) : !0 : !1
	};
	Cb = function() {
		this.type.Kk();
		return this.of
	};
	Mb = function() {
		this.j.Hn();
		return this.ld
	};
	Nb = function() {
		W(this.Y);
		var k, h, q, r = !0;
		k = 0;
		for (h = this.pe.length; k < h; k++) this.pe[k] && (q = this.type.I[k], this.Y.push(q), q.dd || (r = !1));
		this.kr = !! this.Y.length;
		this.ee = r
	};
	Db = function() {
		return "Inst" + this.sq
	};
	pb = function(k) {
		if (k && k.Gc && k.type != this) {
			var h, q, r;
			h = 0;
			for (q = k.siblings.length; h < q; h++) if (r = k.siblings[h], r.type == this) return r
		}
		k = this.Z().rc();
		return k.length ? k[0] : null
	};
	qb = function(k) {
		var h = this.Z().rc();
		return h.length ? h[k.rh() % h.length] : null
	};
	ob = function() {
		if (this.Ig && !this.L) {
			var k, h;
			k = 0;
			for (h = this.e.length; k < h; k++) this.e[k].of = k;
			var q = k,
				r = this.b.Zc;
			k = 0;
			for (h = r.length; k < h; ++k) r[k].type === this && (r[k].of = q++);
			this.Ig = !1
		}
	};
	Ab = function(k) {
		if (k < this.e.length) return this.e[k];
		k -= this.e.length;
		var h = this.b.Zc,
			q, r;
		q = 0;
		for (r = h.length; q < r; ++q) if (h[q].type === this) {
			if (0 === k) return h[q];
			--k
		}
		return null
	};
	rb = function() {
		return this.ge[this.pd]
	};
	sb = function() {
		this.pd++;
		this.pd === this.ge.length ? this.ge.push(new nb(this)) : (this.ge[this.pd].ka = !0, W(this.ge[this.pd].R))
	};
	tb = function() {
		this.pd++;
		this.pd === this.ge.length && this.ge.push(new nb(this));
		var k = this.ge[this.pd],
			h = this.ge[this.pd - 1];
		h.ka ? (k.ka = !0, W(k.R)) : (k.ka = !1, ya(k.e, h.e), ya(k.R, h.R))
	};
	ub = function() {
		this.pd--
	};
	vb = function(k) {
		var h, q, r, t, f, a = 0;
		if (!this.L) for (h = 0, q = this.za.length; h < q; h++) for (f = this.za[h], r = 0, t = f.Oa.length; r < t; r++) {
			if (k === f.Oa[r].name) return this.S.lastBehIndex = a, f.Oa[r];
			a++
		}
		h = 0;
		for (q = this.Oa.length; h < q; h++) {
			if (k === this.Oa[h].name) return this.S.lastBehIndex = a, this.Oa[h];
			a++
		}
		return null
	};
	wb = function(k) {
		return this.xj(k) ? this.S.lastBehIndex : -1
	};
	yb = function(k) {
		var h, q;
		h = 0;
		for (q = this.I.length; h < q; h++) if (this.I[h].name === k) return h;
		return -1
	};
	zb = function() {
		if (this.Gc && !this.L) {
			var k, h, q, r, t, f, a;
			this.Kk();
			f = this.Z();
			var b = f.ka,
				e = (k = this.b.ib()) && k.Mb && k.Mb.Jc;
			k = 0;
			for (h = this.Zb.length; k < h; k++) if (t = this.Zb[k], t !== this && (t.Kk(), a = t.Z(), a.ka = b, !b)) {
				W(a.e);
				q = 0;
				for (r = f.e.length; q < r; ++q) a.e[q] = t.Ml(f.e[q].of);
				if (e) for (W(a.R), q = 0, r = f.R.length; q < r; ++q) a.R[q] = t.Ml(f.R[q].of)
			}
		}
	};
	Bb = function() {
		return "Type" + this.T
	};
	ac = function(k, h, q) {
		if ("undefined" === typeof k || "undefined" === typeof q) return !1;
		switch (h) {
		case 0:
			return k === q;
		case 1:
			return k !== q;
		case 2:
			return k < q;
		case 3:
			return k <= q;
		case 4:
			return k > q;
		case 5:
			return k >= q;
		default:
			return !1
		}
	}
})();
var jc = {};

function nc(k) {
	this.b = k
}(function() {
	function k(a) {
		0 > a && (a = 0);
		1 < a && (a = 1);
		return Math.log(a) / Math.log(10) * 20
	}
	function p(a) {
		a = a.toLowerCase();
		return V.hasOwnProperty(a) && V[a].length ? V[a][0].qc() : x.destination
	}
	function h() {
		return x.createGain ? x.createGain() : x.createGainNode()
	}
	function q(a) {
		return x.createDelay ? x.createDelay(a) : x.createDelayNode(a)
	}
	function r(a) {
		a.start ? a.start(0) : a.noteOn(0)
	}
	function t(a, b, c) {
		a.start ? a.start(0, b) : a.noteGrainOn(0, b, c - b)
	}
	function f(a) {
		try {
			a.stop ? a.stop(0) : a.noteOff(0)
		} catch (b) {}
	}
	function a(a, b, c, d, e, f) {
		this.type = "filter";
		this.cd = [a, b, c, d, e, f];
		this.U = h();
		this.G = h();
		this.G.gain.value = f;
		this.D = h();
		this.D.gain.value = 1 - f;
		this.Pa = x.createBiquadFilter();
		this.Pa.type = "number" === typeof this.Pa.type ? a : vc[a];
		this.Pa.frequency.value = b;
		this.Pa.detune && (this.Pa.detune.value = c);
		this.Pa.Q.value = d;
		this.Pa.gain.value = e;
		this.U.connect(this.Pa);
		this.U.connect(this.D);
		this.Pa.connect(this.G)
	}
	function b(a, b, c) {
		this.type = "delay";
		this.cd = [a, b, c];
		this.U = h();
		this.G = h();
		this.G.gain.value = c;
		this.D = h();
		this.D.gain.value = 1 - c;
		this.ai = h();
		this.Dc = q(a);
		this.Dc.delayTime.value = a;
		this.fj = h();
		this.fj.gain.value = b;
		this.U.connect(this.ai);
		this.U.connect(this.D);
		this.ai.connect(this.G);
		this.ai.connect(this.Dc);
		this.Dc.connect(this.fj);
		this.fj.connect(this.ai)
	}
	function e(a, b, c, d) {
		this.type = "convolve";
		this.cd = [b, c, d];
		this.U = h();
		this.G = h();
		this.G.gain.value = c;
		this.D = h();
		this.D.gain.value = 1 - c;
		this.bf = x.createConvolver();
		a && (this.bf.normalize = b, this.bf.buffer = a);
		this.U.connect(this.bf);
		this.U.connect(this.D);
		this.bf.connect(this.G)
	}

	function d(a, b, c, d, e) {
		this.type = "flanger";
		this.cd = [a, b, c, d, e];
		this.U = h();
		this.D = h();

		this.D.gain.value = 1 - e / 2;
		this.G = h();
		this.G.gain.value = e / 2;
		this.mj = h();
		this.mj.gain.value = d;
		this.Dc = q(a + b);
		this.Dc.delayTime.value = a;
		this.fb = x.createOscillator();
		this.fb.frequency.value = c;
		this.ic = h();
		this.ic.gain.value = b;
		this.U.connect(this.Dc);
		this.U.connect(this.D);
		this.Dc.connect(this.G);
		this.Dc.connect(this.mj);
		this.mj.connect(this.Dc);
		this.fb.connect(this.ic);
		this.ic.connect(this.Dc.delayTime);
		r(this.fb)
	}
	function c(a, b, c, d, e, f) {
		this.type = "phaser";
		this.cd = [a, b, c, d, e, f];
		this.U = h();
		this.D = h();
		this.D.gain.value = 1 - f / 2;
		this.G = h();
		this.G.gain.value = f / 2;
		this.Pa = x.createBiquadFilter();
		this.Pa.type = "number" === typeof this.Pa.type ? 7 : "allpass";
		this.Pa.frequency.value = a;
		this.Pa.detune && (this.Pa.detune.value = b);
		this.Pa.Q.value = c;
		this.fb = x.createOscillator();
		this.fb.frequency.value = e;
		this.ic = h();
		this.ic.gain.value = d;
		this.U.connect(this.Pa);
		this.U.connect(this.D);
		this.Pa.connect(this.G);
		this.fb.connect(this.ic);
		this.ic.connect(this.Pa.frequency);
		r(this.fb)
	}
	function n(a) {
		this.type = "gain";
		this.cd = [a];
		this.X = h();
		this.X.gain.value = a
	}
	function g(a, b) {
		this.type = "tremolo";
		this.cd = [a, b];
		this.X = h();
		this.X.gain.value = 1 - b / 2;
		this.fb = x.createOscillator();
		this.fb.frequency.value = a;
		this.ic = h();
		this.ic.gain.value = b / 2;
		this.fb.connect(this.ic);
		this.ic.connect(this.X.gain);
		r(this.fb)
	}
	function z(a, b) {
		this.type = "ringmod";
		this.cd = [a, b];
		this.U = h();
		this.G = h();
		this.G.gain.value = b;
		this.D = h();
		this.D.gain.value = 1 - b;
		this.ni = h();
		this.ni.gain.value = 0;
		this.fb = x.createOscillator();
		this.fb.frequency.value = a;
		this.fb.connect(this.ni.gain);
		r(this.fb);
		this.U.connect(this.ni);
		this.U.connect(this.D);
		this.ni.connect(this.G)
	}
	function l(a, b, c, d, e) {
		this.type = "distortion";
		this.cd = [a, b, c, d, e];
		this.U = h();
		this.lk = h();
		this.kk = h();
		this.lw(c, Math.pow(10, d / 20));
		this.G = h();
		this.G.gain.value = e;
		this.D = h();
		this.D.gain.value = 1 - e;
		this.Qk = x.createWaveShaper();
		this.cj = new Float32Array(65536);
		this.wu(a, b);
		this.Qk.cj = this.cj;
		this.U.connect(this.lk);
		this.U.connect(this.D);
		this.lk.connect(this.Qk);
		this.Qk.connect(this.kk);
		this.kk.connect(this.G)
	}
	function w(a, b, c, d, e) {
		this.type = "compressor";
		this.cd = [a, b, c, d, e];
		this.X = x.createDynamicsCompressor();
		try {
			this.X.threshold.value = a, this.X.knee.value = b, this.X.ratio.value = c, this.X.attack.value = d, this.X.release.value = e
		} catch (f) {}
	}
	function m(a, b) {
		this.type = "analyser";
		this.cd = [a, b];
		this.X = x.createAnalyser();
		this.X.fftSize = a;
		this.X.smoothingTimeConstant = b;
		this.uu = new Float32Array(this.X.frequencyBinCount);
		this.Iq = new Uint8Array(a);
		this.di = 0
	}
	function v() {
		this.F = null;
		this.Tj = 0;
		this.Qe = [];
		this.Em = this.Kj = this.Jj = 0
	}
	function u(a, b) {
		this.src = a;
		this.P = y;
		this.ad = b;
		this.Ni = !1;
		var c = this;
		this.Cm = this.Qm = null;
		this.Ag = [];
		this.vk = 0;
		this.Kn = this.yl = this.Pq = this.gk = !1;
		1 === y && b && (this.P = 0, this.Qm = h());
		this.Xe = this.aa = null;
		var d;
		switch (this.P) {
		case 0:
			this.aa = new Audio;
			this.aa.crossOrigin = "anonymous";
			this.aa.addEventListener("canplaythrough", function() {
				c.Kn = !0
			});
			1 === y && x.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.Pq = !0, this.aa.addEventListener("canplay", function() {
				c.Cm || (c.Cm = x.createMediaElementSource(c.aa), c.Cm.connect(c.Qm))
			}));
			this.aa.autoplay = !1;
			this.aa.ky = "auto";
			this.aa.src = a;
			break;
		case 1:
			d = new XMLHttpRequest;
			d.open("GET", a, !0);
			d.responseType = "arraybuffer";
			d.onload = function() {
				c.Xe = d.response;
				c.it()
			};
			d.onerror = function() {
				c.yl = !0
			};
			d.send();
			break;
		case 2:
			this.aa = !0;
			break;
		case 3:
			this.aa = !0
		}
	}
	function E(a, b) {
		var c = this;
		this.tag = b;
		this.Rb = this.sd = !0;
		this.src = a.src;
		this.buffer = a;
		this.P = y;
		this.ad = a.ad;
		this.playbackRate = 1;
		this.eg = !0;
		this.gc = this.wc = !1;
		this.Qb = 0;
		this.Ih = this.jg = this.yd = !1;
		this.volume = 1;
		this.Om = function(a) {
			if (!c.gc && !c.wc) {
				var b = this;
				b || (b = a.target);
				b === c.Mi && (c.eg = !0, c.Rb = !0, U = c.tag, F.trigger(nc.prototype.i.Gi, J))
			}
		};
		this.Mi = null;
		this.fg = 1 === H && !this.ad || 2 === H;
		this.vg = 1;
		this.startTime = this.fg ? F.jb.W : F.ke.W;
		this.Ma = this.Ua = null;
		this.Ad = !1;
		this.La = null;
		this.fq = this.dq = this.cq = this.bq = this.hq = this.gq = 0;
		this.k = null;
		var d = !1;
		1 !== this.P || 0 !== this.buffer.P || this.buffer.Pq || (this.P = 0);
		switch (this.P) {
		case 0:
			this.ad ? (this.k = a.aa, d = !a.Ni, a.Ni = !0) : (this.k = new Audio, this.k.crossOrigin = "anonymous", this.k.autoplay = !1, this.k.src = a.aa.src, d = !0);
			d && this.k.addEventListener("ended", function() {
				U = c.tag;
				c.Rb = !0;
				F.trigger(nc.prototype.i.Gi, J)
			});
			break;
		case 1:
			this.Ua = h();
			this.Ua.connect(p(b));
			1 === this.buffer.P ? a.aa && (this.k = x.createBufferSource(), this.k.buffer = a.aa, this.k.connect(this.Ua)) : (this.k = this.buffer.aa, this.buffer.Qm.connect(this.Ua), this.buffer.Ni || (this.buffer.Ni = !0, this.buffer.aa.addEventListener("ended", function() {
				U = c.tag;
				c.Rb = !0;
				F.trigger(nc.prototype.i.Gi, J)
			})));
			break;
		case 2:
			this.k = new window.Media(S + this.src, null, null, function(a) {
				a === window.Media.MEDIA_STOPPED && (c.eg = !0, c.Rb = !0, U = c.tag, F.trigger(nc.prototype.i.Gi, J))
			});
			break;
		case 3:
			this.k = !0
		}
	}
	function D(a, b) {
		V.hasOwnProperty(a) ? V[a].push(b) : V[a] = [b];
		var c, d, e, f, g = x.destination;
		if (V.hasOwnProperty(a) && (e = V[a], e.length)) for (g = e[0].qc(), c = 0, d = e.length; c < d; c++) f = e[c], c + 1 === d ? f.Ac(x.destination) : f.Ac(e[c + 1].qc());
		W(Ma);
		if (a.length) for (c = 0, d = K.length; c < d; c++) e = K[c], jb(a, e.tag) && Ma.push(e);
		else A && !A.nf() && (W(Ma), Ma[0] = A);
		c = 0;
		for (d = Ma.length; c < d; c++) Ma[c].Yv(g);
		Ha && xb === a && (Ha.disconnect(), Ha.connect(g))
	}
	function L() {}
	function O() {}
	var N = nc.prototype;
	N.qb = function(a) {
		this.Fa = a;
		this.b = a.b
	};
	N.qb.prototype.na = function() {};
	var F = null,
		J = null,
		U = "",
		S = "",
		y = 0,
		x = null,
		sa = [],
		K = [],
		A = null,
		B = !1,
		H = 0,
		Q = !1,
		I = 1,
		G = 0,
		M = 0,
		oa = !1,
		P = 1,
		pa = 1,
		ka = 10,
		Ga = 1E4,
		va = 1,
		Ha = null,
		xb = "",
		Ra = !1,
		Sa = [],
		V = {},
		vc = "lowpass highpass bandpass lowshelf highshelf peaking notch allpass".split(" ");
	a.prototype.Ac = function(a) {
		this.G.disconnect();
		this.G.connect(a);
		this.D.disconnect();
		this.D.connect(a)
	};
	a.prototype.remove = function() {
		this.U.disconnect();
		this.Pa.disconnect();
		this.G.disconnect();
		this.D.disconnect()
	};
	a.prototype.qc = function() {
		return this.U
	};
	b.prototype.Ac = function(a) {
		this.G.disconnect();
		this.G.connect(a);
		this.D.disconnect();
		this.D.connect(a)
	};
	b.prototype.remove = function() {
		this.U.disconnect();
		this.ai.disconnect();
		this.Dc.disconnect();
		this.fj.disconnect();
		this.G.disconnect();
		this.D.disconnect()
	};
	b.prototype.qc = function() {
		return this.U
	};
	e.prototype.Ac = function(a) {
		this.G.disconnect();
		this.G.connect(a);
		this.D.disconnect();
		this.D.connect(a)
	};
	e.prototype.remove = function() {
		this.U.disconnect();
		this.bf.disconnect();
		this.G.disconnect();
		this.D.disconnect()
	};
	e.prototype.qc = function() {
		return this.U
	};
	d.prototype.Ac = function(a) {
		this.D.disconnect();
		this.D.connect(a);
		this.G.disconnect();
		this.G.connect(a)
	};
	d.prototype.remove = function() {
		this.U.disconnect();
		this.Dc.disconnect();
		this.fb.disconnect();
		this.ic.disconnect();
		this.D.disconnect();
		this.G.disconnect();
		this.mj.disconnect()
	};
	d.prototype.qc = function() {
		return this.U
	};
	c.prototype.Ac = function(a) {
		this.D.disconnect();
		this.D.connect(a);
		this.G.disconnect();
		this.G.connect(a)
	};
	c.prototype.remove = function() {
		this.U.disconnect();
		this.Pa.disconnect();
		this.fb.disconnect();
		this.ic.disconnect();
		this.D.disconnect();
		this.G.disconnect()
	};
	c.prototype.qc = function() {
		return this.U
	};
	n.prototype.Ac = function(a) {
		this.X.disconnect();
		this.X.connect(a)
	};
	n.prototype.remove = function() {
		this.X.disconnect()
	};
	n.prototype.qc = function() {
		return this.X
	};
	g.prototype.Ac = function(a) {
		this.X.disconnect();
		this.X.connect(a)
	};
	g.prototype.remove = function() {
		this.fb.disconnect();
		this.ic.disconnect();
		this.X.disconnect()
	};
	g.prototype.qc = function() {
		return this.X
	};
	z.prototype.Ac = function(a) {
		this.G.disconnect();
		this.G.connect(a);
		this.D.disconnect();
		this.D.connect(a)
	};
	z.prototype.remove = function() {
		this.fb.disconnect();
		this.ni.disconnect();
		this.U.disconnect();
		this.G.disconnect();
		this.D.disconnect()
	};
	z.prototype.qc = function() {
		return this.U
	};
	l.prototype.lw = function(a, b) {.01 > a && (a = .01);
		this.lk.gain.value = a;
		this.kk.gain.value = Math.pow(1 / a, .6) * b
	};
	l.prototype.shape = function(a, b, c) {
		var d = 1.05 * c * b - b;
		c = 0 > a ? -1 : 1;
		a = 0 > a ? -a : a;
		b = a < b ? a : b + d * (1 - Math.exp(-(1 / d) * (a - b)));
		return b * c
	};
	l.prototype.wu = function(a, b) {
		for (var c = Math.pow(10, a / 20), d = Math.pow(10, b / 20), e = 0, f = 0; 32768 > f; ++f) e = f / 32768, e = this.shape(e, c, d), this.cj[32768 + f] = e, this.cj[32768 - f - 1] = -e
	};
	l.prototype.Ac = function(a) {
		this.G.disconnect();
		this.G.connect(a);
		this.D.disconnect();
		this.D.connect(a)
	};
	l.prototype.remove = function() {
		this.U.disconnect();
		this.lk.disconnect();
		this.Qk.disconnect();
		this.kk.disconnect();
		this.G.disconnect();
		this.D.disconnect()
	};
	l.prototype.qc = function() {
		return this.U
	};
	w.prototype.Ac = function(a) {
		this.X.disconnect();
		this.X.connect(a)
	};
	w.prototype.remove = function() {
		this.X.disconnect()
	};
	w.prototype.qc = function() {
		return this.X
	};
	m.prototype.mb = function() {
		this.X.getFloatFrequencyData(this.uu);
		this.X.getByteTimeDomainData(this.Iq);
		for (var a = this.X.fftSize, b = 0, c = this.di = 0, d = 0; b < a; b++) d = (this.Iq[b] - 128) / 128, 0 > d && (d = -d), this.di < d && (this.di = d), c += d * d;
		this.di = k(this.di);
		k(Math.sqrt(c / a))
	};
	m.prototype.Ac = function(a) {
		this.X.disconnect();
		this.X.connect(a)
	};
	m.prototype.remove = function() {
		this.X.disconnect()
	};
	m.prototype.qc = function() {
		return this.X
	};
	v.prototype.oi = function(a) {
		if (this.F = a) this.Jj = this.F.x, this.Kj = this.F.y;
		W(this.Qe)
	};
	v.prototype.Cj = function() {
		return !!this.F
	};
	v.prototype.mb = function(a) {
		this.F && 0 !== a && (this.Em = Ka(this.Jj, this.Kj, this.F.x, this.F.y), a = Qa(this.Jj, this.Kj, this.F.x, this.F.y) / a, 4 > this.Qe.length || this.Qe.shift(), this.Qe.push(a), this.Jj = this.F.x, this.Kj = this.F.y)
	};
	v.prototype.No = function() {
		if (!this.Qe.length) return 0;
		var a, b, c = 0;
		a = 0;
		for (b = this.Qe.length; a < b; a++) c += this.Qe[a];
		return c / this.Qe.length
	};
	v.prototype.Rl = function() {
		return Math.cos(this.Em) * this.No()
	};
	v.prototype.Sl = function() {
		return Math.sin(this.Em) * this.No()
	};
	var uc = !1;
	u.prototype.it = function() {
		if (!this.aa && this.Xe) {
			var a = this;
			if (x.decodeAudioData) x.decodeAudioData(this.Xe, function(b) {
				a.aa = b;
				a.Xe = null;
				var c, d, e;
				if (ea(a.hk) || Q) ea(a.Zi) || (c = a.Zi.bf, c.normalize = a.Qp, c.buffer = b);
				else if (a.Ag.length) {
					c = 0;
					for (d = a.Ag.length; c < d; c++) {
						b = a.Ag[c];
						e = new E(a, b.Wq);
						e.nn(!0);
						if ("undefined" !== typeof b.Sp && (b.F = F.bg(b.Sp), !b.F)) continue;
						if (b.F) {
							var f = Pa(b.F.x, b.F.y, -b.F.j.Ka(), G, M, !0),
								g = Pa(b.F.x, b.F.y, -b.F.j.Ka(), G, M, !1);
							e.mn(f, g, Da(b.F.m - b.F.j.Ka()), b.Xl, b.Gm, b.Jm);
							e.oi(b.F)
						} else e.mn(b.x, b.y, b.Is, b.Xl, b.Gm, b.Jm);
						e.play(a.Bm, a.Jn, a.vk);
						a.gk && e.pause();
						K.push(e)
					}
					W(a.Ag)
				} else e = new E(a, a.hk || ""), e.play(a.Bm, a.Jn, a.vk), a.gk && e.pause(), K.push(e)
			}, function() {
				a.yl = !0
			});
			else if (this.aa = x.createBuffer(this.Xe, !1), this.Xe = null, ea(this.hk) || Q) ea(this.Zi) || (b = this.Zi.bf, b.normalize = this.Qp, b.buffer = this.aa);
			else {
				var b = new E(this, this.hk);
				b.play(this.Bm, this.Jn, this.vk);
				this.gk && b.pause();
				K.push(b)
			}
		}
	};
	u.prototype.Zo = function() {
		switch (this.P) {
		case 0:
			var a = 4 <= this.aa.readyState;
			a && (this.Kn = !0);
			return a || this.Kn;
		case 1:
			return !!this.Xe || !! this.aa;
		case 2:
			return !0;
		case 3:
			return !0
		}
		return !1
	};
	u.prototype.lv = function() {
		switch (this.P) {
		case 0:
			return this.Zo();
		case 1:
			return !!this.aa;
		case 2:
			return !0;
		case 3:
			return !0
		}
		return !1
	};
	u.prototype.av = function() {
		switch (this.P) {
		case 0:
			return !!this.aa.error;
		case 1:
			return this.yl
		}
		return !1
	};
	E.prototype.nf = function() {
		switch (this.P) {
		case 0:
			return this.k.ended;
		case 1:
			return 1 === this.buffer.P ? !this.sd && !this.Rb && this.k.loop || this.gc ? !1 : this.eg : this.k.ended;
		case 2:
			return this.eg;
		case 3:
			!0
		}
		return !0
	};
	E.prototype.Ws = function() {
		return this.sd || this.Rb ? !0 : this.nf()
	};
	E.prototype.nn = function(a) {
		1 === y && (!this.Ad && a ? this.Ua && (this.Ma || (this.Ma = x.createPanner(), this.Ma.panningModel = "number" === typeof this.Ma.panningModel ? P : ["equalpower", "HRTF", "soundfield"][P], this.Ma.distanceModel = "number" === typeof this.Ma.distanceModel ? pa : ["linear", "inverse", "exponential"][pa], this.Ma.refDistance = ka, this.Ma.maxDistance = Ga, this.Ma.rolloffFactor = va), this.Ua.disconnect(), this.Ua.connect(this.Ma), this.Ma.connect(p(this.tag)), this.Ad = !0) : this.Ad && !a && this.Ua && (this.Ma.disconnect(), this.Ua.disconnect(), this.Ua.connect(p(this.tag)), this.Ad = !1))
	};
	E.prototype.mn = function(a, b, c, d, e, f) {
		this.Ad && 1 === y && (this.Ma.setPosition(a, b, 0), this.Ma.setOrientation(Math.cos(X(c)), Math.sin(X(c)), 0), this.Ma.coneInnerAngle = d, this.Ma.coneOuterAngle = e, this.Ma.coneOuterGain = f, this.gq = a, this.hq = b, this.bq = c, this.cq = d, this.dq = e, this.fq = f)
	};
	E.prototype.oi = function(a) {
		this.Ad && 1 === y && (this.La || (this.La = new v), this.La.oi(a))
	};
	E.prototype.mb = function(a) {
		if (this.Ad && 1 === y && this.La && this.La.Cj() && this.Gh()) {
			this.La.mb(a);
			a = this.La.F;
			var b = Pa(a.x, a.y, -a.j.Ka(), G, M, !0),
				c = Pa(a.x, a.y, -a.j.Ka(), G, M, !1);
			this.Ma.setPosition(b, c, 0);
			b = 0;
			"undefined" !== typeof this.La.F.m && (b = a.m - a.j.Ka(), this.Ma.setOrientation(Math.cos(b), Math.sin(b), 0));
			b = Pa(this.La.Rl(), this.La.Sl(), -a.j.Ka(), 0, 0, !0);
			c = Pa(this.La.Rl(), this.La.Sl(), -a.j.Ka(), 0, 0, !1);
			this.Ma.setVelocity(b, c, 0)
		}
	};
	E.prototype.play = function(a, b, c) {
		var d = this.k;
		this.yd = a;
		this.volume = b;
		c = c || 0;
		switch (this.P) {
		case 0:
			1 !== d.playbackRate && (d.playbackRate = 1);
			d.volume !== b * I && (d.volume = b * I);
			d.loop !== a && (d.loop = a);
			d.muted && (d.muted = !1);
			if (d.currentTime !== c) try {
				d.currentTime = c
			} catch (e) {}
			if (this.ad && Ra && !F.wd) Sa.push(this);
			else try {
				this.k.play()
			} catch (f) {
				console && console.log && console.log("[C2] WARNING: exception trying to play audio '" + this.buffer.src + "': ", f)
			}
			break;
		case 1:
			this.muted = !1;
			this.vg = 1;
			if (1 === this.buffer.P) this.Ua.gain.value = b * I, this.sd || (this.k = x.createBufferSource(), this.k.buffer = this.buffer.aa, this.k.connect(this.Ua)), this.k.onended = this.Om, this.Mi = this.k, this.k.loop = a, this.eg = !1, 0 === c ? r(this.k) : t(this.k, c, this.kf());
			else {
				1 !== d.playbackRate && (d.playbackRate = 1);
				d.loop !== a && (d.loop = a);
				d.volume = b * I;
				if (d.currentTime !== c) try {
					d.currentTime = c
				} catch (g) {}
				this.ad && Ra && !F.wd ? Sa.push(this) : d.play()
			}
			break;
		case 2:
			(!this.sd && this.Rb || 0 !== c) && d.seekTo(c);
			d.play();
			this.eg = !1;
			break;
		case 3:
			F.ub ? AppMobi.context.playSound(this.src, a) : AppMobi.player.playSound(this.src, a)
		}
		this.playbackRate = 1;
		this.startTime = (this.fg ? F.jb.W : F.ke.W) - c;
		this.gc = this.Rb = this.sd = !1
	};
	E.prototype.stop = function() {
		switch (this.P) {
		case 0:
			this.k.paused || this.k.pause();
			break;
		case 1:
			1 === this.buffer.P ? f(this.k) : this.k.paused || this.k.pause();
			break;
		case 2:
			this.k.stop();
			break;
		case 3:
			F.ub && AppMobi.context.stopSound(this.src)
		}
		this.Rb = !0;
		this.gc = !1
	};
	E.prototype.pause = function() {
		if (!(this.sd || this.Rb || this.nf() || this.gc)) {
			switch (this.P) {
			case 0:
				this.k.paused || this.k.pause();
				break;
			case 1:
				1 === this.buffer.P ? (this.Qb = this.Ol(!0), this.yd && (this.Qb = this.Qb % this.kf()), this.gc = !0, f(this.k)) : this.k.paused || this.k.pause();
				break;
			case 2:
				this.k.pause();
				break;
			case 3:
				F.ub && AppMobi.context.stopSound(this.src)
			}
			this.gc = !0
		}
	};
	E.prototype.bw = function() {
		if (!(this.sd || this.Rb || this.nf()) && this.gc) {
			switch (this.P) {
			case 0:
				this.k.play();
				break;
			case 1:
				1 === this.buffer.P ? (this.k = x.createBufferSource(), this.k.buffer = this.buffer.aa, this.k.connect(this.Ua), this.k.onended = this.Om, this.Mi = this.k, this.k.loop = this.yd, this.Ua.gain.value = I * this.volume * this.vg, this.Lk(), this.startTime = (this.fg ? F.jb.W : F.ke.W) - this.Qb / (this.playbackRate || .001), t(this.k, this.Qb, this.kf())) : this.k.play();
				break;
			case 2:
				this.k.play();
				break;
			case 3:
				F.ub && AppMobi.context.resumeSound(this.src)
			}
			this.gc = !1
		}
	};
	E.prototype.seek = function(a) {
		if (!(this.sd || this.Rb || this.nf())) switch (this.P) {
		case 0:
			try {
				this.k.currentTime = a
			} catch (b) {}
			break;
		case 1:
			if (1 === this.buffer.P) this.gc ? this.Qb = a : (this.pause(), this.Qb = a, this.bw());
			else try {
				this.k.currentTime = a
			} catch (c) {}
			break;
		case 3:
			F.ub && AppMobi.context.seekSound(this.src, a)
		}
	};
	E.prototype.Yv = function(a) {
		1 === this.P && (this.Ad ? (this.Ma.disconnect(), this.Ma.connect(a)) : (this.Ua.disconnect(), this.Ua.connect(a)))
	};
	E.prototype.kf = function() {
		var a = 0;
		switch (this.P) {
		case 0:
			"undefined" !== typeof this.k.duration && (a = this.k.duration);
			break;
		case 1:
			a = this.buffer.aa.duration;
			break;
		case 2:
			a = this.k.getDuration();
			break;
		case 3:
			F.ub && (a = AppMobi.context.getDurationSound(this.src))
		}
		return a
	};
	E.prototype.Ol = function(a) {
		var b = this.kf(),
			c = 0;
		switch (this.P) {
		case 0:
			"undefined" !== typeof this.k.currentTime && (c = this.k.currentTime);
			break;
		case 1:
			if (1 === this.buffer.P) {
				if (this.gc) return this.Qb;
				c = (this.fg ? F.jb.W : F.ke.W) - this.startTime
			} else "undefined" !== typeof this.k.currentTime && (c = this.k.currentTime);
			break;
		case 3:
			F.ub && (c = AppMobi.context.getPlaybackTimeSound(this.src))
		}
		a && (c *= this.playbackRate);
		!this.yd && c > b && (c = b);
		return c
	};
	E.prototype.Gh = function() {
		return !this.gc && !this.sd && !this.Rb && !this.nf()
	};
	E.prototype.sw = function() {
		return !this.sd && !this.Rb && !this.nf()
	};
	E.prototype.Cw = function() {
		var a = this.volume * I;
		isFinite(a) || (a = 0);
		switch (this.P) {
		case 0:
			"undefined" !== typeof this.k.volume && this.k.volume !== a && (this.k.volume = a);
			break;
		case 1:
			1 === this.buffer.P ? this.Ua.gain.value = a * this.vg : "undefined" !== typeof this.k.volume && this.k.volume !== a && (this.k.volume = a)
		}
	};
	E.prototype.jj = function(a) {
		switch (this.P) {
		case 0:
			this.k.muted !== !! a && (this.k.muted = !! a);
			break;
		case 1:
			1 === this.buffer.P ? (this.vg = a ? 0 : 1, this.Ua.gain.value = I * this.volume * this.vg) : this.k.muted !== !! a && (this.k.muted = !! a)
		}
	};
	E.prototype.ow = function() {
		this.jg = !0;
		this.jj(this.jg || this.Ih)
	};
	E.prototype.Bq = function(a) {
		this.Ih = !! a;
		this.jj(this.jg || this.Ih)
	};
	E.prototype.Lk = function() {
		var a = this.playbackRate;
		this.fg && (a *= F.Kg);
		switch (this.P) {
		case 0:
			this.k.playbackRate !== a && (this.k.playbackRate = a);
			break;
		case 1:
			1 === this.buffer.P ? this.k.playbackRate.value !== a && (this.k.playbackRate.value = a) : this.k.playbackRate !== a && (this.k.playbackRate = a)
		}
	};
	E.prototype.qw = function(a) {
		switch (this.P) {
		case 0:
			a ? this.Gh() ? (this.wc = !0, this.k.pause()) : this.wc = !1 : this.wc && (this.k.play(), this.wc = !1);
			break;
		case 1:
			a ? this.Gh() ? (this.wc = !0, 1 === this.buffer.P ? (this.Qb = this.Ol(!0), this.yd && (this.Qb = this.Qb % this.kf()), f(this.k)) : this.k.pause()) : this.wc = !1 : this.wc && (1 === this.buffer.P ? (this.k = x.createBufferSource(), this.k.buffer = this.buffer.aa, this.k.connect(this.Ua), this.k.onended = this.Om, this.Mi = this.k, this.k.loop = this.yd, this.Ua.gain.value = I * this.volume * this.vg, this.Lk(), this.startTime = (this.fg ? F.jb.W : F.ke.W) - this.Qb / (this.playbackRate || .001), t(this.k, this.Qb, this.kf())) : this.k.play(), this.wc = !1);
			break;
		case 2:
			a ? this.Gh() ? (this.k.pause(), this.wc = !0) : this.wc = !1 : this.wc && (this.wc = !1, this.k.play())
		}
	};
	N.Ta = function(a) {
		function b() {
			if (!oa) {
				var a = x.createBuffer(1, 220, 22050);
				if (a.getChannelData && c) for (var d = a.getChannelData(0), e = 0, f = d.length; e < f; ++e) d[e] = .1;
				d = x.createBufferSource();
				d.buffer = a;
				d.connect(x.destination);
				r(d)
			}
		}
		this.type = a;
		F = this.b = a.b;
		J = this;
		this.Ab = null;
		this.Th = -600;
		!(this.b.Kh || this.b.zh && (this.b.Ah || this.b.Ej)) || this.b.Bh || this.b.Aa || this.b.fm || (Ra = !0);
		x = null;
		"undefined" !== typeof AudioContext ? (y = 1, x = new AudioContext) : "undefined" !== typeof webkitAudioContext && (y = 1, x = new webkitAudioContext);
		var c = this.b.zh;
		c && window.setInterval(b, 25E3);
		Ra && document.addEventListener("touchend", function() {
			!uc && x && (b(), uc = !0);
			var a, c, d;
			if (Ra) {
				if (!Q) for (a = 0, c = Sa.length; a < c; ++a) d = Sa[a], d.Rb || d.gc || d.k.play();
				W(Sa)
			}
		}, !0);
		1 !== y && (this.b.fc && "undefined" !== typeof window.Media ? y = 2 : this.b.Yo && (y = 3));
		2 === y && (S = location.href, a = S.lastIndexOf("/"), -1 < a && (S = S.substr(0, a + 1)), S = S.replace("file://", ""));
		if (this.b.bp && this.b.mv && "undefined" === typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.b.Te(this);
		else {
			if (this.b.ub) B = this.b.zh;
			else try {
				B = !! (new Audio).canPlayType('audio/ogg; codecs="vorbis"')
			} catch (d) {
				B = !1
			}
			this.b.xn(this)
		}
	};
	var qa = N.Ta.prototype;
	qa.na = function() {
		this.b.Qf = this;
		H = this.O[0];
		this.de = this.O[1];
		this.Nv = 0 !== this.O[2];
		P = this.O[3];
		pa = this.O[4];
		this.Th = -this.O[5];
		ka = this.O[6];
		Ga = this.O[7];
		va = this.O[8];
		this.Ab = new v;
		var a = this.b.B || this.b.width,
			b = this.b.A || this.b.height;
		1 === y && ("undefined" !== typeof x.listener.dopplerFactor && (x.listener.dopplerFactor = 0), x.listener.setPosition(a / 2, b / 2, this.Th), x.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function(a, b) {
			Ha && Ha.disconnect();
			xb = b.toLowerCase();
			Ha = x.createMediaStreamSource(a);
			Ha.connect(p(xb))
		});
		this.b.ho(function(a) {
			J.Kv(a)
		});
		var c = this;
		this.b.Yk(function(a) {
			c.Km(a)
		})
	};
	qa.Km = function(a) {
		var b, c, d;
		b = 0;
		for (c = K.length; b < c; b++) d = K[b], d.La && d.La.F === a && (d.La.F = null, d.Ad && d.Gh() && d.yd && d.stop());
		this.Ab.F === a && (this.Ab.F = null)
	};
	qa.kc = function() {
		var a = {
			silent: Q,
			masterVolume: I,
			listenerZ: this.Th,
			listenerUid: this.Ab.Cj() ? this.Ab.F.uid : -1,
			playing: [],
			effects: {}
		},
			b = a.playing,
			c, d, e, f, g, l;
		c = 0;
		for (d = K.length; c < d; c++) e = K[c], !e.sw() || 3 === this.de || e.ad && 1 === this.de || !e.ad && 2 === this.de || (f = e.Ol(), e.yd && (f = f % e.kf()), f = {
			tag: e.tag,
			buffersrc: e.buffer.src,
			is_music: e.ad,
			playbackTime: f,
			volume: e.volume,
			looping: e.yd,
			muted: e.jg,
			playbackRate: e.playbackRate,
			paused: e.gc,
			resume_position: e.Qb
		}, e.Ad && (f.pan = {}, l = f.pan, e.La && e.La.Cj() ? l.objUid = e.La.F.uid : (l.x = e.gq, l.y = e.hq, l.a = e.bq), l.ia = e.cq, l.oa = e.dq, l.og = e.fq), b.push(f));
		b = a.effects;
		for (g in V) if (V.hasOwnProperty(g)) {
			e = [];
			c = 0;
			for (d = V[g].length; c < d; c++) e.push({
				type: V[g][c].type,
				params: V[g][c].cd
			});
			b[g] = e
		}
		return a
	};
	var Ta = [];
	qa.Hc = function(f) {
		var h = f.silent;
		I = f.masterVolume;
		this.Th = f.listenerZ;
		this.Ab.oi(null);
		var k = f.listenerUid; - 1 !== k && (this.Ab.Tj = k, Ta.push(this.Ab));
		var k = f.playing,
			u, q, r, p, t, E, L, N, x, y, F;
		if (3 !== this.de) for (u = 0, q = K.length; u < q; u++) x = K[u], x.ad && 1 === this.de || (x.ad || 2 !== this.de) && x.stop();
		for (t in V) if (V.hasOwnProperty(t)) for (u = 0, q = V[t].length; u < q; u++) V[t][u].remove();
		Xa(V);
		for (t in f.effects) if (f.effects.hasOwnProperty(t)) for (E = f.effects[t], u = 0, q = E.length; u < q; u++) switch (r = E[u].type, y = E[u].params, r) {
		case "filter":
			D(t, new a(y[0], y[1], y[2], y[3], y[4], y[5]));
			break;
		case "delay":
			D(t, new b(y[0], y[1], y[2]));
			break;
		case "convolve":
			r = y[2];
			x = this.wj(r, !1);
			x.aa ? r = new e(x.aa, y[0], y[1], r) : (r = new e(null, y[0], y[1], r), x.Qp = y[0], x.Zi = r);
			D(t, r);
			break;
		case "flanger":
			D(t, new d(y[0], y[1], y[2], y[3], y[4]));
			break;
		case "phaser":
			D(t, new c(y[0], y[1], y[2], y[3], y[4], y[5]));
			break;
		case "gain":
			D(t, new n(y[0]));
			break;
		case "tremolo":
			D(t, new g(y[0], y[1]));
			break;
		case "ringmod":
			D(t, new z(y[0], y[1]));
			break;
		case "distortion":
			D(t, new l(y[0], y[1], y[2], y[3], y[4]));
			break;
		case "compressor":
			D(t, new w(y[0], y[1], y[2], y[3], y[4]));
			break;
		case "analyser":
			D(t, new m(y[0], y[1]))
		}
		u = 0;
		for (q = k.length; u < q; u++) 3 === this.de || (f = k[u], r = f.buffersrc, p = f.is_music, t = f.tag, E = f.playbackTime, L = f.looping, N = f.volume, F = (y = f.pan) && y.hasOwnProperty("objUid") ? y.objUid : -1, p && 1 === this.de) || !p && 2 === this.de || ((x = this.Ho(r, t, p, L, N)) ? (x.Qb = f.resume_position, x.nn( !! y), x.play(L, N, E), x.Lk(), x.Cw(), x.jj(x.jg || x.Ih), f.paused && x.pause(), f.muted && x.ow(), x.jj(x.jg || x.Ih), y && (-1 !== F ? (x.La = x.La || new v, x.La.Tj = F, Ta.push(x.La)) : x.mn(y.x, y.y, y.a, y.ia, y.oa, y.og))) : (x = this.wj(r, p), x.vk = E, x.gk = f.paused, y && (-1 !== F ? x.Ag.push({
			Sp: F,
			Xl: y.ia,
			Gm: y.oa,
			Jm: y.og,
			Wq: t
		}) : x.Ag.push({
			x: y.x,
			y: y.y,
			Is: y.a,
			Xl: y.ia,
			Gm: y.oa,
			Jm: y.og,
			Wq: t
		}))));
		if (h && !Q) {
			u = 0;
			for (q = K.length; u < q; u++) K[u].Bq(!0);
			Q = !0
		} else if (!h && Q) {
			u = 0;
			for (q = K.length; u < q; u++) K[u].Bq(!1);
			Q = !1
		}
	};
	qa.Id = function() {
		var a, b, c, d;
		a = 0;
		for (b = Ta.length; a < b; a++) c = Ta[a], d = this.b.bg(c.Tj), c.oi(d), c.Tj = -1, d && (G = d.x, M = d.y);
		W(Ta)
	};
	qa.Kv = function(a) {
		if (!this.Nv) {
			!a && x && x.resume && (x.resume(), oa = !1);
			var b, c;
			b = 0;
			for (c = K.length; b < c; b++) K[b].qw(a);
			a && x && x.suspend && (x.suspend(), oa = !0)
		}
	};
	qa.mb = function() {
		var a = this.b.df,
			b, c, d;
		b = 0;
		for (c = K.length; b < c; b++) d = K[b], d.mb(a), 0 !== H && d.Lk();
		var e, f;
		for (e in V) if (V.hasOwnProperty(e)) for (d = V[e], b = 0, c = d.length; b < c; b++) f = d[b], f.mb && f.mb();
		1 === y && this.Ab.Cj() && (this.Ab.mb(a), G = this.Ab.F.x, M = this.Ab.F.y, x.listener.setPosition(this.Ab.F.x, this.Ab.F.y, this.Th), x.listener.setVelocity(this.Ab.Rl(), this.Ab.Sl(), 0))
	};
	var Ua = [];
	qa.pw = function(a) {
		var b, c, d, e, f, g = 0;
		b = 0;
		for (c = a.length; b < c; ++b) if (d = a[b], e = d[0], d = 2 * d[1], (f = 4 < e.length && ".ogg" === e.substr(e.length - 4)) && B || !f && !B) Ua.push({
			filename: e,
			size: d,
			F: null
		}), g += d;
		return g
	};
	qa.vw = function() {
		var a, b, c, d;
		a = 0;
		for (b = Ua.length; a < b; ++a) c = Ua[a], d = this.b.Al + c.filename, c.F = this.wj(d, !1)
	};
	qa.Gu = function() {
		var a = 0,
			b, c, d;
		b = 0;
		for (c = Ua.length; b < c; ++b) d = Ua[b], d.F.lv() || d.F.av() || this.b.Aa || this.b.Ej ? a += d.size : d.F.Zo() && (a += Math.floor(d.size / 2));
		return a
	};
	qa.wj = function(a, b) {
		var c, d, e, f = null;
		c = 0;
		for (d = sa.length; c < d; c++) if (e = sa[c], e.src === a) {
			f = e;
			break
		}
		f || (f = new u(a, b), sa.push(f));
		return f
	};
	qa.Ho = function(a, b, c, d, e) {
		var f, g, l;
		f = 0;
		for (g = K.length; f < g; f++) if (l = K[f], l.src === a && (l.Ws() || c)) return l.tag = b, l;
		a = this.wj(a, c);
		if (!a.aa) return "<preload>" !== b && (a.hk = b, a.Bm = d, a.Jn = e), null;
		l = new E(a, b);
		K.push(l);
		return l
	};
	var Ma = [];
	L.prototype.Gi = function(a) {
		return jb(U, a)
	};
	N.i = new L;
	O.prototype.Play = function(a, b, c, d) {
		!Q && (c = Math.pow(10, c / 20), isFinite(c) || (c = 0), 0 > c && (c = 0), 1 < c && (c = 1), A = this.Ho(this.b.Al + a[0] + (B ? ".ogg" : ".m4a"), d, a[1], 0 !== b, c)) && (A.nn(!1), A.play(0 !== b, c))
	};
	N.wa = new O;
	N.$b = new function() {}
})();

function oc(k) {
	this.b = k
}(function() {
	function k() {}
	function p() {}
	var h = oc.prototype;
	h.qb = function(h) {
		this.Fa = h;
		this.b = h.b
	};
	h.qb.prototype.na = function() {};
	h.Ta = function(h) {
		this.type = h;
		this.b = h.b
	};
	h.Ta.prototype.na = function() {
		var h = this;
		window.addEventListener("resize", function() {
			h.b.trigger(oc.prototype.i.ls, h)
		});
		"undefined" !== typeof navigator.onLine && (window.addEventListener("online", function() {
			h.b.trigger(oc.prototype.i.gs, h)
		}), window.addEventListener("offline", function() {
			h.b.trigger(oc.prototype.i.es, h)
		}));
		"undefined" !== typeof window.applicationCache && (window.applicationCache.addEventListener("updateready", function() {
			h.b.qg = 1;
			h.b.trigger(oc.prototype.i.Xn, h)
		}), window.applicationCache.addEventListener("progress", function(k) {
			h.b.qg = k.loaded / k.total
		}));
		this.b.ub || (document.addEventListener("appMobi.device.update.available", function() {
			h.b.trigger(oc.prototype.i.Xn, h)
		}), document.addEventListener("backbutton", function() {
			h.b.trigger(oc.prototype.i.Sk, h)
		}), document.addEventListener("menubutton", function() {
			h.b.trigger(oc.prototype.i.Tn, h)
		}), document.addEventListener("searchbutton", function() {
			h.b.trigger(oc.prototype.i.ns, h)
		}), document.addEventListener("tizenhwkey", function(k) {
			var p;
			switch (k.keyName) {
			case "back":
				p = h.b.trigger(oc.prototype.i.Sk, h);
				!p && window.tizen && window.tizen.application.getCurrentApplication().exit();
				break;
			case "menu":
				(p = h.b.trigger(oc.prototype.i.Tn, h)) || k.preventDefault()
			}
		}));
		this.b.Gj && WinJS.Application && (WinJS.Application.onbackclick = function() {
			return !!h.b.trigger(oc.prototype.i.Sk, h)
		});
		this.b.ho(function(k) {
			k ? h.b.trigger(oc.prototype.i.hs, h) : h.b.trigger(oc.prototype.i.ks, h)
		});
		this.pv = "undefined" !== typeof window.is_scirra_arcade
	};
	k.prototype.gs = function() {
		return !0
	};
	k.prototype.es = function() {
		return !0
	};
	k.prototype.Xn = function() {
		return !0
	};
	k.prototype.ks = function() {
		return !0
	};
	k.prototype.hs = function() {
		return !0
	};
	k.prototype.ls = function() {
		return !0
	};
	k.prototype.Sk = function() {
		return !0
	};
	k.prototype.Tn = function() {
		return !0
	};
	k.prototype.ns = function() {
		return !0
	};
	h.i = new k;
    //修改为弹出登陆框
	p.prototype.Br = function(h, k) {
        window.console.log('kkkkk'+h);
        game_login();
	};
	h.wa = new p;
	h.$b = new function() {}
})();
var pc = !1;
try {
	!
	function() {
		var k, p, h;
		!
		function() {
			var q = {},
				r = {};
			k = function(h, f, a) {
				q[h] = {
					lt: f,
					Vs: a
				}
			};
			h = p = function(k) {
				function f(a) {
					if ("." !== a.charAt(0)) return a;
					a = a.split("/");
					for (var b = k.split("/").slice(0, -1), c = 0, d = a.length; d > c; c++) {
						var e = a[c];
						".." === e ? b.pop() : "." !== e && b.push(e)
					}
					return b.join("/")
				}
				if (h.Sx = q, r[k]) return r[k];
				if (r[k] = {}, !q[k]) throw Error("Could not find module " + k);
				for (var a, b = q[k], e = b.lt, b = b.Vs, d = [], c = 0, n = e.length; n > c; c++)"exports" === e[c] ? d.push(a = {}) : d.push(p(f(e[c])));
				e = b.apply(this, d);
				return r[k] = a || e
			}
		}();
		k("promise/all", ["./utils", "exports"], function(h, k) {
			var p = h.isArray,
				f = h.isFunction;
			k.all = function(a) {
				if (!p(a)) throw new TypeError("You must pass an array to all.");
				return new this(function(b, e) {
					function d(a) {
						return function(c) {
							h[a] = c;
							0 === --g && b(h)
						}
					}
					var c, h = [],
						g = a.length;
					0 === g && b([]);
					for (var k = 0; k < a.length; k++)(c = a[k]) && f(c.then) ? c.then(d(k), e) : (h[k] = c, 0 === --g && b(h))
				})
			}
		});
		k("promise/asap", ["exports"], function(h) {
			function k() {
				return function() {
					process.jy(a)
				}
			}
			function p() {
				var b = 0,
					c = new d(a),
					e = document.createTextNode("");
				return c.observe(e, {
					characterData: !0
				}), function() {
					e.data = b = ++b % 2
				}
			}
			function f() {
				return function() {
					c.setTimeout(a, 1)
				}
			}
			function a() {
				for (var a = 0; a < n.length; a++) {
					var b = n[a];
					(0, b[0])(b[1])
				}
				n = []
			}
			var b, e = "undefined" != typeof window ? window : {},
				d = e.MutationObserver || e.WebKitMutationObserver,
				c = "undefined" != typeof global ? global : void 0 === this ? window : this,
				n = [];
			b = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? k() : d ? p() : f();
			h.Ps = function(a, c) {
				1 === n.push([a, c]) && b()
			}
		});
		k("promise/config", ["exports"], function(h) {
			var k = {
				by: !1
			};
			h.to = k;
			h.$s = function(h, f) {
				return 2 !== arguments.length ? k[h] : void(k[h] = f)
			}
		});
		k("promise/polyfill", ["./promise", "./utils", "exports"], function(h, k, p) {
			var f = h.Promise,
				a = k.isFunction;
			p.Ov = function() {
				var b;
				b = "undefined" != typeof global ? global : "undefined" != typeof window && window.document ? window : self;
				"Promise" in b && "resolve" in b.Promise && "reject" in b.Promise && "all" in b.Promise && "race" in b.Promise &&
				function() {
					var e;
					return new b.Promise(function(a) {
						e = a
					}), a(e)
				}() || (b.Promise = f)
			}
		});
		k("promise/promise", "./config ./utils ./all ./race ./resolve ./reject ./asap exports".split(" "), function(h, k, p, f, a, b, e, d) {
			function c(a) {
				if (!N(a)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
				if (!(this instanceof c)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
				this.Li = [];
				n(a, this)
			}
			function n(a, b) {
				function c(a) {
					m(b, a)
				}
				function d(a) {
					u(b, a)
				}
				try {
					a(c, d)
				} catch (e) {
					d(e)
				}
			}
			function g(a, b, c, d) {
				var e, f, g, l, h = N(c);
				if (h) try {
					e = c(d), g = !0
				} catch (k) {
					l = !0, f = k
				} else e = d, g = !0;
				w(b, e) || (h && g ? m(b, e) : l ? u(b, f) : a === U ? m(b, e) : a === S && u(b, e))
			}
			function z(a, b, c, d) {
				a = a.Li;
				var e = a.length;
				a[e] = b;
				a[e + U] = c;
				a[e + S] = d
			}
			function l(a, b) {
				for (var c, d, e = a.Li, f = a.Ji, l = 0; l < e.length; l += 3) c = e[l], d = e[l + b], g(b, c, d, f);
				a.Li = null
			}
			function w(a, b) {
				var c, d = null;
				try {
					if (a === b) throw new TypeError("A promises callback cannot return that same promise.");
					if (O(b) && (d = b.then, N(d))) return d.call(b, function(d) {
						return c ? !0 : (c = !0, void(b !== d ? m(a, d) : v(a, d)))
					}, function(b) {
						return c ? !0 : (c = !0, void u(a, b))
					}), !0
				} catch (e) {
					return c ? !0 : (u(a, e), !0)
				}
				return !1
			}
			function m(a, b) {
				a === b ? v(a, b) : w(a, b) || v(a, b)
			}
			function v(a, b) {
				a.Hd === F && (a.Hd = J, a.Ji = b, L.async(E, a))
			}
			function u(a, b) {
				a.Hd === F && (a.Hd = J, a.Ji = b, L.async(D, a))
			}
			function E(a) {
				l(a, a.Hd = U)
			}
			function D(a) {
				l(a, a.Hd = S)
			}
			var L = h.to,
				O = (h.$s, k.Av),
				N = k.isFunction;
			h = (k.now, p.all);
			f = f.race;
			a = a.resolve;
			b = b.reject;
			L.async = e.Ps;
			var F = void 0,
				J = 0,
				U = 1,
				S = 2;
			c.prototype = {
				constructor: c,
				Hd: void 0,
				Ji: void 0,
				Li: void 0,
				then: function(a, b) {
					var c = this,
						d = new this.constructor(function() {});
					if (this.Hd) {
						var e = arguments;
						L.async(function() {
							g(c.Hd, d, e[c.Hd - 1], c.Ji)
						})
					} else z(this, d, a, b);
					return d
				},
				"catch": function(a) {
					return this.then(null, a)
				}
			};
			c.all = h;
			c.race = f;
			c.resolve = a;
			c.reject = b;
			d.Promise = c
		});
		k("promise/race", ["./utils", "exports"], function(h, k) {
			var p = h.isArray;
			k.race = function(f) {
				if (!p(f)) throw new TypeError("You must pass an array to race.");
				return new this(function(a, b) {
					for (var e, d = 0; d < f.length; d++)(e = f[d]) && "function" == typeof e.then ? e.then(a, b) : a(e)
				})
			}
		});
		k("promise/reject", ["exports"], function(h) {
			h.reject = function(h) {
				return new this(function(k, f) {
					f(h)
				})
			}
		});
		k("promise/resolve", ["exports"], function(h) {
			h.resolve = function(h) {
				return h && "object" == typeof h && h.constructor === this ? h : new this(function(k) {
					k(h)
				})
			}
		});
		k("promise/utils", ["exports"], function(h) {
			function k(f) {
				return "function" == typeof f
			}
			var p = Date.now ||
			function() {
				return (new Date).getTime()
			};
			h.Av = function(f) {
				return k(f) || "object" == typeof f && null !== f
			};
			h.isFunction = k;
			h.isArray = function(f) {
				return "[object Array]" === Object.prototype.toString.call(f)
			};
			h.now = p
		});
		p("promise/polyfill").Ov()
	}();
	var qc = function() {
			return function(k) {
				function p(q) {
					if (h[q]) return h[q].qd;
					var r = h[q] = {
						qd: {},
						id: q,
						loaded: !1
					};
					return k[q].call(r.qd, r, r.qd, p), r.loaded = !0, r.qd
				}
				var h = {};
				return p.Zg = k, p.$g = h, p.ht = "", p(0)
			}([function(k, p, h) {
				p.Ii = !0;
				(function() {
					function k(a, b) {
						a[b] = function() {
							var c = arguments;
							return a.ready().then(function() {
								return a[b].apply(a, c)
							})
						}
					}
					function r() {
						for (var a = 1; a < arguments.length; a++) {
							var b = arguments[a];
							if (b) for (var d in b) b.hasOwnProperty(d) && (c(b[d]) ? arguments[0][d] = b[d].slice() : arguments[0][d] = b[d])
						}
						return arguments[0]
					}
					function t(b) {
						for (var c in a) if (a.hasOwnProperty(c) && a[c] === b) return !0;
						return !1
					}
					var f = {},
						a = {
							Sg: "asyncStorage",
							Mf: "localStorageWrapper",
							Tg: "webSQLStorage"
						},
						b = "clear getItem iterate key keys length removeItem setItem".split(" "),
						e = {
							description: "",
							Wf: [a.Sg, a.Tg, a.Mf].slice(),
							name: "localforage",
							size: 4980736,
							ca: "keyvaluepairs",
							version: 1
						},
						d = function(b) {
							var c = c || b.indexedDB || b.webkitIndexedDB || b.mozIndexedDB || b.Mr || b.msIndexedDB,
								d = {};
							d[a.Tg] = !! b.openDatabase;
							d[a.Sg] = !!
							function() {
								if ("undefined" != typeof b.openDatabase && b.navigator && b.navigator.userAgent && /Safari/.test(b.navigator.userAgent) && !/Chrome/.test(b.navigator.userAgent)) return !1;
								try {
									return c && "function" == typeof c.open && "undefined" != typeof b.IDBKeyRange
								} catch (a) {
									return !1
								}
							}();
							var e;
							try {
								e = b.localStorage && "setItem" in b.localStorage && b.localStorage.setItem
							} catch (f) {
								e = !1
							}
							return d[a.Mf] = !! e, d
						}(this),
						c = Array.isArray ||
					function(a) {
						return "[object Array]" === Object.prototype.toString.call(a)
					}, n = new(function() {
						function g(b) {
							if (!(this instanceof g)) throw new TypeError("Cannot call a class as a function");
							this.Sg = a.Sg;
							this.Mf = a.Mf;
							this.Tg = a.Tg;
							this.Xk = r({}, e);
							this.Ue = r({}, this.Xk, b);
							this.Zn = this.nd = null;
							this.oe = !1;
							this.da = null;
							this.$n();
							this.ln(this.Ue.Wf)
						}
						return g.prototype.to = function(a) {
							if ("object" == typeof a) {
								if (this.oe) return Error("Can't call config() after localforage has been used.");
								for (var b in a)"storeName" === b && (a[b] = a[b].replace(/\W/g, "_")), this.Ue[b] = a[b];
								return "driver" in a && a.Wf && this.ln(this.Ue.Wf), !0
							}
							return "string" == typeof a ? this.Ue[a] : this.Ue
						}, g.prototype.Wf = function() {
							return this.Ug || null
						}, g.prototype.Jo = function(a, b, c) {
							var d = this,
								e = function() {
									if (t(a)) switch (a) {
									case d.Sg:
										return new Promise(function(a) {
											a(h(1))
										});
									case d.Mf:
										return new Promise(function(a) {
											a(h(2))
										});
									case d.Tg:
										return new Promise(function(a) {
											a(h(4))
										})
									} else if (f[a]) return Promise.resolve(f[a]);
									return Promise.reject(Error("Driver not found."))
								}();
							return e.then(b, c), e
						}, g.prototype.ready = function(a) {
							var b = this,
								c = b.nd.then(function() {
									return null === b.oe && (b.oe = b.Zn()), b.oe
								});
							return c.then(a, a), c
						}, g.prototype.ln = function(a, b, d) {
							function e() {
								g.Ue.Wf = g.Wf()
							}
							function f(a) {
								return function() {
									function b() {
										for (; c < a.length;) {
											var d = a[c];
											return c++, g.da = null, g.oe = null, g.Jo(d).then(function(a) {
												return g.Gs(a), e(), g.oe = g.Ki(g.Ue), g.oe
											})["catch"](b)
										}
										e();
										return g.nd = Promise.reject(Error("No available storage method found.")), g.nd
									}
									var c = 0;
									return b()
								}
							}
							var g = this;
							c(a) || (a = [a]);
							var h = this.Hs(a);
							return this.nd = (null !== this.nd ? this.nd["catch"](function() {
								return Promise.resolve()
							}) : Promise.resolve()).then(function() {
								var a = h[0];
								return g.da = null, g.oe = null, g.Jo(a).then(function(a) {
									g.Ug = a.Ug;
									e();
									g.$n();
									g.Zn = f(h)
								})
							})["catch"](function() {
								e();
								return g.nd = Promise.reject(Error("No available storage method found.")), g.nd
							}), this.nd.then(b, d), this.nd
						}, g.prototype.supports = function(a) {
							return !!d[a]
						}, g.prototype.Gs = function(a) {
							r(this, a)
						}, g.prototype.Hs = function(a) {
							for (var b = [], c = 0, d = a.length; d > c; c++) {
								var e = a[c];
								this.supports(e) && b.push(e)
							}
							return b
						}, g.prototype.$n = function() {
							for (var a = 0; a < b.length; a++) k(this, b[a])
						}, g.prototype.uo = function(a) {
							return new g(a)
						}, g
					}());
					p["default"] = n
				}).call("undefined" != typeof window ? window : self);
				k.qd = p["default"]
			}, function(k, p) {
				p.Ii = !0;
				(function() {
					function h(a, b) {
						a = a || [];
						b = b || {};
						try {
							return new Blob(a, b)
						} catch (c) {
							if ("TypeError" !== c.name) throw c;
							for (var d = new(u.BlobBuilder || u.Kr || u.Lr || u.WebKitBlobBuilder), e = 0; e < a.length; e += 1) d.append(a[e]);
							return d.getBlob(b.type)
						}
					}
					function k(a) {
						return new Promise(function(b, c) {
							var d = new XMLHttpRequest;
							d.open("GET", a);
							d.withCredentials = !0;
							d.responseType = "arraybuffer";
							d.onreadystatechange = function() {
								return 4 === d.readyState ? 200 === d.status ? b({
									response: d.response,
									type: d.getResponseHeader("Content-Type")
								}) : void c({
									status: d.status,
									response: d.response
								}) : void 0
							};
							d.send()
						})
					}
					function r(a) {
						return (new Promise(function(b, c) {
							var d = h([""], {
								type: "image/png"
							}),
								e = a.transaction([O], "readwrite");
							e.objectStore(O).put(d, "key");
							e.oncomplete = function() {
								var d = a.transaction([O], "readwrite").objectStore(O).get("key");
								d.onerror = c;
								d.onsuccess = function(a) {
									var c = URL.createObjectURL(a.target.result);
									k(c).then(function(a) {
										b(!(!a || "image/png" !== a.type))
									}, function() {
										b(!1)
									}).then(function() {
										URL.revokeObjectURL(c)
									})
								}
							}
						}))["catch"](function() {
							return !1
						})
					}
					function t(a) {
						return "boolean" == typeof D ? Promise.resolve(D) : r(a).then(function(a) {
							return D = a
						})
					}
					function f(a) {
						return new Promise(function(b, c) {
							var d = new FileReader;
							d.onerror = c;
							d.onloadend = function(c) {
								b({
									Yn: !0,
									data: btoa(c.target.result || ""),
									type: a.type
								})
							};
							d.readAsBinaryString(a)
						})
					}
					function a(a) {
						for (var b = atob(a.data), c = b.length, d = new ArrayBuffer(c), e = new Uint8Array(d), f = 0; c > f; f++) e[f] = b.charCodeAt(f);
						return h([d], {
							type: a.type
						})
					}
					function b(a) {
						function b() {
							return Promise.resolve()
						}
						var c = this,
							d = {
								db: null
							};
						if (a) for (var f in a) d[f] = a[f];
						L || (L = {});
						var g = L[d.name];
						g || (g = {
							sj: [],
							db: null
						}, L[d.name] = g);
						g.sj.push(this);
						a = [];
						for (f = 0; f < g.sj.length; f++) {
							var l = g.sj[f];
							l !== this && a.push(l.ready()["catch"](b))
						}
						var h = g.sj.slice(0);
						return Promise.all(a).then(function() {
							return d.db = g.db, e(d, !1)
						}).then(function(a) {
							d.db = a;
							var b;
							b = c.Xk.version;
							if (d.db) {
								var f = !d.db.objectStoreNames.contains(d.ca),
									g = d.version > d.db.version;
								(d.version < d.db.version && (d.version !== b && u.console.warn('The database "' + d.name + "\" can't be downgraded from version " + d.db.version + " to version " + d.version + "."), d.version = d.db.version), g || f) ? (f && (b = d.db.version + 1, b > d.version && (d.version = b)), b = !0) : b = !1
							} else b = !0;
							return b ? e(d, !0) : a
						}).then(function(a) {
							d.db = g.db = a;
							c.da = d;
							for (a = 0; a < h.length; a++) {
								var b = h[a];
								b !== c && (b.da.db = d.db, b.da.version = d.version)
							}
						})
					}
					function e(a, b) {
						return new Promise(function(c, d) {
							if (a.db) {
								if (!b) return c(a.db);
								a.db.close()
							}
							var e = [a.name];
							b && e.push(a.version);
							var f = E.open.apply(E, e);
							b && (f.onupgradeneeded = function(b) {
								var c = f.result;
								try {
									c.createObjectStore(a.ca), 1 >= b.oldVersion && c.createObjectStore(O)
								} catch (d) {
									if ("ConstraintError" !== d.name) throw d;
									u.console.warn('The database "' + a.name + '" has been upgraded from version ' + b.oldVersion + " to version " + b.newVersion + ', but the storage "' + a.ca + '" already exists.')
								}
							});
							f.onerror = function() {
								d(f.error)
							};
							f.onsuccess = function() {
								c(f.result)
							}
						})
					}
					function d(b, c) {
						var d = this;
						"string" != typeof b && (u.console.warn(b + " used as a key, but it is not a string."), b = String(b));
						var e = new Promise(function(c, e) {
							d.ready().then(function() {
								var f = d.da,
									g = f.db.transaction(f.ca, "readonly").objectStore(f.ca).get(b);
								g.onsuccess = function() {
									var b = g.result;
									void 0 === b && (b = null);
									b && b.Yn && (b = a(b));
									c(b)
								};
								g.onerror = function() {
									e(g.error)
								}
							})["catch"](e)
						});
						return v(e, c), e
					}
					function c(b, c) {
						var d = this,
							e = new Promise(function(c, e) {
								d.ready().then(function() {
									var f = d.da,
										g = f.db.transaction(f.ca, "readonly").objectStore(f.ca).openCursor(),
										l = 1;
									g.onsuccess = function() {
										var d = g.result;
										if (d) {
											var e = d.value;
											e && e.Yn && (e = a(e));
											e = b(e, d.key, l++);
											void 0 !== e ? c(e) : d["continue"]()
										} else c()
									};
									g.onerror = function() {
										e(g.error)
									}
								})["catch"](e)
							});
						return v(e, c), e
					}
					function n(a, b, c) {
						var d = this;
						"string" != typeof a && (u.console.warn(a + " used as a key, but it is not a string."), a = String(a));
						var e = new Promise(function(c, e) {
							var g;
							d.ready().then(function() {
								return g = d.da, b instanceof Blob ? t(g.db).then(function(a) {
									return a ? b : f(b)
								}) : b
							}).then(function(b) {
								var d = g.db.transaction(g.ca, "readwrite"),
									f = d.objectStore(g.ca);
								null === b && (b = void 0);
								var l = f.put(b, a);
								d.oncomplete = function() {
									void 0 === b && (b = null);
									c(b)
								};
								d.onabort = d.onerror = function() {
									e(l.error ? l.error : l.transaction.error)
								}
							})["catch"](e)
						});
						return v(e, c), e
					}
					function g(a, b) {
						var c = this;
						"string" != typeof a && (u.console.warn(a + " used as a key, but it is not a string."), a = String(a));
						var d = new Promise(function(b, d) {
							c.ready().then(function() {
								var e = c.da,
									f = e.db.transaction(e.ca, "readwrite"),
									g = f.objectStore(e.ca)["delete"](a);
								f.oncomplete = function() {
									b()
								};
								f.onerror = function() {
									d(g.error)
								};
								f.onabort = function() {
									d(g.error ? g.error : g.transaction.error)
								}
							})["catch"](d)
						});
						return v(d, b), d
					}
					function z(a) {
						var b = this,
							c = new Promise(function(a, c) {
								b.ready().then(function() {
									var d = b.da,
										e = d.db.transaction(d.ca, "readwrite"),
										f = e.objectStore(d.ca).clear();
									e.oncomplete = function() {
										a()
									};
									e.onabort = e.onerror = function() {
										c(f.error ? f.error : f.transaction.error)
									}
								})["catch"](c)
							});
						return v(c, a), c
					}
					function l(a) {
						var b = this,
							c = new Promise(function(a, c) {
								b.ready().then(function() {
									var d = b.da,
										e = d.db.transaction(d.ca, "readonly").objectStore(d.ca).count();
									e.onsuccess = function() {
										a(e.result)
									};
									e.onerror = function() {
										c(e.error)
									}
								})["catch"](c)
							});
						return v(c, a), c
					}
					function w(a, b) {
						var c = this,
							d = new Promise(function(b, d) {
								return 0 > a ? void b(null) : void c.ready().then(function() {
									var e = c.da,
										f = !1,
										g = e.db.transaction(e.ca, "readonly").objectStore(e.ca).openCursor();
									g.onsuccess = function() {
										var c = g.result;
										return c ? void(0 === a ? b(c.key) : f ? b(c.key) : (f = !0, c.advance(a))) : void b(null)
									};
									g.onerror = function() {
										d(g.error)
									}
								})["catch"](d)
							});
						return v(d, b), d
					}
					function m(a) {
						var b = this,
							c = new Promise(function(a, c) {
								b.ready().then(function() {
									var d = b.da,
										e = d.db.transaction(d.ca, "readonly").objectStore(d.ca).openCursor(),
										f = [];
									e.onsuccess = function() {
										var b = e.result;
										return b ? (f.push(b.key), void b["continue"]()) : void a(f)
									};
									e.onerror = function() {
										c(e.error)
									}
								})["catch"](c)
							});
						return v(c, a), c
					}
					function v(a, b) {
						b && a.then(function(a) {
							b(null, a)
						}, function(a) {
							b(a)
						})
					}
					var u = this,
						E = E || this.indexedDB || this.webkitIndexedDB || this.mozIndexedDB || this.Mr || this.msIndexedDB;
					if (E) {
						var D, L, O = "local-forage-detect-blob-support";
						p["default"] = {
							Ug: "asyncStorage",
							Ki: b,
							hp: c,
							getItem: d,
							setItem: n,
							removeItem: g,
							clear: z,
							length: l,
							key: w,
							keys: m
						}
					}
				}).call("undefined" != typeof window ? window : self);
				k.qd = p["default"]
			}, function(k, p, h) {
				p.Ii = !0;
				(function() {
					function k(a, b) {
						b && a.then(function(a) {
							b(null, a)
						}, function(a) {
							b(a)
						})
					}
					var r = this,
						t = null;
					try {
						if (!(this.localStorage && "setItem" in this.localStorage)) return;
						t = this.localStorage
					} catch (f) {
						return
					}
					p["default"] = {
						Ug: "localStorageWrapper",
						Ki: function(a) {
							var b = {};
							if (a) for (var e in a) b[e] = a[e];
							return b.xd = b.name + "/", b.ca !== this.Xk.ca && (b.xd += b.ca + "/"), this.da = b, (new Promise(function(a) {
								a(h(3))
							})).then(function(a) {
								return b.Df = a, Promise.resolve()
							})
						},
						hp: function(a, b) {
							var e = this,
								d = e.ready().then(function() {
									for (var b = e.da, d = b.xd, f = d.length, h = t.length, l = 1, k = 0; h > k; k++) {
										var m = t.key(k);
										if (0 === m.indexOf(d)) {
											var p = t.getItem(m);
											if (p && (p = b.Df.hj(p)), p = a(p, m.substring(f), l++), void 0 !== p) return p
										}
									}
								});
							return k(d, b), d
						},
						getItem: function(a, b) {
							var e = this;
							"string" != typeof a && (r.console.warn(a + " used as a key, but it is not a string."), a = String(a));
							var d = e.ready().then(function() {
								var b = e.da,
									d = t.getItem(b.xd + a);
								return d && (d = b.Df.hj(d)), d
							});
							return k(d, b), d
						},
						setItem: function(a, b, e) {
							var d = this;
							"string" != typeof a && (r.console.warn(a + " used as a key, but it is not a string."), a = String(a));
							var c = d.ready().then(function() {
								void 0 === b && (b = null);
								var c = b;
								return new Promise(function(e, f) {
									var l = d.da;
									l.Df.serialize(b, function(b, d) {
										if (d) f(d);
										else try {
											t.setItem(l.xd + a, b), e(c)
										} catch (h) {
											"QuotaExceededError" !== h.name && "NS_ERROR_DOM_QUOTA_REACHED" !== h.name || f(h), f(h)
										}
									})
								})
							});
							return k(c, e), c
						},
						removeItem: function(a, b) {
							var e = this;
							"string" != typeof a && (r.console.warn(a + " used as a key, but it is not a string."), a = String(a));
							var d = e.ready().then(function() {
								t.removeItem(e.da.xd + a)
							});
							return k(d, b), d
						},
						clear: function(a) {
							var b = this,
								e = b.ready().then(function() {
									for (var a = b.da.xd, c = t.length - 1; 0 <= c; c--) {
										var e = t.key(c);
										0 === e.indexOf(a) && t.removeItem(e)
									}
								});
							return k(e, a), e
						},
						length: function(a) {
							var b = this.keys().then(function(a) {
								return a.length
							});
							return k(b, a), b
						},
						key: function(a, b) {
							var e = this,
								d = e.ready().then(function() {
									var b, d = e.da;
									try {
										b = t.key(a)
									} catch (f) {
										b = null
									}
									return b && (b = b.substring(d.xd.length)), b
								});
							return k(d, b), d
						},
						keys: function(a) {
							var b = this,
								e = b.ready().then(function() {
									for (var a = b.da, c = t.length, e = [], f = 0; c > f; f++) 0 === t.key(f).indexOf(a.xd) && e.push(t.key(f).substring(a.xd.length));
									return e
								});
							return k(e, a), e
						}
					}
				}).call("undefined" != typeof window ? window : self);
				k.qd = p["default"]
			}, function(k, p) {
				p.Ii = !0;
				(function() {
					function h(a) {
						var b, e, d, c, f;
						b = .75 * a.length;
						var g = a.length,
							h = 0;
						"=" === a[a.length - 1] && (b--, "=" === a[a.length - 2] && b--);
						var l = new ArrayBuffer(b),
							k = new Uint8Array(l);
						for (b = 0; g > b; b += 4) e = r.indexOf(a[b]), d = r.indexOf(a[b + 1]), c = r.indexOf(a[b + 2]), f = r.indexOf(a[b + 3]), k[h++] = e << 2 | d >> 4, k[h++] = (15 & d) << 4 | c >> 2, k[h++] = (3 & c) << 6 | 63 & f;
						return l
					}
					function k(a) {
						var b = new Uint8Array(a),
							e = "";
						for (a = 0; a < b.length; a += 3) e += r[b[a] >> 2], e += r[(3 & b[a]) << 4 | b[a + 1] >> 4], e += r[(15 & b[a + 1]) << 2 | b[a + 2] >> 6], e += r[63 & b[a + 2]];
						return 2 === b.length % 3 ? e = e.substring(0, e.length - 1) + "=" : 1 === b.length % 3 && (e = e.substring(0, e.length - 2) + "=="), e
					}
					var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
						t = /^~~local_forage_type~([^~]+)~/,
						f = this;
					p["default"] = {
						serialize: function(a, b) {
							var e = "";
							if (a && (e = a.toString()), a && ("[object ArrayBuffer]" === a.toString() || a.buffer && "[object ArrayBuffer]" === a.buffer.toString())) {
								var d, c = "__lfsc__:";
								a instanceof ArrayBuffer ? (d = a, c += "arbf") : (d = a.buffer, "[object Int8Array]" === e ? c += "si08" : "[object Uint8Array]" === e ? c += "ui08" : "[object Uint8ClampedArray]" === e ? c += "uic8" : "[object Int16Array]" === e ? c += "si16" : "[object Uint16Array]" === e ? c += "ur16" : "[object Int32Array]" === e ? c += "si32" : "[object Uint32Array]" === e ? c += "ui32" : "[object Float32Array]" === e ? c += "fl32" : "[object Float64Array]" === e ? c += "fl64" : b(Error("Failed to get type for BinaryArray")));
								b(c + k(d))
							} else if ("[object Blob]" === e) e = new FileReader, e.onload = function() {
								var c = "~~local_forage_type~" + a.type + "~" + k(this.result);
								b("__lfsc__:blob" + c)
							}, e.readAsArrayBuffer(a);
							else try {
								b(JSON.stringify(a))
							} catch (f) {
								console.error("Couldn't convert value into a JSON string: ", a), b(null, f)
							}
						},
						hj: function(a) {
							if ("__lfsc__:" !== a.substring(0, 9)) return JSON.parse(a);
							var b, e = a.substring(13);
							a = a.substring(9, 13);
							if ("blob" === a && t.test(e)) {
								var d = e.match(t);
								b = d[1];
								e = e.substring(d[0].length)
							}
							e = h(e);
							switch (a) {
							case "arbf":
								return e;
							case "blob":
								var c;
								e = [e];
								b = {
									type: b
								};
								e = e || [];
								b = b || {};
								try {
									c = new Blob(e, b)
								} catch (k) {
									if ("TypeError" !== k.name) throw k;
									c = new(f.BlobBuilder || f.Kr || f.Lr || f.WebKitBlobBuilder);
									for (a = 0; a < e.length; a += 1) c.append(e[a]);
									c = c.getBlob(b.type)
								}
								return c;
							case "si08":
								return new Int8Array(e);
							case "ui08":
								return new Uint8Array(e);
							case "uic8":
								return new Uint8ClampedArray(e);
							case "si16":
								return new Int16Array(e);
							case "ur16":
								return new Uint16Array(e);
							case "si32":
								return new Int32Array(e);
							case "ui32":
								return new Uint32Array(e);
							case "fl32":
								return new Float32Array(e);
							case "fl64":
								return new Float64Array(e);
							default:
								throw Error("Unkown type: " + a);
							}
						},
						ry: h,
						Vx: k
					}
				}).call("undefined" != typeof window ? window : self);
				k.qd = p["default"]
			}, function(k, p, h) {
				p.Ii = !0;
				(function() {
					function k(a) {
						var b = this,
							c = {
								db: null
							};
						if (a) for (var d in a) c[d] = "string" != typeof a[d] ? a[d].toString() : a[d];
						var e = new Promise(function(d, e) {
							try {
								c.db = z(c.name, String(c.version), c.description, c.size)
							} catch (f) {
								return b.ln(b.Mf).then(function() {
									return b.Ki(a)
								}).then(d)["catch"](e)
							}
							c.db.transaction(function(a) {
								a.executeSql("CREATE TABLE IF NOT EXISTS " + c.ca + " (id INTEGER PRIMARY KEY, key unique, value)", [], function() {
									b.da = c;
									d()
								}, function(a, b) {
									e(b)
								})
							})
						});
						return (new Promise(function(a) {
							a(h(3))
						})).then(function(a) {
							return c.Df = a, e
						})
					}
					function r(a, b) {
						var c = this;
						"string" != typeof a && (g.console.warn(a + " used as a key, but it is not a string."), a = String(a));
						var d = new Promise(function(b, d) {
							c.ready().then(function() {
								var e = c.da;
								e.db.transaction(function(c) {
									c.executeSql("SELECT * FROM " + e.ca + " WHERE key = ? LIMIT 1", [a], function(a, c) {
										var d = c.rows.length ? c.rows.item(0).value : null;
										d && (d = e.Df.hj(d));
										b(d)
									}, function(a, b) {
										d(b)
									})
								})
							})["catch"](d)
						});
						return n(d, b), d
					}
					function t(a, b) {
						var c = this,
							d = new Promise(function(b, d) {
								c.ready().then(function() {
									var e = c.da;
									e.db.transaction(function(c) {
										c.executeSql("SELECT * FROM " + e.ca, [], function(c, d) {
											for (var f = d.rows, g = f.length, h = 0; g > h; h++) {
												var k = f.item(h),
													m = k.value;
												if (m && (m = e.Df.hj(m)), m = a(m, k.key, h + 1), void 0 !== m) return void b(m)
											}
											b()
										}, function(a, b) {
											d(b)
										})
									})
								})["catch"](d)
							});
						return n(d, b), d
					}
					function f(a, b, c) {
						var d = this;
						"string" != typeof a && (g.console.warn(a + " used as a key, but it is not a string."), a = String(a));
						var e = new Promise(function(c, e) {
							d.ready().then(function() {
								void 0 === b && (b = null);
								var f = b,
									g = d.da;
								g.Df.serialize(b, function(b, d) {
									d ? e(d) : g.db.transaction(function(d) {
										d.executeSql("INSERT OR REPLACE INTO " + g.ca + " (key, value) VALUES (?, ?)", [a, b], function() {
											c(f)
										}, function(a, b) {
											e(b)
										})
									}, function(a) {
										a.code === a.QUOTA_ERR && e(a)
									})
								})
							})["catch"](e)
						});
						return n(e, c), e
					}
					function a(a, b) {
						var c = this;
						"string" != typeof a && (g.console.warn(a + " used as a key, but it is not a string."), a = String(a));
						var d = new Promise(function(b, d) {
							c.ready().then(function() {
								var e = c.da;
								e.db.transaction(function(c) {
									c.executeSql("DELETE FROM " + e.ca + " WHERE key = ?", [a], function() {
										b()
									}, function(a, b) {
										d(b)
									})
								})
							})["catch"](d)
						});
						return n(d, b), d
					}
					function b(a) {
						var b = this,
							c = new Promise(function(a, c) {
								b.ready().then(function() {
									var d = b.da;
									d.db.transaction(function(b) {
										b.executeSql("DELETE FROM " + d.ca, [], function() {
											a()
										}, function(a, b) {
											c(b)
										})
									})
								})["catch"](c)
							});
						return n(c, a), c
					}
					function e(a) {
						var b = this,
							c = new Promise(function(a, c) {
								b.ready().then(function() {
									var d = b.da;
									d.db.transaction(function(b) {
										b.executeSql("SELECT COUNT(key) as c FROM " + d.ca, [], function(b, c) {
											var d = c.rows.item(0).$g;
											a(d)
										}, function(a, b) {
											c(b)
										})
									})
								})["catch"](c)
							});
						return n(c, a), c
					}
					function d(a, b) {
						var c = this,
							d = new Promise(function(b, d) {
								c.ready().then(function() {
									var e = c.da;
									e.db.transaction(function(c) {
										c.executeSql("SELECT key FROM " + e.ca + " WHERE id = ? LIMIT 1", [a + 1], function(a, c) {
											var d = c.rows.length ? c.rows.item(0).key : null;
											b(d)
										}, function(a, b) {
											d(b)
										})
									})
								})["catch"](d)
							});
						return n(d, b), d
					}
					function c(a) {
						var b = this,
							c = new Promise(function(a, c) {
								b.ready().then(function() {
									var d = b.da;
									d.db.transaction(function(b) {
										b.executeSql("SELECT key FROM " + d.ca, [], function(b, c) {
											for (var d = [], e = 0; e < c.rows.length; e++) d.push(c.rows.item(e).key);
											a(d)
										}, function(a, b) {
											c(b)
										})
									})
								})["catch"](c)
							});
						return n(c, a), c
					}
					function n(a, b) {
						b && a.then(function(a) {
							b(null, a)
						}, function(a) {
							b(a)
						})
					}
					var g = this,
						z = this.openDatabase;
					z && (p["default"] = {
						Ug: "webSQLStorage",
						Ki: k,
						hp: t,
						getItem: r,
						setItem: f,
						removeItem: a,
						clear: b,
						length: e,
						key: d,
						keys: c
					})
				}).call("undefined" != typeof window ? window : self);
				k.qd = p["default"]
			}])
		};
	"object" == typeof exports && "object" == typeof module ? module.qd = qc() : "function" == typeof define && define.Ux ? define([], qc) : "object" == typeof exports ? exports.localforage = qc() : this.localforage = qc()
} catch (rc) {
	pc = !0
}
function sc(k) {
	this.b = k
}(function() {
	function k() {}
	function p() {}
	function h() {}
	var q = "",
		r = "",
		t = "";
	"undefined" !== typeof window.is_scirra_arcade && (t = "sa" + window.scirra_arcade_id + "_");
	var f = sc.prototype;
	f.qb = function(a) {
		this.Fa = a;
		this.b = a.b
	};
	f.qb.prototype.na = function() {};
	f.Ta = function(a) {
		this.type = a;
		this.b = a.b
	};
	var a = f.Ta.prototype;
	a.na = function() {
		this.Sm = 0
	};
	a.yg = function() {};
	a.kc = function() {
		return {}
	};
	a.Hc = function() {};
	k.prototype.Zr = function(a) {
		return q === a
	};
	k.prototype.Qr = function() {
		return !0
	};
	k.prototype.Hi = function() {
		return !0
	};
	k.prototype.Qn = function(a) {
		return q === a
	};
	k.prototype.Yr = function(a) {
		return q === a
	};
	k.prototype.Nr = function() {
		return !0
	};
	f.i = new k;
	p.prototype.vs = function(a, e) {
		if (pc) this.b.trigger(sc.prototype.i.Hi, this);
		else {
			var d = t + a;
			this.Sm++;
			var c = this;
			localforage.setItem(d, e, function(d, e) {
				c.Sm--;
				d ? c.b.trigger(sc.prototype.i.Hi, c) : (q = a, r = e, c.b.trigger(sc.prototype.i.Qr, c), c.b.trigger(sc.prototype.i.Zr, c), r = q = "");
				0 === c.Sm && c.b.trigger(sc.prototype.i.Nr, c)
			})
		}
	};
	p.prototype.qr = function(a) {
		if (pc) this.b.trigger(sc.prototype.i.Hi, this);
		else {
			var e = this;
			localforage.getItem(t + a, function(d, c) {
				d ? e.b.trigger(sc.prototype.i.Hi, e) : (q = a, null === c ? (r = "", e.b.trigger(sc.prototype.i.Yr, e)) : (r = c, e.b.trigger(sc.prototype.i.Qn, e)), r = q = "")
			})
		}
	};
	f.wa = new p;
	h.prototype.Hr = function(a) {
		a.Dq(r)
	};
	f.$b = new h
})();

function mc(k) {
	this.b = k
}(function() {
	function k() {
		if (0 === this.ol.length) {
			var a = document.createElement("canvas");
			a.width = this.width;
			a.height = this.height;
			var b = a.getContext("2d");
			this.Hg ? b.drawImage(this.Ub, this.wg, this.xg, this.width, this.height, 0, 0, this.width, this.height) : b.drawImage(this.Ub, 0, 0, this.width, this.height);
			this.ol = a.toDataURL("image/png")
		}
		return this.ol
	}
	function p() {}
	function h(a) {
		a[0] = 0;
		a[1] = 0;
		a[2] = 0;
		c.push(a)
	}
	function q(a, b) {
		return a < b ? "" + a + "," + b : "" + b + "," + a
	}
	function r(a, b, d, e) {
		b = b.uid;
		d = d.uid;
		var f = q(b, d);
		if (a.hasOwnProperty(f)) a[f][2] = e;
		else {
			var g = c.length ? c.pop() : [0, 0, 0];
			g[0] = b;
			g[1] = d;
			g[2] = e;
			a[f] = g
		}
	}
	function t(a, b, c) {
		b = q(b.uid, c.uid);
		a.hasOwnProperty(b) && (h(a[b]), delete a[b])
	}
	function f(a, b, c) {
		b = q(b.uid, c.uid);
		if (a.hasOwnProperty(b)) return n = a[b][2], !0;
		n = -2;
		return !1
	}
	var a = mc.prototype;
	a.qb = function(a) {
		this.Fa = a;
		this.b = a.b
	};
	var b = a.qb.prototype;
	b.na = function() {
		if (!this.L) {
			var a, b, c, d, e, f, g, l, h;
			this.Uc = [];
			this.vh = !1;
			a = 0;
			for (b = this.Gb.length; a < b; a++) {
				e = this.Gb[a];
				g = {};
				g.name = e[0];
				g.speed = e[1];
				g.loop = e[2];
				g.cn = e[3];
				g.dn = e[4];
				g.kq = e[5];
				g.T = e[6];
				g.frames = [];
				c = 0;
				for (d = e[7].length; c < d; c++) f = e[7][c], l = {}, l.Uq = f[0], l.Vq = f[1], l.wg = f[2], l.xg = f[3], l.width = f[4], l.height = f[5], l.duration = f[6], l.cc = f[7], l.ec = f[8], l.Zl = f[9], l.ik = f[10], l.lq = f[11], l.Hg = 0 !== l.width, l.ol = "", l.$x = k, h = {
					left: 0,
					top: 0,
					right: 1,
					bottom: 1
				}, l.pn = h, l.le = null, (h = this.b.su(f[0])) ? l.Ub = h : (l.Ub = new Image, l.Ub.dt = f[0], l.Ub.ct = f[1], l.Ub.Us = null, this.b.Jw(l.Ub, f[0])), g.frames.push(l), this.Uc.push(l);
				this.Gb[a] = g
			}
		}
	};
	b.ir = function() {
		var a, b, c;
		a = 0;
		for (b = this.e.length; a < b; a++) c = this.e[a], c.aj = c.Bc.le
	};
	b.Mm = function() {
		if (!this.L) {
			var a, b, c;
			a = 0;
			for (b = this.Uc.length; a < b; ++a) c = this.Uc[a], c.Ub.Us = null, c.le = null;
			this.vh = !1;
			this.ir()
		}
	};
	b.Yp = function() {
		if (!this.L && this.e.length) {
			var a, b, c;
			a = 0;
			for (b = this.Uc.length; a < b; ++a) c = this.Uc[a], c.le = this.b.q.pp(c.Ub, this.b.V, c.lq);
			this.ir()
		}
	};
	b.uv = function() {
		if (!this.L && !this.vh && this.b.q) {
			var a, b, c;
			a = 0;
			for (b = this.Uc.length; a < b; ++a) c = this.Uc[a], c.le = this.b.q.pp(c.Ub, this.b.V, c.lq);
			this.vh = !0
		}
	};
	b.er = function() {
		if (!this.L && !this.e.length && this.vh) {
			var a, b, c;
			a = 0;
			for (b = this.Uc.length; a < b; ++a) c = this.Uc[a], this.b.q.deleteTexture(c.le), c.le = null;
			this.vh = !1
		}
	};
	var e = [];
	b.pq = function(a) {
		var b, c, d;
		W(e);
		b = 0;
		for (c = this.Uc.length; b < c; ++b) d = this.Uc[b].Ub, -1 === e.indexOf(d) && (a.drawImage(d, 0, 0), e.push(d))
	};
	a.Ta = function(a) {
		this.type = a;
		this.b = a.b;
		a = this.type.Gb[0].frames[0].ik;
		this.vc ? this.ba.ri(a) : this.ba = new db(a)
	};
	var d = a.Ta.prototype;
	d.na = function() {
		this.visible = 0 === this.O[0];
		this.Ld = 0 !== this.O[3];
		1 === this.type.Gb.length && 1 === this.type.Gb[0].frames.length || 0 === this.type.Gb[0].speed || this.b.xn(this);
		this.ya = this.Go(this.O[1]) || this.type.Gb[0];
		this.u = this.O[2];
		0 > this.u && (this.u = 0);
		this.u >= this.ya.frames.length && (this.u = this.ya.frames.length - 1);
		var a = this.ya.frames[this.u];
		this.ba.ri(a.ik);
		this.cc = a.cc;
		this.ec = a.ec;
		this.hh = this.ya.speed;
		this.xe = this.ya.dn;
		this.vc ? this.od.reset() : this.od = new bb;
		this.Td = this.od.W;
		this.We = !0;
		this.Jd = 0;
		this.Ve = !0;
		this.il = this.io = "";
		this.Xs = 0;
		this.hl = -1;
		this.type.uv();
		var b, c, d, e, f, g, l, a = 0;
		for (b = this.type.Gb.length; a < b; a++) for (e = this.type.Gb[a], c = 0, d = e.frames.length; c < d; c++) f = e.frames[c], 0 === f.width && (f.width = f.Ub.width, f.height = f.Ub.height), f.Hg && (l = f.Ub, g = f.pn, g.left = f.wg / l.width, g.top = f.xg / l.height, g.right = (f.wg + f.width) / l.width, g.bottom = (f.xg + f.height) / l.height, 0 === f.wg && 0 === f.xg && f.width === l.width && f.height === l.height && (f.Hg = !1));
		this.Bc = this.ya.frames[this.u];
		this.aj = this.Bc.le
	};
	d.kc = function() {
		var a = {
			a: this.ya.T,
			f: this.u,
			cas: this.hh,
			fs: this.Td,
			ar: this.Jd,
			at: this.od.W,
			rt: this.xe
		};
		this.We || (a.ap = this.We);
		this.Ve || (a.af = this.Ve);
		return a
	};
	d.Hc = function(a) {
		var b = this.xu(a.a);
		b && (this.ya = b);
		this.u = a.f;
		0 > this.u && (this.u = 0);
		this.u >= this.ya.frames.length && (this.u = this.ya.frames.length - 1);
		this.hh = a.cas;
		this.Td = a.fs;
		this.Jd = a.ar;
		this.od.reset();
		this.od.W = a.at;
		this.We = a.hasOwnProperty("ap") ? a.ap : !0;
		this.Ve = a.hasOwnProperty("af") ? a.af : !0;
		a.hasOwnProperty("rt") ? this.xe = a.rt : this.xe = this.ya.dn;
		this.Bc = this.ya.frames[this.u];
		this.aj = this.Bc.le;
		this.ba.ri(this.Bc.ik);
		this.cc = this.Bc.cc;
		this.ec = this.Bc.ec
	};
	d.al = function(a) {
		this.u = a ? 0 : this.ya.frames.length - 1;
		this.We = !1;
		this.io = this.ya.name;
		this.b.trigger(mc.prototype.i.Pr, this);
		this.b.trigger(mc.prototype.i.Or, this);
		this.Jd = 0
	};
	d.Zg = function() {
		return this.od.W
	};
	d.mb = function() {
		this.od.add(this.b.Il(this));
		this.il.length && this.nt();
		0 <= this.hl && this.ot();
		var a = this.od.W,
			b = this.ya,
			c = b.frames[this.u],
			d = c.duration / this.hh;
		this.We && a >= this.Td + d && (this.Ve ? this.u++ : this.u--, this.Td += d, this.u >= b.frames.length && (b.kq ? (this.Ve = !1, this.u = b.frames.length - 2) : b.loop ? this.u = this.xe : (this.Jd++, this.Jd >= b.cn ? this.al(!1) : this.u = this.xe)), 0 > this.u && (b.kq ? (this.u = 1, this.Ve = !0, b.loop || (this.Jd++, this.Jd >= b.cn && this.al(!0))) : b.loop ? this.u = this.xe : (this.Jd++, this.Jd >= b.cn ? this.al(!0) : this.u = this.xe)), 0 > this.u ? this.u = 0 : this.u >= b.frames.length && (this.u = b.frames.length - 1), a > this.Td + b.frames[this.u].duration / this.hh && (this.Td = a), a = b.frames[this.u], this.Nf(c, a), this.b.ja = !0)
	};
	d.Go = function(a) {
		var b, c, d;
		b = 0;
		for (c = this.type.Gb.length; b < c; b++) if (d = this.type.Gb[b], jb(d.name, a)) return d;
		return null
	};
	d.xu = function(a) {
		var b, c, d;
		b = 0;
		for (c = this.type.Gb.length; b < c; b++) if (d = this.type.Gb[b], d.T === a) return d;
		return null
	};
	d.nt = function() {
		var a = this.ya.frames[this.u],
			b = this.Go(this.il);
		this.il = "";
		!b || jb(b.name, this.ya.name) && this.We || (this.ya = b, this.hh = b.speed, this.xe = b.dn, 0 > this.u && (this.u = 0), this.u >= this.ya.frames.length && (this.u = this.ya.frames.length - 1), 1 === this.Xs && (this.u = 0), this.We = !0, this.Td = this.od.W, this.Ve = !0, this.Nf(a, this.ya.frames[this.u]), this.b.ja = !0)
	};
	d.ot = function() {
		var a = this.ya.frames[this.u],
			b = this.u;
		this.u = T(this.hl);
		0 > this.u && (this.u = 0);
		this.u >= this.ya.frames.length && (this.u = this.ya.frames.length - 1);
		b !== this.u && (this.Nf(a, this.ya.frames[this.u]), this.Td = this.od.W, this.b.ja = !0);
		this.hl = -1
	};
	d.Nf = function(a, b) {
		var c = a.width,
			d = a.height,
			e = b.width,
			f = b.height;
		c != e && (this.width *= e / c);
		d != f && (this.height *= f / d);
		this.cc = b.cc;
		this.ec = b.ec;
		this.ba.ri(b.ik);
		this.r();
		this.Bc = b;
		this.aj = b.le;
		c = 0;
		for (d = this.H.length; c < d; c++) e = this.H[c], e.Jv && e.Jv(a, b);
		this.b.trigger(mc.prototype.i.Nf, this)
	};
	d.Qd = function(a) {
		a.globalAlpha = this.opacity;
		var b = this.Bc,
			c = b.Hg,
			d = b.Ub,
			e = this.x,
			f = this.y,
			g = this.width,
			l = this.height;
		if (0 === this.m && 0 <= g && 0 <= l) e -= this.cc * g, f -= this.ec * l, this.b.be && (e = Math.round(e), f = Math.round(f)), c ? a.drawImage(d, b.wg, b.xg, b.width, b.height, e, f, g, l) : a.drawImage(d, e, f, g, l);
		else {
			this.b.be && (e = Math.round(e), f = Math.round(f));
			a.save();
			var h = 0 < g ? 1 : -1,
				k = 0 < l ? 1 : -1;
			a.translate(e, f);
			1 === h && 1 === k || a.scale(h, k);
			a.rotate(this.m * h * k);
			e = 0 - this.cc * ia(g);
			f = 0 - this.ec * ia(l);
			c ? a.drawImage(d, b.wg, b.xg, b.width, b.height, e, f, ia(g), ia(l)) : a.drawImage(d, e, f, ia(g), ia(l));
			a.restore()
		}
	};
	d.Vf = function(a) {
		this.Ec(a)
	};
	d.Ec = function(a) {
		a.xc(this.aj);
		a.Eg(this.opacity);
		var b = this.Bc,
			c = this.Jb;
		if (this.b.be) {
			var d = Math.round(this.x) - this.x,
				e = Math.round(this.y) - this.y;
			b.Hg ? a.Ne(c.nb + d, c.ob + e, c.Vb + d, c.Wb + e, c.Kb + d, c.Lb + e, c.Hb + d, c.Ib + e, b.pn) : a.ji(c.nb + d, c.ob + e, c.Vb + d, c.Wb + e, c.Kb + d, c.Lb + e, c.Hb + d, c.Ib + e)
		} else b.Hg ? a.Ne(c.nb, c.ob, c.Vb, c.Wb, c.Kb, c.Lb, c.Hb, c.Ib, b.pn) : a.ji(c.nb, c.ob, c.Vb, c.Wb, c.Kb, c.Lb, c.Hb, c.Ib)
	};
	d.Bu = function(a) {
		var b = this.Bc,
			c, d;
		c = 0;
		for (d = b.Zl.length; c < d; c++) if (jb(a, b.Zl[c][0])) return c;
		return -1
	};
	d.Ll = function(a, b) {
		var c = this.Bc,
			d = c.Zl,
			e;
		R(a) ? e = this.Bu(a) : e = a - 1;
		e = T(e);
		if (0 > e || e >= d.length) return b ? this.x : this.y;
		var f = (d[e][1] - c.cc) * this.width,
			d = d[e][2],
			d = (d - c.ec) * this.height,
			c = Math.cos(this.m);
		e = Math.sin(this.m);
		var g = f * c - d * e,
			d = d * c + f * e,
			f = g + this.x,
			d = d + this.y;
		return b ? f : d
	};
	var c = [],
		n = -2,
		g = [];
	p.prototype.Sr = function(a) {
		if (!a) return !1;
		var b = this.b,
			c = b.Hl(),
			d = c.type,
			e = null;
		c.S.collmemory ? e = c.S.collmemory : (e = {}, c.S.collmemory = e);
		c.S.spriteCreatedDestroyCallback || (c.S.spriteCreatedDestroyCallback = !0, b.Yk(function(a) {
			var b = c.S.collmemory;
			a = a.uid;
			var d, e;
			for (d in b) b.hasOwnProperty(d) && (e = b[d], e[0] === a || e[1] === a) && (h(b[d]), delete b[d])
		}));
		var l = d.Z(),
			k = a.Z(),
			l = l.rc(),
			m, p, q, w, v, z, K, A = this.b.Fd,
			B = A - 1,
			H = b.ib().Mb;
		for (p = 0; p < l.length; p++) {
			q = l[p];
			k.ka ? (q.la(), this.b.Gl(q.j, a, q.xa, g), m = g) : m = k.rc();
			for (w = 0; w < m.length; w++) v = m[w], b.Tb(q, v) || b.Ys(q, v) ? (z = f(e, q, v), z = !z || n < B, r(e, q, v, A), z && (b.nk(H.pa), z = d.Z(), K = a.Z(), z.ka = !1, K.ka = !1, d === a ? (z.e.length = 2, z.e[0] = q, z.e[1] = v, d.Wc()) : (z.e.length = 1, K.e.length = 1, z.e[0] = q, K.e[0] = v, d.Wc(), a.Wc()), H.dw(), b.Af(H.pa))) : t(e, q, v);
			W(g)
		}
		return !1
	};
	var z = null,
		l = new ba,
		w = !1,
		m = [],
		v = new ra(0, 0, 0, 0);
	b.finish = function(a) {
		if (w) {
			if (a) {
				var b = this.b.ib().Mb.Jc;
				a = z.Z();
				var c = l.Se(),
					d, e;
				if (a.ka) {
					a.ka = !1;
					W(a.e);
					d = 0;
					for (e = c.length; d < e; ++d) a.e[d] = c[d];
					if (b) for (W(a.R), d = 0, e = z.e.length; d < e; ++d) c = z.e[d], l.contains(c) || a.R.push(c)
				} else if (b) for (b = a.e.length, d = 0, e = c.length; d < e; ++d) a.e[b + d] = c[d], Ba(a.R, c[d]);
				else ya(a.e, c);
				z.Wc()
			}
			l.clear();
			w = !1
		}
	};
	p.prototype.Fr = function(a) {
		if (a) {
			var b = !1,
				c, d, e, f = this.b.Hl(),
				g = f.type,
				f = f.Dj;
			c = a.Z();
			d = this.b.ib().Mb.Jc;
			var h;
			c.ka ? (this.la(), v.Sf(this.xa), v.offset(0, 0), this.b.Gl(this.j, a, v, m), h = m) : h = d ? c.R : c.e;
			z = a;
			w = g !== a && !f;
			c = 0;
			for (d = h.length; c < d; c++) if (e = h[c], this.b.Tb(this, e)) {
				b = !0;
				if (f) break;
				g !== a && l.add(e)
			}
			W(m);
			a = b
		} else a = !1;
		return a
	};
	p.prototype.Or = function(a) {
		return jb(this.io, a)
	};
	p.prototype.Pr = function() {
		return !0
	};
	p.prototype.Nf = function() {
		return !0
	};
	a.i = new p;
	a.wa = new function() {};
	a.$b = new function() {}
})();

function tc(k) {
	this.b = k
}(function() {
	function k() {
		return a.length ? a.pop() : {}
	}
	function p(b) {
		var e, d;
		e = 0;
		for (d = b.length; e < d; e++) a.push(b[e]);
		W(b)
	}
	function h(a) {
		return a.length && " " === a.charAt(a.length - 1) ? a.substring(0, a.length - 1) : a
	}
	function q() {}
	var r = tc.prototype;
	r.na = function() {
		r.wa.zs = function(a) {
			this.width !== a && (this.width = a, this.If = !0, this.r())
		}
	};
	r.qb = function(a) {
		this.Fa = a;
		this.b = a.b
	};
	var t = r.qb.prototype;
	t.na = function() {};
	t.Mm = function() {
		if (!this.L) {
			var a, e, d;
			a = 0;
			for (e = this.e.length; a < e; a++) d = this.e[a], d.zd = null, d.yf = null, d.hc = null
		}
	};
	r.Ta = function(a) {
		this.type = a;
		this.b = a.b;
		this.vc ? W(this.Ie) : this.Ie = [];
		this.If = !0
	};
	t = r.Ta.prototype;
	t.na = function() {
		this.text = this.O[0];
		this.visible = 0 === this.O[1];
		this.font = this.O[2];
		this.color = this.O[3];
		this.Bj = this.O[4];
		this.Nk = this.O[5];
		this.Ln = 0 === this.O[7];
		this.rm = this.Nj = this.width;
		this.Mj = this.height;
		this.um = this.O[8];
		this.rj = this.Yf = "";
		this.Sq = this.Tq = this.gi = 0;
		this.Lv();
		this.hc = this.yf = this.zd = null;
		this.Op = !1;
		this.Rh = this.b.Fd;
		this.vc ? this.Bg.set(0, 0, 1, 1) : this.Bg = new ra(0, 0, 1, 1);
		this.b.q && this.b.xn(this)
	};
	t.Lv = function() {
		var a = this.font.split(" "),
			e;
		for (e = 0; e < a.length; e++) if ("pt" === a[e].substr(a[e].length - 2, 2)) {
			this.gi = parseInt(a[e].substr(0, a[e].length - 2));
			this.Zm = Math.ceil(this.gi / 72 * 96) + 4;
			0 < e && (this.rj = a[e - 1]);
			this.Yf = a[e + 1];
			for (e += 2; e < a.length; e++) this.Yf += " " + a[e];
			break
		}
	};
	t.kc = function() {
		return {
			t: this.text,
			f: this.font,
			c: this.color,
			ha: this.Bj,
			va: this.Nk,
			wr: this.Ln,
			lho: this.um,
			fn: this.Yf,
			fs: this.rj,
			ps: this.gi,
			pxh: this.Zm,
			tw: this.Tq,
			th: this.Sq,
			lrt: this.Rh
		}
	};
	t.Hc = function(a) {
		this.text = a.t;
		this.font = a.f;
		this.color = a.c;
		this.Bj = a.ha;
		this.Nk = a.va;
		this.Ln = a.wr;
		this.um = a.lho;
		this.Yf = a.fn;
		this.rj = a.fs;
		this.gi = a.ps;
		this.Zm = a.pxh;
		this.Tq = a.tw;
		this.Sq = a.th;
		this.Rh = a.lrt;
		this.If = !0;
		this.rm = this.Nj = this.width;
		this.Mj = this.height
	};
	t.mb = function() {
		if (this.b.q && this.hc && 300 <= this.b.Fd - this.Rh) {
			var a = this.j;
			this.la();
			var e = this.xa;
			if (e.right < a.ta || e.bottom < a.ua || e.left > a.Da || e.top > a.Ca) this.b.q.deleteTexture(this.hc), this.zd = this.yf = this.hc = null
		}
	};
	t.yg = function() {
		this.zd = this.yf = null;
		this.b.q && this.hc && this.b.q.deleteTexture(this.hc);
		this.hc = null
	};
	t.Zg = function() {
		this.font = this.rj + " " + this.gi.toString() + "pt " + this.Yf;
		this.If = !0;
		this.b.ja = !0
	};
	t.Qd = function(a, e) {
		a.font = this.font;
		a.textBaseline = "top";
		a.fillStyle = this.color;
		a.globalAlpha = e ? 1 : this.opacity;
		var d = 1;
		e && (d = this.j.ac(), a.save(), a.scale(d, d));
		if (this.If || this.width !== this.rm) this.type.Fa.Cs(this.text, this.Ie, a, this.width, this.Ln), this.If = !1, this.rm = this.width;
		this.la();
		var d = e ? 0 : this.Jb.nb,
			c = e ? 0 : this.Jb.ob;
		this.b.be && (d = d + .5 | 0, c = c + .5 | 0);
		0 === this.m || e || (a.save(), a.translate(d, c), a.rotate(this.m), c = d = 0);
		var f = c + this.height,
			g = this.Zm,
			g = g + this.um,
			h, l;
		1 === this.Nk ? c += Math.max(this.height / 2 - this.Ie.length * g / 2, 0) : 2 === this.Nk && (c += Math.max(this.height - this.Ie.length * g - 2, 0));
		for (l = 0; l < this.Ie.length && !(h = d, 1 === this.Bj ? h = d + (this.width - this.Ie[l].width) / 2 : 2 === this.Bj && (h = d + (this.width - this.Ie[l].width)), a.fillText(this.Ie[l].text, h, c), c += g, c >= f - g); l++);
		(0 !== this.m || e) && a.restore();
		this.Rh = this.b.Fd
	};
	t.Ec = function(a) {
		if (!(1 > this.width || 1 > this.height)) {
			var e = this.If || this.Op;
			this.Op = !1;
			var d = this.j.ac(),
				c = this.j.Ka(),
				f = this.Bg,
				g = d * this.width,
				h = d * this.height,
				l = Math.ceil(g),
				k = Math.ceil(h),
				m = this.b.B / 2,
				p = this.b.A / 2;
			this.yf || (this.zd = document.createElement("canvas"), this.zd.width = l, this.zd.height = k, this.Nj = l, this.Mj = k, e = !0, this.yf = this.zd.getContext("2d"));
			if (l !== this.Nj || k !== this.Mj) this.zd.width = l, this.zd.height = k, this.hc && (a.deleteTexture(this.hc), this.hc = null), e = !0;
			e && (this.yf.clearRect(0, 0, l, k), this.Qd(this.yf, !0), this.hc || (this.hc = a.oc(l, k, this.b.V, this.b.De)), a.Iw(this.zd, this.hc, this.b.De));
			this.Nj = l;
			this.Mj = k;
			a.xc(this.hc);
			a.Eg(this.opacity);
			a.Oc();
			a.translate(-m, -p);
			a.yc();
			var r = this.Jb,
				e = this.j.Ba(r.nb, r.ob, !0, !0),
				m = this.j.Ba(r.nb, r.ob, !1, !0),
				p = this.j.Ba(r.Vb, r.Wb, !0, !0),
				q = this.j.Ba(r.Vb, r.Wb, !1, !0),
				t = this.j.Ba(r.Kb, r.Lb, !0, !0),
				L = this.j.Ba(r.Kb, r.Lb, !1, !0),
				O = this.j.Ba(r.Hb, r.Ib, !0, !0),
				r = this.j.Ba(r.Hb, r.Ib, !1, !0);
			if (this.b.be || 0 === this.m && 0 === c) var N = (e + .5 | 0) - e,
				F = (m + .5 | 0) - m,
				e = e + N,
				m = m + F,
				p = p + N,
				q = q + F,
				t = t + N,
				L = L + F,
				O = O + N,
				r = r + F;
			0 === this.m && 0 === c ? (p = e + l, q = m, t = p, L = m + k, O = e, r = L, f.right = 1, f.bottom = 1) : (f.right = g / l, f.bottom = h / k);
			a.Ne(e, m, p, q, t, L, O, r, f);
			a.Oc();
			a.scale(d, d);
			a.sk(-this.j.Ka());
			a.translate((this.j.ta + this.j.Da) / -2, (this.j.ua + this.j.Ca) / -2);
			a.yc();
			this.Rh = this.b.Fd
		}
	};
	var f = [];
	r.As = function(a) {
		W(f);
		for (var e = "", d, c = 0; c < a.length;) if (d = a.charAt(c), "\n" === d) e.length && (f.push(e), e = ""), f.push("\n"), ++c;
		else if (" " === d || "\t" === d || "-" === d) {
			do e += a.charAt(c), c++;
			while (c < a.length && (" " === a.charAt(c) || "\t" === a.charAt(c)));
			f.push(e);
			e = ""
		} else c < a.length && (e += d, c++);
		e.length && f.push(e)
	};
	var a = [];
	r.Cs = function(a, e, d, c, f) {
		if (a && a.length) if (2 >= c) p(e);
		else {
			if (100 >= a.length && -1 === a.indexOf("\n")) {
				var g = d.measureText(a).width;
				if (g <= c) {
					p(e);
					e.push(k());
					e[0].text = a;
					e[0].width = g;
					return
				}
			}
			this.Ds(a, e, d, c, f)
		} else p(e)
	};
	r.Ds = function(b, e, d, c, n) {
		n && (this.As(b), b = f);
		var g = "",
			p, l, r, m = 0;
		for (r = 0; r < b.length; r++)"\n" === b[r] ? (m >= e.length && e.push(k()), g = h(g), l = e[m], l.text = g, l.width = d.measureText(g).width, m++, g = "") : (p = g, g += b[r], l = d.measureText(g).width, l >= c && (m >= e.length && e.push(k()), p = h(p), l = e[m], l.text = p, l.width = d.measureText(p).width, m++, g = b[r], n || " " !== g || (g = "")));
		g.length && (m >= e.length && e.push(k()), g = h(g), l = e[m], l.text = g, l.width = d.measureText(g).width, m++);
		for (r = m; r < e.length; r++) a.push(e[r]);
		e.length = m
	};
	r.i = new function() {};
	q.prototype.ws = function(a) {
		fa(a) && 1E9 > a && (a = Math.round(1E10 * a) / 1E10);
		a = a.toString();
		this.text !== a && (this.text = a, this.If = !0, this.b.ja = !0)
	};
	r.wa = new q;
	r.$b = new function() {}
})();

function Z(k) {
	this.b = k
}(function() {
	function k(a) {
		b = a.x;
		e = a.y;
		d = a.z
	}
	function p(a, b, d, e) {
		var f;
		f = c.length ? c.pop() : new h;
		f.init(a, b, d, e);
		return f
	}
	function h() {
		this.vi = this.id = this.y = this.x = this.Ck = this.Bk = this.qm = this.time = this.un = 0;
		this.Bi = this.Ik = !1
	}
	function q() {}
	function r() {}
	var t = Z.prototype;
	t.qb = function(a) {
		this.Fa = a;
		this.b = a.b
	};
	t.qb.prototype.na = function() {};
	t.Ta = function(a) {
		this.type = a;
		this.b = a.b;
		this.touches = [];
		this.Dm = !1
	};
	var f = t.Ta.prototype,
		a = {
			left: 0,
			top: 0
		};
	f.nh = function(a) {
		var b, c;
		b = 0;
		for (c = this.touches.length; b < c; b++) if (this.touches[b].id === a) return b;
		return -1
	};
	var b = 0,
		e = 0,
		d = 0,
		c = [];
	h.prototype.init = function(a, b, c, d) {
		var e = Ya();
		this.un = this.qm = this.time = e;
		this.Bk = a;
		this.Ck = b;
		this.x = a;
		this.y = b;
		this.pressure = this.height = this.width = 0;
		this.id = c;
		this.vi = d;
		this.Bi = this.Ik = !1
	};
	h.prototype.update = function(a, b, c, d, e, f) {
		this.qm = this.time;
		this.time = a;
		this.x = b;
		this.y = c;
		this.width = d;
		this.height = e;
		this.pressure = f;
		!this.Bi && 15 <= Qa(this.Bk, this.Ck, this.x, this.y) && (this.Bi = !0)
	};
	h.prototype.xv = function(a, b) {
		!this.Ik && 500 <= Ya() - this.un && !this.Bi && 15 > Qa(this.Bk, this.Ck, this.x, this.y) && (this.Ik = !0, a.Gd = this.vi, a.Lg = this.id, a.dg = b, a.b.trigger(Z.prototype.i.Wr, a), a.Nd = this.x, a.Od = this.y, a.b.trigger(Z.prototype.i.Xr, a), a.dg = 0)
	};
	var n = -1E3,
		g = -1E3,
		z = -1E4;
	h.prototype.Ip = function(a, b) {
		if (!this.Ik) {
			var c = Ya();
			333 >= c - this.un && !this.Bi && 15 > Qa(this.Bk, this.Ck, this.x, this.y) && (a.Gd = this.vi, a.Lg = this.id, a.dg = b, 666 >= c - z && 25 > Qa(n, g, this.x, this.y) ? (a.b.trigger(Z.prototype.i.Tr, a), a.Nd = this.x, a.Od = this.y, a.b.trigger(Z.prototype.i.Ur, a), g = n = -1E3, z = -1E4) : (a.b.trigger(Z.prototype.i.qs, a), a.Nd = this.x, a.Od = this.y, a.b.trigger(Z.prototype.i.rs, a), n = this.x, g = this.y, z = c), a.dg = 0)
		}
	};
	f.na = function() {
		this.nv = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
		this.dg = this.Lg = this.Gd = this.Od = this.Nd = this.co = this.bo = this.ao = this.Ls = this.Ks = this.Js = this.fk = this.ek = this.dk = 0;
		this.Gw = 0 !== this.O[0];
		var a = 0 < this.b.Nb ? document : this.b.canvas,
			b = document;
		this.b.ub ? b = a = window.Canvas : this.b.tc && (b = a = window);
		var c = this;
		window.navigator.pointerEnabled ? (a.addEventListener("pointerdown", function(a) {
			c.Xp(a)
		}, !1), a.addEventListener("pointermove", function(a) {
			c.Wp(a)
		}, !1), b.addEventListener("pointerup", function(a) {
			c.ck(a, !1)
		}, !1), b.addEventListener("pointercancel", function(a) {
			c.ck(a, !0)
		}, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function(a) {
			a.preventDefault()
		}, !1), document.addEventListener("MSGestureHold", function(a) {
			a.preventDefault()
		}, !1), this.b.canvas.addEventListener("gesturehold", function(a) {
			a.preventDefault()
		}, !1), document.addEventListener("gesturehold", function(a) {
			a.preventDefault()
		}, !1))) : window.navigator.msPointerEnabled ? (a.addEventListener("MSPointerDown", function(a) {
			c.Xp(a)
		}, !1), a.addEventListener("MSPointerMove", function(a) {
			c.Wp(a)
		}, !1), b.addEventListener("MSPointerUp", function(a) {
			c.ck(a, !1)
		}, !1), b.addEventListener("MSPointerCancel", function(a) {
			c.ck(a, !0)
		}, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function(a) {
			a.preventDefault()
		}, !1), document.addEventListener("MSGestureHold", function(a) {
			a.preventDefault()
		}, !1))) : (a.addEventListener("touchstart", function(a) {
			c.$p(a)
		}, !1), a.addEventListener("touchmove", function(a) {
			c.Zp(a)
		}, !1), b.addEventListener("touchend", function(a) {
			c.Nm(a, !1)
		}, !1), b.addEventListener("touchcancel", function(a) {
			c.Nm(a, !0)
		}, !1));
		if (this.nv) {
			var d = function(a) {
					a = a.reading;
					c.ao = a.accelerationX;
					c.bo = a.accelerationY;
					c.co = a.accelerationZ
				},
				e = function(a) {
					a = a.reading;
					c.dk = a.yawDegrees;
					c.ek = a.pitchDegrees;
					c.fk = a.rollDegrees
				},
				f = Windows.Devices.Sensors.Accelerometer.getDefault();
			f && (f.reportInterval = Math.max(f.minimumReportInterval, 16), f.addEventListener("readingchanged", d));
			var g = Windows.Devices.Sensors.Inclinometer.getDefault();
			g && (g.reportInterval = Math.max(g.minimumReportInterval, 16), g.addEventListener("readingchanged", e));
			document.addEventListener("visibilitychange", function() {
				document.hidden || document.msHidden ? (f && f.removeEventListener("readingchanged", d), g && g.removeEventListener("readingchanged", e)) : (f && f.addEventListener("readingchanged", d), g && g.addEventListener("readingchanged", e))
			}, !1)
		} else window.addEventListener("deviceorientation", function(a) {
			c.dk = a.alpha || 0;
			c.ek = a.beta || 0;
			c.fk = a.gamma || 0
		}, !1), window.addEventListener("devicemotion", function(a) {
			a.accelerationIncludingGravity && (c.Js = a.accelerationIncludingGravity.x || 0, c.Ks = a.accelerationIncludingGravity.y || 0, c.Ls = a.accelerationIncludingGravity.z || 0);
			a.acceleration && (c.ao = a.acceleration.x || 0, c.bo = a.acceleration.y || 0, c.co = a.acceleration.z || 0)
		}, !1);
		this.Gw && !this.b.Aa && (jQuery(document).mousemove(function(a) {
			c.Hv(a)
		}), jQuery(document).mousedown(function(a) {
			c.Gv(a)
		}), jQuery(document).mouseup(function(a) {
			c.Iv(a)
		}));
		!this.b.Kh && this.b.fc && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(k, null, {
			frequency: 40
		});
		this.b.yw(this)
	};
	f.Wp = function(b) {
		if (b.pointerType !== b.MSPOINTER_TYPE_MOUSE && "mouse" !== b.pointerType) {
			b.preventDefault && b.preventDefault();
			var c = this.nh(b.pointerId),
				d = Ya();
			if (0 <= c) {
				var e = this.b.Aa ? a : jQuery(this.b.canvas).offset(),
					c = this.touches[c];
				2 > d - c.time || c.update(d, b.pageX - e.left, b.pageY - e.top, b.width || 0, b.height || 0, b.pressure || 0)
			}
		}
	};
	f.Xp = function(b) {
		if (b.pointerType !== b.MSPOINTER_TYPE_MOUSE && "mouse" !== b.pointerType) {
			b.preventDefault && kb(b) && b.preventDefault();
			var c = this.b.Aa ? a : jQuery(this.b.canvas).offset(),
				d = b.pageX - c.left,
				c = b.pageY - c.top;
			Ya();
			this.Gd = this.touches.length;
			this.Lg = b.pointerId;
			this.touches.push(p(d, c, b.pointerId, this.Gd));
			this.b.wd = !0;
			this.b.trigger(Z.prototype.i.Vn, this);
			this.b.trigger(Z.prototype.i.Wk, this);
			this.Nd = d;
			this.Od = c;
			this.b.trigger(Z.prototype.i.Vk, this);
			this.b.wd = !1
		}
	};
	f.ck = function(a, b) {
		if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
			a.preventDefault && kb(a) && a.preventDefault();
			var d = this.nh(a.pointerId);
			this.Gd = 0 <= d ? this.touches[d].vi : -1;
			this.Lg = 0 <= d ? this.touches[d].id : -1;
			this.b.wd = !0;
			this.b.trigger(Z.prototype.i.Un, this);
			this.b.trigger(Z.prototype.i.Wn, this);
			0 <= d && (b || this.touches[d].Ip(this, d), 100 > c.length && c.push(this.touches[d]), this.touches.splice(d, 1));
			this.b.wd = !1
		}
	};
	f.Zp = function(b) {
		b.preventDefault && b.preventDefault();
		var c = Ya(),
			d, e, f, g;
		d = 0;
		for (e = b.changedTouches.length; d < e; d++) if (f = b.changedTouches[d], g = this.nh(f.identifier), 0 <= g) {
			var h = this.b.Aa ? a : jQuery(this.b.canvas).offset();
			g = this.touches[g];
			2 > c - g.time || g.update(c, f.pageX - h.left, f.pageY - h.top, 2 * (f.my || f.wy || f.ey || f.hy || 0), 2 * (f.ny || f.xy || f.fy || f.iy || 0), f.Yx || f.vy || f.cy || f.gy || 0)
		}
	};
	f.$p = function(b) {
		b.preventDefault && kb(b) && b.preventDefault();
		var c = this.b.Aa ? a : jQuery(this.b.canvas).offset();
		Ya();
		this.b.wd = !0;
		var d, e, f, g;
		d = 0;
		for (e = b.changedTouches.length; d < e; d++) if (f = b.changedTouches[d], g = this.nh(f.identifier), -1 === g) {
			g = f.pageX - c.left;
			var h = f.pageY - c.top;
			this.Gd = this.touches.length;
			this.Lg = f.identifier;
			this.touches.push(p(g, h, f.identifier, this.Gd));
			this.b.trigger(Z.prototype.i.Vn, this);
			this.b.trigger(Z.prototype.i.Wk, this);
			this.Nd = g;
			this.Od = h;
			this.b.trigger(Z.prototype.i.Vk, this)
		}
		this.b.wd = !1
	};
	f.Nm = function(a, b) {
		a.preventDefault && kb(a) && a.preventDefault();
		this.b.wd = !0;
		var d, e, f;
		d = 0;
		for (e = a.changedTouches.length; d < e; d++) f = a.changedTouches[d], f = this.nh(f.identifier), 0 <= f && (this.Gd = this.touches[f].vi, this.Lg = this.touches[f].id, this.b.trigger(Z.prototype.i.Un, this), this.b.trigger(Z.prototype.i.Wn, this), b || this.touches[f].Ip(this, f), 100 > c.length && c.push(this.touches[f]), this.touches.splice(f, 1));
		this.b.wd = !1
	};
	f.Zg = function() {
		return this.b.fc && 0 === this.dk && 0 !== d ? 90 * d : this.dk
	};
	f.ht = function() {
		return this.b.fc && 0 === this.ek && 0 !== e ? 90 * e : this.ek
	};
	f.Xx = function() {
		return this.b.fc && 0 === this.fk && 0 !== b ? 90 * b : this.fk
	};
	f.Gv = function(a) {
		this.$p({
			changedTouches: [{
				pageX: a.pageX,
				pageY: a.pageY,
				identifier: 0
			}]
		});
		this.Dm = !0
	};
	f.Hv = function(a) {
		this.Dm && this.Zp({
			changedTouches: [{
				pageX: a.pageX,
				pageY: a.pageY,
				identifier: 0
			}]
		})
	};
	f.Iv = function(a) {
		a.preventDefault && this.b.Po && !this.b.De && a.preventDefault();
		this.b.Po = !0;
		this.Nm({
			changedTouches: [{
				pageX: a.pageX,
				pageY: a.pageY,
				identifier: 0
			}]
		});
		this.Dm = !1
	};
	f.wn = function() {
		var a, b, c, d = Ya();
		a = 0;
		for (b = this.touches.length; a < b; ++a) c = this.touches[a], c.time <= d - 50 && (c.qm = d), c.xv(this, a)
	};
	q.prototype.Wk = function() {
		return !0
	};
	q.prototype.Wn = function() {
		return !0
	};
	q.prototype.Vk = function(a) {
		return a ? this.b.Ek(a, this.Nd, this.Od) : !1
	};
	q.prototype.Vn = function(a) {
		a = Math.floor(a);
		return a === this.Gd
	};
	q.prototype.Un = function(a) {
		a = Math.floor(a);
		return a === this.Gd
	};
	q.prototype.Wr = function() {
		return !0
	};
	q.prototype.qs = function() {
		return !0
	};
	q.prototype.Tr = function() {
		return !0
	};
	q.prototype.Xr = function(a) {
		return a ? this.b.Ek(a, this.Nd, this.Od) : !1
	};
	q.prototype.rs = function(a) {
		return a ? this.b.Ek(a, this.Nd, this.Od) : !1
	};
	q.prototype.Ur = function(a) {
		return a ? this.b.Ek(a, this.Nd, this.Od) : !1
	};
	t.i = new q;
	r.prototype.Es = function(a, b) {
		var c = this.dg;
		if (0 > c || c >= this.touches.length) a.C(0);
		else {
			var d, e, f, g, h;
			ea(b) ? (d = this.b.oh(0), e = d.scale, f = d.md, g = d.Lc, h = d.m, d.scale = 1, d.md = 1, d.Lc = 1, d.m = 0, a.C(d.yb(this.touches[c].x, this.touches[c].y, !0)), d.scale = e, d.md = f, d.Lc = g, d.m = h) : (d = fa(b) ? this.b.oh(b) : this.b.Nl(b)) ? a.C(d.yb(this.touches[c].x, this.touches[c].y, !0)) : a.C(0)
		}
	};
	r.prototype.Fs = function(a, b) {
		var c = this.dg;
		if (0 > c || c >= this.touches.length) a.C(0);
		else {
			var d, e, f, g, h;
			ea(b) ? (d = this.b.oh(0), e = d.scale, f = d.md, g = d.Mc, h = d.m, d.scale = 1, d.md = 1, d.Mc = 1, d.m = 0, a.C(d.yb(this.touches[c].x, this.touches[c].y, !1)), d.scale = e, d.md = f, d.Mc = g, d.m = h) : (d = fa(b) ? this.b.oh(b) : this.b.Nl(b)) ? a.C(d.yb(this.touches[c].x, this.touches[c].y, !1)) : a.C(0)
		}
	};
	t.$b = new r
})();

function wc(k) {
	this.b = k
}(function() {
	function k() {}
	function p() {}
	var h = wc.prototype;
	h.qb = function(h) {
		this.behavior = h;
		this.b = h.b
	};
	h.qb.prototype.na = function() {};
	h.Ta = function(h, k) {
		this.type = h;
		this.behavior = h.behavior;
		this.d = k;
		this.b = h.b;
		this.yk = this.sn = this.rn = this.Yl = this.ah = this.ih = this.mg = this.ng = this.mi = this.Sh = !1;
		this.Ob = null;
		this.vm = -1;
		this.rf = this.qf = 0;
		this.qj = !1;
		this.hf = this.Vc = 0;
		this.pj = !0;
		this.ea = this.K = 0
	};
	var q = h.Ta.prototype;
	q.Fn = function() {
		this.Ia = Math.cos(this.ag);
		this.Ja = Math.sin(this.ag);
		this.Bf = Math.cos(this.ag - Math.PI / 2);
		this.Cf = Math.sin(this.ag - Math.PI / 2);
		this.Ia = ib(this.Ia);
		this.Ja = ib(this.Ja);
		this.Bf = ib(this.Bf);
		this.Cf = ib(this.Cf);
		this.vj = this.td;
		0 > this.td && (this.Ia *= -1, this.Ja *= -1, this.td = Math.abs(this.td))
	};
	q.na = function() {
		this.tg = this.O[0];
		this.Of = this.O[1];
		this.Uf = this.O[2];
		this.Nh = this.O[3];
		this.vj = this.td = this.O[4];
		this.Zj = this.O[5];
		this.sl = 0 !== this.O[6];
		this.nm = this.O[7] / 1E3;
		this.jt = 1 === this.O[8];
		this.enabled = 0 !== this.O[9];
		this.Qg = !1;
		this.Rg = this.b.he(this.d);
		this.wm = -1;
		this.Hf = 0;
		this.ag = X(90);
		this.Fn();
		var h = this;
		this.jt && !this.b.Aa && (jQuery(document).keydown(function(k) {
			h.Ev(k)
		}), jQuery(document).keyup(function(k) {
			h.Fv(k)
		}));
		this.vc || (this.Np = function(k) {
			h.Km(k)
		});
		this.b.Yk(this.Np);
		this.d.S.isPlatformBehavior = !0
	};
	q.kc = function() {
		return {
			ii: this.Yl,
			lfx: this.qf,
			lfy: this.rf,
			lfo: this.Ob ? this.Ob.uid : -1,
			am: this.Vc,
			en: this.enabled,
			fall: this.hf,
			ft: this.pj,
			dx: this.K,
			dy: this.ea,
			ms: this.tg,
			acc: this.Of,
			dec: this.Uf,
			js: this.Nh,
			g: this.td,
			g1: this.vj,
			mf: this.Zj,
			wof: this.Qg,
			woj: this.Rg ? this.Rg.uid : -1,
			ga: this.ag,
			edj: this.sl,
			cdj: this.ah,
			dj: this.ih,
			sus: this.nm
		}
	};
	q.Hc = function(h) {
		this.Yl = h.ii;
		this.qf = h.lfx;
		this.rf = h.lfy;
		this.vm = h.lfo;
		this.Vc = h.am;
		this.enabled = h.en;
		this.hf = h.fall;
		this.pj = h.ft;
		this.K = h.dx;
		this.ea = h.dy;
		this.tg = h.ms;
		this.Of = h.acc;
		this.Uf = h.dec;
		this.Nh = h.js;
		this.td = h.g;
		this.vj = h.g1;
		this.Zj = h.mf;
		this.Qg = h.wof;
		this.wm = h.woj;
		this.ag = h.ga;
		this.sl = h.edj;
		this.ah = h.cdj;
		this.ih = h.dj;
		this.nm = h.sus;
		this.yk = this.sn = this.rn = this.mg = this.ng = this.mi = this.Sh = !1;
		this.Hf = 0;
		this.Fn()
	};
	q.Id = function() {
		-1 === this.vm ? this.Ob = null : this.Ob = this.b.bg(this.vm); - 1 === this.wm ? this.Rg = null : this.Rg = this.b.bg(this.wm)
	};
	q.Km = function(h) {
		this.Ob == h && (this.Ob = null)
	};
	q.yg = function() {
		this.Ob = null;
		this.b.Zv(this.Np)
	};
	q.Ev = function(h) {
		switch (h.which) {
		case 38:
			h.preventDefault();
			this.ng = !0;
			break;
		case 37:
			h.preventDefault();
			this.Sh = !0;
			break;
		case 39:
			h.preventDefault(), this.mi = !0
		}
	};
	q.Fv = function(h) {
		switch (h.which) {
		case 38:
			h.preventDefault();
			this.mg = this.ng = !1;
			break;
		case 37:
			h.preventDefault();
			this.Sh = !1;
			break;
		case 39:
			h.preventDefault(), this.mi = !1
		}
	};
	q.zg = function() {
		this.ng = this.mi = this.Sh = !1
	};
	q.Zg = function() {
		return 0 > this.td ? -1 : 1
	};
	q.$o = function() {
		var h = null,
			k = null,
			f, a;
		f = this.d.x;
		a = this.d.y;
		this.d.x += this.Ia;
		this.d.y += this.Ja;
		this.d.r();
		if (this.Ob && this.b.Tb(this.d, this.Ob)) return this.d.x = f, this.d.y = a, this.d.r(), this.Ob;
		(h = this.b.Db(this.d)) || 0 !== this.hf || (k = this.b.he(this.d, !0));
		this.d.x = f;
		this.d.y = a;
		this.d.r();
		if (h) {
			if (this.b.Tb(this.d, h)) return null;
			this.qj = !1;
			return h
		}
		if (k && k.length) {
			a = h = 0;
			for (f = k.length; h < f; h++) k[a] = k[h], this.b.Tb(this.d, k[h]) || a++;
			if (1 <= a) return this.qj = !0, k[0]
		}
		return null
	};
	q.mb = function() {};
	q.oq = function() {
		var h = this.b.Il(this.d),
			k, f, a, b, e, d, c, n, g;
		this.ng || this.yk || (this.mg = !1);
		var p = this.Sh || this.rn;
		a = this.mi || this.sn;
		var l = (b = this.ng || this.yk) && !this.mg;
		this.yk = this.sn = this.rn = !1;
		if (this.enabled) {
			this.Yl && (l = b = a = p = !1);
			b || (this.Hf = 0);
			n = this.Ob;
			g = !1;
			this.pj && ((this.b.Db(this.d) || this.b.he(this.d)) && this.b.Nc(this.d, -this.Ia, -this.Ja, 4, !0), this.pj = !1);
			!n || 0 !== this.ea || n.y === this.rf && n.x === this.qf || (k = n.x - this.qf, f = n.y - this.rf, this.d.x += k, this.d.y += f, this.d.r(), this.qf = n.x, this.rf = n.y, g = !0, this.b.Db(this.d) && this.b.Nc(this.d, -k, -f, 2.5 * Math.sqrt(k * k + f * f)));
			var q = this.$o();
			if (f = this.b.Db(this.d)) if (this.d.S.inputPredicted) this.b.Nc(this.d, -this.Ia, -this.Ja, 10, !1);
			else if (this.b.Xv(this.d, Math.max(this.d.width, this.d.height) / 2)) this.b.ki(this.d, f);
			else return;
			q ? (this.ah = this.ih = !1, 0 < this.ea && (this.Qg || (this.b.Ym(this.d, -this.Ia, -this.Ja, q), this.Qg = !0), this.ea = 0), n != q) ? (this.Ob = q, this.qf = q.x, this.rf = q.y, this.b.ki(this.d, q)) : g && (f = this.b.Db(this.d)) && (this.b.ki(this.d, f), 0 !== k && (0 < k ? this.b.Nc(this.d, -this.Bf, -this.Cf) : this.b.Nc(this.d, this.Bf, this.Cf)), this.b.Nc(this.d, -this.Ia, -this.Ja)) : b || (this.ah = !0);
			if (q && l || !q && this.sl && b && this.ah && !this.ih) n = this.d.x, g = this.d.y, this.d.x -= this.Ia, this.d.y -= this.Ja, this.d.r(), this.b.Db(this.d) ? l = !1 : (this.Hf = this.nm, this.b.trigger(wc.prototype.i.$r, this.d), this.Vc = 2, this.ea = -this.Nh, l = !0, q ? this.mg = !0 : this.ih = !0), this.d.x = n, this.d.y = g, this.d.r();
			q || (b && 0 < this.Hf ? (this.ea = -this.Nh, this.Hf -= h) : (this.Ob = null, this.ea += this.td * h, this.ea > this.Zj && (this.ea = this.Zj)), l && (this.mg = !0));
			this.Qg = !! q;
			p == a && (0 > this.K ? (this.K += this.Uf * h, 0 < this.K && (this.K = 0)) : 0 < this.K && (this.K -= this.Uf * h, 0 > this.K && (this.K = 0)));
			p && !a && (this.K = 0 < this.K ? this.K - (this.Of + this.Uf) * h : this.K - this.Of * h);
			a && !p && (this.K = 0 > this.K ? this.K + (this.Of + this.Uf) * h : this.K + this.Of * h);
			this.K > this.tg ? this.K = this.tg : this.K < -this.tg && (this.K = -this.tg);
			p = !1;
			0 !== this.K && (n = this.d.x, g = this.d.y, k = this.K * h * this.Bf, f = this.K * h * this.Cf, this.d.x += this.Bf * (1 < this.K ? 1 : -1) - this.Ia, this.d.y += this.Cf * (1 < this.K ? 1 : -1) - this.Ja, this.d.r(), b = !1, e = this.b.Db(this.d), this.d.x = n + k, this.d.y = g + f, this.d.r(), a = this.b.Db(this.d), !a && q && (a = this.b.he(this.d)) && (this.d.x = n, this.d.y = g, this.d.r(), this.b.Tb(this.d, a) ? (a = null, b = !1) : b = !0, this.d.x = n + k, this.d.y = g + f, this.d.r()), a ? (k = Math.abs(this.K * h) + 2, e || !this.b.Nc(this.d, -this.Ia, -this.Ja, k, b, a)) ? (this.b.ki(this.d, a), k = Math.max(Math.abs(this.K * h * 2.5), 30), this.b.Nc(this.d, this.Bf * (0 > this.K ? 1 : -1), this.Cf * (0 > this.K ? 1 : -1), k, !1) ? !q || b || this.qj || (n = this.d.x, g = this.d.y, this.d.x += this.Ia, this.d.y += this.Ja, this.b.Db(this.d) ? this.b.Nc(this.d, -this.Ia, -this.Ja, 3, !1) || (this.d.x = n, this.d.y = g, this.d.r()) : (this.d.x = n, this.d.y = g, this.d.r())) : (this.d.x = n, this.d.y = g, this.d.r()), b || (this.K = 0)) : !e && !l && Math.abs(this.ea) < Math.abs(this.Nh / 4) && (this.ea = 0, q || (p = !0)) : (n = this.$o(), q && !n ? (f = Math.ceil(Math.abs(this.K * h)) + 2, n = this.d.x, g = this.d.y, this.d.x += this.Ia * f, this.d.y += this.Ja * f, this.d.r(), this.b.Db(this.d) || this.b.he(this.d) ? this.b.Nc(this.d, -this.Ia, -this.Ja, f + 2, !0) : (this.d.x = n, this.d.y = g, this.d.r())) : n && 0 === this.ea && this.b.Ym(this.d, -this.Ia, -this.Ja, n)));
			if (0 !== this.ea) {
				n = this.d.x;
				g = this.d.y;
				this.d.x += this.ea * h * this.Ia;
				this.d.y += this.ea * h * this.Ja;
				k = this.d.x;
				a = this.d.y;
				this.d.r();
				f = this.b.Db(this.d);
				b = !1;
				if (!f && 0 < this.ea && !q) {
					if ((b = 0 < this.hf ? null : this.b.he(this.d, !0)) && b.length) {
						if (this.Rg) {
							this.d.x = n;
							this.d.y = g;
							this.d.r();
							c = e = 0;
							for (d = b.length; e < d; e++) b[c] = b[e], this.b.Tb(this.d, b[e]) || c++;
							b.length = c;
							this.d.x = k;
							this.d.y = a;
							this.d.r()
						}
						1 <= b.length && (f = b[0])
					}
					b = !! f
				}
				f && (this.b.ki(this.d, f), this.Hf = 0, k = b ? Math.abs(this.ea * h * 2.5 + 10) : Math.max(Math.abs(this.ea * h * 2.5 + 10), 30), this.b.Nc(this.d, this.Ia * (0 > this.ea ? 1 : -1), this.Ja * (0 > this.ea ? 1 : -1), k, b, f) ? (this.Ob = f, this.qf = f.x, this.rf = f.y, (this.qj = b) && (p = !0), this.ea = 0) : (this.d.x = n, this.d.y = g, this.d.r(), this.Qg = !0, b || (this.ea = 0)))
			}
			3 !== this.Vc && 0 < this.ea && !q && (this.b.trigger(wc.prototype.i.Vr, this.d), this.Vc = 3);
			if (q || p) 3 === this.Vc || p || l && 0 === this.ea ? (this.b.trigger(wc.prototype.i.as, this.d), this.Vc = 0 === this.K && 0 === this.ea ? 0 : 1) : (0 !== this.Vc && 0 === this.K && 0 === this.ea && (this.b.trigger(wc.prototype.i.os, this.d), this.Vc = 0), 1 === this.Vc || 0 === this.K && 0 === this.ea || l || (this.b.trigger(wc.prototype.i.ds, this.d), this.Vc = 1));
			0 < this.hf && this.hf--;
			this.Rg = this.b.he(this.d)
		}
	};
	k.prototype.Er = function() {
		if (0 !== this.ea) return !1;
		var h = null,
			k = null,
			f, a;
		f = this.d.x;
		a = this.d.y;
		this.d.x += this.Ia;
		this.d.y += this.Ja;
		this.d.r();
		(h = this.b.Db(this.d)) || 0 !== this.hf || (k = this.b.he(this.d, !0));
		this.d.x = f;
		this.d.y = a;
		this.d.r();
		if (h) return !this.b.Tb(this.d, h);
		if (k && k.length) {
			a = h = 0;
			for (f = k.length; h < f; h++) k[a] = k[h], this.b.Tb(this.d, k[h]) || a++;
			if (1 <= a) return !0
		}
		return !1
	};
	k.prototype.$r = function() {
		return !0
	};
	k.prototype.Vr = function() {
		return !0
	};
	k.prototype.os = function() {
		return !0
	};
	k.prototype.ds = function() {
		return !0
	};
	k.prototype.as = function() {
		return !0
	};
	h.i = new k;
	p.prototype.us = function(h) {
		this.vj !== h && (this.td = h, this.Fn(), this.b.Db(this.d) && (this.b.Nc(this.d, this.Ia, this.Ja, 10), this.d.x += 2 * this.Ia, this.d.y += 2 * this.Ja, this.d.r()), this.Ob = null)
	};
	h.wa = new p;
	h.$b = new function() {}
})();

function lc(k) {
	this.b = k
}(function() {
	var k = lc.prototype;
	k.qb = function(h) {
		this.behavior = h;
		this.b = h.b
	};
	k.qb.prototype.na = function() {};
	k.Ta = function(h, k) {
		this.type = h;
		this.behavior = h.behavior;
		this.d = k;
		this.b = h.b
	};
	var p = k.Ta.prototype;
	p.na = function() {
		this.d.S.solidEnabled = 0 !== this.O[0]
	};
	p.mb = function() {};
	k.i = new function() {};
	k.wa = new function() {}
})();

function kc() {
	return [nc, oc, sc, mc, tc, Z, lc, wc, Y.prototype.i.Rn, sc.prototype.wa.qr, sc.prototype.i.Qn, Y.prototype.wa.xs, sc.prototype.$b.Hr, Y.prototype.i.tr, sc.prototype.wa.vs, Y.prototype.i.yr, tc.prototype.wa.ws, Y.prototype.i.Nn, mc.prototype.wa.ss, mc.prototype.wa.ts, Z.prototype.i.Wk, Y.prototype.wa.Bs, wc.prototype.wa.us, wc.prototype.i.Er, mc.prototype.i.ur, nc.prototype.wa.Play, mc.prototype.i.Fr, mc.prototype.i.Gr, mc.prototype.wa.xr, mc.prototype.i.Sr, Y.prototype.wa.nr, mc.prototype.wa.ys, mc.prototype.i.Pn, Y.prototype.wa.Ar, Z.prototype.i.Vk, oc.prototype.wa.Br]
};