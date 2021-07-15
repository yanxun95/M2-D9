const delTrackListSong = (row) => {
    let i = row.parentNode.parentNode.rowIndex;
    document.querySelector("table").deleteRow(i);
}