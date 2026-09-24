// TypeScript classes work like JavaScript classes, plus access modifiers and typed properties:

/**
 * private — accessible only inside the class itself
 * protected — accessible inside the class and any subclass
 * public (the default) — accessible from anywhere
 */

class Person {
  private name: string;
  protected age: number;
  public email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  introduce(): string {
    return `Hi,I'm ${this.name}`;
  }

  get displayName(): string {
    return this.name;
  }
}

const obj1 = new Person("shiva", 34, "shiv@gmail.com");
console.log(obj1.introduce());

// Constructor parameters can declare their access modifier directly, skipping the separate property declarations:

class Employee {
  constructor(
    private id: number,
    public name: string,
    protected department: string,
  ) {}

  getDetails(): string {
    return `${this.name} works in ${this.department}`;
  }
}

// Inheritance uses extends, and super(...) forwards constructor arguments to the parent class:

class Manager extends Employee {
  constructor(
    id: number,
    name: string,
    department: string,
    private teamSize: number,
  ) {
    super(id, name, department);
  }
  getTeamInfo(): string {
    return `${this.name} manages a team of ${this.teamSize}`;
  }
}

const obj2 = new Manager(1, "shiva", "CSE", 52);
