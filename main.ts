radio.setGroup(1)
music.setVolume(39)
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 200) {
        radio.sendNumber(1)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
        basic.clearScreen()
    } else {
        radio.sendNumber(0)
        music.stopAllSounds()
        basic.clearScreen()
    }
})
