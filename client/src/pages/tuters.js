import React from 'react';
import Card from "../components/Card";
import HomeworkCard from '../components/HomeworkCard';

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
            />
            <Card
                imageUrl="/img/tuter2.png"
                imageAlt="Pierre"
                title="Pierre"
                description="Pierre is totally not Bryan. He teaches French."
                buttonText="Learn more"
            />
             <Card
                imageUrl="/img/tuter3.png"
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
                description="Turkish baklava master."
                buttonText="Learn more"
            />
            {/* <HomeworkCard
            
            /> */}
            
        </div>
        </main>
      );
    };


export default tuters;