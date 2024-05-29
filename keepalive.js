function printHello() {
  // Adjust time zone to East African Time (EAT) which is UTC+3
  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours() + 3);

  // Get current date and time in EAT
  const day = currentDate.toLocaleString('en-US', { weekday: 'long' });
  const date = currentDate.getDate();
  const month = currentDate.toLocaleString('en-US', { month: 'long' });
  const year = currentDate.getFullYear();
  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours)

  // Construct the message
  const message = `Bot is active ${day} ${date}${getOrdinalSuffix(date)} ${month} at ${hours}:${minutes}:${seconds} ${ampm}`;

  // Print the message
  console.log(message);
}

// Function to get ordinal suffix for date (e.g., 1st, 2nd, 3rd)
function getOrdinalSuffix(date) {
  if (date >= 11 && date <= 13) {
    return 'th';
  }
  switch (date % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

// Call printHello every 5 seconds
setInterval(printHello, 2000); // 5000 milliseconds = 5 seconds
