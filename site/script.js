const bgInput = document.getElementById('bgInput');
const photoInput = document.getElementById('photoInput');
const gallery = document.getElementById('gallery');

function readFile(file, callback) {
  const reader = new FileReader();
  reader.onload = e => callback(e.target.result);
  reader.readAsDataURL(file);
}

if (bgInput) {
  bgInput.addEventListener('change', event => {
    const file = event.target.files[0];
    if (file) {
      readFile(file, url => {
        document.body.style.backgroundImage = `url('${url}')`;
      });
    }
  });
}

if (photoInput) {
  photoInput.addEventListener('change', event => {
    const files = Array.from(event.target.files);
    files.forEach(file => {
      readFile(file, url => {
        const img = document.createElement('img');
        img.src = url;
        gallery.appendChild(img);
      });
    });
    photoInput.value = '';
  });
}

