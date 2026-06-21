// ========== STATE ==========
let currentPage = 'home';
let currentMateri = null;
let completedMateri = JSON.parse(localStorage.getItem('sn_completed') || '[]');
let theme = localStorage.getItem('sn_theme') || 'light';

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
    applyTheme(theme);
    buildSidebar();
    updateProgress();
    navigateTo('home');
    initScrollEffects();
});

// ========== THEME ==========
function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    theme = t;
    localStorage.setItem('sn_theme', t);
}
function toggleTheme() {
    applyTheme(theme === 'light' ? 'dark' : 'light');
}

// ========== NAVIGATION ==========
function navigateTo(page) {
    currentPage = page;
    currentMateri = null;
    document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.page === page));
    closeMobile();
    window.scrollTo({ top: 0 });
    const main = document.getElementById('mainContent');
    switch(page) {
        case 'home': main.innerHTML = renderHome(); break;
        case 'materi': main.innerHTML = renderMateriList(); break;
        case 'latihan': main.innerHTML = renderLatihan(); break;
        case 'proyek': main.innerHTML = renderProyek(); break;
        case 'tentang': main.innerHTML = renderTentang(); break;
    }
    highlightAllCode();
    initFadeIn();
}

function openMateri(id) {
    currentMateri = id;
    currentPage = 'materi-detail';
    window.scrollTo({ top: 0 });
    document.getElementById('mainContent').innerHTML = renderMateriDetail(id);
    highlightAllCode();
    initFadeIn();
}

// ========== RENDER HOME ==========
function renderHome() {
    const completed = completedMateri.length;
    const total = MATERI_DATA.length;
    return `
    <section class="hero">
        <div class="hero-container">
            <div class="hero-text">
                <div class="hero-badge">🚀 Platform Belajar Python untuk pemula</div>
                <h1 class="hero-title">Belajar <span class="highlight">Python</span> dari Nol Sampai Mahir</h1>
                <p class="hero-desc">Kuasai Python dengan materi terstruktur, latihan interaktif, quiz, dan proyek nyata. Dirancang untuk pemula hingga tingkat lanjut.</p>
                <div class="hero-actions">
                    <button class="btn btn-primary" onclick="navigateTo('materi')">🎯 Mulai Belajar</button>
                    <button class="btn btn-outline" onclick="navigateTo('materi')">📚 Lihat Materi</button>
                </div>
                <div class="hero-stats">
                    <div class="stat-item"><div class="stat-number">${total}</div><div class="stat-label">Materi</div></div>
                    <div class="stat-item"><div class="stat-number">${LATIHAN_DATA.length}</div><div class="stat-label">Latihan</div></div>
                    <div class="stat-item"><div class="stat-number">${PROYEK_DATA.length}</div><div class="stat-label">Proyek</div></div>
                </div>
            </div>
            <div class="hero-image">
                <img src="assets/python_hero.png" alt="Python 3D Illustration">
            </div>
        </div>
    </section>

    <section class="section section-alt">
        <div class="section-inner">
            <div class="section-header fade-in">
                <h2>📚 Materi Pilihan</h2>
                <p>Mulai dari dasar hingga mahir, semua tersusun rapi</p>
            </div>
            <div class="materi-grid">
                ${MATERI_DATA.slice(0, 6).map((m, i) => renderCard(m)).join('')}
            </div>
            <div style="text-align:center;margin-top:32px">
                <button class="btn btn-outline" onclick="navigateTo('materi')">Lihat Semua Materi →</button>
            </div>
        </div>
    </section>

    ${completed > 0 ? `
    <section class="section">
        <div class="section-inner">
            <div class="section-header fade-in">
                <h2>📊 Progress Belajar Kamu</h2>
                <p>${completed} dari ${total} materi telah diselesaikan</p>
            </div>
            <div style="max-width:500px;margin:0 auto">
                <div class="progress-bar" style="height:10px;border-radius:5px">
                    <div class="progress-fill" style="width:${(completed/total*100)}%;height:100%"></div>
                </div>
                <p style="text-align:center;margin-top:12px;color:var(--text-muted)">${Math.round(completed/total*100)}% Selesai</p>
            </div>
        </div>
    </section>` : ''}
    `;
}

// ========== RENDER MATERI LIST ==========
function renderMateriList() {
    return `
    <section class="section" style="padding-top:calc(var(--nav-height) + 40px)">
        <div class="section-inner">
            <div class="section-header fade-in">
                <h2>📚 Semua Materi Python</h2>
                <p>19 materi lengkap dari dasar hingga mahir</p>
            </div>
            <div style="display:flex;gap:12px;justify-content:center;margin-bottom:32px;flex-wrap:wrap">
                <button class="btn btn-outline" onclick="toggleSidebar()" style="padding:10px 20px;font-size:0.88rem">📋 Sidebar Materi</button>
            </div>
            <div class="materi-grid">
                ${MATERI_DATA.map(m => renderCard(m)).join('')}
            </div>
        </div>
    </section>`;
}

function renderCard(m) {
    const done = completedMateri.includes(m.id);
    return `
    <div class="materi-card fade-in ${done ? 'completed' : ''}" onclick="openMateri(${m.id})">
        <span class="card-number">#${m.id + 1}</span>
        <div class="card-icon">${m.icon}</div>
        <h3>${m.title}</h3>
        <p>${m.desc}</p>
        <div class="card-footer">
            <span>⏱ ${m.duration}</span>
            <span>${done ? '✅ Selesai' : m.difficulty}</span>
        </div>
    </div>`;
}

// ========== RENDER MATERI DETAIL ==========
function renderMateriDetail(id) {
    const m = MATERI_DATA[id];
    const done = completedMateri.includes(id);
    const prev = id > 0 ? MATERI_DATA[id - 1] : null;
    const next = id < MATERI_DATA.length - 1 ? MATERI_DATA[id + 1] : null;
    const quizzes = QUIZ_DATA[id] || [];

    return `
    <article class="materi-detail">
        <div class="breadcrumb">
            <a href="#" onclick="navigateTo('materi')">Materi</a> <span>›</span> <span>${m.title}</span>
        </div>
        <h1>${m.icon} ${m.title}</h1>
        <div class="meta">
            <span>⏱ ${m.duration}</span>
            <span>📊 ${m.difficulty}</span>
            <span>#${id + 1} dari ${MATERI_DATA.length}</span>
        </div>

        <div class="materi-body">${m.content}</div>

        <button class="btn-complete ${done ? 'done' : ''}" onclick="toggleComplete(${id})">
            ${done ? '✅ Sudah Selesai' : '☐ Tandai Selesai'}
        </button>

        ${quizzes.length > 0 ? `
        <div class="quiz-container">
            <h3>🧠 Quiz — ${m.title}</h3>
            ${quizzes.map((q, i) => `
            <div class="quiz-question" id="quiz-${id}-${i}">
                <p>${i + 1}. ${q.q}</p>
                ${q.options.map((opt, j) => `
                <button class="quiz-option" onclick="checkAnswer(${id},${i},${j})" id="opt-${id}-${i}-${j}">${opt}</button>
                `).join('')}
            </div>`).join('')}
        </div>` : ''}

        <div class="materi-nav">
            ${prev ? `<button class="nav-btn" onclick="openMateri(${prev.id})"><span class="label">← Sebelumnya</span><span class="title">${prev.title}</span></button>` : '<div></div>'}
            ${next ? `<button class="nav-btn" onclick="openMateri(${next.id})"><span class="label">Selanjutnya →</span><span class="title">${next.title}</span></button>` : '<div></div>'}
        </div>
    </article>`;
}

// ========== RENDER LATIHAN ==========
function renderLatihan() {
    return `
    <section class="section" style="padding-top:calc(var(--nav-height) + 40px)">
        <div class="section-inner">
            <div class="section-header fade-in">
                <h2>💪 Latihan Python</h2>
                <p>Asah kemampuanmu dengan latihan-latihan seru</p>
            </div>
            <div class="exercise-grid">
                ${LATIHAN_DATA.map(ex => `
                <div class="exercise-card fade-in" onclick="openLatihan(${ex.id})" style="cursor:pointer">
                    <span class="difficulty ${ex.difficulty}">${ex.difficulty === 'easy' ? '🟢 Mudah' : ex.difficulty === 'medium' ? '🟡 Sedang' : '🔴 Sulit'}</span>
                    <h3>${ex.title}</h3>
                    <p style="color:var(--text-secondary);font-size:0.92rem;margin:8px 0 12px">${ex.desc}</p>
                    <span style="font-size:0.82rem;color:var(--text-muted)">📎 ${ex.materi}</span>
                </div>`).join('')}
            </div>
        </div>
    </section>`;
}

function openLatihan(id) {
    currentPage = 'latihan-detail';
    window.scrollTo({ top: 0 });
    document.getElementById('mainContent').innerHTML = renderLatihanDetail(id);
    highlightAllCode();
    initFadeIn();
}

function renderLatihanDetail(id) {
    const ex = LATIHAN_DATA.find(x => x.id === id);
    if (!ex) return '';
    
    return `
    <article class="materi-detail">
        <div class="breadcrumb">
            <a href="#" onclick="navigateTo('latihan')">Latihan</a> <span>›</span> <span>${ex.title}</span>
        </div>
        <h1>💪 ${ex.title}</h1>
        <div class="meta">
            <span class="difficulty ${ex.difficulty}">${ex.difficulty === 'easy' ? '🟢 Mudah' : ex.difficulty === 'medium' ? '🟡 Sedang' : '🔴 Sulit'}</span>
            <span>📎 ${ex.materi}</span>
        </div>

        <div class="materi-body">
            <h3>Instruksi Latihan</h3>
            <div class="info-box"><p>${ex.instruction}</p></div>
            
            <h3>Solusi Kode</h3>
            <p>Cobalah kerjakan sendiri terlebih dahulu sebelum melihat solusi. Jika kamu kesulitan, kamu bisa menekan tombol di bawah untuk melihat referensi jawaban.</p>
            <div style="margin-top:16px;">
                <button class="btn btn-outline" onclick="document.getElementById('sol-${id}').style.display='block';this.style.display='none';highlightAllCode();">Lihat Solusi Kode</button>
                <div id="sol-${id}" style="display:none; margin-top:16px;">
                    <pre><code class="language-python">${ex.solution.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
                </div>
            </div>
        </div>

        <div class="materi-nav">
            <button class="nav-btn" onclick="navigateTo('latihan')">
                <span class="label">← Kembali</span>
                <span class="title">Daftar Latihan</span>
            </button>
            <div></div>
        </div>
    </article>`;
}

// ========== RENDER PROYEK ==========
function renderProyek() {
    return `
    <section class="section" style="padding-top:calc(var(--nav-height) + 40px)">
        <div class="section-inner">
            <div class="section-header fade-in">
                <h2>🚀 Proyek Python</h2>
                <p>Bangun proyek nyata untuk portfolio-mu</p>
            </div>
            <div class="project-grid">
                ${PROYEK_DATA.map(p => `
                <div class="project-card fade-in" onclick="openProyek(${p.id})" style="cursor:pointer">
                    <span class="difficulty ${p.difficulty}">${p.difficulty === 'easy' ? '🟢 Mudah' : p.difficulty === 'medium' ? '🟡 Sedang' : '🔴 Sulit'}</span>
                    <h3 style="margin:12px 0 8px">${p.title}</h3>
                    <p style="color:var(--text-secondary);font-size:0.92rem;margin-bottom:16px">${p.desc}</p>
                    <div style="display:flex;gap:6px;flex-wrap:wrap">
                        ${p.topics.map(t => `<span style="padding:4px 10px;border-radius:100px;background:rgba(37,99,235,0.08);color:var(--primary);font-size:0.75rem;font-weight:600">${t}</span>`).join('')}
                    </div>
                </div>`).join('')}
            </div>
        </div>
    </section>`;
}

function openProyek(id) {
    currentPage = 'proyek-detail';
    window.scrollTo({ top: 0 });
    document.getElementById('mainContent').innerHTML = renderProyekDetail(id);
    highlightAllCode();
    initFadeIn();
}

function renderProyekDetail(id) {
    const p = PROYEK_DATA.find(x => x.id === id);
    if (!p) return '';
    
    return `
    <article class="materi-detail">
        <div class="breadcrumb">
            <a href="#" onclick="navigateTo('proyek')">Proyek</a> <span>›</span> <span>${p.title}</span>
        </div>
        <h1>🚀 ${p.title}</h1>
        <div class="meta">
            <span class="difficulty ${p.difficulty}">${p.difficulty === 'easy' ? '🟢 Mudah' : p.difficulty === 'medium' ? '🟡 Sedang' : '🔴 Sulit'}</span>
            <span>Konsep: ${p.topics.join(', ')}</span>
        </div>

        <div class="materi-body">
            <h3>Langkah Pengerjaan</h3>
            <div class="info-box" style="border-left-color: var(--accent); background: rgba(255, 212, 59, 0.08);">${p.steps}</div>
            
            <h3>Solusi Kode Final</h3>
            <p>Ini adalah referensi implementasi lengkap untuk proyek ini. Sangat disarankan untuk mencoba membuatnya sendiri tahap demi tahap terlebih dahulu.</p>
            <div style="margin-top:16px;">
                <button class="btn btn-outline" onclick="document.getElementById('sol-p-${id}').style.display='block';this.style.display='none';highlightAllCode();">Lihat Solusi Proyek</button>
                <div id="sol-p-${id}" style="display:none; margin-top:16px;">
                    <pre><code class="language-python">${p.solution.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
                </div>
            </div>
        </div>

        <div class="materi-nav">
            <button class="nav-btn" onclick="navigateTo('proyek')">
                <span class="label">← Kembali</span>
                <span class="title">Daftar Proyek</span>
            </button>
            <div></div>
        </div>
    </article>`;
}

// ========== RENDER TENTANG ==========
function renderTentang() {
    return `
    <div class="about-hero fade-in">
        <h1>Tentang <span style="color:var(--primary)">Selalu Ngoding</span></h1>
        <p>Platform edukasi Python terlengkap yang dirancang untuk kenyamanan belajar dan kemudahan memahami konsep pemrograman.</p>
    </div>
    
    <section class="section section-alt">
        <div class="section-inner">
            <div class="features-grid">
                <div class="feature-card fade-in"><div class="f-icon">📚</div><h3>19 Materi Lengkap</h3><p>Dari dasar sampai lanjutan, terstruktur dan mudah dipahami</p></div>
                <div class="feature-card fade-in"><div class="f-icon">🧠</div><h3>Quiz Interaktif</h3><p>Uji pemahaman dengan quiz di setiap materi</p></div>
                <div class="feature-card fade-in"><div class="f-icon">💪</div><h3>Latihan Coding</h3><p>12 latihan dengan berbagai tingkat kesulitan</p></div>
                <div class="feature-card fade-in"><div class="f-icon">🚀</div><h3>Proyek Nyata</h3><p>Bangun proyek untuk portfolio profesional</p></div>
                <div class="feature-card fade-in"><div class="f-icon">📊</div><h3>Tracking Progress</h3><p>Pantau kemajuan belajar dengan local storage</p></div>
                <div class="feature-card fade-in"><div class="f-icon">🌙</div><h3>Dark Mode</h3><p>Mode gelap untuk kenyamanan belajar di malam hari</p></div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="section-inner">
            <div class="section-header fade-in">
                <h2>👋 Kenalan dengan Kreator</h2>
                <p>Di balik layar Selalu Ngoding</p>
            </div>
            
            <div class="creator-profile fade-in" style="display:flex; flex-wrap:wrap; gap:40px; align-items:center; background:var(--bg-card); padding:40px; border-radius:var(--radius-xl); border:1px solid var(--border); box-shadow:var(--shadow-md);">
                
                <!-- Profil Singkat -->
                <div style="flex:1; min-width:280px; text-align:center;">
                    <img src="assets/creator.jpg" alt="Foto Kreator" style="width:200px; height:200px; object-fit:cover; border-radius:50%; margin:0 auto 20px; border:4px solid var(--primary); box-shadow:var(--shadow);">
                    <h3 style="font-size:1.6rem; font-weight:800; margin-bottom:4px;">Nalar Qaer</h3>
                    <p style="color:var(--primary); font-weight:600; margin-bottom:16px;">Founder & Developer</p>
                    <p style="color:var(--text-secondary); font-size:1rem; line-height:1.7; text-align:left;">Halo! Saya membuat platform ini khusus untuk membantu teman-teman pemula yang ingin terjun ke dunia pemrograman Python tanpa rasa takut. Semoga platform ini bisa menjadi langkah awal kesuksesan Anda di dunia IT!</p>
                </div>

                <!-- Info TikTok -->
                <div style="flex:1; min-width:280px; text-align:center;">
                    <div style="background:var(--bg-secondary); padding:24px; border-radius:var(--radius-lg); border:1px solid var(--border);">
                        <h4 style="margin-bottom:16px; font-weight:700; font-size:1.2rem;">Dukung Kami di TikTok! 🖤</h4>
                        <img src="assets/tiktok.jpg" alt="TikTok Selalu Ngoding" style="width:100%; max-width:280px; border-radius:12px; margin:0 auto 20px; box-shadow:var(--shadow-md);">
                        <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:20px;">Dapatkan konten edukasi coding gratis dan seru setiap harinya.</p>
                        <a href="https://www.tiktok.com/@nalarqaer89" target="_blank" class="btn btn-primary" style="width:100%; justify-content:center;">
                            ▶ Ikuti @nalarqaer89
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>`;
}

// ========== PROGRESS & COMPLETION ==========
function toggleComplete(id) {
    if (completedMateri.includes(id)) {
        completedMateri = completedMateri.filter(x => x !== id);
    } else {
        completedMateri.push(id);
    }
    localStorage.setItem('sn_completed', JSON.stringify(completedMateri));
    updateProgress();
    openMateri(id);
}

function updateProgress() {
    const pct = MATERI_DATA.length > 0 ? Math.round(completedMateri.length / MATERI_DATA.length * 100) : 0;
    const el = document.getElementById('progressPercent');
    const fill = document.getElementById('progressFill');
    if (el) el.textContent = pct + '%';
    if (fill) fill.style.width = pct + '%';
    buildSidebar();
}

// ========== SIDEBAR ==========
function buildSidebar() {
    const list = document.getElementById('sidebarList');
    if (!list) return;
    list.innerHTML = MATERI_DATA.map(m => {
        const done = completedMateri.includes(m.id);
        return `<li class="sidebar-item ${done ? 'completed' : ''}" onclick="openMateri(${m.id});toggleSidebar()">
            <span class="check">${done ? '✓' : ''}</span>
            <span>${m.id + 1}. ${m.title}</span>
        </li>`;
    }).join('');
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebarOverlay').classList.toggle('active');
}

// ========== SEARCH ==========
function toggleSearch() {
    const ov = document.getElementById('searchOverlay');
    ov.classList.toggle('active');
    if (ov.classList.contains('active')) {
        document.getElementById('searchInput').focus();
    }
}

function handleSearch(val) {
    const res = document.getElementById('searchResults');
    if (!val.trim()) { res.innerHTML = ''; return; }
    const q = val.toLowerCase();
    const matches = MATERI_DATA.filter(m =>
        m.title.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q)
    );
    res.innerHTML = matches.length === 0
        ? '<p style="padding:16px;color:var(--text-muted);text-align:center">Tidak ditemukan</p>'
        : matches.map(m => `
        <div class="search-item" onclick="openMateri(${m.id});toggleSearch()">
            <span class="s-icon">${m.icon}</span>
            <div><div class="s-title">${m.title}</div><div class="s-desc">${m.desc}</div></div>
        </div>`).join('');
}

// ========== QUIZ ==========
function checkAnswer(materiId, qIdx, chosen) {
    const quiz = QUIZ_DATA[materiId][qIdx];
    const container = document.getElementById(`quiz-${materiId}-${qIdx}`);
    const buttons = container.querySelectorAll('.quiz-option');
    buttons.forEach((btn, j) => {
        btn.disabled = true;
        if (j === quiz.answer) btn.classList.add('correct');
        if (j === chosen && chosen !== quiz.answer) btn.classList.add('wrong');
    });
}

// ========== MOBILE NAV ==========
function toggleMobile() {
    document.getElementById('navLinks').classList.toggle('open');
}
function closeMobile() {
    document.getElementById('navLinks').classList.remove('open');
}

// ========== SCROLL EFFECTS ==========
function initScrollEffects() {
    window.addEventListener('scroll', () => {
        const btn = document.getElementById('backToTop');
        if (btn) btn.classList.toggle('visible', window.scrollY > 400);
    });
}

function initFadeIn() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }});
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ========== SYNTAX HIGHLIGHTING ==========
function highlightAllCode() {
    document.querySelectorAll('pre code').forEach(block => {
        hljs.highlightElement(block);
    });
}
