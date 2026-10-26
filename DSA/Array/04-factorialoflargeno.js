/**in the normal factorial number in the code
 * n=5 which means after factorial, 5* 4* 3* 2* 1 = 120
 * we need to represent it in the array [1,2,0]
 * this is because of the large factorial no
 *
 *
 * approach -
 * lets take n=5, 5*4*3*2*1 === 1*2*3*4*5
 *
 * lets take into array for each iteration
 *
 * i= 0 arr = [1,,,,,,...] size = 1 carry = 0
 * i= 1 arr = [2,,,,,....] size = 1 carry = 0
 * i= 2 arr = [2,,,,,....] size = 1 carry = 0
 * i= 3 arr = [6,,,,,....] size = 1 carry = 0
 * i= 4 arr = [4,2,,,,...] size = 2 carry = 2
 * i= 5 5*4 = 20 carry = 2, 5*2 = 10 add with the carry 10+2 =12
 * arr = [0,2,1...] size =3 we arrived in thw answer just we need to reverse it in the code
 */
