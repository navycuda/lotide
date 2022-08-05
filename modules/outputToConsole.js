/* Require */
/* Tcp:Http */
/* Arguments */
/* Export Functions */
const outputToConsole = (error, description) => {
  if (error) console.log(error);
  else console.log(description);
};
/* Local Functions */
/* Execution & Test Data */
/* Exports */
module.exports = outputToConsole;