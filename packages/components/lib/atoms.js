module.exports = (function(e) {
	var r = {};
	function t(n) {
		if (r[n]) return r[n].exports;
		var o = (r[n] = { i: n, l: !1, exports: {} });
		return e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
	}
	return (
		(t.m = e),
		(t.c = r),
		(t.d = function(e, r, n) {
			t.o(e, r) ||
				Object.defineProperty(e, r, { enumerable: !0, get: n });
		}),
		(t.r = function(e) {
			"undefined" != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, {
					value: "Module"
				}),
				Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		(t.t = function(e, r) {
			if ((1 & r && (e = t(e)), 8 & r)) return e;
			if (4 & r && "object" == typeof e && e && e.__esModule) return e;
			var n = Object.create(null);
			if (
				(t.r(n),
				Object.defineProperty(n, "default", {
					enumerable: !0,
					value: e
				}),
				2 & r && "string" != typeof e)
			)
				for (var o in e)
					t.d(
						n,
						o,
						function(r) {
							return e[r];
						}.bind(null, o)
					);
			return n;
		}),
		(t.n = function(e) {
			var r =
				e && e.__esModule
					? function() {
							return e.default;
					  }
					: function() {
							return e;
					  };
			return t.d(r, "a", r), r;
		}),
		(t.o = function(e, r) {
			return Object.prototype.hasOwnProperty.call(e, r);
		}),
		(t.p = ""),
		t((t.s = 2))
	);
})([
	function(e, r) {
		e.exports = require("react");
	},
	function(e, r, t) {
		"use strict";
		t.r(r);
		var n = t(0),
			o = t.n(n);
		r.default = function(e) {
			return o.a.createElement(
				"div",
				{ className: "button" },
				"[",
				e.children,
				"]"
			);
		};
	},
	function(e, r, t) {
		var n = t(3);
		n.keys().forEach(function(r) {
			var t = r.replace(/^.+\/([^/]+)\/index\.js/, "$1");
			console.log("module", t), t && (e.exports[t] = n(r).default);
		});
	},
	function(e, r, t) {
		var n = { "./Button/index.js": 1, "./Link/index.js": 4 };
		function o(e) {
			var r = u(e);
			return t(r);
		}
		function u(e) {
			var r = n[e];
			if (r + 1) return r;
			var t = new Error("Cannot find module '" + e + "'");
			throw ((t.code = "MODULE_NOT_FOUND"), t);
		}
		(o.keys = function() {
			return Object.keys(n);
		}),
			(o.resolve = u),
			((e.exports = o).id = 3);
	},
	function(e, r, t) {
		"use strict";
		t.r(r);
		var n = t(0),
			o = t.n(n);
		r.default = function(e) {
			return o.a.createElement(
				"a",
				{ className: "link", href: e.href, target: "_self" },
				"__",
				e.children,
				"__"
			);
		};
	}
]);
