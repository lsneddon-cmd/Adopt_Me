"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _Pet = _interopRequireDefault(require("./Pet.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var App = function App() {// return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Dog",
  //     breed: "Cockatiel",
  //   }),
  //   React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" }),
  // ]);
};

(0, _reactDom.render)(_react["default"].createElement(App), document.getElementById("root"));