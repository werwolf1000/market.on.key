/*
 PIE: CSS3 rendering for IE
 Version 1.0beta5
 http://css3pie.com
 Dual-licensed for use under the Apache License Version 2.0 or the General Public License (GPL) Version 2.
 */
(function () {
    var doc = document;
    var f = window.PIE;
    if (!f) {
        f = window.PIE = {
            Q: "-pie-",
            nb: "Pie",
            La: "pie_",
            Ac: {TD: 1, TH: 1},
            cc: {
                TABLE: 1,
                THEAD: 1,
                TBODY: 1,
                TFOOT: 1,
                TR: 1,
                INPUT: 1,
                TEXTAREA: 1,
                SELECT: 1,
                OPTION: 1,
                IMG: 1,
                HR: 1
            },
            fc: {A: 1, INPUT: 1, TEXTAREA: 1, SELECT: 1, BUTTON: 1},
            Gd: {submit: 1, button: 1, reset: 1},
            aa: function () {
            }
        };
        try {
            doc.execCommand("BackgroundImageCache", false, true)
        } catch (aa) {
        }
        for (var X = 4, Y = doc.createElement("div"), ca = Y.getElementsByTagName("i"), Z; Y.innerHTML = "<!--[if gt IE " + ++X + "]><i></i><![endif]--\>", ca[0];);
        f.V = X;
        if (X === 6)f.Q = f.Q.replace(/^-/, "");
        f.Ba = doc.documentMode ||
            f.V;
        Y.innerHTML = '<v:shape adj="1"/>';
        Z = Y.firstChild;
        Z.style.behavior = "url(#default#VML)";
        f.zc = typeof Z.adj === "object";
        (function () {
            var a, b = 0, c = {};
            f.p = {
                Za: function (d) {
                    if (!a) {
                        a = doc.createDocumentFragment();
                        a.namespaces.add("css3vml", "urn:schemas-microsoft-com:vml")
                    }
                    return a.createElement("css3vml:" + d)
                }, Aa: function (d) {
                    return d && d._pieId || (d._pieId = "_" + ++b)
                }, Eb: function (d) {
                    var e, g, i, j, h = arguments;
                    e = 1;
                    for (g = h.length; e < g; e++) {
                        j = h[e];
                        for (i in j)if (j.hasOwnProperty(i))d[i] = j[i]
                    }
                    return d
                }, Rb: function (d, e,
                                 g) {
                    var i = c[d], j, h;
                    if (i)Object.prototype.toString.call(i) === "[object Array]" ? i.push([e, g]) : e.call(g, i); else {
                        h = c[d] = [[e, g]];
                        j = new Image;
                        j.onload = function () {
                            i = c[d] = {i: j.width, f: j.height};
                            for (var k = 0, n = h.length; k < n; k++)h[k][0].call(h[k][1], i);
                            j.onload = null
                        };
                        j.src = d
                    }
                }
            }
        })();
        f.Na = {
            gc: function (a, b, c, d) {
                function e() {
                    k = i >= 90 && i < 270 ? b : 0;
                    n = i < 180 ? c : 0;
                    l = b - k;
                    q = c - n
                }

                function g() {
                    for (; i < 0;)i += 360;
                    i %= 360
                }

                var i = d.ra;
                d = d.zb;
                var j, h, k, n, l, q, s, m;
                if (d) {
                    d = d.coords(a, b, c);
                    j = d.x;
                    h = d.y
                }
                if (i) {
                    i = i.jd();
                    g();
                    e();
                    if (!d) {
                        j = k;
                        h = n
                    }
                    d =
                        f.Na.tc(j, h, i, l, q);
                    a = d[0];
                    d = d[1]
                } else if (d) {
                    a = b - j;
                    d = c - h
                } else {
                    j = h = a = 0;
                    d = c
                }
                s = a - j;
                m = d - h;
                if (i === void 0) {
                    i = !s ? m < 0 ? 90 : 270 : !m ? s < 0 ? 180 : 0 : -Math.atan2(m, s) / Math.PI * 180;
                    g();
                    e()
                }
                return {
                    ra: i,
                    xc: j,
                    yc: h,
                    td: a,
                    ud: d,
                    Vd: k,
                    Wd: n,
                    rd: l,
                    sd: q,
                    kd: s,
                    ld: m,
                    rc: f.Na.dc(j, h, a, d)
                }
            }, tc: function (a, b, c, d, e) {
                if (c === 0 || c === 180)return [d, b]; else if (c === 90 || c === 270)return [a, e]; else {
                    c = Math.tan(-c * Math.PI / 180);
                    a = c * a - b;
                    b = -1 / c;
                    d = b * d - e;
                    e = b - c;
                    return [(d - a) / e, (c * d - b * a) / e]
                }
            }, dc: function (a, b, c, d) {
                a = c - a;
                b = d - b;
                return Math.abs(a === 0 ? b : b === 0 ? a : Math.sqrt(a *
                    a + b * b))
            }
        };
        f.ea = function () {
            this.Gb = [];
            this.oc = {}
        };
        f.ea.prototype = {
            ba: function (a) {
                var b = f.p.Aa(a), c = this.oc, d = this.Gb;
                if (!(b in c)) {
                    c[b] = d.length;
                    d.push(a)
                }
            }, Ha: function (a) {
                a = f.p.Aa(a);
                var b = this.oc;
                if (a && a in b) {
                    delete this.Gb[b[a]];
                    delete b[a]
                }
            }, wa: function () {
                for (var a = this.Gb, b = a.length; b--;)a[b] && a[b]()
            }
        };
        f.Oa = new f.ea;
        f.Oa.Qd = function () {
            var a = this;
            if (!a.Rd) {
                setInterval(function () {
                    a.wa()
                }, 250);
                a.Rd = 1
            }
        };
        (function () {
            function a() {
                f.K.wa();
                window.detachEvent("onunload", a);
                window.PIE = null
            }

            f.K = new f.ea;
            window.attachEvent("onunload", a);
            f.K.sa = function (b, c, d) {
                b.attachEvent(c, d);
                this.ba(function () {
                    b.detachEvent(c, d)
                })
            }
        })();
        f.Qa = new f.ea;
        f.K.sa(window, "onresize", function () {
            f.Qa.wa()
        });
        (function () {
            function a() {
                f.mb.wa()
            }

            f.mb = new f.ea;
            f.K.sa(window, "onscroll", a);
            f.Qa.ba(a)
        })();
        (function () {
            function a() {
                c = f.kb.md()
            }

            function b() {
                if (c) {
                    for (var d = 0, e = c.length; d < e; d++)f.attach(c[d]);
                    c = 0
                }
            }

            var c;
            f.K.sa(window, "onbeforeprint", a);
            f.K.sa(window, "onafterprint", b)
        })();
        f.lb = new f.ea;
        f.K.sa(doc, "onmouseup", function () {
            f.lb.wa()
        });
        f.ge = function () {
            function a(h) {
                this.Y = h
            }

            var b = doc.createElement("length-calc"), c = doc.documentElement, d = b.style, e = {}, g = ["mm", "cm", "in", "pt", "pc"], i = g.length, j = {};
            d.position = "absolute";
            d.top = d.left = "-9999px";
            for (c.appendChild(b); i--;) {
                b.style.width = "100" + g[i];
                e[g[i]] = b.offsetWidth / 100
            }
            c.removeChild(b);
            b.style.width = "1em";
            a.prototype = {
                Kb: /(px|em|ex|mm|cm|in|pt|pc|%)$/, ic: function () {
                    var h = this.Id;
                    if (h === void 0)h = this.Id = parseFloat(this.Y);
                    return h
                }, yb: function () {
                    var h = this.$d;
                    if (!h)h = this.$d = (h = this.Y.match(this.Kb)) &&
                        h[0] || "px";
                    return h
                }, a: function (h, k) {
                    var n = this.ic(), l = this.yb();
                    switch (l) {
                        case "px":
                            return n;
                        case "%":
                            return n * (typeof k === "function" ? k() : k) / 100;
                        case "em":
                            return n * this.xb(h);
                        case "ex":
                            return n * this.xb(h) / 2;
                        default:
                            return n * e[l]
                    }
                }, xb: function (h) {
                    var k = h.currentStyle.fontSize, n, l;
                    if (k.indexOf("px") > 0)return parseFloat(k); else if (h.tagName in f.cc) {
                        l = this;
                        n = h.parentNode;
                        return f.n(k).a(n, function () {
                            return l.xb(n)
                        })
                    } else {
                        h.appendChild(b);
                        k = b.offsetWidth;
                        b.parentNode === h && h.removeChild(b);
                        return k
                    }
                }
            };
            f.n = function (h) {
                return j[h] || (j[h] = new a(h))
            };
            return a
        }();
        f.Ja = function () {
            function a(e) {
                this.X = e
            }

            var b = f.n("50%"), c = {top: 1, center: 1, bottom: 1}, d = {left: 1, center: 1, right: 1};
            a.prototype = {
                zd: function () {
                    if (!this.ac) {
                        var e = this.X, g = e.length, i = f.v, j = i.pa, h = f.n("0");
                        j = j.ma;
                        h = ["left", h, "top", h];
                        if (g === 1) {
                            e.push(new i.ob(j, "center"));
                            g++
                        }
                        if (g === 2) {
                            j & (e[0].k | e[1].k) && e[0].d in c && e[1].d in d && e.push(e.shift());
                            if (e[0].k & j)if (e[0].d === "center")h[1] = b; else h[0] = e[0].d; else if (e[0].W())h[1] = f.n(e[0].d);
                            if (e[1].k &
                                j)if (e[1].d === "center")h[3] = b; else h[2] = e[1].d; else if (e[1].W())h[3] = f.n(e[1].d)
                        }
                        this.ac = h
                    }
                    return this.ac
                }, coords: function (e, g, i) {
                    var j = this.zd(), h = j[1].a(e, g);
                    e = j[3].a(e, i);
                    return {x: j[0] === "right" ? g - h : h, y: j[2] === "bottom" ? i - e : e}
                }
            };
            return a
        }();
        f.Ka = function () {
            function a(b, c) {
                this.i = b;
                this.f = c
            }

            a.prototype = {
                a: function (b, c, d, e, g) {
                    var i = this.i, j = this.f, h = c / d;
                    e = e / g;
                    if (i === "contain") {
                        i = e > h ? c : d * e;
                        j = e > h ? c / e : d
                    } else if (i === "cover") {
                        i = e < h ? c : d * e;
                        j = e < h ? c / e : d
                    } else if (i === "auto") {
                        j = j === "auto" ? g : j.a(b, d);
                        i = j * e
                    } else {
                        i =
                            i.a(b, c);
                        j = j === "auto" ? i / e : j.a(b, d)
                    }
                    return {i: i, f: j}
                }
            };
            a.Kc = new a("auto", "auto");
            return a
        }();
        f.Ec = function () {
            function a(b) {
                this.Y = b
            }

            a.prototype = {
                Kb: /[a-z]+$/i, yb: function () {
                    return this.ad || (this.ad = this.Y.match(this.Kb)[0].toLowerCase())
                }, jd: function () {
                    var b = this.Vc, c;
                    if (b === undefined) {
                        b = this.yb();
                        c = parseFloat(this.Y, 10);
                        b = this.Vc = b === "deg" ? c : b === "rad" ? c / Math.PI * 180 : b === "grad" ? c / 400 * 360 : b === "turn" ? c * 360 : 0
                    }
                    return b
                }
            };
            return a
        }();
        f.Jc = function () {
            function a(c) {
                this.Y = c
            }

            var b = {};
            a.Pd = /\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/;
            a.Fb = {
                aliceblue: "F0F8FF",
                antiquewhite: "FAEBD7",
                aqua: "0FF",
                aquamarine: "7FFFD4",
                azure: "F0FFFF",
                beige: "F5F5DC",
                bisque: "FFE4C4",
                black: "000",
                blanchedalmond: "FFEBCD",
                blue: "00F",
                blueviolet: "8A2BE2",
                brown: "A52A2A",
                burlywood: "DEB887",
                cadetblue: "5F9EA0",
                chartreuse: "7FFF00",
                chocolate: "D2691E",
                coral: "FF7F50",
                cornflowerblue: "6495ED",
                cornsilk: "FFF8DC",
                crimson: "DC143C",
                cyan: "0FF",
                darkblue: "00008B",
                darkcyan: "008B8B",
                darkgoldenrod: "B8860B",
                darkgray: "A9A9A9",
                darkgreen: "006400",
                darkkhaki: "BDB76B",
                darkmagenta: "8B008B",
                darkolivegreen: "556B2F",
                darkorange: "FF8C00",
                darkorchid: "9932CC",
                darkred: "8B0000",
                darksalmon: "E9967A",
                darkseagreen: "8FBC8F",
                darkslateblue: "483D8B",
                darkslategray: "2F4F4F",
                darkturquoise: "00CED1",
                darkviolet: "9400D3",
                deeppink: "FF1493",
                deepskyblue: "00BFFF",
                dimgray: "696969",
                dodgerblue: "1E90FF",
                firebrick: "B22222",
                floralwhite: "FFFAF0",
                forestgreen: "228B22",
                fuchsia: "F0F",
                gainsboro: "DCDCDC",
                ghostwhite: "F8F8FF",
                gold: "FFD700",
                goldenrod: "DAA520",
                gray: "808080",
                green: "008000",
                greenyellow: "ADFF2F",
                honeydew: "F0FFF0",
                hotpink: "FF69B4",
                indianred: "CD5C5C",
                indigo: "4B0082",
                ivory: "FFFFF0",
                khaki: "F0E68C",
                lavender: "E6E6FA",
                lavenderblush: "FFF0F5",
                lawngreen: "7CFC00",
                lemonchiffon: "FFFACD",
                lightblue: "ADD8E6",
                lightcoral: "F08080",
                lightcyan: "E0FFFF",
                lightgoldenrodyellow: "FAFAD2",
                lightgreen: "90EE90",
                lightgrey: "D3D3D3",
                lightpink: "FFB6C1",
                lightsalmon: "FFA07A",
                lightseagreen: "20B2AA",
                lightskyblue: "87CEFA",
                lightslategray: "789",
                lightsteelblue: "B0C4DE",
                lightyellow: "FFFFE0",
                lime: "0F0",
                limegreen: "32CD32",
                linen: "FAF0E6",
                magenta: "F0F",
                maroon: "800000",
                mediumauqamarine: "66CDAA",
                mediumblue: "0000CD",
                mediumorchid: "BA55D3",
                mediumpurple: "9370D8",
                mediumseagreen: "3CB371",
                mediumslateblue: "7B68EE",
                mediumspringgreen: "00FA9A",
                mediumturquoise: "48D1CC",
                mediumvioletred: "C71585",
                midnightblue: "191970",
                mintcream: "F5FFFA",
                mistyrose: "FFE4E1",
                moccasin: "FFE4B5",
                navajowhite: "FFDEAD",
                navy: "000080",
                oldlace: "FDF5E6",
                olive: "808000",
                olivedrab: "688E23",
                orange: "FFA500",
                orangered: "FF4500",
                orchid: "DA70D6",
                palegoldenrod: "EEE8AA",
                palegreen: "98FB98",
                paleturquoise: "AFEEEE",
                palevioletred: "D87093",
                papayawhip: "FFEFD5",
                peachpuff: "FFDAB9",
                peru: "CD853F",
                pink: "FFC0CB",
                plum: "DDA0DD",
                powderblue: "B0E0E6",
                purple: "800080",
                red: "F00",
                rosybrown: "BC8F8F",
                royalblue: "4169E1",
                saddlebrown: "8B4513",
                salmon: "FA8072",
                sandybrown: "F4A460",
                seagreen: "2E8B57",
                seashell: "FFF5EE",
                sienna: "A0522D",
                silver: "C0C0C0",
                skyblue: "87CEEB",
                slateblue: "6A5ACD",
                slategray: "708090",
                snow: "FFFAFA",
                springgreen: "00FF7F",
                steelblue: "4682B4",
                tan: "D2B48C",
                teal: "008080",
                thistle: "D8BFD8",
                tomato: "FF6347",
                turquoise: "40E0D0",
                violet: "EE82EE",
                wheat: "F5DEB3",
                white: "FFF",
                whitesmoke: "F5F5F5",
                yellow: "FF0",
                yellowgreen: "9ACD32"
            };
            a.prototype = {
                parse: function () {
                    if (!this.Ua) {
                        var c = this.Y, d;
                        if (d = c.match(a.Pd)) {
                            this.Ua = "rgb(" + d[1] + "," + d[2] + "," + d[3] + ")";
                            this.Yb = parseFloat(d[4])
                        } else {
                            if ((d = c.toLowerCase())in a.Fb)c = "#" + a.Fb[d];
                            this.Ua = c;
                            this.Yb = c === "transparent" ? 0 : 1
                        }
                    }
                }, T: function (c) {
                    this.parse();
                    return this.Ua === "currentColor" ? c.currentStyle.color : this.Ua
                }, fa: function () {
                    this.parse();
                    return this.Yb
                }
            };
            f.ha = function (c) {
                return b[c] || (b[c] =
                        new a(c))
            };
            return a
        }();
        f.v = function () {
            function a(c) {
                this.$a = c;
                this.ch = 0;
                this.X = [];
                this.Ga = 0
            }

            var b = a.pa = {
                Ia: 1,
                Wb: 2,
                B: 4,
                Lc: 8,
                Xb: 16,
                ma: 32,
                J: 64,
                na: 128,
                oa: 256,
                Ra: 512,
                Tc: 1024,
                URL: 2048
            };
            a.ob = function (c, d) {
                this.k = c;
                this.d = d
            };
            a.ob.prototype = {
                Ca: function () {
                    return this.k & b.J || this.k & b.na && this.d === "0"
                }, W: function () {
                    return this.Ca() || this.k & b.Ra
                }
            };
            a.prototype = {
                ce: /\s/,
                Jd: /^[\+\-]?(\d*\.)?\d+/,
                url: /^url\(\s*("([^"]*)"|'([^']*)'|([!#$%&*-~]*))\s*\)/i,
                nc: /^\-?[_a-z][\w-]*/i,
                Xd: /^("([^"]*)"|'([^']*)')/,
                Bd: /^#([\da-f]{6}|[\da-f]{3})/i,
                ae: {
                    px: b.J,
                    em: b.J,
                    ex: b.J,
                    mm: b.J,
                    cm: b.J,
                    "in": b.J,
                    pt: b.J,
                    pc: b.J,
                    deg: b.Ia,
                    rad: b.Ia,
                    grad: b.Ia
                },
                fd: {rgb: 1, rgba: 1, hsl: 1, hsla: 1},
                next: function (c) {
                    function d(q, s) {
                        q = new a.ob(q, s);
                        if (!c) {
                            k.X.push(q);
                            k.Ga++
                        }
                        return q
                    }

                    function e() {
                        k.Ga++;
                        return null
                    }

                    var g, i, j, h, k = this;
                    if (this.Ga < this.X.length)return this.X[this.Ga++];
                    for (; this.ce.test(this.$a.charAt(this.ch));)this.ch++;
                    if (this.ch >= this.$a.length)return e();
                    i = this.ch;
                    g = this.$a.substring(this.ch);
                    j = g.charAt(0);
                    switch (j) {
                        case "#":
                            if (h = g.match(this.Bd)) {
                                this.ch +=
                                    h[0].length;
                                return d(b.B, h[0])
                            }
                            break;
                        case '"':
                        case "'":
                            if (h = g.match(this.Xd)) {
                                this.ch += h[0].length;
                                return d(b.Tc, h[2] || h[3] || "")
                            }
                            break;
                        case "/":
                        case ",":
                            this.ch++;
                            return d(b.oa, j);
                        case "u":
                            if (h = g.match(this.url)) {
                                this.ch += h[0].length;
                                return d(b.URL, h[2] || h[3] || h[4] || "")
                            }
                    }
                    if (h = g.match(this.Jd)) {
                        j = h[0];
                        this.ch += j.length;
                        if (g.charAt(j.length) === "%") {
                            this.ch++;
                            return d(b.Ra, j + "%")
                        }
                        if (h = g.substring(j.length).match(this.nc)) {
                            j += h[0];
                            this.ch += h[0].length;
                            return d(this.ae[h[0].toLowerCase()] || b.Lc, j)
                        }
                        return d(b.na,
                            j)
                    }
                    if (h = g.match(this.nc)) {
                        j = h[0];
                        this.ch += j.length;
                        if (j.toLowerCase()in f.Jc.Fb || j === "currentColor" || j === "transparent")return d(b.B, j);
                        if (g.charAt(j.length) === "(") {
                            this.ch++;
                            if (j.toLowerCase()in this.fd) {
                                g = function (q) {
                                    return q && q.k & b.na
                                };
                                h = function (q) {
                                    return q && q.k & (b.na | b.Ra)
                                };
                                var n = function (q, s) {
                                    return q && q.d === s
                                }, l = function () {
                                    return k.next(1)
                                };
                                if ((j.charAt(0) === "r" ? h(l()) : g(l())) && n(l(), ",") && h(l()) && n(l(), ",") && h(l()) && (j === "rgb" || j === "hsa" || n(l(), ",") && g(l())) && n(l(), ")"))return d(b.B, this.$a.substring(i,
                                    this.ch));
                                return e()
                            }
                            return d(b.Xb, j)
                        }
                        return d(b.ma, j)
                    }
                    this.ch++;
                    return d(b.Wb, j)
                },
                D: function () {
                    return this.X[this.Ga-- - 2]
                },
                all: function () {
                    for (; this.next(););
                    return this.X
                },
                la: function (c, d) {
                    for (var e = [], g, i; g = this.next();) {
                        if (c(g)) {
                            i = true;
                            this.D();
                            break
                        }
                        e.push(g)
                    }
                    return d && !i ? null : e
                }
            };
            return a
        }();
        var da = function (a) {
            this.e = a
        };
        da.prototype = {
            Z: 0, Nd: function () {
                var a = this.qb, b;
                return !a || (b = this.o()) && (a.x !== b.x || a.y !== b.y)
            }, Sd: function () {
                var a = this.qb, b;
                return !a || (b = this.o()) && (a.i !== b.i || a.f !== b.f)
            },
            hc: function () {
                var a = this.e, b = a.getBoundingClientRect(), c = f.Ba === 9;
                return {
                    x: b.left,
                    y: b.top,
                    i: c ? a.offsetWidth : b.right - b.left,
                    f: c ? a.offsetHeight : b.bottom - b.top
                }
            }, o: function () {
                return this.Z ? this.Va || (this.Va = this.hc()) : this.hc()
            }, Ad: function () {
                return !!this.qb
            }, cb: function () {
                ++this.Z
            }, hb: function () {
                if (!--this.Z) {
                    if (this.Va)this.qb = this.Va;
                    this.Va = null
                }
            }
        };
        (function () {
            function a(b) {
                var c = f.p.Aa(b);
                return function () {
                    if (this.Z) {
                        var d = this.$b || (this.$b = {});
                        return c in d ? d[c] : (d[c] = b.call(this))
                    } else return b.call(this)
                }
            }

            f.C = {
                Z: 0, ja: function (b) {
                    function c(d) {
                        this.e = d;
                        this.Zb = this.ia()
                    }

                    f.p.Eb(c.prototype, f.C, b);
                    c.$c = {};
                    return c
                }, j: function () {
                    var b = this.ia(), c = this.constructor.$c;
                    return b ? b in c ? c[b] : (c[b] = this.ka(b)) : null
                }, ia: a(function () {
                    var b = this.e, c = this.constructor, d = b.style;
                    b = b.currentStyle;
                    var e = this.va, g = this.Fa, i = c.Yc || (c.Yc = f.Q + e);
                    c = c.Zc || (c.Zc = f.nb + g.charAt(0).toUpperCase() + g.substring(1));
                    return d[c] || b.getAttribute(i) || d[g] || b.getAttribute(e)
                }), h: a(function () {
                    return !!this.j()
                }), G: a(function () {
                    var b = this.ia(),
                        c = b !== this.Zb;
                    this.Zb = b;
                    return c
                }), ua: a, cb: function () {
                    ++this.Z
                }, hb: function () {
                    --this.Z || delete this.$b
                }
            }
        })();
        f.Sb = f.C.ja({
            va: f.Q + "background",
            Fa: f.nb + "Background",
            cd: {scroll: 1, fixed: 1, local: 1},
            fb: {"repeat-x": 1, "repeat-y": 1, repeat: 1, "no-repeat": 1},
            sc: {"padding-box": 1, "border-box": 1, "content-box": 1},
            Od: {top: 1, right: 1, bottom: 1, left: 1, center: 1},
            Td: {contain: 1, cover: 1},
            eb: {
                Ma: "backgroundClip",
                B: "backgroundColor",
                da: "backgroundImage",
                Pa: "backgroundOrigin",
                R: "backgroundPosition",
                S: "backgroundRepeat",
                Sa: "backgroundSize"
            },
            ka: function (a) {
                function b(v) {
                    return v && v.W() || v.k & k && v.d in m
                }

                function c(v) {
                    return v && (v.W() && f.n(v.d) || v.d === "auto" && "auto")
                }

                var d = this.e.currentStyle, e, g, i, j = f.v.pa, h = j.oa, k = j.ma, n = j.B, l, q, s = 0, m = this.Od, r, p, t = {L: []};
                if (this.wb()) {
                    e = new f.v(a);
                    for (i = {}; g = e.next();) {
                        l = g.k;
                        q = g.d;
                        if (!i.N && l & j.Xb && q === "linear-gradient") {
                            r = {ca: [], N: q};
                            for (p = {}; g = e.next();) {
                                l = g.k;
                                q = g.d;
                                if (l & j.Wb && q === ")") {
                                    p.color && r.ca.push(p);
                                    r.ca.length > 1 && f.p.Eb(i, r);
                                    break
                                }
                                if (l & n) {
                                    if (r.ra || r.zb) {
                                        g = e.D();
                                        if (g.k !== h)break;
                                        e.next()
                                    }
                                    p =
                                    {color: f.ha(q)};
                                    g = e.next();
                                    if (g.W())p.db = f.n(g.d); else e.D()
                                } else if (l & j.Ia && !r.ra && !p.color && !r.ca.length)r.ra = new f.Ec(g.d); else if (b(g) && !r.zb && !p.color && !r.ca.length) {
                                    e.D();
                                    r.zb = new f.Ja(e.la(function (v) {
                                        return !b(v)
                                    }, false))
                                } else if (l & h && q === ",") {
                                    if (p.color) {
                                        r.ca.push(p);
                                        p = {}
                                    }
                                } else break
                            }
                        } else if (!i.N && l & j.URL) {
                            i.Ab = q;
                            i.N = "image"
                        } else if (b(g) && !i.$) {
                            e.D();
                            i.$ = new f.Ja(e.la(function (v) {
                                return !b(v)
                            }, false))
                        } else if (l & k)if (q in this.fb && !i.bb)i.bb = q; else if (q in this.sc && !i.Wa) {
                            i.Wa = q;
                            if ((g = e.next()) &&
                                g.k & k && g.d in this.sc)i.ub = g.d; else {
                                i.ub = q;
                                e.D()
                            }
                        } else if (q in this.cd && !i.bc)i.bc = q; else return null; else if (l & n && !t.color)t.color = f.ha(q); else if (l & h && q === "/" && !i.Xa && i.$) {
                            g = e.next();
                            if (g.k & k && g.d in this.Td)i.Xa = new f.Ka(g.d); else if (g = c(g)) {
                                l = c(e.next());
                                if (!l) {
                                    l = g;
                                    e.D()
                                }
                                i.Xa = new f.Ka(g, l)
                            } else return null
                        } else if (l & h && q === "," && i.N) {
                            i.Hb = a.substring(s, e.ch - 1);
                            s = e.ch;
                            t.L.push(i);
                            i = {}
                        } else return null
                    }
                    if (i.N) {
                        i.Hb = a.substring(s);
                        t.L.push(i)
                    }
                } else this.Bc(f.Ba < 9 ? function () {
                    var v = this.eb, o = d[v.R +
                    "X"], u = d[v.R + "Y"], x = d[v.da], y = d[v.B];
                    if (y !== "transparent")t.color = f.ha(y);
                    if (x !== "none")t.L = [{
                        N: "image",
                        Ab: (new f.v(x)).next().d,
                        bb: d[v.S],
                        $: new f.Ja((new f.v(o + " " + u)).all())
                    }]
                } : function () {
                    var v = this.eb, o = /\s*,\s*/, u = d[v.da].split(o), x = d[v.B], y, z, D, G, E, B;
                    if (x !== "transparent")t.color = f.ha(x);
                    if ((G = u.length) && u[0] !== "none") {
                        x = d[v.S].split(o);
                        y = d[v.R].split(o);
                        z = d[v.Pa].split(o);
                        D = d[v.Ma].split(o);
                        v = d[v.Sa].split(o);
                        t.L = [];
                        for (o = 0; o < G; o++)if ((E = u[o]) && E !== "none") {
                            B = v[o].split(" ");
                            t.L.push({
                                Hb: E + " " +
                                x[o] + " " + y[o] + " / " + v[o] + " " + z[o] + " " + D[o],
                                N: "image",
                                Ab: (new f.v(E)).next().d,
                                bb: x[o],
                                $: new f.Ja((new f.v(y[o])).all()),
                                Wa: z[o],
                                ub: D[o],
                                Xa: new f.Ka(B[0], B[1])
                            })
                        }
                    }
                });
                return t.color || t.L[0] ? t : null
            },
            Bc: function (a) {
                var b = f.Ba > 8, c = this.eb, d = this.e.runtimeStyle, e = d[c.da], g = d[c.B], i = d[c.S], j, h, k, n;
                if (e)d[c.da] = "";
                if (g)d[c.B] = "";
                if (i)d[c.S] = "";
                if (b) {
                    j = d[c.Ma];
                    h = d[c.Pa];
                    n = d[c.R];
                    k = d[c.Sa];
                    if (j)d[c.Ma] = "";
                    if (h)d[c.Pa] = "";
                    if (n)d[c.R] = "";
                    if (k)d[c.Sa] = ""
                }
                a = a.call(this);
                if (e)d[c.da] = e;
                if (g)d[c.B] = g;
                if (i)d[c.S] =
                    i;
                if (b) {
                    if (j)d[c.Ma] = j;
                    if (h)d[c.Pa] = h;
                    if (n)d[c.R] = n;
                    if (k)d[c.Sa] = k
                }
                return a
            },
            ia: f.C.ua(function () {
                return this.wb() || this.Bc(function () {
                        var a = this.e.currentStyle, b = this.eb;
                        return a[b.B] + " " + a[b.da] + " " + a[b.S] + " " + a[b.R + "X"] + " " + a[b.R + "Y"]
                    })
            }),
            wb: f.C.ua(function () {
                var a = this.e;
                return a.style[this.Fa] || a.currentStyle.getAttribute(this.va)
            }),
            qc: function () {
                var a = 0;
                if (f.V < 7) {
                    a = this.e;
                    a = "" + (a.style[f.nb + "PngFix"] || a.currentStyle.getAttribute(f.Q + "png-fix")) === "true"
                }
                return a
            },
            h: f.C.ua(function () {
                return (this.wb() ||
                    this.qc()) && !!this.j()
            })
        });
        f.Vb = f.C.ja({
            wc: ["Top", "Right", "Bottom", "Left"], Hd: {thin: "1px", medium: "3px", thick: "5px"}, ka: function () {
                var a = {}, b = {}, c = {}, d = false, e = true, g = true, i = true;
                this.Cc(function () {
                    for (var j = this.e.currentStyle, h = 0, k, n, l, q, s, m, r; h < 4; h++) {
                        l = this.wc[h];
                        r = l.charAt(0).toLowerCase();
                        k = b[r] = j["border" + l + "Style"];
                        n = j["border" + l + "Color"];
                        l = j["border" + l + "Width"];
                        if (h > 0) {
                            if (k !== q)g = false;
                            if (n !== s)e = false;
                            if (l !== m)i = false
                        }
                        q = k;
                        s = n;
                        m = l;
                        c[r] = f.ha(n);
                        l = a[r] = f.n(b[r] === "none" ? "0" : this.Hd[l] || l);
                        if (l.a(this.e) >
                            0)d = true
                    }
                });
                return d ? {I: a, Yd: b, gd: c, de: i, hd: e, Zd: g} : null
            }, ia: f.C.ua(function () {
                var a = this.e, b = a.currentStyle, c;
                a.tagName in f.Ac && a.offsetParent.currentStyle.borderCollapse === "collapse" || this.Cc(function () {
                    c = b.borderWidth + "|" + b.borderStyle + "|" + b.borderColor
                });
                return c
            }), Cc: function (a) {
                var b = this.e.runtimeStyle, c = b.borderWidth, d = b.borderColor;
                if (c)b.borderWidth = "";
                if (d)b.borderColor = "";
                a = a.call(this);
                if (c)b.borderWidth = c;
                if (d)b.borderColor = d;
                return a
            }
        });
        (function () {
            f.jb = f.C.ja({
                va: "border-radius",
                Fa: "borderRadius", ka: function (b) {
                    var c = null, d, e, g, i, j = false;
                    if (b) {
                        e = new f.v(b);
                        var h = function () {
                            for (var k = [], n; (g = e.next()) && g.W();) {
                                i = f.n(g.d);
                                n = i.ic();
                                if (n < 0)return null;
                                if (n > 0)j = true;
                                k.push(i)
                            }
                            return k.length > 0 && k.length < 5 ? {
                                tl: k[0],
                                tr: k[1] || k[0],
                                br: k[2] || k[0],
                                bl: k[3] || k[1] || k[0]
                            } : null
                        };
                        if (b = h()) {
                            if (g) {
                                if (g.k & f.v.pa.oa && g.d === "/")d = h()
                            } else d = b;
                            if (j && b && d)c = {x: b, y: d}
                        }
                    }
                    return c
                }
            });
            var a = f.n("0");
            a = {tl: a, tr: a, br: a, bl: a};
            f.jb.Dc = {x: a, y: a}
        })();
        f.Ub = f.C.ja({
            va: "border-image", Fa: "borderImage", fb: {
                stretch: 1,
                round: 1, repeat: 1, space: 1
            }, ka: function (a) {
                var b = null, c, d, e, g, i, j, h = 0, k = f.v.pa, n = k.ma, l = k.na, q = k.Ra;
                if (a) {
                    c = new f.v(a);
                    b = {};
                    for (var s = function (p) {
                        return p && p.k & k.oa && p.d === "/"
                    }, m = function (p) {
                        return p && p.k & n && p.d === "fill"
                    }, r = function () {
                        g = c.la(function (p) {
                            return !(p.k & (l | q))
                        });
                        if (m(c.next()) && !b.fill)b.fill = true; else c.D();
                        if (s(c.next())) {
                            h++;
                            i = c.la(function (p) {
                                return !p.W() && !(p.k & n && p.d === "auto")
                            });
                            if (s(c.next())) {
                                h++;
                                j = c.la(function (p) {
                                    return !p.Ca()
                                })
                            }
                        } else c.D()
                    }; a = c.next();) {
                        d = a.k;
                        e = a.d;
                        if (d & (l | q) && !g) {
                            c.D();
                            r()
                        } else if (m(a) && !b.fill) {
                            b.fill = true;
                            r()
                        } else if (d & n && this.fb[e] && !b.repeat) {
                            b.repeat = {f: e};
                            if (a = c.next())if (a.k & n && this.fb[a.d])b.repeat.Ob = a.d; else c.D()
                        } else if (d & k.URL && !b.src)b.src = e; else return null
                    }
                    if (!b.src || !g || g.length < 1 || g.length > 4 || i && i.length > 4 || h === 1 && i.length < 1 || j && j.length > 4 || h === 2 && j.length < 1)return null;
                    if (!b.repeat)b.repeat = {f: "stretch"};
                    if (!b.repeat.Ob)b.repeat.Ob = b.repeat.f;
                    a = function (p, t) {
                        return {t: t(p[0]), r: t(p[1] || p[0]), b: t(p[2] || p[0]), l: t(p[3] || p[1] || p[0])}
                    };
                    b.slice =
                        a(g, function (p) {
                            return f.n(p.k & l ? p.d + "px" : p.d)
                        });
                    if (i && i[0])b.I = a(i, function (p) {
                        return p.W() ? f.n(p.d) : p.d
                    });
                    if (j && j[0])b.Da = a(j, function (p) {
                        return p.Ca() ? f.n(p.d) : p.d
                    })
                }
                return b
            }
        });
        f.Ic = f.C.ja({
            va: "box-shadow", Fa: "boxShadow", ka: function (a) {
                var b, c = f.n, d = f.v.pa, e;
                if (a) {
                    e = new f.v(a);
                    b = {Da: [], Bb: []};
                    for (a = function () {
                        for (var g, i, j, h, k, n; g = e.next();) {
                            j = g.d;
                            i = g.k;
                            if (i & d.oa && j === ",")break; else if (g.Ca() && !k) {
                                e.D();
                                k = e.la(function (l) {
                                    return !l.Ca()
                                })
                            } else if (i & d.B && !h)h = j; else if (i & d.ma && j === "inset" && !n)n =
                                true; else return false
                        }
                        g = k && k.length;
                        if (g > 1 && g < 5) {
                            (n ? b.Bb : b.Da).push({
                                ee: c(k[0].d),
                                fe: c(k[1].d),
                                blur: c(k[2] ? k[2].d : "0"),
                                Ud: c(k[3] ? k[3].d : "0"),
                                color: f.ha(h || "currentColor")
                            });
                            return true
                        }
                        return false
                    }; a(););
                }
                return b && (b.Bb.length || b.Da.length) ? b : null
            }
        });
        f.Uc = f.C.ja({
            ia: f.C.ua(function () {
                var a = this.e.currentStyle;
                return a.visibility + "|" + a.display
            }), ka: function () {
                var a = this.e, b = a.runtimeStyle;
                a = a.currentStyle;
                var c = b.visibility, d;
                b.visibility = "";
                d = a.visibility;
                b.visibility = c;
                return {
                    be: d !== "hidden",
                    nd: a.display !== "none"
                }
            }, h: function () {
                return false
            }
        });
        f.u = {
            P: function (a) {
                function b(c, d, e, g) {
                    this.e = c;
                    this.s = d;
                    this.g = e;
                    this.parent = g
                }

                f.p.Eb(b.prototype, f.u, a);
                return b
            }, Cb: false, O: function () {
                return false
            }, Ea: f.aa, Lb: function () {
                this.m();
                this.h() && this.U()
            }, ib: function () {
                this.Cb = true
            }, Mb: function () {
                this.h() ? this.U() : this.m()
            }, sb: function (a, b) {
                this.vc(a);
                for (var c = this.qa || (this.qa = []), d = a + 1, e = c.length, g; d < e; d++)if (g = c[d])break;
                c[a] = b;
                this.H().insertBefore(b, g || null)
            }, ya: function (a) {
                var b = this.qa;
                return b &&
                    b[a] || null
            }, vc: function (a) {
                var b = this.ya(a), c = this.Ta;
                if (b && c) {
                    c.removeChild(b);
                    this.qa[a] = null
                }
            }, za: function (a, b, c, d) {
                var e = this.rb || (this.rb = {}), g = e[a];
                if (!g) {
                    g = e[a] = f.p.Za("shape");
                    if (b)g.appendChild(g[b] = f.p.Za(b));
                    if (d) {
                        c = this.ya(d);
                        if (!c) {
                            this.sb(d, doc.createElement("group" + d));
                            c = this.ya(d)
                        }
                    }
                    c.appendChild(g);
                    a = g.style;
                    a.position = "absolute";
                    a.left = a.top = 0;
                    a.behavior = "url(#default#VML)"
                }
                return g
            }, vb: function (a) {
                var b = this.rb, c = b && b[a];
                if (c) {
                    c.parentNode.removeChild(c);
                    delete b[a]
                }
                return !!c
            }, kc: function (a) {
                var b =
                    this.e, c = this.s.o(), d = c.i, e = c.f, g, i, j, h, k, n;
                c = a.x.tl.a(b, d);
                g = a.y.tl.a(b, e);
                i = a.x.tr.a(b, d);
                j = a.y.tr.a(b, e);
                h = a.x.br.a(b, d);
                k = a.y.br.a(b, e);
                n = a.x.bl.a(b, d);
                a = a.y.bl.a(b, e);
                d = Math.min(d / (c + i), e / (j + k), d / (n + h), e / (g + a));
                if (d < 1) {
                    c *= d;
                    g *= d;
                    i *= d;
                    j *= d;
                    h *= d;
                    k *= d;
                    n *= d;
                    a *= d
                }
                return {x: {tl: c, tr: i, br: h, bl: n}, y: {tl: g, tr: j, br: k, bl: a}}
            }, xa: function (a, b, c) {
                b = b || 1;
                var d, e, g = this.s.o();
                e = g.i * b;
                g = g.f * b;
                var i = this.g.F, j = Math.floor, h = Math.ceil, k = a ? a.Jb * b : 0, n = a ? a.Ib * b : 0, l = a ? a.tb * b : 0;
                a = a ? a.Db * b : 0;
                var q, s, m, r, p;
                if (c || i.h()) {
                    d =
                        this.kc(c || i.j());
                    c = d.x.tl * b;
                    i = d.y.tl * b;
                    q = d.x.tr * b;
                    s = d.y.tr * b;
                    m = d.x.br * b;
                    r = d.y.br * b;
                    p = d.x.bl * b;
                    b = d.y.bl * b;
                    e = "m" + j(a) + "," + j(i) + "qy" + j(c) + "," + j(k) + "l" + h(e - q) + "," + j(k) + "qx" + h(e - n) + "," + j(s) + "l" + h(e - n) + "," + h(g - r) + "qy" + h(e - m) + "," + h(g - l) + "l" + j(p) + "," + h(g - l) + "qx" + j(a) + "," + h(g - b) + " x e"
                } else e = "m" + j(a) + "," + j(k) + "l" + h(e - n) + "," + j(k) + "l" + h(e - n) + "," + h(g - l) + "l" + j(a) + "," + h(g - l) + "xe";
                return e
            }, H: function () {
                var a = this.parent.ya(this.M), b;
                if (!a) {
                    a = doc.createElement(this.Ya);
                    b = a.style;
                    b.position = "absolute";
                    b.top = b.left =
                        0;
                    this.parent.sb(this.M, a)
                }
                return a
            }, mc: function () {
                var a = this.e, b = a.currentStyle, c = a.runtimeStyle, d = a.tagName, e = f.V === 6, g;
                if (e && (d in f.cc || d === "FIELDSET") || d === "BUTTON" || d === "INPUT" && a.type in f.Gd) {
                    c.borderWidth = "";
                    d = this.g.z.wc;
                    for (g = d.length; g--;) {
                        e = d[g];
                        c["padding" + e] = "";
                        c["padding" + e] = f.n(b["padding" + e]).a(a) + f.n(b["border" + e + "Width"]).a(a) + (f.V !== 8 && g % 2 ? 1 : 0)
                    }
                    c.borderWidth = 0
                } else if (e) {
                    if (a.childNodes.length !== 1 || a.firstChild.tagName !== "ie6-mask") {
                        b = doc.createElement("ie6-mask");
                        d = b.style;
                        d.visibility =
                            "visible";
                        for (d.zoom = 1; d = a.firstChild;)b.appendChild(d);
                        a.appendChild(b);
                        c.visibility = "hidden"
                    }
                } else c.borderColor = "transparent"
            }, he: function () {
            }, m: function () {
                this.parent.vc(this.M);
                delete this.rb;
                delete this.qa
            }
        };
        f.Rc = f.u.P({
            h: function () {
                var a = this.ed;
                for (var b in a)if (a.hasOwnProperty(b) && a[b].h())return true;
                return false
            }, O: function () {
                return this.g.Pb.G()
            }, ib: function () {
                if (this.h()) {
                    var a = this.jc(), b = a, c;
                    a = a.currentStyle;
                    var d = a.position, e = this.H().style, g = 0, i = 0;
                    i = this.s.o();
                    if (d === "fixed" && f.V >
                        6) {
                        g = i.x;
                        i = i.y;
                        b = d
                    } else {
                        do b = b.offsetParent; while (b && b.currentStyle.position === "static");
                        if (b) {
                            c = b.getBoundingClientRect();
                            b = b.currentStyle;
                            g = i.x - c.left - (parseFloat(b.borderLeftWidth) || 0);
                            i = i.y - c.top - (parseFloat(b.borderTopWidth) || 0)
                        } else {
                            b = doc.documentElement;
                            g = i.x + b.scrollLeft - b.clientLeft;
                            i = i.y + b.scrollTop - b.clientTop
                        }
                        b = "absolute"
                    }
                    e.position = b;
                    e.left = g;
                    e.top = i;
                    e.zIndex = d === "static" ? -1 : a.zIndex;
                    this.Cb = true
                }
            }, Mb: f.aa, Nb: function () {
                var a = this.g.Pb.j();
                this.H().style.display = a.be && a.nd ? "" : "none"
            },
            Lb: function () {
                this.h() ? this.Nb() : this.m()
            }, jc: function () {
                var a = this.e;
                return a.tagName in f.Ac ? a.offsetParent : a
            }, H: function () {
                var a = this.Ta, b;
                if (!a) {
                    b = this.jc();
                    a = this.Ta = doc.createElement("css3-container");
                    a.style.direction = "ltr";
                    this.Nb();
                    b.parentNode.insertBefore(a, b)
                }
                return a
            }, ab: f.aa, m: function () {
                var a = this.Ta, b;
                if (a && (b = a.parentNode))b.removeChild(a);
                delete this.Ta;
                delete this.qa
            }
        });
        f.Fc = f.u.P({
            M: 2, Ya: "background", O: function () {
                var a = this.g;
                return a.w.G() || a.F.G()
            }, h: function () {
                var a = this.g;
                return a.q.h() || a.F.h() || a.w.h() || a.ga.h() && a.ga.j().Bb
            }, U: function () {
                var a = this.s.o();
                if (a.i && a.f) {
                    this.od();
                    this.pd()
                }
            }, od: function () {
                var a = this.g.w.j(), b = this.s.o(), c = this.e, d = a && a.color, e, g;
                if (d && d.fa() > 0) {
                    this.lc();
                    a = this.za("bgColor", "fill", this.H(), 1);
                    e = b.i;
                    b = b.f;
                    a.stroked = false;
                    a.coordsize = e * 2 + "," + b * 2;
                    a.coordorigin = "1,1";
                    a.path = this.xa(null, 2);
                    g = a.style;
                    g.width = e;
                    g.height = b;
                    a.fill.color = d.T(c);
                    c = d.fa();
                    if (c < 1)a.fill.opacity = c
                } else this.vb("bgColor")
            }, pd: function () {
                var a = this.g.w.j(), b = this.s.o();
                a = a && a.L;
                var c, d, e, g, i;
                if (a) {
                    this.lc();
                    d = b.i;
                    e = b.f;
                    for (i = a.length; i--;) {
                        b = a[i];
                        c = this.za("bgImage" + i, "fill", this.H(), 2);
                        c.stroked = false;
                        c.fill.type = "tile";
                        c.fillcolor = "none";
                        c.coordsize = d * 2 + "," + e * 2;
                        c.coordorigin = "1,1";
                        c.path = this.xa(0, 2);
                        g = c.style;
                        g.width = d;
                        g.height = e;
                        if (b.N === "linear-gradient")this.bd(c, b); else {
                            c.fill.src = b.Ab;
                            this.Md(c, i)
                        }
                    }
                }
                for (i = a ? a.length : 0; this.vb("bgImage" + i++););
            }, Md: function (a, b) {
                var c = this;
                f.p.Rb(a.fill.src, function (d) {
                    var e = c.e, g = c.s.o(), i = g.i;
                    g = g.f;
                    if (i && g) {
                        var j = a.fill,
                            h = c.g, k = h.z.j(), n = k && k.I;
                        k = n ? n.t.a(e) : 0;
                        var l = n ? n.r.a(e) : 0, q = n ? n.b.a(e) : 0;
                        n = n ? n.l.a(e) : 0;
                        h = h.w.j().L[b];
                        e = h.$ ? h.$.coords(e, i - d.i - n - l, g - d.f - k - q) : {x: 0, y: 0};
                        h = h.bb;
                        q = l = 0;
                        var s = i + 1, m = g + 1, r = f.V === 8 ? 0 : 1;
                        n = Math.round(e.x) + n + 0.5;
                        k = Math.round(e.y) + k + 0.5;
                        j.position = n / i + "," + k / g;
                        if (h && h !== "repeat") {
                            if (h === "repeat-x" || h === "no-repeat") {
                                l = k + 1;
                                m = k + d.f + r
                            }
                            if (h === "repeat-y" || h === "no-repeat") {
                                q = n + 1;
                                s = n + d.i + r
                            }
                            a.style.clip = "rect(" + l + "px," + s + "px," + m + "px," + q + "px)"
                        }
                    }
                })
            }, bd: function (a, b) {
                var c = this.e, d = this.s.o(), e = d.i, g =
                    d.f;
                a = a.fill;
                d = b.ca;
                var i = d.length, j = Math.PI, h = f.Na, k = h.tc, n = h.dc;
                b = h.gc(c, e, g, b);
                h = b.ra;
                var l = b.xc, q = b.yc, s = b.Vd, m = b.Wd, r = b.rd, p = b.sd, t = b.kd, v = b.ld;
                b = b.rc;
                e = h % 90 ? Math.atan2(t * e / g, v) / j * 180 : h + 90;
                e += 180;
                e %= 360;
                r = k(s, m, h, r, p);
                g = n(s, m, r[0], r[1]);
                j = [];
                r = k(l, q, h, s, m);
                n = n(l, q, r[0], r[1]) / g * 100;
                k = [];
                for (h = 0; h < i; h++)k.push(d[h].db ? d[h].db.a(c, b) : h === 0 ? 0 : h === i - 1 ? b : null);
                for (h = 1; h < i; h++) {
                    if (k[h] === null) {
                        l = k[h - 1];
                        b = h;
                        do q = k[++b]; while (q === null);
                        k[h] = l + (q - l) / (b - h + 1)
                    }
                    k[h] = Math.max(k[h], k[h - 1])
                }
                for (h = 0; h < i; h++)j.push(n +
                    k[h] / g * 100 + "% " + d[h].color.T(c));
                a.angle = e;
                a.type = "gradient";
                a.method = "sigma";
                a.color = d[0].color.T(c);
                a.color2 = d[i - 1].color.T(c);
                if (a.colors)a.colors.value = j.join(","); else a.colors = j.join(",")
            }, lc: function () {
                var a = this.e.runtimeStyle;
                a.backgroundImage = "url(about:blank)";
                a.backgroundColor = "transparent"
            }, m: function () {
                f.u.m.call(this);
                var a = this.e.runtimeStyle;
                a.backgroundImage = a.backgroundColor = ""
            }
        });
        f.Gc = f.u.P({
            M: 4, Ya: "border", O: function () {
                var a = this.g;
                return a.z.G() || a.F.G()
            }, h: function () {
                var a =
                    this.g;
                return (a.F.h() || a.w.h()) && !a.q.h() && a.z.h()
            }, U: function () {
                var a = this.e, b = this.g.z.j(), c = this.s.o(), d = c.i;
                c = c.f;
                var e, g, i, j, h;
                if (b) {
                    this.mc();
                    b = this.wd(2);
                    j = 0;
                    for (h = b.length; j < h; j++) {
                        i = b[j];
                        e = this.za("borderPiece" + j, i.stroke ? "stroke" : "fill", this.H());
                        e.coordsize = d * 2 + "," + c * 2;
                        e.coordorigin = "1,1";
                        e.path = i.path;
                        g = e.style;
                        g.width = d;
                        g.height = c;
                        e.filled = !!i.fill;
                        e.stroked = !!i.stroke;
                        if (i.stroke) {
                            e = e.stroke;
                            e.weight = i.Qb + "px";
                            e.color = i.color.T(a);
                            e.dashstyle = i.stroke === "dashed" ? "2 2" : i.stroke === "dotted" ?
                                "1 1" : "solid";
                            e.linestyle = i.stroke === "double" && i.Qb > 2 ? "ThinThin" : "Single"
                        } else e.fill.color = i.fill.T(a)
                    }
                    for (; this.vb("borderPiece" + j++););
                }
            }, wd: function (a) {
                var b = this.e, c, d, e, g = this.g.z, i = [], j, h, k, n, l = Math.round, q, s, m;
                if (g.h()) {
                    c = g.j();
                    g = c.I;
                    s = c.Yd;
                    m = c.gd;
                    if (c.de && c.Zd && c.hd) {
                        if (m.t.fa() > 0) {
                            c = g.t.a(b);
                            k = c / 2;
                            i.push({path: this.xa({Jb: k, Ib: k, tb: k, Db: k}, a), stroke: s.t, color: m.t, Qb: c})
                        }
                    } else {
                        a = a || 1;
                        c = this.s.o();
                        d = c.i;
                        e = c.f;
                        c = l(g.t.a(b));
                        k = l(g.r.a(b));
                        n = l(g.b.a(b));
                        b = l(g.l.a(b));
                        var r = {t: c, r: k, b: n, l: b};
                        b = this.g.F;
                        if (b.h())q = this.kc(b.j());
                        j = Math.floor;
                        h = Math.ceil;
                        var p = function (o, u) {
                            return q ? q[o][u] : 0
                        }, t = function (o, u, x, y, z, D) {
                            var G = p("x", o), E = p("y", o), B = o.charAt(1) === "r";
                            o = o.charAt(0) === "b";
                            return G > 0 && E > 0 ? (D ? "al" : "ae") + (B ? h(d - G) : j(G)) * a + "," + (o ? h(e - E) : j(E)) * a + "," + (j(G) - u) * a + "," + (j(E) - x) * a + "," + y * 65535 + "," + 2949075 * (z ? 1 : -1) : (D ? "m" : "l") + (B ? d - u : u) * a + "," + (o ? e - x : x) * a
                        }, v = function (o, u, x, y) {
                            var z = o === "t" ? j(p("x", "tl")) * a + "," + h(u) * a : o === "r" ? h(d - u) * a + "," + j(p("y", "tr")) * a : o === "b" ? h(d - p("x", "br")) * a + "," + j(e -
                                u) * a : j(u) * a + "," + h(e - p("y", "bl")) * a;
                            o = o === "t" ? h(d - p("x", "tr")) * a + "," + h(u) * a : o === "r" ? h(d - u) * a + "," + h(e - p("y", "br")) * a : o === "b" ? j(p("x", "bl")) * a + "," + j(e - u) * a : j(u) * a + "," + j(p("y", "tl")) * a;
                            return x ? (y ? "m" + o : "") + "l" + z : (y ? "m" + z : "") + "l" + o
                        };
                        b = function (o, u, x, y, z, D) {
                            var G = o === "l" || o === "r", E = r[o], B, A;
                            if (E > 0 && s[o] !== "none" && m[o].fa() > 0) {
                                B = r[G ? o : u];
                                u = r[G ? u : o];
                                A = r[G ? o : x];
                                x = r[G ? x : o];
                                if (s[o] === "dashed" || s[o] === "dotted") {
                                    i.push({path: t(y, B, u, D + 45, 0, 1) + t(y, 0, 0, D, 1, 0), fill: m[o]});
                                    i.push({
                                        path: v(o, E / 2, 0, 1), stroke: s[o], Qb: E,
                                        color: m[o]
                                    });
                                    i.push({path: t(z, A, x, D, 0, 1) + t(z, 0, 0, D - 45, 1, 0), fill: m[o]})
                                } else i.push({
                                    path: t(y, B, u, D + 45, 0, 1) + v(o, E, 0, 0) + t(z, A, x, D, 0, 0) + (s[o] === "double" && E > 2 ? t(z, A - j(A / 3), x - j(x / 3), D - 45, 1, 0) + v(o, h(E / 3 * 2), 1, 0) + t(y, B - j(B / 3), u - j(u / 3), D, 1, 0) + "x " + t(y, j(B / 3), j(u / 3), D + 45, 0, 1) + v(o, j(E / 3), 1, 0) + t(z, j(A / 3), j(x / 3), D, 0, 0) : "") + t(z, 0, 0, D - 45, 1, 0) + v(o, 0, 1, 0) + t(y, 0, 0, D, 1, 0),
                                    fill: m[o]
                                })
                            }
                        };
                        b("t", "l", "r", "tl", "tr", 90);
                        b("r", "t", "b", "tr", "br", 0);
                        b("b", "r", "l", "br", "bl", -90);
                        b("l", "b", "t", "bl", "tl", -180)
                    }
                }
                return i
            }, m: function () {
                if (this.ec || !this.g.q.h())this.e.runtimeStyle.borderColor = "";
                f.u.m.call(this)
            }
        });
        f.Tb = f.u.P({
            M: 5, Ld: ["t", "tr", "r", "br", "b", "bl", "l", "tl", "c"], O: function () {
                return this.g.q.G()
            }, h: function () {
                return this.g.q.h()
            }, U: function () {
                this.H();
                var a = this.g.q.j(), b = this.g.z.j(), c = this.s.o(), d = this.e, e = this.uc;
                f.p.Rb(a.src, function (g) {
                    function i(v, o, u, x, y) {
                        v = e[v].style;
                        var z = Math.max;
                        v.width = z(o, 0);
                        v.height = z(u, 0);
                        v.left = x;
                        v.top = y
                    }

                    function j(v, o, u) {
                        for (var x = 0, y = v.length; x < y; x++)e[v[x]].imagedata[o] = u
                    }

                    var h = c.i, k = c.f, n = f.n("0"),
                        l = a.I || (b ? b.I : {t: n, r: n, b: n, l: n});
                    n = l.t.a(d);
                    var q = l.r.a(d), s = l.b.a(d);
                    l = l.l.a(d);
                    var m = a.slice, r = m.t.a(d), p = m.r.a(d), t = m.b.a(d);
                    m = m.l.a(d);
                    i("tl", l, n, 0, 0);
                    i("t", h - l - q, n, l, 0);
                    i("tr", q, n, h - q, 0);
                    i("r", q, k - n - s, h - q, n);
                    i("br", q, s, h - q, k - s);
                    i("b", h - l - q, s, l, k - s);
                    i("bl", l, s, 0, k - s);
                    i("l", l, k - n - s, 0, n);
                    i("c", h - l - q, k - n - s, l, n);
                    j(["tl", "t", "tr"], "cropBottom", (g.f - r) / g.f);
                    j(["tl", "l", "bl"], "cropRight", (g.i - m) / g.i);
                    j(["bl", "b", "br"], "cropTop", (g.f - t) / g.f);
                    j(["tr", "r", "br"], "cropLeft", (g.i - p) / g.i);
                    j(["l", "r", "c"], "cropTop",
                        r / g.f);
                    j(["l", "r", "c"], "cropBottom", t / g.f);
                    j(["t", "b", "c"], "cropLeft", m / g.i);
                    j(["t", "b", "c"], "cropRight", p / g.i);
                    e.c.style.display = a.fill ? "" : "none"
                }, this)
            }, H: function () {
                var a = this.parent.ya(this.M), b, c, d, e = this.Ld, g = e.length;
                if (!a) {
                    a = doc.createElement("border-image");
                    b = a.style;
                    b.position = "absolute";
                    this.uc = {};
                    for (d = 0; d < g; d++) {
                        c = this.uc[e[d]] = f.p.Za("rect");
                        c.appendChild(f.p.Za("imagedata"));
                        b = c.style;
                        b.behavior = "url(#default#VML)";
                        b.position = "absolute";
                        b.top = b.left = 0;
                        c.imagedata.src = this.g.q.j().src;
                        c.stroked = false;
                        c.filled = false;
                        a.appendChild(c)
                    }
                    this.parent.sb(this.M, a)
                }
                return a
            }, Ea: function () {
                if (this.h()) {
                    var a = this.e, b = a.runtimeStyle, c = this.g.q.j().I;
                    b.borderStyle = "solid";
                    if (c) {
                        b.borderTopWidth = c.t.a(a) + "px";
                        b.borderRightWidth = c.r.a(a) + "px";
                        b.borderBottomWidth = c.b.a(a) + "px";
                        b.borderLeftWidth = c.l.a(a) + "px"
                    }
                    this.mc()
                }
            }, m: function () {
                var a = this.e.runtimeStyle;
                a.borderStyle = "";
                if (this.ec || !this.g.z.h())a.borderColor = a.borderWidth = "";
                f.u.m.call(this)
            }
        });
        f.Hc = f.u.P({
            M: 1, Ya: "outset-box-shadow", O: function () {
                var a =
                    this.g;
                return a.ga.G() || a.F.G()
            }, h: function () {
                var a = this.g.ga;
                return a.h() && a.j().Da[0]
            }, U: function () {
                function a(B, A, L, N, H, I, F) {
                    B = b.za("shadow" + B + A, "fill", d, i - B);
                    A = B.fill;
                    B.coordsize = n * 2 + "," + l * 2;
                    B.coordorigin = "1,1";
                    B.stroked = false;
                    B.filled = true;
                    A.color = H.T(c);
                    if (I) {
                        A.type = "gradienttitle";
                        A.color2 = A.color;
                        A.opacity = 0
                    }
                    B.path = F;
                    p = B.style;
                    p.left = L;
                    p.top = N;
                    p.width = n;
                    p.height = l;
                    return B
                }

                var b = this, c = this.e, d = this.H(), e = this.g, g = e.ga.j().Da;
                e = e.F.j();
                var i = g.length, j = i, h, k = this.s.o(), n = k.i, l = k.f;
                k = f.V ===
                8 ? 1 : 0;
                for (var q = ["tl", "tr", "br", "bl"], s, m, r, p, t, v, o, u, x, y, z, D, G, E; j--;) {
                    m = g[j];
                    t = m.ee.a(c);
                    v = m.fe.a(c);
                    h = m.Ud.a(c);
                    o = m.blur.a(c);
                    m = m.color;
                    u = -h - o;
                    if (!e && o)e = f.jb.Dc;
                    u = this.xa({Jb: u, Ib: u, tb: u, Db: u}, 2, e);
                    if (o) {
                        x = (h + o) * 2 + n;
                        y = (h + o) * 2 + l;
                        z = o * 2 / x;
                        D = o * 2 / y;
                        if (o - h > n / 2 || o - h > l / 2)for (h = 4; h--;) {
                            s = q[h];
                            G = s.charAt(0) === "b";
                            E = s.charAt(1) === "r";
                            s = a(j, s, t, v, m, o, u);
                            r = s.fill;
                            r.focusposition = (E ? 1 - z : z) + "," + (G ? 1 - D : D);
                            r.focussize = "0,0";
                            s.style.clip = "rect(" + ((G ? y / 2 : 0) + k) + "px," + (E ? x : x / 2) + "px," + (G ? y : y / 2) + "px," + ((E ? x / 2 : 0) + k) +
                                "px)"
                        } else {
                            s = a(j, "", t, v, m, o, u);
                            r = s.fill;
                            r.focusposition = z + "," + D;
                            r.focussize = 1 - z * 2 + "," + (1 - D * 2)
                        }
                    } else {
                        s = a(j, "", t, v, m, o, u);
                        t = m.fa();
                        if (t < 1)s.fill.opacity = t
                    }
                }
            }
        });
        f.Pc = f.u.P({
            M: 6, Ya: "imgEl", O: function () {
                var a = this.g;
                return this.e.src !== this.Xc || a.F.G()
            }, h: function () {
                var a = this.g;
                return a.F.h() || a.w.qc()
            }, U: function () {
                this.Xc = i;
                this.Cd();
                var a = this.za("img", "fill", this.H()), b = a.fill, c = this.s.o(), d = c.i;
                c = c.f;
                var e = this.g.z.j(), g = e && e.I;
                e = this.e;
                var i = e.src, j = Math.round, h = e.currentStyle, k = f.n;
                if (!g || f.V <
                    7) {
                    g = f.n("0");
                    g = {t: g, r: g, b: g, l: g}
                }
                a.stroked = false;
                b.type = "frame";
                b.src = i;
                b.position = (d ? 0.5 / d : 0) + "," + (c ? 0.5 / c : 0);
                a.coordsize = d * 2 + "," + c * 2;
                a.coordorigin = "1,1";
                a.path = this.xa({
                    Jb: j(g.t.a(e) + k(h.paddingTop).a(e)),
                    Ib: j(g.r.a(e) + k(h.paddingRight).a(e)),
                    tb: j(g.b.a(e) + k(h.paddingBottom).a(e)),
                    Db: j(g.l.a(e) + k(h.paddingLeft).a(e))
                }, 2);
                a = a.style;
                a.width = d;
                a.height = c
            }, Cd: function () {
                this.e.runtimeStyle.filter = "alpha(opacity=0)"
            }, m: function () {
                f.u.m.call(this);
                this.e.runtimeStyle.filter = ""
            }
        });
        f.Oc = f.u.P({
            ib: f.aa,
            Mb: f.aa, Nb: f.aa, Lb: f.aa, Kd: /^,+|,+$/g, Fd: /,+/g, gb: function (a, b) {
                (this.pb || (this.pb = []))[a] = b || void 0
            }, ab: function () {
                var a = this.pb, b;
                if (a && (b = a.join(",").replace(this.Kd, "").replace(this.Fd, ",")) !== this.Wc)this.Wc = this.e.runtimeStyle.background = b
            }, m: function () {
                this.e.runtimeStyle.background = "";
                delete this.pb
            }
        });
        f.Mc = f.u.P({
            ta: 1, O: function () {
                return this.g.w.G()
            }, h: function () {
                var a = this.g;
                return a.w.h() || a.q.h()
            }, U: function () {
                var a = this.g.w.j(), b, c, d = 0, e, g;
                if (a) {
                    b = [];
                    if (c = a.L)for (; e = c[d++];)if (e.N ===
                        "linear-gradient") {
                        g = this.vd(e.Wa);
                        g = (e.Xa || f.Ka.Kc).a(this.e, g.i, g.f, g.i, g.f);
                        b.push("url(data:image/svg+xml," + escape(this.xd(e, g.i, g.f)) + ") " + this.dd(e.$) + " / " + g.i + "px " + g.f + "px " + (e.bc || "") + " " + (e.Wa || "") + " " + (e.ub || ""))
                    } else b.push(e.Hb);
                    a.color && b.push(a.color.Y);
                    this.parent.gb(this.ta, b.join(","))
                }
            }, dd: function (a) {
                return a ? a.X.map(function (b) {
                    return b.d
                }).join(" ") : "0 0"
            }, vd: function (a) {
                var b = this.e, c = this.s.o(), d = c.i;
                c = c.f;
                var e;
                if (a !== "border-box")if ((e = this.g.z.j()) && (e = e.I)) {
                    d -= e.l.a(b) +
                        e.l.a(b);
                    c -= e.t.a(b) + e.b.a(b)
                }
                if (a === "content-box") {
                    a = f.n;
                    e = b.currentStyle;
                    d -= a(e.paddingLeft).a(b) + a(e.paddingRight).a(b);
                    c -= a(e.paddingTop).a(b) + a(e.paddingBottom).a(b)
                }
                return {i: d, f: c}
            }, xd: function (a, b, c) {
                var d = this.e, e = a.ca, g = e.length, i = f.Na.gc(d, b, c, a);
                a = i.xc;
                var j = i.yc, h = i.td, k = i.ud;
                i = i.rc;
                var n, l, q, s, m;
                n = [];
                for (l = 0; l < g; l++)n.push(e[l].db ? e[l].db.a(d, i) : l === 0 ? 0 : l === g - 1 ? i : null);
                for (l = 1; l < g; l++)if (n[l] === null) {
                    s = n[l - 1];
                    q = l;
                    do m = n[++q]; while (m === null);
                    n[l] = s + (m - s) / (q - l + 1)
                }
                b = ['<svg width="' + b + '" height="' +
                c + '" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="' + a / b * 100 + '%" y1="' + j / c * 100 + '%" x2="' + h / b * 100 + '%" y2="' + k / c * 100 + '%">'];
                for (l = 0; l < g; l++)b.push('<stop offset="' + n[l] / i + '" stop-color="' + e[l].color.T(d) + '" stop-opacity="' + e[l].color.fa() + '"/>');
                b.push('</linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>');
                return b.join("")
            }, m: function () {
                this.parent.gb(this.ta)
            }
        });
        f.Nc = f.u.P({
            S: "repeat", Sc: "stretch", Qc: "round", ta: 0, O: function () {
                return this.g.q.G()
            },
            h: function () {
                return this.g.q.h()
            }, U: function () {
                var a = this, b = a.g.q.j(), c = a.g.z.j(), d = a.s.o(), e = b.repeat, g = e.f, i = e.Ob, j = a.e, h = 0;
                f.p.Rb(b.src, function (k) {
                    function n(R, S, U, V, W, T, w, C, K, O) {
                        J.push('<pattern patternUnits="userSpaceOnUse" id="pattern' + Q + '" x="' + (g === p ? R + U / 2 - K / 2 : R) + '" y="' + (i === p ? S + V / 2 - O / 2 : S) + '" width="' + K + '" height="' + O + '"><svg width="' + K + '" height="' + O + '" viewBox="' + W + " " + T + " " + w + " " + C + '" preserveAspectRatio="none"><image xlink:href="' + r + '" x="0" y="0" width="' + s + '" height="' + m + '" /></svg></pattern>');
                        P.push('<rect x="' + R + '" y="' + S + '" width="' + U + '" height="' + V + '" fill="url(#pattern' + Q + ')" />');
                        Q++
                    }

                    var l = d.i, q = d.f, s = k.i, m = k.f, r = a.Dd(b.src, s, m), p = a.S, t = a.Sc;
                    k = a.Qc;
                    var v = Math.ceil, o = f.n("0"), u = b.I || (c ? c.I : {t: o, r: o, b: o, l: o});
                    o = u.t.a(j);
                    var x = u.r.a(j), y = u.b.a(j);
                    u = u.l.a(j);
                    var z = b.slice, D = z.t.a(j), G = z.r.a(j), E = z.b.a(j);
                    z = z.l.a(j);
                    var B = l - u - x, A = q - o - y, L = s - z - G, N = m - D - E, H = g === t ? B : L * o / D, I = i === t ? A : N * x / G, F = g === t ? B : L * y / E;
                    t = i === t ? A : N * u / z;
                    var J = [], P = [], Q = 0;
                    if (g === k) {
                        H -= (H - (B % H || H)) / v(B / H);
                        F -= (F - (B % F || F)) / v(B /
                                F)
                    }
                    if (i === k) {
                        I -= (I - (A % I || I)) / v(A / I);
                        t -= (t - (A % t || t)) / v(A / t)
                    }
                    k = ['<svg width="' + l + '" height="' + q + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'];
                    n(0, 0, u, o, 0, 0, z, D, u, o);
                    n(u, 0, B, o, z, 0, L, D, H, o);
                    n(l - x, 0, x, o, s - G, 0, G, D, x, o);
                    n(0, o, u, A, 0, D, z, N, u, t);
                    if (b.fill)n(u, o, B, A, z, D, L, N, H || F || L, t || I || N);
                    n(l - x, o, x, A, s - G, D, G, N, x, I);
                    n(0, q - y, u, y, 0, m - E, z, E, u, y);
                    n(u, q - y, B, y, z, m - E, L, E, F, y);
                    n(l - x, q - y, x, y, s - G, m - E, G, E, x, y);
                    k.push("<defs>" + J.join("\n") + "</defs>" + P.join("\n") + "</svg>");
                    a.parent.gb(a.ta,
                        "url(data:image/svg+xml," + escape(k.join("")) + ") no-repeat border-box border-box");
                    h && a.parent.ab()
                }, a);
                h = 1
            }, Dd: function () {
                var a = {};
                return function (b, c, d) {
                    var e = a[b], g;
                    if (!e) {
                        e = new Image;
                        g = doc.createElement("canvas");
                        e.src = b;
                        g.width = c;
                        g.height = d;
                        g.getContext("2d").drawImage(e, 0, 0);
                        e = a[b] = g.toDataURL()
                    }
                    return e
                }
            }(), Ea: f.Tb.prototype.Ea, m: function () {
                var a = this.e.runtimeStyle;
                this.parent.gb(this.ta);
                a.borderColor = a.borderStyle = a.borderWidth = ""
            }
        });
        f.kb = function () {
            function a(m, r) {
                m.className += " " + r
            }

            function b(m) {
                var r =
                    s.slice.call(arguments, 1), p = r.length;
                setTimeout(function () {
                    for (; p--;)a(m, r[p])
                }, 0)
            }

            function c(m) {
                var r = s.slice.call(arguments, 1), p = r.length;
                setTimeout(function () {
                    for (; p--;) {
                        var t = r[p];
                        t = q[t] || (q[t] = new RegExp("\\b" + t + "\\b", "g"));
                        m.className = m.className.replace(t, "")
                    }
                }, 0)
            }

            function d(m) {
                function r() {
                    if (!R) {
                        var w, C, K = f.Ba, O = m.currentStyle, M = O.getAttribute(g) === "true";
                        T = O.getAttribute(i);
                        T = K > 7 ? T !== "false" : T === "true";
                        if (!Q) {
                            Q = 1;
                            m.runtimeStyle.zoom = 1;
                            O = m;
                            for (var ba = 1; O = O.previousSibling;)if (O.nodeType ===
                                1) {
                                ba = 0;
                                break
                            }
                            ba && a(m, n)
                        }
                        F.cb();
                        if (M && (C = F.o()) && (w = doc.documentElement || doc.body) && (C.y > w.clientHeight || C.x > w.clientWidth || C.y + C.f < 0 || C.x + C.i < 0)) {
                            if (!V) {
                                V = 1;
                                f.mb.ba(r)
                            }
                        } else {
                            R = 1;
                            V = Q = 0;
                            f.mb.Ha(r);
                            if (K === 9) {
                                J = {w: new f.Sb(m), q: new f.Ub(m), z: new f.Vb(m)};
                                P = [J.w, J.q];
                                I = new f.Oc(m, F, J);
                                w = [new f.Mc(m, F, J, I), new f.Nc(m, F, J, I)]
                            } else {
                                J = {
                                    w: new f.Sb(m),
                                    z: new f.Vb(m),
                                    q: new f.Ub(m),
                                    F: new f.jb(m),
                                    ga: new f.Ic(m),
                                    Pb: new f.Uc(m)
                                };
                                P = [J.w, J.z, J.q, J.F, J.ga, J.Pb];
                                I = new f.Rc(m, F, J);
                                w = [new f.Hc(m, F, J, I), new f.Fc(m, F, J,
                                    I), new f.Gc(m, F, J, I), new f.Tb(m, F, J, I)];
                                m.tagName === "IMG" && w.push(new f.Pc(m, F, J, I));
                                I.ed = w
                            }
                            H = [I].concat(w);
                            if (w = m.currentStyle.getAttribute(f.Q + "watch-ancestors")) {
                                w = parseInt(w, 10);
                                C = 0;
                                for (M = m.parentNode; M && (w === "NaN" || C++ < w);) {
                                    A(M, "onpropertychange", G);
                                    A(M, "onmouseenter", o);
                                    A(M, "onmouseleave", u);
                                    A(M, "onmousedown", x);
                                    if (M.tagName in f.fc) {
                                        A(M, "onfocus", z);
                                        A(M, "onblur", D)
                                    }
                                    M = M.parentNode
                                }
                            }
                            if (T) {
                                f.Oa.ba(t);
                                f.Oa.Qd()
                            }
                            t(1)
                        }
                        if (!S) {
                            S = 1;
                            K < 9 && A(m, "onmove", p);
                            A(m, "onresize", p);
                            A(m, "onpropertychange", v);
                            A(m,
                                "onmouseenter", o);
                            A(m, "onmouseleave", u);
                            A(m, "onmousedown", x);
                            if (m.tagName in f.fc) {
                                A(m, "onfocus", z);
                                A(m, "onblur", D)
                            }
                            f.Qa.ba(p);
                            f.K.ba(L)
                        }
                        F.hb()
                    }
                }

                function p() {
                    F && F.Ad() && t()
                }

                function t(w) {
                    if (!W)if (R) {
                        var C, K = H.length;
                        E();
                        for (C = 0; C < K; C++)H[C].Ea();
                        if (w || F.Nd())for (C = 0; C < K; C++)H[C].ib();
                        if (w || F.Sd())for (C = 0; C < K; C++)H[C].Mb();
                        I.ab();
                        B()
                    } else Q || r()
                }

                function v() {
                    var w, C = H.length, K;
                    w = event;
                    if (!W && !(w && w.propertyName in l))if (R) {
                        E();
                        for (w = 0; w < C; w++)H[w].Ea();
                        for (w = 0; w < C; w++) {
                            K = H[w];
                            K.Cb || K.ib();
                            K.O() && K.Lb()
                        }
                        I.ab();
                        B()
                    } else Q || r()
                }

                function o() {
                    b(m, j)
                }

                function u() {
                    c(m, j, h)
                }

                function x() {
                    b(m, h);
                    f.lb.ba(y)
                }

                function y() {
                    c(m, h);
                    f.lb.Ha(y)
                }

                function z() {
                    b(m, k)
                }

                function D() {
                    c(m, k)
                }

                function G() {
                    var w = event.propertyName;
                    if (w === "className" || w === "id")v()
                }

                function E() {
                    F.cb();
                    for (var w = P.length; w--;)P[w].cb()
                }

                function B() {
                    for (var w = P.length; w--;)P[w].hb();
                    F.hb()
                }

                function A(w, C, K) {
                    w.attachEvent(C, K);
                    U.push([w, C, K])
                }

                function L() {
                    if (S) {
                        for (var w = U.length, C; w--;) {
                            C = U[w];
                            C[0].detachEvent(C[1], C[2])
                        }
                        f.K.Ha(L);
                        S = 0;
                        U = []
                    }
                }

                function N() {
                    if (!W) {
                        var w,
                            C;
                        L();
                        W = 1;
                        if (H) {
                            w = 0;
                            for (C = H.length; w < C; w++) {
                                H[w].ec = 1;
                                H[w].m()
                            }
                        }
                        T && f.Oa.Ha(t);
                        f.Qa.Ha(t);
                        H = F = J = P = m = null
                    }
                }

                var H, I, F = new da(m), J, P, Q, R, S, U = [], V, W, T;
                this.Ed = r;
                this.update = t;
                this.m = N;
                this.qd = m
            }

            var e = {}, g = f.Q + "lazy-init", i = f.Q + "poll", j = f.La + "hover", h = f.La + "active", k = f.La + "focus", n = f.La + "first-child", l = {
                background: 1,
                bgColor: 1,
                display: 1
            }, q = {}, s = [];
            d.yd = function (m) {
                var r = f.p.Aa(m);
                return e[r] || (e[r] = new d(m))
            };
            d.m = function (m) {
                m = f.p.Aa(m);
                var r = e[m];
                if (r) {
                    r.m();
                    delete e[m]
                }
            };
            d.md = function () {
                var m = [], r;
                if (e) {
                    for (var p in e)if (e.hasOwnProperty(p)) {
                        r =
                            e[p];
                        m.push(r.qd);
                        r.m()
                    }
                    e = {}
                }
                return m
            };
            return d
        }();
        f.supportsVML = f.zc;
        f.attach = function (a) {
            f.Ba < 10 && f.zc && f.kb.yd(a).Ed()
        };
        f.detach = function (a) {
            f.kb.m(a)
        }
    }
    ;
})();