import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout, { productsLoader } from "./layout/AppLayout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import MenuPage from "./pages/MenuPage";
import ErrorPage from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import ChangeProducts from "./pages/ChangeProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    loader: productsLoader,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "menu", element: <MenuPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "admin", element: <AdminPage /> },
      { path: "changeProducts/:id?", element: <ChangeProducts /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
