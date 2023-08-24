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
        <a href="#"><i class='bx bxl-github'></i></a>
        <a href="#"><i class='bx bxl-linkedin-square'></i></a>
    </div>
</section>
    <!-- <div class="content">
        <h1>Experiora.</h1>
        <p>//Find &#x2022; //Create &#x2022; //Explore the best routes in your country. <a href="/notes">Browse routes.</a></p>
        <p>Any past experience? <a href="/create" >Place it right away!</a></p>
    </div> -->
`; 

export function homeView(ctx) {
    ctx.render(homeTemplate());
};
