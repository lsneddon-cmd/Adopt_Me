"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _Pet = _interopRequireDefault(require("./Pet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var App = function App() {
  return _react["default"].createElement("div", {}, [_react["default"].createElement("h1", {}, "Adopt Me!"), _react["default"].createElement(_Pet["default"], {
    name: "Luna",
    animal: "Dog",
    breed: "Havanese"
  }), _react["default"].createElement(_Pet["default"], {
    name: "Pepper",
    animal: "Dog",
    breed: "Cockatiel"
  }), _react["default"].createElement(_Pet["default"], {
    name: "Doink",
    animal: "Cat",
    breed: "Mixed"
  })]);
};

(0, _reactDom.render)(_react["default"].createElement(App), document.getElementById("root"));