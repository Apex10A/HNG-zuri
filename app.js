document.addEventListener("DOMContentLoaded", function () {
  // Function to update the current day of the week
  function updateDayOfWeek() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
      "Day:" + " " + currentDay;
  }

  function updateUTCTime() {
    const currentDate = new Date();
    const currentMilliseconds = currentDate.getUTCMilliseconds();
    document.querySelector('[data-testid="currentUTCTime"]').textContent =
      "Time(MS):" + " " + currentMilliseconds + " ms";
  }

  // Initial update
  updateDayOfWeek();
  updateUTCTime();

  setInterval(updateUTCTime, 1);
});
