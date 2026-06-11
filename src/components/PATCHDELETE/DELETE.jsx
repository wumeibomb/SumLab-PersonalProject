
function DELETE({album, onDelete}) {
    function handleDeletion() {
        fetch (`http://localhost:4000/albums/${album.id}`, {
            method: "DELETE",
        })
        .then((response) => {
            if (response.ok){
                onDelete(album.id)
            }
        })
    }
    //return
}