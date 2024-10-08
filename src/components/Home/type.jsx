import React from "react";
import Typewriter from 'typewriter-effect';
import "./home.css";

const Type = () => {
    return (
        <section className="TypeEffect">
            <Typewriter
                options={{
                    strings: ["Web Developer", "Web Designer", "ReactJs Specialist"],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    deleteSpeed: 20,
                }}
            />
        </section>
    );
};

export default Type;