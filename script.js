function validateForm() {
  const name = document.getElementById('name');
  if (!name.value) {
    alert('Name is required!');
    return false;
  }
  return true;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
      const lightbox = document.createElement('div');
      lightbox.style.position = 'fixed';
      lightbox.style.top = 0;
      lightbox.style.left = 0;
      lightbox.style.width = '100%';
      lightbox.style.height = '100%';
      lightbox.style.background = 'rgba(0,0,0,0.8)';
      lightbox.style.display = 'flex';
      lightbox.style.justifyContent = 'center';
      lightbox.style.alignItems = 'center';
      lightbox.style.zIndex = 9999;

      const clone = img.cloneNode();
      clone.style.maxWidth = '90%';
      clone.style.maxHeight = '90%';
      lightbox.appendChild(clone);

      lightbox.addEventListener('click', () => lightbox.remove());
      document.body.appendChild(lightbox);
    });
  });
});

window.addEventListener('scroll', () => {
  const contactHeading = document.querySelector('#contact h2');
  if (contactHeading) {
    contactHeading.style.display = window.scrollY > 400 ? 'none' : 'block';
  }
});

