class Header {
    constructor() {
        this.menuBtn = document.createElement("button");
        this.menu = document.createElement("nav");
        this.closeBtn = document.createElement("button");
        this.mainLink = document.createElement("li");
        this.infoLink = document.createElement("li");
        this.testLink = document.createElement("li");
        this.addListeners();
    }

    addListeners() {
        this.menuBtn.addEventListener("click", this.openMenu.bind(this));
        this.closeBtn.addEventListener("click", this.closeMenu.bind(this));
        this.mainLink.addEventListener('click', this.closeMenu.bind(this));
        this.infoLink.addEventListener('click', this.closeMenu.bind(this));
        this.testLink.addEventListener('click', this.closeMenu.bind(this));
    }

    openMenu() {
        this.menuBtn.classList.add("hidden");
        this.menu.classList.add("open");
    }

    closeMenu() {
        this.menuBtn.classList.remove("hidden");
        this.menu.classList.remove("open");
    }

    render() {
        const header = document.querySelector(".header");
        const menuItems = document.createElement("ul");

        this.menuBtn.className = "header__menu-btn";
        this.menu.className = "header__nav";
        menuItems.className = "header__menu";
        this.mainLink.className = "header__menu-item";
        this.infoLink.className = "header__menu-item";
        this.testLink.className = "header__menu-item";
        this.closeBtn.className = "header__close-btn";

        this.menuBtn.innerHTML = `
            <span class="header__menu-btn-line"></span>
            <span class="header__menu-btn-line"></span>
            <span class="header__menu-btn-line"></span>
        `;
        this.closeBtn.innerHTML = `
            <span class="header__close-btn-line"></span>
            <span class="header__close-btn-line"></span>
        `;
        this.mainLink.innerHTML = `<a href="/">ГЛАВНАЯ</a>`;
        this.infoLink.innerHTML = `<a href="/">ИНФОРМАЦИЯ О ТЕСТЕ</a>`;
        this.testLink.innerHTML = `<a href="/test1">ПРОЙТИ ТЕСТ</a>`;

        menuItems.append(this.mainLink, this.infoLink, this.testLink);
        this.menu.append(menuItems, this.closeBtn);
        header.append(this.menuBtn, this.menu);
    }
}

export default Header;
