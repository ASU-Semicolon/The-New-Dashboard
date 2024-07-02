import Button from "../button/button.component";
import InfoCard from "../infoCard/infoCard.component";
import { Form, useNavigation, useParams } from "react-router-dom";
import "./interviewNotes.style.css";
function InterviewNotes({ info = {} }) {
    const { "*": studentId } = useParams();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";
    return (
        <InfoCard title="interview notes">
            <Form method="patch">
                <div className="interview_notes">
                    <span className="interview_notes__title interview_notes__title_main">
                        Criteria
                    </span>
                    <span className="interview_notes__title interview_notes__title_main">
                        Rating of 5
                    </span>
                    <span className="interview_notes__title interview_notes__title_main">
                        Note
                    </span>
                    <div className="interview_seperator"></div>

                    {Object.keys(info).map((criteria) => [
                        <span
                            key={criteria}
                            className="interview_notes__title interview_notes__criteria "
                        >
                            {criteria}
                        </span>,
                        <input
                            key={criteria + " rating"}
                            name={criteria + " rating"}
                            className="interview_input interview_input__rating"
                            type="number"
                            step={1}
                            min={0}
                            max={5}
                            placeholder="Rating"
                            defaultValue={info[criteria].rating}
                        />,
                        <textarea
                            key={criteria + " note"}
                            name={criteria + " note"}
                            className="interview_input interview_input__note"
                            type="text"
                            placeholder="Note"
                            defaultValue={info[criteria].note}
                        />,
                    ])}
                </div>
                <input type="hidden" name="id" value={studentId || ""} />
                <div className="interview_button__cont">
                    <Button
                        type="submit"
                        select="primary"
                        rounded={false}
                        small={true}
                        outline={false}
                        large={false}
                    >
                        {isSubmitting ? "Submitting..." : "Submit Notes"}
                    </Button>
                </div>
            </Form>
        </InfoCard>
    );
}

export default InterviewNotes;
