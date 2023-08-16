import { html } from "../lib/lit-html.js";
import * as noteService from '../data/note.js'
import { submitHandler } from "../utils.js";

const createTemplate = (onSubmit) => html`
    <h2>Create route</h2>
    <form @submit=${onSubmit}>
        <label>Name: <input type="text" name="name"></label>
        <label>Location: <input type="text" name="location"></label>
        <label>Rating: <input type="number" name="rating"></label>
        <label>Description: <input type="text" name="description"></label>
        <button>Create Route</button>
    </form>`;

export function createView(ctx) {
    ctx.render(createTemplate(submitHandler(onSubmit)));

    async function onSubmit ({name, location, rating, description}) {
        rating = parseInt(rating);

        if (rating <= -1) {
            return alert('Rating must be a positive number')
        } else if (rating > 5) {
            return alert('Please note, the rating is between 0 and 5!')
        }

        if (name == '' || location == '' || description == '' || Number.isNaN(rating)) {
            return alert('All fields are required!');
        };

        const userId = ctx.user?.objectId;

        const result = await noteService.create({name, location, rating, description}, userId);

        ctx.page.redirect('/notes/' + result.objectId);
    };
};
