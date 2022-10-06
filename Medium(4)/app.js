// creating Car object 
let Car = {
    make: 'Ford',
    model: 'Raptor',
    year: 2014,
    milage: 2000,
    color: 'red',
    // creating driveToWork method
    driveToWork: function () {
        console.log('driveToWork');
        // setting new milage to 33 miles
        this.milage =
        console.log('New Milage : ' + this.milage);
    },
    // creating driveAroundTheWorld method
    driveAroundTheWorld: function () {
        console.log('\n')
        console.log('driveAroundTheWorld');
        // printing old milage
        console.log('Old milage : ' + this.milage);
        // setting new milage to 24000 miles
        this.milage = '24000 miles'
        console.log('New Milage : ' + this.milage);
    },
    // creating runErrands method
    runErrands: function () {
        console.log('\n')
        console.log('runErrands');
        // printing old milage
        console.log('Old milage : ' + this.milage);
        // setting new milage to 30 miles
        this.milage = 33
        console.log(`New milage `);

    }
}
// calling methode
Car.driveToWork()
Car.driveAroundTheWorld()
Car.runErrands()