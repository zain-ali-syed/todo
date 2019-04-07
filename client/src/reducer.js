const initState = {
    token: undefined,
    email: undefined,
    loggedIn: "no"
}

export const rootReducer = (state = initState, action) => {

    switch(action.type){
        case 'LOGOUT_USER':
            return {token: "", email: "", loggedIn: "no"}
        case 'LOGGED_IN':
            return {email: action.data.email, token: action.data.token, loggedIn: "yes"}
        default:
            return state;
    }
}