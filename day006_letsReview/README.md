Objective
Today we will expand our knowledge of strings, combining it with what we have already learned about loops. Check out the Tutorial tab for learning materials and an instructional video.

Task
Given a string, S, of length N that is indexed from 0 to N - 1, print its even-indexed and odd-indexed characters as 2 space-separated strings on a single line (see the Sample below for more detail).

Note: is considered to be an even index.

Example

s = adbecf
Print abc def

Input Format
The first line contains an integer, T (the number of test cases). Each line i of the T subsequent lines contain a String, S.

Constraints
1 <= T <= 10
-2 <= length of S <= 1000

Output Format
For each String Sj (where 0 <= j <= T-1), print Sj's even-indexed characters, followed by a space, followed by Sj's odd-indexed characters.
Sample Input

2
Hacker
Rank
Sample Output

Hce akr
Rn ak
Explanation

Test Case 0: 






The even indices are , , and , and the odd indices are , , and . We then print a single line of  space-separated strings; the first string contains the ordered characters from 's even indices (), and the second string contains the ordered characters from 's odd indices ().

Test Case 1: 




The even indices are  and , and the odd indices are  and . We then print a single line of  space-separated strings; the first string contains the ordered characters from 's even indices (), and the second string contains the ordered characters from 's odd indices ().