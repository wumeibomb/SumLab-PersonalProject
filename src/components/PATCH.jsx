import React, { useEffect } from "react";

function updateAlbums({albums}){
     const [updatedName, setUpName] = useState(albums.name)
    const [updatedDesc, setUpDesc] = useState(albums.description)
    const [updatedIMG, setUpIMG] = useState(albums.img)
    const [updatedPrice, setUpPrice] = useState(albums.price)


    function handlePATCH(event) {
       event.preventDefault()
       const updatedAlbum = {
        img: updatedIMG,
        name: updatedName,
        description: updatedDesc,
        price: updatedPrice
       }
      fetch('http://localhost:4000/albums/${album.id}'), {
        method: "PATCH",
       headers: { "Content-Type": "application/json" },
      body: JSON.stringify({albums})
  }
  .then((response)=> { 
    if (!response.ok) {throw new Error("FLOPPPEEDDDDD")}
    return response.json()
  })
  .then(data => console.log(data)
  )
  .catch(error => console.log(error))
    }
    useEffect(() => {
        fetch("http://localhost:4000/albums")
        .then(setAlbum)
        .catch(error => console.log(error))
    }, [])
    return (
        <div>
            {}
        </div>
    )
            
}
export default updateAlbums