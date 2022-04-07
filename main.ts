input.onButtonPressed(Button.A, function () {
    x = 2
    while (!(input.buttonIsPressed(Button.A))) {
        if (x > 4) {
            x = 4
        }
        if (x < 0) {
            x = 0
        }
        if (pins.analogReadPin(AnalogPin.P2) < 436) {
            x = x - 1
            led.plot(x, 4)
            basic.pause(200)
            basic.clearScreen()
        } else {
            if (pins.analogReadPin(AnalogPin.P2) > 446) {
                x = x + 1
                led.plot(x, 4)
                basic.pause(200)
                basic.clearScreen()
            } else {
                led.plot(x, 4)
                basic.pause(200)
                basic.clearScreen()
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
let x = 0
basic.showIcon(IconNames.Asleep)
music.playTone(262, music.beat(BeatFraction.Sixteenth))
basic.clearScreen()
