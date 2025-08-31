import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center p-4">
            <Outlet />
        </div>
    );
};

export default AuthLayout;
