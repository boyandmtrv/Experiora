import { html } from "../lib/lit-html.js";
import * as noteService from '../data/note.js'
import { submitHandler } from "../utils.js";

const createTemplate = (onSubmit) => html`
<div class="create-box">
        <form @submit=${onSubmit}>
        <div class="input-create-box">
        <input type="text" name="name" placeholder="Route-name" required>
        </div>
        <div class="input-create-box">
            <input type="text" name="location" placeholder="Location" required>    
        </div>
        <div class="input-create-box">
            <input type="number" name="rating" placeholder="Rating" required>    
        </div>
        <div class="input-create-box">
            <textarea name="description" placeholder="Description" required></textarea>
        </div>
            <button class="create-btn">Create route</button>
            <div class="create-link">
                <p>If you would like to browse routes, please click &#x2022 <a href="/notes">//Here</a></p>
            </div>
        </form>
</div>`;

export function createView(ctx) {
    ctx.render(createTemplate(submitHandler(onSubmit)));

    async function onSubmit ({name, location, rating, description}) {
        rating = parseInt(rating);

        if (rating <= -1) {
            return alert('Rating must be a positive number')
        } else if (rating > 5) {
            return alert('Please note, the rating is between 0 and 5!')
        };
        
        if (name == '' || location == '' || description == '' || Number.isNaN(rating)) {
            return alert('All fields are required!');
        };

        const userId = ctx.user?.objectId;

        const result = await noteService.create({name, location, rating, description}, userId);

        ctx.page.redirect('/notes/' + result.objectId);
    };
};
