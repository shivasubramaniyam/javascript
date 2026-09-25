// TypeScript ships a set of built-in helpers for transforming existing types. Starting from:

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
}
// Partial<T> — makes every field optional, useful for update payloads:
type PartialTodo = Partial<Todo>;

// Required<T> — the opposite, makes every field mandatory
type RequiredTodo = Required<Todo>;

// Readonly<T> — locks every field after initial assignment
type ReadOnlyTodo = Readonly<Todo>;

// Pick<T, Keys> — keeps only the listed fields
type TodoPreview = Pick<Todo, "title" | "completed">;

// Omit<T, Keys> — keeps everything except the listed fields:
type TodoWithoutDate = Omit<Todo, "createdAt">;

// Record<Keys, Value> — builds an object type from a union of keys, all sharing one value type:
type Page = "home" | "about" | "contact";

interface PageInfo {
  title: string;
  url: string;
}

type Pages = Record<Page, PageInfo>;
// { home: PageInfo; about: PageInfo; contact: PageInfo }

// ReturnType<T> — extracts a function's return type without repeating it manually

function createUser() {
  return { id: 1, name: "Alice", email: "alice@example.com" };
}

type User1 = ReturnType<typeof createUser>;
