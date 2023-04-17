import React from 'react';
import HomeworkCard from '../components/HomeworkCard';

const homework = () => {
    return (
        <main className={`p-3`} style={{backgroundColor: "#F3E47D"}}>
        <div className={`p-3`}>
            <HomeworkCard
                
                imageUrl="/img/arborday.png"
                imageAlt="Arbor Day Essay"
                kid="Eric B. - Alpharetta"
                title="English Homework 4/10"
                description="Arbor Day Essay - Predict, define and comprhend the given text. Answer each question carefully with complete sentences."
                question="Please help me study the vocabulary words and how to comprehend the text with 2 pieces of evidence from the text."
                
            />
            <HomeworkCard
                imageUrl="/img/nonfiction.png"
                imageAlt="Nonfiction Homework 4/03"
                kid="Lily T. - Atlanta"
                title="Nonfiction Homework 4/03"
                description="Read a nonfiction story. Write the main topic of the story and 3 relevant details. Use complete sentences when writing your details."
                question="Please help my daughter with her reading assignment. She chose the book Grand Canyon by Jason Chin but has a hard time understanding all the details. Please help her understand how to find evidence!"
            />
             <HomeworkCard
                imageUrl="/img/phonics.png"
                imageAlt="Phonics Homework 4/02"
                kid="Jason C. - Dunwoody"
                title="Phonics Homework 4/02"
                description="Writing and learning a weekly vocabulary sheet"
                question="Please help my kids practice their weekly phonics. The list is on the back of the page. I will provide some books for you to go over with them as well. Thanks!"
            />

            <HomeworkCard
                imageUrl="/img/solution.png"
                imageAlt="Solution Homework 4/01"
                kid="Andrew K. - Online"
                title="Solution Homework 4/01"
                description="Read a story and find the problem, steps to the solution, and the solution."
                question="Can you please bring some books to go over with my kids? They need help with steps to the solution. Thanks!"
            />
           
            
        </div>
        </main>
      );
    };


export default homework;