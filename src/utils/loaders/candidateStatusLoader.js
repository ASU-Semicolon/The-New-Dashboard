import { getToken } from "../authData";

export default async function loadCandidateStatus() {
    const token = getToken();

    const response = await fetch(
        `${import.meta.env.VITE_URL}/api/constants?type=candidate-status`,
        {
            headers: {
                Authorization: "Bearer " + token,
            },
        },
    );

    const { data } = await response.json();

    return data;
}
