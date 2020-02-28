export const selectAllActivities = state => Object.values(state.entities.activities);

export const selectRoutes = state => Object.values(state.entities.routes);

export const selectUsers = state => Object.values(state.entities.users);

export const selectKudos = state => Object.values(state.entities.kudos);