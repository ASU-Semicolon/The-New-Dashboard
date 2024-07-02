export default function candidatesToCards(candidate) {
    if (!candidate) {
        return undefined;
    }
    const candidateInfo = {};
    let candidateTitle;
    let candidateStatus;
    let candidateInterviewNotes;
    let candidateTrack;
    const normalCards = Object.keys(candidate)
        .map((field) => {
            let result;
            switch (field.toLowerCase()) {
                case "firstpreference":
                case "secondpreference": {
                    result = {
                        cardTitle:
                            field === "FirstPreference"
                                ? "first preference"
                                : "second preference",
                        cardDescription: candidate[field + "Reason"],
                    };
                    break;
                }
                case "evaluation": {
                    candidateInterviewNotes = candidate[field].Notes;
                    break;
                }
                case "name": {
                    candidateTitle = candidate[field];
                    break;
                }
                case "email":
                case "phone":
                case "academicyear":
                case "track":
                case "college": {
                    candidateInfo[
                        field.toLowerCase() === "academicyear"
                            ? "year"
                            : field.toLowerCase()
                    ] = candidate[field];
                    break;
                }
                case "previousexperience": {
                    result = {
                        cardTitle: "experience",
                        cardDescription: candidate[field],
                    };
                    break;
                }
                case "acceptancestatus": {
                    candidateStatus = candidate[field];
                    break;
                }
                default: {
                    result = null;
                    break;
                }
            }
            return result;
        })
        .filter((item) => item);
    if (
        candidate.AcceptanceStatus === "accepted-second-preference" ||
        candidate.AcceptanceStatus === "delegated"
    ) {
        candidateTrack = candidate.SecondPreference;
        candidateInfo.track = candidateTrack;
    } else {
        candidateTrack = candidate.FirstPreference;
        candidateInfo.track = candidateTrack;
    }

    return {
        cards: normalCards,
        title: candidateTitle,
        status: candidateStatus,
        interviewNotes: candidateInterviewNotes,
        info: candidateInfo,
        track: candidateTrack,
    };
}
