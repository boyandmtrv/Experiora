import { login } from "../data/user.js";
import { html } from "../lib/lit-html.js";
import { submitHandler } from "../utils.js";

const loginTemplate = (onSubmit) => html`
<section>
    <div class="form-box">
        <div class="form-value">
            <form @submit=${onSubmit}>
                <h2>Login</h2>
                <div class="input-box">
                    <input type="text" 
                    name="email" placeholder="E-mail" 
                    required>
                </div>
                <div class="input-box">
                    <input type="text" 
                    name="password" 
                    placeholder="Password" 
                    required>    
                </div>
            </form>
        </div>
    </div>
</section>
<div class="login-box">
        <form @submit=${onSubmit}>
        <div class="input-box">
        <input type="text" name="email" placeholder="E-mail" required>
        </div>
        <div class="input-box">
            <input type="text" name="password" placeholder="Password" required>    
        </div>
            <button class="login-btn">Login</button>
            <div class="register-link">
                <p>Don't have an account &#x2022 <a href="/register">//Register</a></p>
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