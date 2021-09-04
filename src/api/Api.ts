import axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "b6fa5c05-6843-4097-abaa-0626f4dc6549"
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
    },
    getStatus(userId:string) {
        return instanse.get(`profile/status/${userId}`)
    },
    updateStatus(status:string){
        return instanse.put(`profile/status` ,{status})
    }
}

export const AuthApi = {
    me() {
        return instanse.get(`auth/me`)
            .then(response => response.data)
    },
    login(email:string,password:string,rememberMe:boolean = false){
        return instanse.post(`/auth/login`,{email,password,rememberMe})
    },
    logout(){
        return instanse.delete(`/auth/login`)
    }
}


