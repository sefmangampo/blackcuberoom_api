import React from "react";
import ReactDOM from "react-dom";

export default function Playground() {
    return (
        <div>
            <h1>Helo from react playgounf</h1>
        </div>
    );
}

if (document.getElementById("playgroundq")) {
    ReactDOM.render(<Playground />, document.getElementById("playgroundq"));
}
