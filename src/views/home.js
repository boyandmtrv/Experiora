import { html } from "../lib/lit-html.js";
 
const homeTemplate = () => html`

<section class="home" id="home">
    <div class="home-content">
        <h1>Experiora <span>.</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente modi adipisci possimus saepe deleniti accusamus ipsam quibusdam similique maxime atque, vel assumenda autem quis odit, cum ea sunt ex.</p>

        <div class="btn-box">
            <a href="/notes" class="btn">Browse routes</a>
            <a href="/create" class="btn">Create route</a>
        </div>
    </div>

    <div class="home-sci">
        <a href="https://github.com/boyandmtrv"><i class='bx bxl-github'></i></a>
        <a href="#"><i class='bx bxl-linkedin-square'></i></a>
    </div>
</section>
`; 

export function homeView(ctx) {
    ctx.render(homeTemplate());
};
