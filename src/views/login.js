import { login } from "../data/user.js";
import { html } from "../lib/lit-html.js";
import { submitHandler } from "../utils.js";

const loginTemplate = (onSubmit) => html`
<div class="login-box">
        <form @submit=${onSubmit}>
        <div class="input-box">
        <input type="text" name="email" placeholder="E-mail" required>
        </div>
        <div class="input-box">
            <input type="text" name="password" placeholder="Password" required>    
        </div>
        <div class="remember-forgot">
            <label><input type="checkbox">Remember me</label>
        </div>
            <button class="login-btn">Login</button>
            <div class="register-link">
                <p>Don't have an account <a href="/register">Register</a></p>
            </div>
        </form>
</div>`;


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