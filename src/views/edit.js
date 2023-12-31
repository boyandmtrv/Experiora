import { html } from "../lib/lit-html.js";
import * as noteService from '../data/note.js'
import { submitHandler } from "../utils.js";

const editTemplate = (note, onSubmit) => html`
<section class="create-section">
    <div class="create-wrapper">
            <form @submit=${onSubmit}>
            <div class="input-box">
            <input type="text" name="name" .value="${note.name}" placeholder="Route-name" required>
            </div>
            <div class="input-box">
                <input type="text" name="location" .value="${note.location}" placeholder="Location" required>    
            </div>
            <div class="input-box">
                <input type="number" name="rating" .value="${note.rating}" placeholder="Rating" min="1" max="5" step="any" required>    
            </div>
            <div class="input-box">
                <textarea name="description" .value="${note.description}" placeholder="Description" required></textarea>
            </div>
            <div class="input-box">
                 <label class="ready" for="readyForTest">Would you like to open this route?</label>
            <input class="custom-checkbox" type="checkbox" name="readyForTest" .checked="${note.readyForTest}">    

</div>

                <button type="submit" class="btn">Save changes</button>
                <div class="create-link">
                    <p>Change your mind? No worries, please click to return &#x2022 <a href="/notes">//Here</a></p>
                </div>
            </form>
        </div>
</section>`;

export function editView(ctx) {
    const id = ctx.params.id;

    ctx.render(editTemplate(ctx.data, submitHandler(onSubmit)));

    async function onSubmit({ name, location, rating, description, readyForTest }) {
        rating = Number(rating);
        readyForTest = Boolean(readyForTest)

        if (rating <= -1) {
            return alert('Rating must be a positive number')
        } else if (rating > 5) {
            return alert('Please note, the rating is between 0 and 5!')
        };

        if (name == '' || location == '' || description == '' || Number.isNaN(rating)) {
            return alert('All fields are required!');
        };

        const userId = ctx.user.objectId;

        await noteService.update(id, { name, location, rating, description, readyForTest }, userId);

        ctx.page.redirect('/notes/' + id);
    };

};
