import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import auth from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://assigment11-five.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const navigation = useNavigate()
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        },
            error => {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                        .then(() => {
                            navigation('/login')
                        })
                        .catch(error => console.log(error))
                }
            }
        )
    }, [navigation])



    return axiosSecure;
};

export default useAxiosSecure;