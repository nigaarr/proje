const sliderContainer = document.querySelector('.slider-container');
const slides = sliderContainer.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;

// İlk slaytı göster
slides[currentSlide].classList.add('active');
dots[currentSlide].classList.add('active');

// İleri butonuna tıklama işlemi
nextBtn.addEventListener('click', () => {
  changeSlide('next');
});

// Geri butonuna tıklama işlemi
prevBtn.addEventListener('click', () => {
  changeSlide('prev');
});

// Noktaya tıklama işlemi
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    updateSlider();
  });
});

// Slaytı değiştirme fonksiyonu
function changeSlide(direction) {
  const prevSlide = slides[currentSlide];
  prevSlide.classList.remove('active');
  dots[currentSlide].classList.remove('active');

  if (direction === 'next') {
    currentSlide++;
  } else if (direction === 'prev') {
    currentSlide--;
  }

  if (currentSlide === slides.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  updateSlider();
}

// Slaytı güncelleme fonksiyonu
function updateSlider() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    dots[index].classList.remove('active');
  });

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}





document.addEventListener("DOMContentLoaded", function() {
    // Tüm slide resimlerini seç
    var slideImages = document.querySelectorAll(".slide-image");
    
    // Her bir resim için tıklama olayı ekle
    slideImages.forEach(function(image) {
        image.addEventListener("click", function() {
            // data-url özniteliğindeki değeri al
            var url = this.getAttribute("data-url");
            // Yeni sayfaya yönlendir
            window.location.href = url;
        });
    });
});


