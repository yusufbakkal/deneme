document.addEventListener('DOMContentLoaded', function() {
    // Form elementi
    const signupForm = document.getElementById('signupForm');
    
    // Password toggle
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.querySelector('.password-toggle');
    
    // Sosyal medya butonları
    const socialButtons = document.querySelectorAll('.google-btn, .facebook-btn');
    
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
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = passwordInput.value;
        
        // Basit validasyon
        if (!firstName || !lastName || !email || !password) {
            addShakeEffect(document.querySelector('.submit-btn'));
            return;
        }
        
        // Burada kayıt işlemleri yapılacak
        console.log('Kayıt yapılıyor...', { firstName, lastName, email, password });
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