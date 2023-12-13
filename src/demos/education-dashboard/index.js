(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };
  var __exportStar = (target, module, desc) => {
    __markAsModule(target);
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", {value: module, enumerable: true}), module);
  };

  // node_modules/jquery/dist/jquery.js
  var require_jquery = __commonJS((exports, module) => {
    /*!
     * jQuery JavaScript Library v3.4.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2019-05-01T21:04Z
     */
    (function(global2, factory) {
      "use strict";
      if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global2.document ? factory(global2, true) : function(w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return factory(w);
        };
      } else {
        factory(global2);
      }
    })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
      "use strict";
      var arr = [];
      var document2 = window2.document;
      var getProto = Object.getPrototypeOf;
      var slice = arr.slice;
      var concat = arr.concat;
      var push = arr.push;
      var indexOf2 = arr.indexOf;
      var class2type = {};
      var toString4 = class2type.toString;
      var hasOwn = class2type.hasOwnProperty;
      var fnToString = hasOwn.toString;
      var ObjectFunctionString = fnToString.call(Object);
      var support = {};
      var isFunction5 = function isFunction6(obj) {
        return typeof obj === "function" && typeof obj.nodeType !== "number";
      };
      var isWindow = function isWindow2(obj) {
        return obj != null && obj === obj.window;
      };
      var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
      };
      function DOMEval(code, node, doc) {
        doc = doc || document2;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) {
          for (i in preservedScriptAttributes) {
            val = node[i] || node.getAttribute && node.getAttribute(i);
            if (val) {
              script.setAttribute(i, val);
            }
          }
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
      }
      function toType2(obj) {
        if (obj == null) {
          return obj + "";
        }
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString4.call(obj)] || "object" : typeof obj;
      }
      var version = "3.4.1", jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context);
      }, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      jQuery.fn = jQuery.prototype = {
        jquery: version,
        constructor: jQuery,
        length: 0,
        toArray: function() {
          return slice.call(this);
        },
        get: function(num) {
          if (num == null) {
            return slice.call(this);
          }
          return num < 0 ? this[num + this.length] : this[num];
        },
        pushStack: function(elems) {
          var ret = jQuery.merge(this.constructor(), elems);
          ret.prevObject = this;
          return ret;
        },
        each: function(callback) {
          return jQuery.each(this, callback);
        },
        map: function(callback) {
          return this.pushStack(jQuery.map(this, function(elem, i) {
            return callback.call(elem, i, elem);
          }));
        },
        slice: function() {
          return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        eq: function(i) {
          var len = this.length, j = +i + (i < 0 ? len : 0);
          return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        push,
        sort: arr.sort,
        splice: arr.splice
      };
      jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone5, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
          deep = target;
          target = arguments[i] || {};
          i++;
        }
        if (typeof target !== "object" && !isFunction5(target)) {
          target = {};
        }
        if (i === length) {
          target = this;
          i--;
        }
        for (; i < length; i++) {
          if ((options = arguments[i]) != null) {
            for (name in options) {
              copy = options[name];
              if (name === "__proto__" || target === copy) {
                continue;
              }
              if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                src = target[name];
                if (copyIsArray && !Array.isArray(src)) {
                  clone5 = [];
                } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                  clone5 = {};
                } else {
                  clone5 = src;
                }
                copyIsArray = false;
                target[name] = jQuery.extend(deep, clone5, copy);
              } else if (copy !== void 0) {
                target[name] = copy;
              }
            }
          }
        }
        return target;
      };
      jQuery.extend({
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function(msg) {
          throw new Error(msg);
        },
        noop: function() {
        },
        isPlainObject: function(obj) {
          var proto4, Ctor;
          if (!obj || toString4.call(obj) !== "[object Object]") {
            return false;
          }
          proto4 = getProto(obj);
          if (!proto4) {
            return true;
          }
          Ctor = hasOwn.call(proto4, "constructor") && proto4.constructor;
          return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
          var name;
          for (name in obj) {
            return false;
          }
          return true;
        },
        globalEval: function(code, options) {
          DOMEval(code, {nonce: options && options.nonce});
        },
        each: function(obj, callback) {
          var length, i = 0;
          if (isArrayLike5(obj)) {
            length = obj.length;
            for (; i < length; i++) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          } else {
            for (i in obj) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          }
          return obj;
        },
        trim: function(text) {
          return text == null ? "" : (text + "").replace(rtrim, "");
        },
        makeArray: function(arr2, results) {
          var ret = results || [];
          if (arr2 != null) {
            if (isArrayLike5(Object(arr2))) {
              jQuery.merge(ret, typeof arr2 === "string" ? [arr2] : arr2);
            } else {
              push.call(ret, arr2);
            }
          }
          return ret;
        },
        inArray: function(elem, arr2, i) {
          return arr2 == null ? -1 : indexOf2.call(arr2, elem, i);
        },
        merge: function(first, second3) {
          var len = +second3.length, j = 0, i = first.length;
          for (; j < len; j++) {
            first[i++] = second3[j];
          }
          first.length = i;
          return first;
        },
        grep: function(elems, callback, invert) {
          var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
          for (; i < length; i++) {
            callbackInverse = !callback(elems[i], i);
            if (callbackInverse !== callbackExpect) {
              matches.push(elems[i]);
            }
          }
          return matches;
        },
        map: function(elems, callback, arg) {
          var length, value, i = 0, ret = [];
          if (isArrayLike5(elems)) {
            length = elems.length;
            for (; i < length; i++) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          } else {
            for (i in elems) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          }
          return concat.apply([], ret);
        },
        guid: 1,
        support
      });
      if (typeof Symbol === "function") {
        jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
      }
      jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
      });
      function isArrayLike5(obj) {
        var length = !!obj && "length" in obj && obj.length, type = toType2(obj);
        if (isFunction5(obj) || isWindow(obj)) {
          return false;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
      }
      var Sizzle = function(window3) {
        var i, support2, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document3, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(), preferredDoc = window3.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        }, hasOwn2 = {}.hasOwnProperty, arr2 = [], pop = arr2.pop, push_native = arr2.push, push2 = arr2.push, slice2 = arr2.slice, indexOf3 = function(list, elem) {
          var i2 = 0, len = list.length;
          for (; i2 < len; i2++) {
            if (list[i2] === elem) {
              return i2;
            }
          }
          return -1;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim2 = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
          ID: new RegExp("^#(" + identifier + ")"),
          CLASS: new RegExp("^\\.(" + identifier + ")"),
          TAG: new RegExp("^(" + identifier + "|[*])"),
          ATTR: new RegExp("^" + attributes),
          PSEUDO: new RegExp("^" + pseudos),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + booleans + ")$", "i"),
          needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rhtml2 = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"), funescape = function(_, escaped, escapedWhitespace) {
          var high = "0x" + escaped - 65536;
          return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
          if (asCodePoint) {
            if (ch === "\0") {
              return "\uFFFD";
            }
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
          }
          return "\\" + ch;
        }, unloadHandler = function() {
          setDocument();
        }, inDisabledFieldset = addCombinator(function(elem) {
          return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
        }, {dir: "parentNode", next: "legend"});
        try {
          push2.apply(arr2 = slice2.call(preferredDoc.childNodes), preferredDoc.childNodes);
          arr2[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
          push2 = {
            apply: arr2.length ? function(target, els) {
              push_native.apply(target, slice2.call(els));
            } : function(target, els) {
              var j = target.length, i2 = 0;
              while (target[j++] = els[i2++]) {
              }
              target.length = j - 1;
            }
          };
        }
        function Sizzle2(selector, context, results, seed) {
          var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
          results = results || [];
          if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
            return results;
          }
          if (!seed) {
            if ((context ? context.ownerDocument || context : preferredDoc) !== document3) {
              setDocument(context);
            }
            context = context || document3;
            if (documentIsHTML) {
              if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                if (m = match[1]) {
                  if (nodeType === 9) {
                    if (elem = context.getElementById(m)) {
                      if (elem.id === m) {
                        results.push(elem);
                        return results;
                      }
                    } else {
                      return results;
                    }
                  } else {
                    if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                      results.push(elem);
                      return results;
                    }
                  }
                } else if (match[2]) {
                  push2.apply(results, context.getElementsByTagName(selector));
                  return results;
                } else if ((m = match[3]) && support2.getElementsByClassName && context.getElementsByClassName) {
                  push2.apply(results, context.getElementsByClassName(m));
                  return results;
                }
              }
              if (support2.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                newSelector = selector;
                newContext = context;
                if (nodeType === 1 && rdescend.test(selector)) {
                  if (nid = context.getAttribute("id")) {
                    nid = nid.replace(rcssescape, fcssescape);
                  } else {
                    context.setAttribute("id", nid = expando);
                  }
                  groups = tokenize(selector);
                  i2 = groups.length;
                  while (i2--) {
                    groups[i2] = "#" + nid + " " + toSelector(groups[i2]);
                  }
                  newSelector = groups.join(",");
                  newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                }
                try {
                  push2.apply(results, newContext.querySelectorAll(newSelector));
                  return results;
                } catch (qsaError) {
                  nonnativeSelectorCache(selector, true);
                } finally {
                  if (nid === expando) {
                    context.removeAttribute("id");
                  }
                }
              }
            }
          }
          return select(selector.replace(rtrim2, "$1"), context, results, seed);
        }
        function createCache() {
          var keys6 = [];
          function cache(key, value) {
            if (keys6.push(key + " ") > Expr.cacheLength) {
              delete cache[keys6.shift()];
            }
            return cache[key + " "] = value;
          }
          return cache;
        }
        function markFunction(fn) {
          fn[expando] = true;
          return fn;
        }
        function assert(fn) {
          var el = document3.createElement("fieldset");
          try {
            return !!fn(el);
          } catch (e) {
            return false;
          } finally {
            if (el.parentNode) {
              el.parentNode.removeChild(el);
            }
            el = null;
          }
        }
        function addHandle(attrs, handler) {
          var arr3 = attrs.split("|"), i2 = arr3.length;
          while (i2--) {
            Expr.attrHandle[arr3[i2]] = handler;
          }
        }
        function siblingCheck(a, b) {
          var cur = b && a, diff3 = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
          if (diff3) {
            return diff3;
          }
          if (cur) {
            while (cur = cur.nextSibling) {
              if (cur === b) {
                return -1;
              }
            }
          }
          return a ? 1 : -1;
        }
        function createInputPseudo(type) {
          return function(elem) {
            var name = elem.nodeName.toLowerCase();
            return name === "input" && elem.type === type;
          };
        }
        function createButtonPseudo(type) {
          return function(elem) {
            var name = elem.nodeName.toLowerCase();
            return (name === "input" || name === "button") && elem.type === type;
          };
        }
        function createDisabledPseudo(disabled) {
          return function(elem) {
            if ("form" in elem) {
              if (elem.parentNode && elem.disabled === false) {
                if ("label" in elem) {
                  if ("label" in elem.parentNode) {
                    return elem.parentNode.disabled === disabled;
                  } else {
                    return elem.disabled === disabled;
                  }
                }
                return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
              }
              return elem.disabled === disabled;
            } else if ("label" in elem) {
              return elem.disabled === disabled;
            }
            return false;
          };
        }
        function createPositionalPseudo(fn) {
          return markFunction(function(argument) {
            argument = +argument;
            return markFunction(function(seed, matches2) {
              var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
              while (i2--) {
                if (seed[j = matchIndexes[i2]]) {
                  seed[j] = !(matches2[j] = seed[j]);
                }
              }
            });
          });
        }
        function testContext(context) {
          return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        support2 = Sizzle2.support = {};
        isXML = Sizzle2.isXML = function(elem) {
          var namespace = elem.namespaceURI, docElem2 = (elem.ownerDocument || elem).documentElement;
          return !rhtml2.test(namespace || docElem2 && docElem2.nodeName || "HTML");
        };
        setDocument = Sizzle2.setDocument = function(node) {
          var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
          if (doc === document3 || doc.nodeType !== 9 || !doc.documentElement) {
            return document3;
          }
          document3 = doc;
          docElem = document3.documentElement;
          documentIsHTML = !isXML(document3);
          if (preferredDoc !== document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
            if (subWindow.addEventListener) {
              subWindow.addEventListener("unload", unloadHandler, false);
            } else if (subWindow.attachEvent) {
              subWindow.attachEvent("onunload", unloadHandler);
            }
          }
          support2.attributes = assert(function(el) {
            el.className = "i";
            return !el.getAttribute("className");
          });
          support2.getElementsByTagName = assert(function(el) {
            el.appendChild(document3.createComment(""));
            return !el.getElementsByTagName("*").length;
          });
          support2.getElementsByClassName = rnative.test(document3.getElementsByClassName);
          support2.getById = assert(function(el) {
            docElem.appendChild(el).id = expando;
            return !document3.getElementsByName || !document3.getElementsByName(expando).length;
          });
          if (support2.getById) {
            Expr.filter["ID"] = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                return elem.getAttribute("id") === attrId;
              };
            };
            Expr.find["ID"] = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var elem = context.getElementById(id);
                return elem ? [elem] : [];
              }
            };
          } else {
            Expr.filter["ID"] = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                return node2 && node2.value === attrId;
              };
            };
            Expr.find["ID"] = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var node2, i2, elems, elem = context.getElementById(id);
                if (elem) {
                  node2 = elem.getAttributeNode("id");
                  if (node2 && node2.value === id) {
                    return [elem];
                  }
                  elems = context.getElementsByName(id);
                  i2 = 0;
                  while (elem = elems[i2++]) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                  }
                }
                return [];
              }
            };
          }
          Expr.find["TAG"] = support2.getElementsByTagName ? function(tag, context) {
            if (typeof context.getElementsByTagName !== "undefined") {
              return context.getElementsByTagName(tag);
            } else if (support2.qsa) {
              return context.querySelectorAll(tag);
            }
          } : function(tag, context) {
            var elem, tmp = [], i2 = 0, results = context.getElementsByTagName(tag);
            if (tag === "*") {
              while (elem = results[i2++]) {
                if (elem.nodeType === 1) {
                  tmp.push(elem);
                }
              }
              return tmp;
            }
            return results;
          };
          Expr.find["CLASS"] = support2.getElementsByClassName && function(className, context) {
            if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
              return context.getElementsByClassName(className);
            }
          };
          rbuggyMatches = [];
          rbuggyQSA = [];
          if (support2.qsa = rnative.test(document3.querySelectorAll)) {
            assert(function(el) {
              docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
              if (el.querySelectorAll("[msallowcapture^='']").length) {
                rbuggyQSA.push("[*^$]=" + whitespace + `*(?:''|"")`);
              }
              if (!el.querySelectorAll("[selected]").length) {
                rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
              }
              if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                rbuggyQSA.push("~=");
              }
              if (!el.querySelectorAll(":checked").length) {
                rbuggyQSA.push(":checked");
              }
              if (!el.querySelectorAll("a#" + expando + "+*").length) {
                rbuggyQSA.push(".#.+[+~]");
              }
            });
            assert(function(el) {
              el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var input = document3.createElement("input");
              input.setAttribute("type", "hidden");
              el.appendChild(input).setAttribute("name", "D");
              if (el.querySelectorAll("[name=d]").length) {
                rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
              }
              if (el.querySelectorAll(":enabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              }
              docElem.appendChild(el).disabled = true;
              if (el.querySelectorAll(":disabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              }
              el.querySelectorAll("*,:x");
              rbuggyQSA.push(",.*:");
            });
          }
          if (support2.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
            assert(function(el) {
              support2.disconnectedMatch = matches.call(el, "*");
              matches.call(el, "[s!='']:x");
              rbuggyMatches.push("!=", pseudos);
            });
          }
          rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
          rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
          hasCompare = rnative.test(docElem.compareDocumentPosition);
          contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
            var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
            return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
          } : function(a, b) {
            if (b) {
              while (b = b.parentNode) {
                if (b === a) {
                  return true;
                }
              }
            }
            return false;
          };
          sortOrder = hasCompare ? function(a, b) {
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }
            var compare2 = !a.compareDocumentPosition - !b.compareDocumentPosition;
            if (compare2) {
              return compare2;
            }
            compare2 = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
            if (compare2 & 1 || !support2.sortDetached && b.compareDocumentPosition(a) === compare2) {
              if (a === document3 || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                return -1;
              }
              if (b === document3 || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                return 1;
              }
              return sortInput ? indexOf3(sortInput, a) - indexOf3(sortInput, b) : 0;
            }
            return compare2 & 4 ? -1 : 1;
          } : function(a, b) {
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }
            var cur, i2 = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
            if (!aup || !bup) {
              return a === document3 ? -1 : b === document3 ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf3(sortInput, a) - indexOf3(sortInput, b) : 0;
            } else if (aup === bup) {
              return siblingCheck(a, b);
            }
            cur = a;
            while (cur = cur.parentNode) {
              ap.unshift(cur);
            }
            cur = b;
            while (cur = cur.parentNode) {
              bp.unshift(cur);
            }
            while (ap[i2] === bp[i2]) {
              i2++;
            }
            return i2 ? siblingCheck(ap[i2], bp[i2]) : ap[i2] === preferredDoc ? -1 : bp[i2] === preferredDoc ? 1 : 0;
          };
          return document3;
        };
        Sizzle2.matches = function(expr, elements) {
          return Sizzle2(expr, null, null, elements);
        };
        Sizzle2.matchesSelector = function(elem, expr) {
          if ((elem.ownerDocument || elem) !== document3) {
            setDocument(elem);
          }
          if (support2.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
            try {
              var ret = matches.call(elem, expr);
              if (ret || support2.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                return ret;
              }
            } catch (e) {
              nonnativeSelectorCache(expr, true);
            }
          }
          return Sizzle2(expr, document3, null, [elem]).length > 0;
        };
        Sizzle2.contains = function(context, elem) {
          if ((context.ownerDocument || context) !== document3) {
            setDocument(context);
          }
          return contains(context, elem);
        };
        Sizzle2.attr = function(elem, name) {
          if ((elem.ownerDocument || elem) !== document3) {
            setDocument(elem);
          }
          var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn2.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
          return val !== void 0 ? val : support2.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        };
        Sizzle2.escape = function(sel) {
          return (sel + "").replace(rcssescape, fcssescape);
        };
        Sizzle2.error = function(msg) {
          throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        Sizzle2.uniqueSort = function(results) {
          var elem, duplicates = [], j = 0, i2 = 0;
          hasDuplicate = !support2.detectDuplicates;
          sortInput = !support2.sortStable && results.slice(0);
          results.sort(sortOrder);
          if (hasDuplicate) {
            while (elem = results[i2++]) {
              if (elem === results[i2]) {
                j = duplicates.push(i2);
              }
            }
            while (j--) {
              results.splice(duplicates[j], 1);
            }
          }
          sortInput = null;
          return results;
        };
        getText = Sizzle2.getText = function(elem) {
          var node, ret = "", i2 = 0, nodeType = elem.nodeType;
          if (!nodeType) {
            while (node = elem[i2++]) {
              ret += getText(node);
            }
          } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
            if (typeof elem.textContent === "string") {
              return elem.textContent;
            } else {
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                ret += getText(elem);
              }
            }
          } else if (nodeType === 3 || nodeType === 4) {
            return elem.nodeValue;
          }
          return ret;
        };
        Expr = Sizzle2.selectors = {
          cacheLength: 50,
          createPseudo: markFunction,
          match: matchExpr,
          attrHandle: {},
          find: {},
          relative: {
            ">": {dir: "parentNode", first: true},
            " ": {dir: "parentNode"},
            "+": {dir: "previousSibling", first: true},
            "~": {dir: "previousSibling"}
          },
          preFilter: {
            ATTR: function(match) {
              match[1] = match[1].replace(runescape, funescape);
              match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
              if (match[2] === "~=") {
                match[3] = " " + match[3] + " ";
              }
              return match.slice(0, 4);
            },
            CHILD: function(match) {
              match[1] = match[1].toLowerCase();
              if (match[1].slice(0, 3) === "nth") {
                if (!match[3]) {
                  Sizzle2.error(match[0]);
                }
                match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                match[5] = +(match[7] + match[8] || match[3] === "odd");
              } else if (match[3]) {
                Sizzle2.error(match[0]);
              }
              return match;
            },
            PSEUDO: function(match) {
              var excess, unquoted = !match[6] && match[2];
              if (matchExpr["CHILD"].test(match[0])) {
                return null;
              }
              if (match[3]) {
                match[2] = match[4] || match[5] || "";
              } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                match[0] = match[0].slice(0, excess);
                match[2] = unquoted.slice(0, excess);
              }
              return match.slice(0, 3);
            }
          },
          filter: {
            TAG: function(nodeNameSelector) {
              var nodeName2 = nodeNameSelector.replace(runescape, funescape).toLowerCase();
              return nodeNameSelector === "*" ? function() {
                return true;
              } : function(elem) {
                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName2;
              };
            },
            CLASS: function(className) {
              var pattern = classCache[className + " "];
              return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
              });
            },
            ATTR: function(name, operator, check) {
              return function(elem) {
                var result = Sizzle2.attr(elem, name);
                if (result == null) {
                  return operator === "!=";
                }
                if (!operator) {
                  return true;
                }
                result += "";
                return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
              };
            },
            CHILD: function(type, what, argument, first, last) {
              var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
              return first === 1 && last === 0 ? function(elem) {
                return !!elem.parentNode;
              } : function(elem, context, xml) {
                var cache, uniqueCache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff3 = false;
                if (parent) {
                  if (simple) {
                    while (dir2) {
                      node = elem;
                      while (node = node[dir2]) {
                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                          return false;
                        }
                      }
                      start = dir2 = type === "only" && !start && "nextSibling";
                    }
                    return true;
                  }
                  start = [forward ? parent.firstChild : parent.lastChild];
                  if (forward && useCache) {
                    node = parent;
                    outerCache = node[expando] || (node[expando] = {});
                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                    cache = uniqueCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff3 = nodeIndex && cache[2];
                    node = nodeIndex && parent.childNodes[nodeIndex];
                    while (node = ++nodeIndex && node && node[dir2] || (diff3 = nodeIndex = 0) || start.pop()) {
                      if (node.nodeType === 1 && ++diff3 && node === elem) {
                        uniqueCache[type] = [dirruns, nodeIndex, diff3];
                        break;
                      }
                    }
                  } else {
                    if (useCache) {
                      node = elem;
                      outerCache = node[expando] || (node[expando] = {});
                      uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                      cache = uniqueCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff3 = nodeIndex;
                    }
                    if (diff3 === false) {
                      while (node = ++nodeIndex && node && node[dir2] || (diff3 = nodeIndex = 0) || start.pop()) {
                        if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff3) {
                          if (useCache) {
                            outerCache = node[expando] || (node[expando] = {});
                            uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                            uniqueCache[type] = [dirruns, diff3];
                          }
                          if (node === elem) {
                            break;
                          }
                        }
                      }
                    }
                  }
                  diff3 -= last;
                  return diff3 === first || diff3 % first === 0 && diff3 / first >= 0;
                }
              };
            },
            PSEUDO: function(pseudo, argument) {
              var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle2.error("unsupported pseudo: " + pseudo);
              if (fn[expando]) {
                return fn(argument);
              }
              if (fn.length > 1) {
                args = [pseudo, pseudo, "", argument];
                return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                  var idx, matched = fn(seed, argument), i2 = matched.length;
                  while (i2--) {
                    idx = indexOf3(seed, matched[i2]);
                    seed[idx] = !(matches2[idx] = matched[i2]);
                  }
                }) : function(elem) {
                  return fn(elem, 0, args);
                };
              }
              return fn;
            }
          },
          pseudos: {
            not: markFunction(function(selector) {
              var input = [], results = [], matcher = compile(selector.replace(rtrim2, "$1"));
              return matcher[expando] ? markFunction(function(seed, matches2, context, xml) {
                var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                while (i2--) {
                  if (elem = unmatched[i2]) {
                    seed[i2] = !(matches2[i2] = elem);
                  }
                }
              }) : function(elem, context, xml) {
                input[0] = elem;
                matcher(input, null, xml, results);
                input[0] = null;
                return !results.pop();
              };
            }),
            has: markFunction(function(selector) {
              return function(elem) {
                return Sizzle2(selector, elem).length > 0;
              };
            }),
            contains: markFunction(function(text) {
              text = text.replace(runescape, funescape);
              return function(elem) {
                return (elem.textContent || getText(elem)).indexOf(text) > -1;
              };
            }),
            lang: markFunction(function(lang2) {
              if (!ridentifier.test(lang2 || "")) {
                Sizzle2.error("unsupported lang: " + lang2);
              }
              lang2 = lang2.replace(runescape, funescape).toLowerCase();
              return function(elem) {
                var elemLang;
                do {
                  if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                    elemLang = elemLang.toLowerCase();
                    return elemLang === lang2 || elemLang.indexOf(lang2 + "-") === 0;
                  }
                } while ((elem = elem.parentNode) && elem.nodeType === 1);
                return false;
              };
            }),
            target: function(elem) {
              var hash = window3.location && window3.location.hash;
              return hash && hash.slice(1) === elem.id;
            },
            root: function(elem) {
              return elem === docElem;
            },
            focus: function(elem) {
              return elem === document3.activeElement && (!document3.hasFocus || document3.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
            },
            enabled: createDisabledPseudo(false),
            disabled: createDisabledPseudo(true),
            checked: function(elem) {
              var nodeName2 = elem.nodeName.toLowerCase();
              return nodeName2 === "input" && !!elem.checked || nodeName2 === "option" && !!elem.selected;
            },
            selected: function(elem) {
              if (elem.parentNode) {
                elem.parentNode.selectedIndex;
              }
              return elem.selected === true;
            },
            empty: function(elem) {
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                if (elem.nodeType < 6) {
                  return false;
                }
              }
              return true;
            },
            parent: function(elem) {
              return !Expr.pseudos["empty"](elem);
            },
            header: function(elem) {
              return rheader.test(elem.nodeName);
            },
            input: function(elem) {
              return rinputs.test(elem.nodeName);
            },
            button: function(elem) {
              var name = elem.nodeName.toLowerCase();
              return name === "input" && elem.type === "button" || name === "button";
            },
            text: function(elem) {
              var attr;
              return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
            },
            first: createPositionalPseudo(function() {
              return [0];
            }),
            last: createPositionalPseudo(function(matchIndexes, length) {
              return [length - 1];
            }),
            eq: createPositionalPseudo(function(matchIndexes, length, argument) {
              return [argument < 0 ? argument + length : argument];
            }),
            even: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 0;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            odd: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 1;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            lt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2 = argument < 0 ? argument + length : argument > length ? length : argument;
              for (; --i2 >= 0; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            gt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2 = argument < 0 ? argument + length : argument;
              for (; ++i2 < length; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            })
          }
        };
        Expr.pseudos["nth"] = Expr.pseudos["eq"];
        for (i in {radio: true, checkbox: true, file: true, password: true, image: true}) {
          Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in {submit: true, reset: true}) {
          Expr.pseudos[i] = createButtonPseudo(i);
        }
        function setFilters() {
        }
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        tokenize = Sizzle2.tokenize = function(selector, parseOnly) {
          var matched, match, tokens2, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
          if (cached) {
            return parseOnly ? 0 : cached.slice(0);
          }
          soFar = selector;
          groups = [];
          preFilters = Expr.preFilter;
          while (soFar) {
            if (!matched || (match = rcomma.exec(soFar))) {
              if (match) {
                soFar = soFar.slice(match[0].length) || soFar;
              }
              groups.push(tokens2 = []);
            }
            matched = false;
            if (match = rcombinators.exec(soFar)) {
              matched = match.shift();
              tokens2.push({
                value: matched,
                type: match[0].replace(rtrim2, " ")
              });
              soFar = soFar.slice(matched.length);
            }
            for (type in Expr.filter) {
              if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                matched = match.shift();
                tokens2.push({
                  value: matched,
                  type,
                  matches: match
                });
                soFar = soFar.slice(matched.length);
              }
            }
            if (!matched) {
              break;
            }
          }
          return parseOnly ? soFar.length : soFar ? Sizzle2.error(selector) : tokenCache(selector, groups).slice(0);
        };
        function toSelector(tokens2) {
          var i2 = 0, len = tokens2.length, selector = "";
          for (; i2 < len; i2++) {
            selector += tokens2[i2].value;
          }
          return selector;
        }
        function addCombinator(matcher, combinator, base) {
          var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
          return combinator.first ? function(elem, context, xml) {
            while (elem = elem[dir2]) {
              if (elem.nodeType === 1 || checkNonElements) {
                return matcher(elem, context, xml);
              }
            }
            return false;
          } : function(elem, context, xml) {
            var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
            if (xml) {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  if (matcher(elem, context, xml)) {
                    return true;
                  }
                }
              }
            } else {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  outerCache = elem[expando] || (elem[expando] = {});
                  uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                  if (skip && skip === elem.nodeName.toLowerCase()) {
                    elem = elem[dir2] || elem;
                  } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                    return newCache[2] = oldCache[2];
                  } else {
                    uniqueCache[key] = newCache;
                    if (newCache[2] = matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              }
            }
            return false;
          };
        }
        function elementMatcher(matchers) {
          return matchers.length > 1 ? function(elem, context, xml) {
            var i2 = matchers.length;
            while (i2--) {
              if (!matchers[i2](elem, context, xml)) {
                return false;
              }
            }
            return true;
          } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
          var i2 = 0, len = contexts.length;
          for (; i2 < len; i2++) {
            Sizzle2(selector, contexts[i2], results);
          }
          return results;
        }
        function condense(unmatched, map4, filter, context, xml) {
          var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map4 != null;
          for (; i2 < len; i2++) {
            if (elem = unmatched[i2]) {
              if (!filter || filter(elem, context, xml)) {
                newUnmatched.push(elem);
                if (mapped) {
                  map4.push(i2);
                }
              }
            }
          }
          return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
          if (postFilter && !postFilter[expando]) {
            postFilter = setMatcher(postFilter);
          }
          if (postFinder && !postFinder[expando]) {
            postFinder = setMatcher(postFinder, postSelector);
          }
          return markFunction(function(seed, results, context, xml) {
            var temp, i2, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
            if (matcher) {
              matcher(matcherIn, matcherOut, context, xml);
            }
            if (postFilter) {
              temp = condense(matcherOut, postMap);
              postFilter(temp, [], context, xml);
              i2 = temp.length;
              while (i2--) {
                if (elem = temp[i2]) {
                  matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                }
              }
            }
            if (seed) {
              if (postFinder || preFilter) {
                if (postFinder) {
                  temp = [];
                  i2 = matcherOut.length;
                  while (i2--) {
                    if (elem = matcherOut[i2]) {
                      temp.push(matcherIn[i2] = elem);
                    }
                  }
                  postFinder(null, matcherOut = [], temp, xml);
                }
                i2 = matcherOut.length;
                while (i2--) {
                  if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf3(seed, elem) : preMap[i2]) > -1) {
                    seed[temp] = !(results[temp] = elem);
                  }
                }
              }
            } else {
              matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
              if (postFinder) {
                postFinder(null, results, matcherOut, xml);
              } else {
                push2.apply(results, matcherOut);
              }
            }
          });
        }
        function matcherFromTokens(tokens2) {
          var checkContext, matcher, j, len = tokens2.length, leadingRelative = Expr.relative[tokens2[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
            return elem === checkContext;
          }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
            return indexOf3(checkContext, elem) > -1;
          }, implicitRelative, true), matchers = [function(elem, context, xml) {
            var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            checkContext = null;
            return ret;
          }];
          for (; i2 < len; i2++) {
            if (matcher = Expr.relative[tokens2[i2].type]) {
              matchers = [addCombinator(elementMatcher(matchers), matcher)];
            } else {
              matcher = Expr.filter[tokens2[i2].type].apply(null, tokens2[i2].matches);
              if (matcher[expando]) {
                j = ++i2;
                for (; j < len; j++) {
                  if (Expr.relative[tokens2[j].type]) {
                    break;
                  }
                }
                return setMatcher(i2 > 1 && elementMatcher(matchers), i2 > 1 && toSelector(tokens2.slice(0, i2 - 1).concat({value: tokens2[i2 - 2].type === " " ? "*" : ""})).replace(rtrim2, "$1"), matcher, i2 < j && matcherFromTokens(tokens2.slice(i2, j)), j < len && matcherFromTokens(tokens2 = tokens2.slice(j)), j < len && toSelector(tokens2));
              }
              matchers.push(matcher);
            }
          }
          return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
          var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
            var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
            if (outermost) {
              outermostContext = context === document3 || context || outermost;
            }
            for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
              if (byElement && elem) {
                j = 0;
                if (!context && elem.ownerDocument !== document3) {
                  setDocument(elem);
                  xml = !documentIsHTML;
                }
                while (matcher = elementMatchers[j++]) {
                  if (matcher(elem, context || document3, xml)) {
                    results.push(elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if (elem = !matcher && elem) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            matchedCount += i2;
            if (bySet && i2 !== matchedCount) {
              j = 0;
              while (matcher = setMatchers[j++]) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (matchedCount > 0) {
                  while (i2--) {
                    if (!(unmatched[i2] || setMatched[i2])) {
                      setMatched[i2] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push2.apply(results, setMatched);
              if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                Sizzle2.uniqueSort(results);
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }
            return unmatched;
          };
          return bySet ? markFunction(superMatcher) : superMatcher;
        }
        compile = Sizzle2.compile = function(selector, match) {
          var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
          if (!cached) {
            if (!match) {
              match = tokenize(selector);
            }
            i2 = match.length;
            while (i2--) {
              cached = matcherFromTokens(match[i2]);
              if (cached[expando]) {
                setMatchers.push(cached);
              } else {
                elementMatchers.push(cached);
              }
            }
            cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
            cached.selector = selector;
          }
          return cached;
        };
        select = Sizzle2.select = function(selector, context, results, seed) {
          var i2, tokens2, token18, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
          results = results || [];
          if (match.length === 1) {
            tokens2 = match[0] = match[0].slice(0);
            if (tokens2.length > 2 && (token18 = tokens2[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens2[1].type]) {
              context = (Expr.find["ID"](token18.matches[0].replace(runescape, funescape), context) || [])[0];
              if (!context) {
                return results;
              } else if (compiled) {
                context = context.parentNode;
              }
              selector = selector.slice(tokens2.shift().value.length);
            }
            i2 = matchExpr["needsContext"].test(selector) ? 0 : tokens2.length;
            while (i2--) {
              token18 = tokens2[i2];
              if (Expr.relative[type = token18.type]) {
                break;
              }
              if (find = Expr.find[type]) {
                if (seed = find(token18.matches[0].replace(runescape, funescape), rsibling.test(tokens2[0].type) && testContext(context.parentNode) || context)) {
                  tokens2.splice(i2, 1);
                  selector = seed.length && toSelector(tokens2);
                  if (!selector) {
                    push2.apply(results, seed);
                    return results;
                  }
                  break;
                }
              }
            }
          }
          (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
          return results;
        };
        support2.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        support2.detectDuplicates = !!hasDuplicate;
        setDocument();
        support2.sortDetached = assert(function(el) {
          return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
        });
        if (!assert(function(el) {
          el.innerHTML = "<a href='#'></a>";
          return el.firstChild.getAttribute("href") === "#";
        })) {
          addHandle("type|href|height|width", function(elem, name, isXML2) {
            if (!isXML2) {
              return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
            }
          });
        }
        if (!support2.attributes || !assert(function(el) {
          el.innerHTML = "<input/>";
          el.firstChild.setAttribute("value", "");
          return el.firstChild.getAttribute("value") === "";
        })) {
          addHandle("value", function(elem, name, isXML2) {
            if (!isXML2 && elem.nodeName.toLowerCase() === "input") {
              return elem.defaultValue;
            }
          });
        }
        if (!assert(function(el) {
          return el.getAttribute("disabled") == null;
        })) {
          addHandle(booleans, function(elem, name, isXML2) {
            var val;
            if (!isXML2) {
              return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
            }
          });
        }
        return Sizzle2;
      }(window2);
      jQuery.find = Sizzle;
      jQuery.expr = Sizzle.selectors;
      jQuery.expr[":"] = jQuery.expr.pseudos;
      jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
      jQuery.text = Sizzle.getText;
      jQuery.isXMLDoc = Sizzle.isXML;
      jQuery.contains = Sizzle.contains;
      jQuery.escapeSelector = Sizzle.escape;
      var dir = function(elem, dir2, until) {
        var matched = [], truncate = until !== void 0;
        while ((elem = elem[dir2]) && elem.nodeType !== 9) {
          if (elem.nodeType === 1) {
            if (truncate && jQuery(elem).is(until)) {
              break;
            }
            matched.push(elem);
          }
        }
        return matched;
      };
      var siblings = function(n, elem) {
        var matched = [];
        for (; n; n = n.nextSibling) {
          if (n.nodeType === 1 && n !== elem) {
            matched.push(n);
          }
        }
        return matched;
      };
      var rneedsContext = jQuery.expr.match.needsContext;
      function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
      }
      ;
      var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function winnow(elements, qualifier, not) {
        if (isFunction5(qualifier)) {
          return jQuery.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
          });
        }
        if (qualifier.nodeType) {
          return jQuery.grep(elements, function(elem) {
            return elem === qualifier !== not;
          });
        }
        if (typeof qualifier !== "string") {
          return jQuery.grep(elements, function(elem) {
            return indexOf2.call(qualifier, elem) > -1 !== not;
          });
        }
        return jQuery.filter(qualifier, elements, not);
      }
      jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
          expr = ":not(" + expr + ")";
        }
        if (elems.length === 1 && elem.nodeType === 1) {
          return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
        }
        return jQuery.find.matches(expr, jQuery.grep(elems, function(elem2) {
          return elem2.nodeType === 1;
        }));
      };
      jQuery.fn.extend({
        find: function(selector) {
          var i, ret, len = this.length, self2 = this;
          if (typeof selector !== "string") {
            return this.pushStack(jQuery(selector).filter(function() {
              for (i = 0; i < len; i++) {
                if (jQuery.contains(self2[i], this)) {
                  return true;
                }
              }
            }));
          }
          ret = this.pushStack([]);
          for (i = 0; i < len; i++) {
            jQuery.find(selector, self2[i], ret);
          }
          return len > 1 ? jQuery.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
          return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
          return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
          return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        }
      });
      var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root10) {
        var match, elem;
        if (!selector) {
          return this;
        }
        root10 = root10 || rootjQuery;
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery ? context[0] : context;
              jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document2, true));
              if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                for (match in context) {
                  if (isFunction5(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document2.getElementById(match[2]);
              if (elem) {
                this[0] = elem;
                this.length = 1;
              }
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || root10).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this[0] = selector;
          this.length = 1;
          return this;
        } else if (isFunction5(selector)) {
          return root10.ready !== void 0 ? root10.ready(selector) : selector(jQuery);
        }
        return jQuery.makeArray(selector, this);
      };
      init.prototype = jQuery.fn;
      rootjQuery = jQuery(document2);
      var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
      jQuery.fn.extend({
        has: function(target) {
          var targets = jQuery(target, this), l = targets.length;
          return this.filter(function() {
            var i = 0;
            for (; i < l; i++) {
              if (jQuery.contains(this, targets[i])) {
                return true;
              }
            }
          });
        },
        closest: function(selectors, context) {
          var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
          if (!rneedsContext.test(selectors)) {
            for (; i < l; i++) {
              for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                  matched.push(cur);
                  break;
                }
              }
            }
          }
          return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },
        index: function(elem) {
          if (!elem) {
            return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          }
          if (typeof elem === "string") {
            return indexOf2.call(jQuery(elem), this[0]);
          }
          return indexOf2.call(this, elem.jquery ? elem[0] : elem);
        },
        add: function(selector, context) {
          return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function(selector) {
          return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
      });
      function sibling(cur, dir2) {
        while ((cur = cur[dir2]) && cur.nodeType !== 1) {
        }
        return cur;
      }
      jQuery.each({
        parent: function(elem) {
          var parent = elem.parentNode;
          return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
          return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, i, until) {
          return dir(elem, "parentNode", until);
        },
        next: function(elem) {
          return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
          return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
          return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
          return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, i, until) {
          return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, i, until) {
          return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
          return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
          return siblings(elem.firstChild);
        },
        contents: function(elem) {
          if (typeof elem.contentDocument !== "undefined") {
            return elem.contentDocument;
          }
          if (nodeName(elem, "template")) {
            elem = elem.content || elem;
          }
          return jQuery.merge([], elem.childNodes);
        }
      }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
          var matched = jQuery.map(this, fn, until);
          if (name.slice(-5) !== "Until") {
            selector = until;
          }
          if (selector && typeof selector === "string") {
            matched = jQuery.filter(selector, matched);
          }
          if (this.length > 1) {
            if (!guaranteedUnique[name]) {
              jQuery.uniqueSort(matched);
            }
            if (rparentsprev.test(name)) {
              matched.reverse();
            }
          }
          return this.pushStack(matched);
        };
      });
      var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
      function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
          object[flag] = true;
        });
        return object;
      }
      jQuery.Callbacks = function(options) {
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
        var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
          locked = locked || options.once;
          fired = firing = true;
          for (; queue.length; firingIndex = -1) {
            memory = queue.shift();
            while (++firingIndex < list.length) {
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                firingIndex = list.length;
                memory = false;
              }
            }
          }
          if (!options.memory) {
            memory = false;
          }
          firing = false;
          if (locked) {
            if (memory) {
              list = [];
            } else {
              list = "";
            }
          }
        }, self2 = {
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add3(args) {
                jQuery.each(args, function(_, arg) {
                  if (isFunction5(arg)) {
                    if (!options.unique || !self2.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && toType2(arg) !== "string") {
                    add3(arg);
                  }
                });
              })(arguments);
              if (memory && !firing) {
                fire();
              }
            }
            return this;
          },
          remove: function() {
            jQuery.each(arguments, function(_, arg) {
              var index;
              while ((index = jQuery.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          has: function(fn) {
            return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
          },
          empty: function() {
            if (list) {
              list = [];
            }
            return this;
          },
          disable: function() {
            locked = queue = [];
            list = memory = "";
            return this;
          },
          disabled: function() {
            return !list;
          },
          lock: function() {
            locked = queue = [];
            if (!memory && !firing) {
              list = memory = "";
            }
            return this;
          },
          locked: function() {
            return !!locked;
          },
          fireWith: function(context, args) {
            if (!locked) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              queue.push(args);
              if (!firing) {
                fire();
              }
            }
            return this;
          },
          fire: function() {
            self2.fireWith(this, arguments);
            return this;
          },
          fired: function() {
            return !!fired;
          }
        };
        return self2;
      };
      function Identity(v) {
        return v;
      }
      function Thrower(ex) {
        throw ex;
      }
      function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
          if (value && isFunction5(method = value.promise)) {
            method.call(value).done(resolve).fail(reject);
          } else if (value && isFunction5(method = value.then)) {
            method.call(value, resolve, reject);
          } else {
            resolve.apply(void 0, [value].slice(noValue));
          }
        } catch (value2) {
          reject.apply(void 0, [value2]);
        }
      }
      jQuery.extend({
        Deferred: function(func) {
          var tuples = [
            [
              "notify",
              "progress",
              jQuery.Callbacks("memory"),
              jQuery.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              jQuery.Callbacks("once memory"),
              jQuery.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              jQuery.Callbacks("once memory"),
              jQuery.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ], state = "pending", promise = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            catch: function(fn) {
              return promise.then(null, fn);
            },
            pipe: function() {
              var fns = arguments;
              return jQuery.Deferred(function(newDefer) {
                jQuery.each(tuples, function(i, tuple) {
                  var fn = isFunction5(fns[tuple[4]]) && fns[tuple[4]];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && isFunction5(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            then: function(onFulfilled, onRejected, onProgress) {
              var maxDepth = 0;
              function resolve(depth, deferred2, handler, special) {
                return function() {
                  var that = this, args = arguments, mightThrow = function() {
                    var returned, then;
                    if (depth < maxDepth) {
                      return;
                    }
                    returned = handler.apply(that, args);
                    if (returned === deferred2.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }
                    then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                    if (isFunction5(then)) {
                      if (special) {
                        then.call(returned, resolve(maxDepth, deferred2, Identity, special), resolve(maxDepth, deferred2, Thrower, special));
                      } else {
                        maxDepth++;
                        then.call(returned, resolve(maxDepth, deferred2, Identity, special), resolve(maxDepth, deferred2, Thrower, special), resolve(maxDepth, deferred2, Identity, deferred2.notifyWith));
                      }
                    } else {
                      if (handler !== Identity) {
                        that = void 0;
                        args = [returned];
                      }
                      (special || deferred2.resolveWith)(that, args);
                    }
                  }, process = special ? mightThrow : function() {
                    try {
                      mightThrow();
                    } catch (e) {
                      if (jQuery.Deferred.exceptionHook) {
                        jQuery.Deferred.exceptionHook(e, process.stackTrace);
                      }
                      if (depth + 1 >= maxDepth) {
                        if (handler !== Thrower) {
                          that = void 0;
                          args = [e];
                        }
                        deferred2.rejectWith(that, args);
                      }
                    }
                  };
                  if (depth) {
                    process();
                  } else {
                    if (jQuery.Deferred.getStackHook) {
                      process.stackTrace = jQuery.Deferred.getStackHook();
                    }
                    window2.setTimeout(process);
                  }
                };
              }
              return jQuery.Deferred(function(newDefer) {
                tuples[0][3].add(resolve(0, newDefer, isFunction5(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                tuples[1][3].add(resolve(0, newDefer, isFunction5(onFulfilled) ? onFulfilled : Identity));
                tuples[2][3].add(resolve(0, newDefer, isFunction5(onRejected) ? onRejected : Thrower));
              }).promise();
            },
            promise: function(obj) {
              return obj != null ? jQuery.extend(obj, promise) : promise;
            }
          }, deferred = {};
          jQuery.each(tuples, function(i, tuple) {
            var list = tuple[2], stateString = tuple[5];
            promise[tuple[1]] = list.add;
            if (stateString) {
              list.add(function() {
                state = stateString;
              }, tuples[3 - i][2].disable, tuples[3 - i][3].disable, tuples[0][2].lock, tuples[0][3].lock);
            }
            list.add(tuple[3].fire);
            deferred[tuple[0]] = function() {
              deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
              return this;
            };
            deferred[tuple[0] + "With"] = list.fireWith;
          });
          promise.promise(deferred);
          if (func) {
            func.call(deferred, deferred);
          }
          return deferred;
        },
        when: function(singleValue) {
          var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), master = jQuery.Deferred(), updateFunc = function(i2) {
            return function(value) {
              resolveContexts[i2] = this;
              resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
              if (!--remaining) {
                master.resolveWith(resolveContexts, resolveValues);
              }
            };
          };
          if (remaining <= 1) {
            adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);
            if (master.state() === "pending" || isFunction5(resolveValues[i] && resolveValues[i].then)) {
              return master.then();
            }
          }
          while (i--) {
            adoptValue(resolveValues[i], updateFunc(i), master.reject);
          }
          return master.promise();
        }
      });
      var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      jQuery.Deferred.exceptionHook = function(error, stack) {
        if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
          window2.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
        }
      };
      jQuery.readyException = function(error) {
        window2.setTimeout(function() {
          throw error;
        });
      };
      var readyList = jQuery.Deferred();
      jQuery.fn.ready = function(fn) {
        readyList.then(fn).catch(function(error) {
          jQuery.readyException(error);
        });
        return this;
      };
      jQuery.extend({
        isReady: false,
        readyWait: 1,
        ready: function(wait) {
          if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
            return;
          }
          jQuery.isReady = true;
          if (wait !== true && --jQuery.readyWait > 0) {
            return;
          }
          readyList.resolveWith(document2, [jQuery]);
        }
      });
      jQuery.ready.then = readyList.then;
      function completed() {
        document2.removeEventListener("DOMContentLoaded", completed);
        window2.removeEventListener("load", completed);
        jQuery.ready();
      }
      if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
        window2.setTimeout(jQuery.ready);
      } else {
        document2.addEventListener("DOMContentLoaded", completed);
        window2.addEventListener("load", completed);
      }
      var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        if (toType2(key) === "object") {
          chainable = true;
          for (i in key) {
            access(elems, fn, i, key[i], true, emptyGet, raw);
          }
        } else if (value !== void 0) {
          chainable = true;
          if (!isFunction5(value)) {
            raw = true;
          }
          if (bulk) {
            if (raw) {
              fn.call(elems, value);
              fn = null;
            } else {
              bulk = fn;
              fn = function(elem, key2, value2) {
                return bulk.call(jQuery(elem), value2);
              };
            }
          }
          if (fn) {
            for (; i < len; i++) {
              fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
            }
          }
        }
        if (chainable) {
          return elems;
        }
        if (bulk) {
          return fn.call(elems);
        }
        return len ? fn(elems[0], key) : emptyGet;
      };
      var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
      function fcamelCase(all, letter) {
        return letter.toUpperCase();
      }
      function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
      }
      var acceptData = function(owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
      };
      function Data() {
        this.expando = jQuery.expando + Data.uid++;
      }
      Data.uid = 1;
      Data.prototype = {
        cache: function(owner) {
          var value = owner[this.expando];
          if (!value) {
            value = {};
            if (acceptData(owner)) {
              if (owner.nodeType) {
                owner[this.expando] = value;
              } else {
                Object.defineProperty(owner, this.expando, {
                  value,
                  configurable: true
                });
              }
            }
          }
          return value;
        },
        set: function(owner, data, value) {
          var prop, cache = this.cache(owner);
          if (typeof data === "string") {
            cache[camelCase(data)] = value;
          } else {
            for (prop in data) {
              cache[camelCase(prop)] = data[prop];
            }
          }
          return cache;
        },
        get: function(owner, key) {
          return key === void 0 ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
        },
        access: function(owner, key, value) {
          if (key === void 0 || key && typeof key === "string" && value === void 0) {
            return this.get(owner, key);
          }
          this.set(owner, key, value);
          return value !== void 0 ? value : key;
        },
        remove: function(owner, key) {
          var i, cache = owner[this.expando];
          if (cache === void 0) {
            return;
          }
          if (key !== void 0) {
            if (Array.isArray(key)) {
              key = key.map(camelCase);
            } else {
              key = camelCase(key);
              key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
            }
            i = key.length;
            while (i--) {
              delete cache[key[i]];
            }
          }
          if (key === void 0 || jQuery.isEmptyObject(cache)) {
            if (owner.nodeType) {
              owner[this.expando] = void 0;
            } else {
              delete owner[this.expando];
            }
          }
        },
        hasData: function(owner) {
          var cache = owner[this.expando];
          return cache !== void 0 && !jQuery.isEmptyObject(cache);
        }
      };
      var dataPriv = new Data();
      var dataUser = new Data();
      var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
      function getData(data) {
        if (data === "true") {
          return true;
        }
        if (data === "false") {
          return false;
        }
        if (data === "null") {
          return null;
        }
        if (data === +data + "") {
          return +data;
        }
        if (rbrace.test(data)) {
          return JSON.parse(data);
        }
        return data;
      }
      function dataAttr(elem, key, data) {
        var name;
        if (data === void 0 && elem.nodeType === 1) {
          name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
          data = elem.getAttribute(name);
          if (typeof data === "string") {
            try {
              data = getData(data);
            } catch (e) {
            }
            dataUser.set(elem, key, data);
          } else {
            data = void 0;
          }
        }
        return data;
      }
      jQuery.extend({
        hasData: function(elem) {
          return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
          return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
          dataUser.remove(elem, name);
        },
        _data: function(elem, name, data) {
          return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
          dataPriv.remove(elem, name);
        }
      });
      jQuery.fn.extend({
        data: function(key, value) {
          var i, name, data, elem = this[0], attrs = elem && elem.attributes;
          if (key === void 0) {
            if (this.length) {
              data = dataUser.get(elem);
              if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                i = attrs.length;
                while (i--) {
                  if (attrs[i]) {
                    name = attrs[i].name;
                    if (name.indexOf("data-") === 0) {
                      name = camelCase(name.slice(5));
                      dataAttr(elem, name, data[name]);
                    }
                  }
                }
                dataPriv.set(elem, "hasDataAttrs", true);
              }
            }
            return data;
          }
          if (typeof key === "object") {
            return this.each(function() {
              dataUser.set(this, key);
            });
          }
          return access(this, function(value2) {
            var data2;
            if (elem && value2 === void 0) {
              data2 = dataUser.get(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              data2 = dataAttr(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              return;
            }
            this.each(function() {
              dataUser.set(this, key, value2);
            });
          }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
          return this.each(function() {
            dataUser.remove(this, key);
          });
        }
      });
      jQuery.extend({
        queue: function(elem, type, data) {
          var queue;
          if (elem) {
            type = (type || "fx") + "queue";
            queue = dataPriv.get(elem, type);
            if (data) {
              if (!queue || Array.isArray(data)) {
                queue = dataPriv.access(elem, type, jQuery.makeArray(data));
              } else {
                queue.push(data);
              }
            }
            return queue || [];
          }
        },
        dequeue: function(elem, type) {
          type = type || "fx";
          var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks20 = jQuery._queueHooks(elem, type), next = function() {
            jQuery.dequeue(elem, type);
          };
          if (fn === "inprogress") {
            fn = queue.shift();
            startLength--;
          }
          if (fn) {
            if (type === "fx") {
              queue.unshift("inprogress");
            }
            delete hooks20.stop;
            fn.call(elem, next, hooks20);
          }
          if (!startLength && hooks20) {
            hooks20.empty.fire();
          }
        },
        _queueHooks: function(elem, type) {
          var key = type + "queueHooks";
          return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
            empty: jQuery.Callbacks("once memory").add(function() {
              dataPriv.remove(elem, [type + "queue", key]);
            })
          });
        }
      });
      jQuery.fn.extend({
        queue: function(type, data) {
          var setter = 2;
          if (typeof type !== "string") {
            data = type;
            type = "fx";
            setter--;
          }
          if (arguments.length < setter) {
            return jQuery.queue(this[0], type);
          }
          return data === void 0 ? this : this.each(function() {
            var queue = jQuery.queue(this, type, data);
            jQuery._queueHooks(this, type);
            if (type === "fx" && queue[0] !== "inprogress") {
              jQuery.dequeue(this, type);
            }
          });
        },
        dequeue: function(type) {
          return this.each(function() {
            jQuery.dequeue(this, type);
          });
        },
        clearQueue: function(type) {
          return this.queue(type || "fx", []);
        },
        promise: function(type, obj) {
          var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
            if (!--count) {
              defer.resolveWith(elements, [elements]);
            }
          };
          if (typeof type !== "string") {
            obj = type;
            type = void 0;
          }
          type = type || "fx";
          while (i--) {
            tmp = dataPriv.get(elements[i], type + "queueHooks");
            if (tmp && tmp.empty) {
              count++;
              tmp.empty.add(resolve);
            }
          }
          resolve();
          return defer.promise(obj);
        }
      });
      var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
      var cssExpand = ["Top", "Right", "Bottom", "Left"];
      var documentElement = document2.documentElement;
      var isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem);
      }, composed = {composed: true};
      if (documentElement.getRootNode) {
        isAttached = function(elem) {
          return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
        };
      }
      var isHiddenWithinTree = function(elem, el) {
        elem = el || elem;
        return elem.style.display === "none" || elem.style.display === "" && isAttached(elem) && jQuery.css(elem, "display") === "none";
      };
      var swap = function(elem, options, callback, args) {
        var ret, name, old = {};
        for (name in options) {
          old[name] = elem.style[name];
          elem.style[name] = options[name];
        }
        ret = callback.apply(elem, args || []);
        for (name in options) {
          elem.style[name] = old[name];
        }
        return ret;
      };
      function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
          return tween.cur();
        } : function() {
          return jQuery.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
          initial = initial / 2;
          unit = unit || initialInUnit[3];
          initialInUnit = +initial || 1;
          while (maxIterations--) {
            jQuery.style(elem, prop, initialInUnit + unit);
            if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
              maxIterations = 0;
            }
            initialInUnit = initialInUnit / scale;
          }
          initialInUnit = initialInUnit * 2;
          jQuery.style(elem, prop, initialInUnit + unit);
          valueParts = valueParts || [];
        }
        if (valueParts) {
          initialInUnit = +initialInUnit || +initial || 0;
          adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
          if (tween) {
            tween.unit = unit;
            tween.start = initialInUnit;
            tween.end = adjusted;
          }
        }
        return adjusted;
      }
      var defaultDisplayMap = {};
      function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
        if (display) {
          return display;
        }
        temp = doc.body.appendChild(doc.createElement(nodeName2));
        display = jQuery.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") {
          display = "block";
        }
        defaultDisplayMap[nodeName2] = display;
        return display;
      }
      function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        for (; index < length; index++) {
          elem = elements[index];
          if (!elem.style) {
            continue;
          }
          display = elem.style.display;
          if (show) {
            if (display === "none") {
              values[index] = dataPriv.get(elem, "display") || null;
              if (!values[index]) {
                elem.style.display = "";
              }
            }
            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
              values[index] = getDefaultDisplay(elem);
            }
          } else {
            if (display !== "none") {
              values[index] = "none";
              dataPriv.set(elem, "display", display);
            }
          }
        }
        for (index = 0; index < length; index++) {
          if (values[index] != null) {
            elements[index].style.display = values[index];
          }
        }
        return elements;
      }
      jQuery.fn.extend({
        show: function() {
          return showHide(this, true);
        },
        hide: function() {
          return showHide(this);
        },
        toggle: function(state) {
          if (typeof state === "boolean") {
            return state ? this.show() : this.hide();
          }
          return this.each(function() {
            if (isHiddenWithinTree(this)) {
              jQuery(this).show();
            } else {
              jQuery(this).hide();
            }
          });
        }
      });
      var rcheckableType = /^(?:checkbox|radio)$/i;
      var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
      var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
      var wrapMap = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      wrapMap.optgroup = wrapMap.option;
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      wrapMap.th = wrapMap.td;
      function getAll(context, tag) {
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") {
          ret = context.getElementsByTagName(tag || "*");
        } else if (typeof context.querySelectorAll !== "undefined") {
          ret = context.querySelectorAll(tag || "*");
        } else {
          ret = [];
        }
        if (tag === void 0 || tag && nodeName(context, tag)) {
          return jQuery.merge([context], ret);
        }
        return ret;
      }
      function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for (; i < l; i++) {
          dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
        }
      }
      var rhtml = /<|&#?\w+;/;
      function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for (; i < l; i++) {
          elem = elems[i];
          if (elem || elem === 0) {
            if (toType2(elem) === "object") {
              jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
            } else if (!rhtml.test(elem)) {
              nodes.push(context.createTextNode(elem));
            } else {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
              j = wrap[0];
              while (j--) {
                tmp = tmp.lastChild;
              }
              jQuery.merge(nodes, tmp.childNodes);
              tmp = fragment.firstChild;
              tmp.textContent = "";
            }
          }
        }
        fragment.textContent = "";
        i = 0;
        while (elem = nodes[i++]) {
          if (selection && jQuery.inArray(elem, selection) > -1) {
            if (ignored) {
              ignored.push(elem);
            }
            continue;
          }
          attached = isAttached(elem);
          tmp = getAll(fragment.appendChild(elem), "script");
          if (attached) {
            setGlobalEval(tmp);
          }
          if (scripts) {
            j = 0;
            while (elem = tmp[j++]) {
              if (rscriptType.test(elem.type || "")) {
                scripts.push(elem);
              }
            }
          }
        }
        return fragment;
      }
      (function() {
        var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
      })();
      var rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
      function returnTrue() {
        return true;
      }
      function returnFalse() {
        return false;
      }
      function expectSync(elem, type) {
        return elem === safeActiveElement() === (type === "focus");
      }
      function safeActiveElement() {
        try {
          return document2.activeElement;
        } catch (err) {
        }
      }
      function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        if (typeof types === "object") {
          if (typeof selector !== "string") {
            data = data || selector;
            selector = void 0;
          }
          for (type in types) {
            on(elem, type, selector, data, types[type], one);
          }
          return elem;
        }
        if (data == null && fn == null) {
          fn = selector;
          data = selector = void 0;
        } else if (fn == null) {
          if (typeof selector === "string") {
            fn = data;
            data = void 0;
          } else {
            fn = data;
            data = selector;
            selector = void 0;
          }
        }
        if (fn === false) {
          fn = returnFalse;
        } else if (!fn) {
          return elem;
        }
        if (one === 1) {
          origFn = fn;
          fn = function(event) {
            jQuery().off(event);
            return origFn.apply(this, arguments);
          };
          fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }
        return elem.each(function() {
          jQuery.event.add(this, types, fn, data, selector);
        });
      }
      jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
          var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
          if (!elemData) {
            return;
          }
          if (handler.handler) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector;
          }
          if (selector) {
            jQuery.find.matchesSelector(documentElement, selector);
          }
          if (!handler.guid) {
            handler.guid = jQuery.guid++;
          }
          if (!(events = elemData.events)) {
            events = elemData.events = {};
          }
          if (!(eventHandle = elemData.handle)) {
            eventHandle = elemData.handle = function(e) {
              return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
            };
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              continue;
            }
            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            special = jQuery.event.special[type] || {};
            handleObj = jQuery.extend({
              type,
              origType,
              data,
              handler,
              guid: handler.guid,
              selector,
              needsContext: selector && jQuery.expr.match.needsContext.test(selector),
              namespace: namespaces.join(".")
            }, handleObjIn);
            if (!(handlers = events[type])) {
              handlers = events[type] = [];
              handlers.delegateCount = 0;
              if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                if (elem.addEventListener) {
                  elem.addEventListener(type, eventHandle);
                }
              }
            }
            if (special.add) {
              special.add.call(elem, handleObj);
              if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid;
              }
            }
            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
              handlers.push(handleObj);
            }
            jQuery.event.global[type] = true;
          }
        },
        remove: function(elem, types, handler, selector, mappedTypes) {
          var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
          if (!elemData || !(events = elemData.events)) {
            return;
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              for (type in events) {
                jQuery.event.remove(elem, type + types[t], handler, selector, true);
              }
              continue;
            }
            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
            origCount = j = handlers.length;
            while (j--) {
              handleObj = handlers[j];
              if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                handlers.splice(j, 1);
                if (handleObj.selector) {
                  handlers.delegateCount--;
                }
                if (special.remove) {
                  special.remove.call(elem, handleObj);
                }
              }
            }
            if (origCount && !handlers.length) {
              if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                jQuery.removeEvent(elem, type, elemData.handle);
              }
              delete events[type];
            }
          }
          if (jQuery.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events");
          }
        },
        dispatch: function(nativeEvent) {
          var event = jQuery.event.fix(nativeEvent);
          var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), handlers = (dataPriv.get(this, "events") || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
          args[0] = event;
          for (i = 1; i < arguments.length; i++) {
            args[i] = arguments[i];
          }
          event.delegateTarget = this;
          if (special.preDispatch && special.preDispatch.call(this, event) === false) {
            return;
          }
          handlerQueue = jQuery.event.handlers.call(this, event, handlers);
          i = 0;
          while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
            event.currentTarget = matched.elem;
            j = 0;
            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
              if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                if (ret !== void 0) {
                  if ((event.result = ret) === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }
              }
            }
          }
          if (special.postDispatch) {
            special.postDispatch.call(this, event);
          }
          return event.result;
        },
        handlers: function(event, handlers) {
          var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
          if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
            for (; cur !== this; cur = cur.parentNode || this) {
              if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                matchedHandlers = [];
                matchedSelectors = {};
                for (i = 0; i < delegateCount; i++) {
                  handleObj = handlers[i];
                  sel = handleObj.selector + " ";
                  if (matchedSelectors[sel] === void 0) {
                    matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                  }
                  if (matchedSelectors[sel]) {
                    matchedHandlers.push(handleObj);
                  }
                }
                if (matchedHandlers.length) {
                  handlerQueue.push({elem: cur, handlers: matchedHandlers});
                }
              }
            }
          }
          cur = this;
          if (delegateCount < handlers.length) {
            handlerQueue.push({elem: cur, handlers: handlers.slice(delegateCount)});
          }
          return handlerQueue;
        },
        addProp: function(name, hook) {
          Object.defineProperty(jQuery.Event.prototype, name, {
            enumerable: true,
            configurable: true,
            get: isFunction5(hook) ? function() {
              if (this.originalEvent) {
                return hook(this.originalEvent);
              }
            } : function() {
              if (this.originalEvent) {
                return this.originalEvent[name];
              }
            },
            set: function(value) {
              Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value
              });
            }
          });
        },
        fix: function(originalEvent) {
          return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
        },
        special: {
          load: {
            noBubble: true
          },
          click: {
            setup: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click", returnTrue);
              }
              return false;
            },
            trigger: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click");
              }
              return true;
            },
            _default: function(event) {
              var target = event.target;
              return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
            }
          },
          beforeunload: {
            postDispatch: function(event) {
              if (event.result !== void 0 && event.originalEvent) {
                event.originalEvent.returnValue = event.result;
              }
            }
          }
        }
      };
      function leverageNative(el, type, expectSync2) {
        if (!expectSync2) {
          if (dataPriv.get(el, type) === void 0) {
            jQuery.event.add(el, type, returnTrue);
          }
          return;
        }
        dataPriv.set(el, type, false);
        jQuery.event.add(el, type, {
          namespace: false,
          handler: function(event) {
            var notAsync, result, saved = dataPriv.get(this, type);
            if (event.isTrigger & 1 && this[type]) {
              if (!saved.length) {
                saved = slice.call(arguments);
                dataPriv.set(this, type, saved);
                notAsync = expectSync2(this, type);
                this[type]();
                result = dataPriv.get(this, type);
                if (saved !== result || notAsync) {
                  dataPriv.set(this, type, false);
                } else {
                  result = {};
                }
                if (saved !== result) {
                  event.stopImmediatePropagation();
                  event.preventDefault();
                  return result.value;
                }
              } else if ((jQuery.event.special[type] || {}).delegateType) {
                event.stopPropagation();
              }
            } else if (saved.length) {
              dataPriv.set(this, type, {
                value: jQuery.event.trigger(jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
              });
              event.stopImmediatePropagation();
            }
          }
        });
      }
      jQuery.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
          elem.removeEventListener(type, handle);
        }
      };
      jQuery.Event = function(src, props) {
        if (!(this instanceof jQuery.Event)) {
          return new jQuery.Event(src, props);
        }
        if (src && src.type) {
          this.originalEvent = src;
          this.type = src.type;
          this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && src.returnValue === false ? returnTrue : returnFalse;
          this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget;
        } else {
          this.type = src;
        }
        if (props) {
          jQuery.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || Date.now();
        this[jQuery.expando] = true;
      };
      jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = returnTrue;
          if (e && !this.isSimulated) {
            e.preventDefault();
          }
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopPropagation();
          }
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopImmediatePropagation();
          }
          this.stopPropagation();
        }
      };
      jQuery.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        char: true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: function(event) {
          var button = event.button;
          if (event.which == null && rkeyEvent.test(event.type)) {
            return event.charCode != null ? event.charCode : event.keyCode;
          }
          if (!event.which && button !== void 0 && rmouseEvent.test(event.type)) {
            if (button & 1) {
              return 1;
            }
            if (button & 2) {
              return 3;
            }
            if (button & 4) {
              return 2;
            }
            return 0;
          }
          return event.which;
        }
      }, jQuery.event.addProp);
      jQuery.each({focus: "focusin", blur: "focusout"}, function(type, delegateType) {
        jQuery.event.special[type] = {
          setup: function() {
            leverageNative(this, type, expectSync);
            return false;
          },
          trigger: function() {
            leverageNative(this, type);
            return true;
          },
          delegateType
        };
      });
      jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(orig, fix) {
        jQuery.event.special[orig] = {
          delegateType: fix,
          bindType: fix,
          handle: function(event) {
            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
            if (!related || related !== target && !jQuery.contains(target, related)) {
              event.type = handleObj.origType;
              ret = handleObj.handler.apply(this, arguments);
              event.type = fix;
            }
            return ret;
          }
        };
      });
      jQuery.fn.extend({
        on: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
          var handleObj, type;
          if (types && types.preventDefault && types.handleObj) {
            handleObj = types.handleObj;
            jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
            return this;
          }
          if (typeof types === "object") {
            for (type in types) {
              this.off(type, selector, types[type]);
            }
            return this;
          }
          if (selector === false || typeof selector === "function") {
            fn = selector;
            selector = void 0;
          }
          if (fn === false) {
            fn = returnFalse;
          }
          return this.each(function() {
            jQuery.event.remove(this, types, fn, selector);
          });
        }
      });
      var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
          return jQuery(elem).children("tbody")[0] || elem;
        }
        return elem;
      }
      function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
      }
      function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") {
          elem.type = elem.type.slice(5);
        } else {
          elem.removeAttribute("type");
        }
        return elem;
      }
      function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
          return;
        }
        if (dataPriv.hasData(src)) {
          pdataOld = dataPriv.access(src);
          pdataCur = dataPriv.set(dest, pdataOld);
          events = pdataOld.events;
          if (events) {
            delete pdataCur.handle;
            pdataCur.events = {};
            for (type in events) {
              for (i = 0, l = events[type].length; i < l; i++) {
                jQuery.event.add(dest, type, events[type][i]);
              }
            }
          }
        }
        if (dataUser.hasData(src)) {
          udataOld = dataUser.access(src);
          udataCur = jQuery.extend({}, udataOld);
          dataUser.set(dest, udataCur);
        }
      }
      function fixInput(src, dest) {
        var nodeName2 = dest.nodeName.toLowerCase();
        if (nodeName2 === "input" && rcheckableType.test(src.type)) {
          dest.checked = src.checked;
        } else if (nodeName2 === "input" || nodeName2 === "textarea") {
          dest.defaultValue = src.defaultValue;
        }
      }
      function domManip(collection, args, callback, ignored) {
        args = concat.apply([], args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction5(value);
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
          return collection.each(function(index) {
            var self2 = collection.eq(index);
            if (valueIsFunction) {
              args[0] = value.call(this, index, self2.html());
            }
            domManip(self2, args, callback, ignored);
          });
        }
        if (l) {
          fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
          first = fragment.firstChild;
          if (fragment.childNodes.length === 1) {
            fragment = first;
          }
          if (first || ignored) {
            scripts = jQuery.map(getAll(fragment, "script"), disableScript);
            hasScripts = scripts.length;
            for (; i < l; i++) {
              node = fragment;
              if (i !== iNoClone) {
                node = jQuery.clone(node, true, true);
                if (hasScripts) {
                  jQuery.merge(scripts, getAll(node, "script"));
                }
              }
              callback.call(collection[i], node, i);
            }
            if (hasScripts) {
              doc = scripts[scripts.length - 1].ownerDocument;
              jQuery.map(scripts, restoreScript);
              for (i = 0; i < hasScripts; i++) {
                node = scripts[i];
                if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                  if (node.src && (node.type || "").toLowerCase() !== "module") {
                    if (jQuery._evalUrl && !node.noModule) {
                      jQuery._evalUrl(node.src, {
                        nonce: node.nonce || node.getAttribute("nonce")
                      });
                    }
                  } else {
                    DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                  }
                }
              }
            }
          }
        }
        return collection;
      }
      function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
        for (; (node = nodes[i]) != null; i++) {
          if (!keepData && node.nodeType === 1) {
            jQuery.cleanData(getAll(node));
          }
          if (node.parentNode) {
            if (keepData && isAttached(node)) {
              setGlobalEval(getAll(node, "script"));
            }
            node.parentNode.removeChild(node);
          }
        }
        return elem;
      }
      jQuery.extend({
        htmlPrefilter: function(html2) {
          return html2.replace(rxhtmlTag, "<$1></$2>");
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
          var i, l, srcElements, destElements, clone5 = elem.cloneNode(true), inPage = isAttached(elem);
          if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
            destElements = getAll(clone5);
            srcElements = getAll(elem);
            for (i = 0, l = srcElements.length; i < l; i++) {
              fixInput(srcElements[i], destElements[i]);
            }
          }
          if (dataAndEvents) {
            if (deepDataAndEvents) {
              srcElements = srcElements || getAll(elem);
              destElements = destElements || getAll(clone5);
              for (i = 0, l = srcElements.length; i < l; i++) {
                cloneCopyEvent(srcElements[i], destElements[i]);
              }
            } else {
              cloneCopyEvent(elem, clone5);
            }
          }
          destElements = getAll(clone5, "script");
          if (destElements.length > 0) {
            setGlobalEval(destElements, !inPage && getAll(elem, "script"));
          }
          return clone5;
        },
        cleanData: function(elems) {
          var data, elem, type, special = jQuery.event.special, i = 0;
          for (; (elem = elems[i]) !== void 0; i++) {
            if (acceptData(elem)) {
              if (data = elem[dataPriv.expando]) {
                if (data.events) {
                  for (type in data.events) {
                    if (special[type]) {
                      jQuery.event.remove(elem, type);
                    } else {
                      jQuery.removeEvent(elem, type, data.handle);
                    }
                  }
                }
                elem[dataPriv.expando] = void 0;
              }
              if (elem[dataUser.expando]) {
                elem[dataUser.expando] = void 0;
              }
            }
          }
        }
      });
      jQuery.fn.extend({
        detach: function(selector) {
          return remove(this, selector, true);
        },
        remove: function(selector) {
          return remove(this, selector);
        },
        text: function(value) {
          return access(this, function(value2) {
            return value2 === void 0 ? jQuery.text(this) : this.empty().each(function() {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = value2;
              }
            });
          }, null, value, arguments.length);
        },
        append: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.appendChild(elem);
            }
          });
        },
        prepend: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.insertBefore(elem, target.firstChild);
            }
          });
        },
        before: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this);
            }
          });
        },
        after: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this.nextSibling);
            }
          });
        },
        empty: function() {
          var elem, i = 0;
          for (; (elem = this[i]) != null; i++) {
            if (elem.nodeType === 1) {
              jQuery.cleanData(getAll(elem, false));
              elem.textContent = "";
            }
          }
          return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
          dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
          deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
          return this.map(function() {
            return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
          });
        },
        html: function(value) {
          return access(this, function(value2) {
            var elem = this[0] || {}, i = 0, l = this.length;
            if (value2 === void 0 && elem.nodeType === 1) {
              return elem.innerHTML;
            }
            if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
              value2 = jQuery.htmlPrefilter(value2);
              try {
                for (; i < l; i++) {
                  elem = this[i] || {};
                  if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, false));
                    elem.innerHTML = value2;
                  }
                }
                elem = 0;
              } catch (e) {
              }
            }
            if (elem) {
              this.empty().append(value2);
            }
          }, null, value, arguments.length);
        },
        replaceWith: function() {
          var ignored = [];
          return domManip(this, arguments, function(elem) {
            var parent = this.parentNode;
            if (jQuery.inArray(this, ignored) < 0) {
              jQuery.cleanData(getAll(this));
              if (parent) {
                parent.replaceChild(elem, this);
              }
            }
          }, ignored);
        }
      });
      jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(name, original) {
        jQuery.fn[name] = function(selector) {
          var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
          for (; i <= last; i++) {
            elems = i === last ? this : this.clone(true);
            jQuery(insert[i])[original](elems);
            push.apply(ret, elems.get());
          }
          return this.pushStack(ret);
        };
      });
      var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
      var getStyles = function(elem) {
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
          view = window2;
        }
        return view.getComputedStyle(elem);
      };
      var rboxStyle = new RegExp(cssExpand.join("|"), "i");
      (function() {
        function computeStyleTests() {
          if (!div) {
            return;
          }
          container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
          div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
          documentElement.appendChild(container).appendChild(div);
          var divStyle = window2.getComputedStyle(div);
          pixelPositionVal = divStyle.top !== "1%";
          reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
          div.style.right = "60%";
          pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
          boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
          div.style.position = "absolute";
          scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
          documentElement.removeChild(container);
          div = null;
        }
        function roundPixelMeasures(measure) {
          return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
        if (!div.style) {
          return;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery.extend(support, {
          boxSizingReliable: function() {
            computeStyleTests();
            return boxSizingReliableVal;
          },
          pixelBoxStyles: function() {
            computeStyleTests();
            return pixelBoxStylesVal;
          },
          pixelPosition: function() {
            computeStyleTests();
            return pixelPositionVal;
          },
          reliableMarginLeft: function() {
            computeStyleTests();
            return reliableMarginLeftVal;
          },
          scrollboxSize: function() {
            computeStyleTests();
            return scrollboxSizeVal;
          }
        });
      })();
      function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, style = elem.style;
        computed = computed || getStyles(elem);
        if (computed) {
          ret = computed.getPropertyValue(name) || computed[name];
          if (ret === "" && !isAttached(elem)) {
            ret = jQuery.style(elem, name);
          }
          if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
            width = style.width;
            minWidth = style.minWidth;
            maxWidth = style.maxWidth;
            style.minWidth = style.maxWidth = style.width = ret;
            ret = computed.width;
            style.width = width;
            style.minWidth = minWidth;
            style.maxWidth = maxWidth;
          }
        }
        return ret !== void 0 ? ret + "" : ret;
      }
      function addGetHookIf(conditionFn, hookFn) {
        return {
          get: function() {
            if (conditionFn()) {
              delete this.get;
              return;
            }
            return (this.get = hookFn).apply(this, arguments);
          }
        };
      }
      var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
      function vendorPropName(name) {
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while (i--) {
          name = cssPrefixes[i] + capName;
          if (name in emptyStyle) {
            return name;
          }
        }
      }
      function finalPropName(name) {
        var final = jQuery.cssProps[name] || vendorProps[name];
        if (final) {
          return final;
        }
        if (name in emptyStyle) {
          return name;
        }
        return vendorProps[name] = vendorPropName(name) || name;
      }
      var rdisplayswap = /^(none|table(?!-c[ea]).+)/, rcustomProp = /^--/, cssShow = {position: "absolute", visibility: "hidden", display: "block"}, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      };
      function setPositiveNumber(elem, value, subtract3) {
        var matches = rcssNum.exec(value);
        return matches ? Math.max(0, matches[2] - (subtract3 || 0)) + (matches[3] || "px") : value;
      }
      function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
        if (box === (isBorderBox ? "border" : "content")) {
          return 0;
        }
        for (; i < 4; i += 2) {
          if (box === "margin") {
            delta += jQuery.css(elem, box + cssExpand[i], true, styles);
          }
          if (!isBorderBox) {
            delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
            if (box !== "padding") {
              delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            } else {
              extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          } else {
            if (box === "content") {
              delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
            }
            if (box !== "margin") {
              delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          }
        }
        if (!isBorderBox && computedVal >= 0) {
          delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5)) || 0;
        }
        return delta;
      }
      function getWidthOrHeight(elem, dimension, extra) {
        var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        if (rnumnonpx.test(val)) {
          if (!extra) {
            return val;
          }
          val = "auto";
        }
        if ((!support.boxSizingReliable() && isBorderBox || val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
          isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
          valueIsBorderBox = offsetProp in elem;
          if (valueIsBorderBox) {
            val = elem[offsetProp];
          }
        }
        val = parseFloat(val) || 0;
        return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val) + "px";
      }
      jQuery.extend({
        cssHooks: {
          opacity: {
            get: function(elem, computed) {
              if (computed) {
                var ret = curCSS(elem, "opacity");
                return ret === "" ? "1" : ret;
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: true,
          columnCount: true,
          fillOpacity: true,
          flexGrow: true,
          flexShrink: true,
          fontWeight: true,
          gridArea: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnStart: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowStart: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          widows: true,
          zIndex: true,
          zoom: true
        },
        cssProps: {},
        style: function(elem, name, value, extra) {
          if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
            return;
          }
          var ret, type, hooks20, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks20 = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
          if (value !== void 0) {
            type = typeof value;
            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
              value = adjustCSS(elem, name, ret);
              type = "number";
            }
            if (value == null || value !== value) {
              return;
            }
            if (type === "number" && !isCustomProp) {
              value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
            }
            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
              style[name] = "inherit";
            }
            if (!hooks20 || !("set" in hooks20) || (value = hooks20.set(elem, value, extra)) !== void 0) {
              if (isCustomProp) {
                style.setProperty(name, value);
              } else {
                style[name] = value;
              }
            }
          } else {
            if (hooks20 && "get" in hooks20 && (ret = hooks20.get(elem, false, extra)) !== void 0) {
              return ret;
            }
            return style[name];
          }
        },
        css: function(elem, name, extra, styles) {
          var val, num, hooks20, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks20 = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
          if (hooks20 && "get" in hooks20) {
            val = hooks20.get(elem, true, extra);
          }
          if (val === void 0) {
            val = curCSS(elem, name, styles);
          }
          if (val === "normal" && name in cssNormalTransform) {
            val = cssNormalTransform[name];
          }
          if (extra === "" || extra) {
            num = parseFloat(val);
            return extra === true || isFinite(num) ? num || 0 : val;
          }
          return val;
        }
      });
      jQuery.each(["height", "width"], function(i, dimension) {
        jQuery.cssHooks[dimension] = {
          get: function(elem, computed, extra) {
            if (computed) {
              return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                return getWidthOrHeight(elem, dimension, extra);
              }) : getWidthOrHeight(elem, dimension, extra);
            }
          },
          set: function(elem, value, extra) {
            var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract3 = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
            if (isBorderBox && scrollboxSizeBuggy) {
              subtract3 -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
            }
            if (subtract3 && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
              elem.style[dimension] = value;
              value = jQuery.css(elem, dimension);
            }
            return setPositiveNumber(elem, value, subtract3);
          }
        };
      });
      jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
        if (computed) {
          return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {marginLeft: 0}, function() {
            return elem.getBoundingClientRect().left;
          })) + "px";
        }
      });
      jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
          expand: function(value) {
            var i = 0, expanded = {}, parts5 = typeof value === "string" ? value.split(" ") : [value];
            for (; i < 4; i++) {
              expanded[prefix + cssExpand[i] + suffix] = parts5[i] || parts5[i - 2] || parts5[0];
            }
            return expanded;
          }
        };
        if (prefix !== "margin") {
          jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
      });
      jQuery.fn.extend({
        css: function(name, value) {
          return access(this, function(elem, name2, value2) {
            var styles, len, map4 = {}, i = 0;
            if (Array.isArray(name2)) {
              styles = getStyles(elem);
              len = name2.length;
              for (; i < len; i++) {
                map4[name2[i]] = jQuery.css(elem, name2[i], false, styles);
              }
              return map4;
            }
            return value2 !== void 0 ? jQuery.style(elem, name2, value2) : jQuery.css(elem, name2);
          }, name, value, arguments.length > 1);
        }
      });
      function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
      }
      jQuery.Tween = Tween;
      Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
          this.elem = elem;
          this.prop = prop;
          this.easing = easing || jQuery.easing._default;
          this.options = options;
          this.start = this.now = this.cur();
          this.end = end;
          this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
          var hooks20 = Tween.propHooks[this.prop];
          return hooks20 && hooks20.get ? hooks20.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
          var eased, hooks20 = Tween.propHooks[this.prop];
          if (this.options.duration) {
            this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
          } else {
            this.pos = eased = percent;
          }
          this.now = (this.end - this.start) * eased + this.start;
          if (this.options.step) {
            this.options.step.call(this.elem, this.now, this);
          }
          if (hooks20 && hooks20.set) {
            hooks20.set(this);
          } else {
            Tween.propHooks._default.set(this);
          }
          return this;
        }
      };
      Tween.prototype.init.prototype = Tween.prototype;
      Tween.propHooks = {
        _default: {
          get: function(tween) {
            var result;
            if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
              return tween.elem[tween.prop];
            }
            result = jQuery.css(tween.elem, tween.prop, "");
            return !result || result === "auto" ? 0 : result;
          },
          set: function(tween) {
            if (jQuery.fx.step[tween.prop]) {
              jQuery.fx.step[tween.prop](tween);
            } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
              jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
            } else {
              tween.elem[tween.prop] = tween.now;
            }
          }
        }
      };
      Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
          if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
          }
        }
      };
      jQuery.easing = {
        linear: function(p) {
          return p;
        },
        swing: function(p) {
          return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
      };
      jQuery.fx = Tween.prototype.init;
      jQuery.fx.step = {};
      var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
      function schedule() {
        if (inProgress) {
          if (document2.hidden === false && window2.requestAnimationFrame) {
            window2.requestAnimationFrame(schedule);
          } else {
            window2.setTimeout(schedule, jQuery.fx.interval);
          }
          jQuery.fx.tick();
        }
      }
      function createFxNow() {
        window2.setTimeout(function() {
          fxNow = void 0;
        });
        return fxNow = Date.now();
      }
      function genFx(type, includeWidth) {
        var which, i = 0, attrs = {height: type};
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
          which = cssExpand[i];
          attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
          attrs.opacity = attrs.width = type;
        }
        return attrs;
      }
      function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for (; index < length; index++) {
          if (tween = collection[index].call(animation, prop, value)) {
            return tween;
          }
        }
      }
      function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks20, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        if (!opts.queue) {
          hooks20 = jQuery._queueHooks(elem, "fx");
          if (hooks20.unqueued == null) {
            hooks20.unqueued = 0;
            oldfire = hooks20.empty.fire;
            hooks20.empty.fire = function() {
              if (!hooks20.unqueued) {
                oldfire();
              }
            };
          }
          hooks20.unqueued++;
          anim.always(function() {
            anim.always(function() {
              hooks20.unqueued--;
              if (!jQuery.queue(elem, "fx").length) {
                hooks20.empty.fire();
              }
            });
          });
        }
        for (prop in props) {
          value = props[prop];
          if (rfxtypes.test(value)) {
            delete props[prop];
            toggle = toggle || value === "toggle";
            if (value === (hidden ? "hide" : "show")) {
              if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                hidden = true;
              } else {
                continue;
              }
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
          }
        }
        propTween = !jQuery.isEmptyObject(props);
        if (!propTween && jQuery.isEmptyObject(orig)) {
          return;
        }
        if (isBox && elem.nodeType === 1) {
          opts.overflow = [style.overflow, style.overflowX, style.overflowY];
          restoreDisplay = dataShow && dataShow.display;
          if (restoreDisplay == null) {
            restoreDisplay = dataPriv.get(elem, "display");
          }
          display = jQuery.css(elem, "display");
          if (display === "none") {
            if (restoreDisplay) {
              display = restoreDisplay;
            } else {
              showHide([elem], true);
              restoreDisplay = elem.style.display || restoreDisplay;
              display = jQuery.css(elem, "display");
              showHide([elem]);
            }
          }
          if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
            if (jQuery.css(elem, "float") === "none") {
              if (!propTween) {
                anim.done(function() {
                  style.display = restoreDisplay;
                });
                if (restoreDisplay == null) {
                  display = style.display;
                  restoreDisplay = display === "none" ? "" : display;
                }
              }
              style.display = "inline-block";
            }
          }
        }
        if (opts.overflow) {
          style.overflow = "hidden";
          anim.always(function() {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
          });
        }
        propTween = false;
        for (prop in orig) {
          if (!propTween) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", {display: restoreDisplay});
            }
            if (toggle) {
              dataShow.hidden = !hidden;
            }
            if (hidden) {
              showHide([elem], true);
            }
            anim.done(function() {
              if (!hidden) {
                showHide([elem]);
              }
              dataPriv.remove(elem, "fxshow");
              for (prop in orig) {
                jQuery.style(elem, prop, orig[prop]);
              }
            });
          }
          propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
          if (!(prop in dataShow)) {
            dataShow[prop] = propTween.start;
            if (hidden) {
              propTween.end = propTween.start;
              propTween.start = 0;
            }
          }
        }
      }
      function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks20;
        for (index in props) {
          name = camelCase(index);
          easing = specialEasing[name];
          value = props[index];
          if (Array.isArray(value)) {
            easing = value[1];
            value = props[index] = value[0];
          }
          if (index !== name) {
            props[name] = value;
            delete props[index];
          }
          hooks20 = jQuery.cssHooks[name];
          if (hooks20 && "expand" in hooks20) {
            value = hooks20.expand(value);
            delete props[name];
            for (index in value) {
              if (!(index in props)) {
                props[index] = value[index];
                specialEasing[index] = easing;
              }
            }
          } else {
            specialEasing[name] = easing;
          }
        }
      }
      function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
          delete tick.elem;
        }), tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
          for (; index2 < length2; index2++) {
            animation.tweens[index2].run(percent);
          }
          deferred.notifyWith(elem, [animation, percent, remaining]);
          if (percent < 1 && length2) {
            return remaining;
          }
          if (!length2) {
            deferred.notifyWith(elem, [animation, 1, 0]);
          }
          deferred.resolveWith(elem, [animation]);
          return false;
        }, animation = deferred.promise({
          elem,
          props: jQuery.extend({}, properties),
          opts: jQuery.extend(true, {
            specialEasing: {},
            easing: jQuery.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end) {
            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(1);
            }
            if (gotoEnd) {
              deferred.notifyWith(elem, [animation, 1, 0]);
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }
            return this;
          }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (; index < length; index++) {
          result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
          if (result) {
            if (isFunction5(result.stop)) {
              jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
            }
            return result;
          }
        }
        jQuery.map(props, createTween, animation);
        if (isFunction5(animation.opts.start)) {
          animation.opts.start.call(elem, animation);
        }
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery.fx.timer(jQuery.extend(tick, {
          elem,
          anim: animation,
          queue: animation.opts.queue
        }));
        return animation;
      }
      jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
          "*": [function(prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween;
          }]
        },
        tweener: function(props, callback) {
          if (isFunction5(props)) {
            callback = props;
            props = ["*"];
          } else {
            props = props.match(rnothtmlwhite);
          }
          var prop, index = 0, length = props.length;
          for (; index < length; index++) {
            prop = props[index];
            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
            Animation.tweeners[prop].unshift(callback);
          }
        },
        prefilters: [defaultPrefilter],
        prefilter: function(callback, prepend) {
          if (prepend) {
            Animation.prefilters.unshift(callback);
          } else {
            Animation.prefilters.push(callback);
          }
        }
      });
      jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
          complete: fn || !fn && easing || isFunction5(speed) && speed,
          duration: speed,
          easing: fn && easing || easing && !isFunction5(easing) && easing
        };
        if (jQuery.fx.off) {
          opt.duration = 0;
        } else {
          if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery.fx.speeds) {
              opt.duration = jQuery.fx.speeds[opt.duration];
            } else {
              opt.duration = jQuery.fx.speeds._default;
            }
          }
        }
        if (opt.queue == null || opt.queue === true) {
          opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
          if (isFunction5(opt.old)) {
            opt.old.call(this);
          }
          if (opt.queue) {
            jQuery.dequeue(this, opt.queue);
          }
        };
        return opt;
      };
      jQuery.fn.extend({
        fadeTo: function(speed, to3, easing, callback) {
          return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({opacity: to3}, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
          var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
            var anim = Animation(this, jQuery.extend({}, prop), optall);
            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };
          doAnimation.finish = doAnimation;
          return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
          var stopQueue = function(hooks20) {
            var stop = hooks20.stop;
            delete hooks20.stop;
            stop(gotoEnd);
          };
          if (typeof type !== "string") {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = void 0;
          }
          if (clearQueue && type !== false) {
            this.queue(type || "fx", []);
          }
          return this.each(function() {
            var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
            if (index) {
              if (data[index] && data[index].stop) {
                stopQueue(data[index]);
              }
            } else {
              for (index in data) {
                if (data[index] && data[index].stop && rrun.test(index)) {
                  stopQueue(data[index]);
                }
              }
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                timers[index].anim.stop(gotoEnd);
                dequeue = false;
                timers.splice(index, 1);
              }
            }
            if (dequeue || !gotoEnd) {
              jQuery.dequeue(this, type);
            }
          });
        },
        finish: function(type) {
          if (type !== false) {
            type = type || "fx";
          }
          return this.each(function() {
            var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks20 = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
            data.finish = true;
            jQuery.queue(this, type, []);
            if (hooks20 && hooks20.stop) {
              hooks20.stop.call(this, true);
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && timers[index].queue === type) {
                timers[index].anim.stop(true);
                timers.splice(index, 1);
              }
            }
            for (index = 0; index < length; index++) {
              if (queue[index] && queue[index].finish) {
                queue[index].finish.call(this);
              }
            }
            delete data.finish;
          });
        }
      });
      jQuery.each(["toggle", "show", "hide"], function(i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
          return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
      });
      jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
      }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
          return this.animate(props, speed, easing, callback);
        };
      });
      jQuery.timers = [];
      jQuery.fx.tick = function() {
        var timer, i = 0, timers = jQuery.timers;
        fxNow = Date.now();
        for (; i < timers.length; i++) {
          timer = timers[i];
          if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1);
          }
        }
        if (!timers.length) {
          jQuery.fx.stop();
        }
        fxNow = void 0;
      };
      jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        jQuery.fx.start();
      };
      jQuery.fx.interval = 13;
      jQuery.fx.start = function() {
        if (inProgress) {
          return;
        }
        inProgress = true;
        schedule();
      };
      jQuery.fx.stop = function() {
        inProgress = null;
      };
      jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      };
      jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks20) {
          var timeout = window2.setTimeout(next, time);
          hooks20.stop = function() {
            window2.clearTimeout(timeout);
          };
        });
      };
      (function() {
        var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
        input.type = "checkbox";
        support.checkOn = input.value !== "";
        support.optSelected = opt.selected;
        input = document2.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
      })();
      var boolHook, attrHandle = jQuery.expr.attrHandle;
      jQuery.fn.extend({
        attr: function(name, value) {
          return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
          return this.each(function() {
            jQuery.removeAttr(this, name);
          });
        }
      });
      jQuery.extend({
        attr: function(elem, name, value) {
          var ret, hooks20, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (typeof elem.getAttribute === "undefined") {
            return jQuery.prop(elem, name, value);
          }
          if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
            hooks20 = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
          }
          if (value !== void 0) {
            if (value === null) {
              jQuery.removeAttr(elem, name);
              return;
            }
            if (hooks20 && "set" in hooks20 && (ret = hooks20.set(elem, value, name)) !== void 0) {
              return ret;
            }
            elem.setAttribute(name, value + "");
            return value;
          }
          if (hooks20 && "get" in hooks20 && (ret = hooks20.get(elem, name)) !== null) {
            return ret;
          }
          ret = jQuery.find.attr(elem, name);
          return ret == null ? void 0 : ret;
        },
        attrHooks: {
          type: {
            set: function(elem, value) {
              if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                var val = elem.value;
                elem.setAttribute("type", value);
                if (val) {
                  elem.value = val;
                }
                return value;
              }
            }
          }
        },
        removeAttr: function(elem, value) {
          var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
          if (attrNames && elem.nodeType === 1) {
            while (name = attrNames[i++]) {
              elem.removeAttribute(name);
            }
          }
        }
      });
      boolHook = {
        set: function(elem, value, name) {
          if (value === false) {
            jQuery.removeAttr(elem, name);
          } else {
            elem.setAttribute(name, name);
          }
          return name;
        }
      };
      jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name2, isXML) {
          var ret, handle, lowercaseName = name2.toLowerCase();
          if (!isXML) {
            handle = attrHandle[lowercaseName];
            attrHandle[lowercaseName] = ret;
            ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
            attrHandle[lowercaseName] = handle;
          }
          return ret;
        };
      });
      var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
      jQuery.fn.extend({
        prop: function(name, value) {
          return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
          return this.each(function() {
            delete this[jQuery.propFix[name] || name];
          });
        }
      });
      jQuery.extend({
        prop: function(elem, name, value) {
          var ret, hooks20, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
            name = jQuery.propFix[name] || name;
            hooks20 = jQuery.propHooks[name];
          }
          if (value !== void 0) {
            if (hooks20 && "set" in hooks20 && (ret = hooks20.set(elem, value, name)) !== void 0) {
              return ret;
            }
            return elem[name] = value;
          }
          if (hooks20 && "get" in hooks20 && (ret = hooks20.get(elem, name)) !== null) {
            return ret;
          }
          return elem[name];
        },
        propHooks: {
          tabIndex: {
            get: function(elem) {
              var tabindex = jQuery.find.attr(elem, "tabindex");
              if (tabindex) {
                return parseInt(tabindex, 10);
              }
              if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                return 0;
              }
              return -1;
            }
          }
        },
        propFix: {
          for: "htmlFor",
          class: "className"
        }
      });
      if (!support.optSelected) {
        jQuery.propHooks.selected = {
          get: function(elem) {
            var parent = elem.parentNode;
            if (parent && parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
            return null;
          },
          set: function(elem) {
            var parent = elem.parentNode;
            if (parent) {
              parent.selectedIndex;
              if (parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
            }
          }
        };
      }
      jQuery.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
      });
      function stripAndCollapse(value) {
        var tokens2 = value.match(rnothtmlwhite) || [];
        return tokens2.join(" ");
      }
      function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
      }
      function classesToArray(value) {
        if (Array.isArray(value)) {
          return value;
        }
        if (typeof value === "string") {
          return value.match(rnothtmlwhite) || [];
        }
        return [];
      }
      jQuery.fn.extend({
        addClass: function(value) {
          var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
          if (isFunction5(value)) {
            return this.each(function(j2) {
              jQuery(this).addClass(value.call(this, j2, getClass(this)));
            });
          }
          classes = classesToArray(value);
          if (classes.length) {
            while (elem = this[i++]) {
              curValue = getClass(elem);
              cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                j = 0;
                while (clazz = classes[j++]) {
                  if (cur.indexOf(" " + clazz + " ") < 0) {
                    cur += clazz + " ";
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  elem.setAttribute("class", finalValue);
                }
              }
            }
          }
          return this;
        },
        removeClass: function(value) {
          var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
          if (isFunction5(value)) {
            return this.each(function(j2) {
              jQuery(this).removeClass(value.call(this, j2, getClass(this)));
            });
          }
          if (!arguments.length) {
            return this.attr("class", "");
          }
          classes = classesToArray(value);
          if (classes.length) {
            while (elem = this[i++]) {
              curValue = getClass(elem);
              cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                j = 0;
                while (clazz = classes[j++]) {
                  while (cur.indexOf(" " + clazz + " ") > -1) {
                    cur = cur.replace(" " + clazz + " ", " ");
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  elem.setAttribute("class", finalValue);
                }
              }
            }
          }
          return this;
        },
        toggleClass: function(value, stateVal) {
          var type = typeof value, isValidValue = type === "string" || Array.isArray(value);
          if (typeof stateVal === "boolean" && isValidValue) {
            return stateVal ? this.addClass(value) : this.removeClass(value);
          }
          if (isFunction5(value)) {
            return this.each(function(i) {
              jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
            });
          }
          return this.each(function() {
            var className, i, self2, classNames;
            if (isValidValue) {
              i = 0;
              self2 = jQuery(this);
              classNames = classesToArray(value);
              while (className = classNames[i++]) {
                if (self2.hasClass(className)) {
                  self2.removeClass(className);
                } else {
                  self2.addClass(className);
                }
              }
            } else if (value === void 0 || type === "boolean") {
              className = getClass(this);
              if (className) {
                dataPriv.set(this, "__className__", className);
              }
              if (this.setAttribute) {
                this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
              }
            }
          });
        },
        hasClass: function(selector) {
          var className, elem, i = 0;
          className = " " + selector + " ";
          while (elem = this[i++]) {
            if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
              return true;
            }
          }
          return false;
        }
      });
      var rreturn = /\r/g;
      jQuery.fn.extend({
        val: function(value) {
          var hooks20, ret, valueIsFunction, elem = this[0];
          if (!arguments.length) {
            if (elem) {
              hooks20 = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
              if (hooks20 && "get" in hooks20 && (ret = hooks20.get(elem, "value")) !== void 0) {
                return ret;
              }
              ret = elem.value;
              if (typeof ret === "string") {
                return ret.replace(rreturn, "");
              }
              return ret == null ? "" : ret;
            }
            return;
          }
          valueIsFunction = isFunction5(value);
          return this.each(function(i) {
            var val;
            if (this.nodeType !== 1) {
              return;
            }
            if (valueIsFunction) {
              val = value.call(this, i, jQuery(this).val());
            } else {
              val = value;
            }
            if (val == null) {
              val = "";
            } else if (typeof val === "number") {
              val += "";
            } else if (Array.isArray(val)) {
              val = jQuery.map(val, function(value2) {
                return value2 == null ? "" : value2 + "";
              });
            }
            hooks20 = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
            if (!hooks20 || !("set" in hooks20) || hooks20.set(this, val, "value") === void 0) {
              this.value = val;
            }
          });
        }
      });
      jQuery.extend({
        valHooks: {
          option: {
            get: function(elem) {
              var val = jQuery.find.attr(elem, "value");
              return val != null ? val : stripAndCollapse(jQuery.text(elem));
            }
          },
          select: {
            get: function(elem) {
              var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max2 = one ? index + 1 : options.length;
              if (index < 0) {
                i = max2;
              } else {
                i = one ? index : 0;
              }
              for (; i < max2; i++) {
                option = options[i];
                if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                  value = jQuery(option).val();
                  if (one) {
                    return value;
                  }
                  values.push(value);
                }
              }
              return values;
            },
            set: function(elem, value) {
              var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
              while (i--) {
                option = options[i];
                if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                  optionSet = true;
                }
              }
              if (!optionSet) {
                elem.selectedIndex = -1;
              }
              return values;
            }
          }
        }
      });
      jQuery.each(["radio", "checkbox"], function() {
        jQuery.valHooks[this] = {
          set: function(elem, value) {
            if (Array.isArray(value)) {
              return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
            }
          }
        };
        if (!support.checkOn) {
          jQuery.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
          };
        }
      });
      support.focusin = "onfocusin" in window2;
      var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
        e.stopPropagation();
      };
      jQuery.extend(jQuery.event, {
        trigger: function(event, data, elem, onlyHandlers) {
          var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
          cur = lastElement = tmp = elem = elem || document2;
          if (elem.nodeType === 3 || elem.nodeType === 8) {
            return;
          }
          if (rfocusMorph.test(type + jQuery.event.triggered)) {
            return;
          }
          if (type.indexOf(".") > -1) {
            namespaces = type.split(".");
            type = namespaces.shift();
            namespaces.sort();
          }
          ontype = type.indexOf(":") < 0 && "on" + type;
          event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
          event.isTrigger = onlyHandlers ? 2 : 3;
          event.namespace = namespaces.join(".");
          event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
          event.result = void 0;
          if (!event.target) {
            event.target = elem;
          }
          data = data == null ? [event] : jQuery.makeArray(data, [event]);
          special = jQuery.event.special[type] || {};
          if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
            return;
          }
          if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode;
            }
            for (; cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur;
            }
            if (tmp === (elem.ownerDocument || document2)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
            }
          }
          i = 0;
          while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
            lastElement = cur;
            event.type = i > 1 ? bubbleType : special.bindType || type;
            handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
            if (handle) {
              handle.apply(cur, data);
            }
            handle = ontype && cur[ontype];
            if (handle && handle.apply && acceptData(cur)) {
              event.result = handle.apply(cur, data);
              if (event.result === false) {
                event.preventDefault();
              }
            }
          }
          event.type = type;
          if (!onlyHandlers && !event.isDefaultPrevented()) {
            if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
              if (ontype && isFunction5(elem[type]) && !isWindow(elem)) {
                tmp = elem[ontype];
                if (tmp) {
                  elem[ontype] = null;
                }
                jQuery.event.triggered = type;
                if (event.isPropagationStopped()) {
                  lastElement.addEventListener(type, stopPropagationCallback);
                }
                elem[type]();
                if (event.isPropagationStopped()) {
                  lastElement.removeEventListener(type, stopPropagationCallback);
                }
                jQuery.event.triggered = void 0;
                if (tmp) {
                  elem[ontype] = tmp;
                }
              }
            }
          }
          return event.result;
        },
        simulate: function(type, elem, event) {
          var e = jQuery.extend(new jQuery.Event(), event, {
            type,
            isSimulated: true
          });
          jQuery.event.trigger(e, null, elem);
        }
      });
      jQuery.fn.extend({
        trigger: function(type, data) {
          return this.each(function() {
            jQuery.event.trigger(type, data, this);
          });
        },
        triggerHandler: function(type, data) {
          var elem = this[0];
          if (elem) {
            return jQuery.event.trigger(type, data, elem, true);
          }
        }
      });
      if (!support.focusin) {
        jQuery.each({focus: "focusin", blur: "focusout"}, function(orig, fix) {
          var handler = function(event) {
            jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
          };
          jQuery.event.special[fix] = {
            setup: function() {
              var doc = this.ownerDocument || this, attaches = dataPriv.access(doc, fix);
              if (!attaches) {
                doc.addEventListener(orig, handler, true);
              }
              dataPriv.access(doc, fix, (attaches || 0) + 1);
            },
            teardown: function() {
              var doc = this.ownerDocument || this, attaches = dataPriv.access(doc, fix) - 1;
              if (!attaches) {
                doc.removeEventListener(orig, handler, true);
                dataPriv.remove(doc, fix);
              } else {
                dataPriv.access(doc, fix, attaches);
              }
            }
          };
        });
      }
      var location = window2.location;
      var nonce = Date.now();
      var rquery = /\?/;
      jQuery.parseXML = function(data) {
        var xml;
        if (!data || typeof data !== "string") {
          return null;
        }
        try {
          xml = new window2.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
          xml = void 0;
        }
        if (!xml || xml.getElementsByTagName("parsererror").length) {
          jQuery.error("Invalid XML: " + data);
        }
        return xml;
      };
      var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
      function buildParams(prefix, obj, traditional, add3) {
        var name;
        if (Array.isArray(obj)) {
          jQuery.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix)) {
              add3(prefix, v);
            } else {
              buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add3);
            }
          });
        } else if (!traditional && toType2(obj) === "object") {
          for (name in obj) {
            buildParams(prefix + "[" + name + "]", obj[name], traditional, add3);
          }
        } else {
          add3(prefix, obj);
        }
      }
      jQuery.param = function(a, traditional) {
        var prefix, s = [], add3 = function(key, valueOrFunction) {
          var value = isFunction5(valueOrFunction) ? valueOrFunction() : valueOrFunction;
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) {
          return "";
        }
        if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
          jQuery.each(a, function() {
            add3(this.name, this.value);
          });
        } else {
          for (prefix in a) {
            buildParams(prefix, a[prefix], traditional, add3);
          }
        }
        return s.join("&");
      };
      jQuery.fn.extend({
        serialize: function() {
          return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var elements = jQuery.prop(this, "elements");
            return elements ? jQuery.makeArray(elements) : this;
          }).filter(function() {
            var type = this.type;
            return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
          }).map(function(i, elem) {
            var val = jQuery(this).val();
            if (val == null) {
              return null;
            }
            if (Array.isArray(val)) {
              return jQuery.map(val, function(val2) {
                return {name: elem.name, value: val2.replace(rCRLF, "\r\n")};
              });
            }
            return {name: elem.name, value: val.replace(rCRLF, "\r\n")};
          }).get();
        }
      });
      var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
      originAnchor.href = location.href;
      function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
          if (typeof dataTypeExpression !== "string") {
            func = dataTypeExpression;
            dataTypeExpression = "*";
          }
          var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
          if (isFunction5(func)) {
            while (dataType = dataTypes[i++]) {
              if (dataType[0] === "+") {
                dataType = dataType.slice(1) || "*";
                (structure[dataType] = structure[dataType] || []).unshift(func);
              } else {
                (structure[dataType] = structure[dataType] || []).push(func);
              }
            }
          }
        };
      }
      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect2(dataType) {
          var selected;
          inspected[dataType] = true;
          jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
              options.dataTypes.unshift(dataTypeOrTransport);
              inspect2(dataTypeOrTransport);
              return false;
            } else if (seekingTransport) {
              return !(selected = dataTypeOrTransport);
            }
          });
          return selected;
        }
        return inspect2(options.dataTypes[0]) || !inspected["*"] && inspect2("*");
      }
      function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
          if (src[key] !== void 0) {
            (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
          }
        }
        if (deep) {
          jQuery.extend(true, target, deep);
        }
        return target;
      }
      function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
          dataTypes.shift();
          if (ct === void 0) {
            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
          }
        }
        if (ct) {
          for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
              dataTypes.unshift(type);
              break;
            }
          }
        }
        if (dataTypes[0] in responses) {
          finalDataType = dataTypes[0];
        } else {
          for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
              finalDataType = type;
              break;
            }
            if (!firstDataType) {
              firstDataType = type;
            }
          }
          finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
          if (finalDataType !== dataTypes[0]) {
            dataTypes.unshift(finalDataType);
          }
          return responses[finalDataType];
        }
      }
      function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
          for (conv in s.converters) {
            converters[conv.toLowerCase()] = s.converters[conv];
          }
        }
        current = dataTypes.shift();
        while (current) {
          if (s.responseFields[current]) {
            jqXHR[s.responseFields[current]] = response;
          }
          if (!prev && isSuccess && s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
          }
          prev = current;
          current = dataTypes.shift();
          if (current) {
            if (current === "*") {
              current = prev;
            } else if (prev !== "*" && prev !== current) {
              conv = converters[prev + " " + current] || converters["* " + current];
              if (!conv) {
                for (conv2 in converters) {
                  tmp = conv2.split(" ");
                  if (tmp[1] === current) {
                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                    if (conv) {
                      if (conv === true) {
                        conv = converters[conv2];
                      } else if (converters[conv2] !== true) {
                        current = tmp[0];
                        dataTypes.unshift(tmp[1]);
                      }
                      break;
                    }
                  }
                }
              }
              if (conv !== true) {
                if (conv && s.throws) {
                  response = conv(response);
                } else {
                  try {
                    response = conv(response);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: conv ? e : "No conversion from " + prev + " to " + current
                    };
                  }
                }
              }
            }
          }
        }
        return {state: "success", data: response};
      }
      jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: location.href,
          type: "GET",
          isLocal: rlocalProtocol.test(location.protocol),
          global: true,
          processData: true,
          async: true,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": allTypes,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": true,
            "text json": JSON.parse,
            "text xml": jQuery.parseXML
          },
          flatOptions: {
            url: true,
            context: true
          }
        },
        ajaxSetup: function(target, settings) {
          return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(url, options) {
          if (typeof url === "object") {
            options = url;
            url = void 0;
          }
          options = options || {};
          var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
            readyState: 0,
            getResponseHeader: function(key) {
              var match;
              if (completed2) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while (match = rheaders.exec(responseHeadersString)) {
                    responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                  }
                }
                match = responseHeaders[key.toLowerCase() + " "];
              }
              return match == null ? null : match.join(", ");
            },
            getAllResponseHeaders: function() {
              return completed2 ? responseHeadersString : null;
            },
            setRequestHeader: function(name, value) {
              if (completed2 == null) {
                name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            overrideMimeType: function(type) {
              if (completed2 == null) {
                s.mimeType = type;
              }
              return this;
            },
            statusCode: function(map4) {
              var code;
              if (map4) {
                if (completed2) {
                  jqXHR.always(map4[jqXHR.status]);
                } else {
                  for (code in map4) {
                    statusCode[code] = [statusCode[code], map4[code]];
                  }
                }
              }
              return this;
            },
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
          deferred.promise(jqXHR);
          s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
          s.type = options.method || options.type || s.method || s.type;
          s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
          if (s.crossDomain == null) {
            urlAnchor = document2.createElement("a");
            try {
              urlAnchor.href = s.url;
              urlAnchor.href = urlAnchor.href;
              s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
            } catch (e) {
              s.crossDomain = true;
            }
          }
          if (s.data && s.processData && typeof s.data !== "string") {
            s.data = jQuery.param(s.data, s.traditional);
          }
          inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
          if (completed2) {
            return jqXHR;
          }
          fireGlobals = jQuery.event && s.global;
          if (fireGlobals && jQuery.active++ === 0) {
            jQuery.event.trigger("ajaxStart");
          }
          s.type = s.type.toUpperCase();
          s.hasContent = !rnoContent.test(s.type);
          cacheURL = s.url.replace(rhash, "");
          if (!s.hasContent) {
            uncached = s.url.slice(cacheURL.length);
            if (s.data && (s.processData || typeof s.data === "string")) {
              cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
              delete s.data;
            }
            if (s.cache === false) {
              cacheURL = cacheURL.replace(rantiCache, "$1");
              uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
            }
            s.url = cacheURL + uncached;
          } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            s.data = s.data.replace(r20, "+");
          }
          if (s.ifModified) {
            if (jQuery.lastModified[cacheURL]) {
              jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
            }
            if (jQuery.etag[cacheURL]) {
              jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
            }
          }
          if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s.contentType);
          }
          jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
          for (i in s.headers) {
            jqXHR.setRequestHeader(i, s.headers[i]);
          }
          if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
            return jqXHR.abort();
          }
          strAbort = "abort";
          completeDeferred.add(s.complete);
          jqXHR.done(s.success);
          jqXHR.fail(s.error);
          transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
          if (!transport) {
            done(-1, "No Transport");
          } else {
            jqXHR.readyState = 1;
            if (fireGlobals) {
              globalEventContext.trigger("ajaxSend", [jqXHR, s]);
            }
            if (completed2) {
              return jqXHR;
            }
            if (s.async && s.timeout > 0) {
              timeoutTimer = window2.setTimeout(function() {
                jqXHR.abort("timeout");
              }, s.timeout);
            }
            try {
              completed2 = false;
              transport.send(requestHeaders, done);
            } catch (e) {
              if (completed2) {
                throw e;
              }
              done(-1, e);
            }
          }
          function done(status, nativeStatusText, responses, headers) {
            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
            if (completed2) {
              return;
            }
            completed2 = true;
            if (timeoutTimer) {
              window2.clearTimeout(timeoutTimer);
            }
            transport = void 0;
            responseHeadersString = headers || "";
            jqXHR.readyState = status > 0 ? 4 : 0;
            isSuccess = status >= 200 && status < 300 || status === 304;
            if (responses) {
              response = ajaxHandleResponses(s, jqXHR, responses);
            }
            response = ajaxConvert(s, response, jqXHR, isSuccess);
            if (isSuccess) {
              if (s.ifModified) {
                modified = jqXHR.getResponseHeader("Last-Modified");
                if (modified) {
                  jQuery.lastModified[cacheURL] = modified;
                }
                modified = jqXHR.getResponseHeader("etag");
                if (modified) {
                  jQuery.etag[cacheURL] = modified;
                }
              }
              if (status === 204 || s.type === "HEAD") {
                statusText = "nocontent";
              } else if (status === 304) {
                statusText = "notmodified";
              } else {
                statusText = response.state;
                success = response.data;
                error = response.error;
                isSuccess = !error;
              }
            } else {
              error = statusText;
              if (status || !statusText) {
                statusText = "error";
                if (status < 0) {
                  status = 0;
                }
              }
            }
            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + "";
            if (isSuccess) {
              deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
            } else {
              deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
            }
            jqXHR.statusCode(statusCode);
            statusCode = void 0;
            if (fireGlobals) {
              globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
            }
            completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
            if (fireGlobals) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
              if (!--jQuery.active) {
                jQuery.event.trigger("ajaxStop");
              }
            }
          }
          return jqXHR;
        },
        getJSON: function(url, data, callback) {
          return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
          return jQuery.get(url, void 0, callback, "script");
        }
      });
      jQuery.each(["get", "post"], function(i, method) {
        jQuery[method] = function(url, data, callback, type) {
          if (isFunction5(data)) {
            type = type || callback;
            callback = data;
            data = void 0;
          }
          return jQuery.ajax(jQuery.extend({
            url,
            type: method,
            dataType: type,
            data,
            success: callback
          }, jQuery.isPlainObject(url) && url));
        };
      });
      jQuery._evalUrl = function(url, options) {
        return jQuery.ajax({
          url,
          type: "GET",
          dataType: "script",
          cache: true,
          async: false,
          global: false,
          converters: {
            "text script": function() {
            }
          },
          dataFilter: function(response) {
            jQuery.globalEval(response, options);
          }
        });
      };
      jQuery.fn.extend({
        wrapAll: function(html2) {
          var wrap;
          if (this[0]) {
            if (isFunction5(html2)) {
              html2 = html2.call(this[0]);
            }
            wrap = jQuery(html2, this[0].ownerDocument).eq(0).clone(true);
            if (this[0].parentNode) {
              wrap.insertBefore(this[0]);
            }
            wrap.map(function() {
              var elem = this;
              while (elem.firstElementChild) {
                elem = elem.firstElementChild;
              }
              return elem;
            }).append(this);
          }
          return this;
        },
        wrapInner: function(html2) {
          if (isFunction5(html2)) {
            return this.each(function(i) {
              jQuery(this).wrapInner(html2.call(this, i));
            });
          }
          return this.each(function() {
            var self2 = jQuery(this), contents = self2.contents();
            if (contents.length) {
              contents.wrapAll(html2);
            } else {
              self2.append(html2);
            }
          });
        },
        wrap: function(html2) {
          var htmlIsFunction = isFunction5(html2);
          return this.each(function(i) {
            jQuery(this).wrapAll(htmlIsFunction ? html2.call(this, i) : html2);
          });
        },
        unwrap: function(selector) {
          this.parent(selector).not("body").each(function() {
            jQuery(this).replaceWith(this.childNodes);
          });
          return this;
        }
      });
      jQuery.expr.pseudos.hidden = function(elem) {
        return !jQuery.expr.pseudos.visible(elem);
      };
      jQuery.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
      };
      jQuery.ajaxSettings.xhr = function() {
        try {
          return new window2.XMLHttpRequest();
        } catch (e) {
        }
      };
      var xhrSuccessStatus = {
        0: 200,
        1223: 204
      }, xhrSupported = jQuery.ajaxSettings.xhr();
      support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
      support.ajax = xhrSupported = !!xhrSupported;
      jQuery.ajaxTransport(function(options) {
        var callback, errorCallback;
        if (support.cors || xhrSupported && !options.crossDomain) {
          return {
            send: function(headers, complete) {
              var i, xhr = options.xhr();
              xhr.open(options.type, options.url, options.async, options.username, options.password);
              if (options.xhrFields) {
                for (i in options.xhrFields) {
                  xhr[i] = options.xhrFields[i];
                }
              }
              if (options.mimeType && xhr.overrideMimeType) {
                xhr.overrideMimeType(options.mimeType);
              }
              if (!options.crossDomain && !headers["X-Requested-With"]) {
                headers["X-Requested-With"] = "XMLHttpRequest";
              }
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              }
              callback = function(type) {
                return function() {
                  if (callback) {
                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                    if (type === "abort") {
                      xhr.abort();
                    } else if (type === "error") {
                      if (typeof xhr.status !== "number") {
                        complete(0, "error");
                      } else {
                        complete(xhr.status, xhr.statusText);
                      }
                    } else {
                      complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {binary: xhr.response} : {text: xhr.responseText}, xhr.getAllResponseHeaders());
                    }
                  }
                };
              };
              xhr.onload = callback();
              errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
              if (xhr.onabort !== void 0) {
                xhr.onabort = errorCallback;
              } else {
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                    window2.setTimeout(function() {
                      if (callback) {
                        errorCallback();
                      }
                    });
                  }
                };
              }
              callback = callback("abort");
              try {
                xhr.send(options.hasContent && options.data || null);
              } catch (e) {
                if (callback) {
                  throw e;
                }
              }
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      jQuery.ajaxPrefilter(function(s) {
        if (s.crossDomain) {
          s.contents.script = false;
        }
      });
      jQuery.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(text) {
            jQuery.globalEval(text);
            return text;
          }
        }
      });
      jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === void 0) {
          s.cache = false;
        }
        if (s.crossDomain) {
          s.type = "GET";
        }
      });
      jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain || s.scriptAttrs) {
          var script, callback;
          return {
            send: function(_, complete) {
              script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({charset: s.scriptCharset, src: s.url}).on("load error", callback = function(evt) {
                script.remove();
                callback = null;
                if (evt) {
                  complete(evt.type === "error" ? 404 : 200, evt.type);
                }
              });
              document2.head.appendChild(script[0]);
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
      jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
          this[callback] = true;
          return callback;
        }
      });
      jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
          callbackName = s.jsonpCallback = isFunction5(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
          if (jsonProp) {
            s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
          } else if (s.jsonp !== false) {
            s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
          }
          s.converters["script json"] = function() {
            if (!responseContainer) {
              jQuery.error(callbackName + " was not called");
            }
            return responseContainer[0];
          };
          s.dataTypes[0] = "json";
          overwritten = window2[callbackName];
          window2[callbackName] = function() {
            responseContainer = arguments;
          };
          jqXHR.always(function() {
            if (overwritten === void 0) {
              jQuery(window2).removeProp(callbackName);
            } else {
              window2[callbackName] = overwritten;
            }
            if (s[callbackName]) {
              s.jsonpCallback = originalSettings.jsonpCallback;
              oldCallbacks.push(callbackName);
            }
            if (responseContainer && isFunction5(overwritten)) {
              overwritten(responseContainer[0]);
            }
            responseContainer = overwritten = void 0;
          });
          return "script";
        }
      });
      support.createHTMLDocument = function() {
        var body = document2.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
      }();
      jQuery.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") {
          return [];
        }
        if (typeof context === "boolean") {
          keepScripts = context;
          context = false;
        }
        var base, parsed, scripts;
        if (!context) {
          if (support.createHTMLDocument) {
            context = document2.implementation.createHTMLDocument("");
            base = context.createElement("base");
            base.href = document2.location.href;
            context.head.appendChild(base);
          } else {
            context = document2;
          }
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        if (parsed) {
          return [context.createElement(parsed[1])];
        }
        parsed = buildFragment([data], context, scripts);
        if (scripts && scripts.length) {
          jQuery(scripts).remove();
        }
        return jQuery.merge([], parsed.childNodes);
      };
      jQuery.fn.load = function(url, params, callback) {
        var selector, type, response, self2 = this, off = url.indexOf(" ");
        if (off > -1) {
          selector = stripAndCollapse(url.slice(off));
          url = url.slice(0, off);
        }
        if (isFunction5(params)) {
          callback = params;
          params = void 0;
        } else if (params && typeof params === "object") {
          type = "POST";
        }
        if (self2.length > 0) {
          jQuery.ajax({
            url,
            type: type || "GET",
            dataType: "html",
            data: params
          }).done(function(responseText) {
            response = arguments;
            self2.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
          }).always(callback && function(jqXHR, status) {
            self2.each(function() {
              callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
            });
          });
        }
        return this;
      };
      jQuery.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ], function(i, type) {
        jQuery.fn[type] = function(fn) {
          return this.on(type, fn);
        };
      });
      jQuery.expr.pseudos.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
          return elem === fn.elem;
        }).length;
      };
      jQuery.offset = {
        setOffset: function(elem, options, i) {
          var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
          if (position === "static") {
            elem.style.position = "relative";
          }
          curOffset = curElem.offset();
          curCSSTop = jQuery.css(elem, "top");
          curCSSLeft = jQuery.css(elem, "left");
          calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
          if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;
          } else {
            curTop = parseFloat(curCSSTop) || 0;
            curLeft = parseFloat(curCSSLeft) || 0;
          }
          if (isFunction5(options)) {
            options = options.call(elem, i, jQuery.extend({}, curOffset));
          }
          if (options.top != null) {
            props.top = options.top - curOffset.top + curTop;
          }
          if (options.left != null) {
            props.left = options.left - curOffset.left + curLeft;
          }
          if ("using" in options) {
            options.using.call(elem, props);
          } else {
            curElem.css(props);
          }
        }
      };
      jQuery.fn.extend({
        offset: function(options) {
          if (arguments.length) {
            return options === void 0 ? this : this.each(function(i) {
              jQuery.offset.setOffset(this, options, i);
            });
          }
          var rect, win, elem = this[0];
          if (!elem) {
            return;
          }
          if (!elem.getClientRects().length) {
            return {top: 0, left: 0};
          }
          rect = elem.getBoundingClientRect();
          win = elem.ownerDocument.defaultView;
          return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
          };
        },
        position: function() {
          if (!this[0]) {
            return;
          }
          var offsetParent, offset7, doc, elem = this[0], parentOffset = {top: 0, left: 0};
          if (jQuery.css(elem, "position") === "fixed") {
            offset7 = elem.getBoundingClientRect();
          } else {
            offset7 = this.offset();
            doc = elem.ownerDocument;
            offsetParent = elem.offsetParent || doc.documentElement;
            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.parentNode;
            }
            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
              parentOffset = jQuery(offsetParent).offset();
              parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
              parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
            }
          }
          return {
            top: offset7.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
            left: offset7.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
          };
        },
        offsetParent: function() {
          return this.map(function() {
            var offsetParent = this.offsetParent;
            while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || documentElement;
          });
        }
      });
      jQuery.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function(method, prop) {
        var top = prop === "pageYOffset";
        jQuery.fn[method] = function(val) {
          return access(this, function(elem, method2, val2) {
            var win;
            if (isWindow(elem)) {
              win = elem;
            } else if (elem.nodeType === 9) {
              win = elem.defaultView;
            }
            if (val2 === void 0) {
              return win ? win[prop] : elem[method2];
            }
            if (win) {
              win.scrollTo(!top ? val2 : win.pageXOffset, top ? val2 : win.pageYOffset);
            } else {
              elem[method2] = val2;
            }
          }, method, val, arguments.length);
        };
      });
      jQuery.each(["top", "left"], function(i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
          if (computed) {
            computed = curCSS(elem, prop);
            return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
          }
        });
      });
      jQuery.each({Height: "height", Width: "width"}, function(name, type) {
        jQuery.each({padding: "inner" + name, content: type, "": "outer" + name}, function(defaultExtra, funcName) {
          jQuery.fn[funcName] = function(margin, value) {
            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
            return access(this, function(elem, type2, value2) {
              var doc;
              if (isWindow(elem)) {
                return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
              }
              if (elem.nodeType === 9) {
                doc = elem.documentElement;
                return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
              }
              return value2 === void 0 ? jQuery.css(elem, type2, extra) : jQuery.style(elem, type2, value2, extra);
            }, type, chainable ? margin : void 0, chainable);
          };
        });
      });
      jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(i, name) {
        jQuery.fn[name] = function(data, fn) {
          return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
      });
      jQuery.fn.extend({
        hover: function(fnOver, fnOut) {
          return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
      });
      jQuery.fn.extend({
        bind: function(types, data, fn) {
          return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
          return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
          return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
          return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        }
      });
      jQuery.proxy = function(fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
          tmp = fn[context];
          context = fn;
          fn = tmp;
        }
        if (!isFunction5(fn)) {
          return void 0;
        }
        args = slice.call(arguments, 2);
        proxy = function() {
          return fn.apply(context || this, args.concat(slice.call(arguments)));
        };
        proxy.guid = fn.guid = fn.guid || jQuery.guid++;
        return proxy;
      };
      jQuery.holdReady = function(hold) {
        if (hold) {
          jQuery.readyWait++;
        } else {
          jQuery.ready(true);
        }
      };
      jQuery.isArray = Array.isArray;
      jQuery.parseJSON = JSON.parse;
      jQuery.nodeName = nodeName;
      jQuery.isFunction = isFunction5;
      jQuery.isWindow = isWindow;
      jQuery.camelCase = camelCase;
      jQuery.type = toType2;
      jQuery.now = Date.now;
      jQuery.isNumeric = function(obj) {
        var type = jQuery.type(obj);
        return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
      };
      if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
          return jQuery;
        });
      }
      var _jQuery = window2.jQuery, _$ = window2.$;
      jQuery.noConflict = function(deep) {
        if (window2.$ === jQuery) {
          window2.$ = _$;
        }
        if (deep && window2.jQuery === jQuery) {
          window2.jQuery = _jQuery;
        }
        return jQuery;
      };
      if (!noGlobal) {
        window2.jQuery = window2.$ = jQuery;
      }
      return jQuery;
    });
  });

  // node_modules/lodash-es/isBuffer.js
  var require_isBuffer = __commonJS((exports, module) => {
    __export(exports, {
      default: () => isBuffer_default
    });
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root_default.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer7 = nativeIsBuffer || stubFalse_default;
    var isBuffer_default = isBuffer7;
  });

  // node_modules/lodash-es/_nodeUtil.js
  var require_nodeUtil = __commonJS((exports, module) => {
    __export(exports, {
      default: () => nodeUtil_default
    });
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal_default.process;
    var nodeUtil3 = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeUtil_default = nodeUtil3;
  });

  // node_modules/moment/moment.js
  var require_moment = __commonJS((exports, module) => {
    //! moment.js
    //! version : 2.27.0
    //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
    //! license : MIT
    //! momentjs.com
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global2.moment = factory();
    })(exports, function() {
      "use strict";
      var hookCallback2;
      function hooks20() {
        return hookCallback2.apply(null, arguments);
      }
      function setHookCallback2(callback) {
        hookCallback2 = callback;
      }
      function isArray13(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
      }
      function isObject6(input) {
        return input != null && Object.prototype.toString.call(input) === "[object Object]";
      }
      function hasOwnProp2(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
      }
      function isObjectEmpty2(obj) {
        if (Object.getOwnPropertyNames) {
          return Object.getOwnPropertyNames(obj).length === 0;
        } else {
          var k;
          for (k in obj) {
            if (hasOwnProp2(obj, k)) {
              return false;
            }
          }
          return true;
        }
      }
      function isUndefined2(input) {
        return input === void 0;
      }
      function isNumber2(input) {
        return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
      }
      function isDate2(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
      }
      function map4(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
          res.push(fn(arr[i], i));
        }
        return res;
      }
      function extend7(a, b) {
        for (var i in b) {
          if (hasOwnProp2(b, i)) {
            a[i] = b[i];
          }
        }
        if (hasOwnProp2(b, "toString")) {
          a.toString = b.toString;
        }
        if (hasOwnProp2(b, "valueOf")) {
          a.valueOf = b.valueOf;
        }
        return a;
      }
      function createUTC2(input, format24, locale6, strict) {
        return createLocalOrUTC2(input, format24, locale6, strict, true).utc();
      }
      function defaultParsingFlags2() {
        return {
          empty: false,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: false,
          invalidEra: null,
          invalidMonth: null,
          invalidFormat: false,
          userInvalidated: false,
          iso: false,
          parsedDateParts: [],
          era: null,
          meridiem: null,
          rfc2822: false,
          weekdayMismatch: false
        };
      }
      function getParsingFlags2(m) {
        if (m._pf == null) {
          m._pf = defaultParsingFlags2();
        }
        return m._pf;
      }
      var some3;
      if (Array.prototype.some) {
        some3 = Array.prototype.some;
      } else {
        some3 = function(fun) {
          var t = Object(this), len = t.length >>> 0, i;
          for (i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
              return true;
            }
          }
          return false;
        };
      }
      function isValid4(m) {
        if (m._isValid == null) {
          var flags = getParsingFlags2(m), parsedParts = some3.call(flags.parsedDateParts, function(i) {
            return i != null;
          }), isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
          if (m._strict) {
            isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
          }
          if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
          } else {
            return isNowValid;
          }
        }
        return m._isValid;
      }
      function createInvalid3(flags) {
        var m = createUTC2(NaN);
        if (flags != null) {
          extend7(getParsingFlags2(m), flags);
        } else {
          getParsingFlags2(m).userInvalidated = true;
        }
        return m;
      }
      var momentProperties2 = hooks20.momentProperties = [], updateInProgress2 = false;
      function copyConfig2(to4, from4) {
        var i, prop, val;
        if (!isUndefined2(from4._isAMomentObject)) {
          to4._isAMomentObject = from4._isAMomentObject;
        }
        if (!isUndefined2(from4._i)) {
          to4._i = from4._i;
        }
        if (!isUndefined2(from4._f)) {
          to4._f = from4._f;
        }
        if (!isUndefined2(from4._l)) {
          to4._l = from4._l;
        }
        if (!isUndefined2(from4._strict)) {
          to4._strict = from4._strict;
        }
        if (!isUndefined2(from4._tzm)) {
          to4._tzm = from4._tzm;
        }
        if (!isUndefined2(from4._isUTC)) {
          to4._isUTC = from4._isUTC;
        }
        if (!isUndefined2(from4._offset)) {
          to4._offset = from4._offset;
        }
        if (!isUndefined2(from4._pf)) {
          to4._pf = getParsingFlags2(from4);
        }
        if (!isUndefined2(from4._locale)) {
          to4._locale = from4._locale;
        }
        if (momentProperties2.length > 0) {
          for (i = 0; i < momentProperties2.length; i++) {
            prop = momentProperties2[i];
            val = from4[prop];
            if (!isUndefined2(val)) {
              to4[prop] = val;
            }
          }
        }
        return to4;
      }
      function Moment2(config) {
        copyConfig2(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
          this._d = new Date(NaN);
        }
        if (updateInProgress2 === false) {
          updateInProgress2 = true;
          hooks20.updateOffset(this);
          updateInProgress2 = false;
        }
      }
      function isMoment2(obj) {
        return obj instanceof Moment2 || obj != null && obj._isAMomentObject != null;
      }
      function warn2(msg) {
        if (hooks20.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
          console.warn("Deprecation warning: " + msg);
        }
      }
      function deprecate9(msg, fn) {
        var firstTime = true;
        return extend7(function() {
          if (hooks20.deprecationHandler != null) {
            hooks20.deprecationHandler(null, msg);
          }
          if (firstTime) {
            var args = [], arg, i, key;
            for (i = 0; i < arguments.length; i++) {
              arg = "";
              if (typeof arguments[i] === "object") {
                arg += "\n[" + i + "] ";
                for (key in arguments[0]) {
                  if (hasOwnProp2(arguments[0], key)) {
                    arg += key + ": " + arguments[0][key] + ", ";
                  }
                }
                arg = arg.slice(0, -2);
              } else {
                arg = arguments[i];
              }
              args.push(arg);
            }
            warn2(msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack);
            firstTime = false;
          }
          return fn.apply(this, arguments);
        }, fn);
      }
      var deprecations2 = {};
      function deprecateSimple2(name, msg) {
        if (hooks20.deprecationHandler != null) {
          hooks20.deprecationHandler(name, msg);
        }
        if (!deprecations2[name]) {
          warn2(msg);
          deprecations2[name] = true;
        }
      }
      hooks20.suppressDeprecationWarnings = false;
      hooks20.deprecationHandler = null;
      function isFunction5(input) {
        return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
      }
      function set4(config) {
        var prop, i;
        for (i in config) {
          if (hasOwnProp2(config, i)) {
            prop = config[i];
            if (isFunction5(prop)) {
              this[i] = prop;
            } else {
              this["_" + i] = prop;
            }
          }
        }
        this._config = config;
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
      }
      function mergeConfigs2(parentConfig, childConfig) {
        var res = extend7({}, parentConfig), prop;
        for (prop in childConfig) {
          if (hasOwnProp2(childConfig, prop)) {
            if (isObject6(parentConfig[prop]) && isObject6(childConfig[prop])) {
              res[prop] = {};
              extend7(res[prop], parentConfig[prop]);
              extend7(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
              res[prop] = childConfig[prop];
            } else {
              delete res[prop];
            }
          }
        }
        for (prop in parentConfig) {
          if (hasOwnProp2(parentConfig, prop) && !hasOwnProp2(childConfig, prop) && isObject6(parentConfig[prop])) {
            res[prop] = extend7({}, res[prop]);
          }
        }
        return res;
      }
      function Locale2(config) {
        if (config != null) {
          this.set(config);
        }
      }
      var keys6;
      if (Object.keys) {
        keys6 = Object.keys;
      } else {
        keys6 = function(obj) {
          var i, res = [];
          for (i in obj) {
            if (hasOwnProp2(obj, i)) {
              res.push(i);
            }
          }
          return res;
        };
      }
      var defaultCalendar2 = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      };
      function calendar7(key, mom, now4) {
        var output = this._calendar[key] || this._calendar["sameElse"];
        return isFunction5(output) ? output.call(mom, now4) : output;
      }
      function zeroFill2(number, targetLength, forceSign) {
        var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign3 = number >= 0;
        return (sign3 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
      }
      var formattingTokens2 = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens2 = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions2 = {}, formatTokenFunctions2 = {};
      function addFormatToken2(token19, padded, ordinal5, callback) {
        var func = callback;
        if (typeof callback === "string") {
          func = function() {
            return this[callback]();
          };
        }
        if (token19) {
          formatTokenFunctions2[token19] = func;
        }
        if (padded) {
          formatTokenFunctions2[padded[0]] = function() {
            return zeroFill2(func.apply(this, arguments), padded[1], padded[2]);
          };
        }
        if (ordinal5) {
          formatTokenFunctions2[ordinal5] = function() {
            return this.localeData().ordinal(func.apply(this, arguments), token19);
          };
        }
      }
      function removeFormattingTokens2(input) {
        if (input.match(/\[[\s\S]/)) {
          return input.replace(/^\[|\]$/g, "");
        }
        return input.replace(/\\/g, "");
      }
      function makeFormatFunction2(format24) {
        var array = format24.match(formattingTokens2), i, length;
        for (i = 0, length = array.length; i < length; i++) {
          if (formatTokenFunctions2[array[i]]) {
            array[i] = formatTokenFunctions2[array[i]];
          } else {
            array[i] = removeFormattingTokens2(array[i]);
          }
        }
        return function(mom) {
          var output = "", i2;
          for (i2 = 0; i2 < length; i2++) {
            output += isFunction5(array[i2]) ? array[i2].call(mom, format24) : array[i2];
          }
          return output;
        };
      }
      function formatMoment2(m, format24) {
        if (!m.isValid()) {
          return m.localeData().invalidDate();
        }
        format24 = expandFormat2(format24, m.localeData());
        formatFunctions2[format24] = formatFunctions2[format24] || makeFormatFunction2(format24);
        return formatFunctions2[format24](m);
      }
      function expandFormat2(format24, locale6) {
        var i = 5;
        function replaceLongDateFormatTokens(input) {
          return locale6.longDateFormat(input) || input;
        }
        localFormattingTokens2.lastIndex = 0;
        while (i >= 0 && localFormattingTokens2.test(format24)) {
          format24 = format24.replace(localFormattingTokens2, replaceLongDateFormatTokens);
          localFormattingTokens2.lastIndex = 0;
          i -= 1;
        }
        return format24;
      }
      var defaultLongDateFormat2 = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      };
      function longDateFormat2(key) {
        var format24 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format24 || !formatUpper) {
          return format24;
        }
        this._longDateFormat[key] = formatUpper.match(formattingTokens2).map(function(tok) {
          if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
            return tok.slice(1);
          }
          return tok;
        }).join("");
        return this._longDateFormat[key];
      }
      var defaultInvalidDate2 = "Invalid date";
      function invalidDate2() {
        return this._invalidDate;
      }
      var defaultOrdinal2 = "%d", defaultDayOfMonthOrdinalParse2 = /\d{1,2}/;
      function ordinal4(number) {
        return this._ordinal.replace("%d", number);
      }
      var defaultRelativeTime2 = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      };
      function relativeTime3(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction5(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
      }
      function pastFuture2(diff4, output) {
        var format24 = this._relativeTime[diff4 > 0 ? "future" : "past"];
        return isFunction5(format24) ? format24(output) : format24.replace(/%s/i, output);
      }
      var aliases23 = {};
      function addUnitAlias2(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases23[lowerCase] = aliases23[lowerCase + "s"] = aliases23[shorthand] = unit;
      }
      function normalizeUnits2(units2) {
        return typeof units2 === "string" ? aliases23[units2] || aliases23[units2.toLowerCase()] : void 0;
      }
      function normalizeObjectUnits2(inputObject) {
        var normalizedInput = {}, normalizedProp, prop;
        for (prop in inputObject) {
          if (hasOwnProp2(inputObject, prop)) {
            normalizedProp = normalizeUnits2(prop);
            if (normalizedProp) {
              normalizedInput[normalizedProp] = inputObject[prop];
            }
          }
        }
        return normalizedInput;
      }
      var priorities15 = {};
      function addUnitPriority2(unit, priority) {
        priorities15[unit] = priority;
      }
      function getPrioritizedUnits2(unitsObj) {
        var units2 = [], u;
        for (u in unitsObj) {
          if (hasOwnProp2(unitsObj, u)) {
            units2.push({unit: u, priority: priorities15[u]});
          }
        }
        units2.sort(function(a, b) {
          return a.priority - b.priority;
        });
        return units2;
      }
      function isLeapYear2(year5) {
        return year5 % 4 === 0 && year5 % 100 !== 0 || year5 % 400 === 0;
      }
      function absFloor2(number) {
        if (number < 0) {
          return Math.ceil(number) || 0;
        } else {
          return Math.floor(number);
        }
      }
      function toInt2(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion, value = 0;
        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
          value = absFloor2(coercedNumber);
        }
        return value;
      }
      function makeGetSet2(unit, keepTime) {
        return function(value) {
          if (value != null) {
            set$1(this, unit, value);
            hooks20.updateOffset(this, keepTime);
            return this;
          } else {
            return get7(this, unit);
          }
        };
      }
      function get7(mom, unit) {
        return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN;
      }
      function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
          if (unit === "FullYear" && isLeapYear2(mom.year()) && mom.month() === 1 && mom.date() === 29) {
            value = toInt2(value);
            mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value, mom.month(), daysInMonth2(value, mom.month()));
          } else {
            mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
          }
        }
      }
      function stringGet2(units2) {
        units2 = normalizeUnits2(units2);
        if (isFunction5(this[units2])) {
          return this[units2]();
        }
        return this;
      }
      function stringSet2(units2, value) {
        if (typeof units2 === "object") {
          units2 = normalizeObjectUnits2(units2);
          var prioritized = getPrioritizedUnits2(units2), i;
          for (i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units2[prioritized[i].unit]);
          }
        } else {
          units2 = normalizeUnits2(units2);
          if (isFunction5(this[units2])) {
            return this[units2](value);
          }
        }
        return this;
      }
      var match12 = /\d/, match22 = /\d\d/, match32 = /\d{3}/, match42 = /\d{4}/, match62 = /[+-]?\d{6}/, match1to22 = /\d\d?/, match3to42 = /\d\d\d\d?/, match5to62 = /\d\d\d\d\d\d?/, match1to32 = /\d{1,3}/, match1to42 = /\d{1,4}/, match1to62 = /[+-]?\d{1,6}/, matchUnsigned2 = /\d+/, matchSigned2 = /[+-]?\d+/, matchOffset2 = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset2 = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp2 = /[+-]?\d+(\.\d{1,3})?/, matchWord2 = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes2;
      regexes2 = {};
      function addRegexToken2(token19, regex17, strictRegex) {
        regexes2[token19] = isFunction5(regex17) ? regex17 : function(isStrict, localeData3) {
          return isStrict && strictRegex ? strictRegex : regex17;
        };
      }
      function getParseRegexForToken2(token19, config) {
        if (!hasOwnProp2(regexes2, token19)) {
          return new RegExp(unescapeFormat2(token19));
        }
        return regexes2[token19](config._strict, config._locale);
      }
      function unescapeFormat2(s) {
        return regexEscape2(s.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
          return p1 || p2 || p3 || p4;
        }));
      }
      function regexEscape2(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      }
      var tokens2 = {};
      function addParseToken2(token19, callback) {
        var i, func = callback;
        if (typeof token19 === "string") {
          token19 = [token19];
        }
        if (isNumber2(callback)) {
          func = function(input, array) {
            array[callback] = toInt2(input);
          };
        }
        for (i = 0; i < token19.length; i++) {
          tokens2[token19[i]] = func;
        }
      }
      function addWeekParseToken2(token19, callback) {
        addParseToken2(token19, function(input, array, config, token20) {
          config._w = config._w || {};
          callback(input, config._w, config, token20);
        });
      }
      function addTimeToArrayFromToken2(token19, input, config) {
        if (input != null && hasOwnProp2(tokens2, token19)) {
          tokens2[token19](input, config._a, config, token19);
        }
      }
      var YEAR2 = 0, MONTH2 = 1, DATE2 = 2, HOUR2 = 3, MINUTE2 = 4, SECOND2 = 5, MILLISECOND2 = 6, WEEK2 = 7, WEEKDAY2 = 8;
      function mod4(n, x) {
        return (n % x + x) % x;
      }
      var indexOf2;
      if (Array.prototype.indexOf) {
        indexOf2 = Array.prototype.indexOf;
      } else {
        indexOf2 = function(o) {
          var i;
          for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
              return i;
            }
          }
          return -1;
        };
      }
      function daysInMonth2(year5, month9) {
        if (isNaN(year5) || isNaN(month9)) {
          return NaN;
        }
        var modMonth = mod4(month9, 12);
        year5 += (month9 - modMonth) / 12;
        return modMonth === 1 ? isLeapYear2(year5) ? 29 : 28 : 31 - modMonth % 7 % 2;
      }
      addFormatToken2("M", ["MM", 2], "Mo", function() {
        return this.month() + 1;
      });
      addFormatToken2("MMM", 0, 0, function(format24) {
        return this.localeData().monthsShort(this, format24);
      });
      addFormatToken2("MMMM", 0, 0, function(format24) {
        return this.localeData().months(this, format24);
      });
      addUnitAlias2("month", "M");
      addUnitPriority2("month", 8);
      addRegexToken2("M", match1to22);
      addRegexToken2("MM", match1to22, match22);
      addRegexToken2("MMM", function(isStrict, locale6) {
        return locale6.monthsShortRegex(isStrict);
      });
      addRegexToken2("MMMM", function(isStrict, locale6) {
        return locale6.monthsRegex(isStrict);
      });
      addParseToken2(["M", "MM"], function(input, array) {
        array[MONTH2] = toInt2(input) - 1;
      });
      addParseToken2(["MMM", "MMMM"], function(input, array, config, token19) {
        var month9 = config._locale.monthsParse(input, token19, config._strict);
        if (month9 != null) {
          array[MONTH2] = month9;
        } else {
          getParsingFlags2(config).invalidMonth = input;
        }
      });
      var defaultLocaleMonths2 = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), defaultLocaleMonthsShort2 = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT2 = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex2 = matchWord2, defaultMonthsRegex2 = matchWord2;
      function localeMonths2(m, format24) {
        if (!m) {
          return isArray13(this._months) ? this._months : this._months["standalone"];
        }
        return isArray13(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT2).test(format24) ? "format" : "standalone"][m.month()];
      }
      function localeMonthsShort2(m, format24) {
        if (!m) {
          return isArray13(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
        }
        return isArray13(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT2.test(format24) ? "format" : "standalone"][m.month()];
      }
      function handleStrictParse3(monthName, format24, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
          for (i = 0; i < 12; ++i) {
            mom = createUTC2([2e3, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, "").toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
          }
        }
        if (strict) {
          if (format24 === "MMM") {
            ii = indexOf2.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf2.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format24 === "MMM") {
            ii = indexOf2.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf2.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf2.call(this._longMonthsParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf2.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }
      function localeMonthsParse2(monthName, format24, strict) {
        var i, mom, regex17;
        if (this._monthsParseExact) {
          return handleStrictParse3.call(this, monthName, format24, strict);
        }
        if (!this._monthsParse) {
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
        }
        for (i = 0; i < 12; i++) {
          mom = createUTC2([2e3, i]);
          if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$", "i");
            this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$", "i");
          }
          if (!strict && !this._monthsParse[i]) {
            regex17 = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
            this._monthsParse[i] = new RegExp(regex17.replace(".", ""), "i");
          }
          if (strict && format24 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
            return i;
          } else if (strict && format24 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
            return i;
          } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
          }
        }
      }
      function setMonth2(mom, value) {
        var dayOfMonth;
        if (!mom.isValid()) {
          return mom;
        }
        if (typeof value === "string") {
          if (/^\d+$/.test(value)) {
            value = toInt2(value);
          } else {
            value = mom.localeData().monthsParse(value);
            if (!isNumber2(value)) {
              return mom;
            }
          }
        }
        dayOfMonth = Math.min(mom.date(), daysInMonth2(mom.year(), value));
        mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
        return mom;
      }
      function getSetMonth2(value) {
        if (value != null) {
          setMonth2(this, value);
          hooks20.updateOffset(this, true);
          return this;
        } else {
          return get7(this, "Month");
        }
      }
      function getDaysInMonth2() {
        return daysInMonth2(this.year(), this.month());
      }
      function monthsShortRegex2(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp2(this, "_monthsRegex")) {
            computeMonthsParse2.call(this);
          }
          if (isStrict) {
            return this._monthsShortStrictRegex;
          } else {
            return this._monthsShortRegex;
          }
        } else {
          if (!hasOwnProp2(this, "_monthsShortRegex")) {
            this._monthsShortRegex = defaultMonthsShortRegex2;
          }
          return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
      }
      function monthsRegex2(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp2(this, "_monthsRegex")) {
            computeMonthsParse2.call(this);
          }
          if (isStrict) {
            return this._monthsStrictRegex;
          } else {
            return this._monthsRegex;
          }
        } else {
          if (!hasOwnProp2(this, "_monthsRegex")) {
            this._monthsRegex = defaultMonthsRegex2;
          }
          return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
        }
      }
      function computeMonthsParse2() {
        function cmpLenRev(a, b) {
          return b.length - a.length;
        }
        var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
        for (i = 0; i < 12; i++) {
          mom = createUTC2([2e3, i]);
          shortPieces.push(this.monthsShort(mom, ""));
          longPieces.push(this.months(mom, ""));
          mixedPieces.push(this.months(mom, ""));
          mixedPieces.push(this.monthsShort(mom, ""));
        }
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
          shortPieces[i] = regexEscape2(shortPieces[i]);
          longPieces[i] = regexEscape2(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
          mixedPieces[i] = regexEscape2(mixedPieces[i]);
        }
        this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
        this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
      }
      addFormatToken2("Y", 0, 0, function() {
        var y = this.year();
        return y <= 9999 ? zeroFill2(y, 4) : "+" + y;
      });
      addFormatToken2(0, ["YY", 2], 0, function() {
        return this.year() % 100;
      });
      addFormatToken2(0, ["YYYY", 4], 0, "year");
      addFormatToken2(0, ["YYYYY", 5], 0, "year");
      addFormatToken2(0, ["YYYYYY", 6, true], 0, "year");
      addUnitAlias2("year", "y");
      addUnitPriority2("year", 1);
      addRegexToken2("Y", matchSigned2);
      addRegexToken2("YY", match1to22, match22);
      addRegexToken2("YYYY", match1to42, match42);
      addRegexToken2("YYYYY", match1to62, match62);
      addRegexToken2("YYYYYY", match1to62, match62);
      addParseToken2(["YYYYY", "YYYYYY"], YEAR2);
      addParseToken2("YYYY", function(input, array) {
        array[YEAR2] = input.length === 2 ? hooks20.parseTwoDigitYear(input) : toInt2(input);
      });
      addParseToken2("YY", function(input, array) {
        array[YEAR2] = hooks20.parseTwoDigitYear(input);
      });
      addParseToken2("Y", function(input, array) {
        array[YEAR2] = parseInt(input, 10);
      });
      function daysInYear2(year5) {
        return isLeapYear2(year5) ? 366 : 365;
      }
      hooks20.parseTwoDigitYear = function(input) {
        return toInt2(input) + (toInt2(input) > 68 ? 1900 : 2e3);
      };
      var getSetYear2 = makeGetSet2("FullYear", true);
      function getIsLeapYear2() {
        return isLeapYear2(this.year());
      }
      function createDate2(y, m, d, h, M, s, ms) {
        var date;
        if (y < 100 && y >= 0) {
          date = new Date(y + 400, m, d, h, M, s, ms);
          if (isFinite(date.getFullYear())) {
            date.setFullYear(y);
          }
        } else {
          date = new Date(y, m, d, h, M, s, ms);
        }
        return date;
      }
      function createUTCDate2(y) {
        var date, args;
        if (y < 100 && y >= 0) {
          args = Array.prototype.slice.call(arguments);
          args[0] = y + 400;
          date = new Date(Date.UTC.apply(null, args));
          if (isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
          }
        } else {
          date = new Date(Date.UTC.apply(null, arguments));
        }
        return date;
      }
      function firstWeekOffset2(year5, dow, doy) {
        var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate2(year5, 0, fwd).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
      }
      function dayOfYearFromWeeks2(year5, week5, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset2(year5, dow, doy), dayOfYear = 1 + 7 * (week5 - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
        if (dayOfYear <= 0) {
          resYear = year5 - 1;
          resDayOfYear = daysInYear2(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear2(year5)) {
          resYear = year5 + 1;
          resDayOfYear = dayOfYear - daysInYear2(year5);
        } else {
          resYear = year5;
          resDayOfYear = dayOfYear;
        }
        return {
          year: resYear,
          dayOfYear: resDayOfYear
        };
      }
      function weekOfYear2(mom, dow, doy) {
        var weekOffset = firstWeekOffset2(mom.year(), dow, doy), week5 = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
        if (week5 < 1) {
          resYear = mom.year() - 1;
          resWeek = week5 + weeksInYear2(resYear, dow, doy);
        } else if (week5 > weeksInYear2(mom.year(), dow, doy)) {
          resWeek = week5 - weeksInYear2(mom.year(), dow, doy);
          resYear = mom.year() + 1;
        } else {
          resYear = mom.year();
          resWeek = week5;
        }
        return {
          week: resWeek,
          year: resYear
        };
      }
      function weeksInYear2(year5, dow, doy) {
        var weekOffset = firstWeekOffset2(year5, dow, doy), weekOffsetNext = firstWeekOffset2(year5 + 1, dow, doy);
        return (daysInYear2(year5) - weekOffset + weekOffsetNext) / 7;
      }
      addFormatToken2("w", ["ww", 2], "wo", "week");
      addFormatToken2("W", ["WW", 2], "Wo", "isoWeek");
      addUnitAlias2("week", "w");
      addUnitAlias2("isoWeek", "W");
      addUnitPriority2("week", 5);
      addUnitPriority2("isoWeek", 5);
      addRegexToken2("w", match1to22);
      addRegexToken2("ww", match1to22, match22);
      addRegexToken2("W", match1to22);
      addRegexToken2("WW", match1to22, match22);
      addWeekParseToken2(["w", "ww", "W", "WW"], function(input, week5, config, token19) {
        week5[token19.substr(0, 1)] = toInt2(input);
      });
      function localeWeek2(mom) {
        return weekOfYear2(mom, this._week.dow, this._week.doy).week;
      }
      var defaultLocaleWeek2 = {
        dow: 0,
        doy: 6
      };
      function localeFirstDayOfWeek2() {
        return this._week.dow;
      }
      function localeFirstDayOfYear2() {
        return this._week.doy;
      }
      function getSetWeek2(input) {
        var week5 = this.localeData().week(this);
        return input == null ? week5 : this.add((input - week5) * 7, "d");
      }
      function getSetISOWeek2(input) {
        var week5 = weekOfYear2(this, 1, 4).week;
        return input == null ? week5 : this.add((input - week5) * 7, "d");
      }
      addFormatToken2("d", 0, "do", "day");
      addFormatToken2("dd", 0, 0, function(format24) {
        return this.localeData().weekdaysMin(this, format24);
      });
      addFormatToken2("ddd", 0, 0, function(format24) {
        return this.localeData().weekdaysShort(this, format24);
      });
      addFormatToken2("dddd", 0, 0, function(format24) {
        return this.localeData().weekdays(this, format24);
      });
      addFormatToken2("e", 0, 0, "weekday");
      addFormatToken2("E", 0, 0, "isoWeekday");
      addUnitAlias2("day", "d");
      addUnitAlias2("weekday", "e");
      addUnitAlias2("isoWeekday", "E");
      addUnitPriority2("day", 11);
      addUnitPriority2("weekday", 11);
      addUnitPriority2("isoWeekday", 11);
      addRegexToken2("d", match1to22);
      addRegexToken2("e", match1to22);
      addRegexToken2("E", match1to22);
      addRegexToken2("dd", function(isStrict, locale6) {
        return locale6.weekdaysMinRegex(isStrict);
      });
      addRegexToken2("ddd", function(isStrict, locale6) {
        return locale6.weekdaysShortRegex(isStrict);
      });
      addRegexToken2("dddd", function(isStrict, locale6) {
        return locale6.weekdaysRegex(isStrict);
      });
      addWeekParseToken2(["dd", "ddd", "dddd"], function(input, week5, config, token19) {
        var weekday = config._locale.weekdaysParse(input, token19, config._strict);
        if (weekday != null) {
          week5.d = weekday;
        } else {
          getParsingFlags2(config).invalidWeekday = input;
        }
      });
      addWeekParseToken2(["d", "e", "E"], function(input, week5, config, token19) {
        week5[token19] = toInt2(input);
      });
      function parseWeekday2(input, locale6) {
        if (typeof input !== "string") {
          return input;
        }
        if (!isNaN(input)) {
          return parseInt(input, 10);
        }
        input = locale6.weekdaysParse(input);
        if (typeof input === "number") {
          return input;
        }
        return null;
      }
      function parseIsoWeekday2(input, locale6) {
        if (typeof input === "string") {
          return locale6.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
      }
      function shiftWeekdays2(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
      }
      var defaultLocaleWeekdays2 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort2 = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin2 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex2 = matchWord2, defaultWeekdaysShortRegex2 = matchWord2, defaultWeekdaysMinRegex2 = matchWord2;
      function localeWeekdays2(m, format24) {
        var weekdays = isArray13(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format24) ? "format" : "standalone"];
        return m === true ? shiftWeekdays2(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
      }
      function localeWeekdaysShort2(m) {
        return m === true ? shiftWeekdays2(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
      }
      function localeWeekdaysMin2(m) {
        return m === true ? shiftWeekdays2(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
      }
      function handleStrictParse$1(weekdayName, format24, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._minWeekdaysParse = [];
          for (i = 0; i < 7; ++i) {
            mom = createUTC2([2e3, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, "").toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, "").toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
          }
        }
        if (strict) {
          if (format24 === "dddd") {
            ii = indexOf2.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format24 === "ddd") {
            ii = indexOf2.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf2.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format24 === "dddd") {
            ii = indexOf2.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf2.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf2.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format24 === "ddd") {
            ii = indexOf2.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf2.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf2.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf2.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf2.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf2.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }
      function localeWeekdaysParse2(weekdayName, format24, strict) {
        var i, mom, regex17;
        if (this._weekdaysParseExact) {
          return handleStrictParse$1.call(this, weekdayName, format24, strict);
        }
        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._minWeekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._fullWeekdaysParse = [];
        }
        for (i = 0; i < 7; i++) {
          mom = createUTC2([2e3, 1]).day(i);
          if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(mom, "").replace(".", "\\.?") + "$", "i");
            this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$", "i");
            this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$", "i");
          }
          if (!this._weekdaysParse[i]) {
            regex17 = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
            this._weekdaysParse[i] = new RegExp(regex17.replace(".", ""), "i");
          }
          if (strict && format24 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format24 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format24 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
          }
        }
      }
      function getSetDayOfWeek2(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
          input = parseWeekday2(input, this.localeData());
          return this.add(input - day, "d");
        } else {
          return day;
        }
      }
      function getSetLocaleDayOfWeek2(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, "d");
      }
      function getSetISODayOfWeek2(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        if (input != null) {
          var weekday = parseIsoWeekday2(input, this.localeData());
          return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
          return this.day() || 7;
        }
      }
      function weekdaysRegex2(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp2(this, "_weekdaysRegex")) {
            computeWeekdaysParse2.call(this);
          }
          if (isStrict) {
            return this._weekdaysStrictRegex;
          } else {
            return this._weekdaysRegex;
          }
        } else {
          if (!hasOwnProp2(this, "_weekdaysRegex")) {
            this._weekdaysRegex = defaultWeekdaysRegex2;
          }
          return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
        }
      }
      function weekdaysShortRegex2(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp2(this, "_weekdaysRegex")) {
            computeWeekdaysParse2.call(this);
          }
          if (isStrict) {
            return this._weekdaysShortStrictRegex;
          } else {
            return this._weekdaysShortRegex;
          }
        } else {
          if (!hasOwnProp2(this, "_weekdaysShortRegex")) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex2;
          }
          return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
      }
      function weekdaysMinRegex2(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp2(this, "_weekdaysRegex")) {
            computeWeekdaysParse2.call(this);
          }
          if (isStrict) {
            return this._weekdaysMinStrictRegex;
          } else {
            return this._weekdaysMinRegex;
          }
        } else {
          if (!hasOwnProp2(this, "_weekdaysMinRegex")) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex2;
          }
          return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
      }
      function computeWeekdaysParse2() {
        function cmpLenRev(a, b) {
          return b.length - a.length;
        }
        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
          mom = createUTC2([2e3, 1]).day(i);
          minp = regexEscape2(this.weekdaysMin(mom, ""));
          shortp = regexEscape2(this.weekdaysShort(mom, ""));
          longp = regexEscape2(this.weekdays(mom, ""));
          minPieces.push(minp);
          shortPieces.push(shortp);
          longPieces.push(longp);
          mixedPieces.push(minp);
          mixedPieces.push(shortp);
          mixedPieces.push(longp);
        }
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
        this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
        this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join("|") + ")", "i");
      }
      function hFormat2() {
        return this.hours() % 12 || 12;
      }
      function kFormat2() {
        return this.hours() || 24;
      }
      addFormatToken2("H", ["HH", 2], 0, "hour");
      addFormatToken2("h", ["hh", 2], 0, hFormat2);
      addFormatToken2("k", ["kk", 2], 0, kFormat2);
      addFormatToken2("hmm", 0, 0, function() {
        return "" + hFormat2.apply(this) + zeroFill2(this.minutes(), 2);
      });
      addFormatToken2("hmmss", 0, 0, function() {
        return "" + hFormat2.apply(this) + zeroFill2(this.minutes(), 2) + zeroFill2(this.seconds(), 2);
      });
      addFormatToken2("Hmm", 0, 0, function() {
        return "" + this.hours() + zeroFill2(this.minutes(), 2);
      });
      addFormatToken2("Hmmss", 0, 0, function() {
        return "" + this.hours() + zeroFill2(this.minutes(), 2) + zeroFill2(this.seconds(), 2);
      });
      function meridiem2(token19, lowercase) {
        addFormatToken2(token19, 0, 0, function() {
          return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
      }
      meridiem2("a", true);
      meridiem2("A", false);
      addUnitAlias2("hour", "h");
      addUnitPriority2("hour", 13);
      function matchMeridiem2(isStrict, locale6) {
        return locale6._meridiemParse;
      }
      addRegexToken2("a", matchMeridiem2);
      addRegexToken2("A", matchMeridiem2);
      addRegexToken2("H", match1to22);
      addRegexToken2("h", match1to22);
      addRegexToken2("k", match1to22);
      addRegexToken2("HH", match1to22, match22);
      addRegexToken2("hh", match1to22, match22);
      addRegexToken2("kk", match1to22, match22);
      addRegexToken2("hmm", match3to42);
      addRegexToken2("hmmss", match5to62);
      addRegexToken2("Hmm", match3to42);
      addRegexToken2("Hmmss", match5to62);
      addParseToken2(["H", "HH"], HOUR2);
      addParseToken2(["k", "kk"], function(input, array, config) {
        var kInput = toInt2(input);
        array[HOUR2] = kInput === 24 ? 0 : kInput;
      });
      addParseToken2(["a", "A"], function(input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
      });
      addParseToken2(["h", "hh"], function(input, array, config) {
        array[HOUR2] = toInt2(input);
        getParsingFlags2(config).bigHour = true;
      });
      addParseToken2("hmm", function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR2] = toInt2(input.substr(0, pos));
        array[MINUTE2] = toInt2(input.substr(pos));
        getParsingFlags2(config).bigHour = true;
      });
      addParseToken2("hmmss", function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR2] = toInt2(input.substr(0, pos1));
        array[MINUTE2] = toInt2(input.substr(pos1, 2));
        array[SECOND2] = toInt2(input.substr(pos2));
        getParsingFlags2(config).bigHour = true;
      });
      addParseToken2("Hmm", function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR2] = toInt2(input.substr(0, pos));
        array[MINUTE2] = toInt2(input.substr(pos));
      });
      addParseToken2("Hmmss", function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR2] = toInt2(input.substr(0, pos1));
        array[MINUTE2] = toInt2(input.substr(pos1, 2));
        array[SECOND2] = toInt2(input.substr(pos2));
      });
      function localeIsPM2(input) {
        return (input + "").toLowerCase().charAt(0) === "p";
      }
      var defaultLocaleMeridiemParse2 = /[ap]\.?m?\.?/i, getSetHour2 = makeGetSet2("Hours", true);
      function localeMeridiem2(hours3, minutes3, isLower) {
        if (hours3 > 11) {
          return isLower ? "pm" : "PM";
        } else {
          return isLower ? "am" : "AM";
        }
      }
      var baseConfig2 = {
        calendar: defaultCalendar2,
        longDateFormat: defaultLongDateFormat2,
        invalidDate: defaultInvalidDate2,
        ordinal: defaultOrdinal2,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse2,
        relativeTime: defaultRelativeTime2,
        months: defaultLocaleMonths2,
        monthsShort: defaultLocaleMonthsShort2,
        week: defaultLocaleWeek2,
        weekdays: defaultLocaleWeekdays2,
        weekdaysMin: defaultLocaleWeekdaysMin2,
        weekdaysShort: defaultLocaleWeekdaysShort2,
        meridiemParse: defaultLocaleMeridiemParse2
      };
      var locales8 = {}, localeFamilies = {}, globalLocale;
      function commonPrefix(arr1, arr2) {
        var i, minl = Math.min(arr1.length, arr2.length);
        for (i = 0; i < minl; i += 1) {
          if (arr1[i] !== arr2[i]) {
            return i;
          }
        }
        return minl;
      }
      function normalizeLocale(key) {
        return key ? key.toLowerCase().replace("_", "-") : key;
      }
      function chooseLocale(names) {
        var i = 0, j, next, locale6, split;
        while (i < names.length) {
          split = normalizeLocale(names[i]).split("-");
          j = split.length;
          next = normalizeLocale(names[i + 1]);
          next = next ? next.split("-") : null;
          while (j > 0) {
            locale6 = loadLocale(split.slice(0, j).join("-"));
            if (locale6) {
              return locale6;
            }
            if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
              break;
            }
            j--;
          }
          i++;
        }
        return globalLocale;
      }
      function loadLocale(name) {
        var oldLocale = null, aliasedRequire;
        if (locales8[name] === void 0 && typeof module !== "undefined" && module && module.exports) {
          try {
            oldLocale = globalLocale._abbr;
            aliasedRequire = require;
            aliasedRequire("./locale/" + name);
            getSetGlobalLocale3(oldLocale);
          } catch (e) {
            locales8[name] = null;
          }
        }
        return locales8[name];
      }
      function getSetGlobalLocale3(key, values) {
        var data;
        if (key) {
          if (isUndefined2(values)) {
            data = getLocale7(key);
          } else {
            data = defineLocale2(key, values);
          }
          if (data) {
            globalLocale = data;
          } else {
            if (typeof console !== "undefined" && console.warn) {
              console.warn("Locale " + key + " not found. Did you forget to load it?");
            }
          }
        }
        return globalLocale._abbr;
      }
      function defineLocale2(name, config) {
        if (config !== null) {
          var locale6, parentConfig = baseConfig2;
          config.abbr = name;
          if (locales8[name] != null) {
            deprecateSimple2("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
            parentConfig = locales8[name]._config;
          } else if (config.parentLocale != null) {
            if (locales8[config.parentLocale] != null) {
              parentConfig = locales8[config.parentLocale]._config;
            } else {
              locale6 = loadLocale(config.parentLocale);
              if (locale6 != null) {
                parentConfig = locale6._config;
              } else {
                if (!localeFamilies[config.parentLocale]) {
                  localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                  name,
                  config
                });
                return null;
              }
            }
          }
          locales8[name] = new Locale2(mergeConfigs2(parentConfig, config));
          if (localeFamilies[name]) {
            localeFamilies[name].forEach(function(x) {
              defineLocale2(x.name, x.config);
            });
          }
          getSetGlobalLocale3(name);
          return locales8[name];
        } else {
          delete locales8[name];
          return null;
        }
      }
      function updateLocale2(name, config) {
        if (config != null) {
          var locale6, tmpLocale, parentConfig = baseConfig2;
          if (locales8[name] != null && locales8[name].parentLocale != null) {
            locales8[name].set(mergeConfigs2(locales8[name]._config, config));
          } else {
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
              parentConfig = tmpLocale._config;
            }
            config = mergeConfigs2(parentConfig, config);
            if (tmpLocale == null) {
              config.abbr = name;
            }
            locale6 = new Locale2(config);
            locale6.parentLocale = locales8[name];
            locales8[name] = locale6;
          }
          getSetGlobalLocale3(name);
        } else {
          if (locales8[name] != null) {
            if (locales8[name].parentLocale != null) {
              locales8[name] = locales8[name].parentLocale;
              if (name === getSetGlobalLocale3()) {
                getSetGlobalLocale3(name);
              }
            } else if (locales8[name] != null) {
              delete locales8[name];
            }
          }
        }
        return locales8[name];
      }
      function getLocale7(key) {
        var locale6;
        if (key && key._locale && key._locale._abbr) {
          key = key._locale._abbr;
        }
        if (!key) {
          return globalLocale;
        }
        if (!isArray13(key)) {
          locale6 = loadLocale(key);
          if (locale6) {
            return locale6;
          }
          key = [key];
        }
        return chooseLocale(key);
      }
      function listLocales2() {
        return keys6(locales8);
      }
      function checkOverflow2(m) {
        var overflow, a = m._a;
        if (a && getParsingFlags2(m).overflow === -2) {
          overflow = a[MONTH2] < 0 || a[MONTH2] > 11 ? MONTH2 : a[DATE2] < 1 || a[DATE2] > daysInMonth2(a[YEAR2], a[MONTH2]) ? DATE2 : a[HOUR2] < 0 || a[HOUR2] > 24 || a[HOUR2] === 24 && (a[MINUTE2] !== 0 || a[SECOND2] !== 0 || a[MILLISECOND2] !== 0) ? HOUR2 : a[MINUTE2] < 0 || a[MINUTE2] > 59 ? MINUTE2 : a[SECOND2] < 0 || a[SECOND2] > 59 ? SECOND2 : a[MILLISECOND2] < 0 || a[MILLISECOND2] > 999 ? MILLISECOND2 : -1;
          if (getParsingFlags2(m)._overflowDayOfYear && (overflow < YEAR2 || overflow > DATE2)) {
            overflow = DATE2;
          }
          if (getParsingFlags2(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK2;
          }
          if (getParsingFlags2(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY2;
          }
          getParsingFlags2(m).overflow = overflow;
        }
        return m;
      }
      var extendedIsoRegex2 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex2 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex2 = /Z|[+-]\d\d(?::?\d\d)?/, isoDates2 = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, false],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, false],
        ["YYYYDDD", /\d{7}/],
        ["YYYYMM", /\d{6}/, false],
        ["YYYY", /\d{4}/, false]
      ], isoTimes2 = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/]
      ], aspNetJsonRegex2 = /^\/?Date\((-?\d+)/i, rfc28222 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets2 = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
      };
      function configFromISO2(config) {
        var i, l, string = config._i, match = extendedIsoRegex2.exec(string) || basicIsoRegex2.exec(string), allowTime, dateFormat, timeFormat, tzFormat;
        if (match) {
          getParsingFlags2(config).iso = true;
          for (i = 0, l = isoDates2.length; i < l; i++) {
            if (isoDates2[i][1].exec(match[1])) {
              dateFormat = isoDates2[i][0];
              allowTime = isoDates2[i][2] !== false;
              break;
            }
          }
          if (dateFormat == null) {
            config._isValid = false;
            return;
          }
          if (match[3]) {
            for (i = 0, l = isoTimes2.length; i < l; i++) {
              if (isoTimes2[i][1].exec(match[3])) {
                timeFormat = (match[2] || " ") + isoTimes2[i][0];
                break;
              }
            }
            if (timeFormat == null) {
              config._isValid = false;
              return;
            }
          }
          if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
          }
          if (match[4]) {
            if (tzRegex2.exec(match[4])) {
              tzFormat = "Z";
            } else {
              config._isValid = false;
              return;
            }
          }
          config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
          configFromStringAndFormat2(config);
        } else {
          config._isValid = false;
        }
      }
      function extractFromRFC2822Strings2(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
          untruncateYear2(yearStr),
          defaultLocaleMonthsShort2.indexOf(monthStr),
          parseInt(dayStr, 10),
          parseInt(hourStr, 10),
          parseInt(minuteStr, 10)
        ];
        if (secondStr) {
          result.push(parseInt(secondStr, 10));
        }
        return result;
      }
      function untruncateYear2(yearStr) {
        var year5 = parseInt(yearStr, 10);
        if (year5 <= 49) {
          return 2e3 + year5;
        } else if (year5 <= 999) {
          return 1900 + year5;
        }
        return year5;
      }
      function preprocessRFC28222(s) {
        return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
      }
      function checkWeekday2(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
          var weekdayProvided = defaultLocaleWeekdaysShort2.indexOf(weekdayStr), weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
          if (weekdayProvided !== weekdayActual) {
            getParsingFlags2(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
          }
        }
        return true;
      }
      function calculateOffset2(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
          return obsOffsets2[obsOffset];
        } else if (militaryOffset) {
          return 0;
        } else {
          var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
          return h * 60 + m;
        }
      }
      function configFromRFC28222(config) {
        var match = rfc28222.exec(preprocessRFC28222(config._i)), parsedArray;
        if (match) {
          parsedArray = extractFromRFC2822Strings2(match[4], match[3], match[2], match[5], match[6], match[7]);
          if (!checkWeekday2(match[1], parsedArray, config)) {
            return;
          }
          config._a = parsedArray;
          config._tzm = calculateOffset2(match[8], match[9], match[10]);
          config._d = createUTCDate2.apply(null, config._a);
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
          getParsingFlags2(config).rfc2822 = true;
        } else {
          config._isValid = false;
        }
      }
      function configFromString2(config) {
        var matched = aspNetJsonRegex2.exec(config._i);
        if (matched !== null) {
          config._d = new Date(+matched[1]);
          return;
        }
        configFromISO2(config);
        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }
        configFromRFC28222(config);
        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }
        if (config._strict) {
          config._isValid = false;
        } else {
          hooks20.createFromInputFallback(config);
        }
      }
      hooks20.createFromInputFallback = deprecate9("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(config) {
        config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
      });
      function defaults3(a, b, c) {
        if (a != null) {
          return a;
        }
        if (b != null) {
          return b;
        }
        return c;
      }
      function currentDateArray2(config) {
        var nowValue = new Date(hooks20.now());
        if (config._useUTC) {
          return [
            nowValue.getUTCFullYear(),
            nowValue.getUTCMonth(),
            nowValue.getUTCDate()
          ];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
      }
      function configFromArray2(config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;
        if (config._d) {
          return;
        }
        currentDate = currentDateArray2(config);
        if (config._w && config._a[DATE2] == null && config._a[MONTH2] == null) {
          dayOfYearFromWeekInfo2(config);
        }
        if (config._dayOfYear != null) {
          yearToUse = defaults3(config._a[YEAR2], currentDate[YEAR2]);
          if (config._dayOfYear > daysInYear2(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags2(config)._overflowDayOfYear = true;
          }
          date = createUTCDate2(yearToUse, 0, config._dayOfYear);
          config._a[MONTH2] = date.getUTCMonth();
          config._a[DATE2] = date.getUTCDate();
        }
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
          config._a[i] = input[i] = currentDate[i];
        }
        for (; i < 7; i++) {
          config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
        }
        if (config._a[HOUR2] === 24 && config._a[MINUTE2] === 0 && config._a[SECOND2] === 0 && config._a[MILLISECOND2] === 0) {
          config._nextDay = true;
          config._a[HOUR2] = 0;
        }
        config._d = (config._useUTC ? createUTCDate2 : createDate2).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
        if (config._tzm != null) {
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }
        if (config._nextDay) {
          config._a[HOUR2] = 24;
        }
        if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
          getParsingFlags2(config).weekdayMismatch = true;
        }
      }
      function dayOfYearFromWeekInfo2(config) {
        var w, weekYear, week5, weekday, dow, doy, temp, weekdayOverflow, curWeek;
        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
          dow = 1;
          doy = 4;
          weekYear = defaults3(w.GG, config._a[YEAR2], weekOfYear2(createLocal2(), 1, 4).year);
          week5 = defaults3(w.W, 1);
          weekday = defaults3(w.E, 1);
          if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
          }
        } else {
          dow = config._locale._week.dow;
          doy = config._locale._week.doy;
          curWeek = weekOfYear2(createLocal2(), dow, doy);
          weekYear = defaults3(w.gg, config._a[YEAR2], curWeek.year);
          week5 = defaults3(w.w, curWeek.week);
          if (w.d != null) {
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
              weekdayOverflow = true;
            }
          } else if (w.e != null) {
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
              weekdayOverflow = true;
            }
          } else {
            weekday = dow;
          }
        }
        if (week5 < 1 || week5 > weeksInYear2(weekYear, dow, doy)) {
          getParsingFlags2(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
          getParsingFlags2(config)._overflowWeekday = true;
        } else {
          temp = dayOfYearFromWeeks2(weekYear, week5, weekday, dow, doy);
          config._a[YEAR2] = temp.year;
          config._dayOfYear = temp.dayOfYear;
        }
      }
      hooks20.ISO_8601 = function() {
      };
      hooks20.RFC_2822 = function() {
      };
      function configFromStringAndFormat2(config) {
        if (config._f === hooks20.ISO_8601) {
          configFromISO2(config);
          return;
        }
        if (config._f === hooks20.RFC_2822) {
          configFromRFC28222(config);
          return;
        }
        config._a = [];
        getParsingFlags2(config).empty = true;
        var string = "" + config._i, i, parsedInput, tokens3, token19, skipped, stringLength = string.length, totalParsedInputLength = 0, era3;
        tokens3 = expandFormat2(config._f, config._locale).match(formattingTokens2) || [];
        for (i = 0; i < tokens3.length; i++) {
          token19 = tokens3[i];
          parsedInput = (string.match(getParseRegexForToken2(token19, config)) || [])[0];
          if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
              getParsingFlags2(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
          }
          if (formatTokenFunctions2[token19]) {
            if (parsedInput) {
              getParsingFlags2(config).empty = false;
            } else {
              getParsingFlags2(config).unusedTokens.push(token19);
            }
            addTimeToArrayFromToken2(token19, parsedInput, config);
          } else if (config._strict && !parsedInput) {
            getParsingFlags2(config).unusedTokens.push(token19);
          }
        }
        getParsingFlags2(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
          getParsingFlags2(config).unusedInput.push(string);
        }
        if (config._a[HOUR2] <= 12 && getParsingFlags2(config).bigHour === true && config._a[HOUR2] > 0) {
          getParsingFlags2(config).bigHour = void 0;
        }
        getParsingFlags2(config).parsedDateParts = config._a.slice(0);
        getParsingFlags2(config).meridiem = config._meridiem;
        config._a[HOUR2] = meridiemFixWrap2(config._locale, config._a[HOUR2], config._meridiem);
        era3 = getParsingFlags2(config).era;
        if (era3 !== null) {
          config._a[YEAR2] = config._locale.erasConvertYear(era3, config._a[YEAR2]);
        }
        configFromArray2(config);
        checkOverflow2(config);
      }
      function meridiemFixWrap2(locale6, hour5, meridiem3) {
        var isPm;
        if (meridiem3 == null) {
          return hour5;
        }
        if (locale6.meridiemHour != null) {
          return locale6.meridiemHour(hour5, meridiem3);
        } else if (locale6.isPM != null) {
          isPm = locale6.isPM(meridiem3);
          if (isPm && hour5 < 12) {
            hour5 += 12;
          }
          if (!isPm && hour5 === 12) {
            hour5 = 0;
          }
          return hour5;
        } else {
          return hour5;
        }
      }
      function configFromStringAndArray2(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false;
        if (config._f.length === 0) {
          getParsingFlags2(config).invalidFormat = true;
          config._d = new Date(NaN);
          return;
        }
        for (i = 0; i < config._f.length; i++) {
          currentScore = 0;
          validFormatFound = false;
          tempConfig = copyConfig2({}, config);
          if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
          }
          tempConfig._f = config._f[i];
          configFromStringAndFormat2(tempConfig);
          if (isValid4(tempConfig)) {
            validFormatFound = true;
          }
          currentScore += getParsingFlags2(tempConfig).charsLeftOver;
          currentScore += getParsingFlags2(tempConfig).unusedTokens.length * 10;
          getParsingFlags2(tempConfig).score = currentScore;
          if (!bestFormatIsValid) {
            if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;
              if (validFormatFound) {
                bestFormatIsValid = true;
              }
            }
          } else {
            if (currentScore < scoreToBeat) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;
            }
          }
        }
        extend7(config, bestMoment || tempConfig);
      }
      function configFromObject2(config) {
        if (config._d) {
          return;
        }
        var i = normalizeObjectUnits2(config._i), dayOrDate = i.day === void 0 ? i.date : i.day;
        config._a = map4([i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond], function(obj) {
          return obj && parseInt(obj, 10);
        });
        configFromArray2(config);
      }
      function createFromConfig2(config) {
        var res = new Moment2(checkOverflow2(prepareConfig2(config)));
        if (res._nextDay) {
          res.add(1, "d");
          res._nextDay = void 0;
        }
        return res;
      }
      function prepareConfig2(config) {
        var input = config._i, format24 = config._f;
        config._locale = config._locale || getLocale7(config._l);
        if (input === null || format24 === void 0 && input === "") {
          return createInvalid3({nullInput: true});
        }
        if (typeof input === "string") {
          config._i = input = config._locale.preparse(input);
        }
        if (isMoment2(input)) {
          return new Moment2(checkOverflow2(input));
        } else if (isDate2(input)) {
          config._d = input;
        } else if (isArray13(format24)) {
          configFromStringAndArray2(config);
        } else if (format24) {
          configFromStringAndFormat2(config);
        } else {
          configFromInput2(config);
        }
        if (!isValid4(config)) {
          config._d = null;
        }
        return config;
      }
      function configFromInput2(config) {
        var input = config._i;
        if (isUndefined2(input)) {
          config._d = new Date(hooks20.now());
        } else if (isDate2(input)) {
          config._d = new Date(input.valueOf());
        } else if (typeof input === "string") {
          configFromString2(config);
        } else if (isArray13(input)) {
          config._a = map4(input.slice(0), function(obj) {
            return parseInt(obj, 10);
          });
          configFromArray2(config);
        } else if (isObject6(input)) {
          configFromObject2(config);
        } else if (isNumber2(input)) {
          config._d = new Date(input);
        } else {
          hooks20.createFromInputFallback(config);
        }
      }
      function createLocalOrUTC2(input, format24, locale6, strict, isUTC) {
        var c = {};
        if (format24 === true || format24 === false) {
          strict = format24;
          format24 = void 0;
        }
        if (locale6 === true || locale6 === false) {
          strict = locale6;
          locale6 = void 0;
        }
        if (isObject6(input) && isObjectEmpty2(input) || isArray13(input) && input.length === 0) {
          input = void 0;
        }
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale6;
        c._i = input;
        c._f = format24;
        c._strict = strict;
        return createFromConfig2(c);
      }
      function createLocal2(input, format24, locale6, strict) {
        return createLocalOrUTC2(input, format24, locale6, strict, false);
      }
      var prototypeMin2 = deprecate9("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var other = createLocal2.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
          return other < this ? this : other;
        } else {
          return createInvalid3();
        }
      }), prototypeMax2 = deprecate9("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var other = createLocal2.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
          return other > this ? this : other;
        } else {
          return createInvalid3();
        }
      });
      function pickBy2(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray13(moments[0])) {
          moments = moments[0];
        }
        if (!moments.length) {
          return createLocal2();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
          if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
          }
        }
        return res;
      }
      function min2() {
        var args = [].slice.call(arguments, 0);
        return pickBy2("isBefore", args);
      }
      function max2() {
        var args = [].slice.call(arguments, 0);
        return pickBy2("isAfter", args);
      }
      var now3 = function() {
        return Date.now ? Date.now() : +new Date();
      };
      var ordering2 = [
        "year",
        "quarter",
        "month",
        "week",
        "day",
        "hour",
        "minute",
        "second",
        "millisecond"
      ];
      function isDurationValid2(m) {
        var key, unitHasDecimal = false, i;
        for (key in m) {
          if (hasOwnProp2(m, key) && !(indexOf2.call(ordering2, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
          }
        }
        for (i = 0; i < ordering2.length; ++i) {
          if (m[ordering2[i]]) {
            if (unitHasDecimal) {
              return false;
            }
            if (parseFloat(m[ordering2[i]]) !== toInt2(m[ordering2[i]])) {
              unitHasDecimal = true;
            }
          }
        }
        return true;
      }
      function isValid$1() {
        return this._isValid;
      }
      function createInvalid$1() {
        return createDuration2(NaN);
      }
      function Duration2(duration2) {
        var normalizedInput = normalizeObjectUnits2(duration2), years3 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months3 = normalizedInput.month || 0, weeks3 = normalizedInput.week || normalizedInput.isoWeek || 0, days3 = normalizedInput.day || 0, hours3 = normalizedInput.hour || 0, minutes3 = normalizedInput.minute || 0, seconds3 = normalizedInput.second || 0, milliseconds3 = normalizedInput.millisecond || 0;
        this._isValid = isDurationValid2(normalizedInput);
        this._milliseconds = +milliseconds3 + seconds3 * 1e3 + minutes3 * 6e4 + hours3 * 1e3 * 60 * 60;
        this._days = +days3 + weeks3 * 7;
        this._months = +months3 + quarters * 3 + years3 * 12;
        this._data = {};
        this._locale = getLocale7();
        this._bubble();
      }
      function isDuration2(obj) {
        return obj instanceof Duration2;
      }
      function absRound2(number) {
        if (number < 0) {
          return Math.round(-1 * number) * -1;
        } else {
          return Math.round(number);
        }
      }
      function compareArrays2(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
        for (i = 0; i < len; i++) {
          if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt2(array1[i]) !== toInt2(array2[i])) {
            diffs++;
          }
        }
        return diffs + lengthDiff;
      }
      function offset7(token19, separator) {
        addFormatToken2(token19, 0, 0, function() {
          var offset8 = this.utcOffset(), sign3 = "+";
          if (offset8 < 0) {
            offset8 = -offset8;
            sign3 = "-";
          }
          return sign3 + zeroFill2(~~(offset8 / 60), 2) + separator + zeroFill2(~~offset8 % 60, 2);
        });
      }
      offset7("Z", ":");
      offset7("ZZ", "");
      addRegexToken2("Z", matchShortOffset2);
      addRegexToken2("ZZ", matchShortOffset2);
      addParseToken2(["Z", "ZZ"], function(input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString2(matchShortOffset2, input);
      });
      var chunkOffset2 = /([\+\-]|\d\d)/gi;
      function offsetFromString2(matcher, string) {
        var matches = (string || "").match(matcher), chunk, parts5, minutes3;
        if (matches === null) {
          return null;
        }
        chunk = matches[matches.length - 1] || [];
        parts5 = (chunk + "").match(chunkOffset2) || ["-", 0, 0];
        minutes3 = +(parts5[1] * 60) + toInt2(parts5[2]);
        return minutes3 === 0 ? 0 : parts5[0] === "+" ? minutes3 : -minutes3;
      }
      function cloneWithOffset2(input, model) {
        var res, diff4;
        if (model._isUTC) {
          res = model.clone();
          diff4 = (isMoment2(input) || isDate2(input) ? input.valueOf() : createLocal2(input).valueOf()) - res.valueOf();
          res._d.setTime(res._d.valueOf() + diff4);
          hooks20.updateOffset(res, false);
          return res;
        } else {
          return createLocal2(input).local();
        }
      }
      function getDateOffset2(m) {
        return -Math.round(m._d.getTimezoneOffset());
      }
      hooks20.updateOffset = function() {
      };
      function getSetOffset2(input, keepLocalTime, keepMinutes) {
        var offset8 = this._offset || 0, localAdjust;
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        if (input != null) {
          if (typeof input === "string") {
            input = offsetFromString2(matchShortOffset2, input);
            if (input === null) {
              return this;
            }
          } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
          }
          if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset2(this);
          }
          this._offset = input;
          this._isUTC = true;
          if (localAdjust != null) {
            this.add(localAdjust, "m");
          }
          if (offset8 !== input) {
            if (!keepLocalTime || this._changeInProgress) {
              addSubtract3(this, createDuration2(input - offset8, "m"), 1, false);
            } else if (!this._changeInProgress) {
              this._changeInProgress = true;
              hooks20.updateOffset(this, true);
              this._changeInProgress = null;
            }
          }
          return this;
        } else {
          return this._isUTC ? offset8 : getDateOffset2(this);
        }
      }
      function getSetZone2(input, keepLocalTime) {
        if (input != null) {
          if (typeof input !== "string") {
            input = -input;
          }
          this.utcOffset(input, keepLocalTime);
          return this;
        } else {
          return -this.utcOffset();
        }
      }
      function setOffsetToUTC2(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
      }
      function setOffsetToLocal2(keepLocalTime) {
        if (this._isUTC) {
          this.utcOffset(0, keepLocalTime);
          this._isUTC = false;
          if (keepLocalTime) {
            this.subtract(getDateOffset2(this), "m");
          }
        }
        return this;
      }
      function setOffsetToParsedOffset2() {
        if (this._tzm != null) {
          this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === "string") {
          var tZone = offsetFromString2(matchOffset2, this._i);
          if (tZone != null) {
            this.utcOffset(tZone);
          } else {
            this.utcOffset(0, true);
          }
        }
        return this;
      }
      function hasAlignedHourOffset2(input) {
        if (!this.isValid()) {
          return false;
        }
        input = input ? createLocal2(input).utcOffset() : 0;
        return (this.utcOffset() - input) % 60 === 0;
      }
      function isDaylightSavingTime2() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
      }
      function isDaylightSavingTimeShifted2() {
        if (!isUndefined2(this._isDSTShifted)) {
          return this._isDSTShifted;
        }
        var c = {}, other;
        copyConfig2(c, this);
        c = prepareConfig2(c);
        if (c._a) {
          other = c._isUTC ? createUTC2(c._a) : createLocal2(c._a);
          this._isDSTShifted = this.isValid() && compareArrays2(c._a, other.toArray()) > 0;
        } else {
          this._isDSTShifted = false;
        }
        return this._isDSTShifted;
      }
      function isLocal2() {
        return this.isValid() ? !this._isUTC : false;
      }
      function isUtcOffset2() {
        return this.isValid() ? this._isUTC : false;
      }
      function isUtc2() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
      }
      var aspNetRegex2 = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex2 = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
      function createDuration2(input, key) {
        var duration2 = input, match = null, sign3, ret, diffRes;
        if (isDuration2(input)) {
          duration2 = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months
          };
        } else if (isNumber2(input) || !isNaN(+input)) {
          duration2 = {};
          if (key) {
            duration2[key] = +input;
          } else {
            duration2.milliseconds = +input;
          }
        } else if (match = aspNetRegex2.exec(input)) {
          sign3 = match[1] === "-" ? -1 : 1;
          duration2 = {
            y: 0,
            d: toInt2(match[DATE2]) * sign3,
            h: toInt2(match[HOUR2]) * sign3,
            m: toInt2(match[MINUTE2]) * sign3,
            s: toInt2(match[SECOND2]) * sign3,
            ms: toInt2(absRound2(match[MILLISECOND2] * 1e3)) * sign3
          };
        } else if (match = isoRegex2.exec(input)) {
          sign3 = match[1] === "-" ? -1 : 1;
          duration2 = {
            y: parseIso2(match[2], sign3),
            M: parseIso2(match[3], sign3),
            w: parseIso2(match[4], sign3),
            d: parseIso2(match[5], sign3),
            h: parseIso2(match[6], sign3),
            m: parseIso2(match[7], sign3),
            s: parseIso2(match[8], sign3)
          };
        } else if (duration2 == null) {
          duration2 = {};
        } else if (typeof duration2 === "object" && ("from" in duration2 || "to" in duration2)) {
          diffRes = momentsDifference2(createLocal2(duration2.from), createLocal2(duration2.to));
          duration2 = {};
          duration2.ms = diffRes.milliseconds;
          duration2.M = diffRes.months;
        }
        ret = new Duration2(duration2);
        if (isDuration2(input) && hasOwnProp2(input, "_locale")) {
          ret._locale = input._locale;
        }
        if (isDuration2(input) && hasOwnProp2(input, "_isValid")) {
          ret._isValid = input._isValid;
        }
        return ret;
      }
      createDuration2.fn = Duration2.prototype;
      createDuration2.invalid = createInvalid$1;
      function parseIso2(inp, sign3) {
        var res = inp && parseFloat(inp.replace(",", "."));
        return (isNaN(res) ? 0 : res) * sign3;
      }
      function positiveMomentsDifference2(base, other) {
        var res = {};
        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, "M").isAfter(other)) {
          --res.months;
        }
        res.milliseconds = +other - +base.clone().add(res.months, "M");
        return res;
      }
      function momentsDifference2(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
          return {milliseconds: 0, months: 0};
        }
        other = cloneWithOffset2(other, base);
        if (base.isBefore(other)) {
          res = positiveMomentsDifference2(base, other);
        } else {
          res = positiveMomentsDifference2(other, base);
          res.milliseconds = -res.milliseconds;
          res.months = -res.months;
        }
        return res;
      }
      function createAdder2(direction, name) {
        return function(val, period) {
          var dur, tmp;
          if (period !== null && !isNaN(+period)) {
            deprecateSimple2(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
            tmp = val;
            val = period;
            period = tmp;
          }
          dur = createDuration2(val, period);
          addSubtract3(this, dur, direction);
          return this;
        };
      }
      function addSubtract3(mom, duration2, isAdding, updateOffset) {
        var milliseconds3 = duration2._milliseconds, days3 = absRound2(duration2._days), months3 = absRound2(duration2._months);
        if (!mom.isValid()) {
          return;
        }
        updateOffset = updateOffset == null ? true : updateOffset;
        if (months3) {
          setMonth2(mom, get7(mom, "Month") + months3 * isAdding);
        }
        if (days3) {
          set$1(mom, "Date", get7(mom, "Date") + days3 * isAdding);
        }
        if (milliseconds3) {
          mom._d.setTime(mom._d.valueOf() + milliseconds3 * isAdding);
        }
        if (updateOffset) {
          hooks20.updateOffset(mom, days3 || months3);
        }
      }
      var add3 = createAdder2(1, "add"), subtract3 = createAdder2(-1, "subtract");
      function isString2(input) {
        return typeof input === "string" || input instanceof String;
      }
      function isMomentInput2(input) {
        return isMoment2(input) || isDate2(input) || isString2(input) || isNumber2(input) || isNumberOrStringArray2(input) || isMomentInputObject2(input) || input === null || input === void 0;
      }
      function isMomentInputObject2(input) {
        var objectTest = isObject6(input) && !isObjectEmpty2(input), propertyTest = false, properties = [
          "years",
          "year",
          "y",
          "months",
          "month",
          "M",
          "days",
          "day",
          "d",
          "dates",
          "date",
          "D",
          "hours",
          "hour",
          "h",
          "minutes",
          "minute",
          "m",
          "seconds",
          "second",
          "s",
          "milliseconds",
          "millisecond",
          "ms"
        ], i, property3;
        for (i = 0; i < properties.length; i += 1) {
          property3 = properties[i];
          propertyTest = propertyTest || hasOwnProp2(input, property3);
        }
        return objectTest && propertyTest;
      }
      function isNumberOrStringArray2(input) {
        var arrayTest = isArray13(input), dataTypeTest = false;
        if (arrayTest) {
          dataTypeTest = input.filter(function(item) {
            return !isNumber2(item) && isString2(input);
          }).length === 0;
        }
        return arrayTest && dataTypeTest;
      }
      function isCalendarSpec2(input) {
        var objectTest = isObject6(input) && !isObjectEmpty2(input), propertyTest = false, properties = [
          "sameDay",
          "nextDay",
          "lastDay",
          "nextWeek",
          "lastWeek",
          "sameElse"
        ], i, property3;
        for (i = 0; i < properties.length; i += 1) {
          property3 = properties[i];
          propertyTest = propertyTest || hasOwnProp2(input, property3);
        }
        return objectTest && propertyTest;
      }
      function getCalendarFormat2(myMoment, now4) {
        var diff4 = myMoment.diff(now4, "days", true);
        return diff4 < -6 ? "sameElse" : diff4 < -1 ? "lastWeek" : diff4 < 0 ? "lastDay" : diff4 < 1 ? "sameDay" : diff4 < 2 ? "nextDay" : diff4 < 7 ? "nextWeek" : "sameElse";
      }
      function calendar$1(time, formats3) {
        if (arguments.length === 1) {
          if (isMomentInput2(arguments[0])) {
            time = arguments[0];
            formats3 = void 0;
          } else if (isCalendarSpec2(arguments[0])) {
            formats3 = arguments[0];
            time = void 0;
          }
        }
        var now4 = time || createLocal2(), sod = cloneWithOffset2(now4, this).startOf("day"), format24 = hooks20.calendarFormat(this, sod) || "sameElse", output = formats3 && (isFunction5(formats3[format24]) ? formats3[format24].call(this, now4) : formats3[format24]);
        return this.format(output || this.localeData().calendar(format24, this, createLocal2(now4)));
      }
      function clone5() {
        return new Moment2(this);
      }
      function isAfter2(input, units2) {
        var localInput = isMoment2(input) ? input : createLocal2(input);
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units2 = normalizeUnits2(units2) || "millisecond";
        if (units2 === "millisecond") {
          return this.valueOf() > localInput.valueOf();
        } else {
          return localInput.valueOf() < this.clone().startOf(units2).valueOf();
        }
      }
      function isBefore2(input, units2) {
        var localInput = isMoment2(input) ? input : createLocal2(input);
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units2 = normalizeUnits2(units2) || "millisecond";
        if (units2 === "millisecond") {
          return this.valueOf() < localInput.valueOf();
        } else {
          return this.clone().endOf(units2).valueOf() < localInput.valueOf();
        }
      }
      function isBetween2(from4, to4, units2, inclusivity) {
        var localFrom = isMoment2(from4) ? from4 : createLocal2(from4), localTo = isMoment2(to4) ? to4 : createLocal2(to4);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
          return false;
        }
        inclusivity = inclusivity || "()";
        return (inclusivity[0] === "(" ? this.isAfter(localFrom, units2) : !this.isBefore(localFrom, units2)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units2) : !this.isAfter(localTo, units2));
      }
      function isSame2(input, units2) {
        var localInput = isMoment2(input) ? input : createLocal2(input), inputMs;
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units2 = normalizeUnits2(units2) || "millisecond";
        if (units2 === "millisecond") {
          return this.valueOf() === localInput.valueOf();
        } else {
          inputMs = localInput.valueOf();
          return this.clone().startOf(units2).valueOf() <= inputMs && inputMs <= this.clone().endOf(units2).valueOf();
        }
      }
      function isSameOrAfter2(input, units2) {
        return this.isSame(input, units2) || this.isAfter(input, units2);
      }
      function isSameOrBefore2(input, units2) {
        return this.isSame(input, units2) || this.isBefore(input, units2);
      }
      function diff3(input, units2, asFloat) {
        var that, zoneDelta, output;
        if (!this.isValid()) {
          return NaN;
        }
        that = cloneWithOffset2(input, this);
        if (!that.isValid()) {
          return NaN;
        }
        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
        units2 = normalizeUnits2(units2);
        switch (units2) {
          case "year":
            output = monthDiff2(this, that) / 12;
            break;
          case "month":
            output = monthDiff2(this, that);
            break;
          case "quarter":
            output = monthDiff2(this, that) / 3;
            break;
          case "second":
            output = (this - that) / 1e3;
            break;
          case "minute":
            output = (this - that) / 6e4;
            break;
          case "hour":
            output = (this - that) / 36e5;
            break;
          case "day":
            output = (this - that - zoneDelta) / 864e5;
            break;
          case "week":
            output = (this - that - zoneDelta) / 6048e5;
            break;
          default:
            output = this - that;
        }
        return asFloat ? output : absFloor2(output);
      }
      function monthDiff2(a, b) {
        if (a.date() < b.date()) {
          return -monthDiff2(b, a);
        }
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
        if (b - anchor < 0) {
          anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
          adjust = (b - anchor) / (anchor - anchor2);
        } else {
          anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
          adjust = (b - anchor) / (anchor2 - anchor);
        }
        return -(wholeMonthDiff + adjust) || 0;
      }
      hooks20.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
      hooks20.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
      function toString4() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
      }
      function toISOString3(keepOffset) {
        if (!this.isValid()) {
          return null;
        }
        var utc7 = keepOffset !== true, m = utc7 ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
          return formatMoment2(m, utc7 ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ");
        }
        if (isFunction5(Date.prototype.toISOString)) {
          if (utc7) {
            return this.toDate().toISOString();
          } else {
            return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment2(m, "Z"));
          }
        }
        return formatMoment2(m, utc7 ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
      }
      function inspect2() {
        if (!this.isValid()) {
          return "moment.invalid(/* " + this._i + " */)";
        }
        var func = "moment", zone = "", prefix, year5, datetime, suffix;
        if (!this.isLocal()) {
          func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
          zone = "Z";
        }
        prefix = "[" + func + '("]';
        year5 = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
        datetime = "-MM-DD[T]HH:mm:ss.SSS";
        suffix = zone + '[")]';
        return this.format(prefix + year5 + datetime + suffix);
      }
      function format23(inputString) {
        if (!inputString) {
          inputString = this.isUtc() ? hooks20.defaultFormatUtc : hooks20.defaultFormat;
        }
        var output = formatMoment2(this, inputString);
        return this.localeData().postformat(output);
      }
      function from3(time, withoutSuffix) {
        if (this.isValid() && (isMoment2(time) && time.isValid() || createLocal2(time).isValid())) {
          return createDuration2({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }
      function fromNow2(withoutSuffix) {
        return this.from(createLocal2(), withoutSuffix);
      }
      function to3(time, withoutSuffix) {
        if (this.isValid() && (isMoment2(time) && time.isValid() || createLocal2(time).isValid())) {
          return createDuration2({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }
      function toNow2(withoutSuffix) {
        return this.to(createLocal2(), withoutSuffix);
      }
      function locale5(key) {
        var newLocaleData;
        if (key === void 0) {
          return this._locale._abbr;
        } else {
          newLocaleData = getLocale7(key);
          if (newLocaleData != null) {
            this._locale = newLocaleData;
          }
          return this;
        }
      }
      var lang2 = deprecate9("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(key) {
        if (key === void 0) {
          return this.localeData();
        } else {
          return this.locale(key);
        }
      });
      function localeData2() {
        return this._locale;
      }
      var MS_PER_SECOND2 = 1e3, MS_PER_MINUTE2 = 60 * MS_PER_SECOND2, MS_PER_HOUR2 = 60 * MS_PER_MINUTE2, MS_PER_400_YEARS2 = (365 * 400 + 97) * 24 * MS_PER_HOUR2;
      function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
      }
      function localStartOfDate2(y, m, d) {
        if (y < 100 && y >= 0) {
          return new Date(y + 400, m, d) - MS_PER_400_YEARS2;
        } else {
          return new Date(y, m, d).valueOf();
        }
      }
      function utcStartOfDate2(y, m, d) {
        if (y < 100 && y >= 0) {
          return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS2;
        } else {
          return Date.UTC(y, m, d);
        }
      }
      function startOf2(units2) {
        var time, startOfDate;
        units2 = normalizeUnits2(units2);
        if (units2 === void 0 || units2 === "millisecond" || !this.isValid()) {
          return this;
        }
        startOfDate = this._isUTC ? utcStartOfDate2 : localStartOfDate2;
        switch (units2) {
          case "year":
            time = startOfDate(this.year(), 0, 1);
            break;
          case "quarter":
            time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
            break;
          case "month":
            time = startOfDate(this.year(), this.month(), 1);
            break;
          case "week":
            time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
            break;
          case "isoWeek":
            time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;
          case "day":
          case "date":
            time = startOfDate(this.year(), this.month(), this.date());
            break;
          case "hour":
            time = this._d.valueOf();
            time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE2), MS_PER_HOUR2);
            break;
          case "minute":
            time = this._d.valueOf();
            time -= mod$1(time, MS_PER_MINUTE2);
            break;
          case "second":
            time = this._d.valueOf();
            time -= mod$1(time, MS_PER_SECOND2);
            break;
        }
        this._d.setTime(time);
        hooks20.updateOffset(this, true);
        return this;
      }
      function endOf2(units2) {
        var time, startOfDate;
        units2 = normalizeUnits2(units2);
        if (units2 === void 0 || units2 === "millisecond" || !this.isValid()) {
          return this;
        }
        startOfDate = this._isUTC ? utcStartOfDate2 : localStartOfDate2;
        switch (units2) {
          case "year":
            time = startOfDate(this.year() + 1, 0, 1) - 1;
            break;
          case "quarter":
            time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;
          case "month":
            time = startOfDate(this.year(), this.month() + 1, 1) - 1;
            break;
          case "week":
            time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;
          case "isoWeek":
            time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;
          case "day":
          case "date":
            time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case "hour":
            time = this._d.valueOf();
            time += MS_PER_HOUR2 - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE2), MS_PER_HOUR2) - 1;
            break;
          case "minute":
            time = this._d.valueOf();
            time += MS_PER_MINUTE2 - mod$1(time, MS_PER_MINUTE2) - 1;
            break;
          case "second":
            time = this._d.valueOf();
            time += MS_PER_SECOND2 - mod$1(time, MS_PER_SECOND2) - 1;
            break;
        }
        this._d.setTime(time);
        hooks20.updateOffset(this, true);
        return this;
      }
      function valueOf3() {
        return this._d.valueOf() - (this._offset || 0) * 6e4;
      }
      function unix2() {
        return Math.floor(this.valueOf() / 1e3);
      }
      function toDate2() {
        return new Date(this.valueOf());
      }
      function toArray2() {
        var m = this;
        return [
          m.year(),
          m.month(),
          m.date(),
          m.hour(),
          m.minute(),
          m.second(),
          m.millisecond()
        ];
      }
      function toObject2() {
        var m = this;
        return {
          years: m.year(),
          months: m.month(),
          date: m.date(),
          hours: m.hours(),
          minutes: m.minutes(),
          seconds: m.seconds(),
          milliseconds: m.milliseconds()
        };
      }
      function toJSON2() {
        return this.isValid() ? this.toISOString() : null;
      }
      function isValid$2() {
        return isValid4(this);
      }
      function parsingFlags2() {
        return extend7({}, getParsingFlags2(this));
      }
      function invalidAt2() {
        return getParsingFlags2(this).overflow;
      }
      function creationData2() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
        };
      }
      addFormatToken2("N", 0, 0, "eraAbbr");
      addFormatToken2("NN", 0, 0, "eraAbbr");
      addFormatToken2("NNN", 0, 0, "eraAbbr");
      addFormatToken2("NNNN", 0, 0, "eraName");
      addFormatToken2("NNNNN", 0, 0, "eraNarrow");
      addFormatToken2("y", ["y", 1], "yo", "eraYear");
      addFormatToken2("y", ["yy", 2], 0, "eraYear");
      addFormatToken2("y", ["yyy", 3], 0, "eraYear");
      addFormatToken2("y", ["yyyy", 4], 0, "eraYear");
      addRegexToken2("N", matchEraAbbr2);
      addRegexToken2("NN", matchEraAbbr2);
      addRegexToken2("NNN", matchEraAbbr2);
      addRegexToken2("NNNN", matchEraName2);
      addRegexToken2("NNNNN", matchEraNarrow2);
      addParseToken2(["N", "NN", "NNN", "NNNN", "NNNNN"], function(input, array, config, token19) {
        var era3 = config._locale.erasParse(input, token19, config._strict);
        if (era3) {
          getParsingFlags2(config).era = era3;
        } else {
          getParsingFlags2(config).invalidEra = input;
        }
      });
      addRegexToken2("y", matchUnsigned2);
      addRegexToken2("yy", matchUnsigned2);
      addRegexToken2("yyy", matchUnsigned2);
      addRegexToken2("yyyy", matchUnsigned2);
      addRegexToken2("yo", matchEraYearOrdinal2);
      addParseToken2(["y", "yy", "yyy", "yyyy"], YEAR2);
      addParseToken2(["yo"], function(input, array, config, token19) {
        var match;
        if (config._locale._eraYearOrdinalRegex) {
          match = input.match(config._locale._eraYearOrdinalRegex);
        }
        if (config._locale.eraYearOrdinalParse) {
          array[YEAR2] = config._locale.eraYearOrdinalParse(input, match);
        } else {
          array[YEAR2] = parseInt(input, 10);
        }
      });
      function localeEras2(m, format24) {
        var i, l, date, eras = this._eras || getLocale7("en")._eras;
        for (i = 0, l = eras.length; i < l; ++i) {
          switch (typeof eras[i].since) {
            case "string":
              date = hooks20(eras[i].since).startOf("day");
              eras[i].since = date.valueOf();
              break;
          }
          switch (typeof eras[i].until) {
            case "undefined":
              eras[i].until = Infinity;
              break;
            case "string":
              date = hooks20(eras[i].until).startOf("day").valueOf();
              eras[i].until = date.valueOf();
              break;
          }
        }
        return eras;
      }
      function localeErasParse2(eraName, format24, strict) {
        var i, l, eras = this.eras(), name, abbr, narrow;
        eraName = eraName.toUpperCase();
        for (i = 0, l = eras.length; i < l; ++i) {
          name = eras[i].name.toUpperCase();
          abbr = eras[i].abbr.toUpperCase();
          narrow = eras[i].narrow.toUpperCase();
          if (strict) {
            switch (format24) {
              case "N":
              case "NN":
              case "NNN":
                if (abbr === eraName) {
                  return eras[i];
                }
                break;
              case "NNNN":
                if (name === eraName) {
                  return eras[i];
                }
                break;
              case "NNNNN":
                if (narrow === eraName) {
                  return eras[i];
                }
                break;
            }
          } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
            return eras[i];
          }
        }
      }
      function localeErasConvertYear2(era3, year5) {
        var dir = era3.since <= era3.until ? 1 : -1;
        if (year5 === void 0) {
          return hooks20(era3.since).year();
        } else {
          return hooks20(era3.since).year() + (year5 - era3.offset) * dir;
        }
      }
      function getEraName2() {
        var i, l, val, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          val = this.startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].name;
          }
          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].name;
          }
        }
        return "";
      }
      function getEraNarrow2() {
        var i, l, val, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          val = this.startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].narrow;
          }
          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].narrow;
          }
        }
        return "";
      }
      function getEraAbbr2() {
        var i, l, val, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          val = this.startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].abbr;
          }
          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].abbr;
          }
        }
        return "";
      }
      function getEraYear2() {
        var i, l, dir, val, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          dir = eras[i].since <= eras[i].until ? 1 : -1;
          val = this.startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
            return (this.year() - hooks20(eras[i].since).year()) * dir + eras[i].offset;
          }
        }
        return this.year();
      }
      function erasNameRegex2(isStrict) {
        if (!hasOwnProp2(this, "_erasNameRegex")) {
          computeErasParse2.call(this);
        }
        return isStrict ? this._erasNameRegex : this._erasRegex;
      }
      function erasAbbrRegex2(isStrict) {
        if (!hasOwnProp2(this, "_erasAbbrRegex")) {
          computeErasParse2.call(this);
        }
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
      }
      function erasNarrowRegex2(isStrict) {
        if (!hasOwnProp2(this, "_erasNarrowRegex")) {
          computeErasParse2.call(this);
        }
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
      }
      function matchEraAbbr2(isStrict, locale6) {
        return locale6.erasAbbrRegex(isStrict);
      }
      function matchEraName2(isStrict, locale6) {
        return locale6.erasNameRegex(isStrict);
      }
      function matchEraNarrow2(isStrict, locale6) {
        return locale6.erasNarrowRegex(isStrict);
      }
      function matchEraYearOrdinal2(isStrict, locale6) {
        return locale6._eraYearOrdinalRegex || matchUnsigned2;
      }
      function computeErasParse2() {
        var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, eras = this.eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          namePieces.push(regexEscape2(eras[i].name));
          abbrPieces.push(regexEscape2(eras[i].abbr));
          narrowPieces.push(regexEscape2(eras[i].narrow));
          mixedPieces.push(regexEscape2(eras[i].name));
          mixedPieces.push(regexEscape2(eras[i].abbr));
          mixedPieces.push(regexEscape2(eras[i].narrow));
        }
        this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
        this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
        this._erasNarrowRegex = new RegExp("^(" + narrowPieces.join("|") + ")", "i");
      }
      addFormatToken2(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100;
      });
      addFormatToken2(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100;
      });
      function addWeekYearFormatToken2(token19, getter) {
        addFormatToken2(0, [token19, token19.length], 0, getter);
      }
      addWeekYearFormatToken2("gggg", "weekYear");
      addWeekYearFormatToken2("ggggg", "weekYear");
      addWeekYearFormatToken2("GGGG", "isoWeekYear");
      addWeekYearFormatToken2("GGGGG", "isoWeekYear");
      addUnitAlias2("weekYear", "gg");
      addUnitAlias2("isoWeekYear", "GG");
      addUnitPriority2("weekYear", 1);
      addUnitPriority2("isoWeekYear", 1);
      addRegexToken2("G", matchSigned2);
      addRegexToken2("g", matchSigned2);
      addRegexToken2("GG", match1to22, match22);
      addRegexToken2("gg", match1to22, match22);
      addRegexToken2("GGGG", match1to42, match42);
      addRegexToken2("gggg", match1to42, match42);
      addRegexToken2("GGGGG", match1to62, match62);
      addRegexToken2("ggggg", match1to62, match62);
      addWeekParseToken2(["gggg", "ggggg", "GGGG", "GGGGG"], function(input, week5, config, token19) {
        week5[token19.substr(0, 2)] = toInt2(input);
      });
      addWeekParseToken2(["gg", "GG"], function(input, week5, config, token19) {
        week5[token19] = hooks20.parseTwoDigitYear(input);
      });
      function getSetWeekYear2(input) {
        return getSetWeekYearHelper2.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
      }
      function getSetISOWeekYear2(input) {
        return getSetWeekYearHelper2.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
      }
      function getISOWeeksInYear2() {
        return weeksInYear2(this.year(), 1, 4);
      }
      function getISOWeeksInISOWeekYear2() {
        return weeksInYear2(this.isoWeekYear(), 1, 4);
      }
      function getWeeksInYear2() {
        var weekInfo = this.localeData()._week;
        return weeksInYear2(this.year(), weekInfo.dow, weekInfo.doy);
      }
      function getWeeksInWeekYear2() {
        var weekInfo = this.localeData()._week;
        return weeksInYear2(this.weekYear(), weekInfo.dow, weekInfo.doy);
      }
      function getSetWeekYearHelper2(input, week5, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
          return weekOfYear2(this, dow, doy).year;
        } else {
          weeksTarget = weeksInYear2(input, dow, doy);
          if (week5 > weeksTarget) {
            week5 = weeksTarget;
          }
          return setWeekAll2.call(this, input, week5, weekday, dow, doy);
        }
      }
      function setWeekAll2(weekYear, week5, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks2(weekYear, week5, weekday, dow, doy), date = createUTCDate2(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
      }
      addFormatToken2("Q", 0, "Qo", "quarter");
      addUnitAlias2("quarter", "Q");
      addUnitPriority2("quarter", 7);
      addRegexToken2("Q", match12);
      addParseToken2("Q", function(input, array) {
        array[MONTH2] = (toInt2(input) - 1) * 3;
      });
      function getSetQuarter2(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
      }
      addFormatToken2("D", ["DD", 2], "Do", "date");
      addUnitAlias2("date", "D");
      addUnitPriority2("date", 9);
      addRegexToken2("D", match1to22);
      addRegexToken2("DD", match1to22, match22);
      addRegexToken2("Do", function(isStrict, locale6) {
        return isStrict ? locale6._dayOfMonthOrdinalParse || locale6._ordinalParse : locale6._dayOfMonthOrdinalParseLenient;
      });
      addParseToken2(["D", "DD"], DATE2);
      addParseToken2("Do", function(input, array) {
        array[DATE2] = toInt2(input.match(match1to22)[0]);
      });
      var getSetDayOfMonth2 = makeGetSet2("Date", true);
      addFormatToken2("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
      addUnitAlias2("dayOfYear", "DDD");
      addUnitPriority2("dayOfYear", 4);
      addRegexToken2("DDD", match1to32);
      addRegexToken2("DDDD", match32);
      addParseToken2(["DDD", "DDDD"], function(input, array, config) {
        config._dayOfYear = toInt2(input);
      });
      function getSetDayOfYear2(input) {
        var dayOfYear = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
      }
      addFormatToken2("m", ["mm", 2], 0, "minute");
      addUnitAlias2("minute", "m");
      addUnitPriority2("minute", 14);
      addRegexToken2("m", match1to22);
      addRegexToken2("mm", match1to22, match22);
      addParseToken2(["m", "mm"], MINUTE2);
      var getSetMinute2 = makeGetSet2("Minutes", false);
      addFormatToken2("s", ["ss", 2], 0, "second");
      addUnitAlias2("second", "s");
      addUnitPriority2("second", 15);
      addRegexToken2("s", match1to22);
      addRegexToken2("ss", match1to22, match22);
      addParseToken2(["s", "ss"], SECOND2);
      var getSetSecond2 = makeGetSet2("Seconds", false);
      addFormatToken2("S", 0, 0, function() {
        return ~~(this.millisecond() / 100);
      });
      addFormatToken2(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10);
      });
      addFormatToken2(0, ["SSS", 3], 0, "millisecond");
      addFormatToken2(0, ["SSSS", 4], 0, function() {
        return this.millisecond() * 10;
      });
      addFormatToken2(0, ["SSSSS", 5], 0, function() {
        return this.millisecond() * 100;
      });
      addFormatToken2(0, ["SSSSSS", 6], 0, function() {
        return this.millisecond() * 1e3;
      });
      addFormatToken2(0, ["SSSSSSS", 7], 0, function() {
        return this.millisecond() * 1e4;
      });
      addFormatToken2(0, ["SSSSSSSS", 8], 0, function() {
        return this.millisecond() * 1e5;
      });
      addFormatToken2(0, ["SSSSSSSSS", 9], 0, function() {
        return this.millisecond() * 1e6;
      });
      addUnitAlias2("millisecond", "ms");
      addUnitPriority2("millisecond", 16);
      addRegexToken2("S", match1to32, match12);
      addRegexToken2("SS", match1to32, match22);
      addRegexToken2("SSS", match1to32, match32);
      var token18, getSetMillisecond2;
      for (token18 = "SSSS"; token18.length <= 9; token18 += "S") {
        addRegexToken2(token18, matchUnsigned2);
      }
      function parseMs2(input, array) {
        array[MILLISECOND2] = toInt2(("0." + input) * 1e3);
      }
      for (token18 = "S"; token18.length <= 9; token18 += "S") {
        addParseToken2(token18, parseMs2);
      }
      getSetMillisecond2 = makeGetSet2("Milliseconds", false);
      addFormatToken2("z", 0, 0, "zoneAbbr");
      addFormatToken2("zz", 0, 0, "zoneName");
      function getZoneAbbr2() {
        return this._isUTC ? "UTC" : "";
      }
      function getZoneName2() {
        return this._isUTC ? "Coordinated Universal Time" : "";
      }
      var proto4 = Moment2.prototype;
      proto4.add = add3;
      proto4.calendar = calendar$1;
      proto4.clone = clone5;
      proto4.diff = diff3;
      proto4.endOf = endOf2;
      proto4.format = format23;
      proto4.from = from3;
      proto4.fromNow = fromNow2;
      proto4.to = to3;
      proto4.toNow = toNow2;
      proto4.get = stringGet2;
      proto4.invalidAt = invalidAt2;
      proto4.isAfter = isAfter2;
      proto4.isBefore = isBefore2;
      proto4.isBetween = isBetween2;
      proto4.isSame = isSame2;
      proto4.isSameOrAfter = isSameOrAfter2;
      proto4.isSameOrBefore = isSameOrBefore2;
      proto4.isValid = isValid$2;
      proto4.lang = lang2;
      proto4.locale = locale5;
      proto4.localeData = localeData2;
      proto4.max = prototypeMax2;
      proto4.min = prototypeMin2;
      proto4.parsingFlags = parsingFlags2;
      proto4.set = stringSet2;
      proto4.startOf = startOf2;
      proto4.subtract = subtract3;
      proto4.toArray = toArray2;
      proto4.toObject = toObject2;
      proto4.toDate = toDate2;
      proto4.toISOString = toISOString3;
      proto4.inspect = inspect2;
      if (typeof Symbol !== "undefined" && Symbol.for != null) {
        proto4[Symbol.for("nodejs.util.inspect.custom")] = function() {
          return "Moment<" + this.format() + ">";
        };
      }
      proto4.toJSON = toJSON2;
      proto4.toString = toString4;
      proto4.unix = unix2;
      proto4.valueOf = valueOf3;
      proto4.creationData = creationData2;
      proto4.eraName = getEraName2;
      proto4.eraNarrow = getEraNarrow2;
      proto4.eraAbbr = getEraAbbr2;
      proto4.eraYear = getEraYear2;
      proto4.year = getSetYear2;
      proto4.isLeapYear = getIsLeapYear2;
      proto4.weekYear = getSetWeekYear2;
      proto4.isoWeekYear = getSetISOWeekYear2;
      proto4.quarter = proto4.quarters = getSetQuarter2;
      proto4.month = getSetMonth2;
      proto4.daysInMonth = getDaysInMonth2;
      proto4.week = proto4.weeks = getSetWeek2;
      proto4.isoWeek = proto4.isoWeeks = getSetISOWeek2;
      proto4.weeksInYear = getWeeksInYear2;
      proto4.weeksInWeekYear = getWeeksInWeekYear2;
      proto4.isoWeeksInYear = getISOWeeksInYear2;
      proto4.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear2;
      proto4.date = getSetDayOfMonth2;
      proto4.day = proto4.days = getSetDayOfWeek2;
      proto4.weekday = getSetLocaleDayOfWeek2;
      proto4.isoWeekday = getSetISODayOfWeek2;
      proto4.dayOfYear = getSetDayOfYear2;
      proto4.hour = proto4.hours = getSetHour2;
      proto4.minute = proto4.minutes = getSetMinute2;
      proto4.second = proto4.seconds = getSetSecond2;
      proto4.millisecond = proto4.milliseconds = getSetMillisecond2;
      proto4.utcOffset = getSetOffset2;
      proto4.utc = setOffsetToUTC2;
      proto4.local = setOffsetToLocal2;
      proto4.parseZone = setOffsetToParsedOffset2;
      proto4.hasAlignedHourOffset = hasAlignedHourOffset2;
      proto4.isDST = isDaylightSavingTime2;
      proto4.isLocal = isLocal2;
      proto4.isUtcOffset = isUtcOffset2;
      proto4.isUtc = isUtc2;
      proto4.isUTC = isUtc2;
      proto4.zoneAbbr = getZoneAbbr2;
      proto4.zoneName = getZoneName2;
      proto4.dates = deprecate9("dates accessor is deprecated. Use date instead.", getSetDayOfMonth2);
      proto4.months = deprecate9("months accessor is deprecated. Use month instead", getSetMonth2);
      proto4.years = deprecate9("years accessor is deprecated. Use year instead", getSetYear2);
      proto4.zone = deprecate9("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", getSetZone2);
      proto4.isDSTShifted = deprecate9("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", isDaylightSavingTimeShifted2);
      function createUnix2(input) {
        return createLocal2(input * 1e3);
      }
      function createInZone2() {
        return createLocal2.apply(null, arguments).parseZone();
      }
      function preParsePostFormat2(string) {
        return string;
      }
      var proto$1 = Locale2.prototype;
      proto$1.calendar = calendar7;
      proto$1.longDateFormat = longDateFormat2;
      proto$1.invalidDate = invalidDate2;
      proto$1.ordinal = ordinal4;
      proto$1.preparse = preParsePostFormat2;
      proto$1.postformat = preParsePostFormat2;
      proto$1.relativeTime = relativeTime3;
      proto$1.pastFuture = pastFuture2;
      proto$1.set = set4;
      proto$1.eras = localeEras2;
      proto$1.erasParse = localeErasParse2;
      proto$1.erasConvertYear = localeErasConvertYear2;
      proto$1.erasAbbrRegex = erasAbbrRegex2;
      proto$1.erasNameRegex = erasNameRegex2;
      proto$1.erasNarrowRegex = erasNarrowRegex2;
      proto$1.months = localeMonths2;
      proto$1.monthsShort = localeMonthsShort2;
      proto$1.monthsParse = localeMonthsParse2;
      proto$1.monthsRegex = monthsRegex2;
      proto$1.monthsShortRegex = monthsShortRegex2;
      proto$1.week = localeWeek2;
      proto$1.firstDayOfYear = localeFirstDayOfYear2;
      proto$1.firstDayOfWeek = localeFirstDayOfWeek2;
      proto$1.weekdays = localeWeekdays2;
      proto$1.weekdaysMin = localeWeekdaysMin2;
      proto$1.weekdaysShort = localeWeekdaysShort2;
      proto$1.weekdaysParse = localeWeekdaysParse2;
      proto$1.weekdaysRegex = weekdaysRegex2;
      proto$1.weekdaysShortRegex = weekdaysShortRegex2;
      proto$1.weekdaysMinRegex = weekdaysMinRegex2;
      proto$1.isPM = localeIsPM2;
      proto$1.meridiem = localeMeridiem2;
      function get$1(format24, index, field, setter) {
        var locale6 = getLocale7(), utc7 = createUTC2().set(setter, index);
        return locale6[field](utc7, format24);
      }
      function listMonthsImpl2(format24, index, field) {
        if (isNumber2(format24)) {
          index = format24;
          format24 = void 0;
        }
        format24 = format24 || "";
        if (index != null) {
          return get$1(format24, index, field, "month");
        }
        var i, out = [];
        for (i = 0; i < 12; i++) {
          out[i] = get$1(format24, i, field, "month");
        }
        return out;
      }
      function listWeekdaysImpl2(localeSorted, format24, index, field) {
        if (typeof localeSorted === "boolean") {
          if (isNumber2(format24)) {
            index = format24;
            format24 = void 0;
          }
          format24 = format24 || "";
        } else {
          format24 = localeSorted;
          index = format24;
          localeSorted = false;
          if (isNumber2(format24)) {
            index = format24;
            format24 = void 0;
          }
          format24 = format24 || "";
        }
        var locale6 = getLocale7(), shift = localeSorted ? locale6._week.dow : 0, i, out = [];
        if (index != null) {
          return get$1(format24, (index + shift) % 7, field, "day");
        }
        for (i = 0; i < 7; i++) {
          out[i] = get$1(format24, (i + shift) % 7, field, "day");
        }
        return out;
      }
      function listMonths2(format24, index) {
        return listMonthsImpl2(format24, index, "months");
      }
      function listMonthsShort2(format24, index) {
        return listMonthsImpl2(format24, index, "monthsShort");
      }
      function listWeekdays2(localeSorted, format24, index) {
        return listWeekdaysImpl2(localeSorted, format24, index, "weekdays");
      }
      function listWeekdaysShort2(localeSorted, format24, index) {
        return listWeekdaysImpl2(localeSorted, format24, index, "weekdaysShort");
      }
      function listWeekdaysMin2(localeSorted, format24, index) {
        return listWeekdaysImpl2(localeSorted, format24, index, "weekdaysMin");
      }
      getSetGlobalLocale3("en", {
        eras: [
          {
            since: "0001-01-01",
            until: Infinity,
            offset: 1,
            name: "Anno Domini",
            narrow: "AD",
            abbr: "AD"
          },
          {
            since: "0000-12-31",
            until: -Infinity,
            offset: 1,
            name: "Before Christ",
            narrow: "BC",
            abbr: "BC"
          }
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(number) {
          var b = number % 10, output = toInt2(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
          return number + output;
        }
      });
      hooks20.lang = deprecate9("moment.lang is deprecated. Use moment.locale instead.", getSetGlobalLocale3);
      hooks20.langData = deprecate9("moment.langData is deprecated. Use moment.localeData instead.", getLocale7);
      var mathAbs2 = Math.abs;
      function abs4() {
        var data = this._data;
        this._milliseconds = mathAbs2(this._milliseconds);
        this._days = mathAbs2(this._days);
        this._months = mathAbs2(this._months);
        data.milliseconds = mathAbs2(data.milliseconds);
        data.seconds = mathAbs2(data.seconds);
        data.minutes = mathAbs2(data.minutes);
        data.hours = mathAbs2(data.hours);
        data.months = mathAbs2(data.months);
        data.years = mathAbs2(data.years);
        return this;
      }
      function addSubtract$1(duration2, input, value, direction) {
        var other = createDuration2(input, value);
        duration2._milliseconds += direction * other._milliseconds;
        duration2._days += direction * other._days;
        duration2._months += direction * other._months;
        return duration2._bubble();
      }
      function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
      }
      function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
      }
      function absCeil2(number) {
        if (number < 0) {
          return Math.floor(number);
        } else {
          return Math.ceil(number);
        }
      }
      function bubble4() {
        var milliseconds3 = this._milliseconds, days3 = this._days, months3 = this._months, data = this._data, seconds3, minutes3, hours3, years3, monthsFromDays;
        if (!(milliseconds3 >= 0 && days3 >= 0 && months3 >= 0 || milliseconds3 <= 0 && days3 <= 0 && months3 <= 0)) {
          milliseconds3 += absCeil2(monthsToDays2(months3) + days3) * 864e5;
          days3 = 0;
          months3 = 0;
        }
        data.milliseconds = milliseconds3 % 1e3;
        seconds3 = absFloor2(milliseconds3 / 1e3);
        data.seconds = seconds3 % 60;
        minutes3 = absFloor2(seconds3 / 60);
        data.minutes = minutes3 % 60;
        hours3 = absFloor2(minutes3 / 60);
        data.hours = hours3 % 24;
        days3 += absFloor2(hours3 / 24);
        monthsFromDays = absFloor2(daysToMonths2(days3));
        months3 += monthsFromDays;
        days3 -= absCeil2(monthsToDays2(monthsFromDays));
        years3 = absFloor2(months3 / 12);
        months3 %= 12;
        data.days = days3;
        data.months = months3;
        data.years = years3;
        return this;
      }
      function daysToMonths2(days3) {
        return days3 * 4800 / 146097;
      }
      function monthsToDays2(months3) {
        return months3 * 146097 / 4800;
      }
      function as3(units2) {
        if (!this.isValid()) {
          return NaN;
        }
        var days3, months3, milliseconds3 = this._milliseconds;
        units2 = normalizeUnits2(units2);
        if (units2 === "month" || units2 === "quarter" || units2 === "year") {
          days3 = this._days + milliseconds3 / 864e5;
          months3 = this._months + daysToMonths2(days3);
          switch (units2) {
            case "month":
              return months3;
            case "quarter":
              return months3 / 3;
            case "year":
              return months3 / 12;
          }
        } else {
          days3 = this._days + Math.round(monthsToDays2(this._months));
          switch (units2) {
            case "week":
              return days3 / 7 + milliseconds3 / 6048e5;
            case "day":
              return days3 + milliseconds3 / 864e5;
            case "hour":
              return days3 * 24 + milliseconds3 / 36e5;
            case "minute":
              return days3 * 1440 + milliseconds3 / 6e4;
            case "second":
              return days3 * 86400 + milliseconds3 / 1e3;
            case "millisecond":
              return Math.floor(days3 * 864e5) + milliseconds3;
            default:
              throw new Error("Unknown unit " + units2);
          }
        }
      }
      function valueOf$1() {
        if (!this.isValid()) {
          return NaN;
        }
        return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt2(this._months / 12) * 31536e6;
      }
      function makeAs2(alias) {
        return function() {
          return this.as(alias);
        };
      }
      var asMilliseconds2 = makeAs2("ms"), asSeconds2 = makeAs2("s"), asMinutes2 = makeAs2("m"), asHours2 = makeAs2("h"), asDays2 = makeAs2("d"), asWeeks2 = makeAs2("w"), asMonths2 = makeAs2("M"), asQuarters2 = makeAs2("Q"), asYears2 = makeAs2("y");
      function clone$1() {
        return createDuration2(this);
      }
      function get$2(units2) {
        units2 = normalizeUnits2(units2);
        return this.isValid() ? this[units2 + "s"]() : NaN;
      }
      function makeGetter2(name) {
        return function() {
          return this.isValid() ? this._data[name] : NaN;
        };
      }
      var milliseconds2 = makeGetter2("milliseconds"), seconds2 = makeGetter2("seconds"), minutes2 = makeGetter2("minutes"), hours2 = makeGetter2("hours"), days2 = makeGetter2("days"), months2 = makeGetter2("months"), years2 = makeGetter2("years");
      function weeks2() {
        return absFloor2(this.days() / 7);
      }
      var round2 = Math.round, thresholds2 = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        w: null,
        M: 11
      };
      function substituteTimeAgo2(string, number, withoutSuffix, isFuture, locale6) {
        return locale6.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
      }
      function relativeTime$1(posNegDuration, withoutSuffix, thresholds3, locale6) {
        var duration2 = createDuration2(posNegDuration).abs(), seconds3 = round2(duration2.as("s")), minutes3 = round2(duration2.as("m")), hours3 = round2(duration2.as("h")), days3 = round2(duration2.as("d")), months3 = round2(duration2.as("M")), weeks3 = round2(duration2.as("w")), years3 = round2(duration2.as("y")), a = seconds3 <= thresholds3.ss && ["s", seconds3] || seconds3 < thresholds3.s && ["ss", seconds3] || minutes3 <= 1 && ["m"] || minutes3 < thresholds3.m && ["mm", minutes3] || hours3 <= 1 && ["h"] || hours3 < thresholds3.h && ["hh", hours3] || days3 <= 1 && ["d"] || days3 < thresholds3.d && ["dd", days3];
        if (thresholds3.w != null) {
          a = a || weeks3 <= 1 && ["w"] || weeks3 < thresholds3.w && ["ww", weeks3];
        }
        a = a || months3 <= 1 && ["M"] || months3 < thresholds3.M && ["MM", months3] || years3 <= 1 && ["y"] || ["yy", years3];
        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale6;
        return substituteTimeAgo2.apply(null, a);
      }
      function getSetRelativeTimeRounding2(roundingFunction) {
        if (roundingFunction === void 0) {
          return round2;
        }
        if (typeof roundingFunction === "function") {
          round2 = roundingFunction;
          return true;
        }
        return false;
      }
      function getSetRelativeTimeThreshold2(threshold, limit) {
        if (thresholds2[threshold] === void 0) {
          return false;
        }
        if (limit === void 0) {
          return thresholds2[threshold];
        }
        thresholds2[threshold] = limit;
        if (threshold === "s") {
          thresholds2.ss = limit - 1;
        }
        return true;
      }
      function humanize4(argWithSuffix, argThresholds) {
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }
        var withSuffix = false, th = thresholds2, locale6, output;
        if (typeof argWithSuffix === "object") {
          argThresholds = argWithSuffix;
          argWithSuffix = false;
        }
        if (typeof argWithSuffix === "boolean") {
          withSuffix = argWithSuffix;
        }
        if (typeof argThresholds === "object") {
          th = Object.assign({}, thresholds2, argThresholds);
          if (argThresholds.s != null && argThresholds.ss == null) {
            th.ss = argThresholds.s - 1;
          }
        }
        locale6 = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale6);
        if (withSuffix) {
          output = locale6.pastFuture(+this, output);
        }
        return locale6.postformat(output);
      }
      var abs$1 = Math.abs;
      function sign2(x) {
        return (x > 0) - (x < 0) || +x;
      }
      function toISOString$1() {
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }
        var seconds3 = abs$1(this._milliseconds) / 1e3, days3 = abs$1(this._days), months3 = abs$1(this._months), minutes3, hours3, years3, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
        if (!total) {
          return "P0D";
        }
        minutes3 = absFloor2(seconds3 / 60);
        hours3 = absFloor2(minutes3 / 60);
        seconds3 %= 60;
        minutes3 %= 60;
        years3 = absFloor2(months3 / 12);
        months3 %= 12;
        s = seconds3 ? seconds3.toFixed(3).replace(/\.?0+$/, "") : "";
        totalSign = total < 0 ? "-" : "";
        ymSign = sign2(this._months) !== sign2(total) ? "-" : "";
        daysSign = sign2(this._days) !== sign2(total) ? "-" : "";
        hmsSign = sign2(this._milliseconds) !== sign2(total) ? "-" : "";
        return totalSign + "P" + (years3 ? ymSign + years3 + "Y" : "") + (months3 ? ymSign + months3 + "M" : "") + (days3 ? daysSign + days3 + "D" : "") + (hours3 || minutes3 || seconds3 ? "T" : "") + (hours3 ? hmsSign + hours3 + "H" : "") + (minutes3 ? hmsSign + minutes3 + "M" : "") + (seconds3 ? hmsSign + s + "S" : "");
      }
      var proto$2 = Duration2.prototype;
      proto$2.isValid = isValid$1;
      proto$2.abs = abs4;
      proto$2.add = add$1;
      proto$2.subtract = subtract$1;
      proto$2.as = as3;
      proto$2.asMilliseconds = asMilliseconds2;
      proto$2.asSeconds = asSeconds2;
      proto$2.asMinutes = asMinutes2;
      proto$2.asHours = asHours2;
      proto$2.asDays = asDays2;
      proto$2.asWeeks = asWeeks2;
      proto$2.asMonths = asMonths2;
      proto$2.asQuarters = asQuarters2;
      proto$2.asYears = asYears2;
      proto$2.valueOf = valueOf$1;
      proto$2._bubble = bubble4;
      proto$2.clone = clone$1;
      proto$2.get = get$2;
      proto$2.milliseconds = milliseconds2;
      proto$2.seconds = seconds2;
      proto$2.minutes = minutes2;
      proto$2.hours = hours2;
      proto$2.days = days2;
      proto$2.weeks = weeks2;
      proto$2.months = months2;
      proto$2.years = years2;
      proto$2.humanize = humanize4;
      proto$2.toISOString = toISOString$1;
      proto$2.toString = toISOString$1;
      proto$2.toJSON = toISOString$1;
      proto$2.locale = locale5;
      proto$2.localeData = localeData2;
      proto$2.toIsoString = deprecate9("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", toISOString$1);
      proto$2.lang = lang2;
      addFormatToken2("X", 0, 0, "unix");
      addFormatToken2("x", 0, 0, "valueOf");
      addRegexToken2("x", matchSigned2);
      addRegexToken2("X", matchTimestamp2);
      addParseToken2("X", function(input, array, config) {
        config._d = new Date(parseFloat(input) * 1e3);
      });
      addParseToken2("x", function(input, array, config) {
        config._d = new Date(toInt2(input));
      });
      //! moment.js
      hooks20.version = "2.27.0";
      setHookCallback2(createLocal2);
      hooks20.fn = proto4;
      hooks20.min = min2;
      hooks20.max = max2;
      hooks20.now = now3;
      hooks20.utc = createUTC2;
      hooks20.unix = createUnix2;
      hooks20.months = listMonths2;
      hooks20.isDate = isDate2;
      hooks20.locale = getSetGlobalLocale3;
      hooks20.invalid = createInvalid3;
      hooks20.duration = createDuration2;
      hooks20.isMoment = isMoment2;
      hooks20.weekdays = listWeekdays2;
      hooks20.parseZone = createInZone2;
      hooks20.localeData = getLocale7;
      hooks20.isDuration = isDuration2;
      hooks20.monthsShort = listMonthsShort2;
      hooks20.weekdaysMin = listWeekdaysMin2;
      hooks20.defineLocale = defineLocale2;
      hooks20.updateLocale = updateLocale2;
      hooks20.locales = listLocales2;
      hooks20.weekdaysShort = listWeekdaysShort2;
      hooks20.normalizeUnits = normalizeUnits2;
      hooks20.relativeTimeRounding = getSetRelativeTimeRounding2;
      hooks20.relativeTimeThreshold = getSetRelativeTimeThreshold2;
      hooks20.calendarFormat = getCalendarFormat2;
      hooks20.prototype = proto4;
      hooks20.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
      };
      return hooks20;
    });
  });

  // node_modules/moment/src/lib/locale/locales.js
  var require_locales = __commonJS((exports, module) => {
    __export(exports, {
      defineLocale: () => defineLocale2,
      getLocale: () => getLocale7,
      getSetGlobalLocale: () => getSetGlobalLocale3,
      listLocales: () => listLocales2,
      updateLocale: () => updateLocale2
    });
    var locales8 = {};
    var localeFamilies = {};
    var globalLocale;
    function commonPrefix(arr1, arr2) {
      var i, minl = Math.min(arr1.length, arr2.length);
      for (i = 0; i < minl; i += 1) {
        if (arr1[i] !== arr2[i]) {
          return i;
        }
      }
      return minl;
    }
    function normalizeLocale(key) {
      return key ? key.toLowerCase().replace("_", "-") : key;
    }
    function chooseLocale(names) {
      var i = 0, j, next, locale5, split;
      while (i < names.length) {
        split = normalizeLocale(names[i]).split("-");
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split("-") : null;
        while (j > 0) {
          locale5 = loadLocale(split.slice(0, j).join("-"));
          if (locale5) {
            return locale5;
          }
          if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
            break;
          }
          j--;
        }
        i++;
      }
      return globalLocale;
    }
    function loadLocale(name) {
      var oldLocale = null, aliasedRequire;
      if (locales8[name] === void 0 && typeof module !== "undefined" && module && module.exports) {
        try {
          oldLocale = globalLocale._abbr;
          aliasedRequire = require;
          aliasedRequire("./locale/" + name);
          getSetGlobalLocale3(oldLocale);
        } catch (e) {
          locales8[name] = null;
        }
      }
      return locales8[name];
    }
    function getSetGlobalLocale3(key, values) {
      var data;
      if (key) {
        if (isUndefined(values)) {
          data = getLocale7(key);
        } else {
          data = defineLocale2(key, values);
        }
        if (data) {
          globalLocale = data;
        } else {
          if (typeof console !== "undefined" && console.warn) {
            console.warn("Locale " + key + " not found. Did you forget to load it?");
          }
        }
      }
      return globalLocale._abbr;
    }
    function defineLocale2(name, config) {
      if (config !== null) {
        var locale5, parentConfig = baseConfig;
        config.abbr = name;
        if (locales8[name] != null) {
          deprecateSimple("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
          parentConfig = locales8[name]._config;
        } else if (config.parentLocale != null) {
          if (locales8[config.parentLocale] != null) {
            parentConfig = locales8[config.parentLocale]._config;
          } else {
            locale5 = loadLocale(config.parentLocale);
            if (locale5 != null) {
              parentConfig = locale5._config;
            } else {
              if (!localeFamilies[config.parentLocale]) {
                localeFamilies[config.parentLocale] = [];
              }
              localeFamilies[config.parentLocale].push({
                name,
                config
              });
              return null;
            }
          }
        }
        locales8[name] = new Locale(mergeConfigs(parentConfig, config));
        if (localeFamilies[name]) {
          localeFamilies[name].forEach(function(x) {
            defineLocale2(x.name, x.config);
          });
        }
        getSetGlobalLocale3(name);
        return locales8[name];
      } else {
        delete locales8[name];
        return null;
      }
    }
    function updateLocale2(name, config) {
      if (config != null) {
        var locale5, tmpLocale, parentConfig = baseConfig;
        if (locales8[name] != null && locales8[name].parentLocale != null) {
          locales8[name].set(mergeConfigs(locales8[name]._config, config));
        } else {
          tmpLocale = loadLocale(name);
          if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
          }
          config = mergeConfigs(parentConfig, config);
          if (tmpLocale == null) {
            config.abbr = name;
          }
          locale5 = new Locale(config);
          locale5.parentLocale = locales8[name];
          locales8[name] = locale5;
        }
        getSetGlobalLocale3(name);
      } else {
        if (locales8[name] != null) {
          if (locales8[name].parentLocale != null) {
            locales8[name] = locales8[name].parentLocale;
            if (name === getSetGlobalLocale3()) {
              getSetGlobalLocale3(name);
            }
          } else if (locales8[name] != null) {
            delete locales8[name];
          }
        }
      }
      return locales8[name];
    }
    function getLocale7(key) {
      var locale5;
      if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
      }
      if (!key) {
        return globalLocale;
      }
      if (!isArray12(key)) {
        locale5 = loadLocale(key);
        if (locale5) {
          return locale5;
        }
        key = [key];
      }
      return chooseLocale(key);
    }
    function listLocales2() {
      return keys5(locales8);
    }
  });

  // node_modules/bootstrap/js/src/tab.js
  const jquery2 = __toModule(require_jquery());

  // node_modules/bootstrap/js/src/util.js
  const jquery = __toModule(require_jquery());
  const TRANSITION_END = "transitionend";
  const MAX_UID = 1e6;
  const MILLISECONDS_MULTIPLIER = 1e3;
  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }
  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle(event) {
        if (jquery.default(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments);
        }
        return void 0;
      }
    };
  }
  function transitionEndEmulator(duration2) {
    let called = false;
    jquery.default(this).one(Util.TRANSITION_END, () => {
      called = true;
    });
    setTimeout(() => {
      if (!called) {
        Util.triggerTransitionEnd(this);
      }
    }, duration2);
    return this;
  }
  function setTransitionEndSupport() {
    jquery.default.fn.emulateTransitionEnd = transitionEndEmulator;
    jquery.default.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  const Util = {
    TRANSITION_END: "bsTransitionEnd",
    getUID(prefix) {
      do {
        prefix += ~~(Math.random() * MAX_UID);
      } while (document.getElementById(prefix));
      return prefix;
    },
    getSelectorFromElement(element) {
      let selector = element.getAttribute("data-target");
      if (!selector || selector === "#") {
        const hrefAttr = element.getAttribute("href");
        selector = hrefAttr && hrefAttr !== "#" ? hrefAttr.trim() : "";
      }
      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      }
      let transitionDuration = jquery.default(element).css("transition-duration");
      let transitionDelay = jquery.default(element).css("transition-delay");
      const floatTransitionDuration = parseFloat(transitionDuration);
      const floatTransitionDelay = parseFloat(transitionDelay);
      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      }
      transitionDuration = transitionDuration.split(",")[0];
      transitionDelay = transitionDelay.split(",")[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd(element) {
      jquery.default(element).trigger(TRANSITION_END);
    },
    supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig(componentName, config, configTypes) {
      for (const property3 in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property3)) {
          const expectedTypes = configTypes[property3];
          const value = config[property3];
          const valueType = value && Util.isElement(value) ? "element" : toType(value);
          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(`${componentName.toUpperCase()}: Option "${property3}" provided type "${valueType}" but expected type "${expectedTypes}".`);
          }
        }
      }
    },
    findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      }
      if (typeof element.getRootNode === "function") {
        const root10 = element.getRootNode();
        return root10 instanceof ShadowRoot ? root10 : null;
      }
      if (element instanceof ShadowRoot) {
        return element;
      }
      if (!element.parentNode) {
        return null;
      }
      return Util.findShadowRoot(element.parentNode);
    }
  };
  setTransitionEndSupport();
  var util_default = Util;

  // node_modules/bootstrap/js/src/tab.js
  const NAME = "tab";
  const VERSION = "4.3.1";
  const DATA_KEY = "bs.tab";
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = ".data-api";
  const JQUERY_NO_CONFLICT = jquery2.default.fn[NAME];
  const Event = {
    HIDE: `hide${EVENT_KEY}`,
    HIDDEN: `hidden${EVENT_KEY}`,
    SHOW: `show${EVENT_KEY}`,
    SHOWN: `shown${EVENT_KEY}`,
    CLICK_DATA_API: `click${EVENT_KEY}${DATA_API_KEY}`
  };
  const ClassName = {
    DROPDOWN_MENU: "dropdown-menu",
    ACTIVE: "active",
    DISABLED: "disabled",
    FADE: "fade",
    SHOW: "show"
  };
  const Selector = {
    DROPDOWN: ".dropdown",
    NAV_LIST_GROUP: ".nav, .list-group",
    ACTIVE: ".active",
    ACTIVE_UL: "> li > .active",
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: ".dropdown-toggle",
    DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
  };
  class Tab {
    constructor(element) {
      this._element = element;
    }
    static get VERSION() {
      return VERSION;
    }
    show() {
      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && jquery2.default(this._element).hasClass(ClassName.ACTIVE) || jquery2.default(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }
      let target;
      let previous;
      const listElement = jquery2.default(this._element).closest(Selector.NAV_LIST_GROUP)[0];
      const selector = util_default.getSelectorFromElement(this._element);
      if (listElement) {
        const itemSelector = listElement.nodeName === "UL" || listElement.nodeName === "OL" ? Selector.ACTIVE_UL : Selector.ACTIVE;
        previous = jquery2.default.makeArray(jquery2.default(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }
      const hideEvent = jquery2.default.Event(Event.HIDE, {
        relatedTarget: this._element
      });
      const showEvent = jquery2.default.Event(Event.SHOW, {
        relatedTarget: previous
      });
      if (previous) {
        jquery2.default(previous).trigger(hideEvent);
      }
      jquery2.default(this._element).trigger(showEvent);
      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }
      if (selector) {
        target = document.querySelector(selector);
      }
      this._activate(this._element, listElement);
      const complete = () => {
        const hiddenEvent = jquery2.default.Event(Event.HIDDEN, {
          relatedTarget: this._element
        });
        const shownEvent = jquery2.default.Event(Event.SHOWN, {
          relatedTarget: previous
        });
        jquery2.default(previous).trigger(hiddenEvent);
        jquery2.default(this._element).trigger(shownEvent);
      };
      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    }
    dispose() {
      jquery2.default.removeData(this._element, DATA_KEY);
      this._element = null;
    }
    _activate(element, container, callback) {
      const activeElements = container && (container.nodeName === "UL" || container.nodeName === "OL") ? jquery2.default(container).find(Selector.ACTIVE_UL) : jquery2.default(container).children(Selector.ACTIVE);
      const active = activeElements[0];
      const isTransitioning = callback && (active && jquery2.default(active).hasClass(ClassName.FADE));
      const complete = () => this._transitionComplete(element, active, callback);
      if (active && isTransitioning) {
        const transitionDuration = util_default.getTransitionDurationFromElement(active);
        jquery2.default(active).removeClass(ClassName.SHOW).one(util_default.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    }
    _transitionComplete(element, active, callback) {
      if (active) {
        jquery2.default(active).removeClass(ClassName.ACTIVE);
        const dropdownChild = jquery2.default(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];
        if (dropdownChild) {
          jquery2.default(dropdownChild).removeClass(ClassName.ACTIVE);
        }
        if (active.getAttribute("role") === "tab") {
          active.setAttribute("aria-selected", false);
        }
      }
      jquery2.default(element).addClass(ClassName.ACTIVE);
      if (element.getAttribute("role") === "tab") {
        element.setAttribute("aria-selected", true);
      }
      util_default.reflow(element);
      if (element.classList.contains(ClassName.FADE)) {
        element.classList.add(ClassName.SHOW);
      }
      if (element.parentNode && jquery2.default(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
        const dropdownElement = jquery2.default(element).closest(Selector.DROPDOWN)[0];
        if (dropdownElement) {
          const dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector.DROPDOWN_TOGGLE));
          jquery2.default(dropdownToggleList).addClass(ClassName.ACTIVE);
        }
        element.setAttribute("aria-expanded", true);
      }
      if (callback) {
        callback();
      }
    }
    static _jQueryInterface(config) {
      return this.each(function() {
        const $this = jquery2.default(this);
        let data = $this.data(DATA_KEY);
        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY, data);
        }
        if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  }
  jquery2.default(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function(event) {
    event.preventDefault();
    Tab._jQueryInterface.call(jquery2.default(this), "show");
  });
  jquery2.default.fn[NAME] = Tab._jQueryInterface;
  jquery2.default.fn[NAME].Constructor = Tab;
  jquery2.default.fn[NAME].noConflict = () => {
    jquery2.default.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tab._jQueryInterface;
  };

  // node_modules/lodash-es/_freeGlobal.js
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  var freeGlobal_default = freeGlobal;

  // node_modules/lodash-es/_root.js
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal_default || freeSelf || Function("return this")();
  var root_default = root;

  // node_modules/lodash-es/_Symbol.js
  var Symbol2 = root_default.Symbol;
  var Symbol_default = Symbol2;

  // node_modules/lodash-es/_getRawTag.js
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  var getRawTag_default = getRawTag;

  // node_modules/lodash-es/_objectToString.js
  var objectProto2 = Object.prototype;
  var nativeObjectToString2 = objectProto2.toString;
  function objectToString(value) {
    return nativeObjectToString2.call(value);
  }
  var objectToString_default = objectToString;

  // node_modules/lodash-es/_baseGetTag.js
  var nullTag = "[object Null]";
  var undefinedTag = "[object Undefined]";
  var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
  }
  var baseGetTag_default = baseGetTag;

  // node_modules/lodash-es/isObjectLike.js
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var isObjectLike_default = isObjectLike;

  // node_modules/lodash-es/isSymbol.js
  var symbolTag = "[object Symbol]";
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
  }
  var isSymbol_default = isSymbol;

  // node_modules/lodash-es/_arrayMap.js
  function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }
  var arrayMap_default = arrayMap;

  // node_modules/lodash-es/isArray.js
  var isArray = Array.isArray;
  var isArray_default = isArray;

  // node_modules/lodash-es/_baseToString.js
  var INFINITY = 1 / 0;
  var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
  var symbolToString = symbolProto ? symbolProto.toString : void 0;
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    if (isArray_default(value)) {
      return arrayMap_default(value, baseToString) + "";
    }
    if (isSymbol_default(value)) {
      return symbolToString ? symbolToString.call(value) : "";
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  var baseToString_default = baseToString;

  // node_modules/lodash-es/isObject.js
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var isObject_default = isObject;

  // node_modules/lodash-es/identity.js
  function identity(value) {
    return value;
  }
  var identity_default = identity;

  // node_modules/lodash-es/isFunction.js
  var asyncTag = "[object AsyncFunction]";
  var funcTag = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var proxyTag = "[object Proxy]";
  function isFunction(value) {
    if (!isObject_default(value)) {
      return false;
    }
    var tag = baseGetTag_default(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  var isFunction_default = isFunction;

  // node_modules/lodash-es/_coreJsData.js
  var coreJsData = root_default["__core-js_shared__"];
  var coreJsData_default = coreJsData;

  // node_modules/lodash-es/_isMasked.js
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var isMasked_default = isMasked;

  // node_modules/lodash-es/_toSource.js
  var funcProto = Function.prototype;
  var funcToString = funcProto.toString;
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  var toSource_default = toSource;

  // node_modules/lodash-es/_baseIsNative.js
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto2 = Function.prototype;
  var objectProto3 = Object.prototype;
  var funcToString2 = funcProto2.toString;
  var hasOwnProperty2 = objectProto3.hasOwnProperty;
  var reIsNative = RegExp("^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function baseIsNative(value) {
    if (!isObject_default(value) || isMasked_default(value)) {
      return false;
    }
    var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource_default(value));
  }
  var baseIsNative_default = baseIsNative;

  // node_modules/lodash-es/_getValue.js
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  var getValue_default = getValue;

  // node_modules/lodash-es/_getNative.js
  function getNative(object, key) {
    var value = getValue_default(object, key);
    return baseIsNative_default(value) ? value : void 0;
  }
  var getNative_default = getNative;

  // node_modules/lodash-es/_WeakMap.js
  var WeakMap2 = getNative_default(root_default, "WeakMap");
  var WeakMap_default = WeakMap2;

  // node_modules/lodash-es/_defineProperty.js
  var defineProperty = function() {
    try {
      var func = getNative_default(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e) {
    }
  }();
  var defineProperty_default = defineProperty;

  // node_modules/lodash-es/_isIndex.js
  var MAX_SAFE_INTEGER = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  var isIndex_default = isIndex;

  // node_modules/lodash-es/_baseAssignValue.js
  function baseAssignValue(object, key, value) {
    if (key == "__proto__" && defineProperty_default) {
      defineProperty_default(object, key, {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      });
    } else {
      object[key] = value;
    }
  }
  var baseAssignValue_default = baseAssignValue;

  // node_modules/lodash-es/eq.js
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var eq_default = eq;

  // node_modules/lodash-es/isLength.js
  var MAX_SAFE_INTEGER2 = 9007199254740991;
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
  }
  var isLength_default = isLength;

  // node_modules/lodash-es/isArrayLike.js
  function isArrayLike(value) {
    return value != null && isLength_default(value.length) && !isFunction_default(value);
  }
  var isArrayLike_default = isArrayLike;

  // node_modules/lodash-es/_isPrototype.js
  var objectProto4 = Object.prototype;
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto4 = typeof Ctor == "function" && Ctor.prototype || objectProto4;
    return value === proto4;
  }
  var isPrototype_default = isPrototype;

  // node_modules/lodash-es/_baseTimes.js
  function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  var baseTimes_default = baseTimes;

  // node_modules/lodash-es/_baseIsArguments.js
  var argsTag = "[object Arguments]";
  function baseIsArguments(value) {
    return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
  }
  var baseIsArguments_default = baseIsArguments;

  // node_modules/lodash-es/isArguments.js
  var objectProto5 = Object.prototype;
  var hasOwnProperty3 = objectProto5.hasOwnProperty;
  var propertyIsEnumerable = objectProto5.propertyIsEnumerable;
  var isArguments = baseIsArguments_default(function() {
    return arguments;
  }()) ? baseIsArguments_default : function(value) {
    return isObjectLike_default(value) && hasOwnProperty3.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArguments_default = isArguments;

  // node_modules/lodash-es/stubFalse.js
  function stubFalse() {
    return false;
  }
  var stubFalse_default = stubFalse;

  // node_modules/lodash-es/_arrayLikeKeys.js
  const isBuffer = __toModule(require_isBuffer());

  // node_modules/lodash-es/_baseIsTypedArray.js
  var argsTag2 = "[object Arguments]";
  var arrayTag = "[object Array]";
  var boolTag = "[object Boolean]";
  var dateTag = "[object Date]";
  var errorTag = "[object Error]";
  var funcTag2 = "[object Function]";
  var mapTag = "[object Map]";
  var numberTag = "[object Number]";
  var objectTag = "[object Object]";
  var regexpTag = "[object RegExp]";
  var setTag = "[object Set]";
  var stringTag = "[object String]";
  var weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]";
  var dataViewTag = "[object DataView]";
  var float32Tag = "[object Float32Array]";
  var float64Tag = "[object Float64Array]";
  var int8Tag = "[object Int8Array]";
  var int16Tag = "[object Int16Array]";
  var int32Tag = "[object Int32Array]";
  var uint8Tag = "[object Uint8Array]";
  var uint8ClampedTag = "[object Uint8ClampedArray]";
  var uint16Tag = "[object Uint16Array]";
  var uint32Tag = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  function baseIsTypedArray(value) {
    return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
  }
  var baseIsTypedArray_default = baseIsTypedArray;

  // node_modules/lodash-es/_baseUnary.js
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  var baseUnary_default = baseUnary;

  // node_modules/lodash-es/isTypedArray.js
  const nodeUtil = __toModule(require_nodeUtil());
  var nodeIsTypedArray = nodeUtil.default && nodeUtil.default.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
  var isTypedArray_default = isTypedArray;

  // node_modules/lodash-es/_arrayLikeKeys.js
  var objectProto6 = Object.prototype;
  var hasOwnProperty4 = objectProto6.hasOwnProperty;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer.default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty4.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex_default(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  var arrayLikeKeys_default = arrayLikeKeys;

  // node_modules/lodash-es/_overArg.js
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  var overArg_default = overArg;

  // node_modules/lodash-es/_nativeKeys.js
  var nativeKeys = overArg_default(Object.keys, Object);
  var nativeKeys_default = nativeKeys;

  // node_modules/lodash-es/_baseKeys.js
  var objectProto7 = Object.prototype;
  var hasOwnProperty5 = objectProto7.hasOwnProperty;
  function baseKeys(object) {
    if (!isPrototype_default(object)) {
      return nativeKeys_default(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty5.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  var baseKeys_default = baseKeys;

  // node_modules/lodash-es/keys.js
  function keys(object) {
    return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
  }
  var keys_default = keys;

  // node_modules/lodash-es/_isKey.js
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
  var reIsPlainProp = /^\w*$/;
  function isKey(value, object) {
    if (isArray_default(value)) {
      return false;
    }
    var type = typeof value;
    if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }
  var isKey_default = isKey;

  // node_modules/lodash-es/_nativeCreate.js
  var nativeCreate = getNative_default(Object, "create");
  var nativeCreate_default = nativeCreate;

  // node_modules/lodash-es/_hashClear.js
  function hashClear() {
    this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
    this.size = 0;
  }
  var hashClear_default = hashClear;

  // node_modules/lodash-es/_hashDelete.js
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  var hashDelete_default = hashDelete;

  // node_modules/lodash-es/_hashGet.js
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var objectProto8 = Object.prototype;
  var hasOwnProperty6 = objectProto8.hasOwnProperty;
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate_default) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty6.call(data, key) ? data[key] : void 0;
  }
  var hashGet_default = hashGet;

  // node_modules/lodash-es/_hashHas.js
  var objectProto9 = Object.prototype;
  var hasOwnProperty7 = objectProto9.hasOwnProperty;
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty7.call(data, key);
  }
  var hashHas_default = hashHas;

  // node_modules/lodash-es/_hashSet.js
  var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
    return this;
  }
  var hashSet_default = hashSet;

  // node_modules/lodash-es/_Hash.js
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  Hash.prototype.clear = hashClear_default;
  Hash.prototype["delete"] = hashDelete_default;
  Hash.prototype.get = hashGet_default;
  Hash.prototype.has = hashHas_default;
  Hash.prototype.set = hashSet_default;
  var Hash_default = Hash;

  // node_modules/lodash-es/_listCacheClear.js
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  var listCacheClear_default = listCacheClear;

  // node_modules/lodash-es/_assocIndexOf.js
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq_default(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  var assocIndexOf_default = assocIndexOf;

  // node_modules/lodash-es/_listCacheDelete.js
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  var listCacheDelete_default = listCacheDelete;

  // node_modules/lodash-es/_listCacheGet.js
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  var listCacheGet_default = listCacheGet;

  // node_modules/lodash-es/_listCacheHas.js
  function listCacheHas(key) {
    return assocIndexOf_default(this.__data__, key) > -1;
  }
  var listCacheHas_default = listCacheHas;

  // node_modules/lodash-es/_listCacheSet.js
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  var listCacheSet_default = listCacheSet;

  // node_modules/lodash-es/_ListCache.js
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache.prototype.clear = listCacheClear_default;
  ListCache.prototype["delete"] = listCacheDelete_default;
  ListCache.prototype.get = listCacheGet_default;
  ListCache.prototype.has = listCacheHas_default;
  ListCache.prototype.set = listCacheSet_default;
  var ListCache_default = ListCache;

  // node_modules/lodash-es/_Map.js
  var Map2 = getNative_default(root_default, "Map");
  var Map_default = Map2;

  // node_modules/lodash-es/_mapCacheClear.js
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      hash: new Hash_default(),
      map: new (Map_default || ListCache_default)(),
      string: new Hash_default()
    };
  }
  var mapCacheClear_default = mapCacheClear;

  // node_modules/lodash-es/_isKeyable.js
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  var isKeyable_default = isKeyable;

  // node_modules/lodash-es/_getMapData.js
  function getMapData(map4, key) {
    var data = map4.__data__;
    return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  var getMapData_default = getMapData;

  // node_modules/lodash-es/_mapCacheDelete.js
  function mapCacheDelete(key) {
    var result = getMapData_default(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  var mapCacheDelete_default = mapCacheDelete;

  // node_modules/lodash-es/_mapCacheGet.js
  function mapCacheGet(key) {
    return getMapData_default(this, key).get(key);
  }
  var mapCacheGet_default = mapCacheGet;

  // node_modules/lodash-es/_mapCacheHas.js
  function mapCacheHas(key) {
    return getMapData_default(this, key).has(key);
  }
  var mapCacheHas_default = mapCacheHas;

  // node_modules/lodash-es/_mapCacheSet.js
  function mapCacheSet(key, value) {
    var data = getMapData_default(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  var mapCacheSet_default = mapCacheSet;

  // node_modules/lodash-es/_MapCache.js
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache.prototype.clear = mapCacheClear_default;
  MapCache.prototype["delete"] = mapCacheDelete_default;
  MapCache.prototype.get = mapCacheGet_default;
  MapCache.prototype.has = mapCacheHas_default;
  MapCache.prototype.set = mapCacheSet_default;
  var MapCache_default = MapCache;

  // node_modules/lodash-es/memoize.js
  var FUNC_ERROR_TEXT = "Expected a function";
  function memoize(func, resolver) {
    if (typeof func != "function" || resolver != null && typeof resolver != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache_default)();
    return memoized;
  }
  memoize.Cache = MapCache_default;
  var memoize_default = memoize;

  // node_modules/lodash-es/_memoizeCapped.js
  var MAX_MEMOIZE_SIZE = 500;
  function memoizeCapped(func) {
    var result = memoize_default(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });
    var cache = result.cache;
    return result;
  }
  var memoizeCapped_default = memoizeCapped;

  // node_modules/lodash-es/_stringToPath.js
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = memoizeCapped_default(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46) {
      result.push("");
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
    });
    return result;
  });
  var stringToPath_default = stringToPath;

  // node_modules/lodash-es/toString.js
  function toString(value) {
    return value == null ? "" : baseToString_default(value);
  }
  var toString_default = toString;

  // node_modules/lodash-es/_castPath.js
  function castPath(value, object) {
    if (isArray_default(value)) {
      return value;
    }
    return isKey_default(value, object) ? [value] : stringToPath_default(toString_default(value));
  }
  var castPath_default = castPath;

  // node_modules/lodash-es/_toKey.js
  var INFINITY2 = 1 / 0;
  function toKey(value) {
    if (typeof value == "string" || isSymbol_default(value)) {
      return value;
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY2 ? "-0" : result;
  }
  var toKey_default = toKey;

  // node_modules/lodash-es/_baseGet.js
  function baseGet(object, path) {
    path = castPath_default(path, object);
    var index = 0, length = path.length;
    while (object != null && index < length) {
      object = object[toKey_default(path[index++])];
    }
    return index && index == length ? object : void 0;
  }
  var baseGet_default = baseGet;

  // node_modules/lodash-es/get.js
  function get(object, path, defaultValue) {
    var result = object == null ? void 0 : baseGet_default(object, path);
    return result === void 0 ? defaultValue : result;
  }
  var get_default = get;

  // node_modules/lodash-es/_arrayPush.js
  function arrayPush(array, values) {
    var index = -1, length = values.length, offset7 = array.length;
    while (++index < length) {
      array[offset7 + index] = values[index];
    }
    return array;
  }
  var arrayPush_default = arrayPush;

  // node_modules/lodash-es/_stackClear.js
  function stackClear() {
    this.__data__ = new ListCache_default();
    this.size = 0;
  }
  var stackClear_default = stackClear;

  // node_modules/lodash-es/_stackDelete.js
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  var stackDelete_default = stackDelete;

  // node_modules/lodash-es/_stackGet.js
  function stackGet(key) {
    return this.__data__.get(key);
  }
  var stackGet_default = stackGet;

  // node_modules/lodash-es/_stackHas.js
  function stackHas(key) {
    return this.__data__.has(key);
  }
  var stackHas_default = stackHas;

  // node_modules/lodash-es/_stackSet.js
  var LARGE_ARRAY_SIZE = 200;
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache_default) {
      var pairs = data.__data__;
      if (!Map_default || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache_default(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  var stackSet_default = stackSet;

  // node_modules/lodash-es/_Stack.js
  function Stack(entries) {
    var data = this.__data__ = new ListCache_default(entries);
    this.size = data.size;
  }
  Stack.prototype.clear = stackClear_default;
  Stack.prototype["delete"] = stackDelete_default;
  Stack.prototype.get = stackGet_default;
  Stack.prototype.has = stackHas_default;
  Stack.prototype.set = stackSet_default;
  var Stack_default = Stack;

  // node_modules/lodash-es/_arrayFilter.js
  function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  var arrayFilter_default = arrayFilter;

  // node_modules/lodash-es/stubArray.js
  function stubArray() {
    return [];
  }
  var stubArray_default = stubArray;

  // node_modules/lodash-es/_getSymbols.js
  var objectProto10 = Object.prototype;
  var propertyIsEnumerable2 = objectProto10.propertyIsEnumerable;
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbols = !nativeGetSymbols ? stubArray_default : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter_default(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable2.call(object, symbol);
    });
  };
  var getSymbols_default = getSymbols;

  // node_modules/lodash-es/_baseGetAllKeys.js
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray_default(object) ? result : arrayPush_default(result, symbolsFunc(object));
  }
  var baseGetAllKeys_default = baseGetAllKeys;

  // node_modules/lodash-es/_getAllKeys.js
  function getAllKeys(object) {
    return baseGetAllKeys_default(object, keys_default, getSymbols_default);
  }
  var getAllKeys_default = getAllKeys;

  // node_modules/lodash-es/_DataView.js
  var DataView = getNative_default(root_default, "DataView");
  var DataView_default = DataView;

  // node_modules/lodash-es/_Promise.js
  var Promise2 = getNative_default(root_default, "Promise");
  var Promise_default = Promise2;

  // node_modules/lodash-es/_Set.js
  var Set2 = getNative_default(root_default, "Set");
  var Set_default = Set2;

  // node_modules/lodash-es/_getTag.js
  var mapTag2 = "[object Map]";
  var objectTag2 = "[object Object]";
  var promiseTag = "[object Promise]";
  var setTag2 = "[object Set]";
  var weakMapTag2 = "[object WeakMap]";
  var dataViewTag2 = "[object DataView]";
  var dataViewCtorString = toSource_default(DataView_default);
  var mapCtorString = toSource_default(Map_default);
  var promiseCtorString = toSource_default(Promise_default);
  var setCtorString = toSource_default(Set_default);
  var weakMapCtorString = toSource_default(WeakMap_default);
  var getTag = baseGetTag_default;
  if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag2 || Map_default && getTag(new Map_default()) != mapTag2 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag2 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) {
    getTag = function(value) {
      var result = baseGetTag_default(value), Ctor = result == objectTag2 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag2;
          case mapCtorString:
            return mapTag2;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag2;
          case weakMapCtorString:
            return weakMapTag2;
        }
      }
      return result;
    };
  }
  var getTag_default = getTag;

  // node_modules/lodash-es/_Uint8Array.js
  var Uint8Array2 = root_default.Uint8Array;
  var Uint8Array_default = Uint8Array2;

  // node_modules/lodash-es/_setCacheAdd.js
  var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED3);
    return this;
  }
  var setCacheAdd_default = setCacheAdd;

  // node_modules/lodash-es/_setCacheHas.js
  function setCacheHas(value) {
    return this.__data__.has(value);
  }
  var setCacheHas_default = setCacheHas;

  // node_modules/lodash-es/_SetCache.js
  function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache_default();
    while (++index < length) {
      this.add(values[index]);
    }
  }
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default;
  SetCache.prototype.has = setCacheHas_default;
  var SetCache_default = SetCache;

  // node_modules/lodash-es/_arraySome.js
  function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }
  var arraySome_default = arraySome;

  // node_modules/lodash-es/_cacheHas.js
  function cacheHas(cache, key) {
    return cache.has(key);
  }
  var cacheHas_default = cacheHas;

  // node_modules/lodash-es/_equalArrays.js
  var COMPARE_PARTIAL_FLAG = 1;
  var COMPARE_UNORDERED_FLAG = 2;
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    var stacked = stack.get(array);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache_default() : void 0;
    stack.set(array, other);
    stack.set(other, array);
    while (++index < arrLength) {
      var arrValue = array[index], othValue = other[index];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== void 0) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      if (seen) {
        if (!arraySome_default(other, function(othValue2, othIndex) {
          if (!cacheHas_default(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
  }
  var equalArrays_default = equalArrays;

  // node_modules/lodash-es/_mapToArray.js
  function mapToArray(map4) {
    var index = -1, result = Array(map4.size);
    map4.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  var mapToArray_default = mapToArray;

  // node_modules/lodash-es/_setToArray.js
  function setToArray(set4) {
    var index = -1, result = Array(set4.size);
    set4.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  var setToArray_default = setToArray;

  // node_modules/lodash-es/_equalByTag.js
  var COMPARE_PARTIAL_FLAG2 = 1;
  var COMPARE_UNORDERED_FLAG2 = 2;
  var boolTag2 = "[object Boolean]";
  var dateTag2 = "[object Date]";
  var errorTag2 = "[object Error]";
  var mapTag3 = "[object Map]";
  var numberTag2 = "[object Number]";
  var regexpTag2 = "[object RegExp]";
  var setTag3 = "[object Set]";
  var stringTag2 = "[object String]";
  var symbolTag2 = "[object Symbol]";
  var arrayBufferTag2 = "[object ArrayBuffer]";
  var dataViewTag3 = "[object DataView]";
  var symbolProto2 = Symbol_default ? Symbol_default.prototype : void 0;
  var symbolValueOf = symbolProto2 ? symbolProto2.valueOf : void 0;
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag3:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;
      case arrayBufferTag2:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array_default(object), new Uint8Array_default(other))) {
          return false;
        }
        return true;
      case boolTag2:
      case dateTag2:
      case numberTag2:
        return eq_default(+object, +other);
      case errorTag2:
        return object.name == other.name && object.message == other.message;
      case regexpTag2:
      case stringTag2:
        return object == other + "";
      case mapTag3:
        var convert = mapToArray_default;
      case setTag3:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG2;
        convert || (convert = setToArray_default);
        if (object.size != other.size && !isPartial) {
          return false;
        }
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG2;
        stack.set(object, other);
        var result = equalArrays_default(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack["delete"](object);
        return result;
      case symbolTag2:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }
  var equalByTag_default = equalByTag;

  // node_modules/lodash-es/_equalObjects.js
  var COMPARE_PARTIAL_FLAG3 = 1;
  var objectProto11 = Object.prototype;
  var hasOwnProperty8 = objectProto11.hasOwnProperty;
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG3, objProps = getAllKeys_default(object), objLength = objProps.length, othProps = getAllKeys_default(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty8.call(other, key))) {
        return false;
      }
    }
    var stacked = stack.get(object);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key], othValue = other[key];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }
      if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor, othCtor = other.constructor;
      if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
  }
  var equalObjects_default = equalObjects;

  // node_modules/lodash-es/_baseIsEqualDeep.js
  const isBuffer3 = __toModule(require_isBuffer());
  var COMPARE_PARTIAL_FLAG4 = 1;
  var argsTag3 = "[object Arguments]";
  var arrayTag2 = "[object Array]";
  var objectTag3 = "[object Object]";
  var objectProto12 = Object.prototype;
  var hasOwnProperty9 = objectProto12.hasOwnProperty;
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray_default(object), othIsArr = isArray_default(other), objTag = objIsArr ? arrayTag2 : getTag_default(object), othTag = othIsArr ? arrayTag2 : getTag_default(other);
    objTag = objTag == argsTag3 ? objectTag3 : objTag;
    othTag = othTag == argsTag3 ? objectTag3 : othTag;
    var objIsObj = objTag == objectTag3, othIsObj = othTag == objectTag3, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer3.default(object)) {
      if (!isBuffer3.default(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack_default());
      return objIsArr || isTypedArray_default(object) ? equalArrays_default(object, other, bitmask, customizer, equalFunc, stack) : equalByTag_default(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG4)) {
      var objIsWrapped = objIsObj && hasOwnProperty9.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty9.call(other, "__wrapped__");
      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack_default());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack_default());
    return equalObjects_default(object, other, bitmask, customizer, equalFunc, stack);
  }
  var baseIsEqualDeep_default = baseIsEqualDeep;

  // node_modules/lodash-es/_baseIsEqual.js
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObjectLike_default(value) && !isObjectLike_default(other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep_default(value, other, bitmask, customizer, baseIsEqual, stack);
  }
  var baseIsEqual_default = baseIsEqual;

  // node_modules/lodash-es/_baseIsMatch.js
  var COMPARE_PARTIAL_FLAG5 = 1;
  var COMPARE_UNORDERED_FLAG3 = 2;
  function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length, length = index, noCustomizer = !customizer;
    if (object == null) {
      return !length;
    }
    object = Object(object);
    while (index--) {
      var data = matchData[index];
      if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
        return false;
      }
    }
    while (++index < length) {
      data = matchData[index];
      var key = data[0], objValue = object[key], srcValue = data[1];
      if (noCustomizer && data[2]) {
        if (objValue === void 0 && !(key in object)) {
          return false;
        }
      } else {
        var stack = new Stack_default();
        if (customizer) {
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }
        if (!(result === void 0 ? baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG5 | COMPARE_UNORDERED_FLAG3, customizer, stack) : result)) {
          return false;
        }
      }
    }
    return true;
  }
  var baseIsMatch_default = baseIsMatch;

  // node_modules/lodash-es/_isStrictComparable.js
  function isStrictComparable(value) {
    return value === value && !isObject_default(value);
  }
  var isStrictComparable_default = isStrictComparable;

  // node_modules/lodash-es/_getMatchData.js
  function getMatchData(object) {
    var result = keys_default(object), length = result.length;
    while (length--) {
      var key = result[length], value = object[key];
      result[length] = [key, value, isStrictComparable_default(value)];
    }
    return result;
  }
  var getMatchData_default = getMatchData;

  // node_modules/lodash-es/_matchesStrictComparable.js
  function matchesStrictComparable(key, srcValue) {
    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
    };
  }
  var matchesStrictComparable_default = matchesStrictComparable;

  // node_modules/lodash-es/_baseMatches.js
  function baseMatches(source) {
    var matchData = getMatchData_default(source);
    if (matchData.length == 1 && matchData[0][2]) {
      return matchesStrictComparable_default(matchData[0][0], matchData[0][1]);
    }
    return function(object) {
      return object === source || baseIsMatch_default(object, source, matchData);
    };
  }
  var baseMatches_default = baseMatches;

  // node_modules/lodash-es/_baseHasIn.js
  function baseHasIn(object, key) {
    return object != null && key in Object(object);
  }
  var baseHasIn_default = baseHasIn;

  // node_modules/lodash-es/_hasPath.js
  function hasPath(object, path, hasFunc) {
    path = castPath_default(path, object);
    var index = -1, length = path.length, result = false;
    while (++index < length) {
      var key = toKey_default(path[index]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result || ++index != length) {
      return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength_default(length) && isIndex_default(key, length) && (isArray_default(object) || isArguments_default(object));
  }
  var hasPath_default = hasPath;

  // node_modules/lodash-es/hasIn.js
  function hasIn(object, path) {
    return object != null && hasPath_default(object, path, baseHasIn_default);
  }
  var hasIn_default = hasIn;

  // node_modules/lodash-es/_baseMatchesProperty.js
  var COMPARE_PARTIAL_FLAG6 = 1;
  var COMPARE_UNORDERED_FLAG4 = 2;
  function baseMatchesProperty(path, srcValue) {
    if (isKey_default(path) && isStrictComparable_default(srcValue)) {
      return matchesStrictComparable_default(toKey_default(path), srcValue);
    }
    return function(object) {
      var objValue = get_default(object, path);
      return objValue === void 0 && objValue === srcValue ? hasIn_default(object, path) : baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG6 | COMPARE_UNORDERED_FLAG4);
    };
  }
  var baseMatchesProperty_default = baseMatchesProperty;

  // node_modules/lodash-es/_baseProperty.js
  function baseProperty(key) {
    return function(object) {
      return object == null ? void 0 : object[key];
    };
  }
  var baseProperty_default = baseProperty;

  // node_modules/lodash-es/_basePropertyDeep.js
  function basePropertyDeep(path) {
    return function(object) {
      return baseGet_default(object, path);
    };
  }
  var basePropertyDeep_default = basePropertyDeep;

  // node_modules/lodash-es/property.js
  function property(path) {
    return isKey_default(path) ? baseProperty_default(toKey_default(path)) : basePropertyDeep_default(path);
  }
  var property_default = property;

  // node_modules/lodash-es/_baseIteratee.js
  function baseIteratee(value) {
    if (typeof value == "function") {
      return value;
    }
    if (value == null) {
      return identity_default;
    }
    if (typeof value == "object") {
      return isArray_default(value) ? baseMatchesProperty_default(value[0], value[1]) : baseMatches_default(value);
    }
    return property_default(value);
  }
  var baseIteratee_default = baseIteratee;

  // node_modules/lodash-es/_arrayAggregator.js
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }
  var arrayAggregator_default = arrayAggregator;

  // node_modules/lodash-es/_createBaseFor.js
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }
  var createBaseFor_default = createBaseFor;

  // node_modules/lodash-es/_baseFor.js
  var baseFor = createBaseFor_default();
  var baseFor_default = baseFor;

  // node_modules/lodash-es/_baseForOwn.js
  function baseForOwn(object, iteratee) {
    return object && baseFor_default(object, iteratee, keys_default);
  }
  var baseForOwn_default = baseForOwn;

  // node_modules/lodash-es/_createBaseEach.js
  function createBaseEach(eachFunc, fromRight) {
    return function(collection, iteratee) {
      if (collection == null) {
        return collection;
      }
      if (!isArrayLike_default(collection)) {
        return eachFunc(collection, iteratee);
      }
      var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
      while (fromRight ? index-- : ++index < length) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }
  var createBaseEach_default = createBaseEach;

  // node_modules/lodash-es/_baseEach.js
  var baseEach = createBaseEach_default(baseForOwn_default);
  var baseEach_default = baseEach;

  // node_modules/lodash-es/_baseAggregator.js
  function baseAggregator(collection, setter, iteratee, accumulator) {
    baseEach_default(collection, function(value, key, collection2) {
      setter(accumulator, value, iteratee(value), collection2);
    });
    return accumulator;
  }
  var baseAggregator_default = baseAggregator;

  // node_modules/lodash-es/_createAggregator.js
  function createAggregator(setter, initializer) {
    return function(collection, iteratee) {
      var func = isArray_default(collection) ? arrayAggregator_default : baseAggregator_default, accumulator = initializer ? initializer() : {};
      return func(collection, setter, baseIteratee_default(iteratee, 2), accumulator);
    };
  }
  var createAggregator_default = createAggregator;

  // node_modules/lodash-es/groupBy.js
  var objectProto13 = Object.prototype;
  var hasOwnProperty10 = objectProto13.hasOwnProperty;
  var groupBy = createAggregator_default(function(result, value, key) {
    if (hasOwnProperty10.call(result, key)) {
      result[key].push(value);
    } else {
      baseAssignValue_default(result, key, [value]);
    }
  });
  var groupBy_default = groupBy;

  // node_modules/lodash-es/isEmpty.js
  const isBuffer5 = __toModule(require_isBuffer());
  var mapTag4 = "[object Map]";
  var setTag4 = "[object Set]";
  var objectProto14 = Object.prototype;
  var hasOwnProperty11 = objectProto14.hasOwnProperty;
  function isEmpty(value) {
    if (value == null) {
      return true;
    }
    if (isArrayLike_default(value) && (isArray_default(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer5.default(value) || isTypedArray_default(value) || isArguments_default(value))) {
      return !value.length;
    }
    var tag = getTag_default(value);
    if (tag == mapTag4 || tag == setTag4) {
      return !value.size;
    }
    if (isPrototype_default(value)) {
      return !baseKeys_default(value).length;
    }
    for (var key in value) {
      if (hasOwnProperty11.call(value, key)) {
        return false;
      }
    }
    return true;
  }
  var isEmpty_default = isEmpty;

  // node_modules/lodash-es/isNil.js
  function isNil(value) {
    return value == null;
  }
  var isNil_default = isNil;

  // node_modules/lit-html/lib/directive.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const directives = new WeakMap();
  const directive = (f) => (...args) => {
    const d = f(...args);
    directives.set(d, true);
    return d;
  };
  const isDirective = (o) => {
    return typeof o === "function" && directives.has(o);
  };

  // node_modules/lit-html/lib/dom.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const isCEPolyfill = typeof window !== "undefined" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0;
  const removeNodes = (container, start, end = null) => {
    while (start !== end) {
      const n = start.nextSibling;
      container.removeChild(start);
      start = n;
    }
  };

  // node_modules/lit-html/lib/part.js
  /**
   * @license
   * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const noChange = {};
  const nothing = {};

  // node_modules/lit-html/lib/template.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
  const nodeMarker = `<!--${marker}-->`;
  const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
  const boundAttributeSuffix = "$lit$";
  class Template {
    constructor(result, element) {
      this.parts = [];
      this.element = element;
      const nodesToRemove = [];
      const stack = [];
      const walker = document.createTreeWalker(element.content, 133, null, false);
      let lastPartIndex = 0;
      let index = -1;
      let partIndex = 0;
      const {strings, values: {length}} = result;
      while (partIndex < length) {
        const node = walker.nextNode();
        if (node === null) {
          walker.currentNode = stack.pop();
          continue;
        }
        index++;
        if (node.nodeType === 1) {
          if (node.hasAttributes()) {
            const attributes = node.attributes;
            const {length: length2} = attributes;
            let count = 0;
            for (let i = 0; i < length2; i++) {
              if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                count++;
              }
            }
            while (count-- > 0) {
              const stringForPart = strings[partIndex];
              const name = lastAttributeNameRegex.exec(stringForPart)[2];
              const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
              const attributeValue = node.getAttribute(attributeLookupName);
              node.removeAttribute(attributeLookupName);
              const statics = attributeValue.split(markerRegex);
              this.parts.push({type: "attribute", index, name, strings: statics});
              partIndex += statics.length - 1;
            }
          }
          if (node.tagName === "TEMPLATE") {
            stack.push(node);
            walker.currentNode = node.content;
          }
        } else if (node.nodeType === 3) {
          const data = node.data;
          if (data.indexOf(marker) >= 0) {
            const parent = node.parentNode;
            const strings2 = data.split(markerRegex);
            const lastIndex = strings2.length - 1;
            for (let i = 0; i < lastIndex; i++) {
              let insert;
              let s = strings2[i];
              if (s === "") {
                insert = createMarker();
              } else {
                const match = lastAttributeNameRegex.exec(s);
                if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                  s = s.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                }
                insert = document.createTextNode(s);
              }
              parent.insertBefore(insert, node);
              this.parts.push({type: "node", index: ++index});
            }
            if (strings2[lastIndex] === "") {
              parent.insertBefore(createMarker(), node);
              nodesToRemove.push(node);
            } else {
              node.data = strings2[lastIndex];
            }
            partIndex += lastIndex;
          }
        } else if (node.nodeType === 8) {
          if (node.data === marker) {
            const parent = node.parentNode;
            if (node.previousSibling === null || index === lastPartIndex) {
              index++;
              parent.insertBefore(createMarker(), node);
            }
            lastPartIndex = index;
            this.parts.push({type: "node", index});
            if (node.nextSibling === null) {
              node.data = "";
            } else {
              nodesToRemove.push(node);
              index--;
            }
            partIndex++;
          } else {
            let i = -1;
            while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
              this.parts.push({type: "node", index: -1});
              partIndex++;
            }
          }
        }
      }
      for (const n of nodesToRemove) {
        n.parentNode.removeChild(n);
      }
    }
  }
  const endsWith = (str, suffix) => {
    const index = str.length - suffix.length;
    return index >= 0 && str.slice(index) === suffix;
  };
  const isTemplatePartActive = (part3) => part3.index !== -1;
  const createMarker = () => document.createComment("");
  const lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

  // node_modules/lit-html/lib/template-instance.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  class TemplateInstance {
    constructor(template6, processor, options) {
      this.__parts = [];
      this.template = template6;
      this.processor = processor;
      this.options = options;
    }
    update(values) {
      let i = 0;
      for (const part3 of this.__parts) {
        if (part3 !== void 0) {
          part3.setValue(values[i]);
        }
        i++;
      }
      for (const part3 of this.__parts) {
        if (part3 !== void 0) {
          part3.commit();
        }
      }
    }
    _clone() {
      const fragment = isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
      const stack = [];
      const parts5 = this.template.parts;
      const walker = document.createTreeWalker(fragment, 133, null, false);
      let partIndex = 0;
      let nodeIndex = 0;
      let part3;
      let node = walker.nextNode();
      while (partIndex < parts5.length) {
        part3 = parts5[partIndex];
        if (!isTemplatePartActive(part3)) {
          this.__parts.push(void 0);
          partIndex++;
          continue;
        }
        while (nodeIndex < part3.index) {
          nodeIndex++;
          if (node.nodeName === "TEMPLATE") {
            stack.push(node);
            walker.currentNode = node.content;
          }
          if ((node = walker.nextNode()) === null) {
            walker.currentNode = stack.pop();
            node = walker.nextNode();
          }
        }
        if (part3.type === "node") {
          const part4 = this.processor.handleTextExpression(this.options);
          part4.insertAfterNode(node.previousSibling);
          this.__parts.push(part4);
        } else {
          this.__parts.push(...this.processor.handleAttributeExpressions(node, part3.name, part3.strings, this.options));
        }
        partIndex++;
      }
      if (isCEPolyfill) {
        document.adoptNode(fragment);
        customElements.upgrade(fragment);
      }
      return fragment;
    }
  }

  // node_modules/lit-html/lib/template-result.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const commentMarker = ` ${marker} `;
  class TemplateResult {
    constructor(strings, values, type, processor) {
      this.strings = strings;
      this.values = values;
      this.type = type;
      this.processor = processor;
    }
    getHTML() {
      const l = this.strings.length - 1;
      let html2 = "";
      let isCommentBinding = false;
      for (let i = 0; i < l; i++) {
        const s = this.strings[i];
        const commentOpen = s.lastIndexOf("<!--");
        isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf("-->", commentOpen + 1) === -1;
        const attributeMatch = lastAttributeNameRegex.exec(s);
        if (attributeMatch === null) {
          html2 += s + (isCommentBinding ? commentMarker : nodeMarker);
        } else {
          html2 += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] + marker;
        }
      }
      html2 += this.strings[l];
      return html2;
    }
    getTemplateElement() {
      const template6 = document.createElement("template");
      template6.innerHTML = this.getHTML();
      return template6;
    }
  }

  // node_modules/lit-html/lib/parts.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const isPrimitive = (value) => {
    return value === null || !(typeof value === "object" || typeof value === "function");
  };
  const isIterable = (value) => {
    return Array.isArray(value) || !!(value && value[Symbol.iterator]);
  };
  class AttributeCommitter {
    constructor(element, name, strings) {
      this.dirty = true;
      this.element = element;
      this.name = name;
      this.strings = strings;
      this.parts = [];
      for (let i = 0; i < strings.length - 1; i++) {
        this.parts[i] = this._createPart();
      }
    }
    _createPart() {
      return new AttributePart(this);
    }
    _getValue() {
      const strings = this.strings;
      const l = strings.length - 1;
      let text = "";
      for (let i = 0; i < l; i++) {
        text += strings[i];
        const part3 = this.parts[i];
        if (part3 !== void 0) {
          const v = part3.value;
          if (isPrimitive(v) || !isIterable(v)) {
            text += typeof v === "string" ? v : String(v);
          } else {
            for (const t of v) {
              text += typeof t === "string" ? t : String(t);
            }
          }
        }
      }
      text += strings[l];
      return text;
    }
    commit() {
      if (this.dirty) {
        this.dirty = false;
        this.element.setAttribute(this.name, this._getValue());
      }
    }
  }
  class AttributePart {
    constructor(committer) {
      this.value = void 0;
      this.committer = committer;
    }
    setValue(value) {
      if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
        this.value = value;
        if (!isDirective(value)) {
          this.committer.dirty = true;
        }
      }
    }
    commit() {
      while (isDirective(this.value)) {
        const directive4 = this.value;
        this.value = noChange;
        directive4(this);
      }
      if (this.value === noChange) {
        return;
      }
      this.committer.commit();
    }
  }
  class NodePart {
    constructor(options) {
      this.value = void 0;
      this.__pendingValue = void 0;
      this.options = options;
    }
    appendInto(container) {
      this.startNode = container.appendChild(createMarker());
      this.endNode = container.appendChild(createMarker());
    }
    insertAfterNode(ref) {
      this.startNode = ref;
      this.endNode = ref.nextSibling;
    }
    appendIntoPart(part3) {
      part3.__insert(this.startNode = createMarker());
      part3.__insert(this.endNode = createMarker());
    }
    insertAfterPart(ref) {
      ref.__insert(this.startNode = createMarker());
      this.endNode = ref.endNode;
      ref.endNode = this.startNode;
    }
    setValue(value) {
      this.__pendingValue = value;
    }
    commit() {
      if (this.startNode.parentNode === null) {
        return;
      }
      while (isDirective(this.__pendingValue)) {
        const directive4 = this.__pendingValue;
        this.__pendingValue = noChange;
        directive4(this);
      }
      const value = this.__pendingValue;
      if (value === noChange) {
        return;
      }
      if (isPrimitive(value)) {
        if (value !== this.value) {
          this.__commitText(value);
        }
      } else if (value instanceof TemplateResult) {
        this.__commitTemplateResult(value);
      } else if (value instanceof Node) {
        this.__commitNode(value);
      } else if (isIterable(value)) {
        this.__commitIterable(value);
      } else if (value === nothing) {
        this.value = nothing;
        this.clear();
      } else {
        this.__commitText(value);
      }
    }
    __insert(node) {
      this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    __commitNode(value) {
      if (this.value === value) {
        return;
      }
      this.clear();
      this.__insert(value);
      this.value = value;
    }
    __commitText(value) {
      const node = this.startNode.nextSibling;
      value = value == null ? "" : value;
      const valueAsString = typeof value === "string" ? value : String(value);
      if (node === this.endNode.previousSibling && node.nodeType === 3) {
        node.data = valueAsString;
      } else {
        this.__commitNode(document.createTextNode(valueAsString));
      }
      this.value = value;
    }
    __commitTemplateResult(value) {
      const template6 = this.options.templateFactory(value);
      if (this.value instanceof TemplateInstance && this.value.template === template6) {
        this.value.update(value.values);
      } else {
        const instance = new TemplateInstance(template6, value.processor, this.options);
        const fragment = instance._clone();
        instance.update(value.values);
        this.__commitNode(fragment);
        this.value = instance;
      }
    }
    __commitIterable(value) {
      if (!Array.isArray(this.value)) {
        this.value = [];
        this.clear();
      }
      const itemParts = this.value;
      let partIndex = 0;
      let itemPart;
      for (const item of value) {
        itemPart = itemParts[partIndex];
        if (itemPart === void 0) {
          itemPart = new NodePart(this.options);
          itemParts.push(itemPart);
          if (partIndex === 0) {
            itemPart.appendIntoPart(this);
          } else {
            itemPart.insertAfterPart(itemParts[partIndex - 1]);
          }
        }
        itemPart.setValue(item);
        itemPart.commit();
        partIndex++;
      }
      if (partIndex < itemParts.length) {
        itemParts.length = partIndex;
        this.clear(itemPart && itemPart.endNode);
      }
    }
    clear(startNode = this.startNode) {
      removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
  }
  class BooleanAttributePart {
    constructor(element, name, strings) {
      this.value = void 0;
      this.__pendingValue = void 0;
      if (strings.length !== 2 || strings[0] !== "" || strings[1] !== "") {
        throw new Error("Boolean attributes can only contain a single expression");
      }
      this.element = element;
      this.name = name;
      this.strings = strings;
    }
    setValue(value) {
      this.__pendingValue = value;
    }
    commit() {
      while (isDirective(this.__pendingValue)) {
        const directive4 = this.__pendingValue;
        this.__pendingValue = noChange;
        directive4(this);
      }
      if (this.__pendingValue === noChange) {
        return;
      }
      const value = !!this.__pendingValue;
      if (this.value !== value) {
        if (value) {
          this.element.setAttribute(this.name, "");
        } else {
          this.element.removeAttribute(this.name);
        }
        this.value = value;
      }
      this.__pendingValue = noChange;
    }
  }
  class PropertyCommitter extends AttributeCommitter {
    constructor(element, name, strings) {
      super(element, name, strings);
      this.single = strings.length === 2 && strings[0] === "" && strings[1] === "";
    }
    _createPart() {
      return new PropertyPart(this);
    }
    _getValue() {
      if (this.single) {
        return this.parts[0].value;
      }
      return super._getValue();
    }
    commit() {
      if (this.dirty) {
        this.dirty = false;
        this.element[this.name] = this._getValue();
      }
    }
  }
  class PropertyPart extends AttributePart {
  }
  let eventOptionsSupported = false;
  (() => {
    try {
      const options = {
        get capture() {
          eventOptionsSupported = true;
          return false;
        }
      };
      window.addEventListener("test", options, options);
      window.removeEventListener("test", options, options);
    } catch (_e) {
    }
  })();
  class EventPart {
    constructor(element, eventName, eventContext) {
      this.value = void 0;
      this.__pendingValue = void 0;
      this.element = element;
      this.eventName = eventName;
      this.eventContext = eventContext;
      this.__boundHandleEvent = (e) => this.handleEvent(e);
    }
    setValue(value) {
      this.__pendingValue = value;
    }
    commit() {
      while (isDirective(this.__pendingValue)) {
        const directive4 = this.__pendingValue;
        this.__pendingValue = noChange;
        directive4(this);
      }
      if (this.__pendingValue === noChange) {
        return;
      }
      const newListener = this.__pendingValue;
      const oldListener = this.value;
      const shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
      const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
      if (shouldRemoveListener) {
        this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
      }
      if (shouldAddListener) {
        this.__options = getOptions(newListener);
        this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
      }
      this.value = newListener;
      this.__pendingValue = noChange;
    }
    handleEvent(event) {
      if (typeof this.value === "function") {
        this.value.call(this.eventContext || this.element, event);
      } else {
        this.value.handleEvent(event);
      }
    }
  }
  const getOptions = (o) => o && (eventOptionsSupported ? {capture: o.capture, passive: o.passive, once: o.once} : o.capture);

  // node_modules/lit-html/lib/default-template-processor.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  class DefaultTemplateProcessor {
    handleAttributeExpressions(element, name, strings, options) {
      const prefix = name[0];
      if (prefix === ".") {
        const committer2 = new PropertyCommitter(element, name.slice(1), strings);
        return committer2.parts;
      }
      if (prefix === "@") {
        return [new EventPart(element, name.slice(1), options.eventContext)];
      }
      if (prefix === "?") {
        return [new BooleanAttributePart(element, name.slice(1), strings)];
      }
      const committer = new AttributeCommitter(element, name, strings);
      return committer.parts;
    }
    handleTextExpression(options) {
      return new NodePart(options);
    }
  }
  const defaultTemplateProcessor = new DefaultTemplateProcessor();

  // node_modules/lit-html/lib/template-factory.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  function templateFactory(result) {
    let templateCache = templateCaches.get(result.type);
    if (templateCache === void 0) {
      templateCache = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      };
      templateCaches.set(result.type, templateCache);
    }
    let template6 = templateCache.stringsArray.get(result.strings);
    if (template6 !== void 0) {
      return template6;
    }
    const key = result.strings.join(marker);
    template6 = templateCache.keyString.get(key);
    if (template6 === void 0) {
      template6 = new Template(result, result.getTemplateElement());
      templateCache.keyString.set(key, template6);
    }
    templateCache.stringsArray.set(result.strings, template6);
    return template6;
  }
  const templateCaches = new Map();

  // node_modules/lit-html/lib/render.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const parts3 = new WeakMap();
  const render = (result, container, options) => {
    let part3 = parts3.get(container);
    if (part3 === void 0) {
      removeNodes(container, container.firstChild);
      parts3.set(container, part3 = new NodePart(Object.assign({templateFactory}, options)));
      part3.appendInto(container);
    }
    part3.setValue(result);
    part3.commit();
  };

  // node_modules/lit-html/lit-html.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  if (typeof window !== "undefined") {
    (window["litHtmlVersions"] || (window["litHtmlVersions"] = [])).push("1.2.1");
  }
  const html = (strings, ...values) => new TemplateResult(strings, values, "html", defaultTemplateProcessor);

  // app/ui/counterEmbedded.js
  class CounterEmbedded {
    constructor(highlight, iconClasses, subtitle) {
      this.highlight = highlight;
      this.iconClasses = iconClasses;
      this.subtitle = subtitle;
    }
    getTemplate() {
      return html`<div @click="${this.getClickHandler()}" class="counter-embedded">
      <div class="${this.getHighlightContainerClasses()}">
        <span>${this.highlight}</span>
        <span>${this.getHighlightTextTemplate()}</span>
      </div>
      ${this.getSubtitleTemplate()}
    </div>`;
    }
    getClickHandler() {
      return () => {
      };
    }
    getHighlightContainerClasses() {
      return "h3";
    }
    getHighlightTextTemplate() {
      if (isEmpty_default(this.iconClasses)) {
        return "";
      }
      return html`<i class="${this.iconClasses}"></i>`;
    }
    getSubtitleTemplate() {
      if (isEmpty_default(this.subtitle)) {
        return "";
      }
      return html`<div>${this.subtitle}</div>`;
    }
    render() {
      if (this.highlight === void 0) {
        return "";
      }
      return this.getTemplate();
    }
  }

  // node_modules/lit-html/directives/if-defined.js
  /**
   * @license
   * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const previousValues = new WeakMap();
  const ifDefined = directive((value) => (part3) => {
    const previousValue = previousValues.get(part3);
    if (value === void 0 && part3 instanceof AttributePart) {
      if (previousValue !== void 0 || !previousValues.has(part3)) {
        const name = part3.committer.name;
        part3.committer.element.removeAttribute(name);
      }
    } else if (value !== previousValue) {
      part3.setValue(value);
    }
    previousValues.set(part3, value);
  });

  // app/ui/partials/panel.js
  class Panel {
    constructor(body, options = {}) {
      this.body = body;
      this.footer = null;
      this.options = Object.assign({
        extraBodyClasses: "",
        extraCardClasses: ""
      }, options);
    }
    getTemplate() {
      return html`
    <div class="card ${this.getCardClasses()}" data-external-id=${ifDefined(this.options.externalID)} data-report-js-name=${ifDefined(this.options.reportJsName)} data-report-id=${ifDefined(this.options.reportID)}>
      ${this.getHeaderTemplate()}
      <div class="card-body ${this.getBodyClasses()}" aria-expanded="${ifDefined(this.expanded)}">
        ${this.getBody()}
      </div>
      ${this.getFooterTemplate()}
    </div>
    `;
    }
    getBody() {
      return this.body;
    }
    getFooterTemplate() {
      if (this.footer) {
        return html`<div class="card-footer">${this.footer}</div>`;
      }
      return "";
    }
    getBodyClasses() {
      return "panel-body " + this.options.extraBodyClasses;
    }
    getCardClasses() {
      return "report report-default " + this.options.extraCardClasses;
    }
    getHeaderClasses() {
      return "card-header pb-0 d-flex spacer-m";
    }
    getHeaderTemplate() {
      if (isNil_default(this.options.title) && isEmpty_default(this.header)) {
        return "";
      }
      const contents = this.header ? this.header : html`<h3 class="mr-1">${this.getTitle()}</h3>`;
      return html`<div class="${this.getHeaderClasses()}">${contents}</div>`;
    }
    getTitle() {
      return this.options.title;
    }
  }

  // app/ui/partials/tableLit.js
  const moment = __toModule(require_moment());

  // node_modules/lit-html/directives/class-map.js
  /**
   * @license
   * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  class ClassList {
    constructor(element) {
      this.classes = new Set();
      this.changed = false;
      this.element = element;
      const classList = (element.getAttribute("class") || "").split(/\s+/);
      for (const cls of classList) {
        this.classes.add(cls);
      }
    }
    add(cls) {
      this.classes.add(cls);
      this.changed = true;
    }
    remove(cls) {
      this.classes.delete(cls);
      this.changed = true;
    }
    commit() {
      if (this.changed) {
        let classString = "";
        this.classes.forEach((cls) => classString += cls + " ");
        this.element.setAttribute("class", classString);
      }
    }
  }
  const previousClassesCache = new WeakMap();
  const classMap = directive((classInfo) => (part3) => {
    if (!(part3 instanceof AttributePart) || part3 instanceof PropertyPart || part3.committer.name !== "class" || part3.committer.parts.length > 1) {
      throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
    }
    const {committer} = part3;
    const {element} = committer;
    let previousClasses = previousClassesCache.get(part3);
    if (previousClasses === void 0) {
      element.setAttribute("class", committer.strings.join(" "));
      previousClassesCache.set(part3, previousClasses = new Set());
    }
    const classList = element.classList || new ClassList(element);
    previousClasses.forEach((name) => {
      if (!(name in classInfo)) {
        classList.remove(name);
        previousClasses.delete(name);
      }
    });
    for (const name in classInfo) {
      const value = classInfo[name];
      if (value != previousClasses.has(name)) {
        if (value) {
          classList.add(name);
          previousClasses.add(name);
        } else {
          classList.remove(name);
          previousClasses.delete(name);
        }
      }
    }
    if (typeof classList.commit === "function") {
      classList.commit();
    }
  });

  // node_modules/@open-wc/lit-helpers/src/spread.js
  const prevCache = new WeakMap();
  const spread = directive((spreadData) => (part3) => {
    const prevData = prevCache.get(part3);
    if (prevData === spreadData) {
      return;
    }
    prevCache.set(part3, spreadData);
    if (spreadData) {
      for (const key in spreadData) {
        const value = spreadData[key];
        if (value === noChange) {
          continue;
        }
        const prefix = key[0];
        const {element} = part3.committer;
        if (prefix === "@") {
          const prevHandler = prevData && prevData[key];
          if (!prevHandler || prevHandler !== value) {
            const name = key.slice(1);
            if (prevHandler) {
              element.removeEventListener(name, prevHandler);
            }
            element.addEventListener(name, value);
          }
          continue;
        }
        if (prefix === ".") {
          if (!prevData || prevData[key] !== value) {
            element[key.slice(1)] = value;
          }
          continue;
        }
        if (prefix === "?") {
          if (!prevData || prevData[key] !== value) {
            const name = key.slice(1);
            if (value) {
              element.setAttribute(name, "");
            } else {
              element.removeAttribute(name);
            }
          }
          continue;
        }
        if (!prevData || prevData[key] !== value) {
          if (value != null) {
            element.setAttribute(key, String(value));
          } else {
            element.removeAttribute(key);
          }
        }
      }
    }
    if (prevData) {
      for (const key in prevData) {
        if (!spreadData || !(key in spreadData)) {
          const prefix = key[0];
          const {element} = part3.committer;
          if (prefix === "@") {
            element.removeEventListener(key.slice(1), prevData[key]);
            continue;
          }
          if (prefix === ".") {
            element[key.slice(1)] = void 0;
            continue;
          }
          if (prefix === "?") {
            element.removeAttribute(key.slice(1));
            continue;
          }
          element.removeAttribute(key);
        }
      }
    }
  });

  // app/ui/tables/pagination.js
  function pagination(datasetLength, options = {}) {
    const _options = Object.assign({
      currentPage: 0,
      maxLength: 9,
      pageSize: 10
    }, options);
    const pageCount = Math.ceil(datasetLength / _options.pageSize);
    if (pageCount <= 1) {
      return "";
    }
    const useSeparators = pageCount > _options.maxLength;
    const useFirstSeparator = useSeparators && _options.currentPage > 4;
    const useLastSeparator = useSeparators && _options.currentPage < pageCount - 3;
    const pages = new Array(pageCount).fill("").map((page, i, pages2) => ({
      index: i,
      separator: useSeparators && (i === 1 && useFirstSeparator || useLastSeparator && i === pages2.length - 2)
    })).filter((page, i, pages2) => {
      if (!useSeparators || page.separator) {
        return true;
      }
      if (i === 0 || i === pages2.length - 1) {
        return true;
      }
      if (_options.currentPage < 5) {
        return i < 4;
      }
      if (_options.currentPage > pages2.length - 4) {
        return i >= pages2.length - 4;
      }
      return _options.currentPage - 1 <= i && i <= _options.currentPage + 1;
    });
    return html`<ul class="pagination justify-content-center">
    ${pages.map((page) => getPaginationIndexTemplate(page, _options))}
  </ul>`;
  }
  function getPaginationIndexTemplate(page, options) {
    const active = page.index === options.currentPage;
    const contents = page.separator ? getSeparatorTemplate() : getPageTemplate(page.index + 1, active);
    return html`<li class=${classMap({
      active,
      disabled: page.separator,
      "page-item": true
    })} @click="${getClickHandler(page)}">${contents}</li>`;
  }
  function getPageTemplate(index, active) {
    return html`<a class="page-link" href="#" aria-current="${ifDefined(active ? "page" : void 0)}">${index}</a>`;
  }
  function getSeparatorTemplate() {
    return html`<span class="page-link">...</span>`;
  }
  function getClickHandler(page) {
    return function(event) {
      event.stopPropagation();
      event.preventDefault();
      event.target.closest("ul").dispatchEvent(new CustomEvent("mip.pagination.change", {
        bubbles: true,
        detail: {currentPage: page.index}
      }));
    };
  }

  // app/ui/partials/tableLit.js
  const RENDERED_ONCE = Symbol("RENDERED");
  const GROUP = Symbol("TABLE_LIT_GROUP");
  class TableLit {
    constructor(i18n2, options = {}) {
      this[RENDERED_ONCE] = false;
      this.i18n = i18n2;
      this.options = ({tableAttributes: {}}, options);
      if (options.pagination) {
        options.pagination = Object.assign({
          currentPage: 0,
          pageSize: 10
        }, options.pagination);
      }
      if (options.search) {
        options.search = Object.assign({query: ""}, options.search);
      }
    }
    render(node, columns, data = []) {
      this.columns = this.filterColumns(columns);
      this.setData(data);
      if (this.reRender === void 0) {
        this.reRender = (eventTargetNode) => {
          const rootNode = eventTargetNode.closest("table").parentElement;
          this.render(rootNode, this.columns, data);
        };
      }
      const template6 = this.getTemplate();
      this[RENDERED_ONCE] = true;
      if (isNil_default(node)) {
        return template6;
      }
      return render(template6, node);
    }
    filterColumns(columns) {
      if (!this[RENDERED_ONCE]) {
        if (this.options.defaultSort && columns.every((column) => column.sortDirection === void 0)) {
          const defaultSortColumn = columns.find((column) => column.field === this.options.defaultSort.field);
          if (defaultSortColumn) {
            defaultSortColumn.sortDirection = this.options.defaultSort.sortDirection;
          }
        }
      }
      return columns;
    }
    filterData(data) {
      if (this.options.search && !isNil_default(this.options.search.query)) {
        const searchColumns = this.columns.filter((column) => isEmpty_default(this.options.search.fields) || this.options.search.fields.includes(column.field));
        return data.filter((record) => this.filterRecord(searchColumns, record, this.options.search.query, {getValueFunctionName: "getFieldDisplayValue"}));
      }
      return data;
    }
    filterRecord(columns, record, query, options = {}) {
      if (isEmpty_default(query)) {
        return true;
      }
      let queries = isArray_default(query) ? query : [query];
      if (typeof queries[0] !== "string") {
        return true;
      }
      queries = queries.map((q) => q.toLowerCase());
      const _options = Object.assign({
        columnMatchMode: "some",
        getValueFunctionName: "getFieldValue"
      }, options);
      return columns[_options.columnMatchMode]((column) => {
        const value = this[_options.getValueFunctionName](column, record);
        if (isNil_default(value)) {
          return false;
        }
        const _value = value.toLowerCase();
        return queries.some((query2) => _value.includes(query2));
      });
    }
    getTemplate() {
      if (this[RENDERED_ONCE]) {
        return this.getTableTemplate();
      }
      return html`<div class="d-flex flex-column flex-grow-1">${this.getTableTemplate()}</div>`;
    }
    getDataPage() {
      if (!isNil_default(this.options.pagination)) {
        const currentPage = this.options.pagination.currentPage;
        const pageSize = this.options.pagination.pageSize;
        return this.data.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
      }
      return this.data;
    }
    getDataSorter(columns) {
      const sortColumn = columns.find((column) => column.sortDirection);
      if (sortColumn === void 0) {
        return null;
      }
      if (isEmpty_default(sortColumn.sortDirection)) {
        sortColumn.sortDirection = "asc";
      }
      return (o1, o2) => {
        const value1 = this.getFieldValue(sortColumn, o1);
        const value2 = this.getFieldValue(sortColumn, o2);
        const signum = sortColumn.sortDirection === "asc" ? 1 : -1;
        if (typeof value1 === "number" && typeof value2 === "number") {
          return this.sortNumbers(value1, value2) * signum;
        }
        if (isNil_default(value1) && isNil_default(value2) || value1 === value2) {
          return 0;
        }
        if (isNil_default(value1) || typeof value1 === "number" && isNaN(value1)) {
          return -1 * signum;
        }
        if (isNil_default(value2) || typeof value2 === "number" && isNaN(value2)) {
          return 1 * signum;
        }
        if (sortColumn.type === "DATE" || sortColumn.type === "DATETIME") {
          return (moment.default(value1) - moment.default(value2)) * signum;
        }
        const displayValue1 = this.getFieldDisplayValue(sortColumn, o1, value1);
        const displayValue2 = this.getFieldDisplayValue(sortColumn, o2, value2);
        return displayValue1.toString().localeCompare(displayValue2.toString()) * signum;
      };
    }
    sortNumbers(value1, value2) {
      if (isNil_default(value1) && isNil_default(value2) || value1 === value2) {
        return 0;
      }
      if (isNil_default(value1)) {
        return -1;
      }
      if (isNil_default(value2)) {
        return 1;
      }
      if (isNaN(value1)) {
        return -1;
      }
      if (isNaN(value2)) {
        return 1;
      }
      return value1 < value2 ? -1 : 1;
    }
    getFieldDisplayValue(column, record, value) {
      const _value = value !== void 0 ? value : this.getFieldValue(column, record);
      if (!isNil_default(_value)) {
        if (column.type === "DATE") {
          return this.i18n.date.format(_value);
        }
        if (column.type === "DATETIME") {
          return this.i18n.dateTime.format(_value);
        }
        if (typeof _value === "number") {
          return this.i18n.number.format(_value);
        }
      }
      return _value;
    }
    getFieldValue(column, record, options = {}) {
      if (options.formula !== false && (column.formula || options.formula)) {
        const _formula = options.formula || column.formula;
        return _formula.call(this, column, record);
      }
      return record[column.field];
    }
    getNoDataText() {
      return this.i18n("no_data");
    }
    getNoDataTrTemplate() {
      return html`<tr><td class="text-muted text-center" colspan="${this.columns.length}">${this.getNoDataText()}</td></tr>`;
    }
    getPaginationIndexClickHandler() {
      return (event) => {
        this.options.pagination.currentPage = event.detail.currentPage;
        this.reRender(event.target.closest("nav").previousElementSibling);
      };
    }
    getPaginationTemplate() {
      return html`<nav @mip.pagination.change="${this.getPaginationIndexClickHandler()}">${pagination(this.data.length, {...this.options.pagination})}</nav>`;
    }
    getSearchKeyUpHandler() {
      return (event) => {
        this.options.search.query = event.currentTarget.value;
        this.reRender(event.target);
      };
    }
    getSearchTemplate() {
      return html`<input type="search" @keyup=${this.getSearchKeyUpHandler()} class="form-control col-md-4 mb-2" value="${this.options.search.query}" placeholder=${this.i18n("search")} />`;
    }
    getTableClasses() {
      return "table";
    }
    getTableTemplate() {
      return html`${this.options.search ? this.getSearchTemplate() : ""}
      <table class="${this.getTableClasses()}" ...=${spread(this.options.tableAttributes)}>
        <thead>
          ${this.getTheadTrTemplate()}
        </thead>
        <tbody>
          ${this.getTbodyTemplate()}
        </tbody>
      </table>
      ${this.options.pagination ? html`${this.getPaginationTemplate()}` : ""}
    `;
    }
    getTbodyTemplate() {
      const dataPage = this.getDataPage();
      return html`${!isEmpty_default(dataPage) ? dataPage.map((record) => this.getTrTemplate(record)) : this.getNoDataTrTemplate(this.columns)}`;
    }
    getTdClasses(column, record) {
      if (column.type === "BOOLEAN") {
        return "text-center";
      }
      return "";
    }
    getTdClickHandler(value, column, record) {
      return column.clickHandler;
    }
    getTdInnerTemplate(value, column, record) {
      if (column.template) {
        return column.template(value, column, record);
      }
      if (column.type === "BOOLEAN") {
        return getBooleanTdInnerTemplate(value);
      }
      return value;
    }
    getTdTemplate(column, record) {
      const value = this.getFieldValue(column, record);
      return html`<td @click=${this.getTdClickHandler(value, column, record)} class=${this.getTdClasses(column, record)}>${this.getTdInnerTemplate(this.getFieldDisplayValue(column, record, value), column, record)}</td>`;
    }
    getThClickHandler(column) {
      return null;
    }
    getTheadTrTemplate() {
      return html`<tr class="${this.getTheadTrClasses()}">
      ${this.columns.map((column) => this.getThTemplate(column))}
    </tr>`;
    }
    getTheadTrClasses() {
      return "";
    }
    getThClasses(column) {
      if (column.type === "BOOLEAN") {
        return "text-center";
      }
      return "";
    }
    getThInnerTemplate(displayValue, column) {
      return displayValue;
    }
    getThSortClickHandler(sortColumn) {
      return (event) => {
        event.stopPropagation();
        this.columns.forEach((column) => {
          if (column.field === sortColumn.field) {
            sortColumn.sortDirection = sortColumn.sortDirection === "asc" ? "desc" : "asc";
          } else {
            delete column.sortDirection;
          }
        });
        event.target.dispatchEvent(new CustomEvent("ccp.table.sort", {
          bubbles: true,
          detail: {
            field: sortColumn.field,
            direction: sortColumn.sortDirection
          }
        }));
        this.reRender(event.target);
      };
    }
    getThSortTemplate(column) {
      const asc = column.sortDirection === "asc";
      const desc = column.sortDirection === "desc";
      const hasSort = asc || desc;
      return html`<span @click=${this.getThSortClickHandler(column)} ...=${spread(column.sortAttributes || {})}>
      <i class=${classMap({
        far: !hasSort,
        "fa-sort": !hasSort,
        fas: hasSort,
        "fa-sort-up": asc,
        "fa-sort-down": desc,
        "text-muted": !hasSort
      })}></i></span>`;
    }
    getThStyle(column) {
      return "";
    }
    getThTemplate(column) {
      return html`<th @click="${this.getThClickHandler(column)}" class="${this.getThClasses(column)}" style="${this.getThStyle(column)}" data-field="${column.field}" ...=${spread(column.headerAttributes || {})}>
      ${this.getThInnerTemplate(this.getThValue(column), column)}
      ${column.sortable !== false ? this.getThSortTemplate(column) : ""}
    </th>`;
    }
    getThValue(column) {
      return column.label;
    }
    getTrClasses(record) {
      return "";
    }
    getTrTemplate(record) {
      return html`<tr class=${this.getTrClasses(record)}>
      ${this.columns.map((column) => this.getTdTemplate(column, record))}
    </tr>`;
    }
    groupData(data) {
      if (isEmpty_default(this.options.groupBy)) {
        return data;
      }
      return Object.values(groupBy_default(data, this.options.groupBy)).map((group) => {
        const first = group[0];
        return this.columns.reduce((groupRecord, column) => {
          if (column.groupByFormula) {
            this.setFieldValue(column, groupRecord, this.getFieldValue(column, group, {formula: column.groupByFormula}));
          } else {
            this.setFieldValue(column, groupRecord, this.getFieldValue(column, first));
          }
          return groupRecord;
        }, {[GROUP]: group});
      });
    }
    setData(data) {
      let _data = this.filterData(data);
      _data = this.groupData(_data);
      const dataSorter = this.getDataSorter(this.columns);
      if (dataSorter) {
        _data.sort(dataSorter);
      }
      this.data = _data;
    }
    setFieldValue(column, record, value) {
      record[column.field] = value;
    }
  }
  function getBooleanTdInnerTemplate(value) {
    return html`<i class="far fa-${value ? "check-" : ""}square"></i>`;
  }

  // app/translationValues.js
  const translationValues = [
    {
      label: "all",
      translations: {
        en_US: "All",
        de: "Alle",
        es: "Todas",
        fr: "Tout",
        it: "Tutti",
        ja: "\u5168\u3066",
        nl: "Alles",
        pt: "Todas",
        ru: "\u0412\u0441\u0435",
        zh: "\u5168\u90E8"
      }
    },
    {
      label: "all_activity",
      translations: {
        en_US: "All Activity",
        nl: "Alle Activiteiten",
        de: "Alle Aktivit\xE4ten",
        fr: "Toutes Les Activit\xE9s",
        es: "Todas Las Actividades",
        it: "Tutte le Attivit\xE0",
        ja: "\u5168\u3066\u306E\u6D3B\u52D5",
        pt: "Todas as atividades",
        ru: "\u0412\u0441\u0435 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438",
        zh: "\u6240\u6709\u62DC\u8BBF"
      }
    },
    {
      label: "best_visit_times",
      translations: {
        en_US: "Best Visit Times",
        fr: "Meilleurs Horaires de Visite"
      }
    },
    {
      label: "calls",
      translations: {
        en_US: "Calls",
        nl: "Gesprekken",
        de: "Folgebesuchen",
        fr: "Appels",
        es: "Llamadas",
        it: "Visite",
        ja: "\u30B3\u30FC\u30EB",
        pt: "Visitas",
        ru: "\u0412\u0438\u0437\u0438\u0442\u044B",
        zh: "\u62DC\u8BBF"
      }
    },
    {
      label: "cancel",
      translations: {
        en_US: "Cancel",
        fr: "Annuler"
      }
    },
    {
      label: "closed",
      translations: {
        en_US: "Closed",
        es: "Cerrado",
        fr: "Ferm\xE9",
        it: "Chiuso",
        nl: "Gesloten",
        de: "Geschlossen"
      }
    },
    {
      label: "completed",
      translations: {en_US: "Completed"}
    },
    {
      label: "current_month",
      translations: {
        en_US: "Current Month",
        de: "Aktueller Monat",
        es: "Mes actual",
        fr: "Mois Actuel",
        it: "Mese corrente",
        ja: "\u4ECA\u6708",
        nl: "Huidige maand",
        pt: "M\xEAs Atual",
        ru: "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043C\u0435\u0441\u044F\u0446",
        zh: "\u5F53\u6708"
      }
    },
    {
      label: "current_quarter",
      translations: {
        en_US: "Current Quarter",
        de: "Aktuelles Quartal",
        es: "Trimestre actual",
        fr: "Trimestre Actuel",
        it: "Trimestre corrente",
        ja: "\u4ECA\u56DB\u534A\u671F",
        nl: "Huidige kwartaal",
        pt: "Trimestre Atual",
        ru: "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B",
        zh: "\u5F53\u5B63"
      }
    },
    {
      label: "date",
      translations: {
        en_US: "Date",
        nl: "Datum",
        de: "Datum",
        fr: "Date",
        es: "Fecha",
        it: "Data",
        ja: "\u65E5\u4ED8",
        pt: "Data",
        ru: "\u0414\u0430\u0442\u0430",
        zh: "\u65E5\u671F"
      }
    },
    {
      label: "dismissed",
      translations: {en_US: "Dismissed"}
    },
    {
      label: "error_missing_myinsights_permission_set",
      translations: {en_US: "You do not have the Insights+ End User Permission Set, which is required to view this dashboard. If you believe this is an error, please contact your administrator."}
    },
    {
      label: "event_participations",
      translations: {
        en_US: "Event Participations",
        de: "Veranstaltungen",
        es: "Participaciones del evento",
        fr: "Participations \xE0 des \xE9v\xE9nements",
        nl: "Evenement Participaties",
        ru: "\u0423\u0447\u0430\u0441\u0442\u0438\u044F \u0432 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F\u0445",
        zh: "\u4F1A\u8BAE"
      }
    },
    {
      label: "exceed",
      translations: {en_US: "Exceed"}
    },
    {
      label: "expired",
      translations: {en_US: "Expired"}
    },
    {
      label: "ly",
      translations: {
        en_US: "LY",
        ja: "\u524D\u5E74YTD"
      }
    },
    {
      label: "lymat",
      translations: {en_US: "LY MAT"}
    },
    {
      label: "lytd",
      translations: {
        en_US: "LYTD",
        ja: "\u524D\u5E74YTD"
      }
    },
    {
      label: "mat",
      translations: {en_US: "MAT"}
    },
    {
      label: "mtd",
      translations: {en_US: "MTD"}
    },
    {
      label: "my",
      translations: {
        en_US: "My",
        nl: "Mijn",
        de: "Meine",
        fr: "Mon",
        es: "Yo"
      }
    },
    {
      label: "my_activity",
      translations: {
        en_US: "My Activity",
        nl: "Mijn Activiteit",
        de: "Meine Aktivit\xE4t",
        fr: "Mon activit\xE9",
        es: "Mi actividad",
        it: "La mie Attivit\xE0",
        ja: "\u79C1\u306E\u6D3B\u52D5",
        pt: "Minhas atividades",
        ru: "\u041C\u043E\u044F \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C",
        zh: "\u6211\u7684\u62DC\u8BBF"
      }
    },
    {
      label: "no_data",
      translations: {
        en_US: "No records to display",
        nl: "Geen records om weer te geven",
        de: "Keine Datens\xE4tze zum Anzeigen",
        fr: "Aucun enregistrement \xE0 afficher",
        es: "No hay registros que mostrar",
        it: "Nessun dato da visualizzare",
        pt: "Sem dados",
        zh: "\u6CA1\u6709\u8BB0\u5F55\u53EF\u4EE5\u5C55\u793A",
        ja: "\u8A18\u9332\u306A\u3057"
      }
    },
    {
      label: "no_keymessages",
      translations: {
        en_US: "No Recent Key Messages",
        de: "Der letzte Kontakt hat kein Gespr\xE4chsthema",
        es: "Sin mensajes clave recientes",
        fr: "Aucun message cl\xE9 r\xE9cent",
        it: "Nessun messaggio chiave recente",
        ja: "\u30AD\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8\uFF1A\u7121",
        nl: "Geen recente Key Messages",
        pt: "Sem key messages",
        ru: "\u041D\u0435\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0445 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0445 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439",
        zh: "\u8FD1\u671F\u6CA1\u6709\u5173\u952E\u4FE1\u606F"
      }
    },
    {
      label: "no_nextcallnotes",
      translations: {
        en_US: "Last submitted call has no call note",
        nl: "De laatst verzonden oproep heeft geen oproepnotitie",
        de: "Der letzte Kontakt hat keine Gespr\xE4chsnotiz",
        fr: "Le dernier appel soumis n'a pas de note d'appel",
        es: "La \xFAltima visita reportada no tiene notas de visita",
        it: "L'ultima visita inserita non contiene note",
        ja: "\u76F4\u8FD1\u306E\u30B3\u30FC\u30EB\u30CE\u30FC\u30C8\u306F\u3001\u6B21\u56DE\u30B3\u30FC\u30EB\u5FC5\u9808\u4E8B\u9805\u304C\u8A18\u8F09\u3055\u308C\u3066\u3044\u307E\u305B\u3093",
        pt: "A \xFAltima visita reportada n\xE3o possui notas para pr\xF3xima visita",
        ru: "\u041D\u0435\u0442 \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u0441 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0432\u0438\u0437\u0438\u0442\u0430",
        zh: "\u6700\u8FD1\u4E00\u6B21\u63D0\u4EA4\u7684\u62DC\u8BBF\u4E2D\u6CA1\u6709\u4E0B\u6B21\u62DC\u8BBF\u5907\u6CE8"
      }
    },
    {
      label: "not_expired",
      translations: {en_US: "Not Expired"}
    },
    {
      label: "open",
      translations: {
        en_US: "Open",
        es: "Abierto",
        fr: "Ouvert",
        it: "Aperto",
        nl: "Open",
        de: "Offen"
      }
    },
    {
      label: "product",
      translations: {
        en_US: "Product",
        nl: "Product",
        de: "Produkt",
        fr: "Produit",
        es: "Producto",
        it: "Prodotto",
        pt: "Produto",
        zh: "\u4EA7\u54C1",
        ja: "\u88FD\u54C1"
      }
    },
    {
      label: "products",
      translations: {
        en_US: "Products",
        nl: "Producten",
        de: "Produkten",
        fr: "Produits",
        es: "Productos",
        it: "Prodotti",
        pt: "Produtos",
        zh: "\u4EA7\u54C1",
        ja: "\u88FD\u54C1"
      }
    },
    {
      label: "reset_filters",
      translations: {en_US: "Reset Filters"}
    },
    {
      label: "samples_and_promo",
      translations: {
        en_US: "Samples & Promotional Items",
        de: "Muster und Material",
        es: "Muestras y art\xEDculos promocionales",
        fr: "\xC9chantillons et articles promotionnels",
        it: "Campioni e Articoli promozionali",
        ja: "\u30B5\u30F3\u30D7\u30EB & \u30D7\u30ED\u30E2\u30FC\u30B7\u30E7\u30F3\u30A2\u30A4\u30C6\u30E0",
        nl: "Voorbeelden en promotieartikelen",
        pt: "Amostras e artigos promocionais",
        ru: "\u041E\u0431\u0440\u0430\u0437\u0446\u044B \u0438 \u043F\u0440\u043E\u043C\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B",
        zh: "\u6837\u54C1&\u4FC3\u9500\u9879\u76EE"
      }
    },
    {
      label: "search",
      translations: {
        en_US: "Search",
        de: "Suchen",
        es: "Buscar",
        fr: "Rechercher",
        it: "Cerca",
        ja: "\u691C\u7D22",
        nl: "Zoeken",
        pt: "Pesquisa",
        ru: "\u041F\u043E\u0438\u0441\u043A",
        zh: "\u641C\u7D22"
      }
    },
    {
      label: "state",
      translations: {
        en_US: "State",
        es: "Estado",
        fr: "Etat"
      }
    },
    {
      label: "team",
      translations: {
        en_US: "Team",
        de: "Team",
        es: "Mi equipo",
        fr: "Team",
        nl: "Team"
      }
    },
    {
      label: "top",
      translations: {
        en_US: "Top",
        es: "Arriba",
        fr: "Haut"
      }
    },
    {
      label: "total_unique_x",
      translations: {en_US: "Total Unique {0}"}
    },
    {
      label: "vs",
      translations: {en_US: "{0} vs. {1}"}
    },
    {
      label: "quantity",
      translations: {
        en_US: "Quantity",
        nl: "Hoeveelheid",
        de: "Anzahl",
        fr: "Quantit\xE9",
        es: "Cantidad",
        it: "Quantit\xE0",
        pt: "Quantidade",
        zh: "\u6570\u91CF",
        ja: "\u6570\u91CF"
      }
    },
    {
      label: "remaining_quantity",
      translations: {
        en_US: "Remaining Quantity",
        nl: "Overgebleven hoeveelheid",
        de: "Verbleibende Menge",
        fr: "Quantit\xE9 restante",
        es: "Cantidad restante",
        it: "Quantit\xE0 residua",
        pt: "Quantidade restante",
        zh: "\u5269\u4F59\u6570\u91CF",
        ja: "\u6B8B\u308A\u306E\u6570\u91CF"
      }
    },
    {
      label: "email_fragments",
      translations: {
        en_US: "Email Fragments",
        nl: "E-mail fragmenten",
        de: "Bausteine",
        fr: "Fragments de courriel",
        es: "Fragments de approved email"
      }
    },
    {
      label: "status",
      translations: {
        en_US: "Status",
        de: "Status",
        es: "Estado",
        fr: "Statut",
        it: "Stato",
        ja: "\u30B9\u30C6\u30FC\u30BF\u30B9",
        nl: "Status",
        ru: "\u0421\u0442\u0430\u0442\u0443\u0441",
        zh: "\u72B6\u6001"
      }
    },
    {
      label: "interactionmedium",
      translations: {
        en_US: "Interaction Medium",
        nl: "Interactiemedium",
        de: "Kanal",
        fr: "Canal d'interaction",
        es: "Medio de interacci\xF3n"
      }
    },
    {
      label: "calltype",
      translations: {
        en_US: "Call Type",
        nl: "Type oproep",
        de: "Anruftyp",
        fr: "Type d'appel",
        es: "Tipo de visita"
      }
    },
    {
      label: "sent_emails",
      translations: {
        en_US: "Sent Emails",
        nl: "Verzonden e-mails",
        de: "Gesendete E-Mails",
        fr: "Courriels envoy\xE9s",
        es: "Approved emails enviados"
      }
    },
    {
      label: "emails_opened",
      translations: {
        en_US: "Emails opened",
        nl: "E-mails geopend",
        de: "E-Mails ge\xF6ffnet",
        fr: "Courriels ouverts",
        es: "Approved emails abiertos"
      }
    },
    {
      label: "Email",
      translations: {
        en_US: "Email",
        nl: "E-mail",
        de: "E-Mail",
        fr: "Courriel",
        es: "Approved email",
        zh: "\u90AE\u4EF6"
      }
    },
    {
      label: "clicked_emails",
      translations: {
        en_US: "Clicked Emails",
        nl: "Geklikte e-mails",
        de: "Angeklickte E-Mails",
        fr: "Courriels cliqu\xE9s",
        es: "Approved emails con clicks"
      }
    },
    {
      label: "not_delivered",
      translations: {
        en_US: "Not Delivered",
        nl: "Niet geleverd",
        de: "Nicht zugestellt",
        fr: "Non livr\xE9s",
        es: "No entregado",
        zh: "\u4E0D\u53D1\u9001"
      }
    },
    {
      label: "group_detail",
      translations: {
        en_US: "Group Detail",
        nl: "Groepsdetails",
        de: "Gruppendetails",
        fr: "D\xE9tail du groupe",
        es: "Interacci\xF3n en grupo"
      }
    },
    {
      label: "detail_only",
      translations: {
        en_US: "Detail Only",
        nl: "Alleen detail",
        de: "Nur Detail",
        fr: "D\xE9tail seulement",
        es: "Interacci\xF3n individual"
      }
    },
    {
      label: "call_only",
      translations: {
        en_US: "Call Only",
        nl: "Alleen bellen",
        de: "Nur anrufen",
        fr: "Appelez seulement",
        es: "Visita individual"
      }
    },
    {
      label: "event_only",
      translations: {
        en_US: "Event Only",
        nl: "Alleen evenement",
        de: "Nur Veranstaltung",
        fr: "\xC9v\xE9nement seulement",
        es: "Evento  \xFAnico"
      }
    },
    {
      label: "event_detail",
      translations: {
        en_US: "Event Detail",
        nl: "Gebeurtenis detail",
        de: "Veranstaltung Detail",
        fr: "D\xE9tail de l'\xE9v\xE9nement",
        es: "Interacci\xF3n en evento"
      }
    },
    {
      label: "detail_with_sample",
      translations: {
        en_US: "Detail with Sample",
        nl: "Detail met monster",
        de: "Detail mit Probe",
        fr: "D\xE9tail avec \xE9chantillon",
        es: "Interacci\xF3n con muestra"
      }
    },
    {
      label: "group_detail_with_sample",
      translations: {
        en_US: "Group Detail with Sample",
        nl: "Groepsdetail met monster",
        de: "Gruppendetail mit Probe",
        fr: "D\xE9tail du groupe avec \xE9chantillon",
        es: "Interacci\xF3n grupal con muestra"
      }
    },
    {
      label: "sample_only",
      translations: {
        en_US: "Sample Only",
        nl: "Alleen monster",
        de: "Nur Proben",
        fr: "\xC9chantillon seulement",
        es: "Solo Muestra",
        zh: "\u53EA\u6709\u6837\u54C1"
      }
    },
    {
      label: "Submitted_vod",
      translations: {
        en_US: "Submitted",
        nl: "Ingezonden",
        de: "\xDCbermittelt",
        fr: "Soumis",
        es: "Presentada"
      }
    },
    {
      label: "Planned_vod",
      translations: {
        en_US: "Planned",
        nl: "Gepland",
        de: "Geplant",
        fr: "Pr\xE9vu",
        es: "Planificado"
      }
    },
    {
      label: "Saved_vod",
      translations: {
        en_US: "Saved",
        nl: "Opgeslagen",
        de: "Gespeichert",
        fr: "Enregistr\xE9",
        es: "Guardado"
      }
    },
    {
      label: "Canceled_vod",
      translations: {
        en_US: "Canceled",
        nl: "Geannuleerd",
        de: "Abgebrochen",
        fr: "Annul\xE9",
        es: "Cancelado",
        zh: "\u53D6\u6D88"
      }
    },
    {
      label: "Late_Submission_vod",
      translations: {
        en_US: "Late Submission",
        nl: "Late indiening",
        de: "Versp\xE4tete Vorlage",
        fr: "Un d\xE9p\xF4t tardif",
        es: "Presentaci\xF3n tard\xEDa"
      }
    },
    {
      label: "Pending_vod",
      translations: {
        en_US: "Pending",
        nl: "In afwachting",
        de: "Steht aus",
        fr: "En attendant",
        es: "Pendiente"
      }
    },
    {
      label: "Published_vod",
      translations: {
        en_US: "Published",
        nl: "Gepubliceerd",
        de: "Ver\xF6ffentlicht",
        fr: "Publi\xE9",
        es: "Publicado"
      }
    },
    {
      label: "meeting_event",
      translations: {
        en_US: "Meeting/Event",
        nl: "Meeting/Event",
        de: "Besprechung/Veranstaltung",
        fr: "R\xE9union/\xC9v\xE9nement",
        es: "Reuni\xF3n / Evento"
      }
    },
    {
      label: "E-detailling",
      translations: {
        en_US: "E-detailling",
        nl: "E-detaillering",
        de: "E-Detailling",
        fr: "E-d\xE9taillant",
        es: "E-detailing"
      }
    },
    {
      label: "Phone",
      translations: {
        en_US: "Phone",
        nl: "Telefoon",
        de: "Telefon",
        fr: "T\xE9l\xE9phone",
        es: "Tel\xE9fono",
        zh: "\u7535\u8BDD"
      }
    },
    {
      label: "Web-Based",
      translations: {
        en_US: "Web-Based",
        nl: "Web-Based",
        de: "Webbasiert",
        fr: "Bas\xE9 sur le Web",
        es: "Web",
        zh: "\u7F51\u9875"
      }
    },
    {
      label: "Face-to-Face",
      translations: {
        en_US: "Face-to-Face",
        nl: "Persoon tot persoon",
        de: "Face-to-Face",
        fr: "Face \xE0 face",
        es: "Cara a cara",
        zh: "\u9762\u5BF9\u9762"
      }
    },
    {
      label: "Other",
      translations: {
        en_US: "Other",
        nl: "anders",
        de: "Andere",
        fr: "Autre",
        es: "Otro",
        zh: "\u5176\u4ED6"
      }
    },
    {
      label: "Sent",
      translations: {
        en_US: "Sent",
        nl: "Verzonden",
        de: "Versendet",
        fr: "Envoy\xE9",
        es: "Enviado"
      }
    },
    {
      label: "Responded",
      translations: {
        en_US: "Responded",
        nl: "gereageerd",
        de: "Reagiert",
        fr: "A r\xE9pondu",
        es: "Respondido"
      }
    },
    {
      label: "Cancelled",
      translations: {
        en_US: "Cancelled",
        nl: "Geannuleerd",
        de: "Abgebrochen",
        fr: "Annul\xE9",
        es: "Cancelado"
      }
    },
    {
      label: "Completed",
      translations: {
        en_US: "Completed",
        nl: "Voltooid",
        de: "Abgeschlossen",
        fr: "Termin\xE9",
        es: "Terminado"
      }
    },
    {
      label: "Completed_sugg",
      translations: {
        en_US: "Completed",
        nl: "Voltooid",
        de: "Abgeschlossen",
        fr: "Termin\xE9",
        es: "Completadas"
      }
    },
    {
      label: "Uncompleted_sugg",
      translations: {
        en_US: "Uncompleted",
        nl: "Onvoltooid",
        de: "Uncompleted",
        fr: "Uncompleted",
        es: "No completadas"
      }
    },
    {
      label: "None",
      translations: {
        en_US: "None",
        de: "Keine",
        es: "Ninguno",
        fr: "Aucun",
        it: "Nessuno",
        ja: "\u7121\u3057",
        nl: "Geen",
        pt: "Nenhum",
        ru: "\u041D\u0438\u0447\u0435\u0433\u043E",
        zh: "\u6CA1\u6709"
      }
    },
    {
      label: "Uncompleted",
      translations: {
        en_US: "Uncompleted",
        nl: "onvoltooid",
        de: "Unvollendet",
        fr: "Inachev\xE9",
        es: "Sin completar"
      }
    },
    {
      label: "Recurring",
      translations: {
        en_US: "Recurring",
        nl: "Terugkerend",
        de: "Wiederkehrend",
        fr: "R\xE9current",
        es: "Recurrente",
        zh: "\u5FAA\u73AF"
      }
    },
    {
      label: "Unrecurring",
      translations: {
        en_US: "Non Recurring",
        nl: "Niet terugkerend",
        de: "Nicht wiederkehrend",
        fr: "Non r\xE9current",
        es: "No recurrente",
        zh: "\u4E0D\u5FAA\u73AF"
      }
    },
    {
      label: "email_opt",
      translations: {
        en_US: "Email Opt-in",
        nl: "Email Opt-in",
        de: "Email Opt-in",
        fr: "Email Opt-in",
        es: "Epermission",
        zh: "\u9009\u62E9\u6027\u52A0\u5165\u90AE\u4EF6"
      }
    },
    {
      label: "web_opt",
      translations: {
        en_US: "Web Opt-in",
        nl: "Web Opt-in",
        de: "Web Opt-in",
        fr: "Web Opt-in",
        es: "Web Opt-in",
        zh: "\u9009\u62E9\u6027\u52A0\u5165\u7F51\u9875"
      }
    },
    {
      label: "fax_opt",
      translations: {
        en_US: "Fax Opt-in",
        nl: "Fax Opt-in",
        de: "Fax Opt-in",
        fr: "Fax Opt-in",
        es: "Fax Opt-in",
        zh: "\u9009\u62E9\u6027\u52A0\u5165\u4F20\u771F"
      }
    },
    {
      label: "phone_opt",
      translations: {
        en_US: "Phone Opt-in",
        nl: "Phone Opt-in",
        de: "Phone Opt-in",
        fr: "Phone Opt-in",
        es: "Phone Opt-in",
        zh: "\u9009\u62E9\u6027\u52A0\u5165\u7535\u8BDD"
      }
    },
    {
      label: "pdrp_opted_out",
      translations: {en_US: "Sales Data for this Account cannot be viewed due to the PDRP Opt Out program"}
    },
    {
      label: "city",
      translations: {
        en_US: "City",
        de: "Stadt",
        es: "Ciudad",
        fr: "Ville",
        it: "Citt\xE0",
        ja: "\u90FD\u5E02",
        nl: "Stad",
        pt: "Cidade",
        ru: "\u0413\u043E\u0440\u043E\u0434",
        zh: "\u57CE\u5E02"
      }
    },
    {
      label: "periods",
      translations: {
        en_US: "Periods",
        de: "Zeitraum",
        es: "Periodos",
        fr: "P\xE9riodes",
        it: "Periodo",
        ja: "\u671F\u9593",
        nl: "Periodes",
        pt: "Per\xEDodo",
        ru: "\u041F\u0435\u0440\u0438\u043E\u0434\u044B",
        zh: "\u5468\u671F"
      }
    },
    {
      label: "period",
      translations: {
        en_US: "Period",
        fr: "P\xE9riode",
        nl: "Periode",
        de: "Zeitraum",
        es: "Periodo",
        it: "Periodo",
        ja: "\u671F\u9593",
        pt: "Per\xEDodo",
        ru: "\u041F\u0435\u0440\u0438\u043E\u0434",
        zh: "\u5468\u671F"
      }
    },
    {
      label: "product_name_therapeutic_area",
      translations: {
        en_US: "Product/Therapeutic Area",
        fr: "P\xE9riodes"
      }
    },
    {
      label: "actioned",
      translations: {en_US: "Actioned"}
    },
    {
      label: "not_actioned",
      translations: {en_US: "Not Actioned"}
    },
    {
      label: "ytd",
      translations: {
        en_US: "YTD",
        fr: "Cumul ann\xE9e",
        ja: "\u4ECA\u5E74\u5EA6\u7D2F\u8A08"
      }
    },
    {
      label: "yes",
      translations: {
        en_US: "Yes",
        de: "Ja",
        es: "S\xED",
        fr: "Oui",
        it: "Si",
        ja: "\u306F\u3044",
        nl: "Ja",
        pt: "Sim",
        ru: "\u0414\u0430",
        zh: "\u662F"
      }
    },
    {
      label: "no",
      translations: {
        en_US: "No",
        de: "Nein",
        es: "No",
        fr: "Non",
        it: "No",
        ja: "\u3044\u3044\u3048",
        nl: "Nee",
        pt: "N\xE3o",
        ru: "\u041D\u0435\u0442",
        zh: "\u5426"
      }
    },
    {
      label: "total",
      translations: {en_US: "Total"}
    },
    {
      label: "totals",
      translations: {
        en_US: "Totals",
        de: "Summen",
        es: "Totales",
        fr: "Totaux",
        it: "Totali",
        ja: "\u5408\u8A08",
        nl: "Totalen",
        pt: "Total",
        ru: "\u0412\u0441\u0435\u0433\u043E",
        zh: "\u603B\u8BA1"
      }
    },
    {
      label: "year",
      translations: {
        en_US: "Year",
        de: "Jahr",
        es: "A\xF1o",
        fr: "Ann\xE9e",
        it: "Anno",
        ja: "\u5E74",
        nl: "Jaar",
        pt: "Ano",
        ru: "\u0413\u043E\u0434",
        zh: "\u6708"
      }
    },
    {
      label: "months",
      translations: {
        en_US: "Months",
        de: "Monate",
        es: "Meses",
        fr: "Mois",
        it: "Mesi",
        ja: "\u6708",
        nl: "Maanden",
        pt: "Meses",
        ru: "\u041C\u0435\u0441\u044F\u0446",
        zh: "\u5E74"
      }
    },
    {
      label: "x_months",
      translations: {
        en_US: "{0} Months",
        de: "{0} Monate",
        es: "{0} Meses",
        fr: "{0} Mois",
        it: "{0} Mesi",
        ja: "{0} \u30F6\u6708",
        nl: "{0} Maanden",
        pt: "{0} Meses",
        ru: "{0} \u043C\u0435\u0441\u044F\u0446\u0435\u0432",
        zh: "\u8FC7\u53BB{0}\u6708"
      }
    },
    {
      label: "month_0",
      translations: {
        en_US: "January",
        nl: "Januari",
        de: "Januar",
        fr: "Janvier",
        es: "Enero",
        zh: "\u4E00\u6708"
      }
    },
    {
      label: "month_1",
      translations: {
        en_US: "February",
        nl: "Februari",
        de: "Februar",
        fr: "F\xE9vrier",
        es: "Febrero",
        zh: "\u4E8C\u6708"
      }
    },
    {
      label: "month_2",
      translations: {
        en_US: "March",
        nl: "Maart",
        de: "M\xE4rz",
        fr: "Mars",
        es: "Marzo",
        zh: "\u4E09\u6708"
      }
    },
    {
      label: "month_3",
      translations: {
        en_US: "April",
        nl: "April",
        de: "April",
        fr: "Avril",
        es: "Abril",
        zh: "\u56DB\u6708"
      }
    },
    {
      label: "month_4",
      translations: {
        en_US: "May",
        nl: "Mei",
        de: "Mai",
        fr: "Mai",
        es: "Mayo",
        zh: "\u4E94\u6708"
      }
    },
    {
      label: "month_5",
      translations: {
        en_US: "June",
        nl: "Juni",
        de: "Juni",
        fr: "Juin",
        es: "Junio",
        zh: "\u516D\u6708"
      }
    },
    {
      label: "month_6",
      translations: {
        en_US: "July",
        nl: "Juli",
        de: "Juli",
        fr: "Juillet",
        es: "Julio",
        zh: "\u4E03\u6708"
      }
    },
    {
      label: "month_7",
      translations: {
        en_US: "August",
        nl: "Augustus",
        de: "August",
        fr: "Ao\xFBt",
        es: "Agosto",
        zh: "\u516B\u6708"
      }
    },
    {
      label: "month_8",
      translations: {
        en_US: "September",
        nl: "September",
        de: "September",
        fr: "Septembre",
        es: "Septiembre",
        zh: "\u4E5D\u6708"
      }
    },
    {
      label: "month_9",
      translations: {
        en_US: "October",
        nl: "Oktober",
        de: "Oktober",
        fr: "Octobre",
        es: "Octubre",
        zh: "\u5341\u6708"
      }
    },
    {
      label: "month_10",
      translations: {
        en_US: "November",
        nl: "November",
        de: "November",
        fr: "Novembre",
        es: "Noviembre",
        zh: "\u5341\u4E00\u6708"
      }
    },
    {
      label: "month_11",
      translations: {
        en_US: "December",
        nl: "December",
        de: "Dezember",
        fr: "D\xE9cembre",
        es: "Diciembre",
        zh: "\u5341\u4E8C\u6708"
      }
    },
    {
      label: "previous_quarter",
      translations: {
        en_US: "Previous Quarter",
        de: "Letztes Quartal",
        es: "Trimestre precediente",
        fr: "Trimestre Pr\xE9c\xE9dent",
        it: "Trimestre precedente",
        ja: "\u524D\u56DB\u534A\u671F",
        nl: "Vorige kwartaal",
        zh: "\u4E0A\u5B63\u5EA6"
      }
    },
    {
      label: "priority",
      translations: {
        en_US: "Priority",
        de: "Kategorie",
        es: "Prioridad",
        fr: "Priorit\xE9",
        it: "Priorit\xE0",
        ja: "\u30BB\u30B0\u30E1\u30F3\u30C8",
        nl: "Prioriteit",
        pt: "Prioridade",
        ru: "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442",
        zh: "\u5BA2\u6237\u5206\u7C7B"
      }
    },
    {
      label: "weekdays",
      translations: {
        en_US: "Weekdays",
        de: "Wochentage",
        fr: "Jours de semaine",
        es: "Dias laborables",
        it: "Giorni lavorativi",
        ja: "\u7A3C\u50CD\u65E5",
        nl: "Weekdagen",
        pt: "Dias \xFAteis",
        ru: "\u0412\u044B\u0445\u043E\u0434\u043D\u044B\u0435",
        zh: "\u5DE5\u4F5C\u65E5"
      }
    },
    {
      label: "x_last_days",
      translations: {
        en_US: "Last {0} Days",
        de: "Letzten\xA0{0} Tage",
        fr: "{0} derniers jours",
        ja: "\u76F4\u8FD1 {0} \u65E5\u5206",
        nl: "Laatste {0} Dagen",
        pt: "\xFAltimos {0} dias",
        zh: "\u6700\u8FD1{0} \u5929"
      }
    },
    {
      label: "x_last_months",
      translations: {
        en_US: "Last {0} Months",
        de: "Letzten {0} Monate",
        fr: "{0} derniers mois",
        nl: "Laatste {0} Maanden",
        ja: "\u76F4\u8FD1 {0} \u30F6\u6708\u5206",
        pt: "\xFAltimos {0} meses",
        zh: "\u6700\u8FD1{0} \u6708"
      }
    },
    {
      label: "target",
      translations: {
        en_US: "Target",
        de: "Ziele",
        nl: "Doel",
        fr: "Objectif"
      }
    },
    {
      label: "last_call_date",
      translations: {
        en_US: "Last Call Date",
        de: "Letztes Besuchsdatum",
        es: "Fecha de \xFAltima visita",
        fr: "Date de derni\xE8re visite",
        it: "Data ultima visita",
        ja: "\u76F4\u8FD1\u306E\u8A2A\u554F\u65E5",
        nl: "Laatste bezoek datum",
        pt: "Data da \xDAlima Visita",
        ru: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0432\u0438\u0437\u0438\u0442",
        zh: "\u6700\u8FD1\u4E00\u6B21\u62DC\u8BBF\u65E5\u671F"
      }
    },
    {
      label: "unavailable_for_business_accounts",
      translations: {
        en_US: "This report is not available for Business Accounts",
        de: "Dieser Bericht ist nicht f\xFCr Accounts verf\xFCgbar",
        fr: "Ce rapport n'est pas disponible pour les comptes.",
        ja: "\u3053\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u3067\u306F\u8868\u793A\u3067\u304D\u307E\u305B\u3093",
        pt: "indispon\xEDvel para contas neg\xF3cio",
        zh: "\u5BA2\u6237\u4E0D\u53EF\u4F7F\u7528"
      }
    },
    {
      label: "view_more",
      translations: {
        en_US: "View More",
        de: "Mehr anzeigen",
        es: "Ver mas",
        fr: "Voir plus",
        it: "Leggi di pi\xF9",
        ja: "\u3055\u3089\u306B\u8868\u793A",
        nl: "Bekijk meer",
        pt: "Ver Mais",
        ru: "\u0411\u043E\u043B\u044C\u0448\u0435",
        zh: "\u66F4\u591A"
      }
    }
  ];
  const none = {...translationValues.find((t) => t.label === "None")};
  none.label = "none";
  translationValues.push(none);
  var translationValues_default = translationValues;

  // app/ui/formatters/currencyFormatter.js
  function currencyFormatter(userLanguage, countryCode, currencyIsoCode, options = {}) {
    const currencyFormatter3 = new Intl.NumberFormat(userLanguage + "-" + countryCode, Object.assign({
      style: "currency",
      currency: currencyIsoCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }, options));
    return function(value) {
      return currencyFormatter3.format(value);
    };
  }

  // app/translations.js
  function getTranslation(locale5, fallbackLanguage, allTranslations, name, ...args) {
    const labelTranslations = allTranslations.filter(function(translation) {
      return translation.label === name;
    });
    if (labelTranslations.length === 0) {
      console.error("Could not find any translation for " + name);
      return name;
    }
    const preferredTranslation = labelTranslations.find((t) => t.translations.hasOwnProperty(locale5));
    if (preferredTranslation) {
      return format(preferredTranslation.translations[locale5], args);
    }
    if (locale5.includes("_")) {
      const languageOnlyLocale = locale5.split("_")[0];
      const lanuageOnlyTranslation = labelTranslations.find((t) => t.translations.hasOwnProperty(languageOnlyLocale));
      if (lanuageOnlyTranslation) {
        return format(lanuageOnlyTranslation.translations[languageOnlyLocale], args);
      }
    }
    const fallbackTranslation = labelTranslations.find((t) => t.translations.hasOwnProperty(fallbackLanguage));
    return format(fallbackTranslation.translations[fallbackLanguage], args);
  }
  function translations_default(locale5, customTranslations = [], formatLocale) {
    const _formatLocale = formatLocale || locale5;
    const _translations = customTranslations.concat(translationValues_default);
    const translator = getTranslation.bind(null, locale5, "en_US", _translations);
    const isoLocale = _formatLocale.replace("_", "-");
    translator.number = new Intl.NumberFormat(isoLocale, {maximumFractionDigits: 0});
    translator.percent = new Intl.NumberFormat(isoLocale, {
      maximumFractionDigits: 0,
      style: "percent"
    });
    translator.getTranslation = getTranslation.bind(null, locale5, _translations);
    translator.date = new Intl.DateTimeFormat(isoLocale, {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    });
    translator.dateTime = new Intl.DateTimeFormat(isoLocale, {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
    translator.newNumberFormatter = function(options = {}) {
      return new Intl.NumberFormat(isoLocale, options);
    };
    translator.newCurrencyFormatter = currencyFormatter.bind(null, ...isoLocale.split("-"));
    window.getTranslation = translator;
    return translator;
  }
  function format(string, args) {
    if (args.length === 0) {
      return string;
    }
    return args.reduce((output, arg, i) => {
      return output.replace(`{${i}}`, arg);
    }, string);
  }

  // DEMO/index.js
  const moment5 = __toModule(require_moment());

  // node_modules/moment/src/lib/utils/hooks.js
  var hookCallback;
  function hooks() {
    return hookCallback.apply(null, arguments);
  }
  function setHookCallback(callback) {
    hookCallback = callback;
  }

  // node_modules/moment/src/lib/utils/is-array.js
  function isArray12(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
  }

  // node_modules/moment/src/lib/utils/is-object.js
  function isObject5(input) {
    return input != null && Object.prototype.toString.call(input) === "[object Object]";
  }

  // node_modules/moment/src/lib/utils/has-own-prop.js
  function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }

  // node_modules/moment/src/lib/utils/is-object-empty.js
  function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
      return Object.getOwnPropertyNames(obj).length === 0;
    } else {
      var k;
      for (k in obj) {
        if (hasOwnProp(obj, k)) {
          return false;
        }
      }
      return true;
    }
  }

  // node_modules/moment/src/lib/utils/is-undefined.js
  function isUndefined(input) {
    return input === void 0;
  }

  // node_modules/moment/src/lib/utils/is-number.js
  function isNumber(input) {
    return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
  }

  // node_modules/moment/src/lib/utils/is-date.js
  function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
  }

  // node_modules/moment/src/lib/utils/map.js
  function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
      res.push(fn(arr[i], i));
    }
    return res;
  }

  // node_modules/moment/src/lib/utils/extend.js
  function extend(a, b) {
    for (var i in b) {
      if (hasOwnProp(b, i)) {
        a[i] = b[i];
      }
    }
    if (hasOwnProp(b, "toString")) {
      a.toString = b.toString;
    }
    if (hasOwnProp(b, "valueOf")) {
      a.valueOf = b.valueOf;
    }
    return a;
  }

  // node_modules/moment/src/lib/create/utc.js
  function createUTC(input, format23, locale5, strict) {
    return createLocalOrUTC(input, format23, locale5, strict, true).utc();
  }

  // node_modules/moment/src/lib/create/parsing-flags.js
  function defaultParsingFlags() {
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: false,
      weekdayMismatch: false
    };
  }
  function getParsingFlags(m) {
    if (m._pf == null) {
      m._pf = defaultParsingFlags();
    }
    return m._pf;
  }

  // node_modules/moment/src/lib/utils/some.js
  var some;
  if (Array.prototype.some) {
    some = Array.prototype.some;
  } else {
    some = function(fun) {
      var t = Object(this), len = t.length >>> 0, i;
      for (i = 0; i < len; i++) {
        if (i in t && fun.call(this, t[i], i, t)) {
          return true;
        }
      }
      return false;
    };
  }

  // node_modules/moment/src/lib/create/valid.js
  function isValid(m) {
    if (m._isValid == null) {
      var flags = getParsingFlags(m), parsedParts = some.call(flags.parsedDateParts, function(i) {
        return i != null;
      }), isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
      if (m._strict) {
        isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
      }
      if (Object.isFrozen == null || !Object.isFrozen(m)) {
        m._isValid = isNowValid;
      } else {
        return isNowValid;
      }
    }
    return m._isValid;
  }
  function createInvalid(flags) {
    var m = createUTC(NaN);
    if (flags != null) {
      extend(getParsingFlags(m), flags);
    } else {
      getParsingFlags(m).userInvalidated = true;
    }
    return m;
  }

  // node_modules/moment/src/lib/moment/constructor.js
  var momentProperties = hooks.momentProperties = [];
  var updateInProgress = false;
  function copyConfig(to3, from3) {
    var i, prop, val;
    if (!isUndefined(from3._isAMomentObject)) {
      to3._isAMomentObject = from3._isAMomentObject;
    }
    if (!isUndefined(from3._i)) {
      to3._i = from3._i;
    }
    if (!isUndefined(from3._f)) {
      to3._f = from3._f;
    }
    if (!isUndefined(from3._l)) {
      to3._l = from3._l;
    }
    if (!isUndefined(from3._strict)) {
      to3._strict = from3._strict;
    }
    if (!isUndefined(from3._tzm)) {
      to3._tzm = from3._tzm;
    }
    if (!isUndefined(from3._isUTC)) {
      to3._isUTC = from3._isUTC;
    }
    if (!isUndefined(from3._offset)) {
      to3._offset = from3._offset;
    }
    if (!isUndefined(from3._pf)) {
      to3._pf = getParsingFlags(from3);
    }
    if (!isUndefined(from3._locale)) {
      to3._locale = from3._locale;
    }
    if (momentProperties.length > 0) {
      for (i = 0; i < momentProperties.length; i++) {
        prop = momentProperties[i];
        val = from3[prop];
        if (!isUndefined(val)) {
          to3[prop] = val;
        }
      }
    }
    return to3;
  }
  function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
      this._d = new Date(NaN);
    }
    if (updateInProgress === false) {
      updateInProgress = true;
      hooks.updateOffset(this);
      updateInProgress = false;
    }
  }
  function isMoment(obj) {
    return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
  }

  // node_modules/moment/src/lib/utils/deprecate.js
  function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
      console.warn("Deprecation warning: " + msg);
    }
  }
  function deprecate(msg, fn) {
    var firstTime = true;
    return extend(function() {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(null, msg);
      }
      if (firstTime) {
        var args = [], arg, i, key;
        for (i = 0; i < arguments.length; i++) {
          arg = "";
          if (typeof arguments[i] === "object") {
            arg += "\n[" + i + "] ";
            for (key in arguments[0]) {
              if (hasOwnProp(arguments[0], key)) {
                arg += key + ": " + arguments[0][key] + ", ";
              }
            }
            arg = arg.slice(0, -2);
          } else {
            arg = arguments[i];
          }
          args.push(arg);
        }
        warn(msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack);
        firstTime = false;
      }
      return fn.apply(this, arguments);
    }, fn);
  }
  var deprecations = {};
  function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
      warn(msg);
      deprecations[name] = true;
    }
  }
  hooks.suppressDeprecationWarnings = false;
  hooks.deprecationHandler = null;

  // node_modules/moment/src/lib/utils/is-function.js
  function isFunction4(input) {
    return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
  }

  // node_modules/moment/src/lib/locale/set.js
  function set(config) {
    var prop, i;
    for (i in config) {
      if (hasOwnProp(config, i)) {
        prop = config[i];
        if (isFunction4(prop)) {
          this[i] = prop;
        } else {
          this["_" + i] = prop;
        }
      }
    }
    this._config = config;
    this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
  }
  function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
      if (hasOwnProp(childConfig, prop)) {
        if (isObject5(parentConfig[prop]) && isObject5(childConfig[prop])) {
          res[prop] = {};
          extend(res[prop], parentConfig[prop]);
          extend(res[prop], childConfig[prop]);
        } else if (childConfig[prop] != null) {
          res[prop] = childConfig[prop];
        } else {
          delete res[prop];
        }
      }
    }
    for (prop in parentConfig) {
      if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject5(parentConfig[prop])) {
        res[prop] = extend({}, res[prop]);
      }
    }
    return res;
  }

  // node_modules/moment/src/lib/locale/constructor.js
  function Locale(config) {
    if (config != null) {
      this.set(config);
    }
  }

  // node_modules/moment/src/lib/utils/keys.js
  var keys5;
  if (Object.keys) {
    keys5 = Object.keys;
  } else {
    keys5 = function(obj) {
      var i, res = [];
      for (i in obj) {
        if (hasOwnProp(obj, i)) {
          res.push(i);
        }
      }
      return res;
    };
  }

  // node_modules/moment/src/lib/locale/calendar.js
  var defaultCalendar = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  };
  function calendar(key, mom, now3) {
    var output = this._calendar[key] || this._calendar["sameElse"];
    return isFunction4(output) ? output.call(mom, now3) : output;
  }

  // node_modules/moment/src/lib/utils/zero-fill.js
  function zeroFill(number, targetLength, forceSign) {
    var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
    return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
  }

  // node_modules/moment/src/lib/format/format.js
  var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
  var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
  var formatFunctions = {};
  var formatTokenFunctions = {};
  function addFormatToken(token18, padded, ordinal4, callback) {
    var func = callback;
    if (typeof callback === "string") {
      func = function() {
        return this[callback]();
      };
    }
    if (token18) {
      formatTokenFunctions[token18] = func;
    }
    if (padded) {
      formatTokenFunctions[padded[0]] = function() {
        return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
      };
    }
    if (ordinal4) {
      formatTokenFunctions[ordinal4] = function() {
        return this.localeData().ordinal(func.apply(this, arguments), token18);
      };
    }
  }
  function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|\]$/g, "");
    }
    return input.replace(/\\/g, "");
  }
  function makeFormatFunction(format23) {
    var array = format23.match(formattingTokens), i, length;
    for (i = 0, length = array.length; i < length; i++) {
      if (formatTokenFunctions[array[i]]) {
        array[i] = formatTokenFunctions[array[i]];
      } else {
        array[i] = removeFormattingTokens(array[i]);
      }
    }
    return function(mom) {
      var output = "", i2;
      for (i2 = 0; i2 < length; i2++) {
        output += isFunction4(array[i2]) ? array[i2].call(mom, format23) : array[i2];
      }
      return output;
    };
  }
  function formatMoment(m, format23) {
    if (!m.isValid()) {
      return m.localeData().invalidDate();
    }
    format23 = expandFormat(format23, m.localeData());
    formatFunctions[format23] = formatFunctions[format23] || makeFormatFunction(format23);
    return formatFunctions[format23](m);
  }
  function expandFormat(format23, locale5) {
    var i = 5;
    function replaceLongDateFormatTokens(input) {
      return locale5.longDateFormat(input) || input;
    }
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format23)) {
      format23 = format23.replace(localFormattingTokens, replaceLongDateFormatTokens);
      localFormattingTokens.lastIndex = 0;
      i -= 1;
    }
    return format23;
  }

  // node_modules/moment/src/lib/locale/formats.js
  var defaultLongDateFormat = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  };
  function longDateFormat(key) {
    var format23 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
    if (format23 || !formatUpper) {
      return format23;
    }
    this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
      if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
        return tok.slice(1);
      }
      return tok;
    }).join("");
    return this._longDateFormat[key];
  }

  // node_modules/moment/src/lib/locale/invalid.js
  var defaultInvalidDate = "Invalid date";
  function invalidDate() {
    return this._invalidDate;
  }

  // node_modules/moment/src/lib/locale/ordinal.js
  var defaultOrdinal = "%d";
  var defaultDayOfMonthOrdinalParse = /\d{1,2}/;
  function ordinal(number) {
    return this._ordinal.replace("%d", number);
  }

  // node_modules/moment/src/lib/locale/relative.js
  var defaultRelativeTime = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  };
  function relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return isFunction4(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
  }
  function pastFuture(diff3, output) {
    var format23 = this._relativeTime[diff3 > 0 ? "future" : "past"];
    return isFunction4(format23) ? format23(output) : format23.replace(/%s/i, output);
  }

  // node_modules/moment/src/lib/units/aliases.js
  var aliases = {};
  function addUnitAlias(unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
  }
  function normalizeUnits(units2) {
    return typeof units2 === "string" ? aliases[units2] || aliases[units2.toLowerCase()] : void 0;
  }
  function normalizeObjectUnits(inputObject) {
    var normalizedInput = {}, normalizedProp, prop;
    for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);
        if (normalizedProp) {
          normalizedInput[normalizedProp] = inputObject[prop];
        }
      }
    }
    return normalizedInput;
  }

  // node_modules/moment/src/lib/units/priorities.js
  var priorities = {};
  function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
  }
  function getPrioritizedUnits(unitsObj) {
    var units2 = [], u;
    for (u in unitsObj) {
      if (hasOwnProp(unitsObj, u)) {
        units2.push({unit: u, priority: priorities[u]});
      }
    }
    units2.sort(function(a, b) {
      return a.priority - b.priority;
    });
    return units2;
  }

  // node_modules/moment/src/lib/utils/is-leap-year.js
  function isLeapYear(year5) {
    return year5 % 4 === 0 && year5 % 100 !== 0 || year5 % 400 === 0;
  }

  // node_modules/moment/src/lib/utils/abs-floor.js
  function absFloor(number) {
    if (number < 0) {
      return Math.ceil(number) || 0;
    } else {
      return Math.floor(number);
    }
  }

  // node_modules/moment/src/lib/utils/to-int.js
  function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion, value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      value = absFloor(coercedNumber);
    }
    return value;
  }

  // node_modules/moment/src/lib/moment/get-set.js
  function makeGetSet(unit, keepTime) {
    return function(value) {
      if (value != null) {
        set2(this, unit, value);
        hooks.updateOffset(this, keepTime);
        return this;
      } else {
        return get3(this, unit);
      }
    };
  }
  function get3(mom, unit) {
    return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN;
  }
  function set2(mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
      if (unit === "FullYear" && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
        value = toInt(value);
        mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value, mom.month(), daysInMonth(value, mom.month()));
      } else {
        mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
      }
    }
  }
  function stringGet(units2) {
    units2 = normalizeUnits(units2);
    if (isFunction4(this[units2])) {
      return this[units2]();
    }
    return this;
  }
  function stringSet(units2, value) {
    if (typeof units2 === "object") {
      units2 = normalizeObjectUnits(units2);
      var prioritized = getPrioritizedUnits(units2), i;
      for (i = 0; i < prioritized.length; i++) {
        this[prioritized[i].unit](units2[prioritized[i].unit]);
      }
    } else {
      units2 = normalizeUnits(units2);
      if (isFunction4(this[units2])) {
        return this[units2](value);
      }
    }
    return this;
  }

  // node_modules/moment/src/lib/parse/regex.js
  var match1 = /\d/;
  var match2 = /\d\d/;
  var match3 = /\d{3}/;
  var match4 = /\d{4}/;
  var match6 = /[+-]?\d{6}/;
  var match1to2 = /\d\d?/;
  var match3to4 = /\d\d\d\d?/;
  var match5to6 = /\d\d\d\d\d\d?/;
  var match1to3 = /\d{1,3}/;
  var match1to4 = /\d{1,4}/;
  var match1to6 = /[+-]?\d{1,6}/;
  var matchUnsigned = /\d+/;
  var matchSigned = /[+-]?\d+/;
  var matchOffset = /Z|[+-]\d\d:?\d\d/gi;
  var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi;
  var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/;
  var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
  var regexes;
  regexes = {};
  function addRegexToken(token18, regex17, strictRegex) {
    regexes[token18] = isFunction4(regex17) ? regex17 : function(isStrict, localeData2) {
      return isStrict && strictRegex ? strictRegex : regex17;
    };
  }
  function getParseRegexForToken(token18, config) {
    if (!hasOwnProp(regexes, token18)) {
      return new RegExp(unescapeFormat(token18));
    }
    return regexes[token18](config._strict, config._locale);
  }
  function unescapeFormat(s) {
    return regexEscape(s.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
      return p1 || p2 || p3 || p4;
    }));
  }
  function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }

  // node_modules/moment/src/lib/parse/token.js
  var tokens = {};
  function addParseToken(token18, callback) {
    var i, func = callback;
    if (typeof token18 === "string") {
      token18 = [token18];
    }
    if (isNumber(callback)) {
      func = function(input, array) {
        array[callback] = toInt(input);
      };
    }
    for (i = 0; i < token18.length; i++) {
      tokens[token18[i]] = func;
    }
  }
  function addWeekParseToken(token18, callback) {
    addParseToken(token18, function(input, array, config, token19) {
      config._w = config._w || {};
      callback(input, config._w, config, token19);
    });
  }
  function addTimeToArrayFromToken(token18, input, config) {
    if (input != null && hasOwnProp(tokens, token18)) {
      tokens[token18](input, config._a, config, token18);
    }
  }

  // node_modules/moment/src/lib/units/constants.js
  var YEAR = 0;
  var MONTH = 1;
  var DATE = 2;
  var HOUR = 3;
  var MINUTE = 4;
  var SECOND = 5;
  var MILLISECOND = 6;
  var WEEK = 7;
  var WEEKDAY = 8;

  // node_modules/moment/src/lib/utils/mod.js
  function mod(n, x) {
    return (n % x + x) % x;
  }

  // node_modules/moment/src/lib/utils/index-of.js
  var indexOf;
  if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function(o) {
      var i;
      for (i = 0; i < this.length; ++i) {
        if (this[i] === o) {
          return i;
        }
      }
      return -1;
    };
  }

  // node_modules/moment/src/lib/units/month.js
  function daysInMonth(year5, month9) {
    if (isNaN(year5) || isNaN(month9)) {
      return NaN;
    }
    var modMonth = mod(month9, 12);
    year5 += (month9 - modMonth) / 12;
    return modMonth === 1 ? isLeapYear(year5) ? 29 : 28 : 31 - modMonth % 7 % 2;
  }
  addFormatToken("M", ["MM", 2], "Mo", function() {
    return this.month() + 1;
  });
  addFormatToken("MMM", 0, 0, function(format23) {
    return this.localeData().monthsShort(this, format23);
  });
  addFormatToken("MMMM", 0, 0, function(format23) {
    return this.localeData().months(this, format23);
  });
  addUnitAlias("month", "M");
  addUnitPriority("month", 8);
  addRegexToken("M", match1to2);
  addRegexToken("MM", match1to2, match2);
  addRegexToken("MMM", function(isStrict, locale5) {
    return locale5.monthsShortRegex(isStrict);
  });
  addRegexToken("MMMM", function(isStrict, locale5) {
    return locale5.monthsRegex(isStrict);
  });
  addParseToken(["M", "MM"], function(input, array) {
    array[MONTH] = toInt(input) - 1;
  });
  addParseToken(["MMM", "MMMM"], function(input, array, config, token18) {
    var month9 = config._locale.monthsParse(input, token18, config._strict);
    if (month9 != null) {
      array[MONTH] = month9;
    } else {
      getParsingFlags(config).invalidMonth = input;
    }
  });
  var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
  var defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
  var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
  var defaultMonthsShortRegex = matchWord;
  var defaultMonthsRegex = matchWord;
  function localeMonths(m, format23) {
    if (!m) {
      return isArray12(this._months) ? this._months : this._months["standalone"];
    }
    return isArray12(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format23) ? "format" : "standalone"][m.month()];
  }
  function localeMonthsShort(m, format23) {
    if (!m) {
      return isArray12(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
    }
    return isArray12(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format23) ? "format" : "standalone"][m.month()];
  }
  function handleStrictParse(monthName, format23, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
      for (i = 0; i < 12; ++i) {
        mom = createUTC([2e3, i]);
        this._shortMonthsParse[i] = this.monthsShort(mom, "").toLocaleLowerCase();
        this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format23 === "MMM") {
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format23 === "MMM") {
        ii = indexOf.call(this._shortMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }
  function localeMonthsParse(monthName, format23, strict) {
    var i, mom, regex17;
    if (this._monthsParseExact) {
      return handleStrictParse.call(this, monthName, format23, strict);
    }
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    }
    for (i = 0; i < 12; i++) {
      mom = createUTC([2e3, i]);
      if (strict && !this._longMonthsParse[i]) {
        this._longMonthsParse[i] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$", "i");
        this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$", "i");
      }
      if (!strict && !this._monthsParse[i]) {
        regex17 = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
        this._monthsParse[i] = new RegExp(regex17.replace(".", ""), "i");
      }
      if (strict && format23 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
        return i;
      } else if (strict && format23 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
        return i;
      } else if (!strict && this._monthsParse[i].test(monthName)) {
        return i;
      }
    }
  }
  function setMonth(mom, value) {
    var dayOfMonth;
    if (!mom.isValid()) {
      return mom;
    }
    if (typeof value === "string") {
      if (/^\d+$/.test(value)) {
        value = toInt(value);
      } else {
        value = mom.localeData().monthsParse(value);
        if (!isNumber(value)) {
          return mom;
        }
      }
    }
    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
    return mom;
  }
  function getSetMonth(value) {
    if (value != null) {
      setMonth(this, value);
      hooks.updateOffset(this, true);
      return this;
    } else {
      return get3(this, "Month");
    }
  }
  function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
  }
  function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, "_monthsRegex")) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    } else {
      if (!hasOwnProp(this, "_monthsShortRegex")) {
        this._monthsShortRegex = defaultMonthsShortRegex;
      }
      return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
    }
  }
  function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, "_monthsRegex")) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    } else {
      if (!hasOwnProp(this, "_monthsRegex")) {
        this._monthsRegex = defaultMonthsRegex;
      }
      return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
    }
  }
  function computeMonthsParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
    for (i = 0; i < 12; i++) {
      mom = createUTC([2e3, i]);
      shortPieces.push(this.monthsShort(mom, ""));
      longPieces.push(this.months(mom, ""));
      mixedPieces.push(this.months(mom, ""));
      mixedPieces.push(this.monthsShort(mom, ""));
    }
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }
    this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
    this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
  }

  // node_modules/moment/src/lib/units/year.js
  addFormatToken("Y", 0, 0, function() {
    var y = this.year();
    return y <= 9999 ? zeroFill(y, 4) : "+" + y;
  });
  addFormatToken(0, ["YY", 2], 0, function() {
    return this.year() % 100;
  });
  addFormatToken(0, ["YYYY", 4], 0, "year");
  addFormatToken(0, ["YYYYY", 5], 0, "year");
  addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
  addUnitAlias("year", "y");
  addUnitPriority("year", 1);
  addRegexToken("Y", matchSigned);
  addRegexToken("YY", match1to2, match2);
  addRegexToken("YYYY", match1to4, match4);
  addRegexToken("YYYYY", match1to6, match6);
  addRegexToken("YYYYYY", match1to6, match6);
  addParseToken(["YYYYY", "YYYYYY"], YEAR);
  addParseToken("YYYY", function(input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
  });
  addParseToken("YY", function(input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
  });
  addParseToken("Y", function(input, array) {
    array[YEAR] = parseInt(input, 10);
  });
  function daysInYear(year5) {
    return isLeapYear(year5) ? 366 : 365;
  }
  hooks.parseTwoDigitYear = function(input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
  };
  var getSetYear = makeGetSet("FullYear", true);
  function getIsLeapYear() {
    return isLeapYear(this.year());
  }

  // node_modules/moment/src/lib/create/date-from-array.js
  function createDate(y, m, d, h, M, s, ms) {
    var date;
    if (y < 100 && y >= 0) {
      date = new Date(y + 400, m, d, h, M, s, ms);
      if (isFinite(date.getFullYear())) {
        date.setFullYear(y);
      }
    } else {
      date = new Date(y, m, d, h, M, s, ms);
    }
    return date;
  }
  function createUTCDate(y) {
    var date, args;
    if (y < 100 && y >= 0) {
      args = Array.prototype.slice.call(arguments);
      args[0] = y + 400;
      date = new Date(Date.UTC.apply(null, args));
      if (isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
      }
    } else {
      date = new Date(Date.UTC.apply(null, arguments));
    }
    return date;
  }

  // node_modules/moment/src/lib/units/week-calendar-utils.js
  function firstWeekOffset(year5, dow, doy) {
    var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year5, 0, fwd).getUTCDay() - dow) % 7;
    return -fwdlw + fwd - 1;
  }
  function dayOfYearFromWeeks(year5, week5, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year5, dow, doy), dayOfYear = 1 + 7 * (week5 - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
    if (dayOfYear <= 0) {
      resYear = year5 - 1;
      resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year5)) {
      resYear = year5 + 1;
      resDayOfYear = dayOfYear - daysInYear(year5);
    } else {
      resYear = year5;
      resDayOfYear = dayOfYear;
    }
    return {
      year: resYear,
      dayOfYear: resDayOfYear
    };
  }
  function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy), week5 = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
    if (week5 < 1) {
      resYear = mom.year() - 1;
      resWeek = week5 + weeksInYear(resYear, dow, doy);
    } else if (week5 > weeksInYear(mom.year(), dow, doy)) {
      resWeek = week5 - weeksInYear(mom.year(), dow, doy);
      resYear = mom.year() + 1;
    } else {
      resYear = mom.year();
      resWeek = week5;
    }
    return {
      week: resWeek,
      year: resYear
    };
  }
  function weeksInYear(year5, dow, doy) {
    var weekOffset = firstWeekOffset(year5, dow, doy), weekOffsetNext = firstWeekOffset(year5 + 1, dow, doy);
    return (daysInYear(year5) - weekOffset + weekOffsetNext) / 7;
  }

  // node_modules/moment/src/lib/units/week.js
  addFormatToken("w", ["ww", 2], "wo", "week");
  addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
  addUnitAlias("week", "w");
  addUnitAlias("isoWeek", "W");
  addUnitPriority("week", 5);
  addUnitPriority("isoWeek", 5);
  addRegexToken("w", match1to2);
  addRegexToken("ww", match1to2, match2);
  addRegexToken("W", match1to2);
  addRegexToken("WW", match1to2, match2);
  addWeekParseToken(["w", "ww", "W", "WW"], function(input, week5, config, token18) {
    week5[token18.substr(0, 1)] = toInt(input);
  });
  function localeWeek(mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }
  var defaultLocaleWeek = {
    dow: 0,
    doy: 6
  };
  function localeFirstDayOfWeek() {
    return this._week.dow;
  }
  function localeFirstDayOfYear() {
    return this._week.doy;
  }
  function getSetWeek(input) {
    var week5 = this.localeData().week(this);
    return input == null ? week5 : this.add((input - week5) * 7, "d");
  }
  function getSetISOWeek(input) {
    var week5 = weekOfYear(this, 1, 4).week;
    return input == null ? week5 : this.add((input - week5) * 7, "d");
  }

  // node_modules/moment/src/lib/units/day-of-week.js
  addFormatToken("d", 0, "do", "day");
  addFormatToken("dd", 0, 0, function(format23) {
    return this.localeData().weekdaysMin(this, format23);
  });
  addFormatToken("ddd", 0, 0, function(format23) {
    return this.localeData().weekdaysShort(this, format23);
  });
  addFormatToken("dddd", 0, 0, function(format23) {
    return this.localeData().weekdays(this, format23);
  });
  addFormatToken("e", 0, 0, "weekday");
  addFormatToken("E", 0, 0, "isoWeekday");
  addUnitAlias("day", "d");
  addUnitAlias("weekday", "e");
  addUnitAlias("isoWeekday", "E");
  addUnitPriority("day", 11);
  addUnitPriority("weekday", 11);
  addUnitPriority("isoWeekday", 11);
  addRegexToken("d", match1to2);
  addRegexToken("e", match1to2);
  addRegexToken("E", match1to2);
  addRegexToken("dd", function(isStrict, locale5) {
    return locale5.weekdaysMinRegex(isStrict);
  });
  addRegexToken("ddd", function(isStrict, locale5) {
    return locale5.weekdaysShortRegex(isStrict);
  });
  addRegexToken("dddd", function(isStrict, locale5) {
    return locale5.weekdaysRegex(isStrict);
  });
  addWeekParseToken(["dd", "ddd", "dddd"], function(input, week5, config, token18) {
    var weekday = config._locale.weekdaysParse(input, token18, config._strict);
    if (weekday != null) {
      week5.d = weekday;
    } else {
      getParsingFlags(config).invalidWeekday = input;
    }
  });
  addWeekParseToken(["d", "e", "E"], function(input, week5, config, token18) {
    week5[token18] = toInt(input);
  });
  function parseWeekday(input, locale5) {
    if (typeof input !== "string") {
      return input;
    }
    if (!isNaN(input)) {
      return parseInt(input, 10);
    }
    input = locale5.weekdaysParse(input);
    if (typeof input === "number") {
      return input;
    }
    return null;
  }
  function parseIsoWeekday(input, locale5) {
    if (typeof input === "string") {
      return locale5.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
  }
  function shiftWeekdays(ws, n) {
    return ws.slice(n, 7).concat(ws.slice(0, n));
  }
  var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
  var defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
  var defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
  var defaultWeekdaysRegex = matchWord;
  var defaultWeekdaysShortRegex = matchWord;
  var defaultWeekdaysMinRegex = matchWord;
  function localeWeekdays(m, format23) {
    var weekdays = isArray12(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format23) ? "format" : "standalone"];
    return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
  }
  function localeWeekdaysShort(m) {
    return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
  }
  function localeWeekdaysMin(m) {
    return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
  }
  function handleStrictParse2(weekdayName, format23, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];
      for (i = 0; i < 7; ++i) {
        mom = createUTC([2e3, 1]).day(i);
        this._minWeekdaysParse[i] = this.weekdaysMin(mom, "").toLocaleLowerCase();
        this._shortWeekdaysParse[i] = this.weekdaysShort(mom, "").toLocaleLowerCase();
        this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format23 === "dddd") {
        ii = indexOf.call(this._weekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format23 === "ddd") {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format23 === "dddd") {
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format23 === "ddd") {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }
  function localeWeekdaysParse(weekdayName, format23, strict) {
    var i, mom, regex17;
    if (this._weekdaysParseExact) {
      return handleStrictParse2.call(this, weekdayName, format23, strict);
    }
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }
    for (i = 0; i < 7; i++) {
      mom = createUTC([2e3, 1]).day(i);
      if (strict && !this._fullWeekdaysParse[i]) {
        this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(mom, "").replace(".", "\\.?") + "$", "i");
        this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$", "i");
        this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$", "i");
      }
      if (!this._weekdaysParse[i]) {
        regex17 = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
        this._weekdaysParse[i] = new RegExp(regex17.replace(".", ""), "i");
      }
      if (strict && format23 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format23 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format23 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
        return i;
      }
    }
  }
  function getSetDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
      input = parseWeekday(input, this.localeData());
      return this.add(input - day, "d");
    } else {
      return day;
    }
  }
  function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, "d");
  }
  function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    if (input != null) {
      var weekday = parseIsoWeekday(input, this.localeData());
      return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
      return this.day() || 7;
    }
  }
  function weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysStrictRegex;
      } else {
        return this._weekdaysRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        this._weekdaysRegex = defaultWeekdaysRegex;
      }
      return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
    }
  }
  function weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysShortStrictRegex;
      } else {
        return this._weekdaysShortRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysShortRegex")) {
        this._weekdaysShortRegex = defaultWeekdaysShortRegex;
      }
      return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
  }
  function weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysMinStrictRegex;
      } else {
        return this._weekdaysMinRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysMinRegex")) {
        this._weekdaysMinRegex = defaultWeekdaysMinRegex;
      }
      return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
  }
  function computeWeekdaysParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
      mom = createUTC([2e3, 1]).day(i);
      minp = regexEscape(this.weekdaysMin(mom, ""));
      shortp = regexEscape(this.weekdaysShort(mom, ""));
      longp = regexEscape(this.weekdays(mom, ""));
      minPieces.push(minp);
      shortPieces.push(shortp);
      longPieces.push(longp);
      mixedPieces.push(minp);
      mixedPieces.push(shortp);
      mixedPieces.push(longp);
    }
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;
    this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
    this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
    this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join("|") + ")", "i");
  }

  // node_modules/moment/src/lib/units/hour.js
  function hFormat() {
    return this.hours() % 12 || 12;
  }
  function kFormat() {
    return this.hours() || 24;
  }
  addFormatToken("H", ["HH", 2], 0, "hour");
  addFormatToken("h", ["hh", 2], 0, hFormat);
  addFormatToken("k", ["kk", 2], 0, kFormat);
  addFormatToken("hmm", 0, 0, function() {
    return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
  });
  addFormatToken("hmmss", 0, 0, function() {
    return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  addFormatToken("Hmm", 0, 0, function() {
    return "" + this.hours() + zeroFill(this.minutes(), 2);
  });
  addFormatToken("Hmmss", 0, 0, function() {
    return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  function meridiem(token18, lowercase) {
    addFormatToken(token18, 0, 0, function() {
      return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
  }
  meridiem("a", true);
  meridiem("A", false);
  addUnitAlias("hour", "h");
  addUnitPriority("hour", 13);
  function matchMeridiem(isStrict, locale5) {
    return locale5._meridiemParse;
  }
  addRegexToken("a", matchMeridiem);
  addRegexToken("A", matchMeridiem);
  addRegexToken("H", match1to2);
  addRegexToken("h", match1to2);
  addRegexToken("k", match1to2);
  addRegexToken("HH", match1to2, match2);
  addRegexToken("hh", match1to2, match2);
  addRegexToken("kk", match1to2, match2);
  addRegexToken("hmm", match3to4);
  addRegexToken("hmmss", match5to6);
  addRegexToken("Hmm", match3to4);
  addRegexToken("Hmmss", match5to6);
  addParseToken(["H", "HH"], HOUR);
  addParseToken(["k", "kk"], function(input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
  });
  addParseToken(["a", "A"], function(input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
  });
  addParseToken(["h", "hh"], function(input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
  });
  addParseToken("hmm", function(input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken("hmmss", function(input, array, config) {
    var pos1 = input.length - 4, pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken("Hmm", function(input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
  });
  addParseToken("Hmmss", function(input, array, config) {
    var pos1 = input.length - 4, pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
  });
  function localeIsPM(input) {
    return (input + "").toLowerCase().charAt(0) === "p";
  }
  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
  var getSetHour = makeGetSet("Hours", true);
  function localeMeridiem(hours2, minutes2, isLower) {
    if (hours2 > 11) {
      return isLower ? "pm" : "PM";
    } else {
      return isLower ? "am" : "AM";
    }
  }

  // node_modules/moment/src/lib/locale/base-config.js
  var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,
    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,
    week: defaultLocaleWeek,
    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,
    meridiemParse: defaultLocaleMeridiemParse
  };

  // node_modules/moment/src/lib/create/from-anything.js
  const locales = __toModule(require_locales());

  // node_modules/moment/src/lib/create/check-overflow.js
  function checkOverflow(m) {
    var overflow, a = m._a;
    if (a && getParsingFlags(m).overflow === -2) {
      overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
      if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
        overflow = DATE;
      }
      if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
        overflow = WEEK;
      }
      if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
        overflow = WEEKDAY;
      }
      getParsingFlags(m).overflow = overflow;
    }
    return m;
  }

  // node_modules/moment/src/lib/create/from-string.js
  var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
  var isoDates = [
    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
    ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
    ["YYYY-DDD", /\d{4}-\d{3}/],
    ["YYYY-MM", /\d{4}-\d\d/, false],
    ["YYYYYYMMDD", /[+-]\d{10}/],
    ["YYYYMMDD", /\d{8}/],
    ["GGGG[W]WWE", /\d{4}W\d{3}/],
    ["GGGG[W]WW", /\d{4}W\d{2}/, false],
    ["YYYYDDD", /\d{7}/],
    ["YYYYMM", /\d{6}/, false],
    ["YYYY", /\d{4}/, false]
  ];
  var isoTimes = [
    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
    ["HH:mm", /\d\d:\d\d/],
    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
    ["HHmmss", /\d\d\d\d\d\d/],
    ["HHmm", /\d\d\d\d/],
    ["HH", /\d\d/]
  ];
  var aspNetJsonRegex = /^\/?Date\((-?\d+)/i;
  var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
  var obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
  };
  function configFromISO(config) {
    var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat;
    if (match) {
      getParsingFlags(config).iso = true;
      for (i = 0, l = isoDates.length; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
          dateFormat = isoDates[i][0];
          allowTime = isoDates[i][2] !== false;
          break;
        }
      }
      if (dateFormat == null) {
        config._isValid = false;
        return;
      }
      if (match[3]) {
        for (i = 0, l = isoTimes.length; i < l; i++) {
          if (isoTimes[i][1].exec(match[3])) {
            timeFormat = (match[2] || " ") + isoTimes[i][0];
            break;
          }
        }
        if (timeFormat == null) {
          config._isValid = false;
          return;
        }
      }
      if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return;
      }
      if (match[4]) {
        if (tzRegex.exec(match[4])) {
          tzFormat = "Z";
        } else {
          config._isValid = false;
          return;
        }
      }
      config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
      configFromStringAndFormat(config);
    } else {
      config._isValid = false;
    }
  }
  function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [
      untruncateYear(yearStr),
      defaultLocaleMonthsShort.indexOf(monthStr),
      parseInt(dayStr, 10),
      parseInt(hourStr, 10),
      parseInt(minuteStr, 10)
    ];
    if (secondStr) {
      result.push(parseInt(secondStr, 10));
    }
    return result;
  }
  function untruncateYear(yearStr) {
    var year5 = parseInt(yearStr, 10);
    if (year5 <= 49) {
      return 2e3 + year5;
    } else if (year5 <= 999) {
      return 1900 + year5;
    }
    return year5;
  }
  function preprocessRFC2822(s) {
    return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  }
  function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
      var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
      if (weekdayProvided !== weekdayActual) {
        getParsingFlags(config).weekdayMismatch = true;
        config._isValid = false;
        return false;
      }
    }
    return true;
  }
  function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
      return obsOffsets[obsOffset];
    } else if (militaryOffset) {
      return 0;
    } else {
      var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
      return h * 60 + m;
    }
  }
  function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
    if (match) {
      parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
      if (!checkWeekday(match[1], parsedArray, config)) {
        return;
      }
      config._a = parsedArray;
      config._tzm = calculateOffset(match[8], match[9], match[10]);
      config._d = createUTCDate.apply(null, config._a);
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
      getParsingFlags(config).rfc2822 = true;
    } else {
      config._isValid = false;
    }
  }
  function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
      config._d = new Date(+matched[1]);
      return;
    }
    configFromISO(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }
    configFromRFC2822(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }
    if (config._strict) {
      config._isValid = false;
    } else {
      hooks.createFromInputFallback(config);
    }
  }
  hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(config) {
    config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
  });

  // node_modules/moment/src/lib/utils/defaults.js
  function defaults(a, b, c) {
    if (a != null) {
      return a;
    }
    if (b != null) {
      return b;
    }
    return c;
  }

  // node_modules/moment/src/lib/create/from-array.js
  function currentDateArray(config) {
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
      return [
        nowValue.getUTCFullYear(),
        nowValue.getUTCMonth(),
        nowValue.getUTCDate()
      ];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  }
  function configFromArray(config) {
    var i, date, input = [], currentDate, expectedWeekday, yearToUse;
    if (config._d) {
      return;
    }
    currentDate = currentDateArray(config);
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config);
    }
    if (config._dayOfYear != null) {
      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
      if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
        getParsingFlags(config)._overflowDayOfYear = true;
      }
      date = createUTCDate(yearToUse, 0, config._dayOfYear);
      config._a[MONTH] = date.getUTCMonth();
      config._a[DATE] = date.getUTCDate();
    }
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
      config._a[i] = input[i] = currentDate[i];
    }
    for (; i < 7; i++) {
      config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
    }
    if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
      config._nextDay = true;
      config._a[HOUR] = 0;
    }
    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
    if (config._tzm != null) {
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }
    if (config._nextDay) {
      config._a[HOUR] = 24;
    }
    if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
      getParsingFlags(config).weekdayMismatch = true;
    }
  }
  function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week5, weekday, dow, doy, temp, weekdayOverflow, curWeek;
    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;
      doy = 4;
      weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
      week5 = defaults(w.W, 1);
      weekday = defaults(w.E, 1);
      if (weekday < 1 || weekday > 7) {
        weekdayOverflow = true;
      }
    } else {
      dow = config._locale._week.dow;
      doy = config._locale._week.doy;
      curWeek = weekOfYear(createLocal(), dow, doy);
      weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
      week5 = defaults(w.w, curWeek.week);
      if (w.d != null) {
        weekday = w.d;
        if (weekday < 0 || weekday > 6) {
          weekdayOverflow = true;
        }
      } else if (w.e != null) {
        weekday = w.e + dow;
        if (w.e < 0 || w.e > 6) {
          weekdayOverflow = true;
        }
      } else {
        weekday = dow;
      }
    }
    if (week5 < 1 || week5 > weeksInYear(weekYear, dow, doy)) {
      getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
      getParsingFlags(config)._overflowWeekday = true;
    } else {
      temp = dayOfYearFromWeeks(weekYear, week5, weekday, dow, doy);
      config._a[YEAR] = temp.year;
      config._dayOfYear = temp.dayOfYear;
    }
  }

  // node_modules/moment/src/lib/create/from-string-and-format.js
  hooks.ISO_8601 = function() {
  };
  hooks.RFC_2822 = function() {
  };
  function configFromStringAndFormat(config) {
    if (config._f === hooks.ISO_8601) {
      configFromISO(config);
      return;
    }
    if (config._f === hooks.RFC_2822) {
      configFromRFC2822(config);
      return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;
    var string = "" + config._i, i, parsedInput, tokens2, token18, skipped, stringLength = string.length, totalParsedInputLength = 0, era3;
    tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
    for (i = 0; i < tokens2.length; i++) {
      token18 = tokens2[i];
      parsedInput = (string.match(getParseRegexForToken(token18, config)) || [])[0];
      if (parsedInput) {
        skipped = string.substr(0, string.indexOf(parsedInput));
        if (skipped.length > 0) {
          getParsingFlags(config).unusedInput.push(skipped);
        }
        string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
        totalParsedInputLength += parsedInput.length;
      }
      if (formatTokenFunctions[token18]) {
        if (parsedInput) {
          getParsingFlags(config).empty = false;
        } else {
          getParsingFlags(config).unusedTokens.push(token18);
        }
        addTimeToArrayFromToken(token18, parsedInput, config);
      } else if (config._strict && !parsedInput) {
        getParsingFlags(config).unusedTokens.push(token18);
      }
    }
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
      getParsingFlags(config).unusedInput.push(string);
    }
    if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
      getParsingFlags(config).bigHour = void 0;
    }
    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
    era3 = getParsingFlags(config).era;
    if (era3 !== null) {
      config._a[YEAR] = config._locale.erasConvertYear(era3, config._a[YEAR]);
    }
    configFromArray(config);
    checkOverflow(config);
  }
  function meridiemFixWrap(locale5, hour5, meridiem2) {
    var isPm;
    if (meridiem2 == null) {
      return hour5;
    }
    if (locale5.meridiemHour != null) {
      return locale5.meridiemHour(hour5, meridiem2);
    } else if (locale5.isPM != null) {
      isPm = locale5.isPM(meridiem2);
      if (isPm && hour5 < 12) {
        hour5 += 12;
      }
      if (!isPm && hour5 === 12) {
        hour5 = 0;
      }
      return hour5;
    } else {
      return hour5;
    }
  }

  // node_modules/moment/src/lib/create/from-string-and-array.js
  function configFromStringAndArray(config) {
    var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false;
    if (config._f.length === 0) {
      getParsingFlags(config).invalidFormat = true;
      config._d = new Date(NaN);
      return;
    }
    for (i = 0; i < config._f.length; i++) {
      currentScore = 0;
      validFormatFound = false;
      tempConfig = copyConfig({}, config);
      if (config._useUTC != null) {
        tempConfig._useUTC = config._useUTC;
      }
      tempConfig._f = config._f[i];
      configFromStringAndFormat(tempConfig);
      if (isValid(tempConfig)) {
        validFormatFound = true;
      }
      currentScore += getParsingFlags(tempConfig).charsLeftOver;
      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
      getParsingFlags(tempConfig).score = currentScore;
      if (!bestFormatIsValid) {
        if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
          if (validFormatFound) {
            bestFormatIsValid = true;
          }
        }
      } else {
        if (currentScore < scoreToBeat) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
        }
      }
    }
    extend(config, bestMoment || tempConfig);
  }

  // node_modules/moment/src/lib/create/from-object.js
  function configFromObject(config) {
    if (config._d) {
      return;
    }
    var i = normalizeObjectUnits(config._i), dayOrDate = i.day === void 0 ? i.date : i.day;
    config._a = map([i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond], function(obj) {
      return obj && parseInt(obj, 10);
    });
    configFromArray(config);
  }

  // node_modules/moment/src/lib/create/from-anything.js
  function createFromConfig(config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
      res.add(1, "d");
      res._nextDay = void 0;
    }
    return res;
  }
  function prepareConfig(config) {
    var input = config._i, format23 = config._f;
    config._locale = config._locale || locales.getLocale(config._l);
    if (input === null || format23 === void 0 && input === "") {
      return createInvalid({nullInput: true});
    }
    if (typeof input === "string") {
      config._i = input = config._locale.preparse(input);
    }
    if (isMoment(input)) {
      return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
      config._d = input;
    } else if (isArray12(format23)) {
      configFromStringAndArray(config);
    } else if (format23) {
      configFromStringAndFormat(config);
    } else {
      configFromInput(config);
    }
    if (!isValid(config)) {
      config._d = null;
    }
    return config;
  }
  function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
      config._d = new Date(hooks.now());
    } else if (isDate(input)) {
      config._d = new Date(input.valueOf());
    } else if (typeof input === "string") {
      configFromString(config);
    } else if (isArray12(input)) {
      config._a = map(input.slice(0), function(obj) {
        return parseInt(obj, 10);
      });
      configFromArray(config);
    } else if (isObject5(input)) {
      configFromObject(config);
    } else if (isNumber(input)) {
      config._d = new Date(input);
    } else {
      hooks.createFromInputFallback(config);
    }
  }
  function createLocalOrUTC(input, format23, locale5, strict, isUTC) {
    var c = {};
    if (format23 === true || format23 === false) {
      strict = format23;
      format23 = void 0;
    }
    if (locale5 === true || locale5 === false) {
      strict = locale5;
      locale5 = void 0;
    }
    if (isObject5(input) && isObjectEmpty(input) || isArray12(input) && input.length === 0) {
      input = void 0;
    }
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale5;
    c._i = input;
    c._f = format23;
    c._strict = strict;
    return createFromConfig(c);
  }

  // node_modules/moment/src/lib/create/local.js
  function createLocal(input, format23, locale5, strict) {
    return createLocalOrUTC(input, format23, locale5, strict, false);
  }

  // node_modules/moment/src/lib/moment/min-max.js
  var prototypeMin = deprecate("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
    var other = createLocal.apply(null, arguments);
    if (this.isValid() && other.isValid()) {
      return other < this ? this : other;
    } else {
      return createInvalid();
    }
  });
  var prototypeMax = deprecate("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
    var other = createLocal.apply(null, arguments);
    if (this.isValid() && other.isValid()) {
      return other > this ? this : other;
    } else {
      return createInvalid();
    }
  });
  function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray12(moments[0])) {
      moments = moments[0];
    }
    if (!moments.length) {
      return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
      if (!moments[i].isValid() || moments[i][fn](res)) {
        res = moments[i];
      }
    }
    return res;
  }
  function min() {
    var args = [].slice.call(arguments, 0);
    return pickBy("isBefore", args);
  }
  function max() {
    var args = [].slice.call(arguments, 0);
    return pickBy("isAfter", args);
  }

  // node_modules/moment/src/lib/moment/now.js
  var now = function() {
    return Date.now ? Date.now() : +new Date();
  };

  // node_modules/moment/src/lib/duration/constructor.js
  const locales2 = __toModule(require_locales());

  // node_modules/moment/src/lib/duration/valid.js
  var ordering = [
    "year",
    "quarter",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond"
  ];
  function isDurationValid(m) {
    var key, unitHasDecimal = false, i;
    for (key in m) {
      if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
        return false;
      }
    }
    for (i = 0; i < ordering.length; ++i) {
      if (m[ordering[i]]) {
        if (unitHasDecimal) {
          return false;
        }
        if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
          unitHasDecimal = true;
        }
      }
    }
    return true;
  }
  function isValid2() {
    return this._isValid;
  }
  function createInvalid2() {
    return createDuration(NaN);
  }

  // node_modules/moment/src/lib/duration/constructor.js
  function Duration(duration2) {
    var normalizedInput = normalizeObjectUnits(duration2), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
    this._isValid = isDurationValid(normalizedInput);
    this._milliseconds = +milliseconds2 + seconds2 * 1e3 + minutes2 * 6e4 + hours2 * 1e3 * 60 * 60;
    this._days = +days2 + weeks2 * 7;
    this._months = +months2 + quarters * 3 + years2 * 12;
    this._data = {};
    this._locale = locales2.getLocale();
    this._bubble();
  }
  function isDuration(obj) {
    return obj instanceof Duration;
  }

  // node_modules/moment/src/lib/utils/abs-round.js
  function absRound(number) {
    if (number < 0) {
      return Math.round(-1 * number) * -1;
    } else {
      return Math.round(number);
    }
  }

  // node_modules/moment/src/lib/utils/compare-arrays.js
  function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
    for (i = 0; i < len; i++) {
      if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
        diffs++;
      }
    }
    return diffs + lengthDiff;
  }

  // node_modules/moment/src/lib/units/offset.js
  function offset(token18, separator) {
    addFormatToken(token18, 0, 0, function() {
      var offset7 = this.utcOffset(), sign2 = "+";
      if (offset7 < 0) {
        offset7 = -offset7;
        sign2 = "-";
      }
      return sign2 + zeroFill(~~(offset7 / 60), 2) + separator + zeroFill(~~offset7 % 60, 2);
    });
  }
  offset("Z", ":");
  offset("ZZ", "");
  addRegexToken("Z", matchShortOffset);
  addRegexToken("ZZ", matchShortOffset);
  addParseToken(["Z", "ZZ"], function(input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
  });
  var chunkOffset = /([\+\-]|\d\d)/gi;
  function offsetFromString(matcher, string) {
    var matches = (string || "").match(matcher), chunk, parts5, minutes2;
    if (matches === null) {
      return null;
    }
    chunk = matches[matches.length - 1] || [];
    parts5 = (chunk + "").match(chunkOffset) || ["-", 0, 0];
    minutes2 = +(parts5[1] * 60) + toInt(parts5[2]);
    return minutes2 === 0 ? 0 : parts5[0] === "+" ? minutes2 : -minutes2;
  }
  function cloneWithOffset(input, model) {
    var res, diff3;
    if (model._isUTC) {
      res = model.clone();
      diff3 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
      res._d.setTime(res._d.valueOf() + diff3);
      hooks.updateOffset(res, false);
      return res;
    } else {
      return createLocal(input).local();
    }
  }
  function getDateOffset(m) {
    return -Math.round(m._d.getTimezoneOffset());
  }
  hooks.updateOffset = function() {
  };
  function getSetOffset(input, keepLocalTime, keepMinutes) {
    var offset7 = this._offset || 0, localAdjust;
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    if (input != null) {
      if (typeof input === "string") {
        input = offsetFromString(matchShortOffset, input);
        if (input === null) {
          return this;
        }
      } else if (Math.abs(input) < 16 && !keepMinutes) {
        input = input * 60;
      }
      if (!this._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(this);
      }
      this._offset = input;
      this._isUTC = true;
      if (localAdjust != null) {
        this.add(localAdjust, "m");
      }
      if (offset7 !== input) {
        if (!keepLocalTime || this._changeInProgress) {
          addSubtract(this, createDuration(input - offset7, "m"), 1, false);
        } else if (!this._changeInProgress) {
          this._changeInProgress = true;
          hooks.updateOffset(this, true);
          this._changeInProgress = null;
        }
      }
      return this;
    } else {
      return this._isUTC ? offset7 : getDateOffset(this);
    }
  }
  function getSetZone(input, keepLocalTime) {
    if (input != null) {
      if (typeof input !== "string") {
        input = -input;
      }
      this.utcOffset(input, keepLocalTime);
      return this;
    } else {
      return -this.utcOffset();
    }
  }
  function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
  }
  function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
      this.utcOffset(0, keepLocalTime);
      this._isUTC = false;
      if (keepLocalTime) {
        this.subtract(getDateOffset(this), "m");
      }
    }
    return this;
  }
  function setOffsetToParsedOffset() {
    if (this._tzm != null) {
      this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === "string") {
      var tZone = offsetFromString(matchOffset, this._i);
      if (tZone != null) {
        this.utcOffset(tZone);
      } else {
        this.utcOffset(0, true);
      }
    }
    return this;
  }
  function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
      return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;
    return (this.utcOffset() - input) % 60 === 0;
  }
  function isDaylightSavingTime() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }
  function isDaylightSavingTimeShifted() {
    if (!isUndefined(this._isDSTShifted)) {
      return this._isDSTShifted;
    }
    var c = {}, other;
    copyConfig(c, this);
    c = prepareConfig(c);
    if (c._a) {
      other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
      this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
    } else {
      this._isDSTShifted = false;
    }
    return this._isDSTShifted;
  }
  function isLocal() {
    return this.isValid() ? !this._isUTC : false;
  }
  function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
  }
  function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  }

  // node_modules/moment/src/lib/duration/create.js
  var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/;
  var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function createDuration(input, key) {
    var duration2 = input, match = null, sign2, ret, diffRes;
    if (isDuration(input)) {
      duration2 = {
        ms: input._milliseconds,
        d: input._days,
        M: input._months
      };
    } else if (isNumber(input) || !isNaN(+input)) {
      duration2 = {};
      if (key) {
        duration2[key] = +input;
      } else {
        duration2.milliseconds = +input;
      }
    } else if (match = aspNetRegex.exec(input)) {
      sign2 = match[1] === "-" ? -1 : 1;
      duration2 = {
        y: 0,
        d: toInt(match[DATE]) * sign2,
        h: toInt(match[HOUR]) * sign2,
        m: toInt(match[MINUTE]) * sign2,
        s: toInt(match[SECOND]) * sign2,
        ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
      };
    } else if (match = isoRegex.exec(input)) {
      sign2 = match[1] === "-" ? -1 : 1;
      duration2 = {
        y: parseIso(match[2], sign2),
        M: parseIso(match[3], sign2),
        w: parseIso(match[4], sign2),
        d: parseIso(match[5], sign2),
        h: parseIso(match[6], sign2),
        m: parseIso(match[7], sign2),
        s: parseIso(match[8], sign2)
      };
    } else if (duration2 == null) {
      duration2 = {};
    } else if (typeof duration2 === "object" && ("from" in duration2 || "to" in duration2)) {
      diffRes = momentsDifference(createLocal(duration2.from), createLocal(duration2.to));
      duration2 = {};
      duration2.ms = diffRes.milliseconds;
      duration2.M = diffRes.months;
    }
    ret = new Duration(duration2);
    if (isDuration(input) && hasOwnProp(input, "_locale")) {
      ret._locale = input._locale;
    }
    if (isDuration(input) && hasOwnProp(input, "_isValid")) {
      ret._isValid = input._isValid;
    }
    return ret;
  }
  createDuration.fn = Duration.prototype;
  createDuration.invalid = createInvalid2;
  function parseIso(inp, sign2) {
    var res = inp && parseFloat(inp.replace(",", "."));
    return (isNaN(res) ? 0 : res) * sign2;
  }
  function positiveMomentsDifference(base, other) {
    var res = {};
    res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, "M").isAfter(other)) {
      --res.months;
    }
    res.milliseconds = +other - +base.clone().add(res.months, "M");
    return res;
  }
  function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
      return {milliseconds: 0, months: 0};
    }
    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
    }
    return res;
  }

  // node_modules/moment/src/lib/moment/add-subtract.js
  function createAdder(direction, name) {
    return function(val, period) {
      var dur, tmp;
      if (period !== null && !isNaN(+period)) {
        deprecateSimple(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
        tmp = val;
        val = period;
        period = tmp;
      }
      dur = createDuration(val, period);
      addSubtract(this, dur, direction);
      return this;
    };
  }
  function addSubtract(mom, duration2, isAdding, updateOffset) {
    var milliseconds2 = duration2._milliseconds, days2 = absRound(duration2._days), months2 = absRound(duration2._months);
    if (!mom.isValid()) {
      return;
    }
    updateOffset = updateOffset == null ? true : updateOffset;
    if (months2) {
      setMonth(mom, get3(mom, "Month") + months2 * isAdding);
    }
    if (days2) {
      set2(mom, "Date", get3(mom, "Date") + days2 * isAdding);
    }
    if (milliseconds2) {
      mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
    }
    if (updateOffset) {
      hooks.updateOffset(mom, days2 || months2);
    }
  }
  var add = createAdder(1, "add");
  var subtract = createAdder(-1, "subtract");

  // node_modules/moment/src/lib/utils/is-string.js
  function isString(input) {
    return typeof input === "string" || input instanceof String;
  }

  // node_modules/moment/src/lib/utils/is-moment-input.js
  function isMomentInput(input) {
    return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
  }
  function isMomentInputObject(input) {
    var objectTest = isObject5(input) && !isObjectEmpty(input), propertyTest = false, properties = [
      "years",
      "year",
      "y",
      "months",
      "month",
      "M",
      "days",
      "day",
      "d",
      "dates",
      "date",
      "D",
      "hours",
      "hour",
      "h",
      "minutes",
      "minute",
      "m",
      "seconds",
      "second",
      "s",
      "milliseconds",
      "millisecond",
      "ms"
    ], i, property3;
    for (i = 0; i < properties.length; i += 1) {
      property3 = properties[i];
      propertyTest = propertyTest || hasOwnProp(input, property3);
    }
    return objectTest && propertyTest;
  }
  function isNumberOrStringArray(input) {
    var arrayTest = isArray12(input), dataTypeTest = false;
    if (arrayTest) {
      dataTypeTest = input.filter(function(item) {
        return !isNumber(item) && isString(input);
      }).length === 0;
    }
    return arrayTest && dataTypeTest;
  }

  // node_modules/moment/src/lib/utils/is-calendar-spec.js
  function isCalendarSpec(input) {
    var objectTest = isObject5(input) && !isObjectEmpty(input), propertyTest = false, properties = [
      "sameDay",
      "nextDay",
      "lastDay",
      "nextWeek",
      "lastWeek",
      "sameElse"
    ], i, property3;
    for (i = 0; i < properties.length; i += 1) {
      property3 = properties[i];
      propertyTest = propertyTest || hasOwnProp(input, property3);
    }
    return objectTest && propertyTest;
  }

  // node_modules/moment/src/lib/moment/calendar.js
  function getCalendarFormat(myMoment, now3) {
    var diff3 = myMoment.diff(now3, "days", true);
    return diff3 < -6 ? "sameElse" : diff3 < -1 ? "lastWeek" : diff3 < 0 ? "lastDay" : diff3 < 1 ? "sameDay" : diff3 < 2 ? "nextDay" : diff3 < 7 ? "nextWeek" : "sameElse";
  }
  function calendar3(time, formats3) {
    if (arguments.length === 1) {
      if (isMomentInput(arguments[0])) {
        time = arguments[0];
        formats3 = void 0;
      } else if (isCalendarSpec(arguments[0])) {
        formats3 = arguments[0];
        time = void 0;
      }
    }
    var now3 = time || createLocal(), sod = cloneWithOffset(now3, this).startOf("day"), format23 = hooks.calendarFormat(this, sod) || "sameElse", output = formats3 && (isFunction4(formats3[format23]) ? formats3[format23].call(this, now3) : formats3[format23]);
    return this.format(output || this.localeData().calendar(format23, this, createLocal(now3)));
  }

  // node_modules/moment/src/lib/moment/clone.js
  function clone() {
    return new Moment(this);
  }

  // node_modules/moment/src/lib/moment/compare.js
  function isAfter(input, units2) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units2 = normalizeUnits(units2) || "millisecond";
    if (units2 === "millisecond") {
      return this.valueOf() > localInput.valueOf();
    } else {
      return localInput.valueOf() < this.clone().startOf(units2).valueOf();
    }
  }
  function isBefore(input, units2) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units2 = normalizeUnits(units2) || "millisecond";
    if (units2 === "millisecond") {
      return this.valueOf() < localInput.valueOf();
    } else {
      return this.clone().endOf(units2).valueOf() < localInput.valueOf();
    }
  }
  function isBetween(from3, to3, units2, inclusivity) {
    var localFrom = isMoment(from3) ? from3 : createLocal(from3), localTo = isMoment(to3) ? to3 : createLocal(to3);
    if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
      return false;
    }
    inclusivity = inclusivity || "()";
    return (inclusivity[0] === "(" ? this.isAfter(localFrom, units2) : !this.isBefore(localFrom, units2)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units2) : !this.isAfter(localTo, units2));
  }
  function isSame(input, units2) {
    var localInput = isMoment(input) ? input : createLocal(input), inputMs;
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units2 = normalizeUnits(units2) || "millisecond";
    if (units2 === "millisecond") {
      return this.valueOf() === localInput.valueOf();
    } else {
      inputMs = localInput.valueOf();
      return this.clone().startOf(units2).valueOf() <= inputMs && inputMs <= this.clone().endOf(units2).valueOf();
    }
  }
  function isSameOrAfter(input, units2) {
    return this.isSame(input, units2) || this.isAfter(input, units2);
  }
  function isSameOrBefore(input, units2) {
    return this.isSame(input, units2) || this.isBefore(input, units2);
  }

  // node_modules/moment/src/lib/moment/diff.js
  function diff(input, units2, asFloat) {
    var that, zoneDelta, output;
    if (!this.isValid()) {
      return NaN;
    }
    that = cloneWithOffset(input, this);
    if (!that.isValid()) {
      return NaN;
    }
    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
    units2 = normalizeUnits(units2);
    switch (units2) {
      case "year":
        output = monthDiff(this, that) / 12;
        break;
      case "month":
        output = monthDiff(this, that);
        break;
      case "quarter":
        output = monthDiff(this, that) / 3;
        break;
      case "second":
        output = (this - that) / 1e3;
        break;
      case "minute":
        output = (this - that) / 6e4;
        break;
      case "hour":
        output = (this - that) / 36e5;
        break;
      case "day":
        output = (this - that - zoneDelta) / 864e5;
        break;
      case "week":
        output = (this - that - zoneDelta) / 6048e5;
        break;
      default:
        output = this - that;
    }
    return asFloat ? output : absFloor(output);
  }
  function monthDiff(a, b) {
    if (a.date() < b.date()) {
      return -monthDiff(b, a);
    }
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
    if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
      adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
      adjust = (b - anchor) / (anchor2 - anchor);
    }
    return -(wholeMonthDiff + adjust) || 0;
  }

  // node_modules/moment/src/lib/moment/format.js
  hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  function toString3() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function toISOString(keepOffset) {
    if (!this.isValid()) {
      return null;
    }
    var utc7 = keepOffset !== true, m = utc7 ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
      return formatMoment(m, utc7 ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ");
    }
    if (isFunction4(Date.prototype.toISOString)) {
      if (utc7) {
        return this.toDate().toISOString();
      } else {
        return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m, "Z"));
      }
    }
    return formatMoment(m, utc7 ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
  }
  function inspect() {
    if (!this.isValid()) {
      return "moment.invalid(/* " + this._i + " */)";
    }
    var func = "moment", zone = "", prefix, year5, datetime, suffix;
    if (!this.isLocal()) {
      func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
      zone = "Z";
    }
    prefix = "[" + func + '("]';
    year5 = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
    datetime = "-MM-DD[T]HH:mm:ss.SSS";
    suffix = zone + '[")]';
    return this.format(prefix + year5 + datetime + suffix);
  }
  function format11(inputString) {
    if (!inputString) {
      inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
  }

  // node_modules/moment/src/lib/moment/from.js
  function from(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function fromNow(withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
  }

  // node_modules/moment/src/lib/moment/to.js
  function to(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function toNow(withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
  }

  // node_modules/moment/src/lib/moment/locale.js
  const locales3 = __toModule(require_locales());
  function locale(key) {
    var newLocaleData;
    if (key === void 0) {
      return this._locale._abbr;
    } else {
      newLocaleData = locales3.getLocale(key);
      if (newLocaleData != null) {
        this._locale = newLocaleData;
      }
      return this;
    }
  }
  var lang = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(key) {
    if (key === void 0) {
      return this.localeData();
    } else {
      return this.locale(key);
    }
  });
  function localeData() {
    return this._locale;
  }

  // node_modules/moment/src/lib/moment/start-end-of.js
  var MS_PER_SECOND = 1e3;
  var MS_PER_MINUTE = 60 * MS_PER_SECOND;
  var MS_PER_HOUR = 60 * MS_PER_MINUTE;
  var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
  function mod3(dividend, divisor) {
    return (dividend % divisor + divisor) % divisor;
  }
  function localStartOfDate(y, m, d) {
    if (y < 100 && y >= 0) {
      return new Date(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
      return new Date(y, m, d).valueOf();
    }
  }
  function utcStartOfDate(y, m, d) {
    if (y < 100 && y >= 0) {
      return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
      return Date.UTC(y, m, d);
    }
  }
  function startOf(units2) {
    var time, startOfDate;
    units2 = normalizeUnits(units2);
    if (units2 === void 0 || units2 === "millisecond" || !this.isValid()) {
      return this;
    }
    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
    switch (units2) {
      case "year":
        time = startOfDate(this.year(), 0, 1);
        break;
      case "quarter":
        time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
        break;
      case "month":
        time = startOfDate(this.year(), this.month(), 1);
        break;
      case "week":
        time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
        break;
      case "isoWeek":
        time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
        break;
      case "day":
      case "date":
        time = startOfDate(this.year(), this.month(), this.date());
        break;
      case "hour":
        time = this._d.valueOf();
        time -= mod3(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
        break;
      case "minute":
        time = this._d.valueOf();
        time -= mod3(time, MS_PER_MINUTE);
        break;
      case "second":
        time = this._d.valueOf();
        time -= mod3(time, MS_PER_SECOND);
        break;
    }
    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }
  function endOf(units2) {
    var time, startOfDate;
    units2 = normalizeUnits(units2);
    if (units2 === void 0 || units2 === "millisecond" || !this.isValid()) {
      return this;
    }
    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
    switch (units2) {
      case "year":
        time = startOfDate(this.year() + 1, 0, 1) - 1;
        break;
      case "quarter":
        time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
        break;
      case "month":
        time = startOfDate(this.year(), this.month() + 1, 1) - 1;
        break;
      case "week":
        time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
        break;
      case "isoWeek":
        time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
        break;
      case "day":
      case "date":
        time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case "hour":
        time = this._d.valueOf();
        time += MS_PER_HOUR - mod3(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
        break;
      case "minute":
        time = this._d.valueOf();
        time += MS_PER_MINUTE - mod3(time, MS_PER_MINUTE) - 1;
        break;
      case "second":
        time = this._d.valueOf();
        time += MS_PER_SECOND - mod3(time, MS_PER_SECOND) - 1;
        break;
    }
    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }

  // node_modules/moment/src/lib/moment/to-type.js
  function valueOf() {
    return this._d.valueOf() - (this._offset || 0) * 6e4;
  }
  function unix() {
    return Math.floor(this.valueOf() / 1e3);
  }
  function toDate() {
    return new Date(this.valueOf());
  }
  function toArray() {
    var m = this;
    return [
      m.year(),
      m.month(),
      m.date(),
      m.hour(),
      m.minute(),
      m.second(),
      m.millisecond()
    ];
  }
  function toObject() {
    var m = this;
    return {
      years: m.year(),
      months: m.month(),
      date: m.date(),
      hours: m.hours(),
      minutes: m.minutes(),
      seconds: m.seconds(),
      milliseconds: m.milliseconds()
    };
  }
  function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  }

  // node_modules/moment/src/lib/moment/valid.js
  function isValid3() {
    return isValid(this);
  }
  function parsingFlags() {
    return extend({}, getParsingFlags(this));
  }
  function invalidAt() {
    return getParsingFlags(this).overflow;
  }

  // node_modules/moment/src/lib/moment/creation-data.js
  function creationData() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }

  // node_modules/moment/src/lib/units/era.js
  const locales4 = __toModule(require_locales());
  addFormatToken("N", 0, 0, "eraAbbr");
  addFormatToken("NN", 0, 0, "eraAbbr");
  addFormatToken("NNN", 0, 0, "eraAbbr");
  addFormatToken("NNNN", 0, 0, "eraName");
  addFormatToken("NNNNN", 0, 0, "eraNarrow");
  addFormatToken("y", ["y", 1], "yo", "eraYear");
  addFormatToken("y", ["yy", 2], 0, "eraYear");
  addFormatToken("y", ["yyy", 3], 0, "eraYear");
  addFormatToken("y", ["yyyy", 4], 0, "eraYear");
  addRegexToken("N", matchEraAbbr);
  addRegexToken("NN", matchEraAbbr);
  addRegexToken("NNN", matchEraAbbr);
  addRegexToken("NNNN", matchEraName);
  addRegexToken("NNNNN", matchEraNarrow);
  addParseToken(["N", "NN", "NNN", "NNNN", "NNNNN"], function(input, array, config, token18) {
    var era3 = config._locale.erasParse(input, token18, config._strict);
    if (era3) {
      getParsingFlags(config).era = era3;
    } else {
      getParsingFlags(config).invalidEra = input;
    }
  });
  addRegexToken("y", matchUnsigned);
  addRegexToken("yy", matchUnsigned);
  addRegexToken("yyy", matchUnsigned);
  addRegexToken("yyyy", matchUnsigned);
  addRegexToken("yo", matchEraYearOrdinal);
  addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
  addParseToken(["yo"], function(input, array, config, token18) {
    var match;
    if (config._locale._eraYearOrdinalRegex) {
      match = input.match(config._locale._eraYearOrdinalRegex);
    }
    if (config._locale.eraYearOrdinalParse) {
      array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
    } else {
      array[YEAR] = parseInt(input, 10);
    }
  });
  function localeEras(m, format23) {
    var i, l, date, eras = this._eras || locales4.getLocale("en")._eras;
    for (i = 0, l = eras.length; i < l; ++i) {
      switch (typeof eras[i].since) {
        case "string":
          date = hooks(eras[i].since).startOf("day");
          eras[i].since = date.valueOf();
          break;
      }
      switch (typeof eras[i].until) {
        case "undefined":
          eras[i].until = Infinity;
          break;
        case "string":
          date = hooks(eras[i].until).startOf("day").valueOf();
          eras[i].until = date.valueOf();
          break;
      }
    }
    return eras;
  }
  function localeErasParse(eraName, format23, strict) {
    var i, l, eras = this.eras(), name, abbr, narrow;
    eraName = eraName.toUpperCase();
    for (i = 0, l = eras.length; i < l; ++i) {
      name = eras[i].name.toUpperCase();
      abbr = eras[i].abbr.toUpperCase();
      narrow = eras[i].narrow.toUpperCase();
      if (strict) {
        switch (format23) {
          case "N":
          case "NN":
          case "NNN":
            if (abbr === eraName) {
              return eras[i];
            }
            break;
          case "NNNN":
            if (name === eraName) {
              return eras[i];
            }
            break;
          case "NNNNN":
            if (narrow === eraName) {
              return eras[i];
            }
            break;
        }
      } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
        return eras[i];
      }
    }
  }
  function localeErasConvertYear(era3, year5) {
    var dir = era3.since <= era3.until ? 1 : -1;
    if (year5 === void 0) {
      return hooks(era3.since).year();
    } else {
      return hooks(era3.since).year() + (year5 - era3.offset) * dir;
    }
  }
  function getEraName() {
    var i, l, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      val = this.startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].name;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].name;
      }
    }
    return "";
  }
  function getEraNarrow() {
    var i, l, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      val = this.startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].narrow;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].narrow;
      }
    }
    return "";
  }
  function getEraAbbr() {
    var i, l, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      val = this.startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].abbr;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].abbr;
      }
    }
    return "";
  }
  function getEraYear() {
    var i, l, dir, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      dir = eras[i].since <= eras[i].until ? 1 : -1;
      val = this.startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
        return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
      }
    }
    return this.year();
  }
  function erasNameRegex(isStrict) {
    if (!hasOwnProp(this, "_erasNameRegex")) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasNameRegex : this._erasRegex;
  }
  function erasAbbrRegex(isStrict) {
    if (!hasOwnProp(this, "_erasAbbrRegex")) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasAbbrRegex : this._erasRegex;
  }
  function erasNarrowRegex(isStrict) {
    if (!hasOwnProp(this, "_erasNarrowRegex")) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasNarrowRegex : this._erasRegex;
  }
  function matchEraAbbr(isStrict, locale5) {
    return locale5.erasAbbrRegex(isStrict);
  }
  function matchEraName(isStrict, locale5) {
    return locale5.erasNameRegex(isStrict);
  }
  function matchEraNarrow(isStrict, locale5) {
    return locale5.erasNarrowRegex(isStrict);
  }
  function matchEraYearOrdinal(isStrict, locale5) {
    return locale5._eraYearOrdinalRegex || matchUnsigned;
  }
  function computeErasParse() {
    var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, eras = this.eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      namePieces.push(regexEscape(eras[i].name));
      abbrPieces.push(regexEscape(eras[i].abbr));
      narrowPieces.push(regexEscape(eras[i].narrow));
      mixedPieces.push(regexEscape(eras[i].name));
      mixedPieces.push(regexEscape(eras[i].abbr));
      mixedPieces.push(regexEscape(eras[i].narrow));
    }
    this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
    this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
    this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
    this._erasNarrowRegex = new RegExp("^(" + narrowPieces.join("|") + ")", "i");
  }

  // node_modules/moment/src/lib/units/week-year.js
  addFormatToken(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100;
  });
  addFormatToken(0, ["GG", 2], 0, function() {
    return this.isoWeekYear() % 100;
  });
  function addWeekYearFormatToken(token18, getter) {
    addFormatToken(0, [token18, token18.length], 0, getter);
  }
  addWeekYearFormatToken("gggg", "weekYear");
  addWeekYearFormatToken("ggggg", "weekYear");
  addWeekYearFormatToken("GGGG", "isoWeekYear");
  addWeekYearFormatToken("GGGGG", "isoWeekYear");
  addUnitAlias("weekYear", "gg");
  addUnitAlias("isoWeekYear", "GG");
  addUnitPriority("weekYear", 1);
  addUnitPriority("isoWeekYear", 1);
  addRegexToken("G", matchSigned);
  addRegexToken("g", matchSigned);
  addRegexToken("GG", match1to2, match2);
  addRegexToken("gg", match1to2, match2);
  addRegexToken("GGGG", match1to4, match4);
  addRegexToken("gggg", match1to4, match4);
  addRegexToken("GGGGG", match1to6, match6);
  addRegexToken("ggggg", match1to6, match6);
  addWeekParseToken(["gggg", "ggggg", "GGGG", "GGGGG"], function(input, week5, config, token18) {
    week5[token18.substr(0, 2)] = toInt(input);
  });
  addWeekParseToken(["gg", "GG"], function(input, week5, config, token18) {
    week5[token18] = hooks.parseTwoDigitYear(input);
  });
  function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }
  function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
  }
  function getISOWeeksInYear() {
    return weeksInYear(this.year(), 1, 4);
  }
  function getISOWeeksInISOWeekYear() {
    return weeksInYear(this.isoWeekYear(), 1, 4);
  }
  function getWeeksInYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }
  function getWeeksInWeekYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
  }
  function getSetWeekYearHelper(input, week5, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
      return weekOfYear(this, dow, doy).year;
    } else {
      weeksTarget = weeksInYear(input, dow, doy);
      if (week5 > weeksTarget) {
        week5 = weeksTarget;
      }
      return setWeekAll.call(this, input, week5, weekday, dow, doy);
    }
  }
  function setWeekAll(weekYear, week5, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week5, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
  }

  // node_modules/moment/src/lib/units/quarter.js
  addFormatToken("Q", 0, "Qo", "quarter");
  addUnitAlias("quarter", "Q");
  addUnitPriority("quarter", 7);
  addRegexToken("Q", match1);
  addParseToken("Q", function(input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
  });
  function getSetQuarter(input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
  }

  // node_modules/moment/src/lib/units/day-of-month.js
  addFormatToken("D", ["DD", 2], "Do", "date");
  addUnitAlias("date", "D");
  addUnitPriority("date", 9);
  addRegexToken("D", match1to2);
  addRegexToken("DD", match1to2, match2);
  addRegexToken("Do", function(isStrict, locale5) {
    return isStrict ? locale5._dayOfMonthOrdinalParse || locale5._ordinalParse : locale5._dayOfMonthOrdinalParseLenient;
  });
  addParseToken(["D", "DD"], DATE);
  addParseToken("Do", function(input, array) {
    array[DATE] = toInt(input.match(match1to2)[0]);
  });
  var getSetDayOfMonth = makeGetSet("Date", true);

  // node_modules/moment/src/lib/units/day-of-year.js
  addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
  addUnitAlias("dayOfYear", "DDD");
  addUnitPriority("dayOfYear", 4);
  addRegexToken("DDD", match1to3);
  addRegexToken("DDDD", match3);
  addParseToken(["DDD", "DDDD"], function(input, array, config) {
    config._dayOfYear = toInt(input);
  });
  function getSetDayOfYear(input) {
    var dayOfYear = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
  }

  // node_modules/moment/src/lib/units/minute.js
  addFormatToken("m", ["mm", 2], 0, "minute");
  addUnitAlias("minute", "m");
  addUnitPriority("minute", 14);
  addRegexToken("m", match1to2);
  addRegexToken("mm", match1to2, match2);
  addParseToken(["m", "mm"], MINUTE);
  var getSetMinute = makeGetSet("Minutes", false);

  // node_modules/moment/src/lib/units/second.js
  addFormatToken("s", ["ss", 2], 0, "second");
  addUnitAlias("second", "s");
  addUnitPriority("second", 15);
  addRegexToken("s", match1to2);
  addRegexToken("ss", match1to2, match2);
  addParseToken(["s", "ss"], SECOND);
  var getSetSecond = makeGetSet("Seconds", false);

  // node_modules/moment/src/lib/units/millisecond.js
  addFormatToken("S", 0, 0, function() {
    return ~~(this.millisecond() / 100);
  });
  addFormatToken(0, ["SS", 2], 0, function() {
    return ~~(this.millisecond() / 10);
  });
  addFormatToken(0, ["SSS", 3], 0, "millisecond");
  addFormatToken(0, ["SSSS", 4], 0, function() {
    return this.millisecond() * 10;
  });
  addFormatToken(0, ["SSSSS", 5], 0, function() {
    return this.millisecond() * 100;
  });
  addFormatToken(0, ["SSSSSS", 6], 0, function() {
    return this.millisecond() * 1e3;
  });
  addFormatToken(0, ["SSSSSSS", 7], 0, function() {
    return this.millisecond() * 1e4;
  });
  addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
    return this.millisecond() * 1e5;
  });
  addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
    return this.millisecond() * 1e6;
  });
  addUnitAlias("millisecond", "ms");
  addUnitPriority("millisecond", 16);
  addRegexToken("S", match1to3, match1);
  addRegexToken("SS", match1to3, match2);
  addRegexToken("SSS", match1to3, match3);
  var token16;
  var getSetMillisecond;
  for (token16 = "SSSS"; token16.length <= 9; token16 += "S") {
    addRegexToken(token16, matchUnsigned);
  }
  function parseMs(input, array) {
    array[MILLISECOND] = toInt(("0." + input) * 1e3);
  }
  for (token16 = "S"; token16.length <= 9; token16 += "S") {
    addParseToken(token16, parseMs);
  }
  getSetMillisecond = makeGetSet("Milliseconds", false);

  // node_modules/moment/src/lib/units/timezone.js
  addFormatToken("z", 0, 0, "zoneAbbr");
  addFormatToken("zz", 0, 0, "zoneName");
  function getZoneAbbr() {
    return this._isUTC ? "UTC" : "";
  }
  function getZoneName() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }

  // node_modules/moment/src/lib/moment/prototype.js
  var proto = Moment.prototype;
  proto.add = add;
  proto.calendar = calendar3;
  proto.clone = clone;
  proto.diff = diff;
  proto.endOf = endOf;
  proto.format = format11;
  proto.from = from;
  proto.fromNow = fromNow;
  proto.to = to;
  proto.toNow = toNow;
  proto.get = stringGet;
  proto.invalidAt = invalidAt;
  proto.isAfter = isAfter;
  proto.isBefore = isBefore;
  proto.isBetween = isBetween;
  proto.isSame = isSame;
  proto.isSameOrAfter = isSameOrAfter;
  proto.isSameOrBefore = isSameOrBefore;
  proto.isValid = isValid3;
  proto.lang = lang;
  proto.locale = locale;
  proto.localeData = localeData;
  proto.max = prototypeMax;
  proto.min = prototypeMin;
  proto.parsingFlags = parsingFlags;
  proto.set = stringSet;
  proto.startOf = startOf;
  proto.subtract = subtract;
  proto.toArray = toArray;
  proto.toObject = toObject;
  proto.toDate = toDate;
  proto.toISOString = toISOString;
  proto.inspect = inspect;
  if (typeof Symbol !== "undefined" && Symbol.for != null) {
    proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
      return "Moment<" + this.format() + ">";
    };
  }
  proto.toJSON = toJSON;
  proto.toString = toString3;
  proto.unix = unix;
  proto.valueOf = valueOf;
  proto.creationData = creationData;
  proto.eraName = getEraName;
  proto.eraNarrow = getEraNarrow;
  proto.eraAbbr = getEraAbbr;
  proto.eraYear = getEraYear;
  proto.year = getSetYear;
  proto.isLeapYear = getIsLeapYear;
  proto.weekYear = getSetWeekYear;
  proto.isoWeekYear = getSetISOWeekYear;
  proto.quarter = proto.quarters = getSetQuarter;
  proto.month = getSetMonth;
  proto.daysInMonth = getDaysInMonth;
  proto.week = proto.weeks = getSetWeek;
  proto.isoWeek = proto.isoWeeks = getSetISOWeek;
  proto.weeksInYear = getWeeksInYear;
  proto.weeksInWeekYear = getWeeksInWeekYear;
  proto.isoWeeksInYear = getISOWeeksInYear;
  proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
  proto.date = getSetDayOfMonth;
  proto.day = proto.days = getSetDayOfWeek;
  proto.weekday = getSetLocaleDayOfWeek;
  proto.isoWeekday = getSetISODayOfWeek;
  proto.dayOfYear = getSetDayOfYear;
  proto.hour = proto.hours = getSetHour;
  proto.minute = proto.minutes = getSetMinute;
  proto.second = proto.seconds = getSetSecond;
  proto.millisecond = proto.milliseconds = getSetMillisecond;
  proto.utcOffset = getSetOffset;
  proto.utc = setOffsetToUTC;
  proto.local = setOffsetToLocal;
  proto.parseZone = setOffsetToParsedOffset;
  proto.hasAlignedHourOffset = hasAlignedHourOffset;
  proto.isDST = isDaylightSavingTime;
  proto.isLocal = isLocal;
  proto.isUtcOffset = isUtcOffset;
  proto.isUtc = isUtc;
  proto.isUTC = isUtc;
  proto.zoneAbbr = getZoneAbbr;
  proto.zoneName = getZoneName;
  proto.dates = deprecate("dates accessor is deprecated. Use date instead.", getSetDayOfMonth);
  proto.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth);
  proto.years = deprecate("years accessor is deprecated. Use year instead", getSetYear);
  proto.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", getSetZone);
  proto.isDSTShifted = deprecate("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", isDaylightSavingTimeShifted);
  var prototype_default = proto;

  // node_modules/moment/src/lib/moment/moment.js
  function createUnix(input) {
    return createLocal(input * 1e3);
  }
  function createInZone() {
    return createLocal.apply(null, arguments).parseZone();
  }

  // node_modules/moment/src/lib/locale/pre-post-format.js
  function preParsePostFormat(string) {
    return string;
  }

  // node_modules/moment/src/lib/locale/prototype.js
  var proto2 = Locale.prototype;
  proto2.calendar = calendar;
  proto2.longDateFormat = longDateFormat;
  proto2.invalidDate = invalidDate;
  proto2.ordinal = ordinal;
  proto2.preparse = preParsePostFormat;
  proto2.postformat = preParsePostFormat;
  proto2.relativeTime = relativeTime;
  proto2.pastFuture = pastFuture;
  proto2.set = set;
  proto2.eras = localeEras;
  proto2.erasParse = localeErasParse;
  proto2.erasConvertYear = localeErasConvertYear;
  proto2.erasAbbrRegex = erasAbbrRegex;
  proto2.erasNameRegex = erasNameRegex;
  proto2.erasNarrowRegex = erasNarrowRegex;
  proto2.months = localeMonths;
  proto2.monthsShort = localeMonthsShort;
  proto2.monthsParse = localeMonthsParse;
  proto2.monthsRegex = monthsRegex;
  proto2.monthsShortRegex = monthsShortRegex;
  proto2.week = localeWeek;
  proto2.firstDayOfYear = localeFirstDayOfYear;
  proto2.firstDayOfWeek = localeFirstDayOfWeek;
  proto2.weekdays = localeWeekdays;
  proto2.weekdaysMin = localeWeekdaysMin;
  proto2.weekdaysShort = localeWeekdaysShort;
  proto2.weekdaysParse = localeWeekdaysParse;
  proto2.weekdaysRegex = weekdaysRegex;
  proto2.weekdaysShortRegex = weekdaysShortRegex;
  proto2.weekdaysMinRegex = weekdaysMinRegex;
  proto2.isPM = localeIsPM;
  proto2.meridiem = localeMeridiem;

  // node_modules/moment/src/lib/locale/locale.js
  const locales7 = __toModule(require_locales());

  // node_modules/moment/src/lib/locale/lists.js
  const locales5 = __toModule(require_locales());
  function get4(format23, index, field, setter) {
    var locale5 = locales5.getLocale(), utc7 = createUTC().set(setter, index);
    return locale5[field](utc7, format23);
  }
  function listMonthsImpl(format23, index, field) {
    if (isNumber(format23)) {
      index = format23;
      format23 = void 0;
    }
    format23 = format23 || "";
    if (index != null) {
      return get4(format23, index, field, "month");
    }
    var i, out = [];
    for (i = 0; i < 12; i++) {
      out[i] = get4(format23, i, field, "month");
    }
    return out;
  }
  function listWeekdaysImpl(localeSorted, format23, index, field) {
    if (typeof localeSorted === "boolean") {
      if (isNumber(format23)) {
        index = format23;
        format23 = void 0;
      }
      format23 = format23 || "";
    } else {
      format23 = localeSorted;
      index = format23;
      localeSorted = false;
      if (isNumber(format23)) {
        index = format23;
        format23 = void 0;
      }
      format23 = format23 || "";
    }
    var locale5 = locales5.getLocale(), shift = localeSorted ? locale5._week.dow : 0, i, out = [];
    if (index != null) {
      return get4(format23, (index + shift) % 7, field, "day");
    }
    for (i = 0; i < 7; i++) {
      out[i] = get4(format23, (i + shift) % 7, field, "day");
    }
    return out;
  }
  function listMonths(format23, index) {
    return listMonthsImpl(format23, index, "months");
  }
  function listMonthsShort(format23, index) {
    return listMonthsImpl(format23, index, "monthsShort");
  }
  function listWeekdays(localeSorted, format23, index) {
    return listWeekdaysImpl(localeSorted, format23, index, "weekdays");
  }
  function listWeekdaysShort(localeSorted, format23, index) {
    return listWeekdaysImpl(localeSorted, format23, index, "weekdaysShort");
  }
  function listWeekdaysMin(localeSorted, format23, index) {
    return listWeekdaysImpl(localeSorted, format23, index, "weekdaysMin");
  }

  // node_modules/moment/src/lib/locale/en.js
  const locales6 = __toModule(require_locales());
  locales6.getSetGlobalLocale("en", {
    eras: [
      {
        since: "0001-01-01",
        until: Infinity,
        offset: 1,
        name: "Anno Domini",
        narrow: "AD",
        abbr: "AD"
      },
      {
        since: "0000-12-31",
        until: -Infinity,
        offset: 1,
        name: "Before Christ",
        narrow: "BC",
        abbr: "BC"
      }
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(number) {
      var b = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
      return number + output;
    }
  });

  // node_modules/moment/src/lib/locale/locale.js
  hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", locales7.getSetGlobalLocale);
  hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", locales7.getLocale);

  // node_modules/moment/src/lib/duration/abs.js
  var mathAbs = Math.abs;
  function abs() {
    var data = this._data;
    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);
    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);
    return this;
  }

  // node_modules/moment/src/lib/duration/add-subtract.js
  function addSubtract2(duration2, input, value, direction) {
    var other = createDuration(input, value);
    duration2._milliseconds += direction * other._milliseconds;
    duration2._days += direction * other._days;
    duration2._months += direction * other._months;
    return duration2._bubble();
  }
  function add2(input, value) {
    return addSubtract2(this, input, value, 1);
  }
  function subtract2(input, value) {
    return addSubtract2(this, input, value, -1);
  }

  // node_modules/moment/src/lib/utils/abs-ceil.js
  function absCeil(number) {
    if (number < 0) {
      return Math.floor(number);
    } else {
      return Math.ceil(number);
    }
  }

  // node_modules/moment/src/lib/duration/bubble.js
  function bubble() {
    var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
    if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
      milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
      days2 = 0;
      months2 = 0;
    }
    data.milliseconds = milliseconds2 % 1e3;
    seconds2 = absFloor(milliseconds2 / 1e3);
    data.seconds = seconds2 % 60;
    minutes2 = absFloor(seconds2 / 60);
    data.minutes = minutes2 % 60;
    hours2 = absFloor(minutes2 / 60);
    data.hours = hours2 % 24;
    days2 += absFloor(hours2 / 24);
    monthsFromDays = absFloor(daysToMonths(days2));
    months2 += monthsFromDays;
    days2 -= absCeil(monthsToDays(monthsFromDays));
    years2 = absFloor(months2 / 12);
    months2 %= 12;
    data.days = days2;
    data.months = months2;
    data.years = years2;
    return this;
  }
  function daysToMonths(days2) {
    return days2 * 4800 / 146097;
  }
  function monthsToDays(months2) {
    return months2 * 146097 / 4800;
  }

  // node_modules/moment/src/lib/duration/as.js
  function as(units2) {
    if (!this.isValid()) {
      return NaN;
    }
    var days2, months2, milliseconds2 = this._milliseconds;
    units2 = normalizeUnits(units2);
    if (units2 === "month" || units2 === "quarter" || units2 === "year") {
      days2 = this._days + milliseconds2 / 864e5;
      months2 = this._months + daysToMonths(days2);
      switch (units2) {
        case "month":
          return months2;
        case "quarter":
          return months2 / 3;
        case "year":
          return months2 / 12;
      }
    } else {
      days2 = this._days + Math.round(monthsToDays(this._months));
      switch (units2) {
        case "week":
          return days2 / 7 + milliseconds2 / 6048e5;
        case "day":
          return days2 + milliseconds2 / 864e5;
        case "hour":
          return days2 * 24 + milliseconds2 / 36e5;
        case "minute":
          return days2 * 1440 + milliseconds2 / 6e4;
        case "second":
          return days2 * 86400 + milliseconds2 / 1e3;
        case "millisecond":
          return Math.floor(days2 * 864e5) + milliseconds2;
        default:
          throw new Error("Unknown unit " + units2);
      }
    }
  }
  function valueOf2() {
    if (!this.isValid()) {
      return NaN;
    }
    return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
  }
  function makeAs(alias) {
    return function() {
      return this.as(alias);
    };
  }
  var asMilliseconds = makeAs("ms");
  var asSeconds = makeAs("s");
  var asMinutes = makeAs("m");
  var asHours = makeAs("h");
  var asDays = makeAs("d");
  var asWeeks = makeAs("w");
  var asMonths = makeAs("M");
  var asQuarters = makeAs("Q");
  var asYears = makeAs("y");

  // node_modules/moment/src/lib/duration/clone.js
  function clone3() {
    return createDuration(this);
  }

  // node_modules/moment/src/lib/duration/get.js
  function get5(units2) {
    units2 = normalizeUnits(units2);
    return this.isValid() ? this[units2 + "s"]() : NaN;
  }
  function makeGetter(name) {
    return function() {
      return this.isValid() ? this._data[name] : NaN;
    };
  }
  var milliseconds = makeGetter("milliseconds");
  var seconds = makeGetter("seconds");
  var minutes = makeGetter("minutes");
  var hours = makeGetter("hours");
  var days = makeGetter("days");
  var months = makeGetter("months");
  var years = makeGetter("years");
  function weeks() {
    return absFloor(this.days() / 7);
  }

  // node_modules/moment/src/lib/duration/humanize.js
  var round = Math.round;
  var thresholds = {
    ss: 44,
    s: 45,
    m: 45,
    h: 22,
    d: 26,
    w: null,
    M: 11
  };
  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale5) {
    return locale5.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }
  function relativeTime2(posNegDuration, withoutSuffix, thresholds2, locale5) {
    var duration2 = createDuration(posNegDuration).abs(), seconds2 = round(duration2.as("s")), minutes2 = round(duration2.as("m")), hours2 = round(duration2.as("h")), days2 = round(duration2.as("d")), months2 = round(duration2.as("M")), weeks2 = round(duration2.as("w")), years2 = round(duration2.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
    if (thresholds2.w != null) {
      a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
    }
    a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale5;
    return substituteTimeAgo.apply(null, a);
  }
  function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === void 0) {
      return round;
    }
    if (typeof roundingFunction === "function") {
      round = roundingFunction;
      return true;
    }
    return false;
  }
  function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === void 0) {
      return false;
    }
    if (limit === void 0) {
      return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === "s") {
      thresholds.ss = limit - 1;
    }
    return true;
  }
  function humanize(argWithSuffix, argThresholds) {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }
    var withSuffix = false, th = thresholds, locale5, output;
    if (typeof argWithSuffix === "object") {
      argThresholds = argWithSuffix;
      argWithSuffix = false;
    }
    if (typeof argWithSuffix === "boolean") {
      withSuffix = argWithSuffix;
    }
    if (typeof argThresholds === "object") {
      th = Object.assign({}, thresholds, argThresholds);
      if (argThresholds.s != null && argThresholds.ss == null) {
        th.ss = argThresholds.s - 1;
      }
    }
    locale5 = this.localeData();
    output = relativeTime2(this, !withSuffix, th, locale5);
    if (withSuffix) {
      output = locale5.pastFuture(+this, output);
    }
    return locale5.postformat(output);
  }

  // node_modules/moment/src/lib/duration/iso-string.js
  var abs2 = Math.abs;
  function sign(x) {
    return (x > 0) - (x < 0) || +x;
  }
  function toISOString2() {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }
    var seconds2 = abs2(this._milliseconds) / 1e3, days2 = abs2(this._days), months2 = abs2(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
    if (!total) {
      return "P0D";
    }
    minutes2 = absFloor(seconds2 / 60);
    hours2 = absFloor(minutes2 / 60);
    seconds2 %= 60;
    minutes2 %= 60;
    years2 = absFloor(months2 / 12);
    months2 %= 12;
    s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
    totalSign = total < 0 ? "-" : "";
    ymSign = sign(this._months) !== sign(total) ? "-" : "";
    daysSign = sign(this._days) !== sign(total) ? "-" : "";
    hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
    return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
  }

  // node_modules/moment/src/lib/duration/prototype.js
  var proto3 = Duration.prototype;
  proto3.isValid = isValid2;
  proto3.abs = abs;
  proto3.add = add2;
  proto3.subtract = subtract2;
  proto3.as = as;
  proto3.asMilliseconds = asMilliseconds;
  proto3.asSeconds = asSeconds;
  proto3.asMinutes = asMinutes;
  proto3.asHours = asHours;
  proto3.asDays = asDays;
  proto3.asWeeks = asWeeks;
  proto3.asMonths = asMonths;
  proto3.asQuarters = asQuarters;
  proto3.asYears = asYears;
  proto3.valueOf = valueOf2;
  proto3._bubble = bubble;
  proto3.clone = clone3;
  proto3.get = get5;
  proto3.milliseconds = milliseconds;
  proto3.seconds = seconds;
  proto3.minutes = minutes;
  proto3.hours = hours;
  proto3.days = days;
  proto3.weeks = weeks;
  proto3.months = months;
  proto3.years = years;
  proto3.humanize = humanize;
  proto3.toISOString = toISOString2;
  proto3.toString = toISOString2;
  proto3.toJSON = toISOString2;
  proto3.locale = locale;
  proto3.localeData = localeData;
  proto3.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", toISOString2);
  proto3.lang = lang;

  // node_modules/moment/src/lib/units/timestamp.js
  addFormatToken("X", 0, 0, "unix");
  addFormatToken("x", 0, 0, "valueOf");
  addRegexToken("x", matchSigned);
  addRegexToken("X", matchTimestamp);
  addParseToken("X", function(input, array, config) {
    config._d = new Date(parseFloat(input) * 1e3);
  });
  addParseToken("x", function(input, array, config) {
    config._d = new Date(toInt(input));
  });

  // node_modules/moment/src/moment.js
  //! moment.js
  //! version : 2.27.0
  //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
  //! license : MIT
  //! momentjs.com
  hooks.version = "2.27.0";
  setHookCallback(createLocal);
  hooks.fn = prototype_default;
  hooks.min = min;
  hooks.max = max;
  hooks.now = now;
  hooks.utc = createUTC;
  hooks.unix = createUnix;
  hooks.months = listMonths;
  hooks.isDate = isDate;
  hooks.locale = locales7.getSetGlobalLocale;
  hooks.invalid = createInvalid;
  hooks.duration = createDuration;
  hooks.isMoment = isMoment;
  hooks.weekdays = listWeekdays;
  hooks.parseZone = createInZone;
  hooks.localeData = locales7.getLocale;
  hooks.isDuration = isDuration;
  hooks.monthsShort = listMonthsShort;
  hooks.weekdaysMin = listWeekdaysMin;
  hooks.defineLocale = locales7.defineLocale;
  hooks.updateLocale = locales7.updateLocale;
  hooks.locales = locales7.listLocales;
  hooks.weekdaysShort = listWeekdaysShort;
  hooks.normalizeUnits = normalizeUnits;
  hooks.relativeTimeRounding = getSetRelativeTimeRounding;
  hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
  hooks.calendarFormat = getCalendarFormat;
  hooks.prototype = prototype_default;
  hooks.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM"
  };
  var moment_default = hooks;

  // node_modules/moment/src/locale/en-gb.js
  //! moment.js locale configuration
  //! locale : English (United Kingdom) [en-gb]
  //! author : Chris Gedrim : https://github.com/chrisgedrim
  var en_gb_default = moment_default.defineLocale("en-gb", {
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function(number) {
      var b = number % 10, output = ~~(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
      return number + output;
    },
    week: {
      dow: 1,
      doy: 4
    }
  });

  // app/ui/partials/markedDots.js
  function markedDots_default(options = {}, totalAmount, coloredAmount) {
    const {
      dotEmptyClass,
      dotFullClass
    } = Object.assign({
      dotEmptyClass: "text-light",
      dotFullClass: void 0
    }, options);
    const classes = "fas fa-circle fa-xs";
    const emptyClasses = `${classes} ${dotEmptyClass ? dotEmptyClass : ""}`;
    const fullClasses = `${classes} ${dotFullClass ? dotFullClass : ""}`;
    const dots = [];
    for (let index = 0; index < totalAmount; index++) {
      const empty = index >= coloredAmount;
      dots.push(html`<span class="${empty ? emptyClasses : fullClasses}"></span>`);
    }
    return html`<div data-mip-marked-dots>${dots}</div>`;
  }

  // app/ui/partials/splitContainer.js
  class SplitContainer {
    constructor(renderables) {
      this.renderables = renderables;
    }
    render() {
      if (this.renderables === void 0) {
        return "";
      }
      const renderableTemplates = this.renderables.map((renderable, index) => this.getElementTemplate(renderable, index));
      return html`<div class="${this.getClasses()}">${renderableTemplates}</div>`;
    }
    getClasses() {
      return "d-flex flex-grow-1 h-100 justify-content-center";
    }
    getElementContainerClasses(element, index) {
      return classMap({
        "align-items-center": true,
        "d-flex": true,
        "border-left": index !== 0,
        "pl-4": index > 0,
        "pr-4": index < this.renderables.length - 1,
        "py-2": true
      });
    }
    getElementTemplate(element, index) {
      const classes = this.getElementContainerClasses(element, index);
      const output = element.render ? element.render() : element;
      return html`<div class="${classes}" data-split-container-index="${index}">${output}</div>`;
    }
  }

  // app/ui/partials/twoColumns.js
  function twoColumns_default(rows, options = {}) {
    const _options = Object.assign({
      colon: true,
      labelClasses: "text-dark w-50 font-weight-bold",
      rowClasses: "d-flex",
      valueClasses: ""
    }, options);
    return rows.map((row) => {
      return html`<div class="${_options.rowClasses}">
      <span class="${_options.labelClasses}">${row.label}${_options.colon ? ":" : ""}</span>
      <span class="${_options.valueClasses}">${row.value}</span>
    </div>`;
    });
  }

  // DEMO/index.js
  moment5.default.locale = "en-gb";
  const i18n = translations_default("en_US", [], "en-GB");
  const courseMetricsTab = document.getElementById("tab-content-course-metrics");
  const profileTab = document.getElementById("tab-content-profile");
  renderCourseMetricsTab(courseMetricsTab);
  renderProfileTab(profileTab);
  function renderCourseMetricsTab(tab2) {
    const [kpiRow, studentDetailsRow] = tab2.querySelectorAll("div");
    const ly = `${new Date().getFullYear() - 1}-${new Date().getFullYear()}`;
    const totalStudentsCounter = new CounterEmbedded(1097, "far fa-users", "Total students in five years");
    const totalStudentsPanel = new Panel(totalStudentsCounter.render());
    const lyStudentsCounter = new CounterEmbedded(687, "far fa-user", `Total students in ${ly}`);
    const lyStudentsPanel = new Panel(lyStudentsCounter.render());
    const totalClassesCounter = new CounterEmbedded(21, "far fa-school", "Total classes in five years");
    const totalClassesPanel = new Panel(totalClassesCounter.render());
    const lyClassesCounter = new CounterEmbedded("7.7 of 8", "", "Most recent instructor rating (out of 8.0)");
    const lyClassesPanel = new Panel(lyClassesCounter.render());
    const readingLevelIndicator = markedDots_default.bind(null, {
      dotEmptyClass: "empty pr-1",
      dotFullClass: "pr-1"
    }, 5);
    const studentDetailsColumns = [
      {
        field: "name",
        label: "Name",
        sortDirection: "asc"
      },
      {
        field: "age",
        label: "Age",
        type: "NUMBER",
        formula(column, record) {
          return moment5.default.duration(moment5.default().diff(record.birthDate)).years();
        }
      },
      {
        field: "birthDate",
        label: "Date of Birth",
        type: "DATE"
      },
      {
        field: "readingLevel",
        label: "Reading Level",
        template(value) {
          return readingLevelIndicator(value);
        }
      }
    ];
    const studentDetails = [
      {
        name: "Keziah",
        birthDate: new Date(2009, 11, 10),
        readingLevel: 5
      },
      {
        name: "Ayanda",
        birthDate: new Date(2012, 10, 26),
        readingLevel: 3
      },
      {
        name: "Moana",
        birthDate: new Date(2017, 8, 5),
        readingLevel: 0
      }
    ];
    const studentDetailsTable = new TableLit(i18n).render(null, studentDetailsColumns, studentDetails);
    const studentDetailsPanel = new Panel(studentDetailsTable, {title: "Student Details"});
    const teacherCounter = new CounterEmbedded(15, "far fa-chalkboard-teacher", "Teachers");
    const substituteCounter = new CounterEmbedded(6, "far fa-retweet-alt", "Substitute teachers");
    const classSizeCounter = new CounterEmbedded(23.4, "far fa-users-class", "Average class size");
    const classInfoPanel = new Panel(new SplitContainer([teacherCounter, substituteCounter, classSizeCounter]).render(), {externalID: "classInfo"});
    render([totalStudentsPanel.getTemplate(), lyStudentsPanel.getTemplate(), totalClassesPanel.getTemplate(), lyClassesPanel.getTemplate()], kpiRow);
    render([studentDetailsPanel.getTemplate(), classInfoPanel.getTemplate()], studentDetailsRow);
  }
  function renderProfileTab(tab2) {
    const [row1] = tab2.querySelectorAll("div");
    const accountInfoPanel = new Panel("", {title: "Dr. John Meadows"});
    accountInfoPanel.body = twoColumns_default([
      {
        label: "Speciality",
        value: "Pediatry"
      },
      {
        label: "Address",
        value: "123 Main Street"
      }
    ]);
    render(accountInfoPanel.getTemplate(), row1);
  }
})();
