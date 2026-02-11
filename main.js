const bar = document.getElementById("scrollbar");

const onScroll = () => {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = height > 0 ? (scrollTop / height) * 100 : 0;
    bar.style.width = progress + "%";
};

window.addEventListener("scroll", onScroll);
onScroll();

const menuButton = document.getElementById("mobile-menu-button");
const menu = document.getElementById("mobile-menu");
const menuPanel = document.getElementById("mobile-menu-panel");
const menuClose = document.getElementById("mobile-menu-close");
const menuBackdrop = document.getElementById("mobile-menu-backdrop");
const menuLinks = menu?.querySelectorAll("a");

if (menuButton && menu && menuPanel) {
    const openMenu = () => {
        menu.classList.remove("hidden");
        menu.setAttribute("aria-hidden", "false");
        menuButton.setAttribute("aria-expanded", "true");
        document.body.classList.add("overflow-hidden");
        requestAnimationFrame(() => {
            menuPanel.classList.remove("translate-x-full");
        });
    };

    const closeMenu = () => {
        menuPanel.classList.add("translate-x-full");
        menu.setAttribute("aria-hidden", "true");
        menuButton.setAttribute("aria-expanded", "false");
        document.body.classList.remove("overflow-hidden");
        setTimeout(() => {
            menu.classList.add("hidden");
        }, 300);
    };

    menuButton.addEventListener("click", () => {
        if (menu.classList.contains("hidden")) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    menuClose?.addEventListener("click", closeMenu);
    menuBackdrop?.addEventListener("click", closeMenu);
    menuLinks?.forEach((link) => link.addEventListener("click", closeMenu));

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !menu.classList.contains("hidden")) {
            closeMenu();
        }
    });
}
