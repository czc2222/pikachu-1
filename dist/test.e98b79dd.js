// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.skin* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n.skin*::after, .skin*::before {\n  box-sizing: border-box;\n}\n.html{\n  background: #ffe600;\n  min-height: 50vh;\n}\n\n.skin  {\n  position: relative;\n  left: 50%;\n  top: 200px;\n  \n}\n@keyframes wave {\n  0%{\n    transform: rotate(0deg);\n  }\n  33%{\n    transform: rotate( 5deg);\n  }\n  66%{\n    transform: rotate( -5deg);\n  }\n  100%{\n    transform: rotate(0deg);\n  }\n}\n.skin .nose{\n  position: absolute;\n\n}\n.skin .nose:hover{\n  transform-origin: 50% 100%;   /*50%\u662F\u4E2D\u5FC3 100%\u662F\u6700\u4E0B\u9762*/\n  animation: wave 200ms  infinite linear;\n}\n.skin .nose .triangle {\n  border: 10px solid;\n  border-bottom-color: transparent;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  position: absolute;\n  margin-left: -10px;\n}\n.skin .nose .oval {\n  width: 20px;\n  height: 8px;\n  position: absolute;\n  top: -5px;\n  border-radius: 50%;\n  background-color: black;\n  margin-left: -10px;\n}\n.skin .eyes {\n  width: 56px;\n  height: 56px;\n\n  border-radius: 50%;\n}\n.skin .eyes.left {\n  position: absolute;\n  left: -150px;\n  margin-right: -28px;\n  top:-25px;\n  background-color: #2e2e2e;\n}\n.skin .eyes.right {\n  position: absolute;\n  left: 150px;\n  margin-left: -56px;\n  top:-25px;\n  background-color: #2e2e2e;\n}\n.skin .eyes::after{\n  content:'';\n  display: block;\n  border: 1px solid #2e2e2e;\n  width: 28px;\n  height: 28px;\n  background-color: white;\n  border-radius: 50%;\n  position: absolute;\n  left: 50%;\n  margin-left: -18px;\n  top: 2px;\n}\n\n\n.skin .mouth .right{\n  width:100px;\n  height:40px;\n  border: 3px solid black;\n  border-radius: 50%;\n  border-left-color: transparent;\n  border-top-color: transparent;\n  transform: rotate(15deg);\n  position:absolute;\n  left: -9px;\n  top:25px;\n  background: #ffe600;\n  z-index: 1;\n}\n.skin .mouth .left{\n  width:100px;\n  height:40px;\n  border: 3px solid black;\n  border-radius: 50%;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  transform: rotate(-15deg);\n  position:absolute;\n  left:-92px;\n  top: 25px;\n  z-index: 1;\n  background: #ffe600;\n}\n\n.skin .mouth .right::after{\n  content:'';\n  display: block;\n  width:30px;\n  height:15px;\n\n  background-color: #ffe600;\n  position: absolute;\n  left:80px;\n}\n\n.skin .mouth .left::after{\n  content:'';\n  display: block;\n  width:30px;\n  height:15px;\n\n  background-color: #ffe600;\n  position: absolute;\n  left:-20px;\n}\n.skin .tongue{\n  width: 200px;\n  height:220px;\n  position: absolute;\n  left: -100px;\n  top:43px;\n  overflow: hidden;\n\n}\n.skin .tongue .up{\n  width: 180px;\n  height: 1000px;\n  border: 4px solid black;\n  background: #9b000a;\n  position: absolute;\n  bottom: 30px;\n  border-radius: 50%/50%;\n  left: 50%;\n  margin-left: -90px;\n  overflow: hidden;\n}\n.skin .tongue .up .bottom{\n  width: 120px;\n  height: 200px;\n  border: 2px solid red;\n  position: absolute;\n  left: 50%;\n  margin-left: -60px;\n  bottom: -50px;\n  border-radius: 90%/40%;\n  background: #ff485f;\n}\n.skin .face{\n  width:90px;\n  height:90px;\n  border: 3px solid black;\n  border-radius: 50%;\n  left:50%;\n  margin-left: -45px;\n  background: #ff0000;\n}\n.face > img{\n\n  position: absolute;\n  top:50%;\n  left:50%;\n}\n.face.left > img{\n  transform-origin: 0 0;\n  transform: rotateY(180deg);\n}\n.skin .face.left{\n\n  transform: translate(-180px,90px);\n\n}\n.skin .face.right{\n  transform: translateX(180px);\n}\n\n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demo = document.querySelector('#demo');
var demo2 = document.querySelector('#demo2');
var n = 1;
demo.innerHTML = _css.default.substring(0, n); //返回字符串的子字符串写入到页面中

demo2.innerText = _css.default.substring(0, n); //写到页面的文本中

var time = 50;

var run = function run() {
  //运行
  if (id > _css.default.length) {
    //如果id大于字符串的长度
    window.clearInterval(id); //清除调用函数

    return; //直接返回
  }

  n += 1;
  demo.innerHTML = _css.default.substring(0, n);
  demo2.innerText = _css.default.substring(0, n);
  demo2.scrollTop = demo2.scrollHeight; //demo2的滚动最大高度等于自身的滚动高度
};

var play = function play() {
  //调用事件
  return setInterval(run, time); //按时间调用这个函数都会有个id值，表示调用了多少次
};

var id = play();

var pause = function pause() {
  //清除调用事件
  return window.clearInterval(id);
};

var play1 = function play1() {
  pause();
  id = play();
};

var slow = function slow() {
  pause();
  time = 100;
  id = play();
};

var normal = function normal() {
  pause();
  time = 25;
  id = play();
};

var fast = function fast() {
  pause();
  time = 0;
  id = play();
};

document.querySelector('#btnPause').onclick = pause;
document.querySelector('#btnPlay').onclick = play1;
document.querySelector('#btnSlow').onclick = slow;
document.querySelector('#btnNormal').onclick = normal;
document.querySelector('#btnFast').onclick = fast;
},{"./css.js":"css.js"}],"D:/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54538" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["D:/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map