export const viewState = function(state = 1, action) {
    console.log(state, action)
    return action.viewState || state;
};