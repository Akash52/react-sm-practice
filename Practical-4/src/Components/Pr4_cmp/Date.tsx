const monthNames = [
    'January',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

export const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

export const newDate = new Date();
export const date = newDate.getDate();
export const year = newDate.getFullYear();
export const month = monthNames[newDate.getMonth()];
export const day = weekday[newDate.getDay()];
