// (❌ Bad way)

class AreaCalculator {
  calculateArea(shape) {
    if (shape.type === "circle") {
      return Math.PI * shape.radius * shape.radius;
    } else if (shape.type === "square") {
      return shape.side * shape.side;
    }
  }
}



// ✅ Good way (following OCP)

// We can fix this using polymorphism or abstraction:

class Shape {
  getArea() {
    throw new Error("Method not implemented");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  getArea() {
    return this.side * this.side;
  }
}

class AreaCalculator {
  calculateArea(shape) {
    return shape.getArea();
  }
}


// Now, if you want to add a Triangle, you just create a new class:

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  getArea() {
    return 0.5 * this.base * this.height;
  }
}


