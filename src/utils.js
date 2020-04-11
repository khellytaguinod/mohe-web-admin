let dateFormat = require("dateformat");

export function dateAndTime() {
  let now = new Date();
  let dateAndTimeNow = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss");

  return dateAndTimeNow;
}
