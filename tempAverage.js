let temp = 0;
let count = 0;
let temptemp = 0;
let averageTemp = 0;
basic.showString("Press A to measure a temperature, the avg will be updated");
input.onButtonPressed(Button.A, function () {
    while (true) {
        temp = input.temperature();
        count += 1;
        temptemp += temp;
        averageTemp = temptemp / count;
        basic.showNumber(temp);
        break;
    }
})
basic.forever(function () {
    basic.showNumber(averageTemp)
})
