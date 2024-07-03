import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Template from "./Template";

const templates = [
    {
        id: "swe",
        name: "Software Engineer",
        description: "Template for software engineers",
    },
    {
        id: "writer",
        name: "Content Writer",
        description: "Template for content writers",
    },
    {
        id: "data-scientist",
        name: "Data Scientist",
        description: "Template for data scientists",
    },
    {
        id: "ui-ux",
        name: "UI/UX Engineer",
        description: "Template for UI/UX engineers",
    },
];

const Sidebar = () => {
    return (
        <Droppable droppableId="sidebar" isDropDisabled={true}>
            {(provided) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="w-1/4 bg-gray-200 p-4 min-h-screen"
                >
                    <h2 className="text-xl font-bold mb-4">Templates</h2>
                    {templates.map((template, index) => (
                        <Template
                            key={template.id}
                            template={template}
                            index={index}
                        />
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default Sidebar;
