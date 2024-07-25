function filterImages(category) {
  const images = document.querySelectorAll('#gallery .col-md-4');
  images.forEach(image => {
    if (category === 'all' || image.classList.contains(category)) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}