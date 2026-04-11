import {
  $ as Oe,
  $b as Le,
  A as ht,
  B as pt,
  Ba as c,
  Ca as l,
  Ga as Te,
  Gb as F,
  Gc as At,
  Hb as re,
  Hc as It,
  Ia as w,
  Ic as St,
  Na as A,
  Nb as ue,
  Oa as Ne,
  P as gt,
  Pb as Ft,
  Qc as Ot,
  Rc as kt,
  S as q,
  Sa as _,
  Ta as C,
  Tb as Re,
  U as se,
  Ua as D,
  Uc as He,
  V as z,
  Va as fe,
  Vb as Et,
  Vc as Tt,
  W as j,
  Wa as b,
  Wb as he,
  Wc as Nt,
  X as H,
  Xa as yt,
  Z as u,
  Za as y,
  a as k,
  aa as B,
  ac as Mt,
  b as L,
  ba as x,
  ca as ee,
  cb as f,
  da as G,
  db as m,
  ea as s,
  eb as I,
  ec as pe,
  g as dt,
  hb as me,
  i as st,
  ia as W,
  ib as Ct,
  ja as _t,
  jb as ie,
  ka as xt,
  l as T,
  la as ke,
  lb as S,
  ma as vt,
  na as te,
  nb as E,
  o as ct,
  oa as bt,
  ob as Pe,
  p as ft,
  pb as M,
  pc as Y,
  qc as ze,
  rb as N,
  rc as Vt,
  sb as O,
  tb as h,
  u as mt,
  ua as v,
  ub as p,
  uc as X,
  va as $,
  wc as je,
  xa as ce,
  xb as ne,
  yb as wt,
  z as ut,
  zb as Dt,
} from "./chunk-ILZMJO4D.js";
var Gt = (() => {
    let e = class e {
      constructor(t, n) {
        (this._renderer = t),
          (this._elementRef = n),
          (this.onChange = (o) => {}),
          (this.onTouched = () => {});
      }
      setProperty(t, n) {
        this._renderer.setProperty(this._elementRef.nativeElement, t, n);
      }
      registerOnTouched(t) {
        this.onTouched = t;
      }
      registerOnChange(t) {
        this.onChange = t;
      }
      setDisabledState(t) {
        this.setProperty("disabled", t);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(l(Te), l(v));
    }),
      (e.ɵdir = s({ type: e }));
    let i = e;
    return i;
  })(),
  Ut = (() => {
    let e = class e extends Gt {};
    (e.ɵfac = (() => {
      let t;
      return function (o) {
        return (t || (t = te(e)))(o || e);
      };
    })()),
      (e.ɵdir = s({ type: e, features: [A] }));
    let i = e;
    return i;
  })(),
  We = new u("");
var Fi = { provide: We, useExisting: z(() => qt), multi: !0 };
function Ei() {
  let i = Le() ? Le().getUserAgent() : "";
  return /android (\d+)/.test(i.toLowerCase());
}
var Mi = new u(""),
  qt = (() => {
    let e = class e extends Gt {
      constructor(t, n, o) {
        super(t, n),
          (this._compositionMode = o),
          (this._composing = !1),
          this._compositionMode == null && (this._compositionMode = !Ei());
      }
      writeValue(t) {
        let n = t ?? "";
        this.setProperty("value", n);
      }
      _handleInput(t) {
        (!this._compositionMode ||
          (this._compositionMode && !this._composing)) &&
          this.onChange(t);
      }
      _compositionStart() {
        this._composing = !0;
      }
      _compositionEnd(t) {
        (this._composing = !1), this._compositionMode && this.onChange(t);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(l(Te), l(v), l(Mi, 8));
    }),
      (e.ɵdir = s({
        type: e,
        selectors: [
          ["input", "formControlName", "", 3, "type", "checkbox"],
          ["textarea", "formControlName", ""],
          ["input", "formControl", "", 3, "type", "checkbox"],
          ["textarea", "formControl", ""],
          ["input", "ngModel", "", 3, "type", "checkbox"],
          ["textarea", "ngModel", ""],
          ["", "ngDefaultControl", ""],
        ],
        hostBindings: function (n, o) {
          n & 1 &&
            S("input", function (d) {
              return o._handleInput(d.target.value);
            })("blur", function () {
              return o.onTouched();
            })("compositionstart", function () {
              return o._compositionStart();
            })("compositionend", function (d) {
              return o._compositionEnd(d.target.value);
            });
        },
        features: [F([Fi]), A],
      }));
    let i = e;
    return i;
  })();
function P(i) {
  return (
    i == null || ((typeof i == "string" || Array.isArray(i)) && i.length === 0)
  );
}
function Wt(i) {
  return i != null && typeof i.length == "number";
}
var Fe = new u(""),
  $e = new u(""),
  Vi =
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  xe = class {
    static min(e) {
      return Ai(e);
    }
    static max(e) {
      return Ii(e);
    }
    static required(e) {
      return $t(e);
    }
    static requiredTrue(e) {
      return Si(e);
    }
    static email(e) {
      return Oi(e);
    }
    static minLength(e) {
      return ki(e);
    }
    static maxLength(e) {
      return Ti(e);
    }
    static pattern(e) {
      return Ni(e);
    }
    static nullValidator(e) {
      return ve(e);
    }
    static compose(e) {
      return Jt(e);
    }
    static composeAsync(e) {
      return ei(e);
    }
  };
function Ai(i) {
  return (e) => {
    if (P(e.value) || P(i)) return null;
    let r = parseFloat(e.value);
    return !isNaN(r) && r < i ? { min: { min: i, actual: e.value } } : null;
  };
}
function Ii(i) {
  return (e) => {
    if (P(e.value) || P(i)) return null;
    let r = parseFloat(e.value);
    return !isNaN(r) && r > i ? { max: { max: i, actual: e.value } } : null;
  };
}
function $t(i) {
  return P(i.value) ? { required: !0 } : null;
}
function Si(i) {
  return i.value === !0 ? null : { required: !0 };
}
function Oi(i) {
  return P(i.value) || Vi.test(i.value) ? null : { email: !0 };
}
function ki(i) {
  return (e) =>
    P(e.value) || !Wt(e.value)
      ? null
      : e.value.length < i
        ? { minlength: { requiredLength: i, actualLength: e.value.length } }
        : null;
}
function Ti(i) {
  return (e) =>
    Wt(e.value) && e.value.length > i
      ? { maxlength: { requiredLength: i, actualLength: e.value.length } }
      : null;
}
function Ni(i) {
  if (!i) return ve;
  let e, r;
  return (
    typeof i == "string"
      ? ((r = ""),
        i.charAt(0) !== "^" && (r += "^"),
        (r += i),
        i.charAt(i.length - 1) !== "$" && (r += "$"),
        (e = new RegExp(r)))
      : ((r = i.toString()), (e = i)),
    (t) => {
      if (P(t.value)) return null;
      let n = t.value;
      return e.test(n)
        ? null
        : { pattern: { requiredPattern: r, actualValue: n } };
    }
  );
}
function ve(i) {
  return null;
}
function Yt(i) {
  return i != null;
}
function Xt(i) {
  return Ft(i) ? ft(i) : i;
}
function Qt(i) {
  let e = {};
  return (
    i.forEach((r) => {
      e = r != null ? k(k({}, e), r) : e;
    }),
    Object.keys(e).length === 0 ? null : e
  );
}
function Zt(i, e) {
  return e.map((r) => r(i));
}
function Pi(i) {
  return !i.validate;
}
function Kt(i) {
  return i.map((e) => (Pi(e) ? e : (r) => e.validate(r)));
}
function Jt(i) {
  if (!i) return null;
  let e = i.filter(Yt);
  return e.length == 0
    ? null
    : function (r) {
        return Qt(Zt(r, e));
      };
}
function Ye(i) {
  return i != null ? Jt(Kt(i)) : null;
}
function ei(i) {
  if (!i) return null;
  let e = i.filter(Yt);
  return e.length == 0
    ? null
    : function (r) {
        let t = Zt(r, e).map(Xt);
        return ut(t).pipe(mt(Qt));
      };
}
function Xe(i) {
  return i != null ? ei(Kt(i)) : null;
}
function Pt(i, e) {
  return i === null ? [e] : Array.isArray(i) ? [...i, e] : [i, e];
}
function ti(i) {
  return i._rawValidators;
}
function ii(i) {
  return i._rawAsyncValidators;
}
function Be(i) {
  return i ? (Array.isArray(i) ? i : [i]) : [];
}
function be(i, e) {
  return Array.isArray(i) ? i.includes(e) : i === e;
}
function Rt(i, e) {
  let r = Be(e);
  return (
    Be(i).forEach((n) => {
      be(r, n) || r.push(n);
    }),
    r
  );
}
function Lt(i, e) {
  return Be(e).filter((r) => !be(i, r));
}
var ye = class {
    constructor() {
      (this._rawValidators = []),
        (this._rawAsyncValidators = []),
        (this._onDestroyCallbacks = []);
    }
    get value() {
      return this.control ? this.control.value : null;
    }
    get valid() {
      return this.control ? this.control.valid : null;
    }
    get invalid() {
      return this.control ? this.control.invalid : null;
    }
    get pending() {
      return this.control ? this.control.pending : null;
    }
    get disabled() {
      return this.control ? this.control.disabled : null;
    }
    get enabled() {
      return this.control ? this.control.enabled : null;
    }
    get errors() {
      return this.control ? this.control.errors : null;
    }
    get pristine() {
      return this.control ? this.control.pristine : null;
    }
    get dirty() {
      return this.control ? this.control.dirty : null;
    }
    get touched() {
      return this.control ? this.control.touched : null;
    }
    get status() {
      return this.control ? this.control.status : null;
    }
    get untouched() {
      return this.control ? this.control.untouched : null;
    }
    get statusChanges() {
      return this.control ? this.control.statusChanges : null;
    }
    get valueChanges() {
      return this.control ? this.control.valueChanges : null;
    }
    get path() {
      return null;
    }
    _setValidators(e) {
      (this._rawValidators = e || []),
        (this._composedValidatorFn = Ye(this._rawValidators));
    }
    _setAsyncValidators(e) {
      (this._rawAsyncValidators = e || []),
        (this._composedAsyncValidatorFn = Xe(this._rawAsyncValidators));
    }
    get validator() {
      return this._composedValidatorFn || null;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn || null;
    }
    _registerOnDestroy(e) {
      this._onDestroyCallbacks.push(e);
    }
    _invokeOnDestroyCallbacks() {
      this._onDestroyCallbacks.forEach((e) => e()),
        (this._onDestroyCallbacks = []);
    }
    reset(e = void 0) {
      this.control && this.control.reset(e);
    }
    hasError(e, r) {
      return this.control ? this.control.hasError(e, r) : !1;
    }
    getError(e, r) {
      return this.control ? this.control.getError(e, r) : null;
    }
  },
  R = class extends ye {
    get formDirective() {
      return null;
    }
    get path() {
      return null;
    }
  },
  U = class extends ye {
    constructor() {
      super(...arguments),
        (this._parent = null),
        (this.name = null),
        (this.valueAccessor = null);
    }
  },
  Ce = class {
    constructor(e) {
      this._cd = e;
    }
    get isTouched() {
      return !!this._cd?.control?.touched;
    }
    get isUntouched() {
      return !!this._cd?.control?.untouched;
    }
    get isPristine() {
      return !!this._cd?.control?.pristine;
    }
    get isDirty() {
      return !!this._cd?.control?.dirty;
    }
    get isValid() {
      return !!this._cd?.control?.valid;
    }
    get isInvalid() {
      return !!this._cd?.control?.invalid;
    }
    get isPending() {
      return !!this._cd?.control?.pending;
    }
    get isSubmitted() {
      return !!this._cd?.submitted;
    }
  },
  Ri = {
    "[class.ng-untouched]": "isUntouched",
    "[class.ng-touched]": "isTouched",
    "[class.ng-pristine]": "isPristine",
    "[class.ng-dirty]": "isDirty",
    "[class.ng-valid]": "isValid",
    "[class.ng-invalid]": "isInvalid",
    "[class.ng-pending]": "isPending",
  },
  _r = L(k({}, Ri), { "[class.ng-submitted]": "isSubmitted" }),
  xr = (() => {
    let e = class e extends Ce {
      constructor(t) {
        super(t);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(l(U, 2));
    }),
      (e.ɵdir = s({
        type: e,
        selectors: [
          ["", "formControlName", ""],
          ["", "ngModel", ""],
          ["", "formControl", ""],
        ],
        hostVars: 14,
        hostBindings: function (n, o) {
          n & 2 &&
            b("ng-untouched", o.isUntouched)("ng-touched", o.isTouched)(
              "ng-pristine",
              o.isPristine,
            )("ng-dirty", o.isDirty)("ng-valid", o.isValid)(
              "ng-invalid",
              o.isInvalid,
            )("ng-pending", o.isPending);
        },
        features: [A],
      }));
    let i = e;
    return i;
  })(),
  vr = (() => {
    let e = class e extends Ce {
      constructor(t) {
        super(t);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(l(R, 10));
    }),
      (e.ɵdir = s({
        type: e,
        selectors: [
          ["", "formGroupName", ""],
          ["", "formArrayName", ""],
          ["", "ngModelGroup", ""],
          ["", "formGroup", ""],
          ["form", 3, "ngNoForm", ""],
          ["", "ngForm", ""],
        ],
        hostVars: 16,
        hostBindings: function (n, o) {
          n & 2 &&
            b("ng-untouched", o.isUntouched)("ng-touched", o.isTouched)(
              "ng-pristine",
              o.isPristine,
            )("ng-dirty", o.isDirty)("ng-valid", o.isValid)(
              "ng-invalid",
              o.isInvalid,
            )("ng-pending", o.isPending)("ng-submitted", o.isSubmitted);
        },
        features: [A],
      }));
    let i = e;
    return i;
  })();
var oe = "VALID",
  ge = "INVALID",
  Q = "PENDING",
  ae = "DISABLED";
function Qe(i) {
  return (Ee(i) ? i.validators : i) || null;
}
function Li(i) {
  return Array.isArray(i) ? Ye(i) : i || null;
}
function Ze(i, e) {
  return (Ee(e) ? e.asyncValidators : i) || null;
}
function zi(i) {
  return Array.isArray(i) ? Xe(i) : i || null;
}
function Ee(i) {
  return i != null && !Array.isArray(i) && typeof i == "object";
}
function ni(i, e, r) {
  let t = i.controls;
  if (!(e ? Object.keys(t) : t).length) throw new se(1e3, "");
  if (!t[r]) throw new se(1001, "");
}
function ri(i, e, r) {
  i._forEachChild((t, n) => {
    if (r[n] === void 0) throw new se(1002, "");
  });
}
var Z = class {
    constructor(e, r) {
      (this._pendingDirty = !1),
        (this._hasOwnPendingAsyncValidator = !1),
        (this._pendingTouched = !1),
        (this._onCollectionChange = () => {}),
        (this._parent = null),
        (this.pristine = !0),
        (this.touched = !1),
        (this._onDisabledChange = []),
        this._assignValidators(e),
        this._assignAsyncValidators(r);
    }
    get validator() {
      return this._composedValidatorFn;
    }
    set validator(e) {
      this._rawValidators = this._composedValidatorFn = e;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn;
    }
    set asyncValidator(e) {
      this._rawAsyncValidators = this._composedAsyncValidatorFn = e;
    }
    get parent() {
      return this._parent;
    }
    get valid() {
      return this.status === oe;
    }
    get invalid() {
      return this.status === ge;
    }
    get pending() {
      return this.status == Q;
    }
    get disabled() {
      return this.status === ae;
    }
    get enabled() {
      return this.status !== ae;
    }
    get dirty() {
      return !this.pristine;
    }
    get untouched() {
      return !this.touched;
    }
    get updateOn() {
      return this._updateOn
        ? this._updateOn
        : this.parent
          ? this.parent.updateOn
          : "change";
    }
    setValidators(e) {
      this._assignValidators(e);
    }
    setAsyncValidators(e) {
      this._assignAsyncValidators(e);
    }
    addValidators(e) {
      this.setValidators(Rt(e, this._rawValidators));
    }
    addAsyncValidators(e) {
      this.setAsyncValidators(Rt(e, this._rawAsyncValidators));
    }
    removeValidators(e) {
      this.setValidators(Lt(e, this._rawValidators));
    }
    removeAsyncValidators(e) {
      this.setAsyncValidators(Lt(e, this._rawAsyncValidators));
    }
    hasValidator(e) {
      return be(this._rawValidators, e);
    }
    hasAsyncValidator(e) {
      return be(this._rawAsyncValidators, e);
    }
    clearValidators() {
      this.validator = null;
    }
    clearAsyncValidators() {
      this.asyncValidator = null;
    }
    markAsTouched(e = {}) {
      (this.touched = !0),
        this._parent && !e.onlySelf && this._parent.markAsTouched(e);
    }
    markAllAsTouched() {
      this.markAsTouched({ onlySelf: !0 }),
        this._forEachChild((e) => e.markAllAsTouched());
    }
    markAsUntouched(e = {}) {
      (this.touched = !1),
        (this._pendingTouched = !1),
        this._forEachChild((r) => {
          r.markAsUntouched({ onlySelf: !0 });
        }),
        this._parent && !e.onlySelf && this._parent._updateTouched(e);
    }
    markAsDirty(e = {}) {
      (this.pristine = !1),
        this._parent && !e.onlySelf && this._parent.markAsDirty(e);
    }
    markAsPristine(e = {}) {
      (this.pristine = !0),
        (this._pendingDirty = !1),
        this._forEachChild((r) => {
          r.markAsPristine({ onlySelf: !0 });
        }),
        this._parent && !e.onlySelf && this._parent._updatePristine(e);
    }
    markAsPending(e = {}) {
      (this.status = Q),
        e.emitEvent !== !1 && this.statusChanges.emit(this.status),
        this._parent && !e.onlySelf && this._parent.markAsPending(e);
    }
    disable(e = {}) {
      let r = this._parentMarkedDirty(e.onlySelf);
      (this.status = ae),
        (this.errors = null),
        this._forEachChild((t) => {
          t.disable(L(k({}, e), { onlySelf: !0 }));
        }),
        this._updateValue(),
        e.emitEvent !== !1 &&
          (this.valueChanges.emit(this.value),
          this.statusChanges.emit(this.status)),
        this._updateAncestors(L(k({}, e), { skipPristineCheck: r })),
        this._onDisabledChange.forEach((t) => t(!0));
    }
    enable(e = {}) {
      let r = this._parentMarkedDirty(e.onlySelf);
      (this.status = oe),
        this._forEachChild((t) => {
          t.enable(L(k({}, e), { onlySelf: !0 }));
        }),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: e.emitEvent }),
        this._updateAncestors(L(k({}, e), { skipPristineCheck: r })),
        this._onDisabledChange.forEach((t) => t(!1));
    }
    _updateAncestors(e) {
      this._parent &&
        !e.onlySelf &&
        (this._parent.updateValueAndValidity(e),
        e.skipPristineCheck || this._parent._updatePristine(),
        this._parent._updateTouched());
    }
    setParent(e) {
      this._parent = e;
    }
    getRawValue() {
      return this.value;
    }
    updateValueAndValidity(e = {}) {
      this._setInitialStatus(),
        this._updateValue(),
        this.enabled &&
          (this._cancelExistingSubscription(),
          (this.errors = this._runValidator()),
          (this.status = this._calculateStatus()),
          (this.status === oe || this.status === Q) &&
            this._runAsyncValidator(e.emitEvent)),
        e.emitEvent !== !1 &&
          (this.valueChanges.emit(this.value),
          this.statusChanges.emit(this.status)),
        this._parent && !e.onlySelf && this._parent.updateValueAndValidity(e);
    }
    _updateTreeValidity(e = { emitEvent: !0 }) {
      this._forEachChild((r) => r._updateTreeValidity(e)),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: e.emitEvent });
    }
    _setInitialStatus() {
      this.status = this._allControlsDisabled() ? ae : oe;
    }
    _runValidator() {
      return this.validator ? this.validator(this) : null;
    }
    _runAsyncValidator(e) {
      if (this.asyncValidator) {
        (this.status = Q), (this._hasOwnPendingAsyncValidator = !0);
        let r = Xt(this.asyncValidator(this));
        this._asyncValidationSubscription = r.subscribe((t) => {
          (this._hasOwnPendingAsyncValidator = !1),
            this.setErrors(t, { emitEvent: e });
        });
      }
    }
    _cancelExistingSubscription() {
      this._asyncValidationSubscription &&
        (this._asyncValidationSubscription.unsubscribe(),
        (this._hasOwnPendingAsyncValidator = !1));
    }
    setErrors(e, r = {}) {
      (this.errors = e), this._updateControlsErrors(r.emitEvent !== !1);
    }
    get(e) {
      let r = e;
      return r == null ||
        (Array.isArray(r) || (r = r.split(".")), r.length === 0)
        ? null
        : r.reduce((t, n) => t && t._find(n), this);
    }
    getError(e, r) {
      let t = r ? this.get(r) : this;
      return t && t.errors ? t.errors[e] : null;
    }
    hasError(e, r) {
      return !!this.getError(e, r);
    }
    get root() {
      let e = this;
      for (; e._parent; ) e = e._parent;
      return e;
    }
    _updateControlsErrors(e) {
      (this.status = this._calculateStatus()),
        e && this.statusChanges.emit(this.status),
        this._parent && this._parent._updateControlsErrors(e);
    }
    _initObservables() {
      (this.valueChanges = new $()), (this.statusChanges = new $());
    }
    _calculateStatus() {
      return this._allControlsDisabled()
        ? ae
        : this.errors
          ? ge
          : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(Q)
            ? Q
            : this._anyControlsHaveStatus(ge)
              ? ge
              : oe;
    }
    _anyControlsHaveStatus(e) {
      return this._anyControls((r) => r.status === e);
    }
    _anyControlsDirty() {
      return this._anyControls((e) => e.dirty);
    }
    _anyControlsTouched() {
      return this._anyControls((e) => e.touched);
    }
    _updatePristine(e = {}) {
      (this.pristine = !this._anyControlsDirty()),
        this._parent && !e.onlySelf && this._parent._updatePristine(e);
    }
    _updateTouched(e = {}) {
      (this.touched = this._anyControlsTouched()),
        this._parent && !e.onlySelf && this._parent._updateTouched(e);
    }
    _registerOnCollectionChange(e) {
      this._onCollectionChange = e;
    }
    _setUpdateStrategy(e) {
      Ee(e) && e.updateOn != null && (this._updateOn = e.updateOn);
    }
    _parentMarkedDirty(e) {
      let r = this._parent && this._parent.dirty;
      return !e && !!r && !this._parent._anyControlsDirty();
    }
    _find(e) {
      return null;
    }
    _assignValidators(e) {
      (this._rawValidators = Array.isArray(e) ? e.slice() : e),
        (this._composedValidatorFn = Li(this._rawValidators));
    }
    _assignAsyncValidators(e) {
      (this._rawAsyncValidators = Array.isArray(e) ? e.slice() : e),
        (this._composedAsyncValidatorFn = zi(this._rawAsyncValidators));
    }
  },
  K = class extends Z {
    constructor(e, r, t) {
      super(Qe(r), Ze(t, r)),
        (this.controls = e),
        this._initObservables(),
        this._setUpdateStrategy(r),
        this._setUpControls(),
        this.updateValueAndValidity({
          onlySelf: !0,
          emitEvent: !!this.asyncValidator,
        });
    }
    registerControl(e, r) {
      return this.controls[e]
        ? this.controls[e]
        : ((this.controls[e] = r),
          r.setParent(this),
          r._registerOnCollectionChange(this._onCollectionChange),
          r);
    }
    addControl(e, r, t = {}) {
      this.registerControl(e, r),
        this.updateValueAndValidity({ emitEvent: t.emitEvent }),
        this._onCollectionChange();
    }
    removeControl(e, r = {}) {
      this.controls[e] &&
        this.controls[e]._registerOnCollectionChange(() => {}),
        delete this.controls[e],
        this.updateValueAndValidity({ emitEvent: r.emitEvent }),
        this._onCollectionChange();
    }
    setControl(e, r, t = {}) {
      this.controls[e] &&
        this.controls[e]._registerOnCollectionChange(() => {}),
        delete this.controls[e],
        r && this.registerControl(e, r),
        this.updateValueAndValidity({ emitEvent: t.emitEvent }),
        this._onCollectionChange();
    }
    contains(e) {
      return this.controls.hasOwnProperty(e) && this.controls[e].enabled;
    }
    setValue(e, r = {}) {
      ri(this, !0, e),
        Object.keys(e).forEach((t) => {
          ni(this, !0, t),
            this.controls[t].setValue(e[t], {
              onlySelf: !0,
              emitEvent: r.emitEvent,
            });
        }),
        this.updateValueAndValidity(r);
    }
    patchValue(e, r = {}) {
      e != null &&
        (Object.keys(e).forEach((t) => {
          let n = this.controls[t];
          n && n.patchValue(e[t], { onlySelf: !0, emitEvent: r.emitEvent });
        }),
        this.updateValueAndValidity(r));
    }
    reset(e = {}, r = {}) {
      this._forEachChild((t, n) => {
        t.reset(e ? e[n] : null, { onlySelf: !0, emitEvent: r.emitEvent });
      }),
        this._updatePristine(r),
        this._updateTouched(r),
        this.updateValueAndValidity(r);
    }
    getRawValue() {
      return this._reduceChildren(
        {},
        (e, r, t) => ((e[t] = r.getRawValue()), e),
      );
    }
    _syncPendingControls() {
      let e = this._reduceChildren(!1, (r, t) =>
        t._syncPendingControls() ? !0 : r,
      );
      return e && this.updateValueAndValidity({ onlySelf: !0 }), e;
    }
    _forEachChild(e) {
      Object.keys(this.controls).forEach((r) => {
        let t = this.controls[r];
        t && e(t, r);
      });
    }
    _setUpControls() {
      this._forEachChild((e) => {
        e.setParent(this),
          e._registerOnCollectionChange(this._onCollectionChange);
      });
    }
    _updateValue() {
      this.value = this._reduceValue();
    }
    _anyControls(e) {
      for (let [r, t] of Object.entries(this.controls))
        if (this.contains(r) && e(t)) return !0;
      return !1;
    }
    _reduceValue() {
      let e = {};
      return this._reduceChildren(
        e,
        (r, t, n) => ((t.enabled || this.disabled) && (r[n] = t.value), r),
      );
    }
    _reduceChildren(e, r) {
      let t = e;
      return (
        this._forEachChild((n, o) => {
          t = r(t, n, o);
        }),
        t
      );
    }
    _allControlsDisabled() {
      for (let e of Object.keys(this.controls))
        if (this.controls[e].enabled) return !1;
      return Object.keys(this.controls).length > 0 || this.disabled;
    }
    _find(e) {
      return this.controls.hasOwnProperty(e) ? this.controls[e] : null;
    }
  };
var Ge = class extends K {};
var Ke = new u("CallSetDisabledState", {
    providedIn: "root",
    factory: () => Je,
  }),
  Je = "always";
function ji(i, e) {
  return [...e.path, i];
}
function Ue(i, e, r = Je) {
  et(i, e),
    e.valueAccessor.writeValue(i.value),
    (i.disabled || r === "always") &&
      e.valueAccessor.setDisabledState?.(i.disabled),
    Bi(i, e),
    Ui(i, e),
    Gi(i, e),
    Hi(i, e);
}
function zt(i, e, r = !0) {
  let t = () => {};
  e.valueAccessor &&
    (e.valueAccessor.registerOnChange(t), e.valueAccessor.registerOnTouched(t)),
    De(i, e),
    i &&
      (e._invokeOnDestroyCallbacks(), i._registerOnCollectionChange(() => {}));
}
function we(i, e) {
  i.forEach((r) => {
    r.registerOnValidatorChange && r.registerOnValidatorChange(e);
  });
}
function Hi(i, e) {
  if (e.valueAccessor.setDisabledState) {
    let r = (t) => {
      e.valueAccessor.setDisabledState(t);
    };
    i.registerOnDisabledChange(r),
      e._registerOnDestroy(() => {
        i._unregisterOnDisabledChange(r);
      });
  }
}
function et(i, e) {
  let r = ti(i);
  e.validator !== null
    ? i.setValidators(Pt(r, e.validator))
    : typeof r == "function" && i.setValidators([r]);
  let t = ii(i);
  e.asyncValidator !== null
    ? i.setAsyncValidators(Pt(t, e.asyncValidator))
    : typeof t == "function" && i.setAsyncValidators([t]);
  let n = () => i.updateValueAndValidity();
  we(e._rawValidators, n), we(e._rawAsyncValidators, n);
}
function De(i, e) {
  let r = !1;
  if (i !== null) {
    if (e.validator !== null) {
      let n = ti(i);
      if (Array.isArray(n) && n.length > 0) {
        let o = n.filter((a) => a !== e.validator);
        o.length !== n.length && ((r = !0), i.setValidators(o));
      }
    }
    if (e.asyncValidator !== null) {
      let n = ii(i);
      if (Array.isArray(n) && n.length > 0) {
        let o = n.filter((a) => a !== e.asyncValidator);
        o.length !== n.length && ((r = !0), i.setAsyncValidators(o));
      }
    }
  }
  let t = () => {};
  return we(e._rawValidators, t), we(e._rawAsyncValidators, t), r;
}
function Bi(i, e) {
  e.valueAccessor.registerOnChange((r) => {
    (i._pendingValue = r),
      (i._pendingChange = !0),
      (i._pendingDirty = !0),
      i.updateOn === "change" && oi(i, e);
  });
}
function Gi(i, e) {
  e.valueAccessor.registerOnTouched(() => {
    (i._pendingTouched = !0),
      i.updateOn === "blur" && i._pendingChange && oi(i, e),
      i.updateOn !== "submit" && i.markAsTouched();
  });
}
function oi(i, e) {
  i._pendingDirty && i.markAsDirty(),
    i.setValue(i._pendingValue, { emitModelToViewChange: !1 }),
    e.viewToModelUpdate(i._pendingValue),
    (i._pendingChange = !1);
}
function Ui(i, e) {
  let r = (t, n) => {
    e.valueAccessor.writeValue(t), n && e.viewToModelUpdate(t);
  };
  i.registerOnChange(r),
    e._registerOnDestroy(() => {
      i._unregisterOnChange(r);
    });
}
function ai(i, e) {
  i == null, et(i, e);
}
function qi(i, e) {
  return De(i, e);
}
function Wi(i, e) {
  if (!i.hasOwnProperty("model")) return !1;
  let r = i.model;
  return r.isFirstChange() ? !0 : !Object.is(e, r.currentValue);
}
function $i(i) {
  return Object.getPrototypeOf(i.constructor) === Ut;
}
function li(i, e) {
  i._syncPendingControls(),
    e.forEach((r) => {
      let t = r.control;
      t.updateOn === "submit" &&
        t._pendingChange &&
        (r.viewToModelUpdate(t._pendingValue), (t._pendingChange = !1));
    });
}
function Yi(i, e) {
  if (!e) return null;
  Array.isArray(e);
  let r, t, n;
  return (
    e.forEach((o) => {
      o.constructor === qt ? (r = o) : $i(o) ? (t = o) : (n = o);
    }),
    n || t || r || null
  );
}
function Xi(i, e) {
  let r = i.indexOf(e);
  r > -1 && i.splice(r, 1);
}
var Qi = { provide: R, useExisting: z(() => tt) },
  le = Promise.resolve(),
  tt = (() => {
    let e = class e extends R {
      constructor(t, n, o) {
        super(),
          (this.callSetDisabledState = o),
          (this.submitted = !1),
          (this._directives = new Set()),
          (this.ngSubmit = new $()),
          (this.form = new K({}, Ye(t), Xe(n)));
      }
      ngAfterViewInit() {
        this._setUpdateStrategy();
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      get controls() {
        return this.form.controls;
      }
      addControl(t) {
        le.then(() => {
          let n = this._findContainer(t.path);
          (t.control = n.registerControl(t.name, t.control)),
            Ue(t.control, t, this.callSetDisabledState),
            t.control.updateValueAndValidity({ emitEvent: !1 }),
            this._directives.add(t);
        });
      }
      getControl(t) {
        return this.form.get(t.path);
      }
      removeControl(t) {
        le.then(() => {
          let n = this._findContainer(t.path);
          n && n.removeControl(t.name), this._directives.delete(t);
        });
      }
      addFormGroup(t) {
        le.then(() => {
          let n = this._findContainer(t.path),
            o = new K({});
          ai(o, t),
            n.registerControl(t.name, o),
            o.updateValueAndValidity({ emitEvent: !1 });
        });
      }
      removeFormGroup(t) {
        le.then(() => {
          let n = this._findContainer(t.path);
          n && n.removeControl(t.name);
        });
      }
      getFormGroup(t) {
        return this.form.get(t.path);
      }
      updateModel(t, n) {
        le.then(() => {
          this.form.get(t.path).setValue(n);
        });
      }
      setValue(t) {
        this.control.setValue(t);
      }
      onSubmit(t) {
        return (
          (this.submitted = !0),
          li(this.form, this._directives),
          this.ngSubmit.emit(t),
          t?.target?.method === "dialog"
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(t = void 0) {
        this.form.reset(t), (this.submitted = !1);
      }
      _setUpdateStrategy() {
        this.options &&
          this.options.updateOn != null &&
          (this.form._updateOn = this.options.updateOn);
      }
      _findContainer(t) {
        return t.pop(), t.length ? this.form.get(t) : this.form;
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(l(Fe, 10), l($e, 10), l(Ke, 8));
    }),
      (e.ɵdir = s({
        type: e,
        selectors: [
          ["form", 3, "ngNoForm", "", 3, "formGroup", ""],
          ["ng-form"],
          ["", "ngForm", ""],
        ],
        hostBindings: function (n, o) {
          n & 1 &&
            S("submit", function (d) {
              return o.onSubmit(d);
            })("reset", function () {
              return o.onReset();
            });
        },
        inputs: { options: [x.None, "ngFormOptions", "options"] },
        outputs: { ngSubmit: "ngSubmit" },
        exportAs: ["ngForm"],
        features: [F([Qi]), A],
      }));
    let i = e;
    return i;
  })();
function jt(i, e) {
  let r = i.indexOf(e);
  r > -1 && i.splice(r, 1);
}
function Ht(i) {
  return (
    typeof i == "object" &&
    i !== null &&
    Object.keys(i).length === 2 &&
    "value" in i &&
    "disabled" in i
  );
}
var _e = class extends Z {
  constructor(e = null, r, t) {
    super(Qe(r), Ze(t, r)),
      (this.defaultValue = null),
      (this._onChange = []),
      (this._pendingChange = !1),
      this._applyFormState(e),
      this._setUpdateStrategy(r),
      this._initObservables(),
      this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !!this.asyncValidator,
      }),
      Ee(r) &&
        (r.nonNullable || r.initialValueIsDefault) &&
        (Ht(e) ? (this.defaultValue = e.value) : (this.defaultValue = e));
  }
  setValue(e, r = {}) {
    (this.value = this._pendingValue = e),
      this._onChange.length &&
        r.emitModelToViewChange !== !1 &&
        this._onChange.forEach((t) =>
          t(this.value, r.emitViewToModelChange !== !1),
        ),
      this.updateValueAndValidity(r);
  }
  patchValue(e, r = {}) {
    this.setValue(e, r);
  }
  reset(e = this.defaultValue, r = {}) {
    this._applyFormState(e),
      this.markAsPristine(r),
      this.markAsUntouched(r),
      this.setValue(this.value, r),
      (this._pendingChange = !1);
  }
  _updateValue() {}
  _anyControls(e) {
    return !1;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(e) {
    this._onChange.push(e);
  }
  _unregisterOnChange(e) {
    jt(this._onChange, e);
  }
  registerOnDisabledChange(e) {
    this._onDisabledChange.push(e);
  }
  _unregisterOnDisabledChange(e) {
    jt(this._onDisabledChange, e);
  }
  _forEachChild(e) {}
  _syncPendingControls() {
    return this.updateOn === "submit" &&
      (this._pendingDirty && this.markAsDirty(),
      this._pendingTouched && this.markAsTouched(),
      this._pendingChange)
      ? (this.setValue(this._pendingValue, {
          onlySelf: !0,
          emitModelToViewChange: !1,
        }),
        !0)
      : !1;
  }
  _applyFormState(e) {
    Ht(e)
      ? ((this.value = this._pendingValue = e.value),
        e.disabled
          ? this.disable({ onlySelf: !0, emitEvent: !1 })
          : this.enable({ onlySelf: !0, emitEvent: !1 }))
      : (this.value = this._pendingValue = e);
  }
};
var Zi = (i) => i instanceof _e;
var yr = (() => {
    let e = class e {};
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵdir = s({
        type: e,
        selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
        hostAttrs: ["novalidate", ""],
      }));
    let i = e;
    return i;
  })(),
  Ki = { provide: We, useExisting: z(() => Ji), multi: !0 },
  Ji = (() => {
    let e = class e extends Ut {
      writeValue(t) {
        let n = t ?? "";
        this.setProperty("value", n);
      }
      registerOnChange(t) {
        this.onChange = (n) => {
          t(n == "" ? null : parseFloat(n));
        };
      }
    };
    (e.ɵfac = (() => {
      let t;
      return function (o) {
        return (t || (t = te(e)))(o || e);
      };
    })()),
      (e.ɵdir = s({
        type: e,
        selectors: [
          ["input", "type", "number", "formControlName", ""],
          ["input", "type", "number", "formControl", ""],
          ["input", "type", "number", "ngModel", ""],
        ],
        hostBindings: function (n, o) {
          n & 1 &&
            S("input", function (d) {
              return o.onChange(d.target.value);
            })("blur", function () {
              return o.onTouched();
            });
        },
        features: [F([Ki]), A],
      }));
    let i = e;
    return i;
  })();
var di = new u("");
var en = { provide: R, useExisting: z(() => it) },
  it = (() => {
    let e = class e extends R {
      constructor(t, n, o) {
        super(),
          (this.callSetDisabledState = o),
          (this.submitted = !1),
          (this._onCollectionChange = () => this._updateDomValue()),
          (this.directives = []),
          (this.form = null),
          (this.ngSubmit = new $()),
          this._setValidators(t),
          this._setAsyncValidators(n);
      }
      ngOnChanges(t) {
        this._checkFormPresent(),
          t.hasOwnProperty("form") &&
            (this._updateValidators(),
            this._updateDomValue(),
            this._updateRegistrations(),
            (this._oldForm = this.form));
      }
      ngOnDestroy() {
        this.form &&
          (De(this.form, this),
          this.form._onCollectionChange === this._onCollectionChange &&
            this.form._registerOnCollectionChange(() => {}));
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      addControl(t) {
        let n = this.form.get(t.path);
        return (
          Ue(n, t, this.callSetDisabledState),
          n.updateValueAndValidity({ emitEvent: !1 }),
          this.directives.push(t),
          n
        );
      }
      getControl(t) {
        return this.form.get(t.path);
      }
      removeControl(t) {
        zt(t.control || null, t, !1), Xi(this.directives, t);
      }
      addFormGroup(t) {
        this._setUpFormContainer(t);
      }
      removeFormGroup(t) {
        this._cleanUpFormContainer(t);
      }
      getFormGroup(t) {
        return this.form.get(t.path);
      }
      addFormArray(t) {
        this._setUpFormContainer(t);
      }
      removeFormArray(t) {
        this._cleanUpFormContainer(t);
      }
      getFormArray(t) {
        return this.form.get(t.path);
      }
      updateModel(t, n) {
        this.form.get(t.path).setValue(n);
      }
      onSubmit(t) {
        return (
          (this.submitted = !0),
          li(this.form, this.directives),
          this.ngSubmit.emit(t),
          t?.target?.method === "dialog"
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(t = void 0) {
        this.form.reset(t), (this.submitted = !1);
      }
      _updateDomValue() {
        this.directives.forEach((t) => {
          let n = t.control,
            o = this.form.get(t.path);
          n !== o &&
            (zt(n || null, t),
            Zi(o) && (Ue(o, t, this.callSetDisabledState), (t.control = o)));
        }),
          this.form._updateTreeValidity({ emitEvent: !1 });
      }
      _setUpFormContainer(t) {
        let n = this.form.get(t.path);
        ai(n, t), n.updateValueAndValidity({ emitEvent: !1 });
      }
      _cleanUpFormContainer(t) {
        if (this.form) {
          let n = this.form.get(t.path);
          n && qi(n, t) && n.updateValueAndValidity({ emitEvent: !1 });
        }
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(this._onCollectionChange),
          this._oldForm && this._oldForm._registerOnCollectionChange(() => {});
      }
      _updateValidators() {
        et(this.form, this), this._oldForm && De(this._oldForm, this);
      }
      _checkFormPresent() {
        this.form;
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(l(Fe, 10), l($e, 10), l(Ke, 8));
    }),
      (e.ɵdir = s({
        type: e,
        selectors: [["", "formGroup", ""]],
        hostBindings: function (n, o) {
          n & 1 &&
            S("submit", function (d) {
              return o.onSubmit(d);
            })("reset", function () {
              return o.onReset();
            });
        },
        inputs: { form: [x.None, "formGroup", "form"] },
        outputs: { ngSubmit: "ngSubmit" },
        exportAs: ["ngForm"],
        features: [F([en]), A, W],
      }));
    let i = e;
    return i;
  })();
var tn = { provide: U, useExisting: z(() => nn) },
  nn = (() => {
    let e = class e extends U {
      set isDisabled(t) {}
      constructor(t, n, o, a, d) {
        super(),
          (this._ngModelWarningConfig = d),
          (this._added = !1),
          (this.name = null),
          (this.update = new $()),
          (this._ngModelWarningSent = !1),
          (this._parent = t),
          this._setValidators(n),
          this._setAsyncValidators(o),
          (this.valueAccessor = Yi(this, a));
      }
      ngOnChanges(t) {
        this._added || this._setUpControl(),
          Wi(t, this.viewModel) &&
            ((this.viewModel = this.model),
            this.formDirective.updateModel(this, this.model));
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this);
      }
      viewToModelUpdate(t) {
        (this.viewModel = t), this.update.emit(t);
      }
      get path() {
        return ji(
          this.name == null ? this.name : this.name.toString(),
          this._parent,
        );
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      _checkParentType() {}
      _setUpControl() {
        this._checkParentType(),
          (this.control = this.formDirective.addControl(this)),
          (this._added = !0);
      }
    };
    (e._ngModelWarningSentOnce = !1),
      (e.ɵfac = function (n) {
        return new (n || e)(
          l(R, 13),
          l(Fe, 10),
          l($e, 10),
          l(We, 10),
          l(di, 8),
        );
      }),
      (e.ɵdir = s({
        type: e,
        selectors: [["", "formControlName", ""]],
        inputs: {
          name: [x.None, "formControlName", "name"],
          isDisabled: [x.None, "disabled", "isDisabled"],
          model: [x.None, "ngModel", "model"],
        },
        outputs: { update: "ngModelChange" },
        features: [F([tn]), A, W],
      }));
    let i = e;
    return i;
  })();
var rn = (() => {
  let e = class e {
    constructor() {
      this._validator = ve;
    }
    ngOnChanges(t) {
      if (this.inputName in t) {
        let n = this.normalizeInput(t[this.inputName].currentValue);
        (this._enabled = this.enabled(n)),
          (this._validator = this._enabled ? this.createValidator(n) : ve),
          this._onChange && this._onChange();
      }
    }
    validate(t) {
      return this._validator(t);
    }
    registerOnValidatorChange(t) {
      this._onChange = t;
    }
    enabled(t) {
      return t != null;
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵdir = s({ type: e, features: [W] }));
  let i = e;
  return i;
})();
var on = { provide: Fe, useExisting: z(() => an), multi: !0 };
var an = (() => {
  let e = class e extends rn {
    constructor() {
      super(...arguments),
        (this.inputName = "required"),
        (this.normalizeInput = Et),
        (this.createValidator = (t) => $t);
    }
    enabled(t) {
      return t;
    }
  };
  (e.ɵfac = (() => {
    let t;
    return function (o) {
      return (t || (t = te(e)))(o || e);
    };
  })()),
    (e.ɵdir = s({
      type: e,
      selectors: [
        ["", "required", "", "formControlName", "", 3, "type", "checkbox"],
        ["", "required", "", "formControl", "", 3, "type", "checkbox"],
        ["", "required", "", "ngModel", "", 3, "type", "checkbox"],
      ],
      hostVars: 1,
      hostBindings: function (n, o) {
        n & 2 && C("required", o._enabled ? "" : null);
      },
      inputs: { required: "required" },
      features: [F([on]), A],
    }));
  let i = e;
  return i;
})();
var ln = (() => {
    let e = class e {};
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵmod = G({ type: e })),
      (e.ɵinj = H({}));
    let i = e;
    return i;
  })(),
  qe = class extends Z {
    constructor(e, r, t) {
      super(Qe(r), Ze(t, r)),
        (this.controls = e),
        this._initObservables(),
        this._setUpdateStrategy(r),
        this._setUpControls(),
        this.updateValueAndValidity({
          onlySelf: !0,
          emitEvent: !!this.asyncValidator,
        });
    }
    at(e) {
      return this.controls[this._adjustIndex(e)];
    }
    push(e, r = {}) {
      this.controls.push(e),
        this._registerControl(e),
        this.updateValueAndValidity({ emitEvent: r.emitEvent }),
        this._onCollectionChange();
    }
    insert(e, r, t = {}) {
      this.controls.splice(e, 0, r),
        this._registerControl(r),
        this.updateValueAndValidity({ emitEvent: t.emitEvent });
    }
    removeAt(e, r = {}) {
      let t = this._adjustIndex(e);
      t < 0 && (t = 0),
        this.controls[t] &&
          this.controls[t]._registerOnCollectionChange(() => {}),
        this.controls.splice(t, 1),
        this.updateValueAndValidity({ emitEvent: r.emitEvent });
    }
    setControl(e, r, t = {}) {
      let n = this._adjustIndex(e);
      n < 0 && (n = 0),
        this.controls[n] &&
          this.controls[n]._registerOnCollectionChange(() => {}),
        this.controls.splice(n, 1),
        r && (this.controls.splice(n, 0, r), this._registerControl(r)),
        this.updateValueAndValidity({ emitEvent: t.emitEvent }),
        this._onCollectionChange();
    }
    get length() {
      return this.controls.length;
    }
    setValue(e, r = {}) {
      ri(this, !1, e),
        e.forEach((t, n) => {
          ni(this, !1, n),
            this.at(n).setValue(t, { onlySelf: !0, emitEvent: r.emitEvent });
        }),
        this.updateValueAndValidity(r);
    }
    patchValue(e, r = {}) {
      e != null &&
        (e.forEach((t, n) => {
          this.at(n) &&
            this.at(n).patchValue(t, { onlySelf: !0, emitEvent: r.emitEvent });
        }),
        this.updateValueAndValidity(r));
    }
    reset(e = [], r = {}) {
      this._forEachChild((t, n) => {
        t.reset(e[n], { onlySelf: !0, emitEvent: r.emitEvent });
      }),
        this._updatePristine(r),
        this._updateTouched(r),
        this.updateValueAndValidity(r);
    }
    getRawValue() {
      return this.controls.map((e) => e.getRawValue());
    }
    clear(e = {}) {
      this.controls.length < 1 ||
        (this._forEachChild((r) => r._registerOnCollectionChange(() => {})),
        this.controls.splice(0),
        this.updateValueAndValidity({ emitEvent: e.emitEvent }));
    }
    _adjustIndex(e) {
      return e < 0 ? e + this.length : e;
    }
    _syncPendingControls() {
      let e = this.controls.reduce(
        (r, t) => (t._syncPendingControls() ? !0 : r),
        !1,
      );
      return e && this.updateValueAndValidity({ onlySelf: !0 }), e;
    }
    _forEachChild(e) {
      this.controls.forEach((r, t) => {
        e(r, t);
      });
    }
    _updateValue() {
      this.value = this.controls
        .filter((e) => e.enabled || this.disabled)
        .map((e) => e.value);
    }
    _anyControls(e) {
      return this.controls.some((r) => r.enabled && e(r));
    }
    _setUpControls() {
      this._forEachChild((e) => this._registerControl(e));
    }
    _allControlsDisabled() {
      for (let e of this.controls) if (e.enabled) return !1;
      return this.controls.length > 0 || this.disabled;
    }
    _registerControl(e) {
      e.setParent(this),
        e._registerOnCollectionChange(this._onCollectionChange);
    }
    _find(e) {
      return this.at(e) ?? null;
    }
  };
function Bt(i) {
  return (
    !!i &&
    (i.asyncValidators !== void 0 ||
      i.validators !== void 0 ||
      i.updateOn !== void 0)
  );
}
var dn = (() => {
  let e = class e {
    constructor() {
      this.useNonNullable = !1;
    }
    get nonNullable() {
      let t = new e();
      return (t.useNonNullable = !0), t;
    }
    group(t, n = null) {
      let o = this._reduceControls(t),
        a = {};
      return (
        Bt(n)
          ? (a = n)
          : n !== null &&
            ((a.validators = n.validator),
            (a.asyncValidators = n.asyncValidator)),
        new K(o, a)
      );
    }
    record(t, n = null) {
      let o = this._reduceControls(t);
      return new Ge(o, n);
    }
    control(t, n, o) {
      let a = {};
      return this.useNonNullable
        ? (Bt(n) ? (a = n) : ((a.validators = n), (a.asyncValidators = o)),
          new _e(t, L(k({}, a), { nonNullable: !0 })))
        : new _e(t, n, o);
    }
    array(t, n, o) {
      let a = t.map((d) => this._createControl(d));
      return new qe(a, n, o);
    }
    _reduceControls(t) {
      let n = {};
      return (
        Object.keys(t).forEach((o) => {
          n[o] = this._createControl(t[o]);
        }),
        n
      );
    }
    _createControl(t) {
      if (t instanceof _e) return t;
      if (t instanceof Z) return t;
      if (Array.isArray(t)) {
        let n = t[0],
          o = t.length > 1 ? t[1] : null,
          a = t.length > 2 ? t[2] : null;
        return this.control(n, o, a);
      } else return this.control(t);
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵprov = j({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let i = e;
  return i;
})();
var Cr = (() => {
  let e = class e extends dn {
    group(t, n = null) {
      return super.group(t, n);
    }
    control(t, n, o) {
      return super.control(t, n, o);
    }
    array(t, n, o) {
      return super.array(t, n, o);
    }
  };
  (e.ɵfac = (() => {
    let t;
    return function (o) {
      return (t || (t = te(e)))(o || e);
    };
  })()),
    (e.ɵprov = j({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let i = e;
  return i;
})();
var wr = (() => {
  let e = class e {
    static withConfig(t) {
      return {
        ngModule: e,
        providers: [
          { provide: di, useValue: t.warnOnNgModelWithFormControl ?? "always" },
          { provide: Ke, useValue: t.callSetDisabledState ?? Je },
        ],
      };
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵmod = G({ type: e })),
    (e.ɵinj = H({ imports: [ln] }));
  let i = e;
  return i;
})();
var nt = class {
    constructor(e) {
      (this._box = e),
        (this._destroyed = new T()),
        (this._resizeSubject = new T()),
        (this._elementObservables = new Map()),
        typeof ResizeObserver < "u" &&
          (this._resizeObserver = new ResizeObserver((r) =>
            this._resizeSubject.next(r),
          ));
    }
    observe(e) {
      return (
        this._elementObservables.has(e) ||
          this._elementObservables.set(
            e,
            new st((r) => {
              let t = this._resizeSubject.subscribe(r);
              return (
                this._resizeObserver?.observe(e, { box: this._box }),
                () => {
                  this._resizeObserver?.unobserve(e),
                    t.unsubscribe(),
                    this._elementObservables.delete(e);
                }
              );
            }).pipe(
              pt((r) => r.some((t) => t.target === e)),
              gt({ bufferSize: 1, refCount: !0 }),
              q(this._destroyed),
            ),
          ),
        this._elementObservables.get(e)
      );
    }
    destroy() {
      this._destroyed.next(),
        this._destroyed.complete(),
        this._resizeSubject.complete(),
        this._elementObservables.clear();
    }
  },
  si = (() => {
    let e = class e {
      constructor() {
        (this._observers = new Map()),
          (this._ngZone = B(w)),
          typeof ResizeObserver < "u";
      }
      ngOnDestroy() {
        for (let [, t] of this._observers) t.destroy();
        this._observers.clear(), typeof ResizeObserver < "u";
      }
      observe(t, n) {
        let o = n?.box || "content-box";
        return (
          this._observers.has(o) || this._observers.set(o, new nt(o)),
          this._observers.get(o).observe(t)
        );
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = j({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })();
var fn = ["notch"],
  mn = ["matFormFieldNotchedOutline", ""],
  un = ["*"],
  hn = ["textField"],
  pn = ["iconPrefixContainer"],
  gn = ["textPrefixContainer"],
  _n = [
    "*",
    [["mat-label"]],
    [
      ["", "matPrefix", ""],
      ["", "matIconPrefix", ""],
    ],
    [["", "matTextPrefix", ""]],
    [["", "matTextSuffix", ""]],
    [
      ["", "matSuffix", ""],
      ["", "matIconSuffix", ""],
    ],
    [["mat-error"], ["", "matError", ""]],
    [["mat-hint", 3, "align", "end"]],
    [["mat-hint", "align", "end"]],
  ],
  xn = [
    "*",
    "mat-label",
    "[matPrefix], [matIconPrefix]",
    "[matTextPrefix]",
    "[matTextSuffix]",
    "[matSuffix], [matIconSuffix]",
    "mat-error, [matError]",
    "mat-hint:not([align='end'])",
    "mat-hint[align='end']",
  ];
function vn(i, e) {
  i & 1 && I(0, "span", 17);
}
function bn(i, e) {
  if (
    (i & 1 && (f(0, "label", 16), M(1, 1), _(2, vn, 1, 0, "span", 17), m()),
    i & 2)
  ) {
    let r = E(2);
    D("floating", r._shouldLabelFloat())("monitorResize", r._hasOutline())(
      "id",
      r._labelId,
    ),
      C("for", r._control.id),
      c(2),
      y(2, !r.hideRequiredMarker && r._control.required ? 2 : -1);
  }
}
function yn(i, e) {
  if ((i & 1 && _(0, bn, 3, 5, "label", 15), i & 2)) {
    let r = E();
    y(0, r._hasFloatingLabel() ? 0 : -1);
  }
}
function Cn(i, e) {
  i & 1 && I(0, "div", 5);
}
function wn(i, e) {}
function Dn(i, e) {
  if ((i & 1 && _(0, wn, 0, 0, "ng-template", 19), i & 2)) {
    E(2);
    let r = ne(1);
    D("ngTemplateOutlet", r);
  }
}
function Fn(i, e) {
  if ((i & 1 && (f(0, "div", 18), _(1, Dn, 1, 1), m()), i & 2)) {
    let r = E();
    D("matFormFieldNotchedOutlineOpen", r._shouldLabelFloat()),
      c(),
      y(1, r._forceDisplayInfixLabel() ? -1 : 1);
  }
}
function En(i, e) {
  i & 1 && (f(0, "div", 8, 2), M(2, 2), m());
}
function Mn(i, e) {
  i & 1 && (f(0, "div", 9, 3), M(2, 3), m());
}
function Vn(i, e) {}
function An(i, e) {
  if ((i & 1 && _(0, Vn, 0, 0, "ng-template", 19), i & 2)) {
    E();
    let r = ne(1);
    D("ngTemplateOutlet", r);
  }
}
function In(i, e) {
  i & 1 && (f(0, "div", 11), M(1, 4), m());
}
function Sn(i, e) {
  i & 1 && (f(0, "div", 12), M(1, 5), m());
}
function On(i, e) {
  i & 1 && I(0, "div", 13);
}
function kn(i, e) {
  if ((i & 1 && (f(0, "div", 20), M(1, 6), m()), i & 2)) {
    let r = E();
    D("@transitionMessages", r._subscriptAnimationState);
  }
}
function Tn(i, e) {
  if ((i & 1 && (f(0, "mat-hint", 23), wt(1), m()), i & 2)) {
    let r = E(2);
    D("id", r._hintLabelId), c(), Dt(r.hintLabel);
  }
}
function Nn(i, e) {
  if (
    (i & 1 &&
      (f(0, "div", 21),
      _(1, Tn, 2, 2, "mat-hint"),
      M(2, 7),
      I(3, "div", 22),
      M(4, 8),
      m()),
    i & 2)
  ) {
    let r = E();
    D("@transitionMessages", r._subscriptAnimationState),
      c(),
      y(1, r.hintLabel ? 1 : -1);
  }
}
var ci = (() => {
    let e = class e {};
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵdir = s({ type: e, selectors: [["mat-label"]], standalone: !0 }));
    let i = e;
    return i;
  })(),
  Pn = 0,
  bi = new u("MatError"),
  Qr = (() => {
    let e = class e {
      constructor(t, n) {
        (this.id = `mat-mdc-error-${Pn++}`),
          t || n.nativeElement.setAttribute("aria-live", "polite");
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(bt("aria-live"), l(v));
    }),
      (e.ɵdir = s({
        type: e,
        selectors: [["mat-error"], ["", "matError", ""]],
        hostAttrs: [
          "aria-atomic",
          "true",
          1,
          "mat-mdc-form-field-error",
          "mat-mdc-form-field-bottom-align",
        ],
        hostVars: 1,
        hostBindings: function (n, o) {
          n & 2 && ie("id", o.id);
        },
        inputs: { id: "id" },
        standalone: !0,
        features: [F([{ provide: bi, useExisting: e }])],
      }));
    let i = e;
    return i;
  })(),
  Rn = 0,
  fi = (() => {
    let e = class e {
      constructor() {
        (this.align = "start"), (this.id = `mat-mdc-hint-${Rn++}`);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵdir = s({
        type: e,
        selectors: [["mat-hint"]],
        hostAttrs: [
          1,
          "mat-mdc-form-field-hint",
          "mat-mdc-form-field-bottom-align",
        ],
        hostVars: 4,
        hostBindings: function (n, o) {
          n & 2 &&
            (ie("id", o.id),
            C("align", null),
            b("mat-mdc-form-field-hint-end", o.align === "end"));
        },
        inputs: { align: "align", id: "id" },
        standalone: !0,
      }));
    let i = e;
    return i;
  })(),
  Ln = new u("MatPrefix");
var zn = new u("MatSuffix");
var yi = new u("FloatingLabelParent"),
  mi = (() => {
    let e = class e {
      get floating() {
        return this._floating;
      }
      set floating(t) {
        (this._floating = t), this.monitorResize && this._handleResize();
      }
      get monitorResize() {
        return this._monitorResize;
      }
      set monitorResize(t) {
        (this._monitorResize = t),
          this._monitorResize
            ? this._subscribeToResize()
            : this._resizeSubscription.unsubscribe();
      }
      constructor(t) {
        (this._elementRef = t),
          (this._floating = !1),
          (this._monitorResize = !1),
          (this._resizeObserver = B(si)),
          (this._ngZone = B(w)),
          (this._parent = B(yi)),
          (this._resizeSubscription = new dt());
      }
      ngOnDestroy() {
        this._resizeSubscription.unsubscribe();
      }
      getWidth() {
        return jn(this._elementRef.nativeElement);
      }
      get element() {
        return this._elementRef.nativeElement;
      }
      _handleResize() {
        setTimeout(() => this._parent._handleLabelResized());
      }
      _subscribeToResize() {
        this._resizeSubscription.unsubscribe(),
          this._ngZone.runOutsideAngular(() => {
            this._resizeSubscription = this._resizeObserver
              .observe(this._elementRef.nativeElement, { box: "border-box" })
              .subscribe(() => this._handleResize());
          });
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(l(v));
    }),
      (e.ɵdir = s({
        type: e,
        selectors: [["label", "matFormFieldFloatingLabel", ""]],
        hostAttrs: [1, "mdc-floating-label", "mat-mdc-floating-label"],
        hostVars: 2,
        hostBindings: function (n, o) {
          n & 2 && b("mdc-floating-label--float-above", o.floating);
        },
        inputs: { floating: "floating", monitorResize: "monitorResize" },
        standalone: !0,
      }));
    let i = e;
    return i;
  })();
function jn(i) {
  let e = i;
  if (e.offsetParent !== null) return e.scrollWidth;
  let r = e.cloneNode(!0);
  r.style.setProperty("position", "absolute"),
    r.style.setProperty("transform", "translate(-9999px, -9999px)"),
    document.documentElement.appendChild(r);
  let t = r.scrollWidth;
  return r.remove(), t;
}
var ui = "mdc-line-ripple--active",
  Me = "mdc-line-ripple--deactivating",
  hi = (() => {
    let e = class e {
      constructor(t, n) {
        (this._elementRef = t),
          (this._handleTransitionEnd = (o) => {
            let a = this._elementRef.nativeElement.classList,
              d = a.contains(Me);
            o.propertyName === "opacity" && d && a.remove(ui, Me);
          }),
          n.runOutsideAngular(() => {
            t.nativeElement.addEventListener(
              "transitionend",
              this._handleTransitionEnd,
            );
          });
      }
      activate() {
        let t = this._elementRef.nativeElement.classList;
        t.remove(Me), t.add(ui);
      }
      deactivate() {
        this._elementRef.nativeElement.classList.add(Me);
      }
      ngOnDestroy() {
        this._elementRef.nativeElement.removeEventListener(
          "transitionend",
          this._handleTransitionEnd,
        );
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(l(v), l(w));
    }),
      (e.ɵdir = s({
        type: e,
        selectors: [["div", "matFormFieldLineRipple", ""]],
        hostAttrs: [1, "mdc-line-ripple"],
        standalone: !0,
      }));
    let i = e;
    return i;
  })(),
  pi = (() => {
    let e = class e {
      constructor(t, n) {
        (this._elementRef = t), (this._ngZone = n), (this.open = !1);
      }
      ngAfterViewInit() {
        let t = this._elementRef.nativeElement.querySelector(
          ".mdc-floating-label",
        );
        t
          ? (this._elementRef.nativeElement.classList.add(
              "mdc-notched-outline--upgraded",
            ),
            typeof requestAnimationFrame == "function" &&
              ((t.style.transitionDuration = "0s"),
              this._ngZone.runOutsideAngular(() => {
                requestAnimationFrame(() => (t.style.transitionDuration = ""));
              })))
          : this._elementRef.nativeElement.classList.add(
              "mdc-notched-outline--no-label",
            );
      }
      _setNotchWidth(t) {
        !this.open || !t
          ? (this._notch.nativeElement.style.width = "")
          : (this._notch.nativeElement.style.width = `calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(l(v), l(w));
    }),
      (e.ɵcmp = ee({
        type: e,
        selectors: [["div", "matFormFieldNotchedOutline", ""]],
        viewQuery: function (n, o) {
          if ((n & 1 && O(fn, 5), n & 2)) {
            let a;
            h((a = p())) && (o._notch = a.first);
          }
        },
        hostAttrs: [1, "mdc-notched-outline"],
        hostVars: 2,
        hostBindings: function (n, o) {
          n & 2 && b("mdc-notched-outline--notched", o.open);
        },
        inputs: { open: [x.None, "matFormFieldNotchedOutlineOpen", "open"] },
        standalone: !0,
        features: [re],
        attrs: mn,
        ngContentSelectors: un,
        decls: 5,
        vars: 0,
        consts: [
          ["notch", ""],
          [1, "mdc-notched-outline__leading"],
          [1, "mdc-notched-outline__notch"],
          [1, "mdc-notched-outline__trailing"],
        ],
        template: function (n, o) {
          n & 1 &&
            (Pe(),
            I(0, "div", 1),
            f(1, "div", 2, 0),
            M(3),
            m(),
            I(4, "div", 3));
        },
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = e;
    return i;
  })(),
  Hn = {
    transitionMessages: Ot("transitionMessages", [
      Tt("enter", He({ opacity: 1, transform: "translateY(0%)" })),
      Nt("void => enter", [
        He({ opacity: 0, transform: "translateY(-5px)" }),
        kt("300ms cubic-bezier(0.55, 0, 0.55, 0.2)"),
      ]),
    ]),
  },
  rt = (() => {
    let e = class e {};
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵdir = s({ type: e }));
    let i = e;
    return i;
  })();
var ot = new u("MatFormField"),
  Bn = new u("MAT_FORM_FIELD_DEFAULT_OPTIONS"),
  gi = 0,
  _i = "fill",
  Gn = "auto",
  xi = "fixed",
  Un = "translateY(-50%)",
  Zr = (() => {
    let e = class e {
      get hideRequiredMarker() {
        return this._hideRequiredMarker;
      }
      set hideRequiredMarker(t) {
        this._hideRequiredMarker = X(t);
      }
      get floatLabel() {
        return this._floatLabel || this._defaults?.floatLabel || Gn;
      }
      set floatLabel(t) {
        t !== this._floatLabel &&
          ((this._floatLabel = t), this._changeDetectorRef.markForCheck());
      }
      get appearance() {
        return this._appearance;
      }
      set appearance(t) {
        let n = this._appearance,
          o = t || this._defaults?.appearance || _i;
        (this._appearance = o),
          this._appearance === "outline" &&
            this._appearance !== n &&
            (this._needsOutlineLabelOffsetUpdateOnStable = !0);
      }
      get subscriptSizing() {
        return this._subscriptSizing || this._defaults?.subscriptSizing || xi;
      }
      set subscriptSizing(t) {
        this._subscriptSizing = t || this._defaults?.subscriptSizing || xi;
      }
      get hintLabel() {
        return this._hintLabel;
      }
      set hintLabel(t) {
        (this._hintLabel = t), this._processHints();
      }
      get _control() {
        return this._explicitFormFieldControl || this._formFieldControl;
      }
      set _control(t) {
        this._explicitFormFieldControl = t;
      }
      constructor(t, n, o, a, d, g, V, Ve) {
        (this._elementRef = t),
          (this._changeDetectorRef = n),
          (this._ngZone = o),
          (this._dir = a),
          (this._platform = d),
          (this._defaults = g),
          (this._animationMode = V),
          (this._hideRequiredMarker = !1),
          (this.color = "primary"),
          (this._appearance = _i),
          (this._subscriptSizing = null),
          (this._hintLabel = ""),
          (this._hasIconPrefix = !1),
          (this._hasTextPrefix = !1),
          (this._hasIconSuffix = !1),
          (this._hasTextSuffix = !1),
          (this._labelId = `mat-mdc-form-field-label-${gi++}`),
          (this._hintLabelId = `mat-mdc-hint-${gi++}`),
          (this._subscriptAnimationState = ""),
          (this._destroyed = new T()),
          (this._isFocused = null),
          (this._needsOutlineLabelOffsetUpdateOnStable = !1),
          g &&
            (g.appearance && (this.appearance = g.appearance),
            (this._hideRequiredMarker = !!g?.hideRequiredMarker),
            g.color && (this.color = g.color));
      }
      ngAfterViewInit() {
        this._updateFocusState(),
          (this._subscriptAnimationState = "enter"),
          this._changeDetectorRef.detectChanges();
      }
      ngAfterContentInit() {
        this._assertFormFieldControl(),
          this._initializeControl(),
          this._initializeSubscript(),
          this._initializePrefixAndSuffix(),
          this._initializeOutlineLabelOffsetSubscriptions();
      }
      ngAfterContentChecked() {
        this._assertFormFieldControl();
      }
      ngOnDestroy() {
        this._destroyed.next(), this._destroyed.complete();
      }
      getLabelId() {
        return this._hasFloatingLabel() ? this._labelId : null;
      }
      getConnectedOverlayOrigin() {
        return this._textField || this._elementRef;
      }
      _animateAndLockLabel() {
        this._hasFloatingLabel() && (this.floatLabel = "always");
      }
      _initializeControl() {
        let t = this._control;
        t.controlType &&
          this._elementRef.nativeElement.classList.add(
            `mat-mdc-form-field-type-${t.controlType}`,
          ),
          t.stateChanges.subscribe(() => {
            this._updateFocusState(),
              this._syncDescribedByIds(),
              this._changeDetectorRef.markForCheck();
          }),
          t.ngControl &&
            t.ngControl.valueChanges &&
            t.ngControl.valueChanges
              .pipe(q(this._destroyed))
              .subscribe(() => this._changeDetectorRef.markForCheck());
      }
      _checkPrefixAndSuffixTypes() {
        (this._hasIconPrefix = !!this._prefixChildren.find((t) => !t._isText)),
          (this._hasTextPrefix = !!this._prefixChildren.find((t) => t._isText)),
          (this._hasIconSuffix = !!this._suffixChildren.find(
            (t) => !t._isText,
          )),
          (this._hasTextSuffix = !!this._suffixChildren.find((t) => t._isText));
      }
      _initializePrefixAndSuffix() {
        this._checkPrefixAndSuffixTypes(),
          ht(
            this._prefixChildren.changes,
            this._suffixChildren.changes,
          ).subscribe(() => {
            this._checkPrefixAndSuffixTypes(),
              this._changeDetectorRef.markForCheck();
          });
      }
      _initializeSubscript() {
        this._hintChildren.changes.subscribe(() => {
          this._processHints(), this._changeDetectorRef.markForCheck();
        }),
          this._errorChildren.changes.subscribe(() => {
            this._syncDescribedByIds(), this._changeDetectorRef.markForCheck();
          }),
          this._validateHints(),
          this._syncDescribedByIds();
      }
      _assertFormFieldControl() {
        this._control;
      }
      _updateFocusState() {
        this._control.focused && !this._isFocused
          ? ((this._isFocused = !0), this._lineRipple?.activate())
          : !this._control.focused &&
            (this._isFocused || this._isFocused === null) &&
            ((this._isFocused = !1), this._lineRipple?.deactivate()),
          this._textField?.nativeElement.classList.toggle(
            "mdc-text-field--focused",
            this._control.focused,
          );
      }
      _initializeOutlineLabelOffsetSubscriptions() {
        this._prefixChildren.changes.subscribe(
          () => (this._needsOutlineLabelOffsetUpdateOnStable = !0),
        ),
          this._ngZone.runOutsideAngular(() => {
            this._ngZone.onStable.pipe(q(this._destroyed)).subscribe(() => {
              this._needsOutlineLabelOffsetUpdateOnStable &&
                ((this._needsOutlineLabelOffsetUpdateOnStable = !1),
                this._updateOutlineLabelOffset());
            });
          }),
          this._dir.change
            .pipe(q(this._destroyed))
            .subscribe(
              () => (this._needsOutlineLabelOffsetUpdateOnStable = !0),
            );
      }
      _shouldAlwaysFloat() {
        return this.floatLabel === "always";
      }
      _hasOutline() {
        return this.appearance === "outline";
      }
      _forceDisplayInfixLabel() {
        return (
          !this._platform.isBrowser &&
          this._prefixChildren.length &&
          !this._shouldLabelFloat()
        );
      }
      _hasFloatingLabel() {
        return !!this._labelChildNonStatic || !!this._labelChildStatic;
      }
      _shouldLabelFloat() {
        return this._control.shouldLabelFloat || this._shouldAlwaysFloat();
      }
      _shouldForward(t) {
        let n = this._control ? this._control.ngControl : null;
        return n && n[t];
      }
      _getDisplayedMessages() {
        return this._errorChildren &&
          this._errorChildren.length > 0 &&
          this._control.errorState
          ? "error"
          : "hint";
      }
      _handleLabelResized() {
        this._refreshOutlineNotchWidth();
      }
      _refreshOutlineNotchWidth() {
        !this._hasOutline() || !this._floatingLabel || !this._shouldLabelFloat()
          ? this._notchedOutline?._setNotchWidth(0)
          : this._notchedOutline?._setNotchWidth(
              this._floatingLabel.getWidth(),
            );
      }
      _processHints() {
        this._validateHints(), this._syncDescribedByIds();
      }
      _validateHints() {
        this._hintChildren;
      }
      _syncDescribedByIds() {
        if (this._control) {
          let t = [];
          if (
            (this._control.userAriaDescribedBy &&
              typeof this._control.userAriaDescribedBy == "string" &&
              t.push(...this._control.userAriaDescribedBy.split(" ")),
            this._getDisplayedMessages() === "hint")
          ) {
            let n = this._hintChildren
                ? this._hintChildren.find((a) => a.align === "start")
                : null,
              o = this._hintChildren
                ? this._hintChildren.find((a) => a.align === "end")
                : null;
            n ? t.push(n.id) : this._hintLabel && t.push(this._hintLabelId),
              o && t.push(o.id);
          } else
            this._errorChildren &&
              t.push(...this._errorChildren.map((n) => n.id));
          this._control.setDescribedByIds(t);
        }
      }
      _updateOutlineLabelOffset() {
        if (
          !this._platform.isBrowser ||
          !this._hasOutline() ||
          !this._floatingLabel
        )
          return;
        let t = this._floatingLabel.element;
        if (!(this._iconPrefixContainer || this._textPrefixContainer)) {
          t.style.transform = "";
          return;
        }
        if (!this._isAttachedToDom()) {
          this._needsOutlineLabelOffsetUpdateOnStable = !0;
          return;
        }
        let n = this._iconPrefixContainer?.nativeElement,
          o = this._textPrefixContainer?.nativeElement,
          a = n?.getBoundingClientRect().width ?? 0,
          d = o?.getBoundingClientRect().width ?? 0,
          g = this._dir.value === "rtl" ? "-1" : "1",
          V = `${a + d}px`,
          Ae = `calc(${g} * (${V} + var(--mat-mdc-form-field-label-offset-x, 0px)))`;
        t.style.transform = `var(
        --mat-mdc-form-field-label-transform,
        ${Un} translateX(${Ae})
    )`;
      }
      _isAttachedToDom() {
        let t = this._elementRef.nativeElement;
        if (t.getRootNode) {
          let n = t.getRootNode();
          return n && n !== t;
        }
        return document.documentElement.contains(t);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(
        l(v),
        l(Re),
        l(w),
        l(At),
        l(Y),
        l(Bn, 8),
        l(ce, 8),
        l(Mt),
      );
    }),
      (e.ɵcmp = ee({
        type: e,
        selectors: [["mat-form-field"]],
        contentQueries: function (n, o, a) {
          if (
            (n & 1 &&
              (N(a, ci, 5),
              N(a, ci, 7),
              N(a, rt, 5),
              N(a, Ln, 5),
              N(a, zn, 5),
              N(a, bi, 5),
              N(a, fi, 5)),
            n & 2)
          ) {
            let d;
            h((d = p())) && (o._labelChildNonStatic = d.first),
              h((d = p())) && (o._labelChildStatic = d.first),
              h((d = p())) && (o._formFieldControl = d.first),
              h((d = p())) && (o._prefixChildren = d),
              h((d = p())) && (o._suffixChildren = d),
              h((d = p())) && (o._errorChildren = d),
              h((d = p())) && (o._hintChildren = d);
          }
        },
        viewQuery: function (n, o) {
          if (
            (n & 1 &&
              (O(hn, 5), O(pn, 5), O(gn, 5), O(mi, 5), O(pi, 5), O(hi, 5)),
            n & 2)
          ) {
            let a;
            h((a = p())) && (o._textField = a.first),
              h((a = p())) && (o._iconPrefixContainer = a.first),
              h((a = p())) && (o._textPrefixContainer = a.first),
              h((a = p())) && (o._floatingLabel = a.first),
              h((a = p())) && (o._notchedOutline = a.first),
              h((a = p())) && (o._lineRipple = a.first);
          }
        },
        hostAttrs: [1, "mat-mdc-form-field"],
        hostVars: 42,
        hostBindings: function (n, o) {
          n & 2 &&
            b("mat-mdc-form-field-label-always-float", o._shouldAlwaysFloat())(
              "mat-mdc-form-field-has-icon-prefix",
              o._hasIconPrefix,
            )("mat-mdc-form-field-has-icon-suffix", o._hasIconSuffix)(
              "mat-form-field-invalid",
              o._control.errorState,
            )("mat-form-field-disabled", o._control.disabled)(
              "mat-form-field-autofilled",
              o._control.autofilled,
            )(
              "mat-form-field-no-animations",
              o._animationMode === "NoopAnimations",
            )("mat-form-field-appearance-fill", o.appearance == "fill")(
              "mat-form-field-appearance-outline",
              o.appearance == "outline",
            )(
              "mat-form-field-hide-placeholder",
              o._hasFloatingLabel() && !o._shouldLabelFloat(),
            )("mat-focused", o._control.focused)(
              "mat-primary",
              o.color !== "accent" && o.color !== "warn",
            )("mat-accent", o.color === "accent")(
              "mat-warn",
              o.color === "warn",
            )("ng-untouched", o._shouldForward("untouched"))(
              "ng-touched",
              o._shouldForward("touched"),
            )("ng-pristine", o._shouldForward("pristine"))(
              "ng-dirty",
              o._shouldForward("dirty"),
            )("ng-valid", o._shouldForward("valid"))(
              "ng-invalid",
              o._shouldForward("invalid"),
            )("ng-pending", o._shouldForward("pending"));
        },
        inputs: {
          hideRequiredMarker: "hideRequiredMarker",
          color: "color",
          floatLabel: "floatLabel",
          appearance: "appearance",
          subscriptSizing: "subscriptSizing",
          hintLabel: "hintLabel",
        },
        exportAs: ["matFormField"],
        standalone: !0,
        features: [
          F([
            { provide: ot, useExisting: e },
            { provide: yi, useExisting: e },
          ]),
          re,
        ],
        ngContentSelectors: xn,
        decls: 18,
        vars: 21,
        consts: [
          ["labelTemplate", ""],
          ["textField", ""],
          ["iconPrefixContainer", ""],
          ["textPrefixContainer", ""],
          [1, "mat-mdc-text-field-wrapper", "mdc-text-field", 3, "click"],
          [1, "mat-mdc-form-field-focus-overlay"],
          [1, "mat-mdc-form-field-flex"],
          ["matFormFieldNotchedOutline", ""],
          [1, "mat-mdc-form-field-icon-prefix"],
          [1, "mat-mdc-form-field-text-prefix"],
          [1, "mat-mdc-form-field-infix"],
          [1, "mat-mdc-form-field-text-suffix"],
          [1, "mat-mdc-form-field-icon-suffix"],
          ["matFormFieldLineRipple", ""],
          [
            1,
            "mat-mdc-form-field-subscript-wrapper",
            "mat-mdc-form-field-bottom-align",
          ],
          ["matFormFieldFloatingLabel", ""],
          [
            "matFormFieldFloatingLabel",
            "",
            3,
            "floating",
            "monitorResize",
            "id",
          ],
          [
            "aria-hidden",
            "true",
            1,
            "mat-mdc-form-field-required-marker",
            "mdc-floating-label--required",
          ],
          [
            "matFormFieldNotchedOutline",
            "",
            3,
            "matFormFieldNotchedOutlineOpen",
          ],
          [3, "ngTemplateOutlet"],
          [1, "mat-mdc-form-field-error-wrapper"],
          [1, "mat-mdc-form-field-hint-wrapper"],
          [1, "mat-mdc-form-field-hint-spacer"],
          [3, "id"],
        ],
        template: function (n, o) {
          if (n & 1) {
            let a = Ct();
            Pe(_n),
              _(0, yn, 1, 1, "ng-template", null, 0, ue),
              f(2, "div", 4, 1),
              S("click", function (g) {
                return _t(a), xt(o._control.onContainerClick(g));
              }),
              _(4, Cn, 1, 0, "div", 5),
              f(5, "div", 6),
              _(6, Fn, 2, 2, "div", 7)(7, En, 3, 0, "div", 8)(
                8,
                Mn,
                3,
                0,
                "div",
                9,
              ),
              f(9, "div", 10),
              _(10, An, 1, 1),
              M(11),
              m(),
              _(12, In, 2, 0, "div", 11)(13, Sn, 2, 0, "div", 12),
              m(),
              _(14, On, 1, 0, "div", 13),
              m(),
              f(15, "div", 14),
              _(16, kn, 2, 1)(17, Nn, 5, 2),
              m();
          }
          if (n & 2) {
            let a;
            c(2),
              b("mdc-text-field--filled", !o._hasOutline())(
                "mdc-text-field--outlined",
                o._hasOutline(),
              )("mdc-text-field--no-label", !o._hasFloatingLabel())(
                "mdc-text-field--disabled",
                o._control.disabled,
              )("mdc-text-field--invalid", o._control.errorState),
              c(2),
              y(4, !o._hasOutline() && !o._control.disabled ? 4 : -1),
              c(2),
              y(6, o._hasOutline() ? 6 : -1),
              c(),
              y(7, o._hasIconPrefix ? 7 : -1),
              c(),
              y(8, o._hasTextPrefix ? 8 : -1),
              c(2),
              y(10, !o._hasOutline() || o._forceDisplayInfixLabel() ? 10 : -1),
              c(2),
              y(12, o._hasTextSuffix ? 12 : -1),
              c(),
              y(13, o._hasIconSuffix ? 13 : -1),
              c(),
              y(14, o._hasOutline() ? -1 : 14),
              c(),
              b(
                "mat-mdc-form-field-subscript-dynamic-size",
                o.subscriptSizing === "dynamic",
              ),
              c(),
              y(
                16,
                (a = o._getDisplayedMessages()) === "error"
                  ? 16
                  : a === "hint"
                    ? 17
                    : -1,
              );
          }
        },
        dependencies: [mi, pi, pe, hi, fi],
        styles: [
          '.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{height:28px;width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}}.mdc-text-field__affix{height:28px;opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px,var(--mdc-shape-small, 4px))*2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px,var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px,var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px,var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px,var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 64px/0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 64px/0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 96px/0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-floating-label{position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after,.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;pointer-events:none}.mdc-notched-outline__trailing{flex-grow:1}.mdc-notched-outline__notch{flex:0 0 auto;width:auto}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-top:1px solid;border-bottom:1px solid}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{max-width:calc(100% - 12px*2)}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::after{border-bottom-width:2px}.mdc-text-field--filled{border-top-left-radius:var(--mdc-filled-text-field-container-shape);border-top-right-radius:var(--mdc-filled-text-field-container-shape);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-filled-text-field-caret-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-filled-text-field-error-caret-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-filled-text-field-input-text-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-filled-text-field-disabled-input-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-label-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-focus-label-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-hover-label-text-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-disabled-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-focus-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-hover-label-text-color)}.mdc-text-field--filled .mdc-floating-label{font-family:var(--mdc-filled-text-field-label-text-font);font-size:var(--mdc-filled-text-field-label-text-size);font-weight:var(--mdc-filled-text-field-label-text-weight);letter-spacing:var(--mdc-filled-text-field-label-text-tracking)}@media all{.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color)}}@media all{.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color)}}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--mdc-filled-text-field-container-color)}.mdc-text-field--filled.mdc-text-field--disabled{background-color:var(--mdc-filled-text-field-disabled-container-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-active-indicator-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-hover-active-indicator-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-focus-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-disabled-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-hover-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-error-focus-active-indicator-color)}.mdc-text-field--filled .mdc-line-ripple::before{border-bottom-width:var(--mdc-filled-text-field-active-indicator-height)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-width:var(--mdc-filled-text-field-focus-active-indicator-height)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-outlined-text-field-caret-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-outlined-text-field-error-caret-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-outlined-text-field-input-text-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-outlined-text-field-disabled-input-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-label-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-focus-label-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-hover-label-text-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-disabled-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-focus-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-hover-label-text-color)}.mdc-text-field--outlined .mdc-floating-label{font-family:var(--mdc-outlined-text-field-label-text-font);font-size:var(--mdc-outlined-text-field-label-text-size);font-weight:var(--mdc-outlined-text-field-label-text-weight);letter-spacing:var(--mdc-outlined-text-field-label-text-tracking)}@media all{.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color)}}@media all{.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color)}}.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(.75*var(--mdc-outlined-text-field-label-text-size))}.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mdc-outlined-text-field-label-text-size)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:var(--mdc-outlined-text-field-container-shape);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-outlined-text-field-container-shape))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px,var(--mdc-outlined-text-field-container-shape))*2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:var(--mdc-outlined-text-field-container-shape);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px,var(--mdc-outlined-text-field-container-shape))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-hover-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-focus-outline-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-disabled-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-hover-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-focus-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__trailing{border-width:var(--mdc-outlined-text-field-outline-width)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:var(--mdc-outlined-text-field-focus-outline-width)}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:normal;pointer-events:all;will-change:auto}.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label{cursor:inherit}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto;will-change:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-form-field-disabled .mdc-text-field__input::placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-text-field-wrapper::before{content:none}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:var(--mat-form-field-container-height);padding-top:var(--mat-form-field-filled-with-label-container-padding-top);padding-bottom:var(--mat-form-field-filled-with-label-container-padding-bottom)}.mdc-text-field--outlined .mat-mdc-form-field-infix,.mdc-text-field--no-label .mat-mdc-form-field-infix{padding-top:var(--mat-form-field-container-vertical-padding);padding-bottom:var(--mat-form-field-container-vertical-padding)}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:calc(var(--mat-form-field-container-height)/2)}.mdc-text-field--filled .mat-mdc-floating-label{display:var(--mat-form-field-filled-label-display, block)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height) / 2) * -1)) scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));transform:var(--mat-mdc-form-field-label-transform)}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:"";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block;color:var(--mat-form-field-error-text-color)}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font);line-height:var(--mat-form-field-subscript-text-line-height);font-size:var(--mat-form-field-subscript-text-size);letter-spacing:var(--mat-form-field-subscript-text-tracking);font-weight:var(--mat-form-field-subscript-text-weight)}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none;background-color:var(--mat-form-field-state-layer-color)}.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-hover-state-layer-opacity)}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-focus-state-layer-opacity)}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option{color:var(--mat-form-field-select-option-text-color)}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled{color:var(--mat-form-field-select-disabled-option-text-color)}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none;color:var(--mat-form-field-enabled-select-arrow-color)}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after{color:var(--mat-form-field-focus-select-arrow-color)}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after{color:var(--mat-form-field-disabled-select-arrow-color)}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}.cdk-high-contrast-active .mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}.mat-mdc-form-field-input-control[type=date],.mat-mdc-form-field-input-control[type=datetime],.mat-mdc-form-field-input-control[type=datetime-local],.mat-mdc-form-field-input-control[type=month],.mat-mdc-form-field-input-control[type=week],.mat-mdc-form-field-input-control[type=time]{line-height:1}.mat-mdc-form-field-input-control::-webkit-datetime-edit{line-height:1;padding:0;margin-bottom:-2px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-container-text-font);line-height:var(--mat-form-field-container-text-line-height);font-size:var(--mat-form-field-container-text-size);letter-spacing:var(--mat-form-field-container-text-tracking);font-weight:var(--mat-form-field-container-text-weight)}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(var(--mat-form-field-outlined-label-text-populated-size)*var(--mat-mdc-form-field-floating-label-scale))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mat-form-field-outlined-label-text-populated-size)}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%;z-index:0}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto;position:relative;z-index:1}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:0 12px;box-sizing:content-box}.mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-leading-icon-color)}.mat-form-field-disabled .mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-disabled-leading-icon-color)}.mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-trailing-icon-color)}.mat-form-field-disabled .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-disabled-trailing-icon-color)}.mat-form-field-invalid .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-trailing-icon-color)}.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-hover-trailing-icon-color)}.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-focus-trailing-icon-color)}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input{transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}@media all{.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}}@media all{.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}}@media all{.mdc-text-field--no-label .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder,.mdc-text-field--focused .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}}@media all{.mdc-text-field--no-label .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__affix{transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea{transition:none}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}}[dir=rtl] .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-notched-outline .mdc-floating-label{max-width:calc(100% + 1px)}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(133.3333333333% + 1px)}',
        ],
        encapsulation: 2,
        data: { animation: [Hn.transitionMessages] },
        changeDetection: 0,
      }));
    let i = e;
    return i;
  })();
var Ci = Vt({ passive: !0 }),
  wi = (() => {
    let e = class e {
      constructor(t, n) {
        (this._platform = t),
          (this._ngZone = n),
          (this._monitoredElements = new Map());
      }
      monitor(t) {
        if (!this._platform.isBrowser) return ct;
        let n = je(t),
          o = this._monitoredElements.get(n);
        if (o) return o.subject;
        let a = new T(),
          d = "cdk-text-field-autofilled",
          g = (V) => {
            V.animationName === "cdk-text-field-autofill-start" &&
            !n.classList.contains(d)
              ? (n.classList.add(d),
                this._ngZone.run(() =>
                  a.next({ target: V.target, isAutofilled: !0 }),
                ))
              : V.animationName === "cdk-text-field-autofill-end" &&
                n.classList.contains(d) &&
                (n.classList.remove(d),
                this._ngZone.run(() =>
                  a.next({ target: V.target, isAutofilled: !1 }),
                ));
          };
        return (
          this._ngZone.runOutsideAngular(() => {
            n.addEventListener("animationstart", g, Ci),
              n.classList.add("cdk-text-field-autofill-monitored");
          }),
          this._monitoredElements.set(n, {
            subject: a,
            unlisten: () => {
              n.removeEventListener("animationstart", g, Ci);
            },
          }),
          a
        );
      }
      stopMonitoring(t) {
        let n = je(t),
          o = this._monitoredElements.get(n);
        o &&
          (o.unlisten(),
          o.subject.complete(),
          n.classList.remove("cdk-text-field-autofill-monitored"),
          n.classList.remove("cdk-text-field-autofilled"),
          this._monitoredElements.delete(n));
      }
      ngOnDestroy() {
        this._monitoredElements.forEach((t, n) => this.stopMonitoring(n));
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(Oe(Y), Oe(w));
    }),
      (e.ɵprov = j({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })();
var Wn = new u("MAT_INPUT_VALUE_ACCESSOR"),
  $n = [
    "button",
    "checkbox",
    "file",
    "hidden",
    "image",
    "radio",
    "range",
    "reset",
    "submit",
  ],
  Yn = 0,
  yo = (() => {
    let e = class e {
      get disabled() {
        return this._disabled;
      }
      set disabled(t) {
        (this._disabled = X(t)),
          this.focused && ((this.focused = !1), this.stateChanges.next());
      }
      get id() {
        return this._id;
      }
      set id(t) {
        this._id = t || this._uid;
      }
      get required() {
        return (
          this._required ??
          this.ngControl?.control?.hasValidator(xe.required) ??
          !1
        );
      }
      set required(t) {
        this._required = X(t);
      }
      get type() {
        return this._type;
      }
      set type(t) {
        (this._type = t || "text"),
          this._validateType(),
          !this._isTextarea &&
            ze().has(this._type) &&
            (this._elementRef.nativeElement.type = this._type);
      }
      get errorStateMatcher() {
        return this._errorStateTracker.matcher;
      }
      set errorStateMatcher(t) {
        this._errorStateTracker.matcher = t;
      }
      get value() {
        return this._inputValueAccessor.value;
      }
      set value(t) {
        t !== this.value &&
          ((this._inputValueAccessor.value = t), this.stateChanges.next());
      }
      get readonly() {
        return this._readonly;
      }
      set readonly(t) {
        this._readonly = X(t);
      }
      get errorState() {
        return this._errorStateTracker.errorState;
      }
      set errorState(t) {
        this._errorStateTracker.errorState = t;
      }
      constructor(t, n, o, a, d, g, V, Ve, Ae, at) {
        (this._elementRef = t),
          (this._platform = n),
          (this.ngControl = o),
          (this._autofillMonitor = Ve),
          (this._formField = at),
          (this._uid = `mat-input-${Yn++}`),
          (this.focused = !1),
          (this.stateChanges = new T()),
          (this.controlType = "mat-input"),
          (this.autofilled = !1),
          (this._disabled = !1),
          (this._type = "text"),
          (this._readonly = !1),
          (this._neverEmptyInputTypes = [
            "date",
            "datetime",
            "datetime-local",
            "month",
            "time",
            "week",
          ].filter((Se) => ze().has(Se))),
          (this._iOSKeyupListener = (Se) => {
            let J = Se.target;
            !J.value &&
              J.selectionStart === 0 &&
              J.selectionEnd === 0 &&
              (J.setSelectionRange(1, 1), J.setSelectionRange(0, 0));
          });
        let Ie = this._elementRef.nativeElement,
          lt = Ie.nodeName.toLowerCase();
        (this._inputValueAccessor = V || Ie),
          (this._previousNativeValue = this.value),
          (this.id = this.id),
          n.IOS &&
            Ae.runOutsideAngular(() => {
              t.nativeElement.addEventListener("keyup", this._iOSKeyupListener);
            }),
          (this._errorStateTracker = new It(g, o, d, a, this.stateChanges)),
          (this._isServer = !this._platform.isBrowser),
          (this._isNativeSelect = lt === "select"),
          (this._isTextarea = lt === "textarea"),
          (this._isInFormField = !!at),
          this._isNativeSelect &&
            (this.controlType = Ie.multiple
              ? "mat-native-select-multiple"
              : "mat-native-select");
      }
      ngAfterViewInit() {
        this._platform.isBrowser &&
          this._autofillMonitor
            .monitor(this._elementRef.nativeElement)
            .subscribe((t) => {
              (this.autofilled = t.isAutofilled), this.stateChanges.next();
            });
      }
      ngOnChanges() {
        this.stateChanges.next();
      }
      ngOnDestroy() {
        this.stateChanges.complete(),
          this._platform.isBrowser &&
            this._autofillMonitor.stopMonitoring(
              this._elementRef.nativeElement,
            ),
          this._platform.IOS &&
            this._elementRef.nativeElement.removeEventListener(
              "keyup",
              this._iOSKeyupListener,
            );
      }
      ngDoCheck() {
        this.ngControl &&
          (this.updateErrorState(),
          this.ngControl.disabled !== null &&
            this.ngControl.disabled !== this.disabled &&
            ((this.disabled = this.ngControl.disabled),
            this.stateChanges.next())),
          this._dirtyCheckNativeValue(),
          this._dirtyCheckPlaceholder();
      }
      focus(t) {
        this._elementRef.nativeElement.focus(t);
      }
      updateErrorState() {
        this._errorStateTracker.updateErrorState();
      }
      _focusChanged(t) {
        t !== this.focused && ((this.focused = t), this.stateChanges.next());
      }
      _onInput() {}
      _dirtyCheckNativeValue() {
        let t = this._elementRef.nativeElement.value;
        this._previousNativeValue !== t &&
          ((this._previousNativeValue = t), this.stateChanges.next());
      }
      _dirtyCheckPlaceholder() {
        let t = this._getPlaceholder();
        if (t !== this._previousPlaceholder) {
          let n = this._elementRef.nativeElement;
          (this._previousPlaceholder = t),
            t
              ? n.setAttribute("placeholder", t)
              : n.removeAttribute("placeholder");
        }
      }
      _getPlaceholder() {
        return this.placeholder || null;
      }
      _validateType() {
        $n.indexOf(this._type) > -1;
      }
      _isNeverEmpty() {
        return this._neverEmptyInputTypes.indexOf(this._type) > -1;
      }
      _isBadInput() {
        let t = this._elementRef.nativeElement.validity;
        return t && t.badInput;
      }
      get empty() {
        return (
          !this._isNeverEmpty() &&
          !this._elementRef.nativeElement.value &&
          !this._isBadInput() &&
          !this.autofilled
        );
      }
      get shouldLabelFloat() {
        if (this._isNativeSelect) {
          let t = this._elementRef.nativeElement,
            n = t.options[0];
          return (
            this.focused ||
            t.multiple ||
            !this.empty ||
            !!(t.selectedIndex > -1 && n && n.label)
          );
        } else return this.focused || !this.empty;
      }
      setDescribedByIds(t) {
        t.length
          ? this._elementRef.nativeElement.setAttribute(
              "aria-describedby",
              t.join(" "),
            )
          : this._elementRef.nativeElement.removeAttribute("aria-describedby");
      }
      onContainerClick() {
        this.focused || this.focus();
      }
      _isInlineSelect() {
        let t = this._elementRef.nativeElement;
        return this._isNativeSelect && (t.multiple || t.size > 1);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(
        l(v),
        l(Y),
        l(U, 10),
        l(tt, 8),
        l(it, 8),
        l(St),
        l(Wn, 10),
        l(wi),
        l(w),
        l(ot, 8),
      );
    }),
      (e.ɵdir = s({
        type: e,
        selectors: [
          ["input", "matInput", ""],
          ["textarea", "matInput", ""],
          ["select", "matNativeControl", ""],
          ["input", "matNativeControl", ""],
          ["textarea", "matNativeControl", ""],
        ],
        hostAttrs: [1, "mat-mdc-input-element"],
        hostVars: 18,
        hostBindings: function (n, o) {
          n & 1 &&
            S("focus", function () {
              return o._focusChanged(!0);
            })("blur", function () {
              return o._focusChanged(!1);
            })("input", function () {
              return o._onInput();
            }),
            n & 2 &&
              (ie("id", o.id)("disabled", o.disabled)("required", o.required),
              C("name", o.name || null)(
                "readonly",
                (o.readonly && !o._isNativeSelect) || null,
              )("aria-invalid", o.empty && o.required ? null : o.errorState)(
                "aria-required",
                o.required,
              )("id", o.id),
              b("mat-input-server", o._isServer)(
                "mat-mdc-form-field-textarea-control",
                o._isInFormField && o._isTextarea,
              )("mat-mdc-form-field-input-control", o._isInFormField)(
                "mdc-text-field__input",
                o._isInFormField,
              )("mat-mdc-native-select-inline", o._isInlineSelect()));
        },
        inputs: {
          disabled: "disabled",
          id: "id",
          placeholder: "placeholder",
          name: "name",
          required: "required",
          type: "type",
          errorStateMatcher: "errorStateMatcher",
          userAriaDescribedBy: [
            x.None,
            "aria-describedby",
            "userAriaDescribedBy",
          ],
          value: "value",
          readonly: "readonly",
        },
        exportAs: ["matInput"],
        standalone: !0,
        features: [F([{ provide: rt, useExisting: e }]), W],
      }));
    let i = e;
    return i;
  })();
var Xn = ["determinateSpinner"];
function Qn(i, e) {
  if ((i & 1 && (ke(), f(0, "svg", 11), I(1, "circle", 12), m()), i & 2)) {
    let r = E();
    C("viewBox", r._viewBox()),
      c(),
      fe("stroke-dasharray", r._strokeCircumference(), "px")(
        "stroke-dashoffset",
        r._strokeCircumference() / 2,
        "px",
      )("stroke-width", r._circleStrokeWidth(), "%"),
      C("r", r._circleRadius());
  }
}
var Zn = new u("mat-progress-spinner-default-options", {
  providedIn: "root",
  factory: Kn,
});
function Kn() {
  return { diameter: Di };
}
var Di = 100,
  Jn = 10,
  ko = (() => {
    let e = class e {
      get color() {
        return this._color || this._defaultColor;
      }
      set color(t) {
        this._color = t;
      }
      constructor(t, n, o) {
        (this._elementRef = t),
          (this._defaultColor = "primary"),
          (this._value = 0),
          (this._diameter = Di),
          (this._noopAnimations =
            n === "NoopAnimations" && !!o && !o._forceAnimations),
          (this.mode =
            t.nativeElement.nodeName.toLowerCase() === "mat-spinner"
              ? "indeterminate"
              : "determinate"),
          o &&
            (o.color && (this.color = this._defaultColor = o.color),
            o.diameter && (this.diameter = o.diameter),
            o.strokeWidth && (this.strokeWidth = o.strokeWidth));
      }
      get value() {
        return this.mode === "determinate" ? this._value : 0;
      }
      set value(t) {
        this._value = Math.max(0, Math.min(100, t || 0));
      }
      get diameter() {
        return this._diameter;
      }
      set diameter(t) {
        this._diameter = t || 0;
      }
      get strokeWidth() {
        return this._strokeWidth ?? this.diameter / 10;
      }
      set strokeWidth(t) {
        this._strokeWidth = t || 0;
      }
      _circleRadius() {
        return (this.diameter - Jn) / 2;
      }
      _viewBox() {
        let t = this._circleRadius() * 2 + this.strokeWidth;
        return `0 0 ${t} ${t}`;
      }
      _strokeCircumference() {
        return 2 * Math.PI * this._circleRadius();
      }
      _strokeDashOffset() {
        return this.mode === "determinate"
          ? (this._strokeCircumference() * (100 - this._value)) / 100
          : null;
      }
      _circleStrokeWidth() {
        return (this.strokeWidth / this.diameter) * 100;
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(l(v), l(ce, 8), l(Zn));
    }),
      (e.ɵcmp = ee({
        type: e,
        selectors: [["mat-progress-spinner"], ["mat-spinner"]],
        viewQuery: function (n, o) {
          if ((n & 1 && O(Xn, 5), n & 2)) {
            let a;
            h((a = p())) && (o._determinateCircle = a.first);
          }
        },
        hostAttrs: [
          "role",
          "progressbar",
          "tabindex",
          "-1",
          1,
          "mat-mdc-progress-spinner",
          "mdc-circular-progress",
        ],
        hostVars: 18,
        hostBindings: function (n, o) {
          n & 2 &&
            (C("aria-valuemin", 0)("aria-valuemax", 100)(
              "aria-valuenow",
              o.mode === "determinate" ? o.value : null,
            )("mode", o.mode),
            yt("mat-" + o.color),
            fe("width", o.diameter, "px")("height", o.diameter, "px")(
              "--mdc-circular-progress-size",
              o.diameter + "px",
            )(
              "--mdc-circular-progress-active-indicator-width",
              o.diameter + "px",
            ),
            b("_mat-animation-noopable", o._noopAnimations)(
              "mdc-circular-progress--indeterminate",
              o.mode === "indeterminate",
            ));
        },
        inputs: {
          color: "color",
          mode: "mode",
          value: [x.HasDecoratorInputTransform, "value", "value", he],
          diameter: [x.HasDecoratorInputTransform, "diameter", "diameter", he],
          strokeWidth: [
            x.HasDecoratorInputTransform,
            "strokeWidth",
            "strokeWidth",
            he,
          ],
        },
        exportAs: ["matProgressSpinner"],
        standalone: !0,
        features: [Ne, re],
        decls: 14,
        vars: 11,
        consts: [
          ["circle", ""],
          ["determinateSpinner", ""],
          [
            "aria-hidden",
            "true",
            1,
            "mdc-circular-progress__determinate-container",
          ],
          [
            "xmlns",
            "http://www.w3.org/2000/svg",
            "focusable",
            "false",
            1,
            "mdc-circular-progress__determinate-circle-graphic",
          ],
          [
            "cx",
            "50%",
            "cy",
            "50%",
            1,
            "mdc-circular-progress__determinate-circle",
          ],
          [
            "aria-hidden",
            "true",
            1,
            "mdc-circular-progress__indeterminate-container",
          ],
          [1, "mdc-circular-progress__spinner-layer"],
          [
            1,
            "mdc-circular-progress__circle-clipper",
            "mdc-circular-progress__circle-left",
          ],
          [3, "ngTemplateOutlet"],
          [1, "mdc-circular-progress__gap-patch"],
          [
            1,
            "mdc-circular-progress__circle-clipper",
            "mdc-circular-progress__circle-right",
          ],
          [
            "xmlns",
            "http://www.w3.org/2000/svg",
            "focusable",
            "false",
            1,
            "mdc-circular-progress__indeterminate-circle-graphic",
          ],
          ["cx", "50%", "cy", "50%"],
        ],
        template: function (n, o) {
          if (
            (n & 1 &&
              (_(0, Qn, 2, 8, "ng-template", null, 0, ue),
              f(2, "div", 2, 1),
              ke(),
              f(4, "svg", 3),
              I(5, "circle", 4),
              m()(),
              vt(),
              f(6, "div", 5)(7, "div", 6)(8, "div", 7),
              me(9, 8),
              m(),
              f(10, "div", 9),
              me(11, 8),
              m(),
              f(12, "div", 10),
              me(13, 8),
              m()()()),
            n & 2)
          ) {
            let a = ne(1);
            c(4),
              C("viewBox", o._viewBox()),
              c(),
              fe("stroke-dasharray", o._strokeCircumference(), "px")(
                "stroke-dashoffset",
                o._strokeDashOffset(),
                "px",
              )("stroke-width", o._circleStrokeWidth(), "%"),
              C("r", o._circleRadius()),
              c(4),
              D("ngTemplateOutlet", a),
              c(2),
              D("ngTemplateOutlet", a),
              c(2),
              D("ngTemplateOutlet", a);
          }
        },
        dependencies: [pe],
        styles: [
          "@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner .mdc-circular-progress{width:var(--mdc-circular-progress-size) !important;height:var(--mdc-circular-progress-size) !important}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = e;
    return i;
  })();
export {
  qt as a,
  xe as b,
  xr as c,
  vr as d,
  yr as e,
  Ji as f,
  it as g,
  nn as h,
  an as i,
  Cr as j,
  wr as k,
  ci as l,
  Qr as m,
  Zr as n,
  yo as o,
  ko as p,
};
