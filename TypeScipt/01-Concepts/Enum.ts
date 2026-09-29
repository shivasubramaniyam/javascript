// Numeric enums auto-increment from the first value unless you set one explicitly:

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

// Down is 2, Left is 3, Right is 4 — each one picks up from the previous value.
// String enums require every member to have an explicit value, which makes them easier to debug ("pending" instead of 0):

enum Status1 {
  Pending = "pending",
  Approved = "approved",
  Rejected = "rejected",
}

// const enum compiles away entirely (no runtime object is generated), which makes it more performant when you don't need to iterate over the enum's values at runtime:

const enum HttpStatus {
  OK = 200,
  NotFound = 404,
  ServerError = 500,
}
