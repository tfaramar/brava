export const selectAllActivities = state => Object.values(state.entities.activities);

export const selectUsers = state => Object.values(state.entities.users);

export const selectKudos = state => Object.values(state.entities.kudos);