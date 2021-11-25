const calculateHours = (minute) => {
  let hours, minutes;

  if (minute >= 60) {
    hours = Math.floor(minute / 60);
    minutes = minute % 60;

    return `${hours} hours ${minutes} minutes`;
  } else {

    return `${minute} minutes`;
  }
};

export default calculateHours;
