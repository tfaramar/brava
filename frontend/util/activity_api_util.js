//add in params below
export const fetchActivities = (offset = 0, my_feed = false) => {
    let url = `/api/activities?offset=${offset}`
    if (my_feed) {
        url += `&my_feed=${my_feed}`
    }

    return $.ajax({
        url: url,
        method: 'GET'
    });
};

export const fetchActivity = activityId => (
    $.ajax({
        url: `api/activities/${activityId}`,
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

export const deleteActivity = activityId => (
    $.ajax({
        url: `api/activities/${activityId}`,
        method: 'DELETE'
    })
);

export const updateActivity = activity => (
    $.ajax({
        url: `api/activities/${activity.id}`,
        method: 'PATCH',
        data: { activity }
    })
);