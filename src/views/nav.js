import { html } from "../lib/lit-html.js";

export const navTemplate = (hasUser) => html`
 <nav>
    <a href="/">
        <i class="ri-home-line"></i>
        <span class="nav-text">//Home</span>
    </a>
    <a href="/notes">
        <i class="ri-road-map-line"></i>
        <span class="nav-text">//Routes</span>
    </a>
    ${hasUser ? html`
        <a href="/create">
            <i class="ri-map-pin-add-line"></i>
            <span class="nav-text">//Create</span>
        </a>
        <a href="javascript:void(0)">
            <i class="ri-logout-box-line"></i>
            <span class="nav-text">//Logout</span>
        </a>
    ` : html`
        <a href="/login">
            <i class="ri-user-line"></i>
            <span class="nav-text">//Login</span>
        </a>
        <a href="/register">
            <i class="ri-user-shared-2-line"></i>
            <span class="nav-text">//Register</span>
        </a>`}
</nav>
`;

const navLinks = document.querySelectorAll('.nav-link');

// Add a click event listener to each nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove the 'active' class from all nav links
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        // Add the 'active' class to the clicked link
        link.classList.add('active');
    });
});
