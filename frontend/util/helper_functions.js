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


