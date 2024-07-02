import { redirect } from "react-router-dom";
import { getToken, isUserAdmin } from "../authData";
export default async function action({ request }) {
    const data = await request.formData();
    const id = data.get("id");
    if (!id) {
        redirect("/committees");
    }
    let url = "http://localhost:8000/api/candidates/" + id;
    const status = data.get("status");
    const formData = Object.fromEntries(data.entries());
    delete formData.id;
    const token = getToken();
    const isAdmin = isUserAdmin();
    if (!token) {
        return redirect("/login");
    }
    if (!isAdmin) {
        return redirect("/committees");
    }

    const requestFormData = {};

    if (status) {
        requestFormData.acceptance_status = status;
    }
    const isInterviewNotes = Object.keys(formData).find((note) =>
        note.includes("note"),
    );
    if (isInterviewNotes) {
        const notes = {};
        Object.keys(formData).forEach((note) => {
            const lastSpaceIndex = note.lastIndexOf(" ");
            const criteria = note.substring(0, lastSpaceIndex);
            const value = note.substring(lastSpaceIndex + 1);
            if (value === "rating") {
                formData[note] = +formData[note];
            }
            if (!notes[criteria]) {
                notes[criteria] = {};
            }
            notes[criteria][value] = formData[note];
        });
        requestFormData.evaluation = {
            notes,
        };
    }

    const options = {
        method: request.method,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify(requestFormData),
    };
    const response = await fetch(url, options);
    const returnedData = {
        method: request.method.toLowerCase(),
        status: response.status,
    };
    if (returnedData.status === 200) {
        const url = new URL(request.url);
        const searchParams = url.search;

        const newPathname = `${url.pathname}/${id}`;
        const newUrl = `${newPathname}${searchParams}`;

        return redirect(newUrl);
    }
    const responseData = await response.json();
    return responseData;
}
