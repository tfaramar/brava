export const fetchActivities = () => (
    $.ajax({
        url: '/api/activities',
        method: 'GET'
    })
);

export const fetchActivity = id => (
    $.ajax({
        url: `api/activities/${id}`,
        method: 'GET'
    })
);

export const createActivity = activity => (
    $.ajax({
        url: '/api/activities',
        method: 'POST',
        data: { activity }
    }) 
);