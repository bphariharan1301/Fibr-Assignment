import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Button, TextField } from "@material-ui/core";

const ButtonBlock = ({ element, index }) => {
    const [text, setText] = useState(element.content || "Button");

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
                        label="Button Text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="mb-2"
                    />
                    <Button variant="contained" color="primary">
                        {text}
                    </Button>
                </div>
            )}
        </Draggable>
    );
};

export default ButtonBlock;
