import "./aboutStyle.css";
import photo from "./../img/photo.png";

function About() {
    return (

        <section className="about" id="about">

            <div className="about-img" >
                <img src={photo} alt="photo" />
            </div>
            <div className="about-content">
                <div>
                    <h1 className="heading"> About <span>Me</span> </h1>
                    <h2>I am here to introduce my experience and my portfolio!</h2>
                    <p> Yes, I am lack of big experience but my gifted mind make me good at picking up new skills.
                        I am highly motivated to work as Java developer.
                    </p>
                </div>
                <p><span>Experience:&emsp; </span>4 months of software development </p>
                <p><span>Education: &emsp;  </span>Backend course, Master’s degree of Chemistry (related to Engineering)</p>
                <p><span>Self-learner:&emsp;  </span>My gifted mind allows me to achieve goals in software development. </p>
                <p><span>Productive:&emsp;  </span>I have been working all my life without breaks.</p>
                <p><span>Communicative:&emsp;</span> Successful experience in communicating with clients.</p>

                <a href="#portfolio" className="btn"> Read More </a>
            </div>


        </section>
    );
}

export default About;