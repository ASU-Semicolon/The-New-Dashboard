import Root from "./pages/Root.page";
import usersAction from "./utils/actions/usersAction";
import LoginPage from "./pages/login/login.page";
import UsersPage from "./pages/users/users.page";
import StudentsPage from "./pages/students/students.page";
import CommitteesPage from "./pages/committees/committees.page";
import WorkshopsPage from "./pages/workshops/workshops.page";
import  loginAction  from "./utils/actions/loginAction";
import workshopsAction from "./utils/actions/workshopsAction";
import committeesAction from "./utils/actions/committeesAction";
import candidateAction from "./utils/actions/candidateAction";
import {  RouterProvider , createHashRouter} from "react-router-dom";
import usersLoader from "./utils/loaders/usersLoader";
import authLoader from "./utils/loaders/authLoader";
import homeLoader from "./utils/loaders/homeLoader";
import candidatesLoader from "./utils/loaders/candidatesLoader";
import workshopsLoader from "./utils/loaders/workshopsLoader";
import committeesLoader from "./utils/loaders/committeesLoader";
import MembersPage from "./pages/members/members.page";
const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        loader: authLoader,
        id: "root",
        children: [
            {
                path: "users",
                id: "users",
                loader: usersLoader,
                element: <UsersPage />,
                action: usersAction,
            },
            {
                index: true,
                loader: homeLoader,
            },
            {
                path: "committees",
                element: <CommitteesPage />,
                loader: committeesLoader,
                action: committeesAction,
            },
            {
                path: "members/*",
                element: <MembersPage />,
                loader: candidatesLoader,
                action: candidateAction,
            },
            {
                path: "students/*",
                element: <StudentsPage />,
                loader: candidatesLoader,
                action: candidateAction,
            },
            ,
            {
                path: "workshops",
                element: <WorkshopsPage />,
                loader: workshopsLoader,
                action: workshopsAction,
            },
        ],
    },
    {
        path: "/login",
        element: <LoginPage />,
        action: loginAction,
    },
]);
function App() {
    return <RouterProvider router={router} />;
}


export default App;
