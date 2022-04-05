import React, { useState } from "react";
function MuseumDetail ({seleccion, museum}){
    const [museo] = useState(museum)
    return (
    <div className="card" onClick={()=>seleccion(museo.id)} >
      <div className="imagen"><img className="card-img-top" src= {museum.image} alt="foto museo"></img></div>
  <div className="card-body">
    <h5 className="card-title">{museo.name}</h5>
    <p className="card-text">{museo.city}</p>
  </div>
</div>
)
}

export default MuseumDetail;