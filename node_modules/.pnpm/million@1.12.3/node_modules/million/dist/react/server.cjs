"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderToString = exports.renderToStaticMarkup = void 0;

var _utils = require("million/utils");

const renderToString = _utils.fromVNodeToString;
exports.renderToString = renderToString;
const renderToStaticMarkup = _utils.fromVNodeToString;
exports.renderToStaticMarkup = renderToStaticMarkup;