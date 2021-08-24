import React from "react";
import ReactDOM from "react-dom";

export default function App() {
    return (
        <div>
            <h1>Hello worlds</h1>
        </div>
    );
}

if (document.getElementById("main")) {
    ReactDOM.render(<App />, document.getElementById("main"));
}
