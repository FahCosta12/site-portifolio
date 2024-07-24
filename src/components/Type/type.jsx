import React from "react";
import Typewriter from 'typewriter-effect';
import "./type.css";

const Type = () => {
    return (
        <div className="TypeEffect">
            <Typewriter>
                options={{
                    string: ["Web Developer", "Web Designer", "ReactJs"],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    deleteSpeed: 20,
                }}
            </Typewriter>
        </div>
    );
};

export default Type;