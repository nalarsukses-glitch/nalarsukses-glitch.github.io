// ========== QUIZ DATA ==========
const QUIZ_DATA = {
  0: [ // Mengenal Python
    { q: "Siapa pencipta bahasa Python?", options: ["James Gosling", "Guido van Rossum", "Brendan Eich", "Dennis Ritchie"], answer: 1 },
    { q: "Tahun berapa Python pertama kali dirilis?", options: ["1989", "1991", "1995", "2000"], answer: 1 },
    { q: "Apa ekstensi file Python?", options: [".pt", ".py", ".pn", ".px"], answer: 1 },
  ],
  1: [ // Variabel
    { q: "Tipe data untuk bilangan desimal di Python adalah?", options: ["int", "decimal", "float", "double"], answer: 2 },
    { q: "Fungsi untuk mengecek tipe data?", options: ["typeof()", "type()", "check()", "dtype()"], answer: 1 },
    { q: "Mana yang BUKAN tipe data Python?", options: ["str", "bool", "char", "int"], answer: 2 },
  ],
  2: [ // Operator
    { q: "Apa hasil dari 10 // 3 di Python?", options: ["3.33", "3", "4", "1"], answer: 1 },
    { q: "Operator ** digunakan untuk?", options: ["Perkalian", "Pembagian", "Perpangkatan", "Modulus"], answer: 2 },
    { q: "Hasil dari True and False adalah?", options: ["True", "False", "None", "Error"], answer: 1 },
  ],
  4: [ // Percabangan
    { q: "Keyword untuk kondisi alternatif setelah if?", options: ["else if", "elif", "elseif", "elsif"], answer: 1 },
    { q: "Apa output: print('Dewasa' if 20 >= 18 else 'Anak')?", options: ["Anak", "Dewasa", "Error", "None"], answer: 1 },
  ],
  5: [ // Perulangan
    { q: "Apa output dari range(5)?", options: ["[1,2,3,4,5]", "[0,1,2,3,4]", "[0,1,2,3,4,5]", "[1,2,3,4]"], answer: 1 },
    { q: "Keyword untuk menghentikan loop?", options: ["stop", "exit", "break", "end"], answer: 2 },
  ],
  6: [ // Fungsi
    { q: "Keyword untuk mendefinisikan fungsi?", options: ["func", "function", "def", "fn"], answer: 2 },
    { q: "Apa itu lambda function?", options: ["Fungsi rekursif", "Fungsi anonim satu baris", "Fungsi generator", "Fungsi async"], answer: 1 },
  ],
  13: [ // OOP
    { q: "Method yang dipanggil saat objek dibuat?", options: ["__start__", "__init__", "__new__", "__create__"], answer: 1 },
    { q: "Parameter pertama di method class adalah?", options: ["this", "self", "me", "cls"], answer: 1 },
    { q: "Konsep OOP dimana child class mewarisi parent?", options: ["Encapsulation", "Polymorphism", "Inheritance", "Abstraction"], answer: 2 },
  ],
  3: [ // Input dan Output
    { q: "Fungsi untuk menampilkan teks ke layar adalah?", options: ["display()", "show()", "print()", "echo()"], answer: 2 },
    { q: "Fungsi input() secara default mengembalikan tipe data apa?", options: ["int", "float", "bool", "str"], answer: 3 },
  ],
  7: [ // List
    { q: "Method untuk menambah elemen di akhir list?", options: ["add()", "insert()", "append()", "push()"], answer: 2 },
    { q: "Berapa index pertama pada list?", options: ["0", "1", "-1", "Kosong"], answer: 0 },
  ],
  8: [ // Tuple
    { q: "Sifat utama dari Tuple adalah?", options: ["Mutable", "Immutable", "Dinamis", "Bisa diubah"], answer: 1 },
    { q: "Simbol untuk membuat tuple?", options: ["{}", "[]", "()", "<>"], answer: 2 },
  ],
  9: [ // Dictionary
    { q: "Struktur data dictionary menggunakan konsep?", options: ["Index-Value", "Key-Value", "Node-Value", "Row-Column"], answer: 1 },
    { q: "Method untuk mengambil semua key di dictionary?", options: ["keys()", "values()", "items()", "get()"], answer: 0 },
  ],
  10: [ // Set
    { q: "Karakteristik utama Set adalah?", options: ["Terdapat duplikat", "Mempunyai index", "Nilai unik", "Key-value"], answer: 2 },
    { q: "Operator untuk menggabungkan (Union) dua set?", options: ["&", "|", "-", "^"], answer: 1 },
  ],
  11: [ // String
    { q: "Method untuk mengubah teks menjadi huruf besar semua?", options: ["lower()", "upper()", "capitalize()", "title()"], answer: 1 },
    { q: "Method untuk menghapus spasi di awal dan akhir teks?", options: ["trim()", "strip()", "clean()", "remove()"], answer: 1 },
  ],
  12: [ // File Handling
    { q: "Mode untuk membuka file dan menambahkan teks di baris baru?", options: ["r", "w", "a", "x"], answer: 2 },
    { q: "Keyword yang disarankan saat membuka file agar otomatis tertutup?", options: ["open", "close", "with", "try"], answer: 2 },
  ],
  14: [ // Database SQLite
    { q: "Library bawaan Python untuk database SQLite?", options: ["sqlite3", "mysql", "psycopg2", "pymongo"], answer: 0 },
    { q: "Method untuk menyimpan perubahan ke database?", options: ["save()", "commit()", "push()", "update()"], answer: 1 },
  ],
  15: [ // Web Scraping
    { q: "Library populer untuk parsing HTML di Python?", options: ["requests", "urllib", "BeautifulSoup", "pandas"], answer: 2 },
    { q: "Library untuk mengirim HTTP Request?", options: ["http", "socket", "requests", "fetch"], answer: 2 },
  ],
  16: [ // API Python
    { q: "Method HTTP untuk mengambil data dari API?", options: ["POST", "GET", "PUT", "DELETE"], answer: 1 },
    { q: "Format data yang paling sering digunakan pada API modern?", options: ["XML", "CSV", "JSON", "YAML"], answer: 2 },
  ],
  17: [ // Automasi Python
    { q: "Library bawaan untuk berinteraksi dengan sistem operasi (file/folder)?", options: ["sys", "os", "system", "file"], answer: 1 },
    { q: "Library untuk menyalin dan memindahkan file dengan mudah?", options: ["os", "copy", "shutil", "move"], answer: 2 },
  ],
  18: [ // Proyek Akhir
    { q: "Fungsi json.dump() digunakan untuk?", options: ["Membaca file JSON", "Menulis data ke file JSON", "Menghapus data JSON", "Validasi JSON"], answer: 1 },
  ],
};

// ========== LATIHAN DATA ==========
const LATIHAN_DATA = [
  { id: 0, title: "Kalkulator Sederhana", desc: "Buat kalkulator dengan 4 operasi dasar", difficulty: "easy", materi: "Operator", instruction: "Buatlah program Python yang meminta input dua angka dari pengguna, lalu menampilkan hasil penjumlahan, pengurangan, perkalian, dan pembagian dari kedua angka tersebut.", solution: `angka1 = float(input("Masukkan angka pertama: "))
angka2 = float(input("Masukkan angka kedua: "))

print("--- Hasil Kalkulator ---")
print(f"Penjumlahan: {angka1 + angka2}")
print(f"Pengurangan: {angka1 - angka2}")
print(f"Perkalian: {angka1 * angka2}")
print(f"Pembagian: {angka1 / angka2}")` },
  { id: 1, title: "Cek Bilangan Prima", desc: "Buat program untuk mengecek bilangan prima", difficulty: "easy", materi: "Perulangan", instruction: "Buatlah program yang meminta input sebuah bilangan bulat dari pengguna. Program harus mengecek apakah bilangan tersebut merupakan bilangan prima atau bukan.", solution: `angka = int(input("Masukkan angka: "))

if angka > 1:
    for i in range(2, int(angka/2)+1):
        if (angka % i) == 0:
            print(f"{angka} bukan bilangan prima")
            break
    else:
        print(f"{angka} adalah bilangan prima")
else:
    print(f"{angka} bukan bilangan prima")` },
  { id: 2, title: "FizzBuzz", desc: "Cetak Fizz, Buzz, atau FizzBuzz sesuai aturan", difficulty: "easy", materi: "Percabangan", instruction: "Cetak angka dari 1 sampai 50. Jika angka habis dibagi 3, cetak 'Fizz'. Jika habis dibagi 5, cetak 'Buzz'. Jika habis dibagi 3 dan 5, cetak 'FizzBuzz'. Selain itu, cetak angkanya.", solution: `for i in range(1, 51):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)` },
  { id: 3, title: "Konversi Suhu", desc: "Konversi antara Celsius, Fahrenheit, dan Kelvin", difficulty: "easy", materi: "Fungsi", instruction: "Buatlah fungsi untuk mengonversi suhu dari Celsius ke Fahrenheit dan Kelvin. Fungsi menerima argumen suhu dalam Celsius dan mengembalikan tuple berisi suhu Fahrenheit dan Kelvin.", solution: `def konversi_suhu(celsius):
    fahrenheit = (celsius * 9/5) + 32
    kelvin = celsius + 273.15
    return fahrenheit, kelvin

suhu_c = float(input("Masukkan suhu Celsius: "))
f, k = konversi_suhu(suhu_c)
print(f"{suhu_c}C sama dengan {f}F dan {k}K")` },
  { id: 4, title: "Tebak Angka", desc: "Buat game tebak angka dengan petunjuk", difficulty: "medium", materi: "Perulangan", instruction: "Program akan memilih angka acak antara 1 dan 100. Pengguna diminta menebak angka tersebut. Berikan petunjuk 'Terlalu besar' atau 'Terlalu kecil' setiap kali pengguna salah menebak.", solution: `import random

angka_rahasia = random.randint(1, 100)
tebakan = 0

print("Saya telah memilih angka antara 1 sampai 100. Coba tebak!")

while tebakan != angka_rahasia:
    tebakan = int(input("Masukkan tebakanmu: "))
    
    if tebakan < angka_rahasia:
        print("Terlalu kecil!")
    elif tebakan > angka_rahasia:
        print("Terlalu besar!")
    else:
        print("Selamat! Tebakanmu benar!")` },
  { id: 5, title: "Word Counter", desc: "Hitung kata, huruf, dan kalimat dari teks", difficulty: "medium", materi: "String", instruction: "Buat fungsi yang menerima sebuah teks dan mengembalikan jumlah kata, jumlah karakter (tanpa spasi), dan jumlah kalimat (dihitung berdasarkan tanda titik).", solution: `def analisis_teks(teks):
    jumlah_kata = len(teks.split())
    jumlah_karakter = len(teks.replace(" ", ""))
    jumlah_kalimat = len(teks.split(".")) - 1 if teks.endswith(".") else len(teks.split("."))
    
    return jumlah_kata, jumlah_karakter, jumlah_kalimat

kalimat = "Halo dunia. Belajar Python itu menyenangkan. Semangat terus belajar."
kata, karakter, kalimat_count = analisis_teks(kalimat)

print(f"Jumlah kata: {kata}")
print(f"Jumlah karakter: {karakter}")
print(f"Jumlah kalimat: {kalimat_count}")` },
  { id: 6, title: "Student Grade System", desc: "Sistem penilaian siswa dengan rata-rata dan ranking", difficulty: "medium", materi: "List", instruction: "Buat program untuk menerima input nama dan nilai dari 5 siswa. Simpan dalam list dan urutkan berdasarkan nilai tertinggi. Tampilkan juga rata-rata nilai kelas.", solution: `siswa = []
total_nilai = 0

for i in range(5):
    nama = input(f"Masukkan nama siswa {i+1}: ")
    nilai = float(input(f"Masukkan nilai {nama}: "))
    siswa.append({"nama": nama, "nilai": nilai})
    total_nilai += nilai

# Mengurutkan dari nilai tertinggi
siswa.sort(key=lambda x: x["nilai"], reverse=True)

print("\\n--- Hasil Ujian ---")
for i, s in enumerate(siswa):
    print(f"Rank {i+1}: {s['nama']} - {s['nilai']}")
    
print(f"\\nRata-rata kelas: {total_nilai / 5}")` },
  { id: 7, title: "Contact Book", desc: "Buku kontak dengan CRUD menggunakan dictionary", difficulty: "medium", materi: "Dictionary", instruction: "Buat program buku telepon menggunakan dictionary. Pengguna dapat menambah kontak baru, mencari kontak berdasarkan nama, dan melihat semua kontak.", solution: `kontak = {}

def tambah_kontak(nama, nomor):
    kontak[nama] = nomor
    print("Kontak berhasil ditambahkan!")

def cari_kontak(nama):
    if nama in kontak:
        print(f"Nomor {nama}: {kontak[nama]}")
    else:
        print("Kontak tidak ditemukan.")

# Contoh penggunaan
tambah_kontak("Budi", "08123456789")
tambah_kontak("Siti", "08987654321")

cari_kontak("Budi")
cari_kontak("Andi")` },
  { id: 8, title: "Matrix Calculator", desc: "Operasi penjumlahan matrix", difficulty: "hard", materi: "List", instruction: "Buat program untuk menjumlahkan dua matriks 2x2. Matriks direpresentasikan sebagai list of lists. Tampilkan matriks hasil.", solution: `X = [[1, 2],
     [3, 4]]

Y = [[5, 6],
     [7, 8]]

hasil = [[0, 0],
         [0, 0]]

for i in range(len(X)):
    for j in range(len(X[0])):
        hasil[i][j] = X[i][j] + Y[i][j]

print("Hasil penjumlahan matriks:")
for baris in hasil:
    print(baris)` },
  { id: 9, title: "File Analyzer", desc: "Analisis file teks: statistik kata, baris", difficulty: "hard", materi: "File Handling", instruction: "Buat program yang membaca file teks bernama 'data.txt' dan mencetak jumlah baris dan jumlah kata di dalam file tersebut.", solution: `# Pertama, buat file percobaan
with open('data.txt', 'w') as f:
    f.write("Baris pertama ini.\\nBaris kedua ada di sini.")

# Program Analisis
try:
    with open('data.txt', 'r') as file:
        baris = file.readlines()
        
        jumlah_baris = len(baris)
        jumlah_kata = sum(len(line.split()) for line in baris)
        
        print(f"Jumlah baris: {jumlah_baris}")
        print(f"Jumlah kata: {jumlah_kata}")
except FileNotFoundError:
    print("File tidak ditemukan.")` },
  { id: 10, title: "Mini Database", desc: "Sistem database sederhana dengan SQLite", difficulty: "hard", materi: "Database SQLite", instruction: "Gunakan modul sqlite3 untuk membuat tabel 'Buku' (id, judul, penulis). Insert 2 buku, lalu query dan print semua buku dari database.", solution: `import sqlite3

# Koneksi ke in-memory database (atau nama file .db)
conn = sqlite3.connect(':memory:')
cursor = conn.cursor()

# Membuat tabel
cursor.execute('''CREATE TABLE Buku
                 (id INTEGER PRIMARY KEY, judul TEXT, penulis TEXT)''')

# Insert data
cursor.execute("INSERT INTO Buku (judul, penulis) VALUES ('Laskar Pelangi', 'Andrea Hirata')")
cursor.execute("INSERT INTO Buku (judul, penulis) VALUES ('Bumi Manusia', 'Pramoedya A. Toer')")
conn.commit()

# Query data
cursor.execute("SELECT * FROM Buku")
for baris in cursor.fetchall():
    print(baris)

conn.close()` },
  { id: 11, title: "Web Scraper", desc: "Scraping judul menggunakan BeautifulSoup", difficulty: "hard", materi: "Web Scraping", instruction: "Gunakan requests dan BeautifulSoup untuk mengambil judul halaman (tag <title>) dari 'https://example.com'.", solution: `import requests
from bs4 import BeautifulSoup

url = 'https://example.com'
response = requests.get(url)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')
    judul = soup.find('title').text
    print(f"Judul website: {judul}")
else:
    print("Gagal mengambil data dari website")` },
];


// ========== PROYEK DATA ==========
const PROYEK_DATA = [
  { 
    id: 0, 
    title: "📝 To-Do List CLI", 
    desc: "Aplikasi manajemen tugas berbasis command line dengan penyimpanan JSON.", 
    difficulty: "easy", 
    topics: ["File Handling", "OOP", "JSON"],
    steps: `
    <ul>
      <li><strong>Langkah 1:</strong> Buat struktur class <code>TodoApp</code> dengan method <code>__init__</code> yang meload file <code>todos.json</code>.</li>
      <li><strong>Langkah 2:</strong> Buat method <code>tambah_tugas(tugas)</code> untuk menambahkan dictionary tugas ke list dan simpan ke JSON.</li>
      <li><strong>Langkah 3:</strong> Buat method <code>tampilkan_tugas()</code> untuk meloop data JSON dan menampilkannya dengan format rapi.</li>
      <li><strong>Langkah 4:</strong> Buat method <code>selesai_tugas(id)</code> untuk mengubah status tugas menjadi selesai.</li>
      <li><strong>Langkah 5:</strong> Buat loop utama (while True) yang menerima input menu dari pengguna.</li>
    </ul>`,
    solution: `import json
import os

class TodoApp:
    def __init__(self, filename="todos.json"):
        self.filename = filename
        self.todos = self.load()

    def load(self):
        if os.path.exists(self.filename):
            with open(self.filename, 'r') as f:
                return json.load(f)
        return []

    def save(self):
        with open(self.filename, 'w') as f:
            json.dump(self.todos, f, indent=4)

    def tambah_tugas(self, nama_tugas):
        tugas = {
            "id": len(self.todos) + 1,
            "nama": nama_tugas,
            "selesai": False
        }
        self.todos.append(tugas)
        self.save()
        print(f"Berhasil menambahkan tugas: {nama_tugas}")

    def tampilkan_tugas(self):
        print("\\n--- Daftar Tugas ---")
        if not self.todos:
            print("Belum ada tugas.")
        for t in self.todos:
            status = "[x]" if t["selesai"] else "[ ]"
            print(f"{t['id']}. {status} {t['nama']}")

    def selesai_tugas(self, task_id):
        for t in self.todos:
            if t["id"] == task_id:
                t["selesai"] = True
                self.save()
                print(f"Tugas {task_id} ditandai selesai!")
                return
        print("Tugas tidak ditemukan.")

# Loop Utama
app = TodoApp()
while True:
    print("\\nMenu: 1. Tambah  2. Tampilkan  3. Selesai  4. Keluar")
    pilihan = input("Pilih menu: ")
    
    if pilihan == '1':
        tugas = input("Masukkan tugas baru: ")
        app.tambah_tugas(tugas)
    elif pilihan == '2':
        app.tampilkan_tugas()
    elif pilihan == '3':
        app.tampilkan_tugas()
        tid = int(input("Masukkan ID tugas yang selesai: "))
        app.selesai_tugas(tid)
    elif pilihan == '4':
        print("Sampai jumpa!")
        break
    else:
        print("Pilihan tidak valid.")`
  },
  { 
    id: 1, 
    title: "🎮 Game Snake", 
    desc: "Game klasik Snake menggunakan library Pygame.", 
    difficulty: "medium", 
    topics: ["OOP", "Pygame", "Game Logic"],
    steps: `
    <ul>
      <li><strong>Langkah 1:</strong> Install pygame (<code>pip install pygame</code>) dan inisialisasi window permainan.</li>
      <li><strong>Langkah 2:</strong> Definisikan warna, ukuran blok (snake_block), dan kecepatan (snake_speed).</li>
      <li><strong>Langkah 3:</strong> Buat fungsi untuk menggambar ular dan makanan di koordinat acak.</li>
      <li><strong>Langkah 4:</strong> Tangkap event keyboard (Arrow keys) untuk mengubah arah gerak ular.</li>
      <li><strong>Langkah 5:</strong> Perbarui posisi kepala ular, jika menabrak dinding atau tubuhnya sendiri, game over. Jika memakan makanan, tambah panjang tubuh dan skor.</li>
    </ul>`,
    solution: `import pygame
import time
import random

pygame.init()
white = (255, 255, 255)
yellow = (255, 255, 102)
black = (0, 0, 0)
red = (213, 50, 80)
green = (0, 255, 0)
blue = (50, 153, 213)

dis_width = 600
dis_height = 400
dis = pygame.display.set_mode((dis_width, dis_height))
pygame.display.set_caption('Game Snake - Selalu Ngoding')

clock = pygame.time.Clock()
snake_block = 10
snake_speed = 15

font_style = pygame.font.SysFont("bahnschrift", 25)
score_font = pygame.font.SysFont("comicsansms", 35)

def Your_score(score):
    value = score_font.render("Skor: " + str(score), True, yellow)
    dis.blit(value, [0, 0])

def our_snake(snake_block, snake_list):
    for x in snake_list:
        pygame.draw.rect(dis, black, [x[0], x[1], snake_block, snake_block])

def message(msg, color):
    mesg = font_style.render(msg, True, color)
    dis.blit(mesg, [dis_width / 6, dis_height / 3])

def gameLoop():
    game_over = False
    game_close = False

    x1 = dis_width / 2
    y1 = dis_height / 2
    x1_change = 0
    y1_change = 0

    snake_List = []
    Length_of_snake = 1
    foodx = round(random.randrange(0, dis_width - snake_block) / 10.0) * 10.0
    foody = round(random.randrange(0, dis_height - snake_block) / 10.0) * 10.0

    while not game_over:
        while game_close == True:
            dis.fill(blue)
            message("Kalah! Tekan C-Main Lagi atau Q-Keluar", red)
            Your_score(Length_of_snake - 1)
            pygame.display.update()
            for event in pygame.event.get():
                if event.type == pygame.KEYDOWN:
                    if event.key == pygame.K_q:
                        game_over = True
                        game_close = False
                    if event.key == pygame.K_c:
                        gameLoop()

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                game_over = True
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT:
                    x1_change = -snake_block
                    y1_change = 0
                elif event.key == pygame.K_RIGHT:
                    x1_change = snake_block
                    y1_change = 0
                elif event.key == pygame.K_UP:
                    y1_change = -snake_block
                    x1_change = 0
                elif event.key == pygame.K_DOWN:
                    y1_change = snake_block
                    x1_change = 0

        if x1 >= dis_width or x1 < 0 or y1 >= dis_height or y1 < 0:
            game_close = True
        x1 += x1_change
        y1 += y1_change
        dis.fill(blue)
        pygame.draw.rect(dis, green, [foodx, foody, snake_block, snake_block])
        
        snake_Head = []
        snake_Head.append(x1)
        snake_Head.append(y1)
        snake_List.append(snake_Head)
        
        if len(snake_List) > Length_of_snake:
            del snake_List[0]

        for x in snake_List[:-1]:
            if x == snake_Head:
                game_close = True

        our_snake(snake_block, snake_List)
        Your_score(Length_of_snake - 1)
        pygame.display.update()

        if x1 == foodx and y1 == foody:
            foodx = round(random.randrange(0, dis_width - snake_block) / 10.0) * 10.0
            foody = round(random.randrange(0, dis_height - snake_block) / 10.0) * 10.0
            Length_of_snake += 1

        clock.tick(snake_speed)

    pygame.quit()

gameLoop()`
  },
  { 
    id: 2, 
    title: "📊 Data Dashboard", 
    desc: "Dashboard analisis data CSV dengan visualisasi matplotlib.", 
    difficulty: "medium", 
    topics: ["File Handling", "Matplotlib", "Pandas"],
    steps: `
    <ul>
      <li><strong>Langkah 1:</strong> Siapkan file CSV berisikan data contoh (misalnya data penjualan bulanan).</li>
      <li><strong>Langkah 2:</strong> Import library <code>pandas</code> dan <code>matplotlib.pyplot</code>.</li>
      <li><strong>Langkah 3:</strong> Baca file CSV menggunakan <code>pd.read_csv()</code>.</li>
      <li><strong>Langkah 4:</strong> Analisa data (hitung total, rata-rata, dll) menggunakan fitur DataFrame pandas.</li>
      <li><strong>Langkah 5:</strong> Buat plot grafik batang atau garis, atur label, title, lalu tampilkan dengan <code>plt.show()</code>.</li>
    </ul>`,
    solution: `import pandas as pd
import matplotlib.pyplot as plt

# 1. Buat data CSV dummy secara dinamis untuk latihan ini
dummy_csv = "Bulan,Penjualan\\nJan,150\\nFeb,200\\nMar,180\\nApr,220\\nMei,300\\nJun,250"
with open("data_penjualan.csv", "w") as f:
    f.write(dummy_csv)

# 2. Baca data menggunakan Pandas
print("Membaca data dari CSV...")
df = pd.read_csv("data_penjualan.csv")
print("\\n5 Data Teratas:")
print(df.head())

# 3. Analisis dasar
total_penjualan = df["Penjualan"].sum()
rata_rata = df["Penjualan"].mean()
print(f"\\nTotal Penjualan: {total_penjualan}")
print(f"Rata-rata Penjualan: {rata_rata:.2f}")

# 4. Visualisasi Data
plt.figure(figsize=(8, 5))
plt.bar(df["Bulan"], df["Penjualan"], color='skyblue', edgecolor='black')

plt.title("Laporan Penjualan Semester 1", fontsize=16)
plt.xlabel("Bulan", fontsize=12)
plt.ylabel("Total Penjualan", fontsize=12)
plt.grid(axis='y', linestyle='--', alpha=0.7)

# Tampilkan grafik
plt.show()`
  },
  { 
    id: 3, 
    title: "🌐 Personal Blog", 
    desc: "Website blog sederhana menggunakan Flask.", 
    difficulty: "medium", 
    topics: ["Flask", "HTML/CSS", "SQLite"],
    steps: `
    <ul>
      <li><strong>Langkah 1:</strong> Install Flask (<code>pip install Flask</code>) dan siapkan folder <code>templates</code>.</li>
      <li><strong>Langkah 2:</strong> Inisialisasi app Flask dan buat koneksi ke SQLite database untuk menyimpan artikel.</li>
      <li><strong>Langkah 3:</strong> Buat rute <code>/</code> untuk menampilkan semua artikel (Read).</li>
      <li><strong>Langkah 4:</strong> Buat rute <code>/create</code> dengan metode GET dan POST untuk menambah artikel baru.</li>
      <li><strong>Langkah 5:</strong> Buat file HTML template dan jalankan server Flask.</li>
    </ul>`,
    solution: `from flask import Flask, render_template_string, request, redirect, url_for
import sqlite3

app = Flask(__name__)

# Fungsi koneksi database
def get_db_connection():
    conn = sqlite3.connect('blog.db')
    conn.row_factory = sqlite3.Row
    return conn

# Inisialisasi DB
with get_db_connection() as conn:
    conn.execute('''CREATE TABLE IF NOT EXISTS posts 
                   (id INTEGER PRIMARY KEY, title TEXT, content TEXT)''')
    conn.commit()

# Templates disatukan sebagai string untuk contoh kode (Dalam proyek asli, gunakan folder templates/)
HOME_TEMPLATE = '''
<h1>Personal Blog</h1>
<a href="/create">Tambah Artikel</a>
<hr>
{% for post in posts %}
    <h2>{{ post['title'] }}</h2>
    <p>{{ post['content'] }}</p>
{% endfor %}
'''

CREATE_TEMPLATE = '''
<h1>Tambah Artikel Baru</h1>
<form method="POST">
    Judul: <input type="text" name="title" required><br><br>
    Konten:<br><textarea name="content" rows="5" required></textarea><br><br>
    <button type="submit">Simpan</button>
</form>
<a href="/">Kembali</a>
'''

@app.route('/')
def index():
    conn = get_db_connection()
    posts = conn.execute('SELECT * FROM posts ORDER BY id DESC').fetchall()
    conn.close()
    return render_template_string(HOME_TEMPLATE, posts=posts)

@app.route('/create', methods=('GET', 'POST'))
def create():
    if request.method == 'POST':
        title = request.form['title']
        content = request.form['content']
        
        conn = get_db_connection()
        conn.execute('INSERT INTO posts (title, content) VALUES (?, ?)', (title, content))
        conn.commit()
        conn.close()
        return redirect(url_for('index'))
        
    return render_template_string(CREATE_TEMPLATE)

if __name__ == '__main__':
    app.run(debug=True)`
  },
  { 
    id: 4, 
    title: "🤖 Chatbot", 
    desc: "Chatbot interaktif menggunakan API dan NLP.", 
    difficulty: "hard", 
    topics: ["API", "NLP", "OOP"],
    steps: `
    <ul>
      <li><strong>Langkah 1:</strong> Buat akun di platform LLM seperti Groq, OpenAI, atau Google Gemini untuk mendapatkan API Key.</li>
      <li><strong>Langkah 2:</strong> Install library <code>requests</code>.</li>
      <li><strong>Langkah 3:</strong> Buat class <code>Chatbot</code> yang mengatur header otentikasi dan riwayat percakapan.</li>
      <li><strong>Langkah 4:</strong> Buat method <code>chat(pesan)</code> untuk mengirim request HTTP POST ke endpoint API dan mengambil balasan (response text).</li>
      <li><strong>Langkah 5:</strong> Buat loop while agar pengguna bisa terus mengobrol dengan bot di terminal.</li>
    </ul>`,
    solution: `import requests
import json

class SimpleChatbot:
    def __init__(self, api_key):
        self.api_key = api_key
        # Menggunakan OpenRouter/Groq API sebagai contoh yang kompatibel dengan OpenAI
        self.url = "https://api.openai.com/v1/chat/completions"
        self.messages = [
            {"role": "system", "content": "Anda adalah asisten virtual bahasa Indonesia yang ramah dan membantu."}
        ]
        
    def send_message(self, user_input):
        self.messages.append({"role": "user", "content": user_input})
        
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }
        
        payload = {
            "model": "gpt-3.5-turbo", # Ganti dengan model yang sesuai API Anda
            "messages": self.messages
        }
        
        try:
            response = requests.post(self.url, headers=headers, json=payload)
            response.raise_for_status() # Cek error HTTP
            
            data = response.json()
            bot_reply = data['choices'][0]['message']['content']
            
            # Simpan balasan bot ke history
            self.messages.append({"role": "assistant", "content": bot_reply})
            return bot_reply
            
        except Exception as e:
            return f"Maaf, terjadi kesalahan: {e}"

# ==== Cara Penggunaan ====
print("--- Chatbot CLI ---")
print("Catatan: Anda butuh API Key valid agar ini bekerja.")
API_KEY = "sk-xxxxxxxxxxxxxxxxx" # Ganti dengan API Key milikmu
bot = SimpleChatbot(API_KEY)

while True:
    pesan = input("\\nAnda: ")
    if pesan.lower() in ['exit', 'keluar', 'quit']:
        print("Bot: Sampai jumpa!")
        break
        
    print("Bot sedang mengetik...")
    balasan = bot.send_message(pesan)
    print(f"Bot: {balasan}")`
  },
  { 
    id: 5, 
    title: "📈 Stock Tracker", 
    desc: "Aplikasi tracking harga saham real-time.", 
    difficulty: "hard", 
    topics: ["API", "Web Scraping", "Automasi"],
    steps: `
    <ul>
      <li><strong>Langkah 1:</strong> Install library <code>yfinance</code> yang memudahkan pengambilan data saham dari Yahoo Finance.</li>
      <li><strong>Langkah 2:</strong> Buat list kode saham yang ingin dipantau (misal: AAPL, GOOGL, BBCA.JK).</li>
      <li><strong>Langkah 3:</strong> Buat fungsi untuk mengambil harga penutupan terakhir (closing price) dari masing-masing kode tersebut.</li>
      <li><strong>Langkah 4:</strong> Simpan hasil ke file CSV sebagai database sederhana atau logging.</li>
      <li><strong>Langkah 5:</strong> Gunakan modul <code>time.sleep</code> atau <code>schedule</code> agar script otomatis berjalan setiap interval tertentu (misal: setiap jam).</li>
    </ul>`,
    solution: `import yfinance as yf
import pandas as pd
import time
from datetime import datetime

# Daftar saham yang dilacak (BBCA.JK untuk BCA di IHSG)
saham_list = ['AAPL', 'MSFT', 'BBCA.JK']
log_file = 'stock_tracker_log.csv'

def ambil_harga_saham(ticker):
    try:
        stock = yf.Ticker(ticker)
        # Ambil data harga hari ini
        todays_data = stock.history(period='1d')
        return todays_data['Close'].iloc[0]
    except Exception as e:
        print(f"Error mengambil {ticker}: {e}")
        return None

def catat_ke_csv(data_dict):
    # Konversi dictionary ke DataFrame dan append ke CSV
    df = pd.DataFrame([data_dict])
    df.to_csv(log_file, mode='a', header=not pd.io.common.file_exists(log_file), index=False)
    print("Data berhasil disimpan ke CSV.")

def jalankan_tracker():
    sekarang = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"\\n--- Mengambil Data Saham [{sekarang}] ---")
    
    hasil = {'Waktu': sekarang}
    for saham in saham_list:
        harga = ambil_harga_saham(saham)
        if harga:
            print(f"{saham}: {harga:,.2f}")
            hasil[saham] = round(harga, 2)
            
    catat_ke_csv(hasil)

# Automasi dengan interval
print("Memulai Stock Tracker... Tekan Ctrl+C untuk berhenti.")
try:
    while True:
        jalankan_tracker()
        # Tunggu 1 jam (3600 detik)
        print("Menunggu 1 jam untuk pembaruan berikutnya...")
        time.sleep(3600)
except KeyboardInterrupt:
    print("\\nTracker dihentikan oleh pengguna.")`
  }
];
