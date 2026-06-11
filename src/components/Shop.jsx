import React, { useEffect, useState } from "react";
import EditForm from "./PATCHDELETE/PATCH";

function Shop() {
    const [albums, setAlbums] = useState([]) 
    const [query, setQuery] = useState("")
    const [editingA, setEditA] = useState(null)
     
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


    function handleUpdate(updatedAlbum){

        setAlbums(albums.map((album) => (album.id === updatedAlbum.id ? updatedAlbum : album)))
        setEditA(null)
    
    const filteralbums = albums.filter(a => a.name.toLowerCase().includes(query.toLowerCase()))

    return (
        <div>
            <EditForm setAlbums = {setAlbums} />
        <ul>
            {filteralbums.map((album)=> (
                <Shop key = {album.id}
                album = {album}
                setEdit = {setEditA}
                />
            ))}
        </ul>
        {editingA ? <EditForm album = {editingA} onUpdate = {handleUpdate} /> : ""}
        </div>

    )
}
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
                    <button type="submit" onSubmit={handleUpdate}>Edit</button>
                </li>
            ))}
    
        </div>
    )
}

export default Shop
