import { LdTypo as ae, LdButton as fe } from "@emdgroup-liquid/liquid/dist/react";
var S, d, Q, k, q, X, j, M = {}, Y = [], pe = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function b(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Z(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function x(e, t, n) {
  var o, l, _, i = {};
  for (_ in t)
    _ == "key" ? o = t[_] : _ == "ref" ? l = t[_] : i[_] = t[_];
  if (arguments.length > 2 && (i.children = arguments.length > 3 ? S.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (_ in e.defaultProps)
      i[_] === void 0 && (i[_] = e.defaultProps[_]);
  return E(e, i, o, l, null);
}
function E(e, t, n, o, l) {
  var _ = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: l ?? ++Q };
  return l == null && d.vnode != null && d.vnode(_), _;
}
function T(e) {
  return e.children;
}
function $(e, t) {
  this.props = e, this.context = t;
}
function P(e, t) {
  if (t == null)
    return e.__ ? P(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? P(e) : null;
}
function ee(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ee(e);
  }
}
function z(e) {
  (!e.__d && (e.__d = !0) && k.push(e) && !O.__r++ || q !== d.debounceRendering) && ((q = d.debounceRendering) || X)(O);
}
function O() {
  var e, t, n, o, l, _, i, c;
  for (k.sort(j); e = k.shift(); )
    e.__d && (t = k.length, o = void 0, l = void 0, i = (_ = (n = e).__v).__e, (c = n.__P) && (o = [], (l = b({}, _)).__v = _.__v + 1, F(c, _, l, n.__n, c.ownerSVGElement !== void 0, _.__h != null ? [i] : null, o, i ?? P(_), _.__h), oe(o, _), _.__e != i && ee(_)), k.length > t && k.sort(j));
  O.__r = 0;
}
function te(e, t, n, o, l, _, i, c, u, p) {
  var r, h, a, s, f, C, v, y = o && o.__k || Y, g = y.length;
  for (n.__k = [], r = 0; r < t.length; r++)
    if ((s = n.__k[r] = (s = t[r]) == null || typeof s == "boolean" || typeof s == "function" ? null : typeof s == "string" || typeof s == "number" || typeof s == "bigint" ? E(null, s, null, null, s) : Array.isArray(s) ? E(T, { children: s }, null, null, null) : s.__b > 0 ? E(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : s) != null) {
      if (s.__ = n, s.__b = n.__b + 1, (a = y[r]) === null || a && s.key == a.key && s.type === a.type)
        y[r] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((a = y[h]) && s.key == a.key && s.type === a.type) {
            y[h] = void 0;
            break;
          }
          a = null;
        }
      F(e, s, a = a || M, l, _, i, c, u, p), f = s.__e, (h = s.ref) && a.ref != h && (v || (v = []), a.ref && v.push(a.ref, null, s), v.push(h, s.__c || f, s)), f != null ? (C == null && (C = f), typeof s.type == "function" && s.__k === a.__k ? s.__d = u = ne(s, u, e) : u = _e(e, s, a, y, f, u), typeof n.type == "function" && (n.__d = u)) : u && a.__e == u && u.parentNode != e && (u = P(a));
    }
  for (n.__e = C, r = g; r--; )
    y[r] != null && (typeof n.type == "function" && y[r].__e != null && y[r].__e == n.__d && (n.__d = re(o).nextSibling), ie(y[r], y[r]));
  if (v)
    for (r = 0; r < v.length; r++)
      le(v[r], v[++r], v[++r]);
}
function ne(e, t, n) {
  for (var o, l = e.__k, _ = 0; l && _ < l.length; _++)
    (o = l[_]) && (o.__ = e, t = typeof o.type == "function" ? ne(o, t, n) : _e(n, o, o, l, o.__e, t));
  return t;
}
function _e(e, t, n, o, l, _) {
  var i, c, u;
  if (t.__d !== void 0)
    i = t.__d, t.__d = void 0;
  else if (n == null || l != _ || l.parentNode == null)
    e:
      if (_ == null || _.parentNode !== e)
        e.appendChild(l), i = null;
      else {
        for (c = _, u = 0; (c = c.nextSibling) && u < o.length; u += 1)
          if (c == l)
            break e;
        e.insertBefore(l, _), i = _;
      }
  return i !== void 0 ? i : l.nextSibling;
}
function re(e) {
  var t, n, o;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((n = e.__k[t]) && (o = re(n)))
        return o;
  }
  return null;
}
function de(e, t, n, o, l) {
  var _;
  for (_ in n)
    _ === "children" || _ === "key" || _ in t || U(e, _, null, n[_], o);
  for (_ in t)
    l && typeof t[_] != "function" || _ === "children" || _ === "key" || _ === "value" || _ === "checked" || n[_] === t[_] || U(e, _, t[_], n[_], o);
}
function G(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || pe.test(t) ? n : n + "px";
}
function U(e, t, n, o, l) {
  var _;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || G(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || G(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      _ = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + _] = n, n ? o || e.addEventListener(t, _ ? J : V, _) : e.removeEventListener(t, _ ? J : V, _);
    else if (t !== "dangerouslySetInnerHTML") {
      if (l)
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
function V(e) {
  return this.l[e.type + !1](d.event ? d.event(e) : e);
}
function J(e) {
  return this.l[e.type + !0](d.event ? d.event(e) : e);
}
function F(e, t, n, o, l, _, i, c, u) {
  var p, r, h, a, s, f, C, v, y, g, L, w, R, N, A, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (u = n.__h, c = t.__e = n.__e, t.__h = null, _ = [c]), (p = d.__b) && p(t);
  try {
    e:
      if (typeof m == "function") {
        if (v = t.props, y = (p = m.contextType) && o[p.__c], g = p ? y ? y.props.value : p.__ : o, n.__c ? C = (r = t.__c = n.__c).__ = r.__E : ("prototype" in m && m.prototype.render ? t.__c = r = new m(v, g) : (t.__c = r = new $(v, g), r.constructor = m, r.render = ve), y && y.sub(r), r.props = v, r.state || (r.state = {}), r.context = g, r.__n = o, h = r.__d = !0, r.__h = [], r._sb = []), r.__s == null && (r.__s = r.state), m.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = b({}, r.__s)), b(r.__s, m.getDerivedStateFromProps(v, r.__s))), a = r.props, s = r.state, r.__v = t, h)
          m.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), r.componentDidMount != null && r.__h.push(r.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && v !== a && r.componentWillReceiveProps != null && r.componentWillReceiveProps(v, g), !r.__e && r.shouldComponentUpdate != null && r.shouldComponentUpdate(v, r.__s, g) === !1 || t.__v === n.__v) {
            for (t.__v !== n.__v && (r.props = v, r.state = r.__s, r.__d = !1), r.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(D) {
              D && (D.__ = t);
            }), L = 0; L < r._sb.length; L++)
              r.__h.push(r._sb[L]);
            r._sb = [], r.__h.length && i.push(r);
            break e;
          }
          r.componentWillUpdate != null && r.componentWillUpdate(v, r.__s, g), r.componentDidUpdate != null && r.__h.push(function() {
            r.componentDidUpdate(a, s, f);
          });
        }
        if (r.context = g, r.props = v, r.__P = e, w = d.__r, R = 0, "prototype" in m && m.prototype.render) {
          for (r.state = r.__s, r.__d = !1, w && w(t), p = r.render(r.props, r.state, r.context), N = 0; N < r._sb.length; N++)
            r.__h.push(r._sb[N]);
          r._sb = [];
        } else
          do
            r.__d = !1, w && w(t), p = r.render(r.props, r.state, r.context), r.state = r.__s;
          while (r.__d && ++R < 25);
        r.state = r.__s, r.getChildContext != null && (o = b(b({}, o), r.getChildContext())), h || r.getSnapshotBeforeUpdate == null || (f = r.getSnapshotBeforeUpdate(a, s)), A = p != null && p.type === T && p.key == null ? p.props.children : p, te(e, Array.isArray(A) ? A : [A], t, n, o, l, _, i, c, u), r.base = t.__e, t.__h = null, r.__h.length && i.push(r), C && (r.__E = r.__ = null), r.__e = !1;
      } else
        _ == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = he(n.__e, t, n, o, l, _, i, u);
    (p = d.diffed) && p(t);
  } catch (D) {
    t.__v = null, (u || _ != null) && (t.__e = c, t.__h = !!u, _[_.indexOf(c)] = null), d.__e(D, t, n);
  }
}
function oe(e, t) {
  d.__c && d.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      d.__e(o, n.__v);
    }
  });
}
function he(e, t, n, o, l, _, i, c) {
  var u, p, r, h = n.props, a = t.props, s = t.type, f = 0;
  if (s === "svg" && (l = !0), _ != null) {
    for (; f < _.length; f++)
      if ((u = _[f]) && "setAttribute" in u == !!s && (s ? u.localName === s : u.nodeType === 3)) {
        e = u, _[f] = null;
        break;
      }
  }
  if (e == null) {
    if (s === null)
      return document.createTextNode(a);
    e = l ? document.createElementNS("http://www.w3.org/2000/svg", s) : document.createElement(s, a.is && a), _ = null, c = !1;
  }
  if (s === null)
    h === a || c && e.data === a || (e.data = a);
  else {
    if (_ = _ && S.call(e.childNodes), p = (h = n.props || M).dangerouslySetInnerHTML, r = a.dangerouslySetInnerHTML, !c) {
      if (_ != null)
        for (h = {}, f = 0; f < e.attributes.length; f++)
          h[e.attributes[f].name] = e.attributes[f].value;
      (r || p) && (r && (p && r.__html == p.__html || r.__html === e.innerHTML) || (e.innerHTML = r && r.__html || ""));
    }
    if (de(e, a, h, l, c), r)
      t.__k = [];
    else if (f = t.props.children, te(e, Array.isArray(f) ? f : [f], t, n, o, l && s !== "foreignObject", _, i, _ ? _[0] : n.__k && P(n, 0), c), _ != null)
      for (f = _.length; f--; )
        _[f] != null && Z(_[f]);
    c || ("value" in a && (f = a.value) !== void 0 && (f !== e.value || s === "progress" && !f || s === "option" && f !== h.value) && U(e, "value", f, h.value, !1), "checked" in a && (f = a.checked) !== void 0 && f !== e.checked && U(e, "checked", f, h.checked, !1));
  }
  return e;
}
function le(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    d.__e(o, n);
  }
}
function ie(e, t, n) {
  var o, l;
  if (d.unmount && d.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || le(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (_) {
        d.__e(_, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (l = 0; l < o.length; l++)
      o[l] && ie(o[l], t, n || typeof e.type != "function");
  n || e.__e == null || Z(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ve(e, t, n) {
  return this.constructor(e, n);
}
function H(e, t, n) {
  var o, l, _;
  d.__ && d.__(e, t), l = (o = typeof n == "function") ? null : n && n.__k || t.__k, _ = [], F(t, e = (!o && n || t).__k = x(T, null, [e]), l || M, M, t.ownerSVGElement !== void 0, !o && n ? [n] : l ? null : t.firstChild ? S.call(t.childNodes) : null, _, !o && n ? n : l ? l.__e : t.firstChild, o), oe(_, e);
}
function se(e, t) {
  H(e, t, se);
}
function ce(e, t, n) {
  var o, l, _, i = b({}, e.props);
  for (_ in t)
    _ == "key" ? o = t[_] : _ == "ref" ? l = t[_] : i[_] = t[_];
  return arguments.length > 2 && (i.children = arguments.length > 3 ? S.call(arguments, 2) : n), E(e.type, i, o || e.key, l || e.ref, null);
}
S = Y.slice, d = { __e: function(e, t, n, o) {
  for (var l, _, i; t = t.__; )
    if ((l = t.__c) && !l.__)
      try {
        if ((_ = l.constructor) && _.getDerivedStateFromError != null && (l.setState(_.getDerivedStateFromError(e)), i = l.__d), l.componentDidCatch != null && (l.componentDidCatch(e, o || {}), i = l.__d), i)
          return l.__E = l;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Q = 0, $.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b({}, this.state), typeof e == "function" && (e = e(b({}, n), this.props)), e && b(n, e), e != null && this.__v && (t && this._sb.push(t), z(this));
}, $.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), z(this));
}, $.prototype.render = T, k = [], X = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, j = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, O.__r = 0;
function I() {
  return (I = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }).apply(this, arguments);
}
function ye(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = function(o, l) {
    if (o == null)
      return {};
    var _, i, c = {}, u = Object.keys(o);
    for (i = 0; i < u.length; i++)
      l.indexOf(_ = u[i]) >= 0 || (c[_] = o[_]);
    return c;
  }(e, ["context", "children"]);
  return ce(t, n);
}
function me() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = x(ye, I({}, this._props, { context: e.detail.context }), function t(n, o) {
    if (n.nodeType === 3)
      return n.data;
    if (n.nodeType !== 1)
      return null;
    var l = [], _ = {}, i = 0, c = n.attributes, u = n.childNodes;
    for (i = c.length; i--; )
      c[i].name !== "slot" && (_[c[i].name] = c[i].value, _[ue(c[i].name)] = c[i].value);
    for (i = u.length; i--; ) {
      var p = t(u[i], null), r = u[i].slot;
      r ? _[r] = x(K, { name: r }, p) : l[i] = p;
    }
    var h = o ? x(K, null, l) : l;
    return x(o || n.nodeName.toLowerCase(), _, h);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? se : H)(this._vdom, this._root);
}
function ue(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function ge(e, t, n) {
  if (this._vdom) {
    var o = {};
    o[e] = n = n ?? void 0, o[ue(e)] = n, this._vdom = ce(this._vdom, o), H(this._vdom, this._root);
  }
}
function be() {
  H(this._vdom = null, this._root);
}
function K(e, t) {
  var n = this;
  return x("slot", I({}, e, { ref: function(o) {
    o ? (n.ref = o, n._listener || (n._listener = function(l) {
      l.stopPropagation(), l.detail.context = t;
    }, o.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function ke(e, t, n, o) {
  function l() {
    var _ = Reflect.construct(HTMLElement, [], l);
    return _._vdomComponent = e, _._root = o && o.shadow ? _.attachShadow({ mode: "open" }) : _, _;
  }
  return (l.prototype = Object.create(HTMLElement.prototype)).constructor = l, l.prototype.connectedCallback = me, l.prototype.attributeChangedCallback = ge, l.prototype.disconnectedCallback = be, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), l.observedAttributes = n, n.forEach(function(_) {
    Object.defineProperty(l.prototype, _, { get: function() {
      return this._vdom.props[_];
    }, set: function(i) {
      this._vdom ? this.attributeChangedCallback(_, null, i) : (this._props || (this._props = {}), this._props[_] = i, this.connectedCallback());
      var c = typeof i;
      i != null && c !== "string" && c !== "boolean" && c !== "number" || this.setAttribute(_, i);
    } });
  }), customElements.define(t || e.tagName || e.displayName || e.name, l);
}
var Ce = 0;
function W(e, t, n, o, l, _) {
  var i, c, u = {};
  for (c in t)
    c == "ref" ? i = t[c] : u[c] = t[c];
  var p = { type: e, props: u, key: n, ref: i, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ce, __source: l, __self: _ };
  if (typeof e == "function" && (i = e.defaultProps))
    for (c in i)
      u[c] === void 0 && (u[c] = i[c]);
  return d.vnode && d.vnode(p), p;
}
const B = () => W(T, {
  children: [W(ae, {
    variant: "b4",
    children: "This is a component with Liquid 4.5.1 and:"
  }), W(fe, {
    children: "Just a simple button"
  })]
});
B.tagName = "demo-webcomponent-4.6.0";
B.version = "1.0.0";
ke(
  B,
  void 0,
  void 0,
  {
    shadow: !0
  }
  /* render in a shadow dom to avoid style conflict */
);
//# sourceMappingURL=webcomponent.es.js.map
