function menuClick(x) {
    x.classList.toggle('menu-open');
    var menu = document.getElementsByClassName('menu')
    var submenu = menu[0].firstElementChild.lastElementChild;
    if (x.classList.contains('menu-open')) {
        menu[0].classList.add('menu-main-open');
    } else {
        menu[0].classList.remove('menu-main-open')
        submenu.style.height = null;
    }
}

function submenu(x) {
    x.classList.toggle('submenu-open')
    var submenu = x.parentElement.lastElementChild;
    if (submenu.style.height) {
        submenu.style.height = null;
        
    } else {
        submenu.style.height = submenu.scrollHeight + 'px';
    }
}

function menuClose() {
    var menuBtn = document.getElementsByClassName('menu-btn');
    var menu = document.getElementsByClassName('menu')
    var submenu = menu[0].firstElementChild.lastElementChild;
    if (menuBtn[0].classList.contains('menu-open')) {
        menuBtn[0].classList.remove('menu-open')
        menu[0].classList.remove('menu-main-open');
        submenu.style.height = null;
    }
}

var scrollHeight = window.innerHeight / 4;

window.onscroll = function() {
    var header = document.getElementsByTagName('header');
    if (document.body.scrollTop > scrollHeight || document.documentElement.scrollTop > scrollHeight) {
        if (!header[0].classList.contains("header-scroll")) {
            header[0].classList.add('header-scroll');
        }
    } else {
        if (header[0].classList.contains("header-scroll")) {
            header[0].classList.remove('header-scroll');
        }
    }
}

function consultingTabClick(x) {
    var consultingTab = document.getElementsByClassName('consulting-flow-tab');
    var consultingCard = document.getElementsByClassName('consulting-flow-card');
    var i;
    if (!consultingTab[x-1].classList.contains('consulting-flow-tab-open')) {
        consultingTab[x-1].classList.add('consulting-flow-tab-open');
        if (!consultingCard[x-1].classList.contains('consulting-flow-card-open')) {
            consultingCard[x-1].classList.add('consulting-flow-card-open');
        }
        for (i=0;i<consultingTab.length;i++) {
            if (i!=x-1) {
                if (consultingTab[i].classList.contains('consulting-flow-tab-open')) {
                    consultingTab[i].classList.remove('consulting-flow-tab-open');
                    if (consultingCard[i].classList.contains('consulting-flow-card-open')) {
                        consultingCard[i].classList.remove('consulting-flow-card-open');
                    }
                }
            }
        }
    }
}

function faqClick(x) {
    x.parentElement.classList.toggle('faq_show');
    var faq = document.getElementsByClassName('faq_card');
    var i;
    for(i = 0; i< faq.length; i++) {
        if (faq[i] != x.parentElement) {
            if (faq[i].classList.contains('faq_show')) {
                faq[i].classList.remove('faq_show');
                faq[i].lastElementChild.style.maxHeight = null;
            }
        }
    }
    if (x.parentElement.classList.contains('faq_show')) {
        x.parentElement.lastElementChild.style.maxHeight = x.parentElement.lastElementChild.scrollHeight + 'px';
    }
    if (!x.parentElement.classList.contains('faq_show')) {
        x.parentElement.lastElementChild.style.maxHeight = null;
    }
  }