import { useState } from "react";
import Dropdown from "./components/dropdown/dropdown.component";
import Card from "./components/card/card.component";
import InputWithLabel from "./components/Input-with-label/Input-with-label.component";
import Loader from "./components/loader/loader.component";
import SearchBar from "./components/search-bar/search.component";
//code for testing usersList
// import UsersList from "./components/usersList/usersList.component";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: (
//             <UsersList
//                 users={[
//                     {
//                         id: 2000447,
//                         name: "zoz",
//                         track: "wEB",
//                         status: "rejecTed",
//                     },
//                     {
//                         id: 2000883,
//                         name: "ahmeD",
//                         track: "EmbeddeD",
//                         status: "ACcepteD",
//                     },
//                     {
//                         id: 1900112,
//                         name: "waleeD",
//                         track: "wEB",
//                         status: "rejecTed",
//                     },
//                     {
//                         id: 2000437,
//                         name: "galAl",
//                         track: "EMbedded",
//                         status: "ACCEPTED",
//                     },
//                     {
//                         id: 2000487,
//                         name: "zoz",
//                         track: "wEB",
//                         status: "rejecTed",
//                     },
//                     {
//                         id: 2000777,
//                         name: "zoz waleed",
//                         track: "wEB",
//                         status: "rejecTed",
//                     },
//                     {
//                         id: 1700447,
//                         name: "zoz",
//                         track: "wEB",
//                         status: "ACCEPTED",
//                     },
//                 ]}
//                 firstFilterOptions={["EmbeDDed", "WEb"]}
//                 secoundFilterOptions={["ACcepted", "reJected"]}
//             />
//         ),
//     },
// ]);
//first block of test end
function App() {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4rem",
                    backgroundColor: "#000",
                    width: "100vw",
                    minHeight: "100vh",
                    padding: "2rem",
                }}
            >
                <Dropdown
                    options={[{ value: "1" }, { value: "2" }, { value: "3" }]}
                />
                <Card title="test" data={{ key1: "value1", key2: "value2" }} />
                <InputWithLabel label="Name" placeholder="Enter your name" />
                <SearchBar />
                <Loader isLoading={true} />
            </div>
            {/* secoud block of test
            <RouterProvider router={router} /> */}
        </>
    );
}

export default App;
