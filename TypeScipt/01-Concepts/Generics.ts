// Without generics, a reusable function loses type information the moment it accepts more than one possible type:

function identity1(arg: any) {
  return arg;
}

const a1 = identity1("hello"); //typed as 'any', not 'string'

//A generic parameter (<T>) lets the function stay reusable while keeping the specific type intact:

function identity<T>(arg: T): T {
  return arg;
}

const a = identity("hello");
const b = identity<number>(42);

// Generics work the same way on arrays and interfaces:
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const pair: KeyValuePair<string, number> = { key: "age", value: 27 };

// And on classes:
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  getItems(): T[] {
    return this.data;
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("hello");

console.log(textStorage);

//Generics can be constrained to only accept types with a particular shape:

interface LengthWise {
  length: number;
}

function logLength<T extends LengthWise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength("hello");
logLength([1, 2, 3]);
// logLength(42);
