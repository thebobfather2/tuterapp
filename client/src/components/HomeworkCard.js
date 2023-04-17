import React from "react";

const HomeworkCard = (props) => {
  return (
    <div className="card" style={{padding: "60px"}}>
      <img src={props.imageUrl} alt={props.imageAlt} style={{borderRadius: "20px", border: "solid", borderColor: "#ABDCD6", display: "block", margin: "0 auto", borderWidth: "10px", maxWidth: "40%"}} />
      <div className="card-content">
        <h1 style={{paddingTop: "20px", textAlign: "center", display: "block", margin: "0 auto"}}>{props.title}</h1>
        <h2 style={{paddingTop: "10px", textAlign: "center", display: "block", margin: "0 auto"}}>{props.kid}</h2>
        <h4 style={{padding: "10px", textAlign: "center", display: "block", margin: "0 auto", maxWidth: "40%"}}>{props.description}</h4>
        <h3 style={{ textAlign: "center", display: "block", margin: "0 auto", maxWidth: "70%"}}>{props.question}</h3>
      </div>
    </div>
  );
};

export default HomeworkCard;