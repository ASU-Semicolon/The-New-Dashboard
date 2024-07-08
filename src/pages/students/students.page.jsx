import "./students.style.css";
import { useLoaderData, useParams, useSearchParams } from "react-router-dom";
import UsersList from "../../components/usersList/usersList.component";
import CandidateDetails from "../../components/candidateDetails/candidateDetails.component";
import { useSelector } from "react-redux";
import { loadStudents } from "../../store/students";
import useFetchData from "../../hooks/fetchData";
import useSelectCandidate from "../../hooks/selectCandidate";
import { loadEvents, loadStatus, loadTracks } from "../../store/constants";
import candidateToCard from "../../utils/dataToCards/candidateToCard";
import candidatesToUsers from "../../utils/dataToCards/candidatesToUsers";
import { useMemo, useState } from "react";
import filterArray from "../../utils/filterArray";
import Loader from "../../components/loader/loader.component";
import useDocumentTitle from "../../hooks/documentTitle";
function StudentsPage() {
    const [searchParams] = useSearchParams();
    const studentsData = useSelector((state) => state.students);
    const event = searchParams.get("event");
    const eventsData = useSelector((state) => state.constants.events);
    const statusData = useSelector((state) => state.constants.status);
    const tracksData = useSelector((state) => state.constants.tracks);

    const type = searchParams.get("type");
    const { "*": studentId } = useParams();
    const {
        candidates: students,
        events,
        candidateStatus: status,
        tracks,
    } = useLoaderData();
    const [filteredStudents, setFilteredStudents] = useState([]);
    const unFilteredStudents = useMemo(
        () => candidatesToUsers(studentsData),
        [studentsData],
    );
    const filteredStudentsData = useMemo(
        () => filterArray(studentsData, filteredStudents),
        [studentsData, filteredStudents],
    );
    useFetchData(events, loadEvents);
    useFetchData(status, loadStatus);
    useFetchData(tracks, loadTracks);
    useDocumentTitle("Students - Semicolon");
    const isFetching = useFetchData(students, loadStudents);
    const selectedStudent = useSelectCandidate(
        filteredStudentsData,
        studentId,
        type,
        event,
        "students",
    );
    const isLoading = studentsData.length === 0 && isFetching;
    return (
        <>
            {" "}
            <main className="section__students">
                <div className="title__cont">
                    <h1 className="primary__title">Students</h1>
                </div>
                <div className="seperator"></div>
                {isLoading ? (
                    <Loader
                        style={{ marginTop: "4rem" }}
                        isLoading={isLoading}
                    />
                ) : (
                    <div className="candidate__grid">
                        <UsersList
                            firstFilterName="track"
                            firstFilterOptions={tracksData}
                            searchbarFilters={["name", "phone"]}
                            searchbarPlaceholder="Name or Phone"
                            secoundFilterOptions={statusData}
                            users={unFilteredStudents}
                            setFilteredUsers={setFilteredStudents}
                            filteredUsers={filteredStudents}
                            thirdFilterOptions={eventsData.map((event) =>
                                event.replace(" ", " 20"),
                            )}
                            thirdFilterDefaultValue={
                                event === "null" ? "event" : event
                            }
                            backendFiltering={[false, false, true]}
                            fallbackText="No Students Found."
                        />
                        <CandidateDetails
                            candidate={candidateToCard(selectedStudent)}
                        />
                    </div>
                )}
            </main>
        </>
    );
}

export default StudentsPage;
