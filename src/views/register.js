import { register } from "../data/user.js";
import { html } from "../lib/lit-html.js";
import { submitHandler } from "../utils.js";

const registerTemplate = (onSubmit) => html`
<section class="login-section">
    <div class="login-wrapper">
        <form @submit=${onSubmit}>
        <h1>Register</h1>
        <div class="input-box">
                <input type="text" 
                name="email" 
                placeholder="E-mail" 
                required>        
                <i class='bx bxs-envelope'></i>
            </div>

            <div class="input-box">
                <input type="text" 
                name="username" 
                placeholder="Username" 
                required>        
                <i class='bx bxs-user-circle'></i>
            </div>
    
            <div class="input-box">
                <input type="password" 
                name="password" 
                placeholder="Password" 
                required>     
                <i class='bx bxs-lock-alt'></i>   
            </div>

            <div class="input-box">
                <input type="password" 
                name="repass" 
                placeholder="Repeat Password" 
                required>     
                <i class='bx bxs-edit-alt'></i>  
            </div>

            <button type="submit" class="btn">Register</button>

            <div class="register-link">
                <p>Already registered?  &#9679  <a href="/login">//Login</a></p>
            </div>
        </form>
    </div>
</section>`;


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