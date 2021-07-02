radio.onReceivedValue(function (name, value) {
    if (name == "LMotor") {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, value)
        if (value >= 0) {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, value)
        } else {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Reverse, Math.abs(value))
        }
    } else if (name == "RMotor") {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, value)
        if (value >= 0) {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, value)
        } else {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Reverse, Math.abs(value))
        }
    } else if (name == "Obstacle") {
    	
    } else {
        Kitronik_Move_Motor.stop()
    }
})
basic.showString("R")
radio.setGroup(1)
