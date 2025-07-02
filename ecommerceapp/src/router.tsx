

import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/carrrinho";
import { Layout } from "./components/layout";

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

        ]

    }
])

export {router}