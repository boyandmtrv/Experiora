import { html } from "../lib/lit-html.js";

export const navTemplate = (hasUser) => html`
    <nav>
        <a href="/">Home</a>
        <a href="/notes">Routes</a>
        ${hasUser ? html`
            <a href="/create">Create Route</a>
            <a href="javascript:void(0)">Logout</a>
        ` : html`
            <a href="/login">Login</a>
            <a href="/register">Register</a>`}
    </nav>`;