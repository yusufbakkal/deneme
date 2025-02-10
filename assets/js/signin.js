document.addEventListener('DOMContentLoaded', function() {
    // Form elementi
    const loginForm = document.getElementById('loginForm');
    
    // Password toggle
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.querySelector('.password-toggle');
    
    // Sosyal medya butonları
    const socialButtons = document.querySelectorAll('.google-button, .facebook-button');
    
    // Şifre göster/gizle
    passwordToggle.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // İkon değiştir
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    });
    
    // Form submit
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Email validasyonu
        if (!isValidEmail(email)) {
            showError('Geçerli bir email adresi giriniz');
            return;
        }
        
        // Şifre validasyonu
        if (password.length < 6) {
            showError('Şifre en az 6 karakter olmalıdır');
            return;
        }
        
        // Loading durumu
        showLoading();
        
        // Form gönderimi
        submitForm({ email, password });
    });
    
    // Sosyal medya butonlarına shake efekti
    socialButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            addShakeEffect(this);
        });
    });
    
    // Shake efekti fonksiyonu
    function addShakeEffect(element) {
        element.classList.add('shake');
        element.addEventListener('animationend', () => {
            element.classList.remove('shake');
        }, { once: true });
    }
});

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    // Error mesajını forma ekle
}

function showLoading() {
    const submitBtn = document.querySelector('.submit-button');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Giriş yapılıyor...';
} 