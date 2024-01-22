import "./homeStyle.css";
import photo from "./../img/photo.png";

function Home(){
    return (
        <section className="home" id="home">
        <div className="home-content">
            <h1>Hello, I am <span>Alla</span> Borodina</h1>
            <h2>Java Developer </h2>
            <p>	My gifted mind allows me to achieve goals in software development. </p>
            <p> I am passionate about technology. </p>
            <p>	Feel free to contact me! </p>

            <div className="social-media">
                <a href="#_"> <i class='bx bxl-linkedin'></i> </a>
                <a href="#_"> <i class='bx bxl-github'></i> </a>
            </div>

            <a href="#_" className="btn"> Hire me </a>
            <a href="#_" className="btn"> Download CV </a>

        </div>

        <div className="home-img" >
            <img src={photo} alt="photo" />
        </div>

    </section>

    );
}

export default Home;