import React, { useState } from "react";

function Adminportal({onNewAlbum}){
//do I actually need onNewAlbum? seems to work the same without it as well as the 2nd '.then below
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
                onNewAlbum(data)
                setName("")
                setDesc("")
                setIMG("")
                setPrice(0)
            }) //looking at the canvas examples, this (.then(data => ..) is shown but I don't seem to need it as when I delete it, it still updates everything correctly so what is it there for?
            .catch((error) => console.log(error))
        }
    
    return(
        <div className ="Admin" style={{
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
                name="name"
                placeholder="name"
                onChange={(event) => setName(event.target.value)}
                style={{textAlign: "center", borderRadius: "5px", padding: "5px"}}
                ></input>

                <p>Album Description:</p>
                <textarea
                type='text'
                name="description"
                placeholder="desc"
                onChange={(event) => setDesc(event.target.value)}
                style={{textAlign: "center", borderRadius: "5px", padding: "15px"}}
                ></textarea>

                <p>Album Price:</p>
                <input 
                type="number"
                name="price"
                placeholder="price"
                onChange={(event) => setPrice(event.target.value)}
                style={{textAlign: "center", borderRadius: "5px", paddingLeft: "20px"}}
                ></input>

                <p>IMAGE:</p>
                <input 
                type= "url"
                name="img"
                placeholder="image url"
                onChange={(event) => setIMG(event.target.value)}
                style={{textAlign: "center"}}
                ></input>
                
                <button 
                type="submit"
                style= {{width: "200px", justifySelf: "center", color: "#35fff5", backgroundColor: "#cf32c7", borderRadius: "10px"}}
                >Add Album</button>

            </form>
        </div>
    )
}


export default Adminportal