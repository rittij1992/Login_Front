import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../ContextAPI/UserContext";
import { useContext } from "react";

const AuthGuard = () => {
    
    const {userToken} = useContext(UserContext);
    return (
        userToken ? <Outlet></Outlet> : <Navigate to="/auth/login"></Navigate>
    )
};

export default AuthGuard;