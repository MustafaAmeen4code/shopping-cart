import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import MenuPage from "./pages/MenuPage";
import ErrorPage from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "menu", element: <MenuPage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
