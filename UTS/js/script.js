// --- FUNGSI UNTUK JAM ---
// Didefinisikan di luar agar bisa diakses
function updateClock() {
    const now = new Date(); 

    const dateElement = document.getElementById("date-display");
    const clockElement = document.getElementById("clock-display");

    const dateOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    if (dateElement) {
        dateElement.innerHTML = now.toLocaleDateString('id-ID', dateOptions);
    }
    if (clockElement) {
        clockElement.innerHTML = `${hours}:${minutes}:${seconds}`;
    }
}


// Menunggu sampai seluruh konten halaman (HTML) dimuat
document.addEventListener("DOMContentLoaded", function() {

    // --- INTERAKSI 1: Alert saat Form Kontak Dikirim ---
    const contactForm = document.getElementById("contact-form");

    // Hanya jalankan jika elemen 'contact-form' ditemukan di halaman ini
    if (contactForm) {
        
        // Menambahkan 'listener' untuk event 'submit' (ketika tombol Kirim ditekan)
        contactForm.addEventListener("submit", function(event) {
            
            // Mencegah form me-refresh halaman (ini penting!)
            event.preventDefault(); 
            
            // Menampilkan alert yang Anda minta
            alert("Terima kasih, pesan Anda telah terkirim!");
            
            // Mengosongkan form setelah dikirim
            contactForm.reset();
        });
    }

    // --- INTERAKSI 2: Tombol Ubah Warna Background ---
    const colorToggleButton = document.getElementById("color-toggle");
    
    // Hanya jalankan jika tombol 'color-toggle' ditemukan
    if (colorToggleButton) {
        colorToggleButton.addEventListener("click", function() {
            document.body.classList.toggle("dark-mode");
            const sections = document.querySelectorAll('.content-section');
            sections.forEach(section => {
                section.classList.toggle('dark-mode-section');
            });
        });
    }

    // --- INTERAKSI 3: Jam & Tanggal Otomatis ---
    // Hanya jalankan jika wadah jam ditemukan
    if (document.getElementById("clock-container")) {
        updateClock(); // Jalankan fungsi jam pertama kali
        setInterval(updateClock, 1000); // Ulangi fungsi jam setiap 1 detik
    }

});