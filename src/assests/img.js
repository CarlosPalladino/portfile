window.onload = function() {
    const image = document.querySelector('.image-container img');
    const caption = document.querySelector('.image-container figcaption');
  
    image.addEventListener('mouseenter', function() {
      caption.classList.add('hover');
    });
  
    image.addEventListener('mouseleave', function() {
      caption.classList.remove('hover');
    });
  }
  