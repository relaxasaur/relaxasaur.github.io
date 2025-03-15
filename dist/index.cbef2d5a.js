// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4XOYJ":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "b59a2c58cbef2d5a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"jzhVe":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$3450 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$3450.prelude(module);

try {
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactTimerHook = require("react-timer-hook");
var _preact = require("preact");
function MyStopwatch() {
    const { seconds, minutes, hours, days } = (0, _reactTimerHook.useStopwatch)({
        autoStart: true,
        interval: 20
    });
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                children: days
            }, void 0, false, {
                fileName: "CountUp.js",
                lineNumber: 14,
                columnNumber: 12
            }, this),
            "d ",
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                children: hours
            }, void 0, false, {
                fileName: "CountUp.js",
                lineNumber: 14,
                columnNumber: 33
            }, this),
            "h ",
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                children: minutes
            }, void 0, false, {
                fileName: "CountUp.js",
                lineNumber: 14,
                columnNumber: 55
            }, this),
            "m ",
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                children: seconds
            }, void 0, false, {
                fileName: "CountUp.js",
                lineNumber: 14,
                columnNumber: 79
            }, this),
            "s"
        ]
    }, void 0, true, {
        fileName: "CountUp.js",
        lineNumber: 14,
        columnNumber: 7
    }, this);
}
const timer = document.getElementById('timer');
(0, _preact.render)(/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(MyStopwatch, {}, void 0, false, {
    fileName: "CountUp.js",
    lineNumber: 19,
    columnNumber: 8
}, undefined), timer);

  $parcel$ReactRefreshHelpers$3450.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"kxS54","react-timer-hook":"fvzkt","preact":"26zcy","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"kxS54":[function(require,module,exports,__globalThis) {
require("534d017fa4ef05ac");
module.exports = require("12d0a72f274d0c83");

},{"534d017fa4ef05ac":"aF0cT","12d0a72f274d0c83":"3mFUL"}],"aF0cT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>(0, _preact.Component));
parcelHelpers.export(exports, "Fragment", ()=>(0, _preact.Fragment));
parcelHelpers.export(exports, "createContext", ()=>(0, _preact.createContext));
parcelHelpers.export(exports, "createElement", ()=>(0, _preact.createElement));
parcelHelpers.export(exports, "createRef", ()=>(0, _preact.createRef));
parcelHelpers.export(exports, "Children", ()=>O);
parcelHelpers.export(exports, "PureComponent", ()=>N);
parcelHelpers.export(exports, "StrictMode", ()=>Cn);
parcelHelpers.export(exports, "Suspense", ()=>P);
parcelHelpers.export(exports, "SuspenseList", ()=>B);
parcelHelpers.export(exports, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", ()=>hn);
parcelHelpers.export(exports, "cloneElement", ()=>_n);
parcelHelpers.export(exports, "createFactory", ()=>dn);
parcelHelpers.export(exports, "createPortal", ()=>$);
parcelHelpers.export(exports, "default", ()=>Rn);
parcelHelpers.export(exports, "findDOMNode", ()=>Sn);
parcelHelpers.export(exports, "flushSync", ()=>En);
parcelHelpers.export(exports, "forwardRef", ()=>D);
parcelHelpers.export(exports, "hydrate", ()=>tn);
parcelHelpers.export(exports, "isElement", ()=>xn);
parcelHelpers.export(exports, "isFragment", ()=>mn);
parcelHelpers.export(exports, "isMemo", ()=>yn);
parcelHelpers.export(exports, "isValidElement", ()=>pn);
parcelHelpers.export(exports, "lazy", ()=>z);
parcelHelpers.export(exports, "memo", ()=>M);
parcelHelpers.export(exports, "render", ()=>nn);
parcelHelpers.export(exports, "startTransition", ()=>R);
parcelHelpers.export(exports, "unmountComponentAtNode", ()=>bn);
parcelHelpers.export(exports, "unstable_batchedUpdates", ()=>gn);
parcelHelpers.export(exports, "useDeferredValue", ()=>w);
parcelHelpers.export(exports, "useInsertionEffect", ()=>I);
parcelHelpers.export(exports, "useSyncExternalStore", ()=>C);
parcelHelpers.export(exports, "useTransition", ()=>k);
parcelHelpers.export(exports, "version", ()=>vn);
var _preact = require("preact");
var _hooks = require("preact/hooks");
parcelHelpers.exportAll(_hooks, exports);
function g(n, t) {
    for(var e in t)n[e] = t[e];
    return n;
}
function E(n, t) {
    for(var e in n)if ("__source" !== e && !(e in t)) return !0;
    for(var r in t)if ("__source" !== r && n[r] !== t[r]) return !0;
    return !1;
}
function C(n, t) {
    var e = t(), r = (0, _hooks.useState)({
        t: {
            __: e,
            u: t
        }
    }), u = r[0].t, o = r[1];
    return (0, _hooks.useLayoutEffect)(function() {
        u.__ = e, u.u = t, x(u) && o({
            t: u
        });
    }, [
        n,
        e,
        t
    ]), (0, _hooks.useEffect)(function() {
        return x(u) && o({
            t: u
        }), n(function() {
            x(u) && o({
                t: u
            });
        });
    }, [
        n
    ]), e;
}
function x(n) {
    var t, e, r = n.u, u = n.__;
    try {
        var o = r();
        return !((t = u) === (e = o) && (0 !== t || 1 / t == 1 / e) || t != t && e != e);
    } catch (n) {
        return !0;
    }
}
function R(n) {
    n();
}
function w(n) {
    return n;
}
function k() {
    return [
        !1,
        R
    ];
}
var I = (0, _hooks.useLayoutEffect);
function N(n, t) {
    this.props = n, this.context = t;
}
function M(n, e) {
    function r(n) {
        var t = this.props.ref, r = t == n.ref;
        return !r && t && (t.call ? t(null) : t.current = null), e ? !e(this.props, n) || !r : E(this.props, n);
    }
    function u(e) {
        return this.shouldComponentUpdate = r, (0, _preact.createElement)(n, e);
    }
    return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = !0, u.__f = !0, u;
}
(N.prototype = new (0, _preact.Component)).isPureReactComponent = !0, N.prototype.shouldComponentUpdate = function(n, t) {
    return E(this.props, n) || E(this.state, t);
};
var T = (0, _preact.options).__b;
(0, _preact.options).__b = function(n) {
    n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), T && T(n);
};
var A = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function D(n) {
    function t(t) {
        var e = g({}, t);
        return delete e.ref, n(e, t.ref || null);
    }
    return t.$$typeof = A, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}
var L = function(n, t) {
    return null == n ? null : (0, _preact.toChildArray)((0, _preact.toChildArray)(n).map(t));
}, O = {
    map: L,
    forEach: L,
    count: function(n) {
        return n ? (0, _preact.toChildArray)(n).length : 0;
    },
    only: function(n) {
        var t = (0, _preact.toChildArray)(n);
        if (1 !== t.length) throw "Children.only";
        return t[0];
    },
    toArray: (0, _preact.toChildArray)
}, F = (0, _preact.options).__e;
(0, _preact.options).__e = function(n, t, e, r) {
    if (n.then) {
        for(var u, o = t; o = o.__;)if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
    }
    F(n, t, e, r);
};
var U = (0, _preact.options).unmount;
function V(n, t, e) {
    return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function(n) {
        "function" == typeof n.__c && n.__c();
    }), n.__c.__H = null), null != (n = g({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c = null), n.__k = n.__k && n.__k.map(function(n) {
        return V(n, t, e);
    })), n;
}
function W(n, t, e) {
    return n && e && (n.__v = null, n.__k = n.__k && n.__k.map(function(n) {
        return W(n, t, e);
    }), n.__c && n.__c.__P === t && (n.__e && e.appendChild(n.__e), n.__c.__e = !0, n.__c.__P = e)), n;
}
function P() {
    this.__u = 0, this.o = null, this.__b = null;
}
function j(n) {
    var t = n.__.__c;
    return t && t.__a && t.__a(n);
}
function z(n) {
    var e, r, u;
    function o(o) {
        if (e || (e = n()).then(function(n) {
            r = n.default || n;
        }, function(n) {
            u = n;
        }), u) throw u;
        if (!r) throw e;
        return (0, _preact.createElement)(r, o);
    }
    return o.displayName = "Lazy", o.__f = !0, o;
}
function B() {
    this.i = null, this.l = null;
}
(0, _preact.options).unmount = function(n) {
    var t = n.__c;
    t && t.__R && t.__R(), t && 32 & n.__u && (n.type = null), U && U(n);
}, (P.prototype = new (0, _preact.Component)).__c = function(n, t) {
    var e = t.__c, r = this;
    null == r.o && (r.o = []), r.o.push(e);
    var u = j(r.__v), o = !1, i = function() {
        o || (o = !0, e.__R = null, u ? u(c) : c());
    };
    e.__R = i;
    var c = function() {
        if (!--r.__u) {
            if (r.state.__a) {
                var n = r.state.__a;
                r.__v.__k[0] = W(n, n.__c.__P, n.__c.__O);
            }
            var t;
            for(r.setState({
                __a: r.__b = null
            }); t = r.o.pop();)t.forceUpdate();
        }
    };
    r.__u++ || 32 & t.__u || r.setState({
        __a: r.__b = r.__v.__k[0]
    }), n.then(i, i);
}, P.prototype.componentWillUnmount = function() {
    this.o = [];
}, P.prototype.render = function(n, e) {
    if (this.__b) {
        if (this.__v.__k) {
            var r = document.createElement("div"), o = this.__v.__k[0].__c;
            this.__v.__k[0] = V(this.__b, r, o.__O = o.__P);
        }
        this.__b = null;
    }
    var i = e.__a && (0, _preact.createElement)((0, _preact.Fragment), null, n.fallback);
    return i && (i.__u &= -33), [
        (0, _preact.createElement)((0, _preact.Fragment), null, e.__a ? null : n.children),
        i
    ];
};
var H = function(n, t, e) {
    if (++e[1] === e[0] && n.l.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.l.size)) for(e = n.i; e;){
        for(; e.length > 3;)e.pop()();
        if (e[1] < e[0]) break;
        n.i = e = e[2];
    }
};
function Z(n) {
    return this.getChildContext = function() {
        return n.context;
    }, n.children;
}
function Y(n) {
    var e = this, r = n.h;
    e.componentWillUnmount = function() {
        (0, _preact.render)(null, e.v), e.v = null, e.h = null;
    }, e.h && e.h !== r && e.componentWillUnmount(), e.v || (e.h = r, e.v = {
        nodeType: 1,
        parentNode: r,
        childNodes: [],
        contains: function() {
            return !0;
        },
        appendChild: function(n) {
            this.childNodes.push(n), e.h.appendChild(n);
        },
        insertBefore: function(n, t) {
            this.childNodes.push(n), e.h.insertBefore(n, t);
        },
        removeChild: function(n) {
            this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.h.removeChild(n);
        }
    }), (0, _preact.render)((0, _preact.createElement)(Z, {
        context: e.context
    }, n.__v), e.v);
}
function $(n, e) {
    var r = (0, _preact.createElement)(Y, {
        __v: n,
        h: e
    });
    return r.containerInfo = e, r;
}
(B.prototype = new (0, _preact.Component)).__a = function(n) {
    var t = this, e = j(t.__v), r = t.l.get(n);
    return r[0]++, function(u) {
        var o = function() {
            t.props.revealOrder ? (r.push(u), H(t, n, r)) : u();
        };
        e ? e(o) : o();
    };
}, B.prototype.render = function(n) {
    this.i = null, this.l = new Map;
    var t = (0, _preact.toChildArray)(n.children);
    n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
    for(var e = t.length; e--;)this.l.set(t[e], this.i = [
        1,
        0,
        this.i
    ]);
    return n.children;
}, B.prototype.componentDidUpdate = B.prototype.componentDidMount = function() {
    var n = this;
    this.l.forEach(function(t, e) {
        H(n, e, t);
    });
};
var q = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, G = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, J = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, K = /[A-Z0-9]/g, Q = "undefined" != typeof document, X = function(n) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n);
};
function nn(n, t, e) {
    return null == t.__k && (t.textContent = ""), (0, _preact.render)(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
function tn(n, t, e) {
    return (0, _preact.hydrate)(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
(0, _preact.Component).prototype.isReactComponent = {}, [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate"
].forEach(function(t) {
    Object.defineProperty((0, _preact.Component).prototype, t, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + t];
        },
        set: function(n) {
            Object.defineProperty(this, t, {
                configurable: !0,
                writable: !0,
                value: n
            });
        }
    });
});
var en = (0, _preact.options).event;
function rn() {}
function un() {
    return this.cancelBubble;
}
function on() {
    return this.defaultPrevented;
}
(0, _preact.options).event = function(n) {
    return en && (n = en(n)), n.persist = rn, n.isPropagationStopped = un, n.isDefaultPrevented = on, n.nativeEvent = n;
};
var cn, ln = {
    enumerable: !1,
    configurable: !0,
    get: function() {
        return this.class;
    }
}, fn = (0, _preact.options).vnode;
(0, _preact.options).vnode = function(n) {
    "string" == typeof n.type && function(n) {
        var t = n.props, e = n.type, u = {}, o = -1 === e.indexOf("-");
        for(var i in t){
            var c = t[i];
            if (!("value" === i && "defaultValue" in t && null == c || Q && "children" === i && "noscript" === e || "class" === i || "className" === i)) {
                var l = i.toLowerCase();
                "defaultValue" === i && "value" in t && null == t.value ? i = "value" : "download" === i && !0 === c ? c = "" : "translate" === l && "no" === c ? c = !1 : "o" === l[0] && "n" === l[1] ? "ondoubleclick" === l ? i = "ondblclick" : "onchange" !== l || "input" !== e && "textarea" !== e || X(t.type) ? "onfocus" === l ? i = "onfocusin" : "onblur" === l ? i = "onfocusout" : J.test(i) && (i = l) : l = i = "oninput" : o && G.test(i) ? i = i.replace(K, "-$&").toLowerCase() : null === c && (c = void 0), "oninput" === l && u[i = l] && (i = "oninputCapture"), u[i] = c;
            }
        }
        "select" == e && u.multiple && Array.isArray(u.value) && (u.value = (0, _preact.toChildArray)(t.children).forEach(function(n) {
            n.props.selected = -1 != u.value.indexOf(n.props.value);
        })), "select" == e && null != u.defaultValue && (u.value = (0, _preact.toChildArray)(t.children).forEach(function(n) {
            n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
        })), t.class && !t.className ? (u.class = t.class, Object.defineProperty(u, "className", ln)) : (t.className && !t.class || t.class && t.className) && (u.class = u.className = t.className), n.props = u;
    }(n), n.$$typeof = q, fn && fn(n);
};
var an = (0, _preact.options).__r;
(0, _preact.options).__r = function(n) {
    an && an(n), cn = n.__c;
};
var sn = (0, _preact.options).diffed;
(0, _preact.options).diffed = function(n) {
    sn && sn(n);
    var t = n.props, e = n.__e;
    null != e && "textarea" === n.type && "value" in t && t.value !== e.value && (e.value = null == t.value ? "" : t.value), cn = null;
};
var hn = {
    ReactCurrentDispatcher: {
        current: {
            readContext: function(n) {
                return cn.__n[n.__c].props.value;
            },
            useCallback: (0, _hooks.useCallback),
            useContext: (0, _hooks.useContext),
            useDebugValue: (0, _hooks.useDebugValue),
            useDeferredValue: w,
            useEffect: (0, _hooks.useEffect),
            useId: (0, _hooks.useId),
            useImperativeHandle: (0, _hooks.useImperativeHandle),
            useInsertionEffect: I,
            useLayoutEffect: (0, _hooks.useLayoutEffect),
            useMemo: (0, _hooks.useMemo),
            useReducer: (0, _hooks.useReducer),
            useRef: (0, _hooks.useRef),
            useState: (0, _hooks.useState),
            useSyncExternalStore: C,
            useTransition: k
        }
    }
}, vn = "18.3.1";
function dn(n) {
    return (0, _preact.createElement).bind(null, n);
}
function pn(n) {
    return !!n && n.$$typeof === q;
}
function mn(n) {
    return pn(n) && n.type === (0, _preact.Fragment);
}
function yn(n) {
    return !!n && !!n.displayName && ("string" == typeof n.displayName || n.displayName instanceof String) && n.displayName.startsWith("Memo(");
}
function _n(n) {
    return pn(n) ? (0, _preact.cloneElement).apply(null, arguments) : n;
}
function bn(n) {
    return !!n.__k && ((0, _preact.render)(null, n), !0);
}
function Sn(n) {
    return n && (n.base || 1 === n.nodeType && n) || null;
}
var gn = function(n, t) {
    return n(t);
}, En = function(n, t) {
    return n(t);
}, Cn = (0, _preact.Fragment), xn = pn, Rn = {
    useState: (0, _hooks.useState),
    useId: (0, _hooks.useId),
    useReducer: (0, _hooks.useReducer),
    useEffect: (0, _hooks.useEffect),
    useLayoutEffect: (0, _hooks.useLayoutEffect),
    useInsertionEffect: I,
    useTransition: k,
    useDeferredValue: w,
    useSyncExternalStore: C,
    startTransition: R,
    useRef: (0, _hooks.useRef),
    useImperativeHandle: (0, _hooks.useImperativeHandle),
    useMemo: (0, _hooks.useMemo),
    useCallback: (0, _hooks.useCallback),
    useContext: (0, _hooks.useContext),
    useDebugValue: (0, _hooks.useDebugValue),
    version: "18.3.1",
    Children: O,
    render: nn,
    hydrate: tn,
    unmountComponentAtNode: bn,
    createPortal: $,
    createElement: (0, _preact.createElement),
    createContext: (0, _preact.createContext),
    createFactory: dn,
    cloneElement: _n,
    createRef: (0, _preact.createRef),
    Fragment: (0, _preact.Fragment),
    isValidElement: pn,
    isElement: xn,
    isFragment: mn,
    isMemo: yn,
    findDOMNode: Sn,
    Component: (0, _preact.Component),
    PureComponent: N,
    memo: M,
    forwardRef: D,
    flushSync: En,
    unstable_batchedUpdates: gn,
    StrictMode: Cn,
    Suspense: P,
    SuspenseList: B,
    lazy: z,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hn
};

},{"preact":"26zcy","preact/hooks":"eZN76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"26zcy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>x);
parcelHelpers.export(exports, "Fragment", ()=>k);
parcelHelpers.export(exports, "cloneElement", ()=>J);
parcelHelpers.export(exports, "createContext", ()=>K);
parcelHelpers.export(exports, "createElement", ()=>_);
parcelHelpers.export(exports, "createRef", ()=>b);
parcelHelpers.export(exports, "h", ()=>_);
parcelHelpers.export(exports, "hydrate", ()=>G);
parcelHelpers.export(exports, "isValidElement", ()=>u);
parcelHelpers.export(exports, "options", ()=>l);
parcelHelpers.export(exports, "render", ()=>E);
parcelHelpers.export(exports, "toChildArray", ()=>H);
var n, l, t, u, i, r, o, e, f, c, s, a, h, p = {}, v = [], y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, d = Array.isArray;
function w(n, l) {
    for(var t in l)n[t] = l[t];
    return n;
}
function g(n) {
    n && n.parentNode && n.parentNode.removeChild(n);
}
function _(l, t, u) {
    var i, r, o, e = {};
    for(o in t)"key" == o ? i = t[o] : "ref" == o ? r = t[o] : e[o] = t[o];
    if (arguments.length > 2 && (e.children = arguments.length > 3 ? n.call(arguments, 2) : u), "function" == typeof l && null != l.defaultProps) for(o in l.defaultProps)void 0 === e[o] && (e[o] = l.defaultProps[o]);
    return m(l, e, i, r, null);
}
function m(n, u, i, r, o) {
    var e = {
        type: n,
        props: u,
        key: i,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: null == o ? ++t : o,
        __i: -1,
        __u: 0
    };
    return null == o && null != l.vnode && l.vnode(e), e;
}
function b() {
    return {
        current: null
    };
}
function k(n) {
    return n.children;
}
function x(n, l) {
    this.props = n, this.context = l;
}
function S(n, l) {
    if (null == l) return n.__ ? S(n.__, n.__i + 1) : null;
    for(var t; l < n.__k.length; l++)if (null != (t = n.__k[l]) && null != t.__e) return t.__e;
    return "function" == typeof n.type ? S(n) : null;
}
function C(n) {
    var l, t;
    if (null != (n = n.__) && null != n.__c) {
        for(n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)if (null != (t = n.__k[l]) && null != t.__e) {
            n.__e = n.__c.base = t.__e;
            break;
        }
        return C(n);
    }
}
function M(n) {
    (!n.__d && (n.__d = !0) && i.push(n) && !$.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)($);
}
function $() {
    for(var n, t, u, r, o, f, c, s = 1; i.length;)i.length > s && i.sort(e), n = i.shift(), s = i.length, n.__d && (u = void 0, o = (r = (t = n).__v).__e, f = [], c = [], t.__P && ((u = w({}, r)).__v = r.__v + 1, l.vnode && l.vnode(u), O(t.__P, u, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [
        o
    ] : null, f, null == o ? S(r) : o, !!(32 & r.__u), c), u.__v = r.__v, u.__.__k[u.__i] = u, z(f, u, c), u.__e != o && C(u)));
    $.__r = 0;
}
function I(n, l, t, u, i, r, o, e, f, c, s) {
    var a, h, y, d, w, g, _ = u && u.__k || v, m = l.length;
    for(f = P(t, l, _, f, m), a = 0; a < m; a++)null != (y = t.__k[a]) && (h = -1 === y.__i ? p : _[y.__i] || p, y.__i = a, g = O(n, y, h, i, r, o, e, f, c, s), d = y.__e, y.ref && h.ref != y.ref && (h.ref && q(h.ref, null, y), s.push(y.ref, y.__c || d, y)), null == w && null != d && (w = d), 4 & y.__u || h.__k === y.__k ? f = A(y, f, n) : "function" == typeof y.type && void 0 !== g ? f = g : d && (f = d.nextSibling), y.__u &= -7);
    return t.__e = w, f;
}
function P(n, l, t, u, i) {
    var r, o, e, f, c, s = t.length, a = s, h = 0;
    for(n.__k = new Array(i), r = 0; r < i; r++)null != (o = l[r]) && "boolean" != typeof o && "function" != typeof o ? (f = r + h, (o = n.__k[r] = "string" == typeof o || "number" == typeof o || "bigint" == typeof o || o.constructor == String ? m(null, o, null, null, null) : d(o) ? m(k, {
        children: o
    }, null, null, null) : void 0 === o.constructor && o.__b > 0 ? m(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o).__ = n, o.__b = n.__b + 1, e = null, -1 !== (c = o.__i = L(o, t, f, a)) && (a--, (e = t[c]) && (e.__u |= 2)), null == e || null === e.__v ? (-1 == c && (i > s ? h-- : i < s && h++), "function" != typeof o.type && (o.__u |= 4)) : c != f && (c == f - 1 ? h-- : c == f + 1 ? h++ : (c > f ? h-- : h++, o.__u |= 4))) : n.__k[r] = null;
    if (a) for(r = 0; r < s; r++)null != (e = t[r]) && 0 == (2 & e.__u) && (e.__e == u && (u = S(e)), B(e, e));
    return u;
}
function A(n, l, t) {
    var u, i;
    if ("function" == typeof n.type) {
        for(u = n.__k, i = 0; u && i < u.length; i++)u[i] && (u[i].__ = n, l = A(u[i], l, t));
        return l;
    }
    n.__e != l && (l && n.type && !t.contains(l) && (l = S(n)), t.insertBefore(n.__e, l || null), l = n.__e);
    do l = l && l.nextSibling;
    while (null != l && 8 == l.nodeType);
    return l;
}
function H(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || (d(n) ? n.some(function(n) {
        H(n, l);
    }) : l.push(n)), l;
}
function L(n, l, t, u) {
    var i, r, o = n.key, e = n.type, f = l[t];
    if (null === f && null == n.key || f && o == f.key && e === f.type && 0 == (2 & f.__u)) return t;
    if (u > (null != f && 0 == (2 & f.__u) ? 1 : 0)) for(i = t - 1, r = t + 1; i >= 0 || r < l.length;){
        if (i >= 0) {
            if ((f = l[i]) && 0 == (2 & f.__u) && o == f.key && e === f.type) return i;
            i--;
        }
        if (r < l.length) {
            if ((f = l[r]) && 0 == (2 & f.__u) && o == f.key && e === f.type) return r;
            r++;
        }
    }
    return -1;
}
function T(n, l, t) {
    "-" == l[0] ? n.setProperty(l, null == t ? "" : t) : n[l] = null == t ? "" : "number" != typeof t || y.test(l) ? t : t + "px";
}
function j(n, l, t, u, i) {
    var r;
    n: if ("style" == l) {
        if ("string" == typeof t) n.style.cssText = t;
        else {
            if ("string" == typeof u && (n.style.cssText = u = ""), u) for(l in u)t && l in t || T(n.style, l, "");
            if (t) for(l in t)u && t[l] === u[l] || T(n.style, l, t[l]);
        }
    } else if ("o" == l[0] && "n" == l[1]) r = l != (l = l.replace(f, "$1")), l = l.toLowerCase() in n || "onFocusOut" == l || "onFocusIn" == l ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = t, t ? u ? t.t = u.t : (t.t = c, n.addEventListener(l, r ? a : s, r)) : n.removeEventListener(l, r ? a : s, r);
    else {
        if ("http://www.w3.org/2000/svg" == i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" != l && "height" != l && "href" != l && "list" != l && "form" != l && "tabIndex" != l && "download" != l && "rowSpan" != l && "colSpan" != l && "role" != l && "popover" != l && l in n) try {
            n[l] = null == t ? "" : t;
            break n;
        } catch (n) {}
        "function" == typeof t || (null == t || !1 === t && "-" != l[4] ? n.removeAttribute(l) : n.setAttribute(l, "popover" == l && 1 == t ? "" : t));
    }
}
function F(n) {
    return function(t) {
        if (this.l) {
            var u = this.l[t.type + n];
            if (null == t.u) t.u = c++;
            else if (t.u < u.t) return;
            return u(l.event ? l.event(t) : t);
        }
    };
}
function O(n, t, u, i, r, o, e, f, c, s) {
    var a, h, p, v, y, _, m, b, S, C, M, $, P, A, H, L, T, j = t.type;
    if (void 0 !== t.constructor) return null;
    128 & u.__u && (c = !!(32 & u.__u), o = [
        f = t.__e = u.__e
    ]), (a = l.__b) && a(t);
    n: if ("function" == typeof j) try {
        if (b = t.props, S = "prototype" in j && j.prototype.render, C = (a = j.contextType) && i[a.__c], M = a ? C ? C.props.value : a.__ : i, u.__c ? m = (h = t.__c = u.__c).__ = h.__E : (S ? t.__c = h = new j(b, M) : (t.__c = h = new x(b, M), h.constructor = j, h.render = D), C && C.sub(h), h.props = b, h.state || (h.state = {}), h.context = M, h.__n = i, p = h.__d = !0, h.__h = [], h._sb = []), S && null == h.__s && (h.__s = h.state), S && null != j.getDerivedStateFromProps && (h.__s == h.state && (h.__s = w({}, h.__s)), w(h.__s, j.getDerivedStateFromProps(b, h.__s))), v = h.props, y = h.state, h.__v = t, p) S && null == j.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), S && null != h.componentDidMount && h.__h.push(h.componentDidMount);
        else {
            if (S && null == j.getDerivedStateFromProps && b !== v && null != h.componentWillReceiveProps && h.componentWillReceiveProps(b, M), !h.__e && (null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(b, h.__s, M) || t.__v == u.__v)) {
                for(t.__v != u.__v && (h.props = b, h.state = h.__s, h.__d = !1), t.__e = u.__e, t.__k = u.__k, t.__k.some(function(n) {
                    n && (n.__ = t);
                }), $ = 0; $ < h._sb.length; $++)h.__h.push(h._sb[$]);
                h._sb = [], h.__h.length && e.push(h);
                break n;
            }
            null != h.componentWillUpdate && h.componentWillUpdate(b, h.__s, M), S && null != h.componentDidUpdate && h.__h.push(function() {
                h.componentDidUpdate(v, y, _);
            });
        }
        if (h.context = M, h.props = b, h.__P = n, h.__e = !1, P = l.__r, A = 0, S) {
            for(h.state = h.__s, h.__d = !1, P && P(t), a = h.render(h.props, h.state, h.context), H = 0; H < h._sb.length; H++)h.__h.push(h._sb[H]);
            h._sb = [];
        } else do h.__d = !1, P && P(t), a = h.render(h.props, h.state, h.context), h.state = h.__s;
        while (h.__d && ++A < 25);
        h.state = h.__s, null != h.getChildContext && (i = w(w({}, i), h.getChildContext())), S && !p && null != h.getSnapshotBeforeUpdate && (_ = h.getSnapshotBeforeUpdate(v, y)), L = a, null != a && a.type === k && null == a.key && (L = N(a.props.children)), f = I(n, d(L) ? L : [
            L
        ], t, u, i, r, o, e, f, c, s), h.base = t.__e, t.__u &= -161, h.__h.length && e.push(h), m && (h.__E = h.__ = null);
    } catch (n) {
        if (t.__v = null, c || null != o) {
            if (n.then) {
                for(t.__u |= c ? 160 : 128; f && 8 == f.nodeType && f.nextSibling;)f = f.nextSibling;
                o[o.indexOf(f)] = null, t.__e = f;
            } else for(T = o.length; T--;)g(o[T]);
        } else t.__e = u.__e, t.__k = u.__k;
        l.__e(n, t, u);
    }
    else null == o && t.__v == u.__v ? (t.__k = u.__k, t.__e = u.__e) : f = t.__e = V(u.__e, t, u, i, r, o, e, c, s);
    return (a = l.diffed) && a(t), 128 & t.__u ? void 0 : f;
}
function z(n, t, u) {
    for(var i = 0; i < u.length; i++)q(u[i], u[++i], u[++i]);
    l.__c && l.__c(t, n), n.some(function(t) {
        try {
            n = t.__h, t.__h = [], n.some(function(n) {
                n.call(t);
            });
        } catch (n) {
            l.__e(n, t.__v);
        }
    });
}
function N(n) {
    return "object" != typeof n || null == n ? n : d(n) ? n.map(N) : w({}, n);
}
function V(t, u, i, r, o, e, f, c, s) {
    var a, h, v, y, w, _, m, b = i.props, k = u.props, x = u.type;
    if ("svg" == x ? o = "http://www.w3.org/2000/svg" : "math" == x ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), null != e) {
        for(a = 0; a < e.length; a++)if ((w = e[a]) && "setAttribute" in w == !!x && (x ? w.localName == x : 3 == w.nodeType)) {
            t = w, e[a] = null;
            break;
        }
    }
    if (null == t) {
        if (null == x) return document.createTextNode(k);
        t = document.createElementNS(o, x, k.is && k), c && (l.__m && l.__m(u, e), c = !1), e = null;
    }
    if (null === x) b === k || c && t.data === k || (t.data = k);
    else {
        if (e = e && n.call(t.childNodes), b = i.props || p, !c && null != e) for(b = {}, a = 0; a < t.attributes.length; a++)b[(w = t.attributes[a]).name] = w.value;
        for(a in b)if (w = b[a], "children" == a) ;
        else if ("dangerouslySetInnerHTML" == a) v = w;
        else if (!(a in k)) {
            if ("value" == a && "defaultValue" in k || "checked" == a && "defaultChecked" in k) continue;
            j(t, a, null, w, o);
        }
        for(a in k)w = k[a], "children" == a ? y = w : "dangerouslySetInnerHTML" == a ? h = w : "value" == a ? _ = w : "checked" == a ? m = w : c && "function" != typeof w || b[a] === w || j(t, a, w, b[a], o);
        if (h) c || v && (h.__html === v.__html || h.__html === t.innerHTML) || (t.innerHTML = h.__html), u.__k = [];
        else if (v && (t.innerHTML = ""), I("template" === u.type ? t.content : t, d(y) ? y : [
            y
        ], u, i, r, "foreignObject" == x ? "http://www.w3.org/1999/xhtml" : o, e, f, e ? e[0] : i.__k && S(i, 0), c, s), null != e) for(a = e.length; a--;)g(e[a]);
        c || (a = "value", "progress" == x && null == _ ? t.removeAttribute("value") : void 0 !== _ && (_ !== t[a] || "progress" == x && !_ || "option" == x && _ !== b[a]) && j(t, a, _, b[a], o), a = "checked", void 0 !== m && m !== t[a] && j(t, a, m, b[a], o));
    }
    return t;
}
function q(n, t, u) {
    try {
        if ("function" == typeof n) {
            var i = "function" == typeof n.__u;
            i && n.__u(), i && null == t || (n.__u = n(t));
        } else n.current = t;
    } catch (n) {
        l.__e(n, u);
    }
}
function B(n, t, u) {
    var i, r;
    if (l.unmount && l.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || q(i, null, t)), null != (i = n.__c)) {
        if (i.componentWillUnmount) try {
            i.componentWillUnmount();
        } catch (n) {
            l.__e(n, t);
        }
        i.base = i.__P = null;
    }
    if (i = n.__k) for(r = 0; r < i.length; r++)i[r] && B(i[r], t, u || "function" != typeof n.type);
    u || g(n.__e), n.__c = n.__ = n.__e = void 0;
}
function D(n, l, t) {
    return this.constructor(n, t);
}
function E(t, u, i) {
    var r, o, e, f;
    u == document && (u = document.documentElement), l.__ && l.__(t, u), o = (r = "function" == typeof i) ? null : i && i.__k || u.__k, e = [], f = [], O(u, t = (!r && i || u).__k = _(k, null, [
        t
    ]), o || p, p, u.namespaceURI, !r && i ? [
        i
    ] : o ? null : u.firstChild ? n.call(u.childNodes) : null, e, !r && i ? i : o ? o.__e : u.firstChild, r, f), z(e, t, f);
}
function G(n, l) {
    E(n, l, G);
}
function J(l, t, u) {
    var i, r, o, e, f = w({}, l.props);
    for(o in l.type && l.type.defaultProps && (e = l.type.defaultProps), t)"key" == o ? i = t[o] : "ref" == o ? r = t[o] : f[o] = void 0 === t[o] && void 0 !== e ? e[o] : t[o];
    return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : u), m(l.type, f, i || l.key, r || l.ref, null);
}
function K(n) {
    function l(n) {
        var t, u;
        return this.getChildContext || (t = new Set, (u = {})[l.__c] = this, this.getChildContext = function() {
            return u;
        }, this.componentWillUnmount = function() {
            t = null;
        }, this.shouldComponentUpdate = function(n) {
            this.props.value !== n.value && t.forEach(function(n) {
                n.__e = !0, M(n);
            });
        }, this.sub = function(n) {
            t.add(n);
            var l = n.componentWillUnmount;
            n.componentWillUnmount = function() {
                t && t.delete(n), l && l.call(n);
            };
        }), n.children;
    }
    return l.__c = "__cC" + h++, l.__ = n, l.Provider = l.__l = (l.Consumer = function(n, l) {
        return n.children(l);
    }).contextType = l, l;
}
n = v.slice, l = {
    __e: function(n, l, t, u) {
        for(var i, r, o; l = l.__;)if ((i = l.__c) && !i.__) try {
            if ((r = i.constructor) && null != r.getDerivedStateFromError && (i.setState(r.getDerivedStateFromError(n)), o = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, u || {}), o = i.__d), o) return i.__E = i;
        } catch (l) {
            n = l;
        }
        throw n;
    }
}, t = 0, u = function(n) {
    return null != n && null == n.constructor;
}, x.prototype.setState = function(n, l) {
    var t;
    t = null != this.__s && this.__s !== this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n && (n = n(w({}, t), this.props)), n && w(t, n), null != n && this.__v && (l && this._sb.push(l), M(this));
}, x.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), M(this));
}, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n, l) {
    return n.__v.__b - l.__v.__b;
}, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(!1), a = F(!0), h = 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"eZN76":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useCallback", ()=>q);
parcelHelpers.export(exports, "useContext", ()=>x);
parcelHelpers.export(exports, "useDebugValue", ()=>P);
parcelHelpers.export(exports, "useEffect", ()=>y);
parcelHelpers.export(exports, "useErrorBoundary", ()=>b);
parcelHelpers.export(exports, "useId", ()=>g);
parcelHelpers.export(exports, "useImperativeHandle", ()=>F);
parcelHelpers.export(exports, "useLayoutEffect", ()=>_);
parcelHelpers.export(exports, "useMemo", ()=>T);
parcelHelpers.export(exports, "useReducer", ()=>h);
parcelHelpers.export(exports, "useRef", ()=>A);
parcelHelpers.export(exports, "useState", ()=>d);
var _preact = require("preact");
var t, r, u, i, o = 0, f = [], c = (0, _preact.options), e = c.__b, a = c.__r, v = c.diffed, l = c.__c, m = c.unmount, s = c.__;
function p(n, t) {
    c.__h && c.__h(r, n, o || t), o = 0;
    var u = r.__H || (r.__H = {
        __: [],
        __h: []
    });
    return n >= u.__.length && u.__.push({}), u.__[n];
}
function d(n) {
    return o = 1, h(D, n);
}
function h(n, u, i) {
    var o = p(t++, 2);
    if (o.t = n, !o.__c && (o.__ = [
        i ? i(u) : D(void 0, u),
        function(n) {
            var t = o.__N ? o.__N[0] : o.__[0], r = o.t(t, n);
            t !== r && (o.__N = [
                r,
                o.__[1]
            ], o.__c.setState({}));
        }
    ], o.__c = r, !r.__f)) {
        var f = function(n, t, r) {
            if (!o.__c.__H) return !0;
            var u = o.__c.__H.__.filter(function(n) {
                return !!n.__c;
            });
            if (u.every(function(n) {
                return !n.__N;
            })) return !c || c.call(this, n, t, r);
            var i = o.__c.props !== n;
            return u.forEach(function(n) {
                if (n.__N) {
                    var t = n.__[0];
                    n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
                }
            }), c && c.call(this, n, t, r) || i;
        };
        r.__f = !0;
        var c = r.shouldComponentUpdate, e = r.componentWillUpdate;
        r.componentWillUpdate = function(n, t, r) {
            if (this.__e) {
                var u = c;
                c = void 0, f(n, t, r), c = u;
            }
            e && e.call(this, n, t, r);
        }, r.shouldComponentUpdate = f;
    }
    return o.__N || o.__;
}
function y(n, u) {
    var i = p(t++, 3);
    !c.__s && C(i.__H, u) && (i.__ = n, i.u = u, r.__H.__h.push(i));
}
function _(n, u) {
    var i = p(t++, 4);
    !c.__s && C(i.__H, u) && (i.__ = n, i.u = u, r.__h.push(i));
}
function A(n) {
    return o = 5, T(function() {
        return {
            current: n
        };
    }, []);
}
function F(n, t, r) {
    o = 6, _(function() {
        if ("function" == typeof n) {
            var r = n(t());
            return function() {
                n(null), r && "function" == typeof r && r();
            };
        }
        if (n) return n.current = t(), function() {
            return n.current = null;
        };
    }, null == r ? r : r.concat(n));
}
function T(n, r) {
    var u = p(t++, 7);
    return C(u.__H, r) && (u.__ = n(), u.__H = r, u.__h = n), u.__;
}
function q(n, t) {
    return o = 8, T(function() {
        return n;
    }, t);
}
function x(n) {
    var u = r.context[n.__c], i = p(t++, 9);
    return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function P(n, t) {
    c.useDebugValue && c.useDebugValue(t ? t(n) : n);
}
function b(n) {
    var u = p(t++, 10), i = d();
    return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function(n, t) {
        u.__ && u.__(n, t), i[1](n);
    }), [
        i[0],
        function() {
            i[1](void 0);
        }
    ];
}
function g() {
    var n = p(t++, 11);
    if (!n.__) {
        for(var u = r.__v; null !== u && !u.__m && null !== u.__;)u = u.__;
        var i = u.__m || (u.__m = [
            0,
            0
        ]);
        n.__ = "P" + i[0] + "-" + i[1]++;
    }
    return n.__;
}
function j() {
    for(var n; n = f.shift();)if (n.__P && n.__H) try {
        n.__H.__h.forEach(z), n.__H.__h.forEach(B), n.__H.__h = [];
    } catch (t) {
        n.__H.__h = [], c.__e(t, n.__v);
    }
}
c.__b = function(n) {
    r = null, e && e(n);
}, c.__ = function(n, t) {
    n && t.__k && t.__k.__m && (n.__m = t.__k.__m), s && s(n, t);
}, c.__r = function(n) {
    a && a(n), t = 0;
    var i = (r = n.__c).__H;
    i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function(n) {
        n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
    })) : (i.__h.forEach(z), i.__h.forEach(B), i.__h = [], t = 0)), u = r;
}, c.diffed = function(n) {
    v && v(n);
    var t = n.__c;
    t && t.__H && (t.__H.__h.length && (1 !== f.push(t) && i === c.requestAnimationFrame || ((i = c.requestAnimationFrame) || w)(j)), t.__H.__.forEach(function(n) {
        n.u && (n.__H = n.u), n.u = void 0;
    })), u = r = null;
}, c.__c = function(n, t) {
    t.some(function(n) {
        try {
            n.__h.forEach(z), n.__h = n.__h.filter(function(n) {
                return !n.__ || B(n);
            });
        } catch (r) {
            t.some(function(n) {
                n.__h && (n.__h = []);
            }), t = [], c.__e(r, n.__v);
        }
    }), l && l(n, t);
}, c.unmount = function(n) {
    m && m(n);
    var t, r = n.__c;
    r && r.__H && (r.__H.__.forEach(function(n) {
        try {
            z(n);
        } catch (n) {
            t = n;
        }
    }), r.__H = void 0, t && c.__e(t, r.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n) {
    var t, r = function() {
        clearTimeout(u), k && cancelAnimationFrame(t), setTimeout(n);
    }, u = setTimeout(r, 100);
    k && (t = requestAnimationFrame(r));
}
function z(n) {
    var t = r, u = n.__c;
    "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function B(n) {
    var t = r;
    n.__c = n.__(), r = t;
}
function C(n, t) {
    return !n || n.length !== t.length || t.some(function(t, r) {
        return t !== n[r];
    });
}
function D(n, t) {
    return "function" == typeof t ? t(n) : t;
}

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3mFUL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Fragment", ()=>(0, _preact.Fragment));
parcelHelpers.export(exports, "jsx", ()=>u);
parcelHelpers.export(exports, "jsxAttr", ()=>l);
parcelHelpers.export(exports, "jsxDEV", ()=>u);
parcelHelpers.export(exports, "jsxEscape", ()=>s);
parcelHelpers.export(exports, "jsxTemplate", ()=>a);
parcelHelpers.export(exports, "jsxs", ()=>u);
var _preact = require("preact");
var t = /["&<]/;
function n(r) {
    if (0 === r.length || !1 === t.test(r)) return r;
    for(var e = 0, n = 0, o = "", f = ""; n < r.length; n++){
        switch(r.charCodeAt(n)){
            case 34:
                f = "&quot;";
                break;
            case 38:
                f = "&amp;";
                break;
            case 60:
                f = "&lt;";
                break;
            default:
                continue;
        }
        n !== e && (o += r.slice(e, n)), o += f, e = n + 1;
    }
    return n !== e && (o += r.slice(e, n)), o;
}
var o = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, f = 0, i = Array.isArray;
function u(e, t, n, o, i, u) {
    t || (t = {});
    var a, c, p = t;
    if ("ref" in p) for(c in p = {}, t)"ref" == c ? a = t[c] : p[c] = t[c];
    var l = {
        type: e,
        props: p,
        key: n,
        ref: a,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: --f,
        __i: -1,
        __u: 0,
        __source: i,
        __self: u
    };
    if ("function" == typeof e && (a = e.defaultProps)) for(c in a)void 0 === p[c] && (p[c] = a[c]);
    return (0, _preact.options).vnode && (0, _preact.options).vnode(l), l;
}
function a(r) {
    var t = u((0, _preact.Fragment), {
        tpl: r,
        exprs: [].slice.call(arguments, 1)
    });
    return t.key = t.__v, t;
}
var c = {}, p = /[A-Z]/g;
function l(e, t) {
    if ((0, _preact.options).attr) {
        var f = (0, _preact.options).attr(e, t);
        if ("string" == typeof f) return f;
    }
    if ("ref" === e || "key" === e) return "";
    if ("style" === e && "object" == typeof t) {
        var i = "";
        for(var u in t){
            var a = t[u];
            if (null != a && "" !== a) {
                var l = "-" == u[0] ? u : c[u] || (c[u] = u.replace(p, "-$&").toLowerCase()), s = ";";
                "number" != typeof a || l.startsWith("--") || o.test(l) || (s = "px;"), i = i + l + ":" + a + s;
            }
        }
        return e + '="' + i + '"';
    }
    return null == t || !1 === t || "function" == typeof t || "object" == typeof t ? "" : !0 === t ? e : e + '="' + n(t) + '"';
}
function s(r) {
    if (null == r || "boolean" == typeof r || "function" == typeof r) return null;
    if ("object" == typeof r) {
        if (void 0 === r.constructor) return r;
        if (i(r)) {
            for(var e = 0; e < r.length; e++)r[e] = s(r[e]);
            return r;
        }
    }
    return n("" + r);
}

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fvzkt":[function(require,module,exports,__globalThis) {
!function(e, t) {
    module.exports = t(require("b3d837d983cac82a"));
}("undefined" != typeof self ? self : this, (e)=>(()=>{
        "use strict";
        var t = {
            155: (t)=>{
                t.exports = e;
            }
        }, s = {};
        function o(e) {
            var r = s[e];
            if (void 0 !== r) return r.exports;
            var i = s[e] = {
                exports: {}
            };
            return t[e](i, i.exports, o), i.exports;
        }
        o.d = (e, t)=>{
            for(var s in t)o.o(t, s) && !o.o(e, s) && Object.defineProperty(e, s, {
                enumerable: !0,
                get: t[s]
            });
        }, o.o = (e, t)=>Object.prototype.hasOwnProperty.call(e, t), o.r = (e)=>{
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        };
        var r = {};
        o.r(r), o.d(r, {
            default: ()=>p,
            useStopwatch: ()=>m,
            useTime: ()=>d,
            useTimer: ()=>u
        });
        var i = o(155);
        class n {
            static getTimeFromMilliseconds(e) {
                const t = arguments.length > 1 && void 0 !== arguments[1] && !arguments[1] ? Math.floor(e / 1e3) : Math.ceil(e / 1e3), s = Math.floor(t / 86400), o = Math.floor(t % 86400 / 3600), r = Math.floor(t % 3600 / 60), i = Math.floor(t % 60);
                return {
                    totalMilliseconds: e,
                    totalSeconds: t,
                    milliseconds: Math.floor(e % 1e3),
                    seconds: i,
                    minutes: r,
                    hours: o,
                    days: s
                };
            }
            static getMillisecondsFromExpiry(e) {
                const t = e - (new Date).getTime();
                return t > 0 ? t : 0;
            }
            static getMillisecondsFromPrevTime(e) {
                const t = (new Date).getTime() - e;
                return t > 0 ? t : 0;
            }
            static getMillisecondsFromTimeNow() {
                const e = new Date;
                return e.getTime() - 60 * e.getTimezoneOffset() * 1e3;
            }
            static getFormattedTimeFromMilliseconds(e, t) {
                const { milliseconds: s, seconds: o, minutes: r, hours: i } = n.getTimeFromMilliseconds(e);
                let l = "", a = i;
                return "12-hour" === t && (l = i >= 12 ? "pm" : "am", a = i % 12), {
                    milliseconds: s,
                    seconds: o,
                    minutes: r,
                    hours: a,
                    ampm: l
                };
            }
        }
        class l {
            static expiryTimestamp(e) {
                const t = new Date(e).getTime() > 0;
                return t || console.warn("react-timer-hook: { useTimer } Invalid expiryTimestamp settings", e), t;
            }
            static onExpire(e) {
                const t = e && "function" == typeof e;
                return e && !t && console.warn("react-timer-hook: { useTimer } Invalid onExpire settings function", e), t;
            }
        }
        function a(e, t) {
            const s = (0, i.useRef)();
            (0, i.useEffect)(()=>{
                s.current = e;
            }), (0, i.useEffect)(()=>{
                if (!t) return ()=>{};
                const e = setInterval(()=>{
                    s.current && s.current();
                }, t);
                return ()=>clearInterval(e);
            }, [
                t
            ]);
        }
        const c = 1e3;
        function u() {
            let { expiryTimestamp: e, onExpire: t, autoStart: s = !0, interval: o = c } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            const [r, u] = (0, i.useState)(e), [m, d] = (0, i.useState)(n.getMillisecondsFromExpiry(r)), [p, f] = (0, i.useState)(s), [g, T] = (0, i.useState)(s), [M, v] = (0, i.useState)(o), y = (0, i.useCallback)(()=>{
                l.onExpire(t) && t(), f(!1), v(null);
            }, [
                t
            ]), h = (0, i.useCallback)(()=>{
                f(!1);
            }, []), x = (0, i.useCallback)(function(e) {
                let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                v(o), T(t), f(t), u(e), d(n.getMillisecondsFromExpiry(e));
            }, [
                o
            ]), F = (0, i.useCallback)(()=>{
                const e = new Date;
                e.setMilliseconds(e.getMilliseconds() + m), x(e);
            }, [
                m,
                x
            ]), w = (0, i.useCallback)(()=>{
                g ? (d(n.getMillisecondsFromExpiry(r)), f(!0)) : F();
            }, [
                r,
                g,
                F
            ]);
            return a(()=>{
                const e = n.getMillisecondsFromExpiry(r);
                d(e), e <= 0 ? y() : e < M && v(e);
            }, p ? M : null), (0, i.useEffect)(()=>{
                l.expiryTimestamp(r);
            }, [
                r
            ]), {
                ...n.getTimeFromMilliseconds(m),
                start: w,
                pause: h,
                resume: F,
                restart: x,
                isRunning: p
            };
        }
        function m() {
            let { autoStart: e, offsetTimestamp: t, interval: s = c } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            const o = n.getMillisecondsFromExpiry(t) || 0, [r, l] = (0, i.useState)(new Date - new Date(o)), [u, m] = (0, i.useState)(n.getMillisecondsFromPrevTime(r || 0)), [d, p] = (0, i.useState)(e), f = c - u % c, [g, T] = (0, i.useState)(s < f ? s : f);
            a(()=>{
                g !== s && T(s), m(n.getMillisecondsFromPrevTime(r));
            }, d ? g : null);
            const M = (0, i.useCallback)(()=>{
                l(new Date - new Date(u)), p(!0);
            }, [
                u
            ]), v = (0, i.useCallback)(()=>{
                m(n.getMillisecondsFromPrevTime(r)), p(!1);
            }, [
                r
            ]), y = (0, i.useCallback)(function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                const o = n.getMillisecondsFromExpiry(e) || 0, r = new Date - new Date(o), i = n.getMillisecondsFromPrevTime(r), a = c - i % c;
                l(r), m(i), T(s < a ? s : a), p(t);
            }, [
                s
            ]);
            return {
                ...n.getTimeFromMilliseconds(u, !1),
                start: M,
                pause: v,
                reset: y,
                isRunning: d
            };
        }
        function d() {
            let { format: e, interval: t = c } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            const [s, o] = (0, i.useState)(n.getMillisecondsFromTimeNow());
            return a(()=>{
                o(n.getMillisecondsFromTimeNow());
            }, t), {
                ...n.getFormattedTimeFromMilliseconds(s, e)
            };
        }
        function p(e) {
            if ((0, i.useEffect)(()=>{
                console.warn("react-timer-hook: default export useTimer is deprecated, use named exports { useTimer, useStopwatch, useTime } instead");
            }, []), e.expiryTimestamp) {
                const t = u(e);
                return {
                    ...t,
                    startTimer: t.start,
                    stopTimer: t.pause,
                    resetTimer: ()=>{}
                };
            }
            const t = m(e);
            return {
                ...t,
                startTimer: t.start,
                stopTimer: t.pause,
                resetTimer: t.reset
            };
        }
        return r;
    })());

},{"b3d837d983cac82a":"aF0cT"}],"km3Ru":[function(require,module,exports,__globalThis) {
"use strict";
var Refresh = require("7422ead32dcc1e6b");
var { version } = require("630b62916b1ae0e7");
function debounce(func, delay) {
    {
        let timeout = undefined;
        let lastTime = 0;
        return function(args) {
            // Call immediately if last call was more than the delay ago.
            // Otherwise, set a timeout. This means the first call is fast
            // (for the common case of a single update), and subsequent updates
            // are batched.
            let now = Date.now();
            if (now - lastTime > delay) {
                lastTime = now;
                func.call(null, args);
            } else {
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    timeout = undefined;
                    lastTime = Date.now();
                    func.call(null, args);
                }, delay);
            }
        };
    }
}
var enqueueUpdate = debounce(function() {
    Refresh.performReactRefresh();
}, 30);
// Everything below is either adapted or copied from
// https://github.com/facebook/metro/blob/61de16bd1edd7e738dd0311c89555a644023ab2d/packages/metro/src/lib/polyfills/require.js
// MIT License - Copyright (c) Facebook, Inc. and its affiliates.
module.exports.prelude = function(module1) {
    window.__REACT_REFRESH_VERSION_TRANSFORMER = version;
    window.$RefreshReg$ = function(type, id) {
        if (window.__REACT_REFRESH_VERSION_TRANSFORMER && window.__REACT_REFRESH_VERSION_RUNTIME && window.__REACT_REFRESH_VERSION_TRANSFORMER !== window.__REACT_REFRESH_VERSION_RUNTIME) // Both versions were set and they did not match
        throw new Error(`react-refresh versions did not match between transformer and runtime. Please check your dependencies. Transformer: ${window.__REACT_REFRESH_VERSION_TRANSFORMER}, Runtime: ${window.__REACT_REFRESH_VERSION_RUNTIME}`);
        Refresh.register(type, module1.id + ' ' + id);
    };
    window.$RefreshSig$ = Refresh.createSignatureFunctionForTransform;
};
module.exports.postlude = function(module1) {
    if (isReactRefreshBoundary(module1.exports)) {
        registerExportsForReactRefresh(module1);
        if (module1.hot) {
            module1.hot.dispose(function(data) {
                if (Refresh.hasUnrecoverableErrors()) window.location.reload();
                data.prevExports = module1.exports;
            });
            module1.hot.accept(function(getParents) {
                var prevExports = module1.hot.data.prevExports;
                var nextExports = module1.exports;
                // Since we just executed the code for it, it's possible
                // that the new exports make it ineligible for being a boundary.
                var isNoLongerABoundary = !isReactRefreshBoundary(nextExports);
                // It can also become ineligible if its exports are incompatible
                // with the previous exports.
                // For example, if you add/remove/change exports, we'll want
                // to re-execute the importing modules, and force those components
                // to re-render. Similarly, if you convert a class component
                // to a function, we want to invalidate the boundary.
                var didInvalidate = shouldInvalidateReactRefreshBoundary(prevExports, nextExports);
                if (isNoLongerABoundary || didInvalidate) {
                    // We'll be conservative. The only case in which we won't do a full
                    // reload is if all parent modules are also refresh boundaries.
                    // In that case we'll add them to the current queue.
                    var parents = getParents();
                    if (parents.length === 0) {
                        // Looks like we bubbled to the root. Can't recover from that.
                        window.location.reload();
                        return;
                    }
                    return parents;
                }
                enqueueUpdate();
            });
        }
    }
};
function isReactRefreshBoundary(exports) {
    if (Refresh.isLikelyComponentType(exports)) return true;
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    return false;
    var hasExports = false;
    var areAllExportsComponents = true;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        hasExports = true;
        if (key === '__esModule') continue;
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) // Don't invoke getters for CJS as they may have side effects.
        return false;
        var exportValue = exports[key];
        if (!Refresh.isLikelyComponentType(exportValue)) areAllExportsComponents = false;
    }
    return hasExports && areAllExportsComponents;
}
function shouldInvalidateReactRefreshBoundary(prevExports, nextExports) {
    var prevSignature = getRefreshBoundarySignature(prevExports);
    var nextSignature = getRefreshBoundarySignature(nextExports);
    if (prevSignature.length !== nextSignature.length) return true;
    for(var i = 0; i < nextSignature.length; i++){
        if (prevSignature[i] !== nextSignature[i]) return true;
    }
    return false;
}
// When this signature changes, it's unsafe to stop at this refresh boundary.
function getRefreshBoundarySignature(exports) {
    var signature = [];
    signature.push(Refresh.getFamilyByType(exports));
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return signature;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        if (key === '__esModule') continue;
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) continue;
        var exportValue = exports[key];
        signature.push(key);
        signature.push(Refresh.getFamilyByType(exportValue));
    }
    return signature;
}
function registerExportsForReactRefresh(module1) {
    var exports = module1.exports, id = module1.id;
    Refresh.register(exports, id + ' %exports%');
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) continue;
        var exportValue = exports[key];
        var typeID = id + ' %exports% ' + key;
        Refresh.register(exportValue, typeID);
    }
}

},{"7422ead32dcc1e6b":"786KC","630b62916b1ae0e7":"4SQxb"}],"786KC":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = require("96622d495519d4e");

},{"96622d495519d4e":"hdge7"}],"hdge7":[function(require,module,exports,__globalThis) {
/**
 * @license React
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    'use strict';
    // ATTENTION
    var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
    var REACT_MEMO_TYPE = Symbol.for('react.memo');
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.
    // It's OK to reference families, but use WeakMap/Set for types.
    var allFamiliesByID = new Map();
    var allFamiliesByType = new PossiblyWeakMap();
    var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
    // that have actually been edited here. This keeps checks fast.
    // $FlowIssue
    var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
    // It is an array of [Family, NextType] tuples.
    var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.
    var helpersByRendererID = new Map();
    var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.
    var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.
    var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
    // It needs to be weak because we do this even for roots that failed to mount.
    // If there is no WeakMap, we won't attempt to do retrying.
    // $FlowIssue
    var rootElements = typeof WeakMap === 'function' ? new WeakMap() : null;
    var isPerformingRefresh = false;
    function computeFullKey(signature) {
        if (signature.fullKey !== null) return signature.fullKey;
        var fullKey = signature.ownKey;
        var hooks;
        try {
            hooks = signature.getCustomHooks();
        } catch (err) {
            // This can happen in an edge case, e.g. if expression like Foo.useSomething
            // depends on Foo which is lazily initialized during rendering.
            // In that case just assume we'll have to remount.
            signature.forceReset = true;
            signature.fullKey = fullKey;
            return fullKey;
        }
        for(var i = 0; i < hooks.length; i++){
            var hook = hooks[i];
            if (typeof hook !== 'function') {
                // Something's wrong. Assume we need to remount.
                signature.forceReset = true;
                signature.fullKey = fullKey;
                return fullKey;
            }
            var nestedHookSignature = allSignaturesByType.get(hook);
            if (nestedHookSignature === undefined) continue;
            var nestedHookKey = computeFullKey(nestedHookSignature);
            if (nestedHookSignature.forceReset) signature.forceReset = true;
            fullKey += '\n---\n' + nestedHookKey;
        }
        signature.fullKey = fullKey;
        return fullKey;
    }
    function haveEqualSignatures(prevType, nextType) {
        var prevSignature = allSignaturesByType.get(prevType);
        var nextSignature = allSignaturesByType.get(nextType);
        if (prevSignature === undefined && nextSignature === undefined) return true;
        if (prevSignature === undefined || nextSignature === undefined) return false;
        if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) return false;
        if (nextSignature.forceReset) return false;
        return true;
    }
    function isReactClass(type) {
        return type.prototype && type.prototype.isReactComponent;
    }
    function canPreserveStateBetween(prevType, nextType) {
        if (isReactClass(prevType) || isReactClass(nextType)) return false;
        if (haveEqualSignatures(prevType, nextType)) return true;
        return false;
    }
    function resolveFamily(type) {
        // Only check updated types to keep lookups fast.
        return updatedFamiliesByType.get(type);
    } // If we didn't care about IE11, we could use new Map/Set(iterable).
    function cloneMap(map) {
        var clone = new Map();
        map.forEach(function(value, key) {
            clone.set(key, value);
        });
        return clone;
    }
    function cloneSet(set) {
        var clone = new Set();
        set.forEach(function(value) {
            clone.add(value);
        });
        return clone;
    } // This is a safety mechanism to protect against rogue getters and Proxies.
    function getProperty(object, property) {
        try {
            return object[property];
        } catch (err) {
            // Intentionally ignore.
            return undefined;
        }
    }
    function performReactRefresh() {
        if (pendingUpdates.length === 0) return null;
        if (isPerformingRefresh) return null;
        isPerformingRefresh = true;
        try {
            var staleFamilies = new Set();
            var updatedFamilies = new Set();
            var updates = pendingUpdates;
            pendingUpdates = [];
            updates.forEach(function(_ref) {
                var family = _ref[0], nextType = _ref[1];
                // Now that we got a real edit, we can create associations
                // that will be read by the React reconciler.
                var prevType = family.current;
                updatedFamiliesByType.set(prevType, family);
                updatedFamiliesByType.set(nextType, family);
                family.current = nextType; // Determine whether this should be a re-render or a re-mount.
                if (canPreserveStateBetween(prevType, nextType)) updatedFamilies.add(family);
                else staleFamilies.add(family);
            }); // TODO: rename these fields to something more meaningful.
            var update = {
                updatedFamilies: updatedFamilies,
                // Families that will re-render preserving state
                staleFamilies: staleFamilies // Families that will be remounted
            };
            helpersByRendererID.forEach(function(helpers) {
                // Even if there are no roots, set the handler on first update.
                // This ensures that if *new* roots are mounted, they'll use the resolve handler.
                helpers.setRefreshHandler(resolveFamily);
            });
            var didError = false;
            var firstError = null; // We snapshot maps and sets that are mutated during commits.
            // If we don't do this, there is a risk they will be mutated while
            // we iterate over them. For example, trying to recover a failed root
            // may cause another root to be added to the failed list -- an infinite loop.
            var failedRootsSnapshot = cloneSet(failedRoots);
            var mountedRootsSnapshot = cloneSet(mountedRoots);
            var helpersByRootSnapshot = cloneMap(helpersByRoot);
            failedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                failedRoots.has(root);
                if (rootElements === null) return;
                if (!rootElements.has(root)) return;
                var element = rootElements.get(root);
                try {
                    helpers.scheduleRoot(root, element);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            mountedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                mountedRoots.has(root);
                try {
                    helpers.scheduleRefresh(root, update);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            if (didError) throw firstError;
            return update;
        } finally{
            isPerformingRefresh = false;
        }
    }
    function register(type, id) {
        if (type === null) return;
        if (typeof type !== 'function' && typeof type !== 'object') return;
         // This can happen in an edge case, e.g. if we register
        // return value of a HOC but it returns a cached component.
        // Ignore anything but the first registration for each type.
        if (allFamiliesByType.has(type)) return;
         // Create family or remember to update it.
        // None of this bookkeeping affects reconciliation
        // until the first performReactRefresh() call above.
        var family = allFamiliesByID.get(id);
        if (family === undefined) {
            family = {
                current: type
            };
            allFamiliesByID.set(id, family);
        } else pendingUpdates.push([
            family,
            type
        ]);
        allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.
        if (typeof type === 'object' && type !== null) switch(getProperty(type, '$$typeof')){
            case REACT_FORWARD_REF_TYPE:
                register(type.render, id + '$render');
                break;
            case REACT_MEMO_TYPE:
                register(type.type, id + '$type');
                break;
        }
    }
    function setSignature(type, key) {
        var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;
        if (!allSignaturesByType.has(type)) allSignaturesByType.set(type, {
            forceReset: forceReset,
            ownKey: key,
            fullKey: null,
            getCustomHooks: getCustomHooks || function() {
                return [];
            }
        });
         // Visit inner types because we might not have signed them.
        if (typeof type === 'object' && type !== null) switch(getProperty(type, '$$typeof')){
            case REACT_FORWARD_REF_TYPE:
                setSignature(type.render, key, forceReset, getCustomHooks);
                break;
            case REACT_MEMO_TYPE:
                setSignature(type.type, key, forceReset, getCustomHooks);
                break;
        }
    } // This is lazily called during first render for a type.
    // It captures Hook list at that time so inline requires don't break comparisons.
    function collectCustomHooksForSignature(type) {
        var signature = allSignaturesByType.get(type);
        if (signature !== undefined) computeFullKey(signature);
    }
    function getFamilyByID(id) {
        return allFamiliesByID.get(id);
    }
    function getFamilyByType(type) {
        return allFamiliesByType.get(type);
    }
    function findAffectedHostInstances(families) {
        var affectedInstances = new Set();
        mountedRoots.forEach(function(root) {
            var helpers = helpersByRoot.get(root);
            if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
            var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
            instancesForRoot.forEach(function(inst) {
                affectedInstances.add(inst);
            });
        });
        return affectedInstances;
    }
    function injectIntoGlobalHook(globalObject) {
        // For React Native, the global hook will be set up by require('react-devtools-core').
        // That code will run before us. So we need to monkeypatch functions on existing hook.
        // For React Web, the global hook will be set up by the extension.
        // This will also run before us.
        var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook === undefined) {
            // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
            // Note that in this case it's important that renderer code runs *after* this method call.
            // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
            var nextID = 0;
            globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
                renderers: new Map(),
                supportsFiber: true,
                inject: function(injected) {
                    return nextID++;
                },
                onScheduleFiberRoot: function(id, root, children) {},
                onCommitFiberRoot: function(id, root, maybePriorityLevel, didError) {},
                onCommitFiberUnmount: function() {}
            };
        }
        if (hook.isDisabled) {
            // This isn't a real property on the hook, but it can be set to opt out
            // of DevTools integration and associated warnings and logs.
            // Using console['warn'] to evade Babel and ESLint
            console['warn']("Something has shimmed the React DevTools global hook (__REACT_DEVTOOLS_GLOBAL_HOOK__). Fast Refresh is not compatible with this shim and will be disabled.");
            return;
        } // Here, we just want to get a reference to scheduleRefresh.
        var oldInject = hook.inject;
        hook.inject = function(injected) {
            var id = oldInject.apply(this, arguments);
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
            return id;
        }; // Do the same for any already injected roots.
        // This is useful if ReactDOM has already been initialized.
        // https://github.com/facebook/react/issues/17626
        hook.renderers.forEach(function(injected, id) {
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
        }); // We also want to track currently mounted roots.
        var oldOnCommitFiberRoot = hook.onCommitFiberRoot;
        var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function() {};
        hook.onScheduleFiberRoot = function(id, root, children) {
            if (!isPerformingRefresh) {
                // If it was intentionally scheduled, don't attempt to restore.
                // This includes intentionally scheduled unmounts.
                failedRoots.delete(root);
                if (rootElements !== null) rootElements.set(root, children);
            }
            return oldOnScheduleFiberRoot.apply(this, arguments);
        };
        hook.onCommitFiberRoot = function(id, root, maybePriorityLevel, didError) {
            var helpers = helpersByRendererID.get(id);
            if (helpers !== undefined) {
                helpersByRoot.set(root, helpers);
                var current = root.current;
                var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.
                // This logic is copy-pasted from similar logic in the DevTools backend.
                // If this breaks with some refactoring, you'll want to update DevTools too.
                if (alternate !== null) {
                    var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null && mountedRoots.has(root);
                    var isMounted = current.memoizedState != null && current.memoizedState.element != null;
                    if (!wasMounted && isMounted) {
                        // Mount a new root.
                        mountedRoots.add(root);
                        failedRoots.delete(root);
                    } else if (wasMounted && isMounted) ;
                    else if (wasMounted && !isMounted) {
                        // Unmount an existing root.
                        mountedRoots.delete(root);
                        if (didError) // We'll remount it on future edits.
                        failedRoots.add(root);
                        else helpersByRoot.delete(root);
                    } else if (!wasMounted && !isMounted) {
                        if (didError) // We'll remount it on future edits.
                        failedRoots.add(root);
                    }
                } else // Mount a new root.
                mountedRoots.add(root);
            } // Always call the decorated DevTools hook.
            return oldOnCommitFiberRoot.apply(this, arguments);
        };
    }
    function hasUnrecoverableErrors() {
        // TODO: delete this after removing dependency in RN.
        return false;
    } // Exposed for testing.
    function _getMountedRootCount() {
        return mountedRoots.size;
    } // This is a wrapper over more primitive functions for setting signature.
    // Signatures let us decide whether the Hook order has changed on refresh.
    //
    // This function is intended to be used as a transform target, e.g.:
    // var _s = createSignatureFunctionForTransform()
    //
    // function Hello() {
    //   const [foo, setFoo] = useState(0);
    //   const value = useCustomHook();
    //   _s(); /* Call without arguments triggers collecting the custom Hook list.
    //          * This doesn't happen during the module evaluation because we
    //          * don't want to change the module order with inline requires.
    //          * Next calls are noops. */
    //   return <h1>Hi</h1>;
    // }
    //
    // /* Call with arguments attaches the signature to the type: */
    // _s(
    //   Hello,
    //   'useState{[foo, setFoo]}(0)',
    //   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
    // );
    function createSignatureFunctionForTransform() {
        var savedType;
        var hasCustomHooks;
        var didCollectHooks = false;
        return function(type, key, forceReset, getCustomHooks) {
            if (typeof key === 'string') {
                // We're in the initial phase that associates signatures
                // with the functions. Note this may be called multiple times
                // in HOC chains like _s(hoc1(_s(hoc2(_s(actualFunction))))).
                if (!savedType) {
                    // We're in the innermost call, so this is the actual type.
                    savedType = type;
                    hasCustomHooks = typeof getCustomHooks === 'function';
                } // Set the signature for all types (even wrappers!) in case
                // they have no signatures of their own. This is to prevent
                // problems like https://github.com/facebook/react/issues/20417.
                if (type != null && (typeof type === 'function' || typeof type === 'object')) setSignature(type, key, forceReset, getCustomHooks);
                return type;
            } else // We're in the _s() call without arguments, which means
            // this is the time to collect custom Hook signatures.
            // Only do this once. This path is hot and runs *inside* every render!
            if (!didCollectHooks && hasCustomHooks) {
                didCollectHooks = true;
                collectCustomHooksForSignature(savedType);
            }
        };
    }
    function isLikelyComponentType(type) {
        switch(typeof type){
            case 'function':
                // First, deal with classes.
                if (type.prototype != null) {
                    if (type.prototype.isReactComponent) // React class.
                    return true;
                    var ownNames = Object.getOwnPropertyNames(type.prototype);
                    if (ownNames.length > 1 || ownNames[0] !== 'constructor') // This looks like a class.
                    return false;
                     // eslint-disable-next-line no-proto
                    if (type.prototype.__proto__ !== Object.prototype) // It has a superclass.
                    return false;
                     // Pass through.
                // This looks like a regular function with empty prototype.
                } // For plain functions and arrows, use name as a heuristic.
                var name = type.name || type.displayName;
                return typeof name === 'string' && /^[A-Z]/.test(name);
            case 'object':
                if (type != null) switch(getProperty(type, '$$typeof')){
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_MEMO_TYPE:
                        // Definitely React components.
                        return true;
                    default:
                        return false;
                }
                return false;
            default:
                return false;
        }
    }
    exports._getMountedRootCount = _getMountedRootCount;
    exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
    exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
    exports.findAffectedHostInstances = findAffectedHostInstances;
    exports.getFamilyByID = getFamilyByID;
    exports.getFamilyByType = getFamilyByType;
    exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
    exports.injectIntoGlobalHook = injectIntoGlobalHook;
    exports.isLikelyComponentType = isLikelyComponentType;
    exports.performReactRefresh = performReactRefresh;
    exports.register = register;
    exports.setSignature = setSignature;
})();

},{}],"4SQxb":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse("{\"name\":\"react-refresh\",\"description\":\"React is a JavaScript library for building user interfaces.\",\"keywords\":[\"react\"],\"version\":\"0.14.2\",\"homepage\":\"https://reactjs.org/\",\"bugs\":\"https://github.com/facebook/react/issues\",\"license\":\"MIT\",\"files\":[\"LICENSE\",\"README.md\",\"babel.js\",\"runtime.js\",\"cjs/\",\"umd/\"],\"main\":\"runtime.js\",\"exports\":{\".\":\"./runtime.js\",\"./runtime\":\"./runtime.js\",\"./babel\":\"./babel.js\",\"./package.json\":\"./package.json\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/facebook/react.git\",\"directory\":\"packages/react\"},\"engines\":{\"node\":\">=0.10.0\"},\"devDependencies\":{\"react-16-8\":\"npm:react@16.8.0\",\"react-dom-16-8\":\"npm:react-dom@16.8.0\",\"scheduler-0-13\":\"npm:scheduler@0.13.0\"}}");

},{}]},["4XOYJ","jzhVe"], "jzhVe", "parcelRequire94c2")

//# sourceMappingURL=index.cbef2d5a.js.map
