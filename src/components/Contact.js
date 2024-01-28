import "./contactStyle.css";

function Contact() {
    return (

        <section className="contact" id="contact">

            <h2 className="heading">Contact <span>Me!</span></h2>

            <div className="contact-container">
                <h3 className="contact-title"><span>Why</span> don't we create a successful future in software development together?</h3>
                <h4 className="contact-sub-title"> Feel free to email me! </h4>

                <div className="contact-info-email">
                    <h4>Email</h4>
                    <p>alla.borodina888@gmail.com</p>
                    <div className="social-media">
                        <a href="mailto:alla.borodina888@gmail.com" > <i class='bx bx-envelope'></i> </a>
                    </div>
                </div>

            </div>
        </section>

    );
}

export default Contact;