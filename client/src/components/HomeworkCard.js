import React from "react";

const HomeworkCard = (props) => {
  return (
    <div className="card" style={{padding: "50px"}}>
      <img src={props.imageUrl} alt={props.imageAlt} style={{borderRadius: "20px", border: "solid", borderColor: "#ABDCD6", display: "block", margin: "0 auto", borderWidth: "10px", maxWidth: "60%"}} />
      <div className="card-content">
        <h2 style={{paddingTop: "20px", textAlign: "center", display: "block", margin: "0 auto"}}>{props.title}</h2>
        <p style={{padding: "20px", textAlign: "center", display: "block", margin: "0 auto"}}>{props.description}</p>
        <p style={{padding: "20px", textAlign: "center", display: "block", margin: "0 auto"}}>{props.question}</p>
      </div>
    </div>
  );
};

export default HomeworkCard;