console.log("hello world~!");
const Car = /** @class */ (function () {
  function Car() {
    this.engine = 1;
  }
  return Car;
})();

console.log(new Car());
