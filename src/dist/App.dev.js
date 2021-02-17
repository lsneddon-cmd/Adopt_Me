"use strict";

var Pet = function Pet(_ref) {
  var name = _ref.name,
      animal = _ref.animal,
      breed = _ref.breed;
  return React.createElement("div", {}, [React.createElement("h1", {}, name), React.createElement("h1", {}, animal), React.createElement("h1", {}, breed)]);
};

var App = function App() {
  return React.createElement("div", {}, [React.createElement("h1", {}, "Adopt Me!"), React.createElement(Pet, {
    name: "Luna",
    animal: "Dog",
    breed: "Havanese"
  }), React.createElement(Pet, {
    name: "Pepper",
    animal: "Dog",
    breed: "Cockatiel"
  }), React.createElement(Pet, {
    name: "Doink",
    animal: "Cat",
    breed: "Mixed"
  })]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));