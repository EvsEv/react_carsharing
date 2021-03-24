import { MainPage } from "../pages/MainPage/MainPage";
import { OrderPage } from "../pages/OrderPage/OrderPage";
import { ParkingPage } from "../pages/ParkingPage/ParkingPage";
import { InsurancePage } from "../pages/InsurancePage/InsurancePage";
import { FuelPage } from "../pages/FuelPage/FuelPage";
import { ServicePage } from "../pages/ServicePage/ServicePage";

export const routes = [
    {
        path: "/",
        component: <MainPage />,
    },
    {
        path: "/order",
        component: <OrderPage />,
    },
    {
        path: "/parking",
        component: <ParkingPage />,
    },
    {
        path: "/insurance",
        component: <InsurancePage />,
    },
    {
        path: "/fuel",
        component: <FuelPage />,
    },
    {
        path: "/service",
        component: <ServicePage />,
    },
];
