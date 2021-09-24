import React, { useRef } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Form, {
    GroupItem,
    SimpleItem,
    ButtonItem,
    RequiredRule,
} from "devextreme-react/form";
import FileUploader from "devextreme-react/file-uploader";
import notify from "devextreme/ui/notify";

import HtmlEditor, {
    Toolbar,
    MediaResizing,
    Item,
} from "devextreme-react/html-editor";

const sizeValues = ["8pt", "10pt", "12pt", "14pt", "18pt", "24pt", "36pt"];
const fontValues = [
    "Arial",
    "Courier New",
    "Georgia",
    "Impact",
    "Lucida Console",
    "Tahoma",
    "Times New Roman",
    "Verdana",
];
const headerValues = [false, 1, 2, 3, 4, 5];

export default function Reactblog() {
    const uploaderRef = useRef();
    const formRef = useRef();
    const validatorRef = useRef();

    const buttonOptions = {
        text: "Publish Post",
        type: "success",
        useSubmitBehavior: false,
        onClick: async () => {
            const form = validatorRef.current.instance;
            const valid = form.validate();
            const uploader = uploaderRef.current.instance;
            if (valid.isValid) {
                const formDatas = form.option("formData");
                formDatas.image = uploader.option("value")[0];
                // formDatas.image = uploaderRef.current.value;
                // console.log(uploaderRef.current.value)
                console.log(formDatas);

                const formData = new FormData();

                for (const name in formDatas) {
                    formData.append(name, formDatas[name]);
                }

                const res = await axios.post("/post", formData, {});

                if (res.request.status == 201) {
                    notify("Post published. Redirecting", "success");
                    form.resetValues();

                    window.location.href = "/blog";
                }
            }
        },
    };
    const htmlEditorOptions = {
        height: "300px",
        mediaResizingEnabled: true,
        toolbar: {
            multiline: false,
            items: [
                { name: "undo" },
                { name: "redo" },
                { name: "separator" },
                { name: "size", acceptedValues: sizeValues },
                { name: "bold" },
                { name: "italic" },
                { name: "strike" },
                { name: "underline" },
                { name: "separator" },
                { name: "font", acceptedValues: fontValues },
                { name: "separator" },
                { name: "alignLeft" },
                { name: "alignCenter" },
                { name: "alignRight" },
                { name: "alignJustify" },
                { name: "separator" },
                { name: "orderedList" },
                { name: "bulletList" },
                { name: "separator" },
                { name: "header", acceptedValues: headerValues },
                { name: "separator" },
                { name: "color" },
                { name: "background" },
                { name: "separator" },
                { name: "link" },
                { name: "image" },
                { name: "separator" },
                { name: "clear" },
                { name: "codeBlock" },
                { name: "blockquote" },
            ],
        },
    };

    const dateEditorOptions = {
        value: new Date().toLocaleDateString(),
    };

    return (
        <div style={{ paddingTop: "4em" }}>
            <form
                method="post"
                ref={formRef}
                action="/post"
                style={styles.header}
                encType="multipart/form-data"
            >
                <Form ref={validatorRef} labelLocation="left">
                    <SimpleItem name="image">
                        {/* <input type="file" ref={uploaderRef} accept="image/jpeg,image/gif,image/png" name="fileToUpload" id="fileToUpload"></input> */}
                        <FileUploader
                            ref={uploaderRef}
                            name="image"
                            selectButtonText="Select photo"
                            labelText=""
                            accept="image/*"
                            uploadMode="useForm"
                        />
                    </SimpleItem>
                    <GroupItem>
                        <SimpleItem dataField="title" editorType="dxTextBox">
                            <RequiredRule />
                        </SimpleItem>

                        <SimpleItem
                            dataField="date"
                            editorType="dxDateBox"
                            editorOptions={dateEditorOptions}
                        />
                        <SimpleItem
                            dataField="content"
                            editorOptions={htmlEditorOptions}
                            editorType="dxHtmlEditor"
                        >
                            <RequiredRule />
                        </SimpleItem>
                        <ButtonItem buttonOptions={buttonOptions} />
                    </GroupItem>
                </Form>
            </form>
        </div>
    );
}

const styles = {
    header: {
        padding: "0.5em",
    },
    submit: {
        justifySelf: "flex-end",
    },
};

$(() => {
    if (document.getElementById("writeHere")) {
        ReactDOM.render(<Reactblog />, document.getElementById("writeHere"));
    }
});
