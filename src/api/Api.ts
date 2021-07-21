import axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "ba5cecd6-1162-4b9f-80a1-8473e46fd1a8"
    }
})

export const UsersApi = {
    getUsers(currentPage: number = 1, PageSize: number = 10) {
        return instanse.get(`users?page=${currentPage}&count=${PageSize}`).then(response => response.data)
    },
    FollowUser(userId: any) {
        return instanse.post(`follow/${userId}`, {}).then(response => {
            return (response.data)
        })
    },
    UnFollowUser(userId: any) {
        return instanse.delete(`follow/${userId}`).then(response => response.data)
    },
}

export const ProfileApi = {
    getProfile(userId: string) {
        return instanse.get(`profile/` + userId)
    }
}

export const AuthApi = {
    me() {
        return instanse.get(`auth/me`)
            .then(response => response.data)
    }
}


