// Q99
// generate a date object represent my birthday and log it to console
function myBirthday(month : number, day : number): Date {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);
    if (birthday < today){
    
        birthday.setFullYear(year + 1);
    }
    return birthday
    }
    const nextbirthday = myBirthday(6,25);
    console.log("nextbirthday on:",nextbirthday.toLocaleDateString());
