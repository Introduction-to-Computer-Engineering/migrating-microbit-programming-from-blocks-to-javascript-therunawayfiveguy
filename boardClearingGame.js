let trackx = 0;
let tracky = 0;
let indexx = 0;
let indexy = 0;
basic.showString("Press A to clear board");
for(indexx = 0; indexx <= 4; indexx++ )
{ for(indexy = 0; indexy <= 4; indexy++)
   {
       led.plot(indexx, indexy);
       tracky = indexy;
   }
trackx = indexx;
}
 
 
input.onButtonPressed(Button.A, function () {
   if (tracky >= 0) {
       led.unplot(trackx, tracky)
       tracky += -1
   } else {
       trackx += -1
       tracky = 4
       led.unplot(trackx, tracky)
   }
})
