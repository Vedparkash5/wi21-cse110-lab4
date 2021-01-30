# Part 1
1. Because this is a var, the scope is function, i would be prices.length - 1 
2. Because this is a var, the scope is function, discountedPrice will equal to prices[i]*(1-discount)
3. finalPrice will be printed out because it was declared in the scope of the function.
4. 8. [50, 100, 150], the finalPrice and discounted vars are declared in the function scope so they will be constant throughout the function call. With this information, we can see that 100,200, and 300 will be multiplied by 0.5 and then rounded to the nearest number and then divided by 100, which is the same as just multiplying them by 0.5. So 100 returns 50, 200 returns 100, and 300 returns 150.
5. An error will be thrown out because i is only in the scope of the for loop, not outside of it.
6. An error will be thrown out because discountedPrice is only in the scope of the for loop, not outside of it.
7. finalPrice will be printed out because it was declared in the scope of the function.
8. [50, 100, 150], the finalPrice and discounted vars are declared in the function scope so they will be constant throughout the function call. With this information, we can see that 100,200, and 300 will be multiplied by 0.5 and then rounded to the nearest number and then divided by 100, which is the same as just multiplying them by 0.5. So 100 returns 50, 200 returns 100, and 300 returns 150.
9. An error will be thrown out because i is only in the scope of the for loop, not outside of it.
10. An error would be thrown because you can't change a const variable in javascript and it is outside of the scope
11. An error would be thrown because you can't change a const variable in javascript and it is outside of the scope
12. I think that the function will return an empty list or [] because discounted is returned and it is a const variable with value [].
13.
  * A. student.name;
  * B. student['Grad Year'];
  * C. student.greeting();
  * D. student['Favorite Teacher'][0]
  * E. student.courseLoad[0]
14. 
  * A. ans = '32', the code thought this was string concatination and converted the 2 into a string
  * B. ans = 1, the code thought of this as an arithmetic expression and converted the '3', which only contained numbers, into the number 3
  * C. ans = 3 because null has numeric value of 0
  * D. ans = '3null', javascript converted this into string concatination
  * E. ans = 4, boolean true has a value of 1 so 1 + 3 = 4
  * F. ans = 0, false and null are both valued as 0 so 0 + 0 = 0
  * G. ans="3undefined", javascript thought of this as string concatination
  * H. ans = NaN, the conversion failed
15. 
  * A. ans = true, '2' converts to a number and 2 > 1 = true
  * B. ans = false, during string comparison, string with the first letter of '2' was greater than '1' so this is false
  * C. ans = true, string '2' got converted into 2
  * D. ans = false, === checks equality without conversion and '2' != 2
  * E. ans = false, true has value 1 and 1 != 2
  * F. ans = true, Boolean(2) is true
16. == compares after conversion, === doesn't convert
17. 'How are you' is printed because 2 doesn't equal to 1 so the next statement goes in and 2 is positive
