import { html } from "../lib/lit-html.js";
import { classMap } from "../lib/directives/class-map.js";
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
    <article class=${classMap({'note-card': true, 'own-note': note.isOwner})}>
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

    if (ctx.user) {
        notes.forEach(n => n.isOwner = n.owner.objectId == ctx.user.objectId)
    };

    ctx.render(catalogTemplate(listTemplate(notes)));
};
