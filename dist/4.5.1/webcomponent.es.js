var L, s, Re, O, pe, Ae, Q, He, B = {}, Le = [], ut = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function E(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function De(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function g(e, t, n) {
  var r, o, _, l = {};
  for (_ in t)
    _ == "key" ? r = t[_] : _ == "ref" ? o = t[_] : l[_] = t[_];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? L.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (_ in e.defaultProps)
      l[_] === void 0 && (l[_] = e.defaultProps[_]);
  return A(e, l, r, o, null);
}
function A(e, t, n, r, o) {
  var _ = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o ?? ++Re };
  return o == null && s.vnode != null && s.vnode(_), _;
}
function ct() {
  return { current: null };
}
function x(e) {
  return e.children;
}
function $(e, t) {
  this.props = e, this.context = t;
}
function H(e, t) {
  if (t == null)
    return e.__ ? H(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? H(e) : null;
}
function je(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return je(e);
  }
}
function X(e) {
  (!e.__d && (e.__d = !0) && O.push(e) && !q.__r++ || pe !== s.debounceRendering) && ((pe = s.debounceRendering) || Ae)(q);
}
function q() {
  var e, t, n, r, o, _, l, u;
  for (O.sort(Q); e = O.shift(); )
    e.__d && (t = O.length, r = void 0, o = void 0, l = (_ = (n = e).__v).__e, (u = n.__P) && (r = [], (o = E({}, _)).__v = _.__v + 1, oe(u, _, o, n.__n, u.ownerSVGElement !== void 0, _.__h != null ? [l] : null, r, l ?? H(_), _.__h), Ie(r, _), _.__e != l && je(_)), O.length > t && O.sort(Q));
  q.__r = 0;
}
function Me(e, t, n, r, o, _, l, u, c, f) {
  var i, v, p, a, d, C, h, m = r && r.__k || Le, b = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" || typeof a == "function" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? A(null, a, null, null, a) : Array.isArray(a) ? A(x, { children: a }, null, null, null) : a.__b > 0 ? A(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (p = m[i]) === null || p && a.key == p.key && a.type === p.type)
        m[i] = void 0;
      else
        for (v = 0; v < b; v++) {
          if ((p = m[v]) && a.key == p.key && a.type === p.type) {
            m[v] = void 0;
            break;
          }
          p = null;
        }
      oe(e, a, p = p || B, o, _, l, u, c, f), d = a.__e, (v = a.ref) && p.ref != v && (h || (h = []), p.ref && h.push(p.ref, null, a), h.push(v, a.__c || d, a)), d != null ? (C == null && (C = d), typeof a.type == "function" && a.__k === p.__k ? a.__d = c = We(a, c, e) : c = Ve(e, a, p, m, d, c), typeof n.type == "function" && (n.__d = c)) : c && p.__e == c && c.parentNode != e && (c = H(p));
    }
  for (n.__e = C, i = b; i--; )
    m[i] != null && (typeof n.type == "function" && m[i].__e != null && m[i].__e == n.__d && (n.__d = Fe(r).nextSibling), qe(m[i], m[i]));
  if (h)
    for (i = 0; i < h.length; i++)
      Be(h[i], h[++i], h[++i]);
}
function We(e, t, n) {
  for (var r, o = e.__k, _ = 0; o && _ < o.length; _++)
    (r = o[_]) && (r.__ = e, t = typeof r.type == "function" ? We(r, t, n) : Ve(n, r, r, o, r.__e, t));
  return t;
}
function N(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(n) {
    N(n, t);
  }) : t.push(e)), t;
}
function Ve(e, t, n, r, o, _) {
  var l, u, c;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || o != _ || o.parentNode == null)
    e:
      if (_ == null || _.parentNode !== e)
        e.appendChild(o), l = null;
      else {
        for (u = _, c = 0; (u = u.nextSibling) && c < r.length; c += 1)
          if (u == o)
            break e;
        e.insertBefore(o, _), l = _;
      }
  return l !== void 0 ? l : o.nextSibling;
}
function Fe(e) {
  var t, n, r;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((n = e.__k[t]) && (r = Fe(n)))
        return r;
  }
  return null;
}
function st(e, t, n, r, o) {
  var _;
  for (_ in n)
    _ === "children" || _ === "key" || _ in t || z(e, _, null, n[_], r);
  for (_ in t)
    o && typeof t[_] != "function" || _ === "children" || _ === "key" || _ === "value" || _ === "checked" || n[_] === t[_] || z(e, _, t[_], n[_], r);
}
function de(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || ut.test(t) ? n : n + "px";
}
function z(e, t, n, r, o) {
  var _;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || de(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || de(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      _ = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + _] = n, n ? r || e.addEventListener(t, _ ? ve : he, _) : e.removeEventListener(t, _ ? ve : he, _);
    else if (t !== "dangerouslySetInnerHTML") {
      if (o)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function he(e) {
  return this.l[e.type + !1](s.event ? s.event(e) : e);
}
function ve(e) {
  return this.l[e.type + !0](s.event ? s.event(e) : e);
}
function oe(e, t, n, r, o, _, l, u, c) {
  var f, i, v, p, a, d, C, h, m, b, D, U, fe, j, M, k = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, u = t.__e = n.__e, t.__h = null, _ = [u]), (f = s.__b) && f(t);
  try {
    e:
      if (typeof k == "function") {
        if (h = t.props, m = (f = k.contextType) && r[f.__c], b = f ? m ? m.props.value : f.__ : r, n.__c ? C = (i = t.__c = n.__c).__ = i.__E : ("prototype" in k && k.prototype.render ? t.__c = i = new k(h, b) : (t.__c = i = new $(h, b), i.constructor = k, i.render = ft), m && m.sub(i), i.props = h, i.state || (i.state = {}), i.context = b, i.__n = r, v = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), k.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = E({}, i.__s)), E(i.__s, k.getDerivedStateFromProps(h, i.__s))), p = i.props, a = i.state, i.__v = t, v)
          k.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (k.getDerivedStateFromProps == null && h !== p && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, b), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, b) === !1 || t.__v === n.__v) {
            for (t.__v !== n.__v && (i.props = h, i.state = i.__s, i.__d = !1), i.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(W) {
              W && (W.__ = t);
            }), D = 0; D < i._sb.length; D++)
              i.__h.push(i._sb[D]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, b), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(p, a, d);
          });
        }
        if (i.context = b, i.props = h, i.__P = e, U = s.__r, fe = 0, "prototype" in k && k.prototype.render) {
          for (i.state = i.__s, i.__d = !1, U && U(t), f = i.render(i.props, i.state, i.context), j = 0; j < i._sb.length; j++)
            i.__h.push(i._sb[j]);
          i._sb = [];
        } else
          do
            i.__d = !1, U && U(t), f = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++fe < 25);
        i.state = i.__s, i.getChildContext != null && (r = E(E({}, r), i.getChildContext())), v || i.getSnapshotBeforeUpdate == null || (d = i.getSnapshotBeforeUpdate(p, a)), M = f != null && f.type === x && f.key == null ? f.props.children : f, Me(e, Array.isArray(M) ? M : [M], t, n, r, o, _, l, u, c), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), C && (i.__E = i.__ = null), i.__e = !1;
      } else
        _ == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = at(n.__e, t, n, r, o, _, l, c);
    (f = s.diffed) && f(t);
  } catch (W) {
    t.__v = null, (c || _ != null) && (t.__e = u, t.__h = !!c, _[_.indexOf(u)] = null), s.__e(W, t, n);
  }
}
function Ie(e, t) {
  s.__c && s.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      s.__e(r, n.__v);
    }
  });
}
function at(e, t, n, r, o, _, l, u) {
  var c, f, i, v = n.props, p = t.props, a = t.type, d = 0;
  if (a === "svg" && (o = !0), _ != null) {
    for (; d < _.length; d++)
      if ((c = _[d]) && "setAttribute" in c == !!a && (a ? c.localName === a : c.nodeType === 3)) {
        e = c, _[d] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(p);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, p.is && p), _ = null, u = !1;
  }
  if (a === null)
    v === p || u && e.data === p || (e.data = p);
  else {
    if (_ = _ && L.call(e.childNodes), f = (v = n.props || B).dangerouslySetInnerHTML, i = p.dangerouslySetInnerHTML, !u) {
      if (_ != null)
        for (v = {}, d = 0; d < e.attributes.length; d++)
          v[e.attributes[d].name] = e.attributes[d].value;
      (i || f) && (i && (f && i.__html == f.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (st(e, p, v, o, u), i)
      t.__k = [];
    else if (d = t.props.children, Me(e, Array.isArray(d) ? d : [d], t, n, r, o && a !== "foreignObject", _, l, _ ? _[0] : n.__k && H(n, 0), u), _ != null)
      for (d = _.length; d--; )
        _[d] != null && De(_[d]);
    u || ("value" in p && (d = p.value) !== void 0 && (d !== e.value || a === "progress" && !d || a === "option" && d !== v.value) && z(e, "value", d, v.value, !1), "checked" in p && (d = p.checked) !== void 0 && d !== e.checked && z(e, "checked", d, v.checked, !1));
  }
  return e;
}
function Be(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    s.__e(r, n);
  }
}
function qe(e, t, n) {
  var r, o;
  if (s.unmount && s.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Be(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (_) {
        s.__e(_, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (o = 0; o < r.length; o++)
      r[o] && qe(r[o], t, n || typeof e.type != "function");
  n || e.__e == null || De(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ft(e, t, n) {
  return this.constructor(e, n);
}
function w(e, t, n) {
  var r, o, _;
  s.__ && s.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, _ = [], oe(t, e = (!r && n || t).__k = g(x, null, [e]), o || B, B, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? L.call(t.childNodes) : null, _, !r && n ? n : o ? o.__e : t.firstChild, r), Ie(_, e);
}
function _e(e, t) {
  w(e, t, _e);
}
function ie(e, t, n) {
  var r, o, _, l = E({}, e.props);
  for (_ in t)
    _ == "key" ? r = t[_] : _ == "ref" ? o = t[_] : l[_] = t[_];
  return arguments.length > 2 && (l.children = arguments.length > 3 ? L.call(arguments, 2) : n), A(e.type, l, r || e.key, o || e.ref, null);
}
function pt(e, t) {
  var n = { __c: t = "__cC" + He++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, _;
    return this.getChildContext || (o = [], (_ = {})[t] = this, this.getChildContext = function() {
      return _;
    }, this.shouldComponentUpdate = function(l) {
      this.props.value !== l.value && o.some(function(u) {
        u.__e = !0, X(u);
      });
    }, this.sub = function(l) {
      o.push(l);
      var u = l.componentWillUnmount;
      l.componentWillUnmount = function() {
        o.splice(o.indexOf(l), 1), u && u.call(l);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
L = Le.slice, s = { __e: function(e, t, n, r) {
  for (var o, _, l; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((_ = o.constructor) && _.getDerivedStateFromError != null && (o.setState(_.getDerivedStateFromError(e)), l = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), l = o.__d), l)
          return o.__E = o;
      } catch (u) {
        e = u;
      }
  throw e;
} }, Re = 0, $.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = E({}, this.state), typeof e == "function" && (e = e(E({}, n), this.props)), e && E(n, e), e != null && this.__v && (t && this._sb.push(t), X(this));
}, $.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), X(this));
}, $.prototype.render = x, O = [], Ae = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Q = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, q.__r = 0, He = 0;
function le() {
  return (le = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function dt(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = function(r, o) {
    if (r == null)
      return {};
    var _, l, u = {}, c = Object.keys(r);
    for (l = 0; l < c.length; l++)
      o.indexOf(_ = c[l]) >= 0 || (u[_] = r[_]);
    return u;
  }(e, ["context", "children"]);
  return ie(t, n);
}
function ht() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = g(dt, le({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3)
      return n.data;
    if (n.nodeType !== 1)
      return null;
    var o = [], _ = {}, l = 0, u = n.attributes, c = n.childNodes;
    for (l = u.length; l--; )
      u[l].name !== "slot" && (_[u[l].name] = u[l].value, _[ze(u[l].name)] = u[l].value);
    for (l = c.length; l--; ) {
      var f = t(c[l], null), i = c[l].slot;
      i ? _[i] = g(ye, { name: i }, f) : o[l] = f;
    }
    var v = r ? g(ye, null, o) : o;
    return g(r || n.nodeName.toLowerCase(), _, v);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? _e : w)(this._vdom, this._root);
}
function ze(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function vt(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[ze(e)] = n, this._vdom = ie(this._vdom, r), w(this._vdom, this._root);
  }
}
function yt() {
  w(this._vdom = null, this._root);
}
function ye(e, t) {
  var n = this;
  return g("slot", le({}, e, { ref: function(r) {
    r ? (n.ref = r, n._listener || (n._listener = function(o) {
      o.stopPropagation(), o.detail.context = t;
    }, r.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function mt(e, t, n, r) {
  function o() {
    var _ = Reflect.construct(HTMLElement, [], o);
    return _._vdomComponent = e, _._root = r && r.shadow ? _.attachShadow({ mode: "open" }) : _, _;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = ht, o.prototype.attributeChangedCallback = vt, o.prototype.disconnectedCallback = yt, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = n, n.forEach(function(_) {
    Object.defineProperty(o.prototype, _, { get: function() {
      return this._vdom.props[_];
    }, set: function(l) {
      this._vdom ? this.attributeChangedCallback(_, null, l) : (this._props || (this._props = {}), this._props[_] = l, this.connectedCallback());
      var u = typeof l;
      l != null && u !== "string" && u !== "boolean" && u !== "number" || this.setAttribute(_, l);
    } });
  }), customElements.define(t || e.tagName || e.displayName || e.name, o);
}
var P, y, G, me, S = 0, Ze = [], V = [], be = s.__b, ge = s.__r, ke = s.diffed, Ce = s.__c, $e = s.unmount;
function T(e, t) {
  s.__h && s.__h(y, e, S || t), S = 0;
  var n = y.__H || (y.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: V }), n.__[e];
}
function Ge(e) {
  return S = 1, Je(Ke, e);
}
function Je(e, t, n) {
  var r = T(P++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Ke(void 0, t), function(u) {
    var c = r.__N ? r.__N[0] : r.__[0], f = r.t(c, u);
    c !== f && (r.__N = [f, r.__[1]], r.__c.setState({}));
  }], r.__c = y, !y.u)) {
    var o = function(u, c, f) {
      if (!r.__c.__H)
        return !0;
      var i = r.__c.__H.__.filter(function(p) {
        return p.__c;
      });
      if (i.every(function(p) {
        return !p.__N;
      }))
        return !_ || _.call(this, u, c, f);
      var v = !1;
      return i.forEach(function(p) {
        if (p.__N) {
          var a = p.__[0];
          p.__ = p.__N, p.__N = void 0, a !== p.__[0] && (v = !0);
        }
      }), !(!v && r.__c.props === u) && (!_ || _.call(this, u, c, f));
    };
    y.u = !0;
    var _ = y.shouldComponentUpdate, l = y.componentWillUpdate;
    y.componentWillUpdate = function(u, c, f) {
      if (this.__e) {
        var i = _;
        _ = void 0, o(u, c, f), _ = i;
      }
      l && l.call(this, u, c, f);
    }, y.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function Ye(e, t) {
  var n = T(P++, 3);
  !s.__s && ce(n.__H, t) && (n.__ = e, n.i = t, y.__H.__h.push(n));
}
function Z(e, t) {
  var n = T(P++, 4);
  !s.__s && ce(n.__H, t) && (n.__ = e, n.i = t, y.__h.push(n));
}
function bt(e) {
  return S = 5, ue(function() {
    return { current: e };
  }, []);
}
function gt(e, t, n) {
  S = 6, Z(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function ue(e, t) {
  var n = T(P++, 7);
  return ce(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
}
function kt(e, t) {
  return S = 8, ue(function() {
    return e;
  }, t);
}
function Ct(e) {
  var t = y.context[e.__c], n = T(P++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(y)), t.props.value) : e.__;
}
function $t(e, t) {
  s.useDebugValue && s.useDebugValue(t ? t(e) : e);
}
function Et() {
  var e = T(P++, 11);
  if (!e.__) {
    for (var t = y.__v; t !== null && !t.__m && t.__ !== null; )
      t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Nt() {
  for (var e; e = Ze.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(F), e.__H.__h.forEach(ee), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], s.__e(t, e.__v);
      }
}
s.__b = function(e) {
  y = null, be && be(e);
}, s.__r = function(e) {
  ge && ge(e), P = 0;
  var t = (y = e.__c).__H;
  t && (G === y ? (t.__h = [], y.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = V, n.__N = n.i = void 0;
  })) : (t.__h.forEach(F), t.__h.forEach(ee), t.__h = [])), G = y;
}, s.diffed = function(e) {
  ke && ke(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Ze.push(t) !== 1 && me === s.requestAnimationFrame || ((me = s.requestAnimationFrame) || xt)(Nt)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== V && (n.__ = n.__V), n.i = void 0, n.__V = V;
  })), G = y = null;
}, s.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(F), n.__h = n.__h.filter(function(r) {
        return !r.__ || ee(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], s.__e(r, n.__v);
    }
  }), Ce && Ce(e, t);
}, s.unmount = function(e) {
  $e && $e(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      F(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && s.__e(t, n.__v));
};
var Ee = typeof requestAnimationFrame == "function";
function xt(e) {
  var t, n = function() {
    clearTimeout(r), Ee && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Ee && (t = requestAnimationFrame(n));
}
function F(e) {
  var t = y, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), y = t;
}
function ee(e) {
  var t = y;
  e.__c = e.__(), y = t;
}
function ce(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Ke(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Qe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function te(e, t) {
  for (var n in e)
    if (n !== "__source" && !(n in t))
      return !0;
  for (var r in t)
    if (r !== "__source" && e[r] !== t[r])
      return !0;
  return !1;
}
function J(e, t) {
  return e === t && (e !== 0 || 1 / e == 1 / t) || e != e && t != t;
}
function ne(e) {
  this.props = e;
}
function wt(e, t) {
  function n(o) {
    var _ = this.props.ref, l = _ == o.ref;
    return !l && _ && (_.call ? _(null) : _.current = null), t ? !t(this.props, o) || !l : te(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, g(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(ne.prototype = new $()).isPureReactComponent = !0, ne.prototype.shouldComponentUpdate = function(e, t) {
  return te(this.props, e) || te(this.state, t);
};
var Ne = s.__b;
s.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Ne && Ne(e);
};
var Ot = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Pt(e) {
  function t(n) {
    var r = Qe({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Ot, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var xe = function(e, t) {
  return e == null ? null : N(N(e).map(t));
}, St = { map: xe, forEach: xe, count: function(e) {
  return e ? N(e).length : 0;
}, only: function(e) {
  var t = N(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: N }, Tt = s.__e;
s.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, _ = t; _ = _.__; )
      if ((o = _.__c) && o.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Tt(e, t, n, r);
};
var we = s.unmount;
function Xe(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = Qe({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return Xe(r, t, n);
  })), e;
}
function et(e, t, n) {
  return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return et(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = n)), e;
}
function I() {
  this.__u = 0, this.t = null, this.__b = null;
}
function tt(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Ut(e) {
  var t, n, r;
  function o(_) {
    if (t || (t = e()).then(function(l) {
      n = l.default || l;
    }, function(l) {
      r = l;
    }), r)
      throw r;
    if (!n)
      throw t;
    return g(n, _);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function R() {
  this.u = null, this.o = null;
}
s.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), we && we(e);
}, (I.prototype = new $()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = tt(r.__v), _ = !1, l = function() {
    _ || (_ = !0, n.__R = null, o ? o(u) : u());
  };
  n.__R = l;
  var u = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var f = r.state.__a;
        r.__v.__k[0] = et(f, f.__c.__P, f.__c.__O);
      }
      var i;
      for (r.setState({ __a: r.__b = null }); i = r.t.pop(); )
        i.forceUpdate();
    }
  }, c = t.__h === !0;
  r.__u++ || c || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(l, l);
}, I.prototype.componentWillUnmount = function() {
  this.t = [];
}, I.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Xe(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && g(x, null, e.fallback);
  return o && (o.__h = null), [g(x, null, t.__a ? null : e.children), o];
};
var Oe = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n = e.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.u = n = n[2];
    }
};
function Rt(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function At(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    w(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
  } }), w(g(Rt, { context: t.context }, e.__v), t.l)) : t.l && t.componentWillUnmount();
}
function Ht(e, t) {
  var n = g(At, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(R.prototype = new $()).__a = function(e) {
  var t = this, n = tt(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var _ = function() {
      t.props.revealOrder ? (r.push(o), Oe(t, e, r)) : o();
    };
    n ? n(_) : _();
  };
}, R.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = N(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, R.prototype.componentDidUpdate = R.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    Oe(e, n, t);
  });
};
var nt = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Lt = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Dt = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, jt = /[A-Z0-9]/g, Mt = typeof document < "u", Wt = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Vt(e, t, n) {
  return t.__k == null && (t.textContent = ""), w(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Ft(e, t, n) {
  return _e(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
$.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty($.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Pe = s.event;
function It() {
}
function Bt() {
  return this.cancelBubble;
}
function qt() {
  return this.defaultPrevented;
}
s.event = function(e) {
  return Pe && (e = Pe(e)), e.persist = It, e.isPropagationStopped = Bt, e.isDefaultPrevented = qt, e.nativeEvent = e;
};
var se, zt = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Se = s.vnode;
s.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {};
    for (var _ in n) {
      var l = n[_];
      if (!(_ === "value" && "defaultValue" in n && l == null || Mt && _ === "children" && r === "noscript" || _ === "class" || _ === "className")) {
        var u = _.toLowerCase();
        _ === "defaultValue" && "value" in n && n.value == null ? _ = "value" : _ === "download" && l === !0 ? l = "" : u === "ondoubleclick" ? _ = "ondblclick" : u !== "onchange" || r !== "input" && r !== "textarea" || Wt(n.type) ? u === "onfocus" ? _ = "onfocusin" : u === "onblur" ? _ = "onfocusout" : Dt.test(_) ? _ = u : r.indexOf("-") === -1 && Lt.test(_) ? _ = _.replace(jt, "-$&").toLowerCase() : l === null && (l = void 0) : u = _ = "oninput", u === "oninput" && o[_ = u] && (_ = "oninputCapture"), o[_] = l;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = N(n.children).forEach(function(c) {
      c.props.selected = o.value.indexOf(c.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = N(n.children).forEach(function(c) {
      c.props.selected = o.multiple ? o.defaultValue.indexOf(c.props.value) != -1 : o.defaultValue == c.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", zt)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = nt, Se && Se(e);
};
var Te = s.__r;
s.__r = function(e) {
  Te && Te(e), se = e.__c;
};
var Ue = s.diffed;
s.diffed = function(e) {
  Ue && Ue(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), se = null;
};
var Zt = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return se.__n[e.__c].props.value;
} } } };
function Gt(e) {
  return g.bind(null, e);
}
function rt(e) {
  return !!e && e.$$typeof === nt;
}
function Jt(e) {
  return rt(e) ? ie.apply(null, arguments) : e;
}
function Yt(e) {
  return !!e.__k && (w(null, e), !0);
}
function Kt(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var Qt = function(e, t) {
  return e(t);
}, Xt = function(e, t) {
  return e(t);
}, en = x;
function ot(e) {
  e();
}
function tn(e) {
  return e;
}
function nn() {
  return [!1, ot];
}
var rn = Z;
function on(e, t) {
  var n = t(), r = Ge({ h: { __: n, v: t } }), o = r[0].h, _ = r[1];
  return Z(function() {
    o.__ = n, o.v = t, J(o.__, t()) || _({ h: o });
  }, [e, n, t]), Ye(function() {
    return J(o.__, o.v()) || _({ h: o }), e(function() {
      J(o.__, o.v()) || _({ h: o });
    });
  }, [e]), n;
}
var re = { useState: Ge, useId: Et, useReducer: Je, useEffect: Ye, useLayoutEffect: Z, useInsertionEffect: rn, useTransition: nn, useDeferredValue: tn, useSyncExternalStore: on, startTransition: ot, useRef: bt, useImperativeHandle: gt, useMemo: ue, useCallback: kt, useContext: Ct, useDebugValue: $t, version: "17.0.2", Children: St, render: Vt, hydrate: Ft, unmountComponentAtNode: Yt, createPortal: Ht, createElement: g, createContext: pt, createFactory: Gt, cloneElement: Jt, createRef: ct, Fragment: x, isValidElement: rt, findDOMNode: Kt, Component: $, PureComponent: ne, memo: wt, forwardRef: Pt, flushSync: Xt, unstable_batchedUpdates: Qt, StrictMode: en, Suspense: I, SuspenseList: R, lazy: Ut, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Zt };
const _n = (e) => e.toLowerCase().split("-").map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(""), _t = (e) => e.replace(/([A-Z])/g, (t) => `-${t[0].toLowerCase()}`), ln = (e, t, n = {}) => {
  if (e instanceof Element) {
    const r = un(e.classList, t, n);
    r !== "" && (e.className = r), Object.keys(t).forEach((o) => {
      if (!(o === "children" || o === "style" || o === "ref" || o === "class" || o === "className" || o === "forwardedRef"))
        if (o.indexOf("on") === 0 && o[2] === o[2].toUpperCase()) {
          const _ = o.substring(2), l = _[0].toLowerCase() + _.substring(1);
          it(l) || cn(e, l, t[o]);
        } else
          e[o] = t[o], typeof t[o] === "string" && e.setAttribute(_t(o), t[o]);
    });
  }
}, un = (e, t, n) => {
  const r = t.className || t.class, o = n.className || n.class, _ = Y(e), l = Y(r ? r.split(" ") : []), u = Y(o ? o.split(" ") : []), c = [];
  return _.forEach((f) => {
    l.has(f) ? (c.push(f), l.delete(f)) : u.has(f) || c.push(f);
  }), l.forEach((f) => c.push(f)), c.join(" ");
};
/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
const it = (e) => {
  if (typeof document > "u")
    return !0;
  {
    const t = "on" + e;
    let n = t in document;
    if (!n) {
      const r = document.createElement("div");
      r.setAttribute(t, "return;"), n = typeof r[t] == "function";
    }
    return n;
  }
}, cn = (e, t, n) => {
  const r = e.__events || (e.__events = {}), o = r[t];
  o && e.removeEventListener(t, o), e.addEventListener(t, r[t] = function(l) {
    n && n.call(this, l);
  });
}, Y = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => t.set(n, n)), t;
}, sn = (e, t) => {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}, an = (...e) => (t) => {
  e.forEach((n) => {
    sn(n, t);
  });
}, fn = (e, t) => {
  const n = (r, o) => re.createElement(e, Object.assign({}, r, { forwardedRef: o }));
  return n.displayName = t, re.forwardRef(n);
};
var pn = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const lt = (e, t, n, r) => {
  r !== void 0 && r();
  const o = _n(e), _ = class extends re.Component {
    constructor(l) {
      super(l), this.setComponentElRef = (u) => {
        this.componentEl = u;
      };
    }
    componentDidMount() {
      this.componentDidUpdate(this.props);
    }
    componentDidUpdate(l) {
      ln(this.componentEl, this.props, l);
    }
    render() {
      const l = this.props, { children: u, forwardedRef: c, style: f, className: i, ref: v } = l, p = pn(l, ["children", "forwardedRef", "style", "className", "ref"]);
      let a = Object.keys(p).reduce((C, h) => {
        const m = p[h];
        if (h.indexOf("on") === 0 && h[2] === h[2].toUpperCase()) {
          const b = h.substring(2).toLowerCase();
          typeof document < "u" && it(b) && (C[h] = m);
        } else {
          const b = typeof m;
          (b === "string" || b === "boolean" || b === "number") && (C[_t(h)] = m);
        }
        return C;
      }, {});
      n && (a = n(this.props, a));
      const d = Object.assign(Object.assign({}, a), { ref: an(c, this.setComponentElRef), style: f });
      return g(e, d, u);
    }
    static get displayName() {
      return o;
    }
  };
  return t && (_.contextType = t), fn(_, o);
};
globalThis && globalThis.__rest;
const dn = /* @__PURE__ */ lt("ld-button"), hn = /* @__PURE__ */ lt("ld-typo");
var vn = 0;
function K(e, t, n, r, o, _) {
  var l, u, c = {};
  for (u in t)
    u == "ref" ? l = t[u] : c[u] = t[u];
  var f = { type: e, props: c, key: n, ref: l, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --vn, __source: o, __self: _ };
  if (typeof e == "function" && (l = e.defaultProps))
    for (u in l)
      c[u] === void 0 && (c[u] = l[u]);
  return s.vnode && s.vnode(f), f;
}
const ae = () => K(x, {
  children: [K(hn, {
    variant: "b4",
    children: "This is a component with Liquid 4.5.1 and:"
  }), K(dn, {
    children: "Just a simple button"
  })]
});
ae.tagName = "demo-webcomponent-4.5.1";
ae.version = "1.0.0";
mt(
  ae,
  void 0,
  void 0,
  {
    shadow: !0
  }
  /* render in a shadow dom to avoid style conflict */
);
//# sourceMappingURL=webcomponent.es.js.map
