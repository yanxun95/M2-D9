const delTrackListSong = (table, row) => {
    let i = row.parentNode.parentNode.rowIndex;
    document.getElementById(table).deleteRow(i);
    alert("Song get delete!");
}

const validation = () => {
    let number = document.getElementById("track-number").value;
    let title = document.getElementById("track-title").value;
    let duration = document.getElementById("track-duration").value;
    let feature = document.getElementById("track-feature").value;
    let checkbox = document.getElementById("live-track-checkbox").checked;

    if(number === "" || title === "" || duration === "" || feature === "" || checkbox === false){
        alert("No empty field allow!");
    }else{
        alert("New song has been add!");
    }
    btnClose();
}

const btnClose = () => {
    document.getElementById("track-number").value = "";
    document.getElementById("track-title").value = "";
    document.getElementById("track-duration").value = "";
    document.getElementById("track-feature").value = "";
    document.getElementById("live-track-checkbox").checked = false;
}

// when i try to add padding right or margin right to the table, it won't work, but padding and margin can work is that