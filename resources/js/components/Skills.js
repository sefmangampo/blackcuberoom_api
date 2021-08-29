import React, { useRef } from "react";

import TreeView from "devextreme-react/tree-view";
import Button from "devextreme-react/button";

const skillsList = [
    {
        id: 1,
        name: "Front End",
    },
    {
        id: 2,
        name: "Back End",
    },
    {
        id: 3,
        name: "Other tools/concepts",
    },
    {
        id: 4,
        name: "Javascript",
        parentId: 1,
    },
    {
        id: 5,
        name: "Frameworks",
        parentId: 4,
    },
    {
        id: 6,
        name: "Laravel PHP",
        parentId: 2,
        level: 3,
    },
    {
        id: 7,
        name: "Git / Version Control",
        parentId: 3,
        level: 3,
    },
    {
        id: 8,
        name: "Ruby on Rails",
        parentId: 2,
        level: 3,
    },
    {
        id: 9,
        name: "Javascript",
        parentId: 2,
    },
    {
        id: 10,
        name: "Node Express",
        parentId: 9,
        level: 2,
    },
    {
        id: 11,
        name: "Databases",
    },
    {
        id: 12,
        name: "MsSQL",
        parentId: 15,
        level: 4,
    },
    {
        id: 13,
        name: "MySQL",
        parentId: 15,
        level: 3,
    },
    {
        id: 14,
        name: "PlSQL",
        parentId: 15,
        level: 2,
    },
    {
        id: 15,
        name: "Relational",
        parentId: 11,
    },
    {
        id: 16,
        name: "Graph",
        parentId: 11,
    },
    {
        id: 17,
        name: "Neo4j",
        parentId: 16,
        level: 2,
    },
    {
        id: 18,
        name: "CSS",
        parentId: 1,
    },
    {
        id: 19,
        name: "Frameworks",
        parentId: 18,
    },
    {
        id: 20,
        name: "Preprocessors",
        parentId: 18,
    },
    {
        id: 21,
        name: "Bootstrap",
        parentId: 19,
        level: 2,
    },
    {
        id: 22,
        name: "Tailwind",
        parentId: 19,
        level: 2,
    },
    {
        id: 23,
        name: "Sass/Scss",
        parentId: 20,
        level: 2,
    },
    {
        id: 24,
        name: "React",
        parentId: 5,
        level: 4,
        expanded: true,
    },
    {
        id: 25,
        name: "Libraries/Tools",
        parentId: 4,
    },
    {
        id: 26,
        name: "DevExtreme",
        parentId: 25,
        level: 4,
    },
    {
        id: 27,
        name: "D3",
        parentId: 25,
        level: 2,
    },
    {
        id: 28,
        name: "Other Languages",
    },
    {
        id: 29,
        name: "C#",
        parentId: 28,
        level: 3,
    },
    {
        id: 30,
        name: "Java",
        parentId: 28,
        level: 3,
    },
    {
        id: 31,
        name: "Python",
        parentId: 28,
        level: 2,
    },
    {
        id: 32,
        name: "REST API",
        parentId: 3,
        level: 4,
    },
    {
        id: 33,
        name: "JWT",
        parentId: 3,
        level: 2,
    },
    {
        id: 34,
        name: "Session Security",
        parentId: 3,
        level: 3,
    },
];

const renderTreeViewItem = ({ data }) => {
    const cname = data.level
        ? "treeView-item treeView-item-underline"
        : "treeView-item";

    return (
        <div className={cname}>
            <span>{data.name}</span>
            {data.level && <span>{data.level} of 5</span>}
        </div>
    );
};

export default function Skills() {
    const treeViewRef = useRef();

    const expandAllNodes = () => {
        treeViewRef.current.instance.expandAll();
    };

    const collapseAllNodes = () => {
        treeViewRef.current.instance.collapseAll();
    };

    return (
        <div>
            <div className="button-controls">
                <Button
                    text="Expand all"
                    icon="expand"
                    onClick={expandAllNodes}
                />
                <Button
                    text="Collapse all"
                    icon="collapse"
                    onClick={collapseAllNodes}
                />
            </div>
            <TreeView
                ref={treeViewRef}
                items={skillsList}
                itemComponent={renderTreeViewItem}
                dataStructure="plain"
                displayExpr="name"
                parentIdExpr="parentId"
                keyExpr="id"
            />
        </div>
    );
}
