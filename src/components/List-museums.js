import React, { useEffect, useState } from "react";
import Museum from './Museum'
import MuseumDetail from "./Museum-detail";

function ListMuseums () {

    const [museos, setMuseos] = useState([]);
    const [museo , setMuseo] = useState(undefined);
    const [centinela, setCentinela] = useState(true)

    useEffect(() => {
        fetch("https://back-museums-uniandes.herokuapp.com/api/museums")
        .then((result) => result.json())
        .then((lista) => setMuseos(lista));
    }, []);

    const vaciar = () => {
        setCentinela(true)
        setMuseo(undefined)
    }
    const seleccion = (museoId) => {
        let encontrado = museos.find((mus) => mus.id === museoId);
        setMuseo(encontrado)
        setCentinela(false)
      };
    
    return (
        < div className="container">
            <p className="titulito">
                <span>Home</span> {" > "} <span onClick={vaciar}>Museos</span>
            </p>

            <div className="header">
                {centinela ? "MUSEOS" : museo.name + ": Obras principales"}
            </div>

            {centinela ? (
                <div className="museum-list row">
          {museos.map((mus) => (
                <div className="col-md-3">
                    <MuseumDetail
                        museum={mus}
                        seleccion={seleccion}
                        key={mus.id}
                    >
                    </MuseumDetail>
                </div>
          ))}
        </div>
            ):(
                <div>
                <Museum museum={museo}></Museum>
                </div>
            )}
        </div>
        )
}

export default ListMuseums;