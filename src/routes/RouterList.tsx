import { useRoutes } from "react-router"
import { Apresentation } from "../components/Apresentation";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { NotFoundPage } from "../pages/NotFoundPage";
import { Technologies } from "../pages/Technologies";
import { Test } from "../pages/Test";

export const RouterList = () => {
    return useRoutes([
        {path: '*', element: <NotFoundPage />},
        {path: '/', element: <Apresentation />},
        {path: '/home', element: <Home />},
    ]);
};