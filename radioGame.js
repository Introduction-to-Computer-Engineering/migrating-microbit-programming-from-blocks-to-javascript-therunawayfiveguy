basic.showString("instruct partner where to walk A to step B to tun 90 degrees right");
radio.setGroup(1);
input.onButtonPressed(Button.A, function () {
   radio.sendString("Step forward");
})
input.onButtonPressed(Button.B, function () {
   radio.sendString("Turn right");
