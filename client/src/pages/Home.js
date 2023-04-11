import React from 'react';
// import Sarah from '../../images/IMG_1517.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';


function Home () {
    return (
        <main className={`p-3`} style={{padding: '10px'}}>
        <section className={`p-3`}>
            <h2>Tuter Home</h2>
            {/* return <image={{Sarah}}/> */}
            <img src="/img/tuterlogo.png" style={{ width: '300px' }} />
            <h3>With Tuter App, you can easily connect with tuters online and send them any questions or notes you have. As a bonus, you can meet online face to face to discuss your homework at any time! Click the Tuters tab to connect today!</h3>
        </section>
        </main>
    )
}
export default Home;