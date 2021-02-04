function calcula () {
    voltageDiference = voltage - 0.4
    concentracion = voltageDiference * 50 / 16
    serial.writeNumber(concentracion)
    serial.writeLine(" ppm")
}
function decideix () {
    if (voltage == 0) {
        serial.writeLine("problema")
    } else if (voltage < 400) {
        serial.writeLine("escalfant sensor")
    } else {
        calcula()
    }
}
let adcVal = 0
let concentracion = 0
let voltage = 0
let voltageDiference = 0
serial.writeLine("HI")
basic.forever(function () {
    adcVal = pins.analogReadPin(AnalogPin.P1)
    voltage = adcVal * (3300 / 1024)
    decideix()
    basic.pause(1000)
})
