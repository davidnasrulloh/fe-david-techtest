import axiosInstance from "../config/AxiosIntance";

const APIUsers = {

    async getAllUsers(page: number){
        try {
            const response = await axiosInstance.get(`/users?page=${page}`);
            return response;
        } catch (error) {
            return error;
        }
    },

    async getDetailsUser(id: number){
        try {
            const response = await axiosInstance.get(`/users/${id}`)
            return response;
        } catch (error) {
            return error;
        }
    }
}

export default APIUsers;
