function findGroupKeiganMotor222 () {
    mo = keiganmotor.create(0, name)
    isFound = false
    basic.pause(20)
    // スキャン1度目
    group = 0
    for (let index = 0; index <= 255; index++) {
        if (isFound) {
            return
        } else {
            mo.setGroup(group)
console.logValue("group", group)
mo.readMotorMeasurement()
            basic.pause(20)
            if (group < 255) {
                group += 1
            }
        }
    }
    // スキャン2度目
    group = 0
    for (let index2 = 0; index2 <= 255; index2++) {
        if (isFound) {
            return
        } else {
            mo.setGroup(group)
console.logValue("group", group)
mo.readMotorMeasurement()
            basic.pause(20)
            if (group < 255) {
                group += 1
            }
        }
    }
}
input.onButtonPressed(Button.A, function () {
    findGroupKeiganMotor222()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
keiganmotor.onReceivedMotorMeasurement(function (motor) {
    // console.log("onReceivedMotorMeasurement")
    capture = group
    // console.logValue(motor.name, group)
    if (motor.name == name && !(isFound)) {
        isFound = true
        console.logValue(motor.name, group)
motor.setGroup(capture)
motor.ubitGroup(newGroupId)
        basic.showString("" + motor.name + ":")
        basic.showNumber(capture)
        basic.showArrow(ArrowNames.East)
        basic.showNumber(newGroupId)
    }
})
let isFound = false
let newGroupId = 0
let mo: keiganmotor.KeiganMotor = null
let name = ""
let group: number = 0
let capture = 0
name = "EFGH"
newGroupId = 1
basic.forever(function () {
	
})
