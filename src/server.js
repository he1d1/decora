"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var e_1, _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.h = void 0;
var htm_1 = require("https://cdn.pika.dev/htm");
/**
 * @see https://github.com/developit/htm
 */
var html = htm_1.default.bind(h);
var XML = {
    /**
     * A function that converts an object to an XML string.
     * @param obj - The object to convert to XML.
     */
    stringify: function (obj) {
        if (Array.isArray(obj)) {
            return obj.map(function (child) { return XML.stringify(child); }).join("");
        }
        if (typeof (obj === null || obj === void 0 ? void 0 : obj.tag) === "function") {
            obj = h(obj.tag.name, __assign(__assign({}, obj.props), { hydrate: "onload" }), [
                new obj.tag().render(),
                h("script", {
                    src: "static/".concat(obj.tag.name, ".js"),
                    defer: true,
                    type: "module",
                }),
            ]);
        }
        if (!(typeof obj === "object")) {
            return obj;
        }
        var tag = obj.tag, props = obj.props, children = obj.children;
        var attrs = Object.entries(props !== null && props !== void 0 ? props : {}).map(function (_a) {
            var key = _a[0], value = _a[1];
            return "".concat(key, "=\"").concat(value, "\"");
        });
        var childrenString = XML.stringify(children !== null && children !== void 0 ? children : []);
        return "<".concat(tag, " ").concat(attrs.join(" "), ">").concat(childrenString, "</").concat(tag, ">");
    },
};
/**
 * @see https://github.com/hyperhype/hyperscript
 * @param tag - The tag name of the element.
 * @param props - The properties of the element.
 * @param children - The children of the element.
 */
function h(tag, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    return { tag: tag, props: props, children: children };
}
exports.h = h;
// TODO add slugs to routes
var router = new Map();
var islands = new Map();
var layouts = new Map();
/**
 * A decorator that adds a component to the router.
 * @param pathname - The pathname of the route.
 * @constructor
 */
function Page(pathname) {
    return function (target) {
        router.set(pathname, target);
        return target;
    };
}
/**
 * A decorator that partially hydrates a component.
 * @param props
 * @constructor
 */
function Island() {
    return function (target) {
        // get state from the constructor
        // state is stored in properties of the constructor
        islands.set("/static/".concat(target.name, ".js"), target);
        return target;
    };
}
function Layout(pathname) {
    return function (target) {
        layouts.set(pathname, target);
        return target;
    };
}
var HomeLayout = /** @class */ (function () {
    function HomeLayout() {
    }
    HomeLayout.prototype.error = function (error) {
        return html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      <div>\n        <h1>Error</h1>\n        <p>", "</p>\n      </div>\n    "], ["\n      <div>\n        <h1>Error</h1>\n        <p>", "</p>\n      </div>\n    "])), error.message);
    };
    HomeLayout.prototype.render = function () {
        return html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      <div>\n        <slot></slot>\n      </div>\n    "], ["\n      <div>\n        <slot></slot>\n      </div>\n    "])));
    };
    HomeLayout = __decorate([
        Layout("/")
    ], HomeLayout);
    return HomeLayout;
}());
var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.render = function () {
        return html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      <body>\n        <script type=\"module\" src=\"/static/client.js\" defer></script>\n        <", " count=", "><//>\n      </body>\n    "], ["\n      <body>\n        <script type=\"module\" src=\"/static/client.js\" defer></script>\n        <", " count=", "><//>\n      </body>\n    "])), Counter, 0);
    };
    HomePage = __decorate([
        Page("/")
    ], HomePage);
    return HomePage;
}());
var Counter = /** @class */ (function () {
    function Counter() {
        this.count = 0;
    }
    Counter.prototype.render = function () {
        var _this = this;
        return html(templateObject_4 || (templateObject_4 = __makeTemplateObject([" <button onclick=", ">", "</button>"], [" <button onclick=", ">", "</button>"])), function () { return _this.count++; }, this.count);
    };
    Counter = __decorate([
        Island()
    ], Counter);
    return Counter;
}());
function render(component) {
    return __asyncGenerator(this, arguments, function render_1() {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __await(XML.stringify(component.render()))];
                case 1: return [4 /*yield*/, _a.sent()];
                case 2:
                    component = _a.sent();
                    _a.label = 3;
                case 3: return [3 /*break*/, 0];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var esbuild = require("https://deno.land/x/esbuild@v0.15.2/mod.js");
function staticHandler(requestEvent) {
    return __awaiter(this, void 0, void 0, function () {
        var ts, result, island;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(new URL(requestEvent.request.url).pathname === "/static/client.js")) return [3 /*break*/, 3];
                    return [4 /*yield*/, Deno.readTextFile("./src/client.ts")];
                case 1:
                    ts = _a.sent();
                    return [4 /*yield*/, esbuild.transform(ts, {
                            loader: "ts",
                        })];
                case 2:
                    result = _a.sent();
                    esbuild.stop();
                    return [2 /*return*/, result.code];
                case 3:
                    island = islands.get(new URL(requestEvent.request.url).pathname);
                    return [2 /*return*/, ("import { html } from 'https://unpkg.com/htm/preact/standalone.module.js';" +
                            island.toString() +
                            "window.hydrate(".concat(island.name, ", import.meta);"))];
            }
        });
    });
}
function handle(conn) {
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function () {
        var httpConn, renderer, httpConn_1, httpConn_1_1, requestEvent, body, pageConstructor, layoutConstructor, component, body, e_2_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("%cNew connection%c: %c".concat(conn.remoteAddr.hostname), "color: blue; font-weight: bold", "color: gray", "");
                    httpConn = Deno.serveHttp(conn);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 9, 10, 15]);
                    httpConn_1 = __asyncValues(httpConn);
                    _b.label = 2;
                case 2: return [4 /*yield*/, httpConn_1.next()];
                case 3:
                    if (!(httpConn_1_1 = _b.sent(), !httpConn_1_1.done)) return [3 /*break*/, 8];
                    requestEvent = httpConn_1_1.value;
                    if (!new URL(requestEvent.request.url).pathname.startsWith("/static")) return [3 /*break*/, 5];
                    return [4 /*yield*/, staticHandler(requestEvent)];
                case 4:
                    body = _b.sent();
                    requestEvent.respondWith(new Response(body, {
                        status: 200,
                        headers: new Headers({
                            "content-type": "text/javascript",
                        }),
                    }));
                    return [3 /*break*/, 7];
                case 5:
                    pageConstructor = router.get(new URL(requestEvent.request.url).pathname);
                    layoutConstructor = layouts.get(new URL(requestEvent.request.url).pathname);
                    if (!pageConstructor) {
                        requestEvent.respondWith(new Response("Not Found", {
                            status: 404,
                            headers: new Headers({
                                "content-type": "text/html",
                            }),
                        }));
                        console.log("%c404%c: %c".concat(conn.remoteAddr.hostname, " %c\u00B7%c ").concat(new URL(requestEvent.request.url).pathname), "color: red; font-weight: bold", "color: gray", "", "color: gray", "");
                        return [3 /*break*/, 7];
                    }
                    console.log("%c200%c: %c".concat(conn.remoteAddr.hostname, " %c\u00B7%c ").concat(new URL(requestEvent.request.url).pathname, " %c\u00B7%c ").concat(pageConstructor.name), "color: green; font-weight: bold", "color: gray", "", "color: gray", "", "color: gray", "");
                    component = new pageConstructor();
                    renderer !== null && renderer !== void 0 ? renderer : (renderer = render(component));
                    return [4 /*yield*/, renderer.next(component)];
                case 6:
                    body = (_b.sent()).value;
                    requestEvent.respondWith(new Response(body, {
                        status: 200,
                        headers: new Headers({
                            "content-type": "text/html",
                        }),
                    }));
                    _b.label = 7;
                case 7: return [3 /*break*/, 2];
                case 8: return [3 /*break*/, 15];
                case 9:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 15];
                case 10:
                    _b.trys.push([10, , 13, 14]);
                    if (!(httpConn_1_1 && !httpConn_1_1.done && (_a = httpConn_1.return))) return [3 /*break*/, 12];
                    return [4 /*yield*/, _a.call(httpConn_1)];
                case 11:
                    _b.sent();
                    _b.label = 12;
                case 12: return [3 /*break*/, 14];
                case 13:
                    if (e_2) throw e_2.error;
                    return [7 /*endfinally*/];
                case 14: return [7 /*endfinally*/];
                case 15: return [2 /*return*/];
            }
        });
    });
}
var port = 8080;
var server = Deno.listen({ port: port });
console.log("%cServer started%c: " + "%chttp://localhost:".concat(port), "color: magenta; font-weight: bold", "color: gray", "");
try {
    for (var server_1 = __asyncValues(server), server_1_1; server_1_1 = await server_1.next(), !server_1_1.done;) {
        var conn = server_1_1.value;
        handle(conn);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (server_1_1 && !server_1_1.done && (_a = server_1.return)) await _a.call(server_1);
    }
    finally { if (e_1) throw e_1.error; }
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
