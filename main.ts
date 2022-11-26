input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("DUCK")
})
radio.onReceivedStringDeprecated(function (receivedString) {
    if (receivedString == "DUCK") {
        basic.showIcon(IconNames.Duck)
    } else {
        basic.showIcon(IconNames.No)
    }
})
radio.setGroup(23)
basic.showIcon(IconNames.Duck)
