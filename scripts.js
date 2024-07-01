document.addEventListener("DOMContentLoaded", () => {
  function updateDateTime() {
    const currentTimeElement = document.querySelector(
      '[data-testid="currentTimeUTC"]'
    );
    const currentDayElement = document.querySelector(
      '[data-testid="currentDay"]'
    );

    // Get the current date and time
    const now = new Date();
    const options = { weekday: "long", timeZone: "UTC" };

    currentTimeElement.textContent = `Current Time (UTC): ${now
      .toISOString()
      .substr(11, 5)}`; // Display HH:MM
    currentDayElement.textContent = `Current Day: ${new Intl.DateTimeFormat(
      "en-US",
      options
    ).format(now)}`;
  }

  // Call the function initially and update every minute
  updateDateTime();
  setInterval(updateDateTime, 60000); // Update every minute
});
