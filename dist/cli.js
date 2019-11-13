"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _csvToRedirect = _interopRequireDefault(require("./csvToRedirect"));

var _package = require("./../package.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_commander["default"].version(_package.version).arguments('<csvfile> <out>').action(function (csvfile, out) {
  (0, _csvToRedirect["default"])(csvfile, out);
});

_commander["default"].parse(process.argv);