export const addUserFormData = (committees) => [
    { label: "name", placeholder: "Enter Name" },
    { label: "phone", placeholder: "Enter Phone" },
    { label: "email", placeholder: "Enter Email" },
    { label: "password", placeholder: "Enter Password", inputType: "password" },
    { label: "status", options: ["active", "inactive"], inputType: "dropdown" },
    { label: "role", placeholder: "Enter Role" },
    { label: "season", placeholder: "Enter season" },
    {
        label: "committee",
        options: committees
            ? committees.map((committee) => {
                  return { name: committee.Title, value: committee.Id };
              })
            : [],
        inputType: "dropdown",
    },
];
export const addCommitteeFormData = (sectors) => {
    return [
        { label: "title", placeholder: "enter Title" },
        {
            label: "description",
            placeholder: "enter Description",
            multiline: true,
        },
        { label: "brief", placeholder: "enter Brief" },
        { label: "sector", options: sectors, inputType: "dropdown" },
        { label: "image", placeholder: "enter image" },
        { label: "season", placeholder: "enter season" },
        { label: "director", placeholder: "enter director" },
        { label: "vice director", placeholder: "enter vice director" },
        {
            label: "heads",
            placeholder: "enter heads each seperated by a comma",
        },
    ];
};
export const addWorkshopFormData = (committees, users) => {
    return [
        { label: "title", placeholder: "Enter Title" },
        {
            label: "instructor",
            options: users
                ? users.map((user) => {
                      return { name: user.Username, value: user.Id };
                  })
                : [],
            inputType: "dropdown",
        },
        {
            label: "duration in sessions",
            placeholder: "enter duration in sessions",
        },
        { label: "sessions per week", placeholder: "enter sessions per week" },
        { label: "start date", placeholder: "enter start date MM/DD/YYYY" },
        {
            label: "description",
            placeholder: "Enter Description",
            multiline: true,
        },
        ,
        { label: "location", placeholder: "enter location" },
        {
            label: "committee",
            options: committees
                ? committees.map((committee) => {
                      return { name: committee.Title, value: committee.Id };
                  })
                : [],
            inputType: "dropdown",
        },
        {
            label: "state",
            options: ["not-started", "in-progress", "finished"],
            inputType: "dropdown",
        },
        {
            label: "prerequisites",
            placeholder: "enter prerequisites each seperated by a comma",
        },
        { label: "season", placeholder: "enter season" },
    ];
};
