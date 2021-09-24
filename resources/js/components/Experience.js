import React, { useState, useEffect } from "react";
import axios from "axios";

import Accordion from "devextreme-react/accordion";

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
                    <div className="years-field">{data.dateofwork}</div>
                </div>
                <div className="item-field-wide">
                    <div className="roles-label">Roles:</div>
                    <ul>
                        {data.roles.map((role, idx) => {
                            return (
                                <li
                                    key={`${data.location}-${idx}`}
                                    className="roles-field"
                                >
                                    {role.role}
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
            <span>{`${data.jobtitle} (${data.dateofwork})`}</span>
        </div>
    );
};

const Experience = () => {
    const [exp, setExp] = useState();

    const getExperiences = async () => {
        const _exp = await axios.get("/experiences");
        const _roles = await axios.get("/roles");

        const d = [];

        _exp.data.map((e) => {
            d.push({
                ...e,
                roles: _roles.data.filter((x) => x.companyid == e.id),
            });
        });

        setExp(d);
    };

    useEffect(() => {
        getExperiences();
    }, []);

    return (
        <>
            <Accordion
                dataSource={exp}
                key="id"
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
