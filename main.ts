basic.showLeds(`
    . . . # .
    # . . . #
    . . . . #
    # . . . #
    . . . # .
    `)
basic.forever(function () {
    if (TFabConnectBeta.readValue("switch") == 0) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
        plenbit.servoInitialSet()
        basic.showLeds(`
            . . . # .
            # . . . #
            . . . . #
            # . . . #
            . . . # .
            `)
    }
    if (TFabConnectBeta.readValue("switch") == 1) {
        basic.showLeds(`
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        plenbit.stdMotion(plenbit.StdMotions.HighFive)
        plenbit.servoInitialSet()
        basic.showLeds(`
            . . . # .
            # . . . #
            . . . . #
            # . . . #
            . . . # .
            `)
    }
    if (TFabConnectBeta.readValue("switch") == 2) {
        basic.showLeds(`
            # # # # #
            . # . # .
            . # . # .
            . # . # .
            # # # # #
            `)
        plenbit.stdMotion(plenbit.StdMotions.Hug)
        plenbit.servoInitialSet()
        basic.showLeds(`
            . . . # .
            # . . . #
            . . . . #
            # . . . #
            . . . # .
            `)
    }
})
