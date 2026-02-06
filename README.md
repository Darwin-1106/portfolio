# 🎨 PORTFOLIO TEMPLATE - VIBECODE KIT

## 📦 CẤU TRÚC THỦ MỤC

```
portfolio/
│
├── index.html          # File HTML chính
├── css/
│   └── style.css      # Tất cả CSS tại đây
├── js/
│   └── script.js      # JavaScript tại đây
└── images/            # Bỏ ảnh của bạn vào đây
    └── (your images)
```

---

## 🚀 CÁCH SỬ DỤNG

### Bước 1: Mở file
- Mở `index.html` bằng trình duyệt để xem
- Mở bằng VS Code để chỉnh sửa

### Bước 2: Tìm comment và thay đổi
Mọi chỗ cần sửa đều có comment `📝` rõ ràng:

**Trong `index.html`:**
- Thông tin meta (dòng 10-13)
- Logo/tên (dòng 32)
- Hero text (dòng 50-60)
- About me (dòng 95-105)
- Skills (dòng 116-130)
- Projects (dòng 150-230)
- Social links (dòng 260-280)
- Footer (dòng 295)

**Trong `css/style.css`:**
- Màu sắc (dòng 9-17)
- Ảnh hero (dòng 272-285)
- Ảnh projects (dòng 442-460)

**Trong `js/script.js`:**
- Thêm JavaScript tùy chỉnh (dòng 45+)

---

## 🎨 THAY ĐỔI MÀU SẮC

Mở `css/style.css` và tìm phần này (dòng 9-17):

```css
:root {
    --primary: #6366f1;      /* Màu chính */
    --accent: #ec4899;       /* Màu nhấn */
    --bg-dark: #0a0a0f;      /* Nền tối */
    --bg-card: #1a1a2e;      /* Nền card */
}
```

### Gợi ý color schemes đẹp:

**Blue Professional:**
```css
--primary: #3b82f6;
--accent: #06b6d4;
```

**Purple Creative:**
```css
--primary: #a855f7;
--accent: #ec4899;
```

**Green Fresh:**
```css
--primary: #10b981;
--accent: #14b8a6;
```

**Orange Bold:**
```css
--primary: #f97316;
--accent: #fb923c;
```

---

## 🖼️ THÊM ẢNH

### 1. Tạo folder images
```
portfolio/
└── images/
    ├── hero-photo.jpg
    ├── project1.jpg
    ├── project2.jpg
    └── project3.jpg
```

### 2. Ảnh Hero
Trong `css/style.css` (dòng 272), uncomment và sửa:
```css
.image-placeholder {
    background-image: url('../images/hero-photo.jpg');
    background-size: cover;
    background-position: center;
}
```

### 3. Ảnh Projects
Trong `css/style.css` (dòng 442), uncomment:
```css
.project-1 { 
    background-image: url('../images/project1.jpg'); 
    background-size: cover; 
    background-position: center;
}
```

**Hoặc dùng link online:**
```css
background-image: url('https://i.imgur.com/abc123.jpg');
```

---

## ✏️ CHỈNH SỬA NỘI DUNG

### Hero Section (index.html - dòng 50)
```html
<h1>Hi, I'm <span class="gradient-text">Nguyễn Văn A</span></h1>
<p>A passionate Frontend Developer specializing in React & UI/UX Design.</p>
```

### About Me (index.html - dòng 95)
```html
<h3>My Story</h3>
<p>
    Viết câu chuyện của bạn ở đây. Ai bạn là? 
    Bạn làm gì? Passion của bạn là gì?
</p>
```

### Skills (index.html - dòng 116)
**Thêm skill mới - Copy block này:**
```html
<div class="skill-item">
    <h4>Tên Skill</h4>
    <p>Chi tiết công nghệ</p>
</div>
```

### Projects (index.html - dòng 150)
Mỗi project card:
```html
<div class="project-card">
    <div class="project-image project-1">🎨</div>
    <div class="project-content">
        <h3>Tên Dự Án</h3>
        <div class="project-tags">
            <span class="tag">React</span>
            <span class="tag">Node.js</span>
        </div>
        <p>Mô tả ngắn về dự án...</p>
        <a href="link-den-du-an" class="btn btn-primary">View Project →</a>
    </div>
</div>
```

**Thêm project mới:** Copy toàn bộ block `.project-card`

---

## 🔗 THÊM SOCIAL LINKS

Trong `index.html` (dòng 260+):

```html
<!-- GitHub -->
<a href="https://github.com/your-username" class="social-link" target="_blank">
    <!-- SVG icon -->
</a>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/your-username" class="social-link" target="_blank">
    <!-- SVG icon -->
</a>
```

**Thêm platform khác:** Copy block `<a class="social-link">` và đổi SVG icon

---

## 🎭 ĐỔI FONT CHỮ

### Cách 1: Dùng Google Fonts có sẵn
Trong `index.html` (dòng 16-17), link đã có:
- **Syne** - Font tiêu đề (bold, hiện đại)
- **DM Sans** - Font body (clean, dễ đọc)

### Cách 2: Thêm font mới
1. Vào [Google Fonts](https://fonts.google.com/)
2. Chọn font, copy link `<link>`
3. Paste vào `index.html` (sau dòng 17)
4. Sửa trong `css/style.css`:

```css
body {
    font-family: 'Font-Moi-Chon', sans-serif;
}

.section-title, h1, h2, h3 {
    font-family: 'Font-Tieu-De', sans-serif;
}
```

---

## 📱 TEST RESPONSIVE

### Desktop
- Mở file bằng Chrome/Firefox
- Check các breakpoint: 1920px, 1440px, 1024px

### Tablet
- F12 → Toggle device toolbar
- Chọn iPad/Surface

### Mobile
- F12 → Chọn iPhone/Samsung
- Test portrait + landscape

---

## 🌐 DEPLOY LÊN INTERNET

### Option 1: Netlify (Dễ nhất, FREE)
1. Vào [netlify.com](https://netlify.com)
2. Kéo thả folder `portfolio` vào
3. Done! Có link ngay

### Option 2: GitHub Pages (FREE)
1. Tạo repo GitHub mới
2. Push code lên
3. Settings > Pages > Deploy from main branch
4. Link: `username.github.io/repo-name`

### Option 3: Vercel (FREE, Pro)
1. Import repo từ GitHub
2. Deploy tự động
3. Custom domain miễn phí

---

## 🐛 TROUBLESHOOTING

### ❌ CSS không load?
**Check:**
- Đường dẫn `<link href="css/style.css">` đúng chưa
- File `style.css` có trong folder `css/` chưa
- Clear cache (Ctrl + Shift + R)

### ❌ JavaScript không chạy?
**Check:**
- Script tag trước `</body>` chưa
- Mở Console (F12) xem có lỗi không

### ❌ Ảnh không hiển thị?
**Fix:**
- Kiểm tra đường dẫn: `../images/ten-anh.jpg`
- Hoặc dùng link online: `https://i.imgur.com/abc.jpg`
- Check tên file: `project1.jpg` khớp với CSS không

### ❌ Layout vỡ trên mobile?
- Code đã responsive sẵn!
- Nếu vẫn vỡ, check có thêm CSS custom nào conflict không

---

## ✨ NÂNG CAO (OPTIONAL)

### Thêm Dark/Light Mode Toggle
```javascript
// Thêm vào js/script.js
const toggleTheme = () => {
    document.body.classList.toggle('light-mode');
};
```

### Thêm Loading Animation
```html
<!-- Thêm vào index.html trước </body> -->
<div class="loader" id="loader">Loading...</div>
```

### Thêm Form Contact
```html
<form class="contact-form">
    <input type="text" placeholder="Name">
    <input type="email" placeholder="Email">
    <textarea placeholder="Message"></textarea>
    <button type="submit" class="btn btn-primary">Send</button>
</form>
```

---

## 📋 CHECKLIST HOÀN THIỆN

- [ ] Đổi title và meta description
- [ ] Thay logo/tên
- [ ] Sửa hero heading và description
- [ ] Thêm ảnh hero (hoặc giữ emoji)
- [ ] Viết About Me story
- [ ] List skills của bạn
- [ ] Thêm 3+ projects với:
  - [ ] Tên project
  - [ ] Description
  - [ ] Tags/tech stack
  - [ ] Link to project
  - [ ] Ảnh preview (optional)
- [ ] Cập nhật email
- [ ] Thêm social links (GitHub, LinkedIn, etc.)
- [ ] Thay copyright footer
- [ ] Test trên desktop
- [ ] Test trên mobile
- [ ] Deploy lên internet

---

## 🎁 BONUS TIPS

### 1. Tối ưu SEO
Thêm vào `<head>`:
```html
<meta name="keywords" content="frontend developer, web design, portfolio">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Portfolio description">
```

### 2. Google Analytics (Optional)
Thêm tracking code vào trước `</head>`

### 3. Favicon
Tạo favicon.ico và thêm:
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

### 4. Custom Domain
Sau khi deploy, mua domain và point về:
- Netlify: Settings > Domain management
- Vercel: Project settings > Domains

---

## 📞 CẦN HỖ TRỢ?

Nếu gặp vấn đề hoặc muốn custom thêm, cứ hỏi tôi!

**Chúc bạn thành công! 🚀✨**