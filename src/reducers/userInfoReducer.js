import { REPOS_INFO_FAIL, REPOS_INFO_REQUEST, REPOS_INFO_SUCCESS, USER_INFO_FAIL, USER_INFO_REQUEST, USER_INFO_SUCCESS } from "../constants/userInfo";

function userInfoReducer(state= { user: {}, html_url: '', avatar_url: '', login: '', name: '', followers: 0, following: 0, repos: {}, public_repos: 0}, action) {
    switch (action.type) {
        case USER_INFO_REQUEST:
            return {loading: true}
        case USER_INFO_SUCCESS:
            return {
                loading: false, 
                html_url: action.payload.html_url, 
                login: action.payload.login, 
                name: action.payload.name, 
                followers: action.payload.followers, 
                following: action.payload.following,
                avatar_url: action.payload.avatar_url,
                repos: action.payload.repos,
                user: action.payload,
                public_repos: action.payload.public_repos
            }
        case USER_INFO_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

function reposInfoReducer(state = {reposRepos: {data: []}}, action) {
    switch (action.type) {
        case REPOS_INFO_REQUEST:
            return {reposLoading: true}
        case REPOS_INFO_SUCCESS:
            return {reposLoading: false, reposRepos: action.payload}
        case REPOS_INFO_FAIL:
            return {reposLoading: false, reposError: action.payload}
        default:
            return state
    }
}

export {userInfoReducer,reposInfoReducer}