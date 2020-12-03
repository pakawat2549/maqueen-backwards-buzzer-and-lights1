let maqueenMovingBackwards = false
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(2000)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(2000)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(2000)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    maqueenMovingBackwards = true
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.All)
    maqueenMovingBackwards = false
    basic.pause(2000)
})
basic.forever(function () {
    while (maqueenMovingBackwards) {
        music.playTone(392, music.beat(BeatFraction.Whole))
        maqueen.writeLED(maqueen.LEDswitch.turnOn, maqueen.LED.LEDLeft)
        maqueen.writeLED(maqueen.LEDswitch.turnOn, maqueen.LED.LEDRight)
    }
})
