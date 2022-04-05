import React from "react";
function MuseumDetail ({seleccion, museum}){
    return (
    <div className="card" onClick={()=>seleccion(museum.id)} >
      <div className="imagen"><img className="card-img-top" src= {museum.image} alt="foto museo"></img></div>
  <div className="card-body">
    <h5 className="card-title">{museum.name}</h5>
    <p className="card-text">{museum.city}</p>
  </div>
</div>
)
}

export default MuseumDetail;