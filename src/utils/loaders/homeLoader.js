import { redirect } from "react-router-dom";
import { getToken } from "../authData";

export default function homeLoader() {
    const token = getToken();
    if (!token) {
        return redirect("/login");
    } else {
        return redirect("/committees");
    }
}
