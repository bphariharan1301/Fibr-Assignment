import React from "react";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import ButtonBlock from "./ButtonBlock";
import VideoBlock from "./VideoBlock";

const Preview = ({ elements }) => {
    const renderElement = (element) => {
        switch (element.type) {
            case "text":
                return <TextBlock key={element.id} element={element} />;
            case "image":
                return <ImageBlock key={element.id} element={element} />;
            case "button":
                return <ButtonBlock key={element.id} element={element} />;
            case "video":
                return <VideoBlock key={element.id} element={element} />;
            default:
                return null;
        }
    };

    return (
        <div className="w-full min-h-screen p-4 bg-white">
            {elements.map((element) => renderElement(element))}
        </div>
    );
};

export default Preview;
