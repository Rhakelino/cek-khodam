// Ambil elemen form dan hasil div
const cekForm = document.getElementById('cekForm');
const nameInput = document.getElementById('name');
const resultDiv = document.getElementById('result');
const loading = document.getElementById('loading');

// Simpan hasil berdasarkan nama
let results = {};

// Tambahkan event listener untuk submit form
cekForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();

    if (name) {
        // Nonaktifkan form dan tombol submit selama loading
        cekForm.disabled = true;
        nameInput.disabled = true;

        // Tampilkan animasi loading
        loading.style.display = 'block';
        resultDiv.style.display = 'none';

        // Simulasi pengambilan hasil (gunakan timeout sebagai contoh)
        setTimeout(function () {
            let khodamResult = '';

            // Jika hasil untuk nama tersebut sudah ada, tampilkan hasil tersebut
            if (results.hasOwnProperty(name)) {
                khodamResult = results[name];
            } else {
                // Pilih khodam secara acak
                const khodams = [
                    'Baruak Sitinjau',
                    'Kosong',
                    'Tuyul Mulet',
                    'Tikus Sixpack',
                    'Macan Biskuat',
                    'Karpet Masjid',
                    'Cicak Sumbing',
                    'Siput Sigma',
                    'Jangkrik Mewing',
                    'Naga Mahjong',
                    'Ayam Masako',
                    'Topeng Jarjit',
                    'Cikgu Jasmin'
                ];

                khodamResult = khodams[Math.floor(Math.random() * khodams.length)];

                // Simpan hasil untuk nama ini
                results[name] = khodamResult;
            }

            // Tampilkan hasil
            showResult(name, khodamResult);
            resetForm(); // Setelah menampilkan hasil, reset form

            // Kosongkan input nama setelah tampil hasil
            nameInput.value = '';

        }, 3000); // Contoh delay 3 detik, sesuaikan dengan kebutuhan

    } else {
        resultDiv.textContent = 'Harap masukkan nama.';
    }
});

// Fungsi untuk menampilkan hasil
function showResult(name, khodam) {
    loading.style.display = 'none';
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `Khodam ${name} hari ini adalah <b>${khodam}</b>!`;
}

function resetForm() {
    cekForm.disabled = false; // Aktifkan kembali form
    nameInput.disabled = false; // Aktifkan kembali input nama
    nameInput.value = ''; // Kosongkan nilai input nama
}

document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("container");
    const donate = document.getElementById("donate");

    content.classList.add("show");

    setTimeout(function () {
        donate.classList.add("show");
    }, 1000)
});