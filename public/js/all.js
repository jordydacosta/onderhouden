/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a, b) {
  "object" == typeof module && "object" == typeof module.exports ?
      module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)throw new Error("jQuery requires a window with a document");
        return b(a)
      } :
      b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
  var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = "1.11.3", m = function(
      a, b) {
    return new m.fn.init(a, b)
  }, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function(a, b) {
    return b.toUpperCase()
  };
  m.fn = m.prototype = {
    jquery: l, constructor: m, selector: "", length: 0, toArray: function() {
      return d.call(this)
    }, get: function(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
    }, pushStack: function(a) {
      var b = m.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b
    }, each: function(a, b) {
      return m.each(this, a, b)
    }, map: function(a) {
      return this.pushStack(m.map(this, function(b, c) {
        return a.call(b, c, b)
      }))
    }, slice: function() {
      return this.pushStack(d.apply(this, arguments))
    }, first: function() {
      return this.eq(0)
    }, last: function() {
      return this.eq(-1)
    }, eq: function(a) {
      var b = this.length, c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    }, end: function() {
      return this.prevObject || this.constructor(null)
    }, push: f, sort: c.sort, splice: c.splice
  }, m.extend = m.fn.extend = function() {
    var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g ||
    m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null !=
        (e = arguments[h]))for (d in e)a = g[d], c = e[d], g !== c &&
    (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ?
        (b ?
            (b = !1, f = a && m.isArray(a) ? a : []) :
            f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) :
    void 0 !== c && (g[d] = c));
    return g
  }, m.extend({
    expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(a) {
      throw new Error(a)
    }, noop: function() {
    }, isFunction: function(a) {
      return "function" === m.type(a)
    }, isArray: Array.isArray || function(a) {
      return "array" === m.type(a)
    }, isWindow: function(a) {
      return null != a && a == a.window
    }, isNumeric: function(a) {
      return !m.isArray(a) && a - parseFloat(a) + 1 >= 0
    }, isEmptyObject: function(a) {
      var b;
      for (b in a)return !1;
      return !0
    }, isPlainObject: function(a) {
      var b;
      if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a))return !1;
      try {
        if (a.constructor && !j.call(a, "constructor") &&
            !j.call(a.constructor.prototype, "isPrototypeOf"))return !1
      } catch (c) {
        return !1
      }
      if (k.ownLast)for (b in a)return j.call(a, b);
      for (b in a);
      return void 0 === b || j.call(a, b)
    }, type: function(a) {
      return null == a ?
      a + "" :
          "object" == typeof a || "function" == typeof a ?
          h[i.call(a)] || "object" :
              typeof a
    }, globalEval: function(b) {
      b && m.trim(b) && (a.execScript || function(b) {
        a.eval.call(a, b)
      })(b)
    }, camelCase: function(a) {
      return a.replace(o, "ms-").replace(p, q)
    }, nodeName: function(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }, each: function(a, b, c) {
      var d, e = 0, f = a.length, g = r(a);
      if (c) {
        if (g) {
          for (; f > e; e++)if (d = b.apply(a[e], c), d === !1)break
        } else for (e in a)if (d = b.apply(a[e], c), d === !1)break
      } else if (g) {
        for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1)break
      } else for (e in a)if (d = b.call(a[e], e, a[e]), d === !1)break;
      return a
    }, trim: function(a) {
      return null == a ? "" : (a + "").replace(n, "")
    }, makeArray: function(a, b) {
      var c = b || [];
      return null != a &&
      (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
    }, inArray: function(a, b, c) {
      var d;
      if (b) {
        if (g)return g.call(b, a, c);
        for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)if (c in b &&
            b[c] === a)return c
      }
      return -1
    }, merge: function(a, b) {
      var c = +b.length, d = 0, e = a.length;
      while (c > d)a[e++] = b[d++];
      if (c !== c)while (void 0 !== b[d])a[e++] = b[d++];
      return a.length = e, a
    }, grep: function(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h &&
      e.push(a[f]);
      return e
    }, map: function(a, b, c) {
      var d, f = 0, g = a.length, h = r(a), i = [];
      if (h)for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a)d = b(
          a[f], f, c), null != d && i.push(d);
      return e.apply([], i)
    }, guid: 1, proxy: function(a, b) {
      var c, e, f;
      return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ?
          (c = d.call(arguments, 2), e = function() {
            return a.apply(b || this, c.concat(d.call(arguments)))
          }, e.guid = a.guid = a.guid || m.guid++, e) :
          void 0
    }, now: function() {
      return +new Date
    }, support: k
  }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
      function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
      });
  function r(a) {
    var b = "length" in a && a.length, c = m.type(a);
    return "function" === c || m.isWindow(a) ?
        !1 :
        1 === a.nodeType && b ?
            !0 :
        "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
  }

  var s = function(a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" +
        1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function(
        a, b) {
      return a === b && (l = !0), 0
    }, C = 1 <<
        31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(
        a, b) {
      for (var c = 0, d = a.length; d > c; c++)if (a[c] === b)return c;
      return -1
    }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace(
        "w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L +
        "*\\]", P = ":(" + M +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L +
        "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L +
        "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L +
        "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
      ID: new RegExp("^#(" + M + ")"),
      CLASS: new RegExp("^\\.(" + M + ")"),
      TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
      ATTR: new RegExp("^" + O),
      PSEUDO: new RegExp("^" + P),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L +
          "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L +
          "*\\)|)", "i"),
      bool: new RegExp("^(?:" + K + ")$", "i"),
      needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L +
          "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
    }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" +
        L + "?|(" + L + ")|.)", "ig"), da = function(a, b, c) {
      var d = "0x" + b - 65536;
      return d !== d || c ?
          b :
          0 > d ?
              String.fromCharCode(d + 65536) :
              String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
    }, ea = function() {
      m()
    };
    try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
    } catch (fa) {
      H = {
        apply: E.length ? function(a, b) {
          G.apply(a, I.call(b))
        } : function(a, b) {
          var c = a.length, d = 0;
          while (a[c++] = b[d++]);
          a.length = c - 1
        }
      }
    }
    function ga(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;
      if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d ||
              [], k = b.nodeType, "string" != typeof a || !a ||
          1 !== k && 9 !== k && 11 !== k)return d;
      if (!e && p) {
        if (11 !== k && (f = _.exec(a)))if (j = f[1]) {
          if (9 === k) {
            if (h = b.getElementById(j), !h || !h.parentNode)return d;
            if (h.id === j)return d.push(h), d
          } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) &&
              h.id === j)return d.push(h), d
        } else {
          if (f[2])return H.apply(d, b.getElementsByTagName(a)), d;
          if ((j = f[3]) && c.getElementsByClassName)return H.apply(d,
              b.getElementsByClassName(j)), d
        }
        if (c.qsa && (!q || !q.test(a))) {
          if (s = r = u, w = b, x = 1 !== k && a, 1 === k &&
              "object" !== b.nodeName.toLowerCase()) {
            o = g(a), (r = b.getAttribute("id")) ?
                s = r.replace(ba, "\\$&") :
                b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
            while (l--)o[l] = s + ra(o[l]);
            w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
          }
          if (x)try {
            return H.apply(d, w.querySelectorAll(x)), d
          } catch (y) {
          } finally {
            r || b.removeAttribute("id")
          }
        }
      }
      return i(a.replace(R, "$1"), b, d, e)
    }

    function ha() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
      }

      return b
    }

    function ia(a) {
      return a[u] = !0, a
    }

    function ja(a) {
      var b = n.createElement("div");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function ka(a, b) {
      var c = a.split("|"), e = a.length;
      while (e--)d.attrHandle[c[e]] = b
    }

    function la(a, b) {
      var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType &&
          (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d)return d;
      if (c)while (c = c.nextSibling)if (c === b)return -1;
      return a ? 1 : -1
    }

    function ma(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a
      }
    }

    function na(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a
      }
    }

    function oa(a) {
      return ia(function(b) {
        return b = +b, ia(function(c, d) {
          var e, f = a([], c.length, b), g = f.length;
          while (g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
        })
      })
    }

    function pa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a
    }

    c = ga.support = {}, f = ga.isXML = function(a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1
    }, m = ga.setDocument = function(a) {
      var b, e, g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ?
          (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top &&
          (e.addEventListener ?
              e.addEventListener("unload", ea, !1) :
          e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(
              function(a) {
                return a.className = "i", !a.getAttribute("className")
              }), c.getElementsByTagName = ja(function(a) {
            return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
          }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(
              function(a) {
                return o.appendChild(a).id = u, !g.getElementsByName ||
                !g.getElementsByName(u).length
              }), c.getById ? (d.find.ID = function(a, b) {
            if ("undefined" != typeof b.getElementById && p) {
              var c = b.getElementById(a);
              return c && c.parentNode ? [c] : []
            }
          }, d.filter.ID = function(a) {
            var b = a.replace(ca, da);
            return function(a) {
              return a.getAttribute("id") === b
            }
          }) : (delete d.find.ID, d.filter.ID = function(a) {
            var b = a.replace(ca, da);
            return function(a) {
              var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
              return c && c.value === b
            }
          }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
            return "undefined" != typeof b.getElementsByTagName ?
                b.getElementsByTagName(a) :
                c.qsa ?
                    b.querySelectorAll(a) :
                    void 0
          } : function(a, b) {
            var c, d = [], e = 0, f = b.getElementsByTagName(a);
            if ("*" === a) {
              while (c = f[e++])1 === c.nodeType && d.push(c);
              return d
            }
            return f
          }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0
              }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
            o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u +
                "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll(
                "[msallowcapture^='']").length &&
            q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length ||
            q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll(
                "[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length ||
            q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
          }), ja(function(a) {
            var b = g.createElement("input");
            b.setAttribute("type", "hidden"), a.appendChild(b)
                .setAttribute("name", "D"), a.querySelectorAll("[name=d]").length &&
            q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length ||
            q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
          })), (c.matchesSelector = $.test(
              s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector ||
                  o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
            c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
          }), q = q.length && new RegExp(q.join("|")), r = r.length &&
              new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b ||
          $.test(o.contains) ? function(a, b) {
            var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
            return a === d || !(!d || 1 !== d.nodeType || !(c.contains ?
                    c.contains(d) :
                a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
          } : function(a, b) {
            if (b)while (b = b.parentNode)if (b === a)return !0;
            return !1
          }, B = b ? function(a, b) {
            if (a === b)return l = !0, 0;
            var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
            return d ?
                d :
                (d = (a.ownerDocument || a) === (b.ownerDocument || b) ?
                    a.compareDocumentPosition(b) :
                    1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ?
                    a === g || a.ownerDocument === v && t(v, a) ?
                        -1 :
                        b === g || b.ownerDocument === v && t(v, b) ?
                            1 :
                            k ?
                            J(k, a) - J(k, b) :
                                0 :
                    4 & d ?
                        -1 :
                        1)
          } : function(a, b) {
            if (a === b)return l = !0, 0;
            var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
            if (!e || !f)return a === g ?
                -1 :
                b === g ?
                    1 :
                    e ?
                        -1 :
                        f ?
                            1 :
                            k ?
                            J(k, a) - J(k, b) :
                                0;
            if (e === f)return la(a, b);
            c = a;
            while (c = c.parentNode)h.unshift(c);
            c = b;
            while (c = c.parentNode)i.unshift(c);
            while (h[d] === i[d])d++;
            return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
          }, g) :
          n
    }, ga.matches = function(a, b) {
      return ga(a, null, null, b)
    }, ga.matchesSelector = function(a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector ||
          !p || r && r.test(b) || q && q.test(b)))try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
      } catch (e) {
      }
      return ga(b, n, null, [a]).length > 0
    }, ga.contains = function(a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b)
    }, ga.attr = function(a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ?
          e(a, b, !p) :
          void 0;
      return void 0 !== f ?
          f :
          c.attributes || !p ?
              a.getAttribute(b) :
              (f = a.getAttributeNode(b)) && f.specified ?
                  f.value :
                  null
    }, ga.error = function(a) {
      throw new Error("Syntax error, unrecognized expression: " + a)
    }, ga.uniqueSort = function(a) {
      var b, d = [], e = 0, f = 0;
      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++])b === a[f] && (e = d.push(f));
        while (e--)a.splice(d[e], 1)
      }
      return k = null, a
    }, e = ga.getText = function(a) {
      var b, c = "", d = 0, f = a.nodeType;
      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent)return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling)c += e(a)
        } else if (3 === f || 4 === f)return a.nodeValue
      } else while (b = a[d++])c += e(b);
      return c
    }, d = ga.selectors = {
      cacheLength: 50,
      createPseudo: ia,
      match: X,
      attrHandle: {},
      find: {},
      relative: {
        ">": {dir: "parentNode", first: !0},
        " ": {dir: "parentNode"},
        "+": {dir: "previousSibling", first: !0},
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        ATTR: function(a) {
          return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca,
              da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        }, CHILD: function(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ?
              (a[3] || ga.error(a[0]), a[4] = +(a[4] ?
              a[5] + (a[6] || 1) :
              2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) :
          a[3] && ga.error(a[0]), a
        }, PSEUDO: function(a) {
          var b, c = !a[6] && a[2];
          return X.CHILD.test(a[0]) ?
              null :
              (a[3] ?
                  a[2] = a[4] || a[5] || "" :
              c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) &&
              (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }
      },
      filter: {
        TAG: function(a) {
          var b = a.replace(ca, da).toLowerCase();
          return "*" === a ? function() {
            return !0
          } : function(a) {
            return a.nodeName && a.nodeName.toLowerCase() === b
          }
        }, CLASS: function(a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                return b.test("string" == typeof a.className && a.className ||
                    "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
              })
        }, ATTR: function(a, b, c) {
          return function(d) {
            var e = ga.attr(d, a);
            return null == e ?
            "!=" === b :
                b ?
                    (e += "", "=" === b ?
                    e === c :
                        "!=" === b ?
                        e !== c :
                            "^=" === b ?
                            c && 0 === e.indexOf(c) :
                                "*=" === b ?
                                c && e.indexOf(c) > -1 :
                                    "$=" === b ?
                                    c && e.slice(-c.length) === c :
                                        "~=" === b ?
                                        (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 :
                                            "|=" === b ?
                                            e === c || e.slice(0, c.length + 1) === c + "-" :
                                                !1) :
                    !0
          }
        }, CHILD: function(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
          return 1 === d && 0 === e ? function(a) {
            return !!a.parentNode
          } : function(b, c, i) {
            var j, k, l, m, n, o, p = f !== g ?
                "nextSibling" :
                "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i &&
                !h;
            if (q) {
              if (f) {
                while (p) {
                  l = b;
                  while (l = l[p])if (h ?
                      l.nodeName.toLowerCase() === r :
                      1 === l.nodeType)return !1;
                  o = p = "only" === a && !o && "nextSibling"
                }
                return !0
              }
              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w &&
                    j[2], l = n && q.childNodes[n];
                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if (1 === l.nodeType && ++m &&
                    l === b) {
                  k[a] = [w, n, m];
                  break
                }
              } else if (s && (j = (b[u] || (b[u] = {}))[a]) &&
                  j[0] === w)m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) ||
                  o.pop())if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m &&
                  (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))break;
              return m -= e, m === d || m % d === 0 && m / d >= 0
            }
          }
        }, PSEUDO: function(a, b) {
          var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] ||
              ga.error("unsupported pseudo: " + a);
          return e[u] ?
              e(b) :
              e.length > 1 ?
                  (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ?
                      ia(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)d = J(a, f[g]), a[d] = !(c[d] = f[g])
                      }) :
                      function(a) {
                        return e(a, 0, c)
                      }) :
                  e
        }
      },
      pseudos: {
        not: ia(function(a) {
          var b = [], c = [], d = h(a.replace(R, "$1"));
          return d[u] ? ia(function(a, b, c, e) {
            var f, g = d(a, null, e, []), h = a.length;
            while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
          }) : function(a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
          }
        }), has: ia(function(a) {
          return function(b) {
            return ga(a, b).length > 0
          }
        }), contains: ia(function(a) {
          return a = a.replace(ca, da), function(b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
          }
        }), lang: ia(function(a) {
          return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da)
              .toLowerCase(), function(b) {
            var c;
            do {
              if (c = p ?
                      b.lang :
                  b.getAttribute("xml:lang") ||
                  b.getAttribute("lang"))return c = c.toLowerCase(), c === a ||
              0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);
            return !1
          }
        }), target: function(b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id
        }, root: function(a) {
          return a === o
        }, focus: function(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) &&
              !!(a.type || a.href || ~a.tabIndex)
        }, enabled: function(a) {
          return a.disabled === !1
        }, disabled: function(a) {
          return a.disabled === !0
        }, checked: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected
        }, selected: function(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        }, empty: function(a) {
          for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
          return !0
        }, parent: function(a) {
          return !d.pseudos.empty(a)
        }, header: function(a) {
          return Z.test(a.nodeName)
        }, input: function(a) {
          return Y.test(a.nodeName)
        }, button: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b
        }, text: function(a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type &&
              (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        }, first: oa(function() {
          return [0]
        }), last: oa(function(a, b) {
          return [b - 1]
        }), eq: oa(function(a, b, c) {
          return [0 > c ? c + b : c]
        }), even: oa(function(a, b) {
          for (var c = 0; b > c; c += 2)a.push(c);
          return a
        }), odd: oa(function(a, b) {
          for (var c = 1; b > c; c += 2)a.push(c);
          return a
        }), lt: oa(function(a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
          return a
        }), gt: oa(function(a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
          return a
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})d.pseudos[b] = ma(b);
    for (b in{submit: !0, reset: !0})d.pseudos[b] = na(b);
    function qa() {
    }

    qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function(a, b) {
      var c, e, f, g, h, i, j, k = z[a + " "];
      if (k)return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;
      while (h) {
        (!c || (e = S.exec(h))) &&
        (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) &&
        (c = e.shift(), f.push({value: c, type: e[0].replace(R, " ")}), h = h.slice(c.length));
        for (g in d.filter)!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) ||
        (c = e.shift(), f.push({value: c, type: g, matches: e}), h = h.slice(c.length));
        if (!c)break
      }
      return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
    };
    function ra(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
      return d
    }

    function sa(a, b, c) {
      var d = b.dir, e = c && "parentNode" === d, f = x++;
      return b.first ? function(b, c, f) {
        while (b = b[d])if (1 === b.nodeType || e)return a(b, c, f)
      } : function(b, c, g) {
        var h, i, j = [w, f];
        if (g) {
          while (b = b[d])if ((1 === b.nodeType || e) && a(b, c, g))return !0
        } else while (b = b[d])if (1 === b.nodeType || e) {
          if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)return j[2] = h[2];
          if (i[d] = j, j[2] = a(b, c, g))return !0
        }
      }
    }

    function ta(a) {
      return a.length > 1 ? function(b, c, d) {
        var e = a.length;
        while (e--)if (!a[e](b, c, d))return !1;
        return !0
      } : a[0]
    }

    function ua(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++)ga(a, b[d], c);
      return c
    }

    function va(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) &&
      (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g
    }

    function wa(a, b, c, d, e, f) {
      return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function(f, g, h, i) {
        var j, k, l, m = [], n = [], o = g.length, p = f ||
            ua(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ?
            p :
            va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
        if (c && c(q, r, h, i), d) {
          j = va(r, n), d(j, [], h, i), k = j.length;
          while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
        }
        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;
              while (k--)(l = r[k]) && j.push(q[k] = l);
              e(null, r = [], j, i)
            }
            k = r.length;
            while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
          }
        } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
      })
    }

    function xa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ?
          1 :
          0, k = sa(function(a) {
        return a === b
      }, h, !0), l = sa(function(a) {
        return J(b, a) > -1
      }, h, !0), m = [
        function(a, c, d) {
          var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
          return b = null, e
        }]; f > i; i++)if (c = d.relative[a[i].type])m = [sa(ta(m), c)]; else {
        if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
          for (e = ++i; f > e; e++)if (d.relative[a[e].type])break;
          return wa(i > 1 && ta(m), i > 1 &&
              ra(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""}))
                  .replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)),
              f > e && ra(a))
        }
        m.push(c)
      }
      return ta(m)
    }

    function ya(a, b) {
      var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
        var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f ||
            e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
        for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
          if (e && l) {
            m = 0;
            while (o = a[m++])if (o(l, g, h)) {
              i.push(l);
              break
            }
            k && (w = v)
          }
          c && ((l = !o && l) && p--, f && r.push(l))
        }
        if (p += q, c && q !== p) {
          m = 0;
          while (o = b[m++])o(r, s, g, h);
          if (f) {
            if (p > 0)while (q--)r[q] || s[q] || (s[q] = F.call(i));
            s = va(s)
          }
          H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
        }
        return k && (w = v, j = t), r
      };
      return c ? ia(f) : f
    }

    return h = ga.compile = function(a, b) {
      var c, d = [], e = [], f = A[a + " "];
      if (!f) {
        b || (b = g(a)), c = b.length;
        while (c--)f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
        f = A(a, ya(e, d)), f.selector = a
      }
      return f
    }, i = ga.select = function(a, b, e, f) {
      var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById &&
            9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b)return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length)
        }
        i = X.needsContext.test(a) ? 0 : j.length;
        while (i--) {
          if (k = j[i], d.relative[l = k.type])break;
          if ((m = d.find[l]) &&
              (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && ra(j), !a)return H.apply(e, f), e;
            break
          }
        }
      }
      return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
    }, c.sortStable = u.split("").sort(B).join("") ===
        u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"))
    }), ja(function(a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || ka("type|href|height|width", function(a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    }), c.attributes && ja(function(a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" ===
      a.firstChild.getAttribute("value")
    }) || ka("value", function(a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
    }), ja(function(a) {
      return null == a.getAttribute("disabled")
    }) || ka(K, function(a, b, c) {
      var d;
      return c ?
          void 0 :
          a[b] === !0 ?
              b.toLowerCase() :
              (d = a.getAttributeNode(b)) && d.specified ?
                  d.value :
                  null
    }), ga
  }(a);
  m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
  var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/;

  function w(a, b, c) {
    if (m.isFunction(b))return m.grep(a, function(a, d) {
      return !!b.call(a, d, a) !== c
    });
    if (b.nodeType)return m.grep(a, function(a) {
      return a === b !== c
    });
    if ("string" == typeof b) {
      if (v.test(b))return m.filter(b, a, c);
      b = m.filter(b, a)
    }
    return m.grep(a, function(a) {
      return m.inArray(a, b) >= 0 !== c
    })
  }

  m.filter = function(a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ?
        m.find.matchesSelector(d, a) ?
            [d] :
            [] :
        m.find.matches(a, m.grep(b, function(a) {
          return 1 === a.nodeType
        }))
  }, m.fn.extend({
    find: function(a) {
      var b, c = [], d = this, e = d.length;
      if ("string" != typeof a)return this.pushStack(m(a).filter(function() {
        for (b = 0; e > b; b++)if (m.contains(d[b], this))return !0
      }));
      for (b = 0; e > b; b++)m.find(a, d[b], c);
      return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ?
      this.selector + " " + a :
          a, c
    }, filter: function(a) {
      return this.pushStack(w(this, a || [], !1))
    }, not: function(a) {
      return this.pushStack(w(this, a || [], !0))
    }, is: function(a) {
      return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
    }
  });
  var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function(a, b) {
    var c, d;
    if (!a)return this;
    if ("string" == typeof a) {
      if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ?
              [
                null,
                a,
                null] :
              z.exec(a), !c || !c[1] && b)return !b || b.jquery ?
          (b || x).find(a) :
          this.constructor(b).find(a);
      if (c[1]) {
        if (b = b instanceof m ? b[0] : b, m.merge(this,
                m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) &&
            m.isPlainObject(b))for (c in b)m.isFunction(this[c]) ?
            this[c](b[c]) :
            this.attr(c, b[c]);
        return this
      }
      if (d = y.getElementById(c[2]), d && d.parentNode) {
        if (d.id !== c[2])return x.find(a);
        this.length = 1, this[0] = d
      }
      return this.context = y, this.selector = a, this
    }
    return a.nodeType ?
        (this.context = this[0] = a, this.length = 1, this) :
        m.isFunction(a) ?
            "undefined" != typeof x.ready ?
                x.ready(a) :
                a(m) :
            (void 0 !== a.selector &&
            (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
  };
  A.prototype = m.fn, x = m(y);
  var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
  m.extend({
    dir: function(a, b, c) {
      var d = [], e = a[b];
      while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c)))1 ===
      e.nodeType && d.push(e), e = e[b];
      return d
    }, sibling: function(a, b) {
      for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
      return c
    }
  }), m.fn.extend({
    has: function(a) {
      var b, c = m(a, this), d = c.length;
      return this.filter(function() {
        for (b = 0; d > b; b++)if (m.contains(this, c[b]))return !0
      })
    }, closest: function(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ?
          m(a, b || this.context) :
          0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 &&
          (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
        f.push(c);
        break
      }
      return this.pushStack(f.length > 1 ? m.unique(f) : f)
    }, index: function(a) {
      return a ?
          "string" == typeof a ?
              m.inArray(this[0], m(a)) :
              m.inArray(a.jquery ? a[0] : a, this) :
          this[0] && this[0].parentNode ?
              this.first().prevAll().length :
              -1
    }, add: function(a, b) {
      return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
    }, addBack: function(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
  });
  function D(a, b) {
    do {
      a = a[b];
    } while (a && 1 !== a.nodeType);
    return a
  }

  m.each({
    parent: function(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null
    }, parents: function(a) {
      return m.dir(a, "parentNode")
    }, parentsUntil: function(a, b, c) {
      return m.dir(a, "parentNode", c)
    }, next: function(a) {
      return D(a, "nextSibling")
    }, prev: function(a) {
      return D(a, "previousSibling")
    }, nextAll: function(a) {
      return m.dir(a, "nextSibling")
    }, prevAll: function(a) {
      return m.dir(a, "previousSibling")
    }, nextUntil: function(a, b, c) {
      return m.dir(a, "nextSibling", c)
    }, prevUntil: function(a, b, c) {
      return m.dir(a, "previousSibling", c)
    }, siblings: function(a) {
      return m.sibling((a.parentNode || {}).firstChild, a)
    }, children: function(a) {
      return m.sibling(a.firstChild)
    }, contents: function(a) {
      return m.nodeName(a, "iframe") ?
      a.contentDocument || a.contentWindow.document :
          m.merge([], a.childNodes)
    }
  }, function(a, b) {
    m.fn[a] = function(c, d) {
      var e = m.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d &&
      (e = m.filter(d, e)), this.length > 1 &&
      (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
    }
  });
  var E = /\S+/g, F = {};

  function G(a) {
    var b = F[a] = {};
    return m.each(a.match(E) || [], function(a, c) {
      b[c] = !0
    }), b
  }

  m.Callbacks = function(a) {
    a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
    var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
      for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h &&
      e > f; f++)if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
        c = !1;
        break
      }
      b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
    }, k = {
      add: function() {
        if (h) {
          var d = h.length;
          !function f(b) {
            m.each(b, function(b, c) {
              var d = m.type(c);
              "function" === d ?
              a.unique && k.has(c) || h.push(c) :
              c && c.length && "string" !== d && f(c)
            })
          }(arguments), b ? e = h.length : c && (g = d, j(c))
        }
        return this
      }, remove: function() {
        return h && m.each(arguments, function(a, c) {
          var d;
          while ((d = m.inArray(c, h, d)) > -1)h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
        }), this
      }, has: function(a) {
        return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
      }, empty: function() {
        return h = [], e = 0, this
      }, disable: function() {
        return h = i = c = void 0, this
      }, disabled: function() {
        return !h
      }, lock: function() {
        return i = void 0, c || k.disable(), this
      }, locked: function() {
        return !i
      }, fireWith: function(a, c) {
        return !h || d && !i ||
        (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
      }, fire: function() {
        return k.fireWith(this, arguments), this
      }, fired: function() {
        return !!d
      }
    };
    return k
  }, m.extend({
    Deferred: function(a) {
      var b = [
        [
          "resolve",
          "done",
          m.Callbacks("once memory"),
          "resolved"],
        [
          "reject",
          "fail",
          m.Callbacks("once memory"),
          "rejected"],
        [
          "notify",
          "progress",
          m.Callbacks("memory")]], c = "pending", d = {
        state: function() {
          return c
        }, always: function() {
          return e.done(arguments).fail(arguments), this
        }, then: function() {
          var a = arguments;
          return m.Deferred(function(c) {
            m.each(b, function(b, f) {
              var g = m.isFunction(a[b]) && a[b];
              e[f[1]](function() {
                var a = g && g.apply(this, arguments);
                a && m.isFunction(a.promise) ?
                    a.promise().done(c.resolve).fail(c.reject).progress(c.notify) :
                    c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
              })
            }), a = null
          }).promise()
        }, promise: function(a) {
          return null != a ? m.extend(a, d) : d
        }
      }, e = {};
      return d.pipe = d.then, m.each(b, function(a, f) {
        var g = f[2], h = f[3];
        d[f[1]] = g.add, h && g.add(function() {
          c = h
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
          return e[f[0] + "With"](this === e ? d : this, arguments), this
        }, e[f[0] + "With"] = g.fireWith
      }), d.promise(e), a && a.call(e, e), e
    }, when: function(a) {
      var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ?
          e :
          0, g = 1 === f ? a : m.Deferred(), h = function(a, b, c) {
        return function(e) {
          b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ?
              g.notifyWith(b, c) :
          --f || g.resolveWith(b, c)
        }
      }, i, j, k;
      if (e > 1)for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] &&
      m.isFunction(c[b].promise) ?
          c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) :
          --f;
      return f || g.resolveWith(k, c), g.promise()
    }
  });
  var H;
  m.fn.ready = function(a) {
    return m.ready.promise().done(a), this
  }, m.extend({
    isReady: !1, readyWait: 1, holdReady: function(a) {
      a ? m.readyWait++ : m.ready(!0)
    }, ready: function(a) {
      if (a === !0 ? !--m.readyWait : !m.isReady) {
        if (!y.body)return setTimeout(m.ready);
        m.isReady = !0, a !== !0 && --m.readyWait > 0 ||
        (H.resolveWith(y, [m]), m.fn.triggerHandler &&
        (m(y).triggerHandler("ready"), m(y).off("ready")))
      }
    }
  });
  function I() {
    y.addEventListener ?
        (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) :
        (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
  }

  function J() {
    (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
  }

  m.ready.promise = function(b) {
    if (!H)if (H = m.Deferred(), "complete" === y.readyState)setTimeout(
        m.ready); else if (y.addEventListener)y.addEventListener("DOMContentLoaded", J,
        !1), a.addEventListener("load", J, !1); else {
      y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
      var c = !1;
      try {
        c = null == a.frameElement && y.documentElement
      } catch (d) {
      }
      c && c.doScroll && !function e() {
        if (!m.isReady) {
          try {
            c.doScroll("left")
          } catch (a) {
            return setTimeout(e, 50)
          }
          I(), m.ready()
        }
      }()
    }
    return H.promise(b)
  };
  var K = "undefined", L;
  for (L in m(k))break;
  k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
    var a, b, c, d;
    c = y.getElementsByTagName("body")[0], c && c.style &&
    (b = y.createElement("div"), d = y.createElement(
        "div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(
        d).appendChild(b), typeof b.style.zoom !== K &&
    (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 ===
        b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
  }), function() {
    var a = y.createElement("div");
    if (null == k.deleteExpando) {
      k.deleteExpando = !0;
      try {
        delete a.test
      } catch (b) {
        k.deleteExpando = !1
      }
    }
    a = null
  }(), m.acceptData = function(a) {
    var b = m.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
    return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
  };
  var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g;

  function O(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(N, "-$1").toLowerCase();
      if (c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ?
              !0 :
              "false" === c ?
                  !1 :
                  "null" === c ?
                      null :
                      +c + "" === c ?
                          +c :
                          M.test(c) ?
                              m.parseJSON(c) :
                              c
        } catch (e) {
        }
        m.data(a, b, c)
      } else c = void 0
    }
    return c
  }

  function P(a) {
    var b;
    for (b in a)if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b)return !1;

    return !0
  }

  function Q(a, b, d, e) {
    if (m.acceptData(a)) {
      var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
      if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)return k ||
      (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] ||
      (j[k] = i ? {} : {toJSON: m.noop}), ("object" == typeof b || "function" == typeof b) &&
      (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e ||
      (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" ==
      typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
    }
  }

  function R(a, b, c) {
    if (m.acceptData(a)) {
      var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          m.isArray(b) ?
              b = b.concat(m.map(b, m.camelCase)) :
              b in d ?
                  b = [b] :
                  (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
          while (e--)delete d[b[e]];
          if (c ? !P(d) : !m.isEmptyObject(d))return
        }
        (c || (delete g[h].data, P(g[h]))) &&
        (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
      }
    }
  }

  m.extend({
    cache: {},
    noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
    hasData: function(a) {
      return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
    },
    data: function(a, b, c) {
      return Q(a, b, c)
    },
    removeData: function(a, b) {
      return R(a, b)
    },
    _data: function(a, b, c) {
      return Q(a, b, c, !0)
    },
    _removeData: function(a, b) {
      return R(a, b, !0)
    }
  }), m.fn.extend({
    data: function(a, b) {
      var c, d, e, f = this[0], g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
          c = g.length;
          while (c--)g[c] &&
          (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
          m._data(f, "parsedAttrs", !0)
        }
        return e
      }
      return "object" == typeof a ? this.each(function() {
        m.data(this, a)
      }) : arguments.length > 1 ? this.each(function() {
        m.data(this, a, b)
      }) : f ? O(f, a, m.data(f, a)) : void 0
    }, removeData: function(a) {
      return this.each(function() {
        m.removeData(this, a)
      })
    }
  }), m.extend({
    queue: function(a, b, c) {
      var d;
      return a ?
          (b = (b || "fx") + "queue", d = m._data(a, b), c &&
          (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) :
          void 0
    }, dequeue: function(a, b) {
      b = b || "fx";
      var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function() {
        m.dequeue(a, b)
      };
      "inprogress" === e && (e = c.shift(), d--), e &&
      ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f &&
      f.empty.fire()
    }, _queueHooks: function(a, b) {
      var c = b + "queueHooks";
      return m._data(a, c) || m._data(a, c, {
            empty: m.Callbacks("once memory").add(function() {
              m._removeData(a, b + "queue"), m._removeData(a, c)
            })
          })
    }
  }), m.fn.extend({
    queue: function(a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ?
          m.queue(this[0], a) :
          void 0 === b ?
              this :
              this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
              })
    }, dequeue: function(a) {
      return this.each(function() {
        m.dequeue(this, a)
      })
    }, clearQueue: function(a) {
      return this.queue(a || "fx", [])
    }, promise: function(a, b) {
      var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function() {
        --d || e.resolveWith(f, [f])
      };
      "string" != typeof a && (b = a, a = void 0), a = a || "fx";
      while (g--)c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b)
    }
  });
  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = [
    "Top",
    "Right",
    "Bottom",
    "Left"], U = function(a, b) {
    return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
  }, V = m.access = function(a, b, c, d, e, f, g) {
    var h = 0, i = a.length, j = null == c;
    if ("object" === m.type(c)) {
      e = !0;
      for (h in c)m.access(a, b, h, c[h], !0, f, g)
    } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j &&
        (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
          return j.call(m(a), c)
        })), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
  }, W = /^(?:checkbox|radio)$/i;
  !function() {
    var a = y.createElement("input"), b = y.createElement("div"), c = y.createDocumentFragment();
    if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 ===
            b.firstChild.nodeType, k.tbody = !b.getElementsByTagName(
            "tbody").length, k.htmlSerialize = !!b.getElementsByTagName(
            "link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav")
                .cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(
            a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(
            !0).lastChild.defaultValue, c.appendChild(
            b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(
            !0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent &&
        (b.attachEvent("onclick", function() {
          k.noCloneEvent = !1
        }), b.cloneNode(!0).click()), null == k.deleteExpando) {
      k.deleteExpando = !0;
      try {
        delete b.test
      } catch (d) {
        k.deleteExpando = !1
      }
    }
  }(), function() {
    var b, c, d = y.createElement("div");
    for (b in{submit: !0, change: !0, focusin: !0})c = "on" + b, (k[b + "Bubbles"] = c in a) ||
    (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
    d = null
  }();
  var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/;

  function aa() {
    return !0
  }

  function ba() {
    return !1
  }

  function ca() {
    try {
      return y.activeElement
    } catch (a) {
    }
  }

  m.event = {
    global: {},
    add: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
      if (r) {
        c.handler && (i = c, c = i.handler, e = i.selector), c.guid ||
        (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) ||
        (k = r.handle = function(a) {
          return typeof m === K || a && m.event.triggered === a.type ?
              void 0 :
              m.event.dispatch.apply(k.elem, arguments)
        }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
        while (h--)f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o &&
        (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) ||
            o, j = m.event.special[o] || {}, l = m.extend({
          type: o,
          origType: q,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && m.expr.match.needsContext.test(e),
          namespace: p.join(".")
        }, i), (n = g[o]) ||
        (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 ||
        (a.addEventListener ?
            a.addEventListener(o, k, !1) :
        a.attachEvent && a.attachEvent("on" + o, k))), j.add &&
        (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ?
            n.splice(n.delegateCount++, 0, l) :
            n.push(l), m.event.global[o] = !0);
        a = null
      }
    },
    remove: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
      if (r && (k = r.events)) {
        b = (b || "").match(E) || [""], j = b.length;
        while (j--)if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".")
                .sort(), o) {
          l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] ||
              [], h = h[2] &&
              new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
          while (f--)g = n[f], !e && q !== g.origType || c && c.guid !== g.guid ||
          h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) ||
          (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
          i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 ||
          m.removeEvent(a, o, r.handle), delete k[o])
        } else for (o in k)m.event.remove(a, o + b[j], c, d, !0);
        m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
      }
    },
    trigger: function(b, c, d, e) {
      var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, "type") ? b.type : b, q = j.call(b,
          "namespace") ? b.namespace.split(".") : [];
      if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType &&
          !$.test(p + m.event.triggered) &&
          (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") <
              0 && "on" + p, b = b[m.expando] ?
              b :
              new m.Event(p, "object" == typeof b && b), b.isTrigger = e ?
              2 :
              3, b.namespace = q.join("."), b.namespace_re = b.namespace ?
              new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") :
              null, b.result = void 0, b.target || (b.target = d), c = null == c ?
              [b] :
              m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger ||
          k.trigger.apply(d, c) !== !1)) {
        if (!e && !k.noBubble && !m.isWindow(d)) {
          for (i = k.delegateType || p, $.test(i + p) ||
          (h = h.parentNode); h; h = h.parentNode)o.push(h), l = h;
          l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
        }
        n = 0;
        while ((h = o[n++]) && !b.isPropagationStopped())b.type = n > 1 ?
            i :
        k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f &&
        f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) &&
        (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
        if (b.type = p, !e && !b.isDefaultPrevented() &&
            (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] &&
            !m.isWindow(d)) {
          l = d[g], l && (d[g] = null), m.event.triggered = p;
          try {
            d[p]()
          } catch (r) {
          }
          m.event.triggered = void 0, l && (d[g] = l)
        }
        return b.result
      }
    },
    dispatch: function(a) {
      a = m.event.fix(a);
      var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") ||
          {})[a.type] || [], k = m.event.special[a.type] || {};
      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = m.event.handlers.call(this, a, j), b = 0;
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, g = 0;
          while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re ||
          a.namespace_re.test(e.namespace)) &&
          (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle ||
          e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 &&
          (a.preventDefault(), a.stopPropagation()))
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result
      }
    },
    handlers: function(a, b) {
      var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i != this; i = i.parentNode ||
          this)if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
        for (e = [], f = 0; h > f; f++)d = b[f], c = d.selector + " ", void 0 === e[c] &&
        (e[c] = d.needsContext ?
        m(c, this).index(i) >= 0 :
            m.find(c, this, null, [i]).length), e[c] && e.push(d);
        e.length && g.push({elem: i, handlers: e})
      }
      return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
    },
    fix: function(a) {
      if (a[m.expando])return a;
      var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
      g || (this.fixHooks[e] = g = Z.test(e) ?
          this.mouseHooks :
          Y.test(e) ?
              this.keyHooks :
          {}), d = g.props ?
          this.props.concat(g.props) :
          this.props, a = new m.Event(f), b = d.length;
      while (b--)c = d[b], a[c] = f[c];
      return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType &&
      (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "), filter: function(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "), filter: function(a, b) {
        var c, d, e, f = b.button, g = b.fromElement;
        return null == a.pageX && null != b.clientX &&
        (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX +
            (e && e.scrollLeft || c && c.scrollLeft || 0) -
            (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY +
            (e && e.scrollTop || c && c.scrollTop || 0) -
            (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g &&
        (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f ||
        (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
      }
    },
    special: {
      load: {noBubble: !0}, focus: {
        trigger: function() {
          if (this !== ca() && this.focus)try {
            return this.focus(), !1
          } catch (a) {
          }
        }, delegateType: "focusin"
      }, blur: {
        trigger: function() {
          return this === ca() && this.blur ? (this.blur(), !1) : void 0
        }, delegateType: "focusout"
      }, click: {
        trigger: function() {
          return m.nodeName(this, "input") && "checkbox" === this.type && this.click ?
              (this.click(), !1) :
              void 0
        }, _default: function(a) {
          return m.nodeName(a.target, "a")
        }
      }, beforeunload: {
        postDispatch: function(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
        }
      }
    },
    simulate: function(a, b, c, d) {
      var e = m.extend(new m.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
      d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() &&
      c.preventDefault()
    }
  }, m.removeEvent = y.removeEventListener ? function(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1)
  } : function(a, b, c) {
    var d = "on" + b;
    a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
  }, m.Event = function(a, b) {
    return this instanceof m.Event ?
        (a && a.type ?
            (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented ||
            void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) :
            this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp ||
            m.now(), void(this[m.expando] = !0)) :
        new m.Event(a, b)
  }, m.Event.prototype = {
    isDefaultPrevented: ba,
    isPropagationStopped: ba,
    isImmediatePropagationStopped: ba,
    preventDefault: function() {
      var a = this.originalEvent;
      this.isDefaultPrevented = aa, a &&
      (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
    },
    stopPropagation: function() {
      var a = this.originalEvent;
      this.isPropagationStopped = aa, a &&
      (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
    },
    stopImmediatePropagation: function() {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = aa, a && a.stopImmediatePropagation &&
      a.stopImmediatePropagation(), this.stopPropagation()
    }
  }, m.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(a, b) {
    m.event.special[a] = {
      delegateType: b, bindType: b, handle: function(a) {
        var c, d = this, e = a.relatedTarget, f = a.handleObj;
        return (!e || e !== d && !m.contains(d, e)) &&
        (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
      }
    }
  }), k.submitBubbles || (m.event.special.submit = {
    setup: function() {
      return m.nodeName(this, "form") ?
          !1 :
          void m.event.add(this, "click._submit keypress._submit", function(a) {
            var b = a.target, c = m.nodeName(b, "input") || m.nodeName(b, "button") ?
                b.form :
                void 0;
            c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
              a._submit_bubble = !0
            }), m._data(c, "submitBubbles", !0))
          })
    }, postDispatch: function(a) {
      a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger &&
      m.event.simulate("submit", this.parentNode, a, !0))
    }, teardown: function() {
      return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
    }
  }), k.changeBubbles || (m.event.special.change = {
    setup: function() {
      return X.test(this.nodeName) ?
          (("checkbox" === this.type || "radio" === this.type) &&
          (m.event.add(this, "propertychange._change", function(a) {
            "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
          }), m.event.add(this, "click._change", function(a) {
            this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate(
                "change", this, a, !0)
          })), !1) :
          void m.event.add(this, "beforeactivate._change", function(a) {
            var b = a.target;
            X.test(b.nodeName) && !m._data(b, "changeBubbles") &&
            (m.event.add(b, "change._change", function(a) {
              !this.parentNode || a.isSimulated || a.isTrigger ||
              m.event.simulate("change", this.parentNode, a, !0)
            }), m._data(b, "changeBubbles", !0))
          })
    }, handle: function(a) {
      var b = a.target;
      return this !== b || a.isSimulated || a.isTrigger ||
      "radio" !== b.type && "checkbox" !== b.type ?
          a.handleObj.handler.apply(this, arguments) :
          void 0
    }, teardown: function() {
      return m.event.remove(this, "._change"), !X.test(this.nodeName)
    }
  }), k.focusinBubbles || m.each({focus: "focusin", blur: "focusout"}, function(a, b) {
    var c = function(a) {
      m.event.simulate(b, a.target, m.event.fix(a), !0)
    };
    m.event.special[b] = {
      setup: function() {
        var d = this.ownerDocument || this, e = m._data(d, b);
        e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
      }, teardown: function() {
        var d = this.ownerDocument || this, e = m._data(d, b) - 1;
        e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
      }
    }
  }), m.fn.extend({
    on: function(a, b, c, d, e) {
      var f, g;
      if ("object" == typeof a) {
        "string" != typeof b && (c = c || b, b = void 0);
        for (f in a)this.on(f, b, c, a[f], e);
        return this
      }
      if (null == c && null == d ?
              (d = b, c = b = void 0) :
          null == d &&
          ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d ===
          !1)d = ba; else if (!d)return this;
      return 1 === e && (g = d, d = function(a) {
        return m().off(a), g.apply(this, arguments)
      }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() {
        m.event.add(this, a, d, c, b)
      })
    }, one: function(a, b, c, d) {
      return this.on(a, b, c, d, 1)
    }, off: function(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj)return d = a.handleObj, m(a.delegateTarget)
          .off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector,
              d.handler), this;
      if ("object" == typeof a) {
        for (e in a)this.off(e, b, a[e]);
        return this
      }
      return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 &&
      (c = ba), this.each(function() {
        m.event.remove(this, a, c, b)
      })
    }, trigger: function(a, b) {
      return this.each(function() {
        m.event.trigger(a, b, this)
      })
    }, triggerHandler: function(a, b) {
      var c = this[0];
      return c ? m.event.trigger(a, b, c, !0) : void 0
    }
  });
  function da(a) {
    var b = ea.split("|"), c = a.createDocumentFragment();
    if (c.createElement)while (b.length)c.createElement(b.pop());
    return c
  }

  var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", fa = / jQuery\d+="(?:null|\d+)"/g, ga = new RegExp("<(?:" +
      ea +
      ")[\\s/>]", "i"), ha = /^\s+/, ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ja = /<([\w:]+)/, ka = /<tbody/i, la = /<|&#?\w+;/, ma = /<(?:script|style|link)/i, na = /checked\s*(?:[^=]|=\s*.checked.)/i, oa = /^$|\/(?:java|ecma)script/i, pa = /^true\/(.*)/, qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ra = {
    option: [
      1,
      "<select multiple='multiple'>",
      "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  }, sa = da(y), ta = sa.appendChild(y.createElement("div"));
  ra.optgroup = ra.option, ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead, ra.th = ra.td;
  function ua(a, b) {
    var c, d, e = 0, f = typeof a.getElementsByTagName !== K ?
        a.getElementsByTagName(b || "*") :
        typeof a.querySelectorAll !== K ?
            a.querySelectorAll(b || "*") :
            void 0;
    if (!f)for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)!b || m.nodeName(d, b) ?
        f.push(d) :
        m.merge(f, ua(d, b));
    return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
  }

  function va(a) {
    W.test(a.type) && (a.defaultChecked = a.checked)
  }

  function wa(a, b) {
    return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ?
    a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) :
        a
  }

  function xa(a) {
    return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
  }

  function ya(a) {
    var b = pa.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a
  }

  function za(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++)m._data(c, "globalEval",
        !b || m._data(b[d], "globalEval"))
  }

  function Aa(a, b) {
    if (1 === b.nodeType && m.hasData(a)) {
      var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
      if (h) {
        delete g.handle, g.events = {};
        for (c in h)for (d = 0, e = h[c].length; e > d; d++)m.event.add(b, c, h[c][d])
      }
      g.data && (g.data = m.extend({}, g.data))
    }
  }

  function Ba(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
        e = m._data(b);
        for (d in e.events)m.removeEvent(b, d, e.handle);
        b.removeAttribute(m.expando)
      }
      "script" === c && b.text !== a.text ?
          (xa(b).text = a.text, ya(b)) :
          "object" === c ?
              (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML &&
              !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) :
              "input" === c && W.test(a.type) ?
                  (b.defaultChecked = b.checked = a.checked, b.value !== a.value &&
                  (b.value = a.value)) :
                  "option" === c ?
                      b.defaultSelected = b.selected = a.defaultSelected :
                  ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
  }

  m.extend({
    clone: function(a, b, c) {
      var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
      if (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">") ?
              f = a.cloneNode(!0) :
              (ta.innerHTML = a.outerHTML, ta.removeChild(f = ta.firstChild)), !(k.noCloneEvent &&
          k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))for (d = ua(
          f), h = ua(a), g = 0; null != (e = h[g]); ++g)d[g] && Ba(e, d[g]);
      if (b)if (c)for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++)Aa(e,
          d[g]); else Aa(a, f);
      return d = ua(f, "script"), d.length > 0 && za(d, !i && ua(a, "script")), d = h = e = null, f
    }, buildFragment: function(a, b, c, d) {
      for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n >
      q; q++)if (f = a[q], f || 0 === f)if ("object" === m.type(f))m.merge(p,
          f.nodeType ? [f] : f); else if (la.test(f)) {
        h = h || o.appendChild(b.createElement("div")), i = (ja.exec(f) ||
        ["", ""])[1].toLowerCase(), l = ra[i] || ra._default, h.innerHTML = l[1] +
            f.replace(ia, "<$1></$2>") + l[2], e = l[0];
        while (e--)h = h.lastChild;
        if (!k.leadingWhitespace && ha.test(f) &&
            p.push(b.createTextNode(ha.exec(f)[0])), !k.tbody) {
          f = "table" !== i || ka.test(f) ?
              "<table>" !== l[1] || ka.test(f) ?
                  0 :
                  h :
              h.firstChild, e = f && f.childNodes.length;
          while (e--)m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length &&
          f.removeChild(j)
        }
        m.merge(p, h.childNodes), h.textContent = "";
        while (h.firstChild)h.removeChild(h.firstChild);
        h = o.lastChild
      } else p.push(b.createTextNode(f));
      h && o.removeChild(h), k.appendChecked || m.grep(ua(p, "input"), va), q = 0;
      while (f = p[q++])if ((!d || -1 === m.inArray(f, d)) &&
          (g = m.contains(f.ownerDocument, f), h = ua(o.appendChild(f), "script"), g && za(h), c)) {
        e = 0;
        while (f = h[e++])oa.test(f.type || "") && c.push(f)
      }
      return h = null, o
    }, cleanData: function(a, b) {
      for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null !=
      (d = a[h]); h++)if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
        if (g.events)for (e in g.events)n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
        j[f] && (delete j[f], l ?
            delete d[i] :
            typeof d.removeAttribute !== K ?
                d.removeAttribute(i) :
                d[i] = null, c.push(f))
      }
    }
  }), m.fn.extend({
    text: function(a) {
      return V(this, function(a) {
        return void 0 === a ?
            m.text(this) :
            this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
      }, null, a, arguments.length)
    }, append: function() {
      return this.domManip(arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = wa(this, a);
          b.appendChild(a)
        }
      })
    }, prepend: function() {
      return this.domManip(arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = wa(this, a);
          b.insertBefore(a, b.firstChild)
        }
      })
    }, before: function() {
      return this.domManip(arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this)
      })
    }, after: function() {
      return this.domManip(arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
      })
    }, remove: function(a, b) {
      for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b ||
      1 !== c.nodeType || m.cleanData(ua(c)), c.parentNode &&
      (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")), c.parentNode.removeChild(c));
      return this
    }, empty: function() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && m.cleanData(ua(a, !1));
        while (a.firstChild)a.removeChild(a.firstChild);
        a.options && m.nodeName(a, "select") && (a.options.length = 0)
      }
      return this
    }, clone: function(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
        return m.clone(this, a, b)
      })
    }, html: function(a) {
      return V(this, function(a) {
        var b = this[0] || {}, c = 0, d = this.length;
        if (void 0 === a)return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;
        if (!("string" != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) ||
            !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || ["", ""])[1].toLowerCase()])) {
          a = a.replace(ia, "<$1></$2>");
          try {
            for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType &&
            (m.cleanData(ua(b, !1)), b.innerHTML = a);
            b = 0
          } catch (e) {
          }
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    }, replaceWith: function() {
      var a = arguments[0];
      return this.domManip(arguments, function(b) {
        a = this.parentNode, m.cleanData(ua(this)), a && a.replaceChild(b, this)
      }), a && (a.length || a.nodeType) ? this : this.remove()
    }, detach: function(a) {
      return this.remove(a, !0)
    }, domManip: function(a, b) {
      a = e.apply([], a);
      var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(
          p);
      if (q || l > 1 && "string" == typeof p && !k.checkClone && na.test(p))return this.each(
          function(c) {
            var d = n.eq(c);
            q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
          });
      if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 ===
          i.childNodes.length && (i = c), c)) {
        for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++)d = i, j !== o &&
        (d = m.clone(d, !0, !0), f && m.merge(g, ua(d, "script"))), b.call(this[j], d, j);
        if (f)for (h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0; f >
        j; j++)d = g[j], oa.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) &&
        (d.src ?
        m._evalUrl && m._evalUrl(d.src) :
            m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qa, "")));
        i = c = null
      }
      return this
    }
  }), m.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(a, b) {
    m.fn[a] = function(a) {
      for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)c = d === h ?
          this :
          this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
      return this.pushStack(e)
    }
  });
  var Ca, Da = {};

  function Ea(b, c) {
    var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle &&
    (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
    return e.detach(), f
  }

  function Fa(a) {
    var b = y, c = Da[a];
    return c || (c = Ea(a, b), "none" !== c && c ||
    (Ca = (Ca || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(
        b.documentElement), b = (Ca[0].contentWindow ||
    Ca[0].contentDocument).document, b.write(), b.close(), c = Ea(a, b), Ca.detach()), Da[a] = c), c
  }

  !function() {
    var a;
    k.shrinkWrapBlocks = function() {
      if (null != a)return a;
      a = !1;
      var b, c, d;
      return c = y.getElementsByTagName("body")[0], c && c.style ?
          (b = y.createElement("div"), d = y.createElement(
              "div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(
              d).appendChild(b), typeof b.style.zoom !== K &&
          (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(
              y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(
              d), a) :
          void 0
    }
  }();
  var Ga = /^margin/, Ha = new RegExp("^(" + S +
      ")(?!px)[a-z%]+$", "i"), Ia, Ja, Ka = /^(top|right|bottom|left)$/;
  a.getComputedStyle ? (Ia = function(b) {
    return b.ownerDocument.defaultView.opener ?
        b.ownerDocument.defaultView.getComputedStyle(b, null) :
        a.getComputedStyle(b, null)
  }, Ja = function(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Ia(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c &&
    ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Ha.test(g) && Ga.test(b) &&
    (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 ===
    g ? g : g + ""
  }) : y.documentElement.currentStyle && (Ia = function(a) {
    return a.currentStyle
  }, Ja = function(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Ia(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ha.test(
        g) && !Ka.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f &&
    (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft +
        "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
  });
  function La(a, b) {
    return {
      get: function() {
        var c = a();
        if (null != c)return c ? void delete this.get : (this.get = b).apply(this, arguments)
      }
    }
  }

  !function() {
    var b, c, d, e, f, g, h;
    if (b = y.createElement(
            "div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName(
            "a")[0], c = d && d.style) {
      c.cssText = "float:left;opacity:.5", k.opacity = "0.5" ===
          c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(
          !0).style.backgroundClip = "", k.clearCloneStyle = "content-box" ===
          b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing ||
          "" === c.WebkitBoxSizing, m.extend(k, {
        reliableHiddenOffsets: function() {
          return null == g && i(), g
        }, boxSizingReliable: function() {
          return null == f && i(), f
        }, pixelPosition: function() {
          return null == e && i(), e
        }, reliableMarginRight: function() {
          return null == h && i(), h
        }
      });
      function i() {
        var b, c, d, i;
        c = y.getElementsByTagName("body")[0], c && c.style &&
        (b = y.createElement("div"), d = y.createElement(
            "div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(
            d)
            .appendChild(
                b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle &&
        (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" ===
            (a.getComputedStyle(b, null) || {width: "4px"}).width, i = b.appendChild(
            y.createElement(
                "div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat(
            (a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(
            i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName(
            "td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 ===
            i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 ===
            i[0].offsetHeight), c.removeChild(d))
      }
    }
  }(), m.swap = function(a, b, c, d) {
    var e, f, g = {};
    for (f in b)g[f] = a.style[f], a.style[f] = b[f];
    e = c.apply(a, d || []);
    for (f in b)a.style[f] = g[f];
    return e
  };
  var Ma = /alpha\([^)]*\)/i, Na = /opacity\s*=\s*([^)]*)/, Oa = /^(none|table(?!-c[ea]).+)/, Pa = new RegExp("^(" +
      S + ")(.*)$", "i"), Qa = new RegExp("^([+-])=(" + S + ")", "i"), Ra = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  }, Sa = {letterSpacing: "0", fontWeight: "400"}, Ta = ["Webkit", "O", "Moz", "ms"];

  function Ua(a, b) {
    if (b in a)return b;
    var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Ta.length;
    while (e--)if (b = Ta[e] + c, b in a)return b;
    return d
  }

  function Va(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style &&
    (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ?
        (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) &&
        (f[g] = m._data(d, "olddisplay", Fa(d.nodeName)))) :
        (e = U(d), (c && "none" !== c || !e) &&
        m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
    for (g = 0; h > g; g++)d = a[g], d.style &&
    (b && "none" !== d.style.display && "" !== d.style.display ||
    (d.style.display = b ? f[g] || "" : "none"));
    return a
  }

  function Wa(a, b, c) {
    var d = Pa.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
  }

  function Xa(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 >
    f; f += 2)"margin" === c && (g += m.css(a, c + T[f], !0, e)), d ?
        ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c &&
        (g -= m.css(a, "border" + T[f] + "Width", !0, e))) :
        (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c &&
        (g += m.css(a, "border" + T[f] + "Width", !0, e)));
    return g
  }

  function Ya(a, b, c) {
    var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ia(a), g = k.boxSizing &&
        "border-box" === m.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (e = Ja(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ha.test(e))return e;
      d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
    }
    return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px"
  }

  m.extend({
    cssHooks: {
      opacity: {
        get: function(a, b) {
          if (b) {
            var c = Ja(a, "opacity");
            return "" === c ? "1" : c
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
    cssProps: {"float": k.cssFloat ? "cssFloat" : "styleFloat"},
    style: function(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e, f, g, h = m.camelCase(b), i = a.style;
        if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)), g = m.cssHooks[b] ||
                m.cssHooks[h], void 0 === c)return g && "get" in g &&
        void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (f = typeof c, "string" === f && (e = Qa.exec(c)) &&
            (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c &&
            ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c ||
            0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g &&
            void 0 === (c = g.set(a, c, d)))))try {
          i[b] = c
        } catch (j) {
        }
      }
    },
    css: function(a, b, c, d) {
      var e, f, g, h = m.camelCase(b);
      return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)), g = m.cssHooks[b] ||
          m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f &&
      (f = Ja(a, b, d)), "normal" === f && b in Sa && (f = Sa[b]), "" === c || c ?
          (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) :
          f
    }
  }), m.each(["height", "width"], function(a, b) {
    m.cssHooks[b] = {
      get: function(a, c, d) {
        return c ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Ra, function() {
          return Ya(a, b, d)
        }) : Ya(a, b, d) : void 0
      }, set: function(a, c, d) {
        var e = d && Ia(a);
        return Wa(a, c,
            d ? Xa(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
      }
    }
  }), k.opacity || (m.cssHooks.opacity = {
    get: function(a, b) {
      return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ?
      .01 * parseFloat(RegExp.$1) + "" :
          b ?
              "1" :
              ""
    }, set: function(a, b) {
      var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ?
      "alpha(opacity=" + 100 * b + ")" :
          "", f = d && d.filter || c.filter || "";
      c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Ma, "")) && c.removeAttribute &&
      (c.removeAttribute("filter"), "" === b || d && !d.filter) ||
      (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e)
    }
  }), m.cssHooks.marginRight = La(k.reliableMarginRight, function(a, b) {
    return b ? m.swap(a, {display: "inline-block"}, Ja, [a, "marginRight"]) : void 0
  }), m.each({margin: "", padding: "", border: "Width"}, function(a, b) {
    m.cssHooks[a + b] = {
      expand: function(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a +
        T[d] + b] = f[d] || f[d - 2] || f[0];
        return e
      }
    }, Ga.test(a) || (m.cssHooks[a + b].set = Wa)
  }), m.fn.extend({
    css: function(a, b) {
      return V(this, function(a, b, c) {
        var d, e, f = {}, g = 0;
        if (m.isArray(b)) {
          for (d = Ia(a), e = b.length; e > g; g++)f[b[g]] = m.css(a, b[g], !1, d);
          return f
        }
        return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
      }, a, b, arguments.length > 1)
    }, show: function() {
      return Va(this, !0)
    }, hide: function() {
      return Va(this)
    }, toggle: function(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
        U(this) ? m(this).show() : m(this).hide()
      })
    }
  });
  function Za(a, b, c, d, e) {
    return new Za.prototype.init(a, b, c, d, e)
  }

  m.Tween = Za, Za.prototype = {
    constructor: Za, init: function(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e ||
          "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f ||
          (m.cssNumber[c] ? "" : "px")
    }, cur: function() {
      var a = Za.propHooks[this.prop];
      return a && a.get ? a.get(this) : Za.propHooks._default.get(this)
    }, run: function(a) {
      var b, c = Za.propHooks[this.prop];
      return this.options.duration ?
          this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1,
              this.options.duration) :
          this.pos = b = a, this.now = (this.end - this.start) * b +
          this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c &&
      c.set ?
          c.set(this) :
          Za.propHooks._default.set(this), this
    }
  }, Za.prototype.init.prototype = Za.prototype, Za.propHooks = {
    _default: {
      get: function(a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ?
            (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) :
            a.elem[a.prop]
      }, set: function(a) {
        m.fx.step[a.prop] ?
            m.fx.step[a.prop](a) :
            a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ?
                m.style(a.elem, a.prop, a.now + a.unit) :
                a.elem[a.prop] = a.now
      }
    }
  }, Za.propHooks.scrollTop = Za.propHooks.scrollLeft = {
    set: function(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }
  }, m.easing = {
    linear: function(a) {
      return a
    }, swing: function(a) {
      return .5 - Math.cos(a * Math.PI) / 2
    }
  }, m.fx = Za.prototype.init, m.fx.step = {};
  var $a, _a, ab = /^(?:toggle|show|hide)$/, bb = new RegExp("^(?:([+-])=|)(" + S +
      ")([a-z%]*)$", "i"), cb = /queueHooks$/, db = [ib], eb = {
    "*": [
      function(a, b) {
        var c = this.createTween(a, b), d = c.cur(), e = bb.exec(b), f = e && e[3] ||
            (m.cssNumber[a] ? "" : "px"), g = (m.cssNumber[a] || "px" !== f && +d) &&
            bb.exec(m.css(c.elem, a)), h = 1, i = 20;
        if (g && g[3] !== f) {
          f = f || g[3], e = e || [], g = +d || 1;
          do {
            h = h || ".5", g /= h, m.style(c.elem, a, g + f);
          } while (h !== (h = c.cur() / d) &&
          1 !== h && --i)
        }
        return e &&
        (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
      }]
  };

  function fb() {
    return setTimeout(function() {
      $a = void 0
    }), $a = m.now()
  }

  function gb(a, b) {
    var c, d = {height: a}, e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b)c = T[e], d["margin" + c] = d["padding" + c] = a;
    return b && (d.opacity = d.width = a), d
  }

  function hb(a, b, c) {
    for (var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length; g >
    f; f++)if (d = e[f].call(c, b, a))return d
  }

  function ib(a, b, c) {
    var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(
        a, "fxshow");
    c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued &&
    (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
      h.unqueued || i()
    }), h.unqueued++, n.always(function() {
      n.always(function() {
        h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
      })
    })), 1 === a.nodeType && ("height" in b || "width" in b) &&
    (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" ===
    j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j, "inline" === l &&
    "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName) ?
        p.zoom = 1 :
        p.display = "inline-block")), c.overflow &&
    (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() {
      p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
    }));
    for (d in b)if (e = b[d], ab.exec(e)) {
      if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
        if ("show" !== e || !r || void 0 === r[d])continue;
        q = !0
      }
      o[d] = r && r[d] || m.style(a, d)
    } else j = void 0;
    if (m.isEmptyObject(o))"inline" === ("none" === j ? Fa(a.nodeName) : j) &&
    (p.display = j); else {
      r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ?
          m(a).show() :
          n.done(function() {
            m(a).hide()
          }), n.done(function() {
        var b;
        m._removeData(a, "fxshow");
        for (b in o)m.style(a, b, o[b])
      });
      for (d in o)g = hb(q ? r[d] : 0, d, n), d in r ||
      (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
    }
  }

  function jb(a, b) {
    var c, d, e, f, g;
    for (c in a)if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) &&
        (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g &&
        "expand" in g) {
      f = g.expand(f), delete a[d];
      for (c in f)c in a || (a[c] = f[c], b[c] = e)
    } else b[d] = e
  }

  function kb(a, b, c) {
    var d, e, f = 0, g = db.length, h = m.Deferred().always(function() {
      delete i.elem
    }), i = function() {
      if (e)return !1;
      for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration ||
          0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
      return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
    }, j = h.promise({
      elem: a,
      props: m.extend({}, b),
      opts: m.extend(!0, {specialEasing: {}}, c),
      originalProperties: b,
      originalOptions: c,
      startTime: $a || fb(),
      duration: c.duration,
      tweens: [],
      createTween: function(b, c) {
        var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
        return j.tweens.push(d), d
      },
      stop: function(b) {
        var c = 0, d = b ? j.tweens.length : 0;
        if (e)return this;
        for (e = !0; d > c; c++)j.tweens[c].run(1);
        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
      }
    }), k = j.props;
    for (jb(k, j.opts.specialEasing); g > f; f++)if (d = db[f].call(j, a, k, j.opts))return d;
    return m.map(k, hb, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(
        m.extend(i, {elem: a, anim: j, queue: j.opts.queue})), j.progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
  }

  m.Animation = m.extend(kb, {
    tweener: function(a, b) {
      m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
      for (var c, d = 0, e = a.length; e > d; d++)c = a[d], eb[c] = eb[c] || [], eb[c].unshift(b)
    }, prefilter: function(a, b) {
      b ? db.unshift(a) : db.push(a)
    }
  }), m.speed = function(a, b, c) {
    var d = a && "object" == typeof a ?
        m.extend({}, a) :
    {
      complete: c || !c && b || m.isFunction(a) && a,
      duration: a,
      easing: c && b || b && !m.isFunction(b) && b
    };
    return d.duration = m.fx.off ?
        0 :
        "number" == typeof d.duration ?
            d.duration :
            d.duration in m.fx.speeds ?
                m.fx.speeds[d.duration] :
                m.fx.speeds._default, (null == d.queue || d.queue === !0) &&
    (d.queue = "fx"), d.old = d.complete, d.complete = function() {
      m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
    }, d
  }, m.fn.extend({
    fadeTo: function(a, b, c, d) {
      return this.filter(U).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
    }, animate: function(a, b, c, d) {
      var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function() {
        var b = kb(this, m.extend({}, a), f);
        (e || m._data(this, "finish")) && b.stop(!0)
      };
      return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
    }, stop: function(a, b, c) {
      var d = function(a) {
        var b = a.stop;
        delete a.stop, b(c)
      };
      return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 &&
      this.queue(a || "fx", []), this.each(function() {
        var b = !0, e = null != a && a + "queueHooks", f = m.timers, g = m._data(this);
        if (e)g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && cb.test(e) &&
        d(g[e]);
        for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a ||
        (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        (b || !c) && m.dequeue(this, a)
      })
    }, finish: function(a) {
      return a !== !1 && (a = a || "fx"), this.each(function() {
        var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ?
            d.length :
            0;
        for (c.finish = !0, m.queue(this, a, []), e && e.stop &&
        e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a &&
        (f[b].anim.stop(!0), f.splice(b, 1));
        for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
        delete c.finish
      })
    }
  }), m.each(["toggle", "show", "hide"], function(a, b) {
    var c = m.fn[b];
    m.fn[b] = function(a, d, e) {
      return null == a || "boolean" == typeof a ?
          c.apply(this, arguments) :
          this.animate(gb(b, !0), a, d, e)
    }
  }), m.each({
    slideDown: gb("show"),
    slideUp: gb("hide"),
    slideToggle: gb("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function(a, b) {
    m.fn[a] = function(a, c, d) {
      return this.animate(b, a, c, d)
    }
  }), m.timers = [], m.fx.tick = function() {
    var a, b = m.timers, c = 0;
    for ($a = m.now(); c < b.length; c++)a = b[c], a() || b[c] !== a || b.splice(c--, 1);
    b.length || m.fx.stop(), $a = void 0
  }, m.fx.timer = function(a) {
    m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
  }, m.fx.interval = 13, m.fx.start = function() {
    _a || (_a = setInterval(m.fx.tick, m.fx.interval))
  }, m.fx.stop = function() {
    clearInterval(_a), _a = null
  }, m.fx.speeds = {slow: 600, fast: 200, _default: 400}, m.fn.delay = function(a, b) {
    return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
      var d = setTimeout(b, a);
      c.stop = function() {
        clearTimeout(d)
      }
    })
  }, function() {
    var a, b, c, d, e;
    b = y.createElement("div"), b.setAttribute("className",
        "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName(
        "a")[0], c = y.createElement("select"), e = c.appendChild(
        y.createElement("option")), a = b.getElementsByTagName(
        "input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !==
        b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" ===
        d.getAttribute(
            "href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement(
        "form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement(
        "input"), a.setAttribute("value", ""), k.input = "" ===
        a.getAttribute("value"), a.value = "t", a.setAttribute("type",
        "radio"), k.radioValue = "t" === a.value
  }();
  var lb = /\r/g;
  m.fn.extend({
    val: function(a) {
      var b, c, d, e = this[0];
      {
        if (arguments.length)return d = m.isFunction(a), this.each(function(c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ?
              e = "" :
              "number" == typeof e ?
                  e += "" :
              m.isArray(e) && (e = m.map(e, function(a) {
                return null == a ? "" : a + ""
              })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b &&
          "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
        });
        if (e)return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b &&
        "get" in b && void 0 !== (c = b.get(e, "value")) ?
            c :
            (c = e.value, "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c)
      }
    }
  }), m.extend({
    valHooks: {
      option: {
        get: function(a) {
          var b = m.find.attr(a, "value");
          return null != b ? b : m.trim(m.text(a))
        }
      }, select: {
        get: function(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type ||
              0 > e, g = f ?
              null :
              [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h >
               i; i++)if (c = d[i], !(!c.selected && i !== e ||
              (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) ||
              c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
            if (b = m(c).val(), f)return b;
            g.push(b)
          }
          return g
        }, set: function(a, b) {
          var c, d, e = a.options, f = m.makeArray(b), g = e.length;
          while (g--)if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0)try {
            d.selected = c = !0
          } catch (h) {
            d.scrollHeight
          } else d.selected = !1;
          return c || (a.selectedIndex = -1), e
        }
      }
    }
  }), m.each(["radio", "checkbox"], function() {
    m.valHooks[this] = {
      set: function(a, b) {
        return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
      }
    }, k.checkOn || (m.valHooks[this].get = function(a) {
      return null === a.getAttribute("value") ? "on" : a.value
    })
  });
  var mb, nb, ob = m.expr.attrHandle, pb = /^(?:checked|selected)$/i, qb = k.getSetAttribute, rb = k.input;
  m.fn.extend({
    attr: function(a, b) {
      return V(this, m.attr, a, b, arguments.length > 1)
    }, removeAttr: function(a) {
      return this.each(function() {
        m.removeAttr(this, a)
      })
    }
  }), m.extend({
    attr: function(a, b, c) {
      var d, e, f = a.nodeType;
      if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === K ?
          m.prop(a, b, c) :
          (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] ||
              (m.expr.match.bool.test(b) ? nb : mb)), void 0 === c ?
              d && "get" in d && null !== (e = d.get(a, b)) ?
                  e :
                  (e = m.find.attr(a, b), null == e ? void 0 : e) :
              null !== c ?
                  d && "set" in d && void 0 !== (e = d.set(a, c, b)) ?
                      e :
                      (a.setAttribute(b, c + ""), c) :
                  void m.removeAttr(a, b))
    }, removeAttr: function(a, b) {
      var c, d, e = 0, f = b && b.match(E);
      if (f && 1 === a.nodeType)while (c = f[e++])d = m.propFix[c] || c, m.expr.match.bool.test(c) ?
          rb && qb || !pb.test(c) ?
              a[d] = !1 :
              a[m.camelCase("default-" + c)] = a[d] = !1 :
          m.attr(a, c, ""), a.removeAttribute(qb ? c : d)
    }, attrHooks: {
      type: {
        set: function(a, b) {
          if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
          }
        }
      }
    }
  }), nb = {
    set: function(a, b, c) {
      return b === !1 ?
          m.removeAttr(a, c) :
          rb && qb || !pb.test(c) ?
              a.setAttribute(!qb && m.propFix[c] || c, c) :
              a[m.camelCase("default-" + c)] = a[c] = !0, c
    }
  }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
    var c = ob[b] || m.find.attr;
    ob[b] = rb && qb || !pb.test(b) ? function(a, b, d) {
      var e, f;
      return d ||
      (f = ob[b], ob[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ob[b] = f), e
    } : function(a, b, c) {
      return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
    }
  }), rb && qb || (m.attrHooks.value = {
    set: function(a, b, c) {
      return m.nodeName(a, "input") ? void(a.defaultValue = b) : mb && mb.set(a, b, c)
    }
  }), qb || (mb = {
    set: function(a, b, c) {
      var d = a.getAttributeNode(c);
      return d ||
      a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" ===
      c || b === a.getAttribute(c) ? b : void 0
    }
  }, ob.id = ob.name = ob.coords = function(a, b, c) {
    var d;
    return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
  }, m.valHooks.button = {
    get: function(a, b) {
      var c = a.getAttributeNode(b);
      return c && c.specified ? c.value : void 0
    }, set: mb.set
  }, m.attrHooks.contenteditable = {
    set: function(a, b, c) {
      mb.set(a, "" === b ? !1 : b, c)
    }
  }, m.each(["width", "height"], function(a, b) {
    m.attrHooks[b] = {
      set: function(a, c) {
        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
      }
    }
  })), k.style || (m.attrHooks.style = {
    get: function(a) {
      return a.style.cssText || void 0
    }, set: function(a, b) {
      return a.style.cssText = b + ""
    }
  });
  var sb = /^(?:input|select|textarea|button|object)$/i, tb = /^(?:a|area)$/i;
  m.fn.extend({
    prop: function(a, b) {
      return V(this, m.prop, a, b, arguments.length > 1)
    }, removeProp: function(a) {
      return a = m.propFix[a] || a, this.each(function() {
        try {
          this[a] = void 0, delete this[a]
        } catch (b) {
        }
      })
    }
  }), m.extend({
    propFix: {"for": "htmlFor", "class": "className"}, prop: function(a, b, c) {
      var d, e, f, g = a.nodeType;
      if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !m.isXMLDoc(a), f &&
      (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ?
          e && "set" in e && void 0 !== (d = e.set(a, c, b)) ?
              d :
              a[b] = c :
          e && "get" in e && null !== (d = e.get(a, b)) ?
              d :
              a[b]
    }, propHooks: {
      tabIndex: {
        get: function(a) {
          var b = m.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1
        }
      }
    }
  }), k.hrefNormalized || m.each(["href", "src"], function(a, b) {
    m.propHooks[b] = {
      get: function(a) {
        return a.getAttribute(b, 4)
      }
    }
  }), k.optSelected || (m.propHooks.selected = {
    get: function(a) {
      var b = a.parentNode;
      return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
    }
  }), m.each([
    "tabIndex",
    "readOnly",
    "maxLength",
    "cellSpacing",
    "cellPadding",
    "rowSpan",
    "colSpan",
    "useMap",
    "frameBorder",
    "contentEditable"], function() {
    m.propFix[this.toLowerCase()] = this
  }), k.enctype || (m.propFix.enctype = "encoding");
  var ub = /[\t\r\n\f]/g;
  m.fn.extend({
    addClass: function(a) {
      var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
      if (m.isFunction(a))return this.each(function(b) {
        m(this).addClass(a.call(this, b, this.className))
      });
      if (j)for (b = (a || "").match(E) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")) {
        f = 0;
        while (e = b[f++])d.indexOf(" " + e + " ") < 0 && (d += e + " ");
        g = m.trim(d), c.className !== g && (c.className = g)
      }
      return this
    }, removeClass: function(a) {
      var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length ||
          "string" == typeof a && a;
      if (m.isFunction(a))return this.each(function(b) {
        m(this).removeClass(a.call(this, b, this.className))
      });
      if (j)for (b = (a || "").match(E) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(ub, " ") : "")) {
        f = 0;
        while (e = b[f++])while (d.indexOf(" " + e + " ") >= 0)d = d.replace(" " + e + " ", " ");
        g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
      }
      return this
    }, toggleClass: function(a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ?
          b ?
              this.addClass(a) :
              this.removeClass(a) :
          this.each(m.isFunction(a) ? function(c) {
            m(this).toggleClass(a.call(this, c, this.className, b), b)
          } : function() {
            if ("string" === c) {
              var b, d = 0, e = m(this), f = a.match(E) || [];
              while (b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
            } else(c === K || "boolean" === c) && (this.className &&
            m._data(this, "__className__", this.className), this.className = this.className ||
            a === !1 ? "" : m._data(this, "__className__") || "")
          })
    }, hasClass: function(a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType &&
          (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0)return !0;
      return !1
    }
  }), m.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " "), function(a, b) {
        m.fn[b] = function(a, c) {
          return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
      }), m.fn.extend({
    hover: function(a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    }, bind: function(a, b, c) {
      return this.on(a, null, b, c)
    }, unbind: function(a, b) {
      return this.off(a, null, b)
    }, delegate: function(a, b, c, d) {
      return this.on(b, a, c, d)
    }, undelegate: function(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }
  });
  var vb = m.now(), wb = /\?/, xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  m.parseJSON = function(b) {
    if (a.JSON && a.JSON.parse)return a.JSON.parse(b + "");
    var c, d = null, e = m.trim(b + "");
    return e && !m.trim(e.replace(xb, function(a, b, e, f) {
      return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
    })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
  }, m.parseXML = function(b) {
    var c, d;
    if (!b || "string" != typeof b)return null;
    try {
      a.DOMParser ?
          (d = new DOMParser, c = d.parseFromString(b, "text/xml")) :
          (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
    } catch (e) {
      c = void 0
    }
    return c && c.documentElement && !c.getElementsByTagName("parsererror").length ||
    m.error("Invalid XML: " + b), c
  };
  var yb, zb, Ab = /#.*$/, Bb = /([?&])_=[^&]*/, Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Eb = /^(?:GET|HEAD)$/, Fb = /^\/\//, Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hb = {}, Ib = {}, Jb = "*/".concat(
      "*");
  try {
    zb = location.href
  } catch (Kb) {
    zb = y.createElement("a"), zb.href = "", zb = zb.href
  }
  yb = Gb.exec(zb.toLowerCase()) || [];
  function Lb(a) {
    return function(b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0, f = b.toLowerCase().match(E) || [];
      if (m.isFunction(c))while (d = f[e++])"+" === d.charAt(0) ?
          (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) :
          (a[d] = a[d] || []).push(c)
    }
  }

  function Mb(a, b, c, d) {
    var e = {}, f = a === Ib;

    function g(h) {
      var i;
      return e[h] = !0, m.each(a[h] || [], function(a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ?
            f ?
                !(i = j) :
                void 0 :
            (b.dataTypes.unshift(j), g(j), !1)
      }), i
    }

    return g(b.dataTypes[0]) || !e["*"] && g("*")
  }

  function Nb(a, b) {
    var c, d, e = m.ajaxSettings.flatOptions || {};
    for (d in b)void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && m.extend(!0, a, c), a
  }

  function Ob(a, b, c) {
    var d, e, f, g, h = a.contents, i = a.dataTypes;
    while ("*" === i[0])i.shift(), void 0 === e &&
    (e = a.mimeType || b.getResponseHeader("Content-Type"));
    if (e)for (g in h)if (h[g] && h[g].test(e)) {
      i.unshift(g);
      break
    }
    if (i[0] in c)f = i[0]; else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break
        }
        d || (d = g)
      }
      f = f || d
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
  }

  function Pb(a, b, c, d) {
    var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
    if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter &&
        (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" ===
        f)f = i; else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f &&
          (g = j[i + " " + h[0]] || j["* " + h[0]])) {
        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
        break
      }
      if (g !== !0)if (g && a["throws"])b = g(b); else try {
        b = g(b)
      } catch (l) {
        return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
      }
    }
    return {state: "success", data: b}
  }

  m.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: zb,
      type: "GET",
      isLocal: Db.test(yb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Jb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {xml: /xml/, html: /html/, json: /json/},
      responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
      converters: {
        "* text": String,
        "text html": !0,
        "text json": m.parseJSON,
        "text xml": m.parseXML
      },
      flatOptions: {url: !0, context: !0}
    },
    ajaxSetup: function(a, b) {
      return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a)
    },
    ajaxPrefilter: Lb(Hb),
    ajaxTransport: Lb(Ib),
    ajax: function(a, b) {
      "object" == typeof a && (b = a, a = void 0), b = b || {};
      var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context &&
      (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks(
          "once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
        readyState: 0,
        getResponseHeader: function(a) {
          var b;
          if (2 === t) {
            if (!j) {
              j = {};
              while (b = Cb.exec(f))j[b[1].toLowerCase()] = b[2]
            }
            b = j[a.toLowerCase()]
          }
          return null == b ? null : b
        },
        getAllResponseHeaders: function() {
          return 2 === t ? f : null
        },
        setRequestHeader: function(a, b) {
          var c = a.toLowerCase();
          return t || (a = s[c] = s[c] || a, r[a] = b), this
        },
        overrideMimeType: function(a) {
          return t || (k.mimeType = a), this
        },
        statusCode: function(a) {
          var b;
          if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
          return this
        },
        abort: function(a) {
          var b = a || u;
          return i && i.abort(b), x(0, b), this
        }
      };
      if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a ||
          k.url || zb) + "").replace(Ab, "").replace(Fb, yb[1] + "//"), k.type = b.method ||
              b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*")
                  .toLowerCase()
                  .match(E) || [""], null == k.crossDomain &&
          (c = Gb.exec(k.url.toLowerCase()), k.crossDomain = !(!c ||
          c[1] === yb[1] && c[2] === yb[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) ===
          (yb[3] || ("http:" === yb[1] ? "80" : "443")))), k.data && k.processData &&
          "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mb(Hb, k, b,
              v), 2 === t)return v;
      h = m.event && k.global, h && 0 === m.active++ &&
      m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Eb.test(
          k.type), e = k.url, k.hasContent ||
      (k.data && (e = k.url += (wb.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 &&
      (k.url = Bb.test(e) ?
          e.replace(Bb, "$1_=" + vb++) :
      e + (wb.test(e) ? "&" : "?") + "_=" + vb++)), k.ifModified &&
      (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] &&
      v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent &&
      k.contentType !== !1 || b.contentType) &&
      v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept",
          k.dataTypes[0] && k.accepts[k.dataTypes[0]] ?
          k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") :
              k.accepts["*"]);
      for (d in k.headers)v.setRequestHeader(d, k.headers[d]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))return v.abort();
      u = "abort";
      for (d in{success: 1, error: 1, complete: 1})v[d](k[d]);
      if (i = Mb(Ib, k, b, v)) {
        v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 &&
        (g = setTimeout(function() {
          v.abort("timeout")
        }, k.timeout));
        try {
          t = 1, i.send(r, x)
        } catch (w) {
          if (!(2 > t))throw w;
          x(-1, w)
        }
      } else x(-1, "No Transport");
      function x(a, b, c, d) {
        var j, r, s, u, w, x = b;
        2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ?
            4 :
            0, j = a >= 200 && 300 > a || 304 === a, c && (u = Ob(k, v, c)), u = Pb(k, u, v, j), j ?
            (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w &&
            (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 ===
            a || "HEAD" === k.type ?
                x = "nocontent" :
                304 === a ?
                    x = "notmodified" :
                    (x = u.state, r = u.data, s = u.error, j = !s)) :
            (s = x, (a || !x) &&
            (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ?
            o.resolveWith(l, [r, x, v]) :
            o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h &&
        n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h &&
        (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
      }

      return v
    },
    getJSON: function(a, b, c) {
      return m.get(a, b, c, "json")
    },
    getScript: function(a, b) {
      return m.get(a, void 0, b, "script")
    }
  }), m.each(["get", "post"], function(a, b) {
    m[b] = function(a, c, d, e) {
      return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax(
          {url: a, type: b, dataType: e, data: c, success: d})
    }
  }), m._evalUrl = function(a) {
    return m.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
  }, m.fn.extend({
    wrapAll: function(a) {
      if (m.isFunction(a))return this.each(function(b) {
        m(this).wrapAll(a.call(this, b))
      });
      if (this[0]) {
        var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
          var a = this;
          while (a.firstChild && 1 === a.firstChild.nodeType)a = a.firstChild;
          return a
        }).append(this)
      }
      return this
    }, wrapInner: function(a) {
      return this.each(m.isFunction(a) ? function(b) {
        m(this).wrapInner(a.call(this, b))
      } : function() {
        var b = m(this), c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a)
      })
    }, wrap: function(a) {
      var b = m.isFunction(a);
      return this.each(function(c) {
        m(this).wrapAll(b ? a.call(this, c) : a)
      })
    }, unwrap: function() {
      return this.parent().each(function() {
        m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
      }).end()
    }
  }), m.expr.filters.hidden = function(a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0 ||
        !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
  }, m.expr.filters.visible = function(a) {
    return !m.expr.filters.hidden(a)
  };
  var Qb = /%20/g, Rb = /\[\]$/, Sb = /\r?\n/g, Tb = /^(?:submit|button|image|reset|file)$/i, Ub = /^(?:input|select|textarea|keygen)/i;

  function Vb(a, b, c, d) {
    var e;
    if (m.isArray(b))m.each(b, function(b, e) {
      c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
    }); else if (c || "object" !== m.type(b))d(a, b); else for (e in b)Vb(a + "[" + e + "]", b[e],
        c, d)
  }

  m.param = function(a, b) {
    var c, d = [], e = function(a, b) {
      b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" +
          encodeURIComponent(b)
    };
    if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) ||
        a.jquery && !m.isPlainObject(a))m.each(a, function() {
      e(this.name, this.value)
    }); else for (c in a)Vb(c, a[c], b, e);
    return d.join("&").replace(Qb, "+")
  }, m.fn.extend({
    serialize: function() {
      return m.param(this.serializeArray())
    }, serializeArray: function() {
      return this.map(function() {
        var a = m.prop(this, "elements");
        return a ? m.makeArray(a) : this
      }).filter(function() {
        var a = this.type;
        return this.name && !m(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) &&
            (this.checked || !W.test(a))
      }).map(function(a, b) {
        var c = m(this).val();
        return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
          return {name: b.name, value: a.replace(Sb, "\r\n")}
        }) : {name: b.name, value: c.replace(Sb, "\r\n")}
      }).get()
    }
  }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b()
  } : Zb;
  var Wb = 0, Xb = {}, Yb = m.ajaxSettings.xhr();
  a.attachEvent && a.attachEvent("onunload", function() {
    for (var a in Xb)Xb[a](void 0, !0)
  }), k.cors = !!Yb && "withCredentials" in Yb, Yb = k.ajax = !!Yb, Yb &&
  m.ajaxTransport(function(a) {
    if (!a.crossDomain || k.cors) {
      var b;
      return {
        send: function(c, d) {
          var e, f = a.xhr(), g = ++Wb;
          if (f.open(a.type, a.url, a.async, a.username,
                  a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
          a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain ||
          c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
          for (e in c)void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
          f.send(a.hasContent && a.data || null), b = function(c, e) {
            var h, i, j;
            if (b && (e || 4 ===
                f.readyState))if (delete Xb[g], b = void 0, f.onreadystatechange = m.noop, e)4 !==
            f.readyState && f.abort(); else {
              j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
              try {
                i = f.statusText
              } catch (k) {
                i = ""
              }
              h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
            }
            j && d(h, i, j, f.getAllResponseHeaders())
          }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xb[g] = b : b()
        }, abort: function() {
          b && b(void 0, !0)
        }
      }
    }
  });
  function Zb() {
    try {
      return new a.XMLHttpRequest
    } catch (b) {
    }
  }

  function $b() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP")
    } catch (b) {
    }
  }

  m.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
    contents: {script: /(?:java|ecma)script/},
    converters: {
      "text script": function(a) {
        return m.globalEval(a), a
      }
    }
  }), m.ajaxPrefilter("script", function(a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
  }), m.ajaxTransport("script", function(a) {
    if (a.crossDomain) {
      var b, c = y.head || m("head")[0] || y.documentElement;
      return {
        send: function(d, e) {
          b = y.createElement("script"), b.async = !0, a.scriptCharset &&
          (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(
              a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) &&
            (b.onload = b.onreadystatechange = null, b.parentNode &&
            b.parentNode.removeChild(b), b = null, c || e(200, "success"))
          }, c.insertBefore(b, c.firstChild)
        }, abort: function() {
          b && b.onload(void 0, !0)
        }
      }
    }
  });
  var _b = [], ac = /(=)\?(?=&|$)|\?\?/;
  m.ajaxSetup({
    jsonp: "callback", jsonpCallback: function() {
      var a = _b.pop() || m.expando + "_" + vb++;
      return this[a] = !0, a
    }
  }), m.ajaxPrefilter("json jsonp", function(b, c, d) {
    var e, f, g, h = b.jsonp !== !1 && (ac.test(b.url) ?
            "url" :
        "string" == typeof b.data &&
        !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) &&
        "data");
    return h || "jsonp" === b.dataTypes[0] ?
        (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ?
            b.jsonpCallback() :
            b.jsonpCallback, h ?
            b[h] = b[h].replace(ac, "$1" + e) :
        b.jsonp !== !1 && (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" +
            e), b.converters["script json"] = function() {
          return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
          g = arguments
        }, d.always(function() {
          a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && m.isFunction(f) &&
          f(g[0]), g = f = void 0
        }), "script") :
        void 0
  }), m.parseHTML = function(a, b, c) {
    if (!a || "string" != typeof a)return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || y;
    var d = u.exec(a), e = !c && [];
    return d ?
        [b.createElement(d[1])] :
        (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
  };
  var bc = m.fn.load;
  m.fn.load = function(a, b, c) {
    if ("string" != typeof a && bc)return bc.apply(this, arguments);
    var d, e, f, g = this, h = a.indexOf(" ");
    return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ?
        (c = b, b = void 0) :
    b && "object" == typeof b && (f = "POST"), g.length > 0 &&
    m.ajax({url: a, type: f, dataType: "html", data: b}).done(function(a) {
      e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
    }).complete(c && function(a, b) {
          g.each(c, e || [a.responseText, b, a])
        }), this
  }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
      function(a, b) {
        m.fn[b] = function(a) {
          return this.on(b, a)
        }
      }), m.expr.filters.animated = function(a) {
    return m.grep(m.timers, function(b) {
      return a === b.elem
    }).length
  };
  var cc = a.document.documentElement;

  function dc(a) {
    return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
  }

  m.offset = {
    setOffset: function(a, b, c) {
      var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a,
          "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) &&
          m.inArray("auto", [f, i]) > -1, j ?
          (d = l.position(), g = d.top, e = d.left) :
          (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) &&
      (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left &&
      (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
    }
  }, m.fn.extend({
    offset: function(a) {
      if (arguments.length)return void 0 === a ? this : this.each(function(b) {
        m.offset.setOffset(this, a, b)
      });
      var b, c, d = {top: 0, left: 0}, e = this[0], f = e && e.ownerDocument;
      if (f)return b = f.documentElement, m.contains(b, e) ?
          (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dc(f), {
            top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
            left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
          }) :
          d
    }, position: function() {
      if (this[0]) {
        var a, b, c = {top: 0, left: 0}, d = this[0];
        return "fixed" === m.css(d, "position") ?
            b = d.getBoundingClientRect() :
            (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") ||
            (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0],
                "borderLeftWidth", !0)), {
          top: b.top - c.top - m.css(d, "marginTop", !0),
          left: b.left - c.left - m.css(d, "marginLeft", !0)
        }
      }
    }, offsetParent: function() {
      return this.map(function() {
        var a = this.offsetParent || cc;
        while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position"))a = a.offsetParent;
        return a || cc
      })
    }
  }), m.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function(a, b) {
    var c = /Y/.test(b);
    m.fn[a] = function(d) {
      return V(this, function(a, d, e) {
        var f = dc(a);
        return void 0 === e ?
            f ?
                b in f ?
                    f[b] :
                    f.document.documentElement[d] :
                a[d] :
            void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
      }, a, d, arguments.length, null)
    }
  }), m.each(["top", "left"], function(a, b) {
    m.cssHooks[b] = La(k.pixelPosition, function(a, c) {
      return c ? (c = Ja(a, b), Ha.test(c) ? m(a).position()[b] + "px" : c) : void 0
    })
  }), m.each({Height: "height", Width: "width"}, function(a, b) {
    m.each({padding: "inner" + a, content: b, "": "outer" + a}, function(c, d) {
      m.fn[d] = function(d, e) {
        var f = arguments.length && (c || "boolean" != typeof d), g = c ||
            (d === !0 || e === !0 ? "margin" : "border");
        return V(this, function(b, c, d) {
          var e;
          return m.isWindow(b) ?
              b.document.documentElement["client" + a] :
              9 === b.nodeType ?
                  (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a],
                      b.body["offset" + a], e["offset" + a], e["client" + a])) :
                  void 0 === d ?
                      m.css(b, c, g) :
                      m.style(b, c, d, g)
        }, b, f ? d : void 0, f, null)
      }
    })
  }), m.fn.size = function() {
    return this.length
  }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd &&
  define("jquery", [], function() {
    return m
  });
  var ec = a.jQuery, fc = a.$;
  return m.noConflict = function(b) {
    return a.$ === m && (a.$ = fc), b && a.jQuery === m && (a.jQuery = ec), m
  }, typeof b === K && (a.jQuery = a.$ = m), m
});

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function(a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] &&
      b[2] < 1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), +function(a) {
  "use strict";
  function b() {
    var a = document.createElement("bootstrap"), b = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };
    for (var c in b)if (void 0 !== a.style[c])return {end: b[c]};
    return !1
  }

  a.fn.emulateTransitionEnd = function(b) {
    var c = !1, d = this;
    a(this).one("bsTransitionEnd", function() {
      c = !0
    });
    var e = function() {
      c || a(d).trigger(a.support.transition.end)
    };
    return setTimeout(e, b), this
  }, a(function() {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
      bindType: a.support.transition.end,
      delegateType: a.support.transition.end,
      handle: function(b) {
        return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
      }
    })
  })
}(jQuery), +function(a) {
  "use strict";
  function b(b) {
    return this.each(function() {
      var c = a(this), e = c.data("bs.alert");
      e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
    })
  }

  var c = '[data-dismiss="alert"]', d = function(b) {
    a(b).on("click", c, this.close)
  };
  d.VERSION = "3.3.5", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
    function c() {
      g.detach().trigger("closed.bs.alert").remove()
    }

    var e = a(this), f = e.attr("data-target");
    f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
    var g = a(f);
    b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(
        b = a.Event("close.bs.alert")), b.isDefaultPrevented() ||
    (g.removeClass("in"), a.support.transition && g.hasClass("fade") ?
        g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) :
        c())
  };
  var e = a.fn.alert;
  a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
    return a.fn.alert = e, this
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), +function(a) {
  "use strict";
  function b(b) {
    return this.each(function() {
      var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b;
      e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
    })
  }

  var c = function(b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
  };
  c.VERSION = "3.3.5", c.DEFAULTS = {loadingText: "loading..."}, c.prototype.setState = function(b) {
    var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
    b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
      d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ?
          (this.isLoading = !0, d.addClass(c).attr(c, c)) :
      this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
    }, this), 0)
  }, c.prototype.toggle = function() {
    var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
    if (b.length) {
      var c = this.$element.find("input");
      "radio" == c.prop("type") ?
          (c.prop("checked") && (a = !1), b.find(".active")
              .removeClass("active"), this.$element.addClass("active")) :
      "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") &&
      (a = !1), this.$element.toggleClass("active")), c.prop("checked",
          this.$element.hasClass("active")), a && c.trigger("change")
    } else this.$element.attr("aria-pressed",
        !this.$element.hasClass("active")), this.$element.toggleClass("active")
  };
  var d = a.fn.button;
  a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
    return a.fn.button = d, this
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
    var d = a(c.target);
    d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target)
        .is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
    a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
  })
}(jQuery), +function(a) {
  "use strict";
  function b(b) {
    return this.each(function() {
      var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, c.DEFAULTS, d.data(),
          "object" == typeof b && b), g = "string" == typeof b ? b : f.slide;
      e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ?
          e.to(b) :
          g ?
              e[g]() :
          f.interval && e.pause().cycle()
    })
  }

  var c = function(b, c) {
    this.$element = a(b), this.$indicators = this.$element.find(
        ".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard &&
    this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" ==
    this.options.pause && !("ontouchstart" in document.documentElement) &&
    this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this))
        .on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
  };
  c.VERSION = "3.3.5", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, c.prototype.keydown = function(a) {
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
  }, c.prototype.cycle = function(b) {
    return b || (this.paused = !1), this.interval &&
    clearInterval(this.interval), this.options.interval && !this.paused &&
    (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
  }, c.prototype.getItemIndex = function(a) {
    return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
  }, c.prototype.getItemForDirection = function(a, b) {
    var c = this.getItemIndex(b), d = "prev" == a && 0 === c ||
        "next" == a && c == this.$items.length - 1;
    if (d && !this.options.wrap)return b;
    var e = "prev" == a ? -1 : 1, f = (c + e) % this.$items.length;
    return this.$items.eq(f)
  }, c.prototype.to = function(a) {
    var b = this, c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    return a > this.$items.length - 1 || 0 > a ?
        void 0 :
        this.sliding ?
            this.$element.one("slid.bs.carousel", function() {
              b.to(a)
            }) :
            c == a ?
                this.pause().cycle() :
                this.slide(a > c ? "next" : "prev", this.$items.eq(a))
  }, c.prototype.pause = function(b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length &&
    a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(
        !0)), this.interval = clearInterval(this.interval), this
  }, c.prototype.next = function() {
    return this.sliding ? void 0 : this.slide("next")
  }, c.prototype.prev = function() {
    return this.sliding ? void 0 : this.slide("prev")
  }, c.prototype.slide = function(b, d) {
    var e = this.$element.find(".item.active"), f = d ||
        this.getItemForDirection(b, e), g = this.interval, h = "next" == b ?
        "left" :
        "right", i = this;
    if (f.hasClass("active"))return this.sliding = !1;
    var j = f[0], k = a.Event("slide.bs.carousel", {relatedTarget: j, direction: h});
    if (this.$element.trigger(k), !k.isDefaultPrevented()) {
      if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var l = a(this.$indicators.children()[this.getItemIndex(f)]);
        l && l.addClass("active")
      }
      var m = a.Event("slid.bs.carousel", {relatedTarget: j, direction: h});
      return a.support.transition && this.$element.hasClass("slide") ?
          (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd",
              function() {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(
                    ["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                  i.$element.trigger(m)
                }, 0)
              }).emulateTransitionEnd(c.TRANSITION_DURATION)) :
          (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(
              m)), g && this.cycle(), this
    }
  };
  var d = a.fn.carousel;
  a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
    return a.fn.carousel = d, this
  };
  var e = function(c) {
    var d, e = a(this), f = a(
        e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
    if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to");
      h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
    }
  };
  a(document)
      .on("click.bs.carousel.data-api", "[data-slide]", e)
      .on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
    a('[data-ride="carousel"]').each(function() {
      var c = a(this);
      b.call(c, c.data())
    })
  })
}(jQuery), +function(a) {
  "use strict";
  function b(b) {
    var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
    return a(d)
  }

  function c(b) {
    return this.each(function() {
      var c = a(this), e = c.data("bs.collapse"), f = a.extend({}, d.DEFAULTS, c.data(),
          "object" == typeof b && b);
      !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e ||
      c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
    })
  }

  var d = function(b, c) {
    this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a(
        '[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' +
        b.id + '"]'), this.transitioning = null, this.options.parent ?
        this.$parent = this.getParent() :
        this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle &&
    this.toggle()
  };
  d.VERSION = "3.3.5", d.TRANSITION_DURATION = 350, d.DEFAULTS = {toggle: !0}, d.prototype.dimension = function() {
    var a = this.$element.hasClass("width");
    return a ? "width" : "height"
  }, d.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
        var f = a.Event("show.bs.collapse");
        if (this.$element.trigger(f), !f.isDefaultPrevented()) {
          e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
          var g = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[g](0)
              .attr("aria-expanded", !0), this.$trigger.removeClass("collapsed")
              .attr("aria-expanded", !0), this.transitioning = 1;
          var h = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[g](
                ""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
          };
          if (!a.support.transition)return h.call(this);
          var i = a.camelCase(["scroll", g].join("-"));
          this.$element.one("bsTransitionEnd", a.proxy(h, this))
              .emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
        }
      }
    }
  }, d.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");
      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();
        this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing")
            .removeClass("collapse in")
            .attr("aria-expanded", !1), this.$trigger.addClass("collapsed")
            .attr("aria-expanded", !1), this.transitioning = 1;
        var e = function() {
          this.transitioning = 0, this.$element.removeClass("collapsing")
              .addClass("collapse")
              .trigger("hidden.bs.collapse")
        };
        return a.support.transition ?
            void this.$element[c](0)
                .one("bsTransitionEnd", a.proxy(e, this))
                .emulateTransitionEnd(d.TRANSITION_DURATION) :
            e.call(this)
      }
    }
  }, d.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  }, d.prototype.getParent = function() {
    return a(this.options.parent)
        .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
        .each(a.proxy(function(c, d) {
          var e = a(d);
          this.addAriaAndCollapsedClass(b(e), e)
        }, this))
        .end()
  }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
    var c = a.hasClass("in");
    a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
  };
  var e = a.fn.collapse;
  a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
    return a.fn.collapse = e, this
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
    var e = a(this);
    e.attr("data-target") || d.preventDefault();
    var f = b(e), g = f.data("bs.collapse"), h = g ? "toggle" : e.data();
    c.call(f, h)
  })
}(jQuery), +function(a) {
  "use strict";
  function b(b) {
    var c = b.attr("data-target");
    c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
    var d = c && a(c);
    return d && d.length ? d : b.parent()
  }

  function c(c) {
    c && 3 === c.which || (a(e).remove(), a(f).each(function() {
      var d = a(this), e = b(d), f = {relatedTarget: this};
      e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) &&
      a.contains(e[0], c.target) ||
      (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() ||
      (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f))))
    }))
  }

  function d(b) {
    return this.each(function() {
      var c = a(this), d = c.data("bs.dropdown");
      d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
    })
  }

  var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function(b) {
    a(b).on("click.bs.dropdown", this.toggle)
  };
  g.VERSION = "3.3.5", g.prototype.toggle = function(d) {
    var e = a(this);
    if (!e.is(".disabled, :disabled")) {
      var f = b(e), g = f.hasClass("open");
      if (c(), !g) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length &&
        a(document.createElement("div"))
            .addClass("dropdown-backdrop")
            .insertAfter(a(this))
            .on("click", c);
        var h = {relatedTarget: this};
        if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented())return;
        e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open")
            .trigger("shown.bs.dropdown", h)
      }
      return !1
    }
  }, g.prototype.keydown = function(c) {
    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
      var d = a(this);
      if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
        var e = b(d), g = e.hasClass("open");
        if (!g && 27 != c.which || g && 27 == c.which)return 27 == c.which &&
        e.find(f).trigger("focus"), d.trigger("click");
        var h = " li:not(.disabled):visible a", i = e.find(".dropdown-menu" + h);
        if (i.length) {
          var j = i.index(c.target);
          38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j ||
          (j = 0), i.eq(j).trigger("focus")
        }
      }
    }
  };
  var h = a.fn.dropdown;
  a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
    return a.fn.dropdown = h, this
  }, a(document)
      .on("click.bs.dropdown.data-api", c)
      .on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
      })
      .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
      .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
      .on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), +function(a) {
  "use strict";
  function b(b, d) {
    return this.each(function() {
      var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(),
          "object" == typeof b && b);
      f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ?
          f[b](d) :
      g.show && f.show(d)
    })
  }

  var c = function(b, c) {
    this.options = c, this.$body = a(document.body), this.$element = a(
        b), this.$dialog = this.$element.find(
        ".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote &&
    this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
      this.$element.trigger("loaded.bs.modal")
    }, this))
  };
  c.VERSION = "3.3.5", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, c.prototype.toggle = function(a) {
    return this.isShown ? this.hide() : this.show(a)
  }, c.prototype.show = function(b) {
    var d = this, e = a.Event("show.bs.modal", {relatedTarget: b});
    this.$element.trigger(e), this.isShown || e.isDefaultPrevented() ||
    (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass(
        "modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal",
        '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on(
        "mousedown.dismiss.bs.modal", function() {
          d.$element.one("mouseup.dismiss.bs.modal", function(b) {
            a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
          })
        }), this.backdrop(function() {
      var e = a.support.transition && d.$element.hasClass("fade");
      d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show()
          .scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass(
          "in"), d.enforceFocus();
      var f = a.Event("shown.bs.modal", {relatedTarget: b});
      e ? d.$dialog.one("bsTransitionEnd", function() {
        d.$element.trigger("focus").trigger(f)
      }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
    }))
  }, c.prototype.hide = function(b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown &&
    !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document)
        .off("focusin.bs.modal"), this.$element.removeClass("in")
        .off("click.dismiss.bs.modal")
        .off("mouseup.dismiss.bs.modal"), this.$dialog.off(
        "mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ?
        this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this))
            .emulateTransitionEnd(c.TRANSITION_DURATION) :
        this.hideModal())
  }, c.prototype.enforceFocus = function() {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
      this.$element[0] === a.target || this.$element.has(a.target).length ||
      this.$element.trigger("focus")
    }, this))
  }, c.prototype.escape = function() {
    this.isShown && this.options.keyboard ?
        this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
          27 == a.which && this.hide()
        }, this)) :
    this.isShown || this.$element.off("keydown.dismiss.bs.modal")
  }, c.prototype.resize = function() {
    this.isShown ?
        a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) :
        a(window).off("resize.bs.modal")
  }, c.prototype.hideModal = function() {
    var a = this;
    this.$element.hide(), this.backdrop(function() {
      a.$body.removeClass(
          "modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger(
          "hidden.bs.modal")
    })
  }, c.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, c.prototype.backdrop = function(b) {
    var d = this, e = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var f = a.support.transition && e;
      if (this.$backdrop = a(document.createElement("div"))
              .addClass("modal-backdrop " + e)
              .appendTo(this.$body), this.$element.on("click.dismiss.bs.modal",
              a.proxy(function(a) {
                return this.ignoreBackdropClick ?
                    void(this.ignoreBackdropClick = !1) :
                    void(a.target === a.currentTarget &&
                    ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
              }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass(
              "in"), !b)return;
      f ?
          this.$backdrop.one("bsTransitionEnd", b)
              .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) :
          b()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var g = function() {
        d.removeBackdrop(), b && b()
      };
      a.support.transition && this.$element.hasClass("fade") ?
          this.$backdrop.one("bsTransitionEnd", g)
              .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) :
          g()
    } else b && b()
  }, c.prototype.handleUpdate = function() {
    this.adjustDialog()
  }, c.prototype.adjustDialog = function() {
    var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
    })
  }, c.prototype.resetAdjustments = function() {
    this.$element.css({paddingLeft: "", paddingRight: ""})
  }, c.prototype.checkScrollbar = function() {
    var a = window.innerWidth;
    if (!a) {
      var b = document.documentElement.getBoundingClientRect();
      a = b.right - Math.abs(b.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth <
        a, this.scrollbarWidth = this.measureScrollbar()
  }, c.prototype.setScrollbar = function() {
    var a = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing &&
    this.$body.css("padding-right", a + this.scrollbarWidth)
  }, c.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad)
  }, c.prototype.measureScrollbar = function() {
    var a = document.createElement("div");
    a.className = "modal-scrollbar-measure", this.$body.append(a);
    var b = a.offsetWidth - a.clientWidth;
    return this.$body[0].removeChild(a), b
  };
  var d = a.fn.modal;
  a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
    return a.fn.modal = d, this
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
    var d = a(this), e = d.attr("href"), f = a(
        d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")), g = f.data("bs.modal") ?
        "toggle" :
        a.extend({remote: !/#/.test(e) && e}, f.data(), d.data());
    d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
      a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
        d.is(":visible") && d.trigger("focus")
      })
    }), b.call(f, g, this)
  })
}(jQuery), +function(a) {
  "use strict";
  function b(b) {
    return this.each(function() {
      var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b;
      (e || !/destroy|hide/.test(b)) &&
      (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
    })
  }

  var c = function(a, b) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init(
        "tooltip", a, b)
  };
  c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {selector: "body", padding: 0}
  }, c.prototype.init = function(b, c, d) {
    if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(
            d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ?
                this.options.viewport.call(this, this.$element) :
            this.options.viewport.selector || this.options.viewport), this.inState = {
          click: !1,
          hover: !1,
          focus: !1
        }, this.$element[0] instanceof document.constructor &&
        !this.options.selector)throw new Error("`selector` option must be specified when initializing " +
        this.type + " on the window.document object!");
    for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];
      if ("click" == g)this.$element.on("click." + this.type, this.options.selector,
          a.proxy(this.toggle, this)); else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ?
            "mouseleave" :
            "focusout";
        this.$element.on(h + "." + this.type, this.options.selector,
            a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector,
            a.proxy(this.leave, this))
      }
    }
    this.options.selector ?
        this._options = a.extend({}, this.options, {trigger: "manual", selector: ""}) :
        this.fixTitle()
  }, c.prototype.getDefaults = function() {
    return c.DEFAULTS
  }, c.prototype.getOptions = function(b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay &&
    "number" == typeof b.delay && (b.delay = {show: b.delay, hide: b.delay}), b
  }, c.prototype.getDelegateOptions = function() {
    var b = {}, c = this.getDefaults();
    return this._options && a.each(this._options, function(a, d) {
      c[a] != d && (b[a] = d)
    }), b
  }, c.prototype.enter = function(b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c ||
    (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget)
        .data("bs." + this.type, c)), b instanceof a.Event &&
    (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") ||
    "in" == c.hoverState ?
        void(c.hoverState = "in") :
        (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ?
            void(c.timeout = setTimeout(function() {
              "in" == c.hoverState && c.show()
            }, c.options.delay.show)) :
            c.show())
  }, c.prototype.isInStateTrue = function() {
    for (var a in this.inState)if (this.inState[a])return !0;
    return !1
  }, c.prototype.leave = function(b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c ||
    (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget)
        .data("bs." + this.type, c)), b instanceof a.Event &&
    (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ?
        void 0 :
        (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ?
            void(c.timeout = setTimeout(function() {
              "out" == c.hoverState && c.hide()
            }, c.options.delay.hide)) :
            c.hide())
  }, c.prototype.show = function() {
    var b = a.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);
      var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (b.isDefaultPrevented() || !d)return;
      var e = this, f = this.tip(), g = this.getUID(this.type);
      this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby",
          g), this.options.animation && f.addClass("fade");
      var h = "function" == typeof this.options.placement ?
          this.options.placement.call(this, f[0], this.$element[0]) :
          this.options.placement, i = /\s?auto?\s?/i, j = i.test(h);
      j && (h = h.replace(i, "") || "top"), f.detach()
          .css({top: 0, left: 0, display: "block"})
          .addClass(h)
          .data("bs." + this.type, this), this.options.container ?
          f.appendTo(this.options.container) :
          f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight;
      if (j) {
        var n = h, o = this.getPosition(this.$viewport);
        h = "bottom" == h && k.bottom + m > o.bottom ?
            "top" :
            "top" == h && k.top - m < o.top ?
                "bottom" :
                "right" == h && k.right + l > o.width ?
                    "left" :
                    "left" == h && k.left - l < o.left ?
                        "right" :
                        h, f.removeClass(n).addClass(h)
      }
      var p = this.getCalculatedOffset(h, k, l, m);
      this.applyPlacement(p, h);
      var q = function() {
        var a = e.hoverState;
        e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
      };
      a.support.transition && this.$tip.hasClass("fade") ?
          f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) :
          q()
    }
  }, c.prototype.applyPlacement = function(b, c) {
    var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(
        d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10);
    isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0],
        a.extend({
          using: function(a) {
            d.css({top: Math.round(a.top), left: Math.round(a.left)})
          }
        }, b), 0), d.addClass("in");
    var i = d[0].offsetWidth, j = d[0].offsetHeight;
    "top" == c && j != f && (b.top = b.top + f - j);
    var k = this.getViewportAdjustedDelta(c, b, i, j);
    k.left ? b.left += k.left : b.top += k.top;
    var l = /top|bottom/.test(c), m = l ? 2 * k.left - e + i : 2 * k.top - f + j, n = l ?
        "offsetWidth" :
        "offsetHeight";
    d.offset(b), this.replaceArrow(m, d[0][n], l)
  }, c.prototype.replaceArrow = function(a, b, c) {
    this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
  }, c.prototype.setContent = function() {
    var a = this.tip(), b = this.getTitle();
    a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass(
        "fade in top bottom left right")
  }, c.prototype.hide = function(b) {
    function d() {
      "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby")
          .trigger("hidden.bs." + e.type), b && b()
    }

    var e = this, f = a(this.$tip), g = a.Event("hide.bs." + this.type);
    return this.$element.trigger(g), g.isDefaultPrevented() ?
        void 0 :
        (f.removeClass("in"), a.support.transition && f.hasClass("fade") ?
            f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) :
            d(), this.hoverState = null, this)
  }, c.prototype.fixTitle = function() {
    var a = this.$element;
    (a.attr("title") || "string" != typeof a.attr("data-original-title")) &&
    a.attr("data-original-title", a.attr("title") || "").attr("title", "")
  }, c.prototype.hasContent = function() {
    return this.getTitle()
  }, c.prototype.getPosition = function(b) {
    b = b || this.$element;
    var c = b[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect();
    null == e.width && (e = a.extend({}, e, {width: e.right - e.left, height: e.bottom - e.top}));
    var f = d ? {top: 0, left: 0} : b.offset(), g = {
      scroll: d ?
      document.documentElement.scrollTop || document.body.scrollTop :
          b.scrollTop()
    }, h = d ? {width: a(window).width(), height: a(window).height()} : null;
    return a.extend({}, e, g, h, f)
  }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
    return "bottom" == a ?
    {
      top: b.top + b.height,
      left: b.left + b.width / 2 - c / 2
    } :
        "top" == a ?
        {
          top: b.top - d,
          left: b.left + b.width / 2 - c / 2
        } :
            "left" == a ?
            {
              top: b.top + b.height / 2 - d / 2,
              left: b.left - c
            } :
            {
              top: b.top + b.height / 2 - d / 2,
              left: b.left + b.width
            }
  }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
    var e = {top: 0, left: 0};
    if (!this.$viewport)return e;
    var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(
        this.$viewport);
    if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
      h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
    } else {
      var j = b.left - f, k = b.left + f + c;
      j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
    }
    return e
  }, c.prototype.getTitle = function() {
    var a, b = this.$element, c = this.options;
    return a = b.attr("data-original-title") ||
        ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
  }, c.prototype.getUID = function(a) {
    do {
      a += ~~(1e6 * Math.random());
    } while (document.getElementById(a));
    return a
  }, c.prototype.tip = function() {
    if (!this.$tip &&
        (this.$tip = a(this.options.template), 1 != this.$tip.length))throw new Error(this.type +
        " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
  }, c.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, c.prototype.enable = function() {
    this.enabled = !0
  }, c.prototype.disable = function() {
    this.enabled = !1
  }, c.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
  }, c.prototype.toggle = function(b) {
    var c = this;
    b && (c = a(b.currentTarget).data("bs." + this.type), c ||
    (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget)
        .data("bs." + this.type, c))), b ?
        (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) :
        c.tip().hasClass("in") ?
            c.leave(c) :
            c.enter(c)
  }, c.prototype.destroy = function() {
    var a = this;
    clearTimeout(this.timeout), this.hide(function() {
      a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip &&
      a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
    })
  };
  var d = a.fn.tooltip;
  a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
    return a.fn.tooltip = d, this
  }
}(jQuery), +function(a) {
  "use strict";
  function b(b) {
    return this.each(function() {
      var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b;
      (e || !/destroy|hide/.test(b)) &&
      (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
    })
  }

  var c = function(a, b) {
    this.init("popover", a, b)
  };
  if (!a.fn.tooltip)throw new Error("Popover requires tooltip.js");
  c.VERSION = "3.3.5", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), c.prototype = a.extend({},
      a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
    return c.DEFAULTS
  }, c.prototype.setContent = function() {
    var a = this.tip(), b = this.getTitle(), c = this.getContent();
    a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")
        .children()
        .detach()
        .end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](
        c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() ||
    a.find(".popover-title").hide()
  }, c.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
  }, c.prototype.getContent = function() {
    var a = this.$element, b = this.options;
    return a.attr("data-content") ||
        ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
  }, c.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  };
  var d = a.fn.popover;
  a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
    return a.fn.popover = d, this
  }
}(jQuery), +function(a) {
  "use strict";
  function b(c, d) {
    this.$body = a(document.body), this.$scrollElement = a(
        a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS,
        d), this.selector = (this.options.target || "") +
        " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on(
        "scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
  }

  function c(c) {
    return this.each(function() {
      var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
      e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
    })
  }

  b.VERSION = "3.3.5", b.DEFAULTS = {offset: 10}, b.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight ||
        Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }, b.prototype.refresh = function() {
    var b = this, c = "offset", d = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(
        this.$scrollElement[0]) ||
    (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector)
        .map(function() {
          var b = a(this), e = b.data("target") || b.attr("href"), f = /^#./.test(e) && a(e);
          return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null
        })
        .sort(function(a, b) {
          return a[0] - b[0]
        })
        .each(function() {
          b.offsets.push(this[0]), b.targets.push(this[1])
        })
  }, b.prototype.process = function() {
    var a, b = this.$scrollElement.scrollTop() +
        this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c -
        this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
    if (this.scrollHeight != c && this.refresh(), b >= d)return g != (a = f[f.length - 1]) &&
        this.activate(a);
    if (g && b < e[0])return this.activeTarget = null, this.clear();
    for (a = e.length; a--;)g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) &&
    this.activate(f[a])
  }, b.prototype.activate = function(b) {
    this.activeTarget = b, this.clear();
    var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b +
        '"]', d = a(c).parents("li").addClass("active");
    d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")),
        d.trigger("activate.bs.scrollspy")
  }, b.prototype.clear = function() {
    a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
  };
  var d = a.fn.scrollspy;
  a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
    return a.fn.scrollspy = d, this
  }, a(window).on("load.bs.scrollspy.data-api", function() {
    a('[data-spy="scroll"]').each(function() {
      var b = a(this);
      c.call(b, b.data())
    })
  })
}(jQuery), +function(a) {
  "use strict";
  function b(b) {
    return this.each(function() {
      var d = a(this), e = d.data("bs.tab");
      e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
    })
  }

  var c = function(b) {
    this.element = a(b)
  };
  c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
    var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
    if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li")
            .hasClass("active")) {
      var e = c.find(".active:last a"), f = a.Event("hide.bs.tab",
          {relatedTarget: b[0]}), g = a.Event("show.bs.tab", {relatedTarget: e[0]});
      if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
        var h = a(d);
        this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
          e.trigger({type: "hidden.bs.tab", relatedTarget: b[0]}), b.trigger(
              {type: "shown.bs.tab", relatedTarget: e[0]})
        })
      }
    }
  }, c.prototype.activate = function(b, d, e) {
    function f() {
      g.removeClass("active")
          .find("> .dropdown-menu > .active")
          .removeClass("active")
          .end()
          .find('[data-toggle="tab"]')
          .attr("aria-expanded", !1), b.addClass("active")
          .find('[data-toggle="tab"]')
          .attr("aria-expanded", !0), h ?
          (b[0].offsetWidth, b.addClass("in")) :
          b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown")
          .addClass("active")
          .end()
          .find('[data-toggle="tab"]')
          .attr("aria-expanded", !0), e && e()
    }

    var g = d.find("> .active"), h = e && a.support.transition &&
        (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
    g.length && h ?
        g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) :
        f(), g.removeClass("in")
  };
  var d = a.fn.tab;
  a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
    return a.fn.tab = d, this
  };
  var e = function(c) {
    c.preventDefault(), b.call(a(this), "show")
  };
  a(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', e)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), +function(a) {
  "use strict";
  function b(b) {
    return this.each(function() {
      var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b;
      e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
    })
  }

  var c = function(b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target)
        .on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this))
        .on("click.bs.affix.data-api",
            a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(
        b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
  };
  c.VERSION = "3.3.5", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
    offset: 0,
    target: window
  }, c.prototype.getState = function(a, b, c, d) {
    var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height();
    if (null != c && "top" == this.affixed)return c > e ? "top" : !1;
    if ("bottom" == this.affixed)return null != c ?
        e + this.unpin <= f.top ?
            !1 :
            "bottom" :
        a - d >= e + g ?
            !1 :
            "bottom";
    var h = null == this.affixed, i = h ? e : f.top, j = h ? g : b;
    return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
  }, c.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset)return this.pinnedOffset;
    this.$element.removeClass(c.RESET).addClass("affix");
    var a = this.$target.scrollTop(), b = this.$element.offset();
    return this.pinnedOffset = b.top - a
  }, c.prototype.checkPositionWithEventLoop = function() {
    setTimeout(a.proxy(this.checkPosition, this), 1)
  }, c.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
      var b = this.$element.height(), d = this.options.offset, e = d.top, f = d.bottom, g = Math.max(
          a(document).height(), a(document.body).height());
      "object" != typeof d && (f = e = d), "function" == typeof e &&
      (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
      var h = this.getState(g, b, e, f);
      if (this.affixed != h) {
        null != this.unpin && this.$element.css("top", "");
        var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix");
        if (this.$element.trigger(j), j.isDefaultPrevented())return;
        this.affixed = h, this.unpin = "bottom" == h ?
            this.getPinnedOffset() :
            null, this.$element.removeClass(c.RESET)
            .addClass(i)
            .trigger(i.replace("affix", "affixed") + ".bs.affix")
      }
      "bottom" == h && this.$element.offset({top: g - b - f})
    }
  };
  var d = a.fn.affix;
  a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
    return a.fn.affix = d, this
  }, a(window).on("load", function() {
    a('[data-spy="affix"]').each(function() {
      var c = a(this), d = c.data();
      d.offset = d.offset || {}, null != d.offsetBottom &&
      (d.offset.bottom = d.offsetBottom), null != d.offsetTop &&
      (d.offset.top = d.offsetTop), b.call(c, d)
    })
  })
}(jQuery);
/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

(function(window, document, $, undefined) {
  "use strict";

  var H = $("html"),
      W = $(window),
      D = $(document),
      F = $.fancybox = function() {
        F.open.apply(this, arguments);
      },
      IE = navigator.userAgent.match(/msie/i),
      didUpdate = null,
      isTouch = document.createTouch !== undefined,

      isQuery = function(obj) {
        return obj && obj.hasOwnProperty && obj instanceof $;
      },
      isString = function(str) {
        return str && $.type(str) === "string";
      },
      isPercentage = function(str) {
        return isString(str) && str.indexOf('%') > 0;
      },
      isScrollable = function(el) {
        return (el && !(el.style.overflow && el.style.overflow === 'hidden') &&
        ((el.clientWidth && el.scrollWidth > el.clientWidth) ||
        (el.clientHeight && el.scrollHeight > el.clientHeight)));
      },
      getScalar = function(orig, dim) {
        var value = parseInt(orig, 10) || 0;

        if (dim && isPercentage(orig)) {
          value = F.getViewport()[dim] / 100 * value;
        }

        return Math.ceil(value);
      },
      getValue = function(value, dim) {
        return getScalar(value, dim) + 'px';
      };

  $.extend(F, {
    // The current version of fancyBox
    version: '2.1.5',

    defaults: {
      padding: 15,
      margin: 20,

      width: 800,
      height: 600,
      minWidth: 100,
      minHeight: 100,
      maxWidth: 9999,
      maxHeight: 9999,
      pixelRatio: 1, // Set to 2 for retina display support

      autoSize: true,
      autoHeight: false,
      autoWidth: false,

      autoResize: true,
      autoCenter: !isTouch,
      fitToView: true,
      aspectRatio: false,
      topRatio: 0.5,
      leftRatio: 0.5,

      scrolling: 'auto', // 'auto', 'yes' or 'no'
      wrapCSS: '',

      arrows: true,
      closeBtn: true,
      closeClick: false,
      nextClick: false,
      mouseWheel: true,
      autoPlay: false,
      playSpeed: 3000,
      preload: 3,
      modal: false,
      loop: true,

      ajax: {
        dataType: 'html',
        headers: {'X-fancyBox': true}
      },
      iframe: {
        scrolling: 'auto',
        preload: true
      },
      swf: {
        wmode: 'transparent',
        allowfullscreen: 'true',
        allowscriptaccess: 'always'
      },

      keys: {
        next: {
          13: 'left', // enter
          34: 'up',   // page down
          39: 'left', // right arrow
          40: 'up'    // down arrow
        },
        prev: {
          8: 'right',  // backspace
          33: 'down',   // page up
          37: 'right',  // left arrow
          38: 'down'    // up arrow
        },
        close: [27], // escape key
        play: [32], // space - start/stop slideshow
        toggle: [70]  // letter "f" - toggle fullscreen
      },

      direction: {
        next: 'left',
        prev: 'right'
      },

      scrollOutside: true,

      // Override some properties
      index: 0,
      type: null,
      href: null,
      content: null,
      title: null,

      // HTML templates
      tpl: {
        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        image: '<img class="fancybox-image" src="{href}" alt="" />',
        iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
        (IE ? ' allowtransparency="true"' : '') + '></iframe>',
        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
        closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
        next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
        prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
      },

      // Properties for each animation type
      // Opening fancyBox
      openEffect: 'fade', // 'elastic', 'fade' or 'none'
      openSpeed: 250,
      openEasing: 'swing',
      openOpacity: true,
      openMethod: 'zoomIn',

      // Closing fancyBox
      closeEffect: 'fade', // 'elastic', 'fade' or 'none'
      closeSpeed: 250,
      closeEasing: 'swing',
      closeOpacity: true,
      closeMethod: 'zoomOut',

      // Changing next gallery item
      nextEffect: 'elastic', // 'elastic', 'fade' or 'none'
      nextSpeed: 250,
      nextEasing: 'swing',
      nextMethod: 'changeIn',

      // Changing previous gallery item
      prevEffect: 'elastic', // 'elastic', 'fade' or 'none'
      prevSpeed: 250,
      prevEasing: 'swing',
      prevMethod: 'changeOut',

      // Enable default helpers
      helpers: {
        overlay: true,
        title: true
      },

      // Callbacks
      onCancel: $.noop, // If canceling
      beforeLoad: $.noop, // Before loading
      afterLoad: $.noop, // After loading
      beforeShow: $.noop, // Before changing in current item
      afterShow: $.noop, // After opening
      beforeChange: $.noop, // Before changing gallery item
      beforeClose: $.noop, // Before closing
      afterClose: $.noop  // After closing
    },

    //Current state
    group: {}, // Selected group
    opts: {}, // Group options
    previous: null,  // Previous element
    coming: null,  // Element being loaded
    current: null,  // Currently loaded element
    isActive: false, // Is activated
    isOpen: false, // Is currently open
    isOpened: false, // Have been fully opened at least once

    wrap: null,
    skin: null,
    outer: null,
    inner: null,

    player: {
      timer: null,
      isActive: false
    },

    // Loaders
    ajaxLoad: null,
    imgPreload: null,

    // Some collections
    transitions: {},
    helpers: {},

    /*
     *	Static methods
     */

    open: function(group, opts) {
      if (!group) {
        return;
      }

      if (!$.isPlainObject(opts)) {
        opts = {};
      }

      // Close if already active
      if (false === F.close(true)) {
        return;
      }

      // Normalize group
      if (!$.isArray(group)) {
        group = isQuery(group) ? $(group).get() : [group];
      }

      // Recheck if the type of each element is `object` and set content type (image, ajax, etc)
      $.each(group, function(i, element) {
        var obj = {},
            href,
            title,
            content,
            type,
            rez,
            hrefParts,
            selector;

        if ($.type(element) === "object") {
          // Check if is DOM element
          if (element.nodeType) {
            element = $(element);
          }

          if (isQuery(element)) {
            obj = {
              href: element.data('fancybox-href') || element.attr('href'),
              title: element.data('fancybox-title') || element.attr('title'),
              isDom: true,
              element: element
            };

            if ($.metadata) {
              $.extend(true, obj, element.metadata());
            }

          } else {
            obj = element;
          }
        }

        href = opts.href || obj.href || (isString(element) ? element : null);
        title = opts.title !== undefined ? opts.title : obj.title || '';

        content = opts.content || obj.content;
        type = content ? 'html' : (opts.type || obj.type);

        if (!type && obj.isDom) {
          type = element.data('fancybox-type');

          if (!type) {
            rez = element.prop('class').match(/fancybox\.(\w+)/);
            type = rez ? rez[1] : null;
          }
        }

        if (isString(href)) {
          // Try to guess the content type
          if (!type) {
            if (F.isImage(href)) {
              type = 'image';

            } else if (F.isSWF(href)) {
              type = 'swf';

            } else if (href.charAt(0) === '#') {
              type = 'inline';

            } else if (isString(element)) {
              type = 'html';
              content = element;
            }
          }

          // Split url into two pieces with source url and content selector, e.g,
          // "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
          if (type === 'ajax') {
            hrefParts = href.split(/\s+/, 2);
            href = hrefParts.shift();
            selector = hrefParts.shift();
          }
        }

        if (!content) {
          if (type === 'inline') {
            if (href) {
              content = $(isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href); //strip for ie7

            } else if (obj.isDom) {
              content = element;
            }

          } else if (type === 'html') {
            content = href;

          } else if (!type && !href && obj.isDom) {
            type = 'inline';
            content = element;
          }
        }

        $.extend(obj, {
          href: href,
          type: type,
          content: content,
          title: title,
          selector: selector
        });

        group[i] = obj;
      });

      // Extend the defaults
      F.opts = $.extend(true, {}, F.defaults, opts);

      // All options are merged recursive except keys
      if (opts.keys !== undefined) {
        F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
      }

      F.group = group;

      return F._start(F.opts.index);
    },

    // Cancel image loading or abort ajax request
    cancel: function() {
      var coming = F.coming;

      if (!coming || false === F.trigger('onCancel')) {
        return;
      }

      F.hideLoading();

      if (F.ajaxLoad) {
        F.ajaxLoad.abort();
      }

      F.ajaxLoad = null;

      if (F.imgPreload) {
        F.imgPreload.onload = F.imgPreload.onerror = null;
      }

      if (coming.wrap) {
        coming.wrap.stop(true, true).trigger('onReset').remove();
      }

      F.coming = null;

      // If the first item has been canceled, then clear everything
      if (!F.current) {
        F._afterZoomOut(coming);
      }
    },

    // Start closing animation if is open; remove immediately if opening/closing
    close: function(event) {
      F.cancel();

      if (false === F.trigger('beforeClose')) {
        return;
      }

      F.unbindEvents();

      if (!F.isActive) {
        return;
      }

      if (!F.isOpen || event === true) {
        $('.fancybox-wrap').stop(true).trigger('onReset').remove();

        F._afterZoomOut();

      } else {
        F.isOpen = F.isOpened = false;
        F.isClosing = true;

        $('.fancybox-item, .fancybox-nav').remove();

        F.wrap.stop(true, true).removeClass('fancybox-opened');

        F.transitions[F.current.closeMethod]();
      }
    },

    // Manage slideshow:
    //   $.fancybox.play(); - toggle slideshow
    //   $.fancybox.play( true ); - start
    //   $.fancybox.play( false ); - stop
    play: function(action) {
      var clear = function() {
            clearTimeout(F.player.timer);
          },
          set = function() {
            clear();

            if (F.current && F.player.isActive) {
              F.player.timer = setTimeout(F.next, F.current.playSpeed);
            }
          },
          stop = function() {
            clear();

            D.unbind('.player');

            F.player.isActive = false;

            F.trigger('onPlayEnd');
          },
          start = function() {
            if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
              F.player.isActive = true;

              D.bind({
                'onCancel.player beforeClose.player': stop,
                'onUpdate.player': set,
                'beforeLoad.player': clear
              });

              set();

              F.trigger('onPlayStart');
            }
          };

      if (action === true || (!F.player.isActive && action !== false)) {
        start();
      } else {
        stop();
      }
    },

    // Navigate to next gallery item
    next: function(direction) {
      var current = F.current;

      if (current) {
        if (!isString(direction)) {
          direction = current.direction.next;
        }

        F.jumpto(current.index + 1, direction, 'next');
      }
    },

    // Navigate to previous gallery item
    prev: function(direction) {
      var current = F.current;

      if (current) {
        if (!isString(direction)) {
          direction = current.direction.prev;
        }

        F.jumpto(current.index - 1, direction, 'prev');
      }
    },

    // Navigate to gallery item by index
    jumpto: function(index, direction, router) {
      var current = F.current;

      if (!current) {
        return;
      }

      index = getScalar(index);

      F.direction = direction || current.direction[(index >= current.index ? 'next' : 'prev')];
      F.router = router || 'jumpto';

      if (current.loop) {
        if (index < 0) {
          index = current.group.length + (index % current.group.length);
        }

        index = index % current.group.length;
      }

      if (current.group[index] !== undefined) {
        F.cancel();

        F._start(index);
      }
    },

    // Center inside viewport and toggle position type to fixed or absolute if needed
    reposition: function(e, onlyAbsolute) {
      var current = F.current,
          wrap = current ? current.wrap : null,
          pos;

      if (wrap) {
        pos = F._getPosition(onlyAbsolute);

        if (e && e.type === 'scroll') {
          delete pos.position;

          wrap.stop(true, true).animate(pos, 200);

        } else {
          wrap.css(pos);

          current.pos = $.extend({}, current.dim, pos);
        }
      }
    },

    update: function(e) {
      var type = (e && e.type),
          anyway = !type || type === 'orientationchange';

      if (anyway) {
        clearTimeout(didUpdate);

        didUpdate = null;
      }

      if (!F.isOpen || didUpdate) {
        return;
      }

      didUpdate = setTimeout(function() {
        var current = F.current;

        if (!current || F.isClosing) {
          return;
        }

        F.wrap.removeClass('fancybox-tmp');

        if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
          F._setDimension();
        }

        if (!(type === 'scroll' && current.canShrink)) {
          F.reposition(e);
        }

        F.trigger('onUpdate');

        didUpdate = null;

      }, (anyway && !isTouch ? 0 : 300));
    },

    // Shrink content to fit inside viewport or restore if resized
    toggle: function(action) {
      if (F.isOpen) {
        F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

        // Help browser to restore document dimensions
        if (isTouch) {
          F.wrap.removeAttr('style').addClass('fancybox-tmp');

          F.trigger('onUpdate');
        }

        F.update();
      }
    },

    hideLoading: function() {
      D.unbind('.loading');

      $('#fancybox-loading').remove();
    },

    showLoading: function() {
      var el, viewport;

      F.hideLoading();

      el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

      // If user will press the escape-button, the request will be canceled
      D.bind('keydown.loading', function(e) {
        if ((e.which || e.keyCode) === 27) {
          e.preventDefault();

          F.cancel();
        }
      });

      if (!F.defaults.fixed) {
        viewport = F.getViewport();

        el.css({
          position: 'absolute',
          top: (viewport.h * 0.5) + viewport.y,
          left: (viewport.w * 0.5) + viewport.x
        });
      }
    },

    getViewport: function() {
      var locked = (F.current && F.current.locked) || false,
          rez = {
            x: W.scrollLeft(),
            y: W.scrollTop()
          };

      if (locked) {
        rez.w = locked[0].clientWidth;
        rez.h = locked[0].clientHeight;

      } else {
        // See http://bugs.jquery.com/ticket/6724
        rez.w = isTouch && window.innerWidth ? window.innerWidth : W.width();
        rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
      }

      return rez;
    },

    // Unbind the keyboard / clicking actions
    unbindEvents: function() {
      if (F.wrap && isQuery(F.wrap)) {
        F.wrap.unbind('.fb');
      }

      D.unbind('.fb');
      W.unbind('.fb');
    },

    bindEvents: function() {
      var current = F.current,
          keys;

      if (!current) {
        return;
      }

      // Changing document height on iOS devices triggers a 'resize' event,
      // that can change document height... repeating infinitely
      W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') +
          (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

      keys = current.keys;

      if (keys) {
        D.bind('keydown.fb', function(e) {
          var code = e.which || e.keyCode,
              target = e.target || e.srcElement;

          // Skip esc key if loading, because showLoading will cancel preloading
          if (code === 27 && F.coming) {
            return false;
          }

          // Ignore key combinations and key events within form elements
          if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey &&
              !(target && (target.type || $(target).is('[contenteditable]')))) {
            $.each(keys, function(i, val) {
              if (current.group.length > 1 && val[code] !== undefined) {
                F[i](val[code]);

                e.preventDefault();
                return false;
              }

              if ($.inArray(code, val) > -1) {
                F[i]();

                e.preventDefault();
                return false;
              }
            });
          }
        });
      }

      if ($.fn.mousewheel && current.mouseWheel) {
        F.wrap.bind('mousewheel.fb', function(e, delta, deltaX, deltaY) {
          var target = e.target || null,
              parent = $(target),
              canScroll = false;

          while (parent.length) {
            if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
              break;
            }

            canScroll = isScrollable(parent[0]);
            parent = $(parent).parent();
          }

          if (delta !== 0 && !canScroll) {
            if (F.group.length > 1 && !current.canShrink) {
              if (deltaY > 0 || deltaX > 0) {
                F.prev(deltaY > 0 ? 'down' : 'left');

              } else if (deltaY < 0 || deltaX < 0) {
                F.next(deltaY < 0 ? 'up' : 'right');
              }

              e.preventDefault();
            }
          }
        });
      }
    },

    trigger: function(event, o) {
      var ret, obj = o || F.coming || F.current;

      if (!obj) {
        return;
      }

      if ($.isFunction(obj[event])) {
        ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
      }

      if (ret === false) {
        return false;
      }

      if (obj.helpers) {
        $.each(obj.helpers, function(helper, opts) {
          if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
            F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
          }
        });
      }

      D.trigger(event);
    },

    isImage: function(str) {
      return isString(str) &&
          str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
    },

    isSWF: function(str) {
      return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
    },

    _start: function(index) {
      var coming = {},
          obj,
          href,
          type,
          margin,
          padding;

      index = getScalar(index);
      obj = F.group[index] || null;

      if (!obj) {
        return false;
      }

      coming = $.extend(true, {}, F.opts, obj);

      // Convert margin and padding properties to array - top, right, bottom, left
      margin = coming.margin;
      padding = coming.padding;

      if ($.type(margin) === 'number') {
        coming.margin = [margin, margin, margin, margin];
      }

      if ($.type(padding) === 'number') {
        coming.padding = [padding, padding, padding, padding];
      }

      // 'modal' propery is just a shortcut
      if (coming.modal) {
        $.extend(true, coming, {
          closeBtn: false,
          closeClick: false,
          nextClick: false,
          arrows: false,
          mouseWheel: false,
          keys: null,
          helpers: {
            overlay: {
              closeClick: false
            }
          }
        });
      }

      // 'autoSize' property is a shortcut, too
      if (coming.autoSize) {
        coming.autoWidth = coming.autoHeight = true;
      }

      if (coming.width === 'auto') {
        coming.autoWidth = true;
      }

      if (coming.height === 'auto') {
        coming.autoHeight = true;
      }

      /*
       * Add reference to the group, so it`s possible to access from callbacks, example:
       * afterLoad : function() {
       *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
       * }
       */

      coming.group = F.group;
      coming.index = index;

      // Give a chance for callback or helpers to update coming item (type, title, etc)
      F.coming = coming;

      if (false === F.trigger('beforeLoad')) {
        F.coming = null;

        return;
      }

      type = coming.type;
      href = coming.href;

      if (!type) {
        F.coming = null;

        //If we can not determine content type then drop silently or display next/prev item if looping through gallery
        if (F.current && F.router && F.router !== 'jumpto') {
          F.current.index = index;

          return F[F.router](F.direction);
        }

        return false;
      }

      F.isActive = true;

      if (type === 'image' || type === 'swf') {
        coming.autoHeight = coming.autoWidth = false;
        coming.scrolling = 'visible';
      }

      if (type === 'image') {
        coming.aspectRatio = true;
      }

      if (type === 'iframe' && isTouch) {
        coming.scrolling = 'scroll';
      }

      // Build the neccessary markup
      coming.wrap = $(coming.tpl.wrap)
          .addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type +
              ' fancybox-tmp ' + coming.wrapCSS)
          .appendTo(coming.parent || 'body');

      $.extend(coming, {
        skin: $('.fancybox-skin', coming.wrap),
        outer: $('.fancybox-outer', coming.wrap),
        inner: $('.fancybox-inner', coming.wrap)
      });

      $.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
        coming.skin.css('padding' + v, getValue(coming.padding[i]));
      });

      F.trigger('onReady');

      // Check before try to load; 'inline' and 'html' types need content, others - href
      if (type === 'inline' || type === 'html') {
        if (!coming.content || !coming.content.length) {
          return F._error('content');
        }

      } else if (!href) {
        return F._error('href');
      }

      if (type === 'image') {
        F._loadImage();

      } else if (type === 'ajax') {
        F._loadAjax();

      } else if (type === 'iframe') {
        F._loadIframe();

      } else {
        F._afterLoad();
      }
    },

    _error: function(type) {
      $.extend(F.coming, {
        type: 'html',
        autoWidth: true,
        autoHeight: true,
        minWidth: 0,
        minHeight: 0,
        scrolling: 'no',
        hasError: type,
        content: F.coming.tpl.error
      });

      F._afterLoad();
    },

    _loadImage: function() {
      // Reset preload image so it is later possible to check "complete" property
      var img = F.imgPreload = new Image();

      img.onload = function() {
        this.onload = this.onerror = null;

        F.coming.width = this.width / F.opts.pixelRatio;
        F.coming.height = this.height / F.opts.pixelRatio;

        F._afterLoad();
      };

      img.onerror = function() {
        this.onload = this.onerror = null;

        F._error('image');
      };

      img.src = F.coming.href;

      if (img.complete !== true) {
        F.showLoading();
      }
    },

    _loadAjax: function() {
      var coming = F.coming;

      F.showLoading();

      F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
        url: coming.href,
        error: function(jqXHR, textStatus) {
          if (F.coming && textStatus !== 'abort') {
            F._error('ajax', jqXHR);

          } else {
            F.hideLoading();
          }
        },
        success: function(data, textStatus) {
          if (textStatus === 'success') {
            coming.content = data;

            F._afterLoad();
          }
        }
      }));
    },

    _loadIframe: function() {
      var coming = F.coming,
          iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
              .attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
              .attr('src', coming.href);

      // This helps IE
      $(coming.wrap).bind('onReset', function() {
        try {
          $(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
        } catch (e) {
        }
      });

      if (coming.iframe.preload) {
        F.showLoading();

        iframe.one('load', function() {
          $(this).data('ready', 1);

          // iOS will lose scrolling if we resize
          if (!isTouch) {
            $(this).bind('load.fb', F.update);
          }

          // Without this trick:
          //   - iframe won't scroll on iOS devices
          //   - IE7 sometimes displays empty iframe
          $(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

          F._afterLoad();
        });
      }

      coming.content = iframe.appendTo(coming.inner);

      if (!coming.iframe.preload) {
        F._afterLoad();
      }
    },

    _preloadImages: function() {
      var group = F.group,
          current = F.current,
          len = group.length,
          cnt = current.preload ? Math.min(current.preload, len - 1) : 0,
          item,
          i;

      for (i = 1; i <= cnt; i += 1) {
        item = group[(current.index + i ) % len];

        if (item.type === 'image' && item.href) {
          new Image().src = item.href;
        }
      }
    },

    _afterLoad: function() {
      var coming = F.coming,
          previous = F.current,
          placeholder = 'fancybox-placeholder',
          current,
          content,
          type,
          scrolling,
          href,
          embed;

      F.hideLoading();

      if (!coming || F.isActive === false) {
        return;
      }

      if (false === F.trigger('afterLoad', coming, previous)) {
        coming.wrap.stop(true).trigger('onReset').remove();

        F.coming = null;

        return;
      }

      if (previous) {
        F.trigger('beforeChange', previous);

        previous.wrap.stop(true).removeClass('fancybox-opened')
            .find('.fancybox-item, .fancybox-nav')
            .remove();
      }

      F.unbindEvents();

      current = coming;
      content = coming.content;
      type = coming.type;
      scrolling = coming.scrolling;

      $.extend(F, {
        wrap: current.wrap,
        skin: current.skin,
        outer: current.outer,
        inner: current.inner,
        current: current,
        previous: previous
      });

      href = current.href;

      switch (type) {
        case 'inline':
        case 'ajax':
        case 'html':
          if (current.selector) {
            content = $('<div>').html(content).find(current.selector);

          } else if (isQuery(content)) {
            if (!content.data(placeholder)) {
              content.data(placeholder,
                  $('<div class="' + placeholder + '"></div>').insertAfter(content).hide());
            }

            content = content.show().detach();

            current.wrap.bind('onReset', function() {
              if ($(this).find(content).length) {
                content.hide().replaceAll(content.data(placeholder)).data(placeholder, false);
              }
            });
          }
          break;

        case 'image':
          content = current.tpl.image.replace('{href}', href);
          break;

        case 'swf':
          content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' +
              href + '"></param>';
          embed = '';

          $.each(current.swf, function(name, val) {
            content += '<param name="' + name + '" value="' + val + '"></param>';
            embed += ' ' + name + '="' + val + '"';
          });

          content += '<embed src="' + href +
              '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed +
              '></embed></object>';
          break;
      }

      if (!(isQuery(content) && content.parent().is(current.inner))) {
        current.inner.append(content);
      }

      // Give a chance for helpers or callbacks to update elements
      F.trigger('beforeShow');

      // Set scrolling before calculating dimensions
      current.inner.css('overflow',
          scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

      // Set initial dimensions and start position
      F._setDimension();

      F.reposition();

      F.isOpen = false;
      F.coming = null;

      F.bindEvents();

      if (!F.isOpened) {
        $('.fancybox-wrap').not(current.wrap).stop(true).trigger('onReset').remove();

      } else if (previous.prevMethod) {
        F.transitions[previous.prevMethod]();
      }

      F.transitions[F.isOpened ? current.nextMethod : current.openMethod]();

      F._preloadImages();
    },

    _setDimension: function() {
      var viewport = F.getViewport(),
          steps = 0,
          canShrink = false,
          canExpand = false,
          wrap = F.wrap,
          skin = F.skin,
          inner = F.inner,
          current = F.current,
          width = current.width,
          height = current.height,
          minWidth = current.minWidth,
          minHeight = current.minHeight,
          maxWidth = current.maxWidth,
          maxHeight = current.maxHeight,
          scrolling = current.scrolling,
          scrollOut = current.scrollOutside ? current.scrollbarWidth : 0,
          margin = current.margin,
          wMargin = getScalar(margin[1] + margin[3]),
          hMargin = getScalar(margin[0] + margin[2]),
          wPadding,
          hPadding,
          wSpace,
          hSpace,
          origWidth,
          origHeight,
          origMaxWidth,
          origMaxHeight,
          ratio,
          width_,
          height_,
          maxWidth_,
          maxHeight_,
          iframe,
          body;

      // Reset dimensions so we could re-check actual size
      wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

      wPadding = getScalar(skin.outerWidth(true) - skin.width());
      hPadding = getScalar(skin.outerHeight(true) - skin.height());

      // Any space between content and viewport (margin, padding, border, title)
      wSpace = wMargin + wPadding;
      hSpace = hMargin + hPadding;

      origWidth = isPercentage(width) ? (viewport.w - wSpace) * getScalar(width) / 100 : width;
      origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

      if (current.type === 'iframe') {
        iframe = current.content;

        if (current.autoHeight && iframe.data('ready') === 1) {
          try {
            if (iframe[0].contentWindow.document.location) {
              inner.width(origWidth).height(9999);

              body = iframe.contents().find('body');

              if (scrollOut) {
                body.css('overflow-x', 'hidden');
              }

              origHeight = body.outerHeight(true);
            }

          } catch (e) {
          }
        }

      } else if (current.autoWidth || current.autoHeight) {
        inner.addClass('fancybox-tmp');

        // Set width or height in case we need to calculate only one dimension
        if (!current.autoWidth) {
          inner.width(origWidth);
        }

        if (!current.autoHeight) {
          inner.height(origHeight);
        }

        if (current.autoWidth) {
          origWidth = inner.width();
        }

        if (current.autoHeight) {
          origHeight = inner.height();
        }

        inner.removeClass('fancybox-tmp');
      }

      width = getScalar(origWidth);
      height = getScalar(origHeight);

      ratio = origWidth / origHeight;

      // Calculations for the content
      minWidth = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
      maxWidth = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

      minHeight = getScalar(
          isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
      maxHeight = getScalar(
          isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

      // These will be used to determine if wrap can fit in the viewport
      origMaxWidth = maxWidth;
      origMaxHeight = maxHeight;

      if (current.fitToView) {
        maxWidth = Math.min(viewport.w - wSpace, maxWidth);
        maxHeight = Math.min(viewport.h - hSpace, maxHeight);
      }

      maxWidth_ = viewport.w - wMargin;
      maxHeight_ = viewport.h - hMargin;

      if (current.aspectRatio) {
        if (width > maxWidth) {
          width = maxWidth;
          height = getScalar(width / ratio);
        }

        if (height > maxHeight) {
          height = maxHeight;
          width = getScalar(height * ratio);
        }

        if (width < minWidth) {
          width = minWidth;
          height = getScalar(width / ratio);
        }

        if (height < minHeight) {
          height = minHeight;
          width = getScalar(height * ratio);
        }

      } else {
        width = Math.max(minWidth, Math.min(width, maxWidth));

        if (current.autoHeight && current.type !== 'iframe') {
          inner.width(width);

          height = inner.height();
        }

        height = Math.max(minHeight, Math.min(height, maxHeight));
      }

      // Try to fit inside viewport (including the title)
      if (current.fitToView) {
        inner.width(width).height(height);

        wrap.width(width + wPadding);

        // Real wrap dimensions
        width_ = wrap.width();
        height_ = wrap.height();

        if (current.aspectRatio) {
          while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth &&
          height > minHeight) {
            if (steps++ > 19) {
              break;
            }

            height = Math.max(minHeight, Math.min(maxHeight, height - 10));
            width = getScalar(height * ratio);

            if (width < minWidth) {
              width = minWidth;
              height = getScalar(width / ratio);
            }

            if (width > maxWidth) {
              width = maxWidth;
              height = getScalar(width / ratio);
            }

            inner.width(width).height(height);

            wrap.width(width + wPadding);

            width_ = wrap.width();
            height_ = wrap.height();
          }

        } else {
          width = Math.max(minWidth, Math.min(width, width - (width_ - maxWidth_)));
          height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
        }
      }

      if (scrollOut && scrolling === 'auto' && height < origHeight &&
          (width + wPadding + scrollOut) < maxWidth_) {
        width += scrollOut;
      }

      inner.width(width).height(height);

      wrap.width(width + wPadding);

      width_ = wrap.width();
      height_ = wrap.height();

      canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth &&
          height > minHeight;
      canExpand = current.aspectRatio ?
          (width < origMaxWidth && height < origMaxHeight && width < origWidth &&
          height < origHeight) :
          ((width < origMaxWidth || height < origMaxHeight) &&
          (width < origWidth || height < origHeight));

      $.extend(current, {
        dim: {
          width: getValue(width_),
          height: getValue(height_)
        },
        origWidth: origWidth,
        origHeight: origHeight,
        canShrink: canShrink,
        canExpand: canExpand,
        wPadding: wPadding,
        hPadding: hPadding,
        wrapSpace: height_ - skin.outerHeight(true),
        skinSpace: skin.height() - height
      });

      if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
        inner.height('auto');
      }
    },

    _getPosition: function(onlyAbsolute) {
      var current = F.current,
          viewport = F.getViewport(),
          margin = current.margin,
          width = F.wrap.width() + margin[1] + margin[3],
          height = F.wrap.height() + margin[0] + margin[2],
          rez = {
            position: 'absolute',
            top: margin[0],
            left: margin[3]
          };

      if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h &&
          width <= viewport.w) {
        rez.position = 'fixed';

      } else if (!current.locked) {
        rez.top += viewport.y;
        rez.left += viewport.x;
      }

      rez.top = getValue(Math.max(rez.top, rez.top + ((viewport.h - height) * current.topRatio)));
      rez.left = getValue(
          Math.max(rez.left, rez.left + ((viewport.w - width) * current.leftRatio)));

      return rez;
    },

    _afterZoomIn: function() {
      var current = F.current;

      if (!current) {
        return;
      }

      F.isOpen = F.isOpened = true;

      F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

      F.update();

      // Assign a click event
      if (current.closeClick || (current.nextClick && F.group.length > 1)) {
        F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
          if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
            e.preventDefault();

            F[current.closeClick ? 'close' : 'next']();
          }
        });
      }

      // Create a close button
      if (current.closeBtn) {
        $(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
          e.preventDefault();

          F.close();
        });
      }

      // Create navigation arrows
      if (current.arrows && F.group.length > 1) {
        if (current.loop || current.index > 0) {
          $(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
        }

        if (current.loop || current.index < F.group.length - 1) {
          $(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
        }
      }

      F.trigger('afterShow');

      // Stop the slideshow if this is the last item
      if (!current.loop && current.index === current.group.length - 1) {
        F.play(false);

      } else if (F.opts.autoPlay && !F.player.isActive) {
        F.opts.autoPlay = false;

        F.play();
      }
    },

    _afterZoomOut: function(obj) {
      obj = obj || F.current;

      $('.fancybox-wrap').trigger('onReset').remove();

      $.extend(F, {
        group: {},
        opts: {},
        router: false,
        current: null,
        isActive: false,
        isOpened: false,
        isOpen: false,
        isClosing: false,
        wrap: null,
        skin: null,
        outer: null,
        inner: null
      });

      F.trigger('afterClose', obj);
    }
  });

  /*
   *	Default transitions
   */

  F.transitions = {
    getOrigPosition: function() {
      var current = F.current,
          element = current.element,
          orig = current.orig,
          pos = {},
          width = 50,
          height = 50,
          hPadding = current.hPadding,
          wPadding = current.wPadding,
          viewport = F.getViewport();

      if (!orig && current.isDom && element.is(':visible')) {
        orig = element.find('img:first');

        if (!orig.length) {
          orig = element;
        }
      }

      if (isQuery(orig)) {
        pos = orig.offset();

        if (orig.is('img')) {
          width = orig.outerWidth();
          height = orig.outerHeight();
        }

      } else {
        pos.top = viewport.y + (viewport.h - height) * current.topRatio;
        pos.left = viewport.x + (viewport.w - width) * current.leftRatio;
      }

      if (F.wrap.css('position') === 'fixed' || current.locked) {
        pos.top -= viewport.y;
        pos.left -= viewport.x;
      }

      pos = {
        top: getValue(pos.top - hPadding * current.topRatio),
        left: getValue(pos.left - wPadding * current.leftRatio),
        width: getValue(width + wPadding),
        height: getValue(height + hPadding)
      };

      return pos;
    },

    step: function(now, fx) {
      var ratio,
          padding,
          value,
          prop = fx.prop,
          current = F.current,
          wrapSpace = current.wrapSpace,
          skinSpace = current.skinSpace;

      if (prop === 'width' || prop === 'height') {
        ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

        if (F.isClosing) {
          ratio = 1 - ratio;
        }

        padding = prop === 'width' ? current.wPadding : current.hPadding;
        value = now - padding;

        F.skin[prop](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio)));
        F.inner[prop](getScalar(
            prop === 'width' ? value : value - (wrapSpace * ratio) - (skinSpace * ratio)));
      }
    },

    zoomIn: function() {
      var current = F.current,
          startPos = current.pos,
          effect = current.openEffect,
          elastic = effect === 'elastic',
          endPos = $.extend({opacity: 1}, startPos);

      // Remove "position" property that breaks older IE
      delete endPos.position;

      if (elastic) {
        startPos = this.getOrigPosition();

        if (current.openOpacity) {
          startPos.opacity = 0.1;
        }

      } else if (effect === 'fade') {
        startPos.opacity = 0.1;
      }

      F.wrap.css(startPos).animate(endPos, {
        duration: effect === 'none' ? 0 : current.openSpeed,
        easing: current.openEasing,
        step: elastic ? this.step : null,
        complete: F._afterZoomIn
      });
    },

    zoomOut: function() {
      var current = F.current,
          effect = current.closeEffect,
          elastic = effect === 'elastic',
          endPos = {opacity: 0.1};

      if (elastic) {
        endPos = this.getOrigPosition();

        if (current.closeOpacity) {
          endPos.opacity = 0.1;
        }
      }

      F.wrap.animate(endPos, {
        duration: effect === 'none' ? 0 : current.closeSpeed,
        easing: current.closeEasing,
        step: elastic ? this.step : null,
        complete: F._afterZoomOut
      });
    },

    changeIn: function() {
      var current = F.current,
          effect = current.nextEffect,
          startPos = current.pos,
          endPos = {opacity: 1},
          direction = F.direction,
          distance = 200,
          field;

      startPos.opacity = 0.1;

      if (effect === 'elastic') {
        field = direction === 'down' || direction === 'up' ? 'top' : 'left';

        if (direction === 'down' || direction === 'right') {
          startPos[field] = getValue(getScalar(startPos[field]) - distance);
          endPos[field] = '+=' + distance + 'px';

        } else {
          startPos[field] = getValue(getScalar(startPos[field]) + distance);
          endPos[field] = '-=' + distance + 'px';
        }
      }

      // Workaround for http://bugs.jquery.com/ticket/12273
      if (effect === 'none') {
        F._afterZoomIn();

      } else {
        F.wrap.css(startPos).animate(endPos, {
          duration: current.nextSpeed,
          easing: current.nextEasing,
          complete: F._afterZoomIn
        });
      }
    },

    changeOut: function() {
      var previous = F.previous,
          effect = previous.prevEffect,
          endPos = {opacity: 0.1},
          direction = F.direction,
          distance = 200;

      if (effect === 'elastic') {
        endPos[direction === 'down' || direction === 'up' ? 'top' : 'left'] = ( direction ===
            'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
      }

      previous.wrap.animate(endPos, {
        duration: effect === 'none' ? 0 : previous.prevSpeed,
        easing: previous.prevEasing,
        complete: function() {
          $(this).trigger('onReset').remove();
        }
      });
    }
  };

  /*
   *	Overlay helper
   */

  F.helpers.overlay = {
    defaults: {
      closeClick: true,      // if true, fancyBox will be closed when user clicks on the overlay
      speedOut: 200,       // duration of fadeOut animation
      showEarly: true,      // indicates if should be opened immediately or wait until the content is ready
      css: {},        // custom CSS properties
      locked: !isTouch,  // if true, the content will be locked into overlay
      fixed: true       // if false, the overlay CSS position property will not be set to "fixed"
    },

    overlay: null,      // current handle
    fixed: false,     // indicates if the overlay has position "fixed"
    el: $('html'), // element that contains "the lock"

    // Public methods
    create: function(opts) {
      opts = $.extend({}, this.defaults, opts);

      if (this.overlay) {
        this.close();
      }

      this.overlay = $('<div class="fancybox-overlay"></div>')
          .appendTo(F.coming ? F.coming.parent : opts.parent);
      this.fixed = false;

      if (opts.fixed && F.defaults.fixed) {
        this.overlay.addClass('fancybox-overlay-fixed');

        this.fixed = true;
      }
    },

    open: function(opts) {
      var that = this;

      opts = $.extend({}, this.defaults, opts);

      if (this.overlay) {
        this.overlay.unbind('.overlay').width('auto').height('auto');

      } else {
        this.create(opts);
      }

      if (!this.fixed) {
        W.bind('resize.overlay', $.proxy(this.update, this));

        this.update();
      }

      if (opts.closeClick) {
        this.overlay.bind('click.overlay', function(e) {
          if ($(e.target).hasClass('fancybox-overlay')) {
            if (F.isActive) {
              F.close();
            } else {
              that.close();
            }

            return false;
          }
        });
      }

      this.overlay.css(opts.css).show();
    },

    close: function() {
      var scrollV, scrollH;

      W.unbind('resize.overlay');

      if (this.el.hasClass('fancybox-lock')) {
        $('.fancybox-margin').removeClass('fancybox-margin');

        scrollV = W.scrollTop();
        scrollH = W.scrollLeft();

        this.el.removeClass('fancybox-lock');

        W.scrollTop(scrollV).scrollLeft(scrollH);
      }

      $('.fancybox-overlay').remove().hide();

      $.extend(this, {
        overlay: null,
        fixed: false
      });
    },

    // Private, callbacks

    update: function() {
      var width = '100%', offsetWidth;

      // Reset width/height so it will not mess
      this.overlay.width(width).height('100%');

      // jQuery does not return reliable result for IE
      if (IE) {
        offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

        if (D.width() > offsetWidth) {
          width = D.width();
        }

      } else if (D.width() > W.width()) {
        width = D.width();
      }

      this.overlay.width(width).height(D.height());
    },

    // This is where we can manipulate DOM, because later it would cause iframes to reload
    onReady: function(opts, obj) {
      var overlay = this.overlay;

      $('.fancybox-overlay').stop(true, true);

      if (!overlay) {
        this.create(opts);
      }

      if (opts.locked && this.fixed && obj.fixed) {
        if (!overlay) {
          this.margin = D.height() > W.height() ?
              $('html').css('margin-right').replace("px", "") :
              false;
        }

        obj.locked = this.overlay.append(obj.wrap);
        obj.fixed = false;
      }

      if (opts.showEarly === true) {
        this.beforeShow.apply(this, arguments);
      }
    },

    beforeShow: function(opts, obj) {
      var scrollV, scrollH;

      if (obj.locked) {
        if (this.margin !== false) {
          $('*').filter(function() {
            return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") &&
            !$(this).hasClass("fancybox-wrap") );
          }).addClass('fancybox-margin');

          this.el.addClass('fancybox-margin');
        }

        scrollV = W.scrollTop();
        scrollH = W.scrollLeft();

        this.el.addClass('fancybox-lock');

        W.scrollTop(scrollV).scrollLeft(scrollH);
      }

      this.open(opts);
    },

    onUpdate: function() {
      if (!this.fixed) {
        this.update();
      }
    },

    afterClose: function(opts) {
      // Remove overlay if exists and fancyBox is not opening
      // (e.g., it is not being open using afterClose callback)
      //if (this.overlay && !F.isActive) {
      if (this.overlay && !F.coming) {
        this.overlay.fadeOut(opts.speedOut, $.proxy(this.close, this));
      }
    }
  };

  /*
   *	Title helper
   */

  F.helpers.title = {
    defaults: {
      type: 'float', // 'float', 'inside', 'outside' or 'over',
      position: 'bottom' // 'top' or 'bottom'
    },

    beforeShow: function(opts) {
      var current = F.current,
          text = current.title,
          type = opts.type,
          title,
          target;

      if ($.isFunction(text)) {
        text = text.call(current.element, current);
      }

      if (!isString(text) || $.trim(text) === '') {
        return;
      }

      title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

      switch (type) {
        case 'inside':
          target = F.skin;
          break;

        case 'outside':
          target = F.wrap;
          break;

        case 'over':
          target = F.inner;
          break;

        default: // 'float'
          target = F.skin;

          title.appendTo('body');

          if (IE) {
            title.width(title.width());
          }

          title.wrapInner('<span class="child"></span>');

          //Increase bottom margin so this title will also fit into viewport
          F.current.margin[2] += Math.abs(getScalar(title.css('margin-bottom')));
          break;
      }

      title[(opts.position === 'top' ? 'prependTo' : 'appendTo')](target);
    }
  };

  // jQuery plugin initialization
  $.fn.fancybox = function(options) {
    var index,
        that = $(this),
        selector = this.selector || '',
        run = function(e) {
          var what = $(this).blur(), idx = index, relType, relVal;

          if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
            relType = options.groupAttr || 'data-fancybox-group';
            relVal = what.attr(relType);

            if (!relVal) {
              relType = 'rel';
              relVal = what.get(0)[relType];
            }

            if (relVal && relVal !== '' && relVal !== 'nofollow') {
              what = selector.length ? $(selector) : that;
              what = what.filter('[' + relType + '="' + relVal + '"]');
              idx = what.index(this);
            }

            options.index = idx;

            // Stop an event from bubbling if everything is fine
            if (F.open(what, options) !== false) {
              e.preventDefault();
            }
          }
        };

    options = options || {};
    index = options.index || 0;

    if (!selector || options.live === false) {
      that.unbind('click.fb-start').bind('click.fb-start', run);

    } else {
      D.undelegate(selector, 'click.fb-start')
          .delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
    }

    this.filter('[data-fancybox-start=1]').trigger('click');

    return this;
  };

  // Tests that need a body at doc ready
  D.ready(function() {
    var w1, w2;

    if ($.scrollbarWidth === undefined) {
      // http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
      $.scrollbarWidth = function() {
        var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>')
            .appendTo('body'),
            child = parent.children(),
            width = child.innerWidth() - child.height(99).innerWidth();

        parent.remove();

        return width;
      };
    }

    if ($.support.fixedPosition === undefined) {
      $.support.fixedPosition = (function() {
        var elem = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
            fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

        elem.remove();

        return fixed;
      }());
    }

    $.extend(F.defaults, {
      scrollbarWidth: $.scrollbarWidth(),
      fixed: $.support.fixedPosition,
      parent: $('body')
    });

    //Get real width of page scroll-bar
    w1 = $(window).width();

    H.addClass('fancybox-lock-test');

    w2 = $(window).width();

    H.removeClass('fancybox-lock-test');

    $("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>")
        .appendTo("head");
  });

}(window, document, jQuery));
/*!
 * jQuery Validation Plugin v1.14.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2015 Jörn Zaefferer
 * Released under the MIT license
 */
(function(factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else {
    factory(jQuery);
  }
}(function($) {

  $.extend($.fn, {
    // http://jqueryvalidation.org/validate/
    validate: function(options) {

      // if nothing is selected, return nothing; can't chain anyway
      if (!this.length) {
        if (options && options.debug && window.console) {
          console.warn("Nothing selected, can't validate, returning nothing.");
        }
        return;
      }

      // check if a validator for this form was already created
      var validator = $.data(this[0], "validator");
      if (validator) {
        return validator;
      }

      // Add novalidate tag if HTML5.
      this.attr("novalidate", "novalidate");

      validator = new $.validator(options, this[0]);
      $.data(this[0], "validator", validator);

      if (validator.settings.onsubmit) {

        this.on("click.validate", ":submit", function(event) {
          if (validator.settings.submitHandler) {
            validator.submitButton = event.target;
          }

          // allow suppressing validation by adding a cancel class to the submit button
          if ($(this).hasClass("cancel")) {
            validator.cancelSubmit = true;
          }

          // allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
          if ($(this).attr("formnovalidate") !== undefined) {
            validator.cancelSubmit = true;
          }
        });

        // validate the form on submit
        this.on("submit.validate", function(event) {
          if (validator.settings.debug) {
            // prevent form submit to be able to see console output
            event.preventDefault();
          }
          function handle() {
            var hidden, result;
            if (validator.settings.submitHandler) {
              if (validator.submitButton) {
                // insert a hidden input as a replacement for the missing submit button
                hidden = $("<input type='hidden'/>")
                    .attr("name", validator.submitButton.name)
                    .val($(validator.submitButton).val())
                    .appendTo(validator.currentForm);
              }
              result = validator.settings.submitHandler.call(validator, validator.currentForm,
                  event);
              if (validator.submitButton) {
                // and clean up afterwards; thanks to no-block-scope, hidden can be referenced
                hidden.remove();
              }
              if (result !== undefined) {
                return result;
              }
              return false;
            }
            return true;
          }

          // prevent submit for invalid forms or custom submit handlers
          if (validator.cancelSubmit) {
            validator.cancelSubmit = false;
            return handle();
          }
          if (validator.form()) {
            if (validator.pendingRequest) {
              validator.formSubmitted = true;
              return false;
            }
            return handle();
          } else {
            validator.focusInvalid();
            return false;
          }
        });
      }

      return validator;
    },
    // http://jqueryvalidation.org/valid/
    valid: function() {
      var valid, validator, errorList;

      if ($(this[0]).is("form")) {
        valid = this.validate().form();
      } else {
        errorList = [];
        valid = true;
        validator = $(this[0].form).validate();
        this.each(function() {
          valid = validator.element(this) && valid;
          errorList = errorList.concat(validator.errorList);
        });
        validator.errorList = errorList;
      }
      return valid;
    },

    // http://jqueryvalidation.org/rules/
    rules: function(command, argument) {
      var element = this[0],
          settings, staticRules, existingRules, data, param, filtered;

      if (command) {
        settings = $.data(element.form, "validator").settings;
        staticRules = settings.rules;
        existingRules = $.validator.staticRules(element);
        switch (command) {
          case "add":
            $.extend(existingRules, $.validator.normalizeRule(argument));
            // remove messages from rules, but allow them to be set separately
            delete existingRules.messages;
            staticRules[element.name] = existingRules;
            if (argument.messages) {
              settings.messages[element.name] = $.extend(settings.messages[element.name],
                  argument.messages);
            }
            break;
          case "remove":
            if (!argument) {
              delete staticRules[element.name];
              return existingRules;
            }
            filtered = {};
            $.each(argument.split(/\s/), function(index, method) {
              filtered[method] = existingRules[method];
              delete existingRules[method];
              if (method === "required") {
                $(element).removeAttr("aria-required");
              }
            });
            return filtered;
        }
      }

      data = $.validator.normalizeRules(
          $.extend(
              {},
              $.validator.classRules(element),
              $.validator.attributeRules(element),
              $.validator.dataRules(element),
              $.validator.staticRules(element)
          ), element);

      // make sure required is at front
      if (data.required) {
        param = data.required;
        delete data.required;
        data = $.extend({required: param}, data);
        $(element).attr("aria-required", "true");
      }

      // make sure remote is at back
      if (data.remote) {
        param = data.remote;
        delete data.remote;
        data = $.extend(data, {remote: param});
      }

      return data;
    }
  });

// Custom selectors
  $.extend($.expr[":"], {
    // http://jqueryvalidation.org/blank-selector/
    blank: function(a) {
      return !$.trim("" + $(a).val());
    },
    // http://jqueryvalidation.org/filled-selector/
    filled: function(a) {
      return !!$.trim("" + $(a).val());
    },
    // http://jqueryvalidation.org/unchecked-selector/
    unchecked: function(a) {
      return !$(a).prop("checked");
    }
  });

// constructor for validator
  $.validator = function(options, form) {
    this.settings = $.extend(true, {}, $.validator.defaults, options);
    this.currentForm = form;
    this.init();
  };

// http://jqueryvalidation.org/jQuery.validator.format/
  $.validator.format = function(source, params) {
    if (arguments.length === 1) {
      return function() {
        var args = $.makeArray(arguments);
        args.unshift(source);
        return $.validator.format.apply(this, args);
      };
    }
    if (arguments.length > 2 && params.constructor !== Array) {
      params = $.makeArray(arguments).slice(1);
    }
    if (params.constructor !== Array) {
      params = [params];
    }
    $.each(params, function(i, n) {
      source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function() {
        return n;
      });
    });
    return source;
  };

  $.extend($.validator, {

    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      validClass: "valid",
      errorElement: "label",
      focusCleanup: false,
      focusInvalid: true,
      errorContainer: $([]),
      errorLabelContainer: $([]),
      onsubmit: true,
      ignore: ":hidden",
      ignoreTitle: false,
      onfocusin: function(element) {
        this.lastActive = element;

        // Hide error label and remove error class on focus if enabled
        if (this.settings.focusCleanup) {
          if (this.settings.unhighlight) {
            this.settings.unhighlight.call(this, element, this.settings.errorClass,
                this.settings.validClass);
          }
          this.hideThese(this.errorsFor(element));
        }
      },
      onfocusout: function(element) {
        if (!this.checkable(element) &&
            ( element.name in this.submitted || !this.optional(element) )) {
          this.element(element);
        }
      },
      onkeyup: function(element, event) {
        // Avoid revalidate the field when pressing one of the following keys
        // Shift       => 16
        // Ctrl        => 17
        // Alt         => 18
        // Caps lock   => 20
        // End         => 35
        // Home        => 36
        // Left arrow  => 37
        // Up arrow    => 38
        // Right arrow => 39
        // Down arrow  => 40
        // Insert      => 45
        // Num lock    => 144
        // AltGr key   => 225
        var excludedKeys = [
          16, 17, 18, 20, 35, 36, 37,
          38, 39, 40, 45, 144, 225
        ];

        if (event.which === 9 && this.elementValue(element) === "" ||
            $.inArray(event.keyCode, excludedKeys) !== -1) {
          return;
        } else if (element.name in this.submitted || element === this.lastElement) {
          this.element(element);
        }
      },
      onclick: function(element) {
        // click on selects, radiobuttons and checkboxes
        if (element.name in this.submitted) {
          this.element(element);

          // or option elements, check parent select in that case
        } else if (element.parentNode.name in this.submitted) {
          this.element(element.parentNode);
        }
      },
      highlight: function(element, errorClass, validClass) {
        if (element.type === "radio") {
          this.findByName(element.name).addClass(errorClass).removeClass(validClass);
        } else {
          $(element).addClass(errorClass).removeClass(validClass);
        }
      },
      unhighlight: function(element, errorClass, validClass) {
        if (element.type === "radio") {
          this.findByName(element.name).removeClass(errorClass).addClass(validClass);
        } else {
          $(element).removeClass(errorClass).addClass(validClass);
        }
      }
    },

    // http://jqueryvalidation.org/jQuery.validator.setDefaults/
    setDefaults: function(settings) {
      $.extend($.validator.defaults, settings);
    },

    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date ( ISO ).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      creditcard: "Please enter a valid credit card number.",
      equalTo: "Please enter the same value again.",
      maxlength: $.validator.format("Please enter no more than {0} characters."),
      minlength: $.validator.format("Please enter at least {0} characters."),
      rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
      range: $.validator.format("Please enter a value between {0} and {1}."),
      max: $.validator.format("Please enter a value less than or equal to {0}."),
      min: $.validator.format("Please enter a value greater than or equal to {0}.")
    },

    autoCreateRanges: false,

    prototype: {

      init: function() {
        this.labelContainer = $(this.settings.errorLabelContainer);
        this.errorContext = this.labelContainer.length && this.labelContainer ||
            $(this.currentForm);
        this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
        this.submitted = {};
        this.valueCache = {};
        this.pendingRequest = 0;
        this.pending = {};
        this.invalid = {};
        this.reset();

        var groups = ( this.groups = {} ),
            rules;
        $.each(this.settings.groups, function(key, value) {
          if (typeof value === "string") {
            value = value.split(/\s/);
          }
          $.each(value, function(index, name) {
            groups[name] = key;
          });
        });
        rules = this.settings.rules;
        $.each(rules, function(key, value) {
          rules[key] = $.validator.normalizeRule(value);
        });

        function delegate(event) {
          var validator = $.data(this.form, "validator"),
              eventType = "on" + event.type.replace(/^validate/, ""),
              settings = validator.settings;
          if (settings[eventType] && !$(this).is(settings.ignore)) {
            settings[eventType].call(validator, this, event);
          }
        }

        $(this.currentForm)
            .on("focusin.validate focusout.validate keyup.validate",
                ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
                "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
                "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
                "[type='radio'], [type='checkbox']", delegate)
            // Support: Chrome, oldIE
            // "select" is provided as event.target when clicking a option
            .on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);

        if (this.settings.invalidHandler) {
          $(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
        }

        // Add aria-required to any Static/Data/Class required fields before first validation
        // Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
        $(this.currentForm)
            .find("[required], [data-rule-required], .required")
            .attr("aria-required", "true");
      },

      // http://jqueryvalidation.org/Validator.form/
      form: function() {
        this.checkForm();
        $.extend(this.submitted, this.errorMap);
        this.invalid = $.extend({}, this.errorMap);
        if (!this.valid()) {
          $(this.currentForm).triggerHandler("invalid-form", [this]);
        }
        this.showErrors();
        return this.valid();
      },

      checkForm: function() {
        this.prepareForm();
        for (var i = 0, elements = ( this.currentElements = this.elements() ); elements[i]; i++) {
          this.check(elements[i]);
        }
        return this.valid();
      },

      // http://jqueryvalidation.org/Validator.element/
      element: function(element) {
        var cleanElement = this.clean(element),
            checkElement = this.validationTargetFor(cleanElement),
            result = true;

        this.lastElement = checkElement;

        if (checkElement === undefined) {
          delete this.invalid[cleanElement.name];
        } else {
          this.prepareElement(checkElement);
          this.currentElements = $(checkElement);

          result = this.check(checkElement) !== false;
          if (result) {
            delete this.invalid[checkElement.name];
          } else {
            this.invalid[checkElement.name] = true;
          }
        }
        // Add aria-invalid status for screen readers
        $(element).attr("aria-invalid", !result);

        if (!this.numberOfInvalids()) {
          // Hide error containers on last error
          this.toHide = this.toHide.add(this.containers);
        }
        this.showErrors();
        return result;
      },

      // http://jqueryvalidation.org/Validator.showErrors/
      showErrors: function(errors) {
        if (errors) {
          // add items to error list and map
          $.extend(this.errorMap, errors);
          this.errorList = [];
          for (var name in errors) {
            this.errorList.push({
              message: errors[name],
              element: this.findByName(name)[0]
            });
          }
          // remove items from success list
          this.successList = $.grep(this.successList, function(element) {
            return !( element.name in errors );
          });
        }
        if (this.settings.showErrors) {
          this.settings.showErrors.call(this, this.errorMap, this.errorList);
        } else {
          this.defaultShowErrors();
        }
      },

      // http://jqueryvalidation.org/Validator.resetForm/
      resetForm: function() {
        if ($.fn.resetForm) {
          $(this.currentForm).resetForm();
        }
        this.submitted = {};
        this.lastElement = null;
        this.prepareForm();
        this.hideErrors();
        var i, elements = this.elements()
            .removeData("previousValue")
            .removeAttr("aria-invalid");

        if (this.settings.unhighlight) {
          for (i = 0; elements[i]; i++) {
            this.settings.unhighlight.call(this, elements[i],
                this.settings.errorClass, "");
          }
        } else {
          elements.removeClass(this.settings.errorClass);
        }
      },

      numberOfInvalids: function() {
        return this.objectLength(this.invalid);
      },

      objectLength: function(obj) {
        /* jshint unused: false */
        var count = 0,
            i;
        for (i in obj) {
          count++;
        }
        return count;
      },

      hideErrors: function() {
        this.hideThese(this.toHide);
      },

      hideThese: function(errors) {
        errors.not(this.containers).text("");
        this.addWrapper(errors).hide();
      },

      valid: function() {
        return this.size() === 0;
      },

      size: function() {
        return this.errorList.length;
      },

      focusInvalid: function() {
        if (this.settings.focusInvalid) {
          try {
            $(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
                .filter(":visible")
                .focus()
                // manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
                .trigger("focusin");
          } catch (e) {
            // ignore IE throwing errors when focusing hidden elements
          }
        }
      },

      findLastActive: function() {
        var lastActive = this.lastActive;
        return lastActive && $.grep(this.errorList, function(n) {
              return n.element.name === lastActive.name;
            }).length === 1 && lastActive;
      },

      elements: function() {
        var validator = this,
            rulesCache = {};

        // select all valid inputs inside the form (no submit or reset buttons)
        return $(this.currentForm)
            .find("input, select, textarea")
            .not(":submit, :reset, :image, :disabled")
            .not(this.settings.ignore)
            .filter(function() {
              if (!this.name && validator.settings.debug && window.console) {
                console.error("%o has no name assigned", this);
              }

              // select only the first element for each name, and only those with rules specified
              if (this.name in rulesCache || !validator.objectLength($(this).rules())) {
                return false;
              }

              rulesCache[this.name] = true;
              return true;
            });
      },

      clean: function(selector) {
        return $(selector)[0];
      },

      errors: function() {
        var errorClass = this.settings.errorClass.split(" ").join(".");
        return $(this.settings.errorElement + "." + errorClass, this.errorContext);
      },

      reset: function() {
        this.successList = [];
        this.errorList = [];
        this.errorMap = {};
        this.toShow = $([]);
        this.toHide = $([]);
        this.currentElements = $([]);
      },

      prepareForm: function() {
        this.reset();
        this.toHide = this.errors().add(this.containers);
      },

      prepareElement: function(element) {
        this.reset();
        this.toHide = this.errorsFor(element);
      },

      elementValue: function(element) {
        var val,
            $element = $(element),
            type = element.type;

        if (type === "radio" || type === "checkbox") {
          return this.findByName(element.name).filter(":checked").val();
        } else if (type === "number" && typeof element.validity !== "undefined") {
          return element.validity.badInput ? false : $element.val();
        }

        val = $element.val();
        if (typeof val === "string") {
          return val.replace(/\r/g, "");
        }
        return val;
      },

      check: function(element) {
        element = this.validationTargetFor(this.clean(element));

        var rules = $(element).rules(),
            rulesCount = $.map(rules, function(n, i) {
              return i;
            }).length,
            dependencyMismatch = false,
            val = this.elementValue(element),
            result, method, rule;

        for (method in rules) {
          rule = {method: method, parameters: rules[method]};
          try {

            result = $.validator.methods[method].call(this, val, element, rule.parameters);

            // if a method indicates that the field is optional and therefore valid,
            // don't mark it as valid when there are no other rules
            if (result === "dependency-mismatch" && rulesCount === 1) {
              dependencyMismatch = true;
              continue;
            }
            dependencyMismatch = false;

            if (result === "pending") {
              this.toHide = this.toHide.not(this.errorsFor(element));
              return;
            }

            if (!result) {
              this.formatAndAdd(element, rule);
              return false;
            }
          } catch (e) {
            if (this.settings.debug && window.console) {
              console.log(
                  "Exception occurred when checking element " + element.id + ", check the '" +
                  rule.method + "' method.", e);
            }
            if (e instanceof TypeError) {
              e.message += ".  Exception occurred when checking element " + element.id +
                  ", check the '" + rule.method + "' method.";
            }

            throw e;
          }
        }
        if (dependencyMismatch) {
          return;
        }
        if (this.objectLength(rules)) {
          this.successList.push(element);
        }
        return true;
      },

      // return the custom message for the given element and validation method
      // specified in the element's HTML5 data attribute
      // return the generic message if present and no method specific message is present
      customDataMessage: function(element, method) {
        return $(element).data("msg" + method.charAt(0).toUpperCase() +
                method.substring(1).toLowerCase()) || $(element).data("msg");
      },

      // return the custom message for the given element name and validation method
      customMessage: function(name, method) {
        var m = this.settings.messages[name];
        return m && ( m.constructor === String ? m : m[method]);
      },

      // return the first defined argument, allowing empty strings
      findDefined: function() {
        for (var i = 0; i < arguments.length; i++) {
          if (arguments[i] !== undefined) {
            return arguments[i];
          }
        }
        return undefined;
      },

      defaultMessage: function(element, method) {
        return this.findDefined(
            this.customMessage(element.name, method),
            this.customDataMessage(element, method),
            // title is never undefined, so handle empty string as undefined
            !this.settings.ignoreTitle && element.title || undefined,
            $.validator.messages[method],
            "<strong>Warning: No message defined for " + element.name + "</strong>"
        );
      },

      formatAndAdd: function(element, rule) {
        var message = this.defaultMessage(element, rule.method),
            theregex = /\$?\{(\d+)\}/g;
        if (typeof message === "function") {
          message = message.call(this, rule.parameters, element);
        } else if (theregex.test(message)) {
          message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
        }
        this.errorList.push({
          message: message,
          element: element,
          method: rule.method
        });

        this.errorMap[element.name] = message;
        this.submitted[element.name] = message;
      },

      addWrapper: function(toToggle) {
        if (this.settings.wrapper) {
          toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
        }
        return toToggle;
      },

      defaultShowErrors: function() {
        var i, elements, error;
        for (i = 0; this.errorList[i]; i++) {
          error = this.errorList[i];
          if (this.settings.highlight) {
            this.settings.highlight.call(this, error.element, this.settings.errorClass,
                this.settings.validClass);
          }
          this.showLabel(error.element, error.message);
        }
        if (this.errorList.length) {
          this.toShow = this.toShow.add(this.containers);
        }
        if (this.settings.success) {
          for (i = 0; this.successList[i]; i++) {
            this.showLabel(this.successList[i]);
          }
        }
        if (this.settings.unhighlight) {
          for (i = 0, elements = this.validElements(); elements[i]; i++) {
            this.settings.unhighlight.call(this, elements[i], this.settings.errorClass,
                this.settings.validClass);
          }
        }
        this.toHide = this.toHide.not(this.toShow);
        this.hideErrors();
        this.addWrapper(this.toShow).show();
      },

      validElements: function() {
        return this.currentElements.not(this.invalidElements());
      },

      invalidElements: function() {
        return $(this.errorList).map(function() {
          return this.element;
        });
      },

      showLabel: function(element, message) {
        var place, group, errorID,
            error = this.errorsFor(element),
            elementID = this.idOrName(element),
            describedBy = $(element).attr("aria-describedby");
        if (error.length) {
          // refresh error/success class
          error.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
          // replace message on existing label
          error.html(message);
        } else {
          // create error element
          error = $("<" + this.settings.errorElement + ">")
              .attr("id", elementID + "-error")
              .addClass(this.settings.errorClass)
              .html(message || "");

          // Maintain reference to the element to be placed into the DOM
          place = error;
          if (this.settings.wrapper) {
            // make sure the element is visible, even in IE
            // actually showing the wrapped element is handled elsewhere
            place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
          }
          if (this.labelContainer.length) {
            this.labelContainer.append(place);
          } else if (this.settings.errorPlacement) {
            this.settings.errorPlacement(place, $(element));
          } else {
            place.insertAfter(element);
          }

          // Link error back to the element
          if (error.is("label")) {
            // If the error is a label, then associate using 'for'
            error.attr("for", elementID);
          } else if (error.parents("label[for='" + elementID + "']").length === 0) {
            // If the element is not a child of an associated label, then it's necessary
            // to explicitly apply aria-describedby

            errorID = error.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1");
            // Respect existing non-error aria-describedby
            if (!describedBy) {
              describedBy = errorID;
            } else if (!describedBy.match(new RegExp("\\b" + errorID + "\\b"))) {
              // Add to end of list if not already present
              describedBy += " " + errorID;
            }
            $(element).attr("aria-describedby", describedBy);

            // If this element is grouped, then assign to all elements in the same group
            group = this.groups[element.name];
            if (group) {
              $.each(this.groups, function(name, testgroup) {
                if (testgroup === group) {
                  $("[name='" + name + "']", this.currentForm)
                      .attr("aria-describedby", error.attr("id"));
                }
              });
            }
          }
        }
        if (!message && this.settings.success) {
          error.text("");
          if (typeof this.settings.success === "string") {
            error.addClass(this.settings.success);
          } else {
            this.settings.success(error, element);
          }
        }
        this.toShow = this.toShow.add(error);
      },

      errorsFor: function(element) {
        var name = this.idOrName(element),
            describer = $(element).attr("aria-describedby"),
            selector = "label[for='" + name + "'], label[for='" + name + "'] *";

        // aria-describedby should directly reference the error element
        if (describer) {
          selector = selector + ", #" + describer.replace(/\s+/g, ", #");
        }
        return this
            .errors()
            .filter(selector);
      },

      idOrName: function(element) {
        return this.groups[element.name] ||
            ( this.checkable(element) ? element.name : element.id || element.name );
      },

      validationTargetFor: function(element) {

        // If radio/checkbox, validate first element in group instead
        if (this.checkable(element)) {
          element = this.findByName(element.name);
        }

        // Always apply ignore filter
        return $(element).not(this.settings.ignore)[0];
      },

      checkable: function(element) {
        return ( /radio|checkbox/i ).test(element.type);
      },

      findByName: function(name) {
        return $(this.currentForm).find("[name='" + name + "']");
      },

      getLength: function(value, element) {
        switch (element.nodeName.toLowerCase()) {
          case "select":
            return $("option:selected", element).length;
          case "input":
            if (this.checkable(element)) {
              return this.findByName(element.name).filter(":checked").length;
            }
        }
        return value.length;
      },

      depend: function(param, element) {
        return this.dependTypes[typeof param] ?
            this.dependTypes[typeof param](param, element) :
            true;
      },

      dependTypes: {
        "boolean": function(param) {
          return param;
        },
        "string": function(param, element) {
          return !!$(param, element.form).length;
        },
        "function": function(param, element) {
          return param(element);
        }
      },

      optional: function(element) {
        var val = this.elementValue(element);
        return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
      },

      startRequest: function(element) {
        if (!this.pending[element.name]) {
          this.pendingRequest++;
          this.pending[element.name] = true;
        }
      },

      stopRequest: function(element, valid) {
        this.pendingRequest--;
        // sometimes synchronization fails, make sure pendingRequest is never < 0
        if (this.pendingRequest < 0) {
          this.pendingRequest = 0;
        }
        delete this.pending[element.name];
        if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
          $(this.currentForm).submit();
          this.formSubmitted = false;
        } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
          $(this.currentForm).triggerHandler("invalid-form", [this]);
          this.formSubmitted = false;
        }
      },

      previousValue: function(element) {
        return $.data(element, "previousValue") || $.data(element, "previousValue", {
              old: null,
              valid: true,
              message: this.defaultMessage(element, "remote")
            });
      },

      // cleans up all forms and elements, removes validator-specific events
      destroy: function() {
        this.resetForm();

        $(this.currentForm)
            .off(".validate")
            .removeData("validator");
      }

    },

    classRuleSettings: {
      required: {required: true},
      email: {email: true},
      url: {url: true},
      date: {date: true},
      dateISO: {dateISO: true},
      number: {number: true},
      digits: {digits: true},
      creditcard: {creditcard: true}
    },

    addClassRules: function(className, rules) {
      if (className.constructor === String) {
        this.classRuleSettings[className] = rules;
      } else {
        $.extend(this.classRuleSettings, className);
      }
    },

    classRules: function(element) {
      var rules = {},
          classes = $(element).attr("class");

      if (classes) {
        $.each(classes.split(" "), function() {
          if (this in $.validator.classRuleSettings) {
            $.extend(rules, $.validator.classRuleSettings[this]);
          }
        });
      }
      return rules;
    },

    normalizeAttributeRule: function(rules, type, method, value) {

      // convert the value to a number for number inputs, and for text for backwards compability
      // allows type="date" and others to be compared as strings
      if (/min|max/.test(method) && ( type === null || /number|range|text/.test(type) )) {
        value = Number(value);

        // Support Opera Mini, which returns NaN for undefined minlength
        if (isNaN(value)) {
          value = undefined;
        }
      }

      if (value || value === 0) {
        rules[method] = value;
      } else if (type === method && type !== "range") {

        // exception: the jquery validate 'range' method
        // does not test for the html5 'range' type
        rules[method] = true;
      }
    },

    attributeRules: function(element) {
      var rules = {},
          $element = $(element),
          type = element.getAttribute("type"),
          method, value;

      for (method in $.validator.methods) {

        // support for <input required> in both html5 and older browsers
        if (method === "required") {
          value = element.getAttribute(method);

          // Some browsers return an empty string for the required attribute
          // and non-HTML5 browsers might have required="" markup
          if (value === "") {
            value = true;
          }

          // force non-HTML5 browsers to return bool
          value = !!value;
        } else {
          value = $element.attr(method);
        }

        this.normalizeAttributeRule(rules, type, method, value);
      }

      // maxlength may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
      if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
        delete rules.maxlength;
      }

      return rules;
    },

    dataRules: function(element) {
      var rules = {},
          $element = $(element),
          type = element.getAttribute("type"),
          method, value;

      for (method in $.validator.methods) {
        value = $element.data(
            "rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase());
        this.normalizeAttributeRule(rules, type, method, value);
      }
      return rules;
    },

    staticRules: function(element) {
      var rules = {},
          validator = $.data(element.form, "validator");

      if (validator.settings.rules) {
        rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
      }
      return rules;
    },

    normalizeRules: function(rules, element) {
      // handle dependency check
      $.each(rules, function(prop, val) {
        // ignore rule when param is explicitly false, eg. required:false
        if (val === false) {
          delete rules[prop];
          return;
        }
        if (val.param || val.depends) {
          var keepRule = true;
          switch (typeof val.depends) {
            case "string":
              keepRule = !!$(val.depends, element.form).length;
              break;
            case "function":
              keepRule = val.depends.call(element, element);
              break;
          }
          if (keepRule) {
            rules[prop] = val.param !== undefined ? val.param : true;
          } else {
            delete rules[prop];
          }
        }
      });

      // evaluate parameters
      $.each(rules, function(rule, parameter) {
        rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
      });

      // clean number parameters
      $.each(["minlength", "maxlength"], function() {
        if (rules[this]) {
          rules[this] = Number(rules[this]);
        }
      });
      $.each(["rangelength", "range"], function() {
        var parts;
        if (rules[this]) {
          if ($.isArray(rules[this])) {
            rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
          } else if (typeof rules[this] === "string") {
            parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
            rules[this] = [Number(parts[0]), Number(parts[1])];
          }
        }
      });

      if ($.validator.autoCreateRanges) {
        // auto-create ranges
        if (rules.min != null && rules.max != null) {
          rules.range = [rules.min, rules.max];
          delete rules.min;
          delete rules.max;
        }
        if (rules.minlength != null && rules.maxlength != null) {
          rules.rangelength = [rules.minlength, rules.maxlength];
          delete rules.minlength;
          delete rules.maxlength;
        }
      }

      return rules;
    },

    // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
    normalizeRule: function(data) {
      if (typeof data === "string") {
        var transformed = {};
        $.each(data.split(/\s/), function() {
          transformed[this] = true;
        });
        data = transformed;
      }
      return data;
    },

    // http://jqueryvalidation.org/jQuery.validator.addMethod/
    addMethod: function(name, method, message) {
      $.validator.methods[name] = method;
      $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
      if (method.length < 3) {
        $.validator.addClassRules(name, $.validator.normalizeRule(name));
      }
    },

    methods: {

      // http://jqueryvalidation.org/required-method/
      required: function(value, element, param) {
        // check if dependency is met
        if (!this.depend(param, element)) {
          return "dependency-mismatch";
        }
        if (element.nodeName.toLowerCase() === "select") {
          // could be an array for select-multiple or a string, both are fine this way
          var val = $(element).val();
          return val && val.length > 0;
        }
        if (this.checkable(element)) {
          return this.getLength(value, element) > 0;
        }
        return value.length > 0;
      },

      // http://jqueryvalidation.org/email-method/
      email: function(value, element) {
        // From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
        // Retrieved 2014-01-14
        // If you have a problem with this implementation, report a bug against the above spec
        // Or use custom methods to implement your own email validation
        return this.optional(element) ||
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                value);
      },

      // http://jqueryvalidation.org/url-method/
      url: function(value, element) {

        // Copyright (c) 2010-2013 Diego Perini, MIT licensed
        // https://gist.github.com/dperini/729294
        // see also https://mathiasbynens.be/demo/url-regex
        // modified to allow protocol-relative URLs
        return this.optional(element) ||
            /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
                value);
      },

      // http://jqueryvalidation.org/date-method/
      date: function(value, element) {
        return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
      },

      // http://jqueryvalidation.org/dateISO-method/
      dateISO: function(value, element) {
        return this.optional(element) ||
            /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
      },

      // http://jqueryvalidation.org/number-method/
      number: function(value, element) {
        return this.optional(element) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
      },

      // http://jqueryvalidation.org/digits-method/
      digits: function(value, element) {
        return this.optional(element) || /^\d+$/.test(value);
      },

      // http://jqueryvalidation.org/creditcard-method/
      // based on http://en.wikipedia.org/wiki/Luhn_algorithm
      creditcard: function(value, element) {
        if (this.optional(element)) {
          return "dependency-mismatch";
        }
        // accept only spaces, digits and dashes
        if (/[^0-9 \-]+/.test(value)) {
          return false;
        }
        var nCheck = 0,
            nDigit = 0,
            bEven = false,
            n, cDigit;

        value = value.replace(/\D/g, "");

        // Basing min and max length on
        // http://developer.ean.com/general_info/Valid_Credit_Card_Types
        if (value.length < 13 || value.length > 19) {
          return false;
        }

        for (n = value.length - 1; n >= 0; n--) {
          cDigit = value.charAt(n);
          nDigit = parseInt(cDigit, 10);
          if (bEven) {
            if (( nDigit *= 2 ) > 9) {
              nDigit -= 9;
            }
          }
          nCheck += nDigit;
          bEven = !bEven;
        }

        return ( nCheck % 10 ) === 0;
      },

      // http://jqueryvalidation.org/minlength-method/
      minlength: function(value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length >= param;
      },

      // http://jqueryvalidation.org/maxlength-method/
      maxlength: function(value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length <= param;
      },

      // http://jqueryvalidation.org/rangelength-method/
      rangelength: function(value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || ( length >= param[0] && length <= param[1] );
      },

      // http://jqueryvalidation.org/min-method/
      min: function(value, element, param) {
        return this.optional(element) || value >= param;
      },

      // http://jqueryvalidation.org/max-method/
      max: function(value, element, param) {
        return this.optional(element) || value <= param;
      },

      // http://jqueryvalidation.org/range-method/
      range: function(value, element, param) {
        return this.optional(element) || ( value >= param[0] && value <= param[1] );
      },

      // http://jqueryvalidation.org/equalTo-method/
      equalTo: function(value, element, param) {
        // bind to the blur event of the target in order to revalidate whenever the target field is updated
        // TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
        var target = $(param);
        if (this.settings.onfocusout) {
          target.off(".validate-equalTo").on("blur.validate-equalTo", function() {
            $(element).valid();
          });
        }
        return value === target.val();
      },

      // http://jqueryvalidation.org/remote-method/
      remote: function(value, element, param) {
        if (this.optional(element)) {
          return "dependency-mismatch";
        }

        var previous = this.previousValue(element),
            validator, data;

        if (!this.settings.messages[element.name]) {
          this.settings.messages[element.name] = {};
        }
        previous.originalMessage = this.settings.messages[element.name].remote;
        this.settings.messages[element.name].remote = previous.message;

        param = typeof param === "string" && {url: param} || param;

        if (previous.old === value) {
          return previous.valid;
        }

        previous.old = value;
        validator = this;
        this.startRequest(element);
        data = {};
        data[element.name] = value;
        $.ajax($.extend(true, {
          mode: "abort",
          port: "validate" + element.name,
          dataType: "json",
          data: data,
          context: validator.currentForm,
          success: function(response) {
            var valid = response === true || response === "true",
                errors, message, submitted;

            validator.settings.messages[element.name].remote = previous.originalMessage;
            if (valid) {
              submitted = validator.formSubmitted;
              validator.prepareElement(element);
              validator.formSubmitted = submitted;
              validator.successList.push(element);
              delete validator.invalid[element.name];
              validator.showErrors();
            } else {
              errors = {};
              message = response || validator.defaultMessage(element, "remote");
              errors[element.name] = previous.message = $.isFunction(message) ?
                  message(value) :
                  message;
              validator.invalid[element.name] = true;
              validator.showErrors(errors);
            }
            previous.valid = valid;
            validator.stopRequest(element, valid);
          }
        }, param));
        return "pending";
      }
    }

  });

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

  var pendingRequests = {},
      ajax;
// Use a prefilter if available (1.5+)
  if ($.ajaxPrefilter) {
    $.ajaxPrefilter(function(settings, _, xhr) {
      var port = settings.port;
      if (settings.mode === "abort") {
        if (pendingRequests[port]) {
          pendingRequests[port].abort();
        }
        pendingRequests[port] = xhr;
      }
    });
  } else {
    // Proxy ajax
    ajax = $.ajax;
    $.ajax = function(settings) {
      var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
          port = ( "port" in settings ? settings : $.ajaxSettings ).port;
      if (mode === "abort") {
        if (pendingRequests[port]) {
          pendingRequests[port].abort();
        }
        pendingRequests[port] = ajax.apply(this, arguments);
        return pendingRequests[port];
      }
      return ajax.apply(this, arguments);
    };
  }

}));
/*! Magnific Popup - v1.0.0 - 2015-01-03
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2015 Dmitry Semenov; */
!function(a) {
  "function" == typeof define && define.amd ?
      define(["jquery"], a) :
      a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
  var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." +
      o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function() {
  }, u = !!window.jQuery, v = a(window), w = function(a, c) {
    b.ev.on(o + a + p, c)
  }, x = function(b, c, d, e) {
    var f = document.createElement("div");
    return f.className = "mfp-" + b, d && (f.innerHTML = d), e ?
    c && c.appendChild(f) :
        (f = a(f), c && f.appendTo(c)), f
  }, y = function(c, d) {
    b.ev.triggerHandler(o + c, d), b.st.callbacks &&
    (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] &&
    b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
  }, z = function(c) {
    return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(
        b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
  }, A = function() {
    a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
  }, B = function() {
    var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"];
    if (void 0 !== a.transition)return !0;
    for (; b.length;)if (b.pop() + "Transition" in a)return !0;
    return !1
  };
  t.prototype = {
    constructor: t, init: function() {
      var c = navigator.appVersion;
      b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !==
          c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(
          c), b.isIOS = /iphone|ipad|ipod/gi.test(
          c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
              navigator.userAgent), d = a(document), b.popupsCache = {}
    }, open: function(c) {
      var e;
      if (c.isObj === !1) {
        b.items = c.items.toArray(), b.index = 0;
        var g, h = c.items;
        for (e = 0; e < h.length; e++)if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
          b.index = e;
          break
        }
      } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
      if (b.isOpen)return void b.updateItemHTML();
      b.types = [], f = "", b.ev = c.mainEl && c.mainEl.length ? c.mainEl.eq(0) : d, c.key ?
          (b.popupsCache[c.key] ||
          (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) :
          b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults,
          c), b.fixedContentPos = "auto" === b.st.fixedContentPos ?
          !b.probablyMobile :
          b.st.fixedContentPos, b.st.modal &&
      (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay ||
      (b.bgOverlay = x("bg").on("click" + p, function() {
        b.close()
      }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
        b._checkIfClose(a.target) && b.close()
      }), b.container = x("container", b.wrap)), b.contentContainer = x(
          "content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
      }
      y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
        c.close_replaceWith = z(d.type)
      }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop &&
      (f += " mfp-align-top"), b.wrap.css(b.fixedContentPos ?
      {
        overflow: b.st.overflowY,
        overflowX: "hidden",
        overflowY: b.st.overflowY
      } :
      {
        top: v.scrollTop(),
        position: "absolute"
      }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) &&
      b.bgOverlay.css({height: d.height(), position: "absolute"}), b.st.enableEscapeKey &&
      d.on("keyup" + p, function(a) {
        27 === a.keyCode && b.close()
      }), v.on("resize" + p, function() {
        b.updateSize()
      }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
      var k = b.wH = v.height(), n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o)
      }
      b.fixedContentPos &&
      (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
      var r = b.st.mainClass;
      return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y(
          "BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap)
          .prependTo(b.st.prependTo ||
              a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
        b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on(
            "focusin" + p, b._onFocusIn)
      }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
    }, close: function() {
      b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ?
          (b._addClassToMFP(r), setTimeout(function() {
            b._close()
          }, b.st.removalDelay)) :
          b._close())
    }, _close: function() {
      y(h);
      var c = r + " " + q + " ";
      if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass &&
          (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
        var e = {marginRight: ""};
        b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
      }
      d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap")
          .removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class",
          "mfp-container"), !b.st.showCloseBtn ||
      b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 ||
      b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b._lastFocusedEl &&
      a(b._lastFocusedEl)
          .focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(
          j)
    }, updateSize: function(a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight *
            c;
        b.wrap.css("height", d), b.wH = d
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
    }, updateItemHTML: function() {
      var c = b.items[b.index];
      b.contentContainer.detach(), b.content && b.content.detach(), c.parsed ||
      (c = b.parseEl(b.index));
      var d = c.type;
      if (y("BeforeChange",
              [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f), b.currTemplate[d] = f ? a(f) : !0
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
      b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(
          b.contentContainer), y("AfterChange")
    }, appendContent: function(a, c) {
      b.content = a, a ?
          b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ?
          b.content.find(".mfp-close").length || b.content.append(z()) :
              b.content = a :
          b.content = "", y(k), b.container.addClass(
          "mfp-" + c + "-holder"), b.contentContainer.append(b.content)
    }, parseEl: function(c) {
      var d, e = b.items[c];
      if (e.tagName ? e = {el: a(e)} : (d = e.type, e = {data: e, src: e.src}), e.el) {
        for (var f = b.types, g = 0; g < f.length; g++)if (e.el.hasClass("mfp-" + f[g])) {
          d = f[g];
          break
        }
        e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
      }
      return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y(
          "ElementParse", e), b.items[c]
    }, addGroup: function(a, c) {
      var d = function(d) {
        d.mfpEl = this, b._openClick(d, a, c)
      };
      c || (c = {});
      var e = "click.magnificPopup";
      c.mainEl = a, c.items ?
          (c.isObj = !0, a.off(e).on(e, d)) :
          (c.isObj = !1, c.delegate ?
              a.off(e).on(e, c.delegate, d) :
              (c.items = a, a.off(e).on(e, d)))
    }, _openClick: function(c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (f || 2 !== c.which && !c.ctrlKey && !c.metaKey) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
        if (g)if (a.isFunction(g)) {
          if (!g.call(b))return !0
        } else if (v.width() < g)return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(
            c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
      }
    }, updateStatus: function(a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a ||
        (d = b.st.tLoading);
        var e = {status: a, text: d};
        y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a")
            .on("click", function(a) {
              a.stopImmediatePropagation()
            }), b.container.addClass("mfp-s-" + a), c = a
      }
    }, _checkIfClose: function(c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick;
        if (d && e)return !0;
        if (!b.content || a(c).hasClass("mfp-close") ||
            b.preloader && c === b.preloader[0])return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d)return !0
        } else if (e && a.contains(document, c))return !0;
        return !1
      }
    }, _addClassToMFP: function(a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a)
    }, _removeClassFromMFP: function(a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
    }, _hasScrollBar: function(a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
    }, _setFocus: function() {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
    }, _onFocusIn: function(c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ?
          void 0 :
          (b._setFocus(), !1)
    }, _parseMarkup: function(b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(a, c) {
        if (void 0 === c || c === !1)return !0;
        if (e = a.split("_"), e.length > 1) {
          var d = b.find(p + "-" + e[0]);
          if (d.length > 0) {
            var f = e[1];
            "replaceWith" === f ?
            d[0] !== c[0] && d.replaceWith(c) :
                "img" === f ?
                    d.is("img") ?
                        d.attr("src", c) :
                        d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') :
                    d.attr(e[1], c)
          }
        } else b.find(p + "-" + a).html(c)
      })
    }, _getScrollbarSize: function() {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(
            a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
      }
      return b.scrollbarSize
    }
  }, a.magnificPopup = {
    instance: null,
    proto: t.prototype,
    modules: [],
    open: function(b, c) {
      return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c ||
          0, this.instance.open(b)
    },
    close: function() {
      return a.magnificPopup.instance && a.magnificPopup.instance.close()
    },
    registerModule: function(b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto,
          c.proto), this.modules.push(b)
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading..."
    }
  }, a.fn.magnificPopup = function(c) {
    A();
    var d = a(this);
    if ("string" == typeof c)if ("open" === c) {
      var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) ||
          0;
      f.items ?
          e = f.items[g] :
          (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({mfpEl: e}, d,
          f)
    } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1)); else c = a.extend(
        !0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
    return d
  };
  var C, D, E, F = "inline", G = function() {
    E && (D.after(E.addClass(C)).detach(), E = null)
  };
  a.magnificPopup.registerModule(F, {
    options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"},
    proto: {
      initInline: function() {
        b.types.push(F), w(h + "." + F, function() {
          G()
        })
      }, getInline: function(c, d) {
        if (G(), c.src) {
          var e = b.st.inline, f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D)
                .detach()
                .removeClass(C)), b.updateStatus("ready")
          } else b.updateStatus("error", e.tNotFound), f = a("<div>");
          return c.inlineElement = f, f
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
      }
    }
  });
  var H, I = "ajax", J = function() {
    H && a(document.body).removeClass(H)
  }, K = function() {
    J(), b.req && b.req.abort()
  };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    }, proto: {
      initAjax: function() {
        b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
      }, getAjax: function(c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend({
          url: c.src, success: function(d, e, f) {
            var g = {data: d, xhr: f};
            y("ParseAjax", g), b.appendContent(a(g.data),
                I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
              b.wrap.addClass(q)
            }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
          }, error: function() {
            J(), c.finished = c.loadError = !0, b.updateStatus("error",
                b.st.ajax.tError.replace("%url%", c.src))
          }
        }, b.st.ajax.settings);
        return b.req = a.ajax(d), ""
      }
    }
  });
  var L, M = function(c) {
    if (c.data && void 0 !== c.data.title)return c.data.title;
    var d = b.st.image.titleSrc;
    if (d) {
      if (a.isFunction(d))return d.call(b, c);
      if (c.el)return c.el.attr(d) || ""
    }
    return ""
  };
  a.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    }, proto: {
      initImage: function() {
        var c = b.st.image, d = ".image";
        b.types.push("image"), w(m + d, function() {
          "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
        }), w(h + d, function() {
          c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
        }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
      }, resizeImage: function() {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
        }
      }, _onImageHasSize: function(a) {
        a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize",
            a), a.imgHidden &&
        (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
      }, findImageSize: function(a) {
        var c = 0, d = a.img[0], e = function(f) {
          L && clearInterval(L), L = setInterval(function() {
            return d.naturalWidth > 0 ?
                void b._onImageHasSize(a) :
                (c > 200 && clearInterval(L), c++, void(3 === c ?
                    e(10) :
                    40 === c ?
                        e(50) :
                    100 === c && e(500)))
          }, f)
        };
        e(1)
      }, getImage: function(c, d) {
        var e = 0, f = function() {
          c && (c.img[0].complete ?
              (c.img.off(".mfploader"), c === b.currItem &&
              (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y(
                  "ImageLoadComplete")) :
              (e++, 200 > e ? setTimeout(f, 100) : g()))
        }, g = function() {
          c && (c.img.off(".mfploader"), c === b.currItem &&
          (b._onImageHasSize(c), b.updateStatus("error",
              h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
        }, h = b.st.image, i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          j.className = "mfp-img", c.el && c.el.find("img").length &&
          (j.alt = c.el.find("img").attr("alt")), c.img = a(j)
              .on("load.mfploader", f)
              .on("error.mfploader", g), j.src = c.src, i.is("img") &&
          (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ?
              c.hasSize = !0 :
          j.width || (c.hasSize = !1)
        }
        return b._parseMarkup(d, {title: M(c), img_replaceWith: c.img},
            c), b.resizeImage(), c.hasSize ?
            (L && clearInterval(L), c.loadError ?
                (d.addClass("mfp-loading"), b.updateStatus("error",
                    h.tError.replace("%url%", c.src))) :
                (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) :
            (b.updateStatus("loading"), c.loading = !0, c.hasSize ||
            (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
      }
    }
  });
  var N, O = function() {
    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
  };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1, easing: "ease-in-out", duration: 300, opener: function(a) {
        return a.is("img") ? a : a.find("img")
      }
    }, proto: {
      initZoom: function() {
        var a, c = b.st.zoom, d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e, f, g = c.duration, j = function(a) {
            var b = a.clone()
                .removeAttr("style")
                .removeAttr("class")
                .addClass("mfp-animated-image"), d = "all " + c.duration / 1e3 + "s " +
                c.easing, e = {
              position: "fixed",
              zIndex: 9999,
              left: 0,
              top: 0,
              "-webkit-backface-visibility": "hidden"
            }, f = "transition";
            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
          }, k = function() {
            b.content.css("visibility", "visible")
          };
          w("BuildControls" + d, function() {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.content.css("visibility",
                      "hidden"), a = b._getItemToZoom(), !a)return void k();
              f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                f.css(b._getOffset(!0)), e = setTimeout(function() {
                  k(), setTimeout(function() {
                    f.remove(), a = f = null, y("ZoomAnimationEnded")
                  }, 16)
                }, g)
              }, 16)
            }
          }), w(i + d, function() {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.st.removalDelay = g, !a) {
                if (a = b._getItemToZoom(), !a)return;
                f = j(a)
              }
              f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility",
                  "hidden"), setTimeout(function() {
                f.css(b._getOffset())
              }, 16)
            }
          }), w(h + d, function() {
            b._allowZoom() && (k(), f && f.remove(), a = null)
          })
        }
      }, _allowZoom: function() {
        return "image" === b.currItem.type
      }, _getItemToZoom: function() {
        return b.currItem.hasSize ? b.currItem.img : !1
      }, _getOffset: function(c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(), f = parseInt(d.css("padding-top"), 10), g = parseInt(
            d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f};
        return O() ?
            h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" :
            (h.left = e.left, h.top = e.top), h
      }
    }
  });
  var P = "iframe", Q = "//about:blank", R = function(a) {
    if (b.currTemplate[P]) {
      var c = b.currTemplate[P].find("iframe");
      c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
    }
  };
  a.magnificPopup.registerModule(P, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
        gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
      }
    }, proto: {
      initIframe: function() {
        b.types.push(P), w("BeforeChange", function(a, b, c) {
          b !== c && (b === P ? R() : c === P && R(!0))
        }), w(h + "." + P, function() {
          R()
        })
      }, getIframe: function(c, d) {
        var e = c.src, f = b.st.iframe;
        a.each(f.patterns, function() {
          return e.indexOf(this.index) > -1 ?
              (this.id && (e = "string" == typeof this.id ?
                  e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) :
                  this.id.call(this, e)), e = this.src.replace("%id%", e), !1) :
              void 0
        });
        var g = {};
        return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus(
            "ready"), d
      }
    }
  });
  var S = function(a) {
    var c = b.items.length;
    return a > c - 1 ? a - c : 0 > a ? c + a : a
  }, T = function(a, b, c) {
    return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
  };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    }, proto: {
      initGallery: function() {
        var c = b.st.gallery, e = ".mfp-gallery", g = Boolean(a.fn.mfpFastClick);
        return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
          c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
            return b.items.length > 1 ? (b.next(), !1) : void 0
          }), d.on("keydown" + e, function(a) {
            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
          })
        }), w("UpdateStatus" + e, function(a, c) {
          c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
        }), w(l + e, function(a, d, e, f) {
          var g = b.items.length;
          e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
        }), w("BuildControls" + e, function() {
          if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
            var d = c.arrowMarkup, e = b.arrowLeft = a(
                d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left"))
                .addClass(s), f = b.arrowRight = a(
                d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s), h = g ?
                "mfpFastClick" :
                "click";
            e[h](function() {
              b.prev()
            }), f[h](function() {
              b.next()
            }), b.isIE7 &&
            (x("b", e[0], !1, !0), x("a", e[0], !1, !0), x("b", f[0], !1, !0), x("a", f[0], !1,
                !0)), b.container.append(e.add(f))
          }
        }), w(n + e, function() {
          b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(
              function() {
                b.preloadNearbyImages(), b._preloadTimeout = null
              }, 16)
        }), void w(h + e, function() {
          d.off(e), b.wrap.off("click" + e), b.arrowLeft && g &&
          b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null
        })) : !1
      }, next: function() {
        b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
      }, prev: function() {
        b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
      }, goTo: function(a) {
        b.direction = a >= b.index, b.index = a, b.updateItemHTML()
      }, preloadNearbyImages: function() {
        var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1],
            b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++)b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++)b._preloadItem(b.index - a)
      }, _preloadItem: function(c) {
        if (c = S(c), !b.items[c].preloaded) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type &&
          (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
            d.hasSize = !0
          }).on("error.mfploader", function() {
            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
          }).attr("src", d.src)), d.preloaded = !0
        }
      }
    }
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function(a) {
        return a.src.replace(/\.\w+$/, function(a) {
          return "@2x" + a
        })
      }, ratio: 1
    }, proto: {
      initRetina: function() {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina, c = a.ratio;
          c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
            b.img.css({"max-width": b.img[0].naturalWidth / c, width: "100%"})
          }), w("ElementParse." + U, function(b, d) {
            d.src = a.replaceSrc(d, c)
          }))
        }
      }
    }
  }), function() {
    var b = 1e3, c = "ontouchstart" in window, d = function() {
      v.off("touchmove" + f + " touchend" + f)
    }, e = "mfpFastClick", f = "." + e;
    a.fn.mfpFastClick = function(e) {
      return a(this).each(function() {
        var g, h = a(this);
        if (c) {
          var i, j, k, l, m, n;
          h.on("touchstart" + f, function(a) {
            l = !1, n = 1, m = a.originalEvent ?
                a.originalEvent.touches[0] :
                a.touches[0], j = m.clientX, k = m.clientY, v.on("touchmove" + f, function(a) {
              m = a.originalEvent ?
                  a.originalEvent.touches :
                  a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 ||
              Math.abs(m.clientY - k) > 10) && (l = !0, d())
            }).on("touchend" + f, function(a) {
              d(), l || n > 1 ||
              (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function() {
                g = !1
              }, b), e())
            })
          })
        }
        h.on("click" + f, function() {
          g || e()
        })
      })
    }, a.fn.destroyMfpFastClick = function() {
      a(this).off("touchstart" + f + " click" + f), c && v.off("touchmove" + f + " touchend" + f)
    }
  }(), A()
});
/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 */
(function(root, factory) {

  /* CommonJS */
  if (typeof exports == 'object')  module.exports = factory()

  /* AMD module */
  else if (typeof define == 'function' && define.amd) define(factory)

  /* Browser global */
  else root.Spinner = factory()
}
(this, function() {
  "use strict";

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
      , animations = {} /* Animation rules keyed by their name */
      , useCssAnimations
  /* Whether to use CSS animations or setTimeout */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl(tag, prop) {
    var el = document.createElement(tag || 'div')
        , n

    for (n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins(parent /* child1, child2, ...*/) {
    for (var i = 1, n = arguments.length; i < n; i++)
      parent.appendChild(arguments[i])

    return parent
  }

  /**
   * Insert a new stylesheet to hold the @keyframe or VML rules.
   */
  var sheet = (function() {
    var el = createEl('style', {type: 'text/css'})
    ins(document.getElementsByTagName('head')[0], el)
    return el.sheet || el.styleSheet
  }())

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation(alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-')
        , start = 0.01 + i / lines * 100
        , z = Math.max(1 - (1 - alpha) / trail * (100 - start), alpha)
        , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation'))
        .toLowerCase()
        , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
          '@' + pre + 'keyframes ' + name + '{' +
          '0%{opacity:' + z + '}' +
          start + '%{opacity:' + alpha + '}' +
          (start + 0.01) + '%{opacity:1}' +
          (start + trail) % 100 + '%{opacity:' + alpha + '}' +
          '100%{opacity:' + z + '}' +
          '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor(el, prop) {
    var s = el.style
        , pp
        , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    for (i = 0; i < prefixes.length; i++) {
      pp = prefixes[i] + prop
      if (s[pp] !== undefined) return pp
    }
    if (s[prop] !== undefined) return prop
  }

  /**
   * Sets multiple style properties at once.
   */
  function css(el, prop) {
    for (var n in prop)
      el.style[vendor(el, n) || n] = prop[n]

    return el
  }

  /**
   * Fills in default values.
   */
  function merge(obj) {
    for (var i = 1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def)
        if (obj[n] === undefined) obj[n] = def[n]
    }
    return obj
  }

  /**
   * Returns the absolute page-offset of the given element.
   */
  function pos(el) {
    var o = {x: el.offsetLeft, y: el.offsetTop}
    while ((el = el.offsetParent))
      o.x += el.offsetLeft, o.y += el.offsetTop

    return o
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor(color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12,            // The number of lines to draw
    length: 7,            // The length of each line
    width: 5,             // The line thickness
    radius: 10,           // The radius of the inner circle
    rotate: 0,            // Rotation offset
    corners: 1,           // Roundness (0..1)
    color: '#000',        // #rgb or #rrggbb
    direction: 1,         // 1: clockwise, -1: counterclockwise
    speed: 1,             // Rounds per second
    trail: 100,           // Afterglow percentage
    opacity: 1 / 4,         // Opacity of the lines
    fps: 20,              // Frames per second when using setTimeout()
    zIndex: 2e9,          // Use a high z-index by default
    className: 'spinner', // CSS class to assign to the element
    top: '50%',           // center vertically
    left: '50%',          // center horizontally
    position: 'absolute'  // element position
  }

  /** The constructor */
  function Spinner(o) {
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {

    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function(target) {
      this.stop()

      var self = this
          , o = self.opts
          , el = self.el = css(createEl(0, {className: o.className}),
          {position: o.position, width: 0, zIndex: o.zIndex})
          , mid = o.radius + o.length + o.width

      css(el, {
        left: o.left,
        top: o.top
      })

      if (target) {
        target.insertBefore(el, target.firstChild || null)
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
            , start = (o.lines - 1) * (1 - o.direction) / 2
            , alpha
            , fps = o.fps
            , f = fps / o.speed
            , ostep = (1 - o.opacity) / (f * o.trail / 100)
            , astep = f / o.lines

            ;
        (function anim() {
          i++;
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000 / fps))
        })()
      }
      return self
    },

    /**
     * Stops and removes the Spinner.
     */
    stop: function() {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    },

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
    lines: function(el, o) {
      var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , seg

      function fill(color, shadow) {
        return css(createEl(), {
          position: 'absolute',
          width: (o.length + o.width) + 'px',
          height: o.width + 'px',
          background: color,
          boxShadow: shadow,
          transformOrigin: 'left',
          transform: 'rotate(' + ~~(360 / o.lines * i + o.rotate) + 'deg) translate(' + o.radius +
          'px' + ',0)',
          borderRadius: (o.corners * o.width >> 1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute',
          top: 1 + ~(o.width / 2) + 'px',
          transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
          opacity: o.opacity,
          animation: useCssAnimations &&
          addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1 / o.speed +
          's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {top: 2 + 'px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    },

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
    opacity: function(el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })

  function initVML() {

    /* Utility function to create a VML tag */
    function vml(tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function(el, o) {
      var r = o.length + o.width
          , s = 2 * r

      function grp() {
        return css(
            vml('group', {
              coordsize: s + ' ' + s,
              coordorigin: -r + ' ' + -r
            }),
            {width: s, height: s}
        )
      }

      var margin = -(o.width + o.length) * 2 + 'px'
          , g = css(grp(), {position: 'absolute', top: margin, left: margin})
          , i

      function seg(i, dx, filter) {
        ins(g,
            ins(css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx}),
                ins(css(vml('roundrect', {arcsize: o.corners}), {
                      width: r,
                      height: o.width,
                      left: o.radius,
                      top: -o.width >> 1,
                      filter: filter
                    }),
                    vml('fill', {color: getColor(o.color, i), opacity: o.opacity}),
                    vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
                )
            )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++)
          seg(i, -2,
              'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function(el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i + o < c.childNodes.length) {
        c = c.childNodes[i + o];
        c = c && c.firstChild;
        c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

  if (!vendor(probe, 'transform') && probe.adj) initVML()
  else useCssAnimations = vendor(probe, 'animation')

  return Spinner

}));

/*!
 * Ladda
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2014 Hakim El Hattab, http://hakim.se
 */
/* jshint node:true, browser:true */
(function(root, factory) {

  // CommonJS
  if (typeof exports === 'object') {
    module.exports = factory(require('spin.js'));
  }
  // AMD module
  else if (typeof define === 'function' && define.amd) {
    define(['spin'], factory);
  }
  // Browser global
  else {
    root.Ladda = factory(root.Spinner);
  }

}
(this, function(Spinner) {
  'use strict';

  // All currently instantiated instances of Ladda
  var ALL_INSTANCES = [];

  /**
   * Creates a new instance of Ladda which wraps the
   * target button element.
   *
   * @return An API object that can be used to control
   * the loading animation state.
   */
  function create(button) {

    if (typeof button === 'undefined') {
      console.warn("Ladda button target must be defined.");
      return;
    }

    // The text contents must be wrapped in a ladda-label
    // element, create one if it doesn't already exist
    if (!button.querySelector('.ladda-label')) {
      button.innerHTML = '<span class="ladda-label">' + button.innerHTML + '</span>';
    }

    // The spinner component
    var spinner;

    // Wrapper element for the spinner
    var spinnerWrapper = document.createElement('span');
    spinnerWrapper.className = 'ladda-spinner';
    button.appendChild(spinnerWrapper);

    // Timer used to delay starting/stopping
    var timer;

    var instance = {

      /**
       * Enter the loading state.
       */
      start: function() {

        // Create the spinner if it doesn't already exist
        if (!spinner) spinner = createSpinner(button);

        button.setAttribute('disabled', '');
        button.setAttribute('data-loading', '');

        clearTimeout(timer);
        spinner.spin(spinnerWrapper);

        this.setProgress(0);

        return this; // chain

      },

      /**
       * Enter the loading state, after a delay.
       */
      startAfter: function(delay) {

        clearTimeout(timer);
        timer = setTimeout(function() {
          instance.start();
        }, delay);

        return this; // chain

      },

      /**
       * Exit the loading state.
       */
      stop: function() {

        button.removeAttribute('disabled');
        button.removeAttribute('data-loading');

        // Kill the animation after a delay to make sure it
        // runs for the duration of the button transition
        clearTimeout(timer);

        if (spinner) {
          timer = setTimeout(function() {
            spinner.stop();
          }, 1000);
        }

        return this; // chain

      },

      /**
       * Toggle the loading state on/off.
       */
      toggle: function() {

        if (this.isLoading()) {
          this.stop();
        }
        else {
          this.start();
        }

        return this; // chain

      },

      /**
       * Sets the width of the visual progress bar inside of
       * this Ladda button
       *
       * @param {Number} progress in the range of 0-1
       */
      setProgress: function(progress) {

        // Cap it
        progress = Math.max(Math.min(progress, 1), 0);

        var progressElement = button.querySelector('.ladda-progress');

        // Remove the progress bar if we're at 0 progress
        if (progress === 0 && progressElement && progressElement.parentNode) {
          progressElement.parentNode.removeChild(progressElement);
        }
        else {
          if (!progressElement) {
            progressElement = document.createElement('div');
            progressElement.className = 'ladda-progress';
            button.appendChild(progressElement);
          }

          progressElement.style.width = ( ( progress || 0 ) * button.offsetWidth ) + 'px';
        }

      },

      enable: function() {

        this.stop();

        return this; // chain

      },

      disable: function() {

        this.stop();
        button.setAttribute('disabled', '');

        return this; // chain

      },

      isLoading: function() {

        return button.hasAttribute('data-loading');

      },

      remove: function() {

        clearTimeout(timer);

        button.removeAttribute('disabled', '');
        button.removeAttribute('data-loading', '');

        if (spinner) {
          spinner.stop();
          spinner = null;
        }

        for (var i = 0, len = ALL_INSTANCES.length; i < len; i++) {
          if (instance === ALL_INSTANCES[i]) {
            ALL_INSTANCES.splice(i, 1);
            break;
          }
        }

      }

    };

    ALL_INSTANCES.push(instance);

    return instance;

  }

  /**
   * Get the first ancestor node from an element, having a
   * certain type.
   *
   * @param elem An HTML element
   * @param type an HTML tag type (uppercased)
   *
   * @return An HTML element
   */
  function getAncestorOfTagType(elem, type) {

    while (elem.parentNode && elem.tagName !== type) {
      elem = elem.parentNode;
    }

    return ( type === elem.tagName ) ? elem : undefined;

  }

  /**
   * Returns a list of all inputs in the given form that
   * have their `required` attribute set.
   *
   * @param form The from HTML element to look in
   *
   * @return A list of elements
   */
  function getRequiredFields(form) {

    var requirables = ['input', 'textarea'];
    var inputs = [];

    for (var i = 0; i < requirables.length; i++) {
      var candidates = form.getElementsByTagName(requirables[i]);
      for (var j = 0; j < candidates.length; j++) {
        if (candidates[j].hasAttribute('required')) {
          inputs.push(candidates[j]);
        }
      }
    }

    return inputs;

  }

  /**
   * Binds the target buttons to automatically enter the
   * loading state when clicked.
   *
   * @param target Either an HTML element or a CSS selector.
   * @param options
   *          - timeout Number of milliseconds to wait before
   *            automatically cancelling the animation.
   */
  function bind(target, options) {

    options = options || {};

    var targets = [];

    if (typeof target === 'string') {
      targets = toArray(document.querySelectorAll(target));
    }
    else if (typeof target === 'object' && typeof target.nodeName === 'string') {
      targets = [target];
    }

    for (var i = 0, len = targets.length; i < len; i++) {

      (function() {
        var element = targets[i];

        // Make sure we're working with a DOM element
        if (typeof element.addEventListener === 'function') {
          var instance = create(element);
          var timeout = -1;

          element.addEventListener('click', function(event) {

            // If the button belongs to a form, make sure all the
            // fields in that form are filled out
            var valid = true;
            var form = getAncestorOfTagType(element, 'FORM');

            if (typeof form !== 'undefined') {
              var requireds = getRequiredFields(form);
              for (var i = 0; i < requireds.length; i++) {
                // Alternatively to this trim() check,
                // we could have use .checkValidity() or .validity.valid
                if (requireds[i].value.replace(/^\s+|\s+$/g, '') === '') {
                  valid = false;
                }
              }
            }

            if (valid) {
              // This is asynchronous to avoid an issue where setting
              // the disabled attribute on the button prevents forms
              // from submitting
              instance.startAfter(1);

              // Set a loading timeout if one is specified
              if (typeof options.timeout === 'number') {
                clearTimeout(timeout);
                timeout = setTimeout(instance.stop, options.timeout);
              }

              // Invoke callbacks
              if (typeof options.callback === 'function') {
                options.callback.apply(null, [instance]);
              }
            }

          }, false);
        }
      })();

    }

  }

  /**
   * Stops ALL current loading animations.
   */
  function stopAll() {

    for (var i = 0, len = ALL_INSTANCES.length; i < len; i++) {
      ALL_INSTANCES[i].stop();
    }

  }

  function createSpinner(button) {

    var height = button.offsetHeight,
        spinnerColor;

    if (height === 0) {
      // We may have an element that is not visible so
      // we attempt to get the height in a different way
      height = parseFloat(window.getComputedStyle(button).height);
    }

    // If the button is tall we can afford some padding
    if (height > 32) {
      height *= 0.8;
    }

    // Prefer an explicit height if one is defined
    if (button.hasAttribute('data-spinner-size')) {
      height = parseInt(button.getAttribute('data-spinner-size'), 10);
    }

    // Allow buttons to specify the color of the spinner element
    if (button.hasAttribute('data-spinner-color')) {
      spinnerColor = button.getAttribute('data-spinner-color');
    }

    var lines = 12,
        radius = height * 0.2,
        length = radius * 0.6,
        width = radius < 7 ? 2 : 3;

    return new Spinner({
      color: spinnerColor || '#fff',
      lines: lines,
      radius: radius,
      length: length,
      width: width,
      zIndex: 'auto',
      top: 'auto',
      left: 'auto',
      className: ''
    });

  }

  function toArray(nodes) {

    var a = [];

    for (var i = 0; i < nodes.length; i++) {
      a.push(nodes[i]);
    }

    return a;

  }

  // Public API
  return {

    bind: bind,
    create: create,
    stopAll: stopAll

  };

}));

/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in
 * the current UA and makes the results available to you in two ways:
 * as properties on a global Modernizr object, and as classes on the
 * <html> element. This information allows you to progressively enhance
 * your pages with a granular level of control over the experience.
 *
 * Modernizr has an optional (not included) conditional resource loader
 * called Modernizr.load(), based on Yepnope.js (yepnopejs.com).
 * To get a build that includes Modernizr.load(), as well as choosing
 * which tests to include, go to www.modernizr.com/download/
 *
 * Authors        Faruk Ates, Paul Irish, Alex Sexton
 * Contributors   Ryan Seddon, Ben Alman
 */

window.Modernizr = (function(window, document, undefined) {

  var version = '2.8.3',

      Modernizr = {},

  /*>>cssclasses*/
  // option for enabling the HTML classes to be added
      enableClasses = true,
  /*>>cssclasses*/

      docElement = document.documentElement,

      /**
       * Create our "modernizr" element that we do most feature tests on.
       */
      mod = 'modernizr',
      modElem = document.createElement(mod),
      mStyle = modElem.style,

      /**
       * Create the input element for various Web Forms feature tests.
       */
      inputElem /*>>inputelem*/ = document.createElement('input') /*>>inputelem*/,

  /*>>smile*/
      smile = ':)',
  /*>>smile*/

      toString = {}.toString,

  // TODO :: make the prefixes more granular
  /*>>prefixes*/
  // List of property values to set for css tests. See ticket #21
      prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
  /*>>prefixes*/

  /*>>domprefixes*/
  // Following spec is to expose vendor-specific style properties as:
  //   elem.style.WebkitBorderRadius
  // and the following would be incorrect:
  //   elem.style.webkitBorderRadius

  // Webkit ghosts their properties in lowercase but Opera & Moz do not.
  // Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
  //   erik.eae.net/archives/2008/03/10/21.48.10/

  // More here: github.com/Modernizr/Modernizr/issues/issue/21
      omPrefixes = 'Webkit Moz O ms',

      cssomPrefixes = omPrefixes.split(' '),

      domPrefixes = omPrefixes.toLowerCase().split(' '),
  /*>>domprefixes*/

  /*>>ns*/
      ns = {'svg': 'http://www.w3.org/2000/svg'},
  /*>>ns*/

      tests = {},
      inputs = {},
      attrs = {},

      classes = [],

      slice = classes.slice,

      featureName, // used in testing loop

  /*>>teststyles*/
  // Inject element with style element and some CSS rules
      injectElementWithStyles = function(rule, callback, nodes, testnames) {

        var style, ret, node, docOverflow,
            div = document.createElement('div'),
        // After page load injecting a fake body doesn't work so check if body exists
            body = document.body,
        // IE6 and 7 won't return offsetWidth or offsetHeight unless it's in the body element, so we fake it.
            fakeBody = body || document.createElement('body');

        if (parseInt(nodes, 10)) {
          // In order not to give false positives we create a node for each test
          // This also allows the method to scale for unspecified uses
          while (nodes--) {
            node = document.createElement('div');
            node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
            div.appendChild(node);
          }
        }

        // <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed
        // when injected with innerHTML. To get around this you need to prepend the 'NoScope' element
        // with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.
        // msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx
        // Documents served as xml will throw if using &shy; so use xml friendly encoded version. See issue #277
        style = ['&#173;', '<style id="s', mod, '">', rule, '</style>'].join('');
        div.id = mod;
        // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
        // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
        (body ? div : fakeBody).innerHTML += style;
        fakeBody.appendChild(div);
        if (!body) {
          //avoid crashing IE8, if background image is used
          fakeBody.style.background = '';
          //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
          fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
        }

        ret = callback(div, rule);
        // If this is done after page load we don't want to remove the body so check if body exists
        if (!body) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
        } else {
          div.parentNode.removeChild(div);
        }

        return !!ret;

      },
  /*>>teststyles*/

  /*>>mq*/
  // adapted from matchMedia polyfill
  // by Scott Jehl and Paul Irish
  // gist.github.com/786768
      testMediaQuery = function(mq) {

        var matchMedia = window.matchMedia || window.msMatchMedia;
        if (matchMedia) {
          return matchMedia(mq) && matchMedia(mq).matches || false;
        }

        var bool;

        injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }',
            function(node) {
              bool = (window.getComputedStyle ?
                      getComputedStyle(node, null) :
                      node.currentStyle)['position'] == 'absolute';
            });

        return bool;

      },
  /*>>mq*/


  /*>>hasevent*/
  //
  // isEventSupported determines if a given element supports the given event
  // kangax.github.com/iseventsupported/
  //
  // The following results are known incorrects:
  //   Modernizr.hasEvent("webkitTransitionEnd", elem) // false negative
  //   Modernizr.hasEvent("textInput") // in Webkit. github.com/Modernizr/Modernizr/issues/333
  //   ...
      isEventSupported = (function() {

        var TAGNAMES = {
          'select': 'input', 'change': 'input',
          'submit': 'form', 'reset': 'form',
          'error': 'img', 'load': 'img', 'abort': 'img'
        };

        function isEventSupported(eventName, element) {

          element = element || document.createElement(TAGNAMES[eventName] || 'div');
          eventName = 'on' + eventName;

          // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and "resize", whereas `in` "catches" those
          var isSupported = eventName in element;

          if (!isSupported) {
            // If it has no `setAttribute` (i.e. doesn't implement Node interface), try generic element
            if (!element.setAttribute) {
              element = document.createElement('div');
            }
            if (element.setAttribute && element.removeAttribute) {
              element.setAttribute(eventName, '');
              isSupported = is(element[eventName], 'function');

              // If property was created, "remove it" (by setting value to `undefined`)
              if (!is(element[eventName], 'undefined')) {
                element[eventName] = undefined;
              }
              element.removeAttribute(eventName);
            }
          }

          element = null;
          return isSupported;
        }

        return isEventSupported;
      })(),
  /*>>hasevent*/

  // TODO :: Add flag for hasownprop ? didn't last time

  // hasOwnProperty shim by kangax needed for Safari 2.0 support
      _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

  if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
    hasOwnProp = function(object, property) {
      return _hasOwnProperty.call(object, property);
    };
  }
  else {
    hasOwnProp = function(
        object,
        property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
      return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
    };
  }

  // Adapted from ES5-shim https://github.com/kriskowal/es5-shim/blob/master/es5-shim.js
  // es5.github.com/#x15.3.4.5

  if (!Function.prototype.bind) {
    Function.prototype.bind = function bind(that) {

      var target = this;

      if (typeof target != "function") {
        throw new TypeError();
      }

      var args = slice.call(arguments, 1),
          bound = function() {

            if (this instanceof bound) {

              var F = function() {
              };
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

          };

      return bound;
    };
  }

  /**
   * setCss applies given styles to the Modernizr DOM node.
   */
  function setCss(str) {
    mStyle.cssText = str;
  }

  /**
   * setCssAll extrapolates all vendor-specific css strings.
   */
  function setCssAll(str1, str2) {
    return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
  }

  /**
   * is returns a boolean for if typeof obj is exactly type.
   */
  function is(obj, type) {
    return typeof obj === type;
  }

  /**
   * contains returns a boolean for if substr is found within str.
   */
  function contains(str, substr) {
    return !!~('' + str).indexOf(substr);
  }

  /*>>testprop*/

  // testProps is a generic CSS / DOM property test.

  // In testing support for a given CSS property, it's legit to test:
  //    `elem.style[styleName] !== undefined`
  // If the property is supported it will return an empty string,
  // if unsupported it will return undefined.

  // We'll take advantage of this quick test and skip setting a style
  // on our modernizr element, but instead just testing undefined vs
  // empty string.

  // Because the testing of the CSS property names (with "-", as
  // opposed to the camelCase DOM properties) is non-portable and
  // non-standard but works in WebKit and IE (but not Gecko or Opera),
  // we explicitly reject properties with dashes so that authors
  // developing in WebKit or IE first don't end up with
  // browser-specific content by accident.

  function testProps(props, prefixed) {
    for (var i in props) {
      var prop = props[i];
      if (!contains(prop, "-") && mStyle[prop] !== undefined) {
        return prefixed == 'pfx' ? prop : true;
      }
    }
    return false;
  }

  /*>>testprop*/

  // TODO :: add testDOMProps
  /**
   * testDOMProps is a generic DOM property test; if a browser supports
   *   a certain property, it won't return undefined for it.
   */
  function testDOMProps(props, obj, elem) {
    for (var i in props) {
      var item = obj[props[i]];
      if (item !== undefined) {

        // return the property name as a string
        if (elem === false) return props[i];

        // let's bind a function
        if (is(item, 'function')) {
          // default to autobind unless override
          return item.bind(elem || obj);
        }

        // return the unbound function or obj or value
        return item;
      }
    }
    return false;
  }

  /*>>testallprops*/
  /**
   * testPropsAll tests a list of DOM properties we want to check against.
   *   We specify literally ALL possible (known and/or likely) properties on
   *   the element including the non-vendor prefixed one, for forward-
   *   compatibility.
   */
  function testPropsAll(prop, prefixed, elem) {

    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
        props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

    // did they call .prefixed('boxSizing') or are we just testing a prop?
    if (is(prefixed, "string") || is(prefixed, "undefined")) {
      return testProps(props, prefixed);

      // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
    } else {
      props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
      return testDOMProps(props, prefixed, elem);
    }
  }

  /*>>testallprops*/

  /**
   * Tests
   * -----
   */

    // The *new* flexbox
    // dev.w3.org/csswg/css3-flexbox

  tests['flexbox'] = function() {
    return testPropsAll('flexWrap');
  };

  // The *old* flexbox
  // www.w3.org/TR/2009/WD-css3-flexbox-20090723/

  tests['flexboxlegacy'] = function() {
    return testPropsAll('boxDirection');
  };

  // On the S60 and BB Storm, getContext exists, but always returns undefined
  // so we actually have to call getContext() to verify
  // github.com/Modernizr/Modernizr/issues/issue/97/

  tests['canvas'] = function() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
  };

  tests['canvastext'] = function() {
    return !!(Modernizr['canvas'] &&
    is(document.createElement('canvas').getContext('2d').fillText, 'function'));
  };

  // webk.it/70117 is tracking a legit WebGL feature detect proposal

  // We do a soft detect which may false positive in order to avoid
  // an expensive context creation: bugzil.la/732441

  tests['webgl'] = function() {
    return !!window.WebGLRenderingContext;
  };

  /*
   * The Modernizr.touch test only indicates if the browser supports
   *    touch events, which does not necessarily reflect a touchscreen
   *    device, as evidenced by tablets running Windows 7 or, alas,
   *    the Palm Pre / WebOS (touch) phones.
   *
   * Additionally, Chrome (desktop) used to lie about its support on this,
   *    but that has since been rectified: crbug.com/36415
   *
   * We also test for Firefox 4 Multitouch Support.
   *
   * For more info, see: modernizr.github.com/Modernizr/touch.html
   */

  tests['touch'] = function() {
    var bool;

    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
      bool = true;
    } else {
      injectElementWithStyles([
        '@media (', prefixes.join('touch-enabled),('), mod, ')',
        '{#modernizr{top:9px;position:absolute}}'].join(''), function(node) {
        bool = node.offsetTop === 9;
      });
    }

    return bool;
  };

  // geolocation is often considered a trivial feature detect...
  // Turns out, it's quite tricky to get right:
  //
  // Using !!navigator.geolocation does two things we don't want. It:
  //   1. Leaks memory in IE9: github.com/Modernizr/Modernizr/issues/513
  //   2. Disables page caching in WebKit: webk.it/43956
  //
  // Meanwhile, in Firefox < 8, an about:config setting could expose
  // a false positive that would throw an exception: bugzil.la/688158

  tests['geolocation'] = function() {
    return 'geolocation' in navigator;
  };

  tests['postmessage'] = function() {
    return !!window.postMessage;
  };

  // Chrome incognito mode used to throw an exception when using openDatabase
  // It doesn't anymore.
  tests['websqldatabase'] = function() {
    return !!window.openDatabase;
  };

  // Vendors had inconsistent prefixing with the experimental Indexed DB:
  // - Webkit's implementation is accessible through webkitIndexedDB
  // - Firefox shipped moz_indexedDB before FF4b9, but since then has been mozIndexedDB
  // For speed, we don't test the legacy (and beta-only) indexedDB
  tests['indexedDB'] = function() {
    return !!testPropsAll("indexedDB", window);
  };

  // documentMode logic from YUI to filter out IE8 Compat Mode
  //   which false positives.
  tests['hashchange'] = function() {
    return isEventSupported('hashchange', window) &&
        (document.documentMode === undefined || document.documentMode > 7);
  };

  // Per 1.6:
  // This used to be Modernizr.historymanagement but the longer
  // name has been deprecated in favor of a shorter and property-matching one.
  // The old API is still available in 1.6, but as of 2.0 will throw a warning,
  // and in the first release thereafter disappear entirely.
  tests['history'] = function() {
    return !!(window.history && history.pushState);
  };

  tests['draganddrop'] = function() {
    var div = document.createElement('div');
    return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
  };

  // FF3.6 was EOL'ed on 4/24/12, but the ESR version of FF10
  // will be supported until FF19 (2/12/13), at which time, ESR becomes FF17.
  // FF10 still uses prefixes, so check for it until then.
  // for more ESR info, see: mozilla.org/en-US/firefox/organizations/faq/
  tests['websockets'] = function() {
    return 'WebSocket' in window || 'MozWebSocket' in window;
  };

  // css-tricks.com/rgba-browser-support/
  tests['rgba'] = function() {
    // Set an rgba() color and check the returned value

    setCss('background-color:rgba(150,255,150,.5)');

    return contains(mStyle.backgroundColor, 'rgba');
  };

  tests['hsla'] = function() {
    // Same as rgba(), in fact, browsers re-map hsla() to rgba() internally,
    //   except IE9 who retains it as hsla

    setCss('background-color:hsla(120,40%,100%,.5)');

    return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
  };

  tests['multiplebgs'] = function() {
    // Setting multiple images AND a color on the background shorthand property
    //  and then querying the style.background property value for the number of
    //  occurrences of "url(" is a reliable method for detecting ACTUAL support for this!

    setCss('background:url(https://),url(https://),red url(https://)');

    // If the UA supports multiple backgrounds, there should be three occurrences
    //   of the string "url(" in the return value for elemStyle.background

    return (/(url\s*\(.*?){3}/).test(mStyle.background);
  };

  // this will false positive in Opera Mini
  //   github.com/Modernizr/Modernizr/issues/396

  tests['backgroundsize'] = function() {
    return testPropsAll('backgroundSize');
  };

  tests['borderimage'] = function() {
    return testPropsAll('borderImage');
  };

  // Super comprehensive table about all the unique implementations of
  // border-radius: muddledramblings.com/table-of-css3-border-radius-compliance

  tests['borderradius'] = function() {
    return testPropsAll('borderRadius');
  };

  // WebOS unfortunately false positives on this test.
  tests['boxshadow'] = function() {
    return testPropsAll('boxShadow');
  };

  // FF3.0 will false positive on this test
  tests['textshadow'] = function() {
    return document.createElement('div').style.textShadow === '';
  };

  tests['opacity'] = function() {
    // Browsers that actually have CSS Opacity implemented have done so
    //  according to spec, which means their return values are within the
    //  range of [0.0,1.0] - including the leading zero.

    setCssAll('opacity:.55');

    // The non-literal . in this regex is intentional:
    //   German Chrome returns this value as 0,55
    // github.com/Modernizr/Modernizr/issues/#issue/59/comment/516632
    return (/^0.55$/).test(mStyle.opacity);
  };

  // Note, Android < 4 will pass this test, but can only animate
  //   a single property at a time
  //   goo.gl/v3V4Gp
  tests['cssanimations'] = function() {
    return testPropsAll('animationName');
  };

  tests['csscolumns'] = function() {
    return testPropsAll('columnCount');
  };

  tests['cssgradients'] = function() {
    /**
     * For CSS Gradients syntax, please see:
     * webkit.org/blog/175/introducing-css-gradients/
     * developer.mozilla.org/en/CSS/-moz-linear-gradient
     * developer.mozilla.org/en/CSS/-moz-radial-gradient
     * dev.w3.org/csswg/css3-images/#gradients-
     */

    var str1 = 'background-image:',
        str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
        str3 = 'linear-gradient(left top,#9f9, white);';

    setCss(
        // legacy webkit syntax (FIXME: remove when syntax not in use anymore)
        (str1 + '-webkit- '.split(' ').join(str2 + str1) +
          // standard syntax             // trailing 'background-image:'
        prefixes.join(str3 + str1)).slice(0, -str1.length)
    );

    return contains(mStyle.backgroundImage, 'gradient');
  };

  tests['cssreflections'] = function() {
    return testPropsAll('boxReflect');
  };

  tests['csstransforms'] = function() {
    return !!testPropsAll('transform');
  };

  tests['csstransforms3d'] = function() {

    var ret = !!testPropsAll('perspective');

    // Webkit's 3D transforms are passed off to the browser's own graphics renderer.
    //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
    //   some conditions. As a result, Webkit typically recognizes the syntax but
    //   will sometimes throw a false positive, thus we must do a more thorough check:
    if (ret && 'webkitPerspective' in docElement.style) {

      // Webkit allows this media query to succeed only if the feature is enabled.
      // `@media (transform-3d),(-webkit-transform-3d){ ... }`
      injectElementWithStyles(
          '@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}',
          function(node, rule) {
            ret = node.offsetLeft === 9 && node.offsetHeight === 3;
          });
    }
    return ret;
  };

  tests['csstransitions'] = function() {
    return testPropsAll('transition');
  };

  /*>>fontface*/
  // @font-face detection routine by Diego Perini
  // javascript.nwbox.com/CSSSupport/

  // false positives:
  //   WebOS github.com/Modernizr/Modernizr/issues/342
  //   WP7   github.com/Modernizr/Modernizr/issues/538
  tests['fontface'] = function() {
    var bool;

    injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}',
        function(node, rule) {
          var style = document.getElementById('smodernizr'),
              sheet = style.sheet || style.styleSheet,
              cssText = sheet ?
                  (sheet.cssRules && sheet.cssRules[0] ?
                      sheet.cssRules[0].cssText :
                  sheet.cssText || '') :
                  '';

          bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });

    return bool;
  };
  /*>>fontface*/

  // CSS generated content detection
  tests['generatedcontent'] = function() {
    var bool;

    injectElementWithStyles([
      '#', mod, '{font:0/0 a}#', mod, ':after{content:"', smile,
      '";visibility:hidden;font:3px/1 a}'].join(''), function(node) {
      bool = node.offsetHeight >= 3;
    });

    return bool;
  };

  // These tests evaluate support of the video/audio elements, as well as
  // testing what types of content they support.
  //
  // We're using the Boolean constructor here, so that we can extend the value
  // e.g.  Modernizr.video     // true
  //       Modernizr.video.ogg // 'probably'
  //
  // Codec values from : github.com/NielsLeenheer/html5test/blob/9106a8/index.html#L845
  //                     thx to NielsLeenheer and zcorpan

  // Note: in some older browsers, "no" was a return value instead of empty string.
  //   It was live in FF3.5.0 and 3.5.1, but fixed in 3.5.2
  //   It was also live in Safari 4.0.0 - 4.0.4, but fixed in 4.0.5

  tests['video'] = function() {
    var elem = document.createElement('video'),
        bool = false;

    // IE9 Running on Windows Server SKU can cause an exception to be thrown, bug #224
    try {
      if (bool = !!elem.canPlayType) {
        bool = new Boolean(bool);
        bool.ogg = elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, '');

        // Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546
        bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, '');

        bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '');
      }

    } catch (e) {
    }

    return bool;
  };

  tests['audio'] = function() {
    var elem = document.createElement('audio'),
        bool = false;

    try {
      if (bool = !!elem.canPlayType) {
        bool = new Boolean(bool);
        bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '');
        bool.mp3 = elem.canPlayType('audio/mpeg;').replace(/^no$/, '');

        // Mimetypes accepted:
        //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
        //   bit.ly/iphoneoscodecs
        bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '');
        bool.m4a = ( elem.canPlayType('audio/x-m4a;') ||
        elem.canPlayType('audio/aac;')).replace(/^no$/, '');
      }
    } catch (e) {
    }

    return bool;
  };

  // In FF4, if disabled, window.localStorage should === null.

  // Normally, we could not test that directly and need to do a
  //   `('localStorage' in window) && ` test first because otherwise Firefox will
  //   throw bugzil.la/365772 if cookies are disabled

  // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
  // will throw the exception:
  //   QUOTA_EXCEEDED_ERRROR DOM Exception 22.
  // Peculiarly, getItem and removeItem calls do not throw.

  // Because we are forced to try/catch this, we'll go aggressive.

  // Just FWIW: IE8 Compat mode supports these features completely:
  //   www.quirksmode.org/dom/html5.html
  // But IE8 doesn't support either with local files

  tests['localstorage'] = function() {
    try {
      localStorage.setItem(mod, mod);
      localStorage.removeItem(mod);
      return true;
    } catch (e) {
      return false;
    }
  };

  tests['sessionstorage'] = function() {
    try {
      sessionStorage.setItem(mod, mod);
      sessionStorage.removeItem(mod);
      return true;
    } catch (e) {
      return false;
    }
  };

  tests['webworkers'] = function() {
    return !!window.Worker;
  };

  tests['applicationcache'] = function() {
    return !!window.applicationCache;
  };

  // Thanks to Erik Dahlstrom
  tests['svg'] = function() {
    return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
  };

  // specifically for SVG inline in HTML, not within XHTML
  // test page: paulirish.com/demo/inline-svg
  tests['inlinesvg'] = function() {
    var div = document.createElement('div');
    div.innerHTML = '<svg/>';
    return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
  };

  // SVG SMIL animation
  tests['smil'] = function() {
    return !!document.createElementNS &&
        /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
  };

  // This test is only for clip paths in SVG proper, not clip paths on HTML content
  // demo: srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg

  // However read the comments to dig into applying SVG clippaths to HTML content here:
  //   github.com/Modernizr/Modernizr/issues/213#issuecomment-1149491
  tests['svgclippaths'] = function() {
    return !!document.createElementNS &&
        /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
  };

  /*>>webforms*/
  // input features and input types go directly onto the ret object, bypassing the tests loop.
  // Hold this guy to execute in a moment.
  function webforms() {
    /*>>input*/
    // Run through HTML5's new input attributes to see if the UA understands any.
    // We're using f which is the <input> element created early on
    // Mike Taylr has created a comprehensive resource for testing these attributes
    //   when applied to all input types:
    //   miketaylr.com/code/input-type-attr.html
    // spec: www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary

    // Only input placeholder is tested while textarea's placeholder is not.
    // Currently Safari 4 and Opera 11 have support only for the input placeholder
    // Both tests are available in feature-detects/forms-placeholder.js
    Modernizr['input'] = (function(props) {
      for (var i = 0, len = props.length; i < len; i++) {
        attrs[props[i]] = !!(props[i] in inputElem);
      }
      if (attrs.list) {
        // safari false positive's on datalist: webk.it/74252
        // see also github.com/Modernizr/Modernizr/issues/146
        attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
      }
      return attrs;
    })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
    /*>>input*/

    /*>>inputtypes*/
    // Run through HTML5's new input types to see if the UA understands any.
    //   This is put behind the tests runloop because it doesn't return a
    //   true/false like all the other tests; instead, it returns an object
    //   containing each input type with its corresponding true/false value

    // Big thanks to @miketaylr for the html5 forms expertise. miketaylr.com/
    Modernizr['inputtypes'] = (function(props) {

      for (var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++) {

        inputElem.setAttribute('type', inputElemType = props[i]);
        bool = inputElem.type !== 'text';

        // We first check to see if the type we give it sticks..
        // If the type does, we feed it a textual value, which shouldn't be valid.
        // If the value doesn't stick, we know there's input sanitization which infers a custom UI
        if (bool) {

          inputElem.value = smile;
          inputElem.style.cssText = 'position:absolute;visibility:hidden;';

          if (/^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined) {

            docElement.appendChild(inputElem);
            defaultView = document.defaultView;

            // Safari 2-4 allows the smiley as a value, despite making a slider
            bool = defaultView.getComputedStyle &&
                defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                  // Mobile android web browser has false positive, so must
                  // check the height to see if the widget is actually there.
                (inputElem.offsetHeight !== 0);

            docElement.removeChild(inputElem);

          } else if (/^(search|tel)$/.test(inputElemType)) {
            // Spec doesn't define any special parsing or detectable UI
            //   behaviors so we pass these through as true

            // Interestingly, opera fails the earlier test, so it doesn't
            //  even make it here.

          } else if (/^(url|email)$/.test(inputElemType)) {
            // Real url and email support comes with prebaked validation.
            bool = inputElem.checkValidity && inputElem.checkValidity() === false;

          } else {
            // If the upgraded input compontent rejects the :) text, we got a winner
            bool = inputElem.value != smile;
          }
        }

        inputs[props[i]] = !!bool;
      }
      return inputs;
    })('search tel url email datetime date month week time datetime-local number range color'.split(
        ' '));
    /*>>inputtypes*/
  }

  /*>>webforms*/

  // End of test definitions
  // -----------------------

  // Run through all tests and detect their support in the current UA.
  // todo: hypothetically we could be doing an array of tests and use a basic loop here.
  for (var feature in tests) {
    if (hasOwnProp(tests, feature)) {
      // run the test, throw the return value into the Modernizr,
      //   then based on that boolean, define an appropriate className
      //   and push it into an array of classes we'll join later.
      featureName = feature.toLowerCase();
      Modernizr[featureName] = tests[feature]();

      classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
    }
  }

  /*>>webforms*/
  // input tests need to run.
  Modernizr.input || webforms();
  /*>>webforms*/

  /**
   * addTest allows the user to define their own feature tests
   * the result will be added onto the Modernizr object,
   * as well as an appropriate className set on the html element
   *
   * @param feature - String naming the feature
   * @param test - Function returning true if feature is supported, false if not
   */
  Modernizr.addTest = function(feature, test) {
    if (typeof feature == 'object') {
      for (var key in feature) {
        if (hasOwnProp(feature, key)) {
          Modernizr.addTest(key, feature[key]);
        }
      }
    } else {

      feature = feature.toLowerCase();

      if (Modernizr[feature] !== undefined) {
        // we're going to quit if you're trying to overwrite an existing test
        // if we were to allow it, we'd do this:
        //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
        //   docElement.className = docElement.className.replace( re, '' );
        // but, no rly, stuff 'em.
        return Modernizr;
      }

      test = typeof test == 'function' ? test() : test;

      if (typeof enableClasses !== "undefined" && enableClasses) {
        docElement.className += ' ' + (test ? '' : 'no-') + feature;
      }
      Modernizr[feature] = test;

    }

    return Modernizr; // allow chaining.
  };

  // Reset modElem.cssText to nothing to reduce memory footprint.
  setCss('');
  modElem = inputElem = null;

  /*>>shiv*/
  /**
   * @preserve HTML5 Shiv prev3.7.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
   */
  ;
  (function(window, document) {
    /*jshint evil:true */
    /** version */
    var version = '3.7.0';

    /** Preset options */
    var options = window.html5 || {};

    /** Used to skip problem elements */
    var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

    /** Not all elements can be cloned in IE **/
    var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

    /** Detect whether the browser supports default html5 styles */
    var supportsHtml5Styles;

    /** Name of the expando, to work with multiple documents or to re-shiv one document */
    var expando = '_html5shiv';

    /** The id for the the documents expando */
    var expanID = 0;

    /** Cached data for each document */
    var expandoData = {};

    /** Detect whether the browser supports unknown elements */
    var supportsUnknownElements;

    (function() {
      try {
        var a = document.createElement('a');
        a.innerHTML = '<xyz></xyz>';
        //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
        supportsHtml5Styles = ('hidden' in a);

        supportsUnknownElements = a.childNodes.length == 1 || (function() {
              // assign a false positive if unable to shiv
              (document.createElement)('a');
              var frag = document.createDocumentFragment();
              return (
                  typeof frag.cloneNode == 'undefined' ||
                  typeof frag.createDocumentFragment == 'undefined' ||
                  typeof frag.createElement == 'undefined'
              );
            }());
      } catch (e) {
        // assign a false positive if detection fails => unable to shiv
        supportsHtml5Styles = true;
        supportsUnknownElements = true;
      }

    }());

    /*--------------------------------------------------------------------------*/

    /**
     * Creates a style sheet with the given CSS text and adds it to the document.
     * @private
     * @param {Document} ownerDocument The document.
     * @param {String} cssText The CSS text.
     * @returns {StyleSheet} The style element.
     */
    function addStyleSheet(ownerDocument, cssText) {
      var p = ownerDocument.createElement('p'),
          parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

      p.innerHTML = 'x<style>' + cssText + '</style>';
      return parent.insertBefore(p.lastChild, parent.firstChild);
    }

    /**
     * Returns the value of `html5.elements` as an array.
     * @private
     * @returns {Array} An array of shived element node names.
     */
    function getElements() {
      var elements = html5.elements;
      return typeof elements == 'string' ? elements.split(' ') : elements;
    }

    /**
     * Returns the data associated to the given document
     * @private
     * @param {Document} ownerDocument The document.
     * @returns {Object} An object of data.
     */
    function getExpandoData(ownerDocument) {
      var data = expandoData[ownerDocument[expando]];
      if (!data) {
        data = {};
        expanID++;
        ownerDocument[expando] = expanID;
        expandoData[expanID] = data;
      }
      return data;
    }

    /**
     * returns a shived element for the given nodeName and document
     * @memberOf html5
     * @param {String} nodeName name of the element
     * @param {Document} ownerDocument The context document.
     * @returns {Object} The shived element.
     */
    function createElement(nodeName, ownerDocument, data) {
      if (!ownerDocument) {
        ownerDocument = document;
      }
      if (supportsUnknownElements) {
        return ownerDocument.createElement(nodeName);
      }
      if (!data) {
        data = getExpandoData(ownerDocument);
      }
      var node;

      if (data.cache[nodeName]) {
        node = data.cache[nodeName].cloneNode();
      } else if (saveClones.test(nodeName)) {
        node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
      } else {
        node = data.createElem(nodeName);
      }

      // Avoid adding some elements to fragments in IE < 9 because
      // * Attributes like `name` or `type` cannot be set/changed once an element
      //   is inserted into a document/fragment
      // * Link elements with `src` attributes that are inaccessible, as with
      //   a 403 response, will cause the tab/window to crash
      // * Script elements appended to fragments will execute when their `src`
      //   or `text` property is set
      return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ?
          data.frag.appendChild(node) :
          node;
    }

    /**
     * returns a shived DocumentFragment for the given document
     * @memberOf html5
     * @param {Document} ownerDocument The context document.
     * @returns {Object} The shived DocumentFragment.
     */
    function createDocumentFragment(ownerDocument, data) {
      if (!ownerDocument) {
        ownerDocument = document;
      }
      if (supportsUnknownElements) {
        return ownerDocument.createDocumentFragment();
      }
      data = data || getExpandoData(ownerDocument);
      var clone = data.frag.cloneNode(),
          i = 0,
          elems = getElements(),
          l = elems.length;
      for (; i < l; i++) {
        clone.createElement(elems[i]);
      }
      return clone;
    }

    /**
     * Shivs the `createElement` and `createDocumentFragment` methods of the document.
     * @private
     * @param {Document|DocumentFragment} ownerDocument The document.
     * @param {Object} data of the document.
     */
    function shivMethods(ownerDocument, data) {
      if (!data.cache) {
        data.cache = {};
        data.createElem = ownerDocument.createElement;
        data.createFrag = ownerDocument.createDocumentFragment;
        data.frag = data.createFrag();
      }

      ownerDocument.createElement = function(nodeName) {
        //abort shiv
        if (!html5.shivMethods) {
          return data.createElem(nodeName);
        }
        return createElement(nodeName, ownerDocument, data);
      };

      ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
          'var n=f.cloneNode(),c=n.createElement;' +
          'h.shivMethods&&(' +
            // unroll the `createElement` calls
          getElements().join().replace(/[\w\-]+/g, function(nodeName) {
            data.createElem(nodeName);
            data.frag.createElement(nodeName);
            return 'c("' + nodeName + '")';
          }) +
          ');return n}'
      )(html5, data.frag);
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Shivs the given document.
     * @memberOf html5
     * @param {Document} ownerDocument The document to shiv.
     * @returns {Document} The shived document.
     */
    function shivDocument(ownerDocument) {
      if (!ownerDocument) {
        ownerDocument = document;
      }
      var data = getExpandoData(ownerDocument);

      if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
        data.hasCSS = !!addStyleSheet(ownerDocument,
            // corrects block display not defined in IE6/7/8/9
            'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
              // adds styling not present in IE6/7/8/9
            'mark{background:#FF0;color:#000}' +
              // hides non-rendered elements
            'template{display:none}'
        );
      }
      if (!supportsUnknownElements) {
        shivMethods(ownerDocument, data);
      }
      return ownerDocument;
    }

    /*--------------------------------------------------------------------------*/

    /**
     * The `html5` object is exposed so that more elements can be shived and
     * existing shiving can be detected on iframes.
     * @type Object
     * @example
     *
     * // options can be changed before the script is included
     * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
     */
    var html5 = {

      /**
       * An array or space separated string of node names of the elements to shiv.
       * @memberOf html5
       * @type Array|String
       */
      'elements': options.elements ||
      'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

      /**
       * current version of html5shiv
       */
      'version': version,

      /**
       * A flag to indicate that the HTML5 style sheet should be inserted.
       * @memberOf html5
       * @type Boolean
       */
      'shivCSS': (options.shivCSS !== false),

      /**
       * Is equal to true if a browser supports creating unknown/HTML5 elements
       * @memberOf html5
       * @type boolean
       */
      'supportsUnknownElements': supportsUnknownElements,

      /**
       * A flag to indicate that the document's `createElement` and `createDocumentFragment`
       * methods should be overwritten.
       * @memberOf html5
       * @type Boolean
       */
      'shivMethods': (options.shivMethods !== false),

      /**
       * A string to describe the type of `html5` object ("default" or "default print").
       * @memberOf html5
       * @type String
       */
      'type': 'default',

      // shivs the document according to the specified `html5` object options
      'shivDocument': shivDocument,

      //creates a shived element
      createElement: createElement,

      //creates a shived documentFragment
      createDocumentFragment: createDocumentFragment
    };

    /*--------------------------------------------------------------------------*/

    // expose html5
    window.html5 = html5;

    // shiv the document
    shivDocument(document);

  }(this, document));
  /*>>shiv*/

  // Assign private properties to the return object with prefix
  Modernizr._version = version;

  // expose these for the plugin API. Look in the source for how to join() them against your input
  /*>>prefixes*/
  Modernizr._prefixes = prefixes;
  /*>>prefixes*/
  /*>>domprefixes*/
  Modernizr._domPrefixes = domPrefixes;
  Modernizr._cssomPrefixes = cssomPrefixes;
  /*>>domprefixes*/

  /*>>mq*/
  // Modernizr.mq tests a given media query, live against the current state of the window
  // A few important notes:
  //   * If a browser does not support media queries at all (eg. oldIE) the mq() will always return false
  //   * A max-width or orientation query will be evaluated against the current state, which may change later.
  //   * You must specify values. Eg. If you are testing support for the min-width media query use:
  //       Modernizr.mq('(min-width:0)')
  // usage:
  // Modernizr.mq('only screen and (max-width:768)')
  Modernizr.mq = testMediaQuery;
  /*>>mq*/

  /*>>hasevent*/
  // Modernizr.hasEvent() detects support for a given event, with an optional element to test on
  // Modernizr.hasEvent('gesturestart', elem)
  Modernizr.hasEvent = isEventSupported;
  /*>>hasevent*/

  /*>>testprop*/
  // Modernizr.testProp() investigates whether a given style property is recognized
  // Note that the property names must be provided in the camelCase variant.
  // Modernizr.testProp('pointerEvents')
  Modernizr.testProp = function(prop) {
    return testProps([prop]);
  };
  /*>>testprop*/

  /*>>testallprops*/
  // Modernizr.testAllProps() investigates whether a given style property,
  //   or any of its vendor-prefixed variants, is recognized
  // Note that the property names must be provided in the camelCase variant.
  // Modernizr.testAllProps('boxSizing')
  Modernizr.testAllProps = testPropsAll;
  /*>>testallprops*/

  /*>>teststyles*/
  // Modernizr.testStyles() allows you to add custom styles to the document and test an element afterwards
  // Modernizr.testStyles('#modernizr { position:absolute }', function(elem, rule){ ... })
  Modernizr.testStyles = injectElementWithStyles;
  /*>>teststyles*/

  /*>>prefixed*/
  // Modernizr.prefixed() returns the prefixed or nonprefixed property name variant of your input
  // Modernizr.prefixed('boxSizing') // 'MozBoxSizing'

  // Properties must be passed as dom-style camelcase, rather than `box-sizing` hypentated style.
  // Return values will also be the camelCase variant, if you need to translate that to hypenated style use:
  //
  //     str.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');

  // If you're trying to ascertain which transition end event to bind to, you might do something like...
  //
  //     var transEndEventNames = {
  //       'WebkitTransition' : 'webkitTransitionEnd',
  //       'MozTransition'    : 'transitionend',
  //       'OTransition'      : 'oTransitionEnd',
  //       'msTransition'     : 'MSTransitionEnd',
  //       'transition'       : 'transitionend'
  //     },
  //     transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

  Modernizr.prefixed = function(prop, obj, elem) {
    if (!obj) {
      return testPropsAll(prop, 'pfx');
    } else {
      // Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'
      return testPropsAll(prop, obj, elem);
    }
  };
  /*>>prefixed*/

  /*>>cssclasses*/
  // Remove "no-js" class from <html> element, if it exists:
  docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

        // Add the new classes to the <html> element.
      (enableClasses ? ' js ' + classes.join(' ') : '');
  /*>>cssclasses*/

  return Modernizr;

})(this, this.document);

!function(t) {
  var e, a;
  return a = "undefined" != typeof window && null !== window ?
      window :
      global, a.BarRating = e = function() {
    function e() {
      var e = this, a = function() {
        var a = [e.options.wrapperClass];
        "" !== e.options.theme && a.push("br-theme-" + e.options.theme), e.$elem.wrap(
            t("<div />", {"class": a.join(" ")}))
      }, n = function() {
        e.$elem.unwrap()
      }, r = function() {
        var a;
        return a = e.options.initialRating ?
            t('option[value="' + e.options.initialRating + '"]', e.$elem) :
            t("option:selected", e.$elem)
      }, i = function() {
        var t = r();
        e.$elem.data("barrating", {
          userOptions: e.options,
          currentRatingValue: t.val(),
          currentRatingText: t.data("html") ? t.data("html") : t.text(),
          originalRatingValue: t.val(),
          originalRatingText: t.data("html") ? t.data("html") : t.text()
        }), e.$elem.data("barrating").deselectable = e.$elem.find("option:first").val() ? !1 : !0
      }, s = function() {
        e.$elem.removeData("barrating")
      }, l = function() {
        var a = t("<div />", {"class": "br-widget"});
        return e.$elem.find("option").each(function() {
          var n, r, i, s, l;
          n = t(this).val(), n &&
          (r = t(this).text(), i = t(this).data("html"), i && (r = i), s = t("<a />",
              {href: "#", "data-rating-value": n, "data-rating-text": r}), l = t("<span />",
              {html: e.options.showValues ? r : ""}), a.append(s.append(l)))
        }), e.options.showSelectedRating &&
        a.append(t("<div />", {text: "", "class": "br-current-rating"})), e.options.reverse &&
        a.addClass("br-reverse"), e.options.readonly && a.addClass("br-readonly"), a
      }, o = function() {
        return e.options.reverse ? "nextAll" : "prevAll"
      }, u = function(t) {
        e.$elem.find('option[value="' + t + '"]').prop("selected", !0), e.$elem.change()
      }, d = function(t) {
        t = t ? t : e.$elem.data("barrating").currentRatingText, e.options.showSelectedRating &&
        e.$elem.parent().find(".br-current-rating").text(t)
      }, c = function(t) {
        t.find("a").removeClass("br-selected br-current"), t.find(
                'a[data-rating-value="' + e.$elem.data("barrating").currentRatingValue + '"]')
            .addClass("br-selected br-current")[o()]().addClass("br-selected")
      }, g = function(a) {
        a.on("click", function(n) {
          var r, i, s = t(this);
          return n.preventDefault(), a.removeClass("br-active br-selected"), s.addClass(
              "br-selected")[o()]().addClass("br-selected"), r = s.attr(
              "data-rating-value"), i = s.attr("data-rating-text"), s.hasClass("br-current") &&
          e.$elem.data("barrating").deselectable ?
              (s.removeClass("br-selected br-current")[o()]()
                  .removeClass("br-selected br-current"), r = "", i = "") :
              (a.removeClass("br-current"), s.addClass("br-current")), e.$elem.data(
              "barrating").currentRatingValue = r, e.$elem.data(
              "barrating").currentRatingText = i, u(r), d(i), e.options.onSelect.call(this,
              e.$elem.data("barrating").currentRatingValue,
              e.$elem.data("barrating").currentRatingText), !1
        })
      }, h = function(e) {
        e.on({
          mouseenter: function() {
            var a = t(this);
            e.removeClass("br-active br-selected"), a.addClass("br-active")[o()]()
                .addClass("br-active"), d(a.attr("data-rating-text"))
          }
        })
      }, b = function(t, e) {
        e.on({
          mouseleave: function() {
            t.removeClass("br-active"), d(), c(e)
          }
        })
      }, f = function(e) {
        e.on("touchstart", function(e) {
          e.preventDefault(), e.stopPropagation(), t(this).click()
        })
      }, m = function(t) {
        t.on("click", function(t) {
          t.preventDefault()
        })
      };
      this.show = function() {
        var t, n;
        e.$elem.data("barrating") ||
        (a(), i(), t = l(), t.insertAfter(e.$elem), c(t), d(), n = t.find(
            "a"), e.options.fastClicks && f(n), e.options.readonly ?
            m(n) :
            (g(n), h(n), b(n, t)), e.$elem.hide())
      }, this.set = function(t) {
        this.$elem.find('option[value="' + t + '"]').val() &&
        (this.$elem.data("barrating").currentRatingValue = t, this.$elem.data(
            "barrating").currentRatingText = this.$elem.find('option[value="' + t + '"]').text(), u(
            this.$elem.data("barrating").currentRatingValue), d(
            this.$elem.data("barrating").currentRatingText), c(this.$widget), this.$elem.data(
            "barrating")
            .userOptions
            .onSelect
            .call(this, this.$elem.data("barrating").currentRatingValue,
                this.$elem.data("barrating").currentRatingText))
      }, this.clear = function() {
        this.$elem.data("barrating").currentRatingValue = this.$elem.data(
            "barrating").originalRatingValue, this.$elem.data(
            "barrating").currentRatingText = this.$elem.data("barrating").originalRatingText, u(
            this.$elem.data("barrating").currentRatingValue), d(
            this.$elem.data("barrating").currentRatingText), c(this.$widget), this.$elem.data(
            "barrating")
            .userOptions
            .onClear
            .call(this, this.$elem.data("barrating").currentRatingValue,
                this.$elem.data("barrating").currentRatingText)
      }, this.destroy = function() {
        var t = this.$elem.data("barrating").currentRatingValue, e = this.$elem.data(
            "barrating").currentRatingText, a = this.$elem.data("barrating").userOptions;
        this.$widget.off().remove(), s(), n(), this.$elem.show(), a.onDestroy.call(this, t, e)
      }
    }

    return e.prototype.init = function(e, a) {
      return this.$elem = t(a), this.options = t.extend({}, t.fn.barrating.defaults,
          e), this.options
    }, e
  }(), t.fn.barrating = function(a, n) {
    return this.each(function() {
      var r = new e;
      if (t(this).is("select") ||
          t.error("Sorry, this plugin only works with select fields."), r.hasOwnProperty(a)) {
        if (r.init(n, this), "show" === a)return r.show(n);
        if (r.$elem.data("barrating"))return r.$widget = t(this).next(".br-widget"), r[a](n)
      } else {
        if ("object" == typeof a || !a)return n = a, r.init(n, this), r.show();
        t.error("Method " + a + " does not exist on jQuery.barrating")
      }
    })
  }, t.fn.barrating.defaults = {
    theme: "",
    initialRating: null,
    showValues: !1,
    showSelectedRating: !0,
    reverse: !1,
    readonly: !1,
    fastClicks: !0,
    wrapperClass: "br-wrapper",
    onSelect: function(t, e) {
    },
    onClear: function(t, e) {
    },
    onDestroy: function(t, e) {
    }
  }, t.fn.barrating.defaults
}(jQuery);
//# sourceMappingURL=jquery.barrating.min.js.map
// this will send the headers on every ajax request you make via jquery...
$(function() {
  $.ajaxSetup({
    headers: {
      'X-CSRF-Token': parent.$('meta[name="csrf-token"]').attr('content')
    }
  });
});

function handleAjaxRequests(route, data, type) {
  return $.ajax({
    url: route,
    data: data,
    dataType: 'json',
    type: type,
    cache: false,
    statusCode: {
      404: handler404,
      500: handler500
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(JSON.stringify(jqXHR) + ' ' + textStatus + ' ' + errorThrown);
    }
  });
}

function handler404() {
  $('#myModal').modal('show');
  $('#modalresponse')
      .html(
          '<div class="alert alert-danger alert-block"><p>The resource could not be found.</p></div>');
}

function handler500() {
  $('#myModal').modal('show');
  $('#modalresponse')
      .html(
          '<div class="alert alert-danger alert-block"><p>A problem occured. The action was not completed.<br/></p></div>');
}

function deleteResource(route, data, table) {
  handleAjaxRequests(route, data, 'DELETE').done(function(data) {
    if (data.deleted == 1) {
      $(".modal").modal('hide');
      table.ajax.reload(null, false);
    }
  });
}
//# sourceMappingURL=all.js.map
