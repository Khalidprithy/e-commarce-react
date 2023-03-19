import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { MyContext } from "../context/AppContext";

const RequireAuth = () => {
    const { userToken } = useContext(MyContext);

    return userToken ? <Outlet /> : <Navigate to='/' />;
};

export default RequireAuth;