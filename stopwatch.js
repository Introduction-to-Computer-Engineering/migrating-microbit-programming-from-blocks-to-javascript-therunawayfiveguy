let time = 0;
let boo = true;
basic.showString("To see how much time has passed, press A and continue with B");
while(boo)
{
   time++;
   basic.pause(1000);
}
input.onButtonPressed(Button.A, function () {
   boo = false;
   basic.showNumber(time);
   basic.showString(" seconds ");
})
 
input.onButtonPressed(Button.B, function () {
   boo = false;
   while (boo) {
       time++;
       basic.pause(1000);
   }
 
})
 
