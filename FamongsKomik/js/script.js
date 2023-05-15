// Ambil elemen-elemen yang dibutuhkan
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-pane');

// Tambahkan event listener pada setiap tombol tab
tabButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Hapus kelas 'active' dari semua tombol tab
    tabButtons.forEach((btn) => {
      btn.classList.remove('active');
    });

    // Hapus kelas 'active' dari semua konten tab
    tabContents.forEach((content) => {
      content.classList.remove('active');
    });

    // Tambahkan kelas 'active' pada tombol yang diklik
    e.target.classList.add('active');

    // Ambil data-tab dari tombol yang diklik
    const tabId = e.target.getAttribute('data-tab');

    // Tampilkan konten tab yang sesuai dengan tombol yang diklik
    const tabContent = document.getElementById(tabId);
    tabContent.classList.add('active');
  });
});
