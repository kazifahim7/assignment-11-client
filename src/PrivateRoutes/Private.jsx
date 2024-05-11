import { useContext } from "react";

import { Navigate } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()


    if (loading) {
        return <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>

    }
    else if (user) {
        return children
    }

    else {
        return <Navigate state={location.pathname} to={'/login'} replace></Navigate>
    }














};

export default Private;