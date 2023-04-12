import React from 'react';
// import aboutImg from '../../images/IMG_1517.jpg';

function About () {
    return (
        <section className={`p-3`}>
            <h2 style={{textAlign: "center"}} >About</h2>
            <h3>Tuter</h3>
            {/* <img
            src={aboutImg}
            className="p-2"
            style={{ width: "20%" }}
            alt="cover"
          ></img> */}
            <h6 style={{ width: "80%", justifyContent: "center" }} id="about">
            Tuter was created to help people find a way to easily upload homework and questions to their 
            tutors online. This way, not only will the tutors and students be prepared for their session, but 
            it will create an open way for students and tutors to communicate outside of their given sessions.
            Tutors will be able to best prepare for their sessions by bringing the right books, materials, and research to help
            students achieve their educational goals. Take a look at our tutors today and see what you can learn!
            <br></br>
            <br></br>Click here for the list of tutors.
          </h6>
            
        </section>
    )
}
export default About;