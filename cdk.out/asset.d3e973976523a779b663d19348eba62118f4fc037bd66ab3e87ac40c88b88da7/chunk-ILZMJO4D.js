var sg = Object.defineProperty,
  ag = Object.defineProperties;
var cg = Object.getOwnPropertyDescriptors;
var zi = Object.getOwnPropertySymbols;
var ql = Object.prototype.hasOwnProperty,
  Yl = Object.prototype.propertyIsEnumerable;
var Gl = (t, e, i) =>
    e in t
      ? sg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[e] = i),
  P = (t, e) => {
    for (var i in (e ||= {})) ql.call(e, i) && Gl(t, i, e[i]);
    if (zi) for (var i of zi(e)) Yl.call(e, i) && Gl(t, i, e[i]);
    return t;
  },
  le = (t, e) => ag(t, cg(e));
var lg = (t, e) => {
  var i = {};
  for (var n in t) ql.call(t, n) && e.indexOf(n) < 0 && (i[n] = t[n]);
  if (t != null && zi)
    for (var n of zi(t)) e.indexOf(n) < 0 && Yl.call(t, n) && (i[n] = t[n]);
  return i;
};
var Zl = (t, e, i) => {
  if (!e.has(t)) throw TypeError("Cannot " + i);
};
var HI = (t, e, i) => (
    Zl(t, e, "read from private field"), i ? i.call(t) : e.get(t)
  ),
  UI = (t, e, i) => {
    if (e.has(t))
      throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(t) : e.set(t, i);
  },
  $I = (t, e, i, n) => (
    Zl(t, e, "write to private field"), n ? n.call(t, i) : e.set(t, i), i
  );
function Kl(t, e) {
  return Object.is(t, e);
}
var X = null,
  Xn = !1,
  Wi = 1,
  de = Symbol("SIGNAL");
function O(t) {
  let e = X;
  return (X = t), e;
}
function dg() {
  return Xn;
}
var Jn = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: !1,
  producerNode: void 0,
  producerLastReadVersion: void 0,
  producerIndexOfThis: void 0,
  nextProducerIndex: 0,
  liveConsumerNode: void 0,
  liveConsumerIndexOfThis: void 0,
  consumerAllowSignalWrites: !1,
  consumerIsAlwaysLive: !1,
  producerMustRecompute: () => !1,
  producerRecomputeValue: () => {},
  consumerMarkedDirty: () => {},
  consumerOnSignalRead: () => {},
};
function ei(t) {
  if (Xn) throw new Error("");
  if (X === null) return;
  X.consumerOnSignalRead(t);
  let e = X.nextProducerIndex++;
  if ((dn(X), e < X.producerNode.length && X.producerNode[e] !== t && Qn(X))) {
    let i = X.producerNode[e];
    Ki(i, X.producerIndexOfThis[e]);
  }
  X.producerNode[e] !== t &&
    ((X.producerNode[e] = t),
    (X.producerIndexOfThis[e] = Qn(X) ? td(t, X, e) : 0)),
    (X.producerLastReadVersion[e] = t.version);
}
function ug() {
  Wi++;
}
function Xl(t) {
  if (!(Qn(t) && !t.dirty) && !(!t.dirty && t.lastCleanEpoch === Wi)) {
    if (!t.producerMustRecompute(t) && !Zi(t)) {
      (t.dirty = !1), (t.lastCleanEpoch = Wi);
      return;
    }
    t.producerRecomputeValue(t), (t.dirty = !1), (t.lastCleanEpoch = Wi);
  }
}
function Ql(t) {
  if (t.liveConsumerNode === void 0) return;
  let e = Xn;
  Xn = !0;
  try {
    for (let i of t.liveConsumerNode) i.dirty || ed(i);
  } finally {
    Xn = e;
  }
}
function Jl() {
  return X?.consumerAllowSignalWrites !== !1;
}
function ed(t) {
  (t.dirty = !0), Ql(t), t.consumerMarkedDirty?.(t);
}
function qi(t) {
  return t && (t.nextProducerIndex = 0), O(t);
}
function Yi(t, e) {
  if (
    (O(e),
    !(
      !t ||
      t.producerNode === void 0 ||
      t.producerIndexOfThis === void 0 ||
      t.producerLastReadVersion === void 0
    ))
  ) {
    if (Qn(t))
      for (let i = t.nextProducerIndex; i < t.producerNode.length; i++)
        Ki(t.producerNode[i], t.producerIndexOfThis[i]);
    for (; t.producerNode.length > t.nextProducerIndex; )
      t.producerNode.pop(),
        t.producerLastReadVersion.pop(),
        t.producerIndexOfThis.pop();
  }
}
function Zi(t) {
  dn(t);
  for (let e = 0; e < t.producerNode.length; e++) {
    let i = t.producerNode[e],
      n = t.producerLastReadVersion[e];
    if (n !== i.version || (Xl(i), n !== i.version)) return !0;
  }
  return !1;
}
function ms(t) {
  if ((dn(t), Qn(t)))
    for (let e = 0; e < t.producerNode.length; e++)
      Ki(t.producerNode[e], t.producerIndexOfThis[e]);
  (t.producerNode.length =
    t.producerLastReadVersion.length =
    t.producerIndexOfThis.length =
      0),
    t.liveConsumerNode &&
      (t.liveConsumerNode.length = t.liveConsumerIndexOfThis.length = 0);
}
function td(t, e, i) {
  if ((nd(t), dn(t), t.liveConsumerNode.length === 0))
    for (let n = 0; n < t.producerNode.length; n++)
      t.producerIndexOfThis[n] = td(t.producerNode[n], t, n);
  return t.liveConsumerIndexOfThis.push(i), t.liveConsumerNode.push(e) - 1;
}
function Ki(t, e) {
  if ((nd(t), dn(t), t.liveConsumerNode.length === 1))
    for (let n = 0; n < t.producerNode.length; n++)
      Ki(t.producerNode[n], t.producerIndexOfThis[n]);
  let i = t.liveConsumerNode.length - 1;
  if (
    ((t.liveConsumerNode[e] = t.liveConsumerNode[i]),
    (t.liveConsumerIndexOfThis[e] = t.liveConsumerIndexOfThis[i]),
    t.liveConsumerNode.length--,
    t.liveConsumerIndexOfThis.length--,
    e < t.liveConsumerNode.length)
  ) {
    let n = t.liveConsumerIndexOfThis[e],
      r = t.liveConsumerNode[e];
    dn(r), (r.producerIndexOfThis[n] = e);
  }
}
function Qn(t) {
  return t.consumerIsAlwaysLive || (t?.liveConsumerNode?.length ?? 0) > 0;
}
function dn(t) {
  (t.producerNode ??= []),
    (t.producerIndexOfThis ??= []),
    (t.producerLastReadVersion ??= []);
}
function nd(t) {
  (t.liveConsumerNode ??= []), (t.liveConsumerIndexOfThis ??= []);
}
function gs(t) {
  let e = Object.create(fg);
  e.computation = t;
  let i = () => {
    if ((Xl(e), ei(e), e.value === Gi)) throw e.error;
    return e.value;
  };
  return (i[de] = e), i;
}
var fs = Symbol("UNSET"),
  hs = Symbol("COMPUTING"),
  Gi = Symbol("ERRORED"),
  fg = le(P({}, Jn), {
    value: fs,
    dirty: !0,
    error: null,
    equal: Kl,
    producerMustRecompute(t) {
      return t.value === fs || t.value === hs;
    },
    producerRecomputeValue(t) {
      if (t.value === hs) throw new Error("Detected cycle in computations.");
      let e = t.value;
      t.value = hs;
      let i = qi(t),
        n;
      try {
        n = t.computation();
      } catch (r) {
        (n = Gi), (t.error = r);
      } finally {
        Yi(t, i);
      }
      if (e !== fs && e !== Gi && n !== Gi && t.equal(e, n)) {
        t.value = e;
        return;
      }
      (t.value = n), t.version++;
    },
  });
function hg() {
  throw new Error();
}
var id = hg;
function rd() {
  id();
}
function od(t) {
  id = t;
}
var pg = null;
function sd(t) {
  let e = Object.create(bs);
  e.value = t;
  let i = () => (ei(e), e.value);
  return (i[de] = e), i;
}
function ti(t, e) {
  Jl() || rd(), t.equal(t.value, e) || ((t.value = e), mg(t));
}
function ad(t, e) {
  Jl() || rd(), ti(t, e(t.value));
}
var bs = le(P({}, Jn), { equal: Kl, value: void 0 });
function mg(t) {
  t.version++, ug(), Ql(t), pg?.();
}
function cd(t, e, i) {
  let n = Object.create(gg);
  i && (n.consumerAllowSignalWrites = !0), (n.fn = t), (n.schedule = e);
  let r = (c) => {
    n.cleanupFn = c;
  };
  function o(c) {
    return c.fn === null && c.schedule === null;
  }
  function s(c) {
    o(c) ||
      (ms(c),
      c.cleanupFn(),
      (c.fn = null),
      (c.schedule = null),
      (c.cleanupFn = ps));
  }
  let a = () => {
    if (n.fn === null) return;
    if (dg())
      throw new Error(
        "Schedulers cannot synchronously execute watches while scheduling.",
      );
    if (((n.dirty = !1), n.hasRun && !Zi(n))) return;
    n.hasRun = !0;
    let c = qi(n);
    try {
      n.cleanupFn(), (n.cleanupFn = ps), n.fn(r);
    } finally {
      Yi(n, c);
    }
  };
  return (
    (n.ref = {
      notify: () => ed(n),
      run: a,
      cleanup: () => n.cleanupFn(),
      destroy: () => s(n),
      [de]: n,
    }),
    n.ref
  );
}
var ps = () => {},
  gg = le(P({}, Jn), {
    consumerIsAlwaysLive: !0,
    consumerAllowSignalWrites: !1,
    consumerMarkedDirty: (t) => {
      t.schedule !== null && t.schedule(t.ref);
    },
    hasRun: !1,
    cleanupFn: ps,
  });
function w(t) {
  return typeof t == "function";
}
function un(t) {
  let i = t((n) => {
    Error.call(n), (n.stack = new Error().stack);
  });
  return (
    (i.prototype = Object.create(Error.prototype)),
    (i.prototype.constructor = i),
    i
  );
}
var Xi = un(
  (t) =>
    function (i) {
      t(this),
        (this.message = i
          ? `${i.length} errors occurred during unsubscription:
${i.map((n, r) => `${r + 1}) ${n.toString()}`).join(`
  `)}`
          : ""),
        (this.name = "UnsubscriptionError"),
        (this.errors = i);
    },
);
function kt(t, e) {
  if (t) {
    let i = t.indexOf(e);
    0 <= i && t.splice(i, 1);
  }
}
var $ = class t {
  constructor(e) {
    (this.initialTeardown = e),
      (this.closed = !1),
      (this._parentage = null),
      (this._finalizers = null);
  }
  unsubscribe() {
    let e;
    if (!this.closed) {
      this.closed = !0;
      let { _parentage: i } = this;
      if (i)
        if (((this._parentage = null), Array.isArray(i)))
          for (let o of i) o.remove(this);
        else i.remove(this);
      let { initialTeardown: n } = this;
      if (w(n))
        try {
          n();
        } catch (o) {
          e = o instanceof Xi ? o.errors : [o];
        }
      let { _finalizers: r } = this;
      if (r) {
        this._finalizers = null;
        for (let o of r)
          try {
            ld(o);
          } catch (s) {
            (e = e ?? []),
              s instanceof Xi ? (e = [...e, ...s.errors]) : e.push(s);
          }
      }
      if (e) throw new Xi(e);
    }
  }
  add(e) {
    var i;
    if (e && e !== this)
      if (this.closed) ld(e);
      else {
        if (e instanceof t) {
          if (e.closed || e._hasParent(this)) return;
          e._addParent(this);
        }
        (this._finalizers =
          (i = this._finalizers) !== null && i !== void 0 ? i : []).push(e);
      }
  }
  _hasParent(e) {
    let { _parentage: i } = this;
    return i === e || (Array.isArray(i) && i.includes(e));
  }
  _addParent(e) {
    let { _parentage: i } = this;
    this._parentage = Array.isArray(i) ? (i.push(e), i) : i ? [i, e] : e;
  }
  _removeParent(e) {
    let { _parentage: i } = this;
    i === e ? (this._parentage = null) : Array.isArray(i) && kt(i, e);
  }
  remove(e) {
    let { _finalizers: i } = this;
    i && kt(i, e), e instanceof t && e._removeParent(this);
  }
};
$.EMPTY = (() => {
  let t = new $();
  return (t.closed = !0), t;
})();
var vs = $.EMPTY;
function Qi(t) {
  return (
    t instanceof $ ||
    (t && "closed" in t && w(t.remove) && w(t.add) && w(t.unsubscribe))
  );
}
function ld(t) {
  w(t) ? t() : t.unsubscribe();
}
var Se = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1,
};
var fn = {
  setTimeout(t, e, ...i) {
    let { delegate: n } = fn;
    return n?.setTimeout ? n.setTimeout(t, e, ...i) : setTimeout(t, e, ...i);
  },
  clearTimeout(t) {
    let { delegate: e } = fn;
    return (e?.clearTimeout || clearTimeout)(t);
  },
  delegate: void 0,
};
function Ji(t) {
  fn.setTimeout(() => {
    let { onUnhandledError: e } = Se;
    if (e) e(t);
    else throw t;
  });
}
function Ft() {}
var dd = ys("C", void 0, void 0);
function ud(t) {
  return ys("E", void 0, t);
}
function fd(t) {
  return ys("N", t, void 0);
}
function ys(t, e, i) {
  return { kind: t, value: e, error: i };
}
var Pt = null;
function hn(t) {
  if (Se.useDeprecatedSynchronousErrorHandling) {
    let e = !Pt;
    if ((e && (Pt = { errorThrown: !1, error: null }), t(), e)) {
      let { errorThrown: i, error: n } = Pt;
      if (((Pt = null), i)) throw n;
    }
  } else t();
}
function hd(t) {
  Se.useDeprecatedSynchronousErrorHandling &&
    Pt &&
    ((Pt.errorThrown = !0), (Pt.error = t));
}
var Lt = class extends $ {
    constructor(e) {
      super(),
        (this.isStopped = !1),
        e
          ? ((this.destination = e), Qi(e) && e.add(this))
          : (this.destination = yg);
    }
    static create(e, i, n) {
      return new et(e, i, n);
    }
    next(e) {
      this.isStopped ? Ds(fd(e), this) : this._next(e);
    }
    error(e) {
      this.isStopped
        ? Ds(ud(e), this)
        : ((this.isStopped = !0), this._error(e));
    }
    complete() {
      this.isStopped ? Ds(dd, this) : ((this.isStopped = !0), this._complete());
    }
    unsubscribe() {
      this.closed ||
        ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
    }
    _next(e) {
      this.destination.next(e);
    }
    _error(e) {
      try {
        this.destination.error(e);
      } finally {
        this.unsubscribe();
      }
    }
    _complete() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }
  },
  bg = Function.prototype.bind;
function _s(t, e) {
  return bg.call(t, e);
}
var ws = class {
    constructor(e) {
      this.partialObserver = e;
    }
    next(e) {
      let { partialObserver: i } = this;
      if (i.next)
        try {
          i.next(e);
        } catch (n) {
          er(n);
        }
    }
    error(e) {
      let { partialObserver: i } = this;
      if (i.error)
        try {
          i.error(e);
        } catch (n) {
          er(n);
        }
      else er(e);
    }
    complete() {
      let { partialObserver: e } = this;
      if (e.complete)
        try {
          e.complete();
        } catch (i) {
          er(i);
        }
    }
  },
  et = class extends Lt {
    constructor(e, i, n) {
      super();
      let r;
      if (w(e) || !e)
        r = { next: e ?? void 0, error: i ?? void 0, complete: n ?? void 0 };
      else {
        let o;
        this && Se.useDeprecatedNextContext
          ? ((o = Object.create(e)),
            (o.unsubscribe = () => this.unsubscribe()),
            (r = {
              next: e.next && _s(e.next, o),
              error: e.error && _s(e.error, o),
              complete: e.complete && _s(e.complete, o),
            }))
          : (r = e);
      }
      this.destination = new ws(r);
    }
  };
function er(t) {
  Se.useDeprecatedSynchronousErrorHandling ? hd(t) : Ji(t);
}
function vg(t) {
  throw t;
}
function Ds(t, e) {
  let { onStoppedNotification: i } = Se;
  i && fn.setTimeout(() => i(t, e));
}
var yg = { closed: !0, next: Ft, error: vg, complete: Ft };
var pn = (typeof Symbol == "function" && Symbol.observable) || "@@observable";
function oe(t) {
  return t;
}
function _g(...t) {
  return Es(t);
}
function Es(t) {
  return t.length === 0
    ? oe
    : t.length === 1
      ? t[0]
      : function (i) {
          return t.reduce((n, r) => r(n), i);
        };
}
var S = (() => {
  class t {
    constructor(i) {
      i && (this._subscribe = i);
    }
    lift(i) {
      let n = new t();
      return (n.source = this), (n.operator = i), n;
    }
    subscribe(i, n, r) {
      let o = wg(i) ? i : new et(i, n, r);
      return (
        hn(() => {
          let { operator: s, source: a } = this;
          o.add(
            s ? s.call(o, a) : a ? this._subscribe(o) : this._trySubscribe(o),
          );
        }),
        o
      );
    }
    _trySubscribe(i) {
      try {
        return this._subscribe(i);
      } catch (n) {
        i.error(n);
      }
    }
    forEach(i, n) {
      return (
        (n = pd(n)),
        new n((r, o) => {
          let s = new et({
            next: (a) => {
              try {
                i(a);
              } catch (c) {
                o(c), s.unsubscribe();
              }
            },
            error: o,
            complete: r,
          });
          this.subscribe(s);
        })
      );
    }
    _subscribe(i) {
      var n;
      return (n = this.source) === null || n === void 0
        ? void 0
        : n.subscribe(i);
    }
    [pn]() {
      return this;
    }
    pipe(...i) {
      return Es(i)(this);
    }
    toPromise(i) {
      return (
        (i = pd(i)),
        new i((n, r) => {
          let o;
          this.subscribe(
            (s) => (o = s),
            (s) => r(s),
            () => n(o),
          );
        })
      );
    }
  }
  return (t.create = (e) => new t(e)), t;
})();
function pd(t) {
  var e;
  return (e = t ?? Se.Promise) !== null && e !== void 0 ? e : Promise;
}
function Dg(t) {
  return t && w(t.next) && w(t.error) && w(t.complete);
}
function wg(t) {
  return (t && t instanceof Lt) || (Dg(t) && Qi(t));
}
function Is(t) {
  return w(t?.lift);
}
function M(t) {
  return (e) => {
    if (Is(e))
      return e.lift(function (i) {
        try {
          return t(i, this);
        } catch (n) {
          this.error(n);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function C(t, e, i, n, r) {
  return new xs(t, e, i, n, r);
}
var xs = class extends Lt {
  constructor(e, i, n, r, o, s) {
    super(e),
      (this.onFinalize = o),
      (this.shouldUnsubscribe = s),
      (this._next = i
        ? function (a) {
            try {
              i(a);
            } catch (c) {
              e.error(c);
            }
          }
        : super._next),
      (this._error = r
        ? function (a) {
            try {
              r(a);
            } catch (c) {
              e.error(c);
            } finally {
              this.unsubscribe();
            }
          }
        : super._error),
      (this._complete = n
        ? function () {
            try {
              n();
            } catch (a) {
              e.error(a);
            } finally {
              this.unsubscribe();
            }
          }
        : super._complete);
  }
  unsubscribe() {
    var e;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      let { closed: i } = this;
      super.unsubscribe(),
        !i && ((e = this.onFinalize) === null || e === void 0 || e.call(this));
    }
  }
};
function Cs() {
  return M((t, e) => {
    let i = null;
    t._refCount++;
    let n = C(e, void 0, void 0, void 0, () => {
      if (!t || t._refCount <= 0 || 0 < --t._refCount) {
        i = null;
        return;
      }
      let r = t._connection,
        o = i;
      (i = null), r && (!o || r === o) && r.unsubscribe(), e.unsubscribe();
    });
    t.subscribe(n), n.closed || (i = t.connect());
  });
}
var ni = class extends S {
  constructor(e, i) {
    super(),
      (this.source = e),
      (this.subjectFactory = i),
      (this._subject = null),
      (this._refCount = 0),
      (this._connection = null),
      Is(e) && (this.lift = e.lift);
  }
  _subscribe(e) {
    return this.getSubject().subscribe(e);
  }
  getSubject() {
    let e = this._subject;
    return (
      (!e || e.isStopped) && (this._subject = this.subjectFactory()),
      this._subject
    );
  }
  _teardown() {
    this._refCount = 0;
    let { _connection: e } = this;
    (this._subject = this._connection = null), e?.unsubscribe();
  }
  connect() {
    let e = this._connection;
    if (!e) {
      e = this._connection = new $();
      let i = this.getSubject();
      e.add(
        this.source.subscribe(
          C(
            i,
            void 0,
            () => {
              this._teardown(), i.complete();
            },
            (n) => {
              this._teardown(), i.error(n);
            },
            () => this._teardown(),
          ),
        ),
      ),
        e.closed && ((this._connection = null), (e = $.EMPTY));
    }
    return e;
  }
  refCount() {
    return Cs()(this);
  }
};
var md = un(
  (t) =>
    function () {
      t(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed");
    },
);
var L = (() => {
    class t extends S {
      constructor() {
        super(),
          (this.closed = !1),
          (this.currentObservers = null),
          (this.observers = []),
          (this.isStopped = !1),
          (this.hasError = !1),
          (this.thrownError = null);
      }
      lift(i) {
        let n = new tr(this, this);
        return (n.operator = i), n;
      }
      _throwIfClosed() {
        if (this.closed) throw new md();
      }
      next(i) {
        hn(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.currentObservers ||
              (this.currentObservers = Array.from(this.observers));
            for (let n of this.currentObservers) n.next(i);
          }
        });
      }
      error(i) {
        hn(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            (this.hasError = this.isStopped = !0), (this.thrownError = i);
            let { observers: n } = this;
            for (; n.length; ) n.shift().error(i);
          }
        });
      }
      complete() {
        hn(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.isStopped = !0;
            let { observers: i } = this;
            for (; i.length; ) i.shift().complete();
          }
        });
      }
      unsubscribe() {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }
      get observed() {
        var i;
        return (
          ((i = this.observers) === null || i === void 0 ? void 0 : i.length) >
          0
        );
      }
      _trySubscribe(i) {
        return this._throwIfClosed(), super._trySubscribe(i);
      }
      _subscribe(i) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(i),
          this._innerSubscribe(i)
        );
      }
      _innerSubscribe(i) {
        let { hasError: n, isStopped: r, observers: o } = this;
        return n || r
          ? vs
          : ((this.currentObservers = null),
            o.push(i),
            new $(() => {
              (this.currentObservers = null), kt(o, i);
            }));
      }
      _checkFinalizedStatuses(i) {
        let { hasError: n, thrownError: r, isStopped: o } = this;
        n ? i.error(r) : o && i.complete();
      }
      asObservable() {
        let i = new S();
        return (i.source = this), i;
      }
    }
    return (t.create = (e, i) => new tr(e, i)), t;
  })(),
  tr = class extends L {
    constructor(e, i) {
      super(), (this.destination = e), (this.source = i);
    }
    next(e) {
      var i, n;
      (n =
        (i = this.destination) === null || i === void 0 ? void 0 : i.next) ===
        null ||
        n === void 0 ||
        n.call(i, e);
    }
    error(e) {
      var i, n;
      (n =
        (i = this.destination) === null || i === void 0 ? void 0 : i.error) ===
        null ||
        n === void 0 ||
        n.call(i, e);
    }
    complete() {
      var e, i;
      (i =
        (e = this.destination) === null || e === void 0
          ? void 0
          : e.complete) === null ||
        i === void 0 ||
        i.call(e);
    }
    _subscribe(e) {
      var i, n;
      return (n =
        (i = this.source) === null || i === void 0
          ? void 0
          : i.subscribe(e)) !== null && n !== void 0
        ? n
        : vs;
    }
  };
var jt = class extends L {
  constructor(e) {
    super(), (this._value = e);
  }
  get value() {
    return this.getValue();
  }
  _subscribe(e) {
    let i = super._subscribe(e);
    return !i.closed && e.next(this._value), i;
  }
  getValue() {
    let { hasError: e, thrownError: i, _value: n } = this;
    if (e) throw i;
    return this._throwIfClosed(), n;
  }
  next(e) {
    super.next((this._value = e));
  }
};
var ii = {
  now() {
    return (ii.delegate || Date).now();
  },
  delegate: void 0,
};
var ri = class extends L {
  constructor(e = 1 / 0, i = 1 / 0, n = ii) {
    super(),
      (this._bufferSize = e),
      (this._windowTime = i),
      (this._timestampProvider = n),
      (this._buffer = []),
      (this._infiniteTimeWindow = !0),
      (this._infiniteTimeWindow = i === 1 / 0),
      (this._bufferSize = Math.max(1, e)),
      (this._windowTime = Math.max(1, i));
  }
  next(e) {
    let {
      isStopped: i,
      _buffer: n,
      _infiniteTimeWindow: r,
      _timestampProvider: o,
      _windowTime: s,
    } = this;
    i || (n.push(e), !r && n.push(o.now() + s)),
      this._trimBuffer(),
      super.next(e);
  }
  _subscribe(e) {
    this._throwIfClosed(), this._trimBuffer();
    let i = this._innerSubscribe(e),
      { _infiniteTimeWindow: n, _buffer: r } = this,
      o = r.slice();
    for (let s = 0; s < o.length && !e.closed; s += n ? 1 : 2) e.next(o[s]);
    return this._checkFinalizedStatuses(e), i;
  }
  _trimBuffer() {
    let {
        _bufferSize: e,
        _timestampProvider: i,
        _buffer: n,
        _infiniteTimeWindow: r,
      } = this,
      o = (r ? 1 : 2) * e;
    if ((e < 1 / 0 && o < n.length && n.splice(0, n.length - o), !r)) {
      let s = i.now(),
        a = 0;
      for (let c = 1; c < n.length && n[c] <= s; c += 2) a = c;
      a && n.splice(0, a + 1);
    }
  }
};
var nr = class extends $ {
  constructor(e, i) {
    super();
  }
  schedule(e, i = 0) {
    return this;
  }
};
var oi = {
  setInterval(t, e, ...i) {
    let { delegate: n } = oi;
    return n?.setInterval ? n.setInterval(t, e, ...i) : setInterval(t, e, ...i);
  },
  clearInterval(t) {
    let { delegate: e } = oi;
    return (e?.clearInterval || clearInterval)(t);
  },
  delegate: void 0,
};
var mn = class extends nr {
  constructor(e, i) {
    super(e, i), (this.scheduler = e), (this.work = i), (this.pending = !1);
  }
  schedule(e, i = 0) {
    var n;
    if (this.closed) return this;
    this.state = e;
    let r = this.id,
      o = this.scheduler;
    return (
      r != null && (this.id = this.recycleAsyncId(o, r, i)),
      (this.pending = !0),
      (this.delay = i),
      (this.id =
        (n = this.id) !== null && n !== void 0
          ? n
          : this.requestAsyncId(o, this.id, i)),
      this
    );
  }
  requestAsyncId(e, i, n = 0) {
    return oi.setInterval(e.flush.bind(e, this), n);
  }
  recycleAsyncId(e, i, n = 0) {
    if (n != null && this.delay === n && this.pending === !1) return i;
    i != null && oi.clearInterval(i);
  }
  execute(e, i) {
    if (this.closed) return new Error("executing a cancelled action");
    this.pending = !1;
    let n = this._execute(e, i);
    if (n) return n;
    this.pending === !1 &&
      this.id != null &&
      (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }
  _execute(e, i) {
    let n = !1,
      r;
    try {
      this.work(e);
    } catch (o) {
      (n = !0), (r = o || new Error("Scheduled action threw falsy error"));
    }
    if (n) return this.unsubscribe(), r;
  }
  unsubscribe() {
    if (!this.closed) {
      let { id: e, scheduler: i } = this,
        { actions: n } = i;
      (this.work = this.state = this.scheduler = null),
        (this.pending = !1),
        kt(n, this),
        e != null && (this.id = this.recycleAsyncId(i, e, null)),
        (this.delay = null),
        super.unsubscribe();
    }
  }
};
var Eg = 1,
  Ms,
  Ts = {};
function gd(t) {
  return t in Ts ? (delete Ts[t], !0) : !1;
}
var bd = {
  setImmediate(t) {
    let e = Eg++;
    return (
      (Ts[e] = !0),
      Ms || (Ms = Promise.resolve()),
      Ms.then(() => gd(e) && t()),
      e
    );
  },
  clearImmediate(t) {
    gd(t);
  },
};
var { setImmediate: Ig, clearImmediate: xg } = bd,
  si = {
    setImmediate(...t) {
      let { delegate: e } = si;
      return (e?.setImmediate || Ig)(...t);
    },
    clearImmediate(t) {
      let { delegate: e } = si;
      return (e?.clearImmediate || xg)(t);
    },
    delegate: void 0,
  };
var ir = class extends mn {
  constructor(e, i) {
    super(e, i), (this.scheduler = e), (this.work = i);
  }
  requestAsyncId(e, i, n = 0) {
    return n !== null && n > 0
      ? super.requestAsyncId(e, i, n)
      : (e.actions.push(this),
        e._scheduled ||
          (e._scheduled = si.setImmediate(e.flush.bind(e, void 0))));
  }
  recycleAsyncId(e, i, n = 0) {
    var r;
    if (n != null ? n > 0 : this.delay > 0)
      return super.recycleAsyncId(e, i, n);
    let { actions: o } = e;
    i != null &&
      ((r = o[o.length - 1]) === null || r === void 0 ? void 0 : r.id) !== i &&
      (si.clearImmediate(i), e._scheduled === i && (e._scheduled = void 0));
  }
};
var gn = class t {
  constructor(e, i = t.now) {
    (this.schedulerActionCtor = e), (this.now = i);
  }
  schedule(e, i = 0, n) {
    return new this.schedulerActionCtor(this, e).schedule(n, i);
  }
};
gn.now = ii.now;
var bn = class extends gn {
  constructor(e, i = gn.now) {
    super(e, i), (this.actions = []), (this._active = !1);
  }
  flush(e) {
    let { actions: i } = this;
    if (this._active) {
      i.push(e);
      return;
    }
    let n;
    this._active = !0;
    do if ((n = e.execute(e.state, e.delay))) break;
    while ((e = i.shift()));
    if (((this._active = !1), n)) {
      for (; (e = i.shift()); ) e.unsubscribe();
      throw n;
    }
  }
};
var rr = class extends bn {
  flush(e) {
    this._active = !0;
    let i = this._scheduled;
    this._scheduled = void 0;
    let { actions: n } = this,
      r;
    e = e || n.shift();
    do if ((r = e.execute(e.state, e.delay))) break;
    while ((e = n[0]) && e.id === i && n.shift());
    if (((this._active = !1), r)) {
      for (; (e = n[0]) && e.id === i && n.shift(); ) e.unsubscribe();
      throw r;
    }
  }
};
var vd = new rr(ir);
var Vt = new bn(mn),
  yd = Vt;
var He = new S((t) => t.complete());
function or(t) {
  return t && w(t.schedule);
}
function Ss(t) {
  return t[t.length - 1];
}
function sr(t) {
  return w(Ss(t)) ? t.pop() : void 0;
}
function Ue(t) {
  return or(Ss(t)) ? t.pop() : void 0;
}
function _d(t, e) {
  return typeof Ss(t) == "number" ? t.pop() : e;
}
function wd(t, e, i, n) {
  function r(o) {
    return o instanceof i
      ? o
      : new i(function (s) {
          s(o);
        });
  }
  return new (i || (i = Promise))(function (o, s) {
    function a(d) {
      try {
        l(n.next(d));
      } catch (u) {
        s(u);
      }
    }
    function c(d) {
      try {
        l(n.throw(d));
      } catch (u) {
        s(u);
      }
    }
    function l(d) {
      d.done ? o(d.value) : r(d.value).then(a, c);
    }
    l((n = n.apply(t, e || [])).next());
  });
}
function Dd(t) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    i = e && t[e],
    n = 0;
  if (i) return i.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function () {
        return (
          t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
}
function Bt(t) {
  return this instanceof Bt ? ((this.v = t), this) : new Bt(t);
}
function Ed(t, e, i) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = i.apply(t, e || []),
    r,
    o = [];
  return (
    (r = {}),
    s("next"),
    s("throw"),
    s("return"),
    (r[Symbol.asyncIterator] = function () {
      return this;
    }),
    r
  );
  function s(f) {
    n[f] &&
      (r[f] = function (h) {
        return new Promise(function (m, g) {
          o.push([f, h, m, g]) > 1 || a(f, h);
        });
      });
  }
  function a(f, h) {
    try {
      c(n[f](h));
    } catch (m) {
      u(o[0][3], m);
    }
  }
  function c(f) {
    f.value instanceof Bt
      ? Promise.resolve(f.value.v).then(l, d)
      : u(o[0][2], f);
  }
  function l(f) {
    a("next", f);
  }
  function d(f) {
    a("throw", f);
  }
  function u(f, h) {
    f(h), o.shift(), o.length && a(o[0][0], o[0][1]);
  }
}
function Id(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator],
    i;
  return e
    ? e.call(t)
    : ((t = typeof Dd == "function" ? Dd(t) : t[Symbol.iterator]()),
      (i = {}),
      n("next"),
      n("throw"),
      n("return"),
      (i[Symbol.asyncIterator] = function () {
        return this;
      }),
      i);
  function n(o) {
    i[o] =
      t[o] &&
      function (s) {
        return new Promise(function (a, c) {
          (s = t[o](s)), r(a, c, s.done, s.value);
        });
      };
  }
  function r(o, s, a, c) {
    Promise.resolve(c).then(function (l) {
      o({ value: l, done: a });
    }, s);
  }
}
var vn = (t) => t && typeof t.length == "number" && typeof t != "function";
function ar(t) {
  return w(t?.then);
}
function cr(t) {
  return w(t[pn]);
}
function lr(t) {
  return Symbol.asyncIterator && w(t?.[Symbol.asyncIterator]);
}
function dr(t) {
  return new TypeError(
    `You provided ${t !== null && typeof t == "object" ? "an invalid object" : `'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
  );
}
function Cg() {
  return typeof Symbol != "function" || !Symbol.iterator
    ? "@@iterator"
    : Symbol.iterator;
}
var ur = Cg();
function fr(t) {
  return w(t?.[ur]);
}
function hr(t) {
  return Ed(this, arguments, function* () {
    let i = t.getReader();
    try {
      for (;;) {
        let { value: n, done: r } = yield Bt(i.read());
        if (r) return yield Bt(void 0);
        yield yield Bt(n);
      }
    } finally {
      i.releaseLock();
    }
  });
}
function pr(t) {
  return w(t?.getReader);
}
function j(t) {
  if (t instanceof S) return t;
  if (t != null) {
    if (cr(t)) return Mg(t);
    if (vn(t)) return Tg(t);
    if (ar(t)) return Sg(t);
    if (lr(t)) return xd(t);
    if (fr(t)) return Ag(t);
    if (pr(t)) return Ng(t);
  }
  throw dr(t);
}
function Mg(t) {
  return new S((e) => {
    let i = t[pn]();
    if (w(i.subscribe)) return i.subscribe(e);
    throw new TypeError(
      "Provided object does not correctly implement Symbol.observable",
    );
  });
}
function Tg(t) {
  return new S((e) => {
    for (let i = 0; i < t.length && !e.closed; i++) e.next(t[i]);
    e.complete();
  });
}
function Sg(t) {
  return new S((e) => {
    t.then(
      (i) => {
        e.closed || (e.next(i), e.complete());
      },
      (i) => e.error(i),
    ).then(null, Ji);
  });
}
function Ag(t) {
  return new S((e) => {
    for (let i of t) if ((e.next(i), e.closed)) return;
    e.complete();
  });
}
function xd(t) {
  return new S((e) => {
    Og(t, e).catch((i) => e.error(i));
  });
}
function Ng(t) {
  return xd(hr(t));
}
function Og(t, e) {
  var i, n, r, o;
  return wd(this, void 0, void 0, function* () {
    try {
      for (i = Id(t); (n = yield i.next()), !n.done; ) {
        let s = n.value;
        if ((e.next(s), e.closed)) return;
      }
    } catch (s) {
      r = { error: s };
    } finally {
      try {
        n && !n.done && (o = i.return) && (yield o.call(i));
      } finally {
        if (r) throw r.error;
      }
    }
    e.complete();
  });
}
function ue(t, e, i, n = 0, r = !1) {
  let o = e.schedule(function () {
    i(), r ? t.add(this.schedule(null, n)) : this.unsubscribe();
  }, n);
  if ((t.add(o), !r)) return o;
}
function mr(t, e = 0) {
  return M((i, n) => {
    i.subscribe(
      C(
        n,
        (r) => ue(n, t, () => n.next(r), e),
        () => ue(n, t, () => n.complete(), e),
        (r) => ue(n, t, () => n.error(r), e),
      ),
    );
  });
}
function gr(t, e = 0) {
  return M((i, n) => {
    n.add(t.schedule(() => i.subscribe(n), e));
  });
}
function Cd(t, e) {
  return j(t).pipe(gr(e), mr(e));
}
function Md(t, e) {
  return j(t).pipe(gr(e), mr(e));
}
function Td(t, e) {
  return new S((i) => {
    let n = 0;
    return e.schedule(function () {
      n === t.length
        ? i.complete()
        : (i.next(t[n++]), i.closed || this.schedule());
    });
  });
}
function Sd(t, e) {
  return new S((i) => {
    let n;
    return (
      ue(i, e, () => {
        (n = t[ur]()),
          ue(
            i,
            e,
            () => {
              let r, o;
              try {
                ({ value: r, done: o } = n.next());
              } catch (s) {
                i.error(s);
                return;
              }
              o ? i.complete() : i.next(r);
            },
            0,
            !0,
          );
      }),
      () => w(n?.return) && n.return()
    );
  });
}
function br(t, e) {
  if (!t) throw new Error("Iterable cannot be null");
  return new S((i) => {
    ue(i, e, () => {
      let n = t[Symbol.asyncIterator]();
      ue(
        i,
        e,
        () => {
          n.next().then((r) => {
            r.done ? i.complete() : i.next(r.value);
          });
        },
        0,
        !0,
      );
    });
  });
}
function Ad(t, e) {
  return br(hr(t), e);
}
function Nd(t, e) {
  if (t != null) {
    if (cr(t)) return Cd(t, e);
    if (vn(t)) return Td(t, e);
    if (ar(t)) return Md(t, e);
    if (lr(t)) return br(t, e);
    if (fr(t)) return Sd(t, e);
    if (pr(t)) return Ad(t, e);
  }
  throw dr(t);
}
function Ee(t, e) {
  return e ? Nd(t, e) : j(t);
}
function Ae(...t) {
  let e = Ue(t);
  return Ee(t, e);
}
function Rg(t, e) {
  let i = w(t) ? t : () => t,
    n = (r) => r.error(i());
  return new S(e ? (r) => e.schedule(n, 0, r) : n);
}
function As(t) {
  return !!t && (t instanceof S || (w(t.lift) && w(t.subscribe)));
}
var Ht = un(
  (t) =>
    function () {
      t(this),
        (this.name = "EmptyError"),
        (this.message = "no elements in sequence");
    },
);
function Od(t) {
  return t instanceof Date && !isNaN(t);
}
function G(t, e) {
  return M((i, n) => {
    let r = 0;
    i.subscribe(
      C(n, (o) => {
        n.next(t.call(e, o, r++));
      }),
    );
  });
}
var { isArray: kg } = Array;
function Fg(t, e) {
  return kg(e) ? t(...e) : t(e);
}
function yn(t) {
  return G((e) => Fg(t, e));
}
var { isArray: Pg } = Array,
  { getPrototypeOf: Lg, prototype: jg, keys: Vg } = Object;
function vr(t) {
  if (t.length === 1) {
    let e = t[0];
    if (Pg(e)) return { args: e, keys: null };
    if (Bg(e)) {
      let i = Vg(e);
      return { args: i.map((n) => e[n]), keys: i };
    }
  }
  return { args: t, keys: null };
}
function Bg(t) {
  return t && typeof t == "object" && Lg(t) === jg;
}
function yr(t, e) {
  return t.reduce((i, n, r) => ((i[n] = e[r]), i), {});
}
function Ns(...t) {
  let e = Ue(t),
    i = sr(t),
    { args: n, keys: r } = vr(t);
  if (n.length === 0) return Ee([], e);
  let o = new S(Hg(n, e, r ? (s) => yr(r, s) : oe));
  return i ? o.pipe(yn(i)) : o;
}
function Hg(t, e, i = oe) {
  return (n) => {
    Rd(
      e,
      () => {
        let { length: r } = t,
          o = new Array(r),
          s = r,
          a = r;
        for (let c = 0; c < r; c++)
          Rd(
            e,
            () => {
              let l = Ee(t[c], e),
                d = !1;
              l.subscribe(
                C(
                  n,
                  (u) => {
                    (o[c] = u), d || ((d = !0), a--), a || n.next(i(o.slice()));
                  },
                  () => {
                    --s || n.complete();
                  },
                ),
              );
            },
            n,
          );
      },
      n,
    );
  };
}
function Rd(t, e, i) {
  t ? ue(i, t, e) : e();
}
function kd(t, e, i, n, r, o, s, a) {
  let c = [],
    l = 0,
    d = 0,
    u = !1,
    f = () => {
      u && !c.length && !l && e.complete();
    },
    h = (g) => (l < n ? m(g) : c.push(g)),
    m = (g) => {
      o && e.next(g), l++;
      let v = !1;
      j(i(g, d++)).subscribe(
        C(
          e,
          (y) => {
            r?.(y), o ? h(y) : e.next(y);
          },
          () => {
            v = !0;
          },
          void 0,
          () => {
            if (v)
              try {
                for (l--; c.length && l < n; ) {
                  let y = c.shift();
                  s ? ue(e, s, () => m(y)) : m(y);
                }
                f();
              } catch (y) {
                e.error(y);
              }
          },
        ),
      );
    };
  return (
    t.subscribe(
      C(e, h, () => {
        (u = !0), f();
      }),
    ),
    () => {
      a?.();
    }
  );
}
function Ne(t, e, i = 1 / 0) {
  return w(e)
    ? Ne((n, r) => G((o, s) => e(n, o, r, s))(j(t(n, r))), i)
    : (typeof e == "number" && (i = e), M((n, r) => kd(n, r, t, i)));
}
function _r(t = 1 / 0) {
  return Ne(oe, t);
}
function Fd() {
  return _r(1);
}
function pt(...t) {
  return Fd()(Ee(t, Ue(t)));
}
function Ug(t) {
  return new S((e) => {
    j(t()).subscribe(e);
  });
}
function $g(...t) {
  let e = sr(t),
    { args: i, keys: n } = vr(t),
    r = new S((o) => {
      let { length: s } = i;
      if (!s) {
        o.complete();
        return;
      }
      let a = new Array(s),
        c = s,
        l = s;
      for (let d = 0; d < s; d++) {
        let u = !1;
        j(i[d]).subscribe(
          C(
            o,
            (f) => {
              u || ((u = !0), l--), (a[d] = f);
            },
            () => c--,
            void 0,
            () => {
              (!c || !u) && (l || o.next(n ? yr(n, a) : a), o.complete());
            },
          ),
        );
      }
    });
  return e ? r.pipe(yn(e)) : r;
}
var zg = ["addListener", "removeListener"],
  Wg = ["addEventListener", "removeEventListener"],
  Gg = ["on", "off"];
function ai(t, e, i, n) {
  if ((w(i) && ((n = i), (i = void 0)), n)) return ai(t, e, i).pipe(yn(n));
  let [r, o] = Zg(t)
    ? Wg.map((s) => (a) => t[s](e, a, i))
    : qg(t)
      ? zg.map(Pd(t, e))
      : Yg(t)
        ? Gg.map(Pd(t, e))
        : [];
  if (!r && vn(t)) return Ne((s) => ai(s, e, i))(j(t));
  if (!r) throw new TypeError("Invalid event target");
  return new S((s) => {
    let a = (...c) => s.next(1 < c.length ? c : c[0]);
    return r(a), () => o(a);
  });
}
function Pd(t, e) {
  return (i) => (n) => t[i](e, n);
}
function qg(t) {
  return w(t.addListener) && w(t.removeListener);
}
function Yg(t) {
  return w(t.on) && w(t.off);
}
function Zg(t) {
  return w(t.addEventListener) && w(t.removeEventListener);
}
function Dr(t = 0, e, i = yd) {
  let n = -1;
  return (
    e != null && (or(e) ? (i = e) : (n = e)),
    new S((r) => {
      let o = Od(t) ? +t - i.now() : t;
      o < 0 && (o = 0);
      let s = 0;
      return i.schedule(function () {
        r.closed ||
          (r.next(s++), 0 <= n ? this.schedule(void 0, n) : r.complete());
      }, o);
    })
  );
}
function Os(...t) {
  let e = Ue(t),
    i = _d(t, 1 / 0),
    n = t;
  return n.length ? (n.length === 1 ? j(n[0]) : _r(i)(Ee(n, e))) : He;
}
function ne(t, e) {
  return M((i, n) => {
    let r = 0;
    i.subscribe(C(n, (o) => t.call(e, o, r++) && n.next(o)));
  });
}
function Ld(t) {
  return M((e, i) => {
    let n = !1,
      r = null,
      o = null,
      s = !1,
      a = () => {
        if ((o?.unsubscribe(), (o = null), n)) {
          n = !1;
          let l = r;
          (r = null), i.next(l);
        }
        s && i.complete();
      },
      c = () => {
        (o = null), s && i.complete();
      };
    e.subscribe(
      C(
        i,
        (l) => {
          (n = !0), (r = l), o || j(t(l)).subscribe((o = C(i, a, c)));
        },
        () => {
          (s = !0), (!n || !o || o.closed) && i.complete();
        },
      ),
    );
  });
}
function wr(t, e = Vt) {
  return Ld(() => Dr(t, e));
}
function jd(t) {
  return M((e, i) => {
    let n = null,
      r = !1,
      o;
    (n = e.subscribe(
      C(i, void 0, void 0, (s) => {
        (o = j(t(s, jd(t)(e)))),
          n ? (n.unsubscribe(), (n = null), o.subscribe(i)) : (r = !0);
      }),
    )),
      r && (n.unsubscribe(), (n = null), o.subscribe(i));
  });
}
function Vd(t, e, i, n, r) {
  return (o, s) => {
    let a = i,
      c = e,
      l = 0;
    o.subscribe(
      C(
        s,
        (d) => {
          let u = l++;
          (c = a ? t(c, d, u) : ((a = !0), d)), n && s.next(c);
        },
        r &&
          (() => {
            a && s.next(c), s.complete();
          }),
      ),
    );
  };
}
function Rs(t, e) {
  return w(e) ? Ne(t, e, 1) : Ne(t, 1);
}
function ci(t, e = Vt) {
  return M((i, n) => {
    let r = null,
      o = null,
      s = null,
      a = () => {
        if (r) {
          r.unsubscribe(), (r = null);
          let l = o;
          (o = null), n.next(l);
        }
      };
    function c() {
      let l = s + t,
        d = e.now();
      if (d < l) {
        (r = this.schedule(void 0, l - d)), n.add(r);
        return;
      }
      a();
    }
    i.subscribe(
      C(
        n,
        (l) => {
          (o = l), (s = e.now()), r || ((r = e.schedule(c, t)), n.add(r));
        },
        () => {
          a(), n.complete();
        },
        void 0,
        () => {
          o = r = null;
        },
      ),
    );
  });
}
function li(t) {
  return M((e, i) => {
    let n = !1;
    e.subscribe(
      C(
        i,
        (r) => {
          (n = !0), i.next(r);
        },
        () => {
          n || i.next(t), i.complete();
        },
      ),
    );
  });
}
function Oe(t) {
  return t <= 0
    ? () => He
    : M((e, i) => {
        let n = 0;
        e.subscribe(
          C(i, (r) => {
            ++n <= t && (i.next(r), t <= n && i.complete());
          }),
        );
      });
}
function Bd() {
  return M((t, e) => {
    t.subscribe(C(e, Ft));
  });
}
function ks(t) {
  return G(() => t);
}
function Fs(t, e) {
  return e
    ? (i) => pt(e.pipe(Oe(1), Bd()), i.pipe(Fs(t)))
    : Ne((i, n) => j(t(i, n)).pipe(Oe(1), ks(i)));
}
function Kg(t, e = Vt) {
  let i = Dr(t, e);
  return Fs(() => i);
}
function Er(t, e = oe) {
  return (
    (t = t ?? Xg),
    M((i, n) => {
      let r,
        o = !0;
      i.subscribe(
        C(n, (s) => {
          let a = e(s);
          (o || !t(r, a)) && ((o = !1), (r = a), n.next(s));
        }),
      );
    })
  );
}
function Xg(t, e) {
  return t === e;
}
function Ir(t = Qg) {
  return M((e, i) => {
    let n = !1;
    e.subscribe(
      C(
        i,
        (r) => {
          (n = !0), i.next(r);
        },
        () => (n ? i.complete() : i.error(t())),
      ),
    );
  });
}
function Qg() {
  return new Ht();
}
function xr(t) {
  return M((e, i) => {
    try {
      e.subscribe(i);
    } finally {
      i.add(t);
    }
  });
}
function Hd(t, e) {
  let i = arguments.length >= 2;
  return (n) =>
    n.pipe(
      t ? ne((r, o) => t(r, o, n)) : oe,
      Oe(1),
      i ? li(e) : Ir(() => new Ht()),
    );
}
function Ps(t) {
  return t <= 0
    ? () => He
    : M((e, i) => {
        let n = [];
        e.subscribe(
          C(
            i,
            (r) => {
              n.push(r), t < n.length && n.shift();
            },
            () => {
              for (let r of n) i.next(r);
              i.complete();
            },
            void 0,
            () => {
              n = null;
            },
          ),
        );
      });
}
function Jg(t, e) {
  let i = arguments.length >= 2;
  return (n) =>
    n.pipe(
      t ? ne((r, o) => t(r, o, n)) : oe,
      Ps(1),
      i ? li(e) : Ir(() => new Ht()),
    );
}
function eb(t, e) {
  return M(Vd(t, e, arguments.length >= 2, !0));
}
function js(t = {}) {
  let {
    connector: e = () => new L(),
    resetOnError: i = !0,
    resetOnComplete: n = !0,
    resetOnRefCountZero: r = !0,
  } = t;
  return (o) => {
    let s,
      a,
      c,
      l = 0,
      d = !1,
      u = !1,
      f = () => {
        a?.unsubscribe(), (a = void 0);
      },
      h = () => {
        f(), (s = c = void 0), (d = u = !1);
      },
      m = () => {
        let g = s;
        h(), g?.unsubscribe();
      };
    return M((g, v) => {
      l++, !u && !d && f();
      let y = (c = c ?? e());
      v.add(() => {
        l--, l === 0 && !u && !d && (a = Ls(m, r));
      }),
        y.subscribe(v),
        !s &&
          l > 0 &&
          ((s = new et({
            next: (V) => y.next(V),
            error: (V) => {
              (u = !0), f(), (a = Ls(h, i, V)), y.error(V);
            },
            complete: () => {
              (d = !0), f(), (a = Ls(h, n)), y.complete();
            },
          })),
          j(g).subscribe(s));
    })(o);
  };
}
function Ls(t, e, ...i) {
  if (e === !0) {
    t();
    return;
  }
  if (e === !1) return;
  let n = new et({
    next: () => {
      n.unsubscribe(), t();
    },
  });
  return j(e(...i)).subscribe(n);
}
function Ud(t, e, i) {
  let n,
    r = !1;
  return (
    t && typeof t == "object"
      ? ({
          bufferSize: n = 1 / 0,
          windowTime: e = 1 / 0,
          refCount: r = !1,
          scheduler: i,
        } = t)
      : (n = t ?? 1 / 0),
    js({
      connector: () => new ri(n, e, i),
      resetOnError: !0,
      resetOnComplete: !1,
      resetOnRefCountZero: r,
    })
  );
}
function di(t) {
  return ne((e, i) => t <= i);
}
function Cr(...t) {
  let e = Ue(t);
  return M((i, n) => {
    (e ? pt(t, i, e) : pt(t, i)).subscribe(n);
  });
}
function Mr(t, e) {
  return M((i, n) => {
    let r = null,
      o = 0,
      s = !1,
      a = () => s && !r && n.complete();
    i.subscribe(
      C(
        n,
        (c) => {
          r?.unsubscribe();
          let l = 0,
            d = o++;
          j(t(c, d)).subscribe(
            (r = C(
              n,
              (u) => n.next(e ? e(c, u, d, l++) : u),
              () => {
                (r = null), a();
              },
            )),
          );
        },
        () => {
          (s = !0), a();
        },
      ),
    );
  });
}
function $e(t) {
  return M((e, i) => {
    j(t).subscribe(C(i, () => i.complete(), Ft)), !i.closed && e.subscribe(i);
  });
}
function Tr(t, e, i) {
  let n = w(t) || e || i ? { next: t, error: e, complete: i } : t;
  return n
    ? M((r, o) => {
        var s;
        (s = n.subscribe) === null || s === void 0 || s.call(n);
        let a = !0;
        r.subscribe(
          C(
            o,
            (c) => {
              var l;
              (l = n.next) === null || l === void 0 || l.call(n, c), o.next(c);
            },
            () => {
              var c;
              (a = !1),
                (c = n.complete) === null || c === void 0 || c.call(n),
                o.complete();
            },
            (c) => {
              var l;
              (a = !1),
                (l = n.error) === null || l === void 0 || l.call(n, c),
                o.error(c);
            },
            () => {
              var c, l;
              a && ((c = n.unsubscribe) === null || c === void 0 || c.call(n)),
                (l = n.finalize) === null || l === void 0 || l.call(n);
            },
          ),
        );
      })
    : oe;
}
var Ru = "https://g.co/ng/security#xss",
  x = class extends Error {
    constructor(e, i) {
      super(uo(e, i)), (this.code = e);
    }
  };
function uo(t, e) {
  return `${`NG0${Math.abs(t)}`}${e ? ": " + e : ""}`;
}
var fo = Symbol("InputSignalNode#UNSET"),
  ku = le(P({}, bs), {
    transformFn: void 0,
    applyValueToInputSignal(t, e) {
      ti(t, e);
    },
  });
function Fu(t, e) {
  let i = Object.create(ku);
  (i.value = t), (i.transformFn = e?.transform);
  function n() {
    if ((ei(i), i.value === fo)) throw new x(-950, !1);
    return i.value;
  }
  return (n[de] = i), n;
}
function xi(t) {
  return { toString: t }.toString();
}
var Sr = "__parameters__";
function nb(t) {
  return function (...i) {
    if (t) {
      let n = t(...i);
      for (let r in n) this[r] = n[r];
    }
  };
}
function Pu(t, e, i) {
  return xi(() => {
    let n = nb(e);
    function r(...o) {
      if (this instanceof r) return n.apply(this, o), this;
      let s = new r(...o);
      return (a.annotation = s), a;
      function a(c, l, d) {
        let u = c.hasOwnProperty(Sr)
          ? c[Sr]
          : Object.defineProperty(c, Sr, { value: [] })[Sr];
        for (; u.length <= d; ) u.push(null);
        return (u[d] = u[d] || []).push(s), c;
      }
    }
    return (
      i && (r.prototype = Object.create(i.prototype)),
      (r.prototype.ngMetadataName = t),
      (r.annotationCls = r),
      r
    );
  });
}
var ye = globalThis;
function H(t) {
  for (let e in t) if (t[e] === H) return e;
  throw Error("Could not find renamed property on target object.");
}
function ib(t, e) {
  for (let i in e) e.hasOwnProperty(i) && !t.hasOwnProperty(i) && (t[i] = e[i]);
}
function pe(t) {
  if (typeof t == "string") return t;
  if (Array.isArray(t)) return "[" + t.map(pe).join(", ") + "]";
  if (t == null) return "" + t;
  if (t.overriddenName) return `${t.overriddenName}`;
  if (t.name) return `${t.name}`;
  let e = t.toString();
  if (e == null) return "" + e;
  let i = e.indexOf(`
`);
  return i === -1 ? e : e.substring(0, i);
}
function ta(t, e) {
  return t == null || t === ""
    ? e === null
      ? ""
      : e
    : e == null || e === ""
      ? t
      : t + " " + e;
}
var rb = H({ __forward_ref__: H });
function Lu(t) {
  return (
    (t.__forward_ref__ = Lu),
    (t.toString = function () {
      return pe(this());
    }),
    t
  );
}
function se(t) {
  return ju(t) ? t() : t;
}
function ju(t) {
  return (
    typeof t == "function" && t.hasOwnProperty(rb) && t.__forward_ref__ === Lu
  );
}
function b(t) {
  return {
    token: t.token,
    providedIn: t.providedIn || null,
    factory: t.factory,
    value: void 0,
  };
}
function _e(t) {
  return { providers: t.providers || [], imports: t.imports || [] };
}
function ho(t) {
  return $d(t, Vu) || $d(t, Bu);
}
function xO(t) {
  return ho(t) !== null;
}
function $d(t, e) {
  return t.hasOwnProperty(e) ? t[e] : null;
}
function ob(t) {
  let e = t && (t[Vu] || t[Bu]);
  return e || null;
}
function zd(t) {
  return t && (t.hasOwnProperty(Wd) || t.hasOwnProperty(sb)) ? t[Wd] : null;
}
var Vu = H({ ɵprov: H }),
  Wd = H({ ɵinj: H }),
  Bu = H({ ngInjectableDef: H }),
  sb = H({ ngInjectorDef: H }),
  D = class {
    constructor(e, i) {
      (this._desc = e),
        (this.ngMetadataName = "InjectionToken"),
        (this.ɵprov = void 0),
        typeof i == "number"
          ? (this.__NG_ELEMENT_ID__ = i)
          : i !== void 0 &&
            (this.ɵprov = b({
              token: this,
              providedIn: i.providedIn || "root",
              factory: i.factory,
            }));
    }
    get multi() {
      return this;
    }
    toString() {
      return `InjectionToken ${this._desc}`;
    }
  };
function Hu(t) {
  return t && !!t.ɵproviders;
}
var ab = H({ ɵcmp: H }),
  cb = H({ ɵdir: H }),
  lb = H({ ɵpipe: H }),
  db = H({ ɵmod: H }),
  Ur = H({ ɵfac: H }),
  ui = H({ __NG_ELEMENT_ID__: H }),
  Gd = H({ __NG_ENV_ID__: H });
function tt(t) {
  return typeof t == "string" ? t : t == null ? "" : String(t);
}
function ub(t) {
  return typeof t == "function"
    ? t.name || t.toString()
    : typeof t == "object" && t != null && typeof t.type == "function"
      ? t.type.name || t.type.toString()
      : tt(t);
}
function fb(t, e) {
  let i = e ? `. Dependency path: ${e.join(" > ")} > ${t}` : "";
  throw new x(-200, t);
}
function dc(t, e) {
  throw new x(-201, !1);
}
var k = (function (t) {
    return (
      (t[(t.Default = 0)] = "Default"),
      (t[(t.Host = 1)] = "Host"),
      (t[(t.Self = 2)] = "Self"),
      (t[(t.SkipSelf = 4)] = "SkipSelf"),
      (t[(t.Optional = 8)] = "Optional"),
      t
    );
  })(k || {}),
  na;
function Uu() {
  return na;
}
function fe(t) {
  let e = na;
  return (na = t), e;
}
function $u(t, e, i) {
  let n = ho(t);
  if (n && n.providedIn == "root")
    return n.value === void 0 ? (n.value = n.factory()) : n.value;
  if (i & k.Optional) return null;
  if (e !== void 0) return e;
  dc(t, "Injector");
}
var hb = {},
  fi = hb,
  ia = "__NG_DI_FLAG__",
  $r = "ngTempTokenPath",
  pb = "ngTokenPath",
  mb = /\n/gm,
  gb = "\u0275",
  qd = "__source",
  En;
function bb() {
  return En;
}
function mt(t) {
  let e = En;
  return (En = t), e;
}
function vb(t, e = k.Default) {
  if (En === void 0) throw new x(-203, !1);
  return En === null
    ? $u(t, void 0, e)
    : En.get(t, e & k.Optional ? null : void 0, e);
}
function p(t, e = k.Default) {
  return (Uu() || vb)(se(t), e);
}
function _(t, e = k.Default) {
  return p(t, po(e));
}
function po(t) {
  return typeof t > "u" || typeof t == "number"
    ? t
    : 0 | (t.optional && 8) | (t.host && 1) | (t.self && 2) | (t.skipSelf && 4);
}
function ra(t) {
  let e = [];
  for (let i = 0; i < t.length; i++) {
    let n = se(t[i]);
    if (Array.isArray(n)) {
      if (n.length === 0) throw new x(900, !1);
      let r,
        o = k.Default;
      for (let s = 0; s < n.length; s++) {
        let a = n[s],
          c = yb(a);
        typeof c == "number" ? (c === -1 ? (r = a.token) : (o |= c)) : (r = a);
      }
      e.push(p(r, o));
    } else e.push(p(n));
  }
  return e;
}
function zu(t, e) {
  return (t[ia] = e), (t.prototype[ia] = e), t;
}
function yb(t) {
  return t[ia];
}
function _b(t, e, i, n) {
  let r = t[$r];
  throw (
    (e[qd] && r.unshift(e[qd]),
    (t.message = Db(
      `
` + t.message,
      r,
      i,
      n,
    )),
    (t[pb] = r),
    (t[$r] = null),
    t)
  );
}
function Db(t, e, i, n = null) {
  t =
    t &&
    t.charAt(0) ===
      `
` &&
    t.charAt(1) == gb
      ? t.slice(2)
      : t;
  let r = pe(e);
  if (Array.isArray(e)) r = e.map(pe).join(" -> ");
  else if (typeof e == "object") {
    let o = [];
    for (let s in e)
      if (e.hasOwnProperty(s)) {
        let a = e[s];
        o.push(s + ":" + (typeof a == "string" ? JSON.stringify(a) : pe(a)));
      }
    r = `{${o.join(", ")}}`;
  }
  return `${i}${n ? "(" + n + ")" : ""}[${r}]: ${t.replace(
    mb,
    `
  `,
  )}`;
}
var Wu = zu(Pu("Optional"), 8);
var wb = zu(Pu("SkipSelf"), 4);
function Wt(t, e) {
  let i = t.hasOwnProperty(Ur);
  return i ? t[Ur] : null;
}
function Eb(t, e, i) {
  if (t.length !== e.length) return !1;
  for (let n = 0; n < t.length; n++) {
    let r = t[n],
      o = e[n];
    if ((i && ((r = i(r)), (o = i(o))), o !== r)) return !1;
  }
  return !0;
}
function Ib(t) {
  return t.flat(Number.POSITIVE_INFINITY);
}
function uc(t, e) {
  t.forEach((i) => (Array.isArray(i) ? uc(i, e) : e(i)));
}
function Gu(t, e, i) {
  e >= t.length ? t.push(i) : t.splice(e, 0, i);
}
function zr(t, e) {
  return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0];
}
function xb(t, e) {
  let i = [];
  for (let n = 0; n < t; n++) i.push(e);
  return i;
}
function Cb(t, e, i, n) {
  let r = t.length;
  if (r == e) t.push(i, n);
  else if (r === 1) t.push(n, t[0]), (t[0] = i);
  else {
    for (r--, t.push(t[r - 1], t[r]); r > e; ) {
      let o = r - 2;
      (t[r] = t[o]), r--;
    }
    (t[e] = i), (t[e + 1] = n);
  }
}
function mo(t, e, i) {
  let n = Ci(t, e);
  return n >= 0 ? (t[n | 1] = i) : ((n = ~n), Cb(t, n, e, i)), n;
}
function Vs(t, e) {
  let i = Ci(t, e);
  if (i >= 0) return t[i | 1];
}
function Ci(t, e) {
  return Mb(t, e, 1);
}
function Mb(t, e, i) {
  let n = 0,
    r = t.length >> i;
  for (; r !== n; ) {
    let o = n + ((r - n) >> 1),
      s = t[o << i];
    if (e === s) return o << i;
    s > e ? (r = o) : (n = o + 1);
  }
  return ~(r << i);
}
var xn = {},
  ae = [],
  hi = new D(""),
  qu = new D("", -1),
  Yu = new D(""),
  Wr = class {
    get(e, i = fi) {
      if (i === fi) {
        let n = new Error(`NullInjectorError: No provider for ${pe(e)}!`);
        throw ((n.name = "NullInjectorError"), n);
      }
      return i;
    }
  },
  Zu = (function (t) {
    return (t[(t.OnPush = 0)] = "OnPush"), (t[(t.Default = 1)] = "Default"), t;
  })(Zu || {}),
  Ge = (function (t) {
    return (
      (t[(t.Emulated = 0)] = "Emulated"),
      (t[(t.None = 2)] = "None"),
      (t[(t.ShadowDom = 3)] = "ShadowDom"),
      t
    );
  })(Ge || {}),
  U = (function (t) {
    return (
      (t[(t.None = 0)] = "None"),
      (t[(t.SignalBased = 1)] = "SignalBased"),
      (t[(t.HasDecoratorInputTransform = 2)] = "HasDecoratorInputTransform"),
      t
    );
  })(U || {});
function Tb(t, e, i) {
  let n = t.length;
  for (;;) {
    let r = t.indexOf(e, i);
    if (r === -1) return r;
    if (r === 0 || t.charCodeAt(r - 1) <= 32) {
      let o = e.length;
      if (r + o === n || t.charCodeAt(r + o) <= 32) return r;
    }
    i = r + 1;
  }
}
function oa(t, e, i) {
  let n = 0;
  for (; n < i.length; ) {
    let r = i[n];
    if (typeof r == "number") {
      if (r !== 0) break;
      n++;
      let o = i[n++],
        s = i[n++],
        a = i[n++];
      t.setAttribute(e, s, a, o);
    } else {
      let o = r,
        s = i[++n];
      Sb(o) ? t.setProperty(e, o, s) : t.setAttribute(e, o, s), n++;
    }
  }
  return n;
}
function Ku(t) {
  return t === 3 || t === 4 || t === 6;
}
function Sb(t) {
  return t.charCodeAt(0) === 64;
}
function pi(t, e) {
  if (!(e === null || e.length === 0))
    if (t === null || t.length === 0) t = e.slice();
    else {
      let i = -1;
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        typeof r == "number"
          ? (i = r)
          : i === 0 ||
            (i === -1 || i === 2
              ? Yd(t, i, r, null, e[++n])
              : Yd(t, i, r, null, null));
      }
    }
  return t;
}
function Yd(t, e, i, n, r) {
  let o = 0,
    s = t.length;
  if (e === -1) s = -1;
  else
    for (; o < t.length; ) {
      let a = t[o++];
      if (typeof a == "number") {
        if (a === e) {
          s = -1;
          break;
        } else if (a > e) {
          s = o - 1;
          break;
        }
      }
    }
  for (; o < t.length; ) {
    let a = t[o];
    if (typeof a == "number") break;
    if (a === i) {
      if (n === null) {
        r !== null && (t[o + 1] = r);
        return;
      } else if (n === t[o + 1]) {
        t[o + 2] = r;
        return;
      }
    }
    o++, n !== null && o++, r !== null && o++;
  }
  s !== -1 && (t.splice(s, 0, e), (o = s + 1)),
    t.splice(o++, 0, i),
    n !== null && t.splice(o++, 0, n),
    r !== null && t.splice(o++, 0, r);
}
var Xu = "ng-template";
function Ab(t, e, i, n) {
  let r = 0;
  if (n) {
    for (; r < e.length && typeof e[r] == "string"; r += 2)
      if (e[r] === "class" && Tb(e[r + 1].toLowerCase(), i, 0) !== -1)
        return !0;
  } else if (fc(t)) return !1;
  if (((r = e.indexOf(1, r)), r > -1)) {
    let o;
    for (; ++r < e.length && typeof (o = e[r]) == "string"; )
      if (o.toLowerCase() === i) return !0;
  }
  return !1;
}
function fc(t) {
  return t.type === 4 && t.value !== Xu;
}
function Nb(t, e, i) {
  let n = t.type === 4 && !i ? Xu : t.value;
  return e === n;
}
function Ob(t, e, i) {
  let n = 4,
    r = t.attrs,
    o = r !== null ? Fb(r) : 0,
    s = !1;
  for (let a = 0; a < e.length; a++) {
    let c = e[a];
    if (typeof c == "number") {
      if (!s && !Re(n) && !Re(c)) return !1;
      if (s && Re(c)) continue;
      (s = !1), (n = c | (n & 1));
      continue;
    }
    if (!s)
      if (n & 4) {
        if (
          ((n = 2 | (n & 1)),
          (c !== "" && !Nb(t, c, i)) || (c === "" && e.length === 1))
        ) {
          if (Re(n)) return !1;
          s = !0;
        }
      } else if (n & 8) {
        if (r === null || !Ab(t, r, c, i)) {
          if (Re(n)) return !1;
          s = !0;
        }
      } else {
        let l = e[++a],
          d = Rb(c, r, fc(t), i);
        if (d === -1) {
          if (Re(n)) return !1;
          s = !0;
          continue;
        }
        if (l !== "") {
          let u;
          if (
            (d > o ? (u = "") : (u = r[d + 1].toLowerCase()), n & 2 && l !== u)
          ) {
            if (Re(n)) return !1;
            s = !0;
          }
        }
      }
  }
  return Re(n) || s;
}
function Re(t) {
  return (t & 1) === 0;
}
function Rb(t, e, i, n) {
  if (e === null) return -1;
  let r = 0;
  if (n || !i) {
    let o = !1;
    for (; r < e.length; ) {
      let s = e[r];
      if (s === t) return r;
      if (s === 3 || s === 6) o = !0;
      else if (s === 1 || s === 2) {
        let a = e[++r];
        for (; typeof a == "string"; ) a = e[++r];
        continue;
      } else {
        if (s === 4) break;
        if (s === 0) {
          r += 4;
          continue;
        }
      }
      r += o ? 1 : 2;
    }
    return -1;
  } else return Pb(e, t);
}
function Qu(t, e, i = !1) {
  for (let n = 0; n < e.length; n++) if (Ob(t, e[n], i)) return !0;
  return !1;
}
function kb(t) {
  let e = t.attrs;
  if (e != null) {
    let i = e.indexOf(5);
    if (!(i & 1)) return e[i + 1];
  }
  return null;
}
function Fb(t) {
  for (let e = 0; e < t.length; e++) {
    let i = t[e];
    if (Ku(i)) return e;
  }
  return t.length;
}
function Pb(t, e) {
  let i = t.indexOf(4);
  if (i > -1)
    for (i++; i < t.length; ) {
      let n = t[i];
      if (typeof n == "number") return -1;
      if (n === e) return i;
      i++;
    }
  return -1;
}
function Lb(t, e) {
  e: for (let i = 0; i < e.length; i++) {
    let n = e[i];
    if (t.length === n.length) {
      for (let r = 0; r < t.length; r++) if (t[r] !== n[r]) continue e;
      return !0;
    }
  }
  return !1;
}
function Zd(t, e) {
  return t ? ":not(" + e.trim() + ")" : e;
}
function jb(t) {
  let e = t[0],
    i = 1,
    n = 2,
    r = "",
    o = !1;
  for (; i < t.length; ) {
    let s = t[i];
    if (typeof s == "string")
      if (n & 2) {
        let a = t[++i];
        r += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
      } else n & 8 ? (r += "." + s) : n & 4 && (r += " " + s);
    else
      r !== "" && !Re(s) && ((e += Zd(o, r)), (r = "")),
        (n = s),
        (o = o || !Re(n));
    i++;
  }
  return r !== "" && (e += Zd(o, r)), e;
}
function Vb(t) {
  return t.map(jb).join(",");
}
function Bb(t) {
  let e = [],
    i = [],
    n = 1,
    r = 2;
  for (; n < t.length; ) {
    let o = t[n];
    if (typeof o == "string")
      r === 2 ? o !== "" && e.push(o, t[++n]) : r === 8 && i.push(o);
    else {
      if (!Re(r)) break;
      r = o;
    }
    n++;
  }
  return { attrs: e, classes: i };
}
function _t(t) {
  return xi(() => {
    let e = nf(t),
      i = le(P({}, e), {
        decls: t.decls,
        vars: t.vars,
        template: t.template,
        consts: t.consts || null,
        ngContentSelectors: t.ngContentSelectors,
        onPush: t.changeDetection === Zu.OnPush,
        directiveDefs: null,
        pipeDefs: null,
        dependencies: (e.standalone && t.dependencies) || null,
        getStandaloneInjector: null,
        signals: t.signals ?? !1,
        data: t.data || {},
        encapsulation: t.encapsulation || Ge.Emulated,
        styles: t.styles || ae,
        _: null,
        schemas: t.schemas || null,
        tView: null,
        id: "",
      });
    rf(i);
    let n = t.dependencies;
    return (
      (i.directiveDefs = Xd(n, !1)), (i.pipeDefs = Xd(n, !0)), (i.id = zb(i)), i
    );
  });
}
function Hb(t) {
  return nt(t) || Ju(t);
}
function Ub(t) {
  return t !== null;
}
function De(t) {
  return xi(() => ({
    type: t.type,
    bootstrap: t.bootstrap || ae,
    declarations: t.declarations || ae,
    imports: t.imports || ae,
    exports: t.exports || ae,
    transitiveCompileScopes: null,
    schemas: t.schemas || null,
    id: t.id || null,
  }));
}
function Kd(t, e) {
  if (t == null) return xn;
  let i = {};
  for (let n in t)
    if (t.hasOwnProperty(n)) {
      let r = t[n],
        o,
        s,
        a = U.None;
      Array.isArray(r)
        ? ((a = r[0]), (o = r[1]), (s = r[2] ?? o))
        : ((o = r), (s = r)),
        e ? ((i[o] = a !== U.None ? [n, a] : n), (e[o] = s)) : (i[o] = n);
    }
  return i;
}
function Q(t) {
  return xi(() => {
    let e = nf(t);
    return rf(e), e;
  });
}
function hc(t) {
  return {
    type: t.type,
    name: t.name,
    factory: null,
    pure: t.pure !== !1,
    standalone: t.standalone === !0,
    onDestroy: t.type.prototype.ngOnDestroy || null,
  };
}
function nt(t) {
  return t[ab] || null;
}
function Ju(t) {
  return t[cb] || null;
}
function ef(t) {
  return t[lb] || null;
}
function $b(t) {
  let e = nt(t) || Ju(t) || ef(t);
  return e !== null ? e.standalone : !1;
}
function tf(t, e) {
  let i = t[db] || null;
  if (!i && e === !0)
    throw new Error(`Type ${pe(t)} does not have '\u0275mod' property.`);
  return i;
}
function nf(t) {
  let e = {};
  return {
    type: t.type,
    providersResolver: null,
    factory: null,
    hostBindings: t.hostBindings || null,
    hostVars: t.hostVars || 0,
    hostAttrs: t.hostAttrs || null,
    contentQueries: t.contentQueries || null,
    declaredInputs: e,
    inputTransforms: null,
    inputConfig: t.inputs || xn,
    exportAs: t.exportAs || null,
    standalone: t.standalone === !0,
    signals: t.signals === !0,
    selectors: t.selectors || ae,
    viewQuery: t.viewQuery || null,
    features: t.features || null,
    setInput: null,
    findHostDirectiveDefs: null,
    hostDirectives: null,
    inputs: Kd(t.inputs, e),
    outputs: Kd(t.outputs),
    debugInfo: null,
  };
}
function rf(t) {
  t.features?.forEach((e) => e(t));
}
function Xd(t, e) {
  if (!t) return null;
  let i = e ? ef : Hb;
  return () => (typeof t == "function" ? t() : t).map((n) => i(n)).filter(Ub);
}
function zb(t) {
  let e = 0,
    i = [
      t.selectors,
      t.ngContentSelectors,
      t.hostVars,
      t.hostAttrs,
      t.consts,
      t.vars,
      t.decls,
      t.encapsulation,
      t.standalone,
      t.signals,
      t.exportAs,
      JSON.stringify(t.inputs),
      JSON.stringify(t.outputs),
      Object.getOwnPropertyNames(t.type.prototype),
      !!t.contentQueries,
      !!t.viewQuery,
    ].join("|");
  for (let r of i) e = (Math.imul(31, e) + r.charCodeAt(0)) << 0;
  return (e += 2147483648), "c" + e;
}
function go(t) {
  return { ɵproviders: t };
}
function Wb(...t) {
  return { ɵproviders: of(!0, t), ɵfromNgModule: !0 };
}
function of(t, ...e) {
  let i = [],
    n = new Set(),
    r,
    o = (s) => {
      i.push(s);
    };
  return (
    uc(e, (s) => {
      let a = s;
      sa(a, o, [], n) && ((r ||= []), r.push(a));
    }),
    r !== void 0 && sf(r, o),
    i
  );
}
function sf(t, e) {
  for (let i = 0; i < t.length; i++) {
    let { ngModule: n, providers: r } = t[i];
    pc(r, (o) => {
      e(o, n);
    });
  }
}
function sa(t, e, i, n) {
  if (((t = se(t)), !t)) return !1;
  let r = null,
    o = zd(t),
    s = !o && nt(t);
  if (!o && !s) {
    let c = t.ngModule;
    if (((o = zd(c)), o)) r = c;
    else return !1;
  } else {
    if (s && !s.standalone) return !1;
    r = t;
  }
  let a = n.has(r);
  if (s) {
    if (a) return !1;
    if ((n.add(r), s.dependencies)) {
      let c =
        typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
      for (let l of c) sa(l, e, i, n);
    }
  } else if (o) {
    if (o.imports != null && !a) {
      n.add(r);
      let l;
      try {
        uc(o.imports, (d) => {
          sa(d, e, i, n) && ((l ||= []), l.push(d));
        });
      } finally {
      }
      l !== void 0 && sf(l, e);
    }
    if (!a) {
      let l = Wt(r) || (() => new r());
      e({ provide: r, useFactory: l, deps: ae }, r),
        e({ provide: Yu, useValue: r, multi: !0 }, r),
        e({ provide: hi, useValue: () => p(r), multi: !0 }, r);
    }
    let c = o.providers;
    if (c != null && !a) {
      let l = t;
      pc(c, (d) => {
        e(d, l);
      });
    }
  } else return !1;
  return r !== t && t.providers !== void 0;
}
function pc(t, e) {
  for (let i of t)
    Hu(i) && (i = i.ɵproviders), Array.isArray(i) ? pc(i, e) : e(i);
}
var Gb = H({ provide: String, useValue: H });
function af(t) {
  return t !== null && typeof t == "object" && Gb in t;
}
function qb(t) {
  return !!(t && t.useExisting);
}
function Yb(t) {
  return !!(t && t.useFactory);
}
function Cn(t) {
  return typeof t == "function";
}
function Zb(t) {
  return !!t.useClass;
}
var bo = new D(""),
  Fr = {},
  Kb = {},
  Bs;
function vo() {
  return Bs === void 0 && (Bs = new Wr()), Bs;
}
var qe = class {},
  mi = class extends qe {
    get destroyed() {
      return this._destroyed;
    }
    constructor(e, i, n, r) {
      super(),
        (this.parent = i),
        (this.source = n),
        (this.scopes = r),
        (this.records = new Map()),
        (this._ngOnDestroyHooks = new Set()),
        (this._onDestroyHooks = []),
        (this._destroyed = !1),
        ca(e, (s) => this.processProvider(s)),
        this.records.set(qu, _n(void 0, this)),
        r.has("environment") && this.records.set(qe, _n(void 0, this));
      let o = this.records.get(bo);
      o != null && typeof o.value == "string" && this.scopes.add(o.value),
        (this.injectorDefTypes = new Set(this.get(Yu, ae, k.Self)));
    }
    destroy() {
      this.assertNotDestroyed(), (this._destroyed = !0);
      let e = O(null);
      try {
        for (let n of this._ngOnDestroyHooks) n.ngOnDestroy();
        let i = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let n of i) n();
      } finally {
        this.records.clear(),
          this._ngOnDestroyHooks.clear(),
          this.injectorDefTypes.clear(),
          O(e);
      }
    }
    onDestroy(e) {
      return (
        this.assertNotDestroyed(),
        this._onDestroyHooks.push(e),
        () => this.removeOnDestroy(e)
      );
    }
    runInContext(e) {
      this.assertNotDestroyed();
      let i = mt(this),
        n = fe(void 0),
        r;
      try {
        return e();
      } finally {
        mt(i), fe(n);
      }
    }
    get(e, i = fi, n = k.Default) {
      if ((this.assertNotDestroyed(), e.hasOwnProperty(Gd))) return e[Gd](this);
      n = po(n);
      let r,
        o = mt(this),
        s = fe(void 0);
      try {
        if (!(n & k.SkipSelf)) {
          let c = this.records.get(e);
          if (c === void 0) {
            let l = tv(e) && ho(e);
            l && this.injectableDefInScope(l)
              ? (c = _n(aa(e), Fr))
              : (c = null),
              this.records.set(e, c);
          }
          if (c != null) return this.hydrate(e, c);
        }
        let a = n & k.Self ? vo() : this.parent;
        return (i = n & k.Optional && i === fi ? null : i), a.get(e, i);
      } catch (a) {
        if (a.name === "NullInjectorError") {
          if (((a[$r] = a[$r] || []).unshift(pe(e)), o)) throw a;
          return _b(a, e, "R3InjectorError", this.source);
        } else throw a;
      } finally {
        fe(s), mt(o);
      }
    }
    resolveInjectorInitializers() {
      let e = O(null),
        i = mt(this),
        n = fe(void 0),
        r;
      try {
        let o = this.get(hi, ae, k.Self);
        for (let s of o) s();
      } finally {
        mt(i), fe(n), O(e);
      }
    }
    toString() {
      let e = [],
        i = this.records;
      for (let n of i.keys()) e.push(pe(n));
      return `R3Injector[${e.join(", ")}]`;
    }
    assertNotDestroyed() {
      if (this._destroyed) throw new x(205, !1);
    }
    processProvider(e) {
      e = se(e);
      let i = Cn(e) ? e : se(e && e.provide),
        n = Qb(e);
      if (!Cn(e) && e.multi === !0) {
        let r = this.records.get(i);
        r ||
          ((r = _n(void 0, Fr, !0)),
          (r.factory = () => ra(r.multi)),
          this.records.set(i, r)),
          (i = e),
          r.multi.push(e);
      }
      this.records.set(i, n);
    }
    hydrate(e, i) {
      let n = O(null);
      try {
        return (
          i.value === Fr && ((i.value = Kb), (i.value = i.factory())),
          typeof i.value == "object" &&
            i.value &&
            ev(i.value) &&
            this._ngOnDestroyHooks.add(i.value),
          i.value
        );
      } finally {
        O(n);
      }
    }
    injectableDefInScope(e) {
      if (!e.providedIn) return !1;
      let i = se(e.providedIn);
      return typeof i == "string"
        ? i === "any" || this.scopes.has(i)
        : this.injectorDefTypes.has(i);
    }
    removeOnDestroy(e) {
      let i = this._onDestroyHooks.indexOf(e);
      i !== -1 && this._onDestroyHooks.splice(i, 1);
    }
  };
function aa(t) {
  let e = ho(t),
    i = e !== null ? e.factory : Wt(t);
  if (i !== null) return i;
  if (t instanceof D) throw new x(204, !1);
  if (t instanceof Function) return Xb(t);
  throw new x(204, !1);
}
function Xb(t) {
  if (t.length > 0) throw new x(204, !1);
  let i = ob(t);
  return i !== null ? () => i.factory(t) : () => new t();
}
function Qb(t) {
  if (af(t)) return _n(void 0, t.useValue);
  {
    let e = cf(t);
    return _n(e, Fr);
  }
}
function cf(t, e, i) {
  let n;
  if (Cn(t)) {
    let r = se(t);
    return Wt(r) || aa(r);
  } else if (af(t)) n = () => se(t.useValue);
  else if (Yb(t)) n = () => t.useFactory(...ra(t.deps || []));
  else if (qb(t)) n = () => p(se(t.useExisting));
  else {
    let r = se(t && (t.useClass || t.provide));
    if (Jb(t)) n = () => new r(...ra(t.deps));
    else return Wt(r) || aa(r);
  }
  return n;
}
function _n(t, e, i = !1) {
  return { factory: t, value: e, multi: i ? [] : void 0 };
}
function Jb(t) {
  return !!t.deps;
}
function ev(t) {
  return (
    t !== null && typeof t == "object" && typeof t.ngOnDestroy == "function"
  );
}
function tv(t) {
  return typeof t == "function" || (typeof t == "object" && t instanceof D);
}
function ca(t, e) {
  for (let i of t)
    Array.isArray(i) ? ca(i, e) : i && Hu(i) ? ca(i.ɵproviders, e) : e(i);
}
function lf(t, e) {
  t instanceof mi && t.assertNotDestroyed();
  let i,
    n = mt(t),
    r = fe(void 0);
  try {
    return e();
  } finally {
    mt(n), fe(r);
  }
}
function df() {
  return Uu() !== void 0 || bb() != null;
}
function yo(t) {
  if (!df()) throw new x(-203, !1);
}
function nv(t) {
  return typeof t == "function";
}
var Ze = 0,
  T = 1,
  E = 2,
  J = 3,
  Fe = 4,
  we = 5,
  Mn = 6,
  gi = 7,
  ie = 8,
  Tn = 9,
  Pe = 10,
  z = 11,
  bi = 12,
  Qd = 13,
  Rn = 14,
  Ie = 15,
  Mi = 16,
  Dn = 17,
  it = 18,
  _o = 19,
  uf = 20,
  gt = 21,
  Pr = 22,
  Gt = 23,
  ee = 25,
  mc = 1;
var qt = 7,
  Gr = 8,
  Sn = 9,
  re = 10,
  gc = (function (t) {
    return (
      (t[(t.None = 0)] = "None"),
      (t[(t.HasTransplantedViews = 2)] = "HasTransplantedViews"),
      t
    );
  })(gc || {});
function $t(t) {
  return Array.isArray(t) && typeof t[mc] == "object";
}
function at(t) {
  return Array.isArray(t) && t[mc] === !0;
}
function bc(t) {
  return (t.flags & 4) !== 0;
}
function Do(t) {
  return t.componentOffset > -1;
}
function wo(t) {
  return (t.flags & 1) === 1;
}
function rt(t) {
  return !!t.template;
}
function iv(t) {
  return (t[E] & 512) !== 0;
}
var la = class {
  constructor(e, i, n) {
    (this.previousValue = e), (this.currentValue = i), (this.firstChange = n);
  }
  isFirstChange() {
    return this.firstChange;
  }
};
function ff(t, e, i, n) {
  e !== null ? e.applyValueToInputSignal(e, n) : (t[i] = n);
}
function kn() {
  return hf;
}
function hf(t) {
  return t.type.prototype.ngOnChanges && (t.setInput = ov), rv;
}
kn.ngInherit = !0;
function rv() {
  let t = mf(this),
    e = t?.current;
  if (e) {
    let i = t.previous;
    if (i === xn) t.previous = e;
    else for (let n in e) i[n] = e[n];
    (t.current = null), this.ngOnChanges(e);
  }
}
function ov(t, e, i, n, r) {
  let o = this.declaredInputs[n],
    s = mf(t) || sv(t, { previous: xn, current: null }),
    a = s.current || (s.current = {}),
    c = s.previous,
    l = c[o];
  (a[o] = new la(l && l.currentValue, i, c === xn)), ff(t, e, r, i);
}
var pf = "__ngSimpleChanges__";
function mf(t) {
  return t[pf] || null;
}
function sv(t, e) {
  return (t[pf] = e);
}
var Jd = null;
var ze = function (t, e, i) {
    Jd?.(t, e, i);
  },
  gf = "svg",
  av = "math",
  cv = !1;
function lv() {
  return cv;
}
function Ye(t) {
  for (; Array.isArray(t); ) t = t[Ze];
  return t;
}
function dv(t) {
  for (; Array.isArray(t); ) {
    if (typeof t[mc] == "object") return t;
    t = t[Ze];
  }
  return null;
}
function bf(t, e) {
  return Ye(e[t]);
}
function xe(t, e) {
  return Ye(e[t.index]);
}
function vc(t, e) {
  return t.data[e];
}
function yc(t, e) {
  return t[e];
}
function Dt(t, e) {
  let i = e[t];
  return $t(i) ? i : i[Ze];
}
function uv(t) {
  return (t[E] & 4) === 4;
}
function _c(t) {
  return (t[E] & 128) === 128;
}
function fv(t) {
  return at(t[J]);
}
function An(t, e) {
  return e == null ? null : t[e];
}
function vf(t) {
  t[Dn] = 0;
}
function hv(t) {
  t[E] & 1024 || ((t[E] |= 1024), _c(t) && vi(t));
}
function pv(t, e) {
  for (; t > 0; ) (e = e[Rn]), t--;
  return e;
}
function Dc(t) {
  return !!(t[E] & 9216 || t[Gt]?.dirty);
}
function da(t) {
  t[Pe].changeDetectionScheduler?.notify(1),
    Dc(t)
      ? vi(t)
      : t[E] & 64 &&
        (lv()
          ? ((t[E] |= 1024), vi(t))
          : t[Pe].changeDetectionScheduler?.notify());
}
function vi(t) {
  t[Pe].changeDetectionScheduler?.notify();
  let e = yi(t);
  for (; e !== null && !(e[E] & 8192 || ((e[E] |= 8192), !_c(e))); ) e = yi(e);
}
function yf(t, e) {
  if ((t[E] & 256) === 256) throw new x(911, !1);
  t[gt] === null && (t[gt] = []), t[gt].push(e);
}
function mv(t, e) {
  if (t[gt] === null) return;
  let i = t[gt].indexOf(e);
  i !== -1 && t[gt].splice(i, 1);
}
function yi(t) {
  let e = t[J];
  return at(e) ? e[J] : e;
}
var A = { lFrame: Cf(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
function gv() {
  return A.lFrame.elementDepthCount;
}
function bv() {
  A.lFrame.elementDepthCount++;
}
function vv() {
  A.lFrame.elementDepthCount--;
}
function _f() {
  return A.bindingsEnabled;
}
function Df() {
  return A.skipHydrationRootTNode !== null;
}
function yv(t) {
  return A.skipHydrationRootTNode === t;
}
function _v() {
  A.skipHydrationRootTNode = null;
}
function I() {
  return A.lFrame.lView;
}
function W() {
  return A.lFrame.tView;
}
function CO(t) {
  return (A.lFrame.contextLView = t), t[ie];
}
function MO(t) {
  return (A.lFrame.contextLView = null), t;
}
function te() {
  let t = wf();
  for (; t !== null && t.type === 64; ) t = t.parent;
  return t;
}
function wf() {
  return A.lFrame.currentTNode;
}
function Dv() {
  let t = A.lFrame,
    e = t.currentTNode;
  return t.isParent ? e : e.parent;
}
function en(t, e) {
  let i = A.lFrame;
  (i.currentTNode = t), (i.isParent = e);
}
function wc() {
  return A.lFrame.isParent;
}
function Ec() {
  A.lFrame.isParent = !1;
}
function wv() {
  return A.lFrame.contextLView;
}
function Eo() {
  let t = A.lFrame,
    e = t.bindingRootIndex;
  return e === -1 && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e;
}
function Ef() {
  return A.lFrame.bindingIndex;
}
function Ev(t) {
  return (A.lFrame.bindingIndex = t);
}
function wt() {
  return A.lFrame.bindingIndex++;
}
function Io(t) {
  let e = A.lFrame,
    i = e.bindingIndex;
  return (e.bindingIndex = e.bindingIndex + t), i;
}
function Iv() {
  return A.lFrame.inI18n;
}
function xv(t, e) {
  let i = A.lFrame;
  (i.bindingIndex = i.bindingRootIndex = t), ua(e);
}
function Cv() {
  return A.lFrame.currentDirectiveIndex;
}
function ua(t) {
  A.lFrame.currentDirectiveIndex = t;
}
function Ic(t) {
  let e = A.lFrame.currentDirectiveIndex;
  return e === -1 ? null : t[e];
}
function xc() {
  return A.lFrame.currentQueryIndex;
}
function xo(t) {
  A.lFrame.currentQueryIndex = t;
}
function Mv(t) {
  let e = t[T];
  return e.type === 2 ? e.declTNode : e.type === 1 ? t[we] : null;
}
function If(t, e, i) {
  if (i & k.SkipSelf) {
    let r = e,
      o = t;
    for (; (r = r.parent), r === null && !(i & k.Host); )
      if (((r = Mv(o)), r === null || ((o = o[Rn]), r.type & 10))) break;
    if (r === null) return !1;
    (e = r), (t = o);
  }
  let n = (A.lFrame = xf());
  return (n.currentTNode = e), (n.lView = t), !0;
}
function Cc(t) {
  let e = xf(),
    i = t[T];
  (A.lFrame = e),
    (e.currentTNode = i.firstChild),
    (e.lView = t),
    (e.tView = i),
    (e.contextLView = t),
    (e.bindingIndex = i.bindingStartIndex),
    (e.inI18n = !1);
}
function xf() {
  let t = A.lFrame,
    e = t === null ? null : t.child;
  return e === null ? Cf(t) : e;
}
function Cf(t) {
  let e = {
    currentTNode: null,
    isParent: !0,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent: t,
    child: null,
    inI18n: !1,
  };
  return t !== null && (t.child = e), e;
}
function Mf() {
  let t = A.lFrame;
  return (A.lFrame = t.parent), (t.currentTNode = null), (t.lView = null), t;
}
var Tf = Mf;
function Mc() {
  let t = Mf();
  (t.isParent = !0),
    (t.tView = null),
    (t.selectedIndex = -1),
    (t.contextLView = null),
    (t.elementDepthCount = 0),
    (t.currentDirectiveIndex = -1),
    (t.currentNamespace = null),
    (t.bindingRootIndex = -1),
    (t.bindingIndex = -1),
    (t.currentQueryIndex = 0);
}
function Tv(t) {
  return (A.lFrame.contextLView = pv(t, A.lFrame.contextLView))[ie];
}
function Ke() {
  return A.lFrame.selectedIndex;
}
function Yt(t) {
  A.lFrame.selectedIndex = t;
}
function Fn() {
  let t = A.lFrame;
  return vc(t.tView, t.selectedIndex);
}
function TO() {
  A.lFrame.currentNamespace = gf;
}
function SO() {
  Sv();
}
function Sv() {
  A.lFrame.currentNamespace = null;
}
function Av() {
  return A.lFrame.currentNamespace;
}
var Sf = !0;
function Co() {
  return Sf;
}
function Mo(t) {
  Sf = t;
}
function Nv(t, e, i) {
  let { ngOnChanges: n, ngOnInit: r, ngDoCheck: o } = e.type.prototype;
  if (n) {
    let s = hf(e);
    (i.preOrderHooks ??= []).push(t, s),
      (i.preOrderCheckHooks ??= []).push(t, s);
  }
  r && (i.preOrderHooks ??= []).push(0 - t, r),
    o &&
      ((i.preOrderHooks ??= []).push(t, o),
      (i.preOrderCheckHooks ??= []).push(t, o));
}
function To(t, e) {
  for (let i = e.directiveStart, n = e.directiveEnd; i < n; i++) {
    let o = t.data[i].type.prototype,
      {
        ngAfterContentInit: s,
        ngAfterContentChecked: a,
        ngAfterViewInit: c,
        ngAfterViewChecked: l,
        ngOnDestroy: d,
      } = o;
    s && (t.contentHooks ??= []).push(-i, s),
      a &&
        ((t.contentHooks ??= []).push(i, a),
        (t.contentCheckHooks ??= []).push(i, a)),
      c && (t.viewHooks ??= []).push(-i, c),
      l &&
        ((t.viewHooks ??= []).push(i, l), (t.viewCheckHooks ??= []).push(i, l)),
      d != null && (t.destroyHooks ??= []).push(i, d);
  }
}
function Lr(t, e, i) {
  Af(t, e, 3, i);
}
function jr(t, e, i, n) {
  (t[E] & 3) === i && Af(t, e, i, n);
}
function Hs(t, e) {
  let i = t[E];
  (i & 3) === e && ((i &= 16383), (i += 1), (t[E] = i));
}
function Af(t, e, i, n) {
  let r = n !== void 0 ? t[Dn] & 65535 : 0,
    o = n ?? -1,
    s = e.length - 1,
    a = 0;
  for (let c = r; c < s; c++)
    if (typeof e[c + 1] == "number") {
      if (((a = e[c]), n != null && a >= n)) break;
    } else
      e[c] < 0 && (t[Dn] += 65536),
        (a < o || o == -1) &&
          (Ov(t, i, e, c), (t[Dn] = (t[Dn] & 4294901760) + c + 2)),
        c++;
}
function eu(t, e) {
  ze(4, t, e);
  let i = O(null);
  try {
    e.call(t);
  } finally {
    O(i), ze(5, t, e);
  }
}
function Ov(t, e, i, n) {
  let r = i[n] < 0,
    o = i[n + 1],
    s = r ? -i[n] : i[n],
    a = t[s];
  r
    ? t[E] >> 14 < t[Dn] >> 16 &&
      (t[E] & 3) === e &&
      ((t[E] += 16384), eu(a, o))
    : eu(a, o);
}
var In = -1,
  Zt = class {
    constructor(e, i, n) {
      (this.factory = e),
        (this.resolving = !1),
        (this.canSeeViewProviders = i),
        (this.injectImpl = n);
    }
  };
function Rv(t) {
  return t instanceof Zt;
}
function kv(t) {
  return (t.flags & 8) !== 0;
}
function Fv(t) {
  return (t.flags & 16) !== 0;
}
function Nf(t) {
  return t !== In;
}
function qr(t) {
  return t & 32767;
}
function Pv(t) {
  return t >> 16;
}
function Yr(t, e) {
  let i = Pv(t),
    n = e;
  for (; i > 0; ) (n = n[Rn]), i--;
  return n;
}
var fa = !0;
function Zr(t) {
  let e = fa;
  return (fa = t), e;
}
var Lv = 256,
  Of = Lv - 1,
  Rf = 5,
  jv = 0,
  We = {};
function Vv(t, e, i) {
  let n;
  typeof i == "string"
    ? (n = i.charCodeAt(0) || 0)
    : i.hasOwnProperty(ui) && (n = i[ui]),
    n == null && (n = i[ui] = jv++);
  let r = n & Of,
    o = 1 << r;
  e.data[t + (r >> Rf)] |= o;
}
function Kr(t, e) {
  let i = kf(t, e);
  if (i !== -1) return i;
  let n = e[T];
  n.firstCreatePass &&
    ((t.injectorIndex = e.length),
    Us(n.data, t),
    Us(e, null),
    Us(n.blueprint, null));
  let r = Tc(t, e),
    o = t.injectorIndex;
  if (Nf(r)) {
    let s = qr(r),
      a = Yr(r, e),
      c = a[T].data;
    for (let l = 0; l < 8; l++) e[o + l] = a[s + l] | c[s + l];
  }
  return (e[o + 8] = r), o;
}
function Us(t, e) {
  t.push(0, 0, 0, 0, 0, 0, 0, 0, e);
}
function kf(t, e) {
  return t.injectorIndex === -1 ||
    (t.parent && t.parent.injectorIndex === t.injectorIndex) ||
    e[t.injectorIndex + 8] === null
    ? -1
    : t.injectorIndex;
}
function Tc(t, e) {
  if (t.parent && t.parent.injectorIndex !== -1) return t.parent.injectorIndex;
  let i = 0,
    n = null,
    r = e;
  for (; r !== null; ) {
    if (((n = Vf(r)), n === null)) return In;
    if ((i++, (r = r[Rn]), n.injectorIndex !== -1))
      return n.injectorIndex | (i << 16);
  }
  return In;
}
function ha(t, e, i) {
  Vv(t, e, i);
}
function Bv(t, e) {
  if (e === "class") return t.classes;
  if (e === "style") return t.styles;
  let i = t.attrs;
  if (i) {
    let n = i.length,
      r = 0;
    for (; r < n; ) {
      let o = i[r];
      if (Ku(o)) break;
      if (o === 0) r = r + 2;
      else if (typeof o == "number")
        for (r++; r < n && typeof i[r] == "string"; ) r++;
      else {
        if (o === e) return i[r + 1];
        r = r + 2;
      }
    }
  }
  return null;
}
function Ff(t, e, i) {
  if (i & k.Optional || t !== void 0) return t;
  dc(e, "NodeInjector");
}
function Pf(t, e, i, n) {
  if (
    (i & k.Optional && n === void 0 && (n = null), !(i & (k.Self | k.Host)))
  ) {
    let r = t[Tn],
      o = fe(void 0);
    try {
      return r ? r.get(e, n, i & k.Optional) : $u(e, n, i & k.Optional);
    } finally {
      fe(o);
    }
  }
  return Ff(n, e, i);
}
function Lf(t, e, i, n = k.Default, r) {
  if (t !== null) {
    if (e[E] & 2048 && !(n & k.Self)) {
      let s = zv(t, e, i, n, We);
      if (s !== We) return s;
    }
    let o = jf(t, e, i, n, We);
    if (o !== We) return o;
  }
  return Pf(e, i, n, r);
}
function jf(t, e, i, n, r) {
  let o = Uv(i);
  if (typeof o == "function") {
    if (!If(e, t, n)) return n & k.Host ? Ff(r, i, n) : Pf(e, i, n, r);
    try {
      let s;
      if (((s = o(n)), s == null && !(n & k.Optional))) dc(i);
      else return s;
    } finally {
      Tf();
    }
  } else if (typeof o == "number") {
    let s = null,
      a = kf(t, e),
      c = In,
      l = n & k.Host ? e[Ie][we] : null;
    for (
      (a === -1 || n & k.SkipSelf) &&
      ((c = a === -1 ? Tc(t, e) : e[a + 8]),
      c === In || !nu(n, !1)
        ? (a = -1)
        : ((s = e[T]), (a = qr(c)), (e = Yr(c, e))));
      a !== -1;

    ) {
      let d = e[T];
      if (tu(o, a, d.data)) {
        let u = Hv(a, e, i, s, n, l);
        if (u !== We) return u;
      }
      (c = e[a + 8]),
        c !== In && nu(n, e[T].data[a + 8] === l) && tu(o, a, e)
          ? ((s = d), (a = qr(c)), (e = Yr(c, e)))
          : (a = -1);
    }
  }
  return r;
}
function Hv(t, e, i, n, r, o) {
  let s = e[T],
    a = s.data[t + 8],
    c = n == null ? Do(a) && fa : n != s && (a.type & 3) !== 0,
    l = r & k.Host && o === a,
    d = Vr(a, s, i, c, l);
  return d !== null ? Kt(e, s, d, a) : We;
}
function Vr(t, e, i, n, r) {
  let o = t.providerIndexes,
    s = e.data,
    a = o & 1048575,
    c = t.directiveStart,
    l = t.directiveEnd,
    d = o >> 20,
    u = n ? a : a + d,
    f = r ? a + d : l;
  for (let h = u; h < f; h++) {
    let m = s[h];
    if ((h < c && i === m) || (h >= c && m.type === i)) return h;
  }
  if (r) {
    let h = s[c];
    if (h && rt(h) && h.type === i) return c;
  }
  return null;
}
function Kt(t, e, i, n) {
  let r = t[i],
    o = e.data;
  if (Rv(r)) {
    let s = r;
    s.resolving && fb(ub(o[i]));
    let a = Zr(s.canSeeViewProviders);
    s.resolving = !0;
    let c,
      l = s.injectImpl ? fe(s.injectImpl) : null,
      d = If(t, n, k.Default);
    try {
      (r = t[i] = s.factory(void 0, o, t, n)),
        e.firstCreatePass && i >= n.directiveStart && Nv(i, o[i], e);
    } finally {
      l !== null && fe(l), Zr(a), (s.resolving = !1), Tf();
    }
  }
  return r;
}
function Uv(t) {
  if (typeof t == "string") return t.charCodeAt(0) || 0;
  let e = t.hasOwnProperty(ui) ? t[ui] : void 0;
  return typeof e == "number" ? (e >= 0 ? e & Of : $v) : e;
}
function tu(t, e, i) {
  let n = 1 << t;
  return !!(i[e + (t >> Rf)] & n);
}
function nu(t, e) {
  return !(t & k.Self) && !(t & k.Host && e);
}
var zt = class {
  constructor(e, i) {
    (this._tNode = e), (this._lView = i);
  }
  get(e, i, n) {
    return Lf(this._tNode, this._lView, e, po(n), i);
  }
};
function $v() {
  return new zt(te(), I());
}
function Sc(t) {
  return xi(() => {
    let e = t.prototype.constructor,
      i = e[Ur] || pa(e),
      n = Object.prototype,
      r = Object.getPrototypeOf(t.prototype).constructor;
    for (; r && r !== n; ) {
      let o = r[Ur] || pa(r);
      if (o && o !== i) return o;
      r = Object.getPrototypeOf(r);
    }
    return (o) => new o();
  });
}
function pa(t) {
  return ju(t)
    ? () => {
        let e = pa(se(t));
        return e && e();
      }
    : Wt(t);
}
function zv(t, e, i, n, r) {
  let o = t,
    s = e;
  for (; o !== null && s !== null && s[E] & 2048 && !(s[E] & 512); ) {
    let a = jf(o, s, i, n | k.Self, We);
    if (a !== We) return a;
    let c = o.parent;
    if (!c) {
      let l = s[uf];
      if (l) {
        let d = l.get(i, We, n);
        if (d !== We) return d;
      }
      (c = Vf(s)), (s = s[Rn]);
    }
    o = c;
  }
  return r;
}
function Vf(t) {
  let e = t[T],
    i = e.type;
  return i === 2 ? e.declTNode : i === 1 ? t[we] : null;
}
function Wv(t) {
  return Bv(te(), t);
}
function iu(t, e = null, i = null, n) {
  let r = Bf(t, e, i, n);
  return r.resolveInjectorInitializers(), r;
}
function Bf(t, e = null, i = null, n, r = new Set()) {
  let o = [i || ae, Wb(t)];
  return (
    (n = n || (typeof t == "object" ? void 0 : pe(t))),
    new mi(o, e || vo(), n || null, r)
  );
}
var ct = (() => {
  let e = class e {
    static create(n, r) {
      if (Array.isArray(n)) return iu({ name: "" }, r, n, "");
      {
        let o = n.name ?? "";
        return iu({ name: o }, n.parent, n.providers, o);
      }
    }
  };
  (e.THROW_IF_NOT_FOUND = fi),
    (e.NULL = new Wr()),
    (e.ɵprov = b({ token: e, providedIn: "any", factory: () => p(qu) })),
    (e.__NG_ELEMENT_ID__ = -1);
  let t = e;
  return t;
})();
var Gv = "ngOriginalError";
function $s(t) {
  return t[Gv];
}
var Le = class {
    constructor() {
      this._console = console;
    }
    handleError(e) {
      let i = this._findOriginalError(e);
      this._console.error("ERROR", e),
        i && this._console.error("ORIGINAL ERROR", i);
    }
    _findOriginalError(e) {
      let i = e && $s(e);
      for (; i && $s(i); ) i = $s(i);
      return i || null;
    }
  },
  Hf = new D("", {
    providedIn: "root",
    factory: () => _(Le).handleError.bind(void 0),
  }),
  Et = (() => {
    let e = class e {};
    (e.__NG_ELEMENT_ID__ = qv), (e.__NG_ENV_ID__ = (n) => n);
    let t = e;
    return t;
  })(),
  ma = class extends Et {
    constructor(e) {
      super(), (this._lView = e);
    }
    onDestroy(e) {
      return yf(this._lView, e), () => mv(this._lView, e);
    }
  };
function qv() {
  return new ma(I());
}
var Xr = class {
  constructor() {
    (this.destroyed = !1),
      (this.listeners = null),
      (this.errorHandler = _(Le, { optional: !0 })),
      (this.destroyRef = _(Et)),
      this.destroyRef.onDestroy(() => {
        (this.destroyed = !0), (this.listeners = null);
      });
  }
  subscribe(e) {
    if (this.destroyed) throw new x(953, !1);
    return (
      (this.listeners ??= []).push(e),
      {
        unsubscribe: () => {
          let i = this.listeners?.indexOf(e);
          i !== void 0 && i !== -1 && this.listeners?.splice(i, 1);
        },
      }
    );
  }
  emit(e) {
    if (this.destroyed) throw new x(953, !1);
    if (this.listeners === null) return;
    let i = O(null);
    try {
      for (let n of this.listeners)
        try {
          n(e);
        } catch (r) {
          this.errorHandler?.handleError(r);
        }
    } finally {
      O(i);
    }
  }
};
function AO(t) {
  return new Xr();
}
function ru(t, e) {
  return Fu(t, e);
}
function Yv(t) {
  return Fu(fo, t);
}
var NO = ((ru.required = Yv), ru);
function Zv() {
  return Pn(te(), I());
}
function Pn(t, e) {
  return new q(xe(t, e));
}
var q = (() => {
  let e = class e {
    constructor(n) {
      this.nativeElement = n;
    }
  };
  e.__NG_ELEMENT_ID__ = Zv;
  let t = e;
  return t;
})();
function Uf(t) {
  return t instanceof q ? t.nativeElement : t;
}
var ga = class extends L {
  constructor(e = !1) {
    super(),
      (this.destroyRef = void 0),
      (this.__isAsync = e),
      df() && (this.destroyRef = _(Et, { optional: !0 }) ?? void 0);
  }
  emit(e) {
    let i = O(null);
    try {
      super.next(e);
    } finally {
      O(i);
    }
  }
  subscribe(e, i, n) {
    let r = e,
      o = i || (() => null),
      s = n;
    if (e && typeof e == "object") {
      let c = e;
      (r = c.next?.bind(c)), (o = c.error?.bind(c)), (s = c.complete?.bind(c));
    }
    this.__isAsync && ((o = zs(o)), r && (r = zs(r)), s && (s = zs(s)));
    let a = super.subscribe({ next: r, error: o, complete: s });
    return e instanceof $ && e.add(a), a;
  }
};
function zs(t) {
  return (e) => {
    setTimeout(t, void 0, e);
  };
}
var he = ga;
function Kv() {
  return this._results[Symbol.iterator]();
}
var Nn = class t {
  get changes() {
    return (this._changes ??= new he());
  }
  constructor(e = !1) {
    (this._emitDistinctChangesOnly = e),
      (this.dirty = !0),
      (this._onDirty = void 0),
      (this._results = []),
      (this._changesDetected = !1),
      (this._changes = void 0),
      (this.length = 0),
      (this.first = void 0),
      (this.last = void 0);
    let i = t.prototype;
    i[Symbol.iterator] || (i[Symbol.iterator] = Kv);
  }
  get(e) {
    return this._results[e];
  }
  map(e) {
    return this._results.map(e);
  }
  filter(e) {
    return this._results.filter(e);
  }
  find(e) {
    return this._results.find(e);
  }
  reduce(e, i) {
    return this._results.reduce(e, i);
  }
  forEach(e) {
    this._results.forEach(e);
  }
  some(e) {
    return this._results.some(e);
  }
  toArray() {
    return this._results.slice();
  }
  toString() {
    return this._results.toString();
  }
  reset(e, i) {
    this.dirty = !1;
    let n = Ib(e);
    (this._changesDetected = !Eb(this._results, n, i)) &&
      ((this._results = n),
      (this.length = n.length),
      (this.last = n[this.length - 1]),
      (this.first = n[0]));
  }
  notifyOnChanges() {
    this._changes !== void 0 &&
      (this._changesDetected || !this._emitDistinctChangesOnly) &&
      this._changes.emit(this);
  }
  onDirty(e) {
    this._onDirty = e;
  }
  setDirty() {
    (this.dirty = !0), this._onDirty?.();
  }
  destroy() {
    this._changes !== void 0 &&
      (this._changes.complete(), this._changes.unsubscribe());
  }
};
function $f(t) {
  return (t.flags & 128) === 128;
}
var ba;
function zf(t) {
  ba = t;
}
function Xv() {
  if (ba !== void 0) return ba;
  if (typeof document < "u") return document;
  throw new x(210, !1);
}
var Ti = new D("", { providedIn: "root", factory: () => Qv }),
  Qv = "ng",
  Ac = new D(""),
  Xe = new D("", { providedIn: "platform", factory: () => "unknown" });
var It = new D(""),
  Si = new D("", {
    providedIn: "root",
    factory: () =>
      Xv().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") ||
      null,
  });
var Jv = "h",
  ey = "b";
var ty = () => null;
function Nc(t, e, i = !1) {
  return ty(t, e, i);
}
var Wf = !1,
  ny = new D("", { providedIn: "root", factory: () => Wf });
var Ar;
function iy() {
  if (Ar === void 0 && ((Ar = null), ye.trustedTypes))
    try {
      Ar = ye.trustedTypes.createPolicy("angular", {
        createHTML: (t) => t,
        createScript: (t) => t,
        createScriptURL: (t) => t,
      });
    } catch {}
  return Ar;
}
function So(t) {
  return iy()?.createHTML(t) || t;
}
var Nr;
function ry() {
  if (Nr === void 0 && ((Nr = null), ye.trustedTypes))
    try {
      Nr = ye.trustedTypes.createPolicy("angular#unsafe-bypass", {
        createHTML: (t) => t,
        createScript: (t) => t,
        createScriptURL: (t) => t,
      });
    } catch {}
  return Nr;
}
function ou(t) {
  return ry()?.createScriptURL(t) || t;
}
var ot = class {
    constructor(e) {
      this.changingThisBreaksApplicationSecurity = e;
    }
    toString() {
      return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Ru})`;
    }
  },
  va = class extends ot {
    getTypeName() {
      return "HTML";
    }
  },
  ya = class extends ot {
    getTypeName() {
      return "Style";
    }
  },
  _a = class extends ot {
    getTypeName() {
      return "Script";
    }
  },
  Da = class extends ot {
    getTypeName() {
      return "URL";
    }
  },
  wa = class extends ot {
    getTypeName() {
      return "ResourceURL";
    }
  };
function je(t) {
  return t instanceof ot ? t.changingThisBreaksApplicationSecurity : t;
}
function xt(t, e) {
  let i = oy(t);
  if (i != null && i !== e) {
    if (i === "ResourceURL" && e === "URL") return !0;
    throw new Error(`Required a safe ${e}, got a ${i} (see ${Ru})`);
  }
  return i === e;
}
function oy(t) {
  return (t instanceof ot && t.getTypeName()) || null;
}
function Gf(t) {
  return new va(t);
}
function qf(t) {
  return new ya(t);
}
function Yf(t) {
  return new _a(t);
}
function Zf(t) {
  return new Da(t);
}
function Kf(t) {
  return new wa(t);
}
function sy(t) {
  let e = new Ia(t);
  return ay() ? new Ea(e) : e;
}
var Ea = class {
    constructor(e) {
      this.inertDocumentHelper = e;
    }
    getInertBodyElement(e) {
      e = "<body><remove></remove>" + e;
      try {
        let i = new window.DOMParser().parseFromString(So(e), "text/html").body;
        return i === null
          ? this.inertDocumentHelper.getInertBodyElement(e)
          : (i.removeChild(i.firstChild), i);
      } catch {
        return null;
      }
    }
  },
  Ia = class {
    constructor(e) {
      (this.defaultDoc = e),
        (this.inertDocument =
          this.defaultDoc.implementation.createHTMLDocument(
            "sanitization-inert",
          ));
    }
    getInertBodyElement(e) {
      let i = this.inertDocument.createElement("template");
      return (i.innerHTML = So(e)), i;
    }
  };
function ay() {
  try {
    return !!new window.DOMParser().parseFromString(So(""), "text/html");
  } catch {
    return !1;
  }
}
var cy = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function Ao(t) {
  return (t = String(t)), t.match(cy) ? t : "unsafe:" + t;
}
function lt(t) {
  let e = {};
  for (let i of t.split(",")) e[i] = !0;
  return e;
}
function Ai(...t) {
  let e = {};
  for (let i of t) for (let n in i) i.hasOwnProperty(n) && (e[n] = !0);
  return e;
}
var Xf = lt("area,br,col,hr,img,wbr"),
  Qf = lt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
  Jf = lt("rp,rt"),
  ly = Ai(Jf, Qf),
  dy = Ai(
    Qf,
    lt(
      "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul",
    ),
  ),
  uy = Ai(
    Jf,
    lt(
      "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video",
    ),
  ),
  su = Ai(Xf, dy, uy, ly),
  eh = lt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
  fy = lt(
    "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width",
  ),
  hy = lt(
    "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext",
  ),
  py = Ai(eh, fy, hy),
  my = lt("script,style,template"),
  xa = class {
    constructor() {
      (this.sanitizedSomething = !1), (this.buf = []);
    }
    sanitizeChildren(e) {
      let i = e.firstChild,
        n = !0,
        r = [];
      for (; i; ) {
        if (
          (i.nodeType === Node.ELEMENT_NODE
            ? (n = this.startElement(i))
            : i.nodeType === Node.TEXT_NODE
              ? this.chars(i.nodeValue)
              : (this.sanitizedSomething = !0),
          n && i.firstChild)
        ) {
          r.push(i), (i = vy(i));
          continue;
        }
        for (; i; ) {
          i.nodeType === Node.ELEMENT_NODE && this.endElement(i);
          let o = by(i);
          if (o) {
            i = o;
            break;
          }
          i = r.pop();
        }
      }
      return this.buf.join("");
    }
    startElement(e) {
      let i = au(e).toLowerCase();
      if (!su.hasOwnProperty(i))
        return (this.sanitizedSomething = !0), !my.hasOwnProperty(i);
      this.buf.push("<"), this.buf.push(i);
      let n = e.attributes;
      for (let r = 0; r < n.length; r++) {
        let o = n.item(r),
          s = o.name,
          a = s.toLowerCase();
        if (!py.hasOwnProperty(a)) {
          this.sanitizedSomething = !0;
          continue;
        }
        let c = o.value;
        eh[a] && (c = Ao(c)), this.buf.push(" ", s, '="', cu(c), '"');
      }
      return this.buf.push(">"), !0;
    }
    endElement(e) {
      let i = au(e).toLowerCase();
      su.hasOwnProperty(i) &&
        !Xf.hasOwnProperty(i) &&
        (this.buf.push("</"), this.buf.push(i), this.buf.push(">"));
    }
    chars(e) {
      this.buf.push(cu(e));
    }
  };
function gy(t, e) {
  return (
    (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) !==
    Node.DOCUMENT_POSITION_CONTAINED_BY
  );
}
function by(t) {
  let e = t.nextSibling;
  if (e && t !== e.previousSibling) throw th(e);
  return e;
}
function vy(t) {
  let e = t.firstChild;
  if (e && gy(t, e)) throw th(e);
  return e;
}
function au(t) {
  let e = t.nodeName;
  return typeof e == "string" ? e : "FORM";
}
function th(t) {
  return new Error(
    `Failed to sanitize html because the element is clobbered: ${t.outerHTML}`,
  );
}
var yy = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  _y = /([^\#-~ |!])/g;
function cu(t) {
  return t
    .replace(/&/g, "&amp;")
    .replace(yy, function (e) {
      let i = e.charCodeAt(0),
        n = e.charCodeAt(1);
      return "&#" + ((i - 55296) * 1024 + (n - 56320) + 65536) + ";";
    })
    .replace(_y, function (e) {
      return "&#" + e.charCodeAt(0) + ";";
    })
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
var Or;
function nh(t, e) {
  let i = null;
  try {
    Or = Or || sy(t);
    let n = e ? String(e) : "";
    i = Or.getInertBodyElement(n);
    let r = 5,
      o = n;
    do {
      if (r === 0)
        throw new Error(
          "Failed to sanitize html because the input is unstable",
        );
      r--, (n = o), (o = i.innerHTML), (i = Or.getInertBodyElement(n));
    } while (n !== o);
    let a = new xa().sanitizeChildren(lu(i) || i);
    return So(a);
  } finally {
    if (i) {
      let n = lu(i) || i;
      for (; n.firstChild; ) n.removeChild(n.firstChild);
    }
  }
}
function lu(t) {
  return "content" in t && Dy(t) ? t.content : null;
}
function Dy(t) {
  return t.nodeType === Node.ELEMENT_NODE && t.nodeName === "TEMPLATE";
}
var Qe = (function (t) {
  return (
    (t[(t.NONE = 0)] = "NONE"),
    (t[(t.HTML = 1)] = "HTML"),
    (t[(t.STYLE = 2)] = "STYLE"),
    (t[(t.SCRIPT = 3)] = "SCRIPT"),
    (t[(t.URL = 4)] = "URL"),
    (t[(t.RESOURCE_URL = 5)] = "RESOURCE_URL"),
    t
  );
})(Qe || {});
function wy(t) {
  let e = ih();
  return e ? e.sanitize(Qe.URL, t) || "" : xt(t, "URL") ? je(t) : Ao(tt(t));
}
function Ey(t) {
  let e = ih();
  if (e) return ou(e.sanitize(Qe.RESOURCE_URL, t) || "");
  if (xt(t, "ResourceURL")) return ou(je(t));
  throw new x(904, !1);
}
function Iy(t, e) {
  return (e === "src" &&
    (t === "embed" ||
      t === "frame" ||
      t === "iframe" ||
      t === "media" ||
      t === "script")) ||
    (e === "href" && (t === "base" || t === "link"))
    ? Ey
    : wy;
}
function OO(t, e, i) {
  return Iy(e, i)(t);
}
function ih() {
  let t = I();
  return t && t[Pe].sanitizer;
}
var xy = /^>|^->|<!--|-->|--!>|<!-$/g,
  Cy = /(<|>)/g,
  My = "\u200B$1\u200B";
function Ty(t) {
  return t.replace(xy, (e) => e.replace(Cy, My));
}
var rh = new Map(),
  Sy = 0;
function Ay() {
  return Sy++;
}
function Ny(t) {
  rh.set(t[_o], t);
}
function Oy(t) {
  rh.delete(t[_o]);
}
var du = "__ngContext__";
function bt(t, e) {
  $t(e) ? ((t[du] = e[_o]), Ny(e)) : (t[du] = e);
}
function oh(t) {
  return t instanceof Function ? t() : t;
}
var st = (function (t) {
    return (
      (t[(t.Important = 1)] = "Important"),
      (t[(t.DashCase = 2)] = "DashCase"),
      t
    );
  })(st || {}),
  Ry;
function Oc(t, e) {
  return Ry(t, e);
}
function wn(t, e, i, n, r) {
  if (n != null) {
    let o,
      s = !1;
    at(n) ? (o = n) : $t(n) && ((s = !0), (n = n[Ze]));
    let a = Ye(n);
    t === 0 && i !== null
      ? r == null
        ? dh(e, i, a)
        : Qr(e, i, a, r || null, !0)
      : t === 1 && i !== null
        ? Qr(e, i, a, r || null, !0)
        : t === 2
          ? Zy(e, a, s)
          : t === 3 && e.destroyNode(a),
      o != null && Xy(e, t, o, i, r);
  }
}
function ky(t, e) {
  return t.createText(e);
}
function Fy(t, e, i) {
  t.setValue(e, i);
}
function Py(t, e) {
  return t.createComment(Ty(e));
}
function sh(t, e, i) {
  return t.createElement(e, i);
}
function Ly(t, e) {
  ah(t, e), (e[Ze] = null), (e[we] = null);
}
function jy(t, e, i, n, r, o) {
  (n[Ze] = r), (n[we] = e), Ro(t, n, i, 1, r, o);
}
function ah(t, e) {
  e[Pe].changeDetectionScheduler?.notify(1), Ro(t, e, e[z], 2, null, null);
}
function Vy(t) {
  let e = t[bi];
  if (!e) return Ws(t[T], t);
  for (; e; ) {
    let i = null;
    if ($t(e)) i = e[bi];
    else {
      let n = e[re];
      n && (i = n);
    }
    if (!i) {
      for (; e && !e[Fe] && e !== t; ) $t(e) && Ws(e[T], e), (e = e[J]);
      e === null && (e = t), $t(e) && Ws(e[T], e), (i = e && e[Fe]);
    }
    e = i;
  }
}
function By(t, e, i, n) {
  let r = re + n,
    o = i.length;
  n > 0 && (i[r - 1][Fe] = e),
    n < o - re
      ? ((e[Fe] = i[r]), Gu(i, re + n, e))
      : (i.push(e), (e[Fe] = null)),
    (e[J] = i);
  let s = e[Mi];
  s !== null && i !== s && Hy(s, e);
  let a = e[it];
  a !== null && a.insertView(t), da(e), (e[E] |= 128);
}
function Hy(t, e) {
  let i = t[Sn],
    r = e[J][J][Ie];
  e[Ie] !== r && (t[E] |= gc.HasTransplantedViews),
    i === null ? (t[Sn] = [e]) : i.push(e);
}
function ch(t, e) {
  let i = t[Sn],
    n = i.indexOf(e);
  i.splice(n, 1);
}
function _i(t, e) {
  if (t.length <= re) return;
  let i = re + e,
    n = t[i];
  if (n) {
    let r = n[Mi];
    r !== null && r !== t && ch(r, n), e > 0 && (t[i - 1][Fe] = n[Fe]);
    let o = zr(t, re + e);
    Ly(n[T], n);
    let s = o[it];
    s !== null && s.detachView(o[T]),
      (n[J] = null),
      (n[Fe] = null),
      (n[E] &= -129);
  }
  return n;
}
function No(t, e) {
  if (!(e[E] & 256)) {
    let i = e[z];
    i.destroyNode && Ro(t, e, i, 3, null, null), Vy(e);
  }
}
function Ws(t, e) {
  if (e[E] & 256) return;
  let i = O(null);
  try {
    (e[E] &= -129),
      (e[E] |= 256),
      e[Gt] && ms(e[Gt]),
      $y(t, e),
      Uy(t, e),
      e[T].type === 1 && e[z].destroy();
    let n = e[Mi];
    if (n !== null && at(e[J])) {
      n !== e[J] && ch(n, e);
      let r = e[it];
      r !== null && r.detachView(t);
    }
    Oy(e);
  } finally {
    O(i);
  }
}
function Uy(t, e) {
  let i = t.cleanup,
    n = e[gi];
  if (i !== null)
    for (let o = 0; o < i.length - 1; o += 2)
      if (typeof i[o] == "string") {
        let s = i[o + 3];
        s >= 0 ? n[s]() : n[-s].unsubscribe(), (o += 2);
      } else {
        let s = n[i[o + 1]];
        i[o].call(s);
      }
  n !== null && (e[gi] = null);
  let r = e[gt];
  if (r !== null) {
    e[gt] = null;
    for (let o = 0; o < r.length; o++) {
      let s = r[o];
      s();
    }
  }
}
function $y(t, e) {
  let i;
  if (t != null && (i = t.destroyHooks) != null)
    for (let n = 0; n < i.length; n += 2) {
      let r = e[i[n]];
      if (!(r instanceof Zt)) {
        let o = i[n + 1];
        if (Array.isArray(o))
          for (let s = 0; s < o.length; s += 2) {
            let a = r[o[s]],
              c = o[s + 1];
            ze(4, a, c);
            try {
              c.call(a);
            } finally {
              ze(5, a, c);
            }
          }
        else {
          ze(4, r, o);
          try {
            o.call(r);
          } finally {
            ze(5, r, o);
          }
        }
      }
    }
}
function lh(t, e, i) {
  return zy(t, e.parent, i);
}
function zy(t, e, i) {
  let n = e;
  for (; n !== null && n.type & 40; ) (e = n), (n = e.parent);
  if (n === null) return i[Ze];
  {
    let { componentOffset: r } = n;
    if (r > -1) {
      let { encapsulation: o } = t.data[n.directiveStart + r];
      if (o === Ge.None || o === Ge.Emulated) return null;
    }
    return xe(n, i);
  }
}
function Qr(t, e, i, n, r) {
  t.insertBefore(e, i, n, r);
}
function dh(t, e, i) {
  t.appendChild(e, i);
}
function uu(t, e, i, n, r) {
  n !== null ? Qr(t, e, i, n, r) : dh(t, e, i);
}
function Wy(t, e, i, n) {
  t.removeChild(e, i, n);
}
function Rc(t, e) {
  return t.parentNode(e);
}
function Gy(t, e) {
  return t.nextSibling(e);
}
function uh(t, e, i) {
  return Yy(t, e, i);
}
function qy(t, e, i) {
  return t.type & 40 ? xe(t, i) : null;
}
var Yy = qy,
  fu;
function Oo(t, e, i, n) {
  let r = lh(t, n, e),
    o = e[z],
    s = n.parent || e[we],
    a = uh(s, n, e);
  if (r != null)
    if (Array.isArray(i))
      for (let c = 0; c < i.length; c++) uu(o, r, i[c], a, !1);
    else uu(o, r, i, a, !1);
  fu !== void 0 && fu(o, n, e, i, r);
}
function Br(t, e) {
  if (e !== null) {
    let i = e.type;
    if (i & 3) return xe(e, t);
    if (i & 4) return Ca(-1, t[e.index]);
    if (i & 8) {
      let n = e.child;
      if (n !== null) return Br(t, n);
      {
        let r = t[e.index];
        return at(r) ? Ca(-1, r) : Ye(r);
      }
    } else {
      if (i & 32) return Oc(e, t)() || Ye(t[e.index]);
      {
        let n = fh(t, e);
        if (n !== null) {
          if (Array.isArray(n)) return n[0];
          let r = yi(t[Ie]);
          return Br(r, n);
        } else return Br(t, e.next);
      }
    }
  }
  return null;
}
function fh(t, e) {
  if (e !== null) {
    let n = t[Ie][we],
      r = e.projection;
    return n.projection[r];
  }
  return null;
}
function Ca(t, e) {
  let i = re + t + 1;
  if (i < e.length) {
    let n = e[i],
      r = n[T].firstChild;
    if (r !== null) return Br(n, r);
  }
  return e[qt];
}
function Zy(t, e, i) {
  let n = Rc(t, e);
  n && Wy(t, n, e, i);
}
function kc(t, e, i, n, r, o, s) {
  for (; i != null; ) {
    let a = n[i.index],
      c = i.type;
    if (
      (s && e === 0 && (a && bt(Ye(a), n), (i.flags |= 2)),
      (i.flags & 32) !== 32)
    )
      if (c & 8) kc(t, e, i.child, n, r, o, !1), wn(e, t, r, a, o);
      else if (c & 32) {
        let l = Oc(i, n),
          d;
        for (; (d = l()); ) wn(e, t, r, d, o);
        wn(e, t, r, a, o);
      } else c & 16 ? hh(t, e, n, i, r, o) : wn(e, t, r, a, o);
    i = s ? i.projectionNext : i.next;
  }
}
function Ro(t, e, i, n, r, o) {
  kc(i, n, t.firstChild, e, r, o, !1);
}
function Ky(t, e, i) {
  let n = e[z],
    r = lh(t, i, e),
    o = i.parent || e[we],
    s = uh(o, i, e);
  hh(n, 0, e, i, r, s);
}
function hh(t, e, i, n, r, o) {
  let s = i[Ie],
    c = s[we].projection[n.projection];
  if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
      let d = c[l];
      wn(e, t, r, d, o);
    }
  else {
    let l = c,
      d = s[J];
    $f(n) && (l.flags |= 128), kc(t, e, l, d, r, o, !0);
  }
}
function Xy(t, e, i, n, r) {
  let o = i[qt],
    s = Ye(i);
  o !== s && wn(e, t, n, o, r);
  for (let a = re; a < i.length; a++) {
    let c = i[a];
    Ro(c[T], c, t, e, n, o);
  }
}
function Qy(t, e, i, n, r) {
  if (e) r ? t.addClass(i, n) : t.removeClass(i, n);
  else {
    let o = n.indexOf("-") === -1 ? void 0 : st.DashCase;
    r == null
      ? t.removeStyle(i, n, o)
      : (typeof r == "string" &&
          r.endsWith("!important") &&
          ((r = r.slice(0, -10)), (o |= st.Important)),
        t.setStyle(i, n, r, o));
  }
}
function Jy(t, e, i) {
  t.setAttribute(e, "style", i);
}
function ph(t, e, i) {
  i === "" ? t.removeAttribute(e, "class") : t.setAttribute(e, "class", i);
}
function mh(t, e, i) {
  let { mergedAttrs: n, classes: r, styles: o } = i;
  n !== null && oa(t, e, n),
    r !== null && ph(t, e, r),
    o !== null && Jy(t, e, o);
}
var ge = {};
function gh(t = 1) {
  bh(W(), I(), Ke() + t, !1);
}
function bh(t, e, i, n) {
  if (!n)
    if ((e[E] & 3) === 3) {
      let o = t.preOrderCheckHooks;
      o !== null && Lr(e, o, i);
    } else {
      let o = t.preOrderHooks;
      o !== null && jr(e, o, 0, i);
    }
  Yt(i);
}
function F(t, e = k.Default) {
  let i = I();
  if (i === null) return p(t, e);
  let n = te();
  return Lf(n, i, se(t), e);
}
function vh() {
  let t = "invalid";
  throw new Error(t);
}
function yh(t, e, i, n, r, o) {
  let s = O(null);
  try {
    let a = null;
    r & U.SignalBased && (a = e[n][de]),
      a !== null && a.transformFn !== void 0 && (o = a.transformFn(o)),
      r & U.HasDecoratorInputTransform && (o = t.inputTransforms[n].call(e, o)),
      t.setInput !== null ? t.setInput(e, a, o, i, n) : ff(e, a, n, o);
  } finally {
    O(s);
  }
}
function e_(t, e) {
  let i = t.hostBindingOpCodes;
  if (i !== null)
    try {
      for (let n = 0; n < i.length; n++) {
        let r = i[n];
        if (r < 0) Yt(~r);
        else {
          let o = r,
            s = i[++n],
            a = i[++n];
          xv(s, o);
          let c = e[o];
          a(2, c);
        }
      }
    } finally {
      Yt(-1);
    }
}
function ko(t, e, i, n, r, o, s, a, c, l, d) {
  let u = e.blueprint.slice();
  return (
    (u[Ze] = r),
    (u[E] = n | 4 | 128 | 8 | 64),
    (l !== null || (t && t[E] & 2048)) && (u[E] |= 2048),
    vf(u),
    (u[J] = u[Rn] = t),
    (u[ie] = i),
    (u[Pe] = s || (t && t[Pe])),
    (u[z] = a || (t && t[z])),
    (u[Tn] = c || (t && t[Tn]) || null),
    (u[we] = o),
    (u[_o] = Ay()),
    (u[Mn] = d),
    (u[uf] = l),
    (u[Ie] = e.type == 2 ? t[Ie] : u),
    u
  );
}
function Ln(t, e, i, n, r) {
  let o = t.data[e];
  if (o === null) (o = t_(t, e, i, n, r)), Iv() && (o.flags |= 32);
  else if (o.type & 64) {
    (o.type = i), (o.value = n), (o.attrs = r);
    let s = Dv();
    o.injectorIndex = s === null ? -1 : s.injectorIndex;
  }
  return en(o, !0), o;
}
function t_(t, e, i, n, r) {
  let o = wf(),
    s = wc(),
    a = s ? o : o && o.parent,
    c = (t.data[e] = a_(t, a, i, e, n, r));
  return (
    t.firstChild === null && (t.firstChild = c),
    o !== null &&
      (s
        ? o.child == null && c.parent !== null && (o.child = c)
        : o.next === null && ((o.next = c), (c.prev = o))),
    c
  );
}
function _h(t, e, i, n) {
  if (i === 0) return -1;
  let r = e.length;
  for (let o = 0; o < i; o++) e.push(n), t.blueprint.push(n), t.data.push(null);
  return r;
}
function Dh(t, e, i, n, r) {
  let o = Ke(),
    s = n & 2;
  try {
    Yt(-1), s && e.length > ee && bh(t, e, ee, !1), ze(s ? 2 : 0, r), i(n, r);
  } finally {
    Yt(o), ze(s ? 3 : 1, r);
  }
}
function Fc(t, e, i) {
  if (bc(e)) {
    let n = O(null);
    try {
      let r = e.directiveStart,
        o = e.directiveEnd;
      for (let s = r; s < o; s++) {
        let a = t.data[s];
        if (a.contentQueries) {
          let c = i[s];
          a.contentQueries(1, c, s);
        }
      }
    } finally {
      O(n);
    }
  }
}
function Pc(t, e, i) {
  _f() && (h_(t, e, i, xe(i, e)), (i.flags & 64) === 64 && Ih(t, e, i));
}
function Lc(t, e, i = xe) {
  let n = e.localNames;
  if (n !== null) {
    let r = e.index + 1;
    for (let o = 0; o < n.length; o += 2) {
      let s = n[o + 1],
        a = s === -1 ? i(e, t) : t[s];
      t[r++] = a;
    }
  }
}
function wh(t) {
  let e = t.tView;
  return e === null || e.incompleteFirstPass
    ? (t.tView = jc(
        1,
        null,
        t.template,
        t.decls,
        t.vars,
        t.directiveDefs,
        t.pipeDefs,
        t.viewQuery,
        t.schemas,
        t.consts,
        t.id,
      ))
    : e;
}
function jc(t, e, i, n, r, o, s, a, c, l, d) {
  let u = ee + n,
    f = u + r,
    h = n_(u, f),
    m = typeof l == "function" ? l() : l;
  return (h[T] = {
    type: t,
    blueprint: h,
    template: i,
    queries: null,
    viewQuery: a,
    declTNode: e,
    data: h.slice().fill(null, u),
    bindingStartIndex: u,
    expandoStartIndex: f,
    hostBindingOpCodes: null,
    firstCreatePass: !0,
    firstUpdatePass: !0,
    staticViewQueries: !1,
    staticContentQueries: !1,
    preOrderHooks: null,
    preOrderCheckHooks: null,
    contentHooks: null,
    contentCheckHooks: null,
    viewHooks: null,
    viewCheckHooks: null,
    destroyHooks: null,
    cleanup: null,
    contentQueries: null,
    components: null,
    directiveRegistry: typeof o == "function" ? o() : o,
    pipeRegistry: typeof s == "function" ? s() : s,
    firstChild: null,
    schemas: c,
    consts: m,
    incompleteFirstPass: !1,
    ssrId: d,
  });
}
function n_(t, e) {
  let i = [];
  for (let n = 0; n < e; n++) i.push(n < t ? null : ge);
  return i;
}
function i_(t, e, i, n) {
  let o = n.get(ny, Wf) || i === Ge.ShadowDom,
    s = t.selectRootElement(e, o);
  return r_(s), s;
}
function r_(t) {
  o_(t);
}
var o_ = () => null;
function s_(t, e, i, n) {
  let r = Mh(e);
  r.push(i), t.firstCreatePass && Th(t).push(n, r.length - 1);
}
function a_(t, e, i, n, r, o) {
  let s = e ? e.injectorIndex : -1,
    a = 0;
  return (
    Df() && (a |= 128),
    {
      type: i,
      index: n,
      insertBeforeIndex: null,
      injectorIndex: s,
      directiveStart: -1,
      directiveEnd: -1,
      directiveStylingLast: -1,
      componentOffset: -1,
      propertyBindings: null,
      flags: a,
      providerIndexes: 0,
      value: r,
      attrs: o,
      mergedAttrs: null,
      localNames: null,
      initialInputs: void 0,
      inputs: null,
      outputs: null,
      tView: null,
      next: null,
      prev: null,
      projectionNext: null,
      child: null,
      parent: e,
      projection: null,
      styles: null,
      stylesWithoutHost: null,
      residualStyles: void 0,
      classes: null,
      classesWithoutHost: null,
      residualClasses: void 0,
      classBindings: 0,
      styleBindings: 0,
    }
  );
}
function hu(t, e, i, n, r) {
  for (let o in e) {
    if (!e.hasOwnProperty(o)) continue;
    let s = e[o];
    if (s === void 0) continue;
    n ??= {};
    let a,
      c = U.None;
    Array.isArray(s) ? ((a = s[0]), (c = s[1])) : (a = s);
    let l = o;
    if (r !== null) {
      if (!r.hasOwnProperty(o)) continue;
      l = r[o];
    }
    t === 0 ? pu(n, i, l, a, c) : pu(n, i, l, a);
  }
  return n;
}
function pu(t, e, i, n, r) {
  let o;
  t.hasOwnProperty(i) ? (o = t[i]).push(e, n) : (o = t[i] = [e, n]),
    r !== void 0 && o.push(r);
}
function c_(t, e, i) {
  let n = e.directiveStart,
    r = e.directiveEnd,
    o = t.data,
    s = e.attrs,
    a = [],
    c = null,
    l = null;
  for (let d = n; d < r; d++) {
    let u = o[d],
      f = i ? i.get(u) : null,
      h = f ? f.inputs : null,
      m = f ? f.outputs : null;
    (c = hu(0, u.inputs, d, c, h)), (l = hu(1, u.outputs, d, l, m));
    let g = c !== null && s !== null && !fc(e) ? I_(c, d, s) : null;
    a.push(g);
  }
  c !== null &&
    (c.hasOwnProperty("class") && (e.flags |= 8),
    c.hasOwnProperty("style") && (e.flags |= 16)),
    (e.initialInputs = a),
    (e.inputs = c),
    (e.outputs = l);
}
function l_(t) {
  return t === "class"
    ? "className"
    : t === "for"
      ? "htmlFor"
      : t === "formaction"
        ? "formAction"
        : t === "innerHtml"
          ? "innerHTML"
          : t === "readonly"
            ? "readOnly"
            : t === "tabindex"
              ? "tabIndex"
              : t;
}
function Ni(t, e, i, n, r, o, s, a) {
  let c = xe(e, i),
    l = e.inputs,
    d;
  !a && l != null && (d = l[n])
    ? (Bc(t, i, d, n, r), Do(e) && d_(i, e.index))
    : e.type & 3
      ? ((n = l_(n)),
        (r = s != null ? s(r, e.value || "", n) : r),
        o.setProperty(c, n, r))
      : e.type & 12;
}
function d_(t, e) {
  let i = Dt(e, t);
  i[E] & 16 || (i[E] |= 64);
}
function Vc(t, e, i, n) {
  if (_f()) {
    let r = n === null ? null : { "": -1 },
      o = m_(t, i),
      s,
      a;
    o === null ? (s = a = null) : ([s, a] = o),
      s !== null && Eh(t, e, i, s, r, a),
      r && g_(i, n, r);
  }
  i.mergedAttrs = pi(i.mergedAttrs, i.attrs);
}
function Eh(t, e, i, n, r, o) {
  for (let l = 0; l < n.length; l++) ha(Kr(i, e), t, n[l].type);
  v_(i, t.data.length, n.length);
  for (let l = 0; l < n.length; l++) {
    let d = n[l];
    d.providersResolver && d.providersResolver(d);
  }
  let s = !1,
    a = !1,
    c = _h(t, e, n.length, null);
  for (let l = 0; l < n.length; l++) {
    let d = n[l];
    (i.mergedAttrs = pi(i.mergedAttrs, d.hostAttrs)),
      y_(t, i, e, c, d),
      b_(c, d, r),
      d.contentQueries !== null && (i.flags |= 4),
      (d.hostBindings !== null || d.hostAttrs !== null || d.hostVars !== 0) &&
        (i.flags |= 64);
    let u = d.type.prototype;
    !s &&
      (u.ngOnChanges || u.ngOnInit || u.ngDoCheck) &&
      ((t.preOrderHooks ??= []).push(i.index), (s = !0)),
      !a &&
        (u.ngOnChanges || u.ngDoCheck) &&
        ((t.preOrderCheckHooks ??= []).push(i.index), (a = !0)),
      c++;
  }
  c_(t, i, o);
}
function u_(t, e, i, n, r) {
  let o = r.hostBindings;
  if (o) {
    let s = t.hostBindingOpCodes;
    s === null && (s = t.hostBindingOpCodes = []);
    let a = ~e.index;
    f_(s) != a && s.push(a), s.push(i, n, o);
  }
}
function f_(t) {
  let e = t.length;
  for (; e > 0; ) {
    let i = t[--e];
    if (typeof i == "number" && i < 0) return i;
  }
  return 0;
}
function h_(t, e, i, n) {
  let r = i.directiveStart,
    o = i.directiveEnd;
  Do(i) && __(e, i, t.data[r + i.componentOffset]),
    t.firstCreatePass || Kr(i, e),
    bt(n, e);
  let s = i.initialInputs;
  for (let a = r; a < o; a++) {
    let c = t.data[a],
      l = Kt(e, t, a, i);
    if ((bt(l, e), s !== null && E_(e, a - r, l, c, i, s), rt(c))) {
      let d = Dt(i.index, e);
      d[ie] = Kt(e, t, a, i);
    }
  }
}
function Ih(t, e, i) {
  let n = i.directiveStart,
    r = i.directiveEnd,
    o = i.index,
    s = Cv();
  try {
    Yt(o);
    for (let a = n; a < r; a++) {
      let c = t.data[a],
        l = e[a];
      ua(a),
        (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) &&
          p_(c, l);
    }
  } finally {
    Yt(-1), ua(s);
  }
}
function p_(t, e) {
  t.hostBindings !== null && t.hostBindings(1, e);
}
function m_(t, e) {
  let i = t.directiveRegistry,
    n = null,
    r = null;
  if (i)
    for (let o = 0; o < i.length; o++) {
      let s = i[o];
      if (Qu(e, s.selectors, !1))
        if ((n || (n = []), rt(s)))
          if (s.findHostDirectiveDefs !== null) {
            let a = [];
            (r = r || new Map()),
              s.findHostDirectiveDefs(s, a, r),
              n.unshift(...a, s);
            let c = a.length;
            Ma(t, e, c);
          } else n.unshift(s), Ma(t, e, 0);
        else
          (r = r || new Map()), s.findHostDirectiveDefs?.(s, n, r), n.push(s);
    }
  return n === null ? null : [n, r];
}
function Ma(t, e, i) {
  (e.componentOffset = i), (t.components ??= []).push(e.index);
}
function g_(t, e, i) {
  if (e) {
    let n = (t.localNames = []);
    for (let r = 0; r < e.length; r += 2) {
      let o = i[e[r + 1]];
      if (o == null) throw new x(-301, !1);
      n.push(e[r], o);
    }
  }
}
function b_(t, e, i) {
  if (i) {
    if (e.exportAs)
      for (let n = 0; n < e.exportAs.length; n++) i[e.exportAs[n]] = t;
    rt(e) && (i[""] = t);
  }
}
function v_(t, e, i) {
  (t.flags |= 1),
    (t.directiveStart = e),
    (t.directiveEnd = e + i),
    (t.providerIndexes = e);
}
function y_(t, e, i, n, r) {
  t.data[n] = r;
  let o = r.factory || (r.factory = Wt(r.type, !0)),
    s = new Zt(o, rt(r), F);
  (t.blueprint[n] = s), (i[n] = s), u_(t, e, n, _h(t, i, r.hostVars, ge), r);
}
function __(t, e, i) {
  let n = xe(e, t),
    r = wh(i),
    o = t[Pe].rendererFactory,
    s = 16;
  i.signals ? (s = 4096) : i.onPush && (s = 64);
  let a = Fo(
    t,
    ko(t, r, null, s, n, e, null, o.createRenderer(n, i), null, null, null),
  );
  t[e.index] = a;
}
function D_(t, e, i, n, r, o) {
  let s = xe(t, e);
  w_(e[z], s, o, t.value, i, n, r);
}
function w_(t, e, i, n, r, o, s) {
  if (o == null) t.removeAttribute(e, r, i);
  else {
    let a = s == null ? tt(o) : s(o, n || "", r);
    t.setAttribute(e, r, a, i);
  }
}
function E_(t, e, i, n, r, o) {
  let s = o[e];
  if (s !== null)
    for (let a = 0; a < s.length; ) {
      let c = s[a++],
        l = s[a++],
        d = s[a++],
        u = s[a++];
      yh(n, i, c, l, d, u);
    }
}
function I_(t, e, i) {
  let n = null,
    r = 0;
  for (; r < i.length; ) {
    let o = i[r];
    if (o === 0) {
      r += 4;
      continue;
    } else if (o === 5) {
      r += 2;
      continue;
    }
    if (typeof o == "number") break;
    if (t.hasOwnProperty(o)) {
      n === null && (n = []);
      let s = t[o];
      for (let a = 0; a < s.length; a += 3)
        if (s[a] === e) {
          n.push(o, s[a + 1], s[a + 2], i[r + 1]);
          break;
        }
    }
    r += 2;
  }
  return n;
}
function xh(t, e, i, n) {
  return [t, !0, 0, e, null, n, null, i, null, null];
}
function Ch(t, e) {
  let i = t.contentQueries;
  if (i !== null) {
    let n = O(null);
    try {
      for (let r = 0; r < i.length; r += 2) {
        let o = i[r],
          s = i[r + 1];
        if (s !== -1) {
          let a = t.data[s];
          xo(o), a.contentQueries(2, e[s], s);
        }
      }
    } finally {
      O(n);
    }
  }
}
function Fo(t, e) {
  return t[bi] ? (t[Qd][Fe] = e) : (t[bi] = e), (t[Qd] = e), e;
}
function Ta(t, e, i) {
  xo(0);
  let n = O(null);
  try {
    e(t, i);
  } finally {
    O(n);
  }
}
function Mh(t) {
  return t[gi] || (t[gi] = []);
}
function Th(t) {
  return t.cleanup || (t.cleanup = []);
}
function Sh(t, e, i) {
  return (t === null || rt(t)) && (i = dv(i[e.index])), i[z];
}
function Ah(t, e) {
  let i = t[Tn],
    n = i ? i.get(Le, null) : null;
  n && n.handleError(e);
}
function Bc(t, e, i, n, r) {
  for (let o = 0; o < i.length; ) {
    let s = i[o++],
      a = i[o++],
      c = i[o++],
      l = e[s],
      d = t.data[s];
    yh(d, l, n, a, c, r);
  }
}
function Hc(t, e, i) {
  let n = bf(e, t);
  Fy(t[z], n, i);
}
function x_(t, e) {
  let i = Dt(e, t),
    n = i[T];
  C_(n, i);
  let r = i[Ze];
  r !== null && i[Mn] === null && (i[Mn] = Nc(r, i[Tn])), Uc(n, i, i[ie]);
}
function C_(t, e) {
  for (let i = e.length; i < t.blueprint.length; i++) e.push(t.blueprint[i]);
}
function Uc(t, e, i) {
  Cc(e);
  try {
    let n = t.viewQuery;
    n !== null && Ta(1, n, i);
    let r = t.template;
    r !== null && Dh(t, e, r, 1, i),
      t.firstCreatePass && (t.firstCreatePass = !1),
      e[it]?.finishViewCreation(t),
      t.staticContentQueries && Ch(t, e),
      t.staticViewQueries && Ta(2, t.viewQuery, i);
    let o = t.components;
    o !== null && M_(e, o);
  } catch (n) {
    throw (
      (t.firstCreatePass &&
        ((t.incompleteFirstPass = !0), (t.firstCreatePass = !1)),
      n)
    );
  } finally {
    (e[E] &= -5), Mc();
  }
}
function M_(t, e) {
  for (let i = 0; i < e.length; i++) x_(t, e[i]);
}
function Po(t, e, i, n) {
  let r = O(null);
  try {
    let o = e.tView,
      a = t[E] & 4096 ? 4096 : 16,
      c = ko(
        t,
        o,
        i,
        a,
        null,
        e,
        null,
        null,
        null,
        n?.injector ?? null,
        n?.dehydratedView ?? null,
      ),
      l = t[e.index];
    c[Mi] = l;
    let d = t[it];
    return d !== null && (c[it] = d.createEmbeddedView(o)), Uc(o, c, i), c;
  } finally {
    O(r);
  }
}
function Nh(t, e) {
  let i = re + e;
  if (i < t.length) return t[i];
}
function Di(t, e) {
  return !e || e.firstChild === null || $f(t);
}
function Lo(t, e, i, n = !0) {
  let r = e[T];
  if ((By(r, e, t, i), n)) {
    let s = Ca(i, t),
      a = e[z],
      c = Rc(a, t[qt]);
    c !== null && jy(r, t[we], a, e, c, s);
  }
  let o = e[Mn];
  o !== null && o.firstChild !== null && (o.firstChild = null);
}
function Oh(t, e) {
  let i = _i(t, e);
  return i !== void 0 && No(i[T], i), i;
}
function Jr(t, e, i, n, r = !1) {
  for (; i !== null; ) {
    let o = e[i.index];
    o !== null && n.push(Ye(o)), at(o) && T_(o, n);
    let s = i.type;
    if (s & 8) Jr(t, e, i.child, n);
    else if (s & 32) {
      let a = Oc(i, e),
        c;
      for (; (c = a()); ) n.push(c);
    } else if (s & 16) {
      let a = fh(e, i);
      if (Array.isArray(a)) n.push(...a);
      else {
        let c = yi(e[Ie]);
        Jr(c[T], c, a, n, !0);
      }
    }
    i = r ? i.projectionNext : i.next;
  }
  return n;
}
function T_(t, e) {
  for (let i = re; i < t.length; i++) {
    let n = t[i],
      r = n[T].firstChild;
    r !== null && Jr(n[T], n, r, e);
  }
  t[qt] !== t[Ze] && e.push(t[qt]);
}
var Rh = [];
function S_(t) {
  return t[Gt] ?? A_(t);
}
function A_(t) {
  let e = Rh.pop() ?? Object.create(O_);
  return (e.lView = t), e;
}
function N_(t) {
  t.lView[Gt] !== t && ((t.lView = null), Rh.push(t));
}
var O_ = le(P({}, Jn), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (t) => {
    vi(t.lView);
  },
  consumerOnSignalRead() {
    this.lView[Gt] = this;
  },
});
function kh(t) {
  return Ph(t[bi]);
}
function Fh(t) {
  return Ph(t[Fe]);
}
function Ph(t) {
  for (; t !== null && !at(t); ) t = t[Fe];
  return t;
}
var Lh = 100;
function jh(t, e = !0, i = 0) {
  let n = t[Pe],
    r = n.rendererFactory,
    o = !1;
  o || r.begin?.();
  try {
    R_(t, i);
  } catch (s) {
    throw (e && Ah(t, s), s);
  } finally {
    o || (r.end?.(), n.inlineEffectRunner?.flush());
  }
}
function R_(t, e) {
  Sa(t, e);
  let i = 0;
  for (; Dc(t); ) {
    if (i === Lh) throw new x(103, !1);
    i++, Sa(t, 1);
  }
}
function k_(t, e, i, n) {
  let r = e[E];
  if ((r & 256) === 256) return;
  let o = !1;
  !o && e[Pe].inlineEffectRunner?.flush(), Cc(e);
  let s = null,
    a = null;
  !o && F_(t) && ((a = S_(e)), (s = qi(a)));
  try {
    vf(e), Ev(t.bindingStartIndex), i !== null && Dh(t, e, i, 2, n);
    let c = (r & 3) === 3;
    if (!o)
      if (c) {
        let u = t.preOrderCheckHooks;
        u !== null && Lr(e, u, null);
      } else {
        let u = t.preOrderHooks;
        u !== null && jr(e, u, 0, null), Hs(e, 0);
      }
    if ((P_(e), Vh(e, 0), t.contentQueries !== null && Ch(t, e), !o))
      if (c) {
        let u = t.contentCheckHooks;
        u !== null && Lr(e, u);
      } else {
        let u = t.contentHooks;
        u !== null && jr(e, u, 1), Hs(e, 1);
      }
    e_(t, e);
    let l = t.components;
    l !== null && Hh(e, l, 0);
    let d = t.viewQuery;
    if ((d !== null && Ta(2, d, n), !o))
      if (c) {
        let u = t.viewCheckHooks;
        u !== null && Lr(e, u);
      } else {
        let u = t.viewHooks;
        u !== null && jr(e, u, 2), Hs(e, 2);
      }
    if ((t.firstUpdatePass === !0 && (t.firstUpdatePass = !1), e[Pr])) {
      for (let u of e[Pr]) u();
      e[Pr] = null;
    }
    o || (e[E] &= -73);
  } catch (c) {
    throw (vi(e), c);
  } finally {
    a !== null && (Yi(a, s), N_(a)), Mc();
  }
}
function F_(t) {
  return t.type !== 2;
}
function Vh(t, e) {
  for (let i = kh(t); i !== null; i = Fh(i))
    for (let n = re; n < i.length; n++) {
      let r = i[n];
      Bh(r, e);
    }
}
function P_(t) {
  for (let e = kh(t); e !== null; e = Fh(e)) {
    if (!(e[E] & gc.HasTransplantedViews)) continue;
    let i = e[Sn];
    for (let n = 0; n < i.length; n++) {
      let r = i[n],
        o = r[J];
      hv(r);
    }
  }
}
function L_(t, e, i) {
  let n = Dt(e, t);
  Bh(n, i);
}
function Bh(t, e) {
  _c(t) && Sa(t, e);
}
function Sa(t, e) {
  let n = t[T],
    r = t[E],
    o = t[Gt],
    s = !!(e === 0 && r & 16);
  if (
    ((s ||= !!(r & 64 && e === 0)),
    (s ||= !!(r & 1024)),
    (s ||= !!(o?.dirty && Zi(o))),
    o && (o.dirty = !1),
    (t[E] &= -9217),
    s)
  )
    k_(n, t, n.template, t[ie]);
  else if (r & 8192) {
    Vh(t, 1);
    let a = n.components;
    a !== null && Hh(t, a, 1);
  }
}
function Hh(t, e, i) {
  for (let n = 0; n < e.length; n++) L_(t, e[n], i);
}
function $c(t) {
  for (t[Pe].changeDetectionScheduler?.notify(); t; ) {
    t[E] |= 64;
    let e = yi(t);
    if (iv(t) && !e) return t;
    t = e;
  }
  return null;
}
var Xt = class {
    get rootNodes() {
      let e = this._lView,
        i = e[T];
      return Jr(i, e, i.firstChild, []);
    }
    constructor(e, i, n = !0) {
      (this._lView = e),
        (this._cdRefInjectingView = i),
        (this.notifyErrorHandler = n),
        (this._appRef = null),
        (this._attachedToViewContainer = !1);
    }
    get context() {
      return this._lView[ie];
    }
    set context(e) {
      this._lView[ie] = e;
    }
    get destroyed() {
      return (this._lView[E] & 256) === 256;
    }
    destroy() {
      if (this._appRef) this._appRef.detachView(this);
      else if (this._attachedToViewContainer) {
        let e = this._lView[J];
        if (at(e)) {
          let i = e[Gr],
            n = i ? i.indexOf(this) : -1;
          n > -1 && (_i(e, n), zr(i, n));
        }
        this._attachedToViewContainer = !1;
      }
      No(this._lView[T], this._lView);
    }
    onDestroy(e) {
      yf(this._lView, e);
    }
    markForCheck() {
      $c(this._cdRefInjectingView || this._lView);
    }
    detach() {
      this._lView[E] &= -129;
    }
    reattach() {
      da(this._lView), (this._lView[E] |= 128);
    }
    detectChanges() {
      (this._lView[E] |= 1024), jh(this._lView, this.notifyErrorHandler);
    }
    checkNoChanges() {}
    attachToViewContainerRef() {
      if (this._appRef) throw new x(902, !1);
      this._attachedToViewContainer = !0;
    }
    detachFromAppRef() {
      (this._appRef = null), ah(this._lView[T], this._lView);
    }
    attachToAppRef(e) {
      if (this._attachedToViewContainer) throw new x(902, !1);
      (this._appRef = e), da(this._lView);
    }
  },
  vt = (() => {
    let e = class e {};
    e.__NG_ELEMENT_ID__ = B_;
    let t = e;
    return t;
  })(),
  j_ = vt,
  V_ = class extends j_ {
    constructor(e, i, n) {
      super(),
        (this._declarationLView = e),
        (this._declarationTContainer = i),
        (this.elementRef = n);
    }
    get ssrId() {
      return this._declarationTContainer.tView?.ssrId || null;
    }
    createEmbeddedView(e, i) {
      return this.createEmbeddedViewImpl(e, i);
    }
    createEmbeddedViewImpl(e, i, n) {
      let r = Po(this._declarationLView, this._declarationTContainer, e, {
        injector: i,
        dehydratedView: n,
      });
      return new Xt(r);
    }
  };
function B_() {
  return jo(te(), I());
}
function jo(t, e) {
  return t.type & 4 ? new V_(e, t, Pn(t, e)) : null;
}
var kO = new RegExp(`^(\\d+)*(${ey}|${Jv})*(.*)`);
var H_ = () => null;
function wi(t, e) {
  return H_(t, e);
}
var Aa = class {},
  Na = class {},
  eo = class {};
function U_(t) {
  let e = Error(`No component factory found for ${pe(t)}.`);
  return (e[$_] = t), e;
}
var $_ = "ngComponent";
var Oa = class {
    resolveComponentFactory(e) {
      throw U_(e);
    }
  },
  Ct = (() => {
    let e = class e {};
    e.NULL = new Oa();
    let t = e;
    return t;
  })(),
  Ei = class {},
  zc = (() => {
    let e = class e {
      constructor() {
        this.destroyNode = null;
      }
    };
    e.__NG_ELEMENT_ID__ = () => z_();
    let t = e;
    return t;
  })();
function z_() {
  let t = I(),
    e = te(),
    i = Dt(e.index, t);
  return ($t(i) ? i : t)[z];
}
var W_ = (() => {
    let e = class e {};
    e.ɵprov = b({ token: e, providedIn: "root", factory: () => null });
    let t = e;
    return t;
  })(),
  Gs = {};
var mu = new Set();
function Mt(t) {
  mu.has(t) ||
    (mu.add(t),
    performance?.mark?.("mark_feature_usage", { detail: { feature: t } }));
}
function gu(...t) {}
function G_() {
  let t = typeof ye.requestAnimationFrame == "function",
    e = ye[t ? "requestAnimationFrame" : "setTimeout"],
    i = ye[t ? "cancelAnimationFrame" : "clearTimeout"];
  if (typeof Zone < "u" && e && i) {
    let n = e[Zone.__symbol__("OriginalDelegate")];
    n && (e = n);
    let r = i[Zone.__symbol__("OriginalDelegate")];
    r && (i = r);
  }
  return { nativeRequestAnimationFrame: e, nativeCancelAnimationFrame: i };
}
var N = class t {
    constructor({
      enableLongStackTrace: e = !1,
      shouldCoalesceEventChangeDetection: i = !1,
      shouldCoalesceRunChangeDetection: n = !1,
    }) {
      if (
        ((this.hasPendingMacrotasks = !1),
        (this.hasPendingMicrotasks = !1),
        (this.isStable = !0),
        (this.onUnstable = new he(!1)),
        (this.onMicrotaskEmpty = new he(!1)),
        (this.onStable = new he(!1)),
        (this.onError = new he(!1)),
        typeof Zone > "u")
      )
        throw new x(908, !1);
      Zone.assertZonePatched();
      let r = this;
      (r._nesting = 0),
        (r._outer = r._inner = Zone.current),
        Zone.TaskTrackingZoneSpec &&
          (r._inner = r._inner.fork(new Zone.TaskTrackingZoneSpec())),
        e &&
          Zone.longStackTraceZoneSpec &&
          (r._inner = r._inner.fork(Zone.longStackTraceZoneSpec)),
        (r.shouldCoalesceEventChangeDetection = !n && i),
        (r.shouldCoalesceRunChangeDetection = n),
        (r.lastRequestAnimationFrameId = -1),
        (r.nativeRequestAnimationFrame = G_().nativeRequestAnimationFrame),
        Z_(r);
    }
    static isInAngularZone() {
      return typeof Zone < "u" && Zone.current.get("isAngularZone") === !0;
    }
    static assertInAngularZone() {
      if (!t.isInAngularZone()) throw new x(909, !1);
    }
    static assertNotInAngularZone() {
      if (t.isInAngularZone()) throw new x(909, !1);
    }
    run(e, i, n) {
      return this._inner.run(e, i, n);
    }
    runTask(e, i, n, r) {
      let o = this._inner,
        s = o.scheduleEventTask("NgZoneEvent: " + r, e, q_, gu, gu);
      try {
        return o.runTask(s, i, n);
      } finally {
        o.cancelTask(s);
      }
    }
    runGuarded(e, i, n) {
      return this._inner.runGuarded(e, i, n);
    }
    runOutsideAngular(e) {
      return this._outer.run(e);
    }
  },
  q_ = {};
function Wc(t) {
  if (t._nesting == 0 && !t.hasPendingMicrotasks && !t.isStable)
    try {
      t._nesting++, t.onMicrotaskEmpty.emit(null);
    } finally {
      if ((t._nesting--, !t.hasPendingMicrotasks))
        try {
          t.runOutsideAngular(() => t.onStable.emit(null));
        } finally {
          t.isStable = !0;
        }
    }
}
function Y_(t) {
  t.isCheckStableRunning ||
    t.lastRequestAnimationFrameId !== -1 ||
    ((t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(
      ye,
      () => {
        t.fakeTopEventTask ||
          (t.fakeTopEventTask = Zone.root.scheduleEventTask(
            "fakeTopEventTask",
            () => {
              (t.lastRequestAnimationFrameId = -1),
                Ra(t),
                (t.isCheckStableRunning = !0),
                Wc(t),
                (t.isCheckStableRunning = !1);
            },
            void 0,
            () => {},
            () => {},
          )),
          t.fakeTopEventTask.invoke();
      },
    )),
    Ra(t));
}
function Z_(t) {
  let e = () => {
    Y_(t);
  };
  t._inner = t._inner.fork({
    name: "angular",
    properties: { isAngularZone: !0 },
    onInvokeTask: (i, n, r, o, s, a) => {
      if (K_(a)) return i.invokeTask(r, o, s, a);
      try {
        return bu(t), i.invokeTask(r, o, s, a);
      } finally {
        ((t.shouldCoalesceEventChangeDetection && o.type === "eventTask") ||
          t.shouldCoalesceRunChangeDetection) &&
          e(),
          vu(t);
      }
    },
    onInvoke: (i, n, r, o, s, a, c) => {
      try {
        return bu(t), i.invoke(r, o, s, a, c);
      } finally {
        t.shouldCoalesceRunChangeDetection && e(), vu(t);
      }
    },
    onHasTask: (i, n, r, o) => {
      i.hasTask(r, o),
        n === r &&
          (o.change == "microTask"
            ? ((t._hasPendingMicrotasks = o.microTask), Ra(t), Wc(t))
            : o.change == "macroTask" &&
              (t.hasPendingMacrotasks = o.macroTask));
    },
    onHandleError: (i, n, r, o) => (
      i.handleError(r, o), t.runOutsideAngular(() => t.onError.emit(o)), !1
    ),
  });
}
function Ra(t) {
  t._hasPendingMicrotasks ||
  ((t.shouldCoalesceEventChangeDetection ||
    t.shouldCoalesceRunChangeDetection) &&
    t.lastRequestAnimationFrameId !== -1)
    ? (t.hasPendingMicrotasks = !0)
    : (t.hasPendingMicrotasks = !1);
}
function bu(t) {
  t._nesting++, t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
}
function vu(t) {
  t._nesting--, Wc(t);
}
function K_(t) {
  return !Array.isArray(t) || t.length !== 1
    ? !1
    : t[0].data?.__ignore_ng_zone__ === !0;
}
var Uh = (() => {
  let e = class e {
    constructor() {
      (this.handler = null), (this.internalCallbacks = []);
    }
    execute() {
      this.executeInternalCallbacks(), this.handler?.execute();
    }
    executeInternalCallbacks() {
      let n = [...this.internalCallbacks];
      this.internalCallbacks.length = 0;
      for (let r of n) r();
    }
    ngOnDestroy() {
      this.handler?.destroy(),
        (this.handler = null),
        (this.internalCallbacks.length = 0);
    }
  };
  e.ɵprov = b({ token: e, providedIn: "root", factory: () => new e() });
  let t = e;
  return t;
})();
function to(t, e, i) {
  let n = i ? t.styles : null,
    r = i ? t.classes : null,
    o = 0;
  if (e !== null)
    for (let s = 0; s < e.length; s++) {
      let a = e[s];
      if (typeof a == "number") o = a;
      else if (o == 1) r = ta(r, a);
      else if (o == 2) {
        let c = a,
          l = e[++s];
        n = ta(n, c + ": " + l + ";");
      }
    }
  i ? (t.styles = n) : (t.stylesWithoutHost = n),
    i ? (t.classes = r) : (t.classesWithoutHost = r);
}
var no = class extends Ct {
  constructor(e) {
    super(), (this.ngModule = e);
  }
  resolveComponentFactory(e) {
    let i = nt(e);
    return new Qt(i, this.ngModule);
  }
};
function yu(t) {
  let e = [];
  for (let i in t) {
    if (!t.hasOwnProperty(i)) continue;
    let n = t[i];
    n !== void 0 &&
      e.push({ propName: Array.isArray(n) ? n[0] : n, templateName: i });
  }
  return e;
}
function X_(t) {
  let e = t.toLowerCase();
  return e === "svg" ? gf : e === "math" ? av : null;
}
var ka = class {
    constructor(e, i) {
      (this.injector = e), (this.parentInjector = i);
    }
    get(e, i, n) {
      n = po(n);
      let r = this.injector.get(e, Gs, n);
      return r !== Gs || i === Gs ? r : this.parentInjector.get(e, i, n);
    }
  },
  Qt = class extends eo {
    get inputs() {
      let e = this.componentDef,
        i = e.inputTransforms,
        n = yu(e.inputs);
      if (i !== null)
        for (let r of n)
          i.hasOwnProperty(r.propName) && (r.transform = i[r.propName]);
      return n;
    }
    get outputs() {
      return yu(this.componentDef.outputs);
    }
    constructor(e, i) {
      super(),
        (this.componentDef = e),
        (this.ngModule = i),
        (this.componentType = e.type),
        (this.selector = Vb(e.selectors)),
        (this.ngContentSelectors = e.ngContentSelectors
          ? e.ngContentSelectors
          : []),
        (this.isBoundToModule = !!i);
    }
    create(e, i, n, r) {
      let o = O(null);
      try {
        r = r || this.ngModule;
        let s = r instanceof qe ? r : r?.injector;
        s &&
          this.componentDef.getStandaloneInjector !== null &&
          (s = this.componentDef.getStandaloneInjector(s) || s);
        let a = s ? new ka(e, s) : e,
          c = a.get(Ei, null);
        if (c === null) throw new x(407, !1);
        let l = a.get(W_, null),
          d = a.get(Uh, null),
          u = a.get(Aa, null),
          f = {
            rendererFactory: c,
            sanitizer: l,
            inlineEffectRunner: null,
            afterRenderEventManager: d,
            changeDetectionScheduler: u,
          },
          h = c.createRenderer(null, this.componentDef),
          m = this.componentDef.selectors[0][0] || "div",
          g = n
            ? i_(h, n, this.componentDef.encapsulation, a)
            : sh(h, m, X_(m)),
          v = 512;
        this.componentDef.signals
          ? (v |= 4096)
          : this.componentDef.onPush || (v |= 16);
        let y = null;
        g !== null && (y = Nc(g, a, !0));
        let V = jc(0, null, null, 1, 0, null, null, null, null, null, null),
          K = ko(null, V, null, v, null, null, f, h, a, null, y);
        Cc(K);
        let B, be;
        try {
          let ve = this.componentDef,
            ht,
            us = null;
          ve.findHostDirectiveDefs
            ? ((ht = []),
              (us = new Map()),
              ve.findHostDirectiveDefs(ve, ht, us),
              ht.push(ve))
            : (ht = [ve]);
          let rg = Q_(K, g),
            og = J_(rg, g, ve, ht, K, f, h);
          (be = vc(V, ee)),
            g && nD(h, ve, g, n),
            i !== void 0 && iD(be, this.ngContentSelectors, i),
            (B = tD(og, ve, ht, us, K, [rD])),
            Uc(V, K, null);
        } finally {
          Mc();
        }
        return new Fa(this.componentType, B, Pn(be, K), K, be);
      } finally {
        O(o);
      }
    }
  },
  Fa = class extends Na {
    constructor(e, i, n, r, o) {
      super(),
        (this.location = n),
        (this._rootLView = r),
        (this._tNode = o),
        (this.previousInputValues = null),
        (this.instance = i),
        (this.hostView = this.changeDetectorRef = new Xt(r, void 0, !1)),
        (this.componentType = e);
    }
    setInput(e, i) {
      let n = this._tNode.inputs,
        r;
      if (n !== null && (r = n[e])) {
        if (
          ((this.previousInputValues ??= new Map()),
          this.previousInputValues.has(e) &&
            Object.is(this.previousInputValues.get(e), i))
        )
          return;
        let o = this._rootLView;
        Bc(o[T], o, r, e, i), this.previousInputValues.set(e, i);
        let s = Dt(this._tNode.index, o);
        $c(s);
      }
    }
    get injector() {
      return new zt(this._tNode, this._rootLView);
    }
    destroy() {
      this.hostView.destroy();
    }
    onDestroy(e) {
      this.hostView.onDestroy(e);
    }
  };
function Q_(t, e) {
  let i = t[T],
    n = ee;
  return (t[n] = e), Ln(i, n, 2, "#host", null);
}
function J_(t, e, i, n, r, o, s) {
  let a = r[T];
  eD(n, t, e, s);
  let c = null;
  e !== null && (c = Nc(e, r[Tn]));
  let l = o.rendererFactory.createRenderer(e, i),
    d = 16;
  i.signals ? (d = 4096) : i.onPush && (d = 64);
  let u = ko(r, wh(i), null, d, r[t.index], t, o, l, null, null, c);
  return (
    a.firstCreatePass && Ma(a, t, n.length - 1), Fo(r, u), (r[t.index] = u)
  );
}
function eD(t, e, i, n) {
  for (let r of t) e.mergedAttrs = pi(e.mergedAttrs, r.hostAttrs);
  e.mergedAttrs !== null &&
    (to(e, e.mergedAttrs, !0), i !== null && mh(n, i, e));
}
function tD(t, e, i, n, r, o) {
  let s = te(),
    a = r[T],
    c = xe(s, r);
  Eh(a, r, s, i, null, n);
  for (let d = 0; d < i.length; d++) {
    let u = s.directiveStart + d,
      f = Kt(r, a, u, s);
    bt(f, r);
  }
  Ih(a, r, s), c && bt(c, r);
  let l = Kt(r, a, s.directiveStart + s.componentOffset, s);
  if (((t[ie] = r[ie] = l), o !== null)) for (let d of o) d(l, e);
  return Fc(a, s, r), l;
}
function nD(t, e, i, n) {
  if (n) oa(t, i, ["ng-version", "17.3.0"]);
  else {
    let { attrs: r, classes: o } = Bb(e.selectors[0]);
    r && oa(t, i, r), o && o.length > 0 && ph(t, i, o.join(" "));
  }
}
function iD(t, e, i) {
  let n = (t.projection = []);
  for (let r = 0; r < e.length; r++) {
    let o = i[r];
    n.push(o != null ? Array.from(o) : null);
  }
}
function rD() {
  let t = te();
  To(I()[T], t);
}
var dt = (() => {
  let e = class e {};
  e.__NG_ELEMENT_ID__ = oD;
  let t = e;
  return t;
})();
function oD() {
  let t = te();
  return zh(t, I());
}
var sD = dt,
  $h = class extends sD {
    constructor(e, i, n) {
      super(),
        (this._lContainer = e),
        (this._hostTNode = i),
        (this._hostLView = n);
    }
    get element() {
      return Pn(this._hostTNode, this._hostLView);
    }
    get injector() {
      return new zt(this._hostTNode, this._hostLView);
    }
    get parentInjector() {
      let e = Tc(this._hostTNode, this._hostLView);
      if (Nf(e)) {
        let i = Yr(e, this._hostLView),
          n = qr(e),
          r = i[T].data[n + 8];
        return new zt(r, i);
      } else return new zt(null, this._hostLView);
    }
    clear() {
      for (; this.length > 0; ) this.remove(this.length - 1);
    }
    get(e) {
      let i = _u(this._lContainer);
      return (i !== null && i[e]) || null;
    }
    get length() {
      return this._lContainer.length - re;
    }
    createEmbeddedView(e, i, n) {
      let r, o;
      typeof n == "number"
        ? (r = n)
        : n != null && ((r = n.index), (o = n.injector));
      let s = wi(this._lContainer, e.ssrId),
        a = e.createEmbeddedViewImpl(i || {}, o, s);
      return this.insertImpl(a, r, Di(this._hostTNode, s)), a;
    }
    createComponent(e, i, n, r, o) {
      let s = e && !nv(e),
        a;
      if (s) a = i;
      else {
        let m = i || {};
        (a = m.index),
          (n = m.injector),
          (r = m.projectableNodes),
          (o = m.environmentInjector || m.ngModuleRef);
      }
      let c = s ? e : new Qt(nt(e)),
        l = n || this.parentInjector;
      if (!o && c.ngModule == null) {
        let g = (s ? l : this.parentInjector).get(qe, null);
        g && (o = g);
      }
      let d = nt(c.componentType ?? {}),
        u = wi(this._lContainer, d?.id ?? null),
        f = u?.firstChild ?? null,
        h = c.create(l, r, f, o);
      return this.insertImpl(h.hostView, a, Di(this._hostTNode, u)), h;
    }
    insert(e, i) {
      return this.insertImpl(e, i, !0);
    }
    insertImpl(e, i, n) {
      let r = e._lView;
      if (fv(r)) {
        let a = this.indexOf(e);
        if (a !== -1) this.detach(a);
        else {
          let c = r[J],
            l = new $h(c, c[we], c[J]);
          l.detach(l.indexOf(e));
        }
      }
      let o = this._adjustIndex(i),
        s = this._lContainer;
      return Lo(s, r, o, n), e.attachToViewContainerRef(), Gu(qs(s), o, e), e;
    }
    move(e, i) {
      return this.insert(e, i);
    }
    indexOf(e) {
      let i = _u(this._lContainer);
      return i !== null ? i.indexOf(e) : -1;
    }
    remove(e) {
      let i = this._adjustIndex(e, -1),
        n = _i(this._lContainer, i);
      n && (zr(qs(this._lContainer), i), No(n[T], n));
    }
    detach(e) {
      let i = this._adjustIndex(e, -1),
        n = _i(this._lContainer, i);
      return n && zr(qs(this._lContainer), i) != null ? new Xt(n) : null;
    }
    _adjustIndex(e, i = 0) {
      return e ?? this.length + i;
    }
  };
function _u(t) {
  return t[Gr];
}
function qs(t) {
  return t[Gr] || (t[Gr] = []);
}
function zh(t, e) {
  let i,
    n = e[t.index];
  return (
    at(n) ? (i = n) : ((i = xh(n, e, null, t)), (e[t.index] = i), Fo(e, i)),
    cD(i, e, t, n),
    new $h(i, t, e)
  );
}
function aD(t, e) {
  let i = t[z],
    n = i.createComment(""),
    r = xe(e, t),
    o = Rc(i, r);
  return Qr(i, o, n, Gy(i, r), !1), n;
}
var cD = uD,
  lD = () => !1;
function dD(t, e, i) {
  return lD(t, e, i);
}
function uD(t, e, i, n) {
  if (t[qt]) return;
  let r;
  i.type & 8 ? (r = Ye(n)) : (r = aD(e, i)), (t[qt] = r);
}
var Pa = class t {
    constructor(e) {
      (this.queryList = e), (this.matches = null);
    }
    clone() {
      return new t(this.queryList);
    }
    setDirty() {
      this.queryList.setDirty();
    }
  },
  La = class t {
    constructor(e = []) {
      this.queries = e;
    }
    createEmbeddedView(e) {
      let i = e.queries;
      if (i !== null) {
        let n = e.contentQueries !== null ? e.contentQueries[0] : i.length,
          r = [];
        for (let o = 0; o < n; o++) {
          let s = i.getByIndex(o),
            a = this.queries[s.indexInDeclarationView];
          r.push(a.clone());
        }
        return new t(r);
      }
      return null;
    }
    insertView(e) {
      this.dirtyQueriesWithMatches(e);
    }
    detachView(e) {
      this.dirtyQueriesWithMatches(e);
    }
    finishViewCreation(e) {
      this.dirtyQueriesWithMatches(e);
    }
    dirtyQueriesWithMatches(e) {
      for (let i = 0; i < this.queries.length; i++)
        qc(e, i).matches !== null && this.queries[i].setDirty();
    }
  },
  io = class {
    constructor(e, i, n = null) {
      (this.flags = i),
        (this.read = n),
        typeof e == "string" ? (this.predicate = bD(e)) : (this.predicate = e);
    }
  },
  ja = class t {
    constructor(e = []) {
      this.queries = e;
    }
    elementStart(e, i) {
      for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementStart(e, i);
    }
    elementEnd(e) {
      for (let i = 0; i < this.queries.length; i++)
        this.queries[i].elementEnd(e);
    }
    embeddedTView(e) {
      let i = null;
      for (let n = 0; n < this.length; n++) {
        let r = i !== null ? i.length : 0,
          o = this.getByIndex(n).embeddedTView(e, r);
        o &&
          ((o.indexInDeclarationView = n), i !== null ? i.push(o) : (i = [o]));
      }
      return i !== null ? new t(i) : null;
    }
    template(e, i) {
      for (let n = 0; n < this.queries.length; n++)
        this.queries[n].template(e, i);
    }
    getByIndex(e) {
      return this.queries[e];
    }
    get length() {
      return this.queries.length;
    }
    track(e) {
      this.queries.push(e);
    }
  },
  Va = class t {
    constructor(e, i = -1) {
      (this.metadata = e),
        (this.matches = null),
        (this.indexInDeclarationView = -1),
        (this.crossesNgTemplate = !1),
        (this._appliesToNextNode = !0),
        (this._declarationNodeIndex = i);
    }
    elementStart(e, i) {
      this.isApplyingToNode(i) && this.matchTNode(e, i);
    }
    elementEnd(e) {
      this._declarationNodeIndex === e.index && (this._appliesToNextNode = !1);
    }
    template(e, i) {
      this.elementStart(e, i);
    }
    embeddedTView(e, i) {
      return this.isApplyingToNode(e)
        ? ((this.crossesNgTemplate = !0),
          this.addMatch(-e.index, i),
          new t(this.metadata))
        : null;
    }
    isApplyingToNode(e) {
      if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let i = this._declarationNodeIndex,
          n = e.parent;
        for (; n !== null && n.type & 8 && n.index !== i; ) n = n.parent;
        return i === (n !== null ? n.index : -1);
      }
      return this._appliesToNextNode;
    }
    matchTNode(e, i) {
      let n = this.metadata.predicate;
      if (Array.isArray(n))
        for (let r = 0; r < n.length; r++) {
          let o = n[r];
          this.matchTNodeWithReadOption(e, i, fD(i, o)),
            this.matchTNodeWithReadOption(e, i, Vr(i, e, o, !1, !1));
        }
      else
        n === vt
          ? i.type & 4 && this.matchTNodeWithReadOption(e, i, -1)
          : this.matchTNodeWithReadOption(e, i, Vr(i, e, n, !1, !1));
    }
    matchTNodeWithReadOption(e, i, n) {
      if (n !== null) {
        let r = this.metadata.read;
        if (r !== null)
          if (r === q || r === dt || (r === vt && i.type & 4))
            this.addMatch(i.index, -2);
          else {
            let o = Vr(i, e, r, !1, !1);
            o !== null && this.addMatch(i.index, o);
          }
        else this.addMatch(i.index, n);
      }
    }
    addMatch(e, i) {
      this.matches === null ? (this.matches = [e, i]) : this.matches.push(e, i);
    }
  };
function fD(t, e) {
  let i = t.localNames;
  if (i !== null) {
    for (let n = 0; n < i.length; n += 2) if (i[n] === e) return i[n + 1];
  }
  return null;
}
function hD(t, e) {
  return t.type & 11 ? Pn(t, e) : t.type & 4 ? jo(t, e) : null;
}
function pD(t, e, i, n) {
  return i === -1 ? hD(e, t) : i === -2 ? mD(t, e, n) : Kt(t, t[T], i, e);
}
function mD(t, e, i) {
  if (i === q) return Pn(e, t);
  if (i === vt) return jo(e, t);
  if (i === dt) return zh(e, t);
}
function Wh(t, e, i, n) {
  let r = e[it].queries[n];
  if (r.matches === null) {
    let o = t.data,
      s = i.matches,
      a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
      let l = s[c];
      if (l < 0) a.push(null);
      else {
        let d = o[l];
        a.push(pD(e, d, s[c + 1], i.metadata.read));
      }
    }
    r.matches = a;
  }
  return r.matches;
}
function Ba(t, e, i, n) {
  let r = t.queries.getByIndex(i),
    o = r.matches;
  if (o !== null) {
    let s = Wh(t, e, r, i);
    for (let a = 0; a < o.length; a += 2) {
      let c = o[a];
      if (c > 0) n.push(s[a / 2]);
      else {
        let l = o[a + 1],
          d = e[-c];
        for (let u = re; u < d.length; u++) {
          let f = d[u];
          f[Mi] === f[J] && Ba(f[T], f, l, n);
        }
        if (d[Sn] !== null) {
          let u = d[Sn];
          for (let f = 0; f < u.length; f++) {
            let h = u[f];
            Ba(h[T], h, l, n);
          }
        }
      }
    }
  }
  return n;
}
function Gc(t, e) {
  return t[it].queries[e].queryList;
}
function Gh(t, e, i) {
  let n = new Nn((i & 4) === 4);
  return (
    s_(t, e, n, n.destroy), (e[it] ??= new La()).queries.push(new Pa(n)) - 1
  );
}
function qh(t, e, i) {
  let n = W();
  return (
    n.firstCreatePass &&
      (Yh(n, new io(t, e, i), -1), (e & 2) === 2 && (n.staticViewQueries = !0)),
    Gh(n, I(), e)
  );
}
function gD(t, e, i, n) {
  let r = W();
  if (r.firstCreatePass) {
    let o = te();
    Yh(r, new io(e, i, n), o.index),
      vD(r, t),
      (i & 2) === 2 && (r.staticContentQueries = !0);
  }
  return Gh(r, I(), i);
}
function bD(t) {
  return t.split(",").map((e) => e.trim());
}
function Yh(t, e, i) {
  t.queries === null && (t.queries = new ja()), t.queries.track(new Va(e, i));
}
function vD(t, e) {
  let i = t.contentQueries || (t.contentQueries = []),
    n = i.length ? i[i.length - 1] : -1;
  e !== n && i.push(t.queries.length - 1, e);
}
function qc(t, e) {
  return t.queries.getByIndex(e);
}
function Zh(t, e) {
  let i = t[T],
    n = qc(i, e);
  return n.crossesNgTemplate ? Ba(i, t, e, []) : Wh(i, t, n, e);
}
function yD(t) {
  return typeof t == "function" && t[de] !== void 0;
}
function Vo(t, e) {
  Mt("NgSignals");
  let i = sd(t),
    n = i[de];
  return (
    e?.equal && (n.equal = e.equal),
    (i.set = (r) => ti(n, r)),
    (i.update = (r) => ad(n, r)),
    (i.asReadonly = Kh.bind(i)),
    i
  );
}
function Kh() {
  let t = this[de];
  if (t.readonlyFn === void 0) {
    let e = () => this();
    (e[de] = t), (t.readonlyFn = e);
  }
  return t.readonlyFn;
}
function Xh(t) {
  return yD(t) && typeof t.set == "function";
}
function Qh(t, e) {
  let i,
    n = gs(() => {
      i._dirtyCounter();
      let r = ED(i, t);
      if (e && r === void 0) throw new x(-951, !1);
      return r;
    });
  return (i = n[de]), (i._dirtyCounter = Vo(0)), (i._flatValue = void 0), n;
}
function _D() {
  return Qh(!0, !1);
}
function DD() {
  return Qh(!0, !0);
}
function wD(t, e) {
  let i = t[de];
  (i._lView = I()),
    (i._queryIndex = e),
    (i._queryList = Gc(i._lView, e)),
    i._queryList.onDirty(() => i._dirtyCounter.update((n) => n + 1));
}
function ED(t, e) {
  let i = t._lView,
    n = t._queryIndex;
  if (i === void 0 || n === void 0 || i[E] & 4) return e ? void 0 : ae;
  let r = Gc(i, n),
    o = Zh(i, n);
  return (
    r.reset(o, Uf),
    e
      ? r.first
      : r._changesDetected || t._flatValue === void 0
        ? (t._flatValue = r.toArray())
        : t._flatValue
  );
}
function Du(t, e) {
  return _D();
}
function ID(t, e) {
  return DD();
}
var PO = ((Du.required = ID), Du);
function Jh(t) {
  let e = Object.create(ku),
    i = new Xr();
  e.value = t;
  function n() {
    return ei(e), wu(e.value), e.value;
  }
  return (
    (n[de] = e),
    (n.asReadonly = Kh.bind(n)),
    (n.set = (r) => {
      e.equal(e.value, r) || (ti(e, r), i.emit(r));
    }),
    (n.update = (r) => {
      wu(e.value), n.set(r(e.value));
    }),
    (n.subscribe = i.subscribe.bind(i)),
    (n.destroyRef = i.destroyRef),
    n
  );
}
function wu(t) {
  if (t === fo) throw new x(-952, !1);
}
function Eu(t) {
  return Jh(t);
}
function xD() {
  return Jh(fo);
}
var LO = ((Eu.required = xD), Eu);
function CD(t) {
  return Object.getPrototypeOf(t.prototype).constructor;
}
function tn(t) {
  let e = CD(t.type),
    i = !0,
    n = [t];
  for (; e; ) {
    let r;
    if (rt(t)) r = e.ɵcmp || e.ɵdir;
    else {
      if (e.ɵcmp) throw new x(903, !1);
      r = e.ɵdir;
    }
    if (r) {
      if (i) {
        n.push(r);
        let s = t;
        (s.inputs = Rr(t.inputs)),
          (s.inputTransforms = Rr(t.inputTransforms)),
          (s.declaredInputs = Rr(t.declaredInputs)),
          (s.outputs = Rr(t.outputs));
        let a = r.hostBindings;
        a && ND(t, a);
        let c = r.viewQuery,
          l = r.contentQueries;
        if (
          (c && SD(t, c),
          l && AD(t, l),
          MD(t, r),
          ib(t.outputs, r.outputs),
          rt(r) && r.data.animation)
        ) {
          let d = t.data;
          d.animation = (d.animation || []).concat(r.data.animation);
        }
      }
      let o = r.features;
      if (o)
        for (let s = 0; s < o.length; s++) {
          let a = o[s];
          a && a.ngInherit && a(t), a === tn && (i = !1);
        }
    }
    e = Object.getPrototypeOf(e);
  }
  TD(n);
}
function MD(t, e) {
  for (let i in e.inputs) {
    if (!e.inputs.hasOwnProperty(i) || t.inputs.hasOwnProperty(i)) continue;
    let n = e.inputs[i];
    if (
      n !== void 0 &&
      ((t.inputs[i] = n),
      (t.declaredInputs[i] = e.declaredInputs[i]),
      e.inputTransforms !== null)
    ) {
      let r = Array.isArray(n) ? n[0] : n;
      if (!e.inputTransforms.hasOwnProperty(r)) continue;
      (t.inputTransforms ??= {}), (t.inputTransforms[r] = e.inputTransforms[r]);
    }
  }
}
function TD(t) {
  let e = 0,
    i = null;
  for (let n = t.length - 1; n >= 0; n--) {
    let r = t[n];
    (r.hostVars = e += r.hostVars),
      (r.hostAttrs = pi(r.hostAttrs, (i = pi(i, r.hostAttrs))));
  }
}
function Rr(t) {
  return t === xn ? {} : t === ae ? [] : t;
}
function SD(t, e) {
  let i = t.viewQuery;
  i
    ? (t.viewQuery = (n, r) => {
        e(n, r), i(n, r);
      })
    : (t.viewQuery = e);
}
function AD(t, e) {
  let i = t.contentQueries;
  i
    ? (t.contentQueries = (n, r, o) => {
        e(n, r, o), i(n, r, o);
      })
    : (t.contentQueries = e);
}
function ND(t, e) {
  let i = t.hostBindings;
  i
    ? (t.hostBindings = (n, r) => {
        e(n, r), i(n, r);
      })
    : (t.hostBindings = e);
}
function nn(t) {
  let e = t.inputConfig,
    i = {};
  for (let n in e)
    if (e.hasOwnProperty(n)) {
      let r = e[n];
      Array.isArray(r) && r[3] && (i[n] = r[3]);
    }
  t.inputTransforms = i;
}
var yt = class {},
  Ha = class {};
var Ua = class extends yt {
    constructor(e, i, n) {
      super(),
        (this._parent = i),
        (this._bootstrapComponents = []),
        (this.destroyCbs = []),
        (this.componentFactoryResolver = new no(this));
      let r = tf(e);
      (this._bootstrapComponents = oh(r.bootstrap)),
        (this._r3Injector = Bf(
          e,
          i,
          [
            { provide: yt, useValue: this },
            { provide: Ct, useValue: this.componentFactoryResolver },
            ...n,
          ],
          pe(e),
          new Set(["environment"]),
        )),
        this._r3Injector.resolveInjectorInitializers(),
        (this.instance = this._r3Injector.get(e));
    }
    get injector() {
      return this._r3Injector;
    }
    destroy() {
      let e = this._r3Injector;
      !e.destroyed && e.destroy(),
        this.destroyCbs.forEach((i) => i()),
        (this.destroyCbs = null);
    }
    onDestroy(e) {
      this.destroyCbs.push(e);
    }
  },
  $a = class extends Ha {
    constructor(e) {
      super(), (this.moduleType = e);
    }
    create(e) {
      return new Ua(this.moduleType, e, []);
    }
  };
var ro = class extends yt {
  constructor(e) {
    super(),
      (this.componentFactoryResolver = new no(this)),
      (this.instance = null);
    let i = new mi(
      [
        ...e.providers,
        { provide: yt, useValue: this },
        { provide: Ct, useValue: this.componentFactoryResolver },
      ],
      e.parent || vo(),
      e.debugName,
      new Set(["environment"]),
    );
    (this.injector = i),
      e.runEnvironmentInitializers && i.resolveInjectorInitializers();
  }
  destroy() {
    this.injector.destroy();
  }
  onDestroy(e) {
    this.injector.onDestroy(e);
  }
};
function OD(t, e, i = null) {
  return new ro({
    providers: t,
    parent: e,
    debugName: i,
    runEnvironmentInitializers: !0,
  }).injector;
}
var jn = (() => {
  let e = class e {
    constructor() {
      (this.taskId = 0),
        (this.pendingTasks = new Set()),
        (this.hasPendingTasks = new jt(!1));
    }
    get _hasPendingTasks() {
      return this.hasPendingTasks.value;
    }
    add() {
      this._hasPendingTasks || this.hasPendingTasks.next(!0);
      let n = this.taskId++;
      return this.pendingTasks.add(n), n;
    }
    remove(n) {
      this.pendingTasks.delete(n),
        this.pendingTasks.size === 0 &&
          this._hasPendingTasks &&
          this.hasPendingTasks.next(!1);
    }
    ngOnDestroy() {
      this.pendingTasks.clear(),
        this._hasPendingTasks && this.hasPendingTasks.next(!1);
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
function ep(t) {
  return kD(t)
    ? Array.isArray(t) || (!(t instanceof Map) && Symbol.iterator in t)
    : !1;
}
function RD(t, e) {
  if (Array.isArray(t)) for (let i = 0; i < t.length; i++) e(t[i]);
  else {
    let i = t[Symbol.iterator](),
      n;
    for (; !(n = i.next()).done; ) e(n.value);
  }
}
function kD(t) {
  return t !== null && (typeof t == "function" || typeof t == "object");
}
function tp(t, e, i) {
  return (t[e] = i);
}
function me(t, e, i) {
  let n = t[e];
  return Object.is(n, i) ? !1 : ((t[e] = i), !0);
}
function Yc(t, e, i, n) {
  let r = me(t, e, i);
  return me(t, e + 1, n) || r;
}
function FD(t, e, i, n, r) {
  let o = Yc(t, e, i, n);
  return me(t, e + 2, r) || o;
}
function PD(t) {
  return (t.flags & 32) === 32;
}
function LD(t, e, i, n, r, o, s, a, c) {
  let l = e.consts,
    d = Ln(e, t, 4, s || null, An(l, a));
  Vc(e, i, d, An(l, c)), To(e, d);
  let u = (d.tView = jc(
    2,
    d,
    n,
    r,
    o,
    e.directiveRegistry,
    e.pipeRegistry,
    null,
    e.schemas,
    l,
    null,
  ));
  return (
    e.queries !== null &&
      (e.queries.template(e, d), (u.queries = e.queries.embeddedTView(d))),
    d
  );
}
function oo(t, e, i, n, r, o, s, a) {
  let c = I(),
    l = W(),
    d = t + ee,
    u = l.firstCreatePass ? LD(d, l, c, e, i, n, r, o, s) : l.data[d];
  en(u, !1);
  let f = jD(l, c, u, t);
  Co() && Oo(l, c, f, u), bt(f, c);
  let h = xh(f, c, f, u);
  return (
    (c[d] = h),
    Fo(c, h),
    dD(h, u, c),
    wo(u) && Pc(l, c, u),
    s != null && Lc(c, u, a),
    oo
  );
}
var jD = VD;
function VD(t, e, i, n) {
  return Mo(!0), e[z].createComment("");
}
function Vn(t, e, i, n) {
  let r = I(),
    o = wt();
  if (me(r, o, e)) {
    let s = W(),
      a = Fn();
    D_(a, r, t, e, i, n);
  }
  return Vn;
}
function Zc(t, e, i, n) {
  return me(t, wt(), i) ? e + tt(i) + n : ge;
}
function BD(t, e, i, n, r, o) {
  let s = Ef(),
    a = Yc(t, s, i, r);
  return Io(2), a ? e + tt(i) + n + tt(r) + o : ge;
}
function HD(t, e, i, n, r, o, s, a) {
  let c = Ef(),
    l = FD(t, c, i, r, s);
  return Io(3), l ? e + tt(i) + n + tt(r) + o + tt(s) + a : ge;
}
function kr(t, e) {
  return (t << 17) | (e << 2);
}
function Jt(t) {
  return (t >> 17) & 32767;
}
function UD(t) {
  return (t & 2) == 2;
}
function $D(t, e) {
  return (t & 131071) | (e << 17);
}
function za(t) {
  return t | 2;
}
function On(t) {
  return (t & 131068) >> 2;
}
function Ys(t, e) {
  return (t & -131069) | (e << 2);
}
function zD(t) {
  return (t & 1) === 1;
}
function Wa(t) {
  return t | 1;
}
function WD(t, e, i, n, r, o) {
  let s = o ? e.classBindings : e.styleBindings,
    a = Jt(s),
    c = On(s);
  t[n] = i;
  let l = !1,
    d;
  if (Array.isArray(i)) {
    let u = i;
    (d = u[1]), (d === null || Ci(u, d) > 0) && (l = !0);
  } else d = i;
  if (r)
    if (c !== 0) {
      let f = Jt(t[a + 1]);
      (t[n + 1] = kr(f, a)),
        f !== 0 && (t[f + 1] = Ys(t[f + 1], n)),
        (t[a + 1] = $D(t[a + 1], n));
    } else
      (t[n + 1] = kr(a, 0)), a !== 0 && (t[a + 1] = Ys(t[a + 1], n)), (a = n);
  else
    (t[n + 1] = kr(c, 0)),
      a === 0 ? (a = n) : (t[c + 1] = Ys(t[c + 1], n)),
      (c = n);
  l && (t[n + 1] = za(t[n + 1])),
    Iu(t, d, n, !0),
    Iu(t, d, n, !1),
    GD(e, d, t, n, o),
    (s = kr(a, c)),
    o ? (e.classBindings = s) : (e.styleBindings = s);
}
function GD(t, e, i, n, r) {
  let o = r ? t.residualClasses : t.residualStyles;
  o != null &&
    typeof e == "string" &&
    Ci(o, e) >= 0 &&
    (i[n + 1] = Wa(i[n + 1]));
}
function Iu(t, e, i, n) {
  let r = t[i + 1],
    o = e === null,
    s = n ? Jt(r) : On(r),
    a = !1;
  for (; s !== 0 && (a === !1 || o); ) {
    let c = t[s],
      l = t[s + 1];
    qD(c, e) && ((a = !0), (t[s + 1] = n ? Wa(l) : za(l))),
      (s = n ? Jt(l) : On(l));
  }
  a && (t[i + 1] = n ? za(r) : Wa(r));
}
function qD(t, e) {
  return t === null || e == null || (Array.isArray(t) ? t[1] : t) === e
    ? !0
    : Array.isArray(t) && typeof e == "string"
      ? Ci(t, e) >= 0
      : !1;
}
var ke = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function YD(t) {
  return t.substring(ke.key, ke.keyEnd);
}
function ZD(t) {
  return KD(t), np(t, ip(t, 0, ke.textEnd));
}
function np(t, e) {
  let i = ke.textEnd;
  return i === e ? -1 : ((e = ke.keyEnd = XD(t, (ke.key = e), i)), ip(t, e, i));
}
function KD(t) {
  (ke.key = 0),
    (ke.keyEnd = 0),
    (ke.value = 0),
    (ke.valueEnd = 0),
    (ke.textEnd = t.length);
}
function ip(t, e, i) {
  for (; e < i && t.charCodeAt(e) <= 32; ) e++;
  return e;
}
function XD(t, e, i) {
  for (; e < i && t.charCodeAt(e) > 32; ) e++;
  return e;
}
function rp(t, e, i) {
  let n = I(),
    r = wt();
  if (me(n, r, e)) {
    let o = W(),
      s = Fn();
    Ni(o, s, n, t, e, n[z], i, !1);
  }
  return rp;
}
function Ga(t, e, i, n, r) {
  let o = e.inputs,
    s = r ? "class" : "style";
  Bc(t, i, o[s], s, n);
}
function Kc(t, e, i) {
  return sp(t, e, i, !1), Kc;
}
function Ve(t, e) {
  return sp(t, e, null, !0), Ve;
}
function Xc(t) {
  ap(i0, op, t, !0);
}
function op(t, e) {
  for (let i = ZD(e); i >= 0; i = np(e, i)) mo(t, YD(e), !0);
}
function sp(t, e, i, n) {
  let r = I(),
    o = W(),
    s = Io(2);
  if ((o.firstUpdatePass && lp(o, t, s, n), e !== ge && me(r, s, e))) {
    let a = o.data[Ke()];
    dp(o, a, r, r[z], t, (r[s + 1] = o0(e, i)), n, s);
  }
}
function ap(t, e, i, n) {
  let r = W(),
    o = Io(2);
  r.firstUpdatePass && lp(r, null, o, n);
  let s = I();
  if (i !== ge && me(s, o, i)) {
    let a = r.data[Ke()];
    if (up(a, n) && !cp(r, o)) {
      let c = n ? a.classesWithoutHost : a.stylesWithoutHost;
      c !== null && (i = ta(c, i || "")), Ga(r, a, s, i, n);
    } else r0(r, a, s, s[z], s[o + 1], (s[o + 1] = n0(t, e, i)), n, o);
  }
}
function cp(t, e) {
  return e >= t.expandoStartIndex;
}
function lp(t, e, i, n) {
  let r = t.data;
  if (r[i + 1] === null) {
    let o = r[Ke()],
      s = cp(t, i);
    up(o, n) && e === null && !s && (e = !1),
      (e = QD(r, o, e, n)),
      WD(r, o, e, i, s, n);
  }
}
function QD(t, e, i, n) {
  let r = Ic(t),
    o = n ? e.residualClasses : e.residualStyles;
  if (r === null)
    (n ? e.classBindings : e.styleBindings) === 0 &&
      ((i = Zs(null, t, e, i, n)), (i = Ii(i, e.attrs, n)), (o = null));
  else {
    let s = e.directiveStylingLast;
    if (s === -1 || t[s] !== r)
      if (((i = Zs(r, t, e, i, n)), o === null)) {
        let c = JD(t, e, n);
        c !== void 0 &&
          Array.isArray(c) &&
          ((c = Zs(null, t, e, c[1], n)),
          (c = Ii(c, e.attrs, n)),
          e0(t, e, n, c));
      } else o = t0(t, e, n);
  }
  return (
    o !== void 0 && (n ? (e.residualClasses = o) : (e.residualStyles = o)), i
  );
}
function JD(t, e, i) {
  let n = i ? e.classBindings : e.styleBindings;
  if (On(n) !== 0) return t[Jt(n)];
}
function e0(t, e, i, n) {
  let r = i ? e.classBindings : e.styleBindings;
  t[Jt(r)] = n;
}
function t0(t, e, i) {
  let n,
    r = e.directiveEnd;
  for (let o = 1 + e.directiveStylingLast; o < r; o++) {
    let s = t[o].hostAttrs;
    n = Ii(n, s, i);
  }
  return Ii(n, e.attrs, i);
}
function Zs(t, e, i, n, r) {
  let o = null,
    s = i.directiveEnd,
    a = i.directiveStylingLast;
  for (
    a === -1 ? (a = i.directiveStart) : a++;
    a < s && ((o = e[a]), (n = Ii(n, o.hostAttrs, r)), o !== t);

  )
    a++;
  return t !== null && (i.directiveStylingLast = a), n;
}
function Ii(t, e, i) {
  let n = i ? 1 : 2,
    r = -1;
  if (e !== null)
    for (let o = 0; o < e.length; o++) {
      let s = e[o];
      typeof s == "number"
        ? (r = s)
        : r === n &&
          (Array.isArray(t) || (t = t === void 0 ? [] : ["", t]),
          mo(t, s, i ? !0 : e[++o]));
    }
  return t === void 0 ? null : t;
}
function n0(t, e, i) {
  if (i == null || i === "") return ae;
  let n = [],
    r = je(i);
  if (Array.isArray(r)) for (let o = 0; o < r.length; o++) t(n, r[o], !0);
  else if (typeof r == "object")
    for (let o in r) r.hasOwnProperty(o) && t(n, o, r[o]);
  else typeof r == "string" && e(n, r);
  return n;
}
function i0(t, e, i) {
  let n = String(e);
  n !== "" && !n.includes(" ") && mo(t, n, i);
}
function r0(t, e, i, n, r, o, s, a) {
  r === ge && (r = ae);
  let c = 0,
    l = 0,
    d = 0 < r.length ? r[0] : null,
    u = 0 < o.length ? o[0] : null;
  for (; d !== null || u !== null; ) {
    let f = c < r.length ? r[c + 1] : void 0,
      h = l < o.length ? o[l + 1] : void 0,
      m = null,
      g;
    d === u
      ? ((c += 2), (l += 2), f !== h && ((m = u), (g = h)))
      : u === null || (d !== null && d < u)
        ? ((c += 2), (m = d))
        : ((l += 2), (m = u), (g = h)),
      m !== null && dp(t, e, i, n, m, g, s, a),
      (d = c < r.length ? r[c] : null),
      (u = l < o.length ? o[l] : null);
  }
}
function dp(t, e, i, n, r, o, s, a) {
  if (!(e.type & 3)) return;
  let c = t.data,
    l = c[a + 1],
    d = zD(l) ? xu(c, e, i, r, On(l), s) : void 0;
  if (!so(d)) {
    so(o) || (UD(l) && (o = xu(c, null, i, r, a, s)));
    let u = bf(Ke(), i);
    Qy(n, s, u, r, o);
  }
}
function xu(t, e, i, n, r, o) {
  let s = e === null,
    a;
  for (; r > 0; ) {
    let c = t[r],
      l = Array.isArray(c),
      d = l ? c[1] : c,
      u = d === null,
      f = i[r + 1];
    f === ge && (f = u ? ae : void 0);
    let h = u ? Vs(f, n) : d === n ? f : void 0;
    if ((l && !so(h) && (h = Vs(c, n)), so(h) && ((a = h), s))) return a;
    let m = t[r + 1];
    r = s ? Jt(m) : On(m);
  }
  if (e !== null) {
    let c = o ? e.residualClasses : e.residualStyles;
    c != null && (a = Vs(c, n));
  }
  return a;
}
function so(t) {
  return t !== void 0;
}
function o0(t, e) {
  return (
    t == null ||
      t === "" ||
      (typeof e == "string"
        ? (t = t + e)
        : typeof t == "object" && (t = pe(je(t)))),
    t
  );
}
function up(t, e) {
  return (t.flags & (e ? 8 : 16)) !== 0;
}
function jO(t, e, i) {
  let n = I(),
    r = Zc(n, t, e, i);
  ap(mo, op, r, !0);
}
var qa = class {
  destroy(e) {}
  updateValue(e, i) {}
  swap(e, i) {
    let n = Math.min(e, i),
      r = Math.max(e, i),
      o = this.detach(r);
    if (r - n > 1) {
      let s = this.detach(n);
      this.attach(n, o), this.attach(r, s);
    } else this.attach(n, o);
  }
  move(e, i) {
    this.attach(i, this.detach(e));
  }
};
function Ks(t, e, i, n, r) {
  return t === i && Object.is(e, n) ? 1 : Object.is(r(t, e), r(i, n)) ? -1 : 0;
}
function s0(t, e, i) {
  let n,
    r,
    o = 0,
    s = t.length - 1;
  if (Array.isArray(e)) {
    let a = e.length - 1;
    for (; o <= s && o <= a; ) {
      let c = t.at(o),
        l = e[o],
        d = Ks(o, c, o, l, i);
      if (d !== 0) {
        d < 0 && t.updateValue(o, l), o++;
        continue;
      }
      let u = t.at(s),
        f = e[a],
        h = Ks(s, u, a, f, i);
      if (h !== 0) {
        h < 0 && t.updateValue(s, f), s--, a--;
        continue;
      }
      let m = i(o, c),
        g = i(s, u),
        v = i(o, l);
      if (Object.is(v, g)) {
        let y = i(a, f);
        Object.is(y, m)
          ? (t.swap(o, s), t.updateValue(s, f), a--, s--)
          : t.move(s, o),
          t.updateValue(o, l),
          o++;
        continue;
      }
      if (((n ??= new ao()), (r ??= Mu(t, o, s, i)), Ya(t, n, o, v)))
        t.updateValue(o, l), o++, s++;
      else if (r.has(v)) n.set(m, t.detach(o)), s--;
      else {
        let y = t.create(o, e[o]);
        t.attach(o, y), o++, s++;
      }
    }
    for (; o <= a; ) Cu(t, n, i, o, e[o]), o++;
  } else if (e != null) {
    let a = e[Symbol.iterator](),
      c = a.next();
    for (; !c.done && o <= s; ) {
      let l = t.at(o),
        d = c.value,
        u = Ks(o, l, o, d, i);
      if (u !== 0) u < 0 && t.updateValue(o, d), o++, (c = a.next());
      else {
        (n ??= new ao()), (r ??= Mu(t, o, s, i));
        let f = i(o, d);
        if (Ya(t, n, o, f)) t.updateValue(o, d), o++, s++, (c = a.next());
        else if (!r.has(f))
          t.attach(o, t.create(o, d)), o++, s++, (c = a.next());
        else {
          let h = i(o, l);
          n.set(h, t.detach(o)), s--;
        }
      }
    }
    for (; !c.done; ) Cu(t, n, i, t.length, c.value), (c = a.next());
  }
  for (; o <= s; ) t.destroy(t.detach(s--));
  n?.forEach((a) => {
    t.destroy(a);
  });
}
function Ya(t, e, i, n) {
  return e !== void 0 && e.has(n)
    ? (t.attach(i, e.get(n)), e.delete(n), !0)
    : !1;
}
function Cu(t, e, i, n, r) {
  if (Ya(t, e, n, i(n, r))) t.updateValue(n, r);
  else {
    let o = t.create(n, r);
    t.attach(n, o);
  }
}
function Mu(t, e, i, n) {
  let r = new Set();
  for (let o = e; o <= i; o++) r.add(n(o, t.at(o)));
  return r;
}
var ao = class {
  constructor() {
    (this.kvMap = new Map()), (this._vMap = void 0);
  }
  has(e) {
    return this.kvMap.has(e);
  }
  delete(e) {
    if (!this.has(e)) return !1;
    let i = this.kvMap.get(e);
    return (
      this._vMap !== void 0 && this._vMap.has(i)
        ? (this.kvMap.set(e, this._vMap.get(i)), this._vMap.delete(i))
        : this.kvMap.delete(e),
      !0
    );
  }
  get(e) {
    return this.kvMap.get(e);
  }
  set(e, i) {
    if (this.kvMap.has(e)) {
      let n = this.kvMap.get(e);
      this._vMap === void 0 && (this._vMap = new Map());
      let r = this._vMap;
      for (; r.has(n); ) n = r.get(n);
      r.set(n, i);
    } else this.kvMap.set(e, i);
  }
  forEach(e) {
    for (let [i, n] of this.kvMap)
      if ((e(n, i), this._vMap !== void 0)) {
        let r = this._vMap;
        for (; r.has(n); ) (n = r.get(n)), e(n, i);
      }
  }
};
function a0(t, e, i) {
  Mt("NgControlFlow");
  let n = I(),
    r = wt(),
    o = Qa(n, ee + t),
    s = 0;
  if (me(n, r, e)) {
    let a = O(null);
    try {
      if ((Oh(o, s), e !== -1)) {
        let c = Ja(n[T], ee + e),
          l = wi(o, c.tView.ssrId),
          d = Po(n, c, i, { dehydratedView: l });
        Lo(o, d, s, Di(c, l));
      }
    } finally {
      O(a);
    }
  } else {
    let a = Nh(o, s);
    a !== void 0 && (a[ie] = i);
  }
}
var Za = class {
  constructor(e, i, n) {
    (this.lContainer = e), (this.$implicit = i), (this.$index = n);
  }
  get $count() {
    return this.lContainer.length - re;
  }
};
function VO(t) {
  return t;
}
function BO(t, e) {
  return e;
}
var Ka = class {
  constructor(e, i, n) {
    (this.hasEmptyBlock = e), (this.trackByFn = i), (this.liveCollection = n);
  }
};
function HO(t, e, i, n, r, o, s, a, c, l, d, u, f) {
  Mt("NgControlFlow");
  let h = c !== void 0,
    m = I(),
    g = a ? s.bind(m[Ie][ie]) : s,
    v = new Ka(h, g);
  (m[ee + t] = v), oo(t + 1, e, i, n, r, o), h && oo(t + 2, c, l, d, u, f);
}
var Xa = class extends qa {
  constructor(e, i, n) {
    super(),
      (this.lContainer = e),
      (this.hostLView = i),
      (this.templateTNode = n),
      (this.needsIndexUpdate = !1);
  }
  get length() {
    return this.lContainer.length - re;
  }
  at(e) {
    return this.getLView(e)[ie].$implicit;
  }
  attach(e, i) {
    let n = i[Mn];
    (this.needsIndexUpdate ||= e !== this.length),
      Lo(this.lContainer, i, e, Di(this.templateTNode, n));
  }
  detach(e) {
    return (
      (this.needsIndexUpdate ||= e !== this.length - 1), c0(this.lContainer, e)
    );
  }
  create(e, i) {
    let n = wi(this.lContainer, this.templateTNode.tView.ssrId);
    return Po(
      this.hostLView,
      this.templateTNode,
      new Za(this.lContainer, i, e),
      { dehydratedView: n },
    );
  }
  destroy(e) {
    No(e[T], e);
  }
  updateValue(e, i) {
    this.getLView(e)[ie].$implicit = i;
  }
  reset() {
    this.needsIndexUpdate = !1;
  }
  updateIndexes() {
    if (this.needsIndexUpdate)
      for (let e = 0; e < this.length; e++) this.getLView(e)[ie].$index = e;
  }
  getLView(e) {
    return l0(this.lContainer, e);
  }
};
function UO(t) {
  let e = O(null),
    i = Ke();
  try {
    let n = I(),
      r = n[T],
      o = n[i];
    if (o.liveCollection === void 0) {
      let a = i + 1,
        c = Qa(n, a),
        l = Ja(r, a);
      o.liveCollection = new Xa(c, n, l);
    } else o.liveCollection.reset();
    let s = o.liveCollection;
    if ((s0(s, t, o.trackByFn), s.updateIndexes(), o.hasEmptyBlock)) {
      let a = wt(),
        c = s.length === 0;
      if (me(n, a, c)) {
        let l = i + 2,
          d = Qa(n, l);
        if (c) {
          let u = Ja(r, l),
            f = wi(d, u.tView.ssrId),
            h = Po(n, u, void 0, { dehydratedView: f });
          Lo(d, h, 0, Di(u, f));
        } else Oh(d, 0);
      }
    }
  } finally {
    O(e);
  }
}
function Qa(t, e) {
  return t[e];
}
function c0(t, e) {
  return _i(t, e);
}
function l0(t, e) {
  return Nh(t, e);
}
function Ja(t, e) {
  return vc(t, e);
}
function d0(t, e, i, n, r, o) {
  let s = e.consts,
    a = An(s, r),
    c = Ln(e, t, 2, n, a);
  return (
    Vc(e, i, c, An(s, o)),
    c.attrs !== null && to(c, c.attrs, !1),
    c.mergedAttrs !== null && to(c, c.mergedAttrs, !0),
    e.queries !== null && e.queries.elementStart(e, c),
    c
  );
}
function Tt(t, e, i, n) {
  let r = I(),
    o = W(),
    s = ee + t,
    a = r[z],
    c = o.firstCreatePass ? d0(s, o, r, e, i, n) : o.data[s],
    l = u0(o, r, c, a, e, t);
  r[s] = l;
  let d = wo(c);
  return (
    en(c, !0),
    mh(a, l, c),
    !PD(c) && Co() && Oo(o, r, l, c),
    gv() === 0 && bt(l, r),
    bv(),
    d && (Pc(o, r, c), Fc(o, c, r)),
    n !== null && Lc(r, c),
    Tt
  );
}
function St() {
  let t = te();
  wc() ? Ec() : ((t = t.parent), en(t, !1));
  let e = t;
  yv(e) && _v(), vv();
  let i = W();
  return (
    i.firstCreatePass && (To(i, t), bc(t) && i.queries.elementEnd(t)),
    e.classesWithoutHost != null &&
      kv(e) &&
      Ga(i, e, I(), e.classesWithoutHost, !0),
    e.stylesWithoutHost != null &&
      Fv(e) &&
      Ga(i, e, I(), e.stylesWithoutHost, !1),
    St
  );
}
function At(t, e, i, n) {
  return Tt(t, e, i, n), St(), At;
}
var u0 = (t, e, i, n, r, o) => (Mo(!0), sh(n, r, Av()));
function f0(t, e, i, n, r) {
  let o = e.consts,
    s = An(o, n),
    a = Ln(e, t, 8, "ng-container", s);
  s !== null && to(a, s, !0);
  let c = An(o, r);
  return Vc(e, i, a, c), e.queries !== null && e.queries.elementStart(e, a), a;
}
function fp(t, e, i) {
  let n = I(),
    r = W(),
    o = t + ee,
    s = r.firstCreatePass ? f0(o, r, n, e, i) : r.data[o];
  en(s, !0);
  let a = p0(r, n, s, t);
  return (
    (n[o] = a),
    Co() && Oo(r, n, a, s),
    bt(a, n),
    wo(s) && (Pc(r, n, s), Fc(r, s, n)),
    i != null && Lc(n, s),
    fp
  );
}
function hp() {
  let t = te(),
    e = W();
  return (
    wc() ? Ec() : ((t = t.parent), en(t, !1)),
    e.firstCreatePass && (To(e, t), bc(t) && e.queries.elementEnd(t)),
    hp
  );
}
function h0(t, e, i) {
  return fp(t, e, i), hp(), h0;
}
var p0 = (t, e, i, n) => (Mo(!0), Py(e[z], ""));
function $O() {
  return I();
}
function pp(t, e, i) {
  let n = I(),
    r = wt();
  if (me(n, r, e)) {
    let o = W(),
      s = Fn();
    Ni(o, s, n, t, e, n[z], i, !0);
  }
  return pp;
}
function m0(t, e, i) {
  let n = I(),
    r = wt();
  if (me(n, r, e)) {
    let o = W(),
      s = Fn(),
      a = Ic(o.data),
      c = Sh(a, s, n);
    Ni(o, s, n, t, e, c, i, !0);
  }
  return m0;
}
var Ut = void 0;
function g0(t) {
  let e = t,
    i = Math.floor(Math.abs(t)),
    n = t.toString().replace(/^[^.]*\.?/, "").length;
  return i === 1 && n === 0 ? 1 : 5;
}
var b0 = [
    "en",
    [["a", "p"], ["AM", "PM"], Ut],
    [["AM", "PM"], Ut, Ut],
    [
      ["S", "M", "T", "W", "T", "F", "S"],
      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    ],
    Ut,
    [
      ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
      [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    ],
    Ut,
    [
      ["B", "A"],
      ["BC", "AD"],
      ["Before Christ", "Anno Domini"],
    ],
    0,
    [6, 0],
    ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
    ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
    ["{1}, {0}", Ut, "{1} 'at' {0}", Ut],
    [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"],
    ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"],
    "USD",
    "$",
    "US Dollar",
    {},
    "ltr",
    g0,
  ],
  Xs = {};
function Bo(t) {
  let e = v0(t),
    i = Tu(e);
  if (i) return i;
  let n = e.split("-")[0];
  if (((i = Tu(n)), i)) return i;
  if (n === "en") return b0;
  throw new x(701, !1);
}
function Tu(t) {
  return (
    t in Xs ||
      (Xs[t] =
        ye.ng &&
        ye.ng.common &&
        ye.ng.common.locales &&
        ye.ng.common.locales[t]),
    Xs[t]
  );
}
var rn = (function (t) {
  return (
    (t[(t.LocaleId = 0)] = "LocaleId"),
    (t[(t.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
    (t[(t.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
    (t[(t.DaysFormat = 3)] = "DaysFormat"),
    (t[(t.DaysStandalone = 4)] = "DaysStandalone"),
    (t[(t.MonthsFormat = 5)] = "MonthsFormat"),
    (t[(t.MonthsStandalone = 6)] = "MonthsStandalone"),
    (t[(t.Eras = 7)] = "Eras"),
    (t[(t.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
    (t[(t.WeekendRange = 9)] = "WeekendRange"),
    (t[(t.DateFormat = 10)] = "DateFormat"),
    (t[(t.TimeFormat = 11)] = "TimeFormat"),
    (t[(t.DateTimeFormat = 12)] = "DateTimeFormat"),
    (t[(t.NumberSymbols = 13)] = "NumberSymbols"),
    (t[(t.NumberFormats = 14)] = "NumberFormats"),
    (t[(t.CurrencyCode = 15)] = "CurrencyCode"),
    (t[(t.CurrencySymbol = 16)] = "CurrencySymbol"),
    (t[(t.CurrencyName = 17)] = "CurrencyName"),
    (t[(t.Currencies = 18)] = "Currencies"),
    (t[(t.Directionality = 19)] = "Directionality"),
    (t[(t.PluralCase = 20)] = "PluralCase"),
    (t[(t.ExtraData = 21)] = "ExtraData"),
    t
  );
})(rn || {});
function v0(t) {
  return t.toLowerCase().replace(/_/g, "-");
}
var co = "en-US",
  y0 = "USD";
var _0 = co;
function D0(t) {
  typeof t == "string" && (_0 = t.toLowerCase().replace(/_/g, "-"));
}
function mp(t, e, i, n) {
  let r = I(),
    o = W(),
    s = te();
  return Qc(o, r, r[z], s, t, e, n), mp;
}
function w0(t, e) {
  let i = te(),
    n = I(),
    r = W(),
    o = Ic(r.data),
    s = Sh(o, i, n);
  return Qc(r, n, s, i, t, e), w0;
}
function E0(t, e, i, n) {
  let r = t.cleanup;
  if (r != null)
    for (let o = 0; o < r.length - 1; o += 2) {
      let s = r[o];
      if (s === i && r[o + 1] === n) {
        let a = e[gi],
          c = r[o + 2];
        return a.length > c ? a[c] : null;
      }
      typeof s == "string" && (o += 2);
    }
  return null;
}
function Qc(t, e, i, n, r, o, s) {
  let a = wo(n),
    l = t.firstCreatePass && Th(t),
    d = e[ie],
    u = Mh(e),
    f = !0;
  if (n.type & 3 || s) {
    let g = xe(n, e),
      v = s ? s(g) : g,
      y = u.length,
      V = s ? (B) => s(Ye(B[n.index])) : n.index,
      K = null;
    if ((!s && a && (K = E0(t, e, r, n.index)), K !== null)) {
      let B = K.__ngLastListenerFn__ || K;
      (B.__ngNextListenerFn__ = o), (K.__ngLastListenerFn__ = o), (f = !1);
    } else {
      o = Au(n, e, d, o, !1);
      let B = i.listen(v, r, o);
      u.push(o, B), l && l.push(r, V, y, y + 1);
    }
  } else o = Au(n, e, d, o, !1);
  let h = n.outputs,
    m;
  if (f && h !== null && (m = h[r])) {
    let g = m.length;
    if (g)
      for (let v = 0; v < g; v += 2) {
        let y = m[v],
          V = m[v + 1],
          be = e[y][V].subscribe(o),
          ve = u.length;
        u.push(o, be), l && l.push(r, n.index, ve, -(ve + 1));
      }
  }
}
function Su(t, e, i, n) {
  let r = O(null);
  try {
    return ze(6, e, i), i(n) !== !1;
  } catch (o) {
    return Ah(t, o), !1;
  } finally {
    ze(7, e, i), O(r);
  }
}
function Au(t, e, i, n, r) {
  return function o(s) {
    if (s === Function) return n;
    let a = t.componentOffset > -1 ? Dt(t.index, e) : e;
    $c(a);
    let c = Su(e, i, n, s),
      l = o.__ngNextListenerFn__;
    for (; l; ) (c = Su(e, i, l, s) && c), (l = l.__ngNextListenerFn__);
    return r && c === !1 && s.preventDefault(), c;
  };
}
function I0(t = 1) {
  return Tv(t);
}
function x0(t, e) {
  let i = null,
    n = kb(t);
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    if (o === "*") {
      i = r;
      continue;
    }
    if (n === null ? Qu(t, o, !0) : Lb(n, o)) return r;
  }
  return i;
}
function Nt(t) {
  let e = I()[Ie][we];
  if (!e.projection) {
    let i = t ? t.length : 1,
      n = (e.projection = xb(i, null)),
      r = n.slice(),
      o = e.child;
    for (; o !== null; ) {
      let s = t ? x0(o, t) : 0;
      s !== null && (r[s] ? (r[s].projectionNext = o) : (n[s] = o), (r[s] = o)),
        (o = o.next);
    }
  }
}
function Ce(t, e = 0, i) {
  let n = I(),
    r = W(),
    o = Ln(r, ee + t, 16, null, i || null);
  o.projection === null && (o.projection = e),
    Ec(),
    (!n[Mn] || Df()) && (o.flags & 32) !== 32 && Ky(r, n, o);
}
function C0(t, e, i, n, r) {
  let o = I(),
    s = Zc(o, e, i, n);
  if (s !== ge) {
    let a = W(),
      c = Fn();
    Ni(a, c, o, t, s, o[z], r, !1);
  }
  return C0;
}
function zO(t, e, i, n) {
  gD(t, e, i, n);
}
function gp(t, e, i) {
  qh(t, e, i);
}
function bp(t) {
  let e = I(),
    i = W(),
    n = xc();
  xo(n + 1);
  let r = qc(i, n);
  if (t.dirty && uv(e) === ((r.metadata.flags & 2) === 2)) {
    if (r.matches === null) t.reset([]);
    else {
      let o = Zh(e, n);
      t.reset(o, Uf), t.notifyOnChanges();
    }
    return !0;
  }
  return !1;
}
function vp() {
  return Gc(I(), xc());
}
function WO(t, e, i, n) {
  wD(t, qh(e, i, n));
}
function GO(t = 1) {
  xo(xc() + t);
}
function M0(t, e, i, n) {
  i >= t.data.length && ((t.data[i] = null), (t.blueprint[i] = null)),
    (e[i] = n);
}
function qO(t) {
  let e = wv();
  return yc(e, ee + t);
}
function T0(t, e = "") {
  let i = I(),
    n = W(),
    r = t + ee,
    o = n.firstCreatePass ? Ln(n, r, 1, e, null) : n.data[r],
    s = S0(n, i, o, e, t);
  (i[r] = s), Co() && Oo(n, i, s, o), en(o, !1);
}
var S0 = (t, e, i, n, r) => (Mo(!0), ky(e[z], n));
function A0(t) {
  return Jc("", t, ""), A0;
}
function Jc(t, e, i) {
  let n = I(),
    r = Zc(n, t, e, i);
  return r !== ge && Hc(n, Ke(), r), Jc;
}
function N0(t, e, i, n, r) {
  let o = I(),
    s = BD(o, t, e, i, n, r);
  return s !== ge && Hc(o, Ke(), s), N0;
}
function O0(t, e, i, n, r, o, s) {
  let a = I(),
    c = HD(a, t, e, i, n, r, o, s);
  return c !== ge && Hc(a, Ke(), c), O0;
}
function R0(t, e, i) {
  Xh(e) && (e = e());
  let n = I(),
    r = wt();
  if (me(n, r, e)) {
    let o = W(),
      s = Fn();
    Ni(o, s, n, t, e, n[z], i, !1);
  }
  return R0;
}
function YO(t, e) {
  let i = Xh(t);
  return i && t.set(e), i;
}
function k0(t, e) {
  let i = I(),
    n = W(),
    r = te();
  return Qc(n, i, i[z], r, t, e), k0;
}
function F0(t, e, i) {
  let n = W();
  if (n.firstCreatePass) {
    let r = rt(t);
    ec(i, n.data, n.blueprint, r, !0), ec(e, n.data, n.blueprint, r, !1);
  }
}
function ec(t, e, i, n, r) {
  if (((t = se(t)), Array.isArray(t)))
    for (let o = 0; o < t.length; o++) ec(t[o], e, i, n, r);
  else {
    let o = W(),
      s = I(),
      a = te(),
      c = Cn(t) ? t : se(t.provide),
      l = cf(t),
      d = a.providerIndexes & 1048575,
      u = a.directiveStart,
      f = a.providerIndexes >> 20;
    if (Cn(t) || !t.multi) {
      let h = new Zt(l, r, F),
        m = Js(c, e, r ? d : d + f, u);
      m === -1
        ? (ha(Kr(a, s), o, c),
          Qs(o, t, e.length),
          e.push(c),
          a.directiveStart++,
          a.directiveEnd++,
          r && (a.providerIndexes += 1048576),
          i.push(h),
          s.push(h))
        : ((i[m] = h), (s[m] = h));
    } else {
      let h = Js(c, e, d + f, u),
        m = Js(c, e, d, d + f),
        g = h >= 0 && i[h],
        v = m >= 0 && i[m];
      if ((r && !v) || (!r && !g)) {
        ha(Kr(a, s), o, c);
        let y = j0(r ? L0 : P0, i.length, r, n, l);
        !r && v && (i[m].providerFactory = y),
          Qs(o, t, e.length, 0),
          e.push(c),
          a.directiveStart++,
          a.directiveEnd++,
          r && (a.providerIndexes += 1048576),
          i.push(y),
          s.push(y);
      } else {
        let y = yp(i[r ? m : h], l, !r && n);
        Qs(o, t, h > -1 ? h : m, y);
      }
      !r && n && v && i[m].componentProviders++;
    }
  }
}
function Qs(t, e, i, n) {
  let r = Cn(e),
    o = Zb(e);
  if (r || o) {
    let c = (o ? se(e.useClass) : e).prototype.ngOnDestroy;
    if (c) {
      let l = t.destroyHooks || (t.destroyHooks = []);
      if (!r && e.multi) {
        let d = l.indexOf(i);
        d === -1 ? l.push(i, [n, c]) : l[d + 1].push(n, c);
      } else l.push(i, c);
    }
  }
}
function yp(t, e, i) {
  return i && t.componentProviders++, t.multi.push(e) - 1;
}
function Js(t, e, i, n) {
  for (let r = i; r < n; r++) if (e[r] === t) return r;
  return -1;
}
function P0(t, e, i, n) {
  return tc(this.multi, []);
}
function L0(t, e, i, n) {
  let r = this.multi,
    o;
  if (this.providerFactory) {
    let s = this.providerFactory.componentProviders,
      a = Kt(i, i[T], this.providerFactory.index, n);
    (o = a.slice(0, s)), tc(r, o);
    for (let c = s; c < a.length; c++) o.push(a[c]);
  } else (o = []), tc(r, o);
  return o;
}
function tc(t, e) {
  for (let i = 0; i < t.length; i++) {
    let n = t[i];
    e.push(n());
  }
  return e;
}
function j0(t, e, i, n, r) {
  let o = new Zt(t, i, F);
  return (
    (o.multi = []),
    (o.index = e),
    (o.componentProviders = 0),
    yp(o, r, n && !i),
    o
  );
}
function Ho(t, e = []) {
  return (i) => {
    i.providersResolver = (n, r) => F0(n, r ? r(t) : t, e);
  };
}
var V0 = (() => {
  let e = class e {
    constructor(n) {
      (this._injector = n), (this.cachedInjectors = new Map());
    }
    getOrCreateStandaloneInjector(n) {
      if (!n.standalone) return null;
      if (!this.cachedInjectors.has(n)) {
        let r = of(!1, n.type),
          o =
            r.length > 0
              ? OD([r], this._injector, `Standalone[${n.type.name}]`)
              : null;
        this.cachedInjectors.set(n, o);
      }
      return this.cachedInjectors.get(n);
    }
    ngOnDestroy() {
      try {
        for (let n of this.cachedInjectors.values()) n !== null && n.destroy();
      } finally {
        this.cachedInjectors.clear();
      }
    }
  };
  e.ɵprov = b({
    token: e,
    providedIn: "environment",
    factory: () => new e(p(qe)),
  });
  let t = e;
  return t;
})();
function Ot(t) {
  Mt("NgStandalone"),
    (t.getStandaloneInjector = (e) =>
      e.get(V0).getOrCreateStandaloneInjector(t));
}
function ZO(t, e, i, n) {
  return Dp(I(), Eo(), t, e, i, n);
}
function KO(t, e, i, n, r) {
  return wp(I(), Eo(), t, e, i, n, r);
}
function _p(t, e) {
  let i = t[e];
  return i === ge ? void 0 : i;
}
function Dp(t, e, i, n, r, o) {
  let s = e + i;
  return me(t, s, r) ? tp(t, s + 1, o ? n.call(o, r) : n(r)) : _p(t, s + 1);
}
function wp(t, e, i, n, r, o, s) {
  let a = e + i;
  return Yc(t, a, r, o)
    ? tp(t, a + 2, s ? n.call(s, r, o) : n(r, o))
    : _p(t, a + 2);
}
function XO(t, e) {
  let i = W(),
    n,
    r = t + ee;
  i.firstCreatePass
    ? ((n = B0(e, i.pipeRegistry)),
      (i.data[r] = n),
      n.onDestroy && (i.destroyHooks ??= []).push(r, n.onDestroy))
    : (n = i.data[r]);
  let o = n.factory || (n.factory = Wt(n.type, !0)),
    s,
    a = fe(F);
  try {
    let c = Zr(!1),
      l = o();
    return Zr(c), M0(i, I(), r, l), l;
  } finally {
    fe(a);
  }
}
function B0(t, e) {
  if (e)
    for (let i = e.length - 1; i >= 0; i--) {
      let n = e[i];
      if (t === n.name) return n;
    }
}
function QO(t, e, i) {
  let n = t + ee,
    r = I(),
    o = yc(r, n);
  return Ep(r, n) ? Dp(r, Eo(), e, o.transform, i, o) : o.transform(i);
}
function JO(t, e, i, n) {
  let r = t + ee,
    o = I(),
    s = yc(o, r);
  return Ep(o, r) ? wp(o, Eo(), e, s.transform, i, n, s) : s.transform(i, n);
}
function Ep(t, e) {
  return t[T].data[e].pure;
}
function eR(t, e) {
  return jo(t, e);
}
var Ip = (() => {
  let e = class e {
    log(n) {
      console.log(n);
    }
    warn(n) {
      console.warn(n);
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "platform" }));
  let t = e;
  return t;
})();
var xp = new D("");
function el(t) {
  return !!t && typeof t.then == "function";
}
function Cp(t) {
  return !!t && typeof t.subscribe == "function";
}
var H0 = new D(""),
  Mp = (() => {
    let e = class e {
      constructor() {
        (this.initialized = !1),
          (this.done = !1),
          (this.donePromise = new Promise((n, r) => {
            (this.resolve = n), (this.reject = r);
          })),
          (this.appInits = _(H0, { optional: !0 }) ?? []);
      }
      runInitializers() {
        if (this.initialized) return;
        let n = [];
        for (let o of this.appInits) {
          let s = o();
          if (el(s)) n.push(s);
          else if (Cp(s)) {
            let a = new Promise((c, l) => {
              s.subscribe({ complete: c, error: l });
            });
            n.push(a);
          }
        }
        let r = () => {
          (this.done = !0), this.resolve();
        };
        Promise.all(n)
          .then(() => {
            r();
          })
          .catch((o) => {
            this.reject(o);
          }),
          n.length === 0 && r(),
          (this.initialized = !0);
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  Tp = new D("");
function U0() {
  od(() => {
    throw new x(600, !1);
  });
}
function $0(t) {
  return t.isBoundToModule;
}
function z0(t, e, i) {
  try {
    let n = i();
    return el(n)
      ? n.catch((r) => {
          throw (e.runOutsideAngular(() => t.handleError(r)), r);
        })
      : n;
  } catch (n) {
    throw (e.runOutsideAngular(() => t.handleError(n)), n);
  }
}
var Bn = (() => {
  let e = class e {
    constructor() {
      (this._bootstrapListeners = []),
        (this._runningTick = !1),
        (this._destroyed = !1),
        (this._destroyListeners = []),
        (this._views = []),
        (this.internalErrorHandler = _(Hf)),
        (this.afterRenderEffectManager = _(Uh)),
        (this.externalTestViews = new Set()),
        (this.beforeRender = new L()),
        (this.afterTick = new L()),
        (this.componentTypes = []),
        (this.components = []),
        (this.isStable = _(jn).hasPendingTasks.pipe(G((n) => !n))),
        (this._injector = _(qe));
    }
    get destroyed() {
      return this._destroyed;
    }
    get injector() {
      return this._injector;
    }
    bootstrap(n, r) {
      let o = n instanceof eo;
      if (!this._injector.get(Mp).done) {
        let h = !o && $b(n),
          m = !1;
        throw new x(405, m);
      }
      let a;
      o ? (a = n) : (a = this._injector.get(Ct).resolveComponentFactory(n)),
        this.componentTypes.push(a.componentType);
      let c = $0(a) ? void 0 : this._injector.get(yt),
        l = r || a.selector,
        d = a.create(ct.NULL, [], l, c),
        u = d.location.nativeElement,
        f = d.injector.get(xp, null);
      return (
        f?.registerApplication(u),
        d.onDestroy(() => {
          this.detachView(d.hostView),
            ea(this.components, d),
            f?.unregisterApplication(u);
        }),
        this._loadComponent(d),
        d
      );
    }
    tick() {
      this._tick(!0);
    }
    _tick(n) {
      if (this._runningTick) throw new x(101, !1);
      let r = O(null);
      try {
        (this._runningTick = !0), this.detectChangesInAttachedViews(n);
      } catch (o) {
        this.internalErrorHandler(o);
      } finally {
        this.afterTick.next(), (this._runningTick = !1), O(r);
      }
    }
    detectChangesInAttachedViews(n) {
      let r = 0,
        o = this.afterRenderEffectManager;
      for (;;) {
        if (r === Lh) throw new x(103, !1);
        if (n) {
          let s = r === 0;
          this.beforeRender.next(s);
          for (let { _lView: a, notifyErrorHandler: c } of this._views)
            W0(a, s, c);
        }
        if (
          (r++,
          o.executeInternalCallbacks(),
          ![...this.externalTestViews.keys(), ...this._views].some(
            ({ _lView: s }) => nc(s),
          ) &&
            (o.execute(),
            ![...this.externalTestViews.keys(), ...this._views].some(
              ({ _lView: s }) => nc(s),
            )))
        )
          break;
      }
    }
    attachView(n) {
      let r = n;
      this._views.push(r), r.attachToAppRef(this);
    }
    detachView(n) {
      let r = n;
      ea(this._views, r), r.detachFromAppRef();
    }
    _loadComponent(n) {
      this.attachView(n.hostView), this.tick(), this.components.push(n);
      let r = this._injector.get(Tp, []);
      [...this._bootstrapListeners, ...r].forEach((o) => o(n));
    }
    ngOnDestroy() {
      if (!this._destroyed)
        try {
          this._destroyListeners.forEach((n) => n()),
            this._views.slice().forEach((n) => n.destroy());
        } finally {
          (this._destroyed = !0),
            (this._views = []),
            (this._bootstrapListeners = []),
            (this._destroyListeners = []);
        }
    }
    onDestroy(n) {
      return (
        this._destroyListeners.push(n), () => ea(this._destroyListeners, n)
      );
    }
    destroy() {
      if (this._destroyed) throw new x(406, !1);
      let n = this._injector;
      n.destroy && !n.destroyed && n.destroy();
    }
    get viewCount() {
      return this._views.length;
    }
    warnIfDestroyed() {}
  };
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
function ea(t, e) {
  let i = t.indexOf(e);
  i > -1 && t.splice(i, 1);
}
function W0(t, e, i) {
  (!e && !nc(t)) || G0(t, i, e);
}
function nc(t) {
  return Dc(t);
}
function G0(t, e, i) {
  let n;
  i ? ((n = 0), (t[E] |= 1024)) : t[E] & 64 ? (n = 0) : (n = 1), jh(t, e, n);
}
var ic = class {
    constructor(e, i) {
      (this.ngModuleFactory = e), (this.componentFactories = i);
    }
  },
  tR = (() => {
    let e = class e {
      compileModuleSync(n) {
        return new $a(n);
      }
      compileModuleAsync(n) {
        return Promise.resolve(this.compileModuleSync(n));
      }
      compileModuleAndAllComponentsSync(n) {
        let r = this.compileModuleSync(n),
          o = tf(n),
          s = oh(o.declarations).reduce((a, c) => {
            let l = nt(c);
            return l && a.push(new Qt(l)), a;
          }, []);
        return new ic(r, s);
      }
      compileModuleAndAllComponentsAsync(n) {
        return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
      }
      clearCache() {}
      clearCacheFor(n) {}
      getModuleId(n) {}
    };
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })();
var q0 = (() => {
  let e = class e {
    constructor() {
      (this.zone = _(N)), (this.applicationRef = _(Bn));
    }
    initialize() {
      this._onMicrotaskEmptySubscription ||
        (this._onMicrotaskEmptySubscription =
          this.zone.onMicrotaskEmpty.subscribe({
            next: () => {
              this.zone.run(() => {
                this.applicationRef.tick();
              });
            },
          }));
    }
    ngOnDestroy() {
      this._onMicrotaskEmptySubscription?.unsubscribe();
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
function Y0(t) {
  return [
    { provide: N, useFactory: t },
    {
      provide: hi,
      multi: !0,
      useFactory: () => {
        let e = _(q0, { optional: !0 });
        return () => e.initialize();
      },
    },
    {
      provide: hi,
      multi: !0,
      useFactory: () => {
        let e = _(Q0);
        return () => {
          e.initialize();
        };
      },
    },
    { provide: Hf, useFactory: Z0 },
  ];
}
function Z0() {
  let t = _(N),
    e = _(Le);
  return (i) => t.runOutsideAngular(() => e.handleError(i));
}
function K0(t) {
  let e = Y0(() => new N(X0(t)));
  return go([[], e]);
}
function X0(t) {
  return {
    enableLongStackTrace: !1,
    shouldCoalesceEventChangeDetection: t?.eventCoalescing ?? !1,
    shouldCoalesceRunChangeDetection: t?.runCoalescing ?? !1,
  };
}
var Q0 = (() => {
  let e = class e {
    constructor() {
      (this.subscription = new $()),
        (this.initialized = !1),
        (this.zone = _(N)),
        (this.pendingTasks = _(jn));
    }
    initialize() {
      if (this.initialized) return;
      this.initialized = !0;
      let n = null;
      !this.zone.isStable &&
        !this.zone.hasPendingMacrotasks &&
        !this.zone.hasPendingMicrotasks &&
        (n = this.pendingTasks.add()),
        this.zone.runOutsideAngular(() => {
          this.subscription.add(
            this.zone.onStable.subscribe(() => {
              N.assertNotInAngularZone(),
                queueMicrotask(() => {
                  n !== null &&
                    !this.zone.hasPendingMacrotasks &&
                    !this.zone.hasPendingMicrotasks &&
                    (this.pendingTasks.remove(n), (n = null));
                });
            }),
          );
        }),
        this.subscription.add(
          this.zone.onUnstable.subscribe(() => {
            N.assertInAngularZone(), (n ??= this.pendingTasks.add());
          }),
        );
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
function J0() {
  return (typeof $localize < "u" && $localize.locale) || co;
}
var Hn = new D("", {
    providedIn: "root",
    factory: () => _(Hn, k.Optional | k.SkipSelf) || J0(),
  }),
  Sp = new D("", { providedIn: "root", factory: () => y0 });
var Ap = new D("");
var Hr = null;
function ew(t = [], e) {
  return ct.create({
    name: e,
    providers: [
      { provide: bo, useValue: "platform" },
      { provide: Ap, useValue: new Set([() => (Hr = null)]) },
      ...t,
    ],
  });
}
function tw(t = []) {
  if (Hr) return Hr;
  let e = ew(t);
  return (Hr = e), U0(), nw(e), e;
}
function nw(t) {
  t.get(Ac, null)?.forEach((i) => i());
}
var Oi = (() => {
  let e = class e {};
  e.__NG_ELEMENT_ID__ = iw;
  let t = e;
  return t;
})();
function iw(t) {
  return rw(te(), I(), (t & 16) === 16);
}
function rw(t, e, i) {
  if (Do(t) && !i) {
    let n = Dt(t.index, e);
    return new Xt(n, n);
  } else if (t.type & 47) {
    let n = e[Ie];
    return new Xt(n, e);
  }
  return null;
}
var rc = class {
    constructor() {}
    supports(e) {
      return ep(e);
    }
    create(e) {
      return new oc(e);
    }
  },
  ow = (t, e) => e,
  oc = class {
    constructor(e) {
      (this.length = 0),
        (this._linkedRecords = null),
        (this._unlinkedRecords = null),
        (this._previousItHead = null),
        (this._itHead = null),
        (this._itTail = null),
        (this._additionsHead = null),
        (this._additionsTail = null),
        (this._movesHead = null),
        (this._movesTail = null),
        (this._removalsHead = null),
        (this._removalsTail = null),
        (this._identityChangesHead = null),
        (this._identityChangesTail = null),
        (this._trackByFn = e || ow);
    }
    forEachItem(e) {
      let i;
      for (i = this._itHead; i !== null; i = i._next) e(i);
    }
    forEachOperation(e) {
      let i = this._itHead,
        n = this._removalsHead,
        r = 0,
        o = null;
      for (; i || n; ) {
        let s = !n || (i && i.currentIndex < Nu(n, r, o)) ? i : n,
          a = Nu(s, r, o),
          c = s.currentIndex;
        if (s === n) r--, (n = n._nextRemoved);
        else if (((i = i._next), s.previousIndex == null)) r++;
        else {
          o || (o = []);
          let l = a - r,
            d = c - r;
          if (l != d) {
            for (let f = 0; f < l; f++) {
              let h = f < o.length ? o[f] : (o[f] = 0),
                m = h + f;
              d <= m && m < l && (o[f] = h + 1);
            }
            let u = s.previousIndex;
            o[u] = d - l;
          }
        }
        a !== c && e(s, a, c);
      }
    }
    forEachPreviousItem(e) {
      let i;
      for (i = this._previousItHead; i !== null; i = i._nextPrevious) e(i);
    }
    forEachAddedItem(e) {
      let i;
      for (i = this._additionsHead; i !== null; i = i._nextAdded) e(i);
    }
    forEachMovedItem(e) {
      let i;
      for (i = this._movesHead; i !== null; i = i._nextMoved) e(i);
    }
    forEachRemovedItem(e) {
      let i;
      for (i = this._removalsHead; i !== null; i = i._nextRemoved) e(i);
    }
    forEachIdentityChange(e) {
      let i;
      for (i = this._identityChangesHead; i !== null; i = i._nextIdentityChange)
        e(i);
    }
    diff(e) {
      if ((e == null && (e = []), !ep(e))) throw new x(900, !1);
      return this.check(e) ? this : null;
    }
    onDestroy() {}
    check(e) {
      this._reset();
      let i = this._itHead,
        n = !1,
        r,
        o,
        s;
      if (Array.isArray(e)) {
        this.length = e.length;
        for (let a = 0; a < this.length; a++)
          (o = e[a]),
            (s = this._trackByFn(a, o)),
            i === null || !Object.is(i.trackById, s)
              ? ((i = this._mismatch(i, o, s, a)), (n = !0))
              : (n && (i = this._verifyReinsertion(i, o, s, a)),
                Object.is(i.item, o) || this._addIdentityChange(i, o)),
            (i = i._next);
      } else
        (r = 0),
          RD(e, (a) => {
            (s = this._trackByFn(r, a)),
              i === null || !Object.is(i.trackById, s)
                ? ((i = this._mismatch(i, a, s, r)), (n = !0))
                : (n && (i = this._verifyReinsertion(i, a, s, r)),
                  Object.is(i.item, a) || this._addIdentityChange(i, a)),
              (i = i._next),
              r++;
          }),
          (this.length = r);
      return this._truncate(i), (this.collection = e), this.isDirty;
    }
    get isDirty() {
      return (
        this._additionsHead !== null ||
        this._movesHead !== null ||
        this._removalsHead !== null ||
        this._identityChangesHead !== null
      );
    }
    _reset() {
      if (this.isDirty) {
        let e;
        for (e = this._previousItHead = this._itHead; e !== null; e = e._next)
          e._nextPrevious = e._next;
        for (e = this._additionsHead; e !== null; e = e._nextAdded)
          e.previousIndex = e.currentIndex;
        for (
          this._additionsHead = this._additionsTail = null, e = this._movesHead;
          e !== null;
          e = e._nextMoved
        )
          e.previousIndex = e.currentIndex;
        (this._movesHead = this._movesTail = null),
          (this._removalsHead = this._removalsTail = null),
          (this._identityChangesHead = this._identityChangesTail = null);
      }
    }
    _mismatch(e, i, n, r) {
      let o;
      return (
        e === null ? (o = this._itTail) : ((o = e._prev), this._remove(e)),
        (e =
          this._unlinkedRecords === null
            ? null
            : this._unlinkedRecords.get(n, null)),
        e !== null
          ? (Object.is(e.item, i) || this._addIdentityChange(e, i),
            this._reinsertAfter(e, o, r))
          : ((e =
              this._linkedRecords === null
                ? null
                : this._linkedRecords.get(n, r)),
            e !== null
              ? (Object.is(e.item, i) || this._addIdentityChange(e, i),
                this._moveAfter(e, o, r))
              : (e = this._addAfter(new sc(i, n), o, r))),
        e
      );
    }
    _verifyReinsertion(e, i, n, r) {
      let o =
        this._unlinkedRecords === null
          ? null
          : this._unlinkedRecords.get(n, null);
      return (
        o !== null
          ? (e = this._reinsertAfter(o, e._prev, r))
          : e.currentIndex != r &&
            ((e.currentIndex = r), this._addToMoves(e, r)),
        e
      );
    }
    _truncate(e) {
      for (; e !== null; ) {
        let i = e._next;
        this._addToRemovals(this._unlink(e)), (e = i);
      }
      this._unlinkedRecords !== null && this._unlinkedRecords.clear(),
        this._additionsTail !== null && (this._additionsTail._nextAdded = null),
        this._movesTail !== null && (this._movesTail._nextMoved = null),
        this._itTail !== null && (this._itTail._next = null),
        this._removalsTail !== null && (this._removalsTail._nextRemoved = null),
        this._identityChangesTail !== null &&
          (this._identityChangesTail._nextIdentityChange = null);
    }
    _reinsertAfter(e, i, n) {
      this._unlinkedRecords !== null && this._unlinkedRecords.remove(e);
      let r = e._prevRemoved,
        o = e._nextRemoved;
      return (
        r === null ? (this._removalsHead = o) : (r._nextRemoved = o),
        o === null ? (this._removalsTail = r) : (o._prevRemoved = r),
        this._insertAfter(e, i, n),
        this._addToMoves(e, n),
        e
      );
    }
    _moveAfter(e, i, n) {
      return (
        this._unlink(e), this._insertAfter(e, i, n), this._addToMoves(e, n), e
      );
    }
    _addAfter(e, i, n) {
      return (
        this._insertAfter(e, i, n),
        this._additionsTail === null
          ? (this._additionsTail = this._additionsHead = e)
          : (this._additionsTail = this._additionsTail._nextAdded = e),
        e
      );
    }
    _insertAfter(e, i, n) {
      let r = i === null ? this._itHead : i._next;
      return (
        (e._next = r),
        (e._prev = i),
        r === null ? (this._itTail = e) : (r._prev = e),
        i === null ? (this._itHead = e) : (i._next = e),
        this._linkedRecords === null && (this._linkedRecords = new lo()),
        this._linkedRecords.put(e),
        (e.currentIndex = n),
        e
      );
    }
    _remove(e) {
      return this._addToRemovals(this._unlink(e));
    }
    _unlink(e) {
      this._linkedRecords !== null && this._linkedRecords.remove(e);
      let i = e._prev,
        n = e._next;
      return (
        i === null ? (this._itHead = n) : (i._next = n),
        n === null ? (this._itTail = i) : (n._prev = i),
        e
      );
    }
    _addToMoves(e, i) {
      return (
        e.previousIndex === i ||
          (this._movesTail === null
            ? (this._movesTail = this._movesHead = e)
            : (this._movesTail = this._movesTail._nextMoved = e)),
        e
      );
    }
    _addToRemovals(e) {
      return (
        this._unlinkedRecords === null && (this._unlinkedRecords = new lo()),
        this._unlinkedRecords.put(e),
        (e.currentIndex = null),
        (e._nextRemoved = null),
        this._removalsTail === null
          ? ((this._removalsTail = this._removalsHead = e),
            (e._prevRemoved = null))
          : ((e._prevRemoved = this._removalsTail),
            (this._removalsTail = this._removalsTail._nextRemoved = e)),
        e
      );
    }
    _addIdentityChange(e, i) {
      return (
        (e.item = i),
        this._identityChangesTail === null
          ? (this._identityChangesTail = this._identityChangesHead = e)
          : (this._identityChangesTail =
              this._identityChangesTail._nextIdentityChange =
                e),
        e
      );
    }
  },
  sc = class {
    constructor(e, i) {
      (this.item = e),
        (this.trackById = i),
        (this.currentIndex = null),
        (this.previousIndex = null),
        (this._nextPrevious = null),
        (this._prev = null),
        (this._next = null),
        (this._prevDup = null),
        (this._nextDup = null),
        (this._prevRemoved = null),
        (this._nextRemoved = null),
        (this._nextAdded = null),
        (this._nextMoved = null),
        (this._nextIdentityChange = null);
    }
  },
  ac = class {
    constructor() {
      (this._head = null), (this._tail = null);
    }
    add(e) {
      this._head === null
        ? ((this._head = this._tail = e),
          (e._nextDup = null),
          (e._prevDup = null))
        : ((this._tail._nextDup = e),
          (e._prevDup = this._tail),
          (e._nextDup = null),
          (this._tail = e));
    }
    get(e, i) {
      let n;
      for (n = this._head; n !== null; n = n._nextDup)
        if ((i === null || i <= n.currentIndex) && Object.is(n.trackById, e))
          return n;
      return null;
    }
    remove(e) {
      let i = e._prevDup,
        n = e._nextDup;
      return (
        i === null ? (this._head = n) : (i._nextDup = n),
        n === null ? (this._tail = i) : (n._prevDup = i),
        this._head === null
      );
    }
  },
  lo = class {
    constructor() {
      this.map = new Map();
    }
    put(e) {
      let i = e.trackById,
        n = this.map.get(i);
      n || ((n = new ac()), this.map.set(i, n)), n.add(e);
    }
    get(e, i) {
      let n = e,
        r = this.map.get(n);
      return r ? r.get(e, i) : null;
    }
    remove(e) {
      let i = e.trackById;
      return this.map.get(i).remove(e) && this.map.delete(i), e;
    }
    get isEmpty() {
      return this.map.size === 0;
    }
    clear() {
      this.map.clear();
    }
  };
function Nu(t, e, i) {
  let n = t.previousIndex;
  if (n === null) return n;
  let r = 0;
  return i && n < i.length && (r = i[n]), n + e + r;
}
function Ou() {
  return new tl([new rc()]);
}
var tl = (() => {
  let e = class e {
    constructor(n) {
      this.factories = n;
    }
    static create(n, r) {
      if (r != null) {
        let o = r.factories.slice();
        n = n.concat(o);
      }
      return new e(n);
    }
    static extend(n) {
      return {
        provide: e,
        useFactory: (r) => e.create(n, r || Ou()),
        deps: [[e, new wb(), new Wu()]],
      };
    }
    find(n) {
      let r = this.factories.find((o) => o.supports(n));
      if (r != null) return r;
      throw new x(901, !1);
    }
  };
  e.ɵprov = b({ token: e, providedIn: "root", factory: Ou });
  let t = e;
  return t;
})();
function Np(t) {
  try {
    let { rootComponent: e, appProviders: i, platformProviders: n } = t,
      r = tw(n),
      o = [K0(), ...(i || [])],
      a = new ro({
        providers: o,
        parent: r,
        debugName: "",
        runEnvironmentInitializers: !1,
      }).injector,
      c = a.get(N);
    return c.run(() => {
      a.resolveInjectorInitializers();
      let l = a.get(Le, null),
        d;
      c.runOutsideAngular(() => {
        d = c.onError.subscribe({
          next: (h) => {
            l.handleError(h);
          },
        });
      });
      let u = () => a.destroy(),
        f = r.get(Ap);
      return (
        f.add(u),
        a.onDestroy(() => {
          d.unsubscribe(), f.delete(u);
        }),
        z0(l, c, () => {
          let h = a.get(Mp);
          return (
            h.runInitializers(),
            h.donePromise.then(() => {
              let m = a.get(Hn, co);
              D0(m || co);
              let g = a.get(Bn);
              return e !== void 0 && g.bootstrap(e), g;
            })
          );
        })
      );
    });
  } catch (e) {
    return Promise.reject(e);
  }
}
function ut(t) {
  return typeof t == "boolean" ? t : t != null && t !== "false";
}
function Op(t, e = NaN) {
  return !isNaN(parseFloat(t)) && !isNaN(Number(t)) ? Number(t) : e;
}
function Rp(t, e) {
  Mt("NgSignals");
  let i = gs(t);
  return e?.equal && (i[de].equal = e.equal), i;
}
var sw = new D("", { providedIn: "root", factory: () => _(aw) }),
  aw = (() => {
    let e = class e {};
    e.ɵprov = b({ token: e, providedIn: "root", factory: () => new cc() });
    let t = e;
    return t;
  })(),
  cc = class {
    constructor() {
      (this.queuedEffectCount = 0),
        (this.queues = new Map()),
        (this.pendingTasks = _(jn)),
        (this.taskId = null);
    }
    scheduleEffect(e) {
      if ((this.enqueue(e), this.taskId === null)) {
        let i = (this.taskId = this.pendingTasks.add());
        queueMicrotask(() => {
          this.flush(), this.pendingTasks.remove(i), (this.taskId = null);
        });
      }
    }
    enqueue(e) {
      let i = e.creationZone;
      this.queues.has(i) || this.queues.set(i, new Set());
      let n = this.queues.get(i);
      n.has(e) || (this.queuedEffectCount++, n.add(e));
    }
    flush() {
      for (; this.queuedEffectCount > 0; )
        for (let [e, i] of this.queues)
          e === null ? this.flushQueue(i) : e.run(() => this.flushQueue(i));
    }
    flushQueue(e) {
      for (let i of e) e.delete(i), this.queuedEffectCount--, i.run();
    }
  },
  lc = class {
    constructor(e, i, n, r, o, s) {
      (this.scheduler = e),
        (this.effectFn = i),
        (this.creationZone = n),
        (this.injector = o),
        (this.watcher = cd(
          (a) => this.runEffect(a),
          () => this.schedule(),
          s,
        )),
        (this.unregisterOnDestroy = r?.onDestroy(() => this.destroy()));
    }
    runEffect(e) {
      try {
        this.effectFn(e);
      } catch (i) {
        this.injector.get(Le, null, { optional: !0 })?.handleError(i);
      }
    }
    run() {
      this.watcher.run();
    }
    schedule() {
      this.scheduler.scheduleEffect(this);
    }
    destroy() {
      this.watcher.destroy(), this.unregisterOnDestroy?.();
    }
  };
function kp(t, e) {
  Mt("NgSignals"), !e?.injector && yo(kp);
  let i = e?.injector ?? _(ct),
    n = e?.manualCleanup !== !0 ? i.get(Et) : null,
    r = new lc(
      i.get(sw),
      t,
      typeof Zone > "u" ? null : Zone.current,
      n,
      i,
      e?.allowSignalWrites ?? !1,
    ),
    o = i.get(Oi, null, { optional: !0 });
  return (
    !o || !(o._lView[E] & 8)
      ? r.watcher.notify()
      : (o._lView[Pr] ??= []).push(r.watcher.notify),
    r
  );
}
function nR(t, e) {
  let i = nt(t),
    n = e.elementInjector || vo();
  return new Qt(i).create(
    n,
    e.projectableNodes,
    e.hostElement,
    e.environmentInjector,
  );
}
function iR(t) {
  let e = nt(t);
  if (!e) return null;
  let i = new Qt(e);
  return {
    get selector() {
      return i.selector;
    },
    get type() {
      return i.componentType;
    },
    get inputs() {
      return i.inputs;
    },
    get outputs() {
      return i.outputs;
    },
    get ngContentSelectors() {
      return i.ngContentSelectors;
    },
    get isStandalone() {
      return e.standalone;
    },
    get isSignal() {
      return e.signals;
    },
  };
}
var Hp = null;
function $n() {
  return Hp;
}
function Up(t) {
  Hp ??= t;
}
var Uo = class {};
var R = new D(""),
  $p = (() => {
    let e = class e {
      historyGo(n) {
        throw new Error("");
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵprov = b({ token: e, factory: () => _(lw), providedIn: "platform" }));
    let t = e;
    return t;
  })();
var lw = (() => {
  let e = class e extends $p {
    constructor() {
      super(),
        (this._doc = _(R)),
        (this._location = window.location),
        (this._history = window.history);
    }
    getBaseHrefFromDOM() {
      return $n().getBaseHref(this._doc);
    }
    onPopState(n) {
      let r = $n().getGlobalEventTarget(this._doc, "window");
      return (
        r.addEventListener("popstate", n, !1),
        () => r.removeEventListener("popstate", n)
      );
    }
    onHashChange(n) {
      let r = $n().getGlobalEventTarget(this._doc, "window");
      return (
        r.addEventListener("hashchange", n, !1),
        () => r.removeEventListener("hashchange", n)
      );
    }
    get href() {
      return this._location.href;
    }
    get protocol() {
      return this._location.protocol;
    }
    get hostname() {
      return this._location.hostname;
    }
    get port() {
      return this._location.port;
    }
    get pathname() {
      return this._location.pathname;
    }
    get search() {
      return this._location.search;
    }
    get hash() {
      return this._location.hash;
    }
    set pathname(n) {
      this._location.pathname = n;
    }
    pushState(n, r, o) {
      this._history.pushState(n, r, o);
    }
    replaceState(n, r, o) {
      this._history.replaceState(n, r, o);
    }
    forward() {
      this._history.forward();
    }
    back() {
      this._history.back();
    }
    historyGo(n = 0) {
      this._history.go(n);
    }
    getState() {
      return this._history.state;
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵprov = b({ token: e, factory: () => new e(), providedIn: "platform" }));
  let t = e;
  return t;
})();
function zp(t, e) {
  if (t.length == 0) return e;
  if (e.length == 0) return t;
  let i = 0;
  return (
    t.endsWith("/") && i++,
    e.startsWith("/") && i++,
    i == 2 ? t + e.substring(1) : i == 1 ? t + e : t + "/" + e
  );
}
function Fp(t) {
  let e = t.match(/#|\?|$/),
    i = (e && e.index) || t.length,
    n = i - (t[i - 1] === "/" ? 1 : 0);
  return t.slice(0, n) + t.slice(i);
}
function on(t) {
  return t && t[0] !== "?" ? "?" + t : t;
}
var ol = (() => {
    let e = class e {
      historyGo(n) {
        throw new Error("");
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵprov = b({ token: e, factory: () => _(uw), providedIn: "root" }));
    let t = e;
    return t;
  })(),
  dw = new D(""),
  uw = (() => {
    let e = class e extends ol {
      constructor(n, r) {
        super(),
          (this._platformLocation = n),
          (this._removeListenerFns = []),
          (this._baseHref =
            r ??
            this._platformLocation.getBaseHrefFromDOM() ??
            _(R).location?.origin ??
            "");
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length; )
          this._removeListenerFns.pop()();
      }
      onPopState(n) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(n),
          this._platformLocation.onHashChange(n),
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      prepareExternalUrl(n) {
        return zp(this._baseHref, n);
      }
      path(n = !1) {
        let r =
            this._platformLocation.pathname + on(this._platformLocation.search),
          o = this._platformLocation.hash;
        return o && n ? `${r}${o}` : r;
      }
      pushState(n, r, o, s) {
        let a = this.prepareExternalUrl(o + on(s));
        this._platformLocation.pushState(n, r, a);
      }
      replaceState(n, r, o, s) {
        let a = this.prepareExternalUrl(o + on(s));
        this._platformLocation.replaceState(n, r, a);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(n = 0) {
        this._platformLocation.historyGo?.(n);
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(p($p), p(dw, 8));
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })();
var ki = (() => {
  let e = class e {
    constructor(n) {
      (this._subject = new he()),
        (this._urlChangeListeners = []),
        (this._urlChangeSubscription = null),
        (this._locationStrategy = n);
      let r = this._locationStrategy.getBaseHref();
      (this._basePath = pw(Fp(Pp(r)))),
        this._locationStrategy.onPopState((o) => {
          this._subject.emit({
            url: this.path(!0),
            pop: !0,
            state: o.state,
            type: o.type,
          });
        });
    }
    ngOnDestroy() {
      this._urlChangeSubscription?.unsubscribe(),
        (this._urlChangeListeners = []);
    }
    path(n = !1) {
      return this.normalize(this._locationStrategy.path(n));
    }
    getState() {
      return this._locationStrategy.getState();
    }
    isCurrentPathEqualTo(n, r = "") {
      return this.path() == this.normalize(n + on(r));
    }
    normalize(n) {
      return e.stripTrailingSlash(hw(this._basePath, Pp(n)));
    }
    prepareExternalUrl(n) {
      return (
        n && n[0] !== "/" && (n = "/" + n),
        this._locationStrategy.prepareExternalUrl(n)
      );
    }
    go(n, r = "", o = null) {
      this._locationStrategy.pushState(o, "", n, r),
        this._notifyUrlChangeListeners(this.prepareExternalUrl(n + on(r)), o);
    }
    replaceState(n, r = "", o = null) {
      this._locationStrategy.replaceState(o, "", n, r),
        this._notifyUrlChangeListeners(this.prepareExternalUrl(n + on(r)), o);
    }
    forward() {
      this._locationStrategy.forward();
    }
    back() {
      this._locationStrategy.back();
    }
    historyGo(n = 0) {
      this._locationStrategy.historyGo?.(n);
    }
    onUrlChange(n) {
      return (
        this._urlChangeListeners.push(n),
        (this._urlChangeSubscription ??= this.subscribe((r) => {
          this._notifyUrlChangeListeners(r.url, r.state);
        })),
        () => {
          let r = this._urlChangeListeners.indexOf(n);
          this._urlChangeListeners.splice(r, 1),
            this._urlChangeListeners.length === 0 &&
              (this._urlChangeSubscription?.unsubscribe(),
              (this._urlChangeSubscription = null));
        }
      );
    }
    _notifyUrlChangeListeners(n = "", r) {
      this._urlChangeListeners.forEach((o) => o(n, r));
    }
    subscribe(n, r, o) {
      return this._subject.subscribe({ next: n, error: r, complete: o });
    }
  };
  (e.normalizeQueryParams = on),
    (e.joinWithSlash = zp),
    (e.stripTrailingSlash = Fp),
    (e.ɵfac = function (r) {
      return new (r || e)(p(ol));
    }),
    (e.ɵprov = b({ token: e, factory: () => fw(), providedIn: "root" }));
  let t = e;
  return t;
})();
function fw() {
  return new ki(p(ol));
}
function hw(t, e) {
  if (!t || !e.startsWith(t)) return e;
  let i = e.substring(t.length);
  return i === "" || ["/", ";", "?", "#"].includes(i[0]) ? i : e;
}
function Pp(t) {
  return t.replace(/\/index.html$/, "");
}
function pw(t) {
  if (new RegExp("^(https?:)?//").test(t)) {
    let [, i] = t.split(/\/\/[^\/]+/);
    return i;
  }
  return t;
}
var Wp = {
    ADP: [void 0, void 0, 0],
    AFN: [void 0, "\u060B", 0],
    ALL: [void 0, void 0, 0],
    AMD: [void 0, "\u058F", 2],
    AOA: [void 0, "Kz"],
    ARS: [void 0, "$"],
    AUD: ["A$", "$"],
    AZN: [void 0, "\u20BC"],
    BAM: [void 0, "KM"],
    BBD: [void 0, "$"],
    BDT: [void 0, "\u09F3"],
    BHD: [void 0, void 0, 3],
    BIF: [void 0, void 0, 0],
    BMD: [void 0, "$"],
    BND: [void 0, "$"],
    BOB: [void 0, "Bs"],
    BRL: ["R$"],
    BSD: [void 0, "$"],
    BWP: [void 0, "P"],
    BYN: [void 0, void 0, 2],
    BYR: [void 0, void 0, 0],
    BZD: [void 0, "$"],
    CAD: ["CA$", "$", 2],
    CHF: [void 0, void 0, 2],
    CLF: [void 0, void 0, 4],
    CLP: [void 0, "$", 0],
    CNY: ["CN\xA5", "\xA5"],
    COP: [void 0, "$", 2],
    CRC: [void 0, "\u20A1", 2],
    CUC: [void 0, "$"],
    CUP: [void 0, "$"],
    CZK: [void 0, "K\u010D", 2],
    DJF: [void 0, void 0, 0],
    DKK: [void 0, "kr", 2],
    DOP: [void 0, "$"],
    EGP: [void 0, "E\xA3"],
    ESP: [void 0, "\u20A7", 0],
    EUR: ["\u20AC"],
    FJD: [void 0, "$"],
    FKP: [void 0, "\xA3"],
    GBP: ["\xA3"],
    GEL: [void 0, "\u20BE"],
    GHS: [void 0, "GH\u20B5"],
    GIP: [void 0, "\xA3"],
    GNF: [void 0, "FG", 0],
    GTQ: [void 0, "Q"],
    GYD: [void 0, "$", 2],
    HKD: ["HK$", "$"],
    HNL: [void 0, "L"],
    HRK: [void 0, "kn"],
    HUF: [void 0, "Ft", 2],
    IDR: [void 0, "Rp", 2],
    ILS: ["\u20AA"],
    INR: ["\u20B9"],
    IQD: [void 0, void 0, 0],
    IRR: [void 0, void 0, 0],
    ISK: [void 0, "kr", 0],
    ITL: [void 0, void 0, 0],
    JMD: [void 0, "$"],
    JOD: [void 0, void 0, 3],
    JPY: ["\xA5", void 0, 0],
    KHR: [void 0, "\u17DB"],
    KMF: [void 0, "CF", 0],
    KPW: [void 0, "\u20A9", 0],
    KRW: ["\u20A9", void 0, 0],
    KWD: [void 0, void 0, 3],
    KYD: [void 0, "$"],
    KZT: [void 0, "\u20B8"],
    LAK: [void 0, "\u20AD", 0],
    LBP: [void 0, "L\xA3", 0],
    LKR: [void 0, "Rs"],
    LRD: [void 0, "$"],
    LTL: [void 0, "Lt"],
    LUF: [void 0, void 0, 0],
    LVL: [void 0, "Ls"],
    LYD: [void 0, void 0, 3],
    MGA: [void 0, "Ar", 0],
    MGF: [void 0, void 0, 0],
    MMK: [void 0, "K", 0],
    MNT: [void 0, "\u20AE", 2],
    MRO: [void 0, void 0, 0],
    MUR: [void 0, "Rs", 2],
    MXN: ["MX$", "$"],
    MYR: [void 0, "RM"],
    NAD: [void 0, "$"],
    NGN: [void 0, "\u20A6"],
    NIO: [void 0, "C$"],
    NOK: [void 0, "kr", 2],
    NPR: [void 0, "Rs"],
    NZD: ["NZ$", "$"],
    OMR: [void 0, void 0, 3],
    PHP: ["\u20B1"],
    PKR: [void 0, "Rs", 2],
    PLN: [void 0, "z\u0142"],
    PYG: [void 0, "\u20B2", 0],
    RON: [void 0, "lei"],
    RSD: [void 0, void 0, 0],
    RUB: [void 0, "\u20BD"],
    RWF: [void 0, "RF", 0],
    SBD: [void 0, "$"],
    SEK: [void 0, "kr", 2],
    SGD: [void 0, "$"],
    SHP: [void 0, "\xA3"],
    SLE: [void 0, void 0, 2],
    SLL: [void 0, void 0, 0],
    SOS: [void 0, void 0, 0],
    SRD: [void 0, "$"],
    SSP: [void 0, "\xA3"],
    STD: [void 0, void 0, 0],
    STN: [void 0, "Db"],
    SYP: [void 0, "\xA3", 0],
    THB: [void 0, "\u0E3F"],
    TMM: [void 0, void 0, 0],
    TND: [void 0, void 0, 3],
    TOP: [void 0, "T$"],
    TRL: [void 0, void 0, 0],
    TRY: [void 0, "\u20BA"],
    TTD: [void 0, "$"],
    TWD: ["NT$", "$", 2],
    TZS: [void 0, void 0, 2],
    UAH: [void 0, "\u20B4"],
    UGX: [void 0, void 0, 0],
    USD: ["$"],
    UYI: [void 0, void 0, 0],
    UYU: [void 0, "$"],
    UYW: [void 0, void 0, 4],
    UZS: [void 0, void 0, 2],
    VEF: [void 0, "Bs", 2],
    VND: ["\u20AB", void 0, 0],
    VUV: [void 0, void 0, 0],
    XAF: ["FCFA", void 0, 0],
    XCD: ["EC$", "$"],
    XOF: ["F\u202FCFA", void 0, 0],
    XPF: ["CFPF", void 0, 0],
    XXX: ["\xA4"],
    YER: [void 0, void 0, 0],
    ZAR: [void 0, "R"],
    ZMK: [void 0, void 0, 0],
    ZMW: [void 0, "ZK"],
    ZWD: [void 0, void 0, 0],
  },
  sl = (function (t) {
    return (
      (t[(t.Decimal = 0)] = "Decimal"),
      (t[(t.Percent = 1)] = "Percent"),
      (t[(t.Currency = 2)] = "Currency"),
      (t[(t.Scientific = 3)] = "Scientific"),
      t
    );
  })(sl || {});
var Me = {
  Decimal: 0,
  Group: 1,
  List: 2,
  PercentSign: 3,
  PlusSign: 4,
  MinusSign: 5,
  Exponential: 6,
  SuperscriptingExponent: 7,
  PerMille: 8,
  Infinity: 9,
  NaN: 10,
  TimeSeparator: 11,
  CurrencyDecimal: 12,
  CurrencyGroup: 13,
};
function Un(t, e) {
  let i = Bo(t),
    n = i[rn.NumberSymbols][e];
  if (typeof n > "u") {
    if (e === Me.CurrencyDecimal) return i[rn.NumberSymbols][Me.Decimal];
    if (e === Me.CurrencyGroup) return i[rn.NumberSymbols][Me.Group];
  }
  return n;
}
function Gp(t, e) {
  return Bo(t)[rn.NumberFormats][e];
}
function mw(t) {
  return Bo(t)[rn.Currencies];
}
function gw(t, e, i = "en") {
  let n = mw(i)[t] || Wp[t] || [],
    r = n[1];
  return e === "narrow" && typeof r == "string" ? r : n[0] || t;
}
var bw = 2;
function vw(t) {
  let e,
    i = Wp[t];
  return i && (e = i[2]), typeof e == "number" ? e : bw;
}
var yw = /^(\d+)?\.((\d+)(-(\d+))?)?$/,
  Lp = 22,
  $o = ".",
  Ri = "0",
  _w = ";",
  Dw = ",",
  nl = "#",
  jp = "\xA4";
function qp(t, e, i, n, r, o, s = !1) {
  let a = "",
    c = !1;
  if (!isFinite(t)) a = Un(i, Me.Infinity);
  else {
    let l = xw(t);
    s && (l = Iw(l));
    let d = e.minInt,
      u = e.minFrac,
      f = e.maxFrac;
    if (o) {
      let V = o.match(yw);
      if (V === null) throw new Error(`${o} is not a valid digit info`);
      let K = V[1],
        B = V[3],
        be = V[5];
      K != null && (d = il(K)),
        B != null && (u = il(B)),
        be != null ? (f = il(be)) : B != null && u > f && (f = u);
    }
    Cw(l, u, f);
    let h = l.digits,
      m = l.integerLen,
      g = l.exponent,
      v = [];
    for (c = h.every((V) => !V); m < d; m++) h.unshift(0);
    for (; m < 0; m++) h.unshift(0);
    m > 0 ? (v = h.splice(m, h.length)) : ((v = h), (h = [0]));
    let y = [];
    for (
      h.length >= e.lgSize && y.unshift(h.splice(-e.lgSize, h.length).join(""));
      h.length > e.gSize;

    )
      y.unshift(h.splice(-e.gSize, h.length).join(""));
    h.length && y.unshift(h.join("")),
      (a = y.join(Un(i, n))),
      v.length && (a += Un(i, r) + v.join("")),
      g && (a += Un(i, Me.Exponential) + "+" + g);
  }
  return (
    t < 0 && !c ? (a = e.negPre + a + e.negSuf) : (a = e.posPre + a + e.posSuf),
    a
  );
}
function ww(t, e, i, n, r) {
  let o = Gp(e, sl.Currency),
    s = Yp(o, Un(e, Me.MinusSign));
  return (
    (s.minFrac = vw(n)),
    (s.maxFrac = s.minFrac),
    qp(t, s, e, Me.CurrencyGroup, Me.CurrencyDecimal, r)
      .replace(jp, i)
      .replace(jp, "")
      .trim()
  );
}
function Ew(t, e, i) {
  let n = Gp(e, sl.Decimal),
    r = Yp(n, Un(e, Me.MinusSign));
  return qp(t, r, e, Me.Group, Me.Decimal, i);
}
function Yp(t, e = "-") {
  let i = {
      minInt: 1,
      minFrac: 0,
      maxFrac: 0,
      posPre: "",
      posSuf: "",
      negPre: "",
      negSuf: "",
      gSize: 0,
      lgSize: 0,
    },
    n = t.split(_w),
    r = n[0],
    o = n[1],
    s =
      r.indexOf($o) !== -1
        ? r.split($o)
        : [
            r.substring(0, r.lastIndexOf(Ri) + 1),
            r.substring(r.lastIndexOf(Ri) + 1),
          ],
    a = s[0],
    c = s[1] || "";
  i.posPre = a.substring(0, a.indexOf(nl));
  for (let d = 0; d < c.length; d++) {
    let u = c.charAt(d);
    u === Ri
      ? (i.minFrac = i.maxFrac = d + 1)
      : u === nl
        ? (i.maxFrac = d + 1)
        : (i.posSuf += u);
  }
  let l = a.split(Dw);
  if (
    ((i.gSize = l[1] ? l[1].length : 0),
    (i.lgSize = l[2] || l[1] ? (l[2] || l[1]).length : 0),
    o)
  ) {
    let d = r.length - i.posPre.length - i.posSuf.length,
      u = o.indexOf(nl);
    (i.negPre = o.substring(0, u).replace(/'/g, "")),
      (i.negSuf = o.slice(u + d).replace(/'/g, ""));
  } else (i.negPre = e + i.posPre), (i.negSuf = i.posSuf);
  return i;
}
function Iw(t) {
  if (t.digits[0] === 0) return t;
  let e = t.digits.length - t.integerLen;
  return (
    t.exponent
      ? (t.exponent += 2)
      : (e === 0 ? t.digits.push(0, 0) : e === 1 && t.digits.push(0),
        (t.integerLen += 2)),
    t
  );
}
function xw(t) {
  let e = Math.abs(t) + "",
    i = 0,
    n,
    r,
    o,
    s,
    a;
  for (
    (r = e.indexOf($o)) > -1 && (e = e.replace($o, "")),
      (o = e.search(/e/i)) > 0
        ? (r < 0 && (r = o), (r += +e.slice(o + 1)), (e = e.substring(0, o)))
        : r < 0 && (r = e.length),
      o = 0;
    e.charAt(o) === Ri;
    o++
  );
  if (o === (a = e.length)) (n = [0]), (r = 1);
  else {
    for (a--; e.charAt(a) === Ri; ) a--;
    for (r -= o, n = [], s = 0; o <= a; o++, s++) n[s] = Number(e.charAt(o));
  }
  return (
    r > Lp && ((n = n.splice(0, Lp - 1)), (i = r - 1), (r = 1)),
    { digits: n, exponent: i, integerLen: r }
  );
}
function Cw(t, e, i) {
  if (e > i)
    throw new Error(
      `The minimum number of digits after fraction (${e}) is higher than the maximum (${i}).`,
    );
  let n = t.digits,
    r = n.length - t.integerLen,
    o = Math.min(Math.max(e, r), i),
    s = o + t.integerLen,
    a = n[s];
  if (s > 0) {
    n.splice(Math.max(t.integerLen, s));
    for (let u = s; u < n.length; u++) n[u] = 0;
  } else {
    (r = Math.max(0, r)),
      (t.integerLen = 1),
      (n.length = Math.max(1, (s = o + 1))),
      (n[0] = 0);
    for (let u = 1; u < s; u++) n[u] = 0;
  }
  if (a >= 5)
    if (s - 1 < 0) {
      for (let u = 0; u > s; u--) n.unshift(0), t.integerLen++;
      n.unshift(1), t.integerLen++;
    } else n[s - 1]++;
  for (; r < Math.max(0, o); r++) n.push(0);
  let c = o !== 0,
    l = e + t.integerLen,
    d = n.reduceRight(function (u, f, h, m) {
      return (
        (f = f + u),
        (m[h] = f < 10 ? f : f - 10),
        c && (m[h] === 0 && h >= l ? m.pop() : (c = !1)),
        f >= 10 ? 1 : 0
      );
    }, 0);
  d && (n.unshift(d), t.integerLen++);
}
function il(t) {
  let e = parseInt(t);
  if (isNaN(e)) throw new Error("Invalid integer literal when parsing " + t);
  return e;
}
function zo(t, e) {
  e = encodeURIComponent(e);
  for (let i of t.split(";")) {
    let n = i.indexOf("="),
      [r, o] = n == -1 ? [i, ""] : [i.slice(0, n), i.slice(n + 1)];
    if (r.trim() === e) return decodeURIComponent(o);
  }
  return null;
}
var rl = /\s+/,
  Vp = [],
  wR = (() => {
    let e = class e {
      constructor(n, r) {
        (this._ngEl = n),
          (this._renderer = r),
          (this.initialClasses = Vp),
          (this.stateMap = new Map());
      }
      set klass(n) {
        this.initialClasses = n != null ? n.trim().split(rl) : Vp;
      }
      set ngClass(n) {
        this.rawClass = typeof n == "string" ? n.trim().split(rl) : n;
      }
      ngDoCheck() {
        for (let r of this.initialClasses) this._updateState(r, !0);
        let n = this.rawClass;
        if (Array.isArray(n) || n instanceof Set)
          for (let r of n) this._updateState(r, !0);
        else if (n != null)
          for (let r of Object.keys(n)) this._updateState(r, !!n[r]);
        this._applyStateDiff();
      }
      _updateState(n, r) {
        let o = this.stateMap.get(n);
        o !== void 0
          ? (o.enabled !== r && ((o.changed = !0), (o.enabled = r)),
            (o.touched = !0))
          : this.stateMap.set(n, { enabled: r, changed: !0, touched: !0 });
      }
      _applyStateDiff() {
        for (let n of this.stateMap) {
          let r = n[0],
            o = n[1];
          o.changed
            ? (this._toggleClass(r, o.enabled), (o.changed = !1))
            : o.touched ||
              (o.enabled && this._toggleClass(r, !1), this.stateMap.delete(r)),
            (o.touched = !1);
        }
      }
      _toggleClass(n, r) {
        (n = n.trim()),
          n.length > 0 &&
            n.split(rl).forEach((o) => {
              r
                ? this._renderer.addClass(this._ngEl.nativeElement, o)
                : this._renderer.removeClass(this._ngEl.nativeElement, o);
            });
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(F(q), F(zc));
    }),
      (e.ɵdir = Q({
        type: e,
        selectors: [["", "ngClass", ""]],
        inputs: { klass: [U.None, "class", "klass"], ngClass: "ngClass" },
        standalone: !0,
      }));
    let t = e;
    return t;
  })();
var ER = (() => {
  let e = class e {
    constructor(n) {
      (this._viewContainerRef = n),
        (this._viewRef = null),
        (this.ngTemplateOutletContext = null),
        (this.ngTemplateOutlet = null),
        (this.ngTemplateOutletInjector = null);
    }
    ngOnChanges(n) {
      if (this._shouldRecreateView(n)) {
        let r = this._viewContainerRef;
        if (
          (this._viewRef && r.remove(r.indexOf(this._viewRef)),
          !this.ngTemplateOutlet)
        ) {
          this._viewRef = null;
          return;
        }
        let o = this._createContextForwardProxy();
        this._viewRef = r.createEmbeddedView(this.ngTemplateOutlet, o, {
          injector: this.ngTemplateOutletInjector ?? void 0,
        });
      }
    }
    _shouldRecreateView(n) {
      return !!n.ngTemplateOutlet || !!n.ngTemplateOutletInjector;
    }
    _createContextForwardProxy() {
      return new Proxy(
        {},
        {
          set: (n, r, o) =>
            this.ngTemplateOutletContext
              ? Reflect.set(this.ngTemplateOutletContext, r, o)
              : !1,
          get: (n, r, o) => {
            if (this.ngTemplateOutletContext)
              return Reflect.get(this.ngTemplateOutletContext, r, o);
          },
        },
      );
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(F(dt));
  }),
    (e.ɵdir = Q({
      type: e,
      selectors: [["", "ngTemplateOutlet", ""]],
      inputs: {
        ngTemplateOutletContext: "ngTemplateOutletContext",
        ngTemplateOutlet: "ngTemplateOutlet",
        ngTemplateOutletInjector: "ngTemplateOutletInjector",
      },
      standalone: !0,
      features: [kn],
    }));
  let t = e;
  return t;
})();
function Zp(t, e) {
  return new x(2100, !1);
}
var IR = (() => {
  let e = class e {
    constructor(n) {
      this._locale = n;
    }
    transform(n, r, o) {
      if (!Kp(n)) return null;
      o ||= this._locale;
      try {
        let s = Xp(n);
        return Ew(s, o, r);
      } catch (s) {
        throw Zp(e, s.message);
      }
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(F(Hn, 16));
  }),
    (e.ɵpipe = hc({ name: "number", type: e, pure: !0, standalone: !0 }));
  let t = e;
  return t;
})();
var xR = (() => {
  let e = class e {
    constructor(n, r = "USD") {
      (this._locale = n), (this._defaultCurrencyCode = r);
    }
    transform(n, r = this._defaultCurrencyCode, o = "symbol", s, a) {
      if (!Kp(n)) return null;
      (a ||= this._locale),
        typeof o == "boolean" && (o = o ? "symbol" : "code");
      let c = r || this._defaultCurrencyCode;
      o !== "code" &&
        (o === "symbol" || o === "symbol-narrow"
          ? (c = gw(c, o === "symbol" ? "wide" : "narrow", a))
          : (c = o));
      try {
        let l = Xp(n);
        return ww(l, a, c, r, s);
      } catch (l) {
        throw Zp(e, l.message);
      }
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(F(Hn, 16), F(Sp, 16));
  }),
    (e.ɵpipe = hc({ name: "currency", type: e, pure: !0, standalone: !0 }));
  let t = e;
  return t;
})();
function Kp(t) {
  return !(t == null || t === "" || t !== t);
}
function Xp(t) {
  if (typeof t == "string" && !isNaN(Number(t) - parseFloat(t)))
    return Number(t);
  if (typeof t != "number") throw new Error(`${t} is not a number`);
  return t;
}
var al = "browser",
  Mw = "server";
function Qp(t) {
  return t === al;
}
function cl(t) {
  return t === Mw;
}
var zn = class {};
var Pi = class {},
  Go = class {},
  sn = class t {
    constructor(e) {
      (this.normalizedNames = new Map()),
        (this.lazyUpdate = null),
        e
          ? typeof e == "string"
            ? (this.lazyInit = () => {
                (this.headers = new Map()),
                  e
                    .split(
                      `
`,
                    )
                    .forEach((i) => {
                      let n = i.indexOf(":");
                      if (n > 0) {
                        let r = i.slice(0, n),
                          o = r.toLowerCase(),
                          s = i.slice(n + 1).trim();
                        this.maybeSetNormalizedName(r, o),
                          this.headers.has(o)
                            ? this.headers.get(o).push(s)
                            : this.headers.set(o, [s]);
                      }
                    });
              })
            : typeof Headers < "u" && e instanceof Headers
              ? ((this.headers = new Map()),
                e.forEach((i, n) => {
                  this.setHeaderEntries(n, i);
                }))
              : (this.lazyInit = () => {
                  (this.headers = new Map()),
                    Object.entries(e).forEach(([i, n]) => {
                      this.setHeaderEntries(i, n);
                    });
                })
          : (this.headers = new Map());
    }
    has(e) {
      return this.init(), this.headers.has(e.toLowerCase());
    }
    get(e) {
      this.init();
      let i = this.headers.get(e.toLowerCase());
      return i && i.length > 0 ? i[0] : null;
    }
    keys() {
      return this.init(), Array.from(this.normalizedNames.values());
    }
    getAll(e) {
      return this.init(), this.headers.get(e.toLowerCase()) || null;
    }
    append(e, i) {
      return this.clone({ name: e, value: i, op: "a" });
    }
    set(e, i) {
      return this.clone({ name: e, value: i, op: "s" });
    }
    delete(e, i) {
      return this.clone({ name: e, value: i, op: "d" });
    }
    maybeSetNormalizedName(e, i) {
      this.normalizedNames.has(i) || this.normalizedNames.set(i, e);
    }
    init() {
      this.lazyInit &&
        (this.lazyInit instanceof t
          ? this.copyFrom(this.lazyInit)
          : this.lazyInit(),
        (this.lazyInit = null),
        this.lazyUpdate &&
          (this.lazyUpdate.forEach((e) => this.applyUpdate(e)),
          (this.lazyUpdate = null)));
    }
    copyFrom(e) {
      e.init(),
        Array.from(e.headers.keys()).forEach((i) => {
          this.headers.set(i, e.headers.get(i)),
            this.normalizedNames.set(i, e.normalizedNames.get(i));
        });
    }
    clone(e) {
      let i = new t();
      return (
        (i.lazyInit =
          this.lazyInit && this.lazyInit instanceof t ? this.lazyInit : this),
        (i.lazyUpdate = (this.lazyUpdate || []).concat([e])),
        i
      );
    }
    applyUpdate(e) {
      let i = e.name.toLowerCase();
      switch (e.op) {
        case "a":
        case "s":
          let n = e.value;
          if ((typeof n == "string" && (n = [n]), n.length === 0)) return;
          this.maybeSetNormalizedName(e.name, i);
          let r = (e.op === "a" ? this.headers.get(i) : void 0) || [];
          r.push(...n), this.headers.set(i, r);
          break;
        case "d":
          let o = e.value;
          if (!o) this.headers.delete(i), this.normalizedNames.delete(i);
          else {
            let s = this.headers.get(i);
            if (!s) return;
            (s = s.filter((a) => o.indexOf(a) === -1)),
              s.length === 0
                ? (this.headers.delete(i), this.normalizedNames.delete(i))
                : this.headers.set(i, s);
          }
          break;
      }
    }
    setHeaderEntries(e, i) {
      let n = (Array.isArray(i) ? i : [i]).map((o) => o.toString()),
        r = e.toLowerCase();
      this.headers.set(r, n), this.maybeSetNormalizedName(e, r);
    }
    forEach(e) {
      this.init(),
        Array.from(this.normalizedNames.keys()).forEach((i) =>
          e(this.normalizedNames.get(i), this.headers.get(i)),
        );
    }
  };
var dl = class {
  encodeKey(e) {
    return em(e);
  }
  encodeValue(e) {
    return em(e);
  }
  decodeKey(e) {
    return decodeURIComponent(e);
  }
  decodeValue(e) {
    return decodeURIComponent(e);
  }
};
function Aw(t, e) {
  let i = new Map();
  return (
    t.length > 0 &&
      t
        .replace(/^\?/, "")
        .split("&")
        .forEach((r) => {
          let o = r.indexOf("="),
            [s, a] =
              o == -1
                ? [e.decodeKey(r), ""]
                : [e.decodeKey(r.slice(0, o)), e.decodeValue(r.slice(o + 1))],
            c = i.get(s) || [];
          c.push(a), i.set(s, c);
        }),
    i
  );
}
var Nw = /%(\d[a-f0-9])/gi,
  Ow = {
    40: "@",
    "3A": ":",
    24: "$",
    "2C": ",",
    "3B": ";",
    "3D": "=",
    "3F": "?",
    "2F": "/",
  };
function em(t) {
  return encodeURIComponent(t).replace(Nw, (e, i) => Ow[i] ?? e);
}
function Wo(t) {
  return `${t}`;
}
var Rt = class t {
  constructor(e = {}) {
    if (
      ((this.updates = null),
      (this.cloneFrom = null),
      (this.encoder = e.encoder || new dl()),
      e.fromString)
    ) {
      if (e.fromObject)
        throw new Error("Cannot specify both fromString and fromObject.");
      this.map = Aw(e.fromString, this.encoder);
    } else
      e.fromObject
        ? ((this.map = new Map()),
          Object.keys(e.fromObject).forEach((i) => {
            let n = e.fromObject[i],
              r = Array.isArray(n) ? n.map(Wo) : [Wo(n)];
            this.map.set(i, r);
          }))
        : (this.map = null);
  }
  has(e) {
    return this.init(), this.map.has(e);
  }
  get(e) {
    this.init();
    let i = this.map.get(e);
    return i ? i[0] : null;
  }
  getAll(e) {
    return this.init(), this.map.get(e) || null;
  }
  keys() {
    return this.init(), Array.from(this.map.keys());
  }
  append(e, i) {
    return this.clone({ param: e, value: i, op: "a" });
  }
  appendAll(e) {
    let i = [];
    return (
      Object.keys(e).forEach((n) => {
        let r = e[n];
        Array.isArray(r)
          ? r.forEach((o) => {
              i.push({ param: n, value: o, op: "a" });
            })
          : i.push({ param: n, value: r, op: "a" });
      }),
      this.clone(i)
    );
  }
  set(e, i) {
    return this.clone({ param: e, value: i, op: "s" });
  }
  delete(e, i) {
    return this.clone({ param: e, value: i, op: "d" });
  }
  toString() {
    return (
      this.init(),
      this.keys()
        .map((e) => {
          let i = this.encoder.encodeKey(e);
          return this.map
            .get(e)
            .map((n) => i + "=" + this.encoder.encodeValue(n))
            .join("&");
        })
        .filter((e) => e !== "")
        .join("&")
    );
  }
  clone(e) {
    let i = new t({ encoder: this.encoder });
    return (
      (i.cloneFrom = this.cloneFrom || this),
      (i.updates = (this.updates || []).concat(e)),
      i
    );
  }
  init() {
    this.map === null && (this.map = new Map()),
      this.cloneFrom !== null &&
        (this.cloneFrom.init(),
        this.cloneFrom
          .keys()
          .forEach((e) => this.map.set(e, this.cloneFrom.map.get(e))),
        this.updates.forEach((e) => {
          switch (e.op) {
            case "a":
            case "s":
              let i = (e.op === "a" ? this.map.get(e.param) : void 0) || [];
              i.push(Wo(e.value)), this.map.set(e.param, i);
              break;
            case "d":
              if (e.value !== void 0) {
                let n = this.map.get(e.param) || [],
                  r = n.indexOf(Wo(e.value));
                r !== -1 && n.splice(r, 1),
                  n.length > 0
                    ? this.map.set(e.param, n)
                    : this.map.delete(e.param);
              } else {
                this.map.delete(e.param);
                break;
              }
          }
        }),
        (this.cloneFrom = this.updates = null));
  }
};
var ul = class {
  constructor() {
    this.map = new Map();
  }
  set(e, i) {
    return this.map.set(e, i), this;
  }
  get(e) {
    return (
      this.map.has(e) || this.map.set(e, e.defaultValue()), this.map.get(e)
    );
  }
  delete(e) {
    return this.map.delete(e), this;
  }
  has(e) {
    return this.map.has(e);
  }
  keys() {
    return this.map.keys();
  }
};
function Rw(t) {
  switch (t) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP":
      return !1;
    default:
      return !0;
  }
}
function tm(t) {
  return typeof ArrayBuffer < "u" && t instanceof ArrayBuffer;
}
function nm(t) {
  return typeof Blob < "u" && t instanceof Blob;
}
function im(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function kw(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
var Fi = class t {
    constructor(e, i, n, r) {
      (this.url = i),
        (this.body = null),
        (this.reportProgress = !1),
        (this.withCredentials = !1),
        (this.responseType = "json"),
        (this.method = e.toUpperCase());
      let o;
      if (
        (Rw(this.method) || r
          ? ((this.body = n !== void 0 ? n : null), (o = r))
          : (o = n),
        o &&
          ((this.reportProgress = !!o.reportProgress),
          (this.withCredentials = !!o.withCredentials),
          o.responseType && (this.responseType = o.responseType),
          o.headers && (this.headers = o.headers),
          o.context && (this.context = o.context),
          o.params && (this.params = o.params),
          (this.transferCache = o.transferCache)),
        (this.headers ??= new sn()),
        (this.context ??= new ul()),
        !this.params)
      )
        (this.params = new Rt()), (this.urlWithParams = i);
      else {
        let s = this.params.toString();
        if (s.length === 0) this.urlWithParams = i;
        else {
          let a = i.indexOf("?"),
            c = a === -1 ? "?" : a < i.length - 1 ? "&" : "";
          this.urlWithParams = i + c + s;
        }
      }
    }
    serializeBody() {
      return this.body === null
        ? null
        : tm(this.body) ||
            nm(this.body) ||
            im(this.body) ||
            kw(this.body) ||
            typeof this.body == "string"
          ? this.body
          : this.body instanceof Rt
            ? this.body.toString()
            : typeof this.body == "object" ||
                typeof this.body == "boolean" ||
                Array.isArray(this.body)
              ? JSON.stringify(this.body)
              : this.body.toString();
    }
    detectContentTypeHeader() {
      return this.body === null || im(this.body)
        ? null
        : nm(this.body)
          ? this.body.type || null
          : tm(this.body)
            ? null
            : typeof this.body == "string"
              ? "text/plain"
              : this.body instanceof Rt
                ? "application/x-www-form-urlencoded;charset=UTF-8"
                : typeof this.body == "object" ||
                    typeof this.body == "number" ||
                    typeof this.body == "boolean"
                  ? "application/json"
                  : null;
    }
    clone(e = {}) {
      let i = e.method || this.method,
        n = e.url || this.url,
        r = e.responseType || this.responseType,
        o = e.body !== void 0 ? e.body : this.body,
        s =
          e.withCredentials !== void 0
            ? e.withCredentials
            : this.withCredentials,
        a =
          e.reportProgress !== void 0 ? e.reportProgress : this.reportProgress,
        c = e.headers || this.headers,
        l = e.params || this.params,
        d = e.context ?? this.context;
      return (
        e.setHeaders !== void 0 &&
          (c = Object.keys(e.setHeaders).reduce(
            (u, f) => u.set(f, e.setHeaders[f]),
            c,
          )),
        e.setParams &&
          (l = Object.keys(e.setParams).reduce(
            (u, f) => u.set(f, e.setParams[f]),
            l,
          )),
        new t(i, n, o, {
          params: l,
          headers: c,
          context: d,
          reportProgress: a,
          responseType: r,
          withCredentials: s,
        })
      );
    }
  },
  Wn = (function (t) {
    return (
      (t[(t.Sent = 0)] = "Sent"),
      (t[(t.UploadProgress = 1)] = "UploadProgress"),
      (t[(t.ResponseHeader = 2)] = "ResponseHeader"),
      (t[(t.DownloadProgress = 3)] = "DownloadProgress"),
      (t[(t.Response = 4)] = "Response"),
      (t[(t.User = 5)] = "User"),
      t
    );
  })(Wn || {}),
  Li = class {
    constructor(e, i = Zo.Ok, n = "OK") {
      (this.headers = e.headers || new sn()),
        (this.status = e.status !== void 0 ? e.status : i),
        (this.statusText = e.statusText || n),
        (this.url = e.url || null),
        (this.ok = this.status >= 200 && this.status < 300);
    }
  },
  fl = class t extends Li {
    constructor(e = {}) {
      super(e), (this.type = Wn.ResponseHeader);
    }
    clone(e = {}) {
      return new t({
        headers: e.headers || this.headers,
        status: e.status !== void 0 ? e.status : this.status,
        statusText: e.statusText || this.statusText,
        url: e.url || this.url || void 0,
      });
    }
  },
  qo = class t extends Li {
    constructor(e = {}) {
      super(e),
        (this.type = Wn.Response),
        (this.body = e.body !== void 0 ? e.body : null);
    }
    clone(e = {}) {
      return new t({
        body: e.body !== void 0 ? e.body : this.body,
        headers: e.headers || this.headers,
        status: e.status !== void 0 ? e.status : this.status,
        statusText: e.statusText || this.statusText,
        url: e.url || this.url || void 0,
      });
    }
  },
  Yo = class extends Li {
    constructor(e) {
      super(e, 0, "Unknown Error"),
        (this.name = "HttpErrorResponse"),
        (this.ok = !1),
        this.status >= 200 && this.status < 300
          ? (this.message = `Http failure during parsing for ${e.url || "(unknown url)"}`)
          : (this.message = `Http failure response for ${e.url || "(unknown url)"}: ${e.status} ${e.statusText}`),
        (this.error = e.error || null);
    }
  },
  Zo = (function (t) {
    return (
      (t[(t.Continue = 100)] = "Continue"),
      (t[(t.SwitchingProtocols = 101)] = "SwitchingProtocols"),
      (t[(t.Processing = 102)] = "Processing"),
      (t[(t.EarlyHints = 103)] = "EarlyHints"),
      (t[(t.Ok = 200)] = "Ok"),
      (t[(t.Created = 201)] = "Created"),
      (t[(t.Accepted = 202)] = "Accepted"),
      (t[(t.NonAuthoritativeInformation = 203)] =
        "NonAuthoritativeInformation"),
      (t[(t.NoContent = 204)] = "NoContent"),
      (t[(t.ResetContent = 205)] = "ResetContent"),
      (t[(t.PartialContent = 206)] = "PartialContent"),
      (t[(t.MultiStatus = 207)] = "MultiStatus"),
      (t[(t.AlreadyReported = 208)] = "AlreadyReported"),
      (t[(t.ImUsed = 226)] = "ImUsed"),
      (t[(t.MultipleChoices = 300)] = "MultipleChoices"),
      (t[(t.MovedPermanently = 301)] = "MovedPermanently"),
      (t[(t.Found = 302)] = "Found"),
      (t[(t.SeeOther = 303)] = "SeeOther"),
      (t[(t.NotModified = 304)] = "NotModified"),
      (t[(t.UseProxy = 305)] = "UseProxy"),
      (t[(t.Unused = 306)] = "Unused"),
      (t[(t.TemporaryRedirect = 307)] = "TemporaryRedirect"),
      (t[(t.PermanentRedirect = 308)] = "PermanentRedirect"),
      (t[(t.BadRequest = 400)] = "BadRequest"),
      (t[(t.Unauthorized = 401)] = "Unauthorized"),
      (t[(t.PaymentRequired = 402)] = "PaymentRequired"),
      (t[(t.Forbidden = 403)] = "Forbidden"),
      (t[(t.NotFound = 404)] = "NotFound"),
      (t[(t.MethodNotAllowed = 405)] = "MethodNotAllowed"),
      (t[(t.NotAcceptable = 406)] = "NotAcceptable"),
      (t[(t.ProxyAuthenticationRequired = 407)] =
        "ProxyAuthenticationRequired"),
      (t[(t.RequestTimeout = 408)] = "RequestTimeout"),
      (t[(t.Conflict = 409)] = "Conflict"),
      (t[(t.Gone = 410)] = "Gone"),
      (t[(t.LengthRequired = 411)] = "LengthRequired"),
      (t[(t.PreconditionFailed = 412)] = "PreconditionFailed"),
      (t[(t.PayloadTooLarge = 413)] = "PayloadTooLarge"),
      (t[(t.UriTooLong = 414)] = "UriTooLong"),
      (t[(t.UnsupportedMediaType = 415)] = "UnsupportedMediaType"),
      (t[(t.RangeNotSatisfiable = 416)] = "RangeNotSatisfiable"),
      (t[(t.ExpectationFailed = 417)] = "ExpectationFailed"),
      (t[(t.ImATeapot = 418)] = "ImATeapot"),
      (t[(t.MisdirectedRequest = 421)] = "MisdirectedRequest"),
      (t[(t.UnprocessableEntity = 422)] = "UnprocessableEntity"),
      (t[(t.Locked = 423)] = "Locked"),
      (t[(t.FailedDependency = 424)] = "FailedDependency"),
      (t[(t.TooEarly = 425)] = "TooEarly"),
      (t[(t.UpgradeRequired = 426)] = "UpgradeRequired"),
      (t[(t.PreconditionRequired = 428)] = "PreconditionRequired"),
      (t[(t.TooManyRequests = 429)] = "TooManyRequests"),
      (t[(t.RequestHeaderFieldsTooLarge = 431)] =
        "RequestHeaderFieldsTooLarge"),
      (t[(t.UnavailableForLegalReasons = 451)] = "UnavailableForLegalReasons"),
      (t[(t.InternalServerError = 500)] = "InternalServerError"),
      (t[(t.NotImplemented = 501)] = "NotImplemented"),
      (t[(t.BadGateway = 502)] = "BadGateway"),
      (t[(t.ServiceUnavailable = 503)] = "ServiceUnavailable"),
      (t[(t.GatewayTimeout = 504)] = "GatewayTimeout"),
      (t[(t.HttpVersionNotSupported = 505)] = "HttpVersionNotSupported"),
      (t[(t.VariantAlsoNegotiates = 506)] = "VariantAlsoNegotiates"),
      (t[(t.InsufficientStorage = 507)] = "InsufficientStorage"),
      (t[(t.LoopDetected = 508)] = "LoopDetected"),
      (t[(t.NotExtended = 510)] = "NotExtended"),
      (t[(t.NetworkAuthenticationRequired = 511)] =
        "NetworkAuthenticationRequired"),
      t
    );
  })(Zo || {});
function ll(t, e) {
  return {
    body: e,
    headers: t.headers,
    context: t.context,
    observe: t.observe,
    params: t.params,
    reportProgress: t.reportProgress,
    responseType: t.responseType,
    withCredentials: t.withCredentials,
    transferCache: t.transferCache,
  };
}
var hl = (() => {
  let e = class e {
    constructor(n) {
      this.handler = n;
    }
    request(n, r, o = {}) {
      let s;
      if (n instanceof Fi) s = n;
      else {
        let l;
        o.headers instanceof sn ? (l = o.headers) : (l = new sn(o.headers));
        let d;
        o.params &&
          (o.params instanceof Rt
            ? (d = o.params)
            : (d = new Rt({ fromObject: o.params }))),
          (s = new Fi(n, r, o.body !== void 0 ? o.body : null, {
            headers: l,
            context: o.context,
            params: d,
            reportProgress: o.reportProgress,
            responseType: o.responseType || "json",
            withCredentials: o.withCredentials,
            transferCache: o.transferCache,
          }));
      }
      let a = Ae(s).pipe(Rs((l) => this.handler.handle(l)));
      if (n instanceof Fi || o.observe === "events") return a;
      let c = a.pipe(ne((l) => l instanceof qo));
      switch (o.observe || "body") {
        case "body":
          switch (s.responseType) {
            case "arraybuffer":
              return c.pipe(
                G((l) => {
                  if (l.body !== null && !(l.body instanceof ArrayBuffer))
                    throw new Error("Response is not an ArrayBuffer.");
                  return l.body;
                }),
              );
            case "blob":
              return c.pipe(
                G((l) => {
                  if (l.body !== null && !(l.body instanceof Blob))
                    throw new Error("Response is not a Blob.");
                  return l.body;
                }),
              );
            case "text":
              return c.pipe(
                G((l) => {
                  if (l.body !== null && typeof l.body != "string")
                    throw new Error("Response is not a string.");
                  return l.body;
                }),
              );
            case "json":
            default:
              return c.pipe(G((l) => l.body));
          }
        case "response":
          return c;
        default:
          throw new Error(`Unreachable: unhandled observe type ${o.observe}}`);
      }
    }
    delete(n, r = {}) {
      return this.request("DELETE", n, r);
    }
    get(n, r = {}) {
      return this.request("GET", n, r);
    }
    head(n, r = {}) {
      return this.request("HEAD", n, r);
    }
    jsonp(n, r) {
      return this.request("JSONP", n, {
        params: new Rt().append(r, "JSONP_CALLBACK"),
        observe: "body",
        responseType: "json",
      });
    }
    options(n, r = {}) {
      return this.request("OPTIONS", n, r);
    }
    patch(n, r, o = {}) {
      return this.request("PATCH", n, ll(o, r));
    }
    post(n, r, o = {}) {
      return this.request("POST", n, ll(o, r));
    }
    put(n, r, o = {}) {
      return this.request("PUT", n, ll(o, r));
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(p(Pi));
  }),
    (e.ɵprov = b({ token: e, factory: e.ɵfac }));
  let t = e;
  return t;
})();
function am(t, e) {
  return e(t);
}
function Fw(t, e) {
  return (i, n) => e.intercept(i, { handle: (r) => t(r, n) });
}
function Pw(t, e, i) {
  return (n, r) => lf(i, () => e(n, (o) => t(o, r)));
}
var Lw = new D(""),
  pl = new D(""),
  jw = new D(""),
  Vw = new D("");
function Bw() {
  let t = null;
  return (e, i) => {
    t === null && (t = (_(Lw, { optional: !0 }) ?? []).reduceRight(Fw, am));
    let n = _(jn),
      r = n.add();
    return t(e, i).pipe(xr(() => n.remove(r)));
  };
}
var rm = (() => {
  let e = class e extends Pi {
    constructor(n, r) {
      super(),
        (this.backend = n),
        (this.injector = r),
        (this.chain = null),
        (this.pendingTasks = _(jn));
      let o = _(Vw, { optional: !0 });
      this.backend = o ?? n;
    }
    handle(n) {
      if (this.chain === null) {
        let o = Array.from(
          new Set([...this.injector.get(pl), ...this.injector.get(jw, [])]),
        );
        this.chain = o.reduceRight((s, a) => Pw(s, a, this.injector), am);
      }
      let r = this.pendingTasks.add();
      return this.chain(n, (o) => this.backend.handle(o)).pipe(
        xr(() => this.pendingTasks.remove(r)),
      );
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(p(Go), p(qe));
  }),
    (e.ɵprov = b({ token: e, factory: e.ɵfac }));
  let t = e;
  return t;
})();
var Hw = /^\)\]\}',?\n/;
function Uw(t) {
  return "responseURL" in t && t.responseURL
    ? t.responseURL
    : /^X-Request-URL:/m.test(t.getAllResponseHeaders())
      ? t.getResponseHeader("X-Request-URL")
      : null;
}
var om = (() => {
    let e = class e {
      constructor(n) {
        this.xhrFactory = n;
      }
      handle(n) {
        if (n.method === "JSONP") throw new x(-2800, !1);
        let r = this.xhrFactory;
        return (r.ɵloadImpl ? Ee(r.ɵloadImpl()) : Ae(null)).pipe(
          Mr(
            () =>
              new S((s) => {
                let a = r.build();
                if (
                  (a.open(n.method, n.urlWithParams),
                  n.withCredentials && (a.withCredentials = !0),
                  n.headers.forEach((v, y) =>
                    a.setRequestHeader(v, y.join(",")),
                  ),
                  n.headers.has("Accept") ||
                    a.setRequestHeader(
                      "Accept",
                      "application/json, text/plain, */*",
                    ),
                  !n.headers.has("Content-Type"))
                ) {
                  let v = n.detectContentTypeHeader();
                  v !== null && a.setRequestHeader("Content-Type", v);
                }
                if (n.responseType) {
                  let v = n.responseType.toLowerCase();
                  a.responseType = v !== "json" ? v : "text";
                }
                let c = n.serializeBody(),
                  l = null,
                  d = () => {
                    if (l !== null) return l;
                    let v = a.statusText || "OK",
                      y = new sn(a.getAllResponseHeaders()),
                      V = Uw(a) || n.url;
                    return (
                      (l = new fl({
                        headers: y,
                        status: a.status,
                        statusText: v,
                        url: V,
                      })),
                      l
                    );
                  },
                  u = () => {
                    let { headers: v, status: y, statusText: V, url: K } = d(),
                      B = null;
                    y !== Zo.NoContent &&
                      (B =
                        typeof a.response > "u" ? a.responseText : a.response),
                      y === 0 && (y = B ? Zo.Ok : 0);
                    let be = y >= 200 && y < 300;
                    if (n.responseType === "json" && typeof B == "string") {
                      let ve = B;
                      B = B.replace(Hw, "");
                      try {
                        B = B !== "" ? JSON.parse(B) : null;
                      } catch (ht) {
                        (B = ve),
                          be && ((be = !1), (B = { error: ht, text: B }));
                      }
                    }
                    be
                      ? (s.next(
                          new qo({
                            body: B,
                            headers: v,
                            status: y,
                            statusText: V,
                            url: K || void 0,
                          }),
                        ),
                        s.complete())
                      : s.error(
                          new Yo({
                            error: B,
                            headers: v,
                            status: y,
                            statusText: V,
                            url: K || void 0,
                          }),
                        );
                  },
                  f = (v) => {
                    let { url: y } = d(),
                      V = new Yo({
                        error: v,
                        status: a.status || 0,
                        statusText: a.statusText || "Unknown Error",
                        url: y || void 0,
                      });
                    s.error(V);
                  },
                  h = !1,
                  m = (v) => {
                    h || (s.next(d()), (h = !0));
                    let y = { type: Wn.DownloadProgress, loaded: v.loaded };
                    v.lengthComputable && (y.total = v.total),
                      n.responseType === "text" &&
                        a.responseText &&
                        (y.partialText = a.responseText),
                      s.next(y);
                  },
                  g = (v) => {
                    let y = { type: Wn.UploadProgress, loaded: v.loaded };
                    v.lengthComputable && (y.total = v.total), s.next(y);
                  };
                return (
                  a.addEventListener("load", u),
                  a.addEventListener("error", f),
                  a.addEventListener("timeout", f),
                  a.addEventListener("abort", f),
                  n.reportProgress &&
                    (a.addEventListener("progress", m),
                    c !== null &&
                      a.upload &&
                      a.upload.addEventListener("progress", g)),
                  a.send(c),
                  s.next({ type: Wn.Sent }),
                  () => {
                    a.removeEventListener("error", f),
                      a.removeEventListener("abort", f),
                      a.removeEventListener("load", u),
                      a.removeEventListener("timeout", f),
                      n.reportProgress &&
                        (a.removeEventListener("progress", m),
                        c !== null &&
                          a.upload &&
                          a.upload.removeEventListener("progress", g)),
                      a.readyState !== a.DONE && a.abort();
                  }
                );
              }),
          ),
        );
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(p(zn));
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  cm = new D(""),
  $w = "XSRF-TOKEN",
  zw = new D("", { providedIn: "root", factory: () => $w }),
  Ww = "X-XSRF-TOKEN",
  Gw = new D("", { providedIn: "root", factory: () => Ww }),
  Ko = class {},
  qw = (() => {
    let e = class e {
      constructor(n, r, o) {
        (this.doc = n),
          (this.platform = r),
          (this.cookieName = o),
          (this.lastCookieString = ""),
          (this.lastToken = null),
          (this.parseCount = 0);
      }
      getToken() {
        if (this.platform === "server") return null;
        let n = this.doc.cookie || "";
        return (
          n !== this.lastCookieString &&
            (this.parseCount++,
            (this.lastToken = zo(n, this.cookieName)),
            (this.lastCookieString = n)),
          this.lastToken
        );
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(p(R), p(Xe), p(zw));
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })();
function Yw(t, e) {
  let i = t.url.toLowerCase();
  if (
    !_(cm) ||
    t.method === "GET" ||
    t.method === "HEAD" ||
    i.startsWith("http://") ||
    i.startsWith("https://")
  )
    return e(t);
  let n = _(Ko).getToken(),
    r = _(Gw);
  return (
    n != null &&
      !t.headers.has(r) &&
      (t = t.clone({ headers: t.headers.set(r, n) })),
    e(t)
  );
}
var lm = (function (t) {
  return (
    (t[(t.Interceptors = 0)] = "Interceptors"),
    (t[(t.LegacyInterceptors = 1)] = "LegacyInterceptors"),
    (t[(t.CustomXsrfConfiguration = 2)] = "CustomXsrfConfiguration"),
    (t[(t.NoXsrfProtection = 3)] = "NoXsrfProtection"),
    (t[(t.JsonpSupport = 4)] = "JsonpSupport"),
    (t[(t.RequestsMadeViaParent = 5)] = "RequestsMadeViaParent"),
    (t[(t.Fetch = 6)] = "Fetch"),
    t
  );
})(lm || {});
function Zw(t, e) {
  return { ɵkind: t, ɵproviders: e };
}
function jR(...t) {
  let e = [
    hl,
    om,
    rm,
    { provide: Pi, useExisting: rm },
    { provide: Go, useExisting: om },
    { provide: pl, useValue: Yw, multi: !0 },
    { provide: cm, useValue: !0 },
    { provide: Ko, useClass: qw },
  ];
  for (let i of t) e.push(...i.ɵproviders);
  return go(e);
}
var sm = new D("");
function VR() {
  return Zw(lm.LegacyInterceptors, [
    { provide: sm, useFactory: Bw },
    { provide: pl, useExisting: sm, multi: !0 },
  ]);
}
var bl = class extends Uo {
    constructor() {
      super(...arguments), (this.supportsDOMEvents = !0);
    }
  },
  vl = class t extends bl {
    static makeCurrent() {
      Up(new t());
    }
    onAndCancel(e, i, n) {
      return (
        e.addEventListener(i, n),
        () => {
          e.removeEventListener(i, n);
        }
      );
    }
    dispatchEvent(e, i) {
      e.dispatchEvent(i);
    }
    remove(e) {
      e.parentNode && e.parentNode.removeChild(e);
    }
    createElement(e, i) {
      return (i = i || this.getDefaultDocument()), i.createElement(e);
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument("fakeTitle");
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(e) {
      return e.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(e) {
      return e instanceof DocumentFragment;
    }
    getGlobalEventTarget(e, i) {
      return i === "window"
        ? window
        : i === "document"
          ? e
          : i === "body"
            ? e.body
            : null;
    }
    getBaseHref(e) {
      let i = Kw();
      return i == null ? null : Xw(i);
    }
    resetBaseElement() {
      ji = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(e) {
      return zo(document.cookie, e);
    }
  },
  ji = null;
function Kw() {
  return (
    (ji = ji || document.querySelector("base")),
    ji ? ji.getAttribute("href") : null
  );
}
function Xw(t) {
  return new URL(t, document.baseURI).pathname;
}
var Qw = (() => {
    let e = class e {
      build() {
        return new XMLHttpRequest();
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  yl = new D(""),
  hm = (() => {
    let e = class e {
      constructor(n, r) {
        (this._zone = r),
          (this._eventNameToPlugin = new Map()),
          n.forEach((o) => {
            o.manager = this;
          }),
          (this._plugins = n.slice().reverse());
      }
      addEventListener(n, r, o) {
        return this._findPluginFor(r).addEventListener(n, r, o);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(n) {
        let r = this._eventNameToPlugin.get(n);
        if (r) return r;
        if (((r = this._plugins.find((s) => s.supports(n))), !r))
          throw new x(5101, !1);
        return this._eventNameToPlugin.set(n, r), r;
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(p(yl), p(N));
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  Xo = class {
    constructor(e) {
      this._doc = e;
    }
  },
  ml = "ng-app-id",
  pm = (() => {
    let e = class e {
      constructor(n, r, o, s = {}) {
        (this.doc = n),
          (this.appId = r),
          (this.nonce = o),
          (this.platformId = s),
          (this.styleRef = new Map()),
          (this.hostNodes = new Set()),
          (this.styleNodesInDOM = this.collectServerRenderedStyles()),
          (this.platformIsServer = cl(s)),
          this.resetHostNodes();
      }
      addStyles(n) {
        for (let r of n)
          this.changeUsageCount(r, 1) === 1 && this.onStyleAdded(r);
      }
      removeStyles(n) {
        for (let r of n)
          this.changeUsageCount(r, -1) <= 0 && this.onStyleRemoved(r);
      }
      ngOnDestroy() {
        let n = this.styleNodesInDOM;
        n && (n.forEach((r) => r.remove()), n.clear());
        for (let r of this.getAllStyles()) this.onStyleRemoved(r);
        this.resetHostNodes();
      }
      addHost(n) {
        this.hostNodes.add(n);
        for (let r of this.getAllStyles()) this.addStyleToHost(n, r);
      }
      removeHost(n) {
        this.hostNodes.delete(n);
      }
      getAllStyles() {
        return this.styleRef.keys();
      }
      onStyleAdded(n) {
        for (let r of this.hostNodes) this.addStyleToHost(r, n);
      }
      onStyleRemoved(n) {
        let r = this.styleRef;
        r.get(n)?.elements?.forEach((o) => o.remove()), r.delete(n);
      }
      collectServerRenderedStyles() {
        let n = this.doc.head?.querySelectorAll(`style[${ml}="${this.appId}"]`);
        if (n?.length) {
          let r = new Map();
          return (
            n.forEach((o) => {
              o.textContent != null && r.set(o.textContent, o);
            }),
            r
          );
        }
        return null;
      }
      changeUsageCount(n, r) {
        let o = this.styleRef;
        if (o.has(n)) {
          let s = o.get(n);
          return (s.usage += r), s.usage;
        }
        return o.set(n, { usage: r, elements: [] }), r;
      }
      getStyleElement(n, r) {
        let o = this.styleNodesInDOM,
          s = o?.get(r);
        if (s?.parentNode === n) return o.delete(r), s.removeAttribute(ml), s;
        {
          let a = this.doc.createElement("style");
          return (
            this.nonce && a.setAttribute("nonce", this.nonce),
            (a.textContent = r),
            this.platformIsServer && a.setAttribute(ml, this.appId),
            n.appendChild(a),
            a
          );
        }
      }
      addStyleToHost(n, r) {
        let o = this.getStyleElement(n, r),
          s = this.styleRef,
          a = s.get(r)?.elements;
        a ? a.push(o) : s.set(r, { elements: [o], usage: 1 });
      }
      resetHostNodes() {
        let n = this.hostNodes;
        n.clear(), n.add(this.doc.head);
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(p(R), p(Ti), p(Si, 8), p(Xe));
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  gl = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
    math: "http://www.w3.org/1998/MathML/",
  },
  Dl = /%COMP%/g,
  mm = "%COMP%",
  Jw = `_nghost-${mm}`,
  eE = `_ngcontent-${mm}`,
  tE = !0,
  nE = new D("", { providedIn: "root", factory: () => tE });
function iE(t) {
  return eE.replace(Dl, t);
}
function rE(t) {
  return Jw.replace(Dl, t);
}
function gm(t, e) {
  return e.map((i) => i.replace(Dl, t));
}
var dm = (() => {
    let e = class e {
      constructor(n, r, o, s, a, c, l, d = null) {
        (this.eventManager = n),
          (this.sharedStylesHost = r),
          (this.appId = o),
          (this.removeStylesOnCompDestroy = s),
          (this.doc = a),
          (this.platformId = c),
          (this.ngZone = l),
          (this.nonce = d),
          (this.rendererByCompId = new Map()),
          (this.platformIsServer = cl(c)),
          (this.defaultRenderer = new Vi(n, a, l, this.platformIsServer));
      }
      createRenderer(n, r) {
        if (!n || !r) return this.defaultRenderer;
        this.platformIsServer &&
          r.encapsulation === Ge.ShadowDom &&
          (r = le(P({}, r), { encapsulation: Ge.Emulated }));
        let o = this.getOrCreateRenderer(n, r);
        return (
          o instanceof Qo
            ? o.applyToHost(n)
            : o instanceof Bi && o.applyStyles(),
          o
        );
      }
      getOrCreateRenderer(n, r) {
        let o = this.rendererByCompId,
          s = o.get(r.id);
        if (!s) {
          let a = this.doc,
            c = this.ngZone,
            l = this.eventManager,
            d = this.sharedStylesHost,
            u = this.removeStylesOnCompDestroy,
            f = this.platformIsServer;
          switch (r.encapsulation) {
            case Ge.Emulated:
              s = new Qo(l, d, r, this.appId, u, a, c, f);
              break;
            case Ge.ShadowDom:
              return new _l(l, d, n, r, a, c, this.nonce, f);
            default:
              s = new Bi(l, d, r, u, a, c, f);
              break;
          }
          o.set(r.id, s);
        }
        return s;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(p(hm), p(pm), p(Ti), p(nE), p(R), p(Xe), p(N), p(Si));
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  Vi = class {
    constructor(e, i, n, r) {
      (this.eventManager = e),
        (this.doc = i),
        (this.ngZone = n),
        (this.platformIsServer = r),
        (this.data = Object.create(null)),
        (this.throwOnSyntheticProps = !0),
        (this.destroyNode = null);
    }
    destroy() {}
    createElement(e, i) {
      return i
        ? this.doc.createElementNS(gl[i] || i, e)
        : this.doc.createElement(e);
    }
    createComment(e) {
      return this.doc.createComment(e);
    }
    createText(e) {
      return this.doc.createTextNode(e);
    }
    appendChild(e, i) {
      (um(e) ? e.content : e).appendChild(i);
    }
    insertBefore(e, i, n) {
      e && (um(e) ? e.content : e).insertBefore(i, n);
    }
    removeChild(e, i) {
      e && e.removeChild(i);
    }
    selectRootElement(e, i) {
      let n = typeof e == "string" ? this.doc.querySelector(e) : e;
      if (!n) throw new x(-5104, !1);
      return i || (n.textContent = ""), n;
    }
    parentNode(e) {
      return e.parentNode;
    }
    nextSibling(e) {
      return e.nextSibling;
    }
    setAttribute(e, i, n, r) {
      if (r) {
        i = r + ":" + i;
        let o = gl[r];
        o ? e.setAttributeNS(o, i, n) : e.setAttribute(i, n);
      } else e.setAttribute(i, n);
    }
    removeAttribute(e, i, n) {
      if (n) {
        let r = gl[n];
        r ? e.removeAttributeNS(r, i) : e.removeAttribute(`${n}:${i}`);
      } else e.removeAttribute(i);
    }
    addClass(e, i) {
      e.classList.add(i);
    }
    removeClass(e, i) {
      e.classList.remove(i);
    }
    setStyle(e, i, n, r) {
      r & (st.DashCase | st.Important)
        ? e.style.setProperty(i, n, r & st.Important ? "important" : "")
        : (e.style[i] = n);
    }
    removeStyle(e, i, n) {
      n & st.DashCase ? e.style.removeProperty(i) : (e.style[i] = "");
    }
    setProperty(e, i, n) {
      e != null && (e[i] = n);
    }
    setValue(e, i) {
      e.nodeValue = i;
    }
    listen(e, i, n) {
      if (
        typeof e == "string" &&
        ((e = $n().getGlobalEventTarget(this.doc, e)), !e)
      )
        throw new Error(`Unsupported event target ${e} for event ${i}`);
      return this.eventManager.addEventListener(
        e,
        i,
        this.decoratePreventDefault(n),
      );
    }
    decoratePreventDefault(e) {
      return (i) => {
        if (i === "__ngUnwrap__") return e;
        (this.platformIsServer ? this.ngZone.runGuarded(() => e(i)) : e(i)) ===
          !1 && i.preventDefault();
      };
    }
  };
function um(t) {
  return t.tagName === "TEMPLATE" && t.content !== void 0;
}
var _l = class extends Vi {
    constructor(e, i, n, r, o, s, a, c) {
      super(e, o, s, c),
        (this.sharedStylesHost = i),
        (this.hostEl = n),
        (this.shadowRoot = n.attachShadow({ mode: "open" })),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let l = gm(r.id, r.styles);
      for (let d of l) {
        let u = document.createElement("style");
        a && u.setAttribute("nonce", a),
          (u.textContent = d),
          this.shadowRoot.appendChild(u);
      }
    }
    nodeOrShadowRoot(e) {
      return e === this.hostEl ? this.shadowRoot : e;
    }
    appendChild(e, i) {
      return super.appendChild(this.nodeOrShadowRoot(e), i);
    }
    insertBefore(e, i, n) {
      return super.insertBefore(this.nodeOrShadowRoot(e), i, n);
    }
    removeChild(e, i) {
      return super.removeChild(this.nodeOrShadowRoot(e), i);
    }
    parentNode(e) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  Bi = class extends Vi {
    constructor(e, i, n, r, o, s, a, c) {
      super(e, o, s, a),
        (this.sharedStylesHost = i),
        (this.removeStylesOnCompDestroy = r),
        (this.styles = c ? gm(c, n.styles) : n.styles);
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles);
    }
  },
  Qo = class extends Bi {
    constructor(e, i, n, r, o, s, a, c) {
      let l = r + "-" + n.id;
      super(e, i, n, o, s, a, c, l),
        (this.contentAttr = iE(l)),
        (this.hostAttr = rE(l));
    }
    applyToHost(e) {
      this.applyStyles(), this.setAttribute(e, this.hostAttr, "");
    }
    createElement(e, i) {
      let n = super.createElement(e, i);
      return super.setAttribute(n, this.contentAttr, ""), n;
    }
  },
  oE = (() => {
    let e = class e extends Xo {
      constructor(n) {
        super(n);
      }
      supports(n) {
        return !0;
      }
      addEventListener(n, r, o) {
        return (
          n.addEventListener(r, o, !1), () => this.removeEventListener(n, r, o)
        );
      }
      removeEventListener(n, r, o) {
        return n.removeEventListener(r, o);
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(p(R));
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  fm = ["alt", "control", "meta", "shift"],
  sE = {
    "\b": "Backspace",
    "	": "Tab",
    "\x7F": "Delete",
    "\x1B": "Escape",
    Del: "Delete",
    Esc: "Escape",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Up: "ArrowUp",
    Down: "ArrowDown",
    Menu: "ContextMenu",
    Scroll: "ScrollLock",
    Win: "OS",
  },
  aE = {
    alt: (t) => t.altKey,
    control: (t) => t.ctrlKey,
    meta: (t) => t.metaKey,
    shift: (t) => t.shiftKey,
  },
  cE = (() => {
    let e = class e extends Xo {
      constructor(n) {
        super(n);
      }
      supports(n) {
        return e.parseEventName(n) != null;
      }
      addEventListener(n, r, o) {
        let s = e.parseEventName(r),
          a = e.eventCallback(s.fullKey, o, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => $n().onAndCancel(n, s.domEventName, a));
      }
      static parseEventName(n) {
        let r = n.toLowerCase().split("."),
          o = r.shift();
        if (r.length === 0 || !(o === "keydown" || o === "keyup")) return null;
        let s = e._normalizeKey(r.pop()),
          a = "",
          c = r.indexOf("code");
        if (
          (c > -1 && (r.splice(c, 1), (a = "code.")),
          fm.forEach((d) => {
            let u = r.indexOf(d);
            u > -1 && (r.splice(u, 1), (a += d + "."));
          }),
          (a += s),
          r.length != 0 || s.length === 0)
        )
          return null;
        let l = {};
        return (l.domEventName = o), (l.fullKey = a), l;
      }
      static matchEventFullKeyCode(n, r) {
        let o = sE[n.key] || n.key,
          s = "";
        return (
          r.indexOf("code.") > -1 && ((o = n.code), (s = "code.")),
          o == null || !o
            ? !1
            : ((o = o.toLowerCase()),
              o === " " ? (o = "space") : o === "." && (o = "dot"),
              fm.forEach((a) => {
                if (a !== o) {
                  let c = aE[a];
                  c(n) && (s += a + ".");
                }
              }),
              (s += o),
              s === r)
        );
      }
      static eventCallback(n, r, o) {
        return (s) => {
          e.matchEventFullKeyCode(s, n) && o.runGuarded(() => r(s));
        };
      }
      static _normalizeKey(n) {
        return n === "esc" ? "escape" : n;
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(p(R));
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })();
function rk(t, e) {
  return Np(P({ rootComponent: t }, lE(e)));
}
function lE(t) {
  return {
    appProviders: [...pE, ...(t?.providers ?? [])],
    platformProviders: hE,
  };
}
function dE() {
  vl.makeCurrent();
}
function uE() {
  return new Le();
}
function fE() {
  return zf(document), document;
}
var hE = [
  { provide: Xe, useValue: al },
  { provide: Ac, useValue: dE, multi: !0 },
  { provide: R, useFactory: fE, deps: [] },
];
var pE = [
  { provide: bo, useValue: "root" },
  { provide: Le, useFactory: uE, deps: [] },
  { provide: yl, useClass: oE, multi: !0, deps: [R, N, Xe] },
  { provide: yl, useClass: cE, multi: !0, deps: [R] },
  dm,
  pm,
  hm,
  { provide: Ei, useExisting: dm },
  { provide: zn, useClass: Qw, deps: [] },
  [],
];
var ok = (() => {
  let e = class e {
    constructor(n) {
      this._doc = n;
    }
    getTitle() {
      return this._doc.title;
    }
    setTitle(n) {
      this._doc.title = n || "";
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(p(R));
  }),
    (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
var mE = (() => {
    let e = class e {};
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵprov = b({
        token: e,
        factory: function (r) {
          let o = null;
          return r ? (o = new (r || e)()) : (o = p(gE)), o;
        },
        providedIn: "root",
      }));
    let t = e;
    return t;
  })(),
  gE = (() => {
    let e = class e extends mE {
      constructor(n) {
        super(), (this._doc = n);
      }
      sanitize(n, r) {
        if (r == null) return null;
        switch (n) {
          case Qe.NONE:
            return r;
          case Qe.HTML:
            return xt(r, "HTML") ? je(r) : nh(this._doc, String(r)).toString();
          case Qe.STYLE:
            return xt(r, "Style") ? je(r) : r;
          case Qe.SCRIPT:
            if (xt(r, "Script")) return je(r);
            throw new x(5200, !1);
          case Qe.URL:
            return xt(r, "URL") ? je(r) : Ao(String(r));
          case Qe.RESOURCE_URL:
            if (xt(r, "ResourceURL")) return je(r);
            throw new x(5201, !1);
          default:
            throw new x(5202, !1);
        }
      }
      bypassSecurityTrustHtml(n) {
        return Gf(n);
      }
      bypassSecurityTrustStyle(n) {
        return qf(n);
      }
      bypassSecurityTrustScript(n) {
        return Yf(n);
      }
      bypassSecurityTrustUrl(n) {
        return Zf(n);
      }
      bypassSecurityTrustResourceUrl(n) {
        return Kf(n);
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(p(R));
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })();
var bm = new D("CONFIG_TOKEN");
var El;
try {
  El = typeof Intl < "u" && Intl.v8BreakIterator;
} catch {
  El = !1;
}
var Y = (() => {
  let e = class e {
    constructor(n) {
      (this._platformId = n),
        (this.isBrowser = this._platformId
          ? Qp(this._platformId)
          : typeof document == "object" && !!document),
        (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
        (this.TRIDENT =
          this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
        (this.BLINK =
          this.isBrowser &&
          !!(window.chrome || El) &&
          typeof CSS < "u" &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.WEBKIT =
          this.isBrowser &&
          /AppleWebKit/i.test(navigator.userAgent) &&
          !this.BLINK &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.IOS =
          this.isBrowser &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !("MSStream" in window)),
        (this.FIREFOX =
          this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent)),
        (this.ANDROID =
          this.isBrowser &&
          /android/i.test(navigator.userAgent) &&
          !this.TRIDENT),
        (this.SAFARI =
          this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT);
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(p(Xe));
  }),
    (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
var Gn,
  vm = [
    "color",
    "button",
    "checkbox",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week",
  ];
function mk() {
  if (Gn) return Gn;
  if (typeof document != "object" || !document) return (Gn = new Set(vm)), Gn;
  let t = document.createElement("input");
  return (
    (Gn = new Set(vm.filter((e) => (t.setAttribute("type", e), t.type === e)))),
    Gn
  );
}
var Hi;
function bE() {
  if (Hi == null && typeof window < "u")
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", { get: () => (Hi = !0) }),
      );
    } finally {
      Hi = Hi || !1;
    }
  return Hi;
}
function qn(t) {
  return bE() ? t : !!t.capture;
}
var an;
function ym() {
  if (an == null) {
    if (
      typeof document != "object" ||
      !document ||
      typeof Element != "function" ||
      !Element
    )
      return (an = !1), an;
    if ("scrollBehavior" in document.documentElement.style) an = !0;
    else {
      let t = Element.prototype.scrollTo;
      t ? (an = !/\{\s*\[native code\]\s*\}/.test(t.toString())) : (an = !1);
    }
  }
  return an;
}
var wl;
function vE() {
  if (wl == null) {
    let t = typeof document < "u" ? document.head : null;
    wl = !!(t && (t.createShadowRoot || t.attachShadow));
  }
  return wl;
}
function _m(t) {
  if (vE()) {
    let e = t.getRootNode ? t.getRootNode() : null;
    if (typeof ShadowRoot < "u" && ShadowRoot && e instanceof ShadowRoot)
      return e;
  }
  return null;
}
function yE() {
  let t = typeof document < "u" && document ? document.activeElement : null;
  for (; t && t.shadowRoot; ) {
    let e = t.shadowRoot.activeElement;
    if (e === t) break;
    t = e;
  }
  return t;
}
function Be(t) {
  return t.composedPath ? t.composedPath()[0] : t.target;
}
function Jo() {
  return (
    (typeof __karma__ < "u" && !!__karma__) ||
    (typeof jasmine < "u" && !!jasmine) ||
    (typeof jest < "u" && !!jest) ||
    (typeof Mocha < "u" && !!Mocha)
  );
}
function Dm(t, ...e) {
  return e.length
    ? e.some((i) => t[i])
    : t.altKey || t.shiftKey || t.ctrlKey || t.metaKey;
}
function _E(t) {
  return t != null && `${t}` != "false";
}
function wm(t, e = 0) {
  return DE(t) ? Number(t) : e;
}
function DE(t) {
  return !isNaN(parseFloat(t)) && !isNaN(Number(t));
}
function Zn(t) {
  return Array.isArray(t) ? t : [t];
}
function Z(t) {
  return t == null ? "" : typeof t == "string" ? t : `${t}px`;
}
function ft(t) {
  return t instanceof q ? t.nativeElement : t;
}
var Em = new Set(),
  cn,
  wE = (() => {
    let e = class e {
      constructor(n, r) {
        (this._platform = n),
          (this._nonce = r),
          (this._matchMedia =
            this._platform.isBrowser && window.matchMedia
              ? window.matchMedia.bind(window)
              : IE);
      }
      matchMedia(n) {
        return (
          (this._platform.WEBKIT || this._platform.BLINK) && EE(n, this._nonce),
          this._matchMedia(n)
        );
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(p(Y), p(Si, 8));
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })();
function EE(t, e) {
  if (!Em.has(t))
    try {
      cn ||
        ((cn = document.createElement("style")),
        e && (cn.nonce = e),
        cn.setAttribute("type", "text/css"),
        document.head.appendChild(cn)),
        cn.sheet &&
          (cn.sheet.insertRule(`@media ${t} {body{ }}`, 0), Em.add(t));
    } catch (i) {
      console.error(i);
    }
}
function IE(t) {
  return {
    matches: t === "all" || t === "",
    media: t,
    addListener: () => {},
    removeListener: () => {},
  };
}
var Mk = (() => {
  let e = class e {
    constructor(n, r) {
      (this._mediaMatcher = n),
        (this._zone = r),
        (this._queries = new Map()),
        (this._destroySubject = new L());
    }
    ngOnDestroy() {
      this._destroySubject.next(), this._destroySubject.complete();
    }
    isMatched(n) {
      return Im(Zn(n)).some((o) => this._registerQuery(o).mql.matches);
    }
    observe(n) {
      let o = Im(Zn(n)).map((a) => this._registerQuery(a).observable),
        s = Ns(o);
      return (
        (s = pt(s.pipe(Oe(1)), s.pipe(di(1), ci(0)))),
        s.pipe(
          G((a) => {
            let c = { matches: !1, breakpoints: {} };
            return (
              a.forEach(({ matches: l, query: d }) => {
                (c.matches = c.matches || l), (c.breakpoints[d] = l);
              }),
              c
            );
          }),
        )
      );
    }
    _registerQuery(n) {
      if (this._queries.has(n)) return this._queries.get(n);
      let r = this._mediaMatcher.matchMedia(n),
        s = {
          observable: new S((a) => {
            let c = (l) => this._zone.run(() => a.next(l));
            return (
              r.addListener(c),
              () => {
                r.removeListener(c);
              }
            );
          }).pipe(
            Cr(r),
            G(({ matches: a }) => ({ query: n, matches: a })),
            $e(this._destroySubject),
          ),
          mql: r,
        };
      return this._queries.set(n, s), s;
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(p(wE), p(N));
  }),
    (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
function Im(t) {
  return t
    .map((e) => e.split(","))
    .reduce((e, i) => e.concat(i))
    .map((e) => e.trim());
}
var Tk = {
  XSmall: "(max-width: 599.98px)",
  Small: "(min-width: 600px) and (max-width: 959.98px)",
  Medium: "(min-width: 960px) and (max-width: 1279.98px)",
  Large: "(min-width: 1280px) and (max-width: 1919.98px)",
  XLarge: "(min-width: 1920px)",
  Handset:
    "(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",
  Tablet:
    "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
  Web: "(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",
  HandsetPortrait: "(max-width: 599.98px) and (orientation: portrait)",
  TabletPortrait:
    "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",
  WebPortrait: "(min-width: 840px) and (orientation: portrait)",
  HandsetLandscape: "(max-width: 959.98px) and (orientation: landscape)",
  TabletLandscape:
    "(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
  WebLandscape: "(min-width: 1280px) and (orientation: landscape)",
};
var Tm = " ";
function $E(t, e, i) {
  let n = is(t, e);
  (i = i.trim()),
    !n.some((r) => r.trim() === i) &&
      (n.push(i), t.setAttribute(e, n.join(Tm)));
}
function zE(t, e, i) {
  let n = is(t, e);
  i = i.trim();
  let r = n.filter((o) => o !== i);
  r.length ? t.setAttribute(e, r.join(Tm)) : t.removeAttribute(e);
}
function is(t, e) {
  return t.getAttribute(e)?.match(/\S+/g) ?? [];
}
var Sm = "cdk-describedby-message",
  es = "cdk-describedby-host",
  xl = 0,
  zk = (() => {
    let e = class e {
      constructor(n, r) {
        (this._platform = r),
          (this._messageRegistry = new Map()),
          (this._messagesContainer = null),
          (this._id = `${xl++}`),
          (this._document = n),
          (this._id = _(Ti) + "-" + xl++);
      }
      describe(n, r, o) {
        if (!this._canBeDescribed(n, r)) return;
        let s = Il(r, o);
        typeof r != "string"
          ? (xm(r, this._id),
            this._messageRegistry.set(s, {
              messageElement: r,
              referenceCount: 0,
            }))
          : this._messageRegistry.has(s) || this._createMessageElement(r, o),
          this._isElementDescribedByMessage(n, s) ||
            this._addMessageReference(n, s);
      }
      removeDescription(n, r, o) {
        if (!r || !this._isElementNode(n)) return;
        let s = Il(r, o);
        if (
          (this._isElementDescribedByMessage(n, s) &&
            this._removeMessageReference(n, s),
          typeof r == "string")
        ) {
          let a = this._messageRegistry.get(s);
          a && a.referenceCount === 0 && this._deleteMessageElement(s);
        }
        this._messagesContainer?.childNodes.length === 0 &&
          (this._messagesContainer.remove(), (this._messagesContainer = null));
      }
      ngOnDestroy() {
        let n = this._document.querySelectorAll(`[${es}="${this._id}"]`);
        for (let r = 0; r < n.length; r++)
          this._removeCdkDescribedByReferenceIds(n[r]),
            n[r].removeAttribute(es);
        this._messagesContainer?.remove(),
          (this._messagesContainer = null),
          this._messageRegistry.clear();
      }
      _createMessageElement(n, r) {
        let o = this._document.createElement("div");
        xm(o, this._id),
          (o.textContent = n),
          r && o.setAttribute("role", r),
          this._createMessagesContainer(),
          this._messagesContainer.appendChild(o),
          this._messageRegistry.set(Il(n, r), {
            messageElement: o,
            referenceCount: 0,
          });
      }
      _deleteMessageElement(n) {
        this._messageRegistry.get(n)?.messageElement?.remove(),
          this._messageRegistry.delete(n);
      }
      _createMessagesContainer() {
        if (this._messagesContainer) return;
        let n = "cdk-describedby-message-container",
          r = this._document.querySelectorAll(`.${n}[platform="server"]`);
        for (let s = 0; s < r.length; s++) r[s].remove();
        let o = this._document.createElement("div");
        (o.style.visibility = "hidden"),
          o.classList.add(n),
          o.classList.add("cdk-visually-hidden"),
          this._platform &&
            !this._platform.isBrowser &&
            o.setAttribute("platform", "server"),
          this._document.body.appendChild(o),
          (this._messagesContainer = o);
      }
      _removeCdkDescribedByReferenceIds(n) {
        let r = is(n, "aria-describedby").filter((o) => o.indexOf(Sm) != 0);
        n.setAttribute("aria-describedby", r.join(" "));
      }
      _addMessageReference(n, r) {
        let o = this._messageRegistry.get(r);
        $E(n, "aria-describedby", o.messageElement.id),
          n.setAttribute(es, this._id),
          o.referenceCount++;
      }
      _removeMessageReference(n, r) {
        let o = this._messageRegistry.get(r);
        o.referenceCount--,
          zE(n, "aria-describedby", o.messageElement.id),
          n.removeAttribute(es);
      }
      _isElementDescribedByMessage(n, r) {
        let o = is(n, "aria-describedby"),
          s = this._messageRegistry.get(r),
          a = s && s.messageElement.id;
        return !!a && o.indexOf(a) != -1;
      }
      _canBeDescribed(n, r) {
        if (!this._isElementNode(n)) return !1;
        if (r && typeof r == "object") return !0;
        let o = r == null ? "" : `${r}`.trim(),
          s = n.getAttribute("aria-label");
        return o ? !s || s.trim() !== o : !1;
      }
      _isElementNode(n) {
        return n.nodeType === this._document.ELEMENT_NODE;
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(p(R), p(Y));
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })();
function Il(t, e) {
  return typeof t == "string" ? `${e || ""}/${t}` : t;
}
function xm(t, e) {
  t.id || (t.id = `${Sm}-${e}-${xl++}`);
}
var Cl = class {
  constructor(e) {
    (this._items = e),
      (this._activeItemIndex = -1),
      (this._activeItem = null),
      (this._wrap = !1),
      (this._letterKeyStream = new L()),
      (this._typeaheadSubscription = $.EMPTY),
      (this._vertical = !0),
      (this._allowedModifierKeys = []),
      (this._homeAndEnd = !1),
      (this._pageUpAndDown = { enabled: !1, delta: 10 }),
      (this._skipPredicateFn = (i) => i.disabled),
      (this._pressedLetters = []),
      (this.tabOut = new L()),
      (this.change = new L()),
      e instanceof Nn &&
        (this._itemChangesSubscription = e.changes.subscribe((i) => {
          if (this._activeItem) {
            let r = i.toArray().indexOf(this._activeItem);
            r > -1 &&
              r !== this._activeItemIndex &&
              (this._activeItemIndex = r);
          }
        }));
  }
  skipPredicate(e) {
    return (this._skipPredicateFn = e), this;
  }
  withWrap(e = !0) {
    return (this._wrap = e), this;
  }
  withVerticalOrientation(e = !0) {
    return (this._vertical = e), this;
  }
  withHorizontalOrientation(e) {
    return (this._horizontal = e), this;
  }
  withAllowedModifierKeys(e) {
    return (this._allowedModifierKeys = e), this;
  }
  withTypeAhead(e = 200) {
    return (
      this._typeaheadSubscription.unsubscribe(),
      (this._typeaheadSubscription = this._letterKeyStream
        .pipe(
          Tr((i) => this._pressedLetters.push(i)),
          ci(e),
          ne(() => this._pressedLetters.length > 0),
          G(() => this._pressedLetters.join("")),
        )
        .subscribe((i) => {
          let n = this._getItemsArray();
          for (let r = 1; r < n.length + 1; r++) {
            let o = (this._activeItemIndex + r) % n.length,
              s = n[o];
            if (
              !this._skipPredicateFn(s) &&
              s.getLabel().toUpperCase().trim().indexOf(i) === 0
            ) {
              this.setActiveItem(o);
              break;
            }
          }
          this._pressedLetters = [];
        })),
      this
    );
  }
  cancelTypeahead() {
    return (this._pressedLetters = []), this;
  }
  withHomeAndEnd(e = !0) {
    return (this._homeAndEnd = e), this;
  }
  withPageUpDown(e = !0, i = 10) {
    return (this._pageUpAndDown = { enabled: e, delta: i }), this;
  }
  setActiveItem(e) {
    let i = this._activeItem;
    this.updateActiveItem(e),
      this._activeItem !== i && this.change.next(this._activeItemIndex);
  }
  onKeydown(e) {
    let i = e.keyCode,
      r = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every(
        (o) => !e[o] || this._allowedModifierKeys.indexOf(o) > -1,
      );
    switch (i) {
      case 9:
        this.tabOut.next();
        return;
      case 40:
        if (this._vertical && r) {
          this.setNextItemActive();
          break;
        } else return;
      case 38:
        if (this._vertical && r) {
          this.setPreviousItemActive();
          break;
        } else return;
      case 39:
        if (this._horizontal && r) {
          this._horizontal === "rtl"
            ? this.setPreviousItemActive()
            : this.setNextItemActive();
          break;
        } else return;
      case 37:
        if (this._horizontal && r) {
          this._horizontal === "rtl"
            ? this.setNextItemActive()
            : this.setPreviousItemActive();
          break;
        } else return;
      case 36:
        if (this._homeAndEnd && r) {
          this.setFirstItemActive();
          break;
        } else return;
      case 35:
        if (this._homeAndEnd && r) {
          this.setLastItemActive();
          break;
        } else return;
      case 33:
        if (this._pageUpAndDown.enabled && r) {
          let o = this._activeItemIndex - this._pageUpAndDown.delta;
          this._setActiveItemByIndex(o > 0 ? o : 0, 1);
          break;
        } else return;
      case 34:
        if (this._pageUpAndDown.enabled && r) {
          let o = this._activeItemIndex + this._pageUpAndDown.delta,
            s = this._getItemsArray().length;
          this._setActiveItemByIndex(o < s ? o : s - 1, -1);
          break;
        } else return;
      default:
        (r || Dm(e, "shiftKey")) &&
          (e.key && e.key.length === 1
            ? this._letterKeyStream.next(e.key.toLocaleUpperCase())
            : ((i >= 65 && i <= 90) || (i >= 48 && i <= 57)) &&
              this._letterKeyStream.next(String.fromCharCode(i)));
        return;
    }
    (this._pressedLetters = []), e.preventDefault();
  }
  get activeItemIndex() {
    return this._activeItemIndex;
  }
  get activeItem() {
    return this._activeItem;
  }
  isTyping() {
    return this._pressedLetters.length > 0;
  }
  setFirstItemActive() {
    this._setActiveItemByIndex(0, 1);
  }
  setLastItemActive() {
    this._setActiveItemByIndex(this._items.length - 1, -1);
  }
  setNextItemActive() {
    this._activeItemIndex < 0
      ? this.setFirstItemActive()
      : this._setActiveItemByDelta(1);
  }
  setPreviousItemActive() {
    this._activeItemIndex < 0 && this._wrap
      ? this.setLastItemActive()
      : this._setActiveItemByDelta(-1);
  }
  updateActiveItem(e) {
    let i = this._getItemsArray(),
      n = typeof e == "number" ? e : i.indexOf(e),
      r = i[n];
    (this._activeItem = r ?? null), (this._activeItemIndex = n);
  }
  destroy() {
    this._typeaheadSubscription.unsubscribe(),
      this._itemChangesSubscription?.unsubscribe(),
      this._letterKeyStream.complete(),
      this.tabOut.complete(),
      this.change.complete(),
      (this._pressedLetters = []);
  }
  _setActiveItemByDelta(e) {
    this._wrap ? this._setActiveInWrapMode(e) : this._setActiveInDefaultMode(e);
  }
  _setActiveInWrapMode(e) {
    let i = this._getItemsArray();
    for (let n = 1; n <= i.length; n++) {
      let r = (this._activeItemIndex + e * n + i.length) % i.length,
        o = i[r];
      if (!this._skipPredicateFn(o)) {
        this.setActiveItem(r);
        return;
      }
    }
  }
  _setActiveInDefaultMode(e) {
    this._setActiveItemByIndex(this._activeItemIndex + e, e);
  }
  _setActiveItemByIndex(e, i) {
    let n = this._getItemsArray();
    if (n[e]) {
      for (; this._skipPredicateFn(n[e]); ) if (((e += i), !n[e])) return;
      this.setActiveItem(e);
    }
  }
  _getItemsArray() {
    return this._items instanceof Nn ? this._items.toArray() : this._items;
  }
};
var Cm = class extends Cl {
  constructor() {
    super(...arguments), (this._origin = "program");
  }
  setFocusOrigin(e) {
    return (this._origin = e), this;
  }
  setActiveItem(e) {
    super.setActiveItem(e),
      this.activeItem && this.activeItem.focus(this._origin);
  }
};
var Wk = (() => {
  let e = class e {
    constructor(n) {
      this._platform = n;
    }
    isDisabled(n) {
      return n.hasAttribute("disabled");
    }
    isVisible(n) {
      return GE(n) && getComputedStyle(n).visibility === "visible";
    }
    isTabbable(n) {
      if (!this._platform.isBrowser) return !1;
      let r = WE(eI(n));
      if (r && (Mm(r) === -1 || !this.isVisible(r))) return !1;
      let o = n.nodeName.toLowerCase(),
        s = Mm(n);
      return n.hasAttribute("contenteditable")
        ? s !== -1
        : o === "iframe" ||
            o === "object" ||
            (this._platform.WEBKIT && this._platform.IOS && !QE(n))
          ? !1
          : o === "audio"
            ? n.hasAttribute("controls")
              ? s !== -1
              : !1
            : o === "video"
              ? s === -1
                ? !1
                : s !== null
                  ? !0
                  : this._platform.FIREFOX || n.hasAttribute("controls")
              : n.tabIndex >= 0;
    }
    isFocusable(n, r) {
      return (
        JE(n) &&
        !this.isDisabled(n) &&
        (r?.ignoreVisibility || this.isVisible(n))
      );
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(p(Y));
  }),
    (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
function WE(t) {
  try {
    return t.frameElement;
  } catch {
    return null;
  }
}
function GE(t) {
  return !!(
    t.offsetWidth ||
    t.offsetHeight ||
    (typeof t.getClientRects == "function" && t.getClientRects().length)
  );
}
function qE(t) {
  let e = t.nodeName.toLowerCase();
  return e === "input" || e === "select" || e === "button" || e === "textarea";
}
function YE(t) {
  return KE(t) && t.type == "hidden";
}
function ZE(t) {
  return XE(t) && t.hasAttribute("href");
}
function KE(t) {
  return t.nodeName.toLowerCase() == "input";
}
function XE(t) {
  return t.nodeName.toLowerCase() == "a";
}
function Am(t) {
  if (!t.hasAttribute("tabindex") || t.tabIndex === void 0) return !1;
  let e = t.getAttribute("tabindex");
  return !!(e && !isNaN(parseInt(e, 10)));
}
function Mm(t) {
  if (!Am(t)) return null;
  let e = parseInt(t.getAttribute("tabindex") || "", 10);
  return isNaN(e) ? -1 : e;
}
function QE(t) {
  let e = t.nodeName.toLowerCase(),
    i = e === "input" && t.type;
  return i === "text" || i === "password" || e === "select" || e === "textarea";
}
function JE(t) {
  return YE(t)
    ? !1
    : qE(t) || ZE(t) || t.hasAttribute("contenteditable") || Am(t);
}
function eI(t) {
  return (t.ownerDocument && t.ownerDocument.defaultView) || window;
}
function Ml(t) {
  return t.buttons === 0 || t.detail === 0;
}
function Tl(t) {
  let e =
    (t.touches && t.touches[0]) || (t.changedTouches && t.changedTouches[0]);
  return (
    !!e &&
    e.identifier === -1 &&
    (e.radiusX == null || e.radiusX === 1) &&
    (e.radiusY == null || e.radiusY === 1)
  );
}
var tI = new D("cdk-input-modality-detector-options"),
  nI = { ignoreKeys: [18, 17, 224, 91, 16] },
  Nm = 650,
  Kn = qn({ passive: !0, capture: !0 }),
  iI = (() => {
    let e = class e {
      get mostRecentModality() {
        return this._modality.value;
      }
      constructor(n, r, o, s) {
        (this._platform = n),
          (this._mostRecentTarget = null),
          (this._modality = new jt(null)),
          (this._lastTouchMs = 0),
          (this._onKeydown = (a) => {
            this._options?.ignoreKeys?.some((c) => c === a.keyCode) ||
              (this._modality.next("keyboard"),
              (this._mostRecentTarget = Be(a)));
          }),
          (this._onMousedown = (a) => {
            Date.now() - this._lastTouchMs < Nm ||
              (this._modality.next(Ml(a) ? "keyboard" : "mouse"),
              (this._mostRecentTarget = Be(a)));
          }),
          (this._onTouchstart = (a) => {
            if (Tl(a)) {
              this._modality.next("keyboard");
              return;
            }
            (this._lastTouchMs = Date.now()),
              this._modality.next("touch"),
              (this._mostRecentTarget = Be(a));
          }),
          (this._options = P(P({}, nI), s)),
          (this.modalityDetected = this._modality.pipe(di(1))),
          (this.modalityChanged = this.modalityDetected.pipe(Er())),
          n.isBrowser &&
            r.runOutsideAngular(() => {
              o.addEventListener("keydown", this._onKeydown, Kn),
                o.addEventListener("mousedown", this._onMousedown, Kn),
                o.addEventListener("touchstart", this._onTouchstart, Kn);
            });
      }
      ngOnDestroy() {
        this._modality.complete(),
          this._platform.isBrowser &&
            (document.removeEventListener("keydown", this._onKeydown, Kn),
            document.removeEventListener("mousedown", this._onMousedown, Kn),
            document.removeEventListener("touchstart", this._onTouchstart, Kn));
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(p(Y), p(N), p(R), p(tI, 8));
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  rI = new D("liveAnnouncerElement", { providedIn: "root", factory: oI });
function oI() {
  return null;
}
var sI = new D("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),
  aI = 0,
  Gk = (() => {
    let e = class e {
      constructor(n, r, o, s) {
        (this._ngZone = r),
          (this._defaultOptions = s),
          (this._document = o),
          (this._liveElement = n || this._createLiveElement());
      }
      announce(n, ...r) {
        let o = this._defaultOptions,
          s,
          a;
        return (
          r.length === 1 && typeof r[0] == "number" ? (a = r[0]) : ([s, a] = r),
          this.clear(),
          clearTimeout(this._previousTimeout),
          s || (s = o && o.politeness ? o.politeness : "polite"),
          a == null && o && (a = o.duration),
          this._liveElement.setAttribute("aria-live", s),
          this._liveElement.id &&
            this._exposeAnnouncerToModals(this._liveElement.id),
          this._ngZone.runOutsideAngular(
            () => (
              this._currentPromise ||
                (this._currentPromise = new Promise(
                  (c) => (this._currentResolve = c),
                )),
              clearTimeout(this._previousTimeout),
              (this._previousTimeout = setTimeout(() => {
                (this._liveElement.textContent = n),
                  typeof a == "number" &&
                    (this._previousTimeout = setTimeout(() => this.clear(), a)),
                  this._currentResolve?.(),
                  (this._currentPromise = this._currentResolve = void 0);
              }, 100)),
              this._currentPromise
            ),
          )
        );
      }
      clear() {
        this._liveElement && (this._liveElement.textContent = "");
      }
      ngOnDestroy() {
        clearTimeout(this._previousTimeout),
          this._liveElement?.remove(),
          (this._liveElement = null),
          this._currentResolve?.(),
          (this._currentPromise = this._currentResolve = void 0);
      }
      _createLiveElement() {
        let n = "cdk-live-announcer-element",
          r = this._document.getElementsByClassName(n),
          o = this._document.createElement("div");
        for (let s = 0; s < r.length; s++) r[s].remove();
        return (
          o.classList.add(n),
          o.classList.add("cdk-visually-hidden"),
          o.setAttribute("aria-atomic", "true"),
          o.setAttribute("aria-live", "polite"),
          (o.id = `cdk-live-announcer-${aI++}`),
          this._document.body.appendChild(o),
          o
        );
      }
      _exposeAnnouncerToModals(n) {
        let r = this._document.querySelectorAll(
          'body > .cdk-overlay-container [aria-modal="true"]',
        );
        for (let o = 0; o < r.length; o++) {
          let s = r[o],
            a = s.getAttribute("aria-owns");
          a
            ? a.indexOf(n) === -1 && s.setAttribute("aria-owns", a + " " + n)
            : s.setAttribute("aria-owns", n);
        }
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(p(rI, 8), p(N), p(R), p(sI, 8));
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })();
var ns = (function (t) {
    return (
      (t[(t.IMMEDIATE = 0)] = "IMMEDIATE"),
      (t[(t.EVENTUAL = 1)] = "EVENTUAL"),
      t
    );
  })(ns || {}),
  cI = new D("cdk-focus-monitor-default-options"),
  ts = qn({ passive: !0, capture: !0 }),
  Om = (() => {
    let e = class e {
      constructor(n, r, o, s, a) {
        (this._ngZone = n),
          (this._platform = r),
          (this._inputModalityDetector = o),
          (this._origin = null),
          (this._windowFocused = !1),
          (this._originFromTouchInteraction = !1),
          (this._elementInfo = new Map()),
          (this._monitoredElementCount = 0),
          (this._rootNodeFocusListenerCount = new Map()),
          (this._windowFocusListener = () => {
            (this._windowFocused = !0),
              (this._windowFocusTimeoutId = window.setTimeout(
                () => (this._windowFocused = !1),
              ));
          }),
          (this._stopInputModalityDetector = new L()),
          (this._rootNodeFocusAndBlurListener = (c) => {
            let l = Be(c);
            for (let d = l; d; d = d.parentElement)
              c.type === "focus" ? this._onFocus(c, d) : this._onBlur(c, d);
          }),
          (this._document = s),
          (this._detectionMode = a?.detectionMode || ns.IMMEDIATE);
      }
      monitor(n, r = !1) {
        let o = ft(n);
        if (!this._platform.isBrowser || o.nodeType !== 1) return Ae();
        let s = _m(o) || this._getDocument(),
          a = this._elementInfo.get(o);
        if (a) return r && (a.checkChildren = !0), a.subject;
        let c = { checkChildren: r, subject: new L(), rootNode: s };
        return (
          this._elementInfo.set(o, c),
          this._registerGlobalListeners(c),
          c.subject
        );
      }
      stopMonitoring(n) {
        let r = ft(n),
          o = this._elementInfo.get(r);
        o &&
          (o.subject.complete(),
          this._setClasses(r),
          this._elementInfo.delete(r),
          this._removeGlobalListeners(o));
      }
      focusVia(n, r, o) {
        let s = ft(n),
          a = this._getDocument().activeElement;
        s === a
          ? this._getClosestElementsInfo(s).forEach(([c, l]) =>
              this._originChanged(c, r, l),
            )
          : (this._setOrigin(r), typeof s.focus == "function" && s.focus(o));
      }
      ngOnDestroy() {
        this._elementInfo.forEach((n, r) => this.stopMonitoring(r));
      }
      _getDocument() {
        return this._document || document;
      }
      _getWindow() {
        return this._getDocument().defaultView || window;
      }
      _getFocusOrigin(n) {
        return this._origin
          ? this._originFromTouchInteraction
            ? this._shouldBeAttributedToTouch(n)
              ? "touch"
              : "program"
            : this._origin
          : this._windowFocused && this._lastFocusOrigin
            ? this._lastFocusOrigin
            : n && this._isLastInteractionFromInputLabel(n)
              ? "mouse"
              : "program";
      }
      _shouldBeAttributedToTouch(n) {
        return (
          this._detectionMode === ns.EVENTUAL ||
          !!n?.contains(this._inputModalityDetector._mostRecentTarget)
        );
      }
      _setClasses(n, r) {
        n.classList.toggle("cdk-focused", !!r),
          n.classList.toggle("cdk-touch-focused", r === "touch"),
          n.classList.toggle("cdk-keyboard-focused", r === "keyboard"),
          n.classList.toggle("cdk-mouse-focused", r === "mouse"),
          n.classList.toggle("cdk-program-focused", r === "program");
      }
      _setOrigin(n, r = !1) {
        this._ngZone.runOutsideAngular(() => {
          if (
            ((this._origin = n),
            (this._originFromTouchInteraction = n === "touch" && r),
            this._detectionMode === ns.IMMEDIATE)
          ) {
            clearTimeout(this._originTimeoutId);
            let o = this._originFromTouchInteraction ? Nm : 1;
            this._originTimeoutId = setTimeout(() => (this._origin = null), o);
          }
        });
      }
      _onFocus(n, r) {
        let o = this._elementInfo.get(r),
          s = Be(n);
        !o ||
          (!o.checkChildren && r !== s) ||
          this._originChanged(r, this._getFocusOrigin(s), o);
      }
      _onBlur(n, r) {
        let o = this._elementInfo.get(r);
        !o ||
          (o.checkChildren &&
            n.relatedTarget instanceof Node &&
            r.contains(n.relatedTarget)) ||
          (this._setClasses(r), this._emitOrigin(o, null));
      }
      _emitOrigin(n, r) {
        n.subject.observers.length && this._ngZone.run(() => n.subject.next(r));
      }
      _registerGlobalListeners(n) {
        if (!this._platform.isBrowser) return;
        let r = n.rootNode,
          o = this._rootNodeFocusListenerCount.get(r) || 0;
        o ||
          this._ngZone.runOutsideAngular(() => {
            r.addEventListener("focus", this._rootNodeFocusAndBlurListener, ts),
              r.addEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                ts,
              );
          }),
          this._rootNodeFocusListenerCount.set(r, o + 1),
          ++this._monitoredElementCount === 1 &&
            (this._ngZone.runOutsideAngular(() => {
              this._getWindow().addEventListener(
                "focus",
                this._windowFocusListener,
              );
            }),
            this._inputModalityDetector.modalityDetected
              .pipe($e(this._stopInputModalityDetector))
              .subscribe((s) => {
                this._setOrigin(s, !0);
              }));
      }
      _removeGlobalListeners(n) {
        let r = n.rootNode;
        if (this._rootNodeFocusListenerCount.has(r)) {
          let o = this._rootNodeFocusListenerCount.get(r);
          o > 1
            ? this._rootNodeFocusListenerCount.set(r, o - 1)
            : (r.removeEventListener(
                "focus",
                this._rootNodeFocusAndBlurListener,
                ts,
              ),
              r.removeEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                ts,
              ),
              this._rootNodeFocusListenerCount.delete(r));
        }
        --this._monitoredElementCount ||
          (this._getWindow().removeEventListener(
            "focus",
            this._windowFocusListener,
          ),
          this._stopInputModalityDetector.next(),
          clearTimeout(this._windowFocusTimeoutId),
          clearTimeout(this._originTimeoutId));
      }
      _originChanged(n, r, o) {
        this._setClasses(n, r),
          this._emitOrigin(o, r),
          (this._lastFocusOrigin = r);
      }
      _getClosestElementsInfo(n) {
        let r = [];
        return (
          this._elementInfo.forEach((o, s) => {
            (s === n || (o.checkChildren && s.contains(n))) && r.push([s, o]);
          }),
          r
        );
      }
      _isLastInteractionFromInputLabel(n) {
        let { _mostRecentTarget: r, mostRecentModality: o } =
          this._inputModalityDetector;
        if (
          o !== "mouse" ||
          !r ||
          r === n ||
          (n.nodeName !== "INPUT" && n.nodeName !== "TEXTAREA") ||
          n.disabled
        )
          return !1;
        let s = n.labels;
        if (s) {
          for (let a = 0; a < s.length; a++) if (s[a].contains(r)) return !0;
        }
        return !1;
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(p(N), p(Y), p(iI), p(R, 8), p(cI, 8));
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })();
var lI = new D("cdk-dir-doc", { providedIn: "root", factory: dI });
function dI() {
  return _(R);
}
var uI =
  /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function fI(t) {
  let e = t?.toLowerCase() || "";
  return e === "auto" && typeof navigator < "u" && navigator?.language
    ? uI.test(navigator.language)
      ? "rtl"
      : "ltr"
    : e === "rtl"
      ? "rtl"
      : "ltr";
}
var Rm = (() => {
  let e = class e {
    constructor(n) {
      if (((this.value = "ltr"), (this.change = new he()), n)) {
        let r = n.body ? n.body.dir : null,
          o = n.documentElement ? n.documentElement.dir : null;
        this.value = fI(r || o || "ltr");
      }
    }
    ngOnDestroy() {
      this.change.complete();
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(p(lI, 8));
  }),
    (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
var km = class {
  constructor(e, i, n, r, o) {
    (this._defaultMatcher = e),
      (this.ngControl = i),
      (this._parentFormGroup = n),
      (this._parentForm = r),
      (this._stateChanges = o),
      (this.errorState = !1);
  }
  updateErrorState() {
    let e = this.errorState,
      i = this._parentFormGroup || this._parentForm,
      n = this.matcher || this._defaultMatcher,
      r = this.ngControl ? this.ngControl.control : null,
      o = n?.isErrorState(r, i) ?? !1;
    o !== e && ((this.errorState = o), this._stateChanges.next());
  }
};
var _F = (() => {
  let e = class e {
    isErrorState(n, r) {
      return !!(n && n.invalid && (n.touched || (r && r.submitted)));
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
var Te = (function (t) {
    return (
      (t[(t.FADING_IN = 0)] = "FADING_IN"),
      (t[(t.VISIBLE = 1)] = "VISIBLE"),
      (t[(t.FADING_OUT = 2)] = "FADING_OUT"),
      (t[(t.HIDDEN = 3)] = "HIDDEN"),
      t
    );
  })(Te || {}),
  Nl = class {
    constructor(e, i, n, r = !1) {
      (this._renderer = e),
        (this.element = i),
        (this.config = n),
        (this._animationForciblyDisabledThroughCss = r),
        (this.state = Te.HIDDEN);
    }
    fadeOut() {
      this._renderer.fadeOutRipple(this);
    }
  },
  Fm = qn({ passive: !0, capture: !0 }),
  Ol = class {
    constructor() {
      (this._events = new Map()),
        (this._delegateEventHandler = (e) => {
          let i = Be(e);
          i &&
            this._events.get(e.type)?.forEach((n, r) => {
              (r === i || r.contains(i)) && n.forEach((o) => o.handleEvent(e));
            });
        });
    }
    addHandler(e, i, n, r) {
      let o = this._events.get(i);
      if (o) {
        let s = o.get(n);
        s ? s.add(r) : o.set(n, new Set([r]));
      } else
        this._events.set(i, new Map([[n, new Set([r])]])),
          e.runOutsideAngular(() => {
            document.addEventListener(i, this._delegateEventHandler, Fm);
          });
    }
    removeHandler(e, i, n) {
      let r = this._events.get(e);
      if (!r) return;
      let o = r.get(i);
      o &&
        (o.delete(n),
        o.size === 0 && r.delete(i),
        r.size === 0 &&
          (this._events.delete(e),
          document.removeEventListener(e, this._delegateEventHandler, Fm)));
    }
  },
  Pm = { enterDuration: 225, exitDuration: 150 },
  pI = 800,
  Lm = qn({ passive: !0, capture: !0 }),
  jm = ["mousedown", "touchstart"],
  Vm = ["mouseup", "mouseleave", "touchend", "touchcancel"],
  Ui = class Ui {
    constructor(e, i, n, r) {
      (this._target = e),
        (this._ngZone = i),
        (this._platform = r),
        (this._isPointerDown = !1),
        (this._activeRipples = new Map()),
        (this._pointerUpEventsRegistered = !1),
        r.isBrowser && (this._containerElement = ft(n));
    }
    fadeInRipple(e, i, n = {}) {
      let r = (this._containerRect =
          this._containerRect ||
          this._containerElement.getBoundingClientRect()),
        o = P(P({}, Pm), n.animation);
      n.centered && ((e = r.left + r.width / 2), (i = r.top + r.height / 2));
      let s = n.radius || mI(e, i, r),
        a = e - r.left,
        c = i - r.top,
        l = o.enterDuration,
        d = document.createElement("div");
      d.classList.add("mat-ripple-element"),
        (d.style.left = `${a - s}px`),
        (d.style.top = `${c - s}px`),
        (d.style.height = `${s * 2}px`),
        (d.style.width = `${s * 2}px`),
        n.color != null && (d.style.backgroundColor = n.color),
        (d.style.transitionDuration = `${l}ms`),
        this._containerElement.appendChild(d);
      let u = window.getComputedStyle(d),
        f = u.transitionProperty,
        h = u.transitionDuration,
        m =
          f === "none" ||
          h === "0s" ||
          h === "0s, 0s" ||
          (r.width === 0 && r.height === 0),
        g = new Nl(this, d, n, m);
      (d.style.transform = "scale3d(1, 1, 1)"),
        (g.state = Te.FADING_IN),
        n.persistent || (this._mostRecentTransientRipple = g);
      let v = null;
      return (
        !m &&
          (l || o.exitDuration) &&
          this._ngZone.runOutsideAngular(() => {
            let y = () => this._finishRippleTransition(g),
              V = () => this._destroyRipple(g);
            d.addEventListener("transitionend", y),
              d.addEventListener("transitioncancel", V),
              (v = { onTransitionEnd: y, onTransitionCancel: V });
          }),
        this._activeRipples.set(g, v),
        (m || !l) && this._finishRippleTransition(g),
        g
      );
    }
    fadeOutRipple(e) {
      if (e.state === Te.FADING_OUT || e.state === Te.HIDDEN) return;
      let i = e.element,
        n = P(P({}, Pm), e.config.animation);
      (i.style.transitionDuration = `${n.exitDuration}ms`),
        (i.style.opacity = "0"),
        (e.state = Te.FADING_OUT),
        (e._animationForciblyDisabledThroughCss || !n.exitDuration) &&
          this._finishRippleTransition(e);
    }
    fadeOutAll() {
      this._getActiveRipples().forEach((e) => e.fadeOut());
    }
    fadeOutAllNonPersistent() {
      this._getActiveRipples().forEach((e) => {
        e.config.persistent || e.fadeOut();
      });
    }
    setupTriggerEvents(e) {
      let i = ft(e);
      !this._platform.isBrowser ||
        !i ||
        i === this._triggerElement ||
        (this._removeTriggerEvents(),
        (this._triggerElement = i),
        jm.forEach((n) => {
          Ui._eventManager.addHandler(this._ngZone, n, i, this);
        }));
    }
    handleEvent(e) {
      e.type === "mousedown"
        ? this._onMousedown(e)
        : e.type === "touchstart"
          ? this._onTouchStart(e)
          : this._onPointerUp(),
        this._pointerUpEventsRegistered ||
          (this._ngZone.runOutsideAngular(() => {
            Vm.forEach((i) => {
              this._triggerElement.addEventListener(i, this, Lm);
            });
          }),
          (this._pointerUpEventsRegistered = !0));
    }
    _finishRippleTransition(e) {
      e.state === Te.FADING_IN
        ? this._startFadeOutTransition(e)
        : e.state === Te.FADING_OUT && this._destroyRipple(e);
    }
    _startFadeOutTransition(e) {
      let i = e === this._mostRecentTransientRipple,
        { persistent: n } = e.config;
      (e.state = Te.VISIBLE), !n && (!i || !this._isPointerDown) && e.fadeOut();
    }
    _destroyRipple(e) {
      let i = this._activeRipples.get(e) ?? null;
      this._activeRipples.delete(e),
        this._activeRipples.size || (this._containerRect = null),
        e === this._mostRecentTransientRipple &&
          (this._mostRecentTransientRipple = null),
        (e.state = Te.HIDDEN),
        i !== null &&
          (e.element.removeEventListener("transitionend", i.onTransitionEnd),
          e.element.removeEventListener(
            "transitioncancel",
            i.onTransitionCancel,
          )),
        e.element.remove();
    }
    _onMousedown(e) {
      let i = Ml(e),
        n =
          this._lastTouchStartEvent &&
          Date.now() < this._lastTouchStartEvent + pI;
      !this._target.rippleDisabled &&
        !i &&
        !n &&
        ((this._isPointerDown = !0),
        this.fadeInRipple(e.clientX, e.clientY, this._target.rippleConfig));
    }
    _onTouchStart(e) {
      if (!this._target.rippleDisabled && !Tl(e)) {
        (this._lastTouchStartEvent = Date.now()), (this._isPointerDown = !0);
        let i = e.changedTouches;
        if (i)
          for (let n = 0; n < i.length; n++)
            this.fadeInRipple(
              i[n].clientX,
              i[n].clientY,
              this._target.rippleConfig,
            );
      }
    }
    _onPointerUp() {
      this._isPointerDown &&
        ((this._isPointerDown = !1),
        this._getActiveRipples().forEach((e) => {
          let i =
            e.state === Te.VISIBLE ||
            (e.config.terminateOnPointerUp && e.state === Te.FADING_IN);
          !e.config.persistent && i && e.fadeOut();
        }));
    }
    _getActiveRipples() {
      return Array.from(this._activeRipples.keys());
    }
    _removeTriggerEvents() {
      let e = this._triggerElement;
      e &&
        (jm.forEach((i) => Ui._eventManager.removeHandler(i, e, this)),
        this._pointerUpEventsRegistered &&
          Vm.forEach((i) => e.removeEventListener(i, this, Lm)));
    }
  };
Ui._eventManager = new Ol();
var Rl = Ui;
function mI(t, e, i) {
  let n = Math.max(Math.abs(t - i.left), Math.abs(t - i.right)),
    r = Math.max(Math.abs(e - i.top), Math.abs(e - i.bottom));
  return Math.sqrt(n * n + r * r);
}
var $m = new D("mat-ripple-global-options"),
  gI = (() => {
    let e = class e {
      get disabled() {
        return this._disabled;
      }
      set disabled(n) {
        n && this.fadeOutAllNonPersistent(),
          (this._disabled = n),
          this._setupTriggerEventsIfEnabled();
      }
      get trigger() {
        return this._trigger || this._elementRef.nativeElement;
      }
      set trigger(n) {
        (this._trigger = n), this._setupTriggerEventsIfEnabled();
      }
      constructor(n, r, o, s, a) {
        (this._elementRef = n),
          (this._animationMode = a),
          (this.radius = 0),
          (this._disabled = !1),
          (this._isInitialized = !1),
          (this._globalOptions = s || {}),
          (this._rippleRenderer = new Rl(this, r, n, o));
      }
      ngOnInit() {
        (this._isInitialized = !0), this._setupTriggerEventsIfEnabled();
      }
      ngOnDestroy() {
        this._rippleRenderer._removeTriggerEvents();
      }
      fadeOutAll() {
        this._rippleRenderer.fadeOutAll();
      }
      fadeOutAllNonPersistent() {
        this._rippleRenderer.fadeOutAllNonPersistent();
      }
      get rippleConfig() {
        return {
          centered: this.centered,
          radius: this.radius,
          color: this.color,
          animation: P(
            P(
              P({}, this._globalOptions.animation),
              this._animationMode === "NoopAnimations"
                ? { enterDuration: 0, exitDuration: 0 }
                : {},
            ),
            this.animation,
          ),
          terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
        };
      }
      get rippleDisabled() {
        return this.disabled || !!this._globalOptions.disabled;
      }
      _setupTriggerEventsIfEnabled() {
        !this.disabled &&
          this._isInitialized &&
          this._rippleRenderer.setupTriggerEvents(this.trigger);
      }
      launch(n, r = 0, o) {
        return typeof n == "number"
          ? this._rippleRenderer.fadeInRipple(
              n,
              r,
              P(P({}, this.rippleConfig), o),
            )
          : this._rippleRenderer.fadeInRipple(
              0,
              0,
              P(P({}, this.rippleConfig), n),
            );
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(F(q), F(N), F(Y), F($m, 8), F(It, 8));
    }),
      (e.ɵdir = Q({
        type: e,
        selectors: [
          ["", "mat-ripple", ""],
          ["", "matRipple", ""],
        ],
        hostAttrs: [1, "mat-ripple"],
        hostVars: 2,
        hostBindings: function (r, o) {
          r & 2 && Ve("mat-ripple-unbounded", o.unbounded);
        },
        inputs: {
          color: [U.None, "matRippleColor", "color"],
          unbounded: [U.None, "matRippleUnbounded", "unbounded"],
          centered: [U.None, "matRippleCentered", "centered"],
          radius: [U.None, "matRippleRadius", "radius"],
          animation: [U.None, "matRippleAnimation", "animation"],
          disabled: [U.None, "matRippleDisabled", "disabled"],
          trigger: [U.None, "matRippleTrigger", "trigger"],
        },
        exportAs: ["matRipple"],
        standalone: !0,
      }));
    let t = e;
    return t;
  })();
var Bm = { capture: !0 },
  Hm = ["focus", "click", "mouseenter", "touchstart"],
  Sl = "mat-ripple-loader-uninitialized",
  Al = "mat-ripple-loader-class-name",
  Um = "mat-ripple-loader-centered",
  rs = "mat-ripple-loader-disabled",
  zm = (() => {
    let e = class e {
      constructor() {
        (this._document = _(R, { optional: !0 })),
          (this._animationMode = _(It, { optional: !0 })),
          (this._globalRippleOptions = _($m, { optional: !0 })),
          (this._platform = _(Y)),
          (this._ngZone = _(N)),
          (this._hosts = new Map()),
          (this._onInteraction = (n) => {
            if (!(n.target instanceof HTMLElement)) return;
            let o = n.target.closest(`[${Sl}]`);
            o && this._createRipple(o);
          }),
          this._ngZone.runOutsideAngular(() => {
            for (let n of Hm)
              this._document?.addEventListener(n, this._onInteraction, Bm);
          });
      }
      ngOnDestroy() {
        let n = this._hosts.keys();
        for (let r of n) this.destroyRipple(r);
        for (let r of Hm)
          this._document?.removeEventListener(r, this._onInteraction, Bm);
      }
      configureRipple(n, r) {
        n.setAttribute(Sl, ""),
          (r.className || !n.hasAttribute(Al)) &&
            n.setAttribute(Al, r.className || ""),
          r.centered && n.setAttribute(Um, ""),
          r.disabled && n.setAttribute(rs, "");
      }
      getRipple(n) {
        return this._hosts.get(n) || this._createRipple(n);
      }
      setDisabled(n, r) {
        let o = this._hosts.get(n);
        if (o) {
          o.disabled = r;
          return;
        }
        r ? n.setAttribute(rs, "") : n.removeAttribute(rs);
      }
      _createRipple(n) {
        if (!this._document) return;
        let r = this._hosts.get(n);
        if (r) return r;
        n.querySelector(".mat-ripple")?.remove();
        let o = this._document.createElement("span");
        o.classList.add("mat-ripple", n.getAttribute(Al)), n.append(o);
        let s = new gI(
          new q(o),
          this._ngZone,
          this._platform,
          this._globalRippleOptions ? this._globalRippleOptions : void 0,
          this._animationMode ? this._animationMode : void 0,
        );
        return (
          (s._isInitialized = !0),
          (s.trigger = n),
          (s.centered = n.hasAttribute(Um)),
          (s.disabled = n.hasAttribute(rs)),
          this.attachRipple(n, s),
          s
        );
      }
      attachRipple(n, r) {
        n.removeAttribute(Sl), this._hosts.set(n, r);
      }
      destroyRipple(n) {
        let r = this._hosts.get(n);
        r && (r.ngOnDestroy(), this._hosts.delete(n));
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })();
var bI = ["mat-button", ""],
  vI = [
    [
      ["", 8, "material-icons", 3, "iconPositionEnd", ""],
      ["mat-icon", 3, "iconPositionEnd", ""],
      ["", "matButtonIcon", "", 3, "iconPositionEnd", ""],
    ],
    "*",
    [
      ["", "iconPositionEnd", "", 8, "material-icons"],
      ["mat-icon", "iconPositionEnd", ""],
      ["", "matButtonIcon", "", "iconPositionEnd", ""],
    ],
  ],
  yI = [
    ".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])",
    "*",
    ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]",
  ];
var _I =
  ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}";
var DI = ["mat-icon-button", ""],
  wI = ["*"];
var EI = new D("MAT_BUTTON_CONFIG");
var II = [
    { attribute: "mat-button", mdcClasses: ["mdc-button", "mat-mdc-button"] },
    {
      attribute: "mat-flat-button",
      mdcClasses: [
        "mdc-button",
        "mdc-button--unelevated",
        "mat-mdc-unelevated-button",
      ],
    },
    {
      attribute: "mat-raised-button",
      mdcClasses: ["mdc-button", "mdc-button--raised", "mat-mdc-raised-button"],
    },
    {
      attribute: "mat-stroked-button",
      mdcClasses: [
        "mdc-button",
        "mdc-button--outlined",
        "mat-mdc-outlined-button",
      ],
    },
    { attribute: "mat-fab", mdcClasses: ["mdc-fab", "mat-mdc-fab"] },
    {
      attribute: "mat-mini-fab",
      mdcClasses: ["mdc-fab", "mdc-fab--mini", "mat-mdc-mini-fab"],
    },
    {
      attribute: "mat-icon-button",
      mdcClasses: ["mdc-icon-button", "mat-mdc-icon-button"],
    },
  ],
  Wm = (() => {
    let e = class e {
      get ripple() {
        return this._rippleLoader?.getRipple(this._elementRef.nativeElement);
      }
      set ripple(n) {
        this._rippleLoader?.attachRipple(this._elementRef.nativeElement, n);
      }
      get disableRipple() {
        return this._disableRipple;
      }
      set disableRipple(n) {
        (this._disableRipple = n), this._updateRippleDisabled();
      }
      get disabled() {
        return this._disabled;
      }
      set disabled(n) {
        (this._disabled = n), this._updateRippleDisabled();
      }
      constructor(n, r, o, s) {
        (this._elementRef = n),
          (this._platform = r),
          (this._ngZone = o),
          (this._animationMode = s),
          (this._focusMonitor = _(Om)),
          (this._rippleLoader = _(zm)),
          (this._isFab = !1),
          (this._disableRipple = !1),
          (this._disabled = !1);
        let a = _(EI, { optional: !0 }),
          c = n.nativeElement,
          l = c.classList;
        (this.disabledInteractive = a?.disabledInteractive ?? !1),
          this._rippleLoader?.configureRipple(c, {
            className: "mat-mdc-button-ripple",
          });
        for (let { attribute: d, mdcClasses: u } of II)
          c.hasAttribute(d) && l.add(...u);
      }
      ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, !0);
      }
      ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef),
          this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
      }
      focus(n = "program", r) {
        n
          ? this._focusMonitor.focusVia(this._elementRef.nativeElement, n, r)
          : this._elementRef.nativeElement.focus(r);
      }
      _getAriaDisabled() {
        return this.ariaDisabled != null
          ? this.ariaDisabled
          : this.disabled && this.disabledInteractive
            ? !0
            : null;
      }
      _getDisabledAttribute() {
        return this.disabledInteractive || !this.disabled ? null : !0;
      }
      _updateRippleDisabled() {
        this._rippleLoader?.setDisabled(
          this._elementRef.nativeElement,
          this.disableRipple || this.disabled,
        );
      }
    };
    (e.ɵfac = function (r) {
      vh();
    }),
      (e.ɵdir = Q({
        type: e,
        inputs: {
          color: "color",
          disableRipple: [
            U.HasDecoratorInputTransform,
            "disableRipple",
            "disableRipple",
            ut,
          ],
          disabled: [U.HasDecoratorInputTransform, "disabled", "disabled", ut],
          ariaDisabled: [
            U.HasDecoratorInputTransform,
            "aria-disabled",
            "ariaDisabled",
            ut,
          ],
          disabledInteractive: [
            U.HasDecoratorInputTransform,
            "disabledInteractive",
            "disabledInteractive",
            ut,
          ],
        },
        features: [nn],
      }));
    let t = e;
    return t;
  })();
var PF = (() => {
  let e = class e extends Wm {
    constructor(n, r, o, s) {
      super(n, r, o, s);
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(F(q), F(Y), F(N), F(It, 8));
  }),
    (e.ɵcmp = _t({
      type: e,
      selectors: [
        ["button", "mat-button", ""],
        ["button", "mat-raised-button", ""],
        ["button", "mat-flat-button", ""],
        ["button", "mat-stroked-button", ""],
      ],
      hostVars: 14,
      hostBindings: function (r, o) {
        r & 2 &&
          (Vn("disabled", o._getDisabledAttribute())(
            "aria-disabled",
            o._getAriaDisabled(),
          ),
          Xc(o.color ? "mat-" + o.color : ""),
          Ve("mat-mdc-button-disabled", o.disabled)(
            "mat-mdc-button-disabled-interactive",
            o.disabledInteractive,
          )("_mat-animation-noopable", o._animationMode === "NoopAnimations")(
            "mat-unthemed",
            !o.color,
          )("mat-mdc-button-base", !0));
      },
      exportAs: ["matButton"],
      standalone: !0,
      features: [tn, Ot],
      attrs: bI,
      ngContentSelectors: yI,
      decls: 7,
      vars: 4,
      consts: [
        [1, "mat-mdc-button-persistent-ripple"],
        [1, "mdc-button__label"],
        [1, "mat-mdc-focus-indicator"],
        [1, "mat-mdc-button-touch-target"],
      ],
      template: function (r, o) {
        r & 1 &&
          (Nt(vI),
          At(0, "span", 0),
          Ce(1),
          Tt(2, "span", 1),
          Ce(3, 1),
          St(),
          Ce(4, 2),
          At(5, "span", 2)(6, "span", 3)),
          r & 2 &&
            Ve("mdc-button__ripple", !o._isFab)("mdc-fab__ripple", o._isFab);
      },
      styles: [
        '.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0)}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__progress-indicator{font-size:0;position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;line-height:initial}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px);display:none}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring{border-color:CanvasText}}.mdc-button .mdc-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring::after{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{display:block}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button{font-family:var(--mdc-text-button-label-text-font);font-size:var(--mdc-text-button-label-text-size);letter-spacing:var(--mdc-text-button-label-text-tracking);font-weight:var(--mdc-text-button-label-text-weight);text-transform:var(--mdc-text-button-label-text-transform);height:var(--mdc-text-button-container-height);border-radius:var(--mdc-text-button-container-shape);padding:0 var(--mat-text-button-horizontal-padding, 8px)}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color)}.mat-mdc-button:disabled{color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape)}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color)}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color)}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity)}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity)}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity)}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{font-family:var(--mdc-filled-button-label-text-font);font-size:var(--mdc-filled-button-label-text-size);letter-spacing:var(--mdc-filled-button-label-text-tracking);font-weight:var(--mdc-filled-button-label-text-weight);text-transform:var(--mdc-filled-button-label-text-transform);height:var(--mdc-filled-button-container-height);border-radius:var(--mdc-filled-button-container-shape);padding:0 var(--mat-filled-button-horizontal-padding, 16px)}.mat-mdc-unelevated-button:not(:disabled){background-color:var(--mdc-filled-button-container-color)}.mat-mdc-unelevated-button:disabled{background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color)}.mat-mdc-unelevated-button:disabled{color:var(--mdc-filled-button-disabled-label-text-color)}.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape)}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color)}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity)}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity)}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity)}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{font-family:var(--mdc-protected-button-label-text-font);font-size:var(--mdc-protected-button-label-text-size);letter-spacing:var(--mdc-protected-button-label-text-tracking);font-weight:var(--mdc-protected-button-label-text-weight);text-transform:var(--mdc-protected-button-label-text-transform);height:var(--mdc-protected-button-container-height);border-radius:var(--mdc-protected-button-container-shape);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow)}.mat-mdc-raised-button:not(:disabled){background-color:var(--mdc-protected-button-container-color)}.mat-mdc-raised-button:disabled{background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color)}.mat-mdc-raised-button:disabled{color:var(--mdc-protected-button-disabled-label-text-color)}.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape)}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color)}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color)}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity)}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity)}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity)}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow)}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow)}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow)}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow)}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{font-family:var(--mdc-outlined-button-label-text-font);font-size:var(--mdc-outlined-button-label-text-size);letter-spacing:var(--mdc-outlined-button-label-text-tracking);font-weight:var(--mdc-outlined-button-label-text-weight);text-transform:var(--mdc-outlined-button-label-text-transform);height:var(--mdc-outlined-button-container-height);border-radius:var(--mdc-outlined-button-container-shape);padding:0 15px 0 15px;border-width:var(--mdc-outlined-button-outline-width);padding:0 var(--mat-outlined-button-horizontal-padding, 15px)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color)}.mat-mdc-outlined-button:disabled{color:var(--mdc-outlined-button-disabled-label-text-color)}.mat-mdc-outlined-button .mdc-button__ripple{border-radius:var(--mdc-outlined-button-container-shape)}.mat-mdc-outlined-button:not(:disabled){border-color:var(--mdc-outlined-button-outline-color)}.mat-mdc-outlined-button:disabled{border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mdc-button--icon-trailing{padding:0 11px 0 15px}.mat-mdc-outlined-button.mdc-button--icon-leading{padding:0 15px 0 11px}.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button .mdc-button__touch{left:calc(-1 * var(--mdc-outlined-button-outline-width));width:calc(100% + 2 * var(--mdc-outlined-button-outline-width))}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color)}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity)}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity)}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity)}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-button-base{text-decoration:none}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}',
        ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}",
      ],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let t = e;
  return t;
})();
var LF = (() => {
  let e = class e extends Wm {
    constructor(n, r, o, s) {
      super(n, r, o, s),
        this._rippleLoader.configureRipple(this._elementRef.nativeElement, {
          centered: !0,
        });
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(F(q), F(Y), F(N), F(It, 8));
  }),
    (e.ɵcmp = _t({
      type: e,
      selectors: [["button", "mat-icon-button", ""]],
      hostVars: 14,
      hostBindings: function (r, o) {
        r & 2 &&
          (Vn("disabled", o._getDisabledAttribute())(
            "aria-disabled",
            o._getAriaDisabled(),
          ),
          Xc(o.color ? "mat-" + o.color : ""),
          Ve("mat-mdc-button-disabled", o.disabled)(
            "mat-mdc-button-disabled-interactive",
            o.disabledInteractive,
          )("_mat-animation-noopable", o._animationMode === "NoopAnimations")(
            "mat-unthemed",
            !o.color,
          )("mat-mdc-button-base", !0));
      },
      exportAs: ["matButton"],
      standalone: !0,
      features: [tn, Ot],
      attrs: DI,
      ngContentSelectors: wI,
      decls: 4,
      vars: 0,
      consts: [
        [1, "mat-mdc-button-persistent-ripple", "mdc-icon-button__ripple"],
        [1, "mat-mdc-focus-indicator"],
        [1, "mat-mdc-button-touch-target"],
      ],
      template: function (r, o) {
        r & 1 &&
          (Nt(), At(0, "span", 0), Ce(1), At(2, "span", 1)(3, "span", 2));
      },
      styles: [
        '.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block}}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button[hidden]{display:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%;display:none}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring{border-color:CanvasText}}.mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mat-mdc-icon-button{color:var(--mdc-icon-button-icon-color)}.mat-mdc-icon-button .mdc-button__icon{font-size:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button svg,.mat-mdc-icon-button img{width:var(--mdc-icon-button-icon-size);height:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button:disabled{color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button{border-radius:50%;flex-shrink:0;text-align:center;width:var(--mdc-icon-button-state-layer-size, 48px);height:var(--mdc-icon-button-state-layer-size, 48px);padding:calc(calc(var(--mdc-icon-button-state-layer-size, 48px) - var(--mdc-icon-button-icon-size, 24px)) / 2);font-size:var(--mdc-icon-button-icon-size);-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button svg{vertical-align:baseline}.mat-mdc-icon-button[disabled],.mat-mdc-icon-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-icon-button .mdc-button__label{z-index:1}.mat-mdc-icon-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-icon-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-icon-button-ripple-color)}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-state-layer-color)}.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-disabled-state-layer-color)}.mat-mdc-icon-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-hover-state-layer-opacity)}.mat-mdc-icon-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-focus-state-layer-opacity)}.mat-mdc-icon-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-pressed-state-layer-opacity)}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-icon-button-touch-target-display)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:50%}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}',
        _I,
      ],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let t = e;
  return t;
})();
var Gm = (() => {
  let e = class e {
    constructor() {
      (this.config = _(bm)), (this.http = _(hl));
    }
    endpointEnabled(n) {
      return this.config.apiEndpointsEnabled[n];
    }
    getUrl(n, r) {
      return ki.joinWithSlash(this.config.apiEndpoints[n], r);
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵprov = b({ token: e, factory: e.ɵfac }));
  let t = e;
  return t;
})();
var YF = (() => {
  let e = class e extends Gm {
    createNewProduct(n) {
      if (!this.endpointEnabled("bff"))
        return (
          console.warn(
            'Endpoint "bff" is disabled. To enable change your environment.ts config',
          ),
          He
        );
      let r = this.getUrl("bff", "products");
      return this.http.post(r, n);
    }
    editProduct(n, r) {
      if (!this.endpointEnabled("bff"))
        return (
          console.warn(
            'Endpoint "bff" is disabled. To enable change your environment.ts config',
          ),
          He
        );
      let o = this.getUrl("bff", `products/${n}`);
      return this.http.put(o, r);
    }
    getProductById(n) {
      if (!this.endpointEnabled("bff"))
        return (
          console.warn(
            'Endpoint "bff" is disabled. To enable change your environment.ts config',
          ),
          this.http
            .get("/assets/products.json")
            .pipe(G((o) => o.find((s) => s.id === n) || null))
        );
      let r = this.getUrl("bff", `products/${n}`);
      return this.http.get(r).pipe(G((o) => o.product));
    }
    getProducts() {
      if (!this.endpointEnabled("bff"))
        return (
          console.warn(
            'Endpoint "bff" is disabled. To enable change your environment.ts config',
          ),
          this.http.get("/assets/products.json")
        );
      let n = this.getUrl("bff", "products");
      return this.http.get(n);
    }
    getProductsForCheckout(n) {
      return n.length
        ? this.getProducts().pipe(G((r) => r.filter((o) => n.includes(o.id))))
        : Ae([]);
    }
  };
  (e.ɵfac = (() => {
    let n;
    return function (o) {
      return (n || (n = Sc(e)))(o || e);
    };
  })()),
    (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let t = e;
  return t;
})();
var xI = ["*"];
var CI = [
    [
      ["", "mat-card-avatar", ""],
      ["", "matCardAvatar", ""],
    ],
    [
      ["mat-card-title"],
      ["mat-card-subtitle"],
      ["", "mat-card-title", ""],
      ["", "mat-card-subtitle", ""],
      ["", "matCardTitle", ""],
      ["", "matCardSubtitle", ""],
    ],
    "*",
  ],
  MI = [
    "[mat-card-avatar], [matCardAvatar]",
    `mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,
    "*",
  ],
  TI = new D("MAT_CARD_CONFIG"),
  o1 = (() => {
    let e = class e {
      constructor(n) {
        this.appearance = n?.appearance || "raised";
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(F(TI, 8));
    }),
      (e.ɵcmp = _t({
        type: e,
        selectors: [["mat-card"]],
        hostAttrs: [1, "mat-mdc-card", "mdc-card"],
        hostVars: 4,
        hostBindings: function (r, o) {
          r & 2 &&
            Ve("mat-mdc-card-outlined", o.appearance === "outlined")(
              "mdc-card--outlined",
              o.appearance === "outlined",
            );
        },
        inputs: { appearance: "appearance" },
        exportAs: ["matCard"],
        standalone: !0,
        features: [Ot],
        ngContentSelectors: xI,
        decls: 1,
        vars: 0,
        template: function (r, o) {
          r & 1 && (Nt(), Ce(0));
        },
        styles: [
          '.mdc-card{display:flex;flex-direction:column;box-sizing:border-box}.mdc-card::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none;pointer-events:none}@media screen and (forced-colors: active){.mdc-card::after{border-color:CanvasText}}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0, 0, 0, 0.6);flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0, 0, 0, 0.6)}.mat-mdc-card{border-radius:var(--mdc-elevated-card-container-shape);background-color:var(--mdc-elevated-card-container-color);border-width:0;border-style:solid;border-color:var(--mdc-elevated-card-container-color);box-shadow:var(--mdc-elevated-card-container-elevation)}.mat-mdc-card .mdc-card::after{border-radius:var(--mdc-elevated-card-container-shape)}.mat-mdc-card-outlined{border-width:var(--mdc-outlined-card-outline-width);border-style:solid;border-color:var(--mdc-outlined-card-outline-color);border-radius:var(--mdc-outlined-card-container-shape);background-color:var(--mdc-outlined-card-container-color);box-shadow:var(--mdc-outlined-card-container-elevation)}.mat-mdc-card-outlined .mdc-card::after{border-radius:var(--mdc-outlined-card-container-shape)}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font);line-height:var(--mat-card-title-text-line-height);font-size:var(--mat-card-title-text-size);letter-spacing:var(--mat-card-title-text-tracking);font-weight:var(--mat-card-title-text-weight)}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color);font-family:var(--mat-card-subtitle-text-font);line-height:var(--mat-card-subtitle-text-line-height);font-size:var(--mat-card-subtitle-text-size);letter-spacing:var(--mat-card-subtitle-text-tracking);font-weight:var(--mat-card-subtitle-text-weight)}.mat-mdc-card{position:relative}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let t = e;
    return t;
  })(),
  s1 = (() => {
    let e = class e {};
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵdir = Q({
        type: e,
        selectors: [
          ["mat-card-title"],
          ["", "mat-card-title", ""],
          ["", "matCardTitle", ""],
        ],
        hostAttrs: [1, "mat-mdc-card-title"],
        standalone: !0,
      }));
    let t = e;
    return t;
  })();
var a1 = (() => {
  let e = class e {};
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵdir = Q({
      type: e,
      selectors: [["mat-card-content"]],
      hostAttrs: [1, "mat-mdc-card-content"],
      standalone: !0,
    }));
  let t = e;
  return t;
})();
var c1 = (() => {
    let e = class e {
      constructor() {
        this.align = "start";
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵdir = Q({
        type: e,
        selectors: [["mat-card-actions"]],
        hostAttrs: [1, "mat-mdc-card-actions", "mdc-card__actions"],
        hostVars: 2,
        hostBindings: function (r, o) {
          r & 2 && Ve("mat-mdc-card-actions-align-end", o.align === "end");
        },
        inputs: { align: "align" },
        exportAs: ["matCardActions"],
        standalone: !0,
      }));
    let t = e;
    return t;
  })(),
  l1 = (() => {
    let e = class e {};
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵcmp = _t({
        type: e,
        selectors: [["mat-card-header"]],
        hostAttrs: [1, "mat-mdc-card-header"],
        standalone: !0,
        features: [Ot],
        ngContentSelectors: MI,
        decls: 4,
        vars: 0,
        consts: [[1, "mat-mdc-card-header-text"]],
        template: function (r, o) {
          r & 1 && (Nt(CI), Ce(0), Tt(1, "div", 0), Ce(2, 1), St(), Ce(3, 2));
        },
        encapsulation: 2,
        changeDetection: 0,
      }));
    let t = e;
    return t;
  })();
var d1 = (() => {
  let e = class e {};
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵdir = Q({
      type: e,
      selectors: [
        ["", "mat-card-image", ""],
        ["", "matCardImage", ""],
      ],
      hostAttrs: [1, "mat-mdc-card-image", "mdc-card__media"],
      standalone: !0,
    }));
  let t = e;
  return t;
})();
function SI(t) {
  t || (yo(SI), (t = _(Et)));
  let e = new S((i) => t.onDestroy(i.next.bind(i)));
  return (i) => i.pipe($e(e));
}
function AI(t, e) {
  let i = !e?.manualCleanup;
  i && !e?.injector && yo(AI);
  let n = i ? e?.injector?.get(Et) ?? _(Et) : null,
    r;
  e?.requireSync
    ? (r = Vo({ kind: 0 }))
    : (r = Vo({ kind: 1, value: e?.initialValue }));
  let o = t.subscribe({
    next: (s) => r.set({ kind: 1, value: s }),
    error: (s) => {
      if (e?.rejectErrors) throw s;
      r.set({ kind: 2, error: s });
    },
  });
  return (
    n?.onDestroy(o.unsubscribe.bind(o)),
    Rp(() => {
      let s = r();
      switch (s.kind) {
        case 1:
          return s.value;
        case 2:
          throw s.error;
        case 0:
          throw new x(
            601,
            "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.",
          );
      }
    })
  );
}
var $i = class {
    attach(e) {
      return (this._attachedHost = e), e.attach(this);
    }
    detach() {
      let e = this._attachedHost;
      e != null && ((this._attachedHost = null), e.detach());
    }
    get isAttached() {
      return this._attachedHost != null;
    }
    setAttachedHost(e) {
      this._attachedHost = e;
    }
  },
  kl = class extends $i {
    constructor(e, i, n, r, o) {
      super(),
        (this.component = e),
        (this.viewContainerRef = i),
        (this.injector = n),
        (this.componentFactoryResolver = r),
        (this.projectableNodes = o);
    }
  },
  os = class extends $i {
    constructor(e, i, n, r) {
      super(),
        (this.templateRef = e),
        (this.viewContainerRef = i),
        (this.context = n),
        (this.injector = r);
    }
    get origin() {
      return this.templateRef.elementRef;
    }
    attach(e, i = this.context) {
      return (this.context = i), super.attach(e);
    }
    detach() {
      return (this.context = void 0), super.detach();
    }
  },
  Fl = class extends $i {
    constructor(e) {
      super(), (this.element = e instanceof q ? e.nativeElement : e);
    }
  },
  ss = class {
    constructor() {
      (this._isDisposed = !1), (this.attachDomPortal = null);
    }
    hasAttached() {
      return !!this._attachedPortal;
    }
    attach(e) {
      if (e instanceof kl)
        return (this._attachedPortal = e), this.attachComponentPortal(e);
      if (e instanceof os)
        return (this._attachedPortal = e), this.attachTemplatePortal(e);
      if (this.attachDomPortal && e instanceof Fl)
        return (this._attachedPortal = e), this.attachDomPortal(e);
    }
    detach() {
      this._attachedPortal &&
        (this._attachedPortal.setAttachedHost(null),
        (this._attachedPortal = null)),
        this._invokeDisposeFn();
    }
    dispose() {
      this.hasAttached() && this.detach(),
        this._invokeDisposeFn(),
        (this._isDisposed = !0);
    }
    setDisposeFn(e) {
      this._disposeFn = e;
    }
    _invokeDisposeFn() {
      this._disposeFn && (this._disposeFn(), (this._disposeFn = null));
    }
  };
var as = class extends ss {
  constructor(e, i, n, r, o) {
    super(),
      (this.outletElement = e),
      (this._componentFactoryResolver = i),
      (this._appRef = n),
      (this._defaultInjector = r),
      (this.attachDomPortal = (s) => {
        this._document;
        let a = s.element;
        a.parentNode;
        let c = this._document.createComment("dom-portal");
        a.parentNode.insertBefore(c, a),
          this.outletElement.appendChild(a),
          (this._attachedPortal = s),
          super.setDisposeFn(() => {
            c.parentNode && c.parentNode.replaceChild(a, c);
          });
      }),
      (this._document = o);
  }
  attachComponentPortal(e) {
    let n = (
        e.componentFactoryResolver || this._componentFactoryResolver
      ).resolveComponentFactory(e.component),
      r;
    return (
      e.viewContainerRef
        ? ((r = e.viewContainerRef.createComponent(
            n,
            e.viewContainerRef.length,
            e.injector || e.viewContainerRef.injector,
            e.projectableNodes || void 0,
          )),
          this.setDisposeFn(() => r.destroy()))
        : ((r = n.create(e.injector || this._defaultInjector || ct.NULL)),
          this._appRef.attachView(r.hostView),
          this.setDisposeFn(() => {
            this._appRef.viewCount > 0 && this._appRef.detachView(r.hostView),
              r.destroy();
          })),
      this.outletElement.appendChild(this._getComponentRootNode(r)),
      (this._attachedPortal = e),
      r
    );
  }
  attachTemplatePortal(e) {
    let i = e.viewContainerRef,
      n = i.createEmbeddedView(e.templateRef, e.context, {
        injector: e.injector,
      });
    return (
      n.rootNodes.forEach((r) => this.outletElement.appendChild(r)),
      n.detectChanges(),
      this.setDisposeFn(() => {
        let r = i.indexOf(n);
        r !== -1 && i.remove(r);
      }),
      (this._attachedPortal = e),
      n
    );
  }
  dispose() {
    super.dispose(), this.outletElement.remove();
  }
  _getComponentRootNode(e) {
    return e.hostView.rootNodes[0];
  }
};
var x1 = (() => {
  let e = class e extends ss {
    constructor(n, r, o) {
      super(),
        (this._componentFactoryResolver = n),
        (this._viewContainerRef = r),
        (this._isInitialized = !1),
        (this.attached = new he()),
        (this.attachDomPortal = (s) => {
          this._document;
          let a = s.element;
          a.parentNode;
          let c = this._document.createComment("dom-portal");
          s.setAttachedHost(this),
            a.parentNode.insertBefore(c, a),
            this._getRootNode().appendChild(a),
            (this._attachedPortal = s),
            super.setDisposeFn(() => {
              c.parentNode && c.parentNode.replaceChild(a, c);
            });
        }),
        (this._document = o);
    }
    get portal() {
      return this._attachedPortal;
    }
    set portal(n) {
      (this.hasAttached() && !n && !this._isInitialized) ||
        (this.hasAttached() && super.detach(),
        n && super.attach(n),
        (this._attachedPortal = n || null));
    }
    get attachedRef() {
      return this._attachedRef;
    }
    ngOnInit() {
      this._isInitialized = !0;
    }
    ngOnDestroy() {
      super.dispose(), (this._attachedRef = this._attachedPortal = null);
    }
    attachComponentPortal(n) {
      n.setAttachedHost(this);
      let r =
          n.viewContainerRef != null
            ? n.viewContainerRef
            : this._viewContainerRef,
        s = (
          n.componentFactoryResolver || this._componentFactoryResolver
        ).resolveComponentFactory(n.component),
        a = r.createComponent(
          s,
          r.length,
          n.injector || r.injector,
          n.projectableNodes || void 0,
        );
      return (
        r !== this._viewContainerRef &&
          this._getRootNode().appendChild(a.hostView.rootNodes[0]),
        super.setDisposeFn(() => a.destroy()),
        (this._attachedPortal = n),
        (this._attachedRef = a),
        this.attached.emit(a),
        a
      );
    }
    attachTemplatePortal(n) {
      n.setAttachedHost(this);
      let r = this._viewContainerRef.createEmbeddedView(
        n.templateRef,
        n.context,
        { injector: n.injector },
      );
      return (
        super.setDisposeFn(() => this._viewContainerRef.clear()),
        (this._attachedPortal = n),
        (this._attachedRef = r),
        this.attached.emit(r),
        r
      );
    }
    _getRootNode() {
      let n = this._viewContainerRef.element.nativeElement;
      return n.nodeType === n.ELEMENT_NODE ? n : n.parentNode;
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(F(Ct), F(dt), F(R));
  }),
    (e.ɵdir = Q({
      type: e,
      selectors: [["", "cdkPortalOutlet", ""]],
      inputs: { portal: [U.None, "cdkPortalOutlet", "portal"] },
      outputs: { attached: "attached" },
      exportAs: ["cdkPortalOutlet"],
      standalone: !0,
      features: [tn],
    }));
  let t = e;
  return t;
})();
var Je = (function (t) {
    return (
      (t[(t.State = 0)] = "State"),
      (t[(t.Transition = 1)] = "Transition"),
      (t[(t.Sequence = 2)] = "Sequence"),
      (t[(t.Group = 3)] = "Group"),
      (t[(t.Animate = 4)] = "Animate"),
      (t[(t.Keyframes = 5)] = "Keyframes"),
      (t[(t.Style = 6)] = "Style"),
      (t[(t.Trigger = 7)] = "Trigger"),
      (t[(t.Reference = 8)] = "Reference"),
      (t[(t.AnimateChild = 9)] = "AnimateChild"),
      (t[(t.AnimateRef = 10)] = "AnimateRef"),
      (t[(t.Query = 11)] = "Query"),
      (t[(t.Stagger = 12)] = "Stagger"),
      t
    );
  })(Je || {}),
  M1 = "*";
function T1(t, e) {
  return { type: Je.Trigger, name: t, definitions: e, options: {} };
}
function S1(t, e = null) {
  return { type: Je.Animate, styles: e, timings: t };
}
function A1(t, e = null) {
  return { type: Je.Group, steps: t, options: e };
}
function N1(t, e = null) {
  return { type: Je.Sequence, steps: t, options: e };
}
function O1(t) {
  return { type: Je.Style, styles: t, offset: null };
}
function R1(t, e, i) {
  return { type: Je.State, name: t, styles: e, options: i };
}
function k1(t, e, i = null) {
  return { type: Je.Transition, expr: t, animation: e, options: i };
}
function F1(t = null) {
  return { type: Je.AnimateChild, options: t };
}
function P1(t, e, i = null) {
  return { type: Je.Query, selector: t, animation: e, options: i };
}
var qm = class {
    constructor(e = 0, i = 0) {
      (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._onDestroyFns = []),
        (this._originalOnDoneFns = []),
        (this._originalOnStartFns = []),
        (this._started = !1),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._position = 0),
        (this.parentPlayer = null),
        (this.totalTime = e + i);
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((e) => e()),
        (this._onDoneFns = []));
    }
    onStart(e) {
      this._originalOnStartFns.push(e), this._onStartFns.push(e);
    }
    onDone(e) {
      this._originalOnDoneFns.push(e), this._onDoneFns.push(e);
    }
    onDestroy(e) {
      this._onDestroyFns.push(e);
    }
    hasStarted() {
      return this._started;
    }
    init() {}
    play() {
      this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
        (this._started = !0);
    }
    triggerMicrotask() {
      queueMicrotask(() => this._onFinish());
    }
    _onStart() {
      this._onStartFns.forEach((e) => e()), (this._onStartFns = []);
    }
    pause() {}
    restart() {}
    finish() {
      this._onFinish();
    }
    destroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this.hasStarted() || this._onStart(),
        this.finish(),
        this._onDestroyFns.forEach((e) => e()),
        (this._onDestroyFns = []));
    }
    reset() {
      (this._started = !1),
        (this._finished = !1),
        (this._onStartFns = this._originalOnStartFns),
        (this._onDoneFns = this._originalOnDoneFns);
    }
    setPosition(e) {
      this._position = this.totalTime ? e * this.totalTime : 1;
    }
    getPosition() {
      return this.totalTime ? this._position / this.totalTime : 1;
    }
    triggerCallback(e) {
      let i = e == "start" ? this._onStartFns : this._onDoneFns;
      i.forEach((n) => n()), (i.length = 0);
    }
  },
  Ym = class {
    constructor(e) {
      (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._finished = !1),
        (this._started = !1),
        (this._destroyed = !1),
        (this._onDestroyFns = []),
        (this.parentPlayer = null),
        (this.totalTime = 0),
        (this.players = e);
      let i = 0,
        n = 0,
        r = 0,
        o = this.players.length;
      o == 0
        ? queueMicrotask(() => this._onFinish())
        : this.players.forEach((s) => {
            s.onDone(() => {
              ++i == o && this._onFinish();
            }),
              s.onDestroy(() => {
                ++n == o && this._onDestroy();
              }),
              s.onStart(() => {
                ++r == o && this._onStart();
              });
          }),
        (this.totalTime = this.players.reduce(
          (s, a) => Math.max(s, a.totalTime),
          0,
        ));
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((e) => e()),
        (this._onDoneFns = []));
    }
    init() {
      this.players.forEach((e) => e.init());
    }
    onStart(e) {
      this._onStartFns.push(e);
    }
    _onStart() {
      this.hasStarted() ||
        ((this._started = !0),
        this._onStartFns.forEach((e) => e()),
        (this._onStartFns = []));
    }
    onDone(e) {
      this._onDoneFns.push(e);
    }
    onDestroy(e) {
      this._onDestroyFns.push(e);
    }
    hasStarted() {
      return this._started;
    }
    play() {
      this.parentPlayer || this.init(),
        this._onStart(),
        this.players.forEach((e) => e.play());
    }
    pause() {
      this.players.forEach((e) => e.pause());
    }
    restart() {
      this.players.forEach((e) => e.restart());
    }
    finish() {
      this._onFinish(), this.players.forEach((e) => e.finish());
    }
    destroy() {
      this._onDestroy();
    }
    _onDestroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this._onFinish(),
        this.players.forEach((e) => e.destroy()),
        this._onDestroyFns.forEach((e) => e()),
        (this._onDestroyFns = []));
    }
    reset() {
      this.players.forEach((e) => e.reset()),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._started = !1);
    }
    setPosition(e) {
      let i = e * this.totalTime;
      this.players.forEach((n) => {
        let r = n.totalTime ? Math.min(1, i / n.totalTime) : 1;
        n.setPosition(r);
      });
    }
    getPosition() {
      let e = this.players.reduce(
        (i, n) => (i === null || n.totalTime > i.totalTime ? n : i),
        null,
      );
      return e != null ? e.getPosition() : 0;
    }
    beforeDestroy() {
      this.players.forEach((e) => {
        e.beforeDestroy && e.beforeDestroy();
      });
    }
    triggerCallback(e) {
      let i = e == "start" ? this._onStartFns : this._onDoneFns;
      i.forEach((n) => n()), (i.length = 0);
    }
  },
  L1 = "!";
function U1(t) {
  return t && typeof t.connect == "function" && !(t instanceof ni);
}
var cs = (function (t) {
    return (
      (t[(t.REPLACED = 0)] = "REPLACED"),
      (t[(t.INSERTED = 1)] = "INSERTED"),
      (t[(t.MOVED = 2)] = "MOVED"),
      (t[(t.REMOVED = 3)] = "REMOVED"),
      t
    );
  })(cs || {}),
  $1 = new D("_ViewRepeater"),
  Zm = class {
    applyChanges(e, i, n, r, o) {
      e.forEachOperation((s, a, c) => {
        let l, d;
        if (s.previousIndex == null) {
          let u = n(s, a, c);
          (l = i.createEmbeddedView(u.templateRef, u.context, u.index)),
            (d = cs.INSERTED);
        } else
          c == null
            ? (i.remove(a), (d = cs.REMOVED))
            : ((l = i.get(a)), i.move(l, c), (d = cs.MOVED));
        o && o({ context: l?.context, operation: d, record: s });
      });
    }
    detach() {}
  };
var NI = 20,
  Pl = (() => {
    let e = class e {
      constructor(n, r, o) {
        (this._ngZone = n),
          (this._platform = r),
          (this._scrolled = new L()),
          (this._globalSubscription = null),
          (this._scrolledCount = 0),
          (this.scrollContainers = new Map()),
          (this._document = o);
      }
      register(n) {
        this.scrollContainers.has(n) ||
          this.scrollContainers.set(
            n,
            n.elementScrolled().subscribe(() => this._scrolled.next(n)),
          );
      }
      deregister(n) {
        let r = this.scrollContainers.get(n);
        r && (r.unsubscribe(), this.scrollContainers.delete(n));
      }
      scrolled(n = NI) {
        return this._platform.isBrowser
          ? new S((r) => {
              this._globalSubscription || this._addGlobalListener();
              let o =
                n > 0
                  ? this._scrolled.pipe(wr(n)).subscribe(r)
                  : this._scrolled.subscribe(r);
              return (
                this._scrolledCount++,
                () => {
                  o.unsubscribe(),
                    this._scrolledCount--,
                    this._scrolledCount || this._removeGlobalListener();
                }
              );
            })
          : Ae();
      }
      ngOnDestroy() {
        this._removeGlobalListener(),
          this.scrollContainers.forEach((n, r) => this.deregister(r)),
          this._scrolled.complete();
      }
      ancestorScrolled(n, r) {
        let o = this.getAncestorScrollContainers(n);
        return this.scrolled(r).pipe(ne((s) => !s || o.indexOf(s) > -1));
      }
      getAncestorScrollContainers(n) {
        let r = [];
        return (
          this.scrollContainers.forEach((o, s) => {
            this._scrollableContainsElement(s, n) && r.push(s);
          }),
          r
        );
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _scrollableContainsElement(n, r) {
        let o = ft(r),
          s = n.getElementRef().nativeElement;
        do if (o == s) return !0;
        while ((o = o.parentElement));
        return !1;
      }
      _addGlobalListener() {
        this._globalSubscription = this._ngZone.runOutsideAngular(() => {
          let n = this._getWindow();
          return ai(n.document, "scroll").subscribe(() =>
            this._scrolled.next(),
          );
        });
      }
      _removeGlobalListener() {
        this._globalSubscription &&
          (this._globalSubscription.unsubscribe(),
          (this._globalSubscription = null));
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(p(N), p(Y), p(R, 8));
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })();
var OI = 20,
  ls = (() => {
    let e = class e {
      constructor(n, r, o) {
        (this._platform = n),
          (this._change = new L()),
          (this._changeListener = (s) => {
            this._change.next(s);
          }),
          (this._document = o),
          r.runOutsideAngular(() => {
            if (n.isBrowser) {
              let s = this._getWindow();
              s.addEventListener("resize", this._changeListener),
                s.addEventListener("orientationchange", this._changeListener);
            }
            this.change().subscribe(() => (this._viewportSize = null));
          });
      }
      ngOnDestroy() {
        if (this._platform.isBrowser) {
          let n = this._getWindow();
          n.removeEventListener("resize", this._changeListener),
            n.removeEventListener("orientationchange", this._changeListener);
        }
        this._change.complete();
      }
      getViewportSize() {
        this._viewportSize || this._updateViewportSize();
        let n = {
          width: this._viewportSize.width,
          height: this._viewportSize.height,
        };
        return this._platform.isBrowser || (this._viewportSize = null), n;
      }
      getViewportRect() {
        let n = this.getViewportScrollPosition(),
          { width: r, height: o } = this.getViewportSize();
        return {
          top: n.top,
          left: n.left,
          bottom: n.top + o,
          right: n.left + r,
          height: o,
          width: r,
        };
      }
      getViewportScrollPosition() {
        if (!this._platform.isBrowser) return { top: 0, left: 0 };
        let n = this._document,
          r = this._getWindow(),
          o = n.documentElement,
          s = o.getBoundingClientRect(),
          a = -s.top || n.body.scrollTop || r.scrollY || o.scrollTop || 0,
          c = -s.left || n.body.scrollLeft || r.scrollX || o.scrollLeft || 0;
        return { top: a, left: c };
      }
      change(n = OI) {
        return n > 0 ? this._change.pipe(wr(n)) : this._change;
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _updateViewportSize() {
        let n = this._getWindow();
        this._viewportSize = this._platform.isBrowser
          ? { width: n.innerWidth, height: n.innerHeight }
          : { width: 0, height: 0 };
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(p(Y), p(N), p(R, 8));
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })();
var Km = ym(),
  Ll = class {
    constructor(e, i) {
      (this._viewportRuler = e),
        (this._previousHTMLStyles = { top: "", left: "" }),
        (this._isEnabled = !1),
        (this._document = i);
    }
    attach() {}
    enable() {
      if (this._canBeEnabled()) {
        let e = this._document.documentElement;
        (this._previousScrollPosition =
          this._viewportRuler.getViewportScrollPosition()),
          (this._previousHTMLStyles.left = e.style.left || ""),
          (this._previousHTMLStyles.top = e.style.top || ""),
          (e.style.left = Z(-this._previousScrollPosition.left)),
          (e.style.top = Z(-this._previousScrollPosition.top)),
          e.classList.add("cdk-global-scrollblock"),
          (this._isEnabled = !0);
      }
    }
    disable() {
      if (this._isEnabled) {
        let e = this._document.documentElement,
          i = this._document.body,
          n = e.style,
          r = i.style,
          o = n.scrollBehavior || "",
          s = r.scrollBehavior || "";
        (this._isEnabled = !1),
          (n.left = this._previousHTMLStyles.left),
          (n.top = this._previousHTMLStyles.top),
          e.classList.remove("cdk-global-scrollblock"),
          Km && (n.scrollBehavior = r.scrollBehavior = "auto"),
          window.scroll(
            this._previousScrollPosition.left,
            this._previousScrollPosition.top,
          ),
          Km && ((n.scrollBehavior = o), (r.scrollBehavior = s));
      }
    }
    _canBeEnabled() {
      if (
        this._document.documentElement.classList.contains(
          "cdk-global-scrollblock",
        ) ||
        this._isEnabled
      )
        return !1;
      let i = this._document.body,
        n = this._viewportRuler.getViewportSize();
      return i.scrollHeight > n.height || i.scrollWidth > n.width;
    }
  };
var jl = class {
    constructor(e, i, n, r) {
      (this._scrollDispatcher = e),
        (this._ngZone = i),
        (this._viewportRuler = n),
        (this._config = r),
        (this._scrollSubscription = null),
        (this._detach = () => {
          this.disable(),
            this._overlayRef.hasAttached() &&
              this._ngZone.run(() => this._overlayRef.detach());
        });
    }
    attach(e) {
      this._overlayRef, (this._overlayRef = e);
    }
    enable() {
      if (this._scrollSubscription) return;
      let e = this._scrollDispatcher
        .scrolled(0)
        .pipe(
          ne(
            (i) =>
              !i ||
              !this._overlayRef.overlayElement.contains(
                i.getElementRef().nativeElement,
              ),
          ),
        );
      this._config && this._config.threshold && this._config.threshold > 1
        ? ((this._initialScrollPosition =
            this._viewportRuler.getViewportScrollPosition().top),
          (this._scrollSubscription = e.subscribe(() => {
            let i = this._viewportRuler.getViewportScrollPosition().top;
            Math.abs(i - this._initialScrollPosition) > this._config.threshold
              ? this._detach()
              : this._overlayRef.updatePosition();
          })))
        : (this._scrollSubscription = e.subscribe(this._detach));
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
        (this._scrollSubscription = null));
    }
    detach() {
      this.disable(), (this._overlayRef = null);
    }
  },
  ds = class {
    enable() {}
    disable() {}
    attach() {}
  };
function Vl(t, e) {
  return e.some((i) => {
    let n = t.bottom < i.top,
      r = t.top > i.bottom,
      o = t.right < i.left,
      s = t.left > i.right;
    return n || r || o || s;
  });
}
function Xm(t, e) {
  return e.some((i) => {
    let n = t.top < i.top,
      r = t.bottom > i.bottom,
      o = t.left < i.left,
      s = t.right > i.right;
    return n || r || o || s;
  });
}
var Bl = class {
    constructor(e, i, n, r) {
      (this._scrollDispatcher = e),
        (this._viewportRuler = i),
        (this._ngZone = n),
        (this._config = r),
        (this._scrollSubscription = null);
    }
    attach(e) {
      this._overlayRef, (this._overlayRef = e);
    }
    enable() {
      if (!this._scrollSubscription) {
        let e = this._config ? this._config.scrollThrottle : 0;
        this._scrollSubscription = this._scrollDispatcher
          .scrolled(e)
          .subscribe(() => {
            if (
              (this._overlayRef.updatePosition(),
              this._config && this._config.autoClose)
            ) {
              let i = this._overlayRef.overlayElement.getBoundingClientRect(),
                { width: n, height: r } = this._viewportRuler.getViewportSize();
              Vl(i, [
                { width: n, height: r, bottom: r, right: n, top: 0, left: 0 },
              ]) &&
                (this.disable(),
                this._ngZone.run(() => this._overlayRef.detach()));
            }
          });
      }
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
        (this._scrollSubscription = null));
    }
    detach() {
      this.disable(), (this._overlayRef = null);
    }
  },
  kI = (() => {
    let e = class e {
      constructor(n, r, o, s) {
        (this._scrollDispatcher = n),
          (this._viewportRuler = r),
          (this._ngZone = o),
          (this.noop = () => new ds()),
          (this.close = (a) =>
            new jl(
              this._scrollDispatcher,
              this._ngZone,
              this._viewportRuler,
              a,
            )),
          (this.block = () => new Ll(this._viewportRuler, this._document)),
          (this.reposition = (a) =>
            new Bl(
              this._scrollDispatcher,
              this._viewportRuler,
              this._ngZone,
              a,
            )),
          (this._document = s);
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(p(Pl), p(ls), p(N), p(R));
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  Hl = class {
    constructor(e) {
      if (
        ((this.scrollStrategy = new ds()),
        (this.panelClass = ""),
        (this.hasBackdrop = !1),
        (this.backdropClass = "cdk-overlay-dark-backdrop"),
        (this.disposeOnNavigation = !1),
        e)
      ) {
        let i = Object.keys(e);
        for (let n of i) e[n] !== void 0 && (this[n] = e[n]);
      }
    }
  };
var Ul = class {
  constructor(e, i) {
    (this.connectionPair = e), (this.scrollableViewProperties = i);
  }
};
var ng = (() => {
    let e = class e {
      constructor(n) {
        (this._attachedOverlays = []), (this._document = n);
      }
      ngOnDestroy() {
        this.detach();
      }
      add(n) {
        this.remove(n), this._attachedOverlays.push(n);
      }
      remove(n) {
        let r = this._attachedOverlays.indexOf(n);
        r > -1 && this._attachedOverlays.splice(r, 1),
          this._attachedOverlays.length === 0 && this.detach();
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(p(R));
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  FI = (() => {
    let e = class e extends ng {
      constructor(n, r) {
        super(n),
          (this._ngZone = r),
          (this._keydownListener = (o) => {
            let s = this._attachedOverlays;
            for (let a = s.length - 1; a > -1; a--)
              if (s[a]._keydownEvents.observers.length > 0) {
                let c = s[a]._keydownEvents;
                this._ngZone ? this._ngZone.run(() => c.next(o)) : c.next(o);
                break;
              }
          });
      }
      add(n) {
        super.add(n),
          this._isAttached ||
            (this._ngZone
              ? this._ngZone.runOutsideAngular(() =>
                  this._document.body.addEventListener(
                    "keydown",
                    this._keydownListener,
                  ),
                )
              : this._document.body.addEventListener(
                  "keydown",
                  this._keydownListener,
                ),
            (this._isAttached = !0));
      }
      detach() {
        this._isAttached &&
          (this._document.body.removeEventListener(
            "keydown",
            this._keydownListener,
          ),
          (this._isAttached = !1));
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(p(R), p(N, 8));
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  PI = (() => {
    let e = class e extends ng {
      constructor(n, r, o) {
        super(n),
          (this._platform = r),
          (this._ngZone = o),
          (this._cursorStyleIsSet = !1),
          (this._pointerDownListener = (s) => {
            this._pointerDownEventTarget = Be(s);
          }),
          (this._clickListener = (s) => {
            let a = Be(s),
              c =
                s.type === "click" && this._pointerDownEventTarget
                  ? this._pointerDownEventTarget
                  : a;
            this._pointerDownEventTarget = null;
            let l = this._attachedOverlays.slice();
            for (let d = l.length - 1; d > -1; d--) {
              let u = l[d];
              if (
                u._outsidePointerEvents.observers.length < 1 ||
                !u.hasAttached()
              )
                continue;
              if (u.overlayElement.contains(a) || u.overlayElement.contains(c))
                break;
              let f = u._outsidePointerEvents;
              this._ngZone ? this._ngZone.run(() => f.next(s)) : f.next(s);
            }
          });
      }
      add(n) {
        if ((super.add(n), !this._isAttached)) {
          let r = this._document.body;
          this._ngZone
            ? this._ngZone.runOutsideAngular(() => this._addEventListeners(r))
            : this._addEventListeners(r),
            this._platform.IOS &&
              !this._cursorStyleIsSet &&
              ((this._cursorOriginalValue = r.style.cursor),
              (r.style.cursor = "pointer"),
              (this._cursorStyleIsSet = !0)),
            (this._isAttached = !0);
        }
      }
      detach() {
        if (this._isAttached) {
          let n = this._document.body;
          n.removeEventListener("pointerdown", this._pointerDownListener, !0),
            n.removeEventListener("click", this._clickListener, !0),
            n.removeEventListener("auxclick", this._clickListener, !0),
            n.removeEventListener("contextmenu", this._clickListener, !0),
            this._platform.IOS &&
              this._cursorStyleIsSet &&
              ((n.style.cursor = this._cursorOriginalValue),
              (this._cursorStyleIsSet = !1)),
            (this._isAttached = !1);
        }
      }
      _addEventListeners(n) {
        n.addEventListener("pointerdown", this._pointerDownListener, !0),
          n.addEventListener("click", this._clickListener, !0),
          n.addEventListener("auxclick", this._clickListener, !0),
          n.addEventListener("contextmenu", this._clickListener, !0);
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(p(R), p(Y), p(N, 8));
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  ig = (() => {
    let e = class e {
      constructor(n, r) {
        (this._platform = r), (this._document = n);
      }
      ngOnDestroy() {
        this._containerElement?.remove();
      }
      getContainerElement() {
        return (
          this._containerElement || this._createContainer(),
          this._containerElement
        );
      }
      _createContainer() {
        let n = "cdk-overlay-container";
        if (this._platform.isBrowser || Jo()) {
          let o = this._document.querySelectorAll(
            `.${n}[platform="server"], .${n}[platform="test"]`,
          );
          for (let s = 0; s < o.length; s++) o[s].remove();
        }
        let r = this._document.createElement("div");
        r.classList.add(n),
          Jo()
            ? r.setAttribute("platform", "test")
            : this._platform.isBrowser || r.setAttribute("platform", "server"),
          this._document.body.appendChild(r),
          (this._containerElement = r);
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(p(R), p(Y));
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  $l = class {
    constructor(e, i, n, r, o, s, a, c, l, d = !1) {
      (this._portalOutlet = e),
        (this._host = i),
        (this._pane = n),
        (this._config = r),
        (this._ngZone = o),
        (this._keyboardDispatcher = s),
        (this._document = a),
        (this._location = c),
        (this._outsideClickDispatcher = l),
        (this._animationsDisabled = d),
        (this._backdropElement = null),
        (this._backdropClick = new L()),
        (this._attachments = new L()),
        (this._detachments = new L()),
        (this._locationChanges = $.EMPTY),
        (this._backdropClickHandler = (u) => this._backdropClick.next(u)),
        (this._backdropTransitionendHandler = (u) => {
          this._disposeBackdrop(u.target);
        }),
        (this._keydownEvents = new L()),
        (this._outsidePointerEvents = new L()),
        r.scrollStrategy &&
          ((this._scrollStrategy = r.scrollStrategy),
          this._scrollStrategy.attach(this)),
        (this._positionStrategy = r.positionStrategy);
    }
    get overlayElement() {
      return this._pane;
    }
    get backdropElement() {
      return this._backdropElement;
    }
    get hostElement() {
      return this._host;
    }
    attach(e) {
      !this._host.parentElement &&
        this._previousHostParent &&
        this._previousHostParent.appendChild(this._host);
      let i = this._portalOutlet.attach(e);
      return (
        this._positionStrategy && this._positionStrategy.attach(this),
        this._updateStackingOrder(),
        this._updateElementSize(),
        this._updateElementDirection(),
        this._scrollStrategy && this._scrollStrategy.enable(),
        this._ngZone.onStable.pipe(Oe(1)).subscribe(() => {
          this.hasAttached() && this.updatePosition();
        }),
        this._togglePointerEvents(!0),
        this._config.hasBackdrop && this._attachBackdrop(),
        this._config.panelClass &&
          this._toggleClasses(this._pane, this._config.panelClass, !0),
        this._attachments.next(),
        this._keyboardDispatcher.add(this),
        this._config.disposeOnNavigation &&
          (this._locationChanges = this._location.subscribe(() =>
            this.dispose(),
          )),
        this._outsideClickDispatcher.add(this),
        typeof i?.onDestroy == "function" &&
          i.onDestroy(() => {
            this.hasAttached() &&
              this._ngZone.runOutsideAngular(() =>
                Promise.resolve().then(() => this.detach()),
              );
          }),
        i
      );
    }
    detach() {
      if (!this.hasAttached()) return;
      this.detachBackdrop(),
        this._togglePointerEvents(!1),
        this._positionStrategy &&
          this._positionStrategy.detach &&
          this._positionStrategy.detach(),
        this._scrollStrategy && this._scrollStrategy.disable();
      let e = this._portalOutlet.detach();
      return (
        this._detachments.next(),
        this._keyboardDispatcher.remove(this),
        this._detachContentWhenStable(),
        this._locationChanges.unsubscribe(),
        this._outsideClickDispatcher.remove(this),
        e
      );
    }
    dispose() {
      let e = this.hasAttached();
      this._positionStrategy && this._positionStrategy.dispose(),
        this._disposeScrollStrategy(),
        this._disposeBackdrop(this._backdropElement),
        this._locationChanges.unsubscribe(),
        this._keyboardDispatcher.remove(this),
        this._portalOutlet.dispose(),
        this._attachments.complete(),
        this._backdropClick.complete(),
        this._keydownEvents.complete(),
        this._outsidePointerEvents.complete(),
        this._outsideClickDispatcher.remove(this),
        this._host?.remove(),
        (this._previousHostParent = this._pane = this._host = null),
        e && this._detachments.next(),
        this._detachments.complete();
    }
    hasAttached() {
      return this._portalOutlet.hasAttached();
    }
    backdropClick() {
      return this._backdropClick;
    }
    attachments() {
      return this._attachments;
    }
    detachments() {
      return this._detachments;
    }
    keydownEvents() {
      return this._keydownEvents;
    }
    outsidePointerEvents() {
      return this._outsidePointerEvents;
    }
    getConfig() {
      return this._config;
    }
    updatePosition() {
      this._positionStrategy && this._positionStrategy.apply();
    }
    updatePositionStrategy(e) {
      e !== this._positionStrategy &&
        (this._positionStrategy && this._positionStrategy.dispose(),
        (this._positionStrategy = e),
        this.hasAttached() && (e.attach(this), this.updatePosition()));
    }
    updateSize(e) {
      (this._config = P(P({}, this._config), e)), this._updateElementSize();
    }
    setDirection(e) {
      (this._config = le(P({}, this._config), { direction: e })),
        this._updateElementDirection();
    }
    addPanelClass(e) {
      this._pane && this._toggleClasses(this._pane, e, !0);
    }
    removePanelClass(e) {
      this._pane && this._toggleClasses(this._pane, e, !1);
    }
    getDirection() {
      let e = this._config.direction;
      return e ? (typeof e == "string" ? e : e.value) : "ltr";
    }
    updateScrollStrategy(e) {
      e !== this._scrollStrategy &&
        (this._disposeScrollStrategy(),
        (this._scrollStrategy = e),
        this.hasAttached() && (e.attach(this), e.enable()));
    }
    _updateElementDirection() {
      this._host.setAttribute("dir", this.getDirection());
    }
    _updateElementSize() {
      if (!this._pane) return;
      let e = this._pane.style;
      (e.width = Z(this._config.width)),
        (e.height = Z(this._config.height)),
        (e.minWidth = Z(this._config.minWidth)),
        (e.minHeight = Z(this._config.minHeight)),
        (e.maxWidth = Z(this._config.maxWidth)),
        (e.maxHeight = Z(this._config.maxHeight));
    }
    _togglePointerEvents(e) {
      this._pane.style.pointerEvents = e ? "" : "none";
    }
    _attachBackdrop() {
      let e = "cdk-overlay-backdrop-showing";
      (this._backdropElement = this._document.createElement("div")),
        this._backdropElement.classList.add("cdk-overlay-backdrop"),
        this._animationsDisabled &&
          this._backdropElement.classList.add(
            "cdk-overlay-backdrop-noop-animation",
          ),
        this._config.backdropClass &&
          this._toggleClasses(
            this._backdropElement,
            this._config.backdropClass,
            !0,
          ),
        this._host.parentElement.insertBefore(
          this._backdropElement,
          this._host,
        ),
        this._backdropElement.addEventListener(
          "click",
          this._backdropClickHandler,
        ),
        !this._animationsDisabled && typeof requestAnimationFrame < "u"
          ? this._ngZone.runOutsideAngular(() => {
              requestAnimationFrame(() => {
                this._backdropElement && this._backdropElement.classList.add(e);
              });
            })
          : this._backdropElement.classList.add(e);
    }
    _updateStackingOrder() {
      this._host.nextSibling && this._host.parentNode.appendChild(this._host);
    }
    detachBackdrop() {
      let e = this._backdropElement;
      if (e) {
        if (this._animationsDisabled) {
          this._disposeBackdrop(e);
          return;
        }
        e.classList.remove("cdk-overlay-backdrop-showing"),
          this._ngZone.runOutsideAngular(() => {
            e.addEventListener(
              "transitionend",
              this._backdropTransitionendHandler,
            );
          }),
          (e.style.pointerEvents = "none"),
          (this._backdropTimeout = this._ngZone.runOutsideAngular(() =>
            setTimeout(() => {
              this._disposeBackdrop(e);
            }, 500),
          ));
      }
    }
    _toggleClasses(e, i, n) {
      let r = Zn(i || []).filter((o) => !!o);
      r.length && (n ? e.classList.add(...r) : e.classList.remove(...r));
    }
    _detachContentWhenStable() {
      this._ngZone.runOutsideAngular(() => {
        let e = this._ngZone.onStable
          .pipe($e(Os(this._attachments, this._detachments)))
          .subscribe(() => {
            (!this._pane || !this._host || this._pane.children.length === 0) &&
              (this._pane &&
                this._config.panelClass &&
                this._toggleClasses(this._pane, this._config.panelClass, !1),
              this._host &&
                this._host.parentElement &&
                ((this._previousHostParent = this._host.parentElement),
                this._host.remove()),
              e.unsubscribe());
          });
      });
    }
    _disposeScrollStrategy() {
      let e = this._scrollStrategy;
      e && (e.disable(), e.detach && e.detach());
    }
    _disposeBackdrop(e) {
      e &&
        (e.removeEventListener("click", this._backdropClickHandler),
        e.removeEventListener(
          "transitionend",
          this._backdropTransitionendHandler,
        ),
        e.remove(),
        this._backdropElement === e && (this._backdropElement = null)),
        this._backdropTimeout &&
          (clearTimeout(this._backdropTimeout),
          (this._backdropTimeout = void 0));
    }
  },
  Qm = "cdk-overlay-connected-position-bounding-box",
  LI = /([A-Za-z%]+)$/,
  zl = class {
    get positions() {
      return this._preferredPositions;
    }
    constructor(e, i, n, r, o) {
      (this._viewportRuler = i),
        (this._document = n),
        (this._platform = r),
        (this._overlayContainer = o),
        (this._lastBoundingBoxSize = { width: 0, height: 0 }),
        (this._isPushed = !1),
        (this._canPush = !0),
        (this._growAfterOpen = !1),
        (this._hasFlexibleDimensions = !0),
        (this._positionLocked = !1),
        (this._viewportMargin = 0),
        (this._scrollables = []),
        (this._preferredPositions = []),
        (this._positionChanges = new L()),
        (this._resizeSubscription = $.EMPTY),
        (this._offsetX = 0),
        (this._offsetY = 0),
        (this._appliedPanelClasses = []),
        (this.positionChanges = this._positionChanges),
        this.setOrigin(e);
    }
    attach(e) {
      this._overlayRef && this._overlayRef,
        this._validatePositions(),
        e.hostElement.classList.add(Qm),
        (this._overlayRef = e),
        (this._boundingBox = e.hostElement),
        (this._pane = e.overlayElement),
        (this._isDisposed = !1),
        (this._isInitialRender = !0),
        (this._lastPosition = null),
        this._resizeSubscription.unsubscribe(),
        (this._resizeSubscription = this._viewportRuler
          .change()
          .subscribe(() => {
            (this._isInitialRender = !0), this.apply();
          }));
    }
    apply() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      if (
        !this._isInitialRender &&
        this._positionLocked &&
        this._lastPosition
      ) {
        this.reapplyLastPosition();
        return;
      }
      this._clearPanelClasses(),
        this._resetOverlayElementStyles(),
        this._resetBoundingBoxStyles(),
        (this._viewportRect = this._getNarrowedViewportRect()),
        (this._originRect = this._getOriginRect()),
        (this._overlayRect = this._pane.getBoundingClientRect()),
        (this._containerRect = this._overlayContainer
          .getContainerElement()
          .getBoundingClientRect());
      let e = this._originRect,
        i = this._overlayRect,
        n = this._viewportRect,
        r = this._containerRect,
        o = [],
        s;
      for (let a of this._preferredPositions) {
        let c = this._getOriginPoint(e, r, a),
          l = this._getOverlayPoint(c, i, a),
          d = this._getOverlayFit(l, i, n, a);
        if (d.isCompletelyWithinViewport) {
          (this._isPushed = !1), this._applyPosition(a, c);
          return;
        }
        if (this._canFitWithFlexibleDimensions(d, l, n)) {
          o.push({
            position: a,
            origin: c,
            overlayRect: i,
            boundingBoxRect: this._calculateBoundingBoxRect(c, a),
          });
          continue;
        }
        (!s || s.overlayFit.visibleArea < d.visibleArea) &&
          (s = {
            overlayFit: d,
            overlayPoint: l,
            originPoint: c,
            position: a,
            overlayRect: i,
          });
      }
      if (o.length) {
        let a = null,
          c = -1;
        for (let l of o) {
          let d =
            l.boundingBoxRect.width *
            l.boundingBoxRect.height *
            (l.position.weight || 1);
          d > c && ((c = d), (a = l));
        }
        (this._isPushed = !1), this._applyPosition(a.position, a.origin);
        return;
      }
      if (this._canPush) {
        (this._isPushed = !0), this._applyPosition(s.position, s.originPoint);
        return;
      }
      this._applyPosition(s.position, s.originPoint);
    }
    detach() {
      this._clearPanelClasses(),
        (this._lastPosition = null),
        (this._previousPushAmount = null),
        this._resizeSubscription.unsubscribe();
    }
    dispose() {
      this._isDisposed ||
        (this._boundingBox &&
          ln(this._boundingBox.style, {
            top: "",
            left: "",
            right: "",
            bottom: "",
            height: "",
            width: "",
            alignItems: "",
            justifyContent: "",
          }),
        this._pane && this._resetOverlayElementStyles(),
        this._overlayRef && this._overlayRef.hostElement.classList.remove(Qm),
        this.detach(),
        this._positionChanges.complete(),
        (this._overlayRef = this._boundingBox = null),
        (this._isDisposed = !0));
    }
    reapplyLastPosition() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      let e = this._lastPosition;
      if (e) {
        (this._originRect = this._getOriginRect()),
          (this._overlayRect = this._pane.getBoundingClientRect()),
          (this._viewportRect = this._getNarrowedViewportRect()),
          (this._containerRect = this._overlayContainer
            .getContainerElement()
            .getBoundingClientRect());
        let i = this._getOriginPoint(this._originRect, this._containerRect, e);
        this._applyPosition(e, i);
      } else this.apply();
    }
    withScrollableContainers(e) {
      return (this._scrollables = e), this;
    }
    withPositions(e) {
      return (
        (this._preferredPositions = e),
        e.indexOf(this._lastPosition) === -1 && (this._lastPosition = null),
        this._validatePositions(),
        this
      );
    }
    withViewportMargin(e) {
      return (this._viewportMargin = e), this;
    }
    withFlexibleDimensions(e = !0) {
      return (this._hasFlexibleDimensions = e), this;
    }
    withGrowAfterOpen(e = !0) {
      return (this._growAfterOpen = e), this;
    }
    withPush(e = !0) {
      return (this._canPush = e), this;
    }
    withLockedPosition(e = !0) {
      return (this._positionLocked = e), this;
    }
    setOrigin(e) {
      return (this._origin = e), this;
    }
    withDefaultOffsetX(e) {
      return (this._offsetX = e), this;
    }
    withDefaultOffsetY(e) {
      return (this._offsetY = e), this;
    }
    withTransformOriginOn(e) {
      return (this._transformOriginSelector = e), this;
    }
    _getOriginPoint(e, i, n) {
      let r;
      if (n.originX == "center") r = e.left + e.width / 2;
      else {
        let s = this._isRtl() ? e.right : e.left,
          a = this._isRtl() ? e.left : e.right;
        r = n.originX == "start" ? s : a;
      }
      i.left < 0 && (r -= i.left);
      let o;
      return (
        n.originY == "center"
          ? (o = e.top + e.height / 2)
          : (o = n.originY == "top" ? e.top : e.bottom),
        i.top < 0 && (o -= i.top),
        { x: r, y: o }
      );
    }
    _getOverlayPoint(e, i, n) {
      let r;
      n.overlayX == "center"
        ? (r = -i.width / 2)
        : n.overlayX === "start"
          ? (r = this._isRtl() ? -i.width : 0)
          : (r = this._isRtl() ? 0 : -i.width);
      let o;
      return (
        n.overlayY == "center"
          ? (o = -i.height / 2)
          : (o = n.overlayY == "top" ? 0 : -i.height),
        { x: e.x + r, y: e.y + o }
      );
    }
    _getOverlayFit(e, i, n, r) {
      let o = eg(i),
        { x: s, y: a } = e,
        c = this._getOffset(r, "x"),
        l = this._getOffset(r, "y");
      c && (s += c), l && (a += l);
      let d = 0 - s,
        u = s + o.width - n.width,
        f = 0 - a,
        h = a + o.height - n.height,
        m = this._subtractOverflows(o.width, d, u),
        g = this._subtractOverflows(o.height, f, h),
        v = m * g;
      return {
        visibleArea: v,
        isCompletelyWithinViewport: o.width * o.height === v,
        fitsInViewportVertically: g === o.height,
        fitsInViewportHorizontally: m == o.width,
      };
    }
    _canFitWithFlexibleDimensions(e, i, n) {
      if (this._hasFlexibleDimensions) {
        let r = n.bottom - i.y,
          o = n.right - i.x,
          s = Jm(this._overlayRef.getConfig().minHeight),
          a = Jm(this._overlayRef.getConfig().minWidth),
          c = e.fitsInViewportVertically || (s != null && s <= r),
          l = e.fitsInViewportHorizontally || (a != null && a <= o);
        return c && l;
      }
      return !1;
    }
    _pushOverlayOnScreen(e, i, n) {
      if (this._previousPushAmount && this._positionLocked)
        return {
          x: e.x + this._previousPushAmount.x,
          y: e.y + this._previousPushAmount.y,
        };
      let r = eg(i),
        o = this._viewportRect,
        s = Math.max(e.x + r.width - o.width, 0),
        a = Math.max(e.y + r.height - o.height, 0),
        c = Math.max(o.top - n.top - e.y, 0),
        l = Math.max(o.left - n.left - e.x, 0),
        d = 0,
        u = 0;
      return (
        r.width <= o.width
          ? (d = l || -s)
          : (d = e.x < this._viewportMargin ? o.left - n.left - e.x : 0),
        r.height <= o.height
          ? (u = c || -a)
          : (u = e.y < this._viewportMargin ? o.top - n.top - e.y : 0),
        (this._previousPushAmount = { x: d, y: u }),
        { x: e.x + d, y: e.y + u }
      );
    }
    _applyPosition(e, i) {
      if (
        (this._setTransformOrigin(e),
        this._setOverlayElementStyles(i, e),
        this._setBoundingBoxStyles(i, e),
        e.panelClass && this._addPanelClasses(e.panelClass),
        this._positionChanges.observers.length)
      ) {
        let n = this._getScrollVisibility();
        if (
          e !== this._lastPosition ||
          !this._lastScrollVisibility ||
          !jI(this._lastScrollVisibility, n)
        ) {
          let r = new Ul(e, n);
          this._positionChanges.next(r);
        }
        this._lastScrollVisibility = n;
      }
      (this._lastPosition = e), (this._isInitialRender = !1);
    }
    _setTransformOrigin(e) {
      if (!this._transformOriginSelector) return;
      let i = this._boundingBox.querySelectorAll(this._transformOriginSelector),
        n,
        r = e.overlayY;
      e.overlayX === "center"
        ? (n = "center")
        : this._isRtl()
          ? (n = e.overlayX === "start" ? "right" : "left")
          : (n = e.overlayX === "start" ? "left" : "right");
      for (let o = 0; o < i.length; o++)
        i[o].style.transformOrigin = `${n} ${r}`;
    }
    _calculateBoundingBoxRect(e, i) {
      let n = this._viewportRect,
        r = this._isRtl(),
        o,
        s,
        a;
      if (i.overlayY === "top")
        (s = e.y), (o = n.height - s + this._viewportMargin);
      else if (i.overlayY === "bottom")
        (a = n.height - e.y + this._viewportMargin * 2),
          (o = n.height - a + this._viewportMargin);
      else {
        let h = Math.min(n.bottom - e.y + n.top, e.y),
          m = this._lastBoundingBoxSize.height;
        (o = h * 2),
          (s = e.y - h),
          o > m &&
            !this._isInitialRender &&
            !this._growAfterOpen &&
            (s = e.y - m / 2);
      }
      let c = (i.overlayX === "start" && !r) || (i.overlayX === "end" && r),
        l = (i.overlayX === "end" && !r) || (i.overlayX === "start" && r),
        d,
        u,
        f;
      if (l)
        (f = n.width - e.x + this._viewportMargin * 2),
          (d = e.x - this._viewportMargin);
      else if (c) (u = e.x), (d = n.right - e.x);
      else {
        let h = Math.min(n.right - e.x + n.left, e.x),
          m = this._lastBoundingBoxSize.width;
        (d = h * 2),
          (u = e.x - h),
          d > m &&
            !this._isInitialRender &&
            !this._growAfterOpen &&
            (u = e.x - m / 2);
      }
      return { top: s, left: u, bottom: a, right: f, width: d, height: o };
    }
    _setBoundingBoxStyles(e, i) {
      let n = this._calculateBoundingBoxRect(e, i);
      !this._isInitialRender &&
        !this._growAfterOpen &&
        ((n.height = Math.min(n.height, this._lastBoundingBoxSize.height)),
        (n.width = Math.min(n.width, this._lastBoundingBoxSize.width)));
      let r = {};
      if (this._hasExactPosition())
        (r.top = r.left = "0"),
          (r.bottom = r.right = r.maxHeight = r.maxWidth = ""),
          (r.width = r.height = "100%");
      else {
        let o = this._overlayRef.getConfig().maxHeight,
          s = this._overlayRef.getConfig().maxWidth;
        (r.height = Z(n.height)),
          (r.top = Z(n.top)),
          (r.bottom = Z(n.bottom)),
          (r.width = Z(n.width)),
          (r.left = Z(n.left)),
          (r.right = Z(n.right)),
          i.overlayX === "center"
            ? (r.alignItems = "center")
            : (r.alignItems = i.overlayX === "end" ? "flex-end" : "flex-start"),
          i.overlayY === "center"
            ? (r.justifyContent = "center")
            : (r.justifyContent =
                i.overlayY === "bottom" ? "flex-end" : "flex-start"),
          o && (r.maxHeight = Z(o)),
          s && (r.maxWidth = Z(s));
      }
      (this._lastBoundingBoxSize = n), ln(this._boundingBox.style, r);
    }
    _resetBoundingBoxStyles() {
      ln(this._boundingBox.style, {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        height: "",
        width: "",
        alignItems: "",
        justifyContent: "",
      });
    }
    _resetOverlayElementStyles() {
      ln(this._pane.style, {
        top: "",
        left: "",
        bottom: "",
        right: "",
        position: "",
        transform: "",
      });
    }
    _setOverlayElementStyles(e, i) {
      let n = {},
        r = this._hasExactPosition(),
        o = this._hasFlexibleDimensions,
        s = this._overlayRef.getConfig();
      if (r) {
        let d = this._viewportRuler.getViewportScrollPosition();
        ln(n, this._getExactOverlayY(i, e, d)),
          ln(n, this._getExactOverlayX(i, e, d));
      } else n.position = "static";
      let a = "",
        c = this._getOffset(i, "x"),
        l = this._getOffset(i, "y");
      c && (a += `translateX(${c}px) `),
        l && (a += `translateY(${l}px)`),
        (n.transform = a.trim()),
        s.maxHeight &&
          (r ? (n.maxHeight = Z(s.maxHeight)) : o && (n.maxHeight = "")),
        s.maxWidth &&
          (r ? (n.maxWidth = Z(s.maxWidth)) : o && (n.maxWidth = "")),
        ln(this._pane.style, n);
    }
    _getExactOverlayY(e, i, n) {
      let r = { top: "", bottom: "" },
        o = this._getOverlayPoint(i, this._overlayRect, e);
      if (
        (this._isPushed &&
          (o = this._pushOverlayOnScreen(o, this._overlayRect, n)),
        e.overlayY === "bottom")
      ) {
        let s = this._document.documentElement.clientHeight;
        r.bottom = `${s - (o.y + this._overlayRect.height)}px`;
      } else r.top = Z(o.y);
      return r;
    }
    _getExactOverlayX(e, i, n) {
      let r = { left: "", right: "" },
        o = this._getOverlayPoint(i, this._overlayRect, e);
      this._isPushed &&
        (o = this._pushOverlayOnScreen(o, this._overlayRect, n));
      let s;
      if (
        (this._isRtl()
          ? (s = e.overlayX === "end" ? "left" : "right")
          : (s = e.overlayX === "end" ? "right" : "left"),
        s === "right")
      ) {
        let a = this._document.documentElement.clientWidth;
        r.right = `${a - (o.x + this._overlayRect.width)}px`;
      } else r.left = Z(o.x);
      return r;
    }
    _getScrollVisibility() {
      let e = this._getOriginRect(),
        i = this._pane.getBoundingClientRect(),
        n = this._scrollables.map((r) =>
          r.getElementRef().nativeElement.getBoundingClientRect(),
        );
      return {
        isOriginClipped: Xm(e, n),
        isOriginOutsideView: Vl(e, n),
        isOverlayClipped: Xm(i, n),
        isOverlayOutsideView: Vl(i, n),
      };
    }
    _subtractOverflows(e, ...i) {
      return i.reduce((n, r) => n - Math.max(r, 0), e);
    }
    _getNarrowedViewportRect() {
      let e = this._document.documentElement.clientWidth,
        i = this._document.documentElement.clientHeight,
        n = this._viewportRuler.getViewportScrollPosition();
      return {
        top: n.top + this._viewportMargin,
        left: n.left + this._viewportMargin,
        right: n.left + e - this._viewportMargin,
        bottom: n.top + i - this._viewportMargin,
        width: e - 2 * this._viewportMargin,
        height: i - 2 * this._viewportMargin,
      };
    }
    _isRtl() {
      return this._overlayRef.getDirection() === "rtl";
    }
    _hasExactPosition() {
      return !this._hasFlexibleDimensions || this._isPushed;
    }
    _getOffset(e, i) {
      return i === "x"
        ? e.offsetX == null
          ? this._offsetX
          : e.offsetX
        : e.offsetY == null
          ? this._offsetY
          : e.offsetY;
    }
    _validatePositions() {}
    _addPanelClasses(e) {
      this._pane &&
        Zn(e).forEach((i) => {
          i !== "" &&
            this._appliedPanelClasses.indexOf(i) === -1 &&
            (this._appliedPanelClasses.push(i), this._pane.classList.add(i));
        });
    }
    _clearPanelClasses() {
      this._pane &&
        (this._appliedPanelClasses.forEach((e) => {
          this._pane.classList.remove(e);
        }),
        (this._appliedPanelClasses = []));
    }
    _getOriginRect() {
      let e = this._origin;
      if (e instanceof q) return e.nativeElement.getBoundingClientRect();
      if (e instanceof Element) return e.getBoundingClientRect();
      let i = e.width || 0,
        n = e.height || 0;
      return {
        top: e.y,
        bottom: e.y + n,
        left: e.x,
        right: e.x + i,
        height: n,
        width: i,
      };
    }
  };
function ln(t, e) {
  for (let i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
  return t;
}
function Jm(t) {
  if (typeof t != "number" && t != null) {
    let [e, i] = t.split(LI);
    return !i || i === "px" ? parseFloat(e) : null;
  }
  return t || null;
}
function eg(t) {
  return {
    top: Math.floor(t.top),
    right: Math.floor(t.right),
    bottom: Math.floor(t.bottom),
    left: Math.floor(t.left),
    width: Math.floor(t.width),
    height: Math.floor(t.height),
  };
}
function jI(t, e) {
  return t === e
    ? !0
    : t.isOriginClipped === e.isOriginClipped &&
        t.isOriginOutsideView === e.isOriginOutsideView &&
        t.isOverlayClipped === e.isOverlayClipped &&
        t.isOverlayOutsideView === e.isOverlayOutsideView;
}
var tg = "cdk-global-overlay-wrapper",
  Wl = class {
    constructor() {
      (this._cssPosition = "static"),
        (this._topOffset = ""),
        (this._bottomOffset = ""),
        (this._alignItems = ""),
        (this._xPosition = ""),
        (this._xOffset = ""),
        (this._width = ""),
        (this._height = ""),
        (this._isDisposed = !1);
    }
    attach(e) {
      let i = e.getConfig();
      (this._overlayRef = e),
        this._width && !i.width && e.updateSize({ width: this._width }),
        this._height && !i.height && e.updateSize({ height: this._height }),
        e.hostElement.classList.add(tg),
        (this._isDisposed = !1);
    }
    top(e = "") {
      return (
        (this._bottomOffset = ""),
        (this._topOffset = e),
        (this._alignItems = "flex-start"),
        this
      );
    }
    left(e = "") {
      return (this._xOffset = e), (this._xPosition = "left"), this;
    }
    bottom(e = "") {
      return (
        (this._topOffset = ""),
        (this._bottomOffset = e),
        (this._alignItems = "flex-end"),
        this
      );
    }
    right(e = "") {
      return (this._xOffset = e), (this._xPosition = "right"), this;
    }
    start(e = "") {
      return (this._xOffset = e), (this._xPosition = "start"), this;
    }
    end(e = "") {
      return (this._xOffset = e), (this._xPosition = "end"), this;
    }
    width(e = "") {
      return (
        this._overlayRef
          ? this._overlayRef.updateSize({ width: e })
          : (this._width = e),
        this
      );
    }
    height(e = "") {
      return (
        this._overlayRef
          ? this._overlayRef.updateSize({ height: e })
          : (this._height = e),
        this
      );
    }
    centerHorizontally(e = "") {
      return this.left(e), (this._xPosition = "center"), this;
    }
    centerVertically(e = "") {
      return this.top(e), (this._alignItems = "center"), this;
    }
    apply() {
      if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
      let e = this._overlayRef.overlayElement.style,
        i = this._overlayRef.hostElement.style,
        n = this._overlayRef.getConfig(),
        { width: r, height: o, maxWidth: s, maxHeight: a } = n,
        c =
          (r === "100%" || r === "100vw") &&
          (!s || s === "100%" || s === "100vw"),
        l =
          (o === "100%" || o === "100vh") &&
          (!a || a === "100%" || a === "100vh"),
        d = this._xPosition,
        u = this._xOffset,
        f = this._overlayRef.getConfig().direction === "rtl",
        h = "",
        m = "",
        g = "";
      c
        ? (g = "flex-start")
        : d === "center"
          ? ((g = "center"), f ? (m = u) : (h = u))
          : f
            ? d === "left" || d === "end"
              ? ((g = "flex-end"), (h = u))
              : (d === "right" || d === "start") &&
                ((g = "flex-start"), (m = u))
            : d === "left" || d === "start"
              ? ((g = "flex-start"), (h = u))
              : (d === "right" || d === "end") && ((g = "flex-end"), (m = u)),
        (e.position = this._cssPosition),
        (e.marginLeft = c ? "0" : h),
        (e.marginTop = l ? "0" : this._topOffset),
        (e.marginBottom = this._bottomOffset),
        (e.marginRight = c ? "0" : m),
        (i.justifyContent = g),
        (i.alignItems = l ? "flex-start" : this._alignItems);
    }
    dispose() {
      if (this._isDisposed || !this._overlayRef) return;
      let e = this._overlayRef.overlayElement.style,
        i = this._overlayRef.hostElement,
        n = i.style;
      i.classList.remove(tg),
        (n.justifyContent =
          n.alignItems =
          e.marginTop =
          e.marginBottom =
          e.marginLeft =
          e.marginRight =
          e.position =
            ""),
        (this._overlayRef = null),
        (this._isDisposed = !0);
    }
  },
  VI = (() => {
    let e = class e {
      constructor(n, r, o, s) {
        (this._viewportRuler = n),
          (this._document = r),
          (this._platform = o),
          (this._overlayContainer = s);
      }
      global() {
        return new Wl();
      }
      flexibleConnectedTo(n) {
        return new zl(
          n,
          this._viewportRuler,
          this._document,
          this._platform,
          this._overlayContainer,
        );
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(p(ls), p(R), p(Y), p(ig));
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })(),
  BI = 0,
  pP = (() => {
    let e = class e {
      constructor(n, r, o, s, a, c, l, d, u, f, h, m) {
        (this.scrollStrategies = n),
          (this._overlayContainer = r),
          (this._componentFactoryResolver = o),
          (this._positionBuilder = s),
          (this._keyboardDispatcher = a),
          (this._injector = c),
          (this._ngZone = l),
          (this._document = d),
          (this._directionality = u),
          (this._location = f),
          (this._outsideClickDispatcher = h),
          (this._animationsModuleType = m);
      }
      create(n) {
        let r = this._createHostElement(),
          o = this._createPaneElement(r),
          s = this._createPortalOutlet(o),
          a = new Hl(n);
        return (
          (a.direction = a.direction || this._directionality.value),
          new $l(
            s,
            r,
            o,
            a,
            this._ngZone,
            this._keyboardDispatcher,
            this._document,
            this._location,
            this._outsideClickDispatcher,
            this._animationsModuleType === "NoopAnimations",
          )
        );
      }
      position() {
        return this._positionBuilder;
      }
      _createPaneElement(n) {
        let r = this._document.createElement("div");
        return (
          (r.id = `cdk-overlay-${BI++}`),
          r.classList.add("cdk-overlay-pane"),
          n.appendChild(r),
          r
        );
      }
      _createHostElement() {
        let n = this._document.createElement("div");
        return this._overlayContainer.getContainerElement().appendChild(n), n;
      }
      _createPortalOutlet(n) {
        return (
          this._appRef || (this._appRef = this._injector.get(Bn)),
          new as(
            n,
            this._componentFactoryResolver,
            this._appRef,
            this._injector,
            this._document,
          )
        );
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(
        p(kI),
        p(ig),
        p(Ct),
        p(VI),
        p(FI),
        p(ct),
        p(N),
        p(R),
        p(Rm),
        p(ki),
        p(PI),
        p(It, 8),
      );
    }),
      (e.ɵprov = b({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let t = e;
    return t;
  })();
export {
  P as a,
  le as b,
  lg as c,
  HI as d,
  UI as e,
  $I as f,
  $ as g,
  _g as h,
  S as i,
  Cs as j,
  ni as k,
  L as l,
  jt as m,
  vd as n,
  He as o,
  Ee as p,
  Ae as q,
  Rg as r,
  As as s,
  Ht as t,
  G as u,
  Ns as v,
  Ne as w,
  pt as x,
  Ug as y,
  $g as z,
  Os as A,
  ne as B,
  jd as C,
  Rs as D,
  li as E,
  Oe as F,
  ks as G,
  Kg as H,
  Er as I,
  xr as J,
  Hd as K,
  Ps as L,
  Jg as M,
  eb as N,
  js as O,
  Ud as P,
  Cr as Q,
  Mr as R,
  $e as S,
  Tr as T,
  x as U,
  Lu as V,
  b as W,
  _e as X,
  xO as Y,
  D as Z,
  k as _,
  p as $,
  _ as aa,
  U as ba,
  _t as ca,
  De as da,
  Q as ea,
  go as fa,
  qe as ga,
  lf as ha,
  kn as ia,
  CO as ja,
  MO as ka,
  TO as la,
  SO as ma,
  Sc as na,
  Wv as oa,
  ct as pa,
  Le as qa,
  Et as ra,
  AO as sa,
  NO as ta,
  q as ua,
  he as va,
  Nn as wa,
  It as xa,
  Qe as ya,
  wy as za,
  OO as Aa,
  gh as Ba,
  F as Ca,
  vt as Da,
  Aa as Ea,
  Ei as Fa,
  zc as Ga,
  Mt as Ha,
  N as Ia,
  dt as Ja,
  Vo as Ka,
  PO as La,
  LO as Ma,
  tn as Na,
  nn as Oa,
  Ha as Pa,
  OD as Qa,
  jn as Ra,
  oo as Sa,
  Vn as Ta,
  rp as Ua,
  Kc as Va,
  Ve as Wa,
  Xc as Xa,
  jO as Ya,
  a0 as Za,
  VO as _a,
  BO as $a,
  HO as ab,
  UO as bb,
  Tt as cb,
  St as db,
  At as eb,
  fp as fb,
  hp as gb,
  h0 as hb,
  $O as ib,
  pp as jb,
  m0 as kb,
  mp as lb,
  w0 as mb,
  I0 as nb,
  Nt as ob,
  Ce as pb,
  C0 as qb,
  zO as rb,
  gp as sb,
  bp as tb,
  vp as ub,
  WO as vb,
  GO as wb,
  qO as xb,
  T0 as yb,
  A0 as zb,
  Jc as Ab,
  N0 as Bb,
  O0 as Cb,
  R0 as Db,
  YO as Eb,
  k0 as Fb,
  Ho as Gb,
  Ot as Hb,
  ZO as Ib,
  KO as Jb,
  XO as Kb,
  QO as Lb,
  JO as Mb,
  eR as Nb,
  Ip as Ob,
  el as Pb,
  Tp as Qb,
  Bn as Rb,
  tR as Sb,
  Oi as Tb,
  tl as Ub,
  ut as Vb,
  Op as Wb,
  Rp as Xb,
  kp as Yb,
  nR as Zb,
  iR as _b,
  $n as $b,
  R as ac,
  ol as bc,
  ki as cc,
  wR as dc,
  ER as ec,
  IR as fc,
  xR as gc,
  hl as hc,
  Lw as ic,
  jR as jc,
  VR as kc,
  dm as lc,
  rk as mc,
  ok as nc,
  mE as oc,
  Y as pc,
  mk as qc,
  qn as rc,
  yE as sc,
  Dm as tc,
  _E as uc,
  wm as vc,
  ft as wc,
  Mk as xc,
  Tk as yc,
  zk as zc,
  Cm as Ac,
  Wk as Bc,
  Ml as Cc,
  Tl as Dc,
  Gk as Ec,
  Om as Fc,
  Rm as Gc,
  km as Hc,
  _F as Ic,
  gI as Jc,
  kl as Kc,
  os as Lc,
  ss as Mc,
  x1 as Nc,
  Je as Oc,
  M1 as Pc,
  T1 as Qc,
  S1 as Rc,
  A1 as Sc,
  N1 as Tc,
  O1 as Uc,
  R1 as Vc,
  k1 as Wc,
  F1 as Xc,
  P1 as Yc,
  qm as Zc,
  Ym as _c,
  L1 as $c,
  U1 as ad,
  cs as bd,
  $1 as cd,
  Zm as dd,
  Pl as ed,
  ls as fd,
  Hl as gd,
  pP as hd,
  PF as id,
  LF as jd,
  bm as kd,
  Gm as ld,
  YF as md,
  o1 as nd,
  s1 as od,
  a1 as pd,
  c1 as qd,
  l1 as rd,
  d1 as sd,
  SI as td,
  AI as ud,
};
