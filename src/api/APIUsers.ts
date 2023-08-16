import axiosInstance from "../config/AxiosIntance";

const APIUsers = {

    async getAllUsers(page: number){
        try {
            const response = await axiosInstance.get(`/users?page=${page}`);
            return response;
        } catch (error) {
            // console.log(error);
            return error;
        }
    },

    async getDetailsUser(id: number){
        try {
            const response = await axiosInstance.get(`/users/${id}`)
            // console.log(response)
            return response;
        } catch (error) {
            // console.log(error);
            return error;
        }
    }
}

export default APIUsers;
