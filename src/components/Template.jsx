import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Paper, Typography } from "@material-ui/core";

const Template = ({ template, index }) => {
    return (
        <Draggable draggableId={template.id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="mb-4"
                >
                    <Paper
                        elevation={3}
                        className={`p-4 ${
                            snapshot.isDragging ? "bg-blue-200" : "bg-white"
                        }`}
                    >
                        <Typography variant="h6">{template.name}</Typography>
                        <Typography variant="body2">
                            {template.description}
                        </Typography>
                    </Paper>
                </div>
            )}
        </Draggable>
    );
};

export default Template;
