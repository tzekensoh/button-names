input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . # .
        # . # . .
        # # . . .
        # . # . .
        # . . # .
        `)
    basic.showLeds(`
        # # # # .
        # . . . .
        # # # # .
        # . . . .
        # # # # .
        `)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # # #
        . # . . .
        . . # . .
        . . . # .
        # # # . .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.showIcon(IconNames.Tortoise)
    music.playMelody("E D C D E E E - ", 120)
})
led.plot(3, 2)
music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
basic.forever(function () {
	
})
