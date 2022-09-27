input.onButtonPressed(Button.AB, function () {
    for (let series = 0; series <= 3; series++) {
        for (let index = 0; index < 10; index++) {
            basic.showLeds(`
                . . # . .
                . # # # .
                . # # # .
                . . # . .
                . . # . .
                `)
            basic.showLeds(`
                . . . . .
                . . # . .
                # # # # #
                . . # . .
                . # . # .
                `)
            basic.showLeds(`
                # . . . #
                . # # # .
                . . # . .
                . # # # .
                # . . . #
                `)
        }
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . . # . .
            . . # . .
            `)
        basic.pause(5000)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    sprite = game.createSprite(2, 2)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        sprite.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    }
    while (input.buttonIsPressed(Button.B)) {
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    }
    if (sprite.isTouchingEdge()) {
        sprite.delete()
    }
})
