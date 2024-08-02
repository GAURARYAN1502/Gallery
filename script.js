function showMedia(src) {
  const mediaPopup = document.getElementById("mediaPopup");
  const mediaContent = document.getElementById("mediaContent");

  mediaPopup.style.display = "block";
  mediaContent.innerHTML = `<img src="${src}" alt="Memorable moment" style="max-width: 100%; max-height: 100%; cursor: grab;">`;
}

function closeMedia() {
  const mediaPopup = document.getElementById("mediaPopup");
  mediaPopup.style.display = "none";
}

let isDragging = false;
let startPos = { x: 0, y: 0 };
let currentPos = { x: 0, y: 0 };

document.addEventListener('mousedown', (event) => {
  if (event.target.tagName === 'IMG' && event.target.parentElement.id === 'mediaContent') {
      isDragging = true;
      startPos = { x: event.clientX, y: event.clientY };
      event.target.style.cursor = 'grabbing';
  }
});

document.addEventListener('mouseup', (event) => {
  if (isDragging) {
      isDragging = false;
      event.target.style.cursor = 'grab';
  }
});

document.addEventListener('mousemove', (event) => {
  if (isDragging) {
      const img = document.querySelector('#mediaContent img');
      currentPos = { x: event.clientX - startPos.x, y: event.clientY - startPos.y };
      img.style.transform = `translate(${currentPos.x}px, ${currentPos.y}px)`;
  }
});
