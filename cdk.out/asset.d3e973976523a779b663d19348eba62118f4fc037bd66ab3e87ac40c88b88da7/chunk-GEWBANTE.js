import { a as Mt, c as Ot, d as ge, g as Ht } from "./chunk-WOO2F2QC.js";
import {
  a as Qt,
  b as ce,
  c as $t,
  d as Wt,
  e as Zt,
  f as Gt,
  g as Kt,
  h as Yt,
  j as Xt,
  k as Jt,
  l as ei,
  m as ti,
  n as ii,
  o as ni,
  p as oi,
} from "./chunk-PORSZDRQ.js";
import {
  $ as pt,
  Ab as V,
  B as ft,
  Ba as f,
  Bb as vt,
  Ca as d,
  Da as P,
  Db as Rt,
  Eb as St,
  F as Ue,
  Fb as bt,
  Gb as T,
  Gc as Pt,
  Hb as D,
  Ia as se,
  J as ht,
  Ja as ee,
  Ka as he,
  Kb as Qe,
  Lb as kt,
  Ma as Dt,
  Mb as xt,
  Na as w,
  Oa as G,
  R as mt,
  S as X,
  Sa as m,
  Tb as Et,
  Ua as E,
  Ub as ie,
  Vb as z,
  W as J,
  Wa as me,
  Z as ue,
  Za as v,
  aa as I,
  ac as It,
  ad as _e,
  ba as _,
  bd as At,
  ca as C,
  cb as c,
  cd as le,
  d as rt,
  db as l,
  dd as ye,
  e as at,
  ea as p,
  eb as F,
  f as st,
  fb as R,
  fc as Ft,
  fd as jt,
  gb as S,
  gc as Tt,
  hb as b,
  ia as fe,
  ib as te,
  id as ne,
  ja as W,
  ka as Z,
  l as ze,
  lb as A,
  ld as Lt,
  m as lt,
  md as we,
  na as x,
  nb as j,
  nd as Bt,
  o as ct,
  oa as gt,
  ob as pe,
  od as Vt,
  p as dt,
  pb as Q,
  pc as Nt,
  pd as zt,
  q as ae,
  qd as Ut,
  ra as _t,
  rb as H,
  s as ut,
  sa as yt,
  ta as wt,
  tb as L,
  td as qt,
  ua as q,
  ub as B,
  ud as Ce,
  va as Ct,
  xb as qe,
  yb as u,
  zb as $,
} from "./chunk-ILZMJO4D.js";
var De = (() => {
  let e = class e {
    constructor() {}
    getOrders() {
      return ae([]);
    }
  };
  (e.ɵfac = function (i) {
    return new (i || e)();
  }),
    (e.ɵprov = J({ token: e, factory: e.ɵfac }));
  let n = e;
  return n;
})();
var yi = [[["caption"]], [["colgroup"], ["col"]], "*"],
  wi = ["caption", "colgroup, col", "*"];
function Ci(n, e) {
  n & 1 && Q(0, 2);
}
function Di(n, e) {
  n & 1 &&
    (c(0, "thead", 0),
    b(1, 1),
    l(),
    c(2, "tbody", 0),
    b(3, 2)(4, 3),
    l(),
    c(5, "tfoot", 0),
    b(6, 4),
    l());
}
function vi(n, e) {
  n & 1 && b(0, 1)(1, 2)(2, 3)(3, 4);
}
var O = new ue("CDK_TABLE");
var xe = (() => {
    let e = class e {
      constructor(t) {
        this.template = t;
      }
    };
    (e.ɵfac = function (i) {
      return new (i || e)(d(P));
    }),
      (e.ɵdir = p({
        type: e,
        selectors: [["", "cdkCellDef", ""]],
        standalone: !0,
      }));
    let n = e;
    return n;
  })(),
  Ee = (() => {
    let e = class e {
      constructor(t) {
        this.template = t;
      }
    };
    (e.ɵfac = function (i) {
      return new (i || e)(d(P));
    }),
      (e.ɵdir = p({
        type: e,
        selectors: [["", "cdkHeaderCellDef", ""]],
        standalone: !0,
      }));
    let n = e;
    return n;
  })(),
  si = (() => {
    let e = class e {
      constructor(t) {
        this.template = t;
      }
    };
    (e.ɵfac = function (i) {
      return new (i || e)(d(P));
    }),
      (e.ɵdir = p({
        type: e,
        selectors: [["", "cdkFooterCellDef", ""]],
        standalone: !0,
      }));
    let n = e;
    return n;
  })(),
  oe = (() => {
    let e = class e {
      get name() {
        return this._name;
      }
      set name(t) {
        this._setNameInput(t);
      }
      get sticky() {
        return this._sticky;
      }
      set sticky(t) {
        t !== this._sticky &&
          ((this._sticky = t), (this._hasStickyChanged = !0));
      }
      get stickyEnd() {
        return this._stickyEnd;
      }
      set stickyEnd(t) {
        t !== this._stickyEnd &&
          ((this._stickyEnd = t), (this._hasStickyChanged = !0));
      }
      constructor(t) {
        (this._table = t),
          (this._hasStickyChanged = !1),
          (this._sticky = !1),
          (this._stickyEnd = !1);
      }
      hasStickyChanged() {
        let t = this._hasStickyChanged;
        return this.resetStickyChanged(), t;
      }
      resetStickyChanged() {
        this._hasStickyChanged = !1;
      }
      _updateColumnCssClassName() {
        this._columnCssClassName = [`cdk-column-${this.cssClassFriendlyName}`];
      }
      _setNameInput(t) {
        t &&
          ((this._name = t),
          (this.cssClassFriendlyName = t.replace(/[^a-z0-9_-]/gi, "-")),
          this._updateColumnCssClassName());
      }
    };
    (e.ɵfac = function (i) {
      return new (i || e)(d(O, 8));
    }),
      (e.ɵdir = p({
        type: e,
        selectors: [["", "cdkColumnDef", ""]],
        contentQueries: function (i, o, s) {
          if ((i & 1 && (H(s, xe, 5), H(s, Ee, 5), H(s, si, 5)), i & 2)) {
            let a;
            L((a = B())) && (o.cell = a.first),
              L((a = B())) && (o.headerCell = a.first),
              L((a = B())) && (o.footerCell = a.first);
          }
        },
        inputs: {
          name: [_.None, "cdkColumnDef", "name"],
          sticky: [_.HasDecoratorInputTransform, "sticky", "sticky", z],
          stickyEnd: [
            _.HasDecoratorInputTransform,
            "stickyEnd",
            "stickyEnd",
            z,
          ],
        },
        standalone: !0,
        features: [
          T([{ provide: "MAT_SORT_HEADER_COLUMN_DEF", useExisting: e }]),
          G,
        ],
      }));
    let n = e;
    return n;
  })(),
  Re = class {
    constructor(e, r) {
      r.nativeElement.classList.add(...e._columnCssClassName);
    }
  },
  li = (() => {
    let e = class e extends Re {
      constructor(t, i) {
        super(t, i);
      }
    };
    (e.ɵfac = function (i) {
      return new (i || e)(d(oe), d(q));
    }),
      (e.ɵdir = p({
        type: e,
        selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
        hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
        standalone: !0,
        features: [w],
      }));
    let n = e;
    return n;
  })();
var ci = (() => {
    let e = class e extends Re {
      constructor(t, i) {
        super(t, i);
        let o = t._table?._getCellRole();
        o && i.nativeElement.setAttribute("role", o);
      }
    };
    (e.ɵfac = function (i) {
      return new (i || e)(d(oe), d(q));
    }),
      (e.ɵdir = p({
        type: e,
        selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
        hostAttrs: [1, "cdk-cell"],
        standalone: !0,
        features: [w],
      }));
    let n = e;
    return n;
  })(),
  Se = class {
    constructor() {
      (this.tasks = []), (this.endTasks = []);
    }
  },
  be = new ue("_COALESCED_STYLE_SCHEDULER"),
  We = (() => {
    let e = class e {
      constructor(t) {
        (this._ngZone = t),
          (this._currentSchedule = null),
          (this._destroyed = new ze());
      }
      schedule(t) {
        this._createScheduleIfNeeded(), this._currentSchedule.tasks.push(t);
      }
      scheduleEnd(t) {
        this._createScheduleIfNeeded(), this._currentSchedule.endTasks.push(t);
      }
      ngOnDestroy() {
        this._destroyed.next(), this._destroyed.complete();
      }
      _createScheduleIfNeeded() {
        this._currentSchedule ||
          ((this._currentSchedule = new Se()),
          this._getScheduleObservable()
            .pipe(X(this._destroyed))
            .subscribe(() => {
              for (
                ;
                this._currentSchedule.tasks.length ||
                this._currentSchedule.endTasks.length;

              ) {
                let t = this._currentSchedule;
                this._currentSchedule = new Se();
                for (let i of t.tasks) i();
                for (let i of t.endTasks) i();
              }
              this._currentSchedule = null;
            }));
      }
      _getScheduleObservable() {
        return this._ngZone.isStable
          ? dt(Promise.resolve(void 0))
          : this._ngZone.onStable.pipe(Ue(1));
      }
    };
    (e.ɵfac = function (i) {
      return new (i || e)(pt(se));
    }),
      (e.ɵprov = J({ token: e, factory: e.ɵfac }));
    let n = e;
    return n;
  })();
var Ze = (() => {
    let e = class e {
      constructor(t, i) {
        (this.template = t), (this._differs = i);
      }
      ngOnChanges(t) {
        if (!this._columnsDiffer) {
          let i = (t.columns && t.columns.currentValue) || [];
          (this._columnsDiffer = this._differs.find(i).create()),
            this._columnsDiffer.diff(i);
        }
      }
      getColumnsDiff() {
        return this._columnsDiffer.diff(this.columns);
      }
      extractCellTemplate(t) {
        return this instanceof de
          ? t.headerCell.template
          : this instanceof Ge
            ? t.footerCell.template
            : t.cell.template;
      }
    };
    (e.ɵfac = function (i) {
      return new (i || e)(d(P), d(ie));
    }),
      (e.ɵdir = p({ type: e, features: [fe] }));
    let n = e;
    return n;
  })(),
  de = (() => {
    let e = class e extends Ze {
      get sticky() {
        return this._sticky;
      }
      set sticky(t) {
        t !== this._sticky &&
          ((this._sticky = t), (this._hasStickyChanged = !0));
      }
      constructor(t, i, o) {
        super(t, i),
          (this._table = o),
          (this._hasStickyChanged = !1),
          (this._sticky = !1);
      }
      ngOnChanges(t) {
        super.ngOnChanges(t);
      }
      hasStickyChanged() {
        let t = this._hasStickyChanged;
        return this.resetStickyChanged(), t;
      }
      resetStickyChanged() {
        this._hasStickyChanged = !1;
      }
    };
    (e.ɵfac = function (i) {
      return new (i || e)(d(P), d(ie), d(O, 8));
    }),
      (e.ɵdir = p({
        type: e,
        selectors: [["", "cdkHeaderRowDef", ""]],
        inputs: {
          columns: [_.None, "cdkHeaderRowDef", "columns"],
          sticky: [
            _.HasDecoratorInputTransform,
            "cdkHeaderRowDefSticky",
            "sticky",
            z,
          ],
        },
        standalone: !0,
        features: [G, w, fe],
      }));
    let n = e;
    return n;
  })(),
  Ge = (() => {
    let e = class e extends Ze {
      get sticky() {
        return this._sticky;
      }
      set sticky(t) {
        t !== this._sticky &&
          ((this._sticky = t), (this._hasStickyChanged = !0));
      }
      constructor(t, i, o) {
        super(t, i),
          (this._table = o),
          (this._hasStickyChanged = !1),
          (this._sticky = !1);
      }
      ngOnChanges(t) {
        super.ngOnChanges(t);
      }
      hasStickyChanged() {
        let t = this._hasStickyChanged;
        return this.resetStickyChanged(), t;
      }
      resetStickyChanged() {
        this._hasStickyChanged = !1;
      }
    };
    (e.ɵfac = function (i) {
      return new (i || e)(d(P), d(ie), d(O, 8));
    }),
      (e.ɵdir = p({
        type: e,
        selectors: [["", "cdkFooterRowDef", ""]],
        inputs: {
          columns: [_.None, "cdkFooterRowDef", "columns"],
          sticky: [
            _.HasDecoratorInputTransform,
            "cdkFooterRowDefSticky",
            "sticky",
            z,
          ],
        },
        standalone: !0,
        features: [G, w, fe],
      }));
    let n = e;
    return n;
  })(),
  Ie = (() => {
    let e = class e extends Ze {
      constructor(t, i, o) {
        super(t, i), (this._table = o);
      }
    };
    (e.ɵfac = function (i) {
      return new (i || e)(d(P), d(ie), d(O, 8));
    }),
      (e.ɵdir = p({
        type: e,
        selectors: [["", "cdkRowDef", ""]],
        inputs: {
          columns: [_.None, "cdkRowDefColumns", "columns"],
          when: [_.None, "cdkRowDefWhen", "when"],
        },
        standalone: !0,
        features: [w],
      }));
    let n = e;
    return n;
  })(),
  Y = (() => {
    let e = class e {
      constructor(t) {
        (this._viewContainer = t), (e.mostRecentCellOutlet = this);
      }
      ngOnDestroy() {
        e.mostRecentCellOutlet === this && (e.mostRecentCellOutlet = null);
      }
    };
    (e.mostRecentCellOutlet = null),
      (e.ɵfac = function (i) {
        return new (i || e)(d(ee));
      }),
      (e.ɵdir = p({
        type: e,
        selectors: [["", "cdkCellOutlet", ""]],
        standalone: !0,
      }));
    let n = e;
    return n;
  })(),
  Ke = (() => {
    let e = class e {};
    (e.ɵfac = function (i) {
      return new (i || e)();
    }),
      (e.ɵcmp = C({
        type: e,
        selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
        hostAttrs: ["role", "row", 1, "cdk-header-row"],
        standalone: !0,
        features: [D],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function (i, o) {
          i & 1 && b(0, 0);
        },
        dependencies: [Y],
        encapsulation: 2,
      }));
    let n = e;
    return n;
  })();
var Ye = (() => {
    let e = class e {};
    (e.ɵfac = function (i) {
      return new (i || e)();
    }),
      (e.ɵcmp = C({
        type: e,
        selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
        hostAttrs: ["role", "row", 1, "cdk-row"],
        standalone: !0,
        features: [D],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function (i, o) {
          i & 1 && b(0, 0);
        },
        dependencies: [Y],
        encapsulation: 2,
      }));
    let n = e;
    return n;
  })(),
  di = (() => {
    let e = class e {
      constructor(t) {
        (this.templateRef = t), (this._contentClassName = "cdk-no-data-row");
      }
    };
    (e.ɵfac = function (i) {
      return new (i || e)(d(P));
    }),
      (e.ɵdir = p({
        type: e,
        selectors: [["ng-template", "cdkNoDataRow", ""]],
        standalone: !0,
      }));
    let n = e;
    return n;
  })(),
  ri = ["top", "bottom", "left", "right"],
  $e = class {
    constructor(e, r, t, i, o = !0, s = !0, a) {
      (this._isNativeHtmlTable = e),
        (this._stickCellCss = r),
        (this.direction = t),
        (this._coalescedStyleScheduler = i),
        (this._isBrowser = o),
        (this._needsPositionStickyOnElement = s),
        (this._positionListener = a),
        (this._cachedCellWidths = []),
        (this._borderCellCss = {
          top: `${r}-border-elem-top`,
          bottom: `${r}-border-elem-bottom`,
          left: `${r}-border-elem-left`,
          right: `${r}-border-elem-right`,
        });
    }
    clearStickyPositioning(e, r) {
      let t = [];
      for (let i of e)
        if (i.nodeType === i.ELEMENT_NODE) {
          t.push(i);
          for (let o = 0; o < i.children.length; o++) t.push(i.children[o]);
        }
      this._coalescedStyleScheduler.schedule(() => {
        for (let i of t) this._removeStickyStyle(i, r);
      });
    }
    updateStickyColumns(e, r, t, i = !0) {
      if (
        !e.length ||
        !this._isBrowser ||
        !(r.some((o) => o) || t.some((o) => o))
      ) {
        this._positionListener &&
          (this._positionListener.stickyColumnsUpdated({ sizes: [] }),
          this._positionListener.stickyEndColumnsUpdated({ sizes: [] }));
        return;
      }
      this._coalescedStyleScheduler.schedule(() => {
        let o = e[0],
          s = o.children.length,
          a = this._getCellWidths(o, i),
          h = this._getStickyStartColumnPositions(a, r),
          y = this._getStickyEndColumnPositions(a, t),
          g = r.lastIndexOf(!0),
          M = t.indexOf(!0),
          N = this.direction === "rtl",
          U = N ? "right" : "left",
          Ve = N ? "left" : "right";
        for (let re of e)
          for (let k = 0; k < s; k++) {
            let ot = re.children[k];
            r[k] && this._addStickyStyle(ot, U, h[k], k === g),
              t[k] && this._addStickyStyle(ot, Ve, y[k], k === M);
          }
        this._positionListener &&
          (this._positionListener.stickyColumnsUpdated({
            sizes:
              g === -1
                ? []
                : a.slice(0, g + 1).map((re, k) => (r[k] ? re : null)),
          }),
          this._positionListener.stickyEndColumnsUpdated({
            sizes:
              M === -1
                ? []
                : a
                    .slice(M)
                    .map((re, k) => (t[k + M] ? re : null))
                    .reverse(),
          }));
      });
    }
    stickRows(e, r, t) {
      this._isBrowser &&
        this._coalescedStyleScheduler.schedule(() => {
          let i = t === "bottom" ? e.slice().reverse() : e,
            o = t === "bottom" ? r.slice().reverse() : r,
            s = [],
            a = [],
            h = [];
          for (let g = 0, M = 0; g < i.length; g++) {
            if (!o[g]) continue;
            s[g] = M;
            let N = i[g];
            h[g] = this._isNativeHtmlTable ? Array.from(N.children) : [N];
            let U = N.getBoundingClientRect().height;
            (M += U), (a[g] = U);
          }
          let y = o.lastIndexOf(!0);
          for (let g = 0; g < i.length; g++) {
            if (!o[g]) continue;
            let M = s[g],
              N = g === y;
            for (let U of h[g]) this._addStickyStyle(U, t, M, N);
          }
          t === "top"
            ? this._positionListener?.stickyHeaderRowsUpdated({
                sizes: a,
                offsets: s,
                elements: h,
              })
            : this._positionListener?.stickyFooterRowsUpdated({
                sizes: a,
                offsets: s,
                elements: h,
              });
        });
    }
    updateStickyFooterContainer(e, r) {
      this._isNativeHtmlTable &&
        this._coalescedStyleScheduler.schedule(() => {
          let t = e.querySelector("tfoot");
          t &&
            (r.some((i) => !i)
              ? this._removeStickyStyle(t, ["bottom"])
              : this._addStickyStyle(t, "bottom", 0, !1));
        });
    }
    _removeStickyStyle(e, r) {
      for (let i of r)
        (e.style[i] = ""), e.classList.remove(this._borderCellCss[i]);
      ri.some((i) => r.indexOf(i) === -1 && e.style[i])
        ? (e.style.zIndex = this._getCalculatedZIndex(e))
        : ((e.style.zIndex = ""),
          this._needsPositionStickyOnElement && (e.style.position = ""),
          e.classList.remove(this._stickCellCss));
    }
    _addStickyStyle(e, r, t, i) {
      e.classList.add(this._stickCellCss),
        i && e.classList.add(this._borderCellCss[r]),
        (e.style[r] = `${t}px`),
        (e.style.zIndex = this._getCalculatedZIndex(e)),
        this._needsPositionStickyOnElement &&
          (e.style.cssText += "position: -webkit-sticky; position: sticky; ");
    }
    _getCalculatedZIndex(e) {
      let r = { top: 100, bottom: 10, left: 1, right: 1 },
        t = 0;
      for (let i of ri) e.style[i] && (t += r[i]);
      return t ? `${t}` : "";
    }
    _getCellWidths(e, r = !0) {
      if (!r && this._cachedCellWidths.length) return this._cachedCellWidths;
      let t = [],
        i = e.children;
      for (let o = 0; o < i.length; o++) {
        let s = i[o];
        t.push(s.getBoundingClientRect().width);
      }
      return (this._cachedCellWidths = t), t;
    }
    _getStickyStartColumnPositions(e, r) {
      let t = [],
        i = 0;
      for (let o = 0; o < e.length; o++) r[o] && ((t[o] = i), (i += e[o]));
      return t;
    }
    _getStickyEndColumnPositions(e, r) {
      let t = [],
        i = 0;
      for (let o = e.length; o > 0; o--) r[o] && ((t[o] = i), (i += e[o]));
      return t;
    }
  };
var ke = new ue("CDK_SPL");
var Xe = (() => {
    let e = class e {
      constructor(t, i) {
        (this.viewContainer = t), (this.elementRef = i);
        let o = I(O);
        (o._rowOutlet = this), o._outletAssigned();
      }
    };
    (e.ɵfac = function (i) {
      return new (i || e)(d(ee), d(q));
    }),
      (e.ɵdir = p({
        type: e,
        selectors: [["", "rowOutlet", ""]],
        standalone: !0,
      }));
    let n = e;
    return n;
  })(),
  Je = (() => {
    let e = class e {
      constructor(t, i) {
        (this.viewContainer = t), (this.elementRef = i);
        let o = I(O);
        (o._headerRowOutlet = this), o._outletAssigned();
      }
    };
    (e.ɵfac = function (i) {
      return new (i || e)(d(ee), d(q));
    }),
      (e.ɵdir = p({
        type: e,
        selectors: [["", "headerRowOutlet", ""]],
        standalone: !0,
      }));
    let n = e;
    return n;
  })(),
  et = (() => {
    let e = class e {
      constructor(t, i) {
        (this.viewContainer = t), (this.elementRef = i);
        let o = I(O);
        (o._footerRowOutlet = this), o._outletAssigned();
      }
    };
    (e.ɵfac = function (i) {
      return new (i || e)(d(ee), d(q));
    }),
      (e.ɵdir = p({
        type: e,
        selectors: [["", "footerRowOutlet", ""]],
        standalone: !0,
      }));
    let n = e;
    return n;
  })(),
  tt = (() => {
    let e = class e {
      constructor(t, i) {
        (this.viewContainer = t), (this.elementRef = i);
        let o = I(O);
        (o._noDataRowOutlet = this), o._outletAssigned();
      }
    };
    (e.ɵfac = function (i) {
      return new (i || e)(d(ee), d(q));
    }),
      (e.ɵdir = p({
        type: e,
        selectors: [["", "noDataRowOutlet", ""]],
        standalone: !0,
      }));
    let n = e;
    return n;
  })();
var it = (() => {
  let e = class e {
    _getCellRole() {
      if (this._cellRoleInternal === void 0) {
        let t = this._elementRef.nativeElement.getAttribute("role"),
          i = t === "grid" || t === "treegrid" ? "gridcell" : "cell";
        this._cellRoleInternal =
          this._isNativeHtmlTable && i === "cell" ? null : i;
      }
      return this._cellRoleInternal;
    }
    get trackBy() {
      return this._trackByFn;
    }
    set trackBy(t) {
      this._trackByFn = t;
    }
    get dataSource() {
      return this._dataSource;
    }
    set dataSource(t) {
      this._dataSource !== t && this._switchDataSource(t);
    }
    get multiTemplateDataRows() {
      return this._multiTemplateDataRows;
    }
    set multiTemplateDataRows(t) {
      (this._multiTemplateDataRows = t),
        this._rowOutlet &&
          this._rowOutlet.viewContainer.length &&
          (this._forceRenderDataRows(), this.updateStickyColumnStyles());
    }
    get fixedLayout() {
      return this._fixedLayout;
    }
    set fixedLayout(t) {
      (this._fixedLayout = t),
        (this._forceRecalculateCellWidths = !0),
        (this._stickyColumnStylesNeedReset = !0);
    }
    constructor(t, i, o, s, a, h, y, g, M, N, U, Ve) {
      (this._differs = t),
        (this._changeDetectorRef = i),
        (this._elementRef = o),
        (this._dir = a),
        (this._platform = y),
        (this._viewRepeater = g),
        (this._coalescedStyleScheduler = M),
        (this._viewportRuler = N),
        (this._stickyPositioningListener = U),
        (this._ngZone = Ve),
        (this._onDestroy = new ze()),
        (this._columnDefsByName = new Map()),
        (this._customColumnDefs = new Set()),
        (this._customRowDefs = new Set()),
        (this._customHeaderRowDefs = new Set()),
        (this._customFooterRowDefs = new Set()),
        (this._headerRowDefChanged = !0),
        (this._footerRowDefChanged = !0),
        (this._stickyColumnStylesNeedReset = !0),
        (this._forceRecalculateCellWidths = !0),
        (this._cachedRenderRowsMap = new Map()),
        (this.stickyCssClass = "cdk-table-sticky"),
        (this.needsPositionStickyOnElement = !0),
        (this._isShowingNoDataRow = !1),
        (this._hasAllOutlets = !1),
        (this._hasInitialized = !1),
        (this._cellRoleInternal = void 0),
        (this._multiTemplateDataRows = !1),
        (this._fixedLayout = !1),
        (this.contentChanged = new Ct()),
        (this.viewChange = new lt({ start: 0, end: Number.MAX_VALUE })),
        s || o.nativeElement.setAttribute("role", "table"),
        (this._document = h),
        (this._isServer = !y.isBrowser),
        (this._isNativeHtmlTable = o.nativeElement.nodeName === "TABLE");
    }
    ngOnInit() {
      this._setupStickyStyler(),
        (this._dataDiffer = this._differs
          .find([])
          .create((t, i) =>
            this.trackBy ? this.trackBy(i.dataIndex, i.data) : i,
          )),
        this._viewportRuler
          .change()
          .pipe(X(this._onDestroy))
          .subscribe(() => {
            this._forceRecalculateCellWidths = !0;
          });
    }
    ngAfterContentInit() {
      this._hasInitialized = !0;
    }
    ngAfterContentChecked() {
      this._canRender() && this._render();
    }
    ngOnDestroy() {
      [
        this._rowOutlet?.viewContainer,
        this._headerRowOutlet?.viewContainer,
        this._footerRowOutlet?.viewContainer,
        this._cachedRenderRowsMap,
        this._customColumnDefs,
        this._customRowDefs,
        this._customHeaderRowDefs,
        this._customFooterRowDefs,
        this._columnDefsByName,
      ].forEach((t) => {
        t?.clear();
      }),
        (this._headerRowDefs = []),
        (this._footerRowDefs = []),
        (this._defaultRowDef = null),
        this._onDestroy.next(),
        this._onDestroy.complete(),
        _e(this.dataSource) && this.dataSource.disconnect(this);
    }
    renderRows() {
      this._renderRows = this._getAllRenderRows();
      let t = this._dataDiffer.diff(this._renderRows);
      if (!t) {
        this._updateNoDataRow(), this.contentChanged.next();
        return;
      }
      let i = this._rowOutlet.viewContainer;
      this._viewRepeater.applyChanges(
        t,
        i,
        (o, s, a) => this._getEmbeddedViewArgs(o.item, a),
        (o) => o.item.data,
        (o) => {
          o.operation === At.INSERTED &&
            o.context &&
            this._renderCellTemplateForItem(o.record.item.rowDef, o.context);
        },
      ),
        this._updateRowIndexContext(),
        t.forEachIdentityChange((o) => {
          let s = i.get(o.currentIndex);
          s.context.$implicit = o.item.data;
        }),
        this._updateNoDataRow(),
        this._ngZone && se.isInAngularZone()
          ? this._ngZone.onStable
              .pipe(Ue(1), X(this._onDestroy))
              .subscribe(() => {
                this.updateStickyColumnStyles();
              })
          : this.updateStickyColumnStyles(),
        this.contentChanged.next();
    }
    addColumnDef(t) {
      this._customColumnDefs.add(t);
    }
    removeColumnDef(t) {
      this._customColumnDefs.delete(t);
    }
    addRowDef(t) {
      this._customRowDefs.add(t);
    }
    removeRowDef(t) {
      this._customRowDefs.delete(t);
    }
    addHeaderRowDef(t) {
      this._customHeaderRowDefs.add(t), (this._headerRowDefChanged = !0);
    }
    removeHeaderRowDef(t) {
      this._customHeaderRowDefs.delete(t), (this._headerRowDefChanged = !0);
    }
    addFooterRowDef(t) {
      this._customFooterRowDefs.add(t), (this._footerRowDefChanged = !0);
    }
    removeFooterRowDef(t) {
      this._customFooterRowDefs.delete(t), (this._footerRowDefChanged = !0);
    }
    setNoDataRow(t) {
      this._customNoDataRow = t;
    }
    updateStickyHeaderRowStyles() {
      let t = this._getRenderedRows(this._headerRowOutlet);
      if (this._isNativeHtmlTable) {
        let o = ai(this._headerRowOutlet, "thead");
        o && (o.style.display = t.length ? "" : "none");
      }
      let i = this._headerRowDefs.map((o) => o.sticky);
      this._stickyStyler.clearStickyPositioning(t, ["top"]),
        this._stickyStyler.stickRows(t, i, "top"),
        this._headerRowDefs.forEach((o) => o.resetStickyChanged());
    }
    updateStickyFooterRowStyles() {
      let t = this._getRenderedRows(this._footerRowOutlet);
      if (this._isNativeHtmlTable) {
        let o = ai(this._footerRowOutlet, "tfoot");
        o && (o.style.display = t.length ? "" : "none");
      }
      let i = this._footerRowDefs.map((o) => o.sticky);
      this._stickyStyler.clearStickyPositioning(t, ["bottom"]),
        this._stickyStyler.stickRows(t, i, "bottom"),
        this._stickyStyler.updateStickyFooterContainer(
          this._elementRef.nativeElement,
          i,
        ),
        this._footerRowDefs.forEach((o) => o.resetStickyChanged());
    }
    updateStickyColumnStyles() {
      let t = this._getRenderedRows(this._headerRowOutlet),
        i = this._getRenderedRows(this._rowOutlet),
        o = this._getRenderedRows(this._footerRowOutlet);
      ((this._isNativeHtmlTable && !this._fixedLayout) ||
        this._stickyColumnStylesNeedReset) &&
        (this._stickyStyler.clearStickyPositioning(
          [...t, ...i, ...o],
          ["left", "right"],
        ),
        (this._stickyColumnStylesNeedReset = !1)),
        t.forEach((s, a) => {
          this._addStickyColumnStyles([s], this._headerRowDefs[a]);
        }),
        this._rowDefs.forEach((s) => {
          let a = [];
          for (let h = 0; h < i.length; h++)
            this._renderRows[h].rowDef === s && a.push(i[h]);
          this._addStickyColumnStyles(a, s);
        }),
        o.forEach((s, a) => {
          this._addStickyColumnStyles([s], this._footerRowDefs[a]);
        }),
        Array.from(this._columnDefsByName.values()).forEach((s) =>
          s.resetStickyChanged(),
        );
    }
    _outletAssigned() {
      !this._hasAllOutlets &&
        this._rowOutlet &&
        this._headerRowOutlet &&
        this._footerRowOutlet &&
        this._noDataRowOutlet &&
        ((this._hasAllOutlets = !0), this._canRender() && this._render());
    }
    _canRender() {
      return this._hasAllOutlets && this._hasInitialized;
    }
    _render() {
      this._cacheRowDefs(),
        this._cacheColumnDefs(),
        !this._headerRowDefs.length &&
          !this._footerRowDefs.length &&
          this._rowDefs.length;
      let i =
        this._renderUpdatedColumns() ||
        this._headerRowDefChanged ||
        this._footerRowDefChanged;
      (this._stickyColumnStylesNeedReset =
        this._stickyColumnStylesNeedReset || i),
        (this._forceRecalculateCellWidths = i),
        this._headerRowDefChanged &&
          (this._forceRenderHeaderRows(), (this._headerRowDefChanged = !1)),
        this._footerRowDefChanged &&
          (this._forceRenderFooterRows(), (this._footerRowDefChanged = !1)),
        this.dataSource &&
        this._rowDefs.length > 0 &&
        !this._renderChangeSubscription
          ? this._observeRenderChanges()
          : this._stickyColumnStylesNeedReset &&
            this.updateStickyColumnStyles(),
        this._checkStickyStates();
    }
    _getAllRenderRows() {
      let t = [],
        i = this._cachedRenderRowsMap;
      this._cachedRenderRowsMap = new Map();
      for (let o = 0; o < this._data.length; o++) {
        let s = this._data[o],
          a = this._getRenderRowsForData(s, o, i.get(s));
        this._cachedRenderRowsMap.has(s) ||
          this._cachedRenderRowsMap.set(s, new WeakMap());
        for (let h = 0; h < a.length; h++) {
          let y = a[h],
            g = this._cachedRenderRowsMap.get(y.data);
          g.has(y.rowDef) ? g.get(y.rowDef).push(y) : g.set(y.rowDef, [y]),
            t.push(y);
        }
      }
      return t;
    }
    _getRenderRowsForData(t, i, o) {
      return this._getRowDefs(t, i).map((a) => {
        let h = o && o.has(a) ? o.get(a) : [];
        if (h.length) {
          let y = h.shift();
          return (y.dataIndex = i), y;
        } else return { data: t, rowDef: a, dataIndex: i };
      });
    }
    _cacheColumnDefs() {
      this._columnDefsByName.clear(),
        ve(
          this._getOwnDefs(this._contentColumnDefs),
          this._customColumnDefs,
        ).forEach((i) => {
          this._columnDefsByName.has(i.name),
            this._columnDefsByName.set(i.name, i);
        });
    }
    _cacheRowDefs() {
      (this._headerRowDefs = ve(
        this._getOwnDefs(this._contentHeaderRowDefs),
        this._customHeaderRowDefs,
      )),
        (this._footerRowDefs = ve(
          this._getOwnDefs(this._contentFooterRowDefs),
          this._customFooterRowDefs,
        )),
        (this._rowDefs = ve(
          this._getOwnDefs(this._contentRowDefs),
          this._customRowDefs,
        ));
      let t = this._rowDefs.filter((i) => !i.when);
      !this.multiTemplateDataRows && t.length > 1, (this._defaultRowDef = t[0]);
    }
    _renderUpdatedColumns() {
      let t = (a, h) => a || !!h.getColumnsDiff(),
        i = this._rowDefs.reduce(t, !1);
      i && this._forceRenderDataRows();
      let o = this._headerRowDefs.reduce(t, !1);
      o && this._forceRenderHeaderRows();
      let s = this._footerRowDefs.reduce(t, !1);
      return s && this._forceRenderFooterRows(), i || o || s;
    }
    _switchDataSource(t) {
      (this._data = []),
        _e(this.dataSource) && this.dataSource.disconnect(this),
        this._renderChangeSubscription &&
          (this._renderChangeSubscription.unsubscribe(),
          (this._renderChangeSubscription = null)),
        t ||
          (this._dataDiffer && this._dataDiffer.diff([]),
          this._rowOutlet && this._rowOutlet.viewContainer.clear()),
        (this._dataSource = t);
    }
    _observeRenderChanges() {
      if (!this.dataSource) return;
      let t;
      _e(this.dataSource)
        ? (t = this.dataSource.connect(this))
        : ut(this.dataSource)
          ? (t = this.dataSource)
          : Array.isArray(this.dataSource) && (t = ae(this.dataSource)),
        (this._renderChangeSubscription = t
          .pipe(X(this._onDestroy))
          .subscribe((i) => {
            (this._data = i || []), this.renderRows();
          }));
    }
    _forceRenderHeaderRows() {
      this._headerRowOutlet.viewContainer.length > 0 &&
        this._headerRowOutlet.viewContainer.clear(),
        this._headerRowDefs.forEach((t, i) =>
          this._renderRow(this._headerRowOutlet, t, i),
        ),
        this.updateStickyHeaderRowStyles();
    }
    _forceRenderFooterRows() {
      this._footerRowOutlet.viewContainer.length > 0 &&
        this._footerRowOutlet.viewContainer.clear(),
        this._footerRowDefs.forEach((t, i) =>
          this._renderRow(this._footerRowOutlet, t, i),
        ),
        this.updateStickyFooterRowStyles();
    }
    _addStickyColumnStyles(t, i) {
      let o = Array.from(i.columns || []).map((h) => {
          let y = this._columnDefsByName.get(h);
          return y;
        }),
        s = o.map((h) => h.sticky),
        a = o.map((h) => h.stickyEnd);
      this._stickyStyler.updateStickyColumns(
        t,
        s,
        a,
        !this._fixedLayout || this._forceRecalculateCellWidths,
      );
    }
    _getRenderedRows(t) {
      let i = [];
      for (let o = 0; o < t.viewContainer.length; o++) {
        let s = t.viewContainer.get(o);
        i.push(s.rootNodes[0]);
      }
      return i;
    }
    _getRowDefs(t, i) {
      if (this._rowDefs.length == 1) return [this._rowDefs[0]];
      let o = [];
      if (this.multiTemplateDataRows)
        o = this._rowDefs.filter((s) => !s.when || s.when(i, t));
      else {
        let s =
          this._rowDefs.find((a) => a.when && a.when(i, t)) ||
          this._defaultRowDef;
        s && o.push(s);
      }
      return o.length, o;
    }
    _getEmbeddedViewArgs(t, i) {
      let o = t.rowDef,
        s = { $implicit: t.data };
      return { templateRef: o.template, context: s, index: i };
    }
    _renderRow(t, i, o, s = {}) {
      let a = t.viewContainer.createEmbeddedView(i.template, s, o);
      return this._renderCellTemplateForItem(i, s), a;
    }
    _renderCellTemplateForItem(t, i) {
      for (let o of this._getCellTemplates(t))
        Y.mostRecentCellOutlet &&
          Y.mostRecentCellOutlet._viewContainer.createEmbeddedView(o, i);
      this._changeDetectorRef.markForCheck();
    }
    _updateRowIndexContext() {
      let t = this._rowOutlet.viewContainer;
      for (let i = 0, o = t.length; i < o; i++) {
        let a = t.get(i).context;
        (a.count = o),
          (a.first = i === 0),
          (a.last = i === o - 1),
          (a.even = i % 2 === 0),
          (a.odd = !a.even),
          this.multiTemplateDataRows
            ? ((a.dataIndex = this._renderRows[i].dataIndex),
              (a.renderIndex = i))
            : (a.index = this._renderRows[i].dataIndex);
      }
    }
    _getCellTemplates(t) {
      return !t || !t.columns
        ? []
        : Array.from(t.columns, (i) => {
            let o = this._columnDefsByName.get(i);
            return t.extractCellTemplate(o);
          });
    }
    _forceRenderDataRows() {
      this._dataDiffer.diff([]),
        this._rowOutlet.viewContainer.clear(),
        this.renderRows();
    }
    _checkStickyStates() {
      let t = (i, o) => i || o.hasStickyChanged();
      this._headerRowDefs.reduce(t, !1) && this.updateStickyHeaderRowStyles(),
        this._footerRowDefs.reduce(t, !1) && this.updateStickyFooterRowStyles(),
        Array.from(this._columnDefsByName.values()).reduce(t, !1) &&
          ((this._stickyColumnStylesNeedReset = !0),
          this.updateStickyColumnStyles());
    }
    _setupStickyStyler() {
      let t = this._dir ? this._dir.value : "ltr";
      (this._stickyStyler = new $e(
        this._isNativeHtmlTable,
        this.stickyCssClass,
        t,
        this._coalescedStyleScheduler,
        this._platform.isBrowser,
        this.needsPositionStickyOnElement,
        this._stickyPositioningListener,
      )),
        (this._dir ? this._dir.change : ae())
          .pipe(X(this._onDestroy))
          .subscribe((i) => {
            (this._stickyStyler.direction = i), this.updateStickyColumnStyles();
          });
    }
    _getOwnDefs(t) {
      return t.filter((i) => !i._table || i._table === this);
    }
    _updateNoDataRow() {
      let t = this._customNoDataRow || this._noDataRow;
      if (!t) return;
      let i = this._rowOutlet.viewContainer.length === 0;
      if (i === this._isShowingNoDataRow) return;
      let o = this._noDataRowOutlet.viewContainer;
      if (i) {
        let s = o.createEmbeddedView(t.templateRef),
          a = s.rootNodes[0];
        s.rootNodes.length === 1 &&
          a?.nodeType === this._document.ELEMENT_NODE &&
          (a.setAttribute("role", "row"), a.classList.add(t._contentClassName));
      } else o.clear();
      (this._isShowingNoDataRow = i), this._changeDetectorRef.markForCheck();
    }
  };
  (e.ɵfac = function (i) {
    return new (i || e)(
      d(ie),
      d(Et),
      d(q),
      gt("role"),
      d(Pt, 8),
      d(It),
      d(Nt),
      d(le),
      d(be),
      d(jt),
      d(ke, 12),
      d(se, 8),
    );
  }),
    (e.ɵcmp = C({
      type: e,
      selectors: [["cdk-table"], ["table", "cdk-table", ""]],
      contentQueries: function (i, o, s) {
        if (
          (i & 1 &&
            (H(s, di, 5), H(s, oe, 5), H(s, Ie, 5), H(s, de, 5), H(s, Ge, 5)),
          i & 2)
        ) {
          let a;
          L((a = B())) && (o._noDataRow = a.first),
            L((a = B())) && (o._contentColumnDefs = a),
            L((a = B())) && (o._contentRowDefs = a),
            L((a = B())) && (o._contentHeaderRowDefs = a),
            L((a = B())) && (o._contentFooterRowDefs = a);
        }
      },
      hostAttrs: [1, "cdk-table"],
      hostVars: 2,
      hostBindings: function (i, o) {
        i & 2 && me("cdk-table-fixed-layout", o.fixedLayout);
      },
      inputs: {
        trackBy: "trackBy",
        dataSource: "dataSource",
        multiTemplateDataRows: [
          _.HasDecoratorInputTransform,
          "multiTemplateDataRows",
          "multiTemplateDataRows",
          z,
        ],
        fixedLayout: [
          _.HasDecoratorInputTransform,
          "fixedLayout",
          "fixedLayout",
          z,
        ],
      },
      outputs: { contentChanged: "contentChanged" },
      exportAs: ["cdkTable"],
      standalone: !0,
      features: [
        T([
          { provide: O, useExisting: e },
          { provide: le, useClass: ye },
          { provide: be, useClass: We },
          { provide: ke, useValue: null },
        ]),
        G,
        D,
      ],
      ngContentSelectors: wi,
      decls: 5,
      vars: 2,
      consts: [
        ["role", "rowgroup"],
        ["headerRowOutlet", ""],
        ["rowOutlet", ""],
        ["noDataRowOutlet", ""],
        ["footerRowOutlet", ""],
      ],
      template: function (i, o) {
        i & 1 &&
          (pe(yi), Q(0), Q(1, 1), m(2, Ci, 1, 0)(3, Di, 7, 0)(4, vi, 4, 0)),
          i & 2 &&
            (f(2),
            v(2, o._isServer ? 2 : -1),
            f(),
            v(3, o._isNativeHtmlTable ? 3 : 4));
      },
      dependencies: [Je, Xe, tt, et],
      styles: [".cdk-table-fixed-layout{table-layout:fixed}"],
      encapsulation: 2,
    }));
  let n = e;
  return n;
})();
function ve(n, e) {
  return n.concat(Array.from(e));
}
function ai(n, e) {
  let r = e.toUpperCase(),
    t = n.viewContainer.element.nativeElement;
  for (; t; ) {
    let i = t.nodeType === 1 ? t.nodeName : null;
    if (i === r) return t;
    if (i === "TABLE") break;
    t = t.parentNode;
  }
  return null;
}
var Ri = [[["caption"]], [["colgroup"], ["col"]], "*"],
  Si = ["caption", "colgroup, col", "*"];
function bi(n, e) {
  n & 1 && Q(0, 2);
}
function ki(n, e) {
  n & 1 &&
    (c(0, "thead", 0),
    b(1, 1),
    l(),
    c(2, "tbody", 2),
    b(3, 3)(4, 4),
    l(),
    c(5, "tfoot", 0),
    b(6, 5),
    l());
}
function xi(n, e) {
  n & 1 && b(0, 1)(1, 3)(2, 4)(3, 5);
}
var Fe = (() => {
    let e = class e extends it {
      constructor() {
        super(...arguments),
          (this.stickyCssClass = "mat-mdc-table-sticky"),
          (this.needsPositionStickyOnElement = !1);
      }
    };
    (e.ɵfac = (() => {
      let t;
      return function (o) {
        return (t || (t = x(e)))(o || e);
      };
    })()),
      (e.ɵcmp = C({
        type: e,
        selectors: [["mat-table"], ["table", "mat-table", ""]],
        hostAttrs: [1, "mat-mdc-table", "mdc-data-table__table"],
        hostVars: 2,
        hostBindings: function (i, o) {
          i & 2 && me("mdc-table-fixed-layout", o.fixedLayout);
        },
        exportAs: ["matTable"],
        standalone: !0,
        features: [
          T([
            { provide: it, useExisting: e },
            { provide: O, useExisting: e },
            { provide: be, useClass: We },
            { provide: le, useClass: ye },
            { provide: ke, useValue: null },
          ]),
          w,
          D,
        ],
        ngContentSelectors: Si,
        decls: 5,
        vars: 2,
        consts: [
          ["role", "rowgroup"],
          ["headerRowOutlet", ""],
          ["role", "rowgroup", 1, "mdc-data-table__content"],
          ["rowOutlet", ""],
          ["noDataRowOutlet", ""],
          ["footerRowOutlet", ""],
        ],
        template: function (i, o) {
          i & 1 &&
            (pe(Ri), Q(0), Q(1, 1), m(2, bi, 1, 0)(3, ki, 7, 0)(4, xi, 4, 0)),
            i & 2 &&
              (f(2),
              v(2, o._isServer ? 2 : -1),
              f(),
              v(3, o._isNativeHtmlTable ? 3 : 4));
        },
        dependencies: [Je, Xe, tt, et],
        styles: [
          ".mat-mdc-table-sticky{position:sticky !important}.mdc-data-table{-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__header-cell{box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color)}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, rgba(0, 0, 0, 0.87));font-family:var(--mat-table-header-headline-font, Roboto, sans-serif);line-height:var(--mat-table-header-headline-line-height);font-size:var(--mat-table-header-headline-size, 14px);font-weight:var(--mat-table-header-headline-weight, 500)}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, 0.87))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, Roboto, sans-serif);line-height:var(--mat-table-row-item-label-text-line-height);font-size:var(--mat-table-row-item-label-text-size, 14px);font-weight:var(--mat-table-row-item-label-text-weight)}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, 0.87));font-family:var(--mat-table-footer-supporting-text-font, Roboto, sans-serif);line-height:var(--mat-table-footer-supporting-text-line-height);font-size:var(--mat-table-footer-supporting-text-size, 14px);font-weight:var(--mat-table-footer-supporting-text-weight);letter-spacing:var(--mat-table-footer-supporting-text-tracking)}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, 0.12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking);font-weight:inherit;line-height:inherit}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, 0.12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking);line-height:inherit}.mdc-data-table__row:last-child .mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking)}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}",
        ],
        encapsulation: 2,
      }));
    let n = e;
    return n;
  })(),
  Te = (() => {
    let e = class e extends xe {};
    (e.ɵfac = (() => {
      let t;
      return function (o) {
        return (t || (t = x(e)))(o || e);
      };
    })()),
      (e.ɵdir = p({
        type: e,
        selectors: [["", "matCellDef", ""]],
        standalone: !0,
        features: [T([{ provide: xe, useExisting: e }]), w],
      }));
    let n = e;
    return n;
  })(),
  Me = (() => {
    let e = class e extends Ee {};
    (e.ɵfac = (() => {
      let t;
      return function (o) {
        return (t || (t = x(e)))(o || e);
      };
    })()),
      (e.ɵdir = p({
        type: e,
        selectors: [["", "matHeaderCellDef", ""]],
        standalone: !0,
        features: [T([{ provide: Ee, useExisting: e }]), w],
      }));
    let n = e;
    return n;
  })();
var Oe = (() => {
    let e = class e extends oe {
      get name() {
        return this._name;
      }
      set name(t) {
        this._setNameInput(t);
      }
      _updateColumnCssClassName() {
        super._updateColumnCssClassName(),
          this._columnCssClassName.push(
            `mat-column-${this.cssClassFriendlyName}`,
          );
      }
    };
    (e.ɵfac = (() => {
      let t;
      return function (o) {
        return (t || (t = x(e)))(o || e);
      };
    })()),
      (e.ɵdir = p({
        type: e,
        selectors: [["", "matColumnDef", ""]],
        inputs: { name: [_.None, "matColumnDef", "name"] },
        standalone: !0,
        features: [
          T([
            { provide: oe, useExisting: e },
            { provide: "MAT_SORT_HEADER_COLUMN_DEF", useExisting: e },
          ]),
          w,
        ],
      }));
    let n = e;
    return n;
  })(),
  Ne = (() => {
    let e = class e extends li {};
    (e.ɵfac = (() => {
      let t;
      return function (o) {
        return (t || (t = x(e)))(o || e);
      };
    })()),
      (e.ɵdir = p({
        type: e,
        selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
        hostAttrs: [
          "role",
          "columnheader",
          1,
          "mat-mdc-header-cell",
          "mdc-data-table__header-cell",
        ],
        standalone: !0,
        features: [w],
      }));
    let n = e;
    return n;
  })();
var Pe = (() => {
  let e = class e extends ci {};
  (e.ɵfac = (() => {
    let t;
    return function (o) {
      return (t || (t = x(e)))(o || e);
    };
  })()),
    (e.ɵdir = p({
      type: e,
      selectors: [["mat-cell"], ["td", "mat-cell", ""]],
      hostAttrs: [1, "mat-mdc-cell", "mdc-data-table__cell"],
      standalone: !0,
      features: [w],
    }));
  let n = e;
  return n;
})();
var Ae = (() => {
  let e = class e extends de {};
  (e.ɵfac = (() => {
    let t;
    return function (o) {
      return (t || (t = x(e)))(o || e);
    };
  })()),
    (e.ɵdir = p({
      type: e,
      selectors: [["", "matHeaderRowDef", ""]],
      inputs: {
        columns: [_.None, "matHeaderRowDef", "columns"],
        sticky: [
          _.HasDecoratorInputTransform,
          "matHeaderRowDefSticky",
          "sticky",
          z,
        ],
      },
      standalone: !0,
      features: [T([{ provide: de, useExisting: e }]), G, w],
    }));
  let n = e;
  return n;
})();
var je = (() => {
    let e = class e extends Ie {};
    (e.ɵfac = (() => {
      let t;
      return function (o) {
        return (t || (t = x(e)))(o || e);
      };
    })()),
      (e.ɵdir = p({
        type: e,
        selectors: [["", "matRowDef", ""]],
        inputs: {
          columns: [_.None, "matRowDefColumns", "columns"],
          when: [_.None, "matRowDefWhen", "when"],
        },
        standalone: !0,
        features: [T([{ provide: Ie, useExisting: e }]), w],
      }));
    let n = e;
    return n;
  })(),
  He = (() => {
    let e = class e extends Ke {};
    (e.ɵfac = (() => {
      let t;
      return function (o) {
        return (t || (t = x(e)))(o || e);
      };
    })()),
      (e.ɵcmp = C({
        type: e,
        selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
        hostAttrs: [
          "role",
          "row",
          1,
          "mat-mdc-header-row",
          "mdc-data-table__header-row",
        ],
        exportAs: ["matHeaderRow"],
        standalone: !0,
        features: [T([{ provide: Ke, useExisting: e }]), w, D],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function (i, o) {
          i & 1 && b(0, 0);
        },
        dependencies: [Y],
        encapsulation: 2,
      }));
    let n = e;
    return n;
  })();
var Le = (() => {
  let e = class e extends Ye {};
  (e.ɵfac = (() => {
    let t;
    return function (o) {
      return (t || (t = x(e)))(o || e);
    };
  })()),
    (e.ɵcmp = C({
      type: e,
      selectors: [["mat-row"], ["tr", "mat-row", ""]],
      hostAttrs: ["role", "row", 1, "mat-mdc-row", "mdc-data-table__row"],
      exportAs: ["matRow"],
      standalone: !0,
      features: [T([{ provide: Ye, useExisting: e }]), w, D],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function (i, o) {
        i & 1 && b(0, 0);
      },
      dependencies: [Y],
      encapsulation: 2,
    }));
  let n = e;
  return n;
})();
function Ei(n, e) {
  n & 1 && (c(0, "th", 10), u(1, "From"), l());
}
function Ii(n, e) {
  if ((n & 1 && (c(0, "td", 11), u(1), l()), n & 2)) {
    let r = e.$implicit;
    f(), vt(" ", r.address.firstName, " ", r.address.firstName, " ");
  }
}
function Fi(n, e) {
  n & 1 && (c(0, "th", 10), u(1, "Count"), l());
}
function Ti(n, e) {
  if ((n & 1 && (c(0, "td", 11), u(1), l()), n & 2)) {
    let r = e.$implicit;
    f(), $(r.items.length);
  }
}
function Mi(n, e) {
  n & 1 && (c(0, "th", 10), u(1, "Address"), l());
}
function Oi(n, e) {
  if ((n & 1 && (c(0, "td", 11), u(1), l()), n & 2)) {
    let r = e.$implicit;
    f(), $(r.address.address);
  }
}
function Ni(n, e) {
  n & 1 && (c(0, "th", 10), u(1, "Status"), l());
}
function Pi(n, e) {
  if ((n & 1 && (c(0, "td", 11), u(1), l()), n & 2)) {
    let r = e.$implicit;
    f(), $(r.items.length);
  }
}
function Ai(n, e) {
  n & 1 && (c(0, "th", 10), u(1, "Action"), l());
}
function ji(n, e) {
  if ((n & 1 && (c(0, "td", 11), u(1), l()), n & 2)) {
    let r = e.$implicit;
    f(), $(r.items.length);
  }
}
function Hi(n, e) {
  n & 1 && F(0, "tr", 12);
}
function Li(n, e) {
  n & 1 && F(0, "tr", 13);
}
var ui = (() => {
  let e = class e {
    constructor() {
      (this.columns = ["from", "count", "address", "status", "action"]),
        (this.orders = Ce(I(De).getOrders(), { initialValue: [] }));
    }
  };
  (e.ɵfac = function (i) {
    return new (i || e)();
  }),
    (e.ɵcmp = C({
      type: e,
      selectors: [["app-orders"]],
      standalone: !0,
      features: [D],
      decls: 20,
      vars: 3,
      consts: [
        ["mat-table", "", 1, "w-100", 3, "dataSource"],
        ["matColumnDef", "from"],
        ["mat-header-cell", "", 4, "matHeaderCellDef"],
        ["mat-cell", "", 4, "matCellDef"],
        ["matColumnDef", "count"],
        ["matColumnDef", "address"],
        ["matColumnDef", "status"],
        ["matColumnDef", "action"],
        ["mat-header-row", "", 4, "matHeaderRowDef"],
        ["mat-row", "", 4, "matRowDef", "matRowDefColumns"],
        ["mat-header-cell", ""],
        ["mat-cell", ""],
        ["mat-header-row", ""],
        ["mat-row", ""],
      ],
      template: function (i, o) {
        i & 1 &&
          (c(0, "h1"),
          u(1, "Manage orders"),
          l(),
          c(2, "table", 0),
          R(3, 1),
          m(4, Ei, 2, 0, "th", 2)(5, Ii, 2, 2, "td", 3),
          S(),
          R(6, 4),
          m(7, Fi, 2, 0, "th", 2)(8, Ti, 2, 1, "td", 3),
          S(),
          R(9, 5),
          m(10, Mi, 2, 0, "th", 2)(11, Oi, 2, 1, "td", 3),
          S(),
          R(12, 6),
          m(13, Ni, 2, 0, "th", 2)(14, Pi, 2, 1, "td", 3),
          S(),
          R(15, 7),
          m(16, Ai, 2, 0, "th", 2)(17, ji, 2, 1, "td", 3),
          S(),
          m(18, Hi, 1, 0, "tr", 8)(19, Li, 1, 0, "tr", 9),
          l()),
          i & 2 &&
            (f(2),
            E("dataSource", o.orders()),
            f(16),
            E("matHeaderRowDef", o.columns),
            f(),
            E("matRowDefColumns", o.columns));
      },
      dependencies: [Fe, Oe, Me, Ne, Te, Pe, Ae, He, je, Le],
      changeDetection: 0,
    }));
  let n = e;
  return n;
})();
var Be = (() => {
  let e = class e extends Lt {
    uploadProductsCSV(t) {
      return this.endpointEnabled("import")
        ? this.getPreSignedUrl(t.name).pipe(
            mt((i) =>
              this.http.put(i, t, { headers: { "Content-Type": "text/csv" } }),
            ),
          )
        : (console.warn(
            'Endpoint "import" is disabled. To enable change your environment.ts config',
          ),
          ct);
    }
    getPreSignedUrl(t) {
      let i = this.getUrl("import", "import");
      return this.http.get(i, { params: { name: t } });
    }
  };
  (e.ɵfac = (() => {
    let t;
    return function (o) {
      return (t || (t = x(e)))(o || e);
    };
  })()),
    (e.ɵprov = J({ token: e, factory: e.ɵfac }));
  let n = e;
  return n;
})();
function Bi(n, e) {
  if (n & 1) {
    let r = te();
    c(0, "span", 3),
      u(1),
      l(),
      c(2, "button", 4),
      A("click", function () {
        W(r);
        let i = j();
        return Z(i.uploadClick.emit());
      }),
      u(3, " Upload "),
      l(),
      c(4, "button", 5),
      A("click", function () {
        W(r);
        let i = j();
        return Z(i.removeFile());
      }),
      u(5, "Delete"),
      l();
  }
  n & 2 && (f(), V("Selected file: ", e.name, ""));
}
function Vi(n, e) {
  if (n & 1) {
    let r = te();
    c(0, "span", 3),
      u(1, "Select file to upload"),
      l(),
      c(2, "button", 6),
      A("click", function () {
        W(r), j();
        let i = qe(1);
        return Z(i.click());
      }),
      u(3, " Import Products CSV "),
      l();
  }
}
var fi = (() => {
  let e = class e {
    constructor() {
      (this.uploadClick = yt()), (this.file = Dt());
    }
    selectFile(t) {
      if (!t?.length) {
        this.removeFile();
        return;
      }
      let i = t.item(0);
      if (!["text/csv", "application/vnd.ms-excel"].includes(i.type)) {
        this.removeFile();
        return;
      }
      this.file.set(i);
    }
    removeFile() {
      this.file.set(void 0);
    }
  };
  (e.ɵfac = function (i) {
    return new (i || e)();
  }),
    (e.ɵcmp = C({
      type: e,
      selectors: [["app-file-picker"]],
      inputs: { file: [_.SignalBased, "file"] },
      outputs: { uploadClick: "uploadClick", file: "fileChange" },
      standalone: !0,
      features: [D],
      decls: 5,
      vars: 1,
      consts: [
        ["fileInput", ""],
        ["accept", "text/csv", "type", "file", 1, "d-none", 3, "change"],
        [1, "h5", "mb-0", "text-muted", "d-flex", "align-items-center"],
        [1, "mr-3"],
        ["color", "primary", "mat-flat-button", "", 1, "mr-1", 3, "click"],
        ["color", "warn", "mat-flat-button", "", 3, "click"],
        ["color", "accent", "mat-flat-button", "", 3, "click"],
      ],
      template: function (i, o) {
        if (i & 1) {
          let s = te();
          c(0, "input", 1, 0),
            A("change", function () {
              W(s);
              let h = qe(1);
              return Z(o.selectFile(h.files));
            }),
            l(),
            c(2, "div", 2),
            m(3, Bi, 6, 1)(4, Vi, 4, 0),
            l();
        }
        if (i & 2) {
          let s;
          f(3), v(3, (s = o.file()) ? 3 : 4, s);
        }
      },
      dependencies: [ne],
    }));
  let n = e;
  return n;
})();
function zi(n, e) {
  n & 1 && (c(0, "th", 13), u(1, "Title"), l());
}
function Ui(n, e) {
  if ((n & 1 && (c(0, "td", 14), u(1), l()), n & 2)) {
    let r = e.$implicit;
    f(), V(" ", r.title, " ");
  }
}
function qi(n, e) {
  n & 1 && (c(0, "th", 13), u(1, "Description"), l());
}
function Qi(n, e) {
  if ((n & 1 && (c(0, "td", 14), u(1), l()), n & 2)) {
    let r = e.$implicit;
    f(), $(r.description);
  }
}
function $i(n, e) {
  n & 1 && (c(0, "th", 13), u(1, "Price"), l());
}
function Wi(n, e) {
  if (
    (n & 1 && (c(0, "td", 14), u(1), Qe(2, "number"), Qe(3, "currency"), l()),
    n & 2)
  ) {
    let r = e.$implicit;
    f(), V(" ", kt(3, 4, xt(2, 1, r.price, "1.2-2")), " ");
  }
}
function Zi(n, e) {
  n & 1 && (c(0, "th", 13), u(1, "Count"), l());
}
function Gi(n, e) {
  if ((n & 1 && (c(0, "td", 14), u(1), l()), n & 2)) {
    let r = e.$implicit;
    f(), $(r.count);
  }
}
function Ki(n, e) {
  n & 1 && (c(0, "th", 13), u(1, "Action"), l());
}
function Yi(n, e) {
  if (
    (n & 1 &&
      (c(0, "td", 14)(1, "button", 15),
      u(2, " manage "),
      l(),
      c(3, "button", 16),
      u(4, " delete "),
      l()()),
    n & 2)
  ) {
    let r = e.$implicit;
    f(), E("routerLink", r.id);
  }
}
function Xi(n, e) {
  n & 1 && F(0, "tr", 17);
}
function Ji(n, e) {
  n & 1 && F(0, "tr", 18);
}
var hi = (() => {
  let e = class e {
    constructor() {
      (this.productsService = I(we)),
        (this.manageProductsService = I(Be)),
        (this.columns = ["from", "description", "price", "count", "action"]),
        (this.selectedFile = he(void 0)),
        (this.products = Ce(this.productsService.getProducts(), {
          initialValue: [],
        }));
    }
    onUploadCSV() {
      let t = this.selectedFile();
      t &&
        this.manageProductsService.uploadProductsCSV(t).subscribe(() => {
          this.selectedFile.set(void 0);
        });
    }
  };
  (e.ɵfac = function (i) {
    return new (i || e)();
  }),
    (e.ɵcmp = C({
      type: e,
      selectors: [["app-manage-products"]],
      standalone: !0,
      features: [D],
      decls: 24,
      vars: 4,
      consts: [
        [1, "d-flex"],
        [1, "mr-2", 3, "fileChange", "uploadClick", "file"],
        [
          "color",
          "primary",
          "mat-flat-button",
          "",
          "routerLink",
          "new",
          1,
          "text-uppercase",
        ],
        ["mat-table", "", 1, "w-100", 3, "dataSource"],
        ["matColumnDef", "from"],
        ["mat-header-cell", "", 4, "matHeaderCellDef"],
        ["mat-cell", "", 4, "matCellDef"],
        ["matColumnDef", "description"],
        ["matColumnDef", "price"],
        ["matColumnDef", "count"],
        ["matColumnDef", "action"],
        ["mat-header-row", "", 4, "matHeaderRowDef"],
        ["mat-row", "", 4, "matRowDef", "matRowDefColumns"],
        ["mat-header-cell", ""],
        ["mat-cell", ""],
        [
          "color",
          "primary",
          "mat-flat-button",
          "",
          1,
          "text-uppercase",
          "mr-2",
          3,
          "routerLink",
        ],
        ["color", "warn", "mat-flat-button", "", 1, "text-uppercase"],
        ["mat-header-row", ""],
        ["mat-row", ""],
      ],
      template: function (i, o) {
        i & 1 &&
          (c(0, "h1"),
          u(1, "Manage products"),
          l(),
          c(2, "div", 0)(3, "app-file-picker", 1),
          bt("fileChange", function (a) {
            return St(o.selectedFile, a) || (o.selectedFile = a), a;
          }),
          A("uploadClick", function () {
            return o.onUploadCSV();
          }),
          l(),
          c(4, "button", 2),
          u(5, " create product "),
          l()(),
          c(6, "table", 3),
          R(7, 4),
          m(8, zi, 2, 0, "th", 5)(9, Ui, 2, 1, "td", 6),
          S(),
          R(10, 7),
          m(11, qi, 2, 0, "th", 5)(12, Qi, 2, 1, "td", 6),
          S(),
          R(13, 8),
          m(14, $i, 2, 0, "th", 5)(15, Wi, 4, 6, "td", 6),
          S(),
          R(16, 9),
          m(17, Zi, 2, 0, "th", 5)(18, Gi, 2, 1, "td", 6),
          S(),
          R(19, 10),
          m(20, Ki, 2, 0, "th", 5)(21, Yi, 5, 1, "td", 6),
          S(),
          m(22, Xi, 1, 0, "tr", 11)(23, Ji, 1, 0, "tr", 12),
          l()),
          i & 2 &&
            (f(3),
            Rt("file", o.selectedFile),
            f(3),
            E("dataSource", o.products()),
            f(16),
            E("matHeaderRowDef", o.columns),
            f(),
            E("matRowDefColumns", o.columns));
      },
      dependencies: [
        fi,
        ne,
        ge,
        Fe,
        Oe,
        Me,
        Ne,
        Te,
        Pe,
        Ae,
        He,
        je,
        Le,
        Ft,
        Tt,
      ],
      changeDetection: 0,
    }));
  let n = e;
  return n;
})();
function en(n, e) {
  n & 1 && (c(0, "mat-error"), u(1, " Product title is required "), l());
}
function tn(n, e) {
  n & 1 && (c(0, "mat-error"), u(1, " Product description is required "), l());
}
function nn(n, e) {
  n & 1 && (c(0, "mat-error"), u(1, " Product price is required "), l());
}
function on(n, e) {
  n & 1 && (c(0, "mat-error"), u(1, " Product count is required "), l());
}
function rn(n, e) {
  if (n & 1) {
    let r = te();
    c(0, "mat-card")(1, "h1", 0),
      u(2),
      l(),
      c(3, "mat-card-content")(4, "form", 1)(5, "div", 2)(
        6,
        "mat-form-field",
        3,
      )(7, "mat-label"),
      u(8, "Title"),
      l(),
      F(9, "input", 4),
      m(10, en, 2, 0, "mat-error"),
      l()(),
      c(11, "div", 2)(12, "mat-form-field", 3)(13, "mat-label"),
      u(14, "Description"),
      l(),
      F(15, "textarea", 5),
      m(16, tn, 2, 0, "mat-error"),
      l()(),
      c(17, "div", 6)(18, "mat-form-field", 3)(19, "mat-label"),
      u(20, "Price ($)"),
      l(),
      F(21, "input", 7),
      m(22, nn, 2, 0, "mat-error"),
      l()(),
      c(23, "div", 6)(24, "mat-form-field", 3)(25, "mat-label"),
      u(26, "Count"),
      l(),
      F(27, "input", 8),
      m(28, on, 2, 0, "mat-error"),
      l()()()(),
      c(29, "mat-card-actions")(30, "button", 9),
      u(31, " cancel "),
      l(),
      c(32, "button", 10),
      A("click", function () {
        W(r);
        let i = j();
        return Z(i.editProduct());
      }),
      u(33, " save product "),
      l()()();
  }
  if (n & 2) {
    let r = j();
    f(2),
      V(" ", r.productId() ? "Edit product" : "Create new product", " "),
      f(2),
      E("formGroup", r.form),
      f(6),
      v(10, r.titleCtrl.touched && r.titleCtrl.hasError("required") ? 10 : -1),
      f(6),
      v(
        16,
        r.descriptionCtrl.touched && r.descriptionCtrl.hasError("required")
          ? 16
          : -1,
      ),
      f(6),
      v(22, r.priceCtrl.touched && r.priceCtrl.hasError("required") ? 22 : -1),
      f(6),
      v(28, r.countCtrl.touched && r.countCtrl.hasError("required") ? 28 : -1),
      f(4),
      E("disabled", r.form.invalid || r.requestInProgress);
  }
}
function an(n, e) {
  n & 1 && (c(0, "div", 11), F(1, "mat-spinner", 12), l()),
    n & 2 && (f(), E("diameter", 40));
}
var nt = (() => {
  var e;
  let r = class r {
    constructor(i, o, s, a, h) {
      at(this, e, void 0);
      (this.activatedRoute = i),
        (this.fb = o),
        (this.notificationService = s),
        (this.productsService = a),
        (this.router = h),
        st(this, e, I(_t)),
        (this.productId = wt()),
        (this.form = this.fb.group({
          title: ["", ce.required],
          description: ["", ce.required],
          price: ["", ce.required],
          count: ["", ce.required],
        })),
        (this.requestInProgress = !1),
        (this.loaded = he(!1));
    }
    get countCtrl() {
      return this.form.get("count");
    }
    get descriptionCtrl() {
      return this.form.get("description");
    }
    get priceCtrl() {
      return this.form.get("price");
    }
    get titleCtrl() {
      return this.form.get("title");
    }
    ngOnInit() {
      let i = this.productId();
      if (!i) {
        this.loaded.set(!0);
        return;
      }
      this.productsService
        .getProductById(i)
        .pipe(
          ht(() => this.loaded.set(!0)),
          ft(Boolean),
          qt(rt(this, e)),
        )
        .subscribe((o) => {
          this.form.patchValue(o);
        });
    }
    editProduct() {
      let i = this.form.value;
      if (!i) return;
      let o = this.productId(),
        s = o
          ? this.productsService.editProduct(o, i)
          : this.productsService.createNewProduct(i);
      (this.requestInProgress = !0),
        s.subscribe({
          next: () =>
            this.router.navigate(["../"], { relativeTo: this.activatedRoute }),
          error: (a) => {
            console.warn(a),
              (this.requestInProgress = !1),
              this.notificationService.showError(
                `Failed to ${this.productId() ? "edit" : "create"} product`,
              );
          },
        });
    }
  };
  (e = new WeakMap()),
    (r.ɵfac = function (o) {
      return new (o || r)(d(Mt), d(Xt), d(Ht), d(we), d(Ot));
    }),
    (r.ɵcmp = C({
      type: r,
      selectors: [["app-edit-product"]],
      inputs: { productId: [_.SignalBased, "productId"] },
      standalone: !0,
      features: [D],
      decls: 2,
      vars: 1,
      consts: [
        ["mat-card-title", "", 1, "text-center", "pt-4"],
        [1, "row", 3, "formGroup"],
        [1, "col-12"],
        [1, "w-100"],
        ["matInput", "", "formControlName", "title"],
        ["matInput", "", "formControlName", "description"],
        [1, "col", "col-md-6"],
        ["type", "number", "matInput", "", "formControlName", "price"],
        ["type", "number", "matInput", "", "formControlName", "count"],
        [
          "mat-flat-button",
          "",
          "routerLink",
          "..",
          1,
          "text-uppercase",
          "mr-2",
        ],
        [
          "color",
          "primary",
          "mat-flat-button",
          "",
          1,
          "text-uppercase",
          3,
          "click",
          "disabled",
        ],
        [1, "py-5"],
        [1, "mx-auto", 3, "diameter"],
      ],
      template: function (o, s) {
        o & 1 && m(0, rn, 34, 7, "mat-card")(1, an, 2, 1),
          o & 2 && v(0, s.loaded() ? 0 : 1);
      },
      dependencies: [
        Bt,
        Vt,
        zt,
        Jt,
        Zt,
        Qt,
        Gt,
        $t,
        Wt,
        Kt,
        Yt,
        ii,
        ei,
        ni,
        ti,
        Ut,
        ne,
        ge,
        oi,
      ],
      changeDetection: 0,
    }));
  let n = r;
  return n;
})();
var Zo = [
  {
    path: "",
    children: [
      { path: "orders", component: ui },
      { path: "products", component: hi },
      { path: "products/new", component: nt },
      { path: "products/:productId", component: nt },
    ],
    providers: [De, Be],
  },
];
export { Zo as default };
