import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header/Header'
import Skeleton from '@material-ui/lab/Skeleton';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import Pagination from '@material-ui/lab/Pagination';
import { infoRepos } from './actions/userActons';

function Main() {
    const [page, setPage] = useState(1)
    const userInfo = useSelector(state => state.userInfo)
    const { user, html_url, name, login, loading, error, avatar_url, followers, following, public_repos } = userInfo

    const reposInfo = useSelector(state => state.reposInfo)
    const { reposRepos = {}, reposLoading, reposError } = reposInfo
    const dispatch = useDispatch()

    useEffect(() => {
        setPage(1)
        dispatch(infoRepos(userInfo.login, 1))
    }, [user])

    const pageChangeHandler = (e, value) => {
        setPage(value)
        dispatch(infoRepos(userInfo.login, value))
    }
    console.log(userInfo)
    return (
        <div>
            <Header />
            <div style={styles.content} className="content">
                {loading || reposLoading?
                    <React.Fragment>
                        <div style={styles.contentLeft} className="content-left">
                            <Skeleton><img style={{ borderRadius: "50%", maxWidth: '280px' }} src={`https://avatars.githubusercontent.com/u/63005581?v=4`}></img></Skeleton>
                            <Skeleton><h2 style={{ color: 'black', marginTop: '2rem' }}>Eugene Medvedev</h2></Skeleton>
                            <Skeleton><a href={html_url} style={{ marginTop: "1rem", textDecoration: 'none' }} target="_blank"><small style={{ color: '#0064EB' }}>Eugene Medvedev</small></a></Skeleton>
                            <div style={{ marginTop: "1rem", display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <Skeleton><span style={{ display: 'flex', alignItems: 'center' }}><GroupIcon />100 followers</span></Skeleton>
                                <Skeleton><span style={{ display: 'flex', alignItems: 'center' }}><PersonIcon />100 following</span></Skeleton>
                            </div>
                        </div>
                        <div style={styles.contentRight} className="content-right">
                                                    <Skeleton><h1 style={{ color: 'black' }}>Repositories (100)</h1></Skeleton>
                                                            <div style={{ width: "100%", background: 'white', padding: "2rem", marginTop: '2rem', borderRadius: '6px' }}>
                                                                <Skeleton><a href='#' target="_blank" style={{ textDecoration: 'none' }}><p style={{ fontSize: '24px', color: '#0064EB', wordBreak: "break-all" }}>Eugene Medvedev</p></a></Skeleton>
                                                                <br></br>
                                                                <Skeleton><small style={{ wordBreak: "break-all" }}>Eugene Medvedev</small></Skeleton>
                                                            </div>
                                                            <div style={{ width: "100%", background: 'white', padding: "2rem", marginTop: '2rem', borderRadius: '6px' }}>
                                                                <Skeleton><a href='#' target="_blank" style={{ textDecoration: 'none' }}><p style={{ fontSize: '24px', color: '#0064EB', wordBreak: "break-all" }}>Eugene Medvedev</p></a></Skeleton>
                                                                <br></br>
                                                                <Skeleton><small style={{ wordBreak: "break-all" }}>Eugene Medvedev</small></Skeleton>
                                                            </div>
                                                            <div style={{ width: "100%", background: 'white', padding: "2rem", marginTop: '2rem', borderRadius: '6px' }}>
                                                                <Skeleton><a href='#' target="_blank" style={{ textDecoration: 'none' }}><p style={{ fontSize: '24px', color: '#0064EB', wordBreak: "break-all" }}>Eugene Medvedev</p></a></Skeleton>
                                                                <br></br>
                                                                <Skeleton><small style={{ wordBreak: "break-all" }}>Eugene Medvedev</small></Skeleton>
                                                            </div>
                                                            <div style={{ width: "100%", background: 'white', padding: "2rem", marginTop: '2rem', borderRadius: '6px' }}>
                                                                <Skeleton><a href='#' target="_blank" style={{ textDecoration: 'none' }}><p style={{ fontSize: '24px', color: '#0064EB', wordBreak: "break-all" }}>Eugene Medvedev</p></a></Skeleton>
                                                                <br></br>
                                                                <Skeleton><small style={{ wordBreak: "break-all" }}>Eugene Medvedev</small></Skeleton>
                                                            </div>
                                                    <div style={{ display: "flex", marginTop: '2rem', alignItems: 'center', marginLeft: 'auto' }} className="pagination">
                                                    <Skeleton><small>10 - 10 of 100 items</small></Skeleton>
                                                </div>
                                    </div>

                    </React.Fragment>
                    :
                    !user && !error ?
                        <div style={{ maxWidth: '210px', margin: 'auto', textAlign: 'center' }}>
                            <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.4937 0.916748C13.7366 0.916748 0.916748 13.7366 0.916748 29.4937C0.916748 45.2508 13.7366 58.0707 29.4937 58.0707C35.9227 58.0707 41.8453 55.9147 46.6182 52.3235L58.2002 63.9021C58.9863 64.6881 60.0194 65.0834 61.0511 65.0834C62.0828 65.0834 63.1159 64.6881 63.902 63.902C65.4784 62.3256 65.4783 59.7766 63.902 58.2002L52.3235 46.6182C55.9147 41.8453 58.0707 35.9227 58.0707 29.4937C58.0707 13.7366 45.2508 0.916748 29.4937 0.916748ZM8.98141 29.4937C8.98141 18.1816 18.1816 8.98141 29.4937 8.98141C40.8058 8.98141 50.006 18.1816 50.006 29.4937C50.006 40.8058 40.8058 50.006 29.4937 50.006C18.1816 50.006 8.98141 40.8058 8.98141 29.4937Z" fill="#808080" />
                            </svg>
                            <h3 style={{ textAlign: 'center', marginTop: '3rem' }}>Start with searching a GitHub user</h3>
                        </div>
                        :
                        error ?

                            <div style={{ maxWidth: '210px', margin: 'auto', textAlign: 'center' }}>
                                <svg width="65" height="75" viewBox="0 0 65 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23 18.5C23 13.2533 27.2533 9 32.5 9C37.7467 9 42 13.2533 42 18.5C42 23.7467 37.7467 28 32.5 28C27.2533 28 23 23.7467 23 18.5ZM32.5 0C22.2827 0 14 8.28273 14 18.5C14 28.7173 22.2827 37 32.5 37C42.7173 37 51 28.7173 51 18.5C51 8.28273 42.7173 0 32.5 0ZM9 70.5C9 57.5213 19.5213 47 32.5 47C45.4787 47 56 57.5213 56 70.5C56 72.9853 58.0147 75 60.5 75C62.9853 75 65 72.9853 65 70.5C65 52.5507 50.4493 38 32.5 38C14.5507 38 0 52.5507 0 70.5C0 72.9853 2.01472 75 4.5 75C6.98528 75 9 72.9853 9 70.5Z" fill="#808080" />
                                </svg>

                                <h3 style={{ textAlign: 'center', marginTop: '3rem' }}>User not found</h3>
                            </div>
                            :
                            user ?
                                <React.Fragment>
                                    <div style={styles.contentLeft} className="content-left">
                                        <img style={{ borderRadius: "50%", maxWidth: '280px' }} src={avatar_url}></img>
                                        <h2 style={{ color: 'black', marginTop: '2rem' }}>{name ? name : login}</h2>
                                        <a href={html_url} style={{ marginTop: "1rem", textDecoration: 'none' }} target="_blank"><small style={{ color: '#0064EB' }}>{login}</small></a>
                                        <div style={{ marginTop: "1rem", display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                            <span style={{ display: 'flex', alignItems: 'center' }}><GroupIcon />{followers} followers</span>
                                            <span style={{ display: 'flex', alignItems: 'center' }}><PersonIcon />{following} following</span>
                                        </div>
                                    </div>
                                    <div style={styles.contentRight} className="content-right">
                                        {reposRepos ?
                                            (reposRepos).length > 0 ?
                                                <React.Fragment>
                                                    <h1 style={{ color: 'black' }}>Repositories ({public_repos})</h1>
                                                    {reposRepos.map((e, i) => {
                                                        return (
                                                            <div style={{ width: "100%", background: 'white', padding: "2rem", marginTop: '2rem', borderRadius: '6px' }} key={i}>
                                                                <a href={e.html_url} target="_blank" style={{ textDecoration: 'none' }}><p style={{ fontSize: '24px', color: '#0064EB', wordBreak: "break-all" }}>{e.name}</p></a>
                                                                <br></br>
                                                                <small style={{ wordBreak: "break-all" }}>{e.description}</small>
                                                            </div>)
                                                    }
                                                    )}
                                                    <div style={{ display: "flex", marginTop: '2rem', alignItems: 'center', marginLeft: 'auto' }} className="pagination">
                                                        <small>{page == 1 ? 1 : (reposRepos.length < 4 ? ((page) * 4) - (4 - reposRepos.length) - reposRepos.length + 1 : (page - 1) * reposRepos.length + 1)} - {(page * 4) - (4 - reposRepos.length)} of {public_repos} items</small><Pagination class="pagination" page={page} onChange={pageChangeHandler} boundaryCount={1} count={Math.ceil(public_repos / 4)} variant="outlined" shape="rounded" />

                                                    </div>
                                                </React.Fragment> :
                                                <div style={{ margin: "10rem auto", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                    <svg width="76" height="62" viewBox="0 0 76 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 0C6.49187 0 0 6.49187 0 14.5V47.5C0 55.5081 6.49187 62 14.5 62H61.5C69.5081 62 76 55.5081 76 47.5V14.5C76 6.49187 69.5081 0 61.5 0H14.5ZM9 14.5C9 11.4624 11.4624 9 14.5 9H61.5C64.5376 9 67 11.4624 67 14.5V47.5C67 50.5376 64.5376 53 61.5 53H14.5C11.4624 53 9 50.5376 9 47.5V14.5ZM48.1984 24.6422C49.37 23.4706 49.37 21.5711 48.1984 20.3995C47.0268 19.228 45.1274 19.228 43.9558 20.3995L38.2989 26.0564L32.6421 20.3995C31.4705 19.228 29.571 19.228 28.3994 20.3995C27.2279 21.5711 27.2279 23.4706 28.3994 24.6422L34.0563 30.299L28.3994 35.9559C27.2279 37.1274 27.2279 39.0269 28.3994 40.1985C29.571 41.3701 31.4705 41.3701 32.6421 40.1985L38.2989 34.5417L43.9558 40.1985C45.1273 41.3701 47.0268 41.3701 48.1984 40.1985C49.37 39.0269 49.37 37.1274 48.1984 35.9559L42.5416 30.299L48.1984 24.6422Z" fill="#808080" />
                                                    </svg>
                                                    <h3 style={{ textAlign: 'center', marginTop: '3rem' }}>Repository list is empty</h3>
                                                </div>
                                            : ''}

                                    </div>
                                </React.Fragment>
                                : ''
                }

            </div>

        </div>
    )
}

const styles = {
    content: {
        background: "#F9F9F9",
        minHeight: "calc(100vh - 72px)",
        display: "flex",
        padding: "40px 0px",
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    contentLeft: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        width: '23%',
        maxWidth: '280px',
        minWidth: '280px',
        marginBottom: '2rem'
    },
    contentRight: {
        display: "flex",
        flexDirection: "column",
        minHeight: 'calc(100vh - 152px)',
        maxWidth: "95%",
        width: "70%"
    }
}

export default Main
