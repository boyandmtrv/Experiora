import { html } from "../lib/lit-html.js";
 
const homeTemplate = () => html`
    <h1>Welcome to Experiora.</h1>
    <p>Find and create the best routes in your country. <a href="/notes">Browse routes</a></p>
    <p>Any past experience? <a href="/create">Place it right away!</a></p>
`; 

export function homeView(ctx) {
    ctx.render(homeTemplate());
};
