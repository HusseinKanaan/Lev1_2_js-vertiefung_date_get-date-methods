let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];


const date = new Date();
console.log(date)



const year = date.setFullYear(2021);
console.log(date.getFullYear())

const month = date.setMonth(1);
console.log(date.getMonth() + '', "Monat")

const day = date.setDate(5);
console.log(date.getDate() + '', "Tag")

const hours = date.setHours(21)
console.log(date.getHours() + "", 'Stunde')


const minutes = date.setMinutes(5);
console.log(date.getMinutes() + '', "Minute")

const weekday = wochenTag[5]
console.log(weekday)

const monatFeb = monate[1];
console.log(monatFeb)

console.log(date)





