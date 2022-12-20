var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/react-is/cjs/react-is.production.min.js
var require_react_is_production_min = __commonJS({
  "../../node_modules/react-is/cjs/react-is.production.min.js"(exports) {
    "use strict";
    var b = "function" === typeof Symbol && Symbol.for;
    var c = b ? Symbol.for("react.element") : 60103;
    var d = b ? Symbol.for("react.portal") : 60106;
    var e2 = b ? Symbol.for("react.fragment") : 60107;
    var f = b ? Symbol.for("react.strict_mode") : 60108;
    var g = b ? Symbol.for("react.profiler") : 60114;
    var h = b ? Symbol.for("react.provider") : 60109;
    var k = b ? Symbol.for("react.context") : 60110;
    var l = b ? Symbol.for("react.async_mode") : 60111;
    var m = b ? Symbol.for("react.concurrent_mode") : 60111;
    var n2 = b ? Symbol.for("react.forward_ref") : 60112;
    var p = b ? Symbol.for("react.suspense") : 60113;
    var q = b ? Symbol.for("react.suspense_list") : 60120;
    var r2 = b ? Symbol.for("react.memo") : 60115;
    var t2 = b ? Symbol.for("react.lazy") : 60116;
    var v = b ? Symbol.for("react.block") : 60121;
    var w = b ? Symbol.for("react.fundamental") : 60117;
    var x = b ? Symbol.for("react.responder") : 60118;
    var y = b ? Symbol.for("react.scope") : 60119;
    function z(a2) {
      if ("object" === typeof a2 && null !== a2) {
        var u = a2.$$typeof;
        switch (u) {
          case c:
            switch (a2 = a2.type, a2) {
              case l:
              case m:
              case e2:
              case g:
              case f:
              case p:
                return a2;
              default:
                switch (a2 = a2 && a2.$$typeof, a2) {
                  case k:
                  case n2:
                  case t2:
                  case r2:
                  case h:
                    return a2;
                  default:
                    return u;
                }
            }
          case d:
            return u;
        }
      }
    }
    function A(a2) {
      return z(a2) === m;
    }
    exports.AsyncMode = l;
    exports.ConcurrentMode = m;
    exports.ContextConsumer = k;
    exports.ContextProvider = h;
    exports.Element = c;
    exports.ForwardRef = n2;
    exports.Fragment = e2;
    exports.Lazy = t2;
    exports.Memo = r2;
    exports.Portal = d;
    exports.Profiler = g;
    exports.StrictMode = f;
    exports.Suspense = p;
    exports.isAsyncMode = function(a2) {
      return A(a2) || z(a2) === l;
    };
    exports.isConcurrentMode = A;
    exports.isContextConsumer = function(a2) {
      return z(a2) === k;
    };
    exports.isContextProvider = function(a2) {
      return z(a2) === h;
    };
    exports.isElement = function(a2) {
      return "object" === typeof a2 && null !== a2 && a2.$$typeof === c;
    };
    exports.isForwardRef = function(a2) {
      return z(a2) === n2;
    };
    exports.isFragment = function(a2) {
      return z(a2) === e2;
    };
    exports.isLazy = function(a2) {
      return z(a2) === t2;
    };
    exports.isMemo = function(a2) {
      return z(a2) === r2;
    };
    exports.isPortal = function(a2) {
      return z(a2) === d;
    };
    exports.isProfiler = function(a2) {
      return z(a2) === g;
    };
    exports.isStrictMode = function(a2) {
      return z(a2) === f;
    };
    exports.isSuspense = function(a2) {
      return z(a2) === p;
    };
    exports.isValidElementType = function(a2) {
      return "string" === typeof a2 || "function" === typeof a2 || a2 === e2 || a2 === m || a2 === g || a2 === f || a2 === p || a2 === q || "object" === typeof a2 && null !== a2 && (a2.$$typeof === t2 || a2.$$typeof === r2 || a2.$$typeof === h || a2.$$typeof === k || a2.$$typeof === n2 || a2.$$typeof === w || a2.$$typeof === x || a2.$$typeof === y || a2.$$typeof === v);
    };
    exports.typeOf = z;
  }
});

// ../../node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "../../node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal4 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef2(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal4;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef2;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// ../../node_modules/react-is/index.js
var require_react_is = __commonJS({
  "../../node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module.exports = require_react_is_production_min();
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// ../../node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "../../node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i2 = 0; i2 < 10; i2++) {
          test2["_" + String.fromCharCode(i2)] = i2;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
          return test2[n2];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i2 = 0; i2 < symbols.length; i2++) {
            if (propIsEnumerable.call(from, symbols[i2])) {
              to[symbols[i2]] = from[symbols[i2]];
            }
          }
        }
      }
      return to;
    };
  }
});

// ../../node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "../../node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// ../../node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "../../node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// ../../node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "../../node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (process.env.NODE_ENV !== "production") {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (process.env.NODE_ENV !== "production") {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (process.env.NODE_ENV !== "production") {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// ../../node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "../../node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (process.env.NODE_ENV !== "production") {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (process.env.NODE_ENV !== "production") {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (process.env.NODE_ENV !== "production" && typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i2 = 0; i2 < propValue.length; i2++) {
            var error = typeChecker(propValue, i2, componentName, location, propFullName + "[" + i2 + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (process.env.NODE_ENV !== "production") {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i2 = 0; i2 < expectedValues.length; i2++) {
            if (is(propValue, expectedValues[i2])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          process.env.NODE_ENV !== "production" ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
          var checker = arrayOfTypeCheckers[i2];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i2 + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i3 = 0; i3 < arrayOfTypeCheckers.length; i3++) {
            var checker2 = arrayOfTypeCheckers[i3];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// ../../node_modules/prop-types/factoryWithThrowingShims.js
var require_factoryWithThrowingShims = __commonJS({
  "../../node_modules/prop-types/factoryWithThrowingShims.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    function emptyFunction() {
    }
    function emptyFunctionWithReset() {
    }
    emptyFunctionWithReset.resetWarningCache = emptyFunction;
    module.exports = function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
          return;
        }
        var err = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        err.name = "Invariant Violation";
        throw err;
      }
      ;
      shim.isRequired = shim;
      function getShim() {
        return shim;
      }
      ;
      var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// ../../node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "../../node_modules/prop-types/index.js"(exports, module) {
    if (process.env.NODE_ENV !== "production") {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = require_factoryWithThrowingShims()();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// ../../node_modules/downshift/node_modules/react-is/cjs/react-is.production.min.js
var require_react_is_production_min2 = __commonJS({
  "../../node_modules/downshift/node_modules/react-is/cjs/react-is.production.min.js"(exports) {
    "use strict";
    var b = 60103;
    var c = 60106;
    var d = 60107;
    var e2 = 60108;
    var f = 60114;
    var g = 60109;
    var h = 60110;
    var k = 60112;
    var l = 60113;
    var m = 60120;
    var n2 = 60115;
    var p = 60116;
    var q = 60121;
    var r2 = 60122;
    var u = 60117;
    var v = 60129;
    var w = 60131;
    if ("function" === typeof Symbol && Symbol.for) {
      x = Symbol.for;
      b = x("react.element");
      c = x("react.portal");
      d = x("react.fragment");
      e2 = x("react.strict_mode");
      f = x("react.profiler");
      g = x("react.provider");
      h = x("react.context");
      k = x("react.forward_ref");
      l = x("react.suspense");
      m = x("react.suspense_list");
      n2 = x("react.memo");
      p = x("react.lazy");
      q = x("react.block");
      r2 = x("react.server.block");
      u = x("react.fundamental");
      v = x("react.debug_trace_mode");
      w = x("react.legacy_hidden");
    }
    var x;
    function y(a2) {
      if ("object" === typeof a2 && null !== a2) {
        var t2 = a2.$$typeof;
        switch (t2) {
          case b:
            switch (a2 = a2.type, a2) {
              case d:
              case f:
              case e2:
              case l:
              case m:
                return a2;
              default:
                switch (a2 = a2 && a2.$$typeof, a2) {
                  case h:
                  case k:
                  case p:
                  case n2:
                  case g:
                    return a2;
                  default:
                    return t2;
                }
            }
          case c:
            return t2;
        }
      }
    }
    var z = g;
    var A = b;
    var B = k;
    var C = d;
    var D = p;
    var E = n2;
    var F = c;
    var G = f;
    var H = e2;
    var I = l;
    exports.ContextConsumer = h;
    exports.ContextProvider = z;
    exports.Element = A;
    exports.ForwardRef = B;
    exports.Fragment = C;
    exports.Lazy = D;
    exports.Memo = E;
    exports.Portal = F;
    exports.Profiler = G;
    exports.StrictMode = H;
    exports.Suspense = I;
    exports.isAsyncMode = function() {
      return false;
    };
    exports.isConcurrentMode = function() {
      return false;
    };
    exports.isContextConsumer = function(a2) {
      return y(a2) === h;
    };
    exports.isContextProvider = function(a2) {
      return y(a2) === g;
    };
    exports.isElement = function(a2) {
      return "object" === typeof a2 && null !== a2 && a2.$$typeof === b;
    };
    exports.isForwardRef = function(a2) {
      return y(a2) === k;
    };
    exports.isFragment = function(a2) {
      return y(a2) === d;
    };
    exports.isLazy = function(a2) {
      return y(a2) === p;
    };
    exports.isMemo = function(a2) {
      return y(a2) === n2;
    };
    exports.isPortal = function(a2) {
      return y(a2) === c;
    };
    exports.isProfiler = function(a2) {
      return y(a2) === f;
    };
    exports.isStrictMode = function(a2) {
      return y(a2) === e2;
    };
    exports.isSuspense = function(a2) {
      return y(a2) === l;
    };
    exports.isValidElementType = function(a2) {
      return "string" === typeof a2 || "function" === typeof a2 || a2 === d || a2 === f || a2 === v || a2 === e2 || a2 === l || a2 === m || a2 === w || "object" === typeof a2 && null !== a2 && (a2.$$typeof === p || a2.$$typeof === n2 || a2.$$typeof === g || a2.$$typeof === h || a2.$$typeof === k || a2.$$typeof === u || a2.$$typeof === q || a2[0] === r2) ? true : false;
    };
    exports.typeOf = y;
  }
});

// ../../node_modules/downshift/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development2 = __commonJS({
  "../../node_modules/downshift/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        var REACT_FRAGMENT_TYPE = 60107;
        var REACT_STRICT_MODE_TYPE = 60108;
        var REACT_PROFILER_TYPE = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        var REACT_SUSPENSE_TYPE = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
          REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
          REACT_PROFILER_TYPE = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var enableScopeAPI = false;
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal4 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef2(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal4;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef2;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// ../../node_modules/downshift/node_modules/react-is/index.js
var require_react_is2 = __commonJS({
  "../../node_modules/downshift/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module.exports = require_react_is_production_min2();
    } else {
      module.exports = require_react_is_development2();
    }
  }
});

// ../../node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "../../node_modules/tslib/tslib.js"(exports, module) {
    var __extends2;
    var __assign2;
    var __rest2;
    var __decorate2;
    var __param2;
    var __metadata2;
    var __awaiter2;
    var __generator2;
    var __exportStar2;
    var __values2;
    var __read2;
    var __spread2;
    var __spreadArrays2;
    var __spreadArray2;
    var __await2;
    var __asyncGenerator2;
    var __asyncDelegator2;
    var __asyncValues2;
    var __makeTemplateObject2;
    var __importStar2;
    var __importDefault2;
    var __classPrivateFieldGet2;
    var __classPrivateFieldSet2;
    var __classPrivateFieldIn2;
    var __createBinding2;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p))
            d[p] = b[p];
      };
      __extends2 = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign2 = Object.assign || function(t2) {
        for (var s, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
          s = arguments[i2];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t2[p] = s[p];
        }
        return t2;
      };
      __rest2 = function(s, e2) {
        var t2 = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0)
            t2[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i2 = 0, p = Object.getOwnPropertySymbols(s); i2 < p.length; i2++) {
            if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i2]))
              t2[p[i2]] = s[p[i2]];
          }
        return t2;
      };
      __decorate2 = function(decorators, target, key, desc) {
        var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r2 = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i2 = decorators.length - 1; i2 >= 0; i2--)
            if (d = decorators[i2])
              r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
        return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
      };
      __param2 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata2 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter2 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e2) {
              reject(e2);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e2) {
              reject(e2);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator2 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t2[0] & 1)
            throw t2[1];
          return t2[1];
        }, trys: [], ops: [] }, f, y, t2, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n2) {
          return function(v) {
            return step([n2, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (g && (g = 0, op[0] && (_ = 0)), _)
            try {
              if (f = 1, y && (t2 = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t2 = y["return"]) && t2.call(y), 0) : y.next) && !(t2 = t2.call(y, op[1])).done)
                return t2;
              if (y = 0, t2)
                op = [op[0] & 2, t2.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t2 = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t2[1]) {
                    _.label = t2[1];
                    t2 = op;
                    break;
                  }
                  if (t2 && _.label < t2[2]) {
                    _.label = t2[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t2[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e2) {
              op = [6, e2];
              y = 0;
            } finally {
              f = t2 = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar2 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding2(o, m, p);
      };
      __createBinding2 = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __values2 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i2 = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i2 >= o.length)
                o = void 0;
              return { value: o && o[i2++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read2 = function(o, n2) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i2 = m.call(o), r2, ar = [], e2;
        try {
          while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
            ar.push(r2.value);
        } catch (error) {
          e2 = { error };
        } finally {
          try {
            if (r2 && !r2.done && (m = i2["return"]))
              m.call(i2);
          } finally {
            if (e2)
              throw e2.error;
          }
        }
        return ar;
      };
      __spread2 = function() {
        for (var ar = [], i2 = 0; i2 < arguments.length; i2++)
          ar = ar.concat(__read2(arguments[i2]));
        return ar;
      };
      __spreadArrays2 = function() {
        for (var s = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
          s += arguments[i2].length;
        for (var r2 = Array(s), k = 0, i2 = 0; i2 < il; i2++)
          for (var a2 = arguments[i2], j = 0, jl = a2.length; j < jl; j++, k++)
            r2[k] = a2[j];
        return r2;
      };
      __spreadArray2 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i2 = 0, l = from.length, ar; i2 < l; i2++) {
            if (ar || !(i2 in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i2);
              ar[i2] = from[i2];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await2 = function(v) {
        return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
      };
      __asyncGenerator2 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i2, q = [];
        return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2;
        function verb(n2) {
          if (g[n2])
            i2[n2] = function(v) {
              return new Promise(function(a2, b) {
                q.push([n2, v, a2, b]) > 1 || resume(n2, v);
              });
            };
        }
        function resume(n2, v) {
          try {
            step(g[n2](v));
          } catch (e2) {
            settle(q[0][3], e2);
          }
        }
        function step(r2) {
          r2.value instanceof __await2 ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q[0][2], r2);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator2 = function(o) {
        var i2, p;
        return i2 = {}, verb("next"), verb("throw", function(e2) {
          throw e2;
        }), verb("return"), i2[Symbol.iterator] = function() {
          return this;
        }, i2;
        function verb(n2, f) {
          i2[n2] = o[n2] ? function(v) {
            return (p = !p) ? { value: __await2(o[n2](v)), done: n2 === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues2 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i2;
        return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2);
        function verb(n2) {
          i2[n2] = o[n2] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n2](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject2 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar2 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding2(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault2 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet2 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      __classPrivateFieldIn2 = function(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      };
      exporter("__extends", __extends2);
      exporter("__assign", __assign2);
      exporter("__rest", __rest2);
      exporter("__decorate", __decorate2);
      exporter("__param", __param2);
      exporter("__metadata", __metadata2);
      exporter("__awaiter", __awaiter2);
      exporter("__generator", __generator2);
      exporter("__exportStar", __exportStar2);
      exporter("__createBinding", __createBinding2);
      exporter("__values", __values2);
      exporter("__read", __read2);
      exporter("__spread", __spread2);
      exporter("__spreadArrays", __spreadArrays2);
      exporter("__spreadArray", __spreadArray2);
      exporter("__await", __await2);
      exporter("__asyncGenerator", __asyncGenerator2);
      exporter("__asyncDelegator", __asyncDelegator2);
      exporter("__asyncValues", __asyncValues2);
      exporter("__makeTemplateObject", __makeTemplateObject2);
      exporter("__importStar", __importStar2);
      exporter("__importDefault", __importDefault2);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
      exporter("__classPrivateFieldIn", __classPrivateFieldIn2);
    });
  }
});

// src/Icon.jsx
import React from "react";
function Icon({ className, path, height = 24, color = "currentColor", viewBox = "0 0 24 24" }) {
  return /* @__PURE__ */ React.createElement("svg", { className, viewBox, height, fill: color }, /* @__PURE__ */ React.createElement("path", { d: path }));
}
var Icon_default = Icon;

// src/FieldCheckbox.jsx
import React4 from "react";

// src/Checkbox.jsx
import React2 from "react";
import { Flex, Box, Label } from "theme-ui";
function Checkbox({ checked = false, onChange, label, labelSx = {} }) {
  const content = /* @__PURE__ */ React2.createElement(Box, { onKeyPress: (e2) => ["Enter", " "].includes(e2.key) && onChange(!checked), onClick: () => onChange(!checked), sx: { display: "inline-block", position: "relative", cursor: "pointer", width: 18, minWidth: 18, height: 18, bg: "transparent", borderRadius: 2, borderWidth: 2, borderStyle: "solid", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" } }, /* @__PURE__ */ React2.createElement(Box, { sx: { position: "absolute", top: "1px", left: "4px", width: 6, height: 10, pointerEvents: "none", transform: "rotate(45deg)", borderTop: "none", borderRightColor: "text", borderRightStyle: "solid", borderRightWidth: 2, borderBottomColor: "text", borderBottomStyle: "solid", borderBottomWidth: 2, borderLeft: "none", opacity: checked ? 1 : 0 } }));
  if (label)
    return /* @__PURE__ */ React2.createElement(Flex, { sx: { alignItems: "center" } }, content, /* @__PURE__ */ React2.createElement(Label, { sx: { ml: 2, ...labelSx }, onClick: () => onChange(!checked) }, label));
  return content;
}
var Checkbox_default = Checkbox;

// src/FormErrorBox.jsx
import React3 from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Box as Box2 } from "theme-ui";
var FormError = styled.div`
  font-size: 10px;
  line-height: 18px;
  ${(props) => {
  var _a, _b;
  return css`color: ${((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.danger) ? props.theme.colors.danger : "red"}`;
}}
  text-transform: uppercase;
  font-weight: 500;
`;
function FormErrorBox({ errors, touched, fieldName }) {
  return /* @__PURE__ */ React3.createElement(Box2, { sx: { minHeight: 18 } }, errors[fieldName] && touched[fieldName] && /* @__PURE__ */ React3.createElement(FormError, null, errors[fieldName]));
}
var FormErrorBox_default = FormErrorBox;

// src/FieldCheckbox.jsx
var FieldCheckbox = React4.forwardRef(({ form, field, ...rest }, ref) => {
  return /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement(Checkbox_default, { ...field, ...rest, checked: field.value, onChange: (checked) => form.setFieldValue(field.name, checked), ref }), /* @__PURE__ */ React4.createElement(FormErrorBox_default, { fieldName: field.name, errors: form.errors, touched: form.touched }));
});
FieldCheckbox.displayName = "FieldCheckbox";
var FieldCheckbox_default = FieldCheckbox;

// src/FieldInput.jsx
import React6 from "react";

// src/Input.jsx
import React5 from "react";
import { css as transformStyleObject, get } from "@theme-ui/css";
import { useTheme } from "@emotion/react";
import { css as createClassName } from "@emotion/css";
var Input = React5.forwardRef(({ __themeKey = "forms", __css, variant = "input", sx: sx2, style, invalid, ...rest }, ref) => {
  var _a;
  const theme = useTheme();
  const autofillStyles = {
    boxShadow: "inset 0 0 0 1000px var(--theme-ui-input-autofill-bg)",
    fontSize: "inherit",
    ":first-line": {
      fontSize: "1rem"
    }
  };
  const baseStyles = {
    display: "block",
    appearance: "none",
    fontSize: "inherit",
    lineHeight: 1,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: invalid ? ((_a = theme == null ? void 0 : theme.colors) == null ? void 0 : _a.danger) || "red" : `inherit`,
    color: "inherit",
    outline: "none",
    ":autofill, :autofill:hover, :autofill:focus": autofillStyles,
    ":-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus": autofillStyles
  };
  const __cssStyles = transformStyleObject(__css)(theme);
  const variantInTheme = get(theme, `${__themeKey}.${variant}`) || get(theme, variant);
  const variantStyles = variantInTheme && transformStyleObject(variantInTheme)(theme);
  const sxPropStyles = transformStyleObject(sx2)(theme);
  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles
  };
  const className = createClassName(emotionStyle);
  return /* @__PURE__ */ React5.createElement("input", { ref, className, style, ...rest });
});
Input.displayName = "Input";
var Input_default = Input;

// src/FieldInput.jsx
var FieldInput = React6.forwardRef(({ form, field, width, ...rest }, ref) => {
  return /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement(Input_default, { ...field, ...rest, ref, invalid: form.touched[field.name] && form.errors[field.name] }), /* @__PURE__ */ React6.createElement(FormErrorBox_default, { fieldName: field.name, errors: form.errors, touched: form.touched }));
});
FieldInput.displayName = "FieldInput";
var FieldInput_default = FieldInput;

// src/FieldSelect.jsx
import React8 from "react";

// src/Select.jsx
import React7 from "react";
import { css as transformStyleObject2, get as get2 } from "@theme-ui/css";
import { useTheme as useTheme2 } from "@emotion/react";
import { css as createClassName2 } from "@emotion/css";
var Select = React7.forwardRef(({ __themeKey = "forms", __css, variant = "select", sx: sx2, style, children, invalid = false, placeholder = null, multiple = false, value, ...rest }, ref) => {
  var _a;
  const theme = useTheme2();
  const baseStyles = {
    display: "inline-block",
    appearance: "none",
    fontSize: "inherit",
    lineHeight: 1,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "inherit",
    color: "inherit",
    outline: "none",
    backgroundRepeat: "no-repeat",
    backgroundImage: multiple ? "none" : `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iIzZlNzY4MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNC40MjcgOS40MjdsMy4zOTYgMy4zOTZhLjI1MS4yNTEgMCAwMC4zNTQgMGwzLjM5Ni0zLjM5NkEuMjUuMjUgMCAwMDExLjM5NiA5SDQuNjA0YS4yNS4yNSAwIDAwLS4xNzcuNDI3ek00LjQyMyA2LjQ3TDcuODIgMy4wNzJhLjI1LjI1IDAgMDEuMzU0IDBMMTEuNTcgNi40N2EuMjUuMjUgMCAwMS0uMTc3LjQyN0g0LjZhLjI1LjI1IDAgMDEtLjE3Ny0uNDI3eiIgLz48L3N2Zz4=")`,
    backgroundPosition: "right 4px center",
    backgroundSize: "16px",
    paddingRight: "24px"
  };
  const __cssStyles = transformStyleObject2(__css)(theme);
  const variantInTheme = get2(theme, `${__themeKey}.${variant}`) || get2(theme, variant);
  const variantStyles = variantInTheme && transformStyleObject2(variantInTheme)(theme);
  const sxPropStyles = transformStyleObject2(sx2)(theme);
  const invalidObj = invalid ? { borderColor: ((_a = theme == null ? void 0 : theme.colors) == null ? void 0 : _a.danger) || "red" } : {};
  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles,
    ...invalidObj
  };
  const className = createClassName2(emotionStyle);
  const defaultValue = multiple ? [] : "";
  if (!value) {
    value = defaultValue;
  }
  return /* @__PURE__ */ React7.createElement("select", { ref, className, style, multiple, value, ...rest }, placeholder !== void 0 && placeholder !== null && /* @__PURE__ */ React7.createElement("option", { value: "" }, placeholder), children);
});
var Select_default = Select;

// src/FieldSelect.jsx
var FieldSelect = React8.forwardRef(({ form, field, children, ...rest }, ref) => {
  return /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement(Select_default, { ...field, ...rest, ref, invalid: form.touched[field.name] && form.errors[field.name] }, children), /* @__PURE__ */ React8.createElement(FormErrorBox_default, { fieldName: field.name, errors: form.errors, touched: form.touched }));
});
FieldSelect.displayName = "FieldSelect";
var FieldSelect_default = FieldSelect;

// src/FieldInputPassword.jsx
import React10 from "react";

// src/InputPassword.jsx
import React9 from "react";
import { Flex as Flex2, Box as Box3 } from "theme-ui";
import { css as transformStyleObject3, get as get3 } from "@theme-ui/css";
import { useTheme as useTheme3 } from "@emotion/react";
var InputPassword = React9.forwardRef(({ __themeKey = "forms", __css, variant = "input", sx: sx2, style, invalid, ...rest }, ref) => {
  var _a;
  const theme = useTheme3();
  const autofillStyles = {
    boxShadow: "inset 0 0 0 1000px var(--theme-ui-input-autofill-bg)",
    fontSize: "inherit",
    ":first-line": {
      fontSize: "1rem"
    }
  };
  const baseStyles = {
    fontSize: "inherit",
    lineHeight: "inherit",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: invalid ? ((_a = theme == null ? void 0 : theme.colors) == null ? void 0 : _a.danger) || "red" : `inherit`,
    color: "inherit",
    outline: "none",
    backgroundColor: "transparent",
    ":autofill, :autofill:hover, :autofill:focus": autofillStyles,
    ":-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus": autofillStyles
  };
  const __cssStyles = transformStyleObject3(__css)(theme);
  const variantInTheme = get3(theme, `${__themeKey}.${variant}`) || get3(theme, variant);
  const variantStyles = variantInTheme && transformStyleObject3(variantInTheme)(theme);
  const sxPropStyles = transformStyleObject3(sx2)(theme);
  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles
  };
  const [passwordShown, setPasswordShown] = React9.useState(false);
  const togglePasswordVisiblity = (e2) => {
    e2.preventDefault();
    setPasswordShown((currentPasswordShown) => !currentPasswordShown);
  };
  const pathIcon = passwordShown ? "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" : "M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z";
  return /* @__PURE__ */ React9.createElement(Flex2, { sx: { ...emotionStyle, justifyContent: "space-between", position: "relative", alignItems: "center", padding: 0, paddingRight: 1 }, style }, /* @__PURE__ */ React9.createElement("input", { type: passwordShown ? "text" : "password", ...rest, style: { width: "100%", border: 0, backgroundColor: "transparent", outline: "none", padding: (emotionStyle == null ? void 0 : emotionStyle.padding) || 0, lineHeight: (emotionStyle == null ? void 0 : emotionStyle.lineHeight) || "inherit", fontSize: (emotionStyle == null ? void 0 : emotionStyle.fontSize) || "inherit", color: (emotionStyle == null ? void 0 : emotionStyle.color) || "inherit" }, ref }), /* @__PURE__ */ React9.createElement(Box3, { sx: { cursor: "pointer", display: "flex", userSelect: "none" }, onClick: togglePasswordVisiblity }, /* @__PURE__ */ React9.createElement("svg", { width: 20, height: 20, viewBox: "0 0 24 24", fill: "currentColor" }, /* @__PURE__ */ React9.createElement("path", { d: pathIcon }))));
});
InputPassword.displayName = "InputPassword";
var InputPassword_default = InputPassword;

// src/FieldInputPassword.jsx
var FieldInputPassword = React10.forwardRef(({ form, field, ...rest }, ref) => {
  return /* @__PURE__ */ React10.createElement(React10.Fragment, null, /* @__PURE__ */ React10.createElement(InputPassword_default, { ...field, ...rest, ref, invalid: form.touched[field.name] && form.errors[field.name] }), /* @__PURE__ */ React10.createElement(FormErrorBox_default, { fieldName: field.name, errors: form.errors, touched: form.touched }));
});
FieldInputPassword.displayName = "FieldInputPassword";
var FieldInputPassword_default = FieldInputPassword;

// src/FieldTextarea.jsx
import React12 from "react";

// src/Textarea.jsx
import React11 from "react";
import { css as transformStyleObject4, get as get4 } from "@theme-ui/css";
import { useTheme as useTheme4 } from "@emotion/react";
import { css as createClassName3 } from "@emotion/css";
var Textarea = React11.forwardRef(({ __themeKey = "forms", __css, variant = "input", sx: sx2, style, invalid, ...rest }, ref) => {
  var _a;
  const theme = useTheme4();
  const autofillStyles = {
    boxShadow: "inset 0 0 0 1000px var(--theme-ui-input-autofill-bg)",
    fontSize: "inherit",
    ":first-line": {
      fontSize: "1rem"
    }
  };
  const baseStyles = {
    display: "block",
    appearance: "none",
    fontSize: "inherit",
    lineHeight: 1,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: invalid ? ((_a = theme == null ? void 0 : theme.colors) == null ? void 0 : _a.danger) || "red" : `inherit`,
    color: "inherit",
    outline: "none",
    ":autofill, :autofill:hover, :autofill:focus": autofillStyles,
    ":-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus": autofillStyles
  };
  const __cssStyles = transformStyleObject4(__css)(theme);
  const variantInTheme = get4(theme, `${__themeKey}.${variant}`) || get4(theme, variant);
  const variantStyles = variantInTheme && transformStyleObject4(variantInTheme)(theme);
  const sxPropStyles = transformStyleObject4(sx2)(theme);
  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles
  };
  const className = createClassName3(emotionStyle);
  return /* @__PURE__ */ React11.createElement("textarea", { ref, className, style, ...rest });
});
Textarea.displayName = "Textarea";
var Textarea_default = Textarea;

// src/FieldTextarea.jsx
var FieldTextarea = React12.forwardRef(({ form, field, width, ...rest }, ref) => {
  return /* @__PURE__ */ React12.createElement(React12.Fragment, null, /* @__PURE__ */ React12.createElement(Textarea_default, { ...field, ...rest, ref, invalid: form.touched[field.name] && form.errors[field.name] }), /* @__PURE__ */ React12.createElement(FormErrorBox_default, { fieldName: field.name, errors: form.errors, touched: form.touched }));
});
FieldTextarea.displayName = "FieldTextarea";
var FieldTextarea_default = FieldTextarea;

// src/InputMasked.jsx
import React13 from "react";
import { css as transformStyleObject5, get as get5 } from "@theme-ui/css";
import { useTheme as useTheme5 } from "@emotion/react";
import { css as createClassName4 } from "@emotion/css";
import { IMaskInput } from "react-imask";
var InputMasked = React13.forwardRef(({ __themeKey = "forms", __css, variant = "input", sx: sx2, style, invalid, ...rest }, ref) => {
  var _a;
  const theme = useTheme5();
  const autofillStyles = {
    boxShadow: "inset 0 0 0 1000px var(--theme-ui-input-autofill-bg)",
    fontSize: "inherit",
    ":first-line": {
      fontSize: "1rem"
    }
  };
  const baseStyles = {
    display: "block",
    appearance: "none",
    fontSize: "inherit",
    lineHeight: "inherit",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: invalid ? ((_a = theme == null ? void 0 : theme.colors) == null ? void 0 : _a.danger) || "red" : `inherit`,
    color: "inherit",
    outline: "none",
    ":autofill, :autofill:hover, :autofill:focus": autofillStyles,
    ":-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus": autofillStyles
  };
  const __cssStyles = transformStyleObject5(__css)(theme);
  const variantInTheme = get5(theme, `${__themeKey}.${variant}`) || get5(theme, variant);
  const variantStyles = variantInTheme && transformStyleObject5(variantInTheme)(theme);
  const sxPropStyles = transformStyleObject5(sx2)(theme);
  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles
  };
  const className = createClassName4(emotionStyle);
  return /* @__PURE__ */ React13.createElement(IMaskInput, { className, style, ...rest, ref });
});
InputMasked.displayName = "InputMasked";
var InputMasked_default = InputMasked;

// src/InputSearch.jsx
import React14 from "react";
import { Flex as Flex3, Box as Box4 } from "theme-ui";
import { css as transformStyleObject6, get as get6 } from "@theme-ui/css";
import { useTheme as useTheme6 } from "@emotion/react";
import { useMergeRefs } from "use-callback-ref";
var InputSearch = React14.forwardRef(({ __themeKey = "forms", __css, variant = "input", sx: sx2, style, invalid, value = "", onChange, ...rest }, ref) => {
  var _a;
  const theme = useTheme6();
  const localRef = React14.useRef();
  const autofillStyles = {
    boxShadow: "inset 0 0 0 1000px var(--theme-ui-input-autofill-bg)",
    fontSize: "inherit",
    ":first-line": {
      fontSize: "1rem"
    }
  };
  const baseStyles = {
    appearance: "none",
    fontSize: "inherit",
    lineHeight: 1,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: invalid ? ((_a = theme == null ? void 0 : theme.colors) == null ? void 0 : _a.danger) || "red" : `inherit`,
    color: "inherit",
    outline: "none",
    backgroundColor: "transparent",
    "input[type=search]": {
      "WebkitAppearance": "textfield",
      "WebkitBoxSizing": "content-box"
    },
    'input[type="search"]::-webkit-search-decoration': {
      "WebkitAppearance": "none",
      appearance: "none"
    },
    'input[type="search"]::-webkit-search-cancel-button': {
      "WebkitAppearance": "none",
      appearance: "none"
    },
    'input[type="search"]::-webkit-search-results-button': {
      "WebkitAppearance": "none",
      appearance: "none"
    },
    'input[type="search"]::-webkit-search-results-decoration': {
      "WebkitAppearance": "none",
      appearance: "none"
    },
    ":autofill, :autofill:hover, :autofill:focus": autofillStyles,
    ":-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus": autofillStyles
  };
  const __cssStyles = transformStyleObject6(__css)(theme);
  const variantInTheme = get6(theme, `${__themeKey}.${variant}`) || get6(theme, variant);
  const variantStyles = variantInTheme && transformStyleObject6(variantInTheme)(theme);
  const sxPropStyles = transformStyleObject6(sx2)(theme);
  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles
  };
  function handleIconClick(e2) {
    if (value) {
      e2.target.value = "";
      onChange(e2);
    } else {
      localRef.current.focus();
    }
  }
  const pathIcon = !value ? "M14.76 13.27L20.49 19 19 20.49l-5.73-5.73C12.2 15.53 10.91 16 9.5 16A6.5 6.5 0 1116 9.5c0 1.41-.47 2.7-1.24 3.77zM9.5 5C7.01 5 5 7.01 5 9.5S7.01 14 9.5 14 14 11.99 14 9.5 11.99 5 9.5 5z" : "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z";
  return /* @__PURE__ */ React14.createElement(Flex3, { sx: { ...emotionStyle, flexWrap: "nowrap", justifyContent: "space-between", alignItems: "center", p: 0 } }, /* @__PURE__ */ React14.createElement(Box4, { sx: { cursor: "pointer", userSelect: "none", p: 1, pl: 2, pr: 1, minWidth: 32 }, onClick: handleIconClick }, /* @__PURE__ */ React14.createElement("svg", { width: 20, height: 20, viewBox: "0 0 24 24", fill: "currentColor" }, /* @__PURE__ */ React14.createElement("path", { d: pathIcon }))), /* @__PURE__ */ React14.createElement(Flex3, { sx: { flexGrow: 1 } }, /* @__PURE__ */ React14.createElement("input", { type: "search", value, onChange, ...rest, style: { width: "100%", border: 0, backgroundColor: "transparent", outline: "none", padding: (emotionStyle == null ? void 0 : emotionStyle.padding) || 0, lineHeight: (emotionStyle == null ? void 0 : emotionStyle.lineHeight) || "inherit", fontSize: (emotionStyle == null ? void 0 : emotionStyle.fontSize) || "inherit", color: (emotionStyle == null ? void 0 : emotionStyle.color) || "inherit", paddingLeft: 0 }, ref: useMergeRefs([localRef, ref]) })));
});
InputSearch.displayName = "InputSearch";
var InputSearch_default = InputSearch;

// src/ButtonWithLoading.jsx
import React15 from "react";
import { css as transformStyleObject7, get as get7 } from "@theme-ui/css";
import { useTheme as useTheme7 } from "@emotion/react";
import { Box as Box5 } from "theme-ui";
function ButtonWithLoading({ children, loading, className, __themeKey = "buttons", __css, variant = "primary", sx: sx2, ...rest }) {
  const theme = useTheme7();
  const baseStyles = {
    padding: 0,
    border: 0,
    background: "transparent",
    appearance: "none",
    cursor: "pointer",
    position: "relative",
    userSelect: "none",
    lineHeight: 1,
    whiteSpace: "nowrap",
    fontFamily: "inherit",
    fontSize: "inherit",
    pointerEvents: loading ? "none" : "auto",
    bg: get7(theme, `${__themeKey}.${variant}.bg`) || get7(theme, `colors.${variant}`),
    color: get7(theme, `${__themeKey}.${variant}.color`) || get7(theme, `colors.${variant}Contrast`),
    "& > i": {
      display: "inline-block",
      lineHeight: 0,
      pointerEvents: "none",
      verticalAlign: "-2px",
      opacity: loading ? 1 : 0,
      marginLeft: loading ? 0 : "-16px",
      marginRight: loading ? "8px" : 0,
      transition: "all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)"
    }
  };
  const __cssStyles = transformStyleObject7(__css)(theme);
  const variantInTheme = get7(theme, `${__themeKey}.${variant}`) || get7(theme, variant);
  const variantStyles = variantInTheme && transformStyleObject7(variantInTheme)(theme);
  const sxPropStyles = transformStyleObject7(sx2)(theme);
  const style = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles
  };
  return /* @__PURE__ */ React15.createElement(Box5, { as: "button", className, sx: style, ...rest }, loading && /* @__PURE__ */ React15.createElement("i", null, /* @__PURE__ */ React15.createElement("svg", { height: 16, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" }, /* @__PURE__ */ React15.createElement("circle", { cx: "50", cy: "50", fill: "none", stroke: "currentColor", strokeWidth: "10", r: "35", strokeDasharray: "164.93361431346415 56.97787143782138", transform: "rotate(305.844 50 50)" }, /* @__PURE__ */ React15.createElement("animateTransform", { attributeName: "transform", type: "rotate", calcMode: "linear", values: "0 50 50;360 50 50", keyTimes: "0;1", dur: "1s", begin: "0s", repeatCount: "indefinite" })))), /* @__PURE__ */ React15.createElement("span", { style: { display: "inline-block", pointerEvents: "none" } }, children));
}
ButtonWithLoading.displayName = "ButtonWithLoading";
var ButtonWithLoading_default = ButtonWithLoading;

// src/Button.jsx
import React16 from "react";
import { css as transformStyleObject8, get as get8 } from "@theme-ui/css";
import { useTheme as useTheme8 } from "@emotion/react";
import { css as createClassName5 } from "@emotion/css";
var Button = React16.forwardRef(({ __themeKey = "buttons", __css, variant = "primary", sx: sx2, style, children, ...rest }, ref) => {
  const theme = useTheme8();
  const baseStyles = {
    padding: 0,
    border: 0,
    appearance: "none",
    cursor: "pointer",
    position: "relative",
    userSelect: "none",
    lineHeight: 1,
    whiteSpace: "nowrap",
    fontFamily: "inherit",
    fontSize: "inherit",
    background: get8(theme, `${__themeKey}.${variant}.bg`) || get8(theme, `colors.${variant}`) || "transparent",
    color: get8(theme, `${__themeKey}.${variant}.color`) || get8(theme, `colors.${variant}Contrast`) || "inherit"
  };
  const __cssStyles = transformStyleObject8(__css)(theme);
  const variantInTheme = get8(theme, `${__themeKey}.${variant}`) || get8(theme, variant);
  const variantStyles = variantInTheme && transformStyleObject8(variantInTheme)(theme);
  const sxPropStyles = transformStyleObject8(sx2)(theme);
  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles
  };
  const className = createClassName5(emotionStyle);
  return /* @__PURE__ */ React16.createElement("button", { className, style, ...rest, ref }, children);
});
Button.displayName = "Button";
var Button_default = Button;

// src/ButtonIcon.jsx
import React17 from "react";
import { css as transformStyleObject9, get as get9 } from "@theme-ui/css";
import { useTheme as useTheme9 } from "@emotion/react";
import { css as createClassName6 } from "@emotion/css";
var ButtonIcon = React17.forwardRef(({ __themeKey = "icons", __css, variant = "primary", sx: sx2, style, path, height = 16, ...rest }, ref) => {
  const theme = useTheme9();
  const baseStyles = {
    padding: 0,
    border: 0,
    appearance: "none",
    cursor: "pointer",
    background: get9(theme, `${__themeKey}.${variant}.bg`) || "transparent",
    color: get9(theme, `${__themeKey}.${variant}.color`) || "inherit"
  };
  const __cssStyles = transformStyleObject9(__css)(theme);
  const variantInTheme = get9(theme, `${__themeKey}.${variant}`) || get9(theme, variant);
  const variantStyles = variantInTheme && transformStyleObject9(variantInTheme)(theme);
  const sxPropStyles = transformStyleObject9(sx2)(theme);
  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...sxPropStyles
  };
  const className = createClassName6(emotionStyle);
  return /* @__PURE__ */ React17.createElement("button", { className, style, ...rest, ref }, /* @__PURE__ */ React17.createElement("svg", { viewBox: "0 0 24 24", height, fill: "currentColor" }, /* @__PURE__ */ React17.createElement("path", { d: path })));
});
ButtonIcon.displayName = "ButtonIcon";
var ButtonIcon_default = ButtonIcon;

// src/PopOver.jsx
import React18 from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import { useSpring, a } from "@react-spring/web";
import styled2 from "@emotion/styled";
import { css as css2 } from "@emotion/react";
import { useMergeRefs as useMergeRefs2 } from "use-callback-ref";
var Portal = ({ children, rootElementId }) => createPortal(children, document.getElementById(rootElementId));
var PopperContainer = styled2.div`
  font-size: 13px;
  padding-top: 0.5em;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px;
  z-index: 1;
  ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.elevated) ? css2`background-color: ${props.theme.colors.elevated};` : css2`background-color: lightgray;`;
}}

  #arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    &:after {
      content: ' ';
      background-color: ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.elevated) ? props.theme.colors.elevated : "lightgray";
}};
      position: absolute;
      top: -13px; /* padding + popper height */
      left: 0;
      transform: rotate(45deg);
      width: 10px;
      height: 10px;
    }
  }

  &[data-popper-placement^='top'] > #arrow {
    bottom: -18px;
  }
`;
var PopOver = ({ children, render, withArrow = true, rootElementId = "portal-root" }) => {
  const ref = React18.useRef();
  const [open, setOpen] = React18.useState(false);
  const [referenceElement, setReferenceElement] = React18.useState(null);
  const [popperElement, setPopperElement] = React18.useState(null);
  const [arrowElement, setArrowElement] = React18.useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      { name: "offset", options: { offset: [0, 4] } }
    ]
  });
  const springStyle = useSpring(open ? { opacity: 1, immediate: true } : { opacity: 0, immediate: true });
  const wrapperRef = React18.useRef(null);
  const handleClick = (e2) => {
    if (e2.button === 2)
      return false;
    if (e2.target.id === "MenuItem") {
      return setTimeout(() => {
        setOpen(false);
      }, 100);
    }
    if (ref.current && ref.current.contains(e2.target))
      return setOpen((current) => !current);
    if (wrapperRef.current && !wrapperRef.current.contains(e2.target))
      return setOpen(false);
  };
  React18.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return /* @__PURE__ */ React18.createElement(React18.Fragment, null, /* @__PURE__ */ React18.createElement("span", { ref: useMergeRefs2([ref, setReferenceElement]) }, children), open && /* @__PURE__ */ React18.createElement(Portal, { rootElementId }, /* @__PURE__ */ React18.createElement(a.div, { style: springStyle }, /* @__PURE__ */ React18.createElement("div", { ref: wrapperRef }, /* @__PURE__ */ React18.createElement(PopperContainer, { ref: setPopperElement, style: styles.popper, ...attributes.popper }, withArrow && /* @__PURE__ */ React18.createElement("div", { ref: setArrowElement, style: styles.arrow, id: "arrow" }), render({ onRequestClose: () => setOpen(false) }))))));
};
var PopOver_default = PopOver;

// src/Tooltip.jsx
import React19 from "react";
import { usePopper as usePopper2 } from "react-popper";
import { useMergeRefs as useMergeRefs3 } from "use-callback-ref";
import { useTransition, animated, config } from "@react-spring/web";
import { createPortal as createPortal2 } from "react-dom";
import { useHover } from "use-events";
import { useTimeout } from "hooks";
import styled3 from "@emotion/styled";
import { css as css3 } from "@emotion/react";
var styleContent = css3`
  position: absolute;

  @media (hover: none) {
    display: none;
  }
`;
var styleArrow = css3`
  position: absolute;
  width: 16px;
  height: 16px;

  &:after {
    position: absolute;
    width: 0;
    height: 0;
    content: '';
    pointer-events: none;
  }

  &:after {
    border: 8px solid transparent;
  }
`;
var styleArrowBottom = css3`
  bottom: -8px;

  &:after {
    left: 0;
    bottom: 0;
    border-top-color: #dddddd;
    border-bottom: none;
  }
`;
var styleArrowTop = css3`
  top: -8px;

  &:after {
    top: 0;
    left: 0;
    border-bottom-color: #dddddd;
    border-top: none;
  }
`;
var styleArrowLeft = css3`
  left: -8px;

  @media (hover: none) {
    display: none;
  }

  &:after {
    left: 0;
    top: 0;
    border-right-color: #dddddd;
    border-left: none;
  }
`;
var styleArrowRight = css3`
  right: -8px;

  @media (hover: none) {
    display: none;
  }

  &:after {
    right: 0;
    top: 0;
    border-left-color: #dddddd;
    border-right: none;
  }
`;
var PopperContainer2 = styled3.div`
  background-color: #dddddd;
  border: 1px solid #dddddd;
  padding: 6px 8px 6px 8px;
  font-size: 11px;
  font-weight: 200;
  border-radius: 4px;
  pointer-events: none;
  z-index: 1002;

  @media (hover: none) {
    display: none;
  }

  #arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    &:after {
      content: ' ';
      background-color: #dddddd;
      position: absolute;
      top: -13px; /* padding + popper height */
      left: 0;
      transform: rotate(45deg);
      width: 10px;
      height: 10px;
    }
  }

  &[data-popper-placement^='top'] > #arrow {
    bottom: -18px;
  }
`;
var Portal2 = ({ children, rootElementId }) => createPortal2(children, document.getElementById(rootElementId));
var Tooltip = ({ children, defaultPlacement = "bottom", offset = 16, withArrow = true, delay: delay2 = 600, immediate = true, pre = false, rootElementId = "portal-root", tip = "" }) => {
  const ref = React19.useRef();
  const [active, bind] = useHover();
  const [shown, setShown] = React19.useState(false);
  const timeout = useTimeout(() => {
    setShown(active);
  }, delay2);
  const [referenceElement, setReferenceElement] = React19.useState(null);
  const [popperElement, setPopperElement] = React19.useState(null);
  const [arrowElement, setArrowElement] = React19.useState(null);
  const { styles, attributes } = usePopper2(referenceElement, popperElement, {
    placement: defaultPlacement,
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      { name: "offset", options: { offset: [0, offset] } }
    ]
  });
  React19.useEffect(() => {
    if (active) {
      if (delay2 === 0) {
        setShown(active);
      } else {
        timeout.start();
      }
    } else {
      if (delay2 === 0) {
        setShown(active);
      } else {
        timeout.stop();
        setShown(false);
      }
    }
  }, [active, timeout, delay2]);
  const transition = useTransition(shown, {
    immediate,
    from: { opacity: 0 },
    enter: {
      opacity: 1,
      config: () => {
        return { ...config.default, duration: 300 };
      }
    },
    leave: {
      opacity: 0,
      config: () => {
        return { ...config.default, duration: 100 };
      }
    }
  });
  const placement = attributes && attributes.popper && attributes.popper["data-popper-placement"];
  return /* @__PURE__ */ React19.createElement(React19.Fragment, null, /* @__PURE__ */ React19.createElement("span", { ref: useMergeRefs3([ref, setReferenceElement]), ...bind }, children), transition((style, item) => {
    return item && /* @__PURE__ */ React19.createElement(Portal2, { rootElementId }, /* @__PURE__ */ React19.createElement(animated.div, { style: { opacity: style.opacity } }, /* @__PURE__ */ React19.createElement(PopperContainer2, { css: styleContent, ref: setPopperElement, style: styles.popper, ...attributes.popper }, /* @__PURE__ */ React19.createElement("div", { ref: setArrowElement, style: styles.arrow, id: "arrow", css: [styleArrow, placement && placement.startsWith("top") && styleArrowBottom, placement && placement.startsWith("bottom") && styleArrowTop, placement && placement.startsWith("left") && styleArrowRight, placement && placement.startsWith("right") && styleArrowLeft] }), withArrow && /* @__PURE__ */ React19.createElement("div", { ref: setArrowElement, style: styles.arrow, id: "arrow" }), pre ? /* @__PURE__ */ React19.createElement("pre", null, tip) : /* @__PURE__ */ React19.createElement(React19.Fragment, null, tip))));
  }));
};
var Tooltip_default = Tooltip;

// src/LinkButton.jsx
import React20 from "react";
import { css as transformStyleObject10, get as get10 } from "@theme-ui/css";
import { useTheme as useTheme10 } from "@emotion/react";
import { css as createClassName7 } from "@emotion/css";
import { Link } from "react-router-dom";
var LinkButton = React20.forwardRef(({ __themeKey = "buttons", __css, variant = "primary", sx: sx2, style, children, ...rest }, ref) => {
  const theme = useTheme10();
  const baseStyles = {
    display: "inline-flex",
    padding: 0,
    border: 0,
    cursor: "pointer",
    position: "relative",
    userSelect: "none",
    outline: "none",
    lineHeight: 1,
    whiteSpace: "nowrap",
    fontFamily: "inherit",
    fontSize: "inherit",
    background: get10(theme, `${__themeKey}.${variant}.bg`) || get10(theme, `colors.${variant}`) || "transparent",
    color: get10(theme, `${__themeKey}.${variant}.color`) || get10(theme, `colors.${variant}Contrast`) || "inherit"
  };
  const __cssStyles = transformStyleObject10(__css)(theme);
  const variantInTheme = get10(theme, `${__themeKey}.${variant}`) || get10(theme, variant);
  const variantStyles = variantInTheme && transformStyleObject10(variantInTheme)(theme);
  const sxPropStyles = transformStyleObject10(sx2)(theme);
  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles
  };
  const className = createClassName7(emotionStyle);
  return /* @__PURE__ */ React20.createElement(Link, { className, style, ...rest, ref }, children);
});
LinkButton.displayName = "LinkButton";
var LinkButton_default = LinkButton;

// src/Modal.jsx
import React21 from "react";
import { createPortal as createPortal3 } from "react-dom";
import { useTransition as useTransition2, animated as animated2, config as config2 } from "@react-spring/web";
import { css as transformStyleObject11, get as get11 } from "@theme-ui/css";
import { useTheme as useTheme11 } from "@emotion/react";
import { css as createClassName8 } from "@emotion/css";
import { useLockBodyScroll } from "hooks";
function ModalContent({ __themeKey = "modals", __css, variant = "large", sx: sx2, style, ...rest }) {
  const theme = useTheme11();
  const baseStyles = {
    position: "relative",
    zIndex: "1001",
    margin: "0 auto",
    with: "calc(100% - 32px)",
    maxWidth: 1e3,
    top: 16,
    backgroundColor: "white"
  };
  const __cssStyles = transformStyleObject11(__css)(theme);
  const variantInTheme = get11(theme, `${__themeKey}.${variant}`) || get11(theme, variant);
  const variantStyles = variantInTheme && transformStyleObject11(variantInTheme)(theme);
  const sxPropStyles = transformStyleObject11(sx2)(theme);
  const emotionStyle = {
    ...baseStyles,
    ...__cssStyles,
    ...variantStyles,
    ...sxPropStyles
  };
  const className = createClassName8(emotionStyle);
  return /* @__PURE__ */ React21.createElement(animated2.div, { className, style, ...rest });
}
var ModalBody = ({ children }) => {
  const mainDivRef = React21.useRef(document.createElement("div"));
  const modalRootRef = React21.useRef(document.getElementById("modal-root"));
  React21.useEffect(() => {
    const modalRoot = modalRootRef.current;
    if (!modalRoot)
      throw new Error("No modal-root exists!");
    const mainDiv = mainDivRef.current;
    modalRoot.appendChild(mainDiv);
    return () => {
      modalRoot.removeChild(mainDiv);
    };
  }, []);
  return createPortal3(children, mainDivRef.current);
};
var Modal = ({ children, onCancel, closeOnClickOutside = true, shown, lockBodyScroll = true, backdrop = true, immediate = false, backdropStyle = { backgroundColor: "hsl(0deg 0% 0% / 70%)" }, sx: sx2, variant }) => {
  useLockBodyScroll(shown);
  const parentDiv = React21.useRef(null);
  React21.useEffect(() => {
    if (shown && parentDiv.current)
      parentDiv.current.focus();
  }, [shown]);
  const keyHandler = (e2) => {
    if (shown && e2.key === "Escape") {
      e2.preventDefault();
      e2.stopPropagation();
      onCancel();
    }
  };
  const transition = useTransition2(shown, {
    immediate,
    from: { opacity: 0, transform: "translateY(-1000px)" },
    enter: {
      opacity: 1,
      transform: "translateY(0px)",
      config: (item) => {
        if (item === "transform")
          return { ...config2.stiff };
        return { ...config2.default, duration: 300 };
      }
    },
    leave: {
      opacity: 0,
      config: () => {
        return { ...config2.default, duration: 100 };
      }
    }
  });
  if (!shown)
    return null;
  return transition((style, item) => {
    return item && /* @__PURE__ */ React21.createElement(ModalBody, null, backdrop ? /* @__PURE__ */ React21.createElement("div", { ref: parentDiv, onKeyDown: keyHandler, tabIndex: 0, "aria-modal": "true", role: "dialog", style: { position: "fixed", top: 0, right: 0, bottom: 0, left: 0, overflow: "hidden", outline: "none" } }, /* @__PURE__ */ React21.createElement(ModalContent, { sx: sx2, variant, style: { transform: style.transform, opacity: style.opacity } }, children({ onRequestClose: onCancel })), backdrop && /* @__PURE__ */ React21.createElement(animated2.div, { onClick: () => {
      if (closeOnClickOutside) {
        onCancel();
      }
    }, style: { opacity: style.opacity, position: "fixed", zIndex: 1e3, top: 0, right: 0, bottom: 0, left: 0, outline: "none", tabIndex: -1, ...backdropStyle } })) : /* @__PURE__ */ React21.createElement("div", { ref: parentDiv, onKeyDown: keyHandler, tabIndex: 0, "aria-modal": "true", role: "dialog" }, /* @__PURE__ */ React21.createElement(ModalContent, { sx: sx2, variant, style: { transform: style.transform, opacity: style.opacity } }, children({ onRequestClose: onCancel }))));
  });
};
var Modal_default = Modal;

// src/MultiCheck.jsx
import React22 from "react";
import { Box as Box6 } from "theme-ui";
function MultiCheck({ options = [], value = [], onChange = () => {
}, withAll = true, withAllLabel = "Selecionar todos", labelSx = {} }) {
  const handleAll = (checked) => {
    const newValue = checked ? [...options] : [];
    onChange(newValue);
  };
  const handleChange = (option, checked) => {
    let newValue = [...value];
    if (checked) {
      newValue = value.includes(option) ? newValue : [...value, option];
    } else {
      newValue = value.includes(option) ? value.filter((v) => v !== option) : newValue;
    }
    return onChange(newValue);
  };
  return /* @__PURE__ */ React22.createElement(Box6, null, withAll && /* @__PURE__ */ React22.createElement(Box6, { sx: { mb: 1 } }, /* @__PURE__ */ React22.createElement(Checkbox_default, { checked: options.every((option) => value.includes(option)), label: withAllLabel, onChange: (checked) => handleAll(checked) })), options.map((option) => /* @__PURE__ */ React22.createElement(Box6, { key: option }, /* @__PURE__ */ React22.createElement(Checkbox_default, { labelSx, checked: value.includes(option), label: option.replace(/@/g, ""), onChange: (checked) => handleChange(option, checked) }))));
}
var MultiCheck_default = MultiCheck;

// src/MultiCheckLabelValue.jsx
import React23 from "react";
import { Box as Box7 } from "theme-ui";
function MultiCheckLabelValue({ options = [], value = [], onChange = () => {
}, withAll = true, withAllLabel = "Selecionar todos", labelSx = {} }) {
  const handleAll = (checked) => {
    const newValue = checked ? [...options.map((item) => item.value)] : [];
    onChange(newValue);
  };
  const handleChange = (option, checked) => {
    let newValue = [...value];
    if (checked) {
      newValue = value.includes(option) ? newValue : [...value, option];
    } else {
      newValue = value.includes(option) ? value.filter((v) => v !== option) : newValue;
    }
    return onChange(newValue);
  };
  return /* @__PURE__ */ React23.createElement(Box7, null, withAll && /* @__PURE__ */ React23.createElement(Box7, { sx: { mb: 1 } }, /* @__PURE__ */ React23.createElement(Checkbox_default, { checked: options.every((option) => value.includes(option.value)), label: withAllLabel, onChange: (checked) => handleAll(checked) })), options.map((option) => /* @__PURE__ */ React23.createElement(Box7, { key: option }, /* @__PURE__ */ React23.createElement(Checkbox_default, { labelSx, checked: value.includes(option.value), label: option.label, onChange: (checked) => handleChange(option.value, checked) }))));
}
var MultiCheckLabelValue_default = MultiCheckLabelValue;

// src/Pagination.jsx
import React24 from "react";
import { Flex as Flex4, Box as Box8 } from "theme-ui";
var DOTS = "...";
var range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};
var usePagination = ({ totalCount, pageSize, siblingCount = 1, currentPage }) => {
  const paginationRange = React24.useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const totalPageNumbers = siblingCount + 5;
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);
  return paginationRange;
};
var Pagination = ({ onPageChange, totalCount, siblingCount = 1, currentPage, pageSize }) => {
  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize });
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  const handleNext = () => {
    onPageChange(currentPage + 1);
  };
  const handlePrevious = () => {
    onPageChange(currentPage - 1);
  };
  const lastPage = paginationRange[paginationRange.length - 1];
  const baseSx = {
    flexShrink: 0,
    px: 3,
    py: 2,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "hairline"
  };
  function conditionalSx(enabled3) {
    if (enabled3) {
      return {
        pointerEvents: "none",
        cursor: "auto",
        color: "muted",
        backgroundColor: "canvas"
      };
    }
    return {
      pointerEvents: "auto",
      cursor: "pointer"
    };
  }
  function isCurrent(active) {
    return active ? { backgroundColor: "elevated", fontWeight: "heading" } : {};
  }
  return /* @__PURE__ */ React24.createElement(Flex4, { sx: { px: 2 } }, /* @__PURE__ */ React24.createElement(Box8, { onClick: handlePrevious, sx: { ...baseSx, ...conditionalSx(currentPage === 1) } }, "Anterior"), paginationRange.map((pageNumber) => {
    if (pageNumber === DOTS) {
      return /* @__PURE__ */ React24.createElement(Flex4, { key: pageNumber, sx: { px: 2, alignItems: "center", fontWeight: "heading", flexShrink: 0 } }, "\u2026");
    }
    return /* @__PURE__ */ React24.createElement(Box8, { key: pageNumber, onClick: () => onPageChange(pageNumber), sx: { ...baseSx, ...conditionalSx(currentPage === pageNumber), ...isCurrent(currentPage === pageNumber) } }, pageNumber);
  }), /* @__PURE__ */ React24.createElement(Box8, { onClick: handleNext, sx: { ...baseSx, ...conditionalSx(currentPage === lastPage) } }, "Pr\xF3ximo"));
};
var Pagination_default = Pagination;

// src/OptimisticCheckbox.jsx
import React25 from "react";
import { Box as Box9 } from "theme-ui";
var OptimisticCheckbox = React25.memo(React25.forwardRef(({ checked = false, onChange, className }, ref) => {
  const [checkedState, setCheckedState] = React25.useState(false);
  React25.useEffect(() => {
    setCheckedState(checked);
  }, [checked]);
  const handleClick = () => {
    const newCheckedState = !checkedState;
    setCheckedState(newCheckedState);
    setTimeout(() => {
      onChange(newCheckedState);
    }, 10);
  };
  return /* @__PURE__ */ React25.createElement(
    Box9,
    {
      sx: { display: "inline-block", position: "relative", cursor: "pointer", width: 18, height: 18, bg: "transparent", borderRadius: 2, borderWidth: 2, borderStyle: "solid", borderColor: checkedState ? "text" : "text", userSelect: "none" },
      className,
      ref,
      onKeyPress: (e2) => ["Enter", " "].includes(e2.key) && handleClick(),
      onClick: handleClick
    },
    /* @__PURE__ */ React25.createElement(Box9, { sx: { position: "absolute", top: "1px", left: "4px", width: 6, height: 10, pointerEvents: "none", transform: "rotate(45deg)", borderTop: "none", borderRightColor: "text", borderRightStyle: "solid", borderRightWidth: 2, borderBottomColor: "text", borderBottomStyle: "solid", borderBottomWidth: 2, borderLeft: "none", opacity: checkedState ? 1 : 0 } })
  );
}));
OptimisticCheckbox.displayName = "OptimisticCheckbox";
var OptimisticCheckbox_default = OptimisticCheckbox;

// src/Close.jsx
import React26 from "react";
function Close({ height = 24, color = "currentColor" }) {
  return /* @__PURE__ */ React26.createElement("svg", { viewBox: "0 0 24 24", height, fill: color }, /* @__PURE__ */ React26.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }));
}
var Close_default = Close;

// src/Portal.js
import { createPortal as createPortal4 } from "react-dom";
function Portal3({ children, elementId = "portal-root" }) {
  return createPortal4(children, document.getElementById(elementId));
}
var Portal_default = Portal3;

// src/Floating.jsx
import React28 from "react";
import { Flex as Flex5 } from "theme-ui";
import { useSpring as useSpring2, animated as animated3 } from "@react-spring/web";

// ../../node_modules/react-use-gesture/dist/reactusegesture.esm.js
import React27, { useRef } from "react";
function addV(v1, v2) {
  return v1.map(function(v, i2) {
    return v + v2[i2];
  });
}
function subV(v1, v2) {
  return v1.map(function(v, i2) {
    return v - v2[i2];
  });
}
function calculateDistance(movement) {
  return Math.hypot.apply(Math, movement);
}
function calculateAllKinematics(movement, delta, dt) {
  var dl = calculateDistance(delta);
  var alpha = dl === 0 ? 0 : 1 / dl;
  var beta = dt === 0 ? 0 : 1 / dt;
  var velocity = beta * dl;
  var velocities = delta.map(function(v) {
    return beta * v;
  });
  var direction = delta.map(function(v) {
    return alpha * v;
  });
  var distance = calculateDistance(movement);
  return {
    velocities,
    velocity,
    distance,
    direction
  };
}
function sign(x) {
  if (Math.sign)
    return Math.sign(x);
  return Number(x > 0) - Number(x < 0) || +x;
}
function minMax(value, min, max) {
  return Math.max(min, Math.min(value, max));
}
function rubberband2(distance, constant) {
  return Math.pow(distance, constant * 5);
}
function rubberband(distance, dimension, constant) {
  if (dimension === 0 || Math.abs(dimension) === Infinity)
    return rubberband2(distance, constant);
  return distance * dimension * constant / (dimension + constant * distance);
}
function rubberbandIfOutOfBounds(position, min, max, constant) {
  if (constant === void 0) {
    constant = 0.15;
  }
  if (constant === 0)
    return minMax(position, min, max);
  if (position < min)
    return -rubberband(min - position, max - min, constant) + min;
  if (position > max)
    return +rubberband(position - max, max - min, constant) + max;
  return position;
}
function _defineProperties(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
    arr2[i2] = arr[i2];
  return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i2 = 0;
      return function() {
        if (i2 >= o.length)
          return {
            done: true
          };
        return {
          done: false,
          value: o[i2++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  it = o[Symbol.iterator]();
  return it.next.bind(it);
}
function noop() {
}
function chainFns() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  if (fns.length === 0)
    return noop;
  if (fns.length === 1)
    return fns[0];
  return function() {
    var result;
    for (var _iterator = _createForOfIteratorHelperLoose(fns), _step; !(_step = _iterator()).done; ) {
      var fn = _step.value;
      result = fn.apply(this, arguments) || result;
    }
    return result;
  };
}
function ensureVector(value, fallback) {
  if (value === void 0) {
    if (fallback === void 0) {
      throw new Error("Must define fallback value if undefined is expected");
    }
    value = fallback;
  }
  if (Array.isArray(value))
    return value;
  return [value, value];
}
function valueFn(v) {
  if (typeof v === "function") {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return v.apply(void 0, args);
  } else {
    return v;
  }
}
function resolveWith(config3, resolvers) {
  if (config3 === void 0) {
    config3 = {};
  }
  var result = {};
  for (var _i = 0, _Object$entries = Object.entries(resolvers); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _Object$entries[_i], key = _Object$entries$_i[0], resolver = _Object$entries$_i[1];
    switch (typeof resolver) {
      case "function":
        result[key] = resolver.call(result, config3[key], key, config3);
        break;
      case "object":
        result[key] = resolveWith(config3[key], resolver);
        break;
      case "boolean":
        if (resolver)
          result[key] = config3[key];
        break;
    }
  }
  return result;
}
function supportsGestureEvents() {
  try {
    return "constructor" in GestureEvent;
  } catch (e2) {
    return false;
  }
}
function supportsTouchEvents() {
  return typeof window !== "undefined" && "ontouchstart" in window;
}
function supportsPointerEvents() {
  return typeof window !== "undefined" && "onpointerdown" in window;
}
function getEventTouches(event) {
  if ("pointerId" in event)
    return null;
  return event.type === "touchend" ? event.changedTouches : event.targetTouches;
}
function getTouchIds(event) {
  return Array.from(getEventTouches(event)).map(function(t2) {
    return t2.identifier;
  });
}
function getGenericEventData(event) {
  var buttons = "buttons" in event ? event.buttons : 0;
  var shiftKey = event.shiftKey, altKey = event.altKey, metaKey = event.metaKey, ctrlKey = event.ctrlKey;
  return {
    buttons,
    shiftKey,
    altKey,
    metaKey,
    ctrlKey
  };
}
var identity = function identity2(xy) {
  return xy;
};
function getPointerEventValues(event, transform) {
  if (transform === void 0) {
    transform = identity;
  }
  var touchEvents = getEventTouches(event);
  var _ref = touchEvents ? touchEvents[0] : event, clientX = _ref.clientX, clientY = _ref.clientY;
  return transform([clientX, clientY]);
}
var DEFAULT_DRAG_DELAY = 180;
var DEFAULT_RUBBERBAND = 0.15;
var DEFAULT_SWIPE_VELOCITY = 0.5;
var DEFAULT_SWIPE_DISTANCE = 50;
var DEFAULT_SWIPE_DURATION = 250;
var InternalGestureOptionsNormalizers = {
  threshold: function threshold(value) {
    if (value === void 0) {
      value = 0;
    }
    return ensureVector(value);
  },
  rubberband: function rubberband3(value) {
    if (value === void 0) {
      value = 0;
    }
    switch (value) {
      case true:
        return ensureVector(DEFAULT_RUBBERBAND);
      case false:
        return ensureVector(0);
      default:
        return ensureVector(value);
    }
  },
  enabled: function enabled(value) {
    if (value === void 0) {
      value = true;
    }
    return value;
  },
  triggerAllEvents: function triggerAllEvents(value) {
    if (value === void 0) {
      value = false;
    }
    return value;
  },
  initial: function initial(value) {
    if (value === void 0) {
      value = 0;
    }
    if (typeof value === "function")
      return value;
    return ensureVector(value);
  },
  transform: true
};
var InternalCoordinatesOptionsNormalizers = /* @__PURE__ */ _extends({}, InternalGestureOptionsNormalizers, {
  axis: true,
  lockDirection: function lockDirection(value) {
    if (value === void 0) {
      value = false;
    }
    return value;
  },
  bounds: function bounds(value) {
    if (value === void 0) {
      value = {};
    }
    if (typeof value === "function")
      return function(state) {
        return InternalCoordinatesOptionsNormalizers.bounds(value(state));
      };
    var _value2 = value, _value2$left = _value2.left, left = _value2$left === void 0 ? -Infinity : _value2$left, _value2$right = _value2.right, right = _value2$right === void 0 ? Infinity : _value2$right, _value2$top = _value2.top, top = _value2$top === void 0 ? -Infinity : _value2$top, _value2$bottom = _value2.bottom, bottom = _value2$bottom === void 0 ? Infinity : _value2$bottom;
    return [[left, right], [top, bottom]];
  }
});
var isBrowser = typeof window !== "undefined" && window.document && window.document.createElement;
var InternalGenericOptionsNormalizers = {
  enabled: function enabled2(value) {
    if (value === void 0) {
      value = true;
    }
    return value;
  },
  domTarget: true,
  window: /* @__PURE__ */ function(_window) {
    function window2(_x) {
      return _window.apply(this, arguments);
    }
    window2.toString = function() {
      return _window.toString();
    };
    return window2;
  }(function(value) {
    if (value === void 0) {
      value = isBrowser ? window : void 0;
    }
    return value;
  }),
  eventOptions: function eventOptions(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, _ref$passive = _ref.passive, passive = _ref$passive === void 0 ? true : _ref$passive, _ref$capture = _ref.capture, capture = _ref$capture === void 0 ? false : _ref$capture;
    return {
      passive,
      capture
    };
  },
  transform: true
};
var InternalDragOptionsNormalizers = /* @__PURE__ */ _extends({}, InternalCoordinatesOptionsNormalizers, {
  useTouch: function useTouch(value) {
    if (value === void 0) {
      value = false;
    }
    var supportsTouch = supportsTouchEvents();
    var supportsPointer = supportsPointerEvents();
    if (value && supportsTouch)
      return true;
    if (supportsTouch && !supportsPointer)
      return true;
    return false;
  },
  experimental_preventWindowScrollY: function experimental_preventWindowScrollY(value) {
    if (value === void 0) {
      value = false;
    }
    return value;
  },
  threshold: function threshold2(v, _k, _ref3) {
    var _ref3$filterTaps = _ref3.filterTaps, filterTaps = _ref3$filterTaps === void 0 ? false : _ref3$filterTaps, _ref3$lockDirection = _ref3.lockDirection, lockDirection2 = _ref3$lockDirection === void 0 ? false : _ref3$lockDirection, _ref3$axis = _ref3.axis, axis = _ref3$axis === void 0 ? void 0 : _ref3$axis;
    var A = ensureVector(v, filterTaps ? 3 : lockDirection2 ? 1 : axis ? 1 : 0);
    this.filterTaps = filterTaps;
    return A;
  },
  swipeVelocity: function swipeVelocity(v) {
    if (v === void 0) {
      v = DEFAULT_SWIPE_VELOCITY;
    }
    return ensureVector(v);
  },
  swipeDistance: function swipeDistance(v) {
    if (v === void 0) {
      v = DEFAULT_SWIPE_DISTANCE;
    }
    return ensureVector(v);
  },
  swipeDuration: function swipeDuration(value) {
    if (value === void 0) {
      value = DEFAULT_SWIPE_DURATION;
    }
    return value;
  },
  delay: function delay(value) {
    if (value === void 0) {
      value = 0;
    }
    switch (value) {
      case true:
        return DEFAULT_DRAG_DELAY;
      case false:
        return 0;
      default:
        return value;
    }
  }
});
function getInternalGenericOptions(config3) {
  if (config3 === void 0) {
    config3 = {};
  }
  return resolveWith(config3, InternalGenericOptionsNormalizers);
}
function getInternalDragOptions(config3) {
  if (config3 === void 0) {
    config3 = {};
  }
  return resolveWith(config3, InternalDragOptionsNormalizers);
}
function _buildDragConfig(_ref3) {
  var domTarget = _ref3.domTarget, eventOptions2 = _ref3.eventOptions, window2 = _ref3.window, enabled3 = _ref3.enabled, rest = _objectWithoutPropertiesLoose(_ref3, ["domTarget", "eventOptions", "window", "enabled"]);
  var opts = getInternalGenericOptions({
    domTarget,
    eventOptions: eventOptions2,
    window: window2,
    enabled: enabled3
  });
  opts.drag = getInternalDragOptions(rest);
  return opts;
}
function getInitial(mixed) {
  return _extends({
    _active: false,
    _blocked: false,
    _intentional: [false, false],
    _movement: [0, 0],
    _initial: [0, 0],
    _bounds: [[-Infinity, Infinity], [-Infinity, Infinity]],
    _threshold: [0, 0],
    _lastEventType: void 0,
    _dragStarted: false,
    _dragPreventScroll: false,
    _dragIsTap: true,
    _dragDelayed: false,
    event: void 0,
    intentional: false,
    values: [0, 0],
    velocities: [0, 0],
    delta: [0, 0],
    movement: [0, 0],
    offset: [0, 0],
    lastOffset: [0, 0],
    direction: [0, 0],
    initial: [0, 0],
    previous: [0, 0],
    first: false,
    last: false,
    active: false,
    timeStamp: 0,
    startTime: 0,
    elapsedTime: 0,
    cancel: noop,
    canceled: false,
    memo: void 0,
    args: void 0
  }, mixed);
}
function getInitialState() {
  var shared = {
    hovering: false,
    scrolling: false,
    wheeling: false,
    dragging: false,
    moving: false,
    pinching: false,
    touches: 0,
    buttons: 0,
    down: false,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    ctrlKey: false,
    locked: false
  };
  var drag = getInitial({
    _pointerId: void 0,
    axis: void 0,
    xy: [0, 0],
    vxvy: [0, 0],
    velocity: 0,
    distance: 0,
    tap: false,
    swipe: [0, 0]
  });
  var pinch = getInitial({
    _pointerIds: [],
    da: [0, 0],
    vdva: [0, 0],
    origin: void 0,
    turns: 0
  });
  var wheel = getInitial({
    axis: void 0,
    xy: [0, 0],
    vxvy: [0, 0],
    velocity: 0,
    distance: 0
  });
  var move = getInitial({
    axis: void 0,
    xy: [0, 0],
    vxvy: [0, 0],
    velocity: 0,
    distance: 0
  });
  var scroll = getInitial({
    axis: void 0,
    xy: [0, 0],
    vxvy: [0, 0],
    velocity: 0,
    distance: 0
  });
  return {
    shared,
    drag,
    pinch,
    wheel,
    move,
    scroll
  };
}
var RecognizersMap = /* @__PURE__ */ new Map();
var identity$1 = function identity3(xy) {
  return xy;
};
var Recognizer = /* @__PURE__ */ function() {
  function Recognizer2(controller, args) {
    var _this = this;
    if (args === void 0) {
      args = [];
    }
    this.controller = controller;
    this.args = args;
    this.debounced = true;
    this.setTimeout = function(callback, ms) {
      var _window;
      if (ms === void 0) {
        ms = 140;
      }
      clearTimeout(_this.controller.timeouts[_this.stateKey]);
      for (var _len = arguments.length, args2 = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args2[_key - 2] = arguments[_key];
      }
      _this.controller.timeouts[_this.stateKey] = (_window = window).setTimeout.apply(_window, [callback, ms].concat(args2));
    };
    this.clearTimeout = function() {
      clearTimeout(_this.controller.timeouts[_this.stateKey]);
    };
    this.fireGestureHandler = function(forceFlag) {
      if (forceFlag === void 0) {
        forceFlag = false;
      }
      if (_this.state._blocked) {
        if (!_this.debounced) {
          _this.state._active = false;
          _this.clean();
        }
        return null;
      }
      if (!forceFlag && !_this.state.intentional && !_this.config.triggerAllEvents)
        return null;
      if (_this.state.intentional) {
        var prev_active = _this.state.active;
        var next_active = _this.state._active;
        _this.state.active = next_active;
        _this.state.first = next_active && !prev_active;
        _this.state.last = prev_active && !next_active;
        _this.controller.state.shared[_this.ingKey] = next_active;
      }
      var touches = _this.controller.pointerIds.size || _this.controller.touchIds.size;
      var down = _this.controller.state.shared.buttons > 0 || touches > 0;
      var state = _extends({}, _this.controller.state.shared, _this.state, _this.mapStateValues(_this.state), {
        locked: !!document.pointerLockElement,
        touches,
        down
      });
      var newMemo = _this.handler(state);
      _this.state.memo = newMemo !== void 0 ? newMemo : _this.state.memo;
      return state;
    };
    this.controller = controller;
    this.args = args;
  }
  var _proto = Recognizer2.prototype;
  _proto.updateSharedState = function updateSharedState(sharedState) {
    Object.assign(this.controller.state.shared, sharedState);
  };
  _proto.updateGestureState = function updateGestureState(gestureState) {
    Object.assign(this.state, gestureState);
  };
  _proto.checkIntentionality = function checkIntentionality(_intentional, _movement) {
    return {
      _intentional,
      _blocked: false
    };
  };
  _proto.getMovement = function getMovement(values) {
    var rubberband4 = this.config.rubberband;
    var _this$state = this.state, _bounds = _this$state._bounds, _initial = _this$state._initial, _active = _this$state._active, wasIntentional = _this$state._intentional, lastOffset = _this$state.lastOffset, prevMovement = _this$state.movement, _T = _this$state._threshold;
    var M = this.getInternalMovement(values, this.state);
    var i0 = wasIntentional[0] === false ? getIntentionalDisplacement(M[0], _T[0]) : wasIntentional[0];
    var i1 = wasIntentional[1] === false ? getIntentionalDisplacement(M[1], _T[1]) : wasIntentional[1];
    var intentionalityCheck = this.checkIntentionality([i0, i1], M);
    if (intentionalityCheck._blocked) {
      return _extends({}, intentionalityCheck, {
        _movement: M,
        delta: [0, 0]
      });
    }
    var _intentional = intentionalityCheck._intentional;
    var _movement = M;
    var movement = [_intentional[0] !== false ? M[0] - _intentional[0] : 0, _intentional[1] !== false ? M[1] - _intentional[1] : 0];
    var offset = addV(movement, lastOffset);
    var _rubberband = _active ? rubberband4 : [0, 0];
    movement = computeRubberband(_bounds, addV(movement, _initial), _rubberband);
    return _extends({}, intentionalityCheck, {
      intentional: _intentional[0] !== false || _intentional[1] !== false,
      _initial,
      _movement,
      movement,
      values,
      offset: computeRubberband(_bounds, offset, _rubberband),
      delta: subV(movement, prevMovement)
    });
  };
  _proto.clean = function clean() {
    this.clearTimeout();
  };
  _createClass(Recognizer2, [{
    key: "config",
    get: function get12() {
      return this.controller.config[this.stateKey];
    }
  }, {
    key: "enabled",
    get: function get12() {
      return this.controller.config.enabled && this.config.enabled;
    }
  }, {
    key: "state",
    get: function get12() {
      return this.controller.state[this.stateKey];
    }
  }, {
    key: "handler",
    get: function get12() {
      return this.controller.handlers[this.stateKey];
    }
  }, {
    key: "transform",
    get: function get12() {
      return this.config.transform || this.controller.config.transform || identity$1;
    }
  }]);
  return Recognizer2;
}();
function getIntentionalDisplacement(movement, threshold3) {
  if (Math.abs(movement) >= threshold3) {
    return sign(movement) * threshold3;
  } else {
    return false;
  }
}
function computeRubberband(bounds2, _ref, _ref2) {
  var Vx = _ref[0], Vy = _ref[1];
  var Rx = _ref2[0], Ry = _ref2[1];
  var _bounds$ = bounds2[0], X1 = _bounds$[0], X2 = _bounds$[1], _bounds$2 = bounds2[1], Y1 = _bounds$2[0], Y2 = _bounds$2[1];
  return [rubberbandIfOutOfBounds(Vx, X1, X2, Rx), rubberbandIfOutOfBounds(Vy, Y1, Y2, Ry)];
}
function getGenericPayload(_ref3, event, isStartEvent) {
  var state = _ref3.state;
  var timeStamp = event.timeStamp, _lastEventType = event.type;
  var previous = state.values;
  var elapsedTime = isStartEvent ? 0 : timeStamp - state.startTime;
  return {
    _lastEventType,
    event,
    timeStamp,
    elapsedTime,
    previous
  };
}
function getStartGestureState(_ref4, values, event, initial2) {
  var state = _ref4.state, config3 = _ref4.config, stateKey = _ref4.stateKey, args = _ref4.args, transform = _ref4.transform;
  var offset = state.offset;
  var startTime = event.timeStamp;
  var initialFn = config3.initial, bounds2 = config3.bounds, threshold3 = config3.threshold;
  var _threshold = subV(transform(threshold3), transform([0, 0])).map(Math.abs);
  var _state = _extends({}, getInitialState()[stateKey], {
    _active: true,
    args,
    values,
    initial: initial2 != null ? initial2 : values,
    _threshold,
    offset,
    lastOffset: offset,
    startTime
  });
  return _extends({}, _state, {
    _initial: valueFn(initialFn, _state),
    _bounds: valueFn(bounds2, _state)
  });
}
var Controller = function Controller2(classes) {
  var _this = this;
  this.classes = classes;
  this.pointerIds = /* @__PURE__ */ new Set();
  this.touchIds = /* @__PURE__ */ new Set();
  this.supportsTouchEvents = supportsTouchEvents();
  this.supportsGestureEvents = supportsGestureEvents();
  this.bind = function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var bindings = {};
    for (var _iterator = _createForOfIteratorHelperLoose(_this.classes), _step; !(_step = _iterator()).done; ) {
      var RecognizerClass = _step.value;
      new RecognizerClass(_this, args).addBindings(bindings);
    }
    var _loop = function _loop2(eventKey2) {
      addBindings(bindings, eventKey2, function(event) {
        return _this.nativeRefs[eventKey2](_extends({}, _this.state.shared, {
          event,
          args
        }));
      });
    };
    for (var eventKey in _this.nativeRefs) {
      _loop(eventKey);
    }
    if (_this.config.domTarget) {
      return updateDomListeners(_this, bindings);
    } else {
      return getPropsListener(_this, bindings);
    }
  };
  this.effect = function() {
    if (_this.config.domTarget)
      _this.bind();
    return _this.clean;
  };
  this.clean = function() {
    var domTarget = getDomTargetFromConfig(_this.config);
    var eventOptions2 = _this.config.eventOptions;
    if (domTarget)
      removeListeners(domTarget, takeAll(_this.domListeners), eventOptions2);
    Object.values(_this.timeouts).forEach(clearTimeout);
    clearAllWindowListeners(_this);
  };
  this.classes = classes;
  this.state = getInitialState();
  this.timeouts = {};
  this.domListeners = [];
  this.windowListeners = {};
};
function addEventIds(controller, event) {
  if ("pointerId" in event) {
    controller.pointerIds.add(event.pointerId);
  } else {
    controller.touchIds = new Set(getTouchIds(event));
  }
}
function removeEventIds(controller, event) {
  if ("pointerId" in event) {
    controller.pointerIds["delete"](event.pointerId);
  } else {
    getTouchIds(event).forEach(function(id) {
      return controller.touchIds["delete"](id);
    });
  }
}
function clearAllWindowListeners(controller) {
  var _controller$config = controller.config, el = _controller$config.window, eventOptions2 = _controller$config.eventOptions, windowListeners = controller.windowListeners;
  if (!el)
    return;
  for (var stateKey in windowListeners) {
    var handlers = windowListeners[stateKey];
    removeListeners(el, handlers, eventOptions2);
  }
  controller.windowListeners = {};
}
function clearWindowListeners(_ref, stateKey, options) {
  var config3 = _ref.config, windowListeners = _ref.windowListeners;
  if (options === void 0) {
    options = config3.eventOptions;
  }
  if (!config3.window)
    return;
  removeListeners(config3.window, windowListeners[stateKey], options);
  delete windowListeners[stateKey];
}
function updateWindowListeners(_ref2, stateKey, listeners, options) {
  var config3 = _ref2.config, windowListeners = _ref2.windowListeners;
  if (listeners === void 0) {
    listeners = [];
  }
  if (options === void 0) {
    options = config3.eventOptions;
  }
  if (!config3.window)
    return;
  removeListeners(config3.window, windowListeners[stateKey], options);
  addListeners(config3.window, windowListeners[stateKey] = listeners, options);
}
function updateDomListeners(_ref3, bindings) {
  var config3 = _ref3.config, domListeners = _ref3.domListeners;
  var domTarget = getDomTargetFromConfig(config3);
  if (!domTarget)
    throw new Error("domTarget must be defined");
  var eventOptions2 = config3.eventOptions;
  removeListeners(domTarget, takeAll(domListeners), eventOptions2);
  for (var _i = 0, _Object$entries = Object.entries(bindings); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _Object$entries[_i], key = _Object$entries$_i[0], fns = _Object$entries$_i[1];
    var name = key.slice(2).toLowerCase();
    domListeners.push([name, chainFns.apply(void 0, fns)]);
  }
  addListeners(domTarget, domListeners, eventOptions2);
}
function getPropsListener(_ref4, bindings) {
  var config3 = _ref4.config;
  var props = {};
  var captureString = config3.eventOptions.capture ? "Capture" : "";
  for (var _i2 = 0, _Object$entries2 = Object.entries(bindings); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _Object$entries2[_i2], event = _Object$entries2$_i[0], fns = _Object$entries2$_i[1];
    var fnsArray = Array.isArray(fns) ? fns : [fns];
    var key = event + captureString;
    props[key] = chainFns.apply(void 0, fnsArray);
  }
  return props;
}
function takeAll(array) {
  if (array === void 0) {
    array = [];
  }
  return array.splice(0, array.length);
}
function getDomTargetFromConfig(_ref5) {
  var domTarget = _ref5.domTarget;
  return domTarget && "current" in domTarget ? domTarget.current : domTarget;
}
function addBindings(bindings, name, fn) {
  if (!bindings[name])
    bindings[name] = [];
  bindings[name].push(fn);
}
function addListeners(el, listeners, options) {
  if (listeners === void 0) {
    listeners = [];
  }
  if (options === void 0) {
    options = {};
  }
  for (var _iterator2 = _createForOfIteratorHelperLoose(listeners), _step2; !(_step2 = _iterator2()).done; ) {
    var _step2$value = _step2.value, eventName = _step2$value[0], eventHandler = _step2$value[1];
    el.addEventListener(eventName, eventHandler, options);
  }
}
function removeListeners(el, listeners, options) {
  if (listeners === void 0) {
    listeners = [];
  }
  if (options === void 0) {
    options = {};
  }
  for (var _iterator3 = _createForOfIteratorHelperLoose(listeners), _step3; !(_step3 = _iterator3()).done; ) {
    var _step3$value = _step3.value, eventName = _step3$value[0], eventHandler = _step3$value[1];
    el.removeEventListener(eventName, eventHandler, options);
  }
}
function useRecognizers(handlers, config3, nativeHandlers) {
  if (nativeHandlers === void 0) {
    nativeHandlers = {};
  }
  var classes = resolveClasses(handlers);
  var controller = React27.useMemo(function() {
    return new Controller(classes);
  }, []);
  controller.config = config3;
  controller.handlers = handlers;
  controller.nativeRefs = nativeHandlers;
  React27.useEffect(controller.effect, []);
  if (controller.config.domTarget)
    return deprecationNoticeForDomTarget;
  return controller.bind;
}
function deprecationNoticeForDomTarget() {
  if (process.env.NODE_ENV === "development") {
    console.warn("Deprecation notice: When the `domTarget` option is specified, you don't need to write `useEffect(bind, [bind])` anymore: event binding is now made handled internally to this lib.\n\nNext version won't return anything when `domTarget` is provided, therefore your code will break if you try to call `useEffect`.");
  }
}
function resolveClasses(internalHandlers) {
  var classes = /* @__PURE__ */ new Set();
  if (internalHandlers.drag)
    classes.add(RecognizersMap.get("drag"));
  if (internalHandlers.wheel)
    classes.add(RecognizersMap.get("wheel"));
  if (internalHandlers.scroll)
    classes.add(RecognizersMap.get("scroll"));
  if (internalHandlers.move)
    classes.add(RecognizersMap.get("move"));
  if (internalHandlers.pinch)
    classes.add(RecognizersMap.get("pinch"));
  if (internalHandlers.hover)
    classes.add(RecognizersMap.get("hover"));
  return classes;
}
var CoordinatesRecognizer = /* @__PURE__ */ function(_Recognizer) {
  _inheritsLoose(CoordinatesRecognizer2, _Recognizer);
  function CoordinatesRecognizer2() {
    return _Recognizer.apply(this, arguments) || this;
  }
  var _proto = CoordinatesRecognizer2.prototype;
  _proto.getInternalMovement = function getInternalMovement(values, state) {
    return subV(values, state.initial);
  };
  _proto.checkIntentionality = function checkIntentionality(_intentional, _movement) {
    if (_intentional[0] === false && _intentional[1] === false) {
      return {
        _intentional,
        axis: this.state.axis
      };
    }
    var _movement$map = _movement.map(Math.abs), absX = _movement$map[0], absY = _movement$map[1];
    var axis = this.state.axis || (absX > absY ? "x" : absX < absY ? "y" : void 0);
    if (!this.config.axis && !this.config.lockDirection)
      return {
        _intentional,
        _blocked: false,
        axis
      };
    if (!axis)
      return {
        _intentional: [false, false],
        _blocked: false,
        axis
      };
    if (!!this.config.axis && axis !== this.config.axis)
      return {
        _intentional,
        _blocked: true,
        axis
      };
    _intentional[axis === "x" ? 1 : 0] = false;
    return {
      _intentional,
      _blocked: false,
      axis
    };
  };
  _proto.getKinematics = function getKinematics(values, event) {
    var state = this.getMovement(values);
    if (!state._blocked) {
      var dt = event.timeStamp - this.state.timeStamp;
      Object.assign(state, calculateAllKinematics(state.movement, state.delta, dt));
    }
    return state;
  };
  _proto.mapStateValues = function mapStateValues(state) {
    return {
      xy: state.values,
      vxvy: state.velocities
    };
  };
  return CoordinatesRecognizer2;
}(Recognizer);
var TAP_DISTANCE_THRESHOLD = 3;
function persistEvent(event) {
  "persist" in event && typeof event.persist === "function" && event.persist();
}
var DragRecognizer = /* @__PURE__ */ function(_CoordinatesRecognize) {
  _inheritsLoose(DragRecognizer2, _CoordinatesRecognize);
  function DragRecognizer2() {
    var _this;
    _this = _CoordinatesRecognize.apply(this, arguments) || this;
    _this.ingKey = "dragging";
    _this.stateKey = "drag";
    _this.setPointerCapture = function(event) {
      if (_this.config.useTouch || document.pointerLockElement)
        return;
      var target = event.target, pointerId = event.pointerId;
      if (target && "setPointerCapture" in target) {
        target.setPointerCapture(pointerId);
      }
      _this.updateGestureState({
        _dragTarget: target,
        _dragPointerId: pointerId
      });
    };
    _this.releasePointerCapture = function() {
      if (_this.config.useTouch || document.pointerLockElement)
        return;
      var _this$state = _this.state, _dragTarget = _this$state._dragTarget, _dragPointerId = _this$state._dragPointerId;
      if (_dragPointerId && _dragTarget && "releasePointerCapture" in _dragTarget) {
        if (!("hasPointerCapture" in _dragTarget) || _dragTarget.hasPointerCapture(_dragPointerId))
          try {
            _dragTarget.releasePointerCapture(_dragPointerId);
          } catch (e2) {
          }
      }
    };
    _this.preventScroll = function(event) {
      if (_this.state._dragPreventScroll && event.cancelable) {
        event.preventDefault();
      }
    };
    _this.getEventId = function(event) {
      if (_this.config.useTouch)
        return event.changedTouches[0].identifier;
      return event.pointerId;
    };
    _this.isValidEvent = function(event) {
      return _this.state._pointerId === _this.getEventId(event);
    };
    _this.shouldPreventWindowScrollY = _this.config.experimental_preventWindowScrollY && _this.controller.supportsTouchEvents;
    _this.setUpWindowScrollDetection = function(event) {
      persistEvent(event);
      updateWindowListeners(_this.controller, _this.stateKey, [["touchmove", _this.preventScroll], ["touchend", _this.clean.bind(_assertThisInitialized(_this))], ["touchcancel", _this.clean.bind(_assertThisInitialized(_this))]], {
        passive: false
      });
      _this.setTimeout(_this.startDrag.bind(_assertThisInitialized(_this)), 250, event);
    };
    _this.setUpDelayedDragTrigger = function(event) {
      _this.state._dragDelayed = true;
      persistEvent(event);
      _this.setTimeout(_this.startDrag.bind(_assertThisInitialized(_this)), _this.config.delay, event);
    };
    _this.setStartState = function(event) {
      var values = getPointerEventValues(event, _this.transform);
      _this.updateSharedState(getGenericEventData(event));
      _this.updateGestureState(_extends({}, getStartGestureState(_assertThisInitialized(_this), values, event), getGenericPayload(_assertThisInitialized(_this), event, true), {
        _pointerId: _this.getEventId(event)
      }));
      _this.updateGestureState(_this.getMovement(values));
    };
    _this.onDragStart = function(event) {
      addEventIds(_this.controller, event);
      if (!_this.enabled || _this.state._active)
        return;
      _this.setStartState(event);
      _this.setPointerCapture(event);
      if (_this.shouldPreventWindowScrollY)
        _this.setUpWindowScrollDetection(event);
      else if (_this.config.delay > 0)
        _this.setUpDelayedDragTrigger(event);
      else
        _this.startDrag(event, true);
    };
    _this.onDragChange = function(event) {
      if (_this.state.canceled || !_this.state._active || !_this.isValidEvent(event) || _this.state._lastEventType === event.type && event.timeStamp === _this.state.timeStamp)
        return;
      var values;
      if (document.pointerLockElement) {
        var movementX = event.movementX, movementY = event.movementY;
        values = addV(_this.transform([movementX, movementY]), _this.state.values);
      } else
        values = getPointerEventValues(event, _this.transform);
      var kinematics = _this.getKinematics(values, event);
      if (!_this.state._dragStarted) {
        if (_this.state._dragDelayed) {
          _this.startDrag(event);
          return;
        }
        if (_this.shouldPreventWindowScrollY) {
          if (!_this.state._dragPreventScroll && kinematics.axis) {
            if (kinematics.axis === "x") {
              _this.startDrag(event);
            } else {
              _this.state._active = false;
              return;
            }
          } else
            return;
        } else
          return;
      }
      var genericEventData = getGenericEventData(event);
      _this.updateSharedState(genericEventData);
      var genericPayload = getGenericPayload(_assertThisInitialized(_this), event);
      var realDistance = calculateDistance(kinematics._movement);
      var _dragIsTap = _this.state._dragIsTap;
      if (_dragIsTap && realDistance >= TAP_DISTANCE_THRESHOLD)
        _dragIsTap = false;
      _this.updateGestureState(_extends({}, genericPayload, kinematics, {
        _dragIsTap
      }));
      _this.fireGestureHandler();
    };
    _this.onDragEnd = function(event) {
      removeEventIds(_this.controller, event);
      if (!_this.isValidEvent(event))
        return;
      _this.clean();
      if (!_this.state._active)
        return;
      _this.state._active = false;
      var tap = _this.state._dragIsTap;
      var _this$state$velocitie = _this.state.velocities, vx = _this$state$velocitie[0], vy = _this$state$velocitie[1];
      var _this$state$movement = _this.state.movement, mx = _this$state$movement[0], my = _this$state$movement[1];
      var _this$state$_intentio = _this.state._intentional, ix = _this$state$_intentio[0], iy = _this$state$_intentio[1];
      var _this$config$swipeVel = _this.config.swipeVelocity, svx = _this$config$swipeVel[0], svy = _this$config$swipeVel[1];
      var _this$config$swipeDis = _this.config.swipeDistance, sx2 = _this$config$swipeDis[0], sy = _this$config$swipeDis[1];
      var sd = _this.config.swipeDuration;
      var endState = _extends({}, getGenericPayload(_assertThisInitialized(_this), event), _this.getMovement(_this.state.values));
      var swipe = [0, 0];
      if (endState.elapsedTime < sd) {
        if (ix !== false && Math.abs(vx) > svx && Math.abs(mx) > sx2)
          swipe[0] = sign(vx);
        if (iy !== false && Math.abs(vy) > svy && Math.abs(my) > sy)
          swipe[1] = sign(vy);
      }
      _this.updateSharedState({
        buttons: 0
      });
      _this.updateGestureState(_extends({}, endState, {
        tap,
        swipe
      }));
      _this.fireGestureHandler(_this.config.filterTaps && tap === true);
    };
    _this.clean = function() {
      _CoordinatesRecognize.prototype.clean.call(_assertThisInitialized(_this));
      _this.state._dragStarted = false;
      _this.releasePointerCapture();
      clearWindowListeners(_this.controller, _this.stateKey);
    };
    _this.onCancel = function() {
      if (_this.state.canceled)
        return;
      _this.updateGestureState({
        canceled: true,
        _active: false
      });
      _this.updateSharedState({
        buttons: 0
      });
      setTimeout(function() {
        return _this.fireGestureHandler();
      }, 0);
    };
    _this.onClick = function(event) {
      if (!_this.state._dragIsTap)
        event.stopPropagation();
    };
    return _this;
  }
  var _proto = DragRecognizer2.prototype;
  _proto.startDrag = function startDrag(event, onDragIsStart) {
    if (onDragIsStart === void 0) {
      onDragIsStart = false;
    }
    if (!this.state._active || this.state._dragStarted)
      return;
    if (!onDragIsStart)
      this.setStartState(event);
    this.updateGestureState({
      _dragStarted: true,
      _dragPreventScroll: true,
      cancel: this.onCancel
    });
    this.clearTimeout();
    this.fireGestureHandler();
  };
  _proto.addBindings = function addBindings$1(bindings) {
    if (this.config.useTouch) {
      addBindings(bindings, "onTouchStart", this.onDragStart);
      addBindings(bindings, "onTouchMove", this.onDragChange);
      addBindings(bindings, "onTouchEnd", this.onDragEnd);
      addBindings(bindings, "onTouchCancel", this.onDragEnd);
    } else {
      addBindings(bindings, "onPointerDown", this.onDragStart);
      addBindings(bindings, "onPointerMove", this.onDragChange);
      addBindings(bindings, "onPointerUp", this.onDragEnd);
      addBindings(bindings, "onPointerCancel", this.onDragEnd);
    }
    if (this.config.filterTaps) {
      var handler = this.controller.config.eventOptions.capture ? "onClick" : "onClickCapture";
      addBindings(bindings, handler, this.onClick);
    }
  };
  return DragRecognizer2;
}(CoordinatesRecognizer);
function memoizeOne(resultFn, isEqual2) {
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }
    if (calledOnce && lastThis === this && isEqual2(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
function equal(a2, b) {
  if (a2 === b)
    return true;
  if (a2 && b && typeof a2 == "object" && typeof b == "object") {
    if (a2.constructor !== b.constructor)
      return false;
    var length, i2, keys;
    if (Array.isArray(a2)) {
      length = a2.length;
      if (length !== b.length)
        return false;
      for (i2 = length; i2-- !== 0; ) {
        if (!equal(a2[i2], b[i2]))
          return false;
      }
      return true;
    }
    var it;
    if (typeof Map === "function" && a2 instanceof Map && b instanceof Map) {
      if (a2.size !== b.size)
        return false;
      it = a2.entries();
      while (!(i2 = it.next()).done) {
        if (!b.has(i2.value[0]))
          return false;
      }
      it = a2.entries();
      while (!(i2 = it.next()).done) {
        if (!equal(i2.value[1], b.get(i2.value[0])))
          return false;
      }
      return true;
    }
    if (typeof Set === "function" && a2 instanceof Set && b instanceof Set) {
      if (a2.size !== b.size)
        return false;
      it = a2.entries();
      while (!(i2 = it.next()).done) {
        if (!b.has(i2.value[0]))
          return false;
      }
      return true;
    }
    if (a2.constructor === RegExp)
      return a2.source === b.source && a2.flags === b.flags;
    if (a2.valueOf !== Object.prototype.valueOf)
      return a2.valueOf() === b.valueOf();
    if (a2.toString !== Object.prototype.toString)
      return a2.toString() === b.toString();
    keys = Object.keys(a2);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i2 = length; i2-- !== 0; ) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i2]))
        return false;
    }
    if (typeof Element !== "undefined" && a2 instanceof Element)
      return false;
    for (i2 = length; i2-- !== 0; ) {
      if (keys[i2] === "_owner" && a2.$$typeof)
        continue;
      if (!equal(a2[keys[i2]], b[keys[i2]]))
        return false;
    }
    return true;
  }
  return a2 !== a2 && b !== b;
}
function isEqual(a2, b) {
  try {
    return equal(a2, b);
  } catch (error) {
    if ((error.message || "").match(/stack|recursion/i)) {
      console.warn("react-fast-compare cannot handle circular refs");
      return false;
    }
    throw error;
  }
}
function useDrag(handler, config3) {
  if (config3 === void 0) {
    config3 = {};
  }
  RecognizersMap.set("drag", DragRecognizer);
  var buildDragConfig = useRef();
  if (!buildDragConfig.current) {
    buildDragConfig.current = memoizeOne(_buildDragConfig, isEqual);
  }
  return useRecognizers({
    drag: handler
  }, buildDragConfig.current(config3));
}

// src/Floating.jsx
import { useLocalStorage } from "hooks";
function Floating({ localStorageKey, shown = false, width = 300, height = 270, sx: sx2, onCancel, children }) {
  const [position, setPosition] = useLocalStorage(localStorageKey, { x: 800, y: 70 });
  const [{ x, y }, api] = useSpring2(() => ({ x: position.x, y: position.y }));
  const bind = useDrag(
    ({ movement: [mx, my], last }) => {
      if (my === 0 && mx === 0)
        mx = 1;
      api.start({ x: mx, y: my, immediate: true });
      if (last) {
        setPosition({ x, y });
      }
    },
    {
      initial: () => [x.get(), y.get()],
      bounds: {
        left: 0,
        top: 0,
        right: window.innerWidth - width,
        bottom: window.innerHeight - height
      }
    }
  );
  return /* @__PURE__ */ React28.createElement(Portal_default, { elementId: "over-root" }, /* @__PURE__ */ React28.createElement(animated3.div, { ...bind(), style: { x, y, display: shown ? "block" : "none", width } }, /* @__PURE__ */ React28.createElement(Flex5, { sx: { ...sx2, width, height } }, children({ onRequestClose: onCancel }))));
}
var Floating_default = Floating;

// src/Tabs.jsx
import React29 from "react";
import * as tabs from "@zag-js/tabs";
import { useMachine, normalizeProps } from "@zag-js/react";
function Tabs({ data }) {
  const [state, send] = useMachine(tabs.machine({ id: "1", value: "item-1" }));
  const api = tabs.connect(state, send, normalizeProps);
  return /* @__PURE__ */ React29.createElement("div", { ...api.rootProps }, /* @__PURE__ */ React29.createElement("div", { ...api.triggerGroupProps }, data.map((item) => /* @__PURE__ */ React29.createElement(
    "button",
    {
      ...api.getTriggerProps({ value: item.value }),
      key: item.value
    },
    item.label
  )), /* @__PURE__ */ React29.createElement("div", { ...api.indicatorProps })), data.map((item) => /* @__PURE__ */ React29.createElement("div", { ...api.getContentProps({ value: item.value }), key: item.value }, /* @__PURE__ */ React29.createElement("p", null, item.content))));
}
var Tabs_default = Tabs;

// src/Radio.jsx
import React30 from "react";
import { Flex as Flex6, Box as Box10, Label as Label2 } from "theme-ui";
var Radio = ({ disabled = false, checked, label, tabIndex = 0, onChange = () => {
}, labelStyle = { marginLeft: 8 }, labelSx = {}, ...rest }) => {
  const checkboxRef = React30.useRef();
  const checkRef = React30.useRef();
  const handleClick = () => {
    if (disabled)
      return false;
    if (checked) {
      onChange(false);
    } else {
      onChange(true);
    }
  };
  const content = /* @__PURE__ */ React30.createElement(Flex6, { onKeyPress: (e2) => ["Enter", " "].includes(e2.key) && handleClick(), ref: checkboxRef, onClick: handleClick, sx: { position: "relative", justifyContent: "center", alignItems: "center", cursor: "pointer", width: 18, height: 18, backgroundColor: "transparent", borderRadius: "50%", transition: "background-color 500ms, border-color 500ms", borderStyle: "solid", borderWidth: 2, borderColor: "text" }, ...rest }, /* @__PURE__ */ React30.createElement(Box10, { ref: checkRef, style: { opacity: checked ? 1 : 0 }, sx: { width: 10, height: 10, borderRadius: "50%", bg: "text", pointerEvents: "none" } }));
  if (label)
    return /* @__PURE__ */ React30.createElement(Flex6, { sx: { alignItems: "center", cursor: "pointer", userSelect: "none" } }, content, /* @__PURE__ */ React30.createElement(Label2, { onClick: handleClick, sx: { ml: 2, ...labelSx } }, label));
  return content;
};
var Radio_default = Radio;

// src/Stepper.jsx
import React31 from "react";
import { Flex as Flex7, Box as Box11, Text } from "theme-ui";
function Stepper({ steps, current }) {
  return /* @__PURE__ */ React31.createElement(Flex7, { sx: { alignItems: "center", justifyContent: "space-between" } }, steps.map((item, index) => /* @__PURE__ */ React31.createElement(Flex7, { key: item, sx: { flexDirection: "column", alignItems: "center" } }, current >= index ? /* @__PURE__ */ React31.createElement(React31.Fragment, null, /* @__PURE__ */ React31.createElement(Box11, null, /* @__PURE__ */ React31.createElement(Text, { variant: "heading" }, index + 1)), /* @__PURE__ */ React31.createElement(Box11, null, /* @__PURE__ */ React31.createElement(Text, { variant: "heading" }, item))) : /* @__PURE__ */ React31.createElement(React31.Fragment, null, /* @__PURE__ */ React31.createElement(Box11, null, index + 1), /* @__PURE__ */ React31.createElement(Box11, null, item)))));
}
var Stepper_default = Stepper;

// src/Switch.jsx
import React32 from "react";
import { Box as Box12 } from "theme-ui";
var sx = {
  display: "inline-block",
  position: "relative",
  width: "3rem",
  height: "1.5rem",
  backgroundColor: "#dee2e6",
  zIndex: 1,
  borderRadius: "2.125rem",
  overflow: "hidden",
  cursor: "pointer",
  borderWidth: "0.0625rem",
  borderColor: "#ced4da",
  borderStyle: "solid",
  fontSize: "0.5625rem",
  fontWeight: 800,
  transition: "300ms ease",
  transitionProperty: "color,border-style,border-color,visibility, background,background-color,text-decoration,box-shadow,transform, opacity",
  outline: "none",
  userSelect: "none",
  "&:focus": {
    boxShadow: "0 0 0 3px hsla(202,81%,86%,1)",
    border: "1px solid hsla(205,79%,66%,1)"
  },
  "&[aria-checked='true']": {
    backgroundColor: "#91b9e4",
    borderColor: "transparent",
    "& > div": {
      transform: "translateX(calc(3rem - 1.125rem - 12%))",
      "& > div": {
        backgroundColor: "hsla(211,61%,43%,1)"
      }
    }
  },
  "& > div": {
    display: "flex",
    alignItems: "center",
    height: "100%",
    pointerEvents: "none",
    transition: "300ms ease",
    transitionProperty: "color,border-style,border-color,visibility, background,background-color,text-decoration,box-shadow,transform, opacity",
    userSelect: "none"
  },
  "& > div > div": {
    flexShrink: 0,
    backgroundColor: "#adb5bd",
    borderRadius: "50%",
    width: "1.125rem",
    height: "1.125rem",
    margin: "0 6%",
    transition: "300ms ease",
    transitionProperty: "color,border-style,border-color,visibility, background,background-color,text-decoration,box-shadow,transform, opacity",
    userSelect: "none"
  }
};
var Switch = ({ checked, label, onChange, ...rest }) => {
  const handleClick = () => {
    onChange(!checked);
  };
  return /* @__PURE__ */ React32.createElement(Box12, { sx, ...rest, onKeyPress: (e2) => ["Enter", " "].includes(e2.key) && handleClick(), onClick: handleClick, "aria-checked": checked }, /* @__PURE__ */ React32.createElement("div", null, /* @__PURE__ */ React32.createElement("div", null)));
};
Switch.defaultProps = {
  tabIndex: 0,
  onChange: () => {
  }
};
var Switch_default = Switch;

// src/SpinnerWithDelay.jsx
import React33 from "react";
import { Spinner } from "theme-ui";
function SpinnerWithDelay({ delay: delay2 = 500 }) {
  const [show, setShow] = React33.useState(false);
  React33.useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, delay2);
    return () => clearTimeout(timeout);
  }, []);
  return show ? /* @__PURE__ */ React33.createElement(Spinner, null) : null;
}
var SpinnerWithDelay_default = SpinnerWithDelay;

// src/DropdownMultipleCombobox.jsx
import React34 from "react";
import { Box as Box13 } from "theme-ui";

// ../../node_modules/downshift/dist/downshift.esm.js
var import_prop_types = __toESM(require_prop_types());
var import_react_is = __toESM(require_react_is2());
import { Component, cloneElement, useRef as useRef2, useEffect, useCallback, useLayoutEffect, useReducer, useMemo } from "react";

// ../../node_modules/compute-scroll-into-view/dist/index.mjs
function t(t2) {
  return "object" == typeof t2 && null != t2 && 1 === t2.nodeType;
}
function e(t2, e2) {
  return (!e2 || "hidden" !== t2) && "visible" !== t2 && "clip" !== t2;
}
function n(t2, n2) {
  if (t2.clientHeight < t2.scrollHeight || t2.clientWidth < t2.scrollWidth) {
    var r2 = getComputedStyle(t2, null);
    return e(r2.overflowY, n2) || e(r2.overflowX, n2) || function(t3) {
      var e2 = function(t4) {
        if (!t4.ownerDocument || !t4.ownerDocument.defaultView)
          return null;
        try {
          return t4.ownerDocument.defaultView.frameElement;
        } catch (t5) {
          return null;
        }
      }(t3);
      return !!e2 && (e2.clientHeight < t3.scrollHeight || e2.clientWidth < t3.scrollWidth);
    }(t2);
  }
  return false;
}
function r(t2, e2, n2, r2, i2, o, l, d) {
  return o < t2 && l > e2 || o > t2 && l < e2 ? 0 : o <= t2 && d <= n2 || l >= e2 && d >= n2 ? o - t2 - r2 : l > e2 && d < n2 || o < t2 && d > n2 ? l - e2 + i2 : 0;
}
var i = function(e2, i2) {
  var o = window, l = i2.scrollMode, d = i2.block, f = i2.inline, h = i2.boundary, u = i2.skipOverflowHiddenElements, s = "function" == typeof h ? h : function(t2) {
    return t2 !== h;
  };
  if (!t(e2))
    throw new TypeError("Invalid target");
  for (var a2, c, g = document.scrollingElement || document.documentElement, p = [], m = e2; t(m) && s(m); ) {
    if ((m = null == (c = (a2 = m).parentElement) ? a2.getRootNode().host || null : c) === g) {
      p.push(m);
      break;
    }
    null != m && m === document.body && n(m) && !n(document.documentElement) || null != m && n(m, u) && p.push(m);
  }
  for (var w = o.visualViewport ? o.visualViewport.width : innerWidth, v = o.visualViewport ? o.visualViewport.height : innerHeight, W = window.scrollX || pageXOffset, H = window.scrollY || pageYOffset, b = e2.getBoundingClientRect(), y = b.height, E = b.width, M = b.top, V = b.right, x = b.bottom, I = b.left, C = "start" === d || "nearest" === d ? M : "end" === d ? x : M + y / 2, R = "center" === f ? I + E / 2 : "end" === f ? V : I, T = [], k = 0; k < p.length; k++) {
    var B = p[k], D = B.getBoundingClientRect(), O = D.height, X = D.width, Y = D.top, L = D.right, S = D.bottom, j = D.left;
    if ("if-needed" === l && M >= 0 && I >= 0 && x <= v && V <= w && M >= Y && x <= S && I >= j && V <= L)
      return T;
    var N = getComputedStyle(B), q = parseInt(N.borderLeftWidth, 10), z = parseInt(N.borderTopWidth, 10), A = parseInt(N.borderRightWidth, 10), F = parseInt(N.borderBottomWidth, 10), G = 0, J = 0, K = "offsetWidth" in B ? B.offsetWidth - B.clientWidth - q - A : 0, P = "offsetHeight" in B ? B.offsetHeight - B.clientHeight - z - F : 0, Q = "offsetWidth" in B ? 0 === B.offsetWidth ? 0 : X / B.offsetWidth : 0, U = "offsetHeight" in B ? 0 === B.offsetHeight ? 0 : O / B.offsetHeight : 0;
    if (g === B)
      G = "start" === d ? C : "end" === d ? C - v : "nearest" === d ? r(H, H + v, v, z, F, H + C, H + C + y, y) : C - v / 2, J = "start" === f ? R : "center" === f ? R - w / 2 : "end" === f ? R - w : r(W, W + w, w, q, A, W + R, W + R + E, E), G = Math.max(0, G + H), J = Math.max(0, J + W);
    else {
      G = "start" === d ? C - Y - z : "end" === d ? C - S + F + P : "nearest" === d ? r(Y, S, O, z, F + P, C, C + y, y) : C - (Y + O / 2) + P / 2, J = "start" === f ? R - j - q : "center" === f ? R - (j + X / 2) + K / 2 : "end" === f ? R - L + A + K : r(j, L, X, q, A + K, R, R + E, E);
      var Z = B.scrollLeft, $ = B.scrollTop;
      C += $ - (G = Math.max(0, Math.min($ + G / U, B.scrollHeight - O / U + P))), R += Z - (J = Math.max(0, Math.min(Z + J / Q, B.scrollWidth - X / Q + K)));
    }
    T.push({ el: B, top: G, left: J });
  }
  return T;
};

// ../../node_modules/tslib/modules/index.js
var import_tslib = __toESM(require_tslib(), 1);
var {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __exportStar,
  __createBinding,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn
} = import_tslib.default;

// ../../node_modules/downshift/dist/downshift.esm.js
var idCounter = 0;
function cbToCb(cb) {
  return typeof cb === "function" ? cb : noop2;
}
function noop2() {
}
function scrollIntoView(node, menuNode) {
  if (!node) {
    return;
  }
  const actions = i(node, {
    boundary: menuNode,
    block: "nearest",
    scrollMode: "if-needed"
  });
  actions.forEach((_ref) => {
    let {
      el,
      top,
      left
    } = _ref;
    el.scrollTop = top;
    el.scrollLeft = left;
  });
}
function isOrContainsNode(parent, child, environment) {
  const result = parent === child || child instanceof environment.Node && parent.contains && parent.contains(child);
  return result;
}
function debounce(fn, time) {
  let timeoutId;
  function cancel() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
  function wrapper() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    cancel();
    timeoutId = setTimeout(() => {
      timeoutId = null;
      fn(...args);
    }, time);
  }
  wrapper.cancel = cancel;
  return wrapper;
}
function callAllEventHandlers() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }
  return function(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    return fns.some((fn) => {
      if (fn) {
        fn(event, ...args);
      }
      return event.preventDownshiftDefault || event.hasOwnProperty("nativeEvent") && event.nativeEvent.preventDownshiftDefault;
    });
  };
}
function handleRefs() {
  for (var _len4 = arguments.length, refs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    refs[_key4] = arguments[_key4];
  }
  return (node) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    });
  };
}
function generateId() {
  return String(idCounter++);
}
function getA11yStatusMessage$1(_ref2) {
  let {
    isOpen,
    resultCount,
    previousResultCount
  } = _ref2;
  if (!isOpen) {
    return "";
  }
  if (!resultCount) {
    return "No results are available.";
  }
  if (resultCount !== previousResultCount) {
    return `${resultCount} result${resultCount === 1 ? " is" : "s are"} available, use up and down arrow keys to navigate. Press Enter key to select.`;
  }
  return "";
}
function unwrapArray(arg, defaultValue) {
  arg = Array.isArray(arg) ? arg[0] : arg;
  if (!arg && defaultValue) {
    return defaultValue;
  } else {
    return arg;
  }
}
function isDOMElement(element) {
  return typeof element.type === "string";
}
function getElementProps(element) {
  return element.props;
}
function requiredProp(fnName, propName) {
  console.error(`The property "${propName}" is required in "${fnName}"`);
}
var stateKeys = ["highlightedIndex", "inputValue", "isOpen", "selectedItem", "type"];
function pickState(state) {
  if (state === void 0) {
    state = {};
  }
  const result = {};
  stateKeys.forEach((k) => {
    if (state.hasOwnProperty(k)) {
      result[k] = state[k];
    }
  });
  return result;
}
function getState(state, props) {
  return Object.keys(state).reduce((prevState, key) => {
    prevState[key] = isControlledProp(props, key) ? props[key] : state[key];
    return prevState;
  }, {});
}
function isControlledProp(props, key) {
  return props[key] !== void 0;
}
function normalizeArrowKey(event) {
  const {
    key,
    keyCode
  } = event;
  if (keyCode >= 37 && keyCode <= 40 && key.indexOf("Arrow") !== 0) {
    return `Arrow${key}`;
  }
  return key;
}
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
function getNextWrappingIndex(moveAmount, baseIndex, itemCount, getItemNodeFromIndex, circular) {
  if (circular === void 0) {
    circular = true;
  }
  if (itemCount === 0) {
    return -1;
  }
  const itemsLastIndex = itemCount - 1;
  if (typeof baseIndex !== "number" || baseIndex < 0 || baseIndex >= itemCount) {
    baseIndex = moveAmount > 0 ? -1 : itemsLastIndex + 1;
  }
  let newIndex = baseIndex + moveAmount;
  if (newIndex < 0) {
    newIndex = circular ? itemsLastIndex : 0;
  } else if (newIndex > itemsLastIndex) {
    newIndex = circular ? 0 : itemsLastIndex;
  }
  const nonDisabledNewIndex = getNextNonDisabledIndex(moveAmount, newIndex, itemCount, getItemNodeFromIndex, circular);
  if (nonDisabledNewIndex === -1) {
    return baseIndex >= itemCount ? -1 : baseIndex;
  }
  return nonDisabledNewIndex;
}
function getNextNonDisabledIndex(moveAmount, baseIndex, itemCount, getItemNodeFromIndex, circular) {
  const currentElementNode = getItemNodeFromIndex(baseIndex);
  if (!currentElementNode || !currentElementNode.hasAttribute("disabled")) {
    return baseIndex;
  }
  if (moveAmount > 0) {
    for (let index = baseIndex + 1; index < itemCount; index++) {
      if (!getItemNodeFromIndex(index).hasAttribute("disabled")) {
        return index;
      }
    }
  } else {
    for (let index = baseIndex - 1; index >= 0; index--) {
      if (!getItemNodeFromIndex(index).hasAttribute("disabled")) {
        return index;
      }
    }
  }
  if (circular) {
    return moveAmount > 0 ? getNextNonDisabledIndex(1, 0, itemCount, getItemNodeFromIndex, false) : getNextNonDisabledIndex(-1, itemCount - 1, itemCount, getItemNodeFromIndex, false);
  }
  return -1;
}
function targetWithinDownshift(target, downshiftElements, environment, checkActiveElement) {
  if (checkActiveElement === void 0) {
    checkActiveElement = true;
  }
  return downshiftElements.some((contextNode) => contextNode && (isOrContainsNode(contextNode, target, environment) || checkActiveElement && isOrContainsNode(contextNode, environment.document.activeElement, environment)));
}
var validateControlledUnchanged = noop2;
if (process.env.NODE_ENV !== "production") {
  validateControlledUnchanged = (state, prevProps, nextProps) => {
    const warningDescription = `This prop should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled Downshift element for the lifetime of the component. More info: https://github.com/downshift-js/downshift#control-props`;
    Object.keys(state).forEach((propKey) => {
      if (prevProps[propKey] !== void 0 && nextProps[propKey] === void 0) {
        console.error(`downshift: A component has changed the controlled prop "${propKey}" to be uncontrolled. ${warningDescription}`);
      } else if (prevProps[propKey] === void 0 && nextProps[propKey] !== void 0) {
        console.error(`downshift: A component has changed the uncontrolled prop "${propKey}" to be controlled. ${warningDescription}`);
      }
    });
  };
}
var cleanupStatus = debounce((documentProp) => {
  getStatusDiv(documentProp).textContent = "";
}, 500);
function setStatus(status, documentProp) {
  const div = getStatusDiv(documentProp);
  if (!status) {
    return;
  }
  div.textContent = status;
  cleanupStatus(documentProp);
}
function getStatusDiv(documentProp) {
  if (documentProp === void 0) {
    documentProp = document;
  }
  let statusDiv = documentProp.getElementById("a11y-status-message");
  if (statusDiv) {
    return statusDiv;
  }
  statusDiv = documentProp.createElement("div");
  statusDiv.setAttribute("id", "a11y-status-message");
  statusDiv.setAttribute("role", "status");
  statusDiv.setAttribute("aria-live", "polite");
  statusDiv.setAttribute("aria-relevant", "additions text");
  Object.assign(statusDiv.style, {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px"
  });
  documentProp.body.appendChild(statusDiv);
  return statusDiv;
}
var unknown = process.env.NODE_ENV !== "production" ? "__autocomplete_unknown__" : 0;
var mouseUp = process.env.NODE_ENV !== "production" ? "__autocomplete_mouseup__" : 1;
var itemMouseEnter = process.env.NODE_ENV !== "production" ? "__autocomplete_item_mouseenter__" : 2;
var keyDownArrowUp = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_arrow_up__" : 3;
var keyDownArrowDown = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_arrow_down__" : 4;
var keyDownEscape = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_escape__" : 5;
var keyDownEnter = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_enter__" : 6;
var keyDownHome = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_home__" : 7;
var keyDownEnd = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_end__" : 8;
var clickItem = process.env.NODE_ENV !== "production" ? "__autocomplete_click_item__" : 9;
var blurInput = process.env.NODE_ENV !== "production" ? "__autocomplete_blur_input__" : 10;
var changeInput = process.env.NODE_ENV !== "production" ? "__autocomplete_change_input__" : 11;
var keyDownSpaceButton = process.env.NODE_ENV !== "production" ? "__autocomplete_keydown_space_button__" : 12;
var clickButton = process.env.NODE_ENV !== "production" ? "__autocomplete_click_button__" : 13;
var blurButton = process.env.NODE_ENV !== "production" ? "__autocomplete_blur_button__" : 14;
var controlledPropUpdatedSelectedItem = process.env.NODE_ENV !== "production" ? "__autocomplete_controlled_prop_updated_selected_item__" : 15;
var touchEnd = process.env.NODE_ENV !== "production" ? "__autocomplete_touchend__" : 16;
var stateChangeTypes$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  unknown,
  mouseUp,
  itemMouseEnter,
  keyDownArrowUp,
  keyDownArrowDown,
  keyDownEscape,
  keyDownEnter,
  keyDownHome,
  keyDownEnd,
  clickItem,
  blurInput,
  changeInput,
  keyDownSpaceButton,
  clickButton,
  blurButton,
  controlledPropUpdatedSelectedItem,
  touchEnd
});
var Downshift = /* @__PURE__ */ (() => {
  class Downshift2 extends Component {
    constructor(_props) {
      var _this;
      super(_props);
      _this = this;
      this.id = this.props.id || `downshift-${generateId()}`;
      this.menuId = this.props.menuId || `${this.id}-menu`;
      this.labelId = this.props.labelId || `${this.id}-label`;
      this.inputId = this.props.inputId || `${this.id}-input`;
      this.getItemId = this.props.getItemId || ((index) => `${this.id}-item-${index}`);
      this.input = null;
      this.items = [];
      this.itemCount = null;
      this.previousResultCount = 0;
      this.timeoutIds = [];
      this.internalSetTimeout = (fn, time) => {
        const id = setTimeout(() => {
          this.timeoutIds = this.timeoutIds.filter((i2) => i2 !== id);
          fn();
        }, time);
        this.timeoutIds.push(id);
      };
      this.setItemCount = (count) => {
        this.itemCount = count;
      };
      this.unsetItemCount = () => {
        this.itemCount = null;
      };
      this.setHighlightedIndex = function(highlightedIndex, otherStateToSet) {
        if (highlightedIndex === void 0) {
          highlightedIndex = _this.props.defaultHighlightedIndex;
        }
        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }
        otherStateToSet = pickState(otherStateToSet);
        _this.internalSetState({
          highlightedIndex,
          ...otherStateToSet
        });
      };
      this.clearSelection = (cb) => {
        this.internalSetState({
          selectedItem: null,
          inputValue: "",
          highlightedIndex: this.props.defaultHighlightedIndex,
          isOpen: this.props.defaultIsOpen
        }, cb);
      };
      this.selectItem = (item, otherStateToSet, cb) => {
        otherStateToSet = pickState(otherStateToSet);
        this.internalSetState({
          isOpen: this.props.defaultIsOpen,
          highlightedIndex: this.props.defaultHighlightedIndex,
          selectedItem: item,
          inputValue: this.props.itemToString(item),
          ...otherStateToSet
        }, cb);
      };
      this.selectItemAtIndex = (itemIndex, otherStateToSet, cb) => {
        const item = this.items[itemIndex];
        if (item == null) {
          return;
        }
        this.selectItem(item, otherStateToSet, cb);
      };
      this.selectHighlightedItem = (otherStateToSet, cb) => {
        return this.selectItemAtIndex(this.getState().highlightedIndex, otherStateToSet, cb);
      };
      this.internalSetState = (stateToSet, cb) => {
        let isItemSelected, onChangeArg;
        const onStateChangeArg = {};
        const isStateToSetFunction = typeof stateToSet === "function";
        if (!isStateToSetFunction && stateToSet.hasOwnProperty("inputValue")) {
          this.props.onInputValueChange(stateToSet.inputValue, {
            ...this.getStateAndHelpers(),
            ...stateToSet
          });
        }
        return this.setState((state) => {
          state = this.getState(state);
          let newStateToSet = isStateToSetFunction ? stateToSet(state) : stateToSet;
          newStateToSet = this.props.stateReducer(state, newStateToSet);
          isItemSelected = newStateToSet.hasOwnProperty("selectedItem");
          const nextState = {};
          if (isItemSelected && newStateToSet.selectedItem !== state.selectedItem) {
            onChangeArg = newStateToSet.selectedItem;
          }
          newStateToSet.type = newStateToSet.type || unknown;
          Object.keys(newStateToSet).forEach((key) => {
            if (state[key] !== newStateToSet[key]) {
              onStateChangeArg[key] = newStateToSet[key];
            }
            if (key === "type") {
              return;
            }
            newStateToSet[key];
            if (!isControlledProp(this.props, key)) {
              nextState[key] = newStateToSet[key];
            }
          });
          if (isStateToSetFunction && newStateToSet.hasOwnProperty("inputValue")) {
            this.props.onInputValueChange(newStateToSet.inputValue, {
              ...this.getStateAndHelpers(),
              ...newStateToSet
            });
          }
          return nextState;
        }, () => {
          cbToCb(cb)();
          const hasMoreStateThanType = Object.keys(onStateChangeArg).length > 1;
          if (hasMoreStateThanType) {
            this.props.onStateChange(onStateChangeArg, this.getStateAndHelpers());
          }
          if (isItemSelected) {
            this.props.onSelect(stateToSet.selectedItem, this.getStateAndHelpers());
          }
          if (onChangeArg !== void 0) {
            this.props.onChange(onChangeArg, this.getStateAndHelpers());
          }
          this.props.onUserAction(onStateChangeArg, this.getStateAndHelpers());
        });
      };
      this.rootRef = (node) => this._rootNode = node;
      this.getRootProps = function(_temp, _temp2) {
        let {
          refKey = "ref",
          ref,
          ...rest
        } = _temp === void 0 ? {} : _temp;
        let {
          suppressRefError = false
        } = _temp2 === void 0 ? {} : _temp2;
        _this.getRootProps.called = true;
        _this.getRootProps.refKey = refKey;
        _this.getRootProps.suppressRefError = suppressRefError;
        const {
          isOpen
        } = _this.getState();
        return {
          [refKey]: handleRefs(ref, _this.rootRef),
          role: "combobox",
          "aria-expanded": isOpen,
          "aria-haspopup": "listbox",
          "aria-owns": isOpen ? _this.menuId : null,
          "aria-labelledby": _this.labelId,
          ...rest
        };
      };
      this.keyDownHandlers = {
        ArrowDown(event) {
          event.preventDefault();
          if (this.getState().isOpen) {
            const amount = event.shiftKey ? 5 : 1;
            this.moveHighlightedIndex(amount, {
              type: keyDownArrowDown
            });
          } else {
            this.internalSetState({
              isOpen: true,
              type: keyDownArrowDown
            }, () => {
              const itemCount = this.getItemCount();
              if (itemCount > 0) {
                const {
                  highlightedIndex
                } = this.getState();
                const nextHighlightedIndex = getNextWrappingIndex(1, highlightedIndex, itemCount, (index) => this.getItemNodeFromIndex(index));
                this.setHighlightedIndex(nextHighlightedIndex, {
                  type: keyDownArrowDown
                });
              }
            });
          }
        },
        ArrowUp(event) {
          event.preventDefault();
          if (this.getState().isOpen) {
            const amount = event.shiftKey ? -5 : -1;
            this.moveHighlightedIndex(amount, {
              type: keyDownArrowUp
            });
          } else {
            this.internalSetState({
              isOpen: true,
              type: keyDownArrowUp
            }, () => {
              const itemCount = this.getItemCount();
              if (itemCount > 0) {
                const {
                  highlightedIndex
                } = this.getState();
                const nextHighlightedIndex = getNextWrappingIndex(-1, highlightedIndex, itemCount, (index) => this.getItemNodeFromIndex(index));
                this.setHighlightedIndex(nextHighlightedIndex, {
                  type: keyDownArrowUp
                });
              }
            });
          }
        },
        Enter(event) {
          if (event.which === 229) {
            return;
          }
          const {
            isOpen,
            highlightedIndex
          } = this.getState();
          if (isOpen && highlightedIndex != null) {
            event.preventDefault();
            const item = this.items[highlightedIndex];
            const itemNode = this.getItemNodeFromIndex(highlightedIndex);
            if (item == null || itemNode && itemNode.hasAttribute("disabled")) {
              return;
            }
            this.selectHighlightedItem({
              type: keyDownEnter
            });
          }
        },
        Escape(event) {
          event.preventDefault();
          this.reset({
            type: keyDownEscape,
            ...!this.state.isOpen && {
              selectedItem: null,
              inputValue: ""
            }
          });
        }
      };
      this.buttonKeyDownHandlers = {
        ...this.keyDownHandlers,
        " "(event) {
          event.preventDefault();
          this.toggleMenu({
            type: keyDownSpaceButton
          });
        }
      };
      this.inputKeyDownHandlers = {
        ...this.keyDownHandlers,
        Home(event) {
          const {
            isOpen
          } = this.getState();
          if (!isOpen) {
            return;
          }
          event.preventDefault();
          const itemCount = this.getItemCount();
          if (itemCount <= 0 || !isOpen) {
            return;
          }
          const newHighlightedIndex = getNextNonDisabledIndex(1, 0, itemCount, (index) => this.getItemNodeFromIndex(index), false);
          this.setHighlightedIndex(newHighlightedIndex, {
            type: keyDownHome
          });
        },
        End(event) {
          const {
            isOpen
          } = this.getState();
          if (!isOpen) {
            return;
          }
          event.preventDefault();
          const itemCount = this.getItemCount();
          if (itemCount <= 0 || !isOpen) {
            return;
          }
          const newHighlightedIndex = getNextNonDisabledIndex(-1, itemCount - 1, itemCount, (index) => this.getItemNodeFromIndex(index), false);
          this.setHighlightedIndex(newHighlightedIndex, {
            type: keyDownEnd
          });
        }
      };
      this.getToggleButtonProps = function(_temp3) {
        let {
          onClick,
          onPress,
          onKeyDown,
          onKeyUp,
          onBlur,
          ...rest
        } = _temp3 === void 0 ? {} : _temp3;
        const {
          isOpen
        } = _this.getState();
        const enabledEventHandlers = {
          onClick: callAllEventHandlers(onClick, _this.buttonHandleClick),
          onKeyDown: callAllEventHandlers(onKeyDown, _this.buttonHandleKeyDown),
          onKeyUp: callAllEventHandlers(onKeyUp, _this.buttonHandleKeyUp),
          onBlur: callAllEventHandlers(onBlur, _this.buttonHandleBlur)
        };
        const eventHandlers = rest.disabled ? {} : enabledEventHandlers;
        return {
          type: "button",
          role: "button",
          "aria-label": isOpen ? "close menu" : "open menu",
          "aria-haspopup": true,
          "data-toggle": true,
          ...eventHandlers,
          ...rest
        };
      };
      this.buttonHandleKeyUp = (event) => {
        event.preventDefault();
      };
      this.buttonHandleKeyDown = (event) => {
        const key = normalizeArrowKey(event);
        if (this.buttonKeyDownHandlers[key]) {
          this.buttonKeyDownHandlers[key].call(this, event);
        }
      };
      this.buttonHandleClick = (event) => {
        event.preventDefault();
        if (this.props.environment.document.activeElement === this.props.environment.document.body) {
          event.target.focus();
        }
        if (process.env.NODE_ENV === "test") {
          this.toggleMenu({
            type: clickButton
          });
        } else {
          this.internalSetTimeout(() => this.toggleMenu({
            type: clickButton
          }));
        }
      };
      this.buttonHandleBlur = (event) => {
        const blurTarget = event.target;
        this.internalSetTimeout(() => {
          if (!this.isMouseDown && (this.props.environment.document.activeElement == null || this.props.environment.document.activeElement.id !== this.inputId) && this.props.environment.document.activeElement !== blurTarget) {
            this.reset({
              type: blurButton
            });
          }
        });
      };
      this.getLabelProps = (props) => {
        return {
          htmlFor: this.inputId,
          id: this.labelId,
          ...props
        };
      };
      this.getInputProps = function(_temp4) {
        let {
          onKeyDown,
          onBlur,
          onChange,
          onInput,
          onChangeText,
          ...rest
        } = _temp4 === void 0 ? {} : _temp4;
        let onChangeKey;
        let eventHandlers = {};
        {
          onChangeKey = "onChange";
        }
        const {
          inputValue,
          isOpen,
          highlightedIndex
        } = _this.getState();
        if (!rest.disabled) {
          eventHandlers = {
            [onChangeKey]: callAllEventHandlers(onChange, onInput, _this.inputHandleChange),
            onKeyDown: callAllEventHandlers(onKeyDown, _this.inputHandleKeyDown),
            onBlur: callAllEventHandlers(onBlur, _this.inputHandleBlur)
          };
        }
        return {
          "aria-autocomplete": "list",
          "aria-activedescendant": isOpen && typeof highlightedIndex === "number" && highlightedIndex >= 0 ? _this.getItemId(highlightedIndex) : null,
          "aria-controls": isOpen ? _this.menuId : null,
          "aria-labelledby": _this.labelId,
          autoComplete: "off",
          value: inputValue,
          id: _this.inputId,
          ...eventHandlers,
          ...rest
        };
      };
      this.inputHandleKeyDown = (event) => {
        const key = normalizeArrowKey(event);
        if (key && this.inputKeyDownHandlers[key]) {
          this.inputKeyDownHandlers[key].call(this, event);
        }
      };
      this.inputHandleChange = (event) => {
        this.internalSetState({
          type: changeInput,
          isOpen: true,
          inputValue: event.target.value,
          highlightedIndex: this.props.defaultHighlightedIndex
        });
      };
      this.inputHandleBlur = () => {
        this.internalSetTimeout(() => {
          const downshiftButtonIsActive = this.props.environment.document && !!this.props.environment.document.activeElement && !!this.props.environment.document.activeElement.dataset && this.props.environment.document.activeElement.dataset.toggle && this._rootNode && this._rootNode.contains(this.props.environment.document.activeElement);
          if (!this.isMouseDown && !downshiftButtonIsActive) {
            this.reset({
              type: blurInput
            });
          }
        });
      };
      this.menuRef = (node) => {
        this._menuNode = node;
      };
      this.getMenuProps = function(_temp5, _temp6) {
        let {
          refKey = "ref",
          ref,
          ...props
        } = _temp5 === void 0 ? {} : _temp5;
        let {
          suppressRefError = false
        } = _temp6 === void 0 ? {} : _temp6;
        _this.getMenuProps.called = true;
        _this.getMenuProps.refKey = refKey;
        _this.getMenuProps.suppressRefError = suppressRefError;
        return {
          [refKey]: handleRefs(ref, _this.menuRef),
          role: "listbox",
          "aria-labelledby": props && props["aria-label"] ? null : _this.labelId,
          id: _this.menuId,
          ...props
        };
      };
      this.getItemProps = function(_temp7) {
        let {
          onMouseMove,
          onMouseDown,
          onClick,
          onPress,
          index,
          item = process.env.NODE_ENV === "production" ? void 0 : requiredProp("getItemProps", "item"),
          ...rest
        } = _temp7 === void 0 ? {} : _temp7;
        if (index === void 0) {
          _this.items.push(item);
          index = _this.items.indexOf(item);
        } else {
          _this.items[index] = item;
        }
        const onSelectKey = "onClick";
        const customClickHandler = onClick;
        const enabledEventHandlers = {
          onMouseMove: callAllEventHandlers(onMouseMove, () => {
            if (index === _this.getState().highlightedIndex) {
              return;
            }
            _this.setHighlightedIndex(index, {
              type: itemMouseEnter
            });
            _this.avoidScrolling = true;
            _this.internalSetTimeout(() => _this.avoidScrolling = false, 250);
          }),
          onMouseDown: callAllEventHandlers(onMouseDown, (event) => {
            event.preventDefault();
          }),
          [onSelectKey]: callAllEventHandlers(customClickHandler, () => {
            _this.selectItemAtIndex(index, {
              type: clickItem
            });
          })
        };
        const eventHandlers = rest.disabled ? {
          onMouseDown: enabledEventHandlers.onMouseDown
        } : enabledEventHandlers;
        return {
          id: _this.getItemId(index),
          role: "option",
          "aria-selected": _this.getState().highlightedIndex === index,
          ...eventHandlers,
          ...rest
        };
      };
      this.clearItems = () => {
        this.items = [];
      };
      this.reset = function(otherStateToSet, cb) {
        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }
        otherStateToSet = pickState(otherStateToSet);
        _this.internalSetState((_ref) => {
          let {
            selectedItem
          } = _ref;
          return {
            isOpen: _this.props.defaultIsOpen,
            highlightedIndex: _this.props.defaultHighlightedIndex,
            inputValue: _this.props.itemToString(selectedItem),
            ...otherStateToSet
          };
        }, cb);
      };
      this.toggleMenu = function(otherStateToSet, cb) {
        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }
        otherStateToSet = pickState(otherStateToSet);
        _this.internalSetState((_ref2) => {
          let {
            isOpen
          } = _ref2;
          return {
            isOpen: !isOpen,
            ...isOpen && {
              highlightedIndex: _this.props.defaultHighlightedIndex
            },
            ...otherStateToSet
          };
        }, () => {
          const {
            isOpen,
            highlightedIndex
          } = _this.getState();
          if (isOpen) {
            if (_this.getItemCount() > 0 && typeof highlightedIndex === "number") {
              _this.setHighlightedIndex(highlightedIndex, otherStateToSet);
            }
          }
          cbToCb(cb)();
        });
      };
      this.openMenu = (cb) => {
        this.internalSetState({
          isOpen: true
        }, cb);
      };
      this.closeMenu = (cb) => {
        this.internalSetState({
          isOpen: false
        }, cb);
      };
      this.updateStatus = debounce(() => {
        const state = this.getState();
        const item = this.items[state.highlightedIndex];
        const resultCount = this.getItemCount();
        const status = this.props.getA11yStatusMessage({
          itemToString: this.props.itemToString,
          previousResultCount: this.previousResultCount,
          resultCount,
          highlightedItem: item,
          ...state
        });
        this.previousResultCount = resultCount;
        setStatus(status, this.props.environment.document);
      }, 200);
      const {
        defaultHighlightedIndex,
        initialHighlightedIndex: _highlightedIndex = defaultHighlightedIndex,
        defaultIsOpen,
        initialIsOpen: _isOpen = defaultIsOpen,
        initialInputValue: _inputValue = "",
        initialSelectedItem: _selectedItem = null
      } = this.props;
      const _state = this.getState({
        highlightedIndex: _highlightedIndex,
        isOpen: _isOpen,
        inputValue: _inputValue,
        selectedItem: _selectedItem
      });
      if (_state.selectedItem != null && this.props.initialInputValue === void 0) {
        _state.inputValue = this.props.itemToString(_state.selectedItem);
      }
      this.state = _state;
    }
    internalClearTimeouts() {
      this.timeoutIds.forEach((id) => {
        clearTimeout(id);
      });
      this.timeoutIds = [];
    }
    getState(stateToMerge) {
      if (stateToMerge === void 0) {
        stateToMerge = this.state;
      }
      return getState(stateToMerge, this.props);
    }
    getItemCount() {
      let itemCount = this.items.length;
      if (this.itemCount != null) {
        itemCount = this.itemCount;
      } else if (this.props.itemCount !== void 0) {
        itemCount = this.props.itemCount;
      }
      return itemCount;
    }
    getItemNodeFromIndex(index) {
      return this.props.environment.document.getElementById(this.getItemId(index));
    }
    scrollHighlightedItemIntoView() {
      {
        const node = this.getItemNodeFromIndex(this.getState().highlightedIndex);
        this.props.scrollIntoView(node, this._menuNode);
      }
    }
    moveHighlightedIndex(amount, otherStateToSet) {
      const itemCount = this.getItemCount();
      const {
        highlightedIndex
      } = this.getState();
      if (itemCount > 0) {
        const nextHighlightedIndex = getNextWrappingIndex(amount, highlightedIndex, itemCount, (index) => this.getItemNodeFromIndex(index));
        this.setHighlightedIndex(nextHighlightedIndex, otherStateToSet);
      }
    }
    getStateAndHelpers() {
      const {
        highlightedIndex,
        inputValue,
        selectedItem,
        isOpen
      } = this.getState();
      const {
        itemToString: itemToString2
      } = this.props;
      const {
        id
      } = this;
      const {
        getRootProps,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getInputProps,
        getItemProps,
        openMenu,
        closeMenu,
        toggleMenu,
        selectItem,
        selectItemAtIndex,
        selectHighlightedItem,
        setHighlightedIndex,
        clearSelection,
        clearItems,
        reset,
        setItemCount,
        unsetItemCount,
        internalSetState: setState
      } = this;
      return {
        getRootProps,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getInputProps,
        getItemProps,
        reset,
        openMenu,
        closeMenu,
        toggleMenu,
        selectItem,
        selectItemAtIndex,
        selectHighlightedItem,
        setHighlightedIndex,
        clearSelection,
        clearItems,
        setItemCount,
        unsetItemCount,
        setState,
        itemToString: itemToString2,
        id,
        highlightedIndex,
        inputValue,
        isOpen,
        selectedItem
      };
    }
    componentDidMount() {
      if (process.env.NODE_ENV !== "production" && true && this.getMenuProps.called && !this.getMenuProps.suppressRefError) {
        validateGetMenuPropsCalledCorrectly(this._menuNode, this.getMenuProps);
      }
      {
        const onMouseDown = () => {
          this.isMouseDown = true;
        };
        const onMouseUp = (event) => {
          this.isMouseDown = false;
          const contextWithinDownshift = targetWithinDownshift(event.target, [this._rootNode, this._menuNode], this.props.environment);
          if (!contextWithinDownshift && this.getState().isOpen) {
            this.reset({
              type: mouseUp
            }, () => this.props.onOuterClick(this.getStateAndHelpers()));
          }
        };
        const onTouchStart = () => {
          this.isTouchMove = false;
        };
        const onTouchMove = () => {
          this.isTouchMove = true;
        };
        const onTouchEnd = (event) => {
          const contextWithinDownshift = targetWithinDownshift(event.target, [this._rootNode, this._menuNode], this.props.environment, false);
          if (!this.isTouchMove && !contextWithinDownshift && this.getState().isOpen) {
            this.reset({
              type: touchEnd
            }, () => this.props.onOuterClick(this.getStateAndHelpers()));
          }
        };
        const {
          environment
        } = this.props;
        environment.addEventListener("mousedown", onMouseDown);
        environment.addEventListener("mouseup", onMouseUp);
        environment.addEventListener("touchstart", onTouchStart);
        environment.addEventListener("touchmove", onTouchMove);
        environment.addEventListener("touchend", onTouchEnd);
        this.cleanup = () => {
          this.internalClearTimeouts();
          this.updateStatus.cancel();
          environment.removeEventListener("mousedown", onMouseDown);
          environment.removeEventListener("mouseup", onMouseUp);
          environment.removeEventListener("touchstart", onTouchStart);
          environment.removeEventListener("touchmove", onTouchMove);
          environment.removeEventListener("touchend", onTouchEnd);
        };
      }
    }
    shouldScroll(prevState, prevProps) {
      const {
        highlightedIndex: currentHighlightedIndex
      } = this.props.highlightedIndex === void 0 ? this.getState() : this.props;
      const {
        highlightedIndex: prevHighlightedIndex
      } = prevProps.highlightedIndex === void 0 ? prevState : prevProps;
      const scrollWhenOpen = currentHighlightedIndex && this.getState().isOpen && !prevState.isOpen;
      const scrollWhenNavigating = currentHighlightedIndex !== prevHighlightedIndex;
      return scrollWhenOpen || scrollWhenNavigating;
    }
    componentDidUpdate(prevProps, prevState) {
      if (process.env.NODE_ENV !== "production") {
        validateControlledUnchanged(this.state, prevProps, this.props);
        if (this.getMenuProps.called && !this.getMenuProps.suppressRefError) {
          validateGetMenuPropsCalledCorrectly(this._menuNode, this.getMenuProps);
        }
      }
      if (isControlledProp(this.props, "selectedItem") && this.props.selectedItemChanged(prevProps.selectedItem, this.props.selectedItem)) {
        this.internalSetState({
          type: controlledPropUpdatedSelectedItem,
          inputValue: this.props.itemToString(this.props.selectedItem)
        });
      }
      if (!this.avoidScrolling && this.shouldScroll(prevState, prevProps)) {
        this.scrollHighlightedItemIntoView();
      }
      {
        this.updateStatus();
      }
    }
    componentWillUnmount() {
      this.cleanup();
    }
    render() {
      const children = unwrapArray(this.props.children, noop2);
      this.clearItems();
      this.getRootProps.called = false;
      this.getRootProps.refKey = void 0;
      this.getRootProps.suppressRefError = void 0;
      this.getMenuProps.called = false;
      this.getMenuProps.refKey = void 0;
      this.getMenuProps.suppressRefError = void 0;
      this.getLabelProps.called = false;
      this.getInputProps.called = false;
      const element = unwrapArray(children(this.getStateAndHelpers()));
      if (!element) {
        return null;
      }
      if (this.getRootProps.called || this.props.suppressRefError) {
        if (process.env.NODE_ENV !== "production" && !this.getRootProps.suppressRefError && !this.props.suppressRefError) {
          validateGetRootPropsCalledCorrectly(element, this.getRootProps);
        }
        return element;
      } else if (isDOMElement(element)) {
        return /* @__PURE__ */ cloneElement(element, this.getRootProps(getElementProps(element)));
      }
      if (process.env.NODE_ENV !== "production") {
        throw new Error("downshift: If you return a non-DOM element, you must apply the getRootProps function");
      }
      return void 0;
    }
  }
  Downshift2.defaultProps = {
    defaultHighlightedIndex: null,
    defaultIsOpen: false,
    getA11yStatusMessage: getA11yStatusMessage$1,
    itemToString: (i2) => {
      if (i2 == null) {
        return "";
      }
      if (process.env.NODE_ENV !== "production" && isPlainObject(i2) && !i2.hasOwnProperty("toString")) {
        console.warn("downshift: An object was passed to the default implementation of `itemToString`. You should probably provide your own `itemToString` implementation. Please refer to the `itemToString` API documentation.", "The object that was passed:", i2);
      }
      return String(i2);
    },
    onStateChange: noop2,
    onInputValueChange: noop2,
    onUserAction: noop2,
    onChange: noop2,
    onSelect: noop2,
    onOuterClick: noop2,
    selectedItemChanged: (prevItem, item) => prevItem !== item,
    environment: typeof window === "undefined" ? {} : window,
    stateReducer: (state, stateToSet) => stateToSet,
    suppressRefError: false,
    scrollIntoView
  };
  Downshift2.stateChangeTypes = stateChangeTypes$3;
  return Downshift2;
})();
process.env.NODE_ENV !== "production" ? Downshift.propTypes = {
  children: import_prop_types.default.func,
  defaultHighlightedIndex: import_prop_types.default.number,
  defaultIsOpen: import_prop_types.default.bool,
  initialHighlightedIndex: import_prop_types.default.number,
  initialSelectedItem: import_prop_types.default.any,
  initialInputValue: import_prop_types.default.string,
  initialIsOpen: import_prop_types.default.bool,
  getA11yStatusMessage: import_prop_types.default.func,
  itemToString: import_prop_types.default.func,
  onChange: import_prop_types.default.func,
  onSelect: import_prop_types.default.func,
  onStateChange: import_prop_types.default.func,
  onInputValueChange: import_prop_types.default.func,
  onUserAction: import_prop_types.default.func,
  onOuterClick: import_prop_types.default.func,
  selectedItemChanged: import_prop_types.default.func,
  stateReducer: import_prop_types.default.func,
  itemCount: import_prop_types.default.number,
  id: import_prop_types.default.string,
  environment: import_prop_types.default.shape({
    addEventListener: import_prop_types.default.func,
    removeEventListener: import_prop_types.default.func,
    document: import_prop_types.default.shape({
      getElementById: import_prop_types.default.func,
      activeElement: import_prop_types.default.any,
      body: import_prop_types.default.any
    })
  }),
  suppressRefError: import_prop_types.default.bool,
  scrollIntoView: import_prop_types.default.func,
  selectedItem: import_prop_types.default.any,
  isOpen: import_prop_types.default.bool,
  inputValue: import_prop_types.default.string,
  highlightedIndex: import_prop_types.default.number,
  labelId: import_prop_types.default.string,
  inputId: import_prop_types.default.string,
  menuId: import_prop_types.default.string,
  getItemId: import_prop_types.default.func
} : void 0;
function validateGetMenuPropsCalledCorrectly(node, _ref3) {
  let {
    refKey
  } = _ref3;
  if (!node) {
    console.error(`downshift: The ref prop "${refKey}" from getMenuProps was not applied correctly on your menu element.`);
  }
}
function validateGetRootPropsCalledCorrectly(element, _ref4) {
  let {
    refKey
  } = _ref4;
  const refKeySpecified = refKey !== "ref";
  const isComposite = !isDOMElement(element);
  if (isComposite && !refKeySpecified && !(0, import_react_is.isForwardRef)(element)) {
    console.error("downshift: You returned a non-DOM element. You must specify a refKey in getRootProps");
  } else if (!isComposite && refKeySpecified) {
    console.error(`downshift: You returned a DOM element. You should not specify a refKey in getRootProps. You specified "${refKey}"`);
  }
  if (!(0, import_react_is.isForwardRef)(element) && !getElementProps(element)[refKey]) {
    console.error(`downshift: You must apply the ref prop "${refKey}" from getRootProps onto your root element.`);
  }
}
var dropdownDefaultStateValues = {
  highlightedIndex: -1,
  isOpen: false,
  selectedItem: null,
  inputValue: ""
};
function callOnChangeProps(action, state, newState) {
  const {
    props,
    type
  } = action;
  const changes = {};
  Object.keys(state).forEach((key) => {
    invokeOnChangeHandler(key, action, state, newState);
    if (newState[key] !== state[key]) {
      changes[key] = newState[key];
    }
  });
  if (props.onStateChange && Object.keys(changes).length) {
    props.onStateChange({
      type,
      ...changes
    });
  }
}
function invokeOnChangeHandler(key, action, state, newState) {
  const {
    props,
    type
  } = action;
  const handler = `on${capitalizeString(key)}Change`;
  if (props[handler] && newState[key] !== void 0 && newState[key] !== state[key]) {
    props[handler]({
      type,
      ...newState
    });
  }
}
function stateReducer(s, a2) {
  return a2.changes;
}
function getA11ySelectionMessage(selectionParameters) {
  const {
    selectedItem,
    itemToString: itemToStringLocal
  } = selectionParameters;
  return selectedItem ? `${itemToStringLocal(selectedItem)} has been selected.` : "";
}
var updateA11yStatus = debounce((getA11yMessage, document2) => {
  setStatus(getA11yMessage(), document2);
}, 200);
var useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? useLayoutEffect : useEffect;
function useElementIds(_ref) {
  let {
    id = `downshift-${generateId()}`,
    labelId,
    menuId,
    getItemId,
    toggleButtonId,
    inputId
  } = _ref;
  const elementIdsRef = useRef2({
    labelId: labelId || `${id}-label`,
    menuId: menuId || `${id}-menu`,
    getItemId: getItemId || ((index) => `${id}-item-${index}`),
    toggleButtonId: toggleButtonId || `${id}-toggle-button`,
    inputId: inputId || `${id}-input`
  });
  return elementIdsRef.current;
}
function getItemIndex(index, item, items) {
  if (index !== void 0) {
    return index;
  }
  if (items.length === 0) {
    return -1;
  }
  return items.indexOf(item);
}
function itemToString(item) {
  return item ? String(item) : "";
}
function isAcceptedCharacterKey(key) {
  return /^\S{1}$/.test(key);
}
function capitalizeString(string) {
  return `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;
}
function useLatestRef(val) {
  const ref = useRef2(val);
  ref.current = val;
  return ref;
}
function useEnhancedReducer(reducer, initialState, props) {
  const prevStateRef = useRef2();
  const actionRef = useRef2();
  const enhancedReducer = useCallback((state2, action2) => {
    actionRef.current = action2;
    state2 = getState(state2, action2.props);
    const changes = reducer(state2, action2);
    const newState = action2.props.stateReducer(state2, {
      ...action2,
      changes
    });
    return newState;
  }, [reducer]);
  const [state, dispatch] = useReducer(enhancedReducer, initialState);
  const propsRef = useLatestRef(props);
  const dispatchWithProps = useCallback((action2) => dispatch({
    props: propsRef.current,
    ...action2
  }), [propsRef]);
  const action = actionRef.current;
  useEffect(() => {
    if (action && prevStateRef.current && prevStateRef.current !== state) {
      callOnChangeProps(action, getState(prevStateRef.current, action.props), state);
    }
    prevStateRef.current = state;
  }, [state, props, action]);
  return [state, dispatchWithProps];
}
function useControlledReducer$1(reducer, initialState, props) {
  const [state, dispatch] = useEnhancedReducer(reducer, initialState, props);
  return [getState(state, props), dispatch];
}
var defaultProps$3 = {
  itemToString,
  stateReducer,
  getA11ySelectionMessage,
  scrollIntoView,
  circularNavigation: false,
  environment: typeof window === "undefined" ? {} : window
};
function getDefaultValue$1(props, propKey, defaultStateValues2) {
  if (defaultStateValues2 === void 0) {
    defaultStateValues2 = dropdownDefaultStateValues;
  }
  const defaultValue = props[`default${capitalizeString(propKey)}`];
  if (defaultValue !== void 0) {
    return defaultValue;
  }
  return defaultStateValues2[propKey];
}
function getInitialValue$1(props, propKey, defaultStateValues2) {
  if (defaultStateValues2 === void 0) {
    defaultStateValues2 = dropdownDefaultStateValues;
  }
  const value = props[propKey];
  if (value !== void 0) {
    return value;
  }
  const initialValue = props[`initial${capitalizeString(propKey)}`];
  if (initialValue !== void 0) {
    return initialValue;
  }
  return getDefaultValue$1(props, propKey, defaultStateValues2);
}
function getInitialState$2(props) {
  const selectedItem = getInitialValue$1(props, "selectedItem");
  const isOpen = getInitialValue$1(props, "isOpen");
  const highlightedIndex = getInitialValue$1(props, "highlightedIndex");
  const inputValue = getInitialValue$1(props, "inputValue");
  return {
    highlightedIndex: highlightedIndex < 0 && selectedItem && isOpen ? props.items.indexOf(selectedItem) : highlightedIndex,
    isOpen,
    selectedItem,
    inputValue
  };
}
function getHighlightedIndexOnOpen(props, state, offset, getItemNodeFromIndex) {
  const {
    items,
    initialHighlightedIndex,
    defaultHighlightedIndex
  } = props;
  const {
    selectedItem,
    highlightedIndex
  } = state;
  if (items.length === 0) {
    return -1;
  }
  if (initialHighlightedIndex !== void 0 && highlightedIndex === initialHighlightedIndex) {
    return initialHighlightedIndex;
  }
  if (defaultHighlightedIndex !== void 0) {
    return defaultHighlightedIndex;
  }
  if (selectedItem) {
    if (offset === 0) {
      return items.indexOf(selectedItem);
    }
    return getNextWrappingIndex(offset, items.indexOf(selectedItem), items.length, getItemNodeFromIndex, false);
  }
  if (offset === 0) {
    return -1;
  }
  return offset < 0 ? items.length - 1 : 0;
}
function useMouseAndTouchTracker(isOpen, downshiftElementRefs, environment, handleBlur) {
  const mouseAndTouchTrackersRef = useRef2({
    isMouseDown: false,
    isTouchMove: false
  });
  useEffect(() => {
    const onMouseDown = () => {
      mouseAndTouchTrackersRef.current.isMouseDown = true;
    };
    const onMouseUp = (event) => {
      mouseAndTouchTrackersRef.current.isMouseDown = false;
      if (isOpen && !targetWithinDownshift(event.target, downshiftElementRefs.map((ref) => ref.current), environment)) {
        handleBlur();
      }
    };
    const onTouchStart = () => {
      mouseAndTouchTrackersRef.current.isTouchMove = false;
    };
    const onTouchMove = () => {
      mouseAndTouchTrackersRef.current.isTouchMove = true;
    };
    const onTouchEnd = (event) => {
      if (isOpen && !mouseAndTouchTrackersRef.current.isTouchMove && !targetWithinDownshift(event.target, downshiftElementRefs.map((ref) => ref.current), environment, false)) {
        handleBlur();
      }
    };
    environment.addEventListener("mousedown", onMouseDown);
    environment.addEventListener("mouseup", onMouseUp);
    environment.addEventListener("touchstart", onTouchStart);
    environment.addEventListener("touchmove", onTouchMove);
    environment.addEventListener("touchend", onTouchEnd);
    return function cleanup() {
      environment.removeEventListener("mousedown", onMouseDown);
      environment.removeEventListener("mouseup", onMouseUp);
      environment.removeEventListener("touchstart", onTouchStart);
      environment.removeEventListener("touchmove", onTouchMove);
      environment.removeEventListener("touchend", onTouchEnd);
    };
  }, [isOpen, environment]);
  return mouseAndTouchTrackersRef;
}
var useGetterPropsCalledChecker = () => noop2;
if (process.env.NODE_ENV !== "production") {
  useGetterPropsCalledChecker = function() {
    const isInitialMountRef = useRef2(true);
    for (var _len = arguments.length, propKeys = new Array(_len), _key = 0; _key < _len; _key++) {
      propKeys[_key] = arguments[_key];
    }
    const getterPropsCalledRef = useRef2(propKeys.reduce((acc, propKey) => {
      acc[propKey] = {};
      return acc;
    }, {}));
    useEffect(() => {
      Object.keys(getterPropsCalledRef.current).forEach((propKey) => {
        const propCallInfo = getterPropsCalledRef.current[propKey];
        if (isInitialMountRef.current) {
          if (!Object.keys(propCallInfo).length) {
            console.error(`downshift: You forgot to call the ${propKey} getter function on your component / element.`);
            return;
          }
        }
        const {
          suppressRefError,
          refKey,
          elementRef
        } = propCallInfo;
        if ((!elementRef || !elementRef.current) && !suppressRefError) {
          console.error(`downshift: The ref prop "${refKey}" from ${propKey} was not applied correctly on your element.`);
        }
      });
      isInitialMountRef.current = false;
    });
    const setGetterPropCallInfo = useCallback((propKey, suppressRefError, refKey, elementRef) => {
      getterPropsCalledRef.current[propKey] = {
        suppressRefError,
        refKey,
        elementRef
      };
    }, []);
    return setGetterPropCallInfo;
  };
}
function useA11yMessageSetter(getA11yMessage, dependencyArray, _ref2) {
  let {
    isInitialMount,
    highlightedIndex,
    items,
    environment,
    ...rest
  } = _ref2;
  useEffect(() => {
    if (isInitialMount || false) {
      return;
    }
    updateA11yStatus(() => getA11yMessage({
      highlightedIndex,
      highlightedItem: items[highlightedIndex],
      resultCount: items.length,
      ...rest
    }), environment.document);
  }, dependencyArray);
}
function useScrollIntoView(_ref3) {
  let {
    highlightedIndex,
    isOpen,
    itemRefs,
    getItemNodeFromIndex,
    menuElement,
    scrollIntoView: scrollIntoViewProp
  } = _ref3;
  const shouldScrollRef = useRef2(true);
  useIsomorphicLayoutEffect(() => {
    if (highlightedIndex < 0 || !isOpen || !Object.keys(itemRefs.current).length) {
      return;
    }
    if (shouldScrollRef.current === false) {
      shouldScrollRef.current = true;
    } else {
      scrollIntoViewProp(getItemNodeFromIndex(highlightedIndex), menuElement);
    }
  }, [highlightedIndex]);
  return shouldScrollRef;
}
var useControlPropsValidator = noop2;
if (process.env.NODE_ENV !== "production") {
  useControlPropsValidator = (_ref4) => {
    let {
      isInitialMount,
      props,
      state
    } = _ref4;
    const prevPropsRef = useRef2(props);
    useEffect(() => {
      if (isInitialMount) {
        return;
      }
      validateControlledUnchanged(state, prevPropsRef.current, props);
      prevPropsRef.current = props;
    }, [state, props, isInitialMount]);
  };
}
function downshiftCommonReducer(state, action, stateChangeTypes2) {
  const {
    type,
    props
  } = action;
  let changes;
  switch (type) {
    case stateChangeTypes2.ItemMouseMove:
      changes = {
        highlightedIndex: action.disabled ? -1 : action.index
      };
      break;
    case stateChangeTypes2.MenuMouseLeave:
      changes = {
        highlightedIndex: -1
      };
      break;
    case stateChangeTypes2.ToggleButtonClick:
    case stateChangeTypes2.FunctionToggleMenu:
      changes = {
        isOpen: !state.isOpen,
        highlightedIndex: state.isOpen ? -1 : getHighlightedIndexOnOpen(props, state, 0)
      };
      break;
    case stateChangeTypes2.FunctionOpenMenu:
      changes = {
        isOpen: true,
        highlightedIndex: getHighlightedIndexOnOpen(props, state, 0)
      };
      break;
    case stateChangeTypes2.FunctionCloseMenu:
      changes = {
        isOpen: false
      };
      break;
    case stateChangeTypes2.FunctionSetHighlightedIndex:
      changes = {
        highlightedIndex: action.highlightedIndex
      };
      break;
    case stateChangeTypes2.FunctionSetInputValue:
      changes = {
        inputValue: action.inputValue
      };
      break;
    case stateChangeTypes2.FunctionReset:
      changes = {
        highlightedIndex: getDefaultValue$1(props, "highlightedIndex"),
        isOpen: getDefaultValue$1(props, "isOpen"),
        selectedItem: getDefaultValue$1(props, "selectedItem"),
        inputValue: getDefaultValue$1(props, "inputValue")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return {
    ...state,
    ...changes
  };
}
function getItemIndexByCharacterKey(_a) {
  var keysSoFar = _a.keysSoFar, highlightedIndex = _a.highlightedIndex, items = _a.items, itemToString2 = _a.itemToString, getItemNodeFromIndex = _a.getItemNodeFromIndex;
  var lowerCasedKeysSoFar = keysSoFar.toLowerCase();
  for (var index = 0; index < items.length; index++) {
    var offsetIndex = (index + highlightedIndex + 1) % items.length;
    var item = items[offsetIndex];
    if (item !== void 0 && itemToString2(item).toLowerCase().startsWith(lowerCasedKeysSoFar)) {
      var element = getItemNodeFromIndex(offsetIndex);
      if (!(element === null || element === void 0 ? void 0 : element.hasAttribute("disabled"))) {
        return offsetIndex;
      }
    }
  }
  return highlightedIndex;
}
var propTypes$2 = {
  items: import_prop_types.default.array.isRequired,
  itemToString: import_prop_types.default.func,
  getA11yStatusMessage: import_prop_types.default.func,
  getA11ySelectionMessage: import_prop_types.default.func,
  circularNavigation: import_prop_types.default.bool,
  highlightedIndex: import_prop_types.default.number,
  defaultHighlightedIndex: import_prop_types.default.number,
  initialHighlightedIndex: import_prop_types.default.number,
  isOpen: import_prop_types.default.bool,
  defaultIsOpen: import_prop_types.default.bool,
  initialIsOpen: import_prop_types.default.bool,
  selectedItem: import_prop_types.default.any,
  initialSelectedItem: import_prop_types.default.any,
  defaultSelectedItem: import_prop_types.default.any,
  id: import_prop_types.default.string,
  labelId: import_prop_types.default.string,
  menuId: import_prop_types.default.string,
  getItemId: import_prop_types.default.func,
  toggleButtonId: import_prop_types.default.string,
  stateReducer: import_prop_types.default.func,
  onSelectedItemChange: import_prop_types.default.func,
  onHighlightedIndexChange: import_prop_types.default.func,
  onStateChange: import_prop_types.default.func,
  onIsOpenChange: import_prop_types.default.func,
  environment: import_prop_types.default.shape({
    addEventListener: import_prop_types.default.func,
    removeEventListener: import_prop_types.default.func,
    document: import_prop_types.default.shape({
      getElementById: import_prop_types.default.func,
      activeElement: import_prop_types.default.any,
      body: import_prop_types.default.any
    })
  })
};
function getA11yStatusMessage(_a) {
  var isOpen = _a.isOpen, resultCount = _a.resultCount, previousResultCount = _a.previousResultCount;
  if (!isOpen) {
    return "";
  }
  if (!resultCount) {
    return "No results are available.";
  }
  if (resultCount !== previousResultCount) {
    return "".concat(resultCount, " result").concat(resultCount === 1 ? " is" : "s are", " available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.");
  }
  return "";
}
var defaultProps$2 = __assign(__assign({}, defaultProps$3), { getA11yStatusMessage });
var validatePropTypes$2 = noop2;
if (process.env.NODE_ENV !== "production") {
  validatePropTypes$2 = function(options, caller) {
    import_prop_types.default.checkPropTypes(propTypes$2, options, "prop", caller.name);
  };
}
var MenuKeyDownArrowDown = process.env.NODE_ENV !== "production" ? "__menu_keydown_arrow_down__" : 0;
var MenuKeyDownArrowUp = process.env.NODE_ENV !== "production" ? "__menu_keydown_arrow_up__" : 1;
var MenuKeyDownEscape = process.env.NODE_ENV !== "production" ? "__menu_keydown_escape__" : 2;
var MenuKeyDownHome = process.env.NODE_ENV !== "production" ? "__menu_keydown_home__" : 3;
var MenuKeyDownEnd = process.env.NODE_ENV !== "production" ? "__menu_keydown_end__" : 4;
var MenuKeyDownEnter = process.env.NODE_ENV !== "production" ? "__menu_keydown_enter__" : 5;
var MenuKeyDownSpaceButton = process.env.NODE_ENV !== "production" ? "__menu_keydown_space_button__" : 6;
var MenuKeyDownCharacter = process.env.NODE_ENV !== "production" ? "__menu_keydown_character__" : 7;
var MenuBlur = process.env.NODE_ENV !== "production" ? "__menu_blur__" : 8;
var MenuMouseLeave$1 = process.env.NODE_ENV !== "production" ? "__menu_mouse_leave__" : 9;
var ItemMouseMove$1 = process.env.NODE_ENV !== "production" ? "__item_mouse_move__" : 10;
var ItemClick$1 = process.env.NODE_ENV !== "production" ? "__item_click__" : 11;
var ToggleButtonClick$1 = process.env.NODE_ENV !== "production" ? "__togglebutton_click__" : 12;
var ToggleButtonKeyDownArrowDown = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_arrow_down__" : 13;
var ToggleButtonKeyDownArrowUp = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_arrow_up__" : 14;
var ToggleButtonKeyDownCharacter = process.env.NODE_ENV !== "production" ? "__togglebutton_keydown_character__" : 15;
var FunctionToggleMenu$1 = process.env.NODE_ENV !== "production" ? "__function_toggle_menu__" : 16;
var FunctionOpenMenu$1 = process.env.NODE_ENV !== "production" ? "__function_open_menu__" : 17;
var FunctionCloseMenu$1 = process.env.NODE_ENV !== "production" ? "__function_close_menu__" : 18;
var FunctionSetHighlightedIndex$1 = process.env.NODE_ENV !== "production" ? "__function_set_highlighted_index__" : 19;
var FunctionSelectItem$1 = process.env.NODE_ENV !== "production" ? "__function_select_item__" : 20;
var FunctionSetInputValue$1 = process.env.NODE_ENV !== "production" ? "__function_set_input_value__" : 21;
var FunctionReset$2 = process.env.NODE_ENV !== "production" ? "__function_reset__" : 22;
var stateChangeTypes$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MenuKeyDownArrowDown,
  MenuKeyDownArrowUp,
  MenuKeyDownEscape,
  MenuKeyDownHome,
  MenuKeyDownEnd,
  MenuKeyDownEnter,
  MenuKeyDownSpaceButton,
  MenuKeyDownCharacter,
  MenuBlur,
  MenuMouseLeave: MenuMouseLeave$1,
  ItemMouseMove: ItemMouseMove$1,
  ItemClick: ItemClick$1,
  ToggleButtonClick: ToggleButtonClick$1,
  ToggleButtonKeyDownArrowDown,
  ToggleButtonKeyDownArrowUp,
  ToggleButtonKeyDownCharacter,
  FunctionToggleMenu: FunctionToggleMenu$1,
  FunctionOpenMenu: FunctionOpenMenu$1,
  FunctionCloseMenu: FunctionCloseMenu$1,
  FunctionSetHighlightedIndex: FunctionSetHighlightedIndex$1,
  FunctionSelectItem: FunctionSelectItem$1,
  FunctionSetInputValue: FunctionSetInputValue$1,
  FunctionReset: FunctionReset$2
});
function downshiftSelectReducer(state, action) {
  const {
    type,
    props,
    shiftKey
  } = action;
  let changes;
  switch (type) {
    case ItemClick$1:
      changes = {
        isOpen: getDefaultValue$1(props, "isOpen"),
        highlightedIndex: getDefaultValue$1(props, "highlightedIndex"),
        selectedItem: props.items[action.index]
      };
      break;
    case ToggleButtonKeyDownCharacter:
      {
        const lowercasedKey = action.key;
        const inputValue = `${state.inputValue}${lowercasedKey}`;
        const itemIndex = getItemIndexByCharacterKey({
          keysSoFar: inputValue,
          highlightedIndex: state.selectedItem ? props.items.indexOf(state.selectedItem) : -1,
          items: props.items,
          itemToString: props.itemToString,
          getItemNodeFromIndex: action.getItemNodeFromIndex
        });
        changes = {
          inputValue,
          ...itemIndex >= 0 && {
            selectedItem: props.items[itemIndex]
          }
        };
      }
      break;
    case ToggleButtonKeyDownArrowDown:
      changes = {
        highlightedIndex: getHighlightedIndexOnOpen(props, state, 1, action.getItemNodeFromIndex),
        isOpen: true
      };
      break;
    case ToggleButtonKeyDownArrowUp:
      changes = {
        highlightedIndex: getHighlightedIndexOnOpen(props, state, -1, action.getItemNodeFromIndex),
        isOpen: true
      };
      break;
    case MenuKeyDownEnter:
    case MenuKeyDownSpaceButton:
      changes = {
        isOpen: getDefaultValue$1(props, "isOpen"),
        highlightedIndex: getDefaultValue$1(props, "highlightedIndex"),
        ...state.highlightedIndex >= 0 && {
          selectedItem: props.items[state.highlightedIndex]
        }
      };
      break;
    case MenuKeyDownHome:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(1, 0, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;
    case MenuKeyDownEnd:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(-1, props.items.length - 1, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;
    case MenuKeyDownEscape:
      changes = {
        isOpen: false,
        highlightedIndex: -1
      };
      break;
    case MenuBlur:
      changes = {
        isOpen: false,
        highlightedIndex: -1
      };
      break;
    case MenuKeyDownCharacter:
      {
        const lowercasedKey = action.key;
        const inputValue = `${state.inputValue}${lowercasedKey}`;
        const highlightedIndex = getItemIndexByCharacterKey({
          keysSoFar: inputValue,
          highlightedIndex: state.highlightedIndex,
          items: props.items,
          itemToString: props.itemToString,
          getItemNodeFromIndex: action.getItemNodeFromIndex
        });
        changes = {
          inputValue,
          ...highlightedIndex >= 0 && {
            highlightedIndex
          }
        };
      }
      break;
    case MenuKeyDownArrowDown:
      changes = {
        highlightedIndex: getNextWrappingIndex(shiftKey ? 5 : 1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
      };
      break;
    case MenuKeyDownArrowUp:
      changes = {
        highlightedIndex: getNextWrappingIndex(shiftKey ? -5 : -1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
      };
      break;
    case FunctionSelectItem$1:
      changes = {
        selectedItem: action.selectedItem
      };
      break;
    default:
      return downshiftCommonReducer(state, action, stateChangeTypes$2);
  }
  return {
    ...state,
    ...changes
  };
}
useSelect.stateChangeTypes = stateChangeTypes$2;
function useSelect(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }
  validatePropTypes$2(userProps, useSelect);
  const props = {
    ...defaultProps$2,
    ...userProps
  };
  const {
    items,
    scrollIntoView: scrollIntoView2,
    environment,
    initialIsOpen,
    defaultIsOpen,
    itemToString: itemToString2,
    getA11ySelectionMessage: getA11ySelectionMessage2,
    getA11yStatusMessage: getA11yStatusMessage2
  } = props;
  const initialState = getInitialState$2(props);
  const [state, dispatch] = useControlledReducer$1(downshiftSelectReducer, initialState, props);
  const {
    isOpen,
    highlightedIndex,
    selectedItem,
    inputValue
  } = state;
  const toggleButtonRef = useRef2(null);
  const menuRef = useRef2(null);
  const itemRefs = useRef2({});
  const shouldBlurRef = useRef2(true);
  const clearTimeoutRef = useRef2(null);
  const elementIds = useElementIds(props);
  const previousResultCountRef = useRef2();
  const isInitialMountRef = useRef2(true);
  const latest = useLatestRef({
    state,
    props
  });
  const getItemNodeFromIndex = useCallback((index) => itemRefs.current[elementIds.getItemId(index)], [elementIds]);
  useA11yMessageSetter(getA11yStatusMessage2, [isOpen, highlightedIndex, inputValue, items], {
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items,
    environment,
    itemToString: itemToString2,
    ...state
  });
  useA11yMessageSetter(getA11ySelectionMessage2, [selectedItem], {
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items,
    environment,
    itemToString: itemToString2,
    ...state
  });
  const shouldScrollRef = useScrollIntoView({
    menuElement: menuRef.current,
    highlightedIndex,
    isOpen,
    itemRefs,
    scrollIntoView: scrollIntoView2,
    getItemNodeFromIndex
  });
  useEffect(() => {
    clearTimeoutRef.current = debounce((outerDispatch) => {
      outerDispatch({
        type: FunctionSetInputValue$1,
        inputValue: ""
      });
    }, 500);
    return () => {
      clearTimeoutRef.current.cancel();
    };
  }, []);
  useEffect(() => {
    if (!inputValue) {
      return;
    }
    clearTimeoutRef.current(dispatch);
  }, [dispatch, inputValue]);
  useControlPropsValidator({
    isInitialMount: isInitialMountRef.current,
    props,
    state
  });
  useEffect(() => {
    if (isInitialMountRef.current) {
      if ((initialIsOpen || defaultIsOpen || isOpen) && menuRef.current) {
        menuRef.current.focus();
      }
      return;
    }
    if (isOpen) {
      if (menuRef.current) {
        menuRef.current.focus();
      }
      return;
    }
    if (environment.document.activeElement === menuRef.current) {
      if (toggleButtonRef.current) {
        shouldBlurRef.current = false;
        toggleButtonRef.current.focus();
      }
    }
  }, [isOpen]);
  useEffect(() => {
    if (isInitialMountRef.current) {
      return;
    }
    previousResultCountRef.current = items.length;
  });
  const mouseAndTouchTrackersRef = useMouseAndTouchTracker(isOpen, [menuRef, toggleButtonRef], environment, () => {
    dispatch({
      type: MenuBlur
    });
  });
  const setGetterPropCallInfo = useGetterPropsCalledChecker("getMenuProps", "getToggleButtonProps");
  useEffect(() => {
    isInitialMountRef.current = false;
  }, []);
  useEffect(() => {
    if (!isOpen) {
      itemRefs.current = {};
    }
  }, [isOpen]);
  const toggleButtonKeyDownHandlers = useMemo(() => ({
    ArrowDown(event) {
      event.preventDefault();
      dispatch({
        type: ToggleButtonKeyDownArrowDown,
        getItemNodeFromIndex,
        shiftKey: event.shiftKey
      });
    },
    ArrowUp(event) {
      event.preventDefault();
      dispatch({
        type: ToggleButtonKeyDownArrowUp,
        getItemNodeFromIndex,
        shiftKey: event.shiftKey
      });
    }
  }), [dispatch, getItemNodeFromIndex]);
  const menuKeyDownHandlers = useMemo(() => ({
    ArrowDown(event) {
      event.preventDefault();
      dispatch({
        type: MenuKeyDownArrowDown,
        getItemNodeFromIndex,
        shiftKey: event.shiftKey
      });
    },
    ArrowUp(event) {
      event.preventDefault();
      dispatch({
        type: MenuKeyDownArrowUp,
        getItemNodeFromIndex,
        shiftKey: event.shiftKey
      });
    },
    Home(event) {
      event.preventDefault();
      dispatch({
        type: MenuKeyDownHome,
        getItemNodeFromIndex
      });
    },
    End(event) {
      event.preventDefault();
      dispatch({
        type: MenuKeyDownEnd,
        getItemNodeFromIndex
      });
    },
    Escape() {
      dispatch({
        type: MenuKeyDownEscape
      });
    },
    Enter(event) {
      event.preventDefault();
      dispatch({
        type: MenuKeyDownEnter
      });
    },
    " "(event) {
      event.preventDefault();
      dispatch({
        type: MenuKeyDownSpaceButton
      });
    }
  }), [dispatch, getItemNodeFromIndex]);
  const toggleMenu = useCallback(() => {
    dispatch({
      type: FunctionToggleMenu$1
    });
  }, [dispatch]);
  const closeMenu = useCallback(() => {
    dispatch({
      type: FunctionCloseMenu$1
    });
  }, [dispatch]);
  const openMenu = useCallback(() => {
    dispatch({
      type: FunctionOpenMenu$1
    });
  }, [dispatch]);
  const setHighlightedIndex = useCallback((newHighlightedIndex) => {
    dispatch({
      type: FunctionSetHighlightedIndex$1,
      highlightedIndex: newHighlightedIndex
    });
  }, [dispatch]);
  const selectItem = useCallback((newSelectedItem) => {
    dispatch({
      type: FunctionSelectItem$1,
      selectedItem: newSelectedItem
    });
  }, [dispatch]);
  const reset = useCallback(() => {
    dispatch({
      type: FunctionReset$2
    });
  }, [dispatch]);
  const setInputValue = useCallback((newInputValue) => {
    dispatch({
      type: FunctionSetInputValue$1,
      inputValue: newInputValue
    });
  }, [dispatch]);
  const getLabelProps = useCallback((labelProps) => ({
    id: elementIds.labelId,
    htmlFor: elementIds.toggleButtonId,
    ...labelProps
  }), [elementIds]);
  const getMenuProps = useCallback(function(_temp, _temp2) {
    let {
      onMouseLeave,
      refKey = "ref",
      onKeyDown,
      onBlur,
      ref,
      ...rest
    } = _temp === void 0 ? {} : _temp;
    let {
      suppressRefError = false
    } = _temp2 === void 0 ? {} : _temp2;
    const latestState = latest.current.state;
    const menuHandleKeyDown = (event) => {
      const key = normalizeArrowKey(event);
      if (key && menuKeyDownHandlers[key]) {
        menuKeyDownHandlers[key](event);
      } else if (isAcceptedCharacterKey(key)) {
        dispatch({
          type: MenuKeyDownCharacter,
          key,
          getItemNodeFromIndex
        });
      }
    };
    const menuHandleBlur = () => {
      if (shouldBlurRef.current === false) {
        shouldBlurRef.current = true;
        return;
      }
      const shouldBlur = !mouseAndTouchTrackersRef.current.isMouseDown;
      if (shouldBlur) {
        dispatch({
          type: MenuBlur
        });
      }
    };
    const menuHandleMouseLeave = () => {
      dispatch({
        type: MenuMouseLeave$1
      });
    };
    setGetterPropCallInfo("getMenuProps", suppressRefError, refKey, menuRef);
    return {
      [refKey]: handleRefs(ref, (menuNode) => {
        menuRef.current = menuNode;
      }),
      id: elementIds.menuId,
      role: "listbox",
      "aria-labelledby": elementIds.labelId,
      tabIndex: -1,
      ...latestState.isOpen && latestState.highlightedIndex > -1 && {
        "aria-activedescendant": elementIds.getItemId(latestState.highlightedIndex)
      },
      onMouseLeave: callAllEventHandlers(onMouseLeave, menuHandleMouseLeave),
      onKeyDown: callAllEventHandlers(onKeyDown, menuHandleKeyDown),
      onBlur: callAllEventHandlers(onBlur, menuHandleBlur),
      ...rest
    };
  }, [dispatch, latest, menuKeyDownHandlers, mouseAndTouchTrackersRef, setGetterPropCallInfo, elementIds, getItemNodeFromIndex]);
  const getToggleButtonProps = useCallback(function(_temp3, _temp4) {
    let {
      onClick,
      onKeyDown,
      refKey = "ref",
      ref,
      ...rest
    } = _temp3 === void 0 ? {} : _temp3;
    let {
      suppressRefError = false
    } = _temp4 === void 0 ? {} : _temp4;
    const toggleButtonHandleClick = () => {
      dispatch({
        type: ToggleButtonClick$1
      });
    };
    const toggleButtonHandleKeyDown = (event) => {
      const key = normalizeArrowKey(event);
      if (key && toggleButtonKeyDownHandlers[key]) {
        toggleButtonKeyDownHandlers[key](event);
      } else if (isAcceptedCharacterKey(key)) {
        dispatch({
          type: ToggleButtonKeyDownCharacter,
          key,
          getItemNodeFromIndex
        });
      }
    };
    const toggleProps = {
      [refKey]: handleRefs(ref, (toggleButtonNode) => {
        toggleButtonRef.current = toggleButtonNode;
      }),
      id: elementIds.toggleButtonId,
      "aria-haspopup": "listbox",
      "aria-expanded": latest.current.state.isOpen,
      "aria-labelledby": `${elementIds.labelId} ${elementIds.toggleButtonId}`,
      ...rest
    };
    if (!rest.disabled) {
      toggleProps.onClick = callAllEventHandlers(onClick, toggleButtonHandleClick);
      toggleProps.onKeyDown = callAllEventHandlers(onKeyDown, toggleButtonHandleKeyDown);
    }
    setGetterPropCallInfo("getToggleButtonProps", suppressRefError, refKey, toggleButtonRef);
    return toggleProps;
  }, [dispatch, latest, toggleButtonKeyDownHandlers, setGetterPropCallInfo, elementIds, getItemNodeFromIndex]);
  const getItemProps = useCallback(function(_temp5) {
    let {
      item,
      index,
      onMouseMove,
      onClick,
      refKey = "ref",
      ref,
      disabled,
      ...rest
    } = _temp5 === void 0 ? {} : _temp5;
    const {
      state: latestState,
      props: latestProps
    } = latest.current;
    const itemHandleMouseMove = () => {
      if (index === latestState.highlightedIndex) {
        return;
      }
      shouldScrollRef.current = false;
      dispatch({
        type: ItemMouseMove$1,
        index,
        disabled
      });
    };
    const itemHandleClick = () => {
      dispatch({
        type: ItemClick$1,
        index
      });
    };
    const itemIndex = getItemIndex(index, item, latestProps.items);
    if (itemIndex < 0) {
      throw new Error("Pass either item or item index in getItemProps!");
    }
    const itemProps = {
      disabled,
      role: "option",
      "aria-selected": `${itemIndex === latestState.highlightedIndex}`,
      id: elementIds.getItemId(itemIndex),
      [refKey]: handleRefs(ref, (itemNode) => {
        if (itemNode) {
          itemRefs.current[elementIds.getItemId(itemIndex)] = itemNode;
        }
      }),
      ...rest
    };
    if (!disabled) {
      itemProps.onClick = callAllEventHandlers(onClick, itemHandleClick);
    }
    itemProps.onMouseMove = callAllEventHandlers(onMouseMove, itemHandleMouseMove);
    return itemProps;
  }, [dispatch, latest, shouldScrollRef, elementIds]);
  return {
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    toggleMenu,
    openMenu,
    closeMenu,
    setHighlightedIndex,
    selectItem,
    reset,
    setInputValue,
    highlightedIndex,
    isOpen,
    selectedItem,
    inputValue
  };
}
var InputKeyDownArrowDown = process.env.NODE_ENV !== "production" ? "__input_keydown_arrow_down__" : 0;
var InputKeyDownArrowUp = process.env.NODE_ENV !== "production" ? "__input_keydown_arrow_up__" : 1;
var InputKeyDownEscape = process.env.NODE_ENV !== "production" ? "__input_keydown_escape__" : 2;
var InputKeyDownHome = process.env.NODE_ENV !== "production" ? "__input_keydown_home__" : 3;
var InputKeyDownEnd = process.env.NODE_ENV !== "production" ? "__input_keydown_end__" : 4;
var InputKeyDownEnter = process.env.NODE_ENV !== "production" ? "__input_keydown_enter__" : 5;
var InputChange = process.env.NODE_ENV !== "production" ? "__input_change__" : 6;
var InputBlur = process.env.NODE_ENV !== "production" ? "__input_blur__" : 7;
var MenuMouseLeave = process.env.NODE_ENV !== "production" ? "__menu_mouse_leave__" : 8;
var ItemMouseMove = process.env.NODE_ENV !== "production" ? "__item_mouse_move__" : 9;
var ItemClick = process.env.NODE_ENV !== "production" ? "__item_click__" : 10;
var ToggleButtonClick = process.env.NODE_ENV !== "production" ? "__togglebutton_click__" : 11;
var FunctionToggleMenu = process.env.NODE_ENV !== "production" ? "__function_toggle_menu__" : 12;
var FunctionOpenMenu = process.env.NODE_ENV !== "production" ? "__function_open_menu__" : 13;
var FunctionCloseMenu = process.env.NODE_ENV !== "production" ? "__function_close_menu__" : 14;
var FunctionSetHighlightedIndex = process.env.NODE_ENV !== "production" ? "__function_set_highlighted_index__" : 15;
var FunctionSelectItem = process.env.NODE_ENV !== "production" ? "__function_select_item__" : 16;
var FunctionSetInputValue = process.env.NODE_ENV !== "production" ? "__function_set_input_value__" : 17;
var FunctionReset$1 = process.env.NODE_ENV !== "production" ? "__function_reset__" : 18;
var ControlledPropUpdatedSelectedItem = process.env.NODE_ENV !== "production" ? "__controlled_prop_updated_selected_item__" : 19;
var stateChangeTypes$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  InputKeyDownArrowDown,
  InputKeyDownArrowUp,
  InputKeyDownEscape,
  InputKeyDownHome,
  InputKeyDownEnd,
  InputKeyDownEnter,
  InputChange,
  InputBlur,
  MenuMouseLeave,
  ItemMouseMove,
  ItemClick,
  ToggleButtonClick,
  FunctionToggleMenu,
  FunctionOpenMenu,
  FunctionCloseMenu,
  FunctionSetHighlightedIndex,
  FunctionSelectItem,
  FunctionSetInputValue,
  FunctionReset: FunctionReset$1,
  ControlledPropUpdatedSelectedItem
});
function getInitialState$1(props) {
  const initialState = getInitialState$2(props);
  const {
    selectedItem
  } = initialState;
  let {
    inputValue
  } = initialState;
  if (inputValue === "" && selectedItem && props.defaultInputValue === void 0 && props.initialInputValue === void 0 && props.inputValue === void 0) {
    inputValue = props.itemToString(selectedItem);
  }
  return {
    ...initialState,
    inputValue
  };
}
var propTypes$1 = {
  items: import_prop_types.default.array.isRequired,
  itemToString: import_prop_types.default.func,
  getA11yStatusMessage: import_prop_types.default.func,
  getA11ySelectionMessage: import_prop_types.default.func,
  circularNavigation: import_prop_types.default.bool,
  highlightedIndex: import_prop_types.default.number,
  defaultHighlightedIndex: import_prop_types.default.number,
  initialHighlightedIndex: import_prop_types.default.number,
  isOpen: import_prop_types.default.bool,
  defaultIsOpen: import_prop_types.default.bool,
  initialIsOpen: import_prop_types.default.bool,
  selectedItem: import_prop_types.default.any,
  initialSelectedItem: import_prop_types.default.any,
  defaultSelectedItem: import_prop_types.default.any,
  inputValue: import_prop_types.default.string,
  defaultInputValue: import_prop_types.default.string,
  initialInputValue: import_prop_types.default.string,
  id: import_prop_types.default.string,
  labelId: import_prop_types.default.string,
  menuId: import_prop_types.default.string,
  getItemId: import_prop_types.default.func,
  inputId: import_prop_types.default.string,
  toggleButtonId: import_prop_types.default.string,
  stateReducer: import_prop_types.default.func,
  onSelectedItemChange: import_prop_types.default.func,
  onHighlightedIndexChange: import_prop_types.default.func,
  onStateChange: import_prop_types.default.func,
  onIsOpenChange: import_prop_types.default.func,
  onInputValueChange: import_prop_types.default.func,
  environment: import_prop_types.default.shape({
    addEventListener: import_prop_types.default.func,
    removeEventListener: import_prop_types.default.func,
    document: import_prop_types.default.shape({
      getElementById: import_prop_types.default.func,
      activeElement: import_prop_types.default.any,
      body: import_prop_types.default.any
    })
  })
};
function useControlledReducer(reducer, initialState, props) {
  const previousSelectedItemRef = useRef2();
  const [state, dispatch] = useEnhancedReducer(reducer, initialState, props);
  useEffect(() => {
    if (isControlledProp(props, "selectedItem")) {
      if (previousSelectedItemRef.current !== props.selectedItem) {
        dispatch({
          type: ControlledPropUpdatedSelectedItem,
          inputValue: props.itemToString(props.selectedItem)
        });
      }
      previousSelectedItemRef.current = state.selectedItem === previousSelectedItemRef.current ? props.selectedItem : state.selectedItem;
    }
  });
  return [getState(state, props), dispatch];
}
var validatePropTypes$1 = noop2;
if (process.env.NODE_ENV !== "production") {
  validatePropTypes$1 = (options, caller) => {
    import_prop_types.default.checkPropTypes(propTypes$1, options, "prop", caller.name);
  };
}
var defaultProps$1 = {
  ...defaultProps$3,
  getA11yStatusMessage: getA11yStatusMessage$1,
  circularNavigation: true
};
function downshiftUseComboboxReducer(state, action) {
  const {
    type,
    props,
    shiftKey
  } = action;
  let changes;
  switch (type) {
    case ItemClick:
      changes = {
        isOpen: getDefaultValue$1(props, "isOpen"),
        highlightedIndex: getDefaultValue$1(props, "highlightedIndex"),
        selectedItem: props.items[action.index],
        inputValue: props.itemToString(props.items[action.index])
      };
      break;
    case InputKeyDownArrowDown:
      if (state.isOpen) {
        changes = {
          highlightedIndex: getNextWrappingIndex(shiftKey ? 5 : 1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
        };
      } else {
        changes = {
          highlightedIndex: getHighlightedIndexOnOpen(props, state, 1, action.getItemNodeFromIndex),
          isOpen: props.items.length >= 0
        };
      }
      break;
    case InputKeyDownArrowUp:
      if (state.isOpen) {
        changes = {
          highlightedIndex: getNextWrappingIndex(shiftKey ? -5 : -1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
        };
      } else {
        changes = {
          highlightedIndex: getHighlightedIndexOnOpen(props, state, -1, action.getItemNodeFromIndex),
          isOpen: props.items.length >= 0
        };
      }
      break;
    case InputKeyDownEnter:
      changes = {
        ...state.isOpen && state.highlightedIndex >= 0 && {
          selectedItem: props.items[state.highlightedIndex],
          isOpen: getDefaultValue$1(props, "isOpen"),
          highlightedIndex: getDefaultValue$1(props, "highlightedIndex"),
          inputValue: props.itemToString(props.items[state.highlightedIndex])
        }
      };
      break;
    case InputKeyDownEscape:
      changes = {
        isOpen: false,
        highlightedIndex: -1,
        ...!state.isOpen && {
          selectedItem: null,
          inputValue: ""
        }
      };
      break;
    case InputKeyDownHome:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(1, 0, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;
    case InputKeyDownEnd:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(-1, props.items.length - 1, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;
    case InputBlur:
      changes = {
        isOpen: false,
        highlightedIndex: -1,
        ...state.highlightedIndex >= 0 && action.selectItem && {
          selectedItem: props.items[state.highlightedIndex],
          inputValue: props.itemToString(props.items[state.highlightedIndex])
        }
      };
      break;
    case InputChange:
      changes = {
        isOpen: true,
        highlightedIndex: getDefaultValue$1(props, "highlightedIndex"),
        inputValue: action.inputValue
      };
      break;
    case FunctionSelectItem:
      changes = {
        selectedItem: action.selectedItem,
        inputValue: props.itemToString(action.selectedItem)
      };
      break;
    case ControlledPropUpdatedSelectedItem:
      changes = {
        inputValue: action.inputValue
      };
      break;
    default:
      return downshiftCommonReducer(state, action, stateChangeTypes$1);
  }
  return {
    ...state,
    ...changes
  };
}
useCombobox.stateChangeTypes = stateChangeTypes$1;
function useCombobox(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }
  validatePropTypes$1(userProps, useCombobox);
  const props = {
    ...defaultProps$1,
    ...userProps
  };
  const {
    initialIsOpen,
    defaultIsOpen,
    items,
    scrollIntoView: scrollIntoView2,
    environment,
    getA11yStatusMessage: getA11yStatusMessage2,
    getA11ySelectionMessage: getA11ySelectionMessage2,
    itemToString: itemToString2
  } = props;
  const initialState = getInitialState$1(props);
  const [state, dispatch] = useControlledReducer(downshiftUseComboboxReducer, initialState, props);
  const {
    isOpen,
    highlightedIndex,
    selectedItem,
    inputValue
  } = state;
  const menuRef = useRef2(null);
  const itemRefs = useRef2({});
  const inputRef = useRef2(null);
  const toggleButtonRef = useRef2(null);
  const comboboxRef = useRef2(null);
  const isInitialMountRef = useRef2(true);
  const elementIds = useElementIds(props);
  const previousResultCountRef = useRef2();
  const latest = useLatestRef({
    state,
    props
  });
  const getItemNodeFromIndex = useCallback((index) => itemRefs.current[elementIds.getItemId(index)], [elementIds]);
  useA11yMessageSetter(getA11yStatusMessage2, [isOpen, highlightedIndex, inputValue, items], {
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items,
    environment,
    itemToString: itemToString2,
    ...state
  });
  useA11yMessageSetter(getA11ySelectionMessage2, [selectedItem], {
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items,
    environment,
    itemToString: itemToString2,
    ...state
  });
  const shouldScrollRef = useScrollIntoView({
    menuElement: menuRef.current,
    highlightedIndex,
    isOpen,
    itemRefs,
    scrollIntoView: scrollIntoView2,
    getItemNodeFromIndex
  });
  useControlPropsValidator({
    isInitialMount: isInitialMountRef.current,
    props,
    state
  });
  useEffect(() => {
    const focusOnOpen = initialIsOpen || defaultIsOpen || isOpen;
    if (focusOnOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  useEffect(() => {
    if (isInitialMountRef.current) {
      return;
    }
    previousResultCountRef.current = items.length;
  });
  const mouseAndTouchTrackersRef = useMouseAndTouchTracker(isOpen, [comboboxRef, menuRef, toggleButtonRef], environment, () => {
    dispatch({
      type: InputBlur,
      selectItem: false
    });
  });
  const setGetterPropCallInfo = useGetterPropsCalledChecker("getInputProps", "getComboboxProps", "getMenuProps");
  useEffect(() => {
    isInitialMountRef.current = false;
  }, []);
  useEffect(() => {
    if (!isOpen) {
      itemRefs.current = {};
    }
  }, [isOpen]);
  const inputKeyDownHandlers = useMemo(() => ({
    ArrowDown(event) {
      event.preventDefault();
      dispatch({
        type: InputKeyDownArrowDown,
        shiftKey: event.shiftKey,
        getItemNodeFromIndex
      });
    },
    ArrowUp(event) {
      event.preventDefault();
      dispatch({
        type: InputKeyDownArrowUp,
        shiftKey: event.shiftKey,
        getItemNodeFromIndex
      });
    },
    Home(event) {
      if (!latest.current.state.isOpen) {
        return;
      }
      event.preventDefault();
      dispatch({
        type: InputKeyDownHome,
        getItemNodeFromIndex
      });
    },
    End(event) {
      if (!latest.current.state.isOpen) {
        return;
      }
      event.preventDefault();
      dispatch({
        type: InputKeyDownEnd,
        getItemNodeFromIndex
      });
    },
    Escape(event) {
      const latestState = latest.current.state;
      if (latestState.isOpen || latestState.inputValue || latestState.selectedItem || latestState.highlightedIndex > -1) {
        event.preventDefault();
        dispatch({
          type: InputKeyDownEscape
        });
      }
    },
    Enter(event) {
      const latestState = latest.current.state;
      if (!latestState.isOpen || latestState.highlightedIndex < 0 || event.which === 229) {
        return;
      }
      event.preventDefault();
      dispatch({
        type: InputKeyDownEnter,
        getItemNodeFromIndex
      });
    }
  }), [dispatch, latest, getItemNodeFromIndex]);
  const getLabelProps = useCallback((labelProps) => ({
    id: elementIds.labelId,
    htmlFor: elementIds.inputId,
    ...labelProps
  }), [elementIds]);
  const getMenuProps = useCallback(function(_temp, _temp2) {
    let {
      onMouseLeave,
      refKey = "ref",
      ref,
      ...rest
    } = _temp === void 0 ? {} : _temp;
    let {
      suppressRefError = false
    } = _temp2 === void 0 ? {} : _temp2;
    setGetterPropCallInfo("getMenuProps", suppressRefError, refKey, menuRef);
    return {
      [refKey]: handleRefs(ref, (menuNode) => {
        menuRef.current = menuNode;
      }),
      id: elementIds.menuId,
      role: "listbox",
      "aria-labelledby": elementIds.labelId,
      onMouseLeave: callAllEventHandlers(onMouseLeave, () => {
        dispatch({
          type: MenuMouseLeave
        });
      }),
      ...rest
    };
  }, [dispatch, setGetterPropCallInfo, elementIds]);
  const getItemProps = useCallback(function(_temp3) {
    let {
      item,
      index,
      refKey = "ref",
      ref,
      onMouseMove,
      onMouseDown,
      onClick,
      onPress,
      disabled,
      ...rest
    } = _temp3 === void 0 ? {} : _temp3;
    const {
      props: latestProps,
      state: latestState
    } = latest.current;
    const itemIndex = getItemIndex(index, item, latestProps.items);
    if (itemIndex < 0) {
      throw new Error("Pass either item or item index in getItemProps!");
    }
    const onSelectKey = "onClick";
    const customClickHandler = onClick;
    const itemHandleMouseMove = () => {
      if (index === latestState.highlightedIndex) {
        return;
      }
      shouldScrollRef.current = false;
      dispatch({
        type: ItemMouseMove,
        index,
        disabled
      });
    };
    const itemHandleClick = () => {
      dispatch({
        type: ItemClick,
        index
      });
    };
    const itemHandleMouseDown = (e2) => e2.preventDefault();
    return {
      [refKey]: handleRefs(ref, (itemNode) => {
        if (itemNode) {
          itemRefs.current[elementIds.getItemId(itemIndex)] = itemNode;
        }
      }),
      disabled,
      role: "option",
      "aria-selected": `${itemIndex === latestState.highlightedIndex}`,
      id: elementIds.getItemId(itemIndex),
      ...!disabled && {
        [onSelectKey]: callAllEventHandlers(customClickHandler, itemHandleClick)
      },
      onMouseMove: callAllEventHandlers(onMouseMove, itemHandleMouseMove),
      onMouseDown: callAllEventHandlers(onMouseDown, itemHandleMouseDown),
      ...rest
    };
  }, [dispatch, latest, shouldScrollRef, elementIds]);
  const getToggleButtonProps = useCallback(function(_temp4) {
    let {
      onClick,
      onPress,
      refKey = "ref",
      ref,
      ...rest
    } = _temp4 === void 0 ? {} : _temp4;
    const toggleButtonHandleClick = () => {
      dispatch({
        type: ToggleButtonClick
      });
      if (!latest.current.state.isOpen && inputRef.current) {
        inputRef.current.focus();
      }
    };
    return {
      [refKey]: handleRefs(ref, (toggleButtonNode) => {
        toggleButtonRef.current = toggleButtonNode;
      }),
      id: elementIds.toggleButtonId,
      tabIndex: -1,
      ...!rest.disabled && {
        ...{
          onClick: callAllEventHandlers(onClick, toggleButtonHandleClick)
        }
      },
      ...rest
    };
  }, [dispatch, latest, elementIds]);
  const getInputProps = useCallback(function(_temp5, _temp6) {
    let {
      onKeyDown,
      onChange,
      onInput,
      onBlur,
      onChangeText,
      refKey = "ref",
      ref,
      ...rest
    } = _temp5 === void 0 ? {} : _temp5;
    let {
      suppressRefError = false
    } = _temp6 === void 0 ? {} : _temp6;
    setGetterPropCallInfo("getInputProps", suppressRefError, refKey, inputRef);
    const latestState = latest.current.state;
    const inputHandleKeyDown = (event) => {
      const key = normalizeArrowKey(event);
      if (key && inputKeyDownHandlers[key]) {
        inputKeyDownHandlers[key](event);
      }
    };
    const inputHandleChange = (event) => {
      dispatch({
        type: InputChange,
        inputValue: event.target.value
      });
    };
    const inputHandleBlur = () => {
      if (latestState.isOpen && !mouseAndTouchTrackersRef.current.isMouseDown) {
        dispatch({
          type: InputBlur,
          selectItem: true
        });
      }
    };
    const onChangeKey = "onChange";
    let eventHandlers = {};
    if (!rest.disabled) {
      eventHandlers = {
        [onChangeKey]: callAllEventHandlers(onChange, onInput, inputHandleChange),
        onKeyDown: callAllEventHandlers(onKeyDown, inputHandleKeyDown),
        onBlur: callAllEventHandlers(onBlur, inputHandleBlur)
      };
    }
    return {
      [refKey]: handleRefs(ref, (inputNode) => {
        inputRef.current = inputNode;
      }),
      id: elementIds.inputId,
      "aria-autocomplete": "list",
      "aria-controls": elementIds.menuId,
      ...latestState.isOpen && latestState.highlightedIndex > -1 && {
        "aria-activedescendant": elementIds.getItemId(latestState.highlightedIndex)
      },
      "aria-labelledby": elementIds.labelId,
      autoComplete: "off",
      value: latestState.inputValue,
      ...eventHandlers,
      ...rest
    };
  }, [dispatch, inputKeyDownHandlers, latest, mouseAndTouchTrackersRef, setGetterPropCallInfo, elementIds]);
  const getComboboxProps = useCallback(function(_temp7, _temp8) {
    let {
      refKey = "ref",
      ref,
      ...rest
    } = _temp7 === void 0 ? {} : _temp7;
    let {
      suppressRefError = false
    } = _temp8 === void 0 ? {} : _temp8;
    setGetterPropCallInfo("getComboboxProps", suppressRefError, refKey, comboboxRef);
    return {
      [refKey]: handleRefs(ref, (comboboxNode) => {
        comboboxRef.current = comboboxNode;
      }),
      role: "combobox",
      "aria-haspopup": "listbox",
      "aria-owns": elementIds.menuId,
      "aria-expanded": latest.current.state.isOpen,
      ...rest
    };
  }, [latest, setGetterPropCallInfo, elementIds]);
  const toggleMenu = useCallback(() => {
    dispatch({
      type: FunctionToggleMenu
    });
  }, [dispatch]);
  const closeMenu = useCallback(() => {
    dispatch({
      type: FunctionCloseMenu
    });
  }, [dispatch]);
  const openMenu = useCallback(() => {
    dispatch({
      type: FunctionOpenMenu
    });
  }, [dispatch]);
  const setHighlightedIndex = useCallback((newHighlightedIndex) => {
    dispatch({
      type: FunctionSetHighlightedIndex,
      highlightedIndex: newHighlightedIndex
    });
  }, [dispatch]);
  const selectItem = useCallback((newSelectedItem) => {
    dispatch({
      type: FunctionSelectItem,
      selectedItem: newSelectedItem
    });
  }, [dispatch]);
  const setInputValue = useCallback((newInputValue) => {
    dispatch({
      type: FunctionSetInputValue,
      inputValue: newInputValue
    });
  }, [dispatch]);
  const reset = useCallback(() => {
    dispatch({
      type: FunctionReset$1
    });
  }, [dispatch]);
  return {
    getItemProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getToggleButtonProps,
    toggleMenu,
    openMenu,
    closeMenu,
    setHighlightedIndex,
    setInputValue,
    selectItem,
    reset,
    highlightedIndex,
    isOpen,
    selectedItem,
    inputValue
  };
}
var defaultStateValues = {
  activeIndex: -1,
  selectedItems: []
};
function getInitialValue(props, propKey) {
  return getInitialValue$1(props, propKey, defaultStateValues);
}
function getDefaultValue(props, propKey) {
  return getDefaultValue$1(props, propKey, defaultStateValues);
}
function getInitialState2(props) {
  const activeIndex = getInitialValue(props, "activeIndex");
  const selectedItems = getInitialValue(props, "selectedItems");
  return {
    activeIndex,
    selectedItems
  };
}
function isKeyDownOperationPermitted(event) {
  if (event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
    return false;
  }
  const element = event.target;
  if (element instanceof HTMLInputElement && element.value !== "" && (element.selectionStart !== 0 || element.selectionEnd !== 0)) {
    return false;
  }
  return true;
}
function getA11yRemovalMessage(selectionParameters) {
  const {
    removedSelectedItem,
    itemToString: itemToStringLocal
  } = selectionParameters;
  return `${itemToStringLocal(removedSelectedItem)} has been removed.`;
}
var propTypes = {
  selectedItems: import_prop_types.default.array,
  initialSelectedItems: import_prop_types.default.array,
  defaultSelectedItems: import_prop_types.default.array,
  itemToString: import_prop_types.default.func,
  getA11yRemovalMessage: import_prop_types.default.func,
  stateReducer: import_prop_types.default.func,
  activeIndex: import_prop_types.default.number,
  initialActiveIndex: import_prop_types.default.number,
  defaultActiveIndex: import_prop_types.default.number,
  onActiveIndexChange: import_prop_types.default.func,
  onSelectedItemsChange: import_prop_types.default.func,
  keyNavigationNext: import_prop_types.default.string,
  keyNavigationPrevious: import_prop_types.default.string,
  environment: import_prop_types.default.shape({
    addEventListener: import_prop_types.default.func,
    removeEventListener: import_prop_types.default.func,
    document: import_prop_types.default.shape({
      getElementById: import_prop_types.default.func,
      activeElement: import_prop_types.default.any,
      body: import_prop_types.default.any
    })
  })
};
var defaultProps = {
  itemToString: defaultProps$3.itemToString,
  stateReducer: defaultProps$3.stateReducer,
  environment: defaultProps$3.environment,
  getA11yRemovalMessage,
  keyNavigationNext: "ArrowRight",
  keyNavigationPrevious: "ArrowLeft"
};
var validatePropTypes = noop2;
if (process.env.NODE_ENV !== "production") {
  validatePropTypes = (options, caller) => {
    import_prop_types.default.checkPropTypes(propTypes, options, "prop", caller.name);
  };
}
var SelectedItemClick = process.env.NODE_ENV !== "production" ? "__selected_item_click__" : 0;
var SelectedItemKeyDownDelete = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_delete__" : 1;
var SelectedItemKeyDownBackspace = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_backspace__" : 2;
var SelectedItemKeyDownNavigationNext = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_navigation_next__" : 3;
var SelectedItemKeyDownNavigationPrevious = process.env.NODE_ENV !== "production" ? "__selected_item_keydown_navigation_previous__" : 4;
var DropdownKeyDownNavigationPrevious = process.env.NODE_ENV !== "production" ? "__dropdown_keydown_navigation_previous__" : 5;
var DropdownKeyDownBackspace = process.env.NODE_ENV !== "production" ? "__dropdown_keydown_backspace__" : 6;
var DropdownClick = process.env.NODE_ENV !== "production" ? "__dropdown_click__" : 7;
var FunctionAddSelectedItem = process.env.NODE_ENV !== "production" ? "__function_add_selected_item__" : 8;
var FunctionRemoveSelectedItem = process.env.NODE_ENV !== "production" ? "__function_remove_selected_item__" : 9;
var FunctionSetSelectedItems = process.env.NODE_ENV !== "production" ? "__function_set_selected_items__" : 10;
var FunctionSetActiveIndex = process.env.NODE_ENV !== "production" ? "__function_set_active_index__" : 11;
var FunctionReset = process.env.NODE_ENV !== "production" ? "__function_reset__" : 12;
var stateChangeTypes = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  SelectedItemClick,
  SelectedItemKeyDownDelete,
  SelectedItemKeyDownBackspace,
  SelectedItemKeyDownNavigationNext,
  SelectedItemKeyDownNavigationPrevious,
  DropdownKeyDownNavigationPrevious,
  DropdownKeyDownBackspace,
  DropdownClick,
  FunctionAddSelectedItem,
  FunctionRemoveSelectedItem,
  FunctionSetSelectedItems,
  FunctionSetActiveIndex,
  FunctionReset
});
function downshiftMultipleSelectionReducer(state, action) {
  const {
    type,
    index,
    props,
    selectedItem
  } = action;
  const {
    activeIndex,
    selectedItems
  } = state;
  let changes;
  switch (type) {
    case SelectedItemClick:
      changes = {
        activeIndex: index
      };
      break;
    case SelectedItemKeyDownNavigationPrevious:
      changes = {
        activeIndex: activeIndex - 1 < 0 ? 0 : activeIndex - 1
      };
      break;
    case SelectedItemKeyDownNavigationNext:
      changes = {
        activeIndex: activeIndex + 1 >= selectedItems.length ? -1 : activeIndex + 1
      };
      break;
    case SelectedItemKeyDownBackspace:
    case SelectedItemKeyDownDelete: {
      let newActiveIndex = activeIndex;
      if (selectedItems.length === 1) {
        newActiveIndex = -1;
      } else if (activeIndex === selectedItems.length - 1) {
        newActiveIndex = selectedItems.length - 2;
      }
      changes = {
        selectedItems: [...selectedItems.slice(0, activeIndex), ...selectedItems.slice(activeIndex + 1)],
        ...{
          activeIndex: newActiveIndex
        }
      };
      break;
    }
    case DropdownKeyDownNavigationPrevious:
      changes = {
        activeIndex: selectedItems.length - 1
      };
      break;
    case DropdownKeyDownBackspace:
      changes = {
        selectedItems: selectedItems.slice(0, selectedItems.length - 1)
      };
      break;
    case FunctionAddSelectedItem:
      changes = {
        selectedItems: [...selectedItems, selectedItem]
      };
      break;
    case DropdownClick:
      changes = {
        activeIndex: -1
      };
      break;
    case FunctionRemoveSelectedItem: {
      let newActiveIndex = activeIndex;
      const selectedItemIndex = selectedItems.indexOf(selectedItem);
      if (selectedItemIndex >= 0) {
        if (selectedItems.length === 1) {
          newActiveIndex = -1;
        } else if (selectedItemIndex === selectedItems.length - 1) {
          newActiveIndex = selectedItems.length - 2;
        }
        changes = {
          selectedItems: [...selectedItems.slice(0, selectedItemIndex), ...selectedItems.slice(selectedItemIndex + 1)],
          activeIndex: newActiveIndex
        };
      }
      break;
    }
    case FunctionSetSelectedItems: {
      const {
        selectedItems: newSelectedItems
      } = action;
      changes = {
        selectedItems: newSelectedItems
      };
      break;
    }
    case FunctionSetActiveIndex: {
      const {
        activeIndex: newActiveIndex
      } = action;
      changes = {
        activeIndex: newActiveIndex
      };
      break;
    }
    case FunctionReset:
      changes = {
        activeIndex: getDefaultValue(props, "activeIndex"),
        selectedItems: getDefaultValue(props, "selectedItems")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return {
    ...state,
    ...changes
  };
}
useMultipleSelection.stateChangeTypes = stateChangeTypes;
function useMultipleSelection(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }
  validatePropTypes(userProps, useMultipleSelection);
  const props = {
    ...defaultProps,
    ...userProps
  };
  const {
    getA11yRemovalMessage: getA11yRemovalMessage2,
    itemToString: itemToString2,
    environment,
    keyNavigationNext,
    keyNavigationPrevious
  } = props;
  const [state, dispatch] = useControlledReducer$1(downshiftMultipleSelectionReducer, getInitialState2(props), props);
  const {
    activeIndex,
    selectedItems
  } = state;
  const isInitialMountRef = useRef2(true);
  const dropdownRef = useRef2(null);
  const previousSelectedItemsRef = useRef2(selectedItems);
  const selectedItemRefs = useRef2();
  selectedItemRefs.current = [];
  const latest = useLatestRef({
    state,
    props
  });
  useEffect(() => {
    if (isInitialMountRef.current) {
      return;
    }
    if (selectedItems.length < previousSelectedItemsRef.current.length) {
      const removedSelectedItem = previousSelectedItemsRef.current.find((item) => selectedItems.indexOf(item) < 0);
      setStatus(getA11yRemovalMessage2({
        itemToString: itemToString2,
        resultCount: selectedItems.length,
        removedSelectedItem,
        activeIndex,
        activeSelectedItem: selectedItems[activeIndex]
      }), environment.document);
    }
    previousSelectedItemsRef.current = selectedItems;
  }, [selectedItems.length]);
  useEffect(() => {
    if (isInitialMountRef.current) {
      return;
    }
    if (activeIndex === -1 && dropdownRef.current) {
      dropdownRef.current.focus();
    } else if (selectedItemRefs.current[activeIndex]) {
      selectedItemRefs.current[activeIndex].focus();
    }
  }, [activeIndex]);
  useControlPropsValidator({
    isInitialMount: isInitialMountRef.current,
    props,
    state
  });
  const setGetterPropCallInfo = useGetterPropsCalledChecker("getDropdownProps");
  useEffect(() => {
    isInitialMountRef.current = false;
  }, []);
  const selectedItemKeyDownHandlers = useMemo(() => ({
    [keyNavigationPrevious]() {
      dispatch({
        type: SelectedItemKeyDownNavigationPrevious
      });
    },
    [keyNavigationNext]() {
      dispatch({
        type: SelectedItemKeyDownNavigationNext
      });
    },
    Delete() {
      dispatch({
        type: SelectedItemKeyDownDelete
      });
    },
    Backspace() {
      dispatch({
        type: SelectedItemKeyDownBackspace
      });
    }
  }), [dispatch, keyNavigationNext, keyNavigationPrevious]);
  const dropdownKeyDownHandlers = useMemo(() => ({
    [keyNavigationPrevious](event) {
      if (isKeyDownOperationPermitted(event)) {
        dispatch({
          type: DropdownKeyDownNavigationPrevious
        });
      }
    },
    Backspace(event) {
      if (isKeyDownOperationPermitted(event)) {
        dispatch({
          type: DropdownKeyDownBackspace
        });
      }
    }
  }), [dispatch, keyNavigationPrevious]);
  const getSelectedItemProps = useCallback(function(_temp) {
    let {
      refKey = "ref",
      ref,
      onClick,
      onKeyDown,
      selectedItem,
      index,
      ...rest
    } = _temp === void 0 ? {} : _temp;
    const {
      state: latestState
    } = latest.current;
    const itemIndex = getItemIndex(index, selectedItem, latestState.selectedItems);
    if (itemIndex < 0) {
      throw new Error("Pass either selectedItem or index in getSelectedItemProps!");
    }
    const selectedItemHandleClick = () => {
      dispatch({
        type: SelectedItemClick,
        index
      });
    };
    const selectedItemHandleKeyDown = (event) => {
      const key = normalizeArrowKey(event);
      if (key && selectedItemKeyDownHandlers[key]) {
        selectedItemKeyDownHandlers[key](event);
      }
    };
    return {
      [refKey]: handleRefs(ref, (selectedItemNode) => {
        if (selectedItemNode) {
          selectedItemRefs.current.push(selectedItemNode);
        }
      }),
      tabIndex: index === latestState.activeIndex ? 0 : -1,
      onClick: callAllEventHandlers(onClick, selectedItemHandleClick),
      onKeyDown: callAllEventHandlers(onKeyDown, selectedItemHandleKeyDown),
      ...rest
    };
  }, [dispatch, latest, selectedItemKeyDownHandlers]);
  const getDropdownProps = useCallback(function(_temp2, _temp3) {
    let {
      refKey = "ref",
      ref,
      onKeyDown,
      onClick,
      preventKeyAction = false,
      ...rest
    } = _temp2 === void 0 ? {} : _temp2;
    let {
      suppressRefError = false
    } = _temp3 === void 0 ? {} : _temp3;
    setGetterPropCallInfo("getDropdownProps", suppressRefError, refKey, dropdownRef);
    const dropdownHandleKeyDown = (event) => {
      const key = normalizeArrowKey(event);
      if (key && dropdownKeyDownHandlers[key]) {
        dropdownKeyDownHandlers[key](event);
      }
    };
    const dropdownHandleClick = () => {
      dispatch({
        type: DropdownClick
      });
    };
    return {
      [refKey]: handleRefs(ref, (dropdownNode) => {
        if (dropdownNode) {
          dropdownRef.current = dropdownNode;
        }
      }),
      ...!preventKeyAction && {
        onKeyDown: callAllEventHandlers(onKeyDown, dropdownHandleKeyDown),
        onClick: callAllEventHandlers(onClick, dropdownHandleClick)
      },
      ...rest
    };
  }, [dispatch, dropdownKeyDownHandlers, setGetterPropCallInfo]);
  const addSelectedItem = useCallback((selectedItem) => {
    dispatch({
      type: FunctionAddSelectedItem,
      selectedItem
    });
  }, [dispatch]);
  const removeSelectedItem = useCallback((selectedItem) => {
    dispatch({
      type: FunctionRemoveSelectedItem,
      selectedItem
    });
  }, [dispatch]);
  const setSelectedItems = useCallback((newSelectedItems) => {
    dispatch({
      type: FunctionSetSelectedItems,
      selectedItems: newSelectedItems
    });
  }, [dispatch]);
  const setActiveIndex = useCallback((newActiveIndex) => {
    dispatch({
      type: FunctionSetActiveIndex,
      activeIndex: newActiveIndex
    });
  }, [dispatch]);
  const reset = useCallback(() => {
    dispatch({
      type: FunctionReset
    });
  }, [dispatch]);
  return {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    setSelectedItems,
    setActiveIndex,
    reset,
    selectedItems,
    activeIndex
  };
}

// src/DropdownMultipleCombobox.jsx
function DropdownMultipleCombobox({ items: initialItems, value: initialSelectedItems, onChange, valueField, labelField }) {
  const [inputValue, setInputValue] = React34.useState("");
  const { getSelectedItemProps, getDropdownProps, addSelectedItem, removeSelectedItem, selectedItems } = useMultipleSelection({ initialSelectedItems, onSelectedItemsChange: ({ selectedItems: selectedItems2 }) => {
    onChange(selectedItems2);
  } });
  const getFilteredItems = (items) => {
    return items.filter((item) => {
      return selectedItems.map((item2) => item2[valueField]).indexOf(item[valueField]) < 0 && item[labelField].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(inputValue.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Za-z0-9\s]/g, ""));
    });
  };
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectItem,
    openMenu
  } = useCombobox({
    itemToString: (item) => item ? item[labelField] : "",
    inputValue,
    items: getFilteredItems(initialItems),
    onStateChange: ({ inputValue: inputValue2, type, selectedItem }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(inputValue2);
          break;
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            setInputValue("");
            addSelectedItem(selectedItem);
            selectItem(null);
          }
          break;
        default:
          break;
      }
    }
  });
  return /* @__PURE__ */ React34.createElement(Box13, { sx: { position: "relative" } }, /* @__PURE__ */ React34.createElement(Box13, { sx: { position: "relative", display: "inline-flex", flexWrap: "wrap" } }, /* @__PURE__ */ React34.createElement(Box13, { sx: { display: "inline-block" }, ...getComboboxProps() }, /* @__PURE__ */ React34.createElement("input", { ...getInputProps(getDropdownProps({ preventKeyAction: isOpen })) }), /* @__PURE__ */ React34.createElement("button", { type: "button", ...getToggleButtonProps(), "aria-label": "toggle menu" }))), /* @__PURE__ */ React34.createElement("ul", { ...getMenuProps(), style: { display: isOpen ? "block" : "none" } }, isOpen && getFilteredItems(initialItems).map((item, index) => /* @__PURE__ */ React34.createElement(
    "li",
    {
      style: highlightedIndex === index ? { backgroundColor: "#bde4ff", padding: "10px 4px", borderBottom: "1px solid hsl(0 0% 0% / 0.1)" } : { padding: "10px 4px", borderBottom: "1px solid hsl(0 0% 0% / 0.1)" },
      key: `${item[valueField]}${index}`,
      ...getItemProps({ item, index })
    },
    item[labelField]
  ))), selectedItems.map((selectedItem, index) => /* @__PURE__ */ React34.createElement("span", { key: `selected-item-${index}`, ...getSelectedItemProps({ selectedItem, index }) }, selectedItem[labelField], /* @__PURE__ */ React34.createElement("span", { onClick: () => removeSelectedItem(selectedItem) }, "\u2715"))));
}
var DropdownMultipleCombobox_default = DropdownMultipleCombobox;

// src/CircularProgress.jsx
import React35 from "react";
import { Box as Box14, Text as Text2 } from "theme-ui";
function CircularProgress({ value = 0, height = 48, color = "currentColor", style, ...rest }) {
  if (value > 100)
    value = 100;
  if (value < 0)
    value = 0;
  const diff = 100 - value;
  const strokeDashoffset = value && value <= 100 ? 126.92 * diff / 100 : 126.92;
  return /* @__PURE__ */ React35.createElement("svg", { viewBox: "22 22 44 44", height, fill: color, style: { transform: "rotate(-90deg)", ...style }, ...rest }, /* @__PURE__ */ React35.createElement("circle", { style: { transition: "stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms", stroke: "currentcolor", strokeDasharray: "126.920", strokeDashoffset: `${strokeDashoffset}px` }, cx: "44", cy: "44", r: "20.2", fill: "none", strokeWidth: "3.6" }));
}
function CircularProgressWithBg({ value = 0, height = 48, color = "currentColor", style, ...rest }) {
  return /* @__PURE__ */ React35.createElement(Box14, { sx: { display: "inline-flex", position: "relative" } }, /* @__PURE__ */ React35.createElement("svg", { viewBox: "22 22 44 44", height, style: { position: "absolute" } }, /* @__PURE__ */ React35.createElement("circle", { style: { stroke: "lightgray" }, cx: "44", cy: "44", r: "20.2", fill: "none", strokeWidth: "3.6" })), /* @__PURE__ */ React35.createElement(CircularProgress, { value, height, color, style: { ...style, position: "absolute" }, ...rest }));
}
function CircularProgressWithLabel({ value = 0, height = 48, color = "currentColor", hideLabel = false, style, ...rest }) {
  return /* @__PURE__ */ React35.createElement(Box14, { sx: { display: "inline-flex", position: "relative" } }, /* @__PURE__ */ React35.createElement(Box14, { sx: { display: "inline-block", width: height, height } }, /* @__PURE__ */ React35.createElement("svg", { viewBox: "22 22 44 44", height, style: { position: "absolute" } }, /* @__PURE__ */ React35.createElement("circle", { style: { stroke: "lightgray" }, cx: "44", cy: "44", r: "20.2", fill: "none", strokeWidth: "3.6" }))), /* @__PURE__ */ React35.createElement(CircularProgress, { value, height, color, style: { ...style, position: "absolute" }, ...rest }), !hideLabel && /* @__PURE__ */ React35.createElement(Box14, { sx: { top: 0, left: 0, bottom: 0, right: 0, position: "absolute", display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React35.createElement(Text2, { sx: { fontSize: 1 } }, `${Math.round(value)}%`)));
}

// src/Menu.jsx
import React36 from "react";
import { Link as Link2 } from "react-router-dom";
import { Box as Box15 } from "theme-ui";
import styled4 from "@emotion/styled";
var Menu = styled4(({ children, className, ...rest }) => /* @__PURE__ */ React36.createElement(Box15, { sx: { pb: 2, minWidth: 100 }, className, ...rest }, children))``;
var MenuItem = ({ children, className, to, ...rest }) => {
  if (to) {
    return /* @__PURE__ */ React36.createElement(Link2, { to }, /* @__PURE__ */ React36.createElement(Box15, { sx: { cursor: "pointer", py: 2, px: 3 }, className, ...rest }, children));
  }
  return /* @__PURE__ */ React36.createElement(Box15, { sx: { cursor: "pointer", py: 2, px: 3 }, className, ...rest }, children);
};

// src/Table.jsx
import React37 from "react";
import styled5 from "@emotion/styled";
import { Box as Box16 } from "theme-ui";
import { useDoubleTap } from "use-double-tap";
import { useIgnoreMount } from "hooks";
import { Themed } from "theme-ui";
import { useResize } from "hooks";
var Input2 = styled5.input`
  font: inherit;
  color: inherit;
  border: none;
  width: 100%;
  height: calc(36px);
  padding: 0 10px;
  background: transparent;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:focus {
    outline: rgb(6, 29, 224) solid 2px;
    outline-offset: -2px;
  }
`;
function TableCellDiv({ children, options = [], onChange = () => {
}, ...rest }) {
  const [originalValue, setOriginalValue] = React37.useState(children);
  const [isEditing, setIsEditing] = React37.useState(false);
  const [value, setValue] = React37.useState(children || "");
  const inputRef = React37.useRef(null);
  useIgnoreMount(children, (newValue) => {
    setValue(newValue);
  });
  const bind = useDoubleTap(() => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 10);
  });
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleFocus = (event) => {
    event.target.select();
  };
  const handleBlur = () => {
    setIsEditing(false);
    if (value !== originalValue) {
      setOriginalValue(value);
      onChange(value);
    }
  };
  const handleDivKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(true);
      setTimeout(() => {
        inputRef.current.focus();
      }, 10);
    } else if (event.key === "Escape") {
      setValue(children);
      setIsEditing(false);
    }
  };
  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    } else if (event.key === "Escape") {
      setValue(children);
      setIsEditing(false);
    }
  };
  return /* @__PURE__ */ React37.createElement(React37.Fragment, null, !isEditing && /* @__PURE__ */ React37.createElement(Box16, { onKeyPress: handleDivKeyPress, tabIndex: 0, ...rest, ...bind }, value), /* @__PURE__ */ React37.createElement(Box16, { sx: { display: isEditing ? "block" : "none" } }, /* @__PURE__ */ React37.createElement(Input2, { list: "data", onKeyDown: handleInputKeyDown, ref: inputRef, value, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur }), /* @__PURE__ */ React37.createElement("datalist", { id: "data" }, options.map((option) => /* @__PURE__ */ React37.createElement("option", { key: option, value: option })))));
}
var ArrowUpIcon = () => /* @__PURE__ */ React37.createElement("svg", { viewBox: "0 0 24 24", height: 16, fill: "currentColor" }, /* @__PURE__ */ React37.createElement("path", { d: "M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" }));
var ArrowDownIcon = () => /* @__PURE__ */ React37.createElement("svg", { viewBox: "0 0 24 24", height: 16, fill: "currentColor" }, /* @__PURE__ */ React37.createElement("path", { d: "M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" }));
function SortLabel({ headerField, currentField, label, currentAscOrDesc, onChange }) {
  if (headerField === currentField) {
    return /* @__PURE__ */ React37.createElement(Box16, { onClick: () => onChange(`${headerField} ${currentAscOrDesc === "asc" ? "desc" : "asc"}`), sx: { display: "inline-flex", alignItems: "center", cursor: "pointer", textDecoration: "underline", textUnderlinePosition: "under" } }, /* @__PURE__ */ React37.createElement(Box16, { sx: { userSelect: "none" } }, label), /* @__PURE__ */ React37.createElement(Box16, { sx: { display: "inline-flex" } }, currentAscOrDesc.toLowerCase() === "desc" ? /* @__PURE__ */ React37.createElement(ArrowUpIcon, null) : /* @__PURE__ */ React37.createElement(ArrowDownIcon, null)));
  }
  return /* @__PURE__ */ React37.createElement(Box16, { onClick: () => onChange(`${headerField} asc`), sx: { display: "inline-flex", cursor: "pointer", textDecoration: "underline", textUnderlinePosition: "under" } }, label);
}
var TableContainer = styled5(Box16)`
  flex-grow: 1;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: hsl(0, 0%, 0%, 0.38);
  }
`;
var Table = styled5(Themed.table)`
  width: fit-content;
  min-width: 100%;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
`;
var THead = styled5.thead``;
var TBody = styled5.tbody``;
var TR = styled5(Themed.tr)`
  height: ${(props) => (props == null ? void 0 : props.height) || "40px"};
  &:hover td {
    background: ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.elevated) || "hsl(0deg 0% 97%)";
}};
  }
  ${(props) => (props == null ? void 0 : props.selected) && "& td { background-color: var(--theme-ui-colors-hairline); !important; }"}
  &.open > td {
    background-color: hsl(218deg 66% 94%) !important;
  }
  ${(props) => (props == null ? void 0 : props.contextMenuOpen) && "& td { background-color: hsl(223deg 47% 97%) !important; }"}
`;
var TH = styled5(Themed.th)`
  position: sticky;
  top: 0px;
  text-align: left;
  user-select: none;
  white-space: nowrap;
  font-weight: ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.fontWeights) == null ? void 0 : _b.bold) || "500";
}};
  z-index: 1;
  user-select: none;

  background-color: ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.elevated) || "hsl(0deg 0% 97%)";
}};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.hairline) || "hsl(0deg 0% 80%)";
}};

  &.right {
    text-align: right;
  }
`;
var THSticky = styled5(TH)`
  left: 0;
  z-index: 3;
  user-select: none;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: -1px;
    right: 0;
    width: 30px;
    pointer-events: none;
    transition: box-shadow 0.3s;
    box-shadow: ${(props) => props.showShadow ? "inset 10px 0 8px -8px hsl(0deg 0% 85%)" : "none"};
    transform: translateX(100%);
  }
`;
var AnimatedTHSticky = styled5.th`
  position: sticky;
  top: 0;
  height: 3rem;
  text-align: left;
  text-transform: uppercase;
  font-size: 0.8rem;
  padding: 0.7rem 0.9rem;
  background-color: #fafafa;
  font-weight: 500;
  /* z-index: 2; */

  left: 0px;
  /* z-index: 3; */
  &.shadow:after {
    box-shadow: inset 10px 0 8px -8px hsl(0deg 0% 85%);
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: -1px;
    right: 0;
    width: 30px;
    pointer-events: none;
    transition: box-shadow 0.3s;
    transform: translateX(100%);
  }
  display: none;

  @media (min-width: 40em) {
    display: table-cell;
  }
`;
var TD = styled5(Themed.td)`
  line-height: 1em;

  background-color: ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.canvas) || "white";
}};
  border-bottom: 1px solid ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.hairline) || "hsl(0deg 0% 80%)";
}};

  &.number {
    font-feature-settings: "tnum";
    text-align: right;
  }
`;
var TDSticky = styled5(TD)`
  position: sticky;
  left: 0;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: -1px;
    right: 0;
    width: 30px;
    pointer-events: none;
    transition: box-shadow 0.3s;
    box-shadow: ${(props) => props.showShadow ? "inset 10px 0 8px -8px hsl(0deg 0% 85%)" : "none"};
    transform: translateX(100%);
  }
`;
var Truncate = styled5(Box16)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
var NoWrap = styled5.span`
  white-space: nowrap;
`;
var TableDiv = styled5(TableCellDiv)`
  width: 100%;
  height: calc(36px);
  line-height: 24px;
  padding: 6px 10px;
  font-weight: 400;
  background: transparent;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  cursor: default;
`;
function ResizableTH({ children, initialWidth = 200, minWidth = 100, maxWidth = 400, style = {}, onChange = () => {
}, ...rest }) {
  const [col1Width, setCol1Width] = React37.useState(initialWidth);
  const { bind, styles, animated: animated4 } = useResize({ initialWidth: col1Width, minWidth, maxWidth, immediate: true, onChange: (value) => {
    setCol1Width(value);
    onChange(value);
  } });
  return /* @__PURE__ */ React37.createElement(animated4.th, { style: { userSelect: "none", position: "sticky", top: 0, height: "3rem", backgroundColor: "var(--theme-ui-colors-elevated)", borderBottom: "1px solid var(--theme-ui-colors-hairline)", textAlign: "left", fontWeight: 500, ...style, ...styles }, ...rest }, children, /* @__PURE__ */ React37.createElement("div", { ...bind(), style: { position: "absolute", right: 0, top: 10, userSelect: "none", cursor: "col-resize" } }, /* @__PURE__ */ React37.createElement(Icon_default, { height: 20, path: "M9,3H11V5H9V3M13,3H15V5H13V3M9,7H11V9H9V7M13,7H15V9H13V7M9,11H11V13H9V11M13,11H15V13H13V11M9,15H11V17H9V15M13,15H15V17H13V15M9,19H11V21H9V19M13,19H15V21H13V19Z" })));
}
export {
  AnimatedTHSticky,
  Button_default as Button,
  ButtonIcon_default as ButtonIcon,
  ButtonWithLoading_default as ButtonWithLoading,
  Checkbox_default as Checkbox,
  CircularProgress,
  CircularProgressWithBg,
  CircularProgressWithLabel,
  Close_default as Close,
  DropdownMultipleCombobox_default as DropdownMultipleCombobox,
  FieldCheckbox_default as FieldCheckbox,
  FieldInput_default as FieldInput,
  FieldInputPassword_default as FieldInputPassword,
  FieldSelect_default as FieldSelect,
  FieldTextarea_default as FieldTextarea,
  Floating_default as Floating,
  FormErrorBox_default as FormErrorBox,
  Icon_default as Icon,
  Input_default as Input,
  InputMasked_default as InputMasked,
  InputPassword_default as InputPassword,
  InputSearch_default as InputSearch,
  LinkButton_default as LinkButton,
  Menu,
  MenuItem,
  Modal_default as Modal,
  MultiCheck_default as MultiCheck,
  MultiCheckLabelValue_default as MultiCheckLabelValue,
  NoWrap,
  OptimisticCheckbox_default as OptimisticCheckbox,
  Pagination_default as Pagination,
  PopOver_default as PopOver,
  Portal_default as Portal,
  Radio_default as Radio,
  ResizableTH,
  Select_default as Select,
  SortLabel,
  SpinnerWithDelay_default as SpinnerWithDelay,
  Stepper_default as Stepper,
  Switch_default as Switch,
  TBody,
  TD,
  TDSticky,
  TH,
  THSticky,
  THead,
  TR,
  Table,
  TableContainer,
  TableDiv,
  Tabs_default as Tabs,
  Textarea_default as Textarea,
  Tooltip_default as Tooltip,
  Truncate
};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
