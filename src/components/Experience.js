import React from "react";

import "./experienceStyle.css";
import { experience } from "../data/experienceList";

function Experience() {
    return (
        <section id="experience">
            <div className="experience--title">
                <h2 className="heading"> <span>My</span> Experience</h2>
            </div>

            <div className="experience--content">

                {experience.map((item, index) => (
                    <div className="experience--card">
                        <div >
                            <h4>{item.title}</h4>
                            <div className="experience--duration">{item.period} </div> <br />
                            <p>{item.technologies}</p>
                        </div>

                        <ul className="experience--duties">
                            {item.duties.map((duty, number) =>
                                <li key={number}><p>{duty}</p></li>
                            )}
                        </ul>

                    </div>
                ))}
            </div>

        </section>

    );
}

export default Experience;