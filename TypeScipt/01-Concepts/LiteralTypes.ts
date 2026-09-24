// A literal type is a specific value treated as its own type, rather than the general string or number:

let direction: "north" | "south" | "east" | "west" = "north";

//direction = "up"; // Error: not assignable

/**This is the same mechanism behind the Status union above, just written directly on a variable instead of a named type. It's especially useful for modeling API responses that vary by shape: */

type SuccessResponse = { data: unknown };
type ErrorResponse = { message: string };
type ApiResponse = SuccessResponse | ErrorResponse;

// type assertions
//A type assertion tells the compiler "trust me, I know the real type here" without changing anything at runtime:
const someValue: unknown = "some random value";

const strLength: number = (someValue as string).length;

//type guards
//A type guard narrows a union type down to one specific branch, based on a runtime check:

function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

// instanceof works as a type guard for classes:

class Dog {
  bark() {
    console.log("Woof");
  }
}
class Cat {
  meow() {
    console.log("Meow");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
