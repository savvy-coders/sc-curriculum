// refactor this messy looking function into pure functions
function rentCar(name, age, car) {
  if (age >= 25) {
    console.log(`Thank you for your reservation ${name}. We have a ${car} available for you, and it is quite affordable.`)
  } else if (age >= 18) {
    console.log(`Thank you for your reservation ${name}. We have a ${car} available for you, but it is quite expensive.`)
  } else {
    console.log(`Sorry, ${name}. You are not old enough to rent a car.`)
  }
}
