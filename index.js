function lowerCaseDrivers(drivers) {
  return drivers.map((driver) => driver.toLowerCase())
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    cosnt firstName = driver.split(" ")[0];
    cosnt lastName = driver.split(" ")[1];

    return Object.assign({}, {firstName: firstName}, {lastName: lastName})
  })
}
