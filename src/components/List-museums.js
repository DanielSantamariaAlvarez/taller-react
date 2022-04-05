import React, { useEffect, useState } from "react";
import Museum from './Museum'
import MuseumDetail from "./Museum-detail";

function ListMuseums () {

    const [museos, setMuseos] = useState([]);
    const [museo, setMuseo] = useState();
    let centinela = true;

    useEffect(() => {
        fetch("https://back-museums-uniandes.herokuapp.com/api/museums")
        .then((result) => result.json())
        .then((lista) => setMuseos(lista));
    }, []);

    const vaciar = () => {
        centinela = true
        setMuseo([])
    }
    const seleccion = (museoId) => {
        let encontrado = museos.find((museo) => museo.id === museoId);
        setMuseo(encontrado);
        centinela = false
      };
    
    return (
        < div className="container">
            <p className="">
                <span>Home</span> {" > "} <span onClick={vaciar}>Museos</span>
                {centinela (
                <>
                    {" > "}
                    <span> museo</span>
                </>
                )}
            </p>

            <div className="header">
                {centinela ? "MUSEOS" : museo.name + ": Obras principales"}
            </div>
            {centinela?(
                <div className="museum-list row">
          {museos.map((mus) => (
                <div className="col-md-3">
                    <MuseumDetail
                        museum={mus}
                        elegirMuseo={seleccion}
                        key={mus.id}
                    ></MuseumDetail>
                </div>
          ))}
        </div>
            ):(
                <Museum museum={museo}></Museum>
            )}
        </div>
        )
}

export default ListMuseums;