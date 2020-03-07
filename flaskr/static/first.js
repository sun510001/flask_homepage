
(function () {
    window.google = {
        kEI: 'KR5iXcO6BvK2mAX6kYyYDg',
        kEXPI: '31',
        authuser: 0,
        kscs: '9d326a0_KR5iXcO6BvK2mAX6kYyYDg',
        u: '9d326a0',
        kGL: 'JP',
        kBL: 'fSYB'
    };
    google.sn = 'webhp';
    google.kHL = 'ja';
    google.jsfs = 'Ffpdje';
})();
(function () {
    google.lc = [];
    google.li = 0;
    google.getEI = function (a) {
        for (var b; a && (!a.getAttribute || !(b = a.getAttribute("eid")));) a = a.parentNode;
        return b || google.kEI
    };
    google.getLEI = function (a) {
        for (var b = null; a && (!a.getAttribute || !(b = a.getAttribute("leid")));) a = a.parentNode;
        return b
    };
    google.https = function () {
        return "https:" == window.location.protocol
    };
    google.ml = function () {
        return null
    };
    google.time = function () {
        return (new Date).getTime()
    };
    google.log = function (a, b, e, c, g) {
        if (a = google.logUrl(a, b, e, c, g)) {
            b = new Image;
            var d = google.lc, f = google.li;
            d[f] = b;
            b.onerror = b.onload = b.onabort = function () {
                delete d[f]
            };
            google.vel && google.vel.lu && google.vel.lu(a);
            b.src = a;
            google.li = f + 1
        }
    };
    google.logUrl = function (a, b, e, c, g) {
        var d = "", f = google.ls || "";
        e || -1 != b.search("&ei=") || (d = "&ei=" + google.getEI(c), -1 == b.search("&lei=") && (c = google.getLEI(c)) && (d += "&lei=" + c));
        c = "";
        !e && google.cshid && -1 == b.search("&cshid=") && "slh" != a && (c = "&cshid=" + google.cshid);
        a = e || "/" + (g || "gen_204") + "?atyp=i&ct=" + a + "&cad=" + b + d + f + "&zx=" + google.time() + c;
        /^http:/i.test(a) && google.https() && (google.ml(Error("a"), !1, {src: a, glmm: 1}), a = "");
        return a
    };
}).call(this);
(function () {
    google.y = {};
    google.x = function (a, b) {
        if (a) var c = a.id; else {
            do c = Math.random(); while (google.y[c])
        }
        google.y[c] = [a, b];
        return !1
    };
    google.lm = [];
    google.plm = function (a) {
        google.lm.push.apply(google.lm, a)
    };
    google.lq = [];
    google.load = function (a, b, c) {
        google.lq.push([[a], b, c])
    };
    google.loadAll = function (a, b) {
        google.lq.push([a, b])
    };
}).call(this);
google.f = {};
(function () {
    google.hs = {h: true};
})();
(function () {
    google.c = {};
    (function () {
        var f = window.performance;
        var g = function (a, b, c) {
            a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
        };
        google.timers = {};
        google.startTick = function (a) {
            google.timers[a] = {t: {start: google.time()}, e: {}, m: {}}
        };
        google.tick = function (a, b, c) {
            google.timers[a] || google.startTick(a);
            c = void 0 !== c ? c : google.time();
            b instanceof Array || (b = [b]);
            for (var e = 0, d; d = b[e++];) google.timers[a].t[d] = c
        };
        google.c.e = function (a, b, c) {
            google.timers[a].e[b] = c
        };
        google.c.b = function (a) {
            var b = google.timers.load.m;
            b[a] && google.ml(Error("a"), !1, {m: a});
            b[a] = !0
        };
        google.c.u = function (a) {
            var b = google.timers.load.m;
            if (b[a]) {
                b[a] = !1;
                for (a in b) if (b[a]) return;
                google.csiReport()
            } else google.ml(Error("b"), !1, {m: a})
        };
        google.rll = function (a, b, c) {
            var e = function (d) {
                c(d);
                d = e;
                a.addEventListener ? a.removeEventListener("load", d, !1) : a.attachEvent && a.detachEvent("onload", d);
                d = e;
                a.addEventListener ? a.removeEventListener("error", d, !1) : a.attachEvent && a.detachEvent("onerror", d)
            };
            g(a, "load", e);
            b && g(a, "error", e)
        };
        google.aft = function (a) {
            a.setAttribute("data-iml", google.time())
        };
        google.startTick("load");
        var h = google.timers.load;
        a:{
            var k = h.t;
            if (f) {
                var l = f.timing;
                if (l) {
                    var m = l.navigationStart, n = l.responseStart;
                    if (n > m && n <= k.start) {
                        k.start = n;
                        h.wsrt = n - m;
                        break a
                    }
                }
                f.now && (h.wsrt = Math.floor(f.now()))
            }
        }
        google.c.b("pr");
        google.c.b("xe");
    }).call(this);
})();
(function () {
    var b = [function () {
        google.tick && google.tick("load", "dcl")
    }];
    google.dclc = function (a) {
        b.length ? b.push(a) : a()
    };

    function c() {
        for (var a; a = b.shift();) a()
    }

    window.addEventListener ? (document.addEventListener("DOMContentLoaded", c, !1), window.addEventListener("load", c, !1)) : window.attachEvent && window.attachEvent("onload", c);
}).call(this);
(function () {
    var b = [];
    google.jsc = {
        xx: b, x: function (a) {
            b.push(a)
        }, mm: [], m: function (a) {
            google.jsc.mm.length || (google.jsc.mm = a)
        }
    };
}).call(this);
(function () {
    var g = this || self, k = Date.now || function () {
        return +new Date
    };
    var t = {};
    var v = function (b, d) {
        if (null === d) return !1;
        if ("contains" in b && 1 == d.nodeType) return b.contains(d);
        if ("compareDocumentPosition" in b) return b == d || !!(b.compareDocumentPosition(d) & 16);
        for (; d && b != d;) d = d.parentNode;
        return d == b
    };
    var w = function (b, d) {
            return function (a) {
                a || (a = window.event);
                return d.call(b, a)
            }
        }, B = function (b) {
            b = b.target || b.srcElement;
            !b.getAttribute && b.parentNode && (b = b.parentNode);
            return b
        }, C = "undefined" != typeof navigator && /Macintosh/.test(navigator.userAgent),
        D = "undefined" != typeof navigator && !/Opera/.test(navigator.userAgent) && /WebKit/.test(navigator.userAgent),
        E = {A: 1, INPUT: 1, TEXTAREA: 1, SELECT: 1, BUTTON: 1}, aa = function () {
            this._mouseEventsPrevented = !0
        }, F = {
            A: 13,
            BUTTON: 0,
            CHECKBOX: 32,
            COMBOBOX: 13,
            GRIDCELL: 13,
            LINK: 13,
            LISTBOX: 13,
            MENU: 0,
            MENUBAR: 0,
            MENUITEM: 0,
            MENUITEMCHECKBOX: 0,
            MENUITEMRADIO: 0,
            OPTION: 0,
            RADIO: 32,
            RADIOGROUP: 32,
            RESET: 0,
            SUBMIT: 0,
            SWITCH: 32,
            TAB: 0,
            TREE: 13,
            TREEITEM: 13
        }, G = {CHECKBOX: !0, OPTION: !0, RADIO: !0}, H = {
            COLOR: !0,
            DATE: !0,
            DATETIME: !0,
            "DATETIME-LOCAL": !0,
            EMAIL: !0,
            MONTH: !0,
            NUMBER: !0,
            PASSWORD: !0,
            RANGE: !0,
            SEARCH: !0,
            TEL: !0,
            TEXT: !0,
            TEXTAREA: !0,
            TIME: !0,
            URL: !0,
            WEEK: !0
        }, ba = {
            A: !0,
            AREA: !0,
            BUTTON: !0,
            DIALOG: !0,
            IMG: !0,
            INPUT: !0,
            LINK: !0,
            MENU: !0,
            OPTGROUP: !0,
            OPTION: !0,
            PROGRESS: !0,
            SELECT: !0,
            TEXTAREA: !0
        };
    var I = function () {
        this.h = this.a = null
    }, K = function (b, d) {
        var a = J;
        a.a = b;
        a.h = d;
        return a
    };
    I.prototype.g = function () {
        var b = this.a;
        this.a && this.a != this.h ? this.a = this.a.__owner || this.a.parentNode : this.a = null;
        return b
    };
    var L = function () {
        this.i = [];
        this.a = 0;
        this.h = null;
        this.j = !1
    };
    L.prototype.g = function () {
        if (this.j) return J.g();
        if (this.a != this.i.length) {
            var b = this.i[this.a];
            this.a++;
            b != this.h && b && b.__owner && (this.j = !0, K(b.__owner, this.h));
            return b
        }
        return null
    };
    var J = new I, M = new L;
    var P = function () {
            this.o = [];
            this.a = [];
            this.g = [];
            this.j = {};
            this.h = null;
            this.i = [];
            O(this, "_custom")
        }, ca = "undefined" != typeof navigator && /iPhone|iPad|iPod/.test(navigator.userAgent),
        Q = String.prototype.trim ? function (b) {
            return b.trim()
        } : function (b) {
            return b.replace(/^\s+/, "").replace(/\s+$/, "")
        }, da = /\s*;\s*/, ia = function (b, d) {
            return function (a) {
                var c = d;
                if ("_custom" == c) {
                    c = a.detail;
                    if (!c || !c._type) return;
                    c = c._type
                }
                var e;
                if ("click" == c && (C && a.metaKey || !C && a.ctrlKey || 2 == a.which || null == a.which && 4 == a.button || a.shiftKey)) c =
                    "clickmod"; else {
                    var f = a.which || a.keyCode || a.key;
                    D && 3 == f && (f = 13);
                    if (13 != f && 32 != f) f = !1; else {
                        var l = B(a), h = (l.getAttribute("role") || l.type || l.tagName).toUpperCase(), m;
                        (m = "keydown" != a.type || !("getAttribute" in l && !((l.getAttribute("type") || l.tagName).toUpperCase() in H) && "BUTTON" != l.tagName.toUpperCase() && !l.isContentEditable) || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey || (l.getAttribute("type") || l.tagName).toUpperCase() in G && 32 == f) || ((m = l.tagName in E) || (m = l.getAttributeNode("tabindex"), m = null != m && m.specified), m = !(m && !l.disabled));
                        m ? f = !1 : (l = "INPUT" != l.tagName.toUpperCase() || l.type, m = !(h in F) && 13 == f, f = (0 == F[h] % f || m) && !!l)
                    }
                    f && (c = "clickkey")
                }
                h = a.srcElement || a.target;
                f = R(c, a, h, "", null);
                a.path ? (M.i = a.path, M.a = 0, M.h = this, M.j = !1, l = M) : l = K(h, this);
                for (; m = l.g();) {
                    m = e = m;
                    var n = c;
                    var p = m.__jsaction;
                    if (!p) {
                        var u;
                        p = null;
                        "getAttribute" in m && (p = m.getAttribute("jsaction"));
                        if (u = p) {
                            p = t[u];
                            if (!p) {
                                p = {};
                                for (var x = u.split(da), ea = x ? x.length : 0, y = 0; y < ea; y++) {
                                    var r = x[y];
                                    if (r) {
                                        var z = r.indexOf(":"), N = -1 != z, fa = N ? Q(r.substr(0, z)) : "click";
                                        r = N ? Q(r.substr(z + 1)) : r;
                                        p[fa] = r
                                    }
                                }
                                t[u] = p
                            }
                            m.__jsaction = p
                        } else p = ha, m.__jsaction = p
                    }
                    m = p;
                    "clickkey" == n ? n = "click" : "click" != n || m.click || (n = "clickonly");
                    n = {m: n, action: m[n] || "", event: null, s: !1};
                    f = R(n.m, n.event || a, h, n.action || "", e, f.timeStamp);
                    if (n.s || n.action) break
                }
                f && "touchend" == f.eventType && (f.event._preventMouseEvents = aa);
                if (n && n.action) {
                    if (h = "clickkey" == c) h = B(a), h = (h.type || h.tagName).toUpperCase(), (h = 32 == (a.which || a.keyCode || a.key) && "CHECKBOX" != h) || (h = B(a), l = (h.getAttribute("role") || h.tagName).toUpperCase(), h = "BUTTON" == l ? !0 : !(h.tagName.toUpperCase() in ba) || "A" == l || "SELECT" == l || (h.getAttribute("type") || h.tagName).toUpperCase() in G || (h.getAttribute("type") || h.tagName).toUpperCase() in H ? !1 : !0);
                    h && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
                    if ("mouseenter" == c || "mouseleave" == c) if (h = a.relatedTarget, !("mouseover" == a.type && "mouseenter" == c || "mouseout" == a.type && "mouseleave" == c) || h && (h === e || v(e, h))) f.action = "", f.actionElement = null; else {
                        c = {};
                        for (var q in a) "function" !== typeof a[q] && "srcElement" !== q &&
                        "target" !== q && (c[q] = a[q]);
                        c.type = "mouseover" == a.type ? "mouseenter" : "mouseleave";
                        c.target = c.srcElement = e;
                        c.bubbles = !1;
                        f.event = c;
                        f.targetElement = e
                    }
                } else f.action = "", f.actionElement = null;
                e = f;
                b.h && (q = R(e.eventType, e.event, e.targetElement, e.action, e.actionElement, e.timeStamp), "clickonly" == q.eventType && (q.eventType = "click"), b.h(q, !0));
                if (e.actionElement) {
                    if (b.h) "A" != e.actionElement.tagName || "click" != e.eventType && "clickmod" != e.eventType || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), b.h(e); else {
                        if ((q =
                            g.document) && !q.createEvent && q.createEventObject) try {
                            var A = q.createEventObject(a)
                        } catch (la) {
                            A = a
                        } else A = a;
                        e.event = A;
                        b.i.push(e)
                    }
                    if ("touchend" == e.event.type && e.event._mouseEventsPrevented) {
                        a = e.event;
                        for (var ma in a) ;
                        k()
                    }
                }
            }
        }, R = function (b, d, a, c, e, f) {
            return {eventType: b, event: d, targetElement: a, action: c, actionElement: e, timeStamp: f || k()}
        }, ha = {}, ja = function (b, d) {
            return function (a) {
                var c = b, e = d, f = !1;
                "mouseenter" == c ? c = "mouseover" : "mouseleave" == c && (c = "mouseout");
                if (a.addEventListener) {
                    if ("focus" == c || "blur" == c ||
                        "error" == c || "load" == c) f = !0;
                    a.addEventListener(c, e, f)
                } else a.attachEvent && ("focus" == c ? c = "focusin" : "blur" == c && (c = "focusout"), e = w(a, e), a.attachEvent("on" + c, e));
                return {m: c, l: e, capture: f}
            }
        }, O = function (b, d) {
            if (!b.j.hasOwnProperty(d)) {
                var a = ia(b, d), c = ja(d, a);
                b.j[d] = a;
                b.o.push(c);
                for (a = 0; a < b.a.length; ++a) {
                    var e = b.a[a];
                    e.g.push(c.call(null, e.a))
                }
                "click" == d && O(b, "keydown")
            }
        };
    P.prototype.l = function (b) {
        return this.j[b]
    };
    var V = function (b, d) {
        var a = new ka(d), c;
        a:{
            for (c = 0; c < b.a.length; c++) if (S(b.a[c], d)) {
                c = !0;
                break a
            }
            c = !1
        }
        if (c) return b.g.push(a), a;
        T(b, a);
        b.a.push(a);
        U(b);
        return a
    }, U = function (b) {
        for (var d = b.g.concat(b.a), a = [], c = [], e = 0; e < b.a.length; ++e) {
            var f = b.a[e];
            W(f, d) ? (a.push(f), X(f)) : c.push(f)
        }
        for (e = 0; e < b.g.length; ++e) f = b.g[e], W(f, d) ? a.push(f) : (c.push(f), T(b, f));
        b.a = c;
        b.g = a
    }, T = function (b, d) {
        var a = d.a;
        ca && (a.style.cursor = "pointer");
        for (a = 0; a < b.o.length; ++a) d.g.push(b.o[a].call(null, d.a))
    }, Y = function (b, d) {
        b.h = d;
        b.i &&
        (0 < b.i.length && d(b.i), b.i = null)
    }, ka = function (b) {
        this.a = b;
        this.g = []
    }, S = function (b, d) {
        for (var a = b.a, c = d; a != c && c.parentNode;) c = c.parentNode;
        return a == c
    }, W = function (b, d) {
        for (var a = 0; a < d.length; ++a) if (d[a].a != b.a && S(d[a], b.a)) return !0;
        return !1
    }, X = function (b) {
        for (var d = 0; d < b.g.length; ++d) {
            var a = b.a, c = b.g[d];
            a.removeEventListener ? a.removeEventListener(c.m, c.l, c.capture) : a.detachEvent && a.detachEvent("on" + c.m, c.l)
        }
        b.g = []
    };
    var Z = new P;
    V(Z, window.document.documentElement);
    O(Z, "click");
    O(Z, "focus");
    O(Z, "focusin");
    O(Z, "blur");
    O(Z, "focusout");
    O(Z, "error");
    O(Z, "load");
    O(Z, "change");
    O(Z, "dblclick");
    O(Z, "input");
    O(Z, "keyup");
    O(Z, "keydown");
    O(Z, "keypress");
    O(Z, "mousedown");
    O(Z, "mouseenter");
    O(Z, "mouseleave");
    O(Z, "mouseout");
    O(Z, "mouseover");
    O(Z, "mouseup");
    O(Z, "paste");
    O(Z, "touchstart");
    O(Z, "touchend");
    O(Z, "touchcancel");
    O(Z, "speech");
    (function (b) {
        google.jsad = function (d) {
            Y(b, d)
        };
        google.jsaac = function (d) {
            return V(b, d)
        };
        google.jsarc = function (d) {
            X(d);
            for (var a = !1, c = 0; c < b.a.length; ++c) if (b.a[c] === d) {
                b.a.splice(c, 1);
                a = !0;
                break
            }
            if (!a) for (a = 0; a < b.g.length; ++a) if (b.g[a] === d) {
                b.g.splice(a, 1);
                break
            }
            U(b)
        }
    })(Z);
    window.gws_wizbind = function (b) {
        return {
            trigger: function (d) {
                var a = b.l(d.type);
                a || (O(b, d.type), a = b.l(d.type));
                var c = d.target || d.srcElement;
                a && a.call(c.ownerDocument.documentElement, d)
            }, bind: function (d) {
                Y(b, d)
            }
        }
    }(Z);
}).call(this);
(function () {
    window.jsarwt = function () {
        return !1
    };
}).call(this);
var a = window.location, b = a.href.indexOf("#");
if (0 <= b) {
    var c = a.href.substring(b + 1);
    /(^|&)q=/.test(c) && -1 == c.indexOf("#") && a.replace("/search?" + c.replace(/(^|&)fp=[^&]*/g, "") + "&cad=h")
}
;var k = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, e, c) {
        a != Array.prototype && a != Object.prototype && (a[e] = c.value)
    },
    l = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
    m = function (a, e) {
        if (e) {
            for (var c = l, b = a.split("."), f = 0; f < b.length - 1; f++) {
                var d = b[f];
                d in c || (c[d] = {});
                c = c[d]
            }
            b = b[b.length - 1];
            f = c[b];
            d = e(f);
            d != f && null != d && k(c, b, {configurable: !0, writable: !0, value: d})
        }
    };
m("String.prototype.startsWith", function (a) {
    return a ? a : function (e, c) {
        if (null == this) throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");
        if (e instanceof RegExp) throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");
        var b = this + "";
        e += "";
        for (var f = b.length, d = e.length, h = Math.max(0, Math.min(c | 0, b.length)), g = 0; g < d && h < f;) if (b[h++] != e[g++]) return !1;
        return g >= d
    }
});
google.arwt = function (a) {
    a.href = document.getElementById(a.id.substring(a.id.startsWith("cs") ? 2 : 1)).href;
    return !0
};
(function () {
    var f = function () {
        this.g = "";
        this.i = e
    };
    f.prototype.l = !0;
    f.prototype.j = function () {
        return this.g.toString()
    };
    var g = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, e = {}, h = function (a) {
        var b = new f;
        b.g = a;
        return b
    };
    h("about:blank");
    var l = /^((market|itms|intent|itms-appss):\/\/)/i, m = function (a) {
        var b;
        a instanceof f || !l.test(a) ? b = a : b = h(a);
        return b
    };
    var n = function (a, b) {
        if (b instanceof f) var c = b; else c = b, c instanceof f || (c = "object" == typeof c && c.l ? c.j() : String(c), g.test(c) || (c = "about:invalid#zClosurez"), c = h(c));
        a.href = c instanceof f && c.constructor === f && c.i === e ? c.g : "type_error:SafeUrl"
    };

    function p(a) {
        return a ? (a = a.getAttribute("data-ved")) ? "&ved=" + a : "" : ""
    }

    function q(a) {
        return new Promise(function (b) {
            try {
                var c = new XMLHttpRequest;
                c.open("GET", a);
                c.onreadystatechange = function () {
                    4 == c.readyState && b()
                };
                c.send()
            } catch (k) {
                b()
            }
        })
    }

    function r(a) {
        return a.getAttribute("data-cts") ? "&cts=" + (new Date).getTime() : ""
    };google.ausb = function (a) {
        if (!a) return google.ml(Error("a"), !1), !0;
        if (a.getAttribute("data-sbv2")) {
            var b = a.href, c = /[?&]adurl=([^&]+)/.exec(b);
            if (c && /[?&]ae=1(&|$)/.test(b) && !/[?&]dsh=1(&|$)/.test(b)) try {
                var k = b.length;
                var d = {a: b.slice(0, k) + "&act=1" + b.slice(k), h: decodeURIComponent(c[1])}
            } catch (t) {
                d = null
            } else d = null;
            d && (b = a.getAttribute("data-sbd"), "1" == b || "2" == b ? (b = d.a + "&ri=8&shc=" + b + "&ictx=1" + r(a), navigator.sendBeacon && navigator.sendBeacon(b, "") ? n(a, m(a.href + "&ri=9")) : n(a, m(a.href + "&ri=10")), a.hasAttribute("data-fetch") &&
            (a = d.a + "&ri=17&shc=1&ictx=1" + r(a), fetch(a, {
                method: "GET",
                keepalive: !0
            }))) : (b = 0, a.dataset.ampAd && (c = a ? (c = /[?&]ved=([^&]+)/.exec(a.href)) ? c[1] : "" : "", a.dataset.ved = c, a.dataset.ampc ? b = 1 : a.dataset.ampd && (b = 2), 0 != b && (c = d.a + "&ri=5", 2 == b && (c += "&ampt=1&shc=1", d.a += "&ampt=0"), google.f.c9ZYY = q(c))), 1 == b ? n(a, m(d.h)) : (b = d.a + "&ri=1" + r(a), navigator.sendBeacon ? navigator.sendBeacon(b, "") ? n(a, m(d.h)) : n(a, m(a.href + "&ri=2")) : n(a, m(a.href + "&ri=16")))))
        } else d = "", a.getAttribute("data-arwt") ? a.id && (d = p(document.getElementById(a.id.substring(1)))) : d = p(a), b = a.getAttribute("data-sbt"), c = a.getAttribute("data-sbf"), b && c && navigator.sendBeacon && navigator.sendBeacon(b + d + "&bt=1", "") ? n(a, c) : a.href += "&bt=2";
        return !0
    };
}).call(this);
(window['gbar'] = window['gbar'] || {})._CONFIG = [[[0, "www.gstatic.com", "og.og2.en_US.GPlx4TD1nu8.O", "co.jp", "ja", "1", 0, [3, 2, ".40.", "", "1300102,3700305,3700673,3700675", "264067731", "0"], "40400", "KR5iXcfJB4-9mAX36IaYBA", 0, 0, "og.og2.170umcgiyu6kx.L.W.O", "AA2YrTswmT56EfFCN0GbkETivalybjsn1w", "AA2YrTtTt2ysdu46awzhPPibAW-9bAeB2g", "", 2, 0, 200, "JPN", null, null, "1", "1", 0], null, 0, ["m;/_/scs/abc-static/_/js/k=gapi.gapi.en.JNa9MntajDY.O/d=1/rs=AHpOoo_db4DX0hhorP4qsjM6Ki5qzOgeUA/m=__features__", "https://apis.google.com", "", "", "1", "", null, 1, "es_plusone_gc_20190630.0_p0", "ja", null, 0], ["1", "gci_91f30755d6a6b787dcc2a4062e6e9824.js", "googleapis.client:plusone:gapi.iframes", "0", "ja"], null, null, null, [0.009999999776482582, "co.jp", "1", [null, "", "0", null, 1, 5184000, null, null, "", 0, 1, "", 0, 0, 0, 0, 0, 0], null, [["", "", "0", 0, 0, -1]], null, 0, null, null, ["5061451", "google\\.(com|ru|ca|by|kz|com\\.mx|com\\.tr)$", 1]], ["%1$s（デフォルト）", "ブランド アカウント", 0, "%1$s（代理）", 1, null, 96, "https://www.google.com/webhp?authuser=$authuser", null, null, null, 1, "https://accounts.google.com/ListAccounts?listPages=0\u0026authuser=0\u0026pid=1\u0026gpsia=1\u0026source=ogb\u0026mo=1\u0026mn=1\u0026hl=ja", 0, "dashboard", null, null, null, null, "プロフィール", "", 0, null, "ログアウトしました", "https://accounts.google.com/AccountChooser?source=ogb\u0026continue=$continue\u0026Email=$email", "https://accounts.google.com/RemoveLocalAccount?source=ogb", "削除", "ログイン", 0, 0, 1, 0, 1, 0, 0, "000770F2033B69A903F0E45508D6047F7C87DC4223AFA05BD2::1566711337127", null, 157, "セッション期限切れ", null, 0, "https://docs.google.com/picker", "ビジター", null, "デフォルト", "代理", "すべてのアカウントからログアウト", 1], [1, 0, 0, null, "0", "sqf121@gmail.com", "", "AJPG9d78k4NgIKuoRZ4oWTG30VqLypJpyEtjxU6AJ3sF5dd6Dd8IvVpNWCMaHyf7rSJZwv7AC5hk1MhtvYAJjCY_XQLZHm49nw"], [1, 0.001000000047497451, 1], [1, 0.1000000014901161, 2, 1, 0.5], [0, "", null, "", 0, "Marketplace アプリケーションの読み込み中にエラーが発生しました。", "Marketplace アプリケーションはありません。", 1, [1, "https://www.google.co.jp/webhp?tab=ww\u0026authuser=0", "検索", "", "0 -138px", null, 0], null, null, null, 0, [[1, "%2$s 個中 %1$s 個", "[もっと見る] の %2$s 個中 %1$s 個"]], null, 0], [1], [0, 1, ["lg"], 1, ["lat"]], [["", "", "", "", "", "", "", "", "", "", "", "", "", "", "drt", "def", "", "", "", "", "", "", "", ""], [""]], null, null, [1, null, null, "[[]]", ["https", "ogs.google.com", 0, "/u/0", "rt=j\u0026sourceid=1", ["/u/0/_/og/customization/get", ""], ["/u/0/_/og/customization/set", ""], ["/u/0/_/og/customization/remove", ""]], "AJPG9d78k4NgIKuoRZ4oWTG30VqLypJpyEtjxU6AJ3sF5dd6Dd8IvVpNWCMaHyf7rSJZwv7AC5hk1MhtvYAJjCY_XQLZHm49nw"], [30, 127, 1, 0, 60], null, null, null, ["https", "clients5.google.com", "", "pagead/drt/dn/"], null, [1, 0], null, [1, 1, 0, 40400, 1, "JPN", "ja", "264067731.0", 1, 0.009999999776482582, 1, 0, null, null, 0, 0, "", null, null, 1, "KR5iXcfJB4-9mAX36IaYBA"], null, [""]]];
(window['gbar'] = window['gbar'] || {})._LDD = ["in", "fot"];
this.gbar_ = this.gbar_ || {};
(function (_) {
    var window = this;
    try {
        var aa, da, ka, la, ma, Ca, Da;
        aa = function (a) {
            var b = 0;
            return function () {
                return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
            }
        };
        _.ba = function (a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {next: aa(a)}
        };
        _.ca = "function" == typeof Object.create ? Object.create : function (a) {
            var b = function () {
            };
            b.prototype = a;
            return new b
        };
        if ("function" == typeof Object.setPrototypeOf) da = Object.setPrototypeOf; else {
            var ea;
            a:{
                var fa = {a: !0}, ha = {};
                try {
                    ha.__proto__ = fa;
                    ea = ha.a;
                    break a
                } catch (a) {
                }
                ea = !1
            }
            da = ea ? function (a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError("a`" + a);
                return a
            } : null
        }
        _.ia = da;
        ka = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        };
        la = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
        ma = function (a, b) {
            if (b) {
                var c = la;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    e in c || (c[e] = {});
                    c = c[e]
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && null != b && ka(c, a, {configurable: !0, writable: !0, value: b})
            }
        };
        ma("String.prototype.startsWith", function (a) {
            return a ? a : function (b, c) {
                if (null == this) throw new TypeError("b`startsWith");
                if (b instanceof RegExp) throw new TypeError("c`startsWith");
                var d = this.length, e = b.length;
                c = Math.max(0, Math.min(c | 0, this.length));
                for (var f = 0; f < e && c < d;) if (this[c++] != b[f++]) return !1;
                return f >= e
            }
        });
        var na = function () {
            na = function () {
            };
            la.Symbol || (la.Symbol = oa)
        }, pa = function (a, b) {
            this.o = a;
            ka(this, "description", {configurable: !0, writable: !0, value: b})
        };
        pa.prototype.toString = function () {
            return this.o
        };
        var oa = function () {
            function a(c) {
                if (this instanceof a) throw new TypeError("d");
                return new pa("jscomp_symbol_" + (c || "") + "_" + b++, c)
            }

            var b = 0;
            return a
        }(), ra = function () {
            na();
            var a = la.Symbol.iterator;
            a || (a = la.Symbol.iterator = la.Symbol("Symbol.iterator"));
            "function" != typeof Array.prototype[a] && ka(Array.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function () {
                    return qa(aa(this))
                }
            });
            ra = function () {
            }
        }, qa = function (a) {
            ra();
            a = {next: a};
            a[la.Symbol.iterator] = function () {
                return this
            };
            return a
        }, sa = function (a, b) {
            ra();
            a instanceof String && (a += "");
            var c = 0, d = {
                next: function () {
                    if (c < a.length) {
                        var e = c++;
                        return {value: b(e, a[e]), done: !1}
                    }
                    d.next = function () {
                        return {done: !0, value: void 0}
                    };
                    return d.next()
                }
            };
            d[Symbol.iterator] = function () {
                return d
            };
            return d
        };
        ma("Array.prototype.keys", function (a) {
            return a ? a : function () {
                return sa(this, function (b) {
                    return b
                })
            }
        });
        ma("Array.prototype.values", function (a) {
            return a ? a : function () {
                return sa(this, function (b, c) {
                    return c
                })
            }
        });
        var ta = function (a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        };
        ma("WeakMap", function (a) {
            function b() {
            }

            function c(l) {
                var m = typeof l;
                return "object" === m && null !== l || "function" === m
            }

            function d(l) {
                if (!ta(l, f)) {
                    var m = new b;
                    ka(l, f, {value: m})
                }
            }

            function e(l) {
                var m = Object[l];
                m && (Object[l] = function (r) {
                    if (r instanceof b) return r;
                    d(r);
                    return m(r)
                })
            }

            if (function () {
                if (!a || !Object.seal) return !1;
                try {
                    var l = Object.seal({}), m = Object.seal({}), r = new a([[l, 2], [m, 3]]);
                    if (2 != r.get(l) || 3 != r.get(m)) return !1;
                    r["delete"](l);
                    r.set(m, 4);
                    return !r.has(l) && 4 == r.get(m)
                } catch (w) {
                    return !1
                }
            }()) return a;
            var f = "$jscomp_hidden_" + Math.random();
            e("freeze");
            e("preventExtensions");
            e("seal");
            var g = 0, h = function (l) {
                this.ea = (g += Math.random() + 1).toString();
                if (l) {
                    l = _.ba(l);
                    for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1])
                }
            };
            h.prototype.set = function (l, m) {
                if (!c(l)) throw Error("e");
                d(l);
                if (!ta(l, f)) throw Error("f`" + l);
                l[f][this.ea] = m;
                return this
            };
            h.prototype.get = function (l) {
                return c(l) && ta(l, f) ? l[f][this.ea] : void 0
            };
            h.prototype.has = function (l) {
                return c(l) && ta(l, f) && ta(l[f], this.ea)
            };
            h.prototype["delete"] =
                function (l) {
                    return c(l) && ta(l, f) && ta(l[f], this.ea) ? delete l[f][this.ea] : !1
                };
            return h
        });
        ma("Map", function (a) {
            if (function () {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({x: 4}), l = new a(_.ba([[h, "s"]]));
                    if ("s" != l.get(h) || 1 != l.size || l.get({x: 4}) || l.set({x: 4}, "t") != l || 2 != l.size) return !1;
                    var m = l.entries(), r = m.next();
                    if (r.done || r.value[0] != h || "s" != r.value[1]) return !1;
                    r = m.next();
                    return r.done || 4 != r.value[0].x || "t" != r.value[1] || !m.next().done ? !1 : !0
                } catch (w) {
                    return !1
                }
            }()) return a;
            ra();
            var b = new WeakMap, c = function (h) {
                this.w = {};
                this.o = f();
                this.size = 0;
                if (h) {
                    h = _.ba(h);
                    for (var l; !(l = h.next()).done;) l = l.value, this.set(l[0], l[1])
                }
            };
            c.prototype.set = function (h, l) {
                h = 0 === h ? 0 : h;
                var m = d(this, h);
                m.list || (m.list = this.w[m.id] = []);
                m.Na ? m.Na.value = l : (m.Na = {
                    next: this.o,
                    Bb: this.o.Bb,
                    head: this.o,
                    key: h,
                    value: l
                }, m.list.push(m.Na), this.o.Bb.next = m.Na, this.o.Bb = m.Na, this.size++);
                return this
            };
            c.prototype["delete"] = function (h) {
                h = d(this, h);
                return h.Na && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.w[h.id], h.Na.Bb.next = h.Na.next, h.Na.next.Bb =
                    h.Na.Bb, h.Na.head = null, this.size--, !0) : !1
            };
            c.prototype.clear = function () {
                this.w = {};
                this.o = this.o.Bb = f();
                this.size = 0
            };
            c.prototype.has = function (h) {
                return !!d(this, h).Na
            };
            c.prototype.get = function (h) {
                return (h = d(this, h).Na) && h.value
            };
            c.prototype.entries = function () {
                return e(this, function (h) {
                    return [h.key, h.value]
                })
            };
            c.prototype.keys = function () {
                return e(this, function (h) {
                    return h.key
                })
            };
            c.prototype.values = function () {
                return e(this, function (h) {
                    return h.value
                })
            };
            c.prototype.forEach = function (h, l) {
                for (var m = this.entries(),
                         r; !(r = m.next()).done;) r = r.value, h.call(l, r[1], r[0], this)
            };
            c.prototype[Symbol.iterator] = c.prototype.entries;
            var d = function (h, l) {
                var m = l && typeof l;
                "object" == m || "function" == m ? b.has(l) ? m = b.get(l) : (m = "" + ++g, b.set(l, m)) : m = "p_" + l;
                var r = h.w[m];
                if (r && ta(h.w, m)) for (h = 0; h < r.length; h++) {
                    var w = r[h];
                    if (l !== l && w.key !== w.key || l === w.key) return {id: m, list: r, index: h, Na: w}
                }
                return {id: m, list: r, index: -1, Na: void 0}
            }, e = function (h, l) {
                var m = h.o;
                return qa(function () {
                    if (m) {
                        for (; m.head != h.o;) m = m.Bb;
                        for (; m.next != m.head;) return m =
                            m.next, {done: !1, value: l(m)};
                        m = null
                    }
                    return {done: !0, value: void 0}
                })
            }, f = function () {
                var h = {};
                return h.Bb = h.next = h.head = h
            }, g = 0;
            return c
        });
        ma("Set", function (a) {
            if (function () {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({x: 4}), d = new a(_.ba([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({x: 4}) != d || 2 != d.size) return !1;
                    var e = d.entries(), f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
            ra();
            var b = function (c) {
                this.o = new Map;
                if (c) {
                    c = _.ba(c);
                    for (var d; !(d = c.next()).done;) this.add(d.value)
                }
                this.size = this.o.size
            };
            b.prototype.add = function (c) {
                c = 0 === c ? 0 : c;
                this.o.set(c, c);
                this.size = this.o.size;
                return this
            };
            b.prototype["delete"] = function (c) {
                c = this.o["delete"](c);
                this.size = this.o.size;
                return c
            };
            b.prototype.clear = function () {
                this.o.clear();
                this.size = 0
            };
            b.prototype.has = function (c) {
                return this.o.has(c)
            };
            b.prototype.entries = function () {
                return this.o.entries()
            };
            b.prototype.values = function () {
                return this.o.values()
            };
            b.prototype.keys = b.prototype.values;
            b.prototype[Symbol.iterator] = b.prototype.values;
            b.prototype.forEach = function (c, d) {
                var e = this;
                this.o.forEach(function (f) {
                    return c.call(d, f, f, e)
                })
            };
            return b
        });
        ma("Object.entries", function (a) {
            return a ? a : function (b) {
                var c = [], d;
                for (d in b) ta(b, d) && c.push([d, b[d]]);
                return c
            }
        });
        ma("Array.from", function (a) {
            return a ? a : function (b, c, d) {
                c = null != c ? c : function (h) {
                    return h
                };
                var e = [], f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
                if ("function" == typeof f) {
                    b = f.call(b);
                    for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
                } else for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
                return e
            }
        });
        _.ua = _.ua || {};
        _.n = this || self;
        _.p = function (a) {
            return void 0 !== a
        };
        _.q = function (a) {
            return "string" == typeof a
        };
        _.va = function (a) {
            return "number" == typeof a
        };
        _.wa = function (a, b) {
            a = a.split(".");
            b = b || _.n;
            for (var c = 0; c < a.length; c++) if (b = b[a[c]], null == b) return null;
            return b
        };
        _.xa = function () {
        };
        _.ya = function (a) {
            a.me = void 0;
            a.V = function () {
                return a.me ? a.me : a.me = new a
            }
        };
        _.za = function (a) {
            var b = typeof a;
            if ("object" == b) if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        };
        _.Aa = function (a) {
            return "array" == _.za(a)
        };
        _.Ba = "closure_uid_" + (1E9 * Math.random() >>> 0);
        Ca = function (a, b, c) {
            return a.call.apply(a.bind, arguments)
        };
        Da = function (a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function () {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function () {
                return a.apply(b, arguments)
            }
        };
        _.t = function (a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.t = Ca : _.t = Da;
            return _.t.apply(null, arguments)
        };
        _.Ea = Date.now || function () {
            return +new Date
        };
        _.u = function (a, b) {
            a = a.split(".");
            var c = _.n;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) !a.length && _.p(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
        };
        _.v = function (a, b) {
            function c() {
            }

            c.prototype = b.prototype;
            a.M = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a
        };
        var Fa = function (a, b, c) {
            this.B = a;
            this.w = !1;
            this.o = b;
            this.A = c
        };
        Fa.prototype.Ma = function (a) {
            if (this.w) throw Error("g`" + this.o);
            try {
                a.apply(this.B, this.A), this.w = !0
            } catch (b) {
            }
        };
        _.x = function () {
            this.ma = this.ma;
            this.Za = this.Za
        };
        _.x.prototype.ma = !1;
        _.x.prototype.ha = function () {
            this.ma || (this.ma = !0, this.S())
        };
        _.x.prototype.S = function () {
            if (this.Za) for (; this.Za.length;) this.Za.shift()()
        };
        var Ga = function (a) {
            _.x.call(this);
            this.A = a;
            this.o = [];
            this.w = {}
        };
        _.v(Ga, _.x);
        Ga.prototype.B = function (a) {
            var b = (0, _.t)(function () {
                this.o.push(new Fa(this.A, a, Array.prototype.slice.call(arguments)))
            }, this);
            return this.w[a] = b
        };
        Ga.prototype.Ma = function () {
            for (var a = this.o.length, b = this.o, c = [], d = 0; d < a; ++d) {
                var e = b[d].o;
                a:{
                    var f = this.A;
                    for (var g = e.split("."), h = g.length, l = 0; l < h; ++l) if (f[g[l]]) f = f[g[l]]; else {
                        f = null;
                        break a
                    }
                    f = f instanceof Function ? f : null
                }
                if (f && f != this.w[e]) try {
                    b[d].Ma(f)
                } catch (m) {
                } else c.push(b[d])
            }
            this.o = c.concat(b.slice(a))
        };
        _.Ha = function (a) {
            if (Error.captureStackTrace) Error.captureStackTrace(this, _.Ha); else {
                var b = Error().stack;
                b && (this.stack = b)
            }
            a && (this.message = String(a))
        };
        _.v(_.Ha, Error);
        _.Ha.prototype.name = "CustomError";
        _.Ia = Array.prototype.indexOf ? function (a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function (a, b) {
            if (_.q(a)) return _.q(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
            for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
            return -1
        };
        _.Ja = Array.prototype.forEach ? function (a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = _.q(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        };
        _.Ka = Array.prototype.filter ? function (a, b, c) {
            return Array.prototype.filter.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = [], f = 0, g = _.q(a) ? a.split("") : a, h = 0; h < d; h++) if (h in g) {
                var l = g[h];
                b.call(c, l, h, a) && (e[f++] = l)
            }
            return e
        };
        _.La = Array.prototype.map ? function (a, b, c) {
            return Array.prototype.map.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = Array(d), f = _.q(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
            return e
        };
        _.Ma = Array.prototype.reduce ? function (a, b, c) {
            return Array.prototype.reduce.call(a, b, c)
        } : function (a, b, c) {
            var d = c;
            (0, _.Ja)(a, function (e, f) {
                d = b.call(void 0, d, e, f, a)
            });
            return d
        };
        _.Na = Array.prototype.some ? function (a, b) {
            return Array.prototype.some.call(a, b, void 0)
        } : function (a, b) {
            for (var c = a.length, d = _.q(a) ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };
        var Va;
        _.Oa = function () {
            this.o = {};
            this.w = {}
        };
        _.ya(_.Oa);
        _.Ra = function (a, b) {
            a.V = function () {
                return _.Pa(_.Oa.V(), b)
            };
            a.gj = function () {
                return _.Qa(_.Oa.V(), b)
            }
        };
        _.Ta = function (a, b) {
            var c = _.Oa.V();
            if (a in c.o) {
                if (c.o[a] != b) throw new Sa(a);
            } else {
                c.o[a] = b;
                if (b = c.w[a]) for (var d = 0, e = b.length; d < e; d++) b[d].o(c.o, a);
                delete c.w[a]
            }
        };
        _.Pa = function (a, b) {
            if (b in a.o) return a.o[b];
            throw new Ua(b);
        };
        _.Qa = function (a, b) {
            return a.o[b] || null
        };
        Va = function (a) {
            _.Ha.call(this);
            this.ea = a
        };
        _.v(Va, _.Ha);
        var Sa = function (a) {
            Va.call(this, a)
        };
        _.v(Sa, Va);
        var Ua = function (a) {
            Va.call(this, a)
        };
        _.v(Ua, Va);
        var Xa;
        _.Wa = "bbh bbr bbs has prm sngw so".split(" ");
        Xa = new Ga(_.n);
        _.Ta("api", Xa);
        for (var Ya = "addExtraLink addLink aomc asmc close cp.c cp.l cp.me cp.ml cp.rc cp.rel ela elc elh gpca gpcr lGC lPWF ldb mls noam paa pc pca pcm pw.clk pw.hvr qfaae qfaas qfaau qfae qfas qfau qfhi qm qs qsi rtl sa setContinueCb snaw sncw som sp spd spn spp sps tsl tst up.aeh up.aop up.dpc up.iic up.nap up.r up.sl up.spd up.tp upel upes upet".split(" ").concat(_.Wa), Za = (0, _.t)(Xa.B, Xa), $a = 0; $a < Ya.length; $a++) {
            var ab = "gbar." + Ya[$a];
            null == _.wa(ab, window) && _.u(ab, Za(ab))
        }
        _.u("gbar.up.gpd", function () {
            return ""
        });
        var bb;
        _.db = function (a, b) {
            this.o = a === bb && b || "";
            this.w = _.cb
        };
        _.db.prototype.zb = !0;
        _.db.prototype.kb = function () {
            return this.o
        };
        _.db.prototype.toString = function () {
            return "Const{" + this.o + "}"
        };
        _.eb = function (a) {
            return new _.db(bb, a)
        };
        _.cb = {};
        bb = {};
        _.fb = _.eb("");
        var hb;
        _.gb = String.prototype.trim ? function (a) {
            return a.trim()
        } : function (a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        };
        _.ib = function (a, b) {
            var c = 0;
            a = (0, _.gb)(String(a)).split(".");
            b = (0, _.gb)(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "", g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = hb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || hb(0 == f[2].length, 0 == g[2].length) || hb(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        };
        hb = function (a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
        var jb;
        _.kb = function () {
            this.w = "";
            this.A = jb
        };
        _.kb.prototype.zb = !0;
        _.kb.prototype.kb = function () {
            return this.w.toString()
        };
        _.kb.prototype.ke = !0;
        _.kb.prototype.o = function () {
            return 1
        };
        _.lb = function (a) {
            if (a instanceof _.kb && a.constructor === _.kb && a.A === jb) return a.w;
            _.za(a);
            return "type_error:SafeUrl"
        };
        _.mb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
        jb = {};
        _.nb = function (a) {
            var b = new _.kb;
            b.w = a;
            return b
        };
        _.nb("about:blank");
        _.pb = function () {
            this.o = "";
            this.w = _.ob
        };
        _.pb.prototype.zb = !0;
        _.ob = {};
        _.pb.prototype.kb = function () {
            return this.o
        };
        _.qb = function (a) {
            var b = new _.pb;
            b.o = a;
            return b
        };
        _.rb = _.qb("");
        a:{
            var tb = _.n.navigator;
            if (tb) {
                var ub = tb.userAgent;
                if (ub) {
                    _.sb = ub;
                    break a
                }
            }
            _.sb = ""
        }
        _.y = function (a) {
            return -1 != _.sb.indexOf(a)
        };
        var xb;
        _.vb = function () {
            return _.y("Trident") || _.y("MSIE")
        };
        _.wb = function () {
            return _.y("Firefox") || _.y("FxiOS")
        };
        xb = function () {
            return (_.y("Chrome") || _.y("CriOS")) && !_.y("Edge")
        };
        var yb;
        _.Ab = function () {
            this.w = "";
            this.B = yb;
            this.A = null
        };
        _.Ab.prototype.ke = !0;
        _.Ab.prototype.o = function () {
            return this.A
        };
        _.Ab.prototype.zb = !0;
        _.Ab.prototype.kb = function () {
            return this.w.toString()
        };
        _.Bb = function (a) {
            if (a instanceof _.Ab && a.constructor === _.Ab && a.B === yb) return a.w;
            _.za(a);
            return "type_error:SafeHtml"
        };
        yb = {};
        _.Cb = function (a, b) {
            var c = new _.Ab;
            c.w = a;
            c.A = b;
            return c
        };
        _.Cb("<!DOCTYPE html>", 0);
        _.Db = _.Cb("", 0);
        _.Eb = _.Cb("<br>", 0);
        _.Fb = function (a) {
            var b = !1, c;
            return function () {
                b || (c = a(), b = !0);
                return c
            }
        }(function () {
            var a = document.createElement("div"), b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            b = a.firstChild.firstChild;
            a.innerHTML = _.Bb(_.Db);
            return !b.parentElement
        });
        var Gb;
        Gb = function () {
            return _.y("iPhone") && !_.y("iPod") && !_.y("iPad")
        };
        _.Hb = function () {
            return Gb() || _.y("iPad") || _.y("iPod")
        };
        _.Ib = function (a) {
            _.Ib[" "](a);
            return a
        };
        _.Ib[" "] = _.xa;
        var Kb = function (a, b) {
            var c = Jb;
            return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
        };
        var Rb, $b, ac, Jb, ic;
        _.Lb = _.y("Opera");
        _.z = _.vb();
        _.Mb = _.y("Edge");
        _.Nb = _.Mb || _.z;
        _.Ob = _.y("Gecko") && !(-1 != _.sb.toLowerCase().indexOf("webkit") && !_.y("Edge")) && !(_.y("Trident") || _.y("MSIE")) && !_.y("Edge");
        _.Pb = -1 != _.sb.toLowerCase().indexOf("webkit") && !_.y("Edge");
        Rb = _.n.navigator || null;
        _.Qb = Rb && Rb.platform || "";
        _.Sb = _.y("Macintosh");
        _.Tb = _.y("Windows");
        _.Ub = _.y("Linux") || _.y("CrOS");
        _.Vb = _.y("Android");
        _.Wb = Gb();
        _.Xb = _.y("iPad");
        _.Yb = _.y("iPod");
        _.Zb = _.Hb();
        $b = function () {
            var a = _.n.document;
            return a ? a.documentMode : void 0
        };
        a:{
            var bc = "", cc = function () {
                var a = _.sb;
                if (_.Ob) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (_.Mb) return /Edge\/([\d\.]+)/.exec(a);
                if (_.z) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (_.Pb) return /WebKit\/(\S+)/.exec(a);
                if (_.Lb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
            cc && (bc = cc ? cc[1] : "");
            if (_.z) {
                var dc = $b();
                if (null != dc && dc > parseFloat(bc)) {
                    ac = String(dc);
                    break a
                }
            }
            ac = bc
        }
        _.ec = ac;
        Jb = {};
        _.fc = function (a) {
            return Kb(a, function () {
                return 0 <= _.ib(_.ec, a)
            })
        };
        _.hc = function (a) {
            return Number(gc) >= a
        };
        ic = _.n.document && _.z ? $b() : void 0;
        var gc = ic;
        _.jc = _.wb();
        _.kc = Gb() || _.y("iPod");
        _.lc = _.y("iPad");
        _.mc = _.y("Android") && !(xb() || _.wb() || _.y("Opera") || _.y("Silk"));
        _.nc = xb();
        _.oc = _.y("Safari") && !(xb() || _.y("Coast") || _.y("Opera") || _.y("Edge") || _.y("Edg/") || _.y("OPR") || _.wb() || _.y("Silk") || _.y("Android")) && !_.Hb();
        var pc = {}, qc = null;
        _.rc = function (a) {
            this.o = 0;
            this.w = a
        };
        _.rc.prototype.next = function () {
            return this.o < this.w.length ? {done: !1, value: this.w[this.o++]} : {done: !0, value: void 0}
        };
        "undefined" != typeof Symbol && (_.rc.prototype[Symbol.iterator] = function () {
            return this
        });
        var sc, uc, wc, zc;
        _.A = function () {
        };
        sc = "function" == typeof Uint8Array;
        _.B = function (a, b, c, d, e, f) {
            a.o = null;
            b || (b = c ? [c] : []);
            a.ma = c ? String(c) : void 0;
            a.C = 0 === c ? -1 : 0;
            a.A = b;
            a:{
                c = a.A.length;
                b = -1;
                if (c && (b = c - 1, c = a.A[b], !(null === c || "object" != typeof c || _.Aa(c) || sc && c instanceof Uint8Array))) {
                    a.D = b - a.C;
                    a.B = c;
                    break a
                }
                -1 < d ? (a.D = Math.max(d, b + 1 - a.C), a.B = null) : a.D = Number.MAX_VALUE
            }
            a.H = {};
            if (e) for (d = 0; d < e.length; d++) b = e[d], b < a.D ? (b += a.C, a.A[b] = a.A[b] || _.tc) : (uc(a), a.B[b] = a.B[b] || _.tc);
            if (f && f.length) for (d = 0; d < f.length; d++) _.vc(a, f[d])
        };
        _.tc = [];
        uc = function (a) {
            var b = a.D + a.C;
            a.A[b] || (a.B = a.A[b] = {})
        };
        _.C = function (a, b) {
            if (b < a.D) {
                b += a.C;
                var c = a.A[b];
                return c === _.tc ? a.A[b] = [] : c
            }
            if (a.B) return c = a.B[b], c === _.tc ? a.B[b] = [] : c
        };
        _.D = function (a, b) {
            a = _.C(a, b);
            return null == a ? a : !!a
        };
        _.E = function (a, b, c) {
            a = _.C(a, b);
            return null == a ? c : a
        };
        _.G = function (a, b, c) {
            b < a.D ? a.A[b + a.C] = c : (uc(a), a.B[b] = c);
            return a
        };
        _.vc = function (a, b) {
            for (var c, d, e = 0; e < b.length; e++) {
                var f = b[e], g = _.C(a, f);
                null != g && (c = f, d = g, _.G(a, f, void 0))
            }
            return c ? (_.G(a, c, d), c) : 0
        };
        _.H = function (a, b, c) {
            a.o || (a.o = {});
            if (!a.o[c]) {
                var d = _.C(a, c);
                d && (a.o[c] = new b(d))
            }
            return a.o[c]
        };
        wc = function (a) {
            if (a.o) for (var b in a.o) {
                var c = a.o[b];
                if (_.Aa(c)) for (var d = 0; d < c.length; d++) c[d] && c[d].La(); else c && c.La()
            }
        };
        _.A.prototype.La = function () {
            wc(this);
            return this.A
        };
        _.A.prototype.w = sc ? function () {
            var a = Uint8Array.prototype.toJSON;
            Uint8Array.prototype.toJSON = function () {
                var b;
                void 0 === b && (b = 0);
                if (!qc) {
                    qc = {};
                    for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                        var f = c.concat(d[e].split(""));
                        pc[e] = f;
                        for (var g = 0; g < f.length; g++) {
                            var h = f[g];
                            void 0 === qc[h] && (qc[h] = g)
                        }
                    }
                }
                b = pc[b];
                c = [];
                for (d = 0; d < this.length; d += 3) {
                    var l = this[d], m = (e = d + 1 < this.length) ? this[d + 1] : 0;
                    h = (f = d + 2 < this.length) ? this[d + 2] : 0;
                    g =
                        l >> 2;
                    l = (l & 3) << 4 | m >> 4;
                    m = (m & 15) << 2 | h >> 6;
                    h &= 63;
                    f || (h = 64, e || (m = 64));
                    c.push(b[g], b[l], b[m] || "", b[h] || "")
                }
                return c.join("")
            };
            try {
                return JSON.stringify(this.A && this.La(), xc)
            } finally {
                Uint8Array.prototype.toJSON = a
            }
        } : function () {
            return JSON.stringify(this.A && this.La(), xc)
        };
        var xc = function (a, b) {
            return _.va(b) && (isNaN(b) || Infinity === b || -Infinity === b) ? String(b) : b
        };
        _.A.prototype.toString = function () {
            wc(this);
            return this.A.toString()
        };
        _.A.prototype.clone = function () {
            return _.yc(this)
        };
        _.yc = function (a) {
            return new a.constructor(zc(a.La()))
        };
        zc = function (a) {
            if (_.Aa(a)) {
                for (var b = Array(a.length), c = 0; c < a.length; c++) {
                    var d = a[c];
                    null != d && (b[c] = "object" == typeof d ? zc(d) : d)
                }
                return b
            }
            if (sc && a instanceof Uint8Array) return new Uint8Array(a);
            b = {};
            for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? zc(d) : d);
            return b
        };
        _.Ac = function (a) {
            _.B(this, a, 0, -1, null, null)
        };
        _.v(_.Ac, _.A);
        _.J = function (a, b) {
            return null != a ? !!a : !!b
        };
        _.K = function (a, b) {
            void 0 == b && (b = "");
            return null != a ? a : b
        };
        _.L = function (a, b) {
            void 0 == b && (b = 0);
            return null != a ? a : b
        };
        var Bc = function (a) {
            _.B(this, a, 0, -1, null, null)
        };
        _.v(Bc, _.A);
        var Cc = function (a) {
            _.B(this, a, 0, -1, null, null)
        };
        _.v(Cc, _.A);
        var Dc = new Cc(window.gbar && window.gbar._CONFIG ? window.gbar._CONFIG[0] : [[, , , , , , , []], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]),
            Ec;
        Ec = _.D(Dc, 3);
        _.Fc = _.J(Ec);
        _.Gc = function () {
        };
        _.u("gbar_._DumpException", function (a) {
            _.Gc(a)
        });
        var Hc = function () {
            _.x.call(this);
            this.o = Dc
        };
        _.v(Hc, _.x);
        _.Ra(Hc, "cs");
        _.N = function () {
            return Hc.V().o
        };
        _.Ic = function () {
            return _.H(_.N(), Bc, 1) || new Bc
        };
        _.Ta("cs", new Hc);
        var Jc = new function () {
            this.o = _.H(_.Ic(), _.Ac, 8) || new _.Ac
        };
        _.u("gbar.bv", {
            n: _.L(_.C(Jc.o, 2)),
            r: _.K(_.C(Jc.o, 4)),
            f: _.K(_.C(Jc.o, 3)),
            e: _.K(_.C(Jc.o, 5)),
            m: _.L(_.E(Jc.o, 1, 1), 1)
        });
        _.u("gbar.kn", function () {
            return !0
        });
        _.u("gbar.sb", function () {
            return !1
        });
        _.Kc = !_.z || _.hc(9);
        _.Lc = !_.Ob && !_.z || _.z && _.hc(9) || _.Ob && _.fc("1.9.1");
        _.Mc = _.z && !_.fc("9");
        _.Nc = _.z || _.Lb || _.Pb;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.u("gbar.elr", function () {
            return {
                es: {f: 152, h: 60, m: 30},
                mo: "md",
                vh: window.innerHeight || 0,
                vw: window.innerWidth || 0
            }
        });
    } catch (e) {
        _._DumpException(e)
    }
})(this.gbar_);
// Google Inc.
