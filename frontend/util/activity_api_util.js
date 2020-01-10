export const fetchActivities = () => (
    $.ajax({
        url: '/api/activities',
        method: 'GET'
    })
);

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