document.addEventListener('DOMContentLoaded', function() {
    const notificationBtn = document.getElementById('notificationBtn');
    const notificationDropdown = document.getElementById('notificationDropdown');
    const markAllReadBtn = document.querySelector('.mark-all-read');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    // Bildirim menüsünü aç/kapa
    notificationBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        notificationDropdown.classList.toggle('active');
    });

    // Sayfa herhangi bir yerine tıklandığında menüyü kapat
    document.addEventListener('click', function(e) {
        if (!notificationDropdown.contains(e.target)) {
            notificationDropdown.classList.remove('active');
        }
    });

    // Tümünü okundu işaretle
    markAllReadBtn.addEventListener('click', function() {
        const unreadItems = document.querySelectorAll('.notification-item.unread');
        unreadItems.forEach(item => {
            item.classList.remove('unread');
        });
        
        // Bildirim sayısını sıfırla
        const badge = document.querySelector('.notification-badge');
        badge.style.display = 'none';
    });

    // Bildirime tıklandığında okundu olarak işaretle
    const notificationItems = document.querySelectorAll('.notification-item');
    notificationItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.remove('unread');
            
            // Okunmamış bildirim sayısını güncelle
            const unreadCount = document.querySelectorAll('.notification-item.unread').length;
            const badge = document.querySelector('.notification-badge');
            
            if (unreadCount === 0) {
                badge.style.display = 'none';
            } else {
                badge.textContent = unreadCount;
            }
        });
    });

    hamburgerBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Sayfa dışına tıklandığında menüyü kapat
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.hamburger-menu') && 
            !event.target.closest('.mobile-menu')) {
            hamburgerBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });

    // Menü linklerine tıklandığında menüyü kapat
    const menuLinks = document.querySelectorAll('.mobile-menu .nav-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburgerBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}); 