import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Main} from "./pages/main";
import {InitialTask, Task} from "./pages/task";
import {Registration} from "./pages/registration";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
    },
    {
        path: "/registration",
        element: <Registration/>,
    },
    {
        path: "/tasks",
        element: <InitialTask/>,
    },
    {
        path: "/tasks/:id",
        element: <Task/>,
    },
])

const App = () => (
    <RouterProvider router={router}/>
)

export default App;
