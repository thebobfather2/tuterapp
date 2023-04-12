import React from 'react';
import Card from "../components/Card";
// import HomeworkCard from '../components/homeworkCard';

const tuters = () => {
    return (
        <main className={`p-3`} style={{}}>
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
                description="Sarah specializes in makeup and hairstyling."
                buttonText="Learn more"
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