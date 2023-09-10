import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./UI/Home";
import Cart from "./Features/Cart/Cart";
import Menu, { menuLoader } from "./Features/Menu/Menu";
import CreateOrder, {
  action as OrderRequestAction,
} from "./Features/Order/CreateOrder";
import Order, { orderLoader } from "./Features/Order/Order";
import AppLayout from "./UI/AppLayout";
import Error from "./UI/Error";
import { action as UpdateOrderAction } from "./Features/Order/UpdateOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: OrderRequestAction,
      },
      {
        path: "order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: UpdateOrderAction,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
