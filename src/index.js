import { render as mainPage } from "./pages/main";
import { render as test1 } from "./pages/test1";
import { render as test2 } from "./pages/test2";
import { render as test3 } from "./pages/test3";
import { render as test4 } from "./pages/test4";
import { render as test5 } from "./pages/test5";
import { render as test6 } from "./pages/test6";
import { render as test7 } from "./pages/test7";
import { render as test8 } from "./pages/test8";
import { render as test9 } from "./pages/test9";
import { render as test10 } from "./pages/test10";
import { render as test11 } from "./pages/test11";
import { render as test12 } from "./pages/test12";
import { render as test13 } from "./pages/test13";
import { render as results } from "./pages/results";
import "./style.css";
import Header from "./components/header/header";

const header = document.querySelector(".header");

header.append(new Header().render());

const root = document.getElementById("content");

const routes = {
    "/": mainPage,
    "/test1": test1,
    "/test2": test2,
    "/test3": test3,
    "/test4": test4,
    "/test5": test5,
    "/test6": test6,
    "/test7": test7,
    "/test8": test8,
    "/test9": test9,
    "/test10": test10,
    "/test11": test11,
    "/test12": test12,
    "/test13": test13,
    "/results": results,
};

const renderRoute = (route) => {
    root.innerHTML = routes[route]();
};

const navigateTo = (route) => {
    window.history.pushState(null, null, route);
    renderRoute(route);
};

document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        navigateTo(link.getAttribute("href"));
    });
});

window.addEventListener("popstate", () => {
    renderRoute(window.location.pathname);
});

renderRoute(window.location.pathname);

/* const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__nav");
const closeBtn = document.querySelector(".header__close-btn");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.add("hidden");
    menu.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    menuBtn.classList.remove("hidden");
    menu.classList.remove("open");
}); */
