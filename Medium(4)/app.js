// MEDIUM4
const car = {
    make: "ford",
    model: "f150",
    year: 2004,
    milage: 163000,
    color: "blue",

    driveToWork() {
        var oldMilage = this.milage;
        this.milage = this.milage + 33;
        console.log("old milage: " + oldMilage + " | new milage: " + this.milage);
    },

    driveAroundTheWorld() {
        var oldMilage = this.milage;
        this.milage = this.milage + 24000
        console.log("old milage: " + oldMilage + " | new milage: " + this.milage);
    },

    runErrands() {
        var oldMilage = this.milage;
        this.milage = this.milage + 30
        console.log("old milage: " + oldMilage + " | new milage: " + this.milage);
    }
};

const car1 = Object.create(car);
car1.driveToWork();
car1.driveAroundTheWorld();
car1.runErrands();