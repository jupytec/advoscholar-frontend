import {
  r as c,
  a as P,
  g as R,
  O as S,
  S as w,
  c as b,
  R as L,
} from "./react-vendor-D0AUhhr_.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) l(e);
  new MutationObserver((e) => {
    for (const o of e)
      if (o.type === "childList")
        for (const n of o.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && l(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(e) {
    const o = {};
    return (
      e.integrity && (o.integrity = e.integrity),
      e.referrerPolicy && (o.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : e.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function l(e) {
    if (e.ep) return;
    e.ep = !0;
    const o = i(e);
    fetch(e.href, o);
  }
})();
var y = { exports: {} },
  f = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var D = c,
  I = Symbol.for("react.element"),
  T = Symbol.for("react.fragment"),
  N = Object.prototype.hasOwnProperty,
  k = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  A = { key: !0, ref: !0, __self: !0, __source: !0 };
function x(s, t, i) {
  var l,
    e = {},
    o = null,
    n = null;
  i !== void 0 && (o = "" + i),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (n = t.ref);
  for (l in t) N.call(t, l) && !A.hasOwnProperty(l) && (e[l] = t[l]);
  if (s && s.defaultProps)
    for (l in ((t = s.defaultProps), t)) e[l] === void 0 && (e[l] = t[l]);
  return { $$typeof: I, type: s, key: o, ref: n, props: e, _owner: k.current };
}
f.Fragment = T;
f.jsx = x;
f.jsxs = x;
y.exports = f;
var r = y.exports,
  E,
  h = P;
(E = h.createRoot), h.hydrateRoot;
const V = "modulepreload",
  z = function (s) {
    return "/" + s;
  },
  v = {},
  u = function (t, i, l) {
    let e = Promise.resolve();
    if (i && i.length > 0) {
      const o = document.getElementsByTagName("link");
      e = Promise.all(
        i.map((n) => {
          if (((n = z(n)), n in v)) return;
          v[n] = !0;
          const p = n.endsWith(".css"),
            O = p ? '[rel="stylesheet"]' : "";
          if (!!l)
            for (let d = o.length - 1; d >= 0; d--) {
              const _ = o[d];
              if (_.href === n && (!p || _.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${n}"]${O}`)) return;
          const a = document.createElement("link");
          if (
            ((a.rel = p ? "stylesheet" : V),
            p || ((a.as = "script"), (a.crossOrigin = "")),
            (a.href = n),
            document.head.appendChild(a),
            p)
          )
            return new Promise((d, _) => {
              a.addEventListener("load", d),
                a.addEventListener("error", () =>
                  _(new Error(`Unable to preload CSS for ${n}`)),
                );
            });
        }),
      );
    }
    return e
      .then(() => t())
      .catch((o) => {
        const n = new Event("vite:preloadError", { cancelable: !0 });
        if (((n.payload = o), window.dispatchEvent(n), !n.defaultPrevented))
          throw o;
      });
  },
  C = c.lazy(() =>
    u(() => import("./index-b4_ZLFFy.js"), __vite__mapDeps([0, 1])),
  ),
  B = c.lazy(() =>
    u(() => import("./404-1krL3sQS.js"), __vite__mapDeps([2, 1])),
  ),
  F = c.lazy(() =>
    u(() => import("./index-B7ANfblG.js"), __vite__mapDeps([3, 1])),
  ),
  $ = c.lazy(() =>
    u(() => import("./index-C8cBqZpB.js"), __vite__mapDeps([4, 1])),
  ),
  U = c.lazy(() =>
    u(() => import("./index-CaqqxaRw.js"), __vite__mapDeps([5, 1])),
  ),
  q = c.lazy(() =>
    u(() => import("./index-B0O_hUbD.js"), __vite__mapDeps([6, 1])),
  ),
  M = c.lazy(() =>
    u(() => import("./index-ReppazXG.js"), __vite__mapDeps([7, 1])),
  ),
  J = [
    { index: !0, element: r.jsx(c.Suspense, { children: r.jsx(C, {}) }) },
    { path: "/login", element: r.jsx(c.Suspense, { children: r.jsx(F, {}) }) },
    {
      path: "/verify_email",
      element: r.jsx(c.Suspense, { children: r.jsx($, {}) }),
    },
    {
      path: "/forgot_password",
      element: r.jsx(c.Suspense, { children: r.jsx(U, {}) }),
    },
    { path: "/signup", element: r.jsx(c.Suspense, { children: r.jsx(q, {}) }) },
    {
      path: "set_password",
      element: r.jsx(c.Suspense, { children: r.jsx(M, {}) }),
    },
    { path: "*", element: r.jsx(c.Suspense, { children: r.jsx(B, {}) }) },
  ];
var g = { exports: {} },
  m = Object.defineProperty,
  W = Object.getOwnPropertyDescriptor,
  K = Object.getOwnPropertyNames,
  Y = Object.prototype.hasOwnProperty,
  G = (s, t) => {
    for (var i in t) m(s, i, { get: t[i], enumerable: !0 });
  },
  H = (s, t, i, l) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let e of K(t))
        !Y.call(s, e) &&
          e !== i &&
          m(s, e, {
            get: () => t[e],
            enumerable: !(l = W(t, e)) || l.enumerable,
          });
    return s;
  },
  Q = (s) => H(m({}, "__esModule", { value: !0 }), s),
  j = {};
G(j, { default: () => Z });
var X = Q(j);
function Z(...s) {
  return s.length
    ? s[0]
    : (t, ...i) => {
        if (i && i.length) return i[0];
      };
}
g.exports = X;
var ee = g.exports;
const te = R(ee);
function re() {
  return te(), r.jsxs(c.Fragment, { children: [r.jsx(S, {}), r.jsx(w, {})] });
}
const oe = document.getElementById("root"),
  ne = E(oe),
  se = b([
    {
      path: "/",
      element: r.jsx(re, {}),
      children: J,
      errorElement: r.jsx("div", { children: "error" }),
    },
  ]);
ne.render(
  r.jsx(c.StrictMode, {
    children: r.jsx(L, {
      router: se,
      fallbackElement: r.jsx("div", { children: "loading..." }),
    }),
  }),
);
export { r as j };
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      "assets/index-b4_ZLFFy.js",
      "assets/react-vendor-D0AUhhr_.js",
      "assets/404-1krL3sQS.js",
      "assets/index-B7ANfblG.js",
      "assets/index-C8cBqZpB.js",
      "assets/index-CaqqxaRw.js",
      "assets/index-B0O_hUbD.js",
      "assets/index-ReppazXG.js",
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
