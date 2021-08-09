const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
// const nav = document.querySelector('.nav');
// const menuNav = document.querySelector('.menu-nav');
// const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        // nav.classList.add('open');
        // menuNav.classList.add('open');
        // navItems.forEach(item => item.classList.add('open'));
        
        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        // nav.classList.remove('open');
        // menuNav.classList.remove('open');
        // navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}


// 相性section
const proper = document.querySelector('#proper');
const stability = document.querySelector('#stability');
const versatility = document.querySelector('#versatility');

const proper_trueFalse = document.querySelector('.proper .true-false');
const stability_trueFalse = document.querySelector('.stability .true-false');
const versatility_trueFalse = document.querySelector('.versatility .true-false');


stability.addEventListener('click', toStability);
proper.addEventListener('click', toProper);
versatility.addEventListener('click', toVersatility);

function toStability() {
    proper.classList.remove('active')
    versatility.classList.remove('active')
    stability.classList.add('active')

    proper_trueFalse.style.display ="none";
    versatility_trueFalse.style.display ="none";
    stability_trueFalse.style.display ="flex";
}
function toProper() {
    versatility.classList.remove('active')
    stability.classList.remove('active')
    proper.classList.add('active')

    versatility_trueFalse.style.display ="none";
    stability_trueFalse.style.display ="none";
    proper_trueFalse.style.display ="flex";
}
function toVersatility() {
    stability.classList.remove('active')
    proper.classList.remove('active')
    versatility.classList.add('active')

    stability_trueFalse.style.display ="none";
    proper_trueFalse.style.display ="none";
    versatility_trueFalse.style.display ="flex";
}

// やり方section
const flexibility = document.querySelector('#flexibility');
const speed = document.querySelector('#speed');
const talent = document.querySelector('#talent');
const reasonable = document.querySelector('#reasonable');

const flexibility_trueFalse = document.querySelector('.flexibility .true-false');
const speed_trueFalse = document.querySelector('.speed .true-false');
const talent_trueFalse = document.querySelector('.talent .true-false');
const reasonable_trueFalse = document.querySelector('.reasonable .true-false');


speed.addEventListener('click', toSpeed);
flexibility.addEventListener('click', toFlexibility);
talent.addEventListener('click', toTalent);
reasonable.addEventListener('click', toReasonable);

function toSpeed() {
    reasonable.classList.remove('active')
    flexibility.classList.remove('active')
    talent.classList.remove('active')
    speed.classList.add('active')

    reasonable_trueFalse.style.display ="none";
    flexibility_trueFalse.style.display ="none";
    talent_trueFalse.style.display ="none";
    speed_trueFalse.style.display ="flex";
}
function toFlexibility() {
    reasonable.classList.remove('active')
    talent.classList.remove('active')
    speed.classList.remove('active')
    flexibility.classList.add('active')

    reasonable_trueFalse.style.display ="none";
    talent_trueFalse.style.display ="none";
    speed_trueFalse.style.display ="none";
    flexibility_trueFalse.style.display ="flex";
}
function toTalent() {
    reasonable.classList.remove('active')
    speed.classList.remove('active')
    flexibility.classList.remove('active')
    talent.classList.add('active')

    reasonable_trueFalse.style.display ="none";
    speed_trueFalse.style.display ="none";
    flexibility_trueFalse.style.display ="none";
    talent_trueFalse.style.display ="flex";
}
function toReasonable() {
    speed.classList.remove('active')
    flexibility.classList.remove('active')
    talent.classList.remove('active')
    reasonable.classList.add('active')

    speed_trueFalse.style.display ="none";
    flexibility_trueFalse.style.display ="none";
    talent_trueFalse.style.display ="none";
    reasonable_trueFalse.style.display ="flex";
}