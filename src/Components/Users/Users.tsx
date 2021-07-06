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
    follow: (UserId: string) => void
    unFollow: (UserId: string) => void
    setUsers: (users: any) => void
    setCurrentPage: (Page: number) => void
    setTotalUsersCount: (usersCount: number) => void
    onPageChanged: (p: any) => void
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
                {pages.map((p: any) => <span onClick={(e) => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>)}
            </div>
            {
                props.users.map((u: userType) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : UserPhoto} className={s.photo}/>
    </NavLink>
                        </div>
    </span>
                        <span>
    <div>
        {u.isFollowed
            ? <button onClick={() => props.unFollow(u.id)}>Unfollow</button>
            : <button onClick={() => props.follow(u.id)}>Follow</button>}
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