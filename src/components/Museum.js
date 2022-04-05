import React, { useState } from "react";
import Obra from './Obra'

function Museum ({museum}) {
    const [museo]=useState(museum)
    return (
        <>
            <div className="row">
                
                {museo.artworks.map(obra => (
                    <Obra key={obra.id} obra={obra} imagen = {museo.image}></Obra>
                ))}
            </div>
            
        </>
    )
}

export default Museum;