let light = 254;
led.setBrightness(light);
let indexx = 0;
let indexy = 4;
basic.showString("stack a tower by pressing a and change brightness with b ");
for (indexx = 0; indexx <= 4; indexx++) {
   led.plot(indexx, indexy);
   if (input.buttonIsPressed(Button.A)) {
       if (indexy > 0) {
           led.plot(indexx, indexy);
           basic.pause(1000);
           indexy += -1;
           led.plot(indexx, indexy);
       } else {
           break;
       }
   }
   basic.pause(1000);
   led.unplot(indexx, indexy);
   if (indexx == 4) {
       indexx = -1;
   }
}
input.onButtonPressed(Button.B, function () {
   if (light >= 255) {
       light = 0;
       led.setBrightness(light);
   } else {
       light += 25;
       led.setBrightness(light);
   }
})
