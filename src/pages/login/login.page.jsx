import NavBar from "../../components/navBar/navBar.component";
import InputWithLabel from "../../components/Input-with-label/Input-with-label.component";
import Button from "../../components/button/button.component";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import "./login.style.css";
import { useEffect, useState } from "react";
function Login() {
    const navigation = useNavigation();
    const actionData = useActionData();
    const [errors, setErrors] = useState();
    useEffect(() => {
        if (actionData) {
            if (typeof actionData.message === "string") {
                setErrors({ message: actionData.message });
            } else {
                const errorsData = {};
                actionData.message.forEach((str) => {
                    const firstWord = str.split(" ")[0];

                    errorsData[firstWord] = str;
                });
                setErrors(errorsData);
            }
        } else {
            setErrors(undefined);
        }
    }, [actionData]);

    const isSubmitting = navigation.state === "submitting";
    return (
        <>
            <NavBar isAuthenticated={false} />
            <main className="main__login">
                <section className="section__login">
                    <p
                        className={`${errors && errors.message ? "visible" : ""} login_error__message`}
                    >
                        {errors && errors.message}
                    </p>
                    <h1 className="primary__title">Log In To Dashboard</h1>
                    <Form className="login__form" method="post">
                        <InputWithLabel
                            errorMessage={errors && errors.phone}
                            label="phone"
                            placeholder="Enter Phone Number"
                            inputType="text"
                        />
                        <InputWithLabel
                            label="password"
                            errorMessage={errors && errors.password}
                            placeholder="Enter Password"
                            inputType="password"
                        />
                        <Button
                            type="submit"
                            rounded={false}
                            disabled={isSubmitting}
                            outline={false}
                            small={false}
                            large={true}
                        >
                            {isSubmitting
                                ? "Submitting..."
                                : "Continue To Dashboard"}
                        </Button>
                    </Form>
                </section>
            </main>
        </>
    );
}

export default Login;
