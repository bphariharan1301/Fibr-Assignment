import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TextField } from "@material-ui/core";

const VideoBlock = ({ element, index }) => {
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
                        label="Video URL"
                        value={src}
                        onChange={(e) => setSrc(e.target.value)}
                        className="mb-2"
                    />
                    {src && (
                        <video controls className="max-w-full">
                            <source src={src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            )}
        </Draggable>
    );
};

export default VideoBlock;
