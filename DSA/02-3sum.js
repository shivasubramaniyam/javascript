/**input = [-1, 0, 1, 2, -1, -4, 0, 2];
target = 0;
output : {{-4,2,2},{-1,-1,2,{-1,0,1}}}


approach : check for the triplet which result in the target = 0
note : duplicates not allowed
if the question is asked for the index then we can;t proceed with the sorting


let us consider the example 
arr = [-1, 0, 1, 2, -1, -4, 0, 2] it is the sorted arr
but we have the duplicate numbers that can possibly increase the iterations and duplication,
to avoid those situation we need the validation check for the code 
if(a[i] == a[i+1]) and a[j] == a[j+1], then skip that iteration 

lets apply in the 3 sum problem
n1+n2+n3=0 ==> n2+n3 = -(n1) technically target = -(n1)

i.e if in arr, -1 is 0 index then statrt arr from idx 1 to n-1 to get the sum equal to the 1st element
*/
