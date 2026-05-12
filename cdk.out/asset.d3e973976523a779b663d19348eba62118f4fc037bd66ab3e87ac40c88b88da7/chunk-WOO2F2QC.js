import {
  $ as N,
  Aa as Bn,
  Ab as Me,
  B as X,
  Ba as vt,
  C as J,
  Ca as I,
  D as pt,
  Da as qn,
  E as Se,
  Ec as ur,
  F as tt,
  G as On,
  Ga as Vn,
  Hb as yt,
  Ia as et,
  J as zt,
  Ja as Hn,
  K as L,
  Kc as Pe,
  L as we,
  Lc as hr,
  M as Pn,
  Mc as dr,
  N as Un,
  Na as Wn,
  Nc as Ue,
  Oa as Gn,
  Ob as er,
  Pa as Qn,
  Pb as nr,
  Q as jn,
  Qa as Zn,
  Qb as rr,
  Qc as fr,
  R as P,
  Ra as Kn,
  Rb as ir,
  Rc as je,
  S as Ft,
  Sa as _e,
  Sb as Te,
  T as w,
  Ta as Ht,
  Tb as Ct,
  U as A,
  Uc as Jt,
  Vb as Yt,
  Vc as Ne,
  W as C,
  Wc as $e,
  Y as Nn,
  Z as T,
  Za as Yn,
  _ as Re,
  _b as sr,
  a as u,
  aa as f,
  ac as Ee,
  b as _,
  ba as Bt,
  bc as Oe,
  ca as gt,
  cb as Wt,
  cc as Xt,
  d as _n,
  db as bt,
  e as Dn,
  ea as H,
  eb as Gt,
  fa as $n,
  g as kn,
  ga as qt,
  gd as pr,
  h as xn,
  ha as W,
  hd as gr,
  ia as Ae,
  ib as Xn,
  id as mr,
  j as be,
  ja as Ln,
  k as ye,
  ka as zn,
  kb as Jn,
  l as R,
  lb as Qt,
  m as x,
  mb as tr,
  na as Ie,
  nb as De,
  nc as or,
  o as $,
  oa as Fn,
  p as O,
  pa as G,
  pc as ar,
  q as d,
  r as ft,
  s as Mn,
  sb as ke,
  t as Tn,
  tb as Zt,
  u as b,
  ua as Vt,
  ub as Kt,
  v as Lt,
  va as mt,
  w as M,
  x as En,
  xc as cr,
  y as Ce,
  yb as xe,
  yc as lr,
} from "./chunk-ILZMJO4D.js";
var p = "primary",
  Ut = Symbol("RouteTitle"),
  qe = class {
    constructor(t) {
      this.params = t || {};
    }
    has(t) {
      return Object.prototype.hasOwnProperty.call(this.params, t);
    }
    get(t) {
      if (this.has(t)) {
        let i = this.params[t];
        return Array.isArray(i) ? i[0] : i;
      }
      return null;
    }
    getAll(t) {
      if (this.has(t)) {
        let i = this.params[t];
        return Array.isArray(i) ? i : [i];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function ot(e) {
  return new qe(e);
}
function ri(e, t, i) {
  let n = i.path.split("/");
  if (
    n.length > e.length ||
    (i.pathMatch === "full" && (t.hasChildren() || n.length < e.length))
  )
    return null;
  let r = {};
  for (let s = 0; s < n.length; s++) {
    let o = n[s],
      a = e[s];
    if (o.startsWith(":")) r[o.substring(1)] = a;
    else if (o !== a.path) return null;
  }
  return { consumed: e.slice(0, n.length), posParams: r };
}
function ii(e, t) {
  if (e.length !== t.length) return !1;
  for (let i = 0; i < e.length; ++i) if (!U(e[i], t[i])) return !1;
  return !0;
}
function U(e, t) {
  let i = e ? Ve(e) : void 0,
    n = t ? Ve(t) : void 0;
  if (!i || !n || i.length != n.length) return !1;
  let r;
  for (let s = 0; s < i.length; s++)
    if (((r = i[s]), !Ar(e[r], t[r]))) return !1;
  return !0;
}
function Ve(e) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)];
}
function Ar(e, t) {
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return !1;
    let i = [...e].sort(),
      n = [...t].sort();
    return i.every((r, s) => n[s] === r);
  } else return e === t;
}
function Ir(e) {
  return e.length > 0 ? e[e.length - 1] : null;
}
function q(e) {
  return Mn(e) ? e : nr(e) ? O(Promise.resolve(e)) : d(e);
}
var si = { exact: Dr, subset: kr },
  _r = { exact: oi, subset: ai, ignored: () => !0 };
function vr(e, t, i) {
  return (
    si[i.paths](e.root, t.root, i.matrixParams) &&
    _r[i.queryParams](e.queryParams, t.queryParams) &&
    !(i.fragment === "exact" && e.fragment !== t.fragment)
  );
}
function oi(e, t) {
  return U(e, t);
}
function Dr(e, t, i) {
  if (
    !Z(e.segments, t.segments) ||
    !ne(e.segments, t.segments, i) ||
    e.numberOfChildren !== t.numberOfChildren
  )
    return !1;
  for (let n in t.children)
    if (!e.children[n] || !Dr(e.children[n], t.children[n], i)) return !1;
  return !0;
}
function ai(e, t) {
  return (
    Object.keys(t).length <= Object.keys(e).length &&
    Object.keys(t).every((i) => Ar(e[i], t[i]))
  );
}
function kr(e, t, i) {
  return xr(e, t, t.segments, i);
}
function xr(e, t, i, n) {
  if (e.segments.length > i.length) {
    let r = e.segments.slice(0, i.length);
    return !(!Z(r, i) || t.hasChildren() || !ne(r, i, n));
  } else if (e.segments.length === i.length) {
    if (!Z(e.segments, i) || !ne(e.segments, i, n)) return !1;
    for (let r in t.children)
      if (!e.children[r] || !kr(e.children[r], t.children[r], n)) return !1;
    return !0;
  } else {
    let r = i.slice(0, e.segments.length),
      s = i.slice(e.segments.length);
    return !Z(e.segments, r) || !ne(e.segments, r, n) || !e.children[p]
      ? !1
      : xr(e.children[p], t, s, n);
  }
}
function ne(e, t, i) {
  return t.every((n, r) => _r[i](e[r].parameters, n.parameters));
}
var z = class {
    constructor(t = new v([], {}), i = {}, n = null) {
      (this.root = t), (this.queryParams = i), (this.fragment = n);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= ot(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      return ui.serialize(this);
    }
  },
  v = class {
    constructor(t, i) {
      (this.segments = t),
        (this.children = i),
        (this.parent = null),
        Object.values(i).forEach((n) => (n.parent = this));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return re(this);
    }
  },
  Q = class {
    constructor(t, i) {
      (this.path = t), (this.parameters = i);
    }
    get parameterMap() {
      return (this._parameterMap ??= ot(this.parameters)), this._parameterMap;
    }
    toString() {
      return Tr(this);
    }
  };
function ci(e, t) {
  return Z(e, t) && e.every((i, n) => U(i.parameters, t[n].parameters));
}
function Z(e, t) {
  return e.length !== t.length ? !1 : e.every((i, n) => i.path === t[n].path);
}
function li(e, t) {
  let i = [];
  return (
    Object.entries(e.children).forEach(([n, r]) => {
      n === p && (i = i.concat(t(r, n)));
    }),
    Object.entries(e.children).forEach(([n, r]) => {
      n !== p && (i = i.concat(t(r, n)));
    }),
    i
  );
}
var vn = (() => {
    let t = class t {};
    (t.ɵfac = function (r) {
      return new (r || t)();
    }),
      (t.ɵprov = C({ token: t, factory: () => new se(), providedIn: "root" }));
    let e = t;
    return e;
  })(),
  se = class {
    parse(t) {
      let i = new We(t);
      return new z(
        i.parseRootSegment(),
        i.parseQueryParams(),
        i.parseFragment(),
      );
    }
    serialize(t) {
      let i = `/${St(t.root, !0)}`,
        n = fi(t.queryParams),
        r = typeof t.fragment == "string" ? `#${hi(t.fragment)}` : "";
      return `${i}${n}${r}`;
    }
  },
  ui = new se();
function re(e) {
  return e.segments.map((t) => Tr(t)).join("/");
}
function St(e, t) {
  if (!e.hasChildren()) return re(e);
  if (t) {
    let i = e.children[p] ? St(e.children[p], !1) : "",
      n = [];
    return (
      Object.entries(e.children).forEach(([r, s]) => {
        r !== p && n.push(`${r}:${St(s, !1)}`);
      }),
      n.length > 0 ? `${i}(${n.join("//")})` : i
    );
  } else {
    let i = li(e, (n, r) =>
      r === p ? [St(e.children[p], !1)] : [`${r}:${St(n, !1)}`],
    );
    return Object.keys(e.children).length === 1 && e.children[p] != null
      ? `${re(e)}/${i[0]}`
      : `${re(e)}/(${i.join("//")})`;
  }
}
function Mr(e) {
  return encodeURIComponent(e)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",");
}
function te(e) {
  return Mr(e).replace(/%3B/gi, ";");
}
function hi(e) {
  return encodeURI(e);
}
function He(e) {
  return Mr(e)
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/%26/gi, "&");
}
function ie(e) {
  return decodeURIComponent(e);
}
function br(e) {
  return ie(e.replace(/\+/g, "%20"));
}
function Tr(e) {
  return `${He(e.path)}${di(e.parameters)}`;
}
function di(e) {
  return Object.entries(e)
    .map(([t, i]) => `;${He(t)}=${He(i)}`)
    .join("");
}
function fi(e) {
  let t = Object.entries(e)
    .map(([i, n]) =>
      Array.isArray(n)
        ? n.map((r) => `${te(i)}=${te(r)}`).join("&")
        : `${te(i)}=${te(n)}`,
    )
    .filter((i) => i);
  return t.length ? `?${t.join("&")}` : "";
}
var pi = /^[^\/()?;#]+/;
function Le(e) {
  let t = e.match(pi);
  return t ? t[0] : "";
}
var gi = /^[^\/()?;=#]+/;
function mi(e) {
  let t = e.match(gi);
  return t ? t[0] : "";
}
var vi = /^[^=?&#]+/;
function bi(e) {
  let t = e.match(vi);
  return t ? t[0] : "";
}
var yi = /^[^&#]+/;
function Ci(e) {
  let t = e.match(yi);
  return t ? t[0] : "";
}
var We = class {
  constructor(t) {
    (this.url = t), (this.remaining = t);
  }
  parseRootSegment() {
    return (
      this.consumeOptional("/"),
      this.remaining === "" ||
      this.peekStartsWith("?") ||
      this.peekStartsWith("#")
        ? new v([], {})
        : new v([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let t = {};
    if (this.consumeOptional("?"))
      do this.parseQueryParam(t);
      while (this.consumeOptional("&"));
    return t;
  }
  parseFragment() {
    return this.consumeOptional("#")
      ? decodeURIComponent(this.remaining)
      : null;
  }
  parseChildren() {
    if (this.remaining === "") return {};
    this.consumeOptional("/");
    let t = [];
    for (
      this.peekStartsWith("(") || t.push(this.parseSegment());
      this.peekStartsWith("/") &&
      !this.peekStartsWith("//") &&
      !this.peekStartsWith("/(");

    )
      this.capture("/"), t.push(this.parseSegment());
    let i = {};
    this.peekStartsWith("/(") &&
      (this.capture("/"), (i = this.parseParens(!0)));
    let n = {};
    return (
      this.peekStartsWith("(") && (n = this.parseParens(!1)),
      (t.length > 0 || Object.keys(i).length > 0) && (n[p] = new v(t, i)),
      n
    );
  }
  parseSegment() {
    let t = Le(this.remaining);
    if (t === "" && this.peekStartsWith(";")) throw new A(4009, !1);
    return this.capture(t), new Q(ie(t), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let t = {};
    for (; this.consumeOptional(";"); ) this.parseParam(t);
    return t;
  }
  parseParam(t) {
    let i = mi(this.remaining);
    if (!i) return;
    this.capture(i);
    let n = "";
    if (this.consumeOptional("=")) {
      let r = Le(this.remaining);
      r && ((n = r), this.capture(n));
    }
    t[ie(i)] = ie(n);
  }
  parseQueryParam(t) {
    let i = bi(this.remaining);
    if (!i) return;
    this.capture(i);
    let n = "";
    if (this.consumeOptional("=")) {
      let o = Ci(this.remaining);
      o && ((n = o), this.capture(n));
    }
    let r = br(i),
      s = br(n);
    if (t.hasOwnProperty(r)) {
      let o = t[r];
      Array.isArray(o) || ((o = [o]), (t[r] = o)), o.push(s);
    } else t[r] = s;
  }
  parseParens(t) {
    let i = {};
    for (
      this.capture("(");
      !this.consumeOptional(")") && this.remaining.length > 0;

    ) {
      let n = Le(this.remaining),
        r = this.remaining[n.length];
      if (r !== "/" && r !== ")" && r !== ";") throw new A(4010, !1);
      let s;
      n.indexOf(":") > -1
        ? ((s = n.slice(0, n.indexOf(":"))), this.capture(s), this.capture(":"))
        : t && (s = p);
      let o = this.parseChildren();
      (i[s] = Object.keys(o).length === 1 ? o[p] : new v([], o)),
        this.consumeOptional("//");
    }
    return i;
  }
  peekStartsWith(t) {
    return this.remaining.startsWith(t);
  }
  consumeOptional(t) {
    return this.peekStartsWith(t)
      ? ((this.remaining = this.remaining.substring(t.length)), !0)
      : !1;
  }
  capture(t) {
    if (!this.consumeOptional(t)) throw new A(4011, !1);
  }
};
function Er(e) {
  return e.segments.length > 0 ? new v([], { [p]: e }) : e;
}
function Or(e) {
  let t = {};
  for (let [n, r] of Object.entries(e.children)) {
    let s = Or(r);
    if (n === p && s.segments.length === 0 && s.hasChildren())
      for (let [o, a] of Object.entries(s.children)) t[o] = a;
    else (s.segments.length > 0 || s.hasChildren()) && (t[n] = s);
  }
  let i = new v(e.segments, t);
  return Si(i);
}
function Si(e) {
  if (e.numberOfChildren === 1 && e.children[p]) {
    let t = e.children[p];
    return new v(e.segments.concat(t.segments), t.children);
  }
  return e;
}
function at(e) {
  return e instanceof z;
}
function wi(e, t, i = null, n = null) {
  let r = Pr(e);
  return Ur(r, t, i, n);
}
function Pr(e) {
  let t;
  function i(s) {
    let o = {};
    for (let l of s.children) {
      let c = i(l);
      o[l.outlet] = c;
    }
    let a = new v(s.url, o);
    return s === e && (t = a), a;
  }
  let n = i(e.root),
    r = Er(n);
  return t ?? r;
}
function Ur(e, t, i, n) {
  let r = e;
  for (; r.parent; ) r = r.parent;
  if (t.length === 0) return ze(r, r, r, i, n);
  let s = Ri(t);
  if (s.toRoot()) return ze(r, r, new v([], {}), i, n);
  let o = Ai(s, r, e),
    a = o.processChildren
      ? At(o.segmentGroup, o.index, s.commands)
      : Nr(o.segmentGroup, o.index, s.commands);
  return ze(r, o.segmentGroup, a, i, n);
}
function oe(e) {
  return typeof e == "object" && e != null && !e.outlets && !e.segmentPath;
}
function Dt(e) {
  return typeof e == "object" && e != null && e.outlets;
}
function ze(e, t, i, n, r) {
  let s = {};
  n &&
    Object.entries(n).forEach(([l, c]) => {
      s[l] = Array.isArray(c) ? c.map((h) => `${h}`) : `${c}`;
    });
  let o;
  e === t ? (o = i) : (o = jr(e, t, i));
  let a = Er(Or(o));
  return new z(a, s, r);
}
function jr(e, t, i) {
  let n = {};
  return (
    Object.entries(e.children).forEach(([r, s]) => {
      s === t ? (n[r] = i) : (n[r] = jr(s, t, i));
    }),
    new v(e.segments, n)
  );
}
var ae = class {
  constructor(t, i, n) {
    if (
      ((this.isAbsolute = t),
      (this.numberOfDoubleDots = i),
      (this.commands = n),
      t && n.length > 0 && oe(n[0]))
    )
      throw new A(4003, !1);
    let r = n.find(Dt);
    if (r && r !== Ir(n)) throw new A(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    );
  }
};
function Ri(e) {
  if (typeof e[0] == "string" && e.length === 1 && e[0] === "/")
    return new ae(!0, 0, e);
  let t = 0,
    i = !1,
    n = e.reduce((r, s, o) => {
      if (typeof s == "object" && s != null) {
        if (s.outlets) {
          let a = {};
          return (
            Object.entries(s.outlets).forEach(([l, c]) => {
              a[l] = typeof c == "string" ? c.split("/") : c;
            }),
            [...r, { outlets: a }]
          );
        }
        if (s.segmentPath) return [...r, s.segmentPath];
      }
      return typeof s != "string"
        ? [...r, s]
        : o === 0
          ? (s.split("/").forEach((a, l) => {
              (l == 0 && a === ".") ||
                (l == 0 && a === ""
                  ? (i = !0)
                  : a === ".."
                    ? t++
                    : a != "" && r.push(a));
            }),
            r)
          : [...r, s];
    }, []);
  return new ae(i, t, n);
}
var it = class {
  constructor(t, i, n) {
    (this.segmentGroup = t), (this.processChildren = i), (this.index = n);
  }
};
function Ai(e, t, i) {
  if (e.isAbsolute) return new it(t, !0, 0);
  if (!i) return new it(t, !1, NaN);
  if (i.parent === null) return new it(i, !0, 0);
  let n = oe(e.commands[0]) ? 0 : 1,
    r = i.segments.length - 1 + n;
  return Ii(i, r, e.numberOfDoubleDots);
}
function Ii(e, t, i) {
  let n = e,
    r = t,
    s = i;
  for (; s > r; ) {
    if (((s -= r), (n = n.parent), !n)) throw new A(4005, !1);
    r = n.segments.length;
  }
  return new it(n, !1, r - s);
}
function _i(e) {
  return Dt(e[0]) ? e[0].outlets : { [p]: e };
}
function Nr(e, t, i) {
  if (((e ??= new v([], {})), e.segments.length === 0 && e.hasChildren()))
    return At(e, t, i);
  let n = Di(e, t, i),
    r = i.slice(n.commandIndex);
  if (n.match && n.pathIndex < e.segments.length) {
    let s = new v(e.segments.slice(0, n.pathIndex), {});
    return (
      (s.children[p] = new v(e.segments.slice(n.pathIndex), e.children)),
      At(s, 0, r)
    );
  } else
    return n.match && r.length === 0
      ? new v(e.segments, {})
      : n.match && !e.hasChildren()
        ? Ge(e, t, i)
        : n.match
          ? At(e, 0, r)
          : Ge(e, t, i);
}
function At(e, t, i) {
  if (i.length === 0) return new v(e.segments, {});
  {
    let n = _i(i),
      r = {};
    if (
      Object.keys(n).some((s) => s !== p) &&
      e.children[p] &&
      e.numberOfChildren === 1 &&
      e.children[p].segments.length === 0
    ) {
      let s = At(e.children[p], t, i);
      return new v(e.segments, s.children);
    }
    return (
      Object.entries(n).forEach(([s, o]) => {
        typeof o == "string" && (o = [o]),
          o !== null && (r[s] = Nr(e.children[s], t, o));
      }),
      Object.entries(e.children).forEach(([s, o]) => {
        n[s] === void 0 && (r[s] = o);
      }),
      new v(e.segments, r)
    );
  }
}
function Di(e, t, i) {
  let n = 0,
    r = t,
    s = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; r < e.segments.length; ) {
    if (n >= i.length) return s;
    let o = e.segments[r],
      a = i[n];
    if (Dt(a)) break;
    let l = `${a}`,
      c = n < i.length - 1 ? i[n + 1] : null;
    if (r > 0 && l === void 0) break;
    if (l && c && typeof c == "object" && c.outlets === void 0) {
      if (!Cr(l, c, o)) return s;
      n += 2;
    } else {
      if (!Cr(l, {}, o)) return s;
      n++;
    }
    r++;
  }
  return { match: !0, pathIndex: r, commandIndex: n };
}
function Ge(e, t, i) {
  let n = e.segments.slice(0, t),
    r = 0;
  for (; r < i.length; ) {
    let s = i[r];
    if (Dt(s)) {
      let l = ki(s.outlets);
      return new v(n, l);
    }
    if (r === 0 && oe(i[0])) {
      let l = e.segments[t];
      n.push(new Q(l.path, yr(i[0]))), r++;
      continue;
    }
    let o = Dt(s) ? s.outlets[p] : `${s}`,
      a = r < i.length - 1 ? i[r + 1] : null;
    o && a && oe(a)
      ? (n.push(new Q(o, yr(a))), (r += 2))
      : (n.push(new Q(o, {})), r++);
  }
  return new v(n, {});
}
function ki(e) {
  let t = {};
  return (
    Object.entries(e).forEach(([i, n]) => {
      typeof n == "string" && (n = [n]),
        n !== null && (t[i] = Ge(new v([], {}), 0, n));
    }),
    t
  );
}
function yr(e) {
  let t = {};
  return Object.entries(e).forEach(([i, n]) => (t[i] = `${n}`)), t;
}
function Cr(e, t, i) {
  return e == i.path && U(t, i.parameters);
}
var It = "imperative",
  S = (function (e) {
    return (
      (e[(e.NavigationStart = 0)] = "NavigationStart"),
      (e[(e.NavigationEnd = 1)] = "NavigationEnd"),
      (e[(e.NavigationCancel = 2)] = "NavigationCancel"),
      (e[(e.NavigationError = 3)] = "NavigationError"),
      (e[(e.RoutesRecognized = 4)] = "RoutesRecognized"),
      (e[(e.ResolveStart = 5)] = "ResolveStart"),
      (e[(e.ResolveEnd = 6)] = "ResolveEnd"),
      (e[(e.GuardsCheckStart = 7)] = "GuardsCheckStart"),
      (e[(e.GuardsCheckEnd = 8)] = "GuardsCheckEnd"),
      (e[(e.RouteConfigLoadStart = 9)] = "RouteConfigLoadStart"),
      (e[(e.RouteConfigLoadEnd = 10)] = "RouteConfigLoadEnd"),
      (e[(e.ChildActivationStart = 11)] = "ChildActivationStart"),
      (e[(e.ChildActivationEnd = 12)] = "ChildActivationEnd"),
      (e[(e.ActivationStart = 13)] = "ActivationStart"),
      (e[(e.ActivationEnd = 14)] = "ActivationEnd"),
      (e[(e.Scroll = 15)] = "Scroll"),
      (e[(e.NavigationSkipped = 16)] = "NavigationSkipped"),
      e
    );
  })(S || {}),
  E = class {
    constructor(t, i) {
      (this.id = t), (this.url = i);
    }
  },
  kt = class extends E {
    constructor(t, i, n = "imperative", r = null) {
      super(t, i),
        (this.type = S.NavigationStart),
        (this.navigationTrigger = n),
        (this.restoredState = r);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  F = class extends E {
    constructor(t, i, n) {
      super(t, i), (this.urlAfterRedirects = n), (this.type = S.NavigationEnd);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  k = (function (e) {
    return (
      (e[(e.Redirect = 0)] = "Redirect"),
      (e[(e.SupersededByNewNavigation = 1)] = "SupersededByNewNavigation"),
      (e[(e.NoDataFromResolver = 2)] = "NoDataFromResolver"),
      (e[(e.GuardRejected = 3)] = "GuardRejected"),
      e
    );
  })(k || {}),
  Qe = (function (e) {
    return (
      (e[(e.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
      (e[(e.IgnoredByUrlHandlingStrategy = 1)] =
        "IgnoredByUrlHandlingStrategy"),
      e
    );
  })(Qe || {}),
  B = class extends E {
    constructor(t, i, n, r) {
      super(t, i),
        (this.reason = n),
        (this.code = r),
        (this.type = S.NavigationCancel);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  K = class extends E {
    constructor(t, i, n, r) {
      super(t, i),
        (this.reason = n),
        (this.code = r),
        (this.type = S.NavigationSkipped);
    }
  },
  xt = class extends E {
    constructor(t, i, n, r) {
      super(t, i),
        (this.error = n),
        (this.target = r),
        (this.type = S.NavigationError);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  ce = class extends E {
    constructor(t, i, n, r) {
      super(t, i),
        (this.urlAfterRedirects = n),
        (this.state = r),
        (this.type = S.RoutesRecognized);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Ze = class extends E {
    constructor(t, i, n, r) {
      super(t, i),
        (this.urlAfterRedirects = n),
        (this.state = r),
        (this.type = S.GuardsCheckStart);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Ke = class extends E {
    constructor(t, i, n, r, s) {
      super(t, i),
        (this.urlAfterRedirects = n),
        (this.state = r),
        (this.shouldActivate = s),
        (this.type = S.GuardsCheckEnd);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  Ye = class extends E {
    constructor(t, i, n, r) {
      super(t, i),
        (this.urlAfterRedirects = n),
        (this.state = r),
        (this.type = S.ResolveStart);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Xe = class extends E {
    constructor(t, i, n, r) {
      super(t, i),
        (this.urlAfterRedirects = n),
        (this.state = r),
        (this.type = S.ResolveEnd);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Je = class {
    constructor(t) {
      (this.route = t), (this.type = S.RouteConfigLoadStart);
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  tn = class {
    constructor(t) {
      (this.route = t), (this.type = S.RouteConfigLoadEnd);
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  en = class {
    constructor(t) {
      (this.snapshot = t), (this.type = S.ChildActivationStart);
    }
    toString() {
      return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  nn = class {
    constructor(t) {
      (this.snapshot = t), (this.type = S.ChildActivationEnd);
    }
    toString() {
      return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  rn = class {
    constructor(t) {
      (this.snapshot = t), (this.type = S.ActivationStart);
    }
    toString() {
      return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  sn = class {
    constructor(t) {
      (this.snapshot = t), (this.type = S.ActivationEnd);
    }
    toString() {
      return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  };
var Mt = class {},
  Tt = class {
    constructor(t) {
      this.url = t;
    }
  };
var on = class {
    constructor() {
      (this.outlet = null),
        (this.route = null),
        (this.injector = null),
        (this.children = new pe()),
        (this.attachRef = null);
    }
  },
  pe = (() => {
    let t = class t {
      constructor() {
        this.contexts = new Map();
      }
      onChildOutletCreated(n, r) {
        let s = this.getOrCreateContext(n);
        (s.outlet = r), this.contexts.set(n, s);
      }
      onChildOutletDestroyed(n) {
        let r = this.getContext(n);
        r && ((r.outlet = null), (r.attachRef = null));
      }
      onOutletDeactivated() {
        let n = this.contexts;
        return (this.contexts = new Map()), n;
      }
      onOutletReAttached(n) {
        this.contexts = n;
      }
      getOrCreateContext(n) {
        let r = this.getContext(n);
        return r || ((r = new on()), this.contexts.set(n, r)), r;
      }
      getContext(n) {
        return this.contexts.get(n) || null;
      }
    };
    (t.ɵfac = function (r) {
      return new (r || t)();
    }),
      (t.ɵprov = C({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  le = class {
    constructor(t) {
      this._root = t;
    }
    get root() {
      return this._root.value;
    }
    parent(t) {
      let i = this.pathFromRoot(t);
      return i.length > 1 ? i[i.length - 2] : null;
    }
    children(t) {
      let i = an(t, this._root);
      return i ? i.children.map((n) => n.value) : [];
    }
    firstChild(t) {
      let i = an(t, this._root);
      return i && i.children.length > 0 ? i.children[0].value : null;
    }
    siblings(t) {
      let i = cn(t, this._root);
      return i.length < 2
        ? []
        : i[i.length - 2].children.map((r) => r.value).filter((r) => r !== t);
    }
    pathFromRoot(t) {
      return cn(t, this._root).map((i) => i.value);
    }
  };
function an(e, t) {
  if (e === t.value) return t;
  for (let i of t.children) {
    let n = an(e, i);
    if (n) return n;
  }
  return null;
}
function cn(e, t) {
  if (e === t.value) return [t];
  for (let i of t.children) {
    let n = cn(e, i);
    if (n.length) return n.unshift(t), n;
  }
  return [];
}
var D = class {
  constructor(t, i) {
    (this.value = t), (this.children = i);
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function rt(e) {
  let t = {};
  return e && e.children.forEach((i) => (t[i.value.outlet] = i)), t;
}
var ue = class extends le {
  constructor(t, i) {
    super(t), (this.snapshot = i), yn(this, t);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function $r(e) {
  let t = xi(e),
    i = new x([new Q("", {})]),
    n = new x({}),
    r = new x({}),
    s = new x({}),
    o = new x(""),
    a = new Y(i, n, s, o, r, p, e, t.root);
  return (a.snapshot = t.root), new ue(new D(a, []), t);
}
function xi(e) {
  let t = {},
    i = {},
    n = {},
    r = "",
    s = new Et([], t, n, r, i, p, e, null, {});
  return new he("", new D(s, []));
}
var Y = class {
  constructor(t, i, n, r, s, o, a, l) {
    (this.urlSubject = t),
      (this.paramsSubject = i),
      (this.queryParamsSubject = n),
      (this.fragmentSubject = r),
      (this.dataSubject = s),
      (this.outlet = o),
      (this.component = a),
      (this._futureSnapshot = l),
      (this.title = this.dataSubject?.pipe(b((c) => c[Ut])) ?? d(void 0)),
      (this.url = t),
      (this.params = i),
      (this.queryParams = n),
      (this.fragment = r),
      (this.data = s);
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    return (
      (this._paramMap ??= this.params.pipe(b((t) => ot(t)))), this._paramMap
    );
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(b((t) => ot(t)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function bn(e, t, i = "emptyOnly") {
  let n,
    { routeConfig: r } = e;
  return (
    t !== null &&
    (i === "always" ||
      r?.path === "" ||
      (!t.component && !t.routeConfig?.loadComponent))
      ? (n = {
          params: u(u({}, t.params), e.params),
          data: u(u({}, t.data), e.data),
          resolve: u(u(u(u({}, e.data), t.data), r?.data), e._resolvedData),
        })
      : (n = {
          params: u({}, e.params),
          data: u({}, e.data),
          resolve: u(u({}, e.data), e._resolvedData ?? {}),
        }),
    r && zr(r) && (n.resolve[Ut] = r.title),
    n
  );
}
var Et = class {
    get title() {
      return this.data?.[Ut];
    }
    constructor(t, i, n, r, s, o, a, l, c) {
      (this.url = t),
        (this.params = i),
        (this.queryParams = n),
        (this.fragment = r),
        (this.data = s),
        (this.outlet = o),
        (this.component = a),
        (this.routeConfig = l),
        (this._resolve = c);
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return (this._paramMap ??= ot(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= ot(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      let t = this.url.map((n) => n.toString()).join("/"),
        i = this.routeConfig ? this.routeConfig.path : "";
      return `Route(url:'${t}', path:'${i}')`;
    }
  },
  he = class extends le {
    constructor(t, i) {
      super(i), (this.url = t), yn(this, i);
    }
    toString() {
      return Lr(this._root);
    }
  };
function yn(e, t) {
  (t.value._routerState = e), t.children.forEach((i) => yn(e, i));
}
function Lr(e) {
  let t = e.children.length > 0 ? ` { ${e.children.map(Lr).join(", ")} } ` : "";
  return `${e.value}${t}`;
}
function Fe(e) {
  if (e.snapshot) {
    let t = e.snapshot,
      i = e._futureSnapshot;
    (e.snapshot = i),
      U(t.queryParams, i.queryParams) ||
        e.queryParamsSubject.next(i.queryParams),
      t.fragment !== i.fragment && e.fragmentSubject.next(i.fragment),
      U(t.params, i.params) || e.paramsSubject.next(i.params),
      ii(t.url, i.url) || e.urlSubject.next(i.url),
      U(t.data, i.data) || e.dataSubject.next(i.data);
  } else
    (e.snapshot = e._futureSnapshot),
      e.dataSubject.next(e._futureSnapshot.data);
}
function ln(e, t) {
  let i = U(e.params, t.params) && ci(e.url, t.url),
    n = !e.parent != !t.parent;
  return i && !n && (!e.parent || ln(e.parent, t.parent));
}
function zr(e) {
  return typeof e.title == "string" || e.title === null;
}
var Mi = (() => {
    let t = class t {
      constructor() {
        (this.activated = null),
          (this._activatedRoute = null),
          (this.name = p),
          (this.activateEvents = new mt()),
          (this.deactivateEvents = new mt()),
          (this.attachEvents = new mt()),
          (this.detachEvents = new mt()),
          (this.parentContexts = f(pe)),
          (this.location = f(Hn)),
          (this.changeDetector = f(Ct)),
          (this.environmentInjector = f(qt)),
          (this.inputBinder = f(ge, { optional: !0 })),
          (this.supportsBindingToComponentInputs = !0);
      }
      get activatedComponentRef() {
        return this.activated;
      }
      ngOnChanges(n) {
        if (n.name) {
          let { firstChange: r, previousValue: s } = n.name;
          if (r) return;
          this.isTrackedInParentContexts(s) &&
            (this.deactivate(), this.parentContexts.onChildOutletDestroyed(s)),
            this.initializeOutletWithName();
        }
      }
      ngOnDestroy() {
        this.isTrackedInParentContexts(this.name) &&
          this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(n) {
        return this.parentContexts.getContext(n)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if (
          (this.parentContexts.onChildOutletCreated(this.name, this),
          this.activated)
        )
          return;
        let n = this.parentContexts.getContext(this.name);
        n?.route &&
          (n.attachRef
            ? this.attach(n.attachRef, n.route)
            : this.activateWith(n.route, n.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new A(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new A(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new A(4012, !1);
        this.location.detach();
        let n = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(n.instance),
          n
        );
      }
      attach(n, r) {
        (this.activated = n),
          (this._activatedRoute = r),
          this.location.insert(n.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(n.instance);
      }
      deactivate() {
        if (this.activated) {
          let n = this.component;
          this.activated.destroy(),
            (this.activated = null),
            (this._activatedRoute = null),
            this.deactivateEvents.emit(n);
        }
      }
      activateWith(n, r) {
        if (this.isActivated) throw new A(4013, !1);
        this._activatedRoute = n;
        let s = this.location,
          a = n.snapshot.component,
          l = this.parentContexts.getOrCreateContext(this.name).children,
          c = new un(n, l, s.injector);
        (this.activated = s.createComponent(a, {
          index: s.length,
          injector: c,
          environmentInjector: r ?? this.environmentInjector,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
    };
    (t.ɵfac = function (r) {
      return new (r || t)();
    }),
      (t.ɵdir = H({
        type: t,
        selectors: [["router-outlet"]],
        inputs: { name: "name" },
        outputs: {
          activateEvents: "activate",
          deactivateEvents: "deactivate",
          attachEvents: "attach",
          detachEvents: "detach",
        },
        exportAs: ["outlet"],
        standalone: !0,
        features: [Ae],
      }));
    let e = t;
    return e;
  })(),
  un = class {
    constructor(t, i, n) {
      (this.route = t), (this.childContexts = i), (this.parent = n);
    }
    get(t, i) {
      return t === Y
        ? this.route
        : t === pe
          ? this.childContexts
          : this.parent.get(t, i);
    }
  },
  ge = new T(""),
  Sr = (() => {
    let t = class t {
      constructor() {
        this.outletDataSubscriptions = new Map();
      }
      bindActivatedRouteToOutletComponent(n) {
        this.unsubscribeFromRouteData(n), this.subscribeToRouteData(n);
      }
      unsubscribeFromRouteData(n) {
        this.outletDataSubscriptions.get(n)?.unsubscribe(),
          this.outletDataSubscriptions.delete(n);
      }
      subscribeToRouteData(n) {
        let { activatedRoute: r } = n,
          s = Lt([r.queryParams, r.params, r.data])
            .pipe(
              P(
                ([o, a, l], c) => (
                  (l = u(u(u({}, o), a), l)),
                  c === 0 ? d(l) : Promise.resolve(l)
                ),
              ),
            )
            .subscribe((o) => {
              if (
                !n.isActivated ||
                !n.activatedComponentRef ||
                n.activatedRoute !== r ||
                r.component === null
              ) {
                this.unsubscribeFromRouteData(n);
                return;
              }
              let a = sr(r.component);
              if (!a) {
                this.unsubscribeFromRouteData(n);
                return;
              }
              for (let { templateName: l } of a.inputs)
                n.activatedComponentRef.setInput(l, o[l]);
            });
        this.outletDataSubscriptions.set(n, s);
      }
    };
    (t.ɵfac = function (r) {
      return new (r || t)();
    }),
      (t.ɵprov = C({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })();
function Ti(e, t, i) {
  let n = Ot(e, t._root, i ? i._root : void 0);
  return new ue(n, t);
}
function Ot(e, t, i) {
  if (i && e.shouldReuseRoute(t.value, i.value.snapshot)) {
    let n = i.value;
    n._futureSnapshot = t.value;
    let r = Ei(e, t, i);
    return new D(n, r);
  } else {
    if (e.shouldAttach(t.value)) {
      let s = e.retrieve(t.value);
      if (s !== null) {
        let o = s.route;
        return (
          (o.value._futureSnapshot = t.value),
          (o.children = t.children.map((a) => Ot(e, a))),
          o
        );
      }
    }
    let n = Oi(t.value),
      r = t.children.map((s) => Ot(e, s));
    return new D(n, r);
  }
}
function Ei(e, t, i) {
  return t.children.map((n) => {
    for (let r of i.children)
      if (e.shouldReuseRoute(n.value, r.value.snapshot)) return Ot(e, n, r);
    return Ot(e, n);
  });
}
function Oi(e) {
  return new Y(
    new x(e.url),
    new x(e.params),
    new x(e.queryParams),
    new x(e.fragment),
    new x(e.data),
    e.outlet,
    e.component,
    e,
  );
}
var Fr = "ngNavigationCancelingError";
function Br(e, t) {
  let { redirectTo: i, navigationBehaviorOptions: n } = at(t)
      ? { redirectTo: t, navigationBehaviorOptions: void 0 }
      : t,
    r = qr(!1, k.Redirect);
  return (r.url = i), (r.navigationBehaviorOptions = n), r;
}
function qr(e, t) {
  let i = new Error(`NavigationCancelingError: ${e || ""}`);
  return (i[Fr] = !0), (i.cancellationCode = t), i;
}
function Pi(e) {
  return Vr(e) && at(e.url);
}
function Vr(e) {
  return !!e && e[Fr];
}
var Ui = (() => {
  let t = class t {};
  (t.ɵfac = function (r) {
    return new (r || t)();
  }),
    (t.ɵcmp = gt({
      type: t,
      selectors: [["ng-component"]],
      standalone: !0,
      features: [yt],
      decls: 1,
      vars: 0,
      template: function (r, s) {
        r & 1 && Gt(0, "router-outlet");
      },
      dependencies: [Mi],
      encapsulation: 2,
    }));
  let e = t;
  return e;
})();
function ji(e, t) {
  return (
    e.providers &&
      !e._injector &&
      (e._injector = Zn(e.providers, t, `Route: ${e.path}`)),
    e._injector ?? t
  );
}
function Cn(e) {
  let t = e.children && e.children.map(Cn),
    i = t ? _(u({}, e), { children: t }) : u({}, e);
  return (
    !i.component &&
      !i.loadComponent &&
      (t || i.loadChildren) &&
      i.outlet &&
      i.outlet !== p &&
      (i.component = Ui),
    i
  );
}
function j(e) {
  return e.outlet || p;
}
function Ni(e, t) {
  let i = e.filter((n) => j(n) === t);
  return i.push(...e.filter((n) => j(n) !== t)), i;
}
function jt(e) {
  if (!e) return null;
  if (e.routeConfig?._injector) return e.routeConfig._injector;
  for (let t = e.parent; t; t = t.parent) {
    let i = t.routeConfig;
    if (i?._loadedInjector) return i._loadedInjector;
    if (i?._injector) return i._injector;
  }
  return null;
}
var $i = (e, t, i, n) =>
    b(
      (r) => (
        new hn(t, r.targetRouterState, r.currentRouterState, i, n).activate(e),
        r
      ),
    ),
  hn = class {
    constructor(t, i, n, r, s) {
      (this.routeReuseStrategy = t),
        (this.futureState = i),
        (this.currState = n),
        (this.forwardEvent = r),
        (this.inputBindingEnabled = s);
    }
    activate(t) {
      let i = this.futureState._root,
        n = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(i, n, t),
        Fe(this.futureState.root),
        this.activateChildRoutes(i, n, t);
    }
    deactivateChildRoutes(t, i, n) {
      let r = rt(i);
      t.children.forEach((s) => {
        let o = s.value.outlet;
        this.deactivateRoutes(s, r[o], n), delete r[o];
      }),
        Object.values(r).forEach((s) => {
          this.deactivateRouteAndItsChildren(s, n);
        });
    }
    deactivateRoutes(t, i, n) {
      let r = t.value,
        s = i ? i.value : null;
      if (r === s)
        if (r.component) {
          let o = n.getContext(r.outlet);
          o && this.deactivateChildRoutes(t, i, o.children);
        } else this.deactivateChildRoutes(t, i, n);
      else s && this.deactivateRouteAndItsChildren(i, n);
    }
    deactivateRouteAndItsChildren(t, i) {
      t.value.component &&
      this.routeReuseStrategy.shouldDetach(t.value.snapshot)
        ? this.detachAndStoreRouteSubtree(t, i)
        : this.deactivateRouteAndOutlet(t, i);
    }
    detachAndStoreRouteSubtree(t, i) {
      let n = i.getContext(t.value.outlet),
        r = n && t.value.component ? n.children : i,
        s = rt(t);
      for (let o of Object.values(s)) this.deactivateRouteAndItsChildren(o, r);
      if (n && n.outlet) {
        let o = n.outlet.detach(),
          a = n.children.onOutletDeactivated();
        this.routeReuseStrategy.store(t.value.snapshot, {
          componentRef: o,
          route: t,
          contexts: a,
        });
      }
    }
    deactivateRouteAndOutlet(t, i) {
      let n = i.getContext(t.value.outlet),
        r = n && t.value.component ? n.children : i,
        s = rt(t);
      for (let o of Object.values(s)) this.deactivateRouteAndItsChildren(o, r);
      n &&
        (n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated()),
        (n.attachRef = null),
        (n.route = null));
    }
    activateChildRoutes(t, i, n) {
      let r = rt(i);
      t.children.forEach((s) => {
        this.activateRoutes(s, r[s.value.outlet], n),
          this.forwardEvent(new sn(s.value.snapshot));
      }),
        t.children.length && this.forwardEvent(new nn(t.value.snapshot));
    }
    activateRoutes(t, i, n) {
      let r = t.value,
        s = i ? i.value : null;
      if ((Fe(r), r === s))
        if (r.component) {
          let o = n.getOrCreateContext(r.outlet);
          this.activateChildRoutes(t, i, o.children);
        } else this.activateChildRoutes(t, i, n);
      else if (r.component) {
        let o = n.getOrCreateContext(r.outlet);
        if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
          let a = this.routeReuseStrategy.retrieve(r.snapshot);
          this.routeReuseStrategy.store(r.snapshot, null),
            o.children.onOutletReAttached(a.contexts),
            (o.attachRef = a.componentRef),
            (o.route = a.route.value),
            o.outlet && o.outlet.attach(a.componentRef, a.route.value),
            Fe(a.route.value),
            this.activateChildRoutes(t, null, o.children);
        } else {
          let a = jt(r.snapshot);
          (o.attachRef = null),
            (o.route = r),
            (o.injector = a),
            o.outlet && o.outlet.activateWith(r, o.injector),
            this.activateChildRoutes(t, null, o.children);
        }
      } else this.activateChildRoutes(t, null, n);
    }
  },
  de = class {
    constructor(t) {
      (this.path = t), (this.route = this.path[this.path.length - 1]);
    }
  },
  st = class {
    constructor(t, i) {
      (this.component = t), (this.route = i);
    }
  };
function Li(e, t, i) {
  let n = e._root,
    r = t ? t._root : null;
  return wt(n, r, i, [n.value]);
}
function zi(e) {
  let t = e.routeConfig ? e.routeConfig.canActivateChild : null;
  return !t || t.length === 0 ? null : { node: e, guards: t };
}
function lt(e, t) {
  let i = Symbol(),
    n = t.get(e, i);
  return n === i ? (typeof e == "function" && !Nn(e) ? e : t.get(e)) : n;
}
function wt(
  e,
  t,
  i,
  n,
  r = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let s = rt(t);
  return (
    e.children.forEach((o) => {
      Fi(o, s[o.value.outlet], i, n.concat([o.value]), r),
        delete s[o.value.outlet];
    }),
    Object.entries(s).forEach(([o, a]) => _t(a, i.getContext(o), r)),
    r
  );
}
function Fi(
  e,
  t,
  i,
  n,
  r = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let s = e.value,
    o = t ? t.value : null,
    a = i ? i.getContext(e.value.outlet) : null;
  if (o && s.routeConfig === o.routeConfig) {
    let l = Bi(o, s, s.routeConfig.runGuardsAndResolvers);
    l
      ? r.canActivateChecks.push(new de(n))
      : ((s.data = o.data), (s._resolvedData = o._resolvedData)),
      s.component ? wt(e, t, a ? a.children : null, n, r) : wt(e, t, i, n, r),
      l &&
        a &&
        a.outlet &&
        a.outlet.isActivated &&
        r.canDeactivateChecks.push(new st(a.outlet.component, o));
  } else
    o && _t(t, a, r),
      r.canActivateChecks.push(new de(n)),
      s.component
        ? wt(e, null, a ? a.children : null, n, r)
        : wt(e, null, i, n, r);
  return r;
}
function Bi(e, t, i) {
  if (typeof i == "function") return i(e, t);
  switch (i) {
    case "pathParamsChange":
      return !Z(e.url, t.url);
    case "pathParamsOrQueryParamsChange":
      return !Z(e.url, t.url) || !U(e.queryParams, t.queryParams);
    case "always":
      return !0;
    case "paramsOrQueryParamsChange":
      return !ln(e, t) || !U(e.queryParams, t.queryParams);
    case "paramsChange":
    default:
      return !ln(e, t);
  }
}
function _t(e, t, i) {
  let n = rt(e),
    r = e.value;
  Object.entries(n).forEach(([s, o]) => {
    r.component
      ? t
        ? _t(o, t.children.getContext(s), i)
        : _t(o, null, i)
      : _t(o, t, i);
  }),
    r.component
      ? t && t.outlet && t.outlet.isActivated
        ? i.canDeactivateChecks.push(new st(t.outlet.component, r))
        : i.canDeactivateChecks.push(new st(null, r))
      : i.canDeactivateChecks.push(new st(null, r));
}
function Nt(e) {
  return typeof e == "function";
}
function qi(e) {
  return typeof e == "boolean";
}
function Vi(e) {
  return e && Nt(e.canLoad);
}
function Hi(e) {
  return e && Nt(e.canActivate);
}
function Wi(e) {
  return e && Nt(e.canActivateChild);
}
function Gi(e) {
  return e && Nt(e.canDeactivate);
}
function Qi(e) {
  return e && Nt(e.canMatch);
}
function Hr(e) {
  return e instanceof Tn || e?.name === "EmptyError";
}
var ee = Symbol("INITIAL_VALUE");
function ct() {
  return P((e) =>
    Lt(e.map((t) => t.pipe(tt(1), jn(ee)))).pipe(
      b((t) => {
        for (let i of t)
          if (i !== !0) {
            if (i === ee) return ee;
            if (i === !1 || i instanceof z) return i;
          }
        return !0;
      }),
      X((t) => t !== ee),
      tt(1),
    ),
  );
}
function Zi(e, t) {
  return M((i) => {
    let {
      targetSnapshot: n,
      currentSnapshot: r,
      guards: { canActivateChecks: s, canDeactivateChecks: o },
    } = i;
    return o.length === 0 && s.length === 0
      ? d(_(u({}, i), { guardsResult: !0 }))
      : Ki(o, n, r, e).pipe(
          M((a) => (a && qi(a) ? Yi(n, s, e, t) : d(a))),
          b((a) => _(u({}, i), { guardsResult: a })),
        );
  });
}
function Ki(e, t, i, n) {
  return O(e).pipe(
    M((r) => ns(r.component, r.route, i, t, n)),
    L((r) => r !== !0, !0),
  );
}
function Yi(e, t, i, n) {
  return O(t).pipe(
    pt((r) =>
      En(
        Ji(r.route.parent, n),
        Xi(r.route, n),
        es(e, r.path, i),
        ts(e, r.route, i),
      ),
    ),
    L((r) => r !== !0, !0),
  );
}
function Xi(e, t) {
  return e !== null && t && t(new rn(e)), d(!0);
}
function Ji(e, t) {
  return e !== null && t && t(new en(e)), d(!0);
}
function ts(e, t, i) {
  let n = t.routeConfig ? t.routeConfig.canActivate : null;
  if (!n || n.length === 0) return d(!0);
  let r = n.map((s) =>
    Ce(() => {
      let o = jt(t) ?? i,
        a = lt(s, o),
        l = Hi(a) ? a.canActivate(t, e) : W(o, () => a(t, e));
      return q(l).pipe(L());
    }),
  );
  return d(r).pipe(ct());
}
function es(e, t, i) {
  let n = t[t.length - 1],
    s = t
      .slice(0, t.length - 1)
      .reverse()
      .map((o) => zi(o))
      .filter((o) => o !== null)
      .map((o) =>
        Ce(() => {
          let a = o.guards.map((l) => {
            let c = jt(o.node) ?? i,
              h = lt(l, c),
              m = Wi(h) ? h.canActivateChild(n, e) : W(c, () => h(n, e));
            return q(m).pipe(L());
          });
          return d(a).pipe(ct());
        }),
      );
  return d(s).pipe(ct());
}
function ns(e, t, i, n, r) {
  let s = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
  if (!s || s.length === 0) return d(!0);
  let o = s.map((a) => {
    let l = jt(t) ?? r,
      c = lt(a, l),
      h = Gi(c) ? c.canDeactivate(e, t, i, n) : W(l, () => c(e, t, i, n));
    return q(h).pipe(L());
  });
  return d(o).pipe(ct());
}
function rs(e, t, i, n) {
  let r = t.canLoad;
  if (r === void 0 || r.length === 0) return d(!0);
  let s = r.map((o) => {
    let a = lt(o, e),
      l = Vi(a) ? a.canLoad(t, i) : W(e, () => a(t, i));
    return q(l);
  });
  return d(s).pipe(ct(), Wr(n));
}
function Wr(e) {
  return xn(
    w((t) => {
      if (at(t)) throw Br(e, t);
    }),
    b((t) => t === !0),
  );
}
function is(e, t, i, n) {
  let r = t.canMatch;
  if (!r || r.length === 0) return d(!0);
  let s = r.map((o) => {
    let a = lt(o, e),
      l = Qi(a) ? a.canMatch(t, i) : W(e, () => a(t, i));
    return q(l);
  });
  return d(s).pipe(ct(), Wr(n));
}
var Pt = class {
    constructor(t) {
      this.segmentGroup = t || null;
    }
  },
  fe = class extends Error {
    constructor(t) {
      super(), (this.urlTree = t);
    }
  };
function nt(e) {
  return ft(new Pt(e));
}
function ss(e) {
  return ft(new A(4e3, !1));
}
function os(e) {
  return ft(qr(!1, k.GuardRejected));
}
var dn = class {
    constructor(t, i) {
      (this.urlSerializer = t), (this.urlTree = i);
    }
    lineralizeSegments(t, i) {
      let n = [],
        r = i.root;
      for (;;) {
        if (((n = n.concat(r.segments)), r.numberOfChildren === 0)) return d(n);
        if (r.numberOfChildren > 1 || !r.children[p]) return ss(t.redirectTo);
        r = r.children[p];
      }
    }
    applyRedirectCommands(t, i, n) {
      let r = this.applyRedirectCreateUrlTree(
        i,
        this.urlSerializer.parse(i),
        t,
        n,
      );
      if (i.startsWith("/")) throw new fe(r);
      return r;
    }
    applyRedirectCreateUrlTree(t, i, n, r) {
      let s = this.createSegmentGroup(t, i.root, n, r);
      return new z(
        s,
        this.createQueryParams(i.queryParams, this.urlTree.queryParams),
        i.fragment,
      );
    }
    createQueryParams(t, i) {
      let n = {};
      return (
        Object.entries(t).forEach(([r, s]) => {
          if (typeof s == "string" && s.startsWith(":")) {
            let a = s.substring(1);
            n[r] = i[a];
          } else n[r] = s;
        }),
        n
      );
    }
    createSegmentGroup(t, i, n, r) {
      let s = this.createSegments(t, i.segments, n, r),
        o = {};
      return (
        Object.entries(i.children).forEach(([a, l]) => {
          o[a] = this.createSegmentGroup(t, l, n, r);
        }),
        new v(s, o)
      );
    }
    createSegments(t, i, n, r) {
      return i.map((s) =>
        s.path.startsWith(":")
          ? this.findPosParam(t, s, r)
          : this.findOrReturn(s, n),
      );
    }
    findPosParam(t, i, n) {
      let r = n[i.path.substring(1)];
      if (!r) throw new A(4001, !1);
      return r;
    }
    findOrReturn(t, i) {
      let n = 0;
      for (let r of i) {
        if (r.path === t.path) return i.splice(n), r;
        n++;
      }
      return t;
    }
  },
  fn = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function as(e, t, i, n, r) {
  let s = Sn(e, t, i);
  return s.matched
    ? ((n = ji(t, n)),
      is(n, t, i, r).pipe(b((o) => (o === !0 ? s : u({}, fn)))))
    : d(s);
}
function Sn(e, t, i) {
  if (t.path === "**") return cs(i);
  if (t.path === "")
    return t.pathMatch === "full" && (e.hasChildren() || i.length > 0)
      ? u({}, fn)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: i,
          parameters: {},
          positionalParamSegments: {},
        };
  let r = (t.matcher || ri)(i, e, t);
  if (!r) return u({}, fn);
  let s = {};
  Object.entries(r.posParams ?? {}).forEach(([a, l]) => {
    s[a] = l.path;
  });
  let o =
    r.consumed.length > 0
      ? u(u({}, s), r.consumed[r.consumed.length - 1].parameters)
      : s;
  return {
    matched: !0,
    consumedSegments: r.consumed,
    remainingSegments: i.slice(r.consumed.length),
    parameters: o,
    positionalParamSegments: r.posParams ?? {},
  };
}
function cs(e) {
  return {
    matched: !0,
    parameters: e.length > 0 ? Ir(e).parameters : {},
    consumedSegments: e,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function wr(e, t, i, n) {
  return i.length > 0 && hs(e, i, n)
    ? {
        segmentGroup: new v(t, us(n, new v(i, e.children))),
        slicedSegments: [],
      }
    : i.length === 0 && ds(e, i, n)
      ? {
          segmentGroup: new v(e.segments, ls(e, i, n, e.children)),
          slicedSegments: i,
        }
      : { segmentGroup: new v(e.segments, e.children), slicedSegments: i };
}
function ls(e, t, i, n) {
  let r = {};
  for (let s of i)
    if (me(e, t, s) && !n[j(s)]) {
      let o = new v([], {});
      r[j(s)] = o;
    }
  return u(u({}, n), r);
}
function us(e, t) {
  let i = {};
  i[p] = t;
  for (let n of e)
    if (n.path === "" && j(n) !== p) {
      let r = new v([], {});
      i[j(n)] = r;
    }
  return i;
}
function hs(e, t, i) {
  return i.some((n) => me(e, t, n) && j(n) !== p);
}
function ds(e, t, i) {
  return i.some((n) => me(e, t, n));
}
function me(e, t, i) {
  return (e.hasChildren() || t.length > 0) && i.pathMatch === "full"
    ? !1
    : i.path === "";
}
function fs(e, t, i, n) {
  return j(e) !== n && (n === p || !me(t, i, e)) ? !1 : Sn(t, e, i).matched;
}
function ps(e, t, i) {
  return t.length === 0 && !e.children[i];
}
var pn = class {};
function gs(e, t, i, n, r, s, o = "emptyOnly") {
  return new gn(e, t, i, n, r, o, s).recognize();
}
var ms = 31,
  gn = class {
    constructor(t, i, n, r, s, o, a) {
      (this.injector = t),
        (this.configLoader = i),
        (this.rootComponentType = n),
        (this.config = r),
        (this.urlTree = s),
        (this.paramsInheritanceStrategy = o),
        (this.urlSerializer = a),
        (this.applyRedirects = new dn(this.urlSerializer, this.urlTree)),
        (this.absoluteRedirectCount = 0),
        (this.allowRedirects = !0);
    }
    noMatchError(t) {
      return new A(4002, `'${t.segmentGroup}'`);
    }
    recognize() {
      let t = wr(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(t).pipe(
        b((i) => {
          let n = new Et(
              [],
              Object.freeze({}),
              Object.freeze(u({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              {},
              p,
              this.rootComponentType,
              null,
              {},
            ),
            r = new D(n, i),
            s = new he("", r),
            o = wi(n, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (o.queryParams = this.urlTree.queryParams),
            (s.url = this.urlSerializer.serialize(o)),
            this.inheritParamsAndData(s._root, null),
            { state: s, tree: o }
          );
        }),
      );
    }
    match(t) {
      return this.processSegmentGroup(this.injector, this.config, t, p).pipe(
        J((n) => {
          if (n instanceof fe)
            return (this.urlTree = n.urlTree), this.match(n.urlTree.root);
          throw n instanceof Pt ? this.noMatchError(n) : n;
        }),
      );
    }
    inheritParamsAndData(t, i) {
      let n = t.value,
        r = bn(n, i, this.paramsInheritanceStrategy);
      (n.params = Object.freeze(r.params)),
        (n.data = Object.freeze(r.data)),
        t.children.forEach((s) => this.inheritParamsAndData(s, n));
    }
    processSegmentGroup(t, i, n, r) {
      return n.segments.length === 0 && n.hasChildren()
        ? this.processChildren(t, i, n)
        : this.processSegment(t, i, n, n.segments, r, !0).pipe(
            b((s) => (s instanceof D ? [s] : [])),
          );
    }
    processChildren(t, i, n) {
      let r = [];
      for (let s of Object.keys(n.children))
        s === "primary" ? r.unshift(s) : r.push(s);
      return O(r).pipe(
        pt((s) => {
          let o = n.children[s],
            a = Ni(i, s);
          return this.processSegmentGroup(t, a, o, s);
        }),
        Un((s, o) => (s.push(...o), s)),
        Se(null),
        Pn(),
        M((s) => {
          if (s === null) return nt(n);
          let o = Gr(s);
          return vs(o), d(o);
        }),
      );
    }
    processSegment(t, i, n, r, s, o) {
      return O(i).pipe(
        pt((a) =>
          this.processSegmentAgainstRoute(
            a._injector ?? t,
            i,
            a,
            n,
            r,
            s,
            o,
          ).pipe(
            J((l) => {
              if (l instanceof Pt) return d(null);
              throw l;
            }),
          ),
        ),
        L((a) => !!a),
        J((a) => {
          if (Hr(a)) return ps(n, r, s) ? d(new pn()) : nt(n);
          throw a;
        }),
      );
    }
    processSegmentAgainstRoute(t, i, n, r, s, o, a) {
      return fs(n, r, s, o)
        ? n.redirectTo === void 0
          ? this.matchSegmentAgainstRoute(t, r, n, s, o)
          : this.allowRedirects && a
            ? this.expandSegmentAgainstRouteUsingRedirect(t, r, i, n, s, o)
            : nt(r)
        : nt(r);
    }
    expandSegmentAgainstRouteUsingRedirect(t, i, n, r, s, o) {
      let {
        matched: a,
        consumedSegments: l,
        positionalParamSegments: c,
        remainingSegments: h,
      } = Sn(i, r, s);
      if (!a) return nt(i);
      r.redirectTo.startsWith("/") &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > ms && (this.allowRedirects = !1));
      let m = this.applyRedirects.applyRedirectCommands(l, r.redirectTo, c);
      return this.applyRedirects
        .lineralizeSegments(r, m)
        .pipe(M((g) => this.processSegment(t, n, i, g.concat(h), o, !1)));
    }
    matchSegmentAgainstRoute(t, i, n, r, s) {
      let o = as(i, n, r, t, this.urlSerializer);
      return (
        n.path === "**" && (i.children = {}),
        o.pipe(
          P((a) =>
            a.matched
              ? ((t = n._injector ?? t),
                this.getChildConfig(t, n, r).pipe(
                  P(({ routes: l }) => {
                    let c = n._loadedInjector ?? t,
                      {
                        consumedSegments: h,
                        remainingSegments: m,
                        parameters: g,
                      } = a,
                      y = new Et(
                        h,
                        g,
                        Object.freeze(u({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        ys(n),
                        j(n),
                        n.component ?? n._loadedComponent ?? null,
                        n,
                        Cs(n),
                      ),
                      { segmentGroup: ht, slicedSegments: dt } = wr(i, h, m, l);
                    if (dt.length === 0 && ht.hasChildren())
                      return this.processChildren(c, l, ht).pipe(
                        b((V) => (V === null ? null : new D(y, V))),
                      );
                    if (l.length === 0 && dt.length === 0)
                      return d(new D(y, []));
                    let ve = j(n) === s;
                    return this.processSegment(
                      c,
                      l,
                      ht,
                      dt,
                      ve ? p : s,
                      !0,
                    ).pipe(b((V) => new D(y, V instanceof D ? [V] : [])));
                  }),
                ))
              : nt(i),
          ),
        )
      );
    }
    getChildConfig(t, i, n) {
      return i.children
        ? d({ routes: i.children, injector: t })
        : i.loadChildren
          ? i._loadedRoutes !== void 0
            ? d({ routes: i._loadedRoutes, injector: i._loadedInjector })
            : rs(t, i, n, this.urlSerializer).pipe(
                M((r) =>
                  r
                    ? this.configLoader.loadChildren(t, i).pipe(
                        w((s) => {
                          (i._loadedRoutes = s.routes),
                            (i._loadedInjector = s.injector);
                        }),
                      )
                    : os(i),
                ),
              )
          : d({ routes: [], injector: t });
    }
  };
function vs(e) {
  e.sort((t, i) =>
    t.value.outlet === p
      ? -1
      : i.value.outlet === p
        ? 1
        : t.value.outlet.localeCompare(i.value.outlet),
  );
}
function bs(e) {
  let t = e.value.routeConfig;
  return t && t.path === "";
}
function Gr(e) {
  let t = [],
    i = new Set();
  for (let n of e) {
    if (!bs(n)) {
      t.push(n);
      continue;
    }
    let r = t.find((s) => n.value.routeConfig === s.value.routeConfig);
    r !== void 0 ? (r.children.push(...n.children), i.add(r)) : t.push(n);
  }
  for (let n of i) {
    let r = Gr(n.children);
    t.push(new D(n.value, r));
  }
  return t.filter((n) => !i.has(n));
}
function ys(e) {
  return e.data || {};
}
function Cs(e) {
  return e.resolve || {};
}
function Ss(e, t, i, n, r, s) {
  return M((o) =>
    gs(e, t, i, n, o.extractedUrl, r, s).pipe(
      b(({ state: a, tree: l }) =>
        _(u({}, o), { targetSnapshot: a, urlAfterRedirects: l }),
      ),
    ),
  );
}
function ws(e, t) {
  return M((i) => {
    let {
      targetSnapshot: n,
      guards: { canActivateChecks: r },
    } = i;
    if (!r.length) return d(i);
    let s = new Set(r.map((l) => l.route)),
      o = new Set();
    for (let l of s) if (!o.has(l)) for (let c of Qr(l)) o.add(c);
    let a = 0;
    return O(o).pipe(
      pt((l) =>
        s.has(l)
          ? Rs(l, n, e, t)
          : ((l.data = bn(l, l.parent, e).resolve), d(void 0)),
      ),
      w(() => a++),
      we(1),
      M((l) => (a === o.size ? d(i) : $)),
    );
  });
}
function Qr(e) {
  let t = e.children.map((i) => Qr(i)).flat();
  return [e, ...t];
}
function Rs(e, t, i, n) {
  let r = e.routeConfig,
    s = e._resolve;
  return (
    r?.title !== void 0 && !zr(r) && (s[Ut] = r.title),
    As(s, e, t, n).pipe(
      b(
        (o) => (
          (e._resolvedData = o), (e.data = bn(e, e.parent, i).resolve), null
        ),
      ),
    )
  );
}
function As(e, t, i, n) {
  let r = Ve(e);
  if (r.length === 0) return d({});
  let s = {};
  return O(r).pipe(
    M((o) =>
      Is(e[o], t, i, n).pipe(
        L(),
        w((a) => {
          s[o] = a;
        }),
      ),
    ),
    we(1),
    On(s),
    J((o) => (Hr(o) ? $ : ft(o))),
  );
}
function Is(e, t, i, n) {
  let r = jt(t) ?? n,
    s = lt(e, r),
    o = s.resolve ? s.resolve(t, i) : W(r, () => s(t, i));
  return q(o);
}
function Be(e) {
  return P((t) => {
    let i = e(t);
    return i ? O(i).pipe(b(() => t)) : d(t);
  });
}
var Zr = (() => {
    let t = class t {
      buildTitle(n) {
        let r,
          s = n.root;
        for (; s !== void 0; )
          (r = this.getResolvedTitleForRoute(s) ?? r),
            (s = s.children.find((o) => o.outlet === p));
        return r;
      }
      getResolvedTitleForRoute(n) {
        return n.data[Ut];
      }
    };
    (t.ɵfac = function (r) {
      return new (r || t)();
    }),
      (t.ɵprov = C({ token: t, factory: () => f(_s), providedIn: "root" }));
    let e = t;
    return e;
  })(),
  _s = (() => {
    let t = class t extends Zr {
      constructor(n) {
        super(), (this.title = n);
      }
      updateTitle(n) {
        let r = this.buildTitle(n);
        r !== void 0 && this.title.setTitle(r);
      }
    };
    (t.ɵfac = function (r) {
      return new (r || t)(N(or));
    }),
      (t.ɵprov = C({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  wn = new T("", { providedIn: "root", factory: () => ({}) }),
  Rn = new T(""),
  Ds = (() => {
    let t = class t {
      constructor() {
        (this.componentLoaders = new WeakMap()),
          (this.childrenLoaders = new WeakMap()),
          (this.compiler = f(Te));
      }
      loadComponent(n) {
        if (this.componentLoaders.get(n)) return this.componentLoaders.get(n);
        if (n._loadedComponent) return d(n._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(n);
        let r = q(n.loadComponent()).pipe(
            b(Kr),
            w((o) => {
              this.onLoadEndListener && this.onLoadEndListener(n),
                (n._loadedComponent = o);
            }),
            zt(() => {
              this.componentLoaders.delete(n);
            }),
          ),
          s = new ye(r, () => new R()).pipe(be());
        return this.componentLoaders.set(n, s), s;
      }
      loadChildren(n, r) {
        if (this.childrenLoaders.get(r)) return this.childrenLoaders.get(r);
        if (r._loadedRoutes)
          return d({ routes: r._loadedRoutes, injector: r._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(r);
        let o = ks(r, this.compiler, n, this.onLoadEndListener).pipe(
            zt(() => {
              this.childrenLoaders.delete(r);
            }),
          ),
          a = new ye(o, () => new R()).pipe(be());
        return this.childrenLoaders.set(r, a), a;
      }
    };
    (t.ɵfac = function (r) {
      return new (r || t)();
    }),
      (t.ɵprov = C({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })();
function ks(e, t, i, n) {
  return q(e.loadChildren()).pipe(
    b(Kr),
    M((r) =>
      r instanceof Qn || Array.isArray(r) ? d(r) : O(t.compileModuleAsync(r)),
    ),
    b((r) => {
      n && n(e);
      let s,
        o,
        a = !1;
      return (
        Array.isArray(r)
          ? ((o = r), (a = !0))
          : ((s = r.create(i).injector),
            (o = s.get(Rn, [], { optional: !0, self: !0 }).flat())),
        { routes: o.map(Cn), injector: s }
      );
    }),
  );
}
function xs(e) {
  return e && typeof e == "object" && "default" in e;
}
function Kr(e) {
  return xs(e) ? e.default : e;
}
var An = (() => {
    let t = class t {};
    (t.ɵfac = function (r) {
      return new (r || t)();
    }),
      (t.ɵprov = C({ token: t, factory: () => f(Ms), providedIn: "root" }));
    let e = t;
    return e;
  })(),
  Ms = (() => {
    let t = class t {
      shouldProcessUrl(n) {
        return !0;
      }
      extract(n) {
        return n;
      }
      merge(n, r) {
        return n;
      }
    };
    (t.ɵfac = function (r) {
      return new (r || t)();
    }),
      (t.ɵprov = C({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  Ts = new T("");
var Es = (() => {
  let t = class t {
    get hasRequestedNavigation() {
      return this.navigationId !== 0;
    }
    constructor() {
      (this.currentNavigation = null),
        (this.currentTransition = null),
        (this.lastSuccessfulNavigation = null),
        (this.events = new R()),
        (this.transitionAbortSubject = new R()),
        (this.configLoader = f(Ds)),
        (this.environmentInjector = f(qt)),
        (this.urlSerializer = f(vn)),
        (this.rootContexts = f(pe)),
        (this.location = f(Xt)),
        (this.inputBindingEnabled = f(ge, { optional: !0 }) !== null),
        (this.titleStrategy = f(Zr)),
        (this.options = f(wn, { optional: !0 }) || {}),
        (this.paramsInheritanceStrategy =
          this.options.paramsInheritanceStrategy || "emptyOnly"),
        (this.urlHandlingStrategy = f(An)),
        (this.createViewTransition = f(Ts, { optional: !0 })),
        (this.navigationId = 0),
        (this.afterPreactivation = () => d(void 0)),
        (this.rootComponentType = null);
      let n = (s) => this.events.next(new Je(s)),
        r = (s) => this.events.next(new tn(s));
      (this.configLoader.onLoadEndListener = r),
        (this.configLoader.onLoadStartListener = n);
    }
    complete() {
      this.transitions?.complete();
    }
    handleNavigationRequest(n) {
      let r = ++this.navigationId;
      this.transitions?.next(_(u(u({}, this.transitions.value), n), { id: r }));
    }
    setupNavigations(n, r, s) {
      return (
        (this.transitions = new x({
          id: 0,
          currentUrlTree: r,
          currentRawUrl: r,
          extractedUrl: this.urlHandlingStrategy.extract(r),
          urlAfterRedirects: this.urlHandlingStrategy.extract(r),
          rawUrl: r,
          extras: {},
          resolve: null,
          reject: null,
          promise: Promise.resolve(!0),
          source: It,
          restoredState: null,
          currentSnapshot: s.snapshot,
          targetSnapshot: null,
          currentRouterState: s,
          targetRouterState: null,
          guards: { canActivateChecks: [], canDeactivateChecks: [] },
          guardsResult: null,
        })),
        this.transitions.pipe(
          X((o) => o.id !== 0),
          b((o) =>
            _(u({}, o), {
              extractedUrl: this.urlHandlingStrategy.extract(o.rawUrl),
            }),
          ),
          P((o) => {
            let a = !1,
              l = !1;
            return d(o).pipe(
              P((c) => {
                if (this.navigationId > o.id)
                  return (
                    this.cancelNavigationTransition(
                      o,
                      "",
                      k.SupersededByNewNavigation,
                    ),
                    $
                  );
                (this.currentTransition = o),
                  (this.currentNavigation = {
                    id: c.id,
                    initialUrl: c.rawUrl,
                    extractedUrl: c.extractedUrl,
                    trigger: c.source,
                    extras: c.extras,
                    previousNavigation: this.lastSuccessfulNavigation
                      ? _(u({}, this.lastSuccessfulNavigation), {
                          previousNavigation: null,
                        })
                      : null,
                  });
                let h =
                    !n.navigated ||
                    this.isUpdatingInternalState() ||
                    this.isUpdatedBrowserUrl(),
                  m = c.extras.onSameUrlNavigation ?? n.onSameUrlNavigation;
                if (!h && m !== "reload") {
                  let g = "";
                  return (
                    this.events.next(
                      new K(
                        c.id,
                        this.urlSerializer.serialize(c.rawUrl),
                        g,
                        Qe.IgnoredSameUrlNavigation,
                      ),
                    ),
                    c.resolve(null),
                    $
                  );
                }
                if (this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))
                  return d(c).pipe(
                    P((g) => {
                      let y = this.transitions?.getValue();
                      return (
                        this.events.next(
                          new kt(
                            g.id,
                            this.urlSerializer.serialize(g.extractedUrl),
                            g.source,
                            g.restoredState,
                          ),
                        ),
                        y !== this.transitions?.getValue()
                          ? $
                          : Promise.resolve(g)
                      );
                    }),
                    Ss(
                      this.environmentInjector,
                      this.configLoader,
                      this.rootComponentType,
                      n.config,
                      this.urlSerializer,
                      this.paramsInheritanceStrategy,
                    ),
                    w((g) => {
                      (o.targetSnapshot = g.targetSnapshot),
                        (o.urlAfterRedirects = g.urlAfterRedirects),
                        (this.currentNavigation = _(
                          u({}, this.currentNavigation),
                          { finalUrl: g.urlAfterRedirects },
                        ));
                      let y = new ce(
                        g.id,
                        this.urlSerializer.serialize(g.extractedUrl),
                        this.urlSerializer.serialize(g.urlAfterRedirects),
                        g.targetSnapshot,
                      );
                      this.events.next(y);
                    }),
                  );
                if (
                  h &&
                  this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)
                ) {
                  let {
                      id: g,
                      extractedUrl: y,
                      source: ht,
                      restoredState: dt,
                      extras: ve,
                    } = c,
                    V = new kt(g, this.urlSerializer.serialize(y), ht, dt);
                  this.events.next(V);
                  let ti = $r(this.rootComponentType).snapshot;
                  return (
                    (this.currentTransition = o =
                      _(u({}, c), {
                        targetSnapshot: ti,
                        urlAfterRedirects: y,
                        extras: _(u({}, ve), {
                          skipLocationChange: !1,
                          replaceUrl: !1,
                        }),
                      })),
                    (this.currentNavigation.finalUrl = y),
                    d(o)
                  );
                } else {
                  let g = "";
                  return (
                    this.events.next(
                      new K(
                        c.id,
                        this.urlSerializer.serialize(c.extractedUrl),
                        g,
                        Qe.IgnoredByUrlHandlingStrategy,
                      ),
                    ),
                    c.resolve(null),
                    $
                  );
                }
              }),
              w((c) => {
                let h = new Ze(
                  c.id,
                  this.urlSerializer.serialize(c.extractedUrl),
                  this.urlSerializer.serialize(c.urlAfterRedirects),
                  c.targetSnapshot,
                );
                this.events.next(h);
              }),
              b(
                (c) => (
                  (this.currentTransition = o =
                    _(u({}, c), {
                      guards: Li(
                        c.targetSnapshot,
                        c.currentSnapshot,
                        this.rootContexts,
                      ),
                    })),
                  o
                ),
              ),
              Zi(this.environmentInjector, (c) => this.events.next(c)),
              w((c) => {
                if (((o.guardsResult = c.guardsResult), at(c.guardsResult)))
                  throw Br(this.urlSerializer, c.guardsResult);
                let h = new Ke(
                  c.id,
                  this.urlSerializer.serialize(c.extractedUrl),
                  this.urlSerializer.serialize(c.urlAfterRedirects),
                  c.targetSnapshot,
                  !!c.guardsResult,
                );
                this.events.next(h);
              }),
              X((c) =>
                c.guardsResult
                  ? !0
                  : (this.cancelNavigationTransition(c, "", k.GuardRejected),
                    !1),
              ),
              Be((c) => {
                if (c.guards.canActivateChecks.length)
                  return d(c).pipe(
                    w((h) => {
                      let m = new Ye(
                        h.id,
                        this.urlSerializer.serialize(h.extractedUrl),
                        this.urlSerializer.serialize(h.urlAfterRedirects),
                        h.targetSnapshot,
                      );
                      this.events.next(m);
                    }),
                    P((h) => {
                      let m = !1;
                      return d(h).pipe(
                        ws(
                          this.paramsInheritanceStrategy,
                          this.environmentInjector,
                        ),
                        w({
                          next: () => (m = !0),
                          complete: () => {
                            m ||
                              this.cancelNavigationTransition(
                                h,
                                "",
                                k.NoDataFromResolver,
                              );
                          },
                        }),
                      );
                    }),
                    w((h) => {
                      let m = new Xe(
                        h.id,
                        this.urlSerializer.serialize(h.extractedUrl),
                        this.urlSerializer.serialize(h.urlAfterRedirects),
                        h.targetSnapshot,
                      );
                      this.events.next(m);
                    }),
                  );
              }),
              Be((c) => {
                let h = (m) => {
                  let g = [];
                  m.routeConfig?.loadComponent &&
                    !m.routeConfig._loadedComponent &&
                    g.push(
                      this.configLoader.loadComponent(m.routeConfig).pipe(
                        w((y) => {
                          m.component = y;
                        }),
                        b(() => {}),
                      ),
                    );
                  for (let y of m.children) g.push(...h(y));
                  return g;
                };
                return Lt(h(c.targetSnapshot.root)).pipe(Se(null), tt(1));
              }),
              Be(() => this.afterPreactivation()),
              P(() => {
                let { currentSnapshot: c, targetSnapshot: h } = o,
                  m = this.createViewTransition?.(
                    this.environmentInjector,
                    c.root,
                    h.root,
                  );
                return m ? O(m).pipe(b(() => o)) : d(o);
              }),
              b((c) => {
                let h = Ti(
                  n.routeReuseStrategy,
                  c.targetSnapshot,
                  c.currentRouterState,
                );
                return (
                  (this.currentTransition = o =
                    _(u({}, c), { targetRouterState: h })),
                  (this.currentNavigation.targetRouterState = h),
                  o
                );
              }),
              w(() => {
                this.events.next(new Mt());
              }),
              $i(
                this.rootContexts,
                n.routeReuseStrategy,
                (c) => this.events.next(c),
                this.inputBindingEnabled,
              ),
              tt(1),
              w({
                next: (c) => {
                  (a = !0),
                    (this.lastSuccessfulNavigation = this.currentNavigation),
                    this.events.next(
                      new F(
                        c.id,
                        this.urlSerializer.serialize(c.extractedUrl),
                        this.urlSerializer.serialize(c.urlAfterRedirects),
                      ),
                    ),
                    this.titleStrategy?.updateTitle(
                      c.targetRouterState.snapshot,
                    ),
                    c.resolve(!0);
                },
                complete: () => {
                  a = !0;
                },
              }),
              Ft(
                this.transitionAbortSubject.pipe(
                  w((c) => {
                    throw c;
                  }),
                ),
              ),
              zt(() => {
                !a &&
                  !l &&
                  this.cancelNavigationTransition(
                    o,
                    "",
                    k.SupersededByNewNavigation,
                  ),
                  this.currentTransition?.id === o.id &&
                    ((this.currentNavigation = null),
                    (this.currentTransition = null));
              }),
              J((c) => {
                if (((l = !0), Vr(c)))
                  this.events.next(
                    new B(
                      o.id,
                      this.urlSerializer.serialize(o.extractedUrl),
                      c.message,
                      c.cancellationCode,
                    ),
                  ),
                    Pi(c) ? this.events.next(new Tt(c.url)) : o.resolve(!1);
                else {
                  this.events.next(
                    new xt(
                      o.id,
                      this.urlSerializer.serialize(o.extractedUrl),
                      c,
                      o.targetSnapshot ?? void 0,
                    ),
                  );
                  try {
                    o.resolve(n.errorHandler(c));
                  } catch (h) {
                    this.options.resolveNavigationPromiseOnError
                      ? o.resolve(!1)
                      : o.reject(h);
                  }
                }
                return $;
              }),
            );
          }),
        )
      );
    }
    cancelNavigationTransition(n, r, s) {
      let o = new B(n.id, this.urlSerializer.serialize(n.extractedUrl), r, s);
      this.events.next(o), n.resolve(!1);
    }
    isUpdatingInternalState() {
      return (
        this.currentTransition?.extractedUrl.toString() !==
        this.currentTransition?.currentUrlTree.toString()
      );
    }
    isUpdatedBrowserUrl() {
      return (
        this.urlHandlingStrategy
          .extract(this.urlSerializer.parse(this.location.path(!0)))
          .toString() !== this.currentTransition?.extractedUrl.toString() &&
        !this.currentTransition?.extras.skipLocationChange
      );
    }
  };
  (t.ɵfac = function (r) {
    return new (r || t)();
  }),
    (t.ɵprov = C({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
function Os(e) {
  return e !== It;
}
var Ps = (() => {
    let t = class t {};
    (t.ɵfac = function (r) {
      return new (r || t)();
    }),
      (t.ɵprov = C({ token: t, factory: () => f(Us), providedIn: "root" }));
    let e = t;
    return e;
  })(),
  mn = class {
    shouldDetach(t) {
      return !1;
    }
    store(t, i) {}
    shouldAttach(t) {
      return !1;
    }
    retrieve(t) {
      return null;
    }
    shouldReuseRoute(t, i) {
      return t.routeConfig === i.routeConfig;
    }
  },
  Us = (() => {
    let t = class t extends mn {};
    (t.ɵfac = (() => {
      let n;
      return function (s) {
        return (n || (n = Ie(t)))(s || t);
      };
    })()),
      (t.ɵprov = C({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  Yr = (() => {
    let t = class t {};
    (t.ɵfac = function (r) {
      return new (r || t)();
    }),
      (t.ɵprov = C({ token: t, factory: () => f(js), providedIn: "root" }));
    let e = t;
    return e;
  })(),
  js = (() => {
    let t = class t extends Yr {
      constructor() {
        super(...arguments),
          (this.location = f(Xt)),
          (this.urlSerializer = f(vn)),
          (this.options = f(wn, { optional: !0 }) || {}),
          (this.canceledNavigationResolution =
            this.options.canceledNavigationResolution || "replace"),
          (this.urlHandlingStrategy = f(An)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.currentUrlTree = new z()),
          (this.rawUrlTree = this.currentUrlTree),
          (this.currentPageId = 0),
          (this.lastSuccessfulId = -1),
          (this.routerState = $r(null)),
          (this.stateMemento = this.createStateMemento());
      }
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      restoredState() {
        return this.location.getState();
      }
      get browserPageId() {
        return this.canceledNavigationResolution !== "computed"
          ? this.currentPageId
          : this.restoredState()?.ɵrouterPageId ?? this.currentPageId;
      }
      getRouterState() {
        return this.routerState;
      }
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState,
        };
      }
      registerNonRouterCurrentEntryChangeListener(n) {
        return this.location.subscribe((r) => {
          r.type === "popstate" && n(r.url, r.state);
        });
      }
      handleRouterEvent(n, r) {
        if (n instanceof kt) this.stateMemento = this.createStateMemento();
        else if (n instanceof K) this.rawUrlTree = r.initialUrl;
        else if (n instanceof ce) {
          if (
            this.urlUpdateStrategy === "eager" &&
            !r.extras.skipLocationChange
          ) {
            let s = this.urlHandlingStrategy.merge(r.finalUrl, r.initialUrl);
            this.setBrowserUrl(s, r);
          }
        } else
          n instanceof Mt
            ? ((this.currentUrlTree = r.finalUrl),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                r.finalUrl,
                r.initialUrl,
              )),
              (this.routerState = r.targetRouterState),
              this.urlUpdateStrategy === "deferred" &&
                (r.extras.skipLocationChange ||
                  this.setBrowserUrl(this.rawUrlTree, r)))
            : n instanceof B &&
                (n.code === k.GuardRejected || n.code === k.NoDataFromResolver)
              ? this.restoreHistory(r)
              : n instanceof xt
                ? this.restoreHistory(r, !0)
                : n instanceof F &&
                  ((this.lastSuccessfulId = n.id),
                  (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(n, r) {
        let s = this.urlSerializer.serialize(n);
        if (this.location.isCurrentPathEqualTo(s) || r.extras.replaceUrl) {
          let o = this.browserPageId,
            a = u(u({}, r.extras.state), this.generateNgRouterState(r.id, o));
          this.location.replaceState(s, "", a);
        } else {
          let o = u(
            u({}, r.extras.state),
            this.generateNgRouterState(r.id, this.browserPageId + 1),
          );
          this.location.go(s, "", o);
        }
      }
      restoreHistory(n, r = !1) {
        if (this.canceledNavigationResolution === "computed") {
          let s = this.browserPageId,
            o = this.currentPageId - s;
          o !== 0
            ? this.location.historyGo(o)
            : this.currentUrlTree === n.finalUrl &&
              o === 0 &&
              (this.resetState(n), this.resetUrlToCurrentUrlTree());
        } else
          this.canceledNavigationResolution === "replace" &&
            (r && this.resetState(n), this.resetUrlToCurrentUrlTree());
      }
      resetState(n) {
        (this.routerState = this.stateMemento.routerState),
          (this.currentUrlTree = this.stateMemento.currentUrlTree),
          (this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            n.finalUrl ?? this.rawUrlTree,
          ));
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.rawUrlTree),
          "",
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId),
        );
      }
      generateNgRouterState(n, r) {
        return this.canceledNavigationResolution === "computed"
          ? { navigationId: n, ɵrouterPageId: r }
          : { navigationId: n };
      }
    };
    (t.ɵfac = (() => {
      let n;
      return function (s) {
        return (n || (n = Ie(t)))(s || t);
      };
    })()),
      (t.ɵprov = C({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  Rt = (function (e) {
    return (
      (e[(e.COMPLETE = 0)] = "COMPLETE"),
      (e[(e.FAILED = 1)] = "FAILED"),
      (e[(e.REDIRECTING = 2)] = "REDIRECTING"),
      e
    );
  })(Rt || {});
function Ns(e, t) {
  e.events
    .pipe(
      X(
        (i) =>
          i instanceof F || i instanceof B || i instanceof xt || i instanceof K,
      ),
      b((i) =>
        i instanceof F || i instanceof K
          ? Rt.COMPLETE
          : (
                i instanceof B
                  ? i.code === k.Redirect ||
                    i.code === k.SupersededByNewNavigation
                  : !1
              )
            ? Rt.REDIRECTING
            : Rt.FAILED,
      ),
      X((i) => i !== Rt.REDIRECTING),
      tt(1),
    )
    .subscribe(() => {
      t();
    });
}
function $s(e) {
  throw e;
}
var Ls = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact",
  },
  zs = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset",
  },
  In = (() => {
    let t = class t {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      get events() {
        return this._events;
      }
      get routerState() {
        return this.stateManager.getRouterState();
      }
      constructor() {
        (this.disposed = !1),
          (this.isNgZoneEnabled = !1),
          (this.console = f(er)),
          (this.stateManager = f(Yr)),
          (this.options = f(wn, { optional: !0 }) || {}),
          (this.pendingTasks = f(Kn)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.navigationTransitions = f(Es)),
          (this.urlSerializer = f(vn)),
          (this.location = f(Xt)),
          (this.urlHandlingStrategy = f(An)),
          (this._events = new R()),
          (this.errorHandler = this.options.errorHandler || $s),
          (this.navigated = !1),
          (this.routeReuseStrategy = f(Ps)),
          (this.onSameUrlNavigation =
            this.options.onSameUrlNavigation || "ignore"),
          (this.config = f(Rn, { optional: !0 })?.flat() ?? []),
          (this.componentInputBindingEnabled = !!f(ge, { optional: !0 })),
          (this.eventsSubscription = new kn()),
          (this.isNgZoneEnabled = f(et) instanceof et && et.isInAngularZone()),
          this.resetConfig(this.config),
          this.navigationTransitions
            .setupNavigations(this, this.currentUrlTree, this.routerState)
            .subscribe({
              error: (n) => {
                this.console.warn(n);
              },
            }),
          this.subscribeToNavigationEvents();
      }
      subscribeToNavigationEvents() {
        let n = this.navigationTransitions.events.subscribe((r) => {
          try {
            let s = this.navigationTransitions.currentTransition,
              o = this.navigationTransitions.currentNavigation;
            if (s !== null && o !== null) {
              if (
                (this.stateManager.handleRouterEvent(r, o),
                r instanceof B &&
                  r.code !== k.Redirect &&
                  r.code !== k.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (r instanceof F) this.navigated = !0;
              else if (r instanceof Tt) {
                let a = this.urlHandlingStrategy.merge(r.url, s.currentRawUrl),
                  l = {
                    info: s.extras.info,
                    skipLocationChange: s.extras.skipLocationChange,
                    replaceUrl:
                      this.urlUpdateStrategy === "eager" || Os(s.source),
                  };
                this.scheduleNavigation(a, It, null, l, {
                  resolve: s.resolve,
                  reject: s.reject,
                  promise: s.promise,
                });
              }
            }
            Bs(r) && this._events.next(r);
          } catch (s) {
            this.navigationTransitions.transitionAbortSubject.next(s);
          }
        });
        this.eventsSubscription.add(n);
      }
      resetRootComponentType(n) {
        (this.routerState.root.component = n),
          (this.navigationTransitions.rootComponentType = n);
      }
      initialNavigation() {
        this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
            this.navigateToSyncWithBrowser(
              this.location.path(!0),
              It,
              this.stateManager.restoredState(),
            );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener(
            (n, r) => {
              setTimeout(() => {
                this.navigateToSyncWithBrowser(n, "popstate", r);
              }, 0);
            },
          );
      }
      navigateToSyncWithBrowser(n, r, s) {
        let o = { replaceUrl: !0 },
          a = s?.navigationId ? s : null;
        if (s) {
          let c = u({}, s);
          delete c.navigationId,
            delete c.ɵrouterPageId,
            Object.keys(c).length !== 0 && (o.state = c);
        }
        let l = this.parseUrl(n);
        this.scheduleNavigation(l, r, a, o);
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      getCurrentNavigation() {
        return this.navigationTransitions.currentNavigation;
      }
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      resetConfig(n) {
        (this.config = n.map(Cn)), (this.navigated = !1);
      }
      ngOnDestroy() {
        this.dispose();
      }
      dispose() {
        this.navigationTransitions.complete(),
          this.nonRouterCurrentEntryChangeSubscription &&
            (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            (this.nonRouterCurrentEntryChangeSubscription = void 0)),
          (this.disposed = !0),
          this.eventsSubscription.unsubscribe();
      }
      createUrlTree(n, r = {}) {
        let {
            relativeTo: s,
            queryParams: o,
            fragment: a,
            queryParamsHandling: l,
            preserveFragment: c,
          } = r,
          h = c ? this.currentUrlTree.fragment : a,
          m = null;
        switch (l) {
          case "merge":
            m = u(u({}, this.currentUrlTree.queryParams), o);
            break;
          case "preserve":
            m = this.currentUrlTree.queryParams;
            break;
          default:
            m = o || null;
        }
        m !== null && (m = this.removeEmptyProps(m));
        let g;
        try {
          let y = s ? s.snapshot : this.routerState.snapshot.root;
          g = Pr(y);
        } catch {
          (typeof n[0] != "string" || !n[0].startsWith("/")) && (n = []),
            (g = this.currentUrlTree.root);
        }
        return Ur(g, n, m, h ?? null);
      }
      navigateByUrl(n, r = { skipLocationChange: !1 }) {
        let s = at(n) ? n : this.parseUrl(n),
          o = this.urlHandlingStrategy.merge(s, this.rawUrlTree);
        return this.scheduleNavigation(o, It, null, r);
      }
      navigate(n, r = { skipLocationChange: !1 }) {
        return Fs(n), this.navigateByUrl(this.createUrlTree(n, r), r);
      }
      serializeUrl(n) {
        return this.urlSerializer.serialize(n);
      }
      parseUrl(n) {
        try {
          return this.urlSerializer.parse(n);
        } catch {
          return this.urlSerializer.parse("/");
        }
      }
      isActive(n, r) {
        let s;
        if (
          (r === !0 ? (s = u({}, Ls)) : r === !1 ? (s = u({}, zs)) : (s = r),
          at(n))
        )
          return vr(this.currentUrlTree, n, s);
        let o = this.parseUrl(n);
        return vr(this.currentUrlTree, o, s);
      }
      removeEmptyProps(n) {
        return Object.entries(n).reduce(
          (r, [s, o]) => (o != null && (r[s] = o), r),
          {},
        );
      }
      scheduleNavigation(n, r, s, o, a) {
        if (this.disposed) return Promise.resolve(!1);
        let l, c, h;
        a
          ? ((l = a.resolve), (c = a.reject), (h = a.promise))
          : (h = new Promise((g, y) => {
              (l = g), (c = y);
            }));
        let m = this.pendingTasks.add();
        return (
          Ns(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(m));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: r,
            restoredState: s,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: n,
            extras: o,
            resolve: l,
            reject: c,
            promise: h,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          h.catch((g) => Promise.reject(g))
        );
      }
    };
    (t.ɵfac = function (r) {
      return new (r || t)();
    }),
      (t.ɵprov = C({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })();
function Fs(e) {
  for (let t = 0; t < e.length; t++) if (e[t] == null) throw new A(4008, !1);
}
function Bs(e) {
  return !(e instanceof Mt) && !(e instanceof Tt);
}
var Bo = (() => {
  let t = class t {
    constructor(n, r, s, o, a, l) {
      (this.router = n),
        (this.route = r),
        (this.tabIndexAttribute = s),
        (this.renderer = o),
        (this.el = a),
        (this.locationStrategy = l),
        (this.href = null),
        (this.commands = null),
        (this.onChanges = new R()),
        (this.preserveFragment = !1),
        (this.skipLocationChange = !1),
        (this.replaceUrl = !1);
      let c = a.nativeElement.tagName?.toLowerCase();
      (this.isAnchorElement = c === "a" || c === "area"),
        this.isAnchorElement
          ? (this.subscription = n.events.subscribe((h) => {
              h instanceof F && this.updateHref();
            }))
          : this.setTabIndexIfNotOnNativeEl("0");
    }
    setTabIndexIfNotOnNativeEl(n) {
      this.tabIndexAttribute != null ||
        this.isAnchorElement ||
        this.applyAttributeValue("tabindex", n);
    }
    ngOnChanges(n) {
      this.isAnchorElement && this.updateHref(), this.onChanges.next(this);
    }
    set routerLink(n) {
      n != null
        ? ((this.commands = Array.isArray(n) ? n : [n]),
          this.setTabIndexIfNotOnNativeEl("0"))
        : ((this.commands = null), this.setTabIndexIfNotOnNativeEl(null));
    }
    onClick(n, r, s, o, a) {
      let l = this.urlTree;
      if (
        l === null ||
        (this.isAnchorElement &&
          (n !== 0 ||
            r ||
            s ||
            o ||
            a ||
            (typeof this.target == "string" && this.target != "_self")))
      )
        return !0;
      let c = {
        skipLocationChange: this.skipLocationChange,
        replaceUrl: this.replaceUrl,
        state: this.state,
        info: this.info,
      };
      return this.router.navigateByUrl(l, c), !this.isAnchorElement;
    }
    ngOnDestroy() {
      this.subscription?.unsubscribe();
    }
    updateHref() {
      let n = this.urlTree;
      this.href =
        n !== null && this.locationStrategy
          ? this.locationStrategy?.prepareExternalUrl(
              this.router.serializeUrl(n),
            )
          : null;
      let r =
        this.href === null
          ? null
          : Bn(this.href, this.el.nativeElement.tagName.toLowerCase(), "href");
      this.applyAttributeValue("href", r);
    }
    applyAttributeValue(n, r) {
      let s = this.renderer,
        o = this.el.nativeElement;
      r !== null ? s.setAttribute(o, n, r) : s.removeAttribute(o, n);
    }
    get urlTree() {
      return this.commands === null
        ? null
        : this.router.createUrlTree(this.commands, {
            relativeTo:
              this.relativeTo !== void 0 ? this.relativeTo : this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: this.preserveFragment,
          });
    }
  };
  (t.ɵfac = function (r) {
    return new (r || t)(I(In), I(Y), Fn("tabindex"), I(Vn), I(Vt), I(Oe));
  }),
    (t.ɵdir = H({
      type: t,
      selectors: [["", "routerLink", ""]],
      hostVars: 1,
      hostBindings: function (r, s) {
        r & 1 &&
          Qt("click", function (a) {
            return s.onClick(
              a.button,
              a.ctrlKey,
              a.shiftKey,
              a.altKey,
              a.metaKey,
            );
          }),
          r & 2 && Ht("target", s.target);
      },
      inputs: {
        target: "target",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        state: "state",
        info: "info",
        relativeTo: "relativeTo",
        preserveFragment: [
          Bt.HasDecoratorInputTransform,
          "preserveFragment",
          "preserveFragment",
          Yt,
        ],
        skipLocationChange: [
          Bt.HasDecoratorInputTransform,
          "skipLocationChange",
          "skipLocationChange",
          Yt,
        ],
        replaceUrl: [
          Bt.HasDecoratorInputTransform,
          "replaceUrl",
          "replaceUrl",
          Yt,
        ],
        routerLink: "routerLink",
      },
      standalone: !0,
      features: [Gn, Ae],
    }));
  let e = t;
  return e;
})();
var qs = new T("");
function qo(e, ...t) {
  return $n([
    { provide: Rn, multi: !0, useValue: e },
    [],
    { provide: Y, useFactory: Vs, deps: [In] },
    { provide: rr, multi: !0, useFactory: Ws },
    t.map((i) => i.ɵproviders),
  ]);
}
function Vs(e) {
  return e.routerState.root;
}
function Hs(e, t) {
  return { ɵkind: e, ɵproviders: t };
}
function Ws() {
  let e = f(G);
  return (t) => {
    let i = e.get(ir);
    if (t !== i.components[0]) return;
    let n = e.get(In),
      r = e.get(Gs);
    e.get(Qs) === 1 && n.initialNavigation(),
      e.get(Zs, null, Re.Optional)?.setUpPreloading(),
      e.get(qs, null, Re.Optional)?.init(),
      n.resetRootComponentType(i.componentTypes[0]),
      r.closed || (r.next(), r.complete(), r.unsubscribe());
  };
}
var Gs = new T("", { factory: () => new R() }),
  Qs = new T("", { providedIn: "root", factory: () => 1 });
var Zs = new T("");
function Vo() {
  return Hs(8, [Sr, { provide: ge, useExisting: Sr }]);
}
function Ks(e, t) {
  if (e & 1) {
    let i = Xn();
    Wt(0, "div", 1)(1, "button", 2),
      Qt("click", function () {
        Ln(i);
        let r = De();
        return zn(r.action());
      }),
      xe(2),
      bt()();
  }
  if (e & 2) {
    let i = De();
    vt(2), Me(" ", i.data.action, " ");
  }
}
var Ys = ["label"];
function Xs(e, t) {}
var Js = Math.pow(2, 31) - 1,
  $t = class {
    constructor(t, i) {
      (this._overlayRef = i),
        (this._afterDismissed = new R()),
        (this._afterOpened = new R()),
        (this._onAction = new R()),
        (this._dismissedByAction = !1),
        (this.containerInstance = t),
        t._onExit.subscribe(() => this._finishDismiss());
    }
    dismiss() {
      this._afterDismissed.closed || this.containerInstance.exit(),
        clearTimeout(this._durationTimeoutId);
    }
    dismissWithAction() {
      this._onAction.closed ||
        ((this._dismissedByAction = !0),
        this._onAction.next(),
        this._onAction.complete(),
        this.dismiss()),
        clearTimeout(this._durationTimeoutId);
    }
    closeWithAction() {
      this.dismissWithAction();
    }
    _dismissAfter(t) {
      this._durationTimeoutId = setTimeout(
        () => this.dismiss(),
        Math.min(t, Js),
      );
    }
    _open() {
      this._afterOpened.closed ||
        (this._afterOpened.next(), this._afterOpened.complete());
    }
    _finishDismiss() {
      this._overlayRef.dispose(),
        this._onAction.closed || this._onAction.complete(),
        this._afterDismissed.next({
          dismissedByAction: this._dismissedByAction,
        }),
        this._afterDismissed.complete(),
        (this._dismissedByAction = !1);
    }
    afterDismissed() {
      return this._afterDismissed;
    }
    afterOpened() {
      return this.containerInstance._onEnter;
    }
    onAction() {
      return this._onAction;
    }
  },
  Xr = new T("MatSnackBarData"),
  ut = class {
    constructor() {
      (this.politeness = "assertive"),
        (this.announcementMessage = ""),
        (this.duration = 0),
        (this.data = null),
        (this.horizontalPosition = "center"),
        (this.verticalPosition = "bottom");
    }
  },
  to = (() => {
    let t = class t {};
    (t.ɵfac = function (r) {
      return new (r || t)();
    }),
      (t.ɵdir = H({
        type: t,
        selectors: [["", "matSnackBarLabel", ""]],
        hostAttrs: [1, "mat-mdc-snack-bar-label", "mdc-snackbar__label"],
        standalone: !0,
      }));
    let e = t;
    return e;
  })(),
  eo = (() => {
    let t = class t {};
    (t.ɵfac = function (r) {
      return new (r || t)();
    }),
      (t.ɵdir = H({
        type: t,
        selectors: [["", "matSnackBarActions", ""]],
        hostAttrs: [1, "mat-mdc-snack-bar-actions", "mdc-snackbar__actions"],
        standalone: !0,
      }));
    let e = t;
    return e;
  })(),
  no = (() => {
    let t = class t {};
    (t.ɵfac = function (r) {
      return new (r || t)();
    }),
      (t.ɵdir = H({
        type: t,
        selectors: [["", "matSnackBarAction", ""]],
        hostAttrs: [1, "mat-mdc-snack-bar-action", "mdc-snackbar__action"],
        standalone: !0,
      }));
    let e = t;
    return e;
  })(),
  ro = (() => {
    let t = class t {
      constructor(n, r) {
        (this.snackBarRef = n), (this.data = r);
      }
      action() {
        this.snackBarRef.dismissWithAction();
      }
      get hasAction() {
        return !!this.data.action;
      }
    };
    (t.ɵfac = function (r) {
      return new (r || t)(I($t), I(Xr));
    }),
      (t.ɵcmp = gt({
        type: t,
        selectors: [["simple-snack-bar"]],
        hostAttrs: [1, "mat-mdc-simple-snack-bar"],
        exportAs: ["matSnackBar"],
        standalone: !0,
        features: [yt],
        decls: 3,
        vars: 2,
        consts: [
          ["matSnackBarLabel", ""],
          ["matSnackBarActions", ""],
          ["mat-button", "", "matSnackBarAction", "", 3, "click"],
        ],
        template: function (r, s) {
          r & 1 && (Wt(0, "div", 0), xe(1), bt(), _e(2, Ks, 3, 1, "div", 1)),
            r & 2 &&
              (vt(),
              Me(
                " ",
                s.data.message,
                `
`,
              ),
              vt(),
              Yn(2, s.hasAction ? 2 : -1));
        },
        dependencies: [mr, to, eo, no],
        styles: [".mat-mdc-simple-snack-bar{display:flex}"],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let e = t;
    return e;
  })(),
  io = {
    snackBarState: fr("state", [
      Ne("void, hidden", Jt({ transform: "scale(0.8)", opacity: 0 })),
      Ne("visible", Jt({ transform: "scale(1)", opacity: 1 })),
      $e("* => visible", je("150ms cubic-bezier(0, 0, 0.2, 1)")),
      $e(
        "* => void, * => hidden",
        je("75ms cubic-bezier(0.4, 0.0, 1, 1)", Jt({ opacity: 0 })),
      ),
    ]),
  },
  so = 0,
  oo = (() => {
    let t = class t extends dr {
      constructor(n, r, s, o, a) {
        super(),
          (this._ngZone = n),
          (this._elementRef = r),
          (this._changeDetectorRef = s),
          (this._platform = o),
          (this.snackBarConfig = a),
          (this._document = f(Ee)),
          (this._trackedModals = new Set()),
          (this._announceDelay = 150),
          (this._destroyed = !1),
          (this._onAnnounce = new R()),
          (this._onExit = new R()),
          (this._onEnter = new R()),
          (this._animationState = "void"),
          (this._liveElementId = `mat-snack-bar-container-live-${so++}`),
          (this.attachDomPortal = (l) => {
            this._assertNotAttached();
            let c = this._portalOutlet.attachDomPortal(l);
            return this._afterPortalAttached(), c;
          }),
          a.politeness === "assertive" && !a.announcementMessage
            ? (this._live = "assertive")
            : a.politeness === "off"
              ? (this._live = "off")
              : (this._live = "polite"),
          this._platform.FIREFOX &&
            (this._live === "polite" && (this._role = "status"),
            this._live === "assertive" && (this._role = "alert"));
      }
      attachComponentPortal(n) {
        this._assertNotAttached();
        let r = this._portalOutlet.attachComponentPortal(n);
        return this._afterPortalAttached(), r;
      }
      attachTemplatePortal(n) {
        this._assertNotAttached();
        let r = this._portalOutlet.attachTemplatePortal(n);
        return this._afterPortalAttached(), r;
      }
      onAnimationEnd(n) {
        let { fromState: r, toState: s } = n;
        if (
          (((s === "void" && r !== "void") || s === "hidden") &&
            this._completeExit(),
          s === "visible")
        ) {
          let o = this._onEnter;
          this._ngZone.run(() => {
            o.next(), o.complete();
          });
        }
      }
      enter() {
        this._destroyed ||
          ((this._animationState = "visible"),
          this._changeDetectorRef.markForCheck(),
          this._changeDetectorRef.detectChanges(),
          this._screenReaderAnnounce());
      }
      exit() {
        return (
          this._ngZone.run(() => {
            (this._animationState = "hidden"),
              this._changeDetectorRef.markForCheck(),
              this._elementRef.nativeElement.setAttribute("mat-exit", ""),
              clearTimeout(this._announceTimeoutId);
          }),
          this._onExit
        );
      }
      ngOnDestroy() {
        (this._destroyed = !0), this._clearFromModals(), this._completeExit();
      }
      _completeExit() {
        queueMicrotask(() => {
          this._onExit.next(), this._onExit.complete();
        });
      }
      _afterPortalAttached() {
        let n = this._elementRef.nativeElement,
          r = this.snackBarConfig.panelClass;
        r &&
          (Array.isArray(r)
            ? r.forEach((a) => n.classList.add(a))
            : n.classList.add(r)),
          this._exposeToModals();
        let s = this._label.nativeElement,
          o = "mdc-snackbar__label";
        s.classList.toggle(o, !s.querySelector(`.${o}`));
      }
      _exposeToModals() {
        let n = this._liveElementId,
          r = this._document.querySelectorAll(
            'body > .cdk-overlay-container [aria-modal="true"]',
          );
        for (let s = 0; s < r.length; s++) {
          let o = r[s],
            a = o.getAttribute("aria-owns");
          this._trackedModals.add(o),
            a
              ? a.indexOf(n) === -1 && o.setAttribute("aria-owns", a + " " + n)
              : o.setAttribute("aria-owns", n);
        }
      }
      _clearFromModals() {
        this._trackedModals.forEach((n) => {
          let r = n.getAttribute("aria-owns");
          if (r) {
            let s = r.replace(this._liveElementId, "").trim();
            s.length > 0
              ? n.setAttribute("aria-owns", s)
              : n.removeAttribute("aria-owns");
          }
        }),
          this._trackedModals.clear();
      }
      _assertNotAttached() {
        this._portalOutlet.hasAttached();
      }
      _screenReaderAnnounce() {
        this._announceTimeoutId ||
          this._ngZone.runOutsideAngular(() => {
            this._announceTimeoutId = setTimeout(() => {
              let n =
                  this._elementRef.nativeElement.querySelector("[aria-hidden]"),
                r = this._elementRef.nativeElement.querySelector("[aria-live]");
              if (n && r) {
                let s = null;
                this._platform.isBrowser &&
                  document.activeElement instanceof HTMLElement &&
                  n.contains(document.activeElement) &&
                  (s = document.activeElement),
                  n.removeAttribute("aria-hidden"),
                  r.appendChild(n),
                  s?.focus(),
                  this._onAnnounce.next(),
                  this._onAnnounce.complete();
              }
            }, this._announceDelay);
          });
      }
    };
    (t.ɵfac = function (r) {
      return new (r || t)(I(et), I(Vt), I(Ct), I(ar), I(ut));
    }),
      (t.ɵcmp = gt({
        type: t,
        selectors: [["mat-snack-bar-container"]],
        viewQuery: function (r, s) {
          if ((r & 1 && (ke(Ue, 7), ke(Ys, 7)), r & 2)) {
            let o;
            Zt((o = Kt())) && (s._portalOutlet = o.first),
              Zt((o = Kt())) && (s._label = o.first);
          }
        },
        hostAttrs: [
          1,
          "mdc-snackbar",
          "mat-mdc-snack-bar-container",
          "mdc-snackbar--open",
        ],
        hostVars: 1,
        hostBindings: function (r, s) {
          r & 1 &&
            tr("@state.done", function (a) {
              return s.onAnimationEnd(a);
            }),
            r & 2 && Jn("@state", s._animationState);
        },
        standalone: !0,
        features: [Wn, yt],
        decls: 6,
        vars: 3,
        consts: [
          ["label", ""],
          [1, "mdc-snackbar__surface"],
          [1, "mat-mdc-snack-bar-label"],
          ["aria-hidden", "true"],
          ["cdkPortalOutlet", ""],
        ],
        template: function (r, s) {
          r & 1 &&
            (Wt(0, "div", 1)(1, "div", 2, 0)(3, "div", 3),
            _e(4, Xs, 0, 0, "ng-template", 4),
            bt(),
            Gt(5, "div"),
            bt()()),
            r & 2 &&
              (vt(5),
              Ht("aria-live", s._live)("role", s._role)(
                "id",
                s._liveElementId,
              ));
        },
        dependencies: [Ue],
        styles: [
          '.mdc-snackbar{display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1)}.mdc-snackbar__label{padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-snack-bar-container{margin:8px;position:static}.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:100%}}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container{width:100vw}}.mat-mdc-snack-bar-container .mdc-snackbar__surface{max-width:672px}.mat-mdc-snack-bar-container .mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{background-color:var(--mdc-snackbar-container-color)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{border-radius:var(--mdc-snackbar-container-shape)}.mat-mdc-snack-bar-container .mdc-snackbar__label{color:var(--mdc-snackbar-supporting-text-color)}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-size:var(--mdc-snackbar-supporting-text-size);font-family:var(--mdc-snackbar-supporting-text-font);font-weight:var(--mdc-snackbar-supporting-text-weight);line-height:var(--mdc-snackbar-supporting-text-line-height)}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color);--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}.mat-mdc-snack-bar-container .mdc-snackbar__label::before{display:none}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-handset .mdc-snackbar__surface{width:100%}',
        ],
        encapsulation: 2,
        data: { animation: [io.snackBarState] },
      }));
    let e = t;
    return e;
  })();
function ao() {
  return new ut();
}
var co = new T("mat-snack-bar-default-options", {
    providedIn: "root",
    factory: ao,
  }),
  Jr = (() => {
    let t = class t {
      get _openedSnackBarRef() {
        let n = this._parentSnackBar;
        return n ? n._openedSnackBarRef : this._snackBarRefAtThisLevel;
      }
      set _openedSnackBarRef(n) {
        this._parentSnackBar
          ? (this._parentSnackBar._openedSnackBarRef = n)
          : (this._snackBarRefAtThisLevel = n);
      }
      constructor(n, r, s, o, a, l) {
        (this._overlay = n),
          (this._live = r),
          (this._injector = s),
          (this._breakpointObserver = o),
          (this._parentSnackBar = a),
          (this._defaultConfig = l),
          (this._snackBarRefAtThisLevel = null),
          (this.simpleSnackBarComponent = ro),
          (this.snackBarContainerComponent = oo),
          (this.handsetCssClass = "mat-mdc-snack-bar-handset");
      }
      openFromComponent(n, r) {
        return this._attach(n, r);
      }
      openFromTemplate(n, r) {
        return this._attach(n, r);
      }
      open(n, r = "", s) {
        let o = u(u({}, this._defaultConfig), s);
        return (
          (o.data = { message: n, action: r }),
          o.announcementMessage === n && (o.announcementMessage = void 0),
          this.openFromComponent(this.simpleSnackBarComponent, o)
        );
      }
      dismiss() {
        this._openedSnackBarRef && this._openedSnackBarRef.dismiss();
      }
      ngOnDestroy() {
        this._snackBarRefAtThisLevel && this._snackBarRefAtThisLevel.dismiss();
      }
      _attachSnackBarContainer(n, r) {
        let s = r && r.viewContainerRef && r.viewContainerRef.injector,
          o = G.create({
            parent: s || this._injector,
            providers: [{ provide: ut, useValue: r }],
          }),
          a = new Pe(this.snackBarContainerComponent, r.viewContainerRef, o),
          l = n.attach(a);
        return (l.instance.snackBarConfig = r), l.instance;
      }
      _attach(n, r) {
        let s = u(u(u({}, new ut()), this._defaultConfig), r),
          o = this._createOverlay(s),
          a = this._attachSnackBarContainer(o, s),
          l = new $t(a, o);
        if (n instanceof qn) {
          let c = new hr(n, null, { $implicit: s.data, snackBarRef: l });
          l.instance = a.attachTemplatePortal(c);
        } else {
          let c = this._createInjector(s, l),
            h = new Pe(n, void 0, c),
            m = a.attachComponentPortal(h);
          l.instance = m.instance;
        }
        return (
          this._breakpointObserver
            .observe(lr.HandsetPortrait)
            .pipe(Ft(o.detachments()))
            .subscribe((c) => {
              o.overlayElement.classList.toggle(
                this.handsetCssClass,
                c.matches,
              );
            }),
          s.announcementMessage &&
            a._onAnnounce.subscribe(() => {
              this._live.announce(s.announcementMessage, s.politeness);
            }),
          this._animateSnackBar(l, s),
          (this._openedSnackBarRef = l),
          this._openedSnackBarRef
        );
      }
      _animateSnackBar(n, r) {
        n.afterDismissed().subscribe(() => {
          this._openedSnackBarRef == n && (this._openedSnackBarRef = null),
            r.announcementMessage && this._live.clear();
        }),
          this._openedSnackBarRef
            ? (this._openedSnackBarRef.afterDismissed().subscribe(() => {
                n.containerInstance.enter();
              }),
              this._openedSnackBarRef.dismiss())
            : n.containerInstance.enter(),
          r.duration &&
            r.duration > 0 &&
            n.afterOpened().subscribe(() => n._dismissAfter(r.duration));
      }
      _createOverlay(n) {
        let r = new pr();
        r.direction = n.direction;
        let s = this._overlay.position().global(),
          o = n.direction === "rtl",
          a =
            n.horizontalPosition === "left" ||
            (n.horizontalPosition === "start" && !o) ||
            (n.horizontalPosition === "end" && o),
          l = !a && n.horizontalPosition !== "center";
        return (
          a ? s.left("0") : l ? s.right("0") : s.centerHorizontally(),
          n.verticalPosition === "top" ? s.top("0") : s.bottom("0"),
          (r.positionStrategy = s),
          this._overlay.create(r)
        );
      }
      _createInjector(n, r) {
        let s = n && n.viewContainerRef && n.viewContainerRef.injector;
        return G.create({
          parent: s || this._injector,
          providers: [
            { provide: $t, useValue: r },
            { provide: Xr, useValue: n.data },
          ],
        });
      }
    };
    (t.ɵfac = function (r) {
      return new (r || t)(N(gr), N(ur), N(G), N(cr), N(t, 12), N(co));
    }),
      (t.ɵprov = C({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })();
var Aa = (() => {
  var t;
  let i = class i {
    constructor() {
      Dn(this, t, f(Jr));
    }
    showError(r, s = 3e3) {
      _n(this, t).open(r, "Dismiss", {
        duration: s,
        panelClass: "shop-snackbar-error",
      });
    }
  };
  (t = new WeakMap()),
    (i.ɵfac = function (s) {
      return new (s || i)();
    }),
    (i.ɵprov = C({ token: i, factory: i.ɵfac, providedIn: "root" }));
  let e = i;
  return e;
})();
export { Y as a, Mi as b, In as c, Bo as d, qo as e, Vo as f, Aa as g };
