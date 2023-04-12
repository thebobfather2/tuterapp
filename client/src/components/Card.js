import React from "react";

const Card = (props) => {
  return (
    <div className="card" style={{padding: "50px"}}>
      <img src={props.imageUrl} alt={props.imageAlt} style={{borderRadius: "20px", border: "solid", borderColor: "#ABDCD6", display: "block", margin: "0 auto", borderWidth: "10px"}} />
      <div className="card-content">
        <h2 style={{paddingTop: "20px", textAlign: "center", display: "block", margin: "0 auto"}}>{props.title}</h2>
        <p style={{padding: "20px", textAlign: "center", display: "block", margin: "0 auto"}}>{props.description}</p>
        <button style={{textAlign: "center", display: "block", margin: "0 auto"}}>{props.buttonText}</button>
      </div>
    </div>
  );
};

export default Card;