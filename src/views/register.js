import { register } from "../data/user.js";
import { html } from "../lib/lit-html.js";
import { submitHandler } from "../utils.js";

const registerTemplate = (onSubmit) => html`
    <div class="register-box">
        <form @submit=${onSubmit}>
        <div class="input-register-box">
        <input type="text" name="email" placeholder="E-mail" required>
        </div>
        <div class="input-register-box">
            <input type="text" name="username" placeholder="Username" required>    
        </div>
        <div class="input-register-box">
            <input type="text" name="password" placeholder="Password" required>    
        </div>
        <div class="input-register-box">
            <input type="text" name="repass" placeholder="Repeat Password" required>    
        </div>
            <button class="register-btn">Register</button>
            <div class="login-link">
                <p>Already registered? &#x2022 <a href="/login">//Login</a></p>
            </div>
        </form>
</div>`;


export function registerView(ctx) {
    ctx.render(registerTemplate(submitHandler(onRegister)))

    async function onRegister({ email, username, password, repass}) {
        if (email == '' || username == '' || password == '' || repass == '') {
             return alert('All fields are required')   
        };

        if (password !== repass) {
            return alert('Passwords must match!')  
        };

        await register(email, username, password);
        ctx.page.redirect('/notes');
    };
};