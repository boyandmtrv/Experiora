import { html } from "../lib/lit-html.js";

export const navTemplate = (hasUser) => html`
<!-- <a href="#" class="logo">Experiora</a> -->

<div class="bx bx-menu-alt-left" id="menu-icon"></div>

 <nav class="navbar">
    <a href="/" class="active">
        <i class="ri-home-line"></i>
        <!-- <span class="nav-text">//Home</span> -->
    </a>
    <a href="/notes">
        <i class="ri-road-map-line"></i>
        <!-- <span class="nav-text">//Routes</span> -->
    </a>
    ${hasUser ? html`
        <a href="/create">
            <i class="ri-map-pin-add-line"></i>
            <!-- <span class="nav-text">//Create</span> -->
        </a>
        <a href="/logout">
            <i class="ri-logout-box-line"></i>
            <!-- <span class="nav-text">//Logout</span> -->
        </a>
    ` : html`
        <a href="/login">
            <i class="ri-user-line"></i>
            <!-- <span class="nav-text">//Login</span> -->
        </a>
        <a href="/register">
            <i class="ri-user-shared-2-line"></i>
            <!-- <span class="nav-text">//Register</span> -->
        </a>`}
</nav>
`;