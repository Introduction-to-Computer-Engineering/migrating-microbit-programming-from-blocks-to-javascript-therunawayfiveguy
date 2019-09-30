let samenumber = false
let Count = 0
let userNumber = 0
basic.showString("Can you count?")
basic.showString("Count with A and submit with A+B")
userNumber = Math.randomRange(1, 20)
basic.showNumber(userNumber)
basic.showString("")
input.onButtonPressed(Button.A, function () {
   Count += 1
})
input.onButtonPressed(Button.B, function () {
   Count += -1
})
input.onButtonPressed(Button.AB, function () {
   if (Count == userNumber) {
       samenumber = true
   } else {
       basic.showString("use A to count higher or use B to count lower")
   }
   if (samenumber) {
       basic.showString("You can count!")
   }
})
