import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import auth from "../firebase/firebase.config";
import { useLocation, useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://assigment11-five.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    
    const next = useNavigate()
    const location = useLocation()
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        },
            error => {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                        .then(() => {
                            
                                next(location?.state ? location.state : '/')

                            
                        })
                        .catch(error => console.log(error))
                }
            }
        )
    }, [next,location])



    return axiosSecure;
};

export default useAxiosSecure;