import { useRoutes } from "react-router"
import { Apresentation } from "../components/Apresentation";
import { About } from "../pages/About";
import { Calculator } from "../pages/Calculator";
import { DevTask } from "../pages/DevTask";
import { Home } from "../pages/Home";
import { NotFoundPage } from "../pages/NotFoundPage";
import { Technologies } from "../pages/Technologies";

export const RouterList = () => {
    return useRoutes([
        {path: '*', element: <NotFoundPage />},
        {path: '/', element: <Apresentation />},
        {path: '/home', element: <Home />},
        {path: '/projects/calculadora', element: <Calculator />},
        {path: '/projects/devtask', element: <DevTask />},
    ]);
};