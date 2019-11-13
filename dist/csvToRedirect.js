"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _csvtojson = _interopRequireDefault(require("csvtojson"));

var _path = require("path");

var _fs = require("fs");

require("colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(csvfile, out) {
  (0, _csvtojson["default"])({
    noheader: true,
    delimiter: ';',
    output: "csv"
  }).fromFile((0, _path.resolve)(csvfile)).then(function (jsonObj) {
    return jsonObj.map(function (row) {
      var start = row[0];
      var go = row[1];
      return "rewrite ^".concat(start, "(/$|$) ").concat(go, " permanent;");
    });
  }).then(function (res) {
    (0, _fs.writeFile)((0, _path.resolve)(out), res.join('\n'), function (err) {
      if (err) {
        throw err;
      }
    });
  }).then(function () {
    console.log('All done \n Check the file at'.green.bold);
    console.log("".concat((0, _path.resolve)(out)).bold);
  })["catch"](function (err) {
    return console.error('Something went wrong'.red.bold, err);
  });
};

exports["default"] = _default;