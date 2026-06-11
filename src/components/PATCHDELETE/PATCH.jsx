import React, { useEffect } from "react";

function EditForm({album, onUpdateAlbum}){
   const [UPname, setName] = useState(album.name)
   const [UPdescription, setDesc] = useState(album.description)
   const [UPprice, setPrice] = useState(album.price)
   const [UPIMG, setIMG] = useState(album.IMG)
 
    function handlePATCH(event) {
       event.preventDefault()
       
       const updatedAlbum = {
        name: UPname,
        desc: UPdescription,
        price: UPprice,
        img: UPIMG
       }
       fetch(`http://localhost:4000/albums${album.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedAlbum)
  })
       .then((response) => response.json())
       .then(onUpdateAlbum)
}

    
    return (
        <div style={{border: "solid 20px"}}>
          <form className="formCard" onSubmit={handlePATCH}>
            <input type ="text" name= "name" value = {UPname} onChange={(event) => setName(event.target.value)}/>
            <input type ="text" name = "desc" value = {UPdescription} onChange={(event) => setDesc(event.target.value)}/>
            <input type ="text" name = "price" value = {UPprice} onChange={(event) => setPrice(event.target.value)}/>
            <input type ="text" name = "image" value = {UPIMG} onChange={(event) => setIMG(event.target.value)}/>

      <button type="submit">Save Changes</button>
    
    </form>
        </div>
  )
}

 export default EditForm