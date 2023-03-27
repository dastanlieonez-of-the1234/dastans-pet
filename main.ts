input.onButtonPressed(Button.A, function () {
    var_1 = 1
    basic.showIcon(IconNames.Heart)
    hunger += 9
})
input.onButtonPressed(Button.AB, function () {
    var_1 = 0
    playing += 1
    angry = -1
    energy += -20
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(hunger)
})
input.onGesture(Gesture.Shake, function () {
    angry = 0
    angry += 1
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    var_1 = 0
    angry += -1
    energy += -20
    angry += -1
    playing += 1
})
let var_1 = 0
let angry = 0
let hunger = 0
let energy = 100
hunger = 100
basic.showIcon(IconNames.Happy)
let playing = 0
angry = 0
var_1 = 1
basic.forever(function () {
    if (playing == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (playing == 2) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (playing == 3) {
        basic.showLeds(`
            . . . . .
            . # . # .
            # . . . #
            # . . . #
            . # # # .
            `)
    } else if (playing == 4) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            # . . . #
            . # # # .
            `)
    } else if (playing == 5) {
        basic.showIcon(IconNames.Fabulous)
    }
})
basic.forever(function () {
    if (energy == 0) {
        basic.showIcon(IconNames.Skull)
        basic.showString("dead")
    } else if (energy <= 26) {
        basic.showIcon(IconNames.Asleep)
    } else if (energy >= 100) {
    	
    }
})
basic.forever(function () {
    if (hunger == 0) {
        basic.showIcon(IconNames.Skull)
        basic.showString("dead")
    }
})
basic.forever(function () {
    hunger += -1
    basic.pause(500)
})
basic.forever(function () {
    if (angry == 7) {
        basic.showIcon(IconNames.Skull)
        basic.showString("dead")
    } else if (angry == 5) {
        basic.showIcon(IconNames.Angry)
    } else if (angry == 6) {
        basic.showIcon(IconNames.Angry)
    } else if (angry == 5) {
        basic.showIcon(IconNames.Confused)
    } else if (angry == 4) {
        basic.showIcon(IconNames.Confused)
    } else if (angry == 3) {
        basic.showIcon(IconNames.Sad)
    } else if (angry == 2) {
        basic.showIcon(IconNames.Sad)
    } else if (angry == 1) {
        basic.showIcon(IconNames.Sad)
    } else if (angry == 0) {
        basic.showIcon(IconNames.Happy)
    }
})
basic.forever(function () {
    energy += -5
    basic.pause(1000)
})
basic.forever(function () {
    if (true) {
        if (var_1 == 1) {
            angry = 0
        } else if (energy > 100) {
            energy = 100
        } else if (hunger < 100) {
            hunger = 100
        }
    }
})
