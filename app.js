const navLinks = document.querySelectorAll('nav ul li a');

// Sayfa kaydırıldığında her bir nav linki için hover stilini ekleyin/çıkarın
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY;
  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop + 200 &&
      section.offsetTop + section.offsetHeight > fromTop + 200
    ) {
      link.classList.add('hover');
    } else {
      link.classList.remove('hover');
    }
  });
});


  function yenidenYukle() {
      // Tüm animasyonlu öğeleri seçin
      const animasyonluOgeler = document.querySelectorAll('.text');

      // Her bir animasyonlu öğe için bir yeniden yükleme olayı ekleme
      animasyonluOgeler.forEach((elem) => {
        elem.addEventListener('animationiteration', () => {
          elem.style.animation = 'none';
          elem.offsetHeight; // Yeniden yüklenme için bir bekleme süresi
          elem.style.animation = null;
        });
      });

      // Sayfayı yenileme
      location.reload();
    }