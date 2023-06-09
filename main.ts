basic.forever(function () {
    led.plot(randint(0, 10), randint(0, 10))
    led.unplot(randint(0, 10), randint(0, 10))
})
