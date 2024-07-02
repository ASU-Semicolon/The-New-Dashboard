import "./card.style.css";
import Button from "../button/button.component";
import { IoMdTrash } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import Modal from "../modal/modal.component";
import ModalForm from "../form/form.component";
import { useNavigation, useSubmit } from "react-router-dom";

/**
 * Renders a card with the provided title, data, and optional form fields.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {string} props.title - The title of the card.
 * @param {Object<string, string>} props.data - The data to be displayed in the card. It will be represented as key: value.
 * @param {"small" | "big"} props.size - The size of the card.
 * @param {boolean} [props.disableButtons=false] - Flag to disable the edit and delete buttons.
 * @param {Array<CardFormField>} [props.cardFormFields=[]] - The fields to be included in the card form.
 * @param {string} [props.cardFormTitle=''] - The title for the card form.
 * @param {string} [props.cardFormButtonText=''] - The text for the card form button.
 * @param {string} props.id - The unique identifier for the card.
 * @returns {JSX.Element} - The Card component.
 *
 * @typedef {Object} CardFormField
 * @property {string} label - The label for the form field.
 * @property {string} [placeholder] - The placeholder text for the form field.
 * @property {string} [defaultValue] - The default value for the form field.
 * @property {string} [inputType] - The type of the form field (e.g., text, dropdown).
 * @property {Array<string>} [options] - The options for dropdown inputType.
 */
function Card({
    title = "",
    disableButtons = false,
    data = {},
    cardFormFields = "",
    cardFormTitle = "",
    cardFormButtonText = "",
    id = "",
    size = "big",
}) {
    const [showModal, setShowModal] = useState(false);
    const navigation = useNavigation();
    const isDeleting = navigation.state === "submitting";
    const submit = useSubmit();
    function deleteButtonHandler() {
        submit(
            { id },
            {
                method: "delete",
                encType: "application/x-www-form-urlencoded",
            },
        );
    }
    const isDataMultiple = Object.keys(data).length > 1;
    const dataList = (
        <div className="card-list">
            {Object.keys(data).map((key) => [
                <span key={key + " name"} className="card-description">
                    {`${key}:`}
                </span>,
                <span key={key + " value"} className="card-description">
                    {data[key]}
                </span>,
            ])}
        </div>
    );
    return (
        <>
            <Modal setShowModal={setShowModal} showModal={showModal}>
                {" "}
                <ModalForm
                    method="patch"
                    cancelButtonHandler={() => {
                        setShowModal(false);
                    }}
                    title={cardFormTitle}
                    id={id}
                    buttonText={cardFormButtonText}
                    fieldsArr={cardFormFields}
                />
            </Modal>
            <div className={`${size.toLowerCase()} card`}>
                <div className="card-text-cont">
                    <p className="card-title">{title}</p>
                    {isDataMultiple ? (
                        dataList
                    ) : (
                        <span className="card-description">
                            {Object.values(data)[0]}
                        </span>
                    )}
                </div>
                <div className="card-button-cont">
                    <div>
                        <Button
                            disabled={disableButtons}
                            onClick={() => {
                                setShowModal(true);
                            }}
                            tinyRadius={true}
                            rounded={false}
                            large={false}
                            outline={false}
                            small={true}
                        >
                            <span>
                                <FaRegEdit className="edit-icon" />
                            </span>
                            <span>Edit</span>
                        </Button>
                    </div>
                    <div>
                        <Button
                            disabled={disableButtons || isDeleting}
                            onClick={deleteButtonHandler}
                            tinyRadius={true}
                            select="warning"
                            rounded={false}
                            large={false}
                            outline={true}
                            small={true}
                        >
                            <span>
                                <IoMdTrash className="delete-icon" />
                            </span>
                            <span>Delete</span>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
