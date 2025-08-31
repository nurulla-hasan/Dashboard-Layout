import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/app/layout/MainLayout";
import AuthLayout from "@/app/layout/AuthLayout";
import Profile from "@/app/pages/settings/profile/Profile";
import Dashboard from "@/app/pages/dasboard/Dashboard.jsx";
import Users from "@/app/pages/users/Users";
import About from "@/app/pages/settings/about-us/About";
import Terms from "@/app/pages/settings/terms/Terms";
import Privacy from "@/app/pages/settings/privacy/Privacy";
import Orders from "@/app/pages/orders/Orders";
import Payments from "@/app/pages/payments/Payments";
import Notification from "@/app/pages/notifications/Notification";
import Login from "@/app/pages/auth/login/Login.jsx";
import ForgetPassword from "@/app/pages/auth/forget-password/ForgetPassword";
import ResetPassword from "@/app/pages/auth/reset-password/ResetPassword";
import VerifyOtp from "@/app/pages/auth/verify-otp/VerifyOtp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "users",
                element: <Users />
            },
            {
                path: "orders",
                element: <Orders />
            },
            {
                path: "payments",
                element: <Payments />
            },
            {
                path: "notifications",
                element: <Notification />
            },
            {
                path: "settings/profile",
                element: <Profile />
            },
            {
                path: "settings/about",
                element: <About />
            },
            {
                path: "settings/terms",
                element: <Terms />
            },
            {
                path: "settings/privacy",
                element: <Privacy />
            },
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "forgot-password",
                element: <ForgetPassword />
            },
            {
                path: "verify-otp",
                element: <VerifyOtp />
            },
            {
                path: "reset-password",
                element: <ResetPassword />
            },
        ]
    }
]);
