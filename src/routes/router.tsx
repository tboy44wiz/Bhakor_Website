import { createBrowserRouter } from "react-router";
import AppLayout from "../ui/layout/app.layout";
import HomePage from "../core/domains/home/pages/home.page";
import LogisticsPage from "../core/domains/logistics/pages/logistics.page";

const routes = createBrowserRouter([
    {
        path: "/",
        Component: AppLayout,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/logistics",
                element: <LogisticsPage />,
            },
            // {
            //     path: "/contact",
            //     element: <Contact />,
            // },
        ],
    },
]);

export default routes;