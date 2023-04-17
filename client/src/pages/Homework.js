import React from 'react';
import HomeworkCard from '../components/HomeworkCard';

const homework = () => {
    return (
        <main className={`p-3`} style={{backgroundColor: "#F3E47D"}}>
        <div className={`p-3`}>
            <HomeworkCard
                
                imageUrl="/img/arborday.png"
                imageAlt="Arbor Day Essay"
                title="English Homework 4/10"
                description="Arbor Day Essay - Predict, define and comprhend the given text. Answer each question carefully with complete sentences."
                question="Please help me study the vocabulary words and how to comprehend the text with 2 pieces of evidence from the text."
                
            />
            <HomeworkCard
                imageUrl="/img/tuter2.png"
                imageAlt="Pierre"
                title="Pierre"
                description="Pierre is totally not Bryan. He teaches French."
                buttonText="Learn more"
            />
             <HomeworkCard
                imageUrl="/img/tuter3.png"
                imageAlt="Sarah Jacobs"
                title="Sarah Jacobs"
                description="Sarah Jacobs specializes in teaching English, Korean, Writing, and Web Development. She has served as an English teacher of all ages for over two years and has three completed books in her portfolio. Sarah believes that learning is best achieved through celebrating every growing moment. Set up your complimentary tutoring session with Sarah today!"
                buttonText="Sarah's Book Recommendations"
                linkUrl="https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"
            />

            <HomeworkCard
                imageUrl="/img/tuter4.png"
                imageAlt="Naz Yasar"
                title="Naz Yasar"
                description="Turkish baklava master."
                buttonText="Learn more"
            />
           
            
        </div>
        </main>
      );
    };


export default homework;