import MainPage from "../pages/MainPage";
import OrderPage from "../pages/OrderPage";

export const routes = [
    {
        path: "/",
        component: <MainPage />,
    },
    {
        path: "/order",
        component: <OrderPage />,
    },
];
