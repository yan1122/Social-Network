import React from 'react';
import {userType} from "../../Redux/UsersReducer";
import UserPhoto from "../../assets/Img/user-png-image-9.png";
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";

export type UsersPropsType = {
    users: Array<userType>
    PageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
    followSuccess: (UserId: string) => void
    unFollowSuccess: (UserId: string) => void
    setUsers: (users: any) => void
    setCurrentPage: (Page: number) => void
    setTotalUsersCount: (usersCount: number) => void
    onPageChanged: (p: any) => void
    toggleFollowingProgress: (isFetching: boolean, userId: string) => void
    follow: (userId: string) => void
    unFollow: (userId: string) => void
}

const Users = (props: UsersPropsType) => {
    let PagesCount = Math.ceil(props.totalUsersCount / props.PageSize)

    let pages: any = []
    for (let i = 1; i <= PagesCount; i++) {
        pages.push(i)
    }

    return (


        <div>

            <div>
                {pages.map((p: any) => <span onClick={() => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>)}
            </div>
            {
                props.users.map((u: userType) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : UserPhoto} className={s.photo} alt={'img'}/>
    </NavLink>
                        </div>
    </span>
                        <span>
    <div>
        {u.followed
            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                props.unFollow(u.id)
            }}>Unfollow</button>
            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                props.follow(u.id)
            }}>Follow</button>}

    </div>
    </span>
                        <span>
    <span>
        <div>{u.name}</div>
    <div>{u.status}</div>
    </span>
    <span>
    <div>{"u.location.city"}</div>
    <div>{"u.location.country"}</div>
    </span>
    </span>

                    </div>
                )
            }
        </div>
    )
}

export default Users