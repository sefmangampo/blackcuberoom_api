import React from "react";
import ReactDOM from "react-dom";

import TabPanel from "devextreme-react/tab-panel";
import Toolbar, { Item } from "devextreme-react/toolbar";
import Button from "devextreme-react/button";

import Experience from "../components/Experience";
import Skills from "../components/Skills";
import PersonalInfo from "../components/PersonalInfo";

const renderLabel = () => <div className="toolbar-label">About me</div>;
const renderExperienceAccordion = () => <Experience />;
const renderSkillsTreeList = () => <Skills />;
const renderPersonalInfo = () => <PersonalInfo />;

const backButtonOptions = {
    icon: "chevronprev",
    text: "Home",
    type: "default",
    onClick: () => {
        window.location.href = "/";
    },
};

const renderforwardButton = () => {
    return (
        <>
            <span className="dx-button-text">blog</span>
            <i className="dx-icon dx-icon-chevronnext blog-icon"></i>
        </>
    );
};

const redirectToBlog = () => (window.location.href = "/blog");

const App = () => {
    return (
        <>
            <Toolbar>
                <Item
                    location="before"
                    widget="dxButton"
                    options={backButtonOptions}
                />
                <Item location="after">
                    <Button
                        onClick={redirectToBlog}
                        component={renderforwardButton}
                        stylingMode="text"
                        type="default"
                    />
                </Item>
                <Item location="center" render={renderLabel} />
            </Toolbar>
            <TabPanel swipeEnabled={false}>
                <Item
                    title="Experience"
                    component={renderExperienceAccordion}
                />
                <Item title="Skills" component={renderSkillsTreeList} />
                <Item title="Personal" component={renderPersonalInfo} />
            </TabPanel>
        </>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById("aboutBody"));
