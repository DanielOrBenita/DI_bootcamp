function func(date) {

    let year = String(date.getFullYear());

    let month = String(date.getMonth() + 1);
    month = month.length == 1 ? 0 + month : month;

    let day = String(date.getDate());
    day = day.length == 1 ? 0 + day : day;

    let hour = String(date.getHours());
    hour = hour.length == 1 ? 0 + hour : hour;

    let minutes = String(date.getMinutes());
    minutes = minutes.length == 1 ? 0 + minutes : minutes;

    let seconds = String(date.getSeconds());
    seconds = seconds.length == 1 ? 0 + seconds : seconds;

    return `my birthday is :${year} / ${month} / ${day} : ${hour} : ${minutes} : ${seconds};`
};




console.log(func(new Date(1997, 11, 28, 0, 0, 0)));

`year, month, day, hour , minutes , sec`
