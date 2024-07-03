import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TextField } from "@material-ui/core";

const TextBlock = ({ element, index }) => {
    const [text, setText] = useState(element.content);

    return (
        <Draggable draggableId={element.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="mb-4"
                >
                    <TextField
                        fullWidth
                        multiline
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            )}
        </Draggable>
    );
};

export default TextBlock;
