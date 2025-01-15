import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/RootLayout";
import Dashborad from "./pages/Dashboard";
import AddCustomer from "./pages/Add";
import UpdateCustomer from "./pages/Update";
import DeleteCustomer from "./pages/Delete";
import Error from "./pages/Error";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        { path: "", element: <Dashborad /> },
        { path: "/add", element: <AddCustomer /> },
        { path: "/update", element: <UpdateCustomer /> },
        { path: "/delete", element: <DeleteCustomer /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
