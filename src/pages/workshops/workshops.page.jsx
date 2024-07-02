import Button from "../../components/button/button.component";
import CardGrid from "../../components/cardGrid/cardGrid.component";
import SearchBar from "../../components/search-bar/search.component";
import Dropdown from "../../components/dropdown/dropdown.component";
import {
    useLoaderData,
    useRouteLoaderData,
    useActionData,
} from "react-router-dom";
import { addWorkshopFormData } from "../../utils/formsData";
import workshopsToCards from "../../utils/dataToCards/workshopsToCards";
import { IoIosAdd } from "react-icons/io";
import "./workshops.style.css";
import { useState } from "react";
import Modal from "../../components/modal/modal.component";
import ModalForm from "../../components/form/form.component";
import createAvaialbleYears from "../../utils/createAvaiableYears";
import { useSelector } from "react-redux";
import {
    deleteWorkshop,
    editWorkshop,
    addWorkshop,
    loadWorkshops,
} from "../../store/workshops";
import { loadCommittees } from "../../store/committees";
import { loadUsers } from "../../store/users";
import useHandleData from "../../hooks/handleData";
import useFetchData from "../../hooks/fetchData";
import { loadStates } from "../../store/constants";
function Workshops() {
    const { users, committees, workshops, states } = useLoaderData();
    const { isAdmin } = useRouteLoaderData("root");
    const workshopData = useActionData();
    const workshopsData = useSelector((state) => state.workshops);
    const statesData = useSelector((state) => state.constants.states);
    const committeesData = useSelector((state) => state.committees);
    const usersData = useSelector((state) => state.users);
    const availableYears = createAvaialbleYears(2023);
    const defaultYear = availableYears[availableYears.length - 1];
    const [showModal, setShowModal] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [selectedYear, setSelectedYear] = useState(defaultYear);
    const isFetching = useFetchData(workshops, loadWorkshops);
    const isFetchingCommittees = useFetchData(committees, loadCommittees);
    const isFetchingUsers = useFetchData(users, loadUsers);
    const isFetchingStates = useFetchData(states, loadStates);
    const isLoading = isFetching && workshopsData.length === 0;
    const isLoadingCommittees =
        isFetchingCommittees && committeesData.length === 0;
    const isLoadingUsers = isFetchingUsers && usersData.length === 0;
    const isLoadingStates = isFetchingStates && statesData.length === 0;
    useHandleData(workshopData, {
        addData: addWorkshop,
        editData: editWorkshop,
        deleteData: deleteWorkshop,
    });
    const filteredWorkshops = workshopsData.filter((workshop) => {
        if (workshop.Season === selectedYear) {
            return workshop.Title.toLowerCase().includes(
                searchInput.toLowerCase(),
            );
        } else {
            return false;
        }
    });

    return (
        <>
            {" "}
            <Modal setShowModal={setShowModal} showModal={showModal}>
                <ModalForm
                    buttonText="Add Workshop"
                    showModal={showModal}
                    cancelButtonHandler={() => {
                        setShowModal(false);
                    }}
                    title="Add Workshop"
                    fieldsArr={addWorkshopFormData(committeesData, usersData)}
                />
            </Modal>
            <main className="section__workshops">
                <div className="title__cont">
                    <h1 className="primary__title">Workshops</h1>
                    <div className="add_workshop__cont">
                        <Button
                            select="primary"
                            onClick={() => {
                                setShowModal(true);
                            }}
                            disabled={
                                isLoadingCommittees ||
                                isLoadingStates ||
                                isLoadingUsers ||
                                !isAdmin
                            }
                            rounded={false}
                            small={true}
                            outline={false}
                            large={false}
                        >
                            <span>
                                <IoIosAdd className="add-icon" />
                            </span>
                            <span className="add_button__text">
                                Add Workshop
                            </span>
                        </Button>
                    </div>
                </div>
                <div className="seperator"></div>
                <div className="search__cont">
                    <div>
                        <SearchBar setSearchInput={setSearchInput} />
                    </div>
                    <div>
                        <Dropdown
                            deafultValue={defaultYear}
                            onSelect={setSelectedYear}
                            options={availableYears}
                        />
                    </div>
                </div>

                {isLoading ? (
                    <p className="loading_text" style={{}}>
                        Loading Workshops...
                    </p>
                ) : (
                    <CardGrid
                        disableButtons={
                            isLoadingCommittees ||
                            isLoadingStates ||
                            isLoadingUsers ||
                            !isAdmin
                        }
                        cardSize="small"
                        cardFormTitle="Edit Workshop"
                        cardFormButtonText="Edit Workshop"
                        gridSize="big"
                        fallbackText="No Workshops Found."
                        cards={workshopsToCards(
                            usersData,
                            committeesData,
                            filteredWorkshops,
                        )}
                    />
                )}
            </main>
        </>
    );
}

export default Workshops;
