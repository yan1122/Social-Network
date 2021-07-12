import axios from "axios";

const baseUrl =`https://social-network.samuraijs.com/api/1.0/`

const instanse = axios.create({
   withCredentials:true,
   baseURL:`https://social-network.samuraijs.com/api/1.0/`,
   headers:{
      "API-KEY":"1a246526-c15d-4a1f-9651-7437e332dff7"
   }
})

export const UsersApi = {
   getUsers(currentPage: number = 1, PageSize: number = 10) {
      return instanse.get(`users?page=${currentPage}&count=${PageSize}`).then(response => response.data)
   },
   FollowUser(userId:any){
     return instanse.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,{}).
     then(response => {
         return(response.data)
     })
   },
   UnFollowUser(userId:any) {
     return instanse.delete(`follow/${userId}`).then(response => response.data)
   },
}


