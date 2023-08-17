import { html } from "../lib/lit-html.js";
 
const homeTemplate = () => html`
    <div class="content">
        <h1>Welcome to Experiora.</h1>
        <p>Find and create the best routes in your country. <a href="/notes" class="route-link">Browse routes</a></p>
        <p>Any past experience? <a href="/create" class="create-link">Place it right away!</a></p>
    </div>
`; 

export function homeView(ctx) {
    ctx.render(homeTemplate());
};
