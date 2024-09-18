import React from "react";

const Button = () => {
    const handleRaveHornClick = () => {
        const audio = new Audio('src\assets\just-an-air-horn.mp3');
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    };

    return (
        <div id="horn">
            <button 
                className="rave horn" 
                onClick={handleRaveHornClick} 
                title="Rave Horn">
                Play Rave Horn
            </button>
        </div>
    );
}

export default Button;


