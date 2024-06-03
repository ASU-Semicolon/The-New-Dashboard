import { useState } from "react";

import Root from './pages/Root.page'
import   usersAction  from "./utils/actions/usersAction";
import LoginPage from "./pages/login/login.page";
import UsersPage from "./pages/users/users.page";
import CommitteesPage from "./pages/committees/committees.page";
import WorkshopsPage from "./pages/workshops/workshops.page";
import { action as loginAction } from "./pages/login/login.page";
import usersLoader  from "./utils/loaders/usersLoader";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import authLoader from "./utils/loaders/authLoader";
import homeLoader from "./utils/loaders/homeLoader";
const router =createBrowserRouter([{
   path:'/',element:<Root/>,loader:authLoader,id:'root',children:[
    {
        path:'users',
    id:'users',
    loader:usersLoader,
        element:<UsersPage/>
        ,action:usersAction
    },{
        index:true,
        loader:homeLoader
    },
    {path:'committees',
        element:<CommitteesPage/>
    },
    ,{path:'workshops',
        element:<WorkshopsPage/>
    },
   ]

},{
    path:'/login',element:<LoginPage/>,action:loginAction
}])
function App() {
    return (
        <RouterProvider router={router}/>
      
    );
}

export default App;
