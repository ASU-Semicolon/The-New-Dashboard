import { defer, redirect } from "react-router-dom";
import { getToken, isUserAdmin } from "../authData";
import { loadCommittees } from "./committeesLoader";
export async function loadUsers() {
    const token = getToken();

    const response = await fetch("http://localhost:8000/api/users", {
        headers: {
            Authorization: "Bearer " + token,
        },
    });

    const { data } = await response.json();

    return data;
}

export default async function loader() {
    const token = getToken();

    if (!token) {
        return redirect("/login");
    }

    const isAdmin = isUserAdmin();

    if (!isAdmin) {
        return redirect("/committees");
    }
    return defer({
        users: loadUsers(),
        committees: loadCommittees(),
    });
}
