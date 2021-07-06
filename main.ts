function indicate (direction: string) {
    indicating = true
    if (direction == "left") {
        for (let index = 0; index < 4; index++) {
            moveMotorZIP.setZipLedColor(0, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
            moveMotorZIP.setZipLedColor(3, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
            moveMotorZIP.show()
            basic.pause(200)
            moveMotorZIP.clear()
            moveMotorZIP.show()
            basic.pause(200)
        }
    } else if (direction == "right") {
        for (let index = 0; index < 4; index++) {
            moveMotorZIP.setZipLedColor(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
            moveMotorZIP.setZipLedColor(2, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
            moveMotorZIP.show()
            basic.pause(200)
            moveMotorZIP.clear()
            moveMotorZIP.show()
            basic.pause(200)
        }
    } else {
        indicating = false
    }
}
radio.onReceivedValue(function (name, value) {
    if (name == "LMotor") {
        if (value >= 0) {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, value)
        } else {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Reverse, Math.abs(value))
        }
    } else if (name == "RMotor") {
        if (value >= 0) {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, value)
        } else {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Reverse, Math.abs(value))
        }
    } else if (name == "Obstacle") {
        distance = Kitronik_Move_Motor.measure()
        if (distance >= 20) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 50)
        } else if (distance < 20 && distance >= 5) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 20)
            basic.pause(1000)
            Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 20)
            basic.pause(500)
        } else {
            Kitronik_Move_Motor.stop()
            basic.showString("?")
        }
    } else {
        Kitronik_Move_Motor.stop()
        basic.showString("R")
    }
})
let indicating = false
let distance = 0
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
radio.setGroup(1)
basic.showString("R")
Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
distance = Kitronik_Move_Motor.measure()
basic.showString("" + (distance))
let headlights = moveMotorZIP.range(0, 2)
let rearlights = moveMotorZIP.range(2, 2)
basic.forever(function () {
    if (input.lightLevel() < 200) {
        headlights.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
        rearlights.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
    } else {
        moveMotorZIP.clear()
        moveMotorZIP.show()
    }
})
