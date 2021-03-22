// Race numbers generation
let raceNumber = Math.floor(Math.random() * 1000);
// Boolean registration
let earlyRegistered = true;

let runnersAge = 17;

// decision block that validates whether the runner is an adult AND registered early.
if (runnersAge >= 18 && earlyRegistered == true) {
  raceNumber = raceNumber + 1000;
}
// decision block that check age and registration time to determine race time.
if (runnersAge >= 18 && earlyRegistered == true) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}`);
} else if (runnersAge >= 18 && earlyRegistered == false) {
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}`);
} else if (runnersAge < 18) {
  console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}`);
}
