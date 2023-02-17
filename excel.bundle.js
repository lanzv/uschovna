/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/@finos/fdc3/dist/fdc3.esm.js":
/*!*******************************************************!*\
  !*** ../../node_modules/@finos/fdc3/dist/fdc3.esm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChannelError": () => (/* binding */ ChannelError),
/* harmony export */   "ContextTypes": () => (/* binding */ ContextTypes),
/* harmony export */   "Convert": () => (/* binding */ Convert),
/* harmony export */   "Intents": () => (/* binding */ Intents),
/* harmony export */   "OpenError": () => (/* binding */ OpenError),
/* harmony export */   "ResolveError": () => (/* binding */ ResolveError),
/* harmony export */   "addContextListener": () => (/* binding */ addContextListener),
/* harmony export */   "addIntentListener": () => (/* binding */ addIntentListener),
/* harmony export */   "broadcast": () => (/* binding */ broadcast),
/* harmony export */   "compareVersionNumbers": () => (/* binding */ compareVersionNumbers),
/* harmony export */   "fdc3Ready": () => (/* binding */ fdc3Ready),
/* harmony export */   "findIntent": () => (/* binding */ findIntent),
/* harmony export */   "findIntentsByContext": () => (/* binding */ findIntentsByContext),
/* harmony export */   "getCurrentChannel": () => (/* binding */ getCurrentChannel),
/* harmony export */   "getInfo": () => (/* binding */ getInfo),
/* harmony export */   "getOrCreateChannel": () => (/* binding */ getOrCreateChannel),
/* harmony export */   "getSystemChannels": () => (/* binding */ getSystemChannels),
/* harmony export */   "joinChannel": () => (/* binding */ joinChannel),
/* harmony export */   "leaveCurrentChannel": () => (/* binding */ leaveCurrentChannel),
/* harmony export */   "open": () => (/* binding */ open),
/* harmony export */   "raiseIntent": () => (/* binding */ raiseIntent),
/* harmony export */   "raiseIntentForContext": () => (/* binding */ raiseIntentForContext),
/* harmony export */   "versionIsAtLeast": () => (/* binding */ versionIsAtLeast)
/* harmony export */ });
/**
 * SPDX-License-Identifier: Apache-2.0
 * Copyright 2019 FINOS FDC3 contributors - see NOTICE file
 */
var OpenError;

(function (OpenError) {
  OpenError["AppNotFound"] = "AppNotFound";
  OpenError["ErrorOnLaunch"] = "ErrorOnLaunch";
  OpenError["AppTimeout"] = "AppTimeout";
  OpenError["ResolverUnavailable"] = "ResolverUnavailable";
})(OpenError || (OpenError = {}));

var ResolveError;

(function (ResolveError) {
  ResolveError["NoAppsFound"] = "NoAppsFound";
  ResolveError["ResolverUnavailable"] = "ResolverUnavailable";
  ResolveError["ResolverTimeout"] = "ResolverTimeout";
})(ResolveError || (ResolveError = {}));

var ChannelError;

(function (ChannelError) {
  ChannelError["NoChannelFound"] = "NoChannelFound";
  ChannelError["AccessDenied"] = "AccessDenied";
  ChannelError["CreationFailed"] = "CreationFailed";
})(ChannelError || (ChannelError = {}));

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var DEFAULT_TIMEOUT = 5000;
var UnavailableError = /*#__PURE__*/new Error('FDC3 DesktopAgent not available at `window.fdc3`.');
var TimeoutError = /*#__PURE__*/new Error('Timed out waiting for `fdc3Ready` event.');
var UnexpectedError = /*#__PURE__*/new Error('`fdc3Ready` event fired, but `window.fdc3` not set to DesktopAgent.');

function rejectIfNoGlobal(f) {
  return window.fdc3 ? f() : Promise.reject(UnavailableError);
}

function throwIfNoGlobal(f) {
  if (!window.fdc3) {
    throw UnavailableError;
  }

  return f();
}

var fdc3Ready = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(waitForMs) {
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (waitForMs === void 0) {
              waitForMs = DEFAULT_TIMEOUT;
            }

            return _context.abrupt("return", new Promise(function (resolve, reject) {
              // if the global is already available resolve immediately
              if (window.fdc3) {
                resolve();
              } else {
                // if its not available setup a timeout to return a rejected promise
                var timeout = setTimeout(function () {
                  return window.fdc3 ? resolve() : reject(TimeoutError);
                }, waitForMs); // listen for the fdc3Ready event

                window.addEventListener('fdc3Ready', function () {
                  clearTimeout(timeout);
                  window.fdc3 ? resolve() : reject(UnexpectedError);
                }, {
                  once: true
                });
              }
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fdc3Ready(_x) {
    return _ref.apply(this, arguments);
  };
}();
function open(app, context) {
  return rejectIfNoGlobal(function () {
    return window.fdc3.open(app, context);
  });
}
function findIntent(intent, context) {
  return rejectIfNoGlobal(function () {
    return window.fdc3.findIntent(intent, context);
  });
}
function findIntentsByContext(context) {
  return rejectIfNoGlobal(function () {
    return window.fdc3.findIntentsByContext(context);
  });
}
function broadcast(context) {
  throwIfNoGlobal(function () {
    return window.fdc3.broadcast(context);
  });
}
function raiseIntent(intent, context, app) {
  return rejectIfNoGlobal(function () {
    return window.fdc3.raiseIntent(intent, context, app);
  });
}
function raiseIntentForContext(context, app) {
  return rejectIfNoGlobal(function () {
    return window.fdc3.raiseIntentForContext(context, app);
  });
}
function addIntentListener(intent, handler) {
  return throwIfNoGlobal(function () {
    return window.fdc3.addIntentListener(intent, handler);
  });
}
function addContextListener(contextTypeOrHandler, handler) {
  if (typeof contextTypeOrHandler !== 'function') {
    return throwIfNoGlobal(function () {
      return window.fdc3.addContextListener(contextTypeOrHandler, handler);
    });
  } else {
    return throwIfNoGlobal(function () {
      return window.fdc3.addContextListener(contextTypeOrHandler);
    });
  }
}
function getSystemChannels() {
  return rejectIfNoGlobal(function () {
    return window.fdc3.getSystemChannels();
  });
}
function joinChannel(channelId) {
  return rejectIfNoGlobal(function () {
    return window.fdc3.joinChannel(channelId);
  });
}
function getOrCreateChannel(channelId) {
  return rejectIfNoGlobal(function () {
    return window.fdc3.getOrCreateChannel(channelId);
  });
}
function getCurrentChannel() {
  return rejectIfNoGlobal(function () {
    return window.fdc3.getCurrentChannel();
  });
}
function leaveCurrentChannel() {
  return rejectIfNoGlobal(function () {
    return window.fdc3.leaveCurrentChannel();
  });
}
function getInfo() {
  return throwIfNoGlobal(function () {
    return window.fdc3.getInfo();
  });
}
/**
 * Compare numeric semver version number strings (in the form `1.2.3`).
 *
 * Returns `-1` if the first argument is a lower version number than the second,
 * `1` if the first argument is greater than the second, 0 if the arguments are
 * equal and `null` if an error occurred during the comparison.
 *
 * @param a
 * @param b
 */

var compareVersionNumbers = function compareVersionNumbers(a, b) {
  try {
    var aVerArr = a.split('.').map(Number);
    var bVerArr = b.split('.').map(Number);

    for (var index = 0; index < Math.max(aVerArr.length, bVerArr.length); index++) {
      /* If one version number has more digits and the other does not, and they are otherwise equal,
         assume the longer is greater. E.g. 1.1.1 > 1.1 */
      if (index === aVerArr.length || aVerArr[index] < bVerArr[index]) {
        return -1;
      } else if (index === bVerArr.length || aVerArr[index] > bVerArr[index]) {
        return 1;
      }
    }

    return 0;
  } catch (e) {
    console.error('Failed to compare version strings', e);
    return null;
  }
};
/**
 * Check if the FDC3 version in an ImplementationMetadata object is greater than
 * or equal to the supplied numeric semver version number string (in the form `1.2.3`).
 *
 * Returns a boolean or null if an error occurred while comparing the version numbers.
 *
 * @param metadata
 * @param version
 */

var versionIsAtLeast = function versionIsAtLeast(metadata, version) {
  var comparison = compareVersionNumbers(metadata.fdc3Version, version);
  return comparison === null ? null : comparison >= 0 ? true : false;
};

var ContextTypes;

(function (ContextTypes) {
  ContextTypes["Contact"] = "fdc3.contact";
  ContextTypes["ContactList"] = "fdc3.contactList";
  ContextTypes["Country"] = "fdc3.country";
  ContextTypes["Instrument"] = "fdc3.instrument";
  ContextTypes["Organization"] = "fdc3.organization";
  ContextTypes["Portfolio"] = "fdc3.portfolio";
  ContextTypes["Position"] = "fdc3.position";
})(ContextTypes || (ContextTypes = {}));

// To parse this data:
//
//   import { Convert, Context, Contact, ContactList, Instrument, InstrumentList, Country, Organization, Portfolio, Position } from "./file";
//
//   const context = Convert.toContext(json);
//   const contact = Convert.toContact(json);
//   const contactList = Convert.toContactList(json);
//   const instrument = Convert.toInstrument(json);
//   const instrumentList = Convert.toInstrumentList(json);
//   const country = Convert.toCountry(json);
//   const organization = Convert.toOrganization(json);
//   const portfolio = Convert.toPortfolio(json);
//   const position = Convert.toPosition(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.
// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
var Convert = /*#__PURE__*/function () {
  function Convert() {}

  Convert.toContext = function toContext(json) {
    return cast(JSON.parse(json), r('Context'));
  };

  Convert.contextToJson = function contextToJson(value) {
    return JSON.stringify(uncast(value, r('Context')), null, 2);
  };

  Convert.toContact = function toContact(json) {
    return cast(JSON.parse(json), r('Contact'));
  };

  Convert.contactToJson = function contactToJson(value) {
    return JSON.stringify(uncast(value, r('Contact')), null, 2);
  };

  Convert.toContactList = function toContactList(json) {
    return cast(JSON.parse(json), r('ContactList'));
  };

  Convert.contactListToJson = function contactListToJson(value) {
    return JSON.stringify(uncast(value, r('ContactList')), null, 2);
  };

  Convert.toInstrument = function toInstrument(json) {
    return cast(JSON.parse(json), r('Instrument'));
  };

  Convert.instrumentToJson = function instrumentToJson(value) {
    return JSON.stringify(uncast(value, r('Instrument')), null, 2);
  };

  Convert.toInstrumentList = function toInstrumentList(json) {
    return cast(JSON.parse(json), r('InstrumentList'));
  };

  Convert.instrumentListToJson = function instrumentListToJson(value) {
    return JSON.stringify(uncast(value, r('InstrumentList')), null, 2);
  };

  Convert.toCountry = function toCountry(json) {
    return cast(JSON.parse(json), r('Country'));
  };

  Convert.countryToJson = function countryToJson(value) {
    return JSON.stringify(uncast(value, r('Country')), null, 2);
  };

  Convert.toOrganization = function toOrganization(json) {
    return cast(JSON.parse(json), r('Organization'));
  };

  Convert.organizationToJson = function organizationToJson(value) {
    return JSON.stringify(uncast(value, r('Organization')), null, 2);
  };

  Convert.toPortfolio = function toPortfolio(json) {
    return cast(JSON.parse(json), r('Portfolio'));
  };

  Convert.portfolioToJson = function portfolioToJson(value) {
    return JSON.stringify(uncast(value, r('Portfolio')), null, 2);
  };

  Convert.toPosition = function toPosition(json) {
    return cast(JSON.parse(json), r('Position'));
  };

  Convert.positionToJson = function positionToJson(value) {
    return JSON.stringify(uncast(value, r('Position')), null, 2);
  };

  return Convert;
}();

function invalidValue(typ, val, key) {
  if (key === void 0) {
    key = '';
  }

  if (key) {
    throw Error("Invalid value for key \"" + key + "\". Expected type " + JSON.stringify(typ) + " but got " + JSON.stringify(val));
  }

  throw Error("Invalid value " + JSON.stringify(val) + " for type " + JSON.stringify(typ));
}

function jsonToJSProps(typ) {
  if (typ.jsonToJS === undefined) {
    var map = {};
    typ.props.forEach(function (p) {
      return map[p.json] = {
        key: p.js,
        typ: p.typ
      };
    });
    typ.jsonToJS = map;
  }

  return typ.jsonToJS;
}

function jsToJSONProps(typ) {
  if (typ.jsToJSON === undefined) {
    var map = {};
    typ.props.forEach(function (p) {
      return map[p.js] = {
        key: p.json,
        typ: p.typ
      };
    });
    typ.jsToJSON = map;
  }

  return typ.jsToJSON;
}

function transform(val, typ, getProps, key) {
  if (key === void 0) {
    key = '';
  }

  function transformPrimitive(typ, val) {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key);
  }

  function transformUnion(typs, val) {
    // val must validate against one typ in typs
    var l = typs.length;

    for (var i = 0; i < l; i++) {
      var _typ = typs[i];

      try {
        return transform(val, _typ, getProps);
      } catch (_) {}
    }

    return invalidValue(typs, val);
  }

  function transformEnum(cases, val) {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(cases, val);
  }

  function transformArray(typ, val) {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue('array', val);
    return val.map(function (el) {
      return transform(el, typ, getProps);
    });
  }

  function transformDate(val) {
    if (val === null) {
      return null;
    }

    var d = new Date(val);

    if (isNaN(d.valueOf())) {
      return invalidValue('Date', val);
    }

    return d;
  }

  function transformObject(props, additional, val) {
    if (val === null || typeof val !== 'object' || Array.isArray(val)) {
      return invalidValue('object', val);
    }

    var result = {};
    Object.getOwnPropertyNames(props).forEach(function (key) {
      var prop = props[key];
      var v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, prop.key);
    });
    Object.getOwnPropertyNames(val).forEach(function (key) {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key);
      }
    });
    return result;
  }

  if (typ === 'any') return val;

  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val);
  }

  if (typ === false) return invalidValue(typ, val);

  while (typeof typ === 'object' && typ.ref !== undefined) {
    typ = typeMap[typ.ref];
  }

  if (Array.isArray(typ)) return transformEnum(typ, val);

  if (typeof typ === 'object') {
    return typ.hasOwnProperty('unionMembers') ? transformUnion(typ.unionMembers, val) : typ.hasOwnProperty('arrayItems') ? transformArray(typ.arrayItems, val) : typ.hasOwnProperty('props') ? transformObject(getProps(typ), typ.additional, val) : invalidValue(typ, val);
  } // Numbers can be parsed by Date but shouldn't be.


  if (typ === Date && typeof val !== 'number') return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast(val, typ) {
  return transform(val, typ, jsonToJSProps);
}

function uncast(val, typ) {
  return transform(val, typ, jsToJSONProps);
}

function a(typ) {
  return {
    arrayItems: typ
  };
}

function u() {
  for (var _len = arguments.length, typs = new Array(_len), _key = 0; _key < _len; _key++) {
    typs[_key] = arguments[_key];
  }

  return {
    unionMembers: typs
  };
}

function o(props, additional) {
  return {
    props: props,
    additional: additional
  };
}

function m(additional) {
  return {
    props: [],
    additional: additional
  };
}

function r(name) {
  return {
    ref: name
  };
}

var typeMap = {
  Context: /*#__PURE__*/o([{
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m(''))
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }], 'any'),
  ContactList: /*#__PURE__*/o([{
    json: 'contacts',
    js: 'contacts',
    typ: /*#__PURE__*/a( /*#__PURE__*/r('Contact'))
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m(''))
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  Contact: /*#__PURE__*/o([{
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/r('ContactID')
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  ContactID: /*#__PURE__*/o([{
    json: 'email',
    js: 'email',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'FDS_ID',
    js: 'FDS_ID',
    typ: /*#__PURE__*/u(undefined, '')
  }], ''),
  InstrumentList: /*#__PURE__*/o([{
    json: 'instruments',
    js: 'instruments',
    typ: /*#__PURE__*/a( /*#__PURE__*/r('Instrument'))
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m(''))
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  Instrument: /*#__PURE__*/o([{
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/r('InstrumentID')
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  InstrumentID: /*#__PURE__*/o([{
    json: 'BBG',
    js: 'BBG',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'CUSIP',
    js: 'CUSIP',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'FDS_ID',
    js: 'FDS_ID',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'FIGI',
    js: 'FIGI',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'ISIN',
    js: 'ISIN',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'PERMID',
    js: 'PERMID',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'RIC',
    js: 'RIC',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'SEDOL',
    js: 'SEDOL',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'ticker',
    js: 'ticker',
    typ: /*#__PURE__*/u(undefined, '')
  }], ''),
  Country: /*#__PURE__*/o([{
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/r('CountryID')
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  CountryID: /*#__PURE__*/o([{
    json: 'ISOALPHA2',
    js: 'ISOALPHA2',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'ISOALPHA3',
    js: 'ISOALPHA3',
    typ: /*#__PURE__*/u(undefined, '')
  }], ''),
  Organization: /*#__PURE__*/o([{
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/r('OrganizationID')
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  OrganizationID: /*#__PURE__*/o([{
    json: 'FDS_ID',
    js: 'FDS_ID',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'LEI',
    js: 'LEI',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'PERMID',
    js: 'PERMID',
    typ: /*#__PURE__*/u(undefined, '')
  }], ''),
  Portfolio: /*#__PURE__*/o([{
    json: 'positions',
    js: 'positions',
    typ: /*#__PURE__*/a( /*#__PURE__*/r('Position'))
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m(''))
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  Position: /*#__PURE__*/o([{
    json: 'holding',
    js: 'holding',
    typ: 3.14
  }, {
    json: 'instrument',
    js: 'instrument',
    typ: /*#__PURE__*/r('Instrument')
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m(''))
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any')
};

var Intents;

(function (Intents) {
  Intents["StartCall"] = "StartCall";
  Intents["StartChat"] = "StartChat";
  Intents["ViewChart"] = "ViewChart";
  Intents["ViewContact"] = "ViewContact";
  Intents["ViewQuote"] = "ViewQuote";
  Intents["ViewNews"] = "ViewNews";
  Intents["ViewInstrument"] = "ViewInstrument";
  Intents["ViewAnalysis"] = "ViewAnalysis";
})(Intents || (Intents = {}));


//# sourceMappingURL=fdc3.esm.js.map


/***/ }),

/***/ "../../node_modules/@openfin/excel/openfin.excel.js":
/*!**********************************************************!*\
  !*** ../../node_modules/@openfin/excel/openfin.excel.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdapterError": () => (/* binding */ ge),
/* harmony export */   "ApiError": () => (/* binding */ me),
/* harmony export */   "EventError": () => (/* binding */ ye),
/* harmony export */   "ExcelCellBorderLineStyle": () => (/* binding */ Ce),
/* harmony export */   "ExcelCellHorizontalAlignment": () => (/* binding */ ve),
/* harmony export */   "ExcelCellPattern": () => (/* binding */ Ee),
/* harmony export */   "ExcelCellVerticalAlignment": () => (/* binding */ We),
/* harmony export */   "ExcelFilterOperator": () => (/* binding */ Ae),
/* harmony export */   "InitializationError": () => (/* binding */ be),
/* harmony export */   "ParameterError": () => (/* binding */ fe),
/* harmony export */   "disableLogging": () => (/* binding */ $e),
/* harmony export */   "enableLogging": () => (/* binding */ xe),
/* harmony export */   "getExcelApplication": () => (/* binding */ Ge)
/* harmony export */ });
var e,t,r,a={d:(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},o={};a.d(o,{dq:()=>AdapterError,MS:()=>ApiError,xQ:()=>EventError,sO:()=>he,Zu:()=>pe,I3:()=>we,$U:()=>ke,i0:()=>ue,cX:()=>InitializationError,_W:()=>ParameterError,U$:()=>l,U7:()=>c,rd:()=>le});class ApiError extends Error{constructor(e="An unexpected error has occurred",t){var r;super(e),t&&(this.innerError=t&&t),this.stack=null===(r=this.stack)||void 0===r?void 0:r.replace(/^(\w*Error)/,`${this.constructor.name}`)}}class AdapterError extends ApiError{constructor(e="Failed to execute adapter function",t){super(e,t)}}class EventError extends ApiError{constructor(e="Failed to raise event",t){super(e,t)}}class InitializationError extends ApiError{constructor(e="Failed to initialize adapter",t){super(e,t)}}class ParameterError extends ApiError{constructor(e="Invalid parameter value",t){super(e,t)}}!function(e){e.ActivateWorkbook="ActivateWorkbook",e.ActivateWorksheet="ActivateWorksheet",e.AddWorksheet="AddWorksheet",e.CalculateWorkbook="CalculateWorkbook",e.CalculateWorksheet="CalculateWorksheet",e.ClearAllCells="ClearAllCells",e.ClearAllCellValues="ClearAllCellValues",e.ClearAllCellFormatting="ClearAllCellFormatting",e.ClearCellValues="ClearCellValues",e.ClearCellFormatting="ClearCellFormatting",e.ClearCells="ClearCells",e.CloseWorkbook="CloseWorkbook",e.CreateWorkbook="CreateWorkbook",e.DeleteWorksheet="DeleteWorksheet",e.DeregisterEvent="DeregisterEvent",e.EventFired="EventFired",e.GetCalculationMode="GetCalculationMode",e.GetCells="GetCells",e.GetWorkbookById="GetWorkbookById",e.GetWorkbookName="GetWorkbookName",e.GetWorkbooks="GetWorkbooks",e.GetWorksheetById="GetWorksheetById",e.GetWorksheetByName="GetWorksheetByName",e.GetWorksheetName="GetWorksheetName",e.GetWorksheets="GetWorksheets",e.LogMessage="LogMessage",e.OpenWorkbook="OpenWorkbook",e.ProtectWorksheet="ProtectWorksheet",e.RegisterEvent="RegisterEvent",e.SaveWorkbook="SaveWorkbook",e.SaveWorkbookAs="SaveWorkbookAs",e.SetCellValues="SetCellValues",e.SetCellFormatting="SetCellFormatting",e.SetCellName="SetCellName",e.SetWorksheetName="SetWorksheetName",e.FilterCells="FilterCells",e.QuitApplication="QuitApplication"}(e||(e={})),function(e){e.Activate="Activate",e.AddWorksheet="AddWorksheet",e.Change="Change",e.Close="Close",e.Deactivate="Deactivate",e.DeleteWorksheet="DeleteWorksheet"}(t||(t={})),function(e){e.Workbook="Workbook",e.Worksheet="Worksheet"}(r||(r={}));const n="1.4.1";let s=!1;const i="[@openfin/excel]",l=()=>{s=!1},c=()=>{s=!0,h(`v${n}`)},d=(e,t)=>{s&&(e.innerError?console.error(t?`${i} ${t}`:i,e,"\n\n(inner)",e.innerError):console.error(t?`${i} ${t}`:i,e))},h=(...e)=>{s&&console.log(i,...e)},p=(...e)=>{s&&console.warn(i,...e)};"undefined"==typeof fin&&Object.assign(window,{fin:{}}),Object.assign(fin,{Integrations:{Excel:{enableLogging:c,disableLogging:l}}});const w=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),k=new Map,u=(t,r)=>async()=>{h(`Worksheet: Activate (${r})`);try{await t.dispatch(e.ActivateWorksheet,r)}catch(e){throw new AdapterError}},g=(t,r)=>async()=>{h(`Worksheet: Calculate (${r})`);try{await t.dispatch(e.CalculateWorksheet,r)}catch(e){throw new AdapterError}},m=(t,r)=>async()=>{h(`Worksheet: Clear all cell values (${r})`);try{await t.dispatch(e.ClearAllCellValues,r)}catch(e){throw new AdapterError}},y=(t,r)=>async()=>{h(`Worksheet: Clear all cell formatting (${r})`);try{await t.dispatch(e.ClearAllCellFormatting,r)}catch(e){throw new AdapterError}},C=(t,r)=>async()=>{h(`Worksheet: Clear all cells (${r})`);try{await t.dispatch(e.ClearAllCells,r)}catch(e){throw new AdapterError}},v=(t,r)=>async a=>{h(`Worksheet: Clear cell values; cellRange:${a} (${r})`);const o={cellRange:a,objectId:r};try{await t.dispatch(e.ClearCellValues,o)}catch(e){throw new AdapterError}},E=(t,r)=>async a=>{h(`Worksheet: Clear cell formatting; cellRange:${a} (${r})`);const o={cellRange:a,objectId:r};try{await t.dispatch(e.ClearCellFormatting,o)}catch(e){throw new AdapterError}},W=(t,r)=>async a=>{h(`Worksheet: Clear cells; cellRange:${a} (${r})`);const o={cellRange:a,objectId:r};try{await t.dispatch(e.ClearCells,o)}catch(e){throw new AdapterError}},A=(e,t)=>(r,a,o=1e3)=>{if(Number.isNaN(o)||o<=0)throw new ApiError("Update interval must be a positive number");const n=w();h(`Worksheet: Create data stream; streamId:${n}; cellRange:${r}; updateInterval:${o} (${t})`);const s={close:()=>{h(`Closed stream (${n})`),(e=>{var t;try{const r=k.get(e);if(!r)throw new ApiError(`Unable to find registered data stream with id ${e}`);void 0!==(null!==(t=r.timer)&&void 0!==t?t:void 0)&&F(e),k.delete(e)}catch(e){throw d(e),e}})(n)},cellRange:r,id:n,start:()=>{h(`Started streaming (${n})`),U(n,a,e,t)},stop:()=>{h(`Stopped streaming (${n})`),F(n)},updateInterval:o,worksheetId:t};return k.set(n,{dataStream:s}),s},b=(e,t,a,o)=>{const n={eventTarget:r.Worksheet,objectId:t};return{objectId:t,activate:u(e,t),addEventListener:a(e,n),calculate:g(e,t),clearAllCellFormatting:y(e,t),clearAllCells:C(e,t),clearAllCellValues:m(e,t),clearCellFormatting:E(e,t),clearCells:W(e,t),clearCellValues:v(e,t),createDataStream:A(e,t),delete:f(e,t),filterCells:$(e,t),getCells:x(e,t),getName:G(e,t),protect:I(e,t),removeEventListener:o(e),setCellFormatting:D(e,t),setCellName:S(e,t),setCellValues:N(e,t),setName:R(e,t)}},f=(t,r)=>async()=>{h(`Worksheet: Delete (${r})`);try{await t.dispatch(e.DeleteWorksheet,r)}catch(e){throw new AdapterError}},$=(t,r)=>async(a,o,n,s,i,l=!0)=>{h(`Worksheet: Filter cells; cellRange:${a} (${r})`,{columnIndex:o,filterOperator:n,criteria1:s,criteria2:i,visibleDropDown:l});const c={cellRange:a,criteria1:s,criteria2:i,columnIndex:o,filterOperator:n,objectId:r,visibleDropDown:l};try{await t.dispatch(e.FilterCells,c)}catch(e){throw new AdapterError}},x=(t,r)=>async a=>{h(`Worksheet: Get cells; cellRange:${a} (${r})`);const o={cellRange:a,objectId:r};let n=[];try{n=await t.dispatch(e.GetCells,o),h(`${a}:`,n)}catch(e){throw new AdapterError}return n},G=(t,r)=>async()=>{h(`Worksheet: Get name (${r})`);try{return await t.dispatch(e.GetWorksheetName,r)}catch(e){throw new AdapterError}},I=(t,r)=>async()=>{h(`Worksheet: Protect (${r})`);try{await t.dispatch(e.ProtectWorksheet,r)}catch(e){throw new AdapterError}},D=(t,r)=>async(a,o)=>{h(`Worksheet: Set cell formatting; cellRange:${a} (${r})`,o);const n={cellRange:a,formatting:o,objectId:r};try{await t.dispatch(e.SetCellFormatting,n)}catch(e){throw new AdapterError}},S=(t,r)=>async(a,o)=>{const n=o.trim();let s;if(!n)throw s=new ParameterError("Cell range name cannot be an empty string"),d(s),s;if(n.length>255)throw s=new ParameterError("Cell range name must be 255 characters or less"),d(s),s;if(/[^a-zA-Z0-9_.?\\"']/.test(n))throw s=new ParameterError("Cell range name contains invalid characters"),d(s),s;if(/^\d|\d$/.test(n))throw s=new ParameterError("Cell range name must not start or end with a number"),d(s),s;h(`Worksheet: Set cell name; cellRange:${a}; newCellRangeName:${n} (${r})`);const i={cellRange:a,name:n,objectId:r};try{await t.dispatch(e.SetCellName,i)}catch(e){throw new AdapterError}},N=(t,r)=>async(a,o)=>{h(`Worksheet: Set cell values; cellRange:${a} (${r})`,o);const n={cellRange:a,objectId:r,valuesMap:o};try{await t.dispatch(e.SetCellValues,n)}catch(e){throw new AdapterError}},R=(t,r)=>async a=>{const o=a.trim();let n;if(!o)throw n=new ParameterError("Worksheet name cannot be an empty string"),d(n),n;if(o.length>31)throw n=new ParameterError("Worksheet name must be 31 characters or less"),d(n),n;h(`Worksheet: Set name; newWorksheetName:${o} (${r})`);const s={newWorksheetName:o,objectId:r};try{return await t.dispatch(e.SetWorksheetName,s)}catch(e){throw new AdapterError}},U=(e,t,r,a)=>{var o;try{const n=k.get(e);if(!n)throw new ApiError(`Unable to find registered data stream with id ${e}`);void 0!==(null!==(o=n.timer)&&void 0!==o?o:void 0)&&F(e);const{cellRange:s,updateInterval:i}=n.dataStream,l=async()=>{const o=await t();try{await N(r,a)(s,[[o]])}catch(t){p(`Unable to update cell range for stream with id ${e}: ${null==t?void 0:t.message}`)}},c=window.setInterval(l,i);n.timer=c}catch(e){throw d(e),e}},F=e=>{var t;try{const r=k.get(e);if(!r)throw new ApiError(`Unable to find registered data stream with id ${e}`);if(void 0===(null!==(t=r.timer)&&void 0!==t?t:void 0))return;window.clearInterval(r.timer),r.timer=void 0}catch(e){throw d(e),e}},L=new Map,P=(r,a)=>async(o,n)=>{if(!a||!a.eventTarget||!a.objectId){const e=new EventError("Event registration missing required values");throw d(e),e}const s=Object.keys(t).find((e=>e.toLowerCase()===o.toLowerCase()));if(!s){const e=new EventError(`Unsupported event name: ${o}`);throw d(e),e}a.eventName=t[s],h("Registering event",a);try{const t=await r.dispatch(e.RegisterEvent,a);L.set(t,n)}catch(e){throw new AdapterError(void 0,e)}},j=t=>async r=>{let a;for(const[e,t]of L)if(t===r){a=e;break}if(!a)throw new EventError;h("Deregistering event:",a);try{await t.dispatch(e.DeregisterEvent,a),L.delete(a)}catch(e){throw new AdapterError}},O=(e,a,o)=>{var n,s;switch(o.eventTarget){case r.Workbook:switch(null===(n=o.eventName)||void 0===n?void 0:n.toUpperCase()){case t.Activate.toUpperCase():case t.Close.toUpperCase():case t.Deactivate.toUpperCase():return e();case t.AddWorksheet.toUpperCase():case t.DeleteWorksheet.toUpperCase():return e(b(a,o.worksheetObjectId,P,j));default:throw new EventError(`Unexpected workbook event: ${o.eventName}`)}case r.Worksheet:switch(null===(s=o.eventName)||void 0===s?void 0:s.toUpperCase()){case t.Activate.toUpperCase():return e();case t.Change.toUpperCase():return e(o.changedCells);case t.Deactivate.toUpperCase():return e();default:throw new EventError(`Unexpected worksheet event: ${o.eventName}`)}default:throw new EventError(`Unexpected event target: ${o.eventTarget}`)}},B=(t,r)=>async()=>{h(`Workbook: Activate (${r})`);try{return await t.dispatch(e.ActivateWorkbook,r)}catch(e){throw new AdapterError}},V=(t,r,a,o)=>async()=>{let n;h(`Workbook: Add worksheet (${r})`);try{n=await t.dispatch(e.AddWorksheet,r)}catch(e){throw new AdapterError}return b(t,n,a,o)},M=(t,r)=>async()=>{h(`Workbook: Calculate (${r})`);try{await t.dispatch(e.CalculateWorkbook,r)}catch(e){throw new AdapterError}},z=(t,r)=>async()=>{h(`Workbook: Close (${r})`);try{return await t.dispatch(e.CloseWorkbook,r)}catch(e){throw new AdapterError}},T=(e,t,a,o)=>{const n={eventTarget:r.Workbook,objectId:t};return{objectId:t,activate:B(e,t),addWorksheet:V(e,t,a,o),addEventListener:a(e,n),calculate:M(e,t),close:z(e,t),getCalculationMode:Q(e,t),getName:H(e,t),getWorksheetByName:_(e,t,a,o),getWorksheets:q(e,t,a,o),removeEventListener:o(e),save:J(e,t),saveAs:K(e,t)}},Q=(t,r)=>async()=>{h("Workbook: Get calculation mode");try{return await t.dispatch(e.GetCalculationMode,r)}catch(e){throw new AdapterError}},H=(t,r)=>async()=>{h(`Workbook: Get name (${r})`);try{return await t.dispatch(e.GetWorkbookName,r)}catch(e){throw new AdapterError}},_=(t,r,a,o)=>async n=>{let s;h(`Workbook: Get worksheet by name: ${n} (${r})`);try{if(s=await t.dispatch(e.GetWorksheetByName,{objectId:r,worksheetName:n}),null===s)return null}catch(e){throw new AdapterError}return b(t,s,a,o)},q=(t,r,a,o)=>async()=>{let n;h(`Workbook: Get worksheets (${r})`);try{n=await t.dispatch(e.GetWorksheets,r)}catch(e){throw new AdapterError}return n.map((e=>b(t,e,a,o)))},J=(t,r)=>async()=>{h(`Workbook: Save (${r})`);try{return await t.dispatch(e.SaveWorkbook,r)}catch(e){throw new AdapterError}},K=(t,r)=>async a=>{h(`Workbook: Save as; filePath:${a} (${r})`);try{return await t.dispatch(e.SaveWorkbookAs,{filePath:a,objectId:r})}catch(e){throw new AdapterError}},X=t=>async()=>{let r;h("Application: Create workbook");try{r=await t.dispatch(e.CreateWorkbook)}catch(e){throw new AdapterError}return T(t,r,P,j)},Z=t=>async r=>{let a;h(`Application: Get workbook; id:${r}`);try{a=await t.dispatch(e.GetWorkbookById,r)}catch(e){throw new AdapterError}return T(t,a,P,j)},Y=t=>async()=>{let r;h("Application: Get workbooks");try{r=await t.dispatch(e.GetWorkbooks)}catch(e){throw new AdapterError}return r.map((e=>T(t,e,P,j)))},ee=t=>async r=>{h(`Application: Get worksheet; id:${r}`);try{r=await t.dispatch(e.GetWorksheetById,r)}catch(e){throw new AdapterError}return b(t,r,P,j)},te=t=>async r=>{let a;h(`Application: Open workbook; filePath:${r}`);try{a=await t.dispatch(e.OpenWorkbook,r)}catch(e){throw new AdapterError}return T(t,a,P,j)},re=t=>async(r=!0)=>{h(`Application: Quit; displayAlerts:${r}`);try{return await t.dispatch(e.QuitApplication,r)}catch(e){throw new AdapterError}};var ae,oe;!function(e){e.ExcelApplication="EXCEL-APP"}(ae||(ae={})),function(e){e[e.Info=1]="Info",e[e.Warn=2]="Warn",e[e.Error=3]="Error"}(oe||(oe={}));const ne="excel-adapter",se=w();let ie;const le=async(t=!1)=>{try{await(async e=>{try{h("Registering usage"),await fin.System.registerUsage({type:"integration-feature",data:{apiVersion:n,componentName:e}})}catch(t){p(`Unable to register usage for feature ${e}: ${null==t?void 0:t.message}`)}})(ae.ExcelApplication);{await(async()=>{var e;const t=null===(e=(await fin.Application.getCurrentSync().getManifest()).appAssets)||void 0===e?void 0:e.find((e=>e.alias===ne));if(t)return void p("Detected adapter package in app manifest appAssets",t);if(await de())return void h("Using existing adapter package");const r={alias:ne,src:`https://cdn.openfin.co/release/integrations/excel/${n}/OpenFin.Excel.zip`,target:"OpenFin.Excel.exe",version:n};h("Downloading adapter package",r);try{await fin.System.downloadAsset(r,(()=>{}))}catch(e){throw d("Unable to download adapter package"),e}})();const{securityRealm:e,port:r}=await fin.System.getRuntimeInfo();let{licenseKey:a}=await fin.Application.getCurrentSync().getManifest();a=null!=a?a:"NO_LICENSE_KEY";const o=fin.me.uuid;h("Initializing adapter",{adapterLoggingEnabled:t,channelName:se,licenseKey:a,port:r,securityRealm:e,uuid:o}),fin.System.launchExternalProcess({alias:ne,arguments:`${o} ${a} ${r} ${e} ${se} ${t}`})}const a=fin.InterApplicationBus.Channel.connect(se,{payload:{version:n}}),o=new Promise((e=>{setTimeout(e,2e4)})).then((()=>{throw new Error("Connection to adapter timed out")}));ie=await Promise.race([a,o]),h(`Connected to adapter ${ie.providerIdentity.uuid} on channel ${se}`),ie.register(e.LogMessage,ce),ie.register(e.EventFired,(r=ie,e=>{const{eventRegistrationId:t}=e,a=L.get(t);if(!a)throw new EventError(`No registered event listener found for id: ${t}`);h("Event payload received",e),O(a,r,e)}))}catch(e){const t=new InitializationError(void 0,e);throw d(t),t}var r;return{adapter:{channelName:se,version:n},createWorkbook:X(ie),getWorkbookById:Z(ie),getWorkbooks:Y(ie),getWorksheetById:ee(ie),openWorkbook:te(ie),quit:re(ie)}},ce=e=>{const{message:t,type:r}=e,a="[adapter]";switch(r){case oe.Error:d(t,a);break;case oe.Info:h(a,t);break;case oe.Warn:p(a,t)}},de=async()=>{try{const e=await fin.System.getAppAssetInfo({alias:ne});return e&&e.version===n}catch(e){return!1}};var he,pe,we,ke,ue;!function(e){e.Continuous="Continuous",e.Dash="Dash",e.DashDot="DashDot",e.DashDotDot="DashDotDot",e.Dot="Dot",e.Double="Double",e.SlantDashDot="SlantDashDot",e.None="None"}(he||(he={})),function(e){e.Center="Center",e.CenterAcrossSelection="CenterAcrossSelection",e.Distributed="Distributed",e.Fill="Fill",e.General="General",e.Justify="Justify",e.Left="Left",e.Right="Right"}(pe||(pe={})),function(e){e.Automatic="Automatic",e.Checker="Checker",e.CrissCross="CrissCross",e.Down="Down",e.Gray16="Gray16",e.Gray25="Gray25",e.Gray50="Gray50",e.Gray75="Gray75",e.Gray8="Gray8",e.Grid="Grid",e.Horizontal="Horizontal",e.LightDown="LightDown",e.LightHorizontal="LightHorizontal",e.LightUp="LightUp",e.LightVertical="LightVertical",e.LinearGradient="LinearGradient",e.None="None",e.RectangularGradient="RectangularGradient",e.SemiGray75="SemiGray75",e.Solid="Solid",e.Up="Up",e.Vertical="Vertical"}(we||(we={})),function(e){e.Bottom="Bottom",e.Center="Center",e.Distributed="Distributed",e.Justify="Justify",e.Top="Top"}(ke||(ke={})),function(e){e.And="And",e.Or="Or",e.Top10Items="Top10Items",e.Bottom10Items="Bottom10Items",e.Top10Percent="Top10Percent",e.Bottom10Percent="Bottom10Percent",e.FilterValues="FilterValues"}(ue||(ue={}));var ge=o.dq,me=o.MS,ye=o.xQ,Ce=o.sO,ve=o.Zu,Ee=o.I3,We=o.$U,Ae=o.i0,be=o.cX,fe=o._W,$e=o.U$,xe=o.U7,Ge=o.rd;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./client/src/excel.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _finos_fdc3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @finos/fdc3 */ "../../node_modules/@finos/fdc3/dist/fdc3.esm.js");
/* harmony import */ var _openfin_excel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openfin/excel */ "../../node_modules/@openfin/excel/openfin.excel.js");


const KNOWN_INSTRUMENTS = ["TSLA", "MSFT", "AAPL"];
let excel;
let openWorkbooks;
let selectedWorkbookIndex;
let openWorksheets;
let selectedWorksheetIndex;
document.addEventListener("DOMContentLoaded", async () => {
    try {
        await init();
    }
    catch (error) {
        console.error(error);
    }
});
async function init() {
    try {
        const resultsContainer = document.querySelector("#results-container");
        resultsContainer.style.display = "none";
        excel = await (0,_openfin_excel__WEBPACK_IMPORTED_MODULE_1__.getExcelApplication)();
        await populateWorkbooks();
        const openExcelButton = document.querySelector("#open-excel");
        openExcelButton.addEventListener("click", async () => {
            await openExcel();
        });
        const refreshWorkbookButton = document.querySelector("#workbook-refresh");
        refreshWorkbookButton.addEventListener("click", async () => populateWorkbooks());
        const refreshWorksheetButton = document.querySelector("#worksheet-refresh");
        refreshWorksheetButton.addEventListener("click", async () => populateWorksheets());
        const openWorkbooksSelect = document.querySelector("#workbooks");
        openWorkbooksSelect.addEventListener("change", async (e) => selectWorkbook(e.target.value));
        const openWorksheetsSelect = document.querySelector("#worksheets");
        openWorksheetsSelect.addEventListener("change", async (e) => selectWorksheet(e.target.value));
        const setValueButton = document.querySelector("#set-value");
        setValueButton.addEventListener("click", async () => {
            await setCellValue();
        });
    }
    catch (err) {
        showError(err);
    }
}
function showError(err) {
    const errDom = document.querySelector("#error");
    errDom.innerHTML = err.message;
}
async function openExcel() {
    try {
        // Open the select work book and sheet
        // if anything throws an exception just open a new workbook
        await selectWorkbook(openWorkbooks[selectedWorkbookIndex].name);
        await selectWorksheet(openWorksheets[selectedWorksheetIndex].name);
    }
    catch {
        await excel.createWorkbook();
        await populateWorkbooks();
    }
}
async function populateWorkbooks() {
    if (excel) {
        selectedWorkbookIndex = undefined;
        const refreshButton = document.querySelector("#workbook-refresh");
        refreshButton.disabled = true;
        const select = document.querySelector("#workbooks");
        select.disabled = true;
        select.innerHTML = "";
        openWorkbooks = [];
        try {
            const workbooks = await excel.getWorkbooks();
            for (const book of workbooks) {
                const name = await book.getName();
                openWorkbooks.push({
                    book,
                    name
                });
            }
            const optionEmpty = document.createElement("option");
            optionEmpty.innerHTML = "----Select workbook----";
            optionEmpty.value = "";
            optionEmpty.selected = true;
            optionEmpty.disabled = true;
            select.append(optionEmpty);
            for (const openWorkbook of openWorkbooks) {
                const option = document.createElement("option");
                option.innerHTML = openWorkbook.name;
                option.value = openWorkbook.name;
                select.append(option);
            }
        }
        catch (err) {
            console.error(err);
            showError(err);
        }
        finally {
            select.disabled = false;
            refreshButton.disabled = false;
        }
    }
}
async function selectWorkbook(name) {
    const newWorkbookIndex = openWorkbooks.findIndex((w) => w.name === name);
    if (newWorkbookIndex !== selectedWorkbookIndex) {
        selectedWorkbookIndex = newWorkbookIndex;
        if (newWorkbookIndex >= 0) {
            await openWorkbooks[selectedWorkbookIndex].book.activate();
        }
    }
    await populateWorksheets();
}
async function populateWorksheets() {
    if (excel) {
        selectedWorksheetIndex = undefined;
        const refreshButton = document.querySelector("#worksheet-refresh");
        refreshButton.disabled = true;
        const select = document.querySelector("#worksheets");
        select.disabled = true;
        select.innerHTML = "";
        openWorksheets = [];
        const workbook = openWorkbooks[selectedWorkbookIndex];
        if (workbook) {
            try {
                const sheets = await workbook.book.getWorksheets();
                for (const sheet of sheets) {
                    const name = await sheet.getName();
                    openWorksheets.push({
                        sheet,
                        name
                    });
                }
                const optionEmpty = document.createElement("option");
                optionEmpty.innerHTML = "----Select worksheet----";
                optionEmpty.value = "";
                optionEmpty.selected = true;
                optionEmpty.disabled = true;
                select.append(optionEmpty);
                for (const openWorksheet of openWorksheets) {
                    const option = document.createElement("option");
                    option.innerHTML = openWorksheet.name;
                    option.value = openWorksheet.name;
                    select.append(option);
                }
            }
            catch (err) {
                console.error(err);
                showError(err);
            }
            finally {
                select.disabled = false;
                refreshButton.disabled = false;
            }
        }
    }
}
async function selectWorksheet(name) {
    const newWorksheetIndex = openWorksheets.findIndex((w) => w.name === name);
    if (newWorksheetIndex !== selectedWorksheetIndex) {
        const oldWorksheet = openWorksheets[selectedWorksheetIndex];
        if (oldWorksheet) {
            await oldWorksheet.sheet.removeEventListener(handleCellChange);
        }
        selectedWorksheetIndex = newWorksheetIndex;
        if (selectedWorksheetIndex >= 0) {
            await openWorksheets[selectedWorksheetIndex].sheet.activate();
            await openWorksheets[selectedWorksheetIndex].sheet.addEventListener("change", handleCellChange);
            const resultsContainer = document.querySelector("#results-container");
            resultsContainer.style.display = "flex";
            document.querySelector("#cell-location").disabled = false;
            document.querySelector("#cell-value").disabled = false;
            document.querySelector("#set-value").disabled = false;
        }
    }
}
async function handleCellChange(cells) {
    const cellContainer = document.querySelector("#cell-changes-container");
    cellContainer.innerHTML = JSON.stringify(cells, undefined, "  ");
    for (const cell of cells) {
        if (KNOWN_INSTRUMENTS.includes(cell.value)) {
            await broadcastInstrument(cell.value);
        }
    }
}
async function setCellValue() {
    if (openWorksheets && selectedWorksheetIndex !== undefined) {
        const cellLocation = document.querySelector("#cell-location");
        const cellValue = document.querySelector("#cell-value");
        await openWorksheets[selectedWorksheetIndex].sheet.setCellValues(cellLocation.value, [[cellValue.value]]);
    }
}
async function broadcastInstrument(instrument) {
    const broadcastElement = document.querySelector("#broadcast-instrument");
    if (window.fdc3) {
        try {
            const fdcInstrument = {
                type: "fdc3.instrument",
                id: {
                    ticker: instrument
                }
            };
            const channel = await (0,_finos_fdc3__WEBPACK_IMPORTED_MODULE_0__.getCurrentChannel)();
            channel.broadcast(fdcInstrument);
            broadcastElement.value = instrument;
        }
        catch (err) {
            broadcastElement.value = err.message;
        }
    }
    else {
        broadcastElement.textContent = "No FD3 Channel available";
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOEJBQThCOztBQUUvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0NBQW9DOztBQUVyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0NBQW9DOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixhQUFhO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLE1BQU07QUFDTixlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0VBQXNFLGFBQWE7QUFDbkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNB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Z0JBQWdCLENBQUMsV0FBVyxHQUFHLDBCQUEwQixDQUFDO0tBQzFEO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsLy4uLy4uL25vZGVfbW9kdWxlcy9AZmlub3MvZmRjMy9kaXN0L2ZkYzMuZXNtLmpzIiwid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsLy4uLy4uL25vZGVfbW9kdWxlcy9Ab3BlbmZpbi9leGNlbC9vcGVuZmluLmV4Y2VsLmpzIiwid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9pbnRlZ3JhdGlvbi1leGNlbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvLi9jbGllbnQvc3JjL2V4Y2VsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxyXG4gKiBDb3B5cmlnaHQgMjAxOSBGSU5PUyBGREMzIGNvbnRyaWJ1dG9ycyAtIHNlZSBOT1RJQ0UgZmlsZVxyXG4gKi9cbnZhciBPcGVuRXJyb3I7XG5cbihmdW5jdGlvbiAoT3BlbkVycm9yKSB7XG4gIE9wZW5FcnJvcltcIkFwcE5vdEZvdW5kXCJdID0gXCJBcHBOb3RGb3VuZFwiO1xuICBPcGVuRXJyb3JbXCJFcnJvck9uTGF1bmNoXCJdID0gXCJFcnJvck9uTGF1bmNoXCI7XG4gIE9wZW5FcnJvcltcIkFwcFRpbWVvdXRcIl0gPSBcIkFwcFRpbWVvdXRcIjtcbiAgT3BlbkVycm9yW1wiUmVzb2x2ZXJVbmF2YWlsYWJsZVwiXSA9IFwiUmVzb2x2ZXJVbmF2YWlsYWJsZVwiO1xufSkoT3BlbkVycm9yIHx8IChPcGVuRXJyb3IgPSB7fSkpO1xuXG52YXIgUmVzb2x2ZUVycm9yO1xuXG4oZnVuY3Rpb24gKFJlc29sdmVFcnJvcikge1xuICBSZXNvbHZlRXJyb3JbXCJOb0FwcHNGb3VuZFwiXSA9IFwiTm9BcHBzRm91bmRcIjtcbiAgUmVzb2x2ZUVycm9yW1wiUmVzb2x2ZXJVbmF2YWlsYWJsZVwiXSA9IFwiUmVzb2x2ZXJVbmF2YWlsYWJsZVwiO1xuICBSZXNvbHZlRXJyb3JbXCJSZXNvbHZlclRpbWVvdXRcIl0gPSBcIlJlc29sdmVyVGltZW91dFwiO1xufSkoUmVzb2x2ZUVycm9yIHx8IChSZXNvbHZlRXJyb3IgPSB7fSkpO1xuXG52YXIgQ2hhbm5lbEVycm9yO1xuXG4oZnVuY3Rpb24gKENoYW5uZWxFcnJvcikge1xuICBDaGFubmVsRXJyb3JbXCJOb0NoYW5uZWxGb3VuZFwiXSA9IFwiTm9DaGFubmVsRm91bmRcIjtcbiAgQ2hhbm5lbEVycm9yW1wiQWNjZXNzRGVuaWVkXCJdID0gXCJBY2Nlc3NEZW5pZWRcIjtcbiAgQ2hhbm5lbEVycm9yW1wiQ3JlYXRpb25GYWlsZWRcIl0gPSBcIkNyZWF0aW9uRmFpbGVkXCI7XG59KShDaGFubmVsRXJyb3IgfHwgKENoYW5uZWxFcnJvciA9IHt9KSk7XG5cbmZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIHJ1bnRpbWVfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQkMTsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQkMSkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkJDE7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCQxO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQkMTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQkMSwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQkMTtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZCQxO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkJDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQkMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQkMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICAgbW9kdWxlLmV4cG9ydHMgXG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG59KTtcblxudmFyIERFRkFVTFRfVElNRU9VVCA9IDUwMDA7XG52YXIgVW5hdmFpbGFibGVFcnJvciA9IC8qI19fUFVSRV9fKi9uZXcgRXJyb3IoJ0ZEQzMgRGVza3RvcEFnZW50IG5vdCBhdmFpbGFibGUgYXQgYHdpbmRvdy5mZGMzYC4nKTtcbnZhciBUaW1lb3V0RXJyb3IgPSAvKiNfX1BVUkVfXyovbmV3IEVycm9yKCdUaW1lZCBvdXQgd2FpdGluZyBmb3IgYGZkYzNSZWFkeWAgZXZlbnQuJyk7XG52YXIgVW5leHBlY3RlZEVycm9yID0gLyojX19QVVJFX18qL25ldyBFcnJvcignYGZkYzNSZWFkeWAgZXZlbnQgZmlyZWQsIGJ1dCBgd2luZG93LmZkYzNgIG5vdCBzZXQgdG8gRGVza3RvcEFnZW50LicpO1xuXG5mdW5jdGlvbiByZWplY3RJZk5vR2xvYmFsKGYpIHtcbiAgcmV0dXJuIHdpbmRvdy5mZGMzID8gZigpIDogUHJvbWlzZS5yZWplY3QoVW5hdmFpbGFibGVFcnJvcik7XG59XG5cbmZ1bmN0aW9uIHRocm93SWZOb0dsb2JhbChmKSB7XG4gIGlmICghd2luZG93LmZkYzMpIHtcbiAgICB0aHJvdyBVbmF2YWlsYWJsZUVycm9yO1xuICB9XG5cbiAgcmV0dXJuIGYoKTtcbn1cblxudmFyIGZkYzNSZWFkeSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmID0gLyojX19QVVJFX18qL19hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovcnVudGltZV8xLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSh3YWl0Rm9yTXMpIHtcbiAgICByZXR1cm4gcnVudGltZV8xLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBpZiAod2FpdEZvck1zID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgd2FpdEZvck1zID0gREVGQVVMVF9USU1FT1VUO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgLy8gaWYgdGhlIGdsb2JhbCBpcyBhbHJlYWR5IGF2YWlsYWJsZSByZXNvbHZlIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgIGlmICh3aW5kb3cuZmRjMykge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBpdHMgbm90IGF2YWlsYWJsZSBzZXR1cCBhIHRpbWVvdXQgdG8gcmV0dXJuIGEgcmVqZWN0ZWQgcHJvbWlzZVxuICAgICAgICAgICAgICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmZkYzMgPyByZXNvbHZlKCkgOiByZWplY3QoVGltZW91dEVycm9yKTtcbiAgICAgICAgICAgICAgICB9LCB3YWl0Rm9yTXMpOyAvLyBsaXN0ZW4gZm9yIHRoZSBmZGMzUmVhZHkgZXZlbnRcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmZGMzUmVhZHknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cuZmRjMyA/IHJlc29sdmUoKSA6IHJlamVjdChVbmV4cGVjdGVkRXJyb3IpO1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIG9uY2U6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBmZGMzUmVhZHkoX3gpIHtcbiAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpO1xuZnVuY3Rpb24gb3BlbihhcHAsIGNvbnRleHQpIHtcbiAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5vcGVuKGFwcCwgY29udGV4dCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gZmluZEludGVudChpbnRlbnQsIGNvbnRleHQpIHtcbiAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5maW5kSW50ZW50KGludGVudCwgY29udGV4dCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gZmluZEludGVudHNCeUNvbnRleHQoY29udGV4dCkge1xuICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLmZpbmRJbnRlbnRzQnlDb250ZXh0KGNvbnRleHQpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGJyb2FkY2FzdChjb250ZXh0KSB7XG4gIHRocm93SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLmJyb2FkY2FzdChjb250ZXh0KTtcbiAgfSk7XG59XG5mdW5jdGlvbiByYWlzZUludGVudChpbnRlbnQsIGNvbnRleHQsIGFwcCkge1xuICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLnJhaXNlSW50ZW50KGludGVudCwgY29udGV4dCwgYXBwKTtcbiAgfSk7XG59XG5mdW5jdGlvbiByYWlzZUludGVudEZvckNvbnRleHQoY29udGV4dCwgYXBwKSB7XG4gIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMucmFpc2VJbnRlbnRGb3JDb250ZXh0KGNvbnRleHQsIGFwcCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gYWRkSW50ZW50TGlzdGVuZXIoaW50ZW50LCBoYW5kbGVyKSB7XG4gIHJldHVybiB0aHJvd0lmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5hZGRJbnRlbnRMaXN0ZW5lcihpbnRlbnQsIGhhbmRsZXIpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGFkZENvbnRleHRMaXN0ZW5lcihjb250ZXh0VHlwZU9ySGFuZGxlciwgaGFuZGxlcikge1xuICBpZiAodHlwZW9mIGNvbnRleHRUeXBlT3JIYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRocm93SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gd2luZG93LmZkYzMuYWRkQ29udGV4dExpc3RlbmVyKGNvbnRleHRUeXBlT3JIYW5kbGVyLCBoYW5kbGVyKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhyb3dJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuZmRjMy5hZGRDb250ZXh0TGlzdGVuZXIoY29udGV4dFR5cGVPckhhbmRsZXIpO1xuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiBnZXRTeXN0ZW1DaGFubmVscygpIHtcbiAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5nZXRTeXN0ZW1DaGFubmVscygpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGpvaW5DaGFubmVsKGNoYW5uZWxJZCkge1xuICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLmpvaW5DaGFubmVsKGNoYW5uZWxJZCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0T3JDcmVhdGVDaGFubmVsKGNoYW5uZWxJZCkge1xuICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLmdldE9yQ3JlYXRlQ2hhbm5lbChjaGFubmVsSWQpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGdldEN1cnJlbnRDaGFubmVsKCkge1xuICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLmdldEN1cnJlbnRDaGFubmVsKCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbGVhdmVDdXJyZW50Q2hhbm5lbCgpIHtcbiAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5sZWF2ZUN1cnJlbnRDaGFubmVsKCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0SW5mbygpIHtcbiAgcmV0dXJuIHRocm93SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLmdldEluZm8oKTtcbiAgfSk7XG59XG4vKipcclxuICogQ29tcGFyZSBudW1lcmljIHNlbXZlciB2ZXJzaW9uIG51bWJlciBzdHJpbmdzIChpbiB0aGUgZm9ybSBgMS4yLjNgKS5cclxuICpcclxuICogUmV0dXJucyBgLTFgIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBhIGxvd2VyIHZlcnNpb24gbnVtYmVyIHRoYW4gdGhlIHNlY29uZCxcclxuICogYDFgIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBncmVhdGVyIHRoYW4gdGhlIHNlY29uZCwgMCBpZiB0aGUgYXJndW1lbnRzIGFyZVxyXG4gKiBlcXVhbCBhbmQgYG51bGxgIGlmIGFuIGVycm9yIG9jY3VycmVkIGR1cmluZyB0aGUgY29tcGFyaXNvbi5cclxuICpcclxuICogQHBhcmFtIGFcclxuICogQHBhcmFtIGJcclxuICovXG5cbnZhciBjb21wYXJlVmVyc2lvbk51bWJlcnMgPSBmdW5jdGlvbiBjb21wYXJlVmVyc2lvbk51bWJlcnMoYSwgYikge1xuICB0cnkge1xuICAgIHZhciBhVmVyQXJyID0gYS5zcGxpdCgnLicpLm1hcChOdW1iZXIpO1xuICAgIHZhciBiVmVyQXJyID0gYi5zcGxpdCgnLicpLm1hcChOdW1iZXIpO1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IE1hdGgubWF4KGFWZXJBcnIubGVuZ3RoLCBiVmVyQXJyLmxlbmd0aCk7IGluZGV4KyspIHtcbiAgICAgIC8qIElmIG9uZSB2ZXJzaW9uIG51bWJlciBoYXMgbW9yZSBkaWdpdHMgYW5kIHRoZSBvdGhlciBkb2VzIG5vdCwgYW5kIHRoZXkgYXJlIG90aGVyd2lzZSBlcXVhbCxcclxuICAgICAgICAgYXNzdW1lIHRoZSBsb25nZXIgaXMgZ3JlYXRlci4gRS5nLiAxLjEuMSA+IDEuMSAqL1xuICAgICAgaWYgKGluZGV4ID09PSBhVmVyQXJyLmxlbmd0aCB8fCBhVmVyQXJyW2luZGV4XSA8IGJWZXJBcnJbaW5kZXhdKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IGJWZXJBcnIubGVuZ3RoIHx8IGFWZXJBcnJbaW5kZXhdID4gYlZlckFycltpbmRleF0pIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gY29tcGFyZSB2ZXJzaW9uIHN0cmluZ3MnLCBlKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcbi8qKlxyXG4gKiBDaGVjayBpZiB0aGUgRkRDMyB2ZXJzaW9uIGluIGFuIEltcGxlbWVudGF0aW9uTWV0YWRhdGEgb2JqZWN0IGlzIGdyZWF0ZXIgdGhhblxyXG4gKiBvciBlcXVhbCB0byB0aGUgc3VwcGxpZWQgbnVtZXJpYyBzZW12ZXIgdmVyc2lvbiBudW1iZXIgc3RyaW5nIChpbiB0aGUgZm9ybSBgMS4yLjNgKS5cclxuICpcclxuICogUmV0dXJucyBhIGJvb2xlYW4gb3IgbnVsbCBpZiBhbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBjb21wYXJpbmcgdGhlIHZlcnNpb24gbnVtYmVycy5cclxuICpcclxuICogQHBhcmFtIG1ldGFkYXRhXHJcbiAqIEBwYXJhbSB2ZXJzaW9uXHJcbiAqL1xuXG52YXIgdmVyc2lvbklzQXRMZWFzdCA9IGZ1bmN0aW9uIHZlcnNpb25Jc0F0TGVhc3QobWV0YWRhdGEsIHZlcnNpb24pIHtcbiAgdmFyIGNvbXBhcmlzb24gPSBjb21wYXJlVmVyc2lvbk51bWJlcnMobWV0YWRhdGEuZmRjM1ZlcnNpb24sIHZlcnNpb24pO1xuICByZXR1cm4gY29tcGFyaXNvbiA9PT0gbnVsbCA/IG51bGwgOiBjb21wYXJpc29uID49IDAgPyB0cnVlIDogZmFsc2U7XG59O1xuXG52YXIgQ29udGV4dFR5cGVzO1xuXG4oZnVuY3Rpb24gKENvbnRleHRUeXBlcykge1xuICBDb250ZXh0VHlwZXNbXCJDb250YWN0XCJdID0gXCJmZGMzLmNvbnRhY3RcIjtcbiAgQ29udGV4dFR5cGVzW1wiQ29udGFjdExpc3RcIl0gPSBcImZkYzMuY29udGFjdExpc3RcIjtcbiAgQ29udGV4dFR5cGVzW1wiQ291bnRyeVwiXSA9IFwiZmRjMy5jb3VudHJ5XCI7XG4gIENvbnRleHRUeXBlc1tcIkluc3RydW1lbnRcIl0gPSBcImZkYzMuaW5zdHJ1bWVudFwiO1xuICBDb250ZXh0VHlwZXNbXCJPcmdhbml6YXRpb25cIl0gPSBcImZkYzMub3JnYW5pemF0aW9uXCI7XG4gIENvbnRleHRUeXBlc1tcIlBvcnRmb2xpb1wiXSA9IFwiZmRjMy5wb3J0Zm9saW9cIjtcbiAgQ29udGV4dFR5cGVzW1wiUG9zaXRpb25cIl0gPSBcImZkYzMucG9zaXRpb25cIjtcbn0pKENvbnRleHRUeXBlcyB8fCAoQ29udGV4dFR5cGVzID0ge30pKTtcblxuLy8gVG8gcGFyc2UgdGhpcyBkYXRhOlxuLy9cbi8vICAgaW1wb3J0IHsgQ29udmVydCwgQ29udGV4dCwgQ29udGFjdCwgQ29udGFjdExpc3QsIEluc3RydW1lbnQsIEluc3RydW1lbnRMaXN0LCBDb3VudHJ5LCBPcmdhbml6YXRpb24sIFBvcnRmb2xpbywgUG9zaXRpb24gfSBmcm9tIFwiLi9maWxlXCI7XG4vL1xuLy8gICBjb25zdCBjb250ZXh0ID0gQ29udmVydC50b0NvbnRleHQoanNvbik7XG4vLyAgIGNvbnN0IGNvbnRhY3QgPSBDb252ZXJ0LnRvQ29udGFjdChqc29uKTtcbi8vICAgY29uc3QgY29udGFjdExpc3QgPSBDb252ZXJ0LnRvQ29udGFjdExpc3QoanNvbik7XG4vLyAgIGNvbnN0IGluc3RydW1lbnQgPSBDb252ZXJ0LnRvSW5zdHJ1bWVudChqc29uKTtcbi8vICAgY29uc3QgaW5zdHJ1bWVudExpc3QgPSBDb252ZXJ0LnRvSW5zdHJ1bWVudExpc3QoanNvbik7XG4vLyAgIGNvbnN0IGNvdW50cnkgPSBDb252ZXJ0LnRvQ291bnRyeShqc29uKTtcbi8vICAgY29uc3Qgb3JnYW5pemF0aW9uID0gQ29udmVydC50b09yZ2FuaXphdGlvbihqc29uKTtcbi8vICAgY29uc3QgcG9ydGZvbGlvID0gQ29udmVydC50b1BvcnRmb2xpbyhqc29uKTtcbi8vICAgY29uc3QgcG9zaXRpb24gPSBDb252ZXJ0LnRvUG9zaXRpb24oanNvbik7XG4vL1xuLy8gVGhlc2UgZnVuY3Rpb25zIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlIEpTT04gZG9lc24ndFxuLy8gbWF0Y2ggdGhlIGV4cGVjdGVkIGludGVyZmFjZSwgZXZlbiBpZiB0aGUgSlNPTiBpcyB2YWxpZC5cbi8vIENvbnZlcnRzIEpTT04gc3RyaW5ncyB0by9mcm9tIHlvdXIgdHlwZXNcbi8vIGFuZCBhc3NlcnRzIHRoZSByZXN1bHRzIG9mIEpTT04ucGFyc2UgYXQgcnVudGltZVxudmFyIENvbnZlcnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb252ZXJ0KCkge31cblxuICBDb252ZXJ0LnRvQ29udGV4dCA9IGZ1bmN0aW9uIHRvQ29udGV4dChqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignQ29udGV4dCcpKTtcbiAgfTtcblxuICBDb252ZXJ0LmNvbnRleHRUb0pzb24gPSBmdW5jdGlvbiBjb250ZXh0VG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignQ29udGV4dCcpKSwgbnVsbCwgMik7XG4gIH07XG5cbiAgQ29udmVydC50b0NvbnRhY3QgPSBmdW5jdGlvbiB0b0NvbnRhY3QoanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ0NvbnRhY3QnKSk7XG4gIH07XG5cbiAgQ29udmVydC5jb250YWN0VG9Kc29uID0gZnVuY3Rpb24gY29udGFjdFRvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ0NvbnRhY3QnKSksIG51bGwsIDIpO1xuICB9O1xuXG4gIENvbnZlcnQudG9Db250YWN0TGlzdCA9IGZ1bmN0aW9uIHRvQ29udGFjdExpc3QoanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ0NvbnRhY3RMaXN0JykpO1xuICB9O1xuXG4gIENvbnZlcnQuY29udGFjdExpc3RUb0pzb24gPSBmdW5jdGlvbiBjb250YWN0TGlzdFRvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ0NvbnRhY3RMaXN0JykpLCBudWxsLCAyKTtcbiAgfTtcblxuICBDb252ZXJ0LnRvSW5zdHJ1bWVudCA9IGZ1bmN0aW9uIHRvSW5zdHJ1bWVudChqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignSW5zdHJ1bWVudCcpKTtcbiAgfTtcblxuICBDb252ZXJ0Lmluc3RydW1lbnRUb0pzb24gPSBmdW5jdGlvbiBpbnN0cnVtZW50VG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignSW5zdHJ1bWVudCcpKSwgbnVsbCwgMik7XG4gIH07XG5cbiAgQ29udmVydC50b0luc3RydW1lbnRMaXN0ID0gZnVuY3Rpb24gdG9JbnN0cnVtZW50TGlzdChqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignSW5zdHJ1bWVudExpc3QnKSk7XG4gIH07XG5cbiAgQ29udmVydC5pbnN0cnVtZW50TGlzdFRvSnNvbiA9IGZ1bmN0aW9uIGluc3RydW1lbnRMaXN0VG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignSW5zdHJ1bWVudExpc3QnKSksIG51bGwsIDIpO1xuICB9O1xuXG4gIENvbnZlcnQudG9Db3VudHJ5ID0gZnVuY3Rpb24gdG9Db3VudHJ5KGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdDb3VudHJ5JykpO1xuICB9O1xuXG4gIENvbnZlcnQuY291bnRyeVRvSnNvbiA9IGZ1bmN0aW9uIGNvdW50cnlUb0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdDb3VudHJ5JykpLCBudWxsLCAyKTtcbiAgfTtcblxuICBDb252ZXJ0LnRvT3JnYW5pemF0aW9uID0gZnVuY3Rpb24gdG9Pcmdhbml6YXRpb24oanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ09yZ2FuaXphdGlvbicpKTtcbiAgfTtcblxuICBDb252ZXJ0Lm9yZ2FuaXphdGlvblRvSnNvbiA9IGZ1bmN0aW9uIG9yZ2FuaXphdGlvblRvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ09yZ2FuaXphdGlvbicpKSwgbnVsbCwgMik7XG4gIH07XG5cbiAgQ29udmVydC50b1BvcnRmb2xpbyA9IGZ1bmN0aW9uIHRvUG9ydGZvbGlvKGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdQb3J0Zm9saW8nKSk7XG4gIH07XG5cbiAgQ29udmVydC5wb3J0Zm9saW9Ub0pzb24gPSBmdW5jdGlvbiBwb3J0Zm9saW9Ub0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdQb3J0Zm9saW8nKSksIG51bGwsIDIpO1xuICB9O1xuXG4gIENvbnZlcnQudG9Qb3NpdGlvbiA9IGZ1bmN0aW9uIHRvUG9zaXRpb24oanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ1Bvc2l0aW9uJykpO1xuICB9O1xuXG4gIENvbnZlcnQucG9zaXRpb25Ub0pzb24gPSBmdW5jdGlvbiBwb3NpdGlvblRvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ1Bvc2l0aW9uJykpLCBudWxsLCAyKTtcbiAgfTtcblxuICByZXR1cm4gQ29udmVydDtcbn0oKTtcblxuZnVuY3Rpb24gaW52YWxpZFZhbHVlKHR5cCwgdmFsLCBrZXkpIHtcbiAgaWYgKGtleSA9PT0gdm9pZCAwKSB7XG4gICAga2V5ID0gJyc7XG4gIH1cblxuICBpZiAoa2V5KSB7XG4gICAgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBrZXkgXFxcIlwiICsga2V5ICsgXCJcXFwiLiBFeHBlY3RlZCB0eXBlIFwiICsgSlNPTi5zdHJpbmdpZnkodHlwKSArIFwiIGJ1dCBnb3QgXCIgKyBKU09OLnN0cmluZ2lmeSh2YWwpKTtcbiAgfVxuXG4gIHRocm93IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBcIiArIEpTT04uc3RyaW5naWZ5KHZhbCkgKyBcIiBmb3IgdHlwZSBcIiArIEpTT04uc3RyaW5naWZ5KHR5cCkpO1xufVxuXG5mdW5jdGlvbiBqc29uVG9KU1Byb3BzKHR5cCkge1xuICBpZiAodHlwLmpzb25Ub0pTID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgbWFwID0ge307XG4gICAgdHlwLnByb3BzLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBtYXBbcC5qc29uXSA9IHtcbiAgICAgICAga2V5OiBwLmpzLFxuICAgICAgICB0eXA6IHAudHlwXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHR5cC5qc29uVG9KUyA9IG1hcDtcbiAgfVxuXG4gIHJldHVybiB0eXAuanNvblRvSlM7XG59XG5cbmZ1bmN0aW9uIGpzVG9KU09OUHJvcHModHlwKSB7XG4gIGlmICh0eXAuanNUb0pTT04gPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICB0eXAucHJvcHMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIG1hcFtwLmpzXSA9IHtcbiAgICAgICAga2V5OiBwLmpzb24sXG4gICAgICAgIHR5cDogcC50eXBcbiAgICAgIH07XG4gICAgfSk7XG4gICAgdHlwLmpzVG9KU09OID0gbWFwO1xuICB9XG5cbiAgcmV0dXJuIHR5cC5qc1RvSlNPTjtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtKHZhbCwgdHlwLCBnZXRQcm9wcywga2V5KSB7XG4gIGlmIChrZXkgPT09IHZvaWQgMCkge1xuICAgIGtleSA9ICcnO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNmb3JtUHJpbWl0aXZlKHR5cCwgdmFsKSB7XG4gICAgaWYgKHR5cGVvZiB0eXAgPT09IHR5cGVvZiB2YWwpIHJldHVybiB2YWw7XG4gICAgcmV0dXJuIGludmFsaWRWYWx1ZSh0eXAsIHZhbCwga2V5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybVVuaW9uKHR5cHMsIHZhbCkge1xuICAgIC8vIHZhbCBtdXN0IHZhbGlkYXRlIGFnYWluc3Qgb25lIHR5cCBpbiB0eXBzXG4gICAgdmFyIGwgPSB0eXBzLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgX3R5cCA9IHR5cHNbaV07XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm0odmFsLCBfdHlwLCBnZXRQcm9wcyk7XG4gICAgICB9IGNhdGNoIChfKSB7fVxuICAgIH1cblxuICAgIHJldHVybiBpbnZhbGlkVmFsdWUodHlwcywgdmFsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybUVudW0oY2FzZXMsIHZhbCkge1xuICAgIGlmIChjYXNlcy5pbmRleE9mKHZhbCkgIT09IC0xKSByZXR1cm4gdmFsO1xuICAgIHJldHVybiBpbnZhbGlkVmFsdWUoY2FzZXMsIHZhbCk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2Zvcm1BcnJheSh0eXAsIHZhbCkge1xuICAgIC8vIHZhbCBtdXN0IGJlIGFuIGFycmF5IHdpdGggbm8gaW52YWxpZCBlbGVtZW50c1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWwpKSByZXR1cm4gaW52YWxpZFZhbHVlKCdhcnJheScsIHZhbCk7XG4gICAgcmV0dXJuIHZhbC5tYXAoZnVuY3Rpb24gKGVsKSB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtKGVsLCB0eXAsIGdldFByb3BzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybURhdGUodmFsKSB7XG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGQgPSBuZXcgRGF0ZSh2YWwpO1xuXG4gICAgaWYgKGlzTmFOKGQudmFsdWVPZigpKSkge1xuICAgICAgcmV0dXJuIGludmFsaWRWYWx1ZSgnRGF0ZScsIHZhbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGQ7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2Zvcm1PYmplY3QocHJvcHMsIGFkZGl0aW9uYWwsIHZhbCkge1xuICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXR1cm4gaW52YWxpZFZhbHVlKCdvYmplY3QnLCB2YWwpO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgcHJvcCA9IHByb3BzW2tleV07XG4gICAgICB2YXIgdiA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWwsIGtleSkgPyB2YWxba2V5XSA6IHVuZGVmaW5lZDtcbiAgICAgIHJlc3VsdFtwcm9wLmtleV0gPSB0cmFuc2Zvcm0odiwgcHJvcC50eXAsIGdldFByb3BzLCBwcm9wLmtleSk7XG4gICAgfSk7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBrZXkpKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gdHJhbnNmb3JtKHZhbFtrZXldLCBhZGRpdGlvbmFsLCBnZXRQcm9wcywga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKHR5cCA9PT0gJ2FueScpIHJldHVybiB2YWw7XG5cbiAgaWYgKHR5cCA9PT0gbnVsbCkge1xuICAgIGlmICh2YWwgPT09IG51bGwpIHJldHVybiB2YWw7XG4gICAgcmV0dXJuIGludmFsaWRWYWx1ZSh0eXAsIHZhbCk7XG4gIH1cblxuICBpZiAodHlwID09PSBmYWxzZSkgcmV0dXJuIGludmFsaWRWYWx1ZSh0eXAsIHZhbCk7XG5cbiAgd2hpbGUgKHR5cGVvZiB0eXAgPT09ICdvYmplY3QnICYmIHR5cC5yZWYgIT09IHVuZGVmaW5lZCkge1xuICAgIHR5cCA9IHR5cGVNYXBbdHlwLnJlZl07XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh0eXApKSByZXR1cm4gdHJhbnNmb3JtRW51bSh0eXAsIHZhbCk7XG5cbiAgaWYgKHR5cGVvZiB0eXAgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHR5cC5oYXNPd25Qcm9wZXJ0eSgndW5pb25NZW1iZXJzJykgPyB0cmFuc2Zvcm1Vbmlvbih0eXAudW5pb25NZW1iZXJzLCB2YWwpIDogdHlwLmhhc093blByb3BlcnR5KCdhcnJheUl0ZW1zJykgPyB0cmFuc2Zvcm1BcnJheSh0eXAuYXJyYXlJdGVtcywgdmFsKSA6IHR5cC5oYXNPd25Qcm9wZXJ0eSgncHJvcHMnKSA/IHRyYW5zZm9ybU9iamVjdChnZXRQcm9wcyh0eXApLCB0eXAuYWRkaXRpb25hbCwgdmFsKSA6IGludmFsaWRWYWx1ZSh0eXAsIHZhbCk7XG4gIH0gLy8gTnVtYmVycyBjYW4gYmUgcGFyc2VkIGJ5IERhdGUgYnV0IHNob3VsZG4ndCBiZS5cblxuXG4gIGlmICh0eXAgPT09IERhdGUgJiYgdHlwZW9mIHZhbCAhPT0gJ251bWJlcicpIHJldHVybiB0cmFuc2Zvcm1EYXRlKHZhbCk7XG4gIHJldHVybiB0cmFuc2Zvcm1QcmltaXRpdmUodHlwLCB2YWwpO1xufVxuXG5mdW5jdGlvbiBjYXN0KHZhbCwgdHlwKSB7XG4gIHJldHVybiB0cmFuc2Zvcm0odmFsLCB0eXAsIGpzb25Ub0pTUHJvcHMpO1xufVxuXG5mdW5jdGlvbiB1bmNhc3QodmFsLCB0eXApIHtcbiAgcmV0dXJuIHRyYW5zZm9ybSh2YWwsIHR5cCwganNUb0pTT05Qcm9wcyk7XG59XG5cbmZ1bmN0aW9uIGEodHlwKSB7XG4gIHJldHVybiB7XG4gICAgYXJyYXlJdGVtczogdHlwXG4gIH07XG59XG5cbmZ1bmN0aW9uIHUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB0eXBzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHR5cHNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVuaW9uTWVtYmVyczogdHlwc1xuICB9O1xufVxuXG5mdW5jdGlvbiBvKHByb3BzLCBhZGRpdGlvbmFsKSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHByb3BzLFxuICAgIGFkZGl0aW9uYWw6IGFkZGl0aW9uYWxcbiAgfTtcbn1cblxuZnVuY3Rpb24gbShhZGRpdGlvbmFsKSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IFtdLFxuICAgIGFkZGl0aW9uYWw6IGFkZGl0aW9uYWxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcihuYW1lKSB7XG4gIHJldHVybiB7XG4gICAgcmVmOiBuYW1lXG4gIH07XG59XG5cbnZhciB0eXBlTWFwID0ge1xuICBDb250ZXh0OiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9tKCcnKSlcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfV0sICdhbnknKSxcbiAgQ29udGFjdExpc3Q6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2NvbnRhY3RzJyxcbiAgICBqczogJ2NvbnRhY3RzJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi9hKCAvKiNfX1BVUkVfXyovcignQ29udGFjdCcpKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL20oJycpKVxuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBDb250YWN0OiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovcignQ29udGFjdElEJylcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgQ29udGFjdElEOiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdlbWFpbCcsXG4gICAganM6ICdlbWFpbCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0ZEU19JRCcsXG4gICAganM6ICdGRFNfSUQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICcnKSxcbiAgSW5zdHJ1bWVudExpc3Q6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2luc3RydW1lbnRzJyxcbiAgICBqczogJ2luc3RydW1lbnRzJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi9hKCAvKiNfX1BVUkVfXyovcignSW5zdHJ1bWVudCcpKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL20oJycpKVxuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBJbnN0cnVtZW50OiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovcignSW5zdHJ1bWVudElEJylcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgSW5zdHJ1bWVudElEOiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdCQkcnLFxuICAgIGpzOiAnQkJHJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnQ1VTSVAnLFxuICAgIGpzOiAnQ1VTSVAnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdGRFNfSUQnLFxuICAgIGpzOiAnRkRTX0lEJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnRklHSScsXG4gICAganM6ICdGSUdJJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnSVNJTicsXG4gICAganM6ICdJU0lOJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnUEVSTUlEJyxcbiAgICBqczogJ1BFUk1JRCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ1JJQycsXG4gICAganM6ICdSSUMnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdTRURPTCcsXG4gICAganM6ICdTRURPTCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ3RpY2tlcicsXG4gICAganM6ICd0aWNrZXInLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICcnKSxcbiAgQ291bnRyeTogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3IoJ0NvdW50cnlJRCcpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIENvdW50cnlJRDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnSVNPQUxQSEEyJyxcbiAgICBqczogJ0lTT0FMUEhBMicsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0lTT0FMUEhBMycsXG4gICAganM6ICdJU09BTFBIQTMnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICcnKSxcbiAgT3JnYW5pemF0aW9uOiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovcignT3JnYW5pemF0aW9uSUQnKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBPcmdhbml6YXRpb25JRDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnRkRTX0lEJyxcbiAgICBqczogJ0ZEU19JRCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0xFSScsXG4gICAganM6ICdMRUknLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdQRVJNSUQnLFxuICAgIGpzOiAnUEVSTUlEJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnJyksXG4gIFBvcnRmb2xpbzogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAncG9zaXRpb25zJyxcbiAgICBqczogJ3Bvc2l0aW9ucycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovYSggLyojX19QVVJFX18qL3IoJ1Bvc2l0aW9uJykpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovbSgnJykpXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIFBvc2l0aW9uOiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdob2xkaW5nJyxcbiAgICBqczogJ2hvbGRpbmcnLFxuICAgIHR5cDogMy4xNFxuICB9LCB7XG4gICAganNvbjogJ2luc3RydW1lbnQnLFxuICAgIGpzOiAnaW5zdHJ1bWVudCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovcignSW5zdHJ1bWVudCcpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovbSgnJykpXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55Jylcbn07XG5cbnZhciBJbnRlbnRzO1xuXG4oZnVuY3Rpb24gKEludGVudHMpIHtcbiAgSW50ZW50c1tcIlN0YXJ0Q2FsbFwiXSA9IFwiU3RhcnRDYWxsXCI7XG4gIEludGVudHNbXCJTdGFydENoYXRcIl0gPSBcIlN0YXJ0Q2hhdFwiO1xuICBJbnRlbnRzW1wiVmlld0NoYXJ0XCJdID0gXCJWaWV3Q2hhcnRcIjtcbiAgSW50ZW50c1tcIlZpZXdDb250YWN0XCJdID0gXCJWaWV3Q29udGFjdFwiO1xuICBJbnRlbnRzW1wiVmlld1F1b3RlXCJdID0gXCJWaWV3UXVvdGVcIjtcbiAgSW50ZW50c1tcIlZpZXdOZXdzXCJdID0gXCJWaWV3TmV3c1wiO1xuICBJbnRlbnRzW1wiVmlld0luc3RydW1lbnRcIl0gPSBcIlZpZXdJbnN0cnVtZW50XCI7XG4gIEludGVudHNbXCJWaWV3QW5hbHlzaXNcIl0gPSBcIlZpZXdBbmFseXNpc1wiO1xufSkoSW50ZW50cyB8fCAoSW50ZW50cyA9IHt9KSk7XG5cbmV4cG9ydCB7IENoYW5uZWxFcnJvciwgQ29udGV4dFR5cGVzLCBDb252ZXJ0LCBJbnRlbnRzLCBPcGVuRXJyb3IsIFJlc29sdmVFcnJvciwgYWRkQ29udGV4dExpc3RlbmVyLCBhZGRJbnRlbnRMaXN0ZW5lciwgYnJvYWRjYXN0LCBjb21wYXJlVmVyc2lvbk51bWJlcnMsIGZkYzNSZWFkeSwgZmluZEludGVudCwgZmluZEludGVudHNCeUNvbnRleHQsIGdldEN1cnJlbnRDaGFubmVsLCBnZXRJbmZvLCBnZXRPckNyZWF0ZUNoYW5uZWwsIGdldFN5c3RlbUNoYW5uZWxzLCBqb2luQ2hhbm5lbCwgbGVhdmVDdXJyZW50Q2hhbm5lbCwgb3BlbiwgcmFpc2VJbnRlbnQsIHJhaXNlSW50ZW50Rm9yQ29udGV4dCwgdmVyc2lvbklzQXRMZWFzdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmRjMy5lc20uanMubWFwXG4iLCJ2YXIgZSx0LHIsYT17ZDooZSx0KT0+e2Zvcih2YXIgciBpbiB0KWEubyh0LHIpJiYhYS5vKGUscikmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIse2VudW1lcmFibGU6ITAsZ2V0OnRbcl19KX0sbzooZSx0KT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LG89e307YS5kKG8se2RxOigpPT5BZGFwdGVyRXJyb3IsTVM6KCk9PkFwaUVycm9yLHhROigpPT5FdmVudEVycm9yLHNPOigpPT5oZSxadTooKT0+cGUsSTM6KCk9PndlLCRVOigpPT5rZSxpMDooKT0+dWUsY1g6KCk9PkluaXRpYWxpemF0aW9uRXJyb3IsX1c6KCk9PlBhcmFtZXRlckVycm9yLFUkOigpPT5sLFU3OigpPT5jLHJkOigpPT5sZX0pO2NsYXNzIEFwaUVycm9yIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IoZT1cIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkXCIsdCl7dmFyIHI7c3VwZXIoZSksdCYmKHRoaXMuaW5uZXJFcnJvcj10JiZ0KSx0aGlzLnN0YWNrPW51bGw9PT0ocj10aGlzLnN0YWNrKXx8dm9pZCAwPT09cj92b2lkIDA6ci5yZXBsYWNlKC9eKFxcdypFcnJvcikvLGAke3RoaXMuY29uc3RydWN0b3IubmFtZX1gKX19Y2xhc3MgQWRhcHRlckVycm9yIGV4dGVuZHMgQXBpRXJyb3J7Y29uc3RydWN0b3IoZT1cIkZhaWxlZCB0byBleGVjdXRlIGFkYXB0ZXIgZnVuY3Rpb25cIix0KXtzdXBlcihlLHQpfX1jbGFzcyBFdmVudEVycm9yIGV4dGVuZHMgQXBpRXJyb3J7Y29uc3RydWN0b3IoZT1cIkZhaWxlZCB0byByYWlzZSBldmVudFwiLHQpe3N1cGVyKGUsdCl9fWNsYXNzIEluaXRpYWxpemF0aW9uRXJyb3IgZXh0ZW5kcyBBcGlFcnJvcntjb25zdHJ1Y3RvcihlPVwiRmFpbGVkIHRvIGluaXRpYWxpemUgYWRhcHRlclwiLHQpe3N1cGVyKGUsdCl9fWNsYXNzIFBhcmFtZXRlckVycm9yIGV4dGVuZHMgQXBpRXJyb3J7Y29uc3RydWN0b3IoZT1cIkludmFsaWQgcGFyYW1ldGVyIHZhbHVlXCIsdCl7c3VwZXIoZSx0KX19IWZ1bmN0aW9uKGUpe2UuQWN0aXZhdGVXb3JrYm9vaz1cIkFjdGl2YXRlV29ya2Jvb2tcIixlLkFjdGl2YXRlV29ya3NoZWV0PVwiQWN0aXZhdGVXb3Jrc2hlZXRcIixlLkFkZFdvcmtzaGVldD1cIkFkZFdvcmtzaGVldFwiLGUuQ2FsY3VsYXRlV29ya2Jvb2s9XCJDYWxjdWxhdGVXb3JrYm9va1wiLGUuQ2FsY3VsYXRlV29ya3NoZWV0PVwiQ2FsY3VsYXRlV29ya3NoZWV0XCIsZS5DbGVhckFsbENlbGxzPVwiQ2xlYXJBbGxDZWxsc1wiLGUuQ2xlYXJBbGxDZWxsVmFsdWVzPVwiQ2xlYXJBbGxDZWxsVmFsdWVzXCIsZS5DbGVhckFsbENlbGxGb3JtYXR0aW5nPVwiQ2xlYXJBbGxDZWxsRm9ybWF0dGluZ1wiLGUuQ2xlYXJDZWxsVmFsdWVzPVwiQ2xlYXJDZWxsVmFsdWVzXCIsZS5DbGVhckNlbGxGb3JtYXR0aW5nPVwiQ2xlYXJDZWxsRm9ybWF0dGluZ1wiLGUuQ2xlYXJDZWxscz1cIkNsZWFyQ2VsbHNcIixlLkNsb3NlV29ya2Jvb2s9XCJDbG9zZVdvcmtib29rXCIsZS5DcmVhdGVXb3JrYm9vaz1cIkNyZWF0ZVdvcmtib29rXCIsZS5EZWxldGVXb3Jrc2hlZXQ9XCJEZWxldGVXb3Jrc2hlZXRcIixlLkRlcmVnaXN0ZXJFdmVudD1cIkRlcmVnaXN0ZXJFdmVudFwiLGUuRXZlbnRGaXJlZD1cIkV2ZW50RmlyZWRcIixlLkdldENhbGN1bGF0aW9uTW9kZT1cIkdldENhbGN1bGF0aW9uTW9kZVwiLGUuR2V0Q2VsbHM9XCJHZXRDZWxsc1wiLGUuR2V0V29ya2Jvb2tCeUlkPVwiR2V0V29ya2Jvb2tCeUlkXCIsZS5HZXRXb3JrYm9va05hbWU9XCJHZXRXb3JrYm9va05hbWVcIixlLkdldFdvcmtib29rcz1cIkdldFdvcmtib29rc1wiLGUuR2V0V29ya3NoZWV0QnlJZD1cIkdldFdvcmtzaGVldEJ5SWRcIixlLkdldFdvcmtzaGVldEJ5TmFtZT1cIkdldFdvcmtzaGVldEJ5TmFtZVwiLGUuR2V0V29ya3NoZWV0TmFtZT1cIkdldFdvcmtzaGVldE5hbWVcIixlLkdldFdvcmtzaGVldHM9XCJHZXRXb3Jrc2hlZXRzXCIsZS5Mb2dNZXNzYWdlPVwiTG9nTWVzc2FnZVwiLGUuT3Blbldvcmtib29rPVwiT3Blbldvcmtib29rXCIsZS5Qcm90ZWN0V29ya3NoZWV0PVwiUHJvdGVjdFdvcmtzaGVldFwiLGUuUmVnaXN0ZXJFdmVudD1cIlJlZ2lzdGVyRXZlbnRcIixlLlNhdmVXb3JrYm9vaz1cIlNhdmVXb3JrYm9va1wiLGUuU2F2ZVdvcmtib29rQXM9XCJTYXZlV29ya2Jvb2tBc1wiLGUuU2V0Q2VsbFZhbHVlcz1cIlNldENlbGxWYWx1ZXNcIixlLlNldENlbGxGb3JtYXR0aW5nPVwiU2V0Q2VsbEZvcm1hdHRpbmdcIixlLlNldENlbGxOYW1lPVwiU2V0Q2VsbE5hbWVcIixlLlNldFdvcmtzaGVldE5hbWU9XCJTZXRXb3Jrc2hlZXROYW1lXCIsZS5GaWx0ZXJDZWxscz1cIkZpbHRlckNlbGxzXCIsZS5RdWl0QXBwbGljYXRpb249XCJRdWl0QXBwbGljYXRpb25cIn0oZXx8KGU9e30pKSxmdW5jdGlvbihlKXtlLkFjdGl2YXRlPVwiQWN0aXZhdGVcIixlLkFkZFdvcmtzaGVldD1cIkFkZFdvcmtzaGVldFwiLGUuQ2hhbmdlPVwiQ2hhbmdlXCIsZS5DbG9zZT1cIkNsb3NlXCIsZS5EZWFjdGl2YXRlPVwiRGVhY3RpdmF0ZVwiLGUuRGVsZXRlV29ya3NoZWV0PVwiRGVsZXRlV29ya3NoZWV0XCJ9KHR8fCh0PXt9KSksZnVuY3Rpb24oZSl7ZS5Xb3JrYm9vaz1cIldvcmtib29rXCIsZS5Xb3Jrc2hlZXQ9XCJXb3Jrc2hlZXRcIn0ocnx8KHI9e30pKTtjb25zdCBuPVwiMS40LjFcIjtsZXQgcz0hMTtjb25zdCBpPVwiW0BvcGVuZmluL2V4Y2VsXVwiLGw9KCk9PntzPSExfSxjPSgpPT57cz0hMCxoKGB2JHtufWApfSxkPShlLHQpPT57cyYmKGUuaW5uZXJFcnJvcj9jb25zb2xlLmVycm9yKHQ/YCR7aX0gJHt0fWA6aSxlLFwiXFxuXFxuKGlubmVyKVwiLGUuaW5uZXJFcnJvcik6Y29uc29sZS5lcnJvcih0P2Ake2l9ICR7dH1gOmksZSkpfSxoPSguLi5lKT0+e3MmJmNvbnNvbGUubG9nKGksLi4uZSl9LHA9KC4uLmUpPT57cyYmY29uc29sZS53YXJuKGksLi4uZSl9O1widW5kZWZpbmVkXCI9PXR5cGVvZiBmaW4mJk9iamVjdC5hc3NpZ24od2luZG93LHtmaW46e319KSxPYmplY3QuYXNzaWduKGZpbix7SW50ZWdyYXRpb25zOntFeGNlbDp7ZW5hYmxlTG9nZ2luZzpjLGRpc2FibGVMb2dnaW5nOmx9fX0pO2NvbnN0IHc9KCk9PlwieHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4XCIucmVwbGFjZSgvW3h5XS9nLChlPT57Y29uc3QgdD0xNipNYXRoLnJhbmRvbSgpfDA7cmV0dXJuKFwieFwiPT09ZT90OjMmdHw4KS50b1N0cmluZygxNil9KSksaz1uZXcgTWFwLHU9KHQscik9PmFzeW5jKCk9PntoKGBXb3Jrc2hlZXQ6IEFjdGl2YXRlICgke3J9KWApO3RyeXthd2FpdCB0LmRpc3BhdGNoKGUuQWN0aXZhdGVXb3Jrc2hlZXQscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LGc9KHQscik9PmFzeW5jKCk9PntoKGBXb3Jrc2hlZXQ6IENhbGN1bGF0ZSAoJHtyfSlgKTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkNhbGN1bGF0ZVdvcmtzaGVldCxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sbT0odCxyKT0+YXN5bmMoKT0+e2goYFdvcmtzaGVldDogQ2xlYXIgYWxsIGNlbGwgdmFsdWVzICgke3J9KWApO3RyeXthd2FpdCB0LmRpc3BhdGNoKGUuQ2xlYXJBbGxDZWxsVmFsdWVzLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSx5PSh0LHIpPT5hc3luYygpPT57aChgV29ya3NoZWV0OiBDbGVhciBhbGwgY2VsbCBmb3JtYXR0aW5nICgke3J9KWApO3RyeXthd2FpdCB0LmRpc3BhdGNoKGUuQ2xlYXJBbGxDZWxsRm9ybWF0dGluZyxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sQz0odCxyKT0+YXN5bmMoKT0+e2goYFdvcmtzaGVldDogQ2xlYXIgYWxsIGNlbGxzICgke3J9KWApO3RyeXthd2FpdCB0LmRpc3BhdGNoKGUuQ2xlYXJBbGxDZWxscyxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sdj0odCxyKT0+YXN5bmMgYT0+e2goYFdvcmtzaGVldDogQ2xlYXIgY2VsbCB2YWx1ZXM7IGNlbGxSYW5nZToke2F9ICgke3J9KWApO2NvbnN0IG89e2NlbGxSYW5nZTphLG9iamVjdElkOnJ9O3RyeXthd2FpdCB0LmRpc3BhdGNoKGUuQ2xlYXJDZWxsVmFsdWVzLG8pfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxFPSh0LHIpPT5hc3luYyBhPT57aChgV29ya3NoZWV0OiBDbGVhciBjZWxsIGZvcm1hdHRpbmc7IGNlbGxSYW5nZToke2F9ICgke3J9KWApO2NvbnN0IG89e2NlbGxSYW5nZTphLG9iamVjdElkOnJ9O3RyeXthd2FpdCB0LmRpc3BhdGNoKGUuQ2xlYXJDZWxsRm9ybWF0dGluZyxvKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sVz0odCxyKT0+YXN5bmMgYT0+e2goYFdvcmtzaGVldDogQ2xlYXIgY2VsbHM7IGNlbGxSYW5nZToke2F9ICgke3J9KWApO2NvbnN0IG89e2NlbGxSYW5nZTphLG9iamVjdElkOnJ9O3RyeXthd2FpdCB0LmRpc3BhdGNoKGUuQ2xlYXJDZWxscyxvKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sQT0oZSx0KT0+KHIsYSxvPTFlMyk9PntpZihOdW1iZXIuaXNOYU4obyl8fG88PTApdGhyb3cgbmV3IEFwaUVycm9yKFwiVXBkYXRlIGludGVydmFsIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXJcIik7Y29uc3Qgbj13KCk7aChgV29ya3NoZWV0OiBDcmVhdGUgZGF0YSBzdHJlYW07IHN0cmVhbUlkOiR7bn07IGNlbGxSYW5nZToke3J9OyB1cGRhdGVJbnRlcnZhbDoke299ICgke3R9KWApO2NvbnN0IHM9e2Nsb3NlOigpPT57aChgQ2xvc2VkIHN0cmVhbSAoJHtufSlgKSwoZT0+e3ZhciB0O3RyeXtjb25zdCByPWsuZ2V0KGUpO2lmKCFyKXRocm93IG5ldyBBcGlFcnJvcihgVW5hYmxlIHRvIGZpbmQgcmVnaXN0ZXJlZCBkYXRhIHN0cmVhbSB3aXRoIGlkICR7ZX1gKTt2b2lkIDAhPT0obnVsbCE9PSh0PXIudGltZXIpJiZ2b2lkIDAhPT10P3Q6dm9pZCAwKSYmRihlKSxrLmRlbGV0ZShlKX1jYXRjaChlKXt0aHJvdyBkKGUpLGV9fSkobil9LGNlbGxSYW5nZTpyLGlkOm4sc3RhcnQ6KCk9PntoKGBTdGFydGVkIHN0cmVhbWluZyAoJHtufSlgKSxVKG4sYSxlLHQpfSxzdG9wOigpPT57aChgU3RvcHBlZCBzdHJlYW1pbmcgKCR7bn0pYCksRihuKX0sdXBkYXRlSW50ZXJ2YWw6byx3b3Jrc2hlZXRJZDp0fTtyZXR1cm4gay5zZXQobix7ZGF0YVN0cmVhbTpzfSksc30sYj0oZSx0LGEsbyk9Pntjb25zdCBuPXtldmVudFRhcmdldDpyLldvcmtzaGVldCxvYmplY3RJZDp0fTtyZXR1cm57b2JqZWN0SWQ6dCxhY3RpdmF0ZTp1KGUsdCksYWRkRXZlbnRMaXN0ZW5lcjphKGUsbiksY2FsY3VsYXRlOmcoZSx0KSxjbGVhckFsbENlbGxGb3JtYXR0aW5nOnkoZSx0KSxjbGVhckFsbENlbGxzOkMoZSx0KSxjbGVhckFsbENlbGxWYWx1ZXM6bShlLHQpLGNsZWFyQ2VsbEZvcm1hdHRpbmc6RShlLHQpLGNsZWFyQ2VsbHM6VyhlLHQpLGNsZWFyQ2VsbFZhbHVlczp2KGUsdCksY3JlYXRlRGF0YVN0cmVhbTpBKGUsdCksZGVsZXRlOmYoZSx0KSxmaWx0ZXJDZWxsczokKGUsdCksZ2V0Q2VsbHM6eChlLHQpLGdldE5hbWU6RyhlLHQpLHByb3RlY3Q6SShlLHQpLHJlbW92ZUV2ZW50TGlzdGVuZXI6byhlKSxzZXRDZWxsRm9ybWF0dGluZzpEKGUsdCksc2V0Q2VsbE5hbWU6UyhlLHQpLHNldENlbGxWYWx1ZXM6TihlLHQpLHNldE5hbWU6UihlLHQpfX0sZj0odCxyKT0+YXN5bmMoKT0+e2goYFdvcmtzaGVldDogRGVsZXRlICgke3J9KWApO3RyeXthd2FpdCB0LmRpc3BhdGNoKGUuRGVsZXRlV29ya3NoZWV0LHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSwkPSh0LHIpPT5hc3luYyhhLG8sbixzLGksbD0hMCk9PntoKGBXb3Jrc2hlZXQ6IEZpbHRlciBjZWxsczsgY2VsbFJhbmdlOiR7YX0gKCR7cn0pYCx7Y29sdW1uSW5kZXg6byxmaWx0ZXJPcGVyYXRvcjpuLGNyaXRlcmlhMTpzLGNyaXRlcmlhMjppLHZpc2libGVEcm9wRG93bjpsfSk7Y29uc3QgYz17Y2VsbFJhbmdlOmEsY3JpdGVyaWExOnMsY3JpdGVyaWEyOmksY29sdW1uSW5kZXg6byxmaWx0ZXJPcGVyYXRvcjpuLG9iamVjdElkOnIsdmlzaWJsZURyb3BEb3duOmx9O3RyeXthd2FpdCB0LmRpc3BhdGNoKGUuRmlsdGVyQ2VsbHMsYyl9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LHg9KHQscik9PmFzeW5jIGE9PntoKGBXb3Jrc2hlZXQ6IEdldCBjZWxsczsgY2VsbFJhbmdlOiR7YX0gKCR7cn0pYCk7Y29uc3Qgbz17Y2VsbFJhbmdlOmEsb2JqZWN0SWQ6cn07bGV0IG49W107dHJ5e249YXdhaXQgdC5kaXNwYXRjaChlLkdldENlbGxzLG8pLGgoYCR7YX06YCxuKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfXJldHVybiBufSxHPSh0LHIpPT5hc3luYygpPT57aChgV29ya3NoZWV0OiBHZXQgbmFtZSAoJHtyfSlgKTt0cnl7cmV0dXJuIGF3YWl0IHQuZGlzcGF0Y2goZS5HZXRXb3Jrc2hlZXROYW1lLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxJPSh0LHIpPT5hc3luYygpPT57aChgV29ya3NoZWV0OiBQcm90ZWN0ICgke3J9KWApO3RyeXthd2FpdCB0LmRpc3BhdGNoKGUuUHJvdGVjdFdvcmtzaGVldCxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sRD0odCxyKT0+YXN5bmMoYSxvKT0+e2goYFdvcmtzaGVldDogU2V0IGNlbGwgZm9ybWF0dGluZzsgY2VsbFJhbmdlOiR7YX0gKCR7cn0pYCxvKTtjb25zdCBuPXtjZWxsUmFuZ2U6YSxmb3JtYXR0aW5nOm8sb2JqZWN0SWQ6cn07dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5TZXRDZWxsRm9ybWF0dGluZyxuKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sUz0odCxyKT0+YXN5bmMoYSxvKT0+e2NvbnN0IG49by50cmltKCk7bGV0IHM7aWYoIW4pdGhyb3cgcz1uZXcgUGFyYW1ldGVyRXJyb3IoXCJDZWxsIHJhbmdlIG5hbWUgY2Fubm90IGJlIGFuIGVtcHR5IHN0cmluZ1wiKSxkKHMpLHM7aWYobi5sZW5ndGg+MjU1KXRocm93IHM9bmV3IFBhcmFtZXRlckVycm9yKFwiQ2VsbCByYW5nZSBuYW1lIG11c3QgYmUgMjU1IGNoYXJhY3RlcnMgb3IgbGVzc1wiKSxkKHMpLHM7aWYoL1teYS16QS1aMC05Xy4/XFxcXFwiJ10vLnRlc3QobikpdGhyb3cgcz1uZXcgUGFyYW1ldGVyRXJyb3IoXCJDZWxsIHJhbmdlIG5hbWUgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzXCIpLGQocykscztpZigvXlxcZHxcXGQkLy50ZXN0KG4pKXRocm93IHM9bmV3IFBhcmFtZXRlckVycm9yKFwiQ2VsbCByYW5nZSBuYW1lIG11c3Qgbm90IHN0YXJ0IG9yIGVuZCB3aXRoIGEgbnVtYmVyXCIpLGQocykscztoKGBXb3Jrc2hlZXQ6IFNldCBjZWxsIG5hbWU7IGNlbGxSYW5nZToke2F9OyBuZXdDZWxsUmFuZ2VOYW1lOiR7bn0gKCR7cn0pYCk7Y29uc3QgaT17Y2VsbFJhbmdlOmEsbmFtZTpuLG9iamVjdElkOnJ9O3RyeXthd2FpdCB0LmRpc3BhdGNoKGUuU2V0Q2VsbE5hbWUsaSl9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LE49KHQscik9PmFzeW5jKGEsbyk9PntoKGBXb3Jrc2hlZXQ6IFNldCBjZWxsIHZhbHVlczsgY2VsbFJhbmdlOiR7YX0gKCR7cn0pYCxvKTtjb25zdCBuPXtjZWxsUmFuZ2U6YSxvYmplY3RJZDpyLHZhbHVlc01hcDpvfTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLlNldENlbGxWYWx1ZXMsbil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LFI9KHQscik9PmFzeW5jIGE9Pntjb25zdCBvPWEudHJpbSgpO2xldCBuO2lmKCFvKXRocm93IG49bmV3IFBhcmFtZXRlckVycm9yKFwiV29ya3NoZWV0IG5hbWUgY2Fubm90IGJlIGFuIGVtcHR5IHN0cmluZ1wiKSxkKG4pLG47aWYoby5sZW5ndGg+MzEpdGhyb3cgbj1uZXcgUGFyYW1ldGVyRXJyb3IoXCJXb3Jrc2hlZXQgbmFtZSBtdXN0IGJlIDMxIGNoYXJhY3RlcnMgb3IgbGVzc1wiKSxkKG4pLG47aChgV29ya3NoZWV0OiBTZXQgbmFtZTsgbmV3V29ya3NoZWV0TmFtZToke299ICgke3J9KWApO2NvbnN0IHM9e25ld1dvcmtzaGVldE5hbWU6byxvYmplY3RJZDpyfTt0cnl7cmV0dXJuIGF3YWl0IHQuZGlzcGF0Y2goZS5TZXRXb3Jrc2hlZXROYW1lLHMpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxVPShlLHQscixhKT0+e3ZhciBvO3RyeXtjb25zdCBuPWsuZ2V0KGUpO2lmKCFuKXRocm93IG5ldyBBcGlFcnJvcihgVW5hYmxlIHRvIGZpbmQgcmVnaXN0ZXJlZCBkYXRhIHN0cmVhbSB3aXRoIGlkICR7ZX1gKTt2b2lkIDAhPT0obnVsbCE9PShvPW4udGltZXIpJiZ2b2lkIDAhPT1vP286dm9pZCAwKSYmRihlKTtjb25zdHtjZWxsUmFuZ2U6cyx1cGRhdGVJbnRlcnZhbDppfT1uLmRhdGFTdHJlYW0sbD1hc3luYygpPT57Y29uc3Qgbz1hd2FpdCB0KCk7dHJ5e2F3YWl0IE4ocixhKShzLFtbb11dKX1jYXRjaCh0KXtwKGBVbmFibGUgdG8gdXBkYXRlIGNlbGwgcmFuZ2UgZm9yIHN0cmVhbSB3aXRoIGlkICR7ZX06ICR7bnVsbD09dD92b2lkIDA6dC5tZXNzYWdlfWApfX0sYz13aW5kb3cuc2V0SW50ZXJ2YWwobCxpKTtuLnRpbWVyPWN9Y2F0Y2goZSl7dGhyb3cgZChlKSxlfX0sRj1lPT57dmFyIHQ7dHJ5e2NvbnN0IHI9ay5nZXQoZSk7aWYoIXIpdGhyb3cgbmV3IEFwaUVycm9yKGBVbmFibGUgdG8gZmluZCByZWdpc3RlcmVkIGRhdGEgc3RyZWFtIHdpdGggaWQgJHtlfWApO2lmKHZvaWQgMD09PShudWxsIT09KHQ9ci50aW1lcikmJnZvaWQgMCE9PXQ/dDp2b2lkIDApKXJldHVybjt3aW5kb3cuY2xlYXJJbnRlcnZhbChyLnRpbWVyKSxyLnRpbWVyPXZvaWQgMH1jYXRjaChlKXt0aHJvdyBkKGUpLGV9fSxMPW5ldyBNYXAsUD0ocixhKT0+YXN5bmMobyxuKT0+e2lmKCFhfHwhYS5ldmVudFRhcmdldHx8IWEub2JqZWN0SWQpe2NvbnN0IGU9bmV3IEV2ZW50RXJyb3IoXCJFdmVudCByZWdpc3RyYXRpb24gbWlzc2luZyByZXF1aXJlZCB2YWx1ZXNcIik7dGhyb3cgZChlKSxlfWNvbnN0IHM9T2JqZWN0LmtleXModCkuZmluZCgoZT0+ZS50b0xvd2VyQ2FzZSgpPT09by50b0xvd2VyQ2FzZSgpKSk7aWYoIXMpe2NvbnN0IGU9bmV3IEV2ZW50RXJyb3IoYFVuc3VwcG9ydGVkIGV2ZW50IG5hbWU6ICR7b31gKTt0aHJvdyBkKGUpLGV9YS5ldmVudE5hbWU9dFtzXSxoKFwiUmVnaXN0ZXJpbmcgZXZlbnRcIixhKTt0cnl7Y29uc3QgdD1hd2FpdCByLmRpc3BhdGNoKGUuUmVnaXN0ZXJFdmVudCxhKTtMLnNldCh0LG4pfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3Iodm9pZCAwLGUpfX0saj10PT5hc3luYyByPT57bGV0IGE7Zm9yKGNvbnN0W2UsdF1vZiBMKWlmKHQ9PT1yKXthPWU7YnJlYWt9aWYoIWEpdGhyb3cgbmV3IEV2ZW50RXJyb3I7aChcIkRlcmVnaXN0ZXJpbmcgZXZlbnQ6XCIsYSk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5EZXJlZ2lzdGVyRXZlbnQsYSksTC5kZWxldGUoYSl9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LE89KGUsYSxvKT0+e3ZhciBuLHM7c3dpdGNoKG8uZXZlbnRUYXJnZXQpe2Nhc2Ugci5Xb3JrYm9vazpzd2l0Y2gobnVsbD09PShuPW8uZXZlbnROYW1lKXx8dm9pZCAwPT09bj92b2lkIDA6bi50b1VwcGVyQ2FzZSgpKXtjYXNlIHQuQWN0aXZhdGUudG9VcHBlckNhc2UoKTpjYXNlIHQuQ2xvc2UudG9VcHBlckNhc2UoKTpjYXNlIHQuRGVhY3RpdmF0ZS50b1VwcGVyQ2FzZSgpOnJldHVybiBlKCk7Y2FzZSB0LkFkZFdvcmtzaGVldC50b1VwcGVyQ2FzZSgpOmNhc2UgdC5EZWxldGVXb3Jrc2hlZXQudG9VcHBlckNhc2UoKTpyZXR1cm4gZShiKGEsby53b3Jrc2hlZXRPYmplY3RJZCxQLGopKTtkZWZhdWx0OnRocm93IG5ldyBFdmVudEVycm9yKGBVbmV4cGVjdGVkIHdvcmtib29rIGV2ZW50OiAke28uZXZlbnROYW1lfWApfWNhc2Ugci5Xb3Jrc2hlZXQ6c3dpdGNoKG51bGw9PT0ocz1vLmV2ZW50TmFtZSl8fHZvaWQgMD09PXM/dm9pZCAwOnMudG9VcHBlckNhc2UoKSl7Y2FzZSB0LkFjdGl2YXRlLnRvVXBwZXJDYXNlKCk6cmV0dXJuIGUoKTtjYXNlIHQuQ2hhbmdlLnRvVXBwZXJDYXNlKCk6cmV0dXJuIGUoby5jaGFuZ2VkQ2VsbHMpO2Nhc2UgdC5EZWFjdGl2YXRlLnRvVXBwZXJDYXNlKCk6cmV0dXJuIGUoKTtkZWZhdWx0OnRocm93IG5ldyBFdmVudEVycm9yKGBVbmV4cGVjdGVkIHdvcmtzaGVldCBldmVudDogJHtvLmV2ZW50TmFtZX1gKX1kZWZhdWx0OnRocm93IG5ldyBFdmVudEVycm9yKGBVbmV4cGVjdGVkIGV2ZW50IHRhcmdldDogJHtvLmV2ZW50VGFyZ2V0fWApfX0sQj0odCxyKT0+YXN5bmMoKT0+e2goYFdvcmtib29rOiBBY3RpdmF0ZSAoJHtyfSlgKTt0cnl7cmV0dXJuIGF3YWl0IHQuZGlzcGF0Y2goZS5BY3RpdmF0ZVdvcmtib29rLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxWPSh0LHIsYSxvKT0+YXN5bmMoKT0+e2xldCBuO2goYFdvcmtib29rOiBBZGQgd29ya3NoZWV0ICgke3J9KWApO3RyeXtuPWF3YWl0IHQuZGlzcGF0Y2goZS5BZGRXb3Jrc2hlZXQscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn1yZXR1cm4gYih0LG4sYSxvKX0sTT0odCxyKT0+YXN5bmMoKT0+e2goYFdvcmtib29rOiBDYWxjdWxhdGUgKCR7cn0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DYWxjdWxhdGVXb3JrYm9vayxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sej0odCxyKT0+YXN5bmMoKT0+e2goYFdvcmtib29rOiBDbG9zZSAoJHtyfSlgKTt0cnl7cmV0dXJuIGF3YWl0IHQuZGlzcGF0Y2goZS5DbG9zZVdvcmtib29rLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxUPShlLHQsYSxvKT0+e2NvbnN0IG49e2V2ZW50VGFyZ2V0OnIuV29ya2Jvb2ssb2JqZWN0SWQ6dH07cmV0dXJue29iamVjdElkOnQsYWN0aXZhdGU6QihlLHQpLGFkZFdvcmtzaGVldDpWKGUsdCxhLG8pLGFkZEV2ZW50TGlzdGVuZXI6YShlLG4pLGNhbGN1bGF0ZTpNKGUsdCksY2xvc2U6eihlLHQpLGdldENhbGN1bGF0aW9uTW9kZTpRKGUsdCksZ2V0TmFtZTpIKGUsdCksZ2V0V29ya3NoZWV0QnlOYW1lOl8oZSx0LGEsbyksZ2V0V29ya3NoZWV0czpxKGUsdCxhLG8pLHJlbW92ZUV2ZW50TGlzdGVuZXI6byhlKSxzYXZlOkooZSx0KSxzYXZlQXM6SyhlLHQpfX0sUT0odCxyKT0+YXN5bmMoKT0+e2goXCJXb3JrYm9vazogR2V0IGNhbGN1bGF0aW9uIG1vZGVcIik7dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuR2V0Q2FsY3VsYXRpb25Nb2RlLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxIPSh0LHIpPT5hc3luYygpPT57aChgV29ya2Jvb2s6IEdldCBuYW1lICgke3J9KWApO3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLkdldFdvcmtib29rTmFtZSxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sXz0odCxyLGEsbyk9PmFzeW5jIG49PntsZXQgcztoKGBXb3JrYm9vazogR2V0IHdvcmtzaGVldCBieSBuYW1lOiAke259ICgke3J9KWApO3RyeXtpZihzPWF3YWl0IHQuZGlzcGF0Y2goZS5HZXRXb3Jrc2hlZXRCeU5hbWUse29iamVjdElkOnIsd29ya3NoZWV0TmFtZTpufSksbnVsbD09PXMpcmV0dXJuIG51bGx9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn1yZXR1cm4gYih0LHMsYSxvKX0scT0odCxyLGEsbyk9PmFzeW5jKCk9PntsZXQgbjtoKGBXb3JrYm9vazogR2V0IHdvcmtzaGVldHMgKCR7cn0pYCk7dHJ5e249YXdhaXQgdC5kaXNwYXRjaChlLkdldFdvcmtzaGVldHMscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn1yZXR1cm4gbi5tYXAoKGU9PmIodCxlLGEsbykpKX0sSj0odCxyKT0+YXN5bmMoKT0+e2goYFdvcmtib29rOiBTYXZlICgke3J9KWApO3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLlNhdmVXb3JrYm9vayxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sSz0odCxyKT0+YXN5bmMgYT0+e2goYFdvcmtib29rOiBTYXZlIGFzOyBmaWxlUGF0aDoke2F9ICgke3J9KWApO3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLlNhdmVXb3JrYm9va0FzLHtmaWxlUGF0aDphLG9iamVjdElkOnJ9KX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sWD10PT5hc3luYygpPT57bGV0IHI7aChcIkFwcGxpY2F0aW9uOiBDcmVhdGUgd29ya2Jvb2tcIik7dHJ5e3I9YXdhaXQgdC5kaXNwYXRjaChlLkNyZWF0ZVdvcmtib29rKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfXJldHVybiBUKHQscixQLGopfSxaPXQ9PmFzeW5jIHI9PntsZXQgYTtoKGBBcHBsaWNhdGlvbjogR2V0IHdvcmtib29rOyBpZDoke3J9YCk7dHJ5e2E9YXdhaXQgdC5kaXNwYXRjaChlLkdldFdvcmtib29rQnlJZCxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfXJldHVybiBUKHQsYSxQLGopfSxZPXQ9PmFzeW5jKCk9PntsZXQgcjtoKFwiQXBwbGljYXRpb246IEdldCB3b3JrYm9va3NcIik7dHJ5e3I9YXdhaXQgdC5kaXNwYXRjaChlLkdldFdvcmtib29rcyl9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn1yZXR1cm4gci5tYXAoKGU9PlQodCxlLFAsaikpKX0sZWU9dD0+YXN5bmMgcj0+e2goYEFwcGxpY2F0aW9uOiBHZXQgd29ya3NoZWV0OyBpZDoke3J9YCk7dHJ5e3I9YXdhaXQgdC5kaXNwYXRjaChlLkdldFdvcmtzaGVldEJ5SWQscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn1yZXR1cm4gYih0LHIsUCxqKX0sdGU9dD0+YXN5bmMgcj0+e2xldCBhO2goYEFwcGxpY2F0aW9uOiBPcGVuIHdvcmtib29rOyBmaWxlUGF0aDoke3J9YCk7dHJ5e2E9YXdhaXQgdC5kaXNwYXRjaChlLk9wZW5Xb3JrYm9vayxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfXJldHVybiBUKHQsYSxQLGopfSxyZT10PT5hc3luYyhyPSEwKT0+e2goYEFwcGxpY2F0aW9uOiBRdWl0OyBkaXNwbGF5QWxlcnRzOiR7cn1gKTt0cnl7cmV0dXJuIGF3YWl0IHQuZGlzcGF0Y2goZS5RdWl0QXBwbGljYXRpb24scil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19O3ZhciBhZSxvZTshZnVuY3Rpb24oZSl7ZS5FeGNlbEFwcGxpY2F0aW9uPVwiRVhDRUwtQVBQXCJ9KGFlfHwoYWU9e30pKSxmdW5jdGlvbihlKXtlW2UuSW5mbz0xXT1cIkluZm9cIixlW2UuV2Fybj0yXT1cIldhcm5cIixlW2UuRXJyb3I9M109XCJFcnJvclwifShvZXx8KG9lPXt9KSk7Y29uc3QgbmU9XCJleGNlbC1hZGFwdGVyXCIsc2U9dygpO2xldCBpZTtjb25zdCBsZT1hc3luYyh0PSExKT0+e3RyeXthd2FpdChhc3luYyBlPT57dHJ5e2goXCJSZWdpc3RlcmluZyB1c2FnZVwiKSxhd2FpdCBmaW4uU3lzdGVtLnJlZ2lzdGVyVXNhZ2Uoe3R5cGU6XCJpbnRlZ3JhdGlvbi1mZWF0dXJlXCIsZGF0YTp7YXBpVmVyc2lvbjpuLGNvbXBvbmVudE5hbWU6ZX19KX1jYXRjaCh0KXtwKGBVbmFibGUgdG8gcmVnaXN0ZXIgdXNhZ2UgZm9yIGZlYXR1cmUgJHtlfTogJHtudWxsPT10P3ZvaWQgMDp0Lm1lc3NhZ2V9YCl9fSkoYWUuRXhjZWxBcHBsaWNhdGlvbik7e2F3YWl0KGFzeW5jKCk9Pnt2YXIgZTtjb25zdCB0PW51bGw9PT0oZT0oYXdhaXQgZmluLkFwcGxpY2F0aW9uLmdldEN1cnJlbnRTeW5jKCkuZ2V0TWFuaWZlc3QoKSkuYXBwQXNzZXRzKXx8dm9pZCAwPT09ZT92b2lkIDA6ZS5maW5kKChlPT5lLmFsaWFzPT09bmUpKTtpZih0KXJldHVybiB2b2lkIHAoXCJEZXRlY3RlZCBhZGFwdGVyIHBhY2thZ2UgaW4gYXBwIG1hbmlmZXN0IGFwcEFzc2V0c1wiLHQpO2lmKGF3YWl0IGRlKCkpcmV0dXJuIHZvaWQgaChcIlVzaW5nIGV4aXN0aW5nIGFkYXB0ZXIgcGFja2FnZVwiKTtjb25zdCByPXthbGlhczpuZSxzcmM6YGh0dHBzOi8vY2RuLm9wZW5maW4uY28vcmVsZWFzZS9pbnRlZ3JhdGlvbnMvZXhjZWwvJHtufS9PcGVuRmluLkV4Y2VsLnppcGAsdGFyZ2V0OlwiT3BlbkZpbi5FeGNlbC5leGVcIix2ZXJzaW9uOm59O2goXCJEb3dubG9hZGluZyBhZGFwdGVyIHBhY2thZ2VcIixyKTt0cnl7YXdhaXQgZmluLlN5c3RlbS5kb3dubG9hZEFzc2V0KHIsKCgpPT57fSkpfWNhdGNoKGUpe3Rocm93IGQoXCJVbmFibGUgdG8gZG93bmxvYWQgYWRhcHRlciBwYWNrYWdlXCIpLGV9fSkoKTtjb25zdHtzZWN1cml0eVJlYWxtOmUscG9ydDpyfT1hd2FpdCBmaW4uU3lzdGVtLmdldFJ1bnRpbWVJbmZvKCk7bGV0e2xpY2Vuc2VLZXk6YX09YXdhaXQgZmluLkFwcGxpY2F0aW9uLmdldEN1cnJlbnRTeW5jKCkuZ2V0TWFuaWZlc3QoKTthPW51bGwhPWE/YTpcIk5PX0xJQ0VOU0VfS0VZXCI7Y29uc3Qgbz1maW4ubWUudXVpZDtoKFwiSW5pdGlhbGl6aW5nIGFkYXB0ZXJcIix7YWRhcHRlckxvZ2dpbmdFbmFibGVkOnQsY2hhbm5lbE5hbWU6c2UsbGljZW5zZUtleTphLHBvcnQ6cixzZWN1cml0eVJlYWxtOmUsdXVpZDpvfSksZmluLlN5c3RlbS5sYXVuY2hFeHRlcm5hbFByb2Nlc3Moe2FsaWFzOm5lLGFyZ3VtZW50czpgJHtvfSAke2F9ICR7cn0gJHtlfSAke3NlfSAke3R9YH0pfWNvbnN0IGE9ZmluLkludGVyQXBwbGljYXRpb25CdXMuQ2hhbm5lbC5jb25uZWN0KHNlLHtwYXlsb2FkOnt2ZXJzaW9uOm59fSksbz1uZXcgUHJvbWlzZSgoZT0+e3NldFRpbWVvdXQoZSwyZTQpfSkpLnRoZW4oKCgpPT57dGhyb3cgbmV3IEVycm9yKFwiQ29ubmVjdGlvbiB0byBhZGFwdGVyIHRpbWVkIG91dFwiKX0pKTtpZT1hd2FpdCBQcm9taXNlLnJhY2UoW2Esb10pLGgoYENvbm5lY3RlZCB0byBhZGFwdGVyICR7aWUucHJvdmlkZXJJZGVudGl0eS51dWlkfSBvbiBjaGFubmVsICR7c2V9YCksaWUucmVnaXN0ZXIoZS5Mb2dNZXNzYWdlLGNlKSxpZS5yZWdpc3RlcihlLkV2ZW50RmlyZWQsKHI9aWUsZT0+e2NvbnN0e2V2ZW50UmVnaXN0cmF0aW9uSWQ6dH09ZSxhPUwuZ2V0KHQpO2lmKCFhKXRocm93IG5ldyBFdmVudEVycm9yKGBObyByZWdpc3RlcmVkIGV2ZW50IGxpc3RlbmVyIGZvdW5kIGZvciBpZDogJHt0fWApO2goXCJFdmVudCBwYXlsb2FkIHJlY2VpdmVkXCIsZSksTyhhLHIsZSl9KSl9Y2F0Y2goZSl7Y29uc3QgdD1uZXcgSW5pdGlhbGl6YXRpb25FcnJvcih2b2lkIDAsZSk7dGhyb3cgZCh0KSx0fXZhciByO3JldHVybnthZGFwdGVyOntjaGFubmVsTmFtZTpzZSx2ZXJzaW9uOm59LGNyZWF0ZVdvcmtib29rOlgoaWUpLGdldFdvcmtib29rQnlJZDpaKGllKSxnZXRXb3JrYm9va3M6WShpZSksZ2V0V29ya3NoZWV0QnlJZDplZShpZSksb3Blbldvcmtib29rOnRlKGllKSxxdWl0OnJlKGllKX19LGNlPWU9Pntjb25zdHttZXNzYWdlOnQsdHlwZTpyfT1lLGE9XCJbYWRhcHRlcl1cIjtzd2l0Y2gocil7Y2FzZSBvZS5FcnJvcjpkKHQsYSk7YnJlYWs7Y2FzZSBvZS5JbmZvOmgoYSx0KTticmVhaztjYXNlIG9lLldhcm46cChhLHQpfX0sZGU9YXN5bmMoKT0+e3RyeXtjb25zdCBlPWF3YWl0IGZpbi5TeXN0ZW0uZ2V0QXBwQXNzZXRJbmZvKHthbGlhczpuZX0pO3JldHVybiBlJiZlLnZlcnNpb249PT1ufWNhdGNoKGUpe3JldHVybiExfX07dmFyIGhlLHBlLHdlLGtlLHVlOyFmdW5jdGlvbihlKXtlLkNvbnRpbnVvdXM9XCJDb250aW51b3VzXCIsZS5EYXNoPVwiRGFzaFwiLGUuRGFzaERvdD1cIkRhc2hEb3RcIixlLkRhc2hEb3REb3Q9XCJEYXNoRG90RG90XCIsZS5Eb3Q9XCJEb3RcIixlLkRvdWJsZT1cIkRvdWJsZVwiLGUuU2xhbnREYXNoRG90PVwiU2xhbnREYXNoRG90XCIsZS5Ob25lPVwiTm9uZVwifShoZXx8KGhlPXt9KSksZnVuY3Rpb24oZSl7ZS5DZW50ZXI9XCJDZW50ZXJcIixlLkNlbnRlckFjcm9zc1NlbGVjdGlvbj1cIkNlbnRlckFjcm9zc1NlbGVjdGlvblwiLGUuRGlzdHJpYnV0ZWQ9XCJEaXN0cmlidXRlZFwiLGUuRmlsbD1cIkZpbGxcIixlLkdlbmVyYWw9XCJHZW5lcmFsXCIsZS5KdXN0aWZ5PVwiSnVzdGlmeVwiLGUuTGVmdD1cIkxlZnRcIixlLlJpZ2h0PVwiUmlnaHRcIn0ocGV8fChwZT17fSkpLGZ1bmN0aW9uKGUpe2UuQXV0b21hdGljPVwiQXV0b21hdGljXCIsZS5DaGVja2VyPVwiQ2hlY2tlclwiLGUuQ3Jpc3NDcm9zcz1cIkNyaXNzQ3Jvc3NcIixlLkRvd249XCJEb3duXCIsZS5HcmF5MTY9XCJHcmF5MTZcIixlLkdyYXkyNT1cIkdyYXkyNVwiLGUuR3JheTUwPVwiR3JheTUwXCIsZS5HcmF5NzU9XCJHcmF5NzVcIixlLkdyYXk4PVwiR3JheThcIixlLkdyaWQ9XCJHcmlkXCIsZS5Ib3Jpem9udGFsPVwiSG9yaXpvbnRhbFwiLGUuTGlnaHREb3duPVwiTGlnaHREb3duXCIsZS5MaWdodEhvcml6b250YWw9XCJMaWdodEhvcml6b250YWxcIixlLkxpZ2h0VXA9XCJMaWdodFVwXCIsZS5MaWdodFZlcnRpY2FsPVwiTGlnaHRWZXJ0aWNhbFwiLGUuTGluZWFyR3JhZGllbnQ9XCJMaW5lYXJHcmFkaWVudFwiLGUuTm9uZT1cIk5vbmVcIixlLlJlY3Rhbmd1bGFyR3JhZGllbnQ9XCJSZWN0YW5ndWxhckdyYWRpZW50XCIsZS5TZW1pR3JheTc1PVwiU2VtaUdyYXk3NVwiLGUuU29saWQ9XCJTb2xpZFwiLGUuVXA9XCJVcFwiLGUuVmVydGljYWw9XCJWZXJ0aWNhbFwifSh3ZXx8KHdlPXt9KSksZnVuY3Rpb24oZSl7ZS5Cb3R0b209XCJCb3R0b21cIixlLkNlbnRlcj1cIkNlbnRlclwiLGUuRGlzdHJpYnV0ZWQ9XCJEaXN0cmlidXRlZFwiLGUuSnVzdGlmeT1cIkp1c3RpZnlcIixlLlRvcD1cIlRvcFwifShrZXx8KGtlPXt9KSksZnVuY3Rpb24oZSl7ZS5BbmQ9XCJBbmRcIixlLk9yPVwiT3JcIixlLlRvcDEwSXRlbXM9XCJUb3AxMEl0ZW1zXCIsZS5Cb3R0b20xMEl0ZW1zPVwiQm90dG9tMTBJdGVtc1wiLGUuVG9wMTBQZXJjZW50PVwiVG9wMTBQZXJjZW50XCIsZS5Cb3R0b20xMFBlcmNlbnQ9XCJCb3R0b20xMFBlcmNlbnRcIixlLkZpbHRlclZhbHVlcz1cIkZpbHRlclZhbHVlc1wifSh1ZXx8KHVlPXt9KSk7dmFyIGdlPW8uZHEsbWU9by5NUyx5ZT1vLnhRLENlPW8uc08sdmU9by5adSxFZT1vLkkzLFdlPW8uJFUsQWU9by5pMCxiZT1vLmNYLGZlPW8uX1csJGU9by5VJCx4ZT1vLlU3LEdlPW8ucmQ7ZXhwb3J0e2dlIGFzIEFkYXB0ZXJFcnJvcixtZSBhcyBBcGlFcnJvcix5ZSBhcyBFdmVudEVycm9yLENlIGFzIEV4Y2VsQ2VsbEJvcmRlckxpbmVTdHlsZSx2ZSBhcyBFeGNlbENlbGxIb3Jpem9udGFsQWxpZ25tZW50LEVlIGFzIEV4Y2VsQ2VsbFBhdHRlcm4sV2UgYXMgRXhjZWxDZWxsVmVydGljYWxBbGlnbm1lbnQsQWUgYXMgRXhjZWxGaWx0ZXJPcGVyYXRvcixiZSBhcyBJbml0aWFsaXphdGlvbkVycm9yLGZlIGFzIFBhcmFtZXRlckVycm9yLCRlIGFzIGRpc2FibGVMb2dnaW5nLHhlIGFzIGVuYWJsZUxvZ2dpbmcsR2UgYXMgZ2V0RXhjZWxBcHBsaWNhdGlvbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRDdXJyZW50Q2hhbm5lbCB9IGZyb20gXCJAZmlub3MvZmRjM1wiO1xuaW1wb3J0IHsgQ2VsbCwgRXhjZWxBcHBsaWNhdGlvbiwgRXhjZWxXb3JrYm9vaywgRXhjZWxXb3Jrc2hlZXQsIGdldEV4Y2VsQXBwbGljYXRpb24gfSBmcm9tIFwiQG9wZW5maW4vZXhjZWxcIjtcblxuY29uc3QgS05PV05fSU5TVFJVTUVOVFMgPSBbXCJUU0xBXCIsIFwiTVNGVFwiLCBcIkFBUExcIl07XG5cbmxldCBleGNlbDogRXhjZWxBcHBsaWNhdGlvbiB8IHVuZGVmaW5lZDtcbmxldCBvcGVuV29ya2Jvb2tzOlxuXHR8IHtcblx0XHRcdGJvb2s6IEV4Y2VsV29ya2Jvb2s7XG5cdFx0XHRuYW1lOiBzdHJpbmc7XG5cdCAgfVtdXG5cdHwgdW5kZWZpbmVkO1xubGV0IHNlbGVjdGVkV29ya2Jvb2tJbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkO1xubGV0IG9wZW5Xb3Jrc2hlZXRzOlxuXHR8IHtcblx0XHRcdHNoZWV0OiBFeGNlbFdvcmtzaGVldDtcblx0XHRcdG5hbWU6IHN0cmluZztcblx0ICB9W11cblx0fCB1bmRlZmluZWQ7XG5sZXQgc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgQUhPSiA9IFwiQUhPT09PSlwiO1xuXHRcdFxuXHRcdGF3YWl0IGluaXQoKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fVxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3Jlc3VsdHMtY29udGFpbmVyXCIpO1xuXHRcdHJlc3VsdHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG5cdFx0ZXhjZWwgPSBhd2FpdCBnZXRFeGNlbEFwcGxpY2F0aW9uKCk7XG5cblx0XHRhd2FpdCBwb3B1bGF0ZVdvcmtib29rcygpO1xuXG5cdFx0Y29uc3Qgb3BlbkV4Y2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcGVuLWV4Y2VsXCIpO1xuXHRcdG9wZW5FeGNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0YXdhaXQgb3BlbkV4Y2VsKCk7XG5cdFx0fSk7XG5cblx0XHRjb25zdCByZWZyZXNoV29ya2Jvb2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dvcmtib29rLXJlZnJlc2hcIik7XG5cdFx0cmVmcmVzaFdvcmtib29rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiBwb3B1bGF0ZVdvcmtib29rcygpKTtcblxuXHRcdGNvbnN0IHJlZnJlc2hXb3Jrc2hlZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dvcmtzaGVldC1yZWZyZXNoXCIpO1xuXHRcdHJlZnJlc2hXb3Jrc2hlZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHBvcHVsYXRlV29ya3NoZWV0cygpKTtcblxuXHRcdGNvbnN0IG9wZW5Xb3JrYm9va3NTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dvcmtib29rc1wiKTtcblx0XHRvcGVuV29ya2Jvb2tzU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgYXN5bmMgKGUpID0+XG5cdFx0XHRzZWxlY3RXb3JrYm9vaygoZS50YXJnZXQgYXMgdW5rbm93biBhcyB7IHZhbHVlOiBzdHJpbmcgfSkudmFsdWUpXG5cdFx0KTtcblxuXHRcdGNvbnN0IG9wZW5Xb3Jrc2hlZXRzU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3b3Jrc2hlZXRzXCIpO1xuXHRcdG9wZW5Xb3Jrc2hlZXRzU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgYXN5bmMgKGUpID0+XG5cdFx0XHRzZWxlY3RXb3Jrc2hlZXQoKGUudGFyZ2V0IGFzIHVua25vd24gYXMgeyB2YWx1ZTogc3RyaW5nIH0pLnZhbHVlKVxuXHRcdCk7XG5cblx0XHRjb25zdCBzZXRWYWx1ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2V0LXZhbHVlXCIpO1xuXHRcdHNldFZhbHVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRhd2FpdCBzZXRDZWxsVmFsdWUoKTtcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0c2hvd0Vycm9yKGVycik7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2hvd0Vycm9yKGVycikge1xuXHRjb25zdCBlcnJEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vycm9yXCIpO1xuXHRlcnJEb20uaW5uZXJIVE1MID0gZXJyLm1lc3NhZ2U7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG9wZW5FeGNlbCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHQvLyBPcGVuIHRoZSBzZWxlY3Qgd29yayBib29rIGFuZCBzaGVldFxuXHRcdC8vIGlmIGFueXRoaW5nIHRocm93cyBhbiBleGNlcHRpb24ganVzdCBvcGVuIGEgbmV3IHdvcmtib29rXG5cdFx0YXdhaXQgc2VsZWN0V29ya2Jvb2sob3Blbldvcmtib29rc1tzZWxlY3RlZFdvcmtib29rSW5kZXhdLm5hbWUpO1xuXHRcdGF3YWl0IHNlbGVjdFdvcmtzaGVldChvcGVuV29ya3NoZWV0c1tzZWxlY3RlZFdvcmtzaGVldEluZGV4XS5uYW1lKTtcblx0fSBjYXRjaCB7XG5cdFx0YXdhaXQgZXhjZWwuY3JlYXRlV29ya2Jvb2soKTtcblx0XHRhd2FpdCBwb3B1bGF0ZVdvcmtib29rcygpO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBvcHVsYXRlV29ya2Jvb2tzKCk6IFByb21pc2U8dm9pZD4ge1xuXHRpZiAoZXhjZWwpIHtcblx0XHRzZWxlY3RlZFdvcmtib29rSW5kZXggPSB1bmRlZmluZWQ7XG5cdFx0Y29uc3QgcmVmcmVzaEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dvcmtib29rLXJlZnJlc2hcIik7XG5cdFx0cmVmcmVzaEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cblx0XHRjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PihcIiN3b3JrYm9va3NcIik7XG5cdFx0c2VsZWN0LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRzZWxlY3QuaW5uZXJIVE1MID0gXCJcIjtcblxuXHRcdG9wZW5Xb3JrYm9va3MgPSBbXTtcblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB3b3JrYm9va3MgPSBhd2FpdCBleGNlbC5nZXRXb3JrYm9va3MoKTtcblxuXHRcdFx0Zm9yIChjb25zdCBib29rIG9mIHdvcmtib29rcykge1xuXHRcdFx0XHRjb25zdCBuYW1lID0gYXdhaXQgYm9vay5nZXROYW1lKCk7XG5cdFx0XHRcdG9wZW5Xb3JrYm9va3MucHVzaCh7XG5cdFx0XHRcdFx0Ym9vayxcblx0XHRcdFx0XHRuYW1lXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBvcHRpb25FbXB0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cdFx0XHRvcHRpb25FbXB0eS5pbm5lckhUTUwgPSBcIi0tLS1TZWxlY3Qgd29ya2Jvb2stLS0tXCI7XG5cdFx0XHRvcHRpb25FbXB0eS52YWx1ZSA9IFwiXCI7XG5cdFx0XHRvcHRpb25FbXB0eS5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRvcHRpb25FbXB0eS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRzZWxlY3QuYXBwZW5kKG9wdGlvbkVtcHR5KTtcblxuXHRcdFx0Zm9yIChjb25zdCBvcGVuV29ya2Jvb2sgb2Ygb3Blbldvcmtib29rcykge1xuXHRcdFx0XHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdFx0XHRvcHRpb24uaW5uZXJIVE1MID0gb3Blbldvcmtib29rLm5hbWU7XG5cdFx0XHRcdG9wdGlvbi52YWx1ZSA9IG9wZW5Xb3JrYm9vay5uYW1lO1xuXHRcdFx0XHRzZWxlY3QuYXBwZW5kKG9wdGlvbik7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdFx0XHRzaG93RXJyb3IoZXJyKTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2VsZWN0LmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRyZWZyZXNoQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0fVxuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNlbGVjdFdvcmtib29rKG5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBuZXdXb3JrYm9va0luZGV4ID0gb3Blbldvcmtib29rcy5maW5kSW5kZXgoKHcpID0+IHcubmFtZSA9PT0gbmFtZSk7XG5cblx0aWYgKG5ld1dvcmtib29rSW5kZXggIT09IHNlbGVjdGVkV29ya2Jvb2tJbmRleCkge1xuXHRcdHNlbGVjdGVkV29ya2Jvb2tJbmRleCA9IG5ld1dvcmtib29rSW5kZXg7XG5cdFx0aWYgKG5ld1dvcmtib29rSW5kZXggPj0gMCkge1xuXHRcdFx0YXdhaXQgb3Blbldvcmtib29rc1tzZWxlY3RlZFdvcmtib29rSW5kZXhdLmJvb2suYWN0aXZhdGUoKTtcblx0XHR9XG5cdH1cblxuXHRhd2FpdCBwb3B1bGF0ZVdvcmtzaGVldHMoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVXb3Jrc2hlZXRzKCk6IFByb21pc2U8dm9pZD4ge1xuXHRpZiAoZXhjZWwpIHtcblx0XHRzZWxlY3RlZFdvcmtzaGVldEluZGV4ID0gdW5kZWZpbmVkO1xuXHRcdGNvbnN0IHJlZnJlc2hCdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3b3Jrc2hlZXQtcmVmcmVzaFwiKTtcblx0XHRyZWZyZXNoQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuXHRcdGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KFwiI3dvcmtzaGVldHNcIik7XG5cdFx0c2VsZWN0LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRzZWxlY3QuaW5uZXJIVE1MID0gXCJcIjtcblxuXHRcdG9wZW5Xb3Jrc2hlZXRzID0gW107XG5cblx0XHRjb25zdCB3b3JrYm9vayA9IG9wZW5Xb3JrYm9va3Nbc2VsZWN0ZWRXb3JrYm9va0luZGV4XTtcblx0XHRpZiAod29ya2Jvb2spIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHNoZWV0cyA9IGF3YWl0IHdvcmtib29rLmJvb2suZ2V0V29ya3NoZWV0cygpO1xuXG5cdFx0XHRcdGZvciAoY29uc3Qgc2hlZXQgb2Ygc2hlZXRzKSB7XG5cdFx0XHRcdFx0Y29uc3QgbmFtZSA9IGF3YWl0IHNoZWV0LmdldE5hbWUoKTtcblx0XHRcdFx0XHRvcGVuV29ya3NoZWV0cy5wdXNoKHtcblx0XHRcdFx0XHRcdHNoZWV0LFxuXHRcdFx0XHRcdFx0bmFtZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3Qgb3B0aW9uRW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdFx0XHRvcHRpb25FbXB0eS5pbm5lckhUTUwgPSBcIi0tLS1TZWxlY3Qgd29ya3NoZWV0LS0tLVwiO1xuXHRcdFx0XHRvcHRpb25FbXB0eS52YWx1ZSA9IFwiXCI7XG5cdFx0XHRcdG9wdGlvbkVtcHR5LnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdFx0b3B0aW9uRW1wdHkuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRzZWxlY3QuYXBwZW5kKG9wdGlvbkVtcHR5KTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IG9wZW5Xb3Jrc2hlZXQgb2Ygb3BlbldvcmtzaGVldHMpIHtcblx0XHRcdFx0XHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdFx0XHRcdG9wdGlvbi5pbm5lckhUTUwgPSBvcGVuV29ya3NoZWV0Lm5hbWU7XG5cdFx0XHRcdFx0b3B0aW9uLnZhbHVlID0gb3BlbldvcmtzaGVldC5uYW1lO1xuXHRcdFx0XHRcdHNlbGVjdC5hcHBlbmQob3B0aW9uKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblx0XHRcdFx0c2hvd0Vycm9yKGVycik7XG5cdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRzZWxlY3QuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0cmVmcmVzaEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBzZWxlY3RXb3Jrc2hlZXQobmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IG5ld1dvcmtzaGVldEluZGV4ID0gb3BlbldvcmtzaGVldHMuZmluZEluZGV4KCh3KSA9PiB3Lm5hbWUgPT09IG5hbWUpO1xuXG5cdGlmIChuZXdXb3Jrc2hlZXRJbmRleCAhPT0gc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleCkge1xuXHRcdGNvbnN0IG9sZFdvcmtzaGVldCA9IG9wZW5Xb3Jrc2hlZXRzW3NlbGVjdGVkV29ya3NoZWV0SW5kZXhdO1xuXHRcdGlmIChvbGRXb3Jrc2hlZXQpIHtcblx0XHRcdGF3YWl0IG9sZFdvcmtzaGVldC5zaGVldC5yZW1vdmVFdmVudExpc3RlbmVyKGhhbmRsZUNlbGxDaGFuZ2UpO1xuXHRcdH1cblxuXHRcdHNlbGVjdGVkV29ya3NoZWV0SW5kZXggPSBuZXdXb3Jrc2hlZXRJbmRleDtcblx0XHRpZiAoc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleCA+PSAwKSB7XG5cdFx0XHRhd2FpdCBvcGVuV29ya3NoZWV0c1tzZWxlY3RlZFdvcmtzaGVldEluZGV4XS5zaGVldC5hY3RpdmF0ZSgpO1xuXHRcdFx0YXdhaXQgb3BlbldvcmtzaGVldHNbc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleF0uc2hlZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoYW5kbGVDZWxsQ2hhbmdlKTtcblxuXHRcdFx0Y29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3Jlc3VsdHMtY29udGFpbmVyXCIpO1xuXHRcdFx0cmVzdWx0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjY2VsbC1sb2NhdGlvblwiKS5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNjZWxsLXZhbHVlXCIpLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI3NldC12YWx1ZVwiKS5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdH1cblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVDZWxsQ2hhbmdlKGNlbGxzOiBDZWxsW10pOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgY2VsbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2VsbC1jaGFuZ2VzLWNvbnRhaW5lclwiKTtcblx0Y2VsbENvbnRhaW5lci5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShjZWxscywgdW5kZWZpbmVkLCBcIiAgXCIpO1xuXG5cdGZvciAoY29uc3QgY2VsbCBvZiBjZWxscykge1xuXHRcdGlmIChLTk9XTl9JTlNUUlVNRU5UUy5pbmNsdWRlcyhjZWxsLnZhbHVlKSkge1xuXHRcdFx0YXdhaXQgYnJvYWRjYXN0SW5zdHJ1bWVudChjZWxsLnZhbHVlKTtcblx0XHR9XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0Q2VsbFZhbHVlKCk6IFByb21pc2U8dm9pZD4ge1xuXHRpZiAob3BlbldvcmtzaGVldHMgJiYgc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Y29uc3QgY2VsbExvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNjZWxsLWxvY2F0aW9uXCIpO1xuXHRcdGNvbnN0IGNlbGxWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjY2VsbC12YWx1ZVwiKTtcblxuXHRcdGF3YWl0IG9wZW5Xb3Jrc2hlZXRzW3NlbGVjdGVkV29ya3NoZWV0SW5kZXhdLnNoZWV0LnNldENlbGxWYWx1ZXMoY2VsbExvY2F0aW9uLnZhbHVlLCBbW2NlbGxWYWx1ZS52YWx1ZV1dKTtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBicm9hZGNhc3RJbnN0cnVtZW50KGluc3RydW1lbnQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBicm9hZGNhc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNicm9hZGNhc3QtaW5zdHJ1bWVudFwiKTtcblx0aWYgKHdpbmRvdy5mZGMzKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGZkY0luc3RydW1lbnQgPSB7XG5cdFx0XHRcdHR5cGU6IFwiZmRjMy5pbnN0cnVtZW50XCIsXG5cdFx0XHRcdGlkOiB7XG5cdFx0XHRcdFx0dGlja2VyOiBpbnN0cnVtZW50XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IGNoYW5uZWwgPSBhd2FpdCBnZXRDdXJyZW50Q2hhbm5lbCgpO1xuXHRcdFx0Y2hhbm5lbC5icm9hZGNhc3QoZmRjSW5zdHJ1bWVudCk7XG5cblx0XHRcdGJyb2FkY2FzdEVsZW1lbnQudmFsdWUgPSBpbnN0cnVtZW50O1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0YnJvYWRjYXN0RWxlbWVudC52YWx1ZSA9IGVyci5tZXNzYWdlO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRicm9hZGNhc3RFbGVtZW50LnRleHRDb250ZW50ID0gXCJObyBGRDMgQ2hhbm5lbCBhdmFpbGFibGVcIjtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9