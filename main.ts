let index = 0
let x = 0
let y = 0
let j = 0
let I = 0
basic.forever(function () {
    index = 0
    x = 2
    y = 2
    for (let n = 0; n <= 2; n++) {
        for (let index2 = 0; index2 < 2; index2++) {
            if (index == 1) {
                j = 0
                I = n
                index += -1
            } else if (index == 0) {
                I = 0
                j = n
                index += 1
            }
            led.plot(x + j, y + I)
            led.plot(x - j, y - I)
        }
        basic.pause(500)
    }
    basic.clearScreen()
})
