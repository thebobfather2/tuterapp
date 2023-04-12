import React from "react";

const data = db.tuters.find({});
console.log(data);

const HomeworkCard = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.imageAlt} />
      <div className="card-content">
        <h2>{data}</h2>
      </div>
    </div>
  );
};

export default HomeworkCard;