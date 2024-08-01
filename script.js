function showMedia(src) {
  var popup = document.getElementById("mediaPopup");
  var mediaContent = document.getElementById("mediaContent");
  popup.style.display = "flex";

  if (src.endsWith('.mp4')) {
      mediaContent.innerHTML = '<video controls><source src="' + src + '" type="video/mp4">Your browser does not support the video tag.</video>';
  } else {
      mediaContent.innerHTML = '<img src="' + src + '" alt="Media">';
  }
}

function closeMedia() {
  var popup = document.getElementById("mediaPopup");
  popup.style.display = "none";
}
