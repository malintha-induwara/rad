import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Dashboard} from "./pages/Dashboard.tsx";
import {AddCustomer} from "./pages/AddCustomer.tsx";
import {UpdateCustomer} from "./pages/UpdateCustomer.tsx";
import {DeleteCustomer} from "./pages/DeleteCustomer.tsx";
import {RootLayout} from "./component/RootLayout.tsx";
import {Error} from "./pages/Error.tsx";
import {CustomerProvider} from "./pages/CustomerProvider.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout/>,
            children: [
                {path: "/", element: <Dashboard/>},
                {path: "/add", element: <AddCustomer/>},
                {path: "/update", element: <UpdateCustomer/>},
                {path: "/delete", element: <DeleteCustomer/>}]
        },
        {path: '*', element: <Error/>}
    ])
    return (
        <>
            <CustomerProvider>
                <RouterProvider router={routes}></RouterProvider>
            </CustomerProvider>
        </>
    )
}

export default App
