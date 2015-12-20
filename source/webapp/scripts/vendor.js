if (function (a, b) {
    'object' == typeof module && 'object' == typeof module.exports ? module.exports = a.document ? b(a, !0)  : function (a) {
        if (!a.document) throw new Error('jQuery requires a window with a document');
        return b(a)
    }
    : b(a)
}('undefined' != typeof window ? window : this, function (a, b) {
    function c(a) {
        var b = 'length' in a && a.length,
        c = _.type(a);
        return 'function' === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : 'array' === c || 0 === b || 'number' == typeof b && b > 0 && b - 1 in a
    }
    function d(a, b, c) {
        if (_.isFunction(b)) return _.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return _.grep(a, function (a) {
            return a === b !== c
        });
        if ('string' == typeof b) {
            if (ha.test(b)) return _.filter(b, a, c);
            b = _.filter(b, a)
        }
        return _.grep(a, function (a) {
            return U.call(b, a) >= 0 !== c
        })
    }
    function e(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType; );
        return a
    }
    function f(a) {
        var b = oa[a] = {
        };
        return _.each(a.match(na) || [], function (a, c) {
            b[c] = !0
        }),
        b
    }
    function g() {
        Z.removeEventListener('DOMContentLoaded', g, !1),
        a.removeEventListener('load', g, !1),
        _.ready()
    }
    function h() {
        Object.defineProperty(this.cache = {
        }, 0, {
            get: function () {
                return {
                }
            }
        }),
        this.expando = _.expando + h.uid++
    }
    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = 'data-' + b.replace(ua, '-$1').toLowerCase(), c = a.getAttribute(d), 'string' == typeof c) {
            try {
                c = 'true' === c ? !0 : 'false' === c ? !1 : 'null' === c ? null : + c + '' === c ? + c : ta.test(c) ? _.parseJSON(c)  : c
            } catch (e) {
            }
            sa.set(a, b, c)
        } else c = void 0;
        return c
    }
    function j() {
        return !0
    }
    function k() {
        return !1
    }
    function l() {
        try {
            return Z.activeElement
        } catch (a) {
        }
    }
    function m(a, b) {
        return _.nodeName(a, 'table') && _.nodeName(11 !== b.nodeType ? b : b.firstChild, 'tr') ? a.getElementsByTagName('tbody') [0] || a.appendChild(a.ownerDocument.createElement('tbody'))  : a
    }
    function n(a) {
        return a.type = (null !== a.getAttribute('type')) + '/' + a.type,
        a
    }
    function o(a) {
        var b = Ka.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute('type'),
        a
    }
    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], 'globalEval', !b || ra.get(b[c], 'globalEval'))
    }
    function q(a, b) {
        var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j;
        if (1 === b.nodeType) {
            if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
                delete g.handle,
                    g.events = {
                    };
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
            }
            sa.hasData(a) && (h = sa.access(a), i = _.extend({
            }, h), sa.set(b, i))
        }
    }
    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || '*')  : a.querySelectorAll ? a.querySelectorAll(b || '*')  : [
        ];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c)  : c
    }
    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        'input' === c && ya.test(a.type) ? b.checked = a.checked : ('input' === c || 'textarea' === c) && (b.defaultValue = a.defaultValue)
    }
    function t(b, c) {
        var d,
        e = _(c.createElement(b)).appendTo(c.body),
        f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], 'display');
        return e.detach(),
        f
    }
    function u(a) {
        var b = Z,
        c = Oa[a];
        return c || (c = t(a, b), 'none' !== c && c || (Na = (Na || _('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>')).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c),
        c
    }
    function v(a, b, c) {
        var d,
        e,
        f,
        g,
        h = a.style;
        return c = c || Ra(a),
        c && (g = c.getPropertyValue(b) || c[b]),
        c && ('' !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)),
        void 0 !== g ? g + '' : g
    }
    function w(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    function x(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--; ) if (b = Xa[e] + c, b in a) return b;
        return d
    }
    function y(a, b, c) {
        var d = Ta.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || 'px')  : b
    }
    function z(a, b, c, d, e) {
        for (var f = c === (d ? 'border' : 'content') ? 4 : 'width' === b ? 1 : 0, g = 0; 4 > f; f += 2) 'margin' === c && (g += _.css(a, c + wa[f], !0, e)),
        d ? ('content' === c && (g -= _.css(a, 'padding' + wa[f], !0, e)), 'margin' !== c && (g -= _.css(a, 'border' + wa[f] + 'Width', !0, e)))  : (g += _.css(a, 'padding' + wa[f], !0, e), 'padding' !== c && (g += _.css(a, 'border' + wa[f] + 'Width', !0, e)));
        return g
    }
    function A(a, b, c) {
        var d = !0,
        e = 'width' === b ? a.offsetWidth : a.offsetHeight,
        f = Ra(a),
        g = 'border-box' === _.css(a, 'boxSizing', !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]),
                e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? 'border' : 'content'), d, f) + 'px'
    }
    function B(a, b) {
        for (var c, d, e, f = [
        ], g = 0, h = a.length; h > g; g++) d = a[g],
        d.style && (f[g] = ra.get(d, 'olddisplay'), c = d.style.display, b ? (f[g] || 'none' !== c || (d.style.display = ''), '' === d.style.display && xa(d) && (f[g] = ra.access(d, 'olddisplay', u(d.nodeName))))  : (e = xa(d), 'none' === c && e || ra.set(d, 'olddisplay', e ? c : _.css(d, 'display'))));
        for (g = 0; h > g; g++) d = a[g],
        d.style && (b && 'none' !== d.style.display && '' !== d.style.display || (d.style.display = b ? f[g] || '' : 'none'));
        return a
    }
    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }
    function D() {
        return setTimeout(function () {
            Ya = void 0
        }),
        Ya = _.now()
    }
    function E(a, b) {
        var c,
        d = 0,
        e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d],
        e['margin' + c] = e['padding' + c] = a;
        return b && (e.opacity = e.width = a),
        e
    }
    function F(a, b, c) {
        for (var d, e = (cb[b] || []).concat(cb['*']), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
    }
    function G(a, b, c) {
        var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = this,
        m = {
        },
        n = a.style,
        o = a.nodeType && xa(a),
        p = ra.get(a, 'fxshow');
        c.queue || (h = _._queueHooks(a, 'fx'), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--,
                _.queue(a, 'fx').length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ('height' in b || 'width' in b) && (c.overflow = [
                n.overflow,
                n.overflowX,
                n.overflowY
        ], j = _.css(a, 'display'), k = 'none' === j ? ra.get(a, 'olddisplay') || u(a.nodeName)  : j, 'inline' === k && 'none' === _.css(a, 'float') && (n.display = 'inline-block')),
        c.overflow && (n.overflow = 'hidden', l.always(function () {
            n.overflow = c.overflow[0],
            n.overflowX = c.overflow[1],
            n.overflowY = c.overflow[2]
        }));
        for (d in b) if (e = b[d], $a.exec(e)) {
            if (delete b[d], f = f || 'toggle' === e, e === (o ? 'hide' : 'show')) {
                if ('show' !== e || !p || void 0 === p[d]) continue;
                o = !0
            }
            m[d] = p && p[d] || _.style(a, d)
        } else j = void 0;
        if (_.isEmptyObject(m)) 'inline' === ('none' === j ? u(a.nodeName)  : j) && (n.display = j);
        else {
            p ? 'hidden' in p && (o = p.hidden)  : p = ra.access(a, 'fxshow', {
            }),
                f && (p.hidden = !o),
                o ? _(a).show()  : l.done(function () {
                    _(a).hide()
                }),
                l.done(function () {
                    var b;
                    ra.remove(a, 'fxshow');
                    for (b in m) _.style(a, b, m[b])
                });
            for (d in m) g = F(o ? p[d] : 0, d, l),
            d in p || (p[d] = g.start, o && (g.end = g.start, g.start = 'width' === d || 'height' === d ? 1 : 0))
        }
    }
    function H(a, b) {
        var c,
        d,
        e,
        f,
        g;
        for (c in a) if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && 'expand' in g) {
            f = g.expand(f),
                delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }
    function I(a, b, c) {
        var d,
        e,
        f = 0,
        g = bb.length,
        h = _.Deferred().always(function () {
            delete i.elem
        }),
        i = function () {
            if (e) return !1;
            for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [
                    j,
                    f,
                    c
            ]),
                1 > f && i ? c : (h.resolveWith(a, [
                            j
                ]), !1)
        },
        j = h.promise({
            elem: a,
            props: _.extend({
            }, b),
            opts: _.extend(!0, {
                specialEasing: {
                }
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Ya || D(),
            duration: c.duration,
            tweens: [
            ],
            createTween: function (b, c) {
                var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function (b) {
                var c = 0,
                d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [
                        j,
                        b
                ])  : h.rejectWith(a, [
                    j,
                    b
                ]),
                this
            }
        }),
        k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++) if (d = bb[f].call(j, a, k, j.opts)) return d;
        return _.map(k, F, j),
            _.isFunction(j.opts.start) && j.opts.start.call(a, j),
            _.fx.timer(_.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })),
            j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function J(a) {
        return function (b, c) {
            'string' != typeof b && (c = b, b = '*');
            var d,
            e = 0,
            f = b.toLowerCase().match(na) || [];
            if (_.isFunction(c)) for (; d = f[e++]; ) '+' === d[0] ? (d = d.slice(1) || '*', (a[d] = a[d] || []).unshift(c))  : (a[d] = a[d] || []).push(c)
        }
    }
    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0,
            _.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return 'string' != typeof j || g || f[j] ? g ? !(i = j)  : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }),
            i
        }
        var f = {
        },
        g = a === tb;
        return e(b.dataTypes[0]) || !f['*'] && e('*')
    }
    function L(a, b) {
        var c,
        d,
        e = _.ajaxSettings.flatOptions || {
        };
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {
        })) [c] = b[c]);
        return d && _.extend(!0, a, d),
        a
    }
    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; '*' === i[0]; ) i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader('Content-Type'));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + ' ' + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f])  : void 0
    }
    function N(a, b, c, d) {
        var e,
        f,
        g,
        h,
        i,
        j = {
        },
        k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ('*' === f) f = i;
        else if ('*' !== i && i !== f) {
            if (g = j[i + ' ' + f] || j['* ' + f], !g) for (e in j) if (h = e.split(' '), h[1] === f && (g = j[i + ' ' + h[0]] || j['* ' + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0) if (g && a['throws']) b = g(b);
            else try {
                b = g(b)
            } catch (l) {
                return {
                    state: 'parsererror',
                    error: g ? l : 'No conversion from ' + i + ' to ' + f
                }
            }
        }
        return {
            state: 'success',
            data: b
        }
    }
    function O(a, b, c, d) {
        var e;
        if (_.isArray(b)) _.each(b, function (b, e) {
            c || yb.test(a) ? d(a, e)  : O(a + '[' + ('object' == typeof e ? b : '') + ']', e, c, d)
        });
        else if (c || 'object' !== _.type(b)) d(a, b);
        else for (e in b) O(a + '[' + e + ']', b[e], c, d)
    }
    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var Q = [
    ],
    R = Q.slice,
    S = Q.concat,
    T = Q.push,
    U = Q.indexOf,
    V = {
    },
    W = V.toString,
    X = V.hasOwnProperty,
    Y = {
    },
    Z = a.document,
    $ = '2.1.4',
    _ = function (a, b) {
        return new _.fn.init(a, b)
    },
    aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ba = /^-ms-/,
    ca = /-([\da-z])/gi,
    da = function (a, b) {
        return b.toUpperCase()
    };
    _.fn = _.prototype = {
        jquery: $,
        constructor: _,
        selector: '',
        length: 0,
        toArray: function () {
            return R.call(this)
        },
        get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        },
        pushStack: function (a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function (a, b) {
            return _.each(this, a, b)
        },
        map: function (a) {
            return this.pushStack(_.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(R.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq( - 1)
        },
        eq: function (a) {
            var b = this.length,
            c = + a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [
                    this[c]
            ] : [
            ])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    },
    _.extend = _.fn.extend = function () {
        var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {
        },
        h = 1,
        i = arguments.length,
        j = !1;
        for ('boolean' == typeof g && (j = g, g = arguments[h] || {
        }, h++), 'object' == typeof g || _.isFunction(g) || (g = {
        }), h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b],
        d = a[b],
        g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : [
        ])  : f = c && _.isPlainObject(c) ? c : {
        }, g[b] = _.extend(j, f, d))  : void 0 !== d && (g[b] = d));
        return g
    },
    _.extend({
        expando: 'jQuery' + ($ + Math.random()).replace(/\D/g, ''),
        isReady: !0,
        error: function (a) {
            throw new Error(a)
        },
        noop: function () {
        },
        isFunction: function (a) {
            return 'function' === _.type(a)
        },
        isArray: Array.isArray,
        isWindow: function (a) {
            return null != a && a === a.window
        },
        isNumeric: function (a) {
            return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isPlainObject: function (a) {
            return 'object' !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, 'isPrototypeOf') ? !1 : !0
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function (a) {
            return null == a ? a + '' : 'object' == typeof a || 'function' == typeof a ? V[W.call(a)] || 'object' : typeof a
        },
        globalEval: function (a) {
            var b,
            c = eval;
            a = _.trim(a),
            a && (1 === a.indexOf('use strict') ? (b = Z.createElement('script'), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b))  : c(a))
        },
        camelCase: function (a) {
            return a.replace(ba, 'ms-').replace(ca, da)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b, d) {
            var e,
            f = 0,
            g = a.length,
            h = c(a);
            if (d) {
                if (h) for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else for (f in a) if (e = b.apply(a[f], d), e === !1) break
            } else if (h) for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else for (f in a) if (e = b.call(a[f], f, a[f]), e === !1) break;
            return a
        },
        trim: function (a) {
            return null == a ? '' : (a + '').replace(aa, '')
        },
        makeArray: function (a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, 'string' == typeof a ? [
                        a
            ] : a)  : T.call(d, a)),
            d
        },
        inArray: function (a, b, c) {
            return null == b ? - 1 : U.call(b, a, c)
        },
        merge: function (a, b) {
            for (var c = + b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e,
                a
        },
        grep: function (a, b, c) {
            for (var d, e = [
            ], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f),
            d !== h && e.push(a[f]);
            return e
        },
        map: function (a, b, d) {
            var e,
            f = 0,
            g = a.length,
            h = c(a),
            i = [
            ];
            if (h) for (; g > f; f++) e = b(a[f], f, d),
            null != e && i.push(e);
            else for (f in a) e = b(a[f], f, d),
            null != e && i.push(e);
            return S.apply([], i)
        },
        guid: 1,
        proxy: function (a, b) {
            var c,
            d,
            e;
            return 'string' == typeof b && (c = a[b], b = a, a = c),
            _.isFunction(a) ? (d = R.call(arguments, 2), e = function () {
                return a.apply(b || this, d.concat(R.call(arguments)))
            }, e.guid = a.guid = a.guid || _.guid++, e)  : void 0
        },
        now: Date.now,
        support: Y
    }),
    _.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (a, b) {
        V['[object ' + b + ']'] = b.toLowerCase()
    });
    var ea = function (a) {
        function b(a, b, c, d) {
            var e,
            f,
            g,
            h,
            i,
            j,
            l,
            n,
            o,
            p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, 'string' != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
            if (!d && I) {
                if (11 !== h && (e = sa.exec(a))) if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        if (f.id === g) return c.push(f),
                            c
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f),
                        c
                } else {
                    if (e[2]) return $.apply(c, b.getElementsByTagName(a)),
                        c;
                    if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)),
                    c
                }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && 'object' !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute('id')) ? n = l.replace(ua, '\\$&')  : b.setAttribute('id', n), n = '[id=\'' + n + '\'] ', i = j.length; i--; ) j[i] = n + m(j[i]);
                        o = ta.test(a) && k(b.parentNode) || b,
                            p = j.join(',')
                    }
                    if (p) try {
                        return $.apply(c, o.querySelectorAll(p)),
                            c
                    } catch (q) {
                    } finally {
                        l || b.removeAttribute('id')
                    }
                }
            }
            return B(a.replace(ia, '$1'), b, c, d)
        }
        function c() {
            function a(c, d) {
                return b.push(c + ' ') > w.cacheLength && delete a[b.shift()],
                a[c + ' '] = d
            }
            var b = [
            ];
            return a
        }
        function d(a) {
            return a[N] = !0,
            a
        }
        function e(a) {
            var b = G.createElement('div');
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function f(a, b) {
            for (var c = a.split('|'), d = a.length; d--; ) w.attrHandle[c[d]] = b
        }
        function g(a, b) {
            var c = b && a,
            d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c) for (; c = c.nextSibling; ) if (c === b) return - 1;
            return a ? 1 : - 1
        }
        function h(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return 'input' === c && b.type === a
            }
        }
        function i(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ('input' === c || 'button' === c) && b.type === a
            }
        }
        function j(a) {
            return d(function (b) {
                return b = + b,
                d(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function k(a) {
            return a && 'undefined' != typeof a.getElementsByTagName && a
        }
        function l() {
        }
        function m(a) {
            for (var b = 0, c = a.length, d = ''; c > b; b++) d += a[b].value;
            return d
        }
        function n(a, b, c) {
            var d = b.dir,
            e = c && 'parentNode' === d,
            f = Q++;
            return b.first ? function (b, c, f) {
                for (; b = b[d]; ) if (1 === b.nodeType || e) return a(b, c, f)
            }
            : function (b, c, g) {
                var h,
                i,
                j = [
                    P,
                    f
                ];
                if (g) {
                    for (; b = b[d]; ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else for (; b = b[d]; ) if (1 === b.nodeType || e) {
                    if (i = b[N] || (b[N] = {
                    }), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0
                }
            }
        }
        function o(a) {
            return a.length > 1 ? function (b, c, d) {
                for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                return !0
            }
            : a[0]
        }
        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }
        function q(a, b, c, d, e) {
            for (var f, g = [
            ], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }
        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)),
            f && !f[N] && (f = r(f, g)),
            d(function (d, g, h, i) {
                var j,
                k,
                l,
                m = [
                ],
                n = [
                ],
                o = g.length,
                r = d || p(b || '*', h.nodeType ? [
                        h
                ] : h, [
                ]),
                s = !a || !d && b ? r : q(r, m, a, h, i),
                t = c ? f || (d ? a : o || e) ? [
                ] : g : s;
                if (c && c(s, t, h, i), e) for (j = q(t, n), e(j, [
                ], h, i), k = j.length; k--; ) (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [
                            ], k = t.length; k--; ) (l = t[k]) && j.push(s[k] = l);
                            f(null, t = [
                            ], j, i)
                        }
                        for (k = t.length; k--; ) (l = t[k]) && (j = f ? aa(d, l)  : m[k]) > - 1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length)  : t),
                f ? f(null, g, t, i)  : $.apply(g, t)
            })
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[' '], h = f ? 1 : 0, i = n(function (a) {
                return a === b
            }, g, !0), j = n(function (a) {
                return aa(b, a) > - 1
            }, g, !0), k = [
                    function (a, c, d) {
                        var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d)  : j(a, c, d));
                        return b = null,
                    e
                    }
            ]; e > h; h++) if (c = w.relative[a[h].type]) k = [
                n(o(k), c)
            ];
            else {
                if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                    return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                        value: ' ' === a[h - 2].type ? '*' : ''
                    })).replace(ia, '$1'), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                }
                k.push(c)
            }
            return o(k)
        }
        function t(a, c) {
            var e = c.length > 0,
            f = a.length > 0,
            g = function (d, g, h, i, j) {
                var k,
                l,
                m,
                n = 0,
                o = '0',
                p = d && [],
                r = [
                ],
                s = C,
                t = d || f && w.find.TAG('*', j),
                u = P += null == s ? 1 : Math.random() || 0.1,
                v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++]; ) if (m(k, g, h)) {
                            i.push(k);
                            break
                        }
                        j && (P = u)
                    }
                    e && ((k = !m && k) && n--, d && p.push(k))
                }
                if (n += o, e && o !== n) {
                    for (l = 0; m = c[l++]; ) m(p, r, g, h);
                    if (d) {
                        if (n > 0) for (; o--; ) p[o] || r[o] || (r[o] = Y.call(i));
                        r = q(r)
                    }
                    $.apply(i, r),
                    j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                }
                return j && (P = u, C = s),
                p
            };
            return e ? d(g)  : g
        }
        var u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L,
        M,
        N = 'sizzle' + 1 * new Date,
        O = a.document,
        P = 0,
        Q = 0,
        R = c(),
        S = c(),
        T = c(),
        U = function (a, b) {
            return a === b && (E = !0),
            0
        },
        V = 1 << 31,
        W = {
        }.hasOwnProperty,
        X = [
        ],
        Y = X.pop,
        Z = X.push,
        $ = X.push,
        _ = X.slice,
        aa = function (a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return - 1
        },
        ba = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
        ca = '[\\x20\\t\\r\\n\\f]',
        da = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
        ea = da.replace('w', 'w#'),
        fa = '\\[' + ca + '*(' + da + ')(?:' + ca + '*([*^$|!~]?=)' + ca + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + ea + '))|)' + ca + '*\\]',
        ga = ':(' + da + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + fa + ')*)|.*)\\)|)',
        ha = new RegExp(ca + '+', 'g'),
        ia = new RegExp('^' + ca + '+|((?:^|[^\\\\])(?:\\\\.)*)' + ca + '+$', 'g'),
        ja = new RegExp('^' + ca + '*,' + ca + '*'),
        ka = new RegExp('^' + ca + '*([>+~]|' + ca + ')' + ca + '*'),
                la = new RegExp('=' + ca + '*([^\\]\'"]*?)' + ca + '*\\]', 'g'),
                ma = new RegExp(ga),
                na = new RegExp('^' + ea + '$'),
                oa = {
                    ID: new RegExp('^#(' + da + ')'),
                                CLASS: new RegExp('^\\.(' + da + ')'),
                                    TAG: new RegExp('^(' + da.replace('w', 'w*') + ')'),
                                        ATTR: new RegExp('^' + fa),
                                        PSEUDO: new RegExp('^' + ga),
                                        CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + ca + '*(even|odd|(([+-]|)(\\d*)n|)' + ca + '*(?:([+-]|)' + ca + '*(\\d+)|))' + ca + '*\\)|)', 'i'),
                                        bool: new RegExp('^(?:' + ba + ')$', 'i'),
                                        needsContext: new RegExp('^' + ca + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + ca + '*((?:-\\d)?\\d*)' + ca + '*\\)|)(?=[^-]|$)', 'i')
                                        },
                                        pa = /^(?:input|select|textarea|button)$/i,
                                        qa = /^h\d$/i,
                                        ra = /^[^{]+\{\s*\[native \w/,
                                            sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                                            ta = /[+~]/,
                                            ua = /'|\\/g,
                                            va = new RegExp('\\\\([\\da-f]{1,6}' + ca + '?|(' + ca + ')|.)', 'ig'),
                                            wa = function (a, b, c) {
                                                var d = '0x' + b - 65536;
                                                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536)  : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                                            },
                                            xa = function () {
                                                F()
                                            };
                                            try {
                                                $.apply(X = _.call(O.childNodes), O.childNodes),
                                                X[O.childNodes.length].nodeType
                                            } catch (ya) {
                                                $ = {
                                                    apply: X.length ? function (a, b) {
                                                        Z.apply(a, _.call(b))
                                                    }
                                                           : function (a, b) {
                                                               for (var c = a.length, d = 0; a[c++] = b[d++]; );
                                                               a.length = c - 1
                                                           }
                                                }
                                            }
                                            v = b.support = {
                                            },
                                            y = b.isXML = function (a) {
                                                var b = a && (a.ownerDocument || a).documentElement;
                                                return b ? 'HTML' !== b.nodeName : !1
                                            },
                                            F = b.setDocument = function (a) {
                                                var b,
                                                c,
                                                d = a ? a.ownerDocument || a : O;
                                                return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener('unload', xa, !1)  : c.attachEvent && c.attachEvent('onunload', xa)), I = !y(d), v.attributes = e(function (a) {
                                                    return a.className = 'i',
                                                    !a.getAttribute('className')
                                                }), v.getElementsByTagName = e(function (a) {
                                                    return a.appendChild(d.createComment('')),
                                                    !a.getElementsByTagName('*').length
                                                }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function (a) {
                                                    return H.appendChild(a).id = N,
                                                    !d.getElementsByName || !d.getElementsByName(N).length
                                                }), v.getById ? (w.find.ID = function (a, b) {
                                                    if ('undefined' != typeof b.getElementById && I) {
                                                        var c = b.getElementById(a);
                                                        return c && c.parentNode ? [
                                                            c
                                                        ] : [
                                                        ]
                                                    }
                                                }, w.filter.ID = function (a) {
                                                    var b = a.replace(va, wa);
                                                    return function (a) {
                                                        return a.getAttribute('id') === b
                                                    }
                                                })  : (delete w.find.ID, w.filter.ID = function (a) {
                                                    var b = a.replace(va, wa);
                                                    return function (a) {
                                                        var c = 'undefined' != typeof a.getAttributeNode && a.getAttributeNode('id');
                                                        return c && c.value === b
                                                    }
                                                }), w.find.TAG = v.getElementsByTagName ? function (a, b) {
                                                    return 'undefined' != typeof b.getElementsByTagName ? b.getElementsByTagName(a)  : v.qsa ? b.querySelectorAll(a)  : void 0
                                                }
                                                : function (a, b) {
                                                    var c,
                                                    d = [
                                                    ],
                                                    e = 0,
                                                    f = b.getElementsByTagName(a);
                                                    if ('*' === a) {
                                                        for (; c = f[e++]; ) 1 === c.nodeType && d.push(c);
                                                        return d
                                                    }
                                                    return f
                                                }, w.find.CLASS = v.getElementsByClassName && function (a, b) {
                                                    return I ? b.getElementsByClassName(a)  : void 0
                                                }, K = [
                                                ], J = [
                                                ], (v.qsa = ra.test(d.querySelectorAll)) && (e(function (a) {
                                                    H.appendChild(a).innerHTML = '<a id=\'' + N + '\'></a><select id=\'' + N + '-\f]\' msallowcapture=\'\'><option selected=\'\'></option></select>',
                                                    a.querySelectorAll('[msallowcapture^=\'\']').length && J.push('[*^$]=' + ca + '*(?:\'\'|"")'),
                                                    a.querySelectorAll('[selected]').length || J.push('\\[' + ca + '*(?:value|' + ba + ')'),
                                                            a.querySelectorAll('[id~=' + N + '-]').length || J.push('~='),
                                                            a.querySelectorAll(':checked').length || J.push(':checked'),
                                                            a.querySelectorAll('a#' + N + '+*').length || J.push('.#.+[+~]')
                                                            }), e(function (a) {
                                                        var b = d.createElement('input');
                                                        b.setAttribute('type', 'hidden'),
                                                        a.appendChild(b).setAttribute('name', 'D'),
                                                        a.querySelectorAll('[name=d]').length && J.push('name' + ca + '*[*^$|!~]?='),
                                                        a.querySelectorAll(':enabled').length || J.push(':enabled', ':disabled'),
                                                        a.querySelectorAll('*,:x'),
                                                        J.push(',.*:')
                                                    })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function (a) {
                                                    v.disconnectedMatch = L.call(a, 'div'),
                                                    L.call(a, '[s!=\'\']:x'),
                                                    K.push('!=', ga)
                                                }), J = J.length && new RegExp(J.join('|')), K = K.length && new RegExp(K.join('|')), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function (a, b) {
                                                        var c = 9 === a.nodeType ? a.documentElement : a,
                                                        d = b && b.parentNode;
                                                        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d)  : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                                                    }
                                                : function (a, b) {
                                                    if (b) for (; b = b.parentNode; ) if (b === a) return !0;
                                                    return !1
                                                }, U = b ? function (a, b) {
                                                    if (a === b) return E = !0,
                                                    0;
                                                    var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                                                    return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b)  : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? - 1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b)  : 0 : 4 & c ? - 1 : 1)
                                                }
                                                : function (a, b) {
                                                    if (a === b) return E = !0,
                                                    0;
                                                    var c,
                                                    e = 0,
                                                    f = a.parentNode,
                                                    h = b.parentNode,
                                                    i = [
                                                        a
                                                    ],
                                                    j = [
                                                        b
                                                    ];
                                                    if (!f || !h) return a === d ? - 1 : b === d ? 1 : f ? - 1 : h ? 1 : D ? aa(D, a) - aa(D, b)  : 0;
                                                    if (f === h) return g(a, b);
                                                    for (c = a; c = c.parentNode; ) i.unshift(c);
                                                    for (c = b; c = c.parentNode; ) j.unshift(c);
                                                    for (; i[e] === j[e]; ) e++;
                                                    return e ? g(i[e], j[e])  : i[e] === O ? - 1 : j[e] === O ? 1 : 0
                                                }, d)  : G
                                            },
                                            b.matches = function (a, c) {
                                                return b(a, null, null, c)
                                            },
                                            b.matchesSelector = function (a, c) {
                                                if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, '=\'$1\']'), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                                                    var d = L.call(a, c);
                                                    if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                                                } catch (e) {
                                                }
                                                return b(c, G, null, [
                                                        a
                                                ]).length > 0
                                            },
                                            b.contains = function (a, b) {
                                                return (a.ownerDocument || a) !== G && F(a),
                                                M(a, b)
                                            },
                                            b.attr = function (a, b) {
                                                (a.ownerDocument || a) !== G && F(a);
                                                var c = w.attrHandle[b.toLowerCase()],
                                                d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I)  : void 0;
                                                return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b)  : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
                                            },
                                            b.error = function (a) {
                                                throw new Error('Syntax error, unrecognized expression: ' + a)
                                            },
                                            b.uniqueSort = function (a) {
                                                var b,
                                                c = [
                                                ],
                                                d = 0,
                                                e = 0;
                                                if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                                                    for (; b = a[e++]; ) b === a[e] && (d = c.push(e));
                                                    for (; d--; ) a.splice(c[d], 1)
                                                }
                                                return D = null,
                                                a
                                            },
                                            x = b.getText = function (a) {
                                                var b,
                                                c = '',
                                                d = 0,
                                                e = a.nodeType;
                                                if (e) {
                                                    if (1 === e || 9 === e || 11 === e) {
                                                        if ('string' == typeof a.textContent) return a.textContent;
                                                        for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                                                    } else if (3 === e || 4 === e) return a.nodeValue
                                                } else for (; b = a[d++]; ) c += x(b);
                                                return c
                                            },
                                            w = b.selectors = {
                                                cacheLength: 50,
                                                createPseudo: d,
                                                match: oa,
                                                attrHandle: {
                                                },
                                                find: {
                                                },
                                                relative: {
                                                    '>': {
                                                        dir: 'parentNode',
                                                        first: !0
                                                    },
                                                    ' ': {
                                                        dir: 'parentNode'
                                                    },
                                                    '+': {
                                                        dir: 'previousSibling',
                                                        first: !0
                                                    },
                                                    '~': {
                                                        dir: 'previousSibling'
                                                    }
                                                },
                                                preFilter: {
                                                    ATTR: function (a) {
                                                        return a[1] = a[1].replace(va, wa),
                                                        a[3] = (a[3] || a[4] || a[5] || '').replace(va, wa),
                                                        '~=' === a[2] && (a[3] = ' ' + a[3] + ' '),
                                                        a.slice(0, 4)
                                                    },
                                                    CHILD: function (a) {
                                                        return a[1] = a[1].toLowerCase(),
                                                        'nth' === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = + (a[4] ? a[5] + (a[6] || 1)  : 2 * ('even' === a[3] || 'odd' === a[3])), a[5] = + (a[7] + a[8] || 'odd' === a[3]))  : a[3] && b.error(a[0]),
                                                        a
                                                    },
                                                    PSEUDO: function (a) {
                                                        var b,
                                                        c = !a[6] && a[2];
                                                        return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || '' : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(')', c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                                                    }
                                                },
                                                filter: {
                                                    TAG: function (a) {
                                                        var b = a.replace(va, wa).toLowerCase();
                                                        return '*' === a ? function () {
                                                            return !0
                                                        }
                                                        : function (a) {
                                                            return a.nodeName && a.nodeName.toLowerCase() === b
                                                        }
                                                    },
                                                    CLASS: function (a) {
                                                        var b = R[a + ' '];
                                                        return b || (b = new RegExp('(^|' + ca + ')' + a + '(' + ca + '|$)')) && R(a, function (a) {
                                                            return b.test('string' == typeof a.className && a.className || 'undefined' != typeof a.getAttribute && a.getAttribute('class') || '')
                                                        })
                                                    },
                                                    ATTR: function (a, c, d) {
                                                        return function (e) {
                                                            var f = b.attr(e, a);
                                                            return null == f ? '!=' === c : c ? (f += '', '=' === c ? f === d : '!=' === c ? f !== d : '^=' === c ? d && 0 === f.indexOf(d)  : '*=' === c ? d && f.indexOf(d) > - 1 : '$=' === c ? d && f.slice( - d.length) === d : '~=' === c ? (' ' + f.replace(ha, ' ') + ' ').indexOf(d) > - 1 : '|=' === c ? f === d || f.slice(0, d.length + 1) === d + '-' : !1)  : !0
                                                        }
                                                    },
                                                    CHILD: function (a, b, c, d, e) {
                                                        var f = 'nth' !== a.slice(0, 3),
                                                        g = 'last' !== a.slice( - 4),
                                                        h = 'of-type' === b;
                                                        return 1 === d && 0 === e ? function (a) {
                                                            return !!a.parentNode
                                                        }
                                                        : function (b, c, i) {
                                                            var j,
                                                            k,
                                                            l,
                                                            m,
                                                            n,
                                                            o,
                                                            p = f !== g ? 'nextSibling' : 'previousSibling',
                                                            q = b.parentNode,
                                                            r = h && b.nodeName.toLowerCase(),
                                                            s = !i && !h;
                                                            if (q) {
                                                                if (f) {
                                                                    for (; p; ) {
                                                                        for (l = b; l = l[p]; ) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                                                        o = p = 'only' === a && !o && 'nextSibling'
                                                                    }
                                                                    return !0
                                                                }
                                                                if (o = [
                                                                        g ? q.firstChild : q.lastChild
                                                                ], g && s) {
                                                                    for (k = q[N] || (q[N] = {
                                                                    }), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); ) if (1 === l.nodeType && ++m && l === b) {
                                                                        k[a] = [
                                                                            P,
                                                                            n,
                                                                            m
                                                                        ];
                                                                        break
                                                                    }
                                                                } else if (s && (j = (b[N] || (b[N] = {
                                                                })) [a]) && j[0] === P) m = j[1];
                                                                else for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {
                                                                })) [a] = [
                                                                                    P,
                                                                                    m
                                                                ]), l !== b)); );
                                                                return m -= e,
                                                                m === d || m % d === 0 && m / d >= 0
                                                            }
                                                        }
                                                    },
                                                    PSEUDO: function (a, c) {
                                                        var e,
                                                        f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error('unsupported pseudo: ' + a);
                                                        return f[N] ? f(c)  : f.length > 1 ? (e = [
                                                                a,
                                                                a,
                                                                '',
                                                                c
                                                        ], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                                                            for (var d, e = f(a, c), g = e.length; g--; ) d = aa(a, e[g]),
                                                            a[d] = !(b[d] = e[g])
                                                        })  : function (a) {
                                                            return f(a, 0, e)
                                                        })  : f
                                                    }
                                                },
                                                pseudos: {
                                                    not: d(function (a) {
                                                        var b = [
                                                        ],
                                                        c = [
                                                        ],
                                                        e = A(a.replace(ia, '$1'));
                                                        return e[N] ? d(function (a, b, c, d) {
                                                            for (var f, g = e(a, null, d, [
                                                            ]), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f))
                                                        })  : function (a, d, f) {
                                                            return b[0] = a,
                                                            e(b, null, f, c),
                                                            b[0] = null,
                                                            !c.pop()
                                                        }
                                                    }),
                                                    has: d(function (a) {
                                                        return function (c) {
                                                            return b(a, c).length > 0
                                                        }
                                                    }),
                                                    contains: d(function (a) {
                                                        return a = a.replace(va, wa),
                                                        function (b) {
                                                            return (b.textContent || b.innerText || x(b)).indexOf(a) > - 1
                                                        }
                                                    }),
                                                    lang: d(function (a) {
                                                        return na.test(a || '') || b.error('unsupported lang: ' + a),
                                                        a = a.replace(va, wa).toLowerCase(),
                                                        function (b) {
                                                            var c;
                                                            do if (c = I ? b.lang : b.getAttribute('xml:lang') || b.getAttribute('lang')) return c = c.toLowerCase(),
                                                            c === a || 0 === c.indexOf(a + '-');
                                                            while ((b = b.parentNode) && 1 === b.nodeType);
                                                            return !1
                                                        }
                                                    }),
                                                    target: function (b) {
                                                        var c = a.location && a.location.hash;
                                                        return c && c.slice(1) === b.id
                                                    },
                                                    root: function (a) {
                                                        return a === H
                                                    },
                                                    focus: function (a) {
                                                        return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                                                    },
                                                    enabled: function (a) {
                                                        return a.disabled === !1
                                                    },
                                                    disabled: function (a) {
                                                        return a.disabled === !0
                                                    },
                                                    checked: function (a) {
                                                        var b = a.nodeName.toLowerCase();
                                                        return 'input' === b && !!a.checked || 'option' === b && !!a.selected
                                                    },
                                                    selected: function (a) {
                                                        return a.parentNode && a.parentNode.selectedIndex,
                                                        a.selected === !0
                                                    },
                                                    empty: function (a) {
                                                        for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                                                        return !0
                                                    },
                                                    parent: function (a) {
                                                        return !w.pseudos.empty(a)
                                                    },
                                                    header: function (a) {
                                                        return qa.test(a.nodeName)
                                                    },
                                                    input: function (a) {
                                                        return pa.test(a.nodeName)
                                                    },
                                                    button: function (a) {
                                                        var b = a.nodeName.toLowerCase();
                                                        return 'input' === b && 'button' === a.type || 'button' === b
                                                    },
                                                    text: function (a) {
                                                        var b;
                                                        return 'input' === a.nodeName.toLowerCase() && 'text' === a.type && (null == (b = a.getAttribute('type')) || 'text' === b.toLowerCase())
                                                    },
                                                    first: j(function () {
                                                        return [0]
                                                    }),
                                                    last: j(function (a, b) {
                                                        return [b - 1]
                                                    }),
                                                    eq: j(function (a, b, c) {
                                                        return [0 > c ? c + b : c]
                                                    }),
                                                    even: j(function (a, b) {
                                                        for (var c = 0; b > c; c += 2) a.push(c);
                                                        return a
                                                    }),
                                                    odd: j(function (a, b) {
                                                        for (var c = 1; b > c; c += 2) a.push(c);
                                                        return a
                                                    }),
                                                    lt: j(function (a, b, c) {
                                                        for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                                                        return a
                                                    }),
                                                    gt: j(function (a, b, c) {
                                                        for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                                                        return a
                                                    })
                                                }
                                            },
                                            w.pseudos.nth = w.pseudos.eq;
                                            for (u in {
                                                radio: !0,
                                                checkbox: !0,
                                                file: !0,
                                                password: !0,
                                                image: !0
                                            }) w.pseudos[u] = h(u);
                                            for (u in {
                                                submit: !0,
                                                reset: !0
                                            }) w.pseudos[u] = i(u);
                                            return l.prototype = w.filters = w.pseudos,
                                            w.setFilters = new l,
                                            z = b.tokenize = function (a, c) {
                                                var d,
                                                e,
                                                f,
                                                g,
                                                h,
                                                i,
                                                j,
                                                k = S[a + ' '];
                                                if (k) return c ? 0 : k.slice(0);
                                                for (h = a, i = [
                                                ], j = w.preFilter; h; ) {
                                                    (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [
                                                    ])),
                                                    d = !1,
                                                    (e = ka.exec(h)) && (d = e.shift(), f.push({
                                                        value: d,
                                                        type: e[0].replace(ia, ' ')
                                                    }), h = h.slice(d.length));
                                                    for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                                                        value: d,
                                                        type: g,
                                                        matches: e
                                                    }), h = h.slice(d.length));
                                                    if (!d) break
                                                }
                                                return c ? h.length : h ? b.error(a)  : S(a, i).slice(0)
                                            },
                                            A = b.compile = function (a, b) {
                                                var c,
                                                d = [
                                                ],
                                                e = [
                                                ],
                                                f = T[a + ' '];
                                                if (!f) {
                                                    for (b || (b = z(a)), c = b.length; c--; ) f = s(b[c]),
                                                        f[N] ? d.push(f)  : e.push(f);
                                                    f = T(a, t(e, d)),
                                                    f.selector = a
                                                }
                                                return f
                                            },
                                            B = b.select = function (a, b, c, d) {
                                                var e,
                                                f,
                                                g,
                                                h,
                                                i,
                                                j = 'function' == typeof a && a,
                                                l = !d && z(a = j.selector || a);
                                                if (c = c || [], 1 === l.length) {
                                                    if (f = l[0] = l[0].slice(0), f.length > 2 && 'ID' === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                                                        if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || []) [0], !b) return c;
                                                        j && (b = b.parentNode),
                                                            a = a.slice(f.shift().value.length)
                                                    }
                                                    for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]); ) if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                                                        if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d),
                                                            c;
                                                        break
                                                    }
                                                }
                                                return (j || A(a, l)) (d, b, !I, c, ta.test(a) && k(b.parentNode) || b),
                                                c
                                            },
                                            v.sortStable = N.split('').sort(U).join('') === N,
                                            v.detectDuplicates = !!E,
                                            F(),
                                            v.sortDetached = e(function (a) {
                                                return 1 & a.compareDocumentPosition(G.createElement('div'))
                                            }),
                                            e(function (a) {
                                                return a.innerHTML = '<a href=\'#\'></a>',
                                                '#' === a.firstChild.getAttribute('href')
                                            }) || f('type|href|height|width', function (a, b, c) {
                                                return c ? void 0 : a.getAttribute(b, 'type' === b.toLowerCase() ? 1 : 2)
                                            }),
                                            v.attributes && e(function (a) {
                                                return a.innerHTML = '<input/>',
                                                a.firstChild.setAttribute('value', ''),
                                                '' === a.firstChild.getAttribute('value')
                                            }) || f('value', function (a, b, c) {
                                                return c || 'input' !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
                                            }),
                                            e(function (a) {
                                                return null == a.getAttribute('disabled')
                                            }) || f(ba, function (a, b, c) {
                                                var d;
                                                return c ? void 0 : a[b] === !0 ? b.toLowerCase()  : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
                                            }),
                                            b
                                        }(a);
        _.find = ea,
        _.expr = ea.selectors,
        _.expr[':'] = _.expr.pseudos,
        _.unique = ea.uniqueSort,
        _.text = ea.getText,
        _.isXMLDoc = ea.isXML,
        _.contains = ea.contains;
        var fa = _.expr.match.needsContext,
        ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ha = /^.[^:#\[\.,]*$/;
        _.filter = function (a, b, c) {
            var d = b[0];
            return c && (a = ':not(' + a + ')'),
                    1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [
                    d
                    ] : [
                    ] : _.find.matches(a, _.grep(b, function (a) {
                        return 1 === a.nodeType
                    }))
                    },
                    _.fn.extend({
                        find: function (a) {
                            var b,
                            c = this.length,
                            d = [
                            ],
                            e = this;
                            if ('string' != typeof a) return this.pushStack(_(a).filter(function () {
                                for (b = 0; c > b; b++) if (_.contains(e[b], this)) return !0
                            }));
                            for (b = 0; c > b; b++) _.find(a, e[b], d);
                            return d = this.pushStack(c > 1 ? _.unique(d)  : d),
                                d.selector = this.selector ? this.selector + ' ' + a : a,
                                d
                        },
                        filter: function (a) {
                            return this.pushStack(d(this, a || [], !1))
                        },
                        not: function (a) {
                            return this.pushStack(d(this, a || [], !0))
                        },
                        is: function (a) {
                            return !!d(this, 'string' == typeof a && fa.test(a) ? _(a)  : a || [], !1).length
                        }
                    });
            var ia,
            ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ka = _.fn.init = function (a, b) {
                var c,
                d;
                if (!a) return this;
                if ('string' == typeof a) {
                    if (c = '<' === a[0] && '>' === a[a.length - 1] && a.length >= 3 ? [
                            null,
                            a,
                            null
                    ] : ja.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a)  : this.constructor(b).find(a);
                    if (c[1]) {
                        if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b)) for (c in b) _.isFunction(this[c]) ? this[c](b[c])  : this.attr(c, b[c]);
                        return this
                    }
                    return d = Z.getElementById(c[2]),
                    d && d.parentNode && (this.length = 1, this[0] = d),
                    this.context = Z,
                    this.selector = a,
                    this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this)  : _.isFunction(a) ? 'undefined' != typeof ia.ready ? ia.ready(a)  : a(_)  : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
            };
            ka.prototype = _.fn,
            ia = _(Z);
            var la = /^(?:parents|prev(?:Until|All))/,
            ma = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            _.extend({
                dir: function (a, b, c) {
                    for (var d = [
                    ], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; ) if (1 === a.nodeType) {
                        if (e && _(a).is(c)) break;
                        d.push(a)
                    }
                    return d
                },
                sibling: function (a, b) {
                    for (var c = [
                    ]; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                    return c
                }
            }),
            _.fn.extend({
                has: function (a) {
                    var b = _(a, this),
                    c = b.length;
                    return this.filter(function () {
                        for (var a = 0; c > a; a++) if (_.contains(this, b[a])) return !0
                    })
                },
                closest: function (a, b) {
                    for (var c, d = 0, e = this.length, f = [
                    ], g = fa.test(a) || 'string' != typeof a ? _(a, b || this.context)  : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > - 1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
                    return this.pushStack(f.length > 1 ? _.unique(f)  : f)
                },
                index: function (a) {
                    return a ? 'string' == typeof a ? U.call(_(a), this[0])  : U.call(this, a.jquery ? a[0] : a)  : this[0] && this[0].parentNode ? this.first().prevAll().length : - 1
                },
                add: function (a, b) {
                    return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
                },
                addBack: function (a) {
                    return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
                }
            }),
            _.each({
                parent: function (a) {
                    var b = a.parentNode;
                    return b && 11 !== b.nodeType ? b : null
                },
                parents: function (a) {
                    return _.dir(a, 'parentNode')
                },
                parentsUntil: function (a, b, c) {
                    return _.dir(a, 'parentNode', c)
                },
                next: function (a) {
                    return e(a, 'nextSibling')
                },
                prev: function (a) {
                    return e(a, 'previousSibling')
                },
                nextAll: function (a) {
                    return _.dir(a, 'nextSibling')
                },
                prevAll: function (a) {
                    return _.dir(a, 'previousSibling')
                },
                nextUntil: function (a, b, c) {
                    return _.dir(a, 'nextSibling', c)
                },
                prevUntil: function (a, b, c) {
                    return _.dir(a, 'previousSibling', c)
                },
                siblings: function (a) {
                    return _.sibling((a.parentNode || {
                    }).firstChild, a)
                },
                children: function (a) {
                    return _.sibling(a.firstChild)
                },
                contents: function (a) {
                    return a.contentDocument || _.merge([], a.childNodes)
                }
            }, function (a, b) {
                _.fn[a] = function (c, d) {
                    var e = _.map(this, b, c);
                    return 'Until' !== a.slice( - 5) && (d = c),
                    d && 'string' == typeof d && (e = _.filter(d, e)),
                    this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()),
                    this.pushStack(e)
                }
            });
            var na = /\S+/g,
            oa = {
            };
            _.Callbacks = function (a) {
                a = 'string' == typeof a ? oa[a] || f(a)  : _.extend({
                }, a);
                var b,
                c,
                d,
                e,
                g,
                h,
                i = [
                ],
                j = !a.once && [],
                k = function (f) {
                    for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++) if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                    d = !1,
                    i && (j ? j.length && k(j.shift())  : b ? i = [
                    ] : l.disable())
                },
                l = {
                    add: function () {
                        if (i) {
                            var c = i.length;
                            !function f(b) {
                                _.each(b, function (b, c) {
                                    var d = _.type(c);
                                    'function' === d ? a.unique && l.has(c) || i.push(c)  : c && c.length && 'string' !== d && f(c)
                                })
                            }(arguments),
                            d ? g = i.length : b && (e = c, k(b))
                        }
                        return this
                    },
                    remove: function () {
                        return i && _.each(arguments, function (a, b) {
                            for (var c; (c = _.inArray(b, i, c)) > - 1; ) i.splice(c, 1),
                            d && (g >= c && g--, h >= c && h--)
                        }),
                        this
                    },
                    has: function (a) {
                        return a ? _.inArray(a, i) > - 1 : !(!i || !i.length)
                    },
                    empty: function () {
                        return i = [
                        ],
                        g = 0,
                        this
                    },
                    disable: function () {
                        return i = j = b = void 0,
                        this
                    },
                    disabled: function () {
                        return !i
                    },
                    lock: function () {
                        return j = void 0,
                        b || l.disable(),
                        this
                    },
                    locked: function () {
                        return !j
                    },
                    fireWith: function (a, b) {
                        return !i || c && !j || (b = b || [], b = [
                                a,
                                b.slice ? b.slice()  : b
                        ], d ? j.push(b)  : k(b)),
                        this
                    },
                    fire: function () {
                        return l.fireWith(this, arguments),
                        this
                    },
                    fired: function () {
                        return !!c
                    }
                };
                return l
            },
            _.extend({
                Deferred: function (a) {
                    var b = [
                        ['resolve',
                        'done',
                        _.Callbacks('once memory'),
                        'resolved'],
                        [
                            'reject',
                            'fail',
                            _.Callbacks('once memory'),
                            'rejected'
                        ],
                        [
                            'notify',
                            'progress',
                            _.Callbacks('memory')
                        ]
                    ],
                    c = 'pending',
                    d = {
                        state: function () {
                            return c
                        },
                        always: function () {
                            return e.done(arguments).fail(arguments),
                            this
                        },
                        then: function () {
                            var a = arguments;
                            return _.Deferred(function (c) {
                                _.each(b, function (b, f) {
                                    var g = _.isFunction(a[b]) && a[b];
                                    e[f[1]](function () {
                                        var a = g && g.apply(this, arguments);
                                        a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify)  : c[f[0] + 'With'](this === d ? c.promise()  : this, g ? [
                                                a
                                        ] : arguments)
                                    })
                                }),
                                a = null
                            }).promise()
                        },
                        promise: function (a) {
                            return null != a ? _.extend(a, d)  : d
                        }
                    },
                    e = {
                    };
                    return d.pipe = d.then,
                    _.each(b, function (a, f) {
                        var g = f[2],
                        h = f[3];
                        d[f[1]] = g.add,
                        h && g.add(function () {
                            c = h
                        }, b[1 ^ a][2].disable, b[2][2].lock),
                        e[f[0]] = function () {
                            return e[f[0] + 'With'](this === e ? d : this, arguments),
                            this
                        },
                        e[f[0] + 'With'] = g.fireWith
                    }),
                    d.promise(e),
                    a && a.call(e, e),
                    e
                },
                when: function (a) {
                    var b,
                    c,
                    d,
                    e = 0,
                    f = R.call(arguments),
                    g = f.length,
                    h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
                    i = 1 === h ? a : _.Deferred(),
                    j = function (a, c, d) {
                        return function (e) {
                            c[a] = this,
                            d[a] = arguments.length > 1 ? R.call(arguments)  : e,
                            d === b ? i.notifyWith(c, d)  : --h || i.resolveWith(c, d)
                        }
                    };
                    if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b))  : --h;
                    return h || i.resolveWith(d, f),
                        i.promise()
                }
            });
            var pa;
            _.fn.ready = function (a) {
                return _.ready.promise().done(a),
                this
            },
            _.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function (a) {
                    a ? _.readyWait++ : _.ready(!0)
                },
                ready: function (a) {
                    (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [
                                    _
                    ]), _.fn.triggerHandler && (_(Z).triggerHandler('ready'), _(Z).off('ready'))))
                }
            }),
            _.ready.promise = function (b) {
                return pa || (pa = _.Deferred(), 'complete' === Z.readyState ? setTimeout(_.ready)  : (Z.addEventListener('DOMContentLoaded', g, !1), a.addEventListener('load', g, !1))),
                pa.promise(b)
            },
            _.ready.promise();
            var qa = _.access = function (a, b, c, d, e, f, g) {
                var h = 0,
                i = a.length,
                j = null == c;
                if ('object' === _.type(c)) {
                    e = !0;
                    for (h in c) _.access(a, b, h, c[h], !0, f, g)
                } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null)  : (j = b, b = function (a, b, c) {
                    return j.call(_(a), c)
                })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a)  : i ? b(a[0], c)  : f
            };
            _.acceptData = function (a) {
                return 1 === a.nodeType || 9 === a.nodeType || ! + a.nodeType
            },
            h.uid = 1,
            h.accepts = _.acceptData,
            h.prototype = {
                key: function (a) {
                    if (!h.accepts(a)) return 0;
                    var b = {
                    },
                        c = a[this.expando];
                    if (!c) {
                        c = h.uid++;
                        try {
                            b[this.expando] = {
                                value: c
                            },
                            Object.defineProperties(a, b)
                        } catch (d) {
                            b[this.expando] = c,
                            _.extend(a, b)
                        }
                    }
                    return this.cache[c] || (this.cache[c] = {
                    }),
                    c
                },
                set: function (a, b, c) {
                    var d,
                    e = this.key(a),
                    f = this.cache[e];
                    if ('string' == typeof b) f[b] = c;
                    else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
                    else for (d in b) f[d] = b[d];
                    return f
                },
                get: function (a, b) {
                    var c = this.cache[this.key(a)];
                    return void 0 === b ? c : c[b]
                },
                access: function (a, b, c) {
                    var d;
                    return void 0 === b || b && 'string' == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b)))  : (this.set(a, b, c), void 0 !== c ? c : b)
                },
                remove: function (a, b) {
                    var c,
                    d,
                    e,
                    f = this.key(a),
                    g = this.cache[f];
                    if (void 0 === b) this.cache[f] = {
                    };
                    else {
                        _.isArray(b) ? d = b.concat(b.map(_.camelCase))  : (e = _.camelCase(b), b in g ? d = [
                                b,
                                e
                        ] : (d = e, d = d in g ? [
                            d
                        ] : d.match(na) || [])),
                            c = d.length;
                        for (; c--; ) delete g[d[c]]
                    }
                },
                hasData: function (a) {
                    return !_.isEmptyObject(this.cache[a[this.expando]] || {
                    })
                },
                discard: function (a) {
                    a[this.expando] && delete this.cache[a[this.expando]]
                }
            };
            var ra = new h,
            sa = new h,
            ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ua = /([A-Z])/g;
            _.extend({
                hasData: function (a) {
                    return sa.hasData(a) || ra.hasData(a)
                },
                data: function (a, b, c) {
                    return sa.access(a, b, c)
                },
                removeData: function (a, b) {
                    sa.remove(a, b)
                },
                _data: function (a, b, c) {
                    return ra.access(a, b, c)
                },
                _removeData: function (a, b) {
                    ra.remove(a, b)
                }
            }),
            _.fn.extend({
                data: function (a, b) {
                    var c,
                    d,
                    e,
                    f = this[0],
                    g = f && f.attributes;
                    if (void 0 === a) {
                        if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, 'hasDataAttrs'))) {
                            for (c = g.length; c--; ) g[c] && (d = g[c].name, 0 === d.indexOf('data-') && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                            ra.set(f, 'hasDataAttrs', !0)
                        }
                        return e
                    }
                    return 'object' == typeof a ? this.each(function () {
                        sa.set(this, a)
                    })  : qa(this, function (b) {
                        var c,
                        d = _.camelCase(a);
                        if (f && void 0 === b) {
                            if (c = sa.get(f, a), void 0 !== c) return c;
                            if (c = sa.get(f, d), void 0 !== c) return c;
                            if (c = i(f, d, void 0), void 0 !== c) return c
                        } else this.each(function () {
                            var c = sa.get(this, d);
                            sa.set(this, d, b),
                            - 1 !== a.indexOf('-') && void 0 !== c && sa.set(this, a, b)
                        })
                    }, null, b, arguments.length > 1, null, !0)
                },
                removeData: function (a) {
                    return this.each(function () {
                        sa.remove(this, a)
                    })
                }
            }),
            _.extend({
                queue: function (a, b, c) {
                    var d;
                    return a ? (b = (b || 'fx') + 'queue', d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c))  : d.push(c)), d || [])  : void 0
                },
                dequeue: function (a, b) {
                    b = b || 'fx';
                    var c = _.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = _._queueHooks(a, b),
                    g = function () {
                        _.dequeue(a, b)
                    };
                    'inprogress' === e && (e = c.shift(), d--),
                    e && ('fx' === b && c.unshift('inprogress'), delete f.stop, e.call(a, g, f)),
                    !d && f && f.empty.fire()
                },
                _queueHooks: function (a, b) {
                    var c = b + 'queueHooks';
                    return ra.get(a, c) || ra.access(a, c, {
                        empty: _.Callbacks('once memory').add(function () {
                            ra.remove(a, [
                                    b + 'queue',
                                    c
                            ])
                        })
                    })
                }
            }),
            _.fn.extend({
                queue: function (a, b) {
                    var c = 2;
                    return 'string' != typeof a && (b = a, a = 'fx', c--),
                    arguments.length < c ? _.queue(this[0], a)  : void 0 === b ? this : this.each(function () {
                        var c = _.queue(this, a, b);
                        _._queueHooks(this, a),
                        'fx' === a && 'inprogress' !== c[0] && _.dequeue(this, a)
                    })
                },
                dequeue: function (a) {
                    return this.each(function () {
                        _.dequeue(this, a)
                    })
                },
                clearQueue: function (a) {
                    return this.queue(a || 'fx', [
                    ])
                },
                promise: function (a, b) {
                    var c,
                    d = 1,
                    e = _.Deferred(),
                    f = this,
                    g = this.length,
                    h = function () {
                        --d || e.resolveWith(f, [
                                f
                        ])
                    };
                    for ('string' != typeof a && (b = a, a = void 0), a = a || 'fx'; g--; ) c = ra.get(f[g], a + 'queueHooks'),
                    c && c.empty && (d++, c.empty.add(h));
                    return h(),
                    e.promise(b)
                }
            });
            var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            wa = [
                'Top',
                'Right',
                'Bottom',
                'Left'
            ],
            xa = function (a, b) {
                return a = b || a,
                'none' === _.css(a, 'display') || !_.contains(a.ownerDocument, a)
            },
            ya = /^(?:checkbox|radio)$/i;
            !function () {
                var a = Z.createDocumentFragment(),
                b = a.appendChild(Z.createElement('div')),
                c = Z.createElement('input');
                c.setAttribute('type', 'radio'),
                c.setAttribute('checked', 'checked'),
                c.setAttribute('name', 't'),
                b.appendChild(c),
                Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
                b.innerHTML = '<textarea>x</textarea>',
                Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
            }();
            var za = 'undefined';
            Y.focusinBubbles = 'onfocusin' in a;
            var Aa = /^key/,
            Ba = /^(?:mouse|pointer|contextmenu)|click/,
            Ca = /^(?:focusinfocus|focusoutblur)$/,
            Da = /^([^.]*)(?:\.(.+)|)$/;
            _.event = {
                global: {
                },
                add: function (a, b, c, d, e) {
                    var f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p,
                    q = ra.get(a);
                    if (q) for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {
                    }), (g = q.handle) || (g = q.handle = function (b) {
                        return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments)  : void 0
                    }), b = (b || '').match(na) || [''], j = b.length; j--; ) h = Da.exec(b[j]) || [],
                    n = p = h[1],
                    o = (h[2] || '').split('.').sort(),
                    n && (l = _.event.special[n] || {
                    }, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {
                    }, k = _.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && _.expr.match.needsContext.test(e),
                        namespace: o.join('.')
                    }, f), (m = i[n]) || (m = i[n] = [
                    ], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k)  : m.push(k), _.event.global[n] = !0)
                },
                remove: function (a, b, c, d, e) {
                    var f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p,
                    q = ra.hasData(a) && ra.get(a);
                    if (q && (i = q.events)) {
                        for (b = (b || '').match(na) || [''], j = b.length; j--; ) if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || '').split('.').sort(), n) {
                            for (l = _.event.special[n] || {
                            }, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp('(^|\\.)' + o.join('\\.(?:.*\\.|)') + '(\\.|$)'), g = f = m.length; f--; ) k = m[f],
                                !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ('**' !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                        } else for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                        _.isEmptyObject(i) && (delete q.handle, ra.remove(a, 'events'))
                    }
                },
                trigger: function (b, c, d, e) {
                    var f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m = [
                        d || Z
                    ],
                    n = X.call(b, 'type') ? b.type : b,
                    o = X.call(b, 'namespace') ? b.namespace.split('.')  : [
                    ];
                    if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf('.') >= 0 && (o = n.split('.'), n = o.shift(), o.sort()), j = n.indexOf(':') < 0 && 'on' + n, b = b[_.expando] ? b : new _.Event(n, 'object' == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join('.'), b.namespace_re = b.namespace ? new RegExp('(^|\\.)' + o.join('\\.(?:.*\\.|)') + '(\\.|$)')  : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [
                                b
                    ] : _.makeArray(c, [
                        b
                    ]), l = _.event.special[n] || {
                    }, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                        if (!e && !l.noBubble && !_.isWindow(d)) {
                            for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g),
                                h = g;
                            h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                        }
                        for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); ) b.type = f > 1 ? i : l.bindType || n,
                        k = (ra.get(g, 'events') || {
                        }) [b.type] && ra.get(g, 'handle'),
                            k && k.apply(g, c),
                            k = j && g[j],
                            k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                        return b.type = n,
                        e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)),
                        b.result
                    }
                },
                dispatch: function (a) {
                    a = _.event.fix(a);
                    var b,
                    c,
                    d,
                    e,
                    f,
                    g = [
                    ],
                    h = R.call(arguments),
                    i = (ra.get(this, 'events') || {
                    }) [a.type] || [],
                    j = _.event.special[a.type] || {
                    };
                    if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                        for (g = _.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped(); ) for (a.currentTarget = e.elem, c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped(); ) (!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {
                        }).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                        return j.postDispatch && j.postDispatch.call(this, a),
                        a.result
                    }
                },
                handlers: function (a, b) {
                    var c,
                    d,
                    e,
                    f,
                    g = [
                    ],
                    h = b.delegateCount,
                    i = a.target;
                    if (h && i.nodeType && (!a.button || 'click' !== a.type)) for (; i !== this; i = i.parentNode || this) if (i.disabled !== !0 || 'click' !== a.type) {
                        for (d = [
                        ], c = 0; h > c; c++) f = b[c],
                            e = f.selector + ' ',
                            void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [
                                        i
                            ]).length),
                            d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
                    return h < b.length && g.push({
                        elem: this,
                        handlers: b.slice(h)
                    }),
                    g
                },
                props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
                fixHooks: {
                },
                keyHooks: {
                    props: 'char charCode key keyCode'.split(' '),
                    filter: function (a, b) {
                        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                        a
                    }
                },
                mouseHooks: {
                    props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
                    filter: function (a, b) {
                        var c,
                        d,
                        e,
                        f = b.button;
                        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)),
                        a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                        a
                    }
                },
                fix: function (a) {
                    if (a[_.expando]) return a;
                    var b,
                        c,
                        d,
                        e = a.type,
                        f = a,
                        g = this.fixHooks[e];
                    for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {
                    }), d = g.props ? this.props.concat(g.props)  : this.props, a = new _.Event(f), b = d.length; b--; ) c = d[b],
                    a[c] = f[c];
                    return a.target || (a.target = Z),
                    3 === a.target.nodeType && (a.target = a.target.parentNode),
                    g.filter ? g.filter(a, f)  : a
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function () {
                            return this !== l() && this.focus ? (this.focus(), !1)  : void 0
                        },
                        delegateType: 'focusin'
                    },
                    blur: {
                        trigger: function () {
                            return this === l() && this.blur ? (this.blur(), !1)  : void 0
                        },
                        delegateType: 'focusout'
                    },
                    click: {
                        trigger: function () {
                            return 'checkbox' === this.type && this.click && _.nodeName(this, 'input') ? (this.click(), !1)  : void 0
                        },
                        _default: function (a) {
                            return _.nodeName(a.target, 'a')
                        }
                    },
                    beforeunload: {
                        postDispatch: function (a) {
                            void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                        }
                    }
                },
                simulate: function (a, b, c, d) {
                    var e = _.extend(new _.Event, c, {
                        type: a,
                        isSimulated: !0,
                        originalEvent: {
                        }
                    });
                    d ? _.event.trigger(e, null, b)  : _.event.dispatch.call(b, e),
                    e.isDefaultPrevented() && c.preventDefault()
                }
            },
            _.removeEvent = function (a, b, c) {
                a.removeEventListener && a.removeEventListener(b, c, !1)
            },
            _.Event = function (a, b) {
                return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k)  : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void (this[_.expando] = !0))  : new _.Event(a, b)
            },
            _.Event.prototype = {
                isDefaultPrevented: k,
                isPropagationStopped: k,
                isImmediatePropagationStopped: k,
                preventDefault: function () {
                    var a = this.originalEvent;
                    this.isDefaultPrevented = j,
                    a && a.preventDefault && a.preventDefault()
                },
                stopPropagation: function () {
                    var a = this.originalEvent;
                    this.isPropagationStopped = j,
                    a && a.stopPropagation && a.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var a = this.originalEvent;
                    this.isImmediatePropagationStopped = j,
                    a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
                    this.stopPropagation()
                }
            },
            _.each({
                mouseenter: 'mouseover',
                mouseleave: 'mouseout',
                pointerenter: 'pointerover',
                pointerleave: 'pointerout'
            }, function (a, b) {
                _.event.special[a] = {
                    delegateType: b,
                    bindType: b,
                    handle: function (a) {
                        var c,
                        d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                        return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b),
                        c
                    }
                }
            }),
            Y.focusinBubbles || _.each({
                focus: 'focusin',
                blur: 'focusout'
            }, function (a, b) {
                var c = function (a) {
                    _.event.simulate(b, a.target, _.event.fix(a), !0)
                };
                _.event.special[b] = {
                    setup: function () {
                        var d = this.ownerDocument || this,
                        e = ra.access(d, b);
                        e || d.addEventListener(a, c, !0),
                        ra.access(d, b, (e || 0) + 1)
                    },
                    teardown: function () {
                        var d = this.ownerDocument || this,
                        e = ra.access(d, b) - 1;
                        e ? ra.access(d, b, e)  : (d.removeEventListener(a, c, !0), ra.remove(d, b))
                    }
                }
            }),
            _.fn.extend({
                on: function (a, b, c, d, e) {
                    var f,
                    g;
                    if ('object' == typeof a) {
                        'string' != typeof b && (c = c || b, b = void 0);
                        for (g in a) this.on(g, b, c, a[g], e);
                        return this
                    }
                    if (null == c && null == d ? (d = b, c = b = void 0)  : null == d && ('string' == typeof b ? (d = c, c = void 0)  : (d = c, c = b, b = void 0)), d === !1) d = k;
                    else if (!d) return this;
                    return 1 === e && (f = d, d = function (a) {
                        return _().off(a),
                        f.apply(this, arguments)
                    }, d.guid = f.guid || (f.guid = _.guid++)),
                        this.each(function () {
                            _.event.add(this, a, d, c, b)
                        })
                },
                one: function (a, b, c, d) {
                    return this.on(a, b, c, d, 1)
                },
                off: function (a, b, c) {
                    var d,
                    e;
                    if (a && a.preventDefault && a.handleObj) return d = a.handleObj,
                    _(a.delegateTarget).off(d.namespace ? d.origType + '.' + d.namespace : d.origType, d.selector, d.handler),
                        this;
                    if ('object' == typeof a) {
                        for (e in a) this.off(e, b, a[e]);
                        return this
                    }
                    return (b === !1 || 'function' == typeof b) && (c = b, b = void 0),
                    c === !1 && (c = k),
                    this.each(function () {
                        _.event.remove(this, a, c, b)
                    })
                },
                trigger: function (a, b) {
                    return this.each(function () {
                        _.event.trigger(a, b, this)
                    })
                },
                triggerHandler: function (a, b) {
                    var c = this[0];
                    return c ? _.event.trigger(a, b, c, !0)  : void 0
                }
            });
            var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Fa = /<([\w:]+)/,
            Ga = /<|&#?\w+;/,
            Ha = /<(?:script|style|link)/i,
            Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ja = /^$|\/(?:java|ecma)script/i,
            Ka = /^true\/(.*)/,
            La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ma = {
                option: [
                    1,
                    '<select multiple=\'multiple\'>',
                    '</select>'
                ],
                thead: [
                    1,
                    '<table>',
                    '</table>'
                ],
                col: [
                    2,
                    '<table><colgroup>',
                    '</colgroup></table>'
                ],
                tr: [
                    2,
                    '<table><tbody>',
                    '</tbody></table>'
                ],
                td: [
                    3,
                    '<table><tbody><tr>',
                    '</tr></tbody></table>'
                ],
                _default: [
                    0,
                    '',
                    ''
                ]
            };
            Ma.optgroup = Ma.option,
            Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead,
            Ma.th = Ma.td,
            _.extend({
                clone: function (a, b, c) {
                    var d,
                    e,
                    f,
                    g,
                    h = a.cloneNode(!0),
                    i = _.contains(a.ownerDocument, a);
                    if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a))) for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
                    if (b) if (c) for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
                    else q(a, h);
                    return g = r(h, 'script'),
                        g.length > 0 && p(g, !i && r(a, 'script')),
                        h
                },
                buildFragment: function (a, b, c, d) {
                    for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [
                    ], m = 0, n = a.length; n > m; m++) if (e = a[m], e || 0 === e) if ('object' === _.type(e)) _.merge(l, e.nodeType ? [
                        e
                    ] : e);
                    else if (Ga.test(e)) {
                        for (f = f || k.appendChild(b.createElement('div')), g = (Fa.exec(e) || ['',
                                    '']) [1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, '<$1></$2>') + h[2], j = h[0]; j--; ) f = f.lastChild;
                        _.merge(l, f.childNodes),
                        f = k.firstChild,
                        f.textContent = ''
                    } else l.push(b.createTextNode(e));
                    for (k.textContent = '', m = 0; e = l[m++]; ) if ((!d || - 1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), 'script'), i && p(f), c)) for (j = 0; e = f[j++]; ) Ja.test(e.type || '') && c.push(e);
                    return k
                },
                cleanData: function (a) {
                    for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                        if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
                            if (b.events) for (d in b.events) f[d] ? _.event.remove(c, d)  : _.removeEvent(c, d, b.handle);
                            ra.cache[e] && delete ra.cache[e]
                        }
                        delete sa.cache[c[sa.expando]]
                    }
                }
            }),
            _.fn.extend({
                text: function (a) {
                    return qa(this, function (a) {
                        return void 0 === a ? _.text(this)  : this.empty().each(function () {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                        })
                    }, null, a, arguments.length)
                },
                append: function () {
                    return this.domManip(arguments, function (a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = m(this, a);
                            b.appendChild(a)
                        }
                    })
                },
                prepend: function () {
                    return this.domManip(arguments, function (a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = m(this, a);
                            b.insertBefore(a, b.firstChild)
                        }
                    })
                },
                before: function () {
                    return this.domManip(arguments, function (a) {
                        this.parentNode && this.parentNode.insertBefore(a, this)
                    })
                },
                after: function () {
                    return this.domManip(arguments, function (a) {
                        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                    })
                },
                remove: function (a, b) {
                    for (var c, d = a ? _.filter(a, this)  : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)),
                    c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, 'script')), c.parentNode.removeChild(c));
                    return this
                },
                empty: function () {
                    for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = '');
                    return this
                },
                clone: function (a, b) {
                    return a = null == a ? !1 : a,
                    b = null == b ? a : b,
                    this.map(function () {
                        return _.clone(this, a, b)
                    })
                },
                html: function (a) {
                    return qa(this, function (a) {
                        var b = this[0] || {
                        },
                        c = 0,
                        d = this.length;
                        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                        if ('string' == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ['',
                                    '']) [1].toLowerCase()]) {
                            a = a.replace(Ea, '<$1></$2>');
                            try {
                                for (; d > c; c++) b = this[c] || {
                                },
                                1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                                b = 0
                            } catch (e) {
                            }
                        }
                        b && this.empty().append(a)
                    }, null, a, arguments.length)
                },
                replaceWith: function () {
                    var a = arguments[0];
                    return this.domManip(arguments, function (b) {
                        a = this.parentNode,
                        _.cleanData(r(this)),
                        a && a.replaceChild(b, this)
                    }),
                    a && (a.length || a.nodeType) ? this : this.remove()
                },
                detach: function (a) {
                    return this.remove(a, !0)
                },
                domManip: function (a, b) {
                    a = S.apply([], a);
                    var c,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i = 0,
                    j = this.length,
                    k = this,
                    l = j - 1,
                    m = a[0],
                    p = _.isFunction(m);
                    if (p || j > 1 && 'string' == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function (c) {
                        var d = k.eq(c);
                        p && (a[0] = m.call(this, c, d.html())),
                        d.domManip(a, b)
                    });
                    if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                        for (e = _.map(r(c, 'script'), n), f = e.length; j > i; i++) g = c,
                            i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, 'script'))),
                                b.call(this[i], g, i);
                        if (f) for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i],
                        Ja.test(g.type || '') && !ra.access(g, 'globalEval') && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src)  : _.globalEval(g.textContent.replace(La, '')))
                    }
                    return this
                }
            }),
            _.each({
                appendTo: 'append',
                prependTo: 'prepend',
                insertBefore: 'before',
                insertAfter: 'after',
                replaceAll: 'replaceWith'
            }, function (a, b) {
                _.fn[a] = function (a) {
                    for (var c, d = [
                    ], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0),
                    _(e[g]) [b](c),
                    T.apply(d, c.get());
                    return this.pushStack(d)
                }
            });
            var Na,
            Oa = {
            },
            Pa = /^margin/,
            Qa = new RegExp('^(' + va + ')(?!px)[a-z%]+$', 'i'),
            Ra = function (b) {
                return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null)  : a.getComputedStyle(b, null)
            };
            !function () {
                function b() {
                    g.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute',
                    g.innerHTML = '',
                    e.appendChild(f);
                    var b = a.getComputedStyle(g, null);
                    c = '1%' !== b.top,
                    d = '4px' === b.width,
                    e.removeChild(f)
                }
                var c,
                d,
                e = Z.documentElement,
                f = Z.createElement('div'),
                g = Z.createElement('div');
                g.style && (g.style.backgroundClip = 'content-box', g.cloneNode(!0).style.backgroundClip = '', Y.clearCloneStyle = 'content-box' === g.style.backgroundClip, f.style.cssText = 'border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute', f.appendChild(g), a.getComputedStyle && _.extend(Y, {
                    pixelPosition: function () {
                        return b(),
                        c
                    },
                    boxSizingReliable: function () {
                        return null == d && b(),
                        d
                    },
                    reliableMarginRight: function () {
                        var b,
                        c = g.appendChild(Z.createElement('div'));
                        return c.style.cssText = g.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0',
                        c.style.marginRight = c.style.width = '0',
                        g.style.width = '1px',
                        e.appendChild(f),
                        b = !parseFloat(a.getComputedStyle(c, null).marginRight),
                        e.removeChild(f),
                        g.removeChild(c),
                        b
                    }
                }))
            }(),
            _.swap = function (a, b, c, d) {
                var e,
                f,
                g = {
                };
                for (f in b) g[f] = a.style[f],
                a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b) a.style[f] = g[f];
                return e
            };
            var Sa = /^(none|table(?!-c[ea]).+)/,
            Ta = new RegExp('^(' + va + ')(.*)$', 'i'),
            Ua = new RegExp('^([+-])=(' + va + ')', 'i'),
                    Va = {
                        position: 'absolute',
                        visibility: 'hidden',
                        display: 'block'
                    },
                    Wa = {
                        letterSpacing: '0',
                        fontWeight: '400'
                    },
                    Xa = [
                    'Webkit',
                    'O',
                    'Moz',
                    'ms'
                    ];
                    _.extend({
                        cssHooks: {
                            opacity: {
                                get: function (a, b) {
                                    if (b) {
                                        var c = v(a, 'opacity');
                                        return '' === c ? '1' : c
                                    }
                                }
                            }
                        },
                        cssNumber: {
                            columnCount: !0,
                            fillOpacity: !0,
                            flexGrow: !0,
                            flexShrink: !0,
                            fontWeight: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0
                        },
                        cssProps: {
                            'float': 'cssFloat'
                        },
                        style: function (a, b, c, d) {
                            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                                var e,
                                    f,
                                    g,
                                    h = _.camelCase(b),
                                    i = a.style;
                                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)),
                                g = _.cssHooks[b] || _.cssHooks[h],
                                void 0 === c ? g && 'get' in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, 'string' === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = 'number'), null != c && c === c && ('number' !== f || _.cssNumber[h] || (c += 'px'), Y.clearCloneStyle || '' !== c || 0 !== b.indexOf('background') || (i[b] = 'inherit'), g && 'set' in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
                            }
                        },
                        css: function (a, b, c, d) {
                            var e,
                            f,
                            g,
                            h = _.camelCase(b);
                            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)),
                            g = _.cssHooks[b] || _.cssHooks[h],
                            g && 'get' in g && (e = g.get(a, !0, c)),
                            void 0 === e && (e = v(a, b, d)),
                            'normal' === e && b in Wa && (e = Wa[b]),
                            '' === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e)  : e
                        }
                    }),
            _.each(['height',
                    'width'], function (a, b) {
                        _.cssHooks[b] = {
                            get: function (a, c, d) {
                                return c ? Sa.test(_.css(a, 'display')) && 0 === a.offsetWidth ? _.swap(a, Va, function () {
                                    return A(a, b, d)
                                })  : A(a, b, d)  : void 0
                            },
                            set: function (a, c, d) {
                                var e = d && Ra(a);
                                return y(a, c, d ? z(a, b, d, 'border-box' === _.css(a, 'boxSizing', !1, e), e)  : 0)
                            }
                        }
                    }),
            _.cssHooks.marginRight = w(Y.reliableMarginRight, function (a, b) {
                return b ? _.swap(a, {
                    display: 'inline-block'
                }, v, [
                a,
                'marginRight'
                ])  : void 0
            }),
            _.each({
                margin: '',
                padding: '',
                border: 'Width'
            }, function (a, b) {
                _.cssHooks[a + b] = {
                    expand: function (c) {
                        for (var d = 0, e = {
                        }, f = 'string' == typeof c ? c.split(' ')  : [
                        c
                        ]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
                        return e
                    }
                },
                Pa.test(a) || (_.cssHooks[a + b].set = y)
            }),
            _.fn.extend({
                css: function (a, b) {
                    return qa(this, function (a, b, c) {
                        var d,
                        e,
                        f = {
                        },
                        g = 0;
                        if (_.isArray(b)) {
                            for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                            return f
                        }
                        return void 0 !== c ? _.style(a, b, c)  : _.css(a, b)
                    }, a, b, arguments.length > 1)
                },
                show: function () {
                    return B(this, !0)
                },
                hide: function () {
                    return B(this)
                },
                toggle: function (a) {
                    return 'boolean' == typeof a ? a ? this.show()  : this.hide()  : this.each(function () {
                        xa(this) ? _(this).show()  : _(this).hide()
                    })
                }
            }),
            _.Tween = C,
            C.prototype = {
                constructor: C,
                init: function (a, b, c, d, e, f) {
                    this.elem = a,
                    this.prop = c,
                    this.easing = e || 'swing',
                    this.options = b,
                    this.start = this.now = this.cur(),
                    this.end = d,
                    this.unit = f || (_.cssNumber[c] ? '' : 'px')
                },
                cur: function () {
                    var a = C.propHooks[this.prop];
                    return a && a.get ? a.get(this)  : C.propHooks._default.get(this)
                },
                run: function (a) {
                    var b,
                    c = C.propHooks[this.prop];
                    return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration)  : this.pos = b = a,
                    this.now = (this.end - this.start) * b + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    c && c.set ? c.set(this)  : C.propHooks._default.set(this),
                    this
                }
            },
            C.prototype.init.prototype = C.prototype,
            C.propHooks = {
                _default: {
                    get: function (a) {
                        var b;
                        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ''), b && 'auto' !== b ? b : 0)  : a.elem[a.prop]
                    },
                    set: function (a) {
                        _.fx.step[a.prop] ? _.fx.step[a.prop](a)  : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit)  : a.elem[a.prop] = a.now
                    }
                }
            },
            C.propHooks.scrollTop = C.propHooks.scrollLeft = {
                set: function (a) {
                    a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
                }
            },
            _.easing = {
                linear: function (a) {
                    return a
                },
                swing: function (a) {
                    return 0.5 - Math.cos(a * Math.PI) / 2
                }
            },
            _.fx = C.prototype.init,
            _.fx.step = {
            };
                    var Ya,
                    Za,
                    $a = /^(?:toggle|show|hide)$/,
                    _a = new RegExp('^(?:([+-])=|)(' + va + ')([a-z%]*)$', 'i'),
                    ab = /queueHooks$/,
                    bb = [
                        G
                    ],
                    cb = {
                        '*': [
                            function (a, b) {
                                var c = this.createTween(a, b),
                                d = c.cur(),
                                e = _a.exec(b),
                                f = e && e[3] || (_.cssNumber[a] ? '' : 'px'),
                                g = (_.cssNumber[a] || 'px' !== f && + d) && _a.exec(_.css(c.elem, a)),
                                h = 1,
                                i = 20;
                                if (g && g[3] !== f) {
                                    f = f || g[3],
                                        e = e || [],
                                        g = + d || 1;
                                    do h = h || '.5',
                                g /= h,
                                    _.style(c.elem, a, g + f);
                                    while (h !== (h = c.cur() / d) && 1 !== h && --i)
                                }
                                return e && (g = c.start = + g || + d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : + e[2]),
                                c
                            }
                        ]
                    };
                    _.Animation = _.extend(I, {
                        tweener: function (a, b) {
                            _.isFunction(a) ? (b = a, a = [
                                    '*'
                            ])  : a = a.split(' ');
                            for (var c, d = 0, e = a.length; e > d; d++) c = a[d],
                            cb[c] = cb[c] || [],
                                cb[c].unshift(b)
                        },
                        prefilter: function (a, b) {
                            b ? bb.unshift(a)  : bb.push(a)
                        }
                    }),
                    _.speed = function (a, b, c) {
                        var d = a && 'object' == typeof a ? _.extend({
                        }, a)  : {
                            complete: c || !c && b || _.isFunction(a) && a,
                            duration: a,
                            easing: c && b || b && !_.isFunction(b) && b
                        };
                        return d.duration = _.fx.off ? 0 : 'number' == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default,
                        (null == d.queue || d.queue === !0) && (d.queue = 'fx'),
                        d.old = d.complete,
                        d.complete = function () {
                            _.isFunction(d.old) && d.old.call(this),
                            d.queue && _.dequeue(this, d.queue)
                        },
                        d
                    },
                    _.fn.extend({
                        fadeTo: function (a, b, c, d) {
                            return this.filter(xa).css('opacity', 0).show().end().animate({
                                opacity: b
                            }, a, c, d)
                        },
                        animate: function (a, b, c, d) {
                            var e = _.isEmptyObject(a),
                            f = _.speed(b, c, d),
                            g = function () {
                                var b = I(this, _.extend({
                                }, a), f);
                                (e || ra.get(this, 'finish')) && b.stop(!0)
                            };
                            return g.finish = g,
                            e || f.queue === !1 ? this.each(g)  : this.queue(f.queue, g)
                        },
                        stop: function (a, b, c) {
                            var d = function (a) {
                                var b = a.stop;
                                delete a.stop,
                                b(c)
                            };
                            return 'string' != typeof a && (c = b, b = a, a = void 0),
                            b && a !== !1 && this.queue(a || 'fx', [
                            ]),
                            this.each(function () {
                                var b = !0,
                                e = null != a && a + 'queueHooks',
                                f = _.timers,
                                g = ra.get(this);
                                if (e) g[e] && g[e].stop && d(g[e]);
                                else for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                                (b || !c) && _.dequeue(this, a)
                            })
                        },
                        finish: function (a) {
                            return a !== !1 && (a = a || 'fx'),
                            this.each(function () {
                                var b,
                                c = ra.get(this),
                                d = c[a + 'queue'],
                                e = c[a + 'queueHooks'],
                                f = _.timers,
                                g = d ? d.length : 0;
                                for (c.finish = !0, _.queue(this, a, [
                                ]), e && e.stop && e.stop.call(this, !0), b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                                delete c.finish
                            })
                        }
                    }),
                    _.each(['toggle',
                            'show',
                            'hide'], function (a, b) {
                                var c = _.fn[b];
                                _.fn[b] = function (a, d, e) {
                                    return null == a || 'boolean' == typeof a ? c.apply(this, arguments)  : this.animate(E(b, !0), a, d, e)
                                }
                            }),
                    _.each({
                        slideDown: E('show'),
                        slideUp: E('hide'),
                        slideToggle: E('toggle'),
                        fadeIn: {
                            opacity: 'show'
                        },
                        fadeOut: {
                            opacity: 'hide'
                        },
                        fadeToggle: {
                            opacity: 'toggle'
                        }
                    }, function (a, b) {
                        _.fn[a] = function (a, c, d) {
                            return this.animate(b, a, c, d)
                        }
                    }),
                    _.timers = [
                    ],
                    _.fx.tick = function () {
                        var a,
                        b = 0,
                        c = _.timers;
                        for (Ya = _.now(); b < c.length; b++) a = c[b],
                        a() || c[b] !== a || c.splice(b--, 1);
                        c.length || _.fx.stop(),
                        Ya = void 0
                    },
                    _.fx.timer = function (a) {
                        _.timers.push(a),
                        a() ? _.fx.start()  : _.timers.pop()
                    },
                    _.fx.interval = 13,
                    _.fx.start = function () {
                        Za || (Za = setInterval(_.fx.tick, _.fx.interval))
                    },
                    _.fx.stop = function () {
                        clearInterval(Za),
                        Za = null
                    },
                    _.fx.speeds = {
                        slow: 600,
                        fast: 200,
                        _default: 400
                    },
                    _.fn.delay = function (a, b) {
                        return a = _.fx ? _.fx.speeds[a] || a : a,
                        b = b || 'fx',
                        this.queue(b, function (b, c) {
                            var d = setTimeout(b, a);
                            c.stop = function () {
                                clearTimeout(d)
                            }
                        })
                    },
                    function () {
                        var a = Z.createElement('input'),
                        b = Z.createElement('select'),
                        c = b.appendChild(Z.createElement('option'));
                        a.type = 'checkbox',
                        Y.checkOn = '' !== a.value,
                        Y.optSelected = c.selected,
                        b.disabled = !0,
                        Y.optDisabled = !c.disabled,
                        a = Z.createElement('input'),
                        a.value = 't',
                        a.type = 'radio',
                        Y.radioValue = 't' === a.value
                    }();
                    var db,
                    eb,
                    fb = _.expr.attrHandle;
                    _.fn.extend({
                        attr: function (a, b) {
                            return qa(this, _.attr, a, b, arguments.length > 1)
                        },
                        removeAttr: function (a) {
                            return this.each(function () {
                                _.removeAttr(this, a)
                            })
                        }
                    }),
                    _.extend({
                        attr: function (a, b, c) {
                            var d,
                            e,
                            f = a.nodeType;
                            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === za ? _.prop(a, b, c)  : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && 'get' in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e)  : null !== c ? d && 'set' in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ''), c)  : void _.removeAttr(a, b))
                        },
                        removeAttr: function (a, b) {
                            var c,
                            d,
                            e = 0,
                            f = b && b.match(na);
                            if (f && 1 === a.nodeType) for (; c = f[e++]; ) d = _.propFix[c] || c,
                            _.expr.match.bool.test(c) && (a[d] = !1),
                                a.removeAttribute(c)
                        },
                        attrHooks: {
                            type: {
                                set: function (a, b) {
                                    if (!Y.radioValue && 'radio' === b && _.nodeName(a, 'input')) {
                                        var c = a.value;
                                        return a.setAttribute('type', b),
                                        c && (a.value = c),
                                        b
                                    }
                                }
                            }
                        }
                    }),
                    eb = {
                        set: function (a, b, c) {
                            return b === !1 ? _.removeAttr(a, c)  : a.setAttribute(c, c),
                            c
                        }
                    },
                    _.each(_.expr.match.bool.source.match(/\w+/g), function (a, b) {
                        var c = fb[b] || _.find.attr;
                        fb[b] = function (a, b, d) {
                            var e,
                            f;
                            return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase()  : null, fb[b] = f),
                            e
                        }
                    });
                    var gb = /^(?:input|select|textarea|button)$/i;
                    _.fn.extend({
                        prop: function (a, b) {
                            return qa(this, _.prop, a, b, arguments.length > 1)
                        },
                        removeProp: function (a) {
                            return this.each(function () {
                                delete this[_.propFix[a] || a]
                            })
                        }
                    }),
                    _.extend({
                        propFix: {
                            'for': 'htmlFor',
                            'class': 'className'
                        },
                        prop: function (a, b, c) {
                            var d,
                            e,
                            f,
                            g = a.nodeType;
                            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !_.isXMLDoc(a),
                            f && (b = _.propFix[b] || b, e = _.propHooks[b]),
                                void 0 !== c ? e && 'set' in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && 'get' in e && null !== (d = e.get(a, b)) ? d : a[b]
                        },
                        propHooks: {
                            tabIndex: {
                                get: function (a) {
                                    return a.hasAttribute('tabindex') || gb.test(a.nodeName) || a.href ? a.tabIndex : - 1
                                }
                            }
                        }
                    }),
                    Y.optSelected || (_.propHooks.selected = {
                        get: function (a) {
                            var b = a.parentNode;
                            return b && b.parentNode && b.parentNode.selectedIndex,
                            null
                        }
                    }),
                    _.each(['tabIndex',
                            'readOnly',
                            'maxLength',
                            'cellSpacing',
                            'cellPadding',
                            'rowSpan',
                            'colSpan',
                            'useMap',
                            'frameBorder',
                            'contentEditable'], function () {
                                _.propFix[this.toLowerCase()] = this
                            });
                    var hb = /[\t\r\n\f]/g;
                    _.fn.extend({
                        addClass: function (a) {
                            var b,
                            c,
                            d,
                            e,
                            f,
                            g,
                            h = 'string' == typeof a && a,
                            i = 0,
                            j = this.length;
                            if (_.isFunction(a)) return this.each(function (b) {
                                _(this).addClass(a.call(this, b, this.className))
                            });
                            if (h) for (b = (a || '').match(na) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (' ' + c.className + ' ').replace(hb, ' ')  : ' ')) {
                                for (f = 0; e = b[f++]; ) d.indexOf(' ' + e + ' ') < 0 && (d += e + ' ');
                                g = _.trim(d),
                                    c.className !== g && (c.className = g)
                            }
                            return this
                        },
                        removeClass: function (a) {
                            var b,
                            c,
                            d,
                            e,
                            f,
                            g,
                            h = 0 === arguments.length || 'string' == typeof a && a,
                            i = 0,
                            j = this.length;
                            if (_.isFunction(a)) return this.each(function (b) {
                                _(this).removeClass(a.call(this, b, this.className))
                            });
                            if (h) for (b = (a || '').match(na) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (' ' + c.className + ' ').replace(hb, ' ')  : '')) {
                                for (f = 0; e = b[f++]; ) for (; d.indexOf(' ' + e + ' ') >= 0; ) d = d.replace(' ' + e + ' ', ' ');
                                g = a ? _.trim(d)  : '',
                                    c.className !== g && (c.className = g)
                            }
                            return this
                        },
                        toggleClass: function (a, b) {
                            var c = typeof a;
                            return 'boolean' == typeof b && 'string' === c ? b ? this.addClass(a)  : this.removeClass(a)  : _.isFunction(a) ? this.each(function (c) {
                                _(this).toggleClass(a.call(this, c, this.className, b), b)
                            })  : this.each(function () {
                                if ('string' === c) for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++]; ) e.hasClass(b) ? e.removeClass(b)  : e.addClass(b);
                                else (c === za || 'boolean' === c) && (this.className && ra.set(this, '__className__', this.className), this.className = this.className || a === !1 ? '' : ra.get(this, '__className__') || '')
                            })
                        },
                        hasClass: function (a) {
                            for (var b = ' ' + a + ' ', c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (' ' + this[c].className + ' ').replace(hb, ' ').indexOf(b) >= 0) return !0;
                            return !1
                        }
                    });
                    var ib = /\r/g;
                    _.fn.extend({
                        val: function (a) {
                            var b,
                            c,
                            d,
                            e = this[0];
                            {
                                if (arguments.length) return d = _.isFunction(a),
                                this.each(function (c) {
                                    var e;
                                    1 === this.nodeType && (e = d ? a.call(this, c, _(this).val())  : a, null == e ? e = '' : 'number' == typeof e ? e += '' : _.isArray(e) && (e = _.map(e, function (a) {
                                        return null == a ? '' : a + ''
                                    })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && 'set' in b && void 0 !== b.set(this, e, 'value') || (this.value = e))
                                });
                                if (e) return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()],
                                b && 'get' in b && void 0 !== (c = b.get(e, 'value')) ? c : (c = e.value, 'string' == typeof c ? c.replace(ib, '')  : null == c ? '' : c)
                            }
                        }
                    }),
                    _.extend({
                        valHooks: {
                            option: {
                                get: function (a) {
                                    var b = _.find.attr(a, 'value');
                                    return null != b ? b : _.trim(_.text(a))
                                }
                            },
                            select: {
                                get: function (a) {
                                    for (var b, c, d = a.options, e = a.selectedIndex, f = 'select-one' === a.type || 0 > e, g = f ? null : [
                                    ], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute('disabled')) || c.parentNode.disabled && _.nodeName(c.parentNode, 'optgroup'))) {
                                        if (b = _(c).val(), f) return b;
                                        g.push(b)
                                    }
                                    return g
                                },
                                set: function (a, b) {
                                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--; ) d = e[g],
                                    (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                                    return c || (a.selectedIndex = - 1),
                                    f
                                }
                            }
                        }
                    }),
                    _.each(['radio',
                            'checkbox'], function () {
                                _.valHooks[this] = {
                                    set: function (a, b) {
                                        return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
                                    }
                                },
                                Y.checkOn || (_.valHooks[this].get = function (a) {
                                    return null === a.getAttribute('value') ? 'on' : a.value
                                })
                            }),
                    _.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (a, b) {
                        _.fn[b] = function (a, c) {
                            return arguments.length > 0 ? this.on(b, null, a, c)  : this.trigger(b)
                        }
                    }),
                    _.fn.extend({
                        hover: function (a, b) {
                            return this.mouseenter(a).mouseleave(b || a)
                        },
                        bind: function (a, b, c) {
                            return this.on(a, null, b, c)
                        },
                        unbind: function (a, b) {
                            return this.off(a, null, b)
                        },
                        delegate: function (a, b, c, d) {
                            return this.on(b, a, c, d)
                        },
                        undelegate: function (a, b, c) {
                            return 1 === arguments.length ? this.off(a, '**')  : this.off(b, a || '**', c)
                        }
                    });
                    var jb = _.now(),
                    kb = /\?/;
                    _.parseJSON = function (a) {
                        return JSON.parse(a + '')
                    },
                    _.parseXML = function (a) {
                        var b,
                        c;
                        if (!a || 'string' != typeof a) return null;
                        try {
                            c = new DOMParser,
                            b = c.parseFromString(a, 'text/xml')
                        } catch (d) {
                            b = void 0
                        }
                        return (!b || b.getElementsByTagName('parsererror').length) && _.error('Invalid XML: ' + a),
                        b
                    };
                    var lb = /#.*$/,
                    mb = /([?&])_=[^&]*/,
                    nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                    ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                    pb = /^(?:GET|HEAD)$/,
                    qb = /^\/\//,
                    rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                    sb = {
                    },
                    tb = {
                    },
                    ub = '*/'.concat('*'),
                    vb = a.location.href,
                    wb = rb.exec(vb.toLowerCase()) || [];
                    _.extend({
                        active: 0,
                        lastModified: {
                        },
                        etag: {
                        },
                        ajaxSettings: {
                            url: vb,
                            type: 'GET',
                            isLocal: ob.test(wb[1]),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                            accepts: {
                                '*': ub,
                                text: 'text/plain',
                                html: 'text/html',
                                xml: 'application/xml, text/xml',
                                json: 'application/json, text/javascript'
                            },
                            contents: {
                                xml: /xml/,
                                html: /html/,
                                json: /json/
                            },
                            responseFields: {
                                xml: 'responseXML',
                                text: 'responseText',
                                json: 'responseJSON'
                            },
                            converters: {
                                '* text': String,
                                'text html': !0,
                                'text json': _.parseJSON,
                                'text xml': _.parseXML
                            },
                            flatOptions: {
                                url: !0,
                                context: !0
                            }
                        },
                        ajaxSetup: function (a, b) {
                            return b ? L(L(a, _.ajaxSettings), b)  : L(_.ajaxSettings, a)
                        },
                        ajaxPrefilter: J(sb),
                        ajaxTransport: J(tb),
                        ajax: function (a, b) {
                            function c(a, b, c, g) {
                                var i,
                                k,
                                r,
                                s,
                                u,
                                w = b;
                                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || '', v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader('Last-Modified'), u && (_.lastModified[e] = u), u = v.getResponseHeader('etag'), u && (_.etag[e] = u)), 204 === a || 'HEAD' === l.type ? w = 'nocontent' : 304 === a ? w = 'notmodified' : (w = s.state, k = s.data, r = s.error, i = !r))  : (r = w, (a || !w) && (w = 'error', 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + '', i ? o.resolveWith(m, [
                                            k,
                                            w,
                                            v
                                ])  : o.rejectWith(m, [
                                    v,
                                    w,
                                    r
                                ]), v.statusCode(q), q = void 0, j && n.trigger(i ? 'ajaxSuccess' : 'ajaxError', [
                                    v,
                                    l,
                                    i ? k : r
                                ]), p.fireWith(m, [
                                    v,
                                    w
                                ]), j && (n.trigger('ajaxComplete', [
                                        v,
                                        l
                                ]), --_.active || _.event.trigger('ajaxStop')))
                            }
                            'object' == typeof a && (b = a, a = void 0),
                            b = b || {
                            };
                            var d,
                            e,
                            f,
                            g,
                            h,
                            i,
                            j,
                            k,
                            l = _.ajaxSetup({
                            }, b),
                            m = l.context || l,
                            n = l.context && (m.nodeType || m.jquery) ? _(m)  : _.event,
                            o = _.Deferred(),
                            p = _.Callbacks('once memory'),
                            q = l.statusCode || {
                            },
                            r = {
                            },
                            s = {
                            },
                            t = 0,
                            u = 'canceled',
                            v = {
                                readyState: 0,
                                getResponseHeader: function (a) {
                                    var b;
                                    if (2 === t) {
                                        if (!g) for (g = {
                                        }; b = nb.exec(f); ) g[b[1].toLowerCase()] = b[2];
                                        b = g[a.toLowerCase()]
                                    }
                                    return null == b ? null : b
                                },
                                getAllResponseHeaders: function () {
                                    return 2 === t ? f : null
                                },
                                setRequestHeader: function (a, b) {
                                    var c = a.toLowerCase();
                                    return t || (a = s[c] = s[c] || a, r[a] = b),
                                    this
                                },
                                overrideMimeType: function (a) {
                                    return t || (l.mimeType = a),
                                    this
                                },
                                statusCode: function (a) {
                                    var b;
                                    if (a) if (2 > t) for (b in a) q[b] = [
                                        q[b],
                                            a[b]
                                    ];
                                    else v.always(a[v.status]);
                                    return this
                                },
                                abort: function (a) {
                                    var b = a || u;
                                    return d && d.abort(b),
                                    c(0, b),
                                    this
                                }
                            };
                            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + '').replace(lb, '').replace(qb, wb[1] + '//'), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || '*').toLowerCase().match(na) || [''], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ('http:' === i[1] ? '80' : '443')) === (wb[3] || ('http:' === wb[1] ? '80' : '443')))), l.data && l.processData && 'string' != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t) return v;
                            j = _.event && l.global,
                                j && 0 === _.active++ && _.event.trigger('ajaxStart'),
                                l.type = l.type.toUpperCase(),
                                l.hasContent = !pb.test(l.type),
                                e = l.url,
                                l.hasContent || (l.data && (e = l.url += (kb.test(e) ? '&' : '?') + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, '$1_=' + jb++)  : e + (kb.test(e) ? '&' : '?') + '_=' + jb++)),
                                l.ifModified && (_.lastModified[e] && v.setRequestHeader('If-Modified-Since', _.lastModified[e]), _.etag[e] && v.setRequestHeader('If-None-Match', _.etag[e])),
                                (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader('Content-Type', l.contentType),
                                v.setRequestHeader('Accept', l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ('*' !== l.dataTypes[0] ? ', ' + ub + '; q=0.01' : '')  : l.accepts['*']);
                            for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
                            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
                            u = 'abort';
                            for (k in {
                                success: 1,
                                error: 1,
                                complete: 1
                            }) v[k](l[k]);
                            if (d = K(tb, l, b, v)) {
                                v.readyState = 1,
                                    j && n.trigger('ajaxSend', [
                                            v,
                                            l
                                    ]),
                                    l.async && l.timeout > 0 && (h = setTimeout(function () {
                                        v.abort('timeout')
                                    }, l.timeout));
                                try {
                                    t = 1,
                                    d.send(r, c)
                                } catch (w) {
                                    if (!(2 > t)) throw w;
                                    c( - 1, w)
                                }
                            } else c( - 1, 'No Transport');
                            return v
                        },
                        getJSON: function (a, b, c) {
                            return _.get(a, b, c, 'json')
                        },
                        getScript: function (a, b) {
                            return _.get(a, void 0, b, 'script')
                        }
                    }),
                    _.each(['get',
                            'post'], function (a, b) {
                                _[b] = function (a, c, d, e) {
                                    return _.isFunction(c) && (e = e || d, d = c, c = void 0),
                                    _.ajax({
                                        url: a,
                                        type: b,
                                        dataType: e,
                                        data: c,
                                        success: d
                                    })
                                }
                            }),
                    _._evalUrl = function (a) {
                        return _.ajax({
                            url: a,
                            type: 'GET',
                            dataType: 'script',
                            async: !1,
                            global: !1,
                            'throws': !0
                        })
                    },
                    _.fn.extend({
                        wrapAll: function (a) {
                            var b;
                            return _.isFunction(a) ? this.each(function (b) {
                                _(this).wrapAll(a.call(this, b))
                            })  : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                                for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
                                return a
                            }).append(this)), this)
                        },
                        wrapInner: function (a) {
                            return _.isFunction(a) ? this.each(function (b) {
                                _(this).wrapInner(a.call(this, b))
                            })  : this.each(function () {
                                var b = _(this),
                                c = b.contents();
                                c.length ? c.wrapAll(a)  : b.append(a)
                            })
                        },
                        wrap: function (a) {
                            var b = _.isFunction(a);
                            return this.each(function (c) {
                                _(this).wrapAll(b ? a.call(this, c)  : a)
                            })
                        },
                        unwrap: function () {
                            return this.parent().each(function () {
                                _.nodeName(this, 'body') || _(this).replaceWith(this.childNodes)
                            }).end()
                        }
                    }),
                    _.expr.filters.hidden = function (a) {
                        return a.offsetWidth <= 0 && a.offsetHeight <= 0
                    },
                    _.expr.filters.visible = function (a) {
                        return !_.expr.filters.hidden(a)
                    };
                    var xb = /%20/g,
                    yb = /\[\]$/,
                    zb = /\r?\n/g,
                    Ab = /^(?:submit|button|image|reset|file)$/i,
                    Bb = /^(?:input|select|textarea|keygen)/i;
                    _.param = function (a, b) {
                        var c,
                        d = [
                        ],
                        e = function (a, b) {
                            b = _.isFunction(b) ? b()  : null == b ? '' : b,
                            d[d.length] = encodeURIComponent(a) + '=' + encodeURIComponent(b)
                        };
                        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function () {
                            e(this.name, this.value)
                        });
                        else for (c in a) O(c, a[c], b, e);
                        return d.join('&').replace(xb, '+')
                    },
                    _.fn.extend({
                        serialize: function () {
                            return _.param(this.serializeArray())
                        },
                        serializeArray: function () {
                            return this.map(function () {
                                var a = _.prop(this, 'elements');
                                return a ? _.makeArray(a)  : this
                            }).filter(function () {
                                var a = this.type;
                                return this.name && !_(this).is(':disabled') && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
                            }).map(function (a, b) {
                                var c = _(this).val();
                                return null == c ? null : _.isArray(c) ? _.map(c, function (a) {
                                    return {
                                        name: b.name,
                                        value: a.replace(zb, '\r\n')
                                    }
                                })  : {
                                    name: b.name,
                                    value: c.replace(zb, '\r\n')
                                }
                            }).get()
                        }
                    }),
                    _.ajaxSettings.xhr = function () {
                        try {
                            return new XMLHttpRequest
                        } catch (a) {
                        }
                    };
                    var Cb = 0,
                    Db = {
                    },
                    Eb = {
                        0: 200,
                        1223: 204
                    },
                    Fb = _.ajaxSettings.xhr();
                    a.attachEvent && a.attachEvent('onunload', function () {
                        for (var a in Db) Db[a]()
                    }),
                    Y.cors = !!Fb && 'withCredentials' in Fb,
                    Y.ajax = Fb = !!Fb,
                    _.ajaxTransport(function (a) {
                        var b;
                        return Y.cors || Fb && !a.crossDomain ? {
                            send: function (c, d) {
                                var e,
                                f = a.xhr(),
                                g = ++Cb;
                                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                                    a.crossDomain || c['X-Requested-With'] || (c['X-Requested-With'] = 'XMLHttpRequest');
                                for (e in c) f.setRequestHeader(e, c[e]);
                                b = function (a) {
                                    return function () {
                                        b && (delete Db[g], b = f.onload = f.onerror = null, 'abort' === a ? f.abort()  : 'error' === a ? d(f.status, f.statusText)  : d(Eb[f.status] || f.status, f.statusText, 'string' == typeof f.responseText ? {
                                            text: f.responseText
                                        }
                                        : void 0, f.getAllResponseHeaders()))
                                    }
                                },
                                    f.onload = b(),
                                    f.onerror = b('error'),
                                    b = Db[g] = b('abort');
                                try {
                                    f.send(a.hasContent && a.data || null)
                                } catch (h) {
                                    if (b) throw h
                                }
                            },
                            abort: function () {
                                b && b()
                            }
                        }
                        : void 0
                    }),
                    _.ajaxSetup({
                        accepts: {
                            script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
                        },
                        contents: {
                            script: /(?:java|ecma)script/
                        },
                        converters: {
                            'text script': function (a) {
                                return _.globalEval(a),
                                a
                            }
                        }
                    }),
                    _.ajaxPrefilter('script', function (a) {
                        void 0 === a.cache && (a.cache = !1),
                        a.crossDomain && (a.type = 'GET')
                    }),
                    _.ajaxTransport('script', function (a) {
                        if (a.crossDomain) {
                            var b,
                                c;
                            return {
                                send: function (d, e) {
                                    b = _('<script>').prop({
                                        async: !0,
                                        charset: a.scriptCharset,
                                        src: a.url
                                    }).on('load error', c = function (a) {
                                        b.remove(),
                                        c = null,
                                        a && e('error' === a.type ? 404 : 200, a.type)
                                    }),
                                    Z.head.appendChild(b[0])
                                },
                                abort: function () {
                                    c && c()
                                }
                            }
                        }
                    });
                    var Gb = [
                    ],
                    Hb = /(=)\?(?=&|$)|\?\?/;
                    _.ajaxSetup({
                        jsonp: 'callback',
                        jsonpCallback: function () {
                            var a = Gb.pop() || _.expando + '_' + jb++;
                            return this[a] = !0,
                            a
                        }
                    }),
                    _.ajaxPrefilter('json jsonp', function (b, c, d) {
                        var e,
                        f,
                        g,
                        h = b.jsonp !== !1 && (Hb.test(b.url) ? 'url' : 'string' == typeof b.data && !(b.contentType || '').indexOf('application/x-www-form-urlencoded') && Hb.test(b.data) && 'data');
                        return h || 'jsonp' === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback()  : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, '$1' + e)  : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? '&' : '?') + b.jsonp + '=' + e), b.converters['script json'] = function () {
                            return g || _.error(e + ' was not called'),
                            g[0]
                        }, b.dataTypes[0] = 'json', f = a[e], a[e] = function () {
                            g = arguments
                        }, d.always(function () {
                            a[e] = f,
                            b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)),
                            g && _.isFunction(f) && f(g[0]),
                            g = f = void 0
                        }), 'script')  : void 0
                    }),
                    _.parseHTML = function (a, b, c) {
                        if (!a || 'string' != typeof a) return null;
                        'boolean' == typeof b && (c = b, b = !1),
                            b = b || Z;
                        var d = ga.exec(a),
                        e = !c && [];
                        return d ? [
                            b.createElement(d[1])
                        ] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
                    };
                    var Ib = _.fn.load;
                    _.fn.load = function (a, b, c) {
                        if ('string' != typeof a && Ib) return Ib.apply(this, arguments);
                        var d,
                            e,
                            f,
                            g = this,
                            h = a.indexOf(' ');
                        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)),
                        _.isFunction(b) ? (c = b, b = void 0)  : b && 'object' == typeof b && (e = 'POST'),
                        g.length > 0 && _.ajax({
                            url: a,
                            type: e,
                            dataType: 'html',
                            data: b
                        }).done(function (a) {
                            f = arguments,
                            g.html(d ? _('<div>').append(_.parseHTML(a)).find(d)  : a)
                        }).complete(c && function (a, b) {
                            g.each(c, f || [a.responseText,
                                    b,
                                    a])
                        }),
                        this
                    },
                    _.each(['ajaxStart',
                            'ajaxStop',
                            'ajaxComplete',
                            'ajaxError',
                            'ajaxSuccess',
                            'ajaxSend'], function (a, b) {
                                _.fn[b] = function (a) {
                                    return this.on(b, a)
                                }
                            }),
                    _.expr.filters.animated = function (a) {
                        return _.grep(_.timers, function (b) {
                            return a === b.elem
                        }).length
                    };
                    var Jb = a.document.documentElement;
                    _.offset = {
                        setOffset: function (a, b, c) {
                            var d,
                            e,
                            f,
                            g,
                            h,
                            i,
                            j,
                            k = _.css(a, 'position'),
                            l = _(a),
                            m = {
                            };
                            'static' === k && (a.style.position = 'relative'),
                            h = l.offset(),
                            f = _.css(a, 'top'),
                            i = _.css(a, 'left'),
                            j = ('absolute' === k || 'fixed' === k) && (f + i).indexOf('auto') > - 1,
                            j ? (d = l.position(), g = d.top, e = d.left)  : (g = parseFloat(f) || 0, e = parseFloat(i) || 0),
                            _.isFunction(b) && (b = b.call(a, c, h)),
                            null != b.top && (m.top = b.top - h.top + g),
                            null != b.left && (m.left = b.left - h.left + e),
                            'using' in b ? b.using.call(a, m)  : l.css(m)
                        }
                    },
                    _.fn.extend({
                        offset: function (a) {
                            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                                _.offset.setOffset(this, a, b)
                            });
                            var b,
                            c,
                            d = this[0],
                            e = {
                                top: 0,
                                left: 0
                            },
                            f = d && d.ownerDocument;
                            if (f) return b = f.documentElement,
                            _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {
                                top: e.top + c.pageYOffset - b.clientTop,
                                left: e.left + c.pageXOffset - b.clientLeft
                            })  : e
                        },
                        position: function () {
                            if (this[0]) {
                                var a,
                                    b,
                                    c = this[0],
                                    d = {
                                        top: 0,
                                        left: 0
                                    };
                                return 'fixed' === _.css(c, 'position') ? b = c.getBoundingClientRect()  : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], 'html') || (d = a.offset()), d.top += _.css(a[0], 'borderTopWidth', !0), d.left += _.css(a[0], 'borderLeftWidth', !0)),
                                {
                                    top: b.top - d.top - _.css(c, 'marginTop', !0),
                                    left: b.left - d.left - _.css(c, 'marginLeft', !0)
                                }
                            }
                        },
                        offsetParent: function () {
                            return this.map(function () {
                                for (var a = this.offsetParent || Jb; a && !_.nodeName(a, 'html') && 'static' === _.css(a, 'position'); ) a = a.offsetParent;
                                return a || Jb
                            })
                        }
                    }),
                    _.each({
                        scrollLeft: 'pageXOffset',
                        scrollTop: 'pageYOffset'
                    }, function (b, c) {
                        var d = 'pageYOffset' === c;
                        _.fn[b] = function (e) {
                            return qa(this, function (b, e, f) {
                                var g = P(b);
                                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset)  : b[e] = f)
                            }, b, e, arguments.length, null)
                        }
                    }),
                    _.each(['top',
                            'left'], function (a, b) {
                                _.cssHooks[b] = w(Y.pixelPosition, function (a, c) {
                                    return c ? (c = v(a, b), Qa.test(c) ? _(a).position() [b] + 'px' : c)  : void 0
                                })
                            }),
                    _.each({
                        Height: 'height',
                        Width: 'width'
                    }, function (a, b) {
                        _.each({
                            padding: 'inner' + a,
                            content: b,
                            '': 'outer' + a
                        }, function (c, d) {
                            _.fn[d] = function (d, e) {
                                var f = arguments.length && (c || 'boolean' != typeof d),
                                g = c || (d === !0 || e === !0 ? 'margin' : 'border');
                                return qa(this, function (b, c, d) {
                                    var e;
                                    return _.isWindow(b) ? b.document.documentElement['client' + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body['scroll' + a], e['scroll' + a], b.body['offset' + a], e['offset' + a], e['client' + a]))  : void 0 === d ? _.css(b, c, g)  : _.style(b, c, d, g)
                                }, b, f ? d : void 0, f, null)
                            }
                        })
                    }),
                    _.fn.size = function () {
                        return this.length
                    },
                    _.fn.andSelf = _.fn.addBack,
                    'function' == typeof define && define.amd && define('jquery', [
                    ], function () {
                        return _
                    });
                    var Kb = a.jQuery,
                    Lb = a.$;
                    return _.noConflict = function (b) {
                        return a.$ === _ && (a.$ = Lb),
                        b && a.jQuery === _ && (a.jQuery = Kb),
                        _
                    },
                    typeof b === za && (a.jQuery = a.$ = _),
                    _
    }), function (a, b, c) {
        'use strict';
        function d(a, b) {
            return b = b || Error,
            function () {
                var c,
                d,
                e = 2,
                f = arguments,
                g = f[0],
                h = '[' + (a ? a + ':' : '') + g + '] ',
                i = f[1];
                for (h += i.replace(/\{\d+\}/g, function (a) {
                    var b = + a.slice(1, - 1),
                        c = b + e;
                    return c < f.length ? sa(f[c])  : a
                }), h += '\nhttp://errors.angularjs.org/1.4.0/' + (a ? a + '/' : '') + g, d = e, c = '?'; d < f.length; d++, c = '&') h += c + 'p' + (d - e) + '=' + encodeURIComponent(sa(f[d]));
                return new b(h)
            }
        }
        function e(a) {
            if (null == a || B(a)) return !1;
            var b = 'length' in Object(a) && a.length;
            return a.nodeType === Ud && b ? !0 : w(a) || Ld(a) || 0 === b || 'number' == typeof b && b > 0 && b - 1 in a
        }
        function f(a, b, c) {
            var d,
            g;
            if (a) if (z(a)) for (d in a) 'prototype' == d || 'length' == d || 'name' == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d, a);
            else if (Ld(a) || e(a)) {
                var h = 'object' != typeof a;
                for (d = 0, g = a.length; g > d; d++) (h || d in a) && b.call(c, a[d], d, a)
            } else if (a.forEach && a.forEach !== f) a.forEach(b, c, a);
            else if (v(a)) for (d in a) b.call(c, a[d], d, a);
            else if ('function' == typeof a.hasOwnProperty) for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d, a);
            else for (d in a) ud.call(a, d) && b.call(c, a[d], d, a);
            return a
        }
        function g(a, b, c) {
            for (var d = Object.keys(a).sort(), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
            return d
        }
        function h(a) {
            return function (b, c) {
                a(c, b)
            }
        }
        function i() {
            return ++Jd
        }
        function j(a, b) {
            b ? a.$$hashKey = b : delete a.$$hashKey
        }
        function k(a, b, c) {
            for (var d = a.$$hashKey, e = 0, f = b.length; f > e; ++e) {
                var g = b[e];
                if (u(g) || z(g)) for (var h = Object.keys(g), i = 0, l = h.length; l > i; i++) {
                    var m = h[i],
                        n = g[m];
                    c && u(n) ? (u(a[m]) || (a[m] = Ld(n) ? [
                    ] : {
                    }), k(a[m], [
                        n
                    ], !0))  : a[m] = n
                }
            }
            return j(a, d),
            a
        }
        function l(a) {
            return k(a, Cd.call(arguments, 1), !1)
        }
        function m(a) {
            return k(a, Cd.call(arguments, 1), !0)
        }
        function n(a) {
            return parseInt(a, 10)
        }
        function o(a, b) {
            return l(Object.create(a), b)
        }
        function p() {
        }
        function q(a) {
            return a
        }
        function r(a) {
            return function () {
                return a
            }
        }
        function s(a) {
            return 'undefined' == typeof a
        }
        function t(a) {
            return 'undefined' != typeof a
        }
        function u(a) {
            return null !== a && 'object' == typeof a
        }
        function v(a) {
            return null !== a && 'object' == typeof a && !Gd(a)
        }
        function w(a) {
            return 'string' == typeof a
        }
        function x(a) {
            return 'number' == typeof a
        }
        function y(a) {
            return '[object Date]' === Fd.call(a)
        }
        function z(a) {
            return 'function' == typeof a
        }
        function A(a) {
            return '[object RegExp]' === Fd.call(a)
        }
        function B(a) {
            return a && a.window === a
        }
        function C(a) {
            return a && a.$evalAsync && a.$watch
        }
        function D(a) {
            return '[object File]' === Fd.call(a)
        }
        function E(a) {
            return '[object FormData]' === Fd.call(a)
        }
        function F(a) {
            return '[object Blob]' === Fd.call(a)
        }
        function G(a) {
            return 'boolean' == typeof a
        }
        function H(a) {
            return a && z(a.then)
        }
        function I(a) {
            return Md.test(Fd.call(a))
        }
        function J(a) {
            return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
        }
        function K(a) {
            var b,
            c = {
            },
            d = a.split(',');
            for (b = 0; b < d.length; b++) c[d[b]] = !0;
            return c
        }
        function L(a) {
            return td(a.nodeName || a[0] && a[0].nodeName)
        }
        function M(a, b) {
            var c = a.indexOf(b);
            return c >= 0 && a.splice(c, 1),
            c
        }
        function N(a, b, c, d) {
            function e(a, b, c, d, e) {
                var f = N(b, null, d, e);
                u(b) && (d.push(b), e.push(f)),
                c[a] = f
            }
            if (B(a) || C(a)) throw Hd('cpws', 'Can\'t copy! Making copies of Window or Scope instances is not supported.');
            if (I(b)) throw Hd('cpta', 'Can\'t copy! TypedArray destination cannot be mutated.');
            if (b) {
                if (a === b) throw Hd('cpi', 'Can\'t copy! Source and destination are identical.');
                if (c = c || [], d = d || [], u(a)) {
                    var g = c.indexOf(a);
                    if ( - 1 !== g) return d[g];
                    c.push(a),
                        d.push(b)
                }
                var h,
                i;
                if (Ld(a)) {
                    b.length = 0;
                    for (var k = 0; k < a.length; k++) h = N(a[k], null, c, d),
                    u(a[k]) && (c.push(a[k]), d.push(h)),
                        b.push(h)
                } else {
                    var l = b.$$hashKey;
                    if (Ld(b) ? b.length = 0 : f(b, function (a, c) {
                        delete b[c]
                    }), v(a)) for (i in a) e(i, a[i], b, c, d);
                    else if (a && 'function' == typeof a.hasOwnProperty) for (i in a) a.hasOwnProperty(i) && e(i, a[i], b, c, d);
                    else for (i in a) ud.call(a, i) && e(i, a[i], b, c, d);
                    j(b, l)
                }
            } else if (b = a, a) if (Ld(a)) b = N(a, [
            ], c, d);
            else if (I(a)) b = new a.constructor(a);
            else if (y(a)) b = new Date(a.getTime());
            else if (A(a)) b = new RegExp(a.source, a.toString().match(/[^\/]*$/) [0]),
                b.lastIndex = a.lastIndex;
            else if (u(a)) {
                var m = Object.create(Gd(a));
                b = N(a, m, c, d)
            }
            return b
        }
        function O(a, b) {
            if (Ld(a)) {
                b = b || [];
                for (var c = 0, d = a.length; d > c; c++) b[c] = a[c]
            } else if (u(a)) {
                b = b || {
                };
                for (var e in a) ('$' !== e.charAt(0) || '$' !== e.charAt(1)) && (b[e] = a[e])
            }
            return b || a
        }
        function P(a, b) {
            if (a === b) return !0;
            if (null === a || null === b) return !1;
            if (a !== a && b !== b) return !0;
            var d,
                e,
                f,
                g = typeof a,
                h = typeof b;
            if (g == h && 'object' == g) {
                if (!Ld(a)) {
                    if (y(a)) return y(b) ? P(a.getTime(), b.getTime())  : !1;
                    if (A(a)) return A(b) ? a.toString() == b.toString()  : !1;
                    if (C(a) || C(b) || B(a) || B(b) || Ld(b) || y(b) || A(b)) return !1;
                    f = pa();
                    for (e in a) if ('$' !== e.charAt(0) && !z(a[e])) {
                        if (!P(a[e], b[e])) return !1;
                        f[e] = !0
                    }
                    for (e in b) if (!(e in f || '$' === e.charAt(0) || b[e] === c || z(b[e]))) return !1;
                    return !0
                }
                if (!Ld(b)) return !1;
                if ((d = a.length) == b.length) {
                    for (e = 0; d > e; e++) if (!P(a[e], b[e])) return !1;
                    return !0
                }
            }
            return !1
        }
        function Q(a, b, c) {
            return a.concat(Cd.call(b, c))
        }
        function R(a, b) {
            return Cd.call(a, b || 0)
        }
        function S(a, b) {
            var c = arguments.length > 2 ? R(arguments, 2)  : [
            ];
            return !z(b) || b instanceof RegExp ? b : c.length ? function () {
                return arguments.length ? b.apply(a, Q(c, arguments, 0))  : b.apply(a, c)
            }
            : function () {
                return arguments.length ? b.apply(a, arguments)  : b.call(a)
            }
        }
        function T(a, d) {
            var e = d;
            return 'string' == typeof a && '$' === a.charAt(0) && '$' === a.charAt(1) ? e = c : B(d) ? e = '$WINDOW' : d && b === d ? e = '$DOCUMENT' : C(d) && (e = '$SCOPE'),
            e
        }
        function U(a, b) {
            return 'undefined' == typeof a ? c : (x(b) || (b = b ? 2 : null), JSON.stringify(a, T, b))
        }
        function V(a) {
            return w(a) ? JSON.parse(a)  : a
        }
        function W(a, b) {
            var c = Date.parse('Jan 01, 1970 00:00:00 ' + a) / 60000;
            return isNaN(c) ? b : c
        }
        function X(a, b) {
            return a = new Date(a.getTime()),
            a.setMinutes(a.getMinutes() + b),
            a
        }
        function Y(a, b, c) {
            c = c ? - 1 : 1;
            var d = W(b, a.getTimezoneOffset());
            return X(a, c * (d - a.getTimezoneOffset()))
        }
        function Z(a) {
            a = zd(a).clone();
            try {
                a.empty()
            } catch (b) {
            }
            var c = zd('<div>').append(a).html();
            try {
                return a[0].nodeType === Wd ? td(c)  : c.match(/^(<[^>]+>)/) [1].replace(/^<([\w\-]+)/, function (a, b) {
                    return '<' + td(b)
                })
            } catch (b) {
                return td(c)
            }
        }
        function $(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
            }
        }
        function _(a) {
            var b,
            c,
            d = {
            };
            return f((a || '').split('&'), function (a) {
                if (a && (b = a.replace(/\+/g, '%20').split('='), c = $(b[0]), t(c))) {
                    var e = t(b[1]) ? $(b[1])  : !0;
                    ud.call(d, c) ? Ld(d[c]) ? d[c].push(e)  : d[c] = [
                        d[c],
                        e
                    ] : d[c] = e
                }
            }),
            d
        }
        function aa(a) {
            var b = [
            ];
            return f(a, function (a, c) {
                Ld(a) ? f(a, function (a) {
                    b.push(ca(c, !0) + (a === !0 ? '' : '=' + ca(a, !0)))
                })  : b.push(ca(c, !0) + (a === !0 ? '' : '=' + ca(a, !0)))
            }),
            b.length ? b.join('&')  : ''
        }
        function ba(a) {
            return ca(a, !0).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+')
        }
        function ca(a, b) {
            return encodeURIComponent(a).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%20/g, b ? '%20' : '+')
        }
        function da(a, b) {
            var c,
            d,
            e = Rd.length;
            for (d = 0; e > d; ++d) if (c = Rd[d] + b, w(c = a.getAttribute(c))) return c;
            return null
        }
        function ea(a, b) {
            var c,
            d,
            e = {
            };
            f(Rd, function (b) {
                var e = b + 'app';
                !c && a.hasAttribute && a.hasAttribute(e) && (c = a, d = a.getAttribute(e))
            }),
            f(Rd, function (b) {
                var e,
                f = b + 'app';
                !c && (e = a.querySelector('[' + f.replace(':', '\\:') + ']')) && (c = e, d = e.getAttribute(f))
            }),
            c && (e.strictDi = null !== da(c, 'strict-di'), b(c, d ? [
                        d
            ] : [
            ], e))
        }
        function fa(c, d, e) {
            u(e) || (e = {
            });
            var g = {
                strictDi: !1
            };
            e = l(g, e);
            var h = function () {
                if (c = zd(c), c.injector()) {
                    var a = c[0] === b ? 'document' : Z(c);
                    throw Hd('btstrpd', 'App Already Bootstrapped with this Element \'{0}\'', a.replace(/</, '&lt;').replace(/>/, '&gt;'))
                }
                d = d || [],
                d.unshift(['$provide',
                        function (a) {
                            a.value('$rootElement', c)
                        }
                ]),
                e.debugInfoEnabled && d.push(['$compileProvider',
                        function (a) {
                            a.debugInfoEnabled(!0)
                        }
                ]),
                d.unshift('ng');
                var f = Ya(d, e.strictDi);
                return f.invoke(['$rootScope',
                        '$rootElement',
                        '$compile',
                        '$injector',
                        function (a, b, c, d) {
                            a.$apply(function () {
                                b.data('$injector', d),
                                c(b) (a)
                            })
                        }
                ]),
                f
            },
            i = /^NG_ENABLE_DEBUG_INFO!/,
            j = /^NG_DEFER_BOOTSTRAP!/;
            return a && i.test(a.name) && (e.debugInfoEnabled = !0, a.name = a.name.replace(i, '')),
            a && !j.test(a.name) ? h()  : (a.name = a.name.replace(j, ''), Id.resumeBootstrap = function (a) {
                return f(a, function (a) {
                    d.push(a)
                }),
                h()
            }, void (z(Id.resumeDeferredBootstrap) && Id.resumeDeferredBootstrap()))
        }
        function ga() {
            a.name = 'NG_ENABLE_DEBUG_INFO!' + a.name,
            a.location.reload()
        }
        function ha(a) {
            var b = Id.element(a).injector();
            if (!b) throw Hd('test', 'no injector found for element argument to getTestability');
            return b.get('$$testability')
        }
        function ia(a, b) {
            return b = b || '_',
            a.replace(Sd, function (a, c) {
                return (c ? b : '') + a.toLowerCase()
            })
        }
        function ja() {
            var b;
            if (!Td) {
                var d = Qd();
                Ad = a.jQuery,
                t(d) && (Ad = null === d ? c : a[d]),
                Ad && Ad.fn.on ? (zd = Ad, l(Ad.fn, {
                    scope: me.scope,
                    isolateScope: me.isolateScope,
                    controller: me.controller,
                    injector: me.injector,
                    inheritedData: me.inheritedData
                }), b = Ad.cleanData, Ad.cleanData = function (a) {
                    var c;
                    if (Kd) Kd = !1;
                    else for (var d, e = 0; null != (d = a[e]); e++) c = Ad._data(d, 'events'),
                        c && c.$destroy && Ad(d).triggerHandler('$destroy');
                    b(a)
                })  : zd = Aa,
                Id.element = zd,
                Td = !0
            }
        }
        function ka(a, b, c) {
            if (!a) throw Hd('areq', 'Argument \'{0}\' is {1}', b || '?', c || 'required');
            return a
        }
        function la(a, b, c) {
            return c && Ld(a) && (a = a[a.length - 1]),
            ka(z(a), b, 'not a function, got ' + (a && 'object' == typeof a ? a.constructor.name || 'Object' : typeof a)),
            a
        }
        function ma(a, b) {
            if ('hasOwnProperty' === a) throw Hd('badname', 'hasOwnProperty is not a valid {0} name', b)
        }
        function na(a, b, c) {
            if (!b) return a;
            for (var d, e = b.split('.'), f = a, g = e.length, h = 0; g > h; h++) d = e[h],
                a && (a = (f = a) [d]);
            return !c && z(a) ? S(f, a)  : a
        }
        function oa(a) {
            var b = a[0],
            c = a[a.length - 1],
            d = [
                b
            ];
            do {
                if (b = b.nextSibling, !b) break;
                d.push(b)
            } while (b !== c);
            return zd(d)
        }
        function pa() {
            return Object.create(null)
        }
        function qa(a) {
            function b(a, b, c) {
                return a[b] || (a[b] = c())
            }
            var c = d('$injector'),
            e = d('ng'),
            f = b(a, 'angular', Object);
            return f.$$minErr = f.$$minErr || d,
            b(f, 'module', function () {
                var a = {
                };
                return function (d, f, g) {
                    var h = function (a, b) {
                        if ('hasOwnProperty' === a) throw e('badname', 'hasOwnProperty is not a valid {0} name', b)
                    };
                    return h(d, 'module'),
                    f && a.hasOwnProperty(d) && (a[d] = null),
                    b(a, d, function () {
                        function a(a, c, d, e) {
                            return e || (e = b),
                            function () {
                                return e[d || 'push']([a,
                                        c,
                                        arguments]),
                                j
                            }
                        }
                        if (!f) throw c('nomod', 'Module \'{0}\' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.', d);
                        var b = [
                        ],
                        e = [
                        ],
                        h = [
                        ],
                        i = a('$injector', 'invoke', 'push', e),
                        j = {
                            _invokeQueue: b,
                            _configBlocks: e,
                            _runBlocks: h,
                            requires: f,
                            name: d,
                            provider: a('$provide', 'provider'),
                            factory: a('$provide', 'factory'),
                            service: a('$provide', 'service'),
                            value: a('$provide', 'value'),
                            constant: a('$provide', 'constant', 'unshift'),
                            decorator: a('$provide', 'decorator'),
                            animation: a('$animateProvider', 'register'),
                            filter: a('$filterProvider', 'register'),
                            controller: a('$controllerProvider', 'register'),
                            directive: a('$compileProvider', 'directive'),
                            config: i,
                            run: function (a) {
                                return h.push(a),
                                this
                            }
                        };
                        return g && i(g),
                        j
                    })
                }
            })
        }
        function ra(a) {
            var b = [
            ];
            return JSON.stringify(a, function (a, c) {
                if (c = T(a, c), u(c)) {
                    if (b.indexOf(c) >= 0) return '<<already seen>>';
                    b.push(c)
                }
                return c
            })
        }
        function sa(a) {
            return 'function' == typeof a ? a.toString().replace(/ \{[\s\S]*$/, '')  : 'undefined' == typeof a ? 'undefined' : 'string' != typeof a ? ra(a)  : a
        }
        function ta(b) {
            l(b, {
                bootstrap: fa,
                copy: N,
                extend: l,
                merge: m,
                equals: P,
                element: zd,
                forEach: f,
                injector: Ya,
                noop: p,
                bind: S,
                toJson: U,
                fromJson: V,
                identity: q,
                isUndefined: s,
                isDefined: t,
                isString: w,
                isFunction: z,
                isObject: u,
                isNumber: x,
                isElement: J,
                isArray: Ld,
                version: $d,
                isDate: y,
                lowercase: td,
                uppercase: vd,
                callbacks: {
                    counter: 0
                },
                getTestability: ha,
                $$minErr: d,
                $$csp: Pd,
                reloadWithDebugInfo: ga
            }),
            Bd = qa(a);
            try {
                Bd('ngLocale')
            } catch (c) {
                Bd('ngLocale', [
                ]).provider('$locale', Eb)
            }
            Bd('ng', [
                    'ngLocale'
            ], [
            '$provide',
            function (a) {
                a.provider({
                    $$sanitizeUri: pc
                }),
                a.provider('$compile', hb).directive({
                    a: jf,
                    input: Af,
                    textarea: Af,
                    form: of,
                    script: sg,
                    select: vg,
                    style: xg,
                    option: wg,
                    ngBind: Df,
                    ngBindHtml: Ff,
                    ngBindTemplate: Ef,
                    ngClass: Hf,
                    ngClassEven: Jf,
                    ngClassOdd: If,
                    ngCloak: Kf,
                    ngController: Lf,
                    ngForm: pf,
                    ngHide: mg,
                    ngIf: Of,
                    ngInclude: Pf,
                    ngInit: Rf,
                    ngNonBindable: dg,
                    ngPluralize: hg,
                    ngRepeat: ig,
                    ngShow: lg,
                    ngStyle: ng,
                    ngSwitch: og,
                    ngSwitchWhen: pg,
                    ngSwitchDefault: qg,
                    ngOptions: gg,
                    ngTransclude: rg,
                    ngModel: ag,
                    ngList: Sf,
                    ngChange: Gf,
                    pattern: zg,
                    ngPattern: zg,
                    required: yg,
                    ngRequired: yg,
                    minlength: Bg,
                    ngMinlength: Bg,
                    maxlength: Ag,
                    ngMaxlength: Ag,
                    ngValue: Cf,
                    ngModelOptions: cg
                }).directive({
                    ngInclude: Qf
                }).directive(kf).directive(Mf),
                    a.provider({
                        $anchorScroll: Za,
                        $animate: Be,
                        $$animateQueue: Ae,
                        $$AnimateRunner: ze,
                        $browser: eb,
                        $cacheFactory: fb,
                        $controller: mb,
                        $document: nb,
                        $exceptionHandler: ob,
                        $filter: Dc,
                        $interpolate: Cb,
                        $interval: Db,
                        $http: yb,
                        $httpParamSerializer: qb,
                        $httpParamSerializerJQLike: rb,
                        $httpBackend: Ab,
                        $location: Sb,
                        $log: Tb,
                        $parse: jc,
                        $rootScope: oc,
                        $q: kc,
                        $$q: lc,
                        $sce: tc,
                        $sceDelegate: sc,
                        $sniffer: uc,
                        $templateCache: gb,
                        $templateRequest: vc,
                        $$testability: wc,
                        $timeout: xc,
                        $window: Ac,
                        $$rAF: nc,
                        $$asyncCallback: cb,
                        $$jqLite: Ta,
                        $$HashMap: qe,
                        $$cookieReader: Cc
                    })
            }
            ])
        }
        function ua() {
            return ++ae
        }
        function va(a) {
            return a.replace(de, function (a, b, c, d) {
                return d ? c.toUpperCase()  : c
            }).replace(ee, 'Moz$1')
        }
        function wa(a) {
            return !ie.test(a)
        }
        function xa(a) {
            var b = a.nodeType;
            return b === Ud || !b || b === Yd
        }
        function ya(a, b) {
            var c,
            d,
            e,
            g,
            h = b.createDocumentFragment(),
            i = [
            ];
            if (wa(a)) i.push(b.createTextNode(a));
            else {
                for (c = c || h.appendChild(b.createElement('div')), d = (je.exec(a) || ['',
                            '']) [1].toLowerCase(), e = le[d] || le._default, c.innerHTML = e[1] + a.replace(ke, '<$1></$2>') + e[2], g = e[0]; g--; ) c = c.lastChild;
                i = Q(i, c.childNodes),
                c = h.firstChild,
                c.textContent = ''
            }
            return h.textContent = '',
            h.innerHTML = '',
            f(i, function (a) {
                h.appendChild(a)
            }),
            h
        }
        function za(a, c) {
            c = c || b;
            var d;
            return (d = he.exec(a)) ? [
                c.createElement(d[1])
            ] : (d = ya(a, c)) ? d.childNodes : [
            ]
        }
        function Aa(a) {
            if (a instanceof Aa) return a;
            var b;
            if (w(a) && (a = Nd(a), b = !0), !(this instanceof Aa)) {
                if (b && '<' != a.charAt(0)) throw ge('nosel', 'Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element');
                return new Aa(a)
            }
            b ? Ka(this, za(a))  : Ka(this, a)
        }
        function Ba(a) {
            return a.cloneNode(!0)
        }
        function Ca(a, b) {
            if (b || Ea(a), a.querySelectorAll) for (var c = a.querySelectorAll('*'), d = 0, e = c.length; e > d; d++) Ea(c[d])
        }
        function Da(a, b, c, d) {
            if (t(d)) throw ge('offargs', 'jqLite#off() does not support the `selector` argument');
            var e = Fa(a),
                g = e && e.events,
                h = e && e.handle;
            if (h) if (b) f(b.split(' '), function (b) {
                if (t(c)) {
                    var d = g[b];
                    if (M(d || [], c), d && d.length > 0) return
                }
                ce(a, b, h),
                delete g[b]
            });
            else for (b in g) '$destroy' !== b && ce(a, b, h),
            delete g[b]
        }
        function Ea(a, b) {
            var d = a.ng339,
            e = d && _d[d];
            if (e) {
                if (b) return void delete e.data[b];
                e.handle && (e.events.$destroy && e.handle({
                }, '$destroy'), Da(a)),
                    delete _d[d],
                    a.ng339 = c
            }
        }
        function Fa(a, b) {
            var d = a.ng339,
            e = d && _d[d];
            return b && !e && (a.ng339 = d = ua(), e = _d[d] = {
                events: {
                },
                data: {
                },
                handle: c
            }),
            e
        }
        function Ga(a, b, c) {
            if (xa(a)) {
                var d = t(c),
                    e = !d && b && !u(b),
                    f = !b,
                    g = Fa(a, !e),
                    h = g && g.data;
                if (d) h[b] = c;
                else {
                    if (f) return h;
                    if (e) return h && h[b];
                    l(h, b)
                }
            }
        }
        function Ha(a, b) {
            return a.getAttribute ? (' ' + (a.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + b + ' ') > - 1 : !1
        }
        function Ia(a, b) {
            b && a.setAttribute && f(b.split(' '), function (b) {
                a.setAttribute('class', Nd((' ' + (a.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').replace(' ' + Nd(b) + ' ', ' ')))
            })
        }
        function Ja(a, b) {
            if (b && a.setAttribute) {
                var c = (' ' + (a.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ');
                f(b.split(' '), function (a) {
                    a = Nd(a),
                    - 1 === c.indexOf(' ' + a + ' ') && (c += a + ' ')
                }),
                a.setAttribute('class', Nd(c))
            }
        }
        function Ka(a, b) {
            if (b) if (b.nodeType) a[a.length++] = b;
            else {
                var c = b.length;
                if ('number' == typeof c && b.window !== b) {
                    if (c) for (var d = 0; c > d; d++) a[a.length++] = b[d]
                } else a[a.length++] = b
            }
        }
        function La(a, b) {
            return Ma(a, '$' + (b || 'ngController') + 'Controller')
        }
        function Ma(a, b, d) {
            a.nodeType == Yd && (a = a.documentElement);
            for (var e = Ld(b) ? b : [
                    b
            ]; a; ) {
                for (var f = 0, g = e.length; g > f; f++) if ((d = zd.data(a, e[f])) !== c) return d;
                a = a.parentNode || a.nodeType === Zd && a.host
            }
        }
        function Na(a) {
            for (Ca(a, !0); a.firstChild; ) a.removeChild(a.firstChild)
        }
        function Oa(a, b) {
            b || Ca(a);
            var c = a.parentNode;
            c && c.removeChild(a)
        }
        function Pa(b, c) {
            c = c || a,
            'complete' === c.document.readyState ? c.setTimeout(b)  : zd(c).on('load', b)
        }
        function Qa(a, b) {
            var c = ne[b.toLowerCase()];
            return c && oe[L(a)] && c
        }
        function Ra(a, b) {
            var c = a.nodeName;
            return ('INPUT' === c || 'TEXTAREA' === c) && pe[b]
        }
        function Sa(a, b) {
            var c = function (c, d) {
                c.isDefaultPrevented = function () {
                    return c.defaultPrevented
                };
                var e = b[d || c.type],
                f = e ? e.length : 0;
                if (f) {
                    if (s(c.immediatePropagationStopped)) {
                        var g = c.stopImmediatePropagation;
                        c.stopImmediatePropagation = function () {
                            c.immediatePropagationStopped = !0,
                            c.stopPropagation && c.stopPropagation(),
                            g && g.call(c)
                        }
                    }
                    c.isImmediatePropagationStopped = function () {
                        return c.immediatePropagationStopped === !0
                    },
                    f > 1 && (e = O(e));
                    for (var h = 0; f > h; h++) c.isImmediatePropagationStopped() || e[h].call(a, c)
                }
            };
            return c.elem = a,
            c
        }
        function Ta() {
            this.$get = function () {
                return l(Aa, {
                    hasClass: function (a, b) {
                        return a.attr && (a = a[0]),
                        Ha(a, b)
                    },
                    addClass: function (a, b) {
                        return a.attr && (a = a[0]),
                        Ja(a, b)
                    },
                    removeClass: function (a, b) {
                        return a.attr && (a = a[0]),
                        Ia(a, b)
                    }
                })
            }
        }
        function Ua(a, b) {
            var c = a && a.$$hashKey;
            if (c) return 'function' == typeof c && (c = a.$$hashKey()),
            c;
            var d = typeof a;
            return c = 'function' == d || 'object' == d && null !== a ? a.$$hashKey = d + ':' + (b || i) ()  : d + ':' + a
        }
        function Va(a, b) {
            if (b) {
                var c = 0;
                this.nextUid = function () {
                    return ++c
                }
            }
            f(a, this.put, this)
        }
        function Wa(a) {
            var b = a.toString().replace(ue, ''),
            c = b.match(re);
            return c ? 'function(' + (c[1] || '').replace(/[\s\r\n]+/, ' ') + ')' : 'fn'
                    }
                    function Xa(a, b, c) {
                        var d,
                        e,
                        g,
                        h;
                        if ('function' == typeof a) {
                            if (!(d = a.$inject)) {
                                if (d = [
                                ], a.length) {
                                    if (b) throw w(c) && c || (c = a.name || Wa(a)),
                                    ve('strictdi', '{0} is not using explicit annotation and cannot be invoked in strict mode', c);
                                    e = a.toString().replace(ue, ''),
                                    g = e.match(re),
                                    f(g[1].split(se), function (a) {
                                        a.replace(te, function (a, b, c) {
                                            d.push(c)
                                        })
                                    })
                                }
                                a.$inject = d
                            }
                        } else Ld(a) ? (h = a.length - 1, la(a[h], 'fn'), d = a.slice(0, h))  : la(a, 'fn', !0);
                        return d
                    }
                    function Ya(a, b) {
                        function d(a) {
                            return function (b, c) {
                                return u(b) ? void f(b, h(a))  : a(b, c)
                            }
                        }
                        function e(a, b) {
                            if (ma(a, 'service'), (z(b) || Ld(b)) && (b = A.instantiate(b)), !b.$get) throw ve('pget', 'Provider \'{0}\' must define $get factory method.', a);
                            return y[a + t] = b
                        }
                        function g(a, b) {
                            return function () {
                                var c = C.invoke(b, this);
                                if (s(c)) throw ve('undef', 'Provider \'{0}\' must return a value from $get factory method.', a);
                                return c
                            }
                        }
                        function i(a, b, c) {
                            return e(a, {
                                $get: c !== !1 ? g(a, b)  : b
                            })
                        }
                        function j(a, b) {
                            return i(a, [
                                    '$injector',
                                    function (a) {
                                        return a.instantiate(b)
                                    }
                            ])
                        }
                        function k(a, b) {
                            return i(a, r(b), !1)
                        }
                        function l(a, b) {
                            ma(a, 'constant'),
                            y[a] = b,
                            B[a] = b
                        }
                        function m(a, b) {
                            var c = A.get(a + t),
                            d = c.$get;
                            c.$get = function () {
                                var a = C.invoke(d, c);
                                return C.invoke(b, null, {
                                    $delegate: a
                                })
                            }
                        }
                        function n(a) {
                            var b,
                            c = [
                            ];
                            return f(a, function (a) {
                                function d(a) {
                                    var b,
                                    c;
                                    for (b = 0, c = a.length; c > b; b++) {
                                        var d = a[b],
                                            e = A.get(d[0]);
                                        e[d[1]].apply(e, d[2])
                                    }
                                }
                                if (!x.get(a)) {
                                    x.put(a, !0);
                                    try {
                                        w(a) ? (b = Bd(a), c = c.concat(n(b.requires)).concat(b._runBlocks), d(b._invokeQueue), d(b._configBlocks))  : z(a) ? c.push(A.invoke(a))  : Ld(a) ? c.push(A.invoke(a))  : la(a, 'module')
                                    } catch (e) {
                                        throw Ld(a) && (a = a[a.length - 1]),
                                        e.message && e.stack && - 1 == e.stack.indexOf(e.message) && (e = e.message + '\n' + e.stack),
                                        ve('modulerr', 'Failed to instantiate module {0} due to:\n{1}', a, e.stack || e.message || e)
                                    }
                                }
                            }),
                            c
                        }
                        function o(a, c) {
                            function d(b, d) {
                                if (a.hasOwnProperty(b)) {
                                    if (a[b] === q) throw ve('cdep', 'Circular dependency found: {0}', b + ' <- ' + v.join(' <- '));
                                    return a[b]
                                }
                                try {
                                    return v.unshift(b),
                                    a[b] = q,
                                    a[b] = c(b, d)
                                } catch (e) {
                                    throw a[b] === q && delete a[b],
                                    e
                                } finally {
                                    v.shift()
                                }
                            }
                            function e(a, c, e, f) {
                                'string' == typeof e && (f = e, e = null);
                                var g,
                                h,
                                i,
                                j = [
                                ],
                                k = Ya.$$annotate(a, b, f);
                                for (h = 0, g = k.length; g > h; h++) {
                                    if (i = k[h], 'string' != typeof i) throw ve('itkn', 'Incorrect injection token! Expected service name as string, got {0}', i);
                                    j.push(e && e.hasOwnProperty(i) ? e[i] : d(i, f))
                                }
                                return Ld(a) && (a = a[g]),
                                a.apply(c, j)
                            }
                            function f(a, b, c) {
                                var d = Object.create((Ld(a) ? a[a.length - 1] : a).prototype || null),
                                f = e(a, d, b, c);
                                return u(f) || z(f) ? f : d
                            }
                            return {
                                invoke: e,
                                instantiate: f,
                                get: d,
                                annotate: Ya.$$annotate,
                                has: function (b) {
                                    return y.hasOwnProperty(b + t) || a.hasOwnProperty(b)
                                }
                            }
                        }
                        b = b === !0;
                        var q = {
                        },
                        t = 'Provider',
                        v = [
                        ],
                        x = new Va([], !0),
                        y = {
                            $provide: {
                                provider: d(e),
                                factory: d(i),
                                service: d(j),
                                value: d(k),
                                constant: d(l),
                                decorator: m
                            }
                        },
                        A = y.$injector = o(y, function (a, b) {
                            throw Id.isString(b) && v.push(b),
                            ve('unpr', 'Unknown provider: {0}', v.join(' <- '))
                        }),
                        B = {
                        },
                        C = B.$injector = o(B, function (a, b) {
                            var d = A.get(a + t, b);
                            return C.invoke(d.$get, d, c, a)
                        });
                        return f(n(a), function (a) {
                            C.invoke(a || p)
                        }),
                        C
                    }
                    function Za() {
                        var a = !0;
                        this.disableAutoScrolling = function () {
                            a = !1
                        },
                        this.$get = [
                            '$window',
                            '$location',
                            '$rootScope',
                            function (b, c, d) {
                                function e(a) {
                                    var b = null;
                                    return Array.prototype.some.call(a, function (a) {
                                        return 'a' === L(a) ? (b = a, !0)  : void 0
                                    }),
                            b
                                }
                                function f() {
                                    var a = h.yOffset;
                                    if (z(a)) a = a();
                                    else if (J(a)) {
                                        var c = a[0],
                                            d = b.getComputedStyle(c);
                                        a = 'fixed' !== d.position ? 0 : c.getBoundingClientRect().bottom
                                    } else x(a) || (a = 0);
                                    return a
                                }
                                function g(a) {
                                    if (a) {
                                        a.scrollIntoView();
                                        var c = f();
                                        if (c) {
                                            var d = a.getBoundingClientRect().top;
                                            b.scrollBy(0, d - c)
                                        }
                                    } else b.scrollTo(0, 0)
                                }
                                function h(a) {
                                    a = w(a) ? a : c.hash();
                                    var b;
                                    a ? (b = i.getElementById(a)) ? g(b)  : (b = e(i.getElementsByName(a))) ? g(b)  : 'top' === a && g(null)  : g(null)
                                }
                                var i = b.document;
                                return a && d.$watch(function () {
                                    return c.hash()
                                }, function (a, b) {
                                    (a !== b || '' !== a) && Pa(function () {
                                        d.$evalAsync(h)
                                    })
                                }),
                                h
                            }
                        ]
                    }
                    function $a(a, b) {
                        return a || b ? a ? b ? (Ld(a) && (a = a.join(' ')), Ld(b) && (b = b.join(' ')), a + ' ' + b)  : a : b : ''
                    }
                    function _a(a) {
                        for (var b = 0; b < a.length; b++) {
                            var c = a[b];
                            if (c.nodeType === xe) return c
                        }
                    }
                    function ab(a) {
                        w(a) && (a = a.split(' '));
                        var b = pa();
                        return f(a, function (a) {
                            a.length && (b[a] = !0)
                        }),
                        b
                    }
                    function bb(a) {
                        return u(a) ? a : {
                        }
                    }
                    function cb() {
                        this.$get = [
                            '$$rAF',
                            '$timeout',
                            function (a, b) {
                                return a.supported ? function (b) {
                                    return a(b)
                                }
                                : function (a) {
                                    return b(a, 0, !1)
                                }
                            }
                        ]
                    }
                    function db(a, b, c, d) {
                        function e(a) {
                            try {
                                a.apply(null, R(arguments, 1))
                            } finally {
                                if (t--, 0 === t) for (; u.length; ) try {
                                    u.pop() ()
                                } catch (b) {
                                    c.error(b)
                                }
                            }
                        }
                        function g(a) {
                            var b = a.indexOf('#');
                            return - 1 === b ? '' : a.substr(b + 1)
                        }
                        function h() {
                            j(),
                            k()
                        }
                        function i() {
                            try {
                                return n.state
                            } catch (a) {
                            }
                        }
                        function j() {
                            v = i(),
                            v = s(v) ? null : v,
                            P(v, C) && (v = C),
                            C = v
                        }
                        function k() {
                            (x !== l.url() || w !== v) && (x = l.url(), w = v, f(A, function (a) {
                                a(l.url(), v)
                            }))
                        }
                        var l = this,
                        m = (b[0], a.location),
                        n = a.history,
                        o = a.setTimeout,
                        q = a.clearTimeout,
                        r = {
                        };
                        l.isMock = !1;
                        var t = 0,
                        u = [
                        ];
                        l.$$completeOutstandingRequest = e,
                        l.$$incOutstandingRequestCount = function () {
                            t++
                        },
                        l.notifyWhenNoOutstandingRequests = function (a) {
                            0 === t ? a()  : u.push(a)
                        };
                        var v,
                        w,
                        x = m.href,
                        y = b.find('base'),
                        z = null;
                        j(),
                        w = v,
                        l.url = function (b, c, e) {
                            if (s(e) && (e = null), m !== a.location && (m = a.location), n !== a.history && (n = a.history), b) {
                                var f = w === e;
                                if (x === b && (!d.history || f)) return l;
                                var h = x && Jb(x) === Jb(b);
                                return x = b,
                                w = e,
                                !d.history || h && f ? (h || (z = b), c ? m.replace(b)  : h ? m.hash = g(b)  : m.href = b)  : (n[c ? 'replaceState' : 'pushState'](e, '', b), j(), w = v),
                                l
                            }
                            return z || m.href.replace(/%27/g, '\'')
                        },
                        l.state = function () {
                            return v
                        };
                        var A = [
                        ],
                        B = !1,
                        C = null;
                        l.onUrlChange = function (b) {
                            return B || (d.history && zd(a).on('popstate', h), zd(a).on('hashchange', h), B = !0),
                            A.push(b),
                            b
                        },
                        l.$$applicationDestroyed = function () {
                            zd(a).off('hashchange popstate', h)
                        },
                        l.$$checkUrlChange = k,
                        l.baseHref = function () {
                            var a = y.attr('href');
                            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, '')  : ''
                        },
                        l.defer = function (a, b) {
                            var c;
                            return t++,
                            c = o(function () {
                                delete r[c],
                                e(a)
                            }, b || 0),
                            r[c] = !0,
                            c
                        },
                        l.defer.cancel = function (a) {
                            return r[a] ? (delete r[a], q(a), e(p), !0)  : !1
                        }
                    }
                    function eb() {
                        this.$get = [
                            '$window',
                            '$log',
                            '$sniffer',
                            '$document',
                            function (a, b, c, d) {
                                return new db(a, d, b, c)
                            }
                        ]
                    }
                    function fb() {
                        this.$get = function () {
                            function a(a, c) {
                                function e(a) {
                                    a != m && (n ? n == a && (n = a.n)  : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
                                }
                                function f(a, b) {
                                    a != b && (a && (a.p = b), b && (b.n = a))
                                }
                                if (a in b) throw d('$cacheFactory') ('iid', 'CacheId \'{0}\' is already taken!', a);
                                var g = 0,
                                    h = l({
                                    }, c, {
                                        id: a
                                    }),
                                    i = {
                                    },
                                    j = c && c.capacity || Number.MAX_VALUE,
                                    k = {
                                    },
                                    m = null,
                                    n = null;
                                return b[a] = {
                                    put: function (a, b) {
                                        if (!s(b)) {
                                            if (j < Number.MAX_VALUE) {
                                                var c = k[a] || (k[a] = {
                                                    key: a
                                                });
                                                e(c)
                                            }
                                            return a in i || g++,
                                            i[a] = b,
                                            g > j && this.remove(n.key),
                                            b
                                        }
                                    },
                                    get: function (a) {
                                        if (j < Number.MAX_VALUE) {
                                            var b = k[a];
                                            if (!b) return;
                                            e(b)
                                        }
                                        return i[a]
                                    },
                                    remove: function (a) {
                                        if (j < Number.MAX_VALUE) {
                                            var b = k[a];
                                            if (!b) return;
                                            b == m && (m = b.p),
                                                b == n && (n = b.n),
                                                f(b.n, b.p),
                                                delete k[a]
                                        }
                                        delete i[a],
                                        g--
                                    },
                                    removeAll: function () {
                                        i = {
                                        },
                                        g = 0,
                                        k = {
                                        },
                                        m = n = null
                                    },
                                    destroy: function () {
                                        i = null,
                                        h = null,
                                        k = null,
                                        delete b[a]
                                    },
                                    info: function () {
                                        return l({
                                        }, h, {
                                            size: g
                                        })
                                    }
                                }
                            }
                            var b = {
                            };
                            return a.info = function () {
                                var a = {
                                };
                                return f(b, function (b, c) {
                                    a[c] = b.info()
                                }),
                                a
                            },
                            a.get = function (a) {
                                return b[a]
                            },
                            a
                        }
                    }
                    function gb() {
                        this.$get = [
                            '$cacheFactory',
                            function (a) {
                                return a('templates')
                            }
                        ]
                    }
                    function hb(a, d) {
                        function e(a, b, c) {
                            var d = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
                            e = {
                            };
                            return f(a, function (a, f) {
                                var g = a.match(d);
                                if (!g) throw Ce('iscp', 'Invalid {3} for directive \'{0}\'. Definition: {... {1}: \'{2}\' ...}', b, f, a, c ? 'controller bindings definition' : 'isolate scope definition');
                                e[f] = {
                                    mode: g[1][0],
                                    collection: '*' === g[2],
                                    optional: '?' === g[3],
                                    attrName: g[4] || f
                                }
                            }),
                            e
                        }
                        function g(a, b) {
                            var c = {
                                isolateScope: null,
                                bindToController: null
                            };
                            if (u(a.scope) && (a.bindToController === !0 ? (c.bindToController = e(a.scope, b, !0), c.isolateScope = {
                            })  : c.isolateScope = e(a.scope, b, !1)), u(a.bindToController) && (c.bindToController = e(a.bindToController, b, !0)), u(c.bindToController)) {
                                var d = a.controller,
                                f = a.controllerAs;
                                if (!d) throw Ce('noctrl', 'Cannot bind to controller without directive \'{0}\'s controller.', b);
                                if (!lb(d, f)) throw Ce('noident', 'Cannot bind to controller without identifier for directive \'{0}\'.', b)
                            }
                            return c
                        }
                        function i(a) {
                            var b = a.charAt(0);
                            if (!b || b !== td(b)) throw Ce('baddir', 'Directive name \'{0}\' is invalid. The first character must be a lowercase letter', a);
                            if (a !== a.trim()) throw Ce('baddir', 'Directive name \'{0}\' is invalid. The name should not contain leading or trailing whitespaces', a)
                        }
                        var j = {
                        },
                        k = 'Directive',
                        m = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
                        n = /(([\w\-]+)(?:\:([^;]+))?;?)/,
                        s = K('ngSrc,ngSrcset,src,srcset'),
                        v = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
                        x = /^(on[a-z]+|formaction)$/;
                        this.directive = function A(b, c) {
                            return ma(b, 'directive'),
                            w(b) ? (i(b), ka(c, 'directiveFactory'), j.hasOwnProperty(b) || (j[b] = [
                            ], a.factory(b + k, [
                                '$injector',
                                '$exceptionHandler',
                                function (a, c) {
                                    var d = [
                                    ];
                                    return f(j[b], function (e, f) {
                                        try {
                                            var h = a.invoke(e);
                                            z(h) ? h = {
                                                compile: r(h)
                                            }
                                            : !h.compile && h.link && (h.compile = r(h.link)),
                                            h.priority = h.priority || 0,
                                            h.index = f,
                                            h.name = h.name || b,
                                            h.require = h.require || h.controller && h.name,
                                            h.restrict = h.restrict || 'EA';
                                            var i = h.$$bindings = g(h, h.name);
                                            u(i.isolateScope) && (h.$$isolateBindings = i.isolateScope),
                                            d.push(h)
                                        } catch (j) {
                                            c(j)
                                        }
                                    }),
                                d
                                }
                            ])), j[b].push(c))  : f(b, h(A)),
                            this
                        },
                        this.aHrefSanitizationWhitelist = function (a) {
                            return t(a) ? (d.aHrefSanitizationWhitelist(a), this)  : d.aHrefSanitizationWhitelist()
                        },
                        this.imgSrcSanitizationWhitelist = function (a) {
                            return t(a) ? (d.imgSrcSanitizationWhitelist(a), this)  : d.imgSrcSanitizationWhitelist()
                        };
                        var y = !0;
                        this.debugInfoEnabled = function (a) {
                            return t(a) ? (y = a, this)  : y
                        },
                        this.$get = [
                            '$injector',
                            '$interpolate',
                            '$exceptionHandler',
                            '$templateRequest',
                            '$parse',
                            '$controller',
                            '$rootScope',
                            '$document',
                            '$sce',
                            '$animate',
                            '$$sanitizeUri',
                            function (a, d, e, g, h, i, r, t, A, B, D) {
                                function E(a, b) {
                                    try {
                                        a.addClass(b)
                                    } catch (c) {
                                    }
                                }
                                function F(a, b, c, d, e) {
                                    a instanceof zd || (a = zd(a)),
                                    f(a, function (b, c) {
                                        b.nodeType == Wd && b.nodeValue.match(/\S+/) && (a[c] = zd(b).wrap('<span></span>').parent() [0])
                                    });
                                    var g = H(a, b, a, c, d, e);
                                    F.$$addScopeClass(a);
                                    var h = null;
                                    return function (b, c, d) {
                                        ka(b, 'scope'),
                                        d = d || {
                                        };
                                        var e = d.parentBoundTranscludeFn,
                                        f = d.transcludeControllers,
                                        i = d.futureParentElement;
                                        e && e.$$boundTransclude && (e = e.$$boundTransclude),
                                        h || (h = G(i));
                                        var j;
                                        if (j = 'html' !== h ? zd($(h, zd('<div>').append(a).html()))  : c ? me.clone.call(a)  : a, f) for (var k in f) j.data('$' + k + 'Controller', f[k].instance);
                                        return F.$$addScopeInfo(j, b),
                                            c && c(j, b),
                                            g && g(b, j, j, e),
                                            j
                                    }
                                }
                                function G(a) {
                                    var b = a && a[0];
                                    return b && 'foreignobject' !== L(b) && b.toString().match(/SVG/) ? 'svg' : 'html'
                                }
                                function H(a, b, d, e, f, g) {
                                    function h(a, d, e, f) {
                                        var g,
                                        h,
                                        i,
                                        j,
                                        k,
                                        l,
                                        m,
                                        n,
                                        q;
                                        if (o) {
                                            var r = d.length;
                                            for (q = new Array(r), k = 0; k < p.length; k += 3) m = p[k],
                                            q[m] = d[m]
                                        } else q = d;
                                        for (k = 0, l = p.length; l > k; ) if (i = q[p[k++]], g = p[k++], h = p[k++], g) {
                                            if (g.scope) {
                                                j = a.$new(),
                                                    F.$$addScopeInfo(zd(i), j);
                                                var s = g.$$destroyBindings;
                                                s && (g.$$destroyBindings = null, j.$on('$destroyed', s))
                                            } else j = a;
                                            n = g.transcludeOnThisElement ? I(a, g.transclude, f, g.elementTranscludeOnThisElement)  : !g.templateOnThisElement && f ? f : !f && b ? I(a, b)  : null,
                                                g(h, j, i, e, n, g)
                                        } else h && h(a, i.childNodes, c, f)
                                    }
                                    for (var i, j, k, l, m, n, o, p = [
                                    ], q = 0; q < a.length; q++) i = new fa,
                                    j = J(a[q], [
                                    ], i, 0 === q ? e : c, f),
                                    k = j.length ? O(j, a[q], i, b, d, null, [
                                    ], [
                                    ], g)  : null,
                                    k && k.scope && F.$$addScopeClass(i.$$element),
                                    m = k && k.terminal || !(l = a[q].childNodes) || !l.length ? null : H(l, k ? (k.transcludeOnThisElement || !k.templateOnThisElement) && k.transclude : b),
                                    (k || m) && (p.push(q, k, m), n = !0, o = o || k),
                                    g = null;
                                    return n ? h : null
                                }
                                function I(a, b, c, d) {
                                    var e = function (d, e, f, g, h) {
                                        return d || (d = a.$new(!1, h), d.$$transcluded = !0),
                                        b(d, e, {
                                            parentBoundTranscludeFn: c,
                                            transcludeControllers: f,
                                            futureParentElement: g
                                        })
                                    };
                                    return e
                                }
                                function J(a, b, c, d, e) {
                                    var f,
                                    g,
                                    h = a.nodeType,
                                    i = c.$attr;
                                    switch (h) {
                                        case Ud:
                                            S(b, ib(L(a)), 'E', d, e);
                                            for (var j, k, l, o, p, q, r = a.attributes, s = 0, t = r && r.length; t > s; s++) {
                                                var v = !1,
                                                    x = !1;
                                                j = r[s],
                                                k = j.name,
                                                p = Nd(j.value),
                                                o = ib(k),
                                                (q = la.test(o)) && (k = k.replace(De, '').substr(8).replace(/_(.)/g, function (a, b) {
                                                    return b.toUpperCase()
                                                }));
                                                var y = o.replace(/(Start|End)$/, '');
                                                T(y) && o === y + 'Start' && (v = k, x = k.substr(0, k.length - 5) + 'end', k = k.substr(0, k.length - 6)),
                                                l = ib(k.toLowerCase()),
                                                i[l] = k,
                                                (q || !c.hasOwnProperty(l)) && (c[l] = p, Qa(a, l) && (c[l] = !0)),
                                                aa(a, b, p, l, q),
                                                S(b, l, 'A', d, e, v, x)
                                            }
                                            if (g = a.className, u(g) && (g = g.animVal), w(g) && '' !== g) for (; f = n.exec(g); ) l = ib(f[2]),
                                            S(b, l, 'C', d, e) && (c[l] = Nd(f[3])),
                                                g = g.substr(f.index + f[0].length);
                                            break;
                                        case Wd:
                                            Y(b, a.nodeValue);
                                            break;
                                        case Xd:
                                            try {
                                                f = m.exec(a.nodeValue),
                                                f && (l = ib(f[1]), S(b, l, 'M', d, e) && (c[l] = Nd(f[2])))
                                            } catch (z) {
                                            }
                                    }
                                    return b.sort(W),
                                    b
                                }
                                function K(a, b, c) {
                                    var d = [
                                    ],
                                    e = 0;
                                    if (b && a.hasAttribute && a.hasAttribute(b)) {
                                        do {
                                            if (!a) throw Ce('uterdir', 'Unterminated attribute, found \'{0}\' but no matching \'{1}\' found.', b, c);
                                            a.nodeType == Ud && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--),
                                                d.push(a),
                                                a = a.nextSibling
                                        } while (e > 0)
                                    } else d.push(a);
                                    return zd(d)
                                }
                                function N(a, b, c) {
                                    return function (d, e, f, g, h) {
                                        return e = K(e[0], b, c),
                                        a(d, e, f, g, h)
                                    }
                                }
                                function O(a, d, f, g, h, j, k, l, m) {
                                    function n(a, b, c, d) {
                                        a && (c && (a = N(a, c, d)), a.require = s.require, a.directiveName = t, (E === s || s.$$isolateScope) && (a = ca(a, {
                                            isolateScope: !0
                                        })), k.push(a)),
                                        b && (c && (b = N(b, c, d)), b.require = s.require, b.directiveName = t, (E === s || s.$$isolateScope) && (b = ca(b, {
                                            isolateScope: !0
                                        })), l.push(b))
                                    }
                                    function o(a, b, c, d) {
                                        var e;
                                        if (w(b)) {
                                            var f = b.match(v),
                                                g = b.substring(f[0].length),
                                                h = f[1] || f[3],
                                                i = '?' === f[2];
                                            if ('^^' === h ? c = c.parent()  : (e = d && d[g], e = e && e.instance), !e) {
                                                var j = '$' + g + 'Controller';
                                                e = h ? c.inheritedData(j)  : c.data(j)
                                            }
                                            if (!e && !i) throw Ce('ctreq', 'Controller \'{0}\', required by directive \'{1}\', can\'t be found!', g, a)
                                        } else if (Ld(b)) {
                                            e = [
                                            ];
                                            for (var k = 0, l = b.length; l > k; k++) e[k] = o(a, b[k], c, d)
                                        }
                                        return e || null
                                    }
                                    function p(a, b, c, d, e, f) {
                                        var g = pa();
                                        for (var h in d) {
                                            var j = d[h],
                                                k = {
                                                    $scope: j === E || j.$$isolateScope ? e : f,
                                                    $element: a,
                                                    $attrs: b,
                                                    $transclude: c
                                                },
                                                l = j.controller;
                                            '@' == l && (l = b[j.name]);
                                            var m = i(l, k, !0, j.controllerAs);
                                            g[j.name] = m,
                                            M || a.data('$' + j.name + 'Controller', m.instance)
                                        }
                                        return g
                                    }
                                    function q(a, b, e, g, h, i) {
                                        function j(a, b, d) {
                                            var e;
                                            return C(a) || (d = b, b = a, a = c),
                                            M && (e = v),
                                            d || (d = M ? x.parent()  : x),
                                            h(a, b, e, d, I)
                                        }
                                        var m,
                                        n,
                                        q,
                                        t,
                                        u,
                                        v,
                                        w,
                                        x,
                                        y;
                                        if (d === e ? (y = f, x = f.$$element)  : (x = zd(e), y = new fa(x, f)), E && (u = b.$new(!0)), h && (w = j, w.$$boundTransclude = h), D && (v = p(x, y, w, D, u, b)), E && (F.$$addScopeInfo(x, u, !0, !(G && (G === E || G === E.$$originalDirective))), F.$$addScopeClass(x, !0), u.$$isolateBindings = E.$$isolateBindings, ea(b, y, u, u.$$isolateBindings, E, u)), v) {
                                            var z,
                                                A,
                                                B = E || r;
                                            B && v[B.name] && (z = B.$$bindings.bindToController, t = v[B.name], t && t.identifier && z && (A = t, i.$$destroyBindings = ea(b, y, t.instance, z, B)));
                                            for (m in v) {
                                                t = v[m];
                                                var H = t();
                                                H !== t.instance && (t.instance = H, x.data('$' + s.name + 'Controller', H), t === A && (i.$$destroyBindings(), i.$$destroyBindings = ea(b, y, H, z, B)))
                                            }
                                        }
                                        for (m = 0, n = k.length; n > m; m++) q = k[m],
                                        da(q, q.isolateScope ? u : b, x, y, q.require && o(q.directiveName, q.require, x, v), w);
                                        var I = b;
                                        for (E && (E.template || null === E.templateUrl) && (I = u), a && a(I, e.childNodes, c, h), m = l.length - 1; m >= 0; m--) q = l[m],
                                        da(q, q.isolateScope ? u : b, x, y, q.require && o(q.directiveName, q.require, x, v), w)
                                    }
                                    m = m || {
                                    };
                                    for (var r, s, t, x, y, A, B = - Number.MAX_VALUE, D = m.controllerDirectives, E = m.newIsolateScopeDirective, G = m.templateDirective, H = m.nonTlbTranscludeDirective, I = !1, L = !1, M = m.hasElementTranscludeDirective, O = f.$$element = zd(d), P = j, S = g, T = 0, W = a.length; W > T; T++) {
                                        s = a[T];
                                        var Y = s.$$start,
                                        _ = s.$$end;
                                        if (Y && (O = K(d, Y, _)), x = c, B > s.priority) break;
                                        if ((A = s.scope) && (s.templateUrl || (u(A) ? (X('new/isolated scope', E || r, s, O), E = s)  : X('new/isolated scope', E, s, O)), r = r || s), t = s.name, !s.templateUrl && s.controller && (A = s.controller, D = D || pa(), X('\'' + t + '\' controller', D[t], s, O), D[t] = s), (A = s.transclude) && (I = !0, s.$$tlb || (X('transclusion', H, s, O), H = s), 'element' == A ? (M = !0, B = s.priority, x = O, O = f.$$element = zd(b.createComment(' ' + t + ': ' + f[t] + ' ')), d = O[0], ba(h, R(x), d), S = F(x, g, B, P && P.name, {
                                            nonTlbTranscludeDirective: H
                                        }))  : (x = zd(Ba(d)).contents(), O.empty(), S = F(x, g))), s.template) if (L = !0, X('template', G, s, O), G = s, A = z(s.template) ? s.template(O, f)  : s.template, A = ja(A), s.replace) {
                                            if (P = s, x = wa(A) ? [
                                            ] : kb($(s.templateNamespace, Nd(A))), d = x[0], 1 != x.length || d.nodeType !== Ud) throw Ce('tplrt', 'Template for directive \'{0}\' must have exactly one root element. {1}', t, '');
                                            ba(h, O, d);
                                            var aa = {
                                                $attr: {
                                                }
                                            },
                                            ga = J(d, [
                                            ], aa),
                                            ha = a.splice(T + 1, a.length - (T + 1));
                                            E && Q(ga),
                                            a = a.concat(ga).concat(ha),
                                            U(f, aa),
                                            W = a.length
                                        } else O.html(A);
                                        if (s.templateUrl) L = !0,
                                            X('template', G, s, O),
                                                G = s,
                                                s.replace && (P = s),
                                                q = V(a.splice(T, a.length - T), O, f, h, I && S, k, l, {
                                                    controllerDirectives: D,
                                                    newIsolateScopeDirective: E,
                                                    templateDirective: G,
                                                    nonTlbTranscludeDirective: H
                                                }),
                                                W = a.length;
                                        else if (s.compile) try {
                                            y = s.compile(O, f, S),
                                                z(y) ? n(null, y, Y, _)  : y && n(y.pre, y.post, Y, _)
                                        } catch (ia) {
                                            e(ia, Z(O))
                                        }
                                        s.terminal && (q.terminal = !0, B = Math.max(B, s.priority))
                                    }
                                    return q.scope = r && r.scope === !0,
                                    q.transcludeOnThisElement = I,
                                    q.elementTranscludeOnThisElement = M,
                                    q.templateOnThisElement = L,
                                    q.transclude = S,
                                    m.hasElementTranscludeDirective = M,
                                    q
                                }
                                function Q(a) {
                                    for (var b = 0, c = a.length; c > b; b++) a[b] = o(a[b], {
                                        $$isolateScope: !0
                                    })
                                }
                                function S(b, d, f, g, h, i, l) {
                                    if (d === h) return null;
                                    var m = null;
                                    if (j.hasOwnProperty(d)) for (var n, p = a.get(d + k), q = 0, r = p.length; r > q; q++) try {
                                        n = p[q],
                                            (g === c || g > n.priority) && - 1 != n.restrict.indexOf(f) && (i && (n = o(n, {
                                                $$start: i,
                                                $$end: l
                                            })), b.push(n), m = n)
                                    } catch (s) {
                                        e(s)
                                    }
                                    return m
                                }
                                function T(b) {
                                    if (j.hasOwnProperty(b)) for (var c, d = a.get(b + k), e = 0, f = d.length; f > e; e++) if (c = d[e], c.multiElement) return !0;
                                    return !1
                                }
                                function U(a, b) {
                                    var c = b.$attr,
                                    d = a.$attr,
                                    e = a.$$element;
                                    f(a, function (d, e) {
                                        '$' != e.charAt(0) && (b[e] && b[e] !== d && (d += ('style' === e ? ';' : ' ') + b[e]), a.$set(e, d, !0, c[e]))
                                    }),
                                    f(b, function (b, f) {
                                        'class' == f ? (E(e, b), a['class'] = (a['class'] ? a['class'] + ' ' : '') + b)  : 'style' == f ? (e.attr('style', e.attr('style') + ';' + b), a.style = (a.style ? a.style + ';' : '') + b)  : '$' == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                                    })
                                }
                                function V(a, b, c, d, e, h, i, j) {
                                    var k,
                                    l,
                                    m = [
                                    ],
                                    n = b[0],
                                    p = a.shift(),
                                    q = o(p, {
                                        templateUrl: null,
                                        transclude: null,
                                        replace: null,
                                        $$originalDirective: p
                                    }),
                                    r = z(p.templateUrl) ? p.templateUrl(b, c)  : p.templateUrl,
                                    s = p.templateNamespace;
                                    return b.empty(),
                                    g(A.getTrustedResourceUrl(r)).then(function (g) {
                                        var o,
                                        t,
                                        v,
                                        w;
                                        if (g = ja(g), p.replace) {
                                            if (v = wa(g) ? [
                                            ] : kb($(s, Nd(g))), o = v[0], 1 != v.length || o.nodeType !== Ud) throw Ce('tplrt', 'Template for directive \'{0}\' must have exactly one root element. {1}', p.name, r);
                                            t = {
                                                $attr: {
                                                }
                                            },
                                            ba(d, b, o);
                                            var x = J(o, [
                                            ], t);
                                            u(p.scope) && Q(x),
                                            a = x.concat(a),
                                            U(c, t)
                                        } else o = n,
                                        b.html(g);
                                        for (a.unshift(q), k = O(a, o, c, e, b, p, h, i, j), f(d, function (a, c) {
                                            a == o && (d[c] = b[0])
                                        }), l = H(b[0].childNodes, e); m.length; ) {
                                            var y = m.shift(),
                                            z = m.shift(),
                                            A = m.shift(),
                                            B = m.shift(),
                                            C = b[0];
                                            if (!y.$$destroyed) {
                                                if (z !== n) {
                                                    var D = z.className;
                                                    j.hasElementTranscludeDirective && p.replace || (C = Ba(o)),
                                                    ba(A, zd(z), C),
                                                    E(zd(C), D)
                                                }
                                                w = k.transcludeOnThisElement ? I(y, k.transclude, B)  : B,
                                                k(l, y, C, d, w, k)
                                            }
                                        }
                                        m = null
                                    }),
                                    function (a, b, c, d, e) {
                                        var f = e;
                                        b.$$destroyed || (m ? m.push(b, c, d, f)  : (k.transcludeOnThisElement && (f = I(b, k.transclude, e)), k(l, b, c, d, f, k)))
                                    }
                                }
                                function W(a, b) {
                                    var c = b.priority - a.priority;
                                    return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? - 1 : 1 : a.index - b.index
                                }
                                function X(a, b, c, d) {
                                    if (b) throw Ce('multidir', 'Multiple directives [{0}, {1}] asking for {2} on: {3}', b.name, c.name, a, Z(d))
                                }
                                function Y(a, b) {
                                    var c = d(b, !0);
                                    c && a.push({
                                        priority: 0,
                                        compile: function (a) {
                                            var b = a.parent(),
                                            d = !!b.length;
                                            return d && F.$$addBindingClass(b),
                                            function (a, b) {
                                                var e = b.parent();
                                                d || F.$$addBindingClass(e),
                                                F.$$addBindingInfo(e, c.expressions),
                                                a.$watch(c, function (a) {
                                                    b[0].nodeValue = a
                                                })
                                            }
                                        }
                                    })
                                }
                                function $(a, c) {
                                    switch (a = td(a || 'html')) {
                                        case 'svg':
                                        case 'math':
                                            var d = b.createElement('div');
                                            return d.innerHTML = '<' + a + '>' + c + '</' + a + '>',
                                            d.childNodes[0].childNodes;
                                        default:
                                            return c
                                    }
                                }
                                function _(a, b) {
                                    if ('srcdoc' == b) return A.HTML;
                                    var c = L(a);
                                    return 'xlinkHref' == b || 'form' == c && 'action' == b || 'img' != c && ('src' == b || 'ngSrc' == b) ? A.RESOURCE_URL : void 0
                                }
                                function aa(a, b, c, e, f) {
                                    var g = _(a, e);
                                    f = s[e] || f;
                                    var h = d(c, !0, g, f);
                                    if (h) {
                                        if ('multiple' === e && 'select' === L(a)) throw Ce('selmulti', 'Binding to the \'multiple\' attribute is not supported. Element: {0}', Z(a));
                                        b.push({
                                            priority: 100,
                                            compile: function () {
                                                return {
                                                    pre: function (a, b, i) {
                                                        var j = i.$$observers || (i.$$observers = {
                                                        });
                                                        if (x.test(e)) throw Ce('nodomevents', 'Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.');
                                                        var k = i[e];
                                                        k !== c && (h = k && d(k, !0, g, f), c = k),
                                                        h && (i[e] = h(a), (j[e] || (j[e] = [
                                                        ])).$$inter = !0, (i.$$observers && i.$$observers[e].$$scope || a).$watch(h, function (a, b) {
                                                            'class' === e && a != b ? i.$updateClass(a, b)  : i.$set(e, a)
                                                        }))
                                                    }
                                                }
                                            }
                                        })
                                    }
                                }
                                function ba(a, c, d) {
                                    var e,
                                    f,
                                    g = c[0],
                                    h = c.length,
                                    i = g.parentNode;
                                    if (a) for (e = 0, f = a.length; f > e; e++) if (a[e] == g) {
                                        a[e++] = d;
                                        for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++) l > k ? a[j] = a[k] : delete a[j];
                                        a.length -= h - 1,
                                            a.context === g && (a.context = d);
                                        break
                                    }
                                    i && i.replaceChild(d, g);
                                    var m = b.createDocumentFragment();
                                    m.appendChild(g),
                                    zd(d).data(zd(g).data()),
                                    Ad ? (Kd = !0, Ad.cleanData([g]))  : delete zd.cache[g[zd.expando]];
                                    for (var n = 1, o = c.length; o > n; n++) {
                                        var p = c[n];
                                        zd(p).remove(),
                                        m.appendChild(p),
                                        delete c[n]
                                    }
                                    c[0] = d,
                                    c.length = 1
                                }
                                function ca(a, b) {
                                    return l(function () {
                                        return a.apply(null, arguments)
                                    }, a, b)
                                }
                                function da(a, b, c, d, f, g) {
                                    try {
                                        a(b, c, d, f, g)
                                    } catch (h) {
                                        e(h, Z(c))
                                    }
                                }
                                function ea(a, b, c, e, g, i) {
                                    var j;
                                    f(e, function (e, f) {
                                        var i,
                                        k,
                                        l,
                                        m,
                                        n = e.attrName,
                                        o = e.optional,
                                        q = e.mode;
                                        switch (q) {
                                            case '@':
                                                b.$observe(n, function (a) {
                                                    c[f] = a
                                                }),
                                                b.$$observers[n].$$scope = a,
                                                b[n] && (c[f] = d(b[n]) (a));
                                                break;
                                            case '=':
                                                if (o && !b[n]) return;
                                                k = h(b[n]),
                                                    m = k.literal ? P : function (a, b) {
                                                        return a === b || a !== a && b !== b
                                                    },
                                                    l = k.assign || function () {
                                                        throw i = c[f] = k(a),
                                                        Ce('nonassign', 'Expression \'{0}\' used with directive \'{1}\' is non-assignable!', b[n], g.name)
                                                    },
                                                    i = c[f] = k(a);
                                                var r = function (b) {
                                                    return m(b, c[f]) || (m(b, i) ? l(a, b = c[f])  : c[f] = b),
                                                    i = b
                                                };
                                                r.$stateful = !0;
                                                var s;
                                                s = e.collection ? a.$watchCollection(b[n], r)  : a.$watch(h(b[n], r), null, k.literal),
                                                j = j || [],
                                                j.push(s);
                                                break;
                                            case '&':
                                                if (!b.hasOwnProperty(n) && o) break;
                                                if (k = h(b[n]), k === p && o) break;
                                                c[f] = function (b) {
                                                    return k(a, b)
                                                }
                                        }
                                    }); var k = j ? function () {
                                        for (var a = 0, b = j.length; b > a; ++a) j[a]()
                                    }
                                    : p; return i && k !== p ? (i.$on('$destroy', k), p)  : k
                                }
                                var fa = function (a, b) {
                                    if (b) {
                                        var c,
                                            d,
                                            e,
                                            f = Object.keys(b);
                                        for (c = 0, d = f.length; d > c; c++) e = f[c],
                                        this[e] = b[e]
                                    } else this.$attr = {
                                    };
                                    this.$$element = a
                                };
                                fa.prototype = {
                                    $normalize: ib,
                                    $addClass: function (a) {
                                        a && a.length > 0 && B.addClass(this.$$element, a)
                                    },
                                    $removeClass: function (a) {
                                        a && a.length > 0 && B.removeClass(this.$$element, a)
                                    },
                                    $updateClass: function (a, b) {
                                        var c = jb(a, b);
                                        c && c.length && B.addClass(this.$$element, c);
                                        var d = jb(b, a);
                                        d && d.length && B.removeClass(this.$$element, d)
                                    },
                                    $set: function (a, b, d, g) {
                                        var h,
                                        i = this.$$element[0],
                                        j = Qa(i, a),
                                        k = Ra(i, a),
                                        l = a;
                                        if (j ? (this.$$element.prop(a, b), g = j)  : k && (this[k] = b, l = k), this[a] = b, g ? this.$attr[a] = g : (g = this.$attr[a], g || (this.$attr[a] = g = ia(a, '-'))), h = L(this.$$element), 'a' === h && 'href' === a || 'img' === h && 'src' === a) this[a] = b = D(b, 'src' === a);
                                        else if ('img' === h && 'srcset' === a) {
                                            for (var m = '', n = Nd(b), o = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, p = /\s/.test(n) ? o : /(,)/, q = n.split(p), r = Math.floor(q.length / 2), s = 0; r > s; s++) {
                                                var t = 2 * s;
                                                m += D(Nd(q[t]), !0),
                                                m += ' ' + Nd(q[t + 1])
                                            }
                                            var u = Nd(q[2 * s]).split(/\s/);
                                            m += D(Nd(u[0]), !0),
                                            2 === u.length && (m += ' ' + Nd(u[1])),
                                            this[a] = b = m
                                        }
                                        d !== !1 && (null === b || b === c ? this.$$element.removeAttr(g)  : this.$$element.attr(g, b));
                                        var v = this.$$observers;
                                        v && f(v[l], function (a) {
                                            try {
                                                a(b)
                                            } catch (c) {
                                                e(c)
                                            }
                                        })
                                    },
                                    $observe: function (a, b) {
                                        var c = this,
                                        d = c.$$observers || (c.$$observers = pa()),
                                        e = d[a] || (d[a] = [
                                        ]);
                                        return e.push(b),
                                        r.$evalAsync(function () {
                                            !e.$$inter && c.hasOwnProperty(a) && b(c[a])
                                        }),
                                        function () {
                                            M(e, b)
                                        }
                                    }
                                };
                                var ga = d.startSymbol(),
                                ha = d.endSymbol(),
                                ja = '{{' == ga || '}}' == ha ? q : function (a) {
                                    return a.replace(/\{\{/g, ga).replace(/}}/g, ha)
                    },
                    la = /^ngAttr[A-Z]/;
                    return F.$$addBindingInfo = y ? function (a, b) {
                        var c = a.data('$binding') || [];
                        Ld(b) ? c = c.concat(b)  : c.push(b),
                        a.data('$binding', c)
                    }
                    : p,
                    F.$$addBindingClass = y ? function (a) {
                        E(a, 'ng-binding')
                    }
                    : p,
                    F.$$addScopeInfo = y ? function (a, b, c, d) {
                        var e = c ? d ? '$isolateScopeNoTemplate' : '$isolateScope' : '$scope';
                        a.data(e, b)
                    }
                    : p,
                    F.$$addScopeClass = y ? function (a, b) {
                        E(a, b ? 'ng-isolate-scope' : 'ng-scope')
                    }
                    : p,
                    F
    }
    ]
}
function ib(a) {
    return va(a.replace(De, ''))
}
function jb(a, b) {
    var c = '',
    d = a.split(/\s+/),
    e = b.split(/\s+/);
    a: for (var f = 0; f < d.length; f++) {
        for (var g = d[f], h = 0; h < e.length; h++) if (g == e[h]) continue a;
        c += (c.length > 0 ? ' ' : '') + g
    }
       return c
}
function kb(a) {
    a = zd(a);
    var b = a.length;
    if (1 >= b) return a;
    for (; b--; ) {
        var c = a[b];
        c.nodeType === Xd && Dd.call(a, b, 1)
    }
    return a
}
function lb(a, b) {
    if (b && w(b)) return b;
    if (w(a)) {
        var c = Fe.exec(a);
        if (c) return c[3]
    }
}
function mb() {
    var a = {
    },
    b = !1;
    this.register = function (b, c) {
        ma(b, 'controller'),
        u(b) ? l(a, b)  : a[b] = c
    },
    this.allowGlobals = function () {
        b = !0
    },
    this.$get = [
        '$injector',
        '$window',
        function (e, f) {
            function g(a, b, c, e) {
                if (!a || !u(a.$scope)) throw d('$controller') ('noscp', 'Cannot export controller \'{0}\' as \'{1}\'! No $scope object provided via `locals`.', e, b);
                a.$scope[b] = c
            }
            return function (d, h, i, j) {
                var k,
                m,
                n,
                o;
                if (i = i === !0, j && w(j) && (o = j), w(d)) {
                    if (m = d.match(Fe), !m) throw Ee('ctrlfmt', 'Badly formed controller string \'{0}\'. Must match `__name__ as __id__` or `__name__`.', d);
                    n = m[1],
                        o = o || m[3],
                        d = a.hasOwnProperty(n) ? a[n] : na(h.$scope, n, !0) || (b ? na(f, n, !0)  : c),
                        la(d, n, !0)
                }
                if (i) {
                    var p = (Ld(d) ? d[d.length - 1] : d).prototype;
                    k = Object.create(p || null),
                    o && g(h, o, k, n || d.name);
                    var q;
                    return q = l(function () {
                        var a = e.invoke(d, k, h, n);
                        return a !== k && (u(a) || z(a)) && (k = a, o && g(h, o, k, n || d.name)),
                        k
                    }, {
                        instance: k,
                        identifier: o
                    })
                }
                return k = e.instantiate(d, h, n),
                o && g(h, o, k, n || d.name),
                k
            }
        }
    ]
}
function nb() {
    this.$get = [
        '$window',
        function (a) {
            return zd(a.document)
        }
    ]
}
function ob() {
    this.$get = [
        '$log',
        function (a) {
            return function (b, c) {
                a.error.apply(a, arguments)
            }
        }
    ]
}
function pb(a) {
    return u(a) ? y(a) ? a.toISOString()  : U(a)  : a
}
function qb() {
    this.$get = function () {
        return function (a) {
            if (!a) return '';
            var b = [
            ];
            return g(a, function (a, c) {
                null === a || s(a) || (Ld(a) ? f(a, function (a, d) {
                    b.push(ca(c) + '=' + ca(pb(a)))
                })  : b.push(ca(c) + '=' + ca(pb(a))))
            }),
            b.join('&')
        }
    }
}
function rb() {
    this.$get = function () {
        return function (a) {
            function b(a, d, e) {
                null === a || s(a) || (Ld(a) ? f(a, function (a) {
                    b(a, d + '[]')
                })  : u(a) && !y(a) ? g(a, function (a, c) {
                    b(a, d + (e ? '' : '[') + c + (e ? '' : ']'))
                })  : c.push(ca(d) + '=' + ca(pb(a))))
            }
            if (!a) return '';
            var c = [
            ];
            return b(a, '', !0),
            c.join('&')
        }
    }
}
function sb(a, b) {
    if (w(a)) {
        var c = a.replace(Ke, '').trim();
        if (c) {
            var d = b('Content-Type');
            (d && 0 === d.indexOf(Ge) || tb(c)) && (a = V(c))
        }
    }
    return a
}
function tb(a) {
    var b = a.match(Ie);
    return b && Je[b[0]].test(a)
}
function ub(a) {
    function b(a, b) {
        a && (d[a] = d[a] ? d[a] + ', ' + b : b)
    }
    var c,
    d = pa();
    return w(a) ? f(a.split('\n'), function (a) {
        c = a.indexOf(':'),
        b(td(Nd(a.substr(0, c))), Nd(a.substr(c + 1)))
    })  : u(a) && f(a, function (a, c) {
        b(td(c), Nd(a))
    }),
    d
}
function vb(a) {
    var b;
    return function (c) {
        if (b || (b = ub(a)), c) {
            var d = b[td(c)];
            return void 0 === d && (d = null),
            d
        }
        return b
    }
}
function wb(a, b, c, d) {
    return z(d) ? d(a, b, c)  : (f(d, function (d) {
        a = d(a, b, c)
    }), a)
}
function xb(a) {
    return a >= 200 && 300 > a
}
function yb() {
    var a = this.defaults = {
        transformResponse: [
            sb
        ],
        transformRequest: [
            function (a) {
                return !u(a) || D(a) || F(a) || E(a) ? a : U(a)
            }
        ],
        headers: {
            common: {
                Accept: 'application/json, text/plain, */*'
                                                          },
                                                          post: O(He),
                                                          put: O(He),
                                                          patch: O(He)
                                                          },
                                                          xsrfCookieName: 'XSRF-TOKEN',
                                                          xsrfHeaderName: 'X-XSRF-TOKEN',
                                                          paramSerializer: '$httpParamSerializer'
                                                          },
                                                          b = !1;
                                                          this.useApplyAsync = function (a) {
                                                          return t(a) ? (b = !!a, this)  : b
                                                          };
                                                          var e = this.interceptors = [
                                                          ];
                                                          this.$get = [
                                                          '$httpBackend',
                                                          '$$cookieReader',
                                                          '$cacheFactory',
                                                          '$rootScope',
                                                          '$q',
                                                          '$injector',
                                                          function (g, h, i, j, k, m) {
                                                          function n(b) {
                                                          function e(a) {
                                                          var b = l({
                                                          }, a);
                                                          return a.data ? b.data = wb(a.data, a.headers, a.status, i.transformResponse)  : b.data = a.data,
                                                          xb(a.status) ? b : k.reject(b)
                                                          }
                                                          function g(a, b) {
                                                          var c,
                                                          d = {
                                                          };
                                                          return f(a, function (a, e) {
                                                          z(a) ? (c = a(b), null != c && (d[e] = c))  : d[e] = a
                                                          }),
                                                          d
                                                          }
                                                          function h(b) {
                                                          var c,
                                                          d,
                                                          e,
                                                          f = a.headers,
                                                          h = l({
                                                          }, b.headers);
                                                          f = l({
                                                          }, f.common, f[td(b.method)]);
                                                          a: for (c in f) {
                                                          d = td(c);
                                                          for (e in h) if (td(e) === d) continue a;
                                                          h[c] = f[c]
                                                          }
                                                          return g(h, O(b))
                                                          }
                                                          if (!Id.isObject(b)) throw d('$http') ('badreq', 'Http request configuration must be an object.  Received: {0}', b);
                                                          var i = l({
                                                          method: 'get',
                                                          transformRequest: a.transformRequest,
                                                          transformResponse: a.transformResponse,
                                                          paramSerializer: a.paramSerializer
                                                          }, b);
                                                          i.headers = h(b),
                                                          i.method = vd(i.method),
                                                          i.paramSerializer = w(i.paramSerializer) ? m.get(i.paramSerializer)  : i.paramSerializer;
                                                          var j = function (b) {
                                                          var d = b.headers,
                                                          g = wb(b.data, vb(d), c, b.transformRequest);
                                                          return s(g) && f(d, function (a, b) {
                                                          'content-type' === td(b) && delete d[b]
    }),
    s(b.withCredentials) && !s(a.withCredentials) && (b.withCredentials = a.withCredentials),
    q(b, g).then(e, e)
            },
            n = [
                j,
                c
            ],
            o = k.when(i);
            for (f(x, function (a) {
                (a.request || a.requestError) && n.unshift(a.request, a.requestError),
                    (a.response || a.responseError) && n.push(a.response, a.responseError)
            }); n.length; ) {
                var p = n.shift(),
                r = n.shift();
                o = o.then(p, r)
            }
            return o.success = function (a) {
                return la(a, 'fn'),
                o.then(function (b) {
                    a(b.data, b.status, b.headers, i)
                }),
                o
            },
            o.error = function (a) {
                return la(a, 'fn'),
                o.then(null, function (b) {
                    a(b.data, b.status, b.headers, i)
                }),
                o
            },
            o
}
function o(a) {
    f(arguments, function (a) {
        n[a] = function (b, c) {
            return n(l({
            }, c || {
            }, {
                method: a,
                url: b
            }))
        }
    })
}
function p(a) {
    f(arguments, function (a) {
        n[a] = function (b, c, d) {
            return n(l({
            }, d || {
            }, {
                method: a,
                url: b,
                data: c
            }))
        }
    })
}
function q(d, e) {
    function f(a, c, d, e) {
        function f() {
            i(c, a, d, e)
        }
        o && (xb(a) ? o.put(y, [
                    a,
                    c,
                    ub(d),
                    e
        ])  : o.remove(y)),
        b ? j.$applyAsync(f)  : (f(), j.$$phase || j.$apply())
    }
    function i(a, b, c, e) {
        b = Math.max(b, 0),
        (xb(b) ? q.resolve : q.reject) ({
            data: a,
            status: b,
            headers: vb(c),
            config: d,
            statusText: e
        })
    }
    function l(a) {
        i(a.data, a.status, O(a.headers()), a.statusText)
    }
    function m() {
        var a = n.pendingRequests.indexOf(d);
        - 1 !== a && n.pendingRequests.splice(a, 1)
    }
    var o,
    p,
    q = k.defer(),
    w = q.promise,
    x = d.headers,
    y = r(d.url, d.paramSerializer(d.params));
    if (n.pendingRequests.push(d), w.then(m, m), !d.cache && !a.cache || d.cache === !1 || 'GET' !== d.method && 'JSONP' !== d.method || (o = u(d.cache) ? d.cache : u(a.cache) ? a.cache : v), o && (p = o.get(y), t(p) ? H(p) ? p.then(l, l)  : Ld(p) ? i(p[1], p[0], O(p[2]), p[3])  : i(p, 200, {
    }, 'OK')  : o.put(y, w)), s(p)) {
        var z = zc(d.url) ? h() [d.xsrfCookieName || a.xsrfCookieName] : c;
        z && (x[d.xsrfHeaderName || a.xsrfHeaderName] = z),
        g(d.method, y, e, f, x, d.timeout, d.withCredentials, d.responseType)
    }
    return w
}
function r(a, b) {
    return b.length > 0 && (a += ( - 1 == a.indexOf('?') ? '?' : '&') + b),
    a
}
var v = i('$http');
a.paramSerializer = w(a.paramSerializer) ? m.get(a.paramSerializer)  : a.paramSerializer;
var x = [
];
return f(e, function (a) {
    x.unshift(w(a) ? m.get(a)  : m.invoke(a))
}),
       n.pendingRequests = [
       ],
       o('get', 'delete', 'head', 'jsonp'),
       p('post', 'put', 'patch'),
       n.defaults = a,
       n
       }
]
}
function zb() {
    return new a.XMLHttpRequest
}
function Ab() {
    this.$get = [
        '$browser',
        '$window',
        '$document',
        function (a, b, c) {
            return Bb(a, zb, a.defer, b.angular.callbacks, c[0])
        }
    ]
}
function Bb(a, b, d, e, g) {
    function h(a, b, c) {
        var d = g.createElement('script'),
        f = null;
        return d.type = 'text/javascript',
        d.src = a,
        d.async = !0,
        f = function (a) {
            ce(d, 'load', f),
            ce(d, 'error', f),
            g.body.removeChild(d),
            d = null;
            var h = - 1,
            i = 'unknown';
            a && ('load' !== a.type || e[b].called || (a = {
                type: 'error'
            }), i = a.type, h = 'error' === a.type ? 404 : 200),
            c && c(h, i)
        },
        be(d, 'load', f),
        be(d, 'error', f),
        g.body.appendChild(d),
        f
    }
    return function (g, i, j, k, l, m, n, o) {
        function q() {
            u && u(),
            v && v.abort()
        }
        function r(b, e, f, g, h) {
            y !== c && d.cancel(y),
            u = v = null,
            b(e, f, g, h),
            a.$$completeOutstandingRequest(p)
        }
        if (a.$$incOutstandingRequestCount(), i = i || a.url(), 'jsonp' == td(g)) {
            var s = '_' + (e.counter++).toString(36);
            e[s] = function (a) {
                e[s].data = a,
                e[s].called = !0
            };
            var u = h(i.replace('JSON_CALLBACK', 'angular.callbacks.' + s), s, function (a, b) {
                r(k, a, e[s].data, '', b),
                e[s] = p
            })
        } else {
            var v = b();
            v.open(g, i, !0),
            f(l, function (a, b) {
                t(a) && v.setRequestHeader(b, a)
            }),
            v.onload = function () {
                var a = v.statusText || '',
                b = 'response' in v ? v.response : v.responseText,
                c = 1223 === v.status ? 204 : v.status;
                0 === c && (c = b ? 200 : 'file' == yc(i).protocol ? 404 : 0),
                r(k, c, b, v.getAllResponseHeaders(), a)
            };
            var w = function () {
                r(k, - 1, null, null, '')
            };
            if (v.onerror = w, v.onabort = w, n && (v.withCredentials = !0), o) try {
                v.responseType = o
            } catch (x) {
                if ('json' !== o) throw x
            }
            v.send(j)
        }
        if (m > 0) var y = d(q, m);
        else H(m) && m.then(q)
    }
}
function Cb() {
    var a = '{{',
        b = '}}';
    this.startSymbol = function (b) {
        return b ? (a = b, this)  : a
    },
    this.endSymbol = function (a) {
        return a ? (b = a, this)  : b
    },
    this.$get = [
        '$parse',
        '$exceptionHandler',
        '$sce',
        function (c, d, e) {
            function f(a) {
                return '\\\\\\' + a
            }
            function g(c) {
                return c.replace(m, a).replace(n, b)
            }
            function h(a) {
                if (null == a) return '';
                switch (typeof a) {
                    case 'string':
                        break;
                    case 'number':
                        a = '' + a;
                        break;
                    default:
                        a = U(a)
                }
                return a
            }
            function i(f, i, m, n) {
                function o(a) {
                    try {
                        return a = C(a),
                        n && !t(a) ? a : h(a)
                    } catch (b) {
                        d(Le.interr(f, b))
                    }
                }
                n = !!n;
                for (var p, q, r, u = 0, v = [
                ], w = [
                ], x = f.length, y = [
                ], A = [
                ]; x > u; ) {
                    if ( - 1 == (p = f.indexOf(a, u)) || - 1 == (q = f.indexOf(b, p + j))) {
                        u !== x && y.push(g(f.substring(u)));
                        break
                    }
                    u !== p && y.push(g(f.substring(u, p))),
                    r = f.substring(p + j, q),
                    v.push(r),
                    w.push(c(r, o)),
                    u = q + k,
                    A.push(y.length),
                    y.push('')
                }
                if (m && y.length > 1 && Le.throwNoconcat(f), !i || v.length) {
                    var B = function (a) {
                        for (var b = 0, c = v.length; c > b; b++) {
                            if (n && s(a[b])) return;
                            y[A[b]] = a[b]
                        }
                        return y.join('')
                    },
                        C = function (a) {
                            return m ? e.getTrusted(m, a)  : e.valueOf(a)
                        };
                    return l(function (a) {
                        var b = 0,
                        c = v.length,
                        e = new Array(c);
                        try {
                            for (; c > b; b++) e[b] = w[b](a);
                            return B(e)
                        } catch (g) {
                            d(Le.interr(f, g))
                        }
                    }, {
                        exp: f,
                        expressions: v,
                        $$watchDelegate: function (a, b) {
                            var c;
                            return a.$watchGroup(w, function (d, e) {
                                var f = B(d);
                                z(b) && b.call(this, f, d !== e ? c : f, a),
                                c = f
                            })
                        }
                    })
                }
            }
            var j = a.length,
            k = b.length,
            m = new RegExp(a.replace(/./g, f), 'g'),
            n = new RegExp(b.replace(/./g, f), 'g');
            return i.startSymbol = function () {
                return a
            },
            i.endSymbol = function () {
                return b
            },
            i
        }
    ]
}
function Db() {
    this.$get = [
        '$rootScope',
        '$window',
        '$q',
        '$$q',
        function (a, b, c, d) {
            function e(e, g, h, i) {
                var j = arguments.length > 4,
                k = j ? R(arguments, 4)  : [
                ],
                l = b.setInterval,
                m = b.clearInterval,
                n = 0,
                o = t(i) && !i,
                p = (o ? d : c).defer(),
                q = p.promise;
                return h = t(h) ? h : 0,
                q.then(null, null, j ? function () {
                    e.apply(null, k)
                }
                : e),
                q.$$intervalId = l(function () {
                    p.notify(n++),
                    h > 0 && n >= h && (p.resolve(n), m(q.$$intervalId), delete f[q.$$intervalId]),
                    o || a.$apply()
                }, g),
                f[q.$$intervalId] = p,
                q
            }
            var f = {
            };
            return e.cancel = function (a) {
                return a && a.$$intervalId in f ? (f[a.$$intervalId].reject('canceled'), b.clearInterval(a.$$intervalId), delete f[a.$$intervalId], !0)  : !1
            },
            e
        }
    ]
}
function Eb() {
    this.$get = function () {
        return {
            id: 'en-us',
            NUMBER_FORMATS: {
                DECIMAL_SEP: '.',
                GROUP_SEP: ',',
                PATTERNS: [
                {
                    minInt: 1,
                    minFrac: 0,
                    maxFrac: 3,
                    posPre: '',
                    posSuf: '',
                    negPre: '-',
                    negSuf: '',
                    gSize: 3,
                    lgSize: 3
                },
                {
                    minInt: 1,
                    minFrac: 2,
                    maxFrac: 2,
                    posPre: '¤',
                    posSuf: '',
                    negPre: '(¤',
                            negSuf: ')',
                            gSize: 3,
                            lgSize: 3
                            }
                            ],
                            CURRENCY_SYM: '$'
                            },
                            DATETIME_FORMATS: {
                                MONTH: 'January,February,March,April,May,June,July,August,September,October,November,December'.split(','),
                                SHORTMONTH: 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(','),
                                DAY: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'.split(','),
                                SHORTDAY: 'Sun,Mon,Tue,Wed,Thu,Fri,Sat'.split(','),
                                AMPMS: [
                                    'AM',
                                    'PM'
                                ],
                                medium: 'MMM d, y h:mm:ss a',
                                'short': 'M/d/yy h:mm a',
                                fullDate: 'EEEE, MMMM d, y',
                                longDate: 'MMMM d, y',
                                mediumDate: 'MMM d, y',
                                shortDate: 'M/d/yy',
                                mediumTime: 'h:mm:ss a',
                                shortTime: 'h:mm a',
                                ERANAMES: [
                                    'Before Christ',
                                    'Anno Domini'
                                ],
                                ERAS: [
                                    'BC',
                                    'AD'
                                ]
                            },
                    pluralCat: function (a) {
                        return 1 === a ? 'one' : 'other'
                    }
        }
    }
}
function Fb(a) {
    for (var b = a.split('/'), c = b.length; c--; ) b[c] = ba(b[c]);
    return b.join('/')
}
function Gb(a, b) {
    var c = yc(a);
    b.$$protocol = c.protocol,
    b.$$host = c.hostname,
    b.$$port = n(c.port) || Ne[c.protocol] || null
}
function Hb(a, b) {
    var c = '/' !== a.charAt(0);
    c && (a = '/' + a);
    var d = yc(a);
    b.$$path = decodeURIComponent(c && '/' === d.pathname.charAt(0) ? d.pathname.substring(1)  : d.pathname),
    b.$$search = _(d.search),
    b.$$hash = decodeURIComponent(d.hash),
    b.$$path && '/' != b.$$path.charAt(0) && (b.$$path = '/' + b.$$path)
}
function Ib(a, b) {
    return 0 === b.indexOf(a) ? b.substr(a.length)  : void 0
}
function Jb(a) {
    var b = a.indexOf('#');
    return - 1 == b ? a : a.substr(0, b)
}
function Kb(a) {
    return a.replace(/(#.+)|#$/, '$1')
}
function Lb(a) {
    return a.substr(0, Jb(a).lastIndexOf('/') + 1)
}
function Mb(a) {
    return a.substring(0, a.indexOf('/', a.indexOf('//') + 2))
}
function Nb(a, b) {
    this.$$html5 = !0,
    b = b || '';
    var d = Lb(a);
    Gb(a, this),
    this.$$parse = function (a) {
        var b = Ib(d, a);
        if (!w(b)) throw Oe('ipthprfx', 'Invalid url "{0}", missing path prefix "{1}".', a, d);
        Hb(b, this),
            this.$$path || (this.$$path = '/'),
            this.$$compose()
    },
    this.$$compose = function () {
        var a = aa(this.$$search),
        b = this.$$hash ? '#' + ba(this.$$hash)  : '';
        this.$$url = Fb(this.$$path) + (a ? '?' + a : '') + b,
        this.$$absUrl = d + this.$$url.substr(1)
    },
    this.$$parseLinkUrl = function (e, f) {
        if (f && '#' === f[0]) return this.hash(f.slice(1)),
        !0;
        var g,
        h,
        i;
        return (g = Ib(a, e)) !== c ? (h = g, i = (g = Ib(b, g)) !== c ? d + (Ib('/', g) || g)  : a + h)  : (g = Ib(d, e)) !== c ? i = d + g : d == e + '/' && (i = d),
        i && this.$$parse(i),
        !!i
    }
}
function Ob(a, b) {
    var c = Lb(a);
    Gb(a, this),
    this.$$parse = function (d) {
        function e(a, b, c) {
            var d,
            e = /^\/[A-Z]:(\/.*)/;
            return 0 === b.indexOf(c) && (b = b.replace(c, '')),
            e.exec(b) ? a : (d = e.exec(a), d ? d[1] : a)
        }
        var f,
        g = Ib(a, d) || Ib(c, d);
        '#' === g.charAt(0) ? (f = Ib(b, g), s(f) && (f = g))  : f = this.$$html5 ? g : '',
        Hb(f, this),
        this.$$path = e(this.$$path, f, a),
        this.$$compose()
    },
    this.$$compose = function () {
        var c = aa(this.$$search),
        d = this.$$hash ? '#' + ba(this.$$hash)  : '';
        this.$$url = Fb(this.$$path) + (c ? '?' + c : '') + d,
        this.$$absUrl = a + (this.$$url ? b + this.$$url : '')
    },
    this.$$parseLinkUrl = function (b, c) {
        return Jb(a) == Jb(b) ? (this.$$parse(b), !0)  : !1
    }
}
function Pb(a, b) {
    this.$$html5 = !0,
    Ob.apply(this, arguments);
    var c = Lb(a);
    this.$$parseLinkUrl = function (d, e) {
        if (e && '#' === e[0]) return this.hash(e.slice(1)),
        !0;
        var f,
        g;
        return a == Jb(d) ? f = d : (g = Ib(c, d)) ? f = a + b + g : c === d + '/' && (f = c),
        f && this.$$parse(f),
        !!f
    },
    this.$$compose = function () {
        var c = aa(this.$$search),
        d = this.$$hash ? '#' + ba(this.$$hash)  : '';
        this.$$url = Fb(this.$$path) + (c ? '?' + c : '') + d,
        this.$$absUrl = a + b + this.$$url
    }
}
function Qb(a) {
    return function () {
        return this[a]
    }
}
function Rb(a, b) {
    return function (c) {
        return s(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
    }
}
function Sb() {
    var a = '',
    b = {
        enabled: !1,
        requireBase: !0,
        rewriteLinks: !0
    };
    this.hashPrefix = function (b) {
        return t(b) ? (a = b, this)  : a
    },
    this.html5Mode = function (a) {
        return G(a) ? (b.enabled = a, this)  : u(a) ? (G(a.enabled) && (b.enabled = a.enabled), G(a.requireBase) && (b.requireBase = a.requireBase), G(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this)  : b
    },
    this.$get = [
        '$rootScope',
        '$browser',
        '$sniffer',
        '$rootElement',
        '$window',
        function (c, d, e, f, g) {
            function h(a, b, c) {
                var e = j.url(),
                f = j.$$state;
                try {
                    d.url(a, b, c),
                    j.$$state = d.state()
                } catch (g) {
                    throw j.url(e),
                    j.$$state = f,
                    g
                }
            }
            function i(a, b) {
                c.$broadcast('$locationChangeSuccess', j.absUrl(), a, j.$$state, b)
            }
            var j,
            k,
            l,
            m = d.baseHref(),
            n = d.url();
            if (b.enabled) {
                if (!m && b.requireBase) throw Oe('nobase', '$location in HTML5 mode requires a <base> tag to be present!');
                l = Mb(n) + (m || '/'),
                    k = e.history ? Nb : Pb
            } else l = Jb(n),
            k = Ob;
            j = new k(l, '#' + a),
            j.$$parseLinkUrl(n, n),
            j.$$state = d.state();
            var o = /^\s*(javascript|mailto):/i;
            f.on('click', function (a) {
                if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
                    for (var e = zd(a.target); 'a' !== L(e[0]); ) if (e[0] === f[0] || !(e = e.parent()) [0]) return;
                    var h = e.prop('href'),
                        i = e.attr('href') || e.attr('xlink:href');
                    u(h) && '[object SVGAnimatedString]' === h.toString() && (h = yc(h.animVal).href),
                    o.test(h) || !h || e.attr('target') || a.isDefaultPrevented() || j.$$parseLinkUrl(h, i) && (a.preventDefault(), j.absUrl() != d.url() && (c.$apply(), g.angular['ff-684208-preventDefault'] = !0))
                }
            }),
            Kb(j.absUrl()) != Kb(n) && d.url(j.absUrl(), !0);
            var p = !0;
            return d.onUrlChange(function (a, b) {
                c.$evalAsync(function () {
                    var d,
                    e = j.absUrl(),
                    f = j.$$state;
                    j.$$parse(a),
                    j.$$state = b,
                    d = c.$broadcast('$locationChangeStart', a, e, b, f).defaultPrevented,
                    j.absUrl() === a && (d ? (j.$$parse(e), j.$$state = f, h(e, !1, f))  : (p = !1, i(e, f)))
                }),
                c.$$phase || c.$digest()
            }),
            c.$watch(function () {
                var a = Kb(d.url()),
                b = Kb(j.absUrl()),
                f = d.state(),
                g = j.$$replace,
                k = a !== b || j.$$html5 && e.history && f !== j.$$state;
                (p || k) && (p = !1, c.$evalAsync(function () {
                    var b = j.absUrl(),
                    d = c.$broadcast('$locationChangeStart', b, a, j.$$state, f).defaultPrevented;
                    j.absUrl() === b && (d ? (j.$$parse(a), j.$$state = f)  : (k && h(b, g, f === j.$$state ? null : j.$$state), i(a, f)))
                })),
                j.$$replace = !1
            }),
            j
        }
    ]
}
function Tb() {
    var a = !0,
    b = this;
    this.debugEnabled = function (b) {
        return t(b) ? (a = b, this)  : a
    },
    this.$get = [
        '$window',
        function (c) {
            function d(a) {
                return a instanceof Error && (a.stack ? a = a.message && - 1 === a.stack.indexOf(a.message) ? 'Error: ' + a.message + '\n' + a.stack : a.stack : a.sourceURL && (a = a.message + '\n' + a.sourceURL + ':' + a.line)),
                a
            }
            function e(a) {
                var b = c.console || {
                },
                e = b[a] || b.log || p,
                g = !1;
                try {
                    g = !!e.apply
                } catch (h) {
                }
                return g ? function () {
                    var a = [
                    ];
                    return f(arguments, function (b) {
                        a.push(d(b))
                    }),
                e.apply(b, a)
                }
                : function (a, b) {
                    e(a, null == b ? '' : b)
                }
            }
            return {
                log: e('log'),
                info: e('info'),
                warn: e('warn'),
                error: e('error'),
                debug: function () {
                    var c = e('debug');
                    return function () {
                        a && c.apply(b, arguments)
                    }
                }()
            }
        }
    ]
}
function Ub(a, b) {
    if ('__defineGetter__' === a || '__defineSetter__' === a || '__lookupGetter__' === a || '__lookupSetter__' === a || '__proto__' === a) throw Qe('isecfld', 'Attempting to access a disallowed field in Angular expressions! Expression: {0}', b);
    return a
}
function Vb(a, b) {
    if (a) {
        if (a.constructor === a) throw Qe('isecfn', 'Referencing Function in Angular expressions is disallowed! Expression: {0}', b);
        if (a.window === a) throw Qe('isecwindow', 'Referencing the Window in Angular expressions is disallowed! Expression: {0}', b);
        if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw Qe('isecdom', 'Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}', b);
        if (a === Object) throw Qe('isecobj', 'Referencing Object in Angular expressions is disallowed! Expression: {0}', b)
    }
    return a
}
function Wb(a, b) {
    if (a) {
        if (a.constructor === a) throw Qe('isecfn', 'Referencing Function in Angular expressions is disallowed! Expression: {0}', b);
        if (a === Re || a === Se || a === Te) throw Qe('isecff', 'Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}', b)
    }
}
function Xb(a, b) {
    return 'undefined' != typeof a ? a : b
}
function Yb(a, b) {
    return 'undefined' == typeof a ? b : 'undefined' == typeof b ? a : a + b
}
function Zb(a, b) {
    var c = a(b);
    return !c.$stateful
}
function $b(a, b) {
    var c,
    d;
    switch (a.type) {
        case Xe.Program:
            c = !0,
            f(a.body, function (a) {
                $b(a.expression, b),
                c = c && a.expression.constant
            }),
            a.constant = c;
            break;
        case Xe.Literal:
            a.constant = !0,
            a.toWatch = [
            ];
            break;
        case Xe.UnaryExpression:
            $b(a.argument, b),
            a.constant = a.argument.constant,
            a.toWatch = a.argument.toWatch;
            break;
        case Xe.BinaryExpression:
            $b(a.left, b),
            $b(a.right, b),
            a.constant = a.left.constant && a.right.constant,
            a.toWatch = a.left.toWatch.concat(a.right.toWatch);
            break;
        case Xe.LogicalExpression:
            $b(a.left, b),
            $b(a.right, b),
            a.constant = a.left.constant && a.right.constant,
            a.toWatch = a.constant ? [
            ] : [
            a
            ];
            break;
        case Xe.ConditionalExpression:
            $b(a.test, b),
            $b(a.alternate, b),
            $b(a.consequent, b),
            a.constant = a.test.constant && a.alternate.constant && a.consequent.constant,
            a.toWatch = a.constant ? [
            ] : [
            a
            ];
            break;
        case Xe.Identifier:
            a.constant = !1,
            a.toWatch = [
                a
            ];
            break;
        case Xe.MemberExpression:
            $b(a.object, b),
            a.computed && $b(a.property, b),
            a.constant = a.object.constant && (!a.computed || a.property.constant),
            a.toWatch = [
                a
            ];
            break;
        case Xe.CallExpression:
            c = a.filter ? Zb(b, a.callee.name)  : !1,
            d = [
            ],
            f(a.arguments, function (a) {
                $b(a, b),
                c = c && a.constant,
                a.constant || d.push.apply(d, a.toWatch)
            }),
            a.constant = c,
            a.toWatch = a.filter && Zb(b, a.callee.name) ? d : [
                a
            ];
            break;
        case Xe.AssignmentExpression:
            $b(a.left, b),
            $b(a.right, b),
            a.constant = a.left.constant && a.right.constant,
            a.toWatch = [
                a
            ];
            break;
        case Xe.ArrayExpression:
            c = !0,
            d = [
            ],
            f(a.elements, function (a) {
                $b(a, b),
                c = c && a.constant,
                a.constant || d.push.apply(d, a.toWatch)
            }),
            a.constant = c,
            a.toWatch = d;
            break;
        case Xe.ObjectExpression:
            c = !0,
            d = [
            ],
            f(a.properties, function (a) {
                $b(a.value, b),
                c = c && a.value.constant,
                a.value.constant || d.push.apply(d, a.value.toWatch)
            }),
            a.constant = c,
            a.toWatch = d;
            break;
        case Xe.ThisExpression:
            a.constant = !1,
            a.toWatch = [
            ]
    }
}
function _b(a) {
    if (1 == a.length) {
        var b = a[0].expression,
            d = b.toWatch;
        return 1 !== d.length ? d : d[0] !== b ? d : c
    }
}
function ac(a) {
    return a.type === Xe.Identifier || a.type === Xe.MemberExpression
}
function bc(a) {
    return 1 === a.body.length && ac(a.body[0].expression) ? {
        type: Xe.AssignmentExpression,
        left: a.body[0].expression,
        right: {
            type: Xe.NGValueParameter
        },
        operator: '='
    }
    : void 0
}
function cc(a) {
    return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === Xe.Literal || a.body[0].expression.type === Xe.ArrayExpression || a.body[0].expression.type === Xe.ObjectExpression)
}
function dc(a) {
    return a.constant
}
function ec(a, b) {
    this.astBuilder = a,
    this.$filter = b
}
function fc(a, b) {
    this.astBuilder = a,
    this.$filter = b
}
function gc(a, b, c, d) {
    Vb(a, d);
    for (var e, f = b.split('.'), g = 0; f.length > 1; g++) {
        e = Ub(f.shift(), d);
        var h = Vb(a[e], d);
        h || (h = {
        }, a[e] = h),
        a = h
    }
    return e = Ub(f.shift(), d),
    Vb(a[e], d),
    a[e] = c,
    c
}
function hc(a) {
    return 'constructor' == a
}
function ic(a) {
    return z(a.valueOf) ? a.valueOf()  : Ze.call(a)
}
function jc() {
    var a = pa(),
    b = pa();
    this.$get = [
        '$filter',
        '$sniffer',
        function (d, e) {
            function g(a, b) {
                return null == a || null == b ? a === b : 'object' == typeof a && (a = ic(a), 'object' == typeof a) ? !1 : a === b || a !== a && b !== b
            }
            function h(a, b, d, e, f) {
                var h,
                i = e.inputs;
                if (1 === i.length) {
                    var j = g;
                    return i = i[0],
                a.$watch(function (a) {
                    var b = i(a);
                    return g(b, j) || (h = e(a, c, c, [
                                b
                    ]), j = b && ic(b)),
                    h
                }, b, d, f)
                }
                for (var k = [
                ], l = [
                ], m = 0, n = i.length; n > m; m++) k[m] = g,
                l[m] = null;
                return a.$watch(function (a) {
                    for (var b = !1, d = 0, f = i.length; f > d; d++) {
                        var j = i[d](a);
                        (b || (b = !g(j, k[d]))) && (l[d] = j, k[d] = j && ic(j))
                    }
                    return b && (h = e(a, c, c, l)),
                    h
                }, b, d, f)
            }
            function i(a, b, c, d) {
                var e,
                f;
                return e = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    f = a,
                    z(b) && b.apply(this, arguments),
                    t(a) && d.$$postDigest(function () {
                        t(f) && e()
                    })
                }, c)
            }
            function j(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    return f(a, function (a) {
                        t(a) || (b = !1)
                    }),
                    b
                }
                var g,
                h;
                return g = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    h = a,
                    z(b) && b.call(this, a, c, d),
                    e(a) && d.$$postDigest(function () {
                        e(h) && g()
                    })
                }, c)
            }
            function k(a, b, c, d) {
                var e;
                return e = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    z(b) && b.apply(this, arguments),
                    e()
                }, c)
            }
            function l(a, b) {
                if (!b) return a;
                var c = a.$$watchDelegate,
                    d = c !== j && c !== i,
                    e = d ? function (c, d, e, f) {
                        var g = a(c, d, e, f);
                        return b(g, c, d)
                    }
                : function (c, d, e, f) {
                    var g = a(c, d, e, f),
                    h = b(g, c, d);
                    return t(g) ? h : g
                };
                return a.$$watchDelegate && a.$$watchDelegate !== h ? e.$$watchDelegate = a.$$watchDelegate : b.$stateful || (e.$$watchDelegate = h, e.inputs = a.inputs ? a.inputs : [
                        a
                ]),
                e
            }
            var m = {
                csp: e.csp,
                expensiveChecks: !1
            },
            n = {
                csp: e.csp,
                expensiveChecks: !0
            };
            return function (c, e, f) {
                var g,
                o,
                q;
                switch (typeof c) {
                    case 'string':
                        c = c.trim(),
                        q = c;
                        var r = f ? b : a;
                        if (g = r[q], !g) {
                            ':' === c.charAt(0) && ':' === c.charAt(1) && (o = !0, c = c.substring(2));
                            var s = f ? n : m,
                            t = new We(s),
                            u = new Ye(t, d, s);
                            g = u.parse(c),
                            g.constant ? g.$$watchDelegate = k : o ? g.$$watchDelegate = g.literal ? j : i : g.inputs && (g.$$watchDelegate = h),
                            r[q] = g
                        }
                        return l(g, e);
                    case 'function':
                        return l(c, e);
                    default:
                        return p
                }
            }
        }
    ]
}
function kc() {
    this.$get = [
        '$rootScope',
        '$exceptionHandler',
        function (a, b) {
            return mc(function (b) {
                a.$evalAsync(b)
            }, b)
        }
    ]
}
function lc() {
    this.$get = [
        '$browser',
        '$exceptionHandler',
        function (a, b) {
            return mc(function (b) {
                a.defer(b)
            }, b)
        }
    ]
}
function mc(a, b) {
    function e(a, b, c) {
        function d(b) {
            return function (c) {
                e || (e = !0, b.call(a, c))
            }
        }
        var e = !1;
        return [d(b),
        d(c)]
    }
    function g() {
        this.$$state = {
            status: 0
        }
    }
    function h(a, b) {
        return function (c) {
            b.call(a, c)
        }
    }
    function i(a) {
        var d,
        e,
        f;
        f = a.pending,
        a.processScheduled = !1,
        a.pending = c;
        for (var g = 0, h = f.length; h > g; ++g) {
            e = f[g][0],
                d = f[g][a.status];
            try {
                z(d) ? e.resolve(d(a.value))  : 1 === a.status ? e.resolve(a.value)  : e.reject(a.value)
            } catch (i) {
                e.reject(i),
                b(i)
            }
        }
    }
    function j(b) {
        !b.processScheduled && b.pending && (b.processScheduled = !0, a(function () {
            i(b)
        }))
    }
    function k() {
        this.promise = new g,
        this.resolve = h(this, this.resolve),
        this.reject = h(this, this.reject),
        this.notify = h(this, this.notify)
    }
    function l(a) {
        var b = new k,
        c = 0,
        d = Ld(a) ? [
        ] : {
        };
        return f(a, function (a, e) {
            c++,
            r(a).then(function (a) {
                d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
            }, function (a) {
                d.hasOwnProperty(e) || b.reject(a)
            })
        }),
        0 === c && b.resolve(d),
        b.promise
    }
    var m = d('$q', TypeError),
    n = function () {
        return new k
    };
    g.prototype = {
        then: function (a, b, c) {
            var d = new k;
            return this.$$state.pending = this.$$state.pending || [],
            this.$$state.pending.push([d,
                    a,
                    b,
                    c]),
            this.$$state.status > 0 && j(this.$$state),
            d.promise
        },
        'catch': function (a) {
            return this.then(null, a)
        },
        'finally': function (a, b) {
            return this.then(function (b) {
                return q(b, !0, a)
            }, function (b) {
                return q(b, !1, a)
            }, b)
        }
    },
    k.prototype = {
        resolve: function (a) {
            this.promise.$$state.status || (a === this.promise ? this.$$reject(m('qcycle', 'Expected promise to be resolved with value other than itself \'{0}\'', a))  : this.$$resolve(a))
        },
        $$resolve: function (a) {
            var c,
            d;
            d = e(this, this.$$resolve, this.$$reject);
            try {
                (u(a) || z(a)) && (c = a && a.then),
                z(c) ? (this.promise.$$state.status = - 1, c.call(a, d[0], d[1], this.notify))  : (this.promise.$$state.value = a, this.promise.$$state.status = 1, j(this.promise.$$state))
            } catch (f) {
                d[1](f),
                b(f)
            }
        },
        reject: function (a) {
            this.promise.$$state.status || this.$$reject(a)
        },
        $$reject: function (a) {
            this.promise.$$state.value = a,
            this.promise.$$state.status = 2,
            j(this.promise.$$state)
        },
        notify: function (c) {
            var d = this.promise.$$state.pending;
            this.promise.$$state.status <= 0 && d && d.length && a(function () {
                for (var a, e, f = 0, g = d.length; g > f; f++) {
                    e = d[f][0],
                        a = d[f][3];
                    try {
                        e.notify(z(a) ? a(c)  : c)
                    } catch (h) {
                        b(h)
                    }
                }
            })
        }
    };
    var o = function (a) {
        var b = new k;
        return b.reject(a),
        b.promise
    },
    p = function (a, b) {
        var c = new k;
        return b ? c.resolve(a)  : c.reject(a),
        c.promise
    },
    q = function (a, b, c) {
        var d = null;
        try {
            z(c) && (d = c())
        } catch (e) {
            return p(e, !1)
        }
        return H(d) ? d.then(function () {
            return p(a, b)
        }, function (a) {
            return p(a, !1)
        })  : p(a, b)
    },
    r = function (a, b, c, d) {
        var e = new k;
        return e.resolve(a),
        e.promise.then(b, c, d)
    },
    s = function t(a) {
        function b(a) {
            d.resolve(a)
        }
        function c(a) {
            d.reject(a)
        }
        if (!z(a)) throw m('norslvr', 'Expected resolverFn, got \'{0}\'', a);
        if (!(this instanceof t)) return new t(a);
        var d = new k;
        return a(b, c),
        d.promise
    };
    return s.defer = n,
    s.reject = o,
    s.when = r,
    s.all = l,
    s
}
function nc() {
    this.$get = [
        '$window',
        '$timeout',
        function (a, b) {
            function c() {
                for (var a = 0; a < k.length; a++) {
                    var b = k[a];
                    b && (k[a] = null, b())
                }
                j = k.length = 0
            }
            function d(a) {
                var b = k.length;
                return j++,
            k.push(a),
            0 === b && (i = h(c)),
            function () {
                b >= 0 && (k[b] = null, b = null, 0 === --j && i && (i(), i = null, k.length = 0))
            }
            }
            var e = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
            f = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
            g = !!e,
            h = g ? function (a) {
                var b = e(a);
                return function () {
                    f(b)
                }
            }
            : function (a) {
                var c = b(a, 16.66, !1);
                return function () {
                    b.cancel(c)
                }
            };
            d.supported = g;
            var i,
            j = 0,
            k = [
            ];
            return d
        }
    ]
}
function oc() {
    function a(a) {
        function b() {
            this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null,
            this.$$listeners = {
            },
            this.$$listenerCount = {
            },
            this.$$watchersCount = 0,
            this.$id = i(),
            this.$$ChildScope = null
        }
        return b.prototype = a,
        b
    }
    var b = 10,
    c = d('$rootScope'),
    g = null,
    h = null;
    this.digestTtl = function (a) {
        return arguments.length && (b = a),
        b
    },
    this.$get = [
        '$injector',
        '$exceptionHandler',
        '$parse',
        '$browser',
        function (d, j, k, l) {
            function m(a) {
                a.currentScope.$$destroyed = !0
            }
            function n() {
                this.$id = i(),
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null,
                this.$root = this,
                this.$$destroyed = !1,
                this.$$listeners = {
                },
                this.$$listenerCount = {
                },
                this.$$watchersCount = 0,
                this.$$isolateBindings = null
            }
            function o(a) {
                if (y.$$phase) throw c('inprog', '{0} already in progress', y.$$phase);
                y.$$phase = a
            }
            function q() {
                y.$$phase = null
            }
            function r(a, b) {
                do a.$$watchersCount += b;
                while (a = a.$parent)
            }
            function t(a, b, c) {
                do a.$$listenerCount[c] -= b,
                0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
                while (a = a.$parent)
            }
            function v() {
            }
            function w() {
                for (; C.length; ) try {
                    C.shift() ()
                } catch (a) {
                    j(a)
                }
                h = null
            }
            function x() {
                null === h && (h = l.defer(function () {
                    y.$apply(w)
                }))
            }
            n.prototype = {
                constructor: n,
                $new: function (b, c) {
                    var d;
                    return c = c || this,
                    b ? (d = new n, d.$root = this.$root)  : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope),
                    d.$parent = c,
                    d.$$prevSibling = c.$$childTail,
                    c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d)  : c.$$childHead = c.$$childTail = d,
                    (b || c != this) && d.$on('$destroy', m),
                    d
                },
                $watch: function (a, b, c, d) {
                    var e = k(a);
                    if (e.$$watchDelegate) return e.$$watchDelegate(this, b, c, e, a);
                    var f = this,
                        h = f.$$watchers,
                        i = {
                            fn: b,
                            last: v,
                            get: e,
                            exp: d || a,
                            eq: !!c
                        };
                    return g = null,
                    z(b) || (i.fn = p),
                    h || (h = f.$$watchers = [
                    ]),
                    h.unshift(i),
                    r(this, 1),
                    function () {
                        M(h, i) >= 0 && r(f, - 1),
                        g = null
                    }
                },
                $watchGroup: function (a, b) {
                    function c() {
                        i = !1,
                        j ? (j = !1, b(e, e, h))  : b(e, d, h)
                    }
                    var d = new Array(a.length),
                    e = new Array(a.length),
                    g = [
                    ],
                    h = this,
                    i = !1,
                    j = !0;
                    if (!a.length) {
                        var k = !0;
                        return h.$evalAsync(function () {
                            k && b(e, e, h)
                        }),
                        function () {
                            k = !1
                        }
                    }
                    return 1 === a.length ? this.$watch(a[0], function (a, c, f) {
                        e[0] = a,
                        d[0] = c,
                        b(e, a === c ? e : d, f)
                    })  : (f(a, function (a, b) {
                        var f = h.$watch(a, function (a, f) {
                            e[b] = a,
                            d[b] = f,
                            i || (i = !0, h.$evalAsync(c))
                        });
                        g.push(f)
                    }), function () {
                        for (; g.length; ) g.shift() ()
                    })
                },
                $watchCollection: function (a, b) {
                    function c(a) {
                        f = a;
                        var b,
                        c,
                        d,
                        h,
                        i;
                        if (!s(f)) {
                            if (u(f)) if (e(f)) {
                                g !== n && (g = n, q = g.length = 0, l++),
                                    b = f.length,
                                    q !== b && (l++, g.length = q = b);
                                for (var j = 0; b > j; j++) i = g[j],
                                h = f[j],
                                    d = i !== i && h !== h,
                                    d || i === h || (l++, g[j] = h)
                            } else {
                                g !== o && (g = o = {
                                }, q = 0, l++),
                                    b = 0;
                                for (c in f) f.hasOwnProperty(c) && (b++, h = f[c], i = g[c], c in g ? (d = i !== i && h !== h, d || i === h || (l++, g[c] = h))  : (q++, g[c] = h, l++));
                                if (q > b) {
                                    l++;
                                    for (c in g) f.hasOwnProperty(c) || (q--, delete g[c])
                                }
                            } else g !== f && (g = f, l++);
                            return l
                        }
                    }
                    function d() {
                        if (p ? (p = !1, b(f, f, i))  : b(f, h, i), j) if (u(f)) if (e(f)) {
                            h = new Array(f.length);
                            for (var a = 0; a < f.length; a++) h[a] = f[a]
                        } else {
                            h = {
                            };
                            for (var c in f) ud.call(f, c) && (h[c] = f[c])
                        } else h = f
                    }
                    c.$stateful = !0;
                    var f,
                    g,
                    h,
                    i = this,
                    j = b.length > 1,
                    l = 0,
                    m = k(a, c),
                    n = [
                    ],
                    o = {
                    },
                    p = !0,
                    q = 0;
                    return this.$watch(m, d)
                },
                $digest: function () {
                    var a,
                    d,
                    e,
                    f,
                    i,
                    k,
                    m,
                    n,
                    p,
                    r,
                    s = b,
                    t = this,
                    u = [
                    ];
                    o('$digest'),
                    l.$$checkUrlChange(),
                    this === y && null !== h && (l.defer.cancel(h), w()),
                    g = null;
                    do {
                        for (k = !1, n = t; A.length; ) {
                            try {
                                r = A.shift(),
                                r.scope.$eval(r.expression, r.locals)
                            } catch (x) {
                                j(x)
                            }
                            g = null
                        }
                        a: do {
                            if (f = n.$$watchers) for (i = f.length; i--; ) try {
                                if (a = f[i]) if ((d = a.get(n)) === (e = a.last) || (a.eq ? P(d, e)  : 'number' == typeof d && 'number' == typeof e && isNaN(d) && isNaN(e))) {
                                    if (a === g) {
                                        k = !1;
                                        break a
                                    }
                                } else k = !0,
                                    g = a,
                                        a.last = a.eq ? N(d, null)  : d,
                                        a.fn(d, e === v ? d : e, n),
                                        5 > s && (p = 4 - s, u[p] || (u[p] = [
                                        ]), u[p].push({
                                            msg: z(a.exp) ? 'fn: ' + (a.exp.name || a.exp.toString())  : a.exp,
                                            newVal: d,
                                            oldVal: e
                                        }))
                            } catch (x) {
                                j(x)
                            }
                            if (!(m = n.$$watchersCount && n.$$childHead || n !== t && n.$$nextSibling)) for (; n !== t && !(m = n.$$nextSibling); ) n = n.$parent
                        } while (n = m);
                                        if ((k || A.length) && !s--) throw q(),
                                        c('infdig', '{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}', b, u)
                    } while (k || A.length);
                                        for (q(); B.length; ) try {
                                            B.shift() ()
                                        } catch (x) {
                                            j(x)
                                        }
                },
                $destroy: function () {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast('$destroy'),
                        this.$$destroyed = !0,
                        this === y && l.$$applicationDestroyed(),
                        r(this, - this.$$watchersCount);
                        for (var b in this.$$listenerCount) t(this, this.$$listenerCount[b], b);
                        a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling),
                            a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling),
                            this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling),
                            this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling),
                            this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p,
                            this.$on = this.$watch = this.$watchGroup = function () {
                                return p
                            },
                            this.$$listeners = {
                            },
                            this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                    }
                },
                $eval: function (a, b) {
                    return k(a) (this, b)
                },
                $evalAsync: function (a, b) {
                    y.$$phase || A.length || l.defer(function () {
                        A.length && y.$digest()
                    }),
                    A.push({
                        scope: this,
                        expression: a,
                        locals: b
                    })
                },
                $$postDigest: function (a) {
                    B.push(a)
                },
                $apply: function (a) {
                    try {
                        return o('$apply'),
                        this.$eval(a)
                    } catch (b) {
                        j(b)
                    } finally {
                        q();
                        try {
                            y.$digest()
                        } catch (b) {
                            throw j(b),
                            b
                        }
                    }
                },
                $applyAsync: function (a) {
                    function b() {
                        c.$eval(a)
                    }
                    var c = this;
                    a && C.push(b),
                    x()
                },
                $on: function (a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = [
                    ]),
                    c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0),
                    d.$$listenerCount[a]++;
                    while (d = d.$parent);
                    var e = this;
                    return function () {
                        var d = c.indexOf(b);
                        - 1 !== d && (c[d] = null, t(e, 1, a))
                    }
                },
                $emit: function (a, b) {
                    var c,
                    d,
                    e,
                    f = [
                    ],
                    g = this,
                    h = !1,
                    i = {
                        name: a,
                        targetScope: g,
                        stopPropagation: function () {
                            h = !0
                        },
                        preventDefault: function () {
                            i.defaultPrevented = !0
                        },
                        defaultPrevented: !1
                    },
                    k = Q([i], arguments, 1);
                    do {
                        for (c = g.$$listeners[a] || f, i.currentScope = g, d = 0, e = c.length; e > d; d++) if (c[d]) try {
                            c[d].apply(null, k)
                        } catch (l) {
                            j(l)
                        } else c.splice(d, 1),
                        d--,
                            e--;
                        if (h) return i.currentScope = null,
                        i;
                        g = g.$parent
                    } while (g);
                    return i.currentScope = null,
                    i
                },
                $broadcast: function (a, b) {
                    var c = this,
                    d = c,
                    e = c,
                    f = {
                        name: a,
                        targetScope: c,
                        preventDefault: function () {
                            f.defaultPrevented = !0
                        },
                        defaultPrevented: !1
                    };
                    if (!c.$$listenerCount[a]) return f;
                    for (var g, h, i, k = Q([f], arguments, 1); d = e; ) {
                        for (f.currentScope = d, g = d.$$listeners[a] || [], h = 0, i = g.length; i > h; h++) if (g[h]) try {
                            g[h].apply(null, k)
                        } catch (l) {
                            j(l)
                        } else g.splice(h, 1),
                        h--,
                            i--;
                        if (!(e = d.$$listenerCount[a] && d.$$childHead || d !== c && d.$$nextSibling)) for (; d !== c && !(e = d.$$nextSibling); ) d = d.$parent
                    }
                    return f.currentScope = null,
                    f
                }
            };
            var y = new n,
            A = y.$$asyncQueue = [
            ],
            B = y.$$postDigestQueue = [
            ],
            C = y.$$applyAsyncQueue = [
            ];
            return y
        }
    ]
}
function pc() {
    var a = /^\s*(https?|ftp|mailto|tel|file):/,
    b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
    this.aHrefSanitizationWhitelist = function (b) {
        return t(b) ? (a = b, this)  : a
    },
    this.imgSrcSanitizationWhitelist = function (a) {
        return t(a) ? (b = a, this)  : b
    },
    this.$get = function () {
        return function (c, d) {
            var e,
            f = d ? b : a;
            return e = yc(c).href,
            '' === e || e.match(f) ? c : 'unsafe:' + e
        }
    }
}
function qc(a) {
    if ('self' === a) return a;
    if (w(a)) {
        if (a.indexOf('***') > - 1) throw $e('iwcard', 'Illegal sequence *** in string matcher.  String: {0}', a);
        return a = Od(a).replace('\\*\\*', '.*').replace('\\*', '[^:/.?&;]*'),
            new RegExp('^' + a + '$')
    }
    if (A(a)) return new RegExp('^' + a.source + '$');
    throw $e('imatcher', 'Matchers may only be "self", string patterns or RegExp objects')
}
function rc(a) {
    var b = [
    ];
    return t(a) && f(a, function (a) {
        b.push(qc(a))
    }),
    b
}
function sc() {
    this.SCE_CONTEXTS = _e;
    var a = [
        'self'
    ],
    b = [
    ];
    this.resourceUrlWhitelist = function (b) {
        return arguments.length && (a = rc(b)),
        a
    },
    this.resourceUrlBlacklist = function (a) {
        return arguments.length && (b = rc(a)),
        b
    },
    this.$get = [
        '$injector',
        function (d) {
            function e(a, b) {
                return 'self' === a ? zc(b)  : !!a.exec(b.href)
            }
            function f(c) {
                var d,
                f,
                g = yc(c.toString()),
                h = !1;
                for (d = 0, f = a.length; f > d; d++) if (e(a[d], g)) {
                    h = !0;
                    break
                }
                if (h) for (d = 0, f = b.length; f > d; d++) if (e(b[d], g)) {
                    h = !1;
                    break
                }
                return h
            }
            function g(a) {
                var b = function (a) {
                    this.$$unwrapTrustedValue = function () {
                        return a
                    }
                };
                return a && (b.prototype = new a),
                b.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                },
                b.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                },
                b
            }
            function h(a, b) {
                var d = m.hasOwnProperty(a) ? m[a] : null;
                if (!d) throw $e('icontext', 'Attempted to trust a value in invalid context. Context: {0}; Value: {1}', a, b);
                if (null === b || b === c || '' === b) return b;
                if ('string' != typeof b) throw $e('itype', 'Attempted to trust a non-string value in a content requiring a string: Context: {0}', a);
                return new d(b)
            }
            function i(a) {
                return a instanceof l ? a.$$unwrapTrustedValue()  : a
            }
            function j(a, b) {
                if (null === b || b === c || '' === b) return b;
                var d = m.hasOwnProperty(a) ? m[a] : null;
                if (d && b instanceof d) return b.$$unwrapTrustedValue();
                if (a === _e.RESOURCE_URL) {
                    if (f(b)) return b;
                    throw $e('insecurl', 'Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}', b.toString())
                }
                if (a === _e.HTML) return k(b);
                throw $e('unsafe', 'Attempting to use an unsafe value in a safe context.')
            }
            var k = function (a) {
                throw $e('unsafe', 'Attempting to use an unsafe value in a safe context.')
            };
            d.has('$sanitize') && (k = d.get('$sanitize'));
            var l = g(),
            m = {
            };
            return m[_e.HTML] = g(l),
            m[_e.CSS] = g(l),
            m[_e.URL] = g(l),
            m[_e.JS] = g(l),
            m[_e.RESOURCE_URL] = g(m[_e.URL]),
            {
                trustAs: h,
                getTrusted: j,
                valueOf: i
            }
        }
    ]
}
function tc() {
    var a = !0;
    this.enabled = function (b) {
        return arguments.length && (a = !!b),
        a
    },
    this.$get = [
        '$parse',
        '$sceDelegate',
        function (b, c) {
            if (a && 8 > yd) throw $e('iequirks', 'Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.');
            var d = O(_e);
            d.isEnabled = function () {
                return a
            },
            d.trustAs = c.trustAs,
            d.getTrusted = c.getTrusted,
            d.valueOf = c.valueOf,
            a || (d.trustAs = d.getTrusted = function (a, b) {
                return b
            }, d.valueOf = q),
            d.parseAs = function (a, c) {
                var e = b(c);
                return e.literal && e.constant ? e : b(c, function (b) {
                    return d.getTrusted(a, b)
                })
            };
            var e = d.parseAs,
            g = d.getTrusted,
            h = d.trustAs;
            return f(_e, function (a, b) {
                var c = td(b);
                d[va('parse_as_' + c)] = function (b) {
                    return e(a, b)
                },
                d[va('get_trusted_' + c)] = function (b) {
                    return g(a, b)
                },
                d[va('trust_as_' + c)] = function (b) {
                    return h(a, b)
                }
            }),
            d
        }
    ]
}
function uc() {
    this.$get = [
        '$window',
        '$document',
        function (a, b) {
            var c,
            d,
            e = {
            },
            f = n((/android (\d+)/.exec(td((a.navigator || {
            }).userAgent)) || []) [1]),
            g = /Boxee/i.test((a.navigator || {
            }).userAgent),
            h = b[0] || {
            },
            i = /^(Moz|webkit|ms)(?=[A-Z])/,
            j = h.body && h.body.style,
            k = !1,
            l = !1;
            if (j) {
                for (var m in j) if (d = i.exec(m)) {
                    c = d[0],
                        c = c.substr(0, 1).toUpperCase() + c.substr(1);
                    break
                }
                c || (c = 'WebkitOpacity' in j && 'webkit'),
                k = !!('transition' in j || c + 'Transition' in j),
                l = !!('animation' in j || c + 'Animation' in j),
                !f || k && l || (k = w(j.webkitTransition), l = w(j.webkitAnimation))
            }
            return {
                history: !(!a.history || !a.history.pushState || 4 > f || g),
                hasEvent: function (a) {
                    if ('input' === a && 11 >= yd) return !1;
                    if (s(e[a])) {
                        var b = h.createElement('div');
                        e[a] = 'on' + a in b
                    }
                    return e[a]
                },
                csp: Pd(),
                vendorPrefix: c,
                transitions: k,
                animations: l,
                android: f
            }
        }
    ]
}
function vc() {
    this.$get = [
        '$templateCache',
        '$http',
        '$q',
        function (a, b, c) {
            function d(e, f) {
                function g(a) {
                    if (!f) throw Ce('tpload', 'Failed to load template: {0} (HTTP status: {1} {2})', e, a.status, a.statusText);
                    return c.reject(a)
                }
                d.totalPendingRequests++;
                var h = b.defaults && b.defaults.transformResponse;
                Ld(h) ? h = h.filter(function (a) {
                    return a !== sb
                })  : h === sb && (h = null);
                var i = {
                    cache: a,
                    transformResponse: h
                };
                return b.get(e, i) ['finally'](function () {
                    d.totalPendingRequests--
                }).then(function (b) {
                    return a.put(e, b.data),
                    b.data
                }, g)
            }
            return d.totalPendingRequests = 0,
            d
        }
    ]
}
function wc() {
    this.$get = [
        '$rootScope',
        '$browser',
        '$location',
        function (a, b, c) {
            var d = {
            };
            return d.findBindings = function (a, b, c) {
                var d = a.getElementsByClassName('ng-binding'),
                e = [
                ];
                return f(d, function (a) {
                    var d = Id.element(a).data('$binding');
                    d && f(d, function (d) {
                        if (c) {
                            var f = new RegExp('(^|\\s)' + Od(b) + '(\\s|\\||$)');
                            f.test(d) && e.push(a)
                        } else - 1 != d.indexOf(b) && e.push(a)
                    })
                }),
            e
            },
        d.findModels = function (a, b, c) {
            for (var d = [
                    'ng-',
                    'data-ng-',
                    'ng\\:'
            ], e = 0; e < d.length; ++e) {
                var f = c ? '=' : '*=',
                g = '[' + d[e] + 'model' + f + '"' + b + '"]',
                h = a.querySelectorAll(g);
                if (h.length) return h
            }
        },
        d.getLocation = function () {
            return c.url()
        },
        d.setLocation = function (b) {
            b !== c.url() && (c.url(b), a.$digest())
        },
        d.whenStable = function (a) {
            b.notifyWhenNoOutstandingRequests(a)
        },
        d
        }
    ]
}
function xc() {
    this.$get = [
        '$rootScope',
        '$browser',
        '$q',
        '$$q',
        '$exceptionHandler',
        function (a, b, c, d, e) {
            function f(f, h, i) {
                z(f) || (i = h, h = f, f = p);
                var j,
        k = R(arguments, 3),
        l = t(i) && !i,
        m = (l ? d : c).defer(),
        n = m.promise;
                return j = b.defer(function () {
                    try {
                        m.resolve(f.apply(null, k))
                    } catch (b) {
                        m.reject(b),
                        e(b)
                    } finally {
                        delete g[n.$$timeoutId]
                    }
                    l || a.$apply()
                }, h),
                n.$$timeoutId = j,
                g[j] = m,
                n
            }
            var g = {
            };
            return f.cancel = function (a) {
                return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject('canceled'), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId))  : !1
            },
            f
        }
    ]
}
function yc(a) {
    var b = a;
    return yd && (af.setAttribute('href', b), b = af.href),
    af.setAttribute('href', b),
    {
        href: af.href,
        protocol: af.protocol ? af.protocol.replace(/:$/, '')  : '',
        host: af.host,
        search: af.search ? af.search.replace(/^\?/, '')  : '',
        hash: af.hash ? af.hash.replace(/^#/, '')  : '',
        hostname: af.hostname,
        port: af.port,
        pathname: '/' === af.pathname.charAt(0) ? af.pathname : '/' + af.pathname
    }
}
function zc(a) {
    var b = w(a) ? yc(a)  : a;
    return b.protocol === bf.protocol && b.host === bf.host
}
function Ac() {
    this.$get = r(a)
}
function Bc(a) {
    function b(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {
            return a
        }
    }
    var d = a[0] || {
    },
    e = {
    },
    f = '';
    return function () {
        var a,
        g,
        h,
        i,
        j,
        k = d.cookie || '';
        if (k !== f) for (f = k, a = f.split('; '), e = {
        }, h = 0; h < a.length; h++) g = a[h],
        i = g.indexOf('='),
        i > 0 && (j = b(g.substring(0, i)), e[j] === c && (e[j] = b(g.substring(i + 1))));
        return e
    }
}
function Cc() {
    this.$get = Bc
}
function Dc(a) {
    function b(d, e) {
        if (u(d)) {
            var g = {
            };
            return f(d, function (a, c) {
                g[c] = b(c, a)
            }),
            g
        }
        return a.factory(d + c, e)
    }
    var c = 'Filter';
    this.register = b,
    this.$get = [
        '$injector',
        function (a) {
            return function (b) {
                return a.get(b + c)
            }
        }
    ],
    b('currency', Jc),
    b('date', Wc),
    b('filter', Ec),
    b('json', Xc),
    b('limitTo', Yc),
    b('lowercase', gf),
    b('number', Kc),
    b('orderBy', Zc),
    b('uppercase', hf)
}
function Ec() {
    return function (a, b, c) {
        if (!e(a)) {
            if (null == a) return a;
            throw d('filter') ('notarray', 'Expected array but received: {0}', a)
        }
        var f,
        g,
        h = Ic(b);
        switch (h) {
            case 'function':
                f = b;
                break;
            case 'boolean':
            case 'null':
            case 'number':
            case 'string':
                g = !0;
            case 'object':
                f = Gc(b, c, g);
                break;
            default:
                return a
        }
        return Array.prototype.filter.call(a, f)
    }
}
function Fc(a) {
    return z(a.toString) && a.toString !== Object.prototype.toString
}
function Gc(a, b, c) {
    var d,
    e = u(a) && '$' in a;
    return b === !0 ? b = P : z(b) || (b = function (a, b) {
        return s(a) ? !1 : null === a || null === b ? a === b : u(b) || u(a) && !Fc(a) ? !1 : (a = td('' + a), b = td('' + b), - 1 !== a.indexOf(b))
    }),
    d = function (d) {
        return e && !u(d) ? Hc(d, a.$, b, !1)  : Hc(d, a, b, c)
    }
}
function Hc(a, b, c, d, e) {
    var f = Ic(a),
    g = Ic(b);
    if ('string' === g && '!' === b.charAt(0)) return !Hc(a, b.substring(1), c, d);
    if (Ld(a)) return a.some(function (a) {
        return Hc(a, b, c, d)
    });
    switch (f) {
        case 'object':
            var h;
            if (d) {
                for (h in a) if ('$' !== h.charAt(0) && Hc(a[h], b, c, !0)) return !0;
                return e ? !1 : Hc(a, b, c, !1)
            }
            if ('object' === g) {
                for (h in b) {
                    var i = b[h];
                    if (!z(i) && !s(i)) {
                        var j = '$' === h,
                            k = j ? a : a[h];
                        if (!Hc(k, i, c, j, j)) return !1
                    }
                }
                return !0
            }
            return c(a, b);
        case 'function':
            return !1;
        default:
            return c(a, b)
    }
}
function Ic(a) {
    return null === a ? 'null' : typeof a
}
function Jc(a) {
    var b = a.NUMBER_FORMATS;
    return function (a, c, d) {
        return s(c) && (c = b.CURRENCY_SYM),
        s(d) && (d = b.PATTERNS[1].maxFrac),
        null == a ? a : Lc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, d).replace(/\u00A4/g, c)
    }
}
function Kc(a) {
    var b = a.NUMBER_FORMATS;
    return function (a, c) {
        return null == a ? a : Lc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
    }
}
function Lc(a, b, c, d, e) {
    if (u(a)) return '';
    var f = 0 > a;
    a = Math.abs(a);
    var g = a === 1 / 0;
    if (!g && !isFinite(a)) return '';
    var h = a + '',
        i = '',
        j = !1,
        k = [
        ];
    if (g && (i = '∞'), !g && - 1 !== h.indexOf('e')) {
        var l = h.match(/([\d\.]+)e(-?)(\d+)/);
        l && '-' == l[2] && l[3] > e + 1 ? a = 0 : (i = h, j = !0)
    }
    if (g || j) e > 0 && 1 > a && (i = a.toFixed(e), a = parseFloat(i));
    else {
        var m = (h.split(cf) [1] || '').length;
        s(e) && (e = Math.min(Math.max(b.minFrac, m), b.maxFrac)),
        a = + (Math.round( + (a.toString() + 'e' + e)).toString() + 'e' + - e);
        var n = ('' + a).split(cf),
        o = n[0];
        n = n[1] || '';
        var p,
        q = 0,
        r = b.lgSize,
        t = b.gSize;
        if (o.length >= r + t) for (q = o.length - r, p = 0; q > p; p++) (q - p) % t === 0 && 0 !== p && (i += c),
        i += o.charAt(p);
        for (p = q; p < o.length; p++) (o.length - p) % r === 0 && 0 !== p && (i += c),
        i += o.charAt(p);
        for (; n.length < e; ) n += '0';
        e && '0' !== e && (i += d + n.substr(0, e))
    }
    return 0 === a && (f = !1),
    k.push(f ? b.negPre : b.posPre, i, f ? b.negSuf : b.posSuf),
    k.join('')
}
function Mc(a, b, c) {
    var d = '';
    for (0 > a && (d = '-', a = - a), a = '' + a; a.length < b; ) a = '0' + a;
    return c && (a = a.substr(a.length - b)),
        d + a
}
function Nc(a, b, c, d) {
    return c = c || 0,
    function (e) {
        var f = e['get' + a]();
        return (c > 0 || f > - c) && (f += c),
        0 === f && - 12 == c && (f = 12),
        Mc(f, b, d)
    }
}
function Oc(a, b) {
    return function (c, d) {
        var e = c['get' + a](),
        f = vd(b ? 'SHORT' + a : a);
        return d[f][e]
    }
}
function Pc(a, b, c) {
    var d = - 1 * c,
    e = d >= 0 ? '+' : '';
    return e += Mc(Math[d > 0 ? 'floor' : 'ceil'](d / 60), 2) + Mc(Math.abs(d % 60), 2)
}
function Qc(a) {
    var b = new Date(a, 0, 1).getDay();
    return new Date(a, 0, (4 >= b ? 5 : 12) - b)
}
function Rc(a) {
    return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay()))
}
function Sc(a) {
    return function (b) {
        var c = Qc(b.getFullYear()),
        d = Rc(b),
        e = + d - + c,
        f = 1 + Math.round(e / 604800000);
        return Mc(f, a)
    }
}
function Tc(a, b) {
    return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
}
function Uc(a, b) {
    return a.getFullYear() <= 0 ? b.ERAS[0] : b.ERAS[1]
}
function Vc(a, b) {
    return a.getFullYear() <= 0 ? b.ERANAMES[0] : b.ERANAMES[1]
}
function Wc(a) {
    function b(a) {
        var b;
        if (b = a.match(c)) {
            var d = new Date(0),
                e = 0,
                f = 0,
                g = b[8] ? d.setUTCFullYear : d.setFullYear,
                h = b[8] ? d.setUTCHours : d.setHours;
            b[9] && (e = n(b[9] + b[10]), f = n(b[9] + b[11])),
            g.call(d, n(b[1]), n(b[2]) - 1, n(b[3]));
            var i = n(b[4] || 0) - e,
            j = n(b[5] || 0) - f,
            k = n(b[6] || 0),
            l = Math.round(1000 * parseFloat('0.' + (b[7] || 0)));
            return h.call(d, i, j, k, l),
            d
        }
        return a
    }
    var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function (c, d, e) {
        var g,
        h,
        i = '',
        j = [
        ];
        if (d = d || 'mediumDate', d = a.DATETIME_FORMATS[d] || d, w(c) && (c = ff.test(c) ? n(c)  : b(c)), x(c) && (c = new Date(c)), !y(c) || !isFinite(c.getTime())) return c;
        for (; d; ) h = ef.exec(d),
            h ? (j = Q(j, h, 1), d = j.pop())  : (j.push(d), d = null);
        var k = c.getTimezoneOffset();
        return e && (k = W(e, c.getTimezoneOffset()), c = Y(c, e, !0)),
        f(j, function (b) {
            g = df[b],
            i += g ? g(c, a.DATETIME_FORMATS, k)  : b.replace(/(^'|'$)/g, '').replace(/''/g, '\'')
        }),
        i
    }
}
function Xc() {
    return function (a, b) {
        return s(b) && (b = 2),
        U(a, b)
    }
}
function Yc() {
    return function (a, b, c) {
        return b = Math.abs(Number(b)) === 1 / 0 ? Number(b)  : n(b),
        isNaN(b) ? a : (x(a) && (a = a.toString()), Ld(a) || w(a) ? (c = !c || isNaN(c) ? 0 : n(c), c = 0 > c && c >= - a.length ? a.length + c : c, b >= 0 ? a.slice(c, c + b)  : 0 === c ? a.slice(b, a.length)  : a.slice(Math.max(0, c + b), c))  : a)
    }
}
function Zc(a) {
    return function (b, c, d) {
        function f(a, b) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d](a, b);
                if (0 !== e) return e
            }
            return 0
        }
        function g(a, b) {
            return b ? function (b, c) {
                return a(c, b)
            }
            : a
        }
        function h(a) {
            switch (typeof a) {
                case 'number':
                case 'boolean':
                case 'string':
                    return !0;
                default:
                    return !1
            }
        }
        function i(a) {
            return null === a ? 'null' : 'function' == typeof a.valueOf && (a = a.valueOf(), h(a)) ? a : 'function' == typeof a.toString && (a = a.toString(), h(a)) ? a : ''
        }
        function j(a, b) {
            var c = typeof a,
            d = typeof b;
            return c === d && 'object' === c && (a = i(a), b = i(b)),
            c === d ? ('string' === c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : b > a ? - 1 : 1)  : d > c ? - 1 : 1
        }
        return e(b) ? (c = Ld(c) ? c : [
                c
        ], 0 === c.length && (c = [
            '+'
        ]), c = c.map(function (b) {
            var c = !1,
            d = b || q;
            if (w(b)) {
                if (('+' == b.charAt(0) || '-' == b.charAt(0)) && (c = '-' == b.charAt(0), b = b.substring(1)), '' === b) return g(j, c);
                if (d = a(b), d.constant) {
                    var e = d();
                    return g(function (a, b) {
                        return j(a[e], b[e])
                    }, c)
                }
            }
            return g(function (a, b) {
                return j(d(a), d(b))
            }, c)
        }), Cd.call(b).sort(g(f, d)))  : b
    }
}
function $c(a) {
    return z(a) && (a = {
        link: a
    }),
    a.restrict = a.restrict || 'AC',
    r(a)
}
function _c(a, b) {
    a.$name = b
}
function ad(a, b, d, e, g) {
    var h = this,
    i = [
    ],
    j = h.$$parentForm = a.parent().controller('form') || lf;
    h.$error = {
    },
    h.$$success = {
    },
    h.$pending = c,
    h.$name = g(b.name || b.ngForm || '') (d),
    h.$dirty = !1,
    h.$pristine = !0,
    h.$valid = !0,
    h.$invalid = !1,
    h.$submitted = !1,
    j.$addControl(h),
    h.$rollbackViewValue = function () {
        f(i, function (a) {
            a.$rollbackViewValue()
        })
    },
    h.$commitViewValue = function () {
        f(i, function (a) {
            a.$commitViewValue()
        })
    },
    h.$addControl = function (a) {
        ma(a.$name, 'input'),
        i.push(a),
        a.$name && (h[a.$name] = a)
    },
    h.$$renameControl = function (a, b) {
        var c = a.$name;
        h[c] === a && delete h[c],
        h[b] = a,
        a.$name = b
    },
    h.$removeControl = function (a) {
        a.$name && h[a.$name] === a && delete h[a.$name],
        f(h.$pending, function (b, c) {
            h.$setValidity(c, null, a)
        }),
        f(h.$error, function (b, c) {
            h.$setValidity(c, null, a)
        }),
        f(h.$$success, function (b, c) {
            h.$setValidity(c, null, a)
        }),
        M(i, a)
    },
    pd({
        ctrl: this,
        $element: a,
        set: function (a, b, c) {
            var d = a[b];
            if (d) {
                var e = d.indexOf(c);
                - 1 === e && d.push(c)
            } else a[b] = [
                c
            ]
        },
        unset: function (a, b, c) {
            var d = a[b];
            d && (M(d, c), 0 === d.length && delete a[b])
        },
        parentForm: j,
        $animate: e
    }),
    h.$setDirty = function () {
        e.removeClass(a, Vf),
        e.addClass(a, Wf),
        h.$dirty = !0,
        h.$pristine = !1,
        j.$setDirty()
    },
    h.$setPristine = function () {
        e.setClass(a, Vf, Wf + ' ' + mf),
        h.$dirty = !1,
        h.$pristine = !0,
        h.$submitted = !1,
        f(i, function (a) {
            a.$setPristine()
        })
    },
    h.$setUntouched = function () {
        f(i, function (a) {
            a.$setUntouched()
        })
    },
    h.$setSubmitted = function () {
        e.addClass(a, mf),
        h.$submitted = !0,
        j.$setSubmitted()
    }
}
function bd(a) {
    a.$formatters.push(function (b) {
        return a.$isEmpty(b) ? b : b.toString()
    })
}
function cd(a, b, c, d, e, f) {
    dd(a, b, c, d, e, f),
    bd(d)
}
function dd(a, b, c, d, e, f) {
    var g = td(b[0].type);
    if (!e.android) {
        var h = !1;
        b.on('compositionstart', function (a) {
            h = !0
        }),
        b.on('compositionend', function () {
            h = !1,
            i()
        })
    }
    var i = function (a) {
        if (j && (f.defer.cancel(j), j = null), !h) {
            var e = b.val(),
                i = a && a.type;
            'password' === g || c.ngTrim && 'false' === c.ngTrim || (e = Nd(e)),
            (d.$viewValue !== e || '' === e && d.$$hasNativeValidators) && d.$setViewValue(e, i)
        }
    };
    if (e.hasEvent('input')) b.on('input', i);
    else {
        var j,
            k = function (a, b, c) {
                j || (j = f.defer(function () {
                    j = null,
                    b && b.value === c || i(a)
                }))
            };
        b.on('keydown', function (a) {
            var b = a.keyCode;
            91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || k(a, this, this.value)
        }),
        e.hasEvent('paste') && b.on('paste cut', k)
    }
    b.on('change', i),
    d.$render = function () {
        b.val(d.$isEmpty(d.$viewValue) ? '' : d.$viewValue)
    }
}
function ed(a, b) {
    if (y(a)) return a;
    if (w(a)) {
        wf.lastIndex = 0;
        var c = wf.exec(a);
        if (c) {
            var d = + c[1],
                e = + c[2],
                f = 0,
                g = 0,
                h = 0,
                i = 0,
                j = Qc(d),
                k = 7 * (e - 1);
            return b && (f = b.getHours(), g = b.getMinutes(), h = b.getSeconds(), i = b.getMilliseconds()),
            new Date(d, 0, j.getDate() + k, f, g, h, i)
        }
    }
    return NaN
}
function fd(a, b) {
    return function (c, d) {
        var e,
        g;
        if (y(c)) return c;
        if (w(c)) {
            if ('"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1)), qf.test(c)) return new Date(c);
            if (a.lastIndex = 0, e = a.exec(c)) return e.shift(),
                g = d ? {
                    yyyy: d.getFullYear(),
                    MM: d.getMonth() + 1,
                    dd: d.getDate(),
                    HH: d.getHours(),
                    mm: d.getMinutes(),
                    ss: d.getSeconds(),
                    sss: d.getMilliseconds() / 1000
                }
            : {
                yyyy: 1970,
                MM: 1,
                dd: 1,
                HH: 0,
                mm: 0,
                ss: 0,
                sss: 0
            },
            f(e, function (a, c) {
                c < b.length && (g[b[c]] = + a)
            }),
            new Date(g.yyyy, g.MM - 1, g.dd, g.HH, g.mm, g.ss || 0, 1000 * g.sss || 0)
        }
        return NaN
    }
}
function gd(a, b, d, e) {
    return function (f, g, h, i, j, k, l) {
        function m(a) {
            return a && !(a.getTime && a.getTime() !== a.getTime())
        }
        function n(a) {
            return t(a) ? y(a) ? a : d(a)  : c
        }
        hd(f, g, h, i),
        dd(f, g, h, i, j, k);
        var o,
        p = i && i.$options && i.$options.timezone;
        if (i.$$parserName = a, i.$parsers.push(function (a) {
            if (i.$isEmpty(a)) return null;
            if (b.test(a)) {
                var e = d(a, o);
                return p && (e = Y(e, p)),
                e
            }
            return c
        }), i.$formatters.push(function (a) {
            if (a && !y(a)) throw $f('datefmt', 'Expected `{0}` to be a date', a);
            return m(a) ? (o = a, o && p && (o = Y(o, p, !0)), l('date') (a, e, p))  : (o = null, '')
        }), t(h.min) || h.ngMin) {
            var q;
            i.$validators.min = function (a) {
                return !m(a) || s(q) || d(a) >= q
            },
            h.$observe('min', function (a) {
                q = n(a),
                i.$validate()
            })
        }
        if (t(h.max) || h.ngMax) {
            var r;
            i.$validators.max = function (a) {
                return !m(a) || s(r) || d(a) <= r
            },
            h.$observe('max', function (a) {
                r = n(a),
                i.$validate()
            })
        }
    }
}
function hd(a, b, d, e) {
    var f = b[0],
    g = e.$$hasNativeValidators = u(f.validity);
    g && e.$parsers.push(function (a) {
        var d = b.prop(sd) || {
        };
        return d.badInput && !d.typeMismatch ? c : a
    })
}
function id(a, b, d, e, f, g) {
    if (hd(a, b, d, e), dd(a, b, d, e, f, g), e.$$parserName = 'number', e.$parsers.push(function (a) {
        return e.$isEmpty(a) ? null : tf.test(a) ? parseFloat(a)  : c
    }), e.$formatters.push(function (a) {
        if (!e.$isEmpty(a)) {
            if (!x(a)) throw $f('numfmt', 'Expected `{0}` to be a number', a);
            a = a.toString()
        }
        return a
    }), t(d.min) || d.ngMin) {
        var h;
        e.$validators.min = function (a) {
            return e.$isEmpty(a) || s(h) || a >= h
        },
        d.$observe('min', function (a) {
            t(a) && !x(a) && (a = parseFloat(a, 10)),
            h = x(a) && !isNaN(a) ? a : c,
            e.$validate()
        })
    }
    if (t(d.max) || d.ngMax) {
        var i;
        e.$validators.max = function (a) {
            return e.$isEmpty(a) || s(i) || i >= a
        },
        d.$observe('max', function (a) {
            t(a) && !x(a) && (a = parseFloat(a, 10)),
            i = x(a) && !isNaN(a) ? a : c,
            e.$validate()
        })
    }
}
function jd(a, b, c, d, e, f) {
    dd(a, b, c, d, e, f),
    bd(d),
    d.$$parserName = 'url',
    d.$validators.url = function (a, b) {
        var c = a || b;
        return d.$isEmpty(c) || rf.test(c)
    }
}
function kd(a, b, c, d, e, f) {
    dd(a, b, c, d, e, f),
    bd(d),
    d.$$parserName = 'email',
    d.$validators.email = function (a, b) {
        var c = a || b;
        return d.$isEmpty(c) || sf.test(c)
    }
}
function ld(a, b, c, d) {
    s(c.name) && b.attr('name', i());
    var e = function (a) {
        b[0].checked && d.$setViewValue(c.value, a && a.type)
    };
    b.on('click', e),
    d.$render = function () {
        var a = c.value;
        b[0].checked = a == d.$viewValue
    },
    c.$observe('value', d.$render)
}
function md(a, b, c, e, f) {
    var g;
    if (t(e)) {
        if (g = a(e), !g.constant) throw d('ngModel') ('constexpr', 'Expected constant expression for `{0}`, but saw `{1}`.', c, e);
        return g(b)
    }
    return f
}
function nd(a, b, c, d, e, f, g, h) {
    var i = md(h, a, 'ngTrueValue', c.ngTrueValue, !0),
    j = md(h, a, 'ngFalseValue', c.ngFalseValue, !1),
    k = function (a) {
        d.$setViewValue(b[0].checked, a && a.type)
    };
    b.on('click', k),
    d.$render = function () {
        b[0].checked = d.$viewValue
    },
    d.$isEmpty = function (a) {
        return a === !1
    },
    d.$formatters.push(function (a) {
        return P(a, i)
    }),
    d.$parsers.push(function (a) {
        return a ? i : j
    })
}
function od(a, b) {
    return a = 'ngClass' + a,
    [
        '$animate',
        function (c) {
            function d(a, b) {
                var c = [
                ];
                a: for (var d = 0; d < a.length; d++) {
                    for (var e = a[d], f = 0; f < b.length; f++) if (e == b[f]) continue a;
                    c.push(e)
                }
                   return c
            }
            function e(a) {
                var b = [
                ];
                return Ld(a) ? (f(a, function (a) {
                    b = b.concat(e(a))
                }), b)  : w(a) ? a.split(' ')  : u(a) ? (f(a, function (a, c) {
                    a && (b = b.concat(c.split(' ')))
                }), b)  : a
            }
            return {
                restrict: 'AC',
                link: function (g, h, i) {
                    function j(a) {
                        var b = l(a, 1);
                        i.$addClass(b)
                    }
                    function k(a) {
                        var b = l(a, - 1);
                        i.$removeClass(b)
                    }
                    function l(a, b) {
                        var c = h.data('$classCounts') || pa(),
                        d = [
                        ];
                        return f(a, function (a) {
                            (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === + (b > 0) && d.push(a))
                        }),
                        h.data('$classCounts', c),
                        d.join(' ')
                    }
                    function m(a, b) {
                        var e = d(b, a),
                        f = d(a, b);
                        e = l(e, 1),
                        f = l(f, - 1),
                        e && e.length && c.addClass(h, e),
                        f && f.length && c.removeClass(h, f)
                    }
                    function n(a) {
                        if (b === !0 || g.$index % 2 === b) {
                            var c = e(a || []);
                            if (o) {
                                if (!P(a, o)) {
                                    var d = e(o);
                                    m(d, c)
                                }
                            } else j(c)
                        }
                        o = O(a)
                    }
                    var o;
                    g.$watch(i[a], n, !0),
                    i.$observe('class', function (b) {
                        n(g.$eval(i[a]))
                    }),
                    'ngClass' !== a && g.$watch('$index', function (c, d) {
                        var f = 1 & c;
                        if (f !== (1 & d)) {
                            var h = e(g.$eval(i[a]));
                            f === b ? j(h)  : k(h)
                        }
                    })
                }
            }
        }
    ]
}
function pd(a) {
    function b(a, b, i) {
        b === c ? d('$pending', a, i)  : e('$pending', a, i),
        G(b) ? b ? (l(h.$error, a, i), k(h.$$success, a, i))  : (k(h.$error, a, i), l(h.$$success, a, i))  : (l(h.$error, a, i), l(h.$$success, a, i)),
        h.$pending ? (f(Zf, !0), h.$valid = h.$invalid = c, g('', null))  : (f(Zf, !1), h.$valid = qd(h.$error), h.$invalid = !h.$valid, g('', h.$valid));
        var j;
        j = h.$pending && h.$pending[a] ? c : h.$error[a] ? !1 : h.$$success[a] ? !0 : null,
        g(a, j),
        m.$setValidity(a, j, h)
    }
    function d(a, b, c) {
        h[a] || (h[a] = {
        }),
        k(h[a], b, c)
    }
    function e(a, b, d) {
        h[a] && l(h[a], b, d),
        qd(h[a]) && (h[a] = c)
    }
    function f(a, b) {
        b && !j[a] ? (n.addClass(i, a), j[a] = !0)  : !b && j[a] && (n.removeClass(i, a), j[a] = !1)
    }
    function g(a, b) {
        a = a ? '-' + ia(a, '-')  : '',
        f(Tf + a, b === !0),
        f(Uf + a, b === !1)
    }
    var h = a.ctrl,
    i = a.$element,
    j = {
    },
    k = a.set,
    l = a.unset,
    m = a.parentForm,
    n = a.$animate;
    j[Uf] = !(j[Tf] = i.hasClass(Tf)),
    h.$setValidity = b
}
function qd(a) {
    if (a) for (var b in a) return !1;
    return !0
}
var rd = /^\/(.+)\/([a-z]*)$/,
    sd = 'validity',
    td = function (a) {
        return w(a) ? a.toLowerCase()  : a
    },
    ud = Object.prototype.hasOwnProperty,
    vd = function (a) {
        return w(a) ? a.toUpperCase()  : a
    },
    wd = function (a) {
        return w(a) ? a.replace(/[A-Z]/g, function (a) {
            return String.fromCharCode(32 | a.charCodeAt(0))
        })  : a
    },
    xd = function (a) {
        return w(a) ? a.replace(/[a-z]/g, function (a) {
            return String.fromCharCode( - 33 & a.charCodeAt(0))
        })  : a
    };
'i' !== 'I'.toLowerCase() && (td = wd, vd = xd);
var yd,
    zd,
    Ad,
    Bd,
    Cd = [
    ].slice,
    Dd = [
    ].splice,
    Ed = [
    ].push,
    Fd = Object.prototype.toString,
    Gd = Object.getPrototypeOf,
    Hd = d('ng'),
    Id = a.angular || (a.angular = {
    }),
    Jd = 0;
yd = b.documentMode,
   p.$inject = [
   ],
   q.$inject = [
   ];
   var Kd,
   Ld = Array.isArray,
   Md = /^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,
   Nd = function (a) {
       return w(a) ? a.trim()  : a
   },
   Od = function (a) {
       return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08')
   },
   Pd = function () {
       if (t(Pd.isActive_)) return Pd.isActive_;
       var a = !(!b.querySelector('[ng-csp]') && !b.querySelector('[data-ng-csp]'));
       if (!a) try {
           new Function('')
       } catch (c) {
           a = !0
       }
       return Pd.isActive_ = a
   },
   Qd = function () {
       if (t(Qd.name_)) return Qd.name_;
       var a,
           c,
           d,
           e,
           f = Rd.length;
       for (c = 0; f > c; ++c) if (d = Rd[c], a = b.querySelector('[' + d.replace(':', '\\:') + 'jq]')) {
           e = a.getAttribute(d + 'jq');
           break
       }
       return Qd.name_ = e
   },
   Rd = [
       'ng-',
       'data-ng-',
       'ng:',
       'x-ng-'
   ],
   Sd = /[A-Z]/g,
   Td = !1,
   Ud = 1,
   Vd = 2,
   Wd = 3,
   Xd = 8,
   Yd = 9,
   Zd = 11,
   $d = {
       full: '1.4.0',
       major: 1,
       minor: 4,
       dot: 0,
       codeName: 'jaracimrman-existence'
   };
Aa.expando = 'ng339';
var _d = Aa.cache = {
},
    ae = 1,
    be = function (a, b, c) {
        a.addEventListener(b, c, !1)
    },
    ce = function (a, b, c) {
        a.removeEventListener(b, c, !1)
    };
Aa._data = function (a) {
    return this.cache[a[this.expando]] || {
    }
};
var de = /([\:\-\_]+(.))/g,
    ee = /^moz([A-Z])/,
    fe = {
        mouseleave: 'mouseout',
        mouseenter: 'mouseover'
    },
    ge = d('jqLite'),
    he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    ie = /<|&#?\w+;/,
    je = /<([\w:]+)/,
    ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    le = {
        option: [
            1,
            '<select multiple="multiple">',
            '</select>'
        ],
        thead: [
            1,
            '<table>',
            '</table>'
        ],
        col: [
            2,
            '<table><colgroup>',
            '</colgroup></table>'
        ],
        tr: [
            2,
            '<table><tbody>',
            '</tbody></table>'
        ],
        td: [
            3,
            '<table><tbody><tr>',
            '</tr></tbody></table>'
        ],
        _default: [
            0,
            '',
            ''
        ]
    };
le.optgroup = le.option,
    le.tbody = le.tfoot = le.colgroup = le.caption = le.thead,
    le.th = le.td;
var me = Aa.prototype = {
    ready: function (c) {
        function d() {
            e || (e = !0, c())
        }
        var e = !1;
        'complete' === b.readyState ? setTimeout(d)  : (this.on('DOMContentLoaded', d), Aa(a).on('load', d))
    },
    toString: function () {
        var a = [
        ];
        return f(this, function (b) {
            a.push('' + b)
        }),
        '[' + a.join(', ') + ']'
    },
    eq: function (a) {
        return zd(a >= 0 ? this[a] : this[this.length + a])
    },
    length: 0,
    push: Ed,
    sort: [
    ].sort,
    splice: [
    ].splice
},
    ne = {
    };
f('multiple,selected,checked,disabled,readOnly,required,open'.split(','), function (a) {
    ne[td(a)] = a
});
var oe = {
};
f('input,select,option,textarea,button,form,details'.split(','), function (a) {
    oe[a] = !0
});
var pe = {
    ngMinlength: 'minlength',
    ngMaxlength: 'maxlength',
    ngMin: 'min',
    ngMax: 'max',
    ngPattern: 'pattern'
};
f({
    data: Ga,
    removeData: Ea
}, function (a, b) {
    Aa[b] = a
}),
    f({
        data: Ga,
        inheritedData: Ma,
        scope: function (a) {
            return zd.data(a, '$scope') || Ma(a.parentNode || a, [
                    '$isolateScope',
                    '$scope'
            ])
        },
        isolateScope: function (a) {
            return zd.data(a, '$isolateScope') || zd.data(a, '$isolateScopeNoTemplate')
        },
        controller: La,
        injector: function (a) {
            return Ma(a, '$injector')
        },
        removeAttr: function (a, b) {
            a.removeAttribute(b)
        },
        hasClass: Ha,
        css: function (a, b, c) {
            return b = va(b),
            t(c) ? void (a.style[b] = c)  : a.style[b]
        },
        attr: function (a, b, d) {
            var e = a.nodeType;
            if (e !== Wd && e !== Vd && e !== Xd) {
                var f = td(b);
                if (ne[f]) {
                    if (!t(d)) return a[b] || (a.attributes.getNamedItem(b) || p).specified ? f : c;
                    d ? (a[b] = !0, a.setAttribute(b, f))  : (a[b] = !1, a.removeAttribute(f))
                } else if (t(d)) a.setAttribute(b, d);
                else if (a.getAttribute) {
                    var g = a.getAttribute(b, 2);
                    return null === g ? c : g
                }
            }
        },
        prop: function (a, b, c) {
            return t(c) ? void (a[b] = c)  : a[b]
        },
        text: function () {
            function a(a, b) {
                if (s(b)) {
                    var c = a.nodeType;
                    return c === Ud || c === Wd ? a.textContent : ''
                }
                a.textContent = b
            }
            return a.$dv = '',
            a
        }(),
        val: function (a, b) {
            if (s(b)) {
                if (a.multiple && 'select' === L(a)) {
                    var c = [
                    ];
                    return f(a.options, function (a) {
                        a.selected && c.push(a.value || a.text)
                    }),
                    0 === c.length ? null : c
                }
                return a.value
            }
            a.value = b
        },
        html: function (a, b) {
            return s(b) ? a.innerHTML : (Ca(a, !0), void (a.innerHTML = b))
        },
        empty: Na
    }, function (a, b) {
        Aa.prototype[b] = function (b, d) {
            var e,
            f,
            g = this.length;
            if (a !== Na && (2 == a.length && a !== Ha && a !== La ? b : d) === c) {
                if (u(b)) {
                    for (e = 0; g > e; e++) if (a === Ga) a(this[e], b);
                    else for (f in b) a(this[e], f, b[f]);
                    return this
                }
                for (var h = a.$dv, i = h === c ? Math.min(g, 1)  : g, j = 0; i > j; j++) {
                    var k = a(this[j], b, d);
                    h = h ? h + k : k
                }
                return h
            }
            for (e = 0; g > e; e++) a(this[e], b, d);
            return this
        }
    }),
    f({
        removeData: Ea,
        on: function Cg(a, b, c, d) {
            if (t(d)) throw ge('onargs', 'jqLite#on() does not support the `selector` or `eventData` parameters');
            if (xa(a)) {
                var e = Fa(a, !0),
                    f = e.events,
                    g = e.handle;
                g || (g = e.handle = Sa(a, f));
                for (var h = b.indexOf(' ') >= 0 ? b.split(' ')  : [
                        b
                ], i = h.length; i--; ) {
                    b = h[i];
                    var j = f[b];
                    j || (f[b] = [
                    ], 'mouseenter' === b || 'mouseleave' === b ? Cg(a, fe[b], function (a) {
                        var c = this,
                        d = a.relatedTarget;
                        (!d || d !== c && !c.contains(d)) && g(a, b)
                    })  : '$destroy' !== b && be(a, b, g), j = f[b]),
                    j.push(c)
                }
            }
        },
        off: Da,
        one: function (a, b, c) {
            a = zd(a),
            a.on(b, function d() {
                a.off(b, c),
                a.off(b, d)
            }),
            a.on(b, c)
        },
        replaceWith: function (a, b) {
            var c,
            d = a.parentNode;
            Ca(a),
            f(new Aa(b), function (b) {
                c ? d.insertBefore(b, c.nextSibling)  : d.replaceChild(b, a),
                c = b
            })
        },
        children: function (a) {
            var b = [
            ];
            return f(a.childNodes, function (a) {
                a.nodeType === Ud && b.push(a)
            }),
            b
        },
        contents: function (a) {
            return a.contentDocument || a.childNodes || []
        },
        append: function (a, b) {
            var c = a.nodeType;
            if (c === Ud || c === Zd) {
                b = new Aa(b);
                for (var d = 0, e = b.length; e > d; d++) {
                    var f = b[d];
                    a.appendChild(f)
                }
            }
        },
        prepend: function (a, b) {
            if (a.nodeType === Ud) {
                var c = a.firstChild;
                f(new Aa(b), function (b) {
                    a.insertBefore(b, c)
                })
            }
        },
        wrap: function (a, b) {
            b = zd(b).eq(0).clone() [0];
            var c = a.parentNode;
            c && c.replaceChild(b, a),
            b.appendChild(a)
        },
        remove: Oa,
        detach: function (a) {
            Oa(a, !0)
        },
        after: function (a, b) {
            var c = a,
            d = a.parentNode;
            b = new Aa(b);
            for (var e = 0, f = b.length; f > e; e++) {
                var g = b[e];
                d.insertBefore(g, c.nextSibling),
                c = g
            }
        },
        addClass: Ja,
        removeClass: Ia,
        toggleClass: function (a, b, c) {
            b && f(b.split(' '), function (b) {
                var d = c;
                s(d) && (d = !Ha(a, b)),
                (d ? Ja : Ia) (a, b)
            })
        },
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== Zd ? b : null
        },
        next: function (a) {
            return a.nextElementSibling
        },
        find: function (a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b)  : [
            ]
        },
        clone: Ba,
        triggerHandler: function (a, b, c) {
            var d,
            e,
            g,
            h = b.type || b,
            i = Fa(a),
            j = i && i.events,
            k = j && j[h];
            k && (d = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function () {
                    return this.defaultPrevented === !0
                },
                stopImmediatePropagation: function () {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function () {
                    return this.immediatePropagationStopped === !0
                },
                stopPropagation: p,
                type: h,
                target: a
            }, b.type && (d = l(d, b)), e = O(k), g = c ? [
            d
            ].concat(c)  : [
            d
            ], f(e, function (b) {
                d.isImmediatePropagationStopped() || b.apply(a, g)
            }))
        }
    }, function (a, b) {
        Aa.prototype[b] = function (b, c, d) {
            for (var e, f = 0, g = this.length; g > f; f++) s(e) ? (e = a(this[f], b, c, d), t(e) && (e = zd(e)))  : Ka(e, a(this[f], b, c, d));
            return t(e) ? e : this
        },
        Aa.prototype.bind = Aa.prototype.on,
        Aa.prototype.unbind = Aa.prototype.off
    }),
    Va.prototype = {
        put: function (a, b) {
            this[Ua(a, this.nextUid)] = b
        },
        get: function (a) {
            return this[Ua(a, this.nextUid)]
        },
        remove: function (a) {
            var b = this[a = Ua(a, this.nextUid)];
            return delete this[a],
            b
        }
    };
var qe = [
    function () {
        this.$get = [
            function () {
                return Va
            }
        ]
    }
],
    re = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
    se = /,/,
    te = /^\s*(_?)(\S+?)\1\s*$/,
    ue = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
    ve = d('$injector');
Ya.$$annotate = Xa;
var we = d('$animate'),
    xe = 1,
    ye = 'ng-animate',
    ze = function () {
        this.$get = [
            '$q',
            '$$rAF',
            function (a, b) {
                function c() {
                }
                return c.all = p,
            c.chain = p,
            c.prototype = {
                end: p,
                cancel: p,
                resume: p,
                pause: p,
                complete: p,
                then: function (c, d) {
                    return a(function (a) {
                        b(function () {
                            a()
                        })
                    }).then(c, d)
                }
            },
            c
            }
        ]
    },
    Ae = function () {
        var a = new Va,
        b = [
        ];
        this.$get = [
            '$$AnimateRunner',
            '$rootScope',
            function (c, d) {
                function e(c, e, g) {
                    var h = a.get(c);
                    h || (a.put(c, h = {
                    }), b.push(c)),
            e && f(e.split(' '), function (a) {
                a && (h[a] = !0)
            }),
            g && f(g.split(' '), function (a) {
                a && (h[a] = !1)
            }),
            b.length > 1 || d.$$postDigest(function () {
                f(b, function (b) {
                    var c = a.get(b);
                    if (c) {
                        var d = ab(b.attr('class')),
                            e = '',
                            g = '';
                        f(c, function (a, b) {
                            var c = !!d[b];
                            a !== c && (a ? e += (e.length ? ' ' : '') + b : g += (g.length ? ' ' : '') + b)
                        }),
                        f(b, function (a) {
                            e && Ja(a, e),
                            g && Ia(a, g)
                        }),
                        a.remove(b)
                    }
                }),
                b.length = 0
            })
                }
                return {
                    enabled: p,
                    on: p,
                    off: p,
                    pin: p,
                    push: function (a, b, d, f) {
                        return f && f(),
                        d = d || {
                        },
                        d.from && a.css(d.from),
                        d.to && a.css(d.to),
                        (d.addClass || d.removeClass) && e(a, d.addClass, d.removeClass),
                        new c
                    }
                }
            }
        ]
    },
    Be = [
        '$provide',
        function (a) {
            var b = this;
            this.$$registeredAnimations = Object.create(null),
        this.register = function (c, d) {
            if (c && '.' !== c.charAt(0)) throw we('notcsel', 'Expecting class selector starting with \'.\' got \'{0}\'.', c);
            var e = c + '-animation';
            b.$$registeredAnimations[c.substr(1)] = e,
            a.factory(e, d)
        },
        this.classNameFilter = function (a) {
            if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null, this.$$classNameFilter)) {
                var b = new RegExp('(\\s+|\\/)' + ye + '(\\s+|\\/)');
                if (b.test(this.$$classNameFilter.toString())) throw we('nongcls', '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', ye)
            }
            return this.$$classNameFilter
        },
        this.$get = [
            '$$animateQueue',
            function (a) {
                function b(a, b, c) {
                    if (c) {
                        var d = _a(c);
                        !d || d.parentNode || d.previousElementSibling || (c = null)
                    }
                    c ? c.after(a)  : b.prepend(a)
                }
                return {
                    on: a.on,
                    off: a.off,
                    pin: a.pin,
                    enabled: a.enabled,
                    cancel: function (a) {
                        a.end && a.end()
                    },
                    enter: function (c, d, e, f) {
                        return d = d && zd(d),
                        e = e && zd(e),
                        d = d || e.parent(),
                        b(c, d, e),
                        a.push(c, 'enter', bb(f))
                    },
                    move: function (c, d, e, f) {
                        return d = d && zd(d),
                        e = e && zd(e),
                        d = d || e.parent(),
                        b(c, d, e),
                        a.push(c, 'move', bb(f))
                    },
                    leave: function (b, c) {
                        return a.push(b, 'leave', bb(c), function () {
                            b.remove()
                        })
                    },
                    addClass: function (b, c, d) {
                        return d = bb(d),
                        d.addClass = $a(d.addclass, c),
                        a.push(b, 'addClass', d)
                    },
                    removeClass: function (b, c, d) {
                        return d = bb(d),
                        d.removeClass = $a(d.removeClass, c),
                        a.push(b, 'removeClass', d)
                    },
                    setClass: function (b, c, d, e) {
                        return e = bb(e),
                        e.addClass = $a(e.addClass, c),
                        e.removeClass = $a(e.removeClass, d),
                        a.push(b, 'setClass', e)
                    },
                    animate: function (b, c, d, e, f) {
                        return f = bb(f),
                        f.from = f.from ? l(f.from, c)  : c,
                        f.to = f.to ? l(f.to, d)  : d,
                        e = e || 'ng-inline-animate',
                        f.tempClasses = $a(f.tempClasses, e),
                        a.push(b, 'animate', f)
                    }
                }
            }
            ]
        }
],
    Ce = d('$compile');
hb.$inject = [
    '$provide',
    '$$sanitizeUriProvider'
];
var De = /^((?:x|data)[\:\-_])/i,
    Ee = d('$controller'),
    Fe = /^(\S+)(\s+as\s+(\w+))?$/,
    Ge = 'application/json',
    He = {
        'Content-Type': Ge + ';charset=utf-8'
    },
    Ie = /^\[|^\{(?!\{)/,
    Je = {
        '[': /]$/,
        '{': /}$/
        },
        Ke = /^\)\]\}',?\n/,
        Le = Id.$interpolateMinErr = d('$interpolate');
Le.throwNoconcat = function (a) {
    throw Le('noconcat', 'Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce', a)
},
    Le.interr = function (a, b) {
        return Le('interr', 'Can\'t interpolate: {0}\n{1}', a, b.toString())
    };
var Me = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
    Ne = {
        http: 80,
        https: 443,
        ftp: 21
    },
    Oe = d('$location'),
    Pe = {
        $$html5: !1,
        $$replace: !1,
        absUrl: Qb('$$absUrl'),
        url: function (a) {
            if (s(a)) return this.$$url;
            var b = Me.exec(a);
            return (b[1] || '' === a) && this.path(decodeURIComponent(b[1])),
            (b[2] || b[1] || '' === a) && this.search(b[3] || ''),
            this.hash(b[5] || ''),
            this
        },
        protocol: Qb('$$protocol'),
        host: Qb('$$host'),
        port: Qb('$$port'),
        path: Rb('$$path', function (a) {
            return a = null !== a ? a.toString()  : '',
            '/' == a.charAt(0) ? a : '/' + a
        }),
        search: function (a, b) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (w(a) || x(a)) a = a.toString(),
                    this.$$search = _(a);
                    else {
                        if (!u(a)) throw Oe('isrcharg', 'The first argument of the `$location#search()` call must be a string or an object.');
                        a = N(a, {
                        }),
                            f(a, function (b, c) {
                                null == b && delete a[c]
                            }),
                            this.$$search = a
                    }
                    break;
                default:
                    s(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
            }
            return this.$$compose(),
            this
        },
        hash: Rb('$$hash', function (a) {
            return null !== a ? a.toString()  : ''
        }),
        replace: function () {
            return this.$$replace = !0,
            this
        }
    };
f([Pb,
        Ob,
        Nb], function (a) {
            a.prototype = Object.create(Pe),
            a.prototype.state = function (b) {
                if (!arguments.length) return this.$$state;
                if (a !== Nb || !this.$$html5) throw Oe('nostate', 'History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API');
                return this.$$state = s(b) ? null : b,
                    this
            }
        });
var Qe = d('$parse'),
    Re = Function.prototype.call,
    Se = Function.prototype.apply,
    Te = Function.prototype.bind,
    Ue = pa();
f('+ - * / % === !== == != < > <= >= && || ! = |'.split(' '), function (a) {
    Ue[a] = !0
});
var Ve = {
    n: '\n',
    f: '\f',
    r: '\r',
    t: '\t',
    v: '\v',
    '\'': '\'',
    '"': '"'
},
    We = function (a) {
        this.options = a
    };
We.prototype = {
    constructor: We,
    lex: function (a) {
        for (this.text = a, this.index = 0, this.tokens = [
        ]; this.index < this.text.length; ) {
            var b = this.text.charAt(this.index);
            if ('"' === b || '\'' === b) this.readString(b);
            else if (this.isNumber(b) || '.' === b && this.isNumber(this.peek())) this.readNumber();
            else if (this.isIdent(b)) this.readIdent();
            else if (this.is(b, '(){}[].,;:?')) this.tokens.push({
                index: this.index,
                text: b
            }),
                this.index++;
            else if (this.isWhitespace(b)) this.index++;
            else {
                var c = b + this.peek(),
                    d = c + this.peek(2),
                    e = Ue[b],
                    f = Ue[c],
                    g = Ue[d];
                if (e || f || g) {
                    var h = g ? d : f ? c : b;
                    this.tokens.push({
                        index: this.index,
                        text: h,
                        operator: !0
                    }),
                    this.index += h.length
                } else this.throwError('Unexpected next character ', this.index, this.index + 1)
            }
        }
        return this.tokens
    },
    is: function (a, b) {
        return - 1 !== b.indexOf(a)
    },
    peek: function (a) {
        var b = a || 1;
        return this.index + b < this.text.length ? this.text.charAt(this.index + b)  : !1
    },
    isNumber: function (a) {
        return a >= '0' && '9' >= a && 'string' == typeof a
    },
    isWhitespace: function (a) {
        return ' ' === a || '\r' === a || '\t' === a || '\n' === a || '\v' === a || ' ' === a
    },
    isIdent: function (a) {
        return a >= 'a' && 'z' >= a || a >= 'A' && 'Z' >= a || '_' === a || '$' === a
    },
    isExpOperator: function (a) {
        return '-' === a || '+' === a || this.isNumber(a)
    },
    throwError: function (a, b, c) {
        c = c || this.index;
        var d = t(b) ? 's ' + b + '-' + this.index + ' [' + this.text.substring(b, c) + ']' : ' ' + c;
        throw Qe('lexerr', 'Lexer Error: {0} at column{1} in expression [{2}].', a, d, this.text)
    },
    readNumber: function () {
        for (var a = '', b = this.index; this.index < this.text.length; ) {
            var c = td(this.text.charAt(this.index));
            if ('.' == c || this.isNumber(c)) a += c;
            else {
                var d = this.peek();
                if ('e' == c && this.isExpOperator(d)) a += c;
                else if (this.isExpOperator(c) && d && this.isNumber(d) && 'e' == a.charAt(a.length - 1)) a += c;
                else {
                    if (!this.isExpOperator(c) || d && this.isNumber(d) || 'e' != a.charAt(a.length - 1)) break;
                    this.throwError('Invalid exponent')
                }
            }
            this.index++
        }
        this.tokens.push({
            index: b,
            text: a,
            constant: !0,
            value: Number(a)
        })
    },
    readIdent: function () {
        for (var a = this.index; this.index < this.text.length; ) {
            var b = this.text.charAt(this.index);
            if (!this.isIdent(b) && !this.isNumber(b)) break;
            this.index++
        }
        this.tokens.push({
            index: a,
            text: this.text.slice(a, this.index),
            identifier: !0
        })
    },
    readString: function (a) {
        var b = this.index;
        this.index++;
        for (var c = '', d = a, e = !1; this.index < this.text.length; ) {
            var f = this.text.charAt(this.index);
            if (d += f, e) {
                if ('u' === f) {
                    var g = this.text.substring(this.index + 1, this.index + 5);
                    g.match(/[\da-f]{4}/i) || this.throwError('Invalid unicode escape [\\u' + g + ']'),
                    this.index += 4,
                    c += String.fromCharCode(parseInt(g, 16))
                } else {
                    var h = Ve[f];
                    c += h || f
                }
                e = !1
            } else if ('\\' === f) e = !0;
            else {
                if (f === a) return this.index++,
                    void this.tokens.push({
                        index: b,
                        text: d,
                        constant: !0,
                        value: c
                    });
                c += f
            }
            this.index++
        }
        this.throwError('Unterminated quote', b)
    }
};
var Xe = function (a, b) {
    this.lexer = a,
    this.options = b
};
Xe.Program = 'Program',
    Xe.ExpressionStatement = 'ExpressionStatement',
    Xe.AssignmentExpression = 'AssignmentExpression',
    Xe.ConditionalExpression = 'ConditionalExpression',
    Xe.LogicalExpression = 'LogicalExpression',
    Xe.BinaryExpression = 'BinaryExpression',
    Xe.UnaryExpression = 'UnaryExpression',
    Xe.CallExpression = 'CallExpression',
    Xe.MemberExpression = 'MemberExpression',
    Xe.Identifier = 'Identifier',
    Xe.Literal = 'Literal',
    Xe.ArrayExpression = 'ArrayExpression',
    Xe.Property = 'Property',
    Xe.ObjectExpression = 'ObjectExpression',
    Xe.ThisExpression = 'ThisExpression',
    Xe.NGValueParameter = 'NGValueParameter',
    Xe.prototype = {
        ast: function (a) {
            this.text = a,
            this.tokens = this.lexer.lex(a);
            var b = this.program();
            return 0 !== this.tokens.length && this.throwError('is an unexpected token', this.tokens[0]),
            b
        },
        program: function () {
            for (var a = [
            ]; ; ) if (this.tokens.length > 0 && !this.peek('}', ')', ';', ']') && a.push(this.expressionStatement()), !this.expect(';')) return {
                type: Xe.Program,
                body: a
            }
        },
        expressionStatement: function () {
            return {
                type: Xe.ExpressionStatement,
                expression: this.filterChain()
            }
        },
        filterChain: function () {
            for (var a, b = this.expression(); a = this.expect('|'); ) b = this.filter(b);
            return b
        },
        expression: function () {
            return this.assignment()
        },
        assignment: function () {
            var a = this.ternary();
            return this.expect('=') && (a = {
                type: Xe.AssignmentExpression,
                left: a,
                right: this.assignment(),
                operator: '='
            }),
            a
        },
        ternary: function () {
            var a,
            b,
            c = this.logicalOR();
            return this.expect('?') && (a = this.expression(), this.consume(':')) ? (b = this.expression(), {
                type: Xe.ConditionalExpression,
                test: c,
                alternate: a,
                consequent: b
            })  : c
        },
        logicalOR: function () {
            for (var a = this.logicalAND(); this.expect('||'); ) a = {
                type: Xe.LogicalExpression,
                operator: '||',
                left: a,
                right: this.logicalAND()
            };
            return a
        },
        logicalAND: function () {
            for (var a = this.equality(); this.expect('&&'); ) a = {
                type: Xe.LogicalExpression,
                operator: '&&',
                left: a,
                right: this.equality()
            };
            return a
        },
        equality: function () {
            for (var a, b = this.relational(); a = this.expect('==', '!=', '===', '!=='); ) b = {
                type: Xe.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.relational()
            };
            return b
        },
        relational: function () {
            for (var a, b = this.additive(); a = this.expect('<', '>', '<=', '>='); ) b = {
                type: Xe.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.additive()
            };
            return b
        },
        additive: function () {
            for (var a, b = this.multiplicative(); a = this.expect('+', '-'); ) b = {
                type: Xe.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.multiplicative()
            };
            return b
        },
        multiplicative: function () {
            for (var a, b = this.unary(); a = this.expect('*', '/', '%'); ) b = {
                type: Xe.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.unary()
            };
            return b
        },
        unary: function () {
            var a;
            return (a = this.expect('+', '-', '!')) ? {
                type: Xe.UnaryExpression,
                operator: a.text,
                prefix: !0,
                argument: this.unary()
            }
            : this.primary()
        },
        primary: function () {
            var a;
            this.expect('(') ? (a = this.filterChain(), this.consume(')'))  : this.expect('[') ? a = this.arrayDeclaration()  : this.expect('{') ? a = this.object()  : this.constants.hasOwnProperty(this.peek().text) ? a = N(this.constants[this.consume().text])  : this.peek().identifier ? a = this.identifier()  : this.peek().constant ? a = this.constant()  : this.throwError('not a primary expression', this.peek());
            for (var b; b = this.expect('(', '[', '.'); ) '(' === b.text ? (a = {
                type: Xe.CallExpression,
                callee: a,
                arguments: this.parseArguments()
            }, this.consume(')'))  : '[' === b.text ? (a = {
                type: Xe.MemberExpression,
                object: a,
                property: this.expression(),
                computed: !0
            }, this.consume(']'))  : '.' === b.text ? a = {
                type: Xe.MemberExpression,
                object: a,
                property: this.identifier(),
                computed: !1
            }
            : this.throwError('IMPOSSIBLE');
            return a
        },
        filter: function (a) {
            for (var b = [
                    a
            ], c = {
                type: Xe.CallExpression,
                callee: this.identifier(),
                arguments: b,
                filter: !0
            }; this.expect(':'); ) b.push(this.expression());
            return c
        },
        parseArguments: function () {
            var a = [
            ];
            if (')' !== this.peekToken().text) do a.push(this.expression());
            while (this.expect(','));
            return a
        },
        identifier: function () {
            var a = this.consume();
            return a.identifier || this.throwError('is not a valid identifier', a),
            {
                type: Xe.Identifier,
                name: a.text
            }
        },
        constant: function () {
            return {
                type: Xe.Literal,
                value: this.consume().value
            }
        },
        arrayDeclaration: function () {
            var a = [
            ];
            if (']' !== this.peekToken().text) do {
                if (this.peek(']')) break;
                a.push(this.expression())
            } while (this.expect(','));
            return this.consume(']'),
            {
                type: Xe.ArrayExpression,
                elements: a
            }
        },
        object: function () {
            var a,
            b = [
            ];
            if ('}' !== this.peekToken().text) do {
                if (this.peek('}')) break;
                a = {
                    type: Xe.Property,
                    kind: 'init'
                },
                    this.peek().constant ? a.key = this.constant()  : this.peek().identifier ? a.key = this.identifier()  : this.throwError('invalid key', this.peek()),
                    this.consume(':'),
                    a.value = this.expression(),
                    b.push(a)
            } while (this.expect(','));
            return this.consume('}'),
            {
                type: Xe.ObjectExpression,
                properties: b
            }
        },
        throwError: function (a, b) {
            throw Qe('syntax', 'Syntax Error: Token \'{0}\' {1} at column {2} of the expression [{3}] starting at [{4}].', b.text, a, b.index + 1, this.text, this.text.substring(b.index))
        },
        consume: function (a) {
            if (0 === this.tokens.length) throw Qe('ueoe', 'Unexpected end of expression: {0}', this.text);
            var b = this.expect(a);
            return b || this.throwError('is unexpected, expecting [' + a + ']', this.peek()),
            b
        },
        peekToken: function () {
            if (0 === this.tokens.length) throw Qe('ueoe', 'Unexpected end of expression: {0}', this.text);
            return this.tokens[0]
        },
        peek: function (a, b, c, d) {
            return this.peekAhead(0, a, b, c, d)
        },
        peekAhead: function (a, b, c, d, e) {
            if (this.tokens.length > a) {
                var f = this.tokens[a],
                    g = f.text;
                if (g === b || g === c || g === d || g === e || !b && !c && !d && !e) return f
            }
            return !1
        },
        expect: function (a, b, c, d) {
            var e = this.peek(a, b, c, d);
            return e ? (this.tokens.shift(), e)  : !1
        },
        constants: {
            'true': {
                type: Xe.Literal,
                value: !0
            },
            'false': {
                type: Xe.Literal,
                value: !1
            },
            'null': {
                type: Xe.Literal,
                value: null
            },
            undefined: {
                type: Xe.Literal,
                value: c
            },
            'this': {
                type: Xe.ThisExpression
            }
        }
    },
    ec.prototype = {
        compile: function (a, b) {
            var d = this,
            e = this.astBuilder.ast(a);
            this.state = {
                nextId: 0,
                filters: {
                },
                expensiveChecks: b,
                fn: {
                    vars: [
                    ],
                    body: [
                    ],
                    own: {
                    }
                },
                assign: {
                    vars: [
                    ],
                    body: [
                    ],
                    own: {
                    }
                },
                inputs: [
                ]
            },
            $b(e, d.$filter);
            var g,
            h = '';
            if (this.stage = 'assign', g = bc(e)) {
                this.state.computing = 'assign';
                var i = this.nextId();
                this.recurse(g, i),
                h = 'fn.assign=' + this.generateFunction('assign', 's,v,l')
            }
            var j = _b(e.body);
            d.stage = 'inputs',
            f(j, function (a, b) {
                var c = 'fn' + b;
                d.state[c] = {
                    vars: [
                    ],
                    body: [
                    ],
                    own: {
                    }
                },
                d.state.computing = c;
                var e = d.nextId();
                d.recurse(a, e),
                d.return_(e),
                d.state.inputs.push(c),
                a.watchId = b
            }),
            this.state.computing = 'fn',
            this.stage = 'main',
            this.recurse(e);
            var k = '"' + this.USE + ' ' + this.STRICT + '";\n' + this.filterPrefix() + 'var fn=' + this.generateFunction('fn', 's,l,a,i') + h + this.watchFns() + 'return fn;',
            l = new Function('$filter', 'ensureSafeMemberName', 'ensureSafeObject', 'ensureSafeFunction', 'ifDefined', 'plus', 'text', k) (this.$filter, Ub, Vb, Wb, Xb, Yb, a);
            return this.state = this.stage = c,
            l.literal = cc(e),
            l.constant = dc(e),
            l
        },
        USE: 'use',
        STRICT: 'strict',
        watchFns: function () {
            var a = [
            ],
            b = this.state.inputs,
            c = this;
            return f(b, function (b) {
                a.push('var ' + b + '=' + c.generateFunction(b, 's'))
            }),
            b.length && a.push('fn.inputs=[' + b.join(',') + '];'),
            a.join('')
        },
        generateFunction: function (a, b) {
            return 'function(' + b + '){' + this.varsPrefix(a) + this.body(a) + '};'
        },
        filterPrefix: function () {
            var a = [
            ],
            b = this;
            return f(this.state.filters, function (c, d) {
                a.push(c + '=$filter(' + b.escape(d) + ')')
                        }),
                a.length ? 'var ' + a.join(',') + ';' : ''
                },
                varsPrefix: function (a) {
                    return this.state[a].vars.length ? 'var ' + this.state[a].vars.join(',') + ';' : ''
                },
                body: function (a) {
                    return this.state[a].body.join('')
                },
                recurse: function (a, b, d, e, g, h) {
                    var i,
                    j,
                    k,
                    l,
                    m = this;
                    if (e = e || p, !h && t(a.watchId)) return b = b || this.nextId(),
                    void this.if_('i', this.lazyAssign(b, this.computedMember('i', a.watchId)), this.lazyRecurse(a, b, d, e, g, !0));
                    switch (a.type) {
                        case Xe.Program:
                            f(a.body, function (b, d) {
                                m.recurse(b.expression, c, c, function (a) {
                                    j = a
                                }),
                                d !== a.body.length - 1 ? m.current().body.push(j, ';')  : m.return_(j)
                            });
                            break;
                        case Xe.Literal:
                            l = this.escape(a.value),
                            this.assign(b, l),
                            e(l);
                            break;
                        case Xe.UnaryExpression:
                            this.recurse(a.argument, c, c, function (a) {
                                j = a
                            }),
                            l = a.operator + '(' + this.ifDefined(j, 0) + ')',
                            this.assign(b, l),
                            e(l);
                            break;
                        case Xe.BinaryExpression:
                            this.recurse(a.left, c, c, function (a) {
                                i = a
                            }),
                            this.recurse(a.right, c, c, function (a) {
                                j = a
                            }),
                            l = '+' === a.operator ? this.plus(i, j)  : '-' === a.operator ? this.ifDefined(i, 0) + a.operator + this.ifDefined(j, 0)  : '(' + i + ')' + a.operator + '(' + j + ')',
                            this.assign(b, l),
                            e(l);
                            break;
                        case Xe.LogicalExpression:
                            b = b || this.nextId(),
                            m.recurse(a.left, b),
                            m.if_('&&' === a.operator ? b : m.not(b), m.lazyRecurse(a.right, b)),
                            e(b);
                            break;
                        case Xe.ConditionalExpression:
                            b = b || this.nextId(),
                            m.recurse(a.test, b),
                            m.if_(b, m.lazyRecurse(a.alternate, b), m.lazyRecurse(a.consequent, b)),
                            e(b);
                            break;
                        case Xe.Identifier:
                            b = b || this.nextId(),
                            d && (d.context = 'inputs' === m.stage ? 's' : this.assign(this.nextId(), this.getHasOwnProperty('l', a.name) + '?l:s'), d.computed = !1, d.name = a.name),
                            Ub(a.name),
                            m.if_('inputs' === m.stage || m.not(m.getHasOwnProperty('l', a.name)), function () {
                                m.if_('inputs' === m.stage || 's', function () {
                                    g && 1 !== g && m.if_(m.not(m.nonComputedMember('s', a.name)), m.lazyAssign(m.nonComputedMember('s', a.name), '{}')),
                                    m.assign(b, m.nonComputedMember('s', a.name))
                                })
                            }, b && m.lazyAssign(b, m.nonComputedMember('l', a.name))),
                            (m.state.expensiveChecks || hc(a.name)) && m.addEnsureSafeObject(b),
                            e(b);
                            break;
                        case Xe.MemberExpression:
                            i = d && (d.context = this.nextId()) || this.nextId(),
                            b = b || this.nextId(),
                            m.recurse(a.object, i, c, function () {
                                m.if_(m.notNull(i), function () {
                                    a.computed ? (j = m.nextId(), m.recurse(a.property, j), m.addEnsureSafeMemberName(j), g && 1 !== g && m.if_(m.not(m.computedMember(i, j)), m.lazyAssign(m.computedMember(i, j), '{}')), l = m.ensureSafeObject(m.computedMember(i, j)), m.assign(b, l), d && (d.computed = !0, d.name = j))  : (Ub(a.property.name), g && 1 !== g && m.if_(m.not(m.nonComputedMember(i, a.property.name)), m.lazyAssign(m.nonComputedMember(i, a.property.name), '{}')), l = m.nonComputedMember(i, a.property.name), (m.state.expensiveChecks || hc(a.property.name)) && (l = m.ensureSafeObject(l)), m.assign(b, l), d && (d.computed = !1, d.name = a.property.name)),
                                    e(b)
                                })
                            }, !!g);
                            break;
                        case Xe.CallExpression:
                            b = b || this.nextId(),
                            a.filter ? (j = m.filter(a.callee.name), k = [
                            ], f(a.arguments, function (a) {
                                var b = m.nextId();
                                m.recurse(a, b),
                                k.push(b)
                            }), l = j + '(' + k.join(',') + ')', m.assign(b, l), e(b))  : (j = m.nextId(), i = {
                            }, k = [
                            ], m.recurse(a.callee, j, i, function () {
                                m.if_(m.notNull(j), function () {
                                    m.addEnsureSafeFunction(j),
                                    f(a.arguments, function (a) {
                                        m.recurse(a, m.nextId(), c, function (a) {
                                            k.push(m.ensureSafeObject(a))
                                        })
                                    }),
                                    i.name ? (m.state.expensiveChecks || m.addEnsureSafeObject(i.context), l = m.member(i.context, i.name, i.computed) + '(' + k.join(',') + ')')  : l = j + '(' + k.join(',') + ')',
                                    l = m.ensureSafeObject(l),
                                    m.assign(b, l),
                                    e(b)
                                })
                            }));
                            break;
                        case Xe.AssignmentExpression:
                            if (j = this.nextId(), i = {
                            }, !ac(a.left)) throw Qe('lval', 'Trying to assing a value to a non l-value');
                            this.recurse(a.left, c, i, function () {
                                m.if_(m.notNull(i.context), function () {
                                    m.recurse(a.right, j),
                                    m.addEnsureSafeObject(m.member(i.context, i.name, i.computed)),
                                    l = m.member(i.context, i.name, i.computed) + a.operator + j,
                                    m.assign(b, l),
                                    e(b || l)
                                })
                            }, 1);
                            break;
                        case Xe.ArrayExpression:
                            k = [
                            ],
                            f(a.elements, function (a) {
                                m.recurse(a, m.nextId(), c, function (a) {
                                    k.push(a)
                                })
                            }),
                            l = '[' + k.join(',') + ']',
                            this.assign(b, l),
                            e(l);
                            break;
                        case Xe.ObjectExpression:
                            k = [
                            ],
                            f(a.properties, function (a) {
                                m.recurse(a.value, m.nextId(), c, function (b) {
                                    k.push(m.escape(a.key.type === Xe.Identifier ? a.key.name : '' + a.key.value) + ':' + b)
                                })
                            }),
                            l = '{' + k.join(',') + '}',
                            this.assign(b, l),
                            e(l);
                            break;
                        case Xe.ThisExpression:
                            this.assign(b, 's'),
                            e('s');
                            break;
                        case Xe.NGValueParameter:
                            this.assign(b, 'v'),
                            e('v')
                    }
                },
            getHasOwnProperty: function (a, b) {
                var c = a + '.' + b,
                d = this.current().own;
                return d.hasOwnProperty(c) || (d[c] = this.nextId(!1, a + '&&(' + this.escape(b) + ' in ' + a + ')')),
                        d[c]
                        },
                        assign: function (a, b) {
                            return a ? (this.current().body.push(a, '=', b, ';'), a)  : void 0
                        },
                        filter: function (a) {
                            return this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0)),
                            this.state.filters[a]
                        },
                        ifDefined: function (a, b) {
                            return 'ifDefined(' + a + ',' + this.escape(b) + ')'
                                    },
                                    plus: function (a, b) {
                                        return 'plus(' + a + ',' + b + ')'
                                                },
                                                return_: function (a) {
                                                    this.current().body.push('return ', a, ';')
                                                },
                                                if_: function (a, b, c) {
                                                    if (a === !0) b();
                                                    else {
                                                        var d = this.current().body;
                                                        d.push('if(', a, '){'),
                                                            b(),
                                                            d.push('}'),
                                                            c && (d.push('else{'), c(), d.push('}'))
                                                            }
                                                        },
                                                        not: function (a) {
                                                            return '!(' + a + ')'
                                                                    },
                                                                    notNull: function (a) {
                                                                        return a + '!=null'
                                                                    },
                                                                    nonComputedMember: function (a, b) {
                                                                        return a + '.' + b
                                                                    },
                                                                    computedMember: function (a, b) {
                                                                        return a + '[' + b + ']'
                                                                    },
                                                                    member: function (a, b, c) {
                                                                        return c ? this.computedMember(a, b)  : this.nonComputedMember(a, b)
                                                                    },
                                                                    addEnsureSafeObject: function (a) {
                                                                        this.current().body.push(this.ensureSafeObject(a), ';')
                                                                    },
                                                                    addEnsureSafeMemberName: function (a) {
                                                                        this.current().body.push(this.ensureSafeMemberName(a), ';')
                                                                    },
                                                                    addEnsureSafeFunction: function (a) {
                                                                        this.current().body.push(this.ensureSafeFunction(a), ';')
                                                                    },
                                                        ensureSafeObject: function (a) {
                                                            return 'ensureSafeObject(' + a + ',text)'
                                                        },
                                                        ensureSafeMemberName: function (a) {
                                                            return 'ensureSafeMemberName(' + a + ',text)'
                                                        },
                                                        ensureSafeFunction: function (a) {
                                                            return 'ensureSafeFunction(' + a + ',text)'
                                                        },
                                                        lazyRecurse: function (a, b, c, d, e, f) {
                                                            var g = this;
                                                            return function () {
                                                                g.recurse(a, b, c, d, e, f)
                                                            }
                                                        },
                                                        lazyAssign: function (a, b) {
                                                            var c = this;
                                                            return function () {
                                                                c.assign(a, b)
                                                            }
                                                        },
                                                        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
                                                        stringEscapeFn: function (a) {
                                                            return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice( - 4)
                                                        },
                                                        escape: function (a) {
                                                            if (w(a)) return '\'' + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + '\'';
                                                            if (x(a)) return a.toString();
                                                            if (a === !0) return 'true';
                                                            if (a === !1) return 'false';
                                                            if (null === a) return 'null';
                                                            if ('undefined' == typeof a) return 'undefined';
                                                            throw Qe('esc', 'IMPOSSIBLE')
                                                        },
                                                        nextId: function (a, b) {
                                                            var c = 'v' + this.state.nextId++;
                                                            return a || this.current().vars.push(c + (b ? '=' + b : '')),
                                                            c
                                                        },
                                                        current: function () {
                                                            return this.state[this.state.computing]
                                                        }
                                                    },
                                                        fc.prototype = {
                                                            compile: function (a, b) {
                                                                var c = this,
                                                                d = this.astBuilder.ast(a);
                                                                this.expression = a,
                                                                this.expensiveChecks = b,
                                                                $b(d, c.$filter);
                                                                var e,
                                                                g;
                                                                (e = bc(d)) && (g = this.recurse(e));
                                                                var h,
                                                                i = _b(d.body);
                                                                i && (h = [
                                                                ], f(i, function (a, b) {
                                                                    var d = c.recurse(a);
                                                                    a.input = d,
                                                                    h.push(d),
                                                                    a.watchId = b
                                                                }));
                                                                var j = [
                                                                ];
                                                                f(d.body, function (a) {
                                                                    j.push(c.recurse(a.expression))
                                                                });
                                                                var k = 0 === d.body.length ? function () {
                                                                }
                                                                : 1 === d.body.length ? j[0] : function (a, b) {
                                                                    var c;
                                                                    return f(j, function (d) {
                                                                        c = d(a, b)
                                                                    }),
                                                                    c
                                                                };
                                                                return g && (k.assign = function (a, b, c) {
                                                                    return g(a, c, b)
                                                                }),
                                                                h && (k.inputs = h),
                                                                k.literal = cc(d),
                                                                k.constant = dc(d),
                                                                k
                                                            },
                                                            recurse: function (a, b, d) {
                                                                var e,
                                                                g,
                                                                h,
                                                                i = this;
                                                                if (a.input) return this.inputs(a.input, a.watchId);
                                                                switch (a.type) {
                                                                    case Xe.Literal:
                                                                        return this.value(a.value, b);
                                                                    case Xe.UnaryExpression:
                                                                        return g = this.recurse(a.argument),
                                                                        this['unary' + a.operator](g, b);
                                                                    case Xe.BinaryExpression:
                                                                        return e = this.recurse(a.left),
                                                                        g = this.recurse(a.right),
                                                                        this['binary' + a.operator](e, g, b);
                                                                    case Xe.LogicalExpression:
                                                                        return e = this.recurse(a.left),
                                                                        g = this.recurse(a.right),
                                                                        this['binary' + a.operator](e, g, b);
                                                                    case Xe.ConditionalExpression:
                                                                        return this['ternary?:'](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);
                                                                    case Xe.Identifier:
                                                                        return Ub(a.name, i.expression),
                                                                        i.identifier(a.name, i.expensiveChecks || hc(a.name), b, d, i.expression);
                                                                    case Xe.MemberExpression:
                                                                        return e = this.recurse(a.object, !1, !!d),
                                                                        a.computed || (Ub(a.property.name, i.expression), g = a.property.name),
                                                                        a.computed && (g = this.recurse(a.property)),
                                                                        a.computed ? this.computedMember(e, g, b, d, i.expression)  : this.nonComputedMember(e, g, i.expensiveChecks, b, d, i.expression);
                                                                    case Xe.CallExpression:
                                                                        return h = [
                                                                        ],
                                                                        f(a.arguments, function (a) {
                                                                            h.push(i.recurse(a))
                                                                        }),
                                                                        a.filter && (g = this.$filter(a.callee.name)),
                                                                        a.filter || (g = this.recurse(a.callee, !0)),
                                                                        a.filter ? function (a, d, e, f) {
                                                                            for (var i = [
                                                                            ], j = 0; j < h.length; ++j) i.push(h[j](a, d, e, f));
                                                                            var k = g.apply(c, i, f);
                                                                            return b ? {
                                                                                context: c,
                                                                                name: c,
                                                                                value: k
                                                                            }
                                                                            : k
                                                                        }
                                                                        : function (a, c, d, e) {
                                                                            var f,
                                                                            j = g(a, c, d, e);
                                                                            if (null != j.value) {
                                                                                Vb(j.context, i.expression),
                                                                                    Wb(j.value, i.expression);
                                                                                for (var k = [
                                                                                ], l = 0; l < h.length; ++l) k.push(Vb(h[l](a, c, d, e), i.expression));
                                                                                f = Vb(j.value.apply(j.context, k), i.expression)
                                                                            }
                                                                            return b ? {
                                                                                value: f
                                                                            }
                                                                            : f
                                                                        };
                                                                    case Xe.AssignmentExpression:
                                                                        return e = this.recurse(a.left, !0, 1),
                                                                        g = this.recurse(a.right),
                                                                        function (a, c, d, f) {
                                                                            var h = e(a, c, d, f),
                                                                            j = g(a, c, d, f);
                                                                            return Vb(h.value, i.expression),
                                                                            h.context[h.name] = j,
                                                                            b ? {
                                                                                value: j
                                                                            }
                                                                            : j
                                                                        };
                                                                    case Xe.ArrayExpression:
                                                                        return h = [
                                                                        ],
                                                                        f(a.elements, function (a) {
                                                                            h.push(i.recurse(a))
                                                                        }),
                                                                        function (a, c, d, e) {
                                                                            for (var f = [
                                                                            ], g = 0; g < h.length; ++g) f.push(h[g](a, c, d, e));
                                                                            return b ? {
                                                                                value: f
                                                                            }
                                                                            : f
                                                                        };
                                                                    case Xe.ObjectExpression:
                                                                        return h = [
                                                                        ],
                                                                        f(a.properties, function (a) {
                                                                            h.push({
                                                                                key: a.key.type === Xe.Identifier ? a.key.name : '' + a.key.value,
                                                                                value: i.recurse(a.value)
                                                                            })
                                                                        }),
                                                                        function (a, c, d, e) {
                                                                            for (var f = {
                                                                            }, g = 0; g < h.length; ++g) f[h[g].key] = h[g].value(a, c, d, e);
                                                                            return b ? {
                                                                                value: f
                                                                            }
                                                                            : f
                                                                        };
                                                                    case Xe.ThisExpression:
                                                                        return function (a) {
                                                                            return b ? {
                                                                                value: a
                                                                            }
                                                                            : a
                                                                        };
                                                                    case Xe.NGValueParameter:
                                                                        return function (a, c, d, e) {
                                                                            return b ? {
                                                                                value: d
                                                                            }
                                                                            : d
                                                                        }
                                                                }
                                                            },
                                                            'unary+': function (a, b) {
                                                                return function (c, d, e, f) {
                                                                    var g = a(c, d, e, f);
                                                                    return g = t(g) ? + g : 0,
                                                                    b ? {
                                                                        value: g
                                                                    }
                                                                    : g
                                                                }
                                                            },
                                                            'unary-': function (a, b) {
                                                                return function (c, d, e, f) {
                                                                    var g = a(c, d, e, f);
                                                                    return g = t(g) ? - g : 0,
                                                                    b ? {
                                                                        value: g
                                                                    }
                                                                    : g
                                                                }
                                                            },
                                                            'unary!': function (a, b) {
                                                                return function (c, d, e, f) {
                                                                    var g = !a(c, d, e, f);
                                                                    return b ? {
                                                                        value: g
                                                                    }
                                                                    : g
                                                                }
                                                            },
                                                            'binary+': function (a, b, c) {
                                                                return function (d, e, f, g) {
                                                                    var h = a(d, e, f, g),
                                                                    i = b(d, e, f, g),
                                                                    j = Yb(h, i);
                                                                    return c ? {
                                                                        value: j
                                                                    }
                                                                    : j
                                                                }
                                                            },
                                                            'binary-': function (a, b, c) {
                                                                return function (d, e, f, g) {
                                                                    var h = a(d, e, f, g),
                                                                    i = b(d, e, f, g),
                                                                    j = (t(h) ? h : 0) - (t(i) ? i : 0);
                                                                    return c ? {
                                                                        value: j
                                                                    }
                                                                    : j
                                                                }
                                                            },
                                                            'binary*': function (a, b, c) {
                                                                return function (d, e, f, g) {
                                                                    var h = a(d, e, f, g) * b(d, e, f, g);
                                                                    return c ? {
                                                                        value: h
                                                                    }
                                                                    : h
                                                                }
                                                            },
                                                            'binary/': function (a, b, c) {
                                                                return function (d, e, f, g) {
                                                                    var h = a(d, e, f, g) / b(d, e, f, g);
                                                                    return c ? {
                                                                        value: h
                                                                    }
                                                                    : h
                                                                }
                                                            },
                                                            'binary%': function (a, b, c) {
                                                                return function (d, e, f, g) {
                                                                    var h = a(d, e, f, g) % b(d, e, f, g);
                                                                    return c ? {
                                                                        value: h
                                                                    }
                                                                    : h
                                                                }
                                                            },
                                                            'binary===': function (a, b, c) {
                                                                return function (d, e, f, g) {
                                                                    var h = a(d, e, f, g) === b(d, e, f, g);
                                                                    return c ? {
                                                                        value: h
                                                                    }
                                                                    : h
                                                                }
                                                            },
                                                            'binary!==': function (a, b, c) {
                                                                return function (d, e, f, g) {
                                                                    var h = a(d, e, f, g) !== b(d, e, f, g);
                                                                    return c ? {
                                                                        value: h
                                                                    }
                                                                    : h
                                                                }
                                                            },
                                                            'binary==': function (a, b, c) {
                                                                return function (d, e, f, g) {
                                                                    var h = a(d, e, f, g) == b(d, e, f, g);
                                                                    return c ? {
                                                                        value: h
                                                                    }
                                                                    : h
                                                                }
                                                            },
                                                            'binary!=': function (a, b, c) {
                                                                return function (d, e, f, g) {
                                                                    var h = a(d, e, f, g) != b(d, e, f, g);
                                                                    return c ? {
                                                                        value: h
                                                                    }
                                                                    : h
                                                                }
                                                            },
                                                            'binary<': function (a, b, c) {
                                                                return function (d, e, f, g) {
                                                                    var h = a(d, e, f, g) < b(d, e, f, g);
                                                                    return c ? {
                                                                        value: h
                                                                    }
                                                                    : h
                                                                }
                                                            },
                                                            'binary>': function (a, b, c) {
                                                                return function (d, e, f, g) {
                                                                    var h = a(d, e, f, g) > b(d, e, f, g);
                                                                    return c ? {
                                                                        value: h
                                                                    }
                                                                    : h
                                                                }
                                                            },
                                                            'binary<=': function (a, b, c) {
                                                                return function (d, e, f, g) {
                                                                    var h = a(d, e, f, g) <= b(d, e, f, g);
                                                                    return c ? {
                                                                        value: h
                                                                    }
                                                                    : h
                                                                }
                                                            },
                                                            'binary>=': function (a, b, c) {
                                                                return function (d, e, f, g) {
                                                                    var h = a(d, e, f, g) >= b(d, e, f, g);
                                                                    return c ? {
                                                                        value: h
                                                                    }
                                                                    : h
                                                                }
                                                            },
                                                            'binary&&': function (a, b, c) {
                                                                return function (d, e, f, g) {
                                                                    var h = a(d, e, f, g) && b(d, e, f, g);
                                                                    return c ? {
                                                                        value: h
                                                                    }
                                                                    : h
                                                                }
                                                            },
                                                            'binary||': function (a, b, c) {
                                                                return function (d, e, f, g) {
                                                                    var h = a(d, e, f, g) || b(d, e, f, g);
                                                                    return c ? {
                                                                        value: h
                                                                    }
                                                                    : h
                                                                }
                                                            },
                                                            'ternary?:': function (a, b, c, d) {
                                                                return function (e, f, g, h) {
                                                                    var i = a(e, f, g, h) ? b(e, f, g, h)  : c(e, f, g, h);
                                                                    return d ? {
                                                                        value: i
                                                                    }
                                                                    : i
                                                                }
                                                            },
                                                            value: function (a, b) {
                                                                return function () {
                                                                    return b ? {
                                                                        context: c,
                                                                        name: c,
                                                                        value: a
                                                                    }
                                                                    : a
                                                                }
                                                            },
                                                            identifier: function (a, b, d, e, f) {
                                                                return function (g, h, i, j) {
                                                                    var k = h && a in h ? h : g;
                                                                    e && 1 !== e && k && !k[a] && (k[a] = {
                                                                    });
                                                                    var l = k ? k[a] : c;
                                                                    return b && Vb(l, f),
                                                                    d ? {
                                                                        context: k,
                                                                        name: a,
                                                                        value: l
                                                                    }
                                                                    : l
                                                                }
                                                            },
                                                            computedMember: function (a, b, c, d, e) {
                                                                return function (f, g, h, i) {
                                                                    var j,
                                                                    k,
                                                                    l = a(f, g, h, i);
                                                                    return null != l && (j = b(f, g, h, i), Ub(j, e), d && 1 !== d && l && !l[j] && (l[j] = {
                                                                    }), k = l[j], Vb(k, e)),
                                                                    c ? {
                                                                        context: l,
                                                                        name: j,
                                                                        value: k
                                                                    }
                                                                    : k
                                                                }
                                                            },
                                                            nonComputedMember: function (a, b, d, e, f, g) {
                                                                return function (h, i, j, k) {
                                                                    var l = a(h, i, j, k);
                                                                    f && 1 !== f && l && !l[b] && (l[b] = {
                                                                    });
                                                                    var m = null != l ? l[b] : c;
                                                                    return (d || hc(b)) && Vb(m, g),
                                                                    e ? {
                                                                        context: l,
                                                                        name: b,
                                                                        value: m
                                                                    }
                                                                    : m
                                                                }
                                                            },
                                                            inputs: function (a, b) {
                                                                return function (c, d, e, f) {
                                                                    return f ? f[b] : a(c, d, e)
                                                                }
                                                            }
                                                        };
                                                    var Ye = function (a, b, c) {
                                                        this.lexer = a,
                                                        this.$filter = b,
                                                        this.options = c,
                                                        this.ast = new Xe(this.lexer),
                                                        this.astCompiler = c.csp ? new fc(this.ast, b)  : new ec(this.ast, b)
                                                    };
                                                    Ye.prototype = {
                                                        constructor: Ye,
                                                        parse: function (a) {
                                                            return this.astCompiler.compile(a, this.options.expensiveChecks)
                                                        }
                                                    };
                                                    var Ze = (pa(), pa(), Object.prototype.valueOf),
                                                    $e = d('$sce'),
                                                    _e = {
                                                        HTML: 'html',
                                                        CSS: 'css',
                                                        URL: 'url',
                                                        RESOURCE_URL: 'resourceUrl',
                                                        JS: 'js'
                                                    },
                                                    Ce = d('$compile'),
                                                    af = b.createElement('a'),
                                                    bf = yc(a.location.href);
                                                    Bc.$inject = [
                                                        '$document'
                                                    ],
                                                    Dc.$inject = [
                                                        '$provide'
                                                    ],
                                                    Jc.$inject = [
                                                        '$locale'
                                                    ],
                                                    Kc.$inject = [
                                                        '$locale'
                                                    ];
                                                    var cf = '.',
                                                    df = {
                                                        yyyy: Nc('FullYear', 4),
                                                        yy: Nc('FullYear', 2, 0, !0),
                                                        y: Nc('FullYear', 1),
                                                        MMMM: Oc('Month'),
                                                        MMM: Oc('Month', !0),
                                                        MM: Nc('Month', 2, 1),
                                                        M: Nc('Month', 1, 1),
                                                        dd: Nc('Date', 2),
                                                        d: Nc('Date', 1),
                                                        HH: Nc('Hours', 2),
                                                        H: Nc('Hours', 1),
                                                        hh: Nc('Hours', 2, - 12),
                                                        h: Nc('Hours', 1, - 12),
                                                        mm: Nc('Minutes', 2),
                                                        m: Nc('Minutes', 1),
                                                        ss: Nc('Seconds', 2),
                                                        s: Nc('Seconds', 1),
                                                        sss: Nc('Milliseconds', 3),
                                                        EEEE: Oc('Day'),
                                                        EEE: Oc('Day', !0),
                                                        a: Tc,
                                                        Z: Pc,
                                                        ww: Sc(2),
                                                        w: Sc(1),
                                                        G: Uc,
                                                        GG: Uc,
                                                        GGG: Uc,
                                                        GGGG: Vc
                                                    },
                                                    ef = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
                                                    ff = /^\-?\d+$/;
                                                    Wc.$inject = [
                                                        '$locale'
                                                    ];
                                                    var gf = r(td),
                                                    hf = r(vd);
                                                    Zc.$inject = [
                                                        '$parse'
                                                    ];
                                                    var jf = r({
                                                        restrict: 'E',
                                                        compile: function (a, b) {
                                                            return b.href || b.xlinkHref ? void 0 : function (a, b) {
                                                                if ('a' === b[0].nodeName.toLowerCase()) {
                                                                    var c = '[object SVGAnimatedString]' === Fd.call(b.prop('href')) ? 'xlink:href' : 'href';
                                                                    b.on('click', function (a) {
                                                                        b.attr(c) || a.preventDefault()
                                                                    })
                                                                }
                                                            }
                                                        }
                                                    }),
                                                    kf = {
                                                    };
                                                    f(ne, function (a, b) {
                                                        function c(a, c, e) {
                                                            a.$watch(e[d], function (a) {
                                                                e.$set(b, !!a)
                                                            })
                                                        }
                                                        if ('multiple' != a) {
                                                            var d = ib('ng-' + b),
                                                                e = c;
                                                            'checked' === a && (e = function (a, b, e) {
                                                                e.ngModel !== e[d] && c(a, b, e)
                                                            }),
                                                            kf[d] = function () {
                                                                return {
                                                                    restrict: 'A',
                                                                    priority: 100,
                                                                    link: e
                                                                }
                                                            }
                                                        }
                                                    }),
                                                    f(pe, function (a, b) {
                                                        kf[b] = function () {
                                                            return {
                                                                priority: 100,
                                                                link: function (a, c, d) {
                                                                    if ('ngPattern' === b && '/' == d.ngPattern.charAt(0)) {
                                                                        var e = d.ngPattern.match(rd);
                                                                        if (e) return void d.$set('ngPattern', new RegExp(e[1], e[2]))
                                                                    }
                                                                    a.$watch(d[b], function (a) {
                                                                        d.$set(b, a)
                                                                    })
                                                                }
                                                            }
                                                        }
                                                    }),
                                                    f(['src',
                                                            'srcset',
                                                            'href'], function (a) {
                                                                var b = ib('ng-' + a);
                                                                kf[b] = function () {
                                                                    return {
                                                                        priority: 99,
                                                                        link: function (c, d, e) {
                                                                            var f = a,
                                                                            g = a;
                                                                            'href' === a && '[object SVGAnimatedString]' === Fd.call(d.prop('href')) && (g = 'xlinkHref', e.$attr[g] = 'xlink:href', f = null),
                                                                            e.$observe(b, function (b) {
                                                                                return b ? (e.$set(g, b), void (yd && f && d.prop(f, e[g])))  : void ('href' === a && e.$set(g, null))
                                                                            })
                                                                        }
                                                                    }
                                                                }
                                                            });
                                                    var lf = {
                                                        $addControl: p,
                                                        $$renameControl: _c,
                                                        $removeControl: p,
                                                        $setValidity: p,
                                                        $setDirty: p,
                                                        $setPristine: p,
                                                        $setSubmitted: p
                                                    },
                                                    mf = 'ng-submitted';
                                                    ad.$inject = [
                                                        '$element',
                                                        '$attrs',
                                                        '$scope',
                                                        '$animate',
                                                        '$interpolate'
                                                    ];
                                                    var nf = function (a) {
                                                        return ['$timeout',
                                                        function (b) {
                                                            var d = {
                                                                name: 'form',
                                                                restrict: a ? 'EAC' : 'E',
                                                                controller: ad,
                                                                compile: function (d, e) {
                                                                    d.addClass(Vf).addClass(Tf);
                                                                    var f = e.name ? 'name' : a && e.ngForm ? 'ngForm' : !1;
                                                                    return {
                                                                        pre: function (a, d, e, g) {
                                                                            if (!('action' in e)) {
                                                                                var h = function (b) {
                                                                                    a.$apply(function () {
                                                                                        g.$commitViewValue(),
                                                                                        g.$setSubmitted()
                                                                                    }),
                                                                                    b.preventDefault()
                                                                                };
                                                                                be(d[0], 'submit', h),
                                                                    d.on('$destroy', function () {
                                                                        b(function () {
                                                                            ce(d[0], 'submit', h)
                                                                        }, 0, !1)
                                                                    })
                                                                            }
                                                                            var i = g.$$parentForm;
                                                                            f && (gc(a, g.$name, g, g.$name), e.$observe(f, function (b) {
                                                                                g.$name !== b && (gc(a, g.$name, c, g.$name), i.$$renameControl(g, b), gc(a, g.$name, g, g.$name))
                                                                            })),
                                                                            d.on('$destroy', function () {
                                                                                i.$removeControl(g),
                                                                                f && gc(a, e[f], c, g.$name),
                                                                                l(g, lf)
                                                                            })
                                                                        }
                                                                    }
                                                                }
                                                            };
                                                            return d
                                                        }
                                                        ]
                                                    },
                                                    of = nf(),
                                                    pf = nf(!0),
                                                    qf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
                                                    rf = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
                                                    sf = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
                                                    tf = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
                                                    uf = /^(\d{4})-(\d{2})-(\d{2})$/,
                                                    vf = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
                                                    wf = /^(\d{4})-W(\d\d)$/,
                                                    xf = /^(\d{4})-(\d\d)$/,
                                                    yf = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
                                                    zf = {
                                                        text: cd,
                                                        date: gd('date', uf, fd(uf, [
                                                                    'yyyy',
                                                                    'MM',
                                                                    'dd'
                                                        ]), 'yyyy-MM-dd'),
                                                        'datetime-local': gd('datetimelocal', vf, fd(vf, [
                                                                    'yyyy',
                                                                    'MM',
                                                                    'dd',
                                                                    'HH',
                                                                    'mm',
                                                                    'ss',
                                                                    'sss'
                                                        ]), 'yyyy-MM-ddTHH:mm:ss.sss'),
                                                        time: gd('time', yf, fd(yf, [
                                                                    'HH',
                                                                    'mm',
                                                                    'ss',
                                                                    'sss'
                                                        ]), 'HH:mm:ss.sss'),
                                                        week: gd('week', wf, ed, 'yyyy-Www'),
                                                        month: gd('month', xf, fd(xf, [
                                                                    'yyyy',
                                                                    'MM'
                                                        ]), 'yyyy-MM'),
                                                        number: id,
                                                        url: jd,
                                                        email: kd,
                                                        radio: ld,
                                                        checkbox: nd,
                                                        hidden: p,
                                                        button: p,
                                                        submit: p,
                                                        reset: p,
                                                        file: p
                                                    },
                                                    Af = [
                                                        '$browser',
                                                        '$sniffer',
                                                        '$filter',
                                                        '$parse',
                                                        function (a, b, c, d) {
                                                            return {
                                                                restrict: 'E',
                                                                require: [
                                                                    '?ngModel'
                                                                ],
                                                                link: {
                                                                    pre: function (e, f, g, h) {
                                                                        h[0] && (zf[td(g.type)] || zf.text) (e, f, g, h[0], b, a, c, d)
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    Bf = /^(true|false|\d+)$/,
                                                    Cf = function () {
                                                        return {
                                                            restrict: 'A',
                                                            priority: 100,
                                                            compile: function (a, b) {
                                                                return Bf.test(b.ngValue) ? function (a, b, c) {
                                                                    c.$set('value', a.$eval(c.ngValue))
                                                                }
                                                                : function (a, b, c) {
                                                                    a.$watch(c.ngValue, function (a) {
                                                                        c.$set('value', a)
                                                                    })
                                                                }
                                                            }
                                                        }
                                                    },
                                                    Df = [
                                                        '$compile',
                                                        function (a) {
                                                            return {
                                                                restrict: 'AC',
                                                                compile: function (b) {
                                                                    return a.$$addBindingClass(b),
                                                                    function (b, d, e) {
                                                                        a.$$addBindingInfo(d, e.ngBind),
                                                                        d = d[0],
                                                                        b.$watch(e.ngBind, function (a) {
                                                                            d.textContent = a === c ? '' : a
                                                                        })
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    Ef = [
                                                        '$interpolate',
                                                        '$compile',
                                                        function (a, b) {
                                                            return {
                                                                compile: function (d) {
                                                                    return b.$$addBindingClass(d),
                                                                    function (d, e, f) {
                                                                        var g = a(e.attr(f.$attr.ngBindTemplate));
                                                                        b.$$addBindingInfo(e, g.expressions),
                                                        e = e[0],
                                                        f.$observe('ngBindTemplate', function (a) {
                                                            e.textContent = a === c ? '' : a
                                                        })
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    Ff = [
                                                        '$sce',
                                                        '$parse',
                                                        '$compile',
                                                        function (a, b, c) {
                                                            return {
                                                                restrict: 'A',
                                                                compile: function (d, e) {
                                                                    var f = b(e.ngBindHtml),
                                                                    g = b(e.ngBindHtml, function (a) {
                                                                        return (a || '').toString()
                                                                    });
                                                                    return c.$$addBindingClass(d),
                                                        function (b, d, e) {
                                                            c.$$addBindingInfo(d, e.ngBindHtml),
                                                            b.$watch(g, function () {
                                                                d.html(a.getTrustedHtml(f(b)) || '')
                                                            })
                                                        }
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    Gf = r({
                                                        restrict: 'A',
                                                        require: 'ngModel',
                                                        link: function (a, b, c, d) {
                                                            d.$viewChangeListeners.push(function () {
                                                                a.$eval(c.ngChange)
                                                            })
                                                        }
                                                    }),
                                                    Hf = od('', !0),
                                                    If = od('Odd', 0),
                                                    Jf = od('Even', 1),
                                                    Kf = $c({
                                                        compile: function (a, b) {
                                                            b.$set('ngCloak', c),
                                                            a.removeClass('ng-cloak')
                                                        }
                                                    }),
                                                    Lf = [
                                                        function () {
                                                            return {
                                                                restrict: 'A',
                                                                scope: !0,
                                                                controller: '@',
                                                                priority: 500
                                                            }
                                                        }
                                                    ],
                                                    Mf = {
                                                    },
                                                    Nf = {
                                                        blur: !0,
                                                        focus: !0
                                                    };
                                                    f('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' '), function (a) {
                                                        var b = ib('ng-' + a);
                                                        Mf[b] = [
                                                            '$parse',
                                                            '$rootScope',
                                                            function (c, d) {
                                                                return {
                                                                    restrict: 'A',
                                                                    compile: function (e, f) {
                                                                        var g = c(f[b], null, !0);
                                                                        return function (b, c) {
                                                                            c.on(a, function (c) {
                                                                                var e = function () {
                                                                                    g(b, {
                                                                                        $event: c
                                                                                    })
                                                                                };
                                                                                Nf[a] && d.$$phase ? b.$evalAsync(e)  : b.$apply(e)
                                                                            })
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    });
                                                    var Of = [
                                                        '$animate',
                                                        function (a) {
                                                            return {
                                                                multiElement: !0,
                                                                transclude: 'element',
                                                                priority: 600,
                                                                terminal: !0,
                                                                restrict: 'A',
                                                                $$tlb: !0,
                                                                link: function (c, d, e, f, g) {
                                                                    var h,
                                                                    i,
                                                                    j;
                                                                    c.$watch(e.ngIf, function (c) {
                                                                        c ? i || g(function (c, f) {
                                                                            i = f,
                                                                            c[c.length++] = b.createComment(' end ngIf: ' + e.ngIf + ' '),
                                                                            h = {
                                                                                clone: c
                                                                            },
                                                                            a.enter(c, d.parent(), d)
                                                                        })  : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = oa(h.clone), a.leave(j).then(function () {
                                                                            j = null
                                                                        }), h = null))
                                                                    })
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    Pf = [
                                                        '$templateRequest',
                                                        '$anchorScroll',
                                                        '$animate',
                                                        '$sce',
                                                        function (a, b, c, d) {
                                                            return {
                                                                restrict: 'ECA',
                                                                priority: 400,
                                                                terminal: !0,
                                                                transclude: 'element',
                                                                controller: Id.noop,
                                                                compile: function (e, f) {
                                                                    var g = f.ngInclude || f.src,
                                                                    h = f.onload || '',
                                                                    i = f.autoscroll;
                                                                    return function (e, f, j, k, l) {
                                                                        var m,
                                                                        n,
                                                                        o,
                                                                        p = 0,
                                                                        q = function () {
                                                                            n && (n.remove(), n = null),
                                                                            m && (m.$destroy(), m = null),
                                                                            o && (c.leave(o).then(function () {
                                                                                n = null
                                                                            }), n = o, o = null)
                                                                        };
                                                                        e.$watch(d.parseAsResourceUrl(g), function (d) {
                                                                            var g = function () {
                                                                                !t(i) || i && !e.$eval(i) || b()
                                                                            },
                                                                            j = ++p;
                                                                            d ? (a(d, !0).then(function (a) {
                                                                                if (j === p) {
                                                                                    var b = e.$new();
                                                                                    k.template = a;
                                                                                    var i = l(b, function (a) {
                                                                                        q(),
                                                                                        c.enter(a, null, f).then(g)
                                                                                    });
                                                                                    m = b,
                                                                                    o = i,
                                                                                    m.$emit('$includeContentLoaded', d),
                                                                                    e.$eval(h)
                                                                                }
                                                                            }, function () {
                                                                                j === p && (q(), e.$emit('$includeContentError', d))
                                                                            }), e.$emit('$includeContentRequested', d))  : (q(), k.template = null)
                                                                        })
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    Qf = [
                                                        '$compile',
                                                        function (a) {
                                                            return {
                                                                restrict: 'ECA',
                                                                priority: - 400,
                                                                require: 'ngInclude',
                                                                link: function (c, d, e, f) {
                                                                    return /SVG/.test(d[0].toString()) ? (d.empty(), void a(ya(f.template, b).childNodes) (c, function (a) {
                                                                        d.append(a)
                                                                    }, {
                                                                        futureParentElement: d
                                                                    }))  : (d.html(f.template), void a(d.contents()) (c))
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    Rf = $c({
                                                        priority: 450,
                                                        compile: function () {
                                                            return {
                                                                pre: function (a, b, c) {
                                                                    a.$eval(c.ngInit)
                                                                }
                                                            }
                                                        }
                                                    }),
                                                    Sf = function () {
                                                        return {
                                                            restrict: 'A',
                                                            priority: 100,
                                                            require: 'ngModel',
                                                            link: function (a, b, d, e) {
                                                                var g = b.attr(d.$attr.ngList) || ', ',
                                                                h = 'false' !== d.ngTrim,
                                                                i = h ? Nd(g)  : g,
                                                                j = function (a) {
                                                                    if (!s(a)) {
                                                                        var b = [
                                                                        ];
                                                                        return a && f(a.split(i), function (a) {
                                                                            a && b.push(h ? Nd(a)  : a)
                                                                        }),
                                                                        b
                                                                    }
                                                                };
                                                                e.$parsers.push(j),
                                                                e.$formatters.push(function (a) {
                                                                    return Ld(a) ? a.join(g)  : c
                                                                }),
                                                                e.$isEmpty = function (a) {
                                                                    return !a || !a.length
                                                                }
                                                            }
                                                        }
                                                    },
                                                    Tf = 'ng-valid',
                                                    Uf = 'ng-invalid',
                                                    Vf = 'ng-pristine',
                                                    Wf = 'ng-dirty',
                                                    Xf = 'ng-untouched',
                                                    Yf = 'ng-touched',
                                                    Zf = 'ng-pending',
                                                    $f = new d('ngModel'),
                                                    _f = [
                                                        '$scope',
                                                        '$exceptionHandler',
                                                        '$attrs',
                                                        '$element',
                                                        '$parse',
                                                        '$animate',
                                                        '$timeout',
                                                        '$rootScope',
                                                        '$q',
                                                        '$interpolate',
                                                        function (a, b, d, e, g, h, i, j, k, l) {
                                                            this.$viewValue = Number.NaN,
                                                            this.$modelValue = Number.NaN,
                                                            this.$$rawModelValue = c,
                                                            this.$validators = {
                                                            },
                                                            this.$asyncValidators = {
                                                            },
                                                            this.$parsers = [
                                                            ],
                                                            this.$formatters = [
                                                            ],
                                                            this.$viewChangeListeners = [
                                                            ],
                                                            this.$untouched = !0,
                                                            this.$touched = !1,
                                                            this.$pristine = !0,
                                                            this.$dirty = !1,
                                                            this.$valid = !0,
                                                            this.$invalid = !1,
                                                            this.$error = {
                                                            },
                                                            this.$$success = {
                                                            },
                                                            this.$pending = c,
                                                            this.$name = l(d.name || '', !1) (a);
                                                            var m,
                                                            n = g(d.ngModel),
                                                            o = n.assign,
                                                            q = n,
                                                            r = o,
                                                            u = null,
                                                            v = this;
                                                            this.$$setOptions = function (a) {
                                                                if (v.$options = a, a && a.getterSetter) {
                                                                    var b = g(d.ngModel + '()'),
                                                                        c = g(d.ngModel + '($$$p)');
                                                                    q = function (a) {
                                                                        var c = n(a);
                                                                        return z(c) && (c = b(a)),
                                                                        c
                                                                    },
                                                                    r = function (a, b) {
                                                                        z(n(a)) ? c(a, {
                                                                            $$$p: v.$modelValue
                                                                        })  : o(a, v.$modelValue)
                                                                    }
                                                                } else if (!n.assign) throw $f('nonassign', 'Expression \'{0}\' is non-assignable. Element: {1}', d.ngModel, Z(e))
                                                            },
                                                            this.$render = p,
                                                            this.$isEmpty = function (a) {
                                                                return s(a) || '' === a || null === a || a !== a
                                                            };
                                                            var w = e.inheritedData('$formController') || lf,
                                                            y = 0;
                                                            pd({
                                                                ctrl: this,
                                                                $element: e,
                                                                set: function (a, b) {
                                                                    a[b] = !0
                                                                },
                                                                unset: function (a, b) {
                                                                    delete a[b]
                                                                },
                                                                parentForm: w,
                                                                $animate: h
                                                            }),
                                                            this.$setPristine = function () {
                                                                v.$dirty = !1,
                                                                v.$pristine = !0,
                                                                h.removeClass(e, Wf),
                                                                h.addClass(e, Vf)
                                                            },
                                                            this.$setDirty = function () {
                                                                v.$dirty = !0,
                                                                v.$pristine = !1,
                                                                h.removeClass(e, Vf),
                                                                h.addClass(e, Wf),
                                                                w.$setDirty()
                                                            },
                                                            this.$setUntouched = function () {
                                                                v.$touched = !1,
                                                                v.$untouched = !0,
                                                                h.setClass(e, Xf, Yf)
                                                            },
                                                            this.$setTouched = function () {
                                                                v.$touched = !0,
                                                                v.$untouched = !1,
                                                                h.setClass(e, Yf, Xf)
                                                            },
                                                            this.$rollbackViewValue = function () {
                                                                i.cancel(u),
                                                                v.$viewValue = v.$$lastCommittedViewValue,
                                                                v.$render()
                                                            },
                                                            this.$validate = function () {
                                                                if (!x(v.$modelValue) || !isNaN(v.$modelValue)) {
                                                                    var a = v.$$lastCommittedViewValue,
                                                                        b = v.$$rawModelValue,
                                                                        d = v.$valid,
                                                                        e = v.$modelValue,
                                                                        f = v.$options && v.$options.allowInvalid;
                                                                    v.$$runValidators(b, a, function (a) {
                                                                        f || d === a || (v.$modelValue = a ? b : c, v.$modelValue !== e && v.$$writeModelToScope())
                                                                    })
                                                                }
                                                            },
                                                            this.$$runValidators = function (a, b, d) {
                                                                function e() {
                                                                    var a = v.$$parserName || 'parse';
                                                                    return m !== c ? (m || (f(v.$validators, function (a, b) {
                                                                        i(b, null)
                                                                    }), f(v.$asyncValidators, function (a, b) {
                                                                        i(b, null)
                                                                    })), i(a, m), m)  : (i(a, null), !0)
                                                                }
                                                                function g() {
                                                                    var c = !0;
                                                                    return f(v.$validators, function (d, e) {
                                                                        var f = d(a, b);
                                                                        c = c && f,
                                                                        i(e, f)
                                                                    }),
                                                                    c ? !0 : (f(v.$asyncValidators, function (a, b) {
                                                                        i(b, null)
                                                                    }), !1)
                                                                }
                                                                function h() {
                                                                    var d = [
                                                                    ],
                                                                    e = !0;
                                                                    f(v.$asyncValidators, function (f, g) {
                                                                        var h = f(a, b);
                                                                        if (!H(h)) throw $f('$asyncValidators', 'Expected asynchronous validator to return a promise but got \'{0}\' instead.', h);
                                                                        i(g, c),
                                                                            d.push(h.then(function () {
                                                                                i(g, !0)
                                                                            }, function (a) {
                                                                                e = !1,
                                                                                i(g, !1)
                                                                            }))
                                                                    }),
                                                                    d.length ? k.all(d).then(function () {
                                                                        j(e)
                                                                    }, p)  : j(!0)
                                                                }
                                                                function i(a, b) {
                                                                    l === y && v.$setValidity(a, b)
                                                                }
                                                                function j(a) {
                                                                    l === y && d(a)
                                                                }
                                                                y++;
                                                                var l = y;
                                                                return e() && g() ? void h()  : void j(!1)
                                                            },
                                                            this.$commitViewValue = function () {
                                                                var a = v.$viewValue;
                                                                i.cancel(u),
                                                                (v.$$lastCommittedViewValue !== a || '' === a && v.$$hasNativeValidators) && (v.$$lastCommittedViewValue = a, v.$pristine && this.$setDirty(), this.$$parseAndValidate())
                                                            },
                                                            this.$$parseAndValidate = function () {
                                                                function b() {
                                                                    v.$modelValue !== g && v.$$writeModelToScope()
                                                                }
                                                                var d = v.$$lastCommittedViewValue,
                                                                e = d;
                                                                if (m = s(e) ? c : !0) for (var f = 0; f < v.$parsers.length; f++) if (e = v.$parsers[f](e), s(e)) {
                                                                    m = !1;
                                                                    break
                                                                }
                                                                x(v.$modelValue) && isNaN(v.$modelValue) && (v.$modelValue = q(a));
                                                                var g = v.$modelValue,
                                                                h = v.$options && v.$options.allowInvalid;
                                                                v.$$rawModelValue = e,
                                                                h && (v.$modelValue = e, b()),
                                                                v.$$runValidators(e, v.$$lastCommittedViewValue, function (a) {
                                                                    h || (v.$modelValue = a ? e : c, b())
                                                                })
                                                            },
                                                            this.$$writeModelToScope = function () {
                                                                r(a, v.$modelValue),
                                                                f(v.$viewChangeListeners, function (a) {
                                                                    try {
                                                                        a()
                                                                    } catch (c) {
                                                                        b(c)
                                                                    }
                                                                })
                                                            },
                                                            this.$setViewValue = function (a, b) {
                                                                v.$viewValue = a,
                                                                (!v.$options || v.$options.updateOnDefault) && v.$$debounceViewValueCommit(b)
                                                            },
                                                            this.$$debounceViewValueCommit = function (b) {
                                                                var c,
                                                                d = 0,
                                                                e = v.$options;
                                                                e && t(e.debounce) && (c = e.debounce, x(c) ? d = c : x(c[b]) ? d = c[b] : x(c['default']) && (d = c['default'])),
                                                                i.cancel(u),
                                                                d ? u = i(function () {
                                                                    v.$commitViewValue()
                                                                }, d)  : j.$$phase ? v.$commitViewValue()  : a.$apply(function () {
                                                                    v.$commitViewValue()
                                                                })
                                                            },
                                                            a.$watch(function () {
                                                                var b = q(a);
                                                                if (b !== v.$modelValue && (v.$modelValue === v.$modelValue || b === b)) {
                                                                    v.$modelValue = v.$$rawModelValue = b,
                                                                        m = c;
                                                                    for (var d = v.$formatters, e = d.length, f = b; e--; ) f = d[e](f);
                                                                    v.$viewValue !== f && (v.$viewValue = v.$$lastCommittedViewValue = f, v.$render(), v.$$runValidators(b, f, p))
                                                                }
                                                                return b
                                                            })
                                                        }
                                                    ],
                                                    ag = [
                                                        '$rootScope',
                                                        function (a) {
                                                            return {
                                                                restrict: 'A',
                                                                require: [
                                                                    'ngModel',
                                                                    '^?form',
                                                                    '^?ngModelOptions'
                                                                ],
                                                                controller: _f,
                                                                priority: 1,
                                                                compile: function (b) {
                                                                    return b.addClass(Vf).addClass(Xf).addClass(Tf),
                                                                    {
                                                                        pre: function (a, b, c, d) {
                                                                            var e = d[0],
                                                                            f = d[1] || lf;
                                                                            e.$$setOptions(d[2] && d[2].$options),
                                                                        f.$addControl(e),
                                                                        c.$observe('name', function (a) {
                                                                            e.$name !== a && f.$$renameControl(e, a)
                                                                        }),
                                                                        a.$on('$destroy', function () {
                                                                            f.$removeControl(e)
                                                                        })
                                                                        },
                                                                        post: function (b, c, d, e) {
                                                                            var f = e[0];
                                                                            f.$options && f.$options.updateOn && c.on(f.$options.updateOn, function (a) {
                                                                                f.$$debounceViewValueCommit(a && a.type)
                                                                            }),
                                                                            c.on('blur', function (c) {
                                                                                f.$touched || (a.$$phase ? b.$evalAsync(f.$setTouched)  : b.$apply(f.$setTouched))
                                                                            })
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    bg = /(\s+|^)default(\s+|$)/,
                                                    cg = function () {
                                                        return {
                                                            restrict: 'A',
                                                            controller: [
                                                                '$scope',
                                                                '$attrs',
                                                                function (a, b) {
                                                                    var d = this;
                                                                    this.$options = N(a.$eval(b.ngModelOptions)),
                                                                this.$options.updateOn !== c ? (this.$options.updateOnDefault = !1, this.$options.updateOn = Nd(this.$options.updateOn.replace(bg, function () {
                                                                    return d.$options.updateOnDefault = !0,
                                                                    ' '
                                                                })))  : this.$options.updateOnDefault = !0
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    dg = $c({
                                                        terminal: !0,
                                                        priority: 1000
                                                    }),
                                                    eg = d('ngOptions'),
                                                    fg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                                                    gg = [
                                                        '$compile',
                                                        '$parse',
                                                        function (a, c) {
                                                            function d(a, b, d) {
                                                                function f(a, b, c, d, e) {
                                                                    this.selectValue = a,
                                                                    this.viewValue = b,
                                                                    this.label = c,
                                                                    this.group = d,
                                                                    this.disabled = e
                                                                }
                                                                var g = a.match(fg);
                                                                if (!g) throw eg('iexp', 'Expected expression in form of \'_select_ (as _label_)? for (_key_,)?_value_ in _collection_\' but got \'{0}\'. Element: {1}', a, Z(b));
                                                                var h = g[5] || g[7],
                                                                    i = g[6],
                                                                    j = / as /.test(g[0]) && g[1],
                                                                    k = g[9],
                                                                    l = c(g[2] ? g[1] : h),
                                                                    m = j && c(j),
                                                                    n = m || l,
                                                                    o = k && c(k),
                                                                    p = k ? function (a, b) {
                                                                        return o(d, b)
                                                                    }
                                                                : function (a) {
                                                                    return Ua(a)
                                                                },
                                                                q = function (a, b) {
                                                                    return p(a, w(a, b))
                                                                },
                                                                r = c(g[2] || g[1]),
                                                                s = c(g[3] || ''),
                                                                t = c(g[4] || ''),
                                                                u = c(g[8]),
                                                                v = {
                                                                },
                                                                w = i ? function (a, b) {
                                                                    return v[i] = b,
                                                                    v[h] = a,
                                                                    v
                                                                }
                                                                : function (a) {
                                                                    return v[h] = a,
                                                                    v
                                                                };
                                                                return {
                                                                    trackBy: k,
                                                                    getTrackByValue: q,
                                                                    getWatchables: c(u, function (a) {
                                                                        var b = [
                                                                        ];
                                                                        return a = a || [],
                                                                        Object.keys(a).forEach(function (c) {
                                                                            var e = w(a[c], c),
                                                                            f = p(a[c], e);
                                                                            if (b.push(f), g[2] || g[1]) {
                                                                                var h = r(d, e);
                                                                                b.push(h)
                                                                            }
                                                                            if (g[4]) {
                                                                                var i = t(d, e);
                                                                                b.push(i)
                                                                            }
                                                                        }),
                                                                        b
                                                                    }),
                                                                    getOptions: function () {
                                                                        var a,
                                                                        b = [
                                                                        ],
                                                                        c = {
                                                                        },
                                                                        g = u(d) || [];
                                                                        if (!i && e(g)) a = g;
                                                                        else {
                                                                            a = [
                                                                            ];
                                                                            for (var h in g) g.hasOwnProperty(h) && '$' !== h.charAt(0) && a.push(h)
                                                                        }
                                                                        for (var j = a.length, l = 0; j > l; l++) {
                                                                            var m = g === a ? l : a[l],
                                                                                o = g[m],
                                                                                v = w(o, m),
                                                                                x = n(d, v),
                                                                                y = p(x, v),
                                                                                z = r(d, v),
                                                                                A = s(d, v),
                                                                                B = t(d, v),
                                                                                C = new f(y, x, z, A, B);
                                                                            b.push(C),
                                                                            c[y] = C
                                                                        }
                                                                        return {
                                                                            items: b,
                                                                            selectValueMap: c,
                                                                            getOptionFromViewValue: function (a) {
                                                                                return c[q(a)]
                                                                            },
                                                                            getViewValueFromOption: function (a) {
                                                                                return k ? Id.copy(a.viewValue)  : a.viewValue
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            var g = b.createElement('option'),
                                                            h = b.createElement('optgroup');
                                                            return {
                                                                restrict: 'A',
                                                                terminal: !0,
                                                                require: [
                                                                    'select',
                                                                    '?ngModel'
                                                                ],
                                                                link: function (b, c, e, i) {
                                                                    function j(a, b) {
                                                                        a.element = b,
                                                                        b.disabled = a.disabled,
                                                                        a.value !== b.value && (b.value = a.selectValue),
                                                                        a.label !== b.label && (b.label = a.label, b.textContent = a.label)
                                                                    }
                                                                    function k(a, b, c, d) {
                                                                        var e;
                                                                        return b && td(b.nodeName) === c ? e = b : (e = d.cloneNode(!1), b ? a.insertBefore(e, b)  : a.appendChild(e)),
                                                                        e
                                                                    }
                                                                    function l(a) {
                                                                        for (var b; a; ) b = a.nextSibling,
                                                                        Oa(a),
                                                                            a = b
                                                                    }
                                                                    function m(a) {
                                                                        var b = p && p[0],
                                                                        c = w && w[0];
                                                                        if (b || c) for (; a && (a === b || a === c); ) a = a.nextSibling;
                                                                        return a
                                                                    }
                                                                    function n() {
                                                                        var a = x && q.readValue();
                                                                        x = y.getOptions();
                                                                        var b = {
                                                                        },
                                                                        d = c[0].firstChild;
                                                                        if (v && c.prepend(p), d = m(d), x.items.forEach(function (a) {
                                                                            var e,
                                                                                f,
                                                                                i;
                                                                            a.group ? (e = b[a.group], e || (f = k(c[0], d, 'optgroup', h), d = f.nextSibling, f.label = a.group, e = b[a.group] = {
                                                                                groupElement: f,
                                                                                currentOptionElement: f.firstChild
                                                                            }), i = k(e.groupElement, e.currentOptionElement, 'option', g), j(a, i), e.currentOptionElement = i.nextSibling)  : (i = k(c[0], d, 'option', g), j(a, i), d = i.nextSibling)
                                                                        }), Object.keys(b).forEach(function (a) {
                                                                            l(b[a].currentOptionElement)
                                                                        }), l(d), o.$render(), !o.$isEmpty(a)) {
                                                                            var e = q.readValue();
                                                                            (y.trackBy && !P(a, e) || a !== e) && (o.$setViewValue(e), o.$render())
                                                                        }
                                                                    }
                                                                    var o = i[1];
                                                                    if (o) {
                                                                        for (var p, q = i[0], r = e.multiple, s = 0, t = c.children(), u = t.length; u > s; s++) if ('' === t[s].value) {
                                                                            p = t.eq(s);
                                                                            break
                                                                        }
                                                                        var v = !!p,
                                                                        w = zd(g.cloneNode(!1));
                                                                        w.val('?');
                                                                        var x,
                                                                        y = d(e.ngOptions, c, b),
                                                                        z = function () {
                                                                            v || c.prepend(p),
                                                                            c.val(''),
                                                                            p.prop('selected', !0),
                                                                            p.attr('selected', !0)
                                                                        },
                                                                        A = function () {
                                                                            v || p.remove()
                                                                        },
                                                                        B = function () {
                                                                            c.prepend(w),
                                                                            c.val('?'),
                                                                            w.prop('selected', !0),
                                                                            w.attr('selected', !0)
                                                                        },
                                                                        C = function () {
                                                                            w.remove()
                                                                        };
                                                                        r ? (o.$isEmpty = function (a) {
                                                                            return !a || 0 === a.length
                                                                        }, q.writeValue = function (a) {
                                                                            x.items.forEach(function (a) {
                                                                                a.element.selected = !1
                                                                            }),
                                                                            a && a.forEach(function (a) {
                                                                                var b = x.getOptionFromViewValue(a);
                                                                                b && !b.disabled && (b.element.selected = !0)
                                                                            })
                                                                        }, q.readValue = function () {
                                                                            var a = c.val() || [],
                                                                            b = [
                                                                            ];
                                                                            return f(a, function (a) {
                                                                                var c = x.selectValueMap[a];
                                                                                c.disabled || b.push(x.getViewValueFromOption(c))
                                                                            }),
                                                                            b
                                                                        }, y.trackBy && b.$watchCollection(function () {
                                                                            return Ld(o.$viewValue) ? o.$viewValue.map(function (a) {
                                                                                return y.getTrackByValue(a)
                                                                            })  : void 0
                                                                        }, function () {
                                                                            o.$render()
                                                                        }))  : (q.writeValue = function (a) {
                                                                            var b = x.getOptionFromViewValue(a);
                                                                            b && !b.disabled ? c[0].value !== b.selectValue && (C(), A(), c[0].value = b.selectValue, b.element.selected = !0, b.element.setAttribute('selected', 'selected'))  : null === a || v ? (C(), z())  : (A(), B())
                                                                        }, q.readValue = function () {
                                                                            var a = x.selectValueMap[c.val()];
                                                                            return a && !a.disabled ? (A(), C(), x.getViewValueFromOption(a))  : null
                                                                        }, y.trackBy && b.$watch(function () {
                                                                            return y.getTrackByValue(o.$viewValue)
                                                                        }, function () {
                                                                            o.$render()
                                                                        })),
                                                                        v ? (p.remove(), a(p) (b), p.removeClass('ng-scope'))  : p = zd(g.cloneNode(!1)),
                                                                        n(),
                                                                        b.$watchCollection(y.getWatchables, n)
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    hg = [
                                                        '$locale',
                                                        '$interpolate',
                                                        '$log',
                                                        function (a, b, c) {
                                                            var d = /{}/g,
                                                            e = /^when(Minus)?(.+)$/;
                                                            return {
                                                                link: function (g, h, i) {
                                                                    function j(a) {
                                                                        h.text(a || '')
                                                                    }
                                                                    var k,
                                                            l = i.count,
                                                            m = i.$attr.when && h.attr(i.$attr.when),
                                                            n = i.offset || 0,
                                                            o = g.$eval(m) || {
                                                            },
                                                            q = {
                                                            },
                                                            r = b.startSymbol(),
                                                            t = b.endSymbol(),
                                                            u = r + l + '-' + n + t,
                                                            v = Id.noop;
                                                                    f(i, function (a, b) {
                                                                        var c = e.exec(b);
                                                                        if (c) {
                                                                            var d = (c[1] ? '-' : '') + td(c[2]);
                                                                            o[d] = h.attr(i.$attr[b])
                                                                        }
                                                                    }),
                                                                    f(o, function (a, c) {
                                                                        q[c] = b(a.replace(d, u))
                                                                    }),
                                                                    g.$watch(l, function (b) {
                                                                        var d = parseFloat(b),
                                                                        e = isNaN(d);
                                                                        if (e || d in o || (d = a.pluralCat(d - n)), d !== k && !(e && x(k) && isNaN(k))) {
                                                                            v();
                                                                            var f = q[d];
                                                                            s(f) ? (null != b && c.debug('ngPluralize: no rule defined for \'' + d + '\' in ' + m), v = p, j())  : v = g.$watch(f, j),
                                                                            k = d
                                                                        }
                                                                    })
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    ig = [
                                                        '$parse',
                                                        '$animate',
                                                        function (a, g) {
                                                            var h = '$$NG_REMOVED',
                                                            i = d('ngRepeat'),
                                                            j = function (a, b, c, d, e, f, g) {
                                                                a[c] = d,
                                                                e && (a[e] = f),
                                                                a.$index = b,
                                                                a.$first = 0 === b,
                                                                a.$last = b === g - 1,
                                                                a.$middle = !(a.$first || a.$last),
                                                                a.$odd = !(a.$even = 0 === (1 & b))
                                                            },
                                                            k = function (a) {
                                                                return a.clone[0]
                                                            },
                                                            l = function (a) {
                                                                return a.clone[a.clone.length - 1]
                                                            };
                                                            return {
                                                                restrict: 'A',
                                                                multiElement: !0,
                                                                transclude: 'element',
                                                                priority: 1000,
                                                                terminal: !0,
                                                                $$tlb: !0,
                                                                compile: function (d, m) {
                                                                    var n = m.ngRepeat,
                                                                    o = b.createComment(' end ngRepeat: ' + n + ' '),
                                                                    p = n.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                                                                    if (!p) throw i('iexp', 'Expected expression in form of \'_item_ in _collection_[ track by _id_]\' but got \'{0}\'.', n);
                                                                    var q = p[1],
                                                                        r = p[2],
                                                                        s = p[3],
                                                                        t = p[4];
                                                                    if (p = q.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !p) throw i('iidexp', '\'_item_\' in \'_item_ in _collection_\' should be an identifier or \'(_key_, _value_)\' expression, but got \'{0}\'.', q);
                                                                    var u = p[3] || p[1],
                                                                        v = p[2];
                                                                    if (s && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(s))) throw i('badident', 'alias \'{0}\' is invalid --- must be a valid JS identifier which is not a reserved name.', s);
                                                                    var w,
                                                                        x,
                                                                        y,
                                                                        z,
                                                                        A = {
                                                                            $id: Ua
                                                                        };
                                                                    return t ? w = a(t)  : (y = function (a, b) {
                                                                        return Ua(b)
                                                                    }, z = function (a) {
                                                                        return a
                                                                    }),
                                                                    function (a, b, d, m, p) {
                                                                        w && (x = function (b, c, d) {
                                                                            return v && (A[v] = b),
                                                                            A[u] = c,
                                                                            A.$index = d,
                                                                            w(a, A)
                                                                        });
                                                                        var q = pa();
                                                                        a.$watchCollection(r, function (d) {
                                                                            var m,
                                                                            r,
                                                                            t,
                                                                            w,
                                                                            A,
                                                                            B,
                                                                            C,
                                                                            D,
                                                                            E,
                                                                            F,
                                                                            G,
                                                                            H,
                                                                            I = b[0],
                                                                            J = pa();
                                                                            if (s && (a[s] = d), e(d)) E = d,
                                                                            D = x || y;
                                                                            else {
                                                                                D = x || z,
                                                                                    E = [
                                                                                    ];
                                                                                for (var K in d) d.hasOwnProperty(K) && '$' !== K.charAt(0) && E.push(K)
                                                                            }
                                                                            for (w = E.length, G = new Array(w), m = 0; w > m; m++) if (A = d === E ? m : E[m], B = d[A], C = D(A, B, m), q[C]) F = q[C],
                                                                            delete q[C],
                                                                                J[C] = F,
                                                                                G[m] = F;
                                                                            else {
                                                                                if (J[C]) throw f(G, function (a) {
                                                                                    a && a.scope && (q[a.id] = a)
                                                                                }),
                                                                                    i('dupes', 'Duplicates in a repeater are not allowed. Use \'track by\' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}', n, C, B);
                                                                                G[m] = {
                                                                                    id: C,
                                                                                    scope: c,
                                                                                    clone: c
                                                                                },
                                                                                J[C] = !0
                                                                            }
                                                                            for (var L in q) {
                                                                                if (F = q[L], H = oa(F.clone), g.leave(H), H[0].parentNode) for (m = 0, r = H.length; r > m; m++) H[m][h] = !0;
                                                                                F.scope.$destroy()
                                                                            }
                                                                            for (m = 0; w > m; m++) if (A = d === E ? m : E[m], B = d[A], F = G[m], F.scope) {
                                                                                t = I;
                                                                                do t = t.nextSibling;
                                                                                while (t && t[h]);
                                                                                k(F) != t && g.move(oa(F.clone), null, zd(I)),
                                                                                    I = l(F),
                                                                                    j(F.scope, m, u, B, v, A, w)
                                                                            } else p(function (a, b) {
                                                                                F.scope = b;
                                                                                var c = o.cloneNode(!1);
                                                                                a[a.length++] = c,
                                                                                g.enter(a, null, zd(I)),
                                                                                I = c,
                                                                                F.clone = a,
                                                                                J[F.id] = F,
                                                                                j(F.scope, m, u, B, v, A, w)
                                                                            });
                                                                            q = J
                                                                        })
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    jg = 'ng-hide',
                                                    kg = 'ng-hide-animate',
                                                    lg = [
                                                        '$animate',
                                                        function (a) {
                                                            return {
                                                                restrict: 'A',
                                                                multiElement: !0,
                                                                link: function (b, c, d) {
                                                                    b.$watch(d.ngShow, function (b) {
                                                                        a[b ? 'removeClass' : 'addClass'](c, jg, {
                                                                            tempClasses: kg
                                                                        })
                                                                    })
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    mg = [
                                                        '$animate',
                                                        function (a) {
                                                            return {
                                                                restrict: 'A',
                                                                multiElement: !0,
                                                                link: function (b, c, d) {
                                                                    b.$watch(d.ngHide, function (b) {
                                                                        a[b ? 'addClass' : 'removeClass'](c, jg, {
                                                                            tempClasses: kg
                                                                        })
                                                                    })
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    ng = $c(function (a, b, c) {
                                                        a.$watch(c.ngStyle, function (a, c) {
                                                            c && a !== c && f(c, function (a, c) {
                                                                b.css(c, '')
                                                            }),
                                                            a && b.css(a)
                                                        }, !0)
                                                    }),
                                                    og = [
                                                        '$animate',
                                                        function (a) {
                                                            return {
                                                                require: 'ngSwitch',
                                                                controller: [
                                                                    '$scope',
                                                                    function () {
                                                                        this.cases = {
                                                                        }
                                                                    }
                                                                ],
                                                                link: function (c, d, e, g) {
                                                                    var h = e.ngSwitch || e.on,
                                                                    i = [
                                                                    ],
                                                                    j = [
                                                                    ],
                                                                    k = [
                                                                    ],
                                                                    l = [
                                                                    ],
                                                                    m = function (a, b) {
                                                                        return function () {
                                                                            a.splice(b, 1)
                                                                        }
                                                                    };
                                                                    c.$watch(h, function (c) {
                                                                        var d,
                                                                        e;
                                                                        for (d = 0, e = k.length; e > d; ++d) a.cancel(k[d]);
                                                                        for (k.length = 0, d = 0, e = l.length; e > d; ++d) {
                                                                            var h = oa(j[d].clone);
                                                                            l[d].$destroy();
                                                                            var n = k[d] = a.leave(h);
                                                                            n.then(m(k, d))
                                                                        }
                                                                        j.length = 0,
                                                                        l.length = 0,
                                                                        (i = g.cases['!' + c] || g.cases['?']) && f(i, function (c) {
                                                                            c.transclude(function (d, e) {
                                                                                l.push(e);
                                                                                var f = c.element;
                                                                                d[d.length++] = b.createComment(' end ngSwitchWhen: ');
                                                                                var g = {
                                                                                    clone: d
                                                                                };
                                                                                j.push(g),
                                                                                a.enter(d, f.parent(), f)
                                                                            })
                                                                        })
                                                                    })
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    pg = $c({
                                                        transclude: 'element',
                                                        priority: 1200,
                                                        require: '^ngSwitch',
                                                        multiElement: !0,
                                                        link: function (a, b, c, d, e) {
                                                            d.cases['!' + c.ngSwitchWhen] = d.cases['!' + c.ngSwitchWhen] || [],
                                                            d.cases['!' + c.ngSwitchWhen].push({
                                                                transclude: e,
                                                                element: b
                                                            })
                                                        }
                                                    }),
                                                    qg = $c({
                                                        transclude: 'element',
                                                        priority: 1200,
                                                        require: '^ngSwitch',
                                                        multiElement: !0,
                                                        link: function (a, b, c, d, e) {
                                                            d.cases['?'] = d.cases['?'] || [],
                                                            d.cases['?'].push({
                                                                transclude: e,
                                                                element: b
                                                            })
                                                        }
                                                    }),
                                                    rg = $c({
                                                        restrict: 'EAC',
                                                        link: function (a, b, c, e, f) {
                                                            if (!f) throw d('ngTransclude') ('orphan', 'Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}', Z(b));
                                                            f(function (a) {
                                                                b.empty(),
                                                                b.append(a)
                                                            })
                                                        }
                                                    }),
                                                    sg = [
                                                        '$templateCache',
                                                        function (a) {
                                                            return {
                                                                restrict: 'E',
                                                                terminal: !0,
                                                                compile: function (b, c) {
                                                                    if ('text/ng-template' == c.type) {
                                                                        var d = c.id,
                                                                            e = b[0].text;
                                                                        a.put(d, e)
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    tg = {
                                                        $setViewValue: p,
                                                        $render: p
                                                    },
                                                    ug = [
                                                        '$element',
                                                        '$scope',
                                                        '$attrs',
                                                        function (a, d, e) {
                                                            var f = this,
                                                            g = new Va;
                                                            f.ngModelCtrl = tg,
                                                        f.unknownOption = zd(b.createElement('option')),
                                                        f.renderUnknownOption = function (b) {
                                                            var c = '? ' + Ua(b) + ' ?';
                                                            f.unknownOption.val(c),
                                                            a.prepend(f.unknownOption),
                                                            a.val(c)
                                                        },
                                                        d.$on('$destroy', function () {
                                                            f.renderUnknownOption = p
                                                        }),
                                                        f.removeUnknownOption = function () {
                                                            f.unknownOption.parent() && f.unknownOption.remove()
                                                        },
                                                        f.readValue = function () {
                                                            return f.removeUnknownOption(),
                                                            a.val()
                                                        },
                                                        f.writeValue = function (b) {
                                                            f.hasOption(b) ? (f.removeUnknownOption(), a.val(b), '' === b && f.emptyOption.prop('selected', !0))  : null == b && f.emptyOption ? (f.removeUnknownOption(), a.val(''))  : f.renderUnknownOption(b)
                                                        },
                                                        f.addOption = function (a, b) {
                                                            ma(a, '"option value"'),
                                                            '' === a && (f.emptyOption = b);
                                                            var c = g.get(a) || 0;
                                                            g.put(a, c + 1)
                                                        },
                                                        f.removeOption = function (a) {
                                                            var b = g.get(a);
                                                            b && (1 === b ? (g.remove(a), '' === a && (f.emptyOption = c))  : g.put(a, b - 1))
                                                        },
                                                        f.hasOption = function (a) {
                                                            return !!g.get(a)
                                                        }
                                                        }
                                                    ],
                                                    vg = function () {
                                                        return {
                                                            restrict: 'E',
                                                            require: [
                                                                'select',
                                                                '?ngModel'
                                                            ],
                                                            controller: ug,
                                                            link: function (a, b, c, d) {
                                                                var e = d[1];
                                                                if (e) {
                                                                    var g = d[0];
                                                                    if (g.ngModelCtrl = e, e.$render = function () {
                                                                        g.writeValue(e.$viewValue)
                                                                    }, b.on('change', function () {
                                                                        a.$apply(function () {
                                                                            e.$setViewValue(g.readValue())
                                                                        })
                                                                    }), c.multiple) {
                                                                        g.readValue = function () {
                                                                            var a = [
                                                                            ];
                                                                            return f(b.find('option'), function (b) {
                                                                                b.selected && a.push(b.value)
                                                                            }),
                                                                            a
                                                                        },
                                                                        g.writeValue = function (a) {
                                                                            var c = new Va(a);
                                                                            f(b.find('option'), function (a) {
                                                                                a.selected = t(c.get(a.value))
                                                                            })
                                                                        };
                                                                        var h,
                                                                        i = NaN;
                                                                        a.$watch(function () {
                                                                            i !== e.$viewValue || P(h, e.$viewValue) || (h = O(e.$viewValue), e.$render()),
                                                                            i = e.$viewValue
                                                                        }),
                                                                        e.$isEmpty = function (a) {
                                                                            return !a || 0 === a.length
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
                                                    wg = [
                                                        '$interpolate',
                                                        function (a) {
                                                            function b(a) {
                                                                a[0].hasAttribute('selected') && (a[0].selected = !0)
                                                            }
                                                            return {
                                                                restrict: 'E',
                                                                priority: 100,
                                                                compile: function (c, d) {
                                                                    if (s(d.value)) {
                                                                        var e = a(c.text(), !0);
                                                                        e || d.$set('value', c.text())
                                                                    }
                                                                    return function (a, c, d) {
                                                                        var f = '$selectController',
                                                                        g = c.parent(),
                                                                        h = g.data(f) || g.parent().data(f);
                                                                        h && h.ngModelCtrl && (e ? a.$watch(e, function (a, e) {
                                                                            d.$set('value', a),
                                                                            e !== a && h.removeOption(e),
                                                                            h.addOption(a, c),
                                                                            h.ngModelCtrl.$render(),
                                                                            b(c)
                                                                        })  : (h.addOption(d.value, c), h.ngModelCtrl.$render(), b(c)), c.on('$destroy', function () {
                                                                            h.removeOption(d.value),
                                                                            h.ngModelCtrl.$render()
                                                                        }))
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    xg = r({
                                                        restrict: 'E',
                                                        terminal: !1
                                                    }),
                                                    yg = function () {
                                                        return {
                                                            restrict: 'A',
                                                            require: '?ngModel',
                                                            link: function (a, b, c, d) {
                                                                d && (c.required = !0, d.$validators.required = function (a, b) {
                                                                    return !c.required || !d.$isEmpty(b)
                                                                }, c.$observe('required', function () {
                                                                    d.$validate()
                                                                }))
                                                            }
                                                        }
                                                    },
                                                    zg = function () {
                                                        return {
                                                            restrict: 'A',
                                                            require: '?ngModel',
                                                            link: function (a, b, e, f) {
                                                                if (f) {
                                                                    var g,
                                                                        h = e.ngPattern || e.pattern;
                                                                    e.$observe('pattern', function (a) {
                                                                        if (w(a) && a.length > 0 && (a = new RegExp('^' + a + '$')), a && !a.test) throw d('ngPattern') ('noregexp', 'Expected {0} to be a RegExp but was {1}. Element: {2}', h, a, Z(b));
                                                                        g = a || c,
                                                                            f.$validate()
                                                                    }),
                                                                    f.$validators.pattern = function (a) {
                                                                        return f.$isEmpty(a) || s(g) || g.test(a)
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
                                                    Ag = function () {
                                                        return {
                                                            restrict: 'A',
                                                            require: '?ngModel',
                                                            link: function (a, b, c, d) {
                                                                if (d) {
                                                                    var e = - 1;
                                                                    c.$observe('maxlength', function (a) {
                                                                        var b = n(a);
                                                                        e = isNaN(b) ? - 1 : b,
                                                                        d.$validate()
                                                                    }),
                                                                    d.$validators.maxlength = function (a, b) {
                                                                        return 0 > e || d.$isEmpty(b) || b.length <= e
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
                                                    Bg = function () {
                                                        return {
                                                            restrict: 'A',
                                                            require: '?ngModel',
                                                            link: function (a, b, c, d) {
                                                                if (d) {
                                                                    var e = 0;
                                                                    c.$observe('minlength', function (a) {
                                                                        e = n(a) || 0,
                                                                        d.$validate()
                                                                    }),
                                                                    d.$validators.minlength = function (a, b) {
                                                                        return d.$isEmpty(b) || b.length >= e
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    };
                                                    return a.angular.bootstrap ? void console.log('WARNING: Tried to load angular more than once.')  : (ja(), ta(Id), void zd(b).ready(function () {
                                                        ea(b, fa)
                                                    }))
                                                }(window, document),
                                                !window.angular.$$csp() && window.angular.element(document).find('head').prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),
                                                'undefined' == typeof jQuery) throw new Error('Bootstrap\'s JavaScript requires jQuery');
                + function (a) {
                    'use strict';
                    var b = a.fn.jquery.split(' ') [0].split('.');
                    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
                }(jQuery),
                + function (a) {
                    'use strict';
                    function b() {
                        var a = document.createElement('bootstrap'),
                        b = {
                            WebkitTransition: 'webkitTransitionEnd',
                            MozTransition: 'transitionend',
                            OTransition: 'oTransitionEnd otransitionend',
                            transition: 'transitionend'
                        };
                        for (var c in b) if (void 0 !== a.style[c]) return {
                            end: b[c]
                        };
                        return !1
                    }
                    a.fn.emulateTransitionEnd = function (b) {
                        var c = !1,
                        d = this;
                        a(this).one('bsTransitionEnd', function () {
                            c = !0
                        });
                        var e = function () {
                            c || a(d).trigger(a.support.transition.end)
                        };
                        return setTimeout(e, b),
                        this
                    },
                    a(function () {
                        a.support.transition = b(),
                        a.support.transition && (a.event.special.bsTransitionEnd = {
                            bindType: a.support.transition.end,
                            delegateType: a.support.transition.end,
                            handle: function (b) {
                                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments)  : void 0
                            }
                        })
                    })
                }(jQuery),
                + function (a) {
                    'use strict';
                    function b(b) {
                        return this.each(function () {
                            var c = a(this),
                            e = c.data('bs.alert');
                            e || c.data('bs.alert', e = new d(this)),
                            'string' == typeof b && e[b].call(c)
                        })
                    }
                    var c = '[data-dismiss="alert"]',
                    d = function (b) {
                        a(b).on('click', c, this.close)
                    };
                    d.VERSION = '3.3.4',
                    d.TRANSITION_DURATION = 150,
                    d.prototype.close = function (b) {
                        function c() {
                            g.detach().trigger('closed.bs.alert').remove()
                        }
                        var e = a(this),
                        f = e.attr('data-target');
                        f || (f = e.attr('href'), f = f && f.replace(/.*(?=#[^\s]*$)/, ''));
                        var g = a(f);
                        b && b.preventDefault(),
                        g.length || (g = e.closest('.alert')),
                        g.trigger(b = a.Event('close.bs.alert')),
                        b.isDefaultPrevented() || (g.removeClass('in'), a.support.transition && g.hasClass('fade') ? g.one('bsTransitionEnd', c).emulateTransitionEnd(d.TRANSITION_DURATION)  : c())
                    };
                    var e = a.fn.alert;
                    a.fn.alert = b,
                    a.fn.alert.Constructor = d,
                    a.fn.alert.noConflict = function () {
                        return a.fn.alert = e,
                        this
                    },
                    a(document).on('click.bs.alert.data-api', c, d.prototype.close)
                }(jQuery),
                + function (a) {
                    'use strict';
                    function b(b) {
                        return this.each(function () {
                            var d = a(this),
                            e = d.data('bs.button'),
                            f = 'object' == typeof b && b;
                            e || d.data('bs.button', e = new c(this, f)),
                            'toggle' == b ? e.toggle()  : b && e.setState(b)
                        })
                    }
                    var c = function (b, d) {
                        this.$element = a(b),
                        this.options = a.extend({
                        }, c.DEFAULTS, d),
                        this.isLoading = !1
                    };
                    c.VERSION = '3.3.4',
                    c.DEFAULTS = {
                        loadingText: 'loading...'
                    },
                    c.prototype.setState = function (b) {
                        var c = 'disabled',
                        d = this.$element,
                        e = d.is('input') ? 'val' : 'html',
                        f = d.data();
                        b += 'Text',
                        null == f.resetText && d.data('resetText', d[e]()),
                        setTimeout(a.proxy(function () {
                            d[e](null == f[b] ? this.options[b] : f[b]),
                            'loadingText' == b ? (this.isLoading = !0, d.addClass(c).attr(c, c))  : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
                        }, this), 0)
                    },
                    c.prototype.toggle = function () {
                        var a = !0,
                        b = this.$element.closest('[data-toggle="buttons"]');
                        if (b.length) {
                            var c = this.$element.find('input');
                            'radio' == c.prop('type') && (c.prop('checked') && this.$element.hasClass('active') ? a = !1 : b.find('.active').removeClass('active')),
                            a && c.prop('checked', !this.$element.hasClass('active')).trigger('change')
                        } else this.$element.attr('aria-pressed', !this.$element.hasClass('active'));
                        a && this.$element.toggleClass('active')
                    };
                    var d = a.fn.button;
                    a.fn.button = b,
                    a.fn.button.Constructor = c,
                    a.fn.button.noConflict = function () {
                        return a.fn.button = d,
                        this
                    },
                    a(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (c) {
                        var d = a(c.target);
                        d.hasClass('btn') || (d = d.closest('.btn')),
                        b.call(d, 'toggle'),
                        c.preventDefault()
                    }).on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (b) {
                        a(b.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(b.type))
                    })
                }(jQuery),
                + function (a) {
                    'use strict';
                    function b(b) {
                        return this.each(function () {
                            var d = a(this),
                            e = d.data('bs.carousel'),
                            f = a.extend({
                            }, c.DEFAULTS, d.data(), 'object' == typeof b && b),
                            g = 'string' == typeof b ? b : f.slide;
                            e || d.data('bs.carousel', e = new c(this, f)),
                            'number' == typeof b ? e.to(b)  : g ? e[g]()  : f.interval && e.pause().cycle()
                        })
                    }
                    var c = function (b, c) {
                        this.$element = a(b),
                        this.$indicators = this.$element.find('.carousel-indicators'),
                        this.options = c,
                        this.paused = null,
                        this.sliding = null,
                        this.interval = null,
                        this.$active = null,
                        this.$items = null,
                        this.options.keyboard && this.$element.on('keydown.bs.carousel', a.proxy(this.keydown, this)),
                        'hover' == this.options.pause && !('ontouchstart' in document.documentElement) && this.$element.on('mouseenter.bs.carousel', a.proxy(this.pause, this)).on('mouseleave.bs.carousel', a.proxy(this.cycle, this))
                    };
                    c.VERSION = '3.3.4',
                    c.TRANSITION_DURATION = 600,
                    c.DEFAULTS = {
                        interval: 5000,
                        pause: 'hover',
                        wrap: !0,
                        keyboard: !0
                    },
                    c.prototype.keydown = function (a) {
                        if (!/input|textarea/i.test(a.target.tagName)) {
                            switch (a.which) {
                                case 37:
                                    this.prev();
                                    break;
                                case 39:
                                    this.next();
                                    break;
                                default:
                                    return
                            }
                            a.preventDefault()
                        }
                    },
                    c.prototype.cycle = function (b) {
                        return b || (this.paused = !1),
                        this.interval && clearInterval(this.interval),
                        this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)),
                        this
                    },
                    c.prototype.getItemIndex = function (a) {
                        return this.$items = a.parent().children('.item'),
                        this.$items.index(a || this.$active)
                    },
                    c.prototype.getItemForDirection = function (a, b) {
                        var c = this.getItemIndex(b),
                        d = 'prev' == a && 0 === c || 'next' == a && c == this.$items.length - 1;
                        if (d && !this.options.wrap) return b;
                        var e = 'prev' == a ? - 1 : 1,
                            f = (c + e) % this.$items.length;
                        return this.$items.eq(f)
                    },
                    c.prototype.to = function (a) {
                        var b = this,
                        c = this.getItemIndex(this.$active = this.$element.find('.item.active'));
                        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one('slid.bs.carousel', function () {
                            b.to(a)
                        })  : c == a ? this.pause().cycle()  : this.slide(a > c ? 'next' : 'prev', this.$items.eq(a))
                    },
                    c.prototype.pause = function (b) {
                        return b || (this.paused = !0),
                        this.$element.find('.next, .prev').length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
                        this.interval = clearInterval(this.interval),
                        this
                    },
                    c.prototype.next = function () {
                        return this.sliding ? void 0 : this.slide('next')
                    },
                    c.prototype.prev = function () {
                        return this.sliding ? void 0 : this.slide('prev')
                    },
                    c.prototype.slide = function (b, d) {
                        var e = this.$element.find('.item.active'),
                        f = d || this.getItemForDirection(b, e),
                        g = this.interval,
                        h = 'next' == b ? 'left' : 'right',
                        i = this;
                        if (f.hasClass('active')) return this.sliding = !1;
                        var j = f[0],
                            k = a.Event('slide.bs.carousel', {
                                relatedTarget: j,
                                direction: h
                            });
                        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
                            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                                this.$indicators.find('.active').removeClass('active');
                                var l = a(this.$indicators.children() [this.getItemIndex(f)]);
                                l && l.addClass('active')
                            }
                            var m = a.Event('slid.bs.carousel', {
                                relatedTarget: j,
                                direction: h
                            });
                            return a.support.transition && this.$element.hasClass('slide') ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one('bsTransitionEnd', function () {
                                f.removeClass([b,
                                        h].join(' ')).addClass('active'),
                                e.removeClass(['active',
                                        h].join(' ')),
                                i.sliding = !1,
                                setTimeout(function () {
                                    i.$element.trigger(m)
                                }, 0)
                            }).emulateTransitionEnd(c.TRANSITION_DURATION))  : (e.removeClass('active'), f.addClass('active'), this.sliding = !1, this.$element.trigger(m)),
                            g && this.cycle(),
                            this
                        }
                    };
                    var d = a.fn.carousel;
                    a.fn.carousel = b,
                    a.fn.carousel.Constructor = c,
                    a.fn.carousel.noConflict = function () {
                        return a.fn.carousel = d,
                        this
                    };
                    var e = function (c) {
                        var d,
                        e = a(this),
                        f = a(e.attr('data-target') || (d = e.attr('href')) && d.replace(/.*(?=#[^\s]+$)/, ''));
                        if (f.hasClass('carousel')) {
                            var g = a.extend({
                            }, f.data(), e.data()),
                                h = e.attr('data-slide-to');
                            h && (g.interval = !1),
                            b.call(f, g),
                            h && f.data('bs.carousel').to(h),
                            c.preventDefault()
                        }
                    };
                    a(document).on('click.bs.carousel.data-api', '[data-slide]', e).on('click.bs.carousel.data-api', '[data-slide-to]', e),
                    a(window).on('load', function () {
                        a('[data-ride="carousel"]').each(function () {
                            var c = a(this);
                            b.call(c, c.data())
                        })
                    })
                }(jQuery),
                + function (a) {
                    'use strict';
                    function b(b) {
                        var c,
                        d = b.attr('data-target') || (c = b.attr('href')) && c.replace(/.*(?=#[^\s]+$)/, '');
                        return a(d)
                    }
                    function c(b) {
                        return this.each(function () {
                            var c = a(this),
                            e = c.data('bs.collapse'),
                            f = a.extend({
                            }, d.DEFAULTS, c.data(), 'object' == typeof b && b);
                            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
                            e || c.data('bs.collapse', e = new d(this, f)),
                            'string' == typeof b && e[b]()
                        })
                    }
                    var d = function (b, c) {
                        this.$element = a(b),
                        this.options = a.extend({
                        }, d.DEFAULTS, c),
                        this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'),
                        this.transitioning = null,
                        this.options.parent ? this.$parent = this.getParent()  : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
                        this.options.toggle && this.toggle()
                    };
                    d.VERSION = '3.3.4',
                    d.TRANSITION_DURATION = 350,
                    d.DEFAULTS = {
                        toggle: !0
                    },
                    d.prototype.dimension = function () {
                        var a = this.$element.hasClass('width');
                        return a ? 'width' : 'height'
                    },
                    d.prototype.show = function () {
                        if (!this.transitioning && !this.$element.hasClass('in')) {
                            var b,
                                e = this.$parent && this.$parent.children('.panel').children('.in, .collapsing');
                            if (!(e && e.length && (b = e.data('bs.collapse'), b && b.transitioning))) {
                                var f = a.Event('show.bs.collapse');
                                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                                    e && e.length && (c.call(e, 'hide'), b || e.data('bs.collapse', null));
                                    var g = this.dimension();
                                    this.$element.removeClass('collapse').addClass('collapsing') [g](0).attr('aria-expanded', !0),
                                    this.$trigger.removeClass('collapsed').attr('aria-expanded', !0),
                                    this.transitioning = 1;
                                    var h = function () {
                                        this.$element.removeClass('collapsing').addClass('collapse in') [g](''),
                                        this.transitioning = 0,
                                        this.$element.trigger('shown.bs.collapse')
                                    };
                                    if (!a.support.transition) return h.call(this);
                                    var i = a.camelCase(['scroll',
                                            g].join('-'));
                                    this.$element.one('bsTransitionEnd', a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION) [g](this.$element[0][i])
                                }
                            }
                        }
                    },
                    d.prototype.hide = function () {
                        if (!this.transitioning && this.$element.hasClass('in')) {
                            var b = a.Event('hide.bs.collapse');
                            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                                var c = this.dimension();
                                this.$element[c](this.$element[c]()) [0].offsetHeight,
                                this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', !1),
                                this.$trigger.addClass('collapsed').attr('aria-expanded', !1),
                                this.transitioning = 1;
                                var e = function () {
                                    this.transitioning = 0,
                                    this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse')
                                };
                                return a.support.transition ? void this.$element[c](0).one('bsTransitionEnd', a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION)  : e.call(this)
                            }
                        }
                    },
                    d.prototype.toggle = function () {
                        this[this.$element.hasClass('in') ? 'hide' : 'show']()
                    },
                    d.prototype.getParent = function () {
                        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
                            var e = a(d);
                            this.addAriaAndCollapsedClass(b(e), e)
                        }, this)).end()
                    },
                    d.prototype.addAriaAndCollapsedClass = function (a, b) {
                        var c = a.hasClass('in');
                        a.attr('aria-expanded', c),
                        b.toggleClass('collapsed', !c).attr('aria-expanded', c)
                    };
                    var e = a.fn.collapse;
                    a.fn.collapse = c,
                    a.fn.collapse.Constructor = d,
                    a.fn.collapse.noConflict = function () {
                        return a.fn.collapse = e,
                        this
                    },
                    a(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (d) {
                        var e = a(this);
                        e.attr('data-target') || d.preventDefault();
                        var f = b(e),
                        g = f.data('bs.collapse'),
                        h = g ? 'toggle' : e.data();
                        c.call(f, h)
                    })
                }(jQuery),
                + function (a) {
                    'use strict';
                    function b(b) {
                        b && 3 === b.which || (a(e).remove(), a(f).each(function () {
                            var d = a(this),
                            e = c(d),
                            f = {
                                relatedTarget: this
                            };
                            e.hasClass('open') && (e.trigger(b = a.Event('hide.bs.dropdown', f)), b.isDefaultPrevented() || (d.attr('aria-expanded', 'false'), e.removeClass('open').trigger('hidden.bs.dropdown', f)))
                        }))
                    }
                    function c(b) {
                        var c = b.attr('data-target');
                        c || (c = b.attr('href'), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ''));
                        var d = c && a(c);
                        return d && d.length ? d : b.parent()
                    }
                    function d(b) {
                        return this.each(function () {
                            var c = a(this),
                            d = c.data('bs.dropdown');
                            d || c.data('bs.dropdown', d = new g(this)),
                            'string' == typeof b && d[b].call(c)
                        })
                    }
                    var e = '.dropdown-backdrop',
                    f = '[data-toggle="dropdown"]',
                    g = function (b) {
                        a(b).on('click.bs.dropdown', this.toggle)
                    };
                    g.VERSION = '3.3.4',
                    g.prototype.toggle = function (d) {
                        var e = a(this);
                        if (!e.is('.disabled, :disabled')) {
                            var f = c(e),
                                g = f.hasClass('open');
                            if (b(), !g) {
                                'ontouchstart' in document.documentElement && !f.closest('.navbar-nav').length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on('click', b);
                                var h = {
                                    relatedTarget: this
                                };
                                if (f.trigger(d = a.Event('show.bs.dropdown', h)), d.isDefaultPrevented()) return;
                                e.trigger('focus').attr('aria-expanded', 'true'),
                                    f.toggleClass('open').trigger('shown.bs.dropdown', h)
                            }
                            return !1
                        }
                    },
                    g.prototype.keydown = function (b) {
                        if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
                            var d = a(this);
                            if (b.preventDefault(), b.stopPropagation(), !d.is('.disabled, :disabled')) {
                                var e = c(d),
                                    g = e.hasClass('open');
                                if (!g && 27 != b.which || g && 27 == b.which) return 27 == b.which && e.find(f).trigger('focus'),
                                d.trigger('click');
                                var h = ' li:not(.disabled):visible a',
                                i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                                if (i.length) {
                                    var j = i.index(b.target);
                                    38 == b.which && j > 0 && j--,
                                    40 == b.which && j < i.length - 1 && j++,
                                    ~j || (j = 0),
                                    i.eq(j).trigger('focus')
                                }
                            }
                        }
                    };
                    var h = a.fn.dropdown;
                    a.fn.dropdown = d,
                    a.fn.dropdown.Constructor = g,
                    a.fn.dropdown.noConflict = function () {
                        return a.fn.dropdown = h,
                        this
                    },
                    a(document).on('click.bs.dropdown.data-api', b).on('click.bs.dropdown.data-api', '.dropdown form', function (a) {
                        a.stopPropagation()
                    }).on('click.bs.dropdown.data-api', f, g.prototype.toggle).on('keydown.bs.dropdown.data-api', f, g.prototype.keydown).on('keydown.bs.dropdown.data-api', '[role="menu"]', g.prototype.keydown).on('keydown.bs.dropdown.data-api', '[role="listbox"]', g.prototype.keydown)
                }(jQuery),
                + function (a) {
                    'use strict';
                    function b(b, d) {
                        return this.each(function () {
                            var e = a(this),
                            f = e.data('bs.modal'),
                            g = a.extend({
                            }, c.DEFAULTS, e.data(), 'object' == typeof b && b);
                            f || e.data('bs.modal', f = new c(this, g)),
                            'string' == typeof b ? f[b](d)  : g.show && f.show(d)
                        })
                    }
                    var c = function (b, c) {
                        this.options = c,
                        this.$body = a(document.body),
                        this.$element = a(b),
                        this.$dialog = this.$element.find('.modal-dialog'),
                        this.$backdrop = null,
                        this.isShown = null,
                        this.originalBodyPad = null,
                        this.scrollbarWidth = 0,
                        this.ignoreBackdropClick = !1,
                        this.options.remote && this.$element.find('.modal-content').load(this.options.remote, a.proxy(function () {
                            this.$element.trigger('loaded.bs.modal')
                        }, this))
                    };
                    c.VERSION = '3.3.4',
                    c.TRANSITION_DURATION = 300,
                    c.BACKDROP_TRANSITION_DURATION = 150,
                    c.DEFAULTS = {
                        backdrop: !0,
                        keyboard: !0,
                        show: !0
                    },
                    c.prototype.toggle = function (a) {
                        return this.isShown ? this.hide()  : this.show(a)
                    },
                    c.prototype.show = function (b) {
                        var d = this,
                        e = a.Event('show.bs.modal', {
                            relatedTarget: b
                        });
                        this.$element.trigger(e),
                        this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass('modal-open'), this.escape(), this.resize(), this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on('mousedown.dismiss.bs.modal', function () {
                            d.$element.one('mouseup.dismiss.bs.modal', function (b) {
                                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
                            })
                        }), this.backdrop(function () {
                            var e = a.support.transition && d.$element.hasClass('fade');
                            d.$element.parent().length || d.$element.appendTo(d.$body),
                            d.$element.show().scrollTop(0),
                            d.adjustDialog(),
                            e && d.$element[0].offsetWidth,
                            d.$element.addClass('in').attr('aria-hidden', !1),
                            d.enforceFocus();
                            var f = a.Event('shown.bs.modal', {
                                relatedTarget: b
                            });
                            e ? d.$dialog.one('bsTransitionEnd', function () {
                                d.$element.trigger('focus').trigger(f)
                            }).emulateTransitionEnd(c.TRANSITION_DURATION)  : d.$element.trigger('focus').trigger(f)
                        }))
                    },
                    c.prototype.hide = function (b) {
                        b && b.preventDefault(),
                        b = a.Event('hide.bs.modal'),
                        this.$element.trigger(b),
                        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off('focusin.bs.modal'), this.$element.removeClass('in').attr('aria-hidden', !0).off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal'), this.$dialog.off('mousedown.dismiss.bs.modal'), a.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION)  : this.hideModal())
                    },
                    c.prototype.enforceFocus = function () {
                        a(document).off('focusin.bs.modal').on('focusin.bs.modal', a.proxy(function (a) {
                            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger('focus')
                        }, this))
                    },
                    c.prototype.escape = function () {
                        this.isShown && this.options.keyboard ? this.$element.on('keydown.dismiss.bs.modal', a.proxy(function (a) {
                            27 == a.which && this.hide()
                        }, this))  : this.isShown || this.$element.off('keydown.dismiss.bs.modal')
                    },
                    c.prototype.resize = function () {
                        this.isShown ? a(window).on('resize.bs.modal', a.proxy(this.handleUpdate, this))  : a(window).off('resize.bs.modal')
                    },
                    c.prototype.hideModal = function () {
                        var a = this;
                        this.$element.hide(),
                        this.backdrop(function () {
                            a.$body.removeClass('modal-open'),
                            a.resetAdjustments(),
                            a.resetScrollbar(),
                            a.$element.trigger('hidden.bs.modal')
                        })
                    },
                    c.prototype.removeBackdrop = function () {
                        this.$backdrop && this.$backdrop.remove(),
                        this.$backdrop = null
                    },
                    c.prototype.backdrop = function (b) {
                        var d = this,
                        e = this.$element.hasClass('fade') ? 'fade' : '';
                        if (this.isShown && this.options.backdrop) {
                            var f = a.support.transition && e;
                            if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').appendTo(this.$body), this.$element.on('click.dismiss.bs.modal', a.proxy(function (a) {
                                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1)  : void (a.target === a.currentTarget && ('static' == this.options.backdrop ? this.$element[0].focus()  : this.hide()))
                            }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass('in'), !b) return;
                            f ? this.$backdrop.one('bsTransitionEnd', b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)  : b()
                        } else if (!this.isShown && this.$backdrop) {
                            this.$backdrop.removeClass('in');
                            var g = function () {
                                d.removeBackdrop(),
                                b && b()
                            };
                            a.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)  : g()
                        } else b && b()
                    },
                    c.prototype.handleUpdate = function () {
                        this.adjustDialog()
                    },
                    c.prototype.adjustDialog = function () {
                        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                        this.$element.css({
                            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : '',
                            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ''
                        })
                    },
                    c.prototype.resetAdjustments = function () {
                        this.$element.css({
                            paddingLeft: '',
                            paddingRight: ''
                        })
                    },
                    c.prototype.checkScrollbar = function () {
                        var a = window.innerWidth;
                        if (!a) {
                            var b = document.documentElement.getBoundingClientRect();
                            a = b.right - Math.abs(b.left)
                        }
                        this.bodyIsOverflowing = document.body.clientWidth < a,
                        this.scrollbarWidth = this.measureScrollbar()
                    },
                    c.prototype.setScrollbar = function () {
                        var a = parseInt(this.$body.css('padding-right') || 0, 10);
                        this.originalBodyPad = document.body.style.paddingRight || '',
                        this.bodyIsOverflowing && this.$body.css('padding-right', a + this.scrollbarWidth)
                    },
                    c.prototype.resetScrollbar = function () {
                        this.$body.css('padding-right', this.originalBodyPad)
                    },
                    c.prototype.measureScrollbar = function () {
                        var a = document.createElement('div');
                        a.className = 'modal-scrollbar-measure',
                        this.$body.append(a);
                        var b = a.offsetWidth - a.clientWidth;
                        return this.$body[0].removeChild(a),
                        b
                    };
                    var d = a.fn.modal;
                    a.fn.modal = b,
                    a.fn.modal.Constructor = c,
                    a.fn.modal.noConflict = function () {
                        return a.fn.modal = d,
                        this
                    },
                    a(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (c) {
                        var d = a(this),
                        e = d.attr('href'),
                        f = a(d.attr('data-target') || e && e.replace(/.*(?=#[^\s]+$)/, '')),
                        g = f.data('bs.modal') ? 'toggle' : a.extend({
                            remote: !/#/.test(e) && e
                        }, f.data(), d.data());
                        d.is('a') && c.preventDefault(),
                        f.one('show.bs.modal', function (a) {
                            a.isDefaultPrevented() || f.one('hidden.bs.modal', function () {
                                d.is(':visible') && d.trigger('focus')
                            })
                        }),
                        b.call(f, g, this)
                    })
                }(jQuery),
                + function (a) {
                    'use strict';
                    function b(b) {
                        return this.each(function () {
                            var d = a(this),
                            e = d.data('bs.tooltip'),
                            f = 'object' == typeof b && b;
                            (e || !/destroy|hide/.test(b)) && (e || d.data('bs.tooltip', e = new c(this, f)), 'string' == typeof b && e[b]())
                        })
                    }
                    var c = function (a, b) {
                        this.type = null,
                        this.options = null,
                        this.enabled = null,
                        this.timeout = null,
                        this.hoverState = null,
                        this.$element = null,
                        this.init('tooltip', a, b)
                    };
                    c.VERSION = '3.3.4',
                    c.TRANSITION_DURATION = 150,
                    c.DEFAULTS = {
                        animation: !0,
                        placement: 'top',
                        selector: !1,
                        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                        trigger: 'hover focus',
                        title: '',
                        delay: 0,
                        html: !1,
                        container: !1,
                        viewport: {
                            selector: 'body',
                            padding: 0
                        }
                    },
                    c.prototype.init = function (b, c, d) {
                        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!');
                        for (var e = this.options.trigger.split(' '), f = e.length; f--; ) {
                            var g = e[f];
                            if ('click' == g) this.$element.on('click.' + this.type, this.options.selector, a.proxy(this.toggle, this));
                            else if ('manual' != g) {
                                var h = 'hover' == g ? 'mouseenter' : 'focusin',
                                    i = 'hover' == g ? 'mouseleave' : 'focusout';
                                this.$element.on(h + '.' + this.type, this.options.selector, a.proxy(this.enter, this)),
                                this.$element.on(i + '.' + this.type, this.options.selector, a.proxy(this.leave, this))
                            }
                        }
                        this.options.selector ? this._options = a.extend({
                        }, this.options, {
                            trigger: 'manual',
                            selector: ''
                        })  : this.fixTitle()
                    },
                    c.prototype.getDefaults = function () {
                        return c.DEFAULTS
                    },
                    c.prototype.getOptions = function (b) {
                        return b = a.extend({
                        }, this.getDefaults(), this.$element.data(), b),
                        b.delay && 'number' == typeof b.delay && (b.delay = {
                            show: b.delay,
                            hide: b.delay
                        }),
                        b
                    },
                    c.prototype.getDelegateOptions = function () {
                        var b = {
                        },
                        c = this.getDefaults();
                        return this._options && a.each(this._options, function (a, d) {
                            c[a] != d && (b[a] = d)
                        }),
                        b
                    },
                    c.prototype.enter = function (b) {
                        var c = b instanceof this.constructor ? b : a(b.currentTarget).data('bs.' + this.type);
                        return c && c.$tip && c.$tip.is(':visible') ? void (c.hoverState = 'in')  : (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data('bs.' + this.type, c)), clearTimeout(c.timeout), c.hoverState = 'in', c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
                            'in' == c.hoverState && c.show()
                        }, c.options.delay.show))  : c.show())
                    },
                    c.prototype.leave = function (b) {
                        var c = b instanceof this.constructor ? b : a(b.currentTarget).data('bs.' + this.type);
                        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data('bs.' + this.type, c)),
                        clearTimeout(c.timeout),
                        c.hoverState = 'out',
                        c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
                            'out' == c.hoverState && c.hide()
                        }, c.options.delay.hide))  : c.hide()
                    },
                    c.prototype.show = function () {
                        var b = a.Event('show.bs.' + this.type);
                        if (this.hasContent() && this.enabled) {
                            this.$element.trigger(b);
                            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                            if (b.isDefaultPrevented() || !d) return;
                            var e = this,
                                f = this.tip(),
                                g = this.getUID(this.type);
                            this.setContent(),
                            f.attr('id', g),
                            this.$element.attr('aria-describedby', g),
                            this.options.animation && f.addClass('fade');
                            var h = 'function' == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0])  : this.options.placement,
                            i = /\s?auto?\s?/i,
                            j = i.test(h);
                            j && (h = h.replace(i, '') || 'top'),
                            f.detach().css({
                                top: 0,
                                left: 0,
                                display: 'block'
                            }).addClass(h).data('bs.' + this.type, this),
                            this.options.container ? f.appendTo(this.options.container)  : f.insertAfter(this.$element);
                            var k = this.getPosition(),
                            l = f[0].offsetWidth,
                            m = f[0].offsetHeight;
                            if (j) {
                                var n = h,
                                    o = this.options.container ? a(this.options.container)  : this.$element.parent(),
                                    p = this.getPosition(o);
                                h = 'bottom' == h && k.bottom + m > p.bottom ? 'top' : 'top' == h && k.top - m < p.top ? 'bottom' : 'right' == h && k.right + l > p.width ? 'left' : 'left' == h && k.left - l < p.left ? 'right' : h,
                                f.removeClass(n).addClass(h)
                            }
                            var q = this.getCalculatedOffset(h, k, l, m);
                            this.applyPlacement(q, h);
                            var r = function () {
                                var a = e.hoverState;
                                e.$element.trigger('shown.bs.' + e.type),
                                e.hoverState = null,
                                'out' == a && e.leave(e)
                            };
                            a.support.transition && this.$tip.hasClass('fade') ? f.one('bsTransitionEnd', r).emulateTransitionEnd(c.TRANSITION_DURATION)  : r()
                        }
                    },
                    c.prototype.applyPlacement = function (b, c) {
                        var d = this.tip(),
                        e = d[0].offsetWidth,
                        f = d[0].offsetHeight,
                        g = parseInt(d.css('margin-top'), 10),
                        h = parseInt(d.css('margin-left'), 10);
                        isNaN(g) && (g = 0),
                        isNaN(h) && (h = 0),
                        b.top = b.top + g,
                        b.left = b.left + h,
                        a.offset.setOffset(d[0], a.extend({
                            using: function (a) {
                                d.css({
                                    top: Math.round(a.top),
                                    left: Math.round(a.left)
                                })
                            }
                        }, b), 0),
                        d.addClass('in');
                        var i = d[0].offsetWidth,
                        j = d[0].offsetHeight;
                        'top' == c && j != f && (b.top = b.top + f - j);
                        var k = this.getViewportAdjustedDelta(c, b, i, j);
                        k.left ? b.left += k.left : b.top += k.top;
                        var l = /top|bottom/.test(c),
                        m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
                        n = l ? 'offsetWidth' : 'offsetHeight';
                        d.offset(b),
                        this.replaceArrow(m, d[0][n], l)
                    },
                    c.prototype.replaceArrow = function (a, b, c) {
                        this.arrow().css(c ? 'left' : 'top', 50 * (1 - a / b) + '%').css(c ? 'top' : 'left', '')
                    },
                    c.prototype.setContent = function () {
                        var a = this.tip(),
                        b = this.getTitle();
                        a.find('.tooltip-inner') [this.options.html ? 'html' : 'text'](b),
                        a.removeClass('fade in top bottom left right')
                    },
                    c.prototype.hide = function (b) {
                        function d() {
                            'in' != e.hoverState && f.detach(),
                            e.$element.removeAttr('aria-describedby').trigger('hidden.bs.' + e.type),
                            b && b()
                        }
                        var e = this,
                        f = a(this.$tip),
                        g = a.Event('hide.bs.' + this.type);
                        return this.$element.trigger(g),
                        g.isDefaultPrevented() ? void 0 : (f.removeClass('in'), a.support.transition && f.hasClass('fade') ? f.one('bsTransitionEnd', d).emulateTransitionEnd(c.TRANSITION_DURATION)  : d(), this.hoverState = null, this)
                    },
                    c.prototype.fixTitle = function () {
                        var a = this.$element;
                        (a.attr('title') || 'string' != typeof a.attr('data-original-title')) && a.attr('data-original-title', a.attr('title') || '').attr('title', '')
                    },
                    c.prototype.hasContent = function () {
                        return this.getTitle()
                    },
                    c.prototype.getPosition = function (b) {
                        b = b || this.$element;
                        var c = b[0],
                        d = 'BODY' == c.tagName,
                        e = c.getBoundingClientRect();
                        null == e.width && (e = a.extend({
                        }, e, {
                            width: e.right - e.left,
                            height: e.bottom - e.top
                        }));
                        var f = d ? {
                            top: 0,
                            left: 0
                        }
                        : b.offset(),
                        g = {
                            scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
                        },
                        h = d ? {
                            width: a(window).width(),
                            height: a(window).height()
                        }
                        : null;
                        return a.extend({
                        }, e, g, h, f)
                    },
                    c.prototype.getCalculatedOffset = function (a, b, c, d) {
                        return 'bottom' == a ? {
                            top: b.top + b.height,
                            left: b.left + b.width / 2 - c / 2
                        }
                        : 'top' == a ? {
                            top: b.top - d,
                            left: b.left + b.width / 2 - c / 2
                        }
                        : 'left' == a ? {
                            top: b.top + b.height / 2 - d / 2,
                            left: b.left - c
                        }
                        : {
                            top: b.top + b.height / 2 - d / 2,
                            left: b.left + b.width
                        }
                    },
                    c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
                        var e = {
                            top: 0,
                            left: 0
                        };
                        if (!this.$viewport) return e;
                        var f = this.options.viewport && this.options.viewport.padding || 0,
                            g = this.getPosition(this.$viewport);
                        if (/right|left/.test(a)) {
                            var h = b.top - f - g.scroll,
                                i = b.top + f - g.scroll + d;
                            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
                        } else {
                            var j = b.left - f,
                                k = b.left + f + c;
                            j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
                        }
                        return e
                    },
                    c.prototype.getTitle = function () {
                        var a,
                        b = this.$element,
                        c = this.options;
                        return a = b.attr('data-original-title') || ('function' == typeof c.title ? c.title.call(b[0])  : c.title)
                    },
                    c.prototype.getUID = function (a) {
                        do a += ~~(1000000 * Math.random());
                        while (document.getElementById(a));
                        return a
                    },
                    c.prototype.tip = function () {
                        return this.$tip = this.$tip || a(this.options.template)
                    },
                    c.prototype.arrow = function () {
                        return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
                    },
                    c.prototype.enable = function () {
                        this.enabled = !0
                    },
                    c.prototype.disable = function () {
                        this.enabled = !1
                    },
                    c.prototype.toggleEnabled = function () {
                        this.enabled = !this.enabled
                    },
                    c.prototype.toggle = function (b) {
                        var c = this;
                        b && (c = a(b.currentTarget).data('bs.' + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data('bs.' + this.type, c))),
                        c.tip().hasClass('in') ? c.leave(c)  : c.enter(c)
                    },
                    c.prototype.destroy = function () {
                        var a = this;
                        clearTimeout(this.timeout),
                        this.hide(function () {
                            a.$element.off('.' + a.type).removeData('bs.' + a.type)
                        })
                    };
                    var d = a.fn.tooltip;
                    a.fn.tooltip = b,
                    a.fn.tooltip.Constructor = c,
                    a.fn.tooltip.noConflict = function () {
                        return a.fn.tooltip = d,
                        this
                    }
                }(jQuery),
                + function (a) {
                    'use strict';
                    function b(b) {
                        return this.each(function () {
                            var d = a(this),
                            e = d.data('bs.popover'),
                            f = 'object' == typeof b && b;
                            (e || !/destroy|hide/.test(b)) && (e || d.data('bs.popover', e = new c(this, f)), 'string' == typeof b && e[b]())
                        })
                    }
                    var c = function (a, b) {
                        this.init('popover', a, b)
                    };
                    if (!a.fn.tooltip) throw new Error('Popover requires tooltip.js');
                    c.VERSION = '3.3.4',
                        c.DEFAULTS = a.extend({
                        }, a.fn.tooltip.Constructor.DEFAULTS, {
                            placement: 'right',
                            trigger: 'click',
                            content: '',
                            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                        }),
                        c.prototype = a.extend({
                        }, a.fn.tooltip.Constructor.prototype),
                        c.prototype.constructor = c,
                        c.prototype.getDefaults = function () {
                            return c.DEFAULTS
                        },
                        c.prototype.setContent = function () {
                            var a = this.tip(),
                            b = this.getTitle(),
                            c = this.getContent();
                            a.find('.popover-title') [this.options.html ? 'html' : 'text'](b),
                            a.find('.popover-content').children().detach().end() [this.options.html ? 'string' == typeof c ? 'html' : 'append' : 'text'](c),
                            a.removeClass('fade top bottom left right in'),
                            a.find('.popover-title').html() || a.find('.popover-title').hide()
                        },
                        c.prototype.hasContent = function () {
                            return this.getTitle() || this.getContent()
                        },
                        c.prototype.getContent = function () {
                            var a = this.$element,
                            b = this.options;
                            return a.attr('data-content') || ('function' == typeof b.content ? b.content.call(a[0])  : b.content)
                        },
                        c.prototype.arrow = function () {
                            return this.$arrow = this.$arrow || this.tip().find('.arrow')
                        };
                    var d = a.fn.popover;
                    a.fn.popover = b,
                    a.fn.popover.Constructor = c,
                    a.fn.popover.noConflict = function () {
                        return a.fn.popover = d,
                        this
                    }
                }(jQuery),
                + function (a) {
                    'use strict';
                    function b(c, d) {
                        this.$body = a(document.body),
                        this.$scrollElement = a(a(c).is(document.body) ? window : c),
                        this.options = a.extend({
                        }, b.DEFAULTS, d),
                        this.selector = (this.options.target || '') + ' .nav li > a',
                        this.offsets = [
                        ],
                        this.targets = [
                        ],
                        this.activeTarget = null,
                        this.scrollHeight = 0,
                        this.$scrollElement.on('scroll.bs.scrollspy', a.proxy(this.process, this)),
                        this.refresh(),
                        this.process()
                    }
                    function c(c) {
                        return this.each(function () {
                            var d = a(this),
                            e = d.data('bs.scrollspy'),
                            f = 'object' == typeof c && c;
                            e || d.data('bs.scrollspy', e = new b(this, f)),
                            'string' == typeof c && e[c]()
                        })
                    }
                    b.VERSION = '3.3.4',
                    b.DEFAULTS = {
                        offset: 10
                    },
                    b.prototype.getScrollHeight = function () {
                        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
                    },
                    b.prototype.refresh = function () {
                        var b = this,
                        c = 'offset',
                        d = 0;
                        this.offsets = [
                        ],
                        this.targets = [
                        ],
                        this.scrollHeight = this.getScrollHeight(),
                        a.isWindow(this.$scrollElement[0]) || (c = 'position', d = this.$scrollElement.scrollTop()),
                        this.$body.find(this.selector).map(function () {
                            var b = a(this),
                            e = b.data('target') || b.attr('href'),
                            f = /^#./.test(e) && a(e);
                            return f && f.length && f.is(':visible') && [[f[c]().top + d,
                            e]] || null
                        }).sort(function (a, b) {
                            return a[0] - b[0]
                        }).each(function () {
                            b.offsets.push(this[0]),
                            b.targets.push(this[1])
                        })
                    },
                    b.prototype.process = function () {
                        var a,
                        b = this.$scrollElement.scrollTop() + this.options.offset,
                        c = this.getScrollHeight(),
                        d = this.options.offset + c - this.$scrollElement.height(),
                        e = this.offsets,
                        f = this.targets,
                        g = this.activeTarget;
                        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
                        if (g && b < e[0]) return this.activeTarget = null,
                            this.clear();
                        for (a = e.length; a--; ) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
                    },
                    b.prototype.activate = function (b) {
                        this.activeTarget = b,
                        this.clear();
                        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
                        d = a(c).parents('li').addClass('active');
                        d.parent('.dropdown-menu').length && (d = d.closest('li.dropdown').addClass('active')),
                        d.trigger('activate.bs.scrollspy')
                    },
                    b.prototype.clear = function () {
                        a(this.selector).parentsUntil(this.options.target, '.active').removeClass('active')
                    };
                    var d = a.fn.scrollspy;
                    a.fn.scrollspy = c,
                    a.fn.scrollspy.Constructor = b,
                    a.fn.scrollspy.noConflict = function () {
                        return a.fn.scrollspy = d,
                        this
                    },
                    a(window).on('load.bs.scrollspy.data-api', function () {
                        a('[data-spy="scroll"]').each(function () {
                            var b = a(this);
                            c.call(b, b.data())
                        })
                    })
                }(jQuery),
                + function (a) {
                    'use strict';
                    function b(b) {
                        return this.each(function () {
                            var d = a(this),
                            e = d.data('bs.tab');
                            e || d.data('bs.tab', e = new c(this)),
                            'string' == typeof b && e[b]()
                        })
                    }
                    var c = function (b) {
                        this.element = a(b)
                    };
                    c.VERSION = '3.3.4',
                    c.TRANSITION_DURATION = 150,
                    c.prototype.show = function () {
                        var b = this.element,
                        c = b.closest('ul:not(.dropdown-menu)'),
                        d = b.data('target');
                        if (d || (d = b.attr('href'), d = d && d.replace(/.*(?=#[^\s]*$)/, '')), !b.parent('li').hasClass('active')) {
                            var e = c.find('.active:last a'),
                                f = a.Event('hide.bs.tab', {
                                    relatedTarget: b[0]
                                }),
                                g = a.Event('show.bs.tab', {
                                    relatedTarget: e[0]
                                });
                            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                                var h = a(d);
                                this.activate(b.closest('li'), c),
                                this.activate(h, h.parent(), function () {
                                    e.trigger({
                                        type: 'hidden.bs.tab',
                                        relatedTarget: b[0]
                                    }),
                                    b.trigger({
                                        type: 'shown.bs.tab',
                                        relatedTarget: e[0]
                                    })
                                })
                            }
                        }
                    },
                    c.prototype.activate = function (b, d, e) {
                        function f() {
                            g.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', !1),
                            b.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded', !0),
                            h ? (b[0].offsetWidth, b.addClass('in'))  : b.removeClass('fade'),
                            b.parent('.dropdown-menu').length && b.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', !0),
                            e && e()
                        }
                        var g = d.find('> .active'),
                        h = e && a.support.transition && (g.length && g.hasClass('fade') || !!d.find('> .fade').length);
                        g.length && h ? g.one('bsTransitionEnd', f).emulateTransitionEnd(c.TRANSITION_DURATION)  : f(),
                        g.removeClass('in')
                    };
                    var d = a.fn.tab;
                    a.fn.tab = b,
                    a.fn.tab.Constructor = c,
                    a.fn.tab.noConflict = function () {
                        return a.fn.tab = d,
                        this
                    };
                    var e = function (c) {
                        c.preventDefault(),
                        b.call(a(this), 'show')
                    };
                    a(document).on('click.bs.tab.data-api', '[data-toggle="tab"]', e).on('click.bs.tab.data-api', '[data-toggle="pill"]', e)
                }(jQuery),
                + function (a) {
                    'use strict';
                    function b(b) {
                        return this.each(function () {
                            var d = a(this),
                            e = d.data('bs.affix'),
                            f = 'object' == typeof b && b;
                            e || d.data('bs.affix', e = new c(this, f)),
                            'string' == typeof b && e[b]()
                        })
                    }
                    var c = function (b, d) {
                        this.options = a.extend({
                        }, c.DEFAULTS, d),
                        this.$target = a(this.options.target).on('scroll.bs.affix.data-api', a.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', a.proxy(this.checkPositionWithEventLoop, this)),
                        this.$element = a(b),
                        this.affixed = null,
                        this.unpin = null,
                        this.pinnedOffset = null,
                        this.checkPosition()
                    };
                    c.VERSION = '3.3.4',
                    c.RESET = 'affix affix-top affix-bottom',
                    c.DEFAULTS = {
                        offset: 0,
                        target: window
                    },
                    c.prototype.getState = function (a, b, c, d) {
                        var e = this.$target.scrollTop(),
                        f = this.$element.offset(),
                        g = this.$target.height();
                        if (null != c && 'top' == this.affixed) return c > e ? 'top' : !1;
                        if ('bottom' == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : 'bottom' : a - d >= e + g ? !1 : 'bottom';
                        var h = null == this.affixed,
                            i = h ? e : f.top,
                            j = h ? g : b;
                        return null != c && c >= e ? 'top' : null != d && i + j >= a - d ? 'bottom' : !1
                    },
                    c.prototype.getPinnedOffset = function () {
                        if (this.pinnedOffset) return this.pinnedOffset;
                        this.$element.removeClass(c.RESET).addClass('affix');
                        var a = this.$target.scrollTop(),
                        b = this.$element.offset();
                        return this.pinnedOffset = b.top - a
                    },
                    c.prototype.checkPositionWithEventLoop = function () {
                        setTimeout(a.proxy(this.checkPosition, this), 1)
                    },
                    c.prototype.checkPosition = function () {
                        if (this.$element.is(':visible')) {
                            var b = this.$element.height(),
                                d = this.options.offset,
                                e = d.top,
                                f = d.bottom,
                                g = a(document.body).height();
                            'object' != typeof d && (f = e = d),
                            'function' == typeof e && (e = d.top(this.$element)),
                            'function' == typeof f && (f = d.bottom(this.$element));
                            var h = this.getState(g, b, e, f);
                            if (this.affixed != h) {
                                null != this.unpin && this.$element.css('top', '');
                                var i = 'affix' + (h ? '-' + h : ''),
                                j = a.Event(i + '.bs.affix');
                                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                                this.affixed = h,
                                    this.unpin = 'bottom' == h ? this.getPinnedOffset()  : null,
                                    this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace('affix', 'affixed') + '.bs.affix')
                            }
                            'bottom' == h && this.$element.offset({
                                top: g - b - f
                            })
                        }
                    };
                    var d = a.fn.affix;
                    a.fn.affix = b,
                    a.fn.affix.Constructor = c,
                    a.fn.affix.noConflict = function () {
                        return a.fn.affix = d,
                        this
                    },
                    a(window).on('load', function () {
                        a('[data-spy="affix"]').each(function () {
                            var c = a(this),
                            d = c.data();
                            d.offset = d.offset || {
                            },
                            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
                            null != d.offsetTop && (d.offset.top = d.offsetTop),
                            b.call(c, d)
                        })
                    })
                }(jQuery),
                function (a, b, c) {
                    'use strict';
                    function d(a, b, c) {
                        if (!a) throw ngMinErr('areq', 'Argument \'{0}\' is {1}', b || '?', c || 'required');
                        return a
                    }
                    function e(a, b) {
                        return a || b ? a ? b ? (M(a) && (a = a.join(' ')), M(b) && (b = b.join(' ')), a + ' ' + b)  : a : b : ''
                    }
                    function f(a) {
                        var b = {
                        };
                        return a && (a.to || a.from) && (b.to = a.to, b.from = a.from),
                        b
                    }
                    function g(a, b, c) {
                        var d = '';
                        return a = M(a) ? a : a && N(a) && a.length ? a.split(/\s+/)  : [
                        ],
                        L(a, function (a, e) {
                            a && a.length > 0 && (d += e > 0 ? ' ' : '', d += c ? b + a : a + b)
                        }),
                        d
                    }
                    function h(a, b) {
                        var c = a.indexOf(b);
                        b >= 0 && a.splice(c, 1)
                    }
                    function i(a) {
                        if (a instanceof K) switch (a.length) {
                            case 0:
                                return [];
                            case 1:
                                if (a[0].nodeType === T) return a;
                                break;
                            default:
                                return K(j(a))
                        }
                        return a.nodeType === T ? K(a)  : void 0
                    }
                    function j(a) {
                        if (!a[0]) return a;
                        for (var b = 0; b < a.length; b++) {
                            var c = a[b];
                            if (c.nodeType == T) return c
                        }
                    }
                    function k(a, b, c) {
                        L(b, function (b) {
                            a.addClass(b, c)
                        })
                    }
                    function l(a, b, c) {
                        L(b, function (b) {
                            a.removeClass(b, c)
                        })
                    }
                    function m(a) {
                        return function (b, c) {
                            c.addClass && (k(a, b, c.addClass), c.addClass = null),
                            c.removeClass && (l(a, b, c.removeClass), c.removeClass = null)
                        }
                    }
                    function n(a) {
                        if (a = a || {
                        }, !a.$$prepared) {
                            var b = a.domOperation || I;
                            a.domOperation = function () {
                                a.$$domOperationFired = !0,
                                b(),
                                b = I
                            },
                            a.$$prepared = !0
                        }
                        return a
                    }
                    function o(a, b) {
                        p(a, b),
                        q(a, b)
                    }
                    function p(a, b) {
                        b.from && (a.css(b.from), b.from = null)
                    }
                    function q(a, b) {
                        b.to && (a.css(b.to), b.to = null)
                    }
                    function r(a, b, c) {
                        var d = (b.addClass || '') + ' ' + (c.addClass || ''),
                        e = (b.removeClass || '') + ' ' + (c.removeClass || ''),
                        f = s(a.attr('class'), d, e);
                        return J(b, c),
                        f.addClass ? b.addClass = f.addClass : b.addClass = null,
                        f.removeClass ? b.removeClass = f.removeClass : b.removeClass = null,
                        b
                    }
                    function s(a, b, c) {
                        function d(a) {
                            N(a) && (a = a.split(' '));
                            var b = {
                            };
                            return L(a, function (a) {
                                a.length && (b[a] = !0)
                            }),
                            b
                        }
                        var e = 1,
                        f = - 1,
                        g = {
                        };
                        a = d(a),
                        b = d(b),
                        L(b, function (a, b) {
                            g[b] = e
                        }),
                        c = d(c),
                        L(c, function (a, b) {
                            g[b] = g[b] === e ? null : f
                        });
                        var h = {
                            addClass: '',
                            removeClass: ''
                        };
                        return L(g, function (b, c) {
                            var d,
                            g;
                            b === e ? (d = 'addClass', g = !a[c])  : b === f && (d = 'removeClass', g = a[c]),
                            g && (h[d].length && (h[d] += ' '), h[d] += c)
                        }),
                        h
                    }
                    function t(a) {
                        return a instanceof b.element ? a[0] : a
                    }
                    function u(a, b, c) {
                        var d = Object.create(null),
                        e = a.getComputedStyle(b) || {
                        };
                        return L(c, function (a, b) {
                            var c = e[a];
                            if (c) {
                                var f = c.charAt(0);
                                ('-' === f || '+' === f || f >= 0) && (c = v(c)),
                                0 === c && (c = null),
                                d[b] = c
                            }
                        }),
                        d
                    }
                    function v(a) {
                        var b = 0,
                        c = a.split(/\s*,\s*/);
                        return L(c, function (a) {
                            's' == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1)),
                            a = parseFloat(a) || 0,
                            b = b ? Math.max(a, b)  : a
                        }),
                        b
                    }
                    function w(a) {
                        return 0 === a || null != a
                    }
                    function x(a, b) {
                        var c = E,
                        d = a + 's';
                        return b ? c += Z : d += ' linear all',
                        [
                            c,
                            d
                        ]
                    }
                    function y(a) {
                        return [ia,
                        a + 's']
                    }
                    function z(a, b) {
                        var c = b ? ha : ja;
                        return [c,
                        a + 's']
                    }
                    function A(a, b) {
                        var c = b ? '-' + b + 's' : '';
                        return C(a, [
                                ja,
                                c
                        ]),
                        [
                            ja,
                            c
                        ]
                    }
                    function B(a, b) {
                        var c = b ? 'paused' : '',
                        d = G + ca;
                        return C(a, [
                                d,
                                c
                        ]),
                        [
                            d,
                            c
                        ]
                    }
                    function C(a, b) {
                        var c = b[0],
                        d = b[1];
                        a.style[c] = d
                    }
                    function D() {
                        var a = Object.create(null);
                        return {
                            flush: function () {
                                a = Object.create(null)
                            },
                            count: function (b) {
                                var c = a[b];
                                return c ? c.total : 0
                            },
                            get: function (b) {
                                var c = a[b];
                                return c && c.value
                            },
                            put: function (b, c) {
                                a[b] ? a[b].total++ : a[b] = {
                                    total: 1,
                                    value: c
                                }
                            }
                        }
                    }
                    var E,
                    F,
                    G,
                    H,
                    I = b.noop,
                    J = b.extend,
                    K = b.element,
                    L = b.forEach,
                    M = b.isArray,
                    N = b.isString,
                    O = b.isObject,
                    P = b.isUndefined,
                    Q = b.isDefined,
                    R = b.isFunction,
                    S = b.isElement,
                    T = 1,
                    U = 'ng-animate',
                    V = '$$ngAnimateChildren',
                    W = [
                        '$$rAF',
                        function (a) {
                            function b(a) {
                                f.push([].concat(a)),
                                c()
                            }
                            function c() {
                                if (f.length) {
                                    for (var b = [
                                    ], g = 0; g < f.length; g++) {
                                        var h = f[g];
                                        d(h),
                                    h.length && b.push(h)
                                    }
                                    f = b,
                            e || a(function () {
                                e || c()
                            })
                                }
                            }
                            function d(a) {
                                var b = a.shift();
                                b()
                            }
                            var e,
                            f = [
                            ];
                            return b.waitUntilQuiet = function (b) {
                                e && e(),
                                e = a(function () {
                                    e = null,
                                    b(),
                                    c()
                                })
                            },
                            b
                        }
                    ],
                    X = [
                        function () {
                            return function (a, c, d) {
                                var e = d.ngAnimateChildren;
                                b.isString(e) && 0 === e.length ? c.data(V, !0)  : d.$observe('ngAnimateChildren', function (a) {
                                    a = 'on' === a || 'true' === a,
                                    c.data(V, a)
                                })
                            }
                        }
                    ],
                    Y = '';
                    a.ontransitionend === c && a.onwebkittransitionend !== c ? (Y = '-webkit-', E = 'WebkitTransition', F = 'webkitTransitionEnd transitionend')  : (E = 'transition', F = 'transitionend'),
                    a.onanimationend === c && a.onwebkitanimationend !== c ? (Y = '-webkit-', G = 'WebkitAnimation', H = 'webkitAnimationEnd animationend')  : (G = 'animation', H = 'animationend');
                    var Z = 'Duration',
                    $ = 'Property',
                    _ = 'Delay',
                    aa = 'TimingFunction',
                    ba = 'IterationCount',
                    ca = 'PlayState',
                    da = 3,
                    ea = 1.5,
                    fa = 1000,
                    ga = 9999,
                    ha = G + _,
                    ia = G + Z,
                    ja = E + _,
                    ka = E + Z,
                    la = {
                        transitionDuration: ka,
                        transitionDelay: ja,
                        transitionProperty: E + $,
                        animationDuration: ia,
                        animationDelay: ha,
                        animationIterationCount: G + ba
                    },
                    ma = {
                        transitionDuration: ka,
                        transitionDelay: ja,
                        animationDuration: ia,
                        animationDelay: ha
                    },
                    na = [
                        '$animateProvider',
                        function (a) {
                            var b = D(),
                            c = D();
                            this.$get = [
                                '$window',
                                '$$jqLite',
                                '$$AnimateRunner',
                                '$timeout',
                                '$document',
                                '$sniffer',
                                '$$rAFScheduler',
                                function (a, d, e, i, j, k, l) {
                                    function r(a, b) {
                                        var c = '$$ngAnimateParentKey',
                                        d = a.parentNode,
                                        e = d[c] || (d[c] = ++N);
                                        return e + '-' + a.getAttribute('class') + '-' + b
                                    }
                                    function s(c, d, e, f) {
                                        var g = b.get(e);
                                        return g || (g = u(a, c, f), 'infinite' === g.animationIterationCount && (g.animationIterationCount = 1)),
                                    b.put(e, g),
                                    g
                                    }
                                    function v(e, f, h, i) {
                                        var j;
                                        if (b.count(h) > 0 && (j = c.get(h), !j)) {
                                            var k = g(f, '-stagger');
                                            d.addClass(e, k),
                                            j = u(a, e, i),
                                            j.animationDuration = Math.max(j.animationDuration, 0),
                                            j.transitionDuration = Math.max(j.transitionDuration, 0),
                                            d.removeClass(e, k),
                                            c.put(h, j)
                                        }
                                        return j || {
                                        }
                                    }
                                    function D(a) {
                                        P.push(a),
                                        l.waitUntilQuiet(function () {
                                            b.flush(),
                                            c.flush();
                                            for (var a = O.offsetWidth + 1, d = 0; d < P.length; d++) P[d](a);
                                            P.length = 0
                                        })
                                    }
                                    function I(a, b, c) {
                                        var d = s(a, b, c, la),
                                        e = d.animationDelay,
                                        f = d.transitionDelay;
                                        return d.maxDelay = e && f ? Math.max(e, f)  : e || f,
                                        d.maxDuration = Math.max(d.animationDuration * d.animationIterationCount, d.transitionDuration),
                                        d
                                    }
                                    function J(a, c) {
                                        function j() {
                                            m()
                                        }
                                        function l() {
                                            m(!0)
                                        }
                                        function m(b) {
                                            O || Q && P || (O = !0, P = !1, d.removeClass(a, ia), d.removeClass(a, ka), B(N, !1), A(N, !1), L(X, function (a) {
                                                N.style[a[0]] = ''
                                            }), K(a, c), o(a, c), c.onDone && c.onDone(), R && R.complete(!b))
                                        }
                                        function s(a) {
                                            ya.blockTransition && A(N, a),
                                            ya.blockKeyframeAnimation && B(N, !!a)
                                        }
                                        function u() {
                                            return R = new e({
                                                end: j,
                                                cancel: l
                                            }),
                                            m(),
                                            {
                                                $$willAnimate: !1,
                                                start: function () {
                                                    return R
                                                },
                                                end: j
                                            }
                                        }
                                        function J() {
                                            function b() {
                                                if (!O) {
                                                    if (s(!1), L(X, function (a) {
                                                        var b = a[0],
                                                            c = a[1];
                                                        N.style[b] = c
                                                    }), K(a, c), d.addClass(a, ka), ya.recalculateTimingStyles) {
                                                        if (ja = N.className + ' ' + ia, na = r(N, ja), wa = I(N, ja, na), xa = wa.maxDelay, T = Math.max(xa, 0), V = wa.maxDuration, 0 === V) return void m();
                                                        ya.hasTransitions = wa.transitionDuration > 0,
                                                            ya.hasAnimations = wa.animationDuration > 0
                                                    }
                                                    if (ya.applyTransitionDelay || ya.applyAnimationDelay) {
                                                        xa = 'boolean' != typeof c.delay && w(c.delay) ? parseFloat(c.delay)  : xa,
                                                            T = Math.max(xa, 0);
                                                        var b;
                                                        ya.applyTransitionDelay && (wa.transitionDelay = xa, b = z(xa), X.push(b), N.style[b[0]] = b[1]),
                                                        ya.applyAnimationDelay && (wa.animationDelay = xa, b = z(xa, !0), X.push(b), N.style[b[0]] = b[1])
                                                    }
                                                    if (U = T * fa, W = V * fa, c.easing) {
                                                        var h,
                                                            k = c.easing;
                                                        ya.hasTransitions && (h = E + aa, X.push([h,
                                                                    k]), N.style[h] = k),
                                                        ya.hasAnimations && (h = G + aa, X.push([h,
                                                                    k]), N.style[h] = k)
                                                    }
                                                    wa.transitionDuration && j.push(F),
                                                    wa.animationDuration && j.push(H),
                                                    g = Date.now(),
                                                    a.on(j.join(' '), f),
                                                    i(e, U + ea * W),
                                                    q(a, c)
                                                }
                                            }
                                            function e() {
                                                m()
                                            }
                                            function f(a) {
                                                a.stopPropagation();
                                                var b = a.originalEvent || a,
                                                c = b.$manualTimeStamp || b.timeStamp || Date.now(),
                                                d = parseFloat(b.elapsedTime.toFixed(da));
                                                Math.max(c - g, 0) >= U && d >= V && (Q = !0, m())
                                            }
                                            if (!O) {
                                                var g,
                                                    j = [
                                                    ],
                                                    k = function (a) {
                                                        if (Q) P && a && (P = !1, m());
                                                        else if (P = !a, wa.animationDuration) {
                                                            var b = B(N, P);
                                                            P ? X.push(b)  : h(X, b)
                                                        }
                                                    },
                                                    l = ua > 0 && (wa.transitionDuration && 0 === oa.transitionDuration || wa.animationDuration && 0 === oa.animationDuration) && Math.max(oa.animationDelay, oa.transitionDelay);
                                                    l ? i(b, Math.floor(l * ua * fa), !1)  : b(),
                                                    S.resume = function () {
                                                        k(!0)
                                                    },
                                                    S.pause = function () {
                                                        k(!1)
                                                    }
                                            }
                                        }
                                        var N = t(a);
                                        c = n(c);
                                        var O,
                                        P,
                                        Q,
                                        R,
                                        S,
                                        T,
                                        U,
                                        V,
                                        W,
                                        X = [
                                        ],
                                        Y = a.attr('class'),
                                        Z = f(c);
                                        if (0 === c.duration || !k.animations && !k.transitions) return u();
                                        var _ = c.event && M(c.event) ? c.event.join(' ')  : c.event,
                                            ba = _ && c.structural,
                                            ca = '',
                                            ha = '';
                                        ba ? ca = g(_, 'ng-', !0)  : _ && (ca = _),
                                        c.addClass && (ha += g(c.addClass, '-add')),
                                        c.removeClass && (ha.length && (ha += ' '), ha += g(c.removeClass, '-remove')),
                                        c.applyClassesEarly && ha.length && (K(a, c), ha = '');
                                        var ia = [
                                            ca,
                                            ha
                                        ].join(' ').trim(),
                                        ja = Y + ' ' + ia,
                                        ka = g(ia, '-active'),
                                        la = Z.to && Object.keys(Z.to).length > 0;
                                        if (!la && !ia) return u();
                                        var na,
                                            oa;
                                        if (c.stagger > 0) {
                                            var pa = parseFloat(c.stagger);
                                            oa = {
                                                transitionDelay: pa,
                                                animationDelay: pa,
                                                transitionDuration: 0,
                                                animationDuration: 0
                                            }
                                        } else na = r(N, ja),
                                        oa = v(N, ia, na, ma);
                                        d.addClass(a, ia);
                                        var qa;
                                        if (c.transitionStyle) {
                                            var ra = [
                                                E,
                                                c.transitionStyle
                                            ];
                                            C(N, ra),
                                            X.push(ra)
                                        }
                                        if (c.duration >= 0) {
                                            qa = N.style[E].length > 0;
                                            var sa = x(c.duration, qa);
                                            C(N, sa),
                                            X.push(sa)
                                        }
                                        if (c.keyframeStyle) {
                                            var ta = [
                                                G,
                                                c.keyframeStyle
                                            ];
                                            C(N, ta),
                                            X.push(ta)
                                        }
                                        var ua = oa ? c.staggerIndex >= 0 ? c.staggerIndex : b.count(na)  : 0,
                                        va = 0 === ua;
                                        va && A(N, ga);
                                        var wa = I(N, ja, na),
                                        xa = wa.maxDelay;
                                        T = Math.max(xa, 0),
                                        V = wa.maxDuration;
                                        var ya = {
                                        };
                                        return ya.hasTransitions = wa.transitionDuration > 0,
                                        ya.hasAnimations = wa.animationDuration > 0,
                                        ya.hasTransitionAll = ya.hasTransitions && 'all' == wa.transitionProperty,
                                        ya.applyTransitionDuration = la && (ya.hasTransitions && !ya.hasTransitionAll || ya.hasAnimations && !ya.hasTransitions),
                                        ya.applyAnimationDuration = c.duration && ya.hasAnimations,
                                        ya.applyTransitionDelay = w(c.delay) && (ya.applyTransitionDuration || ya.hasTransitions),
                                        ya.applyAnimationDelay = w(c.delay) && ya.hasAnimations,
                                        ya.recalculateTimingStyles = ha.length > 0,
                                        (ya.applyTransitionDuration || ya.applyAnimationDuration) && (V = c.duration ? parseFloat(c.duration)  : V, ya.applyTransitionDuration && (ya.hasTransitions = !0, wa.transitionDuration = V, qa = N.style[E + $].length > 0, X.push(x(V, qa))), ya.applyAnimationDuration && (ya.hasAnimations = !0, wa.animationDuration = V, X.push(y(V)))),
                                        0 !== V || ya.recalculateTimingStyles ? (null == c.duration && wa.transitionDuration > 0 && (ya.recalculateTimingStyles = ya.recalculateTimingStyles || va), U = T * fa, W = V * fa, c.skipBlocking || (ya.blockTransition = wa.transitionDuration > 0, ya.blockKeyframeAnimation = wa.animationDuration > 0 && oa.animationDelay > 0 && 0 === oa.animationDuration), p(a, c), ya.blockTransition || A(N, !1), s(V), {
                                            $$willAnimate: !0,
                                            end: j,
                                            start: function () {
                                                return O ? void 0 : (S = {
                                                    end: j,
                                                    cancel: l,
                                                    resume: null,
                                                    pause: null
                                                }, R = new e(S), D(J), R)
                                            }
                                        })  : u()
                                    }
                                    var K = m(d),
                                    N = 0,
                                    O = t(j).body,
                                    P = [
                                    ];
                                    return J
                                }
                            ]
                        }
                    ],
                    oa = [
                        '$$animationProvider',
                        function (a) {
                            a.drivers.push('$$animateCssDriver');
                            var b = 'ng-animate-shim',
                        c = 'ng-anchor',
                        d = 'ng-anchor-out',
                        e = 'ng-anchor-in';
                            this.$get = [
                                '$animateCss',
                                '$rootScope',
                                '$$AnimateRunner',
                                '$rootElement',
                                '$document',
                                '$sniffer',
                                function (a, f, g, h, i, j) {
                                    function k(a) {
                                        return a.replace(/\bng-\S+\b/g, '')
                                    }
                                    function l(a, b) {
                                        return N(a) && (a = a.split(' ')),
                                        N(b) && (b = b.split(' ')),
                                        a.filter(function (a) {
                                            return - 1 === b.indexOf(a)
                                        }).join(' ')
                                    }
                                    function m(f, h, i) {
                                        function j(a) {
                                            var b = {
                                            },
                                            c = t(a).getBoundingClientRect();
                                            return L(['width',
                                                    'height',
                                                    'top',
                                                    'left'], function (a) {
                                                        var d = c[a];
                                                        switch (a) {
                                                            case 'top':
                                                                d += p.scrollTop;
                                                                break;
                                                            case 'left':
                                                                d += p.scrollLeft
                                                        }
                                                        b[a] = Math.floor(d) + 'px'
                                                    }), b
                                        }
                                        function m() {
                                            var b = a(s, {
                                                addClass: d,
                                                delay: !0,
                                                from: j(h)
                                            });
                                            return b.$$willAnimate ? b : null
                                        }
                                        function n(a) {
                                            return a.attr('class') || ''
                                        }
                                        function o() {
                                            var b = k(n(i)),
                                            c = l(b, u),
                                            f = l(u, b),
                                            g = a(s, {
                                                to: j(i),
                                                addClass: e + ' ' + c,
                                                removeClass: d + ' ' + f,
                                                delay: !0
                                            });
                                            return g.$$willAnimate ? g : null
                                        }
                                        function q() {
                                            s.remove(),
                                            h.removeClass(b),
                                            i.removeClass(b)
                                        }
                                        var s = K(t(h).cloneNode(!0)),
                                        u = k(n(s));
                                        h.addClass(b),
                                        i.addClass(b),
                                        s.addClass(c),
                                        r.append(s);
                                        var v,
                                        w = m();
                                        if (!w && (v = o(), !v)) return q();
                                        var x = w || v;
                                        return {
                                            start: function () {
                                                function a() {
                                                    c && c.end()
                                                }
                                                var b,
                                                c = x.start();
                                                return c.done(function () {
                                                    return c = null,
                                                    !v && (v = o()) ? (c = v.start(), c.done(function () {
                                                        c = null,
                                                        q(),
                                                        b.complete()
                                                    }), c)  : (q(), void b.complete())
                                                }),
                                                b = new g({
                                                    end: a,
                                                    cancel: a
                                                })
                                            }
                                        }
                                    }
                                    function n(a, b, c, d) {
                                        var e = o(a),
                                        f = o(b),
                                        h = [
                                        ];
                                        return L(d, function (a) {
                                            var b = a.out,
                                            d = a['in'],
                                            e = m(c, b, d);
                                            e && h.push(e)
                                        }),
                                        e || f || 0 !== h.length ? {
                                            start: function () {
                                                function a() {
                                                    L(b, function (a) {
                                                        a.end()
                                                    })
                                                }
                                                var b = [
                                                ];
                                                e && b.push(e.start()),
                                                f && b.push(f.start()),
                                                L(h, function (a) {
                                                    b.push(a.start())
                                                });
                                                var c = new g({
                                                    end: a,
                                                    cancel: a
                                                });
                                                return g.all(b, function (a) {
                                                    c.complete(a)
                                                }),
                                                c
                                            }
                                        }
                                        : void 0
                                    }
                                    function o(b) {
                                        var c = b.element,
                                        d = b.options || {
                                        };
                                        b.structural ? (d.structural = d.applyClassesEarly = !0, d.event = b.event, 'leave' === d.event && (d.onDone = d.domOperation))  : d.event = null;
                                        var e = a(c, d);
                                        return e.$$willAnimate ? e : null
                                    }
                                    if (!j.animations && !j.transitions) return I;
                                    var p = t(i).body,
                                        q = t(h),
                                        r = K(p.parentNode === q ? p : q);
                                    return function (a) {
                                        return a.from && a.to ? n(a.from, a.to, a.classes, a.anchors)  : o(a)
                                    }
                                }
                            ]
                        }
                    ],
                    pa = [
                        '$animateProvider',
                        function (a) {
                            this.$get = [
                                '$injector',
                                '$$AnimateRunner',
                                '$$rAFMutex',
                                '$$jqLite',
                                function (b, c, d, e) {
                                    function f(c) {
                                        c = M(c) ? c : c.split(' ');
                                        for (var d = [
                                        ], e = {
                                        }, f = 0; f < c.length; f++) {
                                            var g = c[f],
                                            h = a.$$registeredAnimations[g];
                                            h && !e[g] && (d.push(b.get(h)), e[g] = !0)
                                        }
                                        return d
                                    }
                                    var g = m(e);
                                    return function (a, b, d, e) {
                                        function h() {
                                            e.domOperation(),
                                            g(a, e)
                                        }
                                        function i(a, b, d, e, f) {
                                            var g;
                                            switch (d) {
                                                case 'animate':
                                                    g = [
                                                        b,
                                                        e.from,
                                                        e.to,
                                                        f
                                                    ];
                                                    break;
                                                case 'setClass':
                                                    g = [
                                                        b,
                                                        p,
                                                        q,
                                                        f
                                                    ];
                                                    break;
                                                case 'addClass':
                                                    g = [
                                                        b,
                                                        p,
                                                        f
                                                    ];
                                                    break;
                                                case 'removeClass':
                                                    g = [
                                                        b,
                                                        q,
                                                        f
                                                    ];
                                                    break;
                                                default:
                                                    g = [
                                                        b,
                                                        f
                                                    ]
                                            }
                                            g.push(e);
                                            var h = a.apply(a, g);
                                            if (h) if (R(h.start) && (h = h.start()), h instanceof c) h.done(f);
                                            else if (R(h)) return h;
                                            return I
                                        }
                                        function j(a, b, d, e, f) {
                                            var g = [
                                            ];
                                            return L(e, function (e) {
                                                var h = e[f];
                                                h && g.push(function () {
                                                    var e,
                                                    f,
                                                    g = !1,
                                                    j = function (a) {
                                                        g || (g = !0, (f || I) (a), e.complete(!a))
                                                    };
                                                    return e = new c({
                                                        end: function () {
                                                            j()
                                                        },
                                                        cancel: function () {
                                                            j(!0)
                                                        }
                                                    }),
                                                    f = i(h, a, b, d, function (a) {
                                                        var b = a === !1;
                                                        j(b)
                                                    }),
                                                    e
                                                })
                                            }),
                                            g
                                        }
                                        function k(a, b, d, e, f) {
                                            var g = j(a, b, d, e, f);
                                            if (0 === g.length) {
                                                var h,
                                                    i;
                                                'beforeSetClass' === f ? (h = j(a, 'removeClass', d, e, 'beforeRemoveClass'), i = j(a, 'addClass', d, e, 'beforeAddClass'))  : 'setClass' === f && (h = j(a, 'removeClass', d, e, 'removeClass'), i = j(a, 'addClass', d, e, 'addClass')),
                                                h && (g = g.concat(h)),
                                                i && (g = g.concat(i))
                                            }
                                            if (0 !== g.length) return function (a) {
                                                var b = [
                                                ];
                                                return g.length && L(g, function (a) {
                                                    b.push(a())
                                                }),
                                                b.length ? c.all(b, a)  : a(),
                                                function (a) {
                                                    L(b, function (b) {
                                                        a ? b.cancel()  : b.end()
                                                    })
                                                }
                                            }
                                        }
                                        3 === arguments.length && O(d) && (e = d, d = null),
                                        e = n(e),
                                        d || (d = a.attr('class') || '', e.addClass && (d += ' ' + e.addClass), e.removeClass && (d += ' ' + e.removeClass));
                                        var l,
                                        m,
                                        p = e.addClass,
                                        q = e.removeClass,
                                        r = f(d);
                                        if (r.length) {
                                            var s,
                                                t;
                                            'leave' == b ? (t = 'leave', s = 'afterLeave')  : (t = 'before' + b.charAt(0).toUpperCase() + b.substr(1), s = b),
                                            'enter' !== b && 'move' !== b && (l = k(a, b, e, r, t)),
                                            m = k(a, b, e, r, s)
                                        }
                                        return l || m ? {
                                            start: function () {
                                                function b(b) {
                                                    i = !0,
                                                    h(),
                                                    o(a, e),
                                                    j.complete(b)
                                                }
                                                function d(a) {
                                                    i || ((f || I) (a), b(a))
                                                }
                                                var f,
                                                g = [
                                                ];
                                                l && g.push(function (a) {
                                                    f = l(a)
                                                }),
                                                g.length ? g.push(function (a) {
                                                    h(),
                                                    a(!0)
                                                })  : h(),
                                                m && g.push(function (a) {
                                                    f = m(a)
                                                });
                                                var i = !1,
                                                j = new c({
                                                    end: function () {
                                                        d()
                                                    },
                                                    cancel: function () {
                                                        d(!0)
                                                    }
                                                });
                                                return c.chain(g, b),
                                                j
                                            }
                                        }
                                        : void 0
                                    }
                                }
                            ]
                        }
                    ],
                    qa = [
                        '$$animationProvider',
                        function (a) {
                            a.drivers.push('$$animateJsDriver'),
                            this.$get = [
                                '$$animateJs',
                                '$$AnimateRunner',
                                function (a, b) {
                                    function c(b) {
                                        var c = b.element,
                                        d = b.event,
                                        e = b.options,
                                        f = b.classes;
                                        return a(c, d, f, e)
                                    }
                                    return function (a) {
                                        if (a.from && a.to) {
                                            var d = c(a.from),
                                                e = c(a.to);
                                            if (!d && !e) return;
                                            return {
                                                start: function () {
                                                    function a() {
                                                        return function () {
                                                            L(f, function (a) {
                                                                a.end()
                                                            })
                                                        }
                                                    }
                                                    function c(a) {
                                                        g.complete(a)
                                                    }
                                                    var f = [
                                                    ];
                                                    d && f.push(d.start()),
                                                    e && f.push(e.start()),
                                                    b.all(f, c);
                                                    var g = new b({
                                                        end: a(),
                                                        cancel: a()
                                                    });
                                                    return g
                                                }
                                            }
                                        }
                                        return c(a)
                                    }
                                }
                            ]
                        }
                    ],
                    ra = 'data-ng-animate',
                    sa = '$ngAnimatePin',
                    ta = [
                        '$animateProvider',
                        function (a) {
                            function b(a, b, c, d) {
                                return g[a].some(function (a) {
                                    return a(b, c, d)
                                })
                            }
                            function c(a, b) {
                                a = a || {
                                };
                                var c = (a.addClass || '').length > 0,
                            d = (a.removeClass || '').length > 0;
                                return b ? c && d : c || d
                            }
                            var e = 1,
                            f = 2,
                            g = this.rules = {
                                skip: [
                                ],
                                cancel: [
                                ],
                                join: [
                                ]
                            };
                            g.join.push(function (a, b, d) {
                                return !b.structural && c(b.options)
                            }),
                            g.skip.push(function (a, b, d) {
                                return !b.structural && !c(b.options)
                            }),
                            g.skip.push(function (a, b, c) {
                                return 'leave' == c.event && b.structural
                            }),
                            g.skip.push(function (a, b, c) {
                                return c.structural && !b.structural
                            }),
                            g.cancel.push(function (a, b, c) {
                                return c.structural && b.structural
                            }),
                            g.cancel.push(function (a, b, c) {
                                return c.state === f && b.structural
                            }),
                            g.cancel.push(function (a, b, c) {
                                var d = b.options,
                                e = c.options;
                                return d.addClass && d.addClass === e.removeClass || d.removeClass && d.removeClass === e.addClass
                            }),
                            this.$get = [
                                '$$rAF',
                                '$rootScope',
                                '$rootElement',
                                '$document',
                                '$$HashMap',
                                '$$animation',
                                '$$AnimateRunner',
                                '$templateRequest',
                                '$$jqLite',
                                function (g, h, k, l, p, q, s, u, v) {
                                    function w(a, b) {
                                        return r(a, b, {
                                        })
                                    }
                                    function x(a, b) {
                                        var c = t(a),
                                        d = [
                                        ],
                                        e = U[b];
                                        return e && L(e, function (a) {
                                            a.node.contains(c) && d.push(a.callback)
                                        }),
                                        d
                                    }
                                    function y(a, b, c, d) {
                                        g(function () {
                                            L(x(b, a), function (a) {
                                                a(b, c, d)
                                            })
                                        })
                                    }
                                    function z(a, d, g) {
                                        function j(b, c, d, e) {
                                            y(c, a, d, e),
                                            b.progress(c, d, e)
                                        }
                                        function k(b) {
                                            Y(a, g),
                                            o(a, g),
                                            g.domOperation(),
                                            p.complete(!b)
                                        }
                                        var l,
                                        m;
                                        a = i(a),
                                        a && (l = t(a), m = a.parent()),
                                        g = n(g);
                                        var p = new s;
                                        if (!l) return k(),
                                        p;
                                        M(g.addClass) && (g.addClass = g.addClass.join(' ')),
                                        M(g.removeClass) && (g.removeClass = g.removeClass.join(' ')),
                                        g.from && !O(g.from) && (g.from = null),
                                        g.to && !O(g.to) && (g.to = null);
                                        var u = [
                                            l.className,
                                            g.addClass,
                                            g.removeClass
                                        ].join(' ');
                                        if (!X(u)) return k(),
                                        p;
                                        var v = [
                                            'enter',
                                            'move',
                                            'leave'
                                        ].indexOf(d) >= 0,
                                        x = !I || H.get(l),
                                        z = !x && G.get(l) || {
                                        },
                                        C = !!z.state;
                                        if (x || C && z.state == e || (x = !E(a, m, d)), x) return k(),
                                        p;
                                        v && A(a);
                                        var J = {
                                            structural: v,
                                            element: a,
                                            event: d,
                                            close: k,
                                            options: g,
                                            runner: p
                                        };
                                        if (C) {
                                            var K = b('skip', a, J, z);
                                            if (K) return z.state === f ? (k(), p)  : (r(a, z.options, g), z.runner);
                                            var L = b('cancel', a, J, z);
                                            if (L) z.state === f ? z.runner.end()  : z.structural ? z.close()  : r(a, J.options, z.options);
                                            else {
                                                var N = b('join', a, J, z);
                                                if (N) {
                                                    if (z.state !== f) return d = J.event = z.event,
                                                        g = r(a, z.options, J.options),
                                                            p;
                                                    w(a, g)
                                                }
                                            }
                                        } else w(a, g);
                                        var P = J.structural;
                                        if (P || (P = 'animate' === J.event && Object.keys(J.options.to || {
                                        }).length > 0 || c(J.options)), !P) return k(),
                                        B(a),
                                        p;
                                        v && D(m);
                                        var Q = (z.counter || 0) + 1;
                                        return J.counter = Q,
                                        F(a, e, J),
                                        h.$$postDigest(function () {
                                            var b = G.get(l),
                                            e = !b;
                                            b = b || {
                                            };
                                            var h = a.parent() || [],
                                            i = h.length > 0 && ('animate' === b.event || b.structural || c(b.options));
                                            if (e || b.counter !== Q || !i) return e && (Y(a, g), o(a, g)),
                                            (e || v && b.event !== d) && (g.domOperation(), p.end()),
                                                void (i || B(a));
                                            d = !b.structural && c(b.options, !0) ? 'setClass' : b.event,
                                            b.structural && D(h),
                                            F(a, f);
                                            var m = q(a, d, b.options);
                                            m.done(function (b) {
                                                k(!b);
                                                var c = G.get(l);
                                                c && c.counter === Q && B(t(a)),
                                                j(p, d, 'close', {
                                                })
                                            }),
                                            p.setHost(m),
                                            j(p, d, 'start', {
                                            })
                                        }),
                                        p
                                    }
                                    function A(a) {
                                        var b = t(a),
                                        c = b.querySelectorAll('[' + ra + ']');
                                        L(c, function (a) {
                                            var b = parseInt(a.getAttribute(ra)),
                                            c = G.get(a);
                                            switch (b) {
                                                case f:
                                                    c.runner.end();
                                                case e:
                                                    c && G.remove(a)
                                            }
                                        })
                                    }
                                    function B(a) {
                                        var b = t(a);
                                        b.removeAttribute(ra),
                                        G.remove(b)
                                    }
                                    function C(a, b) {
                                        return t(a) === t(b)
                                    }
                                    function D(a) {
                                        function b(a, b) {
                                            !b.structural && c(b.options) && (b.state === f && b.runner.end(), B(a))
                                        }
                                        for (var d = t(a); ; ) {
                                            if (!d || d.nodeType !== T) break;
                                            var e = G.get(d);
                                            e && b(d, e),
                                            d = d.parentNode
                                        }
                                    }
                                    function E(a, b, c) {
                                        var d,
                                        e = !1,
                                        f = !1,
                                        g = !1,
                                        h = a.data(sa);
                                        for (h && (b = h); b && b.length; ) {
                                            f || (f = C(b, k));
                                            var i = b[0];
                                            if (i.nodeType !== T) break;
                                            var j = G.get(i) || {
                                            };
                                            if (g || (g = j.structural || H.get(i)), P(d) || d === !0) {
                                                var l = b.data(V);
                                                Q(l) && (d = l)
                                            }
                                            if (g && d === !1) break;
                                            f || (f = C(b, k), f || (h = b.data(sa), h && (b = h))),
                                                e || (e = C(b, R)),
                                                b = b.parent()
                                        }
                                        var m = !g || d;
                                        return m && f && e
                                    }
                                    function F(a, b, c) {
                                        c = c || {
                                        },
                                        c.state = b;
                                        var d = t(a);
                                        d.setAttribute(ra, b);
                                        var e = G.get(d),
                                        f = e ? J(e, c)  : c;
                                        G.put(d, f)
                                    }
                                    var G = new p,
                                    H = new p,
                                    I = null,
                                    N = h.$watch(function () {
                                        return 0 === u.totalPendingRequests
                                    }, function (a) {
                                        a && (N(), h.$$postDigest(function () {
                                            h.$$postDigest(function () {
                                                null === I && (I = !0)
                                            })
                                        }))
                                    }),
                                    R = K(l[0].body),
                                    U = {
                                    },
                                    W = a.classNameFilter(),
                                    X = W ? function (a) {
                                        return W.test(a)
                                    }
                                    : function () {
                                        return !0
                                    },
                                    Y = m(v);
                                    return {
                                        on: function (a, b, c) {
                                            var d = j(b);
                                            U[a] = U[a] || [],
                                            U[a].push({
                                                node: d,
                                                callback: c
                                            })
                                        },
                                        off: function (a, b, c) {
                                            function d(a, b, c) {
                                                var d = j(b);
                                                return a.filter(function (a) {
                                                    var b = a.node === d && (!c || a.callback === c);
                                                    return !b
                                                })
                                            }
                                            var e = U[a];
                                            e && (U[a] = 1 === arguments.length ? null : d(e, b, c))
                                        },
                                        pin: function (a, b) {
                                            d(S(a), 'element', 'not an element'),
                                            d(S(b), 'parentElement', 'not an element'),
                                            a.data(sa, b)
                                        },
                                        push: function (a, b, c, d) {
                                            return c = c || {
                                            },
                                            c.domOperation = d,
                                            z(a, b, c)
                                        },
                                        enabled: function (a, b) {
                                            var c = arguments.length;
                                            if (0 === c) b = !!I;
                                            else {
                                                var d = S(a);
                                                if (d) {
                                                    var e = t(a),
                                                        f = H.get(e);
                                                    1 === c ? b = !f : (b = !!b, b ? f && H.remove(e)  : H.put(e, !0))
                                                } else b = I = !!a
                                            }
                                            return b
                                        }
                                    }
                                }
                            ]
                        }
                    ],
                    ua = [
                        '$$rAF',
                        function (a) {
                            return function () {
                                var b = !1;
                                return a(function () {
                                    b = !0
                                }),
                        function (c) {
                            b ? c()  : a(c)
                        }
                            }
                        }
                    ],
                    va = [
                        '$q',
                        '$$rAFMutex',
                        function (a, b) {
                            function c(a) {
                                this.setHost(a),
                                this._doneCallbacks = [
                                ],
                                this._runInAnimationFrame = b(),
                                this._state = 0
                            }
                            var d = 0,
                        e = 1,
                        f = 2;
                            return c.chain = function (a, b) {
                                function c() {
                                    return d === a.length ? void b(!0)  : void a[d](function (a) {
                                        return a === !1 ? void b(!1)  : (d++, void c())
                                    })
                                }
                                var d = 0;
                                c()
                            },
                            c.all = function (a, b) {
                                function c(c) {
                                    e = e && c,
                                    ++d === a.length && b(e)
                                }
                                var d = 0,
                                e = !0;
                                L(a, function (a) {
                                    a.done(c)
                                })
                            },
                            c.prototype = {
                                setHost: function (a) {
                                    this.host = a || {
                                    }
                                },
                                done: function (a) {
                                    this._state === f ? a()  : this._doneCallbacks.push(a)
                                },
                                progress: I,
                                getPromise: function () {
                                    if (!this.promise) {
                                        var b = this;
                                        this.promise = a(function (a, c) {
                                            b.done(function (b) {
                                                b === !1 ? c()  : a()
                                            })
                                        })
                                    }
                                    return this.promise
                                },
                                then: function (a, b) {
                                    return this.getPromise().then(a, b)
                                },
                                'catch': function (a) {
                                    return this.getPromise() ['catch'](a)
                                },
                                'finally': function (a) {
                                    return this.getPromise() ['finally'](a)
                                },
                                pause: function () {
                                    this.host.pause && this.host.pause()
                                },
                                resume: function () {
                                    this.host.resume && this.host.resume()
                                },
                                end: function () {
                                    this.host.end && this.host.end(),
                                    this._resolve(!0)
                                },
                                cancel: function () {
                                    this.host.cancel && this.host.cancel(),
                                    this._resolve(!1)
                                },
                                complete: function (a) {
                                    var b = this;
                                    b._state === d && (b._state = e, b._runInAnimationFrame(function () {
                                        b._resolve(a)
                                    }))
                                },
                                _resolve: function (a) {
                                    this._state !== f && (L(this._doneCallbacks, function (b) {
                                        b(a)
                                    }), this._doneCallbacks.length = 0, this._state = f)
                                }
                            },
                            c
                        }
                    ],
                    wa = [
                        '$animateProvider',
                        function (a) {
                            function b(a, b) {
                                a.data(h, b)
                            }
                            function c(a) {
                                a.removeData(h)
                            }
                            function d(a) {
                                return a.data(h)
                            }
                            var f = 'ng-animate-ref',
                            g = this.drivers = [
                            ],
                            h = '$$animationRunner';
                            this.$get = [
                                '$$jqLite',
                                '$rootScope',
                                '$injector',
                                '$$AnimateRunner',
                                '$$rAFScheduler',
                                function (a, h, i, j, k) {
                                    var l = [
                                    ],
                                    p = m(a),
                                    q = 0,
                                    r = 0,
                                    s = [
                                    ];
                                    return function (m, u, v) {
                                        function w(a) {
                                            var b = '[' + f + ']',
                                            c = a.hasAttribute(f) ? [
                                                a
                                            ] : a.querySelectorAll(b),
                                            d = [
                                            ];
                                            return L(c, function (a) {
                                                var b = a.getAttribute(f);
                                                b && b.length && d.push(a)
                                            }),
                                            d
                                        }
                                        function x(a) {
                                            var b = [
                                            ],
                                            c = {
                                            };
                                            L(a, function (a, d) {
                                                var e = a.element,
                                                g = t(e),
                                                h = a.event,
                                                i = [
                                                    'enter',
                                                    'move'
                                                ].indexOf(h) >= 0,
                                                j = a.structural ? w(g)  : [
                                                ];
                                                if (j.length) {
                                                    var k = i ? 'to' : 'from';
                                                    L(j, function (a) {
                                                        var b = a.getAttribute(f);
                                                        c[b] = c[b] || {
                                                        },
                                                        c[b][k] = {
                                                            animationID: d,
                                                            element: K(a)
                                                        }
                                                    })
                                                } else b.push(a)
                                            });
                                            var d = {
                                            },
                                            e = {
                                            };
                                            return L(c, function (c, f) {
                                                var g = c.from,
                                                h = c.to;
                                                if (!g || !h) {
                                                    var i = g ? g.animationID : h.animationID,
                                                        j = i.toString();
                                                    return void (d[j] || (d[j] = !0, b.push(a[i])))
                                                }
                                                var k = a[g.animationID],
                                                l = a[h.animationID],
                                                m = g.animationID.toString();
                                                if (!e[m]) {
                                                    var n = e[m] = {
                                                        structural: !0,
                                                        beforeStart: function () {
                                                            k.beforeStart(),
                                                            l.beforeStart()
                                                        },
                                                        close: function () {
                                                            k.close(),
                                                            l.close()
                                                        },
                                                        classes: y(k.classes, l.classes),
                                                        from: k,
                                                        to: l,
                                                        anchors: [
                                                        ]
                                                    };
                                                    n.classes.length ? b.push(n)  : (b.push(k), b.push(l))
                                                }
                                                e[m].anchors.push({
                                                    out: g.element,
                                                    'in': h.element
                                                })
                                            }),
                                            b
                                        }
                                        function y(a, b) {
                                            a = a.split(' '),
                                            b = b.split(' ');
                                            for (var c = [
                                            ], d = 0; d < a.length; d++) {
                                                var e = a[d];
                                                if ('ng-' !== e.substring(0, 3)) for (var f = 0; f < b.length; f++) if (e === b[f]) {
                                                    c.push(e);
                                                    break
                                                }
                                            }
                                            return c.join(' ')
                                        }
                                        function z(a) {
                                            for (var b = g.length - 1; b >= 0; b--) {
                                                var c = g[b];
                                                if (i.has(c)) {
                                                    var d = i.get(c),
                                                        e = d(a);
                                                    if (e) return e
                                                }
                                            }
                                        }
                                        function A() {
                                            m.addClass(U),
                                            H && a.addClass(m, H)
                                        }
                                        function B(a, b) {
                                            function c(a) {
                                                d(a).setHost(b)
                                            }
                                            a.from && a.to ? (c(a.from.element), c(a.to.element))  : c(a.element)
                                        }
                                        function C() {
                                            var a = d(m);
                                            !a || 'leave' === u && v.$$domOperationFired || a.end()
                                        }
                                        function D(b) {
                                            m.off('$destroy', C),
                                            c(m),
                                            p(m, v),
                                            o(m, v),
                                            v.domOperation(),
                                            H && a.removeClass(m, H),
                                            m.removeClass(U),
                                            F.complete(!b)
                                        }
                                        v = n(v);
                                        var E = [
                                            'enter',
                                            'move',
                                            'leave'
                                        ].indexOf(u) >= 0,
                                        F = new j({
                                            end: function () {
                                                D()
                                            },
                                            cancel: function () {
                                                D(!0)
                                            }
                                        });
                                        if (!g.length) return D(),
                                        F;
                                        b(m, F);
                                        var G = e(m.attr('class'), e(v.addClass, v.removeClass)),
                                        H = v.tempClasses;
                                        H && (G += ' ' + H, v.tempClasses = null);
                                        var I;
                                        return E || (I = q, q += 1),
                                        l.push({
                                            element: m,
                                            classes: G,
                                            event: u,
                                            classBasedIndex: I,
                                            structural: E,
                                            options: v,
                                            beforeStart: A,
                                            close: D
                                        }),
                                        m.on('$destroy', C),
                                        l.length > 1 ? F : (h.$$postDigest(function () {
                                            r = q,
                                            q = 0,
                                            s.length = 0;
                                            var a = [
                                            ];
                                            L(l, function (b) {
                                                d(b.element) && a.push(b)
                                            }),
                                            l.length = 0,
                                            L(x(a), function (a) {
                                                function b() {
                                                    a.beforeStart();
                                                    var b,
                                                    c = a.close,
                                                    e = a.anchors ? a.from.element || a.to.element : a.element;
                                                    if (d(e)) {
                                                        var f = z(a);
                                                        f && (b = f.start)
                                                    }
                                                    if (b) {
                                                        var g = b();
                                                        g.done(function (a) {
                                                            c(!a)
                                                        }),
                                                        B(a, g)
                                                    } else c()
                                                }
                                                a.structural ? b()  : (s.push({
                                                    node: t(a.element),
                                                    fn: b
                                                }), a.classBasedIndex === r - 1 && (s = s.sort(function (a, b) {
                                                    return b.node.contains(a.node)
                                                }).map(function (a) {
                                                    return a.fn
                                                }), k(s)))
                                            })
                                        }), F)
                                    }
                                }
                            ]
                        }
                    ];
                    b.module('ngAnimate', [
                    ]).directive('ngAnimateChildren', X).factory('$$rAFMutex', ua).factory('$$rAFScheduler', W).factory('$$AnimateRunner', va).provider('$$animateQueue', ta).provider('$$animation', wa).provider('$animateCss', na).provider('$$animateCssDriver', oa).provider('$$animateJs', pa).provider('$$animateJsDriver', qa)
                }(window, window.angular),
                function (a, b, c) {
                    'use strict';
                    function d() {
                        function a(a, b, d) {
                            return function (e, f, g) {
                                var h = g.$normalize(b);
                                c[h] && !g[h] && e.$watch(g[a], function (a) {
                                    d && (a = !a),
                                    f.attr(b, a)
                                })
                            }
                        }
                        var c = {
                            ariaHidden: !0,
                            ariaChecked: !0,
                            ariaDisabled: !0,
                            ariaRequired: !0,
                            ariaInvalid: !0,
                            ariaMultiline: !0,
                            ariaValue: !0,
                            tabindex: !0,
                            bindKeypress: !0
                        };
                        this.config = function (a) {
                            c = b.extend(c, a)
                        },
                        this.$get = function () {
                            return {
                                config: function (a) {
                                    return c[a]
                                },
                                $$watchExpr: a
                            }
                        }
                    }
                    var e = b.module('ngAria', [
                            'ng'
                    ]).provider('$aria', d);
                    e.directive('ngShow', [
                            '$aria',
                            function (a) {
                                return a.$$watchExpr('ngShow', 'aria-hidden', !0)
                            }
                    ]).directive('ngHide', [
                        '$aria',
                        function (a) {
                            return a.$$watchExpr('ngHide', 'aria-hidden', !1)
                        }
                    ]).directive('ngModel', [
                        '$aria',
                        function (a) {
                            function b(b, c, d) {
                                return a.config(c) && !d.attr(b)
                            }
                            function c(a, b) {
                                return !b.attr('role') && b.attr('type') === a && 'INPUT' !== b[0].nodeName
                            }
                            function d(a, b) {
                                var c = a.type,
                                d = a.role;
                                return 'checkbox' === (c || d) || 'menuitemcheckbox' === d ? 'checkbox' : 'radio' === (c || d) || 'menuitemradio' === d ? 'radio' : 'range' === c || 'progressbar' === d || 'slider' === d ? 'range' : 'textbox' === (c || d) || 'TEXTAREA' === b[0].nodeName ? 'multiline' : ''
                            }
                            return {
                                restrict: 'A',
                                require: '?ngModel',
                                priority: 200,
                                compile: function (e, f) {
                                    var g = d(f, e);
                                    return {
                                        pre: function (a, b, c, d) {
                                            'checkbox' === g && 'checkbox' !== c.type && (d.$isEmpty = function (a) {
                                                return a === !1
                                            })
                                        },
                                        post: function (d, e, f, h) {
                                            function i() {
                                                return h.$modelValue
                                            }
                                            function j() {
                                                return l ? (l = !1, function (a) {
                                                    var b = f.value == h.$viewValue;
                                                    e.attr('aria-checked', b),
                                                    e.attr('tabindex', 0 - !b)
                                                })  : function (a) {
                                                    e.attr('aria-checked', f.value == h.$viewValue)
                                                }
                                            }
                                            function k() {
                                                e.attr('aria-checked', !h.$isEmpty(h.$viewValue))
                                            }
                                            var l = b('tabindex', 'tabindex', e);
                                            switch (g) {
                                                case 'radio':
                                                case 'checkbox':
                                                    c(g, e) && e.attr('role', g),
                                                    b('aria-checked', 'ariaChecked', e) && d.$watch(i, 'radio' === g ? j()  : k);
                                                    break;
                                                case 'range':
                                                    c(g, e) && e.attr('role', 'slider'),
                                                    a.config('ariaValue') && (f.min && !e.attr('aria-valuemin') && e.attr('aria-valuemin', f.min), f.max && !e.attr('aria-valuemax') && e.attr('aria-valuemax', f.max), e.attr('aria-valuenow') || d.$watch(i, function (a) {
                                                        e.attr('aria-valuenow', a)
                                                    }));
                                                    break;
                                                case 'multiline':
                                                    b('aria-multiline', 'ariaMultiline', e) && e.attr('aria-multiline', !0)
                                            }
                                            l && e.attr('tabindex', 0),
                                            h.$validators.required && b('aria-required', 'ariaRequired', e) && d.$watch(function () {
                                                return h.$error.required
                                            }, function (a) {
                                                e.attr('aria-required', !!a)
                                            }),
                                            b('aria-invalid', 'ariaInvalid', e) && d.$watch(function () {
                                                return h.$invalid
                                            }, function (a) {
                                                e.attr('aria-invalid', !!a)
                                            })
                                        }
                                    }
                                }
                            }
                        }
                    ]).directive('ngDisabled', [
                        '$aria',
                        function (a) {
                            return a.$$watchExpr('ngDisabled', 'aria-disabled')
                        }
                    ]).directive('ngMessages', function () {
                        return {
                            restrict: 'A',
                            require: '?ngMessages',
                            link: function (a, b, c, d) {
                                b.attr('aria-live') || b.attr('aria-live', 'assertive')
                            }
                        }
                    }).directive('ngClick', [
                        '$aria',
                        '$parse',
                        function (a, b) {
                            return {
                                restrict: 'A',
                                compile: function (c, d) {
                                    var e = b(d.ngClick, null, !0);
                                    return function (b, c, d) {
                                        function f(a, b) {
                                            return - 1 !== b.indexOf(a[0].nodeName) ? !0 : void 0
                                        }
                                        var g = [
                                            'BUTTON',
                                            'A',
                                            'INPUT',
                                            'TEXTAREA'
                                        ];
                                        c.attr('role') || f(c, g) || c.attr('role', 'button'),
                                        a.config('tabindex') && !c.attr('tabindex') && c.attr('tabindex', 0),
                                        !a.config('bindKeypress') || d.ngKeypress || f(c, g) || c.on('keypress', function (a) {
                                            function c() {
                                                e(b, {
                                                    $event: a
                                                })
                                            }
                                            var d = a.which || a.keyCode;
                                            (32 === d || 13 === d) && b.$apply(c)
                                        })
                                    }
                                }
                            }
                        }
                    ]).directive('ngDblclick', [
                        '$aria',
                        function (a) {
                            return function (b, c, d) {
                                a.config('tabindex') && !c.attr('tabindex') && c.attr('tabindex', 0)
                            }
                        }
                    ])
                }(window, window.angular),
                function (a, b, c) {
                    'use strict';
                    function d(a, d, e) {
                        function f(a, e, f) {
                            var h,
                            i;
                            f = f || {
                            },
                            i = f.expires,
                            h = b.isDefined(f.path) ? f.path : g,
                            e === c && (i = 'Thu, 01 Jan 1970 00:00:00 GMT', e = ''),
                            b.isString(i) && (i = new Date(i));
                            var j = encodeURIComponent(a) + '=' + encodeURIComponent(e);
                            j += h ? ';path=' + h : '',
                            j += f.domain ? ';domain=' + f.domain : '',
                            j += i ? ';expires=' + i.toUTCString()  : '',
                            j += f.secure ? ';secure' : '';
                            var k = j.length + 1;
                            return k > 4096 && d.warn('Cookie \'' + a + '\' possibly not set or overflowed because it was too large (' + k + ' > 4096 bytes)!'),
                            j
                        }
                        var g = e.baseHref(),
                        h = a[0];
                        return function (a, b, c) {
                            h.cookie = f(a, b, c)
                        }
                    }
                    b.module('ngCookies', [
                            'ng'
                    ]).provider('$cookies', [
                        function () {
                            function a(a) {
                                return a ? b.extend({
                                }, d, a)  : d
                            }
                            var d = this.defaults = {
                            };
                            this.$get = [
                                '$$cookieReader',
                                '$$cookieWriter',
                                function (d, e) {
                                    return {
                                        get: function (a) {
                                            return d() [a]
                                        },
                                        getObject: function (a) {
                                            var c = this.get(a);
                                            return c ? b.fromJson(c)  : c
                                        },
                                        getAll: function () {
                                            return d()
                                        },
                                        put: function (b, c, d) {
                                            e(b, c, a(d))
                                        },
                                        putObject: function (a, c, d) {
                                            this.put(a, b.toJson(c), d)
                                        },
                                        remove: function (b, d) {
                                            e(b, c, a(d))
                                        }
                                    }
                                }
                            ]
                        }
                    ]),
                    b.module('ngCookies').factory('$cookieStore', [
                            '$cookies',
                            function (a) {
                                return {
                                    get: function (b) {
                                        return a.getObject(b)
                                    },
                                    put: function (b, c) {
                                        a.putObject(b, c)
                                    },
                                    remove: function (b) {
                                        a.remove(b)
                                    }
                                }
                            }
                    ]),
                    d.$inject = [
                        '$document',
                        '$log',
                        '$browser'
                    ],
                    b.module('ngCookies').provider('$$cookieWriter', function () {
                        this.$get = d
                    })
                }(window, window.angular),
                function (a, b, c) {
                    'use strict';
                    function d(a) {
                        function b(a, b) {
                            return a ? e(a) ? a.indexOf(b) >= 0 : a.hasOwnProperty(b)  : void 0
                        }
                        return ['$animate',
                        function (a) {
                            return {
                                restrict: 'AE',
                                transclude: 'element',
                                terminal: !0,
                                require: '^^ngMessages',
                                link: function (c, d, f, g, h) {
                                    var i,
                                    j = d[0],
                                    k = f.ngMessage || f.when,
                                    l = f.ngMessageExp || f.whenExp,
                                    m = function (a) {
                                        i = a ? e(a) ? a : a.split(/[\s,]+/)  : null,
                                        g.reRender()
                                    };
                                    l ? (m(c.$eval(l)), c.$watchCollection(l, m))  : m(k);
                                    var n,
                                    o;
                                    g.register(j, o = {
                                        test: function (a) {
                                            return b(i, a)
                                        },
                                        attach: function () {
                                            n || h(c, function (b) {
                                                a.enter(b, null, d),
                                                n = b,
                                                n.on('$destroy', function () {
                                                    n && (g.deregister(j), o.detach())
                                                })
                                            })
                                        },
                                        detach: function () {
                                            if (n) {
                                                var b = n;
                                                n = null,
                                                a.leave(b)
                                            }
                                        }
                                    })
                                }
                            }
                        }
                        ]
                    }
                    var e = b.isArray,
                    f = b.forEach,
                    g = b.isString,
                    h = b.element;
                    b.module('ngMessages', [
                    ]).directive('ngMessages', [
                        '$animate',
                        function (a) {
                            function b(a, b) {
                                return g(b) && 0 === b.length || c(a.$eval(b))
                            }
                            function c(a) {
                                return g(a) ? a.length : !!a
                            }
                            var d = 'ng-active',
                            e = 'ng-inactive';
                            return {
                                require: 'ngMessages',
                                restrict: 'AE',
                                controller: [
                                    '$element',
                                    '$scope',
                                    '$attrs',
                                    function (g, h, i) {
                                        function j(a, b) {
                                            for (var c = b, d = [
                                            ]; c && c !== a; ) {
                                                var e = c.$$ngMessageNode;
                                                if (e && e.length) return q[e];
                                                c.childNodes.length && - 1 == d.indexOf(c) ? (d.push(c), c = c.childNodes[c.childNodes.length - 1])  : c = c.previousSibling || c.parentNode
                                            }
                                        }
                                        function k(a, b, c) {
                                            var d = q[c];
                                            if (o.head) {
                                                var e = j(a, b);
                                                e ? (d.next = e.next, e.next = d)  : (d.next = o.head, o.head = d)
                                            } else o.head = d
                                        }
                                        function l(a, b, c) {
                                            var d = q[c],
                                            e = j(a, b);
                                            e ? e.next = d.next : o.head = d.next
                                        }
                                        var m,
                                        n,
                                        o = this,
                                        p = 0,
                                        q = this.messages = {
                                        };
                                        this.render = function (j) {
                                            j = j || {
                                            },
                                            m = !1,
                                            n = j;
                                            for (var k = b(h, i.ngMessagesMultiple) || b(h, i.multiple), l = [
                                            ], p = {
                                            }, q = o.head, r = !1, s = 0; null != q; ) {
                                                s++;
                                                var t = q.message,
                                                u = !1;
                                                r || f(j, function (a, b) {
                                                    if (!u && c(a) && t.test(b)) {
                                                        if (p[b]) return;
                                                        p[b] = !0,
                                                            u = !0,
                                                            t.attach()
                                                    }
                                                }),
                                                u ? r = !k : l.push(t),
                                                q = q.next
                                            }
                                            f(l, function (a) {
                                                a.detach()
                                            }),
                                            l.length !== s ? a.setClass(g, d, e)  : a.setClass(g, e, d)
                                        },
                                        h.$watchCollection(i.ngMessages || i['for'], o.render),
                                        this.reRender = function () {
                                            m || (m = !0, h.$evalAsync(function () {
                                                m && n && o.render(n)
                                            }))
                                        },
                                        this.register = function (a, b) {
                                            var c = p.toString();
                                            q[c] = {
                                                message: b
                                            },
                                            k(g[0], a, c),
                                            a.$$ngMessageNode = c,
                                            p++,
                                            o.reRender()
                                        },
                                        this.deregister = function (a) {
                                            var b = a.$$ngMessageNode;
                                            delete a.$$ngMessageNode,
                                            l(g[0], a, b),
                                            delete q[b],
                                            o.reRender()
                                        }
                                    }
                                ]
                            }
                        }
                    ]).directive('ngMessagesInclude', [
                        '$templateRequest',
                        '$document',
                        '$compile',
                        function (a, b, c) {
                            return {
                                restrict: 'AE',
                                require: '^^ngMessages',
                                link: function (d, e, f) {
                                    var g = f.ngMessagesInclude || f.src;
                                    a(g).then(function (a) {
                                        c(a) (d, function (a) {
                                            e.after(a);
                                            var c = h(b[0].createComment(' ngMessagesInclude: ' + g + ' '));
                                            e.after(c),
                                            e.remove()
                                        })
                                    })
                                }
                            }
                        }
                    ]).directive('ngMessage', d('AE')).directive('ngMessageExp', d('A'))
                }(window, window.angular),
                function (a, b, c) {
                    'use strict';
                    function d(a) {
                        return null != a && '' !== a && 'hasOwnProperty' !== a && h.test('.' + a)
                    }
                    function e(a, b) {
                        if (!d(b)) throw g('badmember', 'Dotted member path "@{0}" is invalid.', b);
                        for (var e = b.split('.'), f = 0, h = e.length; h > f && a !== c; f++) {
                            var i = e[f];
                            a = null !== a ? a[i] : c
                        }
                        return a
                    }
                    function f(a, c) {
                        c = c || {
                        },
                        b.forEach(c, function (a, b) {
                            delete c[b]
                        });
                        for (var d in a) !a.hasOwnProperty(d) || '$' === d.charAt(0) && '$' === d.charAt(1) || (c[d] = a[d]);
                        return c
                    }
                    var g = b.$$minErr('$resource'),
                    h = /^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;
                    b.module('ngResource', [
                            'ng'
                    ]).provider('$resource', function () {
                        var a = this;
                        this.defaults = {
                            stripTrailingSlashes: !0,
                            actions: {
                                get: {
                                    method: 'GET'
                                },
                                save: {
                                    method: 'POST'
                                },
                                query: {
                                    method: 'GET',
                                    isArray: !0
                                },
                                remove: {
                                    method: 'DELETE'
                                },
                                'delete': {
                                    method: 'DELETE'
                                }
                            }
                        },
                        this.$get = [
                            '$http',
                            '$q',
                            function (d, h) {
                                function i(a) {
                                    return j(a, !0).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+')
                                }
                                function j(a, b) {
                                    return encodeURIComponent(a).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, b ? '%20' : '+')
                                }
                                function k(b, c) {
                                    this.template = b,
                                    this.defaults = o({
                                    }, a.defaults, c),
                                    this.urlParams = {
                                    }
                                }
                                function l(i, j, r, s) {
                                    function t(a, b) {
                                        var c = {
                                        };
                                        return b = o({
                                        }, j, b),
                                        n(b, function (b, d) {
                                            q(b) && (b = b()),
                                            c[d] = b && b.charAt && '@' == b.charAt(0) ? e(a, b.substr(1))  : b
                                        }),
                                        c
                                    }
                                    function u(a) {
                                        return a.resource
                                    }
                                    function v(a) {
                                        f(a || {
                                        }, this)
                                    }
                                    var w = new k(i, s);
                                    return r = o({
                                    }, a.defaults.actions, r),
                                    v.prototype.toJSON = function () {
                                        var a = o({
                                        }, this);
                                        return delete a.$promise,
                                        delete a.$resolved,
                                        a
                                    },
                                    n(r, function (a, e) {
                                        var i = /^(POST|PUT|PATCH)$/i.test(a.method);
                                        v[e] = function (j, k, l, r) {
                                            var s,
                                            x,
                                            y,
                                            z = {
                                            };
                                            switch (arguments.length) {
                                                case 4:
                                                    y = r,
                                                    x = l;
                                                case 3:
                                                case 2:
                                                    if (!q(k)) {
                                                        z = j,
                                                            s = k,
                                                            x = l;
                                                        break
                                                    }
                                                    if (q(j)) {
                                                        x = j,
                                                            y = k;
                                                        break
                                                    }
                                                    x = k,
                                                    y = l;
                                                case 1:
                                                    q(j) ? x = j : i ? s = j : z = j;
                                                    break;
                                                case 0:
                                                    break;
                                                default:
                                                    throw g('badargs', 'Expected up to 4 arguments [params, data, success, error], got {0} arguments', arguments.length)
                                            }
                                            var A = this instanceof v,
                                            B = A ? s : a.isArray ? [
                                            ] : new v(s),
                                            C = {
                                            },
                                            D = a.interceptor && a.interceptor.response || u,
                                            E = a.interceptor && a.interceptor.responseError || c;
                                            n(a, function (a, b) {
                                                'params' != b && 'isArray' != b && 'interceptor' != b && (C[b] = p(a))
                                            }),
                                            i && (C.data = s),
                                            w.setUrlParams(C, o({
                                            }, t(s, a.params || {
                                            }), z), a.url);
                                            var F = d(C).then(function (c) {
                                                var d = c.data,
                                                h = B.$promise;
                                                if (d) {
                                                    if (b.isArray(d) !== !!a.isArray) throw g('badcfg', 'Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2} (Request: {3} {4})', e, a.isArray ? 'array' : 'object', b.isArray(d) ? 'array' : 'object', C.method, C.url);
                                                    a.isArray ? (B.length = 0, n(d, function (a) {
                                                        'object' == typeof a ? B.push(new v(a))  : B.push(a)
                                                    }))  : (f(d, B), B.$promise = h)
                                                }
                                                return B.$resolved = !0,
                                                c.resource = B,
                                                c
                                            }, function (a) {
                                                return B.$resolved = !0,
                                                (y || m) (a),
                                                h.reject(a)
                                            });
                                            return F = F.then(function (a) {
                                                var b = D(a);
                                                return (x || m) (b, a.headers),
                                                b
                                            }, E),
                                            A ? F : (B.$promise = F, B.$resolved = !1, B)
                                        },
                                        v.prototype['$' + e] = function (a, b, c) {
                                            q(a) && (c = b, b = a, a = {
                                            });
                                            var d = v[e].call(this, a, this, b, c);
                                            return d.$promise || d
                                        }
                                    }), v.bind = function (a) {
                                        return l(i, o({
                                        }, j, a), r)
                                    }, v
                                }
                                var m = b.noop,
                                n = b.forEach,
                                o = b.extend,
                                p = b.copy,
                                q = b.isFunction;
                                return k.prototype = {
                                    setUrlParams: function (a, c, d) {
                                        var e,
                                        f,
                                        h = this,
                                        j = d || h.template,
                                        k = h.urlParams = {
                                        };
                                        n(j.split(/\W/), function (a) {
                                            if ('hasOwnProperty' === a) throw g('badname', 'hasOwnProperty is not a valid parameter name.');
                                            !new RegExp('^\\d+$').test(a) && a && new RegExp('(^|[^\\\\]):' + a + '(\\W|$)').test(j) && (k[a] = !0)
                                        }),
                                        j = j.replace(/\\:/g, ':'),
                                        c = c || {
                                        },
                                        n(h.urlParams, function (a, d) {
                                            e = c.hasOwnProperty(d) ? c[d] : h.defaults[d],
                                            b.isDefined(e) && null !== e ? (f = i(e), j = j.replace(new RegExp(':' + d + '(\\W|$)', 'g'), function (a, b) {
                                                return f + b
                                            }))  : j = j.replace(new RegExp('(/?):' + d + '(\\W|$)', 'g'), function (a, b, c) {
                                                return '/' == c.charAt(0) ? c : b + c
                                            })
                                        }),
                                        h.defaults.stripTrailingSlashes && (j = j.replace(/\/+$/, '') || '/'),
                                        j = j.replace(/\/\.(?=\w+($|\?))/, '.'),
                                        a.url = j.replace(/\/\\\./, '/.'),
                                        n(c, function (b, c) {
                                            h.urlParams[c] || (a.params = a.params || {
                                            }, a.params[c] = b)
                                        })
                                    }
                                },
                                l
                            }
                        ]
                    })
                }(window, window.angular),
                function (a, b, c) {
                    'use strict';
                    function d() {
                        function a(a, c) {
                            return b.extend(Object.create(a), c)
                        }
                        function c(a, b) {
                            var c = b.caseInsensitiveMatch,
                            d = {
                                originalPath: a,
                                regexp: a
                            },
                            e = d.keys = [
                            ];
                            return a = a.replace(/([().])/g, '\\$1').replace(/(\/)?:(\w+)([\?\*])?/g, function (a, b, c, d) {
                                var f = '?' === d ? d : null,
                                g = '*' === d ? d : null;
                                return e.push({
                                    name: c,
                                    optional: !!f
                                }),
                                b = b || '',
                                '' + (f ? '' : b) + '(?:' + (f ? b : '') + (g && '(.+?)' || '([^/]+)') + (f || '') + ')' + (f || '')
                                        }).replace(/([\/$\*])/g, '\\$1'),
                                d.regexp = new RegExp('^' + a + '$', c ? 'i' : ''),
                                d
                                }
                                var d = {
                                };
                                this.when = function (a, e) {
                                    var f = b.copy(e);
                                    if (b.isUndefined(f.reloadOnSearch) && (f.reloadOnSearch = !0), b.isUndefined(f.caseInsensitiveMatch) && (f.caseInsensitiveMatch = this.caseInsensitiveMatch), d[a] = b.extend(f, a && c(a, f)), a) {
                                        var g = '/' == a[a.length - 1] ? a.substr(0, a.length - 1)  : a + '/';
                                        d[g] = b.extend({
                                            redirectTo: a
                                        }, c(g, f))
                                    }
                                    return this
                                },
                                this.caseInsensitiveMatch = !1,
                                this.otherwise = function (a) {
                                    return 'string' == typeof a && (a = {
                                        redirectTo: a
                                    }),
                                    this.when(null, a),
                                    this
                                },
                                this.$get = [
                                    '$rootScope',
                                    '$location',
                                    '$routeParams',
                                    '$q',
                                    '$injector',
                                    '$templateRequest',
                                    '$sce',
                                    function (c, e, f, g, h, j, k) {
                                        function l(a, b) {
                                            var c = b.keys,
                                            d = {
                                            };
                                            if (!b.regexp) return null;
                                            var e = b.regexp.exec(a);
                                            if (!e) return null;
                                            for (var f = 1, g = e.length; g > f; ++f) {
                                                var h = c[f - 1],
                                                    i = e[f];
                                                h && i && (d[h.name] = i)
                                            }
                                            return d
                                        }
                                        function m(a) {
                                            var d = t.current;
                                            q = o(),
                                            r = q && d && q.$$route === d.$$route && b.equals(q.pathParams, d.pathParams) && !q.reloadOnSearch && !s,
                                            r || !d && !q || c.$broadcast('$routeChangeStart', q, d).defaultPrevented && a && a.preventDefault()
                                        }
                                        function n() {
                                            var a = t.current,
                                            d = q;
                                            r ? (a.params = d.params, b.copy(a.params, f), c.$broadcast('$routeUpdate', a))  : (d || a) && (s = !1, t.current = d, d && d.redirectTo && (b.isString(d.redirectTo) ? e.path(p(d.redirectTo, d.params)).search(d.params).replace()  : e.url(d.redirectTo(d.pathParams, e.path(), e.search())).replace()), g.when(d).then(function () {
                                                if (d) {
                                                    var a,
                                                        c,
                                                        e = b.extend({
                                                        }, d.resolve);
                                                    return b.forEach(e, function (a, c) {
                                                        e[c] = b.isString(a) ? h.get(a)  : h.invoke(a, null, null, c)
                                                    }),
                                                    b.isDefined(a = d.template) ? b.isFunction(a) && (a = a(d.params))  : b.isDefined(c = d.templateUrl) && (b.isFunction(c) && (c = c(d.params)), c = k.getTrustedResourceUrl(c), b.isDefined(c) && (d.loadedTemplateUrl = c, a = j(c))),
                                                    b.isDefined(a) && (e.$template = a),
                                                    g.all(e)
                                                }
                                            }).then(function (e) {
                                                d == t.current && (d && (d.locals = e, b.copy(d.params, f)), c.$broadcast('$routeChangeSuccess', d, a))
                                            }, function (b) {
                                                d == t.current && c.$broadcast('$routeChangeError', d, a, b)
                                            }))
                                        }
                                        function o() {
                                            var c,
                                            f;
                                            return b.forEach(d, function (d, g) {
                                                !f && (c = l(e.path(), d)) && (f = a(d, {
                                                    params: b.extend({
                                                    }, e.search(), c),
                                                    pathParams: c
                                                }), f.$$route = d)
                                            }),
                                            f || d[null] && a(d[null], {
                                                params: {
                                                },
                                                pathParams: {
                                                }
                                            })
                                        }
                                        function p(a, c) {
                                            var d = [
                                            ];
                                            return b.forEach((a || '').split(':'), function (a, b) {
                                                if (0 === b) d.push(a);
                                                else {
                                                    var e = a.match(/(\w+)(?:[?*])?(.*)/),
                                                        f = e[1];
                                                    d.push(c[f]),
                                                    d.push(e[2] || ''),
                                                    delete c[f]
                                                }
                                            }),
                                            d.join('')
                                        }
                                        var q,
                                        r,
                                        s = !1,
                                        t = {
                                            routes: d,
                                            reload: function () {
                                                s = !0,
                                                c.$evalAsync(function () {
                                                    m(),
                                                    n()
                                                })
                                            },
                                            updateParams: function (a) {
                                                if (!this.current || !this.current.$$route) throw i('norout', 'Tried updating route when with no current route');
                                                a = b.extend({
                                                }, this.current.params, a),
                                                    e.path(p(this.current.$$route.originalPath, a)),
                                                    e.search(a)
                                            }
                                        };
                                        return c.$on('$locationChangeStart', m),
                                        c.$on('$locationChangeSuccess', n),
                                        t
                                    }
                                ]
                    }
                    function e() {
                        this.$get = function () {
                            return {
                            }
                        }
                    }
                    function f(a, c, d) {
                        return {
                            restrict: 'ECA',
                            terminal: !0,
                            priority: 400,
                            transclude: 'element',
                            link: function (e, f, g, h, i) {
                                function j() {
                                    n && (d.cancel(n), n = null),
                                    l && (l.$destroy(), l = null),
                                    m && (n = d.leave(m), n.then(function () {
                                        n = null
                                    }), m = null)
                                }
                                function k() {
                                    var g = a.current && a.current.locals,
                                    h = g && g.$template;
                                    if (b.isDefined(h)) {
                                        var k = e.$new(),
                                            n = a.current,
                                            q = i(k, function (a) {
                                                d.enter(a, null, m || f).then(function () {
                                                    !b.isDefined(o) || o && !e.$eval(o) || c()
                                                }),
                                                j()
                                            });
                                        m = q,
                                        l = n.scope = k,
                                        l.$emit('$viewContentLoaded'),
                                        l.$eval(p)
                                    } else j()
                                }
                                var l,
                                m,
                                n,
                                o = g.autoscroll,
                                p = g.onload || '';
                                e.$on('$routeChangeSuccess', k),
                                k()
                            }
                        }
                    }
                    function g(a, b, c) {
                        return {
                            restrict: 'ECA',
                            priority: - 400,
                            link: function (d, e) {
                                var f = c.current,
                                g = f.locals;
                                e.html(g.$template);
                                var h = a(e.contents());
                                if (f.controller) {
                                    g.$scope = d;
                                    var i = b(f.controller, g);
                                    f.controllerAs && (d[f.controllerAs] = i),
                                    e.data('$ngControllerController', i),
                                    e.children().data('$ngControllerController', i)
                                }
                                h(d)
                            }
                        }
                    }
                    var h = b.module('ngRoute', [
                            'ng'
                    ]).provider('$route', d),
                    i = b.$$minErr('ngRoute');
                    h.provider('$routeParams', e),
                    h.directive('ngView', f),
                    h.directive('ngView', g),
                    f.$inject = [
                        '$route',
                        '$anchorScroll',
                        '$animate'
                    ],
                    g.$inject = [
                        '$compile',
                        '$controller',
                        '$route'
                    ]
                }(window, window.angular),
                function (a, b, c) {
                    'use strict';
                    function d() {
                        this.$get = [
                            '$$sanitizeUri',
                            function (a) {
                                return function (b) {
                                    var c = [
                                    ];
                                    return g(b, j(c, function (b, c) {
                                        return !/^unsafe/.test(a(b, c))
                                    })),
                            c.join('')
                                }
                            }
                        ]
                    }
                    function e(a) {
                        var c = [
                        ],
                        d = j(c, b.noop);
                        return d.chars(a),
                        c.join('')
                    }
                    function f(a, c) {
                        var d,
                        e = {
                        },
                        f = a.split(',');
                        for (d = 0; d < f.length; d++) e[c ? b.lowercase(f[d])  : f[d]] = !0;
                        return e
                    }
                    function g(a, c) {
                        function d(a, d, f, g) {
                            if (d = b.lowercase(d), z[d]) for (; t.last() && A[t.last()]; ) e('', t.last());
                            y[d] && t.last() == d && e('', d),
                                g = v[d] || !!g,
                                g || t.push(d);
                            var i = {
                            };
                            f.replace(n, function (a, b, c, d, e) {
                                var f = c || d || e || '';
                                i[b] = h(f)
                            }),
                            c.start && c.start(d, i, g)
                        }
                        function e(a, d) {
                            var e,
                            f = 0;
                            if (d = b.lowercase(d)) for (f = t.length - 1; f >= 0 && t[f] != d; f--);
                            if (f >= 0) {
                                for (e = t.length - 1; e >= f; e--) c.end && c.end(t[e]);
                                t.length = f
                            }
                        }
                        'string' != typeof a && (a = null === a || 'undefined' == typeof a ? '' : '' + a);
                        var f,
                        g,
                        i,
                        j,
                        t = [
                        ],
                        u = a;
                        for (t.last = function () {
                            return t[t.length - 1]
                        }; a; ) {
                            if (j = '', g = !0, t.last() && C[t.last()] ? (a = a.replace(new RegExp('([\\W\\w]*)<\\s*\\/\\s*' + t.last() + '[^>]*>', 'i'), function (a, b) {
                                return b = b.replace(q, '$1').replace(s, '$1'),
                                    c.chars && c.chars(h(b)),
                                    ''
                            }), e('', t.last()))  : (0 === a.indexOf('<!--') ? (f = a.indexOf('--', 4), f >= 0 && a.lastIndexOf('-->', f) === f && (c.comment && c.comment(a.substring(4, f)), a = a.substring(f + 3), g = !1))  : r.test(a) ? (i = a.match(r), i && (a = a.replace(i[0], ''), g = !1))  : p.test(a) ? (i = a.match(m), i && (a = a.substring(i[0].length), i[0].replace(m, e), g = !1))  : o.test(a) && (i = a.match(l), i ? (i[4] && (a = a.substring(i[0].length), i[0].replace(l, d)), g = !1)  : (j += '<', a = a.substring(1))), g && (f = a.indexOf('<'), j += 0 > f ? a : a.substring(0, f), a = 0 > f ? '' : a.substring(f), c.chars && c.chars(h(j)))), a == u) throw k('badparse', 'The sanitizer was unable to parse the following block of html: {0}', a);
                            u = a
                        }
                        e()
                    }
                    function h(a) {
                        return a ? (I.innerHTML = a.replace(/</g, '&lt;'), I.textContent)  : ''
                    }
                    function i(a) {
                        return a.replace(/&/g, '&amp;').replace(t, function (a) {
                            var b = a.charCodeAt(0),
                            c = a.charCodeAt(1);
                            return '&#' + (1024 * (b - 55296) + (c - 56320) + 65536) + ';'
                        }).replace(u, function (a) {
                            return '&#' + a.charCodeAt(0) + ';'
                        }).replace(/</g, '&lt;').replace(/>/g, '&gt;')
                    }
                    function j(a, c) {
                        var d = !1,
                        e = b.bind(a, a.push);
                        return {
                            start: function (a, f, g) {
                                a = b.lowercase(a),
                                !d && C[a] && (d = a),
                                d || D[a] !== !0 || (e('<'), e(a), b.forEach(f, function (d, f) {
                                    var g = b.lowercase(f),
                                    h = 'img' === a && 'src' === g || 'background' === g;
                                    H[g] !== !0 || E[g] === !0 && !c(d, h) || (e(' '), e(f), e('="'), e(i(d)), e('"'))
                                }), e(g ? '/>' : '>'))
                            },
                            end: function (a) {
                                a = b.lowercase(a),
                                d || D[a] !== !0 || (e('</'), e(a), e('>')),
                                a == d && (d = !1)
                            },
                            chars: function (a) {
                                d || e(i(a))
                            }
                        }
                    }
                    var k = b.$$minErr('$sanitize'),
                    l = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
                    m = /^<\/\s*([\w:-]+)[^>]*>/,
                    n = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
                    o = /^</,
                    p = /^<\//,
                    q = /<!--(.*?)-->/g,
                    r = /<!DOCTYPE([^>]*?)>/i,
                    s = /<!\[CDATA\[(.*?)]]>/g,
                    t = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                    u = /([^\#-~| |!])/g,
                    v = f('area,br,col,hr,img,wbr'),
                    w = f('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
                    x = f('rp,rt'),
                    y = b.extend({
                    }, x, w),
                    z = b.extend({
                    }, w, f('address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul')),
                    A = b.extend({
                    }, x, f('a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var')),
                    B = f('circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use'),
                    C = f('script,style'),
                    D = b.extend({
                    }, v, z, A, y, B),
                    E = f('background,cite,href,longdesc,src,usemap,xlink:href'),
                    F = f('abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width'),
                    G = f('accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan', !0),
                    H = b.extend({
                    }, E, G, F),
                    I = document.createElement('pre');
                    b.module('ngSanitize', [
                    ]).provider('$sanitize', d),
                    b.module('ngSanitize').filter('linky', [
                            '$sanitize',
                            function (a) {
                                var c = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"”’]/,
                                d = /^mailto:/;
                                return function (f, g) {
                                    function h(a) {
                                        a && n.push(e(a))
                                    }
                                    function i(a, c) {
                                        n.push('<a '),
                                        b.isDefined(g) && n.push('target="', g, '" '),
                                        n.push('href="', a.replace(/"/g, '&quot;'), '">'),
                                        h(c),
                                        n.push('</a>')
                                    }
                                    if (!f) return f;
                                    for (var j, k, l, m = f, n = [
                                    ]; j = m.match(c); ) k = j[0],
                                        j[2] || j[4] || (k = (j[3] ? 'http://' : 'mailto:') + k),
                                        l = j.index,
                                        h(m.substr(0, l)),
                                        i(k, j[0].replace(d, '')),
                                        m = m.substring(l + j[0].length);
                                    return h(m),
                                    a(n.join(''))
                                }
                            }
                    ])
                }(window, window.angular),
                function (a, b, c) {
                    'use strict';
                    function d(a) {
                        return b.lowercase(a.nodeName || a[0] && a[0].nodeName)
                    }
                    function e(a, c, d) {
                        f.directive(a, [
                                '$parse',
                                '$swipe',
                                function (e, f) {
                                    var g = 75,
                                    h = 0.3,
                                    i = 30;
                                    return function (j, k, l) {
                                        function m(a) {
                                            if (!n) return !1;
                                            var b = Math.abs(a.y - n.y),
                                                d = (a.x - n.x) * c;
                                            return o && g > b && d > 0 && d > i && h > b / d
                                        }
                                        var n,
                                    o,
                                    p = e(l[a]),
                                    q = [
                                        'touch'
                                    ];
                                        b.isDefined(l.ngSwipeDisableMouse) || q.push('mouse'),
                                        f.bind(k, {
                                            start: function (a, b) {
                                                n = a,
                                                o = !0
                                            },
                                            cancel: function (a) {
                                                o = !1
                                            },
                                            end: function (a, b) {
                                                m(a) && j.$apply(function () {
                                                    k.triggerHandler(d),
                                                    p(j, {
                                                        $event: b
                                                    })
                                                })
                                            }
                                        }, q)
                                    }
                                }
                        ])
                    }
                    var f = b.module('ngTouch', [
                    ]);
                    f.factory('$swipe', [
                            function () {
                                function a(a) {
                                    var b = a.originalEvent || a,
                                    c = b.touches && b.touches.length ? b.touches : [
                                        b
                                    ],
                                    d = b.changedTouches && b.changedTouches[0] || c[0];
                                    return {
                                        x: d.clientX,
                                        y: d.clientY
                                    }
                                }
                                function c(a, c) {
                                    var d = [
                                    ];
                                    return b.forEach(a, function (a) {
                                        var b = e[a][c];
                                        b && d.push(b)
                                    }),
                                d.join(' ')
                                }
                                var d = 10,
                                e = {
                                    mouse: {
                                        start: 'mousedown',
                                        move: 'mousemove',
                                        end: 'mouseup'
                                    },
                                    touch: {
                                        start: 'touchstart',
                                        move: 'touchmove',
                                        end: 'touchend',
                                        cancel: 'touchcancel'
                                    }
                                };
                                return {
                                    bind: function (b, e, f) {
                                        var g,
                                        h,
                                        i,
                                        j,
                                        k = !1;
                                        f = f || ['mouse',
                                        'touch'],
                                        b.on(c(f, 'start'), function (b) {
                                            i = a(b),
                                            k = !0,
                                            g = 0,
                                            h = 0,
                                            j = i,
                                            e.start && e.start(i, b)
                                        });
                                        var l = c(f, 'cancel');
                                        l && b.on(l, function (a) {
                                            k = !1,
                                            e.cancel && e.cancel(a)
                                        }),
                                        b.on(c(f, 'move'), function (b) {
                                            if (k && i) {
                                                var c = a(b);
                                                if (g += Math.abs(c.x - j.x), h += Math.abs(c.y - j.y), j = c, !(d > g && d > h)) return h > g ? (k = !1, void (e.cancel && e.cancel(b)))  : (b.preventDefault(), void (e.move && e.move(c, b)))
                                            }
                                        }),
                                        b.on(c(f, 'end'), function (b) {
                                            k && (k = !1, e.end && e.end(a(b), b))
                                        })
                                    }
                                }
                            }
                    ]),
                    f.config(['$provide',
                            function (a) {
                                a.decorator('ngClickDirective', [
                                        '$delegate',
                                        function (a) {
                                            return a.shift(),
                                            a
                                        }
                                ])
                            }
                    ]),
                    f.directive('ngClick', [
                            '$parse',
                            '$timeout',
                            '$rootElement',
                            function (a, c, e) {
                                function f(a, b, c, d) {
                                    return Math.abs(a - c) < q && Math.abs(b - d) < q
                                }
                                function g(a, b, c) {
                                    for (var d = 0; d < a.length; d += 2) if (f(a[d], a[d + 1], b, c)) return a.splice(d, d + 2),
                                    !0;
                                    return !1
                                }
                                function h(a) {
                                    if (!(Date.now() - k > p)) {
                                        var b = a.touches && a.touches.length ? a.touches : [
                                            a
                                        ],
                                        c = b[0].clientX,
                                        e = b[0].clientY;
                                        1 > c && 1 > e || m && m[0] === c && m[1] === e || (m && (m = null), 'label' === d(a.target) && (m = [
                                                    c,
                                                    e
                                        ]), g(l, c, e) || (a.stopPropagation(), a.preventDefault(), a.target && a.target.blur && a.target.blur()))
                                    }
                                }
                                function i(a) {
                                    var b = a.touches && a.touches.length ? a.touches : [
                                        a
                                    ],
                                    d = b[0].clientX,
                                    e = b[0].clientY;
                                    l.push(d, e),
                                    c(function () {
                                        for (var a = 0; a < l.length; a += 2) if (l[a] == d && l[a + 1] == e) return void l.splice(a, a + 2)
                                    }, p, !1)
                                }
                                function j(a, b) {
                                    l || (e[0].addEventListener('click', h, !0), e[0].addEventListener('touchstart', i, !0), l = [
                                    ]),
                                    k = Date.now(),
                                    g(l, a, b)
                                }
                                var k,
                                l,
                                m,
                                n = 750,
                                o = 12,
                                p = 2500,
                                q = 25,
                                r = 'ng-click-active';
                                return function (c, d, e) {
                                    function f() {
                                        m = !1,
                                        d.removeClass(r)
                                    }
                                    var g,
                                    h,
                                    i,
                                    k,
                                    l = a(e.ngClick),
                                    m = !1;
                                    d.on('touchstart', function (a) {
                                        m = !0,
                                        g = a.target ? a.target : a.srcElement,
                                        3 == g.nodeType && (g = g.parentNode),
                                        d.addClass(r),
                                        h = Date.now();
                                        var b = a.originalEvent || a,
                                        c = b.touches && b.touches.length ? b.touches : [
                                            b
                                        ],
                                        e = c[0];
                                        i = e.clientX,
                                        k = e.clientY
                                    }),
                                    d.on('touchcancel', function (a) {
                                        f()
                                    }),
                                    d.on('touchend', function (a) {
                                        var c = Date.now() - h,
                                        l = a.originalEvent || a,
                                        p = l.changedTouches && l.changedTouches.length ? l.changedTouches : l.touches && l.touches.length ? l.touches : [
                                            l
                                        ],
                                        q = p[0],
                                        r = q.clientX,
                                        s = q.clientY,
                                        t = Math.sqrt(Math.pow(r - i, 2) + Math.pow(s - k, 2));
                                        m && n > c && o > t && (j(r, s), g && g.blur(), b.isDefined(e.disabled) && e.disabled !== !1 || d.triggerHandler('click', [
                                                    a
                                        ])),
                                        f()
                                    }),
                                    d.onclick = function (a) {
                                    },
                                    d.on('click', function (a, b) {
                                        c.$apply(function () {
                                            l(c, {
                                                $event: b || a
                                            })
                                        })
                                    }),
                                    d.on('mousedown', function (a) {
                                        d.addClass(r)
                                    }),
                                    d.on('mousemove mouseup', function (a) {
                                        d.removeClass(r)
                                    })
                                }
                            }
                    ]),
                    e('ngSwipeLeft', - 1, 'swipeleft'),
                    e('ngSwipeRight', 1, 'swiperight')
                }(window, window.angular),
                function (a, b) {
                    'use strict';
                    function c(a, c, d) {
                        function e(a) {
                            var b = a;
                            return {
                                getValue: function () {
                                    return b
                                },
                                setValue: function (a) {
                                    b = a
                                }
                            }
                        }
                        function f(a, b) {
                            return {
                                getValue: function () {
                                    return a(b)
                                },
                                setValue: function () {
                                }
                            }
                        }
                        function g(a, b, c) {
                            return {
                                getValue: function () {
                                    return a(c)
                                },
                                setValue: function (d) {
                                    d !== a(c) && c.$apply(function () {
                                        b(c, d)
                                    })
                                }
                            }
                        }
                        if ('' !== c) {
                            var h = a(c);
                            return h.assign !== b ? g(h, h.assign, d)  : f(h, d)
                        }
                        return e(!0)
                    }
                    function d(a, b, d) {
                        a.directive(b, [
                                '$parse',
                                '$window',
                                '$timeout',
                                function (a, e, f) {
                                    return {
                                        priority: 1,
                                        restrict: 'A',
                                        link: function (g, h, i) {
                                            function j() {
                                                l.getValue() && !d.isAttached(k) && d.scroll(k)
                                            }
                                            var k = h[0],
                                l = c(a, i[b], g);
                                            g.$watch(j),
                                            f(j, 0, !1),
                                            e.addEventListener('resize', j, !1),
                                            h.bind('scroll', function () {
                                                l.setValue(d.isAttached(k))
                                            })
                                        }
                                    }
                                }
                        ])
                    }
                    var e = {
                        isAttached: function (a) {
                            return a.scrollTop + a.clientHeight + 1 >= a.scrollHeight
                        },
                        scroll: function (a) {
                            a.scrollTop = a.scrollHeight
                        }
                    },
                    f = {
                        isAttached: function (a) {
                            return a.scrollTop <= 1
                        },
                        scroll: function (a) {
                            a.scrollTop = 0
                        }
                    },
                    g = {
                        isAttached: function (a) {
                            return a.scrollLeft + a.clientWidth + 1 >= a.scrollWidth
                        },
                        scroll: function (a) {
                            a.scrollLeft = a.scrollWidth
                        }
                    },
                    h = {
                        isAttached: function (a) {
                            return a.scrollLeft <= 1
                        },
                        scroll: function (a) {
                            a.scrollLeft = 0
                        }
                    },
                    i = a.module('luegg.directives', [
                    ]);
                    d(i, 'scrollGlue', e),
                    d(i, 'scrollGlueTop', f),
                    d(i, 'scrollGlueBottom', e),
                    d(i, 'scrollGlueLeft', h),
                    d(i, 'scrollGlueRight', g)
                }(angular),
                function (a, b, c) {
                    'use strict';
                    b.module('ngToast.provider', [
                    ]).provider('ngToast', [
                        function () {
                            function a(a) {
                                for (var d = Math.floor(1000 * Math.random()); c.indexOf(d) > - 1; ) d = Math.floor(1000 * Math.random());
                                this.id = d,
                                    this.count = 0,
                                    this.animation = e.animation,
                                    this.className = e.className,
                                    this.additionalClasses = e.additionalClasses,
                                    this.dismissOnTimeout = e.dismissOnTimeout,
                                    this.timeout = e.timeout,
                                    this.dismissButton = e.dismissButton,
                                    this.dismissButtonHtml = e.dismissButtonHtml,
                                    this.dismissOnClick = e.dismissOnClick,
                                    this.compileContent = e.compileContent,
                                    b.extend(this, a)
                            }
                            var c = [
                            ],
                            d = [
                            ],
                            e = {
                                animation: !1,
                                className: 'success',
                                additionalClasses: null,
                                dismissOnTimeout: !0,
                                timeout: 4000,
                                dismissButton: !1,
                                dismissButtonHtml: '&times;',
                                dismissOnClick: !0,
                                compileContent: !1,
                                combineDuplications: !1,
                                horizontalPosition: 'right',
                                verticalPosition: 'top',
                                maxNumber: 0
                            };
                            this.configure = function (a) {
                                b.extend(e, a)
                            },
                            this.$get = [
                                function () {
                                    var b = function (a, b) {
                                        return b = 'object' == typeof b ? b : {
                                            content: b
                                        },
                                        b.className = a,
                                        this.create(b)
                                    };
                                    return {
                                        settings: e,
                                        messages: c,
                                        dismiss: function (a) {
                                            if (a) {
                                                for (var b = c.length - 1; b >= 0; b--) if (c[b].id === a) return c.splice(b, 1),
                                                    void d.splice(d.indexOf(a), 1)
                                            } else {
                                                for (; c.length > 0; ) c.pop();
                                                d = [
                                                ]
                                            }
                                        },
                                        create: function (b) {
                                            if (b = 'object' == typeof b ? b : {
                                                content: b
                                            }, e.combineDuplications) for (var f = d.length - 1; f >= 0; f--) {
                                                var g = c[f],
                                                h = b.className || 'success';
                                                if (g.content === b.content && g.className === h) return void c[f].count++
                                            }
                                            e.maxNumber > 0 && d.length >= e.maxNumber && this.dismiss(d[0]);
                                            var i = new a(b);
                                            return 'bottom' === e.verticalPosition ? c.unshift(i)  : c.push(i),
                                            d.push(i.id),
                                            i.id
                                        },
                                        success: function (a) {
                                            return b.call(this, 'success', a)
                                        },
                                        info: function (a) {
                                            return b.call(this, 'info', a)
                                        },
                                        warning: function (a) {
                                            return b.call(this, 'warning', a)
                                        },
                                        danger: function (a) {
                                            return b.call(this, 'danger', a)
                                        }
                                    }
                                }
                            ]
                        }
                    ])
                }(window, window.angular),
                function (a, b) {
                    'use strict';
                    b.module('ngToast.directives', [
                            'ngToast.provider'
                    ]).run(['$templateCache',
                        function (a) {
                            a.put('ngToast/toast.html', '<div class="ng-toast ng-toast--{{hPos}} ng-toast--{{vPos}} {{animation ? \'ng-toast--animate-\' + animation : \'\'}}"><ul class="ng-toast__list"><toast-message ng-repeat="message in messages" message="message" count="message.count"><span ng-bind-html="message.content"></span></toast-message></ul></div>'),
                            a.put('ngToast/toastMessage.html', '<li class="ng-toast__message {{message.additionalClasses}}"ng-mouseenter="onMouseEnter()"ng-mouseleave="onMouseLeave()"><div class="alert alert-{{message.className}}" ng-class="{\'alert-dismissible\': message.dismissButton}"><button type="button" class="close" ng-if="message.dismissButton" ng-bind-html="message.dismissButtonHtml" ng-click="!message.dismissOnClick && dismiss()"></button><span ng-if="count" class="ng-toast__message__count">{{count + 1}}</span><span ng-if="!message.compileContent" ng-transclude></span></div></li>')
                        }
                    ]).directive('toast', [
                        'ngToast',
                        '$templateCache',
                        '$log',
                        function (a, b, c) {
                            return {
                                replace: !0,
                                restrict: 'EA',
                                templateUrl: 'ngToast/toast.html',
                                compile: function (d, e) {
                                    if (e.template) {
                                        var f = b.get(e.template);
                                        f ? d.replaceWith(f)  : c.warn('ngToast: Provided template could not be loaded. Please be sure that it is populated before the <toast> element is represented.')
                                    }
                                    return function (b) {
                                        b.hPos = a.settings.horizontalPosition,
                                        b.vPos = a.settings.verticalPosition,
                                        b.animation = a.settings.animation,
                                        b.messages = a.messages
                                    }
                                }
                            }
                        }
                    ]).directive('toastMessage', [
                        '$timeout',
                        '$compile',
                        'ngToast',
                        function (a, b, c) {
                            return {
                                replace: !0,
                                transclude: !0,
                                restrict: 'EA',
                                scope: {
                                    message: '=',
                                    count: '='
                                },
                                controller: [
                                    '$scope',
                                    'ngToast',
                                    function (a, b) {
                                        a.dismiss = function () {
                                            b.dismiss(a.message.id)
                                        }
                                    }
                                ],
                                templateUrl: 'ngToast/toastMessage.html',
                                link: function (d, e, f, g, h) {
                                    e.attr('data-message-id', d.message.id);
                                    var i,
                                    j = d.message.compileContent;
                                    if (d.cancelTimeout = function () {
                                        a.cancel(i)
                                    }, d.startTimeout = function () {
                                        d.message.dismissOnTimeout && (i = a(function () {
                                            c.dismiss(d.message.id)
                                        }, d.message.timeout))
                                    }, d.onMouseEnter = function () {
                                        d.cancelTimeout()
                                    }, d.onMouseLeave = function () {
                                        d.startTimeout()
                                    }, j) {
                                        var k;
                                        h(d, function (a) {
                                            k = a,
                                            e.children().append(k)
                                        }),
                                        a(function () {
                                            b(k.contents()) ('boolean' == typeof j ? d.$parent : j, function (a) {
                                                k.replaceWith(a)
                                            })
                                        }, 0)
                                    }
                                    d.startTimeout(),
                                    d.message.dismissOnClick && e.bind('click', function () {
                                        c.dismiss(d.message.id),
                                        d.$apply()
                                    })
                                }
                            }
                        }
                    ])
                }(window, window.angular),
                function (a, b) {
                    'use strict';
                    b.module('ngToast', [
                            'ngSanitize',
                            'ngToast.directives',
                            'ngToast.provider'
                    ])
                }(window, window.angular);
