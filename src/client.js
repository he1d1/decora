"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Decora");
var metaType = import.meta;
window.hydrate = function (constructor, meta) {
    var currentScripts = document.querySelectorAll(
    // @ts-ignore: slice does exist on string
    "script[src=\"".concat(new URL(meta.url).pathname.slice(1), "\"]"));
    currentScripts.forEach(function (currentScript) {
        console.debug("%cHydrating%c:", "color: green; font-weight: bold", "color: gray", new constructor(), currentScript === null || currentScript === void 0 ? void 0 : currentScript.parentNode);
        var element = currentScript === null || currentScript === void 0 ? void 0 : currentScript.parentNode;
        var component = new constructor();
        function replace() {
            element.replaceChildren.apply(element, __spreadArray(__spreadArray([], [render(component.render(), component)].flat(), false), [currentScript], false));
        }
        replace();
        console.debug("%cHydrated%c:", "color: green; font-weight: bold", "color: gray", new constructor(), currentScript === null || currentScript === void 0 ? void 0 : currentScript.parentNode);
        function render(dom, component) {
            if (typeof dom === "string" || typeof dom === "number") {
                return dom;
            }
            if (Array.isArray(dom)) {
                return dom.map(function (vdom) { return render(vdom, component); });
            }
            var element = document.createElement(dom.type);
            var _loop_1 = function (key) {
                if (key === "children") {
                    element.append.apply(element, [render(dom.props.children, component)].flat());
                    return "continue";
                }
                if (key.startsWith("on")) {
                    element.addEventListener(key.slice(2), function (event) {
                        dom.props[key](event);
                        replace();
                    }.bind(component));
                    return "continue";
                }
                element.setAttribute(key, dom.props[key]);
            };
            for (var key in dom.props) {
                _loop_1(key);
            }
            return element;
        }
    });
};
