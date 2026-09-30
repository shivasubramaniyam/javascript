function interact(message: string): void {
  console.log(message);
}

// The parameter type comes after the parameter name; the return type comes after the parameter list. void means the function doesn't return a usable value.

// An optional parameter uses ?, and default parameters work exactly like plain JavaScript:

function greet(name: string, greeting?: string): string {
  return greeting ? `${greeting} : ${name}` : `Hello ${name}`;
}

// console.log(greet("shiva"));

function multiply(a: number, b: number = 100): number {
  return a * b;
}

// console.log(multiply(2));

// Rest parameters get typed as an array:

function sum(...nums: number[]): number {
  return nums.reduce((total, n) => total + n, 0);
}
// console.log(sum(2, 3, 4, 5, 67));
