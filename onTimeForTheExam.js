function checkExamTime(examHour, examMinute, arrivalHour, arrivalMinute) {

    let examTime = examHour * 60 + examMinute;
    let arrivalTime = arrivalHour * 60 + arrivalMinute;
    let difference = arrivalTime - examTime;

    if (difference > 0) {

      console.log("Late");

      if (difference < 60) {
        console.log(`${difference} minutes after the start`);
      } else {
        let hours = Math.floor(difference / 60);
        let minutes = difference % 60;
        console.log(`${hours}:${minutes.toString().padStart(2, '0')} hours after the start`);
      }

    } else if (difference >= -30) {

      console.log("On time");

      if (difference !== 0) {
        console.log(`${Math.abs(difference)} minutes before the start`);
      }

    } else {

      console.log("Early");

      if (Math.abs(difference) < 60) {
        console.log(`${Math.abs(difference)} minutes before the start`);
        
      } else {
        let hours = Math.floor(Math.abs(difference) / 60);
        let minutes = Math.abs(difference) % 60;
        console.log(`${hours}:${minutes.toString().padStart(2, '0')} hours before the start`);
      }

    }

}
checkExamTime(9, 30, 8, 30)