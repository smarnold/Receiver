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
        basic.showString("" + (distance))
        if (distance >= 10) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 20)
        } else if (distance < 10 && distance >= 5) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 10)
            basic.pause(1000)
            Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 10)
            basic.pause(500)
        } else {
            basic.showString("?")
            Kitronik_Move_Motor.stop()
        }
    } else {
        basic.showString("R")
        Kitronik_Move_Motor.stop()
    }
})
let distance = 0
radio.setGroup(1)
basic.showString("R")
Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
