import { html } from "../lib/lit-html.js";
 
const homeTemplate = () => html`
    <div class="content">
        <h1>Experiora.</h1>
        <p>//Find &#x2022; //Create &#x2022; //Explore the best routes in your country. <a href="/notes">Browse routes</a></p>
        <p>Any past experience? <a href="/create" >Place it right away!</a></p>
    </div>
`; 

export function homeView(ctx) {
    ctx.render(homeTemplate());
};
