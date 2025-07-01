document.addEventListener('DOMContentLoaded', () => {
    // 1. Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.main-nav .nav-list');

    if (hamburger && navList) {
        hamburger.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        // Close menu if a nav link is clicked (useful for single-page navigation)
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active');
                }
            });
        });
    }

    // 2. Simple Cookie Consent Bar Dismissal (Optional)
    const allowCookiesBtn = document.querySelector('.allow-all-cookies');
    const doNotAllowCookiesBtn = document.querySelector('.do-not-allow-cookies');
    const cookieConsentBar = document.querySelector('.cookie-consent-bar');

    if (allowCookiesBtn && doNotAllowCookiesBtn && cookieConsentBar) {
        // Check if cookie consent is already given (e.g., in localStorage)
        if (localStorage.getItem('cookieConsentGiven') === 'true') {
            cookieConsentBar.style.display = 'none'; // Hide if already consented
        }

        allowCookiesBtn.addEventListener('click', () => {
            localStorage.setItem('cookieConsentGiven', 'true');
            cookieConsentBar.style.display = 'none';
            alert('Cookies allowed! (In a real app, this would enable tracking scripts)');
        });

        doNotAllowCookiesBtn.addEventListener('click', () => {
            localStorage.setItem('cookieConsentGiven', 'false');
            cookieConsentBar.style.display = 'none';
            alert('Cookies not allowed! (In a real app, this would prevent tracking scripts)');
        });
    }

    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
            // For a full FAQ, you'd typically have a hidden answer div here:
            // let answer = item.nextElementSibling; // assuming answer is immediate sibling
            // if (answer && answer.classList.contains('faq-answer')) { // assuming a class for answer
            //     if (answer.style.display === "block") {
            //         answer.style.display = "none";
            //     } else {
            //         answer.style.display = "block";
            //     }
            // }
        });
    });
    // You can add more JavaScript for:
    // - Smooth scrolling for navigation links (if using internal anchors)
    // - Client-side form validation
    // - Dynamic content loading (though less common for a simple landing page)
    // - A more advanced carousel for Google Reviews (requires more complex JS logic)
});