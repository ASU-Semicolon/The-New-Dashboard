import "./members.style.css";
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
import { loadMembers } from "../../store/members";
import Loader from "../../components/loader/loader.component";
import useDocumentTitle from "../../hooks/documentTitle";
function MembersPage() {
    const [searchParams] = useSearchParams();
    const membersData = useSelector((state) => state.members);
    const event = searchParams.get("event");
    const eventsData = useSelector((state) => state.constants.events);
    const statusData = useSelector((state) => state.constants.status);
    const tracksData = useSelector((state) => state.constants.tracks);
    const type = searchParams.get("type");
    const { "*": memberId } = useParams();
    const {
        candidates: members,
        events,
        candidateStatus: status,
        tracks,
    } = useLoaderData();
    const [filteredMembers, setFilteredMembers] = useState([]);
    const unFilteredMembers = useMemo(
        () => candidatesToUsers(membersData),
        [membersData],
    );
    const filteredMembersData = useMemo(
        () => filterArray(membersData, filteredMembers),
        [membersData, filteredMembers],
    );
    useDocumentTitle("Members - Semicolon");
    useFetchData(events, loadEvents);
    useFetchData(status, loadStatus);
    useFetchData(tracks, loadTracks);
    const isFetching = useFetchData(members, loadMembers);
    const selectedMember = useSelectCandidate(
        filteredMembersData,
        memberId,
        type,
        event,
        "members",
    );
    const isLoading = membersData.length === 0 && isFetching;
    return (
        <>
            {" "}
            <main className="section__members">
                <div className="title__cont">
                    <h1 className="primary__title">Members</h1>
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
                            users={unFilteredMembers}
                            setFilteredUsers={setFilteredMembers}
                            filteredUsers={filteredMembers}
                            thirdFilterOptions={eventsData.map((event) =>
                                event.replace(" ", " 20"),
                            )}
                            thirdFilterDefaultValue={
                                event === "null" ? undefined : event
                            }
                            backendFiltering={[false, false, true]}
                            fallbackText="No Members Found."
                        />
                        <CandidateDetails
                            candidate={candidateToCard(selectedMember)}
                        />
                    </div>
                )}
            </main>
        </>
    );
}

export default MembersPage;
