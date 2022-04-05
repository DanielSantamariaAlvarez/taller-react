import React from "react";

function Obra({obra, imagen}){
    
  
    return (
        <div className="museum-detail row justify-content-center my-2 ">
            <div className="image col-md-2">
                <img src={imagen} alt="" />
                <h3>{obra.name}</h3>
            </div>
            <div className="desc col-md-8">{obra.description}</div>
    </div>
    )

}

export default Obra;