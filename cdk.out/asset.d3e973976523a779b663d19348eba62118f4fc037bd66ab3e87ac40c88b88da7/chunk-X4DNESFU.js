import { a as ve, b as st, d as mt } from "./chunk-3DNVKCOB.js";
import {
  a as _t,
  b as ye,
  c as vt,
  d as gt,
  e as xt,
  g as bt,
  h as yt,
  i as Ct,
  j as St,
  k as It,
  m as Dt,
  n as Et,
  o as Tt,
  p as wt,
} from "./chunk-PORSZDRQ.js";
import {
  $a as ue,
  Ac as nt,
  Ba as p,
  Ca as u,
  Cb as Je,
  Da as A,
  Fc as ot,
  Gb as re,
  Gc as ge,
  Hb as S,
  I as He,
  Ib as Ie,
  Ic as xe,
  Ja as Ge,
  Jb as ne,
  Jc as at,
  Kb as z,
  Lb as oe,
  Lc as lt,
  Mb as ae,
  Na as V,
  Nb as Xe,
  Nc as pt,
  Oa as Se,
  Q as H,
  Qc as Te,
  R as Qe,
  Rc as we,
  S as N,
  Sa as h,
  Sc as Me,
  Ta as X,
  Tb as se,
  Ua as m,
  Uc as j,
  V as ce,
  Vb as K,
  Vc as B,
  W as de,
  Wa as M,
  Wb as et,
  Wc as Fe,
  Xa as Ue,
  Xb as De,
  Xc as ke,
  Ya as Ke,
  Yc as Oe,
  Z as qe,
  Za as v,
  _a as We,
  a as Ve,
  aa as F,
  ab as $,
  b as Le,
  ba as _,
  bb as G,
  ca as C,
  cb as a,
  db as s,
  ea as I,
  eb as D,
  ec as Ee,
  fb as Ye,
  fc as fe,
  g as je,
  gb as Ze,
  gc as _e,
  hb as L,
  ia as $e,
  ib as E,
  id as ct,
  ja as b,
  jb as U,
  ka as y,
  l as Z,
  lb as x,
  md as dt,
  na as me,
  nb as d,
  nd as be,
  ob as ee,
  od as ut,
  pb as te,
  pc as tt,
  pd as ht,
  q as Be,
  rb as O,
  sa as R,
  sb as he,
  sc as it,
  ta as k,
  tb as T,
  tc as rt,
  u as pe,
  ua as Q,
  ub as w,
  ud as ft,
  va as q,
  wa as J,
  xb as ie,
  yb as c,
  zb as g,
} from "./chunk-ILZMJO4D.js";
var Jt = ["*"];
function Xt(r, t) {
  r & 1 && te(0);
}
var Pe = (() => {
    let t = class t {
      constructor(e) {
        this._elementRef = e;
      }
      focus() {
        this._elementRef.nativeElement.focus();
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(Q));
    }),
      (t.ɵdir = I({
        type: t,
        selectors: [["", "cdkStepHeader", ""]],
        hostAttrs: ["role", "tab"],
        standalone: !0,
      }));
    let r = t;
    return r;
  })(),
  Re = (() => {
    let t = class t {
      constructor(e) {
        this.template = e;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(A));
    }),
      (t.ɵdir = I({
        type: t,
        selectors: [["", "cdkStepLabel", ""]],
        standalone: !0,
      }));
    let r = t;
    return r;
  })(),
  ei = 0;
var P = { NUMBER: "number", EDIT: "edit", DONE: "done", ERROR: "error" },
  le = new qe("STEPPER_GLOBAL_OPTIONS"),
  Ce = (() => {
    let t = class t {
      get completed() {
        return this._completedOverride == null
          ? this._getDefaultCompleted()
          : this._completedOverride;
      }
      set completed(e) {
        this._completedOverride = e;
      }
      _getDefaultCompleted() {
        return this.stepControl
          ? this.stepControl.valid && this.interacted
          : this.interacted;
      }
      get hasError() {
        return this._customError == null
          ? this._getDefaultError()
          : this._customError;
      }
      set hasError(e) {
        this._customError = e;
      }
      _getDefaultError() {
        return this.stepControl && this.stepControl.invalid && this.interacted;
      }
      constructor(e, i) {
        (this._stepper = e),
          (this.interacted = !1),
          (this.interactedStream = new q()),
          (this.editable = !0),
          (this.optional = !1),
          (this._completedOverride = null),
          (this._customError = null),
          (this._stepperOptions = i || {}),
          (this._displayDefaultIndicatorType =
            this._stepperOptions.displayDefaultIndicatorType !== !1);
      }
      select() {
        this._stepper.selected = this;
      }
      reset() {
        (this.interacted = !1),
          this._completedOverride != null && (this._completedOverride = !1),
          this._customError != null && (this._customError = !1),
          this.stepControl && this.stepControl.reset();
      }
      ngOnChanges() {
        this._stepper._stateChanged();
      }
      _markAsInteracted() {
        this.interacted ||
          ((this.interacted = !0), this.interactedStream.emit(this));
      }
      _showError() {
        return this._stepperOptions.showError ?? this._customError != null;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(ce(() => Y)), u(le, 8));
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [["cdk-step"]],
        contentQueries: function (i, n, l) {
          if ((i & 1 && O(l, Re, 5), i & 2)) {
            let f;
            T((f = w())) && (n.stepLabel = f.first);
          }
        },
        viewQuery: function (i, n) {
          if ((i & 1 && he(A, 7), i & 2)) {
            let l;
            T((l = w())) && (n.content = l.first);
          }
        },
        inputs: {
          stepControl: "stepControl",
          label: "label",
          errorMessage: "errorMessage",
          ariaLabel: [_.None, "aria-label", "ariaLabel"],
          ariaLabelledby: [_.None, "aria-labelledby", "ariaLabelledby"],
          state: "state",
          editable: [_.HasDecoratorInputTransform, "editable", "editable", K],
          optional: [_.HasDecoratorInputTransform, "optional", "optional", K],
          completed: [
            _.HasDecoratorInputTransform,
            "completed",
            "completed",
            K,
          ],
          hasError: [_.HasDecoratorInputTransform, "hasError", "hasError", K],
        },
        outputs: { interactedStream: "interacted" },
        exportAs: ["cdkStep"],
        standalone: !0,
        features: [Se, $e, S],
        ngContentSelectors: Jt,
        decls: 1,
        vars: 0,
        template: function (i, n) {
          i & 1 && (ee(), h(0, Xt, 1, 0, "ng-template"));
        },
        encapsulation: 2,
        changeDetection: 0,
      }));
    let r = t;
    return r;
  })(),
  Y = (() => {
    let t = class t {
      get selectedIndex() {
        return this._selectedIndex;
      }
      set selectedIndex(e) {
        this.steps && this._steps
          ? (this._isValidIndex(e),
            this.selected?._markAsInteracted(),
            this._selectedIndex !== e &&
              !this._anyControlsInvalidOrPending(e) &&
              (e >= this._selectedIndex || this.steps.toArray()[e].editable) &&
              this._updateSelectedItemIndex(e))
          : (this._selectedIndex = e);
      }
      get selected() {
        return this.steps ? this.steps.toArray()[this.selectedIndex] : void 0;
      }
      set selected(e) {
        this.selectedIndex =
          e && this.steps ? this.steps.toArray().indexOf(e) : -1;
      }
      get orientation() {
        return this._orientation;
      }
      set orientation(e) {
        (this._orientation = e),
          this._keyManager &&
            this._keyManager.withVerticalOrientation(e === "vertical");
      }
      constructor(e, i, n) {
        (this._dir = e),
          (this._changeDetectorRef = i),
          (this._elementRef = n),
          (this._destroyed = new Z()),
          (this.steps = new J()),
          (this._sortedHeaders = new J()),
          (this.linear = !1),
          (this._selectedIndex = 0),
          (this.selectionChange = new q()),
          (this.selectedIndexChange = new q()),
          (this._orientation = "horizontal"),
          (this._groupId = ei++);
      }
      ngAfterContentInit() {
        this._steps.changes
          .pipe(H(this._steps), N(this._destroyed))
          .subscribe((e) => {
            this.steps.reset(e.filter((i) => i._stepper === this)),
              this.steps.notifyOnChanges();
          });
      }
      ngAfterViewInit() {
        this._stepHeader.changes
          .pipe(H(this._stepHeader), N(this._destroyed))
          .subscribe((e) => {
            this._sortedHeaders.reset(
              e
                .toArray()
                .sort((i, n) =>
                  i._elementRef.nativeElement.compareDocumentPosition(
                    n._elementRef.nativeElement,
                  ) & Node.DOCUMENT_POSITION_FOLLOWING
                    ? -1
                    : 1,
                ),
            ),
              this._sortedHeaders.notifyOnChanges();
          }),
          (this._keyManager = new nt(this._sortedHeaders)
            .withWrap()
            .withHomeAndEnd()
            .withVerticalOrientation(this._orientation === "vertical")),
          (this._dir ? this._dir.change : Be())
            .pipe(H(this._layoutDirection()), N(this._destroyed))
            .subscribe((e) => this._keyManager.withHorizontalOrientation(e)),
          this._keyManager.updateActiveItem(this._selectedIndex),
          this.steps.changes.subscribe(() => {
            this.selected ||
              (this._selectedIndex = Math.max(this._selectedIndex - 1, 0));
          }),
          this._isValidIndex(this._selectedIndex) || (this._selectedIndex = 0);
      }
      ngOnDestroy() {
        this._keyManager?.destroy(),
          this.steps.destroy(),
          this._sortedHeaders.destroy(),
          this._destroyed.next(),
          this._destroyed.complete();
      }
      next() {
        this.selectedIndex = Math.min(
          this._selectedIndex + 1,
          this.steps.length - 1,
        );
      }
      previous() {
        this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
      }
      reset() {
        this._updateSelectedItemIndex(0),
          this.steps.forEach((e) => e.reset()),
          this._stateChanged();
      }
      _getStepLabelId(e) {
        return `cdk-step-label-${this._groupId}-${e}`;
      }
      _getStepContentId(e) {
        return `cdk-step-content-${this._groupId}-${e}`;
      }
      _stateChanged() {
        this._changeDetectorRef.markForCheck();
      }
      _getAnimationDirection(e) {
        let i = e - this._selectedIndex;
        return i < 0
          ? this._layoutDirection() === "rtl"
            ? "next"
            : "previous"
          : i > 0
            ? this._layoutDirection() === "rtl"
              ? "previous"
              : "next"
            : "current";
      }
      _getIndicatorType(e, i = P.NUMBER) {
        let n = this.steps.toArray()[e],
          l = this._isCurrentStep(e);
        return n._displayDefaultIndicatorType
          ? this._getDefaultIndicatorLogic(n, l)
          : this._getGuidelineLogic(n, l, i);
      }
      _getDefaultIndicatorLogic(e, i) {
        return e._showError() && e.hasError && !i
          ? P.ERROR
          : !e.completed || i
            ? P.NUMBER
            : e.editable
              ? P.EDIT
              : P.DONE;
      }
      _getGuidelineLogic(e, i, n = P.NUMBER) {
        return e._showError() && e.hasError && !i
          ? P.ERROR
          : e.completed && !i
            ? P.DONE
            : e.completed && i
              ? n
              : e.editable && i
                ? P.EDIT
                : n;
      }
      _isCurrentStep(e) {
        return this._selectedIndex === e;
      }
      _getFocusIndex() {
        return this._keyManager
          ? this._keyManager.activeItemIndex
          : this._selectedIndex;
      }
      _updateSelectedItemIndex(e) {
        let i = this.steps.toArray();
        this.selectionChange.emit({
          selectedIndex: e,
          previouslySelectedIndex: this._selectedIndex,
          selectedStep: i[e],
          previouslySelectedStep: i[this._selectedIndex],
        }),
          this._containsFocus()
            ? this._keyManager.setActiveItem(e)
            : this._keyManager.updateActiveItem(e),
          (this._selectedIndex = e),
          this.selectedIndexChange.emit(this._selectedIndex),
          this._stateChanged();
      }
      _onKeydown(e) {
        let i = rt(e),
          n = e.keyCode,
          l = this._keyManager;
        l.activeItemIndex != null && !i && (n === 32 || n === 13)
          ? ((this.selectedIndex = l.activeItemIndex), e.preventDefault())
          : l.setFocusOrigin("keyboard").onKeydown(e);
      }
      _anyControlsInvalidOrPending(e) {
        return this.linear && e >= 0
          ? this.steps
              .toArray()
              .slice(0, e)
              .some((i) => {
                let n = i.stepControl;
                return (
                  (n
                    ? n.invalid || n.pending || !i.interacted
                    : !i.completed) &&
                  !i.optional &&
                  !i._completedOverride
                );
              })
          : !1;
      }
      _layoutDirection() {
        return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
      }
      _containsFocus() {
        let e = this._elementRef.nativeElement,
          i = it();
        return e === i || e.contains(i);
      }
      _isValidIndex(e) {
        return e > -1 && (!this.steps || e < this.steps.length);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(ge, 8), u(se), u(Q));
    }),
      (t.ɵdir = I({
        type: t,
        selectors: [["", "cdkStepper", ""]],
        contentQueries: function (i, n, l) {
          if ((i & 1 && (O(l, Ce, 5), O(l, Pe, 5)), i & 2)) {
            let f;
            T((f = w())) && (n._steps = f), T((f = w())) && (n._stepHeader = f);
          }
        },
        inputs: {
          linear: [_.HasDecoratorInputTransform, "linear", "linear", K],
          selectedIndex: [
            _.HasDecoratorInputTransform,
            "selectedIndex",
            "selectedIndex",
            et,
          ],
          selected: "selected",
          orientation: "orientation",
        },
        outputs: {
          selectionChange: "selectionChange",
          selectedIndexChange: "selectedIndexChange",
        },
        exportAs: ["cdkStepper"],
        standalone: !0,
        features: [Se],
      }));
    let r = t;
    return r;
  })(),
  Mt = (() => {
    let t = class t {
      constructor(e) {
        (this._stepper = e), (this.type = "submit");
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(Y));
    }),
      (t.ɵdir = I({
        type: t,
        selectors: [["button", "cdkStepperNext", ""]],
        hostVars: 1,
        hostBindings: function (i, n) {
          i & 1 &&
            x("click", function () {
              return n._stepper.next();
            }),
            i & 2 && U("type", n.type);
        },
        inputs: { type: "type" },
        standalone: !0,
      }));
    let r = t;
    return r;
  })(),
  Ft = (() => {
    let t = class t {
      constructor(e) {
        (this._stepper = e), (this.type = "button");
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(Y));
    }),
      (t.ɵdir = I({
        type: t,
        selectors: [["button", "cdkStepperPrevious", ""]],
        hostVars: 1,
        hostBindings: function (i, n) {
          i & 1 &&
            x("click", function () {
              return n._stepper.previous();
            }),
            i & 2 && U("type", n.type);
        },
        inputs: { type: "type" },
        standalone: !0,
      }));
    let r = t;
    return r;
  })();
var kt = (() => {
  let t = class t {
    constructor() {
      (this.cartService = F(ve)), (this.productsService = F(dt));
    }
    getProductsForCheckout() {
      let e = this.cartService.cart();
      return this.productsService.getProductsForCheckout(Object.keys(e)).pipe(
        pe((i) =>
          i.map((n) =>
            Le(Ve({}, n), {
              orderedCount: e[n.id],
              totalPrice: +(e[n.id] * n.price).toFixed(2),
            }),
          ),
        ),
      );
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵprov = de({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let r = t;
  return r;
})();
function ti(r, t) {
  r & 1 && (a(0, "mat-error"), c(1, " First name is required! "), s());
}
function ii(r, t) {
  r & 1 && (a(0, "mat-error"), c(1, " Last name is required! "), s());
}
function ri(r, t) {
  r & 1 && (a(0, "mat-error"), c(1, " Shipping address is required! "), s());
}
var Ot = (() => {
  let t = class t {
    constructor() {
      (this.shippingInfo = k.required()), (this.nextStep = R());
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵcmp = C({
      type: t,
      selectors: [["app-cart-shipping-form"]],
      inputs: { shippingInfo: [_.SignalBased, "shippingInfo"] },
      outputs: { nextStep: "nextStep" },
      standalone: !0,
      features: [S],
      decls: 18,
      vars: 4,
      consts: [
        [3, "ngSubmit", "formGroup"],
        [1, "row"],
        [1, "col", "col-md-6"],
        [1, "w-100"],
        [
          "formControlName",
          "firstName",
          "name",
          "firstName",
          "placeholder",
          "First name",
          "type",
          "text",
          "matInput",
          "",
          "required",
          "",
        ],
        [
          "formControlName",
          "lastName",
          "name",
          "lastName",
          "placeholder",
          "Last name",
          "type",
          "text",
          "matInput",
          "",
          "required",
          "",
        ],
        [1, "col-12"],
        [
          "formControlName",
          "address",
          "name",
          "address",
          "placeholder",
          "Shipping address",
          "type",
          "text",
          "matInput",
          "",
          "required",
          "",
        ],
        [
          "formControlName",
          "comment",
          "name",
          "comment",
          "placeholder",
          "Comment",
          "type",
          "text",
          "matInput",
          "",
        ],
        [1, "d-none"],
      ],
      template: function (i, n) {
        i & 1 &&
          (a(0, "form", 0),
          x("ngSubmit", function () {
            return n.nextStep.emit();
          }),
          a(1, "div", 1)(2, "div", 2)(3, "mat-form-field", 3),
          D(4, "input", 4),
          h(5, ti, 2, 0, "mat-error"),
          s()(),
          a(6, "div", 2)(7, "mat-form-field", 3),
          D(8, "input", 5),
          h(9, ii, 2, 0, "mat-error"),
          s()(),
          a(10, "div", 6)(11, "mat-form-field", 3),
          D(12, "input", 7),
          h(13, ri, 2, 0, "mat-error"),
          s()(),
          a(14, "div", 6)(15, "mat-form-field", 3),
          D(16, "input", 8),
          s()()(),
          D(17, "button", 9),
          s()),
          i & 2 &&
            (m("formGroup", n.shippingInfo()),
            p(5),
            v(5, n.shippingInfo().getError("required", "firstName") ? 5 : -1),
            p(4),
            v(9, n.shippingInfo().getError("required", "lastName") ? 9 : -1),
            p(4),
            v(13, n.shippingInfo().getError("required", "address") ? 13 : -1));
      },
      dependencies: [It, xt, _t, vt, gt, Ct, bt, yt, Et, Tt, Dt],
    }));
  let r = t;
  return r;
})();
function ni(r, t) {
  if (r & 1) {
    let o = E();
    a(0, "div", 2)(1, "app-cart-count-controls", 7),
      x("decrement", function () {
        b(o);
        let i = d();
        return y(i.remove.emit());
      })("increment", function () {
        b(o);
        let i = d();
        return y(i.add.emit());
      }),
      s()();
  }
  if (r & 2) {
    let o = d();
    p(),
      m("productName", o.product().title)("count", o.product().orderedCount)(
        "available",
        o.product().count,
      );
  }
}
var Pt = (() => {
  let t = class t {
    constructor() {
      (this.product = k.required()),
        (this.hideControls = k(!1)),
        (this.add = R()),
        (this.remove = R());
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵcmp = C({
      type: t,
      selectors: [["app-product-item-checkout"]],
      inputs: {
        product: [_.SignalBased, "product"],
        hideControls: [_.SignalBased, "hideControls"],
      },
      outputs: { add: "add", remove: "remove" },
      standalone: !0,
      features: [S],
      decls: 14,
      vars: 20,
      consts: [
        [1, "mb-3"],
        [1, "row", "align-items-center"],
        [1, "col-12", "col-md-3", "order-3", "order-md-0", "text-center"],
        [1, "col-12", "col-md-6"],
        [1, "font-weight-bold", "mb-1"],
        [1, "text-muted"],
        [1, "col-12", "col-md-3"],
        [3, "decrement", "increment", "productName", "count", "available"],
      ],
      template: function (i, n) {
        i & 1 &&
          (a(0, "mat-card", 0)(1, "div", 1),
          h(2, ni, 2, 3, "div", 2),
          a(3, "div", 3)(4, "h3", 4),
          c(5),
          s(),
          a(6, "p", 5),
          c(7),
          s()(),
          a(8, "div", 6),
          c(9),
          z(10, "number"),
          z(11, "currency"),
          z(12, "number"),
          z(13, "currency"),
          s()()()),
          i & 2 &&
            (p(2),
            v(2, n.hideControls() ? -1 : 2),
            p(),
            M("col-md-6", !n.hideControls())("col-md-9", n.hideControls()),
            p(2),
            g(n.product().title),
            p(2),
            g(n.product().description),
            p(2),
            Je(
              " ",
              oe(11, 13, ae(10, 10, n.product().price, "1.2-2")),
              " x ",
              n.product().orderedCount,
              " = ",
              oe(13, 18, ae(12, 15, n.product().totalPrice, "1.2-2")),
              " ",
            ));
      },
      dependencies: [be, mt, fe, _e],
      changeDetection: 0,
    }));
  let r = t;
  return r;
})();
function oi(r, t) {
  if (r & 1) {
    let o = E();
    a(0, "app-product-item-checkout", 4),
      x("add", function () {
        let i = b(o).$implicit,
          n = d();
        return y(n.add.emit(i.id));
      })("remove", function () {
        let i = b(o).$implicit,
          n = d();
        return y(n.remove.emit(i.id));
      }),
      s();
  }
  if (r & 2) {
    let o = t.$implicit,
      e = d();
    m("product", o)("hideControls", !e.showControls);
  }
}
var Rt = (() => {
  let t = class t {
    constructor() {
      (this.products = k.required()),
        (this.showControls = k.required()),
        (this.totalPrice = k.required()),
        (this.add = R()),
        (this.remove = R());
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵcmp = C({
      type: t,
      selectors: [["app-order-summary"]],
      inputs: {
        products: [_.SignalBased, "products"],
        showControls: [_.SignalBased, "showControls"],
        totalPrice: [_.SignalBased, "totalPrice"],
      },
      outputs: { add: "add", remove: "remove" },
      standalone: !0,
      features: [S],
      decls: 17,
      vars: 6,
      consts: [
        [1, "row"],
        [1, "col", "flex-grow-1"],
        [1, "col", "flex-grow-0"],
        [1, "col", "flex-grow-0", 2, "font-size", "18px"],
        [3, "add", "remove", "product", "hideControls"],
      ],
      template: function (i, n) {
        i & 1 &&
          (a(0, "h2"),
          c(1, "Order summary"),
          s(),
          Ye(2),
          $(3, oi, 1, 2, "app-product-item-checkout", null, We),
          Ze(),
          a(5, "div", 0)(6, "h3", 1),
          c(7, "Shipping"),
          s(),
          a(8, "span", 2),
          c(9, "Free"),
          s()(),
          a(10, "div", 0)(11, "h3", 1),
          c(12, "Total"),
          s(),
          a(13, "b", 3),
          c(14),
          z(15, "number"),
          z(16, "currency"),
          s()()),
          i & 2 &&
            (p(3),
            G(n.products()),
            p(11),
            g(oe(16, 4, ae(15, 1, n.totalPrice(), "1.2-2"))));
      },
      dependencies: [Pt, fe, _e],
      changeDetection: 0,
    }));
  let r = t;
  return r;
})();
function ai(r, t) {
  if ((r & 1 && L(0, 6), r & 2)) {
    let o = d();
    m("ngTemplateOutlet", o.iconOverrides[o.state])(
      "ngTemplateOutletContext",
      o._getIconContext(),
    );
  }
}
function si(r, t) {
  if ((r & 1 && (a(0, "span", 7), c(1), s()), r & 2)) {
    let o = d(2);
    p(), g(o._getDefaultTextForState(o.state));
  }
}
function li(r, t) {
  if ((r & 1 && (a(0, "span", 8), c(1), s()), r & 2)) {
    let o = d(3);
    p(), g(o._intl.completedLabel);
  }
}
function pi(r, t) {
  if ((r & 1 && (a(0, "span", 8), c(1), s()), r & 2)) {
    let o = d(3);
    p(), g(o._intl.editableLabel);
  }
}
function ci(r, t) {
  if (
    (r & 1 &&
      (h(0, li, 2, 1, "span", 8)(1, pi, 2, 1), a(2, "mat-icon", 7), c(3), s()),
    r & 2)
  ) {
    let o = d(2);
    v(0, o.state === "done" ? 0 : o.state === "edit" ? 1 : -1),
      p(3),
      g(o._getDefaultTextForState(o.state));
  }
}
function di(r, t) {
  if ((r & 1 && h(0, si, 2, 1)(1, ci, 4, 2), r & 2)) {
    let o,
      e = d();
    v(0, (o = e.state) === "number" ? 0 : 1);
  }
}
function mi(r, t) {
  r & 1 && (a(0, "div", 3), L(1, 9), s()),
    r & 2 && (p(), m("ngTemplateOutlet", t.template));
}
function ui(r, t) {
  if ((r & 1 && (a(0, "div", 3), c(1), s()), r & 2)) {
    let o = d();
    p(), g(o.label);
  }
}
function hi(r, t) {
  if ((r & 1 && (a(0, "div", 4), c(1), s()), r & 2)) {
    let o = d();
    p(), g(o._intl.optionalLabel);
  }
}
function fi(r, t) {
  if ((r & 1 && (a(0, "div", 5), c(1), s()), r & 2)) {
    let o = d();
    p(), g(o.errorMessage);
  }
}
var At = ["*"];
function _i(r, t) {}
function vi(r, t) {
  if ((r & 1 && (te(0), h(1, _i, 0, 0, "ng-template", 0)), r & 2)) {
    let o = d();
    p(), m("cdkPortalOutlet", o._portal);
  }
}
var Vt = (r, t) => ({ step: r, i: t }),
  Lt = (r) => ({ animationDuration: r }),
  jt = (r, t) => ({ value: r, params: t });
function gi(r, t) {
  r & 1 && te(0);
}
function xi(r, t) {
  r & 1 && D(0, "div", 6);
}
function bi(r, t) {
  if ((r & 1 && (L(0, 5), h(1, xi, 1, 0, "div", 6)), r & 2)) {
    let o = t.$implicit,
      e = t.$index,
      i = t.$index,
      n = t.$count;
    d(2);
    let l = ie(4);
    m("ngTemplateOutlet", l)("ngTemplateOutletContext", ne(3, Vt, o, e)),
      p(),
      v(1, i !== n - 1 ? 1 : -1);
  }
}
function yi(r, t) {
  if (r & 1) {
    let o = E();
    a(0, "div", 7),
      x("@horizontalStepTransition.done", function (i) {
        b(o);
        let n = d(2);
        return y(n._animationDone.next(i));
      }),
      L(1, 8),
      s();
  }
  if (r & 2) {
    let o = t.$implicit,
      e = t.$index,
      i = d(2);
    M("mat-horizontal-stepper-content-inactive", i.selectedIndex !== e),
      m(
        "@horizontalStepTransition",
        ne(
          8,
          jt,
          i._getAnimationDirection(e),
          Ie(6, Lt, i._getAnimationDuration()),
        ),
      )("id", i._getStepContentId(e)),
      X("aria-labelledby", i._getStepLabelId(e)),
      p(),
      m("ngTemplateOutlet", o.content);
  }
}
function Ci(r, t) {
  if (
    (r & 1 &&
      (a(0, "div", 1)(1, "div", 2),
      $(2, bi, 2, 6, null, null, ue),
      s(),
      a(4, "div", 3),
      $(5, yi, 2, 11, "div", 4, ue),
      s()()),
    r & 2)
  ) {
    let o = d();
    p(2), G(o.steps), p(3), G(o.steps);
  }
}
function Si(r, t) {
  if (r & 1) {
    let o = E();
    a(0, "div", 9),
      L(1, 5),
      a(2, "div", 10)(3, "div", 11),
      x("@verticalStepTransition.done", function (i) {
        b(o);
        let n = d(2);
        return y(n._animationDone.next(i));
      }),
      a(4, "div", 12),
      L(5, 8),
      s()()()();
  }
  if (r & 2) {
    let o = t.$implicit,
      e = t.$index,
      i = t.$index,
      n = t.$count,
      l = d(2),
      f = ie(4);
    p(),
      m("ngTemplateOutlet", f)("ngTemplateOutletContext", ne(10, Vt, o, e)),
      p(),
      M("mat-stepper-vertical-line", i !== n - 1),
      p(),
      M("mat-vertical-stepper-content-inactive", l.selectedIndex !== e),
      m(
        "@verticalStepTransition",
        ne(
          15,
          jt,
          l._getAnimationDirection(e),
          Ie(13, Lt, l._getAnimationDuration()),
        ),
      )("id", l._getStepContentId(e)),
      X("aria-labelledby", l._getStepLabelId(e)),
      p(2),
      m("ngTemplateOutlet", o.content);
  }
}
function Ii(r, t) {
  if ((r & 1 && $(0, Si, 6, 18, "div", 9, ue), r & 2)) {
    let o = d();
    G(o.steps);
  }
}
function Di(r, t) {
  if (r & 1) {
    let o = E();
    a(0, "mat-step-header", 13),
      x("click", function () {
        let i = b(o).step;
        return y(i.select());
      })("keydown", function (i) {
        b(o);
        let n = d();
        return y(n._onKeydown(i));
      }),
      s();
  }
  if (r & 2) {
    let o = t.step,
      e = t.i,
      i = d();
    M("mat-horizontal-stepper-header", i.orientation === "horizontal")(
      "mat-vertical-stepper-header",
      i.orientation === "vertical",
    ),
      m("tabIndex", i._getFocusIndex() === e ? 0 : -1)(
        "id",
        i._getStepLabelId(e),
      )("index", e)("state", i._getIndicatorType(e, o.state))(
        "label",
        o.stepLabel || o.label,
      )("selected", i.selectedIndex === e)("active", i._stepIsNavigable(e, o))(
        "optional",
        o.optional,
      )("errorMessage", o.errorMessage)("iconOverrides", i._iconOverrides)(
        "disableRipple",
        i.disableRipple || !i._stepIsNavigable(e, o),
      )("color", o.color || i.color),
      X("aria-posinset", e + 1)("aria-setsize", i.steps.length)(
        "aria-controls",
        i._getStepContentId(e),
      )("aria-selected", i.selectedIndex == e)(
        "aria-label",
        o.ariaLabel || null,
      )(
        "aria-labelledby",
        !o.ariaLabel && o.ariaLabelledby ? o.ariaLabelledby : null,
      )("aria-disabled", i._stepIsNavigable(e, o) ? null : !0);
  }
}
var ze = (() => {
    let t = class t extends Re {};
    (t.ɵfac = (() => {
      let e;
      return function (n) {
        return (e || (e = me(t)))(n || t);
      };
    })()),
      (t.ɵdir = I({
        type: t,
        selectors: [["", "matStepLabel", ""]],
        standalone: !0,
        features: [V],
      }));
    let r = t;
    return r;
  })(),
  Ei = (() => {
    let t = class t {
      constructor() {
        (this.changes = new Z()),
          (this.optionalLabel = "Optional"),
          (this.completedLabel = "Completed"),
          (this.editableLabel = "Editable");
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = de({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let r = t;
    return r;
  })();
var zt = (() => {
    let t = class t extends Pe {
      constructor(e, i, n, l) {
        super(n),
          (this._intl = e),
          (this._focusMonitor = i),
          (this._intlSubscription = e.changes.subscribe(() =>
            l.markForCheck(),
          ));
      }
      ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, !0);
      }
      ngOnDestroy() {
        this._intlSubscription.unsubscribe(),
          this._focusMonitor.stopMonitoring(this._elementRef);
      }
      focus(e, i) {
        e
          ? this._focusMonitor.focusVia(this._elementRef, e, i)
          : this._elementRef.nativeElement.focus(i);
      }
      _stringLabel() {
        return this.label instanceof ze ? null : this.label;
      }
      _templateLabel() {
        return this.label instanceof ze ? this.label : null;
      }
      _getHostElement() {
        return this._elementRef.nativeElement;
      }
      _getIconContext() {
        return {
          index: this.index,
          active: this.active,
          optional: this.optional,
        };
      }
      _getDefaultTextForState(e) {
        return e == "number"
          ? `${this.index + 1}`
          : e == "edit"
            ? "create"
            : e == "error"
              ? "warning"
              : e;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(Ei), u(ot), u(Q), u(se));
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [["mat-step-header"]],
        hostAttrs: ["role", "tab", 1, "mat-step-header"],
        hostVars: 2,
        hostBindings: function (i, n) {
          i & 2 && Ue("mat-" + (n.color || "primary"));
        },
        inputs: {
          state: "state",
          label: "label",
          errorMessage: "errorMessage",
          iconOverrides: "iconOverrides",
          index: "index",
          selected: "selected",
          active: "active",
          optional: "optional",
          disableRipple: "disableRipple",
          color: "color",
        },
        standalone: !0,
        features: [V, S],
        decls: 10,
        vars: 17,
        consts: [
          [
            "matRipple",
            "",
            1,
            "mat-step-header-ripple",
            "mat-focus-indicator",
            3,
            "matRippleTrigger",
            "matRippleDisabled",
          ],
          [1, "mat-step-icon-content"],
          [1, "mat-step-label"],
          [1, "mat-step-text-label"],
          [1, "mat-step-optional"],
          [1, "mat-step-sub-label-error"],
          [3, "ngTemplateOutlet", "ngTemplateOutletContext"],
          ["aria-hidden", "true"],
          [1, "cdk-visually-hidden"],
          [3, "ngTemplateOutlet"],
        ],
        template: function (i, n) {
          if (
            (i & 1 &&
              (D(0, "div", 0),
              a(1, "div")(2, "div", 1),
              h(3, ai, 1, 2, "ng-container")(4, di, 2, 1),
              s()(),
              a(5, "div", 2),
              h(6, mi, 2, 1, "div", 3)(7, ui, 2, 1)(8, hi, 2, 1, "div", 4)(
                9,
                fi,
                2,
                1,
                "div",
                5,
              ),
              s()),
            i & 2)
          ) {
            let l;
            m("matRippleTrigger", n._getHostElement())(
              "matRippleDisabled",
              n.disableRipple,
            ),
              p(),
              Ke("mat-step-icon-state-", n.state, " mat-step-icon"),
              M("mat-step-icon-selected", n.selected),
              p(2),
              v(3, n.iconOverrides && n.iconOverrides[n.state] ? 3 : 4),
              p(2),
              M("mat-step-label-active", n.active)(
                "mat-step-label-selected",
                n.selected,
              )("mat-step-label-error", n.state == "error"),
              p(),
              v(6, (l = n._templateLabel()) ? 6 : n._stringLabel() ? 7 : -1, l),
              p(2),
              v(8, n.optional && n.state != "error" ? 8 : -1),
              p(),
              v(9, n.state === "error" ? 9 : -1);
          }
        },
        dependencies: [at, Ee, st],
        styles: [
          '.mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:""}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color);border-radius:var(--mat-stepper-header-hover-state-layer-shape)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color);border-radius:var(--mat-stepper-header-focus-state-layer-shape)}@media(hover: none){.mat-step-header:hover{background:none}}.cdk-high-contrast-active .mat-step-header{outline:solid 1px}.cdk-high-contrast-active .mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.cdk-high-contrast-active .mat-step-header[aria-disabled=true]{outline-color:GrayText}.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-label,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-icon,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color)}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color);background-color:var(--mat-stepper-header-icon-background-color)}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color);color:var(--mat-stepper-header-error-state-icon-foreground-color)}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font);font-size:var(--mat-stepper-header-label-text-size);font-weight:var(--mat-stepper-header-label-text-weight);color:var(--mat-stepper-header-label-text-color)}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color)}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color);font-size:var(--mat-stepper-header-error-state-label-text-size)}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size);font-weight:var(--mat-stepper-header-selected-state-label-text-weight)}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color);color:var(--mat-stepper-header-selected-state-icon-foreground-color)}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color);color:var(--mat-stepper-header-done-state-icon-foreground-color)}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color);color:var(--mat-stepper-header-edit-state-icon-foreground-color)}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let r = t;
    return r;
  })(),
  Bt = "500ms",
  Ht = "225ms",
  Nt = {
    horizontalStepTransition: Te("horizontalStepTransition", [
      B(
        "previous",
        j({ transform: "translate3d(-100%, 0, 0)", visibility: "hidden" }),
      ),
      B("current", j({ transform: "none", visibility: "inherit" })),
      B(
        "next",
        j({ transform: "translate3d(100%, 0, 0)", visibility: "hidden" }),
      ),
      Fe(
        "* => *",
        Me([
          we("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)"),
          Oe("@*", ke(), { optional: !0 }),
        ]),
        { params: { animationDuration: Bt } },
      ),
    ]),
    verticalStepTransition: Te("verticalStepTransition", [
      B("previous", j({ height: "0px", visibility: "hidden" })),
      B("next", j({ height: "0px", visibility: "hidden" })),
      B("current", j({ height: "*", visibility: "inherit" })),
      Fe(
        "* <=> current",
        Me([
          we("{{animationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)"),
          Oe("@*", ke(), { optional: !0 }),
        ]),
        { params: { animationDuration: Ht } },
      ),
    ]),
  },
  Ti = (() => {
    let t = class t {
      constructor(e) {
        this.templateRef = e;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(A));
    }),
      (t.ɵdir = I({
        type: t,
        selectors: [["ng-template", "matStepperIcon", ""]],
        inputs: { name: [_.None, "matStepperIcon", "name"] },
        standalone: !0,
      }));
    let r = t;
    return r;
  })(),
  wi = (() => {
    let t = class t {
      constructor(e) {
        this._template = e;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(A));
    }),
      (t.ɵdir = I({
        type: t,
        selectors: [["ng-template", "matStepContent", ""]],
        standalone: !0,
      }));
    let r = t;
    return r;
  })(),
  Ne = (() => {
    let t = class t extends Ce {
      constructor(e, i, n, l) {
        super(e, l),
          (this._errorStateMatcher = i),
          (this._viewContainerRef = n),
          (this._isSelected = je.EMPTY),
          (this.stepLabel = void 0);
      }
      ngAfterContentInit() {
        this._isSelected = this._stepper.steps.changes
          .pipe(
            Qe(() =>
              this._stepper.selectionChange.pipe(
                pe((e) => e.selectedStep === this),
                H(this._stepper.selected === this),
              ),
            ),
          )
          .subscribe((e) => {
            e &&
              this._lazyContent &&
              !this._portal &&
              (this._portal = new lt(
                this._lazyContent._template,
                this._viewContainerRef,
              ));
          });
      }
      ngOnDestroy() {
        this._isSelected.unsubscribe();
      }
      isErrorState(e, i) {
        let n = this._errorStateMatcher.isErrorState(e, i),
          l = !!(e && e.invalid && this.interacted);
        return n || l;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(ce(() => Ae)), u(xe, 4), u(Ge), u(le, 8));
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [["mat-step"]],
        contentQueries: function (i, n, l) {
          if ((i & 1 && (O(l, ze, 5), O(l, wi, 5)), i & 2)) {
            let f;
            T((f = w())) && (n.stepLabel = f.first),
              T((f = w())) && (n._lazyContent = f.first);
          }
        },
        hostAttrs: ["hidden", ""],
        inputs: { color: "color" },
        exportAs: ["matStep"],
        standalone: !0,
        features: [
          re([
            { provide: xe, useExisting: t },
            { provide: Ce, useExisting: t },
          ]),
          V,
          S,
        ],
        ngContentSelectors: At,
        decls: 1,
        vars: 0,
        consts: [[3, "cdkPortalOutlet"]],
        template: function (i, n) {
          i & 1 && (ee(), h(0, vi, 2, 1, "ng-template"));
        },
        dependencies: [pt],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let r = t;
    return r;
  })(),
  Ae = (() => {
    let t = class t extends Y {
      get animationDuration() {
        return this._animationDuration;
      }
      set animationDuration(e) {
        this._animationDuration = /^\d+$/.test(e) ? e + "ms" : e;
      }
      constructor(e, i, n) {
        super(e, i, n),
          (this._stepHeader = void 0),
          (this._steps = void 0),
          (this.steps = new J()),
          (this.animationDone = new q()),
          (this.labelPosition = "end"),
          (this.headerPosition = "top"),
          (this._iconOverrides = {}),
          (this._animationDone = new Z()),
          (this._animationDuration = ""),
          (this._isServer = !F(tt).isBrowser);
        let l = n.nativeElement.nodeName.toLowerCase();
        this.orientation =
          l === "mat-vertical-stepper" ? "vertical" : "horizontal";
      }
      ngAfterContentInit() {
        super.ngAfterContentInit(),
          this._icons.forEach(
            ({ name: e, templateRef: i }) => (this._iconOverrides[e] = i),
          ),
          this.steps.changes.pipe(N(this._destroyed)).subscribe(() => {
            this._stateChanged();
          }),
          this._animationDone
            .pipe(
              He(
                (e, i) =>
                  e.fromState === i.fromState && e.toState === i.toState,
              ),
              N(this._destroyed),
            )
            .subscribe((e) => {
              e.toState === "current" && this.animationDone.emit();
            });
      }
      _stepIsNavigable(e, i) {
        return i.completed || this.selectedIndex === e || !this.linear;
      }
      _getAnimationDuration() {
        return this.animationDuration
          ? this.animationDuration
          : this.orientation === "horizontal"
            ? Bt
            : Ht;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(ge, 8), u(se), u(Q));
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [
          ["mat-stepper"],
          ["mat-vertical-stepper"],
          ["mat-horizontal-stepper"],
          ["", "matStepper", ""],
        ],
        contentQueries: function (i, n, l) {
          if ((i & 1 && (O(l, Ne, 5), O(l, Ti, 5)), i & 2)) {
            let f;
            T((f = w())) && (n._steps = f), T((f = w())) && (n._icons = f);
          }
        },
        viewQuery: function (i, n) {
          if ((i & 1 && he(zt, 5), i & 2)) {
            let l;
            T((l = w())) && (n._stepHeader = l);
          }
        },
        hostAttrs: ["role", "tablist"],
        hostVars: 11,
        hostBindings: function (i, n) {
          i & 2 &&
            (X("aria-orientation", n.orientation),
            M("mat-stepper-horizontal", n.orientation === "horizontal")(
              "mat-stepper-vertical",
              n.orientation === "vertical",
            )(
              "mat-stepper-label-position-end",
              n.orientation === "horizontal" && n.labelPosition == "end",
            )(
              "mat-stepper-label-position-bottom",
              n.orientation === "horizontal" && n.labelPosition == "bottom",
            )(
              "mat-stepper-header-position-bottom",
              n.headerPosition === "bottom",
            ));
        },
        inputs: {
          disableRipple: "disableRipple",
          color: "color",
          labelPosition: "labelPosition",
          headerPosition: "headerPosition",
          animationDuration: "animationDuration",
        },
        outputs: { animationDone: "animationDone" },
        exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"],
        standalone: !0,
        features: [re([{ provide: Y, useExisting: t }]), V, S],
        ngContentSelectors: At,
        decls: 5,
        vars: 2,
        consts: [
          ["stepTemplate", ""],
          [1, "mat-horizontal-stepper-wrapper"],
          [1, "mat-horizontal-stepper-header-container"],
          [1, "mat-horizontal-content-container"],
          ["role", "tabpanel", 1, "mat-horizontal-stepper-content"],
          [3, "ngTemplateOutlet", "ngTemplateOutletContext"],
          [1, "mat-stepper-horizontal-line"],
          ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"],
          [3, "ngTemplateOutlet"],
          [1, "mat-step"],
          [1, "mat-vertical-content-container"],
          ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"],
          [1, "mat-vertical-content"],
          [
            3,
            "click",
            "keydown",
            "tabIndex",
            "id",
            "index",
            "state",
            "label",
            "selected",
            "active",
            "optional",
            "errorMessage",
            "iconOverrides",
            "disableRipple",
            "color",
          ],
        ],
        template: function (i, n) {
          if (
            (i & 1 &&
              (ee(),
              h(0, gi, 1, 0)(1, Ci, 7, 0)(2, Ii, 2, 0)(
                3,
                Di,
                1,
                23,
                "ng-template",
                null,
                0,
                Xe,
              )),
            i & 2)
          ) {
            let l;
            v(0, n._isServer ? 0 : -1),
              p(),
              v(
                1,
                (l = n.orientation) === "horizontal"
                  ? 1
                  : l === "vertical"
                    ? 2
                    : -1,
              );
          }
        },
        dependencies: [Ee, zt],
        styles: [
          '.mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font);background:var(--mat-stepper-container-color)}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color)}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:"";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-inactive{height:0;overflow:hidden}.mat-horizontal-stepper-content:not(.mat-horizontal-stepper-content-inactive){visibility:inherit !important}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.cdk-high-contrast-active .mat-horizontal-content-container{outline:solid 1px}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}.cdk-high-contrast-active .mat-vertical-content-container{outline:solid 1px}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:"";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color);top:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-stepper-content:not(.mat-vertical-stepper-content-inactive){visibility:inherit !important}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}',
        ],
        encapsulation: 2,
        data: {
          animation: [Nt.horizontalStepTransition, Nt.verticalStepTransition],
        },
        changeDetection: 0,
      }));
    let r = t;
    return r;
  })(),
  Qt = (() => {
    let t = class t extends Mt {};
    (t.ɵfac = (() => {
      let e;
      return function (n) {
        return (e || (e = me(t)))(n || t);
      };
    })()),
      (t.ɵdir = I({
        type: t,
        selectors: [["button", "matStepperNext", ""]],
        hostAttrs: [1, "mat-stepper-next"],
        hostVars: 1,
        hostBindings: function (i, n) {
          i & 2 && U("type", n.type);
        },
        standalone: !0,
        features: [V],
      }));
    let r = t;
    return r;
  })(),
  qt = (() => {
    let t = class t extends Ft {};
    (t.ɵfac = (() => {
      let e;
      return function (n) {
        return (e || (e = me(t)))(n || t);
      };
    })()),
      (t.ɵdir = I({
        type: t,
        selectors: [["button", "matStepperPrevious", ""]],
        hostAttrs: [1, "mat-stepper-previous"],
        hostVars: 1,
        hostBindings: function (i, n) {
          i & 2 && U("type", n.type);
        },
        standalone: !0,
        features: [V],
      }));
    let r = t;
    return r;
  })();
function Mi(r, t) {
  if (r & 1) {
    let o = E();
    a(0, "app-order-summary", 14),
      x("add", function (i) {
        b(o);
        let n = d(2);
        return y(n.add(i));
      })("remove", function (i) {
        b(o);
        let n = d(2);
        return y(n.remove(i));
      }),
      s();
  }
  if (r & 2) {
    let o = d(2);
    m("products", o.products())("totalPrice", o.totalPrice())(
      "showControls",
      !0,
    );
  }
}
function Fi(r, t) {
  r & 1 && (a(0, "div", 15), D(1, "mat-spinner", 16), s()),
    r & 2 && (p(), m("diameter", 40));
}
function ki(r, t) {
  if (
    (r & 1 &&
      (h(0, Mi, 1, 3, "app-order-summary")(1, Fi, 2, 1),
      a(2, "div", 6)(3, "button", 10),
      c(4, " next "),
      s()()),
    r & 2)
  ) {
    let o = d();
    v(0, o.products() ? 0 : 1);
  }
}
function Oi(r, t) {
  r & 1 &&
    (a(0, "div", 17),
    c(1, " The cart is empty. Didn't you like anything in our shop? "),
    s());
}
function Pi(r, t) {
  if ((r & 1 && D(0, "app-order-summary", 18), r & 2)) {
    let o = d();
    m("products", o.products())("totalPrice", o.totalPrice())(
      "showControls",
      !1,
    );
  }
}
var $t = (() => {
  let t = class t {
    constructor() {
      (this.fb = F(St)),
        (this.checkoutService = F(kt)),
        (this.cartService = F(ve)),
        (this.products = ft(this.checkoutService.getProductsForCheckout(), {
          initialValue: [],
        })),
        (this.totalPrice = De(
          () =>
            +this.products()
              .reduce((n, l) => n + l.totalPrice, 0)
              .toFixed(2),
        )),
        (this.cartNotEmpty = De(() => this.cartService.totalInCart() > 0)),
        (this.shippingInfo = this.fb.group({
          lastName: ["", ye.required],
          firstName: ["", ye.required],
          address: ["", ye.required],
          comment: "",
        }));
    }
    get fullName() {
      let { firstName: e, lastName: i } = this.shippingInfo.value;
      return `${e} ${i}`;
    }
    get address() {
      return this.shippingInfo.value.address;
    }
    get comment() {
      return this.shippingInfo.value.comment;
    }
    add(e) {
      this.cartService.addItem(e);
    }
    remove(e) {
      this.cartService.removeItem(e);
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵcmp = C({
      type: t,
      selectors: [["app-cart"]],
      standalone: !0,
      features: [
        re([{ provide: le, useValue: { displayDefaultIndicatorType: !1 } }]),
        S,
      ],
      decls: 40,
      vars: 9,
      consts: [
        ["stepper", ""],
        [1, "row"],
        [1, "col", "mx-auto"],
        ["mat-card-title", "", 1, "text-center", "pt-4"],
        [3, "linear"],
        ["label", "Review your cart", 3, "completed"],
        [1, "text-right"],
        ["label", "Shipping address", 3, "stepControl"],
        [3, "nextStep", "shippingInfo"],
        ["mat-button", "", "matStepperPrevious", "", 1, "text-uppercase"],
        [
          "color",
          "primary",
          "mat-flat-button",
          "",
          "matStepperNext",
          "",
          1,
          "text-uppercase",
        ],
        ["label", "Review your order"],
        [1, "col", "col-md-6"],
        ["color", "primary", "mat-flat-button", "", 1, "text-uppercase"],
        [3, "add", "remove", "products", "totalPrice", "showControls"],
        [1, "py-5"],
        [1, "mx-auto", 3, "diameter"],
        [1, "lead"],
        [3, "products", "totalPrice", "showControls"],
      ],
      template: function (i, n) {
        if (i & 1) {
          let l = E();
          a(0, "div", 1)(1, "div", 2)(2, "mat-card")(3, "h1", 3),
            c(4, "Checkout"),
            s(),
            a(5, "mat-card-content")(6, "mat-vertical-stepper", 4, 0)(
              8,
              "mat-step",
              5,
            ),
            h(9, ki, 5, 1, "div", 6)(10, Oi, 2, 0),
            s(),
            a(11, "mat-step", 7)(12, "h2"),
            c(13, "Shipping address"),
            s(),
            a(14, "app-cart-shipping-form", 8),
            x("nextStep", function () {
              b(l);
              let Gt = ie(7);
              return y(Gt.next());
            }),
            s(),
            a(15, "div", 6)(16, "button", 9),
            c(17, " back "),
            s(),
            a(18, "button", 10),
            c(19, " next "),
            s()()(),
            a(20, "mat-step", 11),
            h(21, Pi, 1, 3, "app-order-summary"),
            a(22, "div", 1)(23, "div", 12)(24, "h2"),
            c(25, "Shipping"),
            s(),
            a(26, "p"),
            c(27),
            s(),
            a(28, "p"),
            c(29),
            s()(),
            a(30, "div", 12)(31, "h2"),
            c(32, "Comment"),
            s(),
            a(33, "p"),
            c(34),
            s()()(),
            a(35, "div", 6)(36, "button", 9),
            c(37, " back "),
            s(),
            a(38, "button", 13),
            c(39, " place order "),
            s()()()()()()()();
        }
        i & 2 &&
          (p(6),
          m("linear", !0),
          p(2),
          m("completed", n.cartNotEmpty()),
          p(),
          v(9, n.cartNotEmpty() ? 9 : 10),
          p(2),
          m("stepControl", n.shippingInfo),
          p(3),
          m("shippingInfo", n.shippingInfo),
          p(7),
          v(21, n.products() ? 21 : -1),
          p(6),
          g(n.fullName),
          p(2),
          g(n.address),
          p(5),
          g(n.comment));
      },
      dependencies: [be, ut, ht, Ae, Ne, Rt, wt, ct, Qt, Ot, qt],
      changeDetection: 0,
    }));
  let r = t;
  return r;
})();
var Cn = [{ path: "", component: $t }];
export { Cn as default };
