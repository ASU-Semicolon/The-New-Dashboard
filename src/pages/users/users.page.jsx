import Button from "../../components/button/button.component";
import CardGrid from "../../components/cardGrid/cardGrid.component";
import SearchBar from "../../components/search-bar/search.component";
import Dropdown from "../../components/dropdown/dropdown.component";
import Modal from "../../components/modal/modal.component";
import ModalForm from "../../components/form/form.component";
import { useState, useEffect } from "react";
import useHandleData from "../../hooks/handleData";
import { IoIosAdd } from "react-icons/io";
import { loadUsers, deleteUser, editUser, addUser } from "../../store/users";
import "./users.style.css";
import { loadCommittees } from "../../store/committees";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useActionData, useNavigation } from "react-router-dom";
import usersToCards from "../../utils/dataToCards/usersToCards";
import { addUserFormData } from "../../utils/formsData";
import createAvaialbleYears from "../../utils/createAvaiableYears";
import useFetchData from "../../hooks/fetchData";
import Loader from "../../components/loader/loader.component";
function Users() {
    const { users, committees } = useLoaderData();
    const userData = useActionData();
    const committeesData = useSelector((state) => state.committees);
    const usersData = useSelector((state) => state.users);
    const availableYears = createAvaialbleYears(2023);
    const defaultYear = availableYears[availableYears.length - 1];
    const [showModal, setShowModal] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [selectedYear, setSelectedYear] = useState(defaultYear);
    const isfetching = useFetchData(users, loadUsers);
    const isFetchingCommittees = useFetchData(committees, loadCommittees);
    const isLoading = isfetching && usersData.length === 0;
    const isLoadingCommittees =
        isFetchingCommittees && committeesData.length === 0;
    const filteredUsers = usersData.filter((user) => {
        if (user.Season === selectedYear) {
            return (
                user.Username.toLowerCase().includes(
                    searchInput.toLowerCase(),
                ) || user.Phone.includes(searchInput)
            );
        } else {
            return false;
        }
    });
    useHandleData(userData, {
        addData: addUser,
        editData: editUser,
        deleteData: deleteUser,
    });

    return (
        <>
            <Modal setShowModal={setShowModal} showModal={showModal}>
                <ModalForm
                    buttonText="Add User"
                    showModal={showModal}
                    cancelButtonHandler={() => {
                        setShowModal(false);
                    }}
                    title="Add User"
                    fieldsArr={addUserFormData(committeesData)}
                />
            </Modal>
            <main className="section__users">
                <div className="title__cont">
                    <h1 className="primary__title">Users</h1>
                    <div className="add_user__cont">
                        <Button
                            onClick={() => {
                                setShowModal(true);
                            }}
                            disabled={isLoadingCommittees}
                            select="primary"
                            rounded={false}
                            small={true}
                            outline={false}
                            large={false}
                        >
                            <span>
                                <IoIosAdd className="add-icon" />
                            </span>
                            <span className="add_button__text">Add User</span>
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
                    <Loader
                        style={{ marginTop: "64px" }}
                        isLoading={isLoading}
                    />
                ) : (
                    <CardGrid
                        disableButtons={isLoadingCommittees}
                        cardSize="big"
                        cardFormTitle="Edit User"
                        cardFormButtonText="Edit User"
                        gridSize="small"
                        fallbackText="No Users Found."
                        cards={usersToCards(filteredUsers, committeesData)}
                    />
                )}
            </main>
        </>
    );
}

export default Users;
