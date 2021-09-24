import React, { useRef } from "react";
import ReactDOM from "react-dom";
import Form, {
    SimpleItem,
    GroupItem,
    RequiredRule,
    EmailRule,
    ButtonItem,
} from "devextreme-react/form";
import axios from "axios";

const apiClient = axios.create({
    withCredentials: true,
});

export default function Login() {
    const formRef = useRef();

    const passwordOptions = {
        mode: "password",
    };

    const buttonOptions = {
        text: "Login",
        type: "success",
        useSubmitBehavior: false,
        onClick: async () => {
            console.log("hello");
            const formData = formRef.current.instance.option("formData");

            apiClient.get("/sanctum/csrf-cookie").then(() => {
                apiClient.post("/api/login", formData).then((res) => {
                    console.log(res);
                });
            });
        },
    };

    return (
        <div style={styles.container}>
            <form>
                <Form ref={formRef}>
                    <GroupItem>
                        <SimpleItem dataField="email" editorType="dxTextBox">
                            <RequiredRule />
                            <EmailRule />
                        </SimpleItem>
                        <SimpleItem
                            dataField="password"
                            editorType="dxTextBox"
                            editorOptions={passwordOptions}
                        >
                            <RequiredRule message="Password is required" />
                        </SimpleItem>
                    </GroupItem>
                    <ButtonItem
                        horizontalAlignment="left"
                        buttonOptions={buttonOptions}
                    />
                </Form>
            </form>
        </div>
    );
}

const styles = {
    container: {
        margin: "80px auto",
        width: "300px",
    },
};

$(() => {
    if (document.getElementById("login")) {
        ReactDOM.render(<Login />, document.getElementById("login"));
    }
});
