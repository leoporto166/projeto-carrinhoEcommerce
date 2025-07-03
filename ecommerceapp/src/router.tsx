

import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/carrrinho";
import { Layout } from "./components/layout";
import { Detalhes } from "./pages/Detail";
import { Error } from "./pages/Error";

const router = createBrowserRouter([
    {
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/carrinho",
                element: <Cart/>
            },
            {
                path: "/detalhes/:id",
                element: <Detalhes />
            },
            {
                path: "*",
                element: <Error />
            },

        ]

    }
])

export {router}