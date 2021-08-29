import React from "react";

import Accordion from "devextreme-react/accordion";

const experienceList = [
    {
        id: 0,
        jobtitle: "Senior Software Developer",
        location: "Quezon City",
        company: "Jeonsoft Corporation",
        years: "2017-2019",
        roles: ["asdasd", "asdasdad"],
    },
    {
        id: 1,
        jobtitle: "Support Developer",
        location: "Ortigas, Pasig",
        years: "2019-2020",
        company: "Devsoft PH",
        roles: ["basava"],
    },
    {
        id: 3,
        jobtitle: "Associate Research Developer",
        location: "Ayala Ave, Makati",
        years: "2020-2021",
        company: "Advance World Solutions, Inc",
        roles: ["aadada", "asdadsa", "adadada"],
    },
];

const renderBody = ({ data }) => {
    return (
        <div>
            <div className="item-container">
                <div className="item-field">
                    <div className="company-label">Company:</div>
                    <div className="company-field">{data.company}</div>
                </div>
                <div className="item-field">
                    <div className="location-label">Location:</div>
                    <div className="location-field">{data.location}</div>
                </div>
                <div className="item-field">
                    <div className="years-label">Years:</div>
                    <div className="years-field">{data.years}</div>
                </div>
                <div className="item-field-wide">
                    <div className="roles-label">Roles:</div>
                    <ul>
                        {data.roles.map((role, idx) => {
                            return (
                                <li key={idx} className="roles-field">
                                    {role}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const renderTitle = ({ data }) => {
    return (
        <div className="item-title">
            <span>{`${data.jobtitle} (${data.years})`}</span>
        </div>
    );
};

const Experience = () => {
    return (
        <>
            <Accordion
                dataSource={experienceList.reverse()}
                multiple={true}
                collapsible={true}
                animationDuration={300}
                itemTitleComponent={renderTitle}
                itemComponent={renderBody}
            />
        </>
    );
};

export default Experience;
