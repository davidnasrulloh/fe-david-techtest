import axiosInstance from "../config/AxiosIntance";

const APIUsers = {
    async getAllUsers(page: number){
        try {
            const response = await axiosInstance.get(`/users?page=${page}`);
            // console.log(response.data.data)
            return response;
            
        } catch (error) {
            console.log(error);
        }
    },

    async getDetailsUser(id: number){
        try {
            const response = await axiosInstance.get(`/users/${id}`)
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

export default APIUsers;
