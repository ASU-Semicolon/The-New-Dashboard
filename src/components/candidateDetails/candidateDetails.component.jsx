import InfoCard from "../infoCard/infoCard.component";
import Dropdown from "../dropdown/dropdown.component";
import UserInfo from "../userInfo/userInfo.component";
import InterviewNotes from "../interviewNotes/interviewNotes.component";
import { IoMdTrash } from "react-icons/io";
import Button from "../button/button.component";
import "./candidateDetails.style.css";
import { useSelector } from "react-redux";
import { useNavigation, useParams, useSubmit } from "react-router-dom";
function CandidateDetails({ candidate }) {
    const submit = useSubmit();
    const navigation = useNavigation();
    const isDeleting = navigation.state === "submitting";
    const { "*": studentId } = useParams();
    function selectStatusHandler(status) {
        submit(
            { status, id: studentId },
            {
                method: "patch",
                encType: "application/x-www-form-urlencoded",
            },
        );
    }
    function deleteCandidateHandler() {
        submit(
            { id: studentId },
            {
                method: "delete",
                encType: "application/x-www-form-urlencoded",
            },
        );
    }
    const statusData = useSelector((state) => state.constants.status);
    if (candidate) {
        const { cards, title, status, interviewNotes, info } = candidate;
        return (
            <div>
                <h2 className="info__title">{title}</h2>
                <div className="candidate_details">
                    <InfoCard info={true} title="info">
                        <UserInfo userInfo={info} />
                    </InfoCard>
                    {cards.map((card) => {
                        return (
                            <InfoCard
                                key={card.cardTitle}
                                title={card.cardTitle}
                            >
                                <p className="description">
                                    {card.cardDescription}
                                </p>
                            </InfoCard>
                        );
                    })}
                    <InfoCard title="status">
                        <div>
                            <div className="candidate_dropdown__cont">
                                <Dropdown
                                    onSelect={selectStatusHandler}
                                    options={statusData}
                                    deafultValue={status || "select a status"}
                                />
                            </div>
                        </div>
                    </InfoCard>
                    <InterviewNotes info={interviewNotes} />
                </div>
                <div className="delete_button__cont">
                    <Button
                        onClick={deleteCandidateHandler}
                        tinyRadius={true}
                        select="warning"
                        rounded={false}
                        large={false}
                        outline={true}
                        small={true}
                    >
                        {isDeleting ? (
                            "Deleting.."
                        ) : (
                            <>
                                <span>
                                    <IoMdTrash className="delete-icon" />
                                </span>
                                <span>delete user</span>
                            </>
                        )}
                    </Button>
                </div>
            </div>
        );
    }
}
export default CandidateDetails;
