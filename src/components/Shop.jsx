import React, { useEffect, useState } from "react";

function Shop() {
     const [albums, setAlbums] = useState([]) 
     const FINALLY = 'http://localhost:4000/albums'
    function fetchtest() {
        fetch(FINALLY)
        .then(response => {
            return response.json()
        })
        .then (data => {setAlbums(data)})
        .catch (error => {console.log(error)})
    }
    useEffect(() => {
        fetchtest()
    },[])

    return (
        <div className="main" style={{backgroundColor:"white", color: "fuchsia",display: "grid", gridTemplateColumns: "auto auto auto"}} >
            {albums.map(album => (
                <li key = {album.id} style={{listStyleType: "none", padding: "10px"}}> 
                    <h3 >{album.name}</h3>
                    <p>{album.description}</p>
                    <p>${album.price}</p>
                    <img src = {album.img} alt = {album.name} width={"250px"}/>
                </li>
            ))}
          
    
        </div>
    )
}
export default Shop
