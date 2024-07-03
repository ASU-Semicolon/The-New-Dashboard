import { Form, useActionData, useNavigation } from "react-router-dom";
import Button from "../button/button.component";
import InputWithLabel from "../Input-with-label/Input-with-label.component";
import "./form.style.css";
import { useEffect, useReducer, useRef, useState } from "react";
import Dropdown from "../dropdown/dropdown.component";

/**
 * Renders a modal form with various input fields.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {string} [props.method='post'] - The HTTP method to be used for the form submission.
 * @param {Array<Field>} [props.fieldsArr=[]] - An array of field objects to be rendered in the form.
 * @param {string} [props.title=''] - The title of the form.
 * @param {string} [props.buttonText='Add'] - The text to display on the submit button.
 * @param {boolean} [props.showModal=false] - Indicates whether the modal is shown.
 * @param {string} [props.id=''] - The unique identifier for the form.
 * @param {function} [props.cancelButtonHandler=() => {}] - Function to call when the cancel button is clicked.
 * @returns {JSX.Element} - The ModalForm component.
 *
 * @typedef {Object} Field
 * @property {string} label - The label for the field.
 * @property {string} [placeholder] - The placeholder text for the field.
 * @property {string} [defaultValue] - The default value for the field.
 * @property {string} [inputType] - The type of the field (e.g., text, dropdown).
 * @property {Array<string>} [options] - The options for dropdown inputType.
 * @property {boolean} [multiline] - Whether the input is multiline (textarea).
 */
const reducer = (state, action) => {
    if (action.type === "Update") {
        const editedValues = [...state];

        editedValues[action.payload.index] = action.payload.value;
        return editedValues;
    }
};

function ModalForm({
    method = "post",
    fieldsArr = [],
    title = "",
    buttonText = "Add",
    showModal = false,
    id = "",
    cancelButtonHandler = () => {},
}) {
    const [selectedValues, dispatch] = useReducer(reducer, []);
    const formRef = useRef();
    const navigation = useNavigation();
    const actionData = useActionData();
    const [errors, setErrors] = useState();

    useEffect(() => {
        if (actionData && (actionData.status === 400) & showModal) {
            const dataErrors = {};

            actionData.errors.forEach((str) => {
                const firstWord = str.split(" ")[0];

                if (!(firstWord in dataErrors)) {
                    dataErrors[firstWord] = str;
                }
            });

            setErrors(dataErrors);
        }
    }, [actionData]);

    const isSubmitting = navigation.state === "submitting";

    const selectedNames = [];
    const selectedDefs = [];
    const noErrors = actionData && actionData.status !== 400;
    useEffect(() => {
        if (!isSubmitting && noErrors && showModal) {
            if (formRef.current) {
                formRef.current.reset();
            }
            cancelButtonHandler();
        }
    }, [isSubmitting, actionData]);
    useEffect(() => {
        if (!showModal && !id && formRef.current) {
            formRef.current.reset();
        }
        if (!showModal) {
            setErrors(undefined);
        }
    }, [showModal]);

    return (
        <div className="form__cont">
            <h2 className="primary__title">{title}</h2>
            <Form ref={formRef} className="modal__form" method={method}>
                {fieldsArr.map((field) => {
                    if (field.inputType && field.inputType === "dropdown") {
                        const selectedIndex = selectedNames.length;
                        selectedNames.push(field.label);

                        selectedDefs.push(
                            typeof field.options[0] === "object"
                                ? ""
                                : field.defaultValue,
                        );
                        return (
                            <div key={field.label} className="input">
                                <label className="label"> {field.label}</label>
                                <small
                                    className={`${errors && errors[field.label] ? "visible" : ""}`}
                                >{`please select a ${field.label}`}</small>
                                <Dropdown
                                    onSelect={(selectedValue) => {
                                        dispatch({
                                            type: "Update",
                                            payload: {
                                                index: selectedIndex,
                                                value: selectedValue,
                                            },
                                        });
                                    }}
                                    options={field.options}
                                    deafultValue={
                                        field.defaultValue ||
                                        `select a ${field.label}`
                                    }
                                />
                            </div>
                        );
                    } else {
                        return (
                            <InputWithLabel
                                errorMessage={
                                    (errors && errors[field.label]) || ""
                                }
                                key={field.label}
                                htmlFor={
                                    id ? `${field.label} ${id}` : field.label
                                }
                                label={field.label}
                                multiline={
                                    field.multiline ? field.multiline : false
                                }
                                defaultValue={
                                    field.defaultValue
                                        ? field.defaultValue
                                        : null
                                }
                                placeholder={
                                    field.placeholder
                                        ? field.placeholder
                                        : `Enter ${field.label}`
                                }
                                inputType={
                                    field.inputType ? field.inputType : "text"
                                }
                            />
                        );
                    }
                })}
                {id && <input type="hidden" name="id" value={id} />}
                {selectedNames.length > 0 &&
                    selectedNames.map((name, index) => (
                        <input
                            type="hidden"
                            key={name}
                            name={name}
                            value={selectedValues[index] || ""}
                        />
                    ))}
                <div className="form__button_cont">
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        rounded={false}
                        outline={false}
                        small={true}
                        large={false}
                    >
                        {isSubmitting ? "Submitting..." : buttonText}
                    </Button>
                    <Button
                        rounded={false}
                        outline={true}
                        small={true}
                        large={false}
                        onClick={() => {
                            if (formRef.current && !id) {
                                formRef.current.reset();
                            }

                            cancelButtonHandler();
                        }}
                    >
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default ModalForm;
