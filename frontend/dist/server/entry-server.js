"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var vueRouter = require("vue-router");
var vuex = require("vuex");
var serverRenderer = require("@vue/server-renderer");
var Stream = require("stream");
var http = require("http");
var Url = require("url");
var https = require("https");
var zlib = require("zlib");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : {default: e};
}
var Stream__default = /* @__PURE__ */ _interopDefaultLegacy(Stream);
var http__default = /* @__PURE__ */ _interopDefaultLegacy(http);
var Url__default = /* @__PURE__ */ _interopDefaultLegacy(Url);
var https__default = /* @__PURE__ */ _interopDefaultLegacy(https);
var zlib__default = /* @__PURE__ */ _interopDefaultLegacy(zlib);
const pages = {"../pages/About.vue": () => false ? __vitePreload(() => Promise.resolve().then(function() {
  return About;
}), "__VITE_PRELOAD__") : Promise.resolve().then(function() {
  return About;
}), "../pages/Home.vue": () => false ? __vitePreload(() => Promise.resolve().then(function() {
  return Home;
}), "__VITE_PRELOAD__") : Promise.resolve().then(function() {
  return Home;
})};
const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase();
  return {
    path: name === "/home" ? "/" : name,
    component: pages[path]
  };
});
function createAppRouter() {
  return vueRouter.createRouter({
    history: vueRouter.createMemoryHistory(),
    routes
  });
}
const state = {
  counter: 0
};
function createAppStore() {
  return vuex.createStore({
    state,
    mutations: {
      ADD(state2) {
        state2.counter = state2.counter + 1;
      }
    },
    actions: {
      add(context) {
        context.commit("ADD");
      }
    },
    modules: {},
    getters: {
      getCounter(state2) {
        return state2.counter;
      }
    }
  });
}
var App_vue_vue_type_style_index_0_lang = "#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n}\n#nav {\n  padding: 30px;\n}\n#nav a {\n  font-weight: bold;\n  color: #2c3e50;\n}\n#nav a.router-link-exact-active {\n  color: #42b983;\n}";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = vue.resolveComponent("router-link");
  const _component_router_view = vue.resolveComponent("router-view");
  _push(`<!--[--><div id="nav">`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, {to: "/"}, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          vue.createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` | `);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, {to: "/about"}, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          vue.createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(`<!--]-->`);
}
_sfc_main.ssrRender = _sfc_ssrRender;
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("/home/nico/IdeaProjects/prerender/frontend/src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
function createApp() {
  const app = vue.createSSRApp(_sfc_main);
  const router = createAppRouter();
  const store = createAppStore();
  app.use(router).use(store);
  return {app, router};
}
async function render(url, manifest) {
  const {app, router} = createApp();
  router.push(url);
  await router.isReady();
  const ctx = {};
  const html = await serverRenderer.renderToString(app, ctx);
  const preloadLinks = renderPreloadLinks(ctx.modules, manifest);
  return [html, preloadLinks];
}
function renderPreloadLinks(modules, manifest) {
  let links = "";
  const seen = new Set();
  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}
function renderPreloadLink(file) {
  console.log("file: " + file);
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else {
    return "";
  }
}
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({class: "about"}, _attrs))}><h1>This is an about page</h1></div>`);
}
_sfc_main$1.ssrRender = _sfc_ssrRender$1;
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("/home/nico/IdeaProjects/prerender/frontend/src/pages/About.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var About = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: _sfc_main$1
});
var _sfc_main$2 = vue.defineComponent({
  name: "LoadingComponent"
});
var LoadingComponent_vue_vue_type_style_index_0_scoped_true_lang = "\n\n";
const _withId = /* @__PURE__ */ vue.withScopeId("data-v-6e12178c");
const _sfc_ssrRender$2 = /* @__PURE__ */ _withId((_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) => {
  _push(`<p${serverRenderer.ssrRenderAttrs(_attrs)} data-v-6e12178c>Loading...</p>`);
});
_sfc_main$2.ssrRender = _sfc_ssrRender$2;
_sfc_main$2.__scopeId = "data-v-6e12178c";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("/home/nico/IdeaProjects/prerender/frontend/src/components/LoadingComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var _sfc_main$3 = vue.defineComponent({
  name: "Home",
  components: {
    HelloWorld: vue.defineAsyncComponent({
      loader: () => Promise.resolve().then(function() {
        return HelloWorld;
      }),
      delay: 200,
      timeout: 3e3,
      errorComponent: _sfc_main$2,
      loadingComponent: _sfc_main$2
    })
  }
});
var _imports_0 = "/assets/logo.03d6d6da.png";
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HelloWorld = vue.resolveComponent("HelloWorld");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({class: "home"}, _attrs))}><img alt="Vue logo"${serverRenderer.ssrRenderAttr("src", _imports_0)}>`);
  serverRenderer.ssrRenderSuspense(_push, {
    default: () => {
      _push(serverRenderer.ssrRenderComponent(_component_HelloWorld, {msg: "Welcome to Your Vue.js + TypeScript App"}, null, _parent));
    },
    fallback: () => {
      _push(`<p>Loading...</p>`);
    },
    _: 1
  });
  _push(`</div>`);
}
_sfc_main$3.ssrRender = _sfc_ssrRender$3;
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("/home/nico/IdeaProjects/prerender/frontend/src/pages/Home.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var Home = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: _sfc_main$3
});
const Readable = Stream__default["default"].Readable;
const BUFFER = Symbol("buffer");
const TYPE = Symbol("type");
class Blob {
  constructor() {
    this[TYPE] = "";
    const blobParts = arguments[0];
    const options = arguments[1];
    const buffers = [];
    let size = 0;
    if (blobParts) {
      const a = blobParts;
      const length = Number(a.length);
      for (let i = 0; i < length; i++) {
        const element = a[i];
        let buffer;
        if (element instanceof Buffer) {
          buffer = element;
        } else if (ArrayBuffer.isView(element)) {
          buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
        } else if (element instanceof ArrayBuffer) {
          buffer = Buffer.from(element);
        } else if (element instanceof Blob) {
          buffer = element[BUFFER];
        } else {
          buffer = Buffer.from(typeof element === "string" ? element : String(element));
        }
        size += buffer.length;
        buffers.push(buffer);
      }
    }
    this[BUFFER] = Buffer.concat(buffers);
    let type = options && options.type !== void 0 && String(options.type).toLowerCase();
    if (type && !/[^\u0020-\u007E]/.test(type)) {
      this[TYPE] = type;
    }
  }
  get size() {
    return this[BUFFER].length;
  }
  get type() {
    return this[TYPE];
  }
  text() {
    return Promise.resolve(this[BUFFER].toString());
  }
  arrayBuffer() {
    const buf = this[BUFFER];
    const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
    return Promise.resolve(ab);
  }
  stream() {
    const readable = new Readable();
    readable._read = function() {
    };
    readable.push(this[BUFFER]);
    readable.push(null);
    return readable;
  }
  toString() {
    return "[object Blob]";
  }
  slice() {
    const size = this.size;
    const start = arguments[0];
    const end = arguments[1];
    let relativeStart, relativeEnd;
    if (start === void 0) {
      relativeStart = 0;
    } else if (start < 0) {
      relativeStart = Math.max(size + start, 0);
    } else {
      relativeStart = Math.min(start, size);
    }
    if (end === void 0) {
      relativeEnd = size;
    } else if (end < 0) {
      relativeEnd = Math.max(size + end, 0);
    } else {
      relativeEnd = Math.min(end, size);
    }
    const span = Math.max(relativeEnd - relativeStart, 0);
    const buffer = this[BUFFER];
    const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
    const blob = new Blob([], {type: arguments[2]});
    blob[BUFFER] = slicedBuffer;
    return blob;
  }
}
Object.defineProperties(Blob.prototype, {
  size: {enumerable: true},
  type: {enumerable: true},
  slice: {enumerable: true}
});
Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
  value: "Blob",
  writable: false,
  enumerable: false,
  configurable: true
});
function FetchError(message, type, systemError) {
  Error.call(this, message);
  this.message = message;
  this.type = type;
  if (systemError) {
    this.code = this.errno = systemError.code;
  }
  Error.captureStackTrace(this, this.constructor);
}
FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = "FetchError";
let convert;
try {
  convert = require("encoding").convert;
} catch (e) {
}
const INTERNALS = Symbol("Body internals");
const PassThrough = Stream__default["default"].PassThrough;
function Body(body) {
  var _this = this;
  var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$size = _ref.size;
  let size = _ref$size === void 0 ? 0 : _ref$size;
  var _ref$timeout = _ref.timeout;
  let timeout = _ref$timeout === void 0 ? 0 : _ref$timeout;
  if (body == null) {
    body = null;
  } else if (isURLSearchParams(body)) {
    body = Buffer.from(body.toString());
  } else if (isBlob(body))
    ;
  else if (Buffer.isBuffer(body))
    ;
  else if (Object.prototype.toString.call(body) === "[object ArrayBuffer]") {
    body = Buffer.from(body);
  } else if (ArrayBuffer.isView(body)) {
    body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
  } else if (body instanceof Stream__default["default"])
    ;
  else {
    body = Buffer.from(String(body));
  }
  this[INTERNALS] = {
    body,
    disturbed: false,
    error: null
  };
  this.size = size;
  this.timeout = timeout;
  if (body instanceof Stream__default["default"]) {
    body.on("error", function(err) {
      const error = err.name === "AbortError" ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, "system", err);
      _this[INTERNALS].error = error;
    });
  }
}
Body.prototype = {
  get body() {
    return this[INTERNALS].body;
  },
  get bodyUsed() {
    return this[INTERNALS].disturbed;
  },
  arrayBuffer() {
    return consumeBody.call(this).then(function(buf) {
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
    });
  },
  blob() {
    let ct = this.headers && this.headers.get("content-type") || "";
    return consumeBody.call(this).then(function(buf) {
      return Object.assign(new Blob([], {
        type: ct.toLowerCase()
      }), {
        [BUFFER]: buf
      });
    });
  },
  json() {
    var _this2 = this;
    return consumeBody.call(this).then(function(buffer) {
      try {
        return JSON.parse(buffer.toString());
      } catch (err) {
        return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, "invalid-json"));
      }
    });
  },
  text() {
    return consumeBody.call(this).then(function(buffer) {
      return buffer.toString();
    });
  },
  buffer() {
    return consumeBody.call(this);
  },
  textConverted() {
    var _this3 = this;
    return consumeBody.call(this).then(function(buffer) {
      return convertBody(buffer, _this3.headers);
    });
  }
};
Object.defineProperties(Body.prototype, {
  body: {enumerable: true},
  bodyUsed: {enumerable: true},
  arrayBuffer: {enumerable: true},
  blob: {enumerable: true},
  json: {enumerable: true},
  text: {enumerable: true}
});
Body.mixIn = function(proto) {
  for (const name of Object.getOwnPropertyNames(Body.prototype)) {
    if (!(name in proto)) {
      const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
      Object.defineProperty(proto, name, desc);
    }
  }
};
function consumeBody() {
  var _this4 = this;
  if (this[INTERNALS].disturbed) {
    return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
  }
  this[INTERNALS].disturbed = true;
  if (this[INTERNALS].error) {
    return Body.Promise.reject(this[INTERNALS].error);
  }
  let body = this.body;
  if (body === null) {
    return Body.Promise.resolve(Buffer.alloc(0));
  }
  if (isBlob(body)) {
    body = body.stream();
  }
  if (Buffer.isBuffer(body)) {
    return Body.Promise.resolve(body);
  }
  if (!(body instanceof Stream__default["default"])) {
    return Body.Promise.resolve(Buffer.alloc(0));
  }
  let accum = [];
  let accumBytes = 0;
  let abort = false;
  return new Body.Promise(function(resolve, reject) {
    let resTimeout;
    if (_this4.timeout) {
      resTimeout = setTimeout(function() {
        abort = true;
        reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, "body-timeout"));
      }, _this4.timeout);
    }
    body.on("error", function(err) {
      if (err.name === "AbortError") {
        abort = true;
        reject(err);
      } else {
        reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, "system", err));
      }
    });
    body.on("data", function(chunk) {
      if (abort || chunk === null) {
        return;
      }
      if (_this4.size && accumBytes + chunk.length > _this4.size) {
        abort = true;
        reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, "max-size"));
        return;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    });
    body.on("end", function() {
      if (abort) {
        return;
      }
      clearTimeout(resTimeout);
      try {
        resolve(Buffer.concat(accum, accumBytes));
      } catch (err) {
        reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, "system", err));
      }
    });
  });
}
function convertBody(buffer, headers) {
  if (typeof convert !== "function") {
    throw new Error("The package `encoding` must be installed to use the textConverted() function");
  }
  const ct = headers.get("content-type");
  let charset = "utf-8";
  let res, str;
  if (ct) {
    res = /charset=([^;]*)/i.exec(ct);
  }
  str = buffer.slice(0, 1024).toString();
  if (!res && str) {
    res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
  }
  if (!res && str) {
    res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
    if (!res) {
      res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
      if (res) {
        res.pop();
      }
    }
    if (res) {
      res = /charset=(.*)/i.exec(res.pop());
    }
  }
  if (!res && str) {
    res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
  }
  if (res) {
    charset = res.pop();
    if (charset === "gb2312" || charset === "gbk") {
      charset = "gb18030";
    }
  }
  return convert(buffer, "UTF-8", charset).toString();
}
function isURLSearchParams(obj) {
  if (typeof obj !== "object" || typeof obj.append !== "function" || typeof obj.delete !== "function" || typeof obj.get !== "function" || typeof obj.getAll !== "function" || typeof obj.has !== "function" || typeof obj.set !== "function") {
    return false;
  }
  return obj.constructor.name === "URLSearchParams" || Object.prototype.toString.call(obj) === "[object URLSearchParams]" || typeof obj.sort === "function";
}
function isBlob(obj) {
  return typeof obj === "object" && typeof obj.arrayBuffer === "function" && typeof obj.type === "string" && typeof obj.stream === "function" && typeof obj.constructor === "function" && typeof obj.constructor.name === "string" && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}
function clone(instance) {
  let p1, p2;
  let body = instance.body;
  if (instance.bodyUsed) {
    throw new Error("cannot clone body after it is used");
  }
  if (body instanceof Stream__default["default"] && typeof body.getBoundary !== "function") {
    p1 = new PassThrough();
    p2 = new PassThrough();
    body.pipe(p1);
    body.pipe(p2);
    instance[INTERNALS].body = p1;
    body = p2;
  }
  return body;
}
function extractContentType(body) {
  if (body === null) {
    return null;
  } else if (typeof body === "string") {
    return "text/plain;charset=UTF-8";
  } else if (isURLSearchParams(body)) {
    return "application/x-www-form-urlencoded;charset=UTF-8";
  } else if (isBlob(body)) {
    return body.type || null;
  } else if (Buffer.isBuffer(body)) {
    return null;
  } else if (Object.prototype.toString.call(body) === "[object ArrayBuffer]") {
    return null;
  } else if (ArrayBuffer.isView(body)) {
    return null;
  } else if (typeof body.getBoundary === "function") {
    return `multipart/form-data;boundary=${body.getBoundary()}`;
  } else if (body instanceof Stream__default["default"]) {
    return null;
  } else {
    return "text/plain;charset=UTF-8";
  }
}
function getTotalBytes(instance) {
  const body = instance.body;
  if (body === null) {
    return 0;
  } else if (isBlob(body)) {
    return body.size;
  } else if (Buffer.isBuffer(body)) {
    return body.length;
  } else if (body && typeof body.getLengthSync === "function") {
    if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || body.hasKnownLength && body.hasKnownLength()) {
      return body.getLengthSync();
    }
    return null;
  } else {
    return null;
  }
}
function writeToStream(dest, instance) {
  const body = instance.body;
  if (body === null) {
    dest.end();
  } else if (isBlob(body)) {
    body.stream().pipe(dest);
  } else if (Buffer.isBuffer(body)) {
    dest.write(body);
    dest.end();
  } else {
    body.pipe(dest);
  }
}
Body.Promise = global.Promise;
const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
function validateName(name) {
  name = `${name}`;
  if (invalidTokenRegex.test(name) || name === "") {
    throw new TypeError(`${name} is not a legal HTTP header name`);
  }
}
function validateValue(value) {
  value = `${value}`;
  if (invalidHeaderCharRegex.test(value)) {
    throw new TypeError(`${value} is not a legal HTTP header value`);
  }
}
function find(map, name) {
  name = name.toLowerCase();
  for (const key in map) {
    if (key.toLowerCase() === name) {
      return key;
    }
  }
  return void 0;
}
const MAP = Symbol("map");
class Headers {
  constructor() {
    let init = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
    this[MAP] = Object.create(null);
    if (init instanceof Headers) {
      const rawHeaders = init.raw();
      const headerNames = Object.keys(rawHeaders);
      for (const headerName of headerNames) {
        for (const value of rawHeaders[headerName]) {
          this.append(headerName, value);
        }
      }
      return;
    }
    if (init == null)
      ;
    else if (typeof init === "object") {
      const method = init[Symbol.iterator];
      if (method != null) {
        if (typeof method !== "function") {
          throw new TypeError("Header pairs must be iterable");
        }
        const pairs = [];
        for (const pair of init) {
          if (typeof pair !== "object" || typeof pair[Symbol.iterator] !== "function") {
            throw new TypeError("Each header pair must be iterable");
          }
          pairs.push(Array.from(pair));
        }
        for (const pair of pairs) {
          if (pair.length !== 2) {
            throw new TypeError("Each header pair must be a name/value tuple");
          }
          this.append(pair[0], pair[1]);
        }
      } else {
        for (const key of Object.keys(init)) {
          const value = init[key];
          this.append(key, value);
        }
      }
    } else {
      throw new TypeError("Provided initializer must be an object");
    }
  }
  get(name) {
    name = `${name}`;
    validateName(name);
    const key = find(this[MAP], name);
    if (key === void 0) {
      return null;
    }
    return this[MAP][key].join(", ");
  }
  forEach(callback) {
    let thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
    let pairs = getHeaders(this);
    let i = 0;
    while (i < pairs.length) {
      var _pairs$i = pairs[i];
      const name = _pairs$i[0], value = _pairs$i[1];
      callback.call(thisArg, value, name, this);
      pairs = getHeaders(this);
      i++;
    }
  }
  set(name, value) {
    name = `${name}`;
    value = `${value}`;
    validateName(name);
    validateValue(value);
    const key = find(this[MAP], name);
    this[MAP][key !== void 0 ? key : name] = [value];
  }
  append(name, value) {
    name = `${name}`;
    value = `${value}`;
    validateName(name);
    validateValue(value);
    const key = find(this[MAP], name);
    if (key !== void 0) {
      this[MAP][key].push(value);
    } else {
      this[MAP][name] = [value];
    }
  }
  has(name) {
    name = `${name}`;
    validateName(name);
    return find(this[MAP], name) !== void 0;
  }
  delete(name) {
    name = `${name}`;
    validateName(name);
    const key = find(this[MAP], name);
    if (key !== void 0) {
      delete this[MAP][key];
    }
  }
  raw() {
    return this[MAP];
  }
  keys() {
    return createHeadersIterator(this, "key");
  }
  values() {
    return createHeadersIterator(this, "value");
  }
  [Symbol.iterator]() {
    return createHeadersIterator(this, "key+value");
  }
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];
Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
  value: "Headers",
  writable: false,
  enumerable: false,
  configurable: true
});
Object.defineProperties(Headers.prototype, {
  get: {enumerable: true},
  forEach: {enumerable: true},
  set: {enumerable: true},
  append: {enumerable: true},
  has: {enumerable: true},
  delete: {enumerable: true},
  keys: {enumerable: true},
  values: {enumerable: true},
  entries: {enumerable: true}
});
function getHeaders(headers) {
  let kind = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "key+value";
  const keys = Object.keys(headers[MAP]).sort();
  return keys.map(kind === "key" ? function(k) {
    return k.toLowerCase();
  } : kind === "value" ? function(k) {
    return headers[MAP][k].join(", ");
  } : function(k) {
    return [k.toLowerCase(), headers[MAP][k].join(", ")];
  });
}
const INTERNAL = Symbol("internal");
function createHeadersIterator(target, kind) {
  const iterator = Object.create(HeadersIteratorPrototype);
  iterator[INTERNAL] = {
    target,
    kind,
    index: 0
  };
  return iterator;
}
const HeadersIteratorPrototype = Object.setPrototypeOf({
  next() {
    if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
      throw new TypeError("Value of `this` is not a HeadersIterator");
    }
    var _INTERNAL = this[INTERNAL];
    const target = _INTERNAL.target, kind = _INTERNAL.kind, index = _INTERNAL.index;
    const values = getHeaders(target, kind);
    const len = values.length;
    if (index >= len) {
      return {
        value: void 0,
        done: true
      };
    }
    this[INTERNAL].index = index + 1;
    return {
      value: values[index],
      done: false
    };
  }
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
  value: "HeadersIterator",
  writable: false,
  enumerable: false,
  configurable: true
});
function exportNodeCompatibleHeaders(headers) {
  const obj = Object.assign({__proto__: null}, headers[MAP]);
  const hostHeaderKey = find(headers[MAP], "Host");
  if (hostHeaderKey !== void 0) {
    obj[hostHeaderKey] = obj[hostHeaderKey][0];
  }
  return obj;
}
function createHeadersLenient(obj) {
  const headers = new Headers();
  for (const name of Object.keys(obj)) {
    if (invalidTokenRegex.test(name)) {
      continue;
    }
    if (Array.isArray(obj[name])) {
      for (const val of obj[name]) {
        if (invalidHeaderCharRegex.test(val)) {
          continue;
        }
        if (headers[MAP][name] === void 0) {
          headers[MAP][name] = [val];
        } else {
          headers[MAP][name].push(val);
        }
      }
    } else if (!invalidHeaderCharRegex.test(obj[name])) {
      headers[MAP][name] = [obj[name]];
    }
  }
  return headers;
}
const INTERNALS$1 = Symbol("Response internals");
const STATUS_CODES = http__default["default"].STATUS_CODES;
class Response {
  constructor() {
    let body = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    let opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Body.call(this, body, opts);
    const status = opts.status || 200;
    const headers = new Headers(opts.headers);
    if (body != null && !headers.has("Content-Type")) {
      const contentType = extractContentType(body);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    this[INTERNALS$1] = {
      url: opts.url,
      status,
      statusText: opts.statusText || STATUS_CODES[status],
      headers,
      counter: opts.counter
    };
  }
  get url() {
    return this[INTERNALS$1].url || "";
  }
  get status() {
    return this[INTERNALS$1].status;
  }
  get ok() {
    return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
  }
  get redirected() {
    return this[INTERNALS$1].counter > 0;
  }
  get statusText() {
    return this[INTERNALS$1].statusText;
  }
  get headers() {
    return this[INTERNALS$1].headers;
  }
  clone() {
    return new Response(clone(this), {
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected
    });
  }
}
Body.mixIn(Response.prototype);
Object.defineProperties(Response.prototype, {
  url: {enumerable: true},
  status: {enumerable: true},
  ok: {enumerable: true},
  redirected: {enumerable: true},
  statusText: {enumerable: true},
  headers: {enumerable: true},
  clone: {enumerable: true}
});
Object.defineProperty(Response.prototype, Symbol.toStringTag, {
  value: "Response",
  writable: false,
  enumerable: false,
  configurable: true
});
const INTERNALS$2 = Symbol("Request internals");
const parse_url = Url__default["default"].parse;
const format_url = Url__default["default"].format;
const streamDestructionSupported = "destroy" in Stream__default["default"].Readable.prototype;
function isRequest(input) {
  return typeof input === "object" && typeof input[INTERNALS$2] === "object";
}
function isAbortSignal(signal) {
  const proto = signal && typeof signal === "object" && Object.getPrototypeOf(signal);
  return !!(proto && proto.constructor.name === "AbortSignal");
}
class Request {
  constructor(input) {
    let init = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let parsedURL;
    if (!isRequest(input)) {
      if (input && input.href) {
        parsedURL = parse_url(input.href);
      } else {
        parsedURL = parse_url(`${input}`);
      }
      input = {};
    } else {
      parsedURL = parse_url(input.url);
    }
    let method = init.method || input.method || "GET";
    method = method.toUpperCase();
    if ((init.body != null || isRequest(input) && input.body !== null) && (method === "GET" || method === "HEAD")) {
      throw new TypeError("Request with GET/HEAD method cannot have body");
    }
    let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;
    Body.call(this, inputBody, {
      timeout: init.timeout || input.timeout || 0,
      size: init.size || input.size || 0
    });
    const headers = new Headers(init.headers || input.headers || {});
    if (inputBody != null && !headers.has("Content-Type")) {
      const contentType = extractContentType(inputBody);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    let signal = isRequest(input) ? input.signal : null;
    if ("signal" in init)
      signal = init.signal;
    if (signal != null && !isAbortSignal(signal)) {
      throw new TypeError("Expected signal to be an instanceof AbortSignal");
    }
    this[INTERNALS$2] = {
      method,
      redirect: init.redirect || input.redirect || "follow",
      headers,
      parsedURL,
      signal
    };
    this.follow = init.follow !== void 0 ? init.follow : input.follow !== void 0 ? input.follow : 20;
    this.compress = init.compress !== void 0 ? init.compress : input.compress !== void 0 ? input.compress : true;
    this.counter = init.counter || input.counter || 0;
    this.agent = init.agent || input.agent;
  }
  get method() {
    return this[INTERNALS$2].method;
  }
  get url() {
    return format_url(this[INTERNALS$2].parsedURL);
  }
  get headers() {
    return this[INTERNALS$2].headers;
  }
  get redirect() {
    return this[INTERNALS$2].redirect;
  }
  get signal() {
    return this[INTERNALS$2].signal;
  }
  clone() {
    return new Request(this);
  }
}
Body.mixIn(Request.prototype);
Object.defineProperty(Request.prototype, Symbol.toStringTag, {
  value: "Request",
  writable: false,
  enumerable: false,
  configurable: true
});
Object.defineProperties(Request.prototype, {
  method: {enumerable: true},
  url: {enumerable: true},
  headers: {enumerable: true},
  redirect: {enumerable: true},
  clone: {enumerable: true},
  signal: {enumerable: true}
});
function getNodeRequestOptions(request) {
  const parsedURL = request[INTERNALS$2].parsedURL;
  const headers = new Headers(request[INTERNALS$2].headers);
  if (!headers.has("Accept")) {
    headers.set("Accept", "*/*");
  }
  if (!parsedURL.protocol || !parsedURL.hostname) {
    throw new TypeError("Only absolute URLs are supported");
  }
  if (!/^https?:$/.test(parsedURL.protocol)) {
    throw new TypeError("Only HTTP(S) protocols are supported");
  }
  if (request.signal && request.body instanceof Stream__default["default"].Readable && !streamDestructionSupported) {
    throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");
  }
  let contentLengthValue = null;
  if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
    contentLengthValue = "0";
  }
  if (request.body != null) {
    const totalBytes = getTotalBytes(request);
    if (typeof totalBytes === "number") {
      contentLengthValue = String(totalBytes);
    }
  }
  if (contentLengthValue) {
    headers.set("Content-Length", contentLengthValue);
  }
  if (!headers.has("User-Agent")) {
    headers.set("User-Agent", "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)");
  }
  if (request.compress && !headers.has("Accept-Encoding")) {
    headers.set("Accept-Encoding", "gzip,deflate");
  }
  let agent = request.agent;
  if (typeof agent === "function") {
    agent = agent(parsedURL);
  }
  if (!headers.has("Connection") && !agent) {
    headers.set("Connection", "close");
  }
  return Object.assign({}, parsedURL, {
    method: request.method,
    headers: exportNodeCompatibleHeaders(headers),
    agent
  });
}
function AbortError(message) {
  Error.call(this, message);
  this.type = "aborted";
  this.message = message;
  Error.captureStackTrace(this, this.constructor);
}
AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = "AbortError";
const PassThrough$1 = Stream__default["default"].PassThrough;
const resolve_url = Url__default["default"].resolve;
function fetch(url, opts) {
  if (!fetch.Promise) {
    throw new Error("native promise missing, set fetch.Promise to your favorite alternative");
  }
  Body.Promise = fetch.Promise;
  return new fetch.Promise(function(resolve, reject) {
    const request = new Request(url, opts);
    const options = getNodeRequestOptions(request);
    const send = (options.protocol === "https:" ? https__default["default"] : http__default["default"]).request;
    const signal = request.signal;
    let response = null;
    const abort = function abort2() {
      let error = new AbortError("The user aborted a request.");
      reject(error);
      if (request.body && request.body instanceof Stream__default["default"].Readable) {
        request.body.destroy(error);
      }
      if (!response || !response.body)
        return;
      response.body.emit("error", error);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = function abortAndFinalize2() {
      abort();
      finalize();
    };
    const req = send(options);
    let reqTimeout;
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    function finalize() {
      req.abort();
      if (signal)
        signal.removeEventListener("abort", abortAndFinalize);
      clearTimeout(reqTimeout);
    }
    if (request.timeout) {
      req.once("socket", function(socket) {
        reqTimeout = setTimeout(function() {
          reject(new FetchError(`network timeout at: ${request.url}`, "request-timeout"));
          finalize();
        }, request.timeout);
      });
    }
    req.on("error", function(err) {
      reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, "system", err));
      finalize();
    });
    req.on("response", function(res) {
      clearTimeout(reqTimeout);
      const headers = createHeadersLenient(res.headers);
      if (fetch.isRedirect(res.statusCode)) {
        const location = headers.get("Location");
        const locationURL = location === null ? null : resolve_url(request.url, location);
        switch (request.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
            finalize();
            return;
          case "manual":
            if (locationURL !== null) {
              try {
                headers.set("Location", locationURL);
              } catch (err) {
                reject(err);
              }
            }
            break;
          case "follow":
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
              finalize();
              return;
            }
            const requestOpts = {
              headers: new Headers(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: request.body,
              signal: request.signal,
              timeout: request.timeout,
              size: request.size
            };
            if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
              finalize();
              return;
            }
            if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === "POST") {
              requestOpts.method = "GET";
              requestOpts.body = void 0;
              requestOpts.headers.delete("content-length");
            }
            resolve(fetch(new Request(locationURL, requestOpts)));
            finalize();
            return;
        }
      }
      res.once("end", function() {
        if (signal)
          signal.removeEventListener("abort", abortAndFinalize);
      });
      let body = res.pipe(new PassThrough$1());
      const response_options = {
        url: request.url,
        status: res.statusCode,
        statusText: res.statusMessage,
        headers,
        size: request.size,
        timeout: request.timeout,
        counter: request.counter
      };
      const codings = headers.get("Content-Encoding");
      if (!request.compress || request.method === "HEAD" || codings === null || res.statusCode === 204 || res.statusCode === 304) {
        response = new Response(body, response_options);
        resolve(response);
        return;
      }
      const zlibOptions = {
        flush: zlib__default["default"].Z_SYNC_FLUSH,
        finishFlush: zlib__default["default"].Z_SYNC_FLUSH
      };
      if (codings == "gzip" || codings == "x-gzip") {
        body = body.pipe(zlib__default["default"].createGunzip(zlibOptions));
        response = new Response(body, response_options);
        resolve(response);
        return;
      }
      if (codings == "deflate" || codings == "x-deflate") {
        const raw = res.pipe(new PassThrough$1());
        raw.once("data", function(chunk) {
          if ((chunk[0] & 15) === 8) {
            body = body.pipe(zlib__default["default"].createInflate());
          } else {
            body = body.pipe(zlib__default["default"].createInflateRaw());
          }
          response = new Response(body, response_options);
          resolve(response);
        });
        return;
      }
      if (codings == "br" && typeof zlib__default["default"].createBrotliDecompress === "function") {
        body = body.pipe(zlib__default["default"].createBrotliDecompress());
        response = new Response(body, response_options);
        resolve(response);
        return;
      }
      response = new Response(body, response_options);
      resolve(response);
    });
    writeToStream(req, request);
  });
}
fetch.isRedirect = function(code) {
  return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};
fetch.Promise = global.Promise;
var _sfc_main$4 = vue.defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: async () => {
    const store = vuex.useStore();
    const count = vue.ref(0);
    const response = await fetch("http://localhost:8080/api/orders");
    const order = await response.json();
    return {store, count, order};
  }
});
var HelloWorld_vue_vue_type_style_index_0_scoped_true_lang = "\na[data-v-4497f6ec] {\n  color: #42b983;\n}\nlabel[data-v-4497f6ec] {\n  margin: 0 0.5em;\n  font-weight: bold;\n}\ncode[data-v-4497f6ec] {\n  background-color: #eee;\n  padding: 2px 4px;\n  border-radius: 4px;\n  color: #304455;\n}\n";
const _withId$1 = /* @__PURE__ */ vue.withScopeId("data-v-4497f6ec");
const _sfc_ssrRender$4 = /* @__PURE__ */ _withId$1((_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) => {
  _push(`<!--[--><h1 data-v-4497f6ec>${serverRenderer.ssrInterpolate(_ctx.msg)}</h1><button data-v-4497f6ec>store count is: ${serverRenderer.ssrInterpolate(_ctx.store.getters.getCounter)}</button><br data-v-4497f6ec><button data-v-4497f6ec>count is: ${serverRenderer.ssrInterpolate(_ctx.count)}</button><br data-v-4497f6ec><h2 data-v-4497f6ec>Order No: ${serverRenderer.ssrInterpolate(_ctx.order.id)}</h2><br data-v-4497f6ec><h3 data-v-4497f6ec>Order Product: ${serverRenderer.ssrInterpolate(_ctx.order.product)}</h3><!--]-->`);
});
_sfc_main$4.ssrRender = _sfc_ssrRender$4;
_sfc_main$4.__scopeId = "data-v-4497f6ec";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("/home/nico/IdeaProjects/prerender/frontend/src/components/HelloWorld.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var HelloWorld = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: _sfc_main$4
});
exports.render = render;