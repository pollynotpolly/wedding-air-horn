import React, { useState } from "react"; // Import useState
import AirHorn from './AirHorn.mp3'; // Correct path for audio file
import Blobby from './blobby.mp3'; // Correct path for audio file

const Button = () => {
    const [clickCount, setClickCount] = useState(0);

    const handleRaveHornClick = () => {
        setClickCount(prevCount => prevCount + 1);

        // Decide which audio file to play
        const playBlobbySound = Math.random() < 0.1 || clickCount % 10 === 0;
        const audioFile = playBlobbySound ? Blobby : AirHorn; // Use imported variables
        
        const audio = new Audio(audioFile);
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
                BLOB
            </button>
        </div>
    );
}

export default Button;



