export default class Car {
  constructor(brand, motor, color, range) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  cloneCar() {
    return (new super.constructor[Symbol.species]());
  }
}
