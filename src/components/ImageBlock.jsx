import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Button, TextField } from "@material-ui/core";

const ImageBlock = ({ element, index }) => {
    const [src, setSrc] = useState(element.content || "");

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
                        label="Image URL"
                        value={src}
                        onChange={(e) => setSrc(e.target.value)}
                        className="mb-2"
                    />
                    {src && (
                        <img
                            src={src}
                            alt="User specified"
                            className="max-w-full h-auto"
                        />
                    )}
                </div>
            )}
        </Draggable>
    );
};

export default ImageBlock;
