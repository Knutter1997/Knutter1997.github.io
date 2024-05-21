const wcButton = Document.getElementById('wcButton');
function showWorkCenters() {
  Document.getElementById('workCenters').style.display = 'grid';
}
wcButton.style.backgroundColor = 'black';
wcButton.onmousedown = showWorkCenters;
