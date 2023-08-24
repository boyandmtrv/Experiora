import { login } from "../data/user.js";
import { html } from "../lib/lit-html.js";
import { submitHandler } from "../utils.js";

const loginTemplate = (onSubmit) => html`
<section class="login-section">
    <div class="login-wrapper">
        <form @submit=${onSubmit}>
            <h1>Login</h1>
            <div class="input-box">
                <input type="text" 
                name="email" 
                placeholder="E-mail" 
                required>        
                <i class='bx bxs-envelope'></i>
            </div>
            <div class="input-box">
                <input type="password" 
                name="password" 
                placeholder="Password" 
                required>     
                <i class='bx bxs-lock-alt' ></i>   
            </div>

            <button type="submit" class="btn">Login</button>
            <div class="register-link">
                <p>Don't have an account?  &#9679  <a href="/register">//Register</a></p>
            </div>
        </form>
    </div>
</section>`;


export function loginView(ctx) {
    ctx.render(loginTemplate(submitHandler(onLogin)))

    async function onLogin({ email, password }) {
        if (email == '' || password == '') {
             return alert('All fields are required')   
        };

        await login(email, password);
        ctx.page.redirect('/notes');
    };
};