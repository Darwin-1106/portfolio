# 🎨 HƯỚNG DẪN TÙY CHỈNH PORTFOLIO

## 📦 Bạn nhận được gì?

Một template portfolio hiện đại với:
- ✅ **Dark theme** với hiệu ứng gradient động
- ✅ **Responsive** - Tự động responsive trên mọi thiết bị
- ✅ **Animation** mượt mà (fade in, hover effects, smooth scroll)
- ✅ **Comment rõ ràng** - Mọi chỗ cần thay đều có comment hướng dẫn

---

## 🚀 CÁCH SỬ DỤNG

### Bước 1: Mở file HTML
- Mở file `portfolio-template.html` bằng **VS Code** hoặc text editor
- Hoặc mở trực tiếp bằng trình duyệt để xem trước

### Bước 2: Tìm các comment
Tất cả chỗ cần điền có comment bắt đầu bằng:
```
<!-- ==========================================
     📝 THAY ĐỔI THÔNG TIN TẠI ĐÂY
     ========================================== -->
```

---

## 📝 CÁC PHẦN CẦN THAY ĐỔI

### 1️⃣ THÔNG TIN CƠ BẢN (Dòng 10-13)
```html
<title>Tên Bạn - Portfolio</title>
<meta name="description" content="Portfolio của [Tên bạn] - [Nghề nghiệp]">
```

### 2️⃣ MÀU SẮC (Dòng 19-28)
```css
:root {
    --primary: #6366f1;      /* Màu chính - Thay bằng màu bạn thích */
    --accent: #ec4899;       /* Màu nhấn */
    --bg-dark: #0a0a0f;      /* Nền tối */
}
```

**Gợi ý màu đẹp:**
- Blue: `#6366f1` (hiện tại)
- Purple: `#a855f7`
- Green: `#10b981`
- Orange: `#f97316`
- Pink: `#ec4899`

### 3️⃣ LOGO/TÊN (Dòng 388)
```html
<div class="logo">YourName</div>
```

### 4️⃣ HERO SECTION (Dòng 408-418)
```html
<h1>Hi, I'm <span class="gradient-text">Your Name</span></h1>
<p>A passionate [Your Role] specializing in...</p>
```

**Ví dụ:**
```html
<h1>Hi, I'm <span class="gradient-text">Nguyễn Văn A</span></h1>
<p>A passionate Frontend Developer specializing in React & UI/UX Design.</p>
```

### 5️⃣ ẢNH HERO (Dòng 432)
**Cách 1: Giữ emoji**
```html
<div class="image-placeholder">
    🎨  <!-- Đổi emoji -->
</div>
```

**Cách 2: Dùng ảnh thật**
Vào CSS (dòng 182) và bỏ comment:
```css
.image-placeholder {
    background-image: url('link-anh-cua-ban.jpg');
    background-size: cover;
    background-position: center;
}
```

### 6️⃣ ABOUT ME (Dòng 452-467)
```html
<h3>My Story</h3>
<p>
    Viết về bản thân bạn ở đây...
</p>
```

### 7️⃣ SKILLS (Dòng 476-492)
**Thêm/sửa skills:**
```html
<div class="skill-item">
    <h4>Tên Skill</h4>
    <p>Chi tiết</p>
</div>
```

**Copy paste block này để thêm skill mới!**

### 8️⃣ PROJECTS (Dòng 510-585)
Mỗi dự án có cấu trúc:
```html
<div class="project-card">
    <div class="project-image">🎨</div>
    <div class="project-content">
        <h3>Tên Dự Án</h3>
        <div class="project-tags">
            <span class="tag">React</span>
            <span class="tag">Tailwind</span>
        </div>
        <p>Mô tả dự án...</p>
        <a href="link-du-an" class="btn btn-primary">View Project →</a>
    </div>
</div>
```

**Thêm ảnh project:**
Vào CSS (dòng 277) và thêm:
```css
.project-1 { 
    background-image: url('project1.jpg'); 
    background-size: cover; 
}
```

### 9️⃣ CONTACT & SOCIAL (Dòng 599-650)
```html
<!-- Email -->
<a href="mailto:your.email@example.com" class="btn btn-primary">

<!-- Social Links -->
<a href="https://github.com/yourusername" class="social-link">
<a href="https://linkedin.com/in/yourusername" class="social-link">
```

### 🔟 FOOTER (Dòng 662)
```html
<p>&copy; 2026 Your Name. All rights reserved.</p>
```

---

## 🖼️ CÁCH THÊM ẢNH

### Cách 1: Dùng link online
```css
background-image: url('https://i.imgur.com/abc123.jpg');
```

### Cách 2: Dùng ảnh local
1. Tạo folder `images` cùng cấp với file HTML
2. Bỏ ảnh vào folder đó
3. Dùng đường dẫn tương đối:
```css
background-image: url('images/my-photo.jpg');
```

---

## 🎨 TÙY CHỈNH NÂNG CAO

### Đổi Font chữ (Dòng 16-17)
Vào [Google Fonts](https://fonts.google.com/) chọn font, copy link và thay:
```html
<link href="https://fonts.googleapis.com/css2?family=TenFont&display=swap" rel="stylesheet">
```

Rồi sửa trong CSS:
```css
body {
    font-family: 'TenFont', sans-serif;
}
```

### Thêm Section mới
Copy bất kỳ section nào và chỉnh sửa nội dung!

### Đổi màu nút CTA
```css
.btn-primary {
    background: linear-gradient(135deg, #màu1, #màu2);
}
```

---

## 🐛 TROUBLESHOOTING

**❌ Ảnh không hiển thị?**
- Kiểm tra đường dẫn ảnh đúng chưa
- Dùng link online thử (imgur, cloudinary...)

**❌ Màu không đổi?**
- Refresh trình duyệt (Ctrl + F5)
- Xóa cache

**❌ Layout bị vỡ trên mobile?**
- Code đã responsive sẵn, không lo!

---

## 📤 DEPLOY LÊN INTERNET

### Cách 1: GitHub Pages (FREE)
1. Push code lên GitHub
2. Settings > Pages > Deploy

### Cách 2: Netlify (FREE)
1. Kéo thả folder vào [Netlify Drop](https://app.netlify.com/drop)
2. Done!

### Cách 3: Vercel (FREE)
1. Import từ GitHub
2. Deploy tự động

---

## ✨ TIPS

- 🎨 Chọn 1-2 màu chính thôi, đừng lòe loẹt quá!
- 📝 Viết ngắn gọn, súc tích
- 🖼️ Ảnh nên là JPG/PNG, dưới 500KB
- 📱 Test trên mobile trước khi deploy
- 🔗 Đảm bảo link project/social work

---

## 🎁 BONUS: CHECKLIST HOÀN THIỆN

- [ ] Đổi tên trong `<title>` và Hero
- [ ] Thay màu sắc phù hợp
- [ ] Thêm ảnh đại diện
- [ ] Viết About Me
- [ ] Liệt kê Skills
- [ ] Thêm 3+ projects với ảnh
- [ ] Cập nhật email
- [ ] Link social media
- [ ] Test trên mobile
- [ ] Deploy lên internet

---

**Chúc bạn thành công! 🚀**

Nếu cần hỗ trợ thêm, cứ hỏi tôi nhé!