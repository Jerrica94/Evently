import React from "react";
import "./style.css"

function FunCard(props) {

return (
    // <div className="card title shadow-lg p-3 mb-5 bg-white rounded">
    //     <h2 >{props.event}</h2>
    //     <h3>{props.description}</h3>
    //     <h3>{props.date}</h3>
    //     <h3>{props.location}</h3>
       
    //     <button>Register</button>
    <div>
      <div className="card title shadow-sm p-3 mb-5 bg-white rounded">
  <div className="card-body">
    <h5 className="card-title">{props.event}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{props.location}</h6>
    <p className="card-text">{props.description}</p>
    <h4><strong>{props.price}</strong></h4>
    <button className="btn btn-primary" >Register</button>
  </div>
</div>
        
   
      
</div>
  );
}
export default FunCard;