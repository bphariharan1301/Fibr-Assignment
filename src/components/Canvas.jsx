import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Paper, Typography } from "@material-ui/core";

const templateContent = {
    swe: "Software Engineer template content...",
    writer: "Content Writer template content...",
    "data-scientist": "Data Scientist template content...",
    "ui-ux": "UI/UX Engineer template content...",
};

const Canvas = ({ selectedTemplate }) => {
    return (
        <Droppable droppableId="canvas">
            {(provided, snapshot) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`w-3/4 min-h-screen p-4 ${
                        snapshot.isDraggingOver ? "bg-blue-100" : "bg-gray-100"
                    }`}
                >
                    {selectedTemplate ? (
                        <Paper elevation={3} className="p-4">
                            <Typography variant="h5" className="mb-4">
                                {selectedTemplate.charAt(0).toUpperCase() +
                                    selectedTemplate.slice(1)}{" "}
                                Template
                            </Typography>
                            <Typography variant="body1">
                                {templateContent[selectedTemplate]}
                            </Typography>
                        </Paper>
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <Typography variant="h5" color="textSecondary">
                                Drag a template here to start
                            </Typography>
                        </div>
                    )}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default Canvas;
