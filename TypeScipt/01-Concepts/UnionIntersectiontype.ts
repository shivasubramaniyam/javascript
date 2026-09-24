// union type
// A union type accepts any one of several types:

type Status = "pending" | "approved" | "rejected";

function setStatus(status: Status): void {
  console.log(`Status set to ${status}`);
}
// setStatus("approved");

// Intersection
// An intersection type combines multiple types into one, requiring all of their fields at once:

interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

const c: ColorfulCircle = { color: "red", radius: 10 };
