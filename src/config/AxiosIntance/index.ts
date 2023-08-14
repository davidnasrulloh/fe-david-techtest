import axios from "axios";
import CONST from "../../utils/constant";

const config = {
    baseURL: CONST.BASE_URL,
};

const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (res) => {
        return res;
    },
    async(err) => {
        const originalConfig = err.config;

        if (err.response) {
            if (err.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;
                try {
                    return axiosInstance(originalConfig);
                } catch (error) {
                    if (axios.isAxiosError(error) && error.response && error.response.data) {
                        return Promise.reject(error.response.data);
                    }
                    return Promise.reject(error);
                }
            }

            if (err.response.status === 403 && err.response.data) {
                return Promise.reject(err.response.data);
            }
        }

        return Promise.reject(err);
    }
);

export default axiosInstance;