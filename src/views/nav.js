import { html } from "../lib/lit-html.js";

export const navTemplate = (hasUser) => html`
    <nav>
        <a href="/"><i class="ri-home-line"></i></a>
        <a href="/notes"><i class="ri-road-map-line"></i></a>
        ${hasUser ? html`
            <a href="/create"><i class="ri-map-pin-add-line"></i></a>
            <a href="javascript:void(0)"><i class="ri-logout-box-line"></i></a>
        ` : html`
            <a href="/login"><i class="ri-user-line"></i></a>
            <a href="/register"><i class="ri-user-shared-2-line"></i></a>`}
    </nav>`;