import React from "react";

function Adminportal(){
    return(
        <div style={{backgroundColor: "white", //hw can I make it that the ENTIRE page is white instead of th whte rendering with the form...
        display: "flex", 
        justifyContent: "center", 
        paddingTop: "100px"}}>
            <form className="form" style={{border: "5px solid #cf23b0", padding: "30px", borderRadius: "10px", display: "grid", gap: "5px",width: "400px", height: "450px"}}>
                <p>Album Name:</p>
                <input 
                type="text"
                placeholder="name"
                style={{textAlign: "center", borderRadius: "5px", padding: "5px"}}
                ></input>

                <p>Album Description</p>
                <textarea
                type='text'
                placeholder="desc"
                style={{textAlign: "center", borderRadius: "5px", padding: "15px"}}
                ></textarea>

                <p>Album Price</p>
                <input 
                type="number"
                placeholder="price"
                style={{textAlign: "center", borderRadius: "5px", paddingLeft: "20px"}}
                ></input>

                <p>IMAGE:</p>
                <input 
                type= "url"
                placeholder="image url"
                style={{textAlign: "center"}}
                ></input>
            </form>
        </div>
    )
}

export default Adminportal