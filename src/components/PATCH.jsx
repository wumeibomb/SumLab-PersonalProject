import React, { useEffect } from "react";

function updateAlbums({id, name, description, price, img }){
     const [album, setAlbum] = useState("")

    const handlePATCH = (event) => {
       event.preventDefault()
      fetch('http://localhost:4000/albums/{album.id}'), {
        method: "PATCH",
       headers: { "Content-Type": "application/json" },
      body: JSON.stringify({album})
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
}
export default updateAlbums