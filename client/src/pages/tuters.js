import React from 'react';
import Card from "../components/Card";

const tuters = () => {
    return (
        <main className={`p-3`} style={{backgroundColor: "#F3E47D"}}>
        <div className={`p-3`}>
            <Card
                imageUrl="/img/tuter1.jpg"
                imageAlt="Bryan"
                title="Bryan"
                description="Bryan specializes in web3 development and has experience with react, CSS, html, and javascript."
                buttonText="Learn more"
                buttonUrl="https://github.com/thebobfather2"
            />
            <Card
                imageUrl="/img/tuter2.png"
                imageAlt="Pierre"
                title="Pierre"
                description="A good education can change anyone. A good teacher can change everything."
                buttonText="Learn more"
                buttonUrl="https://github.com/thebobfather2"
            />
             <Card
                imageUrl="/img/sarah.jpg"
                imageAlt="Sarah Jacobs"
                title="Sarah Jacobs"
                description="Sarah Jacobs specializes in teaching English, Korean, Writing, and Web Development. She has served as an English teacher of all ages for over two years and has three completed books in her portfolio. Sarah believes that learning is best achieved through celebrating every growing moment. Set up your complimentary tutoring session with Sarah today!"
                buttonText="Sarah's Book Recommendations"
                buttonUrl="https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"
            />

            <Card
                imageUrl="/img/tuter4.png"
                imageAlt="Naz Yasar"
                title="Naz Yasar"
                description="Naz has a heart for teaching math, science and computer science. She typically tutors middle and high school students but began her tutoring careers with elementary students. She has since worked as a part time teacher at local schools and seeks to help more students achieve their goals! Click more to start tutoring with Naz today."
                buttonText="Learn more"
                buttonUrl="https://github.com/nazyasar"
            />
            {/* <HomeworkCard
            
            /> */}
            
        </div>
        </main>
      );
    };


export default tuters;