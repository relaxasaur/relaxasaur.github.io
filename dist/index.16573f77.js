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
})({"7xmb4":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "be6032d416573f77";
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

},{}],"5oDSQ":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$85a6 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$85a6.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _preact = require("preact");
var _preactDefault = parcelHelpers.interopDefault(_preact);
var _hooks = require("preact/hooks");
var _signals = require("@preact/signals");
function Message() {
    const [cravePoints, setPoints] = (0, _hooks.useState)(0);
    function increment() {
        setPoints(cravePoints + 1);
    }
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h5", {
                children: [
                    cravePoints,
                    " crave points"
                ]
            }, void 0, true, {
                fileName: "Message.js",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                id: "pressable",
                onClick: increment
            }, void 0, false, {
                fileName: "Message.js",
                lineNumber: 16,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "Message.js",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
const target = document.getElementById('message');
(0, _preact.render)(/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Message, {}, void 0, false, {
    fileName: "Message.js",
    lineNumber: 22,
    columnNumber: 8
}, undefined), target);

  $parcel$ReactRefreshHelpers$85a6.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"kxS54","preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","preact/hooks":"eZN76","@preact/signals":"cfxso"}],"cfxso":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Signal", ()=>(0, _signalsCore.Signal));
parcelHelpers.export(exports, "batch", ()=>(0, _signalsCore.batch));
parcelHelpers.export(exports, "computed", ()=>(0, _signalsCore.computed));
parcelHelpers.export(exports, "effect", ()=>(0, _signalsCore.effect));
parcelHelpers.export(exports, "signal", ()=>(0, _signalsCore.signal));
parcelHelpers.export(exports, "untracked", ()=>(0, _signalsCore.untracked));
parcelHelpers.export(exports, "useComputed", ()=>useComputed);
parcelHelpers.export(exports, "useSignal", ()=>useSignal);
parcelHelpers.export(exports, "useSignalEffect", ()=>useSignalEffect);
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _signalsCore = require("@preact/signals-core");
var s, h, l, d = [], p = [];
(0, _signalsCore.effect)(function() {
    s = this.N;
})();
function _(i, r) {
    (0, _preact.options)[i] = r.bind(null, (0, _preact.options)[i] || function() {});
}
function m(i) {
    if (l) l();
    l = i && i.S();
}
function g(i) {
    var n = this, f = i.data, o = useSignal(f);
    o.value = f;
    var u = (0, _hooks.useMemo)(function() {
        var i = n, t = n.__v;
        while(t = t.__)if (t.__c) {
            t.__c.__$f |= 4;
            break;
        }
        var f = (0, _signalsCore.computed)(function() {
            var i = o.value.value;
            return 0 === i ? 0 : !0 === i ? "" : i || "";
        }), u = (0, _signalsCore.computed)(function() {
            return !(0, _preact.isValidElement)(f.value);
        }), c = (0, _signalsCore.effect)(function() {
            this.N = A;
            if (u.value) {
                var n = f.value;
                if (i.base && 3 === i.base.nodeType) i.base.data = n;
            }
        }), v = n.__$u.d;
        n.__$u.d = function() {
            c();
            v.call(this);
        };
        return [
            u,
            f
        ];
    }, []), c = u[0], v = u[1];
    return c.value ? v.peek() : v.value;
}
g.displayName = "_st";
Object.defineProperties((0, _signalsCore.Signal).prototype, {
    constructor: {
        configurable: !0,
        value: void 0
    },
    type: {
        configurable: !0,
        value: g
    },
    props: {
        configurable: !0,
        get: function() {
            return {
                data: this
            };
        }
    },
    __b: {
        configurable: !0,
        value: 1
    }
});
_("__b", function(i, n) {
    if ("string" == typeof n.type) {
        var r, t = n.props;
        for(var f in t)if ("children" !== f) {
            var o = t[f];
            if (o instanceof (0, _signalsCore.Signal)) {
                if (!r) n.__np = r = {};
                r[f] = o;
                t[f] = o.peek();
            }
        }
    }
    i(n);
});
_("__r", function(i, n) {
    m();
    var r, t = n.__c;
    if (t) {
        t.__$f &= -2;
        if (void 0 === (r = t.__$u)) t.__$u = r = function(i) {
            var n;
            (0, _signalsCore.effect)(function() {
                n = this;
            });
            n.c = function() {
                t.__$f |= 1;
                t.setState({});
            };
            return n;
        }();
    }
    h = t;
    m(r);
    i(n);
});
_("__e", function(i, n, r, t) {
    m();
    h = void 0;
    i(n, r, t);
});
_("diffed", function(i, n) {
    m();
    h = void 0;
    var r;
    if ("string" == typeof n.type && (r = n.__e)) {
        var t = n.__np, f = n.props;
        if (t) {
            var o = r.U;
            if (o) for(var e in o){
                var u = o[e];
                if (void 0 !== u && !(e in t)) {
                    u.d();
                    o[e] = void 0;
                }
            }
            else {
                o = {};
                r.U = o;
            }
            for(var a in t){
                var c = o[a], v = t[a];
                if (void 0 === c) {
                    c = b(r, a, v, f);
                    o[a] = c;
                } else c.o(v, f);
            }
        }
    }
    i(n);
});
function b(i, n, r, t) {
    var f = n in i && void 0 === i.ownerSVGElement, o = (0, _signalsCore.signal)(r);
    return {
        o: function(i, n) {
            o.value = i;
            t = n;
        },
        d: (0, _signalsCore.effect)(function() {
            this.N = A;
            var r = o.value.value;
            if (t[n] !== r) {
                t[n] = r;
                if (f) i[n] = r;
                else if (r) i.setAttribute(n, r);
                else i.removeAttribute(n);
            }
        })
    };
}
_("unmount", function(i, n) {
    if ("string" == typeof n.type) {
        var r = n.__e;
        if (r) {
            var t = r.U;
            if (t) {
                r.U = void 0;
                for(var f in t){
                    var o = t[f];
                    if (o) o.d();
                }
            }
        }
    } else {
        var e = n.__c;
        if (e) {
            var u = e.__$u;
            if (u) {
                e.__$u = void 0;
                u.d();
            }
        }
    }
    i(n);
});
_("__h", function(i, n, r, t) {
    if (t < 3 || 9 === t) n.__$f |= 2;
    i(n, r, t);
});
(0, _preact.Component).prototype.shouldComponentUpdate = function(i, n) {
    var r = this.__$u, t = r && void 0 !== r.s;
    for(var f in n)return !0;
    if (this.__f || "boolean" == typeof this.u && !0 === this.u) {
        var o = 2 & this.__$f;
        if (!(t || o || 4 & this.__$f)) return !0;
        if (1 & this.__$f) return !0;
    } else {
        if (!(t || 4 & this.__$f)) return !0;
        if (3 & this.__$f) return !0;
    }
    for(var e in i)if ("__source" !== e && i[e] !== this.props[e]) return !0;
    for(var u in this.props)if (!(u in i)) return !0;
    return !1;
};
function useSignal(i) {
    return (0, _hooks.useMemo)(function() {
        return (0, _signalsCore.signal)(i);
    }, []);
}
function useComputed(i) {
    var n = (0, _hooks.useRef)(i);
    n.current = i;
    h.__$f |= 4;
    return (0, _hooks.useMemo)(function() {
        return (0, _signalsCore.computed)(function() {
            return n.current();
        });
    }, []);
}
var y = "undefined" == typeof requestAnimationFrame ? setTimeout : requestAnimationFrame, k = function(i) {
    queueMicrotask(function() {
        queueMicrotask(i);
    });
};
function q() {
    (0, _signalsCore.batch)(function() {
        var i;
        while(i = d.shift())s.call(i);
    });
}
function w() {
    if (1 === d.push(this)) ((0, _preact.options).requestAnimationFrame || y)(q);
}
function x() {
    (0, _signalsCore.batch)(function() {
        var i;
        while(i = p.shift())s.call(i);
    });
}
function A() {
    if (1 === p.push(this)) ((0, _preact.options).requestAnimationFrame || k)(x);
}
function useSignalEffect(i) {
    var n = (0, _hooks.useRef)(i);
    n.current = i;
    (0, _hooks.useEffect)(function() {
        return (0, _signalsCore.effect)(function() {
            this.N = w;
            return n.current();
        });
    }, []);
}

},{"preact":"26zcy","preact/hooks":"eZN76","@preact/signals-core":"kUKiL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kUKiL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Signal", ()=>u);
parcelHelpers.export(exports, "batch", ()=>r);
parcelHelpers.export(exports, "computed", ()=>w);
parcelHelpers.export(exports, "effect", ()=>E);
parcelHelpers.export(exports, "signal", ()=>d);
parcelHelpers.export(exports, "untracked", ()=>n);
var i = Symbol.for("preact-signals");
function t() {
    if (!(s > 1)) {
        var i, t = !1;
        while(void 0 !== h){
            var r = h;
            h = void 0;
            f++;
            while(void 0 !== r){
                var o = r.o;
                r.o = void 0;
                r.f &= -3;
                if (!(8 & r.f) && c(r)) try {
                    r.c();
                } catch (r) {
                    if (!t) {
                        i = r;
                        t = !0;
                    }
                }
                r = o;
            }
        }
        f = 0;
        s--;
        if (t) throw i;
    } else s--;
}
function r(i) {
    if (s > 0) return i();
    s++;
    try {
        return i();
    } finally{
        t();
    }
}
var o = void 0;
function n(i) {
    var t = o;
    o = void 0;
    try {
        return i();
    } finally{
        o = t;
    }
}
var h = void 0, s = 0, f = 0, v = 0;
function e(i) {
    if (void 0 !== o) {
        var t = i.n;
        if (void 0 === t || t.t !== o) {
            t = {
                i: 0,
                S: i,
                p: o.s,
                n: void 0,
                t: o,
                e: void 0,
                x: void 0,
                r: t
            };
            if (void 0 !== o.s) o.s.n = t;
            o.s = t;
            i.n = t;
            if (32 & o.f) i.S(t);
            return t;
        } else if (-1 === t.i) {
            t.i = 0;
            if (void 0 !== t.n) {
                t.n.p = t.p;
                if (void 0 !== t.p) t.p.n = t.n;
                t.p = o.s;
                t.n = void 0;
                o.s.n = t;
                o.s = t;
            }
            return t;
        }
    }
}
function u(i) {
    this.v = i;
    this.i = 0;
    this.n = void 0;
    this.t = void 0;
}
u.prototype.brand = i;
u.prototype.h = function() {
    return !0;
};
u.prototype.S = function(i) {
    if (this.t !== i && void 0 === i.e) {
        i.x = this.t;
        if (void 0 !== this.t) this.t.e = i;
        this.t = i;
    }
};
u.prototype.U = function(i) {
    if (void 0 !== this.t) {
        var t = i.e, r = i.x;
        if (void 0 !== t) {
            t.x = r;
            i.e = void 0;
        }
        if (void 0 !== r) {
            r.e = t;
            i.x = void 0;
        }
        if (i === this.t) this.t = r;
    }
};
u.prototype.subscribe = function(i) {
    var t = this;
    return E(function() {
        var r = t.value, n = o;
        o = void 0;
        try {
            i(r);
        } finally{
            o = n;
        }
    });
};
u.prototype.valueOf = function() {
    return this.value;
};
u.prototype.toString = function() {
    return this.value + "";
};
u.prototype.toJSON = function() {
    return this.value;
};
u.prototype.peek = function() {
    var i = o;
    o = void 0;
    try {
        return this.value;
    } finally{
        o = i;
    }
};
Object.defineProperty(u.prototype, "value", {
    get: function() {
        var i = e(this);
        if (void 0 !== i) i.i = this.i;
        return this.v;
    },
    set: function(i) {
        if (i !== this.v) {
            if (f > 100) throw new Error("Cycle detected");
            this.v = i;
            this.i++;
            v++;
            s++;
            try {
                for(var r = this.t; void 0 !== r; r = r.x)r.t.N();
            } finally{
                t();
            }
        }
    }
});
function d(i) {
    return new u(i);
}
function c(i) {
    for(var t = i.s; void 0 !== t; t = t.n)if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
    return !1;
}
function a(i) {
    for(var t = i.s; void 0 !== t; t = t.n){
        var r = t.S.n;
        if (void 0 !== r) t.r = r;
        t.S.n = t;
        t.i = -1;
        if (void 0 === t.n) {
            i.s = t;
            break;
        }
    }
}
function l(i) {
    var t = i.s, r = void 0;
    while(void 0 !== t){
        var o = t.p;
        if (-1 === t.i) {
            t.S.U(t);
            if (void 0 !== o) o.n = t.n;
            if (void 0 !== t.n) t.n.p = o;
        } else r = t;
        t.S.n = t.r;
        if (void 0 !== t.r) t.r = void 0;
        t = o;
    }
    i.s = r;
}
function y(i) {
    u.call(this, void 0);
    this.x = i;
    this.s = void 0;
    this.g = v - 1;
    this.f = 4;
}
(y.prototype = new u).h = function() {
    this.f &= -3;
    if (1 & this.f) return !1;
    if (32 == (36 & this.f)) return !0;
    this.f &= -5;
    if (this.g === v) return !0;
    this.g = v;
    this.f |= 1;
    if (this.i > 0 && !c(this)) {
        this.f &= -2;
        return !0;
    }
    var i = o;
    try {
        a(this);
        o = this;
        var t = this.x();
        if (16 & this.f || this.v !== t || 0 === this.i) {
            this.v = t;
            this.f &= -17;
            this.i++;
        }
    } catch (i) {
        this.v = i;
        this.f |= 16;
        this.i++;
    }
    o = i;
    l(this);
    this.f &= -2;
    return !0;
};
y.prototype.S = function(i) {
    if (void 0 === this.t) {
        this.f |= 36;
        for(var t = this.s; void 0 !== t; t = t.n)t.S.S(t);
    }
    u.prototype.S.call(this, i);
};
y.prototype.U = function(i) {
    if (void 0 !== this.t) {
        u.prototype.U.call(this, i);
        if (void 0 === this.t) {
            this.f &= -33;
            for(var t = this.s; void 0 !== t; t = t.n)t.S.U(t);
        }
    }
};
y.prototype.N = function() {
    if (!(2 & this.f)) {
        this.f |= 6;
        for(var i = this.t; void 0 !== i; i = i.x)i.t.N();
    }
};
Object.defineProperty(y.prototype, "value", {
    get: function() {
        if (1 & this.f) throw new Error("Cycle detected");
        var i = e(this);
        this.h();
        if (void 0 !== i) i.i = this.i;
        if (16 & this.f) throw this.v;
        return this.v;
    }
});
function w(i) {
    return new y(i);
}
function _(i) {
    var r = i.u;
    i.u = void 0;
    if ("function" == typeof r) {
        s++;
        var n = o;
        o = void 0;
        try {
            r();
        } catch (t) {
            i.f &= -2;
            i.f |= 8;
            g(i);
            throw t;
        } finally{
            o = n;
            t();
        }
    }
}
function g(i) {
    for(var t = i.s; void 0 !== t; t = t.n)t.S.U(t);
    i.x = void 0;
    i.s = void 0;
    _(i);
}
function p(i) {
    if (o !== this) throw new Error("Out-of-order effect");
    l(this);
    o = i;
    this.f &= -2;
    if (8 & this.f) g(this);
    t();
}
function b(i) {
    this.x = i;
    this.u = void 0;
    this.s = void 0;
    this.o = void 0;
    this.f = 32;
}
b.prototype.c = function() {
    var i = this.S();
    try {
        if (8 & this.f) return;
        if (void 0 === this.x) return;
        var t = this.x();
        if ("function" == typeof t) this.u = t;
    } finally{
        i();
    }
};
b.prototype.S = function() {
    if (1 & this.f) throw new Error("Cycle detected");
    this.f |= 1;
    this.f &= -9;
    _(this);
    a(this);
    s++;
    var i = o;
    o = this;
    return p.bind(this, i);
};
b.prototype.N = function() {
    if (!(2 & this.f)) {
        this.f |= 2;
        this.o = h;
        h = this;
    }
};
b.prototype.d = function() {
    this.f |= 8;
    if (!(1 & this.f)) g(this);
};
function E(i) {
    var t = new b(i);
    try {
        t.c();
    } catch (i) {
        t.d();
        throw i;
    }
    return t.d.bind(t);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7xmb4","5oDSQ"], "5oDSQ", "parcelRequire94c2")

//# sourceMappingURL=index.16573f77.js.map
