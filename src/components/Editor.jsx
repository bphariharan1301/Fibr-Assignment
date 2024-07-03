import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Canvas from "./Canvas";
import Sidebar from "./Sidebar";

const Editor = () => {
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const onDragEnd = (result) => {
        const { source, destination, draggableId } = result;

        // If dropped outside the droppable area
        if (!destination) {
            return;
        }

        // If dropped from sidebar to canvas
        if (
            source.droppableId === "sidebar" &&
            destination.droppableId === "canvas"
        ) {
            setSelectedTemplate(draggableId);
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex">
                <Sidebar />
                <Canvas selectedTemplate={selectedTemplate} />
            </div>
        </DragDropContext>
    );
};

export default Editor;
