/** first negative integer in every window of size k
 * input =[-8,2,3,-6,10], k=2
 * in each window size, we need to find the 1st negative integer
 * it 1 : as k=2 => -8,2 is the first window where the -8 result for that window
 * it 2 : 2,3 => no negative number
 * it 3 : 3,-6 => -6
 * it 4 : -6,10 => -6
 *
 * approach :
 * initially i and j will be in the starting position
 * if j is positive then dont add it in the queue, negative number means add it in the queue
 * increase j till window size k => j-i+1
 * while increementing the i we need to check the queue,
 * 1 .if the i'th element is having in the queue, remove from the queue
 * 2. if not present then dont add
 * 3. if the queue is having more than 2 negative element, then add the 1st ele of the queue to the result i.e left most ele
 */
