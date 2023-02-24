function onClickImage(id) {
  // displays the modal
  document.getElementById("modal").style.display = 'block';
  // gives the src to the img in the modal 
    console.log(id);
    let idOfImage = document.getElementById(id).src;
    console.log(idOfImage)
    let modalPic = document.getElementById("modal-img");
    modalPic.src = this.src;
};

function closeModal() {
  document.getElementById("modal").style.display = 'none';
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
