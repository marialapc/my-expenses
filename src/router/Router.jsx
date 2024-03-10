import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeView } from '../views/HomeView/HomeView'
import { AddExpenseView } from '../views/AddExpenseView/AddExpenseView'

const router = createBrowserRouter ([
    {
        path: "/",
        element: <HomeView />
    },
    {
        path: "/add",
        element: <AddExpenseView />
   }
])

const Router = () => {
    return (
        <RouterProvider router={router}/>
    )
}


export {Router}