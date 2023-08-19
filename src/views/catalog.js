import { html } from "../lib/lit-html.js";
import * as noteService from '../data/note.js'
import { repeat } from '../lib/directives/repeat.js'

const catalogTemplate = (list) => html`
    ${list}
`; 

const listTemplate = (notes) => html`
    <section>
        ${repeat(notes, n => n.objectId, noteCard )}
    </section>
`;

const noteCard = (note) => html`
    <article class="note-card">
        <h3>${note.name}</h3>
        <p>Location: ${note.location}</p>
        <p>Rating: ${note.rating}</p>
        <p>Description: ${note.description}</p>
        <p><a class="action" href="/notes/${note.objectId}">View Details</a></p>
    </article>
`;

export async function catalogView(ctx) {
    ctx.render(catalogTemplate(html`<p>Loading... &hellip;</p>`));

    const { results: notes } = await noteService.getAll();

    ctx.render(catalogTemplate(listTemplate(notes)));
};
