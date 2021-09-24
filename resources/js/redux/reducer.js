const defaultState = {
    token: null,
    logged: false,
};

const loggedReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_TOKEN":
            return (state = {
                token: action.payload,
                logged: true,
            });
        case "GET_TOKEN":
            return state.token;
        case "IS_LOGGED_IN":
            return state.logged;
        default:
            return state;
    }
};

export default loggedReducer;
