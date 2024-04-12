import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404 Not Found</div>,
    children: [{ path: "/", index: true, element: <div>Home</div> }],
  },
]);
