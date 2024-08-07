import { redirect, defer } from "react-router-dom";
import { getToken } from "../authData";
import loadCandidateStatus from "./candidateStatusLoader";

async function loadCandidates(type, event) {
    const token = getToken();

    let url = `${import.meta.env.VITE_URL}/api/candidates?`;
    if (event) {
        url += `event=${event}`;
    }
    if (type) {
        url += `${event ? "&" : ""}type=${type}`;
    }
    const response = await fetch(url.replace(/ /g, "%"), {
        headers: {
            Authorization: "Bearer " + token,
        },
    });

    const { data } = await response.json();
    return data;
}
async function loadEvents() {
    const token = getToken();

    const response = await fetch(
        `${import.meta.env.VITE_URL}/api/constants?type=events`,
        {
            headers: {
                Authorization: "Bearer " + token,
            },
        },
    );
    const { data } = await response.json();
    return data;
}
async function loadTracks() {
    const token = getToken();

    const response = await fetch(
        `${import.meta.env.VITE_URL}/api/constants?type=workshop-tracks`,
        {
            headers: {
                Authorization: "Bearer " + token,
            },
        },
    );
    const { data } = await response.json();
    return data;
}
export default async function loader({ request }) {
    const token = getToken();
    const url = new URL(request.url);
    const type = url.searchParams.get("type");
    const event = url.searchParams.get("event");
    if (!token) {
        return redirect("/login");
    }

    return defer({
        candidates: loadCandidates(type, event),
        events: loadEvents(),
        candidateStatus: loadCandidateStatus(),
        tracks: loadTracks(),
    });
}
