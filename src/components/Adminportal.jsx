import React, { useState } from "react";
import updateAlbums from "./PATCH";

function Adminportal(){

    const FLOP = "http://localhost:4000/albums"
            const [name, setName] = useState("")
            const [desc, setDesc] = useState("")
            const [price, setPrice] = useState(0)
            const [img, setIMG] = useState("")
    
            function handleSubmit(event) {
                event.preventDefault()
            
            const newAlbum = {
                name,
                desc,
                price,
                img,
            }
    
            fetch(FLOP, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newAlbum),
            })
            .then((response) => {
                if(!response.ok) {
                    throw new Error("FILUREEEE")
                }
                return response.json()
            })
            .then((data) => {
                setName("")
                setDesc("")
                setIMG("")
                setPrice(0)
            })
            .catch((error) => console.log(error))
        }
    
    return(
        <div className ="Admin" style={{//hw can I make it that the ENTIRE page is white instead of th whte rendering with the form...
        display: "flex", 
        justifyContent: "center", 
        paddingTop: "70px",
        paddingBottom: "75px"}}>
            <form className="form" style={{border: "5px solid #cf23b0", padding: "30px",
                 borderRadius: "10px", display: "grid", 
                 gap: "5px",width: "400px", 
                 height: "450px"}} onSubmit={handleSubmit}>

                <p>Album Name:</p>
                <input 
                type="text"
                placeholder="name"
                onChange={(event) => setName(event.target.value)}
                style={{textAlign: "center", borderRadius: "5px", padding: "5px"}}
                ></input>

                <p>Album Description:</p>
                <textarea
                type='text'
                placeholder="desc"
                onChange={(event) => setDesc(event.target.value)}
                style={{textAlign: "center", borderRadius: "5px", padding: "15px"}}
                ></textarea>

                <p>Album Price:</p>
                <input 
                type="number"
                placeholder="price"
                onChange={(event) => setPrice(event.target.value)}
                style={{textAlign: "center", borderRadius: "5px", paddingLeft: "20px"}}
                ></input>

                <p>IMAGE:</p>
                <input 
                type= "url"
                placeholder="image url"
                onChange={(event) => setIMG(event.target.value)}
                style={{textAlign: "center"}}
                ></input>

                <button 
                type="submit"
                style= {{width: "200px", justifySelf: "center", color: "#35fff5", backgroundColor: "#cf32c7", borderRadius: "10px"}}
                >Add Album</button>
                <button 
                type="submit"
                onSubmit={updateAlbums}
                style= {{width: "200px", justifySelf: "center", color: "#35fff5", backgroundColor: "#cf32c7", borderRadius: "10px"}}
                >Update</button>


            </form>
        </div>
    )
}


export default Adminportal