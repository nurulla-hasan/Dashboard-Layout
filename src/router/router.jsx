import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layout/Layout";
import Profile from "@/pages/settings/profile/Profile";
import Dashboard from "@/pages/dasboard/Dashboard.jsx";
import Users from "@/pages/users/Users";
import About from "@/pages/settings/about-us/About";
import Terms from "@/pages/settings/terms/Terms";
import Privacy from "@/pages/settings/privacy/Privacy";
import Orders from "@/pages/orders/Orders";
import Payments from "@/pages/payments/Payments";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        // Add an error element here for better error handling if you want
        // errorElement: <ErrorPage />,
        children: [
            {
                index: true, // This makes it the default child route for "/"
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

            // Settings Route
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
    }
]);
