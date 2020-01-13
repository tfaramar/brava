export const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

export const formatDate = timestamp => {
    let date = new Date(timestamp)

    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    let monthIndex = date.getMonth();

    let day = date.getDate();
    let month = months[monthIndex];
    let year = date.getFullYear();
    
    return month + ' ' + day + ', ' + year;
};

export const formatDateFull = timestamp => {
    let date = new Date(timestamp)

    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    let monthIndex = date.getMonth();

    let day = date.getDate();
    let month = months[monthIndex];
    let year = date.getFullYear();

    let hours = date.getUTCHours();
    let time = date.getUTCHours() < 12 ? 'AM' : 'PM';

    let minutes = date.getUTCMinutes();

    return month + ' ' + day + ', ' + year + ' at ' + (hours % 12) + ":" + minutes + ' ' + time;
};


