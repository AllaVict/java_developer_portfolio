import "./homeStyle.css";
import photo from "./../img/photo.png";
import Typewriter from "./Typewriter";
import resume from "./../docs/Fullstack_developer_resume_Alla_Borodina.pdf";

function Home(){
    return (
        <section className="home" id="home">
        <div className="home-content">
            <h1><span>Hello,</span> I am <Typewriter text="Alla Borodina" delay={150} infinite /> </h1>
            <h2>Java Developer</h2>
            <p>	My gifted mind allows me to achieve goals in software development. </p>
            <p> I am passionate about technology. </p>
            <p>	Feel free to contact me! </p>

            <div className="social-media">
                <a href="https://www.linkedin.com/in/alla-borodina/" target="_blank" rel="noreferrer"> <i class='bx bxl-linkedin'></i> </a>
                <a href="https://github.com/AllaVict" target="_blank" rel="noreferrer" > <i class='bx bxl-github'></i> </a>
            </div>

            <a href="mailto:alla.borodina888@gmail.com" className="btn"> Hire me </a>
            <a href={resume} className="btn" type="application/pdf" target="_blank" rel="noreferrer" > Download CV </a>

        </div>

        <div className="home-img" >
            <img src={photo} alt="photo" />
        </div>

    </section>

    );
}

export default Home;