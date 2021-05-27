import axios from "axios"
import { REPOS_INFO_FAIL, REPOS_INFO_REQUEST, REPOS_INFO_SUCCESS, USER_INFO_FAIL, USER_INFO_REQUEST, USER_INFO_SUCCESS } from "../constants/userInfo"

const infoUser = (userName) => async (dispatch) => {
    
    try {
        dispatch({type: USER_INFO_REQUEST})
        const {data} = await axios.get(`https://api.github.com/users/${userName}`)
        console.log(data)
        dispatch({type: USER_INFO_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: USER_INFO_FAIL, payload: error})
    }
} 


const infoRepos = (userName, page=1) => async (dispatch) => {
    try {
        dispatch({type: REPOS_INFO_REQUEST})
        console.log(userName, page)
        const {data} = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=4&page=${page}`)
        console.log(data)
        dispatch({type: REPOS_INFO_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: REPOS_INFO_FAIL, payload: error})
    }
}

export {infoUser, infoRepos}