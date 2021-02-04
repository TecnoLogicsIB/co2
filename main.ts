function calcula () {
    voltageDiference = voltage - 0.4
    concentracion = voltageDiference * 50 / 16
}
function decide () {
    if (voltage == 0) {
        serial.writeLine("problema")
    } else if (voltage < 400) {
        serial.writeLine("escalfant sensor")
    } else {
        calcula()
    }
}
let concentracion = 0
let voltageDiference = 0
let voltage = 0
let adcVal = 0
voltage = 0
voltageDiference = 0
concentracion = 0
basic.forever(function () {
    adcVal = pins.analogReadPin(AnalogPin.P1)
    voltage = adcVal * (3300 / 1024)
    decide()
    basic.pause(1000)
})
