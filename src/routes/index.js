import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { OrderLayout } from "../layouts/OrderLayout/OrderLayout";

export const routes = [
    {
        path: "/",
        component: <MainLayout />,
    },
    {
        path: "/order",
        component: <OrderLayout />,
    },
];
