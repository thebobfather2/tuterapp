import React from 'react';
import "/Home.css"
// import Sarah from '../../images/IMG_1517.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';


function Home () {
    return (
        <main className="MainContainer" style={{padding: '10px'}}>
        <section className={`p-3`}>
            <h2>Welcome to Tuter!</h2>
            {/* return <image={{Sarah}}/> */}
            <img src="/img/tuterlogo.png" style={{ display: "block", width: '300px', margin: "0 auto" }} />
            <p className='mainText'>With Tuter App, you can easily connect with tuters online and send them any questions or notes you have. 
            <br></br>
            As a bonus, you can meet online face to face to discuss your homework at any time! 
            <br></br>
            Click the Tuters tab to connect today!</p>
        </section>
        </main>
    )
}
export default Home;