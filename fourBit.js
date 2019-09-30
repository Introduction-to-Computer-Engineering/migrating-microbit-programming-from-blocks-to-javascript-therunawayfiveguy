let num4 = 0
let num3 = 0
let num2 = 0
let num1 = 0
let count = 0
basic.showString("Create a 4 bit binary number left to right")
basic.showString("A : 1 B : 0 A+B to find result")
input.onButtonPressed(Button.A, function () {
   count += 1
   if (count == 1) {
       basic.showNumber(1)
       num1 = 8
   }
   if (count == 2) {
       basic.showNumber(1)
       num2 = 4
   }
   if (count == 3) {
       basic.showNumber(1)
       num3 = 2
   }
   if (count == 4) {
       basic.showNumber(1)
       num4 = 1
   }
})
input.onButtonPressed(Button.B, function () {
   count += 1
   if (count == 1) {
       basic.showNumber(0)
   }
   if (count == 2) {
       basic.showNumber(0)
   }
   if (count == 3) {
       basic.showNumber(0)
   }
   if (count == 4) {
       basic.showNumber(0)
   }
})
input.onButtonPressed(Button.AB, function () {
   basic.showNumber(num1 + num2 + num3 + num4)
})
