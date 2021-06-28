import React from 'react';
import {FollowAC, setUsersAC, UnFollowAC, userType} from "../../Redux/UsersReducer";
import s from './Users.module.css'
import {v1} from "uuid";
import axios from "axios";
import UserPhoto from "./../../assets/Img/user-png-image-9.png"

export type UsersPropsType = {
    users: Array<userType>
    follow: (UserId: string) => void
    unFollow: (UserId: string) => void
    setUsers: (users: any) => void
}

const Users = (props: UsersPropsType) => {
    let getUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }
    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map((u: userType) => <div key={u.id}>
        <span>
            <div>
                <img src={UserPhoto} className={s.photo}/>
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