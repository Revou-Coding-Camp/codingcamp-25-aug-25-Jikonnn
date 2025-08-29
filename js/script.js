document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.navbar-toggle');
  const menu = document.querySelector('.navbar-menu');
  toggle.addEventListener('click', function () {
    menu.classList.toggle('active');
  });
  // Optional: close menu when clicking a link (mobile)
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });

  // Carousel Portfolio
  const images = document.querySelectorAll('.carousel-img');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let current = 0;

  function showImage(idx) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === idx);
    });
  }
  if (images.length) showImage(current);

  if (prevBtn) prevBtn.addEventListener('click', function () {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });
  if (nextBtn) nextBtn.addEventListener('click', function () {
    current = (current + 1) % images.length;
    showImage(current);
  });

  // Message Us form
  const form = document.getElementById('message-form');
  const modal = document.getElementById('message-modal');
  const modalData = document.getElementById('modal-data');
  const modalClose = document.getElementById('modal-close');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const nama = form.nama.value || '-';
      const tgl = form.tgl.value || '-';
      const jk = form.jk.value || '-';
      const pesan = form.pesan.value || '-';
      const waktu = new Date().toLocaleString();

      // Isi data ke modal
      modalData.innerHTML = `
        <b>Current time :</b> ${waktu}<br><br>
        <b>Nama :</b> ${nama}<br>
        <b>Tanggal Lahir :</b> ${tgl}<br>
        <b>Jenis Kelamin :</b> ${jk}<br>
        <b>Pesan :</b> ${pesan}
      `;
      modal.style.display = 'block';
      form.reset();
    });
  }

  // Tutup modal jika klik tombol close
  if (modalClose) {
    modalClose.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  }

  // Tutup modal jika klik di luar modal-content
  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
  
});