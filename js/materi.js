// ========== MATERI DATA ==========
const MATERI_DATA = [
  {
    id: 0, title: "Mengenal Python", icon: "🐍", difficulty: "Pemula", duration: "15 menit",
    desc: "Pengenalan bahasa pemrograman Python, sejarah, dan kenapa Python populer.",
    content: `
<h2>Apa itu Python?</h2>
<p>Bayangkan kamu sedang memberi instruksi kepada asisten robotmu untuk membuatkan teh. Jika kamu menggunakan bahasa pemrograman lain, kamu mungkin harus menjelaskan cara memanaskan air, ukuran gelas, dan lain-lain dengan sangat kaku. Tapi dengan <strong>Python</strong>, kamu seolah-olah bisa langsung berkata: <em>"Tolong buatkan teh manis"</em>.</p>

<p>Python adalah bahasa pemrograman tingkat tinggi yang diciptakan oleh <strong>Guido van Rossum</strong>. Python sangat disukai karena sintaksnya (aturan penulisannya) sangat mirip dengan bahasa Inggris sehari-hari, sehingga mudah dibaca dan sangat cocok untuk pemula.</p>

<div class="info-box"><p>💡 Fakta Menarik: Nama Python tidak diambil dari ular piton, melainkan dari sebuah acara komedi TV favorit sang pembuat, yaitu "Monty Python's Flying Circus".</p></div>

<h2>Mengapa Belajar Python?</h2>
<p>Python bukan hanya untuk pemula, tapi juga digunakan oleh perusahaan raksasa seperti Google, Netflix, dan Instagram. Kenapa?</p>
<ul>
<li><strong>Mudah Dipelajari:</strong> Aturannya tidak rumit. Kamu bisa lebih fokus memecahkan masalah daripada pusing memikirkan titik koma (;).</li>
<li><strong>Sangat Populer:</strong> Komunitasnya sangat besar. Jika kamu error atau bingung, jutaan jawaban sudah tersedia di internet.</li>
<li><strong>Serba Bisa:</strong> Bisa untuk membuat web, game, kecerdasan buatan (AI), analisis data, hingga meretas sistem keamanan.</li>
</ul>

<h2>Instalasi Python</h2>
<p>Untuk menjalankan Python di komputermu, kamu harus mengunduh "penerjemah" Python dari situs resminya di <code>python.org</code> dan menginstalnya. Jika tidak ingin menginstal, kamu juga bisa menggunakan platform online seperti Google Colab.</p>

<h3>Program Pertama: Tradisi Programmer</h3>
<p>Setiap programmer yang belajar bahasa baru pasti akan membuat program yang mencetak kalimat "Hello, World!". Di Python, ini sangat mudah:</p>
<pre><code class="language-python"># Baris yang diawali tanda '#' adalah komentar. Komputer akan mengabaikannya.
# Kita menggunakan fungsi print() untuk menyuruh Python menampilkan teks.
print("Hello, World!")
print("Selamat datang di Selalu Ngoding!")</code></pre>
`
  },
  {
    id: 1, title: "Variabel dan Tipe Data", icon: "📦", difficulty: "Pemula", duration: "20 menit",
    desc: "Memahami variabel, tipe data dasar, dan type casting di Python.",
    content: `
<h2>Apa itu Variabel?</h2>
<p>Bayangkan <strong>Variabel</strong> sebagai sebuah kotak kosong. Kamu bisa memasukkan barang ke dalam kotak tersebut, lalu menempelkan label nama di luarnya agar mudah dicari nanti. Di dalam pemrograman, "barang" itu adalah data, dan "label nama" itu adalah nama variabel.</p>

<p>Di bahasa pemrograman lain, kamu seringkali harus memberi tahu komputer ukuran kotaknya (apakah untuk benda cair, padat, dll). Namun di Python, kotaknya ajaib! Dia akan otomatis menyesuaikan diri dengan benda apa pun yang kamu masukkan.</p>

<pre><code class="language-python"># Kita membuat kotak bernama 'nama' dan mengisinya dengan teks "Selalu Ngoding"
nama = "Selalu Ngoding"

# Kita membuat kotak bernama 'umur' dan mengisinya dengan angka 25
umur = 25

print(nama)  # Python akan membuka kotak 'nama' dan menampilkan isinya
</code></pre>

<h2>Tipe Data: Jenis Barang dalam Kotak</h2>
<p>Komputer mengkategorikan data ke dalam beberapa tipe dasar. Ini penting karena komputer memperlakukan angka dan teks dengan cara berbeda (kamu tidak bisa menambahkan teks "Apel" dengan "Jeruk" secara matematika, kan?).</p>
<ul>
<li><code>Integer (int)</code> — Bilangan bulat, tanpa koma. Contoh: <code>42</code>, <code>-10</code>, <code>1000</code></li>
<li><code>Float</code> — Bilangan desimal. Python menggunakan titik (.) bukan koma (,). Contoh: <code>3.14</code>, <code>0.5</code></li>
<li><code>String (str)</code> — Teks. Harus selalu dibungkus dengan tanda kutip ('' atau ""). Contoh: <code>"Hello"</code>, <code>'Python'</code></li>
<li><code>Boolean (bool)</code> — Hanya memiliki dua nilai: Benar (<code>True</code>) atau Salah (<code>False</code>). Sangat berguna untuk logika.</li>
</ul>

<h2>Type Casting (Mengubah Bentuk)</h2>
<p>Kadang, angka bisa menyamar menjadi teks, misalnya saat kita menerima ketikan dari pengguna. Kita bisa menggunakan ilmu sihir untuk mengubah teks menjadi angka beneran.</p>
<pre><code class="language-python"># Awalnya "100" adalah teks (String), bukan angka.
angka_teks = "100"

# Kita ubah menjadi angka bulat (Integer)
angka_asli = int(angka_teks)

# Sekarang kita bisa menjumlahkannya!
print(angka_asli + 50)  # Outputnya: 150
</code></pre>

<div class="info-box"><p>💡 Tips: Jika ragu barang apa yang ada di dalam kotak, gunakan fungsi <code>type(nama_variabel)</code> untuk bertanya kepada Python tipe datanya.</p></div>
`
  },
  {
    id: 2, title: "Operator", icon: "➕", difficulty: "Pemula", duration: "18 menit",
    desc: "Operator aritmatika, perbandingan, logika, dan assignment di Python.",
    content: `
<h2>Mengenal Operator</h2>
<p>Dalam bahasa pemrograman, <strong>Operator</strong> adalah simbol-simbol khusus yang memerintahkan komputer untuk melakukan aksi, seperti matematika atau membandingkan dua buah benda.</p>

<h2>1. Operator Aritmatika (Matematika)</h2>
<p>Ini persis seperti kalkulator yang sering kamu gunakan. Python bisa melakukan perhitungan rumit dalam sekejap mata.</p>
<pre><code class="language-python">a = 10
b = 3

print(a + b)   # Tambah: 13
print(a - b)   # Kurang: 7
print(a * b)   # Kali: 30
print(a / b)   # Bagi (hasil desimal): 3.3333...

# Operator Spesial Python
print(a // b)  # Pembagian Bulat: 3 (buang angka di belakang koma)
print(a % b)   # Modulus (Sisa Bagi): 1 (10 dibagi 3 itu 9, sisanya 1)
print(a ** b)  # Pangkat: 1000 (10 pangkat 3)
</code></pre>

<h2>2. Operator Perbandingan (Tanya Jawab)</h2>
<p>Operator ini selalu menghasilkan nilai kebenaran: <code>True</code> (Benar) atau <code>False</code> (Salah). Seperti hakim yang memutus perkara.</p>
<pre><code class="language-python">x = 5
y = 10

print(x == y)  # Apakah x SAMA DENGAN y? -> False
print(x != y)  # Apakah x TIDAK SAMA DENGAN y? -> True
print(x < y)   # Apakah x LEBIH KECIL dari y? -> True
print(x > y)   # Apakah x LEBIH BESAR dari y? -> False
</code></pre>

<h2>3. Operator Logika (Detektif)</h2>
<p>Ini digunakan ketika kamu memiliki lebih dari satu pertanyaan dan ingin menggabungkannya.</p>
<ul>
<li><code>and</code> : Akan menghasilkan <code>True</code> HANYA JIKA semua kondisi benar. (Contoh: Syarat beasiswa adalah "Nilai bagus" AND "Berkelakuan baik").</li>
<li><code>or</code> : Akan menghasilkan <code>True</code> JIKA SALAH SATU kondisi benar. (Contoh: Boleh masuk jika "Punya tiket" OR "Tamu undangan").</li>
<li><code>not</code> : Membalikkan keadaan. Yang benar jadi salah, yang salah jadi benar.</li>
</ul>
<pre><code class="language-python">punya_tiket = True
bawa_makanan_luar = False

# Bisa masuk konser?
print(punya_tiket and not bawa_makanan_luar)  # Output: True
</code></pre>
`
  },
  {
    id: 3, title: "Input dan Output", icon: "⌨️", difficulty: "Pemula", duration: "15 menit",
    desc: "Cara menerima input user dan menampilkan output di Python.",
    content: `
<h2>Bicara dengan Komputer</h2>
<p>Program yang bagus tidak hanya diam, tetapi juga berinteraksi dengan penggunanya. Di Python, ada dua pintu utama untuk interaksi: <strong>Output</strong> (komputer berbicara pada kita) dan <strong>Input</strong> (kita berbicara pada komputer).</p>

<h2>Output: Fungsi print()</h2>
<p>Kita sudah menggunakan ini sebelumnya. <code>print()</code> adalah cara Python untuk memunculkan pesan ke layar. Ada cara elegan untuk menyisipkan variabel ke dalam teks, yaitu dengan huruf <strong>f</strong> di depan tanda kutip (disebut f-string).</p>

<pre><code class="language-python">nama = "Budi"
umur = 25

# Cara lama (ribet karena pakai koma/plus)
print("Nama saya", nama, "dan umur saya", umur)

# Cara modern dan mudah dibaca (f-string)
print(f"Nama saya {nama} dan umur saya {umur} tahun.")
</code></pre>

<h2>Input: Mendengarkan Pengguna</h2>
<p>Fungsi <code>input()</code> akan menghentikan sementara program kamu, memunculkan kursor berkedip, dan menunggu sampai kamu mengetik sesuatu di keyboard dan menekan tombol Enter.</p>

<pre><code class="language-python">nama_kamu = input("Halo! Siapa namamu? ")
print(f"Salam kenal, {nama_kamu}!")
</code></pre>

<h3>Hati-Hati dengan Input Angka!</h3>
<p>Ingat konsep kotak tadi? Fungsi <code>input()</code> selalu membungkus hasil ketikanmu dalam bentuk <strong>Teks (String)</strong>. Meskipun kamu mengetik angka 10, komputer melihatnya sebagai kata "10". Jadi, jika kamu ingin menghitung matematika, jangan lupa gunakan sihir type casting (<code>int()</code> atau <code>float()</code>).</p>

<pre><code class="language-python"># Tanpa int(), ini akan error jika kita kalikan!
harga_str = input("Masukkan harga barang: ")
harga = int(harga_str)

jumlah_str = input("Beli berapa banyak? ")
jumlah = int(jumlah_str)

total = harga * jumlah
print(f"Total yang harus dibayar: Rp {total}")
</code></pre>
`
  },
  {
    id: 4, title: "Percabangan", icon: "🔀", difficulty: "Pemula", duration: "20 menit",
    desc: "Struktur if, elif, else dan pengambilan keputusan dalam program.",
    content: `
<h2>Pengambilan Keputusan (If-Else)</h2>
<p>Dalam hidup, kita sering dihadapkan pada pilihan: <em>"Jika hari ini hujan, saya bawa payung. Jika tidak, saya bawa kacamata hitam."</em> Komputer juga harus diajari cara mengambil keputusan yang sama menggunakan <strong>Percabangan</strong>.</p>

<p>Python menggunakan kata kunci <code>if</code> (Jika), <code>elif</code> (Jika lainnya), dan <code>else</code> (Selain itu).</p>

<pre><code class="language-python">cuaca = "hujan"

if cuaca == "hujan":
    print("Jangan lupa bawa payung!")
elif cuaca == "panas":
    print("Pakai kacamata hitam!")
else:
    print("Bawa jaket saja untuk jaga-jaga.")
</code></pre>

<h3>Indentasi: Hal Paling Penting di Python!</h3>
<p>Perhatikan bahwa perintah <code>print()</code> letaknya menjorok ke kanan (ditambah spasi/tab). Ini disebut <strong>Indentasi</strong>. Di bahasa lain, blok program ditandai dengan kurung kurawal <code>{}</code>, tapi Python menggunakan spasi kosong agar kode terlihat sangat rapi. Jika kamu lupa memberikan spasi, programmu akan ERROR!</p>

<h2>Percabangan Bersarang (Nested If)</h2>
<p>Terkadang, setelah mengambil satu keputusan, kita dihadapkan pada pertanyaan baru. Bayangkan penjaga bioskop yang mengecek dua hal: tiket dan umur.</p>

<pre><code class="language-python">punya_tiket = True
umur = 15

if punya_tiket:
    # Cek tahap kedua
    if umur >= 17:
        print("Silakan masuk, nikmati filmnya.")
    else:
        print("Maaf, film ini untuk penonton dewasa (17+).")
else:
    print("Kamu harus beli tiket dulu!")
</code></pre>
`
  },
  {
    id: 5, title: "Perulangan", icon: "🔄", difficulty: "Pemula", duration: "25 menit",
    desc: "Loop for dan while untuk mengulang eksekusi kode.",
    content: `
<h2>Kekuatan Utama Komputer: Looping</h2>
<p>Bayangkan bosmu menyuruhmu menulis kalimat "Saya berjanji tidak akan terlambat" sebanyak 100 kali. Sebagai manusia, kamu pasti capek. Tapi bagi komputer, itu adalah hal yang sangat sepele. Kita menyuruh komputer mengulang pekerjaan menggunakan <strong>Perulangan (Looping)</strong>.</p>

<h2>1. For Loop: Ulangan Terjadwal</h2>
<p>Gunakan <code>for</code> jika kamu <strong>sudah tahu dengan pasti berapa kali</strong> kamu ingin mengulang. Fungsi <code>range()</code> sering jadi teman setia for loop untuk menentukan batasan angkanya.</p>

<pre><code class="language-python"># Mencetak angka 0 sampai 4 (5 angka)
for angka in range(5):
    print(f"Hitungan ke-{angka}")

print("Selesai!")
</code></pre>
<div class="info-box"><p>💡 Perlu diingat, di dunia pemrograman, kita hampir selalu mulai berhitung dari angka 0, bukan 1!</p></div>

<h2>2. While Loop: Ulang Terus Selama...</h2>
<p>Gunakan <code>while</code> (selama) jika kamu <strong>tidak tahu pasti berapa kali</strong> harus diulang, tetapi kamu tahu persis kapan harus berhenti. Ia akan terus berputar layaknya kincir air selama kondisinya masih True.</p>

<pre><code class="language-python">baterai = 100

# Selama baterai lebih dari 0, HP tetap menyala
while baterai > 0:
    print(f"HP menyala. Baterai: {baterai}%")
    baterai -= 20  # Baterai berkurang 20 setiap putaran

print("Baterai habis, HP mati.")
</code></pre>

<h2>Tombol Darurat: Break dan Continue</h2>
<ul>
<li><code>break</code>: Langsung hancurkan perulangan sekarang juga! (Seperti menekan tombol darurat eskalator).</li>
<li><code>continue</code>: Lompati putaran saat ini saja, dan langsung lanjut ke putaran berikutnya. (Seperti melewati satu lagu di playlist).</li>
</ul>
`
  },
  {
    id: 6, title: "Fungsi", icon: "⚙️", difficulty: "Menengah", duration: "25 menit",
    desc: "Membuat dan menggunakan fungsi untuk kode yang modular.",
    content: `
<h2>Mengapa Kita Butuh Fungsi?</h2>
<p>Bayangkan kamu bekerja di restoran pembuat burger. Daripada kamu harus mengingat dan merakit 10 urutan dari nol setiap kali ada pesanan burger, bosmu membuatkan mesin bernama "Bikin Burger". Kamu cukup menekan tombolnya, dan mesin itu bekerja. Mesin itu disebut <strong>Fungsi</strong>.</p>

<p>Fungsi memungkinkan kita mengelompokkan blok kode, memberinya nama, dan memanggilnya kapan saja kita butuh tanpa harus menulis ulang kodenya. Ini membuat program kita bersih dan teratur (modular).</p>

<h2>Mendefinisikan Fungsi (def)</h2>
<p>Kita menggunakan kata kunci <code>def</code> (define/mendefinisikan) untuk membuat mesin baru.</p>

<pre><code class="language-python"># Membuat mesin (Fungsi) bernama 'sapa_user'
def sapa_user():
    print("Halo! Selamat datang di program kami.")
    print("Semoga harimu menyenangkan!")

# Memakai mesin tersebut (bisa berkali-kali!)
sapa_user()
sapa_user()
</code></pre>

<h2>Parameter dan Argumen (Bahan Baku)</h2>
<p>Mesin burger akan lebih hebat jika kita bisa memasukkan daging ayam atau sapi sesuai keinginan. Kita bisa menyisipkan "bahan baku" ke dalam fungsi, yang disebut <strong>Parameter</strong>.</p>

<pre><code class="language-python">def buat_jus(buah):
    print(f"Memasukkan {buah} ke dalam blender...")
    print(f"Jus {buah} siap dihidangkan! 🍹")

# Saat memanggil, kita berikan "Argumen"
buat_jus("Mangga")
buat_jus("Alpukat")
</code></pre>

<h2>Return (Hasil yang Dibawa Pulang)</h2>
<p>Fungsi <code>print()</code> hanya menampilkan tulisan ke layar. Namun jika kamu butuh fungsi matematika yang memberikan hasil akhir untuk disimpan ke dalam variabel, gunakan kata kunci <code>return</code>.</p>

<pre><code class="language-python">def luas_persegi(sisi):
    hasil = sisi * sisi
    return hasil  # Mengembalikan nilai agar bisa disimpan

# Simpan hasilnya ke dalam variabel
luas_kamar = luas_persegi(5)
print(f"Luas kamarku adalah {luas_kamar} meter persegi.")
</code></pre>
`
  },
  {
    id: 7, title: "List", icon: "📋", difficulty: "Menengah", duration: "22 menit",
    desc: "Struktur data list, operasi, dan method-method penting.",
    content: `
<h2>Rak Laci Ajaib (List)</h2>
<p>Sebelumnya kita belajar bahwa satu <em>Variabel</em> (kotak) menyimpan satu barang. Bagaimana jika kita punya 100 daftar absen siswa? Masa kita buat 100 kotak? Sangat tidak efisien!</p>

<p>Gunakan <strong>List</strong>. Bayangkan List sebagai laci bersusun yang panjang. Kita bisa memasukkan banyak barang sekaligus ke dalam satu lemari (variabel), dan setiap laci diberi nomor urut.</p>

<pre><code class="language-python"># Membuat list nama-nama buah (menggunakan kurung siku [])
buah = ["Apel", "Jeruk", "Mangga", "Pisang"]

# Mengambil barang dari laci nomor 0 (ingat, Python mulai dari 0!)
print(buah[0])  # Output: Apel

# Mengambil barang dari laci terakhir (gunakan minus)
print(buah[-1]) # Output: Pisang
</code></pre>

<h2>Mengelola Isi List (Method)</h2>
<p>List sangat fleksibel. Kamu bisa menambah, menghapus, atau mengurutkan isinya kapan saja.</p>

<pre><code class="language-python">angka = [3, 1, 4]

# Menambah barang di paling belakang
angka.append(9)      # Jadi: [3, 1, 4, 9]

# Menyisipkan barang di posisi ke-0 (paling depan)
angka.insert(0, 5)   # Jadi: [5, 3, 1, 4, 9]

# Menghapus barang tertentu
angka.remove(1)      # Jadi: [5, 3, 4, 9]

# Mengurutkan dari kecil ke besar
angka.sort()         # Jadi: [3, 4, 5, 9]

print(angka)
</code></pre>

<div class="info-box"><p>💡 List bisa berisi tipe data campuran lho! <code>data_acak = ["Halo", 42, 3.14, True]</code> adalah list yang sangat valid di Python.</p></div>
`
  },
  {
    id: 8, title: "Tuple", icon: "🔒", difficulty: "Menengah", duration: "15 menit",
    desc: "Tuple: koleksi data yang tidak bisa diubah (immutable).",
    content: `
<h2>Tuple: Saudara Kembar List yang Terkunci</h2>
<p><strong>Tuple</strong> sangat mirip dengan List. Ia juga merupakan laci bersusun yang memiliki nomor urut index. Bedanya hanya satu: <strong>Tuple tidak bisa diubah setelah dibuat!</strong> (Immutable).</p>

<p>Bayangkan List seperti buku catatan pensil yang bisa dihapus dan ditulis ulang. Sedangkan Tuple seperti tulisan yang sudah dipahat di batu prasasti. Sekali dicetak, abadi selamanya.</p>

<pre><code class="language-python"># Tuple dibuat dengan kurung biasa ()
koordinat = (10, 20)

print(koordinat[0])  # Output: 10

# JIKA kita coba ubah isinya, PYTHON AKAN MARAH (ERROR!)
# koordinat[0] = 50  <-- Ini akan menghasilkan TypeError
</code></pre>

<h2>Kapan Menggunakan Tuple?</h2>
<p>Mungkin kamu berpikir, <em>"Kalau tidak bisa diubah, buat apa dipakai?"</em></p>
<ol>
<li><strong>Keamanan Data:</strong> Untuk data yang haram hukumnya berubah secara tak sengaja, seperti koordinat rumah sakit, hari dalam seminggu, atau PIN.</li>
<li><strong>Kecepatan:</strong> Karena ukurannya pasti dan terkunci, komputer memproses Tuple lebih cepat daripada List.</li>
<li><strong>Tuple Unpacking:</strong> Ini fitur keren Python untuk membongkar isi tuple ke beberapa variabel sekaligus.</li>
</ol>

<pre><code class="language-python"># Tuple Unpacking (Membongkar isi)
data_siswa = ("Budi", "Informatika", 3.8)

nama, jurusan, ipk = data_siswa

print(f"Nama: {nama}")
print(f"Jurusan: {jurusan}")
</code></pre>
`
  },
  {
    id: 9, title: "Dictionary", icon: "📖", difficulty: "Menengah", duration: "22 menit",
    desc: "Dictionary untuk menyimpan data key-value pair.",
    content: `
<h2>Kamus Data Python (Dictionary)</h2>
<p>Jika List menggunakan nomor urut (0, 1, 2) untuk menemukan barang, maka <strong>Dictionary</strong> (kamus) menggunakan <strong>Kata Kunci (Key)</strong> untuk mencari maknanya (Value).</p>

<p>Bayangkan kamu sedang melihat kontak di HP. Kamu mencari nama "Budi" (Key), lalu HP memunculkan nomor teleponnya (Value). Ini persis seperti cara kerja Dictionary!</p>

<pre><code class="language-python"># Dibuat menggunakan kurung kurawal {}
kontak = {
    "Budi": "0812-xxxx",
    "Siti": "0857-xxxx",
    "Andi": "0898-xxxx"
}

# Cara memanggilnya, sebutkan Key-nya!
print(kontak["Budi"])  # Output: 0812-xxxx
</code></pre>

<h2>Modifikasi Dictionary</h2>
<p>Menambah atau mengubah data di dalam kamus ini sangatlah mudah.</p>

<pre><code class="language-python">biodata = {"nama": "Ahmad", "umur": 20}

# Menambah info baru
biodata["hobi"] = "Ngoding"

# Mengubah data yang sudah ada
biodata["umur"] = 21

print(biodata) 
# Hasil: {'nama': 'Ahmad', 'umur': 21, 'hobi': 'Ngoding'}
</code></pre>

<div class="info-box"><p>💡 Perhatian: Di dalam Dictionary, sebuah Key (kata kunci) harus unik dan tidak boleh ada dua nama key yang sama persis.</p></div>
`
  },
  {
    id: 10, title: "Set", icon: "🎯", difficulty: "Menengah", duration: "15 menit",
    desc: "Set: koleksi data unik tanpa duplikat.",
    content: `
<h2>Set: Klub Eksklusif (Tidak Boleh Ada Kembaran)</h2>
<p>Pernahkah kamu menyaring data dan bingung karena ada banyak data yang ganda (duplikat)? Di situlah <strong>Set</strong> menjadi pahlawan.</p>

<p>Set adalah tas belanja ajaib. Jika kamu memasukkan 5 buah apel yang bentuknya sama persis ke dalam tas ini, yang tersimpan di dalam hanyalah 1 buah apel. Set <strong>menjamin tidak ada data duplikat</strong>.</p>

<pre><code class="language-python"># Membuat Set (pakai kurung kurawal, tapi tanpa titik dua seperti dictionary)
angka = {1, 2, 2, 3, 3, 3, 4}

print(angka)  
# Output: {1, 2, 3, 4} (semua angka kembar dimusnahkan secara otomatis!)
</code></pre>

<h2>Operasi Himpunan Matematika</h2>
<p>Karena konsepnya berasal dari Himpunan Matematika (Venn Diagram), Set memiliki operator ajaib untuk mencari persimpangan antar dua kelompok.</p>

<pre><code class="language-python">grup_A = {"Budi", "Andi", "Siti"}
grup_B = {"Siti", "Joko", "Andi"}

# Intersection (&) : Siapa yang ikut grup A sekaligus grup B?
print(grup_A & grup_B)  # Output: {'Siti', 'Andi'}

# Union (|) : Gabungkan semua anggota (yang sama tidak dihitung dua kali)
print(grup_A | grup_B)  # Output: {'Budi', 'Joko', 'Andi', 'Siti'}

# Difference (-) : Anggota grup A yang BUKAN anggota grup B
print(grup_A - grup_B)  # Output: {'Budi'}
</code></pre>
`
  },
  {
    id: 11, title: "String", icon: "✏️", difficulty: "Menengah", duration: "20 menit",
    desc: "Manipulasi string dan method-method string penting.",
    content: `
<h2>Seni Mengolah Teks (String)</h2>
<p>Dalam dunia pemrograman web, bot telegram, atau pengolah data, kamu akan sangat sering bertemu dengan teks (String). Python menyediakan "alat pemotong dan perias" yang luar biasa canggih untuk teks.</p>

<p>Setiap String di Python sebenarnya adalah sebuah obyek yang dilengkapi fungsi bawaan rahasia (disebut Method).</p>

<h2>Membersihkan dan Merapikan Teks</h2>
<p>Terkadang pengguna salah mengetik huruf besar/kecil atau menekan spasi berlebihan.</p>

<pre><code class="language-python">teks_kotor = "   BeLaJaR PyThOn iTu mUdAh!   "

# Menghapus spasi gaib di awal dan akhir teks
bersih = teks_kotor.strip()  

# Mengubah semua huruf jadi kecil
huruf_kecil = bersih.lower() 

# Mengubah semua huruf jadi BESAR
huruf_besar = bersih.upper() 

# Merapikan (Huruf pertama kapital, sisanya kecil)
huruf_title = bersih.title() 

print(huruf_title)  # Output: Belajar Python Itu Mudah!
</code></pre>

<h2>Memecah dan Menggabungkan Teks</h2>
<p>Misalnya kita punya kalimat panjang dan ingin mengambil per-kata saja.</p>

<pre><code class="language-python">kalimat = "Apel, Jeruk, Mangga"

# Memecah berdasarkan koma, lalu disimpan jadi List
buah_list = kalimat.split(", ")
print(buah_list)  # ['Apel', 'Jeruk', 'Mangga']

# Menggabungkan list kembali menjadi teks pakai pemisah '-'
gabung = " - ".join(buah_list)
print(gabung)  # "Apel - Jeruk - Mangga"
</code></pre>
`
  },
  {
    id: 12, title: "File Handling", icon: "📁", difficulty: "Menengah", duration: "20 menit",
    desc: "Membaca dan menulis file di Python.",
    content: `
<h2>Menulis ke Buku Catatan Komputer</h2>
<p>Sejauh ini, semua data yang kita buat di Python akan <strong>hilang/menguap</strong> begitu komputer direstart atau program ditutup. Kenapa? Karena data itu disimpan sementara di RAM.</p>
<p>Agar data hidup selamanya, kita harus menuliskannya ke dalam Harddisk/SSD sebagai sebuah File (.txt, .csv, dll).</p>

<h2>Membuka dan Menulis File</h2>
<p>Kita menggunakan fungsi <code>open()</code> dengan mode huruf tertentu: <strong>'w'</strong> (Write/Menimpa) atau <strong>'a'</strong> (Append/Melanjutkan).</p>

<pre><code class="language-python"># Menulis (w). Hati-hati, mode 'w' akan menghapus isi lama!
with open("buku_tamu.txt", "w") as file:
    file.write("Budi hadir!\\n")

# Menambah (a). Mode 'a' (append) menambahkan teks di baris bawahnya.
with open("buku_tamu.txt", "a") as file:
    file.write("Siti juga hadir!\\n")
</code></pre>

<div class="info-box"><p>💡 Perhatikan penggunaan kata <code>with</code>. Ini adalah cara elegan di Python agar kita tidak perlu repot-repot mengetik <code>file.close()</code>. Saat blok kode habis, Python akan otomatis "menutup kembali" file tersebut.</p></div>

<h2>Membaca File (Mode 'r')</h2>
<p>Sekarang mari kita baca apa yang sudah kita tulis tadi menggunakan mode <strong>'r'</strong> (Read).</p>

<pre><code class="language-python">with open("buku_tamu.txt", "r") as file:
    isi = file.read() # Membaca seluruh isi buku sekaligus
    print("Isi Buku Tamu:")
    print(isi)
</code></pre>
`
  },
  {
    id: 13, title: "OOP Python", icon: "🏗️", difficulty: "Lanjutan", duration: "35 menit",
    desc: "Object-Oriented Programming: class, object, inheritance, dan encapsulation.",
    content: `
<h2>Apa itu Pemrograman Berbasis Obyek (OOP)?</h2>
<p>Bayangkan kamu ingin memproduksi mobil. Apakah kamu akan membangun kerangka, ban, dan mesinnya dari nol tanpa panduan setiap kali pesanan datang? Tentu tidak! Pabrik membuat sebuah <strong>Blue Print (Cetak Biru/Desain)</strong> mobil. Dari desain tunggal ini, pabrik bisa mencetak ribuan mobil dengan warna yang berbeda.</p>

<p>Dalam OOP (Object-Oriented Programming):</p>
<ul>
<li><strong>Class</strong> adalah Blue Print/Cetak Biru.</li>
<li><strong>Object</strong> adalah mobil sungguhan yang sudah jadi.</li>
</ul>

<h2>Membuat Class Pertama Kita</h2>
<pre><code class="language-python"># Membuat Blue Print (Class) bernama Kucing
class Kucing:
    # Fungsi __init__ adalah saat "Kucing lahir", apa data awalnya?
    def __init__(self, nama, warna):
        self.nama = nama
        self.warna = warna

    # Kemampuan/Aksi dari Kucing
    def mengeong(self):
        print(f"{self.nama} bilang: Miaaawww!")

# Membuat Object (Melahirkan kucing nyata dari desain di atas)
kucing_1 = Kucing("Milo", "Oren")
kucing_2 = Kucing("Luna", "Hitam")

# Memanggil nama dan kemampuannya
print(kucing_1.warna) # Output: Oren
kucing_2.mengeong()   # Output: Luna bilang: Miaaawww!
</code></pre>

<h2>Inheritance (Pewarisan)</h2>
<p>Anak mewarisi sifat orang tuanya. Class yang baru juga bisa mewarisi kemampuan dari Class lama tanpa harus menulis kode dari nol.</p>
<pre><code class="language-python"># Robot adalah Class utama
class Robot:
    def jalan(self):
        print("Maju 1 langkah..")

# RobotTempur MEWARISI semua kemampuan Robot
class RobotTempur(Robot):
    def tembak(self):
        print("DOR! Laser ditembakkan!")

r2d2 = RobotTempur()
r2d2.jalan()  # Ia bisa jalan (warisan dari ortu)
r2d2.tembak() # Ia juga bisa menembak (kemampuannya sendiri)
</code></pre>
`
  },
  {
    id: 14, title: "Database SQLite", icon: "🗄️", difficulty: "Lanjutan", duration: "30 menit",
    desc: "Membuat dan mengelola database SQLite dengan Python.",
    content: `
<h2>Lemari Arsip Super Rapi (Database)</h2>
<p>Menyimpan data di file teks (<code>.txt</code>) memang bisa, tapi bayangkan mencari satu baris nama dari sejuta baris teks. Sangat lambat dan berantakan! Untuk aplikasi nyata (seperti sistem kasir atau absensi sekolah), kita menyimpan data di sebuah <strong>Database (Pangkalan Data)</strong> berbentuk tabel (baris & kolom) seperti Excel.</p>

<p>Python punya "baterai bawaan" bernama <strong>SQLite</strong>. Ia adalah database sungguhan, ringan, dan tidak perlu diinstal server terpisah.</p>

<h2>Membangun Tabel Data (Create)</h2>
<pre><code class="language-python">import sqlite3

# Membuka koneksi (Jika file sekolah.db belum ada, akan otomatis dibuatkan)
conn = sqlite3.connect("sekolah.db")
kursor = conn.cursor() # Kursor adalah tangan robot kita

# Perintah SQL untuk membuat tabel Siswa
kursor.execute('''
    CREATE TABLE IF NOT EXISTS Siswa (
        id INTEGER PRIMARY KEY,
        nama TEXT,
        nilai INTEGER
    )
''')
conn.commit() # Jangan lupa simpan perubahan!
</code></pre>

<h2>Memasukkan & Membaca Data (CRUD)</h2>
<pre><code class="language-python"># CREATE: Menambah Siswa Baru
kursor.execute("INSERT INTO Siswa (nama, nilai) VALUES ('Andi', 90)")
kursor.execute("INSERT INTO Siswa (nama, nilai) VALUES ('Siti', 85)")
conn.commit()

# READ: Mengambil dan Menampilkan Semua Siswa
print("Daftar Siswa:")
kursor.execute("SELECT * FROM Siswa")
for baris in kursor.fetchall():
    print(baris)

# Selesai, kita tutup koneksinya
conn.close()
</code></pre>
`
  },
  {
    id: 15, title: "Web Scraping", icon: "🌐", difficulty: "Lanjutan", duration: "30 menit",
    desc: "Mengambil data dari website menggunakan BeautifulSoup.",
    content: `
<h2>Apa itu Web Scraping?</h2>
<p>Pernahkah kamu butuh menyalin data harga tiket pesawat atau klasemen bola dari suatu website? Kalau halamannya sedikit, kamu bisa copy-paste manual. Tapi kalau halamannya ratusan? Kamu butuh asisten otomatis.</p>

<p><strong>Web Scraping</strong> adalah proses mengirim robot (skrip Python) ke suatu website, membaca struktur HTML halamannya, dan menyedot data-data spesifik yang kamu inginkan secara otomatis dalam hitungan detik.</p>

<h2>Alat Perang: Requests dan BeautifulSoup</h2>
<p>Di Python, ada dua *library* terpopuler yang wajib diinstal (<code>pip install requests beautifulsoup4</code>) untuk tugas ini:</p>
<ol>
<li><strong>Requests:</strong> Tukang pos. Ia pergi ke alamat website dan mengambil kode HTML mentah kembali ke komputermu.</li>
<li><strong>BeautifulSoup:</strong> Koki. Ia memotong-motong HTML mentah yang berantakan itu dan menyaring isinya (contoh: "Saya cuma mau ngambil isi dari tag &lt;h1&gt;").</li>
</ol>

<h2>Contoh Praktek Mengekstrak Judul Web</h2>
<pre><code class="language-python">import requests
from bs4 import BeautifulSoup

# 1. Tukang Pos mengetuk alamat web
url = "https://example.com"
respon = requests.get(url)

# 2. Sang koki membedah HTML
soup = BeautifulSoup(respon.text, "html.parser")

# 3. Mencari spesifik elemen HTML (Misal mengambil tag <title>)
judul = soup.find("title").text
print(f"Judul website tersebut adalah: {judul}")

# Atau mau mengambil semua link (tag <a>)?
semua_link = soup.find_all("a")
for link in semua_link:
    print(link.get("href"))
</code></pre>

<div class="info-box"><p>⚠️ Peringatan Etika: Jangan serakah saat melakukan scraping. Jika robotmu meminta data ke server web 1000 kali dalam sedetik, server web tersebut bisa "ngambek" (mati) dan IP internetmu akan diblokir.</p></div>
`
  },
  {
    id: 16, title: "API Python", icon: "🔌", difficulty: "Lanjutan", duration: "25 menit",
    desc: "Menggunakan dan membuat REST API dengan Python.",
    content: `
<h2>API: Pelayan Restoran Digital</h2>
<p>Bayangkan kamu sedang di restoran. Kamu (Aplikasi) melihat menu dan ingin memesan makanan, tapi kamu tidak boleh sembarangan masuk ke Dapur (Server Database). Untuk itulah ada Pelayan (API). Kamu memberitahu pesananmu ke Pelayan, Pelayan membawanya ke Dapur, lalu Pelayan kembali membawa makananmu.</p>

<p><strong>API (Application Programming Interface)</strong> adalah cara komputer satu "mengobrol" dengan komputer lainnya di internet. Lewat API, kamu bisa mengambil data harga kripto, memunculkan cuaca BMKG, atau berinteraksi dengan AI ChatGPT.</p>

<h2>Meminta Data dari API (Metode GET)</h2>
<p>Bahasa universal yang digunakan oleh API modern untuk menjawab panggilan adalah format <strong>JSON</strong> (bentuknya sangat mirip Dictionary di Python).</p>

<pre><code class="language-python">import requests

# Mengambil data profil GitHub Python
url = "https://api.github.com/users/python"
respon = requests.get(url)

# Mengubah respon JSON menjadi Dictionary Python
data = respon.json()

print(f"Nama Akun: {data['name']}")
print(f"Jumlah Follower: {data['followers']}")
print(f"Bio: {data['bio']}")
</code></pre>

<h2>Mengirim Data ke API (Metode POST)</h2>
<p>Jika GET adalah "meminta", maka POST adalah "mengirim", seperti mengunggah gambar atau mengisi form pendaftaran.</p>
<pre><code class="language-python">url = "https://httpbin.org/post"
data_kiriman = {"nama": "Ahmad", "kota": "Jakarta"}

respon = requests.post(url, json=data_kiriman)
print(respon.status_code) # 200 berarti Sukses!
</code></pre>
`
  },
  {
    id: 17, title: "Automasi Python", icon: "🤖", difficulty: "Lanjutan", duration: "30 menit",
    desc: "Mengautomasi tugas-tugas berulang dengan Python.",
    content: `
<h2>Selamat Tinggal Pekerjaan Membosankan!</h2>
<p>Apakah pekerjaan utamamu mengharuskanmu mengganti nama 500 file foto satu persatu setiap pagi? Atau mengirim laporan email ke 20 orang setiap jam 5 sore? <strong>Jangan lakukan itu dengan tanganmu!</strong></p>

<p>Python adalah raja dalam hal Automasi Skrip. Kamu bisa membuat robot kecil yang bekerja memindahkan file, mengisi Excel, bahkan mengklik browser dengan sangat cepat.</p>

<h2>Contoh 1: Mengubah Nama Ratusan File Sekaligus</h2>
<p>Gunakan modul <code>os</code> untuk menelusuri folder komputer.</p>
<pre><code class="language-python">import os

folder = "C:/dokumen_laporan"
# Menampilkan semua isi folder
for urutan, nama_file in enumerate(os.listdir(folder)):
    if nama_file.endswith(".txt"):
        nama_baru = f"Laporan_Resmi_{urutan}.txt"
        
        # Eksekusi Rename File
        os.rename(
            os.path.join(folder, nama_file), 
            os.path.join(folder, nama_baru)
        )
        print(f"Mengubah nama {nama_file} menjadi {nama_baru}")
</code></pre>

<h2>Ide Automasi Seru Lainnya yang Bisa Kamu Buat:</h2>
<ul>
<li><strong>Selenium:</strong> Membuka browser Chrome otomatis, login otomatis ke web, dan memencet tombol-tombol.</li>
<li><strong>PyAutoGUI:</strong> Menggerakkan kursor mouse-mu secara otomatis untuk mengklik hal-hal di layar dekstop.</li>
<li><strong>Pandas:</strong> Menggabungkan 10 file Excel berantakan menjadi satu file laporan ringkas dalam waktu 3 detik.</li>
</ul>
`
  },
  {
    id: 18, title: "Proyek Akhir", icon: "🏆", difficulty: "Lanjutan", duration: "60 menit",
    desc: "Proyek akhir: menggabungkan semua pemahaman dari dasar hingga mahir.",
    content: `
<h2>Saatnya Membuktikan Kemampuanmu!</h2>
<p>Membaca teori dan mencoba contoh kode kecil itu penting. Namun, rahasia menjadi seorang programmer sejati adalah <strong>membangun sesuatu dari awal hingga akhir</strong>.</p>

<p>Sepanjang 18 materi ini, kamu telah menabung berbagai balok lego pengetahuan:
<br>Lego <strong>Variabel & Tipe Data</strong>, Lego <strong>Perulangan & Percabangan</strong>, Lego <strong>Fungsi</strong>, hingga Lego raksasa bernama <strong>OOP dan File Handling</strong>.</p>

<p>Sekarang, satukan semua balok lego itu!</p>

<div class="info-box"><p>💡 Pergilah ke menu <strong>Proyek</strong> di aplikasi ini. Tantang dirimu untuk menyelesaikan proyek "To-Do List CLI" atau bahkan membangun "Bot Chatbot". Gunakan halaman dokumentasi ini sebagai contekan pintarmu.</p></div>

<h2>Tips Mengerjakan Proyek:</h2>
<ol>
<li><strong>Pecah Masalah Besar (Decomposition):</strong> Jangan langsung panik melihat kode ratusan baris. Pecah jadi masalah kecil. "Hari ini aku akan buat tampilan menunya dulu", "Besok aku akan buat fungsi menyimpannya".</li>
<li><strong>Jangan Takut Error:</strong> Error merah (Traceback) bukan musuh yang memarahimu. Mereka adalah asisten yang sedang menunjuk dengan tepat di baris mana letak kesalahannya. Bacalah kalimat akhirnya!</li>
<li><strong>Gunakan Google:</strong> Bahkan programmer senior bergaji ratusan juta rupiah masih membuka Google dan StackOverflow setiap hari. Mengingat perintah itu pekerjaan mesin, pekerjaan manusianya adalah mencari solusi logis.</li>
</ol>

<p><strong>Selamat!</strong> Kamu telah menyelesaikan seluruh materi bacaan dasar Python di Selalu Ngoding. Terus berlatih, terus ngoding, dan selamat berkarya! 🐍🚀</p>
`
  }
];

