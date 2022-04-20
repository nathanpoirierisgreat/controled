radio.onReceivedString(function (receivedString) {
    if (receivedString == "left") {
        cuteBot.motors(30, 50)
    }
    if (receivedString == "stop") {
        cuteBot.stopcar()
    }
    if (receivedString == "right") {
        cuteBot.motors(50, 30)
    }
    if (receivedString == "foreword") {
        cuteBot.forward()
    }
    if (receivedString == "back") {
        cuteBot.backforward()
    }
    if (receivedString == "honk") {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            music.setVolume(255)
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(0, music.beat(BeatFraction.Half))
            music.playTone(440, music.beat(BeatFraction.Whole))
            basic.clearScreen()
        }
    }
})
radio.setGroup(255)
