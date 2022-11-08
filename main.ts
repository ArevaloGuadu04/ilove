let Lector = 0
basic.showString("iloveyou")
basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    Lector = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    Lector,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.pause(500)
        basic.showNumber(Lector)
    }
})
