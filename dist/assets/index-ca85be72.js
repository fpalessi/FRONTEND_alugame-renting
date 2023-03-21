function mh(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l &&
            Object.defineProperty(
              e,
              o,
              l.get ? l : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerpolicy && (l.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function sd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function vh(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      if (this instanceof r) {
        var o = [null];
        o.push.apply(o, arguments);
        var l = Function.bind.apply(t, o);
        return new l();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Wr = {},
  gh = {
    get exports() {
      return Wr;
    },
    set exports(e) {
      Wr = e;
    },
  },
  Ql = {},
  C = {},
  yh = {
    get exports() {
      return C;
    },
    set exports(e) {
      C = e;
    },
  },
  H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var po = Symbol.for("react.element"),
  wh = Symbol.for("react.portal"),
  Sh = Symbol.for("react.fragment"),
  Ch = Symbol.for("react.strict_mode"),
  Eh = Symbol.for("react.profiler"),
  xh = Symbol.for("react.provider"),
  kh = Symbol.for("react.context"),
  Nh = Symbol.for("react.forward_ref"),
  Oh = Symbol.for("react.suspense"),
  _h = Symbol.for("react.memo"),
  Th = Symbol.for("react.lazy"),
  gu = Symbol.iterator;
function Ph(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (gu && e[gu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ud = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  cd = Object.assign,
  dd = {};
function lr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = dd),
    (this.updater = n || ud);
}
lr.prototype.isReactComponent = {};
lr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
lr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function fd() {}
fd.prototype = lr.prototype;
function ds(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = dd),
    (this.updater = n || ud);
}
var fs = (ds.prototype = new fd());
fs.constructor = ds;
cd(fs, lr.prototype);
fs.isPureReactComponent = !0;
var yu = Array.isArray,
  pd = Object.prototype.hasOwnProperty,
  ps = { current: null },
  hd = { key: !0, ref: !0, __self: !0, __source: !0 };
function md(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      pd.call(t, r) && !hd.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: po,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: ps.current,
  };
}
function Rh(e, t) {
  return {
    $$typeof: po,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function hs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === po;
}
function Mh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var wu = /\/+/g;
function Ei(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Mh("" + e.key)
    : t.toString(36);
}
function Wo(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case po:
          case wh:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + Ei(i, 0) : r),
      yu(o)
        ? ((n = ""),
          e != null && (n = e.replace(wu, "$&/") + "/"),
          Wo(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (hs(o) &&
            (o = Rh(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(wu, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), yu(e)))
    for (var a = 0; a < e.length; a++) {
      l = e[a];
      var s = r + Ei(l, a);
      i += Wo(l, t, n, s, o);
    }
  else if (((s = Ph(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(l = e.next()).done; )
      (l = l.value), (s = r + Ei(l, a++)), (i += Wo(l, t, n, s, o));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function xo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Wo(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function Lh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var _e = { current: null },
  Ho = { transition: null },
  Dh = {
    ReactCurrentDispatcher: _e,
    ReactCurrentBatchConfig: Ho,
    ReactCurrentOwner: ps,
  };
H.Children = {
  map: xo,
  forEach: function (e, t, n) {
    xo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      xo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      xo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!hs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
H.Component = lr;
H.Fragment = Sh;
H.Profiler = Eh;
H.PureComponent = ds;
H.StrictMode = Ch;
H.Suspense = Oh;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dh;
H.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = cd({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = ps.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      pd.call(t, s) &&
        !hd.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: po, type: e.type, key: o, ref: l, props: r, _owner: i };
};
H.createContext = function (e) {
  return (
    (e = {
      $$typeof: kh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: xh, _context: e }),
    (e.Consumer = e)
  );
};
H.createElement = md;
H.createFactory = function (e) {
  var t = md.bind(null, e);
  return (t.type = e), t;
};
H.createRef = function () {
  return { current: null };
};
H.forwardRef = function (e) {
  return { $$typeof: Nh, render: e };
};
H.isValidElement = hs;
H.lazy = function (e) {
  return { $$typeof: Th, _payload: { _status: -1, _result: e }, _init: Lh };
};
H.memo = function (e, t) {
  return { $$typeof: _h, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function (e) {
  var t = Ho.transition;
  Ho.transition = {};
  try {
    e();
  } finally {
    Ho.transition = t;
  }
};
H.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
H.useCallback = function (e, t) {
  return _e.current.useCallback(e, t);
};
H.useContext = function (e) {
  return _e.current.useContext(e);
};
H.useDebugValue = function () {};
H.useDeferredValue = function (e) {
  return _e.current.useDeferredValue(e);
};
H.useEffect = function (e, t) {
  return _e.current.useEffect(e, t);
};
H.useId = function () {
  return _e.current.useId();
};
H.useImperativeHandle = function (e, t, n) {
  return _e.current.useImperativeHandle(e, t, n);
};
H.useInsertionEffect = function (e, t) {
  return _e.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function (e, t) {
  return _e.current.useLayoutEffect(e, t);
};
H.useMemo = function (e, t) {
  return _e.current.useMemo(e, t);
};
H.useReducer = function (e, t, n) {
  return _e.current.useReducer(e, t, n);
};
H.useRef = function (e) {
  return _e.current.useRef(e);
};
H.useState = function (e) {
  return _e.current.useState(e);
};
H.useSyncExternalStore = function (e, t, n) {
  return _e.current.useSyncExternalStore(e, t, n);
};
H.useTransition = function () {
  return _e.current.useTransition();
};
H.version = "18.2.0";
(function (e) {
  e.exports = H;
})(yh);
const Q = sd(C),
  oa = mh({ __proto__: null, default: Q }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zh = C,
  Fh = Symbol.for("react.element"),
  Ah = Symbol.for("react.fragment"),
  Uh = Object.prototype.hasOwnProperty,
  Ih = zh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  bh = { key: !0, ref: !0, __self: !0, __source: !0 };
function vd(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Uh.call(t, r) && !bh.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Fh,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Ih.current,
  };
}
Ql.Fragment = Ah;
Ql.jsx = vd;
Ql.jsxs = vd;
(function (e) {
  e.exports = Ql;
})(gh);
const gd = Wr.Fragment,
  m = Wr.jsx,
  k = Wr.jsxs;
var la = {},
  sl = {},
  jh = {
    get exports() {
      return sl;
    },
    set exports(e) {
      sl = e;
    },
  },
  be = {},
  ia = {},
  Bh = {
    get exports() {
      return ia;
    },
    set exports(e) {
      ia = e;
    },
  },
  yd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, F) {
    var U = N.length;
    N.push(F);
    e: for (; 0 < U; ) {
      var B = (U - 1) >>> 1,
        G = N[B];
      if (0 < o(G, F)) (N[B] = F), (N[U] = G), (U = B);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var F = N[0],
      U = N.pop();
    if (U !== F) {
      N[0] = U;
      e: for (var B = 0, G = N.length, Be = G >>> 1; B < Be; ) {
        var $e = 2 * (B + 1) - 1,
          pr = N[$e],
          gt = $e + 1,
          Tn = N[gt];
        if (0 > o(pr, U))
          gt < G && 0 > o(Tn, pr)
            ? ((N[B] = Tn), (N[gt] = U), (B = gt))
            : ((N[B] = pr), (N[$e] = U), (B = $e));
        else if (gt < G && 0 > o(Tn, U)) (N[B] = Tn), (N[gt] = U), (B = gt);
        else break e;
      }
    }
    return F;
  }
  function o(N, F) {
    var U = N.sortIndex - F.sortIndex;
    return U !== 0 ? U : N.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var s = [],
    u = [],
    d = 1,
    c = null,
    f = 3,
    g = !1,
    v = !1,
    w = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(N) {
    for (var F = n(u); F !== null; ) {
      if (F.callback === null) r(u);
      else if (F.startTime <= N)
        r(u), (F.sortIndex = F.expirationTime), t(s, F);
      else break;
      F = n(u);
    }
  }
  function S(N) {
    if (((w = !1), y(N), !v))
      if (n(s) !== null) (v = !0), b(_);
      else {
        var F = n(u);
        F !== null && E(S, F.startTime - N);
      }
  }
  function _(N, F) {
    (v = !1), w && ((w = !1), p(P), (P = -1)), (g = !0);
    var U = f;
    try {
      for (
        y(F), c = n(s);
        c !== null && (!(c.expirationTime > F) || (N && !L()));

      ) {
        var B = c.callback;
        if (typeof B == "function") {
          (c.callback = null), (f = c.priorityLevel);
          var G = B(c.expirationTime <= F);
          (F = e.unstable_now()),
            typeof G == "function" ? (c.callback = G) : c === n(s) && r(s),
            y(F);
        } else r(s);
        c = n(s);
      }
      if (c !== null) var Be = !0;
      else {
        var $e = n(u);
        $e !== null && E(S, $e.startTime - F), (Be = !1);
      }
      return Be;
    } finally {
      (c = null), (f = U), (g = !1);
    }
  }
  var R = !1,
    M = null,
    P = -1,
    $ = 5,
    I = -1;
  function L() {
    return !(e.unstable_now() - I < $);
  }
  function W() {
    if (M !== null) {
      var N = e.unstable_now();
      I = N;
      var F = !0;
      try {
        F = M(!0, N);
      } finally {
        F ? ae() : ((R = !1), (M = null));
      }
    } else R = !1;
  }
  var ae;
  if (typeof h == "function")
    ae = function () {
      h(W);
    };
  else if (typeof MessageChannel < "u") {
    var A = new MessageChannel(),
      D = A.port2;
    (A.port1.onmessage = W),
      (ae = function () {
        D.postMessage(null);
      });
  } else
    ae = function () {
      x(W, 0);
    };
  function b(N) {
    (M = N), R || ((R = !0), ae());
  }
  function E(N, F) {
    P = x(function () {
      N(e.unstable_now());
    }, F);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || g || ((v = !0), b(_));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : ($ = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = f;
      }
      var U = f;
      f = F;
      try {
        return N();
      } finally {
        f = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, F) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var U = f;
      f = N;
      try {
        return F();
      } finally {
        f = U;
      }
    }),
    (e.unstable_scheduleCallback = function (N, F, U) {
      var B = e.unstable_now();
      switch (
        (typeof U == "object" && U !== null
          ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? B + U : B))
          : (U = B),
        N)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = U + G),
        (N = {
          id: d++,
          callback: F,
          priorityLevel: N,
          startTime: U,
          expirationTime: G,
          sortIndex: -1,
        }),
        U > B
          ? ((N.sortIndex = U),
            t(u, N),
            n(s) === null &&
              N === n(u) &&
              (w ? (p(P), (P = -1)) : (w = !0), E(S, U - B)))
          : ((N.sortIndex = G), t(s, N), v || g || ((v = !0), b(_))),
        N
      );
    }),
    (e.unstable_shouldYield = L),
    (e.unstable_wrapCallback = function (N) {
      var F = f;
      return function () {
        var U = f;
        f = F;
        try {
          return N.apply(this, arguments);
        } finally {
          f = U;
        }
      };
    });
})(yd);
(function (e) {
  e.exports = yd;
})(Bh);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wd = C,
  Ie = ia;
function T(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Sd = new Set(),
  Hr = {};
function On(e, t) {
  Gn(e, t), Gn(e + "Capture", t);
}
function Gn(e, t) {
  for (Hr[e] = t, e = 0; e < t.length; e++) Sd.add(t[e]);
}
var Nt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  aa = Object.prototype.hasOwnProperty,
  $h =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Su = {},
  Cu = {};
function Wh(e) {
  return aa.call(Cu, e)
    ? !0
    : aa.call(Su, e)
    ? !1
    : $h.test(e)
    ? (Cu[e] = !0)
    : ((Su[e] = !0), !1);
}
function Hh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Vh(e, t, n, r) {
  if (t === null || typeof t > "u" || Hh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Te(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new Te(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ge[t] = new Te(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ge[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ge[e] = new Te(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ge[e] = new Te(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ge[e] = new Te(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ge[e] = new Te(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ge[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ms = /[\-:]([a-z])/g;
function vs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ms, vs);
    ge[t] = new Te(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ms, vs);
    ge[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ms, vs);
  ge[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ge[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new Te(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ge[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function gs(e, t, n, r) {
  var o = ge.hasOwnProperty(t) ? ge[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Vh(t, n, o, r) && (n = null),
    r || o === null
      ? Wh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Pt = wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ko = Symbol.for("react.element"),
  Mn = Symbol.for("react.portal"),
  Ln = Symbol.for("react.fragment"),
  ys = Symbol.for("react.strict_mode"),
  sa = Symbol.for("react.profiler"),
  Cd = Symbol.for("react.provider"),
  Ed = Symbol.for("react.context"),
  ws = Symbol.for("react.forward_ref"),
  ua = Symbol.for("react.suspense"),
  ca = Symbol.for("react.suspense_list"),
  Ss = Symbol.for("react.memo"),
  Ft = Symbol.for("react.lazy"),
  xd = Symbol.for("react.offscreen"),
  Eu = Symbol.iterator;
function hr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Eu && e[Eu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var oe = Object.assign,
  xi;
function Nr(e) {
  if (xi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      xi = (t && t[1]) || "";
    }
  return (
    `
` +
    xi +
    e
  );
}
var ki = !1;
function Ni(e, t) {
  if (!e || ki) return "";
  ki = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          l = r.stack.split(`
`),
          i = o.length - 1,
          a = l.length - 1;
        1 <= i && 0 <= a && o[i] !== l[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (o[i] !== l[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || o[i] !== l[a])) {
                var s =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (ki = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Nr(e) : "";
}
function qh(e) {
  switch (e.tag) {
    case 5:
      return Nr(e.type);
    case 16:
      return Nr("Lazy");
    case 13:
      return Nr("Suspense");
    case 19:
      return Nr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ni(e.type, !1)), e;
    case 11:
      return (e = Ni(e.type.render, !1)), e;
    case 1:
      return (e = Ni(e.type, !0)), e;
    default:
      return "";
  }
}
function da(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ln:
      return "Fragment";
    case Mn:
      return "Portal";
    case sa:
      return "Profiler";
    case ys:
      return "StrictMode";
    case ua:
      return "Suspense";
    case ca:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ed:
        return (e.displayName || "Context") + ".Consumer";
      case Cd:
        return (e._context.displayName || "Context") + ".Provider";
      case ws:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ss:
        return (
          (t = e.displayName || null), t !== null ? t : da(e.type) || "Memo"
        );
      case Ft:
        (t = e._payload), (e = e._init);
        try {
          return da(e(t));
        } catch {}
    }
  return null;
}
function Qh(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return da(t);
    case 8:
      return t === ys ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Zt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function kd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Yh(e) {
  var t = kd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), l.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function No(e) {
  e._valueTracker || (e._valueTracker = Yh(e));
}
function Nd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = kd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ul(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fa(e, t) {
  var n = t.checked;
  return oe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function xu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Zt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Od(e, t) {
  (t = t.checked), t != null && gs(e, "checked", t, !1);
}
function pa(e, t) {
  Od(e, t);
  var n = Zt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ha(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ha(e, t.type, Zt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ku(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ha(e, t, n) {
  (t !== "number" || ul(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Or = Array.isArray;
function Hn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Zt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ma(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return oe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Nu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (Or(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Zt(n) };
}
function _d(e, t) {
  var n = Zt(t.value),
    r = Zt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ou(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Td(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function va(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Td(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Oo,
  Pd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Oo = Oo || document.createElement("div"),
          Oo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Oo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Vr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Kh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rr).forEach(function (e) {
  Kh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Rr[t] = Rr[e]);
  });
});
function Rd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Rr.hasOwnProperty(e) && Rr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Md(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Rd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Gh = oe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ga(e, t) {
  if (t) {
    if (Gh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function ya(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var wa = null;
function Cs(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Sa = null,
  Vn = null,
  qn = null;
function _u(e) {
  if ((e = vo(e))) {
    if (typeof Sa != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = Jl(t)), Sa(e.stateNode, e.type, t));
  }
}
function Ld(e) {
  Vn ? (qn ? qn.push(e) : (qn = [e])) : (Vn = e);
}
function Dd() {
  if (Vn) {
    var e = Vn,
      t = qn;
    if (((qn = Vn = null), _u(e), t)) for (e = 0; e < t.length; e++) _u(t[e]);
  }
}
function zd(e, t) {
  return e(t);
}
function Fd() {}
var Oi = !1;
function Ad(e, t, n) {
  if (Oi) return e(t, n);
  Oi = !0;
  try {
    return zd(e, t, n);
  } finally {
    (Oi = !1), (Vn !== null || qn !== null) && (Fd(), Dd());
  }
}
function qr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Jl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var Ca = !1;
if (Nt)
  try {
    var mr = {};
    Object.defineProperty(mr, "passive", {
      get: function () {
        Ca = !0;
      },
    }),
      window.addEventListener("test", mr, mr),
      window.removeEventListener("test", mr, mr);
  } catch {
    Ca = !1;
  }
function Xh(e, t, n, r, o, l, i, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Mr = !1,
  cl = null,
  dl = !1,
  Ea = null,
  Jh = {
    onError: function (e) {
      (Mr = !0), (cl = e);
    },
  };
function Zh(e, t, n, r, o, l, i, a, s) {
  (Mr = !1), (cl = null), Xh.apply(Jh, arguments);
}
function em(e, t, n, r, o, l, i, a, s) {
  if ((Zh.apply(this, arguments), Mr)) {
    if (Mr) {
      var u = cl;
      (Mr = !1), (cl = null);
    } else throw Error(T(198));
    dl || ((dl = !0), (Ea = u));
  }
}
function _n(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ud(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Tu(e) {
  if (_n(e) !== e) throw Error(T(188));
}
function tm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = _n(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return Tu(o), e;
        if (l === r) return Tu(o), t;
        l = l.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, a = o.child; a; ) {
        if (a === n) {
          (i = !0), (n = o), (r = l);
          break;
        }
        if (a === r) {
          (i = !0), (r = o), (n = l);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = l.child; a; ) {
          if (a === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (a === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function Id(e) {
  return (e = tm(e)), e !== null ? bd(e) : null;
}
function bd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = bd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var jd = Ie.unstable_scheduleCallback,
  Pu = Ie.unstable_cancelCallback,
  nm = Ie.unstable_shouldYield,
  rm = Ie.unstable_requestPaint,
  ie = Ie.unstable_now,
  om = Ie.unstable_getCurrentPriorityLevel,
  Es = Ie.unstable_ImmediatePriority,
  Bd = Ie.unstable_UserBlockingPriority,
  fl = Ie.unstable_NormalPriority,
  lm = Ie.unstable_LowPriority,
  $d = Ie.unstable_IdlePriority,
  Yl = null,
  mt = null;
function im(e) {
  if (mt && typeof mt.onCommitFiberRoot == "function")
    try {
      mt.onCommitFiberRoot(Yl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ot = Math.clz32 ? Math.clz32 : um,
  am = Math.log,
  sm = Math.LN2;
function um(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((am(e) / sm) | 0)) | 0;
}
var _o = 64,
  To = 4194304;
function _r(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function pl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~o;
    a !== 0 ? (r = _r(a)) : ((l &= i), l !== 0 && (r = _r(l)));
  } else (i = n & ~o), i !== 0 ? (r = _r(i)) : l !== 0 && (r = _r(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ot(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function cm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function dm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - ot(l),
      a = 1 << i,
      s = o[i];
    s === -1
      ? (!(a & n) || a & r) && (o[i] = cm(a, t))
      : s <= t && (e.expiredLanes |= a),
      (l &= ~a);
  }
}
function xa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Wd() {
  var e = _o;
  return (_o <<= 1), !(_o & 4194240) && (_o = 64), e;
}
function _i(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ho(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ot(t)),
    (e[t] = n);
}
function fm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - ot(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function xs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ot(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var K = 0;
function Hd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Vd,
  ks,
  qd,
  Qd,
  Yd,
  ka = !1,
  Po = [],
  Ht = null,
  Vt = null,
  qt = null,
  Qr = new Map(),
  Yr = new Map(),
  Ut = [],
  pm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ru(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ht = null;
      break;
    case "dragenter":
    case "dragleave":
      Vt = null;
      break;
    case "mouseover":
    case "mouseout":
      qt = null;
      break;
    case "pointerover":
    case "pointerout":
      Qr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yr.delete(t.pointerId);
  }
}
function vr(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = vo(t)), t !== null && ks(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function hm(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Ht = vr(Ht, e, t, n, r, o)), !0;
    case "dragenter":
      return (Vt = vr(Vt, e, t, n, r, o)), !0;
    case "mouseover":
      return (qt = vr(qt, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return Qr.set(l, vr(Qr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), Yr.set(l, vr(Yr.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Kd(e) {
  var t = fn(e.target);
  if (t !== null) {
    var n = _n(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ud(n)), t !== null)) {
          (e.blockedOn = t),
            Yd(e.priority, function () {
              qd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Vo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Na(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (wa = r), n.target.dispatchEvent(r), (wa = null);
    } else return (t = vo(n)), t !== null && ks(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Mu(e, t, n) {
  Vo(e) && n.delete(t);
}
function mm() {
  (ka = !1),
    Ht !== null && Vo(Ht) && (Ht = null),
    Vt !== null && Vo(Vt) && (Vt = null),
    qt !== null && Vo(qt) && (qt = null),
    Qr.forEach(Mu),
    Yr.forEach(Mu);
}
function gr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ka ||
      ((ka = !0),
      Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, mm)));
}
function Kr(e) {
  function t(o) {
    return gr(o, e);
  }
  if (0 < Po.length) {
    gr(Po[0], e);
    for (var n = 1; n < Po.length; n++) {
      var r = Po[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ht !== null && gr(Ht, e),
      Vt !== null && gr(Vt, e),
      qt !== null && gr(qt, e),
      Qr.forEach(t),
      Yr.forEach(t),
      n = 0;
    n < Ut.length;
    n++
  )
    (r = Ut[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ut.length && ((n = Ut[0]), n.blockedOn === null); )
    Kd(n), n.blockedOn === null && Ut.shift();
}
var Qn = Pt.ReactCurrentBatchConfig,
  hl = !0;
function vm(e, t, n, r) {
  var o = K,
    l = Qn.transition;
  Qn.transition = null;
  try {
    (K = 1), Ns(e, t, n, r);
  } finally {
    (K = o), (Qn.transition = l);
  }
}
function gm(e, t, n, r) {
  var o = K,
    l = Qn.transition;
  Qn.transition = null;
  try {
    (K = 4), Ns(e, t, n, r);
  } finally {
    (K = o), (Qn.transition = l);
  }
}
function Ns(e, t, n, r) {
  if (hl) {
    var o = Na(e, t, n, r);
    if (o === null) Ui(e, t, r, ml, n), Ru(e, r);
    else if (hm(o, e, t, n, r)) r.stopPropagation();
    else if ((Ru(e, r), t & 4 && -1 < pm.indexOf(e))) {
      for (; o !== null; ) {
        var l = vo(o);
        if (
          (l !== null && Vd(l),
          (l = Na(e, t, n, r)),
          l === null && Ui(e, t, r, ml, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else Ui(e, t, r, null, n);
  }
}
var ml = null;
function Na(e, t, n, r) {
  if (((ml = null), (e = Cs(r)), (e = fn(e)), e !== null))
    if (((t = _n(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ud(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ml = e), null;
}
function Gd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (om()) {
        case Es:
          return 1;
        case Bd:
          return 4;
        case fl:
        case lm:
          return 16;
        case $d:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var bt = null,
  Os = null,
  qo = null;
function Xd() {
  if (qo) return qo;
  var e,
    t = Os,
    n = t.length,
    r,
    o = "value" in bt ? bt.value : bt.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (qo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Qo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ro() {
  return !0;
}
function Lu() {
  return !1;
}
function je(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Ro
        : Lu),
      (this.isPropagationStopped = Lu),
      this
    );
  }
  return (
    oe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ro));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ro));
      },
      persist: function () {},
      isPersistent: Ro,
    }),
    t
  );
}
var ir = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  _s = je(ir),
  mo = oe({}, ir, { view: 0, detail: 0 }),
  ym = je(mo),
  Ti,
  Pi,
  yr,
  Kl = oe({}, mo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ts,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== yr &&
            (yr && e.type === "mousemove"
              ? ((Ti = e.screenX - yr.screenX), (Pi = e.screenY - yr.screenY))
              : (Pi = Ti = 0),
            (yr = e)),
          Ti);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Pi;
    },
  }),
  Du = je(Kl),
  wm = oe({}, Kl, { dataTransfer: 0 }),
  Sm = je(wm),
  Cm = oe({}, mo, { relatedTarget: 0 }),
  Ri = je(Cm),
  Em = oe({}, ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xm = je(Em),
  km = oe({}, ir, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Nm = je(km),
  Om = oe({}, ir, { data: 0 }),
  zu = je(Om),
  _m = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Tm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Pm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Rm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Pm[e]) ? !!t[e] : !1;
}
function Ts() {
  return Rm;
}
var Mm = oe({}, mo, {
    key: function (e) {
      if (e.key) {
        var t = _m[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Qo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Tm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ts,
    charCode: function (e) {
      return e.type === "keypress" ? Qo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Qo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Lm = je(Mm),
  Dm = oe({}, Kl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Fu = je(Dm),
  zm = oe({}, mo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ts,
  }),
  Fm = je(zm),
  Am = oe({}, ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Um = je(Am),
  Im = oe({}, Kl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  bm = je(Im),
  jm = [9, 13, 27, 32],
  Ps = Nt && "CompositionEvent" in window,
  Lr = null;
Nt && "documentMode" in document && (Lr = document.documentMode);
var Bm = Nt && "TextEvent" in window && !Lr,
  Jd = Nt && (!Ps || (Lr && 8 < Lr && 11 >= Lr)),
  Au = String.fromCharCode(32),
  Uu = !1;
function Zd(e, t) {
  switch (e) {
    case "keyup":
      return jm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ef(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Dn = !1;
function $m(e, t) {
  switch (e) {
    case "compositionend":
      return ef(t);
    case "keypress":
      return t.which !== 32 ? null : ((Uu = !0), Au);
    case "textInput":
      return (e = t.data), e === Au && Uu ? null : e;
    default:
      return null;
  }
}
function Wm(e, t) {
  if (Dn)
    return e === "compositionend" || (!Ps && Zd(e, t))
      ? ((e = Xd()), (qo = Os = bt = null), (Dn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Jd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Hm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Iu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Hm[e.type] : t === "textarea";
}
function tf(e, t, n, r) {
  Ld(r),
    (t = vl(t, "onChange")),
    0 < t.length &&
      ((n = new _s("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Dr = null,
  Gr = null;
function Vm(e) {
  pf(e, 0);
}
function Gl(e) {
  var t = An(e);
  if (Nd(t)) return e;
}
function qm(e, t) {
  if (e === "change") return t;
}
var nf = !1;
if (Nt) {
  var Mi;
  if (Nt) {
    var Li = "oninput" in document;
    if (!Li) {
      var bu = document.createElement("div");
      bu.setAttribute("oninput", "return;"),
        (Li = typeof bu.oninput == "function");
    }
    Mi = Li;
  } else Mi = !1;
  nf = Mi && (!document.documentMode || 9 < document.documentMode);
}
function ju() {
  Dr && (Dr.detachEvent("onpropertychange", rf), (Gr = Dr = null));
}
function rf(e) {
  if (e.propertyName === "value" && Gl(Gr)) {
    var t = [];
    tf(t, Gr, e, Cs(e)), Ad(Vm, t);
  }
}
function Qm(e, t, n) {
  e === "focusin"
    ? (ju(), (Dr = t), (Gr = n), Dr.attachEvent("onpropertychange", rf))
    : e === "focusout" && ju();
}
function Ym(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Gl(Gr);
}
function Km(e, t) {
  if (e === "click") return Gl(t);
}
function Gm(e, t) {
  if (e === "input" || e === "change") return Gl(t);
}
function Xm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var at = typeof Object.is == "function" ? Object.is : Xm;
function Xr(e, t) {
  if (at(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!aa.call(t, o) || !at(e[o], t[o])) return !1;
  }
  return !0;
}
function Bu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $u(e, t) {
  var n = Bu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Bu(n);
  }
}
function of(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? of(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function lf() {
  for (var e = window, t = ul(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ul(e.document);
  }
  return t;
}
function Rs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Jm(e) {
  var t = lf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    of(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Rs(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = $u(n, l));
        var i = $u(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Zm = Nt && "documentMode" in document && 11 >= document.documentMode,
  zn = null,
  Oa = null,
  zr = null,
  _a = !1;
function Wu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  _a ||
    zn == null ||
    zn !== ul(r) ||
    ((r = zn),
    "selectionStart" in r && Rs(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (zr && Xr(zr, r)) ||
      ((zr = r),
      (r = vl(Oa, "onSelect")),
      0 < r.length &&
        ((t = new _s("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = zn))));
}
function Mo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Fn = {
    animationend: Mo("Animation", "AnimationEnd"),
    animationiteration: Mo("Animation", "AnimationIteration"),
    animationstart: Mo("Animation", "AnimationStart"),
    transitionend: Mo("Transition", "TransitionEnd"),
  },
  Di = {},
  af = {};
Nt &&
  ((af = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Fn.animationend.animation,
    delete Fn.animationiteration.animation,
    delete Fn.animationstart.animation),
  "TransitionEvent" in window || delete Fn.transitionend.transition);
function Xl(e) {
  if (Di[e]) return Di[e];
  if (!Fn[e]) return e;
  var t = Fn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in af) return (Di[e] = t[n]);
  return e;
}
var sf = Xl("animationend"),
  uf = Xl("animationiteration"),
  cf = Xl("animationstart"),
  df = Xl("transitionend"),
  ff = new Map(),
  Hu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function nn(e, t) {
  ff.set(e, t), On(t, [e]);
}
for (var zi = 0; zi < Hu.length; zi++) {
  var Fi = Hu[zi],
    e0 = Fi.toLowerCase(),
    t0 = Fi[0].toUpperCase() + Fi.slice(1);
  nn(e0, "on" + t0);
}
nn(sf, "onAnimationEnd");
nn(uf, "onAnimationIteration");
nn(cf, "onAnimationStart");
nn("dblclick", "onDoubleClick");
nn("focusin", "onFocus");
nn("focusout", "onBlur");
nn(df, "onTransitionEnd");
Gn("onMouseEnter", ["mouseout", "mouseover"]);
Gn("onMouseLeave", ["mouseout", "mouseover"]);
Gn("onPointerEnter", ["pointerout", "pointerover"]);
Gn("onPointerLeave", ["pointerout", "pointerover"]);
On(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
On(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
On("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
On(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
On(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
On(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Tr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  n0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));
function Vu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), em(r, t, void 0, e), (e.currentTarget = null);
}
function pf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== l && o.isPropagationStopped())) break e;
          Vu(o, a, u), (l = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== l && o.isPropagationStopped())
          )
            break e;
          Vu(o, a, u), (l = s);
        }
    }
  }
  if (dl) throw ((e = Ea), (dl = !1), (Ea = null), e);
}
function J(e, t) {
  var n = t[La];
  n === void 0 && (n = t[La] = new Set());
  var r = e + "__bubble";
  n.has(r) || (hf(t, e, 2, !1), n.add(r));
}
function Ai(e, t, n) {
  var r = 0;
  t && (r |= 4), hf(n, e, r, t);
}
var Lo = "_reactListening" + Math.random().toString(36).slice(2);
function Jr(e) {
  if (!e[Lo]) {
    (e[Lo] = !0),
      Sd.forEach(function (n) {
        n !== "selectionchange" && (n0.has(n) || Ai(n, !1, e), Ai(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Lo] || ((t[Lo] = !0), Ai("selectionchange", !1, t));
  }
}
function hf(e, t, n, r) {
  switch (Gd(t)) {
    case 1:
      var o = vm;
      break;
    case 4:
      o = gm;
      break;
    default:
      o = Ns;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ca ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Ui(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = fn(a)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = l = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Ad(function () {
    var u = l,
      d = Cs(n),
      c = [];
    e: {
      var f = ff.get(e);
      if (f !== void 0) {
        var g = _s,
          v = e;
        switch (e) {
          case "keypress":
            if (Qo(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Lm;
            break;
          case "focusin":
            (v = "focus"), (g = Ri);
            break;
          case "focusout":
            (v = "blur"), (g = Ri);
            break;
          case "beforeblur":
          case "afterblur":
            g = Ri;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Du;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Sm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Fm;
            break;
          case sf:
          case uf:
          case cf:
            g = xm;
            break;
          case df:
            g = Um;
            break;
          case "scroll":
            g = ym;
            break;
          case "wheel":
            g = bm;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Nm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Fu;
        }
        var w = (t & 4) !== 0,
          x = !w && e === "scroll",
          p = w ? (f !== null ? f + "Capture" : null) : f;
        w = [];
        for (var h = u, y; h !== null; ) {
          y = h;
          var S = y.stateNode;
          if (
            (y.tag === 5 &&
              S !== null &&
              ((y = S),
              p !== null && ((S = qr(h, p)), S != null && w.push(Zr(h, S, y)))),
            x)
          )
            break;
          h = h.return;
        }
        0 < w.length &&
          ((f = new g(f, v, null, n, d)), c.push({ event: f, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          f &&
            n !== wa &&
            (v = n.relatedTarget || n.fromElement) &&
            (fn(v) || v[Ot]))
        )
          break e;
        if (
          (g || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          g
            ? ((v = n.relatedTarget || n.toElement),
              (g = u),
              (v = v ? fn(v) : null),
              v !== null &&
                ((x = _n(v)), v !== x || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((g = null), (v = u)),
          g !== v)
        ) {
          if (
            ((w = Du),
            (S = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Fu),
              (S = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (x = g == null ? f : An(g)),
            (y = v == null ? f : An(v)),
            (f = new w(S, h + "leave", g, n, d)),
            (f.target = x),
            (f.relatedTarget = y),
            (S = null),
            fn(d) === u &&
              ((w = new w(p, h + "enter", v, n, d)),
              (w.target = y),
              (w.relatedTarget = x),
              (S = w)),
            (x = S),
            g && v)
          )
            t: {
              for (w = g, p = v, h = 0, y = w; y; y = Pn(y)) h++;
              for (y = 0, S = p; S; S = Pn(S)) y++;
              for (; 0 < h - y; ) (w = Pn(w)), h--;
              for (; 0 < y - h; ) (p = Pn(p)), y--;
              for (; h--; ) {
                if (w === p || (p !== null && w === p.alternate)) break t;
                (w = Pn(w)), (p = Pn(p));
              }
              w = null;
            }
          else w = null;
          g !== null && qu(c, f, g, w, !1),
            v !== null && x !== null && qu(c, x, v, w, !0);
        }
      }
      e: {
        if (
          ((f = u ? An(u) : window),
          (g = f.nodeName && f.nodeName.toLowerCase()),
          g === "select" || (g === "input" && f.type === "file"))
        )
          var _ = qm;
        else if (Iu(f))
          if (nf) _ = Gm;
          else {
            _ = Ym;
            var R = Qm;
          }
        else
          (g = f.nodeName) &&
            g.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (_ = Km);
        if (_ && (_ = _(e, u))) {
          tf(c, _, n, d);
          break e;
        }
        R && R(e, f, u),
          e === "focusout" &&
            (R = f._wrapperState) &&
            R.controlled &&
            f.type === "number" &&
            ha(f, "number", f.value);
      }
      switch (((R = u ? An(u) : window), e)) {
        case "focusin":
          (Iu(R) || R.contentEditable === "true") &&
            ((zn = R), (Oa = u), (zr = null));
          break;
        case "focusout":
          zr = Oa = zn = null;
          break;
        case "mousedown":
          _a = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (_a = !1), Wu(c, n, d);
          break;
        case "selectionchange":
          if (Zm) break;
        case "keydown":
        case "keyup":
          Wu(c, n, d);
      }
      var M;
      if (Ps)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Dn
          ? Zd(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Jd &&
          n.locale !== "ko" &&
          (Dn || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Dn && (M = Xd())
            : ((bt = d),
              (Os = "value" in bt ? bt.value : bt.textContent),
              (Dn = !0))),
        (R = vl(u, P)),
        0 < R.length &&
          ((P = new zu(P, e, null, n, d)),
          c.push({ event: P, listeners: R }),
          M ? (P.data = M) : ((M = ef(n)), M !== null && (P.data = M)))),
        (M = Bm ? $m(e, n) : Wm(e, n)) &&
          ((u = vl(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new zu("onBeforeInput", "beforeinput", null, n, d)),
            c.push({ event: d, listeners: u }),
            (d.data = M)));
    }
    pf(c, t);
  });
}
function Zr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function vl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = qr(e, n)),
      l != null && r.unshift(Zr(e, l, o)),
      (l = qr(e, t)),
      l != null && r.push(Zr(e, l, o))),
      (e = e.return);
  }
  return r;
}
function Pn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function qu(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((s = qr(n, l)), s != null && i.unshift(Zr(n, s, a)))
        : o || ((s = qr(n, l)), s != null && i.push(Zr(n, s, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var r0 = /\r\n?/g,
  o0 = /\u0000|\uFFFD/g;
function Qu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      r0,
      `
`
    )
    .replace(o0, "");
}
function Do(e, t, n) {
  if (((t = Qu(t)), Qu(e) !== t && n)) throw Error(T(425));
}
function gl() {}
var Ta = null,
  Pa = null;
function Ra(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ma = typeof setTimeout == "function" ? setTimeout : void 0,
  l0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Yu = typeof Promise == "function" ? Promise : void 0,
  i0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Yu < "u"
      ? function (e) {
          return Yu.resolve(null).then(e).catch(a0);
        }
      : Ma;
function a0(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ii(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Kr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Kr(t);
}
function Qt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ku(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ar = Math.random().toString(36).slice(2),
  pt = "__reactFiber$" + ar,
  eo = "__reactProps$" + ar,
  Ot = "__reactContainer$" + ar,
  La = "__reactEvents$" + ar,
  s0 = "__reactListeners$" + ar,
  u0 = "__reactHandles$" + ar;
function fn(e) {
  var t = e[pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ot] || n[pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ku(e); e !== null; ) {
          if ((n = e[pt])) return n;
          e = Ku(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function vo(e) {
  return (
    (e = e[pt] || e[Ot]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function An(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function Jl(e) {
  return e[eo] || null;
}
var Da = [],
  Un = -1;
function rn(e) {
  return { current: e };
}
function ee(e) {
  0 > Un || ((e.current = Da[Un]), (Da[Un] = null), Un--);
}
function X(e, t) {
  Un++, (Da[Un] = e.current), (e.current = t);
}
var en = {},
  ke = rn(en),
  Le = rn(!1),
  yn = en;
function Xn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return en;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function De(e) {
  return (e = e.childContextTypes), e != null;
}
function yl() {
  ee(Le), ee(ke);
}
function Gu(e, t, n) {
  if (ke.current !== en) throw Error(T(168));
  X(ke, t), X(Le, n);
}
function mf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(T(108, Qh(e) || "Unknown", o));
  return oe({}, n, r);
}
function wl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || en),
    (yn = ke.current),
    X(ke, e),
    X(Le, Le.current),
    !0
  );
}
function Xu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n
    ? ((e = mf(e, t, yn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ee(Le),
      ee(ke),
      X(ke, e))
    : ee(Le),
    X(Le, n);
}
var wt = null,
  Zl = !1,
  bi = !1;
function vf(e) {
  wt === null ? (wt = [e]) : wt.push(e);
}
function c0(e) {
  (Zl = !0), vf(e);
}
function on() {
  if (!bi && wt !== null) {
    bi = !0;
    var e = 0,
      t = K;
    try {
      var n = wt;
      for (K = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (wt = null), (Zl = !1);
    } catch (o) {
      throw (wt !== null && (wt = wt.slice(e + 1)), jd(Es, on), o);
    } finally {
      (K = t), (bi = !1);
    }
  }
  return null;
}
var In = [],
  bn = 0,
  Sl = null,
  Cl = 0,
  qe = [],
  Qe = 0,
  wn = null,
  St = 1,
  Ct = "";
function an(e, t) {
  (In[bn++] = Cl), (In[bn++] = Sl), (Sl = e), (Cl = t);
}
function gf(e, t, n) {
  (qe[Qe++] = St), (qe[Qe++] = Ct), (qe[Qe++] = wn), (wn = e);
  var r = St;
  e = Ct;
  var o = 32 - ot(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - ot(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (St = (1 << (32 - ot(t) + o)) | (n << o) | r),
      (Ct = l + e);
  } else (St = (1 << l) | (n << o) | r), (Ct = e);
}
function Ms(e) {
  e.return !== null && (an(e, 1), gf(e, 1, 0));
}
function Ls(e) {
  for (; e === Sl; )
    (Sl = In[--bn]), (In[bn] = null), (Cl = In[--bn]), (In[bn] = null);
  for (; e === wn; )
    (wn = qe[--Qe]),
      (qe[Qe] = null),
      (Ct = qe[--Qe]),
      (qe[Qe] = null),
      (St = qe[--Qe]),
      (qe[Qe] = null);
}
var Ue = null,
  Ae = null,
  te = !1,
  rt = null;
function yf(e, t) {
  var n = Ye(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ju(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ue = e), (Ae = Qt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ue = e), (Ae = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = wn !== null ? { id: St, overflow: Ct } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ye(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ue = e),
            (Ae = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function za(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fa(e) {
  if (te) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!Ju(e, t)) {
        if (za(e)) throw Error(T(418));
        t = Qt(n.nextSibling);
        var r = Ue;
        t && Ju(e, t)
          ? yf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (te = !1), (Ue = e));
      }
    } else {
      if (za(e)) throw Error(T(418));
      (e.flags = (e.flags & -4097) | 2), (te = !1), (Ue = e);
    }
  }
}
function Zu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ue = e;
}
function zo(e) {
  if (e !== Ue) return !1;
  if (!te) return Zu(e), (te = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ra(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (za(e)) throw (wf(), Error(T(418)));
    for (; t; ) yf(e, t), (t = Qt(t.nextSibling));
  }
  if ((Zu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = Qt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = Ue ? Qt(e.stateNode.nextSibling) : null;
  return !0;
}
function wf() {
  for (var e = Ae; e; ) e = Qt(e.nextSibling);
}
function Jn() {
  (Ae = Ue = null), (te = !1);
}
function Ds(e) {
  rt === null ? (rt = [e]) : rt.push(e);
}
var d0 = Pt.ReactCurrentBatchConfig;
function et(e, t) {
  if (e && e.defaultProps) {
    (t = oe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var El = rn(null),
  xl = null,
  jn = null,
  zs = null;
function Fs() {
  zs = jn = xl = null;
}
function As(e) {
  var t = El.current;
  ee(El), (e._currentValue = t);
}
function Aa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Yn(e, t) {
  (xl = e),
    (zs = jn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Re = !0), (e.firstContext = null));
}
function Xe(e) {
  var t = e._currentValue;
  if (zs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), jn === null)) {
      if (xl === null) throw Error(T(308));
      (jn = e), (xl.dependencies = { lanes: 0, firstContext: e });
    } else jn = jn.next = e;
  return t;
}
var pn = null;
function Us(e) {
  pn === null ? (pn = [e]) : pn.push(e);
}
function Sf(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Us(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    _t(e, r)
  );
}
function _t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var At = !1;
function Is(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Cf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function xt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), q & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      _t(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Us(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    _t(e, n)
  );
}
function Yo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), xs(e, n);
  }
}
function ec(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function kl(e, t, n, r) {
  var o = e.updateQueue;
  At = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), i === null ? (l = u) : (i.next = u), (i = s);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== i &&
        (a === null ? (d.firstBaseUpdate = u) : (a.next = u),
        (d.lastBaseUpdate = s)));
  }
  if (l !== null) {
    var c = o.baseState;
    (i = 0), (d = u = s = null), (a = l);
    do {
      var f = a.lane,
        g = a.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            w = a;
          switch (((f = t), (g = n), w.tag)) {
            case 1:
              if (((v = w.payload), typeof v == "function")) {
                c = v.call(g, c, f);
                break e;
              }
              c = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = w.payload),
                (f = typeof v == "function" ? v.call(g, c, f) : v),
                f == null)
              )
                break e;
              c = oe({}, c, f);
              break e;
            case 2:
              At = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [a]) : f.push(a));
      } else
        (g = {
          eventTime: g,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((u = d = g), (s = c)) : (d = d.next = g),
          (i |= f);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (s = c),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (Cn |= i), (e.lanes = i), (e.memoizedState = c);
  }
}
function tc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(T(191, o));
        o.call(r);
      }
    }
}
var Ef = new wd.Component().refs;
function Ua(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : oe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ei = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? _n(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Oe(),
      o = Gt(e),
      l = xt(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = Yt(e, l, o)),
      t !== null && (lt(t, e, o, r), Yo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Oe(),
      o = Gt(e),
      l = xt(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Yt(e, l, o)),
      t !== null && (lt(t, e, o, r), Yo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Oe(),
      r = Gt(e),
      o = xt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Yt(e, o, r)),
      t !== null && (lt(t, e, r, n), Yo(t, e, r));
  },
};
function nc(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Xr(n, r) || !Xr(o, l)
      : !0
  );
}
function xf(e, t, n) {
  var r = !1,
    o = en,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Xe(l))
      : ((o = De(t) ? yn : ke.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? Xn(e, o) : en)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ei),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function rc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ei.enqueueReplaceState(t, t.state, null);
}
function Ia(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Ef), Is(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = Xe(l))
    : ((l = De(t) ? yn : ke.current), (o.context = Xn(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Ua(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && ei.enqueueReplaceState(o, o.state, null),
      kl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function wr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var a = o.refs;
            a === Ef && (a = o.refs = {}),
              i === null ? delete a[l] : (a[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function Fo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function oc(e) {
  var t = e._init;
  return t(e._payload);
}
function kf(e) {
  function t(p, h) {
    if (e) {
      var y = p.deletions;
      y === null ? ((p.deletions = [h]), (p.flags |= 16)) : y.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function o(p, h) {
    return (p = Xt(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function l(p, h, y) {
    return (
      (p.index = y),
      e
        ? ((y = p.alternate),
          y !== null
            ? ((y = y.index), y < h ? ((p.flags |= 2), h) : y)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, h, y, S) {
    return h === null || h.tag !== 6
      ? ((h = qi(y, p.mode, S)), (h.return = p), h)
      : ((h = o(h, y)), (h.return = p), h);
  }
  function s(p, h, y, S) {
    var _ = y.type;
    return _ === Ln
      ? d(p, h, y.props.children, S, y.key)
      : h !== null &&
        (h.elementType === _ ||
          (typeof _ == "object" &&
            _ !== null &&
            _.$$typeof === Ft &&
            oc(_) === h.type))
      ? ((S = o(h, y.props)), (S.ref = wr(p, h, y)), (S.return = p), S)
      : ((S = el(y.type, y.key, y.props, null, p.mode, S)),
        (S.ref = wr(p, h, y)),
        (S.return = p),
        S);
  }
  function u(p, h, y, S) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = Qi(y, p.mode, S)), (h.return = p), h)
      : ((h = o(h, y.children || [])), (h.return = p), h);
  }
  function d(p, h, y, S, _) {
    return h === null || h.tag !== 7
      ? ((h = vn(y, p.mode, S, _)), (h.return = p), h)
      : ((h = o(h, y)), (h.return = p), h);
  }
  function c(p, h, y) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = qi("" + h, p.mode, y)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ko:
          return (
            (y = el(h.type, h.key, h.props, null, p.mode, y)),
            (y.ref = wr(p, null, h)),
            (y.return = p),
            y
          );
        case Mn:
          return (h = Qi(h, p.mode, y)), (h.return = p), h;
        case Ft:
          var S = h._init;
          return c(p, S(h._payload), y);
      }
      if (Or(h) || hr(h))
        return (h = vn(h, p.mode, y, null)), (h.return = p), h;
      Fo(p, h);
    }
    return null;
  }
  function f(p, h, y, S) {
    var _ = h !== null ? h.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return _ !== null ? null : a(p, h, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ko:
          return y.key === _ ? s(p, h, y, S) : null;
        case Mn:
          return y.key === _ ? u(p, h, y, S) : null;
        case Ft:
          return (_ = y._init), f(p, h, _(y._payload), S);
      }
      if (Or(y) || hr(y)) return _ !== null ? null : d(p, h, y, S, null);
      Fo(p, y);
    }
    return null;
  }
  function g(p, h, y, S, _) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (p = p.get(y) || null), a(h, p, "" + S, _);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ko:
          return (p = p.get(S.key === null ? y : S.key) || null), s(h, p, S, _);
        case Mn:
          return (p = p.get(S.key === null ? y : S.key) || null), u(h, p, S, _);
        case Ft:
          var R = S._init;
          return g(p, h, y, R(S._payload), _);
      }
      if (Or(S) || hr(S)) return (p = p.get(y) || null), d(h, p, S, _, null);
      Fo(h, S);
    }
    return null;
  }
  function v(p, h, y, S) {
    for (
      var _ = null, R = null, M = h, P = (h = 0), $ = null;
      M !== null && P < y.length;
      P++
    ) {
      M.index > P ? (($ = M), (M = null)) : ($ = M.sibling);
      var I = f(p, M, y[P], S);
      if (I === null) {
        M === null && (M = $);
        break;
      }
      e && M && I.alternate === null && t(p, M),
        (h = l(I, h, P)),
        R === null ? (_ = I) : (R.sibling = I),
        (R = I),
        (M = $);
    }
    if (P === y.length) return n(p, M), te && an(p, P), _;
    if (M === null) {
      for (; P < y.length; P++)
        (M = c(p, y[P], S)),
          M !== null &&
            ((h = l(M, h, P)), R === null ? (_ = M) : (R.sibling = M), (R = M));
      return te && an(p, P), _;
    }
    for (M = r(p, M); P < y.length; P++)
      ($ = g(M, p, P, y[P], S)),
        $ !== null &&
          (e && $.alternate !== null && M.delete($.key === null ? P : $.key),
          (h = l($, h, P)),
          R === null ? (_ = $) : (R.sibling = $),
          (R = $));
    return (
      e &&
        M.forEach(function (L) {
          return t(p, L);
        }),
      te && an(p, P),
      _
    );
  }
  function w(p, h, y, S) {
    var _ = hr(y);
    if (typeof _ != "function") throw Error(T(150));
    if (((y = _.call(y)), y == null)) throw Error(T(151));
    for (
      var R = (_ = null), M = h, P = (h = 0), $ = null, I = y.next();
      M !== null && !I.done;
      P++, I = y.next()
    ) {
      M.index > P ? (($ = M), (M = null)) : ($ = M.sibling);
      var L = f(p, M, I.value, S);
      if (L === null) {
        M === null && (M = $);
        break;
      }
      e && M && L.alternate === null && t(p, M),
        (h = l(L, h, P)),
        R === null ? (_ = L) : (R.sibling = L),
        (R = L),
        (M = $);
    }
    if (I.done) return n(p, M), te && an(p, P), _;
    if (M === null) {
      for (; !I.done; P++, I = y.next())
        (I = c(p, I.value, S)),
          I !== null &&
            ((h = l(I, h, P)), R === null ? (_ = I) : (R.sibling = I), (R = I));
      return te && an(p, P), _;
    }
    for (M = r(p, M); !I.done; P++, I = y.next())
      (I = g(M, p, P, I.value, S)),
        I !== null &&
          (e && I.alternate !== null && M.delete(I.key === null ? P : I.key),
          (h = l(I, h, P)),
          R === null ? (_ = I) : (R.sibling = I),
          (R = I));
    return (
      e &&
        M.forEach(function (W) {
          return t(p, W);
        }),
      te && an(p, P),
      _
    );
  }
  function x(p, h, y, S) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === Ln &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case ko:
          e: {
            for (var _ = y.key, R = h; R !== null; ) {
              if (R.key === _) {
                if (((_ = y.type), _ === Ln)) {
                  if (R.tag === 7) {
                    n(p, R.sibling),
                      (h = o(R, y.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  R.elementType === _ ||
                  (typeof _ == "object" &&
                    _ !== null &&
                    _.$$typeof === Ft &&
                    oc(_) === R.type)
                ) {
                  n(p, R.sibling),
                    (h = o(R, y.props)),
                    (h.ref = wr(p, R, y)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, R);
                break;
              } else t(p, R);
              R = R.sibling;
            }
            y.type === Ln
              ? ((h = vn(y.props.children, p.mode, S, y.key)),
                (h.return = p),
                (p = h))
              : ((S = el(y.type, y.key, y.props, null, p.mode, S)),
                (S.ref = wr(p, h, y)),
                (S.return = p),
                (p = S));
          }
          return i(p);
        case Mn:
          e: {
            for (R = y.key; h !== null; ) {
              if (h.key === R)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === y.containerInfo &&
                  h.stateNode.implementation === y.implementation
                ) {
                  n(p, h.sibling),
                    (h = o(h, y.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = Qi(y, p.mode, S)), (h.return = p), (p = h);
          }
          return i(p);
        case Ft:
          return (R = y._init), x(p, h, R(y._payload), S);
      }
      if (Or(y)) return v(p, h, y, S);
      if (hr(y)) return w(p, h, y, S);
      Fo(p, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = o(h, y)), (h.return = p), (p = h))
          : (n(p, h), (h = qi(y, p.mode, S)), (h.return = p), (p = h)),
        i(p))
      : n(p, h);
  }
  return x;
}
var Zn = kf(!0),
  Nf = kf(!1),
  go = {},
  vt = rn(go),
  to = rn(go),
  no = rn(go);
function hn(e) {
  if (e === go) throw Error(T(174));
  return e;
}
function bs(e, t) {
  switch ((X(no, t), X(to, e), X(vt, go), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : va(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = va(t, e));
  }
  ee(vt), X(vt, t);
}
function er() {
  ee(vt), ee(to), ee(no);
}
function Of(e) {
  hn(no.current);
  var t = hn(vt.current),
    n = va(t, e.type);
  t !== n && (X(to, e), X(vt, n));
}
function js(e) {
  to.current === e && (ee(vt), ee(to));
}
var ne = rn(0);
function Nl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ji = [];
function Bs() {
  for (var e = 0; e < ji.length; e++)
    ji[e]._workInProgressVersionPrimary = null;
  ji.length = 0;
}
var Ko = Pt.ReactCurrentDispatcher,
  Bi = Pt.ReactCurrentBatchConfig,
  Sn = 0,
  re = null,
  ce = null,
  pe = null,
  Ol = !1,
  Fr = !1,
  ro = 0,
  f0 = 0;
function we() {
  throw Error(T(321));
}
function $s(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!at(e[n], t[n])) return !1;
  return !0;
}
function Ws(e, t, n, r, o, l) {
  if (
    ((Sn = l),
    (re = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ko.current = e === null || e.memoizedState === null ? v0 : g0),
    (e = n(r, o)),
    Fr)
  ) {
    l = 0;
    do {
      if (((Fr = !1), (ro = 0), 25 <= l)) throw Error(T(301));
      (l += 1),
        (pe = ce = null),
        (t.updateQueue = null),
        (Ko.current = y0),
        (e = n(r, o));
    } while (Fr);
  }
  if (
    ((Ko.current = _l),
    (t = ce !== null && ce.next !== null),
    (Sn = 0),
    (pe = ce = re = null),
    (Ol = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function Hs() {
  var e = ro !== 0;
  return (ro = 0), e;
}
function ft() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return pe === null ? (re.memoizedState = pe = e) : (pe = pe.next = e), pe;
}
function Je() {
  if (ce === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ce.next;
  var t = pe === null ? re.memoizedState : pe.next;
  if (t !== null) (pe = t), (ce = e);
  else {
    if (e === null) throw Error(T(310));
    (ce = e),
      (e = {
        memoizedState: ce.memoizedState,
        baseState: ce.baseState,
        baseQueue: ce.baseQueue,
        queue: ce.queue,
        next: null,
      }),
      pe === null ? (re.memoizedState = pe = e) : (pe = pe.next = e);
  }
  return pe;
}
function oo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function $i(e) {
  var t = Je(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = ce,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = l.next), (l.next = i);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var a = (i = null),
      s = null,
      u = l;
    do {
      var d = u.lane;
      if ((Sn & d) === d)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var c = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((a = s = c), (i = r)) : (s = s.next = c),
          (re.lanes |= d),
          (Cn |= d);
      }
      u = u.next;
    } while (u !== null && u !== l);
    s === null ? (i = r) : (s.next = a),
      at(r, t.memoizedState) || (Re = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (re.lanes |= l), (Cn |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Wi(e) {
  var t = Je(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    at(l, t.memoizedState) || (Re = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function _f() {}
function Tf(e, t) {
  var n = re,
    r = Je(),
    o = t(),
    l = !at(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (Re = !0)),
    (r = r.queue),
    Vs(Mf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (pe !== null && pe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      lo(9, Rf.bind(null, n, r, o, t), void 0, null),
      he === null)
    )
      throw Error(T(349));
    Sn & 30 || Pf(n, t, o);
  }
  return o;
}
function Pf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Rf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Lf(t) && Df(e);
}
function Mf(e, t, n) {
  return n(function () {
    Lf(t) && Df(e);
  });
}
function Lf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !at(e, n);
  } catch {
    return !0;
  }
}
function Df(e) {
  var t = _t(e, 1);
  t !== null && lt(t, e, 1, -1);
}
function lc(e) {
  var t = ft();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: oo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = m0.bind(null, re, e)),
    [t.memoizedState, e]
  );
}
function lo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function zf() {
  return Je().memoizedState;
}
function Go(e, t, n, r) {
  var o = ft();
  (re.flags |= e),
    (o.memoizedState = lo(1 | t, n, void 0, r === void 0 ? null : r));
}
function ti(e, t, n, r) {
  var o = Je();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ce !== null) {
    var i = ce.memoizedState;
    if (((l = i.destroy), r !== null && $s(r, i.deps))) {
      o.memoizedState = lo(t, n, l, r);
      return;
    }
  }
  (re.flags |= e), (o.memoizedState = lo(1 | t, n, l, r));
}
function ic(e, t) {
  return Go(8390656, 8, e, t);
}
function Vs(e, t) {
  return ti(2048, 8, e, t);
}
function Ff(e, t) {
  return ti(4, 2, e, t);
}
function Af(e, t) {
  return ti(4, 4, e, t);
}
function Uf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function If(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ti(4, 4, Uf.bind(null, t, e), n)
  );
}
function qs() {}
function bf(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $s(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function jf(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $s(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Bf(e, t, n) {
  return Sn & 21
    ? (at(n, t) || ((n = Wd()), (re.lanes |= n), (Cn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Re = !0)), (e.memoizedState = n));
}
function p0(e, t) {
  var n = K;
  (K = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Bi.transition;
  Bi.transition = {};
  try {
    e(!1), t();
  } finally {
    (K = n), (Bi.transition = r);
  }
}
function $f() {
  return Je().memoizedState;
}
function h0(e, t, n) {
  var r = Gt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Wf(e))
  )
    Hf(t, n);
  else if (((n = Sf(e, t, n, r)), n !== null)) {
    var o = Oe();
    lt(n, e, r, o), Vf(n, t, r);
  }
}
function m0(e, t, n) {
  var r = Gt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Wf(e)) Hf(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), at(a, i))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), Us(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Sf(e, t, o, r)),
      n !== null && ((o = Oe()), lt(n, e, r, o), Vf(n, t, r));
  }
}
function Wf(e) {
  var t = e.alternate;
  return e === re || (t !== null && t === re);
}
function Hf(e, t) {
  Fr = Ol = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Vf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), xs(e, n);
  }
}
var _l = {
    readContext: Xe,
    useCallback: we,
    useContext: we,
    useEffect: we,
    useImperativeHandle: we,
    useInsertionEffect: we,
    useLayoutEffect: we,
    useMemo: we,
    useReducer: we,
    useRef: we,
    useState: we,
    useDebugValue: we,
    useDeferredValue: we,
    useTransition: we,
    useMutableSource: we,
    useSyncExternalStore: we,
    useId: we,
    unstable_isNewReconciler: !1,
  },
  v0 = {
    readContext: Xe,
    useCallback: function (e, t) {
      return (ft().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Xe,
    useEffect: ic,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Go(4194308, 4, Uf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Go(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Go(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ft();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ft();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = h0.bind(null, re, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ft();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: lc,
    useDebugValue: qs,
    useDeferredValue: function (e) {
      return (ft().memoizedState = e);
    },
    useTransition: function () {
      var e = lc(!1),
        t = e[0];
      return (e = p0.bind(null, e[1])), (ft().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = re,
        o = ft();
      if (te) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), he === null)) throw Error(T(349));
        Sn & 30 || Pf(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        ic(Mf.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        lo(9, Rf.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ft(),
        t = he.identifierPrefix;
      if (te) {
        var n = Ct,
          r = St;
        (n = (r & ~(1 << (32 - ot(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ro++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = f0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  g0 = {
    readContext: Xe,
    useCallback: bf,
    useContext: Xe,
    useEffect: Vs,
    useImperativeHandle: If,
    useInsertionEffect: Ff,
    useLayoutEffect: Af,
    useMemo: jf,
    useReducer: $i,
    useRef: zf,
    useState: function () {
      return $i(oo);
    },
    useDebugValue: qs,
    useDeferredValue: function (e) {
      var t = Je();
      return Bf(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = $i(oo)[0],
        t = Je().memoizedState;
      return [e, t];
    },
    useMutableSource: _f,
    useSyncExternalStore: Tf,
    useId: $f,
    unstable_isNewReconciler: !1,
  },
  y0 = {
    readContext: Xe,
    useCallback: bf,
    useContext: Xe,
    useEffect: Vs,
    useImperativeHandle: If,
    useInsertionEffect: Ff,
    useLayoutEffect: Af,
    useMemo: jf,
    useReducer: Wi,
    useRef: zf,
    useState: function () {
      return Wi(oo);
    },
    useDebugValue: qs,
    useDeferredValue: function (e) {
      var t = Je();
      return ce === null ? (t.memoizedState = e) : Bf(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = Wi(oo)[0],
        t = Je().memoizedState;
      return [e, t];
    },
    useMutableSource: _f,
    useSyncExternalStore: Tf,
    useId: $f,
    unstable_isNewReconciler: !1,
  };
function tr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += qh(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Hi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ba(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var w0 = typeof WeakMap == "function" ? WeakMap : Map;
function qf(e, t, n) {
  (n = xt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Pl || ((Pl = !0), (Ka = r)), ba(e, t);
    }),
    n
  );
}
function Qf(e, t, n) {
  (n = xt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ba(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        ba(e, t),
          typeof r != "function" &&
            (Kt === null ? (Kt = new Set([this])) : Kt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function ac(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new w0();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = D0.bind(null, e, t, n)), t.then(e, e));
}
function sc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function uc(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = xt(-1, 1)), (t.tag = 2), Yt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var S0 = Pt.ReactCurrentOwner,
  Re = !1;
function Ne(e, t, n, r) {
  t.child = e === null ? Nf(t, null, n, r) : Zn(t, e.child, n, r);
}
function cc(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    Yn(t, o),
    (r = Ws(e, t, n, r, l, o)),
    (n = Hs()),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Tt(e, t, o))
      : (te && n && Ms(t), (t.flags |= 1), Ne(e, t, r, o), t.child)
  );
}
function dc(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !eu(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Yf(e, t, l, r, o))
      : ((e = el(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Xr), n(i, r) && e.ref === t.ref)
    )
      return Tt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Xt(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Yf(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Xr(l, r) && e.ref === t.ref)
      if (((Re = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (Re = !0);
      else return (t.lanes = e.lanes), Tt(e, t, o);
  }
  return ja(e, t, n, r, o);
}
function Kf(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        X($n, Fe),
        (Fe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          X($n, Fe),
          (Fe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        X($n, Fe),
        (Fe |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      X($n, Fe),
      (Fe |= r);
  return Ne(e, t, o, n), t.child;
}
function Gf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ja(e, t, n, r, o) {
  var l = De(n) ? yn : ke.current;
  return (
    (l = Xn(t, l)),
    Yn(t, o),
    (n = Ws(e, t, n, r, l, o)),
    (r = Hs()),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Tt(e, t, o))
      : (te && r && Ms(t), (t.flags |= 1), Ne(e, t, n, o), t.child)
  );
}
function fc(e, t, n, r, o) {
  if (De(n)) {
    var l = !0;
    wl(t);
  } else l = !1;
  if ((Yn(t, o), t.stateNode === null))
    Xo(e, t), xf(t, n, r), Ia(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var s = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Xe(u))
      : ((u = De(n) ? yn : ke.current), (u = Xn(t, u)));
    var d = n.getDerivedStateFromProps,
      c =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && rc(t, i, r, u)),
      (At = !1);
    var f = t.memoizedState;
    (i.state = f),
      kl(t, r, i, o),
      (s = t.memoizedState),
      a !== r || f !== s || Le.current || At
        ? (typeof d == "function" && (Ua(t, n, d, r), (s = t.memoizedState)),
          (a = At || nc(t, n, a, r, f, s, u))
            ? (c ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = u),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Cf(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : et(t.type, a)),
      (i.props = u),
      (c = t.pendingProps),
      (f = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Xe(s))
        : ((s = De(n) ? yn : ke.current), (s = Xn(t, s)));
    var g = n.getDerivedStateFromProps;
    (d =
      typeof g == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== c || f !== s) && rc(t, i, r, s)),
      (At = !1),
      (f = t.memoizedState),
      (i.state = f),
      kl(t, r, i, o);
    var v = t.memoizedState;
    a !== c || f !== v || Le.current || At
      ? (typeof g == "function" && (Ua(t, n, g, r), (v = t.memoizedState)),
        (u = At || nc(t, n, u, r, f, v, s) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, v, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, v, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (i.props = r),
        (i.state = v),
        (i.context = s),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ba(e, t, n, r, l, o);
}
function Ba(e, t, n, r, o, l) {
  Gf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Xu(t, n, !1), Tt(e, t, l);
  (r = t.stateNode), (S0.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Zn(t, e.child, null, l)), (t.child = Zn(t, null, a, l)))
      : Ne(e, t, a, l),
    (t.memoizedState = r.state),
    o && Xu(t, n, !0),
    t.child
  );
}
function Xf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Gu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Gu(e, t.context, !1),
    bs(e, t.containerInfo);
}
function pc(e, t, n, r, o) {
  return Jn(), Ds(o), (t.flags |= 256), Ne(e, t, n, r), t.child;
}
var $a = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Jf(e, t, n) {
  var r = t.pendingProps,
    o = ne.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    X(ne, o & 1),
    e === null)
  )
    return (
      Fa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = oi(i, r, 0, null)),
              (e = vn(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Wa(n)),
              (t.memoizedState = $a),
              e)
            : Qs(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return C0(e, t, i, r, a, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (a = o.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Xt(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (l = Xt(a, l)) : ((l = vn(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Wa(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = $a),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = Xt(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Qs(e, t) {
  return (
    (t = oi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ao(e, t, n, r) {
  return (
    r !== null && Ds(r),
    Zn(t, e.child, null, n),
    (e = Qs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function C0(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Hi(Error(T(422)))), Ao(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = oi({ mode: "visible", children: r.children }, o, 0, null)),
        (l = vn(l, o, i, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && Zn(t, e.child, null, i),
        (t.child.memoizedState = Wa(i)),
        (t.memoizedState = $a),
        l);
  if (!(t.mode & 1)) return Ao(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (l = Error(T(419))), (r = Hi(l, r, void 0)), Ao(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), Re || a)) {
    if (((r = he), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), _t(e, o), lt(r, e, o, -1));
    }
    return Zs(), (r = Hi(Error(T(421)))), Ao(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = z0.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Ae = Qt(o.nextSibling)),
      (Ue = t),
      (te = !0),
      (rt = null),
      e !== null &&
        ((qe[Qe++] = St),
        (qe[Qe++] = Ct),
        (qe[Qe++] = wn),
        (St = e.id),
        (Ct = e.overflow),
        (wn = t)),
      (t = Qs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function hc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Aa(e.return, t, n);
}
function Vi(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function Zf(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((Ne(e, t, r.children, n), (r = ne.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && hc(e, n, t);
        else if (e.tag === 19) hc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((X(ne, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Nl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Vi(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Nl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Vi(t, !0, n, null, l);
        break;
      case "together":
        Vi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Xo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Tt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Cn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Xt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function E0(e, t, n) {
  switch (t.tag) {
    case 3:
      Xf(t), Jn();
      break;
    case 5:
      Of(t);
      break;
    case 1:
      De(t.type) && wl(t);
      break;
    case 4:
      bs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      X(El, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (X(ne, ne.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Jf(e, t, n)
          : (X(ne, ne.current & 1),
            (e = Tt(e, t, n)),
            e !== null ? e.sibling : null);
      X(ne, ne.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Zf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        X(ne, ne.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Kf(e, t, n);
  }
  return Tt(e, t, n);
}
var ep, Ha, tp, np;
ep = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ha = function () {};
tp = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), hn(vt.current);
    var l = null;
    switch (n) {
      case "input":
        (o = fa(e, o)), (r = fa(e, r)), (l = []);
        break;
      case "select":
        (o = oe({}, o, { value: void 0 })),
          (r = oe({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = ma(e, o)), (r = ma(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = gl);
    }
    ga(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Hr.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                a[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (l || (l = []), l.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (l = l || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (l = l || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Hr.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && J("scroll", e),
                  l || a === s || (l = []))
                : (l = l || []).push(u, s));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
np = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sr(e, t) {
  if (!te)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function x0(e, t, n) {
  var r = t.pendingProps;
  switch ((Ls(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Se(t), null;
    case 1:
      return De(t.type) && yl(), Se(t), null;
    case 3:
      return (
        (r = t.stateNode),
        er(),
        ee(Le),
        ee(ke),
        Bs(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (zo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), rt !== null && (Ja(rt), (rt = null)))),
        Ha(e, t),
        Se(t),
        null
      );
    case 5:
      js(t);
      var o = hn(no.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        tp(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return Se(t), null;
        }
        if (((e = hn(vt.current)), zo(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[pt] = t), (r[eo] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              J("cancel", r), J("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              J("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Tr.length; o++) J(Tr[o], r);
              break;
            case "source":
              J("error", r);
              break;
            case "img":
            case "image":
            case "link":
              J("error", r), J("load", r);
              break;
            case "details":
              J("toggle", r);
              break;
            case "input":
              xu(r, l), J("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                J("invalid", r);
              break;
            case "textarea":
              Nu(r, l), J("invalid", r);
          }
          ga(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (l.suppressHydrationWarning !== !0 &&
                      Do(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (l.suppressHydrationWarning !== !0 &&
                      Do(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Hr.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  J("scroll", r);
            }
          switch (n) {
            case "input":
              No(r), ku(r, l, !0);
              break;
            case "textarea":
              No(r), Ou(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = gl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Td(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[pt] = t),
            (e[eo] = r),
            ep(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ya(n, r)), n)) {
              case "dialog":
                J("cancel", e), J("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Tr.length; o++) J(Tr[o], e);
                o = r;
                break;
              case "source":
                J("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                J("error", e), J("load", e), (o = r);
                break;
              case "details":
                J("toggle", e), (o = r);
                break;
              case "input":
                xu(e, r), (o = fa(e, r)), J("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = oe({}, r, { value: void 0 })),
                  J("invalid", e);
                break;
              case "textarea":
                Nu(e, r), (o = ma(e, r)), J("invalid", e);
                break;
              default:
                o = r;
            }
            ga(n, o), (a = o);
            for (l in a)
              if (a.hasOwnProperty(l)) {
                var s = a[l];
                l === "style"
                  ? Md(e, s)
                  : l === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Pd(e, s))
                  : l === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Vr(e, s)
                    : typeof s == "number" && Vr(e, "" + s)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Hr.hasOwnProperty(l)
                      ? s != null && l === "onScroll" && J("scroll", e)
                      : s != null && gs(e, l, s, i));
              }
            switch (n) {
              case "input":
                No(e), ku(e, r, !1);
                break;
              case "textarea":
                No(e), Ou(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Zt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Hn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Hn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = gl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Se(t), null;
    case 6:
      if (e && t.stateNode != null) np(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = hn(no.current)), hn(vt.current), zo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[pt] = t),
            (l = r.nodeValue !== n) && ((e = Ue), e !== null))
          )
            switch (e.tag) {
              case 3:
                Do(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Do(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[pt] = t),
            (t.stateNode = r);
      }
      return Se(t), null;
    case 13:
      if (
        (ee(ne),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (te && Ae !== null && t.mode & 1 && !(t.flags & 128))
          wf(), Jn(), (t.flags |= 98560), (l = !1);
        else if (((l = zo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(T(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(T(317));
            l[pt] = t;
          } else
            Jn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Se(t), (l = !1);
        } else rt !== null && (Ja(rt), (rt = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ne.current & 1 ? de === 0 && (de = 3) : Zs())),
          t.updateQueue !== null && (t.flags |= 4),
          Se(t),
          null);
    case 4:
      return (
        er(), Ha(e, t), e === null && Jr(t.stateNode.containerInfo), Se(t), null
      );
    case 10:
      return As(t.type._context), Se(t), null;
    case 17:
      return De(t.type) && yl(), Se(t), null;
    case 19:
      if ((ee(ne), (l = t.memoizedState), l === null)) return Se(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) Sr(l, !1);
        else {
          if (de !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Nl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Sr(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return X(ne, (ne.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            ie() > nr &&
            ((t.flags |= 128), (r = !0), Sr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Nl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Sr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !te)
            )
              return Se(t), null;
          } else
            2 * ie() - l.renderingStartTime > nr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Sr(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = ie()),
          (t.sibling = null),
          (n = ne.current),
          X(ne, r ? (n & 1) | 2 : n & 1),
          t)
        : (Se(t), null);
    case 22:
    case 23:
      return (
        Js(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Fe & 1073741824 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Se(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function k0(e, t) {
  switch ((Ls(t), t.tag)) {
    case 1:
      return (
        De(t.type) && yl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        er(),
        ee(Le),
        ee(ke),
        Bs(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return js(t), null;
    case 13:
      if (
        (ee(ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(T(340));
        Jn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ee(ne), null;
    case 4:
      return er(), null;
    case 10:
      return As(t.type._context), null;
    case 22:
    case 23:
      return Js(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Uo = !1,
  Ee = !1,
  N0 = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function Bn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        le(e, t, r);
      }
    else n.current = null;
}
function Va(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var mc = !1;
function O0(e, t) {
  if (((Ta = hl), (e = lf()), Rs(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            s = -1,
            u = 0,
            d = 0,
            c = e,
            f = null;
          t: for (;;) {
            for (
              var g;
              c !== n || (o !== 0 && c.nodeType !== 3) || (a = i + o),
                c !== l || (r !== 0 && c.nodeType !== 3) || (s = i + r),
                c.nodeType === 3 && (i += c.nodeValue.length),
                (g = c.firstChild) !== null;

            )
              (f = c), (c = g);
            for (;;) {
              if (c === e) break t;
              if (
                (f === n && ++u === o && (a = i),
                f === l && ++d === r && (s = i),
                (g = c.nextSibling) !== null)
              )
                break;
              (c = f), (f = c.parentNode);
            }
            c = g;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Pa = { focusedElem: e, selectionRange: n }, hl = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var w = v.memoizedProps,
                    x = v.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : et(t.type, w),
                      x
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (S) {
          le(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (v = mc), (mc = !1), v;
}
function Ar(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && Va(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ni(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function qa(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function rp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), rp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[pt], delete t[eo], delete t[La], delete t[s0], delete t[u0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function op(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || op(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Qa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = gl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Qa(e, t, n), e = e.sibling; e !== null; ) Qa(e, t, n), (e = e.sibling);
}
function Ya(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ya(e, t, n), e = e.sibling; e !== null; ) Ya(e, t, n), (e = e.sibling);
}
var me = null,
  nt = !1;
function Lt(e, t, n) {
  for (n = n.child; n !== null; ) lp(e, t, n), (n = n.sibling);
}
function lp(e, t, n) {
  if (mt && typeof mt.onCommitFiberUnmount == "function")
    try {
      mt.onCommitFiberUnmount(Yl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ee || Bn(n, t);
    case 6:
      var r = me,
        o = nt;
      (me = null),
        Lt(e, t, n),
        (me = r),
        (nt = o),
        me !== null &&
          (nt
            ? ((e = me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : me.removeChild(n.stateNode));
      break;
    case 18:
      me !== null &&
        (nt
          ? ((e = me),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ii(e.parentNode, n)
              : e.nodeType === 1 && Ii(e, n),
            Kr(e))
          : Ii(me, n.stateNode));
      break;
    case 4:
      (r = me),
        (o = nt),
        (me = n.stateNode.containerInfo),
        (nt = !0),
        Lt(e, t, n),
        (me = r),
        (nt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ee &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && Va(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      Lt(e, t, n);
      break;
    case 1:
      if (
        !Ee &&
        (Bn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          le(n, t, a);
        }
      Lt(e, t, n);
      break;
    case 21:
      Lt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ee = (r = Ee) || n.memoizedState !== null), Lt(e, t, n), (Ee = r))
        : Lt(e, t, n);
      break;
    default:
      Lt(e, t, n);
  }
}
function gc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new N0()),
      t.forEach(function (r) {
        var o = F0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (me = a.stateNode), (nt = !1);
              break e;
            case 3:
              (me = a.stateNode.containerInfo), (nt = !0);
              break e;
            case 4:
              (me = a.stateNode.containerInfo), (nt = !0);
              break e;
          }
          a = a.return;
        }
        if (me === null) throw Error(T(160));
        lp(l, i, o), (me = null), (nt = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        le(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ip(t, e), (t = t.sibling);
}
function ip(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ze(t, e), dt(e), r & 4)) {
        try {
          Ar(3, e, e.return), ni(3, e);
        } catch (w) {
          le(e, e.return, w);
        }
        try {
          Ar(5, e, e.return);
        } catch (w) {
          le(e, e.return, w);
        }
      }
      break;
    case 1:
      Ze(t, e), dt(e), r & 512 && n !== null && Bn(n, n.return);
      break;
    case 5:
      if (
        (Ze(t, e),
        dt(e),
        r & 512 && n !== null && Bn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Vr(o, "");
        } catch (w) {
          le(e, e.return, w);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && l.type === "radio" && l.name != null && Od(o, l),
              ya(a, i);
            var u = ya(a, l);
            for (i = 0; i < s.length; i += 2) {
              var d = s[i],
                c = s[i + 1];
              d === "style"
                ? Md(o, c)
                : d === "dangerouslySetInnerHTML"
                ? Pd(o, c)
                : d === "children"
                ? Vr(o, c)
                : gs(o, d, c, u);
            }
            switch (a) {
              case "input":
                pa(o, l);
                break;
              case "textarea":
                _d(o, l);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var g = l.value;
                g != null
                  ? Hn(o, !!l.multiple, g, !1)
                  : f !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Hn(o, !!l.multiple, l.defaultValue, !0)
                      : Hn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[eo] = l;
          } catch (w) {
            le(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ze(t, e), dt(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (w) {
          le(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Ze(t, e), dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Kr(t.containerInfo);
        } catch (w) {
          le(e, e.return, w);
        }
      break;
    case 4:
      Ze(t, e), dt(e);
      break;
    case 13:
      Ze(t, e),
        dt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Gs = ie())),
        r & 4 && gc(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ee = (u = Ee) || d), Ze(t, e), (Ee = u)) : Ze(t, e),
        dt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (z = e, d = e.child; d !== null; ) {
            for (c = z = d; z !== null; ) {
              switch (((f = z), (g = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ar(4, f, f.return);
                  break;
                case 1:
                  Bn(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (w) {
                      le(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Bn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    wc(c);
                    continue;
                  }
              }
              g !== null ? ((g.return = f), (z = g)) : wc(c);
            }
            d = d.sibling;
          }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                (o = c.stateNode),
                  u
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((a = c.stateNode),
                      (s = c.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = Rd("display", i)));
              } catch (w) {
                le(e, e.return, w);
              }
            }
          } else if (c.tag === 6) {
            if (d === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (w) {
                le(e, e.return, w);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            d === c && (d = null), (c = c.return);
          }
          d === c && (d = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      Ze(t, e), dt(e), r & 4 && gc(e);
      break;
    case 21:
      break;
    default:
      Ze(t, e), dt(e);
  }
}
function dt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (op(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Vr(o, ""), (r.flags &= -33));
          var l = vc(e);
          Ya(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = vc(e);
          Qa(e, a, i);
          break;
        default:
          throw Error(T(161));
      }
    } catch (s) {
      le(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function _0(e, t, n) {
  (z = e), ap(e);
}
function ap(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var o = z,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Uo;
      if (!i) {
        var a = o.alternate,
          s = (a !== null && a.memoizedState !== null) || Ee;
        a = Uo;
        var u = Ee;
        if (((Uo = i), (Ee = s) && !u))
          for (z = o; z !== null; )
            (i = z),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Sc(o)
                : s !== null
                ? ((s.return = i), (z = s))
                : Sc(o);
        for (; l !== null; ) (z = l), ap(l), (l = l.sibling);
        (z = o), (Uo = a), (Ee = u);
      }
      yc(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (z = l)) : yc(e);
  }
}
function yc(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ee || ni(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ee)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : et(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && tc(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                tc(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var c = d.dehydrated;
                    c !== null && Kr(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(T(163));
          }
        Ee || (t.flags & 512 && qa(t));
      } catch (f) {
        le(t, t.return, f);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function wc(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Sc(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ni(4, t);
          } catch (s) {
            le(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              le(t, o, s);
            }
          }
          var l = t.return;
          try {
            qa(t);
          } catch (s) {
            le(t, l, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            qa(t);
          } catch (s) {
            le(t, i, s);
          }
      }
    } catch (s) {
      le(t, t.return, s);
    }
    if (t === e) {
      z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (z = a);
      break;
    }
    z = t.return;
  }
}
var T0 = Math.ceil,
  Tl = Pt.ReactCurrentDispatcher,
  Ys = Pt.ReactCurrentOwner,
  Ke = Pt.ReactCurrentBatchConfig,
  q = 0,
  he = null,
  se = null,
  ve = 0,
  Fe = 0,
  $n = rn(0),
  de = 0,
  io = null,
  Cn = 0,
  ri = 0,
  Ks = 0,
  Ur = null,
  Pe = null,
  Gs = 0,
  nr = 1 / 0,
  yt = null,
  Pl = !1,
  Ka = null,
  Kt = null,
  Io = !1,
  jt = null,
  Rl = 0,
  Ir = 0,
  Ga = null,
  Jo = -1,
  Zo = 0;
function Oe() {
  return q & 6 ? ie() : Jo !== -1 ? Jo : (Jo = ie());
}
function Gt(e) {
  return e.mode & 1
    ? q & 2 && ve !== 0
      ? ve & -ve
      : d0.transition !== null
      ? (Zo === 0 && (Zo = Wd()), Zo)
      : ((e = K),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Gd(e.type))),
        e)
    : 1;
}
function lt(e, t, n, r) {
  if (50 < Ir) throw ((Ir = 0), (Ga = null), Error(T(185)));
  ho(e, n, r),
    (!(q & 2) || e !== he) &&
      (e === he && (!(q & 2) && (ri |= n), de === 4 && It(e, ve)),
      ze(e, r),
      n === 1 && q === 0 && !(t.mode & 1) && ((nr = ie() + 500), Zl && on()));
}
function ze(e, t) {
  var n = e.callbackNode;
  dm(e, t);
  var r = pl(e, e === he ? ve : 0);
  if (r === 0)
    n !== null && Pu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Pu(n), t === 1))
      e.tag === 0 ? c0(Cc.bind(null, e)) : vf(Cc.bind(null, e)),
        i0(function () {
          !(q & 6) && on();
        }),
        (n = null);
    else {
      switch (Hd(r)) {
        case 1:
          n = Es;
          break;
        case 4:
          n = Bd;
          break;
        case 16:
          n = fl;
          break;
        case 536870912:
          n = $d;
          break;
        default:
          n = fl;
      }
      n = mp(n, sp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function sp(e, t) {
  if (((Jo = -1), (Zo = 0), q & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (Kn() && e.callbackNode !== n) return null;
  var r = pl(e, e === he ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ml(e, r);
  else {
    t = r;
    var o = q;
    q |= 2;
    var l = cp();
    (he !== e || ve !== t) && ((yt = null), (nr = ie() + 500), mn(e, t));
    do
      try {
        M0();
        break;
      } catch (a) {
        up(e, a);
      }
    while (1);
    Fs(),
      (Tl.current = l),
      (q = o),
      se !== null ? (t = 0) : ((he = null), (ve = 0), (t = de));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = xa(e)), o !== 0 && ((r = o), (t = Xa(e, o)))), t === 1)
    )
      throw ((n = io), mn(e, 0), It(e, r), ze(e, ie()), n);
    if (t === 6) It(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !P0(o) &&
          ((t = Ml(e, r)),
          t === 2 && ((l = xa(e)), l !== 0 && ((r = l), (t = Xa(e, l)))),
          t === 1))
      )
        throw ((n = io), mn(e, 0), It(e, r), ze(e, ie()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          sn(e, Pe, yt);
          break;
        case 3:
          if (
            (It(e, r), (r & 130023424) === r && ((t = Gs + 500 - ie()), 10 < t))
          ) {
            if (pl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Oe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Ma(sn.bind(null, e, Pe, yt), t);
            break;
          }
          sn(e, Pe, yt);
          break;
        case 4:
          if ((It(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - ot(r);
            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
          }
          if (
            ((r = o),
            (r = ie() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * T0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ma(sn.bind(null, e, Pe, yt), r);
            break;
          }
          sn(e, Pe, yt);
          break;
        case 5:
          sn(e, Pe, yt);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return ze(e, ie()), e.callbackNode === n ? sp.bind(null, e) : null;
}
function Xa(e, t) {
  var n = Ur;
  return (
    e.current.memoizedState.isDehydrated && (mn(e, t).flags |= 256),
    (e = Ml(e, t)),
    e !== 2 && ((t = Pe), (Pe = n), t !== null && Ja(t)),
    e
  );
}
function Ja(e) {
  Pe === null ? (Pe = e) : Pe.push.apply(Pe, e);
}
function P0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!at(l(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function It(e, t) {
  for (
    t &= ~Ks,
      t &= ~ri,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ot(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Cc(e) {
  if (q & 6) throw Error(T(327));
  Kn();
  var t = pl(e, 0);
  if (!(t & 1)) return ze(e, ie()), null;
  var n = Ml(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = xa(e);
    r !== 0 && ((t = r), (n = Xa(e, r)));
  }
  if (n === 1) throw ((n = io), mn(e, 0), It(e, t), ze(e, ie()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    sn(e, Pe, yt),
    ze(e, ie()),
    null
  );
}
function Xs(e, t) {
  var n = q;
  q |= 1;
  try {
    return e(t);
  } finally {
    (q = n), q === 0 && ((nr = ie() + 500), Zl && on());
  }
}
function En(e) {
  jt !== null && jt.tag === 0 && !(q & 6) && Kn();
  var t = q;
  q |= 1;
  var n = Ke.transition,
    r = K;
  try {
    if (((Ke.transition = null), (K = 1), e)) return e();
  } finally {
    (K = r), (Ke.transition = n), (q = t), !(q & 6) && on();
  }
}
function Js() {
  (Fe = $n.current), ee($n);
}
function mn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), l0(n)), se !== null))
    for (n = se.return; n !== null; ) {
      var r = n;
      switch ((Ls(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && yl();
          break;
        case 3:
          er(), ee(Le), ee(ke), Bs();
          break;
        case 5:
          js(r);
          break;
        case 4:
          er();
          break;
        case 13:
          ee(ne);
          break;
        case 19:
          ee(ne);
          break;
        case 10:
          As(r.type._context);
          break;
        case 22:
        case 23:
          Js();
      }
      n = n.return;
    }
  if (
    ((he = e),
    (se = e = Xt(e.current, null)),
    (ve = Fe = t),
    (de = 0),
    (io = null),
    (Ks = ri = Cn = 0),
    (Pe = Ur = null),
    pn !== null)
  ) {
    for (t = 0; t < pn.length; t++)
      if (((n = pn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    pn = null;
  }
  return e;
}
function up(e, t) {
  do {
    var n = se;
    try {
      if ((Fs(), (Ko.current = _l), Ol)) {
        for (var r = re.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Ol = !1;
      }
      if (
        ((Sn = 0),
        (pe = ce = re = null),
        (Fr = !1),
        (ro = 0),
        (Ys.current = null),
        n === null || n.return === null)
      ) {
        (de = 1), (io = t), (se = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          a = n,
          s = t;
        if (
          ((t = ve),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            d = a,
            c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var g = sc(i);
          if (g !== null) {
            (g.flags &= -257),
              uc(g, i, a, l, t),
              g.mode & 1 && ac(l, u, t),
              (t = g),
              (s = u);
            var v = t.updateQueue;
            if (v === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ac(l, u, t), Zs();
              break e;
            }
            s = Error(T(426));
          }
        } else if (te && a.mode & 1) {
          var x = sc(i);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              uc(x, i, a, l, t),
              Ds(tr(s, a));
            break e;
          }
        }
        (l = s = tr(s, a)),
          de !== 4 && (de = 2),
          Ur === null ? (Ur = [l]) : Ur.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var p = qf(l, s, t);
              ec(l, p);
              break e;
            case 1:
              a = s;
              var h = l.type,
                y = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Kt === null || !Kt.has(y))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var S = Qf(l, a, t);
                ec(l, S);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      fp(n);
    } catch (_) {
      (t = _), se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function cp() {
  var e = Tl.current;
  return (Tl.current = _l), e === null ? _l : e;
}
function Zs() {
  (de === 0 || de === 3 || de === 2) && (de = 4),
    he === null || (!(Cn & 268435455) && !(ri & 268435455)) || It(he, ve);
}
function Ml(e, t) {
  var n = q;
  q |= 2;
  var r = cp();
  (he !== e || ve !== t) && ((yt = null), mn(e, t));
  do
    try {
      R0();
      break;
    } catch (o) {
      up(e, o);
    }
  while (1);
  if ((Fs(), (q = n), (Tl.current = r), se !== null)) throw Error(T(261));
  return (he = null), (ve = 0), de;
}
function R0() {
  for (; se !== null; ) dp(se);
}
function M0() {
  for (; se !== null && !nm(); ) dp(se);
}
function dp(e) {
  var t = hp(e.alternate, e, Fe);
  (e.memoizedProps = e.pendingProps),
    t === null ? fp(e) : (se = t),
    (Ys.current = null);
}
function fp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = k0(n, t)), n !== null)) {
        (n.flags &= 32767), (se = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (de = 6), (se = null);
        return;
      }
    } else if (((n = x0(n, t, Fe)), n !== null)) {
      se = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  de === 0 && (de = 5);
}
function sn(e, t, n) {
  var r = K,
    o = Ke.transition;
  try {
    (Ke.transition = null), (K = 1), L0(e, t, n, r);
  } finally {
    (Ke.transition = o), (K = r);
  }
  return null;
}
function L0(e, t, n, r) {
  do Kn();
  while (jt !== null);
  if (q & 6) throw Error(T(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (fm(e, l),
    e === he && ((se = he = null), (ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Io ||
      ((Io = !0),
      mp(fl, function () {
        return Kn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Ke.transition), (Ke.transition = null);
    var i = K;
    K = 1;
    var a = q;
    (q |= 4),
      (Ys.current = null),
      O0(e, n),
      ip(n, e),
      Jm(Pa),
      (hl = !!Ta),
      (Pa = Ta = null),
      (e.current = n),
      _0(n),
      rm(),
      (q = a),
      (K = i),
      (Ke.transition = l);
  } else e.current = n;
  if (
    (Io && ((Io = !1), (jt = e), (Rl = o)),
    (l = e.pendingLanes),
    l === 0 && (Kt = null),
    im(n.stateNode),
    ze(e, ie()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Pl) throw ((Pl = !1), (e = Ka), (Ka = null), e);
  return (
    Rl & 1 && e.tag !== 0 && Kn(),
    (l = e.pendingLanes),
    l & 1 ? (e === Ga ? Ir++ : ((Ir = 0), (Ga = e))) : (Ir = 0),
    on(),
    null
  );
}
function Kn() {
  if (jt !== null) {
    var e = Hd(Rl),
      t = Ke.transition,
      n = K;
    try {
      if (((Ke.transition = null), (K = 16 > e ? 16 : e), jt === null))
        var r = !1;
      else {
        if (((e = jt), (jt = null), (Rl = 0), q & 6)) throw Error(T(331));
        var o = q;
        for (q |= 4, z = e.current; z !== null; ) {
          var l = z,
            i = l.child;
          if (z.flags & 16) {
            var a = l.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (z = u; z !== null; ) {
                  var d = z;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ar(8, d, l);
                  }
                  var c = d.child;
                  if (c !== null) (c.return = d), (z = c);
                  else
                    for (; z !== null; ) {
                      d = z;
                      var f = d.sibling,
                        g = d.return;
                      if ((rp(d), d === u)) {
                        z = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = g), (z = f);
                        break;
                      }
                      z = g;
                    }
                }
              }
              var v = l.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var x = w.sibling;
                    (w.sibling = null), (w = x);
                  } while (w !== null);
                }
              }
              z = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (z = i);
          else
            e: for (; z !== null; ) {
              if (((l = z), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ar(9, l, l.return);
                }
              var p = l.sibling;
              if (p !== null) {
                (p.return = l.return), (z = p);
                break e;
              }
              z = l.return;
            }
        }
        var h = e.current;
        for (z = h; z !== null; ) {
          i = z;
          var y = i.child;
          if (i.subtreeFlags & 2064 && y !== null) (y.return = i), (z = y);
          else
            e: for (i = h; z !== null; ) {
              if (((a = z), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ni(9, a);
                  }
                } catch (_) {
                  le(a, a.return, _);
                }
              if (a === i) {
                z = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (z = S);
                break e;
              }
              z = a.return;
            }
        }
        if (
          ((q = o), on(), mt && typeof mt.onPostCommitFiberRoot == "function")
        )
          try {
            mt.onPostCommitFiberRoot(Yl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (K = n), (Ke.transition = t);
    }
  }
  return !1;
}
function Ec(e, t, n) {
  (t = tr(n, t)),
    (t = qf(e, t, 1)),
    (e = Yt(e, t, 1)),
    (t = Oe()),
    e !== null && (ho(e, 1, t), ze(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) Ec(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ec(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Kt === null || !Kt.has(r)))
        ) {
          (e = tr(n, e)),
            (e = Qf(t, e, 1)),
            (t = Yt(t, e, 1)),
            (e = Oe()),
            t !== null && (ho(t, 1, e), ze(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function D0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Oe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    he === e &&
      (ve & n) === n &&
      (de === 4 || (de === 3 && (ve & 130023424) === ve && 500 > ie() - Gs)
        ? mn(e, 0)
        : (Ks |= n)),
    ze(e, t);
}
function pp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = To), (To <<= 1), !(To & 130023424) && (To = 4194304))
      : (t = 1));
  var n = Oe();
  (e = _t(e, t)), e !== null && (ho(e, t, n), ze(e, n));
}
function z0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), pp(e, n);
}
function F0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  r !== null && r.delete(t), pp(e, n);
}
var hp;
hp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Le.current) Re = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Re = !1), E0(e, t, n);
      Re = !!(e.flags & 131072);
    }
  else (Re = !1), te && t.flags & 1048576 && gf(t, Cl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Xo(e, t), (e = t.pendingProps);
      var o = Xn(t, ke.current);
      Yn(t, n), (o = Ws(null, t, r, e, o, n));
      var l = Hs();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            De(r) ? ((l = !0), wl(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Is(t),
            (o.updater = ei),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ia(t, r, e, n),
            (t = Ba(null, t, r, !0, l, n)))
          : ((t.tag = 0), te && l && Ms(t), Ne(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Xo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = U0(r)),
          (e = et(r, e)),
          o)
        ) {
          case 0:
            t = ja(null, t, r, e, n);
            break e;
          case 1:
            t = fc(null, t, r, e, n);
            break e;
          case 11:
            t = cc(null, t, r, e, n);
            break e;
          case 14:
            t = dc(null, t, r, et(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        ja(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        fc(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Xf(t), e === null)) throw Error(T(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Cf(e, t),
          kl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = tr(Error(T(423)), t)), (t = pc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = tr(Error(T(424)), t)), (t = pc(e, t, r, n, o));
            break e;
          } else
            for (
              Ae = Qt(t.stateNode.containerInfo.firstChild),
                Ue = t,
                te = !0,
                rt = null,
                n = Nf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Jn(), r === o)) {
            t = Tt(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Of(t),
        e === null && Fa(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Ra(r, o) ? (i = null) : l !== null && Ra(r, l) && (t.flags |= 32),
        Gf(e, t),
        Ne(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Fa(t), null;
    case 13:
      return Jf(e, t, n);
    case 4:
      return (
        bs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Zn(t, null, r, n)) : Ne(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        cc(e, t, r, o, n)
      );
    case 7:
      return Ne(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          X(El, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (at(l.value, i)) {
            if (l.children === o.children && !Le.current) {
              t = Tt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var a = l.dependencies;
              if (a !== null) {
                i = l.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (l.tag === 1) {
                      (s = xt(-1, n & -n)), (s.tag = 2);
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (s.next = s)
                          : ((s.next = d.next), (d.next = s)),
                          (u.pending = s);
                      }
                    }
                    (l.lanes |= n),
                      (s = l.alternate),
                      s !== null && (s.lanes |= n),
                      Aa(l.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(T(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Aa(i, n, t),
                  (i = l.sibling);
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        Ne(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Yn(t, n),
        (o = Xe(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ne(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = et(r, t.pendingProps)),
        (o = et(r.type, o)),
        dc(e, t, r, o, n)
      );
    case 15:
      return Yf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        Xo(e, t),
        (t.tag = 1),
        De(r) ? ((e = !0), wl(t)) : (e = !1),
        Yn(t, n),
        xf(t, r, o),
        Ia(t, r, o, n),
        Ba(null, t, r, !0, e, n)
      );
    case 19:
      return Zf(e, t, n);
    case 22:
      return Kf(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function mp(e, t) {
  return jd(e, t);
}
function A0(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ye(e, t, n, r) {
  return new A0(e, t, n, r);
}
function eu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function U0(e) {
  if (typeof e == "function") return eu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ws)) return 11;
    if (e === Ss) return 14;
  }
  return 2;
}
function Xt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ye(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function el(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) eu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Ln:
        return vn(n.children, o, l, t);
      case ys:
        (i = 8), (o |= 8);
        break;
      case sa:
        return (
          (e = Ye(12, n, t, o | 2)), (e.elementType = sa), (e.lanes = l), e
        );
      case ua:
        return (e = Ye(13, n, t, o)), (e.elementType = ua), (e.lanes = l), e;
      case ca:
        return (e = Ye(19, n, t, o)), (e.elementType = ca), (e.lanes = l), e;
      case xd:
        return oi(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Cd:
              i = 10;
              break e;
            case Ed:
              i = 9;
              break e;
            case ws:
              i = 11;
              break e;
            case Ss:
              i = 14;
              break e;
            case Ft:
              (i = 16), (r = null);
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ye(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function vn(e, t, n, r) {
  return (e = Ye(7, e, r, t)), (e.lanes = n), e;
}
function oi(e, t, n, r) {
  return (
    (e = Ye(22, e, r, t)),
    (e.elementType = xd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function qi(e, t, n) {
  return (e = Ye(6, e, null, t)), (e.lanes = n), e;
}
function Qi(e, t, n) {
  return (
    (t = Ye(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function I0(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = _i(0)),
    (this.expirationTimes = _i(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = _i(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function tu(e, t, n, r, o, l, i, a, s) {
  return (
    (e = new I0(e, t, n, a, s)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Ye(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Is(l),
    e
  );
}
function b0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Mn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function vp(e) {
  if (!e) return en;
  e = e._reactInternals;
  e: {
    if (_n(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (De(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (De(n)) return mf(e, n, t);
  }
  return t;
}
function gp(e, t, n, r, o, l, i, a, s) {
  return (
    (e = tu(n, r, !0, e, o, l, i, a, s)),
    (e.context = vp(null)),
    (n = e.current),
    (r = Oe()),
    (o = Gt(n)),
    (l = xt(r, o)),
    (l.callback = t ?? null),
    Yt(n, l, o),
    (e.current.lanes = o),
    ho(e, o, r),
    ze(e, r),
    e
  );
}
function li(e, t, n, r) {
  var o = t.current,
    l = Oe(),
    i = Gt(o);
  return (
    (n = vp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = xt(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Yt(o, t, i)),
    e !== null && (lt(e, o, i, l), Yo(e, o, i)),
    i
  );
}
function Ll(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function nu(e, t) {
  xc(e, t), (e = e.alternate) && xc(e, t);
}
function j0() {
  return null;
}
var yp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ru(e) {
  this._internalRoot = e;
}
ii.prototype.render = ru.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  li(e, t, null, null);
};
ii.prototype.unmount = ru.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    En(function () {
      li(null, e, null, null);
    }),
      (t[Ot] = null);
  }
};
function ii(e) {
  this._internalRoot = e;
}
ii.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Qd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ut.length && t !== 0 && t < Ut[n].priority; n++);
    Ut.splice(n, 0, e), n === 0 && Kd(e);
  }
};
function ou(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ai(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function kc() {}
function B0(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = Ll(i);
        l.call(u);
      };
    }
    var i = gp(t, r, e, 0, null, !1, !1, "", kc);
    return (
      (e._reactRootContainer = i),
      (e[Ot] = i.current),
      Jr(e.nodeType === 8 ? e.parentNode : e),
      En(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Ll(s);
      a.call(u);
    };
  }
  var s = tu(e, 0, !1, null, null, !1, !1, "", kc);
  return (
    (e._reactRootContainer = s),
    (e[Ot] = s.current),
    Jr(e.nodeType === 8 ? e.parentNode : e),
    En(function () {
      li(t, s, n, r);
    }),
    s
  );
}
function si(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var s = Ll(i);
        a.call(s);
      };
    }
    li(t, i, e, o);
  } else i = B0(n, t, e, o, r);
  return Ll(i);
}
Vd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _r(t.pendingLanes);
        n !== 0 &&
          (xs(t, n | 1), ze(t, ie()), !(q & 6) && ((nr = ie() + 500), on()));
      }
      break;
    case 13:
      En(function () {
        var r = _t(e, 1);
        if (r !== null) {
          var o = Oe();
          lt(r, e, 1, o);
        }
      }),
        nu(e, 1);
  }
};
ks = function (e) {
  if (e.tag === 13) {
    var t = _t(e, 134217728);
    if (t !== null) {
      var n = Oe();
      lt(t, e, 134217728, n);
    }
    nu(e, 134217728);
  }
};
qd = function (e) {
  if (e.tag === 13) {
    var t = Gt(e),
      n = _t(e, t);
    if (n !== null) {
      var r = Oe();
      lt(n, e, t, r);
    }
    nu(e, t);
  }
};
Qd = function () {
  return K;
};
Yd = function (e, t) {
  var n = K;
  try {
    return (K = e), t();
  } finally {
    K = n;
  }
};
Sa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((pa(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Jl(r);
            if (!o) throw Error(T(90));
            Nd(r), pa(r, o);
          }
        }
      }
      break;
    case "textarea":
      _d(e, n);
      break;
    case "select":
      (t = n.value), t != null && Hn(e, !!n.multiple, t, !1);
  }
};
zd = Xs;
Fd = En;
var $0 = { usingClientEntryPoint: !1, Events: [vo, An, Jl, Ld, Dd, Xs] },
  Cr = {
    findFiberByHostInstance: fn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  W0 = {
    bundleType: Cr.bundleType,
    version: Cr.version,
    rendererPackageName: Cr.rendererPackageName,
    rendererConfig: Cr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Pt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Id(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Cr.findFiberByHostInstance || j0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var bo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!bo.isDisabled && bo.supportsFiber)
    try {
      (Yl = bo.inject(W0)), (mt = bo);
    } catch {}
}
be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $0;
be.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ou(t)) throw Error(T(200));
  return b0(e, t, null, n);
};
be.createRoot = function (e, t) {
  if (!ou(e)) throw Error(T(299));
  var n = !1,
    r = "",
    o = yp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = tu(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ot] = t.current),
    Jr(e.nodeType === 8 ? e.parentNode : e),
    new ru(t)
  );
};
be.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return (e = Id(t)), (e = e === null ? null : e.stateNode), e;
};
be.flushSync = function (e) {
  return En(e);
};
be.hydrate = function (e, t, n) {
  if (!ai(t)) throw Error(T(200));
  return si(null, e, t, !0, n);
};
be.hydrateRoot = function (e, t, n) {
  if (!ou(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = yp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = gp(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[Ot] = t.current),
    Jr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ii(t);
};
be.render = function (e, t, n) {
  if (!ai(t)) throw Error(T(200));
  return si(null, e, t, !1, n);
};
be.unmountComponentAtNode = function (e) {
  if (!ai(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (En(function () {
        si(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ot] = null);
        });
      }),
      !0)
    : !1;
};
be.unstable_batchedUpdates = Xs;
be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ai(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return si(e, t, n, !1, r);
};
be.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = be);
})(jh);
var Nc = sl;
(la.createRoot = Nc.createRoot), (la.hydrateRoot = Nc.hydrateRoot);
/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ao() {
  return (
    (ao = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ao.apply(this, arguments)
  );
}
var Bt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Bt || (Bt = {}));
const Oc = "popstate";
function H0(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: l, search: i, hash: a } = r.location;
    return Za(
      "",
      { pathname: l, search: i, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Dl(o);
  }
  return q0(t, n, null, e);
}
function ue(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function V0() {
  return Math.random().toString(36).substr(2, 8);
}
function _c(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Za(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ao(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? sr(t) : t,
      { state: n, key: (t && t.key) || r || V0() }
    )
  );
}
function Dl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function sr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function q0(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: l = !1 } = r,
    i = o.history,
    a = Bt.Pop,
    s = null,
    u = d();
  u == null && ((u = 0), i.replaceState(ao({}, i.state, { idx: u }), ""));
  function d() {
    return (i.state || { idx: null }).idx;
  }
  function c() {
    a = Bt.Pop;
    let x = d(),
      p = x == null ? null : x - u;
    (u = x), s && s({ action: a, location: w.location, delta: p });
  }
  function f(x, p) {
    a = Bt.Push;
    let h = Za(w.location, x, p);
    n && n(h, x), (u = d() + 1);
    let y = _c(h, u),
      S = w.createHref(h);
    try {
      i.pushState(y, "", S);
    } catch {
      o.location.assign(S);
    }
    l && s && s({ action: a, location: w.location, delta: 1 });
  }
  function g(x, p) {
    a = Bt.Replace;
    let h = Za(w.location, x, p);
    n && n(h, x), (u = d());
    let y = _c(h, u),
      S = w.createHref(h);
    i.replaceState(y, "", S),
      l && s && s({ action: a, location: w.location, delta: 0 });
  }
  function v(x) {
    let p = o.location.origin !== "null" ? o.location.origin : o.location.href,
      h = typeof x == "string" ? x : Dl(x);
    return (
      ue(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, p)
    );
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(o, i);
    },
    listen(x) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Oc, c),
        (s = x),
        () => {
          o.removeEventListener(Oc, c), (s = null);
        }
      );
    },
    createHref(x) {
      return t(o, x);
    },
    createURL: v,
    encodeLocation(x) {
      let p = v(x);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: f,
    replace: g,
    go(x) {
      return i.go(x);
    },
  };
  return w;
}
var Tc;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Tc || (Tc = {}));
function Q0(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? sr(t) : t,
    o = Cp(r.pathname || "/", n);
  if (o == null) return null;
  let l = wp(e);
  Y0(l);
  let i = null;
  for (let a = 0; i == null && a < l.length; ++a) i = rv(l[a], iv(o));
  return i;
}
function wp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (l, i, a) => {
    let s = {
      relativePath: a === void 0 ? l.path || "" : a,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: i,
      route: l,
    };
    s.relativePath.startsWith("/") &&
      (ue(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = Jt([r, s.relativePath]),
      d = n.concat(s);
    l.children &&
      l.children.length > 0 &&
      (ue(
        l.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      wp(l.children, t, d, u)),
      !(l.path == null && !l.index) &&
        t.push({ path: u, score: tv(u, l.index), routesMeta: d });
  };
  return (
    e.forEach((l, i) => {
      var a;
      if (l.path === "" || !((a = l.path) != null && a.includes("?"))) o(l, i);
      else for (let s of Sp(l.path)) o(l, i, s);
    }),
    t
  );
}
function Sp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    l = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [l, ""] : [l];
  let i = Sp(r.join("/")),
    a = [];
  return (
    a.push(...i.map((s) => (s === "" ? l : [l, s].join("/")))),
    o && a.push(...i),
    a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Y0(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : nv(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const K0 = /^:\w+$/,
  G0 = 3,
  X0 = 2,
  J0 = 1,
  Z0 = 10,
  ev = -2,
  Pc = (e) => e === "*";
function tv(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Pc) && (r += ev),
    t && (r += X0),
    n
      .filter((o) => !Pc(o))
      .reduce((o, l) => o + (K0.test(l) ? G0 : l === "" ? J0 : Z0), r)
  );
}
function nv(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function rv(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    l = [];
  for (let i = 0; i < n.length; ++i) {
    let a = n[i],
      s = i === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      d = ov(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: s },
        u
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let c = a.route;
    l.push({
      params: r,
      pathname: Jt([o, d.pathname]),
      pathnameBase: cv(Jt([o, d.pathnameBase])),
      route: c,
    }),
      d.pathnameBase !== "/" && (o = Jt([o, d.pathnameBase]));
  }
  return l;
}
function ov(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = lv(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let l = o[0],
    i = l.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, d, c) => {
      if (d === "*") {
        let f = a[c] || "";
        i = l.slice(0, l.length - f.length).replace(/(.)\/+$/, "$1");
      }
      return (u[d] = av(a[c] || "", d)), u;
    }, {}),
    pathname: l,
    pathnameBase: i,
    pattern: e,
  };
}
function lv(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    lu(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (i, a) => (r.push(a), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function iv(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      lu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function av(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      lu(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Cp(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function lu(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function sv(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? sr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : uv(n, t)) : t,
    search: dv(r),
    hash: fv(o),
  };
}
function uv(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Yi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Ep(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function xp(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = sr(e))
    : ((o = ao({}, e)),
      ue(
        !o.pathname || !o.pathname.includes("?"),
        Yi("?", "pathname", "search", o)
      ),
      ue(
        !o.pathname || !o.pathname.includes("#"),
        Yi("#", "pathname", "hash", o)
      ),
      ue(!o.search || !o.search.includes("#"), Yi("#", "search", "hash", o)));
  let l = e === "" || o.pathname === "",
    i = l ? "/" : o.pathname,
    a;
  if (r || i == null) a = n;
  else {
    let c = t.length - 1;
    if (i.startsWith("..")) {
      let f = i.split("/");
      for (; f[0] === ".."; ) f.shift(), (c -= 1);
      o.pathname = f.join("/");
    }
    a = c >= 0 ? t[c] : "/";
  }
  let s = sv(o, a),
    u = i && i !== "/" && i.endsWith("/"),
    d = (l || i === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || d) && (s.pathname += "/"), s;
}
const Jt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  cv = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  dv = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  fv = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function pv(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const hv = ["post", "put", "patch", "delete"];
[...hv];
/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function es() {
  return (
    (es = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    es.apply(this, arguments)
  );
}
function mv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const vv = typeof Object.is == "function" ? Object.is : mv,
  { useState: gv, useEffect: yv, useLayoutEffect: wv, useDebugValue: Sv } = oa;
function Cv(e, t, n) {
  const r = t(),
    [{ inst: o }, l] = gv({ inst: { value: r, getSnapshot: t } });
  return (
    wv(() => {
      (o.value = r), (o.getSnapshot = t), Ki(o) && l({ inst: o });
    }, [e, r, t]),
    yv(
      () => (
        Ki(o) && l({ inst: o }),
        e(() => {
          Ki(o) && l({ inst: o });
        })
      ),
      [e]
    ),
    Sv(r),
    r
  );
}
function Ki(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !vv(n, r);
  } catch {
    return !0;
  }
}
function Ev(e, t, n) {
  return t();
}
const xv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  kv = !xv,
  Nv = kv ? Ev : Cv;
"useSyncExternalStore" in oa && ((e) => e.useSyncExternalStore)(oa);
const kp = C.createContext(null),
  iu = C.createContext(null),
  ui = C.createContext(null),
  ci = C.createContext(null),
  ln = C.createContext({ outlet: null, matches: [] }),
  Np = C.createContext(null);
function Ov(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ur() || ue(!1);
  let { basename: r, navigator: o } = C.useContext(ui),
    { hash: l, pathname: i, search: a } = Op(e, { relative: n }),
    s = i;
  return (
    r !== "/" && (s = i === "/" ? r : Jt([r, i])),
    o.createHref({ pathname: s, search: a, hash: l })
  );
}
function ur() {
  return C.useContext(ci) != null;
}
function yo() {
  return ur() || ue(!1), C.useContext(ci).location;
}
function Rt() {
  ur() || ue(!1);
  let { basename: e, navigator: t } = C.useContext(ui),
    { matches: n } = C.useContext(ln),
    { pathname: r } = yo(),
    o = JSON.stringify(Ep(n).map((a) => a.pathnameBase)),
    l = C.useRef(!1);
  return (
    C.useEffect(() => {
      l.current = !0;
    }),
    C.useCallback(
      function (a, s) {
        if ((s === void 0 && (s = {}), !l.current)) return;
        if (typeof a == "number") {
          t.go(a);
          return;
        }
        let u = xp(a, JSON.parse(o), r, s.relative === "path");
        e !== "/" &&
          (u.pathname = u.pathname === "/" ? e : Jt([e, u.pathname])),
          (s.replace ? t.replace : t.push)(u, s.state, s);
      },
      [e, t, o, r]
    )
  );
}
const _v = C.createContext(null);
function Tv(e) {
  let t = C.useContext(ln).outlet;
  return t && C.createElement(_v.Provider, { value: e }, t);
}
function au() {
  let { matches: e } = C.useContext(ln),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Op(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = C.useContext(ln),
    { pathname: o } = yo(),
    l = JSON.stringify(Ep(r).map((i) => i.pathnameBase));
  return C.useMemo(() => xp(e, JSON.parse(l), o, n === "path"), [e, l, o, n]);
}
function Pv(e, t) {
  ur() || ue(!1);
  let { navigator: n } = C.useContext(ui),
    r = C.useContext(iu),
    { matches: o } = C.useContext(ln),
    l = o[o.length - 1],
    i = l ? l.params : {};
  l && l.pathname;
  let a = l ? l.pathnameBase : "/";
  l && l.route;
  let s = yo(),
    u;
  if (t) {
    var d;
    let w = typeof t == "string" ? sr(t) : t;
    a === "/" || ((d = w.pathname) != null && d.startsWith(a)) || ue(!1),
      (u = w);
  } else u = s;
  let c = u.pathname || "/",
    f = a === "/" ? c : c.slice(a.length) || "/",
    g = Q0(e, { pathname: f }),
    v = Dv(
      g &&
        g.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, i, w.params),
            pathname: Jt([
              a,
              n.encodeLocation
                ? n.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? a
                : Jt([
                    a,
                    n.encodeLocation
                      ? n.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      o,
      r || void 0
    );
  return t && v
    ? C.createElement(
        ci.Provider,
        {
          value: {
            location: es(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: Bt.Pop,
          },
        },
        v
      )
    : v;
}
function Rv() {
  let e = Uv(),
    t = pv(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    l = null;
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: o }, n) : null,
    l
  );
}
class Mv extends C.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? C.createElement(
          ln.Provider,
          { value: this.props.routeContext },
          C.createElement(Np.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Lv(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = C.useContext(kp);
  return (
    o &&
      o.static &&
      o.staticContext &&
      n.route.errorElement &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(ln.Provider, { value: t }, r)
  );
}
function Dv(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    o = n == null ? void 0 : n.errors;
  if (o != null) {
    let l = r.findIndex(
      (i) => i.route.id && (o == null ? void 0 : o[i.route.id])
    );
    l >= 0 || ue(!1), (r = r.slice(0, Math.min(r.length, l + 1)));
  }
  return r.reduceRight((l, i, a) => {
    let s = i.route.id ? (o == null ? void 0 : o[i.route.id]) : null,
      u = n ? i.route.errorElement || C.createElement(Rv, null) : null,
      d = t.concat(r.slice(0, a + 1)),
      c = () =>
        C.createElement(
          Lv,
          { match: i, routeContext: { outlet: l, matches: d } },
          s ? u : i.route.element !== void 0 ? i.route.element : l
        );
    return n && (i.route.errorElement || a === 0)
      ? C.createElement(Mv, {
          location: n.location,
          component: u,
          error: s,
          children: c(),
          routeContext: { outlet: null, matches: d },
        })
      : c();
  }, null);
}
var Rc;
(function (e) {
  (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
})(Rc || (Rc = {}));
var zl;
(function (e) {
  (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(zl || (zl = {}));
function zv(e) {
  let t = C.useContext(iu);
  return t || ue(!1), t;
}
function Fv(e) {
  let t = C.useContext(ln);
  return t || ue(!1), t;
}
function Av(e) {
  let t = Fv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ue(!1), n.route.id;
}
function Uv() {
  var e;
  let t = C.useContext(Np),
    n = zv(zl.UseRouteError),
    r = Av(zl.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function _p(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  ur() || ue(!1);
  let l = C.useContext(iu),
    i = Rt();
  return (
    C.useEffect(() => {
      (l && l.navigation.state !== "idle") ||
        i(t, { replace: n, state: r, relative: o });
    }),
    null
  );
}
function Iv(e) {
  return Tv(e.context);
}
function We(e) {
  ue(!1);
}
function bv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Bt.Pop,
    navigator: l,
    static: i = !1,
  } = e;
  ur() && ue(!1);
  let a = t.replace(/^\/*/, "/"),
    s = C.useMemo(() => ({ basename: a, navigator: l, static: i }), [a, l, i]);
  typeof r == "string" && (r = sr(r));
  let {
      pathname: u = "/",
      search: d = "",
      hash: c = "",
      state: f = null,
      key: g = "default",
    } = r,
    v = C.useMemo(() => {
      let w = Cp(u, a);
      return w == null
        ? null
        : { pathname: w, search: d, hash: c, state: f, key: g };
    }, [a, u, d, c, f, g]);
  return v == null
    ? null
    : C.createElement(
        ui.Provider,
        { value: s },
        C.createElement(ci.Provider, {
          children: n,
          value: { location: v, navigationType: o },
        })
      );
}
function jv(e) {
  let { children: t, location: n } = e,
    r = C.useContext(kp),
    o = r && !t ? r.router.routes : ts(t);
  return Pv(o, n);
}
var Mc;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Mc || (Mc = {}));
new Promise(() => {});
function ts(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    C.Children.forEach(e, (r, o) => {
      if (!C.isValidElement(r)) return;
      if (r.type === C.Fragment) {
        n.push.apply(n, ts(r.props.children, t));
        return;
      }
      r.type !== We && ue(!1), !r.props.index || !r.props.children || ue(!1);
      let l = [...t, o],
        i = {
          id: r.props.id || l.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          hasErrorBoundary: r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
        };
      r.props.children && (i.children = ts(r.props.children, l)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ns() {
  return (
    (ns = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ns.apply(this, arguments)
  );
}
function Bv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    l;
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function $v(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Wv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !$v(e);
}
const Hv = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
];
function Vv(e) {
  let { basename: t, children: n, window: r } = e,
    o = C.useRef();
  o.current == null && (o.current = H0({ window: r, v5Compat: !0 }));
  let l = o.current,
    [i, a] = C.useState({ action: l.action, location: l.location });
  return (
    C.useLayoutEffect(() => l.listen(a), [l]),
    C.createElement(bv, {
      basename: t,
      children: n,
      location: i.location,
      navigationType: i.action,
      navigator: l,
    })
  );
}
const qv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ge = C.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: l,
        replace: i,
        state: a,
        target: s,
        to: u,
        preventScrollReset: d,
      } = t,
      c = Bv(t, Hv),
      f,
      g = !1;
    if (qv && typeof u == "string" && /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(u)) {
      f = u;
      let p = new URL(window.location.href),
        h = u.startsWith("//") ? new URL(p.protocol + u) : new URL(u);
      h.origin === p.origin ? (u = h.pathname + h.search + h.hash) : (g = !0);
    }
    let v = Ov(u, { relative: o }),
      w = Qv(u, {
        replace: i,
        state: a,
        target: s,
        preventScrollReset: d,
        relative: o,
      });
    function x(p) {
      r && r(p), p.defaultPrevented || w(p);
    }
    return C.createElement(
      "a",
      ns({}, c, { href: f || v, onClick: g || l ? r : x, ref: n, target: s })
    );
  });
var Lc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Lc || (Lc = {}));
var Dc;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Dc || (Dc = {}));
function Qv(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: l,
      relative: i,
    } = t === void 0 ? {} : t,
    a = Rt(),
    s = yo(),
    u = Op(e, { relative: i });
  return C.useCallback(
    (d) => {
      if (Wv(d, n)) {
        d.preventDefault();
        let c = r !== void 0 ? r : Dl(s) === Dl(u);
        a(e, { replace: c, state: o, preventScrollReset: l, relative: i });
      }
    },
    [s, a, u, r, o, n, e, l, i]
  );
}
function Tp(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Pp } = Object.prototype,
  { getPrototypeOf: su } = Object,
  uu = ((e) => (t) => {
    const n = Pp.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Mt = (e) => ((e = e.toLowerCase()), (t) => uu(t) === e),
  di = (e) => (t) => typeof t === e,
  { isArray: cr } = Array,
  so = di("undefined");
function Yv(e) {
  return (
    e !== null &&
    !so(e) &&
    e.constructor !== null &&
    !so(e.constructor) &&
    tn(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Rp = Mt("ArrayBuffer");
function Kv(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Rp(e.buffer)),
    t
  );
}
const Gv = di("string"),
  tn = di("function"),
  Mp = di("number"),
  cu = (e) => e !== null && typeof e == "object",
  Xv = (e) => e === !0 || e === !1,
  tl = (e) => {
    if (uu(e) !== "object") return !1;
    const t = su(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Jv = Mt("Date"),
  Zv = Mt("File"),
  e1 = Mt("Blob"),
  t1 = Mt("FileList"),
  n1 = (e) => cu(e) && tn(e.pipe),
  r1 = (e) => {
    const t = "[object FormData]";
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        Pp.call(e) === t ||
        (tn(e.toString) && e.toString() === t))
    );
  },
  o1 = Mt("URLSearchParams"),
  l1 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function wo(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), cr(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const l = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = l.length;
    let a;
    for (r = 0; r < i; r++) (a = l[r]), t.call(null, e[a], a, e);
  }
}
function Lp(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const Dp = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  zp = (e) => !so(e) && e !== Dp;
function rs() {
  const { caseless: e } = (zp(this) && this) || {},
    t = {},
    n = (r, o) => {
      const l = (e && Lp(t, o)) || o;
      tl(t[l]) && tl(r)
        ? (t[l] = rs(t[l], r))
        : tl(r)
        ? (t[l] = rs({}, r))
        : cr(r)
        ? (t[l] = r.slice())
        : (t[l] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && wo(arguments[r], n);
  return t;
}
const i1 = (e, t, n, { allOwnKeys: r } = {}) => (
    wo(
      t,
      (o, l) => {
        n && tn(o) ? (e[l] = Tp(o, n)) : (e[l] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  a1 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  s1 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  u1 = (e, t, n, r) => {
    let o, l, i;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), l = o.length; l-- > 0; )
        (i = o[l]), (!r || r(i, e, t)) && !a[i] && ((t[i] = e[i]), (a[i] = !0));
      e = n !== !1 && su(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  c1 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  d1 = (e) => {
    if (!e) return null;
    if (cr(e)) return e;
    let t = e.length;
    if (!Mp(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  f1 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && su(Uint8Array)),
  p1 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const l = o.value;
      t.call(e, l[0], l[1]);
    }
  },
  h1 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  m1 = Mt("HTMLFormElement"),
  v1 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  zc = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  g1 = Mt("RegExp"),
  Fp = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    wo(n, (o, l) => {
      t(o, l, e) !== !1 && (r[l] = o);
    }),
      Object.defineProperties(e, r);
  },
  y1 = (e) => {
    Fp(e, (t, n) => {
      if (tn(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (tn(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  w1 = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((l) => {
          n[l] = !0;
        });
      };
    return cr(e) ? r(e) : r(String(e).split(t)), n;
  },
  S1 = () => {},
  C1 = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Gi = "abcdefghijklmnopqrstuvwxyz",
  Fc = "0123456789",
  Ap = { DIGIT: Fc, ALPHA: Gi, ALPHA_DIGIT: Gi + Gi.toUpperCase() + Fc },
  E1 = (e = 16, t = Ap.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function x1(e) {
  return !!(
    e &&
    tn(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const k1 = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (cu(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const l = cr(r) ? [] : {};
            return (
              wo(r, (i, a) => {
                const s = n(i, o + 1);
                !so(s) && (l[a] = s);
              }),
              (t[o] = void 0),
              l
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  O = {
    isArray: cr,
    isArrayBuffer: Rp,
    isBuffer: Yv,
    isFormData: r1,
    isArrayBufferView: Kv,
    isString: Gv,
    isNumber: Mp,
    isBoolean: Xv,
    isObject: cu,
    isPlainObject: tl,
    isUndefined: so,
    isDate: Jv,
    isFile: Zv,
    isBlob: e1,
    isRegExp: g1,
    isFunction: tn,
    isStream: n1,
    isURLSearchParams: o1,
    isTypedArray: f1,
    isFileList: t1,
    forEach: wo,
    merge: rs,
    extend: i1,
    trim: l1,
    stripBOM: a1,
    inherits: s1,
    toFlatObject: u1,
    kindOf: uu,
    kindOfTest: Mt,
    endsWith: c1,
    toArray: d1,
    forEachEntry: p1,
    matchAll: h1,
    isHTMLForm: m1,
    hasOwnProperty: zc,
    hasOwnProp: zc,
    reduceDescriptors: Fp,
    freezeMethods: y1,
    toObjectSet: w1,
    toCamelCase: v1,
    noop: S1,
    toFiniteNumber: C1,
    findKey: Lp,
    global: Dp,
    isContextDefined: zp,
    ALPHABET: Ap,
    generateString: E1,
    isSpecCompliantForm: x1,
    toJSONObject: k1,
  };
function V(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
O.inherits(V, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: O.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Up = V.prototype,
  Ip = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Ip[e] = { value: e };
});
Object.defineProperties(V, Ip);
Object.defineProperty(Up, "isAxiosError", { value: !0 });
V.from = (e, t, n, r, o, l) => {
  const i = Object.create(Up);
  return (
    O.toFlatObject(
      e,
      i,
      function (s) {
        return s !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    V.call(i, e.message, t, n, r, o),
    (i.cause = e),
    (i.name = e.name),
    l && Object.assign(i, l),
    i
  );
};
const N1 = null;
function os(e) {
  return O.isPlainObject(e) || O.isArray(e);
}
function bp(e) {
  return O.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ac(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, l) {
          return (o = bp(o)), !n && l ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function O1(e) {
  return O.isArray(e) && !e.some(os);
}
const _1 = O.toFlatObject(O, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function fi(e, t, n) {
  if (!O.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = O.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (w, x) {
        return !O.isUndefined(x[w]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || d,
    l = n.dots,
    i = n.indexes,
    s = (n.Blob || (typeof Blob < "u" && Blob)) && O.isSpecCompliantForm(t);
  if (!O.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(v) {
    if (v === null) return "";
    if (O.isDate(v)) return v.toISOString();
    if (!s && O.isBlob(v))
      throw new V("Blob is not supported. Use a Buffer instead.");
    return O.isArrayBuffer(v) || O.isTypedArray(v)
      ? s && typeof Blob == "function"
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function d(v, w, x) {
    let p = v;
    if (v && !x && typeof v == "object") {
      if (O.endsWith(w, "{}"))
        (w = r ? w : w.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (O.isArray(v) && O1(v)) ||
        ((O.isFileList(v) || O.endsWith(w, "[]")) && (p = O.toArray(v)))
      )
        return (
          (w = bp(w)),
          p.forEach(function (y, S) {
            !(O.isUndefined(y) || y === null) &&
              t.append(
                i === !0 ? Ac([w], S, l) : i === null ? w : w + "[]",
                u(y)
              );
          }),
          !1
        );
    }
    return os(v) ? !0 : (t.append(Ac(x, w, l), u(v)), !1);
  }
  const c = [],
    f = Object.assign(_1, {
      defaultVisitor: d,
      convertValue: u,
      isVisitable: os,
    });
  function g(v, w) {
    if (!O.isUndefined(v)) {
      if (c.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      c.push(v),
        O.forEach(v, function (p, h) {
          (!(O.isUndefined(p) || p === null) &&
            o.call(t, p, O.isString(h) ? h.trim() : h, w, f)) === !0 &&
            g(p, w ? w.concat(h) : [h]);
        }),
        c.pop();
    }
  }
  if (!O.isObject(e)) throw new TypeError("data must be an object");
  return g(e), t;
}
function Uc(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function du(e, t) {
  (this._pairs = []), e && fi(e, this, t);
}
const jp = du.prototype;
jp.append = function (t, n) {
  this._pairs.push([t, n]);
};
jp.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Uc);
      }
    : Uc;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function T1(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Bp(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || T1,
    o = n && n.serialize;
  let l;
  if (
    (o
      ? (l = o(t, n))
      : (l = O.isURLSearchParams(t) ? t.toString() : new du(t, n).toString(r)),
    l)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + l);
  }
  return e;
}
class P1 {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    O.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Ic = P1,
  $p = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  R1 = typeof URLSearchParams < "u" ? URLSearchParams : du,
  M1 = FormData,
  L1 = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  D1 = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  ht = {
    isBrowser: !0,
    classes: { URLSearchParams: R1, FormData: M1, Blob },
    isStandardBrowserEnv: L1,
    isStandardBrowserWebWorkerEnv: D1,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function z1(e, t) {
  return fi(
    e,
    new ht.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, l) {
          return ht.isNode && O.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : l.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function F1(e) {
  return O.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function A1(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let l;
  for (r = 0; r < o; r++) (l = n[r]), (t[l] = e[l]);
  return t;
}
function Wp(e) {
  function t(n, r, o, l) {
    let i = n[l++];
    const a = Number.isFinite(+i),
      s = l >= n.length;
    return (
      (i = !i && O.isArray(o) ? o.length : i),
      s
        ? (O.hasOwnProp(o, i) ? (o[i] = [o[i], r]) : (o[i] = r), !a)
        : ((!o[i] || !O.isObject(o[i])) && (o[i] = []),
          t(n, r, o[i], l) && O.isArray(o[i]) && (o[i] = A1(o[i])),
          !a)
    );
  }
  if (O.isFormData(e) && O.isFunction(e.entries)) {
    const n = {};
    return (
      O.forEachEntry(e, (r, o) => {
        t(F1(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
const U1 = { "Content-Type": void 0 };
function I1(e, t, n) {
  if (O.isString(e))
    try {
      return (t || JSON.parse)(e), O.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const pi = {
  transitional: $p,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        l = O.isObject(t);
      if ((l && O.isHTMLForm(t) && (t = new FormData(t)), O.isFormData(t)))
        return o && o ? JSON.stringify(Wp(t)) : t;
      if (
        O.isArrayBuffer(t) ||
        O.isBuffer(t) ||
        O.isStream(t) ||
        O.isFile(t) ||
        O.isBlob(t)
      )
        return t;
      if (O.isArrayBufferView(t)) return t.buffer;
      if (O.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (l) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return z1(t, this.formSerializer).toString();
        if ((a = O.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const s = this.env && this.env.FormData;
          return fi(
            a ? { "files[]": t } : t,
            s && new s(),
            this.formSerializer
          );
        }
      }
      return l || o ? (n.setContentType("application/json", !1), I1(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || pi.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (t && O.isString(t) && ((r && !this.responseType) || o)) {
        const i = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (i)
            throw a.name === "SyntaxError"
              ? V.from(a, V.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ht.classes.FormData, Blob: ht.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
O.forEach(["delete", "get", "head"], function (t) {
  pi.headers[t] = {};
});
O.forEach(["post", "put", "patch"], function (t) {
  pi.headers[t] = O.merge(U1);
});
const fu = pi,
  b1 = O.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  j1 = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (o = i.indexOf(":")),
              (n = i.substring(0, o).trim().toLowerCase()),
              (r = i.substring(o + 1).trim()),
              !(!n || (t[n] && b1[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  bc = Symbol("internals");
function Er(e) {
  return e && String(e).trim().toLowerCase();
}
function nl(e) {
  return e === !1 || e == null ? e : O.isArray(e) ? e.map(nl) : String(e);
}
function B1(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
function $1(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function Xi(e, t, n, r) {
  if (O.isFunction(r)) return r.call(this, t, n);
  if (O.isString(t)) {
    if (O.isString(r)) return t.indexOf(r) !== -1;
    if (O.isRegExp(r)) return r.test(t);
  }
}
function W1(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function H1(e, t) {
  const n = O.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, l, i) {
        return this[r].call(this, t, o, l, i);
      },
      configurable: !0,
    });
  });
}
class hi {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function l(a, s, u) {
      const d = Er(s);
      if (!d) throw new Error("header name must be a non-empty string");
      const c = O.findKey(o, d);
      (!c || o[c] === void 0 || u === !0 || (u === void 0 && o[c] !== !1)) &&
        (o[c || s] = nl(a));
    }
    const i = (a, s) => O.forEach(a, (u, d) => l(u, d, s));
    return (
      O.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : O.isString(t) && (t = t.trim()) && !$1(t)
        ? i(j1(t), n)
        : t != null && l(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Er(t)), t)) {
      const r = O.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return B1(o);
        if (O.isFunction(n)) return n.call(this, o, r);
        if (O.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Er(t)), t)) {
      const r = O.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Xi(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function l(i) {
      if (((i = Er(i)), i)) {
        const a = O.findKey(r, i);
        a && (!n || Xi(r, r[a], a, n)) && (delete r[a], (o = !0));
      }
    }
    return O.isArray(t) ? t.forEach(l) : l(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const l = n[r];
      (!t || Xi(this, this[l], l, t)) && (delete this[l], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      O.forEach(this, (o, l) => {
        const i = O.findKey(r, l);
        if (i) {
          (n[i] = nl(o)), delete n[l];
          return;
        }
        const a = t ? W1(l) : String(l).trim();
        a !== l && delete n[l], (n[a] = nl(o)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      O.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && O.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[bc] = this[bc] = { accessors: {} }).accessors,
      o = this.prototype;
    function l(i) {
      const a = Er(i);
      r[a] || (H1(o, i), (r[a] = !0));
    }
    return O.isArray(t) ? t.forEach(l) : l(t), this;
  }
}
hi.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
O.freezeMethods(hi.prototype);
O.freezeMethods(hi);
const kt = hi;
function Ji(e, t) {
  const n = this || fu,
    r = t || n,
    o = kt.from(r.headers);
  let l = r.data;
  return (
    O.forEach(e, function (a) {
      l = a.call(n, l, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    l
  );
}
function Hp(e) {
  return !!(e && e.__CANCEL__);
}
function So(e, t, n) {
  V.call(this, e ?? "canceled", V.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
O.inherits(So, V, { __CANCEL__: !0 });
function V1(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new V(
          "Request failed with status code " + n.status,
          [V.ERR_BAD_REQUEST, V.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const q1 = ht.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, o, l, i, a) {
          const s = [];
          s.push(n + "=" + encodeURIComponent(r)),
            O.isNumber(o) && s.push("expires=" + new Date(o).toGMTString()),
            O.isString(l) && s.push("path=" + l),
            O.isString(i) && s.push("domain=" + i),
            a === !0 && s.push("secure"),
            (document.cookie = s.join("; "));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function Q1(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Y1(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Vp(e, t) {
  return e && !Q1(t) ? Y1(e, t) : t;
}
const K1 = ht.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function o(l) {
        let i = l;
        return (
          t && (n.setAttribute("href", i), (i = n.href)),
          n.setAttribute("href", i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (i) {
          const a = O.isString(i) ? o(i) : i;
          return a.protocol === r.protocol && a.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function G1(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function X1(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    l = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (s) {
      const u = Date.now(),
        d = r[l];
      i || (i = u), (n[o] = s), (r[o] = u);
      let c = l,
        f = 0;
      for (; c !== o; ) (f += n[c++]), (c = c % e);
      if (((o = (o + 1) % e), o === l && (l = (l + 1) % e), u - i < t)) return;
      const g = d && u - d;
      return g ? Math.round((f * 1e3) / g) : void 0;
    }
  );
}
function jc(e, t) {
  let n = 0;
  const r = X1(50, 250);
  return (o) => {
    const l = o.loaded,
      i = o.lengthComputable ? o.total : void 0,
      a = l - n,
      s = r(a),
      u = l <= i;
    n = l;
    const d = {
      loaded: l,
      total: i,
      progress: i ? l / i : void 0,
      bytes: a,
      rate: s || void 0,
      estimated: s && i && u ? (i - l) / s : void 0,
      event: o,
    };
    (d[t ? "download" : "upload"] = !0), e(d);
  };
}
const J1 = typeof XMLHttpRequest < "u",
  Z1 =
    J1 &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const l = kt.from(e.headers).normalize(),
          i = e.responseType;
        let a;
        function s() {
          e.cancelToken && e.cancelToken.unsubscribe(a),
            e.signal && e.signal.removeEventListener("abort", a);
        }
        O.isFormData(o) &&
          (ht.isStandardBrowserEnv || ht.isStandardBrowserWebWorkerEnv) &&
          l.setContentType(!1);
        let u = new XMLHttpRequest();
        if (e.auth) {
          const g = e.auth.username || "",
            v = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          l.set("Authorization", "Basic " + btoa(g + ":" + v));
        }
        const d = Vp(e.baseURL, e.url);
        u.open(e.method.toUpperCase(), Bp(d, e.params, e.paramsSerializer), !0),
          (u.timeout = e.timeout);
        function c() {
          if (!u) return;
          const g = kt.from(
              "getAllResponseHeaders" in u && u.getAllResponseHeaders()
            ),
            w = {
              data:
                !i || i === "text" || i === "json"
                  ? u.responseText
                  : u.response,
              status: u.status,
              statusText: u.statusText,
              headers: g,
              config: e,
              request: u,
            };
          V1(
            function (p) {
              n(p), s();
            },
            function (p) {
              r(p), s();
            },
            w
          ),
            (u = null);
        }
        if (
          ("onloadend" in u
            ? (u.onloadend = c)
            : (u.onreadystatechange = function () {
                !u ||
                  u.readyState !== 4 ||
                  (u.status === 0 &&
                    !(u.responseURL && u.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(c);
              }),
          (u.onabort = function () {
            u &&
              (r(new V("Request aborted", V.ECONNABORTED, e, u)), (u = null));
          }),
          (u.onerror = function () {
            r(new V("Network Error", V.ERR_NETWORK, e, u)), (u = null);
          }),
          (u.ontimeout = function () {
            let v = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const w = e.transitional || $p;
            e.timeoutErrorMessage && (v = e.timeoutErrorMessage),
              r(
                new V(
                  v,
                  w.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED,
                  e,
                  u
                )
              ),
              (u = null);
          }),
          ht.isStandardBrowserEnv)
        ) {
          const g =
            (e.withCredentials || K1(d)) &&
            e.xsrfCookieName &&
            q1.read(e.xsrfCookieName);
          g && l.set(e.xsrfHeaderName, g);
        }
        o === void 0 && l.setContentType(null),
          "setRequestHeader" in u &&
            O.forEach(l.toJSON(), function (v, w) {
              u.setRequestHeader(w, v);
            }),
          O.isUndefined(e.withCredentials) ||
            (u.withCredentials = !!e.withCredentials),
          i && i !== "json" && (u.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            u.addEventListener("progress", jc(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            u.upload &&
            u.upload.addEventListener("progress", jc(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((a = (g) => {
              u &&
                (r(!g || g.type ? new So(null, e, u) : g),
                u.abort(),
                (u = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(a),
            e.signal &&
              (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
        const f = G1(d);
        if (f && ht.protocols.indexOf(f) === -1) {
          r(new V("Unsupported protocol " + f + ":", V.ERR_BAD_REQUEST, e));
          return;
        }
        u.send(o || null);
      });
    },
  rl = { http: N1, xhr: Z1 };
O.forEach(rl, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const eg = {
  getAdapter: (e) => {
    e = O.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (
      let o = 0;
      o < t && ((n = e[o]), !(r = O.isString(n) ? rl[n.toLowerCase()] : n));
      o++
    );
    if (!r)
      throw r === !1
        ? new V(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          )
        : new Error(
            O.hasOwnProp(rl, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          );
    if (!O.isFunction(r)) throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: rl,
};
function Zi(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new So(null, e);
}
function Bc(e) {
  return (
    Zi(e),
    (e.headers = kt.from(e.headers)),
    (e.data = Ji.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    eg
      .getAdapter(e.adapter || fu.adapter)(e)
      .then(
        function (r) {
          return (
            Zi(e),
            (r.data = Ji.call(e, e.transformResponse, r)),
            (r.headers = kt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            Hp(r) ||
              (Zi(e),
              r &&
                r.response &&
                ((r.response.data = Ji.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = kt.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const $c = (e) => (e instanceof kt ? e.toJSON() : e);
function rr(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, c) {
    return O.isPlainObject(u) && O.isPlainObject(d)
      ? O.merge.call({ caseless: c }, u, d)
      : O.isPlainObject(d)
      ? O.merge({}, d)
      : O.isArray(d)
      ? d.slice()
      : d;
  }
  function o(u, d, c) {
    if (O.isUndefined(d)) {
      if (!O.isUndefined(u)) return r(void 0, u, c);
    } else return r(u, d, c);
  }
  function l(u, d) {
    if (!O.isUndefined(d)) return r(void 0, d);
  }
  function i(u, d) {
    if (O.isUndefined(d)) {
      if (!O.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, d);
  }
  function a(u, d, c) {
    if (c in t) return r(u, d);
    if (c in e) return r(void 0, u);
  }
  const s = {
    url: l,
    method: l,
    data: l,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (u, d) => o($c(u), $c(d), !0),
  };
  return (
    O.forEach(Object.keys(e).concat(Object.keys(t)), function (d) {
      const c = s[d] || o,
        f = c(e[d], t[d], d);
      (O.isUndefined(f) && c !== a) || (n[d] = f);
    }),
    n
  );
}
const qp = "1.3.2",
  pu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    pu[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Wc = {};
pu.transitional = function (t, n, r) {
  function o(l, i) {
    return (
      "[Axios v" +
      qp +
      "] Transitional option '" +
      l +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (l, i, a) => {
    if (t === !1)
      throw new V(
        o(i, " has been removed" + (n ? " in " + n : "")),
        V.ERR_DEPRECATED
      );
    return (
      n &&
        !Wc[i] &&
        ((Wc[i] = !0),
        console.warn(
          o(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(l, i, a) : !0
    );
  };
};
function tg(e, t, n) {
  if (typeof e != "object")
    throw new V("options must be an object", V.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const l = r[o],
      i = t[l];
    if (i) {
      const a = e[l],
        s = a === void 0 || i(a, l, e);
      if (s !== !0)
        throw new V("option " + l + " must be " + s, V.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new V("Unknown option " + l, V.ERR_BAD_OPTION);
  }
}
const ls = { assertOptions: tg, validators: pu },
  Dt = ls.validators;
class Fl {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Ic(), response: new Ic() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = rr(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: l } = n;
    r !== void 0 &&
      ls.assertOptions(
        r,
        {
          silentJSONParsing: Dt.transitional(Dt.boolean),
          forcedJSONParsing: Dt.transitional(Dt.boolean),
          clarifyTimeoutError: Dt.transitional(Dt.boolean),
        },
        !1
      ),
      o !== void 0 &&
        ls.assertOptions(
          o,
          { encode: Dt.function, serialize: Dt.function },
          !0
        ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i;
    (i = l && O.merge(l.common, l[n.method])),
      i &&
        O.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (v) => {
            delete l[v];
          }
        ),
      (n.headers = kt.concat(i, l));
    const a = [];
    let s = !0;
    this.interceptors.request.forEach(function (w) {
      (typeof w.runWhen == "function" && w.runWhen(n) === !1) ||
        ((s = s && w.synchronous), a.unshift(w.fulfilled, w.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (w) {
      u.push(w.fulfilled, w.rejected);
    });
    let d,
      c = 0,
      f;
    if (!s) {
      const v = [Bc.bind(this), void 0];
      for (
        v.unshift.apply(v, a),
          v.push.apply(v, u),
          f = v.length,
          d = Promise.resolve(n);
        c < f;

      )
        d = d.then(v[c++], v[c++]);
      return d;
    }
    f = a.length;
    let g = n;
    for (c = 0; c < f; ) {
      const v = a[c++],
        w = a[c++];
      try {
        g = v(g);
      } catch (x) {
        w.call(this, x);
        break;
      }
    }
    try {
      d = Bc.call(this, g);
    } catch (v) {
      return Promise.reject(v);
    }
    for (c = 0, f = u.length; c < f; ) d = d.then(u[c++], u[c++]);
    return d;
  }
  getUri(t) {
    t = rr(this.defaults, t);
    const n = Vp(t.baseURL, t.url);
    return Bp(n, t.params, t.paramsSerializer);
  }
}
O.forEach(["delete", "get", "head", "options"], function (t) {
  Fl.prototype[t] = function (n, r) {
    return this.request(
      rr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
O.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (l, i, a) {
      return this.request(
        rr(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: l,
          data: i,
        })
      );
    };
  }
  (Fl.prototype[t] = n()), (Fl.prototype[t + "Form"] = n(!0));
});
const ol = Fl;
class hu {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (l) {
      n = l;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let l = r._listeners.length;
      for (; l-- > 0; ) r._listeners[l](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let l;
        const i = new Promise((a) => {
          r.subscribe(a), (l = a);
        }).then(o);
        return (
          (i.cancel = function () {
            r.unsubscribe(l);
          }),
          i
        );
      }),
      t(function (l, i, a) {
        r.reason || ((r.reason = new So(l, i, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new hu(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const ng = hu;
function rg(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function og(e) {
  return O.isObject(e) && e.isAxiosError === !0;
}
const is = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(is).forEach(([e, t]) => {
  is[t] = e;
});
const lg = is;
function Qp(e) {
  const t = new ol(e),
    n = Tp(ol.prototype.request, t);
  return (
    O.extend(n, ol.prototype, t, { allOwnKeys: !0 }),
    O.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Qp(rr(e, o));
    }),
    n
  );
}
const fe = Qp(fu);
fe.Axios = ol;
fe.CanceledError = So;
fe.CancelToken = ng;
fe.isCancel = Hp;
fe.VERSION = qp;
fe.toFormData = fi;
fe.AxiosError = V;
fe.Cancel = fe.CanceledError;
fe.all = function (t) {
  return Promise.all(t);
};
fe.spread = rg;
fe.isAxiosError = og;
fe.mergeConfig = rr;
fe.AxiosHeaders = kt;
fe.formToJSON = (e) => Wp(O.isHTMLForm(e) ? new FormData(e) : e);
fe.HttpStatusCode = lg;
fe.default = fe;
const xe = fe,
  Yp = C.createContext({}),
  ig = ({ children: e }) => {
    const [t, n] = C.useState(null);
    return (
      C.useEffect(() => {
        t ||
          xe.get("/users/profile").then(({ data: r }) => {
            n(r);
          });
      }, []),
      m(Yp.Provider, {
        value: { currentUser: t, setCurrentUser: n },
        children: e,
      })
    );
  },
  mi = () => C.useContext(Yp),
  ag = () => {
    const { currentUser: e, setCurrentUser: t } = mi(),
      n = Rt();
    return k("header", {
      className: "flex justify-between gap-4",
      children: [
        " ",
        k(Ge, {
          to: "/",
          href: "",
          className: "flex items-center gap-2",
          children: [
            k("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "icon icon-tabler icon-tabler-steering-wheel mt-1",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              strokeWidth: "2",
              stroke: "currentColor",
              fill: "none",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                m("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                m("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }),
                m("path", { d: "M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }),
                m("path", { d: "M12 14l0 7" }),
                m("path", { d: "M10 12l-6.75 -2" }),
                m("path", { d: "M14 12l6.75 -2" }),
              ],
            }),
            m("span", { className: "font-bold text-xl", children: "alugame" }),
          ],
        }),
        m("div", {
          className:
            "hidden md:flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-400 hidden",
          children: e
            ? k("button", {
                className: "bg-transparent",
                onClick: async () => {
                  await xe.post("/users/logout"), t(null), n("/");
                },
                children: [" ", "Cerrar sesión", " "],
              })
            : m(Ge, {
                to: "/register",
                children: " Empieza ya, regístrate ahora",
              }),
        }),
        k(Ge, {
          to: e ? "/acc" : "/login",
          className:
            "flex items-center gap-1 border border-gray-300 rounded-full py-2 px-4 shadow-md",
          children: [
            k("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "icon icon-tabler icon-tabler-adjustments-horizontal",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              strokeWidth: "1.5",
              stroke: "currentColor",
              fill: "none",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                m("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                m("path", { d: "M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }),
                m("path", { d: "M4 6l8 0" }),
                m("path", { d: "M16 6l4 0" }),
                m("path", { d: "M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }),
                m("path", { d: "M4 12l2 0" }),
                m("path", { d: "M10 12l10 0" }),
                m("path", { d: "M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }),
                m("path", { d: "M4 18l11 0" }),
                m("path", { d: "M19 18l1 0" }),
              ],
            }),
            m("div", {
              children: m("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: "1.7",
                stroke: "currentColor",
                className: "w-6 h-6",
                children: m("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z",
                }),
              }),
            }),
            !!e && m("div", { children: e.name }),
          ],
        }),
      ],
    });
  },
  sg = () =>
    k("div", {
      className: "px-16 py-4 flex flex-col min-h-screen max-w-8xl mx-auto",
      children: [m(ag, {}), m(Iv, {})],
    });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Et =
  function () {
    return (
      (Et =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var l in n)
              Object.prototype.hasOwnProperty.call(n, l) && (t[l] = n[l]);
          }
          return t;
        }),
      Et.apply(this, arguments)
    );
  };
function Kp(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
var ug = { color: "#38ad48", enabled: !0, size: 50, style: {} },
  cg = function (e) {
    return parseFloat(e.toString()).toString() === e.toString()
      ? e + "px"
      : e.toString();
  },
  dg = function (e) {
    var t = function (n) {
      var r = n.color,
        o = n.enabled,
        l = n.size,
        i = n.style,
        a = Kp(n, ["color", "enabled", "size", "style"]),
        s = Et(Et({}, a), {
          style: Et({ color: r, overflow: "visible", width: cg(l) }, i),
        });
      return o ? Q.createElement(e, Et({}, s)) : null;
    };
    return (t.defaultProps = ug), t;
  },
  fg = { speed: 100, still: !1, thickness: 100 },
  pg = Et(Et({}, fg), { secondaryColor: "rgba(0,0,0,0.44)" });
function hg(e, t) {
  t === void 0 && (t = {});
  var n = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0],
      o = document.createElement("style");
    (o.type = "text/css"),
      n === "top" && r.firstChild
        ? r.insertBefore(o, r.firstChild)
        : r.appendChild(o),
      o.styleSheet
        ? (o.styleSheet.cssText = e)
        : o.appendChild(document.createTextNode(e));
  }
}
var mg =
  "@keyframes spinners-react-circular-fixed{0%{stroke-dashoffset:325}to{stroke-dashoffset:151}}";
hg(mg);
var Gp = function (e) {
  var t = e.secondaryColor,
    n = e.speed,
    r = e.still,
    o = e.thickness,
    l = Kp(e, ["secondaryColor", "speed", "still", "thickness"]),
    i = 4 * (o / 100),
    a = r
      ? {}
      : {
          animation:
            "spinners-react-circular-fixed " + 140 / n + "s linear infinite",
        };
  return Q.createElement(
    "svg",
    Et({ fill: "none" }, l, { viewBox: "0 0 66 66" }),
    Q.createElement("circle", {
      cx: "33",
      cy: "33",
      fill: "none",
      r: "28",
      stroke: t,
      strokeWidth: i,
    }),
    Q.createElement("circle", {
      cx: "33",
      cy: "33",
      fill: "none",
      r: "28",
      stroke: "currentColor",
      strokeDasharray: "40, 134",
      strokeDashoffset: "325",
      strokeLinecap: "round",
      strokeWidth: i,
      style: a,
    })
  );
};
Gp.defaultProps = pg;
var vg = dg(Gp);
const vi = () =>
    m(vg, {
      size: 50,
      thickness: 100,
      speed: 120,
      color: "rgba(170, 150, 218, 1)",
      secondaryColor: "silvergray",
    }),
  gg = () => {
    const [e, t] = C.useState([]),
      [n, r] = C.useState(""),
      [o, l] = C.useState([]),
      [i, a] = C.useState(""),
      [s, u] = C.useState(!1);
    C.useEffect(() => {
      u(!0),
        xe
          .get("/cars")
          .then((f) => t(f.data))
          .finally(() => u(!1));
    }, []),
      C.useEffect(() => {
        i === "Ascendente"
          ? (t((f) => [...f].sort((g, v) => g.price - v.price)),
            l((f) => [...f].sort((g, v) => g.price - v.price)))
          : (t((f) => [...f].sort((g, v) => v.price - g.price)),
            l((f) => [...f].sort((g, v) => v.price - g.price)));
      }, [i]);
    const d = (f) => {
        r(f.target.value), c(f.target.value);
      },
      c = (f) => {
        let g = e.filter((v) => {
          if (
            v.brand.toString().toLowerCase().includes(f.toLowerCase()) ||
            v.model.toString().toLowerCase().includes(f.toLowerCase())
          )
            return v;
        });
        l(g);
      };
    return k(gd, {
      children: [
        " ",
        k("div", {
          className: "flex flex-col border-y md:flex-row justify-between mt-4",
          children: [
            m("input", {
              className: "text-sm p-2.5 flex-1 mb-2",
              placeholder: "Busca por marca...",
              value: n,
              onChange: d,
            }),
            " ",
            k("select", {
              className: "text-gray-600 cursor-pointer flex-4",
              onChange: (f) => a(f.target.value),
              children: [
                " ",
                m("option", { value: "", children: "Ordenar por precio" }),
                m("option", {
                  value: "Ascendente",
                  children: "Precio ascendente",
                }),
                m("option", {
                  value: "Descendente",
                  children: "Precio descendente",
                }),
              ],
            }),
          ],
        }),
        s &&
          m("div", {
            className: "flex justify-center my-20",
            children: m(vi, {}),
          }),
        m("div", {
          className:
            "mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3",
          children:
            o.length > 0
              ? o.map((f) =>
                  k(
                    Ge,
                    {
                      to: "/car/" + f._id,
                      children: [
                        m("div", {
                          className: "bg-gray-500 mb-2 rounded-2xl flex",
                          children: m("img", {
                            src:
                              "https://alugame-api.onrender.com/" + f.photos[0],
                            className: "rounded-3xl object-contain ",
                            alt: "",
                          }),
                        }),
                        k("div", {
                          children: [
                            " ",
                            k("h2", {
                              className: "text-xl",
                              children: [f.brand, " ", f.model, " "],
                            }),
                            m("h2", {
                              className: "text-md text-slate-600",
                              children: f.location,
                            }),
                            " ",
                          ],
                        }),
                        k("div", {
                          children: [
                            k("span", {
                              className: "text-sm font-bold",
                              children: [f.price, "€ por hora"],
                            }),
                            " ",
                          ],
                        }),
                      ],
                    },
                    f._id
                  )
                )
              : e.map((f) =>
                  k(
                    Ge,
                    {
                      to: "/car/" + f._id,
                      children: [
                        m("div", {
                          className: "bg-gray-500 mb-2 rounded-2xl flex",
                          children: m("img", {
                            src:
                              "https://alugame-api.onrender.com/" + f.photos[0],
                            className: "rounded-3xl object-contain ",
                            alt: "",
                          }),
                        }),
                        k("div", {
                          children: [
                            " ",
                            k("h2", {
                              className: "text-xl",
                              children: [f.brand, " ", f.model, " "],
                            }),
                            m("h2", {
                              className: "text-md text-slate-600",
                              children: f.location,
                            }),
                            " ",
                          ],
                        }),
                        k("div", {
                          className: "",
                          children: [
                            k("span", {
                              className: "text-sm font-bold",
                              children: [f.price, "€ por hora"],
                            }),
                            " ",
                          ],
                        }),
                      ],
                    },
                    f._id
                  )
                ),
        }),
      ],
    });
  },
  Xp = ({ alert: e }) =>
    m("div", {
      className: `${
        e.error ? "from-red-300 to-red-400" : "from-green-400 to-green-600"
      } bg-gradient-to-br text-center p-2 uppercase text-white font-semibold text-md my-4`,
      children: e.msg,
    }),
  yg = () => {
    const [e, t] = C.useState(""),
      [n, r] = C.useState(""),
      [o, l] = C.useState({}),
      i = Rt(),
      { setCurrentUser: a, currentUser: s } = mi();
    if (s) return m(_p, { to: "/acc" });
    const u = async (c) => {
        if ((c.preventDefault(), [e, n].includes(""))) {
          l({ msg: "Rellena todos los campos", error: !0 });
          return;
        }
        l({});
        try {
          const f = await xe.post("/users/login", { email: e, password: n });
          a(f.data), console.log(f.data), i("/");
        } catch {
          l({ msg: "Correo o contraseña incorrectos", error: !0 });
        }
      },
      { msg: d } = o;
    return m("div", {
      className: "mt-4 grow flex items-center justify-around",
      children: k("div", {
        className: "mb-64",
        children: [
          m("h1", {
            className: "text-2xl text-center mb-4",
            children: "Inicia sesión",
          }),
          k("form", {
            className: "max-w-md mx-auto",
            onSubmit: u,
            children: [
              d && m(Xp, { alert: o }),
              m("input", {
                type: "email",
                placeholder: "Tu correo electrónico",
                value: e,
                onChange: (c) => t(c.target.value),
              }),
              m("input", {
                type: "password",
                placeholder: "Tu contraseña",
                value: n,
                onChange: (c) => r(c.target.value),
              }),
              m("button", { className: "primary", children: "Iniciar sesión" }),
              m("div", {
                className: "text-center py-4 text-slate-700 underline",
                children: m(Ge, {
                  to: "/register",
                  children: "Crea una cuenta aquí",
                }),
              }),
            ],
          }),
        ],
      }),
    });
  };
function Jp(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Jp(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function $t() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Jp(e)) && (r && (r += " "), (r += t));
  return r;
}
const br = (e) => typeof e == "number" && !isNaN(e),
  xn = (e) => typeof e == "string",
  Me = (e) => typeof e == "function",
  ll = (e) => (xn(e) || Me(e) ? e : null),
  ea = (e) => C.isValidElement(e) || xn(e) || Me(e) || br(e);
function wg(e, t, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: r, style: o } = e;
  requestAnimationFrame(() => {
    (o.minHeight = "initial"),
      (o.height = r + "px"),
      (o.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        (o.height = "0"), (o.padding = "0"), (o.margin = "0"), setTimeout(t, n);
      });
  });
}
function gi(e) {
  let {
    enter: t,
    exit: n,
    appendPosition: r = !1,
    collapse: o = !0,
    collapseDuration: l = 300,
  } = e;
  return function (i) {
    let {
      children: a,
      position: s,
      preventExitTransition: u,
      done: d,
      nodeRef: c,
      isIn: f,
    } = i;
    const g = r ? `${t}--${s}` : t,
      v = r ? `${n}--${s}` : n,
      w = C.useRef(0);
    return (
      C.useLayoutEffect(() => {
        const x = c.current,
          p = g.split(" "),
          h = (y) => {
            y.target === c.current &&
              (x.dispatchEvent(new Event("d")),
              x.removeEventListener("animationend", h),
              x.removeEventListener("animationcancel", h),
              w.current === 0 &&
                y.type !== "animationcancel" &&
                x.classList.remove(...p));
          };
        x.classList.add(...p),
          x.addEventListener("animationend", h),
          x.addEventListener("animationcancel", h);
      }, []),
      C.useEffect(() => {
        const x = c.current,
          p = () => {
            x.removeEventListener("animationend", p), o ? wg(x, d, l) : d();
          };
        f ||
          (u
            ? p()
            : ((w.current = 1),
              (x.className += ` ${v}`),
              x.addEventListener("animationend", p)));
      }, [f]),
      Q.createElement(Q.Fragment, null, a)
    );
  };
}
function Hc(e, t) {
  return {
    content: e.content,
    containerId: e.props.containerId,
    id: e.props.toastId,
    theme: e.props.theme,
    type: e.props.type,
    data: e.props.data || {},
    isLoading: e.props.isLoading,
    icon: e.props.icon,
    status: t,
  };
}
const He = {
    list: new Map(),
    emitQueue: new Map(),
    on(e, t) {
      return (
        this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this
      );
    },
    off(e, t) {
      if (t) {
        const n = this.list.get(e).filter((r) => r !== t);
        return this.list.set(e, n), this;
      }
      return this.list.delete(e), this;
    },
    cancelEmit(e) {
      const t = this.emitQueue.get(e);
      return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this;
    },
    emit(e) {
      this.list.has(e) &&
        this.list.get(e).forEach((t) => {
          const n = setTimeout(() => {
            t(...[].slice.call(arguments, 1));
          }, 0);
          this.emitQueue.has(e) || this.emitQueue.set(e, []),
            this.emitQueue.get(e).push(n);
        });
    },
  },
  jo = (e) => {
    let { theme: t, type: n, ...r } = e;
    return Q.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
      ...r,
    });
  },
  ta = {
    info: function (e) {
      return Q.createElement(
        jo,
        { ...e },
        Q.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
        })
      );
    },
    warning: function (e) {
      return Q.createElement(
        jo,
        { ...e },
        Q.createElement("path", {
          d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
        })
      );
    },
    success: function (e) {
      return Q.createElement(
        jo,
        { ...e },
        Q.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
        })
      );
    },
    error: function (e) {
      return Q.createElement(
        jo,
        { ...e },
        Q.createElement("path", {
          d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
        })
      );
    },
    spinner: function () {
      return Q.createElement("div", { className: "Toastify__spinner" });
    },
  };
function Sg(e) {
  const [, t] = C.useReducer((g) => g + 1, 0),
    [n, r] = C.useState([]),
    o = C.useRef(null),
    l = C.useRef(new Map()).current,
    i = (g) => n.indexOf(g) !== -1,
    a = C.useRef({
      toastKey: 1,
      displayedToast: 0,
      count: 0,
      queue: [],
      props: e,
      containerId: null,
      isToastActive: i,
      getToast: (g) => l.get(g),
    }).current;
  function s(g) {
    let { containerId: v } = g;
    const { limit: w } = a.props;
    !w ||
      (v && a.containerId !== v) ||
      ((a.count -= a.queue.length), (a.queue = []));
  }
  function u(g) {
    r((v) => (g == null ? [] : v.filter((w) => w !== g)));
  }
  function d() {
    const { toastContent: g, toastProps: v, staleId: w } = a.queue.shift();
    f(g, v, w);
  }
  function c(g, v) {
    let { delay: w, staleId: x, ...p } = v;
    if (
      !ea(g) ||
      (function (W) {
        return (
          !o.current ||
          (a.props.enableMultiContainer &&
            W.containerId !== a.props.containerId) ||
          (l.has(W.toastId) && W.updateId == null)
        );
      })(p)
    )
      return;
    const { toastId: h, updateId: y, data: S } = p,
      { props: _ } = a,
      R = () => u(h),
      M = y == null;
    M && a.count++;
    const P = {
      ..._,
      style: _.toastStyle,
      key: a.toastKey++,
      ...p,
      toastId: h,
      updateId: y,
      data: S,
      closeToast: R,
      isIn: !1,
      className: ll(p.className || _.toastClassName),
      bodyClassName: ll(p.bodyClassName || _.bodyClassName),
      progressClassName: ll(p.progressClassName || _.progressClassName),
      autoClose:
        !p.isLoading &&
        (($ = p.autoClose),
        (I = _.autoClose),
        $ === !1 || (br($) && $ > 0) ? $ : I),
      deleteToast() {
        const W = Hc(l.get(h), "removed");
        l.delete(h), He.emit(4, W);
        const ae = a.queue.length;
        if (
          ((a.count = h == null ? a.count - a.displayedToast : a.count - 1),
          a.count < 0 && (a.count = 0),
          ae > 0)
        ) {
          const A = h == null ? a.props.limit : 1;
          if (ae === 1 || A === 1) a.displayedToast++, d();
          else {
            const D = A > ae ? ae : A;
            a.displayedToast = D;
            for (let b = 0; b < D; b++) d();
          }
        } else t();
      },
    };
    var $, I;
    (P.iconOut = (function (W) {
      let { theme: ae, type: A, isLoading: D, icon: b } = W,
        E = null;
      const N = { theme: ae, type: A };
      return (
        b === !1 ||
          (Me(b)
            ? (E = b(N))
            : C.isValidElement(b)
            ? (E = C.cloneElement(b, N))
            : xn(b) || br(b)
            ? (E = b)
            : D
            ? (E = ta.spinner())
            : ((F) => F in ta)(A) && (E = ta[A](N))),
        E
      );
    })(P)),
      Me(p.onOpen) && (P.onOpen = p.onOpen),
      Me(p.onClose) && (P.onClose = p.onClose),
      (P.closeButton = _.closeButton),
      p.closeButton === !1 || ea(p.closeButton)
        ? (P.closeButton = p.closeButton)
        : p.closeButton === !0 &&
          (P.closeButton = !ea(_.closeButton) || _.closeButton);
    let L = g;
    C.isValidElement(g) && !xn(g.type)
      ? (L = C.cloneElement(g, { closeToast: R, toastProps: P, data: S }))
      : Me(g) && (L = g({ closeToast: R, toastProps: P, data: S })),
      _.limit && _.limit > 0 && a.count > _.limit && M
        ? a.queue.push({ toastContent: L, toastProps: P, staleId: x })
        : br(w)
        ? setTimeout(() => {
            f(L, P, x);
          }, w)
        : f(L, P, x);
  }
  function f(g, v, w) {
    const { toastId: x } = v;
    w && l.delete(w);
    const p = { content: g, props: v };
    l.set(x, p),
      r((h) => [...h, x].filter((y) => y !== w)),
      He.emit(4, Hc(p, p.props.updateId == null ? "added" : "updated"));
  }
  return (
    C.useEffect(
      () => (
        (a.containerId = e.containerId),
        He.cancelEmit(3)
          .on(0, c)
          .on(1, (g) => o.current && u(g))
          .on(5, s)
          .emit(2, a),
        () => {
          l.clear(), He.emit(3, a);
        }
      ),
      []
    ),
    C.useEffect(() => {
      (a.props = e), (a.isToastActive = i), (a.displayedToast = n.length);
    }),
    {
      getToastToRender: function (g) {
        const v = new Map(),
          w = Array.from(l.values());
        return (
          e.newestOnTop && w.reverse(),
          w.forEach((x) => {
            const { position: p } = x.props;
            v.has(p) || v.set(p, []), v.get(p).push(x);
          }),
          Array.from(v, (x) => g(x[0], x[1]))
        );
      },
      containerRef: o,
      isToastActive: i,
    }
  );
}
function Vc(e) {
  return e.targetTouches && e.targetTouches.length >= 1
    ? e.targetTouches[0].clientX
    : e.clientX;
}
function qc(e) {
  return e.targetTouches && e.targetTouches.length >= 1
    ? e.targetTouches[0].clientY
    : e.clientY;
}
function Cg(e) {
  const [t, n] = C.useState(!1),
    [r, o] = C.useState(!1),
    l = C.useRef(null),
    i = C.useRef({
      start: 0,
      x: 0,
      y: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      boundingRect: null,
      didMove: !1,
    }).current,
    a = C.useRef(e),
    {
      autoClose: s,
      pauseOnHover: u,
      closeToast: d,
      onClick: c,
      closeOnClick: f,
    } = e;
  function g(S) {
    if (e.draggable) {
      S.nativeEvent.type === "touchstart" && S.nativeEvent.preventDefault(),
        (i.didMove = !1),
        document.addEventListener("mousemove", p),
        document.addEventListener("mouseup", h),
        document.addEventListener("touchmove", p),
        document.addEventListener("touchend", h);
      const _ = l.current;
      (i.canCloseOnClick = !0),
        (i.canDrag = !0),
        (i.boundingRect = _.getBoundingClientRect()),
        (_.style.transition = ""),
        (i.x = Vc(S.nativeEvent)),
        (i.y = qc(S.nativeEvent)),
        e.draggableDirection === "x"
          ? ((i.start = i.x),
            (i.removalDistance = _.offsetWidth * (e.draggablePercent / 100)))
          : ((i.start = i.y),
            (i.removalDistance =
              _.offsetHeight *
              (e.draggablePercent === 80
                ? 1.5 * e.draggablePercent
                : e.draggablePercent / 100)));
    }
  }
  function v(S) {
    if (i.boundingRect) {
      const { top: _, bottom: R, left: M, right: P } = i.boundingRect;
      S.nativeEvent.type !== "touchend" &&
      e.pauseOnHover &&
      i.x >= M &&
      i.x <= P &&
      i.y >= _ &&
      i.y <= R
        ? x()
        : w();
    }
  }
  function w() {
    n(!0);
  }
  function x() {
    n(!1);
  }
  function p(S) {
    const _ = l.current;
    i.canDrag &&
      _ &&
      ((i.didMove = !0),
      t && x(),
      (i.x = Vc(S)),
      (i.y = qc(S)),
      (i.delta = e.draggableDirection === "x" ? i.x - i.start : i.y - i.start),
      i.start !== i.x && (i.canCloseOnClick = !1),
      (_.style.transform = `translate${e.draggableDirection}(${i.delta}px)`),
      (_.style.opacity = "" + (1 - Math.abs(i.delta / i.removalDistance))));
  }
  function h() {
    document.removeEventListener("mousemove", p),
      document.removeEventListener("mouseup", h),
      document.removeEventListener("touchmove", p),
      document.removeEventListener("touchend", h);
    const S = l.current;
    if (i.canDrag && i.didMove && S) {
      if (((i.canDrag = !1), Math.abs(i.delta) > i.removalDistance))
        return o(!0), void e.closeToast();
      (S.style.transition = "transform 0.2s, opacity 0.2s"),
        (S.style.transform = `translate${e.draggableDirection}(0)`),
        (S.style.opacity = "1");
    }
  }
  C.useEffect(() => {
    a.current = e;
  }),
    C.useEffect(
      () => (
        l.current && l.current.addEventListener("d", w, { once: !0 }),
        Me(e.onOpen) &&
          e.onOpen(C.isValidElement(e.children) && e.children.props),
        () => {
          const S = a.current;
          Me(S.onClose) &&
            S.onClose(C.isValidElement(S.children) && S.children.props);
        }
      ),
      []
    ),
    C.useEffect(
      () => (
        e.pauseOnFocusLoss &&
          (document.hasFocus() || x(),
          window.addEventListener("focus", w),
          window.addEventListener("blur", x)),
        () => {
          e.pauseOnFocusLoss &&
            (window.removeEventListener("focus", w),
            window.removeEventListener("blur", x));
        }
      ),
      [e.pauseOnFocusLoss]
    );
  const y = { onMouseDown: g, onTouchStart: g, onMouseUp: v, onTouchEnd: v };
  return (
    s && u && ((y.onMouseEnter = x), (y.onMouseLeave = w)),
    f &&
      (y.onClick = (S) => {
        c && c(S), i.canCloseOnClick && d();
      }),
    {
      playToast: w,
      pauseToast: x,
      isRunning: t,
      preventExitTransition: r,
      toastRef: l,
      eventHandlers: y,
    }
  );
}
function Zp(e) {
  let { closeToast: t, theme: n, ariaLabel: r = "close" } = e;
  return Q.createElement(
    "button",
    {
      className: `Toastify__close-button Toastify__close-button--${n}`,
      type: "button",
      onClick: (o) => {
        o.stopPropagation(), t(o);
      },
      "aria-label": r,
    },
    Q.createElement(
      "svg",
      { "aria-hidden": "true", viewBox: "0 0 14 16" },
      Q.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
      })
    )
  );
}
function Eg(e) {
  let {
    delay: t,
    isRunning: n,
    closeToast: r,
    type: o = "default",
    hide: l,
    className: i,
    style: a,
    controlledProgress: s,
    progress: u,
    rtl: d,
    isIn: c,
    theme: f,
  } = e;
  const g = l || (s && u === 0),
    v = {
      ...a,
      animationDuration: `${t}ms`,
      animationPlayState: n ? "running" : "paused",
      opacity: g ? 0 : 1,
    };
  s && (v.transform = `scaleX(${u})`);
  const w = $t(
      "Toastify__progress-bar",
      s
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${f}`,
      `Toastify__progress-bar--${o}`,
      { "Toastify__progress-bar--rtl": d }
    ),
    x = Me(i) ? i({ rtl: d, type: o, defaultClassName: w }) : $t(w, i);
  return Q.createElement("div", {
    role: "progressbar",
    "aria-hidden": g ? "true" : "false",
    "aria-label": "notification timer",
    className: x,
    style: v,
    [s && u >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
      s && u < 1
        ? null
        : () => {
            c && r();
          },
  });
}
const xg = (e) => {
    const {
        isRunning: t,
        preventExitTransition: n,
        toastRef: r,
        eventHandlers: o,
      } = Cg(e),
      {
        closeButton: l,
        children: i,
        autoClose: a,
        onClick: s,
        type: u,
        hideProgressBar: d,
        closeToast: c,
        transition: f,
        position: g,
        className: v,
        style: w,
        bodyClassName: x,
        bodyStyle: p,
        progressClassName: h,
        progressStyle: y,
        updateId: S,
        role: _,
        progress: R,
        rtl: M,
        toastId: P,
        deleteToast: $,
        isIn: I,
        isLoading: L,
        iconOut: W,
        closeOnClick: ae,
        theme: A,
      } = e,
      D = $t(
        "Toastify__toast",
        `Toastify__toast-theme--${A}`,
        `Toastify__toast--${u}`,
        { "Toastify__toast--rtl": M },
        { "Toastify__toast--close-on-click": ae }
      ),
      b = Me(v)
        ? v({ rtl: M, position: g, type: u, defaultClassName: D })
        : $t(D, v),
      E = !!R || !a,
      N = { closeToast: c, type: u, theme: A };
    let F = null;
    return (
      l === !1 ||
        (F = Me(l) ? l(N) : C.isValidElement(l) ? C.cloneElement(l, N) : Zp(N)),
      Q.createElement(
        f,
        { isIn: I, done: $, position: g, preventExitTransition: n, nodeRef: r },
        Q.createElement(
          "div",
          { id: P, onClick: s, className: b, ...o, style: w, ref: r },
          Q.createElement(
            "div",
            {
              ...(I && { role: _ }),
              className: Me(x) ? x({ type: u }) : $t("Toastify__toast-body", x),
              style: p,
            },
            W != null &&
              Q.createElement(
                "div",
                {
                  className: $t("Toastify__toast-icon", {
                    "Toastify--animate-icon Toastify__zoom-enter": !L,
                  }),
                },
                W
              ),
            Q.createElement("div", null, i)
          ),
          F,
          Q.createElement(Eg, {
            ...(S && !E ? { key: `pb-${S}` } : {}),
            rtl: M,
            theme: A,
            delay: a,
            isRunning: t,
            isIn: I,
            closeToast: c,
            hide: d,
            type: u,
            style: y,
            className: h,
            controlledProgress: E,
            progress: R || 0,
          })
        )
      )
    );
  },
  yi = function (e, t) {
    return (
      t === void 0 && (t = !1),
      {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t,
      }
    );
  },
  kg = gi(yi("bounce", !0));
gi(yi("slide", !0));
gi(yi("zoom"));
gi(yi("flip"));
const Al = C.forwardRef((e, t) => {
  const { getToastToRender: n, containerRef: r, isToastActive: o } = Sg(e),
    { className: l, style: i, rtl: a, containerId: s } = e;
  function u(d) {
    const c = $t(
      "Toastify__toast-container",
      `Toastify__toast-container--${d}`,
      { "Toastify__toast-container--rtl": a }
    );
    return Me(l)
      ? l({ position: d, rtl: a, defaultClassName: c })
      : $t(c, ll(l));
  }
  return (
    C.useEffect(() => {
      t && (t.current = r.current);
    }, []),
    Q.createElement(
      "div",
      { ref: r, className: "Toastify", id: s },
      n((d, c) => {
        const f = c.length ? { ...i } : { ...i, pointerEvents: "none" };
        return Q.createElement(
          "div",
          { className: u(d), style: f, key: `container-${d}` },
          c.map((g, v) => {
            let { content: w, props: x } = g;
            return Q.createElement(
              xg,
              {
                ...x,
                isIn: o(x.toastId),
                style: { ...x.style, "--nth": v + 1, "--len": c.length },
                key: `toast-${x.key}`,
              },
              w
            );
          })
        );
      })
    )
  );
});
(Al.displayName = "ToastContainer"),
  (Al.defaultProps = {
    position: "top-right",
    transition: kg,
    autoClose: 5e3,
    closeButton: Zp,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    closeOnClick: !0,
    draggable: !0,
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light",
  });
let na,
  un = new Map(),
  Pr = [],
  Ng = 1;
function eh() {
  return "" + Ng++;
}
function Og(e) {
  return e && (xn(e.toastId) || br(e.toastId)) ? e.toastId : eh();
}
function jr(e, t) {
  return (
    un.size > 0 ? He.emit(0, e, t) : Pr.push({ content: e, options: t }),
    t.toastId
  );
}
function Ul(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: Og(t) };
}
function Bo(e) {
  return (t, n) => jr(t, Ul(e, n));
}
function Z(e, t) {
  return jr(e, Ul("default", t));
}
(Z.loading = (e, t) =>
  jr(
    e,
    Ul("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    })
  )),
  (Z.promise = function (e, t, n) {
    let r,
      { pending: o, error: l, success: i } = t;
    o && (r = xn(o) ? Z.loading(o, n) : Z.loading(o.render, { ...n, ...o }));
    const a = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
        delay: 100,
      },
      s = (d, c, f) => {
        if (c == null) return void Z.dismiss(r);
        const g = { type: d, ...a, ...n, data: f },
          v = xn(c) ? { render: c } : c;
        return r ? Z.update(r, { ...g, ...v }) : Z(v.render, { ...g, ...v }), f;
      },
      u = Me(e) ? e() : e;
    return u.then((d) => s("success", i, d)).catch((d) => s("error", l, d)), u;
  }),
  (Z.success = Bo("success")),
  (Z.info = Bo("info")),
  (Z.error = Bo("error")),
  (Z.warning = Bo("warning")),
  (Z.warn = Z.warning),
  (Z.dark = (e, t) => jr(e, Ul("default", { theme: "dark", ...t }))),
  (Z.dismiss = (e) => {
    un.size > 0
      ? He.emit(1, e)
      : (Pr = Pr.filter((t) => e != null && t.options.toastId !== e));
  }),
  (Z.clearWaitingQueue = function (e) {
    return e === void 0 && (e = {}), He.emit(5, e);
  }),
  (Z.isActive = (e) => {
    let t = !1;
    return (
      un.forEach((n) => {
        n.isToastActive && n.isToastActive(e) && (t = !0);
      }),
      t
    );
  }),
  (Z.update = function (e, t) {
    t === void 0 && (t = {}),
      setTimeout(() => {
        const n = (function (r, o) {
          let { containerId: l } = o;
          const i = un.get(l || na);
          return i && i.getToast(r);
        })(e, t);
        if (n) {
          const { props: r, content: o } = n,
            l = { ...r, ...t, toastId: t.toastId || e, updateId: eh() };
          l.toastId !== e && (l.staleId = e);
          const i = l.render || o;
          delete l.render, jr(i, l);
        }
      }, 0);
  }),
  (Z.done = (e) => {
    Z.update(e, { progress: 1 });
  }),
  (Z.onChange = (e) => (
    He.on(4, e),
    () => {
      He.off(4, e);
    }
  )),
  (Z.POSITION = {
    TOP_LEFT: "top-left",
    TOP_RIGHT: "top-right",
    TOP_CENTER: "top-center",
    BOTTOM_LEFT: "bottom-left",
    BOTTOM_RIGHT: "bottom-right",
    BOTTOM_CENTER: "bottom-center",
  }),
  (Z.TYPE = {
    INFO: "info",
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error",
    DEFAULT: "default",
  }),
  He.on(2, (e) => {
    (na = e.containerId || e),
      un.set(na, e),
      Pr.forEach((t) => {
        He.emit(0, t.content, t.options);
      }),
      (Pr = []);
  }).on(3, (e) => {
    un.delete(e.containerId || e), un.size === 0 && He.off(0).off(1).off(5);
  });
const _g = () => {
    const [e, t] = C.useState(""),
      [n, r] = C.useState(""),
      [o, l] = C.useState(""),
      [i, a] = C.useState({}),
      s = Rt(),
      u = () => {
        Z.success(
          "Enhorabuena, te has registrado con éxito. Te estamos redirigiendo a la página del login",
          {
            position: "top-right",
            autoClose: 4e3,
            hideProgressBar: !1,
            closeOnClick: !0,
            pauseOnHover: !0,
            draggable: !0,
            progress: void 0,
            theme: "colored",
          }
        );
      };
    function d() {
      setTimeout(c, 4e3);
    }
    const c = () => {
        s("/login");
      },
      f = async (v) => {
        if ((v.preventDefault(), [e, n, o].includes(""))) {
          a({ msg: "Todos los campos son obligatorios", error: !0 });
          return;
        }
        a({});
        try {
          await xe.post("/users/register", { name: e, email: n, password: o }),
            u(),
            d();
        } catch {
          a({ msg: "Esa dirección de correo ya existe", error: !0 });
        }
      },
      { msg: g } = i;
    return m("div", {
      className: "mt-4 grow flex items-center justify-around",
      children: k("div", {
        className: "mb-64",
        children: [
          m("h1", {
            className: "text-2xl text-center mb-4",
            children: "Regístrate",
          }),
          k("form", {
            className: "max-w-md mx-auto",
            onSubmit: f,
            children: [
              g && m(Xp, { alert: i }),
              m("input", {
                type: "text",
                placeholder: "Tu nombre y apellidos",
                value: e,
                onChange: (v) => t(v.target.value),
              }),
              m("input", {
                type: "email",
                placeholder: "Tu dir. de correo electrónico",
                value: n,
                onChange: (v) => r(v.target.value),
              }),
              m("input", {
                type: "password",
                placeholder: "Tu contraseña",
                value: o,
                onChange: (v) => l(v.target.value),
              }),
              m("button", { className: "primary", children: "Registarse" }),
              m("div", {
                className: "text-center py-4 text-slate-700 underline",
                children: m(Ge, {
                  to: "/login",
                  children: "Ya tengo una cuenta",
                }),
              }),
              " ",
              m(Al, {}),
            ],
          }),
        ],
      }),
    });
  },
  wi = () => {
    var r;
    const { pathname: e } = yo();
    let t = (r = e.split("/")) == null ? void 0 : r[2];
    t === void 0 && (t = "profile");
    const n = (o = null) => {
      let l = "inline-flex gap-1 py-2 px-2 rounded-full";
      return (
        o === t
          ? (l += " bg-primary text-white font-semibold")
          : (l += " bg-gray-200"),
        l
      );
    };
    return k("nav", {
      className: "w-full flex justify-center mt-8 gap-2 mb-8 text-center ",
      children: [
        " ",
        m(Ge, {
          to: "/acc",
          className: n("profile"),
          children: k("div", {
            className: "flex flex-col gap-2 md:flex-row",
            children: [
              m("span", {
                className: "mx-auto md:mt-2 md:ml-2",
                children: m("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: "1.5",
                  stroke: "currentColor",
                  className: "md:w-6 h-6",
                  children: m("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z",
                  }),
                }),
              }),
              m("span", { className: "p-2", children: "Mi perfil" }),
            ],
          }),
        }),
        m(Ge, {
          to: "/acc/rentals",
          className: n("rentals"),
          children: k("div", {
            className: "flex flex-col gap-2 md:flex-row",
            children: [
              m("span", {
                className: "mx-auto md:mt-2 md:ml-2",
                children: m("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: "1.5",
                  stroke: "currentColor",
                  className: "w-6 h-6",
                  children: m("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75",
                  }),
                }),
              }),
              m("span", { className: "p-2", children: " Mis alquileres" }),
            ],
          }),
        }),
        m(Ge, {
          to: "/acc/cars",
          className: n("cars"),
          children: k("div", {
            className: "flex flex-col gap-2 md:flex-row",
            children: [
              m("span", {
                className: "mx-auto md:mt-2 md:ml-2",
                children: k("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "icon icon-tabler icon-tabler-car",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  strokeWidth: "1.5",
                  stroke: "currentColor",
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [
                    m("path", {
                      stroke: "none",
                      d: "M0 0h24v24H0z",
                      fill: "none",
                    }),
                    m("path", { d: "M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }),
                    m("path", {
                      d: "M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
                    }),
                    m("path", {
                      d: "M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5",
                    }),
                  ],
                }),
              }),
              m("span", { className: "p-2", children: "Mis coches" }),
            ],
          }),
        }),
      ],
    });
  },
  th = () => {
    const [e, t] = C.useState([]),
      [n, r] = C.useState(!1);
    return (
      C.useEffect(() => {
        r(!0),
          xe
            .get("/cars/user-cars")
            .then(({ data: o }) => t(o))
            .finally(() => r(!1));
      }, []),
      k("div", {
        children: [
          m(wi, {}),
          k("div", {
            className: "text-center",
            children: [
              k(Ge, {
                to: "/acc/cars/new",
                className:
                  "inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full mr-2",
                children: [
                  m("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    stroke: "currentColor",
                    className: "w-6 h-6",
                    children: m("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M12 6v12m6-6H6",
                    }),
                  }),
                  "Añadir coche",
                ],
              }),
              e.length > 0 &&
                k("div", {
                  className:
                    "hidden md:inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full",
                  children: [
                    m("svg", {
                      fill: "#ffffff",
                      className: "w-6 h-6",
                      viewBox: "0 0 40 40",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: m("path", {
                        className: "st0",
                        d: "M12 25l3 3 15-15-3-3-15 15zM11 26l3 3-4 1z",
                      }),
                    }),
                    "Click en el coche para editar",
                  ],
                }),
            ],
          }),
          k("div", {
            className: "mt-4",
            children: [
              n &&
                m("div", {
                  className: "flex justify-center my-10",
                  children: m(vi, {}),
                }),
              e == null
                ? void 0
                : e.map((o) =>
                    k(
                      Ge,
                      {
                        className:
                          "flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl my-4",
                        to: "/acc/cars/" + o._id,
                        children: [
                          m("div", {
                            className: "flex w-32 h-32 bg-gray-300",
                            children: m("img", {
                              src:
                                "https://alugame-api.onrender.com/" +
                                o.photos[0],
                              className: "object-cover",
                              alt: "",
                            }),
                          }),
                          k("div", {
                            className: "grow-0 shrink",
                            children: [
                              k("h2", {
                                className: "text-2xl text-slate-800",
                                children: [o.brand, ", ", o.model, " "],
                              }),
                              m("h2", {
                                className: "text-xl text-slate-700",
                                children: o.location,
                              }),
                              k("div", {
                                className:
                                  "flex gap-2 text-xl mt-4 text-slate-700 bg-primary p-1 rounded-2xl",
                                children: [
                                  m("div", {
                                    className: "mt-1 -mr-1",
                                    children: m("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      strokeWidth: "1.5",
                                      stroke: "currentColor",
                                      className: "w-6 h-6 text-white",
                                      children: m("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                      }),
                                    }),
                                  }),
                                  k("span", {
                                    className: "text-white",
                                    children: [o.price, "€/día"],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      o._id
                    )
                  ),
            ],
          }),
        ],
      })
    );
  },
  Tg = () => {
    const { currentUser: e, setCurrentUser: t } = mi(),
      n = Rt();
    let { subpage: r } = au();
    if (!e) return m(_p, { to: "/login" });
    r === void 0 && (r = "profile");
    const o = async () => {
      await xe.post("/users/logout"), t(null), n("/");
    };
    return k("div", {
      children: [
        m(wi, {}),
        r === "profile" &&
          k("div", {
            className: "text-center max-w-lg mx-auto",
            children: [
              "Sesión iniciada como",
              " ",
              m("span", { className: "font-semibold", children: e.name }),
              " con e-mail: (",
              e.email,
              ")",
              m("br", {}),
              k("button", {
                onClick: o,
                className: "primary max-w-sm mt-2 font-semibold",
                children: ["Cerrar sesión", " "],
              }),
              " ",
            ],
          }),
        r === "cars" && m(th, {}),
      ],
    });
  },
  as = ({ src: e, ...t }) => (
    (e =
      e && e.includes("https://")
        ? e
        : "https://alugame-api.onrender.com/" + e),
    m("img", { ...t, src: e, alt: "" })
  ),
  Pg = ({ addedPhotos: e, onChange: t }) => {
    const n = (l) => {
        const i = l.target.files;
        console.log({ files: i });
        const a = new FormData();
        for (let s = 0; s < i.length; s++) a.append("photos", i[s]);
        xe.post("/upload", a, {
          headers: { "Content-type": "multipart/form-data" },
        }).then((s) => {
          const { data: u } = s;
          t((d) => [...d, ...u]);
        });
      },
      r = (l, i) => {
        l.preventDefault(), t([...e.filter((a) => a !== i)]);
      },
      o = (l, i) => {
        l.preventDefault(), t([i, ...e.filter((a) => a !== i)]);
      };
    return k(gd, {
      children: [
        m("label", {
          htmlFor: "photo-url",
          className: "text-gray-800 text-lg",
          children: "Fotografías (cuantas más mejor)",
        }),
        k("div", {
          className:
            "mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
          children: [
            e.length > 0 &&
              e.map((l) =>
                k(
                  "div",
                  {
                    className: "h-32 flex relative",
                    children: [
                      m("img", {
                        className: "rounded-2xl w-full object-cover",
                        src: `https://alugame-api.onrender.com/${l}`,
                        alt: "",
                      }),
                      m("button", {
                        onClick: (i) => r(i, l),
                        className:
                          "cursor-pointer absolute bottom-1 right-1 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3",
                        children: m("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: 1.5,
                          stroke: "currentColor",
                          className: "w-6 h-6",
                          children: m("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0",
                          }),
                        }),
                      }),
                      k("button", {
                        onClick: (i) => o(i, l),
                        className:
                          "cursor-pointer absolute bottom-1 left-1 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3",
                        children: [
                          l === e[0] &&
                            m("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              className: "w-6 h-6",
                              children: m("path", {
                                fillRule: "evenodd",
                                d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z",
                                clipRule: "evenodd",
                              }),
                            }),
                          l !== e[0] &&
                            m("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              strokeWidth: 1.5,
                              stroke: "currentColor",
                              className: "w-6 h-6",
                              children: m("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
                              }),
                            }),
                        ],
                      }),
                    ],
                  },
                  l
                )
              ),
            k("label", {
              className:
                "h-32 w-64 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600 hover:bg-gray-200",
              children: [
                m("input", {
                  type: "file",
                  multiple: !0,
                  className: "hidden",
                  onChange: n,
                }),
                m("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: 1.5,
                  stroke: "currentColor",
                  className: "w-8 h-8",
                  children: m("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z",
                  }),
                }),
                "Subir desde mis archivos locales",
              ],
            }),
          ],
        }),
      ],
    });
  },
  Rg = ["2 personas", "4 personas", "5 personas", "7 personas", "9 personas"],
  Mg = ["3 puertas", "5 puertas", "7 puertas"],
  Lg = ["Manual", "Automatico"],
  Dg = ["Con aire acond.", "Sin aire acond."],
  zg = ["1 maleta", "2 maletas", "3 maletas"],
  Fg = ["Bajo", "Alto"],
  Ag = [
    { id: "04", name: "Almería" },
    { id: "11", name: "Cádiz" },
    { id: "14", name: "Córdoba" },
    { id: "18", name: "Granada" },
    { id: "21", name: "Huelva" },
    { id: "23", name: "Jaén" },
    { id: "29", name: "Málaga" },
    { id: "41", name: "Sevilla" },
    { id: "22", name: "Huesca" },
    { id: "44", name: "Teruel" },
    { id: "50", name: "Zaragoza" },
    { id: "33", name: "Asturias" },
    { id: "07", name: "Balears, Illes" },
    { id: "35", name: "Palmas, Las" },
    { id: "38", name: "Santa Cruz de Tenerife" },
    { id: "39", name: "Cantabria" },
    { id: "05", name: "Ávila" },
    { id: "09", name: "Burgos" },
    { id: "24", name: "León" },
    { id: "34", name: "Palencia" },
    { id: "37", name: "Salamanca" },
    { id: "40", name: "Segovia" },
    { id: "42", name: "Soria" },
    { id: "47", name: "Valladolid" },
    { id: "49", name: "Zamora" },
    { id: "02", name: "Albacete" },
    { id: "13", name: "Ciudad Real" },
    { id: "16", name: "Cuenca" },
    { id: "19", name: "Guadalajara" },
    { id: "45", name: "Toledo" },
    { id: "08", name: "Barcelona" },
    { id: "17", name: "Girona" },
    { id: "25", name: "Lleida" },
    { id: "43", name: "Tarragona" },
    { id: "03", name: "Alicante/Alacant" },
    { id: "12", name: "Castellón/Castelló" },
    { id: "46", name: "Valencia/València" },
    { id: "06", name: "Badajoz" },
    { id: "10", name: "Cáceres" },
    { id: "15", name: "Coruña, A" },
    { id: "27", name: "Lugo" },
    { id: "32", name: "Ourense" },
    { id: "36", name: "Pontevedra" },
    { id: "28", name: "Madrid" },
    { id: "30", name: "Murcia" },
    { id: "31", name: "Navarra" },
    { id: "01", name: "Araba/Álava" },
    { id: "48", name: "Bizkaia" },
    { id: "20", name: "Gipuzkoa" },
    { id: "26", name: "Rioja, La" },
    { id: "51", name: "Ceuta" },
    { id: "52", name: "Melilla" },
  ],
  Qc = () => {
    const { id: e } = au(),
      [t, n] = C.useState(""),
      [r, o] = C.useState(""),
      [l, i] = C.useState(""),
      [a, s] = C.useState([]),
      [u, d] = C.useState(""),
      [c, f] = C.useState(""),
      [g, v] = C.useState(""),
      [w, x] = C.useState(""),
      [p, h] = C.useState(""),
      [y, S] = C.useState(""),
      [_, R] = C.useState(""),
      [M, P] = C.useState(""),
      $ = Rt();
    return (
      C.useEffect(() => {
        e &&
          xe.get("/cars/" + e).then((L) => {
            const { data: W } = L;
            n(W.brand),
              o(W.model),
              i(W.location),
              s(W.photos),
              d(W.description),
              f(W.seats),
              v(W.doors),
              x(W.transmission),
              h(W.aircon),
              S(W.trunk),
              R(W.consumption),
              P(W.price);
          });
      }, [e]),
      k("form", {
        onSubmit: async (L) => {
          L.preventDefault();
          const W = {
            brand: t,
            model: r,
            location: l,
            photos: a,
            description: u,
            seats: c,
            doors: g,
            transmission: w,
            aircon: p,
            trunk: y,
            consumption: _,
            price: M,
          };
          e
            ? await xe.put("/cars", { id: e, ...W })
            : await xe.post("/cars", W),
            $("/acc/cars"),
            n(""),
            o(""),
            i(""),
            s(""),
            d(""),
            f(""),
            v(""),
            x(""),
            h(""),
            S(""),
            R(""),
            P("");
        },
        className: "mt-5",
        children: [
          m(wi, {}),
          k("div", {
            className: "mb-2",
            children: [
              " ",
              m("label", {
                className: "text-gray-800 text-lg",
                htmlFor: "brand",
                children: "Marca",
              }),
              m("input", {
                type: "text",
                id: "brand",
                placeholder: "Por ejemplo: Ford, Renault, Citroën, ...",
                value: t,
                onChange: (L) => n(L.target.value),
                required: !0,
              }),
            ],
          }),
          k("div", {
            className: "mb-2",
            children: [
              " ",
              m("label", {
                className: "text-gray-800 text-lg",
                htmlFor: "model",
                children: "Modelo",
              }),
              m("input", {
                type: "text",
                id: "model",
                placeholder: "Por ejemplo: Fiesta, Megane, C3, ...",
                value: r,
                onChange: (L) => o(L.target.value),
                required: !0,
              }),
            ],
          }),
          k("div", {
            className: "mb-2",
            children: [
              m("label", {
                className: "text-gray-800 text-lg",
                htmlFor: "location",
                children: "Provincia",
              }),
              k("select", {
                id: "location",
                className:
                  "border-2 p-2 mt-2 ml-2 placeholder-gray-400 rounded-lg",
                value: l,
                onChange: (L) => i(L.target.value),
                required: !0,
                children: [
                  m("option", {
                    value: "",
                    children: "Lugar donde se encuentra",
                  }),
                  Ag.map((L) => m("option", { children: L.name }, L.id)),
                ],
              }),
            ],
          }),
          m(Pg, { addedPhotos: a, onChange: s }),
          k("div", {
            className: "mb-2",
            children: [
              " ",
              m("label", {
                className: "text-gray-800 text-lg",
                htmlFor: "description",
                children: "Descripción",
              }),
              m("textarea", {
                type: "text",
                id: "description",
                placeholder:
                  "Descripción del coche: antigüedad, kilometraje, color, etc.",
                value: u,
                onChange: (L) => d(L.target.value),
                required: !0,
              }),
            ],
          }),
          k("div", {
            className: "mb-2",
            children: [
              m("label", {
                htmlFor: "price",
                className: "text-gray-800 text-lg",
                children: "Precio por día (€)",
              }),
              m("input", {
                type: "number",
                className: "ml-5",
                id: "price",
                value: M,
                placeholder:
                  "Precio de alquilar el coche durante un día en euros",
                onChange: (L) => P(L.target.value),
                required: !0,
              }),
            ],
          }),
          m("div", {
            className: "mb-2",
            children: k("div", {
              children: [
                k("div", {
                  className: "mb-2",
                  children: [
                    " ",
                    m("label", {
                      className: "text-gray-800 text-lg",
                      htmlFor: "seats",
                      children: "Plazas",
                    }),
                    " ",
                    k("select", {
                      id: "seats",
                      className:
                        "border-2 p-2 mt-2 ml-2 placeholder-gray-400 rounded-lg",
                      value: c,
                      onChange: (L) => f(L.target.value),
                      required: !0,
                      children: [
                        m("option", {
                          value: "",
                          children: "Elige entre 2, 4, 5, 7 o 9 plazas",
                        }),
                        Rg.map((L) => m("option", { children: L }, L)),
                      ],
                    }),
                  ],
                }),
                k("div", {
                  className: "mb-2",
                  children: [
                    " ",
                    k("label", {
                      className: "text-gray-800 text-lg",
                      htmlFor: "doors",
                      children: [" ", "Nº de puertas"],
                    }),
                    " ",
                    k("select", {
                      id: "doors",
                      className:
                        "border-2 p-2 mt-2 ml-2 placeholder-gray-400 rounded-lg",
                      value: g,
                      onChange: (L) => v(L.target.value),
                      required: !0,
                      children: [
                        m("option", {
                          value: "",
                          children: "Elige entre 3, 5 o 7 puertas",
                        }),
                        Mg.map((L) => m("option", { children: L }, L)),
                      ],
                    }),
                  ],
                }),
                k("div", {
                  className: "mb-2",
                  children: [
                    " ",
                    k("label", {
                      className: "text-gray-800 text-lg",
                      htmlFor: "trunk",
                      children: [" ", "Capacidad del maletero"],
                    }),
                    " ",
                    k("select", {
                      id: "trunk",
                      className:
                        "border-2 p-2 mt-2 ml-2 placeholder-gray-400 rounded-lg",
                      value: y,
                      onChange: (L) => S(L.target.value),
                      required: !0,
                      children: [
                        m("option", {
                          value: "",
                          children: "Elige entre 1, 2 o 3 maletas",
                        }),
                        zg.map((L) => m("option", { children: L }, L)),
                      ],
                    }),
                  ],
                }),
                k("div", {
                  className: "mb-2",
                  children: [
                    " ",
                    m("label", {
                      className: "text-gray-800 text-lg",
                      htmlFor: "transmission",
                      children: "Transmisión",
                    }),
                    " ",
                    k("select", {
                      id: "transmission",
                      className:
                        "border-2 p-2 mt-2 ml-2 placeholder-gray-400 rounded-lg",
                      value: w,
                      onChange: (L) => x(L.target.value),
                      required: !0,
                      children: [
                        m("option", {
                          value: "",
                          children: "Elige entre manual o automático",
                        }),
                        Lg.map((L) => m("option", { children: L }, L)),
                      ],
                    }),
                  ],
                }),
                k("div", {
                  className: "mb-2",
                  children: [
                    k("label", {
                      className: "text-gray-800 text-lg",
                      htmlFor: "aircon",
                      children: [" ", "Aire acondicionado"],
                    }),
                    " ",
                    k("select", {
                      id: "aircon",
                      className:
                        "border-2 p-2 mt-2 ml-2 placeholder-gray-400 rounded-lg",
                      value: p,
                      onChange: (L) => h(L.target.value),
                      required: !0,
                      children: [
                        m("option", {
                          value: "",
                          children: "Elige con o sin aire ",
                        }),
                        Dg.map((L) => m("option", { children: L }, L)),
                      ],
                    }),
                  ],
                }),
                k("div", {
                  className: "mb-2",
                  children: [
                    " ",
                    m("label", {
                      className: "text-gray-800 text-lg",
                      htmlFor: "consumption",
                      children: "Consumo",
                    }),
                    " ",
                    k("select", {
                      id: "consumption",
                      className:
                        "border-2 p-2 mt-2 ml-2 placeholder-gray-400 rounded-lg",
                      value: _,
                      onChange: (L) => R(L.target.value),
                      required: !0,
                      children: [
                        m("option", {
                          value: "",
                          children: "Elige entre alto o bajo consumo",
                        }),
                        Fg.map((L) => m("option", { children: L }, L)),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          m("button", {
            className:
              "primary w-4 my-8 hover:bg-slate-300 hover:text-gray-700",
            children: "Save",
          }),
        ],
      })
    );
  };
function kn(e) {
  if (e === null || e === !0 || e === !1) return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function ye(e, t) {
  if (t.length < e)
    throw new TypeError(
      e +
        " argument" +
        (e > 1 ? "s" : "") +
        " required, but only " +
        t.length +
        " present"
    );
}
function il(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (il = function (n) {
          return typeof n;
        })
      : (il = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    il(e)
  );
}
function st(e) {
  ye(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || (il(e) === "object" && t === "[object Date]")
    ? new Date(e.getTime())
    : typeof e == "number" || t === "[object Number]"
    ? new Date(e)
    : ((typeof e == "string" || t === "[object String]") &&
        typeof console < "u" &&
        (console.warn(
          "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
        ),
        console.warn(new Error().stack)),
      new Date(NaN));
}
function Ug(e, t) {
  ye(2, arguments);
  var n = st(e).getTime(),
    r = kn(t);
  return new Date(n + r);
}
var Ig = {};
function Si() {
  return Ig;
}
function ss(e) {
  var t = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Yc(e) {
  ye(1, arguments);
  var t = st(e);
  return t.setHours(0, 0, 0, 0), t;
}
var bg = 864e5;
function nh(e, t) {
  ye(2, arguments);
  var n = Yc(e),
    r = Yc(t),
    o = n.getTime() - ss(n),
    l = r.getTime() - ss(r);
  return Math.round((o - l) / bg);
}
function al(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (al = function (n) {
          return typeof n;
        })
      : (al = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    al(e)
  );
}
function jg(e) {
  return (
    ye(1, arguments),
    e instanceof Date ||
      (al(e) === "object" &&
        Object.prototype.toString.call(e) === "[object Date]")
  );
}
function Bg(e) {
  if ((ye(1, arguments), !jg(e) && typeof e != "number")) return !1;
  var t = st(e);
  return !isNaN(Number(t));
}
function $g(e, t) {
  ye(2, arguments);
  var n = kn(t);
  return Ug(e, -n);
}
var Wg = 864e5;
function Hg(e) {
  ye(1, arguments);
  var t = st(e),
    n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(),
    o = n - r;
  return Math.floor(o / Wg) + 1;
}
function Il(e) {
  ye(1, arguments);
  var t = 1,
    n = st(e),
    r = n.getUTCDay(),
    o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function rh(e) {
  ye(1, arguments);
  var t = st(e),
    n = t.getUTCFullYear(),
    r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = Il(r),
    l = new Date(0);
  l.setUTCFullYear(n, 0, 4), l.setUTCHours(0, 0, 0, 0);
  var i = Il(l);
  return t.getTime() >= o.getTime()
    ? n + 1
    : t.getTime() >= i.getTime()
    ? n
    : n - 1;
}
function Vg(e) {
  ye(1, arguments);
  var t = rh(e),
    n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = Il(n);
  return r;
}
var qg = 6048e5;
function Qg(e) {
  ye(1, arguments);
  var t = st(e),
    n = Il(t).getTime() - Vg(t).getTime();
  return Math.round(n / qg) + 1;
}
function bl(e, t) {
  var n, r, o, l, i, a, s, u;
  ye(1, arguments);
  var d = Si(),
    c = kn(
      (n =
        (r =
          (o =
            (l = t == null ? void 0 : t.weekStartsOn) !== null && l !== void 0
              ? l
              : t == null ||
                (i = t.locale) === null ||
                i === void 0 ||
                (a = i.options) === null ||
                a === void 0
              ? void 0
              : a.weekStartsOn) !== null && o !== void 0
            ? o
            : d.weekStartsOn) !== null && r !== void 0
          ? r
          : (s = d.locale) === null ||
            s === void 0 ||
            (u = s.options) === null ||
            u === void 0
          ? void 0
          : u.weekStartsOn) !== null && n !== void 0
        ? n
        : 0
    );
  if (!(c >= 0 && c <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = st(e),
    g = f.getUTCDay(),
    v = (g < c ? 7 : 0) + g - c;
  return f.setUTCDate(f.getUTCDate() - v), f.setUTCHours(0, 0, 0, 0), f;
}
function oh(e, t) {
  var n, r, o, l, i, a, s, u;
  ye(1, arguments);
  var d = st(e),
    c = d.getUTCFullYear(),
    f = Si(),
    g = kn(
      (n =
        (r =
          (o =
            (l = t == null ? void 0 : t.firstWeekContainsDate) !== null &&
            l !== void 0
              ? l
              : t == null ||
                (i = t.locale) === null ||
                i === void 0 ||
                (a = i.options) === null ||
                a === void 0
              ? void 0
              : a.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : f.firstWeekContainsDate) !== null && r !== void 0
          ? r
          : (s = f.locale) === null ||
            s === void 0 ||
            (u = s.options) === null ||
            u === void 0
          ? void 0
          : u.firstWeekContainsDate) !== null && n !== void 0
        ? n
        : 1
    );
  if (!(g >= 1 && g <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var v = new Date(0);
  v.setUTCFullYear(c + 1, 0, g), v.setUTCHours(0, 0, 0, 0);
  var w = bl(v, t),
    x = new Date(0);
  x.setUTCFullYear(c, 0, g), x.setUTCHours(0, 0, 0, 0);
  var p = bl(x, t);
  return d.getTime() >= w.getTime()
    ? c + 1
    : d.getTime() >= p.getTime()
    ? c
    : c - 1;
}
function Yg(e, t) {
  var n, r, o, l, i, a, s, u;
  ye(1, arguments);
  var d = Si(),
    c = kn(
      (n =
        (r =
          (o =
            (l = t == null ? void 0 : t.firstWeekContainsDate) !== null &&
            l !== void 0
              ? l
              : t == null ||
                (i = t.locale) === null ||
                i === void 0 ||
                (a = i.options) === null ||
                a === void 0
              ? void 0
              : a.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : d.firstWeekContainsDate) !== null && r !== void 0
          ? r
          : (s = d.locale) === null ||
            s === void 0 ||
            (u = s.options) === null ||
            u === void 0
          ? void 0
          : u.firstWeekContainsDate) !== null && n !== void 0
        ? n
        : 1
    ),
    f = oh(e, t),
    g = new Date(0);
  g.setUTCFullYear(f, 0, c), g.setUTCHours(0, 0, 0, 0);
  var v = bl(g, t);
  return v;
}
var Kg = 6048e5;
function Gg(e, t) {
  ye(1, arguments);
  var n = st(e),
    r = bl(n, t).getTime() - Yg(n, t).getTime();
  return Math.round(r / Kg) + 1;
}
function Y(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var Xg = {
  y: function (t, n) {
    var r = t.getUTCFullYear(),
      o = r > 0 ? r : 1 - r;
    return Y(n === "yy" ? o % 100 : o, n.length);
  },
  M: function (t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : Y(r + 1, 2);
  },
  d: function (t, n) {
    return Y(t.getUTCDate(), n.length);
  },
  a: function (t, n) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  h: function (t, n) {
    return Y(t.getUTCHours() % 12 || 12, n.length);
  },
  H: function (t, n) {
    return Y(t.getUTCHours(), n.length);
  },
  m: function (t, n) {
    return Y(t.getUTCMinutes(), n.length);
  },
  s: function (t, n) {
    return Y(t.getUTCSeconds(), n.length);
  },
  S: function (t, n) {
    var r = n.length,
      o = t.getUTCMilliseconds(),
      l = Math.floor(o * Math.pow(10, r - 3));
    return Y(l, n.length);
  },
};
const zt = Xg;
var Rn = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  Jg = {
    G: function (t, n, r) {
      var o = t.getUTCFullYear() > 0 ? 1 : 0;
      switch (n) {
        case "G":
        case "GG":
        case "GGG":
          return r.era(o, { width: "abbreviated" });
        case "GGGGG":
          return r.era(o, { width: "narrow" });
        case "GGGG":
        default:
          return r.era(o, { width: "wide" });
      }
    },
    y: function (t, n, r) {
      if (n === "yo") {
        var o = t.getUTCFullYear(),
          l = o > 0 ? o : 1 - o;
        return r.ordinalNumber(l, { unit: "year" });
      }
      return zt.y(t, n);
    },
    Y: function (t, n, r, o) {
      var l = oh(t, o),
        i = l > 0 ? l : 1 - l;
      if (n === "YY") {
        var a = i % 100;
        return Y(a, 2);
      }
      return n === "Yo" ? r.ordinalNumber(i, { unit: "year" }) : Y(i, n.length);
    },
    R: function (t, n) {
      var r = rh(t);
      return Y(r, n.length);
    },
    u: function (t, n) {
      var r = t.getUTCFullYear();
      return Y(r, n.length);
    },
    Q: function (t, n, r) {
      var o = Math.ceil((t.getUTCMonth() + 1) / 3);
      switch (n) {
        case "Q":
          return String(o);
        case "QQ":
          return Y(o, 2);
        case "Qo":
          return r.ordinalNumber(o, { unit: "quarter" });
        case "QQQ":
          return r.quarter(o, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return r.quarter(o, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return r.quarter(o, { width: "wide", context: "formatting" });
      }
    },
    q: function (t, n, r) {
      var o = Math.ceil((t.getUTCMonth() + 1) / 3);
      switch (n) {
        case "q":
          return String(o);
        case "qq":
          return Y(o, 2);
        case "qo":
          return r.ordinalNumber(o, { unit: "quarter" });
        case "qqq":
          return r.quarter(o, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return r.quarter(o, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return r.quarter(o, { width: "wide", context: "standalone" });
      }
    },
    M: function (t, n, r) {
      var o = t.getUTCMonth();
      switch (n) {
        case "M":
        case "MM":
          return zt.M(t, n);
        case "Mo":
          return r.ordinalNumber(o + 1, { unit: "month" });
        case "MMM":
          return r.month(o, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return r.month(o, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return r.month(o, { width: "wide", context: "formatting" });
      }
    },
    L: function (t, n, r) {
      var o = t.getUTCMonth();
      switch (n) {
        case "L":
          return String(o + 1);
        case "LL":
          return Y(o + 1, 2);
        case "Lo":
          return r.ordinalNumber(o + 1, { unit: "month" });
        case "LLL":
          return r.month(o, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return r.month(o, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return r.month(o, { width: "wide", context: "standalone" });
      }
    },
    w: function (t, n, r, o) {
      var l = Gg(t, o);
      return n === "wo" ? r.ordinalNumber(l, { unit: "week" }) : Y(l, n.length);
    },
    I: function (t, n, r) {
      var o = Qg(t);
      return n === "Io" ? r.ordinalNumber(o, { unit: "week" }) : Y(o, n.length);
    },
    d: function (t, n, r) {
      return n === "do"
        ? r.ordinalNumber(t.getUTCDate(), { unit: "date" })
        : zt.d(t, n);
    },
    D: function (t, n, r) {
      var o = Hg(t);
      return n === "Do"
        ? r.ordinalNumber(o, { unit: "dayOfYear" })
        : Y(o, n.length);
    },
    E: function (t, n, r) {
      var o = t.getUTCDay();
      switch (n) {
        case "E":
        case "EE":
        case "EEE":
          return r.day(o, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return r.day(o, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return r.day(o, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return r.day(o, { width: "wide", context: "formatting" });
      }
    },
    e: function (t, n, r, o) {
      var l = t.getUTCDay(),
        i = (l - o.weekStartsOn + 8) % 7 || 7;
      switch (n) {
        case "e":
          return String(i);
        case "ee":
          return Y(i, 2);
        case "eo":
          return r.ordinalNumber(i, { unit: "day" });
        case "eee":
          return r.day(l, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return r.day(l, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return r.day(l, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return r.day(l, { width: "wide", context: "formatting" });
      }
    },
    c: function (t, n, r, o) {
      var l = t.getUTCDay(),
        i = (l - o.weekStartsOn + 8) % 7 || 7;
      switch (n) {
        case "c":
          return String(i);
        case "cc":
          return Y(i, n.length);
        case "co":
          return r.ordinalNumber(i, { unit: "day" });
        case "ccc":
          return r.day(l, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return r.day(l, { width: "narrow", context: "standalone" });
        case "cccccc":
          return r.day(l, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return r.day(l, { width: "wide", context: "standalone" });
      }
    },
    i: function (t, n, r) {
      var o = t.getUTCDay(),
        l = o === 0 ? 7 : o;
      switch (n) {
        case "i":
          return String(l);
        case "ii":
          return Y(l, n.length);
        case "io":
          return r.ordinalNumber(l, { unit: "day" });
        case "iii":
          return r.day(o, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return r.day(o, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return r.day(o, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return r.day(o, { width: "wide", context: "formatting" });
      }
    },
    a: function (t, n, r) {
      var o = t.getUTCHours(),
        l = o / 12 >= 1 ? "pm" : "am";
      switch (n) {
        case "a":
        case "aa":
          return r.dayPeriod(l, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return r
            .dayPeriod(l, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return r.dayPeriod(l, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return r.dayPeriod(l, { width: "wide", context: "formatting" });
      }
    },
    b: function (t, n, r) {
      var o = t.getUTCHours(),
        l;
      switch (
        (o === 12
          ? (l = Rn.noon)
          : o === 0
          ? (l = Rn.midnight)
          : (l = o / 12 >= 1 ? "pm" : "am"),
        n)
      ) {
        case "b":
        case "bb":
          return r.dayPeriod(l, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return r
            .dayPeriod(l, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return r.dayPeriod(l, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return r.dayPeriod(l, { width: "wide", context: "formatting" });
      }
    },
    B: function (t, n, r) {
      var o = t.getUTCHours(),
        l;
      switch (
        (o >= 17
          ? (l = Rn.evening)
          : o >= 12
          ? (l = Rn.afternoon)
          : o >= 4
          ? (l = Rn.morning)
          : (l = Rn.night),
        n)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return r.dayPeriod(l, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return r.dayPeriod(l, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return r.dayPeriod(l, { width: "wide", context: "formatting" });
      }
    },
    h: function (t, n, r) {
      if (n === "ho") {
        var o = t.getUTCHours() % 12;
        return o === 0 && (o = 12), r.ordinalNumber(o, { unit: "hour" });
      }
      return zt.h(t, n);
    },
    H: function (t, n, r) {
      return n === "Ho"
        ? r.ordinalNumber(t.getUTCHours(), { unit: "hour" })
        : zt.H(t, n);
    },
    K: function (t, n, r) {
      var o = t.getUTCHours() % 12;
      return n === "Ko" ? r.ordinalNumber(o, { unit: "hour" }) : Y(o, n.length);
    },
    k: function (t, n, r) {
      var o = t.getUTCHours();
      return (
        o === 0 && (o = 24),
        n === "ko" ? r.ordinalNumber(o, { unit: "hour" }) : Y(o, n.length)
      );
    },
    m: function (t, n, r) {
      return n === "mo"
        ? r.ordinalNumber(t.getUTCMinutes(), { unit: "minute" })
        : zt.m(t, n);
    },
    s: function (t, n, r) {
      return n === "so"
        ? r.ordinalNumber(t.getUTCSeconds(), { unit: "second" })
        : zt.s(t, n);
    },
    S: function (t, n) {
      return zt.S(t, n);
    },
    X: function (t, n, r, o) {
      var l = o._originalDate || t,
        i = l.getTimezoneOffset();
      if (i === 0) return "Z";
      switch (n) {
        case "X":
          return Gc(i);
        case "XXXX":
        case "XX":
          return cn(i);
        case "XXXXX":
        case "XXX":
        default:
          return cn(i, ":");
      }
    },
    x: function (t, n, r, o) {
      var l = o._originalDate || t,
        i = l.getTimezoneOffset();
      switch (n) {
        case "x":
          return Gc(i);
        case "xxxx":
        case "xx":
          return cn(i);
        case "xxxxx":
        case "xxx":
        default:
          return cn(i, ":");
      }
    },
    O: function (t, n, r, o) {
      var l = o._originalDate || t,
        i = l.getTimezoneOffset();
      switch (n) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Kc(i, ":");
        case "OOOO":
        default:
          return "GMT" + cn(i, ":");
      }
    },
    z: function (t, n, r, o) {
      var l = o._originalDate || t,
        i = l.getTimezoneOffset();
      switch (n) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Kc(i, ":");
        case "zzzz":
        default:
          return "GMT" + cn(i, ":");
      }
    },
    t: function (t, n, r, o) {
      var l = o._originalDate || t,
        i = Math.floor(l.getTime() / 1e3);
      return Y(i, n.length);
    },
    T: function (t, n, r, o) {
      var l = o._originalDate || t,
        i = l.getTime();
      return Y(i, n.length);
    },
  };
function Kc(e, t) {
  var n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    o = Math.floor(r / 60),
    l = r % 60;
  if (l === 0) return n + String(o);
  var i = t || "";
  return n + String(o) + i + Y(l, 2);
}
function Gc(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + Y(Math.abs(e) / 60, 2);
  }
  return cn(e, t);
}
function cn(e, t) {
  var n = t || "",
    r = e > 0 ? "-" : "+",
    o = Math.abs(e),
    l = Y(Math.floor(o / 60), 2),
    i = Y(o % 60, 2);
  return r + l + n + i;
}
const Zg = Jg;
var Xc = function (t, n) {
    switch (t) {
      case "P":
        return n.date({ width: "short" });
      case "PP":
        return n.date({ width: "medium" });
      case "PPP":
        return n.date({ width: "long" });
      case "PPPP":
      default:
        return n.date({ width: "full" });
    }
  },
  lh = function (t, n) {
    switch (t) {
      case "p":
        return n.time({ width: "short" });
      case "pp":
        return n.time({ width: "medium" });
      case "ppp":
        return n.time({ width: "long" });
      case "pppp":
      default:
        return n.time({ width: "full" });
    }
  },
  ey = function (t, n) {
    var r = t.match(/(P+)(p+)?/) || [],
      o = r[1],
      l = r[2];
    if (!l) return Xc(t, n);
    var i;
    switch (o) {
      case "P":
        i = n.dateTime({ width: "short" });
        break;
      case "PP":
        i = n.dateTime({ width: "medium" });
        break;
      case "PPP":
        i = n.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        i = n.dateTime({ width: "full" });
        break;
    }
    return i.replace("{{date}}", Xc(o, n)).replace("{{time}}", lh(l, n));
  },
  ty = { p: lh, P: ey };
const ny = ty;
var ry = ["D", "DD"],
  oy = ["YY", "YYYY"];
function ly(e) {
  return ry.indexOf(e) !== -1;
}
function iy(e) {
  return oy.indexOf(e) !== -1;
}
function Jc(e, t, n) {
  if (e === "YYYY")
    throw new RangeError(
      "Use `yyyy` instead of `YYYY` (in `"
        .concat(t, "`) for formatting years to the input `")
        .concat(
          n,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "YY")
    throw new RangeError(
      "Use `yy` instead of `YY` (in `"
        .concat(t, "`) for formatting years to the input `")
        .concat(
          n,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "D")
    throw new RangeError(
      "Use `d` instead of `D` (in `"
        .concat(t, "`) for formatting days of the month to the input `")
        .concat(
          n,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "DD")
    throw new RangeError(
      "Use `dd` instead of `DD` (in `"
        .concat(t, "`) for formatting days of the month to the input `")
        .concat(
          n,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
}
var ay = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  sy = function (t, n, r) {
    var o,
      l = ay[t];
    return (
      typeof l == "string"
        ? (o = l)
        : n === 1
        ? (o = l.one)
        : (o = l.other.replace("{{count}}", n.toString())),
      r != null && r.addSuffix
        ? r.comparison && r.comparison > 0
          ? "in " + o
          : o + " ago"
        : o
    );
  };
const uy = sy;
function ra(e) {
  return function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.width ? String(t.width) : e.defaultWidth,
      r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var cy = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  dy = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  fy = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  py = {
    date: ra({ formats: cy, defaultWidth: "full" }),
    time: ra({ formats: dy, defaultWidth: "full" }),
    dateTime: ra({ formats: fy, defaultWidth: "full" }),
  };
const hy = py;
var my = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  vy = function (t, n, r, o) {
    return my[t];
  };
const gy = vy;
function xr(e) {
  return function (t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone",
      o;
    if (r === "formatting" && e.formattingValues) {
      var l = e.defaultFormattingWidth || e.defaultWidth,
        i = n != null && n.width ? String(n.width) : l;
      o = e.formattingValues[i] || e.formattingValues[l];
    } else {
      var a = e.defaultWidth,
        s = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[a];
    }
    var u = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[u];
  };
}
var yy = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  wy = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  Sy = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
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
    wide: [
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
  },
  Cy = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  Ey = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  xy = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  ky = function (t, n) {
    var r = Number(t),
      o = r % 100;
    if (o > 20 || o < 10)
      switch (o % 10) {
        case 1:
          return r + "st";
        case 2:
          return r + "nd";
        case 3:
          return r + "rd";
      }
    return r + "th";
  },
  Ny = {
    ordinalNumber: ky,
    era: xr({ values: yy, defaultWidth: "wide" }),
    quarter: xr({
      values: wy,
      defaultWidth: "wide",
      argumentCallback: function (t) {
        return t - 1;
      },
    }),
    month: xr({ values: Sy, defaultWidth: "wide" }),
    day: xr({ values: Cy, defaultWidth: "wide" }),
    dayPeriod: xr({
      values: Ey,
      defaultWidth: "wide",
      formattingValues: xy,
      defaultFormattingWidth: "wide",
    }),
  };
const Oy = Ny;
function kr(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.width,
      o = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      l = t.match(o);
    if (!l) return null;
    var i = l[0],
      a = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      s = Array.isArray(a)
        ? Ty(a, function (c) {
            return c.test(i);
          })
        : _y(a, function (c) {
            return c.test(i);
          }),
      u;
    (u = e.valueCallback ? e.valueCallback(s) : s),
      (u = n.valueCallback ? n.valueCallback(u) : u);
    var d = t.slice(i.length);
    return { value: u, rest: d };
  };
}
function _y(e, t) {
  for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n;
}
function Ty(e, t) {
  for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function Py(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = t.match(e.matchPattern);
    if (!r) return null;
    var o = r[0],
      l = t.match(e.parsePattern);
    if (!l) return null;
    var i = e.valueCallback ? e.valueCallback(l[0]) : l[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    var a = t.slice(o.length);
    return { value: i, rest: a };
  };
}
var Ry = /^(\d+)(th|st|nd|rd)?/i,
  My = /\d+/i,
  Ly = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  Dy = { any: [/^b/i, /^(a|c)/i] },
  zy = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  Fy = { any: [/1/i, /2/i, /3/i, /4/i] },
  Ay = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  Uy = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  Iy = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  by = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  jy = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  By = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  $y = {
    ordinalNumber: Py({
      matchPattern: Ry,
      parsePattern: My,
      valueCallback: function (t) {
        return parseInt(t, 10);
      },
    }),
    era: kr({
      matchPatterns: Ly,
      defaultMatchWidth: "wide",
      parsePatterns: Dy,
      defaultParseWidth: "any",
    }),
    quarter: kr({
      matchPatterns: zy,
      defaultMatchWidth: "wide",
      parsePatterns: Fy,
      defaultParseWidth: "any",
      valueCallback: function (t) {
        return t + 1;
      },
    }),
    month: kr({
      matchPatterns: Ay,
      defaultMatchWidth: "wide",
      parsePatterns: Uy,
      defaultParseWidth: "any",
    }),
    day: kr({
      matchPatterns: Iy,
      defaultMatchWidth: "wide",
      parsePatterns: by,
      defaultParseWidth: "any",
    }),
    dayPeriod: kr({
      matchPatterns: jy,
      defaultMatchWidth: "any",
      parsePatterns: By,
      defaultParseWidth: "any",
    }),
  };
const Wy = $y;
var Hy = {
  code: "en-US",
  formatDistance: uy,
  formatLong: hy,
  formatRelative: gy,
  localize: Oy,
  match: Wy,
  options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
};
const Vy = Hy;
var qy = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Qy = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Yy = /^'([^]*?)'?$/,
  Ky = /''/g,
  Gy = /[a-zA-Z]/;
function Zc(e, t, n) {
  var r, o, l, i, a, s, u, d, c, f, g, v, w, x, p, h, y, S;
  ye(2, arguments);
  var _ = String(t),
    R = Si(),
    M =
      (r =
        (o = n == null ? void 0 : n.locale) !== null && o !== void 0
          ? o
          : R.locale) !== null && r !== void 0
        ? r
        : Vy,
    P = kn(
      (l =
        (i =
          (a =
            (s = n == null ? void 0 : n.firstWeekContainsDate) !== null &&
            s !== void 0
              ? s
              : n == null ||
                (u = n.locale) === null ||
                u === void 0 ||
                (d = u.options) === null ||
                d === void 0
              ? void 0
              : d.firstWeekContainsDate) !== null && a !== void 0
            ? a
            : R.firstWeekContainsDate) !== null && i !== void 0
          ? i
          : (c = R.locale) === null ||
            c === void 0 ||
            (f = c.options) === null ||
            f === void 0
          ? void 0
          : f.firstWeekContainsDate) !== null && l !== void 0
        ? l
        : 1
    );
  if (!(P >= 1 && P <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var $ = kn(
    (g =
      (v =
        (w =
          (x = n == null ? void 0 : n.weekStartsOn) !== null && x !== void 0
            ? x
            : n == null ||
              (p = n.locale) === null ||
              p === void 0 ||
              (h = p.options) === null ||
              h === void 0
            ? void 0
            : h.weekStartsOn) !== null && w !== void 0
          ? w
          : R.weekStartsOn) !== null && v !== void 0
        ? v
        : (y = R.locale) === null ||
          y === void 0 ||
          (S = y.options) === null ||
          S === void 0
        ? void 0
        : S.weekStartsOn) !== null && g !== void 0
      ? g
      : 0
  );
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!M.localize)
    throw new RangeError("locale must contain localize property");
  if (!M.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var I = st(e);
  if (!Bg(I)) throw new RangeError("Invalid time value");
  var L = ss(I),
    W = $g(I, L),
    ae = {
      firstWeekContainsDate: P,
      weekStartsOn: $,
      locale: M,
      _originalDate: I,
    },
    A = _.match(Qy)
      .map(function (D) {
        var b = D[0];
        if (b === "p" || b === "P") {
          var E = ny[b];
          return E(D, M.formatLong);
        }
        return D;
      })
      .join("")
      .match(qy)
      .map(function (D) {
        if (D === "''") return "'";
        var b = D[0];
        if (b === "'") return Xy(D);
        var E = Zg[b];
        if (E)
          return (
            !(n != null && n.useAdditionalWeekYearTokens) &&
              iy(D) &&
              Jc(D, t, String(e)),
            !(n != null && n.useAdditionalDayOfYearTokens) &&
              ly(D) &&
              Jc(D, t, String(e)),
            E(W, D, M.localize, ae)
          );
        if (b.match(Gy))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" +
              b +
              "`"
          );
        return D;
      })
      .join("");
  return A;
}
function Xy(e) {
  var t = e.match(Yy);
  return t ? t[1].replace(Ky, "'") : e;
}
const Jy = ({ car: e }) => {
    const [t, n] = C.useState(""),
      [r, o] = C.useState(""),
      [l, i] = C.useState(""),
      [a, s] = C.useState(""),
      { currentUser: u } = mi(),
      d = Rt(),
      c = () => {
        Z.success(
          "Enhorabuena, has reservado este coche con éxito. Te estamos redirigiendo a la página de tus alquileres",
          {
            position: "top-right",
            autoClose: 6e3,
            hideProgressBar: !1,
            closeOnClick: !0,
            pauseOnHover: !0,
            draggable: !0,
            progress: void 0,
            theme: "colored",
          }
        );
      };
    function f() {
      setTimeout(g, 6e3);
    }
    const g = () => {
      d("/acc/rentals");
    };
    C.useEffect(() => {
      u && i(u.name);
    }, [u]);
    let v = 0;
    return (
      t && r && (v = nh(new Date(r), new Date(t))),
      k("form", {
        className: "bg-white mt-2 shadow p-3 rounded-2xl",
        onSubmit: async (x) => {
          x.preventDefault(),
            await xe.post("/rentals", {
              checkIn: t,
              checkOut: r,
              name: l,
              phone: a,
              car: e._id,
              price: v * e.price,
            }),
            c(),
            f();
        },
        children: [
          v > 0 &&
            k("div", {
              className: "sm:text-sm text-center md:text-xl",
              children: [
                "Este coche tiene un coste de ",
                e == null ? void 0 : e.price,
                "€ por día. Has elegido un total de ",
                v,
                " día(s), precio final:",
                v > 0 &&
                  k("span", {
                    className: "font-bold",
                    children: [" ", v * e.price, " €"],
                  }),
              ],
            }),
          k("div", {
            className: "border rounded-2xl mt-2",
            children: [
              k("div", {
                className: "py-3 px-4",
                children: [
                  m("label", { htmlFor: "check-in", children: "Desde" }),
                  m("input", {
                    type: "date",
                    id: "check-in",
                    value: t,
                    onChange: (x) => n(x.target.value),
                    required: !0,
                  }),
                  " ",
                  m("label", { htmlFor: "check-out", children: "Hasta" }),
                  m("input", {
                    type: "date",
                    id: "check-out",
                    value: r,
                    onChange: (x) => o(x.target.value),
                    required: !0,
                  }),
                  m("label", { htmlFor: "name", children: "Tu nombre" }),
                  m("input", {
                    type: "text",
                    id: "name",
                    value: l,
                    onChange: (x) => i(x.target.value),
                    required: !0,
                  }),
                  m("label", {
                    htmlFor: "phone",
                    children: "Tu número de teléfono",
                  }),
                  m("input", {
                    type: "tel",
                    id: "phone",
                    value: a,
                    onChange: (x) => s(x.target.value),
                    required: !0,
                  }),
                ],
              }),
              " ",
              m(Al, {}),
            ],
          }),
          m("button", {
            className: "primary mt-2 font-bold",
            children: "Alquilar este coche",
          }),
          " ",
        ],
      })
    );
  },
  Zy = ({ children: e, className: t = null }) => (
    t || (t = "my-3 block"),
    (t += " flex gap-1 font-semibold underline"),
    k("a", {
      className: t,
      target: "_blank",
      href: "https://maps.google.com/?q=" + e,
      children: [
        k("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "currentColor",
          className: "w-6 h-6",
          children: [
            m("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z",
            }),
            m("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
            }),
          ],
        }),
        e,
      ],
    })
  ),
  e2 = ({ car: e }) => {
    var r, o, l;
    const [t, n] = C.useState(!1);
    return t
      ? m("div", {
          className: "absolute inset-0 bg-gray-300 text-white min-h-screen",
          children: k("div", {
            className: "bg-gray-400 p-8 grid gap-4",
            children: [
              k("div", {
                children: [
                  k("h2", {
                    className: "text-3xl mr-48",
                    children: [
                      "Estás viendo fotos del ",
                      e.brand,
                      " ",
                      e.model,
                    ],
                  }),
                  k("button", {
                    onClick: () => n(!1),
                    className:
                      "fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black",
                    children: [
                      m("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        className: "w-6 h-6",
                        children: m("path", {
                          fillRule: "evenodd",
                          d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
                          clipRule: "evenodd",
                        }),
                      }),
                      "Cerrar",
                    ],
                  }),
                ],
              }),
              ((r = e == null ? void 0 : e.photos) == null
                ? void 0
                : r.length) > 0 &&
                ((o = e == null ? void 0 : e.photos) == null
                  ? void 0
                  : o.map((i) =>
                      m("div", {
                        children: m(as, {
                          src: i,
                          alt: "",
                          className: "rounded-xl",
                        }),
                      })
                    )),
            ],
          }),
        })
      : k("div", {
          className: "relative",
          children: [
            m("div", {
              children:
                (e == null ? void 0 : e.photos[0]) &&
                m("div", {
                  children: m(as, {
                    onClick: () => n(!0),
                    className:
                      "aspect-square cursor-pointer object-cover rounded-3xl",
                    src:
                      (l = e == null ? void 0 : e.photos) == null
                        ? void 0
                        : l[0],
                    alt: "",
                  }),
                }),
            }),
            k("button", {
              onClick: () => n(!0),
              className:
                "flex gap-1 absolute bottom-2 left-2 py-2 px-4 bg-white rounded-2xl shadow-md shadow-gray-500",
              children: [
                m("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  className: "w-6 h-6",
                  children: m("path", {
                    fillRule: "evenodd",
                    d: "M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z",
                    clipRule: "evenodd",
                  }),
                }),
                "Ver más",
              ],
            }),
          ],
        });
  },
  t2 = () => {
    const { id: e } = au(),
      [t, n] = C.useState(null),
      [r, o] = C.useState(!1);
    return (
      C.useEffect(() => {
        e &&
          (o(!0),
          xe
            .get(`/cars/${e}`)
            .then((l) => n(l.data))
            .finally(() => o(!1)));
      }, [e]),
      k("div", {
        className:
          "lg:grid gap-4 grid-cols-2 mt-6 bg-slate-100 -mx-6 px-8 py-12",
        children: [
          r &&
            m("div", {
              className: "flex justify-center my-10",
              children: m(vi, {}),
            }),
          k("div", {
            className: "lg:ml-8",
            children: [
              " ",
              k("h1", {
                className: "text-2xl mb-2",
                children: [
                  t == null ? void 0 : t.brand,
                  " ",
                  t == null ? void 0 : t.model,
                ],
              }),
              m(Zy, { children: t == null ? void 0 : t.location }),
              m(e2, { car: t }),
            ],
          }),
          k("div", {
            className: "mt-6 grid lg:mt-16",
            children: [
              k("div", {
                className: "xl:grid grid-cols-2 bg-gray-200 p-4 rounded-2xl",
                children: [
                  k("div", {
                    className: "my-2 flex font-bold gap-2",
                    children: [
                      m("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: "1.5",
                        stroke: "currentColor",
                        className: "w-6 h-6",
                        children: m("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                        }),
                      }),
                      t == null ? void 0 : t.price,
                      "€/día",
                    ],
                  }),
                  k("div", {
                    className: "my-2 flex font-bold gap-2",
                    children: [
                      m("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        className: "w-6 h-6",
                        children: m("path", {
                          fill: "#191919",
                          fillRule: "evenodd",
                          d: "M5.94 19.242L4 18.758c.037-.148.107-.39.209-.698.17-.51.375-1.022.617-1.506C5.604 14.995 6.6 14 7.97 14h8c1.37 0 2.366.995 3.145 2.553.242.484.446.995.616 1.506.103.307.172.55.21.698L18 19.242a8.269 8.269 0 00-.166-.55 9.593 9.593 0 00-.508-1.245C16.854 16.505 16.35 16 15.97 16h-8c-.38 0-.884.505-1.355 1.447a9.592 9.592 0 00-.509 1.244c-.085.255-.14.45-.166.552zM16.47 8.5c0 2.536-2.012 4.5-4.54 4.5-2.52 0-4.46-1.956-4.46-4.5 0-2.57 1.883-4.5 4.46-4.5 2.585 0 4.54 1.94 4.54 4.5zm-2 0c0-1.452-1.056-2.5-2.54-2.5-1.46 0-2.46 1.024-2.46 2.5 0 1.443 1.048 2.5 2.46 2.5 1.434 0 2.54-1.08 2.54-2.5z",
                          clipRule: "evenodd",
                        }),
                      }),
                      t == null ? void 0 : t.seats,
                    ],
                  }),
                  k("div", {
                    className: "my-2 flex font-bold gap-2",
                    children: [
                      m("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        className: "w-6 h-6",
                        children: m("path", {
                          fill: "#191919",
                          fillRule: "evenodd",
                          d: "M4 12v3.062c2.929.364 5.4 2.303 5.906 4.938H20v-8H4zm.618-2H20V4H7.618l-3 6zM2 10.764L6.382 2H22v20H8v-1c0-2.218-2.29-4-5-4H2v-6.236zM7 15v-2h3v2H7z",
                          clipRule: "evenodd",
                        }),
                      }),
                      t == null ? void 0 : t.doors,
                    ],
                  }),
                  k("div", {
                    className: "my-2 flex font-bold gap-2",
                    children: [
                      m("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        className: "w-6 h-6",
                        children: m("path", {
                          fill: "#191919",
                          fillRule: "evenodd",
                          d: "M11 13H8v5H6V6h2v5h3V6h2v5h3V6h2v7h-5v5h-2v-5zM8 4H6V2h2v2zm5 0h-2V2h2v2zm5 0h-2V2h2v2zm-5 18h-2v-2h2v2zm-5 0H6v-2h2v2z",
                          clipRule: "evenodd",
                        }),
                      }),
                      "Transmisión ",
                      t == null ? void 0 : t.transmission,
                    ],
                  }),
                  k("div", {
                    className: "my-2 flex font-bold gap-2",
                    children: [
                      m("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        className: "w-6 h-6",
                        children: m("path", {
                          fill: "#191919",
                          fillRule: "evenodd",
                          d: "M8.744 15.222l-.958 3.58-1.932-.518.458-1.71-2.34 1.3L3 16.126l2.09-1.16-1.363-.366.517-1.932 3.36.9L10.425 12l-2.822-1.568-3.359.9L3.728 9.4l1.361-.365L3 7.875l.971-1.75 2.342 1.302-.458-1.71 1.932-.518.959 3.58 2.74 1.522V7.07L8.945 4.53l1.414-1.414 1.127 1.126V2h2v2.243l1.128-1.128 1.414 1.415-2.542 2.541v3.23l2.74-1.523.96-3.58 1.932.518-.458 1.71 2.34-1.3.971 1.748-2.089 1.16 1.362.366-.517 1.931-3.359-.9-2.823 1.57 2.825 1.569 3.357-.9.518 1.931-1.361.365 2.087 1.16-.97 1.748-2.342-1.3.459 1.712-1.932.517-.96-3.58-2.74-1.523v3.229l2.54 2.541-1.413 1.414-1.127-1.127V22h-2v-2.243l-1.128 1.127-1.414-1.414 2.542-2.541v-3.23l-2.742 1.523z",
                          clipRule: "evenodd",
                        }),
                      }),
                      t == null ? void 0 : t.aircon,
                    ],
                  }),
                  k("div", {
                    className: "my-2 flex font-bold gap-2",
                    children: [
                      m("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        className: "w-6 h-6",
                        children: m("path", {
                          fill: "#191919",
                          fillRule: "evenodd",
                          d: "M16 8H8v11h8V8zm2 0v11h2V8h-2zM6 8H4v11h2V8zm2-2V3h8v3h6v15H2V6h6zm2 0h4V5h-4v1z",
                          clipRule: "evenodd",
                        }),
                      }),
                      t == null ? void 0 : t.trunk,
                    ],
                  }),
                  k("div", {
                    className: "my-2 flex font-bold gap-2",
                    children: [
                      k("svg", {
                        className: "w-6 h-6",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          m("path", {
                            d: "M4 5C4 4.44772 4.44772 4 5 4H12C12.5523 4 13 4.44772 13 5V21H4V5Z",
                            stroke: "#000000",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                          }),
                          m("path", {
                            d: "M13 11.5H18V19C18 20.1046 18.8954 21 20 21V21C21.1046 21 22 20.1046 22 19V9M17.5 2L20.5 4.66667M20.5 4.66667L22 6V9M20.5 4.66667V9H22",
                            stroke: "#000000",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                          }),
                          m("path", {
                            d: "M15 21L2 21",
                            stroke: "#000000",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                          }),
                          m("path", {
                            d: "M10 8L7 8",
                            stroke: "#000000",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                          }),
                        ],
                      }),
                      t == null ? void 0 : t.consumption,
                      " consumo",
                    ],
                  }),
                  k("div", {
                    className: "my-2 flex font-bold gap-2",
                    children: [
                      k("svg", {
                        className: "w-12 md:w-6",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          m("path", {
                            d: "M12 18.5C12.5523 18.5 13 18.0523 13 17.5L13 10.5C13 9.94772 12.5523 9.5 12 9.5C11.4477 9.5 11 9.94772 11 10.5L11 17.5C11 18.0523 11.4477 18.5 12 18.5Z",
                            fill: "#000000",
                          }),
                          m("path", {
                            d: "M12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z",
                            fill: "#000000",
                          }),
                          m("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z",
                            fill: "#000000",
                          }),
                        ],
                      }),
                      t == null ? void 0 : t.description,
                    ],
                  }),
                  " ",
                ],
              }),
              " ",
              m(Jy, { car: t }),
            ],
          }),
          " ",
        ],
      })
    );
  },
  n2 = ({ car: e, index: t = 0, className: n = null }) => {
    var r;
    return (r = e.photos) != null && r.length
      ? (n || (n = "object-cover"),
        m(as, { className: n, src: e.photos[t], alt: "" }))
      : "";
  };
var jl = {},
  r2 = {
    get exports() {
      return jl;
    },
    set exports(e) {
      jl = e;
    },
  },
  Nn = {},
  Bl = {},
  o2 = {
    get exports() {
      return Bl;
    },
    set exports(e) {
      Bl = e;
    },
  },
  l2 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  i2 = l2,
  a2 = i2;
function ih() {}
function ah() {}
ah.resetWarningCache = ih;
var s2 = function () {
  function e(r, o, l, i, a, s) {
    if (s !== a2) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: ah,
    resetWarningCache: ih,
  };
  return (n.PropTypes = n), n;
};
o2.exports = s2();
var $l = {},
  u2 = {
    get exports() {
      return $l;
    },
    set exports(e) {
      $l = e;
    },
  },
  ut = {},
  uo = {},
  c2 = {
    get exports() {
      return uo;
    },
    set exports(e) {
      uo = e;
    },
  };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = d);
  /*!
   * Adapted from jQuery UI core
   *
   * http://jqueryui.com
   *
   * Copyright 2014 jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/category/ui-core/
   */ var n = "none",
    r = "contents",
    o = /input|select|textarea|button|object|iframe/;
  function l(c, f) {
    return (
      f.getPropertyValue("overflow") !== "visible" ||
      (c.scrollWidth <= 0 && c.scrollHeight <= 0)
    );
  }
  function i(c) {
    var f = c.offsetWidth <= 0 && c.offsetHeight <= 0;
    if (f && !c.innerHTML) return !0;
    try {
      var g = window.getComputedStyle(c),
        v = g.getPropertyValue("display");
      return f ? v !== r && l(c, g) : v === n;
    } catch {
      return console.warn("Failed to inspect element style"), !1;
    }
  }
  function a(c) {
    for (
      var f = c, g = c.getRootNode && c.getRootNode();
      f && f !== document.body;

    ) {
      if ((g && f === g && (f = g.host.parentNode), i(f))) return !1;
      f = f.parentNode;
    }
    return !0;
  }
  function s(c, f) {
    var g = c.nodeName.toLowerCase(),
      v = (o.test(g) && !c.disabled) || (g === "a" && c.href) || f;
    return v && a(c);
  }
  function u(c) {
    var f = c.getAttribute("tabindex");
    f === null && (f = void 0);
    var g = isNaN(f);
    return (g || f >= 0) && s(c, !g);
  }
  function d(c) {
    var f = [].slice.call(c.querySelectorAll("*"), 0).reduce(function (g, v) {
      return g.concat(v.shadowRoot ? d(v.shadowRoot) : [v]);
    }, []);
    return f.filter(u);
  }
  e.exports = t.default;
})(c2, uo);
Object.defineProperty(ut, "__esModule", { value: !0 });
ut.resetState = h2;
ut.log = m2;
ut.handleBlur = co;
ut.handleFocus = fo;
ut.markForFocusLater = v2;
ut.returnFocus = g2;
ut.popWithoutFocus = y2;
ut.setupScopedFocus = w2;
ut.teardownScopedFocus = S2;
var d2 = uo,
  f2 = p2(d2);
function p2(e) {
  return e && e.__esModule ? e : { default: e };
}
var or = [],
  Wn = null,
  us = !1;
function h2() {
  or = [];
}
function m2() {}
function co() {
  us = !0;
}
function fo() {
  if (us) {
    if (((us = !1), !Wn)) return;
    setTimeout(function () {
      if (!Wn.contains(document.activeElement)) {
        var e = (0, f2.default)(Wn)[0] || Wn;
        e.focus();
      }
    }, 0);
  }
}
function v2() {
  or.push(document.activeElement);
}
function g2() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
    t = null;
  try {
    or.length !== 0 && ((t = or.pop()), t.focus({ preventScroll: e }));
    return;
  } catch {
    console.warn(
      [
        "You tried to return focus to",
        t,
        "but it is not in the DOM anymore",
      ].join(" ")
    );
  }
}
function y2() {
  or.length > 0 && or.pop();
}
function w2(e) {
  (Wn = e),
    window.addEventListener
      ? (window.addEventListener("blur", co, !1),
        document.addEventListener("focus", fo, !0))
      : (window.attachEvent("onBlur", co), document.attachEvent("onFocus", fo));
}
function S2() {
  (Wn = null),
    window.addEventListener
      ? (window.removeEventListener("blur", co),
        document.removeEventListener("focus", fo))
      : (window.detachEvent("onBlur", co), document.detachEvent("onFocus", fo));
}
var Wl = {},
  C2 = {
    get exports() {
      return Wl;
    },
    set exports(e) {
      Wl = e;
    },
  };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i);
  var n = uo,
    r = o(n);
  function o(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function l() {
    var a =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    return a.activeElement.shadowRoot
      ? l(a.activeElement.shadowRoot)
      : a.activeElement;
  }
  function i(a, s) {
    var u = (0, r.default)(a);
    if (!u.length) {
      s.preventDefault();
      return;
    }
    var d = void 0,
      c = s.shiftKey,
      f = u[0],
      g = u[u.length - 1],
      v = l();
    if (a === v) {
      if (!c) return;
      d = g;
    }
    if ((g === v && !c && (d = f), f === v && c && (d = g), d)) {
      s.preventDefault(), d.focus();
      return;
    }
    var w = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),
      x =
        w != null &&
        w[1] != "Chrome" &&
        /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
    if (x) {
      var p = u.indexOf(v);
      if ((p > -1 && (p += c ? -1 : 1), (d = u[p]), typeof d > "u")) {
        s.preventDefault(), (d = c ? g : f), d.focus();
        return;
      }
      s.preventDefault(), d.focus();
    }
  }
  e.exports = t.default;
})(C2, Wl);
var ct = {},
  E2 = function () {},
  x2 = E2,
  it = {},
  cs = {},
  k2 = {
    get exports() {
      return cs;
    },
    set exports(e) {
      cs = e;
    },
  };
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/ (function (e) {
  (function () {
    var t = !!(
        typeof window < "u" &&
        window.document &&
        window.document.createElement
      ),
      n = {
        canUseDOM: t,
        canUseWorkers: typeof Worker < "u",
        canUseEventListeners:
          t && !!(window.addEventListener || window.attachEvent),
        canUseViewport: t && !!window.screen,
      };
    e.exports ? (e.exports = n) : (window.ExecutionEnvironment = n);
  })();
})(k2);
Object.defineProperty(it, "__esModule", { value: !0 });
it.canUseDOM = it.SafeNodeList = it.SafeHTMLCollection = void 0;
var N2 = cs,
  O2 = _2(N2);
function _2(e) {
  return e && e.__esModule ? e : { default: e };
}
var Ci = O2.default,
  T2 = Ci.canUseDOM ? window.HTMLElement : {};
it.SafeHTMLCollection = Ci.canUseDOM ? window.HTMLCollection : {};
it.SafeNodeList = Ci.canUseDOM ? window.NodeList : {};
it.canUseDOM = Ci.canUseDOM;
it.default = T2;
Object.defineProperty(ct, "__esModule", { value: !0 });
ct.resetState = D2;
ct.log = z2;
ct.assertNodeList = sh;
ct.setElement = F2;
ct.validateElement = mu;
ct.hide = A2;
ct.show = U2;
ct.documentNotReadyOrSSRTesting = I2;
var P2 = x2,
  R2 = L2(P2),
  M2 = it;
function L2(e) {
  return e && e.__esModule ? e : { default: e };
}
var Ve = null;
function D2() {
  Ve &&
    (Ve.removeAttribute
      ? Ve.removeAttribute("aria-hidden")
      : Ve.length != null
      ? Ve.forEach(function (e) {
          return e.removeAttribute("aria-hidden");
        })
      : document.querySelectorAll(Ve).forEach(function (e) {
          return e.removeAttribute("aria-hidden");
        })),
    (Ve = null);
}
function z2() {}
function sh(e, t) {
  if (!e || !e.length)
    throw new Error(
      "react-modal: No elements were found for selector " + t + "."
    );
}
function F2(e) {
  var t = e;
  if (typeof t == "string" && M2.canUseDOM) {
    var n = document.querySelectorAll(t);
    sh(n, t), (t = n);
  }
  return (Ve = t || Ve), Ve;
}
function mu(e) {
  var t = e || Ve;
  return t
    ? Array.isArray(t) || t instanceof HTMLCollection || t instanceof NodeList
      ? t
      : [t]
    : ((0, R2.default)(
        !1,
        [
          "react-modal: App element is not defined.",
          "Please use `Modal.setAppElement(el)` or set `appElement={el}`.",
          "This is needed so screen readers don't see main content",
          "when modal is opened. It is not recommended, but you can opt-out",
          "by setting `ariaHideApp={false}`.",
        ].join(" ")
      ),
      []);
}
function A2(e) {
  var t = !0,
    n = !1,
    r = void 0;
  try {
    for (
      var o = mu(e)[Symbol.iterator](), l;
      !(t = (l = o.next()).done);
      t = !0
    ) {
      var i = l.value;
      i.setAttribute("aria-hidden", "true");
    }
  } catch (a) {
    (n = !0), (r = a);
  } finally {
    try {
      !t && o.return && o.return();
    } finally {
      if (n) throw r;
    }
  }
}
function U2(e) {
  var t = !0,
    n = !1,
    r = void 0;
  try {
    for (
      var o = mu(e)[Symbol.iterator](), l;
      !(t = (l = o.next()).done);
      t = !0
    ) {
      var i = l.value;
      i.removeAttribute("aria-hidden");
    }
  } catch (a) {
    (n = !0), (r = a);
  } finally {
    try {
      !t && o.return && o.return();
    } finally {
      if (n) throw r;
    }
  }
}
function I2() {
  Ve = null;
}
var dr = {};
Object.defineProperty(dr, "__esModule", { value: !0 });
dr.resetState = b2;
dr.log = j2;
var Br = {},
  $r = {};
function ed(e, t) {
  e.classList.remove(t);
}
function b2() {
  var e = document.getElementsByTagName("html")[0];
  for (var t in Br) ed(e, Br[t]);
  var n = document.body;
  for (var r in $r) ed(n, $r[r]);
  (Br = {}), ($r = {});
}
function j2() {}
var B2 = function (t, n) {
    return t[n] || (t[n] = 0), (t[n] += 1), n;
  },
  $2 = function (t, n) {
    return t[n] && (t[n] -= 1), n;
  },
  W2 = function (t, n, r) {
    r.forEach(function (o) {
      B2(n, o), t.add(o);
    });
  },
  H2 = function (t, n, r) {
    r.forEach(function (o) {
      $2(n, o), n[o] === 0 && t.remove(o);
    });
  };
dr.add = function (t, n) {
  return W2(
    t.classList,
    t.nodeName.toLowerCase() == "html" ? Br : $r,
    n.split(" ")
  );
};
dr.remove = function (t, n) {
  return H2(
    t.classList,
    t.nodeName.toLowerCase() == "html" ? Br : $r,
    n.split(" ")
  );
};
var fr = {};
Object.defineProperty(fr, "__esModule", { value: !0 });
fr.log = q2;
fr.resetState = Q2;
function V2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var uh = function e() {
    var t = this;
    V2(this, e),
      (this.register = function (n) {
        t.openInstances.indexOf(n) === -1 &&
          (t.openInstances.push(n), t.emit("register"));
      }),
      (this.deregister = function (n) {
        var r = t.openInstances.indexOf(n);
        r !== -1 && (t.openInstances.splice(r, 1), t.emit("deregister"));
      }),
      (this.subscribe = function (n) {
        t.subscribers.push(n);
      }),
      (this.emit = function (n) {
        t.subscribers.forEach(function (r) {
          return r(n, t.openInstances.slice());
        });
      }),
      (this.openInstances = []),
      (this.subscribers = []);
  },
  Hl = new uh();
function q2() {
  console.log("portalOpenInstances ----------"),
    console.log(Hl.openInstances.length),
    Hl.openInstances.forEach(function (e) {
      return console.log(e);
    }),
    console.log("end portalOpenInstances ----------");
}
function Q2() {
  Hl = new uh();
}
fr.default = Hl;
var vu = {};
Object.defineProperty(vu, "__esModule", { value: !0 });
vu.resetState = X2;
vu.log = J2;
var Y2 = fr,
  K2 = G2(Y2);
function G2(e) {
  return e && e.__esModule ? e : { default: e };
}
var Ce = void 0,
  tt = void 0,
  gn = [];
function X2() {
  for (var e = [Ce, tt], t = 0; t < e.length; t++) {
    var n = e[t];
    n && n.parentNode && n.parentNode.removeChild(n);
  }
  (Ce = tt = null), (gn = []);
}
function J2() {
  console.log("bodyTrap ----------"), console.log(gn.length);
  for (var e = [Ce, tt], t = 0; t < e.length; t++) {
    var n = e[t],
      r = n || {};
    console.log(r.nodeName, r.className, r.id);
  }
  console.log("edn bodyTrap ----------");
}
function td() {
  gn.length !== 0 && gn[gn.length - 1].focusContent();
}
function Z2(e, t) {
  !Ce &&
    !tt &&
    ((Ce = document.createElement("div")),
    Ce.setAttribute("data-react-modal-body-trap", ""),
    (Ce.style.position = "absolute"),
    (Ce.style.opacity = "0"),
    Ce.setAttribute("tabindex", "0"),
    Ce.addEventListener("focus", td),
    (tt = Ce.cloneNode()),
    tt.addEventListener("focus", td)),
    (gn = t),
    gn.length > 0
      ? (document.body.firstChild !== Ce &&
          document.body.insertBefore(Ce, document.body.firstChild),
        document.body.lastChild !== tt && document.body.appendChild(tt))
      : (Ce.parentElement && Ce.parentElement.removeChild(Ce),
        tt.parentElement && tt.parentElement.removeChild(tt));
}
K2.default.subscribe(Z2);
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n =
      Object.assign ||
      function (A) {
        for (var D = 1; D < arguments.length; D++) {
          var b = arguments[D];
          for (var E in b)
            Object.prototype.hasOwnProperty.call(b, E) && (A[E] = b[E]);
        }
        return A;
      },
    r =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (A) {
            return typeof A;
          }
        : function (A) {
            return A &&
              typeof Symbol == "function" &&
              A.constructor === Symbol &&
              A !== Symbol.prototype
              ? "symbol"
              : typeof A;
          },
    o = (function () {
      function A(D, b) {
        for (var E = 0; E < b.length; E++) {
          var N = b[E];
          (N.enumerable = N.enumerable || !1),
            (N.configurable = !0),
            "value" in N && (N.writable = !0),
            Object.defineProperty(D, N.key, N);
        }
      }
      return function (D, b, E) {
        return b && A(D.prototype, b), E && A(D, E), D;
      };
    })(),
    l = C,
    i = Bl,
    a = _(i),
    s = ut,
    u = S(s),
    d = Wl,
    c = _(d),
    f = ct,
    g = S(f),
    v = dr,
    w = S(v),
    x = it,
    p = _(x),
    h = fr,
    y = _(h);
  function S(A) {
    if (A && A.__esModule) return A;
    var D = {};
    if (A != null)
      for (var b in A)
        Object.prototype.hasOwnProperty.call(A, b) && (D[b] = A[b]);
    return (D.default = A), D;
  }
  function _(A) {
    return A && A.__esModule ? A : { default: A };
  }
  function R(A, D) {
    if (!(A instanceof D))
      throw new TypeError("Cannot call a class as a function");
  }
  function M(A, D) {
    if (!A)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return D && (typeof D == "object" || typeof D == "function") ? D : A;
  }
  function P(A, D) {
    if (typeof D != "function" && D !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof D
      );
    (A.prototype = Object.create(D && D.prototype, {
      constructor: { value: A, enumerable: !1, writable: !0, configurable: !0 },
    })),
      D &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(A, D)
          : (A.__proto__ = D));
  }
  var $ = { overlay: "ReactModal__Overlay", content: "ReactModal__Content" },
    I = function (D) {
      return D.code === "Tab" || D.keyCode === 9;
    },
    L = function (D) {
      return D.code === "Escape" || D.keyCode === 27;
    },
    W = 0,
    ae = (function (A) {
      P(D, A);
      function D(b) {
        R(this, D);
        var E = M(
          this,
          (D.__proto__ || Object.getPrototypeOf(D)).call(this, b)
        );
        return (
          (E.setOverlayRef = function (N) {
            (E.overlay = N), E.props.overlayRef && E.props.overlayRef(N);
          }),
          (E.setContentRef = function (N) {
            (E.content = N), E.props.contentRef && E.props.contentRef(N);
          }),
          (E.afterClose = function () {
            var N = E.props,
              F = N.appElement,
              U = N.ariaHideApp,
              B = N.htmlOpenClassName,
              G = N.bodyOpenClassName,
              Be = N.parentSelector,
              $e = (Be && Be().ownerDocument) || document;
            G && w.remove($e.body, G),
              B && w.remove($e.getElementsByTagName("html")[0], B),
              U && W > 0 && ((W -= 1), W === 0 && g.show(F)),
              E.props.shouldFocusAfterRender &&
                (E.props.shouldReturnFocusAfterClose
                  ? (u.returnFocus(E.props.preventScroll),
                    u.teardownScopedFocus())
                  : u.popWithoutFocus()),
              E.props.onAfterClose && E.props.onAfterClose(),
              y.default.deregister(E);
          }),
          (E.open = function () {
            E.beforeOpen(),
              E.state.afterOpen && E.state.beforeClose
                ? (clearTimeout(E.closeTimer), E.setState({ beforeClose: !1 }))
                : (E.props.shouldFocusAfterRender &&
                    (u.setupScopedFocus(E.node), u.markForFocusLater()),
                  E.setState({ isOpen: !0 }, function () {
                    E.openAnimationFrame = requestAnimationFrame(function () {
                      E.setState({ afterOpen: !0 }),
                        E.props.isOpen &&
                          E.props.onAfterOpen &&
                          E.props.onAfterOpen({
                            overlayEl: E.overlay,
                            contentEl: E.content,
                          });
                    });
                  }));
          }),
          (E.close = function () {
            E.props.closeTimeoutMS > 0
              ? E.closeWithTimeout()
              : E.closeWithoutTimeout();
          }),
          (E.focusContent = function () {
            return (
              E.content &&
              !E.contentHasFocus() &&
              E.content.focus({ preventScroll: !0 })
            );
          }),
          (E.closeWithTimeout = function () {
            var N = Date.now() + E.props.closeTimeoutMS;
            E.setState({ beforeClose: !0, closesAt: N }, function () {
              E.closeTimer = setTimeout(
                E.closeWithoutTimeout,
                E.state.closesAt - Date.now()
              );
            });
          }),
          (E.closeWithoutTimeout = function () {
            E.setState(
              { beforeClose: !1, isOpen: !1, afterOpen: !1, closesAt: null },
              E.afterClose
            );
          }),
          (E.handleKeyDown = function (N) {
            I(N) && (0, c.default)(E.content, N),
              E.props.shouldCloseOnEsc &&
                L(N) &&
                (N.stopPropagation(), E.requestClose(N));
          }),
          (E.handleOverlayOnClick = function (N) {
            E.shouldClose === null && (E.shouldClose = !0),
              E.shouldClose &&
                E.props.shouldCloseOnOverlayClick &&
                (E.ownerHandlesClose() ? E.requestClose(N) : E.focusContent()),
              (E.shouldClose = null);
          }),
          (E.handleContentOnMouseUp = function () {
            E.shouldClose = !1;
          }),
          (E.handleOverlayOnMouseDown = function (N) {
            !E.props.shouldCloseOnOverlayClick &&
              N.target == E.overlay &&
              N.preventDefault();
          }),
          (E.handleContentOnClick = function () {
            E.shouldClose = !1;
          }),
          (E.handleContentOnMouseDown = function () {
            E.shouldClose = !1;
          }),
          (E.requestClose = function (N) {
            return E.ownerHandlesClose() && E.props.onRequestClose(N);
          }),
          (E.ownerHandlesClose = function () {
            return E.props.onRequestClose;
          }),
          (E.shouldBeClosed = function () {
            return !E.state.isOpen && !E.state.beforeClose;
          }),
          (E.contentHasFocus = function () {
            return (
              document.activeElement === E.content ||
              E.content.contains(document.activeElement)
            );
          }),
          (E.buildClassName = function (N, F) {
            var U =
                (typeof F > "u" ? "undefined" : r(F)) === "object"
                  ? F
                  : {
                      base: $[N],
                      afterOpen: $[N] + "--after-open",
                      beforeClose: $[N] + "--before-close",
                    },
              B = U.base;
            return (
              E.state.afterOpen && (B = B + " " + U.afterOpen),
              E.state.beforeClose && (B = B + " " + U.beforeClose),
              typeof F == "string" && F ? B + " " + F : B
            );
          }),
          (E.attributesFromObject = function (N, F) {
            return Object.keys(F).reduce(function (U, B) {
              return (U[N + "-" + B] = F[B]), U;
            }, {});
          }),
          (E.state = { afterOpen: !1, beforeClose: !1 }),
          (E.shouldClose = null),
          (E.moveFromContentToOverlay = null),
          E
        );
      }
      return (
        o(D, [
          {
            key: "componentDidMount",
            value: function () {
              this.props.isOpen && this.open();
            },
          },
          {
            key: "componentDidUpdate",
            value: function (E, N) {
              this.props.isOpen && !E.isOpen
                ? this.open()
                : !this.props.isOpen && E.isOpen && this.close(),
                this.props.shouldFocusAfterRender &&
                  this.state.isOpen &&
                  !N.isOpen &&
                  this.focusContent();
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.state.isOpen && this.afterClose(),
                clearTimeout(this.closeTimer),
                cancelAnimationFrame(this.openAnimationFrame);
            },
          },
          {
            key: "beforeOpen",
            value: function () {
              var E = this.props,
                N = E.appElement,
                F = E.ariaHideApp,
                U = E.htmlOpenClassName,
                B = E.bodyOpenClassName,
                G = E.parentSelector,
                Be = (G && G().ownerDocument) || document;
              B && w.add(Be.body, B),
                U && w.add(Be.getElementsByTagName("html")[0], U),
                F && ((W += 1), g.hide(N)),
                y.default.register(this);
            },
          },
          {
            key: "render",
            value: function () {
              var E = this.props,
                N = E.id,
                F = E.className,
                U = E.overlayClassName,
                B = E.defaultStyles,
                G = E.children,
                Be = F ? {} : B.content,
                $e = U ? {} : B.overlay;
              if (this.shouldBeClosed()) return null;
              var pr = {
                  ref: this.setOverlayRef,
                  className: this.buildClassName("overlay", U),
                  style: n({}, $e, this.props.style.overlay),
                  onClick: this.handleOverlayOnClick,
                  onMouseDown: this.handleOverlayOnMouseDown,
                },
                gt = n(
                  {
                    id: N,
                    ref: this.setContentRef,
                    style: n({}, Be, this.props.style.content),
                    className: this.buildClassName("content", F),
                    tabIndex: "-1",
                    onKeyDown: this.handleKeyDown,
                    onMouseDown: this.handleContentOnMouseDown,
                    onMouseUp: this.handleContentOnMouseUp,
                    onClick: this.handleContentOnClick,
                    role: this.props.role,
                    "aria-label": this.props.contentLabel,
                  },
                  this.attributesFromObject(
                    "aria",
                    n({ modal: !0 }, this.props.aria)
                  ),
                  this.attributesFromObject("data", this.props.data || {}),
                  { "data-testid": this.props.testId }
                ),
                Tn = this.props.contentElement(gt, G);
              return this.props.overlayElement(pr, Tn);
            },
          },
        ]),
        D
      );
    })(l.Component);
  (ae.defaultProps = {
    style: { overlay: {}, content: {} },
    defaultStyles: {},
  }),
    (ae.propTypes = {
      isOpen: a.default.bool.isRequired,
      defaultStyles: a.default.shape({
        content: a.default.object,
        overlay: a.default.object,
      }),
      style: a.default.shape({
        content: a.default.object,
        overlay: a.default.object,
      }),
      className: a.default.oneOfType([a.default.string, a.default.object]),
      overlayClassName: a.default.oneOfType([
        a.default.string,
        a.default.object,
      ]),
      parentSelector: a.default.func,
      bodyOpenClassName: a.default.string,
      htmlOpenClassName: a.default.string,
      ariaHideApp: a.default.bool,
      appElement: a.default.oneOfType([
        a.default.instanceOf(p.default),
        a.default.instanceOf(x.SafeHTMLCollection),
        a.default.instanceOf(x.SafeNodeList),
        a.default.arrayOf(a.default.instanceOf(p.default)),
      ]),
      onAfterOpen: a.default.func,
      onAfterClose: a.default.func,
      onRequestClose: a.default.func,
      closeTimeoutMS: a.default.number,
      shouldFocusAfterRender: a.default.bool,
      shouldCloseOnOverlayClick: a.default.bool,
      shouldReturnFocusAfterClose: a.default.bool,
      preventScroll: a.default.bool,
      role: a.default.string,
      contentLabel: a.default.string,
      aria: a.default.object,
      data: a.default.object,
      children: a.default.node,
      shouldCloseOnEsc: a.default.bool,
      overlayRef: a.default.func,
      contentRef: a.default.func,
      id: a.default.string,
      overlayElement: a.default.func,
      contentElement: a.default.func,
      testId: a.default.string,
    }),
    (t.default = ae),
    (e.exports = t.default);
})(u2, $l);
function ch() {
  var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
  e != null && this.setState(e);
}
function dh(e) {
  function t(n) {
    var r = this.constructor.getDerivedStateFromProps(e, n);
    return r ?? null;
  }
  this.setState(t.bind(this));
}
function fh(e, t) {
  try {
    var n = this.props,
      r = this.state;
    (this.props = e),
      (this.state = t),
      (this.__reactInternalSnapshotFlag = !0),
      (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r));
  } finally {
    (this.props = n), (this.state = r);
  }
}
ch.__suppressDeprecationWarning = !0;
dh.__suppressDeprecationWarning = !0;
fh.__suppressDeprecationWarning = !0;
function ew(e) {
  var t = e.prototype;
  if (!t || !t.isReactComponent)
    throw new Error("Can only polyfill class components");
  if (
    typeof e.getDerivedStateFromProps != "function" &&
    typeof t.getSnapshotBeforeUpdate != "function"
  )
    return e;
  var n = null,
    r = null,
    o = null;
  if (
    (typeof t.componentWillMount == "function"
      ? (n = "componentWillMount")
      : typeof t.UNSAFE_componentWillMount == "function" &&
        (n = "UNSAFE_componentWillMount"),
    typeof t.componentWillReceiveProps == "function"
      ? (r = "componentWillReceiveProps")
      : typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        (r = "UNSAFE_componentWillReceiveProps"),
    typeof t.componentWillUpdate == "function"
      ? (o = "componentWillUpdate")
      : typeof t.UNSAFE_componentWillUpdate == "function" &&
        (o = "UNSAFE_componentWillUpdate"),
    n !== null || r !== null || o !== null)
  ) {
    var l = e.displayName || e.name,
      i =
        typeof e.getDerivedStateFromProps == "function"
          ? "getDerivedStateFromProps()"
          : "getSnapshotBeforeUpdate()";
    throw Error(
      `Unsafe legacy lifecycles will not be called for components using new component APIs.

` +
        l +
        " uses " +
        i +
        " but also contains the following legacy lifecycles:" +
        (n !== null
          ? `
  ` + n
          : "") +
        (r !== null
          ? `
  ` + r
          : "") +
        (o !== null
          ? `
  ` + o
          : "") +
        `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`
    );
  }
  if (
    (typeof e.getDerivedStateFromProps == "function" &&
      ((t.componentWillMount = ch), (t.componentWillReceiveProps = dh)),
    typeof t.getSnapshotBeforeUpdate == "function")
  ) {
    if (typeof t.componentDidUpdate != "function")
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    t.componentWillUpdate = fh;
    var a = t.componentDidUpdate;
    t.componentDidUpdate = function (u, d, c) {
      var f = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : c;
      a.call(this, u, d, f);
    };
  }
  return e;
}
const tw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, polyfill: ew },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  nw = vh(tw);
Object.defineProperty(Nn, "__esModule", { value: !0 });
Nn.bodyOpenClassName = Nn.portalClassName = void 0;
var nd =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  rw = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  ph = C,
  Vl = Co(ph),
  ow = sl,
  ql = Co(ow),
  lw = Bl,
  j = Co(lw),
  iw = $l,
  rd = Co(iw),
  aw = ct,
  sw = cw(aw),
  Wt = it,
  od = Co(Wt),
  uw = nw;
function cw(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null)
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  return (t.default = e), t;
}
function Co(e) {
  return e && e.__esModule ? e : { default: e };
}
function dw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ld(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function fw(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var pw = (Nn.portalClassName = "ReactModalPortal"),
  hw = (Nn.bodyOpenClassName = "ReactModal__Body--open"),
  dn = Wt.canUseDOM && ql.default.createPortal !== void 0,
  id = function (t) {
    return document.createElement(t);
  },
  ad = function () {
    return dn
      ? ql.default.createPortal
      : ql.default.unstable_renderSubtreeIntoContainer;
  };
function $o(e) {
  return e();
}
var Eo = (function (e) {
  fw(t, e);
  function t() {
    var n, r, o, l;
    dw(this, t);
    for (var i = arguments.length, a = Array(i), s = 0; s < i; s++)
      a[s] = arguments[s];
    return (
      (l =
        ((r =
          ((o = ld(
            this,
            (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
              n,
              [this].concat(a)
            )
          )),
          o)),
        (o.removePortal = function () {
          !dn && ql.default.unmountComponentAtNode(o.node);
          var u = $o(o.props.parentSelector);
          u && u.contains(o.node)
            ? u.removeChild(o.node)
            : console.warn(
                'React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.'
              );
        }),
        (o.portalRef = function (u) {
          o.portal = u;
        }),
        (o.renderPortal = function (u) {
          var d = ad(),
            c = d(
              o,
              Vl.default.createElement(
                rd.default,
                nd({ defaultStyles: t.defaultStyles }, u)
              ),
              o.node
            );
          o.portalRef(c);
        }),
        r)),
      ld(o, l)
    );
  }
  return (
    rw(
      t,
      [
        {
          key: "componentDidMount",
          value: function () {
            if (Wt.canUseDOM) {
              dn || (this.node = id("div")),
                (this.node.className = this.props.portalClassName);
              var r = $o(this.props.parentSelector);
              r.appendChild(this.node), !dn && this.renderPortal(this.props);
            }
          },
        },
        {
          key: "getSnapshotBeforeUpdate",
          value: function (r) {
            var o = $o(r.parentSelector),
              l = $o(this.props.parentSelector);
            return { prevParent: o, nextParent: l };
          },
        },
        {
          key: "componentDidUpdate",
          value: function (r, o, l) {
            if (Wt.canUseDOM) {
              var i = this.props,
                a = i.isOpen,
                s = i.portalClassName;
              r.portalClassName !== s && (this.node.className = s);
              var u = l.prevParent,
                d = l.nextParent;
              d !== u && (u.removeChild(this.node), d.appendChild(this.node)),
                !(!r.isOpen && !a) && !dn && this.renderPortal(this.props);
            }
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            if (!(!Wt.canUseDOM || !this.node || !this.portal)) {
              var r = this.portal.state,
                o = Date.now(),
                l =
                  r.isOpen &&
                  this.props.closeTimeoutMS &&
                  (r.closesAt || o + this.props.closeTimeoutMS);
              l
                ? (r.beforeClose || this.portal.closeWithTimeout(),
                  setTimeout(this.removePortal, l - o))
                : this.removePortal();
            }
          },
        },
        {
          key: "render",
          value: function () {
            if (!Wt.canUseDOM || !dn) return null;
            !this.node && dn && (this.node = id("div"));
            var r = ad();
            return r(
              Vl.default.createElement(
                rd.default,
                nd(
                  { ref: this.portalRef, defaultStyles: t.defaultStyles },
                  this.props
                )
              ),
              this.node
            );
          },
        },
      ],
      [
        {
          key: "setAppElement",
          value: function (r) {
            sw.setElement(r);
          },
        },
      ]
    ),
    t
  );
})(ph.Component);
Eo.propTypes = {
  isOpen: j.default.bool.isRequired,
  style: j.default.shape({
    content: j.default.object,
    overlay: j.default.object,
  }),
  portalClassName: j.default.string,
  bodyOpenClassName: j.default.string,
  htmlOpenClassName: j.default.string,
  className: j.default.oneOfType([
    j.default.string,
    j.default.shape({
      base: j.default.string.isRequired,
      afterOpen: j.default.string.isRequired,
      beforeClose: j.default.string.isRequired,
    }),
  ]),
  overlayClassName: j.default.oneOfType([
    j.default.string,
    j.default.shape({
      base: j.default.string.isRequired,
      afterOpen: j.default.string.isRequired,
      beforeClose: j.default.string.isRequired,
    }),
  ]),
  appElement: j.default.oneOfType([
    j.default.instanceOf(od.default),
    j.default.instanceOf(Wt.SafeHTMLCollection),
    j.default.instanceOf(Wt.SafeNodeList),
    j.default.arrayOf(j.default.instanceOf(od.default)),
  ]),
  onAfterOpen: j.default.func,
  onRequestClose: j.default.func,
  closeTimeoutMS: j.default.number,
  ariaHideApp: j.default.bool,
  shouldFocusAfterRender: j.default.bool,
  shouldCloseOnOverlayClick: j.default.bool,
  shouldReturnFocusAfterClose: j.default.bool,
  preventScroll: j.default.bool,
  parentSelector: j.default.func,
  aria: j.default.object,
  data: j.default.object,
  role: j.default.string,
  contentLabel: j.default.string,
  shouldCloseOnEsc: j.default.bool,
  overlayRef: j.default.func,
  contentRef: j.default.func,
  id: j.default.string,
  overlayElement: j.default.func,
  contentElement: j.default.func,
};
Eo.defaultProps = {
  isOpen: !1,
  portalClassName: pw,
  bodyOpenClassName: hw,
  role: "dialog",
  ariaHideApp: !0,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: !0,
  shouldCloseOnEsc: !0,
  shouldCloseOnOverlayClick: !0,
  shouldReturnFocusAfterClose: !0,
  preventScroll: !1,
  parentSelector: function () {
    return document.body;
  },
  overlayElement: function (t, n) {
    return Vl.default.createElement("div", t, n);
  },
  contentElement: function (t, n) {
    return Vl.default.createElement("div", t, n);
  },
};
Eo.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
  },
};
(0, uw.polyfill)(Eo);
Nn.default = Eo;
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n = Nn,
    r = o(n);
  function o(l) {
    return l && l.__esModule ? l : { default: l };
  }
  (t.default = r.default), (e.exports = t.default);
})(r2, jl);
const hh = sd(jl),
  mw = {
    overlay: { backgroundColor: "rgba(255,255,255,0.5)" },
    content: {
      top: "45%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      borderRadius: "2rem",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
hh.setAppElement("#root");
const vw = () => {
    const [e, t] = C.useState([]),
      [n, r] = C.useState(!1),
      [o, l] = C.useState(!1);
    C.useEffect(() => {
      l(!0),
        xe
          .get("/rentals")
          .then((s) => t(s.data))
          .finally(() => l(!1)),
        console.log(e);
    }, []);
    const i = () => {
        r(!0);
      },
      a = () => {
        r(!1);
      };
    return k("div", {
      children: [
        m(wi, {}),
        k("div", {
          children: [
            o &&
              m("div", {
                className: "flex justify-center my-10 ",
                children: m(vi, {}),
              }),
            e.length > 0 &&
              (e == null
                ? void 0
                : e.map((s) =>
                    k(
                      "div",
                      {
                        to: `/acc/rentals/${s._id}`,
                        className:
                          "md:flex bg-gray-200 my-4 rounded-2xl gap-2 cursor-pointer",
                        onClick: i,
                        children: [
                          k(hh, {
                            isOpen: n,
                            onRequestClose: a,
                            style: mw,
                            contentLabel: "Example Modal",
                            children: [
                              k("div", {
                                className: "grid",
                                children: [
                                  k("div", {
                                    children: [
                                      " ",
                                      k("div", {
                                        className:
                                          "font-xl my-4 flex font-bold gap-2",
                                        children: [
                                          m("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 22 10",
                                            className: "w-6 h-6",
                                            children: m("path", {
                                              fill: "#191919",
                                              fillRule: "evenodd",
                                              d: "M10.067.001h7.024l.3.404 1.76 2.365H22v4.45l-.635.249-1.821.714c-.299 1.029-1.22 1.816-2.368 1.816-1.043 0-1.898-.649-2.27-1.538H6.505c-.372.89-1.227 1.538-2.27 1.538S2.338 9.35 1.965 8.46H0V5.415l.41-.3 2.94-2.152.264-.193h2.923L9.795.215 10.067 0zm-.29 2.769h2.846l.244-.77h-2.11l-.98.769zM14.968 2l-.245.769h1.935L16.087 2h-1.12zM4.05 4.93c.06-.005.123-.007.185-.007 1.043 0 1.898.648 2.27 1.538h8.402c.372-.89 1.227-1.538 2.27-1.538.912 0 1.68.495 2.107 1.214L20 5.856V4.77H4.268l-.218.16zm.185 1.993c-.218 0-.47.198-.47.538s.252.538.47.538c.219 0 .471-.199.471-.538 0-.34-.252-.538-.47-.538zm12.942 0c-.218 0-.47.198-.47.538s.252.538.47.538c.218 0 .47-.199.47-.538 0-.34-.252-.538-.47-.538z",
                                              clipRule: "evenodd",
                                            }),
                                          }),
                                          s.car.brand,
                                          ", ",
                                          s.car.model,
                                        ],
                                      }),
                                      k("div", {
                                        className: "my-4 flex font-bold gap-2",
                                        children: [
                                          m("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: "1.5",
                                            stroke: "currentColor",
                                            className: "w-6 h-6",
                                            children: m("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              d: "M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                            }),
                                          }),
                                          s.car.price,
                                          "€/día",
                                        ],
                                      }),
                                      k("div", {
                                        className: "my-4 flex font-bold gap-2",
                                        children: [
                                          m("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            className: "w-6 h-6",
                                            children: m("path", {
                                              fill: "#191919",
                                              fillRule: "evenodd",
                                              d: "M5.94 19.242L4 18.758c.037-.148.107-.39.209-.698.17-.51.375-1.022.617-1.506C5.604 14.995 6.6 14 7.97 14h8c1.37 0 2.366.995 3.145 2.553.242.484.446.995.616 1.506.103.307.172.55.21.698L18 19.242a8.269 8.269 0 00-.166-.55 9.593 9.593 0 00-.508-1.245C16.854 16.505 16.35 16 15.97 16h-8c-.38 0-.884.505-1.355 1.447a9.592 9.592 0 00-.509 1.244c-.085.255-.14.45-.166.552zM16.47 8.5c0 2.536-2.012 4.5-4.54 4.5-2.52 0-4.46-1.956-4.46-4.5 0-2.57 1.883-4.5 4.46-4.5 2.585 0 4.54 1.94 4.54 4.5zm-2 0c0-1.452-1.056-2.5-2.54-2.5-1.46 0-2.46 1.024-2.46 2.5 0 1.443 1.048 2.5 2.46 2.5 1.434 0 2.54-1.08 2.54-2.5z",
                                              clipRule: "evenodd",
                                            }),
                                          }),
                                          s.car.seats,
                                        ],
                                      }),
                                      k("div", {
                                        className: "my-4 flex font-bold gap-2",
                                        children: [
                                          m("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            className: "w-6 h-6",
                                            children: m("path", {
                                              fill: "#191919",
                                              fillRule: "evenodd",
                                              d: "M4 12v3.062c2.929.364 5.4 2.303 5.906 4.938H20v-8H4zm.618-2H20V4H7.618l-3 6zM2 10.764L6.382 2H22v20H8v-1c0-2.218-2.29-4-5-4H2v-6.236zM7 15v-2h3v2H7z",
                                              clipRule: "evenodd",
                                            }),
                                          }),
                                          s.car.doors,
                                        ],
                                      }),
                                      k("div", {
                                        className: "my-4 flex font-bold gap-2",
                                        children: [
                                          m("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            className: "w-6 h-6",
                                            children: m("path", {
                                              fill: "#191919",
                                              fillRule: "evenodd",
                                              d: "M11 13H8v5H6V6h2v5h3V6h2v5h3V6h2v7h-5v5h-2v-5zM8 4H6V2h2v2zm5 0h-2V2h2v2zm5 0h-2V2h2v2zm-5 18h-2v-2h2v2zm-5 0H6v-2h2v2z",
                                              clipRule: "evenodd",
                                            }),
                                          }),
                                          "Transmisión ",
                                          s.car.transmission,
                                        ],
                                      }),
                                      k("div", {
                                        className: "my-4 flex font-bold gap-2",
                                        children: [
                                          m("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            className: "w-6 h-6",
                                            children: m("path", {
                                              fill: "#191919",
                                              fillRule: "evenodd",
                                              d: "M8.744 15.222l-.958 3.58-1.932-.518.458-1.71-2.34 1.3L3 16.126l2.09-1.16-1.363-.366.517-1.932 3.36.9L10.425 12l-2.822-1.568-3.359.9L3.728 9.4l1.361-.365L3 7.875l.971-1.75 2.342 1.302-.458-1.71 1.932-.518.959 3.58 2.74 1.522V7.07L8.945 4.53l1.414-1.414 1.127 1.126V2h2v2.243l1.128-1.128 1.414 1.415-2.542 2.541v3.23l2.74-1.523.96-3.58 1.932.518-.458 1.71 2.34-1.3.971 1.748-2.089 1.16 1.362.366-.517 1.931-3.359-.9-2.823 1.57 2.825 1.569 3.357-.9.518 1.931-1.361.365 2.087 1.16-.97 1.748-2.342-1.3.459 1.712-1.932.517-.96-3.58-2.74-1.523v3.229l2.54 2.541-1.413 1.414-1.127-1.127V22h-2v-2.243l-1.128 1.127-1.414-1.414 2.542-2.541v-3.23l-2.742 1.523z",
                                              clipRule: "evenodd",
                                            }),
                                          }),
                                          s.car.aircon,
                                        ],
                                      }),
                                      k("div", {
                                        className: "my-4 flex font-bold gap-2",
                                        children: [
                                          m("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            className: "w-6 h-6",
                                            children: m("path", {
                                              fill: "#191919",
                                              fillRule: "evenodd",
                                              d: "M16 8H8v11h8V8zm2 0v11h2V8h-2zM6 8H4v11h2V8zm2-2V3h8v3h6v15H2V6h6zm2 0h4V5h-4v1z",
                                              clipRule: "evenodd",
                                            }),
                                          }),
                                          s.car.trunk,
                                        ],
                                      }),
                                      k("div", {
                                        className: "my-4 flex font-bold gap-2",
                                        children: [
                                          k("svg", {
                                            className: "w-6 h-6",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                              m("path", {
                                                d: "M4 5C4 4.44772 4.44772 4 5 4H12C12.5523 4 13 4.44772 13 5V21H4V5Z",
                                                stroke: "#000000",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                              }),
                                              m("path", {
                                                d: "M13 11.5H18V19C18 20.1046 18.8954 21 20 21V21C21.1046 21 22 20.1046 22 19V9M17.5 2L20.5 4.66667M20.5 4.66667L22 6V9M20.5 4.66667V9H22",
                                                stroke: "#000000",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                              }),
                                              m("path", {
                                                d: "M15 21L2 21",
                                                stroke: "#000000",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                              }),
                                              m("path", {
                                                d: "M10 8L7 8",
                                                stroke: "#000000",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                              }),
                                            ],
                                          }),
                                          s.car.consumption,
                                          " consumo",
                                        ],
                                      }),
                                      k("div", {
                                        className: "my-4 flex font-bold gap-2",
                                        children: [
                                          m("svg", {
                                            className: "w-6 h-6",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: m("path", {
                                              d: "M12 7.01001V7.00002M12 17L12 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
                                              stroke: "#000000",
                                              strokeWidth: "2.2",
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                            }),
                                          }),
                                          s.car.description,
                                        ],
                                      }),
                                      " ",
                                    ],
                                  }),
                                  " ",
                                  m("button", {
                                    className:
                                      "bg-primary p-2 rounded-xl text-white font-semibold cursor-not-allowed",
                                    onClick: a,
                                    children: "Presiona ESC para volver",
                                  }),
                                ],
                              }),
                              " ",
                            ],
                          }),
                          m("div", {
                            className: "mt-3 w-full md:w-48",
                            children: m(n2, { car: s.car }),
                          }),
                          k("div", {
                            className: "mx-2 my-4 md:py-3 pr-3 grow",
                            children: [
                              " ",
                              k("h2", {
                                className: "text-xl",
                                children: [s.car.brand, " ", s.car.model],
                              }),
                              m("div", {
                                className: "text-xl",
                                children: k("div", {
                                  className: "flex gap-1 text-slate-700",
                                  children: [
                                    nh(
                                      new Date(s.checkOut),
                                      new Date(s.checkIn)
                                    ),
                                    " ",
                                    "día(s) | Desde",
                                    " ",
                                    Zc(new Date(s.checkIn), "yyyy-MM-dd"),
                                    " hasta",
                                    " ",
                                    Zc(new Date(s.checkOut), "yyyy-MM-dd"),
                                  ],
                                }),
                              }),
                              " ",
                              k("div", {
                                className: "flex gap-1 mt-4",
                                children: [
                                  m("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 1.5,
                                    stroke: "currentColor",
                                    className: "w-8 h-8 mt-1",
                                    children: m("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      d: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z",
                                    }),
                                  }),
                                  k("span", {
                                    className:
                                      "text-xl text-white bg-primary p-1.5 rounded-2xl mb-2",
                                    children: ["Coste total: ", s.price, "€"],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      s._id
                    )
                  )),
          ],
        }),
      ],
    });
  },
  gw = () => {
    const e = Rt();
    return k("div", {
      className: "text-center max-w-lg mx-auto my-20",
      children: [
        m("span", { children: "😪" }),
        m("h2", {
          className: "text-red-600",
          children: "404 - Page not found ",
        }),
        m("span", {
          className: "font-semibold",
          children: "Por aquí no hay nada",
        }),
        m("button", {
          onClick: () => e("/"),
          className: "primary max-w-sm mt-2 font-semibold",
          children: "Volver al Home",
        }),
        " ",
      ],
    });
  };
xe.defaults.baseURL = "https://alugame-api.onrender.com";
xe.defaults.withCredentials = !0;
function yw() {
  return m(ig, {
    children: m(jv, {
      children: k(We, {
        path: "/",
        element: m(sg, {}),
        children: [
          m(We, { index: !0, element: m(gg, {}) }),
          m(We, { path: "/login", element: m(yg, {}) }),
          m(We, { path: "/register", element: m(_g, {}) }),
          m(We, { path: "/acc", element: m(Tg, {}) }),
          m(We, { path: "/acc/cars", element: m(th, {}) }),
          m(We, { path: "/acc/cars/new", element: m(Qc, {}) }),
          m(We, { path: "/acc/cars/:id", element: m(Qc, {}) }),
          m(We, { path: "/car/:id", element: m(t2, {}) }),
          m(We, { path: "/acc/rentals", element: m(vw, {}) }),
          m(We, { path: "*", element: m(gw, {}) }),
        ],
      }),
    }),
  });
}
la.createRoot(document.getElementById("root")).render(
  m(Q.StrictMode, { children: m(Vv, { children: m(yw, {}) }) })
);
