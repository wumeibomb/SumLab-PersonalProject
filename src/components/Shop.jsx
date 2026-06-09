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
        <div className="main" style={{ color: "fuchsia",
        display: "grid", gridAutoColumns: "400px",
         justifyContent: "center"
        }} >
            {albums.map(album => (
                <li key = {album.id} style={{listStyleType: "none", padding: "10px", 
                border: "solid #13b5f5 10px", margin: "50px", borderRadius: "30px", }}> 
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
