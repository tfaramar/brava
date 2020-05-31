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

export const formatTime = timeString => {
    let parts = timeString.split(":");
    let hours = parseInt(parts[0]);
    let minutes = parseInt(parts[1]);
    let seconds = parseInt(parts[2]);

    if (hours > 0) {
        return `${hours}h ${minutes}m`
    } else {
        if (seconds > 0) {
            return `${minutes}m ${seconds}s`
        } else {
            return `${minutes}m`
        }
    };
};

export const formatDuration = numSeconds => {
    let hours = Math.floor(numSeconds / 3600);
    numSeconds = numSeconds % 3600;
    let minutes = Math.floor(numSeconds / 60);
    let seconds = numSeconds % 60; 

    let formattedHr = hours > 9 ? hours : `0${hours}`;
    let formattedMn = minutes > 9 ? minutes : `0${minutes}`;
    let formattedSc = seconds > 9 ? seconds : `0${seconds}`;

    if (hours > 0) {
        return `${formattedHr}:${formattedMn}:${formattedSc}`
    } else {
        if (minutes > 0) {
            return `00:${formattedMn}:${formattedSc}`
        } else {
            return `00:00:${formattedSc}`
        }
    };
};

export const unformatDuration = (hours, minutes, seconds) => {
    let totalSeconds = seconds;
    totalSeconds += (minutes * 60);
    totalSeconds += (hours * 3600);
    return totalSeconds;
};


