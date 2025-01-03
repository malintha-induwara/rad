import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Dashboard} from "./pages/Dashboard";
import {AddCustomer} from "./pages/AddCustomer";
import {UpdateCustomer} from "./pages/UpdateCustomer";
import {DeleteCustomer} from "./pages/DeleteCustomer";
import {RootLayout} from "./components/RootLayout";

function App() {

    const routes = createBrowserRouter([
        {
            path: '',
            element: <RootLayout/>,
            children: [
                {path: '', element: <Dashboard/>},
                {path: '/add', element: <AddCustomer/>},
                {path: '/delete', element: <DeleteCustomer/>},
                {path: '/update', element: <UpdateCustomer/>}
            ]
        },
    ])

    return (
        <>
            <RouterProvider router={routes}/>
        </>
    );
}

export default App
