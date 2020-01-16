export const createKudo = activityId => (
    $.ajax({
        url: `/api/activities/${activityId}/kudos`,
        method: 'POST'
    })
);

export const deleteKudo = kudoId => (
    $.ajax({
        url: `/api/kudos/${kudoId}`,
        method: 'DELETE'
    })
)