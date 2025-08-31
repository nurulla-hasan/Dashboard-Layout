import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import AuthLayout from "@/layout/AuthLayout";
import Profile from "@/pages/settings/profile/Profile";
import Dashboard from "@/pages/dasboard/Dashboard.jsx";
import Users from "@/pages/users/Users";
import About from "@/pages/settings/about-us/About";
import Terms from "@/pages/settings/terms/Terms";
import Privacy from "@/pages/settings/privacy/Privacy";
import Orders from "@/pages/orders/Orders";
import Payments from "@/pages/payments/Payments";
import Notification from "@/pages/notifications/Notification";
import Login from "@/pages/auth/login/Login";
import ForgetPassword from "@/pages/auth/forget-password/ForgetPassword";
import ResetPassword from "@/pages/auth/reset-password/ResetPassword";
import VerifyOtp from "@/pages/auth/verify-otp/VerifyOtp";

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
