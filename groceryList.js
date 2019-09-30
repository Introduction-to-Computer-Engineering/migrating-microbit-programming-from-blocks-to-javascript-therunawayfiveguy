let count = 0;
let textList: string[] = [];
basic.showString("Grocery List");
basic.showString("press a to find list number of item you want");
textList = ["", "Eggs", "Cake", "Apples", "Bread", "Milk"];
input.onButtonPressed(Button.A, function () {
   count++;
   basic.showNumber(count);
})
input.onButtonPressed(Button.B, function () {
   if (count > 5) {
       basic.showString("invalid number");
   } else {
       basic.showString("" + textList[count]);
   }
})
