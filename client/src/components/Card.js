import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.imageAlt} style={{marginTop: "25px", borderRadius: "20px", border: "solid", borderColor: "#ABDCD6", display: "block", margin: "0 auto", borderWidth: "10px"}} />
      <div className="card-content">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button>{props.buttonText}</button>
      </div>
    </div>
  );
};

export default Card;