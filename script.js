document.addEventListener('DOMContentLoaded', function () {
    var intro = document.querySelector('.parallax1');
    var background = document.querySelector('.parallaximg1');

    var intro2 = document.querySelector('.parallax2');
    var background2 = document.querySelector('.parallaximg2');

    window.addEventListener('scroll', function () {
        var scrolled = window.scrollY;

        // Parallax effect for the background images
        parallax(background, scrolled, 0.4);
        parallax(background2, scrolled, 0.4);
    });
});

// Function for parallax effect
function parallax(element, scrollPosition, speed, initialOffset = 0) {
    var offset = initialOffset - scrollPosition * speed;
    element.style.transform = 'translateY(' + offset + 'px)';
    element.style.zIndex = '-1';
}





document.addEventListener('DOMContentLoaded', function () {
    const moonButton = document.getElementById('moonButton');
    const body = document.body;
    const stacks = document.querySelector('.stacks');

    moonButton.addEventListener('click', toggleDarkMode);

    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        stacks.classList.toggle('dark-mode-stacks'); // Toggle a class directly on .stacks

        // Get all stack elements
        const stackElements = document.querySelectorAll('.stack1, .stack2, .stack3, .stack4, .stack5');

        // Toggle the dark mode class on each stack element
        stackElements.forEach((stack) => {
            stack.classList.toggle('dark-mode');
        });

        // Store the user's preference in localStorage for persistence
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    }

    // Check user's preference from localStorage
    const savedDarkMode = localStorage.getItem('darkMode');

    if (savedDarkMode === 'true') {
        body.classList.add('dark-mode');
        stacks.classList.add('dark-mode-stacks');

        // Add dark mode class to each stack element
        const stackElements = document.querySelectorAll('.stack1, .stack2, .stack3, .stack4, .stack5');
        stackElements.forEach((stack) => {
            stack.classList.add('dark-mode');
        });
    }
});
