import React from 'react';
import Card from "../components/Card";

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
                imageUrl="/img/tuter2.png"
                imageAlt="Pierre"
                title="Pierre"
                description="Pierre is totally not Bryan. He teaches French."
                buttonText="Learn more"
            />
        </div>
      );
    };


export default tuters;