function right_90 () {
    basic.pause(50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    basic.pause(220)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(50)
}
function forword_r () {
    basic.pause(50)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    basic.pause(1600)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(50)
    basic.showLeds(`
        . . # . .
        . . # # .
        # # # # #
        . . # # .
        . . # . .
        `)
}
function Left_90 () {
    basic.pause(50)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    basic.pause(340)
    maqueen.motorStop(maqueen.Motors.All)
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
}
function Forword_2 () {
    basic.pause(50)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    basic.pause(230)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(50)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
}
function Small_forword () {
	
}
function forword () {
    basic.pause(50)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    basic.pause(200)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
}
function Half_forword () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    basic.pause(117.5)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        . . . . .
        `)
}
function Assesment () {
    forword()
    Forword_2()
    right_2()
    forword()
    Half_forword()
    forword()
    Half_forword()
    right_2()
    forword()
    Half_forword()
    Left_90()
    forword()
    Half_forword()
    forword()
    forword()
    forword()
    Half_forword()
    hard_left()
    forword()
    Half_forword()
    Half_forword()
    Half_forword()
    Half_forword()
    Half_forword()
    Half_forword()
    forword()
    forword()
    Left_90()
    Half_forword()
    forword()
    Half_forword()
    forword()
    forword()
    Half_forword()
    forword()
    right_90()
    forword()
    forword()
    forword()
    right_90()
    forword()
    Half_forword()
    forword()
    Left_90()
    Half_forword()
    forword()
    Left_90()
    Half_forword()
    forword()
    right_90()
    Left_90()
    Half_forword()
    forword()
}
function Maze_r () {
    Left_90()
    Left_90()
    basic.showLeds(`
        . # . . .
        . # . . .
        . # # # .
        . . . # .
        . . . # .
        `)
    Forword_2()
    Left_90()
    Forword_2()
    right_90()
    forword()
    forword()
    Left_90()
    Left_90()
    right_90()
    right_90()
    right_90()
    right_90()
    Left_90()
    Left_90()
    Left_90()
    Left_90()
    Left_90()
    Left_90()
    Maze()
    Maze_r()
}
function Maze () {
    basic.showLeds(`
        . # . . .
        . # . . .
        . # # # .
        . . . # .
        . . . # .
        `)
    Forword_2()
    forword()
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    Left_90()
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
    Forword_2()
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    right_90()
    basic.showLeds(`
        . . # . .
        . . # # .
        # # # # #
        . . # # .
        . . # . .
        `)
    forword()
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    Left_90()
    Left_90()
    right_90()
    right_90()
    right_90()
    right_90()
    Left_90()
    Left_90()
    Left_90()
    Left_90()
}
function right_2 () {
    basic.pause(50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    basic.pause(340)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(50)
}
function hard_left () {
    basic.pause(50)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    basic.pause(340)
    maqueen.motorStop(maqueen.Motors.All)
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
}
Assesment()
basic.forever(function () {
	
})
basic.forever(function () {
    music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
})
