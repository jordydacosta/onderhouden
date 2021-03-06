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
 DataTables 1.10.18
 ©2008-2018 SpryMedia Ltd - datatables.net/license
*/
(function(h){"function"===typeof define&&define.amd?define(["jquery"],function(E){return h(E,window,document)}):"object"===typeof exports?module.exports=function(E,H){E||(E=window);H||(H="undefined"!==typeof window?require("jquery"):require("jquery")(E));return h(H,E,E.document)}:h(jQuery,window,document)})(function(h,E,H,k){function Z(a){var b,c,d={};h.each(a,function(e){if((b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=e.replace(b[0],b[2].toLowerCase()),
d[c]=e,"o"===b[1]&&Z(a[e])});a._hungarianMap=d}function J(a,b,c){a._hungarianMap||Z(a);var d;h.each(b,function(e){d=a._hungarianMap[e];if(d!==k&&(c||b[d]===k))"o"===d.charAt(0)?(b[d]||(b[d]={}),h.extend(!0,b[d],b[e]),J(a[d],b[d],c)):b[d]=b[e]})}function Ca(a){var b=n.defaults.oLanguage,c=b.sDecimal;c&&Da(c);if(a){var d=a.sZeroRecords;!a.sEmptyTable&&(d&&"No data available in table"===b.sEmptyTable)&&F(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(d&&"Loading..."===b.sLoadingRecords)&&F(a,
a,"sZeroRecords","sLoadingRecords");a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&c!==a&&Da(a)}}function eb(a){A(a,"ordering","bSort");A(a,"orderMulti","bSortMulti");A(a,"orderClasses","bSortClasses");A(a,"orderCellsTop","bSortCellsTop");A(a,"order","aaSorting");A(a,"orderFixed","aaSortingFixed");A(a,"paging","bPaginate");A(a,"pagingType","sPaginationType");A(a,"pageLength","iDisplayLength");A(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":
"");"boolean"===typeof a.scrollX&&(a.scrollX=a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&J(n.models.oSearch,a[b])}function fb(a){A(a,"orderable","bSortable");A(a,"orderData","aDataSort");A(a,"orderSequence","asSorting");A(a,"orderDataType","sortDataType");var b=a.aDataSort;"number"===typeof b&&!h.isArray(b)&&(a.aDataSort=[b])}function gb(a){if(!n.__browser){var b={};n.__browser=b;var c=h("<div/>").css({position:"fixed",top:0,left:-1*h(E).scrollLeft(),height:1,width:1,
overflow:"hidden"}).append(h("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(h("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}h.extend(a.oBrowser,n.__browser);a.oScroll.iBarWidth=n.__browser.barWidth}
function hb(a,b,c,d,e,f){var g,j=!1;c!==k&&(g=c,j=!0);for(;d!==e;)a.hasOwnProperty(d)&&(g=j?b(g,a[d],d,a):a[d],j=!0,d+=f);return g}function Ea(a,b){var c=n.defaults.column,d=a.aoColumns.length,c=h.extend({},n.models.oColumn,c,{nTh:b?b:H.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=h.extend({},n.models.oSearch,c[d]);ka(a,d,h(b).data())}function ka(a,b,c){var b=a.aoColumns[b],
d=a.oClasses,e=h(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=e.attr("width")||null;var f=(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);f&&(b.sWidthOrig=f[1])}c!==k&&null!==c&&(fb(c),J(n.defaults.column,c),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),c.sClass&&e.addClass(c.sClass),h.extend(b,c),F(b,c,"sWidth","sWidthOrig"),c.iDataSort!==k&&(b.aDataSort=[c.iDataSort]),F(b,c,"aDataSort"));var g=b.mData,j=S(g),i=b.mRender?
S(b.mRender):null,c=function(a){return"string"===typeof a&&-1!==a.indexOf("@")};b._bAttrSrc=h.isPlainObject(g)&&(c(g.sort)||c(g.type)||c(g.filter));b._setter=null;b.fnGetData=function(a,b,c){var d=j(a,b,k,c);return i&&b?i(d,b,a,c):d};b.fnSetData=function(a,b,c){return N(g)(a,b,c)};"number"!==typeof g&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==h.inArray("asc",b.asSorting);c=-1!==h.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?(b.sSortingClass=d.sSortableNone,
b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI)}function $(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Fa(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&la(a);r(a,null,"column-sizing",[a])}function aa(a,b){var c=ma(a,"bVisible");return"number"===
typeof c[b]?c[b]:null}function ba(a,b){var c=ma(a,"bVisible"),c=h.inArray(b,c);return-1!==c?c:null}function V(a){var b=0;h.each(a.aoColumns,function(a,d){d.bVisible&&"none"!==h(d.nTh).css("display")&&b++});return b}function ma(a,b){var c=[];h.map(a.aoColumns,function(a,e){a[b]&&c.push(e)});return c}function Ga(a){var b=a.aoColumns,c=a.aoData,d=n.ext.type.detect,e,f,g,j,i,h,l,q,t;e=0;for(f=b.length;e<f;e++)if(l=b[e],t=[],!l.sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){g=0;for(j=d.length;g<
j;g++){i=0;for(h=c.length;i<h;i++){t[i]===k&&(t[i]=B(a,i,e,"type"));q=d[g](t[i],a);if(!q&&g!==d.length-1)break;if("html"===q)break}if(q){l.sType=q;break}}l.sType||(l.sType="string")}}function ib(a,b,c,d){var e,f,g,j,i,m,l=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){m=b[e];var q=m.targets!==k?m.targets:m.aTargets;h.isArray(q)||(q=[q]);f=0;for(g=q.length;f<g;f++)if("number"===typeof q[f]&&0<=q[f]){for(;l.length<=q[f];)Ea(a);d(q[f],m)}else if("number"===typeof q[f]&&0>q[f])d(l.length+q[f],m);else if("string"===
typeof q[f]){j=0;for(i=l.length;j<i;j++)("_all"==q[f]||h(l[j].nTh).hasClass(q[f]))&&d(j,m)}}if(c){e=0;for(a=c.length;e<a;e++)d(e,c[e])}}function O(a,b,c,d){var e=a.aoData.length,f=h.extend(!0,{},n.models.oRow,{src:c?"dom":"data",idx:e});f._aData=b;a.aoData.push(f);for(var g=a.aoColumns,j=0,i=g.length;j<i;j++)g[j].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==k&&(a.aIds[b]=f);(c||!a.oFeatures.bDeferRender)&&Ha(a,e,c,d);return e}function na(a,b){var c;b instanceof h||(b=h(b));return b.map(function(b,
e){c=Ia(a,e);return O(a,c.data,e,c.cells)})}function B(a,b,c,d){var e=a.iDraw,f=a.aoColumns[c],g=a.aoData[b]._aData,j=f.sDefaultContent,i=f.fnGetData(g,d,{settings:a,row:b,col:c});if(i===k)return a.iDrawError!=e&&null===j&&(K(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=e),j;if((i===g||null===i)&&null!==j&&d!==k)i=j;else if("function"===typeof i)return i.call(g);return null===i&&"display"==d?"":i}function jb(a,
b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d,{settings:a,row:b,col:c})}function Ja(a){return h.map(a.match(/(\\.|[^\.])+/g)||[""],function(a){return a.replace(/\\\./g,".")})}function S(a){if(h.isPlainObject(a)){var b={};h.each(a,function(a,c){c&&(b[a]=S(c))});return function(a,c,f,g){var j=b[c]||b._;return j!==k?j(a,c,f,g):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,c,f,g){return a(b,c,f,g)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||
-1!==a.indexOf("("))){var c=function(a,b,f){var g,j;if(""!==f){j=Ja(f);for(var i=0,m=j.length;i<m;i++){f=j[i].match(ca);g=j[i].match(W);if(f){j[i]=j[i].replace(ca,"");""!==j[i]&&(a=a[j[i]]);g=[];j.splice(0,i+1);j=j.join(".");if(h.isArray(a)){i=0;for(m=a.length;i<m;i++)g.push(c(a[i],b,j))}a=f[0].substring(1,f[0].length-1);a=""===a?g:g.join(a);break}else if(g){j[i]=j[i].replace(W,"");a=a[j[i]]();continue}if(null===a||a[j[i]]===k)return k;a=a[j[i]]}}return a};return function(b,e){return c(b,e,a)}}return function(b){return b[a]}}
function N(a){if(h.isPlainObject(a))return N(a._);if(null===a)return function(){};if("function"===typeof a)return function(b,d,e){a(b,"set",d,e)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function(a,d,e){var e=Ja(e),f;f=e[e.length-1];for(var g,j,i=0,m=e.length-1;i<m;i++){g=e[i].match(ca);j=e[i].match(W);if(g){e[i]=e[i].replace(ca,"");a[e[i]]=[];f=e.slice();f.splice(0,i+1);g=f.join(".");if(h.isArray(d)){j=0;for(m=d.length;j<m;j++)f={},b(f,d[j],g),
a[e[i]].push(f)}else a[e[i]]=d;return}j&&(e[i]=e[i].replace(W,""),a=a[e[i]](d));if(null===a[e[i]]||a[e[i]]===k)a[e[i]]={};a=a[e[i]]}if(f.match(W))a[f.replace(W,"")](d);else a[f.replace(ca,"")]=d};return function(c,d){return b(c,d,a)}}return function(b,d){b[a]=d}}function Ka(a){return D(a.aoData,"_aData")}function oa(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={}}function pa(a,b,c){for(var d=-1,e=0,f=a.length;e<f;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===k&&a.splice(d,
1)}function da(a,b,c,d){var e=a.aoData[b],f,g=function(c,d){for(;c.childNodes.length;)c.removeChild(c.firstChild);c.innerHTML=B(a,b,d,"display")};if("dom"===c||(!c||"auto"===c)&&"dom"===e.src)e._aData=Ia(a,e,d,d===k?k:e._aData).data;else{var j=e.anCells;if(j)if(d!==k)g(j[d],d);else{c=0;for(f=j.length;c<f;c++)g(j[c],c)}}e._aSortData=null;e._aFilterData=null;g=a.aoColumns;if(d!==k)g[d].sType=null;else{c=0;for(f=g.length;c<f;c++)g[c].sType=null;La(a,e)}}function Ia(a,b,c,d){var e=[],f=b.firstChild,g,
j,i=0,m,l=a.aoColumns,q=a._rowReadObject,d=d!==k?d:q?{}:[],t=function(a,b){if("string"===typeof a){var c=a.indexOf("@");-1!==c&&(c=a.substring(c+1),N(a)(d,b.getAttribute(c)))}},G=function(a){if(c===k||c===i)j=l[i],m=h.trim(a.innerHTML),j&&j._bAttrSrc?(N(j.mData._)(d,m),t(j.mData.sort,a),t(j.mData.type,a),t(j.mData.filter,a)):q?(j._setter||(j._setter=N(j.mData)),j._setter(d,m)):d[i]=m;i++};if(f)for(;f;){g=f.nodeName.toUpperCase();if("TD"==g||"TH"==g)G(f),e.push(f);f=f.nextSibling}else{e=b.anCells;
f=0;for(g=e.length;f<g;f++)G(e[f])}if(b=b.firstChild?b:b.nTr)(b=b.getAttribute("id"))&&N(a.rowId)(d,b);return{data:d,cells:e}}function Ha(a,b,c,d){var e=a.aoData[b],f=e._aData,g=[],j,i,m,l,q;if(null===e.nTr){j=c||H.createElement("tr");e.nTr=j;e.anCells=g;j._DT_RowIndex=b;La(a,e);l=0;for(q=a.aoColumns.length;l<q;l++){m=a.aoColumns[l];i=c?d[l]:H.createElement(m.sCellType);i._DT_CellIndex={row:b,column:l};g.push(i);if((!c||m.mRender||m.mData!==l)&&(!h.isPlainObject(m.mData)||m.mData._!==l+".display"))i.innerHTML=
B(a,b,l,"display");m.sClass&&(i.className+=" "+m.sClass);m.bVisible&&!c?j.appendChild(i):!m.bVisible&&c&&i.parentNode.removeChild(i);m.fnCreatedCell&&m.fnCreatedCell.call(a.oInstance,i,B(a,b,l),f,b,l)}r(a,"aoRowCreatedCallback",null,[j,f,b,g])}e.nTr.setAttribute("role","row")}function La(a,b){var c=b.nTr,d=b._aData;if(c){var e=a.rowIdFn(d);e&&(c.id=e);d.DT_RowClass&&(e=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?qa(b.__rowc.concat(e)):e,h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
d.DT_RowAttr&&h(c).attr(d.DT_RowAttr);d.DT_RowData&&h(c).data(d.DT_RowData)}}function kb(a){var b,c,d,e,f,g=a.nTHead,j=a.nTFoot,i=0===h("th, td",g).length,m=a.oClasses,l=a.aoColumns;i&&(e=h("<tr/>").appendTo(g));b=0;for(c=l.length;b<c;b++)f=l[b],d=h(f.nTh).addClass(f.sClass),i&&d.appendTo(e),a.oFeatures.bSort&&(d.addClass(f.sSortingClass),!1!==f.bSortable&&(d.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Ma(a,f.nTh,b))),f.sTitle!=d[0].innerHTML&&d.html(f.sTitle),Na(a,"header")(a,d,
f,m);i&&ea(a.aoHeader,g);h(g).find(">tr").attr("role","row");h(g).find(">tr>th, >tr>td").addClass(m.sHeaderTH);h(j).find(">tr>th, >tr>td").addClass(m.sFooterTH);if(null!==j){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++)f=l[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass)}}function fa(a,b,c){var d,e,f,g=[],j=[],i=a.aoColumns.length,m;if(b){c===k&&(c=!1);d=0;for(e=b.length;d<e;d++){g[d]=b[d].slice();g[d].nTr=b[d].nTr;for(f=i-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&g[d].splice(f,1);j.push([])}d=
0;for(e=g.length;d<e;d++){if(a=g[d].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=g[d].length;f<b;f++)if(m=i=1,j[d][f]===k){a.appendChild(g[d][f].cell);for(j[d][f]=1;g[d+i]!==k&&g[d][f].cell==g[d+i][f].cell;)j[d+i][f]=1,i++;for(;g[d][f+m]!==k&&g[d][f].cell==g[d][f+m].cell;){for(c=0;c<i;c++)j[d+c][f+m]=1;m++}h(g[d][f].cell).attr("rowspan",i).attr("colspan",m)}}}}function P(a){var b=r(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==h.inArray(!1,b))C(a,!1);else{var b=[],c=0,d=a.asStripeClasses,e=
d.length,f=a.oLanguage,g=a.iInitDisplayStart,j="ssp"==y(a),i=a.aiDisplay;a.bDrawing=!0;g!==k&&-1!==g&&(a._iDisplayStart=j?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=-1);var g=a._iDisplayStart,m=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);else if(j){if(!a.bDestroying&&!lb(a))return}else a.iDraw++;if(0!==i.length){f=j?a.aoData.length:m;for(j=j?0:g;j<f;j++){var l=i[j],q=a.aoData[l];null===q.nTr&&Ha(a,l);var t=q.nTr;if(0!==e){var G=d[c%e];q._sRowStripe!=G&&(h(t).removeClass(q._sRowStripe).addClass(G),
q._sRowStripe=G)}r(a,"aoRowCallback",null,[t,q._aData,c,j,l]);b.push(t);c++}}else c=f.sZeroRecords,1==a.iDraw&&"ajax"==y(a)?c=f.sLoadingRecords:f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=h("<tr/>",{"class":e?d[0]:""}).append(h("<td />",{valign:"top",colSpan:V(a),"class":a.oClasses.sRowEmpty}).html(c))[0];r(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],Ka(a),g,m,i]);r(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],Ka(a),g,m,i]);d=h(a.nTBody);d.children().detach();
d.append(h(b));r(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function T(a,b){var c=a.oFeatures,d=c.bFilter;c.bSort&&mb(a);d?ga(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;P(a);a._drawHold=!1}function nb(a){var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),d=a.oFeatures,e=h("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=
a.nTable.nextSibling;for(var f=a.sDom.split(""),g,j,i,m,l,q,k=0;k<f.length;k++){g=null;j=f[k];if("<"==j){i=h("<div/>")[0];m=f[k+1];if("'"==m||'"'==m){l="";for(q=2;f[k+q]!=m;)l+=f[k+q],q++;"H"==l?l=b.sJUIHeader:"F"==l&&(l=b.sJUIFooter);-1!=l.indexOf(".")?(m=l.split("."),i.id=m[0].substr(1,m[0].length-1),i.className=m[1]):"#"==l.charAt(0)?i.id=l.substr(1,l.length-1):i.className=l;k+=q}e.append(i);e=h(i)}else if(">"==j)e=e.parent();else if("l"==j&&d.bPaginate&&d.bLengthChange)g=ob(a);else if("f"==j&&
d.bFilter)g=pb(a);else if("r"==j&&d.bProcessing)g=qb(a);else if("t"==j)g=rb(a);else if("i"==j&&d.bInfo)g=sb(a);else if("p"==j&&d.bPaginate)g=tb(a);else if(0!==n.ext.feature.length){i=n.ext.feature;q=0;for(m=i.length;q<m;q++)if(j==i[q].cFeature){g=i[q].fnInit(a);break}}g&&(i=a.aanFeatures,i[j]||(i[j]=[]),i[j].push(g),e.append(g))}c.replaceWith(e);a.nHolding=null}function ea(a,b){var c=h(b).children("tr"),d,e,f,g,j,i,m,l,q,k;a.splice(0,a.length);f=0;for(i=c.length;f<i;f++)a.push([]);f=0;for(i=c.length;f<
i;f++){d=c[f];for(e=d.firstChild;e;){if("TD"==e.nodeName.toUpperCase()||"TH"==e.nodeName.toUpperCase()){l=1*e.getAttribute("colspan");q=1*e.getAttribute("rowspan");l=!l||0===l||1===l?1:l;q=!q||0===q||1===q?1:q;g=0;for(j=a[f];j[g];)g++;m=g;k=1===l?!0:!1;for(j=0;j<l;j++)for(g=0;g<q;g++)a[f+g][m+j]={cell:e,unique:k},a[f+g].nTr=d}e=e.nextSibling}}}function ra(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],ea(c,b)));for(var b=0,e=c.length;b<e;b++)for(var f=0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!d[f]||
!a.bSortCellsTop))d[f]=c[b][f].cell;return d}function sa(a,b,c){r(a,"aoServerParams","serverParams",[b]);if(b&&h.isArray(b)){var d={},e=/(.*?)\[\]$/;h.each(b,function(a,b){var c=b.name.match(e);c?(c=c[0],d[c]||(d[c]=[]),d[c].push(b.value)):d[b.name]=b.value});b=d}var f,g=a.ajax,j=a.oInstance,i=function(b){r(a,null,"xhr",[a,b,a.jqXHR]);c(b)};if(h.isPlainObject(g)&&g.data){f=g.data;var m="function"===typeof f?f(b,a):f,b="function"===typeof f&&m?m:h.extend(!0,b,m);delete g.data}m={data:b,success:function(b){var c=
b.error||b.sError;c&&K(a,0,c);a.json=b;i(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,c){var d=r(a,null,"xhr",[a,null,a.jqXHR]);-1===h.inArray(!0,d)&&("parsererror"==c?K(a,0,"Invalid JSON response",1):4===b.readyState&&K(a,0,"Ajax error",7));C(a,!1)}};a.oAjaxData=b;r(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(j,a.sAjaxSource,h.map(b,function(a,b){return{name:b,value:a}}),i,a):a.sAjaxSource||"string"===typeof g?a.jqXHR=h.ajax(h.extend(m,{url:g||a.sAjaxSource})):
"function"===typeof g?a.jqXHR=g.call(j,b,i,a):(a.jqXHR=h.ajax(h.extend(m,g)),g.data=f)}function lb(a){return a.bAjaxDataGet?(a.iDraw++,C(a,!0),sa(a,ub(a),function(b){vb(a,b)}),!1):!0}function ub(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,f=a.aoPreSearchCols,g,j=[],i,m,l,k=X(a);g=a._iDisplayStart;i=!1!==d.bPaginate?a._iDisplayLength:-1;var t=function(a,b){j.push({name:a,value:b})};t("sEcho",a.iDraw);t("iColumns",c);t("sColumns",D(b,"sName").join(","));t("iDisplayStart",g);t("iDisplayLength",
i);var G={draw:a.iDraw,columns:[],order:[],start:g,length:i,search:{value:e.sSearch,regex:e.bRegex}};for(g=0;g<c;g++)m=b[g],l=f[g],i="function"==typeof m.mData?"function":m.mData,G.columns.push({data:i,name:m.sName,searchable:m.bSearchable,orderable:m.bSortable,search:{value:l.sSearch,regex:l.bRegex}}),t("mDataProp_"+g,i),d.bFilter&&(t("sSearch_"+g,l.sSearch),t("bRegex_"+g,l.bRegex),t("bSearchable_"+g,m.bSearchable)),d.bSort&&t("bSortable_"+g,m.bSortable);d.bFilter&&(t("sSearch",e.sSearch),t("bRegex",
e.bRegex));d.bSort&&(h.each(k,function(a,b){G.order.push({column:b.col,dir:b.dir});t("iSortCol_"+a,b.col);t("sSortDir_"+a,b.dir)}),t("iSortingCols",k.length));b=n.ext.legacy.ajax;return null===b?a.sAjaxSource?j:G:b?j:G}function vb(a,b){var c=ta(a,b),d=b.sEcho!==k?b.sEcho:b.draw,e=b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,f=b.iTotalDisplayRecords!==k?b.iTotalDisplayRecords:b.recordsFiltered;if(d){if(1*d<a.iDraw)return;a.iDraw=1*d}oa(a);a._iRecordsTotal=parseInt(e,10);a._iRecordsDisplay=parseInt(f,
10);d=0;for(e=c.length;d<e;d++)O(a,c[d]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;P(a);a._bInitComplete||ua(a,b);a.bAjaxDataGet=!0;C(a,!1)}function ta(a,b){var c=h.isPlainObject(a.ajax)&&a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||b[c]:""!==c?S(c)(b):b}function pb(a){var b=a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',j=d.sSearch,j=j.match(/_INPUT_/)?j.replace("_INPUT_",
g):j+g,b=h("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(h("<label/>").append(j)),f=function(){var b=!this.value?"":this.value;b!=e.sSearch&&(ga(a,{sSearch:b,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive}),a._iDisplayStart=0,P(a))},g=null!==a.searchDelay?a.searchDelay:"ssp"===y(a)?400:0,i=h("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",g?Oa(f,g):f).on("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",
c);h(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{i[0]!==H.activeElement&&i.val(e.sSearch)}catch(d){}});return b[0]}function ga(a,b,c){var d=a.oPreviousSearch,e=a.aoPreSearchCols,f=function(a){d.sSearch=a.sSearch;d.bRegex=a.bRegex;d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive};Ga(a);if("ssp"!=y(a)){wb(a,b.sSearch,c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);f(b);for(b=0;b<e.length;b++)xb(a,e[b].sSearch,b,e[b].bEscapeRegex!==k?!e[b].bEscapeRegex:e[b].bRegex,
e[b].bSmart,e[b].bCaseInsensitive);yb(a)}else f(b);a.bFiltered=!0;r(a,null,"search",[a])}function yb(a){for(var b=n.ext.search,c=a.aiDisplay,d,e,f=0,g=b.length;f<g;f++){for(var j=[],i=0,m=c.length;i<m;i++)e=c[i],d=a.aoData[e],b[f](a,d._aFilterData,e,d._aData,i)&&j.push(e);c.length=0;h.merge(c,j)}}function xb(a,b,c,d,e,f){if(""!==b){for(var g=[],j=a.aiDisplay,d=Pa(b,d,e,f),e=0;e<j.length;e++)b=a.aoData[j[e]]._aFilterData[c],d.test(b)&&g.push(j[e]);a.aiDisplay=g}}function wb(a,b,c,d,e,f){var d=Pa(b,
d,e,f),f=a.oPreviousSearch.sSearch,g=a.aiDisplayMaster,j,e=[];0!==n.ext.search.length&&(c=!0);j=zb(a);if(0>=b.length)a.aiDisplay=g.slice();else{if(j||c||f.length>b.length||0!==b.indexOf(f)||a.bSorted)a.aiDisplay=g.slice();b=a.aiDisplay;for(c=0;c<b.length;c++)d.test(a.aoData[b[c]]._sFilterRow)&&e.push(b[c]);a.aiDisplay=e}}function Pa(a,b,c,d){a=b?a:Qa(a);c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;return a.replace('"',
"")}).join(")(?=.*?")+").*$");return RegExp(a,d?"i":"")}function zb(a){var b=a.aoColumns,c,d,e,f,g,j,i,h,l=n.ext.type.search;c=!1;d=0;for(f=a.aoData.length;d<f;d++)if(h=a.aoData[d],!h._aFilterData){j=[];e=0;for(g=b.length;e<g;e++)c=b[e],c.bSearchable?(i=B(a,d,e,"filter"),l[c.sType]&&(i=l[c.sType](i)),null===i&&(i=""),"string"!==typeof i&&i.toString&&(i=i.toString())):i="",i.indexOf&&-1!==i.indexOf("&")&&(va.innerHTML=i,i=Wb?va.textContent:va.innerText),i.replace&&(i=i.replace(/[\r\n]/g,"")),j.push(i);
h._aFilterData=j;h._sFilterRow=j.join("  ");c=!0}return c}function Ab(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,caseInsensitive:a.bCaseInsensitive}}function Bb(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function sb(a){var b=a.sTableId,c=a.aanFeatures.i,d=h("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Cb,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",
b+"_info"));return d[0]}function Cb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+1,e=a.fnDisplayEnd(),f=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),j=g?c.sInfo:c.sInfoEmpty;g!==f&&(j+=" "+c.sInfoFiltered);j+=c.sInfoPostFix;j=Db(a,j);c=c.fnInfoCallback;null!==c&&(j=c.call(a.oInstance,a,d,e,f,g,j));h(b).html(j)}}function Db(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,f=a.fnRecordsDisplay(),g=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,
c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(d/e))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/e)))}function ha(a){var b,c,d=a.iInitDisplayStart,e=a.aoColumns,f;c=a.oFeatures;var g=a.bDeferLoading;if(a.bInitialised){nb(a);kb(a);fa(a,a.aoHeader);fa(a,a.aoFooter);C(a,!0);c.bAutoWidth&&Fa(a);b=0;for(c=e.length;b<c;b++)f=e[b],f.sWidth&&(f.nTh.style.width=v(f.sWidth));r(a,null,"preInit",[a]);T(a);e=
y(a);if("ssp"!=e||g)"ajax"==e?sa(a,[],function(c){var f=ta(a,c);for(b=0;b<f.length;b++)O(a,f[b]);a.iInitDisplayStart=d;T(a);C(a,!1);ua(a,c)},a):(C(a,!1),ua(a))}else setTimeout(function(){ha(a)},200)}function ua(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&$(a);r(a,null,"plugin-init",[a,b]);r(a,"aoInitComplete","init",[a,b])}function Ra(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Sa(a);r(a,null,"length",[a,c])}function ob(a){for(var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=h.isArray(d[0]),f=
e?d[0]:d,d=e?d[1]:d,e=h("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),g=0,j=f.length;g<j;g++)e[0][g]=new Option("number"===typeof d[g]?a.fnFormatNumber(d[g]):d[g],f[g]);var i=h("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(i[0].id=c+"_length");i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));h("select",i).val(a._iDisplayLength).on("change.DT",function(){Ra(a,h(this).val());P(a)});h(a.nTable).on("length.dt.DT",function(b,c,d){a===
c&&h("select",i).val(d)});return i[0]}function tb(a){var b=a.sPaginationType,c=n.ext.pager[b],d="function"===typeof c,e=function(a){P(a)},b=h("<div/>").addClass(a.oClasses.sPaging+b)[0],f=a.aanFeatures;d||c.fnInit(a,b,e);f.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(a){if(d){var b=a._iDisplayStart,i=a._iDisplayLength,h=a.fnRecordsDisplay(),l=-1===i,b=l?0:Math.ceil(b/i),i=l?1:Math.ceil(h/i),h=c(b,i),k,l=0;for(k=f.p.length;l<k;l++)Na(a,"pageButton")(a,f.p[l],l,h,b,i)}else c.fnUpdate(a,
e)},sName:"pagination"}));return b}function Ta(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===e?d=0:"number"===typeof b?(d=b*e,d>f&&(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==b?d+e<f&&(d+=e):"last"==b?d=Math.floor((f-1)/e)*e:K(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(r(a,null,"page",[a]),c&&P(a));return b}function qb(a){return h("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}
function C(a,b){a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display",b?"block":"none");r(a,null,"processing",[a,b])}function rb(a){var b=h(a.nTable);b.attr("role","grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,f=a.oClasses,g=b.children("caption"),j=g.length?g[0]._captionSide:null,i=h(b[0].cloneNode(!1)),m=h(b[0].cloneNode(!1)),l=b.children("tfoot");l.length||(l=null);i=h("<div/>",{"class":f.sScrollWrapper}).append(h("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",
position:"relative",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",{"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||"100%"}).append(i.removeAttr("id").css("margin-left",0).append("top"===j?g:null).append(b.children("thead"))))).append(h("<div/>",{"class":f.sScrollBody}).css({position:"relative",overflow:"auto",width:!d?null:v(d)}).append(b));l&&i.append(h("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",
{"class":f.sScrollFootInner}).append(m.removeAttr("id").css("margin-left",0).append("bottom"===j?g:null).append(b.children("tfoot")))));var b=i.children(),k=b[0],f=b[1],t=l?b[2]:null;if(d)h(f).on("scroll.DT",function(){var a=this.scrollLeft;k.scrollLeft=a;l&&(t.scrollLeft=a)});h(f).css(e&&c.bCollapse?"max-height":"height",e);a.nScrollHead=k;a.nScrollBody=f;a.nScrollFoot=t;a.aoDrawCallback.push({fn:la,sName:"scrolling"});return i[0]}function la(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY,b=b.iBarWidth,
f=h(a.nScrollHead),g=f[0].style,j=f.children("div"),i=j[0].style,m=j.children("table"),j=a.nScrollBody,l=h(j),q=j.style,t=h(a.nScrollFoot).children("div"),n=t.children("table"),o=h(a.nTHead),p=h(a.nTable),s=p[0],r=s.style,u=a.nTFoot?h(a.nTFoot):null,x=a.oBrowser,U=x.bScrollOversize,Xb=D(a.aoColumns,"nTh"),Q,L,R,w,Ua=[],y=[],z=[],A=[],B,C=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};L=j.scrollHeight>j.clientHeight;if(a.scrollBarVis!==
L&&a.scrollBarVis!==k)a.scrollBarVis=L,$(a);else{a.scrollBarVis=L;p.children("thead, tfoot").remove();u&&(R=u.clone().prependTo(p),Q=u.find("tr"),R=R.find("tr"));w=o.clone().prependTo(p);o=o.find("tr");L=w.find("tr");w.find("th, td").removeAttr("tabindex");c||(q.width="100%",f[0].style.width="100%");h.each(ra(a,w),function(b,c){B=aa(a,b);c.style.width=a.aoColumns[B].sWidth});u&&I(function(a){a.style.width=""},R);f=p.outerWidth();if(""===c){r.width="100%";if(U&&(p.find("tbody").height()>j.offsetHeight||
"scroll"==l.css("overflow-y")))r.width=v(p.outerWidth()-b);f=p.outerWidth()}else""!==d&&(r.width=v(d),f=p.outerWidth());I(C,L);I(function(a){z.push(a.innerHTML);Ua.push(v(h(a).css("width")))},L);I(function(a,b){if(h.inArray(a,Xb)!==-1)a.style.width=Ua[b]},o);h(L).height(0);u&&(I(C,R),I(function(a){A.push(a.innerHTML);y.push(v(h(a).css("width")))},R),I(function(a,b){a.style.width=y[b]},Q),h(R).height(0));I(function(a,b){a.innerHTML='<div class="dataTables_sizing">'+z[b]+"</div>";a.childNodes[0].style.height=
"0";a.childNodes[0].style.overflow="hidden";a.style.width=Ua[b]},L);u&&I(function(a,b){a.innerHTML='<div class="dataTables_sizing">'+A[b]+"</div>";a.childNodes[0].style.height="0";a.childNodes[0].style.overflow="hidden";a.style.width=y[b]},R);if(p.outerWidth()<f){Q=j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")?f+b:f;if(U&&(j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")))r.width=v(Q-b);(""===c||""!==d)&&K(a,1,"Possible column misalignment",6)}else Q="100%";q.width=v(Q);
g.width=v(Q);u&&(a.nScrollFoot.style.width=v(Q));!e&&U&&(q.height=v(s.offsetHeight+b));c=p.outerWidth();m[0].style.width=v(c);i.width=v(c);d=p.height()>j.clientHeight||"scroll"==l.css("overflow-y");e="padding"+(x.bScrollbarLeft?"Left":"Right");i[e]=d?b+"px":"0px";u&&(n[0].style.width=v(c),t[0].style.width=v(c),t[0].style[e]=d?b+"px":"0px");p.children("colgroup").insertBefore(p.children("thead"));l.scroll();if((a.bSorted||a.bFiltered)&&!a._drawHold)j.scrollTop=0}}function I(a,b,c){for(var d=0,e=0,
f=b.length,g,j;e<f;){g=b[e].firstChild;for(j=c?c[e].firstChild:null;g;)1===g.nodeType&&(c?a(g,j,d):a(g,d),d++),g=g.nextSibling,j=c?j.nextSibling:null;e++}}function Fa(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,e=d.sY,f=d.sX,g=d.sXInner,j=c.length,i=ma(a,"bVisible"),m=h("th",a.nTHead),l=b.getAttribute("width"),k=b.parentNode,t=!1,n,o,p=a.oBrowser,d=p.bScrollOversize;(n=b.style.width)&&-1!==n.indexOf("%")&&(l=n);for(n=0;n<i.length;n++)o=c[i[n]],null!==o.sWidth&&(o.sWidth=Eb(o.sWidthOrig,k),t=!0);if(d||
!t&&!f&&!e&&j==V(a)&&j==m.length)for(n=0;n<j;n++)i=aa(a,n),null!==i&&(c[i].sWidth=v(m.eq(n).width()));else{j=h(b).clone().css("visibility","hidden").removeAttr("id");j.find("tbody tr").remove();var s=h("<tr/>").appendTo(j.find("tbody"));j.find("thead, tfoot").remove();j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());j.find("tfoot th, tfoot td").css("width","");m=ra(a,j.find("thead")[0]);for(n=0;n<i.length;n++)o=c[i[n]],m[n].style.width=null!==o.sWidthOrig&&""!==o.sWidthOrig?v(o.sWidthOrig):
"",o.sWidthOrig&&f&&h(m[n]).append(h("<div/>").css({width:o.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(a.aoData.length)for(n=0;n<i.length;n++)t=i[n],o=c[t],h(Fb(a,t)).clone(!1).append(o.sContentPadding).appendTo(s);h("[name]",j).removeAttr("name");o=h("<div/>").css(f||e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(j).appendTo(k);f&&g?j.width(g):f?(j.css("width","auto"),j.removeAttr("width"),j.width()<k.clientWidth&&l&&j.width(k.clientWidth)):e?j.width(k.clientWidth):
l&&j.width(l);for(n=e=0;n<i.length;n++)k=h(m[n]),g=k.outerWidth()-k.width(),k=p.bBounding?Math.ceil(m[n].getBoundingClientRect().width):k.outerWidth(),e+=k,c[i[n]].sWidth=v(k-g);b.style.width=v(e);o.remove()}l&&(b.style.width=v(l));if((l||f)&&!a._reszEvt)b=function(){h(E).on("resize.DT-"+a.sInstance,Oa(function(){$(a)}))},d?setTimeout(b,1E3):b(),a._reszEvt=!0}function Eb(a,b){if(!a)return 0;var c=h("<div/>").css("width",v(a)).appendTo(b||H.body),d=c[0].offsetWidth;c.remove();return d}function Fb(a,
b){var c=Gb(a,b);if(0>c)return null;var d=a.aoData[c];return!d.nTr?h("<td/>").html(B(a,c,b,"display"))[0]:d.anCells[b]}function Gb(a,b){for(var c,d=-1,e=-1,f=0,g=a.aoData.length;f<g;f++)c=B(a,f,b,"display")+"",c=c.replace(Yb,""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=f);return e}function v(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function X(a){var b,c,d=[],e=a.aoColumns,f,g,j,i;b=a.aaSortingFixed;c=h.isPlainObject(b);var m=[];f=function(a){a.length&&
!h.isArray(a[0])?m.push(a):h.merge(m,a)};h.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<m.length;a++){i=m[a][0];f=e[i].aDataSort;b=0;for(c=f.length;b<c;b++)g=f[b],j=e[g].sType||"string",m[a]._idx===k&&(m[a]._idx=h.inArray(m[a][1],e[g].asSorting)),d.push({src:i,col:g,dir:m[a][1],index:m[a]._idx,type:j,formatter:n.ext.type.order[j+"-pre"]})}return d}function mb(a){var b,c,d=[],e=n.ext.type.order,f=a.aoData,g=0,j,i=a.aiDisplayMaster,h;Ga(a);h=X(a);b=0;for(c=h.length;b<
c;b++)j=h[b],j.formatter&&g++,Hb(a,j.col);if("ssp"!=y(a)&&0!==h.length){b=0;for(c=i.length;b<c;b++)d[i[b]]=b;g===h.length?i.sort(function(a,b){var c,e,g,j,i=h.length,k=f[a]._aSortData,n=f[b]._aSortData;for(g=0;g<i;g++)if(j=h[g],c=k[j.col],e=n[j.col],c=c<e?-1:c>e?1:0,0!==c)return"asc"===j.dir?c:-c;c=d[a];e=d[b];return c<e?-1:c>e?1:0}):i.sort(function(a,b){var c,g,j,i,k=h.length,n=f[a]._aSortData,o=f[b]._aSortData;for(j=0;j<k;j++)if(i=h[j],c=n[i.col],g=o[i.col],i=e[i.type+"-"+i.dir]||e["string-"+i.dir],
c=i(c,g),0!==c)return c;c=d[a];g=d[b];return c<g?-1:c>g?1:0})}a.bSorted=!0}function Ib(a){for(var b,c,d=a.aoColumns,e=X(a),a=a.oLanguage.oAria,f=0,g=d.length;f<g;f++){c=d[f];var j=c.asSorting;b=c.sTitle.replace(/<.*?>/g,"");var i=c.nTh;i.removeAttribute("aria-sort");c.bSortable&&(0<e.length&&e[0].col==f?(i.setAttribute("aria-sort","asc"==e[0].dir?"ascending":"descending"),c=j[e[0].index+1]||j[0]):c=j[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);i.setAttribute("aria-label",b)}}function Va(a,
b,c,d){var e=a.aaSorting,f=a.aoColumns[b].asSorting,g=function(a,b){var c=a._idx;c===k&&(c=h.inArray(a[1],f));return c+1<f.length?c+1:b?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=h.inArray(b,D(e,"0")),-1!==c?(b=g(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=f[b],e[c]._idx=b)):(e.push([b,f[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=g(e[0]),e.length=1,e[0][1]=f[b],e[0]._idx=b):(e.length=0,e.push([b,f[0]]),e[0]._idx=0);T(a);"function"==
typeof d&&d(a)}function Ma(a,b,c,d){var e=a.aoColumns[c];Wa(b,{},function(b){!1!==e.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){Va(a,c,b.shiftKey,d);"ssp"!==y(a)&&C(a,!1)},0)):Va(a,c,b.shiftKey,d))})}function wa(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=X(a),e=a.oFeatures,f,g;if(e.bSort&&e.bSortClasses){e=0;for(f=b.length;e<f;e++)g=b[e].src,h(D(a.aoData,"anCells",g)).removeClass(c+(2>e?e+1:3));e=0;for(f=d.length;e<f;e++)g=d[e].src,h(D(a.aoData,"anCells",g)).addClass(c+
(2>e?e+1:3))}a.aLastSort=d}function Hb(a,b){var c=a.aoColumns[b],d=n.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,ba(a,b)));for(var f,g=n.ext.type.order[c.sType+"-pre"],j=0,i=a.aoData.length;j<i;j++)if(c=a.aoData[j],c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)f=d?e[j]:B(a,j,b,"sort"),c._aSortData[b]=g?g(f):f}function xa(a){if(a.oFeatures.bStateSave&&!a.bDestroying){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:h.extend(!0,[],a.aaSorting),search:Ab(a.oPreviousSearch),
columns:h.map(a.aoColumns,function(b,d){return{visible:b.bVisible,search:Ab(a.aoPreSearchCols[d])}})};r(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,b)}}function Jb(a,b,c){var d,e,f=a.aoColumns,b=function(b){if(b&&b.time){var g=r(a,"aoStateLoadParams","stateLoadParams",[a,b]);if(-1===h.inArray(!1,g)&&(g=a.iStateDuration,!(0<g&&b.time<+new Date-1E3*g)&&!(b.columns&&f.length!==b.columns.length))){a.oLoadedState=h.extend(!0,{},b);b.start!==k&&
(a._iDisplayStart=b.start,a.iInitDisplayStart=b.start);b.length!==k&&(a._iDisplayLength=b.length);b.order!==k&&(a.aaSorting=[],h.each(b.order,function(b,c){a.aaSorting.push(c[0]>=f.length?[0,c[1]]:c)}));b.search!==k&&h.extend(a.oPreviousSearch,Bb(b.search));if(b.columns){d=0;for(e=b.columns.length;d<e;d++)g=b.columns[d],g.visible!==k&&(f[d].bVisible=g.visible),g.search!==k&&h.extend(a.aoPreSearchCols[d],Bb(g.search))}r(a,"aoStateLoaded","stateLoaded",[a,b])}}c()};if(a.oFeatures.bStateSave){var g=
a.fnStateLoadCallback.call(a.oInstance,a,b);g!==k&&b(g)}else c()}function ya(a){var b=n.settings,a=h.inArray(a,D(b,"nTable"));return-1!==a?b[a]:null}function K(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+" - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)E.console&&console.log&&console.log(c);else if(b=n.ext,b=b.sErrMode||b.errMode,a&&r(a,null,"error",[a,d,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==
typeof b&&b(a,d,c)}}function F(a,b,c,d){h.isArray(c)?h.each(c,function(c,d){h.isArray(d)?F(a,b,d[0],d[1]):F(a,b,d)}):(d===k&&(d=c),b[c]!==k&&(a[d]=b[c]))}function Xa(a,b,c){var d,e;for(e in b)b.hasOwnProperty(e)&&(d=b[e],h.isPlainObject(d)?(h.isPlainObject(a[e])||(a[e]={}),h.extend(!0,a[e],d)):a[e]=c&&"data"!==e&&"aaData"!==e&&h.isArray(d)?d.slice():d);return a}function Wa(a,b,c){h(a).on("click.DT",b,function(b){h(a).blur();c(b)}).on("keypress.DT",b,function(a){13===a.which&&(a.preventDefault(),c(a))}).on("selectstart.DT",
function(){return!1})}function z(a,b,c,d){c&&a[b].push({fn:c,sName:d})}function r(a,b,c,d){var e=[];b&&(e=h.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,d)}));null!==c&&(b=h.Event(c+".dt"),h(a.nTable).trigger(b,d),e.push(b.result));return e}function Sa(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function Na(a,b){var c=a.renderer,d=n.ext.renderer[b];return h.isPlainObject(c)&&c[b]?d[c[b]]||d._:"string"===
typeof c?d[c]||d._:d._}function y(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function ia(a,b){var c=[],c=Kb.numbers_length,d=Math.floor(c/2);b<=c?c=Y(0,b):a<=d?(c=Y(0,c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-d?c=Y(b-(c-2),b):(c=Y(a-d+2,a+d-1),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));c.DT_el="span";return c}function Da(a){h.each({num:function(b){return za(b,a)},"num-fmt":function(b){return za(b,a,Ya)},"html-num":function(b){return za(b,
a,Aa)},"html-num-fmt":function(b){return za(b,a,Aa,Ya)}},function(b,c){x.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(x.type.search[b+a]=x.type.search.html)})}function Lb(a){return function(){var b=[ya(this[n.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return n.ext.internal[a].apply(this,b)}}var n=function(a){this.$=function(a,b){return this.api(!0).$(a,b)};this._=function(a,b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new s(ya(this[x.iApiIndex])):new s(this)};
this.fnAddData=function(a,b){var c=this.api(!0),d=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===k||b)&&c.draw();return d.flatten().toArray()};this.fnAdjustColumnSizing=function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;a===k||a?b.draw(!1):(""!==d.sX||""!==d.sY)&&la(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();(a===k||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,
b,c){var d=this.api(!0),a=d.rows(a),e=a.settings()[0],h=e.aoData[a[0][0]];a.remove();b&&b.call(this,e,h);(c===k||c)&&d.draw();return h};this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(a)};this.fnFilter=function(a,b,c,d,e,h){e=this.api(!0);null===b||b===k?e.search(a,c,d,h):e.column(b).search(a,c,d,h);e.draw()};this.fnGetData=function(a,b){var c=this.api(!0);if(a!==k){var d=a.nodeName?a.nodeName.toLowerCase():"";return b!==k||"td"==d||"th"==d?c.cell(a,b).data():
c.row(a).data()||null}return c.data().toArray()};this.fnGetNodes=function(a){var b=this.api(!0);return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};
this.fnPageChange=function(a,b){var c=this.api(!0).page(a);(b===k||b)&&c.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===k||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return ya(this[x.iApiIndex])};this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,d,e){var h=this.api(!0);c===k||null===c?h.row(b).data(a):h.cell(b,c).data(a);(e===k||e)&&h.columns.adjust();
(d===k||d)&&h.draw();return 0};this.fnVersionCheck=x.fnVersionCheck;var b=this,c=a===k,d=this.length;c&&(a={});this.oApi=this.internal=x.internal;for(var e in n.ext.internal)e&&(this[e]=Lb(e));this.each(function(){var e={},g=1<d?Xa(e,a,!0):a,j=0,i,e=this.getAttribute("id"),m=!1,l=n.defaults,q=h(this);if("table"!=this.nodeName.toLowerCase())K(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{eb(l);fb(l.column);J(l,l,!0);J(l.column,l.column,!0);J(l,h.extend(g,q.data()));var t=n.settings,
j=0;for(i=t.length;j<i;j++){var o=t[j];if(o.nTable==this||o.nTHead&&o.nTHead.parentNode==this||o.nTFoot&&o.nTFoot.parentNode==this){var s=g.bRetrieve!==k?g.bRetrieve:l.bRetrieve;if(c||s)return o.oInstance;if(g.bDestroy!==k?g.bDestroy:l.bDestroy){o.oInstance.fnDestroy();break}else{K(o,0,"Cannot reinitialise DataTable",3);return}}if(o.sTableId==this.id){t.splice(j,1);break}}if(null===e||""===e)this.id=e="DataTables_Table_"+n.ext._unique++;var p=h.extend(!0,{},n.models.oSettings,{sDestroyWidth:q[0].style.width,
sInstance:e,sTableId:e});p.nTable=this;p.oApi=b.internal;p.oInit=g;t.push(p);p.oInstance=1===b.length?b:q.dataTable();eb(g);Ca(g.oLanguage);g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=h.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]);g=Xa(h.extend(!0,{},l),g);F(p.oFeatures,g,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));F(p,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod",
"aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]);F(p.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);F(p.oLanguage,g,"fnInfoCallback");
z(p,"aoDrawCallback",g.fnDrawCallback,"user");z(p,"aoServerParams",g.fnServerParams,"user");z(p,"aoStateSaveParams",g.fnStateSaveParams,"user");z(p,"aoStateLoadParams",g.fnStateLoadParams,"user");z(p,"aoStateLoaded",g.fnStateLoaded,"user");z(p,"aoRowCallback",g.fnRowCallback,"user");z(p,"aoRowCreatedCallback",g.fnCreatedRow,"user");z(p,"aoHeaderCallback",g.fnHeaderCallback,"user");z(p,"aoFooterCallback",g.fnFooterCallback,"user");z(p,"aoInitComplete",g.fnInitComplete,"user");z(p,"aoPreDrawCallback",
g.fnPreDrawCallback,"user");p.rowIdFn=S(g.rowId);gb(p);var u=p.oClasses;h.extend(u,n.ext.classes,g.oClasses);q.addClass(u.sTable);p.iInitDisplayStart===k&&(p.iInitDisplayStart=g.iDisplayStart,p._iDisplayStart=g.iDisplayStart);null!==g.iDeferLoading&&(p.bDeferLoading=!0,e=h.isArray(g.iDeferLoading),p._iRecordsDisplay=e?g.iDeferLoading[0]:g.iDeferLoading,p._iRecordsTotal=e?g.iDeferLoading[1]:g.iDeferLoading);var v=p.oLanguage;h.extend(!0,v,g.oLanguage);v.sUrl&&(h.ajax({dataType:"json",url:v.sUrl,success:function(a){Ca(a);
J(l.oLanguage,a);h.extend(true,v,a);ha(p)},error:function(){ha(p)}}),m=!0);null===g.asStripeClasses&&(p.asStripeClasses=[u.sStripeOdd,u.sStripeEven]);var e=p.asStripeClasses,x=q.children("tbody").find("tr").eq(0);-1!==h.inArray(!0,h.map(e,function(a){return x.hasClass(a)}))&&(h("tbody tr",this).removeClass(e.join(" ")),p.asDestroyStripes=e.slice());e=[];t=this.getElementsByTagName("thead");0!==t.length&&(ea(p.aoHeader,t[0]),e=ra(p));if(null===g.aoColumns){t=[];j=0;for(i=e.length;j<i;j++)t.push(null)}else t=
g.aoColumns;j=0;for(i=t.length;j<i;j++)Ea(p,e?e[j]:null);ib(p,g.aoColumnDefs,t,function(a,b){ka(p,a,b)});if(x.length){var w=function(a,b){return a.getAttribute("data-"+b)!==null?b:null};h(x[0]).children("th, td").each(function(a,b){var c=p.aoColumns[a];if(c.mData===a){var d=w(b,"sort")||w(b,"order"),e=w(b,"filter")||w(b,"search");if(d!==null||e!==null){c.mData={_:a+".display",sort:d!==null?a+".@data-"+d:k,type:d!==null?a+".@data-"+d:k,filter:e!==null?a+".@data-"+e:k};ka(p,a)}}})}var U=p.oFeatures,
e=function(){if(g.aaSorting===k){var a=p.aaSorting;j=0;for(i=a.length;j<i;j++)a[j][1]=p.aoColumns[j].asSorting[0]}wa(p);U.bSort&&z(p,"aoDrawCallback",function(){if(p.bSorted){var a=X(p),b={};h.each(a,function(a,c){b[c.src]=c.dir});r(p,null,"order",[p,a,b]);Ib(p)}});z(p,"aoDrawCallback",function(){(p.bSorted||y(p)==="ssp"||U.bDeferRender)&&wa(p)},"sc");var a=q.children("caption").each(function(){this._captionSide=h(this).css("caption-side")}),b=q.children("thead");b.length===0&&(b=h("<thead/>").appendTo(q));
p.nTHead=b[0];b=q.children("tbody");b.length===0&&(b=h("<tbody/>").appendTo(q));p.nTBody=b[0];b=q.children("tfoot");if(b.length===0&&a.length>0&&(p.oScroll.sX!==""||p.oScroll.sY!==""))b=h("<tfoot/>").appendTo(q);if(b.length===0||b.children().length===0)q.addClass(u.sNoFooter);else if(b.length>0){p.nTFoot=b[0];ea(p.aoFooter,p.nTFoot)}if(g.aaData)for(j=0;j<g.aaData.length;j++)O(p,g.aaData[j]);else(p.bDeferLoading||y(p)=="dom")&&na(p,h(p.nTBody).children("tr"));p.aiDisplay=p.aiDisplayMaster.slice();
p.bInitialised=true;m===false&&ha(p)};g.bStateSave?(U.bStateSave=!0,z(p,"aoDrawCallback",xa,"state_save"),Jb(p,g,e)):e()}});b=null;return this},x,s,o,u,Za={},Mb=/[\r\n]/g,Aa=/<.*?>/g,Zb=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,$b=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),Ya=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,M=function(a){return!a||!0===a||"-"===a?!0:!1},Nb=function(a){var b=parseInt(a,10);return!isNaN(b)&&
isFinite(a)?b:null},Ob=function(a,b){Za[b]||(Za[b]=RegExp(Qa(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace(Za[b],"."):a},$a=function(a,b,c){var d="string"===typeof a;if(M(a))return!0;b&&d&&(a=Ob(a,b));c&&d&&(a=a.replace(Ya,""));return!isNaN(parseFloat(a))&&isFinite(a)},Pb=function(a,b,c){return M(a)?!0:!(M(a)||"string"===typeof a)?null:$a(a.replace(Aa,""),b,c)?!0:null},D=function(a,b,c){var d=[],e=0,f=a.length;if(c!==k)for(;e<f;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<
f;e++)a[e]&&d.push(a[e][b]);return d},ja=function(a,b,c,d){var e=[],f=0,g=b.length;if(d!==k)for(;f<g;f++)a[b[f]][c]&&e.push(a[b[f]][c][d]);else for(;f<g;f++)e.push(a[b[f]][c]);return e},Y=function(a,b){var c=[],d;b===k?(b=0,d=a):(d=b,b=a);for(var e=b;e<d;e++)c.push(e);return c},Qb=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);return b},qa=function(a){var b;a:{if(!(2>a.length)){b=a.slice().sort();for(var c=b[0],d=1,e=b.length;d<e;d++){if(b[d]===c){b=!1;break a}c=b[d]}}b=!0}if(b)return a.slice();
b=[];var e=a.length,f,g=0,d=0;a:for(;d<e;d++){c=a[d];for(f=0;f<g;f++)if(b[f]===c)continue a;b.push(c);g++}return b};n.util={throttle:function(a,b){var c=b!==k?b:200,d,e;return function(){var b=this,g=+new Date,j=arguments;d&&g<d+c?(clearTimeout(e),e=setTimeout(function(){d=k;a.apply(b,j)},c)):(d=g,a.apply(b,j))}},escapeRegex:function(a){return a.replace($b,"\\$1")}};var A=function(a,b,c){a[b]!==k&&(a[c]=a[b])},ca=/\[.*?\]$/,W=/\(\)$/,Qa=n.util.escapeRegex,va=h("<div>")[0],Wb=va.textContent!==k,Yb=
/<.*?>/g,Oa=n.util.throttle,Rb=[],w=Array.prototype,ac=function(a){var b,c,d=n.settings,e=h.map(d,function(a){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=h.inArray(a,e),-1!==b?[d[b]]:null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=h(a):a instanceof h&&(c=a)}else return[];if(c)return c.map(function(){b=h.inArray(this,e);return-1!==b?d[b]:null}).toArray()};s=function(a,b){if(!(this instanceof
s))return new s(a,b);var c=[],d=function(a){(a=ac(a))&&(c=c.concat(a))};if(h.isArray(a))for(var e=0,f=a.length;e<f;e++)d(a[e]);else d(a);this.context=qa(c);b&&h.merge(this,b);this.selector={rows:null,cols:null,opts:null};s.extend(this,this,Rb)};n.Api=s;h.extend(s.prototype,{any:function(){return 0!==this.count()},concat:w.concat,context:[],count:function(){return this.flatten().length},each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=
this.context;return b.length>a?new s(b[a],this[a]):null},filter:function(a){var b=[];if(w.filter)b=w.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new s(this.context,b)},flatten:function(){var a=[];return new s(this.context,a.concat.apply(a,this.toArray()))},join:w.join,indexOf:w.indexOf||function(a,b){for(var c=b||0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1},iterator:function(a,b,c,d){var e=[],f,g,j,h,m,l=this.context,
n,o,u=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);g=0;for(j=l.length;g<j;g++){var r=new s(l[g]);if("table"===b)f=c.call(r,l[g],g),f!==k&&e.push(f);else if("columns"===b||"rows"===b)f=c.call(r,l[g],this[g],g),f!==k&&e.push(f);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){o=this[g];"column-rows"===b&&(n=Ba(l[g],u.opts));h=0;for(m=o.length;h<m;h++)f=o[h],f="cell"===b?c.call(r,l[g],f.row,f.column,g,h):c.call(r,l[g],f,g,h,n),f!==k&&e.push(f)}}return e.length||d?(a=new s(l,a?
e.concat.apply([],e):e),b=a.selector,b.rows=u.rows,b.cols=u.cols,b.opts=u.opts,a):this},lastIndexOf:w.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(w.map)b=w.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new s(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:w.pop,push:w.push,reduce:w.reduce||function(a,b){return hb(this,a,b,0,this.length,
1)},reduceRight:w.reduceRight||function(a,b){return hb(this,a,b,this.length-1,-1,-1)},reverse:w.reverse,selector:null,shift:w.shift,slice:function(){return new s(this.context,this)},sort:w.sort,splice:w.splice,toArray:function(){return w.slice.call(this)},to$:function(){return h(this)},toJQuery:function(){return h(this)},unique:function(){return new s(this.context,qa(this))},unshift:w.unshift});s.extend=function(a,b,c){if(c.length&&b&&(b instanceof s||b.__dt_wrapper)){var d,e,f,g=function(a,b,c){return function(){var d=
b.apply(a,arguments);s.extend(d,d,c.methodExt);return d}};d=0;for(e=c.length;d<e;d++)f=c[d],b[f.name]="function"===typeof f.val?g(a,f.val,f):h.isPlainObject(f.val)?{}:f.val,b[f.name].__dt_wrapper=!0,s.extend(a,b[f.name],f.propExt)}};s.register=o=function(a,b){if(h.isArray(a))for(var c=0,d=a.length;c<d;c++)s.register(a[c],b);else for(var e=a.split("."),f=Rb,g,j,c=0,d=e.length;c<d;c++){g=(j=-1!==e[c].indexOf("()"))?e[c].replace("()",""):e[c];var i;a:{i=0;for(var m=f.length;i<m;i++)if(f[i].name===g){i=
f[i];break a}i=null}i||(i={name:g,val:{},methodExt:[],propExt:[]},f.push(i));c===d-1?i.val=b:f=j?i.methodExt:i.propExt}};s.registerPlural=u=function(a,b,c){s.register(a,c);s.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof s?a.length?h.isArray(a[0])?new s(a.context,a[0]):a[0]:k:a})};o("tables()",function(a){var b;if(a){b=s;var c=this.context;if("number"===typeof a)a=[c[a]];else var d=h.map(c,function(a){return a.nTable}),a=h(d).filter(a).map(function(){var a=h.inArray(this,
d);return c[a]}).toArray();b=new b(a)}else b=this;return b});o("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new s(b[0]):a});u("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});u("tables().body()","table().body()",function(){return this.iterator("table",function(a){return a.nTBody},1)});u("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});u("tables().footer()",
"table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot},1)});u("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});o("draw()",function(a){return this.iterator("table",function(b){"page"===a?P(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),T(b,!1===a))})});o("page()",function(a){return a===k?this.page.info().page:this.iterator("table",function(b){Ta(b,a)})});o("page.info()",function(){if(0===
this.context.length)return k;var a=this.context[0],b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:d,serverSide:"ssp"===y(a)}});o("page.len()",function(a){return a===k?0!==this.context.length?this.context[0]._iDisplayLength:k:this.iterator("table",function(b){Ra(b,a)})});var Sb=function(a,b,c){if(c){var d=new s(a);
d.one("draw",function(){c(d.ajax.json())})}if("ssp"==y(a))T(a,b);else{C(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();sa(a,[],function(c){oa(a);for(var c=ta(a,c),d=0,e=c.length;d<e;d++)O(a,c[d]);T(a,b);C(a,!1)})}};o("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});o("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});o("ajax.reload()",function(a,b){return this.iterator("table",function(c){Sb(c,!1===b,a)})});o("ajax.url()",function(a){var b=
this.context;if(a===k){if(0===b.length)return k;b=b[0];return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){h.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});o("ajax.url().load()",function(a,b){return this.iterator("table",function(c){Sb(c,!1===b,a)})});var ab=function(a,b,c,d,e){var f=[],g,j,i,m,l,n;i=typeof b;if(!b||"string"===i||"function"===i||b.length===k)b=[b];i=0;for(m=b.length;i<m;i++){j=b[i]&&b[i].split&&!b[i].match(/[\[\(:]/)?b[i].split(","):
[b[i]];l=0;for(n=j.length;l<n;l++)(g=c("string"===typeof j[l]?h.trim(j[l]):j[l]))&&g.length&&(f=f.concat(g))}a=x.selector[a];if(a.length){i=0;for(m=a.length;i<m;i++)f=a[i](d,e,f)}return qa(f)},bb=function(a){a||(a={});a.filter&&a.search===k&&(a.search=a.filter);return h.extend({search:"none",order:"current",page:"all"},a)},cb=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Ba=function(a,b){var c,
d,e,f=[],g=a.aiDisplay;e=a.aiDisplayMaster;var j=b.search;c=b.order;d=b.page;if("ssp"==y(a))return"removed"===j?[]:Y(0,e.length);if("current"==d){c=a._iDisplayStart;for(d=a.fnDisplayEnd();c<d;c++)f.push(g[c])}else if("current"==c||"applied"==c)if("none"==j)f=e.slice();else if("applied"==j)f=g.slice();else{if("removed"==j){var i={};c=0;for(d=g.length;c<d;c++)i[g[c]]=null;f=h.map(e,function(a){return!i.hasOwnProperty(a)?a:null})}}else if("index"==c||"original"==c){c=0;for(d=a.aoData.length;c<d;c++)"none"==
j?f.push(c):(e=h.inArray(c,g),(-1===e&&"removed"==j||0<=e&&"applied"==j)&&f.push(c))}return f};o("rows()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=bb(b),c=this.iterator("table",function(c){var e=b,f;return ab("row",a,function(a){var b=Nb(a),i=c.aoData;if(b!==null&&!e)return[b];f||(f=Ba(c,e));if(b!==null&&h.inArray(b,f)!==-1)return[b];if(a===null||a===k||a==="")return f;if(typeof a==="function")return h.map(f,function(b){var c=i[b];return a(b,c._aData,c.nTr)?b:null});if(a.nodeName){var b=
a._DT_RowIndex,m=a._DT_CellIndex;if(b!==k)return i[b]&&i[b].nTr===a?[b]:[];if(m)return i[m.row]&&i[m.row].nTr===a?[m.row]:[];b=h(a).closest("*[data-dt-row]");return b.length?[b.data("dt-row")]:[]}if(typeof a==="string"&&a.charAt(0)==="#"){b=c.aIds[a.replace(/^#/,"")];if(b!==k)return[b.idx]}b=Qb(ja(c.aoData,f,"nTr"));return h(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()},c,e)},1);c.selector.rows=a;c.selector.opts=b;return c});o("rows().nodes()",function(){return this.iterator("row",
function(a,b){return a.aoData[b].nTr||k},1)});o("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return ja(a.aoData,b,"_aData")},1)});u("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var d=b.aoData[c];return"search"===a?d._aFilterData:d._aSortData},1)});u("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){da(b,c,a)})});u("rows().indexes()","row().index()",function(){return this.iterator("row",
function(a,b){return b},1)});u("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,d=0,e=c.length;d<e;d++)for(var f=0,g=this[d].length;f<g;f++){var h=c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);b.push((!0===a?"#":"")+h)}return new s(c,b)});u("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,f=e[c],g,h,i,m,l;e.splice(c,1);g=0;for(h=e.length;g<h;g++)if(i=e[g],l=i.anCells,null!==i.nTr&&(i.nTr._DT_RowIndex=g),null!==l){i=0;for(m=
l.length;i<m;i++)l[i]._DT_CellIndex.row=g}pa(b.aiDisplayMaster,c);pa(b.aiDisplay,c);pa(a[d],c,!1);0<b._iRecordsDisplay&&b._iRecordsDisplay--;Sa(b);c=b.rowIdFn(f._aData);c!==k&&delete b.aIds[c]});this.iterator("table",function(a){for(var c=0,d=a.aoData.length;c<d;c++)a.aoData[c].idx=c});return this});o("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,g,h=[];f=0;for(g=a.length;f<g;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?h.push(na(b,c)[0]):h.push(O(b,c));return h},
1),c=this.rows(-1);c.pop();h.merge(c,b);return c});o("row()",function(a,b){return cb(this.rows(a,b))});o("row().data()",function(a){var b=this.context;if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:k;var c=b[0].aoData[this[0]];c._aData=a;h.isArray(a)&&c.nTr.id&&N(b[0].rowId)(a,c.nTr.id);da(b[0],this[0],"data");return this});o("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});o("row.add()",function(a){a instanceof h&&
a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?na(b,a)[0]:O(b,a)});return this.row(b[0])});var db=function(a,b){var c=a.context;if(c.length&&(c=c[0].aoData[b!==k?b:a[0]])&&c._details)c._details.remove(),c._detailsShow=k,c._details=k},Tb=function(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];if(d._details){(d._detailsShow=b)?d._details.insertAfter(d.nTr):d._details.detach();var e=c[0],f=new s(e),g=e.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
0<D(g,"_details").length&&(f.on("draw.dt.DT_details",function(a,b){e===b&&f.rows({page:"current"}).eq(0).each(function(a){a=g[a];a._detailsShow&&a._details.insertAfter(a.nTr)})}),f.on("column-visibility.dt.DT_details",function(a,b){if(e===b)for(var c,d=V(b),f=0,h=g.length;f<h;f++)c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",d)}),f.on("destroy.dt.DT_details",function(a,b){if(e===b)for(var c=0,d=g.length;c<d;c++)g[c]._details&&db(f,c)}))}}};o("row().child()",function(a,b){var c=
this.context;if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:k;if(!0===a)this.child.show();else if(!1===a)db(this);else if(c.length&&this.length){var d=c[0],c=c[0].aoData[this[0]],e=[],f=function(a,b){if(h.isArray(a)||a instanceof h)for(var c=0,k=a.length;c<k;c++)f(a[c],b);else a.nodeName&&"tr"===a.nodeName.toLowerCase()?e.push(a):(c=h("<tr><td/></tr>").addClass(b),h("td",c).addClass(b).html(a)[0].colSpan=V(d),e.push(c[0]))};f(a,b);c._details&&c._details.detach();c._details=h(e);
c._detailsShow&&c._details.insertAfter(c.nTr)}return this});o(["row().child.show()","row().child().show()"],function(){Tb(this,!0);return this});o(["row().child.hide()","row().child().hide()"],function(){Tb(this,!1);return this});o(["row().child.remove()","row().child().remove()"],function(){db(this);return this});o("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var bc=/^([^:]+):(name|visIdx|visible)$/,Ub=function(a,b,
c,d,e){for(var c=[],d=0,f=e.length;d<f;d++)c.push(B(a,e[d],b));return c};o("columns()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=bb(b),c=this.iterator("table",function(c){var e=a,f=b,g=c.aoColumns,j=D(g,"sName"),i=D(g,"nTh");return ab("column",e,function(a){var b=Nb(a);if(a==="")return Y(g.length);if(b!==null)return[b>=0?b:g.length+b];if(typeof a==="function"){var e=Ba(c,f);return h.map(g,function(b,f){return a(f,Ub(c,f,0,0,e),i[f])?f:null})}var k=typeof a==="string"?a.match(bc):
"";if(k)switch(k[2]){case "visIdx":case "visible":b=parseInt(k[1],10);if(b<0){var n=h.map(g,function(a,b){return a.bVisible?b:null});return[n[n.length+b]]}return[aa(c,b)];case "name":return h.map(j,function(a,b){return a===k[1]?b:null});default:return[]}if(a.nodeName&&a._DT_CellIndex)return[a._DT_CellIndex.column];b=h(i).filter(a).map(function(){return h.inArray(this,i)}).toArray();if(b.length||!a.nodeName)return b;b=h(a).closest("*[data-dt-column]");return b.length?[b.data("dt-column")]:[]},c,f)},
1);c.selector.cols=a;c.selector.opts=b;return c});u("columns().header()","column().header()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh},1)});u("columns().footer()","column().footer()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf},1)});u("columns().data()","column().data()",function(){return this.iterator("column-rows",Ub,1)});u("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},
1)});u("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,d,e,f){return ja(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)},1)});u("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return ja(a.aoData,e,"anCells",b)},1)});u("columns().visible()","column().visible()",function(a,b){var c=this.iterator("column",function(b,c){if(a===k)return b.aoColumns[c].bVisible;var f=b.aoColumns,g=f[c],j=b.aoData,
i,m,l;if(a!==k&&g.bVisible!==a){if(a){var n=h.inArray(!0,D(f,"bVisible"),c+1);i=0;for(m=j.length;i<m;i++)l=j[i].nTr,f=j[i].anCells,l&&l.insertBefore(f[c],f[n]||null)}else h(D(b.aoData,"anCells",c)).detach();g.bVisible=a;fa(b,b.aoHeader);fa(b,b.aoFooter);b.aiDisplay.length||h(b.nTBody).find("td[colspan]").attr("colspan",V(b));xa(b)}});a!==k&&(this.iterator("column",function(c,e){r(c,null,"column-visibility",[c,e,a,b])}),(b===k||b)&&this.columns.adjust());return c});u("columns().indexes()","column().index()",
function(a){return this.iterator("column",function(b,c){return"visible"===a?ba(b,c):c},1)});o("columns.adjust()",function(){return this.iterator("table",function(a){$(a)},1)});o("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===a||"toData"===a)return aa(c,b);if("fromData"===a||"toVisible"===a)return ba(c,b)}});o("column()",function(a,b){return cb(this.columns(a,b))});o("cells()",function(a,b,c){h.isPlainObject(a)&&(a.row===k?(c=a,a=null):(c=b,b=null));
h.isPlainObject(b)&&(c=b,b=null);if(null===b||b===k)return this.iterator("table",function(b){var d=a,e=bb(c),f=b.aoData,g=Ba(b,e),j=Qb(ja(f,g,"anCells")),i=h([].concat.apply([],j)),l,m=b.aoColumns.length,n,o,u,s,r,v;return ab("cell",d,function(a){var c=typeof a==="function";if(a===null||a===k||c){n=[];o=0;for(u=g.length;o<u;o++){l=g[o];for(s=0;s<m;s++){r={row:l,column:s};if(c){v=f[l];a(r,B(b,l,s),v.anCells?v.anCells[s]:null)&&n.push(r)}else n.push(r)}}return n}if(h.isPlainObject(a))return a.column!==
k&&a.row!==k&&h.inArray(a.row,g)!==-1?[a]:[];c=i.filter(a).map(function(a,b){return{row:b._DT_CellIndex.row,column:b._DT_CellIndex.column}}).toArray();if(c.length||!a.nodeName)return c;v=h(a).closest("*[data-dt-row]");return v.length?[{row:v.data("dt-row"),column:v.data("dt-column")}]:[]},b,e)});var d=this.columns(b),e=this.rows(a),f,g,j,i,m;this.iterator("table",function(a,b){f=[];g=0;for(j=e[b].length;g<j;g++){i=0;for(m=d[b].length;i<m;i++)f.push({row:e[b][g],column:d[b][i]})}},1);var l=this.cells(f,
c);h.extend(l.selector,{cols:b,rows:a,opts:c});return l});u("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=a.aoData[b])&&a.anCells?a.anCells[c]:k},1)});o("cells().data()",function(){return this.iterator("cell",function(a,b,c){return B(a,b,c)},1)});u("cells().cache()","cell().cache()",function(a){a="search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});u("cells().render()","cell().render()",
function(a){return this.iterator("cell",function(b,c,d){return B(b,c,d,a)},1)});u("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,b,c){return{row:b,column:c,columnVisible:ba(a,c)}},1)});u("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,c,d){da(b,c,a,d)})});o("cell()",function(a,b,c){return cb(this.cells(a,b,c))});o("cell().data()",function(a){var b=this.context,c=this[0];if(a===k)return b.length&&c.length?B(b[0],
c[0].row,c[0].column):k;jb(b[0],c[0].row,c[0].column,a);da(b[0],c[0].row,"data",c[0].column);return this});o("order()",function(a,b){var c=this.context;if(a===k)return 0!==c.length?c[0].aaSorting:k;"number"===typeof a?a=[[a,b]]:a.length&&!h.isArray(a[0])&&(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=a.slice()})});o("order.listener()",function(a,b,c){return this.iterator("table",function(d){Ma(d,a,b,c)})});o("order.fixed()",function(a){if(!a){var b=
this.context,b=b.length?b[0].aaSortingFixed:k;return h.isArray(b)?{pre:b}:b}return this.iterator("table",function(b){b.aaSortingFixed=h.extend(!0,{},a)})});o(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];h.each(b[d],function(b,c){e.push([c,a])});c.aaSorting=e})});o("search()",function(a,b,c,d){var e=this.context;return a===k?0!==e.length?e[0].oPreviousSearch.sSearch:k:this.iterator("table",function(e){e.oFeatures.bFilter&&ga(e,
h.extend({},e.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});u("columns().search()","column().search()",function(a,b,c,d){return this.iterator("column",function(e,f){var g=e.aoPreSearchCols;if(a===k)return g[f].sSearch;e.oFeatures.bFilter&&(h.extend(g[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),ga(e,e.oPreviousSearch,1))})});o("state()",function(){return this.context.length?this.context[0].oSavedState:
null});o("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});o("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null});o("state.save()",function(){return this.iterator("table",function(a){xa(a)})});n.versionCheck=n.fnVersionCheck=function(a){for(var b=n.version.split("."),a=a.split("."),c,d,e=0,f=a.length;e<f;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};n.isDataTable=
n.fnIsDataTable=function(a){var b=h(a).get(0),c=!1;if(a instanceof n.Api)return!0;h.each(n.settings,function(a,e){var f=e.nScrollHead?h("table",e.nScrollHead)[0]:null,g=e.nScrollFoot?h("table",e.nScrollFoot)[0]:null;if(e.nTable===b||f===b||g===b)c=!0});return c};n.tables=n.fnTables=function(a){var b=!1;h.isPlainObject(a)&&(b=a.api,a=a.visible);var c=h.map(n.settings,function(b){if(!a||a&&h(b.nTable).is(":visible"))return b.nTable});return b?new s(c):c};n.camelToHungarian=J;o("$()",function(a,b){var c=
this.rows(b).nodes(),c=h(c);return h([].concat(c.filter(a).toArray(),c.find(a).toArray()))});h.each(["on","one","off"],function(a,b){o(b+"()",function(){var a=Array.prototype.slice.call(arguments);a[0]=h.map(a[0].split(/\s/),function(a){return!a.match(/\.dt\b/)?a+".dt":a}).join(" ");var d=h(this.tables().nodes());d[b].apply(d,a);return this})});o("clear()",function(){return this.iterator("table",function(a){oa(a)})});o("settings()",function(){return new s(this.context,this.context)});o("init()",function(){var a=
this.context;return a.length?a[0].oInit:null});o("data()",function(){return this.iterator("table",function(a){return D(a.aoData,"_aData")}).flatten()});o("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,f=b.nTBody,g=b.nTHead,j=b.nTFoot,i=h(e),f=h(f),k=h(b.nTableWrapper),l=h.map(b.aoData,function(a){return a.nTr}),o;b.bDestroying=!0;r(b,"aoDestroyCallback","destroy",[b]);a||(new s(b)).columns().visible(!0);k.off(".DT").find(":not(tbody *)").off(".DT");
h(E).off(".DT-"+b.sInstance);e!=g.parentNode&&(i.children("thead").detach(),i.append(g));j&&e!=j.parentNode&&(i.children("tfoot").detach(),i.append(j));b.aaSorting=[];b.aaSortingFixed=[];wa(b);h(l).removeClass(b.asStripeClasses.join(" "));h("th, td",g).removeClass(d.sSortable+" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);f.children().detach();f.append(l);g=a?"remove":"detach";i[g]();k[g]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),i.css("width",b.sDestroyWidth).removeClass(d.sTable),
(o=b.asDestroyStripes.length)&&f.children().each(function(a){h(this).addClass(b.asDestroyStripes[a%o])}));c=h.inArray(b,n.settings);-1!==c&&n.settings.splice(c,1)})});h.each(["column","row","cell"],function(a,b){o(b+"s().every()",function(a){var d=this.selector.opts,e=this;return this.iterator(b,function(f,g,h,i,m){a.call(e[b](g,"cell"===b?h:d,"cell"===b?d:k),g,h,i,m)})})});o("i18n()",function(a,b,c){var d=this.context[0],a=S(a)(d.oLanguage);a===k&&(a=b);c!==k&&h.isPlainObject(a)&&(a=a[c]!==k?a[c]:
a._);return a.replace("%d",c)});n.version="1.10.18";n.settings=[];n.models={};n.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};n.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1};n.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,
sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};n.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,
bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+
a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+"_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},
oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:h.extend({},
n.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};Z(n.defaults);n.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};
Z(n.defaults.column);n.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],
aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",
iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:k,oAjaxData:k,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==y(this)?1*this._iRecordsTotal:
this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==y(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,f=e.bPaginate;return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};n.ext=x={buttons:{},
classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:n.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:n.version};h.extend(x,{afnFiltering:x.search,aTypes:x.type.detect,ofnSearch:x.type.search,oSort:x.type.order,afnSortData:x.order,aoFeatures:x.feature,oApi:x.internal,oStdClasses:x.classes,oPagination:x.pager});
h.extend(n.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",
sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",
sJUIHeader:"",sJUIFooter:""});var Kb=n.ext.pager;h.extend(Kb,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(a,b){return[ia(a,b)]},simple_numbers:function(a,b){return["previous",ia(a,b),"next"]},full_numbers:function(a,b){return["first","previous",ia(a,b),"next","last"]},first_last_numbers:function(a,b){return["first",ia(a,b),"last"]},_numbers:ia,numbers_length:7});h.extend(!0,n.ext.renderer,{pageButton:{_:function(a,b,c,d,e,
f){var g=a.oClasses,j=a.oLanguage.oPaginate,i=a.oLanguage.oAria.paginate||{},m,l,n=0,o=function(b,d){var k,s,u,r,v=function(b){Ta(a,b.data.action,true)};k=0;for(s=d.length;k<s;k++){r=d[k];if(h.isArray(r)){u=h("<"+(r.DT_el||"div")+"/>").appendTo(b);o(u,r)}else{m=null;l="";switch(r){case "ellipsis":b.append('<span class="ellipsis">&#x2026;</span>');break;case "first":m=j.sFirst;l=r+(e>0?"":" "+g.sPageButtonDisabled);break;case "previous":m=j.sPrevious;l=r+(e>0?"":" "+g.sPageButtonDisabled);break;case "next":m=
j.sNext;l=r+(e<f-1?"":" "+g.sPageButtonDisabled);break;case "last":m=j.sLast;l=r+(e<f-1?"":" "+g.sPageButtonDisabled);break;default:m=r+1;l=e===r?g.sPageButtonActive:""}if(m!==null){u=h("<a>",{"class":g.sPageButton+" "+l,"aria-controls":a.sTableId,"aria-label":i[r],"data-dt-idx":n,tabindex:a.iTabIndex,id:c===0&&typeof r==="string"?a.sTableId+"_"+r:null}).html(m).appendTo(b);Wa(u,{action:r},v);n++}}}},s;try{s=h(b).find(H.activeElement).data("dt-idx")}catch(u){}o(h(b).empty(),d);s!==k&&h(b).find("[data-dt-idx="+
s+"]").focus()}}});h.extend(n.ext.type.detect,[function(a,b){var c=b.oLanguage.sDecimal;return $a(a,c)?"num"+c:null},function(a){if(a&&!(a instanceof Date)&&!Zb.test(a))return null;var b=Date.parse(a);return null!==b&&!isNaN(b)||M(a)?"date":null},function(a,b){var c=b.oLanguage.sDecimal;return $a(a,c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Pb(a,c)?"html-num"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Pb(a,c,!0)?"html-num-fmt"+c:null},function(a){return M(a)||
"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);h.extend(n.ext.type.search,{html:function(a){return M(a)?a:"string"===typeof a?a.replace(Mb," ").replace(Aa,""):""},string:function(a){return M(a)?a:"string"===typeof a?a.replace(Mb," "):a}});var za=function(a,b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Ob(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};h.extend(x.type.order,{"date-pre":function(a){a=Date.parse(a);return isNaN(a)?-Infinity:a},"html-pre":function(a){return M(a)?
"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return M(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()},"string-asc":function(a,b){return a<b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});Da("");h.extend(!0,n.ext.renderer,{header:{_:function(a,b,c,d){h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(c.sSortingClass+" "+d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:
c.sSortingClass)}})},jqueryui:function(a,b,c,d){h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass);b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass(h[e]==
"asc"?d.sSortJUIAsc:h[e]=="desc"?d.sSortJUIDesc:c.sSortingClassJUI)}})}}});var Vb=function(a){return"string"===typeof a?a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):a};n.render={number:function(a,b,c,d,e){return{display:function(f){if("number"!==typeof f&&"string"!==typeof f)return f;var g=0>f?"-":"",h=parseFloat(f);if(isNaN(h))return Vb(f);h=h.toFixed(c);f=Math.abs(h);h=parseInt(f,10);f=c?b+(f-h).toFixed(c).substring(2):"";return g+(d||"")+h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
a)+f+(e||"")}}},text:function(){return{display:Vb}}};h.extend(n.ext.internal,{_fnExternApiFunc:Lb,_fnBuildAjax:sa,_fnAjaxUpdate:lb,_fnAjaxParameters:ub,_fnAjaxUpdateDraw:vb,_fnAjaxDataSrc:ta,_fnAddColumn:Ea,_fnColumnOptions:ka,_fnAdjustColumnSizing:$,_fnVisibleToColumnIndex:aa,_fnColumnIndexToVisible:ba,_fnVisbleColumns:V,_fnGetColumns:ma,_fnColumnTypes:Ga,_fnApplyColumnDefs:ib,_fnHungarianMap:Z,_fnCamelToHungarian:J,_fnLanguageCompat:Ca,_fnBrowserDetect:gb,_fnAddData:O,_fnAddTr:na,_fnNodeToDataIndex:function(a,
b){return b._DT_RowIndex!==k?b._DT_RowIndex:null},_fnNodeToColumnIndex:function(a,b,c){return h.inArray(c,a.aoData[b].anCells)},_fnGetCellData:B,_fnSetCellData:jb,_fnSplitObjNotation:Ja,_fnGetObjectDataFn:S,_fnSetObjectDataFn:N,_fnGetDataMaster:Ka,_fnClearTable:oa,_fnDeleteIndex:pa,_fnInvalidate:da,_fnGetRowElements:Ia,_fnCreateTr:Ha,_fnBuildHead:kb,_fnDrawHead:fa,_fnDraw:P,_fnReDraw:T,_fnAddOptionsHtml:nb,_fnDetectHeader:ea,_fnGetUniqueThs:ra,_fnFeatureHtmlFilter:pb,_fnFilterComplete:ga,_fnFilterCustom:yb,
_fnFilterColumn:xb,_fnFilter:wb,_fnFilterCreateSearch:Pa,_fnEscapeRegex:Qa,_fnFilterData:zb,_fnFeatureHtmlInfo:sb,_fnUpdateInfo:Cb,_fnInfoMacros:Db,_fnInitialise:ha,_fnInitComplete:ua,_fnLengthChange:Ra,_fnFeatureHtmlLength:ob,_fnFeatureHtmlPaginate:tb,_fnPageChange:Ta,_fnFeatureHtmlProcessing:qb,_fnProcessingDisplay:C,_fnFeatureHtmlTable:rb,_fnScrollDraw:la,_fnApplyToChildren:I,_fnCalculateColumnWidths:Fa,_fnThrottle:Oa,_fnConvertToWidth:Eb,_fnGetWidestNode:Fb,_fnGetMaxLenString:Gb,_fnStringToCss:v,
_fnSortFlatten:X,_fnSort:mb,_fnSortAria:Ib,_fnSortListener:Va,_fnSortAttachListener:Ma,_fnSortingClasses:wa,_fnSortData:Hb,_fnSaveState:xa,_fnLoadState:Jb,_fnSettingsFromNode:ya,_fnLog:K,_fnMap:F,_fnBindAction:Wa,_fnCallbackReg:z,_fnCallbackFire:r,_fnLengthOverflow:Sa,_fnRenderer:Na,_fnDataSource:y,_fnRowAttributes:La,_fnExtend:Xa,_fnCalculateEnd:function(){}});h.fn.dataTable=n;n.$=h;h.fn.dataTableSettings=n.settings;h.fn.dataTableExt=n.ext;h.fn.DataTable=function(a){return h(this).dataTable(a).api()};
h.each(n,function(a,b){h.fn.DataTable[a]=b});return h.fn.dataTable});

/**
 * By default DataTables only uses the sAjaxSource variable at initialisation
 * time, however it can be useful to re-read an Ajax source and have the table
 * update. Typically you would need to use the `fnClearTable()` and
 * `fnAddData()` functions, however this wraps it all up in a single function
 * call.
 *
 * DataTables 1.10 provides the `dt-api ajax.url()` and `dt-api ajax.reload()`
 * methods, built-in, to give the same functionality as this plug-in. As such
 * this method is marked deprecated, but is available for use with legacy
 * version of DataTables. Please use the new API if you are used DataTables 1.10
 * or newer.
 *
 *  @name fnReloadAjax
 *  @summary Reload the table's data from the Ajax source
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 *  @deprecated
 *
 *  @param {string} [sNewSource] URL to get the data from. If not give, the
 *    previously used URL is used.
 *  @param {function} [fnCallback] Callback that is executed when the table has
 *    redrawn with the new data
 *  @param {boolean} [bStandingRedraw=false] Standing redraw (don't changing the
 *      paging)
 *
 *  @example
 *    var table = $('#example').dataTable();
 *
 *    // Example call to load a new file
 *    table.fnReloadAjax( 'media/examples_support/json_source2.txt' );
 *
 *    // Example call to reload from original file
 *    table.fnReloadAjax();
 */

jQuery.fn.dataTableExt.oApi.fnReloadAjax = function(
    oSettings, sNewSource, fnCallback, bStandingRedraw) {
  // DataTables 1.10 compatibility - if 1.10 then `versionCheck` exists.
  // 1.10's API has ajax reloading built in, so we use those abilities
  // directly.
  if (jQuery.fn.dataTable.versionCheck) {
    var api = new jQuery.fn.dataTable.Api(oSettings);

    if (sNewSource) {
      api.ajax.url(sNewSource).load(fnCallback, !bStandingRedraw);
    }
    else {
      api.ajax.reload(fnCallback, !bStandingRedraw);
    }
    return;
  }

  if (sNewSource !== undefined && sNewSource !== null) {
    oSettings.sAjaxSource = sNewSource;
  }

  // Server-side processing should just call fnDraw
  if (oSettings.oFeatures.bServerSide) {
    this.fnDraw();
    return;
  }

  this.oApi._fnProcessingDisplay(oSettings, true);
  var that = this;
  var iStart = oSettings._iDisplayStart;
  var aData = [];

  this.oApi._fnServerParams(oSettings, aData);

  oSettings.fnServerData.call(oSettings.oInstance, oSettings.sAjaxSource, aData, function(json) {
    /* Clear the old information from the table */
    that.oApi._fnClearTable(oSettings);

    /* Got the data - add it to the table */
    var aData = (oSettings.sAjaxDataProp !== "") ?
        that.oApi._fnGetObjectDataFn(oSettings.sAjaxDataProp)(json) : json;

    for (var i = 0; i < aData.length; i++) {
      that.oApi._fnAddData(oSettings, aData[i]);
    }

    oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();

    that.fnDraw();

    if (bStandingRedraw === true) {
      oSettings._iDisplayStart = iStart;
      that.oApi._fnCalculateEnd(oSettings);
      that.fnDraw(false);
    }

    that.oApi._fnProcessingDisplay(oSettings, false);

    /* Callback user function - for event handlers etc */
    if (typeof fnCallback == 'function' && fnCallback !== null) {
      fnCallback(oSettings);
    }
  }, oSettings);
};

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
 * Chart.js
 * http://chartjs.org/
 * Version: 1.0.1-beta.4
 *
 * Copyright 2014 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */
(function() {
  "use strict";
  var t = this, i = t.Chart, e = function(t) {
    this.canvas = t.canvas, this.ctx = t;
    this.width = t.canvas.width, this.height = t.canvas.height;
    return this.aspectRatio = this.width / this.height, s.retinaScale(this), this
  };
  e.defaults = {
    global: {
      animation: !0,
      animationSteps: 60,
      animationEasing: "easeOutQuart",
      showScale: !0,
      scaleOverride: !1,
      scaleSteps: null,
      scaleStepWidth: null,
      scaleStartValue: null,
      scaleLineColor: "rgba(0,0,0,.1)",
      scaleLineWidth: 1,
      scaleShowLabels: !0,
      scaleLabel: "<%=value%>",
      scaleIntegersOnly: !0,
      scaleBeginAtZero: !1,
      scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      scaleFontSize: 12,
      scaleFontStyle: "normal",
      scaleFontColor: "#666",
      responsive: !1,
      maintainAspectRatio: !0,
      showTooltips: !0,
      tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
      tooltipFillColor: "rgba(0,0,0,0.8)",
      tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      tooltipFontSize: 14,
      tooltipFontStyle: "normal",
      tooltipFontColor: "#fff",
      tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      tooltipTitleFontSize: 14,
      tooltipTitleFontStyle: "bold",
      tooltipTitleFontColor: "#fff",
      tooltipYPadding: 6,
      tooltipXPadding: 6,
      tooltipCaretSize: 8,
      tooltipCornerRadius: 6,
      tooltipXOffset: 10,
      tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
      multiTooltipTemplate: "<%= value %>",
      multiTooltipKeyBackground: "#fff",
      onAnimationProgress: function() {
      },
      onAnimationComplete: function() {
      }
    }
  }, e.types = {};
  var s = e.helpers = {}, n = s.each = function(t, i, e) {
    var s = Array.prototype.slice.call(arguments, 3);
    if (t)if (t.length === +t.length) {
      var n;
      for (n = 0; n < t.length; n++)i.apply(e, [t[n], n].concat(s))
    } else for (var o in t)i.apply(e, [t[o], o].concat(s))
  }, o = s.clone = function(t) {
    var i = {};
    return n(t, function(e, s) {
      t.hasOwnProperty(s) && (i[s] = e)
    }), i
  }, a = s.extend = function(t) {
    return n(Array.prototype.slice.call(arguments, 1), function(i) {
      n(i, function(e, s) {
        i.hasOwnProperty(s) && (t[s] = e)
      })
    }), t
  }, h = s.merge = function() {
    var t = Array.prototype.slice.call(arguments, 0);
    return t.unshift({}), a.apply(null, t)
  }, l = s.indexOf = function(t, i) {
    if (Array.prototype.indexOf)return t.indexOf(i);
    for (var e = 0; e < t.length; e++)if (t[e] === i)return e;
    return -1
  }, r = (s.where = function(t, i) {
    var e = [];
    return s.each(t, function(t) {
      i(t) && e.push(t)
    }), e
  }, s.findNextWhere = function(t, i, e) {
    e || (e = -1);
    for (var s = e + 1; s < t.length; s++) {
      var n = t[s];
      if (i(n))return n
    }
  }, s.findPreviousWhere = function(t, i, e) {
    e || (e = t.length);
    for (var s = e - 1; s >= 0; s--) {
      var n = t[s];
      if (i(n))return n
    }
  }, s.inherits = function(t) {
    var i = this, e = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
      return i.apply(this, arguments)
    }, s = function() {
      this.constructor = e
    };
    return s.prototype = i.prototype, e.prototype = new s, e.extend = r, t &&
    a(e.prototype, t), e.__super__ = i.prototype, e
  }), c = s.noop = function() {
  }, u = s.uid = function() {
    var t = 0;
    return function() {
      return "chart-" + t++
    }
  }(), d = s.warn = function(t) {
    window.console && "function" == typeof window.console.warn && console.warn(t)
  }, p = s.amd = "function" == typeof t.define && t.define.amd, f = s.isNumber = function(t) {
    return !isNaN(parseFloat(t)) && isFinite(t)
  }, g = s.max = function(t) {
    return Math.max.apply(Math, t)
  }, m = s.min = function(t) {
    return Math.min.apply(Math, t)
  }, v = (s.cap = function(t, i, e) {
    if (f(i)) {
      if (t > i)return i
    } else if (f(e) && e > t)return e;
    return t
  }, s.getDecimalPlaces = function(t) {
    return t % 1 !== 0 && f(t) ? t.toString().split(".")[1].length : 0
  }), x = s.radians = function(t) {
    return t * (Math.PI / 180)
  }, S = (s.getAngleFromPoint = function(t, i) {
    var e = i.x - t.x, s = i.y - t.y, n = Math.sqrt(e * e + s * s), o = 2 * Math.PI +
        Math.atan2(s, e);
    return 0 > e && 0 > s && (o += 2 * Math.PI), {angle: o, distance: n}
  }, s.aliasPixel = function(t) {
    return t % 2 === 0 ? 0 : .5
  }), y = (s.splineCurve = function(t, i, e, s) {
    var n = Math.sqrt(Math.pow(i.x - t.x, 2) + Math.pow(i.y - t.y, 2)), o = Math.sqrt(
        Math.pow(e.x - i.x, 2) + Math.pow(e.y - i.y, 2)), a = s * n / (n + o), h = s * o / (n + o);
    return {
      inner: {x: i.x - a * (e.x - t.x), y: i.y - a * (e.y - t.y)},
      outer: {x: i.x + h * (e.x - t.x), y: i.y + h * (e.y - t.y)}
    }
  }, s.calculateOrderOfMagnitude = function(t) {
    return Math.floor(Math.log(t) / Math.LN10)
  }), C = (s.calculateScaleRange = function(t, i, e, s, n) {
    var o = 2, a = Math.floor(i / (1.5 * e)), h = o >= a, l = g(t), r = m(t);
    l === r && (l += .5, r >= .5 && !s ? r -= .5 : l += .5);
    for (var c = Math.abs(l - r), u = y(c), d = Math.ceil(l / (1 * Math.pow(10, u))) *
        Math.pow(10, u), p = s ?
        0 :
    Math.floor(r / (1 * Math.pow(10, u))) * Math.pow(10, u), f = d - p, v = Math.pow(10,
        u), x = Math.round(f / v); (x > a || a > 2 * x) && !h;)if (x > a)v *= 2, x = Math.round(
        f / v), x % 1 !== 0 && (h = !0); else if (n && u >= 0) {
      if (v / 2 % 1 !== 0)break;
      v /= 2, x = Math.round(f / v)
    } else v /= 2, x = Math.round(f / v);
    return h && (x = o, v = f / x), {steps: x, stepValue: v, min: p, max: p + x * v}
  }, s.template = function(t, i) {
    function e(t, i) {
      var e = /\W/.test(t) ?
          new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" +
              t.replace(/[\r\t\n]/g, " ")
                  .split("<%")
                  .join("	")
                  .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                  .replace(/\t=(.*?)%>/g, "',$1,'")
                  .split("	")
                  .join("');")
                  .split("%>")
                  .join("p.push('")
                  .split("\r")
                  .join("\\'") + "');}return p.join('');") :
          s[t] = s[t];
      return i ? e(i) : e
    }

    if (t instanceof Function)return t(i);
    var s = {};
    return e(t, i)
  }), b = (s.generateLabels = function(t, i, e, s) {
    var o = new Array(i);
    return labelTemplateString && n(o, function(i, n) {
      o[n] = C(t, {value: e + s * (n + 1)})
    }), o
  }, s.easingEffects = {
    linear: function(t) {
      return t
    }, easeInQuad: function(t) {
      return t * t
    }, easeOutQuad: function(t) {
      return -1 * t * (t - 2)
    }, easeInOutQuad: function(t) {
      return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1)
    }, easeInCubic: function(t) {
      return t * t * t
    }, easeOutCubic: function(t) {
      return 1 * ((t = t / 1 - 1) * t * t + 1)
    }, easeInOutCubic: function(t) {
      return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
    }, easeInQuart: function(t) {
      return t * t * t * t
    }, easeOutQuart: function(t) {
      return -1 * ((t = t / 1 - 1) * t * t * t - 1)
    }, easeInOutQuart: function(t) {
      return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)
    }, easeInQuint: function(t) {
      return 1 * (t /= 1) * t * t * t * t
    }, easeOutQuint: function(t) {
      return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
    }, easeInOutQuint: function(t) {
      return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
    }, easeInSine: function(t) {
      return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
    }, easeOutSine: function(t) {
      return 1 * Math.sin(t / 1 * (Math.PI / 2))
    }, easeInOutSine: function(t) {
      return -0.5 * (Math.cos(Math.PI * t / 1) - 1)
    }, easeInExpo: function(t) {
      return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
    }, easeOutExpo: function(t) {
      return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
    }, easeInOutExpo: function(t) {
      return 0 === t ?
          0 :
          1 === t ?
              1 :
              (t /= .5) < 1 ?
              .5 * Math.pow(2, 10 * (t - 1)) :
              .5 * (-Math.pow(2, -10 * --t) + 2)
    }, easeInCirc: function(t) {
      return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
    }, easeOutCirc: function(t) {
      return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
    }, easeInOutCirc: function(t) {
      return (t /= .5) < 1 ?
      -0.5 * (Math.sqrt(1 - t * t) - 1) :
      .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
    }, easeInElastic: function(t) {
      var i = 1.70158, e = 0, s = 1;
      return 0 === t ?
          0 :
          1 == (t /= 1) ?
              1 :
              (e || (e = .3), s < Math.abs(1) ?
                  (s = 1, i = e / 4) :
                  i = e / (2 * Math.PI) * Math.asin(1 / s), -(s * Math.pow(2, 10 * (t -= 1)) *
              Math.sin(2 * (1 * t - i) * Math.PI / e)))
    }, easeOutElastic: function(t) {
      var i = 1.70158, e = 0, s = 1;
      return 0 === t ?
          0 :
          1 == (t /= 1) ?
              1 :
              (e || (e = .3), s < Math.abs(1) ?
                  (s = 1, i = e / 4) :
                  i = e / (2 * Math.PI) * Math.asin(1 / s), s * Math.pow(2, -10 * t) *
              Math.sin(2 * (1 * t - i) * Math.PI / e) + 1)
    }, easeInOutElastic: function(t) {
      var i = 1.70158, e = 0, s = 1;
      return 0 === t ?
          0 :
          2 == (t /= .5) ?
              1 :
              (e || (e = .3 * 1.5), s < Math.abs(1) ?
                  (s = 1, i = e / 4) :
                  i = e / (2 * Math.PI) * Math.asin(1 / s), 1 > t ?
              -.5 * s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - i) * Math.PI / e) :
              s * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (1 * t - i) * Math.PI / e) * .5 + 1)
    }, easeInBack: function(t) {
      var i = 1.70158;
      return 1 * (t /= 1) * t * ((i + 1) * t - i)
    }, easeOutBack: function(t) {
      var i = 1.70158;
      return 1 * ((t = t / 1 - 1) * t * ((i + 1) * t + i) + 1)
    }, easeInOutBack: function(t) {
      var i = 1.70158;
      return (t /= .5) < 1 ?
      .5 * t * t * (((i *= 1.525) + 1) * t - i) :
      .5 * ((t -= 2) * t * (((i *= 1.525) + 1) * t + i) + 2)
    }, easeInBounce: function(t) {
      return 1 - b.easeOutBounce(1 - t)
    }, easeOutBounce: function(t) {
      return (t /= 1) < 1 / 2.75 ?
      7.5625 * t * t :
          2 / 2.75 > t ?
          1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) :
              2.5 / 2.75 > t ?
              1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) :
              1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
    }, easeInOutBounce: function(t) {
      return .5 > t ? .5 * b.easeInBounce(2 * t) : .5 * b.easeOutBounce(2 * t - 1) + .5
    }
  }), w = s.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame || function(t) {
          return window.setTimeout(t, 1e3 / 60)
        }
  }(), P = (s.cancelAnimFrame = function() {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame || window.oCancelAnimationFrame ||
        window.msCancelAnimationFrame || function(t) {
          return window.clearTimeout(t, 1e3 / 60)
        }
  }(), s.animationLoop = function(t, i, e, s, n, o) {
    var a = 0, h = b[e] || b.linear, l = function() {
      a++;
      var e = a / i, r = h(e);
      t.call(o, r, e, a), s.call(o, r, e), i > a ? o.animationFrame = w(l) : n.apply(o)
    };
    w(l)
  }, s.getRelativePosition = function(t) {
    var i, e, s = t.originalEvent || t, n = t.currentTarget ||
        t.srcElement, o = n.getBoundingClientRect();
    return s.touches ?
        (i = s.touches[0].clientX - o.left, e = s.touches[0].clientY - o.top) :
        (i = s.clientX - o.left, e = s.clientY - o.top), {x: i, y: e}
  }, s.addEvent = function(t, i, e) {
    t.addEventListener ?
        t.addEventListener(i, e) :
        t.attachEvent ?
            t.attachEvent("on" + i, e) :
            t["on" + i] = e
  }), L = s.removeEvent = function(t, i, e) {
    t.removeEventListener ?
        t.removeEventListener(i, e, !1) :
        t.detachEvent ?
            t.detachEvent("on" + i, e) :
            t["on" + i] = c
  }, k = (s.bindEvents = function(t, i, e) {
    t.events || (t.events = {}), n(i, function(i) {
      t.events[i] = function() {
        e.apply(t, arguments)
      }, P(t.chart.canvas, i, t.events[i])
    })
  }, s.unbindEvents = function(t, i) {
    n(i, function(i, e) {
      L(t.chart.canvas, e, i)
    })
  }), F = s.getMaximumWidth = function(t) {
    var i = t.parentNode;
    return i.clientWidth
  }, R = s.getMaximumHeight = function(t) {
    var i = t.parentNode;
    return i.clientHeight
  }, A = (s.getMaximumSize = s.getMaximumWidth, s.retinaScale = function(t) {
    var i = t.ctx, e = t.canvas.width, s = t.canvas.height;
    window.devicePixelRatio &&
    (i.canvas.style.width = e + "px", i.canvas.style.height = s + "px", i.canvas.height = s *
        window.devicePixelRatio, i.canvas.width = e * window.devicePixelRatio, i.scale(
        window.devicePixelRatio, window.devicePixelRatio))
  }), T = s.clear = function(t) {
    t.ctx.clearRect(0, 0, t.width, t.height)
  }, M = s.fontString = function(t, i, e) {
    return i + " " + t + "px " + e
  }, W = s.longestText = function(t, i, e) {
    t.font = i;
    var s = 0;
    return n(e, function(i) {
      var e = t.measureText(i).width;
      s = e > s ? e : s
    }), s
  }, z = s.drawRoundedRectangle = function(t, i, e, s, n, o) {
    t.beginPath(), t.moveTo(i + o, e), t.lineTo(i + s - o, e), t.quadraticCurveTo(i + s, e, i + s,
        e + o), t.lineTo(i + s, e + n - o), t.quadraticCurveTo(i + s, e + n, i + s - o,
        e + n), t.lineTo(i + o, e + n), t.quadraticCurveTo(i, e + n, i, e + n - o), t.lineTo(i,
        e + o), t.quadraticCurveTo(i, e, i + o, e), t.closePath()
  };
  e.instances = {}, e.Type = function(t, i, s) {
    this.options = i, this.chart = s, this.id = u(), e.instances[this.id] = this, i.responsive &&
    this.resize(), this.initialize.call(this, t)
  }, a(e.Type.prototype, {
    initialize: function() {
      return this
    }, clear: function() {
      return T(this.chart), this
    }, stop: function() {
      return s.cancelAnimFrame.call(t, this.animationFrame), this
    }, resize: function(t) {
      this.stop();
      var i = this.chart.canvas, e = F(this.chart.canvas), s = this.options.maintainAspectRatio ?
      e / this.chart.aspectRatio :
          R(this.chart.canvas);
      return i.width = this.chart.width = e, i.height = this.chart.height = s, A(
          this.chart), "function" == typeof t &&
      t.apply(this, Array.prototype.slice.call(arguments, 1)), this
    }, reflow: c, render: function(t) {
      return t && this.reflow(), this.options.animation && !t ?
          s.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing,
              this.options.onAnimationProgress, this.options.onAnimationComplete, this) :
          (this.draw(), this.options.onAnimationComplete.call(this)), this
    }, generateLegend: function() {
      return C(this.options.legendTemplate, this)
    }, destroy: function() {
      this.clear(), k(this, this.events), delete e.instances[this.id]
    }, showTooltip: function(t, i) {
      "undefined" == typeof this.activeElements && (this.activeElements = []);
      var o = function(t) {
        var i = !1;
        return t.length !== this.activeElements.length ? i = !0 : (n(t, function(t, e) {
          t !== this.activeElements[e] && (i = !0)
        }, this), i)
      }.call(this, t);
      if (o || i) {
        if (this.activeElements = t, this.draw(), t.length > 0)if (this.datasets &&
            this.datasets.length > 1) {
          for (var a, h, r = this.datasets.length - 1; r >= 0 &&
          (a = this.datasets[r].points || this.datasets[r].bars || this.datasets[r].segments, h = l(
              a, t[0]), -1 === h); r--);
          var c = [], u = [], d = function() {
            var t, i, e, n, o, a = [], l = [], r = [];
            return s.each(this.datasets, function(i) {
              t = i.points || i.bars || i.segments, t[h] && t[h].hasValue() && a.push(t[h])
            }), s.each(a, function(t) {
              l.push(t.x), r.push(t.y), c.push(
                  s.template(this.options.multiTooltipTemplate, t)), u.push({
                fill: t._saved.fillColor || t.fillColor,
                stroke: t._saved.strokeColor || t.strokeColor
              })
            }, this), o = m(r), e = g(r), n = m(l), i = g(l), {
              x: n > this.chart.width / 2 ? n : i,
              y: (o + e) / 2
            }
          }.call(this, h);
          new e.MultiTooltip({
            x: d.x,
            y: d.y,
            xPadding: this.options.tooltipXPadding,
            yPadding: this.options.tooltipYPadding,
            xOffset: this.options.tooltipXOffset,
            fillColor: this.options.tooltipFillColor,
            textColor: this.options.tooltipFontColor,
            fontFamily: this.options.tooltipFontFamily,
            fontStyle: this.options.tooltipFontStyle,
            fontSize: this.options.tooltipFontSize,
            titleTextColor: this.options.tooltipTitleFontColor,
            titleFontFamily: this.options.tooltipTitleFontFamily,
            titleFontStyle: this.options.tooltipTitleFontStyle,
            titleFontSize: this.options.tooltipTitleFontSize,
            cornerRadius: this.options.tooltipCornerRadius,
            labels: c,
            legendColors: u,
            legendColorBackground: this.options.multiTooltipKeyBackground,
            title: t[0].label,
            chart: this.chart,
            ctx: this.chart.ctx
          }).draw()
        } else n(t, function(t) {
          var i = t.tooltipPosition();
          new e.Tooltip({
            x: Math.round(i.x),
            y: Math.round(i.y),
            xPadding: this.options.tooltipXPadding,
            yPadding: this.options.tooltipYPadding,
            fillColor: this.options.tooltipFillColor,
            textColor: this.options.tooltipFontColor,
            fontFamily: this.options.tooltipFontFamily,
            fontStyle: this.options.tooltipFontStyle,
            fontSize: this.options.tooltipFontSize,
            caretHeight: this.options.tooltipCaretSize,
            cornerRadius: this.options.tooltipCornerRadius,
            text: C(this.options.tooltipTemplate, t),
            chart: this.chart
          }).draw()
        }, this);
        return this
      }
    }, toBase64Image: function() {
      return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
    }
  }), e.Type.extend = function(t) {
    var i = this, s = function() {
      return i.apply(this, arguments)
    };
    if (s.prototype = o(i.prototype), a(s.prototype, t), s.extend = e.Type.extend, t.name ||
        i.prototype.name) {
      var n = t.name || i.prototype.name, l = e.defaults[i.prototype.name] ?
          o(e.defaults[i.prototype.name]) :
      {};
      e.defaults[n] = a(l, t.defaults), e.types[n] = s, e.prototype[n] = function(t, i) {
        var o = h(e.defaults.global, e.defaults[n], i || {});
        return new s(t, o, this)
      }
    } else d("Name not provided for this chart, so it hasn't been registered");
    return i
  }, e.Element = function(t) {
    a(this, t), this.initialize.apply(this, arguments), this.save()
  }, a(e.Element.prototype, {
    initialize: function() {
    }, restore: function(t) {
      return t ? n(t, function(t) {
        this[t] = this._saved[t]
      }, this) : a(this, this._saved), this
    }, save: function() {
      return this._saved = o(this), delete this._saved._saved, this
    }, update: function(t) {
      return n(t, function(t, i) {
        this._saved[i] = this[i], this[i] = t
      }, this), this
    }, transition: function(t, i) {
      return n(t, function(t, e) {
        this[e] = (t - this._saved[e]) * i + this._saved[e]
      }, this), this
    }, tooltipPosition: function() {
      return {x: this.x, y: this.y}
    }, hasValue: function() {
      return f(this.value)
    }
  }), e.Element.extend = r, e.Point = e.Element.extend({
    display: !0, inRange: function(t, i) {
      var e = this.hitDetectionRadius + this.radius;
      return Math.pow(t - this.x, 2) + Math.pow(i - this.y, 2) < Math.pow(e, 2)
    }, draw: function() {
      if (this.display) {
        var t = this.ctx;
        t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 *
            Math.PI), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.stroke()
      }
    }
  }), e.Arc = e.Element.extend({
    inRange: function(t, i) {
      var e = s.getAngleFromPoint(this, {x: t, y: i}), n = e.angle >= this.startAngle &&
          e.angle <= this.endAngle, o = e.distance >= this.innerRadius &&
          e.distance <= this.outerRadius;
      return n && o
    }, tooltipPosition: function() {
      var t = this.startAngle + (this.endAngle - this.startAngle) / 2, i = (this.outerRadius -
          this.innerRadius) / 2 + this.innerRadius;
      return {x: this.x + Math.cos(t) * i, y: this.y + Math.sin(t) * i}
    }, draw: function(t) {
      var i = this.ctx;
      i.beginPath(), i.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), i.arc(
          this.x, this.y, this.innerRadius, this.endAngle, this.startAngle,
          !0), i.closePath(), i.strokeStyle = this.strokeColor, i.lineWidth = this.strokeWidth, i.fillStyle = this.fillColor, i.fill(), i.lineJoin = "bevel", this.showStroke &&
      i.stroke()
    }
  }), e.Rectangle = e.Element.extend({
    draw: function() {
      var t = this.ctx, i = this.width / 2, e = this.x - i, s = this.x + i, n = this.base -
          (this.base - this.y), o = this.strokeWidth / 2;
      this.showStroke &&
      (e += o, s -= o, n += o), t.beginPath(), t.fillStyle = this.fillColor, t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(
          e, this.base), t.lineTo(e, n), t.lineTo(s, n), t.lineTo(s,
          this.base), t.fill(), this.showStroke && t.stroke()
    }, height: function() {
      return this.base - this.y
    }, inRange: function(t, i) {
      return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && i >= this.y &&
          i <= this.base
    }
  }), e.Tooltip = e.Element.extend({
    draw: function() {
      var t = this.chart.ctx;
      t.font = M(this.fontSize, this.fontStyle,
          this.fontFamily), this.xAlign = "center", this.yAlign = "above";
      var i = 2, e = t.measureText(this.text).width + 2 * this.xPadding, s = this.fontSize +
          2 * this.yPadding, n = s + this.caretHeight + i;
      this.x + e / 2 > this.chart.width ?
          this.xAlign = "left" :
      this.x - e / 2 < 0 && (this.xAlign = "right"), this.y - n < 0 && (this.yAlign = "below");
      var o = this.x - e / 2, a = this.y - n;
      switch (t.fillStyle = this.fillColor, this.yAlign) {
        case"above":
          t.beginPath(), t.moveTo(this.x, this.y - i), t.lineTo(this.x + this.caretHeight,
              this.y - (i + this.caretHeight)), t.lineTo(this.x - this.caretHeight,
              this.y - (i + this.caretHeight)), t.closePath(), t.fill();
          break;
        case"below":
          a = this.y + i + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + i), t.lineTo(
              this.x + this.caretHeight, this.y + i + this.caretHeight), t.lineTo(
              this.x - this.caretHeight, this.y + i + this.caretHeight), t.closePath(), t.fill()
      }
      switch (this.xAlign) {
        case"left":
          o = this.x - e + (this.cornerRadius + this.caretHeight);
          break;
        case"right":
          o = this.x - (this.cornerRadius + this.caretHeight)
      }
      z(t, o, a, e, s,
          this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", t.textBaseline = "middle", t.fillText(
          this.text, o + e / 2, a + s / 2)
    }
  }), e.MultiTooltip = e.Element.extend({
    initialize: function() {
      this.font = M(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = M(
          this.titleFontSize, this.titleFontStyle,
          this.titleFontFamily), this.height = this.labels.length * this.fontSize +
          (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding +
          1.5 * this.titleFontSize, this.ctx.font = this.titleFont;
      var t = this.ctx.measureText(this.title).width, i = W(this.ctx, this.font, this.labels) +
          this.fontSize + 3, e = g([i, t]);
      this.width = e + 2 * this.xPadding;
      var s = this.height / 2;
      this.y - s < 0 ?
          this.y = s :
      this.y + s > this.chart.height && (this.y = this.chart.height - s), this.x >
      this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
    }, getLineHeight: function(t) {
      var i = this.y - this.height / 2 + this.yPadding, e = t - 1;
      return 0 === t ?
      i + this.titleFontSize / 2 :
      i + (1.5 * this.fontSize * e + this.fontSize / 2) + 1.5 * this.titleFontSize
    }, draw: function() {
      z(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
      var t = this.ctx;
      t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(
          this.title, this.x + this.xPadding, this.getLineHeight(0)), t.font = this.font, s.each(
          this.labels, function(i, e) {
            t.fillStyle = this.textColor, t.fillText(i, this.x + this.xPadding + this.fontSize + 3,
                this.getLineHeight(e + 1)), t.fillStyle = this.legendColorBackground, t.fillRect(
                this.x + this.xPadding, this.getLineHeight(e + 1) - this.fontSize / 2,
                this.fontSize, this.fontSize), t.fillStyle = this.legendColors[e].fill, t.fillRect(
                this.x + this.xPadding, this.getLineHeight(e + 1) - this.fontSize / 2,
                this.fontSize, this.fontSize)
          }, this)
    }
  }), e.Scale = e.Element.extend({
    initialize: function() {
      this.fit()
    }, buildYLabels: function() {
      this.yLabels = [];
      for (var t = v(this.stepValue), i = 0; i <= this.steps; i++)this.yLabels.push(
          C(this.templateString, {value: (this.min + i * this.stepValue).toFixed(t)}));
      this.yLabelWidth = this.display && this.showLabels ? W(this.ctx, this.font, this.yLabels) : 0
    }, addXLabel: function(t) {
      this.xLabels.push(t), this.valuesCount++, this.fit()
    }, removeXLabel: function() {
      this.xLabels.shift(), this.valuesCount--, this.fit()
    }, fit: function() {
      this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ?
      this.height - 1.5 * this.fontSize - 5 :
          this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
      var t, i = this.endPoint - this.startPoint;
      for (this.calculateYRange(i), this.buildYLabels(), this.calculateXLabelRotation(); i >
      this.endPoint - this.startPoint;)i = this.endPoint -
          this.startPoint, t = this.yLabelWidth, this.calculateYRange(i), this.buildYLabels(), t <
      this.yLabelWidth && this.calculateXLabelRotation()
    }, calculateXLabelRotation: function() {
      this.ctx.font = this.font;
      var t, i, e = this.ctx.measureText(this.xLabels[0]).width, s = this.ctx.measureText(
          this.xLabels[this.xLabels.length - 1]).width;
      if (this.xScalePaddingRight = s / 2 + 3, this.xScalePaddingLeft = e / 2 >
          this.yLabelWidth + 10 ?
          e / 2 :
          this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
        var n, o = W(this.ctx, this.font, this.xLabels);
        this.xLabelWidth = o;
        for (var a = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth >
        a && 0 === this.xLabelRotation ||
        this.xLabelWidth > a && this.xLabelRotation <= 90 && this.xLabelRotation > 0;)n = Math.cos(
            x(this.xLabelRotation)), t = n * e, i = n * s, t + this.fontSize / 2 >
        this.yLabelWidth + 8 &&
        (this.xScalePaddingLeft = t + this.fontSize / 2), this.xScalePaddingRight = this.fontSize /
            2, this.xLabelRotation++, this.xLabelWidth = n * o;
        this.xLabelRotation > 0 && (this.endPoint -= Math.sin(x(this.xLabelRotation)) * o + 3)
      } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
    }, calculateYRange: c, drawingArea: function() {
      return this.startPoint - this.endPoint
    }, calculateY: function(t) {
      var i = this.drawingArea() / (this.min - this.max);
      return this.endPoint - i * (t - this.min)
    }, calculateX: function(t) {
      var i = (this.xLabelRotation > 0, this.width -
      (this.xScalePaddingLeft + this.xScalePaddingRight)), e = i /
          (this.valuesCount - (this.offsetGridLines ? 0 : 1)), s = e * t + this.xScalePaddingLeft;
      return this.offsetGridLines && (s += e / 2), Math.round(s)
    }, update: function(t) {
      s.extend(this, t), this.fit()
    }, draw: function() {
      var t = this.ctx, i = (this.endPoint - this.startPoint) / this.steps, e = Math.round(
          this.xScalePaddingLeft);
      this.display &&
      (t.fillStyle = this.textColor, t.font = this.font, n(this.yLabels, function(n, o) {
        var a = this.endPoint - i * o, h = Math.round(a);
        t.textAlign = "right", t.textBaseline = "middle", this.showLabels &&
        t.fillText(n, e - 10, a), t.beginPath(), o > 0 ?
            (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) :
            (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), h += s.aliasPixel(
            t.lineWidth), t.moveTo(e, h), t.lineTo(this.width,
            h), t.stroke(), t.closePath(), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(
            e - 5, h), t.lineTo(e, h), t.stroke(), t.closePath()
      }, this), n(this.xLabels, function(i, e) {
        var s = this.calculateX(e) + S(this.lineWidth), n = this.calculateX(
                e - (this.offsetGridLines ? .5 : 0)) + S(this.lineWidth), o = this.xLabelRotation >
            0;
        t.beginPath(), e > 0 ?
            (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) :
            (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), t.moveTo(n,
            this.endPoint), t.lineTo(n, this.startPoint -
            3), t.stroke(), t.closePath(), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(
            n, this.endPoint), t.lineTo(n,
            this.endPoint + 5), t.stroke(), t.closePath(), t.save(), t.translate(s,
            o ? this.endPoint + 12 : this.endPoint + 8), t.rotate(
            -1 * x(this.xLabelRotation)), t.font = this.font, t.textAlign = o ?
            "right" :
            "center", t.textBaseline = o ? "middle" : "top", t.fillText(i, 0, 0), t.restore()
      }, this))
    }
  }), e.RadialScale = e.Element.extend({
    initialize: function() {
      this.size = m([this.height, this.width]), this.drawingArea = this.display ?
      this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) :
      this.size / 2
    }, calculateCenterOffset: function(t) {
      var i = this.drawingArea / (this.max - this.min);
      return (t - this.min) * i
    }, update: function() {
      this.lineArc ?
          this.drawingArea = this.display ?
          this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) :
          this.size / 2 :
          this.setScaleSize(), this.buildYLabels()
    }, buildYLabels: function() {
      this.yLabels = [];
      for (var t = v(this.stepValue), i = 0; i <= this.steps; i++)this.yLabels.push(
          C(this.templateString, {value: (this.min + i * this.stepValue).toFixed(t)}))
    }, getCircumference: function() {
      return 2 * Math.PI / this.valuesCount
    }, setScaleSize: function() {
      var t, i, e, s, n, o, a, h, l, r, c, u, d = m(
          [this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]), p = this.width, g = 0;
      for (this.ctx.font = M(this.pointLabelFontSize, this.pointLabelFontStyle,
          this.pointLabelFontFamily), i = 0; i < this.valuesCount; i++)t = this.getPointPosition(i,
          d), e = this.ctx.measureText(C(this.templateString, {value: this.labels[i]})).width +
          5, 0 === i || i === this.valuesCount / 2 ?
          (s = e / 2, t.x + s > p && (p = t.x + s, n = i), t.x - s < g && (g = t.x - s, a = i)) :
          i < this.valuesCount / 2 ?
          t.x + e > p && (p = t.x + e, n = i) :
          i > this.valuesCount / 2 && t.x - e < g && (g = t.x - e, a = i);
      l = g, r = Math.ceil(p - this.width), o = this.getIndexAngle(n), h = this.getIndexAngle(
          a), c = r / Math.sin(o + Math.PI / 2), u = l / Math.sin(h + Math.PI / 2), c = f(c) ?
          c :
          0, u = f(u) ? u : 0, this.drawingArea = d - (u + c) / 2, this.setCenterPoint(u, c)
    }, setCenterPoint: function(t, i) {
      var e = this.width - i - this.drawingArea, s = t + this.drawingArea;
      this.xCenter = (s + e) / 2, this.yCenter = this.height / 2
    }, getIndexAngle: function(t) {
      var i = 2 * Math.PI / this.valuesCount;
      return t * i - Math.PI / 2
    }, getPointPosition: function(t, i) {
      var e = this.getIndexAngle(t);
      return {x: Math.cos(e) * i + this.xCenter, y: Math.sin(e) * i + this.yCenter}
    }, draw: function() {
      if (this.display) {
        var t = this.ctx;
        if (n(this.yLabels, function(i, e) {
              if (e > 0) {
                var s, n = e * (this.drawingArea / this.steps), o = this.yCenter - n;
                if (this.lineWidth >
                    0)if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc)t.beginPath(), t.arc(
                    this.xCenter, this.yCenter, n, 0,
                    2 * Math.PI), t.closePath(), t.stroke(); else {
                  t.beginPath();
                  for (var a = 0; a < this.valuesCount; a++)s = this.getPointPosition(a,
                      this.calculateCenterOffset(this.min + e * this.stepValue)), 0 === a ?
                      t.moveTo(s.x, s.y) :
                      t.lineTo(s.x, s.y);
                  t.closePath(), t.stroke()
                }
                if (this.showLabels) {
                  if (t.font = M(this.fontSize, this.fontStyle,
                          this.fontFamily), this.showLabelBackdrop) {
                    var h = t.measureText(i).width;
                    t.fillStyle = this.backdropColor, t.fillRect(
                        this.xCenter - h / 2 - this.backdropPaddingX,
                        o - this.fontSize / 2 - this.backdropPaddingY,
                        h + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                  }
                  t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, t.fillText(
                      i, this.xCenter, o)
                }
              }
            }, this), !this.lineArc) {
          t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
          for (var i = this.valuesCount - 1; i >= 0; i--) {
            if (this.angleLineWidth > 0) {
              var e = this.getPointPosition(i, this.calculateCenterOffset(this.max));
              t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(e.x,
                  e.y), t.stroke(), t.closePath()
            }
            var s = this.getPointPosition(i, this.calculateCenterOffset(this.max) + 5);
            t.font = M(this.pointLabelFontSize, this.pointLabelFontStyle,
                this.pointLabelFontFamily), t.fillStyle = this.pointLabelFontColor;
            var o = this.labels.length, a = this.labels.length / 2, h = a / 2, l = h > i ||
                i > o - h, r = i === h || i === o - h;
            t.textAlign = 0 === i ?
                "center" :
                i === a ?
                    "center" :
                    a > i ?
                        "left" :
                        "right", t.textBaseline = r ? "middle" : l ? "bottom" : "top", t.fillText(
                this.labels[i], s.x, s.y)
          }
        }
      }
    }
  }), s.addEvent(window, "resize", function() {
    var t;
    return function() {
      clearTimeout(t), t = setTimeout(function() {
        n(e.instances, function(t) {
          t.options.responsive && t.resize(t.render, !0)
        })
      }, 50)
    }
  }()), p ?
      define(function() {
        return e
      }) :
  "object" == typeof module && module.exports &&
  (module.exports = e), t.Chart = e, e.noConflict = function() {
    return t.Chart = i, e
  }
}).call(this), function() {
  "use strict";
  var t = this, i = t.Chart, e = i.helpers, s = {
    scaleBeginAtZero: !0,
    scaleShowGridLines: !0,
    scaleGridLineColor: "rgba(0,0,0,.05)",
    scaleGridLineWidth: 1,
    barShowStroke: !0,
    barStrokeWidth: 2,
    barValueSpacing: 5,
    barDatasetSpacing: 1,
    legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
  };
  i.Type.extend({
    name: "Bar", defaults: s, initialize: function(t) {
      var s = this.options;
      this.ScaleClass = i.Scale.extend({
        offsetGridLines: !0, calculateBarX: function(t, i, e) {
          var n = this.calculateBaseWidth(), o = this.calculateX(e) -
              n / 2, a = this.calculateBarWidth(t);
          return o + a * i + i * s.barDatasetSpacing + a / 2
        }, calculateBaseWidth: function() {
          return this.calculateX(1) - this.calculateX(0) - 2 * s.barValueSpacing
        }, calculateBarWidth: function(t) {
          var i = this.calculateBaseWidth() - (t - 1) * s.barDatasetSpacing;
          return i / t
        }
      }), this.datasets = [], this.options.showTooltips &&
      e.bindEvents(this, this.options.tooltipEvents, function(t) {
        var i = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
        this.eachBars(function(t) {
          t.restore(["fillColor", "strokeColor"])
        }), e.each(i, function(t) {
          t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
        }), this.showTooltip(i)
      }), this.BarClass = i.Rectangle.extend({
        strokeWidth: this.options.barStrokeWidth,
        showStroke: this.options.barShowStroke,
        ctx: this.chart.ctx
      }), e.each(t.datasets, function(i) {
        var s = {
          label: i.label || null,
          fillColor: i.fillColor,
          strokeColor: i.strokeColor,
          bars: []
        };
        this.datasets.push(s), e.each(i.data, function(e, n) {
          s.bars.push(new this.BarClass({
            value: e,
            label: t.labels[n],
            datasetLabel: i.label,
            strokeColor: i.strokeColor,
            fillColor: i.fillColor,
            highlightFill: i.highlightFill || i.fillColor,
            highlightStroke: i.highlightStroke || i.strokeColor
          }))
        }, this)
      }, this), this.buildScale(
          t.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(
          function(t, i, s) {
            e.extend(t, {
              width: this.scale.calculateBarWidth(this.datasets.length),
              x: this.scale.calculateBarX(this.datasets.length, s, i),
              y: this.scale.endPoint
            }), t.save()
          }, this), this.render()
    }, update: function() {
      this.scale.update(), e.each(this.activeElements, function(t) {
        t.restore(["fillColor", "strokeColor"])
      }), this.eachBars(function(t) {
        t.save()
      }), this.render()
    }, eachBars: function(t) {
      e.each(this.datasets, function(i, s) {
        e.each(i.bars, t, this, s)
      }, this)
    }, getBarsAtEvent: function(t) {
      for (var i, s = [], n = e.getRelativePosition(t), o = function(t) {
        s.push(t.bars[i])
      }, a = 0; a < this.datasets.length; a++)for (i = 0; i <
      this.datasets[a].bars.length; i++)if (this.datasets[a].bars[i].inRange(n.x,
              n.y))return e.each(this.datasets, o), s;
      return s
    }, buildScale: function(t) {
      var i = this, s = function() {
        var t = [];
        return i.eachBars(function(i) {
          t.push(i.value)
        }), t
      }, n = {
        templateString: this.options.scaleLabel,
        height: this.chart.height,
        width: this.chart.width,
        ctx: this.chart.ctx,
        textColor: this.options.scaleFontColor,
        fontSize: this.options.scaleFontSize,
        fontStyle: this.options.scaleFontStyle,
        fontFamily: this.options.scaleFontFamily,
        valuesCount: t.length,
        beginAtZero: this.options.scaleBeginAtZero,
        integersOnly: this.options.scaleIntegersOnly,
        calculateYRange: function(t) {
          var i = e.calculateScaleRange(s(), t, this.fontSize, this.beginAtZero, this.integersOnly);
          e.extend(this, i)
        },
        xLabels: t,
        font: e.fontString(this.options.scaleFontSize, this.options.scaleFontStyle,
            this.options.scaleFontFamily),
        lineWidth: this.options.scaleLineWidth,
        lineColor: this.options.scaleLineColor,
        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
        gridLineColor: this.options.scaleShowGridLines ?
            this.options.scaleGridLineColor :
            "rgba(0,0,0,0)",
        padding: this.options.showScale ?
            0 :
            this.options.barShowStroke ?
                this.options.barStrokeWidth :
                0,
        showLabels: this.options.scaleShowLabels,
        display: this.options.showScale
      };
      this.options.scaleOverride && e.extend(n, {
        calculateYRange: e.noop,
        steps: this.options.scaleSteps,
        stepValue: this.options.scaleStepWidth,
        min: this.options.scaleStartValue,
        max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
      }), this.scale = new this.ScaleClass(n)
    }, addData: function(t, i) {
      e.each(t, function(t, e) {
        this.datasets[e].bars.push(new this.BarClass({
          value: t,
          label: i,
          x: this.scale.calculateBarX(this.datasets.length, e, this.scale.valuesCount + 1),
          y: this.scale.endPoint,
          width: this.scale.calculateBarWidth(this.datasets.length),
          base: this.scale.endPoint,
          strokeColor: this.datasets[e].strokeColor,
          fillColor: this.datasets[e].fillColor
        }))
      }, this), this.scale.addXLabel(i), this.update()
    }, removeData: function() {
      this.scale.removeXLabel(), e.each(this.datasets, function(t) {
        t.bars.shift()
      }, this), this.update()
    }, reflow: function() {
      e.extend(this.BarClass.prototype, {y: this.scale.endPoint, base: this.scale.endPoint});
      var t = e.extend({height: this.chart.height, width: this.chart.width});
      this.scale.update(t)
    }, draw: function(t) {
      var i = t || 1;
      this.clear();
      this.chart.ctx;
      this.scale.draw(i), e.each(this.datasets, function(t, s) {
        e.each(t.bars, function(t, e) {
          t.hasValue() && (t.base = this.scale.endPoint, t.transition({
            x: this.scale.calculateBarX(this.datasets.length, s, e),
            y: this.scale.calculateY(t.value),
            width: this.scale.calculateBarWidth(this.datasets.length)
          }, i).draw())
        }, this)
      }, this)
    }
  })
}.call(this), function() {
  "use strict";
  var t = this, i = t.Chart, e = i.helpers, s = {
    segmentShowStroke: !0,
    segmentStrokeColor: "#fff",
    segmentStrokeWidth: 2,
    percentageInnerCutout: 50,
    animationSteps: 100,
    animationEasing: "easeOutBounce",
    animateRotate: !0,
    animateScale: !1,
    legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
  };
  i.Type.extend({
    name: "Doughnut", defaults: s, initialize: function(t) {
      this.segments = [], this.outerRadius = (e.min([this.chart.width, this.chart.height]) -
          this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = i.Arc.extend({
        ctx: this.chart.ctx,
        x: this.chart.width / 2,
        y: this.chart.height / 2
      }), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
        var i = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
        e.each(this.segments, function(t) {
          t.restore(["fillColor"])
        }), e.each(i, function(t) {
          t.fillColor = t.highlightColor
        }), this.showTooltip(i)
      }), this.calculateTotal(t), e.each(t, function(t, i) {
        this.addData(t, i, !0)
      }, this), this.render()
    }, getSegmentsAtEvent: function(t) {
      var i = [], s = e.getRelativePosition(t);
      return e.each(this.segments, function(t) {
        t.inRange(s.x, s.y) && i.push(t)
      }, this), i
    }, addData: function(t, i, e) {
      var s = i || this.segments.length;
      this.segments.splice(s, 0, new this.SegmentArc({
        value: t.value,
        outerRadius: this.options.animateScale ? 0 : this.outerRadius,
        innerRadius: this.options.animateScale ?
            0 :
        this.outerRadius / 100 * this.options.percentageInnerCutout,
        fillColor: t.color,
        highlightColor: t.highlight || t.color,
        showStroke: this.options.segmentShowStroke,
        strokeWidth: this.options.segmentStrokeWidth,
        strokeColor: this.options.segmentStrokeColor,
        startAngle: 1.5 * Math.PI,
        circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value),
        label: t.label
      })), e || (this.reflow(), this.update())
    }, calculateCircumference: function(t) {
      return 2 * Math.PI * (t / this.total)
    }, calculateTotal: function(t) {
      this.total = 0, e.each(t, function(t) {
        this.total += t.value
      }, this)
    }, update: function() {
      this.calculateTotal(this.segments), e.each(this.activeElements, function(t) {
        t.restore(["fillColor"])
      }), e.each(this.segments, function(t) {
        t.save()
      }), this.render()
    }, removeData: function(t) {
      var i = e.isNumber(t) ? t : this.segments.length - 1;
      this.segments.splice(i, 1), this.reflow(), this.update()
    }, reflow: function() {
      e.extend(this.SegmentArc.prototype,
          {x: this.chart.width / 2, y: this.chart.height / 2}), this.outerRadius = (e.min(
              [this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) /
          2, e.each(this.segments, function(t) {
        t.update({
          outerRadius: this.outerRadius,
          innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
        })
      }, this)
    }, draw: function(t) {
      var i = t ? t : 1;
      this.clear(), e.each(this.segments, function(t, e) {
        t.transition({
          circumference: this.calculateCircumference(t.value),
          outerRadius: this.outerRadius,
          innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
        }, i), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === e &&
        (t.startAngle = 1.5 * Math.PI), e < this.segments.length - 1 &&
        (this.segments[e + 1].startAngle = t.endAngle)
      }, this)
    }
  }), i.types.Doughnut.extend({name: "Pie", defaults: e.merge(s, {percentageInnerCutout: 0})})
}.call(this), function() {
  "use strict";
  var t = this, i = t.Chart, e = i.helpers, s = {
    scaleShowGridLines: !0,
    scaleGridLineColor: "rgba(0,0,0,.05)",
    scaleGridLineWidth: 1,
    bezierCurve: !0,
    bezierCurveTension: .4,
    pointDot: !0,
    pointDotRadius: 4,
    pointDotStrokeWidth: 1,
    pointHitDetectionRadius: 20,
    datasetStroke: !0,
    datasetStrokeWidth: 2,
    datasetFill: !0,
    legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
  };
  i.Type.extend({
    name: "Line", defaults: s, initialize: function(t) {
      this.PointClass = i.Point.extend({
        strokeWidth: this.options.pointDotStrokeWidth,
        radius: this.options.pointDotRadius,
        display: this.options.pointDot,
        hitDetectionRadius: this.options.pointHitDetectionRadius,
        ctx: this.chart.ctx,
        inRange: function(t) {
          return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
        }
      }), this.datasets = [], this.options.showTooltips &&
      e.bindEvents(this, this.options.tooltipEvents, function(t) {
        var i = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
        this.eachPoints(function(t) {
          t.restore(["fillColor", "strokeColor"])
        }), e.each(i, function(t) {
          t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
        }), this.showTooltip(i)
      }), e.each(t.datasets, function(i) {
        var s = {
          label: i.label || null,
          fillColor: i.fillColor,
          strokeColor: i.strokeColor,
          pointColor: i.pointColor,
          pointStrokeColor: i.pointStrokeColor,
          points: []
        };
        this.datasets.push(s), e.each(i.data, function(e, n) {
          s.points.push(new this.PointClass({
            value: e,
            label: t.labels[n],
            datasetLabel: i.label,
            strokeColor: i.pointStrokeColor,
            fillColor: i.pointColor,
            highlightFill: i.pointHighlightFill || i.pointColor,
            highlightStroke: i.pointHighlightStroke || i.pointStrokeColor
          }))
        }, this), this.buildScale(t.labels), this.eachPoints(function(t, i) {
          e.extend(t, {x: this.scale.calculateX(i), y: this.scale.endPoint}), t.save()
        }, this)
      }, this), this.render()
    }, update: function() {
      this.scale.update(), e.each(this.activeElements, function(t) {
        t.restore(["fillColor", "strokeColor"])
      }), this.eachPoints(function(t) {
        t.save()
      }), this.render()
    }, eachPoints: function(t) {
      e.each(this.datasets, function(i) {
        e.each(i.points, t, this)
      }, this)
    }, getPointsAtEvent: function(t) {
      var i = [], s = e.getRelativePosition(t);
      return e.each(this.datasets, function(t) {
        e.each(t.points, function(t) {
          t.inRange(s.x, s.y) && i.push(t)
        })
      }, this), i
    }, buildScale: function(t) {
      var s = this, n = function() {
        var t = [];
        return s.eachPoints(function(i) {
          t.push(i.value)
        }), t
      }, o = {
        templateString: this.options.scaleLabel,
        height: this.chart.height,
        width: this.chart.width,
        ctx: this.chart.ctx,
        textColor: this.options.scaleFontColor,
        fontSize: this.options.scaleFontSize,
        fontStyle: this.options.scaleFontStyle,
        fontFamily: this.options.scaleFontFamily,
        valuesCount: t.length,
        beginAtZero: this.options.scaleBeginAtZero,
        integersOnly: this.options.scaleIntegersOnly,
        calculateYRange: function(t) {
          var i = e.calculateScaleRange(n(), t, this.fontSize, this.beginAtZero, this.integersOnly);
          e.extend(this, i)
        },
        xLabels: t,
        font: e.fontString(this.options.scaleFontSize, this.options.scaleFontStyle,
            this.options.scaleFontFamily),
        lineWidth: this.options.scaleLineWidth,
        lineColor: this.options.scaleLineColor,
        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
        gridLineColor: this.options.scaleShowGridLines ?
            this.options.scaleGridLineColor :
            "rgba(0,0,0,0)",
        padding: this.options.showScale ?
            0 :
        this.options.pointDotRadius + this.options.pointDotStrokeWidth,
        showLabels: this.options.scaleShowLabels,
        display: this.options.showScale
      };
      this.options.scaleOverride && e.extend(o, {
        calculateYRange: e.noop,
        steps: this.options.scaleSteps,
        stepValue: this.options.scaleStepWidth,
        min: this.options.scaleStartValue,
        max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
      }), this.scale = new i.Scale(o)
    }, addData: function(t, i) {
      e.each(t, function(t, e) {
        this.datasets[e].points.push(new this.PointClass({
          value: t,
          label: i,
          x: this.scale.calculateX(this.scale.valuesCount + 1),
          y: this.scale.endPoint,
          strokeColor: this.datasets[e].pointStrokeColor,
          fillColor: this.datasets[e].pointColor
        }))
      }, this), this.scale.addXLabel(i), this.update()
    }, removeData: function() {
      this.scale.removeXLabel(), e.each(this.datasets, function(t) {
        t.points.shift()
      }, this), this.update()
    }, reflow: function() {
      var t = e.extend({height: this.chart.height, width: this.chart.width});
      this.scale.update(t)
    }, draw: function(t) {
      var i = t || 1;
      this.clear();
      var s = this.chart.ctx, n = function(t) {
        return null !== t.value
      }, o = function(t, i, s) {
        return e.findNextWhere(i, n, s) || t
      }, a = function(t, i, s) {
        return e.findPreviousWhere(i, n, s) || t
      };
      this.scale.draw(i), e.each(this.datasets, function(t) {
        var h = e.where(t.points, n);
        e.each(t.points, function(t, e) {
          t.hasValue() &&
          t.transition({y: this.scale.calculateY(t.value), x: this.scale.calculateX(e)}, i)
        }, this), this.options.bezierCurve && e.each(h, function(t, i) {
          var s = i > 0 && i < h.length - 1 ? this.options.bezierCurveTension : 0;
          t.controlPoints = e.splineCurve(a(t, h, i), t, o(t, h, i), s), t.controlPoints.outer.y >
          this.scale.endPoint ?
              t.controlPoints.outer.y = this.scale.endPoint :
          t.controlPoints.outer.y < this.scale.startPoint &&
          (t.controlPoints.outer.y = this.scale.startPoint), t.controlPoints.inner.y >
          this.scale.endPoint ?
              t.controlPoints.inner.y = this.scale.endPoint :
          t.controlPoints.inner.y < this.scale.startPoint &&
          (t.controlPoints.inner.y = this.scale.startPoint)
        }, this), s.lineWidth = this.options.datasetStrokeWidth, s.strokeStyle = t.strokeColor, s.beginPath(), e.each(
            h, function(t, i) {
              if (0 === i)s.moveTo(t.x, t.y); else if (this.options.bezierCurve) {
                var e = a(t, h, i);
                s.bezierCurveTo(e.controlPoints.outer.x, e.controlPoints.outer.y,
                    t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y)
              } else s.lineTo(t.x, t.y)
            }, this), s.stroke(), this.options.datasetFill && h.length > 0 &&
        (s.lineTo(h[h.length - 1].x, this.scale.endPoint), s.lineTo(h[0].x,
            this.scale.endPoint), s.fillStyle = t.fillColor, s.closePath(), s.fill()), e.each(h,
            function(t) {
              t.draw()
            })
      }, this)
    }
  })
}.call(this), function() {
  "use strict";
  var t = this, i = t.Chart, e = i.helpers, s = {
    scaleShowLabelBackdrop: !0,
    scaleBackdropColor: "rgba(255,255,255,0.75)",
    scaleBeginAtZero: !0,
    scaleBackdropPaddingY: 2,
    scaleBackdropPaddingX: 2,
    scaleShowLine: !0,
    segmentShowStroke: !0,
    segmentStrokeColor: "#fff",
    segmentStrokeWidth: 2,
    animationSteps: 100,
    animationEasing: "easeOutBounce",
    animateRotate: !0,
    animateScale: !1,
    legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
  };
  i.Type.extend({
    name: "PolarArea", defaults: s, initialize: function(t) {
      this.segments = [], this.SegmentArc = i.Arc.extend({
        showStroke: this.options.segmentShowStroke,
        strokeWidth: this.options.segmentStrokeWidth,
        strokeColor: this.options.segmentStrokeColor,
        ctx: this.chart.ctx,
        innerRadius: 0,
        x: this.chart.width / 2,
        y: this.chart.height / 2
      }), this.scale = new i.RadialScale({
        display: this.options.showScale,
        fontStyle: this.options.scaleFontStyle,
        fontSize: this.options.scaleFontSize,
        fontFamily: this.options.scaleFontFamily,
        fontColor: this.options.scaleFontColor,
        showLabels: this.options.scaleShowLabels,
        showLabelBackdrop: this.options.scaleShowLabelBackdrop,
        backdropColor: this.options.scaleBackdropColor,
        backdropPaddingY: this.options.scaleBackdropPaddingY,
        backdropPaddingX: this.options.scaleBackdropPaddingX,
        lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
        lineColor: this.options.scaleLineColor,
        lineArc: !0,
        width: this.chart.width,
        height: this.chart.height,
        xCenter: this.chart.width / 2,
        yCenter: this.chart.height / 2,
        ctx: this.chart.ctx,
        templateString: this.options.scaleLabel,
        valuesCount: t.length
      }), this.updateScaleRange(t), this.scale.update(), e.each(t, function(t, i) {
        this.addData(t, i, !0)
      }, this), this.options.showTooltips &&
      e.bindEvents(this, this.options.tooltipEvents, function(t) {
        var i = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
        e.each(this.segments, function(t) {
          t.restore(["fillColor"])
        }), e.each(i, function(t) {
          t.fillColor = t.highlightColor
        }), this.showTooltip(i)
      }), this.render()
    }, getSegmentsAtEvent: function(t) {
      var i = [], s = e.getRelativePosition(t);
      return e.each(this.segments, function(t) {
        t.inRange(s.x, s.y) && i.push(t)
      }, this), i
    }, addData: function(t, i, e) {
      var s = i || this.segments.length;
      this.segments.splice(s, 0, new this.SegmentArc({
        fillColor: t.color,
        highlightColor: t.highlight || t.color,
        label: t.label,
        value: t.value,
        outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value),
        circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
        startAngle: 1.5 * Math.PI
      })), e || (this.reflow(), this.update())
    }, removeData: function(t) {
      var i = e.isNumber(t) ? t : this.segments.length - 1;
      this.segments.splice(i, 1), this.reflow(), this.update()
    }, calculateTotal: function(t) {
      this.total = 0, e.each(t, function(t) {
        this.total += t.value
      }, this), this.scale.valuesCount = this.segments.length
    }, updateScaleRange: function(t) {
      var i = [];
      e.each(t, function(t) {
        i.push(t.value)
      });
      var s = this.options.scaleOverride ?
      {
        steps: this.options.scaleSteps,
        stepValue: this.options.scaleStepWidth,
        min: this.options.scaleStartValue,
        max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
      } :
          e.calculateScaleRange(i, e.min([this.chart.width, this.chart.height]) / 2,
              this.options.scaleFontSize, this.options.scaleBeginAtZero,
              this.options.scaleIntegersOnly);
      e.extend(this.scale, s, {
        size: e.min([this.chart.width, this.chart.height]),
        xCenter: this.chart.width / 2,
        yCenter: this.chart.height / 2
      })
    }, update: function() {
      this.calculateTotal(this.segments), e.each(this.segments, function(t) {
        t.save()
      }), this.render()
    }, reflow: function() {
      e.extend(this.SegmentArc.prototype,
          {x: this.chart.width / 2, y: this.chart.height / 2}), this.updateScaleRange(
          this.segments), this.scale.update(), e.extend(this.scale,
          {xCenter: this.chart.width / 2, yCenter: this.chart.height / 2}), e.each(this.segments,
          function(t) {
            t.update({outerRadius: this.scale.calculateCenterOffset(t.value)})
          }, this)
    }, draw: function(t) {
      var i = t || 1;
      this.clear(), e.each(this.segments, function(t, e) {
        t.transition({
          circumference: this.scale.getCircumference(),
          outerRadius: this.scale.calculateCenterOffset(t.value)
        }, i), t.endAngle = t.startAngle + t.circumference, 0 === e &&
        (t.startAngle = 1.5 * Math.PI), e < this.segments.length - 1 &&
        (this.segments[e + 1].startAngle = t.endAngle), t.draw()
      }, this), this.scale.draw()
    }
  })
}.call(this), function() {
  "use strict";
  var t = this, i = t.Chart, e = i.helpers;
  i.Type.extend({
    name: "Radar",
    defaults: {
      scaleShowLine: !0,
      angleShowLineOut: !0,
      scaleShowLabels: !1,
      scaleBeginAtZero: !0,
      angleLineColor: "rgba(0,0,0,.1)",
      angleLineWidth: 1,
      pointLabelFontFamily: "'Arial'",
      pointLabelFontStyle: "normal",
      pointLabelFontSize: 10,
      pointLabelFontColor: "#666",
      pointDot: !0,
      pointDotRadius: 3,
      pointDotStrokeWidth: 1,
      pointHitDetectionRadius: 20,
      datasetStroke: !0,
      datasetStrokeWidth: 2,
      datasetFill: !0,
      legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    },
    initialize: function(t) {
      this.PointClass = i.Point.extend({
        strokeWidth: this.options.pointDotStrokeWidth,
        radius: this.options.pointDotRadius,
        display: this.options.pointDot,
        hitDetectionRadius: this.options.pointHitDetectionRadius,
        ctx: this.chart.ctx
      }), this.datasets = [], this.buildScale(t), this.options.showTooltips &&
      e.bindEvents(this, this.options.tooltipEvents, function(t) {
        var i = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
        this.eachPoints(function(t) {
          t.restore(["fillColor", "strokeColor"])
        }), e.each(i, function(t) {
          t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
        }), this.showTooltip(i)
      }), e.each(t.datasets, function(i) {
        var s = {
          label: i.label || null,
          fillColor: i.fillColor,
          strokeColor: i.strokeColor,
          pointColor: i.pointColor,
          pointStrokeColor: i.pointStrokeColor,
          points: []
        };
        this.datasets.push(s), e.each(i.data, function(e, n) {
          var o;
          this.scale.animation ||
          (o = this.scale.getPointPosition(n, this.scale.calculateCenterOffset(e))), s.points.push(
              new this.PointClass({
                value: e,
                label: t.labels[n],
                datasetLabel: i.label,
                x: this.options.animation ? this.scale.xCenter : o.x,
                y: this.options.animation ? this.scale.yCenter : o.y,
                strokeColor: i.pointStrokeColor,
                fillColor: i.pointColor,
                highlightFill: i.pointHighlightFill || i.pointColor,
                highlightStroke: i.pointHighlightStroke || i.pointStrokeColor
              }))
        }, this)
      }, this), this.render()
    },
    eachPoints: function(t) {
      e.each(this.datasets, function(i) {
        e.each(i.points, t, this)
      }, this)
    },
    getPointsAtEvent: function(t) {
      var i = e.getRelativePosition(t), s = e.getAngleFromPoint(
          {x: this.scale.xCenter, y: this.scale.yCenter}, i), n = 2 * Math.PI /
          this.scale.valuesCount, o = Math.round((s.angle - 1.5 * Math.PI) / n), a = [];
      return (o >= this.scale.valuesCount || 0 > o) && (o = 0), s.distance <=
      this.scale.drawingArea && e.each(this.datasets, function(t) {
        a.push(t.points[o])
      }), a
    },
    buildScale: function(t) {
      this.scale = new i.RadialScale({
        display: this.options.showScale,
        fontStyle: this.options.scaleFontStyle,
        fontSize: this.options.scaleFontSize,
        fontFamily: this.options.scaleFontFamily,
        fontColor: this.options.scaleFontColor,
        showLabels: this.options.scaleShowLabels,
        showLabelBackdrop: this.options.scaleShowLabelBackdrop,
        backdropColor: this.options.scaleBackdropColor,
        backdropPaddingY: this.options.scaleBackdropPaddingY,
        backdropPaddingX: this.options.scaleBackdropPaddingX,
        lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
        lineColor: this.options.scaleLineColor,
        angleLineColor: this.options.angleLineColor,
        angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
        pointLabelFontColor: this.options.pointLabelFontColor,
        pointLabelFontSize: this.options.pointLabelFontSize,
        pointLabelFontFamily: this.options.pointLabelFontFamily,
        pointLabelFontStyle: this.options.pointLabelFontStyle,
        height: this.chart.height,
        width: this.chart.width,
        xCenter: this.chart.width / 2,
        yCenter: this.chart.height / 2,
        ctx: this.chart.ctx,
        templateString: this.options.scaleLabel,
        labels: t.labels,
        valuesCount: t.datasets[0].data.length
      }), this.scale.setScaleSize(), this.updateScaleRange(t.datasets), this.scale.buildYLabels()
    },
    updateScaleRange: function(t) {
      var i = function() {
        var i = [];
        return e.each(t, function(t) {
          t.data ? i = i.concat(t.data) : e.each(t.points, function(t) {
            i.push(t.value)
          })
        }), i
      }(), s = this.options.scaleOverride ?
      {
        steps: this.options.scaleSteps,
        stepValue: this.options.scaleStepWidth,
        min: this.options.scaleStartValue,
        max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
      } :
          e.calculateScaleRange(i, e.min([this.chart.width, this.chart.height]) / 2,
              this.options.scaleFontSize, this.options.scaleBeginAtZero,
              this.options.scaleIntegersOnly);
      e.extend(this.scale, s)
    },
    addData: function(t, i) {
      this.scale.valuesCount++, e.each(t, function(t, e) {
        var s = this.scale.getPointPosition(this.scale.valuesCount,
            this.scale.calculateCenterOffset(t));
        this.datasets[e].points.push(new this.PointClass({
          value: t,
          label: i,
          x: s.x,
          y: s.y,
          strokeColor: this.datasets[e].pointStrokeColor,
          fillColor: this.datasets[e].pointColor
        }))
      }, this), this.scale.labels.push(i), this.reflow(), this.update()
    },
    removeData: function() {
      this.scale.valuesCount--, this.scale.labels.shift(), e.each(this.datasets, function(t) {
        t.points.shift()
      }, this), this.reflow(), this.update()
    },
    update: function() {
      this.eachPoints(function(t) {
        t.save()
      }), this.reflow(), this.render()
    },
    reflow: function() {
      e.extend(this.scale, {
        width: this.chart.width,
        height: this.chart.height,
        size: e.min([this.chart.width, this.chart.height]),
        xCenter: this.chart.width / 2,
        yCenter: this.chart.height / 2
      }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
    },
    draw: function(t) {
      var i = t || 1, s = this.chart.ctx;
      this.clear(), this.scale.draw(), e.each(this.datasets, function(t) {
        e.each(t.points, function(t, e) {
          t.hasValue() &&
          t.transition(this.scale.getPointPosition(e, this.scale.calculateCenterOffset(t.value)), i)
        }, this), s.lineWidth = this.options.datasetStrokeWidth, s.strokeStyle = t.strokeColor, s.beginPath(), e.each(
            t.points, function(t, i) {
              0 === i ? s.moveTo(t.x, t.y) : s.lineTo(t.x, t.y)
            }, this), s.closePath(), s.stroke(), s.fillStyle = t.fillColor, s.fill(), e.each(
            t.points, function(t) {
              t.hasValue() && t.draw()
            })
      }, this)
    }
  })
}.call(this);
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
