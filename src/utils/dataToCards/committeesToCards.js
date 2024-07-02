export default function committeesToCards(committees, sectors) {
    let vice_directorExists = false;

    return committees.map((committee) => {
        const cardFormFields = Object.keys(committee)
            .map((field) => {
                if (field.toLowerCase() === "heads") {
                    return {
                        label: field.toLowerCase(),
                        defaultValue:
                            committee[field].length > 0
                                ? committee[field].join(",")
                                : "",
                        placeholder: "enter heads each seperated by a comma",
                    };
                } else if (field.toLowerCase() === "id") {
                    return null;
                } else if (field.toLowerCase() === "sector") {
                    return {
                        label: field.toLowerCase(),
                        options: sectors,
                        defaultValue: committee[field],
                        inputType: "dropdown",
                    };
                } else if (field.toLowerCase() === "vice_director") {
                    vice_directorExists = true;
                    return {
                        label: "vice director",
                        placeholder: "enter vice director",
                        defaultValue: committee[field],
                    };
                } else {
                    return {
                        label: field.toLowerCase(),
                        placeholder: `Enter ${field}`,
                        defaultValue: committee[field],
                        multiline: field.toLowerCase() === "description",
                    };
                }
            })
            .filter((item) => item);
        if (!vice_directorExists) {
            cardFormFields.push({
                label: "vice director",
                placeholder: "enter vice director",
            });
        }

        return {
            id: committee.Id,
            title: committee.Title,
            data: {
                director: committee.Director,
            },
            cardFormFields,
        };
    });
}
