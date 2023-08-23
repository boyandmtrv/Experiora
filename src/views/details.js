import { html, nothing } from "../lib/lit-html.js";
import * as noteService from "../data/note.js";
import * as reservationService from '../data/reservation.js'
import { submitHandler } from "../utils.js";
import { repeat } from "../lib/directives/repeat.js";

const detailsTemplate = (note, hasUser, onDelete, onBook) => html`
<article class="details-article">
    <h3>${note.name}</h3>
    <p>Location: ${note.location}</p>
    <p>Rating: ${note.rating}</p>
    <p>Description: ${note.description}</p>
    ${hasUser && !note.isOwner ? reservationForm(onBook) : nothing}
    ${note.isOwner ? html`
    <a href="/edit/${note.objectId}">Edit</a>
    <a href="javascript:void(0)" @click=${onDelete}>Delete</a>` : nothing}
    ${hasUser ? html`
        <ul>
            ${repeat(note.reservations, n => n.objectId, reservationCard)}
        </ul>
    ` : nothing}
</article>
`;

const reservationForm = (onSubmit) => html`
    <form @submit=${onSubmit}>
        <label>From <input type="date" name="startDate"></label>
        <label>To <input type="date" name="endDate"></label>
        <button>Test it now!</button>
    </form>
`;

const reservationCard = (res) => html`
    <li>From: ${res.startDate.toISOString().slice(0, 10)}
    To: ${res.endDate.toISOString().slice(0, 10)} By: ${res.owner.username}</li>
`;

export async function detailsView(ctx) {

    const id = ctx.params.id;
    const note = ctx.data;
    const hasUser = Boolean(ctx.user);
    note.isOwner = note.owner.objectId === ctx.user?.objectId;
    note.reservations = [];

    if (hasUser) {
        const result = await reservationService.getByNoteId(id);
        note.reservations = result.results
    };

    ctx.render(detailsTemplate(ctx.data, hasUser, onDelete, submitHandler(book)))

    async function onDelete() {
        const choice = confirm('Are you sure you want to take down this post?');

        if (choice) {
            await noteService.deleteById(id);
            ctx.page.redirect('/notes');
        };
    };

    async function book({ startDate, endDate }) {
        startDate = new Date(startDate)
        endDate = new Date(endDate);

        if (Number.isNaN(startDate.getDate())) {
            return alert('Please enter a valid start date')
        };

        if (Number.isNaN(startDate.getDate())) {
            return alert('Please enter a valid end date')
        };

        if (startDate >= endDate) {
            return alert('Please enter a valid date diapazon')
        };

        const reservationData = {
            startDate,
            endDate,
            note: id,
            host: ctx.data.owner.objectId
        };

        const result = await reservationService.create(reservationData, ctx.user.objectId);

        ctx.page.redirect('/notes/' + id)
    };
};
