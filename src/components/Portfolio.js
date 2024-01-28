import "./portfolioStyle.css";
import { projects } from "../data/projectsList";

function Portfolio() {
    return (
        <>
            <section id="portfolio">
                <div className="portfolio--title">
                    <h2 className="heading"> <span>My</span> Portfolio</h2>
                </div>
                <div className="portfolio--container">

                    {projects.map((item, index) => (
                        <div key={index} className="portfolio--card">

                            <div className="portfolio--img">
                                <img src={item.img} alt="Placeholder" />
                            </div>

                            <div className="portfolio--card--content">
                                <h4> {item.title} </h4>
                                <p> {item.technology}</p>
                                <a href={item.gitHubLink} className="btn" target="_blank" rel="noreferrer" > View in GitHub </a>
                            </div>

                        </div>
                    ))}

                </div>

            </section>

        </>

    );
}

export default Portfolio;