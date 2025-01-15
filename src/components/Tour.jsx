import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Tour = () => {
    const [selectedTour, setSelectedTour] = useState(null);
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        if (!window.AFRAME) {
            console.error("A-Frame not loaded. Ensure A-Frame is included in your dependencies.");
        }
    }, []);

    const handleImageChange = (e) => {
        setImageUrl(e.target.value);
    };

    const handleImageClick = () => {
        setSelectedTour(imageUrl);
    };

    const handleExit = () => {
        setSelectedTour(null);
        setImageUrl("");  // Optionally clear the input
    };

    return (
        <div className="tour-container">
            {/* Navigation Bar */}
            <div className="navbar">
                <nav>
                    <ul className="nav-list">
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li><Link to="/tour" className="nav-link">Tour</Link></li>
                        <li><Link to="/about" className="nav-link">About Us</Link></li>
                    </ul>
                </nav>
            </div>

            {/* Tour Page Content */}
            <h1>VR Tour</h1>
            {!selectedTour ? (
                <div className="input-container">
                    <p className="text-lg mb-4">
                        Enter the URL of a 360° image or use the default one for your tour. Then click "Enter VR" to view it in VR mode.
                    </p>
                    <input
                        type="text"
                        value={imageUrl}
                        onChange={handleImageChange}
                        placeholder="Enter image URL"
                        className="input-box"
                    />
                    <button
                        onClick={handleImageClick}
                        className="enter-vr-button"
                    >
                        Enter VR
                    </button>
                </div>
            ) : (
                <div className="vr-scene-container">
                    <a-scene
                        embedded
                        vr-mode-ui="enabled: true"
                        renderer="logarithmicDepthBuffer: true"
                        style={{
                            height: "100vh",
                            width: "100%",
                            touchAction: "none",
                        }}
                    >
                        <a-assets>
                            <img
                                id="tour-image"
                                src={selectedTour}
                                alt="360° Image"
                                crossorigin="anonymous"
                            />
                        </a-assets>

                        <a-sky src="#tour-image"></a-sky>

                        <a-camera>
                            <a-cursor raycaster="objects: [data-raycastable]" color="yellow"></a-cursor>
                        </a-camera>
                    </a-scene>

                    <button
                        onClick={handleExit}
                        className="exit-vr-button"
                    >
                        Exit VR
                    </button>
                </div>
            )}
        </div>
    );
};

export default Tour;
