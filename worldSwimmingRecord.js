function worldSwimmingRecord(arg1, arg2, arg3) {

    let finalTime = 0
    let swimTime = arg2 * arg3
    let adedTimePerMeters = Math.floor(arg2 / 15) * 12.5

    let totalTime = swimTime + adedTimePerMeters

    if (arg1 > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else if (arg1 <= totalTime) {
        let finalTime = totalTime - arg1
        console.log(`No, he failed! He was ${finalTime.toFixed(2)} seconds slower.`)
    }
}
worldSwimmingRecord(55555.67, 3017, 5.03)