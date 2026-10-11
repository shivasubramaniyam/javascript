/**
 * The JS Event loop is the core mechanism that enables the JS to perform non-blocking, asynchronous opeartions despite being a single-threaded language.
 *
 * the core mechanism that enables JavaScript to perform non-blocking, asynchronous operations despite being a single-threaded language. Since it has only one call stack, it can only execute one piece of code at a time. The event loop acts as an orchestrator, constantly monitoring the execution environment to decide when to run deferred code
 */

/**
 The Core Components
 
 To understand how the event loop works, you must look at how the JavaScript engine interacts with the surrounding runtime environment (like a web browser or Node.js):
 1. Call Stack (LIFO): Tracks the functions currently being executed. When a function is invoked, it is pushed onto the stack. When it finishes, it is popped off.
 2. Web APIs / Node APIs: Background environments where long-running or external tasks (like setTimeout, fetch requests, or DOM events) are handed off so they don't block the main thread.
 3. Microtask Queue: A high-priority queue that holds callbacks specifically from Promises (.then(), .catch()), async/await continuations, and queueMicrotask().
 4. Callback Queue / Macrotask Queue (FIFO): A standard queue that holds callbacks from completed asynchronous operations like timers (setTimeout) and standard I/O events. */

/**
  * 
 How the Loop Works (The Workflow)
 
 The event loop follows a strict, continuous cycle:

 [ Call Stack ]  ◄─── (Moves one task when stack is empty)
       ▲
       │ (Event Loop Orchestration)
       │
 [ Microtask Queue ] ◄─── Processes ALL microtasks first (e.g., Promises)
       ▲
       │ (If empty)
       │
 [ Callback Queue  ] ◄─── Processes ONE macrotask at a time (e.g., setTimeout)
 1. Execute Synchronous Code: The runtime executes the main script sequentially, pushing functions onto the Call Stack.
 2. Offload Async Tasks: When an async function (like setTimeout) is encountered, it is handed off to the host environment APIs. The main script keeps running.
 3. Queue Callbacks: Once the background API finishes its task, it pushes the associated callback function into its respective queue (Microtask or Callback/Macrotask queue).
 4. The Event Loop Check: The Event Loop continuously monitors the Call Stack.
 5. Drain Microtasks: As soon as the Call Stack becomes completely empty, the event loop looks at the Microtask Queue. It executes all pending microtasks until this queue is completely empty.
 6. Execute a Macrotask: After the microtask queue is cleared (and the browser has an opportunity to render updates), the event loop takes the first single task from the Callback/Macrotask Queue and pushes it onto the Call Stack for execution.
 7. Repeat: The cycle starts over.
  */

// Code Execution Example

// Consider this classic interview snippet demonstrating the prioritization of the queues:
// javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout (Macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise (Microtask)");
});

console.log("End");

/**
 Output Order:
 
 1. Start (Synchronous code runs immediately)
 2. End (Synchronous code continues running, while setTimeout and Promise register their callbacks into their respective queues)
 3. Promise (Microtask) (The call stack empties; the event loop drains the high-priority Microtask Queue first)
 4. Timeout (Macrotask) (The microtask queue is clear, so the event loop moves to the regular Callback Queue) */
