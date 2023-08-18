import { html } from "../lib/lit-html.js";

export const navTemplate = (hasUser) => html`
    <nav>
        <a href="/"><i class="ri-home-line"></i></a>
        <a href="/notes"><i class="ri-road-map-line"></i></a>
        ${hasUser ? html`
            <a href="/create">Create Route</a>
            <a href="javascript:void(0)">Logout</a>
        ` : html`
            <a href="/login"><i class="ri-user-line"></i></a>
            <a href="/register"><i class="ri-user-shared-2-line"></i></a>`}
    </nav>`;