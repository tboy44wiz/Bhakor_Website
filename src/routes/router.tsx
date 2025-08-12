import { createBrowserRouter } from "react-router";
import AppLayout from "../ui/layout/app.layout";
import HomePage from "../core/domains/home/pages/home.page";
import LogisticsPage from "../core/domains/logistics/pages/logistics.page";
import ConsultsPage from "../core/domains/consults/pages/consults.page";

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
            {
                path: "/consults",
                element: <ConsultsPage />,
            },
        ],
    },
]);

export default routes;