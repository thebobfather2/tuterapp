import React from 'react';
import Card from "../components/Card";
// import homeworkCard from '../components/homeworkCard';

const tuters = () => {
    return (
        <div>
            <Card
                imageUrl="/img/tuter1.jpg"
                imageAlt="Bryan"
                title="Bryan"
                description="Bryan specializes in web3 development and has experience with react, CSS, html, and javascript."
                buttonText="Learn more"
            />
            <Card
                imageUrl="/img/tuter1.jpg"
                imageAlt="Sarah Jacobs"
                title="Sarah Jacobs"
                description="Sarah has experience teaching subjects ranging from Korean, English, Computer Science and Writing."
                buttonText="Learn more"
            />
            {/* <homeworkCard
            homeworkData={homeworkData}
            /> */}
        </div>
      );
    };


export default tuters;