// Q99
// generate a date object represent my birthday and log it to console
function myBirthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
var nextbirthday = myBirthday(6, 25);
console.log("nextbirthday on:", nextbirthday.toLocaleDateString());
