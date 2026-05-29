window.addEventListener('load', () => {

    setTimeout(() => {

        document
            .getElementById('loader')
            .classList.add('hide');

    }, 1000);

});

const themeBtn =
    document.getElementById('themeToggle');

themeBtn.addEventListener('click', () => {

    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {

        themeBtn.innerHTML = '🌙';

    } else {

        themeBtn.innerHTML = '☀';

    }

});

window.addEventListener('scroll', () => {

    const scrollTop = window.scrollY;

    const height =
        document.body.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / height) * 100;

    document
        .getElementById('progressBar')
        .style.width = progress + '%';

});

const reveals =
    document.querySelectorAll('.reveal');

function revealOnScroll() {

    reveals.forEach(el => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            el.classList.add('active');

        }

    });

}

window.addEventListener(
    'scroll',
    revealOnScroll
);

revealOnScroll();

const cursor =
    document.querySelector('.cursor');

const cursorDot =
    document.querySelector('.cursor-dot');

window.addEventListener('mousemove', (e) => {

    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';

});

const hoverItems =
    document.querySelectorAll(
        'a, button, .project-card'
    );

hoverItems.forEach((item) => {

    item.addEventListener('mouseenter', () => {

        cursor.style.width = '70px';
        cursor.style.height = '70px';

    });

    item.addEventListener('mouseleave', () => {

        cursor.style.width = '40px';
        cursor.style.height = '40px';

    });

});

window.addEventListener('load', () => {

    setTimeout(() => {

        document
            .getElementById('loader')
            .classList.add('hide');

    }, 1500);

});

const counters =
    document.querySelectorAll('.counter');

counters.forEach((counter) => {

    const updateCounter = () => {

        const target =
            +counter.getAttribute('data-target');

        const current =
            +counter.innerText;

        const increment =
            target / 100;

        if (current < target) {

            counter.innerText =
                Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


/* MONEY COUNTER */

const moneyCounters =
    document.querySelectorAll('.counter-money');

moneyCounters.forEach((counter) => {

    const updateCounter = () => {

        const target =
            +counter.getAttribute('data-target');

        const current =
            +counter.innerText;

        const increment =
            target / 100;

        if (current < target) {

            counter.innerText =
                Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText =
                '₹' + target + 'K';

        }

    };

    updateCounter();

});

const hamburger =
    document.getElementById('hamburger');

const navLinks =
    document.querySelector('.nav-links');

const overlay =
    document.getElementById('overlay');

hamburger.addEventListener('click', () => {

    hamburger.classList.toggle('active');

    navLinks.classList.toggle('active');

    overlay.classList.toggle('active');

});

overlay.addEventListener('click', () => {

    hamburger.classList.remove('active');

    navLinks.classList.remove('active');

    overlay.classList.remove('active');

});

document.querySelectorAll('.nav-links a')
    .forEach((link) => {

        link.addEventListener('click', () => {

            hamburger.classList.remove('active');

            navLinks.classList.remove('active');

            overlay.classList.remove('active');

        });

    });

const particlesContainer =
    document.getElementById('particles');

for (let i = 0; i < 40; i++) {

    const particle =
        document.createElement('div');

    particle.classList.add('particle');

    particle.style.left =
        Math.random() * 100 + 'vw';

    particle.style.animationDuration =
        (Math.random() * 10 + 10) + 's';

    particle.style.animationDelay =
        Math.random() * 5 + 's';

    particle.style.opacity =
        Math.random();

    particle.style.width =
        particle.style.height =
        (Math.random() * 4 + 2) + 'px';

    particlesContainer.appendChild(particle);

}

